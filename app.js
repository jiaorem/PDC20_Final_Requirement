(
    function () {
        'use strict';
    
        angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)
            .run(run);
    
        config.$inject = ['$routeProvider', '$locationProvider'];
        function config($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'home.html',
                    controllerAs: 'vm'
                })
                .when('/login', {
                  controller: 'LoginController',
                  templateUrl: 'login.html',
                  controllerAs: 'vm'
                })            
                // .when('/home', {
                //   controller: 'HomeController',
                //     templateUrl: 'home.html',
                //     controllerAs: 'vm'
                // })      
                .when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'register.html',
                    controllerAs: 'vm'
                })
                .when('/about', {
                  controller: 'AboutController',
                  templateUrl: 'about.html',
                  controllerAs: 'vm'
                })
                .when('/brandnew', {
                    controller: 'BrandController',
                    templateUrl: 'brandnew.html',
                    controllerAs: 'vm'
                })
                .when('/usedcars', {
                    controller: 'UsedController',
                    templateUrl: 'usedcars.html',
                    controllerAs: 'vm'
                })
                .when('/news', {
                    controller: 'NewsController',
                    templateUrl: 'news.html',
                    controllerAs: 'vm'
                })
                .when('/contact', {
                    controller: 'ContactController',
                    templateUrl: 'contact.html',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/' });
        }    
        run.$inject = ['$rootScope'];
        
        function run(){
          console.clear();
        }
    })();