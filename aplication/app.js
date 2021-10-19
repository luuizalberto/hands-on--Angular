var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.produtos = ["Milk", "Bread", "Cheese", "Outro"];
  $scope.nomes = ["Julia", "Rafa"];
});