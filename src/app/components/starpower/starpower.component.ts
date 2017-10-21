import { Component, Input } from '@angular/core';

@Component({
    selector: 'star-power',
    templateUrl: './starpower.component.html'
})
export class StarPowerComponent {
    @Input() public topmovies: Array<any> = [];
}