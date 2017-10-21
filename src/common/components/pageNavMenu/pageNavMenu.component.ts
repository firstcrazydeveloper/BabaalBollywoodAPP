import { Component, Input, Renderer2, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Menu } from '../../../common/shared/models/menu.model'

@Component({
    selector: 'page-nav-menu',
    templateUrl: `./pageNavMenu.component.html`
})
export class PageNavigationMenuComponent {
    @Input() pageNavMenus: Array<Menu>;
    @Input() activeMenu: string;
    @Input() parentMenu: string;
    @ViewChild('someVar') el: ElementRef;
    constructor(private rd: Renderer2) { }

    ngAfterContentChecked() {
        if (this.activeMenu !== this.parentMenu) {
            this.currentItem(this.activeMenu);
        }
    }

    ngOnChanges(changes: any) {
        for (let propName in changes) {
            let chng = changes[propName];
            //let cur = JSON.stringify(chng.currentValue);
            //let prev = JSON.stringify(chng.previousValue);
            //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            if (this.activeMenu !== this.parentMenu) {
                this.currentItem(this.activeMenu);
            }
        }
    }

    currentItem(menu: any) {
        if (this.pageNavMenus !== undefined) {
            this.pageNavMenus.forEach((element) => {

                if (menu === element.Description) {
                    element.CSS = 'active';
                } else {
                    element.CSS = '';
                }
            });
        }
    }
}
