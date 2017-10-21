import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { HomeComponent } from '../components/home/home.component';
import { DataTableDemo } from '../components/datatabledemo/data-table-demo3';
import { PageNotFoundComponent } from '../../common/components/pagenotfound/pagenotfound.component';
import { CanDeactivateGuard } from '../../admin/auth/candeactivateguard.service';
import { AuthGuard } from '../../admin/auth/auth.guard.service';
import { MoviesGuard } from '../../admin/auth/movies.guard';
const appRoutes: Routes = [
    { path: 'datatable', component: DataTableDemo },
    {
        path: 'admin',
        loadChildren: 'admin/components/home/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'movies',
        loadChildren: 'app/components/movies/movies.module#MoviesModule',
        data: { preload: true }
    },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { preloadingStrategy: SelectivePreloadingStrategy }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

    constructor(private AuthGuard: AuthGuard) {
        // console.log(AuthGuard);
    }
}