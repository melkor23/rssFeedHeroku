'use strict';

angular.module('pruebaMeanApp')
  .filter('shortTitle', function () {
    return function (title) {
      return title.length > 20 ? title.substring(0, 40) + ' ...' : title;
    };
  });
