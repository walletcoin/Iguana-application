'use strict';

angular.module('IguanaGUIApp')
.service('util', [
  '$window',
  '$filter',
  '$message',
  '$storage',
  function($window, $filter, $message, $storage) {

    var self = this;

    this.defaultSessionLifetime = 0;
    this.portPollUpdateTimeout = settings.portPollUpdateTimeout;
    this.coindWalletLockResults = [];
    this.isExecCopyFailed = false;
    this.coindWalletLockCount = 0;
    this.minEpochTimestamp = settings.minEpochTimestamp; // Jan 01 1970

    this.bodyBlurOn = function(isModal) {
      angular
        .element(document.body)
        .addClass('modal-open' + (isModal ? ' message-modal' : ''));
      angular
        .element(document.querySelector('html'))
        .addClass('modal-open' + (isModal ? ' message-modal' : ''));
    };

    this.bodyBlurOff = function(isModal) {
      angular.element(document.body).removeClass('modal-open' + (isModal ? 'message-modal' : ''));
      angular.element(document.querySelector('html')).removeClass('modal-open' + (isModal ? 'message-modal' : ''));
    };

    this.reindexAssocArray = function(object) {
      var _array = [],
          _index = 0,
          item;

      for (var name in object) {
        item = object[name];

        if (!_array[_index]) {
          _array.push(item);
        }

        ++_index;
      }

      return _array;
    };

    this.getCoinKeys = function(coins) {
      var result = [];

      for (var i = 0; coins.length > i; i++) {
        if (coins[i] && coins[i].coinId)
          result.push(coins[i].coinId);
      }

      return result;
    };

    this.execCommandCopy = function(element, elementDisplayName) {
      if (!this.isExecCopyFailed) {
        var message,
            color,
            temp = angular.element('<input>');

        elementDisplayName = elementDisplayName ? elementDisplayName : '';

        if (element[0] instanceof HTMLElement) {
          element = element.text();
        }

        angular.element(document.body).append(temp);
        temp[0].value = element;
        temp[0].select();

        try {
          document.execCommand('copy');
          message = elementDisplayName + ' ' +
                      $filter('lang')('MESSAGE.COPIED_TO_CLIPBOARD')
            // + ' </br>"' + element + '" '
          ;
          color = 'blue';
        } catch (e) {
          this.isExecCopyFailed = true;
          message = $filter('lang')('MESSAGE.COPY_PASTE_IS_NOT_SUPPORTED');
          color = 'red';
        }

        temp.remove();

        if (message) {
          $message.ngPrepMessageModal(message, color);
        }
      }
    };

    this.trimComma = function(str) {
      if (str[str.length - 1] === ' ') {
        str = str.replace(/, $/, '');
      }

      if (str[str.length - 1] === ',') {
        str = str.replace(/,$/, '');
      }

      return str;
    };

    this.isMobile = function() {
      return $window.innerWidth < 769;
    };

    // native javascript
    this.getElementOffset = function(element) {
      var docEl = document.documentElement,
          boundClientRect = element.getBoundingClientRect();

      return {
        top: boundClientRect.top + window.pageYOffset - docEl.clientTop,
        left: boundClientRect.left + window.pageXOffset - docEl.clientLeft
      };
    };

    this.checkFeeCount = function(fee, currencyRate) {
      var coin = fee * 1024 / 100000000, // satoshi per kb
          amount = currencyRate * coin;

      return {
        'coin': coin,
        'amount': amount
      };
    };

    this.getActiveCoin = function() {
      return $storage['iguana-active-coin'] && $storage['iguana-active-coin'].id ? $storage['iguana-active-coin'].id : 0;
    };

    this.removeStorageItems = function(keys) {
      var storageKeys = Object.keys($storage);

      storageKeys.find(function(el, id) {
        if (typeof keys === 'string') {
          if (el.indexOf(keys) !== -1) {
            delete $storage[el];
          }
        } else if (keys instanceof Array) {
          for (var i = 0; keys.length > i; i++) {
            if (el.indexOf(keys[i]) !== -1) {
              delete $storage[el];
            }
          }
        }
      });
    };
  }
]);