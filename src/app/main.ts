import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng1AppModule } from './app.ng1.module';
import { Ng2AppModule } from './app.ng2.module';
import { downgradeComponent } from "@angular/upgrade/static";
import { NavigationNG2 } from "./navigationNG2/navigationNG2.component";

platformBrowserDynamic().bootstrapModule(Ng2AppModule)
    // .then(ref => {
    //     ref.instance.upgrade
    //         .bootstrap(document.body, [Ng1AppModule.name]);
    // });

//works
// m.component('downgradedNavigation',
//   downgradeComponent({component: NavigationNG2}))
