import { Component, OnInit } from '@angular/core';
import { KdramaService } from '../kdrama.service';
import { Router } from '@angular/router';
import { KdramasModel } from '../kdramas/kdramas.model';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
  title: String = "Add Book";

  constructor(private KdramaService: KdramaService, private _router: Router) { }
  kdramaItem = new KdramasModel( null, null, null, null,null);
  ngOnInit(): void {
  }
  addKdrama()
  {
    this.KdramaService.newKdrama(this.kdramaItem);
    console.log("Add called");
    alert("Successfully added!");
    this._router.navigate(['/admindashboard/kdramas']);
  }
}
