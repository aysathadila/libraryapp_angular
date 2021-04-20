import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(public _auth:AuthService, public _router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    if(this._auth.userlogged){
      localStorage.removeItem('usertoken')
    this._router.navigate([''])
    }
    if(this._auth.adminlogged)
    {
      localStorage.removeItem('token')
    this._router.navigate([''])
    }
  }
}
