/*!
 * Iguana lang/en
 * format 'key': 'value'
 *
 */

var lang = {
  'EN': {
    'IGUANA': {
      'APP_TITLE': 'Iguana'
    },
    'PAGE' : {
      'LOGIN': 'Login',
      'CREATE': 'Create account',
      'VERIFY': 'Verify passphrase',
      'DASHBOARD': 'Dashboard',
      'SETTINGS': 'Settings',
      'PAYMENTS': 'Payments',
      'CONTACTS': 'Contacts'
    },
    'LOGIN': {
      'WELCOME': 'Welcome to Iguana!',
      'SELECT_A_WALLET': 'Select a wallet',
      'ENTER_A_PASSPHRASE_TO_LOGIN': 'Enter a passphrase to log in',
      'LOGIN': 'Log in',
      'CREATE_ACCOUNT': 'Create an account',
      'ADD': 'Add',
      'ENTER_A_PASSPHRASE_TO_ADD': 'Enter a passphrase to add',
      'INCORRECT_INPUT_P1': 'Incorrect input. Passphrase must consist of',
      'INCORRECT_INPUT_P2': 'words. Try one more time.',
      'OR': 'or',
      'SELECT_A_WALLET': 'Select a wallet',
      'SELECT_A_COIN': 'Select a coin',
      'CREATE_NEW_WALLET': 'Create new wallet',
      'SELECT_A_WALLET_TO_CREATE': 'Select a wallet to create',
      'PASSPHRASE': 'Passphrase',
      'ADD_COIN': 'Add coin',
      'ADD_WALLET': 'Add wallet'
    },
    'CREATE_ACCOUNT': {
      'ADD_ACCOUNT': 'Add account',
      'WRITE_DOWN_THIS_P1': 'Write down this',
      'WRITE_DOWN_THIS_P2': 'word passphrase and keep it safe. You can\'t access or restore your account, if you lose it!',
      'WRITE_DOWN_THIS_P3': 'Don\'t ever disclose your passphrase!',
      'COPY_PASSPHRASE': 'Passphrase (click on the text below to copy it):',
      'I_SAVED_A_PASSPHRASE': 'I saved the passphrase in a secure place',
      'NEXT': 'Next',
      'TYPE_OR_PASTE_THE_PASSPHRASE': 'Type or paste the passphrase to confirm you saved it properly.',
      'TYPE_OR_PASTE_THE_PASSPHRASE_P1': 'Type or paste the passphrase to confirm you saved it properly.',
      'TYPE_OR_PASTE_THE_PASSPHRASE_P2': 'Click here to paste from the clipboard.'
    },
    'ADD_COIN': {
      'ADDING_A_NEW_COIN': 'Adding a new coin',
      'SELECT_COINS_TO_ADD': 'Select coins to add',
      'FOR_EXAMPLE': 'For example',
      'SELECT_A_COIN_TO_ADD': 'Select a coin to add',
      'A_COIN': 'a coin',
      'A_WALLET': 'a wallet'
    },
    'DASHBOARD': {
      'TOTAL_BALANCE': 'Total balance:',
      'LOGOUT': 'Log out',
      'ADD_COIN': 'Add coin',
      'SEND': 'Send',
      'RECEIVE': 'Receive',
      'INFORMATION': 'Information',
      'HISTORY': 'History',
      'LOADING': 'Loading',
      'ADDING_A_NEW_WALLET': 'Adding a new wallet',
      'SELECT_A_WALLET_TO_ADD': 'Select a wallet to add',
      'NO_TRANSACTION_HISTORY_IS_AVAILABLE': 'No trasaction history is available',
      'SENT': 'sent',
      'RECEIVED': 'received',
      'IN_PROCESS': 'in process',
      'ARE_YOU_SURE_YOU_WANT' : 'Are you sure you want to remove'
    },
    'RECEIVE': {
      'RECEIVING_COINS': 'Receiving coins',
      'MY_ADDRESS': 'My address',
      'COPY': 'Copy',
      'SHARE': 'Share',
      'AMOUNT': 'Amount',
      'ENTER_IN': 'Enter in'
    },
    'SETTINGS': {
      'REFERENCE_CURRENCY': 'Reference currency',
      'CHOOSE_YOUR_CURRENCY': 'Choose your currency to see equivalent',
      'AMOUNT_OF_TRANSACTIONS': 'amount of transactions'
    },
    'SEND': {
      'TRANSACTION_IS_SENT': 'Transaction is sent',
      'CHECK_THE_STATUS': 'Check the status in a few minutes to verify',
      'CONFIRMATION': 'Confirmation',
      'SEND_TO': 'Send to',
      'FEE_PER_KB': 'Fee (per KB of data)',
      'NOTE': 'Note',
      'THE_FINAL_AMOUNT': 'The final amount may be slightly more because of network fees',
      'SEND': 'Send',
      'SENDING': 'Sending',
      'ENTER_A_WALLET_ADDRESS': 'Enter a wallet address',
      'IS_A_MIN_REQUIRED_FEE': 'is a min. required fee',
      'MINIMUM_FEE': 'Minimum fee. Increase it to speed up transaction.',
      'NOTE_OPTIONAL': 'Note (optional)',
      'INCORRECT_ADDRESS': 'Incorrect address. Please, make sure you enter it right.',
      'PLEASE_ENTER_AN_AMOUNT': 'Please enter an amount.',
      'NOT_ENOUGH_MONEY': 'Not enough money. Max.',
      'FEE_CANNOT_EXCEED': 'Fee cannot exceed'
    },
    'PASSPHRASE_MODAL': {
      'PROVIDE_PASSPHRASE': 'Provide passphrase',
      'PROVIDE_PASSPHRASE_TO_CONFIRM_TRANSACTION': 'Provide passphrase to confirm the transaction',
      'CONFIRM': 'Confirm'
    },
    'MESSAGE': {
      'APP_FAILURE': 'We\'re sorry but something went wrong while logging you in. Please try again. Redirecting...',
      'APP_FAILURE_ALT': 'We\'re sorry but it seems that Iguana has crashed. Please login again. Redirecting...',
      'MINIMUM_DAEMON_CONF': 'Minimum daemon configuration to comminicate via http requests and a proxy server.',
      'NO_REQUIRED_DAEMON_P1': 'No required daemon is running. Make sure it\'s on and these',
      'NO_REQUIRED_DAEMON_P2': 'requirements',
      'NO_REQUIRED_DAEMON_P3': 'are satisfied.',
      'COPY_PASTE_IS_NOT_SUPPORTED': 'Copy/paste is not supported in your browser! Please select the passphrase manually.',
      'COPY_PASTE_IS_NOT_SUPPORTED_ADDRESS': 'Copy/paste is not supported in your browser! Please copy address manually.',
      'COPIED_TO_CLIPBOARD': 'copied to clipboard',
      'ADDRESS_COPIED_TO_CLIPBOARD': 'Address copied to clipboard:',
      'PLEASE_SELECT_A_COIN': 'Please select a coin',
      'WALLET_IS_CREATED': 'Wallet is created. Login to access it.',
      'PASSPHRASES_DONT_MATCH': 'Passphrases do not match!',
      'PLEASE_SELECT_A_WALLET': 'Please select a wallet',
      'WRONG_PASSPHRASE': 'Wrong passphrase!',
      'PLEASE_ENCRYPT_YOUR_WALLET': 'Please encrypt your wallet with a passphrase!',
      'X_WALLET_IS_CREATED': ' wallet is created. Login to access it.',
      'WALLET_IS_ALREADY_ENCRYPTED': 'Wallet is already encrypted with another passphrase!',
      'PASSPHRASES_DONT_MATCH_ALT': 'Passphrases are not matching. Please repeat previous step one more time.',
      'COIN_ADD_P1': 'added.',
      'COIN_ADD_P2': 'failed to add.',
      'COIN_ADD_ERROR_P1': 'Something went wrong. Coin',
      'COIN_ADD_ERROR_P2': 'is not added.',
      'REDIRECTING_TO_DASHBOARD': 'Redirecting to dashboard',
      'ADDRESS_IS_COPIED': 'Address is copied to clipboard',
      'TRANSACTION_ERROR': 'Transaction was not send due to an error!',
      'TOTAL_AMOUNT_CANNOT_EXCEED': 'Total amount cannot exceed',
      'IS_A_MIN_REQUIRED_FEE': 'is a min. required fee.',
    },
    'CURRENCY': {
      'USD': 'United States Dollar',
      'EUR': 'Euro',
      'AUD': 'Australian Dollar',
      'BGN': 'Bulgarian Lev',
      'BRL': 'Brazilian Real',
      'CAD': 'Canadian Dollar',
      'CHF': 'Swiss Franc',
      'CNY': 'Chinese Yuan',
      'CZK': 'Czeck Republic Koruna',
      'DKK': 'Danish Krone',
      'GBP': 'British Pound',
      'HKD': 'Hong Kong Dollar',
      'HRK': 'Croatian Kuna',
      'HUF': 'Hungarian Forint',
      'IDR': 'Indonesian Rupiah',
      'ILS': 'Israeli New Sheqel',
      'INR': 'Indian Rupee',
      'JPY': 'Japanese Yen',
      'KRW': 'South Korean Won',
      'MXN': 'Mexican Peso',
      'MYR': 'Malaysian Ringgit',
      'NOK': 'Norwegian Krone',
      'NZD': 'New Zealand Dollar',
      'PHP': 'Philippine Peso',
      'PLN': 'Polish Zloty',
      'RON': 'Romanian Leu',
      'RUB': 'Russian Ruble',
      'SEK': 'Swedish Krona',
      'SGD': 'Singapore Dollar',
      'THB': 'Thai Baht',
      'TRY': 'Turkish Lira',
      'ZAR': 'South African Rand'
    },
    'TIME_AGO': {
      'MOMENT': 'Moment ago',
      'MINUTE': 'min ago',
      'HOURS': 'hours ago',
      'DAY': 'day ago',
      'DAYS': 'days ago'
    },
    'EXPERIMENTAL':{
      'ARE': 'are',
      'IS': 'is',
      'DASHBOARD_OUT_OF_SYNC_P3': 'out of sync. Information about balances, transactions and send/receive functions is limited.',
      'SOMETHING_WENT_WRONG': 'Something went wrong. Please login again.'
    }
  }
};