import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritiesComponent } from './celebrities.component';

const celebritiesRoutes: Routes = [
    { path: 'celebrities', component: CelebritiesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(celebritiesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CelebritiesRoutingModule { }