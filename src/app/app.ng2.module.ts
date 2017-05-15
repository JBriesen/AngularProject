import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NavigationNG2 } from "./navigationNG2/navigationNG2.component";
import { AppComponent } from "./app.component";
import { NavigationDirective } from './navigation/navigation.component.wrapper'
import {RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations:[AppComponent, NavigationDirective],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap:[],
  providers:[],
  entryComponents:[
    AppComponent,
    ]
})

export class Ng2AppModule {
constructor(public upgrade: UpgradeModule){}

  ngDoBootstrap(){
    this.upgrade.bootstrap(document.body,['app'])
  }
}