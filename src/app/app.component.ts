import { OnInit,Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
 selector: 'app-component',
 template: `<div class="ui-view"></div>`,
})


export class AppComponent implements OnInit {
 constructor(private upgrade: UpgradeModule) { }

ngOnInit() {
    console.log('test')
    this.upgrade.bootstrap(document.body, ['app']);
 }
}