angular
    .module('app')
    .controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController ($scope) {
  $scope.todos = [{text: 'make todo on angular', number: 1}];
  $scope.lastTodo='';

  $scope.addItem = function (item) {
      $scope.todos.push({text: item, number: $scope.todos.length + 1});
      $scope.clearInput();
  };

  $scope.onEnter = function (keyEvent) {
    if (keyEvent.keyCode === 13) {
        $scope.addItem($scope.lastTodo);
    }
  };

  $scope.remove = function (item) {
      let index = $scope.todos.indexOf(item);

      $scope.todos.splice(index, 1);
  };

  $scope.clearInput = function () {
      $scope.lastTodo = '';
  };
}