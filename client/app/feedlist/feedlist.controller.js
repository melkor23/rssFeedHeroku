'use strict';

angular.module('pruebaMeanApp')
    .controller('FeedlistCtrl', function ($scope, $http) {
        $scope.feedRss = {};

        $http.get('/api/rssFeeds').success(function (feedlist) {
            $scope.feedRss = feedlist;

        });

    });