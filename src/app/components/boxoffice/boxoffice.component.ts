import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { BoxOffice } from './boxoffice.model';
import { BoxOfficeService } from './boxoffice.service';
import { NavigationService } from '../../../common/components/navigation/navigation.service';
import { Menu } from '../../../common/shared/models/menu.model'

@Component({
    selector: 'box-office',
    templateUrl: './boxoffice.component.html',
    styleUrls: ['./boxoffice.component.min.css']    
})
export class BoxOfficeComponent {
    @Input() public topmovies: Array<any> = [];
    boxOfficeMenus: Array<Menu> = [];
    activeMenu: string;
    menuSubscription: any;
    boxOfficeSubscription: any;
    public boxOfficeCollection: Array<BoxOffice> = [];

    constructor(private boxOfficeService: BoxOfficeService, private navigationService: NavigationService, private route: ActivatedRoute) {

    }

    ngOnChanges(){

    }

    ngOnInit() {
        this.route.url.forEach((segments: UrlSegment[]) => {
            this.activeMenu = segments.join("/");
        });
        this.getTopMovies();
        this.getBoxOfficeNavigationMenu();
    }

    ngDoCheck() {

    }

    ngAfterContentInit() {

    }

    ngAfterContentChecked() {

    }

    ngAfterViewChecked() {

    }

    ngOnDestroy() {
        this.menuSubscription.unsubscribe();
        this.boxOfficeSubscription.unsubscribe();
    }

    //getTopMovies(): void {
    //    this.boxOfficeService
    //        .getBoxOfficeCollection()
    //        .then(boxOfficeData => {
    //            this.boxOfficeCollection = boxOfficeData;
    //        });
    //}

    getTopMovies(): void {
        this.boxOfficeSubscription = this.boxOfficeService
            .getBoxOfficeCollection()
            .subscribe(boxOfficeData => { this.boxOfficeCollection = boxOfficeData.filter(this.getBoxOffice); console.log('Nutan'); console.log(this.boxOfficeCollection); },
            error => console.log(error));
    }

    //getBoxOfficeNavigationMenu(): void {
    //    let exists: boolean = this.cacheService.exists('boxOfficeMenus');
    //    if (!exists) {
    //        this.navigationService
    //            .getTopNavigationMenu()
    //            .then(menus => {
    //                this.cacheService.set('boxOfficeMenus', menus.filter(this.getMenu));
    //                this.boxOfficeMenus = menus.filter(this.getMenu);
    //            });
    //    } else {
    //        let data: any | null = this.cacheService.get('boxOfficeMenus');
    //        this.boxOfficeMenus = data;
    //    }
    //}

    getBoxOfficeNavigationMenu(): void {
        this.menuSubscription = this.navigationService
            .getAllTypeMenu()
            .subscribe(menus => this.boxOfficeMenus = menus.filter(this.getMenu),
            error => console.log(error));
    }

    getMenu(elem: Menu) {
        return elem.Type === 'BoxOfficeMenu';
    }

    getBoxOffice(boxOffice: BoxOffice) {
        return boxOffice.IsActive === true;
    }
}