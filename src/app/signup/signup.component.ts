import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient,  private _router: Router) { }

  ngOnInit(): void {
  }
  firstname = "";
  lastname = "";
  email = "";
  password = "";
  url = "http://localhost:8080/signup";
  signup(){
    let httpHeaders = new HttpHeaders()
                         .set('Access-Control-Allow-Origin', '*');
    let httpParams = new HttpParams()
    .set("email",this.email).set("password",this.password).set("firstName",this.firstname).set("lastName",this.lastname);
    this.http.post(this.url,{},{
      headers:httpHeaders,
      params:httpParams,
    }).subscribe((data: any) => {console.log(data["otp_creation_time"]);
    this._router.navigateByUrl('otpvalidate', {state : {data}})});
  }
}
