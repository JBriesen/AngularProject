function componentController(){
            var vm = this;
            vm.nameChanged = nameChanged;
            
            init();

            function init(){
                vm.name = 'Jack'
            }

            function nameChanged($event) {
                console.log('name changed', $event);
                vm.name = $event;
            }
        }

        export const HomeComponent = {
            //template: '{{$ctrl.nameChanged}}<app-component [name]="$ctrl.name" (on-button-click)="$ctrl.nameChanged($event)"></app-component>',
            templateUrl:'./home.component.html',
            controller: componentController
        }
    