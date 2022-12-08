import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
const myRoute:Routes=[{
  path:"",
  component:AddpatientComponent
},{
  path:"view",
  component:ViewpatientComponent
},{
  path:"search",
  component:SearchComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewpatientComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
