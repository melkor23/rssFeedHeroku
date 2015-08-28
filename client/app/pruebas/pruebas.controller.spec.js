'use strict';

describe('Controller: PruebasCtrl', function () {

  // load the controller's module
  beforeEach(module('pruebaMeanApp'));

  var PruebasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PruebasCtrl = $controller('PruebasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
