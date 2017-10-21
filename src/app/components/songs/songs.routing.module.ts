import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs.component';

const songsRoutes: Routes = [
    { path: 'topsong', component: SongsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(songsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SongsRoutingModule { }