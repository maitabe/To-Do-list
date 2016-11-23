
// app.factory('toDoService', function() {

// 	//the service store my data
// 	var toDo = [{name:"12"},{name:"123"}];

// 	return toDo;

// });

app.factory('toDoService', function(){

	//the service store my data

  var arrTodo = ["Keerolepa", "Elzenon", "Jultana", "Chintma", "Bss"];

  return {arrTodo:arrTodo};

});
