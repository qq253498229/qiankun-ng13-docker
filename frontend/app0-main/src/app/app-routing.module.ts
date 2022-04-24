import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './shared/common/empty/empty.component';

const routes: Routes = [
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)},
  {path: '**', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
