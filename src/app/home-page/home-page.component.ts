import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from './../error-handler.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: any;
  allmovies: any[] =[]
  constructor(private dataService: DataService, private ErrorHandlerService: ErrorHandlerService) {}
  ngOnInit() {
    this.getData(); 
  }
  
  getData() {
    this.dataService.getData('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1').subscribe(
      (data:any) => {
        this.data = data;
        this.pushToNewArray();
      },
      (error) => {
        // Handle error
      }
    );
  }
  pushToNewArray() {
    this.allmovies=[...this.data.results]
    console.log(this.allmovies)
  }
}