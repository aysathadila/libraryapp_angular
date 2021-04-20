import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KdramaService {
 

  constructor(private http:HttpClient) { }
  getKdramas(){
    return this.http.get("http://localhost:3000/kdramas");
  }
  newKdrama(item){
    return this.http.post("http://localhost:3000/add", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }

  updateKdrama(item){
    return this.http.post("http://localhost:3000/updatekdrama", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }

  deleteKdrama(item){
    return this.http.post("http://localhost:3000/deletekdrama", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }
  getMyBooks(user){
    return this.http.post<any>("http://localhost:3000/mykdramas", { user: user })
  }
}
