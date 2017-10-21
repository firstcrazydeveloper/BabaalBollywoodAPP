import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { BoxOffice } from './boxOffice.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoxOfficeService {
    boxOfficeMoviesCollection: Observable<any> = null;
    boxOffice: Observable<any> = null;
    constructor(private http: Http) { }

    public static boxOfficeCollectionUrl = AppSettings.BaseAPIUrl + 'boxoffice';

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

    getAdminBoxOfficeCollection() {
        this.boxOfficeMoviesCollection = this.http.get(BoxOfficeService.boxOfficeCollectionUrl)
            .map((res: Response) => res.json())
            .do(boxOfficeCollection => console.log('fetched getBoxOfficeCollection'))
            .publishReplay(1)
            .refCount();
        return this.boxOfficeMoviesCollection;
    }

    getBoxOffice(boxOfficeId: number) {
        let url = BoxOfficeService.boxOfficeCollectionUrl + '/' + boxOfficeId;
        console.log(url);
        this.boxOffice = this.http.get(url)
            .map((res: Response) => res.json())
            .do(boxOfficeCollection => console.log('fetched getBoxOfficeCollection'))
            .publishReplay(1)
            .refCount();

        return this.boxOffice;
    }


    updateBoxOffice(boxOffice: BoxOffice) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        let options = new RequestOptions({ headers: headers });
        let url = BoxOfficeService.boxOfficeCollectionUrl;
        return this.http.post(url, boxOffice, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    clearCache() {
        this.boxOfficeMoviesCollection = null;
        this.boxOffice = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
