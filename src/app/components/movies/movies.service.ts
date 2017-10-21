import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
    topMovies: Observable<any> = null;
    flpCollection: Observable<any> = null;
    constructor(private http: Http) { }
    // public static topMoviesUrl = 'src/resources/movies.json';
    public static MoviesUrl = AppSettings.BaseAPIUrl + 'movieslist';
    public static flpUrl = AppSettings.BaseAPIUrl + 'firstlookposter';

    //getMovies(): Promise<any> {
    //    return this.http.get(MoviesService.topMoviesUrl)
    //        .toPromise()
    //        .then(response => response.json())
    //        .catch(this.handleError);
    //}

    getFLPCollection() {
        if (!this.flpCollection) {
            this.flpCollection = this.http.get(MoviesService.flpUrl)
                .map((res: Response) => res.json())
                .do(flpCollection => console.log('fetched getFLPCollection'))
                .publishReplay(1)
                .refCount();
        }
        return this.flpCollection;
    }

    getMovies() {
        if (!this.topMovies) {
            this.topMovies = this.http.get(MoviesService.MoviesUrl)
                .map((res: Response) => res.json())
                .do(topMovies => console.log('fetched getMovies'))
                .publishReplay(1)
                .refCount();
        }
        return this.topMovies;
    }

    clearCache() {
        this.topMovies = null;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
