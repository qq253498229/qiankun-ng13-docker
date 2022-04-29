import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyComponent } from './shared/components/empty/empty.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { SharedModule } from './shared/shared.module';

registerLocaleData(zh);

const routes: Routes = [
  {path: '', redirectTo: 'goods', pathMatch: 'full'},
  {
    path: 'goods',
    loadChildren: () => import('./pages/goods/goods.module').then(m => m.GoodsModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: 'seller', loadChildren: () => import('./pages/seller/seller.module').then(m => m.SellerModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule),
    canActivateChild: [AuthGuard],
  },
  {
    path: 'collect', loadChildren: () => import('./pages/collect/collect.module').then(m => m.CollectModule),
    canActivateChild: [AuthGuard],
  },
  {path: '**', component: EmptyComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    // @ts-ignore
    {provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/base/shop' : '/shop'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
