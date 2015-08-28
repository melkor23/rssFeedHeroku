'use strict';

describe('Controller: FeedlistCtrl', function () {

  // load the controller's module
  beforeEach(module('pruebaMeanApp'));

  var FeedlistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedlistCtrl = $controller('FeedlistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
