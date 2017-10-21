import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Slide } from './slide.module';
import { AppSettings } from '../../system/appSettings.setting';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    slideMovies: Observable<any> = null;
    tilesObs: Observable<any> = null;
    constructor(private http: Http) { }

    public static homePageSlideUrl = AppSettings.BaseAPIUrl + 'image/HomeSlide/imagetype';
    public static tileUrl = AppSettings.BaseAPIUrl + 'tile';
    //getSlides(): Promise<any> {
    //    return this.http.get(HomeService.homePageSlideUrl)
    //        .toPromise()
    //        .then(response => response.json() as Slide[])
    //        .catch(this.handleError);
    //}

    getSlides() {
        if (!this.slideMovies) {
            this.slideMovies = this.http.get(HomeService.homePageSlideUrl)
                .map((res: Response) => res.json())
                .do(slideMovies => console.log('fetched home service getSlides'))
                .publishReplay(1)
                .refCount();
        }
        return this.slideMovies;
    }


    getTiles() {
        if (!this.tilesObs) {
            this.tilesObs = this.http.get(HomeService.tileUrl)
                .map((res: Response) => res.json())
                .do(tilesList => console.log('fetched home service tiles Details'))
                .publishReplay(1)
                .refCount();
        }
        return this.tilesObs;
    }

    clearCache() {
        this.slideMovies = null;
        this.tilesObs = null;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

