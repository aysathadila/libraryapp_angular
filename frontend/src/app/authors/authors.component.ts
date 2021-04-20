import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private AuthorService: AuthorService, public _auth: AuthService, private _router: Router,private ActivatedRoute: ActivatedRoute) { }
  title:String = "Author list";

  authors = [{
    _id : '',
    description : '',
    title : '',
    genre : '',
    review: ''
  }]
  user = { userid : '' }

  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
        })

    this.AuthorService.getAuthors()

    .subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
                        })
  
  }

}
