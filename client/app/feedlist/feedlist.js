'use strict';

angular.module('pruebaMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('feedlist', {
        url: '/feedlist',
        templateUrl: 'app/feedlist/feedlist.html',
        controller: 'FeedlistCtrl'
      });
  });