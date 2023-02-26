import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OtpvalidateComponent } from './otpvalidate/otpvalidate.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'home', component: UserComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'otpvalidate', component: OtpvalidateComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
