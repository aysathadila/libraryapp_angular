import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  constructor(private _auth:AuthService, private _router:Router) { }
  user = {
    useremail: '',
    userpass: ''
  };
  ngOnInit(): void {
  }
  userVerify()
  {
    console.log(this.user)
    this._auth.userVerify(this.user)
    
    .subscribe(
      res => {
        if(res.message == "Success"){
          alert("Success");
          localStorage.setItem('usertoken', res.usertoken)
          let id = res.id
          this._router.navigate(['userdashboard/:' + id])
        }
        if(res.message == "Failed")
        {
          alert("Invalid username and password. Please try again.")
          this._router.navigate(['/users/ulogin'])
        }
      }
    )
  }

}
