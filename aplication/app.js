var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.produtos = ["Milk", "Bread", "Cheese", "Outro"];

  $scope.addItem = function () {
    $scope.errortext = " ";
    if (!$scope.item) {return;}
    if ($scope.produtos.indexOf($scope.item) == -1) {
      $scope.produtos.push($scope.item);
    } else {
      $scope.errortext = "Este item já está na sua lista de compras.";
      console.log($scope.errortext)
    }  
  }

  $scope.removerItem = function (x) {
      $scope.produtos.splice(x,1);
  }

});