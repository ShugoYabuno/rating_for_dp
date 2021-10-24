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

var start$1 = {};

var ids = start$1.ids = [4];
var modules = start$1.modules = {
  69: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var common_namespaceObject = {};
    __webpack_require__.r(common_namespaceObject);
    __webpack_require__.d(common_namespaceObject, "doc2data", function() {
      return doc2data;
    });
    __webpack_require__.d(common_namespaceObject, "docRef2data", function() {
      return docRef2data;
    });
    __webpack_require__.d(common_namespaceObject, "where", function() {
      return where;
    });
    __webpack_require__.d(common_namespaceObject, "whereIn", function() {
      return whereIn;
    });
    __webpack_require__.d(common_namespaceObject, "spliceTo10lengthArrays", function() {
      return spliceTo10lengthArrays;
    });
    __webpack_require__.d(common_namespaceObject, "createTimestamp", function() {
      return createTimestamp;
    });
    __webpack_require__.d(common_namespaceObject, "updateTimestamp", function() {
      return updateTimestamp;
    });
    __webpack_require__.d(common_namespaceObject, "getById", function() {
      return getById;
    });
    __webpack_require__.d(common_namespaceObject, "getByIds", function() {
      return getByIds;
    });
    __webpack_require__.d(common_namespaceObject, "add", function() {
      return add;
    });
    __webpack_require__.d(common_namespaceObject, "update", function() {
      return update;
    });
    __webpack_require__.d(common_namespaceObject, "deleteDoc", function() {
      return deleteDoc;
    });
    __webpack_require__.d(common_namespaceObject, "deleteDocs", function() {
      return deleteDocs;
    });
    __webpack_require__(0);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "container" }, [_vm._ssrNode("<div><button>\u5BFE\u6226\u958B\u59CB</button></div>")]);
    };
    var staticRenderFns = [];
    var capi_legacy = __webpack_require__(4);
    var external_dayjs_ = __webpack_require__(66);
    var external_dayjs_default = /* @__PURE__ */ __webpack_require__.n(external_dayjs_);
    var app_ = __webpack_require__(65);
    var app_default = /* @__PURE__ */ __webpack_require__.n(app_);
    __webpack_require__(67);
    __webpack_require__(68);
    const firebaseConfig = () => {
      return {
        apiKey: "AIzaSyBReaUAX4kfJdavmRarpkPuefBoR5v9LQ0",
        authDomain: "rating-for-dp.firebaseapp.com",
        projectId: "rating-for-dp",
        storageBucket: "rating-for-dp.appspot.com",
        messagingSenderId: "197437362752",
        appId: "1:197437362752:web:daa673f7feef2e6f8205a5",
        measurementId: "G-PQV8BFDK8Z"
      };
    };
    if (!app_default.a.apps.length) {
      const config = firebaseConfig();
      app_default.a.initializeApp(config);
    }
    const firestore = app_default.a.firestore();
    const doc2data = (_doc) => {
      return {
        ..._doc.data(),
        document_id: _doc.id
      };
    };
    const docRef2data = async (_docRef) => {
      const data = await _docRef.get().then((doc) => doc.data());
      return {
        document_id: _docRef.id,
        ...data
      };
    };
    const where = async (_collectionName, _key, _value, _firestore = firestore) => {
      return await _firestore.collection(_collectionName).where(_key, "==", _value).get().then((querySnapShot) => {
        const data = querySnapShot.docs.map((_doc) => doc2data(_doc));
        return {
          status: 200,
          data
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const whereIn = async (_collectionName, _key, _value) => {
      return await firestore.collection(_collectionName).where(_key, "in", _value).get().then((querySnapShot) => {
        const data = querySnapShot.docs.map((_doc) => doc2data(_doc));
        return {
          status: 200,
          data
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const spliceTo10lengthArrays = (_array) => {
      const splicedArray = [];
      while (_array.length > 0) {
        const splicedItem = _array.splice(0, 10);
        splicedArray.push(splicedItem);
      }
      return splicedArray;
    };
    const createTimestamp = (_data) => {
      return {
        ..._data,
        created_at: external_dayjs_default()().unix(),
        created_unixtime: external_dayjs_default()().unix() * 1e3,
        updated_at: external_dayjs_default()().unix(),
        updated_unixtime: external_dayjs_default()().unix() * 1e3
      };
    };
    const updateTimestamp = (_data) => {
      return {
        ..._data,
        updated_at: external_dayjs_default()().unix(),
        updated_unixtime: external_dayjs_default()().unix() * 1e3
      };
    };
    const getById = async (_collectionName, _id, _firestore = firestore) => {
      return await _firestore.collection(_collectionName).doc(_id).get().then((_doc) => {
        const data = doc2data(_doc);
        return {
          status: 200,
          data
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const getByIds = async (_collectionName, _ids, _firestore = firestore) => {
      const promises = _ids.map((_id) => {
        return getById(_collectionName, _id, _firestore);
      });
      return await Promise.all(promises).then((docs) => {
        return {
          status: 200,
          data: docs
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const add = async (_collectionName, _data, _firestore = firestore) => {
      const data = createTimestamp(_data);
      return await _firestore.collection(_collectionName).add(data).then(async (_docRef) => {
        const data2 = await docRef2data(_docRef);
        return {
          status: 200,
          data: data2
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const update = async (_collectionName, _id, _data, _firestore = firestore) => {
      const data = updateTimestamp(_data);
      return await _firestore.collection(_collectionName).doc(_id).update(data).then(() => {
        return {
          status: 200
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const deleteDoc = async (_collectionName, _id, _firestore = firestore) => {
      return await _firestore.collection(_collectionName).doc(_id).delete().then(() => {
        return {
          status: 200
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const deleteDocs = async (_collectionName, _key, _value, _firestore = firestore) => {
      return await _firestore.collection(_collectionName).where(_key, "==", _value).get().then((querySnapShot) => {
        querySnapShot.docs.map((_doc) => _doc.ref.delete());
        return {
          status: 200
        };
      }).catch((error) => {
        return {
          status: 400,
          error
        };
      });
    };
    const firestoreService = {
      ...common_namespaceObject
    };
    var state = __webpack_require__(12);
    var startvue_type_script_lang_ts_ = Object(capi_legacy["a"])({
      setup() {
        const router = Object(capi_legacy["i"])();
        const {
          userProvider
        } = Object(state["b"])();
        const matchStart = async () => {
          const resUsers = await (userProvider === null || userProvider === void 0 ? void 0 : userProvider.get());
          if ((resUsers === null || resUsers === void 0 ? void 0 : resUsers.status) !== 200)
            return;
          const user = resUsers.data.user;
          const resMatchs = await firestoreService.add("ratingMatchWaitings", {
            userId: user.id,
            rating: user.rating,
            status: "waiting"
          });
          if (resMatchs.status !== 200)
            return;
          router.push(`/match/waiting`);
        };
        return {
          matchStart
        };
      }
    });
    var match_startvue_type_script_lang_ts_ = startvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(6);
    var component = Object(componentNormalizer["a"])(match_startvue_type_script_lang_ts_, render, staticRenderFns, false, null, null, "f62f5da8");
    __webpack_exports__["default"] = component.exports;
  }
};

const start = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': start$1,
  ids: ids,
  modules: modules
}, [start$1]));

export { start as s };
