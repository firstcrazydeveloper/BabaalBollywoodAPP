import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { MoviesList } from './movie.model';
import { MoviesService } from './movies.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-movie-list',
    templateUrl: './movieslist.component.html',
    styleUrls: ['./boxOffice.component.min.css']
})
export class MoviesListComponent {
    moviesListSubscription: any;
    movieListCollection: Array<MoviesList> = [];
    moviesResource = new DataTableResource(this.movieListCollection);
    moviesCount = 0;

    @ViewChild(DataTable) moviesTable: any;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.getMoviesCollection();
    }

    public ngOnDestroy() {
        this.moviesListSubscription.unsubscribe();
        console.log('Destroyed');
    }

    reloadMovies(params: any) {
        this.moviesResource.query(params).then(movies => this.movieListCollection = movies);
    }

    cellColor(car: any) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    getMoviesCollection(): void {
        this.moviesListSubscription = this.moviesService
            .getAdminMoviesCollection()
            .subscribe(moviesData => {
                console.log(moviesData);
                this.movieListCollection = moviesData;
                this.moviesResource = new DataTableResource(moviesData);
                this.moviesResource.count().then(count => this.moviesCount = count);
            },
            error => console.log(error));

    }

    OnEdit(moviesList: MoviesList) {
        this.router.navigate(['/admin/movie', moviesList.MoviesID]);
    }

    OnDelete(moviesList: MoviesList) {
        this.DeleteBoxOffice(moviesList);
    }

    DeleteBoxOffice(moviesList: MoviesList) {
        moviesList.IsActive = false;
        this.moviesService.updateMovie(moviesList)
            .subscribe((moviesData: MoviesList) => { console.log(moviesData); alert('Movie is deleted successfully.'); this.getMoviesCollection(); },
            error => { console.log(error); alert('Movie is not deleted'); });
    }

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}