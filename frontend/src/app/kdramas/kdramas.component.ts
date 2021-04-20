import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { KdramaService } from '../kdrama.service';

@Component({
  selector: 'app-kdramas',
  templateUrl: './kdramas.component.html',
  styleUrls: ['./kdramas.component.css']
})
export class KdramasComponent implements OnInit {

  constructor(private KdramaService: KdramaService, public _auth: AuthService, private _router: Router,private ActivatedRoute: ActivatedRoute ) { }
  title:String = "Book list";

  kdramas = [{
    _id : '',
    title : '',
    genre : '',
    description : '',
    review: ''
  }]
  user = { userid : '' }

  showShortDesciption = true

 alterDescriptionText(kdrama) {


    this.showShortDesciption = !this.showShortDesciption
 }
  ngOnInit(): void {

     this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
        })

    this.KdramaService.getKdramas()

    .subscribe((data)=>{
      this.kdramas = JSON.parse(JSON.stringify(data));
                        })
  
     }


    //  this.ActivatedRoute.queryParams
    //     .subscribe(params => {
    //           this.user.userid = params['_id'];
    //     })

    // this.BooksService.getMyBooks(this.user)
    // .subscribe((data)=>{
    //   this.books = JSON.parse(JSON.stringify(data));
    //   })

  deleteKdrama(kdrama)
  {
    if(confirm("Are you sure to delete?"))
    {
      this.KdramaService.deleteKdrama(kdrama);
      console.log("Delete called");
      alert("Deleted book");
      // this._router.onSameUrlNavigation;
      location.reload();
    }
  }

}
