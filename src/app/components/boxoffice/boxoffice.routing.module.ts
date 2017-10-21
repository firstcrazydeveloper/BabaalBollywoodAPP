import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxOfficeComponent } from './boxOffice.component';

const boxOfficeRoutes: Routes = [
    { path: 'boxoffice', component: BoxOfficeComponent },
    { path: 'BollywoodCollection', component: BoxOfficeComponent },
    { path: 'TopCollection', component: BoxOfficeComponent },
    { path: 'HollywoodCollection', component: BoxOfficeComponent },
    { path: 'KollywoodCollection', component: BoxOfficeComponent },
    { path: 'OthersCollection', component: BoxOfficeComponent },
    { path: 'TollywoodCollection', component: BoxOfficeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(boxOfficeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BoxOfficeRoutingModule { }