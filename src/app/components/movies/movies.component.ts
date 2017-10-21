import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { NavigationService } from '../../../common/components/navigation/navigation.service';
import { MoviesService } from './movies.service'
import { MoviesList } from './movie.model'

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    movies: Array<MoviesList> = [];
    activeMenu: string;
    topMoviesSubscription: any;


    constructor(private navigationService: NavigationService, private route: ActivatedRoute, private moviesService: MoviesService) {
        //this.getTopMovies();
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
            console.log('start');
            console.log(this.activeMenu);
            // alert(this.activeMenu);
            console.log('End');
        });
    }

    ngOnInit() {
        this.getTopMovies();
    }

    ngOnDestroy() {
        this.topMoviesSubscription.unsubscribe();
        console.log('Destroyed');
    }

    //getTopMovies(): void {
    //    this.boxOfficeService
    //        .getBoxOfficeCollection()
    //        .then(boxOfficeData => this.boxOfficeCollection = boxOfficeData);
    //}
   

    getTopMovies(): void {
        this.topMoviesSubscription = this.moviesService
            .getMovies()
            .subscribe(movies => this.movies = movies,
            error => console.log(error));
    }
}