'use strict';

angular.module('pruebaMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('all', {
        url: '/all',
        templateUrl: 'app/all/all.html',
        controller: 'AllCtrl'
      });
  });