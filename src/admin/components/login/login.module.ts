import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { AuthGuard } from '../../auth/auth.guard.service';
import { AuthService } from '../../auth/auth.service';


@NgModule({
    imports: [CommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [AuthGuard, AuthService]
})
export class LoginModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/