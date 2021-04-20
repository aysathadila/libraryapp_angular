import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KdramaService } from '../kdrama.service';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {constructor(private ActivatedRoute: ActivatedRoute, private KdramaService: KdramaService, private _router: Router ) { }

  kdrama = {
    _id : '',
    title : '',
    genre : '',
    description : '',
    image : ''
  }

  updateKdrama(kdrama){
    if(confirm("Are you sure you want to make the changes?")){
      this.KdramaService.updateKdrama(kdrama);
      alert("updated!");
      this._router.navigate(['/admindashboard/kdramas']);
    }
  }
  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
          console.log(params);
          this.kdrama._id = params['_id'];
          this.kdrama.title = params['title'];
          this.kdrama.genre = params['genre'];
          this.kdrama.description = params['description'];
          this.kdrama.image = params['image'];
        })
        
  }

}
