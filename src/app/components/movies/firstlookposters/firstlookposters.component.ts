import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { NavigationService } from '../../../../common/components/navigation/navigation.service';
import { Menu } from '../../../../common/shared/models/menu.model'
import { FirstLookPosters } from './firstlookposters.model'
import { MoviesService } from '../movies.service'

@Component({
    selector: 'musics',
    templateUrl: './firstlookposters.component.html',
    styleUrls: ['./firstlookposters.component.css']
})
export class FirstLookPostersComponent {
    slideConfig: any = { "slidesToShow": 4, "slidesToScroll": 4 };
    flpListSubscription: any;
    flpListCollection: Array<FirstLookPosters> = [];
    activeMenu: string;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
        });
       
    }

    ngOnInit() {
        this.getFLPCollection();
        
    }

    getFLPCollection(): void {
        this.flpListSubscription = this.moviesService
            .getFLPCollection()
            .subscribe(flpData => {
                console.log(flpData);
                this.flpListCollection = flpData;
            },
            error => console.log(error));

    }
    
    ngOnDestroy() {
        this.flpListSubscription.unsubscribe();
        console.log('Destroyed');
    }

    
    

    addSlide() { }

    removeSlide() { }

    afterChange(e: any) {
        console.log('afterChange');
    }

    displyfirstlook() {
       //  alert('hi');
    }
}