import { Component, Input } from '@angular/core';

@Component({
    selector: 'musics',
    templateUrl: './musics.component.html'
})
export class MusicsComponent {
    @Input() public topmovies: Array<any> = [];

    slides = [
        { img: "http://placehold.it/350x150/000000" },
        { img: "http://placehold.it/350x150/111111" },
        { img: "http://placehold.it/350x150/333333" },
        { img: "http://placehold.it/350x150/666666" },
        { img: "http://placehold.it/350x150/000000" },
        { img: "http://placehold.it/350x150/111111" },
        { img: "http://placehold.it/350x150/333333" },
        { img: "http://placehold.it/350x150/666666" }
    ];
    slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

    addSlide() {
        this.slides.push({ img: "http://placehold.it/350x150/777777" })
    }

    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }

    afterChange(e:any) {
        console.log('afterChange');
    }
}