// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
const t = (e, t) => () => {
  if (!t) {
    e((t = {
      exports: {}
    }).exports, t);
    e = null;
  }
  return t.exports;
};
const n = (t, n) => {
  let r = {};
  for (var i in t) {
    Object.defineProperty(r, i, {
      get: t[i],
      enumerable: true
    });
  }
  if (!n) {
    Object.defineProperty(r, Symbol.toStringTag, {
      value: `Module`
    });
  }
  return r;
};
export { n, t };
