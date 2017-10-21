import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie-trailers',
    templateUrl: './movietrailers.component.html'
})
export class MovieTrailersComponent {
    id = 'ym4EJQ7XORk';
    private player:any;
    private ytEvent:any;

    constructor() {

    }
    onStateChange(event:any) {
        this.ytEvent = event.data;
    }
    savePlayer(player:any) {
        this.player = player;
    }

    playVideo() {
        this.player.playVideo();
    }

    pauseVideo() {
        this.player.pauseVideo();
    }
}