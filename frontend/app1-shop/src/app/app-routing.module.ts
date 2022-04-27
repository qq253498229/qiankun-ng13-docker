import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './shared/components/empty/empty.component';

const routes: Routes = [
  {path: '', redirectTo: 'goods', pathMatch: 'full'},
  {path: 'goods', loadChildren: () => import('./pages/goods/goods.module').then(m => m.GoodsModule)},
  {path: 'seller', loadChildren: () => import('./pages/seller/seller.module').then(m => m.SellerModule)},
  {path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)},
  {path: 'collect', loadChildren: () => import('./pages/collect/collect.module').then(m => m.CollectModule)},
  {path: '**', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {
}
