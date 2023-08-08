import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from './../error-handler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  data: any;
  movieId:any =0
  constructor(private dataService: DataService, private ErrorHandlerService: ErrorHandlerService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.movieId= +this.movieId
      console.log(this.movieId)
    })
    this.getData()
  }
  getData() {
    this.dataService.getData(`https://api.themoviedb.org/3/movie/${this.movieId}`).subscribe(
      (data:any) => {
        this.data = data;
      },
      (error) => {
        // Handle error
      }
    );
  }
}
