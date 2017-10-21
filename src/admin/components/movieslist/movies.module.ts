import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';
import { HttpModule } from '@angular/http';

import { MoviesService } from './movies.service';
import { MoviesComponent } from './movie.component';
import { MoviesListComponent } from './movieslist.component';
import { MoviesList } from './movie.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule
    ],
    declarations: [MoviesComponent, MoviesListComponent],
    exports: [MoviesComponent, MoviesListComponent],

    providers: [MoviesService, MoviesList]
})
export class MoviesModule { }