'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('mywalletApp'));

  var FormCtrl,
    scope;

  //Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.amounts.length).toBe(0);
  });

  it('should add items to the table', function () {
    scope.wallet = {
      $valid: true,
      $setPristine: function() {}
    };
    scope.newAmounts.amount = 100;
    scope.addAmount('entry');
    expect(scope.amounts.length).toBe(1);
  });

  it('check funds before withdrawal', function () {
    scope.amounts = [{"amount":2000,"transaction":"entry","date":1419098166543},{"amount":1000,"transaction":"entry","date":1419098787506}];
    scope.wallet = {
      $valid: true,
      $setPristine: function() {}
    };
    scope.newAmounts.amount = 10000;
    scope.addAmount('withdrawal');
    expect(scope.notFunds).toBe(true);
  });

});
