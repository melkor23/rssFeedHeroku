'use strict';

angular.module('pruebaMeanApp')
    .controller('AllCtrl', function ($scope, $http, socket, Auth) {

        $scope.listAll = [];
        $scope.isLoggedIn = Auth.isLoggedIn;

        $http.get('/api/alls').success(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].description[0] = data[i].description[0].substring(data[i].description[0].indexOf('src') + 'src="'.length, data[i].description[0].substring(data[i].description[0].indexOf('src') + 'src="'.length).indexOf('"') + 10);
            }

            $scope.listAll = data;

        }).error(function ( /*data, status, headers, config*/ ) {

        });


        /*
                $scope.awesomeThings = [];

                $http.get('/api/things').success(function (awesomeThings) {
                    $scope.awesomeThings = awesomeThings;
                    socket.syncUpdates('thing', $scope.awesomeThings);
                });

                $scope.addThing = function () {
                    if ($scope.newThing === '') {
                        return;
                    }
                    $http.post('/api/things', {
                        name: $scope.newThing
                    });
                    $scope.newThing = '';
                };

                $scope.deleteThing = function (thing) {
                    $http.delete('/api/things/' + thing._id);
                };

                $scope.$on('$destroy', function () {
                    socket.unsyncUpdates('thing');
                });
                */

        $scope.addThing = function (item) {
            console.log(item);
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/feeds', item);
            $scope.newThing = '';
        };

    });