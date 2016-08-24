'use strict';

/**
 * @ngdoc function
 * @name linkWrapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkWrapApp
 */
app.controller('mainCtrl', function ($scope, $rootScope) {
    $scope.colors = [
        {"hex": "#1abc9c"},
        {"hex": "#16a085"},
        {"hex": "#2ecc71"},
        {"hex": "#27ae60"},
        {"hex": "#3498db"},
        {"hex": "#2980b9"},
        {"hex": "#9b59b6"},
        {"hex": "#8e44ad"},
        {"hex": "#34495e"},
        {"hex": "#2c3e50"},
        {"hex": "#f1c40f"},
        {"hex": "#f39c12"},
        {"hex": "#e67e22"},
        {"hex": "#d35400"},
        {"hex": "#e74c3c"},
        {"hex": "#c0392b"},
        {"hex": "#ffffff"},
        {"hex": "#ecf0f1"},
        {"hex": "#bdc3c7"},
        {"hex": "#95a5a6"},
        {"hex": "#7f8c8d"}
    ];

    $scope.backgroundColor = function(colorHex){
        $rootScope.backgroundColor = colorHex;
    };

    $scope.bowColor = function(colorHex){
        $rootScope.bowColor = colorHex;
    };

    $scope.showingOptions = false;

    $scope.showOptions = function (){
        $scope.showingOptions = !$scope.showingOptions;
        $rootScope.showingPreviewBox = false;
    };

    $scope.$on('$stateChangeSuccess', function() {
        $scope.showingOptions = false;
        $rootScope.showingPreviewBox = false;
    });
});
