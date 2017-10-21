import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { NavigationService } from '../../../common/components/navigation/navigation.service';
import { Menu } from '../../../common/shared/models/menu.model'

@Component({
    selector: 'tiles-list',
    templateUrl: './tiles.component.html'
})
export class TilesComponent {
    @Input() public tiles: any;
    tileDetails: Array<any> = [];

    keys(): Array<string> {
        return Object.keys(this.tileDetails);
    }

    rowKeys(row: any): Array<string> {
        return Object.keys(row);
    }

    constructor() { }

    ngOnInit() {
        this.tileDetails = this.tiles.TileConfigurationsCollection;
    }

    ngOnDestroy() { }
}