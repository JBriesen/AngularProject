import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeModule, downgradeComponent, UpgradeComponent } from '@angular/upgrade/static';

@Component({
 selector: 'app-component',
 template: `
    <div>
        <h1>Hello from {{ name }}!! :)</h1>
        <button (click)="onClick()">click me bro</button> 
    </div>
 `
})
export class AppComponent implements OnInit{
    @Input() name: string;
    @Output() onButtonClick: EventEmitter<string> = new EventEmitter();


    constructor(private upgrade: UpgradeModule){}
    ngOnInit() {
        console.log('ng2', this.onButtonClick)
    }

    onClick() {
        console.log('clicked');
        this.onButtonClick.emit('Roy');
    }
}

 