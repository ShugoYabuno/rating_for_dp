function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    }
  }
  return Object.freeze(n);
}

var _matchId$1 = {};

var ids = _matchId$1.ids = [2];
var modules = _matchId$1.modules = {
  74: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode("<div><p>" + _vm._ssrEscape(_vm._s(_vm.matchId)) + "</p></div>")]);
    };
    var staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var _matchIdvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        const route = Object(capi_legacy["h"])();
        const matchId = route.value.params.matchId;
        return {
          matchId
        };
      }
    });
    var match_matchIdvue_type_script_lang_ts_ = _matchIdvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(6);
    var component = Object(componentNormalizer["a"])(match_matchIdvue_type_script_lang_ts_, render, staticRenderFns, false, null, null, "486c93b2");
    __webpack_exports__["default"] = component.exports;
  }
};

const _matchId = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': _matchId$1,
  ids: ids,
  modules: modules
}, [_matchId$1]));

export { _matchId as _ };
