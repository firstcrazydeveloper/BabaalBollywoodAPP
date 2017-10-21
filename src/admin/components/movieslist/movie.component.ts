import { Component, Input, HostBinding, ViewChild } from '@angular/core';
declare var moment: any;

import { MoviesList } from './movie.model';
import { MoviesService } from './movies.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.min.css']
})
export class MoviesComponent {
    menuSubscription: any;
    boxOfficeSubscription: any;
    moviesList: MoviesList;
    moviesId: number;
    transactionSucces: boolean = false;
    transactionFailed: boolean = false;
    mainButtonTitle: string;
    addNewButton: string = 'Add New Movie';
    clearButton: string = 'Clear';
    cancelButton: string = 'Back To List';


    constructor(private moviesService: MoviesService, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.boxOfficeSubscription = this.route.params.subscribe(params => {
            this.moviesId = + params['id']; // (+) converts string 'id' to a number
            if (this.moviesId != undefined && this.moviesId > 0) {
                this.mainButtonTitle = 'Update';
            }
            else {
                this.mainButtonTitle = 'Add';

            }
            this.moviesService.getMovies(this.moviesId)
                .subscribe((moviesData: MoviesList) => { this.moviesList = moviesData; this.moviesList.ReleaseDate = moment(moviesData.ReleaseDate).format('YYYY-MM-DD'); });
            console.log(this.moviesList);
            // In a real app: dispatch action to load the details here.
        });
    }

    AddUpdateMovie() {
        this.ModifiedMovie();
    }

    ModifiedMovie() {
        this.moviesService.updateMovie(this.moviesList)
            .subscribe((moviesData: MoviesList) => { console.log(moviesData); this.transactionSucces = true; },
            error => { console.log(error); this.transactionFailed = true; });
        this.clearData();
    }



    clearData() {
        this.moviesList = new MoviesList();
        this.moviesList.MoviesID = 0;
        this.mainButtonTitle = 'Add';
        this.transactionSucces = false;
        this.transactionFailed = false;

    }

    Cancel() {
        this.clearData();
        this.router.navigate(['/admin/movies']);

    }

    public ngOnDestroy() {
        this.boxOfficeSubscription.unsubscribe();
        console.log('Destroyed');
    }


}
