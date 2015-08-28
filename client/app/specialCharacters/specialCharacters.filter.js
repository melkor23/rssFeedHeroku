'use strict';

angular.module('pruebaMeanApp')
  .filter('specialCharacters', function () {
    return function (word) {
       return word.replace('&Ntilde;', 'Ñ').replace('&ntilde;', 'ñ');
    };
  });
