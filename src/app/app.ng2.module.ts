import { NgModule, forwardRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavigationNG2Component } from "./navigationNG2/navigationNG2.component";
import { AppComponent } from "./app.component";
import {RouterModule, Routes} from '@angular/router'
import { CustomerStatsComponentNg2 } from "./home/customer-stats.ng2/customer-stats.component";

import { StatsServiceProvider } from './ajs-upgraded-providers';
import { SumOfvaluePipe } from "./filters/sumOfValue.pipe";

@NgModule({
  declarations:[CustomerStatsComponentNg2, SumOfvaluePipe],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule,
  ],
  bootstrap:[],
  providers:[StatsServiceProvider],
  entryComponents:[CustomerStatsComponentNg2]
})

export class Ng2AppModule {
  constructor(){
    console.log('ng 2 bootstrapped')
  }

  ngDoBootstrap(){
  }
}