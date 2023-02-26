import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private _router: Router) {}

  ngOnInit(): void {
  }
  email = "";
  password = "";
  url = "http://localhost:8080/login";
  login(){
    let httpHeaders = new HttpHeaders()
                         .set('Access-Control-Allow-Origin', '*');
    let httpParams = new HttpParams().set("email", this.email).set("password", this.password);
    this.http.get(this.url, {
      headers: httpHeaders,
      params: httpParams,
    }).subscribe((data: any) => { console.log(typeof(data)); 
      if(data != null){this._router.navigateByUrl('home', { state : {data}}); sessionStorage.setItem("state", data)}});    
  }
  signupPage(){
    this._router.navigateByUrl('signup');
  }
}
