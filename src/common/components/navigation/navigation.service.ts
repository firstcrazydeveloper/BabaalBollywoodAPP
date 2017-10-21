import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../../app/system/appSettings.setting';
import { Menu } from '../../shared/models/menu.model'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class NavigationService {
    navigationMenu: Observable<any> = null;
    constructor(private http: Http) { }

    public static navigationUrl = AppSettings.BaseAPIUrl + 'navmenu';
    //getTopNavigationMenu(): Promise<Menu[]> {
    //    return this.http.get(NavigationService.navigationUrl)
    //        .toPromise()
    //        .then(response => response.json())
    //        .catch(this.handleError);
    //}

    getAllTypeMenu(){
        if (!this.navigationMenu) {
            this.navigationMenu = this.http.get(NavigationService.navigationUrl)
                .map((res: Response) => res.json())
                .do(navigationMenu => console.log('fetched navigationMenu'))
                .publishReplay(1)
                .refCount();
        }
        return this.navigationMenu;
    }
    

    clearCache() {
        this.navigationMenu = null;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

