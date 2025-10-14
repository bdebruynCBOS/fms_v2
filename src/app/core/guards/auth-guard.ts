import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const userLoggedIn = authService.isLoggedIn();

  if (!userLoggedIn) {
    await authService.startAuthentication();
    sessionStorage.setItem('returnUrl', state.url);
  }

  return true;
};
