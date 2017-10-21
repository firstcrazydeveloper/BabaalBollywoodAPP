import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service';
import { SongsRoutingModule } from './songs.routing.module';
import { ExponentialStrengthPipe } from '../../pipes/exponentialStrength.pipe';
import { ReverseStringPipe } from '../../pipes/reverseString.pipe';
// import { TranslateModule } from '../../translate/translate.module'
import { TranslateService } from '../../translate/translate.service';
import { TranslateProvider } from '../../translate/translate.config';
import { TranslatePipe } from '../../translate/translate.pipe';
import { Filter } from '../../pipes/filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        SongsRoutingModule
    ],
    declarations: [
        SongsComponent,
        ExponentialStrengthPipe,
        ReverseStringPipe,
        TranslatePipe,
        Filter
    ],
    providers: [SongsService, TranslateService, TranslateProvider]
})
export class SongsModule { }