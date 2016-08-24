app.controller("formCtrl", ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
    $scope.url = 'http://local.dev/personal/linkWrap/api/input.php';
    $scope.formsubmit = function(isValid) {
        $scope.randomNumber = Math.random().toString(36).substring(7);
        if (isValid) {
            $http.post($scope.url, {
                "link": $scope.link,
                "number": $scope.randomNumber,
                "bow": $rootScope.bowColor,
                "background": $rootScope.backgroundColor
            }).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
                $scope.result = data;

                var earl = '/editperson/' + $scope.randomNumber;
                $location.path(earl);
            })
        }else{
            alert('Form is not valid');
        }
    }
}]);