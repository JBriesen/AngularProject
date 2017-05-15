import { Component } from '@angular/core';
import {UpgradeModule, downgradeComponent} from '@angular/upgrade/static'

// const moduleName = 'NavigationNG2';
// angular.module(moduleName, []);

@Component({
  selector: 'navigationNG2',
  templateUrl: './navigationNG2.component.html',
})

export class NavigationNG2{
  constructor() {  }
}

//HybridHelper.downgradeComponent(moduleName, 'NavigationNG2', NavigationNG2);