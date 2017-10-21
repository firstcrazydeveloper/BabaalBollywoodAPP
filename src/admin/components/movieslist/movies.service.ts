import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { MoviesList } from './movie.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
    moviesCollection: Observable<any> = null;
    movie: Observable<any> = null;
    constructor(private http: Http) { }

    public static moviesUrl = AppSettings.BaseAPIUrl + 'adminmovieslist';

    getMoviesCollection() {
        if (!this.moviesCollection) {
            this.moviesCollection = this.http.get(MoviesService.moviesUrl)
                .map((res: Response) => res.json())
                .do(boxOfficeCollection => console.log('fetched getMoviesCollection'))
                .publishReplay(1)
                .refCount();
        }
        return this.moviesCollection;
    }

    getAdminMoviesCollection() {
        this.moviesCollection = this.http.get(MoviesService.moviesUrl)
            .map((res: Response) => res.json())
            .do(boxOfficeCollection => console.log('fetched getMoviesCollection'))
            .publishReplay(1)
            .refCount();
        return this.moviesCollection;
    }

    getMovies(moviesId: number) {
        let url = MoviesService.moviesUrl + '/' + moviesId;
        console.log(url);
        this.movie = this.http.get(url)
            .map((res: Response) => res.json())
            .do(moviesColection => console.log('fetched getMoviesCollection'))
            .publishReplay(1)
            .refCount();

        return this.movie;
    }


    updateMovie(movies: MoviesList) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        let options = new RequestOptions({ headers: headers });
        let url = MoviesService.moviesUrl;
        return this.http.post(url, movies, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    clearCache() {
        this.moviesCollection = null;
        this.movie = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
