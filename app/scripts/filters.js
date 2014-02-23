/* Filters */

angular.module('angularListFilters', []).filter('checkmark', function() {
	return function(input) {
		return input ? '\u2713' : '\u2718';
	}
});