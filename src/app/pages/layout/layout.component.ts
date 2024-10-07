import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  userData: any;

  

  constructor(private _router: Router){
   this.userData = localStorage.getItem('ticketData');
   this.userData = JSON.parse(this.userData)
   console.log(this.userData);
  }

  ngOnInit(){
    
  }

  logOutBtn(){
    // console.log("object");
    const logoutApp = confirm("Are you sure to logout");
    if(logoutApp){
      localStorage.removeItem('ticketData');
      this._router.navigateByUrl('login');

    }
  }



}
