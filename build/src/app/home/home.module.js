System.register(["./home.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, HomeModule;
    return {
        setters: [
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }
        ],
        execute: function () {
            exports_1("HomeModule", HomeModule = angular
                .module('home', [])
                .component('home', home_component_1.HomeComponent));
        }
    };
});
