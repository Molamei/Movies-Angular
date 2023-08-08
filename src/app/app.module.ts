import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorHandlerService } from './error-handler.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }, 
 
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    ErrorPageComponent,
    SearchPageComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [DataService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

