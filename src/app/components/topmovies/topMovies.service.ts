import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TopMoviesService {
    topMovies: Observable<any> = null;
    constructor(private http: Http) { }

    public static topMoviesUrl = 'src/resources/topmovies.json';
    //getTopMovies(): Promise<any> {
    //    return this.http.get(TopMoviesService.topMoviesUrl)
    //        .toPromise()
    //        .then(response => response.json())
    //        .catch(this.handleError);
    //}

    getTopMovies() {
        if (!this.topMovies) {
            this.topMovies = this.http.get(TopMoviesService.topMoviesUrl)
                .map((res: Response) => res.json())
                .do(topMovies => console.log('fetched home service getSlides'))
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

