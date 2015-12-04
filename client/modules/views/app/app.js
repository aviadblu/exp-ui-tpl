;(function(){
    'use strict';
    angular
        .module('exampleApp')
        .config(Configuration);

    /* @ngInject */
    function Configuration($stateProvider) {
        // Contact state routing
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'modules/views/app/app.tpl.html'
            })
    }

}).call(this);
