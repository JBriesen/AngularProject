(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/upgrade/static"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const static_1 = require("@angular/upgrade/static");
    exports.HybridHelper = {
        downgradeComponent: (moduleName, componentName, componentClass, options) => {
            options = options || {};
            const inputs = options.inputs || [];
            const outputs = options.outputs || [];
            const component = componentClass;
            angular.module(moduleName).directive(componentName, static_1.downgradeComponent({
                component, inputs, outputs
            }));
            return TmlaUpgradeHelper;
        },
        downgradeProvider: (moduleName, providerName, providerClass) => {
            angular.module(moduleName).factory(providerName, static_1.downgradeInjectable(providerClass));
            return TmlaUpgradeHelper;
        },
        buildProviderForUpgrade: (ng1Name, ng2Name) => {
            ng2Name = ng2Name || ng1Name;
            return {
                provide: ng2Name,
                useFactory: buildFactoryForUpgradeProvider(ng1Name),
                deps: ['$injector']
            };
        }
    };
    function buildFactoryForUpgradeProvider(ng1Name) {
        return (injector) => injector.get(ng1Name);
    }
});
