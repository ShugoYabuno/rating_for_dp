import { g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal } from '../_commonjsHelpers.mjs';
import * as ufo from 'ufo';
import * as esnext_set_addAll from 'core-js/modules/esnext.set.add-all.js';
import * as esnext_set_deleteAll from 'core-js/modules/esnext.set.delete-all.js';
import * as esnext_set_difference from 'core-js/modules/esnext.set.difference.js';
import * as esnext_set_every from 'core-js/modules/esnext.set.every.js';
import * as esnext_set_filter from 'core-js/modules/esnext.set.filter.js';
import * as esnext_set_find from 'core-js/modules/esnext.set.find.js';
import * as esnext_set_intersection from 'core-js/modules/esnext.set.intersection.js';
import * as esnext_set_isDisjointFrom from 'core-js/modules/esnext.set.is-disjoint-from.js';
import * as esnext_set_isSubsetOf from 'core-js/modules/esnext.set.is-subset-of.js';
import * as esnext_set_isSupersetOf from 'core-js/modules/esnext.set.is-superset-of.js';
import * as esnext_set_join from 'core-js/modules/esnext.set.join.js';
import * as esnext_set_map from 'core-js/modules/esnext.set.map.js';
import * as esnext_set_reduce from 'core-js/modules/esnext.set.reduce.js';
import * as esnext_set_some from 'core-js/modules/esnext.set.some.js';
import * as esnext_set_symmetricDifference from 'core-js/modules/esnext.set.symmetric-difference.js';
import * as esnext_set_union from 'core-js/modules/esnext.set.union.js';
import * as esnext_weakMap_deleteAll from 'core-js/modules/esnext.weak-map.delete-all.js';
import * as esnext_map_deleteAll from 'core-js/modules/esnext.map.delete-all.js';
import * as esnext_map_every from 'core-js/modules/esnext.map.every.js';
import * as esnext_map_filter from 'core-js/modules/esnext.map.filter.js';
import * as esnext_map_find from 'core-js/modules/esnext.map.find.js';
import * as esnext_map_findKey from 'core-js/modules/esnext.map.find-key.js';
import * as esnext_map_includes from 'core-js/modules/esnext.map.includes.js';
import * as esnext_map_keyOf from 'core-js/modules/esnext.map.key-of.js';
import * as esnext_map_mapKeys from 'core-js/modules/esnext.map.map-keys.js';
import * as esnext_map_mapValues from 'core-js/modules/esnext.map.map-values.js';
import * as esnext_map_merge from 'core-js/modules/esnext.map.merge.js';
import * as esnext_map_reduce from 'core-js/modules/esnext.map.reduce.js';
import * as esnext_map_some from 'core-js/modules/esnext.map.some.js';
import * as esnext_map_update from 'core-js/modules/esnext.map.update.js';
import * as defu from 'defu';
import * as axios from 'axios';
import * as cookieUniversal from 'cookie-universal';
import * as deepmerge from 'deepmerge';
import * as firebase from 'firebase/app';
import * as dayjs from 'dayjs';
import * as auth from 'firebase/auth';
import * as firestore from 'firebase/firestore';

var server$2 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ufo);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_addAll);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_deleteAll);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_difference);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_every);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_filter);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_find);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_intersection);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isDisjointFrom);

const require$$9 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSubsetOf);

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSupersetOf);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_join);

const require$$12 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_map);

const require$$13 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_reduce);

const require$$14 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_some);

const require$$15 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_symmetricDifference);

const require$$16 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_union);

const require$$17 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_weakMap_deleteAll);

const require$$18 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_deleteAll);

const require$$19 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_every);

const require$$20 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_filter);

const require$$21 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_find);

const require$$22 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_findKey);

const require$$23 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_includes);

const require$$24 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_keyOf);

const require$$25 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapKeys);

const require$$26 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapValues);

const require$$27 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_merge);

const require$$28 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_reduce);

const require$$29 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_some);

const require$$30 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_update);

const require$$31 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(defu);

const require$$32 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(axios);

const require$$33 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cookieUniversal);

const require$$34 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(deepmerge);

const require$$35 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(firebase);

const require$$36 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(dayjs);

const require$$37 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(auth);

const require$$38 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(firestore);

