import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { TilesDetails } from './tiles.model';
import { TilesService } from './tiles.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-tiles',
    templateUrl: './tiles.component.html'
})
export class TilesComponent {
    tilesSubscription: any;
    tilesCollection: Array<TilesDetails> = [];
    tilesResource = new DataTableResource(this.tilesCollection);
    tilesCount = 0;

    @ViewChild(DataTable) tilesTable: any;

    constructor(private tilesService: TilesService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.getTilesCollection();
    }

    public ngOnDestroy() {
        this.tilesSubscription.unsubscribe();
        console.log('Destroyed');
    }

    reloadTiles(params: any) {
        this.tilesResource.query(params).then(tiles => this.tilesCollection = tiles);
    }

    cellColor(car: any) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    getTilesCollection(): void {
        this.tilesSubscription = this.tilesService
            .getAdminTilesCollection()
            .subscribe(tileData => {
                console.log(tileData);
                this.tilesCollection = tileData;
                this.tilesResource = new DataTableResource(tileData);
                this.tilesResource.count().then(count => this.tilesCount = count);
            },
            error => console.log(error));

    }

    OnEdit(tilesDetails: TilesDetails) {
        this.router.navigate(['/admin/tiles', tilesDetails.Id]);
    }

    OnDelete(tilesDetails: TilesDetails) {
        this.DeleteBoxOffice(tilesDetails);
    }

    DeleteBoxOffice(tilesDetails: TilesDetails) {
        tilesDetails.IsActive = false;
        this.tilesService.updateBoxOffice(tilesDetails)
            .subscribe((tilesData: TilesDetails) => { console.log(tilesData); alert('Tiles Details deleted successfully.'); this.getTilesCollection(); },
            error => { console.log(error); alert('Tiles is not deleted'); });
    }

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}