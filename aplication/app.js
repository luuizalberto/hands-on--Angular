var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.produtos = ["Milk", "Bread", "Cheese", "Outro"];
  $scope.addItem = function () {
      $scope.produtos.push($scope.item);
  }
});