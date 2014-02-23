'use strict';

describe('AngularList Filters', function() {

	beforeEach(module('angularListFilters'));

	describe('Checkmark Filter', function() {
		it('should convert true and false to glyphs', inject(function(checkmarkFilter) {
			expect(checkmarkFilter(true)).toEqual('\u2713');
			expect(checkmarkFilter(false)).toEqual('\u2718');
		}));
	});
	
});