import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { PageNavigationMenuComponent } from './components/pageNavMenu/pageNavMenu.component';
import { ViewTypeComponent } from './components/viewType/viewType.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationService } from './components/navigation/navigation.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, RouterModule],
    declarations: [PageNavigationMenuComponent, ViewTypeComponent, NavigationComponent],
    providers: [NavigationService],
    exports: [PageNavigationMenuComponent, ViewTypeComponent, NavigationComponent,
        CommonModule, FormsModule, RouterModule]
})
export class SharedModule { }