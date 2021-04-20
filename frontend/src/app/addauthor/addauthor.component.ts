import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { AuthorsModel } from '../authors/authors.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private AuthorService: AuthorService, private _router: Router) { }
  authorItem = new AuthorsModel( null, null, null, null,null);

  ngOnInit(): void {
  }
  addauthor()
  {
    this.AuthorService.newAuthor(this.authorItem);
    // console.log(this.authorItem);
    console.log("Add called");
    alert("Successfully added!");
    this._router.navigate(['/admindashboard/authors']);
  }

}
