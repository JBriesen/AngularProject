import { OnInit, Component } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import * as _angular_ from 'angular';

declare global {
  const angular: typeof _angular_;
}

@Component({
 selector: 'app-component',
 template: `
 <p> angular 2 bootstrapped </p>
 <div class='ui-view'></div>
<router-outlet></router-outlet>
 `,
})
export class AppComponent{}

const m = angular.module('app',['userList', 'navigation', 'ngRoute', 'ui.router', 'ui.router.state.events']);
m.directive('appComponent', downgradeComponent({component:AppComponent}))
