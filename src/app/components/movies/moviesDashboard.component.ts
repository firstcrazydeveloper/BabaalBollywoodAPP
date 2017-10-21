import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { NavigationService } from '../../../common/components/navigation/navigation.service';
import { Menu } from '../../../common/shared/models/menu.model';

@Component({
    selector: 'movies-dashboard',
    templateUrl: './moviesDashboard.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesDashboardComponent {
    moviesMenus: Array<Menu> = [];
    activeMenu: string;
    moviesMenuSubscription: any;


    constructor(private navigationService: NavigationService, private route: ActivatedRoute, private router: Router) {
       
        this.route.url.forEach((segments: UrlSegment[]) => {
            let urlList = this.router.url.split('/');
            console.log('Abhsihek');
            this.activeMenu = urlList[2];
            console.log(urlList);
            console.log(this.activeMenu);
            console.log('End Abhsihek');
        });
    }

    ngOnInit() {
        
        this.getMoviesNavigationMenu();
    }

    ngOnDestroy() {
        this.moviesMenuSubscription.unsubscribe();
        
    }

    getMoviesNavigationMenu(): void {
        this.moviesMenuSubscription = this.navigationService
            .getAllTypeMenu()
            .subscribe(menus => this.moviesMenus = menus.filter(this.getMenu),
            error => console.log(error));
    }

    getMenu(elem: Menu) {
        return elem.Type === 'MoviesMenu';
    }
}