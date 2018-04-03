//var myapp = angular.module('myapp', []);
//myapp.controller('ctrl', function ($scope)
//{
//    $scope.Login = function ()
//    {
//        if ($scope.txtun == 'faisal.khan' &&
//            $scope.txtpw == '12345')
//{
//    alert('login success!');
//}
//else
//{
//    alert('loginfailed!');
//}
//    }
//});


var myapp = angular.module('myapp', []);
myapp.controller('ctrl', function ($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        $scope.names = response.data
    });
    $scope.clicked = function () {
        window.location = "#/Table.html";
    }
});