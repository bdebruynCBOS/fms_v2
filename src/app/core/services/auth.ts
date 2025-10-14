import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User, UserManager, UserManagerSettings } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private manager: UserManager = new UserManager(getClientSettings());
  user = signal<User | null>(null);

  constructor() {
    const key = `oidc.user:${environment.authority}:${environment.client_id}`;
    const userCache = sessionStorage.getItem(key) ?? null;

    if(userCache !== null) {
      this.user.update(() => JSON.parse(userCache));
    }

    if(!this.user()) {
      this.manager.getUser().then(user => this.user.update(() => user));
    }
  }

  isLoggedIn(): boolean {
    const user = this.user();

    if(user == null) {
      return false;
    }

    return !user.expired;
  }

  getUser() {
    return this.manager.getUser();
  }

  getClaims() {
    return this.user()?.profile;
  }

  getAuthorizationHeaderValue() {
    const user = this.user();
    
    if(!user) {
      return null;
    }

   return `${user.token_type} ${user.access_token}`;
  }

  startAuthentication() {
    return this.manager.signinRedirect();
  }

  endAuthentication() {
    this.user.update(() => null);
    this.manager.clearStaleState();

    return this.manager.signoutRedirect()
  }

  async completeAuthentication() {
    const user = await this.manager.signinRedirectCallback();

    this.user.update(() => user);
  }

}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: environment.authority,
    client_id: environment.client_id,
    redirect_uri: environment.redirect_uri,
    post_logout_redirect_uri: environment.post_logout_redirect_uri,
    response_type: 'id_token token',
    scope: 'openid profile supaquick_api supaquick_signalr',
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: environment.silent_redirect_uri
  };
}
