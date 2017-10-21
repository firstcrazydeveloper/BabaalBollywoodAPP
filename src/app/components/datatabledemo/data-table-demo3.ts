﻿import { Component, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { films } from './data-table-demo3-data';


@Component({
    selector: 'data-table-demo',
    templateUrl: './data-table-demo3.html',
    styleUrls: ['./data-table-demo3.css']
})
export class DataTableDemo {

    filmResource = new DataTableResource(films);
    films: any = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable: any;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params:any) {
        this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car:any) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}