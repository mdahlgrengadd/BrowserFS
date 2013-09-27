// Generated by CoffeeScript 1.6.2
(function() {
  var canUsePostMessage, handleMessage, messageName, timeouts;

  if (typeof setImmediate === 'undefined') {
    timeouts = [];
    messageName = "zero-timeout-message";
    canUsePostMessage = function() {
      var oldOnMessage, postMessageIsAsync;

      if (!window.postMessage) {
        return false;
      }
      postMessageIsAsync = true;
      oldOnMessage = window.onmessage;
      window.onmessage = function() {
        return postMessageIsAsync = false;
      };
      window.postMessage('', '*');
      window.onmessage = oldOnMessage;
      return postMessageIsAsync;
    };
    if (canUsePostMessage()) {
      window.setImmediate = function(fn) {
        timeouts.push(fn);
        return window.postMessage(messageName, "*");
      };
      handleMessage = function(event) {
        var fn;

        if (event.source === self && event.data === messageName) {
          if (event.stopPropagation) {
            event.stopPropagation();
          } else {
            event.cancelBubble = true;
          }
          if (timeouts.length > 0) {
            fn = timeouts.shift();
            return fn();
          }
        }
      };
      if (window.addEventListener) {
        window.addEventListener('message', handleMessage, true);
      } else {
        window.attachEvent('onmessage', handleMessage);
      }
    } else {
      window.setImmediate = function(fn) {
        var scriptEl;

        return setTimeout(fn, 0);
        scriptEl = window.document.createElement("script");
        scriptEl.onreadystatechange = function() {
          fn();
          scriptEl.onreadystatechange = null;
          scriptEl.parentNode.removeChild(scriptEl);
          return scriptEl = null;
        };
        window.document.documentElement.appendChild(scriptEl);
      };
    }
  }

}).call(this);
