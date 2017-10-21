import { Component, Input } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    @Input() public topmovies: Array<any> = [];
}