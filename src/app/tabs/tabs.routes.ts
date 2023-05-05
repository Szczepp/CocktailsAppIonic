import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadComponent: () =>
          import('../Home/Home.page').then((m) => m.Home),
      },
      {
        path: 'Search',
        loadComponent: () =>
          import('../Search/Search.page').then((m) => m.Search),
      },
      {
        path: 'Courses',
        loadComponent: () =>
          import('../Courses/Courses.page').then((m) => m.Courses),
      },
      {
        path: 'Profile',
        loadComponent: () =>
          import('../Profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full',
  },
];
