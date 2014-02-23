'use strict';

describe('AngularList Controllers', function() {
	var scope, controller, $httpBackend;

	beforeEach(function () {
		module('angularListApp');
		module('angularListServices');
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
		inject(function(_$httpBackend_) {
			$httpBackend = _$httpBackend_;
		});
	});
 
  describe('AngularListController', function(){

  	beforeEach(inject(function($rootScope, $controller) {
			$httpBackend.expectGET('lists/lists.json').
				respond([{name: 'List 1'}, {name: 'List 2'}]);

			scope = $rootScope.$new();
			controller = $controller('AngularListController', { $scope: scope }); 
		}));
 
    it('should create "lists" model with 2 lists fetched from xhr', function() {
      expect(scope.lists).toEqualData([]);
    	$httpBackend.flush();

      expect(scope.lists.length).toEqual(2);
    });

    it('should set the default list order to createdAt', function () {
  		expect(scope.orderProp).toEqual('createdAt');
    });

  });

  describe('AngularListDetailController', function(){

  	beforeEach(inject(function($rootScope, $routeParams, $controller) {
			$httpBackend.expectGET('lists/list1.json').
				respond({description: 'List 1'});

			$routeParams.listId = '1';
			scope = $rootScope.$new();
			controller = $controller('AngularListDetailController', { $scope: scope }); 
		}));
 
    it('should fetch list detail', function() {
      expect(scope.list).toEqualData({});
    	$httpBackend.flush();

      expect(scope.list.description).toEqual('List 1');
    });

  });
});