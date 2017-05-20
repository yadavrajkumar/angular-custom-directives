var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){


$scope.message="hello Raj !!"

}])
/*app.directive("myDirectivMy",function(){

	return {
		     template : "<h1>This is my custom directive </h1>"
	}
})*/
app.directive("techmindsProjectAngularDirective",function(){

	return {    

		    restrict : 'EACM',

 
		template : "<h1> This is my custom directive</h1>",
		 replace : true

	}
})