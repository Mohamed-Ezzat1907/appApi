import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ChangeColorDirective } from '../directives/change-color.directive';
import { MoviesAPIService } from '../services/movies-api.service';
import { Subscription } from 'rxjs';
import { Imovie } from '../interfaces/imovie';

@Component({
  selector: 'app-gallery',
  imports: [ChangeColorDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, OnDestroy {
  private readonly dataApi = inject(MoviesAPIService);

  movies: Imovie[] = [];

  imgPath: string = 'https://image.tmdb.org/t/p/w500';

  subtribeData: Subscription = new Subscription();

  callData(): void {
    this.dataApi.getData().subscribe({
      next: (res) => {
        this.movies = res.results;

        console.log(res.results);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.callData();
  }

  ngOnDestroy(): void {
    this.subtribeData.unsubscribe();
  }
}
