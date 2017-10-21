import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin.dashboard.component';
import { SlidesComponent } from '../slides/slides.component';
import { SlideDetailsComponent } from '../slides/slideDetails.component';
import { BoxOfficeComponent } from '../boxOffice/boxOffice.component';
import { UpdateBoxOfficeComponent } from '../boxOffice/updateBoxOffice.component';
import { TilesComponent } from '../tiles/tiles.component';
import { UpdateTilesComponent } from '../tiles/updateTiles.component';

import { MoviesListComponent } from '../movieslist/movieslist.component';
import { MoviesComponent } from '../movieslist/movie.component';
import { FirstLookPosterComponent } from '../firstlookposter/firstlookposter.component';
import { FirstLookPosterListComponent } from '../firstlookposter/firstlookposterlist.component';
import { AuthGuard } from '../../auth/auth.guard.service';


const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'slides', component: SlidesComponent },
                    { path: 'slidedetails', component: SlideDetailsComponent },
                    //{ path: 'boxofficecollection', component: ManageBoxOfficeComponent },
                    { path: 'boxofficecollection', component: BoxOfficeComponent },
                    { path: 'boxofficedetails/:id', component: UpdateBoxOfficeComponent },
                    { path: 'tiles', component: TilesComponent },
                    { path: 'tiles/:id', component: UpdateTilesComponent },
                    { path: 'movies', component: MoviesListComponent },
                    { path: 'movie/:id', component: MoviesComponent },
                    { path: 'firstlookposterlist', component: FirstLookPosterListComponent },
                    { path: 'firstlookposter/:id', component: FirstLookPosterComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/