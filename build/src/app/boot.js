(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/upgrade/static", "@angular/platform-browser-dynamic", "./app.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const static_1 = require("@angular/upgrade/static");
    const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    const app_module_1 = require("./app.module");
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(platformRef => {
        const upgrade = platformRef.injector.get(static_1.UpgradeModule);
        upgrade.bootstrap(document.body, ['app']);
    });
});
