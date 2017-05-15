var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/upgrade/static", "./navigationNG2/navigationNG2.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular/core");
    const platform_browser_1 = require("@angular/platform-browser");
    const static_1 = require("@angular/upgrade/static");
    const navigationNG2_component_1 = require("./navigationNG2/navigationNG2.component");
    let AppModule = class AppModule {
        ngDoBootstrap() { }
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [navigationNG2_component_1.NavigationNG2],
            imports: [
                platform_browser_1.BrowserModule,
                static_1.UpgradeModule,
            ],
            bootstrap: [],
            providers: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
