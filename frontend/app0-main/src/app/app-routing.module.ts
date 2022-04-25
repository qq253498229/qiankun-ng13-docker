import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './shared/components/empty-route/empty-route.component';

const routes: Routes = [
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
  },
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
