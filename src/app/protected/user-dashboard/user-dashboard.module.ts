import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [ProfileComponent],
  providers: [
    // ProfileService
  ]
})
export class UserDashboardModule { }
