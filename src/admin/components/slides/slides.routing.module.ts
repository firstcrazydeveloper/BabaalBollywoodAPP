import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlidesComponent } from './slides.component';
import { SlideDetailsComponent } from './slideDetails.component';

const slidesRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forChild(slidesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SlideRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/