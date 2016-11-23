
app.controller('toDoController', function($scope, toDoService) {

	/*help me to manage data from the html to the service
	and from the service to the html*/

  $scope.newToDoList = toDoService.arrTodo;

  //Add a new to-do
  $scope.addToDo = function(){
			// console.log(toDoService);
		var addNew = $scope.newToDo;
		console.log($scope.newToDo);
		toDoService.arrTodo.push(addNew);
		$scope.newToDo = '';
  };

  //Mark whether a to-do is done or not


  //Remove an existing to-do
  $scope.remove = function() {

  };

});


// app.controller('addNewToDoCtrl', function($scope, toDoService) {

// 	//help me to manage data from the html to the service
// 	//and from the service to the html

// 	$scope.newToDoList = toDoService;

// 	$scope.addToDo = function() {

// 		var addNew = {name:$scope.newToDo};
// 		console.log($scope.newToDo);
// 		$scope.newToDoList.push(addNew);
// 		$scope.newToDo = '';
// 	};


// });