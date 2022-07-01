import {
  __commonJS
} from "./chunk-WWO6H54A.js";

// node_modules/merge/lib/src/index.js
var require_src = __commonJS({
  "node_modules/merge/lib/src/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPlainObject = exports.clone = exports.recursive = exports.merge = exports.main = void 0;
    module.exports = exports = main;
    exports.default = main;
    function main() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      return merge.apply(void 0, items);
    }
    exports.main = main;
    main.clone = clone;
    main.isPlainObject = isPlainObject;
    main.recursive = recursive;
    function merge() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      return _merge(items[0] === true, false, items);
    }
    exports.merge = merge;
    function recursive() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      return _merge(items[0] === true, true, items);
    }
    exports.recursive = recursive;
    function clone(input) {
      if (Array.isArray(input)) {
        var output = [];
        for (var index = 0; index < input.length; ++index)
          output.push(clone(input[index]));
        return output;
      } else if (isPlainObject(input)) {
        var output = {};
        for (var index in input)
          output[index] = clone(input[index]);
        return output;
      } else {
        return input;
      }
    }
    exports.clone = clone;
    function isPlainObject(input) {
      return input && typeof input === "object" && !Array.isArray(input);
    }
    exports.isPlainObject = isPlainObject;
    function _recursiveMerge(base, extend) {
      if (!isPlainObject(base))
        return extend;
      for (var key in extend) {
        if (key === "__proto__" || key === "constructor" || key === "prototype")
          continue;
        base[key] = isPlainObject(base[key]) && isPlainObject(extend[key]) ? _recursiveMerge(base[key], extend[key]) : extend[key];
      }
      return base;
    }
    function _merge(isClone, isRecursive, items) {
      var result;
      if (isClone || !isPlainObject(result = items.shift()))
        result = {};
      for (var index = 0; index < items.length; ++index) {
        var item = items[index];
        if (!isPlainObject(item))
          continue;
        for (var key in item) {
          if (key === "__proto__" || key === "constructor" || key === "prototype")
            continue;
          var value = isClone ? clone(item[key]) : item[key];
          result[key] = isRecursive ? _recursiveMerge(result[key], value) : value;
        }
      }
      return result;
    }
  }
});

