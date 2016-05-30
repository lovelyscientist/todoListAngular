todoApp.controller('listController', function listController($scope) {
  $scope.todos = [
    {text: 'make todo on angular', number: 1}
  ],
  $scope.lastTodo='',
  $scope.addItem = function(item) {
      $scope.todos.push({text: item, number: $scope.todos.length + 1});
  },
  $scope.onEnter = function(keyEvent) {
      if (keyEvent.which === 13) {
          $scope.addItem($scope.lastItem);
          alert('helo');
      } 
    }
});