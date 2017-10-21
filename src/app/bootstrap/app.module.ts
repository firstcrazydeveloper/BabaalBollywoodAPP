import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { DataTableModule } from 'angular-2-data-table';

import { HomeService } from '../components/home/home.service';
import { TopMoviesService } from '../components/topmovies/topMovies.service';
import { BoxOfficeService } from '../components/boxoffice/boxoffice.service';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { DataTableDemo } from '../components/datatabledemo/data-table-demo3';
import { LandingComponent } from '../components/landing/landing.component';
import { TopMoviesComponent } from '../components/topmovies/topmovies.component';
import { TilesComponent } from '../components/tiles/tiles.component';
import { Slide } from '../components/slide/slide.component';
import { Carousel } from '../components/carousel/carousel.component';
import { CarouselRender } from '../components/carousel/carousel.render';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from '../../common/components/pagenotfound/pagenotfound.component';
import { AuthGuard } from '../../admin/auth/auth.guard.service';
import { MoviesGuard } from '../../admin/auth/movies.guard';
import { AuthService } from '../../admin/auth/auth.service';
import { LoginModule } from '../../admin/components/login/login.module';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { BoxOfficeModule } from '../components/boxoffice/boxoffice.module';
import { CelebritiesModule } from '../components/celebrities/celebrities.module';
import { MoviesModule } from '../components/movies/movies.module';
import { MusicsModule } from '../components/musics/musics.module';
import { SongsModule } from '../components/songs/songs.module';
import { StarPowerModule } from '../components/starpower/starpower.module';
import { AboutModule } from '../components/about/about.module';
import { SharedModule } from '../../common/shared.module';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, DataTableModule, BoxOfficeModule, CelebritiesModule, MoviesModule, MusicsModule, SongsModule, StarPowerModule, AboutModule, LoginModule, AppRoutingModule, SharedModule],
    declarations: [AppComponent, LandingComponent, HomeComponent, TopMoviesComponent, TilesComponent, Slide, Carousel, CarouselRender, DataTableDemo, PageNotFoundComponent],
    providers: [HomeService, TopMoviesService, BoxOfficeService, AuthGuard, AuthService, MoviesGuard, SelectivePreloadingStrategy],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
