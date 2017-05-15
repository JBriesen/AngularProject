System.register(["@angular/core", "@angular/platform-browser", "@angular/upgrade/static", "./app.component", "./navigation/navigation.component.wrapper"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, static_1, app_component_1, navigation_component_wrapper_1, Ng2AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navigation_component_wrapper_1_1) {
                navigation_component_wrapper_1 = navigation_component_wrapper_1_1;
            }
        ],
        execute: function () {
            Ng2AppModule = class Ng2AppModule {
                constructor(upgrade) {
                    this.upgrade = upgrade;
                }
                ngDoBootstrap() {
                    this.upgrade.bootstrap(document.body, ['app']);
                }
            };
            Ng2AppModule = __decorate([
                core_1.NgModule({
                    declarations: [app_component_1.AppComponent, navigation_component_wrapper_1.NavigationDirective],
                    imports: [
                        platform_browser_1.BrowserModule,
                        static_1.UpgradeModule,
                    ],
                    bootstrap: [],
                    providers: [],
                    entryComponents: [
                        app_component_1.AppComponent,
                    ]
                }),
                __metadata("design:paramtypes", [static_1.UpgradeModule])
            ], Ng2AppModule);
            exports_1("Ng2AppModule", Ng2AppModule);
        }
    };
});
