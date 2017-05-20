var app=angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){

    $scope.company="Techminds Pvt Ltd"



     $scope.userArray= [
					{ employeeId : 101,
					 employeeName: "Raj",
					  salary :5000
					},
					{ companyId : "c100",
					 companyName: "Techminds Learning Center",
					},
					{ customerId : 100,
					 customerName: "Rajkumar",
					  prize :3000
					}

				]
	$scope.change  = function(){
	$scope.company ="Techminds Solutions"
}

}])

app.directive("techmindsProjectAngularDirective",function(){

	return {    

templateUrl : 'customerDetails.html',
scope : {

companyName : '@',
change :'&',
user :'='


}
}

/*compile: function(element,attributes){

  console.log("In compile !!!")
  console.log(element)
  console.log(attributes)
}
		 

	}*/
})