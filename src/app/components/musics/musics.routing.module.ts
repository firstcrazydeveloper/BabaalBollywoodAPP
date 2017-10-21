import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicsComponent } from './musics.component';

const musicRoutes: Routes = [
    { path: 'music', component: MusicsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(musicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MusicsRoutingModule { }