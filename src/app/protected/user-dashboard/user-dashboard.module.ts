import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class UserDashboardModule { }
