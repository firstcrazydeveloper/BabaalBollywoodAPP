import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { BoxOffice } from './boxOffice.model';
import { BoxOfficeService } from './boxOffice.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'update-box-office',
    templateUrl: './updateBoxOffice.component.html',
    styleUrls: ['./boxOffice.component.min.css']
})
export class UpdateBoxOfficeComponent {
    menuSubscription: any;
    boxOfficeSubscription: any;
    boxOffice: BoxOffice;
    boxOfficeId: number;
    transactionSucces: boolean = false;
    transactionFailed: boolean = false;
    mainButtonTitle: string;
    addNewButton: string = 'Add New Box Office';
    clearButton: string = 'Clear';
    cancelButton: string = 'Back To List';


    constructor(private boxOfficeService: BoxOfficeService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.boxOfficeSubscription = this.route.params.subscribe(params => {
            this.boxOfficeId = + params['id']; // (+) converts string 'id' to a number
            if (this.boxOfficeId != undefined && this.boxOfficeId > 0) {
                this.mainButtonTitle = 'Update';
            }
            else {
                this.mainButtonTitle = 'Add';

            }
            this.boxOfficeService.getBoxOffice(this.boxOfficeId)
                .subscribe((boxOfficeData: BoxOffice) => this.boxOffice = boxOfficeData);
            console.log(this.boxOffice);
            // In a real app: dispatch action to load the details here.
        });
    }

    AddUpdateBoxOffice() {
        this.ModifiedBoxOffice();
    }

    ModifiedBoxOffice() {
        this.boxOffice.Status = this.boxOffice.IsActive == true ? 1 : 0;
        this.boxOfficeService.updateBoxOffice(this.boxOffice)
            .subscribe((boxOfficeData: BoxOffice) => { console.log(boxOfficeData); this.transactionSucces = true; },
            error => { console.log(error); this.transactionFailed = true; });
        this.clearData();
    }



    clearData() {
        this.boxOffice = new BoxOffice();
        this.boxOffice.BoxOfficeId = 0;
        this.boxOffice.Status = 1;
        this.mainButtonTitle = 'Add';
        this.transactionSucces = false;
        this.transactionFailed = false;

    }

    Cancel() {
        this.clearData();
        this.router.navigate(['/admin/boxofficecollection']);

    }

    public ngOnDestroy() {
        this.boxOfficeSubscription.unsubscribe();
        console.log('Destroyed');
    }


}