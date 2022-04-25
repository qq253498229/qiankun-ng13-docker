import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const THIRD_MODULES: any[] = [
  FormsModule,
  HttpClientModule,
];
// const NG_ZORRO_MODULES: any[] = [
//   NzLayoutModule,
//   NzMenuModule,
//   NzIconModule,
// ];
const COMPONENTS: any[] = [];
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
    // ...NG_ZORRO_MODULES,
  ],
  exports: [
    ...THIRD_MODULES,
    // ...NG_ZORRO_MODULES,
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {
}
