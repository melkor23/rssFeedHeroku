'use strict';

angular.module('pruebaMeanApp')
    .controller('SearchCtrl', ['$scope', '$http', '$timeout', '$sce', function ($scope, $http, $timeout, $sce) {
        $scope.searchWord = '';
        $scope.searchList = '';
        $scope.resultCount = 0;

        $scope.anyadido = false;
        $scope.busquedaActiva = false;


        $scope.searchClick = function () {
            //alert('Palabra buscada: ' + $scope.searchWord);
            $scope.busquedaActiva = true;

            var req = {
                method: 'GET',
                url: '/api/searchs?search=' + $scope.searchWord
            };

            $http(req).success(function (data) {

                /*
                data = data.replace('<br>', '');
                var auxString = '<ul ' + data.substring(data.search('"peliculas-box"') + '"peliculas-box"'.length)
                var ulElements = auxString.substring(0, auxString.search('<!-- end .peliculas-box -->'));
                //var xmlDoc = $.parseXML(ulElements);
                ulElements = ulElements.replace(/<li style="width:136px;height:275px;margin:0px 15px 0px 0px;">/g, '<li class="panel panel-default shadow container col-md-2 ng-scope"> ');

                ulElements = ulElements.replace(/<strong style="float:left;width:100%;text-align:center;color:#000;margin:0px;padding:3px 0px 0px 0px;font-size:11px;line-height:12px;">/g, '<strong class="tamanyofuente">');

                ulElements = ulElements.replace(/<h2 style="float:left;width:100%;margin:3px 0px 0px 0px;padding:0px 0px 3px 0px;line-height:12px;font-size:12px;height:23px;border-bottom:solid 1px #C2D6DB;">/g, '<h2 class="tamanyofuente">');

                ulElements = ulElements.replace(/<a href="/g, '<a href="/AddTorrent?url=');

                $scope.searchList = ulElements;
                */
                $scope.searchList = data;
                $scope.busquedaActiva = false;
                //$scope.resultCount = data.total_results;

            }).error(function () {
                $scope.busquedaActiva = false;
            });


        };
        $scope.SkipValidation = function () {
            return $sce.trustAsHtml($scope.searchList);
        };

        $scope.AddTorrent = function (titulo, link, htmlLink) {
            $scope.anyadido = true;


            //recuperamos la imagen
            var req = {
                method: 'GET',
                url: '/AddtorrentSearch?title=' + titulo +
                    '&torrent=' + link +
                    '&htmlLink=' + htmlLink
            };

            $http(req).success(function (/*data*/) {
                //$timeout(function(){$scope.anyadido== false}, 3000);
            }); 
        };
    }]);