// node_modules/redux-localstorage-simple/dist/index.js
var require_dist = __commonJS({
  "node_modules/redux-localstorage-simple/dist/index.js"(exports) {
    "use strict";
    var _merge = _interopRequireDefault(require_src());
    Object.defineProperty(exports, "__esModule", { value: true }), exports.clear = clear, exports.combineLoads = combineLoads, exports.load = load, exports.save = save;
    function _interopRequireDefault(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function _slicedToArray(a, b) {
      return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(a, b) {
      if (a) {
        if (typeof a == "string")
          return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return c === "Object" && a.constructor && (c = a.constructor.name), c === "Map" || c === "Set" ? Array.from(a) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0;
      }
    }
    function _arrayLikeToArray(a, b) {
      (b == null || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++)
        d[c] = a[c];
      return d;
    }
    function _iterableToArrayLimit(a, b) {
      var c = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c != null) {
        var d, e, f = [], g = true, h = false;
        try {
          for (c = c.call(a); !(g = (d = c.next()).done) && (f.push(d.value), !(b && f.length === b)); g = true)
            ;
        } catch (a2) {
          h = true, e = a2;
        } finally {
          try {
            g || c["return"] == null || c["return"]();
          } finally {
            if (h)
              throw e;
          }
        }
        return f;
      }
    }
    function _arrayWithHoles(a) {
      if (Array.isArray(a))
        return a;
    }
    function _typeof(a) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a2) {
        return typeof a2;
      } : function(a2) {
        return a2 && typeof Symbol == "function" && a2.constructor === Symbol && a2 !== Symbol.prototype ? "symbol" : typeof a2;
      }, _typeof(a);
    }
    function _defineProperty(a, b, c) {
      return b in a ? Object.defineProperty(a, b, { value: c, enumerable: true, configurable: true, writable: true }) : a[b] = c, a;
    }
    var MODULE_NAME = "[Redux-LocalStorage-Simple]";
    var NAMESPACE_DEFAULT = "redux_localstorage_simple";
    var NAMESPACE_SEPARATOR_DEFAULT = "_";
    var STATES_DEFAULT = [];
    var IGNORE_STATES_DEFAULT = [];
    var DEBOUNCE_DEFAULT = 0;
    var IMMUTABLEJS_DEFAULT = false;
    var DISABLE_WARNINGS_DEFAULT = false;
    var debounceTimeouts = /* @__PURE__ */ new Map();
    function warnConsole(a) {
      console.warn(MODULE_NAME, a);
    }
    function warnSilent() {
    }
    var warn = function(a) {
      return a ? warnSilent : warnConsole;
    };
    function lensPath(a, b) {
      return b === void 0 ? null : a.length === 1 ? b[a[0]] : lensPath(a.slice(1), b[a[0]]);
    }
    function realiseObject(a) {
      function b(a2, c2) {
        return a2.length === 0 ? c2 : b(a2.slice(1), _defineProperty({}, a2[0], c2));
      }
      var c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
      return b(a.split(".").reverse(), c);
    }
    function SafeLocalStorage(a) {
      this.warnFn = a || warnConsole;
    }
    Object.defineProperty(SafeLocalStorage.prototype, "length", { get: function() {
      try {
        return localStorage.length;
      } catch (a) {
        this.warnFn(a);
      }
      return 0;
    }, configurable: true, enumerable: true }), SafeLocalStorage.prototype.key = function(a) {
      try {
        return localStorage.key(a);
      } catch (a2) {
        this.warnFn(a2);
      }
      return null;
    }, SafeLocalStorage.prototype.setItem = function(a, b) {
      try {
        localStorage.setItem(a, JSON.stringify(b));
      } catch (a2) {
        this.warnFn(a2);
      }
    }, SafeLocalStorage.prototype.getItem = function(a) {
      try {
        return JSON.parse(localStorage.getItem(a));
      } catch (a2) {
        this.warnFn(a2);
      }
      return null;
    }, SafeLocalStorage.prototype.removeItem = function(a) {
      try {
        localStorage.removeItem(a);
      } catch (a2) {
        this.warnFn(a2);
      }
    };
    function save() {
      var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, b = a.states, c = b === void 0 ? STATES_DEFAULT : b, d = a.ignoreStates, e = d === void 0 ? IGNORE_STATES_DEFAULT : d, f = a.namespace, g = f === void 0 ? NAMESPACE_DEFAULT : f, h = a.namespaceSeparator, i = h === void 0 ? NAMESPACE_SEPARATOR_DEFAULT : h, j = a.debounce, k = j === void 0 ? DEBOUNCE_DEFAULT : j, l = a.disableWarnings, m = l === void 0 ? DISABLE_WARNINGS_DEFAULT : l;
      return function(a2) {
        return function(b2) {
          return function(d2) {
            function f2(a3, b3) {
              return 1 < a3.split(".").length ? lensPath(a3.split("."), b3) : lensPath([a3], b3);
            }
            function h2() {
              c.length === 0 ? o.setItem(g, j2) : c.forEach(function(a3) {
                var b3 = g + i + a3, c2 = f2(a3, j2);
                c2 ? o.setItem(b3, c2) : o.removeItem(b3);
              });
            }
            var j2, l2 = warn(m), n = b2(d2);
            isArray(c) || (console.error(MODULE_NAME, "'states' parameter in 'save()' method was passed a non-array value. Setting default value instead. Check your 'save()' method."), c = STATES_DEFAULT), isArray(e) || (console.error(MODULE_NAME, "'ignoreStates' parameter in 'save()' method was passed a non-array value. Setting default value instead. Check your 'save()' method."), e = IGNORE_STATES_DEFAULT), 0 < e.length && (e = e.filter(function(a3) {
              return isString(a3) ? a3 : void console.error(MODULE_NAME, "'ignoreStates' array contains a non-string value. Ignoring this value. Check your 'ignoreStates' array.");
            })), isString(g) || (console.error(MODULE_NAME, "'namespace' parameter in 'save()' method was passed a non-string value. Setting default value instead. Check your 'save()' method."), g = NAMESPACE_DEFAULT), isString(i) || (console.error(MODULE_NAME, "'namespaceSeparator' parameter in 'save()' method was passed a non-string value. Setting default value instead. Check your 'save()' method."), i = NAMESPACE_SEPARATOR_DEFAULT), isInteger(k) || (console.error(MODULE_NAME, "'debounce' parameter in 'save()' method was passed a non-integer value. Setting default value instead. Check your 'save()' method."), k = DEBOUNCE_DEFAULT), j2 = 0 < e.length ? handleIgnoreStates(e, a2.getState()) : a2.getState();
            var o = new SafeLocalStorage(l2);
            return k ? (debounceTimeouts.get(c + g) && clearTimeout(debounceTimeouts.get(c + g)), debounceTimeouts.set(c + g, setTimeout(function() {
              h2(c, g);
            }, k))) : h2(c, g), n;
          };
        };
      };
    }
    function load() {
      var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, b = a.states, c = b === void 0 ? STATES_DEFAULT : b, d = a.immutablejs, e = d === void 0 ? IMMUTABLEJS_DEFAULT : d, f = a.namespace, g = f === void 0 ? NAMESPACE_DEFAULT : f, h = a.namespaceSeparator, i = h === void 0 ? NAMESPACE_SEPARATOR_DEFAULT : h, j = a.preloadedState, k = j === void 0 ? {} : j, l = a.disableWarnings, m = l === void 0 ? DISABLE_WARNINGS_DEFAULT : l, n = warn(m);
      isArray(c) || (console.error(MODULE_NAME, "'states' parameter in 'load()' method was passed a non-array value. Setting default value instead. Check your 'load()' method."), c = STATES_DEFAULT), isString(g) || (console.error(MODULE_NAME, "'namespace' parameter in 'load()' method was passed a non-string value. Setting default value instead. Check your 'load()' method."), g = NAMESPACE_DEFAULT), isString(i) || (console.error(MODULE_NAME, "'namespaceSeparator' parameter in 'load()' method was passed a non-string value. Setting default value instead. Check your 'load()' method."), i = NAMESPACE_SEPARATOR_DEFAULT), e === true && n("Support for Immutable.js data structures has been deprecated as of version 2.0.0. Please use version 1.4.0 if you require this functionality.");
      var o = new SafeLocalStorage(n), p = k;
      if (c.length === 0) {
        var q = o.getItem(g);
        q && (p = q);
      } else
        c.forEach(function(a2) {
          var b2 = g + i + a2, c2 = o.getItem(b2);
          c2 ? p = _merge["default"].recursive(p, realiseObject(a2, c2)) : n("Invalid load '" + b2 + "' provided. Check your 'states' in 'load()'. If this is your first time running this app you may see this message. To disable it in future use the 'disableWarnings' flag, see documentation.");
        });
      return p;
    }
    function combineLoads() {
      for (var a = {}, b = arguments.length, c = Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      return c.forEach(function(b2) {
        for (var c2 in isObject(b2) || (console.error(MODULE_NAME, "One or more loads provided to 'combineLoads()' is not a valid object. Ignoring the invalid load/s. Check your 'combineLoads()' method."), b2 = {}), b2)
          a[c2] = b2[c2];
      }), a;
    }
    function clear() {
      var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, b = a.namespace, c = b === void 0 ? NAMESPACE_DEFAULT : b, d = a.disableWarnings, e = d === void 0 ? DISABLE_WARNINGS_DEFAULT : d, f = warn(e);
      isString(c) || (console.error(MODULE_NAME, "'namespace' parameter in 'clear()' method was passed a non-string value. Setting default value instead. Check your 'clear()' method."), c = NAMESPACE_DEFAULT);
      for (var g, h = new SafeLocalStorage(f), i = h.length, j = 0; j < i; j++)
        g = h.key(j), g && g.slice(0, c.length) === c && h.removeItem(g);
    }
    function isArray(a) {
      return Object.prototype.toString.call(a) === "[object Array]";
    }
    function isString(a) {
      return typeof a == "string";
    }
    function isInteger(a) {
      return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
    }
    function isObject(a) {
      return a !== null && _typeof(a) === "object";
    }
    function handleIgnoreStates(a, b) {
      var c = Object.entries(b).reduce(function(c2, d) {
        var e = _slicedToArray(d, 2), f = e[0], g = e[1];
        return a.indexOf(f) === -1 && (c2[f] = b[f]), c2;
      }, {});
      return c;
    }
  }
});

// dep:redux-localstorage-simple
var redux_localstorage_simple_default = require_dist();
export {
  redux_localstorage_simple_default as default
};
//# sourceMappingURL=redux-localstorage-simple.js.map
