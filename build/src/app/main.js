System.register(["@angular/platform-browser-dynamic", "./app.ng2.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_ng2_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_ng2_module_1_1) {
                app_ng2_module_1 = app_ng2_module_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_ng2_module_1.Ng2AppModule);
            // .then(ref => {
            //     ref.instance.upgrade
            //         .bootstrap(document.body, [Ng1AppModule.name]);
            // });
            //works
            // m.component('downgradedNavigation',
            //   downgradeComponent({component: NavigationNG2}))
        }
    };
});
