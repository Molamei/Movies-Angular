
import { DataService } from './../data.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { ErrorHandlerService } from './../error-handler.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;
  pageIndex:number  =1
  inputValue: string = '';
  data: any;
  allmovies: any[] =[]
  constructor(private dataService: DataService, private ErrorHandlerService: ErrorHandlerService) {
    this.dataSource = new MatTableDataSource(this.data);
  }
  ngOnInit() {
    this.getData(this.pageIndex); 
    
  }
  pushToNewArray() {
    this.allmovies=[...this.data.results]
    console.log(this.allmovies)
  }
  getData(pageIndex:any) {

    this.dataService.getData(`https://api.themoviedb.org/3/search/movie?query=${this.inputValue}&language=en-US&page=${pageIndex !== undefined ? pageIndex : 1}`).subscribe(
      (data:any) => {
        this.data = data;
        this.pushToNewArray();
      },
      (error) => {
        // Handle error
      }
    );
  }
  onPageChange(event:any) {
    this.pageIndex = event.pageIndex +1;
    this.getData(this.pageIndex)
  }
  
}
