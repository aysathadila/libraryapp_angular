import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(item){
    return this.http.post("http://localhost:3000/addauthor", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }

  updateAuthor(item){
    return this.http.post("http://localhost:3000/updateauthor", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }

  deleteAuthor(item){
    return this.http.post("http://localhost:3000/deleteauthor", { kdramas: item})
    .subscribe(data => {console.log(data)})
  }
  
}
