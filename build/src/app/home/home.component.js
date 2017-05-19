System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function componentController() {
        var vm = this;
        vm.nameChanged = nameChanged;
        init();
        function init() {
            vm.name = 'Jack';
        }
        function nameChanged($event) {
            console.log('name changed', $event);
            vm.name = $event;
        }
    }
    var HomeComponent;
    return {
        setters: [],
        execute: function () {
            exports_1("HomeComponent", HomeComponent = {
                template: '{{$ctrl.nameChanged}}<app-component [name]="$ctrl.name" (on-button-click)="$ctrl.nameChanged($event)"></app-component>',
                controller: componentController
            });
        }
    };
});
