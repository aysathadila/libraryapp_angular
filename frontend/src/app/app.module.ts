import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { UsignupComponent } from './usignup/usignup.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { KdramasComponent } from './kdramas/kdramas.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorsComponent } from './authors/authors.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UsersComponent,
    UloginComponent,
    UsignupComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    AdminaddComponent,
    KdramasComponent,
    AdmineditComponent,
    UserdashboardComponent,
    UserheaderComponent,
    AddreviewComponent,
    ReviewsComponent,
    SinglereviewComponent,
    AddauthorComponent,
    AuthorsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
