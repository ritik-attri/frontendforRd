import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-otpvalidate',
  templateUrl: './otpvalidate.component.html',
  styleUrls: ['./otpvalidate.component.css']
})
export class OtpvalidateComponent implements OnInit {

  constructor(private _router: Router, private http: HttpClient) {
    if(window.history.state.data == null){
      this._router.navigateByUrl("login");
    }
  }
  otp = "";
  ngOnInit(): void {
  }
  url = "http://localhost:8080/validate"
  otpValidate(){
    let httpHeaders = new HttpHeaders()
                         .set('Access-Control-Allow-Origin', '*');
    let httpParams = new HttpParams().set("email",window.history.state.data["email"]).set("otp", this.otp);
    this.http.post(this.url,{}, {
      params: httpParams,
      headers: httpHeaders,
    }).subscribe((data: any) => {console.log(data);if(data!=null){this._router.navigateByUrl('home',{state : {data}}); sessionStorage.setItem("state",data)}});
  }
}
