System.register(["@angular/platform-browser-dynamic", "./app.ng1.module", "./app.ng2.module", "@angular/upgrade/static"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_ng1_module_1, app_ng2_module_1, static_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_ng1_module_1_1) {
                app_ng1_module_1 = app_ng1_module_1_1;
            },
            function (app_ng2_module_1_1) {
                app_ng2_module_1 = app_ng2_module_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            }
        ],
        execute: function () {
            //works
            // m.component('downgradedNavigation',
            //   downgradeComponent({component: NavigationNG2}))
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_ng2_module_1.Ng2AppModule).then(platformRef => {
                const upgrade = platformRef.injector.get(static_1.UpgradeModule);
                // bootstrap angular1
                upgrade.bootstrap(document.body, [app_ng1_module_1.Ng1AppModule.name]);
            });
        }
    };
});
