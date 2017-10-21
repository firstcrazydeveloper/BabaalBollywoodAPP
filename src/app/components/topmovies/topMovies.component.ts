import { Component, Input } from '@angular/core';

@Component({
    selector: 'top-movies',
    templateUrl: './topmovies.component.html',
    styleUrls: ['./topmovies.component.min.css']
})
export class TopMoviesComponent {
    @Input() public topmovies: Array<any> = [];
}