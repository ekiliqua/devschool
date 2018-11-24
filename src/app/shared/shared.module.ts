import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterAvailablePipe } from './pipes/filter-available.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilterAvailablePipe
  ],
  exports: [
    FilterAvailablePipe
  ]
})
export class SharedModule { }
