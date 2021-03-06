var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/upgrade/static"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular/core");
    const static_1 = require("@angular/upgrade/static");
    // import { Ng1ToNg2Module } from "ui-router-ng1-to-ng2";
    let AppComponent = class AppComponent {
        constructor(upgrade) {
            this.upgrade = upgrade;
        }
        ngOnInit() {
            this.upgrade.bootstrap(document.body, ['app']);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            template: `<div class="ui-view"></div>`,
        }),
        __metadata("design:paramtypes", [static_1.UpgradeModule])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
