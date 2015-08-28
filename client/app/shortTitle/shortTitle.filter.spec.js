'use strict';

describe('Filter: shortTitle', function () {

  // load the filter's module
  beforeEach(module('pruebaMeanApp'));

  // initialize a new instance of the filter before each test
  var shortTitle;
  beforeEach(inject(function ($filter) {
    shortTitle = $filter('shortTitle');
  }));

  /*it('should return the input prefixed with "shortTitle filter:"', function () {
    var text = 'angularjs';
    expect(shortTitle(text)).toBe('shortTitle filter: ' + text);
  });*/

});
