import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { TilesDetails } from './tiles.model';
import { TilesService } from './tiles.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'update-tiles-office',
    templateUrl: './updateTiles.component.html'
})
export class UpdateTilesComponent {    
    tilesSubscription: any;
    tilesDetails: TilesDetails;
    tileId: number;
    transactionSucces: boolean = false;
    transactionFailed: boolean = false;
    mainButtonTitle: string;
    addNewButton: string = 'Add New Tiles';
    clearButton: string = 'Clear';
    cancelButton: string = 'Back To List';


    constructor(private tilesService: TilesService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.tilesSubscription = this.route.params.subscribe(params => {
            this.tileId = + params['id']; // (+) converts string 'id' to a number
            if (this.tileId != undefined && this.tileId > 0) {
                this.mainButtonTitle = 'Update';
            }
            else {
                this.mainButtonTitle = 'Add';

            }
            this.tilesService.getTileDetails(this.tileId)
                .subscribe((tileData: TilesDetails) => this.tilesDetails = tileData);
            console.log(this.tilesDetails);
            // In a real app: dispatch action to load the details here.
        });
    }

    AddUpdateTiles() {
        this.ModifiedTiles();
    }

    ModifiedTiles() {
        this.tilesService.updateBoxOffice(this.tilesDetails)
            .subscribe((tileDetailsData: TilesDetails) => { console.log(tileDetailsData); this.transactionSucces = true; },
            error => { console.log(error); this.transactionFailed = true; });
        this.clearData();
    }



    clearData() {
        this.tilesDetails = new TilesDetails();
        this.tilesDetails.Id = 0;
        this.mainButtonTitle = 'Add';
        this.transactionSucces = false;
        this.transactionFailed = false;

    }

    Cancel() {
        this.clearData();
        this.router.navigate(['/admin/tiles']);

    }

    public ngOnDestroy() {
        this.tilesSubscription.unsubscribe();
        console.log('Destroyed');
    }


}