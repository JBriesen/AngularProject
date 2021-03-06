System.register(["@angular/core", "@angular/upgrade/static"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, static_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            }
        ],
        execute: function () {
            AppComponent = class AppComponent {
                constructor(upgrade) {
                    this.upgrade = upgrade;
                    this.onButtonClick = new core_1.EventEmitter();
                }
                ngOnInit() {
                    console.log('ng2', this.onButtonClick);
                }
                onClick() {
                    console.log('clicked');
                    this.onButtonClick.emit('Roy');
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], AppComponent.prototype, "name", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", core_1.EventEmitter)
            ], AppComponent.prototype, "onButtonClick", void 0);
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app-component',
                    template: `
    <div>
        <h1>Hello from {{ name }}!! :)</h1>
        <button (click)="onClick()">click me bro</button> 
    </div>
 `
                }),
                __metadata("design:paramtypes", [static_1.UpgradeModule])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
