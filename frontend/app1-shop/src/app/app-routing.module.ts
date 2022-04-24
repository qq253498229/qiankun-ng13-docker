import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './shared/common/empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'goods'},
  {path: 'goods', loadChildren: () => import('./pages/goods/goods.module').then(m => m.GoodsModule)},
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // @ts-ignore
    {provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/shop' : '/'},
  ],
})
export class AppRoutingModule {
}
