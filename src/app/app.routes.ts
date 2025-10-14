import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/app').then((m) => m.AppLayout),
        canActivate: [authGuard]
    },
    {
        path: 'auth-callback',
        loadComponent: () => import('./core/pages/auth-callback/auth-callback').then((m) => m.AuthCallback),
    },
    { 
        path: '**', 
        loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound)
    }
];
