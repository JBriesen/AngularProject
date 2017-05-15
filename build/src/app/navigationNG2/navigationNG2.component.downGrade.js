(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./navigationNG2.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const navigationNG2_component_1 = require("./navigationNG2.component");
    const moduleName = 'document';
    HybridHelper.downgradeComponent(moduleName, 'document', navigationNG2_component_1.NavigationNG2);
});
