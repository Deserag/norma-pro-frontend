import { Routes } from '@angular/router';
import { EroutesConstants } from '../routes';

export const routes: Routes = [];

export const userRoutes: Routes = [
  {
    path: EroutesConstants.USER_PANEL,
    loadComponent: () => import('../pages/user/user.component').then((m) => m.UserComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.USER_LIST,
        pathMatch: 'full',
      },
      {
        path: EroutesConstants.USER_LIST,
        loadComponent: () =>
          import('../pages/user/user-list/user-list.component').then((m) => m.UserListComponent),
      },
    ],
  },
];
export const clientRoutes: Routes = [];
export const notificationRoutes: Routes = [];
export const fileRoutes: Routes = [];
export const adminRoutes: Routes = [];
export const authRoutes: Routes = [];
export const appRoutes: Routes = [
  {
    path: EroutesConstants.AUTH,
    loadChildren: () => authRoutes,
  },
  {
    path: EroutesConstants.MAIN,
    // canActivate: [AuthGuard],
    loadComponent: () => import('../pages/main/main.component').then((c) => c.MainComponent),
    loadChildren: () => mainRoutes,
  },
];

export const mainRoutes: Routes = [
  { path: '', redirectTo: EroutesConstants.HOME_PAGE, pathMatch: 'full' },
  {
    path: EroutesConstants.HOME_PAGE,
    loadComponent: () => import('../pages/main/main.component').then((c) => c.MainComponent),
  },
  ...userRoutes,
  ...adminRoutes,
  ...clientRoutes,
];
