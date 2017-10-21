import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarPowerComponent } from './starpower.component';

const starpowerRoutes: Routes = [
    { path: 'starpower', component: StarPowerComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(starpowerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StarPowerRoutingModule { }