(function (module) {
module.exports = function(modules) {
  var installedModules = {};
  var installedChunks = {
    0: 0
  };
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module2 = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
    module2.l = true;
    return module2.exports;
  }
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];
    var installedChunkData = installedChunks[chunkId];
    if (installedChunkData !== 0) {
      if (installedChunkData) {
        promises.push(installedChunkData[2]);
      } else {
        var promise = new Promise(function(resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
          import('../_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( ({ "1": "pages/index", "2": "pages/match/_matchId", "3": "pages/match/list", "4": "pages/match/start", "5": "pages/match/waiting", "6": "pages/user/sign_in", "7": "pages/user/sign_up" }[chunkId] || chunkId) + ".js")).then((chunk) => {
            var moreModules = chunk.modules, chunkIds = chunk.ids;
            for (var moduleId in moreModules) {
              modules[moduleId] = moreModules[moduleId];
            }
            var callbacks = [];
            for (var i = 0; i < chunkIds.length; i++) {
              if (installedChunks[chunkIds[i]])
                callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
              installedChunks[chunkIds[i]] = 0;
            }
            for (i = 0; i < callbacks.length; i++)
              callbacks[i]();
          });
        });
        promises.push(installedChunkData[2] = promise);
      }
    }
    return Promise.all(promises);
  };
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1)
      value = __webpack_require__(value);
    if (mode & 8)
      return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", { enumerable: true, value });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(ns, key, function(key2) {
          return value[key2];
        }.bind(null, key));
    return ns;
  };
  __webpack_require__.n = function(module2) {
    var getter = module2 && module2.__esModule ? function getDefault() {
      return module2["default"];
    } : function getModuleExports() {
      return module2;
    };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "/_nuxt/";
  __webpack_require__.oe = function(err) {
    process.nextTick(function() {
      throw err;
    });
  };
  return __webpack_require__(__webpack_require__.s = 51);
}([
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "EffectScope", function() {
      return EffectScope;
    });
    __webpack_require__.d(__webpack_exports__, "computed", function() {
      return computed;
    });
    __webpack_require__.d(__webpack_exports__, "createApp", function() {
      return createApp;
    });
    __webpack_require__.d(__webpack_exports__, "createRef", function() {
      return createRef;
    });
    __webpack_require__.d(__webpack_exports__, "customRef", function() {
      return customRef;
    });
    __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() {
      return defineAsyncComponent;
    });
    __webpack_require__.d(__webpack_exports__, "defineComponent", function() {
      return defineComponent;
    });
    __webpack_require__.d(__webpack_exports__, "del", function() {
      return del;
    });
    __webpack_require__.d(__webpack_exports__, "effectScope", function() {
      return effectScope;
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() {
      return getCurrentInstance;
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() {
      return getCurrentScope;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return createElement;
    });
    __webpack_require__.d(__webpack_exports__, "inject", function() {
      return inject;
    });
    __webpack_require__.d(__webpack_exports__, "isRaw", function() {
      return isRaw;
    });
    __webpack_require__.d(__webpack_exports__, "isReactive", function() {
      return isReactive;
    });
    __webpack_require__.d(__webpack_exports__, "isReadonly", function() {
      return isReadonly;
    });
    __webpack_require__.d(__webpack_exports__, "isRef", function() {
      return isRef;
    });
    __webpack_require__.d(__webpack_exports__, "markRaw", function() {
      return markRaw;
    });
    __webpack_require__.d(__webpack_exports__, "nextTick", function() {
      return nextTick;
    });
    __webpack_require__.d(__webpack_exports__, "onActivated", function() {
      return onActivated;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() {
      return onBeforeMount;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() {
      return onBeforeUnmount;
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() {
      return onBeforeUpdate;
    });
    __webpack_require__.d(__webpack_exports__, "onDeactivated", function() {
      return onDeactivated;
    });
    __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() {
      return onErrorCaptured;
    });
    __webpack_require__.d(__webpack_exports__, "onMounted", function() {
      return onMounted;
    });
    __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() {
      return onScopeDispose;
    });
    __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() {
      return onServerPrefetch;
    });
    __webpack_require__.d(__webpack_exports__, "onUnmounted", function() {
      return onUnmounted;
    });
    __webpack_require__.d(__webpack_exports__, "onUpdated", function() {
      return onUpdated;
    });
    __webpack_require__.d(__webpack_exports__, "provide", function() {
      return provide;
    });
    __webpack_require__.d(__webpack_exports__, "proxyRefs", function() {
      return proxyRefs;
    });
    __webpack_require__.d(__webpack_exports__, "reactive", function() {
      return reactive;
    });
    __webpack_require__.d(__webpack_exports__, "readonly", function() {
      return readonly;
    });
    __webpack_require__.d(__webpack_exports__, "ref", function() {
      return ref;
    });
    __webpack_require__.d(__webpack_exports__, "set", function() {
      return set$1;
    });
    __webpack_require__.d(__webpack_exports__, "shallowReactive", function() {
      return shallowReactive;
    });
    __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() {
      return shallowReadonly;
    });
    __webpack_require__.d(__webpack_exports__, "shallowRef", function() {
      return shallowRef;
    });
    __webpack_require__.d(__webpack_exports__, "toRaw", function() {
      return toRaw;
    });
    __webpack_require__.d(__webpack_exports__, "toRef", function() {
      return toRef;
    });
    __webpack_require__.d(__webpack_exports__, "toRefs", function() {
      return toRefs;
    });
    __webpack_require__.d(__webpack_exports__, "triggerRef", function() {
      return triggerRef;
    });
    __webpack_require__.d(__webpack_exports__, "unref", function() {
      return unref;
    });
    __webpack_require__.d(__webpack_exports__, "useAttrs", function() {
      return useAttrs;
    });
    __webpack_require__.d(__webpack_exports__, "useCSSModule", function() {
      return useCSSModule;
    });
    __webpack_require__.d(__webpack_exports__, "useCssModule", function() {
      return useCssModule;
    });
    __webpack_require__.d(__webpack_exports__, "useSlots", function() {
      return useSlots;
    });
    __webpack_require__.d(__webpack_exports__, "version", function() {
      return version;
    });
    __webpack_require__.d(__webpack_exports__, "warn", function() {
      return warn;
    });
    __webpack_require__.d(__webpack_exports__, "watch", function() {
      return watch;
    });
    __webpack_require__.d(__webpack_exports__, "watchEffect", function() {
      return watchEffect;
    });
    __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() {
      return watchPostEffect;
    });
    __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() {
      return watchSyncEffect;
    });
    __webpack_require__(29);
    __webpack_require__(13);
    __webpack_require__(14);
    __webpack_require__(15);
    __webpack_require__(16);
    __webpack_require__(17);
    __webpack_require__(18);
    __webpack_require__(19);
    __webpack_require__(20);
    __webpack_require__(21);
    __webpack_require__(22);
    __webpack_require__(23);
    __webpack_require__(24);
    __webpack_require__(25);
    __webpack_require__(26);
    __webpack_require__(27);
    __webpack_require__(28);
    __webpack_require__(30);
    __webpack_require__(31);
    __webpack_require__(32);
    __webpack_require__(33);
    __webpack_require__(34);
    __webpack_require__(35);
    __webpack_require__(36);
    __webpack_require__(37);
    __webpack_require__(38);
    __webpack_require__(39);
    __webpack_require__(40);
    __webpack_require__(41);
    __webpack_require__(42);
    var vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(1);
    var toString = function(x) {
      return Object.prototype.toString.call(x);
    };
    function isNative(Ctor) {
      return typeof Ctor === "function" && /native code/.test(Ctor.toString());
    }
    var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
    var noopFn = function(_) {
      return _;
    };
    function proxy(target, key, _a) {
      var get2 = _a.get, set2 = _a.set;
      Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get2 || noopFn,
        set: set2 || noopFn
      });
    }
    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    function hasOwn(obj, key) {
      return Object.hasOwnProperty.call(obj, key);
    }
    function assert(condition, msg) {
      if (!condition) {
        throw new Error("[vue-composition-api] " + msg);
      }
    }
    function isArray(x) {
      return Array.isArray(x);
    }
    var objectToString = Object.prototype.toString;
    var toTypeString = function(value) {
      return objectToString.call(value);
    };
    var isMap = function(val) {
      return toTypeString(val) === "[object Map]";
    };
    var isSet = function(val) {
      return toTypeString(val) === "[object Set]";
    };
    var MAX_VALID_ARRAY_LENGTH = 4294967295;
    function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val) && n <= MAX_VALID_ARRAY_LENGTH;
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(x) {
      return toString(x) === "[object Object]";
    }
    function isFunction(x) {
      return typeof x === "function";
    }
    function warn$1(msg, vm) {
      vue__WEBPACK_IMPORTED_MODULE_30__["default"].util.warn(msg, vm);
    }
    function logError(err, vm, info) {
      {
        throw err;
      }
    }
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    }
    function __spreadArray(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    }
    function warn(message) {
      var _a;
      warn$1(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    }
    var activeEffectScope;
    var effectScopeStack = [];
    var EffectScopeImpl = function() {
      function EffectScopeImpl2(vm) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        this.vm = vm;
      }
      EffectScopeImpl2.prototype.run = function(fn) {
        if (this.active) {
          try {
            this.on();
            return fn();
          } finally {
            this.off();
          }
        }
        return;
      };
      EffectScopeImpl2.prototype.on = function() {
        if (this.active) {
          effectScopeStack.push(this);
          activeEffectScope = this;
        }
      };
      EffectScopeImpl2.prototype.off = function() {
        if (this.active) {
          effectScopeStack.pop();
          activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
      };
      EffectScopeImpl2.prototype.stop = function() {
        if (this.active) {
          this.vm.$destroy();
          this.effects.forEach(function(e) {
            return e.stop();
          });
          this.cleanups.forEach(function(cleanup) {
            return cleanup();
          });
          this.active = false;
        }
      };
      return EffectScopeImpl2;
    }();
    var EffectScope = function(_super) {
      __extends(EffectScope2, _super);
      function EffectScope2(detached) {
        if (detached === void 0) {
          detached = false;
        }
        var _this = this;
        var vm = void 0;
        withCurrentInstanceTrackingDisabled(function() {
          vm = defineComponentInstance(getVueConstructor());
        });
        _this = _super.call(this, vm) || this;
        if (!detached) {
          recordEffectScope(_this);
        }
        return _this;
      }
      return EffectScope2;
    }(EffectScopeImpl);
    function recordEffectScope(effect, scope) {
      var _a;
      scope = scope || activeEffectScope;
      if (scope && scope.active) {
        scope.effects.push(effect);
        return;
      }
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      vm && vm.$on("hook:destroyed", function() {
        return effect.stop();
      });
    }
    function effectScope(detached) {
      return new EffectScope(detached);
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    function onScopeDispose(fn) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
      }
    }
    function getCurrentScopeVM() {
      var _a, _b;
      return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
    }
    function bindCurrentScopeToVM(vm) {
      if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy);
        vm.scope = scope_1;
        vm.proxy.$on("hook:destroyed", function() {
          return scope_1.stop();
        });
      }
      return vm.scope;
    }
    var vueDependency = void 0;
    try {
      var requiredVue = __webpack_require__(1);
      if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
      } else if (requiredVue && "default" in requiredVue && isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
      }
    } catch (_a) {
    }
    var vueConstructor = null;
    var currentInstance = null;
    var currentInstanceTracking = true;
    var PluginInstalledFlag = "__composition_api_installed__";
    function isVue(obj) {
      return obj && isFunction(obj) && obj.name === "Vue";
    }
    function isVueRegistered(Vue) {
      return hasOwn(Vue, PluginInstalledFlag);
    }
    function getVueConstructor() {
      return vueConstructor;
    }
    function getRegisteredVueOrDefault() {
      var constructor = vueConstructor || vueDependency;
      return constructor;
    }
    function setVueConstructor(Vue) {
      vueConstructor = Vue;
      Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true
      });
    }
    function withCurrentInstanceTrackingDisabled(fn) {
      var prev = currentInstanceTracking;
      currentInstanceTracking = false;
      try {
        fn();
      } finally {
        currentInstanceTracking = prev;
      }
    }
    function setCurrentInstance(instance) {
      if (!currentInstanceTracking)
        return;
      var prev = currentInstance;
      prev === null || prev === void 0 ? void 0 : prev.scope.off();
      currentInstance = instance;
      currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
    }
    function getCurrentInstance() {
      return currentInstance;
    }
    var instanceMapCache = new WeakMap();
    function toVue3ComponentInstance(vm) {
      if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm);
      }
      var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null
      };
      bindCurrentScopeToVM(instance);
      var instanceProps = ["data", "props", "attrs", "refs", "vnode", "slots"];
      instanceProps.forEach(function(prop) {
        proxy(instance, prop, {
          get: function() {
            return vm["$" + prop];
          }
        });
      });
      proxy(instance, "isMounted", {
        get: function() {
          return vm._isMounted;
        }
      });
      proxy(instance, "isUnmounted", {
        get: function() {
          return vm._isDestroyed;
        }
      });
      proxy(instance, "isDeactivated", {
        get: function() {
          return vm._inactive;
        }
      });
      proxy(instance, "emitted", {
        get: function() {
          return vm._events;
        }
      });
      instanceMapCache.set(vm, instance);
      if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent);
      }
      if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root);
      }
      return instance;
    }
    function getCurrentInstanceForFn(hook, target) {
      target = target || getCurrentInstance();
      return target;
    }
    function defineComponentInstance(Ctor, options) {
      if (options === void 0) {
        options = {};
      }
      var silent = Ctor.config.silent;
      Ctor.config.silent = true;
      var vm = new Ctor(options);
      Ctor.config.silent = silent;
      return vm;
    }
    function isComponentInstance(obj) {
      var Vue = getVueConstructor();
      return Vue && obj instanceof Vue;
    }
    function createSlotProxy(vm, slotName) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
          return;
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
      };
    }
    function resolveSlots(slots, normalSlots) {
      var res;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        return slots._normalized;
      } else {
        res = {};
        for (var key in slots) {
          if (slots[key] && key[0] !== "$") {
            res[key] = true;
          }
        }
      }
      for (var key in normalSlots) {
        if (!(key in res)) {
          res[key] = true;
        }
      }
      return res;
    }
    var vueInternalClasses;
    var getVueInternalClasses = function() {
      if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
          computed: {
            value: function() {
              return 0;
            }
          }
        });
        var Watcher = vm._computedWatchers.value.constructor;
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
          Watcher,
          Dep
        };
        vm.$destroy();
      }
      return vueInternalClasses;
    };
    function createSymbol(name) {
      return hasSymbol ? Symbol.for(name) : name;
    }
    var WatcherPreFlushQueueKey = createSymbol("composition-api.preFlushQueue");
    var WatcherPostFlushQueueKey = createSymbol("composition-api.postFlushQueue");
    var RefKey = "composition-api.refKey";
    var accessModifiedSet = new WeakMap();
    var rawSet = new WeakMap();
    var readonlySet = new WeakMap();
    var RefImpl = function() {
      function RefImpl2(_a) {
        var get2 = _a.get, set2 = _a.set;
        proxy(this, "value", {
          get: get2,
          set: set2
        });
      }
      return RefImpl2;
    }();
    function createRef(options, isReadonly2, isComputed) {
      if (isReadonly2 === void 0) {
        isReadonly2 = false;
      }
      if (isComputed === void 0) {
        isComputed = false;
      }
      var r = new RefImpl(options);
      if (isComputed)
        r.effect = true;
      var sealed = Object.seal(r);
      if (isReadonly2)
        readonlySet.set(sealed, true);
      return sealed;
    }
    function ref(raw) {
      var _a;
      if (isRef(raw)) {
        return raw;
      }
      var value = reactive((_a = {}, _a[RefKey] = raw, _a));
      return createRef({
        get: function() {
          return value[RefKey];
        },
        set: function(v) {
          return value[RefKey] = v;
        }
      });
    }
    function isRef(value) {
      return value instanceof RefImpl;
    }
    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }
    function toRefs(obj) {
      if (!isPlainObject(obj))
        return obj;
      var ret = {};
      for (var key in obj) {
        ret[key] = toRef(obj, key);
      }
      return ret;
    }
    function customRef(factory) {
      var version2 = ref(0);
      return createRef(factory(function() {
        return void version2.value;
      }, function() {
        ++version2.value;
      }));
    }
    function toRef(object, key) {
      var v = object[key];
      if (isRef(v))
        return v;
      return createRef({
        get: function() {
          return object[key];
        },
        set: function(v2) {
          return object[key] = v2;
        }
      });
    }
    function shallowRef(raw) {
      var _a;
      if (isRef(raw)) {
        return raw;
      }
      var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
      return createRef({
        get: function() {
          return value[RefKey];
        },
        set: function(v) {
          return value[RefKey] = v;
        }
      });
    }
    function triggerRef(value) {
      if (!isRef(value))
        return;
      value.value = value.value;
    }
    function proxyRefs(objectWithRefs) {
      var _a, e_1, _b;
      if (isReactive(objectWithRefs)) {
        return objectWithRefs;
      }
      var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
      def(value, RefKey, value[RefKey], false);
      var _loop_1 = function(key2) {
        proxy(value, key2, {
          get: function() {
            if (isRef(value[RefKey][key2])) {
              return value[RefKey][key2].value;
            }
            return value[RefKey][key2];
          },
          set: function(v) {
            if (isRef(value[RefKey][key2])) {
              return value[RefKey][key2].value = unref(v);
            }
            value[RefKey][key2] = unref(v);
          }
        });
      };
      try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var key = _d.value;
          _loop_1(key);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c.return))
            _b.call(_c);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return value;
    }
    function isRaw(obj) {
      var _a;
      return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
    }
    function isReactive(obj) {
      var _a;
      return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
    }
    function setupAccessControl(target) {
      if (!isPlainObject(target) || isRaw(target) || isArray(target) || isRef(target) || isComponentInstance(target) || accessModifiedSet.has(target))
        return;
      accessModifiedSet.set(target, true);
      var keys = Object.keys(target);
      for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
      }
    }
    function defineAccessControl(target, key, val) {
      if (key === "__ob__")
        return;
      if (isRaw(target[key]))
        return;
      var getter;
      var setter;
      var property = Object.getOwnPropertyDescriptor(target, key);
      if (property) {
        if (property.configurable === false) {
          return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) && arguments.length === 2) {
          val = target[key];
        }
      }
      setupAccessControl(val);
      proxy(target, key, {
        get: function getterHandler() {
          var value = getter ? getter.call(target) : val;
          if (key !== RefKey && isRef(value)) {
            return value.value;
          } else {
            return value;
          }
        },
        set: function setterHandler(newVal) {
          if (getter && !setter)
            return;
          if (key !== RefKey && isRef(val) && !isRef(newVal)) {
            val.value = newVal;
          } else if (setter) {
            setter.call(target, newVal);
            val = newVal;
          } else {
            val = newVal;
          }
          setupAccessControl(newVal);
        }
      });
    }
    function observe(obj) {
      var Vue = getRegisteredVueOrDefault();
      var observed;
      if (Vue.observable) {
        observed = Vue.observable(obj);
      } else {
        var vm = defineComponentInstance(Vue, {
          data: {
            $$state: obj
          }
        });
        observed = vm._data.$$state;
      }
      if (!hasOwn(observed, "__ob__")) {
        mockReactivityDeep(observed);
      }
      return observed;
    }
    function mockReactivityDeep(obj, seen) {
      var e_1, _a;
      if (seen === void 0) {
        seen = new Set();
      }
      if (seen.has(obj) || hasOwn(obj, "__ob__") || !Object.isExtensible(obj))
        return;
      def(obj, "__ob__", mockObserver(obj));
      seen.add(obj);
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var value = obj[key];
          if (!(isPlainObject(value) || isArray(value)) || isRaw(value) || !Object.isExtensible(value)) {
            continue;
          }
          mockReactivityDeep(value, seen);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    function mockObserver(value) {
      if (value === void 0) {
        value = {};
      }
      return {
        value,
        dep: {
          notify: noopFn,
          depend: noopFn,
          addSub: noopFn,
          removeSub: noopFn
        }
      };
    }
    function createObserver() {
      return observe({}).__ob__;
    }
    function shallowReactive(obj) {
      var e_2, _a;
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
        return obj;
      }
      var observed = observe(isArray(obj) ? [] : {});
      setupAccessControl(observed);
      var ob = observed.__ob__;
      var _loop_1 = function(key2) {
        var val = obj[key2];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key2);
        if (property) {
          if (property.configurable === false) {
            return "continue";
          }
          getter = property.get;
          setter = property.set;
        }
        proxy(observed, key2, {
          get: function getterHandler() {
            var _a2;
            var value = getter ? getter.call(obj) : val;
            (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.depend();
            return value;
          },
          set: function setterHandler(newVal) {
            var _a2;
            if (getter && !setter)
              return;
            if (setter) {
              setter.call(obj, newVal);
            } else {
              val = newVal;
            }
            (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.notify();
          }
        });
      };
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          _loop_1(key);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return observed;
    }
    function reactive(obj) {
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
        return obj;
      }
      var observed = observe(obj);
      setupAccessControl(observed);
      return observed;
    }
    function markRaw(obj) {
      if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
      }
      var ob = createObserver();
      ob.__raw__ = true;
      def(obj, "__ob__", ob);
      rawSet.set(obj, true);
      return obj;
    }
    function toRaw(observed) {
      var _a, _b;
      if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
      }
      return ((_b = (_a = observed) === null || _a === void 0 ? void 0 : _a.__ob__) === null || _b === void 0 ? void 0 : _b.value) || observed;
    }
    function isReadonly(obj) {
      return readonlySet.has(obj);
    }
    function readonly(target) {
      {
        readonlySet.set(target, true);
      }
      return target;
    }
    function shallowReadonly(obj) {
      var e_1, _a;
      if (!isObject(obj)) {
        return obj;
      }
      if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj) && !isRef(obj)) {
        return obj;
      }
      var readonlyObj = isRef(obj) ? new RefImpl({}) : isReactive(obj) ? observe({}) : {};
      var source = reactive({});
      var ob = source.__ob__;
      var _loop_1 = function(key2) {
        var val = obj[key2];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key2);
        if (property) {
          if (property.configurable === false && !isRef(obj)) {
            return "continue";
          }
          getter = property.get;
        }
        proxy(readonlyObj, key2, {
          get: function getterHandler() {
            var value = getter ? getter.call(obj) : val;
            ob.dep.depend();
            return value;
          },
          set: function(v) {
          }
        });
      };
      try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          _loop_1(key);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      readonlySet.set(readonlyObj, true);
      return readonlyObj;
    }
    function set$1(target, key, val) {
      var Vue = getVueConstructor();
      var _a = Vue.util; _a.warn; var defineReactive = _a.defineReactive;
      var ob = target.__ob__;
      function ssrMockReactivity() {
        if (ob && isObject(val) && !hasOwn(val, "__ob__")) {
          mockReactivityDeep(val);
        }
      }
      if (isArray(target)) {
        if (isValidArrayIndex(key)) {
          target.length = Math.max(target.length, key);
          target.splice(key, 1, val);
          ssrMockReactivity();
          return val;
        } else if (key === "length" && val !== target.length) {
          target.length = val;
          ob === null || ob === void 0 ? void 0 : ob.dep.notify();
          return val;
        }
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        ssrMockReactivity();
        return val;
      }
      if (target._isVue || ob && ob.vmCount) {
        return val;
      }
      if (!ob) {
        target[key] = val;
        return val;
      }
      defineReactive(ob.value, key, val);
      defineAccessControl(target, key, val);
      ssrMockReactivity();
      ob.dep.notify();
      return val;
    }
    function del(target, key) {
      var Vue = getVueConstructor();
      Vue.util.warn;
      if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
      }
      var ob = target.__ob__;
      if (target._isVue || ob && ob.vmCount) {
        return;
      }
      if (!hasOwn(target, key)) {
        return;
      }
      delete target[key];
      if (!ob) {
        return;
      }
      ob.dep.notify();
    }
    var genName = function(name) {
      return "on" + (name[0].toUpperCase() + name.slice(1));
    };
    function createLifeCycle(lifeCyclehook) {
      return function(callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
        return instance && injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback);
      };
    }
    function injectHookOption(Vue, instance, hook, val) {
      var options = instance.proxy.$options;
      var mergeFn = Vue.config.optionMergeStrategies[hook];
      var wrappedHook = wrapHookCall(instance, val);
      options[hook] = mergeFn(options[hook], wrappedHook);
      return wrappedHook;
    }
    function wrapHookCall(instance, fn) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var prev = getCurrentInstance();
        setCurrentInstance(instance);
        try {
          return fn.apply(void 0, __spreadArray([], __read(args)));
        } finally {
          setCurrentInstance(prev);
        }
      };
    }
    var onBeforeMount = createLifeCycle("beforeMount");
    var onMounted = createLifeCycle("mounted");
    var onBeforeUpdate = createLifeCycle("beforeUpdate");
    var onUpdated = createLifeCycle("updated");
    var onBeforeUnmount = createLifeCycle("beforeDestroy");
    var onUnmounted = createLifeCycle("destroyed");
    var onErrorCaptured = createLifeCycle("errorCaptured");
    var onActivated = createLifeCycle("activated");
    var onDeactivated = createLifeCycle("deactivated");
    var onServerPrefetch = createLifeCycle("serverPrefetch");
    var fallbackVM;
    function flushPreQueue() {
      flushQueue(this, WatcherPreFlushQueueKey);
    }
    function flushPostQueue() {
      flushQueue(this, WatcherPostFlushQueueKey);
    }
    function hasWatchEnv(vm) {
      return vm[WatcherPreFlushQueueKey] !== void 0;
    }
    function installWatchEnv(vm) {
      vm[WatcherPreFlushQueueKey] = [];
      vm[WatcherPostFlushQueueKey] = [];
      vm.$on("hook:beforeUpdate", flushPreQueue);
      vm.$on("hook:updated", flushPostQueue);
    }
    function getWatcherOption(options) {
      return __assign({
        immediate: false,
        deep: false,
        flush: "pre"
      }, options);
    }
    function getWatchEffectOption(options) {
      return __assign({
        flush: "pre"
      }, options);
    }
    function getWatcherVM() {
      var vm = getCurrentScopeVM();
      if (!vm) {
        if (!fallbackVM) {
          fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
      } else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
      }
      return vm;
    }
    function flushQueue(vm, key) {
      var queue = vm[key];
      for (var index = 0; index < queue.length; index++) {
        queue[index]();
      }
      queue.length = 0;
    }
    function queueFlushJob(vm, fn, mode) {
      var fallbackFlush = function() {
        vm.$nextTick(function() {
          if (vm[WatcherPreFlushQueueKey].length) {
            flushQueue(vm, WatcherPreFlushQueueKey);
          }
          if (vm[WatcherPostFlushQueueKey].length) {
            flushQueue(vm, WatcherPostFlushQueueKey);
          }
        });
      };
      switch (mode) {
        case "pre":
          fallbackFlush();
          vm[WatcherPreFlushQueueKey].push(fn);
          break;
        case "post":
          fallbackFlush();
          vm[WatcherPostFlushQueueKey].push(fn);
          break;
        default:
          assert(false, 'flush must be one of ["post", "pre", "sync"], but got ' + mode);
          break;
      }
    }
    function createVueWatcher(vm, getter, callback, options) {
      var index = vm._watchers.length;
      vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before
      });
      return vm._watchers[index];
    }
    function patchWatcherTeardown(watcher, runCleanup) {
      var _teardown = watcher.teardown;
      watcher.teardown = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
      };
    }
    function createWatcher(vm, source, cb, options) {
      var _a;
      var flushMode = options.flush;
      var isSync = flushMode === "sync";
      var cleanup;
      var registerCleanup = function(fn) {
        cleanup = function() {
          try {
            fn();
          } catch (error) {
            logError(error);
          }
        };
      };
      var runCleanup = function() {
        if (cleanup) {
          cleanup();
          cleanup = null;
        }
      };
      var createScheduler = function(fn) {
        if (isSync || vm === fallbackVM) {
          return fn;
        }
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return queueFlushJob(vm, function() {
            fn.apply(void 0, __spreadArray([], __read(args)));
          }, flushMode);
        };
      };
      if (cb === null) {
        var running_1 = false;
        var getter_1 = function() {
          if (running_1) {
            return;
          }
          try {
            running_1 = true;
            source(registerCleanup);
          } finally {
            running_1 = false;
          }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
          deep: options.deep || false,
          sync: isSync,
          before: runCleanup
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        watcher_1.get = createScheduler(originGet);
        return function() {
          watcher_1.teardown();
        };
      }
      var deep = options.deep;
      var isMultiSource = false;
      var getter;
      if (isRef(source)) {
        getter = function() {
          return source.value;
        };
      } else if (isReactive(source)) {
        getter = function() {
          return source;
        };
        deep = true;
      } else if (isArray(source)) {
        isMultiSource = true;
        getter = function() {
          return source.map(function(s) {
            if (isRef(s)) {
              return s.value;
            } else if (isReactive(s)) {
              return traverse(s);
            } else if (isFunction(s)) {
              return s();
            } else {
              return noopFn;
            }
          });
        };
      } else if (isFunction(source)) {
        getter = source;
      } else {
        getter = noopFn;
      }
      if (deep) {
        var baseGetter_1 = getter;
        getter = function() {
          return traverse(baseGetter_1());
        };
      }
      var applyCb = function(n, o) {
        if (!deep && isMultiSource && n.every(function(v, i) {
          return Object.is(v, o[i]);
        }))
          return;
        runCleanup();
        return cb(n, o, registerCleanup);
      };
      var callback = createScheduler(applyCb);
      if (options.immediate) {
        var originalCallback_1 = callback;
        var shiftCallback_1 = function(n, o) {
          shiftCallback_1 = originalCallback_1;
          return applyCb(n, isArray(n) ? [] : o);
        };
        callback = function(n, o) {
          return shiftCallback_1(n, o);
        };
      }
      var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep,
        sync: isSync
      });
      var watcher = vm._watchers[vm._watchers.length - 1];
      if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
          update: function() {
            watcher.run();
          }
        });
      }
      patchWatcherTeardown(watcher, runCleanup);
      return function() {
        stop();
      };
    }
    function watchEffect(effect, options) {
      var opts = getWatchEffectOption(options);
      var vm = getWatcherVM();
      return createWatcher(vm, effect, null, opts);
    }
    function watchPostEffect(effect) {
      return watchEffect(effect, {
        flush: "post"
      });
    }
    function watchSyncEffect(effect) {
      return watchEffect(effect, {
        flush: "sync"
      });
    }
    function watch(source, cb, options) {
      var callback = null;
      if (isFunction(cb)) {
        callback = cb;
      } else {
        options = cb;
        callback = null;
      }
      var opts = getWatcherOption(options);
      var vm = getWatcherVM();
      return createWatcher(vm, source, callback, opts);
    }
    function traverse(value, seen) {
      if (seen === void 0) {
        seen = new Set();
      }
      if (!isObject(value) || seen.has(value)) {
        return value;
      }
      seen.add(value);
      if (isRef(value)) {
        traverse(value.value, seen);
      } else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          traverse(value[i], seen);
        }
      } else if (isSet(value) || isMap(value)) {
        value.forEach(function(v) {
          traverse(v, seen);
        });
      } else if (isPlainObject(value)) {
        for (var key in value) {
          traverse(value[key], seen);
        }
      }
      return value;
    }
    function computed(getterOrOptions) {
      var vm = getCurrentScopeVM();
      var getter;
      var setter;
      if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      var computedSetter;
      var computedGetter;
      if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
        var watcher_1;
        computedGetter = function() {
          if (!watcher_1) {
            watcher_1 = new Watcher_1(vm, getter, noopFn, {
              lazy: true
            });
          }
          if (watcher_1.dirty) {
            watcher_1.evaluate();
          }
          if (Dep_1.target) {
            watcher_1.depend();
          }
          return watcher_1.value;
        };
        computedSetter = function(v) {
          if (setter) {
            setter(v);
          }
        };
      } else {
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
          computed: {
            $$state: {
              get: getter,
              set: setter
            }
          }
        });
        vm && vm.$on("hook:destroyed", function() {
          return computedHost_1.$destroy();
        });
        computedGetter = function() {
          return computedHost_1.$$state;
        };
        computedSetter = function(v) {
          computedHost_1.$$state = v;
        };
      }
      return createRef({
        get: computedGetter,
        set: computedSetter
      }, !setter, true);
    }
    var NOT_FOUND = {};
    function resolveInject(provideKey, vm) {
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          return source._provided[provideKey];
        }
        source = source.$parent;
      }
      return NOT_FOUND;
    }
    function provide(key, value) {
      var _a;
      var vm = (_a = getCurrentInstanceForFn()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!vm)
        return;
      if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, "_provided", {
          get: function() {
            return provideCache_1;
          },
          set: function(v) {
            return Object.assign(provideCache_1, v);
          }
        });
      }
      vm._provided[key] = value;
    }
    function inject(key, defaultValue, treatDefaultAsFactory) {
      var _a;
      if (treatDefaultAsFactory === void 0) {
        treatDefaultAsFactory = false;
      }
      var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!vm) {
        return;
      }
      if (!key) {
        return defaultValue;
      }
      var val = resolveInject(key, vm);
      if (val !== NOT_FOUND) {
        return val;
      }
      if (defaultValue === void 0 && false) {
        warn$1('Injection "' + String(key) + '" not found', vm);
      }
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
    }
    var EMPTY_OBJ = {};
    var useCssModule = function(name) {
      var _a;
      if (name === void 0) {
        name = "$style";
      }
      var instance = getCurrentInstance();
      if (!instance) {
        return EMPTY_OBJ;
      }
      var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
      if (!mod) {
        return EMPTY_OBJ;
      }
      return mod;
    };
    var useCSSModule = useCssModule;
    function createApp(rootComponent, rootProps) {
      if (rootProps === void 0) {
        rootProps = void 0;
      }
      var V = getVueConstructor();
      var mountedVM = void 0;
      return {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        directive: V.directive.bind(V),
        mount: function(el, hydrating) {
          if (!mountedVM) {
            mountedVM = new V(__assign({
              propsData: rootProps
            }, rootComponent));
            mountedVM.$mount(el, hydrating);
            return mountedVM;
          } else {
            return mountedVM;
          }
        },
        unmount: function() {
          if (mountedVM) {
            mountedVM.$destroy();
            mountedVM = void 0;
          }
        }
      };
    }
    var nextTick = function nextTick2() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
    };
    var fallbackCreateElement;
    var createElement = function createElement2() {
      var _a;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var instance = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
      if (!instance) {
        if (!fallbackCreateElement) {
          fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
      }
      return instance.$createElement.apply(instance, args);
    };
    function useSlots() {
      return getContext().slots;
    }
    function useAttrs() {
      return getContext().attrs;
    }
    function getContext() {
      var i = getCurrentInstance();
      return i.setupContext;
    }
    function set(vm, key, value) {
      var state = vm.__composition_api_state__ = vm.__composition_api_state__ || {};
      state[key] = value;
    }
    function get(vm, key) {
      return (vm.__composition_api_state__ || {})[key];
    }
    var vmStateManager = {
      set,
      get
    };
    function asVmProperty(vm, propName, propValue) {
      var props = vm.$options.props;
      if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
          proxy(vm, propName, {
            get: function() {
              return propValue.value;
            },
            set: function(val) {
              propValue.value = val;
            }
          });
        } else {
          proxy(vm, propName, {
            get: function() {
              if (isReactive(propValue)) {
                propValue.__ob__.dep.depend();
              }
              return propValue;
            },
            set: function(val) {
              propValue = val;
            }
          });
        }
      }
    }
    function updateTemplateRef(vm) {
      var rawBindings = vmStateManager.get(vm, "rawBindings") || {};
      if (!rawBindings || !Object.keys(rawBindings).length)
        return;
      var refs = vm.$refs;
      var oldRefKeys = vmStateManager.get(vm, "refs") || [];
      for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = null;
        }
      }
      var newKeys = Object.keys(refs);
      var validNewKeys = [];
      for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
          setupValue.value = refs[key];
          validNewKeys.push(key);
        }
      }
      vmStateManager.set(vm, "refs", validNewKeys);
    }
    function resolveScopedSlots(vm, slotsProxy) {
      var parentVNode = vm.$options._parentVnode;
      if (!parentVNode)
        return;
      var prevSlots = vmStateManager.get(vm, "slots") || [];
      var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
      for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
          delete slotsProxy[key];
        }
      }
      var slotNames = Object.keys(curSlots);
      for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
          slotsProxy[key] = createSlotProxy(vm, key);
        }
      }
      vmStateManager.set(vm, "slots", slotNames);
    }
    function activateCurrentInstance(instance, fn, onError) {
      var preVm = getCurrentInstance();
      setCurrentInstance(instance);
      try {
        return fn(instance);
      } catch (err) {
        if (onError) {
          onError(err);
        } else {
          throw err;
        }
      } finally {
        setCurrentInstance(preVm);
      }
    }
    function mixin(Vue) {
      Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function() {
          updateTemplateRef(this);
        },
        updated: function() {
          var _a;
          updateTemplateRef(this);
          if ((_a = this.$vnode) === null || _a === void 0 ? void 0 : _a.context) {
            updateTemplateRef(this.$vnode.context);
          }
        }
      });
      function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
          $options.render = function() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return activateCurrentInstance(toVue3ComponentInstance(vm), function() {
              return render.apply(_this, args);
            });
          };
        }
        if (!setup) {
          return;
        }
        if (!isFunction(setup)) {
          return;
        }
        var data = $options.data;
        $options.data = function wrappedData() {
          initSetup(vm, vm.$props);
          return isFunction(data) ? data.call(vm, vm) : data || {};
        };
      }
      function initSetup(vm, props) {
        if (props === void 0) {
          props = {};
        }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        var instance = toVue3ComponentInstance(vm);
        instance.setupContext = ctx;
        def(props, "__ob__", createObserver());
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(instance, function() {
          binding = setup(props, ctx);
        });
        if (!binding)
          return;
        if (isFunction(binding)) {
          var bindingFunc_1 = binding;
          vm.$options.render = function() {
            resolveScopedSlots(vm, ctx.slots);
            return activateCurrentInstance(instance, function() {
              return bindingFunc_1();
            });
          };
          return;
        } else if (isPlainObject(binding)) {
          if (isReactive(binding)) {
            binding = toRefs(binding);
          }
          vmStateManager.set(vm, "rawBindings", binding);
          var bindingObj_1 = binding;
          Object.keys(bindingObj_1).forEach(function(name) {
            var bindingValue = bindingObj_1[name];
            if (!isRef(bindingValue)) {
              if (!isReactive(bindingValue)) {
                if (isFunction(bindingValue)) {
                  var copy_1 = bindingValue;
                  bindingValue = bindingValue.bind(vm);
                  Object.keys(copy_1).forEach(function(ele) {
                    bindingValue[ele] = copy_1[ele];
                  });
                } else if (!isObject(bindingValue)) {
                  bindingValue = ref(bindingValue);
                } else if (hasReactiveArrayChild(bindingValue)) {
                  customReactive(bindingValue);
                }
              } else if (isArray(bindingValue)) {
                bindingValue = ref(bindingValue);
              }
            }
            asVmProperty(vm, name, bindingValue);
          });
          return;
        }
      }
      function customReactive(target, seen) {
        if (seen === void 0) {
          seen = new Set();
        }
        if (seen.has(target))
          return;
        if (!isPlainObject(target) || isRef(target) || isReactive(target) || isRaw(target))
          return;
        var Vue2 = getVueConstructor();
        var defineReactive = Vue2.util.defineReactive;
        Object.keys(target).forEach(function(k) {
          var val = target[k];
          defineReactive(target, k, val);
          if (val) {
            seen.add(val);
            customReactive(val, seen);
          }
          return;
        });
      }
      function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) {
          visited = new Map();
        }
        if (visited.has(target)) {
          return visited.get(target);
        }
        visited.set(target, false);
        if (isArray(target) && isReactive(target)) {
          visited.set(target, true);
          return true;
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
          return false;
        }
        return Object.keys(target).some(function(x) {
          return hasReactiveArrayChild(target[x], visited);
        });
      }
      function createSetupContext(vm) {
        var ctx = {
          slots: {}
        };
        var propsPlain = ["root", "parent", "refs", "listeners", "isServer", "ssrContext"];
        var propsReactiveProxy = ["attrs"];
        var methodReturnVoid = ["emit"];
        propsPlain.forEach(function(key) {
          var srcKey = "$" + key;
          proxy(ctx, key, {
            get: function() {
              return vm[srcKey];
            },
            set: function() {
            }
          });
        });
        var propsProxy;
        propsReactiveProxy.forEach(function(key) {
          var srcKey = "$" + key;
          proxy(ctx, key, {
            get: function() {
              var e_1, _a;
              if (propsProxy)
                return propsProxy;
              propsProxy = reactive({});
              var source = vm[srcKey];
              var _loop_1 = function(attr2) {
                proxy(propsProxy, attr2, {
                  get: function() {
                    return vm[srcKey][attr2];
                  }
                });
              };
              try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var attr = _c.value;
                  _loop_1(attr);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (_c && !_c.done && (_a = _b.return))
                    _a.call(_b);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
              return propsProxy;
            },
            set: function() {
            }
          });
        });
        methodReturnVoid.forEach(function(key) {
          var srcKey = "$" + key;
          proxy(ctx, key, {
            get: function() {
              return function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                var fn = vm[srcKey];
                fn.apply(vm, args);
              };
            }
          });
        });
        return ctx;
      }
    }
    function mergeData(from, to) {
      if (!from)
        return to;
      if (!to)
        return from;
      var key;
      var toVal;
      var fromVal;
      var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        if (key === "__ob__")
          continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          to[key] = fromVal;
        } else if (toVal !== fromVal && isPlainObject(toVal) && !isRef(toVal) && isPlainObject(fromVal) && !isRef(fromVal)) {
          mergeData(fromVal, toVal);
        }
      }
      return to;
    }
    function install(Vue) {
      if (isVueRegistered(Vue)) {
        return;
      }
      Vue.config.optionMergeStrategies.setup = function(parent, child) {
        return function mergedSetupFn(props, context) {
          return mergeData(isFunction(parent) ? parent(props, context) || {} : void 0, isFunction(child) ? child(props, context) || {} : void 0);
        };
      };
      setVueConstructor(Vue);
      mixin(Vue);
    }
    var Plugin = {
      install: function(Vue) {
        return install(Vue);
      }
    };
    function defineComponent(options) {
      return options;
    }
    function defineAsyncComponent(source) {
      if (isFunction(source)) {
        source = {
          loader: source
        };
      }
      var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout; source.suspensible; var userOnError = source.onError;
      var pendingRequest = null;
      var retries = 0;
      var retry = function() {
        retries++;
        pendingRequest = null;
        return load();
      };
      var load = function() {
        var thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch(function(err) {
          err = err instanceof Error ? err : new Error(String(err));
          if (userOnError) {
            return new Promise(function(resolve, reject) {
              var userRetry = function() {
                return resolve(retry());
              };
              var userFail = function() {
                return reject(err);
              };
              userOnError(err, userRetry, userFail, retries + 1);
            });
          } else {
            throw err;
          }
        }).then(function(comp) {
          if (thisRequest !== pendingRequest && pendingRequest) {
            return pendingRequest;
          }
          if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
            comp = comp.default;
          }
          return comp;
        }));
      };
      return function() {
        var component = load();
        return {
          component,
          delay,
          timeout,
          error: errorComponent,
          loading: loadingComponent
        };
      };
    }
    var version = "1.2.4";
    __webpack_exports__["default"] = Plugin;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "EffectScope", function() {
      return vue_composition_api["EffectScope"];
    });
    __webpack_require__.d(__webpack_exports__, "computed", function() {
      return vue_composition_api["computed"];
    });
    __webpack_require__.d(__webpack_exports__, "createApp", function() {
      return vue_composition_api["createApp"];
    });
    __webpack_require__.d(__webpack_exports__, "createRef", function() {
      return vue_composition_api["createRef"];
    });
    __webpack_require__.d(__webpack_exports__, "customRef", function() {
      return vue_composition_api["customRef"];
    });
    __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() {
      return vue_composition_api["defineAsyncComponent"];
    });
    __webpack_require__.d(__webpack_exports__, "defineComponent", function() {
      return vue_composition_api["defineComponent"];
    });
    __webpack_require__.d(__webpack_exports__, "del", function() {
      return vue_composition_api["del"];
    });
    __webpack_require__.d(__webpack_exports__, "effectScope", function() {
      return vue_composition_api["effectScope"];
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() {
      return vue_composition_api["getCurrentInstance"];
    });
    __webpack_require__.d(__webpack_exports__, "getCurrentScope", function() {
      return vue_composition_api["getCurrentScope"];
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return vue_composition_api["h"];
    });
    __webpack_require__.d(__webpack_exports__, "inject", function() {
      return vue_composition_api["inject"];
    });
    __webpack_require__.d(__webpack_exports__, "isRaw", function() {
      return vue_composition_api["isRaw"];
    });
    __webpack_require__.d(__webpack_exports__, "isReactive", function() {
      return vue_composition_api["isReactive"];
    });
    __webpack_require__.d(__webpack_exports__, "isReadonly", function() {
      return vue_composition_api["isReadonly"];
    });
    __webpack_require__.d(__webpack_exports__, "isRef", function() {
      return vue_composition_api["isRef"];
    });
    __webpack_require__.d(__webpack_exports__, "markRaw", function() {
      return vue_composition_api["markRaw"];
    });
    __webpack_require__.d(__webpack_exports__, "nextTick", function() {
      return vue_composition_api["nextTick"];
    });
    __webpack_require__.d(__webpack_exports__, "onActivated", function() {
      return vue_composition_api["onActivated"];
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() {
      return vue_composition_api["onBeforeMount"];
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() {
      return vue_composition_api["onBeforeUnmount"];
    });
    __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() {
      return vue_composition_api["onBeforeUpdate"];
    });
    __webpack_require__.d(__webpack_exports__, "onDeactivated", function() {
      return vue_composition_api["onDeactivated"];
    });
    __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() {
      return vue_composition_api["onErrorCaptured"];
    });
    __webpack_require__.d(__webpack_exports__, "onMounted", function() {
      return vue_composition_api["onMounted"];
    });
    __webpack_require__.d(__webpack_exports__, "onScopeDispose", function() {
      return vue_composition_api["onScopeDispose"];
    });
    __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() {
      return vue_composition_api["onServerPrefetch"];
    });
    __webpack_require__.d(__webpack_exports__, "onUnmounted", function() {
      return vue_composition_api["onUnmounted"];
    });
    __webpack_require__.d(__webpack_exports__, "onUpdated", function() {
      return vue_composition_api["onUpdated"];
    });
    __webpack_require__.d(__webpack_exports__, "provide", function() {
      return vue_composition_api["provide"];
    });
    __webpack_require__.d(__webpack_exports__, "proxyRefs", function() {
      return vue_composition_api["proxyRefs"];
    });
    __webpack_require__.d(__webpack_exports__, "reactive", function() {
      return vue_composition_api["reactive"];
    });
    __webpack_require__.d(__webpack_exports__, "readonly", function() {
      return vue_composition_api["readonly"];
    });
    __webpack_require__.d(__webpack_exports__, "ref", function() {
      return vue_composition_api["ref"];
    });
    __webpack_require__.d(__webpack_exports__, "set", function() {
      return vue_composition_api["set"];
    });
    __webpack_require__.d(__webpack_exports__, "shallowReactive", function() {
      return vue_composition_api["shallowReactive"];
    });
    __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() {
      return vue_composition_api["shallowReadonly"];
    });
    __webpack_require__.d(__webpack_exports__, "shallowRef", function() {
      return vue_composition_api["shallowRef"];
    });
    __webpack_require__.d(__webpack_exports__, "toRaw", function() {
      return vue_composition_api["toRaw"];
    });
    __webpack_require__.d(__webpack_exports__, "toRef", function() {
      return vue_composition_api["toRef"];
    });
    __webpack_require__.d(__webpack_exports__, "toRefs", function() {
      return vue_composition_api["toRefs"];
    });
    __webpack_require__.d(__webpack_exports__, "triggerRef", function() {
      return vue_composition_api["triggerRef"];
    });
    __webpack_require__.d(__webpack_exports__, "unref", function() {
      return vue_composition_api["unref"];
    });
    __webpack_require__.d(__webpack_exports__, "useAttrs", function() {
      return vue_composition_api["useAttrs"];
    });
    __webpack_require__.d(__webpack_exports__, "useCSSModule", function() {
      return vue_composition_api["useCSSModule"];
    });
    __webpack_require__.d(__webpack_exports__, "useCssModule", function() {
      return vue_composition_api["useCssModule"];
    });
    __webpack_require__.d(__webpack_exports__, "useSlots", function() {
      return vue_composition_api["useSlots"];
    });
    __webpack_require__.d(__webpack_exports__, "version", function() {
      return vue_composition_api["version"];
    });
    __webpack_require__.d(__webpack_exports__, "warn", function() {
      return vue_composition_api["warn"];
    });
    __webpack_require__.d(__webpack_exports__, "watch", function() {
      return vue_composition_api["watch"];
    });
    __webpack_require__.d(__webpack_exports__, "watchEffect", function() {
      return vue_composition_api["watchEffect"];
    });
    __webpack_require__.d(__webpack_exports__, "watchPostEffect", function() {
      return vue_composition_api["watchPostEffect"];
    });
    __webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() {
      return vue_composition_api["watchSyncEffect"];
    });
    __webpack_require__.d(__webpack_exports__, "isFunction", function() {
      return isFunction;
    });
    __webpack_require__.d(__webpack_exports__, "default", function() {
      return vue_runtime_esm;
    });
    __webpack_require__(13);
    __webpack_require__(14);
    __webpack_require__(15);
    __webpack_require__(16);
    __webpack_require__(17);
    __webpack_require__(18);
    __webpack_require__(19);
    __webpack_require__(20);
    __webpack_require__(21);
    __webpack_require__(22);
    __webpack_require__(23);
    __webpack_require__(24);
    __webpack_require__(25);
    __webpack_require__(26);
    __webpack_require__(27);
    __webpack_require__(28);
    /*!
     * Vue.js v2.6.14
     * (c) 2014-2021 Evan You
     * Released under the MIT License.
     */
    var emptyObject = Object.freeze({});
    function isUndef(v) {
      return v === void 0 || v === null;
    }
    function isDef(v) {
      return v !== void 0 && v !== null;
    }
    function isTrue(v) {
      return v === true;
    }
    function isFalse(v) {
      return v === false;
    }
    function isPrimitive(value) {
      return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
    }
    function isObject(obj) {
      return obj !== null && typeof obj === "object";
    }
    var _toString = Object.prototype.toString;
    function toRawType(value) {
      return _toString.call(value).slice(8, -1);
    }
    function isPlainObject(obj) {
      return _toString.call(obj) === "[object Object]";
    }
    function isRegExp(v) {
      return _toString.call(v) === "[object RegExp]";
    }
    function isValidArrayIndex(val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val);
    }
    function isPromise(val) {
      return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
    }
    function vue_runtime_esm_toString(val) {
      return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
    }
    function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
    }
    function makeMap(str, expectsLowerCase) {
      var map = Object.create(null);
      var list = str.split(",");
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? function(val) {
        return map[val.toLowerCase()];
      } : function(val) {
        return map[val];
      };
    }
    makeMap("slot,component", true);
    var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
    function remove(arr, item) {
      if (arr.length) {
        var index2 = arr.indexOf(item);
        if (index2 > -1) {
          return arr.splice(index2, 1);
        }
      }
    }
    var vue_runtime_esm_hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn(obj, key) {
      return vue_runtime_esm_hasOwnProperty.call(obj, key);
    }
    function cached(fn) {
      var cache = Object.create(null);
      return function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    }
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function(str) {
      return str.replace(camelizeRE, function(_, c) {
        return c ? c.toUpperCase() : "";
      });
    });
    var capitalize = cached(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function(str) {
      return str.replace(hyphenateRE, "-$1").toLowerCase();
    });
    function polyfillBind(fn, ctx) {
      function boundFn(a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
      }
      boundFn._length = fn.length;
      return boundFn;
    }
    function nativeBind(fn, ctx) {
      return fn.bind(ctx);
    }
    var bind = Function.prototype.bind ? nativeBind : polyfillBind;
    function toArray(list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret;
    }
    function extend(to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to;
    }
    function toObject(arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res;
    }
    function noop(a, b, c) {
    }
    var no = function(a, b, c) {
      return false;
    };
    var identity = function(_) {
      return _;
    };
    function looseEqual(a, b) {
      if (a === b) {
        return true;
      }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function(e, i) {
              return looseEqual(e, b[i]);
            });
          } else if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function(key) {
              return looseEqual(a[key], b[key]);
            });
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
      } else {
        return false;
      }
    }
    function looseIndexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) {
          return i;
        }
      }
      return -1;
    }
    function once(fn) {
      var called = false;
      return function() {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      };
    }
    var SSR_ATTR = "data-server-rendered";
    var ASSET_TYPES = ["component", "directive", "filter"];
    var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];
    var config = {
      optionMergeStrategies: Object.create(null),
      silent: false,
      productionTip: false,
      devtools: false,
      performance: false,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: no,
      isReservedAttr: no,
      isUnknownElement: no,
      getTagNamespace: noop,
      parsePlatformTagName: identity,
      mustUseProp: no,
      async: true,
      _lifecycleHooks: LIFECYCLE_HOOKS
    };
    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    function isReserved(str) {
      var c = (str + "").charCodeAt(0);
      return c === 36 || c === 95;
    }
    function def(obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }
    var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
    function parsePath(path) {
      if (bailRE.test(path)) {
        return;
      }
      var segments = path.split(".");
      return function(obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) {
            return;
          }
          obj = obj[segments[i]];
        }
        return obj;
      };
    }
    var hasProto = "__proto__" in {};
    var inBrowser = false;
    var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser ;
    var isIE9 = UA ;
    var isIOS = weexPlatform === "ios";
    var isFF = UA ;
    var nativeWatch = {}.watch;
    var _isServer;
    var isServerRendering = function() {
      if (_isServer === void 0) {
        if (!inWeex && typeof commonjsGlobal !== "undefined") {
          _isServer = commonjsGlobal["process"] && commonjsGlobal["process"].env.VUE_ENV === "server";
        } else {
          _isServer = false;
        }
      }
      return _isServer;
    };
    function isNative(Ctor) {
      return typeof Ctor === "function" && /native code/.test(Ctor.toString());
    }
    var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
    var _Set;
    if (typeof Set !== "undefined" && isNative(Set)) {
      _Set = Set;
    } else {
      _Set = /* @__PURE__ */ function() {
        function Set2() {
          this.set = Object.create(null);
        }
        Set2.prototype.has = function has2(key) {
          return this.set[key] === true;
        };
        Set2.prototype.add = function add2(key) {
          this.set[key] = true;
        };
        Set2.prototype.clear = function clear() {
          this.set = Object.create(null);
        };
        return Set2;
      }();
    }
    var warn = noop;
    var uid = 0;
    var Dep = function Dep2() {
      this.id = uid++;
      this.subs = [];
    };
    Dep.prototype.addSub = function addSub(sub) {
      this.subs.push(sub);
    };
    Dep.prototype.removeSub = function removeSub(sub) {
      remove(this.subs, sub);
    };
    Dep.prototype.depend = function depend() {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };
    Dep.prototype.notify = function notify() {
      var subs = this.subs.slice();
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };
    Dep.target = null;
    var targetStack = [];
    function pushTarget(target2) {
      targetStack.push(target2);
      Dep.target = target2;
    }
    function popTarget() {
      targetStack.pop();
      Dep.target = targetStack[targetStack.length - 1];
    }
    var VNode = function VNode2(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = void 0;
      this.context = context;
      this.fnContext = void 0;
      this.fnOptions = void 0;
      this.fnScopeId = void 0;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = void 0;
      this.parent = void 0;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = void 0;
      this.isAsyncPlaceholder = false;
    };
    var prototypeAccessors = {
      child: {
        configurable: true
      }
    };
    prototypeAccessors.child.get = function() {
      return this.componentInstance;
    };
    Object.defineProperties(VNode.prototype, prototypeAccessors);
    var createEmptyVNode = function(text) {
      if (text === void 0)
        text = "";
      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node;
    };
    function createTextVNode(val) {
      return new VNode(void 0, void 0, void 0, String(val));
    }
    function cloneVNode(vnode) {
      var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned;
    }
    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);
    var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
    methodsToPatch.forEach(function(method) {
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case "push":
          case "unshift":
            inserted = args;
            break;
          case "splice":
            inserted = args.slice(2);
            break;
        }
        if (inserted) {
          ob.observeArray(inserted);
        }
        ob.dep.notify();
        return result;
      });
    });
    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
    var shouldObserve = true;
    function toggleObserving(value) {
      shouldObserve = value;
    }
    var Observer = function Observer2(value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, "__ob__", this);
      if (Array.isArray(value)) {
        if (hasProto) {
          protoAugment(value, arrayMethods);
        } else {
          copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };
    Observer.prototype.walk = function walk(obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive$$1(obj, keys[i]);
      }
    };
    Observer.prototype.observeArray = function observeArray(items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };
    function protoAugment(target2, src) {
      target2.__proto__ = src;
    }
    function copyAugment(target2, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target2, key, src[key]);
      }
    }
    function observe(value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return;
      }
      var ob;
      if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
        ob = new Observer(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob;
    }
    function defineReactive$$1(obj, key, val, customSetter, shallow) {
      var dep = new Dep();
      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return;
      }
      var getter = property && property.get;
      var setter = property && property.set;
      if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
      }
      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value;
        },
        set: function reactiveSetter(newVal) {
          var value = getter ? getter.call(obj) : val;
          if (newVal === value || newVal !== newVal && value !== value) {
            return;
          }
          if (getter && !setter) {
            return;
          }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }
    function set(target2, key, val) {
      if (Array.isArray(target2) && isValidArrayIndex(key)) {
        target2.length = Math.max(target2.length, key);
        target2.splice(key, 1, val);
        return val;
      }
      if (key in target2 && !(key in Object.prototype)) {
        target2[key] = val;
        return val;
      }
      var ob = target2.__ob__;
      if (target2._isVue || ob && ob.vmCount) {
        return val;
      }
      if (!ob) {
        target2[key] = val;
        return val;
      }
      defineReactive$$1(ob.value, key, val);
      ob.dep.notify();
      return val;
    }
    function del(target2, key) {
      if (Array.isArray(target2) && isValidArrayIndex(key)) {
        target2.splice(key, 1);
        return;
      }
      var ob = target2.__ob__;
      if (target2._isVue || ob && ob.vmCount) {
        return;
      }
      if (!hasOwn(target2, key)) {
        return;
      }
      delete target2[key];
      if (!ob) {
        return;
      }
      ob.dep.notify();
    }
    function dependArray(value) {
      for (var e = void 0, i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }
    var strats = config.optionMergeStrategies;
    function mergeData(to, from) {
      if (!from) {
        return to;
      }
      var key, toVal, fromVal;
      var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        if (key === "__ob__") {
          continue;
        }
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
          mergeData(toVal, fromVal);
        }
      }
      return to;
    }
    function mergeDataOrFn(parentVal, childVal, vm) {
      if (!vm) {
        if (!childVal) {
          return parentVal;
        }
        if (!parentVal) {
          return childVal;
        }
        return function mergedDataFn() {
          return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
        };
      } else {
        return function mergedInstanceDataFn() {
          var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
          var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData);
          } else {
            return defaultData;
          }
        };
      }
    }
    strats.data = function(parentVal, childVal, vm) {
      if (!vm) {
        if (childVal && typeof childVal !== "function") {
          return parentVal;
        }
        return mergeDataOrFn(parentVal, childVal);
      }
      return mergeDataOrFn(parentVal, childVal, vm);
    };
    function mergeHook(parentVal, childVal) {
      var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
      return res ? dedupeHooks(res) : res;
    }
    function dedupeHooks(hooks2) {
      var res = [];
      for (var i = 0; i < hooks2.length; i++) {
        if (res.indexOf(hooks2[i]) === -1) {
          res.push(hooks2[i]);
        }
      }
      return res;
    }
    LIFECYCLE_HOOKS.forEach(function(hook) {
      strats[hook] = mergeHook;
    });
    function mergeAssets(parentVal, childVal, vm, key) {
      var res = Object.create(parentVal || null);
      if (childVal) {
        return extend(res, childVal);
      } else {
        return res;
      }
    }
    ASSET_TYPES.forEach(function(type) {
      strats[type + "s"] = mergeAssets;
    });
    strats.watch = function(parentVal, childVal, vm, key) {
      if (parentVal === nativeWatch) {
        parentVal = void 0;
      }
      if (childVal === nativeWatch) {
        childVal = void 0;
      }
      if (!childVal) {
        return Object.create(parentVal || null);
      }
      if (!parentVal) {
        return childVal;
      }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
      }
      return ret;
    };
    strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
      if (childVal && false) {
        assertObjectType(key, childVal);
      }
      if (!parentVal) {
        return childVal;
      }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) {
        extend(ret, childVal);
      }
      return ret;
    };
    strats.provide = mergeDataOrFn;
    var defaultStrat = function(parentVal, childVal) {
      return childVal === void 0 ? parentVal : childVal;
    };
    function normalizeProps(options, vm) {
      var props2 = options.props;
      if (!props2) {
        return;
      }
      var res = {};
      var i, val, name;
      if (Array.isArray(props2)) {
        i = props2.length;
        while (i--) {
          val = props2[i];
          if (typeof val === "string") {
            name = camelize(val);
            res[name] = {
              type: null
            };
          }
        }
      } else if (isPlainObject(props2)) {
        for (var key in props2) {
          val = props2[key];
          name = camelize(key);
          res[name] = isPlainObject(val) ? val : {
            type: val
          };
        }
      } else ;
      options.props = res;
    }
    function normalizeInject(options, vm) {
      var inject = options.inject;
      if (!inject) {
        return;
      }
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = {
            from: inject[i]
          };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val) ? extend({
            from: key
          }, val) : {
            from: val
          };
        }
      } else ;
    }
    function normalizeDirectives(options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def$$1 = dirs[key];
          if (typeof def$$1 === "function") {
            dirs[key] = {
              bind: def$$1,
              update: def$$1
            };
          }
        }
      }
    }
    function assertObjectType(name, value, vm) {
      if (!isPlainObject(value)) {
        warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".");
      }
    }
    function mergeOptions(parent, child, vm) {
      if (typeof child === "function") {
        child = child.options;
      }
      normalizeProps(child);
      normalizeInject(child);
      normalizeDirectives(child);
      if (!child._base) {
        if (child.extends) {
          parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
          }
        }
      }
      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField(key2) {
        var strat = strats[key2] || defaultStrat;
        options[key2] = strat(parent[key2], child[key2], vm, key2);
      }
      return options;
    }
    function resolveAsset(options, type, id, warnMissing) {
      if (typeof id !== "string") {
        return;
      }
      var assets = options[type];
      if (hasOwn(assets, id)) {
        return assets[id];
      }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) {
        return assets[camelizedId];
      }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) {
        return assets[PascalCaseId];
      }
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      return res;
    }
    function validateProp(key, propOptions, propsData, vm) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, "default")) {
          value = false;
        } else if (value === "" || value === hyphenate(key)) {
          var stringIndex = getTypeIndex(String, prop.type);
          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      }
      if (value === void 0) {
        value = getPropDefaultValue(vm, prop, key);
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }
      return value;
    }
    function getPropDefaultValue(vm, prop, key) {
      if (!hasOwn(prop, "default")) {
        return void 0;
      }
      var def2 = prop.default;
      if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
        return vm._props[key];
      }
      return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
    }
    var functionTypeCheckRE = /^\s*function (\w+)/;
    function getType(fn) {
      var match = fn && fn.toString().match(functionTypeCheckRE);
      return match ? match[1] : "";
    }
    function isSameType(a, b) {
      return getType(a) === getType(b);
    }
    function getTypeIndex(type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i;
        }
      }
      return -1;
    }
    function handleError(err, vm, info) {
      pushTarget();
      try {
        if (vm) {
          var cur = vm;
          while (cur = cur.$parent) {
            var hooks2 = cur.$options.errorCaptured;
            if (hooks2) {
              for (var i = 0; i < hooks2.length; i++) {
                try {
                  var capture = hooks2[i].call(cur, err, vm, info) === false;
                  if (capture) {
                    return;
                  }
                } catch (e) {
                  globalHandleError(e, cur, "errorCaptured hook");
                }
              }
            }
          }
        }
        globalHandleError(err, vm, info);
      } finally {
        popTarget();
      }
    }
    function invokeWithErrorHandling(handler, context, args, vm, info) {
      var res;
      try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res.catch(function(e) {
            return handleError(e, vm, info + " (Promise/async)");
          });
          res._handled = true;
        }
      } catch (e) {
        handleError(e, vm, info);
      }
      return res;
    }
    function globalHandleError(err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info);
        } catch (e) {
          if (e !== err) {
            logError(e);
          }
        }
      }
      logError(err);
    }
    function logError(err, vm, info) {
      if ((inWeex) && typeof console !== "undefined") {
        console.error(err);
      } else {
        throw err;
      }
    }
    var isUsingMicroTask = false;
    var callbacks = [];
    var pending = false;
    function flushCallbacks() {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
    var timerFunc;
    if (typeof Promise !== "undefined" && isNative(Promise)) {
      var p = Promise.resolve();
      timerFunc = function() {
        p.then(flushCallbacks);
        if (isIOS) {
          setTimeout(noop);
        }
      };
      isUsingMicroTask = true;
    } else if (typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
      var counter = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function() {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
      isUsingMicroTask = true;
    } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
      timerFunc = function() {
        setImmediate(flushCallbacks);
      };
    } else {
      timerFunc = function() {
        setTimeout(flushCallbacks, 0);
      };
    }
    function nextTick(cb, ctx) {
      var _resolve;
      callbacks.push(function() {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, "nextTick");
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      if (!cb && typeof Promise !== "undefined") {
        return new Promise(function(resolve) {
          _resolve = resolve;
        });
      }
    }
    var seenObjects = new _Set();
    function traverse(val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }
    function _traverse(val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
        return;
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return;
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) {
          _traverse(val[i], seen);
        }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) {
          _traverse(val[keys[i]], seen);
        }
      }
    }
    var normalizeEvent = cached(function(name) {
      var passive = name.charAt(0) === "&";
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === "~";
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === "!";
      name = capture ? name.slice(1) : name;
      return {
        name,
        once: once$$1,
        capture,
        passive
      };
    });
    function createFnInvoker(fns, vm) {
      function invoker() {
        var arguments$1 = arguments;
        var fns2 = invoker.fns;
        if (Array.isArray(fns2)) {
          var cloned = fns2.slice();
          for (var i = 0; i < cloned.length; i++) {
            invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
          }
        } else {
          return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
        }
      }
      invoker.fns = fns;
      return invoker;
    }
    function updateListeners(on, oldOn, add2, remove$$1, createOnceHandler2, vm) {
      var name, cur, old, event;
      for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) ; else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur, vm);
          }
          if (isTrue(event.once)) {
            cur = on[name] = createOnceHandler2(event.name, cur, event.capture);
          }
          add2(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }
    function mergeVNodeHook(def2, hookKey, hook) {
      if (def2 instanceof VNode) {
        def2 = def2.data.hook || (def2.data.hook = {});
      }
      var invoker;
      var oldHook = def2[hookKey];
      function wrappedHook() {
        hook.apply(this, arguments);
        remove(invoker.fns, wrappedHook);
      }
      if (isUndef(oldHook)) {
        invoker = createFnInvoker([wrappedHook]);
      } else {
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }
      invoker.merged = true;
      def2[hookKey] = invoker;
    }
    function extractPropsFromVNodeData(data, Ctor, tag) {
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return;
      }
      var res = {};
      var attrs2 = data.attrs;
      var props2 = data.props;
      if (isDef(attrs2) || isDef(props2)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
        }
      }
      return res;
    }
    function checkProp(res, hash, key, altKey, preserve) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true;
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true;
        }
      }
      return false;
    }
    function simpleNormalizeChildren(children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children);
        }
      }
      return children;
    }
    function normalizeChildren(children) {
      return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
    }
    function isTextNode(node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment);
    }
    function normalizeArrayChildren(children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === "boolean") {
          continue;
        }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + c[0].text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== "") {
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res;
    }
    function initProvide(vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
      }
    }
    function initInjections(vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function(key) {
          {
            defineReactive$$1(vm, key, result[key]);
          }
        });
        toggleObserving(true);
      }
    }
    function resolveInject(inject, vm) {
      if (inject) {
        var result = Object.create(null);
        var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key === "__ob__") {
            continue;
          }
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break;
            }
            source = source.$parent;
          }
          if (!source) {
            if ("default" in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
            }
          }
        }
        return result;
      }
    }
    function resolveSlots(children, context) {
      if (!children || !children.length) {
        return {};
      }
      var slots = {};
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
          var name = data.slot;
          var slot = slots[name] || (slots[name] = []);
          if (child.tag === "template") {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots;
    }
    function isWhitespace(node) {
      return node.isComment && !node.asyncFactory || node.text === " ";
    }
    function isAsyncPlaceholder(node) {
      return node.isComment && node.asyncFactory;
    }
    function normalizeScopedSlots(slots, normalSlots, prevSlots) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = slots ? !!slots.$stable : !hasNormalSlots;
      var key = slots && slots.$key;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        return slots._normalized;
      } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
        return prevSlots;
      } else {
        res = {};
        for (var key$1 in slots) {
          if (slots[key$1] && key$1[0] !== "$") {
            res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
          }
        }
      }
      for (var key$2 in normalSlots) {
        if (!(key$2 in res)) {
          res[key$2] = proxyNormalSlot(normalSlots, key$2);
        }
      }
      if (slots && Object.isExtensible(slots)) {
        slots._normalized = res;
      }
      def(res, "$stable", isStable);
      def(res, "$key", key);
      def(res, "$hasNormal", hasNormalSlots);
      return res;
    }
    function normalizeScopedSlot(normalSlots, key, fn) {
      var normalized = function() {
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
        var vnode = res && res[0];
        return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
      };
      if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
          get: normalized,
          enumerable: true,
          configurable: true
        });
      }
      return normalized;
    }
    function proxyNormalSlot(slots, key) {
      return function() {
        return slots[key];
      };
    }
    function renderList(val, render) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === "string") {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === "number") {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
          ret = [];
          var iterator = val[Symbol.iterator]();
          var result = iterator.next();
          while (!result.done) {
            ret.push(render(result.value, ret.length));
            result = iterator.next();
          }
        } else {
          keys = Object.keys(val);
          ret = new Array(keys.length);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i);
          }
        }
      }
      if (!isDef(ret)) {
        ret = [];
      }
      ret._isVList = true;
      return ret;
    }
    function renderSlot(name, fallbackRender, props2, bindObject) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) {
        props2 = props2 || {};
        if (bindObject) {
          props2 = extend(extend({}, bindObject), props2);
        }
        nodes = scopedSlotFn(props2) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
      } else {
        nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
      }
      var target2 = props2 && props2.slot;
      if (target2) {
        return this.$createElement("template", {
          slot: target2
        }, nodes);
      } else {
        return nodes;
      }
    }
    function resolveFilter(id) {
      return resolveAsset(this.$options, "filters", id) || identity;
    }
    function isKeyNotMatch(expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1;
      } else {
        return expect !== actual;
      }
    }
    function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName);
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode);
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key;
      }
      return eventKeyCode === void 0;
    }
    function bindObjectProps(data, tag, value, asProp, isSync) {
      if (value) {
        if (!isObject(value)) ; else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function(key2) {
            if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
            }
            var camelizedKey = camelize(key2);
            var hyphenatedKey = hyphenate(key2);
            if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
              hash[key2] = value[key2];
              if (isSync) {
                var on = data.on || (data.on = {});
                on["update:" + key2] = function($event) {
                  value[key2] = $event;
                };
              }
            }
          };
          for (var key in value)
            loop(key);
        }
      }
      return data;
    }
    function renderStatic(index2, isInFor) {
      var cached2 = this._staticTrees || (this._staticTrees = []);
      var tree = cached2[index2];
      if (tree && !isInFor) {
        return tree;
      }
      tree = cached2[index2] = this.$options.staticRenderFns[index2].call(this._renderProxy, null, this);
      markStatic(tree, "__static__" + index2, false);
      return tree;
    }
    function markOnce(tree, index2, key) {
      markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
      return tree;
    }
    function markStatic(tree, key, isOnce) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== "string") {
            markStaticNode(tree[i], key + "_" + i, isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }
    function markStaticNode(node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }
    function bindObjectListeners(data, value) {
      if (value) {
        if (!isPlainObject(value)) ; else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data;
    }
    function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
      res = res || {
        $stable: !hasDynamicKeys
      };
      for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (Array.isArray(slot)) {
          resolveScopedSlots(slot, res, hasDynamicKeys);
        } else if (slot) {
          if (slot.proxy) {
            slot.fn.proxy = true;
          }
          res[slot.key] = slot.fn;
        }
      }
      if (contentHashKey) {
        res.$key = contentHashKey;
      }
      return res;
    }
    function bindDynamicKeys(baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === "string" && key) {
          baseObj[values[i]] = values[i + 1];
        }
      }
      return baseObj;
    }
    function prependModifier(value, symbol) {
      return typeof value === "string" ? symbol + value : value;
    }
    function installRenderHelpers(target2) {
      target2._o = markOnce;
      target2._n = toNumber;
      target2._s = vue_runtime_esm_toString;
      target2._l = renderList;
      target2._t = renderSlot;
      target2._q = looseEqual;
      target2._i = looseIndexOf;
      target2._m = renderStatic;
      target2._f = resolveFilter;
      target2._k = checkKeyCodes;
      target2._b = bindObjectProps;
      target2._v = createTextVNode;
      target2._e = createEmptyVNode;
      target2._u = resolveScopedSlots;
      target2._g = bindObjectListeners;
      target2._d = bindDynamicKeys;
      target2._p = prependModifier;
    }
    function FunctionalRenderContext(data, props2, children, parent, Ctor) {
      var this$1$1 = this;
      var options = Ctor.options;
      var contextVm;
      if (hasOwn(parent, "_uid")) {
        contextVm = Object.create(parent);
        contextVm._original = parent;
      } else {
        contextVm = parent;
        parent = parent._original;
      }
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;
      this.data = data;
      this.props = props2;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function() {
        if (!this$1$1.$slots) {
          normalizeScopedSlots(data.scopedSlots, this$1$1.$slots = resolveSlots(children, parent));
        }
        return this$1$1.$slots;
      };
      Object.defineProperty(this, "scopedSlots", {
        enumerable: true,
        get: function get() {
          return normalizeScopedSlots(data.scopedSlots, this.slots());
        }
      });
      if (isCompiled) {
        this.$options = options;
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
      }
      if (options._scopeId) {
        this._c = function(a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode;
        };
      } else {
        this._c = function(a, b, c, d) {
          return createElement(contextVm, a, b, c, d, needNormalization);
        };
      }
    }
    installRenderHelpers(FunctionalRenderContext.prototype);
    function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
      var options = Ctor.options;
      var props2 = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props2[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) {
          mergeProps(props2, data.attrs);
        }
        if (isDef(data.props)) {
          mergeProps(props2, data.props);
        }
      }
      var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
      var vnode = options.render.call(null, renderContext._c, renderContext);
      if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
        }
        return res;
      }
    }
    function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;
      if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
      }
      return clone;
    }
    function mergeProps(to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }
    var componentVNodeHooks = {
      init: function init(vnode, hydrating) {
        if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
          var mountedNode = vnode;
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
          child.$mount(hydrating ? vnode.elm : void 0, hydrating);
        }
      },
      prepatch: function prepatch(oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
      },
      insert: function insert(vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, "mounted");
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true);
          }
        }
      },
      destroy: function destroy(vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true);
          }
        }
      }
    };
    var hooksToMerge = Object.keys(componentVNodeHooks);
    function createComponent(Ctor, data, context, children, tag) {
      if (isUndef(Ctor)) {
        return;
      }
      var baseCtor = context.$options._base;
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }
      if (typeof Ctor !== "function") {
        return;
      }
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === void 0) {
          return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
        }
      }
      data = data || {};
      resolveConstructorOptions(Ctor);
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }
      var propsData = extractPropsFromVNodeData(data, Ctor);
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children);
      }
      var listeners = data.on;
      data.on = data.nativeOn;
      if (isTrue(Ctor.options.abstract)) {
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }
      installComponentHooks(data);
      var name = Ctor.options.name || tag;
      var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
        Ctor,
        propsData,
        listeners,
        tag,
        children
      }, asyncFactory);
      return vnode;
    }
    function createComponentInstanceForVnode(vnode, parent) {
      var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent
      };
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options);
    }
    function installComponentHooks(data) {
      var hooks2 = data.hook || (data.hook = {});
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks2[key];
        var toMerge = componentVNodeHooks[key];
        if (existing !== toMerge && !(existing && existing._merged)) {
          hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
        }
      }
    }
    function mergeHook$1(f1, f2) {
      var merged = function(a, b) {
        f1(a, b);
        f2(a, b);
      };
      merged._merged = true;
      return merged;
    }
    function transformModel(options, data) {
      var prop = options.model && options.model.prop || "value";
      var event = options.model && options.model.event || "input";
      (data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;
      if (isDef(existing)) {
        if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
          on[event] = [callback].concat(existing);
        }
      } else {
        on[event] = callback;
      }
    }
    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;
    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = void 0;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType);
    }
    function _createElement(context, tag, data, children, normalizationType) {
      if (isDef(data) && isDef(data.__ob__)) {
        return createEmptyVNode();
      }
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        return createEmptyVNode();
      }
      if (Array.isArray(children) && typeof children[0] === "function") {
        data = data || {};
        data.scopedSlots = {
          default: children[0]
        };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === "string") {
        var Ctor;
        ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
          vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          vnode = new VNode(tag, data, children, void 0, void 0, context);
        }
      } else {
        vnode = createComponent(tag, data, context, children);
      }
      if (Array.isArray(vnode)) {
        return vnode;
      } else if (isDef(vnode)) {
        if (isDef(ns)) {
          applyNS(vnode, ns);
        }
        if (isDef(data)) {
          registerDeepBindings(data);
        }
        return vnode;
      } else {
        return createEmptyVNode();
      }
    }
    function applyNS(vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === "foreignObject") {
        ns = void 0;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
            applyNS(child, ns, force);
          }
        }
      }
    }
    function registerDeepBindings(data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }
      if (isObject(data.class)) {
        traverse(data.class);
      }
    }
    function initRender(vm) {
      vm._vnode = null;
      vm._staticTrees = null;
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode;
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      vm._c = function(a, b, c, d) {
        return createElement(vm, a, b, c, d, false);
      };
      vm.$createElement = function(a, b, c, d) {
        return createElement(vm, a, b, c, d, true);
      };
      var parentData = parentVnode && parentVnode.data;
      {
        defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, true);
        defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, null, true);
      }
    }
    var currentRenderingInstance = null;
    function renderMixin(Vue2) {
      installRenderHelpers(Vue2.prototype);
      Vue2.prototype.$nextTick = function(fn) {
        return nextTick(fn, this);
      };
      Vue2.prototype._render = function() {
        var vm = this;
        var ref2 = vm.$options;
        var render = ref2.render;
        var _parentVnode = ref2._parentVnode;
        if (_parentVnode) {
          vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
        }
        vm.$vnode = _parentVnode;
        var vnode;
        try {
          currentRenderingInstance = vm;
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          {
            vnode = vm._vnode;
          }
        } finally {
          currentRenderingInstance = null;
        }
        if (Array.isArray(vnode) && vnode.length === 1) {
          vnode = vnode[0];
        }
        if (!(vnode instanceof VNode)) {
          vnode = createEmptyVNode();
        }
        vnode.parent = _parentVnode;
        return vnode;
      };
    }
    function ensureCtor(comp, base) {
      if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
        comp = comp.default;
      }
      return isObject(comp) ? base.extend(comp) : comp;
    }
    function createAsyncPlaceholder(factory, data, context, children, tag) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = {
        data,
        context,
        children,
        tag
      };
      return node;
    }
    function resolveAsyncComponent(factory, baseCtor) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp;
      }
      if (isDef(factory.resolved)) {
        return factory.resolved;
      }
      var owner = currentRenderingInstance;
      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        factory.owners.push(owner);
      }
      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp;
      }
      if (owner && !isDef(factory.owners)) {
        var owners = factory.owners = [owner];
        var sync = true;
        var timerLoading = null;
        var timerTimeout = null;
        owner.$on("hook:destroyed", function() {
          return remove(owners, owner);
        });
        var forceRender = function(renderCompleted) {
          for (var i = 0, l = owners.length; i < l; i++) {
            owners[i].$forceUpdate();
          }
          if (renderCompleted) {
            owners.length = 0;
            if (timerLoading !== null) {
              clearTimeout(timerLoading);
              timerLoading = null;
            }
            if (timerTimeout !== null) {
              clearTimeout(timerTimeout);
              timerTimeout = null;
            }
          }
        };
        var resolve = once(function(res2) {
          factory.resolved = ensureCtor(res2, baseCtor);
          if (!sync) {
            forceRender(true);
          } else {
            owners.length = 0;
          }
        });
        var reject = once(function(reason) {
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender(true);
          }
        });
        var res = factory(resolve, reject);
        if (isObject(res)) {
          if (isPromise(res)) {
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isPromise(res.component)) {
            res.component.then(resolve, reject);
            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }
            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                timerLoading = setTimeout(function() {
                  timerLoading = null;
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender(false);
                  }
                }, res.delay || 200);
              }
            }
            if (isDef(res.timeout)) {
              timerTimeout = setTimeout(function() {
                timerTimeout = null;
                if (isUndef(factory.resolved)) {
                  reject(null);
                }
              }, res.timeout);
            }
          }
        }
        sync = false;
        return factory.loading ? factory.loadingComp : factory.resolved;
      }
    }
    function getFirstComponentChild(children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c;
          }
        }
      }
    }
    function initEvents(vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }
    var target;
    function add(event, fn) {
      target.$on(event, fn);
    }
    function remove$1(event, fn) {
      target.$off(event, fn);
    }
    function createOnceHandler(event, fn) {
      var _target = target;
      return function onceHandler() {
        var res = fn.apply(null, arguments);
        if (res !== null) {
          _target.$off(event, onceHandler);
        }
      };
    }
    function updateComponentListeners(vm, listeners, oldListeners) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
      target = void 0;
    }
    function eventsMixin(Vue2) {
      var hookRE = /^hook:/;
      Vue2.prototype.$on = function(event, fn) {
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm;
      };
      Vue2.prototype.$once = function(event, fn) {
        var vm = this;
        function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm;
      };
      Vue2.prototype.$off = function(event, fn) {
        var vm = this;
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm;
        }
        if (Array.isArray(event)) {
          for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
            vm.$off(event[i$1], fn);
          }
          return vm;
        }
        var cbs = vm._events[event];
        if (!cbs) {
          return vm;
        }
        if (!fn) {
          vm._events[event] = null;
          return vm;
        }
        var cb;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break;
          }
        }
        return vm;
      };
      Vue2.prototype.$emit = function(event) {
        var vm = this;
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = 'event handler for "' + event + '"';
          for (var i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
        }
        return vm;
      };
    }
    var activeInstance = null;
    function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function() {
        activeInstance = prevActiveInstance;
      };
    }
    function initLifecycle(vm) {
      var options = vm.$options;
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }
      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;
      vm.$children = [];
      vm.$refs = {};
      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }
    function lifecycleMixin(Vue2) {
      Vue2.prototype._update = function(vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        if (!prevVnode) {
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
        } else {
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
      };
      Vue2.prototype.$forceUpdate = function() {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };
      Vue2.prototype.$destroy = function() {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return;
        }
        callHook(vm, "beforeDestroy");
        vm._isBeingDestroyed = true;
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        vm._isDestroyed = true;
        vm.__patch__(vm._vnode, null);
        callHook(vm, "destroyed");
        vm.$off();
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }
    function mountComponent(vm, el, hydrating) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
      }
      callHook(vm, "beforeMount");
      var updateComponent;
      {
        updateComponent = function() {
          vm._update(vm._render(), hydrating);
        };
      }
      new Watcher(vm, updateComponent, noop, {
        before: function before() {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, "beforeUpdate");
          }
        }
      }, true);
      hydrating = false;
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, "mounted");
      }
      return vm;
    }
    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
      var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode;
      if (vm._vnode) {
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;
      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject;
      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props2 = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props;
          props2[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        vm.$options.propsData = propsData;
      }
      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
      if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }
    }
    function isInInactiveTree(vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) {
          return true;
        }
      }
      return false;
    }
    function activateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return;
        }
      } else if (vm._directInactive) {
        return;
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, "activated");
      }
    }
    function deactivateChildComponent(vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return;
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, "deactivated");
      }
    }
    function callHook(vm, hook) {
      pushTarget();
      var handlers = vm.$options[hook];
      var info = hook + " hook";
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit("hook:" + hook);
      }
      popTarget();
    }
    var queue = [];
    var activatedChildren = [];
    var has = {};
    var waiting = false;
    var flushing = false;
    var index = 0;
    function resetSchedulerState() {
      index = queue.length = activatedChildren.length = 0;
      has = {};
      waiting = flushing = false;
    }
    var currentFlushTimestamp = 0;
    var getNow = Date.now;
    function flushSchedulerQueue() {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id;
      queue.sort(function(a, b) {
        return a.id - b.id;
      });
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
          watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
      }
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();
      resetSchedulerState();
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);
    }
    function callUpdatedHooks(queue2) {
      var i = queue2.length;
      while (i--) {
        var watcher = queue2[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, "updated");
        }
      }
    }
    function queueActivatedComponent(vm) {
      vm._inactive = false;
      activatedChildren.push(vm);
    }
    function callActivatedHooks(queue2) {
      for (var i = 0; i < queue2.length; i++) {
        queue2[i]._inactive = true;
        activateChildComponent(queue2[i], true);
      }
    }
    function queueWatcher(watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          var i = queue.length - 1;
          while (i > index && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(i + 1, 0, watcher);
        }
        if (!waiting) {
          waiting = true;
          nextTick(flushSchedulerQueue);
        }
      }
    }
    var uid$2 = 0;
    var Watcher = function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$2;
      this.active = true;
      this.dirty = this.lazy;
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression = "";
      if (typeof expOrFn === "function") {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = noop;
        }
      }
      this.value = this.lazy ? void 0 : this.get();
    };
    Watcher.prototype.get = function get() {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, 'getter for watcher "' + this.expression + '"');
        } else {
          throw e;
        }
      } finally {
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value;
    };
    Watcher.prototype.addDep = function addDep(dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };
    Watcher.prototype.cleanupDeps = function cleanupDeps() {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };
    Watcher.prototype.update = function update() {
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };
    Watcher.prototype.run = function run() {
      if (this.active) {
        var value = this.get();
        if (value !== this.value || isObject(value) || this.deep) {
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            var info = 'callback for watcher "' + this.expression + '"';
            invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };
    Watcher.prototype.evaluate = function evaluate() {
      this.value = this.get();
      this.dirty = false;
    };
    Watcher.prototype.depend = function depend() {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    };
    Watcher.prototype.teardown = function teardown() {
      if (this.active) {
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    };
    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };
    function proxy(target2, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key];
      };
      sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target2, key, sharedPropertyDefinition);
    }
    function initState(vm) {
      vm._watchers = [];
      var opts2 = vm.$options;
      if (opts2.props) {
        initProps(vm, opts2.props);
      }
      if (opts2.methods) {
        initMethods(vm, opts2.methods);
      }
      if (opts2.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true);
      }
      if (opts2.computed) {
        initComputed(vm, opts2.computed);
      }
      if (opts2.watch && opts2.watch !== nativeWatch) {
        initWatch(vm, opts2.watch);
      }
    }
    function initProps(vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props2 = vm._props = {};
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      if (!isRoot) {
        toggleObserving(false);
      }
      var loop = function(key2) {
        keys.push(key2);
        var value = validateProp(key2, propsOptions, propsData, vm);
        {
          defineReactive$$1(props2, key2, value);
        }
        if (!(key2 in vm)) {
          proxy(vm, "_props", key2);
        }
      };
      for (var key in propsOptions)
        loop(key);
      toggleObserving(true);
    }
    function initData(vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
      if (!isPlainObject(data)) {
        data = {};
      }
      var keys = Object.keys(data);
      var props2 = vm.$options.props;
      vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        if (props2 && hasOwn(props2, key)) ; else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      }
      observe(data, true);
    }
    function getData(data, vm) {
      pushTarget();
      try {
        return data.call(vm, vm);
      } catch (e) {
        handleError(e, vm, "data()");
        return {};
      } finally {
        popTarget();
      }
    }
    var computedWatcherOptions = {
      lazy: true
    };
    function initComputed(vm, computed) {
      var watchers = vm._computedWatchers = Object.create(null);
      var isSSR = isServerRendering();
      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === "function" ? userDef : userDef.get;
        if (!isSSR) {
          watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
        }
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        }
      }
    }
    function defineComputed(target2, key, userDef) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === "function") {
        sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
      }
      Object.defineProperty(target2, key, sharedPropertyDefinition);
    }
    function createComputedGetter(key) {
      return function computedGetter() {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value;
        }
      };
    }
    function createGetterInvoker(fn) {
      return function computedGetter() {
        return fn.call(this, this);
      };
    }
    function initMethods(vm, methods) {
      vm.$options.props;
      for (var key in methods) {
        vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
      }
    }
    function initWatch(vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }
    function createWatcher(vm, expOrFn, handler, options) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === "string") {
        handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options);
    }
    function stateMixin(Vue2) {
      var dataDef = {};
      dataDef.get = function() {
        return this._data;
      };
      var propsDef = {};
      propsDef.get = function() {
        return this._props;
      };
      Object.defineProperty(Vue2.prototype, "$data", dataDef);
      Object.defineProperty(Vue2.prototype, "$props", propsDef);
      Vue2.prototype.$set = set;
      Vue2.prototype.$delete = del;
      Vue2.prototype.$watch = function(expOrFn, cb, options) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options);
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          var info = 'callback for immediate watcher "' + watcher.expression + '"';
          pushTarget();
          invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
          popTarget();
        }
        return function unwatchFn() {
          watcher.teardown();
        };
      };
    }
    var uid$3 = 0;
    function initMixin(Vue2) {
      Vue2.prototype._init = function(options) {
        var vm = this;
        vm._uid = uid$3++;
        vm._isVue = true;
        if (options && options._isComponent) {
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
        }
        {
          vm._renderProxy = vm;
        }
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, "beforeCreate");
        initInjections(vm);
        initState(vm);
        initProvide(vm);
        callHook(vm, "created");
        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }
    function initInternalComponent(vm, options) {
      var opts2 = vm.$options = Object.create(vm.constructor.options);
      var parentVnode = options._parentVnode;
      opts2.parent = options.parent;
      opts2._parentVnode = parentVnode;
      var vnodeComponentOptions = parentVnode.componentOptions;
      opts2.propsData = vnodeComponentOptions.propsData;
      opts2._parentListeners = vnodeComponentOptions.listeners;
      opts2._renderChildren = vnodeComponentOptions.children;
      opts2._componentTag = vnodeComponentOptions.tag;
      if (options.render) {
        opts2.render = options.render;
        opts2.staticRenderFns = options.staticRenderFns;
      }
    }
    function resolveConstructorOptions(Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          Ctor.superOptions = superOptions;
          var modifiedOptions = resolveModifiedOptions(Ctor);
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options;
    }
    function resolveModifiedOptions(Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) {
            modified = {};
          }
          modified[key] = latest[key];
        }
      }
      return modified;
    }
    function Vue(options) {
      this._init(options);
    }
    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);
    function initUse(Vue2) {
      Vue2.use = function(plugin) {
        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
        if (installedPlugins.indexOf(plugin) > -1) {
          return this;
        }
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === "function") {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === "function") {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this;
      };
    }
    function initMixin$1(Vue2) {
      Vue2.mixin = function(mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this;
      };
    }
    function initExtend(Vue2) {
      Vue2.cid = 0;
      var cid = 1;
      Vue2.extend = function(extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId];
        }
        var name = extendOptions.name || Super.options.name;
        var Sub = function VueComponent(options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(Super.options, extendOptions);
        Sub["super"] = Super;
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;
        ASSET_TYPES.forEach(function(type) {
          Sub[type] = Super[type];
        });
        if (name) {
          Sub.options.components[name] = Sub;
        }
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);
        cachedCtors[SuperId] = Sub;
        return Sub;
      };
    }
    function initProps$1(Comp) {
      var props2 = Comp.options.props;
      for (var key in props2) {
        proxy(Comp.prototype, "_props", key);
      }
    }
    function initComputed$1(Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }
    function initAssetRegisters(Vue2) {
      ASSET_TYPES.forEach(function(type) {
        Vue2[type] = function(id, definition) {
          if (!definition) {
            return this.options[type + "s"][id];
          } else {
            if (type === "component" && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === "directive" && typeof definition === "function") {
              definition = {
                bind: definition,
                update: definition
              };
            }
            this.options[type + "s"][id] = definition;
            return definition;
          }
        };
      });
    }
    function getComponentName(opts2) {
      return opts2 && (opts2.Ctor.options.name || opts2.tag);
    }
    function matches(pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1;
      } else if (typeof pattern === "string") {
        return pattern.split(",").indexOf(name) > -1;
      } else if (isRegExp(pattern)) {
        return pattern.test(name);
      }
      return false;
    }
    function pruneCache(keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var entry = cache[key];
        if (entry) {
          var name = entry.name;
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }
    function pruneCacheEntry(cache, key, keys, current) {
      var entry = cache[key];
      if (entry && (!current || entry.tag !== current.tag)) {
        entry.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }
    var patternTypes = [String, RegExp, Array];
    var KeepAlive = {
      name: "keep-alive",
      abstract: true,
      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },
      methods: {
        cacheVNode: function cacheVNode() {
          var ref2 = this;
          var cache = ref2.cache;
          var keys = ref2.keys;
          var vnodeToCache = ref2.vnodeToCache;
          var keyToCache = ref2.keyToCache;
          if (vnodeToCache) {
            var tag = vnodeToCache.tag;
            var componentInstance = vnodeToCache.componentInstance;
            var componentOptions = vnodeToCache.componentOptions;
            cache[keyToCache] = {
              name: getComponentName(componentOptions),
              tag,
              componentInstance
            };
            keys.push(keyToCache);
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
            this.vnodeToCache = null;
          }
        }
      },
      created: function created() {
        this.cache = Object.create(null);
        this.keys = [];
      },
      destroyed: function destroyed() {
        for (var key in this.cache) {
          pruneCacheEntry(this.cache, key, this.keys);
        }
      },
      mounted: function mounted() {
        var this$1$1 = this;
        this.cacheVNode();
        this.$watch("include", function(val) {
          pruneCache(this$1$1, function(name) {
            return matches(val, name);
          });
        });
        this.$watch("exclude", function(val) {
          pruneCache(this$1$1, function(name) {
            return !matches(val, name);
          });
        });
      },
      updated: function updated() {
        this.cacheVNode();
      },
      render: function render() {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          var name = getComponentName(componentOptions);
          var ref2 = this;
          var include = ref2.include;
          var exclude = ref2.exclude;
          if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
            return vnode;
          }
          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            remove(keys, key);
            keys.push(key);
          } else {
            this.vnodeToCache = vnode;
            this.keyToCache = key;
          }
          vnode.data.keepAlive = true;
        }
        return vnode || slot && slot[0];
      }
    };
    var builtInComponents = {
      KeepAlive
    };
    function initGlobalAPI(Vue2) {
      var configDef = {};
      configDef.get = function() {
        return config;
      };
      Object.defineProperty(Vue2, "config", configDef);
      Vue2.util = {
        warn,
        extend,
        mergeOptions,
        defineReactive: defineReactive$$1
      };
      Vue2.set = set;
      Vue2.delete = del;
      Vue2.nextTick = nextTick;
      Vue2.observable = function(obj) {
        observe(obj);
        return obj;
      };
      Vue2.options = Object.create(null);
      ASSET_TYPES.forEach(function(type) {
        Vue2.options[type + "s"] = Object.create(null);
      });
      Vue2.options._base = Vue2;
      extend(Vue2.options.components, builtInComponents);
      initUse(Vue2);
      initMixin$1(Vue2);
      initExtend(Vue2);
      initAssetRegisters(Vue2);
    }
    initGlobalAPI(Vue);
    Object.defineProperty(Vue.prototype, "$isServer", {
      get: isServerRendering
    });
    Object.defineProperty(Vue.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    });
    Object.defineProperty(Vue, "FunctionalRenderContext", {
      value: FunctionalRenderContext
    });
    Vue.version = "2.6.14";
    var isReservedAttr = makeMap("style,class");
    var acceptValue = makeMap("input,textarea,option,select,progress");
    var mustUseProp = function(tag, type, attr) {
      return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
    };
    var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
    var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
    var convertEnumeratedValue = function(key, value) {
      return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
    };
    var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
    var xlinkNS = "http://www.w3.org/1999/xlink";
    var isXlink = function(name) {
      return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
    };
    var getXlinkProp = function(name) {
      return isXlink(name) ? name.slice(6, name.length) : "";
    };
    var isFalsyAttrValue = function(val) {
      return val == null || val === false;
    };
    function genClassForVnode(vnode) {
      var data = vnode.data;
      var parentNode2 = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode2 = parentNode2.parent)) {
        if (parentNode2 && parentNode2.data) {
          data = mergeClassData(data, parentNode2.data);
        }
      }
      return renderClass(data.staticClass, data.class);
    }
    function mergeClassData(child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class) ? [child.class, parent.class] : parent.class
      };
    }
    function renderClass(staticClass, dynamicClass) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass));
      }
      return "";
    }
    function concat(a, b) {
      return a ? b ? a + " " + b : a : b || "";
    }
    function stringifyClass(value) {
      if (Array.isArray(value)) {
        return stringifyArray(value);
      }
      if (isObject(value)) {
        return stringifyObject(value);
      }
      if (typeof value === "string") {
        return value;
      }
      return "";
    }
    function stringifyArray(value) {
      var res = "";
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
          if (res) {
            res += " ";
          }
          res += stringified;
        }
      }
      return res;
    }
    function stringifyObject(value) {
      var res = "";
      for (var key in value) {
        if (value[key]) {
          if (res) {
            res += " ";
          }
          res += key;
        }
      }
      return res;
    }
    var namespaceMap = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    };
    var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
    var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
    var isReservedTag = function(tag) {
      return isHTMLTag(tag) || isSVG(tag);
    };
    function getTagNamespace(tag) {
      if (isSVG(tag)) {
        return "svg";
      }
      if (tag === "math") {
        return "math";
      }
    }
    function isUnknownElement(tag) {
      {
        return true;
      }
    }
    var isTextInputType = makeMap("text,number,password,search,email,tel,url");
    function query(el) {
      if (typeof el === "string") {
        var selected = document.querySelector(el);
        if (!selected) {
          return document.createElement("div");
        }
        return selected;
      } else {
        return el;
      }
    }
    function createElement$1(tagName2, vnode) {
      var elm = document.createElement(tagName2);
      if (tagName2 !== "select") {
        return elm;
      }
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
        elm.setAttribute("multiple", "multiple");
      }
      return elm;
    }
    function createElementNS(namespace, tagName2) {
      return document.createElementNS(namespaceMap[namespace], tagName2);
    }
    function createTextNode(text) {
      return document.createTextNode(text);
    }
    function createComment(text) {
      return document.createComment(text);
    }
    function insertBefore(parentNode2, newNode, referenceNode) {
      parentNode2.insertBefore(newNode, referenceNode);
    }
    function removeChild(node, child) {
      node.removeChild(child);
    }
    function appendChild(node, child) {
      node.appendChild(child);
    }
    function parentNode(node) {
      return node.parentNode;
    }
    function nextSibling(node) {
      return node.nextSibling;
    }
    function tagName(node) {
      return node.tagName;
    }
    function setTextContent(node, text) {
      node.textContent = text;
    }
    function setStyleScope(node, scopeId) {
      node.setAttribute(scopeId, "");
    }
    var nodeOps = /* @__PURE__ */ Object.freeze({
      createElement: createElement$1,
      createElementNS,
      createTextNode,
      createComment,
      insertBefore,
      removeChild,
      appendChild,
      parentNode,
      nextSibling,
      tagName,
      setTextContent,
      setStyleScope
    });
    var ref = {
      create: function create(_, vnode) {
        registerRef(vnode);
      },
      update: function update(oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy(vnode) {
        registerRef(vnode, true);
      }
    };
    function registerRef(vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!isDef(key)) {
        return;
      }
      var vm = vnode.context;
      var ref2 = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref2);
        } else if (refs[key] === ref2) {
          refs[key] = void 0;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref2];
          } else if (refs[key].indexOf(ref2) < 0) {
            refs[key].push(ref2);
          }
        } else {
          refs[key] = ref2;
        }
      }
    }
    var emptyNode = new VNode("", {}, []);
    var hooks = ["create", "activate", "update", "remove", "destroy"];
    function sameVnode(a, b) {
      return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
    }
    function sameInputType(a, b) {
      if (a.tag !== "input") {
        return true;
      }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
    }
    function createKeyToOldIdx(children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) {
          map[key] = i;
        }
      }
      return map;
    }
    function createPatchFunction(backend) {
      var i, j;
      var cbs = {};
      var modules2 = backend.modules;
      var nodeOps2 = backend.nodeOps;
      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules2.length; ++j) {
          if (isDef(modules2[j][hooks[i]])) {
            cbs[hooks[i]].push(modules2[j][hooks[i]]);
          }
        }
      }
      function emptyNodeAt(elm) {
        return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
      }
      function createRmCb(childElm, listeners) {
        function remove$$1() {
          if (--remove$$1.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove$$1.listeners = listeners;
        return remove$$1;
      }
      function removeNode(el) {
        var parent = nodeOps2.parentNode(el);
        if (isDef(parent)) {
          nodeOps2.removeChild(parent, el);
        }
      }
      function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          vnode = ownerArray[index2] = cloneVNode(vnode);
        }
        vnode.isRootInsert = !nested;
        if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return;
        }
        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
          setScope(vnode);
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps2.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps2.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }
      function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i2 = vnode.data;
        if (isDef(i2)) {
          var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
          if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
            i2(vnode, false);
          }
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true;
          }
        }
      }
      function initComponent(vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          registerRef(vnode);
          insertedVnodeQueue.push(vnode);
        }
      }
      function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
        var i2;
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
            for (i2 = 0; i2 < cbs.activate.length; ++i2) {
              cbs.activate[i2](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break;
          }
        }
        insert(parentElm, vnode.elm, refElm);
      }
      function insert(parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (nodeOps2.parentNode(ref$$1) === parent) {
              nodeOps2.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps2.appendChild(parent, elm);
          }
        }
      }
      function createChildren(vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          for (var i2 = 0; i2 < children.length; ++i2) {
            createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
        }
      }
      function isPatchable(vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag);
      }
      function invokeCreateHooks(vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook;
        if (isDef(i)) {
          if (isDef(i.create)) {
            i.create(emptyNode, vnode);
          }
          if (isDef(i.insert)) {
            insertedVnodeQueue.push(vnode);
          }
        }
      }
      function setScope(vnode) {
        var i2;
        if (isDef(i2 = vnode.fnScopeId)) {
          nodeOps2.setStyleScope(vnode.elm, i2);
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            }
            ancestor = ancestor.parent;
          }
        }
        if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
          nodeOps2.setStyleScope(vnode.elm, i2);
        }
      }
      function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
      }
      function invokeDestroyHook(vnode) {
        var i2, j2;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy)) {
            i2(vnode);
          }
          for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
            cbs.destroy[i2](vnode);
          }
        }
        if (isDef(i2 = vnode.children)) {
          for (j2 = 0; j2 < vnode.children.length; ++j2) {
            invokeDestroyHook(vnode.children[j2]);
          }
        }
      }
      function removeVnodes(vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else {
              removeNode(ch.elm);
            }
          }
        }
      }
      function removeAndInvokeRemoveHook(vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i2;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            rm.listeners += listeners;
          } else {
            rm = createRmCb(vnode.elm, listeners);
          }
          if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
            removeAndInvokeRemoveHook(i2, rm);
          }
          for (i2 = 0; i2 < cbs.remove.length; ++i2) {
            cbs.remove[i2](vnode, rm);
          }
          if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
            i2(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }
      function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
        var canMove = !removeOnly;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx];
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) {
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) {
              oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
            }
            idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) {
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldCh[idxInOld] = void 0;
                canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
      }
      function findIdxInOld(node, oldCh, start, end) {
        for (var i2 = start; i2 < end; i2++) {
          var c = oldCh[i2];
          if (isDef(c) && sameVnode(node, c)) {
            return i2;
          }
        }
      }
      function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
        if (oldVnode === vnode) {
          return;
        }
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          vnode = ownerArray[index2] = cloneVNode(vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return;
        }
        if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
          vnode.componentInstance = oldVnode.componentInstance;
          return;
        }
        var i2;
        var data = vnode.data;
        if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
          i2(oldVnode, vnode);
        }
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i2 = 0; i2 < cbs.update.length; ++i2) {
            cbs.update[i2](oldVnode, vnode);
          }
          if (isDef(i2 = data.hook) && isDef(i2 = i2.update)) {
            i2(oldVnode, vnode);
          }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) {
              updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
          } else if (isDef(ch)) {
            if (isDef(oldVnode.text)) {
              nodeOps2.setTextContent(elm, "");
            }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps2.setTextContent(elm, "");
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps2.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch)) {
            i2(oldVnode, vnode);
          }
        }
      }
      function invokeInsertHook(vnode, queue2, initial) {
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue2;
        } else {
          for (var i2 = 0; i2 < queue2.length; ++i2) {
            queue2[i2].data.hook.insert(queue2[i2]);
          }
        }
      }
      var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
      function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
        var i2;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || data && data.pre;
        vnode.elm = elm;
        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true;
        }
        if (isDef(data)) {
          if (isDef(i2 = data.hook) && isDef(i2 = i2.init)) {
            i2(vnode, true);
          }
          if (isDef(i2 = vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            return true;
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                if (i2 !== elm.innerHTML) {
                  return false;
                }
              } else {
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break;
                  }
                  childNode = childNode.nextSibling;
                }
                if (!childrenMatch || childNode) {
                  return false;
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break;
              }
            }
            if (!fullInvoke && data["class"]) {
              traverse(data["class"]);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true;
      }
      return function patch2(oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) {
            invokeDestroyHook(oldVnode);
          }
          return;
        }
        var isInitialPatch = false;
        var insertedVnodeQueue = [];
        if (isUndef(oldVnode)) {
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
          } else {
            if (isRealElement) {
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode;
                }
              }
              oldVnode = emptyNodeAt(oldVnode);
            }
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps2.parentNode(oldElm);
            createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps2.nextSibling(oldElm));
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
                  cbs.destroy[i2](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  var insert2 = ancestor.data.hook.insert;
                  if (insert2.merged) {
                    for (var i$2 = 1; i$2 < insert2.fns.length; i$2++) {
                      insert2.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(parentElm)) {
              removeVnodes([oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }
        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm;
      };
    }
    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives(vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };
    function updateDirectives(oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }
    function _update(oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
      var dirsWithInsert = [];
      var dirsWithPostpatch = [];
      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          callHook$1(dir, "bind", vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          dir.oldValue = oldDir.value;
          dir.oldArg = oldDir.arg;
          callHook$1(dir, "update", vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }
      if (dirsWithInsert.length) {
        var callInsert = function() {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, "insert", callInsert);
        } else {
          callInsert();
        }
      }
      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, "postpatch", function() {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
          }
        });
      }
      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }
    var emptyModifiers = Object.create(null);
    function normalizeDirectives$1(dirs, vm) {
      var res = Object.create(null);
      if (!dirs) {
        return res;
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, "directives", dir.name);
      }
      return res;
    }
    function getRawDirName(dir) {
      return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
    }
    function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
        }
      }
    }
    var baseModules = [ref, directives];
    function updateAttrs(oldVnode, vnode) {
      var opts2 = vnode.componentOptions;
      if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
        return;
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return;
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs2 = vnode.data.attrs || {};
      if (isDef(attrs2.__ob__)) {
        attrs2 = vnode.data.attrs = extend({}, attrs2);
      }
      for (key in attrs2) {
        cur = attrs2[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur, vnode.data.pre);
        }
      }
      for (key in oldAttrs) {
        if (isUndef(attrs2[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }
    function setAttr(el, key, value, isInPre) {
      if (isInPre || el.tagName.indexOf("-") > -1) {
        baseSetAttr(el, key, value);
      } else if (isBooleanAttr(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        baseSetAttr(el, key, value);
      }
    }
    function baseSetAttr(el, key, value) {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, value);
      }
    }
    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };
    function updateClass(oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
        return;
      }
      var cls = genClassForVnode(vnode);
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }
      if (cls !== el._prevClass) {
        el.setAttribute("class", cls);
        el._prevClass = cls;
      }
    }
    var klass = {
      create: updateClass,
      update: updateClass
    };
    var RANGE_TOKEN = "__r";
    var CHECKBOX_RADIO_TOKEN = "__c";
    function normalizeEvents(on) {
      if (isDef(on[RANGE_TOKEN])) {
        var event = "input";
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }
    var target$1;
    function createOnceHandler$1(event, handler, capture) {
      var _target = target$1;
      return function onceHandler() {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      };
    }
    var useMicrotaskFix = isUsingMicroTask && !(isFF );
    function add$1(name, handler, capture, passive) {
      if (useMicrotaskFix) {
        var attachedTimestamp = currentFlushTimestamp;
        var original = handler;
        handler = original._wrapper = function(e) {
          if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
            return original.apply(this, arguments);
          }
        };
      }
      target$1.addEventListener(name, handler, capture);
    }
    function remove$2(name, handler, capture, _target) {
      (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
    }
    function updateDOMListeners(oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return;
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
      target$1 = void 0;
    }
    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };
    var svgContainer;
    function updateDOMProps(oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return;
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props2 = vnode.data.domProps || {};
      if (isDef(props2.__ob__)) {
        props2 = vnode.data.domProps = extend({}, props2);
      }
      for (key in oldProps) {
        if (!(key in props2)) {
          elm[key] = "";
        }
      }
      for (key in props2) {
        cur = props2[key];
        if (key === "textContent" || key === "innerHTML") {
          if (vnode.children) {
            vnode.children.length = 0;
          }
          if (cur === oldProps[key]) {
            continue;
          }
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }
        if (key === "value" && elm.tagName !== "PROGRESS") {
          elm._value = cur;
          var strCur = isUndef(cur) ? "" : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
          svgContainer = svgContainer || document.createElement("div");
          svgContainer.innerHTML = "<svg>" + cur + "</svg>";
          var svg = svgContainer.firstChild;
          while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
          }
          while (svg.firstChild) {
            elm.appendChild(svg.firstChild);
          }
        } else if (cur !== oldProps[key]) {
          try {
            elm[key] = cur;
          } catch (e) {
          }
        }
      }
    }
    function shouldUpdateValue(elm, checkVal) {
      return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
    }
    function isNotInFocusAndDirty(elm, checkVal) {
      var notInFocus = true;
      try {
        notInFocus = document.activeElement !== elm;
      } catch (e) {
      }
      return notInFocus && elm.value !== checkVal;
    }
    function isDirtyWithModifiers(elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers;
      if (isDef(modifiers)) {
        if (modifiers.number) {
          return toNumber(value) !== toNumber(newVal);
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim();
        }
      }
      return value !== newVal;
    }
    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };
    var parseStyleText = cached(function(cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function(item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res;
    });
    function normalizeStyleData(data) {
      var style2 = normalizeStyleBinding(data.style);
      return data.staticStyle ? extend(data.staticStyle, style2) : style2;
    }
    function normalizeStyleBinding(bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle);
      }
      if (typeof bindingStyle === "string") {
        return parseStyleText(bindingStyle);
      }
      return bindingStyle;
    }
    function getStyle(vnode, checkChild) {
      var res = {};
      var styleData;
      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
            extend(res, styleData);
          }
        }
      }
      if (styleData = normalizeStyleData(vnode.data)) {
        extend(res, styleData);
      }
      var parentNode2 = vnode;
      while (parentNode2 = parentNode2.parent) {
        if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
          extend(res, styleData);
        }
      }
      return res;
    }
    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function(el, name, val) {
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };
    var vendorNames = ["Webkit", "Moz", "ms"];
    var emptyStyle;
    var normalize = cached(function(prop) {
      emptyStyle = emptyStyle || document.createElement("div").style;
      prop = camelize(prop);
      if (prop !== "filter" && prop in emptyStyle) {
        return prop;
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    });
    function updateStyle(oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
        return;
      }
      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
      var oldStyle = oldStaticStyle || oldStyleBinding;
      var style2 = normalizeStyleBinding(vnode.data.style) || {};
      vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend({}, style2) : style2;
      var newStyle = getStyle(vnode, true);
      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, "");
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          setProp(el, name, cur == null ? "" : cur);
        }
      }
    }
    var style = {
      create: updateStyle,
      update: updateStyle
    };
    var whitespaceRE = /\s+/;
    function addClass(el, cls) {
      if (!cls || !(cls = cls.trim())) {
        return;
      }
      if (el.classList) {
        if (cls.indexOf(" ") > -1) {
          cls.split(whitespaceRE).forEach(function(c) {
            return el.classList.add(c);
          });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute("class") || "") + " ";
        if (cur.indexOf(" " + cls + " ") < 0) {
          el.setAttribute("class", (cur + cls).trim());
        }
      }
    }
    function removeClass(el, cls) {
      if (!cls || !(cls = cls.trim())) {
        return;
      }
      if (el.classList) {
        if (cls.indexOf(" ") > -1) {
          cls.split(whitespaceRE).forEach(function(c) {
            return el.classList.remove(c);
          });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute("class");
        }
      } else {
        var cur = " " + (el.getAttribute("class") || "") + " ";
        var tar = " " + cls + " ";
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, " ");
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute("class", cur);
        } else {
          el.removeAttribute("class");
        }
      }
    }
    function resolveTransition(def$$1) {
      if (!def$$1) {
        return;
      }
      if (typeof def$$1 === "object") {
        var res = {};
        if (def$$1.css !== false) {
          extend(res, autoCssTransition(def$$1.name || "v"));
        }
        extend(res, def$$1);
        return res;
      } else if (typeof def$$1 === "string") {
        return autoCssTransition(def$$1);
      }
    }
    var autoCssTransition = cached(function(name) {
      return {
        enterClass: name + "-enter",
        enterToClass: name + "-enter-to",
        enterActiveClass: name + "-enter-active",
        leaveClass: name + "-leave",
        leaveToClass: name + "-leave-to",
        leaveActiveClass: name + "-leave-active"
      };
    });
    var TRANSITION = "transition";
    var ANIMATION = "animation";
    var transitionProp = "transition";
    var transitionEndEvent = "transitionend";
    var animationProp = "animation";
    var animationEndEvent = "animationend";
    var raf = function(fn) {
      return fn();
    };
    function nextFrame(fn) {
      raf(function() {
        raf(fn);
      });
    }
    function addTransitionClass(el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }
    function removeTransitionClass(el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }
    function whenTransitionEnds(el, expectedType, cb) {
      var ref2 = getTransitionInfo(el, expectedType);
      var type = ref2.type;
      var timeout = ref2.timeout;
      var propCount = ref2.propCount;
      if (!type) {
        return cb();
      }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function() {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function(e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function() {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }
    var transformRE = /\b(transform|all)(,|$)/;
    function getTransitionInfo(el, expectedType) {
      var styles = window.getComputedStyle(el);
      var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
      var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
      var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
      var animationTimeout = getTimeout(animationDelays, animationDurations);
      var type;
      var timeout = 0;
      var propCount = 0;
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
      }
      var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
      return {
        type,
        timeout,
        propCount,
        hasTransform
      };
    }
    function getTimeout(delays, durations) {
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
      return Math.max.apply(null, durations.map(function(d, i) {
        return toMs(d) + toMs(delays[i]);
      }));
    }
    function toMs(s) {
      return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
    }
    function enter(vnode, toggleDisplay) {
      var el = vnode.elm;
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return;
      }
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return;
      }
      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter2 = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
      }
      var isAppear = !context._isMounted || !vnode.isRootInsert;
      if (isAppear && !appear && appear !== "") {
        return;
      }
      var startClass = isAppear && appearClass ? appearClass : enterClass;
      var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
      var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
      var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
      var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
      var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
      var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
      var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);
      var cb = el._enterCb = once(function() {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });
      if (!vnode.data.show) {
        mergeVNodeHook(vnode, "insert", function() {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function() {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, toClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
    function leave(vnode, rm) {
      var el = vnode.elm;
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }
      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm();
      }
      if (isDef(el._leaveCb)) {
        return;
      }
      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave2 = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;
      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave2);
      var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
      var cb = el._leaveCb = once(function() {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });
      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }
      function performLeave() {
        if (cb.cancelled) {
          return;
        }
        if (!vnode.data.show && el.parentNode) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function() {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveToClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        leave2 && leave2(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }
    function isValidDuration(val) {
      return typeof val === "number" && !isNaN(val);
    }
    function getHookArgumentsLength(fn) {
      if (isUndef(fn)) {
        return false;
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
      } else {
        return (fn._length || fn.length) > 1;
      }
    }
    var transition = {};
    var platformModules = [attrs, klass, events, domProps, style, transition];
    var modules = platformModules.concat(baseModules);
    createPatchFunction({
      nodeOps,
      modules
    });
    var directive = {
      inserted: function inserted(el, binding, vnode, oldVnode) {
        if (vnode.tag === "select") {
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, "postpatch", function() {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            el.addEventListener("compositionstart", onCompositionStart);
            el.addEventListener("compositionend", onCompositionEnd);
            el.addEventListener("change", onCompositionEnd);
          }
        }
      },
      componentUpdated: function componentUpdated(el, binding, vnode) {
        if (vnode.tag === "select") {
          setSelected(el, binding, vnode.context);
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function(o, i) {
            return !looseEqual(o, prevOptions[i]);
          })) {
            var needReset = el.multiple ? binding.value.some(function(v) {
              return hasNoMatchingOption(v, curOptions);
            }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, "change");
            }
          }
        }
      }
    };
    function setSelected(el, binding, vm) {
      actuallySetSelected(el, binding);
    }
    function actuallySetSelected(el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
        return;
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return;
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }
    function hasNoMatchingOption(value, options) {
      return options.every(function(o) {
        return !looseEqual(o, value);
      });
    }
    function getValue(option) {
      return "_value" in option ? option._value : option.value;
    }
    function onCompositionStart(e) {
      e.target.composing = true;
    }
    function onCompositionEnd(e) {
      if (!e.target.composing) {
        return;
      }
      e.target.composing = false;
      trigger(e.target, "input");
    }
    function trigger(el, type) {
      var e = document.createEvent("HTMLEvents");
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }
    function locateNode(vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
    }
    var show = {
      bind: function bind2(el, ref2, vnode) {
        var value = ref2.value;
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function() {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : "none";
        }
      },
      update: function update(el, ref2, vnode) {
        var value = ref2.value;
        var oldValue = ref2.oldValue;
        if (!value === !oldValue) {
          return;
        }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function() {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function() {
              el.style.display = "none";
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : "none";
        }
      },
      unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };
    var platformDirectives = {
      model: directive,
      show
    };
    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };
    function getRealChild(vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children));
      } else {
        return vnode;
      }
    }
    function extractTransitionData(comp) {
      var data = {};
      var options = comp.$options;
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data;
    }
    function placeholder(h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h("keep-alive", {
          props: rawChild.componentOptions.propsData
        });
      }
    }
    function hasParentTransition(vnode) {
      while (vnode = vnode.parent) {
        if (vnode.data.transition) {
          return true;
        }
      }
    }
    function isSameChild(child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag;
    }
    var isNotTextNode = function(c) {
      return c.tag || isAsyncPlaceholder(c);
    };
    var isVShowDirective = function(d) {
      return d.name === "show";
    };
    var Transition = {
      name: "transition",
      props: transitionProps,
      abstract: true,
      render: function render(h) {
        var this$1$1 = this;
        var children = this.$slots.default;
        if (!children) {
          return;
        }
        children = children.filter(isNotTextNode);
        if (!children.length) {
          return;
        }
        var mode = this.mode;
        var rawChild = children[0];
        if (hasParentTransition(this.$vnode)) {
          return rawChild;
        }
        var child = getRealChild(rawChild);
        if (!child) {
          return rawChild;
        }
        if (this._leaving) {
          return placeholder(h, rawChild);
        }
        var id = "__transition-" + this._uid + "-";
        child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
          child.data.show = true;
        }
        if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
          var oldData = oldChild.data.transition = extend({}, data);
          if (mode === "out-in") {
            this._leaving = true;
            mergeVNodeHook(oldData, "afterLeave", function() {
              this$1$1._leaving = false;
              this$1$1.$forceUpdate();
            });
            return placeholder(h, rawChild);
          } else if (mode === "in-out") {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild;
            }
            var delayedLeave;
            var performLeave = function() {
              delayedLeave();
            };
            mergeVNodeHook(data, "afterEnter", performLeave);
            mergeVNodeHook(data, "enterCancelled", performLeave);
            mergeVNodeHook(oldData, "delayLeave", function(leave2) {
              delayedLeave = leave2;
            });
          }
        }
        return rawChild;
      }
    };
    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);
    delete props.mode;
    var TransitionGroup = {
      props,
      beforeMount: function beforeMount() {
        var this$1$1 = this;
        var update = this._update;
        this._update = function(vnode, hydrating) {
          var restoreActiveInstance = setActiveInstance(this$1$1);
          this$1$1.__patch__(this$1$1._vnode, this$1$1.kept, false, true);
          this$1$1._vnode = this$1$1.kept;
          restoreActiveInstance();
          update.call(this$1$1, vnode, hydrating);
        };
      },
      render: function render(h) {
        var tag = this.tag || this.$vnode.data.tag || "span";
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);
        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
              children.push(c);
              map[c.key] = c;
              (c.data || (c.data = {})).transition = transitionData;
            }
          }
        }
        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }
        return h(tag, null, children);
      },
      updated: function updated() {
        var children = this.prevChildren;
        var moveClass = this.moveClass || (this.name || "v") + "-move";
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return;
        }
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);
        this._reflow = document.body.offsetHeight;
        children.forEach(function(c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = "";
            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
              if (e && e.target !== el) {
                return;
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },
      methods: {
        hasMove: function hasMove(el, moveClass) {
          {
            return false;
          }
        }
      }
    };
    function callPendingCbs(c) {
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }
    function recordPosition(c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }
    function applyTranslation(c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = "0s";
      }
    }
    var platformComponents = {
      Transition,
      TransitionGroup
    };
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);
    Vue.prototype.__patch__ = noop;
    Vue.prototype.$mount = function(el, hydrating) {
      el = el && inBrowser ? query(el) : void 0;
      return mountComponent(this, el, hydrating);
    };
    var vue_runtime_esm = Vue;
    var vue_composition_api = __webpack_require__(0);
    const isFunction = (fn) => fn instanceof Function;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return setNuxtAppInstance;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return defineNuxtPlugin;
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return useNuxtApp;
    });
    var _composables_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
    _composables_mjs__WEBPACK_IMPORTED_MODULE_0__["a"];
    let currentNuxtAppInstance;
    const setNuxtAppInstance = (nuxt) => {
      currentNuxtAppInstance = nuxt;
    };
    const defineNuxtPlugin = (plugin) => (ctx) => {
      setNuxtAppInstance(ctx.$_nuxtApp);
      plugin(ctx.$_nuxtApp);
      setNuxtAppInstance(null);
    };
    const useNuxtApp = () => {
      const vm = Object(_composables_mjs__WEBPACK_IMPORTED_MODULE_0__["b"])();
      if (!vm) {
        if (!currentNuxtAppInstance) {
          throw new Error("nuxt app instance unavailable");
        }
        return currentNuxtAppInstance;
      }
      return vm === null || vm === void 0 ? void 0 : vm.proxy.$_nuxtApp;
    };
  },
  function(module2, exports) {
    module2.exports = require$$0;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "e", function() {
      return ssrRef;
    });
    __webpack_require__.d(__webpack_exports__, "f", function() {
      return useAsync;
    });
    __webpack_require__.d(__webpack_exports__, "g", function() {
      return useContext;
    });
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return defineComponent;
    });
    __webpack_require__.d(__webpack_exports__, "i", function() {
      return useRouter;
    });
    __webpack_require__.d(__webpack_exports__, "h", function() {
      return useRoute;
    });
    __webpack_require__.d(__webpack_exports__, "j", function() {
      return useStore;
    });
    __webpack_require__(29);
    __webpack_require__(30);
    __webpack_require__(31);
    __webpack_require__(32);
    __webpack_require__(33);
    __webpack_require__(34);
    __webpack_require__(35);
    __webpack_require__(36);
    __webpack_require__(37);
    __webpack_require__(38);
    __webpack_require__(39);
    __webpack_require__(40);
    __webpack_require__(41);
    __webpack_require__(42);
    var defu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48);
    var defu__WEBPACK_IMPORTED_MODULE_14___default = /* @__PURE__ */ __webpack_require__.n(defu__WEBPACK_IMPORTED_MODULE_14__);
    var _vue_composition_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(0);
    var _app_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2);
    var _composables_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5);
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["inject"];
    });
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["provide"];
    });
    __webpack_require__.d(__webpack_exports__, "d", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["reactive"];
    });
    const checkDocsMsg = "Please see https://v3.nuxtjs.org for more information.";
    const msgPrefix = "[bridge] [legacy capi]";
    const _warned = {};
    const warnOnce = (id, message) => {
      if (!_warned[id]) {
        console.warn(msgPrefix, message);
        _warned[id] = true;
      }
    };
    warnOnce("import", `\`@nuxtjs/composition-api\` is deprecated. ${checkDocsMsg}`);
    const ssrRef = (value, key) => {
      const vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["getCurrentInstance"])();
      if (!vm) {
        throw new Error("ssrRef no longer supports global/ambient context and must be called within a setup() function");
      }
      warnOnce("ssrRef", "`ssrRef` is deprecated and can be replaced with `useState`.");
      return Object(_composables_mjs__WEBPACK_IMPORTED_MODULE_17__["c"])(key, value instanceof Function ? value : () => value);
    };
    const useAsync = (cb, key) => {
      warnOnce("useAsync", "You are using `useAsync`, which is deprecated.");
      const _ref = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["isRef"])(key) ? key : ssrRef(null, key);
      if (!_ref.value || isHMR()) {
        const p = Promise.resolve(cb()).then((res) => _ref.value = res);
        Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["onServerPrefetch"])(() => p);
      }
      return _ref;
    };
    const useContext = () => {
      warnOnce("useContext", "You are using `useContext`, which can be replaced with `useNuxtApp` (import from `#app`).");
      const route = useRoute();
      const nuxt = Object(_app_mjs__WEBPACK_IMPORTED_MODULE_16__["c"])();
      return {
        ...nuxt.nuxt2App.context,
        route: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["computed"])(() => route),
        query: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["computed"])(() => route.value.query),
        from: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["computed"])(() => nuxt.nuxt2App.context.from),
        params: Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["computed"])(() => route.value.params)
      };
    };
    const getHeadOptions = (options) => {
      const head = function() {
        const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
        if (!this._computedHead) {
          return optionHead;
        }
        const computedHead = this._computedHead.map((h) => {
          if (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["isReactive"])(h)) {
            return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["toRaw"])(h);
          }
          if (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["isRef"])(h)) {
            return h.value;
          }
          return h;
        });
        return defu__WEBPACK_IMPORTED_MODULE_14___default()({}, ...computedHead.reverse(), optionHead);
      };
      return {
        head
      };
    };
    const defineComponent = (options) => {
      if (!("head" in options)) {
        return options;
      }
      return {
        ...options,
        ...getHeadOptions(options)
      };
    };
    const useRouter = () => {
      warnOnce("useRouter", "You are using `useRouter`, which can be replaced with `useRouter` (import from `#app`).");
      return getCurrentInstance().$router;
    };
    const useRoute = () => {
      warnOnce("useRoute", "You are using `useRoute`, which can be replaced with `useRoute` (import from `#app`).");
      const vm = getCurrentInstance();
      return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["computed"])(() => vm.$route);
    };
    const useStore = () => getCurrentInstance().$store;
    function getCurrentInstance() {
      const vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_15__["getCurrentInstance"])();
      if (!vm) {
        throw new Error("This must be called within a setup function.");
      }
      return vm.proxy;
    }
    const isHMR = () => {
      return false;
    };
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "c", function() {
      return useState;
    });
    var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    var _app_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["defineComponent"];
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"];
    });
    const useState = (key, init) => {
      const nuxtApp = Object(_app_mjs__WEBPACK_IMPORTED_MODULE_1__["c"])();
      if (!nuxtApp.payload.useState) {
        nuxtApp.payload.useState = {};
      }
      if (!Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["isReactive"])(nuxtApp.payload.useState)) {
        nuxtApp.payload.useState = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["reactive"])(nuxtApp.payload.useState);
      }
      const state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["toRef"])(nuxtApp.payload.useState, key);
      if (state.value === void 0 && init) {
        state.value = init();
      }
      return state;
    };
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return normalizeComponent;
    });
    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
      var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }
      if (functionalTemplate) {
        options.functional = true;
      }
      if (scopeId) {
        options._scopeId = "data-v-" + scopeId;
      }
      var hook;
      if (moduleIdentifier) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function() {
          injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
        } : injectStyles;
      }
      if (hook) {
        if (options.functional) {
          options._injectStyles = hook;
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
      return {
        exports: scriptExports,
        options
      };
    }
  },
  function(module2, exports, __webpack_require__) {
    module2.exports = function(cssWithMappingToString) {
      var list = [];
      list.toString = function toString() {
        return this.map(function(item) {
          var content = cssWithMappingToString(item);
          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }
          return content;
        }).join("");
      };
      list.i = function(modules, mediaQuery, dedupe) {
        if (typeof modules === "string") {
          modules = [[null, modules, ""]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }
        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);
          if (dedupe && alreadyImportedModules[item[0]]) {
            continue;
          }
          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }
          list.push(item);
        }
      };
      return list;
    };
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "default", function() {
      return addStylesServer;
    });
    function listToStyles(parentId, list) {
      var styles = [];
      var newStyles = {};
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          id: parentId + ":" + i,
          css,
          media,
          sourceMap
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }
    function addStylesServer(parentId, list, isProduction, context) {
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (context) {
        if (!context.hasOwnProperty("styles")) {
          Object.defineProperty(context, "styles", {
            enumerable: true,
            get: function() {
              return renderStyles(context._styles);
            }
          });
          context._renderStyles = renderStyles;
        }
        var styles = context._styles || (context._styles = {});
        list = listToStyles(parentId, list);
        if (isProduction) {
          addStyleProd(styles, list);
        } else {
          addStyleDev(styles, list);
        }
      }
    }
    function addStyleProd(styles, list) {
      for (var i = 0; i < list.length; i++) {
        var parts = list[i].parts;
        for (var j = 0; j < parts.length; j++) {
          var part = parts[j];
          var id = part.media || "default";
          var style = styles[id];
          if (style) {
            if (style.ids.indexOf(part.id) < 0) {
              style.ids.push(part.id);
              style.css += "\n" + part.css;
            }
          } else {
            styles[id] = {
              ids: [part.id],
              css: part.css,
              media: part.media
            };
          }
        }
      }
    }
    function addStyleDev(styles, list) {
      for (var i = 0; i < list.length; i++) {
        var parts = list[i].parts;
        for (var j = 0; j < parts.length; j++) {
          var part = parts[j];
          styles[part.id] = {
            ids: [part.id],
            css: part.css,
            media: part.media
          };
        }
      }
    }
    function renderStyles(styles) {
      var css = "";
      for (var key in styles) {
        var style = styles[key];
        css += '<style data-vue-ssr-id="' + style.ids.join(" ") + '"' + (style.media ? ' media="' + style.media + '"' : "") + ">" + style.css + "</style>";
      }
      return css;
    }
  },
  function(module2, exports, __webpack_require__) {
    /*!
     * vue-no-ssr v1.1.1
     * (c) 2018-present egoist <0x142857@gmail.com>
     * Released under the MIT License.
     */
    var index = {
      name: "NoSsr",
      functional: true,
      props: {
        placeholder: String,
        placeholderTag: {
          type: String,
          default: "div"
        }
      },
      render: function render(h, ref) {
        var parent = ref.parent;
        var slots = ref.slots;
        var props = ref.props;
        var ref$1 = slots();
        var defaultSlot = ref$1.default;
        if (defaultSlot === void 0)
          defaultSlot = [];
        var placeholderSlot = ref$1.placeholder;
        if (parent._isMounted) {
          return defaultSlot;
        }
        parent.$once("hook:mounted", function() {
          parent.$forceUpdate();
        });
        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
          return h(props.placeholderTag, {
            class: ["no-ssr-placeholder"]
          }, props.placeholder || placeholderSlot);
        }
        return defaultSlot.length > 0 ? defaultSlot.map(function() {
          return h(false);
        }) : h(false);
      }
    };
    module2.exports = index;
  },
  function(module2, exports, __webpack_require__) {
    /*!
     * vuex v3.6.2
     * (c) 2021 Evan You
     * @license MIT
     */
    function applyMixin(Vue2) {
      var version = Number(Vue2.version.split(".")[0]);
      if (version >= 2) {
        Vue2.mixin({
          beforeCreate: vuexInit
        });
      } else {
        var _init = Vue2.prototype._init;
        Vue2.prototype._init = function(options) {
          if (options === void 0)
            options = {};
          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
          _init.call(this, options);
        };
      }
      function vuexInit() {
        var options = this.$options;
        if (options.store) {
          this.$store = typeof options.store === "function" ? options.store() : options.store;
        } else if (options.parent && options.parent.$store) {
          this.$store = options.parent.$store;
        }
      }
    }
    var target = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {};
    var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function devtoolPlugin(store) {
      if (!devtoolHook) {
        return;
      }
      store._devtoolHook = devtoolHook;
      devtoolHook.emit("vuex:init", store);
      devtoolHook.on("vuex:travel-to-state", function(targetState) {
        store.replaceState(targetState);
      });
      store.subscribe(function(mutation, state) {
        devtoolHook.emit("vuex:mutation", mutation, state);
      }, {
        prepend: true
      });
      store.subscribeAction(function(action, state) {
        devtoolHook.emit("vuex:action", action, state);
      }, {
        prepend: true
      });
    }
    function find(list, f) {
      return list.filter(f)[0];
    }
    function deepCopy(obj, cache) {
      if (cache === void 0)
        cache = [];
      if (obj === null || typeof obj !== "object") {
        return obj;
      }
      var hit = find(cache, function(c) {
        return c.original === obj;
      });
      if (hit) {
        return hit.copy;
      }
      var copy = Array.isArray(obj) ? [] : {};
      cache.push({
        original: obj,
        copy
      });
      Object.keys(obj).forEach(function(key) {
        copy[key] = deepCopy(obj[key], cache);
      });
      return copy;
    }
    function forEachValue(obj, fn) {
      Object.keys(obj).forEach(function(key) {
        return fn(obj[key], key);
      });
    }
    function isObject(obj) {
      return obj !== null && typeof obj === "object";
    }
    function isPromise(val) {
      return val && typeof val.then === "function";
    }
    function partial(fn, arg) {
      return function() {
        return fn(arg);
      };
    }
    var Module = function Module2(rawModule, runtime) {
      this.runtime = runtime;
      this._children = Object.create(null);
      this._rawModule = rawModule;
      var rawState = rawModule.state;
      this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
    };
    var prototypeAccessors = {
      namespaced: {
        configurable: true
      }
    };
    prototypeAccessors.namespaced.get = function() {
      return !!this._rawModule.namespaced;
    };
    Module.prototype.addChild = function addChild(key, module3) {
      this._children[key] = module3;
    };
    Module.prototype.removeChild = function removeChild(key) {
      delete this._children[key];
    };
    Module.prototype.getChild = function getChild(key) {
      return this._children[key];
    };
    Module.prototype.hasChild = function hasChild(key) {
      return key in this._children;
    };
    Module.prototype.update = function update2(rawModule) {
      this._rawModule.namespaced = rawModule.namespaced;
      if (rawModule.actions) {
        this._rawModule.actions = rawModule.actions;
      }
      if (rawModule.mutations) {
        this._rawModule.mutations = rawModule.mutations;
      }
      if (rawModule.getters) {
        this._rawModule.getters = rawModule.getters;
      }
    };
    Module.prototype.forEachChild = function forEachChild(fn) {
      forEachValue(this._children, fn);
    };
    Module.prototype.forEachGetter = function forEachGetter(fn) {
      if (this._rawModule.getters) {
        forEachValue(this._rawModule.getters, fn);
      }
    };
    Module.prototype.forEachAction = function forEachAction(fn) {
      if (this._rawModule.actions) {
        forEachValue(this._rawModule.actions, fn);
      }
    };
    Module.prototype.forEachMutation = function forEachMutation(fn) {
      if (this._rawModule.mutations) {
        forEachValue(this._rawModule.mutations, fn);
      }
    };
    Object.defineProperties(Module.prototype, prototypeAccessors);
    var ModuleCollection = function ModuleCollection2(rawRootModule) {
      this.register([], rawRootModule, false);
    };
    ModuleCollection.prototype.get = function get(path) {
      return path.reduce(function(module3, key) {
        return module3.getChild(key);
      }, this.root);
    };
    ModuleCollection.prototype.getNamespace = function getNamespace(path) {
      var module3 = this.root;
      return path.reduce(function(namespace, key) {
        module3 = module3.getChild(key);
        return namespace + (module3.namespaced ? key + "/" : "");
      }, "");
    };
    ModuleCollection.prototype.update = function update$1(rawRootModule) {
      update([], this.root, rawRootModule);
    };
    ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
      var this$1$1 = this;
      if (runtime === void 0)
        runtime = true;
      var newModule = new Module(rawModule, runtime);
      if (path.length === 0) {
        this.root = newModule;
      } else {
        var parent = this.get(path.slice(0, -1));
        parent.addChild(path[path.length - 1], newModule);
      }
      if (rawModule.modules) {
        forEachValue(rawModule.modules, function(rawChildModule, key) {
          this$1$1.register(path.concat(key), rawChildModule, runtime);
        });
      }
    };
    ModuleCollection.prototype.unregister = function unregister(path) {
      var parent = this.get(path.slice(0, -1));
      var key = path[path.length - 1];
      var child = parent.getChild(key);
      if (!child) {
        return;
      }
      if (!child.runtime) {
        return;
      }
      parent.removeChild(key);
    };
    ModuleCollection.prototype.isRegistered = function isRegistered(path) {
      var parent = this.get(path.slice(0, -1));
      var key = path[path.length - 1];
      if (parent) {
        return parent.hasChild(key);
      }
      return false;
    };
    function update(path, targetModule, newModule) {
      targetModule.update(newModule);
      if (newModule.modules) {
        for (var key in newModule.modules) {
          if (!targetModule.getChild(key)) {
            return;
          }
          update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
        }
      }
    }
    var Vue;
    var Store = function Store2(options) {
      var this$1$1 = this;
      if (options === void 0)
        options = {};
      if (!Vue && false) {
        install(window.Vue);
      }
      var plugins = options.plugins;
      if (plugins === void 0)
        plugins = [];
      var strict = options.strict;
      if (strict === void 0)
        strict = false;
      this._committing = false;
      this._actions = Object.create(null);
      this._actionSubscribers = [];
      this._mutations = Object.create(null);
      this._wrappedGetters = Object.create(null);
      this._modules = new ModuleCollection(options);
      this._modulesNamespaceMap = Object.create(null);
      this._subscribers = [];
      this._watcherVM = new Vue();
      this._makeLocalGettersCache = Object.create(null);
      var store = this;
      var ref = this;
      var dispatch = ref.dispatch;
      var commit = ref.commit;
      this.dispatch = function boundDispatch(type, payload) {
        return dispatch.call(store, type, payload);
      };
      this.commit = function boundCommit(type, payload, options2) {
        return commit.call(store, type, payload, options2);
      };
      this.strict = strict;
      var state = this._modules.root.state;
      installModule(this, state, [], this._modules.root);
      resetStoreVM(this, state);
      plugins.forEach(function(plugin) {
        return plugin(this$1$1);
      });
      var useDevtools = options.devtools !== void 0 ? options.devtools : Vue.config.devtools;
      if (useDevtools) {
        devtoolPlugin(this);
      }
    };
    var prototypeAccessors$1 = {
      state: {
        configurable: true
      }
    };
    prototypeAccessors$1.state.get = function() {
      return this._vm._data.$$state;
    };
    prototypeAccessors$1.state.set = function(v) {
    };
    Store.prototype.commit = function commit(_type, _payload, _options) {
      var this$1$1 = this;
      var ref = unifyObjectStyle(_type, _payload, _options);
      var type = ref.type;
      var payload = ref.payload;
      var mutation = {
        type,
        payload
      };
      var entry = this._mutations[type];
      if (!entry) {
        return;
      }
      this._withCommit(function() {
        entry.forEach(function commitIterator(handler) {
          handler(payload);
        });
      });
      this._subscribers.slice().forEach(function(sub) {
        return sub(mutation, this$1$1.state);
      });
    };
    Store.prototype.dispatch = function dispatch(_type, _payload) {
      var this$1$1 = this;
      var ref = unifyObjectStyle(_type, _payload);
      var type = ref.type;
      var payload = ref.payload;
      var action = {
        type,
        payload
      };
      var entry = this._actions[type];
      if (!entry) {
        return;
      }
      try {
        this._actionSubscribers.slice().filter(function(sub) {
          return sub.before;
        }).forEach(function(sub) {
          return sub.before(action, this$1$1.state);
        });
      } catch (e) {
      }
      var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
        return handler(payload);
      })) : entry[0](payload);
      return new Promise(function(resolve, reject) {
        result.then(function(res) {
          try {
            this$1$1._actionSubscribers.filter(function(sub) {
              return sub.after;
            }).forEach(function(sub) {
              return sub.after(action, this$1$1.state);
            });
          } catch (e) {
          }
          resolve(res);
        }, function(error) {
          try {
            this$1$1._actionSubscribers.filter(function(sub) {
              return sub.error;
            }).forEach(function(sub) {
              return sub.error(action, this$1$1.state, error);
            });
          } catch (e) {
          }
          reject(error);
        });
      });
    };
    Store.prototype.subscribe = function subscribe(fn, options) {
      return genericSubscribe(fn, this._subscribers, options);
    };
    Store.prototype.subscribeAction = function subscribeAction(fn, options) {
      var subs = typeof fn === "function" ? {
        before: fn
      } : fn;
      return genericSubscribe(subs, this._actionSubscribers, options);
    };
    Store.prototype.watch = function watch(getter, cb, options) {
      var this$1$1 = this;
      return this._watcherVM.$watch(function() {
        return getter(this$1$1.state, this$1$1.getters);
      }, cb, options);
    };
    Store.prototype.replaceState = function replaceState(state) {
      var this$1$1 = this;
      this._withCommit(function() {
        this$1$1._vm._data.$$state = state;
      });
    };
    Store.prototype.registerModule = function registerModule(path, rawModule, options) {
      if (options === void 0)
        options = {};
      if (typeof path === "string") {
        path = [path];
      }
      this._modules.register(path, rawModule);
      installModule(this, this.state, path, this._modules.get(path), options.preserveState);
      resetStoreVM(this, this.state);
    };
    Store.prototype.unregisterModule = function unregisterModule(path) {
      var this$1$1 = this;
      if (typeof path === "string") {
        path = [path];
      }
      this._modules.unregister(path);
      this._withCommit(function() {
        var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
        Vue.delete(parentState, path[path.length - 1]);
      });
      resetStore(this);
    };
    Store.prototype.hasModule = function hasModule(path) {
      if (typeof path === "string") {
        path = [path];
      }
      return this._modules.isRegistered(path);
    };
    Store.prototype.hotUpdate = function hotUpdate(newOptions) {
      this._modules.update(newOptions);
      resetStore(this, true);
    };
    Store.prototype._withCommit = function _withCommit(fn) {
      var committing = this._committing;
      this._committing = true;
      fn();
      this._committing = committing;
    };
    Object.defineProperties(Store.prototype, prototypeAccessors$1);
    function genericSubscribe(fn, subs, options) {
      if (subs.indexOf(fn) < 0) {
        options && options.prepend ? subs.unshift(fn) : subs.push(fn);
      }
      return function() {
        var i = subs.indexOf(fn);
        if (i > -1) {
          subs.splice(i, 1);
        }
      };
    }
    function resetStore(store, hot) {
      store._actions = Object.create(null);
      store._mutations = Object.create(null);
      store._wrappedGetters = Object.create(null);
      store._modulesNamespaceMap = Object.create(null);
      var state = store.state;
      installModule(store, state, [], store._modules.root, true);
      resetStoreVM(store, state, hot);
    }
    function resetStoreVM(store, state, hot) {
      var oldVm = store._vm;
      store.getters = {};
      store._makeLocalGettersCache = Object.create(null);
      var wrappedGetters = store._wrappedGetters;
      var computed = {};
      forEachValue(wrappedGetters, function(fn, key) {
        computed[key] = partial(fn, store);
        Object.defineProperty(store.getters, key, {
          get: function() {
            return store._vm[key];
          },
          enumerable: true
        });
      });
      var silent = Vue.config.silent;
      Vue.config.silent = true;
      store._vm = new Vue({
        data: {
          $$state: state
        },
        computed
      });
      Vue.config.silent = silent;
      if (store.strict) {
        enableStrictMode(store);
      }
      if (oldVm) {
        if (hot) {
          store._withCommit(function() {
            oldVm._data.$$state = null;
          });
        }
        Vue.nextTick(function() {
          return oldVm.$destroy();
        });
      }
    }
    function installModule(store, rootState, path, module3, hot) {
      var isRoot = !path.length;
      var namespace = store._modules.getNamespace(path);
      if (module3.namespaced) {
        if (store._modulesNamespaceMap[namespace] && false) {
          console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
        }
        store._modulesNamespaceMap[namespace] = module3;
      }
      if (!isRoot && !hot) {
        var parentState = getNestedState(rootState, path.slice(0, -1));
        var moduleName = path[path.length - 1];
        store._withCommit(function() {
          Vue.set(parentState, moduleName, module3.state);
        });
      }
      var local = module3.context = makeLocalContext(store, namespace, path);
      module3.forEachMutation(function(mutation, key) {
        var namespacedType = namespace + key;
        registerMutation(store, namespacedType, mutation, local);
      });
      module3.forEachAction(function(action, key) {
        var type = action.root ? key : namespace + key;
        var handler = action.handler || action;
        registerAction(store, type, handler, local);
      });
      module3.forEachGetter(function(getter, key) {
        var namespacedType = namespace + key;
        registerGetter(store, namespacedType, getter, local);
      });
      module3.forEachChild(function(child, key) {
        installModule(store, rootState, path.concat(key), child, hot);
      });
    }
    function makeLocalContext(store, namespace, path) {
      var noNamespace = namespace === "";
      var local = {
        dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
          var args = unifyObjectStyle(_type, _payload, _options);
          var payload = args.payload;
          var options = args.options;
          var type = args.type;
          if (!options || !options.root) {
            type = namespace + type;
          }
          return store.dispatch(type, payload);
        },
        commit: noNamespace ? store.commit : function(_type, _payload, _options) {
          var args = unifyObjectStyle(_type, _payload, _options);
          var payload = args.payload;
          var options = args.options;
          var type = args.type;
          if (!options || !options.root) {
            type = namespace + type;
          }
          store.commit(type, payload, options);
        }
      };
      Object.defineProperties(local, {
        getters: {
          get: noNamespace ? function() {
            return store.getters;
          } : function() {
            return makeLocalGetters(store, namespace);
          }
        },
        state: {
          get: function() {
            return getNestedState(store.state, path);
          }
        }
      });
      return local;
    }
    function makeLocalGetters(store, namespace) {
      if (!store._makeLocalGettersCache[namespace]) {
        var gettersProxy = {};
        var splitPos = namespace.length;
        Object.keys(store.getters).forEach(function(type) {
          if (type.slice(0, splitPos) !== namespace) {
            return;
          }
          var localType = type.slice(splitPos);
          Object.defineProperty(gettersProxy, localType, {
            get: function() {
              return store.getters[type];
            },
            enumerable: true
          });
        });
        store._makeLocalGettersCache[namespace] = gettersProxy;
      }
      return store._makeLocalGettersCache[namespace];
    }
    function registerMutation(store, type, handler, local) {
      var entry = store._mutations[type] || (store._mutations[type] = []);
      entry.push(function wrappedMutationHandler(payload) {
        handler.call(store, local.state, payload);
      });
    }
    function registerAction(store, type, handler, local) {
      var entry = store._actions[type] || (store._actions[type] = []);
      entry.push(function wrappedActionHandler(payload) {
        var res = handler.call(store, {
          dispatch: local.dispatch,
          commit: local.commit,
          getters: local.getters,
          state: local.state,
          rootGetters: store.getters,
          rootState: store.state
        }, payload);
        if (!isPromise(res)) {
          res = Promise.resolve(res);
        }
        if (store._devtoolHook) {
          return res.catch(function(err) {
            store._devtoolHook.emit("vuex:error", err);
            throw err;
          });
        } else {
          return res;
        }
      });
    }
    function registerGetter(store, type, rawGetter, local) {
      if (store._wrappedGetters[type]) {
        return;
      }
      store._wrappedGetters[type] = function wrappedGetter(store2) {
        return rawGetter(local.state, local.getters, store2.state, store2.getters);
      };
    }
    function enableStrictMode(store) {
      store._vm.$watch(function() {
        return this._data.$$state;
      }, function() {
      }, {
        deep: true,
        sync: true
      });
    }
    function getNestedState(state, path) {
      return path.reduce(function(state2, key) {
        return state2[key];
      }, state);
    }
    function unifyObjectStyle(type, payload, options) {
      if (isObject(type) && type.type) {
        options = payload;
        payload = type;
        type = type.type;
      }
      return {
        type,
        payload,
        options
      };
    }
    function install(_Vue) {
      if (Vue && _Vue === Vue) {
        return;
      }
      Vue = _Vue;
      applyMixin(Vue);
    }
    var mapState = normalizeNamespace(function(namespace, states) {
      var res = {};
      normalizeMap(states).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedState() {
          var state = this.$store.state;
          var getters = this.$store.getters;
          if (namespace) {
            var module3 = getModuleByNamespace(this.$store, "mapState", namespace);
            if (!module3) {
              return;
            }
            state = module3.context.state;
            getters = module3.context.getters;
          }
          return typeof val === "function" ? val.call(this, state, getters) : state[val];
        };
        res[key].vuex = true;
      });
      return res;
    });
    var mapMutations = normalizeNamespace(function(namespace, mutations) {
      var res = {};
      normalizeMap(mutations).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedMutation() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var commit = this.$store.commit;
          if (namespace) {
            var module3 = getModuleByNamespace(this.$store, "mapMutations", namespace);
            if (!module3) {
              return;
            }
            commit = module3.context.commit;
          }
          return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
        };
      });
      return res;
    });
    var mapGetters = normalizeNamespace(function(namespace, getters) {
      var res = {};
      normalizeMap(getters).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        val = namespace + val;
        res[key] = function mappedGetter() {
          if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
            return;
          }
          return this.$store.getters[val];
        };
        res[key].vuex = true;
      });
      return res;
    });
    var mapActions = normalizeNamespace(function(namespace, actions) {
      var res = {};
      normalizeMap(actions).forEach(function(ref) {
        var key = ref.key;
        var val = ref.val;
        res[key] = function mappedAction() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          var dispatch = this.$store.dispatch;
          if (namespace) {
            var module3 = getModuleByNamespace(this.$store, "mapActions", namespace);
            if (!module3) {
              return;
            }
            dispatch = module3.context.dispatch;
          }
          return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
        };
      });
      return res;
    });
    var createNamespacedHelpers = function(namespace) {
      return {
        mapState: mapState.bind(null, namespace),
        mapGetters: mapGetters.bind(null, namespace),
        mapMutations: mapMutations.bind(null, namespace),
        mapActions: mapActions.bind(null, namespace)
      };
    };
    function normalizeMap(map) {
      if (!isValidMap(map)) {
        return [];
      }
      return Array.isArray(map) ? map.map(function(key) {
        return {
          key,
          val: key
        };
      }) : Object.keys(map).map(function(key) {
        return {
          key,
          val: map[key]
        };
      });
    }
    function isValidMap(map) {
      return Array.isArray(map) || isObject(map);
    }
    function normalizeNamespace(fn) {
      return function(namespace, map) {
        if (typeof namespace !== "string") {
          map = namespace;
          namespace = "";
        } else if (namespace.charAt(namespace.length - 1) !== "/") {
          namespace += "/";
        }
        return fn(namespace, map);
      };
    }
    function getModuleByNamespace(store, helper, namespace) {
      var module3 = store._modulesNamespaceMap[namespace];
      return module3;
    }
    function createLogger(ref) {
      if (ref === void 0)
        ref = {};
      var collapsed = ref.collapsed;
      if (collapsed === void 0)
        collapsed = true;
      var filter = ref.filter;
      if (filter === void 0)
        filter = function(mutation, stateBefore, stateAfter) {
          return true;
        };
      var transformer = ref.transformer;
      if (transformer === void 0)
        transformer = function(state) {
          return state;
        };
      var mutationTransformer = ref.mutationTransformer;
      if (mutationTransformer === void 0)
        mutationTransformer = function(mut) {
          return mut;
        };
      var actionFilter = ref.actionFilter;
      if (actionFilter === void 0)
        actionFilter = function(action, state) {
          return true;
        };
      var actionTransformer = ref.actionTransformer;
      if (actionTransformer === void 0)
        actionTransformer = function(act) {
          return act;
        };
      var logMutations = ref.logMutations;
      if (logMutations === void 0)
        logMutations = true;
      var logActions = ref.logActions;
      if (logActions === void 0)
        logActions = true;
      var logger = ref.logger;
      if (logger === void 0)
        logger = console;
      return function(store) {
        var prevState = deepCopy(store.state);
        if (typeof logger === "undefined") {
          return;
        }
        if (logMutations) {
          store.subscribe(function(mutation, state) {
            var nextState = deepCopy(state);
            if (filter(mutation, prevState, nextState)) {
              var formattedTime = getFormattedTime();
              var formattedMutation = mutationTransformer(mutation);
              var message = "mutation " + mutation.type + formattedTime;
              startMessage(logger, message, collapsed);
              logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
              logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
              logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
              endMessage(logger);
            }
            prevState = nextState;
          });
        }
        if (logActions) {
          store.subscribeAction(function(action, state) {
            if (actionFilter(action, state)) {
              var formattedTime = getFormattedTime();
              var formattedAction = actionTransformer(action);
              var message = "action " + action.type + formattedTime;
              startMessage(logger, message, collapsed);
              logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
              endMessage(logger);
            }
          });
        }
      };
    }
    function startMessage(logger, message, collapsed) {
      var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
      try {
        startMessage2.call(logger, message);
      } catch (e) {
        logger.log(message);
      }
    }
    function endMessage(logger) {
      try {
        logger.groupEnd();
      } catch (e) {
        logger.log("\u2014\u2014 log end \u2014\u2014");
      }
    }
    function getFormattedTime() {
      var time = new Date();
      return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
    }
    function repeat(str, times) {
      return new Array(times + 1).join(str);
    }
    function pad(num, maxLength) {
      return repeat("0", maxLength - num.toString().length) + num;
    }
    var index_cjs = {
      Store,
      install,
      version: "3.6.2",
      mapState,
      mapMutations,
      mapGetters,
      mapActions,
      createNamespacedHelpers,
      createLogger
    };
    module2.exports = index_cjs;
  },
  function(module2, exports, __webpack_require__) {
    /*!
     * vue-client-only v0.0.0-semantic-release
     * (c) 2021-present egoist <0x142857@gmail.com>
     * Released under the MIT License.
     */
    var index = {
      name: "ClientOnly",
      functional: true,
      props: {
        placeholder: String,
        placeholderTag: {
          type: String,
          default: "div"
        }
      },
      render: function render(h, ref) {
        var parent = ref.parent;
        var slots = ref.slots;
        var props = ref.props;
        var ref$1 = slots();
        var defaultSlot = ref$1.default;
        if (defaultSlot === void 0)
          defaultSlot = [];
        var placeholderSlot = ref$1.placeholder;
        if (parent._isMounted) {
          return defaultSlot;
        }
        parent.$once("hook:mounted", function() {
          parent.$forceUpdate();
        });
        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
          return h(props.placeholderTag, {
            class: ["client-only-placeholder"]
          }, props.placeholder || placeholderSlot);
        }
        return defaultSlot.length > 0 ? defaultSlot.map(function() {
          return h(false);
        }) : h(false);
      }
    };
    module2.exports = index;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return defineUserProvider;
    });
    __webpack_require__.d(__webpack_exports__, "b", function() {
      return useUserProvider;
    });
    var capi_legacy = __webpack_require__(4);
    var external_axios_ = __webpack_require__(49);
    var external_axios_default = /* @__PURE__ */ __webpack_require__.n(external_axios_);
    const options = {};
    {
      options.baseURL = `http://${process.env.HOST || "0.0.0.0"}:${process.env.PORT || 3e3}`;
    }
    var axios = external_axios_default.a.create(options);
    const userProviderKey = "userProvider";
    const userProvider = () => {
      const context = Object(capi_legacy["g"])();
      const store = Object(capi_legacy["j"])();
      const route = Object(capi_legacy["h"])();
      const _sign = async (_userId) => {
        await store.dispatch("setUser", {
          document_id: _userId
        });
        _updateIsSigned();
      };
      const _updateIsSigned = async () => {
        await axios.post("/api/v1/user/auth");
        const isSigned2 = context.$cookies.get("accessToken").length >= 1 && store.getters.userId.length >= 1;
        store.dispatch("setIsSigned", isSigned2);
      };
      const get = async () => {
        return await axios.get("/api/v1/user");
      };
      const update = async (_data) => {
        return await axios.post("/api/v1/user/update", {
          params: {
            data: _data
          }
        });
      };
      const signIn = async (_email, _password) => {
        var _resSignIn$data$user, _resSignIn$data$user2;
        const resSignIn = await axios.post("/api/v1/user/sign_in", {
          params: {
            email: _email,
            password: _password
          }
        });
        if (!resSignIn || resSignIn.status !== 200) {
          return resSignIn;
        }
        if (!resSignIn.data.canSignIn || !((_resSignIn$data$user = resSignIn.data.user) !== null && _resSignIn$data$user !== void 0 && _resSignIn$data$user.document_id)) {
          return resSignIn;
        }
        await _sign((_resSignIn$data$user2 = resSignIn.data.user) === null || _resSignIn$data$user2 === void 0 ? void 0 : _resSignIn$data$user2.document_id);
        return resSignIn;
      };
      const signUp = async (_email, _password, _data = {}) => {
        var _resSignUp$data$user;
        const resSignUp = await axios.post("/api/v1/user/sign_up", {
          params: {
            email: _email,
            password: _password,
            data: _data
          }
        });
        await _sign((_resSignUp$data$user = resSignUp.data.user) === null || _resSignUp$data$user === void 0 ? void 0 : _resSignUp$data$user.document_id);
        return resSignUp;
      };
      const signOut = () => {
        store.dispatch("signOut");
        axios.post("/api/v1/user/sign_out");
      };
      const resetPasswordEmail = (_email) => {
        return axios.post("/api/v1/user/reset_password", {
          params: {
            email: _email
          }
        });
      };
      const compareToken = () => {
        const email = route.value.query.email;
        const token = route.value.query.token;
        if (!email || !token)
          context.redirect(301, "/");
        Object(capi_legacy["f"])(async () => {
          var _resApi$data;
          const resApi = await axios.post("/api/v1/user/compare_token", {
            params: {
              email,
              token
            }
          });
          if (!(resApi !== null && resApi !== void 0 && (_resApi$data = resApi.data) !== null && _resApi$data !== void 0 && _resApi$data.isCorrect)) {
            context.redirect(301, "/");
          }
        });
      };
      const updatePassword = async (_email, _password) => {
        return await axios.post("/api/v1/user/update_password", {
          params: {
            email: _email,
            password: _password
          }
        });
      };
      const isSigned = () => {
        return store.getters.isSigned || false;
      };
      return {
        get,
        signIn,
        signUp,
        update,
        isSigned,
        signOut,
        resetPasswordEmail,
        compareToken,
        updatePassword
      };
    };
    const UserProviderKey = Symbol(userProviderKey);
    const defineUserProvider = () => {
      return Object(capi_legacy["c"])(UserProviderKey, userProvider());
    };
    const useUserProvider = () => {
      return {
        userProvider: Object(capi_legacy["b"])(UserProviderKey)
      };
    };
  },
  function(module2, exports) {
    module2.exports = require$$1;
  },
  function(module2, exports) {
    module2.exports = require$$2;
  },
  function(module2, exports) {
    module2.exports = require$$3;
  },
  function(module2, exports) {
    module2.exports = require$$4;
  },
  function(module2, exports) {
    module2.exports = require$$5;
  },
  function(module2, exports) {
    module2.exports = require$$6;
  },
  function(module2, exports) {
    module2.exports = require$$7;
  },
  function(module2, exports) {
    module2.exports = require$$8;
  },
  function(module2, exports) {
    module2.exports = require$$9;
  },
  function(module2, exports) {
    module2.exports = require$$10;
  },
  function(module2, exports) {
    module2.exports = require$$11;
  },
  function(module2, exports) {
    module2.exports = require$$12;
  },
  function(module2, exports) {
    module2.exports = require$$13;
  },
  function(module2, exports) {
    module2.exports = require$$14;
  },
  function(module2, exports) {
    module2.exports = require$$15;
  },
  function(module2, exports) {
    module2.exports = require$$16;
  },
  function(module2, exports) {
    module2.exports = require$$17;
  },
  function(module2, exports) {
    module2.exports = require$$18;
  },
  function(module2, exports) {
    module2.exports = require$$19;
  },
  function(module2, exports) {
    module2.exports = require$$20;
  },
  function(module2, exports) {
    module2.exports = require$$21;
  },
  function(module2, exports) {
    module2.exports = require$$22;
  },
  function(module2, exports) {
    module2.exports = require$$23;
  },
  function(module2, exports) {
    module2.exports = require$$24;
  },
  function(module2, exports) {
    module2.exports = require$$25;
  },
  function(module2, exports) {
    module2.exports = require$$26;
  },
  function(module2, exports) {
    module2.exports = require$$27;
  },
  function(module2, exports) {
    module2.exports = require$$28;
  },
  function(module2, exports) {
    module2.exports = require$$29;
  },
  function(module2, exports) {
    module2.exports = require$$30;
  },
  function(module2, exports, __webpack_require__) {
    __webpack_require__(0);
    var content = __webpack_require__(56);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(8).default;
    module2.exports.__inject__ = function(context) {
      add("e7725520", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    __webpack_require__(0);
    var content = __webpack_require__(58);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(8).default;
    module2.exports.__inject__ = function(context) {
      add("0410f4a0", content, true, context);
    };
  },
  function(module2, exports, __webpack_require__) {
    __webpack_require__(0);
    var content = __webpack_require__(62);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    var add = __webpack_require__(8).default;
    module2.exports.__inject__ = function(context) {
      add("52a3827c", content, true, context);
    };
  },
  function(module2, exports) {
  },
  function(module2, exports, __webpack_require__) {
    /**
     * vue-meta v2.4.0
     * (c) 2020
     * - Declan de Wet
     * - Sébastien Chopin (@Atinux)
     * - Pim (@pimlie)
     * - All the amazing contributors
     * @license MIT
     */
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var deepmerge = _interopDefault(__webpack_require__(54));
    var version = "2.4.0";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;
      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function() {
          };
          return {
            s: F,
            n: function() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function(e) {
              throw e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return {
        s: function() {
          it = o[Symbol.iterator]();
        },
        n: function() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function(e) {
          didErr = true;
          err = e;
        },
        f: function() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        }
      };
    }
    function isArray(arg) {
      return Array.isArray(arg);
    }
    function isUndefined(arg) {
      return typeof arg === "undefined";
    }
    function isObject(arg) {
      return _typeof(arg) === "object";
    }
    function isPureObject(arg) {
      return _typeof(arg) === "object" && arg !== null;
    }
    function isFunction(arg) {
      return typeof arg === "function";
    }
    function isString(arg) {
      return typeof arg === "string";
    }
    function hasGlobalWindowFn() {
      try {
        return !isUndefined(window);
      } catch (e) {
        return false;
      }
    }
    var hasGlobalWindow = hasGlobalWindowFn();
    var _global = hasGlobalWindow ? window : commonjsGlobal;
    var console2 = _global.console || {};
    function warn(str) {
      if (!console2 || !console2.warn) {
        return;
      }
      console2.warn(str);
    }
    var showWarningNotSupported = function showWarningNotSupported2() {
      return warn("This vue app/component has no vue-meta configuration");
    };
    var defaultInfo = {
      title: void 0,
      titleChunk: "",
      titleTemplate: "%s",
      htmlAttrs: {},
      bodyAttrs: {},
      headAttrs: {},
      base: [],
      link: [],
      meta: [],
      style: [],
      script: [],
      noscript: [],
      __dangerouslyDisableSanitizers: [],
      __dangerouslyDisableSanitizersByTagID: {}
    };
    var rootConfigKey = "_vueMeta";
    var keyName = "metaInfo";
    var attribute = "data-vue-meta";
    var ssrAttribute = "data-vue-meta-server-rendered";
    var tagIDKeyName = "vmid";
    var metaTemplateKeyName = "template";
    var contentKeyName = "content";
    var ssrAppId = "ssr";
    var debounceWait = 10;
    var waitOnDestroyed = true;
    var defaultOptions = {
      keyName,
      attribute,
      ssrAttribute,
      tagIDKeyName,
      contentKeyName,
      metaTemplateKeyName,
      waitOnDestroyed,
      debounceWait,
      ssrAppId
    };
    var defaultInfoKeys = Object.keys(defaultInfo);
    var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]];
    var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], "changed"].concat(disableOptionKeys);
    var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]];
    var tagsSupportingOnload = ["link", "style", "script"];
    var tagsWithoutEndTag = ["base", "meta", "link"];
    var tagsWithInnerContent = ["noscript", "script", "style"];
    var tagAttributeAsInnerContent = ["innerHTML", "cssText", "json"];
    var tagProperties = ["once", "skip", "template"];
    var commonDataAttributes = ["body", "pbody"];
    var booleanHtmlAttributes = ["allowfullscreen", "amp", "amp-boilerplate", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "truespeed", "typemustmatch", "visible"];
    var batchId = null;
    function triggerUpdate(_ref, rootVm, hookName) {
      var debounceWait2 = _ref.debounceWait;
      if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === "watcher")) {
        rootVm[rootConfigKey].initialized = null;
      }
      if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
        batchUpdate(function() {
          return void rootVm.$meta().refresh();
        }, debounceWait2);
      }
    }
    function batchUpdate(callback, timeout) {
      timeout = timeout === void 0 ? 10 : timeout;
      if (!timeout) {
        callback();
        return;
      }
      clearTimeout(batchId);
      batchId = setTimeout(function() {
        callback();
      }, timeout);
      return batchId;
    }
    function find(array, predicate, thisArg) {
      if (!Array.prototype.find) {
        for (var idx = 0; idx < array.length; idx++) {
          if (predicate.call(thisArg, array[idx], idx, array)) {
            return array[idx];
          }
        }
        return;
      }
      return array.find(predicate, thisArg);
    }
    function findIndex(array, predicate, thisArg) {
      if (!Array.prototype.findIndex) {
        for (var idx = 0; idx < array.length; idx++) {
          if (predicate.call(thisArg, array[idx], idx, array)) {
            return idx;
          }
        }
        return -1;
      }
      return array.findIndex(predicate, thisArg);
    }
    function toArray(arg) {
      if (!Array.from) {
        return Array.prototype.slice.call(arg);
      }
      return Array.from(arg);
    }
    function includes(array, value) {
      if (!Array.prototype.includes) {
        for (var idx in array) {
          if (array[idx] === value) {
            return true;
          }
        }
        return false;
      }
      return array.includes(value);
    }
    var querySelector = function querySelector2(arg, el) {
      return (el || document).querySelectorAll(arg);
    };
    function getTag(tags, tag) {
      if (!tags[tag]) {
        tags[tag] = document.getElementsByTagName(tag)[0];
      }
      return tags[tag];
    }
    function getElementsKey(_ref) {
      var body = _ref.body, pbody = _ref.pbody;
      return body ? "body" : pbody ? "pbody" : "head";
    }
    function queryElements(parentNode, _ref2, attributes) {
      var appId2 = _ref2.appId, attribute2 = _ref2.attribute, type = _ref2.type, tagIDKeyName2 = _ref2.tagIDKeyName;
      attributes = attributes || {};
      var queries = ["".concat(type, "[").concat(attribute2, '="').concat(appId2, '"]'), "".concat(type, "[data-").concat(tagIDKeyName2, "]")].map(function(query) {
        for (var key in attributes) {
          var val = attributes[key];
          var attributeValue = val && val !== true ? '="'.concat(val, '"') : "";
          query += "[data-".concat(key).concat(attributeValue, "]");
        }
        return query;
      });
      return toArray(querySelector(queries.join(", "), parentNode));
    }
    function removeElementsByAppId(_ref3, appId2) {
      var attribute2 = _ref3.attribute;
      toArray(querySelector("[".concat(attribute2, '="').concat(appId2, '"]'))).map(function(el) {
        return el.remove();
      });
    }
    function removeAttribute(el, attributeName) {
      el.removeAttribute(attributeName);
    }
    function hasMetaInfo(vm) {
      vm = vm || this;
      return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
    }
    function inMetaInfoBranch(vm) {
      vm = vm || this;
      return vm && !isUndefined(vm[rootConfigKey]);
    }
    function pause(rootVm, refresh2) {
      rootVm[rootConfigKey].pausing = true;
      return function() {
        return resume(rootVm, refresh2);
      };
    }
    function resume(rootVm, refresh2) {
      rootVm[rootConfigKey].pausing = false;
      if (refresh2 || refresh2 === void 0) {
        return rootVm.$meta().refresh();
      }
    }
    function addNavGuards(rootVm) {
      var router = rootVm.$router;
      if (rootVm[rootConfigKey].navGuards || !router) {
        return;
      }
      rootVm[rootConfigKey].navGuards = true;
      router.beforeEach(function(to, from, next) {
        pause(rootVm);
        next();
      });
      router.afterEach(function() {
        rootVm.$nextTick(function() {
          var _resume = resume(rootVm), metaInfo = _resume.metaInfo;
          if (metaInfo && isFunction(metaInfo.afterNavigation)) {
            metaInfo.afterNavigation(metaInfo);
          }
        });
      });
    }
    var appId = 1;
    function createMixin(Vue, options) {
      var updateOnLifecycleHook = ["activated", "deactivated", "beforeMount"];
      var wasServerRendered = false;
      return {
        beforeCreate: function beforeCreate() {
          var _this2 = this;
          var rootKey = "$root";
          var $root = this[rootKey];
          var $options = this.$options;
          var devtoolsEnabled = Vue.config.devtools;
          Object.defineProperty(this, "_hasMetaInfo", {
            configurable: true,
            get: function get() {
              if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
                warn("VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead");
                $root[rootConfigKey].deprecationWarningShown = true;
              }
              return hasMetaInfo(this);
            }
          });
          if (this === $root) {
            $root.$once("hook:beforeMount", function() {
              wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute("data-server-rendered");
              if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
                var htmlTag = getTag({}, "html");
                wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
              }
            });
          }
          if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
            return;
          }
          if (!$root[rootConfigKey]) {
            $root[rootConfigKey] = {
              appId
            };
            appId++;
            if (devtoolsEnabled && $root.$options[options.keyName]) {
              this.$nextTick(function() {
                var child = find($root.$children, function(c) {
                  return c.$vnode && c.$vnode.fnOptions;
                });
                if (child && child.$vnode.fnOptions[options.keyName]) {
                  warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
                }
              });
            }
          }
          if (!this[rootConfigKey]) {
            this[rootConfigKey] = true;
            var parent = this.$parent;
            while (parent && parent !== $root) {
              if (isUndefined(parent[rootConfigKey])) {
                parent[rootConfigKey] = false;
              }
              parent = parent.$parent;
            }
          }
          if (isFunction($options[options.keyName])) {
            $options.computed = $options.computed || {};
            $options.computed.$metaInfo = $options[options.keyName];
            if (!this.$isServer) {
              this.$on("hook:created", function() {
                this.$watch("$metaInfo", function() {
                  triggerUpdate(options, this[rootKey], "watcher");
                });
              });
            }
          }
          if (isUndefined($root[rootConfigKey].initialized)) {
            $root[rootConfigKey].initialized = this.$isServer;
            if (!$root[rootConfigKey].initialized) {
              if (!$root[rootConfigKey].initializedSsr) {
                $root[rootConfigKey].initializedSsr = true;
                this.$on("hook:beforeMount", function() {
                  var $root2 = this[rootKey];
                  if (wasServerRendered) {
                    $root2[rootConfigKey].appId = options.ssrAppId;
                  }
                });
              }
              this.$on("hook:mounted", function() {
                var $root2 = this[rootKey];
                if ($root2[rootConfigKey].initialized) {
                  return;
                }
                $root2[rootConfigKey].initializing = true;
                this.$nextTick(function() {
                  var _$root$$meta$refresh = $root2.$meta().refresh(), tags = _$root$$meta$refresh.tags, metaInfo = _$root$$meta$refresh.metaInfo;
                  if (tags === false && $root2[rootConfigKey].initialized === null) {
                    this.$nextTick(function() {
                      return triggerUpdate(options, $root2, "init");
                    });
                  }
                  $root2[rootConfigKey].initialized = true;
                  delete $root2[rootConfigKey].initializing;
                  if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                    addNavGuards($root2);
                  }
                });
              });
              if (options.refreshOnceOnNavigation) {
                addNavGuards($root);
              }
            }
          }
          this.$on("hook:destroyed", function() {
            var _this = this;
            if (!this.$parent || !hasMetaInfo(this)) {
              return;
            }
            delete this._hasMetaInfo;
            this.$nextTick(function() {
              if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
                triggerUpdate(options, _this.$root, "destroyed");
                return;
              }
              var interval = setInterval(function() {
                if (_this.$el && _this.$el.offsetParent !== null) {
                  return;
                }
                clearInterval(interval);
                triggerUpdate(options, _this.$root, "destroyed");
              }, 50);
            });
          });
          if (this.$isServer) {
            return;
          }
          updateOnLifecycleHook.forEach(function(lifecycleHook) {
            _this2.$on("hook:".concat(lifecycleHook), function() {
              triggerUpdate(options, this[rootKey], lifecycleHook);
            });
          });
        }
      };
    }
    function setOptions(options) {
      options = isObject(options) ? options : {};
      return {
        keyName: options["keyName"] || defaultOptions.keyName,
        attribute: options["attribute"] || defaultOptions.attribute,
        ssrAttribute: options["ssrAttribute"] || defaultOptions.ssrAttribute,
        tagIDKeyName: options["tagIDKeyName"] || defaultOptions.tagIDKeyName,
        contentKeyName: options["contentKeyName"] || defaultOptions.contentKeyName,
        metaTemplateKeyName: options["metaTemplateKeyName"] || defaultOptions.metaTemplateKeyName,
        debounceWait: isUndefined(options["debounceWait"]) ? defaultOptions.debounceWait : options["debounceWait"],
        waitOnDestroyed: isUndefined(options["waitOnDestroyed"]) ? defaultOptions.waitOnDestroyed : options["waitOnDestroyed"],
        ssrAppId: options["ssrAppId"] || defaultOptions.ssrAppId,
        refreshOnceOnNavigation: !!options["refreshOnceOnNavigation"]
      };
    }
    function getOptions(options) {
      var optionsCopy = {};
      for (var key in options) {
        optionsCopy[key] = options[key];
      }
      return optionsCopy;
    }
    function ensureIsArray(arg, key) {
      if (!key || !isObject(arg)) {
        return isArray(arg) ? arg : [];
      }
      if (!isArray(arg[key])) {
        arg[key] = [];
      }
      return arg;
    }
    var serverSequences = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"], [/'/g, "&#x27;"]];
    var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, '"'], [/'/g, "'"]];
    function escape(info, options, escapeOptions, escapeKeys) {
      var tagIDKeyName2 = options.tagIDKeyName;
      var _escapeOptions$doEsca = escapeOptions.doEscape, doEscape = _escapeOptions$doEsca === void 0 ? function(v) {
        return v;
      } : _escapeOptions$doEsca;
      var escaped = {};
      for (var key in info) {
        var value = info[key];
        if (includes(metaInfoOptionKeys, key)) {
          escaped[key] = value;
          continue;
        }
        var disableKey = disableOptionKeys[0];
        if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
          escaped[key] = value;
          continue;
        }
        var tagId = info[tagIDKeyName2];
        if (tagId) {
          disableKey = disableOptionKeys[1];
          if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
            escaped[key] = value;
            continue;
          }
        }
        if (isString(value)) {
          escaped[key] = doEscape(value);
        } else if (isArray(value)) {
          escaped[key] = value.map(function(v) {
            if (isPureObject(v)) {
              return escape(v, options, escapeOptions, true);
            }
            return doEscape(v);
          });
        } else if (isPureObject(value)) {
          escaped[key] = escape(value, options, escapeOptions, true);
        } else {
          escaped[key] = value;
        }
        if (escapeKeys) {
          var escapedKey = doEscape(key);
          if (key !== escapedKey) {
            escaped[escapedKey] = escaped[key];
            delete escaped[key];
          }
        }
      }
      return escaped;
    }
    function escapeMetaInfo(options, info, escapeSequences) {
      escapeSequences = escapeSequences || [];
      var escapeOptions = {
        doEscape: function doEscape(value) {
          return escapeSequences.reduce(function(val, seq) {
            return val.replace(seq[0], seq[1]);
          }, value);
        }
      };
      disableOptionKeys.forEach(function(disableKey, index2) {
        if (index2 === 0) {
          ensureIsArray(info, disableKey);
        } else if (index2 === 1) {
          for (var key in info[disableKey]) {
            ensureIsArray(info[disableKey], key);
          }
        }
        escapeOptions[disableKey] = info[disableKey];
      });
      return escape(info, options, escapeOptions);
    }
    function applyTemplate(_ref, headObject, template, chunk) {
      var component = _ref.component, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
      if (template === true || headObject[metaTemplateKeyName2] === true) {
        return false;
      }
      if (isUndefined(template) && headObject[metaTemplateKeyName2]) {
        template = headObject[metaTemplateKeyName2];
        headObject[metaTemplateKeyName2] = true;
      }
      if (!template) {
        delete headObject[metaTemplateKeyName2];
        return false;
      }
      if (isUndefined(chunk)) {
        chunk = headObject[contentKeyName2];
      }
      headObject[contentKeyName2] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
      return true;
    }
    function _arrayMerge(_ref, target, source) {
      var component = _ref.component, tagIDKeyName2 = _ref.tagIDKeyName, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
      var destination = [];
      if (!target.length && !source.length) {
        return destination;
      }
      target.forEach(function(targetItem, targetIndex) {
        if (!targetItem[tagIDKeyName2]) {
          destination.push(targetItem);
          return;
        }
        var sourceIndex = findIndex(source, function(item) {
          return item[tagIDKeyName2] === targetItem[tagIDKeyName2];
        });
        var sourceItem = source[sourceIndex];
        if (sourceIndex === -1) {
          destination.push(targetItem);
          return;
        }
        if (contentKeyName2 in sourceItem && sourceItem[contentKeyName2] === void 0 || "innerHTML" in sourceItem && sourceItem.innerHTML === void 0) {
          destination.push(targetItem);
          source.splice(sourceIndex, 1);
          return;
        }
        if (sourceItem[contentKeyName2] === null || sourceItem.innerHTML === null) {
          source.splice(sourceIndex, 1);
          return;
        }
        var targetTemplate = targetItem[metaTemplateKeyName2];
        if (!targetTemplate) {
          return;
        }
        var sourceTemplate = sourceItem[metaTemplateKeyName2];
        if (!sourceTemplate) {
          applyTemplate({
            component,
            metaTemplateKeyName: metaTemplateKeyName2,
            contentKeyName: contentKeyName2
          }, sourceItem, targetTemplate);
          sourceItem.template = true;
          return;
        }
        if (!sourceItem[contentKeyName2]) {
          applyTemplate({
            component,
            metaTemplateKeyName: metaTemplateKeyName2,
            contentKeyName: contentKeyName2
          }, sourceItem, void 0, targetItem[contentKeyName2]);
        }
      });
      return destination.concat(source);
    }
    var warningShown = false;
    function merge(target, source, options) {
      options = options || {};
      if (source.title === void 0) {
        delete source.title;
      }
      metaInfoAttributeKeys.forEach(function(attrKey) {
        if (!source[attrKey]) {
          return;
        }
        for (var key in source[attrKey]) {
          if (key in source[attrKey] && source[attrKey][key] === void 0) {
            if (includes(booleanHtmlAttributes, key) && !warningShown) {
              warn("VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details");
              warningShown = true;
            }
            delete source[attrKey][key];
          }
        }
      });
      return deepmerge(target, source, {
        arrayMerge: function arrayMerge(t, s) {
          return _arrayMerge(options, t, s);
        }
      });
    }
    function getComponentMetaInfo(options, component) {
      return getComponentOption(options || {}, component, defaultInfo);
    }
    function getComponentOption(options, component, result) {
      result = result || {};
      if (component._inactive) {
        return result;
      }
      options = options || {};
      var _options = options, keyName2 = _options.keyName;
      var $metaInfo = component.$metaInfo, $options = component.$options, $children = component.$children;
      if ($options[keyName2]) {
        var data = $metaInfo || $options[keyName2];
        if (isObject(data)) {
          result = merge(result, data, options);
        }
      }
      if ($children.length) {
        $children.forEach(function(childComponent) {
          if (!inMetaInfoBranch(childComponent)) {
            return;
          }
          result = getComponentOption(options, childComponent, result);
        });
      }
      return result;
    }
    var callbacks = [];
    function isDOMComplete(d) {
      return (d || document).readyState === "complete";
    }
    function addCallback(query, callback) {
      if (arguments.length === 1) {
        callback = query;
        query = "";
      }
      callbacks.push([query, callback]);
    }
    function addCallbacks(_ref, type, tags, autoAddListeners) {
      var tagIDKeyName2 = _ref.tagIDKeyName;
      var hasAsyncCallback = false;
      tags.forEach(function(tag) {
        if (!tag[tagIDKeyName2] || !tag.callback) {
          return;
        }
        hasAsyncCallback = true;
        addCallback("".concat(type, "[data-").concat(tagIDKeyName2, '="').concat(tag[tagIDKeyName2], '"]'), tag.callback);
      });
      if (!autoAddListeners || !hasAsyncCallback) {
        return hasAsyncCallback;
      }
      return addListeners();
    }
    function addListeners() {
      if (isDOMComplete()) {
        applyCallbacks();
        return;
      }
      document.onreadystatechange = function() {
        applyCallbacks();
      };
    }
    function applyCallbacks(matchElement) {
      callbacks.forEach(function(args) {
        var query = args[0];
        var callback = args[1];
        var selector = "".concat(query, '[onload="this.__vm_l=1"]');
        var elements = [];
        if (!matchElement) {
          elements = toArray(querySelector(selector));
        }
        if (matchElement && matchElement.matches(selector)) {
          elements = [matchElement];
        }
        elements.forEach(function(element) {
          if (element.__vm_cb) {
            return;
          }
          var onload = function onload2() {
            element.__vm_cb = true;
            removeAttribute(element, "onload");
            callback(element);
          };
          if (element.__vm_l) {
            onload();
            return;
          }
          if (!element.__vm_ev) {
            element.__vm_ev = true;
            element.addEventListener("load", onload);
          }
        });
      });
    }
    var attributeMap = {};
    function updateAttribute(appId2, options, type, attrs, tag) {
      var _ref = options || {}, attribute2 = _ref.attribute;
      var vueMetaAttrString = tag.getAttribute(attribute2);
      if (vueMetaAttrString) {
        attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
        removeAttribute(tag, attribute2);
      }
      var data = attributeMap[type] || {};
      var toUpdate = [];
      for (var attr in data) {
        if (data[attr] !== void 0 && appId2 in data[attr]) {
          toUpdate.push(attr);
          if (!attrs[attr]) {
            delete data[attr][appId2];
          }
        }
      }
      for (var _attr in attrs) {
        var attrData = data[_attr];
        if (!attrData || attrData[appId2] !== attrs[_attr]) {
          toUpdate.push(_attr);
          if (attrs[_attr] !== void 0) {
            data[_attr] = data[_attr] || {};
            data[_attr][appId2] = attrs[_attr];
          }
        }
      }
      for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
        var _attr2 = _toUpdate[_i];
        var _attrData = data[_attr2];
        var attrValues = [];
        for (var _appId in _attrData) {
          Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
        }
        if (attrValues.length) {
          var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? "" : attrValues.filter(function(v) {
            return v !== void 0;
          }).join(" ");
          tag.setAttribute(_attr2, attrValue);
        } else {
          removeAttribute(tag, _attr2);
        }
      }
      attributeMap[type] = data;
    }
    function updateTitle(title) {
      if (!title && title !== "") {
        return;
      }
      document.title = title;
    }
    function updateTag(appId2, options, type, tags, head, body) {
      var _ref = options || {}, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
      var dataAttributes = commonDataAttributes.slice();
      dataAttributes.push(tagIDKeyName2);
      var newElements = [];
      var queryOptions = {
        appId: appId2,
        attribute: attribute2,
        type,
        tagIDKeyName: tagIDKeyName2
      };
      var currentElements = {
        head: queryElements(head, queryOptions),
        pbody: queryElements(body, queryOptions, {
          pbody: true
        }),
        body: queryElements(body, queryOptions, {
          body: true
        })
      };
      if (tags.length > 1) {
        var found = [];
        tags = tags.filter(function(x) {
          var k = JSON.stringify(x);
          var res = !includes(found, k);
          found.push(k);
          return res;
        });
      }
      tags.forEach(function(tag) {
        if (tag.skip) {
          return;
        }
        var newElement = document.createElement(type);
        if (!tag.once) {
          newElement.setAttribute(attribute2, appId2);
        }
        Object.keys(tag).forEach(function(attr) {
          if (includes(tagProperties, attr)) {
            return;
          }
          if (attr === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
            return;
          }
          if (attr === "json") {
            newElement.innerHTML = JSON.stringify(tag.json);
            return;
          }
          if (attr === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
            return;
          }
          if (attr === "callback") {
            newElement.onload = function() {
              return tag[attr](newElement);
            };
            return;
          }
          var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;
          var isBooleanAttribute = includes(booleanHtmlAttributes, attr);
          if (isBooleanAttribute && !tag[attr]) {
            return;
          }
          var value = isBooleanAttribute ? "" : tag[attr];
          newElement.setAttribute(_attr, value);
        });
        var oldElements2 = currentElements[getElementsKey(tag)];
        var indexToDelete;
        var hasEqualElement = oldElements2.some(function(existingTag, index2) {
          indexToDelete = index2;
          return newElement.isEqualNode(existingTag);
        });
        if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
          oldElements2.splice(indexToDelete, 1);
        } else {
          newElements.push(newElement);
        }
      });
      var oldElements = [];
      for (var _type in currentElements) {
        Array.prototype.push.apply(oldElements, currentElements[_type]);
      }
      oldElements.forEach(function(element) {
        element.parentNode.removeChild(element);
      });
      newElements.forEach(function(element) {
        if (element.hasAttribute("data-body")) {
          body.appendChild(element);
          return;
        }
        if (element.hasAttribute("data-pbody")) {
          body.insertBefore(element, body.firstChild);
          return;
        }
        head.appendChild(element);
      });
      return {
        oldTags: oldElements,
        newTags: newElements
      };
    }
    function updateClientMetaInfo(appId2, options, newInfo) {
      options = options || {};
      var _options = options, ssrAttribute2 = _options.ssrAttribute, ssrAppId2 = _options.ssrAppId;
      var tags = {};
      var htmlTag = getTag(tags, "html");
      if (appId2 === ssrAppId2 && htmlTag.hasAttribute(ssrAttribute2)) {
        removeAttribute(htmlTag, ssrAttribute2);
        var addLoadListeners = false;
        tagsSupportingOnload.forEach(function(type2) {
          if (newInfo[type2] && addCallbacks(options, type2, newInfo[type2])) {
            addLoadListeners = true;
          }
        });
        if (addLoadListeners) {
          addListeners();
        }
        return false;
      }
      var tagsAdded = {};
      var tagsRemoved = {};
      for (var type in newInfo) {
        if (includes(metaInfoOptionKeys, type)) {
          continue;
        }
        if (type === "title") {
          updateTitle(newInfo.title);
          continue;
        }
        if (includes(metaInfoAttributeKeys, type)) {
          var tagName = type.substr(0, 4);
          updateAttribute(appId2, options, type, newInfo[type], getTag(tags, tagName));
          continue;
        }
        if (!isArray(newInfo[type])) {
          continue;
        }
        var _updateTag = updateTag(appId2, options, type, newInfo[type], getTag(tags, "head"), getTag(tags, "body")), oldTags = _updateTag.oldTags, newTags = _updateTag.newTags;
        if (newTags.length) {
          tagsAdded[type] = newTags;
          tagsRemoved[type] = oldTags;
        }
      }
      return {
        tagsAdded,
        tagsRemoved
      };
    }
    var appsMetaInfo;
    function addApp(rootVm, appId2, options) {
      return {
        set: function set(metaInfo) {
          return setMetaInfo(rootVm, appId2, options, metaInfo);
        },
        remove: function remove() {
          return removeMetaInfo(rootVm, appId2, options);
        }
      };
    }
    function setMetaInfo(rootVm, appId2, options, metaInfo) {
      if (rootVm && rootVm.$el) {
        return updateClientMetaInfo(appId2, options, metaInfo);
      }
      appsMetaInfo = appsMetaInfo || {};
      appsMetaInfo[appId2] = metaInfo;
    }
    function removeMetaInfo(rootVm, appId2, options) {
      if (rootVm && rootVm.$el) {
        var tags = {};
        var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var type = _step.value;
            var tagName = type.substr(0, 4);
            updateAttribute(appId2, options, type, {}, getTag(tags, tagName));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return removeElementsByAppId(options, appId2);
      }
      if (appsMetaInfo[appId2]) {
        delete appsMetaInfo[appId2];
        clearAppsMetaInfo();
      }
    }
    function getAppsMetaInfo() {
      return appsMetaInfo;
    }
    function clearAppsMetaInfo(force) {
      if (force || !Object.keys(appsMetaInfo).length) {
        appsMetaInfo = void 0;
      }
    }
    function getMetaInfo(options, info, escapeSequences, component) {
      options = options || {};
      escapeSequences = escapeSequences || [];
      var _options = options, tagIDKeyName2 = _options.tagIDKeyName;
      if (info.title) {
        info.titleChunk = info.title;
      }
      if (info.titleTemplate && info.titleTemplate !== "%s") {
        applyTemplate({
          component,
          contentKeyName: "title"
        }, info, info.titleTemplate, info.titleChunk || "");
      }
      if (info.base) {
        info.base = Object.keys(info.base).length ? [info.base] : [];
      }
      if (info.meta) {
        info.meta = info.meta.filter(function(metaItem, index2, arr) {
          var hasVmid = !!metaItem[tagIDKeyName2];
          if (!hasVmid) {
            return true;
          }
          var isFirstItemForVmid = index2 === findIndex(arr, function(item) {
            return item[tagIDKeyName2] === metaItem[tagIDKeyName2];
          });
          return isFirstItemForVmid;
        });
        info.meta.forEach(function(metaObject) {
          return applyTemplate(options, metaObject);
        });
      }
      return escapeMetaInfo(options, info, escapeSequences);
    }
    function refresh(rootVm, options) {
      options = options || {};
      if (!rootVm[rootConfigKey]) {
        showWarningNotSupported();
        return {};
      }
      var rawInfo = getComponentMetaInfo(options, rootVm);
      var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
      var appId2 = rootVm[rootConfigKey].appId;
      var tags = updateClientMetaInfo(appId2, options, metaInfo);
      if (tags && isFunction(metaInfo.changed)) {
        metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
        tags = {
          addedTags: tags.tagsAdded,
          removedTags: tags.tagsRemoved
        };
      }
      var appsMetaInfo2 = getAppsMetaInfo();
      if (appsMetaInfo2) {
        for (var additionalAppId in appsMetaInfo2) {
          updateClientMetaInfo(additionalAppId, options, appsMetaInfo2[additionalAppId]);
          delete appsMetaInfo2[additionalAppId];
        }
        clearAppsMetaInfo(true);
      }
      return {
        vm: rootVm,
        metaInfo,
        tags
      };
    }
    function attributeGenerator(options, type, data, _ref) {
      var addSsrAttribute = _ref.addSsrAttribute;
      var _ref2 = options || {}, attribute2 = _ref2.attribute, ssrAttribute2 = _ref2.ssrAttribute;
      var attributeStr = "";
      for (var attr in data) {
        var attrData = data[attr];
        var attrValues = [];
        for (var appId2 in attrData) {
          attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId2])));
        }
        if (attrValues.length) {
          attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, '="').concat(attrValues.join(" "), '"');
          attributeStr += " ";
        }
      }
      if (attributeStr) {
        attributeStr += "".concat(attribute2, '="').concat(encodeURI(JSON.stringify(data)), '"');
      }
      if (type === "htmlAttrs" && addSsrAttribute) {
        return "".concat(ssrAttribute2).concat(attributeStr ? " " : "").concat(attributeStr);
      }
      return attributeStr;
    }
    function titleGenerator(options, type, data, generatorOptions) {
      var _ref = generatorOptions || {}, ln = _ref.ln;
      if (!data) {
        return "";
      }
      return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? "\n" : "");
    }
    function tagGenerator(options, type, tags, generatorOptions) {
      var _ref = options || {}, ssrAppId2 = _ref.ssrAppId, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
      var _ref2 = generatorOptions || {}, appId2 = _ref2.appId, _ref2$isSSR = _ref2.isSSR, isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR, _ref2$body = _ref2.body, body = _ref2$body === void 0 ? false : _ref2$body, _ref2$pbody = _ref2.pbody, pbody = _ref2$pbody === void 0 ? false : _ref2$pbody, _ref2$ln = _ref2.ln, ln = _ref2$ln === void 0 ? false : _ref2$ln;
      var dataAttributes = [tagIDKeyName2].concat(_toConsumableArray(commonDataAttributes));
      if (!tags || !tags.length) {
        return "";
      }
      return tags.reduce(function(tagsStr, tag) {
        if (tag.skip) {
          return tagsStr;
        }
        var tagKeys = Object.keys(tag);
        if (tagKeys.length === 0) {
          return tagsStr;
        }
        if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
          return tagsStr;
        }
        var attrs = tag.once ? "" : " ".concat(attribute2, '="').concat(appId2 || (isSSR === false ? "1" : ssrAppId2), '"');
        for (var attr in tag) {
          if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
            continue;
          }
          if (attr === "callback") {
            attrs += ' onload="this.__vm_l=1"';
            continue;
          }
          var prefix = "";
          if (dataAttributes.includes(attr)) {
            prefix = "data-";
          }
          var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);
          if (isBooleanAttr && !tag[attr]) {
            continue;
          }
          attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? "" : '="'.concat(tag[attr], '"'));
        }
        var json = "";
        if (tag.json) {
          json = JSON.stringify(tag.json);
        }
        var content = tag.innerHTML || tag.cssText || json;
        var hasEndTag = !tagsWithoutEndTag.includes(type);
        var hasContent = hasEndTag && tagsWithInnerContent.includes(type);
        return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? "/" : "", ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : "") + (ln ? "\n" : "");
      }, "");
    }
    function generateServerInjector(options, metaInfo, globalInjectOptions) {
      var serverInjector = {
        data: metaInfo,
        extraData: void 0,
        addInfo: function addInfo(appId2, metaInfo2) {
          this.extraData = this.extraData || {};
          this.extraData[appId2] = metaInfo2;
        },
        callInjectors: function callInjectors(opts) {
          var m = this.injectors;
          return (opts.body || opts.pbody ? "" : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
        },
        injectors: {
          head: function head(ln) {
            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
              ln
            }));
          },
          bodyPrepend: function bodyPrepend(ln) {
            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
              ln,
              pbody: true
            }));
          },
          bodyAppend: function bodyAppend(ln) {
            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
              ln,
              body: true
            }));
          }
        }
      };
      var _loop = function _loop2(type2) {
        if (metaInfoOptionKeys.includes(type2)) {
          return "continue";
        }
        serverInjector.injectors[type2] = {
          text: function text(injectOptions) {
            var addSsrAttribute = injectOptions === true;
            injectOptions = _objectSpread2(_objectSpread2({
              addSsrAttribute
            }, globalInjectOptions), injectOptions);
            if (type2 === "title") {
              return titleGenerator(options, type2, serverInjector.data[type2], injectOptions);
            }
            if (metaInfoAttributeKeys.includes(type2)) {
              var attributeData = {};
              var data = serverInjector.data[type2];
              if (data) {
                var appId2 = injectOptions.isSSR === false ? "1" : options.ssrAppId;
                for (var attr in data) {
                  attributeData[attr] = _defineProperty({}, appId2, data[attr]);
                }
              }
              if (serverInjector.extraData) {
                for (var _appId in serverInjector.extraData) {
                  var _data = serverInjector.extraData[_appId][type2];
                  if (_data) {
                    for (var _attr in _data) {
                      attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                    }
                  }
                }
              }
              return attributeGenerator(options, type2, attributeData, injectOptions);
            }
            var str = tagGenerator(options, type2, serverInjector.data[type2], injectOptions);
            if (serverInjector.extraData) {
              for (var _appId2 in serverInjector.extraData) {
                var _data2 = serverInjector.extraData[_appId2][type2];
                var extraStr = tagGenerator(options, type2, _data2, _objectSpread2({
                  appId: _appId2
                }, injectOptions));
                str = "".concat(str).concat(extraStr);
              }
            }
            return str;
          }
        };
      };
      for (var type in defaultInfo) {
        var _ret = _loop(type);
        if (_ret === "continue")
          continue;
      }
      return serverInjector;
    }
    function inject(rootVm, options, injectOptions) {
      if (!rootVm[rootConfigKey]) {
        showWarningNotSupported();
        return {};
      }
      var rawInfo = getComponentMetaInfo(options, rootVm);
      var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm);
      var serverInjector = generateServerInjector(options, metaInfo, injectOptions);
      var appsMetaInfo2 = getAppsMetaInfo();
      if (appsMetaInfo2) {
        for (var additionalAppId in appsMetaInfo2) {
          serverInjector.addInfo(additionalAppId, appsMetaInfo2[additionalAppId]);
          delete appsMetaInfo2[additionalAppId];
        }
        clearAppsMetaInfo(true);
      }
      return serverInjector.injectors;
    }
    function $meta(options) {
      options = options || {};
      var $root = this.$root;
      return {
        getOptions: function getOptions$1() {
          return getOptions(options);
        },
        setOptions: function setOptions2(newOptions) {
          var refreshNavKey = "refreshOnceOnNavigation";
          if (newOptions && newOptions[refreshNavKey]) {
            options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
            addNavGuards($root);
          }
          var debounceWaitKey = "debounceWait";
          if (newOptions && debounceWaitKey in newOptions) {
            var debounceWait2 = parseInt(newOptions[debounceWaitKey]);
            if (!isNaN(debounceWait2)) {
              options.debounceWait = debounceWait2;
            }
          }
          var waitOnDestroyedKey = "waitOnDestroyed";
          if (newOptions && waitOnDestroyedKey in newOptions) {
            options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
          }
        },
        refresh: function refresh$1() {
          return refresh($root, options);
        },
        inject: function inject$1(injectOptions) {
          return inject($root, options, injectOptions);
        },
        pause: function pause$1() {
          return pause($root);
        },
        resume: function resume$1() {
          return resume($root);
        },
        addApp: function addApp$1(appId2) {
          return addApp($root, appId2, options);
        }
      };
    }
    function generate(rawInfo, options) {
      options = setOptions(options);
      var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
      var serverInjector = generateServerInjector(options, metaInfo);
      return serverInjector.injectors;
    }
    function install(Vue, options) {
      if (Vue.__vuemeta_installed) {
        return;
      }
      Vue.__vuemeta_installed = true;
      options = setOptions(options);
      Vue.prototype.$meta = function() {
        return $meta.call(this, options);
      };
      Vue.mixin(createMixin(Vue, options));
    }
    var index = {
      version,
      install,
      generate: function generate$1(metaInfo, options) {
        return generate(metaInfo, options);
      },
      hasMetaInfo
    };
    module2.exports = index;
  },
  function(module2, exports) {
    module2.exports = require$$31;
  },
  function(module2, exports) {
    module2.exports = require$$32;
  },
  function(module2, exports) {
    module2.exports = require$$33;
  },
  function(module2, exports, __webpack_require__) {
    __webpack_require__(52);
    __webpack_require__(53);
    module2.exports = __webpack_require__(64);
  },
  function(module2, exports) {
    globalThis.installComponents = function(component, components) {
      var options = typeof component.exports === "function" ? component.exports.extendOptions : component.options;
      if (typeof component.exports === "function") {
        options.components = component.exports.options.components;
      }
      options.components = options.components || {};
      for (var i in components) {
        options.components[i] = options.components[i] || components[i];
      }
      if (options.functional) {
        provideFunctionalComponents(component, options.components);
      }
    };
    var functionalPatchKey = "_functionalComponents";
    function provideFunctionalComponents(component, components) {
      if (component.exports[functionalPatchKey]) {
        return;
      }
      component.exports[functionalPatchKey] = true;
      var render = component.exports.render;
      component.exports.render = function(h, vm) {
        return render(h, Object.assign({}, vm, {
          _c: function(n, a, b) {
            return vm._c(components[n] || n, a, b);
          }
        }));
      };
    }
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"].default || _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"]);
    __webpack_exports__["default"] = function() {
    };
  },
  function(module2, exports) {
    module2.exports = require$$34;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, exports, __webpack_require__) {
    var content = __webpack_require__(60);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module2.i, content, ""]];
    if (content.locals)
      module2.exports = content.locals;
    __webpack_require__(8).default("094156c5", content, true);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, '.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  function(module2, exports, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module2.i, "", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module2.exports = ___CSS_LOADER_EXPORT___;
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "state", function() {
      return state;
    });
    __webpack_require__.d(__webpack_exports__, "getters", function() {
      return getters;
    });
    __webpack_require__.d(__webpack_exports__, "mutations", function() {
      return mutations;
    });
    __webpack_require__.d(__webpack_exports__, "actions", function() {
      return actions;
    });
    const state = () => ({
      user: {
        isSigned: false,
        document_id: "",
        data: {}
      }
    });
    const getters = {
      isSigned: (state2) => state2.user.isSigned,
      userId: (state2) => state2.user.document_id
    };
    const mutations = {
      setUser(state2, payload) {
        state2.user.document_id = payload.document_id;
        if (payload.data)
          state2.user.data = payload.data;
      },
      signOut(state2) {
        state2.user = {
          isSigned: false,
          document_id: "",
          data: {}
        };
      },
      isSigned(state2, isSigned) {
        state2.user.isSigned = isSigned;
      }
    };
    const actions = {
      setCouponInfo({
        commit
      }, payload) {
        commit("setCouponInfo", payload);
      },
      setUser({
        commit
      }, payload) {
        commit("setUser", payload);
      },
      signOut({
        commit
      }) {
        commit("signOut");
      },
      setIsSigned({
        commit
      }, isSigned) {
        commit("isSigned", isSigned);
      }
    };
  },
  function(module2, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var components_namespaceObject = {};
    __webpack_require__.r(components_namespaceObject);
    var vue_composition_api = __webpack_require__(0);
    var vue = __webpack_require__(1);
    var external_ufo_ = __webpack_require__(3);
    const middleware = {};
    var _nuxt_middleware = middleware;
    function createGetCounter(counterObject, defaultKey = "") {
      return function getCounter(id = defaultKey) {
        if (counterObject[id] === void 0) {
          counterObject[id] = 0;
        }
        return counterObject[id]++;
      };
    }
    function globalHandleError(error) {
      if (vue["default"].config.errorHandler) {
        vue["default"].config.errorHandler(error);
      }
    }
    function interopDefault(promise) {
      return promise.then((m) => m.default || m);
    }
    function hasFetch(vm) {
      return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
    }
    function purifyData(data) {
      {
        return data;
      }
    }
    function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
      const children = vm.$children || [];
      for (const child of children) {
        if (child.$fetch) {
          instances.push(child);
          continue;
        }
        if (child.$children) {
          getChildrenComponentInstancesUsingFetch(child, instances);
        }
      }
      return instances;
    }
    function applyAsyncData(Component, asyncData) {
      if (!asyncData && Component.options.__hasNuxtData) {
        return;
      }
      const ComponentData = Component.options._originDataFn || Component.options.data || function() {
        return {};
      };
      Component.options._originDataFn = ComponentData;
      Component.options.data = function() {
        const data = ComponentData.call(this, this);
        if (this.$ssrContext) {
          asyncData = this.$ssrContext.asyncData[Component.cid];
        }
        return {
          ...data,
          ...asyncData
        };
      };
      Component.options.__hasNuxtData = true;
      if (Component._Ctor && Component._Ctor.options) {
        Component._Ctor.options.data = Component.options.data;
      }
    }
    function sanitizeComponent(Component) {
      if (Component.options && Component._Ctor === Component) {
        return Component;
      }
      if (!Component.options) {
        Component = vue["default"].extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      if (!Component.options.name && Component.options.__file) {
        Component.options.name = Component.options.__file;
      }
      return Component;
    }
    function getMatchedComponents(route, matches = false, prop = "components") {
      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m[prop]).map((key) => {
          matches && matches.push(index);
          return m[prop][key];
        });
      }));
    }
    function getMatchedComponentsInstances(route, matches = false) {
      return getMatchedComponents(route, matches, "instances");
    }
    function flatMapComponents(route, fn) {
      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
        return Object.keys(m.components).reduce((promises, key) => {
          if (m.components[key]) {
            promises.push(fn(m.components[key], m.instances[key], m, key, index));
          } else {
            delete m.components[key];
          }
          return promises;
        }, []);
      }));
    }
    function resolveRouteComponents(route, fn) {
      return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
        if (typeof Component === "function" && !Component.options) {
          try {
            Component = await Component();
          } catch (error) {
            if (error && error.name === "ChunkLoadError" && false) {
              const timeNow = Date.now();
              const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
              if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
                window.sessionStorage.setItem("nuxt-reload", timeNow);
                window.location.reload(true);
              }
            }
            throw error;
          }
        }
        match.components[key] = Component = sanitizeComponent(Component);
        return typeof fn === "function" ? fn(Component, instance, match, key) : Component;
      }));
    }
    async function getRouteData(route) {
      if (!route) {
        return;
      }
      await resolveRouteComponents(route);
      return {
        ...route,
        meta: getMatchedComponents(route).map((Component, index) => {
          return {
            ...Component.options.meta,
            ...(route.matched[index] || {}).meta
          };
        })
      };
    }
    async function setContext(app, context) {
      if (!app.context) {
        app.context = {
          isStatic: false,
          isDev: false,
          isHMR: false,
          app,
          store: app.store,
          payload: context.payload,
          error: context.error,
          base: app.router.options.base,
          env: {
            "NITRO_PRESET": "server"
          }
        };
        if (context.req) {
          app.context.req = context.req;
        }
        if (context.res) {
          app.context.res = context.res;
        }
        if (context.ssrContext) {
          app.context.ssrContext = context.ssrContext;
        }
        app.context.redirect = (status, path, query) => {
          if (!status) {
            return;
          }
          app.context._redirected = true;
          let pathType = typeof path;
          if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
            query = path || {};
            path = status;
            pathType = typeof path;
            status = 302;
          }
          if (pathType === "object") {
            path = app.router.resolve(path).route.fullPath;
          }
          if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
            app.context.next({
              path,
              query,
              status
            });
          } else {
            path = Object(external_ufo_["withQuery"])(path, query);
            {
              app.context.next({
                path,
                status
              });
            }
          }
        };
        {
          app.context.beforeNuxtRender = (fn) => context.beforeRenderFns.push(fn);
          app.context.beforeSerialize = (fn) => context.beforeSerializeFns.push(fn);
        }
      }
      const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
      if (context.route) {
        app.context.route = currentRouteData;
      }
      if (context.from) {
        app.context.from = fromRouteData;
      }
      app.context.next = context.next;
      app.context._redirected = false;
      app.context._errored = false;
      app.context.isHMR = false;
      app.context.params = app.context.route.params || {};
      app.context.query = app.context.route.query || {};
    }
    function middlewareSeries(promises, appContext) {
      if (!promises.length || appContext._redirected || appContext._errored) {
        return Promise.resolve();
      }
      return promisify(promises[0], appContext).then(() => {
        return middlewareSeries(promises.slice(1), appContext);
      });
    }
    function promisify(fn, context) {
      let promise;
      if (fn.length === 2) {
        promise = new Promise((resolve) => {
          fn(context, function(err, data) {
            if (err) {
              context.error(err);
            }
            data = data || {};
            resolve(data);
          });
        });
      } else {
        promise = fn(context);
      }
      if (promise && promise instanceof Promise && typeof promise.then === "function") {
        return promise;
      }
      return Promise.resolve(promise);
    }
    function getLocation(base, mode) {
      if (mode === "hash") {
        return window.location.hash.replace(/^#\//, "");
      }
      base = decodeURI(base).slice(0, -1);
      let path = decodeURI(window.location.pathname);
      if (base && path.startsWith(base)) {
        path = path.slice(base.length);
      }
      const fullPath = (path || "/") + window.location.search + window.location.hash;
      return Object(external_ufo_["normalizeURL"])(fullPath);
    }
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    function normalizeError(err) {
      let message;
      if (!(err.message || typeof err === "string")) {
        try {
          message = JSON.stringify(err, null, 2);
        } catch (e) {
          message = `[${err.constructor.name}]`;
        }
      } else {
        message = err.message || err;
      }
      return {
        ...err,
        message,
        statusCode: err.statusCode || err.status || err.response && err.response.status || 500
      };
    }
    const PATH_REGEXP = new RegExp([
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
    ].join("|"), "g");
    function parse(str, options) {
      const tokens = [];
      let key = 0;
      let index = 0;
      let path = "";
      const defaultDelimiter = options && options.delimiter || "/";
      let res;
      while ((res = PATH_REGEXP.exec(str)) != null) {
        const m = res[0];
        const escaped = res[1];
        const offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
          path += escaped[1];
          continue;
        }
        const next = str[index];
        const prefix = res[2];
        const name = res[3];
        const capture = res[4];
        const group = res[5];
        const modifier = res[6];
        const asterisk = res[7];
        if (path) {
          tokens.push(path);
          path = "";
        }
        const partial = prefix != null && next != null && next !== prefix;
        const repeat = modifier === "+" || modifier === "*";
        const optional = modifier === "?" || modifier === "*";
        const delimiter = res[2] || defaultDelimiter;
        const pattern = capture || group;
        tokens.push({
          name: name || key++,
          prefix: prefix || "",
          delimiter,
          optional,
          repeat,
          partial,
          asterisk: Boolean(asterisk),
          pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
        });
      }
      if (index < str.length) {
        path += str.substr(index);
      }
      if (path) {
        tokens.push(path);
      }
      return tokens;
    }
    function encodeURIComponentPretty(str, slashAllowed) {
      const re = slashAllowed ? /[?#]/g : /[/?#]/g;
      return encodeURI(str).replace(re, (c) => {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function encodeAsterisk(str) {
      return encodeURIComponentPretty(str, true);
    }
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function escapeGroup(group) {
      return group.replace(/([=!:$/()])/g, "\\$1");
    }
    function tokensToFunction(tokens, options) {
      const matches = new Array(tokens.length);
      for (let i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === "object") {
          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
        }
      }
      return function(obj, opts) {
        let path = "";
        const data = obj || {};
        const options2 = opts || {};
        const encode2 = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          const value = data[token.name || "pathMatch"];
          let segment;
          if (value == null) {
            if (token.optional) {
              if (token.partial) {
                path += token.prefix;
              }
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined');
            }
          }
          if (Array.isArray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
            }
            if (value.length === 0) {
              if (token.optional) {
                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty');
              }
            }
            for (let j = 0; j < value.length; j++) {
              segment = encode2(value[j]);
              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
              }
              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }
            continue;
          }
          segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
          }
          path += token.prefix + segment;
        }
        return path;
      };
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function addLifecycleHook(vm, hook, fn) {
      if (!vm.$options[hook]) {
        vm.$options[hook] = [];
      }
      if (!vm.$options[hook].includes(fn)) {
        vm.$options[hook].push(fn);
      }
    }
    external_ufo_["joinURL"];
    external_ufo_["withoutTrailingSlash"];
    external_ufo_["isSamePath"];
    async function serverPrefetch() {
      if (!this._fetchOnServer) {
        return;
      }
      try {
        await this.$options.fetch.call(this);
      } catch (err) {
        this.$fetchState.error = normalizeError(err);
      }
      this.$fetchState.pending = false;
      this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
      const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
      attrs["data-fetch-key"] = this._fetchKey;
      this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
        _error: this.$fetchState.error
      } : purifyData(this._data);
    }
    var fetch_server = {
      created() {
        if (!hasFetch(this)) {
          return;
        }
        if (typeof this.$options.fetchOnServer === "function") {
          this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
        } else {
          this._fetchOnServer = this.$options.fetchOnServer !== false;
        }
        const defaultKey = this.$options._scopeId || this.$options.name || "";
        const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
        if (typeof this.$options.fetchKey === "function") {
          this._fetchKey = this.$options.fetchKey.call(this, getCounter);
        } else {
          const key = typeof this.$options.fetchKey === "string" ? this.$options.fetchKey : defaultKey;
          this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
        }
        this.$fetch = () => {
        };
        vue["default"].util.defineReactive(this, "$fetchState", {
          pending: true,
          error: null,
          timestamp: Date.now()
        });
        addLifecycleHook(this, "serverPrefetch", serverPrefetch);
      }
    };
    var vuex_common = __webpack_require__(10);
    var vuex_common_default = /* @__PURE__ */ __webpack_require__.n(vuex_common);
    vuex_common_default.a;
    var vue_meta_common = __webpack_require__(47);
    var vue_meta_common_default = /* @__PURE__ */ __webpack_require__.n(vue_meta_common);
    var vue_client_only_common = __webpack_require__(11);
    var vue_client_only_common_default = /* @__PURE__ */ __webpack_require__.n(vue_client_only_common);
    var vue_no_ssr_common = __webpack_require__(9);
    var vue_no_ssr_common_default = /* @__PURE__ */ __webpack_require__.n(vue_no_ssr_common);
    function extend(a, b) {
      for (var key in b) {
        a[key] = b[key];
      }
      return a;
    }
    var encodeReserveRE = /[!'()*]/g;
    var encodeReserveReplacer = function(c) {
      return "%" + c.charCodeAt(0).toString(16);
    };
    var commaRE = /%2C/g;
    var encode = function(str) {
      return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
    };
    function decode(str) {
      try {
        return decodeURIComponent(str);
      } catch (err) {
      }
      return str;
    }
    function resolveQuery(query, extraQuery, _parseQuery) {
      if (extraQuery === void 0)
        extraQuery = {};
      var parse2 = _parseQuery || parseQuery;
      var parsedQuery;
      try {
        parsedQuery = parse2(query || "");
      } catch (e) {
        parsedQuery = {};
      }
      for (var key in extraQuery) {
        var value = extraQuery[key];
        parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
      }
      return parsedQuery;
    }
    var castQueryParamValue = function(value) {
      return value == null || typeof value === "object" ? value : String(value);
    };
    function parseQuery(query) {
      var res = {};
      query = query.trim().replace(/^(\?|#|&)/, "");
      if (!query) {
        return res;
      }
      query.split("&").forEach(function(param) {
        var parts = param.replace(/\+/g, " ").split("=");
        var key = decode(parts.shift());
        var val = parts.length > 0 ? decode(parts.join("=")) : null;
        if (res[key] === void 0) {
          res[key] = val;
        } else if (Array.isArray(res[key])) {
          res[key].push(val);
        } else {
          res[key] = [res[key], val];
        }
      });
      return res;
    }
    function stringifyQuery(obj) {
      var res = obj ? Object.keys(obj).map(function(key) {
        var val = obj[key];
        if (val === void 0) {
          return "";
        }
        if (val === null) {
          return encode(key);
        }
        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function(val2) {
            if (val2 === void 0) {
              return;
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + "=" + encode(val2));
            }
          });
          return result.join("&");
        }
        return encode(key) + "=" + encode(val);
      }).filter(function(x) {
        return x.length > 0;
      }).join("&") : null;
      return res ? "?" + res : "";
    }
    var trailingSlashRE = /\/?$/;
    function createRoute(record, location, redirectedFrom, router) {
      var stringifyQuery2 = router && router.options.stringifyQuery;
      var query = location.query || {};
      try {
        query = clone(query);
      } catch (e) {
      }
      var route = {
        name: location.name || record && record.name,
        meta: record && record.meta || {},
        path: location.path || "/",
        hash: location.hash || "",
        query,
        params: location.params || {},
        fullPath: getFullPath(location, stringifyQuery2),
        matched: record ? formatMatch(record) : []
      };
      if (redirectedFrom) {
        route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery2);
      }
      return Object.freeze(route);
    }
    function clone(value) {
      if (Array.isArray(value)) {
        return value.map(clone);
      } else if (value && typeof value === "object") {
        var res = {};
        for (var key in value) {
          res[key] = clone(value[key]);
        }
        return res;
      } else {
        return value;
      }
    }
    var START = createRoute(null, {
      path: "/"
    });
    function formatMatch(record) {
      var res = [];
      while (record) {
        res.unshift(record);
        record = record.parent;
      }
      return res;
    }
    function getFullPath(ref, _stringifyQuery) {
      var path = ref.path;
      var query = ref.query;
      if (query === void 0)
        query = {};
      var hash = ref.hash;
      if (hash === void 0)
        hash = "";
      var stringify = _stringifyQuery || stringifyQuery;
      return (path || "/") + stringify(query) + hash;
    }
    function isSameRoute(a, b, onlyPath) {
      if (b === START) {
        return a === b;
      } else if (!b) {
        return false;
      } else if (a.path && b.path) {
        return a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
      } else if (a.name && b.name) {
        return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
      } else {
        return false;
      }
    }
    function isObjectEqual(a, b) {
      if (a === void 0)
        a = {};
      if (b === void 0)
        b = {};
      if (!a || !b) {
        return a === b;
      }
      var aKeys = Object.keys(a).sort();
      var bKeys = Object.keys(b).sort();
      if (aKeys.length !== bKeys.length) {
        return false;
      }
      return aKeys.every(function(key, i) {
        var aVal = a[key];
        var bKey = bKeys[i];
        if (bKey !== key) {
          return false;
        }
        var bVal = b[key];
        if (aVal == null || bVal == null) {
          return aVal === bVal;
        }
        if (typeof aVal === "object" && typeof bVal === "object") {
          return isObjectEqual(aVal, bVal);
        }
        return String(aVal) === String(bVal);
      });
    }
    function isIncludedRoute(current, target) {
      return current.path.replace(trailingSlashRE, "/").indexOf(target.path.replace(trailingSlashRE, "/")) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
    }
    function queryIncludes(current, target) {
      for (var key in target) {
        if (!(key in current)) {
          return false;
        }
      }
      return true;
    }
    function handleRouteEntered(route) {
      for (var i = 0; i < route.matched.length; i++) {
        var record = route.matched[i];
        for (var name in record.instances) {
          var instance = record.instances[name];
          var cbs = record.enteredCbs[name];
          if (!instance || !cbs) {
            continue;
          }
          delete record.enteredCbs[name];
          for (var i$1 = 0; i$1 < cbs.length; i$1++) {
            if (!instance._isBeingDestroyed) {
              cbs[i$1](instance);
            }
          }
        }
      }
    }
    var View = {
      name: "RouterView",
      functional: true,
      props: {
        name: {
          type: String,
          default: "default"
        }
      },
      render: function render2(_, ref) {
        var props = ref.props;
        var children = ref.children;
        var parent = ref.parent;
        var data = ref.data;
        data.routerView = true;
        var h = parent.$createElement;
        var name = props.name;
        var route = parent.$route;
        var cache = parent._routerViewCache || (parent._routerViewCache = {});
        var depth = 0;
        var inactive = false;
        while (parent && parent._routerRoot !== parent) {
          var vnodeData = parent.$vnode ? parent.$vnode.data : {};
          if (vnodeData.routerView) {
            depth++;
          }
          if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
            inactive = true;
          }
          parent = parent.$parent;
        }
        data.routerViewDepth = depth;
        if (inactive) {
          var cachedData = cache[name];
          var cachedComponent = cachedData && cachedData.component;
          if (cachedComponent) {
            if (cachedData.configProps) {
              fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
            }
            return h(cachedComponent, data, children);
          } else {
            return h();
          }
        }
        var matched = route.matched[depth];
        var component = matched && matched.components[name];
        if (!matched || !component) {
          cache[name] = null;
          return h();
        }
        cache[name] = {
          component
        };
        data.registerRouteInstance = function(vm, val) {
          var current = matched.instances[name];
          if (val && current !== vm || !val && current === vm) {
            matched.instances[name] = val;
          }
        };
        (data.hook || (data.hook = {})).prepatch = function(_2, vnode) {
          matched.instances[name] = vnode.componentInstance;
        };
        data.hook.init = function(vnode) {
          if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
            matched.instances[name] = vnode.componentInstance;
          }
          handleRouteEntered(route);
        };
        var configProps = matched.props && matched.props[name];
        if (configProps) {
          extend(cache[name], {
            route,
            configProps
          });
          fillPropsinData(component, data, route, configProps);
        }
        return h(component, data, children);
      }
    };
    function fillPropsinData(component, data, route, configProps) {
      var propsToPass = data.props = resolveProps(route, configProps);
      if (propsToPass) {
        propsToPass = data.props = extend({}, propsToPass);
        var attrs = data.attrs = data.attrs || {};
        for (var key in propsToPass) {
          if (!component.props || !(key in component.props)) {
            attrs[key] = propsToPass[key];
            delete propsToPass[key];
          }
        }
      }
    }
    function resolveProps(route, config) {
      switch (typeof config) {
        case "undefined":
          return;
        case "object":
          return config;
        case "function":
          return config(route);
        case "boolean":
          return config ? route.params : void 0;
      }
    }
    function resolvePath(relative, base, append) {
      var firstChar = relative.charAt(0);
      if (firstChar === "/") {
        return relative;
      }
      if (firstChar === "?" || firstChar === "#") {
        return base + relative;
      }
      var stack = base.split("/");
      if (!append || !stack[stack.length - 1]) {
        stack.pop();
      }
      var segments = relative.replace(/^\//, "").split("/");
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment === "..") {
          stack.pop();
        } else if (segment !== ".") {
          stack.push(segment);
        }
      }
      if (stack[0] !== "") {
        stack.unshift("");
      }
      return stack.join("/");
    }
    function parsePath(path) {
      var hash = "";
      var query = "";
      var hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        hash = path.slice(hashIndex);
        path = path.slice(0, hashIndex);
      }
      var queryIndex = path.indexOf("?");
      if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1);
        path = path.slice(0, queryIndex);
      }
      return {
        path,
        query,
        hash
      };
    }
    function cleanPath(path) {
      return path.replace(/\/\//g, "/");
    }
    var isarray = Array.isArray || function(arr) {
      return Object.prototype.toString.call(arr) == "[object Array]";
    };
    var pathToRegexp_1 = pathToRegexp;
    var parse_1 = vue_router_esm_parse;
    var compile_1 = vue_router_esm_compile;
    var tokensToFunction_1 = vue_router_esm_tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;
    var vue_router_esm_PATH_REGEXP = new RegExp([
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
    ].join("|"), "g");
    function vue_router_esm_parse(str, options) {
      var tokens = [];
      var key = 0;
      var index = 0;
      var path = "";
      var defaultDelimiter = options && options.delimiter || "/";
      var res;
      while ((res = vue_router_esm_PATH_REGEXP.exec(str)) != null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        if (escaped) {
          path += escaped[1];
          continue;
        }
        var next = str[index];
        var prefix = res[2];
        var name = res[3];
        var capture = res[4];
        var group = res[5];
        var modifier = res[6];
        var asterisk = res[7];
        if (path) {
          tokens.push(path);
          path = "";
        }
        var partial = prefix != null && next != null && next !== prefix;
        var repeat = modifier === "+" || modifier === "*";
        var optional = modifier === "?" || modifier === "*";
        var delimiter = res[2] || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
          name: name || key++,
          prefix: prefix || "",
          delimiter,
          optional,
          repeat,
          partial,
          asterisk: !!asterisk,
          pattern: pattern ? vue_router_esm_escapeGroup(pattern) : asterisk ? ".*" : "[^" + vue_router_esm_escapeString(delimiter) + "]+?"
        });
      }
      if (index < str.length) {
        path += str.substr(index);
      }
      if (path) {
        tokens.push(path);
      }
      return tokens;
    }
    function vue_router_esm_compile(str, options) {
      return vue_router_esm_tokensToFunction(vue_router_esm_parse(str, options), options);
    }
    function vue_router_esm_encodeURIComponentPretty(str) {
      return encodeURI(str).replace(/[\/?#]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function vue_router_esm_encodeAsterisk(str) {
      return encodeURI(str).replace(/[?#]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function vue_router_esm_tokensToFunction(tokens, options) {
      var matches = new Array(tokens.length);
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === "object") {
          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", vue_router_esm_flags(options));
        }
      }
      return function(obj, opts) {
        var path = "";
        var data = obj || {};
        var options2 = opts || {};
        var encode2 = options2.pretty ? vue_router_esm_encodeURIComponentPretty : encodeURIComponent;
        for (var i2 = 0; i2 < tokens.length; i2++) {
          var token = tokens[i2];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data[token.name];
          var segment;
          if (value == null) {
            if (token.optional) {
              if (token.partial) {
                path += token.prefix;
              }
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to be defined');
            }
          }
          if (isarray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
            }
            if (value.length === 0) {
              if (token.optional) {
                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to not be empty');
              }
            }
            for (var j = 0; j < value.length; j++) {
              segment = encode2(value[j]);
              if (!matches[i2].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
              }
              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }
            continue;
          }
          segment = token.asterisk ? vue_router_esm_encodeAsterisk(value) : encode2(value);
          if (!matches[i2].test(segment)) {
            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
          }
          path += token.prefix + segment;
        }
        return path;
      };
    }
    function vue_router_esm_escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function vue_router_esm_escapeGroup(group) {
      return group.replace(/([=!:$\/()])/g, "\\$1");
    }
    function attachKeys(re, keys) {
      re.keys = keys;
      return re;
    }
    function vue_router_esm_flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            asterisk: false,
            pattern: null
          });
        }
      }
      return attachKeys(path, keys);
    }
    function arrayToRegexp(path, keys, options) {
      var parts = [];
      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
      }
      var regexp = new RegExp("(?:" + parts.join("|") + ")", vue_router_esm_flags(options));
      return attachKeys(regexp, keys);
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegExp(vue_router_esm_parse(path, options), keys, options);
    }
    function tokensToRegExp(tokens, keys, options) {
      if (!isarray(keys)) {
        options = keys || options;
        keys = [];
      }
      options = options || {};
      var strict = options.strict;
      var end = options.end !== false;
      var route = "";
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          route += vue_router_esm_escapeString(token);
        } else {
          var prefix = vue_router_esm_escapeString(token.prefix);
          var capture = "(?:" + token.pattern + ")";
          keys.push(token);
          if (token.repeat) {
            capture += "(?:" + prefix + capture + ")*";
          }
          if (token.optional) {
            if (!token.partial) {
              capture = "(?:" + prefix + "(" + capture + "))?";
            } else {
              capture = prefix + "(" + capture + ")?";
            }
          } else {
            capture = prefix + "(" + capture + ")";
          }
          route += capture;
        }
      }
      var delimiter = vue_router_esm_escapeString(options.delimiter || "/");
      var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
      if (!strict) {
        route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
      }
      if (end) {
        route += "$";
      } else {
        route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
      }
      return attachKeys(new RegExp("^" + route, vue_router_esm_flags(options)), keys);
    }
    function pathToRegexp(path, keys, options) {
      if (!isarray(keys)) {
        options = keys || options;
        keys = [];
      }
      options = options || {};
      if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
      }
      if (isarray(path)) {
        return arrayToRegexp(path, keys, options);
      }
      return stringToRegexp(path, keys, options);
    }
    pathToRegexp_1.parse = parse_1;
    pathToRegexp_1.compile = compile_1;
    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
    var regexpCompileCache = Object.create(null);
    function fillParams(path, params, routeMsg) {
      params = params || {};
      try {
        var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
        if (typeof params.pathMatch === "string") {
          params[0] = params.pathMatch;
        }
        return filler(params, {
          pretty: true
        });
      } catch (e) {
        return "";
      } finally {
        delete params[0];
      }
    }
    function normalizeLocation(raw, current, append, router) {
      var next = typeof raw === "string" ? {
        path: raw
      } : raw;
      if (next._normalized) {
        return next;
      } else if (next.name) {
        next = extend({}, raw);
        var params = next.params;
        if (params && typeof params === "object") {
          next.params = extend({}, params);
        }
        return next;
      }
      if (!next.path && next.params && current) {
        next = extend({}, next);
        next._normalized = true;
        var params$1 = extend(extend({}, current.params), next.params);
        if (current.name) {
          next.name = current.name;
          next.params = params$1;
        } else if (current.matched.length) {
          var rawPath = current.matched[current.matched.length - 1].path;
          next.path = fillParams(rawPath, params$1, "path " + current.path);
        } else ;
        return next;
      }
      var parsedPath = parsePath(next.path || "");
      var basePath = current && current.path || "/";
      var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
      var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
      var hash = next.hash || parsedPath.hash;
      if (hash && hash.charAt(0) !== "#") {
        hash = "#" + hash;
      }
      return {
        _normalized: true,
        path,
        query,
        hash
      };
    }
    var toTypes = [String, Object];
    var eventTypes = [String, Array];
    var noop = function() {
    };
    var Link = {
      name: "RouterLink",
      props: {
        to: {
          type: toTypes,
          required: true
        },
        tag: {
          type: String,
          default: "a"
        },
        custom: Boolean,
        exact: Boolean,
        exactPath: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: {
          type: String,
          default: "page"
        },
        event: {
          type: eventTypes,
          default: "click"
        }
      },
      render: function render2(h) {
        var this$1$1 = this;
        var router = this.$router;
        var current = this.$route;
        var ref = router.resolve(this.to, current, this.append);
        var location = ref.location;
        var route = ref.route;
        var href = ref.href;
        var classes = {};
        var globalActiveClass = router.options.linkActiveClass;
        var globalExactActiveClass = router.options.linkExactActiveClass;
        var activeClassFallback = globalActiveClass == null ? "router-link-active" : globalActiveClass;
        var exactActiveClassFallback = globalExactActiveClass == null ? "router-link-exact-active" : globalExactActiveClass;
        var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
        var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
        var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
        classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
        classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
        var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;
        var handler = function(e) {
          if (guardEvent(e)) {
            if (this$1$1.replace) {
              router.replace(location, noop);
            } else {
              router.push(location, noop);
            }
          }
        };
        var on = {
          click: guardEvent
        };
        if (Array.isArray(this.event)) {
          this.event.forEach(function(e) {
            on[e] = handler;
          });
        } else {
          on[this.event] = handler;
        }
        var data = {
          class: classes
        };
        var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
          href,
          route,
          navigate: handler,
          isActive: classes[activeClass],
          isExactActive: classes[exactActiveClass]
        });
        if (scopedSlot) {
          if (scopedSlot.length === 1) {
            return scopedSlot[0];
          } else if (scopedSlot.length > 1 || !scopedSlot.length) {
            return scopedSlot.length === 0 ? h() : h("span", {}, scopedSlot);
          }
        }
        if (this.tag === "a") {
          data.on = on;
          data.attrs = {
            href,
            "aria-current": ariaCurrentValue
          };
        } else {
          var a = findAnchor(this.$slots.default);
          if (a) {
            a.isStatic = false;
            var aData = a.data = extend({}, a.data);
            aData.on = aData.on || {};
            for (var event in aData.on) {
              var handler$1 = aData.on[event];
              if (event in on) {
                aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
              }
            }
            for (var event$1 in on) {
              if (event$1 in aData.on) {
                aData.on[event$1].push(on[event$1]);
              } else {
                aData.on[event$1] = handler;
              }
            }
            var aAttrs = a.data.attrs = extend({}, a.data.attrs);
            aAttrs.href = href;
            aAttrs["aria-current"] = ariaCurrentValue;
          } else {
            data.on = on;
          }
        }
        return h(this.tag, data, this.$slots.default);
      }
    };
    function guardEvent(e) {
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
        return;
      }
      if (e.defaultPrevented) {
        return;
      }
      if (e.button !== void 0 && e.button !== 0) {
        return;
      }
      if (e.currentTarget && e.currentTarget.getAttribute) {
        var target = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(target)) {
          return;
        }
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
      return true;
    }
    function findAnchor(children) {
      if (children) {
        var child;
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          if (child.tag === "a") {
            return child;
          }
          if (child.children && (child = findAnchor(child.children))) {
            return child;
          }
        }
      }
    }
    var _Vue;
    function vue_router_esm_install(Vue) {
      if (vue_router_esm_install.installed && _Vue === Vue) {
        return;
      }
      vue_router_esm_install.installed = true;
      _Vue = Vue;
      var isDef = function(v) {
        return v !== void 0;
      };
      var registerInstance = function(vm, callVal) {
        var i = vm.$options._parentVnode;
        if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
          i(vm, callVal);
        }
      };
      Vue.mixin({
        beforeCreate: function beforeCreate() {
          if (isDef(this.$options.router)) {
            this._routerRoot = this;
            this._router = this.$options.router;
            this._router.init(this);
            Vue.util.defineReactive(this, "_route", this._router.history.current);
          } else {
            this._routerRoot = this.$parent && this.$parent._routerRoot || this;
          }
          registerInstance(this, this);
        },
        destroyed: function destroyed() {
          registerInstance(this);
        }
      });
      Object.defineProperty(Vue.prototype, "$router", {
        get: function get() {
          return this._routerRoot._router;
        }
      });
      Object.defineProperty(Vue.prototype, "$route", {
        get: function get() {
          return this._routerRoot._route;
        }
      });
      Vue.component("RouterView", View);
      Vue.component("RouterLink", Link);
      var strats = Vue.config.optionMergeStrategies;
      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
    }
    var inBrowser = false;
    function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
      var pathList = oldPathList || [];
      var pathMap = oldPathMap || Object.create(null);
      var nameMap = oldNameMap || Object.create(null);
      routes.forEach(function(route) {
        addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
      });
      for (var i = 0, l = pathList.length; i < l; i++) {
        if (pathList[i] === "*") {
          pathList.push(pathList.splice(i, 1)[0]);
          l--;
          i--;
        }
      }
      return {
        pathList,
        pathMap,
        nameMap
      };
    }
    function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
      var path = route.path;
      var name = route.name;
      var pathToRegexpOptions = route.pathToRegexpOptions || {};
      var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
      if (typeof route.caseSensitive === "boolean") {
        pathToRegexpOptions.sensitive = route.caseSensitive;
      }
      var record = {
        path: normalizedPath,
        regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
        components: route.components || {
          default: route.component
        },
        alias: route.alias ? typeof route.alias === "string" ? [route.alias] : route.alias : [],
        instances: {},
        enteredCbs: {},
        name,
        parent,
        matchAs,
        redirect: route.redirect,
        beforeEnter: route.beforeEnter,
        meta: route.meta || {},
        props: route.props == null ? {} : route.components ? route.props : {
          default: route.props
        }
      };
      if (route.children) {
        route.children.forEach(function(child) {
          var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
          addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
        });
      }
      if (!pathMap[record.path]) {
        pathList.push(record.path);
        pathMap[record.path] = record;
      }
      if (route.alias !== void 0) {
        var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
        for (var i = 0; i < aliases.length; ++i) {
          var alias = aliases[i];
          var aliasRoute = {
            path: alias,
            children: route.children
          };
          addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || "/");
        }
      }
      if (name) {
        if (!nameMap[name]) {
          nameMap[name] = record;
        }
      }
    }
    function compileRouteRegex(path, pathToRegexpOptions) {
      var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
      return regex;
    }
    function normalizePath(path, parent, strict) {
      if (!strict) {
        path = path.replace(/\/$/, "");
      }
      if (path[0] === "/") {
        return path;
      }
      if (parent == null) {
        return path;
      }
      return cleanPath(parent.path + "/" + path);
    }
    function createMatcher(routes, router) {
      var ref = createRouteMap(routes);
      var pathList = ref.pathList;
      var pathMap = ref.pathMap;
      var nameMap = ref.nameMap;
      function addRoutes(routes2) {
        createRouteMap(routes2, pathList, pathMap, nameMap);
      }
      function addRoute(parentOrRoute, route) {
        var parent = typeof parentOrRoute !== "object" ? nameMap[parentOrRoute] : void 0;
        createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);
        if (parent && parent.alias.length) {
          createRouteMap(parent.alias.map(function(alias2) {
            return {
              path: alias2,
              children: [route]
            };
          }), pathList, pathMap, nameMap, parent);
        }
      }
      function getRoutes() {
        return pathList.map(function(path) {
          return pathMap[path];
        });
      }
      function match(raw, currentRoute, redirectedFrom) {
        var location = normalizeLocation(raw, currentRoute, false, router);
        var name = location.name;
        if (name) {
          var record = nameMap[name];
          if (!record) {
            return _createRoute(null, location);
          }
          var paramNames = record.regex.keys.filter(function(key2) {
            return !key2.optional;
          }).map(function(key2) {
            return key2.name;
          });
          if (typeof location.params !== "object") {
            location.params = {};
          }
          if (currentRoute && typeof currentRoute.params === "object") {
            for (var key in currentRoute.params) {
              if (!(key in location.params) && paramNames.indexOf(key) > -1) {
                location.params[key] = currentRoute.params[key];
              }
            }
          }
          location.path = fillParams(record.path, location.params);
          return _createRoute(record, location, redirectedFrom);
        } else if (location.path) {
          location.params = {};
          for (var i = 0; i < pathList.length; i++) {
            var path = pathList[i];
            var record$1 = pathMap[path];
            if (matchRoute(record$1.regex, location.path, location.params)) {
              return _createRoute(record$1, location, redirectedFrom);
            }
          }
        }
        return _createRoute(null, location);
      }
      function redirect(record, location) {
        var originalRedirect = record.redirect;
        var redirect2 = typeof originalRedirect === "function" ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
        if (typeof redirect2 === "string") {
          redirect2 = {
            path: redirect2
          };
        }
        if (!redirect2 || typeof redirect2 !== "object") {
          return _createRoute(null, location);
        }
        var re = redirect2;
        var name = re.name;
        var path = re.path;
        var query = location.query;
        var hash = location.hash;
        var params = location.params;
        query = re.hasOwnProperty("query") ? re.query : query;
        hash = re.hasOwnProperty("hash") ? re.hash : hash;
        params = re.hasOwnProperty("params") ? re.params : params;
        if (name) {
          nameMap[name];
          return match({
            _normalized: true,
            name,
            query,
            hash,
            params
          }, void 0, location);
        } else if (path) {
          var rawPath = resolveRecordPath(path, record);
          var resolvedPath = fillParams(rawPath, params);
          return match({
            _normalized: true,
            path: resolvedPath,
            query,
            hash
          }, void 0, location);
        } else {
          return _createRoute(null, location);
        }
      }
      function alias(record, location, matchAs) {
        var aliasedPath = fillParams(matchAs, location.params);
        var aliasedMatch = match({
          _normalized: true,
          path: aliasedPath
        });
        if (aliasedMatch) {
          var matched = aliasedMatch.matched;
          var aliasedRecord = matched[matched.length - 1];
          location.params = aliasedMatch.params;
          return _createRoute(aliasedRecord, location);
        }
        return _createRoute(null, location);
      }
      function _createRoute(record, location, redirectedFrom) {
        if (record && record.redirect) {
          return redirect(record, redirectedFrom || location);
        }
        if (record && record.matchAs) {
          return alias(record, location, record.matchAs);
        }
        return createRoute(record, location, redirectedFrom, router);
      }
      return {
        match,
        addRoute,
        getRoutes,
        addRoutes
      };
    }
    function matchRoute(regex, path, params) {
      var m = path.match(regex);
      if (!m) {
        return false;
      } else if (!params) {
        return true;
      }
      for (var i = 1, len = m.length; i < len; ++i) {
        var key = regex.keys[i - 1];
        if (key) {
          params[key.name || "pathMatch"] = typeof m[i] === "string" ? decode(m[i]) : m[i];
        }
      }
      return true;
    }
    function resolveRecordPath(path, record) {
      return resolvePath(path, record.parent ? record.parent.path : "/", true);
    }
    var Time = Date;
    function genStateKey() {
      return Time.now().toFixed(3);
    }
    var _key = genStateKey();
    function getStateKey() {
      return _key;
    }
    function setStateKey(key) {
      return _key = key;
    }
    var positionStore = Object.create(null);
    function handleScroll(router, to, from, isPop) {
      if (!router.app) {
        return;
      }
      var behavior = router.options.scrollBehavior;
      if (!behavior) {
        return;
      }
      router.app.$nextTick(function() {
        var position = getScrollPosition();
        var shouldScroll = behavior.call(router, to, from, isPop ? position : null);
        if (!shouldScroll) {
          return;
        }
        if (typeof shouldScroll.then === "function") {
          shouldScroll.then(function(shouldScroll2) {
            scrollToPosition(shouldScroll2, position);
          }).catch(function(err) {
          });
        } else {
          scrollToPosition(shouldScroll, position);
        }
      });
    }
    function saveScrollPosition() {
      var key = getStateKey();
      if (key) {
        positionStore[key] = {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      }
    }
    function getScrollPosition() {
      var key = getStateKey();
      if (key) {
        return positionStore[key];
      }
    }
    function getElementPosition(el, offset) {
      var docEl = document.documentElement;
      var docRect = docEl.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      return {
        x: elRect.left - docRect.left - offset.x,
        y: elRect.top - docRect.top - offset.y
      };
    }
    function isValidPosition(obj) {
      return isNumber(obj.x) || isNumber(obj.y);
    }
    function normalizePosition(obj) {
      return {
        x: isNumber(obj.x) ? obj.x : window.pageXOffset,
        y: isNumber(obj.y) ? obj.y : window.pageYOffset
      };
    }
    function normalizeOffset(obj) {
      return {
        x: isNumber(obj.x) ? obj.x : 0,
        y: isNumber(obj.y) ? obj.y : 0
      };
    }
    function isNumber(v) {
      return typeof v === "number";
    }
    var hashStartsWithNumberRE = /^#\d/;
    function scrollToPosition(shouldScroll, position) {
      var isObject = typeof shouldScroll === "object";
      if (isObject && typeof shouldScroll.selector === "string") {
        var el = hashStartsWithNumberRE.test(shouldScroll.selector) ? document.getElementById(shouldScroll.selector.slice(1)) : document.querySelector(shouldScroll.selector);
        if (el) {
          var offset = shouldScroll.offset && typeof shouldScroll.offset === "object" ? shouldScroll.offset : {};
          offset = normalizeOffset(offset);
          position = getElementPosition(el, offset);
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll);
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
      if (position) {
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({
            left: position.x,
            top: position.y,
            behavior: shouldScroll.behavior
          });
        } else {
          window.scrollTo(position.x, position.y);
        }
      }
    }
    var supportsPushState = inBrowser ;
    function pushState(url, replace) {
      saveScrollPosition();
      var history = window.history;
      try {
        if (replace) {
          var stateCopy = extend({}, history.state);
          stateCopy.key = getStateKey();
          history.replaceState(stateCopy, "", url);
        } else {
          history.pushState({
            key: setStateKey(genStateKey())
          }, "", url);
        }
      } catch (e) {
        window.location[replace ? "replace" : "assign"](url);
      }
    }
    function replaceState(url) {
      pushState(url, true);
    }
    function runQueue(queue, fn, cb) {
      var step = function(index) {
        if (index >= queue.length) {
          cb();
        } else {
          if (queue[index]) {
            fn(queue[index], function() {
              step(index + 1);
            });
          } else {
            step(index + 1);
          }
        }
      };
      step(0);
    }
    var NavigationFailureType = {
      redirected: 2,
      aborted: 4,
      cancelled: 8,
      duplicated: 16
    };
    function createNavigationRedirectedError(from, to) {
      return createRouterError(from, to, NavigationFailureType.redirected, 'Redirected when going from "' + from.fullPath + '" to "' + stringifyRoute(to) + '" via a navigation guard.');
    }
    function createNavigationDuplicatedError(from, to) {
      var error = createRouterError(from, to, NavigationFailureType.duplicated, 'Avoided redundant navigation to current location: "' + from.fullPath + '".');
      error.name = "NavigationDuplicated";
      return error;
    }
    function createNavigationCancelledError(from, to) {
      return createRouterError(from, to, NavigationFailureType.cancelled, 'Navigation cancelled from "' + from.fullPath + '" to "' + to.fullPath + '" with a new navigation.');
    }
    function createNavigationAbortedError(from, to) {
      return createRouterError(from, to, NavigationFailureType.aborted, 'Navigation aborted from "' + from.fullPath + '" to "' + to.fullPath + '" via a navigation guard.');
    }
    function createRouterError(from, to, type, message) {
      var error = new Error(message);
      error._isRouter = true;
      error.from = from;
      error.to = to;
      error.type = type;
      return error;
    }
    var propertiesToLog = ["params", "query", "hash"];
    function stringifyRoute(to) {
      if (typeof to === "string") {
        return to;
      }
      if ("path" in to) {
        return to.path;
      }
      var location = {};
      propertiesToLog.forEach(function(key) {
        if (key in to) {
          location[key] = to[key];
        }
      });
      return JSON.stringify(location, null, 2);
    }
    function isError(err) {
      return Object.prototype.toString.call(err).indexOf("Error") > -1;
    }
    function isNavigationFailure(err, errorType) {
      return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
    }
    function resolveAsyncComponents(matched) {
      return function(to, from, next) {
        var hasAsync = false;
        var pending = 0;
        var error = null;
        vue_router_esm_flatMapComponents(matched, function(def, _, match, key) {
          if (typeof def === "function" && def.cid === void 0) {
            hasAsync = true;
            pending++;
            var resolve = once(function(resolvedDef) {
              if (isESModule(resolvedDef)) {
                resolvedDef = resolvedDef.default;
              }
              def.resolved = typeof resolvedDef === "function" ? resolvedDef : _Vue.extend(resolvedDef);
              match.components[key] = resolvedDef;
              pending--;
              if (pending <= 0) {
                next();
              }
            });
            var reject = once(function(reason) {
              var msg = "Failed to resolve async component " + key + ": " + reason;
              if (!error) {
                error = isError(reason) ? reason : new Error(msg);
                next(error);
              }
            });
            var res;
            try {
              res = def(resolve, reject);
            } catch (e) {
              reject(e);
            }
            if (res) {
              if (typeof res.then === "function") {
                res.then(resolve, reject);
              } else {
                var comp = res.component;
                if (comp && typeof comp.then === "function") {
                  comp.then(resolve, reject);
                }
              }
            }
          }
        });
        if (!hasAsync) {
          next();
        }
      };
    }
    function vue_router_esm_flatMapComponents(matched, fn) {
      return flatten(matched.map(function(m) {
        return Object.keys(m.components).map(function(key) {
          return fn(m.components[key], m.instances[key], m, key);
        });
      }));
    }
    function flatten(arr) {
      return Array.prototype.concat.apply([], arr);
    }
    var hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
    function isESModule(obj) {
      return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
    }
    function once(fn) {
      var called = false;
      return function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (called) {
          return;
        }
        called = true;
        return fn.apply(this, args);
      };
    }
    var History = function History2(router, base) {
      this.router = router;
      this.base = normalizeBase(base);
      this.current = START;
      this.pending = null;
      this.ready = false;
      this.readyCbs = [];
      this.readyErrorCbs = [];
      this.errorCbs = [];
      this.listeners = [];
    };
    History.prototype.listen = function listen(cb) {
      this.cb = cb;
    };
    History.prototype.onReady = function onReady(cb, errorCb) {
      if (this.ready) {
        cb();
      } else {
        this.readyCbs.push(cb);
        if (errorCb) {
          this.readyErrorCbs.push(errorCb);
        }
      }
    };
    History.prototype.onError = function onError(errorCb) {
      this.errorCbs.push(errorCb);
    };
    History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
      var this$1$1 = this;
      var route;
      try {
        route = this.router.match(location, this.current);
      } catch (e) {
        this.errorCbs.forEach(function(cb) {
          cb(e);
        });
        throw e;
      }
      var prev = this.current;
      this.confirmTransition(route, function() {
        this$1$1.updateRoute(route);
        onComplete && onComplete(route);
        this$1$1.ensureURL();
        this$1$1.router.afterHooks.forEach(function(hook) {
          hook && hook(route, prev);
        });
        if (!this$1$1.ready) {
          this$1$1.ready = true;
          this$1$1.readyCbs.forEach(function(cb) {
            cb(route);
          });
        }
      }, function(err) {
        if (onAbort) {
          onAbort(err);
        }
        if (err && !this$1$1.ready) {
          if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
            this$1$1.ready = true;
            this$1$1.readyErrorCbs.forEach(function(cb) {
              cb(err);
            });
          }
        }
      });
    };
    History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
      var this$1$1 = this;
      var current = this.current;
      this.pending = route;
      var abort = function(err) {
        if (!isNavigationFailure(err) && isError(err)) {
          if (this$1$1.errorCbs.length) {
            this$1$1.errorCbs.forEach(function(cb) {
              cb(err);
            });
          } else {
            console.error(err);
          }
        }
        onAbort && onAbort(err);
      };
      var lastRouteIndex = route.matched.length - 1;
      var lastCurrentIndex = current.matched.length - 1;
      if (isSameRoute(route, current) && lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
        this.ensureURL();
        return abort(createNavigationDuplicatedError(current, route));
      }
      var ref = resolveQueue(this.current.matched, route.matched);
      var updated = ref.updated;
      var deactivated = ref.deactivated;
      var activated = ref.activated;
      var queue = [].concat(extractLeaveGuards(deactivated), this.router.beforeHooks, extractUpdateHooks(updated), activated.map(function(m) {
        return m.beforeEnter;
      }), resolveAsyncComponents(activated));
      var iterator = function(hook, next) {
        if (this$1$1.pending !== route) {
          return abort(createNavigationCancelledError(current, route));
        }
        try {
          hook(route, current, function(to) {
            if (to === false) {
              this$1$1.ensureURL(true);
              abort(createNavigationAbortedError(current, route));
            } else if (isError(to)) {
              this$1$1.ensureURL(true);
              abort(to);
            } else if (typeof to === "string" || typeof to === "object" && (typeof to.path === "string" || typeof to.name === "string")) {
              abort(createNavigationRedirectedError(current, route));
              if (typeof to === "object" && to.replace) {
                this$1$1.replace(to);
              } else {
                this$1$1.push(to);
              }
            } else {
              next(to);
            }
          });
        } catch (e) {
          abort(e);
        }
      };
      runQueue(queue, iterator, function() {
        var enterGuards = extractEnterGuards(activated);
        var queue2 = enterGuards.concat(this$1$1.router.resolveHooks);
        runQueue(queue2, iterator, function() {
          if (this$1$1.pending !== route) {
            return abort(createNavigationCancelledError(current, route));
          }
          this$1$1.pending = null;
          onComplete(route);
          if (this$1$1.router.app) {
            this$1$1.router.app.$nextTick(function() {
              handleRouteEntered(route);
            });
          }
        });
      });
    };
    History.prototype.updateRoute = function updateRoute(route) {
      this.current = route;
      this.cb && this.cb(route);
    };
    History.prototype.setupListeners = function setupListeners() {
    };
    History.prototype.teardown = function teardown() {
      this.listeners.forEach(function(cleanupListener) {
        cleanupListener();
      });
      this.listeners = [];
      this.current = START;
      this.pending = null;
    };
    function normalizeBase(base) {
      if (!base) {
        {
          base = "/";
        }
      }
      if (base.charAt(0) !== "/") {
        base = "/" + base;
      }
      return base.replace(/\/$/, "");
    }
    function resolveQueue(current, next) {
      var i;
      var max = Math.max(current.length, next.length);
      for (i = 0; i < max; i++) {
        if (current[i] !== next[i]) {
          break;
        }
      }
      return {
        updated: next.slice(0, i),
        activated: next.slice(i),
        deactivated: current.slice(i)
      };
    }
    function extractGuards(records, name, bind, reverse) {
      var guards = vue_router_esm_flatMapComponents(records, function(def, instance, match, key) {
        var guard = extractGuard(def, name);
        if (guard) {
          return Array.isArray(guard) ? guard.map(function(guard2) {
            return bind(guard2, instance, match, key);
          }) : bind(guard, instance, match, key);
        }
      });
      return flatten(reverse ? guards.reverse() : guards);
    }
    function extractGuard(def, key) {
      if (typeof def !== "function") {
        def = _Vue.extend(def);
      }
      return def.options[key];
    }
    function extractLeaveGuards(deactivated) {
      return extractGuards(deactivated, "beforeRouteLeave", bindGuard, true);
    }
    function extractUpdateHooks(updated) {
      return extractGuards(updated, "beforeRouteUpdate", bindGuard);
    }
    function bindGuard(guard, instance) {
      if (instance) {
        return function boundRouteGuard() {
          return guard.apply(instance, arguments);
        };
      }
    }
    function extractEnterGuards(activated) {
      return extractGuards(activated, "beforeRouteEnter", function(guard, _, match, key) {
        return bindEnterGuard(guard, match, key);
      });
    }
    function bindEnterGuard(guard, match, key) {
      return function routeEnterGuard(to, from, next) {
        return guard(to, from, function(cb) {
          if (typeof cb === "function") {
            if (!match.enteredCbs[key]) {
              match.enteredCbs[key] = [];
            }
            match.enteredCbs[key].push(cb);
          }
          next(cb);
        });
      };
    }
    var HTML5History = /* @__PURE__ */ function(History2) {
      function HTML5History2(router, base) {
        History2.call(this, router, base);
        this._startLocation = vue_router_esm_getLocation(this.base);
      }
      if (History2)
        HTML5History2.__proto__ = History2;
      HTML5History2.prototype = Object.create(History2 && History2.prototype);
      HTML5History2.prototype.constructor = HTML5History2;
      HTML5History2.prototype.setupListeners = function setupListeners() {
        var this$1$1 = this;
        if (this.listeners.length > 0) {
          return;
        }
        var router = this.router;
        router.options.scrollBehavior;
        var handleRoutingEvent = function() {
          this$1$1.current;
          var location = vue_router_esm_getLocation(this$1$1.base);
          if (this$1$1.current === START && location === this$1$1._startLocation) {
            return;
          }
          this$1$1.transitionTo(location, function(route) {
          });
        };
        window.addEventListener("popstate", handleRoutingEvent);
        this.listeners.push(function() {
          window.removeEventListener("popstate", handleRoutingEvent);
        });
      };
      HTML5History2.prototype.go = function go(n) {
        window.history.go(n);
      };
      HTML5History2.prototype.push = function push(location, onComplete, onAbort) {
        var this$1$1 = this;
        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(location, function(route) {
          pushState(cleanPath(this$1$1.base + route.fullPath));
          handleScroll(this$1$1.router, route, fromRoute, false);
          onComplete && onComplete(route);
        }, onAbort);
      };
      HTML5History2.prototype.replace = function replace(location, onComplete, onAbort) {
        var this$1$1 = this;
        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(location, function(route) {
          replaceState(cleanPath(this$1$1.base + route.fullPath));
          handleScroll(this$1$1.router, route, fromRoute, false);
          onComplete && onComplete(route);
        }, onAbort);
      };
      HTML5History2.prototype.ensureURL = function ensureURL(push) {
        if (vue_router_esm_getLocation(this.base) !== this.current.fullPath) {
          var current = cleanPath(this.base + this.current.fullPath);
          push ? pushState(current) : replaceState(current);
        }
      };
      HTML5History2.prototype.getCurrentLocation = function getCurrentLocation() {
        return vue_router_esm_getLocation(this.base);
      };
      return HTML5History2;
    }(History);
    function vue_router_esm_getLocation(base) {
      var path = window.location.pathname;
      var pathLowerCase = path.toLowerCase();
      var baseLowerCase = base.toLowerCase();
      if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + "/")) === 0)) {
        path = path.slice(base.length);
      }
      return (path || "/") + window.location.search + window.location.hash;
    }
    var HashHistory = /* @__PURE__ */ function(History2) {
      function HashHistory2(router, base, fallback) {
        History2.call(this, router, base);
        if (fallback && checkFallback(this.base)) {
          return;
        }
        ensureSlash();
      }
      if (History2)
        HashHistory2.__proto__ = History2;
      HashHistory2.prototype = Object.create(History2 && History2.prototype);
      HashHistory2.prototype.constructor = HashHistory2;
      HashHistory2.prototype.setupListeners = function setupListeners() {
        var this$1$1 = this;
        if (this.listeners.length > 0) {
          return;
        }
        var router = this.router;
        router.options.scrollBehavior;
        var handleRoutingEvent = function() {
          this$1$1.current;
          if (!ensureSlash()) {
            return;
          }
          this$1$1.transitionTo(getHash(), function(route) {
            {
              replaceHash(route.fullPath);
            }
          });
        };
        var eventType = "hashchange";
        window.addEventListener(eventType, handleRoutingEvent);
        this.listeners.push(function() {
          window.removeEventListener(eventType, handleRoutingEvent);
        });
      };
      HashHistory2.prototype.push = function push(location, onComplete, onAbort) {
        var this$1$1 = this;
        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(location, function(route) {
          pushHash(route.fullPath);
          handleScroll(this$1$1.router, route, fromRoute, false);
          onComplete && onComplete(route);
        }, onAbort);
      };
      HashHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
        var this$1$1 = this;
        var ref = this;
        var fromRoute = ref.current;
        this.transitionTo(location, function(route) {
          replaceHash(route.fullPath);
          handleScroll(this$1$1.router, route, fromRoute, false);
          onComplete && onComplete(route);
        }, onAbort);
      };
      HashHistory2.prototype.go = function go(n) {
        window.history.go(n);
      };
      HashHistory2.prototype.ensureURL = function ensureURL(push) {
        var current = this.current.fullPath;
        if (getHash() !== current) {
          push ? pushHash(current) : replaceHash(current);
        }
      };
      HashHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
        return getHash();
      };
      return HashHistory2;
    }(History);
    function checkFallback(base) {
      var location = vue_router_esm_getLocation(base);
      if (!/^\/#/.test(location)) {
        window.location.replace(cleanPath(base + "/#" + location));
        return true;
      }
    }
    function ensureSlash() {
      var path = getHash();
      if (path.charAt(0) === "/") {
        return true;
      }
      replaceHash("/" + path);
      return false;
    }
    function getHash() {
      var href = window.location.href;
      var index = href.indexOf("#");
      if (index < 0) {
        return "";
      }
      href = href.slice(index + 1);
      return href;
    }
    function getUrl(path) {
      var href = window.location.href;
      var i = href.indexOf("#");
      var base = i >= 0 ? href.slice(0, i) : href;
      return base + "#" + path;
    }
    function pushHash(path) {
      {
        window.location.hash = path;
      }
    }
    function replaceHash(path) {
      {
        window.location.replace(getUrl(path));
      }
    }
    var AbstractHistory = /* @__PURE__ */ function(History2) {
      function AbstractHistory2(router, base) {
        History2.call(this, router, base);
        this.stack = [];
        this.index = -1;
      }
      if (History2)
        AbstractHistory2.__proto__ = History2;
      AbstractHistory2.prototype = Object.create(History2 && History2.prototype);
      AbstractHistory2.prototype.constructor = AbstractHistory2;
      AbstractHistory2.prototype.push = function push(location, onComplete, onAbort) {
        var this$1$1 = this;
        this.transitionTo(location, function(route) {
          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
          this$1$1.index++;
          onComplete && onComplete(route);
        }, onAbort);
      };
      AbstractHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
        var this$1$1 = this;
        this.transitionTo(location, function(route) {
          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
          onComplete && onComplete(route);
        }, onAbort);
      };
      AbstractHistory2.prototype.go = function go(n) {
        var this$1$1 = this;
        var targetIndex = this.index + n;
        if (targetIndex < 0 || targetIndex >= this.stack.length) {
          return;
        }
        var route = this.stack[targetIndex];
        this.confirmTransition(route, function() {
          var prev = this$1$1.current;
          this$1$1.index = targetIndex;
          this$1$1.updateRoute(route);
          this$1$1.router.afterHooks.forEach(function(hook) {
            hook && hook(route, prev);
          });
        }, function(err) {
          if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
            this$1$1.index = targetIndex;
          }
        });
      };
      AbstractHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
        var current = this.stack[this.stack.length - 1];
        return current ? current.fullPath : "/";
      };
      AbstractHistory2.prototype.ensureURL = function ensureURL() {
      };
      return AbstractHistory2;
    }(History);
    var VueRouter = function VueRouter2(options) {
      if (options === void 0)
        options = {};
      this.app = null;
      this.apps = [];
      this.options = options;
      this.beforeHooks = [];
      this.resolveHooks = [];
      this.afterHooks = [];
      this.matcher = createMatcher(options.routes || [], this);
      var mode = options.mode || "hash";
      this.fallback = mode === "history" && !supportsPushState && options.fallback !== false;
      if (this.fallback) {
        mode = "hash";
      }
      {
        mode = "abstract";
      }
      this.mode = mode;
      switch (mode) {
        case "history":
          this.history = new HTML5History(this, options.base);
          break;
        case "hash":
          this.history = new HashHistory(this, options.base, this.fallback);
          break;
        case "abstract":
          this.history = new AbstractHistory(this, options.base);
          break;
      }
    };
    var prototypeAccessors = {
      currentRoute: {
        configurable: true
      }
    };
    VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
      return this.matcher.match(raw, current, redirectedFrom);
    };
    prototypeAccessors.currentRoute.get = function() {
      return this.history && this.history.current;
    };
    VueRouter.prototype.init = function init(app) {
      var this$1$1 = this;
      this.apps.push(app);
      app.$once("hook:destroyed", function() {
        var index = this$1$1.apps.indexOf(app);
        if (index > -1) {
          this$1$1.apps.splice(index, 1);
        }
        if (this$1$1.app === app) {
          this$1$1.app = this$1$1.apps[0] || null;
        }
        if (!this$1$1.app) {
          this$1$1.history.teardown();
        }
      });
      if (this.app) {
        return;
      }
      this.app = app;
      var history = this.history;
      if (history instanceof HTML5History || history instanceof HashHistory) {
        var handleInitialScroll = function(routeOrError) {
          history.current;
          this$1$1.options.scrollBehavior;
        };
        var setupListeners = function(routeOrError) {
          history.setupListeners();
          handleInitialScroll(routeOrError);
        };
        history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
      }
      history.listen(function(route) {
        this$1$1.apps.forEach(function(app2) {
          app2._route = route;
        });
      });
    };
    VueRouter.prototype.beforeEach = function beforeEach(fn) {
      return registerHook(this.beforeHooks, fn);
    };
    VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
      return registerHook(this.resolveHooks, fn);
    };
    VueRouter.prototype.afterEach = function afterEach(fn) {
      return registerHook(this.afterHooks, fn);
    };
    VueRouter.prototype.onReady = function onReady(cb, errorCb) {
      this.history.onReady(cb, errorCb);
    };
    VueRouter.prototype.onError = function onError(errorCb) {
      this.history.onError(errorCb);
    };
    VueRouter.prototype.push = function push(location, onComplete, onAbort) {
      var this$1$1 = this;
      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
        return new Promise(function(resolve, reject) {
          this$1$1.history.push(location, resolve, reject);
        });
      } else {
        this.history.push(location, onComplete, onAbort);
      }
    };
    VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
      var this$1$1 = this;
      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
        return new Promise(function(resolve, reject) {
          this$1$1.history.replace(location, resolve, reject);
        });
      } else {
        this.history.replace(location, onComplete, onAbort);
      }
    };
    VueRouter.prototype.go = function go(n) {
      this.history.go(n);
    };
    VueRouter.prototype.back = function back() {
      this.go(-1);
    };
    VueRouter.prototype.forward = function forward() {
      this.go(1);
    };
    VueRouter.prototype.getMatchedComponents = function getMatchedComponents2(to) {
      var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
      if (!route) {
        return [];
      }
      return [].concat.apply([], route.matched.map(function(m) {
        return Object.keys(m.components).map(function(key) {
          return m.components[key];
        });
      }));
    };
    VueRouter.prototype.resolve = function resolve(to, current, append) {
      current = current || this.history.current;
      var location = normalizeLocation(to, current, append, this);
      var route = this.match(location, current);
      var fullPath = route.redirectedFrom || route.fullPath;
      var base = this.history.base;
      var href = createHref(base, fullPath, this.mode);
      return {
        location,
        route,
        href,
        normalizedTo: location,
        resolved: route
      };
    };
    VueRouter.prototype.getRoutes = function getRoutes() {
      return this.matcher.getRoutes();
    };
    VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
      this.matcher.addRoute(parentOrRoute, route);
      if (this.history.current !== START) {
        this.history.transitionTo(this.history.getCurrentLocation());
      }
    };
    VueRouter.prototype.addRoutes = function addRoutes(routes) {
      this.matcher.addRoutes(routes);
      if (this.history.current !== START) {
        this.history.transitionTo(this.history.getCurrentLocation());
      }
    };
    Object.defineProperties(VueRouter.prototype, prototypeAccessors);
    function registerHook(list, fn) {
      list.push(fn);
      return function() {
        var i = list.indexOf(fn);
        if (i > -1) {
          list.splice(i, 1);
        }
      };
    }
    function createHref(base, fullPath, mode) {
      var path = mode === "hash" ? "#" + fullPath : fullPath;
      return base ? cleanPath(base + "/" + path) : path;
    }
    VueRouter.install = vue_router_esm_install;
    VueRouter.version = "3.5.2";
    VueRouter.isNavigationFailure = isNavigationFailure;
    VueRouter.NavigationFailureType = NavigationFailureType;
    VueRouter.START_LOCATION = START;
    var vue_router_esm = VueRouter;
    function shouldScrollToTop(route) {
      const Pages = getMatchedComponents(route);
      if (Pages.length === 1) {
        const {
          options = {}
        } = Pages[0];
        return options.scrollToTop !== false;
      }
      return Pages.some(({
        options
      }) => options && options.scrollToTop);
    }
    var router_scrollBehavior = function(to, from, savedPosition) {
      let position = false;
      const isRouteChanged = to !== from;
      if (savedPosition) {
        position = savedPosition;
      } else if (isRouteChanged && shouldScrollToTop(to)) {
        position = {
          x: 0,
          y: 0
        };
      }
      const nuxt = window.$nuxt;
      if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
        nuxt.$nextTick(() => nuxt.$emit("triggerScroll"));
      }
      return new Promise((resolve) => {
        nuxt.$once("triggerScroll", () => {
          if (to.hash) {
            let hash = to.hash;
            if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
              hash = "#" + window.CSS.escape(hash.substr(1));
            }
            try {
              const el = document.querySelector(hash);
              if (el) {
                var _getComputedStyle$scr;
                position = {
                  selector: hash
                };
                const y = Number((_getComputedStyle$scr = getComputedStyle(el)["scroll-margin-top"]) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace("px", ""));
                if (y) {
                  position.offset = {
                    y
                  };
                }
              }
            } catch (e) {
              console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
            }
          }
          resolve(position);
        });
      });
    };
    const _7e6543ee = () => interopDefault(__webpack_require__.e(3).then(__webpack_require__.bind(null, 70)));
    const _258a3687 = () => interopDefault(__webpack_require__.e(4).then(__webpack_require__.bind(null, 69)));
    const _938ba89c = () => interopDefault(__webpack_require__.e(5).then(__webpack_require__.bind(null, 71)));
    const _958c2778 = () => interopDefault(__webpack_require__.e(6).then(__webpack_require__.bind(null, 72)));
    const _6c5f7a8c = () => interopDefault(__webpack_require__.e(7).then(__webpack_require__.bind(null, 73)));
    const _5869e228 = () => interopDefault(__webpack_require__.e(2).then(__webpack_require__.bind(null, 74)));
    const _1516c401 = () => interopDefault(__webpack_require__.e(1).then(__webpack_require__.bind(null, 75)));
    const emptyFn = () => {
    };
    vue["default"].use(vue_router_esm);
    const routerOptions = {
      mode: "history",
      base: "/",
      linkActiveClass: "nuxt-link-active",
      linkExactActiveClass: "nuxt-link-exact-active",
      scrollBehavior: router_scrollBehavior,
      routes: [{
        path: "/match/list",
        component: _7e6543ee,
        name: "match-list"
      }, {
        path: "/match/start",
        component: _258a3687,
        name: "match-start"
      }, {
        path: "/match/waiting",
        component: _938ba89c,
        name: "match-waiting"
      }, {
        path: "/user/sign_in",
        component: _958c2778,
        name: "user-sign_in"
      }, {
        path: "/user/sign_up",
        component: _6c5f7a8c,
        name: "user-sign_up"
      }, {
        path: "/match/:matchId?",
        component: _5869e228,
        name: "match-matchId"
      }, {
        path: "/",
        component: _1516c401,
        name: "index"
      }],
      fallback: false
    };
    function createRouter(ssrContext, config) {
      const base = config._app && config._app.basePath || routerOptions.base;
      const router = new vue_router_esm({
        ...routerOptions,
        base
      });
      const originalPush = router.push;
      router.push = function push(location, onComplete = emptyFn, onAbort) {
        return originalPush.call(this, location, onComplete, onAbort);
      };
      const resolve = router.resolve.bind(router);
      router.resolve = (to, current, append) => {
        if (typeof to === "string") {
          to = Object(external_ufo_["normalizeURL"])(to);
        }
        return resolve(to, current, append);
      };
      return router;
    }
    var nuxt_child = {
      name: "NuxtChild",
      functional: true,
      props: {
        nuxtChildKey: {
          type: String,
          default: ""
        },
        keepAlive: Boolean,
        keepAliveProps: {
          type: Object,
          default: void 0
        }
      },
      render(_, {
        parent,
        data,
        props
      }) {
        const h = parent.$createElement;
        data.nuxtChild = true;
        const _parent = parent;
        const transitions = parent.$nuxt.nuxt.transitions;
        const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
        let depth = 0;
        while (parent) {
          if (parent.$vnode && parent.$vnode.data.nuxtChild) {
            depth++;
          }
          parent = parent.$parent;
        }
        data.nuxtChildDepth = depth;
        const transition = transitions[depth] || defaultTransition2;
        const transitionProps = {};
        transitionsKeys.forEach((key) => {
          if (typeof transition[key] !== "undefined") {
            transitionProps[key] = transition[key];
          }
        });
        const listeners = {};
        listenersKeys.forEach((key) => {
          if (typeof transition[key] === "function") {
            listeners[key] = transition[key].bind(_parent);
          }
        });
        if (transition.css === false) {
          const leave = listeners.leave;
          if (!leave || leave.length < 2) {
            listeners.leave = (el, done) => {
              if (leave) {
                leave.call(_parent, el);
              }
              _parent.$nextTick(done);
            };
          }
        }
        let routerView = h("routerView", data);
        if (props.keepAlive) {
          routerView = h("keep-alive", {
            props: props.keepAliveProps
          }, [routerView]);
        }
        return h("transition", {
          props: transitionProps,
          on: listeners
        }, [routerView]);
      }
    };
    const transitionsKeys = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"];
    const listenersKeys = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "__nuxt-error-page" }, [_vm._ssrNode('<div class="error">', "</div>", [_vm._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">' + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode('<p class="description">', "</p>", [typeof _vm.$route === "undefined" ? _vm._ssrNode('<a href="/" class="error-link">', "</a>") : _c("NuxtLink", { staticClass: "error-link", attrs: { "to": "/" } }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a></div>')], 2)]);
    };
    var staticRenderFns = [];
    var nuxt_errorvue_type_script_lang_js_ = {
      name: "NuxtError",
      props: {
        error: {
          type: Object,
          default: null
        }
      },
      computed: {
        statusCode() {
          return this.error && this.error.statusCode || 500;
        },
        message() {
          return this.error.message || "Error";
        }
      },
      head() {
        return {
          title: this.message,
          meta: [{
            name: "viewport",
            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
          }]
        };
      }
    };
    var components_nuxt_errorvue_type_script_lang_js_ = nuxt_errorvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(6);
    function injectStyles(context) {
      var style0 = __webpack_require__(55);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var nuxt_error_component = Object(componentNormalizer["a"])(components_nuxt_errorvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, null, "73dad51a");
    var nuxt_error = nuxt_error_component.exports;
    var components_nuxt = {
      name: "Nuxt",
      components: {
        NuxtChild: nuxt_child,
        NuxtError: nuxt_error
      },
      props: {
        nuxtChildKey: {
          type: String,
          default: void 0
        },
        keepAlive: Boolean,
        keepAliveProps: {
          type: Object,
          default: void 0
        },
        name: {
          type: String,
          default: "default"
        }
      },
      errorCaptured(error) {
        if (this.displayingNuxtError) {
          this.errorFromNuxtError = error;
          this.$forceUpdate();
        }
      },
      computed: {
        routerViewKey() {
          if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
            return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
          }
          const [matchedRoute] = this.$route.matched;
          if (!matchedRoute) {
            return this.$route.path;
          }
          const Component = matchedRoute.components.default;
          if (Component && Component.options) {
            const {
              options
            } = Component;
            if (options.key) {
              return typeof options.key === "function" ? options.key(this.$route) : options.key;
            }
          }
          const strict = /\/$/.test(matchedRoute.path);
          return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
        }
      },
      beforeCreate() {
        vue["default"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
      },
      render(h) {
        if (!this.nuxt.err) {
          return h("NuxtChild", {
            key: this.routerViewKey,
            props: this.$props
          });
        }
        if (this.errorFromNuxtError) {
          this.$nextTick(() => this.errorFromNuxtError = false);
          return h("div", {}, [h("h2", "An error occurred while showing the error page"), h("p", "Unfortunately an error occurred and while showing the error page another error occurred"), h("p", `Error details: ${this.errorFromNuxtError.toString()}`), h("nuxt-link", {
            props: {
              to: "/"
            }
          }, "Go back to home")]);
        }
        this.displayingNuxtError = true;
        this.$nextTick(() => this.displayingNuxtError = false);
        return h(nuxt_error, {
          props: {
            error: this.nuxt.err
          }
        });
      }
    };
    var nuxt_loadingvue_type_script_lang_js_ = {
      name: "NuxtLoading",
      data() {
        return {
          percent: 0,
          show: false,
          canSucceed: true,
          reversed: false,
          skipTimerCount: 0,
          rtl: false,
          throttle: 200,
          duration: 5e3,
          continuous: false
        };
      },
      computed: {
        left() {
          if (!this.continuous && !this.rtl) {
            return false;
          }
          return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
        }
      },
      beforeDestroy() {
        this.clear();
      },
      methods: {
        clear() {
          clearInterval(this._timer);
          clearTimeout(this._throttle);
          this._timer = null;
        },
        start() {
          this.clear();
          this.percent = 0;
          this.reversed = false;
          this.skipTimerCount = 0;
          this.canSucceed = true;
          if (this.throttle) {
            this._throttle = setTimeout(() => this.startTimer(), this.throttle);
          } else {
            this.startTimer();
          }
          return this;
        },
        set(num) {
          this.show = true;
          this.canSucceed = true;
          this.percent = Math.min(100, Math.max(0, Math.floor(num)));
          return this;
        },
        get() {
          return this.percent;
        },
        increase(num) {
          this.percent = Math.min(100, Math.floor(this.percent + num));
          return this;
        },
        decrease(num) {
          this.percent = Math.max(0, Math.floor(this.percent - num));
          return this;
        },
        pause() {
          clearInterval(this._timer);
          return this;
        },
        resume() {
          this.startTimer();
          return this;
        },
        finish() {
          this.percent = this.reversed ? 0 : 100;
          this.hide();
          return this;
        },
        hide() {
          this.clear();
          setTimeout(() => {
            this.show = false;
            this.$nextTick(() => {
              this.percent = 0;
              this.reversed = false;
            });
          }, 500);
          return this;
        },
        fail(error) {
          this.canSucceed = false;
          return this;
        },
        startTimer() {
          if (!this.show) {
            this.show = true;
          }
          if (typeof this._cut === "undefined") {
            this._cut = 1e4 / Math.floor(this.duration);
          }
          this._timer = setInterval(() => {
            if (this.skipTimerCount > 0) {
              this.skipTimerCount--;
              return;
            }
            if (this.reversed) {
              this.decrease(this._cut);
            } else {
              this.increase(this._cut);
            }
            if (this.continuous) {
              if (this.percent >= 100) {
                this.skipTimerCount = 1;
                this.reversed = !this.reversed;
              } else if (this.percent <= 0) {
                this.skipTimerCount = 1;
                this.reversed = !this.reversed;
              }
            }
          }, 100);
        }
      },
      render(h) {
        let el = h(false);
        if (this.show) {
          el = h("div", {
            staticClass: "nuxt-progress",
            class: {
              "nuxt-progress-notransition": this.skipTimerCount > 0,
              "nuxt-progress-failed": !this.canSucceed
            },
            style: {
              width: this.percent + "%",
              left: this.left
            }
          });
        }
        return el;
      }
    };
    var components_nuxt_loadingvue_type_script_lang_js_ = nuxt_loadingvue_type_script_lang_js_;
    var nuxt_loading_render, nuxt_loading_staticRenderFns;
    function nuxt_loading_injectStyles(context) {
      var style0 = __webpack_require__(57);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var nuxt_loading_component = Object(componentNormalizer["a"])(components_nuxt_loadingvue_type_script_lang_js_, nuxt_loading_render, nuxt_loading_staticRenderFns, false, nuxt_loading_injectStyles, null, "5ed0f3ce");
    var nuxt_loading = nuxt_loading_component.exports;
    __webpack_require__(59);
    var defaultvue_type_template_id_d2f8522a_render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [_c("Nuxt")], 1);
    };
    var defaultvue_type_template_id_d2f8522a_staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var state = __webpack_require__(12);
    var defaultvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        Object(state["a"])();
      }
    });
    var layouts_defaultvue_type_script_lang_ts_ = defaultvue_type_script_lang_ts_;
    function default_injectStyles(context) {
      var style0 = __webpack_require__(61);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var default_component = Object(componentNormalizer["a"])(layouts_defaultvue_type_script_lang_ts_, defaultvue_type_template_id_d2f8522a_render, defaultvue_type_template_id_d2f8522a_staticRenderFns, false, default_injectStyles, null, "50b532da");
    var layouts_default = default_component.exports;
    const layouts = {
      "_default": sanitizeComponent(layouts_default)
    };
    var App = {
      render(h, props) {
        const loadingEl = h("NuxtLoading", {
          ref: "loading"
        });
        const layoutEl = h(this.layout || "nuxt");
        const templateEl = h("div", {
          domProps: {
            id: "__layout"
          },
          key: this.layoutName
        }, [layoutEl]);
        const transitionEl = h("transition", {
          props: {
            name: "layout",
            mode: "out-in"
          },
          on: {
            beforeEnter(el) {
              window.$nuxt.$nextTick(() => {
                window.$nuxt.$emit("triggerScroll");
              });
            }
          }
        }, [templateEl]);
        return h("div", {
          domProps: {
            id: "__nuxt"
          }
        }, [loadingEl, transitionEl]);
      },
      data: () => ({
        isOnline: true,
        layout: null,
        layoutName: "",
        nbFetching: 0
      }),
      beforeCreate() {
        vue["default"].util.defineReactive(this, "nuxt", this.$options.nuxt);
      },
      created() {
        this.$root.$options.$nuxt = this;
        this.error = this.nuxt.error;
        this.context = this.$options.context;
      },
      async mounted() {
        this.$loading = this.$refs.loading;
      },
      watch: {
        "nuxt.err": "errorChanged"
      },
      computed: {
        isOffline() {
          return !this.isOnline;
        },
        isFetching() {
          return this.nbFetching > 0;
        }
      },
      methods: {
        refreshOnlineStatus() {
        },
        async refresh() {
          const pages = getMatchedComponentsInstances(this.$route);
          if (!pages.length) {
            return;
          }
          this.$loading.start();
          const promises = pages.map((page) => {
            const p = [];
            if (page.$options.fetch && page.$options.fetch.length) {
              p.push(promisify(page.$options.fetch, this.context));
            }
            if (page.$fetch) {
              p.push(page.$fetch());
            } else {
              for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
                p.push(component.$fetch());
              }
            }
            if (page.$options.asyncData) {
              p.push(promisify(page.$options.asyncData, this.context).then((newData) => {
                for (const key in newData) {
                  vue["default"].set(page.$data, key, newData[key]);
                }
              }));
            }
            return Promise.all(p);
          });
          try {
            await Promise.all(promises);
          } catch (error) {
            this.$loading.fail(error);
            globalHandleError(error);
            this.error(error);
          }
          this.$loading.finish();
        },
        errorChanged() {
          if (this.nuxt.err) {
            if (this.$loading) {
              if (this.$loading.fail) {
                this.$loading.fail(this.nuxt.err);
              }
              if (this.$loading.finish) {
                this.$loading.finish();
              }
            }
            let errorLayout = (nuxt_error.options || nuxt_error).layout;
            if (typeof errorLayout === "function") {
              errorLayout = errorLayout(this.context);
            }
            this.setLayout(errorLayout);
          }
        },
        setLayout(layout) {
          if (!layout || !layouts["_" + layout]) {
            layout = "default";
          }
          this.layoutName = layout;
          this.layout = layouts["_" + layout];
          return this.layout;
        },
        loadLayout(layout) {
          if (!layout || !layouts["_" + layout]) {
            layout = "default";
          }
          return Promise.resolve(layouts["_" + layout]);
        }
      },
      components: {
        NuxtLoading: nuxt_loading
      }
    };
    vue["default"].use(vuex_common_default.a);
    let store_store = {};
    (function updateModules() {
      store_store = normalizeRoot(__webpack_require__(63), "store/index.ts");
      store_store.modules = store_store.modules || {};
    })();
    const createStore = store_store instanceof Function ? store_store : () => {
      return new vuex_common_default.a.Store(Object.assign({
        strict: false
      }, store_store));
    };
    function normalizeRoot(moduleData, filePath) {
      moduleData = moduleData.default || moduleData;
      if (moduleData.commit) {
        throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
      }
      if (typeof moduleData !== "function") {
        moduleData = Object.assign({}, moduleData);
      }
      return normalizeModule(moduleData, filePath);
    }
    function normalizeModule(moduleData, filePath) {
      if (moduleData.state && typeof moduleData.state !== "function") {
        console.warn(`'state' should be a method that returns an object in ${filePath}`);
        const state2 = Object.assign({}, moduleData.state);
        moduleData = Object.assign({}, moduleData, {
          state: () => state2
        });
      }
      return moduleData;
    }
    for (const name in components_namespaceObject) {
      vue["default"].component(name, components_namespaceObject[name]);
      vue["default"].component("Lazy" + name, components_namespaceObject[name]);
    }
    function flatHooks(configHooks, hooks = {}, parentName) {
      for (const key in configHooks) {
        const subHook = configHooks[key];
        const name = parentName ? `${parentName}:${key}` : key;
        if (typeof subHook === "object" && subHook !== null) {
          flatHooks(subHook, hooks, name);
        } else if (typeof subHook === "function") {
          hooks[name] = subHook;
        }
      }
      return hooks;
    }
    function serial(tasks, fn) {
      return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve(null));
    }
    class Hookable {
      constructor() {
        this._hooks = {};
        this._deprecatedHooks = {};
        this.hook = this.hook.bind(this);
        this.callHook = this.callHook.bind(this);
      }
      hook(name, fn) {
        if (!name || typeof fn !== "function") {
          return () => {
          };
        }
        const originalName = name;
        let deprecatedHookObj;
        while (this._deprecatedHooks[name]) {
          const deprecatedHook = this._deprecatedHooks[name];
          if (typeof deprecatedHook === "string") {
            deprecatedHookObj = { to: deprecatedHook };
          } else {
            deprecatedHookObj = deprecatedHook;
          }
          name = deprecatedHookObj.to;
        }
        if (deprecatedHookObj) {
          if (!deprecatedHookObj.message) {
            console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
          } else {
            console.warn(deprecatedHookObj.message);
          }
        }
        this._hooks[name] = this._hooks[name] || [];
        this._hooks[name].push(fn);
        return () => {
          if (fn) {
            this.removeHook(name, fn);
            fn = null;
          }
        };
      }
      hookOnce(name, fn) {
        let _unreg;
        let _fn = (...args) => {
          _unreg();
          _unreg = null;
          _fn = null;
          return fn(...args);
        };
        _unreg = this.hook(name, _fn);
        return _unreg;
      }
      removeHook(name, fn) {
        if (this._hooks[name]) {
          const idx = this._hooks[name].indexOf(fn);
          if (idx !== -1) {
            this._hooks[name].splice(idx, 1);
          }
          if (this._hooks[name].length === 0) {
            delete this._hooks[name];
          }
        }
      }
      deprecateHook(name, deprecated) {
        this._deprecatedHooks[name] = deprecated;
      }
      deprecateHooks(deprecatedHooks) {
        Object.assign(this._deprecatedHooks, deprecatedHooks);
      }
      addHooks(configHooks) {
        const hooks = flatHooks(configHooks);
        const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
        return () => {
          removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
        };
      }
      removeHooks(configHooks) {
        const hooks = flatHooks(configHooks);
        for (const key in hooks) {
          this.removeHook(key, hooks[key]);
        }
      }
      callHook(name, ...args) {
        if (!this._hooks[name]) {
          return;
        }
        return serial(this._hooks[name], (fn) => fn(...args));
      }
    }
    function createHooks() {
      return new Hookable();
    }
    var runtime_app = __webpack_require__(2);
    __webpack_require__(5);
    var runtime_app_plugin_fc3fef56 = (ctx, inject) => {
      const nuxtApp = {
        vueApp: {
          component: vue["default"].component.bind(vue["default"]),
          config: {
            globalProperties: {}
          },
          directive: vue["default"].directive.bind(vue["default"]),
          mixin: vue["default"].mixin.bind(vue["default"]),
          mount: () => {
          },
          provide: inject,
          unmount: () => {
          },
          use(vuePlugin) {
            vuePlugin.install(this);
          },
          version: vue["default"].version
        },
        provide: inject,
        globalName: "nuxt",
        payload: ctx.ssrContext.nuxt,
        isHydrating: ctx.isHMR,
        nuxt2Context: ctx
      };
      nuxtApp.hooks = createHooks();
      nuxtApp.hook = nuxtApp.hooks.hook;
      nuxtApp.callHook = nuxtApp.hooks.callHook;
      if (!Array.isArray(ctx.app.created)) {
        ctx.app.created = [ctx.app.created];
      }
      {
        nuxtApp.ssrContext = ctx.ssrContext;
      }
      ctx.app.created.push(function() {
        nuxtApp.vue2App = this;
      });
      Object(runtime_app["b"])(nuxtApp);
      inject("_nuxtApp", nuxtApp);
    };
    var external_cookie_universal_ = __webpack_require__(50);
    var external_cookie_universal_default = /* @__PURE__ */ __webpack_require__.n(external_cookie_universal_);
    var cookie_universal_nuxt = ({
      req,
      res
    }, inject) => {
      const options = {
        "alias": "cookies",
        "parseJSON": false
      };
      inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
    };
    var capi_legacy_plugin = Object(runtime_app["a"])((nuxt) => {
      nuxt._setupFns = [];
      const _originalSetup = nuxt.nuxt2Context.app.setup;
      nuxt.nuxt2Context.app.setup = function(...args) {
        const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
        for (const fn of nuxt._setupFns) {
          Object.assign(result, fn.call(this, ...args));
        }
        return result;
      };
    });
    vue["default"].use(vue_composition_api["default"].default || vue_composition_api["default"]);
    var capi_plugin = function() {
    };
    const vueMetaRenderer = (nuxt) => {
      const meta = nuxt.ssrContext.meta.inject({
        isSSR: nuxt.ssrContext.nuxt.serverRendered,
        ln: false
      });
      return {
        htmlAttrs: meta.htmlAttrs.text(),
        headAttrs: meta.headAttrs.text(),
        headTags: meta.title.text() + meta.base.text() + meta.meta.text() + meta.link.text() + meta.style.text() + meta.script.text() + meta.noscript.text(),
        bodyAttrs: meta.bodyAttrs.text(),
        bodyScriptsPrepend: meta.meta.text({
          pbody: true
        }) + meta.link.text({
          pbody: true
        }) + meta.style.text({
          pbody: true
        }) + meta.script.text({
          pbody: true
        }) + meta.noscript.text({
          pbody: true
        }),
        bodyScripts: meta.meta.text({
          body: true
        }) + meta.link.text({
          body: true
        }) + meta.style.text({
          body: true
        }) + meta.script.text({
          body: true
        }) + meta.noscript.text({
          body: true
        })
      };
    };
    var nitro_bridge_server = Object(runtime_app["a"])((nuxt) => {
      const metaRenderers = [vueMetaRenderer];
      nuxt.callHook("meta:register", metaRenderers);
      nuxt.ssrContext.renderMeta = async () => {
        const metadata = {
          htmlAttrs: "",
          headAttrs: "",
          headTags: "",
          bodyAttrs: "",
          bodyScriptsPrepend: "",
          bodyScripts: ""
        };
        for await (const renderer of metaRenderers) {
          const result = await renderer(nuxt);
          for (const key in result) {
            metadata[key] += result[key];
          }
        }
        return metadata;
      };
    });
    __webpack_require__(46);
    vue["default"].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);
    vue["default"].component(vue_no_ssr_common_default.a.name, {
      ...vue_no_ssr_common_default.a,
      render(h, ctx) {
        return vue_no_ssr_common_default.a.render(h, ctx);
      }
    });
    vue["default"].component(nuxt_child.name, nuxt_child);
    vue["default"].component("NChild", nuxt_child);
    vue["default"].component(components_nuxt.name, components_nuxt);
    Object.defineProperty(vue["default"].prototype, "$nuxt", {
      get() {
        const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
        return globalNuxt;
      },
      configurable: true
    });
    vue["default"].use(vue_meta_common_default.a, {
      "keyName": "head",
      "attribute": "data-n-head",
      "ssrAttribute": "data-n-head-ssr",
      "tagIDKeyName": "hid"
    });
    const defaultTransition = {
      "name": "page",
      "mode": "out-in",
      "appear": false,
      "appearClass": "appear",
      "appearActiveClass": "appear-active",
      "appearToClass": "appear-to"
    };
    const originalRegisterModule = vuex_common_default.a.Store.prototype.registerModule;
    function registerModule(path, rawModule, options = {}) {
      const preserveState = false;
      return originalRegisterModule.call(this, path, rawModule, {
        preserveState,
        ...options
      });
    }
    async function createApp(ssrContext, config = {}) {
      const store = createStore(ssrContext);
      const router = await createRouter(ssrContext, config);
      store.$router = router;
      store.registerModule = registerModule;
      const app = {
        head: {
          "title": "rating_for_dp",
          "htmlAttrs": {
            "lang": "en"
          },
          "meta": [{
            "charset": "utf-8"
          }, {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1"
          }, {
            "hid": "description",
            "name": "description",
            "content": ""
          }],
          "link": [{
            "rel": "icon",
            "type": "image/x-icon",
            "href": "/favicon.ico"
          }],
          "style": [],
          "script": []
        },
        store,
        router,
        nuxt: {
          defaultTransition,
          transitions: [defaultTransition],
          setTransitions(transitions) {
            if (!Array.isArray(transitions)) {
              transitions = [transitions];
            }
            transitions = transitions.map((transition) => {
              if (!transition) {
                transition = defaultTransition;
              } else if (typeof transition === "string") {
                transition = Object.assign({}, defaultTransition, {
                  name: transition
                });
              } else {
                transition = Object.assign({}, defaultTransition, transition);
              }
              return transition;
            });
            this.$options.nuxt.transitions = transitions;
            return transitions;
          },
          err: null,
          dateErr: null,
          error(err) {
            err = err || null;
            app.context._errored = Boolean(err);
            err = err ? normalizeError(err) : null;
            let nuxt = app.nuxt;
            if (this) {
              nuxt = this.nuxt || this.$options.nuxt;
            }
            nuxt.dateErr = Date.now();
            nuxt.err = err;
            if (ssrContext) {
              ssrContext.nuxt.error = err;
            }
            return err;
          }
        },
        ...App
      };
      store.app = app;
      const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
      let route;
      if (ssrContext) {
        route = router.resolve(ssrContext.url).route;
      } else {
        const path = getLocation(router.options.base, router.options.mode);
        route = router.resolve(path).route;
      }
      await setContext(app, {
        store,
        route,
        next,
        error: app.nuxt.error.bind(app),
        payload: ssrContext ? ssrContext.payload : void 0,
        req: ssrContext ? ssrContext.req : void 0,
        res: ssrContext ? ssrContext.res : void 0,
        beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
        beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : void 0,
        ssrContext
      });
      function inject(key, value) {
        if (!key) {
          throw new Error("inject(key, value) has no key provided");
        }
        if (value === void 0) {
          throw new Error(`inject('${key}', value) has no value provided`);
        }
        key = "$" + key;
        app[key] = value;
        if (!app.context[key]) {
          app.context[key] = value;
        }
        store[key] = app[key];
        const installKey = "__nuxt_" + key + "_installed__";
        if (vue["default"][installKey]) {
          return;
        }
        vue["default"][installKey] = true;
        vue["default"].use(() => {
          if (!Object.prototype.hasOwnProperty.call(vue["default"].prototype, key)) {
            Object.defineProperty(vue["default"].prototype, key, {
              get() {
                return this.$root.$options[key];
              }
            });
          }
        });
      }
      inject("config", config);
      if (typeof runtime_app_plugin_fc3fef56 === "function") {
        await runtime_app_plugin_fc3fef56(app.context, inject);
      }
      if (typeof cookie_universal_nuxt === "function") {
        await cookie_universal_nuxt(app.context, inject);
      }
      if (typeof capi_legacy_plugin === "function") {
        await capi_legacy_plugin(app.context, inject);
      }
      if (typeof capi_plugin === "function") {
        await capi_plugin(app.context);
      }
      if (typeof nitro_bridge_server === "function") {
        await nitro_bridge_server(app.context, inject);
      }
      await new Promise((resolve, reject) => {
        router.replace(app.context.route.fullPath, resolve, (err) => {
          if (!err._isRouter)
            return reject(err);
          if (err.type !== 2)
            return resolve();
          const unregister = router.afterEach(async (to, from) => {
            if (ssrContext && ssrContext.url) {
              ssrContext.url = to.fullPath;
            }
            app.context.route = await getRouteData(to);
            app.context.params = to.params || {};
            app.context.query = to.query || {};
            unregister();
            resolve();
          });
        });
      });
      return {
        store,
        app,
        router
      };
    }
    var nuxt_link_server = {
      name: "NuxtLink",
      extends: vue["default"].component("RouterLink"),
      props: {
        prefetch: {
          type: Boolean,
          default: true
        },
        noPrefetch: {
          type: Boolean,
          default: false
        }
      }
    };
    vue["default"].config.optionMergeStrategies.serverPrefetch = vue["default"].config.optionMergeStrategies.created;
    if (!vue["default"].__nuxt__fetch__mixin__) {
      vue["default"].mixin(fetch_server);
      vue["default"].__nuxt__fetch__mixin__ = true;
    }
    vue["default"].component(nuxt_link_server.name, nuxt_link_server);
    vue["default"].component("NLink", nuxt_link_server);
    const noopApp = () => new vue["default"]({
      render: (h) => h("div", {
        domProps: {
          id: "__nuxt"
        }
      })
    });
    const createNext = (ssrContext) => (opts) => {
      ssrContext.redirected = opts;
      if (ssrContext.target === "static" || !ssrContext.res) {
        ssrContext.nuxt.serverRendered = false;
        return;
      }
      let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
      const $config = ssrContext.nuxt.config || {};
      const routerBase = $config._app && $config._app.basePath || "/";
      if (!fullPath.startsWith("http") && routerBase !== "/" && !fullPath.startsWith(routerBase)) {
        fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
      }
      if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
        ssrContext.redirected = false;
        return;
      }
      ssrContext.res.writeHead(opts.status, {
        Location: Object(external_ufo_["normalizeURL"])(fullPath)
      });
      ssrContext.res.end();
    };
    __webpack_exports__["default"] = async (ssrContext) => {
      ssrContext.redirected = false;
      ssrContext.next = createNext(ssrContext);
      ssrContext.beforeRenderFns = [];
      ssrContext.beforeSerializeFns = [];
      ssrContext.nuxt = {
        layout: "default",
        data: [],
        fetch: {},
        error: null,
        state: null,
        serverRendered: true,
        routePath: ""
      };
      ssrContext.fetchCounters = {};
      ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
      if (ssrContext.nuxt.config._app) {
        __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
      }
      const {
        app,
        router,
        store
      } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
      const _app = new vue["default"](app);
      ssrContext.nuxt.routePath = app.context.route.path;
      ssrContext.meta = _app.$meta();
      ssrContext.asyncData = {};
      const beforeRender = async () => {
        await Promise.all(ssrContext.beforeRenderFns.map((fn) => promisify(fn, {
          Components,
          nuxtState: ssrContext.nuxt
        })));
        ssrContext.rendered = () => {
          ssrContext.beforeSerializeFns.forEach((fn) => fn(ssrContext.nuxt));
          ssrContext.nuxt.state = store.state;
        };
      };
      const renderErrorPage = async () => {
        if (ssrContext.target === "static") {
          ssrContext.nuxt.serverRendered = false;
        }
        const layout2 = (nuxt_error.options || nuxt_error).layout;
        const errLayout = typeof layout2 === "function" ? layout2.call(nuxt_error, app.context) : layout2;
        ssrContext.nuxt.layout = errLayout || "default";
        await _app.loadLayout(errLayout);
        _app.setLayout(errLayout);
        await beforeRender();
        return _app;
      };
      const render404Page = () => {
        app.context.error({
          statusCode: 404,
          path: ssrContext.url,
          message: "This page could not be found"
        });
        return renderErrorPage();
      };
      const Components = getMatchedComponents(app.context.route);
      if (store._actions && store._actions.nuxtServerInit) {
        try {
          await store.dispatch("nuxtServerInit", app.context);
        } catch (err) {
          console.debug("Error occurred when calling nuxtServerInit: ", err.message);
          throw err;
        }
      }
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      let midd = [];
      midd = midd.map((name) => {
        if (typeof name === "function") {
          return name;
        }
        if (typeof _nuxt_middleware[name] !== "function") {
          app.context.error({
            statusCode: 500,
            message: "Unknown middleware " + name
          });
        }
        return _nuxt_middleware[name];
      });
      await middlewareSeries(midd, app.context);
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
      if (typeof layout === "function") {
        layout = layout(app.context);
      }
      await _app.loadLayout(layout);
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      layout = _app.setLayout(layout);
      ssrContext.nuxt.layout = _app.layoutName;
      midd = [];
      layout = sanitizeComponent(layout);
      if (layout.options.middleware) {
        midd = midd.concat(layout.options.middleware);
      }
      Components.forEach((Component) => {
        if (Component.options.middleware) {
          midd = midd.concat(Component.options.middleware);
        }
      });
      midd = midd.map((name) => {
        if (typeof name === "function") {
          return name;
        }
        if (typeof _nuxt_middleware[name] !== "function") {
          app.context.error({
            statusCode: 500,
            message: "Unknown middleware " + name
          });
        }
        return _nuxt_middleware[name];
      });
      await middlewareSeries(midd, app.context);
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      let isValid = true;
      try {
        for (const Component of Components) {
          if (typeof Component.options.validate !== "function") {
            continue;
          }
          isValid = await Component.options.validate(app.context);
          if (!isValid) {
            break;
          }
        }
      } catch (validationError) {
        app.context.error({
          statusCode: validationError.statusCode || "500",
          message: validationError.message
        });
        return renderErrorPage();
      }
      if (!isValid) {
        return render404Page();
      }
      if (!Components.length) {
        return render404Page();
      }
      const asyncDatas = await Promise.all(Components.map((Component) => {
        const promises = [];
        if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
          const promise = promisify(Component.options.asyncData, app.context);
          promise.then((asyncDataResult) => {
            ssrContext.asyncData[Component.cid] = asyncDataResult;
            applyAsyncData(Component);
            return asyncDataResult;
          });
          promises.push(promise);
        } else {
          promises.push(null);
        }
        if (Component.options.fetch && Component.options.fetch.length) {
          promises.push(Component.options.fetch(app.context));
        } else {
          promises.push(null);
        }
        return Promise.all(promises);
      }));
      ssrContext.nuxt.data = asyncDatas.map((r) => r[0] || {});
      if (ssrContext.redirected) {
        return noopApp();
      }
      if (ssrContext.nuxt.error) {
        return renderErrorPage();
      }
      await beforeRender();
      return _app;
    };
  },
  function(module2, exports) {
    module2.exports = require$$35;
  },
  function(module2, exports) {
    module2.exports = require$$36;
  },
  function(module2, exports) {
    module2.exports = require$$37;
  },
  function(module2, exports) {
    module2.exports = require$$38;
  }
]);
}(server$2));

var server = server$2.exports;

const server$1 = server;

export { server$1 as default };
