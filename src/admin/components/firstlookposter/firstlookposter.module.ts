import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';
import { HttpModule } from '@angular/http';

import { FirstLookPosters } from './firstlookposter.model';
import { FirstLookPostersService } from './firstlookposter.service';
import { FirstLookPosterComponent } from './firstlookposter.component';
import { FirstLookPosterListComponent } from './firstlookposterlist.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule
    ],
    declarations: [FirstLookPosterComponent, FirstLookPosterListComponent],
    exports: [FirstLookPosterComponent, FirstLookPosterListComponent],

    providers: [FirstLookPostersService, FirstLookPosters]
})
export class FirstLookPosterModule { }