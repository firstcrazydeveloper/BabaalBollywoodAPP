import { Component, Input } from '@angular/core';

@Component({
    selector: 'celebrities',
    templateUrl: './celebrities.component.html'
})
export class CelebritiesComponent {
    @Input() public topmovies: Array<any> = [];
}