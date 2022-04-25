import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: 'order', pathMatch: 'full'},
  {
    path: 'goods',
    loadChildren: () => import('./pages/goods/goods.module').then(m => m.GoodsModule),
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule),
  },
  {
    path: 'collect',
    loadChildren: () => import('./pages/collect/collect.module').then(m => m.CollectModule),
  },
  {path: '**', component: EmptyRouteComponent},
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
