'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['one', 'two', 'three'];

    $scope.addTodo= function(){
      $scope.todos.push($scope.todo);
      $scope.todo= '';
    };
  });
