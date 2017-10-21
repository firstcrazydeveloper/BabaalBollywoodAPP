import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';
import { HttpModule } from '@angular/http';


import { BoxOfficeService } from './boxOffice.service';
import { BoxOfficeComponent } from './boxOffice.component';
import { UpdateBoxOfficeComponent } from './updateBoxOffice.component';
import { BoxOffice } from './boxOffice.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule
    ],
    declarations: [BoxOfficeComponent, UpdateBoxOfficeComponent],
    exports: [BoxOfficeComponent, UpdateBoxOfficeComponent],

    providers: [BoxOfficeService, BoxOffice]
})
export class BoxOfficeModule { }