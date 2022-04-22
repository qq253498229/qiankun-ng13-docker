import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './common/empty/empty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const THIRD_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];
const NG_ZORRO_MODULES: any[] = [
  // IconsProviderModule,
  // NzLayoutModule,
  // NzFormModule,
  // NzMenuModule,
  // NzButtonModule,
  // NzTableModule,
  // NzDividerModule,
  // NzInputModule,
  // NzSelectModule,
  // NzMessageModule,
];
const COMPONENTS: any[] = [
  EmptyComponent,
];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];
const HTTP_INTERCEPTOR_LIST: any[] = [
  // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];


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
  providers: [
    ...HTTP_INTERCEPTOR_LIST,
  ],
})
export class SharedModule {
}
