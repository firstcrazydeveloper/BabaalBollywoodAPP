import { Component } from '@angular/core';
import { NavigationService } from '../../../common/components/navigation/navigation.service';
import { Menu } from '../../../common/shared/models/menu.model'



@Component({
    selector: 'landing-page',
    templateUrl: `./landing.component.html`,
})
export class LandingComponent {
    menus: Array<Menu> = [];
    menuType: string = 'TopNav';
    siteTitle: string = 'BabaalBollywood.Com';
    siteDescription: string = 'The Filmy Encyclopedia';
    subscription: any;
    constructor(
        private navigationService: NavigationService) { }

    ngOnInit() {
        this.getTopNavigationMenu();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        console.log('Destroyed');
    }

    getTopNavigationMenu(): void {
        this.subscription = this.navigationService
            .getAllTypeMenu()
            .subscribe(menus => this.menus = menus.filter(this.getTopNav),
            error => console.log(error));
    }

    getTopNav(elem: Menu) {
        return elem.Type === 'TopNav';
    }
}
