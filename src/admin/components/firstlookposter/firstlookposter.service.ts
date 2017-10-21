import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { FirstLookPosters } from './firstlookposter.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FirstLookPostersService {
    flpCollection: Observable<any> = null;
    flp: Observable<any> = null;
    constructor(private http: Http) { }

    public static apiUrl = AppSettings.BaseAPIUrl + 'adminfirstlookposter';

    getFLPCollection() {
        if (!this.flpCollection) {
            this.flpCollection = this.http.get(FirstLookPostersService.apiUrl)
                .map((res: Response) => res.json())
                .do(flpCollection => console.log('fetched getFLPCollection'))
                .publishReplay(1)
                .refCount();
        }
        return this.flpCollection;
    }

    getAdminFLPCollection() {
        this.flpCollection = this.http.get(FirstLookPostersService.apiUrl)
            .map((res: Response) => res.json())
            .do(flpOfficeCollection => console.log('fetched getAdminFLPCollection'))
            .publishReplay(1)
            .refCount();
        return this.flpCollection;
    }

    getFLP(posterId: number) {
        let url = FirstLookPostersService.apiUrl + '/' + posterId;
        console.log(url);
        this.flp = this.http.get(url)
            .map((res: Response) => res.json())
            .do(moviesColection => console.log('fetched getAdminFLPCollection'))
            .publishReplay(1)
            .refCount();

        return this.flp;
    }


    updateFLP(flp: FirstLookPosters) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        let options = new RequestOptions({ headers: headers });
        let url = FirstLookPostersService.apiUrl;
        return this.http.post(url, flp, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    clearCache() {
        this.flpCollection = null;
        this.flp = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
