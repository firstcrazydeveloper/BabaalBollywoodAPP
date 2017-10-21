import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/bootstrap/app.module';
import { AuthGuard } from './admin/auth/auth.guard.service';
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
