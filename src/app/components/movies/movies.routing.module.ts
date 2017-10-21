import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { FirstLookPostersComponent } from './firstlookposters/firstlookposters.component';
import { MovieTrailersComponent } from './movietrailers/movietrailers.component';
import { MoviesDashboardComponent } from './moviesDashboard.component';
import { AuthGuard } from '../../../admin/auth/auth.guard.service';

//const moviesRoutes: Routes = [
//    { path: 'movies', component: MoviesComponent },
//    { path: 'Releases', component: MoviesComponent },
//    { path: 'FirstLooks', component: FirstLookPostersComponent },
//    { path: 'Teasers', component: MoviesComponent },
//    { path: 'Trailers', component: MovieTrailersComponent },
//    { path: 'DVD', component: MoviesComponent },
//    { path: 'Posters', component: MoviesComponent }
//];

//const moviesRoutes: Routes = [
//    { path: 'movies/Dashboard', component: MoviesDashboardComponent },
//    { path: 'movies/Releases', component: MoviesComponent },
//    { path: 'movies/Posters', component: MoviesComponent },
//    { path: 'movies/FirstLooks', component: FirstLookPostersComponent },
//    { path: 'movies/Teasers', component: MoviesComponent },
//    { path: 'movies/Trailers', component: MoviesComponent },
//    { path: 'movies/DVD', component: MoviesComponent }
//];

const moviesRoutes: Routes = [
    {
        path: 'movies',
        component: MoviesDashboardComponent,
        children: [
            {
                path: '',
                //component: MoviesComponent,
                children: [
                    {
                        path: '',
                        component: MoviesComponent
                    },
                    { path: 'Dashboard', component: MoviesComponent },
                    { path: 'Releases', component: MoviesComponent },
                    { path: 'Posters', component: MoviesComponent },
                    { path: 'FirstLooks', component: FirstLookPostersComponent },
                    { path: 'Teasers', component: MoviesComponent },
                    { path: 'Trailers', component: MovieTrailersComponent },
                    { path: 'DVD', component: MoviesComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule { }