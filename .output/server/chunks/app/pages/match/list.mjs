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

var list$1 = {};

var ids = list$1.ids = [3];
var modules = list$1.modules = {
  70: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode("<div>" + _vm._ssrList(_vm.matchesRef, function(_match) {
        return "<div><p>" + _vm._ssrEscape(_vm._s(_match.userId1)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_match.userId2)) + "</p></div>";
      }) + "</div>")]);
    };
    var staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var listvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        const matchesRef = Object(capi_legacy["e"])([], "J+OA3TcXlaPOj98c/R7HQg==");
        console.log(matchesRef.value);
        return {
          matchesRef
        };
      }
    });
    var match_listvue_type_script_lang_ts_ = listvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(6);
    var component = Object(componentNormalizer["a"])(match_listvue_type_script_lang_ts_, render, staticRenderFns, false, null, null, "88c24a78");
    __webpack_exports__["default"] = component.exports;
  }
};

const list = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': list$1,
  ids: ids,
  modules: modules
}, [list$1]));

export { list as l };
