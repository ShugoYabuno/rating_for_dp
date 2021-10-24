import express, { Router } from 'express';
import dayjs__default from 'dayjs';
import firebase__default from 'firebase/app';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import compression from 'compression';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path__default from 'path';

const router$3 = Router();
router$3.get("/", async (req, res) => {
  try {
    res.status(200);
    return res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.status(400);
    return res.json({});
  }
});
const test = router$3;

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
if (!firebase__default.apps.length) {
  const config = firebaseConfig();
  firebase__default.initializeApp(config);
}
const firestore = firebase__default.firestore();

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
    return { status: 200, data };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const whereIn = async (_collectionName, _key, _value) => {
  return await firestore.collection(_collectionName).where(_key, "in", _value).get().then((querySnapShot) => {
    const data = querySnapShot.docs.map((_doc) => doc2data(_doc));
    return { status: 200, data };
  }).catch((error) => {
    return { status: 400, error };
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
    created_at: dayjs__default().unix(),
    created_unixtime: dayjs__default().unix() * 1e3,
    updated_at: dayjs__default().unix(),
    updated_unixtime: dayjs__default().unix() * 1e3
  };
};
const updateTimestamp = (_data) => {
  return {
    ..._data,
    updated_at: dayjs__default().unix(),
    updated_unixtime: dayjs__default().unix() * 1e3
  };
};
const getById = async (_collectionName, _id, _firestore = firestore) => {
  return await _firestore.collection(_collectionName).doc(_id).get().then((_doc) => {
    const data = doc2data(_doc);
    return { status: 200, data };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const getByIds = async (_collectionName, _ids, _firestore = firestore) => {
  const promises = _ids.map((_id) => {
    return getById(_collectionName, _id, _firestore);
  });
  return await Promise.all(promises).then((docs) => {
    return { status: 200, data: docs };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const add = async (_collectionName, _data, _firestore = firestore) => {
  const data = createTimestamp(_data);
  return await _firestore.collection(_collectionName).add(data).then(async (_docRef) => {
    const data2 = await docRef2data(_docRef);
    return { status: 200, data: data2 };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const update = async (_collectionName, _id, _data, _firestore = firestore) => {
  const data = updateTimestamp(_data);
  return await _firestore.collection(_collectionName).doc(_id).update(data).then(() => {
    return { status: 200 };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const deleteDoc = async (_collectionName, _id, _firestore = firestore) => {
  return await _firestore.collection(_collectionName).doc(_id).delete().then(() => {
    return { status: 200 };
  }).catch((error) => {
    return { status: 400, error };
  });
};
const deleteDocs = async (_collectionName, _key, _value, _firestore = firestore) => {
  return await _firestore.collection(_collectionName).where(_key, "==", _value).get().then((querySnapShot) => {
    querySnapShot.docs.map((_doc) => _doc.ref.delete());
    return { status: 200 };
  }).catch((error) => {
    return { status: 400, error };
  });
};

const common = /*#__PURE__*/Object.freeze({
  __proto__: null,
  doc2data: doc2data,
  docRef2data: docRef2data,
  where: where,
  whereIn: whereIn,
  spliceTo10lengthArrays: spliceTo10lengthArrays,
  createTimestamp: createTimestamp,
  updateTimestamp: updateTimestamp,
  getById: getById,
  getByIds: getByIds,
  add: add,
  update: update,
  deleteDoc: deleteDoc,
  deleteDocs: deleteDocs
});

const firestoreService = {
  ...common
};

const deviceTokenKey = "vZOdiayDgG";
const accessTokenKey = "0MyEvG2ejm";
const refreshTokenKey = "0QCGMbGSUJ";
const signDeviceToken = (_documentId) => {
  return jwt.sign(_documentId, deviceTokenKey);
};
const signAccessToken = (_documentId) => {
  const payload = {
    userId: _documentId
  };
  return jwt.sign(payload, accessTokenKey, {
    expiresIn: "1days"
  });
};
const signRefreshToken = (_documentId) => {
  const payload = {
    userId: _documentId
  };
  return jwt.sign(payload, refreshTokenKey, {
    expiresIn: "7days"
  });
};
const verifyDeviceToken = (_deviceToken) => {
  return new Promise((resolve) => {
    jwt.verify(_deviceToken, deviceTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded
        });
      }
      if (err) {
        resolve({
          error: {
            message: err.message || ""
          }
        });
      }
    });
  });
};
const verifyAccessToken = (_accessToken) => {
  return new Promise((resolve) => {
    jwt.verify(_accessToken, accessTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded
        });
      }
      if (err) {
        resolve({
          error: {
            message: err.message || "something error"
          }
        });
      }
    });
  });
};
const verifyRefreshToken = (_refreshToken) => {
  return new Promise((resolve) => {
    jwt.verify(_refreshToken, refreshTokenKey, (err, decoded) => {
      if (decoded) {
        resolve({
          decoded
        });
      }
      if (err) {
        resolve({
          error: {
            message: err.message || "something error"
          }
        });
      }
    });
  });
};
const jwtMiddleware = () => {
  return function(req, res, next) {
    try {
      const { deviceToken, accessToken, refreshToken } = req.cookies;
      Promise.all([
        verifyDeviceToken(deviceToken),
        verifyAccessToken(accessToken),
        verifyRefreshToken(refreshToken)
      ]).then((value) => {
        var _a, _b, _c, _d;
        const [
          resVerifyDeviceToken,
          resVerifyAccessToken,
          resVerifyRefreshToken
        ] = value;
        const userId = resVerifyDeviceToken.decoded || "";
        if (value.every((_verify) => !_verify.error)) {
          const isSameId = userId === ((_a = resVerifyAccessToken.decoded) == null ? void 0 : _a.userId) && userId === ((_b = resVerifyRefreshToken.decoded) == null ? void 0 : _b.userId);
          if (!isSameId) {
            res.status(401);
            return res.json({
              message: "invalid token"
            });
          }
          res.locals.userId = userId;
          return next();
        }
        const hasExpiredAccessToken = ((_c = resVerifyAccessToken.error) == null ? void 0 : _c.message) === "jwt expired";
        const hasExpiredRefreshToken = ((_d = resVerifyRefreshToken.error) == null ? void 0 : _d.message) === "jwt expired";
        if (hasExpiredAccessToken && !hasExpiredRefreshToken) {
          const accessToken2 = signAccessToken(userId);
          const refreshToken2 = signRefreshToken(userId);
          res.cookie("accessToken", accessToken2);
          res.cookie("refreshToken", refreshToken2, { httpOnly: true });
          next();
        } else {
          res.status(401);
          return res.json({
            message: "authentication error"
          });
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400);
      return res.json({
        message: "error"
      });
    }
  };
};

const router$2 = Router();
const hashPassword = (_password) => {
  return bcrypt.hashSync(_password, bcrypt.genSaltSync(8));
};
router$2.post("/sign_up", async (req, res) => {
  try {
    const { email, password, data } = req.body.params;
    const { name = "" } = data;
    const hashedPassword = hashPassword(password);
    const userData = {
      name,
      email,
      hashedPassword,
      rating: 1500
    };
    const resUser = await firestoreService.add("users", userData);
    if (resUser.status !== 200)
      throw resUser.error;
    const user = resUser.data;
    if (!user)
      throw new Error("user is null");
    const userId = user.document_id;
    const deviceToken = signDeviceToken(userId);
    const accessToken = signAccessToken(userId);
    const refreshToken = signRefreshToken(userId);
    res.cookie("deviceToken", deviceToken, { httpOnly: true });
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.status(200);
    return res.json({
      message: "success",
      user: {
        document_id: userId
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400);
    return res.json({
      message: "error"
    });
  }
});
router$2.post("/sign_in", async (req, res) => {
  try {
    const { email, password } = req.body.params;
    const resUsers = await firestoreService.where("users", "email", email);
    if (resUsers.status !== 200)
      throw resUsers.error;
    const users = resUsers.data;
    if (!users[0]) {
      res.status(200);
      return res.json({
        status: 200,
        canSignIn: false,
        message: "\u8A72\u5F53\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u306F\u5B58\u5728\u3057\u307E\u305B\u3093"
      });
    }
    const isMatchPassword = bcrypt.compareSync(password, users[0].hashedPassword || "");
    if (!isMatchPassword) {
      res.status(200);
      return res.json({
        status: 200,
        canSignIn: false,
        message: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059"
      });
    }
    const userId = users[0].document_id;
    const deviceToken = signDeviceToken(userId);
    const accessToken = signAccessToken(userId);
    const refreshToken = signRefreshToken(userId);
    res.cookie("deviceToken", deviceToken, { httpOnly: true });
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.status(200);
    return res.json({
      canSignIn: true,
      message: "success",
      user: {
        document_id: userId
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400);
    return res.json({
      canSignIn: false,
      message: "error"
    });
  }
});
router$2.use(jwtMiddleware());
router$2.get("/", async (req, res) => {
  try {
    const { userId = "" } = res.locals;
    const resUsers = await firestoreService.getById("users", userId);
    if (resUsers.status !== 200)
      throw resUsers.error;
    const user = resUsers.data;
    if (!user)
      throw new Error("user is not found");
    res.status(200);
    return res.json({
      message: "success",
      user: {
        id: user.document_id,
        name: user.name,
        rating: user.rating
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400);
    return res.json({
      message: "error"
    });
  }
});
router$2.post("/auth", async (req, res) => {
  try {
    res.status(200);
    return res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.status(400);
    return res.json({
      message: "error"
    });
  }
});
const user = router$2;

const router = Router();
router.use("/test", test);
router.use("/user", user);
const router$1 = router;

const config = {
  port: 8e3,
  secret: {
    session: "poke-tool-session"
  },
  root: path__default.normalize(path__default.join(__dirname, "/../.."))
};
const config$1 = config;

const configure = (app) => {
  app.disable("x-powered-by");
  app.use(morgan("dev"));
  app.use(compression());
  app.use(bodyParser.json({ limit: "1000mb" }));
  app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 1e7 }));
  app.use(methodOverride());
  app.use(cookieParser());
  app.set("views", config$1.root + "/src/views");
  app.set("view engine", "ejs");
  app.engine("html", require("ejs").renderFile);
  app.use(session({
    secret: config$1.secret.session,
    saveUnintialized: true,
    resave: false
  }));
};
const configure$1 = configure;

const header = (app) => {
  app.use((req, res, next) => {
    res.header({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
      "Cache-Control": "no-store",
      Pragma: "no-cache"
    });
    next();
  });
};
const header$1 = header;

const app = express();
configure$1(app);
header$1(app);
app.use("/v1", router$1);
app.get("/header", (req, res) => {
  res.json({
    username: "test successful!"
  });
});
module.exports = {
  path: "/api",
  handler: app
};
