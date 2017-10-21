import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Slide } from './slide.module';
import { TopMoviesService } from '../topmovies/topMovies.service';

@Component({
    selector: 'home-page',
    templateUrl: `./home.component.html`,
})
export class HomeComponent {
    slidesSubscription: any;
    topMoviesSubscription: any;
    tilesSubscription: any;
    slides: Array<Slide> = [];
    menus: Array<any> = [];
    tiles: any;
    topmovies: Array<any> = [];
    constructor(
        private homeService: HomeService, private topMoviesService: TopMoviesService) { }

    ngOnInit() {
        this.getTiles();
        this.getSlides();
        this.getTopMovies();
    }

    ngOnDestroy() {
        this.slidesSubscription.unsubscribe();
        this.topMoviesSubscription.unsubscribe();
        this.tilesSubscription.unsubscribe();
        console.log('Destroyed');
    }

    //getSlides(): void {
    //    this.homeService
    //        .getSlides()
    //        .then(slides => this.slides = slides);
    //}

    getSlides(): void {
        this.slidesSubscription = this.homeService
            .getSlides()
            .subscribe(slides => this.slides = slides,
            error => console.log(error));
    }

    getTiles(): void {
        this.tilesSubscription = this.homeService
            .getTiles()
            .subscribe(tiles => {
                this.tiles = tiles; console.log(this.tiles)
            },
            error => console.log(error));
    }

    //getTopMovies(): void {
    //    this.topMoviesService
    //        .getTopMovies()
    //        .then(topmovies => this.topmovies = topmovies);
    //}

    getTopMovies(): void {
        this.topMoviesSubscription = this.topMoviesService
            .getTopMovies()
            .subscribe(topmovies => this.topmovies = topmovies,
            error => console.log(error));
    }
}
