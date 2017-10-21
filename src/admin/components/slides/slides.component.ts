import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { HomeService } from '../../../app/components/home/home.service';
import { Slide } from '../../../app/components/home/slide.module';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'admin-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css']
})
export class SlidesComponent {
    slidesSubscription: any;
    slides: Array<Slide> = [];
    slideResource = new DataTableResource(this.slides);
    slideCount = 0;

    @ViewChild(DataTable) slideTable: any;

    constructor(private homeService: HomeService, private route: ActivatedRoute,
        private router: Router) { }

    public ngOnInit() {
        this.getSlides();
    }

    public ngOnDestroy() {
        this.slidesSubscription.unsubscribe();
        console.log('Destroyed');
    }

    onSelect(slide: Slide) {
        this.router.navigate(['/slideDetails', slide.ImageId]);
    }



    getSlides(): void {
        this.slidesSubscription = this.homeService
            .getSlides()
            .subscribe(slides => {
                this.slideResource = new DataTableResource(slides);
                this.slides = slides;
                this.slideResource.count().then(count => this.slideCount = count);
            },
            error => console.log(error));
    }




    reloadSlides(params: any) {
        this.slideResource.query(params).then(slides => this.slides = slides);
    }

    cellColor(car: any) {
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
