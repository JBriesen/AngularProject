import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from '../app/app.module'
import { UpgradeModule } from '@angular/upgrade/static';

//bootstraps the Angular App and component
platformBrowserDynamic().bootstrapModule(AppModule)
