import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
adminVerify(user)
{
  return this.http.post<any>("http://localhost:3000/admin",user);
  
}
userVerify(user:any)   
  {
    return this.http.post<any>("http://localhost:3000/user", user)
  }
  constructor(private http:HttpClient) { }

  adminlogged()
{
  return !!localStorage.getItem("token")
}

userlogged()
{
  return !!localStorage.getItem('usertoken');
}

getToken(){
  return localStorage.getItem("token")
 }
}

