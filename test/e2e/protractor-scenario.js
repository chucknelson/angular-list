'use strict';

describe('Angular List App', function() {
	var ptor;

	beforeEach(function() {
		ptor = protractor.getInstance(); //works like browser()
	});

	describe('Lists View', function() {
		var queryInput, orderProp, lists;

		beforeEach(function () {
			ptor.get('app/index.html');

			queryInput = element(by.model('query'));
			orderProp = element(by.model('orderProp'));
			lists = element.all(by.repeater('list in lists'));
		});

		it('should redirect index.html to index.html#/lists', function() {
    	ptor.get('app/index.html');
    	expect(ptor.getCurrentUrl()).toContain('#/lists');
    });

		it('should filter lists as the user types into the filter text box', function() {
			expect(lists.count()).toEqual(10);

			queryInput.sendKeys('list 1');
			expect(lists.count()).toEqual(2);

			queryInput.clear();
			queryInput.sendKeys('big list');
			expect(lists.count()).toEqual(5);			
		});

		it('should display the current filter value within an element with id "status"', function() {
			var status = element(by.id('status'));

			expect(status.getText()).toMatch(/Current filter:\s*$/);

			queryInput.sendKeys('list 1');
			expect(status.getText()).toMatch(/Current filter: list 1\s*$/);
		});

		it('should sort lists according to selected sort by / orderProp value', function() {
			var listNames;

			orderProp.click();
			element(by.css('option[value="name"]')).click();
			//for simplicity, just testing the first two lists
			listNames = element.all(by.repeater('list in lists').column('name'));
			expect(listNames.get(0).getText()).toEqual('Big List 1');
			expect(listNames.get(1).getText()).toEqual('Big List 2');

			orderProp.click();
			element(by.css('option[value="createdAt"]')).click();
			//for simplicity, just testing the first two lists
			listNames = element.all(by.repeater('list in lists').column('name'));
			expect(listNames.get(0).getText()).toEqual('List 1');
			expect(listNames.get(1).getText()).toEqual('List 2');
		});

		it('should render list specific links', function() {
    	queryInput.sendKeys('list 1');
    	element(by.css('#my-lists li span a')).click();
    	expect(ptor.getCurrentUrl()).toEndWith('/lists/1');
    });

	});

	describe('List Detail View', function() {
		
		beforeEach(function () {
			ptor.get('app/index.html#/lists/1');
		});

		it('should display detail page for list with listId', function() {
			var listDescription = element(by.binding('{{list.description}}'));
			expect(listDescription.getText()).toEqual('Yummy Treats');

			var items = element.all(by.repeater('item in list.items'));
			expect(items.count()).toEqual(3);
		});

		it('should add/remove the list-item-complete style', function() {
			var items = element.all(by.repeater('item in list.items')),
				item1 = items.get(0), 
				item2 = items.get(1);

			expect(item1.getAttribute('class')).toContain('list-item-complete');
			expect(item2.getAttribute('class')).not.toContain('list-item-complete');

			item1.click();
			expect(item1.getAttribute('class')).not.toContain('list-item-complete');

			item2.click();
			expect(item2.getAttribute('class')).toContain('list-item-complete');
		});

	});

});