import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { UserDashboardComponent } from
'./shared/components/users/user-dashboard/user-dashboard.component';

import { UserDetailsComponent } from './shared/components/users/user-details/user-details.component';
import { UserCardComponent } from './shared/components/users/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "src/app/app-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MaterialModule } from './shared/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { ProductDashboardComponent } from './shared/components/products/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ProductDetailsComponent } from './shared/components/products/product-details/product-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    UserDetailsComponent,
   UserDashboardComponent,
    UserCardComponent,
    GetConfirmComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
