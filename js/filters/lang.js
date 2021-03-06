'use strict';

angular.module('IguanaGUIApp')
.filter('lang', function() {
  return function(langID) {
    if (langID && langID.indexOf('.') > -1) {
      var langIDComponents = langID.split('.');

      if (lang && langIDComponents && lang[settings.defaultLang][langIDComponents[0]][langIDComponents[1]])
        return lang[settings.defaultLang][langIDComponents[0]][langIDComponents[1]];
      else
        if (dev.showConsoleMessages && dev.isDev) console.log('Missing translation in js/' +  settings.defaultLang.toLowerCase() + '.js ' + langID);
        return '{{ ' + langID + ' }}';
    } else {
      if (langID.length)
        if (dev.showConsoleMessages && dev.isDev) console.log('Missing translation in js/' +  settings.defaultLang.toLowerCase() + '.js ' + langID);
        return '{{ ' + langID + ' }}';
    }
  };
});