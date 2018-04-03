var myapp = angular.module('myapp', ['ngRoute']);
myapp.config(['$routeProvider', '$locationProvider',
    function ($routeprovider, $locationProvider)]);

myapp.controller('loginctrl', function ($scope, $location,$state) {
    $scope.Login = function () {
        if ($scope.txtun == 'faisal.khan' &&
            $scope.txtpw == '12345') {

            alert('loginsuccess');
            $location.path('/home');
       
    }
        
        else {
            alert('loginfailed!');
            $location.path('/home');
        }
    }
});


myapp.controller('ctrl', function ($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        $scope.names = response.data
    });

});
