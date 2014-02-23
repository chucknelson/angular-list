'use strict';

/* App Module */

var angularListApp = angular.module('angularListApp', [
	'ngRoute',
	'angularListControllers',
	'angularListFilters',
	'angularListServices',
	'angularListAnimations'
]);

/* App Config */

angularListApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/lists', {
			templateUrl: 'partials/lists.html',
			controller: 'AngularListController'
		}).
		when('/lists/:listId', {
			templateUrl: 'partials/list-detail.html',
			controller: 'AngularListDetailController'
		}).
		otherwise({
			redirectTo: '/lists'
		});
}]);

