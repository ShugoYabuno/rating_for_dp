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

var pages = {};

var ids = pages.ids = [1];
var modules = pages.modules = {
  75: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode("<div><p>" + _vm._ssrEscape(_vm._s(_vm.test)) + "</p></div>")]);
    };
    var staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var transform_ref_33_0_pagesvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        const test = "test";
        return {
          test
        };
      }
    });
    var pagesvue_type_script_lang_ts_ = transform_ref_33_0_pagesvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(6);
    var component = Object(componentNormalizer["a"])(pagesvue_type_script_lang_ts_, render, staticRenderFns, false, null, null, "1d9a0334");
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pages,
  ids: ids,
  modules: modules
}, [pages]));

export { index as i };
