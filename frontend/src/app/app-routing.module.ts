import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { UsignupComponent } from './usignup/usignup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { KdramasComponent } from './kdramas/kdramas.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [{path:"",component:HomeComponent},
{path:"admin",component:AdminComponent},
{path:"users",component:UsersComponent,
children:[
  {path:"ulogin",component:UloginComponent},
  {path:"usignup",component:UsignupComponent}
]},
{path: "admindashboard", component: AdmindashboardComponent, canActivate: [AuthGuard],
    children: [{path: "add", component: AdminaddComponent}, 
    {path: "addauthor", component: AddauthorComponent},
    {path: "authors", component: AuthorsComponent},
               {path: "kdramas", component: KdramasComponent,children:[{path: ":_id", component: AdmineditComponent}]},
                ] },
 
  {path:"userdashboard/:_id", component: UserdashboardComponent, canActivate: [AuthGuard],
  children: [ 
  {path: "kdramas", component: KdramasComponent, children:[{path: ":kdramaid", component: AddreviewComponent}
]},{path:"reviews",component:ReviewsComponent}
   ] 
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
