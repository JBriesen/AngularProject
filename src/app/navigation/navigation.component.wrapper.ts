import { Directive, ElementRef, Injector } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static'

// @Directive({
//     selector: 'angularjs-component'
// })
// export class NavigationDirective extends UpgradeComponent{
//     constructor(elementRef:ElementRef, injector:Injector){
//         console.log(injector);
//         super('navigation',elementRef,injector)
//     }
// }

@Directive({selector: 'navigation-component'})
export class AngularJSComponent extends UpgradeComponent {
  constructor(ref: ElementRef, inj: Injector) {
    super('navigationComponent', ref, inj);
  }
}
const m = angular.module('app', []);

m.component('navigationComponent', {});