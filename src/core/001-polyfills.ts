// Generated by CoffeeScript 1.6.2
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  if (Date.now == null) {
    Date.now = function() {
      return new Date().getTime();
    };
  }

  if (Array.isArray == null) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
  }

  if (Object.keys == null) {
    Object.keys = (function() {
      var dontEnums, dontEnumsLength, hasDontEnumBug, hasOwnProperty;

      hasOwnProperty = Object.prototype.hasOwnProperty;
      hasDontEnumBug = !{
        toString: null
      }.propertyIsEnumerable('toString');
      dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
      dontEnumsLength = dontEnums.length;
      return function(obj) {
        var i, prop, result, _i;

        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }
        result = [];
        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }
        if (hasDontEnumBug) {
          for (i = _i = 0; 0 <= dontEnumsLength ? _i < dontEnumsLength : _i > dontEnumsLength; i = 0 <= dontEnumsLength ? ++_i : --_i) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    })();
  }

  if ('ab'.substr(-1) !== 'b') {
    String.prototype.substr = (function(substr) {
      return function(start, length) {
        if (start < 0) {
          start = this.length + start;
        }
        return substr.call(this, start, length);
      };
    })(String.prototype.substr);
  }

  if (Array.prototype.forEach == null) {
    Array.prototype.forEach = function(fn, scope) {
      var i, _i, _ref, _results;

      _results = [];
      for (i = _i = 0, _ref = this.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (__indexOf.call(this, i) >= 0) {
          _results.push(fn.call(scope, this[i], i, this));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
  }

}).call(this);
