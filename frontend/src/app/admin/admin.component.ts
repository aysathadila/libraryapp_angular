import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }

  User={adminusername:"",
  adminpassword:"" };
   adminVerify(){
     this._auth.adminVerify(this.User)
     .subscribe(
      res => {
        // console.log(res.token)
        localStorage.setItem('token', res.token)
        this._router.navigate(['admindashboard'])
      }
    )
     
   }
  ngOnInit(): void {
  }

}
