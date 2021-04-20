import { Component, OnInit } from '@angular/core';
import { UsersModel } from './users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})
export class UsignupComponent implements OnInit {

  constructor(private UsersService: UsersService, private _router: Router) { }
  userItem = new UsersModel(null, null, null);
  user = {userpass : ''};


  ngOnInit(): void {
  }


  addUser()
  {

    if(confirm("Create your account?"))
    {
      this.UsersService.newUser(this.userItem)
      .subscribe(
        res => {
          if(res.message == "Success"){
            alert("Sigup successful. Please login.")
            this._router.navigate(['/users/ulogin'])
          }
          if(res.message == "Failed")
          {
            alert("User already exists. Please trying logging into your account")
            this._router.navigate(['/user/usersignin'])
          }
        }
      )
      }
    }
}
