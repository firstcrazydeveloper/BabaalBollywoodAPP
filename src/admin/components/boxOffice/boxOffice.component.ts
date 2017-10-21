import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { BoxOffice } from './boxOffice.model';
import { BoxOfficeService } from './boxOffice.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-box-office',
    templateUrl: './boxOffice.component.html',
    styleUrls: ['./boxOffice.component.min.css']
})
export class BoxOfficeComponent {
    boxOfficeSubscription: any;
    boxOfficeCollection: Array<BoxOffice> = [];
    boxofficeResource = new DataTableResource(this.boxOfficeCollection);
    boxofficeCount = 0;

    @ViewChild(DataTable) boxOfficeTable: any;

    constructor(private boxOfficeService: BoxOfficeService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.getBoxOfficeCollection();
    }

    public ngOnDestroy() {
        this.boxOfficeSubscription.unsubscribe();
        // console.log('Destroyed');
    }

    reloadBoxOffice(params: any) {
        this.boxofficeResource.query(params).then(boxOffice => this.boxOfficeCollection = boxOffice);
    }

    cellColor(car: any) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    getBoxOfficeCollection(): void {
        this.boxOfficeSubscription = this.boxOfficeService
            .getAdminBoxOfficeCollection()
            .subscribe(boxOfficeData => {
                // console.log(boxOfficeData);
                this.boxOfficeCollection = boxOfficeData;
                this.boxofficeResource = new DataTableResource(boxOfficeData);
                this.boxofficeResource.count().then(count => this.boxofficeCount = count);
            },
            error => console.log(error));

    }

    OnEdit(boxOffice: BoxOffice) {
        this.router.navigate(['/admin/boxofficedetails', boxOffice.BoxOfficeId]);
    }

    OnDelete(boxOffice: BoxOffice) {
        this.DeleteBoxOffice(boxOffice);
    }

    DeleteBoxOffice(boxOffice: BoxOffice) {
        boxOffice.IsActive = false;
        boxOffice.Status = 0;
        this.boxOfficeService.updateBoxOffice(boxOffice)
            .subscribe((boxOfficeData: BoxOffice) => { alert('Box office deleted successfully.'); this.getBoxOfficeCollection(); },
            error => { console.log(error); alert('Box office is not deleted'); });
    }

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}