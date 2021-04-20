import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, public _auth:AuthService, public _router:Router) { }
  user = { userid : '' }
  ngOnInit(): void {
    this.user.userid = this.ActivatedRoute.snapshot.params['_id']
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
