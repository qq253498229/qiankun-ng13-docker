import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './common/empty/empty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


const THIRD_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];
const NG_ZORRO_MODULES: any[] = [
  NzLayoutModule,
  NzFormModule,
  NzMenuModule,
  NzButtonModule,
  NzTableModule,
  NzDividerModule,
  NzInputModule,
  NzSelectModule,
  NzMessageModule,
  NzIconModule,
  NzBreadCrumbModule,
];
const COMPONENTS: any[] = [
  EmptyComponent,
];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];


@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    ...THIRD_MODULES,
    ...NG_ZORRO_MODULES,
  ],
  exports: [
    ...THIRD_MODULES,
    ...NG_ZORRO_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
