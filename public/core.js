var TodoApp = angular.module('TodoApp', []);

TodoApp.controller('mainController', function ($scope, $http) {
    $scope.formData = {};
    $http.get('/api/todos')
        .success(function (data) {

                console.log("Data Received : ");
                console.log(data);
            $scope.todos= data;
        })
        .error(function (data) {
            console.log("Error : " + data);
        });

    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {

                console.log("Data Received : ");
                console.log(data);
                $scope.formData = {};
                $scope.todos = data;
            })
            .error(function (data) {
                console.log("Error : " + data);
            });
    };

    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {
                console.log("Data Received : ");
                console.log(data);
                $scope.todos = data;
            })
            .error(function (data) {
                console.log("Error : " + data);
            });
    };
});