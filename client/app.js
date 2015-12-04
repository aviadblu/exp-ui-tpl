(function (window, angular) {
    'use strict';

    angular
        .module('example.services', []);

    angular
        .module('example.factories', []);

    angular
        .module('example.controllers', []);

    angular
        .module('example.filters', []);

    angular
        .module('example.constants', []);

    angular
        .module('example.directives', []);


    angular
        .module('example', [
            'example.services',
            'example.factories',
            'example.controllers',
            'example.filters',
            'example.constants',
            'example.directives'
        ]);

})(window, window.angular);

angular.module('exampleApp', [
    'ui.router',
    'example'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider' ,function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
}]);
