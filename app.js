var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){


$scope.message="hello Raj !!"
$scope.companyName="Techminds Pvt Ltd"
$scope.userDetails={

         name: "Scott Desatnick",
         address : "Boston United State"
}

}])
/*app.directive("myDirectivMy",function(){

	return {
		     template : "<h1>This is my custom directive </h1>"
	}
})*/
app.directive("techmindsProjectAngularDirective",function(){

	return {    

		template : '<a href="#" class = "list-group">' +
'<h4 class = "list-group-header"> {{companyName}} </h4>' +
'<h4 class = "list-group-item"> {{userDetails.name}} </h4>' +
'<h4 class = "list-group-text"> {{userDetails.address}} </h4>' +
'</a>'
		 

	}
})