import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const angularModules = [
  FormsModule,
  BrowserModule,
];

const appModules = [
  CoreModule,
  SharedModule,
  AppRoutingModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...angularModules,
    ...appModules
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
