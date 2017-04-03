(function(){
    'use strict';

    angular
        .module('userList')
        .controller('UserListController', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl(Dependencies){
        var vm = this;
        
        init();

        function init(){
        }

    }

}());