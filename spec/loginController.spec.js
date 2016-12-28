describe('login controller test', function() {
  beforeEach(module('IguanaGUIApp'));
  beforeEach(module('templates'));

  var $controller, $state, $auth, util, $window, $templateCache,
      $compile, $rootScope, $storage, $httpBackend, vars, dashboardTemplate, compiledTemplate, pristineTemplate = {};

  beforeEach(inject(function(_$controller_, _$state_, _$auth_, _util_, _$window_, _$uibModal_,
                             _$templateCache_, _$compile_, _$rootScope_, _$storage_, _$httpBackend_, _vars_) {

    $controller = _$controller_;
    $state = _$state_;
    $auth = _$auth_;
    util = _util_;
    $window = _$window_;
    $templateCache = _$templateCache_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $storage = _$storage_;
    $httpBackend = _$httpBackend_;
    vars = _vars_;
    $uibModal = _$uibModal_;

    vars.coinsInfo = {
      'btc': {
        connection: true,
        RT: true,
        relayFee: 0.00001
      }
    };

    // load and render template
    dashboardTemplate = $templateCache.get('partials/login.html');
    angular.element(document.body).prepend('<div id="templatePreCompile">' + dashboardTemplate + '</div>');
    compiledTemplate = $compile(document.getElementsByTagName('script')[0].innerHTML)($rootScope);

    // "lock" object from changes
    for (var i=0; i < Object.keys(compiledTemplate).length; i++) {
      var templateToHtml = angular.element(compiledTemplate[i]).html();
      if (templateToHtml) {
        Object.defineProperty(pristineTemplate, 'template' + i, {
          value: templateToHtml,
          writable: false
        });
      }
    }

    var fakeModal = {
      result: {
        then: function(confirmCallback, cancelCallback) {
          this.confirmCallBack = confirmCallback;
          this.cancelCallback = cancelCallback;
        }
      },
      close: function(item) {
        this.result.confirmCallBack(item);
      },
      dismiss: function(type) {
        this.result.cancelCallback(type);
      }
    };

    spyOn($uibModal, 'open').and.returnValue(fakeModal);
  }));

  // this should verify that placeholders are set in lang file and rendered correctly
  it('should verify login template placeholders rendered correctly', function() {
    $storage.isIguana = false;

    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    for (var i=0; i < 1/*compiledTemplate.length*/; i++) {
      if (pristineTemplate['template' + i])
        var langPlaceholders = pristineTemplate['template' + i].match(/{{ (.*) }}/g),
            placeholder2match = [];
        for (var j=0; j < langPlaceholders.length; j++) {
          var renderedPlaceholder = $compile('<div>' + langPlaceholders[j] + '</div>')($rootScope);
          $rootScope.$digest();
          if (langPlaceholders[j].indexOf(' | lang') > -1)
            var placeholder = langPlaceholders[j].match(/'(.*)'/g);
            placeholder2match.push({ rendered: renderedPlaceholder[0], plain: placeholder[0].replace(/'/g, '') });
            var langObjSplit = placeholder2match[j].plain.split('.');
            expect(lang.EN[langObjSplit[0]][langObjSplit[1]]).toBeDefined();
            expect(placeholder2match[j].rendered.innerHTML).toEqual(lang.EN[langObjSplit[0]][langObjSplit[1]]);
        }
    }
  });

  it('should get active coin', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    expect($state.current.name).toEqual('login');
    delete $storage['iguana-login-active-coin'];
    expect($scope.getActiveCoins()).not.toBeDefined();
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    var activeCoins = $scope.getActiveCoins();
    expect(activeCoins).toEqual($storage['iguana-login-active-coin']);
  });

  it('should login btc (coind)', function() {
    $storage.isIguana = false;
    $httpBackend.whenPOST('http://localhost:1337/localhost:8332').respond(function(method, url, data) {
      return [500, { result: '' }];
    });

    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    expect($state.current.name).toEqual('login');
    delete $storage['dashboard-logged-in-coins'];
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    $scope.login();
    expect($storage['dashboard-logged-in-coins']).toEqual($storage['iguana-login-active-coin']);

    $httpBackend.flush();
  });

  it('should test isChanged() (coind)', function() {
    $storage.isIguana = false;

    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    $scope.setIsChanged();
    expect($scope.messages).toEqual('Incorrect input. Passphrase must consist of 12 words. Try one more time')
    expect($scope.isChanged).toEqual(true);
  });

  it('should test isChanged() (iguana)', function() {
    $storage.isIguana = true;

    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    $scope.setIsChanged();
    expect($scope.messages).toEqual('Incorrect input. Passphrase must consist of 24 words. Try one more time')
    expect($scope.isChanged).toEqual(true);
  });

  it('should test setTitle()', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    $rootScope.$digest();
    var setTitle = $scope.karma.setTitle();
    expect(setTitle).toEqual('Log in to Bitcoin wallet');
  });

  it('should open signupCoinModal and store selected coin', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    $rootScope.$digest();
    $scope.openSignupCoinModal();
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    $scope.karma.modal.close();
    expect($scope.loginActiveCoin).toEqual($storage['iguana-login-active-coin']);
  });

  it('should open signupCoinModal and dismiss modal', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $rootScope.$digest();
    $scope.openSignupCoinModal();
    $scope.karma.modal.close();
    expect($scope.loginActiveCoin).toEqual({});
    expect($storage['iguana-login-active-coin']).toEqual({});
  });

  it('should open loginCoinModal and store selected coin', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin'
      }
    };
    $rootScope.$digest();
    $scope.openLoginCoinModal();
    $storage['iguana-login-active-coin'] = {
      'btc': {
        coinId: 'btc',
        id: 'BTC',
        name: 'Bitcoin',
        pass: '1234'
      }
    };
    $scope.karma.modal.close();
    expect($scope.passphraseModel).toEqual('1234');
  });

  it('should open loginCoinModal and dismiss modal', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $storage['iguana-login-active-coin'] = {};
    $rootScope.$digest();
    $scope.openLoginCoinModal();
    $scope.karma.modal.close();
    expect($scope.coins).not.toBeDefined();
    expect($scope.passphraseModel).toEqual('');
  });

  it('should test stateChangeStart()', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    $state.current.name = 'login';
    var stateChangeStart = $scope.karma.stateChangeStart();
    expect($rootScope.background).toEqual(false);
    $state.current.name = 'login.step2';
    stateChangeStart = $scope.karma.stateChangeStart();
    expect($rootScope.background).toEqual(true);
  });

  it('should test isCoinSelected()', function() {
    var $scope = $rootScope.$new(),
        controller = $controller('loginController', { $scope: $scope });
    delete $storage['iguana-login-active-coin'];
    var isCoinSelected = $scope.isCoinSelected();
    expect(isCoinSelected).toEqual(true);
    $storage['iguana-login-active-coin'] = {};
    isCoinSelected = $scope.isCoinSelected();
    expect(isCoinSelected).toEqual(true);
    $storage['iguana-login-active-coin'] = { 'btc': {}, 'sys': {} };
    isCoinSelected = $scope.isCoinSelected();
    expect(isCoinSelected).toEqual(false);
  });
});