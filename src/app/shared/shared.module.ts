import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAvailablePipe } from './pipes/filter-available.pipe';
// import { ForbiddenValidatorDirective } from './directives/forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilterAvailablePipe,
    // ForbiddenValidatorDirective
  ],
  exports: [
    FilterAvailablePipe,
    // ForbiddenValidatorDirective
  ]
})
export class SharedModule { }
