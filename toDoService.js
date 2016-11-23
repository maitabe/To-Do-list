
app.factory('toDoService', function(){

	//the service store my data

  var arrTodo = [
  	{
  	  name:"Keerolepa",
  	  isActive:false
  	},
  	{
  	  name:"Elzenon",
  	  isActive:false
  	},
  	{
  	  name:"Jultana",
  	  isActive:false
  	},
  	{
  	  name:"Chintma",
  	  isActive:false
  	},
  	{
  	  name:"Bss",
  	  isActive:false
  	}
  ];

  return {arrTodo:arrTodo};

});
