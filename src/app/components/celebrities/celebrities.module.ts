import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { CelebritiesComponent } from './celebrities.component';
import { CelebritiesService } from './celebrities.service';
import { CelebritiesRoutingModule } from './celebrities.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        CelebritiesRoutingModule
    ],
    declarations: [
        CelebritiesComponent
    ],
    providers: [CelebritiesService]
})
export class CelebritiesModule { }