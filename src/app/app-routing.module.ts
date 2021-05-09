import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'
import { AuthGuard } from './core/guards/auth/auth.guard'
const routes: Routes = [
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'
  },
  {
    path : 'auth',
    loadChildren : () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate : [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
