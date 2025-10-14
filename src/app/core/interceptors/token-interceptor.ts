import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authValue = authService.getAuthorizationHeaderValue();
  const hasFormData = req.body instanceof FormData;

  if (!authValue) {
    return next(req);
  }

  req = req.clone({
    setHeaders: {
      Authorization: authValue
    }
  });

  if (!hasFormData) {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  return next(req);
};
