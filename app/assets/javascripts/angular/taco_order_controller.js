
AngulaRails.controller("TacoOrderController", function($scope) {
  $scope.tacos = [];  
  $scope.taco = {};  
  $scope.fillings = [ {id: 1, name: "Pollo"}, {id:2, name: "Carne Asada"}];
  $scope.cheeses = ["No Cheese", "Normal Cheese", "Mucho Queso", "Monterrey Jack"]
  
  $scope.extras = [
    {name: "Sour Creme"},
    {name: "Guac"},
    {name: "Salsa"}
  ]
  
  $scope.clear = function() {
    $scope.taco = {};
    for (var i = 0; i < $scope.extras.length; i++) {         
      $scope.extras[i].checked = false;
    }
  };
  
  $scope.getExtras = function() {
    var extras = [];
    
    for ( var i = 0; i < $scope.extras.length; i++) {
      if ($scope.extras[i].checked == true) {
        extras.push($scope.extras[i]);
      }
    }     
    
    return extras;
    
  };
  
  $scope.addTaco = function() {
    $scope.taco.extras = $scope.getExtras();
    $scope.tacos.push($scope.taco);
    $scope.clear();
  };
  
})



















