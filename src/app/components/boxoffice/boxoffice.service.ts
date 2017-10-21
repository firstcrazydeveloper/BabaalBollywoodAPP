import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { BoxOffice } from './boxoffice.model';

@Injectable()
export class BoxOfficeService {
    boxOfficeMoviesCollection: Observable<any> = null;
    constructor(private http: Http) { }

    //public static boxOfficeCollectionUrl = 'src/resources/boxOfficeCollection.json';
    public static boxOfficeCollectionUrl = AppSettings.BaseAPIUrl + 'boxoffice';
    //getBoxOfficeCollection(): Promise<any> {
    //    return this.http.get(BoxOfficeService.boxOfficeCollectionUrl)
    //        .toPromise()
    //        .then(response => response.json())
    //        .catch(this.handleError);
    //}

    getBoxOfficeCollection() {
        if (!this.boxOfficeMoviesCollection) {
            this.boxOfficeMoviesCollection = this.http.get(BoxOfficeService.boxOfficeCollectionUrl)
                .map((res: Response) => res.json())
                .do(boxOfficeCollection => console.log('fetched getBoxOfficeCollection'))
                .publishReplay(1)
                .refCount();
        }
        return this.boxOfficeMoviesCollection;
    }

    clearCache() {
        this.boxOfficeMoviesCollection = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
