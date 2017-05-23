import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular' 

@Directive({selector: 'navigation-component'})
export class AngularJSComponent extends UpgradeComponent {
  constructor(ref: ElementRef, inj: Injector) {
    super('navigationComponent', ref, inj);
  }
}
angular.module('app', [])
.component('navigationComponent', {});