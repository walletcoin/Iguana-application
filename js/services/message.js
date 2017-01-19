'use strict';

angular.module('IguanaGUIApp')
.service('$message', [
  '$uibModal',
  '$rootScope',
  '$filter',
  function($uibModal, $rootScope, $filter) {
    this.ngPrepMessageModal = function(message, color, messageType) {
      $rootScope.messageType = messageType; // TODO: rewrite
      $rootScope.message = message;

      return $uibModal.open({
        animation: true,
        backdrop: messageType ? false : true,
        keyboard: messageType ? false : true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        scope: $rootScope,
        controller: 'messageController',
        windowClass: 'iguana-modal message-container msg-' + color,
        templateUrl: 'partials/message-modal.html'
      });
    };

    this.ngPrepMessageNoDaemonModal = function() {
      this.ngPrepMessageModal(null, 'red', 'noDaemon');
    };

    this.viewErrors = function(message) {
      this.ngPrepMessageModal($filter('lang')(message), 'red');
    }
  }
]);