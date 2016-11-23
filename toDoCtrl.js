
app.controller('toDoController', function($scope, toDoService) {

	/*help me to manage data from the html to the service
	and from the service to the html*/

  $scope.newToDoList = toDoService.arrTodo;

  $scope.isMark = true;

  //Add a new to-do
  $scope.addToDo = function(){
			// console.log(toDoService);
		var addNew = {
      name:$scope.newToDo,
      isActive:false
    };
		console.log($scope.newToDo);
		toDoService.arrTodo.push(addNew);
		$scope.newToDo = '';
  };

  //Mark whether a to-do is done or not
  $scope.checkDone = function() {
    $scope.newToDoList[this.$index].isActive = !$scope.newToDoList[this.$index].isActive;

  };

  //Remove an existing to-do
  $scope.remove = function() {
    $scope.newToDoList.splice(this.$index, 1);
  };

});

