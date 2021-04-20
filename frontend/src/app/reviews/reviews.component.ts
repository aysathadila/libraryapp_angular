import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KdramaService } from '../kdrama.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})


export class ReviewsComponent implements OnInit {


  kdrama = {
    _id : '',
    title : '',
    genre : '',
    description : '',
    image : '',
    review: ''
  }

  user = { userid: '' }

  title = '';
  genre = ''

  constructor(private ActivatedRoute: ActivatedRoute, private KdramaService: KdramaService, private UsersService: UsersService , private _router: Router) { }

  ngOnInit(): void {


    // this.ActivatedRoute.queryParams
    // .subscribe(params => {
    //   // console.log(params);

    //   this.user.userid = params['_id'];

    //   this.kdrama._id = params['kdramaid'];
    //   this.kdrama.title = params['title'];
    //   this.kdrama.genre = params['genre'];
    //   this.kdrama.description = params['description'];
    //   this.kdrama.image = params['image'];
    // })

    // this.title = this.kdrama.title;
    // this.genre = this.kdrama.genre;  this.ActivatedRoute.queryParams
    // .subscribe(params => {
    //   // console.log(params);

    //   this.user.userid = params['_id'];

    //   this.kdrama._id = params['kdramaid'];
    //   this.kdrama.title = params['title'];
    //   this.kdrama.genre = params['genre'];
    //   this.kdrama.description = params['description'];
    //   this.kdrama.image = params['image'];
    // })

    // this.title = this.kdrama.title;
    // this.genre = this.kdrama.genre;
  }

}
