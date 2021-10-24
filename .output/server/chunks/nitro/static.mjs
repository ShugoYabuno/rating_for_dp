import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"1b3-gTFOSQz0sYaL46rOmUJhcivaZ9s\"",
    "mtime": "2021-10-24T07:20:41.673Z",
    "path": "../public/README.md"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"571-6q9LqIE5Xu944d42R/Jifjt+sEA\"",
    "mtime": "2021-10-24T07:20:41.670Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/0db22cb.js": {
    "type": "application/javascript",
    "etag": "\"5f1-FV65/0KEPGXPCZvOiqhXyUQkrw8\"",
    "mtime": "2021-10-24T07:20:41.664Z",
    "path": "../public/_nuxt/0db22cb.js"
  },
  "/_nuxt/50e81e1.js": {
    "type": "application/javascript",
    "etag": "\"18e-SNcW4HfPGua/3/+rfCCB5Lr77jk\"",
    "mtime": "2021-10-24T07:20:41.664Z",
    "path": "../public/_nuxt/50e81e1.js"
  },
  "/_nuxt/6ac1d11.js": {
    "type": "application/javascript",
    "etag": "\"2182-thydALTVXBWbCjbjACmOzEn/yVQ\"",
    "mtime": "2021-10-24T07:20:41.663Z",
    "path": "../public/_nuxt/6ac1d11.js"
  },
  "/_nuxt/818b0dc.js": {
    "type": "application/javascript",
    "etag": "\"1b0-Y99oWCyz4hHIJ4ryWCeB8oqmpds\"",
    "mtime": "2021-10-24T07:20:41.662Z",
    "path": "../public/_nuxt/818b0dc.js"
  },
  "/_nuxt/8d6a16c.js": {
    "type": "application/javascript",
    "etag": "\"236-eWls1a4HdRCqGHHB+Dybpr1ahxg\"",
    "mtime": "2021-10-24T07:20:41.662Z",
    "path": "../public/_nuxt/8d6a16c.js"
  },
  "/_nuxt/986ab67.js": {
    "type": "application/javascript",
    "etag": "\"ccbb-axsnNGea2ngW/ji07YAGKVPTa48\"",
    "mtime": "2021-10-24T07:20:41.661Z",
    "path": "../public/_nuxt/986ab67.js"
  },
  "/_nuxt/b1fbdf1.js": {
    "type": "application/javascript",
    "etag": "\"d7d0-UWtDib9Iupr1bWfeiFZJsu9Owqw\"",
    "mtime": "2021-10-24T07:20:41.659Z",
    "path": "../public/_nuxt/b1fbdf1.js"
  },
  "/_nuxt/b8b36f3.js": {
    "type": "application/javascript",
    "etag": "\"981-j9IsZdZvVSMDdA76crZ4hqxxGuU\"",
    "mtime": "2021-10-24T07:20:41.659Z",
    "path": "../public/_nuxt/b8b36f3.js"
  },
  "/_nuxt/e114ad1.js": {
    "type": "application/javascript",
    "etag": "\"888c6-zZhhwbx4c8TT3bpQqMoyvuJIbQ0\"",
    "mtime": "2021-10-24T07:20:41.658Z",
    "path": "../public/_nuxt/e114ad1.js"
  },
  "/_nuxt/eff1386.js": {
    "type": "application/javascript",
    "etag": "\"18e-1JSA5bFcB1fHY9w8Q/Oy9BdjXEA\"",
    "mtime": "2021-10-24T07:20:41.656Z",
    "path": "../public/_nuxt/eff1386.js"
  },
  "/_nuxt/f62802e.js": {
    "type": "application/javascript",
    "etag": "\"3cc78-XxhSRVY57R+d3H2QIgTErqj5NNQ\"",
    "mtime": "2021-10-24T07:20:41.654Z",
    "path": "../public/_nuxt/f62802e.js"
  },
  "/_nuxt/f8f783b.js": {
    "type": "application/javascript",
    "etag": "\"71a-ESJF5fF/LNYcBltAsCWCEKRHXMU\"",
    "mtime": "2021-10-24T07:20:41.653Z",
    "path": "../public/_nuxt/f8f783b.js"
  },
  "/css/main.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c5-x7GJNc+7Y/qwjebi25bBiDGWpxQ\"",
    "mtime": "2021-10-24T07:20:41.671Z",
    "path": "../public/css/main.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/static" + "/" + "1635060017";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
