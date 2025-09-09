// src/app/routes.ts (или где у вас определены маршруты)
import { Routes } from '@angular/router';
import { EroutesConstants } from '../routes';
import { AuthGuard } from '../entity';

export const authRoutes: Routes = [
  {
    path: EroutesConstants.LOGIN,
    loadComponent: () => import('../pages/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: EroutesConstants.WILDCARD,
    redirectTo: EroutesConstants.LOGIN,
    pathMatch: 'full',
  },
];

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

export const clientRoutes: Routes = [
  {
    path: EroutesConstants.CLIENT_PANEL,
    loadComponent: () => import('../pages/clients/clients.component').then((m) => m.ClientsComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.CLIENT_LIST,
        pathMatch: 'full',
      },
      // {
      //   path: EroutesConstants.CLIENT_LIST,
      //   loadComponent: () =>
      //     import('../pages/client/client-list/client-list.component').then(
      //       (m) => m.ClientListComponent
      //     ),
      // },
    ],
  },
];

export const notificationRoutes: Routes = [
  {
    path: EroutesConstants.NOTIFICATION_PANEL,
    loadComponent: () =>
      import('../pages/notifications/notifications.component').then((m) => m.NotificationsComponent),
  },
];

export const fileRoutes: Routes = [
  {
    path: EroutesConstants.FILE_PANEL,
    loadComponent: () => import('../pages/file/file.component').then((m) => m.FileComponent),
  },
];

export const adminRoutes: Routes = [
  {
    path: EroutesConstants.ADMIN_PANEL,
    canActivate: [AuthGuard],
    loadComponent: () => import('../pages/admin-panel/admin-panel.component').then((m) => m.AdminPanelComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.ADMIN_PANEL,
        pathMatch: 'full',
      },
      // {
      //   path: EroutesConstants.ADMIN_USER_LIST,
      //   loadComponent: () =>
      //     import('../pages/admin/admin-users/admin-users.component').then(
      //       (m) => m.AdminUsersComponent
      //     ),
      // },
    ],
  },
];

export const mainRoutes: Routes = [
  { path: '', redirectTo: EroutesConstants.HOME_PAGE, pathMatch: 'full' },
  {
    path: EroutesConstants.HOME_PAGE,
    loadComponent: () => import('../pages/main/main.component').then((c) => c.MainComponent),
  },
  ...userRoutes,
  ...clientRoutes,
  ...notificationRoutes,
  ...fileRoutes,
  ...adminRoutes,
  { path: '**', redirectTo: EroutesConstants.HOME_PAGE },
];

export const appRoutes: Routes = [
  {
    path: EroutesConstants.AUTH,
    children: authRoutes,
  },
  {
    path: EroutesConstants.MAIN,
    canActivate: [AuthGuard],
    loadComponent: () => import('../pages/main/main.component').then((c) => c.MainComponent),
    children: mainRoutes,
  },
  { path: '', redirectTo: EroutesConstants.MAIN, pathMatch: 'full' },
  { path: '**', redirectTo: EroutesConstants.AUTH },
];
