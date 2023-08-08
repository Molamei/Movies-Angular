
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from './../error-handler.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  inputValue: string = '';
  data: any;
  allmovies: any[] =[]
  constructor(private dataService: DataService, private ErrorHandlerService: ErrorHandlerService) {}
  ngOnInit() {
     
  }
  pushToNewArray() {
    this.allmovies=[...this.data.results]
    console.log(this.allmovies)
  }
  getData() {
    this.dataService.getData(`https://api.themoviedb.org/3/search/movie?query=${this.inputValue}&language=en-US&page=1`).subscribe(
      (data:any) => {
        this.data = data;
        this.pushToNewArray();
      },
      (error) => {
        // Handle error
      }
    );
  }
  
}
