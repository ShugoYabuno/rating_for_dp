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

var sign_up$1 = {};

var ids = sign_up$1.ids = [7];
var modules = sign_up$1.modules = {
  73: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__(0);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode('<form><input type="text"' + _vm._ssrAttr("value", _vm.state.form.name) + '> <input type="text"' + _vm._ssrAttr("value", _vm.state.form.email) + '> <input type="password"' + _vm._ssrAttr("value", _vm.state.form.password) + '> <button type="submit">\u65B0\u898F\u767B\u9332</button></form>')]);
    };
    var staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var state_0 = __webpack_require__(12);
    var sign_upvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        const state = Object(capi_legacy["d"])({
          form: {
            name: "",
            email: "",
            password: ""
          }
        });
        const {
          userProvider
        } = Object(state_0["b"])();
        const handleSignUp = async () => {
          const res = await (userProvider === null || userProvider === void 0 ? void 0 : userProvider.signUp(state.form.email, state.form.password, {
            name: state.form.name
          }));
          console.log(res);
        };
        return {
          handleSignUp,
          state
        };
      }
    });
    var user_sign_upvue_type_script_lang_ts_ = sign_upvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(6);
    var component = Object(componentNormalizer["a"])(user_sign_upvue_type_script_lang_ts_, render, staticRenderFns, false, null, null, "56357cb5");
    __webpack_exports__["default"] = component.exports;
  }
};

const sign_up = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': sign_up$1,
  ids: ids,
  modules: modules
}, [sign_up$1]));

export { sign_up as s };
