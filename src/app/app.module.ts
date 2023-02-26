import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'; // importing the http module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { SignupComponent } from './signup/signup.component';
import { OtpvalidateComponent } from './otpvalidate/otpvalidate.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    OtpvalidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
