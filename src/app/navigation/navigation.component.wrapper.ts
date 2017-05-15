import { Directive, ElementRef, Injector } from '@angular/core'
import { UpgradeComponent } from '@angular/upgrade/static'

@Directive({
    selector: 'angularjs-component'
})
export class NavigationDirective extends UpgradeComponent{
    constructor(elementRef:ElementRef, injector:Injector){
        console.log(injector);
        super('navigation',elementRef,injector)
    }
}

