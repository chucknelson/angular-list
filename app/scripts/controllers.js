/* Controllers */

var angularListControllers = angular.module('angularListControllers', []);

angularListControllers.controller('AngularListController', ['$scope', 'List', function($scope, List) {
	$scope.lists = List.query();
  $scope.orderProp = 'createdAt';
}]);

angularListControllers.controller('AngularListDetailController', ['$scope', '$routeParams', 'List', function($scope, $routeParams, List) {
	 $scope.list = List.get({listId: $routeParams.listId});
}]);