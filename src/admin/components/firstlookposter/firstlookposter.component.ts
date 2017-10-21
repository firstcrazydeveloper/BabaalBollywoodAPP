import { Component, Input, HostBinding, ViewChild } from '@angular/core';
declare var moment: any;

import { FirstLookPosters } from './firstlookposter.model';
import { FirstLookPostersService } from './firstlookposter.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-flp',
    templateUrl: './firstlookposter.component.html',
    styleUrls: ['./firstlookposter.component.min.css']
})
export class FirstLookPosterComponent {
    flpSubscription: any;
    flp: FirstLookPosters;
    posterId: number;
    transactionSucces: boolean = false;
    transactionFailed: boolean = false;
    mainButtonTitle: string;
    addNewButton: string = 'Add New Movie';
    clearButton: string = 'Clear';
    cancelButton: string = 'Back To List';


    constructor(private flpService: FirstLookPostersService, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.flpSubscription = this.route.params.subscribe(params => {
            this.posterId = + params['id']; // (+) converts string 'id' to a number
            if (this.posterId != undefined && this.posterId > 0) {
                this.mainButtonTitle = 'Update';
            }
            else {
                this.mainButtonTitle = 'Add';

            }
            this.flpService.getFLP(this.posterId)
                .subscribe((flpData: FirstLookPosters) => { this.flp = flpData;});
            console.log(this.flp);
            // In a real app: dispatch action to load the details here.
        });
    }

    AddUpdateFLP() {
        this.ModifiedFLP();
    }

    ModifiedFLP() {
        console.log(this.flp);
        this.flp.GenreId = this.flp.GenreId == null ? 0 : this.flp.GenreId;
        this.flp.MovieId = this.flp.MovieId == null ? 0 : this.flp.MovieId;
        this.flpService.updateFLP(this.flp)
            .subscribe((flpData: FirstLookPosters) => { console.log(flpData); this.transactionSucces = true; },
            error => { console.log(error); this.transactionFailed = true; });
        this.clearData();
    }



    clearData() {
        this.flp = new FirstLookPosters();
        this.flp.PosterId = 0;
        this.mainButtonTitle = 'Add';
        this.transactionSucces = false;
        this.transactionFailed = false;

    }

    Cancel() {
        this.clearData();
        this.router.navigate(['/admin/firstlookposterlist']);

    }

    public ngOnDestroy() {
        this.flpSubscription.unsubscribe();
        console.log('Destroyed');
    }


}
