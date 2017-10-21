import { Component, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'view-type',
    templateUrl: `./viewType.component.html`
})
export class ViewTypeComponent {
    @Input() public pageNavMenus: Array<any> = [];
    @ViewChild('someVar') el: ElementRef;
    constructor(private rd: Renderer2) { }

    currentItem(menu: any) {
        this.pageNavMenus.forEach((element) => {
            if (menu.Text === element.Text) {
                element.CSS = 'menu-item current-menu-item';
            } else {
                element.CSS = 'menu-item';
            }
        });
    }


}
