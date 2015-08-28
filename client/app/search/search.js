'use strict';

angular.module('pruebaMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });