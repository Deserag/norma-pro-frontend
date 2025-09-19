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
    canActivate: [AuthGuard],
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

export const orderRoutes: Routes = [
  {
    path: EroutesConstants.ORDERS_PANEL,
    canActivate: [AuthGuard],
    loadComponent: () => import('../pages/order/order.component').then((m) => m.OrderComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.ORDERS_PANEL,
        pathMatch: 'full',
      },
      {
        path: EroutesConstants.ORDER_LIST,
        loadComponent: () =>
          import('../pages/order/order-list/order-list').then((m) => m.OrderList),
      },
      {
        path: EroutesConstants.ORDER_PAGE,
        loadComponent: () =>
          import('../pages/order/order-page/order-page').then((m) => m.OrderPage),
      },
    ],
  },
];

export const personalAccount: Routes = [
  {
    path: EroutesConstants.PERSONAL_ACCOUNT,
    canActivate: [AuthGuard],
    loadComponent: () => import('../pages/personal-account/personal-account.component').then((m) => m.PersonalAccountComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.PERSONAL_ACCOUNT,
        pathMatch: 'full',
      },
    ]
  }
];

export const clientRoutes: Routes = [
  {
    path: EroutesConstants.CLIENT_PANEL,
    canActivate: [AuthGuard],
    loadComponent: () => import('../pages/clients/clients.component').then((m) => m.ClientsComponent),
    children: [
      {
        path: '',
        redirectTo: EroutesConstants.CLIENT_LIST,
        pathMatch: 'full',
      },
      {
        path: EroutesConstants.CLIENT_LIST,
        loadComponent: () => import('../pages/clients/client-list/client-list').then((m) => m.ClientList),
      },
      {
        path: EroutesConstants.CLIENT_PAGE,
        loadComponent: () => import('../pages/clients/client-page/client-page').then((m) => m.ClientPage),
      },
      {
        path: EroutesConstants.CLIENT_USERS,
        loadComponent: () => import('../pages/clients/client-users/client-users').then((m) => m.ClientUsers),
      },
    ],
  },
];

export const notificationRoutes: Routes = [
  {
    path: EroutesConstants.NOTIFICATION_PANEL,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('../pages/notifications/notifications.component').then((m) => m.NotificationsComponent),
  },
];

export const fileRoutes: Routes = [
  {
    path: EroutesConstants.FILE_PANEL,
    canActivate: [AuthGuard],
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
        redirectTo: EroutesConstants.ADMIN_USER_LIST,
        pathMatch: 'full',
      },
      {
        path: EroutesConstants.ADMIN_USER_LIST,
        loadComponent: () => import('../pages/admin-panel/panel-user/panel-user').then((m) => m.PanelUser),
      },
      {
        path: EroutesConstants.ADMIN_FILES_LIST,
        loadComponent: () => import('../pages/admin-panel/panel-file/panel-file').then((m) => m.PanelFile),
      },
      {
        path: EroutesConstants.ADMIN_ORDERS_LIST,
        loadComponent: () => import('../pages/admin-panel/panel-order/panel-order').then((m) => m.PanelOrder),
      },
      {
        path: EroutesConstants.ADMIN_CLIENTS_LIST,
        loadComponent: () => import('../pages/admin-panel/panel-client/panel-client').then((m) => m.PanelClient),
      },
      {
        path: EroutesConstants.ADMIN_ROLES_LIST,
        loadComponent: () => import('../pages/admin-panel/panel-user-role/panel-user-role').then((m) => m.PanelUserRole),
      },
    ],
  },
];

export const mainRoutes: Routes = [
  { path: '', redirectTo: EroutesConstants.HOME_PAGE, pathMatch: 'full' },
  {
    path: EroutesConstants.HOME_PAGE,
    loadComponent: () => import('../pages/work-page/work-page').then((c) => c.WorkPage),
  },
  ...userRoutes,
  ...clientRoutes,
  ...notificationRoutes,
  ...fileRoutes,
  ...adminRoutes,
  ...personalAccount,
  ...orderRoutes,
];

export const appRoutes: Routes = [
  {
    path: EroutesConstants.AUTH,
    children: authRoutes,
  },
  {
    path: EroutesConstants.MAIN,
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('../pages/main/main.component').then(
        (c) => c.MainComponent
      ),
    loadChildren: () => mainRoutes,
  },

  {
    path: EroutesConstants.AUTH,
    loadChildren: () => authRoutes,
  },
  {
    path: '**',
    redirectTo: EroutesConstants.MAIN,
  },

];