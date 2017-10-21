import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { SlidesComponent } from './slides.component';
import { SlideDetailsComponent } from './slideDetails.component';
import { SlideService } from './slides.service';
import { SlideRoutingModule } from './slides.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        SlideRoutingModule
    ],
    declarations: [
        SlidesComponent,
        SlideDetailsComponent
    ],
    providers: [SlideService]
})
export class AdminSlidesModule { }