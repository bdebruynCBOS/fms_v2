import { inject, Injectable, signal } from '@angular/core';
import { IUserContext } from '../interfaces/user';
import { Roles } from '../enum/enums';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userContext = signal<IUserContext | null>(null);
  currentRoute = signal<string>("");
  roles = Roles;
  userFetched = signal<boolean>(false);

  private location = inject(Location);
  private router = inject(Router);
  constructor() {
    this.currentRoute.set(this.location.path());
  }

  goToDefaultRoute() {
    const currentRoute = this.currentRoute();
    const defaultRoute = this.userContext()?.defaultRoute;
    
    if (currentRoute !== defaultRoute && currentRoute !== '/auth-callback' && currentRoute !== '') {
      this.router.navigate([currentRoute]);
    } else {
      this.currentRoute.update(() => defaultRoute ?? "");
      this.router.navigate([defaultRoute]);
    }
  }

  goToMatters() {
    this.router.navigate(['matterstoattend']);
  }

  /**
   * Checks if the current user has at least one of the specified roles.
   * @param roleBW Array of role numbers to check against the user's roles.
   * @returns True if the user has access, otherwise false.
   */
  hasAccess(roleBW: number[]): boolean {
    const userRoles = this.userContext()?.roles;
    
    if (!userRoles || userRoles.length === 0) {
      return false;
    }
    return roleBW.some(role => userRoles.includes(role));
  }

}

