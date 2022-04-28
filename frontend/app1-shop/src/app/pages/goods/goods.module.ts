import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'list'},
  {path: 'list', component: ListComponent},
  {path: 'details', component: DetailsComponent},
];

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class GoodsModule {
}
