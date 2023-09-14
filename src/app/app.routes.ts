import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.page').then( m => m.UsersPage)
  },
  {
     path: 'users/:id', loadChildren: () => import('./users/users.page').then(m => m.UsersPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'cocktail-details',
    loadComponent: () => import('./Search/cocktail-details/cocktail-details.page').then( m => m.CocktailDetailsPage)
  },  {
    path: 'add-course',
    loadComponent: () => import('./add-course/add-course.page').then( m => m.AddCoursePage)
  },




];
