import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { AboutComponent } from './about.component';
import { AboutService } from './about.service';
import { AboutRoutingModule } from './about.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ],
    providers: [AboutService]
})
export class AboutModule { }