import { Component, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Menu } from '../../shared/models/menu.model';

@Component({
    selector: 'navigation-menu',
    templateUrl: `./navigation.component.html`,
})
export class NavigationComponent {
    @Input() public menus: Array<Menu> = [];
    @ViewChild('menuList') el: ElementRef;
    clicked: boolean = false;
    constructor(private rd: Renderer2) { }

    currentItem(menu: Menu) {
        this.menus.forEach((element) => {
            if (menu.Text === element.Text) {
                element.CSS = 'menu-item current-menu-item';
            } else {
                element.CSS = 'menu-item';
            }
        });
    }

    displayMenu() {
        this.clicked = this.clicked === true ? false : true;
    }
}
