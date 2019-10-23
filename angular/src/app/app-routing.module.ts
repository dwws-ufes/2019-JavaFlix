import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [LoginGuard],
    data: {
      title: 'Get Started',
    },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'shows',
        loadChildren: './show/show.module#ShowModule',
        data: {
          title: 'Shows'
        }
      },
      {
        path: 'categories',
        loadChildren: './category/category.module#CategoryModule',
        data: {
          title: 'Categories'
        }
      }
    ],
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoginGuard],
    data: {
      customLayout: true
    }
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule',
    canActivate: [LoginGuard],
    data: {
      customLayout: true
    }
  },
  {
    path: 'forgot-password',
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule',
    canActivate: [LoginGuard],
    data: {
      customLayout: true
    }
  },
  {
    path: 'reset-password',
    loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
    canActivate: [LoginGuard],
    data: {
      customLayout: true
    }
  },
  // {
  //   path: '**',
  //   redirectTo: '/'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
