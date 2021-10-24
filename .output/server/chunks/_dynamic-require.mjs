const dynamicChunks = {
 ['pages/index.js']: () => import('./app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/match/_matchId.js']: () => import('./app/pages/match/_matchId.mjs').then(function (n) { return n._; }),
 ['pages/match/list.js']: () => import('./app/pages/match/list.mjs').then(function (n) { return n.l; }),
 ['pages/match/start.js']: () => import('./app/pages/match/start.mjs').then(function (n) { return n.s; }),
 ['pages/match/waiting.js']: () => import('./app/pages/match/waiting.mjs').then(function (n) { return n.w; }),
 ['pages/user/sign_in.js']: () => import('./app/pages/user/sign_in.mjs').then(function (n) { return n.s; }),
 ['pages/user/sign_up.js']: () => import('./app/pages/user/sign_up.mjs').then(function (n) { return n.s; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
