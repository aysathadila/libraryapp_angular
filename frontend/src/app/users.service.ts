import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  newUser(item){
    return this.http.post<any>("http://localhost:3000/adduser", { user: item })
  }

  addReview(review, kdramaid, userid){
    
    var info = {
      user: userid,
      kdrama: kdramaid,
      review: review
    }
    console.log(info);
    return this.http.post<any>("http://localhost:3000/addreview", { user: info })
  }
}
