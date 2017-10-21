import { Component, Input } from '@angular/core';
import { Slide } from '../slide/slide.component';
import { Carousel } from './carousel.component';

@Component({
    selector: 'carousel-render',
    templateUrl: './carousel.render.html'
})
export class CarouselRender {
    @Input() public slides: Array<any> = [];
    //The time to show the next photo
    private NextPhotoInterval: number = 5000;
    //Looping or not
    private noLoopSlides: boolean = false;
    //Photos
    // private slides: Array<any> = [];

    

   

    private removeLastSlide() {
        this.slides.pop();
    }
}