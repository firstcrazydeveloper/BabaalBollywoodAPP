import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin.dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminSlidesModule } from '../slides/slides.module';
import { BoxOfficeModule } from '../boxOffice/boxOffice.module';
import { TilesModule } from '../tiles/tiles.module';
import { MoviesModule } from '../movieslist/movies.module';
import { FirstLookPosterModule } from '../firstlookposter/firstlookposter.module';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        AdminSlidesModule,
        BoxOfficeModule,
        TilesModule,
        MoviesModule,
        FirstLookPosterModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent
    ]
})
export class AdminModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/