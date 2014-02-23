/* Services */

var angularListServices = angular.module('angularListServices', ['ngResource']);

angularListServices.factory('List', ['$resource', function($resource) {
	return $resource('lists/list:listId.json', {}, {
		query: {method: 'GET', params: {listId: 's'}, isArray:true}
	});
}]);