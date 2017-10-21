import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { MusicsComponent } from './musics.component';
import { MusicsService } from './musics.service';
import { MusicsRoutingModule } from './musics.routing.module';
import { SlickModule } from '../../../common/components/slick/slick.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        MusicsRoutingModule,
        SlickModule.forRoot()
    ],
    declarations: [
        MusicsComponent
    ],
    providers: [MusicsService]
})
export class MusicsModule { }