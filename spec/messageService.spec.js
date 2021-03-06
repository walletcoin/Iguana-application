describe('message service test', function() {
  describe('message', function() {
    beforeEach(module('IguanaGUIApp'));
    beforeEach(module('templates'));

    it('shoud exist', inject(function($message) {
      expect($message).toBeDefined();
    }));

    it('shoud return uibootstrap object', inject(function($message) {
      expect($message.ngPrepMessageModal(null, 'red', 'noDaemon')).toEqual(jasmine.any(Object));
      expect($message.ngPrepMessageModal(null, 'red', 'noDaemon').opened).toEqual(jasmine.any(Object));
      expect($message.ngPrepMessageModal(null, 'red', 'noDaemon').closed).toEqual(jasmine.any(Object));
      expect($message.ngPrepMessageModal(null, 'red', 'noDaemon').rendered).toEqual(jasmine.any(Object));
    }));
  });
});