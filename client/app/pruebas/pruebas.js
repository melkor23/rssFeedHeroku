'use strict';

angular.module('pruebaMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pruebas', {
        url: '/pruebas',
        templateUrl: 'app/pruebas/pruebas.html',
        controller: 'PruebasCtrl'
      });
  });