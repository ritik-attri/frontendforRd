import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bnIdle: BnNgIdleService, private _router: Router, private http: HttpClient) {
    this.bnIdle.startWatching(300).subscribe((res) => { // if user is inactive for more than 5 mins session will expire.
      if(res) {
          this._router.navigateByUrl('login');
      }
    })
    // let httpHeaders = new HttpHeaders()
    //                      .set('Access-Control-Allow-Origin', '*');
    // setInterval(()=> {
    //   if(sessionStorage.getItem("state") != null){
    //     try{
    //       let email = sessionStorage.getItem("state")!;
    //       let httpParams = new HttpParams().set("email", email);
    //       this.http.post("http://localhost:8080/validate_session",{},{})
    //     }catch {
    //       console.log("no one logged in");
    //     }
    //   }
    // }, 300000)
  }
  title = 'frontendforRd';
  
}
