//note that this uses Angular Scenario Runner, which is deprecated / in maintenance mode
//from now on using protractor for e2e tests

'use strict';

describe('Angular List App', function() {

	describe('List View', function() {
		beforeEach(function () {
			browser().navigateTo('../../app/index.html');
		});

		it('should filter items as the user types into the filter text box', function() {
			expect(repeater('#my-list li').count()).toBe(3);

			input('query').enter('item 1');
			expect(repeater('#my-list li').count()).toBe(1);

			input('query').enter('item');
			expect(repeater('#my-list li').count()).toBe(3);
		});





	});

});