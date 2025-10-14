import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app').then((m) => m.App),
        canActivate: [authGuard]
    },
    { 
        path: '**', 
        loadComponent: () => import('./shared/pages/not-found/not-found').then((m) => m.NotFound)
     }
];
