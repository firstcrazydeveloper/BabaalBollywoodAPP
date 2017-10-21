import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { FirstLookPosters } from './firstlookposter.model';
import { FirstLookPostersService } from './firstlookposter.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'admin-flp-list',
    templateUrl: './firstlookposterlist.component.html',
    styleUrls: ['./firstlookposterlist.component.min.css']
})
export class FirstLookPosterListComponent {
    flpListSubscription: any;
    flpListCollection: Array<FirstLookPosters> = [];
    flpResource = new DataTableResource(this.flpListCollection);
    flpCount = 0;

    @ViewChild(DataTable) flpTable: any;

    constructor(private flpService: FirstLookPostersService, private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.getFLPCollection();
    }

    public ngOnDestroy() {
        this.flpListSubscription.unsubscribe();
        console.log('Destroyed');
    }

    reloadFLP(params: any) {
        this.flpResource.query(params).then(flp => this.flpListCollection = flp);
    }

    cellColor(car: any) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    getFLPCollection(): void {
        this.flpListSubscription = this.flpService
            .getAdminFLPCollection()
            .subscribe(flpData => {
                console.log(flpData);
                this.flpListCollection = flpData;
                this.flpResource = new DataTableResource(flpData);
                this.flpResource.count().then(count => this.flpCount = count);
            },
            error => console.log(error));

    }

    OnEdit(flp: FirstLookPosters) {
        this.router.navigate(['/admin/firstlookposter', flp.PosterId]);
    }

    OnDelete(flp: FirstLookPosters) {
        this.DeleteFLP(flp);
    }

    DeleteFLP(flp: FirstLookPosters) {
        flp.IsActive = false;
        this.flpService.updateFLP(flp)
            .subscribe((flpData: FirstLookPosters) => { console.log(flpData); alert('FLP is deleted successfully.'); this.getFLPCollection(); },
            error => { console.log(error); alert('FLP is not deleted'); });
    }

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}