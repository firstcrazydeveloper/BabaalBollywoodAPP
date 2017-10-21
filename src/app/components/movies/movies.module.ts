import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { MoviesComponent } from './movies.component';
import { MoviesDashboardComponent } from './moviesDashboard.component';
import { FirstLookPostersComponent } from './firstlookposters/firstlookposters.component';
import { MovieTrailersComponent } from './movietrailers/movietrailers.component';
import { MoviesService } from './movies.service';
import { MoviesRoutingModule } from './movies.routing.module';
import { SharedModule } from '../../../common/shared.module';
import { SlickModule } from '../../../common/components/slick/slick.module';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        MoviesRoutingModule,
        SharedModule,
        SlickModule.forRoot(),
        YoutubePlayerModule
    ],
    declarations: [
        MoviesDashboardComponent,
        MoviesComponent,
        FirstLookPostersComponent,
        MovieTrailersComponent
    ],
    providers: [MoviesService]
})
export class MoviesModule { }