/*!
 * Iguana auth/init
 *
 */

function initAuthCB() {
  var localStorage = new localStorageProto(),
      helper = new helperProto(),
      selectedCoindToEncrypt;

  // ugly login form check
  if ($('.login-form')) {
    $('#passphrase').val(isDev && isIguana ? coinPW.iguana : '');

    if (isDev) $('.btn-signin').removeClass('disabled');

    if (helper.checkSession(true)) {
      helper.openPage('dashboard');
    } else {
      $('.login-form').removeClass('hidden');
    }
    $('.login-form .btn-signup').click(function() {
      helper.openPage('create-account');
    });

    constructAuthCoinsRepeater();
    addAuthorizationButtonAction('signin');
    watchPassphraseKeyUpEvent('signin');
  }

  if ($('.create-account-form').width()) {
    addAuthorizationButtonAction('add-account');
    watchPassphraseKeyUpEvent('add-account');
    initCreateAccountForm();
    constructCoinsRepeaterEncrypt();
    helper.addCopyToClipboardFromElement('.generated-passhprase', 'Passphrase');

    $('.paste-from-clipboard-link').click(function() {
      try {
        $('#passphrase').val(pasteTextFromClipboard); // not quite appropriate pasting
      } catch(e) {
        // do nothing
      }
      if ($('#passphrase').length > 0) $('.btn-add-account').removeClass('disabled');
    });
  }
}