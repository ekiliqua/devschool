import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  declarations: [NewComponentComponent]
})
export class ProtectedModule { }
