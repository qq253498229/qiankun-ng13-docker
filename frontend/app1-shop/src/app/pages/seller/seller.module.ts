import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { GoodsComponent } from './goods/goods.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path: '', redirectTo: 'goods'},
  {path: 'goods', component: GoodsComponent},
  {path: 'store', component: StoreComponent},
];

@NgModule({
  declarations: [
    StoreComponent,
    GoodsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class SellerModule {
}
