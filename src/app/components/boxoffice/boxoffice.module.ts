import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';
import { HttpModule } from '@angular/http';


import { BoxOfficeService } from './boxOffice.service';
import { BoxOfficeRoutingModule } from './boxOffice.routing.module';
import { BoxOfficeComponent } from './boxOffice.component';
import { SharedModule } from '../../../common/shared.module';

@NgModule({
    imports: [
        FormsModule, HttpModule, DataTableModule, BoxOfficeRoutingModule, SharedModule
    ],
    declarations: [
        BoxOfficeComponent
    ],
    providers: [BoxOfficeService]
})
export class BoxOfficeModule { }