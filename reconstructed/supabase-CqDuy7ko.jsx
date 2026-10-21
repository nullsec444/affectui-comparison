// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
const e = e => `/` + e;
const t = {};
const n = function (e) {
  return e.pathname.endsWith(`.css`);
};
const r = function (r, i, a) {
  let o = Promise.resolve();
  if (i && i.length > 0) {
    let r;
    let s = document.querySelector(`meta[property=csp-nonce]`);
    let c = s?.nonce || s?.getAttribute(`nonce`);
    function l(e) {
      return Promise.all(e.map(e => Promise.resolve(e).then(value => ({
        status: `fulfilled`,
        value
      }), reason => ({
        status: `rejected`,
        reason
      }))));
    }
    function u(e) {
      if (import.meta.resolve) {
        return new URL(import.meta.resolve(e));
      }
      return new URL(e, import.meta.url);
    }
    o = l(i.map(i => {
      i = e(i, a);
      let o = u(i);
      if (o.href in t) {
        return;
      }
      t[o.href] = true;
      let s = n(o);
      if (r === undefined) {
        r = {
          all: new Set(),
          styles: new Set()
        };
        let e = document.getElementsByTagName(`link`);
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t];
          r.all.add(n.href);
          if (n.rel === `stylesheet`) {
            r.styles.add(n.href);
          }
        }
      }
      if ((s ? r.styles : r.all).has(o.href)) {
        return;
      }
      let l = document.createElement(`link`);
      l.rel = s ? `stylesheet` : `modulepreload`;
      if (!s) {
        l.as = `script`;
      }
      l.crossOrigin = ``;
      l.href = o.href;
      if (c) {
        l.setAttribute(`nonce`, c);
      }
      document.head.appendChild(l);
      if (s) {
        return new Promise((resolve, reject) => {
          l.addEventListener(`load`, resolve);
          l.addEventListener(`error`, () => reject(Error(`Unable to preload CSS for ${o}`)));
        });
      }
    }).filter(e => e !== undefined));
  }
  function s(e) {
    let t = new Event(`vite:preloadError`, {
      cancelable: true
    });
    t.payload = e;
    window.dispatchEvent(t);
    if (!t.defaultPrevented) {
      throw e;
    }
  }
  return o.then(e => {
    for (let t of e || []) {
      if (t.status === `rejected`) {
        s(t.reason);
      }
    }
    return r().catch(s);
  });
};
const i = () => r(() => import("./supabaseClient-MZLUyPvg.jsx").then(e => e.supabase), []);
function a() {
  try {
    if (/access_token|refresh_token|[?&]code=|token_hash/.test(window.location.hash + window.location.search)) {
      return true;
    }
    for (let e = 0; e < localStorage.length; e++) {
      let t = localStorage.key(e) ?? ``;
      if (t.startsWith(`sb-`) && t.endsWith(`-auth-token`)) {
        return true;
      }
    }
  } catch {
    return true;
  }
  return false;
}
export { a as n, r, i as t };
