import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { StarPowerComponent } from './starpower.component';
import { StarPowerService } from './starpower.service';
import { StarPowerRoutingModule } from './starpower.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        StarPowerRoutingModule
    ],
    declarations: [
        StarPowerComponent
    ],
    providers: [StarPowerService]
})
export class StarPowerModule { }