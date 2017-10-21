import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { TilesDetails } from './tiles.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TilesService {
    tilessCollection: Observable<any> = null;
    tileDetailsData: Observable<any> = null;
    constructor(private http: Http) { }

    public static adminTileCollectionUrl = AppSettings.BaseAPIUrl + 'admintiles';

    getAdminTilesCollection() {

        this.tilessCollection = this.http.get(TilesService.adminTileCollectionUrl)
            .map((res: Response) => res.json())
            .do(boxOfficeCollection => console.log('fetched tiles collection'))
            .publishReplay(1)
            .refCount();

        return this.tilessCollection;
    }

 

    getTileDetails(Id: number) {
        let url = TilesService.adminTileCollectionUrl + '/' + Id;
        console.log(url);
        this.tileDetailsData = this.http.get(url)
            .map((res: Response) => res.json())
            .do(boxOfficeCollection => console.log('fetched Get Tile Details'))
            .publishReplay(1)
            .refCount();

        return this.tileDetailsData;
    }


    updateBoxOffice(tileDetails: TilesDetails) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        let options = new RequestOptions({ headers: headers });
        let url = TilesService.adminTileCollectionUrl;
        return this.http.post(url, tileDetails, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    clearCache() {
        this.tilessCollection = null;
        this.tileDetailsData = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
