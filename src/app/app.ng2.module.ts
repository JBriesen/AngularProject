import { NgModule, forwardRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavigationNG2 } from "./navigationNG2/navigationNG2.component";
import { AppComponent } from "./app.component";
//import { AngularJSComponent } from './navigation/navigation.component.wrapper'
import {RouterModule, Routes} from '@angular/router'



@NgModule({
  declarations:[AppComponent],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule,
  ],
  bootstrap:[],
  providers:[],
  entryComponents:[AppComponent]
})

export class Ng2AppModule {
  constructor(){
    console.log('ng 2 bootstrapped')
  }

  ngDoBootstrap(){
    //this.upgrade.bootstrap(document.body,['app'])
  }
}