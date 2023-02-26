import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router) {
    let data = sessionStorage.getItem('sessionDetails');
    console.log("data in user component:- "+ data);
    this.isDataAvailable = true;
    if(window.history.state.data==null){
      this._router.navigateByUrl("login");
    }
   }
  data = window.history.state.data["email"];
  isDataAvailable = false;
  ngOnInit(): void {
  }
}
