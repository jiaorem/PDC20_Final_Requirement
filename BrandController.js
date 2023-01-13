(function () {
    'use strict';

    angular
        .module('app')
        .controller('BrandController', BrandController);

    BrandController.$inject = ['UserService', '$rootScope'];
    function BrandController(UserService, $rootScope) {
        var vm = this;
        
        vm.showUsers = false;
        
        vm.currentUser = null;
        vm.allUsers = [];
        
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }
        function loadCurrentUser() {
            UserService.getByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.currentUser = user;
                });
        }
        function loadAllUsers() {
            UserService.get()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }
    }
})();