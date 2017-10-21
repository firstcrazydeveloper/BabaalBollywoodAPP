import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';
import { HttpModule } from '@angular/http';


import { TilesService } from './tiles.service';
import { TilesComponent } from './tiles.component';
import { UpdateTilesComponent } from './updateTiles.component';
import { TilesDetails } from './tiles.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule
    ],
    declarations: [TilesComponent, UpdateTilesComponent],
    exports: [TilesComponent, UpdateTilesComponent],

    providers: [TilesService, TilesDetails]
})
export class TilesModule { }