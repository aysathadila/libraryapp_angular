import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KdramaService } from '../kdrama.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute, private KdramaService: KdramaService, private UsersService: UsersService , private _router: Router) { }

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
  description = ''

  ngOnInit(): void {



    

      this.ActivatedRoute.queryParams
      .subscribe(params => {
        // console.log(params);

        this.user.userid = params['_id'];

        this.kdrama._id = params['kdramaid'];
        this.kdrama.title = params['title'];
        this.kdrama.genre = params['genre'];
        this.kdrama.description = params['description'];
        this.kdrama.image = params['image'];
      })
      console.log(this.user.userid);

      this.title = this.kdrama.title;
      this.genre = this.kdrama.genre;
      this.description = this.kdrama.description;
    


  }


  addReview(kdrama)
  {
    if(confirm("Are you sure you want to make the changes?"))
    {
      console.log(kdrama.review);
      this.UsersService.addReview(this.kdrama.review, this.kdrama._id, this.user.userid);
      
      alert("Kdrama review added");
      location.reload();
    }
  }
}
