// current-assets/supabaseClient-MZLUyPvg.js
var e = /* @__PURE__ */ Symbol.for(`@supabase/supabase-js.traceContextExtractor`);
function t() {
  return globalThis[e];
}
function n(e8, t2) {
  var n2 = {};
  for (var r2 in e8) Object.prototype.hasOwnProperty.call(e8, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e8[r2]);
  if (e8 != null && typeof Object.getOwnPropertySymbols == `function`) for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e8); i2 < r2.length; i2++) t2.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e8, r2[i2]) && (n2[r2[i2]] = e8[r2[i2]]);
  return n2;
}
function r(e8, t2, n2, r2) {
  function i2(e9) {
    return e9 instanceof n2 ? e9 : new n2(function(t3) {
      t3(e9);
    });
  }
  return new (n2 ||= Promise)(function(n3, a2) {
    function o2(e9) {
      try {
        c2(r2.next(e9));
      } catch (e10) {
        a2(e10);
      }
    }
    function s2(e9) {
      try {
        c2(r2.throw(e9));
      } catch (e10) {
        a2(e10);
      }
    }
    function c2(e9) {
      e9.done ? n3(e9.value) : i2(e9.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e8, t2 || [])).next());
  });
}
var i = (e8) => e8 ? (...t2) => e8(...t2) : (...e9) => fetch(...e9);
var a = class extends Error {
  constructor(e8, t2 = `FunctionsError`, n2) {
    super(e8), this.name = t2, this.context = n2;
  }
  toJSON() {
    return { name: this.name, message: this.message, context: this.context };
  }
};
var o = class extends a {
  constructor(e8) {
    super(`Failed to send a request to the Edge Function`, `FunctionsFetchError`, e8);
  }
};
var s = class extends a {
  constructor(e8) {
    super(`Relay Error invoking the Edge Function`, `FunctionsRelayError`, e8);
  }
};
var c = class extends a {
  constructor(e8) {
    super(`Edge Function returned a non-2xx status code`, `FunctionsHttpError`, e8);
  }
};
var l;
(function(e8) {
  e8.Any = `any`, e8.ApNortheast1 = `ap-northeast-1`, e8.ApNortheast2 = `ap-northeast-2`, e8.ApSouth1 = `ap-south-1`, e8.ApSoutheast1 = `ap-southeast-1`, e8.ApSoutheast2 = `ap-southeast-2`, e8.CaCentral1 = `ca-central-1`, e8.EuCentral1 = `eu-central-1`, e8.EuWest1 = `eu-west-1`, e8.EuWest2 = `eu-west-2`, e8.EuWest3 = `eu-west-3`, e8.SaEast1 = `sa-east-1`, e8.UsEast1 = `us-east-1`, e8.UsWest1 = `us-west-1`, e8.UsWest2 = `us-west-2`;
})(l ||= {});
var u = class {
  constructor(e8, { headers: t2 = {}, customFetch: n2, region: r2 = l.Any } = {}) {
    this.url = e8, this.headers = t2, this.region = r2, this.fetch = i(n2);
  }
  setAuth(e8) {
    this.headers.Authorization = `Bearer ${e8}`;
  }
  invoke(e8) {
    return r(this, arguments, void 0, function* (e9, t2 = {}) {
      var n2;
      let r2, i2, a2;
      try {
        let { headers: n3, method: l2, body: u2, signal: d2, timeout: f2 } = t2, p2 = {}, { region: m2 } = t2;
        m2 ||= this.region;
        let h2 = new URL(`${this.url}/${e9}`);
        m2 && m2 !== `any` && (p2[`x-region`] = m2, h2.searchParams.set(`forceFunctionRegion`, m2));
        let g2, ee2 = !!n3 && Object.keys(n3).some((e10) => e10.toLowerCase() === `content-type`);
        u2 && !ee2 ? typeof Blob < `u` && u2 instanceof Blob || u2 instanceof ArrayBuffer ? (p2[`Content-Type`] = `application/octet-stream`, g2 = u2) : typeof u2 == `string` ? (p2[`Content-Type`] = `text/plain`, g2 = u2) : typeof FormData < `u` && u2 instanceof FormData ? g2 = u2 : (p2[`Content-Type`] = `application/json`, g2 = JSON.stringify(u2)) : g2 = u2 && typeof u2 != `string` && !(typeof Blob < `u` && u2 instanceof Blob) && !(u2 instanceof ArrayBuffer) && !(typeof FormData < `u` && u2 instanceof FormData) ? JSON.stringify(u2) : u2;
        let te2 = d2;
        f2 && (i2 = new AbortController(), r2 = setTimeout(() => i2.abort(), f2), d2 ? (te2 = i2.signal, a2 = () => i2.abort(), d2.addEventListener(`abort`, a2)) : te2 = i2.signal);
        let _2 = yield this.fetch(h2.toString(), { method: l2 || `POST`, headers: Object.assign(Object.assign(Object.assign({}, p2), this.headers), n3), body: g2, signal: te2 }).catch((e10) => {
          throw new o(e10);
        }), ne2 = _2.headers.get(`x-relay-error`);
        if (ne2 && ne2 === `true`) throw new s(_2);
        if (!_2.ok) throw new c(_2);
        let v2 = (_2.headers.get(`Content-Type`) ?? `text/plain`).split(`;`)[0].trim().toLowerCase(), re2;
        return re2 = v2 === `application/json` ? yield _2.json() : v2 === `application/octet-stream` || v2 === `application/pdf` ? yield _2.blob() : v2 === `text/event-stream` ? _2 : v2 === `multipart/form-data` ? yield _2.formData() : yield _2.text(), { data: re2, error: null, response: _2 };
      } catch (e10) {
        return { data: null, error: e10, response: e10 instanceof c || e10 instanceof s ? e10.context : void 0 };
      } finally {
        r2 && clearTimeout(r2), a2 && ((n2 = t2.signal) == null || n2.removeEventListener(`abort`, a2));
      }
    });
  }
};
var d = class extends Error {
  constructor(e8) {
    super(e8.message), this.name = `PostgrestError`, this.details = e8.details, this.hint = e8.hint, this.code = e8.code;
  }
  toJSON() {
    return { name: this.name, message: this.message, details: this.details, hint: this.hint, code: this.code };
  }
};
var f = 3;
var p = (e8) => Math.min(1e3 * 2 ** e8, 3e4);
var m = [520, 503];
var h = [`GET`, `HEAD`, `OPTIONS`];
function g(e8) {
  "@babel/helpers - typeof";
  return g = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e9) {
    return typeof e9;
  } : function(e9) {
    return e9 && typeof Symbol == `function` && e9.constructor === Symbol && e9 !== Symbol.prototype ? `symbol` : typeof e9;
  }, g(e8);
}
function ee(e8, t2) {
  if (g(e8) != `object` || !e8) return e8;
  var n2 = e8[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e8, t2 || `default`);
    if (g(r2) != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t2 === `string` ? String : Number)(e8);
}
function te(e8) {
  var t2 = ee(e8, `string`);
  return g(t2) == `symbol` ? t2 : t2 + ``;
}
function _(e8, t2, n2) {
  return (t2 = te(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function ne(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function v(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? ne(Object(n2), true).forEach(function(t3) {
      _(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : ne(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
function re(e8, t2) {
  return new Promise((n2) => {
    if (t2?.aborted) {
      n2();
      return;
    }
    let r2 = setTimeout(() => {
      t2?.removeEventListener(`abort`, i2), n2();
    }, e8);
    function i2() {
      clearTimeout(r2), n2();
    }
    t2?.addEventListener(`abort`, i2);
  });
}
function ie(e8, t2, n2, r2) {
  return !(!r2 || n2 >= f || !h.includes(e8) || !m.includes(t2));
}
async function ae(e8, t2, n2, r2) {
  let i2 = 0;
  for (; ; ) {
    let a2 = v({}, n2.headers);
    i2 > 0 && (a2[`X-Retry-Count`] = String(i2));
    let o2;
    try {
      o2 = await e8(t2, { method: n2.method, headers: a2, body: n2.body, signal: n2.signal });
    } catch (e9) {
      if (e9?.name === `AbortError` || e9?.code === `ABORT_ERR` || !h.includes(n2.method)) throw e9;
      if (r2 && i2 < f) {
        let e10 = p(i2);
        i2++, await re(e10, n2.signal);
        continue;
      }
      throw e9;
    }
    if (ie(n2.method, o2.status, i2, r2)) {
      let e9 = o2.headers?.get(`Retry-After`) ?? null, t3 = e9 === null ? p(i2) : Math.max(0, parseInt(e9, 10) || 0) * 1e3;
      await o2.text(), i2++, await re(t3, n2.signal);
      continue;
    }
    return o2;
  }
}
var oe = class {
  constructor(e8) {
    this.shouldThrowOnError = false, this.retryEnabled = true, this.method = e8.method, this.url = e8.url, this.headers = new Headers(e8.headers), this.schema = e8.schema, this.body = e8.body, this.shouldThrowOnError = e8.shouldThrowOnError ?? false, this.signal = e8.signal, this.isMaybeSingle = e8.isMaybeSingle ?? false, this.shouldStripNulls = e8.shouldStripNulls ?? false, this.urlLengthLimit = e8.urlLengthLimit ?? 8e3, this.retryEnabled = e8.retry ?? true, this.fetch = e8.fetch ? e8.fetch : fetch;
  }
  throwOnError() {
    return this.shouldThrowOnError = true, this;
  }
  stripNulls() {
    if (this.headers.get(`Accept`) === `text/csv`) throw Error(`stripNulls() cannot be used with csv()`);
    return this.shouldStripNulls = true, this;
  }
  setHeader(e8, t2) {
    return this.headers = new Headers(this.headers), this.headers.set(e8, t2), this;
  }
  retry(e8) {
    return this.retryEnabled = e8, this;
  }
  then(e8, t2) {
    var n2 = this;
    if (this.schema === void 0 || ([`GET`, `HEAD`].includes(this.method) ? this.headers.set(`Accept-Profile`, this.schema) : this.headers.set(`Content-Profile`, this.schema)), this.method !== `GET` && this.method !== `HEAD` && this.headers.set(`Content-Type`, `application/json`), this.shouldStripNulls) {
      let e9 = this.headers.get(`Accept`);
      e9 === `application/vnd.pgrst.object+json` ? this.headers.set(`Accept`, `application/vnd.pgrst.object+json;nulls=stripped`) : (!e9 || e9 === `application/json`) && this.headers.set(`Accept`, `application/vnd.pgrst.array+json;nulls=stripped`);
    }
    let r2 = this.fetch, i2 = (async () => {
      let e9 = {};
      n2.headers.forEach((t4, n3) => {
        e9[n3] = t4;
      });
      let t3 = await ae(r2, n2.url.toString(), { method: n2.method, headers: e9, body: JSON.stringify(n2.body, (e10, t4) => typeof t4 == `bigint` ? t4.toString() : t4), signal: n2.signal }, n2.retryEnabled);
      return await n2.processResponse(t3);
    })();
    return this.shouldThrowOnError || (i2 = i2.catch((e9) => {
      let t3 = ``, n3 = ``, r3 = ``, i3 = e9?.cause;
      if (i3) {
        let n4 = i3?.message ?? ``, r4 = i3?.code ?? ``;
        t3 = `${e9?.name ?? `FetchError`}: ${e9?.message}`, t3 += `

Caused by: ${i3?.name ?? `Error`}: ${n4}`, r4 && (t3 += ` (${r4})`), i3?.stack && (t3 += `
${i3.stack}`);
      } else t3 = e9?.stack ?? ``;
      let a2 = this.url.toString().length;
      return e9?.name === `AbortError` || e9?.code === `ABORT_ERR` ? (r3 = ``, n3 = `Request was aborted (timeout or manual cancellation)`, a2 > this.urlLengthLimit && (n3 += `. Note: Your request URL is ${a2} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (i3?.name === `HeadersOverflowError` || i3?.code === `UND_ERR_HEADERS_OVERFLOW`) && (r3 = ``, n3 = `HTTP headers exceeded server limits (typically 16KB)`, a2 > this.urlLengthLimit && (n3 += `. Your request URL is ${a2} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), { success: false, error: { message: `${e9?.name ?? `FetchError`}: ${e9?.message}`, details: t3, hint: n3, code: r3 }, data: null, count: null, status: 0, statusText: `` };
    })), i2.then(e8, t2);
  }
  async processResponse(e8) {
    var t2 = this;
    let n2 = null, r2 = null, i2 = null, a2 = e8.status, o2 = e8.statusText;
    if (e8.ok) {
      if (t2.method !== `HEAD`) {
        let i3 = await e8.text();
        if (i3 !== ``) {
          if (t2.headers.get(`Accept`) === `text/csv`) r2 = i3;
          else if (t2.headers.get(`Accept`) && t2.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)) r2 = i3;
          else try {
            r2 = JSON.parse(i3);
          } catch {
            if (n2 = { message: i3 }, r2 = null, t2.shouldThrowOnError) throw new d({ message: i3, details: ``, hint: ``, code: `` });
          }
        }
      }
      let s2 = t2.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/), c2 = e8.headers.get(`content-range`)?.split(`/`);
      if (s2 && c2 && c2.length > 1 && (i2 = parseInt(c2[1])), t2.isMaybeSingle && Array.isArray(r2)) {
        if (r2.length > 1) {
          if (n2 = { code: `PGRST116`, details: `Results contain ${r2.length} rows, application/vnd.pgrst.object+json requires 1 row`, hint: null, message: `JSON object requested, multiple (or no) rows returned` }, r2 = null, i2 = null, a2 = 406, o2 = `Not Acceptable`, t2.shouldThrowOnError) throw new d(v(v({}, n2), {}, { hint: n2.hint ?? `` }));
        } else r2 = r2.length === 1 ? r2[0] : null;
      }
    } else {
      let i3 = await e8.text();
      try {
        n2 = JSON.parse(i3), Array.isArray(n2) && e8.status === 404 && (r2 = [], n2 = null, a2 = 200, o2 = `OK`);
      } catch {
        e8.status === 404 && i3 === `` ? (a2 = 204, o2 = `No Content`) : n2 = { message: i3 };
      }
      if (n2 && t2.shouldThrowOnError) throw new d(n2);
    }
    return { success: n2 === null, error: n2, data: r2, count: i2, status: a2, statusText: o2 };
  }
  returns() {
    return this;
  }
  overrideTypes() {
    return this;
  }
};
var se = class extends oe {
  throwOnError() {
    return super.throwOnError();
  }
  select(e8) {
    let t2 = false, n2 = (e8 ?? `*`).split(``).map((e9) => /\s/.test(e9) && !t2 ? `` : (e9 === `"` && (t2 = !t2), e9)).join(``);
    return this.url.searchParams.set(`select`, n2), this.headers.append(`Prefer`, `return=representation`), this;
  }
  order(e8, { ascending: t2 = true, nullsFirst: n2, foreignTable: r2, referencedTable: i2 = r2 } = {}) {
    let a2 = i2 ? `${i2}.order` : `order`, o2 = this.url.searchParams.get(a2);
    return this.url.searchParams.set(a2, `${o2 ? `${o2},` : ``}${e8}.${t2 ? `asc` : `desc`}${n2 === void 0 ? `` : n2 ? `.nullsfirst` : `.nullslast`}`), this;
  }
  limit(e8, { foreignTable: t2, referencedTable: n2 = t2 } = {}) {
    let r2 = n2 === void 0 ? `limit` : `${n2}.limit`;
    return this.url.searchParams.set(r2, `${e8}`), this;
  }
  range(e8, t2, { foreignTable: n2, referencedTable: r2 = n2 } = {}) {
    let i2 = r2 === void 0 ? `offset` : `${r2}.offset`, a2 = r2 === void 0 ? `limit` : `${r2}.limit`;
    return this.url.searchParams.set(i2, `${e8}`), this.url.searchParams.set(a2, `${t2 - e8 + 1}`), this;
  }
  abortSignal(e8) {
    return this.signal = e8, this;
  }
  single() {
    return this.headers.set(`Accept`, `application/vnd.pgrst.object+json`), this;
  }
  maybeSingle() {
    return this.isMaybeSingle = true, this;
  }
  csv() {
    return this.headers.set(`Accept`, `text/csv`), this;
  }
  geojson() {
    return this.headers.set(`Accept`, `application/geo+json`), this;
  }
  explain({ analyze: e8 = false, verbose: t2 = false, settings: n2 = false, buffers: r2 = false, wal: i2 = false, format: a2 = `text` } = {}) {
    let o2 = [e8 ? `analyze` : null, t2 ? `verbose` : null, n2 ? `settings` : null, r2 ? `buffers` : null, i2 ? `wal` : null].filter(Boolean).join(`|`), s2 = this.headers.get(`Accept`) ?? `application/json`;
    return this.headers.set(`Accept`, `application/vnd.pgrst.plan+${a2}; for="${s2}"; options=${o2};`), this;
  }
  rollback() {
    return this.headers.append(`Prefer`, `tx=rollback`), this;
  }
  returns() {
    return this;
  }
  maxAffected(e8) {
    return this.headers.append(`Prefer`, `handling=strict`), this.headers.append(`Prefer`, `max-affected=${e8}`), this;
  }
};
var ce = RegExp(`[,()]`);
var y = class extends se {
  throwOnError() {
    return super.throwOnError();
  }
  eq(e8, t2) {
    return this.url.searchParams.append(e8, `eq.${t2}`), this;
  }
  neq(e8, t2) {
    return this.url.searchParams.append(e8, `neq.${t2}`), this;
  }
  gt(e8, t2) {
    return this.url.searchParams.append(e8, `gt.${t2}`), this;
  }
  gte(e8, t2) {
    return this.url.searchParams.append(e8, `gte.${t2}`), this;
  }
  lt(e8, t2) {
    return this.url.searchParams.append(e8, `lt.${t2}`), this;
  }
  lte(e8, t2) {
    return this.url.searchParams.append(e8, `lte.${t2}`), this;
  }
  like(e8, t2) {
    return this.url.searchParams.append(e8, `like.${t2}`), this;
  }
  likeAllOf(e8, t2) {
    return this.url.searchParams.append(e8, `like(all).{${t2.join(`,`)}}`), this;
  }
  likeAnyOf(e8, t2) {
    return this.url.searchParams.append(e8, `like(any).{${t2.join(`,`)}}`), this;
  }
  ilike(e8, t2) {
    return this.url.searchParams.append(e8, `ilike.${t2}`), this;
  }
  ilikeAllOf(e8, t2) {
    return this.url.searchParams.append(e8, `ilike(all).{${t2.join(`,`)}}`), this;
  }
  ilikeAnyOf(e8, t2) {
    return this.url.searchParams.append(e8, `ilike(any).{${t2.join(`,`)}}`), this;
  }
  regexMatch(e8, t2) {
    return this.url.searchParams.append(e8, `match.${t2}`), this;
  }
  regexIMatch(e8, t2) {
    return this.url.searchParams.append(e8, `imatch.${t2}`), this;
  }
  is(e8, t2) {
    return this.url.searchParams.append(e8, `is.${t2}`), this;
  }
  isDistinct(e8, t2) {
    return this.url.searchParams.append(e8, `isdistinct.${t2}`), this;
  }
  in(e8, t2) {
    let n2 = Array.from(new Set(t2)).map((e9) => typeof e9 == `string` && ce.test(e9) ? `"${e9}"` : `${e9}`).join(`,`);
    return this.url.searchParams.append(e8, `in.(${n2})`), this;
  }
  notIn(e8, t2) {
    let n2 = Array.from(new Set(t2)).map((e9) => typeof e9 == `string` && ce.test(e9) ? `"${e9}"` : `${e9}`).join(`,`);
    return this.url.searchParams.append(e8, `not.in.(${n2})`), this;
  }
  contains(e8, t2) {
    return typeof t2 == `string` ? this.url.searchParams.append(e8, `cs.${t2}`) : Array.isArray(t2) ? this.url.searchParams.append(e8, `cs.{${t2.join(`,`)}}`) : this.url.searchParams.append(e8, `cs.${JSON.stringify(t2)}`), this;
  }
  containedBy(e8, t2) {
    return typeof t2 == `string` ? this.url.searchParams.append(e8, `cd.${t2}`) : Array.isArray(t2) ? this.url.searchParams.append(e8, `cd.{${t2.join(`,`)}}`) : this.url.searchParams.append(e8, `cd.${JSON.stringify(t2)}`), this;
  }
  rangeGt(e8, t2) {
    return this.url.searchParams.append(e8, `sr.${t2}`), this;
  }
  rangeGte(e8, t2) {
    return this.url.searchParams.append(e8, `nxl.${t2}`), this;
  }
  rangeLt(e8, t2) {
    return this.url.searchParams.append(e8, `sl.${t2}`), this;
  }
  rangeLte(e8, t2) {
    return this.url.searchParams.append(e8, `nxr.${t2}`), this;
  }
  rangeAdjacent(e8, t2) {
    return this.url.searchParams.append(e8, `adj.${t2}`), this;
  }
  overlaps(e8, t2) {
    return typeof t2 == `string` ? this.url.searchParams.append(e8, `ov.${t2}`) : this.url.searchParams.append(e8, `ov.{${t2.join(`,`)}}`), this;
  }
  textSearch(e8, t2, { config: n2, type: r2 } = {}) {
    let i2 = ``;
    r2 === `plain` ? i2 = `pl` : r2 === `phrase` ? i2 = `ph` : r2 === `websearch` && (i2 = `w`);
    let a2 = n2 === void 0 ? `` : `(${n2})`;
    return this.url.searchParams.append(e8, `${i2}fts${a2}.${t2}`), this;
  }
  match(e8) {
    return Object.entries(e8).filter(([e9, t2]) => t2 !== void 0).forEach(([e9, t2]) => {
      this.url.searchParams.append(e9, `eq.${t2}`);
    }), this;
  }
  not(e8, t2, n2) {
    return this.url.searchParams.append(e8, `not.${t2}.${n2}`), this;
  }
  or(e8, { foreignTable: t2, referencedTable: n2 = t2 } = {}) {
    let r2 = n2 ? `${n2}.or` : `or`;
    return this.url.searchParams.append(r2, `(${e8})`), this;
  }
  filter(e8, t2, n2) {
    return this.url.searchParams.append(e8, `${t2}.${n2}`), this;
  }
};
var le = class {
  constructor(e8, { headers: t2 = {}, schema: n2, fetch: r2, urlLengthLimit: i2 = 8e3, retry: a2 }) {
    this.url = e8, this.headers = new Headers(t2), this.schema = n2, this.fetch = r2, this.urlLengthLimit = i2, this.retry = a2;
  }
  cloneRequestState() {
    return { url: new URL(this.url.toString()), headers: new Headers(this.headers) };
  }
  select(e8, t2) {
    let { head: n2 = false, count: r2 } = t2 ?? {}, i2 = n2 ? `HEAD` : `GET`, a2 = false, o2 = (e8 ?? `*`).split(``).map((e9) => /\s/.test(e9) && !a2 ? `` : (e9 === `"` && (a2 = !a2), e9)).join(``), { url: s2, headers: c2 } = this.cloneRequestState();
    return s2.searchParams.set(`select`, o2), r2 && c2.append(`Prefer`, `count=${r2}`), new y({ method: i2, url: s2, headers: c2, schema: this.schema, fetch: this.fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  insert(e8, { count: t2, defaultToNull: n2 = true } = {}) {
    let { url: r2, headers: i2 } = this.cloneRequestState();
    if (t2 && i2.append(`Prefer`, `count=${t2}`), n2 || i2.append(`Prefer`, `missing=default`), Array.isArray(e8)) {
      let t3 = e8.reduce((e9, t4) => e9.concat(Object.keys(t4)), []);
      if (t3.length > 0) {
        let e9 = [...new Set(t3)].map((e10) => `"${e10}"`);
        r2.searchParams.set(`columns`, e9.join(`,`));
      }
    }
    return new y({ method: `POST`, url: r2, headers: i2, schema: this.schema, body: e8, fetch: this.fetch ?? fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  upsert(e8, { onConflict: t2, ignoreDuplicates: n2 = false, count: r2, defaultToNull: i2 = true } = {}) {
    let { url: a2, headers: o2 } = this.cloneRequestState();
    if (o2.append(`Prefer`, `resolution=${n2 ? `ignore` : `merge`}-duplicates`), t2 !== void 0 && a2.searchParams.set(`on_conflict`, t2), r2 && o2.append(`Prefer`, `count=${r2}`), i2 || o2.append(`Prefer`, `missing=default`), Array.isArray(e8)) {
      let t3 = e8.reduce((e9, t4) => e9.concat(Object.keys(t4)), []);
      if (t3.length > 0) {
        let e9 = [...new Set(t3)].map((e10) => `"${e10}"`);
        a2.searchParams.set(`columns`, e9.join(`,`));
      }
    }
    return new y({ method: `POST`, url: a2, headers: o2, schema: this.schema, body: e8, fetch: this.fetch ?? fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  update(e8, { count: t2 } = {}) {
    let { url: n2, headers: r2 } = this.cloneRequestState();
    return t2 && r2.append(`Prefer`, `count=${t2}`), new y({ method: `PATCH`, url: n2, headers: r2, schema: this.schema, body: e8, fetch: this.fetch ?? fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  delete({ count: e8 } = {}) {
    let { url: t2, headers: n2 } = this.cloneRequestState();
    return e8 && n2.append(`Prefer`, `count=${e8}`), new y({ method: `DELETE`, url: t2, headers: n2, schema: this.schema, fetch: this.fetch ?? fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
};
function ue(e8, t2) {
  try {
    let t3 = JSON.parse(e8);
    if (t3 && typeof t3 == `object` && !Array.isArray(t3)) return new d({ message: String(t3.message ?? e8), details: t3.details ?? ``, hint: t3.hint ?? ``, code: t3.code ?? `` });
  } catch {
  }
  return new d({ message: e8 || t2, details: ``, hint: ``, code: `` });
}
function de(e8, t2, n2) {
  let r2 = e8;
  return { success: false, error: new d({ message: `${r2?.name ?? `FetchError`}: ${r2?.message}`, details: ``, hint: ``, code: `` }), data: null, count: null, status: t2, statusText: n2 };
}
var fe = class e2 {
  constructor(e8, { headers: t2 = {}, schema: n2, fetch: r2, timeout: i2, urlLengthLimit: a2 = 8e3, retry: o2 } = {}) {
    this.url = e8, this.headers = new Headers(t2), this.schemaName = n2, this.urlLengthLimit = a2;
    let s2 = r2 ?? globalThis.fetch;
    this.fetch = i2 !== void 0 && i2 > 0 ? (e9, t3) => {
      let n3 = new AbortController(), r3 = setTimeout(() => n3.abort(), i2), a3 = t3?.signal;
      if (a3) {
        if (a3.aborted) return clearTimeout(r3), s2(e9, t3);
        let i3 = () => {
          clearTimeout(r3), n3.abort();
        };
        return a3.addEventListener(`abort`, i3, { once: true }), s2(e9, v(v({}, t3), {}, { signal: n3.signal })).finally(() => {
          clearTimeout(r3), a3.removeEventListener(`abort`, i3);
        });
      }
      return s2(e9, v(v({}, t3), {}, { signal: n3.signal })).finally(() => clearTimeout(r3));
    } : s2, this.retry = o2;
  }
  from(e8) {
    if (!e8 || typeof e8 != `string` || e8.trim() === ``) throw Error(`Invalid relation name: relation must be a non-empty string.`);
    return new le(new URL(`${this.url}/${e8}`), { headers: new Headers(this.headers), schema: this.schemaName, fetch: this.fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  schema(t2) {
    return new e2(this.url, { headers: this.headers, schema: t2, fetch: this.fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
  async getOpenApiSpec() {
    var e8 = this;
    let t2 = new Headers(e8.headers);
    t2.set(`Accept`, `application/openapi+json`), e8.schemaName && t2.set(`Accept-Profile`, e8.schemaName);
    let n2 = {};
    t2.forEach((e9, t3) => {
      n2[t3] = e9;
    });
    let r2 = e8.fetch ?? globalThis.fetch, i2;
    try {
      i2 = await ae(r2, `${e8.url}/`, { method: `GET`, headers: n2 }, e8.retry ?? true);
    } catch (e9) {
      return de(e9, 0, ``);
    }
    let a2;
    try {
      a2 = await i2.text();
    } catch (e9) {
      return de(e9, i2.status, i2.statusText);
    }
    if (i2.ok) try {
      return { success: true, error: null, data: JSON.parse(a2), count: null, status: i2.status, statusText: i2.statusText };
    } catch {
    }
    return { success: false, error: ue(a2, i2.statusText), data: null, count: null, status: i2.status, statusText: i2.statusText };
  }
  rpc(e8, t2 = {}, { head: n2 = false, get: r2 = false, count: i2 } = {}) {
    let a2, o2 = new URL(`${this.url}/rpc/${e8}`), s2, c2 = (e9) => typeof e9 == `object` && !!e9 && (!Array.isArray(e9) || e9.some(c2)), l2 = n2 && Object.values(t2).some(c2);
    l2 ? (a2 = `POST`, s2 = t2) : n2 || r2 ? (a2 = n2 ? `HEAD` : `GET`, Object.entries(t2).filter(([e9, t3]) => t3 !== void 0).map(([e9, t3]) => [e9, Array.isArray(t3) ? `{${t3.join(`,`)}}` : `${t3}`]).forEach(([e9, t3]) => {
      o2.searchParams.append(e9, t3);
    })) : (a2 = `POST`, s2 = t2);
    let u2 = new Headers(this.headers);
    return l2 ? u2.set(`Prefer`, i2 ? `count=${i2},return=minimal` : `return=minimal`) : i2 && u2.set(`Prefer`, `count=${i2}`), new y({ method: a2, url: o2, headers: u2, schema: this.schemaName, body: s2, fetch: this.fetch ?? fetch, urlLengthLimit: this.urlLengthLimit, retry: this.retry });
  }
};
var pe = class {
  constructor() {
  }
  static detectEnvironment() {
    if (typeof WebSocket < `u`) return { type: `native`, wsConstructor: WebSocket };
    let e8 = globalThis;
    if (typeof globalThis < `u` && e8.WebSocket !== void 0) return { type: `native`, wsConstructor: e8.WebSocket };
    let t2 = typeof global < `u` ? global : void 0;
    if (t2 && t2.WebSocket !== void 0) return { type: `native`, wsConstructor: t2.WebSocket };
    if (typeof globalThis < `u` && e8.WebSocketPair !== void 0 && globalThis.WebSocket === void 0) return { type: `cloudflare`, error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`, workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.` };
    if (typeof globalThis < `u` && e8.EdgeRuntime || typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`)) return { type: `unsupported`, error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`, workaround: `Use serverless functions or a different deployment target for WebSocket functionality.` };
    let n2 = globalThis.process;
    if (n2) {
      let e9 = n2.versions;
      if (e9 && e9.node) return { type: `unsupported`, error: `Node.js detected but native WebSocket not found.`, workaround: `Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.` };
    }
    return { type: `unsupported`, error: `Unknown JavaScript runtime without WebSocket support.`, workaround: `Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.` };
  }
  static getWebSocketConstructor() {
    let e8 = this.detectEnvironment();
    if (e8.wsConstructor) return e8.wsConstructor;
    let t2 = e8.error || `WebSocket not supported in this environment.`;
    throw e8.workaround && (t2 += `

Suggested solution: ${e8.workaround}`), Error(t2);
  }
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === `native`;
    } catch {
      return false;
    }
  }
};
var me = `realtime-js/2.117.2`;
var he = `1.0.0`;
var ge = `2.0.0`;
var _e = ge;
var ve = 1e4;
var ye = 15e3;
var be = 1e4;
var b = { closed: `closed`, errored: `errored`, joined: `joined`, joining: `joining`, leaving: `leaving` };
var xe = { close: `phx_close`, error: `phx_error`, join: `phx_join`, reply: `phx_reply`, leave: `phx_leave`, access_token: `access_token` };
var Se = { connecting: `connecting`, open: `open`, closing: `closing`, closed: `closed` };
var Ce = class {
  constructor(e8) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = `broadcast`, this.allowedMetadataKeys = [], this.allowedMetadataKeys = e8 ?? [];
  }
  encode(e8, t2) {
    if (e8.event === this.BROADCAST_EVENT && !(e8.payload instanceof ArrayBuffer) && typeof e8.payload.event == `string`) return t2(this._binaryEncodeUserBroadcastPush(e8));
    let n2 = [e8.join_ref, e8.ref, e8.topic, e8.event, e8.payload];
    return t2(JSON.stringify(n2));
  }
  _binaryEncodeUserBroadcastPush(e8) {
    return this._isArrayBuffer(e8.payload?.payload) ? this._encodeBinaryUserBroadcastPush(e8) : this._encodeJsonUserBroadcastPush(e8);
  }
  _encodeBinaryUserBroadcastPush(e8) {
    let t2 = e8.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e8, this.BINARY_ENCODING, t2);
  }
  _encodeJsonUserBroadcastPush(e8) {
    let t2 = e8.payload?.payload ?? {}, n2 = new TextEncoder().encode(JSON.stringify(t2)).buffer;
    return this._encodeUserBroadcastPush(e8, this.JSON_ENCODING, n2);
  }
  _encodeUserBroadcastPush(e8, t2, n2) {
    let r2 = new TextEncoder(), i2 = r2.encode(e8.topic), a2 = r2.encode(e8.ref ?? ``), o2 = r2.encode(e8.join_ref ?? ``), s2 = r2.encode(e8.payload.event), c2 = this.allowedMetadataKeys ? this._pick(e8.payload, this.allowedMetadataKeys) : {}, l2 = r2.encode(Object.keys(c2).length === 0 ? `` : JSON.stringify(c2));
    if (o2.length > 255) throw Error(`joinRef length ${o2.length} exceeds maximum of 255`);
    if (a2.length > 255) throw Error(`ref length ${a2.length} exceeds maximum of 255`);
    if (i2.length > 255) throw Error(`topic length ${i2.length} exceeds maximum of 255`);
    if (s2.length > 255) throw Error(`userEvent length ${s2.length} exceeds maximum of 255`);
    if (l2.length > 255) throw Error(`metadata length ${l2.length} exceeds maximum of 255`);
    let u2 = this.USER_BROADCAST_PUSH_META_LENGTH + o2.length + a2.length + i2.length + s2.length + l2.length, d2 = new ArrayBuffer(this.HEADER_LENGTH + u2), f2 = new DataView(d2), p2 = new Uint8Array(d2), m2 = 0;
    f2.setUint8(m2++, this.KINDS.userBroadcastPush), f2.setUint8(m2++, o2.length), f2.setUint8(m2++, a2.length), f2.setUint8(m2++, i2.length), f2.setUint8(m2++, s2.length), f2.setUint8(m2++, l2.length), f2.setUint8(m2++, t2), p2.set(o2, m2), m2 += o2.length, p2.set(a2, m2), m2 += a2.length, p2.set(i2, m2), m2 += i2.length, p2.set(s2, m2), m2 += s2.length, p2.set(l2, m2), m2 += l2.length;
    var h2 = new Uint8Array(d2.byteLength + n2.byteLength);
    return h2.set(new Uint8Array(d2), 0), h2.set(new Uint8Array(n2), d2.byteLength), h2.buffer;
  }
  decode(e8, t2) {
    if (this._isArrayBuffer(e8)) return t2(this._binaryDecode(e8));
    if (typeof e8 == `string`) {
      let [n2, r2, i2, a2, o2] = JSON.parse(e8);
      return t2({ join_ref: n2, ref: r2, topic: i2, event: a2, payload: o2 });
    }
    return t2({});
  }
  _binaryDecode(e8) {
    let t2 = new DataView(e8), n2 = t2.getUint8(0), r2 = new TextDecoder();
    switch (n2) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e8, t2, r2);
    }
  }
  _decodeUserBroadcast(e8, t2, n2) {
    let r2 = t2.getUint8(1), i2 = t2.getUint8(2), a2 = t2.getUint8(3), o2 = t2.getUint8(4), s2 = this.HEADER_LENGTH + 4, c2 = n2.decode(e8.slice(s2, s2 + r2));
    s2 += r2;
    let l2 = n2.decode(e8.slice(s2, s2 + i2));
    s2 += i2;
    let u2 = n2.decode(e8.slice(s2, s2 + a2));
    s2 += a2;
    let d2 = e8.slice(s2, e8.byteLength), f2 = o2 === this.JSON_ENCODING ? JSON.parse(n2.decode(d2)) : d2, p2 = { type: this.BROADCAST_EVENT, event: l2, payload: f2 };
    return a2 > 0 && (p2.meta = JSON.parse(u2)), { join_ref: null, ref: null, topic: c2, event: this.BROADCAST_EVENT, payload: p2 };
  }
  _isArrayBuffer(e8) {
    return e8 instanceof ArrayBuffer || e8?.constructor?.name === `ArrayBuffer`;
  }
  _pick(e8, t2) {
    return !e8 || typeof e8 != `object` ? {} : Object.fromEntries(Object.entries(e8).filter(([e9]) => t2.includes(e9)));
  }
};
var x;
(function(e8) {
  e8.abstime = `abstime`, e8.bool = `bool`, e8.date = `date`, e8.daterange = `daterange`, e8.float4 = `float4`, e8.float8 = `float8`, e8.int2 = `int2`, e8.int4 = `int4`, e8.int4range = `int4range`, e8.int8 = `int8`, e8.int8range = `int8range`, e8.json = `json`, e8.jsonb = `jsonb`, e8.money = `money`, e8.numeric = `numeric`, e8.oid = `oid`, e8.reltime = `reltime`, e8.text = `text`, e8.time = `time`, e8.timestamp = `timestamp`, e8.timestamptz = `timestamptz`, e8.timetz = `timetz`, e8.tsrange = `tsrange`, e8.tstzrange = `tstzrange`;
})(x ||= {});
var we = (e8, t2, n2 = {}) => {
  let r2 = n2.skipTypes ?? [];
  return t2 ? Object.keys(t2).reduce((n3, i2) => (n3[i2] = Te(i2, e8, t2, r2), n3), {}) : {};
};
var Te = (e8, t2, n2, r2) => {
  let i2 = t2.find((t3) => t3.name === e8)?.type, a2 = n2[e8];
  return i2 && !r2.includes(i2) ? Ee(i2, a2) : De(a2);
};
var Ee = (e8, t2) => {
  if (e8.charAt(0) === `_`) return je(t2, e8.slice(1, e8.length));
  switch (e8) {
    case x.bool:
      return Oe(t2);
    case x.float4:
    case x.float8:
    case x.int2:
    case x.int4:
    case x.int8:
    case x.numeric:
    case x.oid:
      return ke(t2);
    case x.json:
    case x.jsonb:
      return Ae(t2);
    case x.timestamp:
      return Me(t2);
    case x.abstime:
    case x.date:
    case x.daterange:
    case x.int4range:
    case x.int8range:
    case x.money:
    case x.reltime:
    case x.text:
    case x.time:
    case x.timestamptz:
    case x.timetz:
    case x.tsrange:
    case x.tstzrange:
      return De(t2);
    default:
      return De(t2);
  }
};
var De = (e8) => e8;
var Oe = (e8) => {
  switch (e8) {
    case `t`:
      return true;
    case `f`:
      return false;
    default:
      return e8;
  }
};
var ke = (e8) => {
  if (typeof e8 == `string`) {
    let t2 = parseFloat(e8);
    if (!Number.isNaN(t2)) return t2;
  }
  return e8;
};
var Ae = (e8) => {
  if (typeof e8 == `string`) try {
    return JSON.parse(e8);
  } catch {
    return e8;
  }
  return e8;
};
var je = (e8, t2) => {
  if (typeof e8 != `string`) return e8;
  let n2 = e8.length - 1, r2 = e8[n2];
  if (e8[0] === `{` && r2 === `}`) {
    let r3, i2 = e8.slice(1, n2);
    try {
      r3 = JSON.parse(`[` + i2 + `]`);
    } catch {
      r3 = i2 ? i2.split(`,`) : [];
    }
    return r3.map((e9) => Ee(t2, e9));
  }
  return e8;
};
var Me = (e8) => typeof e8 == `string` ? e8.replace(` `, `T`) : e8;
var Ne = (e8) => {
  let t2 = new URL(e8);
  return t2.protocol = t2.protocol.replace(/^ws/i, `http`), t2.pathname = t2.pathname.replace(/\/+$/, ``).replace(/\/socket\/websocket$/i, ``).replace(/\/socket$/i, ``).replace(/\/websocket$/i, ``), t2.pathname === `` || t2.pathname === `/` ? t2.pathname = `/api/broadcast` : t2.pathname += `/api/broadcast`, t2.href;
};
var Pe = (e8) => typeof e8 == `function` ? e8 : function() {
  return e8;
};
var Fe = typeof self < `u` ? self : null;
var Ie = typeof window < `u` ? window : null;
var S = Fe || Ie || globalThis;
var Le = `2.0.0`;
var Re = 1e4;
var ze = 1e3;
var Be = 100;
var C = { connecting: 0, open: 1, closing: 2, closed: 3 };
var w = { closed: `closed`, errored: `errored`, joined: `joined`, joining: `joining`, leaving: `leaving` };
var T = { close: `phx_close`, error: `phx_error`, join: `phx_join`, reply: `phx_reply`, leave: `phx_leave` };
var Ve = { longpoll: `longpoll`, websocket: `websocket` };
var He = { complete: 4 };
var Ue = `base64url.bearer.phx.`;
var We = class {
  constructor(e8, t2, n2, r2) {
    this.channel = e8, this.event = t2, this.payload = n2 || function() {
      return {};
    }, this.receivedResp = null, this.timeout = r2, this.timeoutTimer = null, this.recHooks = [], this.sent = false, this.ref = void 0;
  }
  resend(e8) {
    this.timeout = e8, this.reset(), this.send();
  }
  send() {
    this.hasReceived(`timeout`) || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
  }
  receive(e8, t2) {
    return this.hasReceived(e8) && t2(this.receivedResp.response), this.recHooks.push({ status: e8, callback: t2 }), this;
  }
  reset() {
    this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
  }
  destroy() {
    this.cancelRefEvent(), this.cancelTimeout();
  }
  matchReceive({ status: e8, response: t2, _ref: n2 }) {
    this.recHooks.filter((t3) => t3.status === e8).forEach((e9) => e9.callback(t2));
  }
  cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
  }
  startTimeout() {
    this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (e8) => {
      this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = e8, this.matchReceive(e8);
    }), this.timeoutTimer = setTimeout(() => {
      this.trigger(`timeout`, {});
    }, this.timeout);
  }
  hasReceived(e8) {
    return this.receivedResp && this.receivedResp.status === e8;
  }
  trigger(e8, t2) {
    this.channel.trigger(this.refEvent, { status: e8, response: t2 });
  }
};
var Ge = class {
  constructor(e8, t2) {
    this.callback = e8, this.timerCalc = t2, this.timer = void 0, this.tries = 0;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries += 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var Ke = class {
  constructor(e8, t2, n2) {
    this.state = w.closed, this.topic = e8, this.params = Pe(t2 || {}), this.socket = n2, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new We(this, T.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new Ge(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
    })), this.joinPush.receive(`ok`, () => {
      this.state = w.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e9) => e9.send()), this.pushBuffer = [];
    }), this.joinPush.receive(`error`, (e9) => {
      this.state = w.errored, this.socket.hasLogger() && this.socket.log(`channel`, `error ${this.topic}`, e9), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log(`channel`, `close ${this.topic}`), this.state = w.closed, this.socket.remove(this);
    }), this.onError((e9) => {
      this.socket.hasLogger() && this.socket.log(`channel`, `error ${this.topic}`, e9), this.isJoining() && this.joinPush.reset(), this.state = w.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive(`timeout`, () => {
      this.socket.hasLogger() && this.socket.log(`channel`, `timeout ${this.topic}`, this.joinPush.timeout), new We(this, T.leave, Pe({}), this.timeout).send(), this.state = w.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(T.reply, (e9, t3) => {
      this.trigger(this.replyEventName(t3), e9);
    });
  }
  join(e8 = this.timeout) {
    if (this.joinedOnce) throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);
    return this.timeout = e8, this.joinedOnce = true, this.rejoin(), this.joinPush;
  }
  teardown() {
    this.pushBuffer.forEach((e8) => e8.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = w.closed, this.bindings = [];
  }
  onClose(e8) {
    this.on(T.close, e8);
  }
  onError(e8) {
    return this.on(T.error, (t2) => e8(t2));
  }
  on(e8, t2) {
    let n2 = this.bindingRef++;
    return this.bindings.push({ event: e8, ref: n2, callback: t2 }), n2;
  }
  off(e8, t2) {
    this.bindings = this.bindings.filter((n2) => n2.event !== e8 || t2 !== void 0 && t2 !== n2.ref);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(e8, t2, n2 = this.timeout) {
    if (t2 ||= {}, !this.joinedOnce) throw Error(`tried to push '${e8}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    let r2 = new We(this, e8, function() {
      return t2;
    }, n2);
    return this.canPush() ? r2.send() : (r2.startTimeout(), this.pushBuffer.push(r2)), r2;
  }
  leave(e8 = this.timeout) {
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = w.leaving;
    let t2 = () => {
      this.socket.hasLogger() && this.socket.log(`channel`, `leave ${this.topic}`), this.trigger(T.close, `leave`);
    }, n2 = new We(this, T.leave, Pe({}), e8);
    return n2.receive(`ok`, () => t2()).receive(`timeout`, () => t2()), n2.send(), this.canPush() || n2.trigger(`ok`, {}), n2;
  }
  onMessage(e8, t2, n2) {
    return t2;
  }
  filterBindings(e8, t2, n2) {
    return true;
  }
  isMember(e8, t2, n2, r2) {
    return this.topic === e8 ? r2 && r2 !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log(`channel`, `dropping outdated message`, { topic: e8, event: t2, payload: n2, joinRef: r2 }), false) : true : false;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(e8 = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = w.joining, this.joinPush.resend(e8));
  }
  trigger(e8, t2, n2, r2) {
    let i2 = this.onMessage(e8, t2, n2, r2);
    if (t2 && !i2) throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);
    let a2 = this.bindings.filter((r3) => r3.event === e8 && this.filterBindings(r3, t2, n2));
    for (let e9 = 0; e9 < a2.length; e9++) a2[e9].callback(i2, n2, r2 || this.joinRef());
  }
  replyEventName(e8) {
    return `chan_reply_${e8}`;
  }
  isClosed() {
    return this.state === w.closed;
  }
  isErrored() {
    return this.state === w.errored;
  }
  isJoined() {
    return this.state === w.joined;
  }
  isJoining() {
    return this.state === w.joining;
  }
  isLeaving() {
    return this.state === w.leaving;
  }
};
var qe = class {
  static request(e8, t2, n2, r2, i2, a2, o2) {
    if (S.XDomainRequest) {
      let n3 = new S.XDomainRequest();
      return this.xdomainRequest(n3, e8, t2, r2, i2, a2, o2);
    }
    if (S.XMLHttpRequest) {
      let s2 = new S.XMLHttpRequest();
      return this.xhrRequest(s2, e8, t2, n2, r2, i2, a2, o2);
    }
    if (S.fetch && S.AbortController) return this.fetchRequest(e8, t2, n2, r2, i2, a2, o2);
    throw Error(`No suitable XMLHttpRequest implementation found`);
  }
  static fetchRequest(e8, t2, n2, r2, i2, a2, o2) {
    let s2 = { method: e8, headers: n2, body: r2 }, c2 = null;
    return i2 && (c2 = new AbortController(), setTimeout(() => c2.abort(), i2), s2.signal = c2.signal), S.fetch(t2, s2).then((e9) => e9.text()).then((e9) => this.parseJSON(e9)).then((e9) => o2 && o2(e9)).catch((e9) => {
      e9.name === `AbortError` && a2 ? a2() : o2 && o2(null);
    }), c2;
  }
  static xdomainRequest(e8, t2, n2, r2, i2, a2, o2) {
    return e8.timeout = i2, e8.open(t2, n2), e8.onload = () => {
      let t3 = this.parseJSON(e8.responseText);
      o2 && o2(t3);
    }, a2 && (e8.ontimeout = a2), e8.onprogress = () => {
    }, e8.send(r2), e8;
  }
  static xhrRequest(e8, t2, n2, r2, i2, a2, o2, s2) {
    e8.open(t2, n2, true), e8.timeout = a2;
    for (let [t3, n3] of Object.entries(r2)) e8.setRequestHeader(t3, n3);
    return e8.onerror = () => s2 && s2(null), e8.onreadystatechange = () => {
      e8.readyState === He.complete && s2 && s2(this.parseJSON(e8.responseText));
    }, o2 && (e8.ontimeout = o2), e8.send(i2), e8;
  }
  static parseJSON(e8) {
    if (!e8 || e8 === ``) return null;
    try {
      return JSON.parse(e8);
    } catch {
      return console && console.log(`failed to parse JSON response`, e8), null;
    }
  }
  static serialize(e8, t2) {
    let n2 = [];
    for (var r2 in e8) {
      if (!Object.prototype.hasOwnProperty.call(e8, r2)) continue;
      let i2 = t2 ? `${t2}[${r2}]` : r2, a2 = e8[r2];
      typeof a2 == `object` ? n2.push(this.serialize(a2, i2)) : n2.push(encodeURIComponent(i2) + `=` + encodeURIComponent(a2));
    }
    return n2.join(`&`);
  }
  static appendParams(e8, t2) {
    return Object.keys(t2).length === 0 ? e8 : `${e8}${e8.match(/\?/) ? `&` : `?`}${this.serialize(t2)}`;
  }
};
var Je = (e8) => {
  let t2 = ``, n2 = new Uint8Array(e8), r2 = n2.byteLength;
  for (let e9 = 0; e9 < r2; e9++) t2 += String.fromCharCode(n2[e9]);
  return btoa(t2);
};
var E = class {
  constructor(e8, t2) {
    t2 && t2.length === 2 && t2[1].startsWith(Ue) && (this.authToken = atob(t2[1].slice(Ue.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = false, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(e8), this.readyState = C.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(e8) {
    return e8.replace(`ws://`, `http://`).replace(`wss://`, `https://`).replace(RegExp(`(.*)/` + Ve.websocket), `$1/` + Ve.longpoll);
  }
  endpointURL() {
    return qe.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(e8, t2, n2) {
    this.close(e8, t2, n2), this.readyState = C.connecting;
  }
  ontimeout() {
    this.onerror(`timeout`), this.closeAndRetry(1005, `timeout`, false);
  }
  isActive() {
    return this.readyState === C.open || this.readyState === C.connecting;
  }
  poll() {
    let e8 = { Accept: `application/json` };
    this.authToken && (e8[`X-Phoenix-AuthToken`] = this.authToken), this.ajax(`GET`, e8, null, () => this.ontimeout(), (e9) => {
      if (e9) {
        var { status: t2, token: n2, messages: r2 } = e9;
        if (t2 === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, `session_gone`, false);
          return;
        }
        this.token = n2;
      } else t2 = 0;
      switch (t2) {
        case 200:
          r2.forEach((e10) => {
            setTimeout(() => this.onmessage({ data: e10 }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = C.open, this.onopen({}), this.poll();
          break;
        case 403:
          this.onerror(403), this.close(1008, `forbidden`, false);
          break;
        case 0:
        case 500:
          this.onerror(500), this.closeAndRetry(1011, `internal server error`, 500);
          break;
        default:
          throw Error(`unhandled poll status ${t2}`);
      }
    });
  }
  send(e8) {
    typeof e8 != `string` && (e8 = Je(e8)), this.currentBatch ? this.currentBatch.push(e8) : this.awaitingBatchAck ? this.batchBuffer.push(e8) : (this.currentBatch = [e8], this.currentBatchTimer = setTimeout(() => {
      this.batchSend(this.currentBatch), this.currentBatch = null;
    }, 0));
  }
  batchSend(e8, t2 = 0) {
    this.awaitingBatchAck = true;
    let n2 = t2 + Be, r2 = e8.slice(t2, n2);
    this.ajax(`POST`, { "Content-Type": `application/x-ndjson` }, r2.join(`
`), () => this.onerror(`timeout`), (t3) => {
      !t3 || t3.status !== 200 ? (this.awaitingBatchAck = false, this.onerror(t3 && t3.status), this.closeAndRetry(1011, `internal server error`, false)) : n2 < e8.length ? this.batchSend(e8, n2) : this.batchBuffer.length > 0 ? (this.batchSend(this.batchBuffer), this.batchBuffer = []) : this.awaitingBatchAck = false;
    });
  }
  close(e8, t2, n2) {
    for (let e9 of this.reqs) e9.abort();
    this.readyState = C.closed;
    let r2 = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code: e8, reason: t2, wasClean: n2 });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < `u` ? this.onclose(new CloseEvent(`close`, r2)) : this.onclose(r2);
  }
  ajax(e8, t2, n2, r2, i2) {
    let a2;
    a2 = qe.request(e8, this.endpointURL(), t2, n2, this.timeout, () => {
      this.reqs.delete(a2), r2();
    }, (e9) => {
      this.reqs.delete(a2), this.isActive() && i2(e9);
    }), this.reqs.add(a2);
  }
};
var Ye = class e3 {
  constructor(t2, n2 = {}) {
    let r2 = n2.events || { state: `presence_state`, diff: `presence_diff` };
    this.state = /* @__PURE__ */ Object.create(null), this.pendingDiffs = [], this.channel = t2, this.joinRef = null, this.caller = { onJoin: function() {
    }, onLeave: function() {
    }, onSync: function() {
    } }, this.channel.on(r2.state, (t3) => {
      let { onJoin: n3, onLeave: r3, onSync: i2 } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = e3.syncState(this.state, t3, n3, r3), this.pendingDiffs.forEach((t4) => {
        this.state = e3.syncDiff(this.state, t4, n3, r3);
      }), this.pendingDiffs = [], i2();
    }), this.channel.on(r2.diff, (t3) => {
      let { onJoin: n3, onLeave: r3, onSync: i2 } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(t3) : (this.state = e3.syncDiff(this.state, t3, n3, r3), i2());
    });
  }
  onJoin(e8) {
    this.caller.onJoin = e8;
  }
  onLeave(e8) {
    this.caller.onLeave = e8;
  }
  onSync(e8) {
    this.caller.onSync = e8;
  }
  list(t2) {
    return e3.list(this.state, t2);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  static syncState(e8, t2, n2, r2) {
    let i2 = this.toNullProtoObj(this.clone(e8));
    t2 = this.toNullProtoObj(t2);
    let a2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ Object.create(null);
    return this.map(i2, (e9, n3) => {
      t2[e9] || (o2[e9] = n3);
    }), this.map(t2, (e9, t3) => {
      let n3 = i2[e9];
      if (n3) {
        let r3 = t3.metas.map((e10) => e10.phx_ref), i3 = n3.metas.map((e10) => e10.phx_ref), s2 = t3.metas.filter((e10) => i3.indexOf(e10.phx_ref) < 0), c2 = n3.metas.filter((e10) => r3.indexOf(e10.phx_ref) < 0);
        s2.length > 0 && (a2[e9] = t3, a2[e9].metas = s2), c2.length > 0 && (o2[e9] = this.clone(n3), o2[e9].metas = c2);
      } else a2[e9] = t3;
    }), this.syncDiff(i2, { joins: a2, leaves: o2 }, n2, r2);
  }
  static syncDiff(e8, t2, n2, r2) {
    e8 = this.toNullProtoObj(e8);
    let { joins: i2, leaves: a2 } = this.clone(t2);
    return n2 ||= function() {
    }, r2 ||= function() {
    }, this.map(i2, (t3, r3) => {
      let i3 = e8[t3];
      if (e8[t3] = this.clone(r3), i3) {
        let n3 = e8[t3].metas.map((e9) => e9.phx_ref), r4 = i3.metas.filter((e9) => n3.indexOf(e9.phx_ref) < 0);
        e8[t3].metas.unshift(...r4);
      }
      n2(t3, i3, r3);
    }), this.map(a2, (t3, n3) => {
      let i3 = e8[t3];
      if (!i3) return;
      let a3 = n3.metas.map((e9) => e9.phx_ref);
      i3.metas = i3.metas.filter((e9) => a3.indexOf(e9.phx_ref) < 0), r2(t3, i3, n3), i3.metas.length === 0 && delete e8[t3];
    }), e8;
  }
  static list(e8, t2) {
    return t2 ||= function(e9, t3) {
      return t3;
    }, this.map(e8, (e9, n2) => t2(e9, n2));
  }
  static map(e8, t2) {
    return Object.getOwnPropertyNames(e8).map((n2) => t2(n2, e8[n2]));
  }
  static toNullProtoObj(e8) {
    if (Object.getPrototypeOf(e8) === null) return e8;
    let t2 = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e8).forEach((n2) => {
      t2[n2] = e8[n2];
    }), t2;
  }
  static clone(e8) {
    return JSON.parse(JSON.stringify(e8));
  }
};
var Xe = { HEADER_LENGTH: 1, META_LENGTH: 4, KINDS: { push: 0, reply: 1, broadcast: 2 }, encode(e8, t2) {
  if (e8.payload.constructor === ArrayBuffer) return t2(this.binaryEncode(e8));
  {
    let n2 = [e8.join_ref, e8.ref, e8.topic, e8.event, e8.payload];
    return t2(JSON.stringify(n2));
  }
}, decode(e8, t2) {
  if (e8.constructor === ArrayBuffer) return t2(this.binaryDecode(e8));
  {
    let [n2, r2, i2, a2, o2] = JSON.parse(e8);
    return t2({ join_ref: n2, ref: r2, topic: i2, event: a2, payload: o2 });
  }
}, binaryEncode(e8) {
  let { join_ref: t2, ref: n2, event: r2, topic: i2, payload: a2 } = e8, o2 = new TextEncoder(), s2 = o2.encode(t2), c2 = o2.encode(n2), l2 = o2.encode(i2), u2 = o2.encode(r2);
  this.assertFieldSize(s2.byteLength, `join_ref`), this.assertFieldSize(c2.byteLength, `ref`), this.assertFieldSize(l2.byteLength, `topic`), this.assertFieldSize(u2.byteLength, `event`);
  let d2 = this.META_LENGTH + s2.byteLength + c2.byteLength + l2.byteLength + u2.byteLength, f2 = new ArrayBuffer(this.HEADER_LENGTH + d2), p2 = new Uint8Array(f2), m2 = new DataView(f2), h2 = 0;
  m2.setUint8(h2++, this.KINDS.push), m2.setUint8(h2++, s2.byteLength), m2.setUint8(h2++, c2.byteLength), m2.setUint8(h2++, l2.byteLength), m2.setUint8(h2++, u2.byteLength), p2.set(s2, h2), h2 += s2.byteLength, p2.set(c2, h2), h2 += c2.byteLength, p2.set(l2, h2), h2 += l2.byteLength, p2.set(u2, h2), h2 += u2.byteLength;
  var g2 = new Uint8Array(f2.byteLength + a2.byteLength);
  return g2.set(p2, 0), g2.set(new Uint8Array(a2), f2.byteLength), g2.buffer;
}, assertFieldSize(e8, t2) {
  if (e8 > 255) throw Error(`unable to convert ${t2} to binary: must be less than or equal to 255 bytes, but is ${e8} bytes`);
}, binaryDecode(e8) {
  let t2 = new DataView(e8), n2 = t2.getUint8(0), r2 = new TextDecoder();
  switch (n2) {
    case this.KINDS.push:
      return this.decodePush(e8, t2, r2);
    case this.KINDS.reply:
      return this.decodeReply(e8, t2, r2);
    case this.KINDS.broadcast:
      return this.decodeBroadcast(e8, t2, r2);
  }
}, decodePush(e8, t2, n2) {
  let r2 = t2.getUint8(1), i2 = t2.getUint8(2), a2 = t2.getUint8(3), o2 = this.HEADER_LENGTH + this.META_LENGTH - 1, s2 = n2.decode(e8.slice(o2, o2 + r2));
  o2 += r2;
  let c2 = n2.decode(e8.slice(o2, o2 + i2));
  o2 += i2;
  let l2 = n2.decode(e8.slice(o2, o2 + a2));
  return o2 += a2, { join_ref: s2, ref: null, topic: c2, event: l2, payload: e8.slice(o2, e8.byteLength) };
}, decodeReply(e8, t2, n2) {
  let r2 = t2.getUint8(1), i2 = t2.getUint8(2), a2 = t2.getUint8(3), o2 = t2.getUint8(4), s2 = this.HEADER_LENGTH + this.META_LENGTH, c2 = n2.decode(e8.slice(s2, s2 + r2));
  s2 += r2;
  let l2 = n2.decode(e8.slice(s2, s2 + i2));
  s2 += i2;
  let u2 = n2.decode(e8.slice(s2, s2 + a2));
  s2 += a2;
  let d2 = n2.decode(e8.slice(s2, s2 + o2));
  s2 += o2;
  let f2 = { status: d2, response: e8.slice(s2, e8.byteLength) };
  return { join_ref: c2, ref: l2, topic: u2, event: T.reply, payload: f2 };
}, decodeBroadcast(e8, t2, n2) {
  let r2 = t2.getUint8(1), i2 = t2.getUint8(2), a2 = this.HEADER_LENGTH + 2, o2 = n2.decode(e8.slice(a2, a2 + r2));
  a2 += r2;
  let s2 = n2.decode(e8.slice(a2, a2 + i2));
  return a2 += i2, { join_ref: null, ref: null, topic: o2, event: s2, payload: e8.slice(a2, e8.byteLength) };
} };
var Ze = class {
  constructor(e8, t2 = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = t2.timeout || Re, this.transport = t2.transport || S.WebSocket || E, this.conn = void 0, this.primaryPassedHealthCheck = false, this.longPollFallbackMs = t2.longPollFallbackMs, this.fallbackTimer = null;
    let n2 = null;
    try {
      n2 = S && S.sessionStorage;
    } catch {
    }
    this.sessionStore = t2.sessionStorage || n2, this.establishedConnections = 0, this.defaultEncoder = Xe.encode.bind(Xe), this.defaultDecoder = Xe.decode.bind(Xe), this.closeWasClean = true, this.disconnecting = false, this.binaryType = t2.binaryType || `arraybuffer`, this.connectClock = 1, this.pageHidden = false, this.encode = void 0, this.decode = void 0, this.transport === E ? (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder) : (this.encode = t2.encode || this.defaultEncoder, this.decode = t2.decode || this.defaultDecoder);
    let r2 = null;
    Ie && Ie.addEventListener && (Ie.addEventListener(`pagehide`, (e9) => {
      this.conn && (this.disconnect(), r2 = this.connectClock);
    }), Ie.addEventListener(`pageshow`, (e9) => {
      r2 === this.connectClock && (r2 = null, this.connect());
    }), Ie.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `hidden` ? this.pageHidden = true : (this.pageHidden = false, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = t2.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = t2.autoSendHeartbeat ?? true, this.heartbeatCallback = t2.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (e9) => t2.rejoinAfterMs ? t2.rejoinAfterMs(e9) : [1e3, 2e3, 5e3][e9 - 1] || 1e4, this.reconnectAfterMs = (e9) => t2.reconnectAfterMs ? t2.reconnectAfterMs(e9) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e9 - 1] || 5e3, this.logger = t2.logger || null, !this.logger && t2.debug && (this.logger = (e9, t3, n3) => {
      console.log(`${e9}: ${t3}`, n3);
    }), this.longpollerTimeout = t2.longpollerTimeout || 2e4, this.params = Pe(t2.params || {}), this.endPoint = `${e8}/${Ve.websocket}`, this.vsn = t2.vsn || Le, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new Ge(() => {
      if (this.pageHidden) {
        this.log(`Not reconnecting as page is hidden!`), this.teardown();
        return;
      }
      this.teardown(async () => {
        t2.beforeReconnect && await t2.beforeReconnect(), this.connect();
      });
    }, this.reconnectAfterMs), this.authToken = t2.authToken && Pe(t2.authToken);
  }
  getLongPollTransport() {
    return E;
  }
  replaceTransport(e8) {
    this.connectClock++, this.closeWasClean = true, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn &&= (this.conn.close(), null), this.transport = e8;
  }
  protocol() {
    return location.protocol.match(/^https/) ? `wss` : `ws`;
  }
  endPointURL() {
    let e8 = qe.appendParams(qe.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
    return e8.charAt(0) === `/` ? e8.charAt(1) === `/` ? `${this.protocol()}:${e8}` : `${this.protocol()}://${location.host}${e8}` : e8;
  }
  disconnect(e8, t2, n2) {
    this.connectClock++, this.disconnecting = true, this.closeWasClean = true, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
      this.disconnecting = false, e8 && e8();
    }, t2, n2);
  }
  connect(e8) {
    e8 && (console && console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`), this.params = Pe(e8)), (!this.conn || this.disconnecting) && (this.longPollFallbackMs && this.transport !== E ? this.connectWithFallback(E, this.longPollFallbackMs) : this.transportConnect());
  }
  log(e8, t2, n2) {
    this.logger && this.logger(e8, t2, n2);
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(e8) {
    let t2 = this.makeRef();
    return this.stateChangeCallbacks.open.push([t2, e8]), t2;
  }
  onClose(e8) {
    let t2 = this.makeRef();
    return this.stateChangeCallbacks.close.push([t2, e8]), t2;
  }
  onError(e8) {
    let t2 = this.makeRef();
    return this.stateChangeCallbacks.error.push([t2, e8]), t2;
  }
  onMessage(e8) {
    let t2 = this.makeRef();
    return this.stateChangeCallbacks.message.push([t2, e8]), t2;
  }
  onHeartbeat(e8) {
    this.heartbeatCallback = e8;
  }
  ping(e8) {
    if (!this.isConnected()) return false;
    let t2 = this.makeRef(), n2 = Date.now();
    this.push({ topic: `phoenix`, event: `heartbeat`, payload: {}, ref: t2 });
    let r2 = this.onMessage((i2) => {
      i2.ref === t2 && (this.off([r2]), e8(Date.now() - n2));
    });
    return true;
  }
  transportName(e8) {
    switch (e8) {
      case E:
        return `LongPoll`;
      default:
        return e8.name;
    }
  }
  transportConnect() {
    this.connectClock++, this.closeWasClean = false;
    let e8;
    this.authToken && (e8 = [`phoenix`, `${Ue}${btoa(this.authToken()).replace(/=/g, ``)}`]), this.conn = new this.transport(this.endPointURL(), e8), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e9) => this.onConnError(e9), this.conn.onmessage = (e9) => this.onConnMessage(e9), this.conn.onclose = (e9) => this.onConnClose(e9);
  }
  getSession(e8) {
    return this.sessionStore && this.sessionStore.getItem(e8);
  }
  storeSession(e8, t2) {
    this.sessionStore && this.sessionStore.setItem(e8, t2);
  }
  connectWithFallback(e8, t2 = 2500) {
    clearTimeout(this.fallbackTimer);
    let n2 = false, r2 = true, i2, a2, o2 = this.transportName(e8), s2 = (t3) => {
      this.log(`transport`, `falling back to ${o2}...`, t3), this.off([i2, a2]), r2 = false, this.replaceTransport(e8), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${o2}`)) return s2(`memorized`);
    this.fallbackTimer = setTimeout(s2, t2), a2 = this.onError((e9) => {
      this.log(`transport`, `error`, e9), r2 && !n2 && (clearTimeout(this.fallbackTimer), s2(e9));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (n2 = true, !r2) {
        let t3 = this.transportName(e8);
        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${t3}`, `true`), this.log(`transport`, `established ${t3} fallback`);
      }
      clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(s2, t2), this.ping((e9) => {
        this.log(`transport`, `connected to primary after`, e9), this.primaryPassedHealthCheck = true, clearTimeout(this.fallbackTimer);
      });
    }), this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    this.hasLogger() && this.log(`transport`, `connected to ${this.endPointURL()}`), this.closeWasClean = false, this.disconnecting = false, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks(`open`);
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log(`transport`, `heartbeat timeout. Attempting to re-establish connection`);
      try {
        this.heartbeatCallback(`timeout`);
      } catch (e8) {
        this.log(`error`, `error in heartbeat callback`, e8);
      }
      this.triggerChanError(Error(`heartbeat timeout`)), this.closeWasClean = false, this.teardown(() => this.reconnectTimer.scheduleTimeout(), ze, `heartbeat timeout`);
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(e8, t2, n2) {
    if (!this.conn) return e8 && e8();
    let r2 = this.conn;
    this.waitForBufferDone(r2, () => {
      t2 ? r2.close(t2, n2 || ``) : r2.close(), this.waitForSocketClosed(r2, () => {
        this.conn === r2 && (this.conn.onopen = function() {
        }, this.conn.onerror = function() {
        }, this.conn.onmessage = function() {
        }, this.conn.onclose = function() {
        }, this.conn = null), e8 && e8();
      });
    });
  }
  waitForBufferDone(e8, t2, n2 = 1) {
    if (n2 === 5 || !e8.bufferedAmount) {
      t2();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(e8, t2, n2 + 1);
    }, 150 * n2);
  }
  waitForSocketClosed(e8, t2, n2 = 1) {
    if (n2 === 5 || e8.readyState === C.closed) {
      t2();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(e8, t2, n2 + 1);
    }, 150 * n2);
  }
  onConnClose(e8) {
    this.conn && (this.conn.onclose = () => {
    }), this.hasLogger() && this.log(`transport`, `close`, e8), this.triggerChanError(e8), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks(`close`, e8);
  }
  onConnError(e8) {
    this.hasLogger() && this.log(`transport`, `error`, e8);
    let t2 = this.transport, n2 = this.establishedConnections;
    this.triggerStateCallbacks(`error`, e8, t2, n2), (t2 === this.transport || n2 > 0) && this.triggerChanError(e8);
  }
  triggerChanError(e8) {
    this.channels.forEach((t2) => {
      t2.isErrored() || t2.isLeaving() || t2.isClosed() || t2.trigger(T.error, e8);
    });
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case C.connecting:
        return `connecting`;
      case C.open:
        return `open`;
      case C.closing:
        return `closing`;
      default:
        return `closed`;
    }
  }
  isConnected() {
    return this.connectionState() === `open`;
  }
  remove(e8) {
    this.off(e8.stateChangeRefs), this.channels = this.channels.filter((t2) => t2 !== e8);
  }
  off(e8) {
    for (let t2 in this.stateChangeCallbacks) this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(([t3]) => e8.indexOf(t3) === -1);
  }
  channel(e8, t2 = {}) {
    let n2 = new Ke(e8, t2, this);
    return this.channels.push(n2), n2;
  }
  push(e8) {
    if (this.hasLogger()) {
      let { topic: t2, event: n2, payload: r2, ref: i2, join_ref: a2 } = e8;
      this.log(`push`, `${t2} ${n2} (${a2}, ${i2})`, r2);
    }
    this.isConnected() ? this.encode(e8, (e9) => this.conn.send(e9)) : this.sendBuffer.push(() => this.encode(e8, (e9) => this.conn.send(e9)));
  }
  makeRef() {
    let e8 = this.ref + 1;
    return this.ref = e8 === this.ref ? 0 : e8, this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback(`disconnected`);
      } catch (e8) {
        this.log(`error`, `error in heartbeat callback`, e8);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({ topic: `phoenix`, event: `heartbeat`, payload: {}, ref: this.pendingHeartbeatRef });
    try {
      this.heartbeatCallback(`sent`);
    } catch (e8) {
      this.log(`error`, `error in heartbeat callback`, e8);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e8) => e8()), this.sendBuffer = []);
  }
  onConnMessage(e8) {
    this.decode(e8.data, (e9) => {
      let { topic: t2, event: n2, payload: r2, ref: i2, join_ref: a2 } = e9;
      if (i2 && i2 === this.pendingHeartbeatRef) {
        let e10 = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(r2.status === `ok` ? `ok` : `error`, e10);
        } catch (e11) {
          this.log(`error`, `error in heartbeat callback`, e11);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log(`receive`, `${r2.status || ``} ${t2} ${n2} ${i2 && `(` + i2 + `)` || ``}`.trim(), r2);
      for (let e10 = 0; e10 < this.channels.length; e10++) {
        let o2 = this.channels[e10];
        o2.isMember(t2, n2, r2, a2) && o2.trigger(n2, r2, i2, a2);
      }
      this.triggerStateCallbacks(`message`, e9);
    });
  }
  triggerStateCallbacks(e8, ...t2) {
    try {
      this.stateChangeCallbacks[e8].forEach(([n2, r2]) => {
        try {
          r2(...t2);
        } catch (t3) {
          this.log(`error`, `error in ${e8} callback`, t3);
        }
      });
    } catch (t3) {
      this.log(`error`, `error triggering ${e8} callbacks`, t3);
    }
  }
  leaveOpenTopic(e8) {
    let t2 = this.channels.find((t3) => t3.topic === e8 && (t3.isJoined() || t3.isJoining()));
    t2 && (this.hasLogger() && this.log(`transport`, `leaving duplicate topic "${e8}"`), t2.leave());
  }
};
var Qe = class e4 {
  constructor(t2, n2) {
    let r2 = tt(n2);
    this.presence = new Ye(t2.getChannel(), r2), this.presence.onJoin((n3, r3, i2) => {
      let a2 = e4.onJoinPayload(n3, r3, i2);
      t2.getChannel().trigger(`presence`, a2);
    }), this.presence.onLeave((n3, r3, i2) => {
      let a2 = e4.onLeavePayload(n3, r3, i2);
      t2.getChannel().trigger(`presence`, a2);
    }), this.presence.onSync(() => {
      t2.getChannel().trigger(`presence`, { event: `sync` });
    });
  }
  get state() {
    return e4.transformState(this.presence.state);
  }
  static transformState(e8) {
    return e8 = et(e8), Object.getOwnPropertyNames(e8).reduce((t2, n2) => {
      let r2 = e8[n2];
      return t2[n2] = $e(r2), t2;
    }, {});
  }
  static onJoinPayload(e8, t2, n2) {
    return { event: `join`, key: e8, currentPresences: nt(t2), newPresences: $e(n2) };
  }
  static onLeavePayload(e8, t2, n2) {
    return { event: `leave`, key: e8, currentPresences: nt(t2), leftPresences: $e(n2) };
  }
};
function $e(e8) {
  return e8.metas.map((e9) => {
    let t2 = Object.getOwnPropertyDescriptors(e9), n2 = Object.defineProperties({}, t2);
    return n2.presence_ref = n2.phx_ref, delete n2.phx_ref, delete n2.phx_ref_prev, n2;
  });
}
function et(e8) {
  return JSON.parse(JSON.stringify(e8));
}
function tt(e8) {
  return e8?.events && { events: e8.events };
}
function nt(e8) {
  return e8?.metas ? $e(e8) : [];
}
var rt;
(function(e8) {
  e8.SYNC = `sync`, e8.JOIN = `join`, e8.LEAVE = `leave`;
})(rt ||= {});
var it = class {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e8, t2) {
    this.channel = e8, this.presenceAdapter = new Qe(this.channel.channelAdapter, t2);
  }
};
function at(e8) {
  if (e8 instanceof Error) return e8;
  if (typeof e8 == `string`) return Error(e8);
  if (e8 && typeof e8 == `object`) {
    let t2 = e8;
    if (typeof t2.code == `number`) {
      let n2 = typeof t2.reason == `string` && t2.reason ? ` (${t2.reason})` : ``;
      return Error(`socket closed: ${t2.code}${n2}`, { cause: e8 });
    }
    return Error(`channel error: transport failure`, { cause: e8 });
  }
  return Error(`channel error: connection lost`);
}
var ot = class {
  constructor(e8, t2, n2) {
    let r2 = st(n2);
    this.channel = e8.getSocket().channel(t2, r2), this.socket = e8;
  }
  get state() {
    return this.channel.state;
  }
  set state(e8) {
    this.channel.state = e8;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e8, t2) {
    return this.channel.on(e8, t2);
  }
  off(e8, t2) {
    this.channel.off(e8, t2);
  }
  subscribe(e8) {
    return this.channel.join(e8);
  }
  unsubscribe(e8) {
    return this.channel.leave(e8);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e8) {
    this.channel.onClose(e8);
  }
  onError(e8) {
    return this.channel.onError(e8);
  }
  push(e8, t2, n2) {
    let r2;
    try {
      r2 = this.channel.push(e8, t2, n2);
    } catch {
      throw Error(`tried to push '${e8}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > 100) {
      let e9 = this.channel.pushBuffer.shift();
      e9.cancelTimeout(), this.socket.log(`channel`, `discarded push due to buffer overflow: ${e9.event}`, e9.payload());
    }
    return r2;
  }
  updateJoinPayload(e8) {
    let t2 = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, t2), e8);
  }
  canPush() {
    return this.socket.isConnected() && this.state === b.joined;
  }
  isJoined() {
    return this.state === b.joined;
  }
  isJoining() {
    return this.state === b.joining;
  }
  isClosed() {
    return this.state === b.closed;
  }
  isLeaving() {
    return this.state === b.leaving;
  }
  updateFilterBindings(e8) {
    this.channel.filterBindings = e8;
  }
  updatePayloadTransform(e8) {
    this.channel.onMessage = e8;
  }
  getChannel() {
    return this.channel;
  }
};
function st(e8) {
  return { config: Object.assign({ broadcast: { ack: false, self: false }, presence: { key: ``, enabled: false }, private: false }, e8.config) };
}
var ct = /[,()"\\]/;
var lt = (e8) => ct.test(e8) || e8 !== e8.trim();
var ut = (e8) => `"${e8.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`;
var dt = (e8) => {
  let t2 = e8 === null ? `null` : String(e8);
  return lt(t2) ? ut(t2) : t2;
};
var ft = (e8) => e8 === null ? `null` : String(e8);
var pt = (e8, t2) => {
  if (e8 === `in`) {
    let e9 = Array.isArray(t2) ? t2 : [t2];
    if (e9.length === 0) throw Error("Realtime `in` filter requires at least one value.");
    return `in.(${Array.from(new Set(e9)).map((e10) => dt(e10)).join(`,`)})`;
  }
  return e8 === `is` ? `is.${ft(t2)}` : `${e8}.${dt(t2)}`;
};
var mt = class {
  constructor() {
    this.filters = [];
  }
  add(e8, t2, n2, r2 = false) {
    let i2 = r2 ? `not.` : ``;
    return this.filters.push(`${e8}=${i2}${pt(t2, n2)}`), this;
  }
  eq(e8, t2) {
    return this.add(e8, `eq`, t2);
  }
  neq(e8, t2) {
    return this.add(e8, `neq`, t2);
  }
  gt(e8, t2) {
    return this.add(e8, `gt`, t2);
  }
  gte(e8, t2) {
    return this.add(e8, `gte`, t2);
  }
  lt(e8, t2) {
    return this.add(e8, `lt`, t2);
  }
  lte(e8, t2) {
    return this.add(e8, `lte`, t2);
  }
  in(e8, t2) {
    return this.add(e8, `in`, t2);
  }
  like(e8, t2) {
    return this.add(e8, `like`, t2);
  }
  ilike(e8, t2) {
    return this.add(e8, `ilike`, t2);
  }
  match(e8, t2) {
    return this.add(e8, `match`, t2);
  }
  imatch(e8, t2) {
    return this.add(e8, `imatch`, t2);
  }
  is(e8, t2) {
    return this.add(e8, `is`, t2);
  }
  isDistinct(e8, t2) {
    return this.add(e8, `isdistinct`, t2);
  }
  not(e8, t2, n2) {
    return this.add(e8, t2, n2, true);
  }
  build() {
    return this.filters.join(`,`);
  }
  toString() {
    return this.build();
  }
};
var ht;
(function(e8) {
  e8.ALL = `*`, e8.INSERT = `INSERT`, e8.UPDATE = `UPDATE`, e8.DELETE = `DELETE`;
})(ht ||= {});
var gt;
(function(e8) {
  e8.BROADCAST = `broadcast`, e8.PRESENCE = `presence`, e8.POSTGRES_CHANGES = `postgres_changes`, e8.SYSTEM = `system`;
})(gt ||= {});
var D;
(function(e8) {
  e8.SUBSCRIBED = `SUBSCRIBED`, e8.TIMED_OUT = `TIMED_OUT`, e8.CLOSED = `CLOSED`, e8.CHANNEL_ERROR = `CHANNEL_ERROR`;
})(D ||= {});
var _t = class e5 {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e8) {
    this.channelAdapter.state = e8;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(e8, t2 = { config: {} }, n2) {
    if (this.topic = e8, this.params = t2, this.socket = n2, this.bindings = {}, this.subTopic = e8.replace(/^realtime:/i, ``), this.params.config = Object.assign({ broadcast: { ack: false, self: false }, presence: { key: ``, enabled: false }, private: false }, t2.config), this.channelAdapter = new ot(this.socket.socketAdapter, e8, this.params), this.presence = new it(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = Ne(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || false, !this.private && this.params.config?.broadcast?.replay) throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  subscribe(e8, t2 = this.timeout) {
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      let { config: { broadcast: n2, presence: r2, private: i2, postgres_changes_options: a2 } } = this.params, o2 = this.bindings.postgres_changes?.map((e9) => e9.filter) ?? [], s2 = !!this.bindings[gt.PRESENCE] && this.bindings[gt.PRESENCE].length > 0 || this.params.config.presence?.enabled === true, c2 = {}, l2 = Object.assign({ broadcast: n2, presence: Object.assign(Object.assign({}, r2), { enabled: s2 }), postgres_changes: o2, private: i2 }, a2 ? { postgres_changes_options: a2 } : {});
      this.socket.accessTokenValue && (c2.access_token = this.socket.accessTokenValue), this._onError((t3) => {
        e8?.(D.CHANNEL_ERROR, at(t3));
      }), this._onClose(() => e8?.(D.CLOSED)), this.updateJoinPayload(Object.assign({ config: l2 }, c2)), this._updateFilterMessage();
      let u2 = a2?.wait && o2.length > 0 ? Math.max(t2, (a2.timeout ?? ye) + be) : t2;
      this.channelAdapter.subscribe(u2).receive(`ok`, async ({ postgres_changes: t3 }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), t3 === void 0) {
          e8?.(D.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(t3, e8);
      }).receive(`error`, (t3) => {
        this.state = b.errored;
        let n3 = Object.values(t3).join(`, `) || `error`;
        e8?.(D.CHANNEL_ERROR, Error(n3, { cause: t3 }));
      }).receive(`timeout`, () => {
        e8?.(D.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(t2, n2) {
    let r2 = this.bindings.postgres_changes, i2 = r2?.length ?? 0, a2 = [];
    for (let o2 = 0; o2 < i2; o2++) {
      let i3 = r2[o2], { filter: { event: s2, schema: c2, table: l2, filter: u2 } } = i3, d2 = t2 && t2[o2];
      if (d2 && d2.event === s2 && e5.isFilterValueEqual(d2.schema, c2) && e5.isFilterValueEqual(d2.table, l2) && e5.isFilterValueEqual(d2.filter, u2)) a2.push(Object.assign(Object.assign({}, i3), { id: d2.id }));
      else {
        this.unsubscribe(), this.state = b.errored, n2?.(D.CHANNEL_ERROR, Error(`mismatch between server and client bindings for postgres changes`));
        return;
      }
    }
    this.bindings.postgres_changes = a2, this.state != b.errored && n2 && n2(D.SUBSCRIBED);
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e8, t2 = {}) {
    return await this.send({ type: `presence`, event: `track`, payload: e8 }, t2);
  }
  async untrack(e8 = {}) {
    return await this.send({ type: `presence`, event: `untrack` }, e8);
  }
  on(e8, t2, n2) {
    let r2 = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), i2 = e8 === gt.PRESENCE || e8 === gt.POSTGRES_CHANGES;
    if (r2 && i2) throw this.socket.log(`channel`, `cannot add \`${e8}\` callbacks for ${this.topic} after \`subscribe()\`.`), Error(`cannot add \`${e8}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(e8, t2, n2);
  }
  async httpSend(e8, t2, n2 = {}) {
    if (t2 == null) return Promise.reject(Error(`Payload is required for httpSend()`));
    let r2 = t2 instanceof ArrayBuffer || ArrayBuffer.isView(t2), i2 = { apikey: this.socket.apiKey ? this.socket.apiKey : ``, "Content-Type": r2 ? `application/octet-stream` : `application/json` };
    this.socket.accessTokenValue && (i2.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    let a2 = new URL(this.broadcastEndpointURL);
    a2.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e8)}`, this.private && a2.searchParams.set(`private`, `true`);
    let o2 = { method: `POST`, headers: i2, body: r2 ? t2 : JSON.stringify(t2) }, s2 = await this._fetchWithTimeout(a2.toString(), o2, n2.timeout ?? this.timeout);
    if (s2.status === 202) return { success: true };
    if (s2.status === 404) return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));
    let c2 = s2.statusText;
    try {
      let e9 = await s2.json();
      c2 = e9.error || e9.message || c2;
    } catch {
    }
    return Promise.reject(Error(c2));
  }
  async send(e8, t2 = {}) {
    if (!this.channelAdapter.canPush() && e8.type === `broadcast`) {
      let n2 = `Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;
      this.socket.hasLogger() ? this.socket.log(`channel`, n2) : console.warn(n2);
      let { event: r2, payload: i2 } = e8, a2 = { apikey: this.socket.apiKey ? this.socket.apiKey : ``, "Content-Type": `application/json` };
      this.socket.accessTokenValue && (a2.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      let o2 = { method: `POST`, headers: a2, body: JSON.stringify({ messages: [{ topic: this.subTopic, event: r2, payload: i2, private: this.private }] }) };
      try {
        let e9 = await this._fetchWithTimeout(this.broadcastEndpointURL, o2, t2.timeout ?? this.timeout);
        return await e9.body?.cancel(), e9.ok ? `ok` : `error`;
      } catch (e9) {
        return e9 instanceof Error && e9.name === `AbortError` ? `timed out` : `error`;
      }
    }
    return new Promise((n2) => {
      let r2 = this.channelAdapter.push(e8.type, e8, t2.timeout || this.timeout);
      e8.type === `broadcast` && !this.params?.config?.broadcast?.ack && n2(`ok`), r2.receive(`ok`, () => n2(`ok`)), r2.receive(`error`, () => n2(`error`)), r2.receive(`timeout`, () => n2(`timed out`));
    });
  }
  updateJoinPayload(e8) {
    this.channelAdapter.updateJoinPayload(e8);
  }
  async unsubscribe(e8 = this.timeout) {
    return new Promise((t2) => {
      this.channelAdapter.unsubscribe(e8).receive(`ok`, () => t2(`ok`)).receive(`timeout`, () => t2(`timed out`)).receive(`error`, () => t2(`error`));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e8, t2, n2) {
    let r2 = new AbortController(), i2 = setTimeout(() => r2.abort(), n2), a2 = await this.socket.fetch(e8, Object.assign(Object.assign({}, t2), { signal: r2.signal }));
    return clearTimeout(i2), a2;
  }
  _on(t2, n2, r2) {
    let i2 = t2.toLocaleLowerCase(), a2 = n2?.filter;
    if ((a2 instanceof mt || typeof a2 == `object` && a2 && typeof a2.build == `function`) && (n2 = Object.assign(Object.assign({}, n2), { filter: a2.build() })), i2 === gt.POSTGRES_CHANGES && this.bindings[i2]?.find((t3) => e5.isSamePostgresFilter(t3.filter, n2))) return this.socket.log(`error`, `duplicate \`postgres_changes\` binding for ${this.topic} ignored`, n2), this;
    let o2 = this.channelAdapter.on(t2, r2), s2 = { type: i2, filter: n2, callback: r2, ref: o2 };
    return this.bindings[i2] ? this.bindings[i2].push(s2) : this.bindings[i2] = [s2], this._updateFilterMessage(), this;
  }
  _onClose(e8) {
    this.channelAdapter.onClose(e8);
  }
  _onError(e8) {
    this.channelAdapter.onError(e8);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e8, t2, n2) => {
      let r2 = e8.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(r2, n2)) return false;
      let i2 = this.bindings[r2]?.find((t3) => t3.ref === e8.ref);
      if (!i2) return true;
      if ([`broadcast`, `presence`, `postgres_changes`].includes(r2)) {
        if (`id` in i2) {
          let e9 = i2.id, n3 = i2.filter?.event;
          return e9 && t2.ids?.includes(e9) && (n3 === `*` || n3?.toLocaleLowerCase() === t2.data?.type.toLocaleLowerCase());
        }
        {
          let e9 = i2?.filter?.event?.toLocaleLowerCase();
          return e9 === `*` || e9 === t2?.event?.toLocaleLowerCase();
        }
      }
      return i2.type.toLocaleLowerCase() === r2;
    });
  }
  _notThisChannelEvent(e8, t2) {
    let { close: n2, error: r2, leave: i2, join: a2 } = xe;
    return t2 && [n2, r2, i2, a2].includes(e8) && t2 !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e8, t2, n2) => {
      if (typeof t2 == `object` && `ids` in t2) {
        let e9 = t2.data, { schema: n3, table: r2, commit_timestamp: i2, type: a2, errors: o2 } = e9;
        return Object.assign(Object.assign({}, { schema: n3, table: r2, commit_timestamp: i2, eventType: a2, new: {}, old: {}, errors: o2 }), this._getPayloadRecords(e9));
      }
      return t2;
    });
  }
  copyBindings(e8) {
    if (this.joinedOnce) throw Error(`cannot copy bindings into joined channel`);
    for (let t2 in e8.bindings) for (let n2 of e8.bindings[t2]) this._on(n2.type, n2.filter, n2.callback);
  }
  static isFilterValueEqual(e8, t2) {
    return (e8 ?? void 0) === (t2 ?? void 0);
  }
  static isSamePostgresFilter(t2, n2) {
    let r2 = t2?.select?.join() ?? void 0, i2 = n2?.select?.join() ?? void 0;
    return t2?.event === n2?.event && e5.isFilterValueEqual(t2?.schema, n2?.schema) && e5.isFilterValueEqual(t2?.table, n2?.table) && e5.isFilterValueEqual(t2?.filter, n2?.filter) && r2 === i2;
  }
  _getPayloadRecords(e8) {
    let t2 = { new: {}, old: {} };
    return (e8.type === `INSERT` || e8.type === `UPDATE`) && (t2.new = we(e8.columns, e8.record)), (e8.type === `UPDATE` || e8.type === `DELETE`) && (t2.old = we(e8.columns, e8.old_record)), t2;
  }
};
var vt = class {
  constructor(e8, t2) {
    this.socket = new Ze(e8, t2);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e8) {
    this.socket.heartbeatCallback = e8;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e8, t2, n2, r2 = 1e4) {
    return new Promise((i2) => {
      setTimeout(() => i2(`timeout`), r2), this.socket.disconnect(() => {
        e8(), i2(`ok`);
      }, t2, n2);
    });
  }
  push(e8) {
    this.socket.push(e8);
  }
  log(e8, t2, n2) {
    this.socket.log(e8, t2, n2);
  }
  hasLogger() {
    return this.socket.hasLogger();
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e8) {
    this.socket.onOpen(e8);
  }
  onClose(e8) {
    this.socket.onClose(e8);
  }
  onError(e8) {
    this.socket.onError(e8);
  }
  onMessage(e8) {
    this.socket.onMessage(e8);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Se.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Se.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
};
var yt = { HEARTBEAT_INTERVAL: 25e3, RECONNECT_DELAY: 10, HEARTBEAT_TIMEOUT_FALLBACK: 100 };
var bt = [1e3, 2e3, 5e3, 1e4];
var xt = 1e4;
function St() {
  let e8 = /* @__PURE__ */ new Map();
  return { get length() {
    return e8.size;
  }, clear() {
    e8.clear();
  }, getItem(t2) {
    return e8.has(t2) ? e8.get(t2) : null;
  }, key(t2) {
    return Array.from(e8.keys())[t2] ?? null;
  }, removeItem(t2) {
    e8.delete(t2);
  }, setItem(t2, n2) {
    e8.set(t2, String(n2));
  } };
}
function Ct() {
  try {
    if (typeof globalThis < `u` && globalThis.sessionStorage) return globalThis.sessionStorage;
  } catch {
  }
  return St();
}
var wt = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
var Tt = class {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(e8, t2) {
    if (this.channels = [], this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = ``, this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new Ce(), this._manuallySetToken = false, this._authPromise = null, this._authGeneration = 0, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (e9) => e9 ? (...t3) => e9(...t3) : (...e10) => fetch(...e10), !t2?.params?.apikey) throw Error(`API key is required to connect to Realtime`);
    this.apiKey = t2.params.apikey;
    let n2 = this._initializeOptions(t2);
    this.socketAdapter = new vt(e8, n2), this.httpEndpoint = Ne(e8), this.fetch = this._resolveFetch(t2?.fetch);
  }
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      this.accessToken && !this._authPromise && this._setAuthSafely(`connect`), this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e8) {
        let t2 = e8.message;
        throw Error(`WebSocket not available: ${t2}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e8, t2) {
    return this._cancelPendingDisconnect(), this.isDisconnecting() ? `ok` : await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
    }, e8, t2);
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e8) {
    let t2 = await e8.unsubscribe();
    return t2 === `ok` && e8.teardown(), t2;
  }
  async removeAllChannels() {
    let e8 = this.channels.map(async (e9) => {
      let t3 = await e9.unsubscribe();
      return e9.teardown(), t3;
    }), t2 = await Promise.all(e8);
    return await this.disconnect(), t2;
  }
  log(e8, t2, n2) {
    this.socketAdapter.log(e8, t2, n2);
  }
  hasLogger() {
    return this.socketAdapter.hasLogger();
  }
  connectionState() {
    return this.socketAdapter.connectionState() || Se.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(e8, t2 = { config: {} }) {
    let n2 = `realtime:${e8}`, r2 = this.getChannels().find((e9) => e9.topic === n2);
    if (r2) return r2;
    {
      let n3 = new _t(`realtime:${e8}`, t2, this);
      return this._cancelPendingDisconnect(), this.channels.push(n3), n3;
    }
  }
  push(e8) {
    this.socketAdapter.push(e8);
  }
  async setAuth(e8 = null) {
    let t2 = ++this._authGeneration, n2 = this._performAuth(e8, t2);
    t2 === this._authGeneration && (this._authPromise = n2);
    try {
      await n2;
    } finally {
      this._authPromise === n2 && (this._authPromise = null);
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(e8) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e8);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(e8) {
    this.channels = this.channels.filter((t2) => t2.topic !== e8.topic), this.channels.length === 0 && (this.log(`transport`, `no channels remaining, scheduling disconnect`), this._schedulePendingDisconnect());
  }
  _schedulePendingDisconnect() {
    if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log(`transport`, `disconnecting immediately - no channels`), this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log(`transport`, `deferred disconnect fired - no channels, disconnecting`), this.disconnect());
    }, this._disconnectOnEmptyChannelsAfterMs), this.log(`transport`, `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null && (this.log(`transport`, `pending disconnect cancelled - channel activity detected`), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
  }
  async _performAuth(e8, t2) {
    let n2, r2 = false;
    if (e8) n2 = e8, r2 = true;
    else if (this.accessToken) try {
      n2 = await this.accessToken();
    } catch (e9) {
      this.log(`error`, `Error fetching access token from callback`, e9), n2 = this.accessTokenValue;
    }
    else n2 = this.accessTokenValue;
    t2 === this._authGeneration && (this.accessToken ? this._manuallySetToken = false : r2 && (this._manuallySetToken = true), this.accessTokenValue != n2 && (this.accessTokenValue = n2, this.channels.forEach((e9) => {
      let t3 = { access_token: n2, version: me };
      e9.updateJoinPayload(t3), e9.joinedOnce && e9.channelAdapter.isJoined() && e9.channelAdapter.push(xe.access_token, { access_token: n2 });
    })));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  _setAuthSafely(e8 = `general`) {
    this._isManualToken() || this.setAuth().catch((t2) => {
      this.log(`error`, `Error setting auth in ${e8}`, t2);
    });
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((e8) => {
        this.log(`error`, `error waiting for auth on connect`, e8);
      }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }), this.socketAdapter.onClose(() => {
      this.worker && this.workerRef && this._terminateWorker();
    }), this.socketAdapter.onMessage((e8) => {
      e8.ref && e8.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
    });
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(e8) {
    return (t2, n2) => {
      t2 !== `disconnected` && (t2 == `sent` && this._setAuthSafely(), e8 && e8(t2, n2));
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log(`worker`, `starting worker for from ${this.workerUrl}`) : this.log(`worker`, `starting default worker`);
    let e8 = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e8), this.workerRef.onerror = (e9) => {
      this.log(`worker`, `worker error`, e9.message), this._terminateWorker(), this.disconnect();
    }, this.workerRef.onmessage = (e9) => {
      e9.data.event === `keepAlive` && this.sendHeartbeat();
    }, this.workerRef.postMessage({ event: `start`, interval: this.heartbeatIntervalMs });
  }
  _terminateWorker() {
    this.workerRef &&= (this.log(`worker`, `terminating worker`), this.workerRef.terminate(), void 0);
  }
  _workerObjectUrl(e8) {
    let t2;
    if (e8) t2 = e8;
    else {
      let e9 = new Blob([wt], { type: `application/javascript` });
      t2 = URL.createObjectURL(e9);
    }
    return t2;
  }
  _initializeOptions(e8) {
    this.worker = e8?.worker ?? false, this.accessToken = e8?.accessToken ?? null;
    let t2 = {};
    t2.timeout = e8?.timeout ?? ve, t2.heartbeatIntervalMs = e8?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = e8?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e8?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL), t2.transport = e8?.transport ?? pe.getWebSocketConstructor(), t2.params = e8?.params, t2.logger = e8?.logger, t2.heartbeatCallback = this._wrapHeartbeatCallback(e8?.heartbeatCallback), t2.sessionStorage = e8?.sessionStorage ?? Ct(), t2.reconnectAfterMs = e8?.reconnectAfterMs ?? ((e9) => bt[e9 - 1] || xt);
    let n2, r2, i2 = e8?.vsn ?? _e;
    switch (i2) {
      case he:
        n2 = (e9, t3) => t3(JSON.stringify(e9)), r2 = (e9, t3) => t3(JSON.parse(e9));
        break;
      case ge:
        n2 = this.serializer.encode.bind(this.serializer), r2 = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw Error(`Unsupported serializer version: ${t2.vsn}`);
    }
    if (t2.vsn = i2, t2.encode = e8?.encode ?? n2, t2.decode = e8?.decode ?? r2, t2.beforeReconnect = this._reconnectAuth.bind(this), (e8?.logLevel || e8?.log_level) && (this.logLevel = e8.logLevel || e8.log_level, t2.params = Object.assign(Object.assign({}, t2.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < `u` && !window.Worker) throw Error(`Web Worker is not supported`);
      this.workerUrl = e8?.workerUrl, t2.autoSendHeartbeat = !this.worker;
    }
    return t2;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
};
var Et = class extends Error {
  constructor(e8, t2) {
    super(e8), this.name = `IcebergError`, this.status = t2.status, this.icebergType = t2.icebergType, this.icebergCode = t2.icebergCode, this.details = t2.details, this.isCommitStateUnknown = t2.icebergType === `CommitStateUnknownException` || [500, 502, 504].includes(t2.status) && t2.icebergType?.includes(`CommitState`) === true;
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Dt(e8, t2, n2) {
  let r2 = new URL(t2, e8);
  if (n2) for (let [e9, t3] of Object.entries(n2)) t3 !== void 0 && r2.searchParams.set(e9, t3);
  return r2.toString();
}
async function Ot(e8) {
  return !e8 || e8.type === `none` ? {} : e8.type === `bearer` ? { Authorization: `Bearer ${e8.token}` } : e8.type === `header` ? { [e8.name]: e8.value } : e8.type === `custom` ? await e8.getHeaders() : {};
}
function kt(e8) {
  let t2 = e8.fetchImpl ?? globalThis.fetch;
  return { async request({ method: n2, path: r2, query: i2, body: a2, headers: o2 }) {
    let s2 = Dt(e8.baseUrl, r2, i2), c2 = await Ot(e8.auth), l2 = await t2(s2, { method: n2, headers: { ...a2 ? { "Content-Type": `application/json` } : {}, ...c2, ...o2 }, body: a2 ? JSON.stringify(a2) : void 0 }), u2 = await l2.text(), d2 = (l2.headers.get(`content-type`) || ``).includes(`application/json`), f2 = d2 && u2 ? JSON.parse(u2) : u2;
    if (!l2.ok) {
      let e9 = d2 ? f2 : void 0, t3 = e9?.error;
      throw new Et(t3?.message ?? `Request failed with status ${l2.status}`, { status: l2.status, icebergType: t3?.type, icebergCode: t3?.code, details: e9 });
    }
    return { status: l2.status, headers: l2.headers, data: f2 };
  } };
}
function At(e8) {
  return e8.join(``);
}
var jt = class {
  constructor(e8, t2 = ``) {
    this.client = e8, this.prefix = t2;
  }
  async listNamespaces(e8) {
    let t2 = e8 ? { parent: At(e8.namespace) } : void 0;
    return (await this.client.request({ method: `GET`, path: `${this.prefix}/namespaces`, query: t2 })).data.namespaces.map((e9) => ({ namespace: e9 }));
  }
  async createNamespace(e8, t2) {
    let n2 = { namespace: e8.namespace, properties: t2?.properties };
    return (await this.client.request({ method: `POST`, path: `${this.prefix}/namespaces`, body: n2 })).data;
  }
  async dropNamespace(e8) {
    await this.client.request({ method: `DELETE`, path: `${this.prefix}/namespaces/${At(e8.namespace)}` });
  }
  async loadNamespaceMetadata(e8) {
    return { properties: (await this.client.request({ method: `GET`, path: `${this.prefix}/namespaces/${At(e8.namespace)}` })).data.properties };
  }
  async namespaceExists(e8) {
    try {
      return await this.client.request({ method: `HEAD`, path: `${this.prefix}/namespaces/${At(e8.namespace)}` }), true;
    } catch (e9) {
      if (e9 instanceof Et && e9.status === 404) return false;
      throw e9;
    }
  }
  async createNamespaceIfNotExists(e8, t2) {
    try {
      return await this.createNamespace(e8, t2);
    } catch (e9) {
      if (e9 instanceof Et && e9.status === 409) return;
      throw e9;
    }
  }
};
function O(e8) {
  return e8.join(``);
}
var Mt = class {
  constructor(e8, t2 = ``, n2) {
    this.client = e8, this.prefix = t2, this.accessDelegation = n2;
  }
  async listTables(e8) {
    return (await this.client.request({ method: `GET`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables` })).data.identifiers;
  }
  async createTable(e8, t2) {
    let n2 = {};
    return this.accessDelegation && (n2[`X-Iceberg-Access-Delegation`] = this.accessDelegation), (await this.client.request({ method: `POST`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables`, body: t2, headers: n2 })).data.metadata;
  }
  async updateTable(e8, t2) {
    let n2 = await this.client.request({ method: `POST`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`, body: t2 });
    return { "metadata-location": n2.data[`metadata-location`], metadata: n2.data.metadata };
  }
  async dropTable(e8, t2) {
    await this.client.request({ method: `DELETE`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`, query: { purgeRequested: String(t2?.purge ?? false) } });
  }
  async loadTable(e8) {
    let t2 = {};
    return this.accessDelegation && (t2[`X-Iceberg-Access-Delegation`] = this.accessDelegation), (await this.client.request({ method: `GET`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`, headers: t2 })).data.metadata;
  }
  async tableExists(e8) {
    let t2 = {};
    this.accessDelegation && (t2[`X-Iceberg-Access-Delegation`] = this.accessDelegation);
    try {
      return await this.client.request({ method: `HEAD`, path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`, headers: t2 }), true;
    } catch (e9) {
      if (e9 instanceof Et && e9.status === 404) return false;
      throw e9;
    }
  }
  async createTableIfNotExists(e8, t2) {
    try {
      return await this.createTable(e8, t2);
    } catch (n2) {
      if (n2 instanceof Et && n2.status === 409) return await this.loadTable({ namespace: e8.namespace, name: t2.name });
      throw n2;
    }
  }
};
var Nt = class {
  constructor(e8) {
    let t2 = `v1`;
    e8.catalogName && (t2 += `/${e8.catalogName}`);
    let n2 = e8.baseUrl.endsWith(`/`) ? e8.baseUrl : `${e8.baseUrl}/`;
    this.client = kt({ baseUrl: n2, auth: e8.auth, fetchImpl: e8.fetch }), this.accessDelegation = e8.accessDelegation?.join(`,`), this.namespaceOps = new jt(this.client, t2), this.tableOps = new Mt(this.client, t2, this.accessDelegation);
  }
  async listNamespaces(e8) {
    return this.namespaceOps.listNamespaces(e8);
  }
  async createNamespace(e8, t2) {
    return this.namespaceOps.createNamespace(e8, t2);
  }
  async dropNamespace(e8) {
    await this.namespaceOps.dropNamespace(e8);
  }
  async loadNamespaceMetadata(e8) {
    return this.namespaceOps.loadNamespaceMetadata(e8);
  }
  async listTables(e8) {
    return this.tableOps.listTables(e8);
  }
  async createTable(e8, t2) {
    return this.tableOps.createTable(e8, t2);
  }
  async updateTable(e8, t2) {
    return this.tableOps.updateTable(e8, t2);
  }
  async dropTable(e8, t2) {
    await this.tableOps.dropTable(e8, t2);
  }
  async loadTable(e8) {
    return this.tableOps.loadTable(e8);
  }
  async namespaceExists(e8) {
    return this.namespaceOps.namespaceExists(e8);
  }
  async tableExists(e8) {
    return this.tableOps.tableExists(e8);
  }
  async createNamespaceIfNotExists(e8, t2) {
    return this.namespaceOps.createNamespaceIfNotExists(e8, t2);
  }
  async createTableIfNotExists(e8, t2) {
    return this.tableOps.createTableIfNotExists(e8, t2);
  }
};
function Pt(e8) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e9) {
    return typeof e9;
  } : function(e9) {
    return e9 && typeof Symbol == `function` && e9.constructor === Symbol && e9 !== Symbol.prototype ? `symbol` : typeof e9;
  }, Pt(e8);
}
function Ft(e8, t2) {
  if (Pt(e8) != `object` || !e8) return e8;
  var n2 = e8[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e8, t2 || `default`);
    if (Pt(r2) != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t2 === `string` ? String : Number)(e8);
}
function It(e8) {
  var t2 = Ft(e8, `string`);
  return Pt(t2) == `symbol` ? t2 : t2 + ``;
}
function Lt(e8, t2, n2) {
  return (t2 = It(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Rt(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function k(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Rt(Object(n2), true).forEach(function(t3) {
      Lt(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Rt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
var zt = class extends Error {
  constructor(e8, t2 = `storage`, n2, r2) {
    super(e8), this.__isStorageError = true, this.namespace = t2, this.name = t2 === `vectors` ? `StorageVectorsError` : `StorageError`, this.status = n2, this.statusCode = r2;
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status, statusCode: this.statusCode };
  }
};
function Bt(e8) {
  return typeof e8 == `object` && !!e8 && `__isStorageError` in e8;
}
var Vt = class extends zt {
  constructor(e8, t2, n2, r2 = `storage`, i2) {
    super(e8, r2, t2, n2), this.name = r2 === `vectors` ? `StorageVectorsApiError` : `StorageApiError`, this.status = t2, this.statusCode = n2, this.code = i2;
  }
  toJSON() {
    return k(k({}, super.toJSON()), {}, { code: this.code });
  }
};
var Ht = class extends zt {
  constructor(e8, t2, n2 = `storage`) {
    super(e8, n2), this.name = n2 === `vectors` ? `StorageVectorsUnknownError` : `StorageUnknownError`, this.originalError = t2;
  }
};
function Ut(e8, t2, n2) {
  let r2 = k({}, e8), i2 = t2.toLowerCase();
  for (let e9 of Object.keys(r2)) e9.toLowerCase() === i2 && delete r2[e9];
  return r2[i2] = n2, r2;
}
function Wt(e8) {
  let t2 = {};
  for (let [n2, r2] of Object.entries(e8)) t2[n2.toLowerCase()] = r2;
  return t2;
}
var Gt = (e8) => e8 ? (...t2) => e8(...t2) : (...e9) => fetch(...e9);
var Kt = (e8) => {
  if (typeof e8 != `object` || !e8) return false;
  let t2 = Object.getPrototypeOf(e8);
  return (t2 === null || t2 === Object.prototype || Object.getPrototypeOf(t2) === null) && !(Symbol.toStringTag in e8) && !(Symbol.iterator in e8);
};
var qt = (e8) => {
  if (Array.isArray(e8)) return e8.map((e9) => qt(e9));
  if (typeof e8 == `function` || e8 !== Object(e8)) return e8;
  let t2 = {};
  return Object.entries(e8).forEach(([e9, n2]) => {
    let r2 = e9.replace(/([-_][a-z])/gi, (e10) => e10.toUpperCase().replace(/[-_]/g, ``));
    t2[r2] = qt(n2);
  }), t2;
};
var Jt = (e8) => !e8 || typeof e8 != `string` || e8.length === 0 || e8.length > 100 || e8.trim() !== e8 || e8.includes(`/`) || e8.includes(`\\`) ? false : /^[\w!.\*'() &$@=;:+,?-]+$/.test(e8);
var Yt = (e8) => e8.split(`/`).map(encodeURIComponent).join(`/`);
var Xt = (e8) => {
  if (typeof e8 == `object` && e8) {
    let t2 = e8;
    if (typeof t2.msg == `string`) return t2.msg;
    if (typeof t2.message == `string`) return t2.message;
    if (typeof t2.error_description == `string`) return t2.error_description;
    if (typeof t2.error == `string`) return t2.error;
    if (typeof t2.error == `object` && t2.error !== null) {
      let e9 = t2.error;
      if (typeof e9.message == `string`) return e9.message;
    }
  }
  return JSON.stringify(e8);
};
var Zt = async (e8, t2, n2, r2) => {
  if (typeof e8 == `object` && e8 && `json` in e8 && typeof e8.json == `function`) {
    let n3 = e8, i2 = parseInt(String(n3.status), 10);
    Number.isFinite(i2) || (i2 = 500), n3.json().then((e9) => {
      let n4 = e9?.statusCode || e9?.code || i2 + ``;
      t2(new Vt(Xt(e9), i2, n4, r2, e9?.code));
    }).catch(() => {
      let e9 = i2 + ``;
      t2(new Vt(n3.statusText || `HTTP ${i2} error`, i2, e9, r2));
    });
  } else t2(new Ht(Xt(e8), e8, r2));
};
var Qt = (e8, t2, n2, r2) => {
  let i2 = { method: e8, headers: t2?.headers || {} };
  if (e8 === `GET` || e8 === `HEAD` || !r2) return k(k({}, i2), n2);
  if (Kt(r2)) {
    let e9 = t2?.headers || {}, n3;
    for (let [t3, r3] of Object.entries(e9)) t3.toLowerCase() === `content-type` && (n3 = r3);
    i2.headers = Ut(e9, `Content-Type`, n3 ?? `application/json`), i2.body = JSON.stringify(r2);
  } else i2.body = r2;
  return t2?.duplex && (i2.duplex = t2.duplex), k(k({}, i2), n2);
};
async function $t(e8, t2, n2, r2, i2, a2, o2) {
  return new Promise((s2, c2) => {
    e8(n2, Qt(t2, r2, i2, a2)).then((e9) => {
      if (!e9.ok) throw e9;
      if (r2?.noResolveJson) return e9;
      if (o2 === `vectors`) {
        let t3 = e9.headers.get(`content-type`);
        if (e9.headers.get(`content-length`) === `0` || e9.status === 204 || !t3 || !t3.includes(`application/json`)) return {};
      }
      return e9.json();
    }).then((e9) => s2(e9)).catch((e9) => Zt(e9, c2, r2, o2));
  });
}
function en(e8 = `storage`) {
  return { get: async (t2, n2, r2, i2) => $t(t2, `GET`, n2, r2, i2, void 0, e8), post: async (t2, n2, r2, i2, a2) => $t(t2, `POST`, n2, i2, a2, r2, e8), put: async (t2, n2, r2, i2, a2) => $t(t2, `PUT`, n2, i2, a2, r2, e8), head: async (t2, n2, r2, i2) => $t(t2, `HEAD`, n2, k(k({}, r2), {}, { noResolveJson: true }), i2, void 0, e8), remove: async (t2, n2, r2, i2, a2) => $t(t2, `DELETE`, n2, i2, a2, r2, e8) };
}
var { get: tn, post: A, put: nn, head: rn, remove: an } = en(`storage`);
var j = en(`vectors`);
var M = class {
  constructor(e8, t2 = {}, n2, r2 = `storage`) {
    this.shouldThrowOnError = false, this.url = e8, this.headers = Wt(t2), this.fetch = Gt(n2), this.namespace = r2;
  }
  throwOnError() {
    return this.shouldThrowOnError = true, this;
  }
  setHeader(e8, t2) {
    return this.headers = Ut(this.headers, e8, t2), this;
  }
  async handleOperation(e8) {
    var t2 = this;
    try {
      return { data: await e8(), error: null };
    } catch (e9) {
      if (t2.shouldThrowOnError) throw e9;
      if (Bt(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
};
var on = Symbol.toStringTag;
var sn = class {
  constructor(e8, t2) {
    this.downloadFn = e8, this.shouldThrowOnError = t2, this[on] = `StreamDownloadBuilder`, this.promise = null;
  }
  then(e8, t2) {
    return this.getPromise().then(e8, t2);
  }
  catch(e8) {
    return this.getPromise().catch(e8);
  }
  finally(e8) {
    return this.getPromise().finally(e8);
  }
  getPromise() {
    return this.promise ||= this.execute(), this.promise;
  }
  async execute() {
    var e8 = this;
    try {
      return { data: (await e8.downloadFn()).body, error: null };
    } catch (t2) {
      if (e8.shouldThrowOnError) throw t2;
      if (Bt(t2)) return { data: null, error: t2 };
      throw t2;
    }
  }
};
var cn = Symbol.toStringTag;
var ln = class {
  constructor(e8, t2) {
    this.downloadFn = e8, this.shouldThrowOnError = t2, this[cn] = `BlobDownloadBuilder`, this.promise = null;
  }
  asStream() {
    return new sn(this.downloadFn, this.shouldThrowOnError);
  }
  then(e8, t2) {
    return this.getPromise().then(e8, t2);
  }
  catch(e8) {
    return this.getPromise().catch(e8);
  }
  finally(e8) {
    return this.getPromise().finally(e8);
  }
  getPromise() {
    return this.promise ||= this.execute(), this.promise;
  }
  async execute() {
    var e8 = this;
    try {
      return { data: await (await e8.downloadFn()).blob(), error: null };
    } catch (t2) {
      if (e8.shouldThrowOnError) throw t2;
      if (Bt(t2)) return { data: null, error: t2 };
      throw t2;
    }
  }
};
var un = { limit: 100, offset: 0, sortBy: { column: `name`, order: `asc` } };
var dn = { cacheControl: `3600`, contentType: `text/plain;charset=UTF-8`, upsert: false };
var fn = class extends M {
  constructor(e8, t2 = {}, n2, r2) {
    super(e8, t2, r2, `storage`), this.bucketId = n2;
  }
  async uploadOrUpdate(e8, t2, n2, r2) {
    var i2 = this;
    return i2.handleOperation(async () => {
      let a2, o2 = k(k({}, dn), r2), s2 = k(k({}, i2.headers), e8 === `POST` && { "x-upsert": String(o2.upsert) }), c2 = o2.metadata;
      if (typeof Blob < `u` && n2 instanceof Blob ? (a2 = new FormData(), a2.append(`cacheControl`, o2.cacheControl), c2 && a2.append(`metadata`, i2.encodeMetadata(c2)), a2.append(``, n2)) : typeof FormData < `u` && n2 instanceof FormData ? (a2 = n2, a2.has(`cacheControl`) || a2.append(`cacheControl`, o2.cacheControl), c2 && !a2.has(`metadata`) && a2.append(`metadata`, i2.encodeMetadata(c2))) : (a2 = n2, s2[`cache-control`] = `max-age=${o2.cacheControl}`, s2[`content-type`] = o2.contentType, c2 && (s2[`x-metadata`] = i2.toBase64(i2.encodeMetadata(c2))), (typeof ReadableStream < `u` && a2 instanceof ReadableStream || a2 && typeof a2 == `object` && `pipe` in a2 && typeof a2.pipe == `function`) && !o2.duplex && (o2.duplex = `half`)), r2?.headers) for (let [e9, t3] of Object.entries(r2.headers)) s2 = Ut(s2, e9, t3);
      let l2 = i2._removeEmptyFolders(t2), u2 = i2._getFinalPath(l2), d2 = await (e8 == `PUT` ? nn : A)(i2.fetch, `${i2.url}/object/${u2}`, a2, k({ headers: s2 }, o2?.duplex ? { duplex: o2.duplex } : {}));
      return { path: l2, id: d2.Id, fullPath: d2.Key };
    });
  }
  async upload(e8, t2, n2) {
    return this.uploadOrUpdate(`POST`, e8, t2, n2);
  }
  async uploadToSignedUrl(e8, t2, n2, r2) {
    var i2 = this;
    let a2 = i2._removeEmptyFolders(e8), o2 = i2._getFinalPath(a2), s2 = new URL(i2.url + `/object/upload/sign/${o2}`);
    return s2.searchParams.set(`token`, t2), i2.handleOperation(async () => {
      let e9, t3 = k(k({}, dn), r2), o3 = k(k({}, i2.headers), { "x-upsert": String(t3.upsert) }), c2 = t3.metadata;
      if (typeof Blob < `u` && n2 instanceof Blob ? (e9 = new FormData(), e9.append(`cacheControl`, t3.cacheControl), c2 && e9.append(`metadata`, i2.encodeMetadata(c2)), e9.append(``, n2)) : typeof FormData < `u` && n2 instanceof FormData ? (e9 = n2, e9.has(`cacheControl`) || e9.append(`cacheControl`, t3.cacheControl), c2 && !e9.has(`metadata`) && e9.append(`metadata`, i2.encodeMetadata(c2))) : (e9 = n2, o3[`cache-control`] = `max-age=${t3.cacheControl}`, o3[`content-type`] = t3.contentType, c2 && (o3[`x-metadata`] = i2.toBase64(i2.encodeMetadata(c2))), (typeof ReadableStream < `u` && e9 instanceof ReadableStream || e9 && typeof e9 == `object` && `pipe` in e9 && typeof e9.pipe == `function`) && !t3.duplex && (t3.duplex = `half`)), r2?.headers) for (let [e10, t4] of Object.entries(r2.headers)) o3 = Ut(o3, e10, t4);
      return { path: a2, fullPath: (await nn(i2.fetch, s2.toString(), e9, k({ headers: o3 }, t3?.duplex ? { duplex: t3.duplex } : {}))).Key };
    });
  }
  async createSignedUploadUrl(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => {
      let r2 = n2._getFinalPath(e8), i2 = k({}, n2.headers);
      t2?.upsert && (i2[`x-upsert`] = `true`);
      let a2 = await A(n2.fetch, `${n2.url}/object/upload/sign/${r2}`, {}, { headers: i2 }), o2 = new URL(n2.url + a2.url), s2 = o2.searchParams.get(`token`);
      if (!s2) throw new zt(`No token returned by API`);
      return { signedUrl: o2.toString(), path: e8, token: s2 };
    });
  }
  async update(e8, t2, n2) {
    return this.uploadOrUpdate(`PUT`, e8, t2, n2);
  }
  async move(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => await A(r2.fetch, `${r2.url}/object/move`, { bucketId: r2.bucketId, sourceKey: e8, destinationKey: t2, destinationBucket: n2?.destinationBucket, sourceVersionId: n2?.sourceVersionId }, { headers: r2.headers }));
  }
  async copy(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => ({ path: (await A(r2.fetch, `${r2.url}/object/copy`, { bucketId: r2.bucketId, sourceKey: e8, destinationKey: t2, destinationBucket: n2?.destinationBucket, sourceVersionId: n2?.sourceVersionId }, { headers: r2.headers })).Key }));
  }
  async createSignedUrl(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => {
      let i2 = r2._getFinalPath(e8), a2 = typeof n2?.transform == `object` && n2.transform !== null && Object.keys(n2.transform).length > 0, o2 = await A(r2.fetch, `${r2.url}/object/sign/${i2}`, k(k({ expiresIn: t2 }, a2 ? { transform: n2.transform } : {}), n2?.versionId == null ? {} : { versionId: n2.versionId }), { headers: r2.headers }), s2 = new URLSearchParams();
      n2?.download && s2.set(`download`, n2.download === true ? `` : n2.download), n2?.cacheNonce != null && s2.set(`cacheNonce`, String(n2.cacheNonce));
      let c2 = s2.toString();
      return { signedUrl: encodeURI(`${r2.url}${o2.signedURL}${c2 ? `&${c2}` : ``}`) };
    });
  }
  async createSignedUrls(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => {
      let i2 = await A(r2.fetch, `${r2.url}/object/sign/${r2.bucketId}`, { expiresIn: t2, paths: e8 }, { headers: r2.headers }), a2 = new URLSearchParams();
      n2?.download && a2.set(`download`, n2.download === true ? `` : n2.download), n2?.cacheNonce != null && a2.set(`cacheNonce`, String(n2.cacheNonce));
      let o2 = a2.toString();
      return i2.map((e9) => k(k({}, e9), {}, { signedUrl: e9.signedURL ? encodeURI(`${r2.url}${e9.signedURL}${o2 ? `&${o2}` : ``}`) : null }));
    });
  }
  download(e8, t2, n2) {
    let r2 = typeof t2?.transform == `object` && t2.transform !== null && Object.keys(t2.transform).length > 0 ? `render/image/authenticated` : `object`, i2 = new URLSearchParams();
    t2?.transform && this.applyTransformOptsToQuery(i2, t2.transform), t2?.cacheNonce != null && i2.set(`cacheNonce`, String(t2.cacheNonce)), t2?.versionId != null && i2.set(`versionId`, String(t2.versionId));
    let a2 = i2.toString(), o2 = this._getFinalPath(e8);
    return new ln(() => tn(this.fetch, `${this.url}/${r2}/${o2}${a2 ? `?${a2}` : ``}`, { headers: this.headers, noResolveJson: true }, n2), this.shouldThrowOnError);
  }
  async info(e8, t2) {
    var n2 = this;
    let r2 = n2._getFinalPath(e8), i2 = new URLSearchParams();
    t2?.versionId != null && i2.set(`versionId`, String(t2.versionId));
    let a2 = i2.toString();
    return n2.handleOperation(async () => qt(await tn(n2.fetch, `${n2.url}/object/info/${r2}${a2 ? `?${a2}` : ``}`, { headers: n2.headers })));
  }
  async exists(e8) {
    var t2 = this;
    let n2 = t2._getFinalPath(e8);
    try {
      return await rn(t2.fetch, `${t2.url}/object/${n2}`, { headers: t2.headers }), { data: true, error: null };
    } catch (e9) {
      if (t2.shouldThrowOnError) throw e9;
      if (Bt(e9)) {
        let t3 = e9 instanceof Vt ? e9.status : e9 instanceof Ht ? e9.originalError?.status : void 0;
        if (t3 !== void 0 && [400, 404].includes(t3)) return { data: false, error: e9 };
      }
      throw e9;
    }
  }
  getPublicUrl(e8, t2) {
    let n2 = this._getFinalPath(e8), r2 = new URLSearchParams();
    t2?.download && r2.set(`download`, t2.download === true ? `` : t2.download), t2?.transform && this.applyTransformOptsToQuery(r2, t2.transform), t2?.cacheNonce != null && r2.set(`cacheNonce`, String(t2.cacheNonce)), t2?.versionId != null && r2.set(`versionId`, String(t2.versionId));
    let i2 = r2.toString(), a2 = typeof t2?.transform == `object` && t2.transform !== null && Object.keys(t2.transform).length > 0 ? `render/image` : `object`;
    return { data: { publicUrl: encodeURI(`${this.url}/${a2}/public/${n2}`) + (i2 ? `?${i2}` : ``) } };
  }
  async remove(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await an(t2.fetch, `${t2.url}/object/${t2.bucketId}`, { prefixes: e8 }, { headers: t2.headers }));
  }
  async purgeCache(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => {
      let i2 = Yt(r2._getFinalPath(e8)), a2 = new URLSearchParams();
      t2?.transformations && a2.set(`transformations`, `true`);
      let o2 = a2.toString();
      return await an(r2.fetch, `${r2.url}/cdn/${i2}${o2 ? `?${o2}` : ``}`, {}, { headers: r2.headers }, n2);
    });
  }
  async list(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => {
      let i2 = t2?.sortBy ? k(k({}, un.sortBy), t2.sortBy) : un.sortBy, a2 = k(k(k({}, un), t2), {}, { sortBy: i2, prefix: e8 || `` });
      return await A(r2.fetch, `${r2.url}/object/list/${r2.bucketId}`, a2, { headers: r2.headers }, n2);
    });
  }
  async listV2(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => {
      let r2 = k({}, e8);
      return await A(n2.fetch, `${n2.url}/object/list-v2/${n2.bucketId}`, r2, { headers: n2.headers }, t2);
    });
  }
  encodeMetadata(e8) {
    return JSON.stringify(e8);
  }
  toBase64(e8) {
    return typeof Buffer < `u` ? Buffer.from(e8).toString(`base64`) : btoa(e8);
  }
  _getFinalPath(e8) {
    return `${this.bucketId}/${e8.replace(/^\/+/, ``)}`;
  }
  _removeEmptyFolders(e8) {
    return e8.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`);
  }
  applyTransformOptsToQuery(e8, t2) {
    return t2.width && e8.set(`width`, t2.width.toString()), t2.height && e8.set(`height`, t2.height.toString()), t2.resize && e8.set(`resize`, t2.resize), t2.format && e8.set(`format`, t2.format), t2.quality && e8.set(`quality`, t2.quality.toString()), e8;
  }
};
var pn = { "X-Client-Info": `storage-js/2.117.2` };
var mn = class extends M {
  constructor(e8, t2 = {}, n2, r2) {
    let i2 = new URL(e8);
    r2?.useNewHostname && /supabase\.(co|in|red)$/.test(i2.hostname) && !i2.hostname.includes(`storage.supabase.`) && (i2.hostname = i2.hostname.replace(`supabase.`, `storage.supabase.`));
    let a2 = i2.href.replace(/\/$/, ``), o2 = k(k({}, pn), t2);
    super(a2, o2, n2, `storage`);
  }
  async listBuckets(e8) {
    var t2 = this;
    return t2.handleOperation(async () => {
      let n2 = t2.listBucketOptionsToQueryString(e8);
      return await tn(t2.fetch, `${t2.url}/bucket${n2}`, { headers: t2.headers });
    });
  }
  async getBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await tn(t2.fetch, `${t2.url}/bucket/${e8}`, { headers: t2.headers }));
  }
  async createBucket(e8, t2 = { public: false }) {
    var n2 = this;
    return n2.handleOperation(async () => await A(n2.fetch, `${n2.url}/bucket`, { id: e8, name: e8, type: t2.type, public: t2.public, file_size_limit: t2.fileSizeLimit, allowed_mime_types: t2.allowedMimeTypes, versioning_status: t2.versioningStatus }, { headers: n2.headers }));
  }
  async updateBucket(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => await nn(n2.fetch, `${n2.url}/bucket/${e8}`, { id: e8, name: e8, public: t2.public, file_size_limit: t2.fileSizeLimit, allowed_mime_types: t2.allowedMimeTypes, versioning_status: t2.versioningStatus }, { headers: n2.headers }));
  }
  async emptyBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await A(t2.fetch, `${t2.url}/bucket/${e8}/empty`, {}, { headers: t2.headers }));
  }
  async deleteBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await an(t2.fetch, `${t2.url}/bucket/${e8}`, {}, { headers: t2.headers }));
  }
  async getBucketLifecycle(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await tn(t2.fetch, t2.bucketLifecycleUrl(e8), { headers: t2.headers }));
  }
  async updateBucketLifecycle(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => await nn(n2.fetch, n2.bucketLifecycleUrl(e8), t2, { headers: n2.headers }));
  }
  async deleteBucketLifecycle(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await an(t2.fetch, t2.bucketLifecycleUrl(e8), {}, { headers: t2.headers }));
  }
  async purgeBucketCache(e8, t2, n2) {
    var r2 = this;
    return r2.handleOperation(async () => {
      let i2 = new URLSearchParams();
      t2?.transformations && i2.set(`transformations`, `true`);
      let a2 = i2.toString();
      return await an(r2.fetch, `${r2.url}/cdn/${Yt(e8)}${a2 ? `?${a2}` : ``}`, {}, { headers: r2.headers }, n2);
    });
  }
  bucketLifecycleUrl(e8) {
    return `${this.url}/bucket/${Yt(e8)}/lifecycle`;
  }
  listBucketOptionsToQueryString(e8) {
    let t2 = {};
    return e8 && (`limit` in e8 && (t2.limit = String(e8.limit)), `offset` in e8 && (t2.offset = String(e8.offset)), e8.search && (t2.search = e8.search), e8.sortColumn && (t2.sortColumn = e8.sortColumn), e8.sortOrder && (t2.sortOrder = e8.sortOrder)), Object.keys(t2).length > 0 ? `?` + new URLSearchParams(t2).toString() : ``;
  }
};
var hn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``), i2 = k(k({}, pn), t2);
    super(r2, i2, n2, `storage`);
  }
  async createBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await A(t2.fetch, `${t2.url}/bucket`, { name: e8 }, { headers: t2.headers }));
  }
  async listBuckets(e8) {
    var t2 = this;
    return t2.handleOperation(async () => {
      let n2 = new URLSearchParams();
      e8?.limit !== void 0 && n2.set(`limit`, e8.limit.toString()), e8?.offset !== void 0 && n2.set(`offset`, e8.offset.toString()), e8?.sortColumn && n2.set(`sortColumn`, e8.sortColumn), e8?.sortOrder && n2.set(`sortOrder`, e8.sortOrder), e8?.search && n2.set(`search`, e8.search);
      let r2 = n2.toString(), i2 = r2 ? `${t2.url}/bucket?${r2}` : `${t2.url}/bucket`;
      return await tn(t2.fetch, i2, { headers: t2.headers });
    });
  }
  async deleteBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await an(t2.fetch, `${t2.url}/bucket/${e8}`, {}, { headers: t2.headers }));
  }
  from(e8) {
    var t2 = this;
    if (!Jt(e8)) throw new zt(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);
    let n2 = new Nt({ baseUrl: this.url, catalogName: e8, auth: { type: `custom`, getHeaders: async () => t2.headers }, fetch: this.fetch }), r2 = this.shouldThrowOnError;
    return new Proxy(n2, { get(e9, t3) {
      let n3 = e9[t3];
      return typeof n3 == `function` ? async (...t4) => {
        try {
          return { data: await n3.apply(e9, t4), error: null };
        } catch (e10) {
          if (r2) throw e10;
          return { data: null, error: e10 };
        }
      } : n3;
    } });
  }
};
var gn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``), i2 = k(k({}, pn), {}, { "Content-Type": `application/json` }, t2);
    super(r2, i2, n2, `vectors`);
  }
  async createIndex(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/CreateIndex`, e8, { headers: t2.headers }) || {});
  }
  async getIndex(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => await j.post(n2.fetch, `${n2.url}/GetIndex`, { vectorBucketName: e8, indexName: t2 }, { headers: n2.headers }));
  }
  async listIndexes(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListIndexes`, e8, { headers: t2.headers }));
  }
  async deleteIndex(e8, t2) {
    var n2 = this;
    return n2.handleOperation(async () => await j.post(n2.fetch, `${n2.url}/DeleteIndex`, { vectorBucketName: e8, indexName: t2 }, { headers: n2.headers }) || {});
  }
};
var _n = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``), i2 = k(k({}, pn), {}, { "Content-Type": `application/json` }, t2);
    super(r2, i2, n2, `vectors`);
  }
  async putVectors(e8) {
    var t2 = this;
    if (e8.vectors.length < 1 || e8.vectors.length > 500) throw Error(`Vector batch size must be between 1 and 500 items`);
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/PutVectors`, e8, { headers: t2.headers }) || {});
  }
  async getVectors(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/GetVectors`, e8, { headers: t2.headers }));
  }
  async listVectors(e8) {
    var t2 = this;
    if (e8.segmentCount !== void 0) {
      if (e8.segmentCount < 1 || e8.segmentCount > 16) throw Error(`segmentCount must be between 1 and 16`);
      if (e8.segmentIndex !== void 0 && (e8.segmentIndex < 0 || e8.segmentIndex >= e8.segmentCount)) throw Error(`segmentIndex must be between 0 and ${e8.segmentCount - 1}`);
    }
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListVectors`, e8, { headers: t2.headers }));
  }
  async queryVectors(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/QueryVectors`, e8, { headers: t2.headers }));
  }
  async deleteVectors(e8) {
    var t2 = this;
    if (e8.keys.length < 1 || e8.keys.length > 500) throw Error(`Keys batch size must be between 1 and 500 items`);
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/DeleteVectors`, e8, { headers: t2.headers }) || {});
  }
};
var vn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``), i2 = k(k({}, pn), {}, { "Content-Type": `application/json` }, t2);
    super(r2, i2, n2, `vectors`);
  }
  async createBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/CreateVectorBucket`, { vectorBucketName: e8 }, { headers: t2.headers }) || {});
  }
  async getBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/GetVectorBucket`, { vectorBucketName: e8 }, { headers: t2.headers }));
  }
  async listBuckets(e8 = {}) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListVectorBuckets`, e8, { headers: t2.headers }));
  }
  async deleteBucket(e8) {
    var t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/DeleteVectorBucket`, { vectorBucketName: e8 }, { headers: t2.headers }) || {});
  }
};
var yn = class extends vn {
  constructor(e8, t2 = {}) {
    super(e8, t2.headers || {}, t2.fetch);
  }
  from(e8) {
    return new bn(this.url, this.headers, e8, this.fetch);
  }
  async createBucket(e8) {
    var t2 = () => super.createBucket, n2 = this;
    return t2().call(n2, e8);
  }
  async getBucket(e8) {
    var t2 = () => super.getBucket, n2 = this;
    return t2().call(n2, e8);
  }
  async listBuckets(e8 = {}) {
    var t2 = () => super.listBuckets, n2 = this;
    return t2().call(n2, e8);
  }
  async deleteBucket(e8) {
    var t2 = () => super.deleteBucket, n2 = this;
    return t2().call(n2, e8);
  }
};
var bn = class extends gn {
  constructor(e8, t2, n2, r2) {
    super(e8, t2, r2), this.vectorBucketName = n2;
  }
  async createIndex(e8) {
    var t2 = () => super.createIndex, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName }));
  }
  async listIndexes(e8 = {}) {
    var t2 = () => super.listIndexes, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName }));
  }
  async getIndex(e8) {
    var t2 = () => super.getIndex, n2 = this;
    return t2().call(n2, n2.vectorBucketName, e8);
  }
  async deleteIndex(e8) {
    var t2 = () => super.deleteIndex, n2 = this;
    return t2().call(n2, n2.vectorBucketName, e8);
  }
  index(e8) {
    return new xn(this.url, this.headers, this.vectorBucketName, e8, this.fetch);
  }
};
var xn = class extends _n {
  constructor(e8, t2, n2, r2, i2) {
    super(e8, t2, i2), this.vectorBucketName = n2, this.indexName = r2;
  }
  async putVectors(e8) {
    var t2 = () => super.putVectors, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName, indexName: n2.indexName }));
  }
  async getVectors(e8) {
    var t2 = () => super.getVectors, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName, indexName: n2.indexName }));
  }
  async listVectors(e8 = {}) {
    var t2 = () => super.listVectors, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName, indexName: n2.indexName }));
  }
  async queryVectors(e8) {
    var t2 = () => super.queryVectors, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName, indexName: n2.indexName }));
  }
  async deleteVectors(e8) {
    var t2 = () => super.deleteVectors, n2 = this;
    return t2().call(n2, k(k({}, e8), {}, { vectorBucketName: n2.vectorBucketName, indexName: n2.indexName }));
  }
};
var Sn = class extends mn {
  constructor(e8, t2 = {}, n2, r2) {
    super(e8, t2, n2, r2);
  }
  from(e8) {
    return new fn(this.url, this.headers, e8, this.fetch);
  }
  get vectors() {
    return new yn(this.url + `/vector`, { headers: this.headers, fetch: this.fetch });
  }
  get analytics() {
    return new hn(this.url + `/iceberg`, this.headers, this.fetch);
  }
};
var Cn = `2.117.2`;
var N = 3e4;
var wn = 3 * N;
var Tn = 2 * N;
var En = `http://localhost:9999`;
var Dn = `supabase.auth.token`;
var On = { "X-Client-Info": `gotrue-js/${Cn}` };
var kn = `X-Supabase-Api-Version`;
var An = { "2024-01-01": { timestamp: Date.parse(`2024-01-01T00:00:00.0Z`), name: `2024-01-01` } };
var jn = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
var Mn = `sb_flow_id`;
var Nn = class extends Error {
  constructor(e8, t2, n2) {
    super(e8), this.__isAuthError = true, this.name = `AuthError`, this.status = t2, this.code = n2;
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status, code: this.code };
  }
};
function P(e8) {
  return typeof e8 == `object` && !!e8 && `__isAuthError` in e8;
}
var Pn = class extends Nn {
  constructor(e8, t2, n2) {
    super(e8, t2, n2), this.name = `AuthApiError`, this.status = t2, this.code = n2;
  }
};
function Fn(e8) {
  return P(e8) && e8.name === `AuthApiError`;
}
var F = class extends Nn {
  constructor(e8, t2) {
    super(e8), this.name = `AuthUnknownError`, this.originalError = t2;
  }
};
var I = class extends Nn {
  constructor(e8, t2, n2, r2) {
    super(e8, n2, r2), this.name = t2, this.status = n2;
  }
};
var L = class extends I {
  constructor() {
    super(`Auth session missing!`, `AuthSessionMissingError`, 400, void 0);
  }
};
function In(e8) {
  return P(e8) && e8.name === `AuthSessionMissingError`;
}
var R = class extends I {
  constructor() {
    super(`Auth session or user missing`, `AuthInvalidTokenResponseError`, 500, void 0);
  }
};
var Ln = class extends I {
  constructor(e8) {
    super(e8, `AuthInvalidCredentialsError`, 400, void 0);
  }
};
var Rn = class extends I {
  constructor(e8, t2 = null) {
    super(e8, `AuthImplicitGrantRedirectError`, 500, void 0), this.details = null, this.details = t2;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
};
function zn(e8) {
  return P(e8) && e8.name === `AuthImplicitGrantRedirectError`;
}
var Bn = class extends I {
  constructor(e8, t2 = null) {
    super(e8, `AuthPKCEGrantCodeExchangeError`, 500, void 0), this.details = null, this.details = t2;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
};
var Vn = class extends I {
  constructor() {
    super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`, `AuthPKCECodeVerifierMissingError`, 400, `pkce_code_verifier_not_found`);
  }
};
var Hn = class extends I {
  constructor(e8, t2) {
    super(e8, `AuthRetryableFetchError`, t2, void 0);
  }
};
function Un(e8) {
  return P(e8) && e8.name === `AuthRetryableFetchError`;
}
var Wn = class extends I {
  constructor(e8 = `Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`) {
    super(e8, `AuthRefreshDiscardedError`, 409, void 0);
  }
};
function Gn(e8) {
  return P(e8) && e8.name === `AuthRefreshDiscardedError`;
}
var Kn = class extends I {
  constructor(e8, t2, n2) {
    super(e8, `AuthWeakPasswordError`, t2, `weak_password`), this.reasons = n2;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
};
var qn = class extends I {
  constructor(e8) {
    super(e8, `AuthInvalidJwtError`, 400, `invalid_jwt`);
  }
};
var Jn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``);
var Yn = ` 	
\r=`.split(``);
var Xn = (() => {
  let e8 = Array(128);
  for (let t2 = 0; t2 < e8.length; t2 += 1) e8[t2] = -1;
  for (let t2 = 0; t2 < Yn.length; t2 += 1) e8[Yn[t2].charCodeAt(0)] = -2;
  for (let t2 = 0; t2 < Jn.length; t2 += 1) e8[Jn[t2].charCodeAt(0)] = t2;
  return e8;
})();
function Zn(e8, t2, n2) {
  if (e8 !== null) for (t2.queue = t2.queue << 8 | e8, t2.queuedBits += 8; t2.queuedBits >= 6; ) n2(Jn[t2.queue >> t2.queuedBits - 6 & 63]), t2.queuedBits -= 6;
  else if (t2.queuedBits > 0) for (t2.queue <<= 6 - t2.queuedBits, t2.queuedBits = 6; t2.queuedBits >= 6; ) n2(Jn[t2.queue >> t2.queuedBits - 6 & 63]), t2.queuedBits -= 6;
}
function Qn(e8, t2, n2) {
  let r2 = Xn[e8];
  if (r2 > -1) for (t2.queue = t2.queue << 6 | r2, t2.queuedBits += 6; t2.queuedBits >= 8; ) n2(t2.queue >> t2.queuedBits - 8 & 255), t2.queuedBits -= 8;
  else if (r2 === -2) return;
  else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e8)}"`);
}
function $n(e8) {
  let t2 = [], n2 = (e9) => {
    t2.push(String.fromCodePoint(e9));
  }, r2 = { utf8seq: 0, codepoint: 0 }, i2 = { queue: 0, queuedBits: 0 }, a2 = (e9) => {
    nr(e9, r2, n2);
  };
  for (let t3 = 0; t3 < e8.length; t3 += 1) Qn(e8.charCodeAt(t3), i2, a2);
  return t2.join(``);
}
function er(e8, t2) {
  if (e8 <= 127) {
    t2(e8);
    return;
  }
  if (e8 <= 2047) {
    t2(192 | e8 >> 6), t2(128 | e8 & 63);
    return;
  }
  if (e8 <= 65535) {
    t2(224 | e8 >> 12), t2(128 | e8 >> 6 & 63), t2(128 | e8 & 63);
    return;
  }
  if (e8 <= 1114111) {
    t2(240 | e8 >> 18), t2(128 | e8 >> 12 & 63), t2(128 | e8 >> 6 & 63), t2(128 | e8 & 63);
    return;
  }
  throw Error(`Unrecognized Unicode codepoint: ${e8.toString(16)}`);
}
function tr(e8, t2) {
  for (let n2 = 0; n2 < e8.length; n2 += 1) {
    let r2 = e8.charCodeAt(n2);
    if (r2 > 55295 && r2 <= 56319) {
      let t3 = (r2 - 55296) * 1024 & 65535;
      r2 = (e8.charCodeAt(n2 + 1) - 56320 & 65535 | t3) + 65536, n2 += 1;
    }
    er(r2, t2);
  }
}
function nr(e8, t2, n2) {
  if (t2.utf8seq === 0) {
    if (e8 <= 127) {
      n2(e8);
      return;
    }
    for (let n3 = 1; n3 < 6; n3 += 1) if (!(e8 >> 7 - n3 & 1)) {
      t2.utf8seq = n3;
      break;
    }
    if (t2.utf8seq === 2) t2.codepoint = e8 & 31;
    else if (t2.utf8seq === 3) t2.codepoint = e8 & 15;
    else if (t2.utf8seq === 4) t2.codepoint = e8 & 7;
    else throw Error(`Invalid UTF-8 sequence`);
    --t2.utf8seq;
  } else if (t2.utf8seq > 0) {
    if (e8 <= 127) throw Error(`Invalid UTF-8 sequence`);
    t2.codepoint = t2.codepoint << 6 | e8 & 63, --t2.utf8seq, t2.utf8seq === 0 && n2(t2.codepoint);
  }
}
function z(e8) {
  let t2 = [], n2 = { queue: 0, queuedBits: 0 }, r2 = (e9) => {
    t2.push(e9);
  };
  for (let t3 = 0; t3 < e8.length; t3 += 1) Qn(e8.charCodeAt(t3), n2, r2);
  return new Uint8Array(t2);
}
function rr(e8) {
  let t2 = [];
  return tr(e8, (e9) => t2.push(e9)), new Uint8Array(t2);
}
function B(e8) {
  let t2 = [], n2 = { queue: 0, queuedBits: 0 }, r2 = (e9) => {
    t2.push(e9);
  };
  return e8.forEach((e9) => Zn(e9, n2, r2)), Zn(null, n2, r2), t2.join(``);
}
function ir(e8) {
  return Math.round(Date.now() / 1e3) + e8;
}
function ar() {
  return /* @__PURE__ */ Symbol(`auth-callback`);
}
var V = () => typeof window < `u` && typeof document < `u`;
var H = { tested: false, writable: false };
var or = () => {
  if (!V()) return false;
  try {
    if (typeof globalThis.localStorage != `object`) return false;
  } catch {
    return false;
  }
  if (H.tested) return H.writable;
  let e8 = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e8, e8), globalThis.localStorage.removeItem(e8), H.tested = true, H.writable = true;
  } catch {
    H.tested = true, H.writable = false;
  }
  return H.writable;
};
function sr(e8) {
  let t2 = {}, n2 = new URL(e8);
  if (n2.hash && n2.hash[0] === `#`) try {
    new URLSearchParams(n2.hash.substring(1)).forEach((e9, n3) => {
      t2[n3] = e9;
    });
  } catch {
  }
  return n2.searchParams.forEach((e9, n3) => {
    t2[n3] = e9;
  }), t2;
}
var cr = (e8) => e8 ? (...t2) => e8(...t2) : (...e9) => fetch(...e9);
var lr = (e8) => typeof e8 == `object` && !!e8 && `status` in e8 && `ok` in e8 && `json` in e8 && typeof e8.json == `function`;
var U = async (e8, t2, n2) => {
  await e8.setItem(t2, JSON.stringify(n2));
};
var W = async (e8, t2) => {
  let n2 = await e8.getItem(t2);
  if (!n2) return null;
  try {
    return JSON.parse(n2);
  } catch {
    return null;
  }
};
var G = async (e8, t2) => {
  await e8.removeItem(t2);
};
var ur = class e6 {
  constructor() {
    this.promise = new e6.promiseConstructor((e8, t2) => {
      this.resolve = e8, this.reject = t2;
    });
  }
};
ur.promiseConstructor = Promise;
function dr(e8) {
  let t2 = e8.split(`.`);
  if (t2.length !== 3) throw new qn(`Invalid JWT structure`);
  for (let e9 = 0; e9 < t2.length; e9++) if (!jn.test(t2[e9])) throw new qn(`JWT not in base64url format`);
  return { header: JSON.parse($n(t2[0])), payload: JSON.parse($n(t2[1])), signature: z(t2[2]), raw: { header: t2[0], payload: t2[1] } };
}
async function fr(e8) {
  return await new Promise((t2) => {
    setTimeout(() => t2(null), e8);
  });
}
function pr(e8, t2) {
  return new Promise((n2, r2) => {
    (async () => {
      for (let i2 = 0; i2 < 1 / 0; i2++) try {
        let r3 = await e8(i2);
        if (!t2(i2, null, r3)) {
          n2(r3);
          return;
        }
      } catch (e9) {
        if (!t2(i2, e9)) {
          r2(e9);
          return;
        }
      }
    })();
  });
}
function mr(e8) {
  return (`0` + e8.toString(16)).substr(-2);
}
function hr() {
  let e8 = new Uint32Array(56);
  if (typeof crypto > `u`) {
    let e9 = ``;
    for (let t2 = 0; t2 < 56; t2++) e9 += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random() * 66));
    return e9;
  }
  return crypto.getRandomValues(e8), Array.from(e8, mr).join(``);
}
async function gr(e8) {
  let t2 = new TextEncoder().encode(e8), n2 = await crypto.subtle.digest(`SHA-256`, t2), r2 = new Uint8Array(n2);
  return Array.from(r2).map((e9) => String.fromCharCode(e9)).join(``);
}
async function _r(e8) {
  if (typeof crypto > `u` || crypto.subtle === void 0 || typeof TextEncoder > `u`) return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`), e8;
  let t2 = await gr(e8);
  return btoa(t2).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
var vr = /^[a-zA-Z0-9_-]{8,64}$/;
function yr(e8) {
  return typeof e8 == `string` && vr.test(e8) ? e8 : null;
}
function br() {
  if (typeof crypto < `u` && typeof crypto.getRandomValues == `function`) {
    let e9 = new Uint8Array(16);
    return crypto.getRandomValues(e9), Array.from(e9, mr).join(``);
  }
  let e8 = ``;
  for (let t2 = 0; t2 < 32; t2++) e8 += Math.floor(Math.random() * 16).toString(16);
  return e8;
}
var xr = (e8, t2) => `${e8}-flow-${t2}-code-verifier`;
var Sr = (e8) => `${e8}-flows-code-verifier`;
async function Cr(e8, t2) {
  let n2 = await W(e8, Sr(t2));
  return Array.isArray(n2) ? n2.filter((e9) => yr(e9) !== null) : [];
}
async function wr(e8, t2, n2, r2, i2) {
  await U(e8, xr(t2, n2), r2);
  let a2 = (await Cr(e8, t2)).filter((e9) => e9 !== n2);
  for (a2.push(n2); a2.length > 5; ) {
    let n3 = a2.shift();
    await G(e8, xr(t2, n3)), i2?.(n3);
  }
  await U(e8, Sr(t2), a2), await U(e8, `${t2}-code-verifier`, r2);
}
async function Tr(e8, t2, n2) {
  if (n2) {
    let r3 = await W(e8, xr(t2, n2));
    return { verifier: typeof r3 == `string` ? r3 : null, flowId: n2 };
  }
  let r2 = await W(e8, `${t2}-code-verifier`);
  return { verifier: typeof r2 == `string` ? r2 : null, flowId: null };
}
async function K(e8, t2, n2) {
  let r2 = `${t2}-code-verifier`;
  if (!n2) {
    await G(e8, r2);
    return;
  }
  let i2 = xr(t2, n2), a2 = await W(e8, i2);
  await G(e8, i2);
  let o2 = await Cr(e8, t2), s2 = o2.filter((e9) => e9 !== n2);
  s2.length !== o2.length && (s2.length > 0 ? await U(e8, Sr(t2), s2) : await G(e8, Sr(t2))), a2 != null && a2 === await W(e8, r2) && await G(e8, r2);
}
async function Er(e8, t2) {
  let n2 = await Cr(e8, t2);
  for (let r2 of n2) await G(e8, xr(t2, r2));
  await G(e8, Sr(t2)), await G(e8, `${t2}-code-verifier`);
}
function Dr(e8, t2) {
  let n2 = e8.indexOf(`#`), r2 = n2 === -1 ? e8 : e8.slice(0, n2), i2 = n2 === -1 ? `` : e8.slice(n2), a2 = r2.indexOf(`?`);
  if (a2 !== -1) {
    let e9 = r2.slice(0, a2), t3 = r2.slice(a2 + 1).split(`&`).filter((e10) => e10 !== `` && e10 !== `sb_flow_id` && !e10.startsWith(`sb_flow_id=`));
    r2 = t3.length > 0 ? `${e9}?${t3.join(`&`)}` : e9;
  }
  let o2 = r2.includes(`?`) ? `&` : `?`;
  return `${r2}${o2}${Mn}=${encodeURIComponent(t2)}${i2}`;
}
async function Or(e8, t2, n2 = false, r2) {
  let i2 = hr(), a2 = i2;
  n2 && (a2 += `/recovery`);
  let o2 = br();
  await wr(e8, t2, o2, a2, r2);
  let s2 = await _r(i2);
  return [s2, i2 === s2 ? `plain` : `s256`, o2];
}
var kr = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ar(e8) {
  let t2 = e8.headers.get(kn);
  if (!t2 || !t2.match(kr)) return null;
  try {
    return /* @__PURE__ */ new Date(`${t2}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function jr(e8) {
  if (!e8) throw Error(`Missing exp claim`);
  if (e8 <= Math.floor(Date.now() / 1e3)) throw Error(`JWT has expired`);
}
function Mr(e8) {
  switch (e8) {
    case `RS256`:
      return { name: `RSASSA-PKCS1-v1_5`, hash: { name: `SHA-256` } };
    case `ES256`:
      return { name: `ECDSA`, namedCurve: `P-256`, hash: { name: `SHA-256` } };
    default:
      throw Error(`Invalid alg claim`);
  }
}
var Nr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function q(e8) {
  if (!Nr.test(e8)) throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`);
}
function Pr(e8) {
  if (!e8.recoveryCodes) throw Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).");
}
function Fr() {
  return new Proxy({}, { get: (e8, t2) => {
    if (t2 === `__isUserNotAvailableProxy`) return true;
    if (typeof t2 == `symbol`) {
      let e9 = t2.toString();
      if (e9 === `Symbol(Symbol.toPrimitive)` || e9 === `Symbol(Symbol.toStringTag)` || e9 === `Symbol(util.inspect.custom)`) return;
    }
    throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t2}" property of the session object is not supported. Please use getUser() instead.`);
  }, set: (e8, t2) => {
    throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t2}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
  }, deleteProperty: (e8, t2) => {
    throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t2}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
  } });
}
function Ir(e8, t2) {
  return new Proxy(e8, { get: (e9, n2, r2) => {
    if (n2 === `__isInsecureUserWarningProxy`) return true;
    if (typeof n2 == `symbol`) {
      let t3 = n2.toString();
      if (t3 === `Symbol(Symbol.toPrimitive)` || t3 === `Symbol(Symbol.toStringTag)` || t3 === `Symbol(util.inspect.custom)` || t3 === `Symbol(nodejs.util.inspect.custom)`) return Reflect.get(e9, n2, r2);
    }
    return !t2.value && typeof n2 == `string` && (console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`), t2.value = true), Reflect.get(e9, n2, r2);
  } });
}
function Lr(e8) {
  return JSON.parse(JSON.stringify(e8));
}
var J = (e8) => {
  if (typeof e8 == `object` && e8) {
    let t2 = e8;
    if (typeof t2.msg == `string`) return t2.msg;
    if (typeof t2.message == `string`) return t2.message;
    if (typeof t2.error_description == `string`) return t2.error_description;
    if (typeof t2.error == `string`) return t2.error;
  }
  return JSON.stringify(e8);
};
var Rr = [500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530];
async function zr(e8) {
  if (!lr(e8)) throw new Hn(J(e8), 0);
  let t2;
  try {
    t2 = await e8.json();
  } catch (t3) {
    throw Rr.includes(e8.status) ? new Hn(e8.statusText || `HTTP ${e8.status}`, e8.status) : new F(J(t3), t3);
  }
  if (Rr.includes(e8.status)) throw new Hn(J(t2), e8.status);
  let n2, r2 = Ar(e8);
  if (r2 && r2.getTime() >= An[`2024-01-01`].timestamp && typeof t2 == `object` && t2 && typeof t2.code == `string` ? n2 = t2.code : typeof t2 == `object` && t2 && typeof t2.error_code == `string` && (n2 = t2.error_code), !n2) {
    if (typeof t2 == `object` && t2 && typeof t2.weak_password == `object` && t2.weak_password && Array.isArray(t2.weak_password.reasons) && t2.weak_password.reasons.length && t2.weak_password.reasons.reduce((e9, t3) => e9 && typeof t3 == `string`, true)) throw new Kn(J(t2), e8.status, t2.weak_password.reasons);
  } else if (n2 === `weak_password`) throw new Kn(J(t2), e8.status, t2.weak_password?.reasons || []);
  else if (n2 === `session_not_found`) throw new L();
  throw new Pn(J(t2), e8.status || 500, n2);
}
var Br = (e8, t2, n2, r2) => {
  let i2 = { method: e8, headers: t2?.headers || {} };
  return e8 === `GET` ? i2 : (i2.headers = Object.assign({ "Content-Type": `application/json;charset=UTF-8` }, t2?.headers), i2.body = JSON.stringify(r2), Object.assign(Object.assign({}, i2), n2));
};
async function Y(e8, t2, n2, r2) {
  let i2 = Object.assign({}, r2?.headers);
  i2[`X-Supabase-Api-Version`] || (i2[kn] = An[`2024-01-01`].name), r2?.jwt && (i2.Authorization = `Bearer ${r2.jwt}`);
  let a2 = r2?.query ?? {};
  r2?.redirectTo && (a2.redirect_to = r2.redirectTo);
  let o2 = await Vr(e8, t2, n2 + (Object.keys(a2).length ? `?` + new URLSearchParams(a2).toString() : ``), { headers: i2, noResolveJson: r2?.noResolveJson }, {}, r2?.body);
  return r2?.xform ? r2?.xform(o2) : { data: Object.assign({}, o2), error: null };
}
async function Vr(e8, t2, n2, r2, i2, a2) {
  let o2 = Br(t2, r2, i2, a2), s2;
  try {
    s2 = await e8(n2, Object.assign({}, o2));
  } catch (e9) {
    throw new Hn(J(e9), 0);
  }
  if (s2.ok || await zr(s2), r2?.noResolveJson) return s2;
  try {
    return await s2.json();
  } catch (e9) {
    await zr(e9);
  }
}
function X(e8) {
  let t2 = null;
  Kr(e8) && (t2 = Object.assign({}, e8), e8.expires_at || (t2.expires_at = ir(e8.expires_in)));
  let n2 = e8.user ?? (typeof e8?.id == `string` ? e8 : null);
  return { data: { session: t2, user: n2 }, error: null };
}
function Hr(e8) {
  let t2 = X(e8);
  return !t2.error && e8.weak_password && typeof e8.weak_password == `object` && Array.isArray(e8.weak_password.reasons) && e8.weak_password.reasons.length && e8.weak_password.message && typeof e8.weak_password.message == `string` && e8.weak_password.reasons.reduce((e9, t3) => e9 && typeof t3 == `string`, true) && (t2.data.weak_password = e8.weak_password), t2;
}
function Z(e8) {
  return { data: { user: e8.user ?? e8 }, error: null };
}
function Ur(e8) {
  return { data: e8, error: null };
}
function Wr(e8) {
  let { action_link: t2, email_otp: r2, hashed_token: i2, redirect_to: a2, verification_type: o2 } = e8, s2 = n(e8, [`action_link`, `email_otp`, `hashed_token`, `redirect_to`, `verification_type`]);
  return { data: { properties: { action_link: t2, email_otp: r2, hashed_token: i2, redirect_to: a2, verification_type: o2 }, user: Object.assign({}, s2) }, error: null };
}
function Gr(e8) {
  return e8;
}
function Kr(e8) {
  return !!e8.access_token && !!e8.refresh_token && !!e8.expires_in;
}
var qr = [`global`, `local`, `others`];
var Jr = class {
  constructor({ url: e8 = ``, headers: t2 = {}, fetch: n2, experimental: r2 }) {
    this.url = e8, this.headers = t2, this.fetch = cr(n2), this.experimental = r2 ?? {}, this.mfa = { listFactors: this._listFactors.bind(this), deleteFactor: this._deleteFactor.bind(this) }, this.oauth = { listClients: this._listOAuthClients.bind(this), createClient: this._createOAuthClient.bind(this), getClient: this._getOAuthClient.bind(this), updateClient: this._updateOAuthClient.bind(this), deleteClient: this._deleteOAuthClient.bind(this), regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this) }, this.customProviders = { listProviders: this._listCustomProviders.bind(this), createProvider: this._createCustomProvider.bind(this), getProvider: this._getCustomProvider.bind(this), updateProvider: this._updateCustomProvider.bind(this), deleteProvider: this._deleteCustomProvider.bind(this) }, this.passkey = { listPasskeys: this._adminListPasskeys.bind(this), deletePasskey: this._adminDeletePasskey.bind(this) };
  }
  async signOut(e8, t2 = qr[0]) {
    if (qr.indexOf(t2) < 0) throw Error(`@supabase/auth-js: Parameter scope must be one of ${qr.join(`, `)}`);
    try {
      return await Y(this.fetch, `POST`, `${this.url}/logout?scope=${t2}`, { headers: this.headers, jwt: e8, noResolveJson: true }), { data: null, error: null };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async inviteUserByEmail(e8, t2 = {}) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/invite`, { body: { email: e8, data: t2.data }, headers: this.headers, redirectTo: t2.redirectTo, xform: Z });
    } catch (e9) {
      if (P(e9)) return { data: { user: null }, error: e9 };
      throw e9;
    }
  }
  async generateLink(e8) {
    try {
      let { options: t2 } = e8, r2 = n(e8, [`options`]), i2 = Object.assign(Object.assign({}, r2), t2);
      return `newEmail` in r2 && (i2.new_email = r2?.newEmail, delete i2.newEmail), await Y(this.fetch, `POST`, `${this.url}/admin/generate_link`, { body: i2, headers: this.headers, xform: Wr, redirectTo: t2?.redirectTo });
    } catch (e9) {
      if (P(e9)) return { data: { properties: null, user: null }, error: e9 };
      throw e9;
    }
  }
  async createUser(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/users`, { body: e8, headers: this.headers, xform: Z });
    } catch (e9) {
      if (P(e9)) return { data: { user: null }, error: e9 };
      throw e9;
    }
  }
  async listUsers(e8) {
    try {
      let t2 = { nextPage: null, lastPage: 0, total: 0 }, n2 = await Y(this.fetch, `GET`, `${this.url}/admin/users`, { headers: this.headers, noResolveJson: true, query: { page: e8?.page?.toString() ?? ``, per_page: e8?.perPage?.toString() ?? `` }, xform: Gr });
      if (n2.error) throw n2.error;
      let r2 = await n2.json(), i2 = n2.headers.get(`x-total-count`) ?? 0, a2 = n2.headers.get(`link`)?.split(`,`) ?? [];
      return a2.length > 0 && (a2.forEach((e9) => {
        let n3 = parseInt(e9.split(`;`)[0].split(`=`)[1].substring(0, 1)), r3 = JSON.parse(e9.split(`;`)[1].split(`=`)[1]);
        t2[`${r3}Page`] = n3;
      }), t2.total = parseInt(i2)), { data: Object.assign(Object.assign({}, r2), t2), error: null };
    } catch (e9) {
      if (P(e9)) return { data: { users: [] }, error: e9 };
      throw e9;
    }
  }
  async getUserById(e8) {
    q(e8);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8}`, { headers: this.headers, xform: Z });
    } catch (e9) {
      if (P(e9)) return { data: { user: null }, error: e9 };
      throw e9;
    }
  }
  async updateUserById(e8, t2) {
    q(e8);
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/users/${e8}`, { body: t2, headers: this.headers, xform: Z });
    } catch (e9) {
      if (P(e9)) return { data: { user: null }, error: e9 };
      throw e9;
    }
  }
  async deleteUser(e8, t2 = false) {
    q(e8);
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8}`, { headers: this.headers, body: { should_soft_delete: t2 }, xform: Z });
    } catch (e9) {
      if (P(e9)) return { data: { user: null }, error: e9 };
      throw e9;
    }
  }
  async _listFactors(e8) {
    q(e8.userId);
    try {
      let { data: t2, error: n2 } = await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8.userId}/factors`, { headers: this.headers, xform: (e9) => ({ data: { factors: e9 }, error: null }) });
      return { data: t2, error: n2 };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _deleteFactor(e8) {
    q(e8.userId), q(e8.id);
    try {
      return { data: await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8.userId}/factors/${e8.id}`, { headers: this.headers }), error: null };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _listOAuthClients(e8) {
    try {
      let t2 = { nextPage: null, lastPage: 0, total: 0 }, n2 = await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients`, { headers: this.headers, noResolveJson: true, query: { page: e8?.page?.toString() ?? ``, per_page: e8?.perPage?.toString() ?? `` }, xform: Gr });
      if (n2.error) throw n2.error;
      let r2 = await n2.json(), i2 = n2.headers.get(`x-total-count`) ?? 0, a2 = n2.headers.get(`link`)?.split(`,`) ?? [];
      return a2.length > 0 && (a2.forEach((e9) => {
        let n3 = parseInt(e9.split(`;`)[0].split(`=`)[1].substring(0, 1)), r3 = JSON.parse(e9.split(`;`)[1].split(`=`)[1]);
        t2[`${r3}Page`] = n3;
      }), t2.total = parseInt(i2)), { data: Object.assign(Object.assign({}, r2), t2), error: null };
    } catch (e9) {
      if (P(e9)) return { data: { clients: [] }, error: e9 };
      throw e9;
    }
  }
  async _createOAuthClient(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients`, { body: e8, headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _getOAuthClient(e8) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients/${e8}`, { headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _updateOAuthClient(e8, t2) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/oauth/clients/${e8}`, { body: t2, headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _deleteOAuthClient(e8) {
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/oauth/clients/${e8}`, { headers: this.headers, noResolveJson: true }), { data: null, error: null };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _regenerateOAuthClientSecret(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients/${e8}/regenerate_secret`, { headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _listCustomProviders(e8) {
    try {
      let t2 = {};
      return e8?.type && (t2.type = e8.type), await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers`, { headers: this.headers, query: t2, xform: (e9) => ({ data: { providers: e9?.providers ?? [] }, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: { providers: [] }, error: e9 };
      throw e9;
    }
  }
  async _createCustomProvider(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/custom-providers`, { body: e8, headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _getCustomProvider(e8) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers/${e8}`, { headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _updateCustomProvider(e8, t2) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/custom-providers/${e8}`, { body: t2, headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _deleteCustomProvider(e8) {
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/custom-providers/${e8}`, { headers: this.headers, noResolveJson: true }), { data: null, error: null };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _adminListPasskeys(e8) {
    q(e8.userId);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8.userId}/passkeys`, { headers: this.headers, xform: (e9) => ({ data: e9, error: null }) });
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
  async _adminDeletePasskey(e8) {
    q(e8.userId), q(e8.passkeyId);
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8.userId}/passkeys/${e8.passkeyId}`, { headers: this.headers, noResolveJson: true }), { data: null, error: null };
    } catch (e9) {
      if (P(e9)) return { data: null, error: e9 };
      throw e9;
    }
  }
};
function Yr(e8 = {}) {
  return { getItem: (t2) => e8[t2] || null, setItem: (t2, n2) => {
    e8[t2] = n2;
  }, removeItem: (t2) => {
    delete e8[t2];
  } };
}
globalThis && or() && globalThis.localStorage && globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
var Xr = class extends Error {
  constructor(e8) {
    super(e8), this.isAcquireTimeout = true;
  }
};
function Zr() {
  if (typeof globalThis != `object`) try {
    Object.defineProperty(Object.prototype, "__magic__", { get: function() {
      return this;
    }, configurable: true }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
  } catch {
    typeof self < `u` && (self.globalThis = self);
  }
}
function Qr(e8) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e8)) throw Error(`@supabase/auth-js: Address "${e8}" is invalid.`);
  return e8.toLowerCase();
}
function $r(e8) {
  return parseInt(e8, 16);
}
function ei(e8) {
  let t2 = new TextEncoder().encode(e8);
  return `0x` + Array.from(t2, (e9) => e9.toString(16).padStart(2, `0`)).join(``);
}
function ti(e8) {
  let { chainId: t2, domain: n2, expirationTime: r2, issuedAt: i2 = /* @__PURE__ */ new Date(), nonce: a2, notBefore: o2, requestId: s2, resources: c2, scheme: l2, uri: u2, version: d2 } = e8;
  if (!Number.isInteger(t2)) throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t2}`);
  if (!n2) throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
  if (a2 && a2.length < 8) throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a2}`);
  if (!u2) throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
  if (d2 !== `1`) throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d2}`);
  if (e8.statement?.includes(`
`)) throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e8.statement}`);
  let f2 = Qr(e8.address), p2 = `${l2 ? `${l2}://${n2}` : n2} wants you to sign in with your Ethereum account:
${f2}

${e8.statement ? `${e8.statement}
` : ``}`, m2 = `URI: ${u2}
Version: ${d2}
Chain ID: ${t2}${a2 ? `
Nonce: ${a2}` : ``}
Issued At: ${i2.toISOString()}`;
  if (r2 && (m2 += `
Expiration Time: ${r2.toISOString()}`), o2 && (m2 += `
Not Before: ${o2.toISOString()}`), s2 && (m2 += `
Request ID: ${s2}`), c2) {
    let e9 = `
Resources:`;
    for (let t3 of c2) {
      if (!t3 || typeof t3 != `string`) throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t3}`);
      e9 += `
- ${t3}`;
    }
    m2 += e9;
  }
  return `${p2}
${m2}`;
}
var Q = class extends Error {
  constructor({ message: e8, code: t2, cause: n2, name: r2 }) {
    super(e8, { cause: n2 }), this.__isWebAuthnError = true, this.name = r2 ?? (n2 instanceof Error ? n2.name : void 0) ?? `Unknown Error`, this.code = t2;
  }
  toJSON() {
    return { name: this.name, message: this.message, code: this.code };
  }
};
var ni = class extends Q {
  constructor(e8, t2) {
    super({ code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`, cause: t2, message: e8 }), this.name = `WebAuthnUnknownError`, this.originalError = t2;
  }
};
function ri({ error: e8, options: t2 }) {
  let { publicKey: n2 } = t2;
  if (!n2) throw Error(`options was missing required publicKey property`);
  if (e8.name === `AbortError`) {
    if (t2.signal instanceof AbortSignal) return new Q({ message: `Registration ceremony was sent an abort signal`, code: `ERROR_CEREMONY_ABORTED`, cause: e8 });
  } else if (e8.name === `ConstraintError`) {
    if (n2.authenticatorSelection?.requireResidentKey === true) return new Q({ message: `Discoverable credentials were required but no available authenticator supported it`, code: `ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`, cause: e8 });
    if (t2.mediation === `conditional` && n2.authenticatorSelection?.userVerification === `required`) return new Q({ message: `User verification was required during automatic registration but it could not be performed`, code: `ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`, cause: e8 });
    if (n2.authenticatorSelection?.userVerification === `required`) return new Q({ message: `User verification was required but no available authenticator supported it`, code: `ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`, cause: e8 });
  } else if (e8.name === `InvalidStateError`) return new Q({ message: `The authenticator was previously registered`, code: `ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`, cause: e8 });
  else if (e8.name === `NotAllowedError`) return new Q({ message: e8.message, code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`, cause: e8 });
  else if (e8.name === `NotSupportedError`) return n2.pubKeyCredParams.filter((e9) => e9.type === `public-key`).length === 0 ? new Q({ message: `No entry in pubKeyCredParams was of type "public-key"`, code: `ERROR_MALFORMED_PUBKEYCREDPARAMS`, cause: e8 }) : new Q({ message: `No available authenticator supported any of the specified pubKeyCredParams algorithms`, code: `ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`, cause: e8 });
  else if (e8.name === `SecurityError`) {
    let t3 = window.location.hostname;
    if (!ui(t3)) return new Q({ message: `${window.location.hostname} is an invalid domain`, code: `ERROR_INVALID_DOMAIN`, cause: e8 });
    if (n2.rp.id !== t3) return new Q({ message: `The RP ID "${n2.rp.id}" is invalid for this domain`, code: `ERROR_INVALID_RP_ID`, cause: e8 });
  } else if (e8.name === `TypeError`) {
    if (n2.user.id.byteLength < 1 || n2.user.id.byteLength > 64) return new Q({ message: `User ID was not between 1 and 64 characters`, code: `ERROR_INVALID_USER_ID_LENGTH`, cause: e8 });
  } else if (e8.name === `UnknownError`) return new Q({ message: `The authenticator was unable to process the specified options, or could not create a new credential`, code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`, cause: e8 });
  return new Q({ message: `a Non-Webauthn related error has occurred`, code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`, cause: e8 });
}
function ii({ error: e8, options: t2 }) {
  let { publicKey: n2 } = t2;
  if (!n2) throw Error(`options was missing required publicKey property`);
  if (e8.name === `AbortError`) {
    if (t2.signal instanceof AbortSignal) return new Q({ message: `Authentication ceremony was sent an abort signal`, code: `ERROR_CEREMONY_ABORTED`, cause: e8 });
  } else if (e8.name === `NotAllowedError`) return new Q({ message: e8.message, code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`, cause: e8 });
  else if (e8.name === `SecurityError`) {
    let t3 = window.location.hostname;
    if (!ui(t3)) return new Q({ message: `${window.location.hostname} is an invalid domain`, code: `ERROR_INVALID_DOMAIN`, cause: e8 });
    if (n2.rpId !== t3) return new Q({ message: `The RP ID "${n2.rpId}" is invalid for this domain`, code: `ERROR_INVALID_RP_ID`, cause: e8 });
  } else if (e8.name === `UnknownError`) return new Q({ message: `The authenticator was unable to process the specified options, or could not create a new assertion signature`, code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`, cause: e8 });
  return new Q({ message: `a Non-Webauthn related error has occurred`, code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`, cause: e8 });
}
var ai = new class {
  createNewAbortSignal() {
    if (this.controller) {
      let e9 = Error(`Cancelling existing WebAuthn API call for new one`);
      e9.name = `AbortError`, this.controller.abort(e9);
    }
    let e8 = new AbortController();
    return this.controller = e8, e8.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      let e8 = Error(`Manually cancelling existing WebAuthn API call`);
      e8.name = `AbortError`, this.controller.abort(e8), this.controller = void 0;
    }
  }
}();
function oi(e8) {
  if (!e8) throw Error(`Credential creation options are required`);
  if (typeof PublicKeyCredential < `u` && `parseCreationOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`) return PublicKeyCredential.parseCreationOptionsFromJSON(e8);
  let { challenge: t2, user: r2, excludeCredentials: i2 } = e8, a2 = n(e8, [`challenge`, `user`, `excludeCredentials`]), o2 = z(t2).buffer, s2 = Object.assign(Object.assign({}, r2), { id: z(r2.id).buffer }), c2 = Object.assign(Object.assign({}, a2), { challenge: o2, user: s2 });
  if (i2 && i2.length > 0) {
    c2.excludeCredentials = Array(i2.length);
    for (let e9 = 0; e9 < i2.length; e9++) {
      let t3 = i2[e9];
      c2.excludeCredentials[e9] = Object.assign(Object.assign({}, t3), { id: z(t3.id).buffer, type: t3.type || `public-key`, transports: t3.transports });
    }
  }
  return c2;
}
function si(e8) {
  if (!e8) throw Error(`Credential request options are required`);
  if (typeof PublicKeyCredential < `u` && `parseRequestOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`) return PublicKeyCredential.parseRequestOptionsFromJSON(e8);
  let { challenge: t2, allowCredentials: r2 } = e8, i2 = n(e8, [`challenge`, `allowCredentials`]), a2 = z(t2).buffer, o2 = Object.assign(Object.assign({}, i2), { challenge: a2 });
  if (r2 && r2.length > 0) {
    o2.allowCredentials = Array(r2.length);
    for (let e9 = 0; e9 < r2.length; e9++) {
      let t3 = r2[e9];
      o2.allowCredentials[e9] = Object.assign(Object.assign({}, t3), { id: z(t3.id).buffer, type: t3.type || `public-key`, transports: t3.transports });
    }
  }
  return o2;
}
function ci(e8) {
  if (`toJSON` in e8 && typeof e8.toJSON == `function`) return e8.toJSON();
  let t2 = e8;
  return { id: e8.id, rawId: e8.id, response: { attestationObject: B(new Uint8Array(e8.response.attestationObject)), clientDataJSON: B(new Uint8Array(e8.response.clientDataJSON)) }, type: `public-key`, clientExtensionResults: e8.getClientExtensionResults(), authenticatorAttachment: t2.authenticatorAttachment ?? void 0 };
}
function li(e8) {
  if (`toJSON` in e8 && typeof e8.toJSON == `function`) return e8.toJSON();
  let t2 = e8, n2 = e8.getClientExtensionResults(), r2 = e8.response;
  return { id: e8.id, rawId: e8.id, response: { authenticatorData: B(new Uint8Array(r2.authenticatorData)), clientDataJSON: B(new Uint8Array(r2.clientDataJSON)), signature: B(new Uint8Array(r2.signature)), userHandle: r2.userHandle ? B(new Uint8Array(r2.userHandle)) : void 0 }, type: `public-key`, clientExtensionResults: n2, authenticatorAttachment: t2.authenticatorAttachment ?? void 0 };
}
function ui(e8) {
  return e8 === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e8);
}
function di() {
  return !!(V() && `PublicKeyCredential` in window && window.PublicKeyCredential && `credentials` in navigator && typeof (navigator == null ? void 0 : navigator.credentials)?.create == `function` && typeof (navigator == null ? void 0 : navigator.credentials)?.get == `function`);
}
async function fi(e8) {
  try {
    let t2 = await navigator.credentials.create(e8);
    return t2 ? t2 instanceof PublicKeyCredential ? { data: t2, error: null } : { data: null, error: new ni(`Browser returned unexpected credential type`, t2) } : { data: null, error: new ni(`Empty credential response`, t2) };
  } catch (t2) {
    return { data: null, error: ri({ error: t2, options: e8 }) };
  }
}
async function pi(e8) {
  try {
    let t2 = await navigator.credentials.get(e8);
    return t2 ? t2 instanceof PublicKeyCredential ? { data: t2, error: null } : { data: null, error: new ni(`Browser returned unexpected credential type`, t2) } : { data: null, error: new ni(`Empty credential response`, t2) };
  } catch (t2) {
    return { data: null, error: ii({ error: t2, options: e8 }) };
  }
}
var mi = { hints: [`security-key`], authenticatorSelection: { authenticatorAttachment: `cross-platform`, requireResidentKey: false, userVerification: `preferred`, residentKey: `discouraged` }, attestation: `direct` };
var hi = { userVerification: `preferred`, hints: [`security-key`], attestation: `direct` };
function gi(...e8) {
  let t2 = (e9) => typeof e9 == `object` && !!e9 && !Array.isArray(e9), n2 = (e9) => e9 instanceof ArrayBuffer || ArrayBuffer.isView(e9), r2 = {};
  for (let i2 of e8) if (i2) for (let e9 in i2) {
    let a2 = i2[e9];
    if (a2 !== void 0) {
      if (Array.isArray(a2)) r2[e9] = a2;
      else if (n2(a2)) r2[e9] = a2;
      else if (t2(a2)) {
        let n3 = r2[e9];
        r2[e9] = t2(n3) ? gi(n3, a2) : gi(a2);
      } else r2[e9] = a2;
    }
  }
  return r2;
}
function _i(e8, t2) {
  return gi(mi, e8, t2 || {});
}
function vi(e8, t2) {
  return gi(hi, e8, t2 || {});
}
var yi = class {
  constructor(e8) {
    this.client = e8, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  async _enroll(e8) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e8), { factorType: `webauthn` }));
  }
  async _challenge({ factorId: e8, webauthn: t2, friendlyName: n2, signal: r2 }, i2) {
    try {
      let { data: a2, error: o2 } = await this.client.mfa.challenge({ factorId: e8, webauthn: t2 });
      if (!a2) return { data: null, error: o2 };
      let s2 = r2 ?? ai.createNewAbortSignal();
      if (a2.webauthn.type === `create`) {
        let { user: e9 } = a2.webauthn.credential_options.publicKey;
        if (!e9.name) {
          let t3 = n2;
          if (t3) e9.name = `${e9.id}:${t3}`;
          else {
            let t4 = (await this.client.getUser()).data.user, n3 = t4?.user_metadata?.name || t4?.email || t4?.id || `User`;
            e9.name = `${e9.id}:${n3}`;
          }
        }
        e9.displayName ||= e9.name;
      }
      switch (a2.webauthn.type) {
        case `create`: {
          let { data: t3, error: n3 } = await fi({ publicKey: _i(a2.webauthn.credential_options.publicKey, i2?.create), signal: s2 });
          return t3 ? { data: { factorId: e8, challengeId: a2.id, webauthn: { type: a2.webauthn.type, credential_response: t3 } }, error: null } : { data: null, error: n3 };
        }
        case `request`: {
          let t3 = vi(a2.webauthn.credential_options.publicKey, i2?.request), { data: n3, error: r3 } = await pi(Object.assign(Object.assign({}, a2.webauthn.credential_options), { publicKey: t3, signal: s2 }));
          return n3 ? { data: { factorId: e8, challengeId: a2.id, webauthn: { type: a2.webauthn.type, credential_response: n3 } }, error: null } : { data: null, error: r3 };
        }
      }
    } catch (e9) {
      return P(e9) ? { data: null, error: e9 } : { data: null, error: new F(`Unexpected error in challenge`, e9) };
    }
  }
  async _verify({ challengeId: e8, factorId: t2, webauthn: n2 }) {
    return this.client.mfa.verify({ factorId: t2, challengeId: e8, webauthn: n2 });
  }
  async _authenticate({ factorId: e8, webauthn: { rpId: t2 = typeof window < `u` ? window.location.hostname : void 0, rpOrigins: n2 = typeof window < `u` ? [window.location.origin] : void 0, signal: r2 } = {} }, i2) {
    if (!t2) return { data: null, error: new Nn(`rpId is required for WebAuthn authentication`) };
    try {
      if (!di()) return { data: null, error: new F(`Browser does not support WebAuthn`, null) };
      let { data: a2, error: o2 } = await this.challenge({ factorId: e8, webauthn: { rpId: t2, rpOrigins: n2 }, signal: r2 }, { request: i2 });
      if (!a2) return { data: null, error: o2 };
      let { webauthn: s2 } = a2;
      return this._verify({ factorId: e8, challengeId: a2.challengeId, webauthn: { type: s2.type, rpId: t2, rpOrigins: n2, credential_response: s2.credential_response } });
    } catch (e9) {
      return P(e9) ? { data: null, error: e9 } : { data: null, error: new F(`Unexpected error in authenticate`, e9) };
    }
  }
  async _register({ friendlyName: e8, webauthn: { rpId: t2 = typeof window < `u` ? window.location.hostname : void 0, rpOrigins: n2 = typeof window < `u` ? [window.location.origin] : void 0, signal: r2 } = {} }, i2) {
    if (!t2) return { data: null, error: new Nn(`rpId is required for WebAuthn registration`) };
    try {
      if (!di()) return { data: null, error: new F(`Browser does not support WebAuthn`, null) };
      let { data: a2, error: o2 } = await this._enroll({ friendlyName: e8 });
      if (!a2) return await this.client.mfa.listFactors().then((t3) => t3.data?.all.find((t4) => t4.factor_type === `webauthn` && t4.friendly_name === e8 && t4.status === `unverified`)).then((e9) => e9 ? this.client.mfa.unenroll({ factorId: e9?.id }) : void 0), { data: null, error: o2 };
      let { data: s2, error: c2 } = await this._challenge({ factorId: a2.id, friendlyName: a2.friendly_name, webauthn: { rpId: t2, rpOrigins: n2 }, signal: r2 }, { create: i2 });
      return s2 ? this._verify({ factorId: a2.id, challengeId: s2.challengeId, webauthn: { rpId: t2, rpOrigins: n2, type: s2.webauthn.type, credential_response: s2.webauthn.credential_response } }) : { data: null, error: c2 };
    } catch (e9) {
      return P(e9) ? { data: null, error: e9 } : { data: null, error: new F(`Unexpected error in register`, e9) };
    }
  }
};
Zr();
var bi = { url: En, storageKey: Dn, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, headers: On, flowType: `implicit`, debug: false, hasCustomAuthorizationHeader: false, throwOnError: false, lockAcquireTimeout: 5e3, skipAutoInitialize: false, experimental: {} };
var xi = {};
var Si = false;
var Ci = class e7 {
  get jwks() {
    return xi[this.storageKey]?.jwks ?? { keys: [] };
  }
  set jwks(e8) {
    xi[this.storageKey] = Object.assign(Object.assign({}, xi[this.storageKey]), { jwks: e8 });
  }
  get jwks_cached_at() {
    return xi[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
  }
  set jwks_cached_at(e8) {
    xi[this.storageKey] = Object.assign(Object.assign({}, xi[this.storageKey]), { cachedAt: e8 });
  }
  constructor(t2) {
    var n2;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.lastRefreshFailure = null, this._sessionRemovalEpoch = 0, this.initializePromise = null, this._pendingInitNotifications = null, this.detectSessionInUrl = true, this.hasCustomAuthorizationHeader = false, this.suppressGetSessionWarning = false, this.lock = null, this.lockAcquired = false, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    let r2 = Object.assign(Object.assign({}, bi), t2);
    if (this.storageKey = r2.storageKey, this.instanceID = e7.nextInstanceID[this.storageKey] ?? 0, e7.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!r2.debug, typeof r2.debug == `function` && (this.logger = r2.debug), this.instanceID > 0 && V()) {
      let e8 = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(e8), this.logDebugMessages && console.trace(e8);
    }
    if (this.persistSession = r2.persistSession, this.autoRefreshToken = r2.autoRefreshToken, this.experimental = r2.experimental ?? {}, this.admin = new Jr({ url: r2.url, headers: r2.headers, fetch: r2.fetch, experimental: this.experimental }), this.url = r2.url, this.headers = r2.headers, this.fetch = cr(r2.fetch), this.detectSessionInUrl = r2.detectSessionInUrl, this.flowType = r2.flowType, this.hasCustomAuthorizationHeader = r2.hasCustomAuthorizationHeader, this.throwOnError = r2.throwOnError, this.lockAcquireTimeout = r2.lockAcquireTimeout, r2.lock != null && (this.lock = r2.lock, Si || (Si = true, console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))), this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = -(2 ** 53 - 1)), this.mfa = { verify: this._verify.bind(this), enroll: this._enroll.bind(this), unenroll: this._unenroll.bind(this), challenge: this._challenge.bind(this), listFactors: this._listFactors.bind(this), challengeAndVerify: this._challengeAndVerify.bind(this), getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this), webauthn: new yi(this), recoveryCodes: { getStatus: this._getRecoveryCodesStatus.bind(this), generate: this._generateRecoveryCodes.bind(this), verify: this._verifyRecoveryCode.bind(this), regenerate: this._regenerateRecoveryCodes.bind(this), unenroll: this._unenrollRecoveryCodes.bind(this) } }, this.oauth = { getAuthorizationDetails: this._getAuthorizationDetails.bind(this), approveAuthorization: this._approveAuthorization.bind(this), denyAuthorization: this._denyAuthorization.bind(this), listGrants: this._listOAuthGrants.bind(this), revokeGrant: this._revokeOAuthGrant.bind(this) }, this.passkey = { startRegistration: this._startPasskeyRegistration.bind(this), verifyRegistration: this._verifyPasskeyRegistration.bind(this), startAuthentication: this._startPasskeyAuthentication.bind(this), verifyAuthentication: this._verifyPasskeyAuthentication.bind(this), list: this._listPasskeys.bind(this), update: this._updatePasskey.bind(this), delete: this._deletePasskey.bind(this) }, this.persistSession ? (r2.storage ? this.storage = r2.storage : or() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Yr(this.memoryStorage)), r2.userStorage && (this.userStorage = r2.userStorage)) : (this.memoryStorage = {}, this.storage = Yr(this.memoryStorage)), V() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (e8) {
        console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`, e8);
      }
      (n2 = this.broadcastChannel) == null || n2.addEventListener(`message`, async (e8) => {
        this._debug(`received broadcast notification from other tab or client`, e8), (e8.data.event === `TOKEN_REFRESHED` || e8.data.event === `SIGNED_IN`) && (this.lastRefreshFailure = null);
        try {
          await this._notifyAllSubscribers(e8.data.event, e8.data.session, false);
        } catch (e9) {
          this._debug(`#broadcastChannel`, `error`, e9);
        }
      });
    }
    r2.skipAutoInitialize || this.initialize().catch((e8) => {
      this._debug(`#initialize()`, `error`, e8);
    });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e8) {
    if (this.throwOnError && e8 && e8.error) throw e8.error;
    return e8;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Cn}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e8) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e8), this;
  }
  async initialize() {
    if (this.initializePromise) return await this.initializePromise;
    this._pendingInitNotifications = [], this.initializePromise = (async () => this.lock == null ? await this._initialize() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()))();
    let e8 = await this.initializePromise, t2 = this._pendingInitNotifications ?? [];
    this._pendingInitNotifications = null;
    for (let e9 of t2) await this._notifyAllSubscribers(e9.event, e9.session, e9.broadcast);
    return e8;
  }
  async _initialize() {
    try {
      let e8 = {}, t2 = `none`;
      if (V() && (e8 = sr(window.location.href), this._isImplicitGrantCallback(e8) ? t2 = `implicit` : await this._isPKCECallback(e8) && (t2 = `pkce`)), V() && this.detectSessionInUrl && t2 !== `none`) {
        let { data: n2, error: r2 } = await this._getSessionFromURL(e8, t2);
        if (r2) {
          if (this._debug(`#_initialize()`, `error detecting session from URL`, r2), zn(r2)) {
            let e9 = r2.details?.code;
            if (e9 === `identity_already_exists` || e9 === `identity_not_found` || e9 === `single_identity_not_deletable`) return { error: r2 };
          }
          return { error: r2 };
        }
        let { session: i2, redirectType: a2 } = n2;
        return this._debug(`#_initialize()`, `detected session in URL`, i2, `redirect type`, a2), await this._saveSession(i2), setTimeout(async () => {
          a2 === `recovery` ? await this._notifyAllSubscribers(`PASSWORD_RECOVERY`, i2) : await this._notifyAllSubscribers(`SIGNED_IN`, i2);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (e8) {
      return P(e8) ? this._returnResult({ error: e8 }) : this._returnResult({ error: new F(`Unexpected error during initialization`, e8) });
    } finally {
      await this._handleVisibilityChange(), this._debug(`#_initialize()`, `end`);
    }
  }
  async signInAnonymously(e8) {
    try {
      let { data: t2, error: n2 } = await Y(this.fetch, `POST`, `${this.url}/signup`, { headers: this.headers, body: { data: e8?.options?.data ?? {}, gotrue_meta_security: { captcha_token: e8?.options?.captchaToken } }, xform: X });
      if (n2 || !t2) return this._returnResult({ data: { user: null, session: null }, error: n2 });
      let r2 = t2.session, i2 = t2.user;
      return t2.session && (await this._saveSession(t2.session), await this._notifyAllSubscribers(`SIGNED_IN`, r2)), this._returnResult({ data: { user: i2, session: r2 }, error: null });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signUp(e8) {
    let t2 = null;
    try {
      let n2;
      if (`email` in e8) {
        let { email: r3, password: i3, options: a3 } = e8, o3 = null, s2 = null;
        this.flowType === `pkce` && ([o3, s2, t2] = await this._getCodeChallengeAndMethod()), n2 = await Y(this.fetch, `POST`, `${this.url}/signup`, { headers: this.headers, redirectTo: this._maybeAppendFlowIdToRedirect(a3?.emailRedirectTo, t2), body: { email: r3, password: i3, data: a3?.data ?? {}, gotrue_meta_security: { captcha_token: a3?.captchaToken }, code_challenge: o3, code_challenge_method: s2 }, xform: X });
      } else if (`phone` in e8) {
        let { phone: t3, password: r3, options: i3 } = e8;
        n2 = await Y(this.fetch, `POST`, `${this.url}/signup`, { headers: this.headers, body: { phone: t3, password: r3, data: i3?.data ?? {}, channel: i3?.channel ?? `sms`, gotrue_meta_security: { captcha_token: i3?.captchaToken } }, xform: X });
      } else throw new Ln(`You must provide either an email or phone number and a password`);
      let { data: r2, error: i2 } = n2;
      if (i2 || !r2) return await K(this.storage, this.storageKey, t2), this._returnResult({ data: { user: null, session: null }, error: i2 });
      let a2 = r2.session, o2 = r2.user;
      return r2.session && (await this._saveSession(r2.session), await this._notifyAllSubscribers(`SIGNED_IN`, a2)), this._returnResult({ data: { user: o2, session: a2 }, error: null });
    } catch (e9) {
      if (await K(this.storage, this.storageKey, t2), P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithPassword(e8) {
    try {
      let t2;
      if (`email` in e8) {
        let { email: n3, password: r3, options: i2 } = e8;
        t2 = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, { headers: this.headers, body: { email: n3, password: r3, gotrue_meta_security: { captcha_token: i2?.captchaToken } }, xform: Hr });
      } else if (`phone` in e8) {
        let { phone: n3, password: r3, options: i2 } = e8;
        t2 = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, { headers: this.headers, body: { phone: n3, password: r3, gotrue_meta_security: { captcha_token: i2?.captchaToken } }, xform: Hr });
      } else throw new Ln(`You must provide either an email or phone number and a password`);
      let { data: n2, error: r2 } = t2;
      if (r2) return this._returnResult({ data: { user: null, session: null }, error: r2 });
      if (!n2 || !n2.session || !n2.user) {
        let e9 = new R();
        return this._returnResult({ data: { user: null, session: null }, error: e9 });
      }
      return n2.session && (await this._saveSession(n2.session), await this._notifyAllSubscribers(`SIGNED_IN`, n2.session)), this._returnResult({ data: Object.assign({ user: n2.user, session: n2.session }, n2.weak_password ? { weakPassword: n2.weak_password } : null), error: r2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithOAuth(e8) {
    return await this._handleProviderSignIn(e8.provider, { redirectTo: e8.options?.redirectTo, scopes: e8.options?.scopes, queryParams: e8.options?.queryParams, skipBrowserRedirect: e8.options?.skipBrowserRedirect });
  }
  async exchangeCodeForSession(e8, t2) {
    return await this.initializePromise, this.lock == null ? this._exchangeCodeForSession(e8, t2) : this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e8, t2));
  }
  async signInWithWeb3(e8) {
    let { chain: t2 } = e8;
    switch (t2) {
      case `ethereum`:
        return await this.signInWithEthereum(e8);
      case `solana`:
        return await this.signInWithSolana(e8);
      default:
        throw Error(`@supabase/auth-js: Unsupported chain "${t2}"`);
    }
  }
  async signInWithEthereum(e8) {
    let t2, n2;
    if (`message` in e8) t2 = e8.message, n2 = e8.signature;
    else {
      let { chain: r2, wallet: i2, statement: a2, options: o2 } = e8, s2;
      if (!V()) {
        if (typeof i2 != `object` || !o2?.url) throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        s2 = i2;
      } else if (typeof i2 == `object`) s2 = i2;
      else {
        let e9 = window;
        if (`ethereum` in e9 && typeof e9.ethereum == `object` && `request` in e9.ethereum && typeof e9.ethereum.request == `function`) s2 = e9.ethereum;
        else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
      }
      let c2 = new URL(o2?.url ?? window.location.href), l2 = await s2.request({ method: `eth_requestAccounts` }).then((e9) => e9).catch(() => {
        throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
      });
      if (!l2 || l2.length === 0) throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
      let u2 = Qr(l2[0]), d2 = o2?.signInWithEthereum?.chainId;
      d2 ||= $r(await s2.request({ method: `eth_chainId` })), t2 = ti({ domain: c2.host, address: u2, statement: a2, uri: c2.href, version: `1`, chainId: d2, nonce: o2?.signInWithEthereum?.nonce, issuedAt: o2?.signInWithEthereum?.issuedAt ?? /* @__PURE__ */ new Date(), expirationTime: o2?.signInWithEthereum?.expirationTime, notBefore: o2?.signInWithEthereum?.notBefore, requestId: o2?.signInWithEthereum?.requestId, resources: o2?.signInWithEthereum?.resources }), n2 = await s2.request({ method: `personal_sign`, params: [ei(t2), u2] });
    }
    try {
      let { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, { headers: this.headers, body: Object.assign({ chain: `ethereum`, message: t2, signature: n2 }, e8.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e8.options?.captchaToken } } : null), xform: X });
      if (i2) throw i2;
      if (!r2 || !r2.session || !r2.user) {
        let e9 = new R();
        return this._returnResult({ data: { user: null, session: null }, error: e9 });
      }
      return r2.session && (await this._saveSession(r2.session), await this._notifyAllSubscribers(`SIGNED_IN`, r2.session)), this._returnResult({ data: Object.assign({}, r2), error: i2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithSolana(e8) {
    let t2, n2;
    if (`message` in e8) t2 = e8.message, n2 = e8.signature;
    else {
      let { chain: r2, wallet: i2, statement: a2, options: o2 } = e8, s2;
      if (!V()) {
        if (typeof i2 != `object` || !o2?.url) throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        s2 = i2;
      } else if (typeof i2 == `object`) s2 = i2;
      else {
        let e9 = window;
        if (`solana` in e9 && typeof e9.solana == `object` && (`signIn` in e9.solana && typeof e9.solana.signIn == `function` || `signMessage` in e9.solana && typeof e9.solana.signMessage == `function`)) s2 = e9.solana;
        else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
      }
      let c2 = new URL(o2?.url ?? window.location.href);
      if (`signIn` in s2 && s2.signIn) {
        let e9 = await s2.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, o2?.signInWithSolana), { version: `1`, domain: c2.host, uri: c2.href }), a2 ? { statement: a2 } : null)), r3;
        if (Array.isArray(e9) && e9[0] && typeof e9[0] == `object`) r3 = e9[0];
        else if (e9 && typeof e9 == `object` && `signedMessage` in e9 && `signature` in e9) r3 = e9;
        else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);
        if (`signedMessage` in r3 && `signature` in r3 && (typeof r3.signedMessage == `string` || r3.signedMessage instanceof Uint8Array) && r3.signature instanceof Uint8Array) t2 = typeof r3.signedMessage == `string` ? r3.signedMessage : new TextDecoder().decode(r3.signedMessage), n2 = r3.signature;
        else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`);
      } else {
        if (!(`signMessage` in s2) || typeof s2.signMessage != `function` || !(`publicKey` in s2) || typeof s2 != `object` || !s2.publicKey || !(`toBase58` in s2.publicKey) || typeof s2.publicKey.toBase58 != `function`) throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);
        t2 = [`${c2.host} wants you to sign in with your Solana account:`, s2.publicKey.toBase58(), ...a2 ? [``, a2, ``] : [``], `Version: 1`, `URI: ${c2.href}`, `Issued At: ${o2?.signInWithSolana?.issuedAt ?? (/* @__PURE__ */ new Date()).toISOString()}`, ...o2?.signInWithSolana?.notBefore ? [`Not Before: ${o2.signInWithSolana.notBefore}`] : [], ...o2?.signInWithSolana?.expirationTime ? [`Expiration Time: ${o2.signInWithSolana.expirationTime}`] : [], ...o2?.signInWithSolana?.chainId ? [`Chain ID: ${o2.signInWithSolana.chainId}`] : [], ...o2?.signInWithSolana?.nonce ? [`Nonce: ${o2.signInWithSolana.nonce}`] : [], ...o2?.signInWithSolana?.requestId ? [`Request ID: ${o2.signInWithSolana.requestId}`] : [], ...o2?.signInWithSolana?.resources?.length ? [`Resources`, ...o2.signInWithSolana.resources.map((e10) => `- ${e10}`)] : []].join(`
`);
        let e9 = await s2.signMessage(new TextEncoder().encode(t2), `utf8`);
        if (!e9 || !(e9 instanceof Uint8Array)) throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);
        n2 = e9;
      }
    }
    try {
      let { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, { headers: this.headers, body: Object.assign({ chain: `solana`, message: t2, signature: B(n2) }, e8.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e8.options?.captchaToken } } : null), xform: X });
      if (i2) throw i2;
      if (!r2 || !r2.session || !r2.user) {
        let e9 = new R();
        return this._returnResult({ data: { user: null, session: null }, error: e9 });
      }
      return r2.session && (await this._saveSession(r2.session), await this._notifyAllSubscribers(`SIGNED_IN`, r2.session)), this._returnResult({ data: Object.assign({}, r2), error: i2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async _exchangeCodeForSession(e8, t2) {
    let n2 = t2?.flowId != null, r2 = n2 ? yr(t2?.flowId) : V() ? yr(sr(window.location.href)[Mn]) : null;
    n2 && !r2 && this._debug(`#_exchangeCodeForSession()`, `provided flowId is not a valid flow id`, t2?.flowId);
    let { verifier: i2, flowId: a2 } = n2 && !r2 ? { verifier: null, flowId: null } : await Tr(this.storage, this.storageKey, r2), [o2, s2] = (i2 ?? ``).split(`/`);
    try {
      if (!o2 && this.flowType === `pkce`) throw new Vn();
      let { data: t3, error: n3 } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=pkce`, { headers: this.headers, body: { auth_code: e8, code_verifier: o2 }, xform: X });
      if (await K(this.storage, this.storageKey, a2), n3) throw n3;
      if (!t3 || !t3.session || !t3.user) {
        let e9 = new R();
        return this._returnResult({ data: { user: null, session: null, redirectType: null }, error: e9 });
      }
      return t3.session && (await this._saveSession(t3.session), await this._notifyAllSubscribers(s2 === `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, t3.session)), this._returnResult({ data: Object.assign(Object.assign({}, t3), { redirectType: s2 ?? null }), error: n3 });
    } catch (e9) {
      if (await K(this.storage, this.storageKey, a2), P(e9)) return this._returnResult({ data: { user: null, session: null, redirectType: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithIdToken(e8) {
    try {
      let { options: t2, provider: n2, token: r2, access_token: i2, nonce: a2 } = e8, { data: o2, error: s2 } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, { headers: this.headers, body: { provider: n2, id_token: r2, access_token: i2, nonce: a2, gotrue_meta_security: { captcha_token: t2?.captchaToken } }, xform: X });
      if (s2) return this._returnResult({ data: { user: null, session: null }, error: s2 });
      if (!o2 || !o2.session || !o2.user) {
        let e9 = new R();
        return this._returnResult({ data: { user: null, session: null }, error: e9 });
      }
      return o2.session && (await this._saveSession(o2.session), await this._notifyAllSubscribers(`SIGNED_IN`, o2.session)), this._returnResult({ data: o2, error: s2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithOtp(e8) {
    let t2 = null;
    try {
      if (`email` in e8) {
        let { email: n2, options: r2 } = e8, i2 = null, a2 = null;
        this.flowType === `pkce` && ([i2, a2, t2] = await this._getCodeChallengeAndMethod());
        let { error: o2 } = await Y(this.fetch, `POST`, `${this.url}/otp`, { headers: this.headers, body: { email: n2, data: r2?.data ?? {}, create_user: r2?.shouldCreateUser ?? true, gotrue_meta_security: { captcha_token: r2?.captchaToken }, code_challenge: i2, code_challenge_method: a2 }, redirectTo: this._maybeAppendFlowIdToRedirect(r2?.emailRedirectTo, t2) });
        return this._returnResult({ data: { user: null, session: null }, error: o2 });
      }
      if (`phone` in e8) {
        let { phone: t3, options: n2 } = e8, { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/otp`, { headers: this.headers, body: { phone: t3, data: n2?.data ?? {}, create_user: n2?.shouldCreateUser ?? true, gotrue_meta_security: { captcha_token: n2?.captchaToken }, channel: n2?.channel ?? `sms` } });
        return this._returnResult({ data: { user: null, session: null, messageId: r2?.message_id }, error: i2 });
      }
      throw new Ln(`You must provide either an email or phone number.`);
    } catch (e9) {
      if (await K(this.storage, this.storageKey, t2), P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async verifyOtp(e8) {
    try {
      let t2, n2;
      `options` in e8 && (t2 = e8.options?.redirectTo, n2 = e8.options?.captchaToken);
      let { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/verify`, { headers: this.headers, body: Object.assign(Object.assign({}, e8), { gotrue_meta_security: { captcha_token: n2 } }), redirectTo: t2, xform: X });
      if (i2) throw i2;
      if (!r2) throw Error(`An error occurred on token verification.`);
      let a2 = r2.session, o2 = r2.user;
      return a2?.access_token && (await this._saveSession(a2), await this._notifyAllSubscribers(e8.type == `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, a2)), this._returnResult({ data: { user: o2, session: a2 }, error: null });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async signInWithSSO(e8) {
    let t2 = null;
    try {
      let n2 = null, r2 = null;
      this.flowType === `pkce` && ([n2, r2, t2] = await this._getCodeChallengeAndMethod());
      let i2 = await Y(this.fetch, `POST`, `${this.url}/sso`, { body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, `providerId` in e8 ? { provider_id: e8.providerId } : null), `domain` in e8 ? { domain: e8.domain } : null), { redirect_to: this._maybeAppendFlowIdToRedirect(e8.options?.redirectTo, t2) }), e8?.options?.captchaToken ? { gotrue_meta_security: { captcha_token: e8.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: n2, code_challenge_method: r2 }), headers: this.headers, xform: Ur });
      return i2.data?.url && V() && !e8.options?.skipBrowserRedirect && window.location.assign(i2.data.url), this._returnResult(i2);
    } catch (e9) {
      if (await K(this.storage, this.storageKey, t2), P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async reauthenticate() {
    return await this.initializePromise, this.lock == null ? await this._reauthenticate() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e8) => {
        let { data: { session: t2 }, error: n2 } = e8;
        if (n2) throw n2;
        if (!t2) throw new L();
        let { error: r2 } = await Y(this.fetch, `GET`, `${this.url}/reauthenticate`, { headers: this.headers, jwt: t2.access_token });
        return this._returnResult({ data: { user: null, session: null }, error: r2 });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: { user: null, session: null }, error: e8 });
      throw e8;
    }
  }
  async resend(e8) {
    let t2 = null;
    try {
      let n2 = `${this.url}/resend`;
      if (`email` in e8) {
        let { email: r2, type: i2, options: a2 } = e8, o2 = null, s2 = null;
        this.flowType === `pkce` && ([o2, s2, t2] = await this._getCodeChallengeAndMethod());
        let { error: c2 } = await Y(this.fetch, `POST`, n2, { headers: this.headers, body: { email: r2, type: i2, gotrue_meta_security: { captcha_token: a2?.captchaToken }, code_challenge: o2, code_challenge_method: s2 }, redirectTo: this._maybeAppendFlowIdToRedirect(a2?.emailRedirectTo, t2) });
        return c2 && await K(this.storage, this.storageKey, t2), this._returnResult({ data: { user: null, session: null }, error: c2 });
      }
      if (`phone` in e8) {
        let { phone: t3, type: r2, options: i2 } = e8, { data: a2, error: o2 } = await Y(this.fetch, `POST`, n2, { headers: this.headers, body: { phone: t3, type: r2, gotrue_meta_security: { captcha_token: i2?.captchaToken } } });
        return this._returnResult({ data: { user: null, session: null, messageId: a2?.message_id }, error: o2 });
      }
      throw new Ln(`You must provide either an email or phone number and a type`);
    } catch (e9) {
      if (await K(this.storage, this.storageKey, t2), P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async getSession() {
    return await this.initializePromise, this.lock == null ? await this._useSession(async (e8) => e8) : await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (e8) => e8));
  }
  async _acquireLock(e8, t2) {
    this._debug(`#_acquireLock`, `begin`, e8);
    try {
      if (this.lockAcquired) {
        let e9 = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n2 = (async () => (await e9, await t2()))();
        return this.pendingInLock.push((async () => {
          try {
            await n2;
          } catch {
          }
        })()), n2;
      }
      return await this.lock(`lock:${this.storageKey}`, e8, async () => {
        this._debug(`#_acquireLock`, `lock acquired for storage key`, this.storageKey);
        try {
          this.lockAcquired = true;
          let e9 = t2();
          for (this.pendingInLock.push((async () => {
            try {
              await e9;
            } catch {
            }
          })()), await e9; this.pendingInLock.length; ) {
            let e10 = [...this.pendingInLock];
            await Promise.all(e10), this.pendingInLock.splice(0, e10.length);
          }
          return await e9;
        } finally {
          this._debug(`#_acquireLock`, `lock released for storage key`, this.storageKey), this.lockAcquired = false;
        }
      });
    } finally {
      this._debug(`#_acquireLock`, `end`);
    }
  }
  async _useSession(e8) {
    this._debug(`#_useSession`, `begin`);
    try {
      return await e8(await this.__loadSession());
    } finally {
      this._debug(`#_useSession`, `end`);
    }
  }
  async __loadSession() {
    this._debug(`#__loadSession()`, `begin`), this.lock != null && !this.lockAcquired && this._debug(`#__loadSession()`, `used outside of an acquired lock!`, Error().stack);
    try {
      let e8 = null, t2 = await W(this.storage, this.storageKey);
      if (this._debug(`#getSession()`, `session from storage`, t2), t2 !== null && (this._isValidSession(t2) ? e8 = t2 : (this._debug(`#getSession()`, `session from storage is not valid`), await this._removeSession())), !e8) return { data: { session: null }, error: null };
      let n2 = e8.expires_at ? e8.expires_at * 1e3 - Date.now() < wn : false;
      if (this._debug(`#__loadSession()`, `session has${n2 ? `` : ` not`} expired`, `expires_at`, e8.expires_at), !n2) return { data: { session: await this._hydrateSessionUser(e8) }, error: null };
      let { data: r2, error: i2 } = await this._callRefreshToken(e8.refresh_token);
      if (i2) {
        let e9 = await W(this.storage, this.storageKey);
        return e9 && this._isValidSession(e9) && e9.expires_at && e9.expires_at * 1e3 > Date.now() ? this._returnResult({ data: { session: await this._hydrateSessionUser(e9) }, error: null }) : this._returnResult({ data: { session: null }, error: i2 });
      }
      return this._returnResult({ data: { session: r2 }, error: null });
    } finally {
      this._debug(`#__loadSession()`, `end`);
    }
  }
  async _hydrateSessionUser(e8) {
    if (this.userStorage) {
      let t2 = await W(this.userStorage, this.storageKey + `-user`);
      e8.user = t2?.user ? t2.user : Fr();
    }
    if (this.storage.isServer && e8.user && !e8.user.__isUserNotAvailableProxy) {
      let t2 = { value: this.suppressGetSessionWarning };
      e8.user = Ir(e8.user, t2), t2.value && (this.suppressGetSessionWarning = true);
    }
    return e8;
  }
  async getUser(e8) {
    if (e8) return await this._getUser(e8);
    await this.initializePromise;
    let t2;
    return t2 = this.lock == null ? await this._getUser() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser()), t2.data.user && (this.suppressGetSessionWarning = true), t2;
  }
  async _getUser(e8) {
    try {
      return e8 ? await Y(this.fetch, `GET`, `${this.url}/user`, { headers: this.headers, jwt: e8, xform: Z }) : await this._useSession(async (e9) => {
        let { data: t2, error: n2 } = e9;
        if (n2) throw n2;
        return !t2.session?.access_token && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new L() } : await Y(this.fetch, `GET`, `${this.url}/user`, { headers: this.headers, jwt: t2.session?.access_token ?? void 0, xform: Z });
      });
    } catch (e9) {
      if (P(e9)) return In(e9) && await this._removeSession(), this._returnResult({ data: { user: null }, error: e9 });
      throw e9;
    }
  }
  async updateUser(e8, t2 = {}) {
    return await this.initializePromise, this.lock == null ? await this._updateUser(e8, t2) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e8, t2));
  }
  async _updateUser(e8, t2 = {}) {
    let n2 = null;
    try {
      return await this._useSession(async (r2) => {
        let { data: i2, error: a2 } = r2;
        if (a2) throw a2;
        if (!i2.session) throw new L();
        let o2 = i2.session, s2 = null, c2 = null;
        this.flowType === `pkce` && e8.email != null && ([s2, c2, n2] = await this._getCodeChallengeAndMethod());
        let { data: l2, error: u2 } = await Y(this.fetch, `PUT`, `${this.url}/user`, { headers: this.headers, redirectTo: this._maybeAppendFlowIdToRedirect(t2?.emailRedirectTo, n2), body: Object.assign(Object.assign({}, e8), { code_challenge: s2, code_challenge_method: c2 }), jwt: o2.access_token, xform: Z });
        if (u2) throw u2;
        return o2.user = l2.user, await this._saveSession(o2), await this._notifyAllSubscribers(`USER_UPDATED`, o2), this._returnResult({ data: { user: o2.user }, error: null });
      });
    } catch (e9) {
      if (await K(this.storage, this.storageKey, n2), P(e9)) return this._returnResult({ data: { user: null }, error: e9 });
      throw e9;
    }
  }
  async setSession(e8) {
    return await this.initializePromise, this.lock == null ? await this._setSession(e8) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e8));
  }
  async _setSession(e8) {
    try {
      if (!e8.access_token || !e8.refresh_token) throw new L();
      let t2 = Date.now() / 1e3, n2 = t2, r2 = true, i2 = null, { payload: a2 } = dr(e8.access_token);
      if (a2.exp && (n2 = a2.exp, r2 = n2 <= t2), r2) {
        let { data: t3, error: n3 } = await this._callRefreshToken(e8.refresh_token);
        if (n3) return this._returnResult({ data: { user: null, session: null }, error: n3 });
        if (!t3) return { data: { user: null, session: null }, error: null };
        i2 = t3;
      } else {
        let { data: r3, error: a3 } = await this._getUser(e8.access_token);
        if (a3) return this._returnResult({ data: { user: null, session: null }, error: a3 });
        i2 = { access_token: e8.access_token, refresh_token: e8.refresh_token, user: r3.user, token_type: `bearer`, expires_in: n2 - t2, expires_at: n2 }, await this._saveSession(i2), await this._notifyAllSubscribers(`SIGNED_IN`, i2);
      }
      return this._returnResult({ data: { user: i2.user, session: i2 }, error: null });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { session: null, user: null }, error: e9 });
      throw e9;
    }
  }
  async refreshSession(e8) {
    return await this.initializePromise, this.lock == null ? await this._refreshSession(e8) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e8));
  }
  async _refreshSession(e8) {
    try {
      return await this._useSession(async (t2) => {
        if (!e8) {
          let { data: n3, error: r3 } = t2;
          if (r3) throw r3;
          e8 = n3.session ?? void 0;
        }
        if (!e8?.refresh_token) throw new L();
        let { data: n2, error: r2 } = await this._callRefreshToken(e8.refresh_token);
        return r2 ? this._returnResult({ data: { user: null, session: null }, error: r2 }) : n2 ? this._returnResult({ data: { user: n2.user, session: n2 }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
      throw e9;
    }
  }
  async _getSessionFromURL(e8, t2) {
    try {
      if (!V()) throw new Rn(`No browser detected.`);
      if (e8.error || e8.error_description || e8.error_code) throw new Rn(e8.error_description || `Error in URL with unspecified error_description`, { error: e8.error || `unspecified_error`, code: e8.error_code || `unspecified_code` });
      switch (t2) {
        case `implicit`:
          if (this.flowType === `pkce`) throw new Bn(`Not a valid PKCE flow url.`);
          break;
        case `pkce`:
          if (this.flowType === `implicit`) throw new Rn(`Not a valid implicit grant flow url.`);
      }
      if (t2 === `pkce`) {
        if (this._debug(`#_initialize()`, `begin`, `is PKCE flow`, true), !e8.code) throw new Bn(`No code detected.`);
        let { data: t3, error: n3 } = await this._exchangeCodeForSession(e8.code, { flowId: e8[Mn] });
        if (n3) throw n3;
        let r3 = new URL(window.location.href);
        return r3.searchParams.delete(`code`), r3.searchParams.delete(Mn), window.history.replaceState(window.history.state, ``, r3.toString()), { data: { session: t3.session, redirectType: t3.redirectType ?? null }, error: null };
      }
      let { provider_token: n2, provider_refresh_token: r2, access_token: i2, refresh_token: a2, expires_in: o2, expires_at: s2, token_type: c2 } = e8;
      if (!i2 || !o2 || !a2 || !c2) throw new Rn(`No session defined in URL`);
      let l2 = Math.round(Date.now() / 1e3), u2 = parseInt(o2), d2 = l2 + u2;
      s2 && (d2 = parseInt(s2));
      let f2 = d2 - l2;
      f2 * 1e3 <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f2}s, should have been closer to ${u2}s`);
      let p2 = d2 - u2;
      l2 - p2 >= 120 ? console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`, p2, d2, l2) : l2 - p2 < 0 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`, p2, d2, l2);
      let { data: m2, error: h2 } = await this._getUser(i2);
      if (h2) throw h2;
      let g2 = { provider_token: n2, provider_refresh_token: r2, access_token: i2, expires_in: u2, expires_at: d2, refresh_token: a2, token_type: c2, user: m2.user };
      return window.location.hash = ``, this._debug(`#_getSessionFromURL()`, `clearing window.location.hash`), this._returnResult({ data: { session: g2, redirectType: e8.type }, error: null });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: { session: null, redirectType: null }, error: e9 });
      throw e9;
    }
  }
  _isImplicitGrantCallback(e8) {
    return typeof this.detectSessionInUrl == `function` ? this.detectSessionInUrl(new URL(window.location.href), e8) : !!(e8.access_token || e8.error || e8.error_description || e8.error_code);
  }
  async _isPKCECallback(e8) {
    if (!e8.code) return false;
    let t2 = yr(e8[Mn]);
    return t2 && await W(this.storage, xr(this.storageKey, t2)) ? true : !!await W(this.storage, `${this.storageKey}-code-verifier`);
  }
  async signOut(e8 = { scope: `global` }) {
    return await this.initializePromise, this.lock == null ? await this._signOut(e8) : await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e8));
  }
  async _signOut({ scope: e8 } = { scope: `global` }) {
    return await this._useSession(async (t2) => {
      let n2 = async () => {
        await this._removeSession();
      }, { data: r2, error: i2 } = t2;
      if (i2 && !In(i2)) return this._returnResult({ error: i2 });
      let a2 = r2.session?.access_token;
      if (a2) {
        let { error: t3 } = await this.admin.signOut(a2, e8);
        if (t3 && !(Fn(t3) && (t3.status === 404 || t3.status === 401 || t3.status === 403) || In(t3))) return e8 !== `others` && await n2(), this._returnResult({ error: t3 });
      }
      return e8 !== `others` && await n2(), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(e8) {
    let t2 = ar(), n2 = { id: t2, callback: e8, unsubscribe: () => {
      this._debug(`#unsubscribe()`, `state change callback with id removed`, t2), this.stateChangeEmitters.delete(t2);
    } };
    return this._debug(`#onAuthStateChange()`, `registered callback with id`, t2), this.stateChangeEmitters.set(t2, n2), (async () => {
      await this.initializePromise, this.lock == null ? await this._emitInitialSession(t2) : await this._acquireLock(this.lockAcquireTimeout, async () => {
        this._emitInitialSession(t2);
      });
    })(), { data: { subscription: n2 } };
  }
  async _emitInitialSession(e8) {
    return await this._useSession(async (t2) => {
      try {
        let { data: { session: n2 }, error: r2 } = t2;
        if (r2) throw r2;
        await this.stateChangeEmitters.get(e8)?.callback(`INITIAL_SESSION`, n2), this._debug(`INITIAL_SESSION`, `callback id`, e8, `session`, n2);
      } catch (t3) {
        if (await this.stateChangeEmitters.get(e8)?.callback(`INITIAL_SESSION`, null), this._debug(`INITIAL_SESSION`, `callback id`, e8, `error`, t3), Gn(t3)) return;
        In(t3) || Un(t3) || Fn(t3) && (t3.code === `refresh_token_not_found` || t3.code === `refresh_token_already_used` || t3.code === `session_expired`) ? console.warn(t3) : console.error(t3);
      }
    });
  }
  async resetPasswordForEmail(e8, t2 = {}) {
    let n2 = null, r2 = null, i2 = null;
    this.flowType === `pkce` && ([n2, r2, i2] = await this._getCodeChallengeAndMethod(true));
    try {
      return await Y(this.fetch, `POST`, `${this.url}/recover`, { body: { email: e8, code_challenge: n2, code_challenge_method: r2, gotrue_meta_security: { captcha_token: t2.captchaToken } }, headers: this.headers, redirectTo: this._maybeAppendFlowIdToRedirect(t2.redirectTo, i2) });
    } catch (e9) {
      if (await K(this.storage, this.storageKey, i2), P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async getUserIdentities() {
    try {
      let { data: e8, error: t2 } = await this.getUser();
      if (t2) throw t2;
      return this._returnResult({ data: { identities: e8.user.identities ?? [] }, error: null });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async linkIdentity(e8) {
    return `token` in e8 ? this.linkIdentityIdToken(e8) : this.linkIdentityOAuth(e8);
  }
  async linkIdentityOAuth(e8) {
    let t2 = null;
    try {
      let { data: n2, error: r2 } = await this._useSession(async (n3) => {
        let { data: r3, error: i2 } = n3;
        if (i2) throw i2;
        let { url: a2, flowId: o2 } = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e8.provider, { redirectTo: e8.options?.redirectTo, scopes: e8.options?.scopes, queryParams: e8.options?.queryParams, skipBrowserRedirect: true });
        return t2 = o2, await Y(this.fetch, `GET`, a2, { headers: this.headers, jwt: r3.session?.access_token ?? void 0 });
      });
      if (r2) throw r2;
      return V() && !e8.options?.skipBrowserRedirect && window.location.assign(n2?.url), this._returnResult({ data: { provider: e8.provider, url: n2?.url, flowId: t2 }, error: null });
    } catch (n2) {
      if (P(n2)) return this._returnResult({ data: { provider: e8.provider, url: null, flowId: t2 }, error: n2 });
      throw n2;
    }
  }
  async linkIdentityIdToken(e8) {
    return await this._useSession(async (t2) => {
      try {
        let { error: n2, data: { session: r2 } } = t2;
        if (n2) throw n2;
        let { options: i2, provider: a2, token: o2, access_token: s2, nonce: c2 } = e8, { data: l2, error: u2 } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, { headers: this.headers, jwt: r2?.access_token ?? void 0, body: { provider: a2, id_token: o2, access_token: s2, nonce: c2, link_identity: true, gotrue_meta_security: { captcha_token: i2?.captchaToken } }, xform: X });
        return u2 ? this._returnResult({ data: { user: null, session: null }, error: u2 }) : !l2 || !l2.session || !l2.user ? this._returnResult({ data: { user: null, session: null }, error: new R() }) : (l2.session && (await this._saveSession(l2.session), await this._notifyAllSubscribers(`USER_UPDATED`, l2.session)), this._returnResult({ data: l2, error: u2 }));
      } catch (e9) {
        if (await K(this.storage, this.storageKey, null), P(e9)) return this._returnResult({ data: { user: null, session: null }, error: e9 });
        throw e9;
      }
    });
  }
  async unlinkIdentity(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: n2, error: r2 } = t2;
        if (r2) throw r2;
        return await Y(this.fetch, `DELETE`, `${this.url}/user/identities/${e8.identity_id}`, { headers: this.headers, jwt: n2.session?.access_token ?? void 0 });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _refreshAccessToken(e8) {
    let t2 = `#_refreshAccessToken()`;
    this._debug(t2, `begin`);
    try {
      let n2 = Date.now();
      return await pr(async (n3) => (n3 > 0 && await fr(200 * 2 ** (n3 - 1)), this._debug(t2, `refreshing attempt`, n3), await Y(this.fetch, `POST`, `${this.url}/token?grant_type=refresh_token`, { body: { refresh_token: e8 }, headers: this.headers, xform: X })), (e9, t3) => {
        let r2 = 200 * 2 ** e9;
        return t3 && Un(t3) && Date.now() + r2 - n2 < 3e4;
      });
    } catch (e9) {
      if (this._debug(t2, `error`, e9), P(e9)) return this._returnResult({ data: { session: null, user: null }, error: e9 });
      throw e9;
    } finally {
      this._debug(t2, `end`);
    }
  }
  _isValidSession(e8) {
    return typeof e8 == `object` && !!e8 && `access_token` in e8 && `refresh_token` in e8 && `expires_at` in e8;
  }
  async _handleProviderSignIn(e8, t2) {
    let { url: n2, flowId: r2 } = await this._getUrlForProvider(`${this.url}/authorize`, e8, { redirectTo: t2.redirectTo, scopes: t2.scopes, queryParams: t2.queryParams });
    return this._debug(`#_handleProviderSignIn()`, `provider`, e8, `options`, t2, `url`, n2), V() && !t2.skipBrowserRedirect && window.location.assign(n2), { data: { provider: e8, url: n2, flowId: r2 }, error: null };
  }
  async _recoverAndRefresh() {
    let e8 = `#_recoverAndRefresh()`;
    this._debug(e8, `begin`);
    try {
      let t2 = await W(this.storage, this.storageKey);
      if (t2 && this.userStorage) {
        let e9 = await W(this.userStorage, this.storageKey + `-user`);
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !e9 && (e9 = { user: t2.user }, await U(this.userStorage, this.storageKey + `-user`, e9)), t2.user = e9?.user ?? Fr();
      } else if (t2 && !t2.user && !t2.user) {
        let e9 = await W(this.storage, this.storageKey + `-user`);
        e9 && e9?.user ? (t2.user = e9.user, await G(this.storage, this.storageKey + `-user`), await U(this.storage, this.storageKey, t2)) : t2.user = Fr();
      }
      if (this._debug(e8, `session from storage`, t2), !this._isValidSession(t2)) {
        this._debug(e8, `session is not valid`), t2 !== null && await this._removeSession();
        return;
      }
      let n2 = (t2.expires_at ?? 1 / 0) * 1e3 - Date.now() < wn;
      if (this._debug(e8, `session has${n2 ? `` : ` not`} expired with margin of ${wn}s`), n2) {
        if (this.autoRefreshToken && t2.refresh_token) {
          let { error: n3 } = await this._callRefreshToken(t2.refresh_token);
          n3 && (Gn(n3) ? this._debug(e8, `refresh discarded by commit guard`, n3) : this._debug(e8, `refresh failed`, n3));
        }
      } else if (t2.user && t2.user.__isUserNotAvailableProxy === true) try {
        let { data: n3, error: r2 } = await this._getUser(t2.access_token);
        !r2 && n3?.user ? (t2.user = n3.user, await this._saveSession(t2), await this._notifyAllSubscribers(`SIGNED_IN`, t2)) : this._debug(e8, `could not get user data, skipping SIGNED_IN notification`);
      } catch (t3) {
        console.error(`Error getting user data:`, t3), this._debug(e8, `error getting user data, skipping SIGNED_IN notification`, t3);
      }
      else await this._notifyAllSubscribers(`SIGNED_IN`, t2);
    } catch (t2) {
      this._debug(e8, `error`, t2), Un(t2) ? console.warn(t2) : console.error(t2);
      return;
    } finally {
      this._debug(e8, `end`);
    }
  }
  async _callRefreshToken(e8) {
    var t2, n2;
    if (!e8) throw new L();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    if (this.lastRefreshFailure && this.lastRefreshFailure.refreshToken === e8 && Date.now() < this.lastRefreshFailure.expiresAt) return this._debug(`#_callRefreshToken()`, `returning cached failure (cooldown active)`), this.lastRefreshFailure.result;
    let r2 = `#_callRefreshToken()`;
    this._debug(r2, `begin`);
    try {
      this.refreshingDeferred = new ur(), this.refreshingDeferred.promise.then(void 0, () => {
      });
      let t3 = await W(this.storage, this.storageKey), { data: n3, error: i2 } = await this._refreshAccessToken(e8);
      if (i2) throw i2;
      if (!n3.session) throw new L();
      let a2 = await W(this.storage, this.storageKey);
      if (t3 !== null && (a2 === null || a2.refresh_token !== t3.refresh_token)) {
        this._debug(r2, `commit guard: storage changed since refresh started, discarding rotated tokens`, { startedWith: `present`, nowHolds: a2 ? `replaced` : `cleared` });
        let e9 = { data: null, error: new Wn() };
        return this.refreshingDeferred.resolve(e9), e9;
      }
      let o2 = this._sessionRemovalEpoch;
      if (await this._saveSession(n3.session), this._sessionRemovalEpoch !== o2) {
        this._debug(r2, `commit guard (post-save): _removeSession ran during _saveSession, undoing write`), await G(this.storage, this.storageKey), this.userStorage && await G(this.userStorage, this.storageKey + `-user`);
        let e9 = { data: null, error: new Wn() };
        return this.refreshingDeferred.resolve(e9), e9;
      }
      await this._notifyAllSubscribers(`TOKEN_REFRESHED`, n3.session);
      let s2 = { data: n3.session, error: null };
      return this.lastRefreshFailure = null, this.refreshingDeferred.resolve(s2), s2;
    } catch (i2) {
      if (this._debug(r2, `error`, i2), P(i2)) {
        let n3 = { data: null, error: i2 };
        if (!Un(i2)) {
          let e9 = await W(this.storage, this.storageKey);
          e9?.expires_at && e9.expires_at * 1e3 > Date.now() ? this._debug(r2, `proactive refresh failed, access token still valid \u2014 preserving session`) : await this._removeSession();
        }
        return this.lastRefreshFailure = { refreshToken: e8, result: n3, expiresAt: Date.now() + Tn }, (t2 = this.refreshingDeferred) == null || t2.resolve(n3), n3;
      }
      throw (n2 = this.refreshingDeferred) == null || n2.reject(i2), i2;
    } finally {
      this.refreshingDeferred = null, this._debug(r2, `end`);
    }
  }
  async _notifyAllSubscribers(e8, t2, n2 = true) {
    if (this._pendingInitNotifications !== null && n2) {
      this._pendingInitNotifications.push({ event: e8, session: t2, broadcast: n2 });
      return;
    }
    let r2 = `#_notifyAllSubscribers(${e8})`;
    this._debug(r2, `begin`, t2, `broadcast = ${n2}`);
    try {
      this.broadcastChannel && n2 && this.broadcastChannel.postMessage({ event: e8, session: t2 });
      let r3 = [], i2 = Array.from(this.stateChangeEmitters.values()).map(async (n3) => {
        try {
          await n3.callback(e8, t2);
        } catch (e9) {
          r3.push(e9);
        }
      });
      if (await Promise.all(i2), r3.length > 0) {
        for (let e9 = 0; e9 < r3.length; e9 += 1) console.error(r3[e9]);
        throw r3[0];
      }
    } finally {
      this._debug(r2, `end`);
    }
  }
  async _saveSession(e8) {
    this._debug(`#_saveSession()`, e8), this.suppressGetSessionWarning = true;
    let t2 = Object.assign({}, e8), n2 = t2.user && t2.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      !n2 && t2.user && await U(this.userStorage, this.storageKey + `-user`, { user: t2.user });
      let e9 = Object.assign({}, t2);
      delete e9.user;
      let r2 = Lr(e9);
      await U(this.storage, this.storageKey, r2);
    } else {
      let e9 = Lr(t2);
      await U(this.storage, this.storageKey, e9);
    }
  }
  async _removeSession() {
    this._sessionRemovalEpoch += 1, this._debug(`#_removeSession()`), this.lastRefreshFailure = null, this.suppressGetSessionWarning = false, await G(this.storage, this.storageKey), await Er(this.storage, this.storageKey), await G(this.storage, this.storageKey + `-user`), this.userStorage && await G(this.userStorage, this.storageKey + `-user`), await this._notifyAllSubscribers(`SIGNED_OUT`, null);
  }
  _removeVisibilityChangedCallback() {
    this._debug(`#_removeVisibilityChangedCallback()`);
    let e8 = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e8 && V() && window != null && window.removeEventListener && window.removeEventListener(`visibilitychange`, e8);
    } catch (e9) {
      console.error(`removing visibilitychange callback failed`, e9);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug(`#_startAutoRefresh()`);
    let e8 = setInterval(() => this._autoRefreshTokenTick(), N);
    this.autoRefreshTicker = e8, e8 && typeof e8 == `object` && typeof e8.unref == `function` ? e8.unref() : typeof Deno < `u` && typeof Deno.unrefTimer == `function` && Deno.unrefTimer(e8);
    let t2 = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = t2, t2 && typeof t2 == `object` && typeof t2.unref == `function` ? t2.unref() : typeof Deno < `u` && typeof Deno.unrefTimer == `function` && Deno.unrefTimer(t2);
  }
  async _stopAutoRefresh() {
    this._debug(`#_stopAutoRefresh()`);
    let e8 = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e8 && clearInterval(e8);
    let t2 = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, t2 && clearTimeout(t2);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async dispose() {
    var e8;
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh(), (e8 = this.broadcastChannel) == null || e8.close(), this.broadcastChannel = null, this.stateChangeEmitters.clear();
  }
  async _autoRefreshTokenTick() {
    if (this._debug(`#_autoRefreshTokenTick()`, `begin`), this.lock != null) {
      try {
        await this._acquireLock(0, async () => {
          try {
            let e8 = Date.now();
            try {
              return await this._useSession(async (t2) => {
                let { data: { session: n2 } } = t2;
                if (!n2 || !n2.refresh_token || !n2.expires_at) {
                  this._debug(`#_autoRefreshTokenTick()`, `no session`);
                  return;
                }
                let r2 = Math.floor((n2.expires_at * 1e3 - e8) / N);
                this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r2} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`), r2 <= 3 && await this._callRefreshToken(n2.refresh_token);
              });
            } catch (e9) {
              console.error(`Auto refresh tick failed with error. This is likely a transient error.`, e9);
            }
          } finally {
            this._debug(`#_autoRefreshTokenTick()`, `end`);
          }
        });
      } catch (e8) {
        if (e8 instanceof Xr) this._debug(`auto refresh token tick lock not available`);
        else throw e8;
      }
      return;
    }
    if (this.refreshingDeferred !== null) {
      this._debug(`#_autoRefreshTokenTick()`, `refresh already in flight, skipping`);
      return;
    }
    try {
      let e8 = Date.now();
      try {
        await this._useSession(async (t2) => {
          let { data: { session: n2 } } = t2;
          if (!n2 || !n2.refresh_token || !n2.expires_at) {
            this._debug(`#_autoRefreshTokenTick()`, `no session`);
            return;
          }
          let r2 = Math.floor((n2.expires_at * 1e3 - e8) / N);
          this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r2} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`), r2 <= 3 && await this._callRefreshToken(n2.refresh_token);
        });
      } catch (e9) {
        console.error(`Auto refresh tick failed with error. This is likely a transient error.`, e9);
      }
    } finally {
      this._debug(`#_autoRefreshTokenTick()`, `end`);
    }
  }
  async _handleVisibilityChange() {
    if (this._debug(`#_handleVisibilityChange()`), !V() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), false;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(false);
        } catch (e8) {
          this._debug(`#visibilityChangedCallback`, `error`, e8);
        }
      }, window == null || window.addEventListener(`visibilitychange`, this.visibilityChangedCallback), await this._onVisibilityChanged(true);
    } catch (e8) {
      console.error(`_handleVisibilityChange`, e8);
    }
  }
  async _onVisibilityChanged(e8) {
    let t2 = `#_onVisibilityChanged(${e8})`;
    if (this._debug(t2, `visibilityState`, document.visibilityState), document.visibilityState === `visible`) {
      if (this.autoRefreshToken && this._startAutoRefresh(), !e8) {
        if (await this.initializePromise, this.lock != null) await this._acquireLock(this.lockAcquireTimeout, async () => {
          if (document.visibilityState !== `visible`) {
            this._debug(t2, `acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);
            return;
          }
          await this._recoverAndRefresh();
        });
        else {
          if (document.visibilityState !== `visible`) {
            this._debug(t2, `visibilityState is no longer visible, skipping recovery`);
            return;
          }
          await this._recoverAndRefresh();
        }
      }
    } else document.visibilityState === `hidden` && this.autoRefreshToken && this._stopAutoRefresh();
  }
  async _getUrlForProvider(e8, t2, n2) {
    let r2 = n2?.redirectTo, i2 = null, a2 = null, o2 = null;
    this.flowType === `pkce` && ([i2, a2, o2] = await this._getCodeChallengeAndMethod(), r2 = this._maybeAppendFlowIdToRedirect(r2, o2));
    let s2 = [`provider=${encodeURIComponent(t2)}`];
    if (r2 && s2.push(`redirect_to=${encodeURIComponent(r2)}`), n2?.scopes && s2.push(`scopes=${encodeURIComponent(n2.scopes)}`), i2 != null && a2 != null) {
      let e9 = new URLSearchParams({ code_challenge: `${encodeURIComponent(i2)}`, code_challenge_method: `${encodeURIComponent(a2)}` });
      s2.push(e9.toString());
    }
    if (n2?.queryParams) {
      let e9 = new URLSearchParams(n2.queryParams);
      s2.push(e9.toString());
    }
    return n2?.skipBrowserRedirect && s2.push(`skip_http_redirect=${n2.skipBrowserRedirect}`), { url: `${e8}?${s2.join(`&`)}`, flowId: o2 };
  }
  _maybeAppendFlowIdToRedirect(e8, t2) {
    return !e8 || !t2 || !this.experimental.appendPkceFlowIdToRedirects ? e8 ?? void 0 : Dr(e8, t2);
  }
  async _getCodeChallengeAndMethod(e8 = false) {
    return Or(this.storage, this.storageKey, e8, (e9) => this._debug(`#_getCodeChallengeAndMethod()`, `evicted oldest pending PKCE verifier slot`, e9));
  }
  async _unenroll(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: n2, error: r2 } = t2;
        return r2 ? this._returnResult({ data: null, error: r2 }) : await Y(this.fetch, `DELETE`, `${this.url}/factors/${e8.factorId}`, { headers: this.headers, jwt: n2?.session?.access_token });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _enroll(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: n2, error: r2 } = t2;
        if (r2) return this._returnResult({ data: null, error: r2 });
        let i2 = Object.assign({ friendly_name: e8.friendlyName, factor_type: e8.factorType }, e8.factorType === `phone` ? { phone: e8.phone } : e8.factorType === `totp` ? { issuer: e8.issuer } : {}), { data: a2, error: o2 } = await Y(this.fetch, `POST`, `${this.url}/factors`, { body: i2, headers: this.headers, jwt: n2?.session?.access_token });
        return o2 ? this._returnResult({ data: null, error: o2 }) : (e8.factorType === `totp` && a2.type === `totp` && a2?.totp?.qr_code && (a2.totp.qr_code = `data:image/svg+xml;utf-8,${a2.totp.qr_code}`), this._returnResult({ data: a2, error: null }));
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _verify(e8) {
    let t2 = async () => {
      try {
        return await this._useSession(async (t3) => {
          let { data: n2, error: r2 } = t3;
          if (r2) return this._returnResult({ data: null, error: r2 });
          let i2 = Object.assign({ challenge_id: e8.challengeId }, `webauthn` in e8 ? { webauthn: Object.assign(Object.assign({}, e8.webauthn), { credential_response: e8.webauthn.type === `create` ? ci(e8.webauthn.credential_response) : li(e8.webauthn.credential_response) }) } : { code: e8.code }), { data: a2, error: o2 } = await Y(this.fetch, `POST`, `${this.url}/factors/${e8.factorId}/verify`, { body: i2, headers: this.headers, jwt: n2?.session?.access_token });
          return o2 ? this._returnResult({ data: null, error: o2 }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a2.expires_in }, a2)), await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, a2), this._returnResult({ data: a2, error: o2 }));
        });
      } catch (e9) {
        if (P(e9)) return this._returnResult({ data: null, error: e9 });
        throw e9;
      }
    };
    return this.lock == null ? t2() : this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _challenge(e8) {
    let t2 = async () => {
      try {
        return await this._useSession(async (t3) => {
          let { data: n2, error: r2 } = t3;
          if (r2) return this._returnResult({ data: null, error: r2 });
          let i2 = await Y(this.fetch, `POST`, `${this.url}/factors/${e8.factorId}/challenge`, { body: e8, headers: this.headers, jwt: n2?.session?.access_token });
          if (i2.error) return i2;
          let { data: a2 } = i2;
          if (a2.type !== `webauthn`) return { data: a2, error: null };
          switch (a2.webauthn.type) {
            case `create`:
              return { data: Object.assign(Object.assign({}, a2), { webauthn: Object.assign(Object.assign({}, a2.webauthn), { credential_options: Object.assign(Object.assign({}, a2.webauthn.credential_options), { publicKey: oi(a2.webauthn.credential_options.publicKey) }) }) }), error: null };
            case `request`:
              return { data: Object.assign(Object.assign({}, a2), { webauthn: Object.assign(Object.assign({}, a2.webauthn), { credential_options: Object.assign(Object.assign({}, a2.webauthn.credential_options), { publicKey: si(a2.webauthn.credential_options.publicKey) }) }) }), error: null };
          }
        });
      } catch (e9) {
        if (P(e9)) return this._returnResult({ data: null, error: e9 });
        throw e9;
      }
    };
    return this.lock == null ? t2() : this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _challengeAndVerify(e8) {
    let { data: t2, error: n2 } = await this._challenge({ factorId: e8.factorId });
    return n2 ? this._returnResult({ data: null, error: n2 }) : await this._verify({ factorId: e8.factorId, challengeId: t2.id, code: e8.code });
  }
  async _listFactors() {
    let { data: { user: e8 }, error: t2 } = await this.getUser();
    if (t2) return { data: null, error: t2 };
    let n2 = { all: [], phone: [], totp: [], webauthn: [], recovery_code: [] };
    for (let t3 of e8?.factors ?? []) n2.all.push(t3), t3.status === `verified` && t3.factor_type in n2 && Array.isArray(n2[t3.factor_type]) && n2[t3.factor_type].push(t3);
    return { data: n2, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e8) {
    if (e8) try {
      let { payload: t3 } = dr(e8), n3 = null;
      t3.aal && (n3 = t3.aal);
      let r3 = n3, { data: { user: i3 }, error: a3 } = await this.getUser(e8);
      if (a3) return this._returnResult({ data: null, error: a3 });
      (i3?.factors?.filter((e9) => e9.status === `verified`) ?? []).length > 0 && (r3 = `aal2`);
      let o3 = t3.amr || [];
      return { data: { currentLevel: n3, nextLevel: r3, currentAuthenticationMethods: o3 }, error: null };
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
    let { data: { session: t2 }, error: n2 } = await this.getSession();
    if (n2) return this._returnResult({ data: null, error: n2 });
    if (!t2) return { data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] }, error: null };
    let { payload: r2 } = dr(t2.access_token), i2 = null;
    r2.aal && (i2 = r2.aal);
    let a2 = i2;
    (t2.user.factors?.filter((e9) => e9.status === `verified`) ?? []).length > 0 && (a2 = `aal2`);
    let o2 = r2.amr || [];
    return { data: { currentLevel: i2, nextLevel: a2, currentAuthenticationMethods: o2 }, error: null };
  }
  async _getRecoveryCodesStatus() {
    Pr(this.experimental);
    try {
      return await this._useSession(async (e8) => {
        let { data: t2, error: n2 } = e8;
        if (n2) return this._returnResult({ data: null, error: n2 });
        let { data: r2, error: i2 } = await Y(this.fetch, `GET`, `${this.url}/factors/recovery-codes`, { headers: this.headers, jwt: t2?.session?.access_token });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: r2, error: null });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _generateRecoveryCodes(e8) {
    Pr(this.experimental);
    try {
      return await this._useSession(async (t2) => {
        let { data: n2, error: r2 } = t2;
        if (r2) return this._returnResult({ data: null, error: r2 });
        let { data: i2, error: a2 } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes`, { body: e8?.friendlyName ? { friendly_name: e8.friendlyName } : void 0, headers: this.headers, jwt: n2?.session?.access_token });
        return a2 ? this._returnResult({ data: null, error: a2 }) : this._returnResult({ data: i2, error: null });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _verifyRecoveryCode(e8) {
    Pr(this.experimental);
    let t2 = async () => {
      try {
        return await this._useSession(async (t3) => {
          let { data: n2, error: r2 } = t3;
          if (r2) return this._returnResult({ data: null, error: r2 });
          let { data: i2, error: a2 } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes/verify`, { body: { code: e8.code }, headers: this.headers, jwt: n2?.session?.access_token });
          if (a2) return this._returnResult({ data: null, error: a2 });
          let o2 = Object.assign({ expires_at: ir(i2.expires_in) }, i2);
          return await this._saveSession(o2), await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, o2), this._returnResult({ data: i2, error: null });
        });
      } catch (e9) {
        if (P(e9)) return this._returnResult({ data: null, error: e9 });
        throw e9;
      }
    };
    return this.lock == null ? t2() : this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _regenerateRecoveryCodes() {
    Pr(this.experimental);
    try {
      return await this._useSession(async (e8) => {
        let { data: t2, error: n2 } = e8;
        if (n2) return this._returnResult({ data: null, error: n2 });
        let { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes/regenerate`, { headers: this.headers, jwt: t2?.session?.access_token });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: r2, error: null });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _unenrollRecoveryCodes() {
    Pr(this.experimental);
    try {
      return await this._useSession(async (e8) => {
        let { data: t2, error: n2 } = e8;
        if (n2) return this._returnResult({ data: null, error: n2 });
        let { data: r2, error: i2 } = await Y(this.fetch, `DELETE`, `${this.url}/factors/recovery-codes`, { headers: this.headers, jwt: t2?.session?.access_token });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: r2, error: null });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _getAuthorizationDetails(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: { session: n2 }, error: r2 } = t2;
        return r2 ? this._returnResult({ data: null, error: r2 }) : n2 ? await Y(this.fetch, `GET`, `${this.url}/oauth/authorizations/${e8}`, { headers: this.headers, jwt: n2.access_token, xform: (e9) => ({ data: e9, error: null }) }) : this._returnResult({ data: null, error: new L() });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _approveAuthorization(e8, t2) {
    try {
      return await this._useSession(async (n2) => {
        let { data: { session: r2 }, error: i2 } = n2;
        if (i2) return this._returnResult({ data: null, error: i2 });
        if (!r2) return this._returnResult({ data: null, error: new L() });
        let a2 = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e8}/consent`, { headers: this.headers, jwt: r2.access_token, body: { action: `approve` }, xform: (e9) => ({ data: e9, error: null }) });
        return a2.data && a2.data.redirect_url && V() && !t2?.skipBrowserRedirect && window.location.assign(a2.data.redirect_url), a2;
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _denyAuthorization(e8, t2) {
    try {
      return await this._useSession(async (n2) => {
        let { data: { session: r2 }, error: i2 } = n2;
        if (i2) return this._returnResult({ data: null, error: i2 });
        if (!r2) return this._returnResult({ data: null, error: new L() });
        let a2 = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e8}/consent`, { headers: this.headers, jwt: r2.access_token, body: { action: `deny` }, xform: (e9) => ({ data: e9, error: null }) });
        return a2.data && a2.data.redirect_url && V() && !t2?.skipBrowserRedirect && window.location.assign(a2.data.redirect_url), a2;
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e8) => {
        let { data: { session: t2 }, error: n2 } = e8;
        return n2 ? this._returnResult({ data: null, error: n2 }) : t2 ? await Y(this.fetch, `GET`, `${this.url}/user/oauth/grants`, { headers: this.headers, jwt: t2.access_token, xform: (e9) => ({ data: e9, error: null }) }) : this._returnResult({ data: null, error: new L() });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _revokeOAuthGrant(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: { session: n2 }, error: r2 } = t2;
        return r2 ? this._returnResult({ data: null, error: r2 }) : n2 ? (await Y(this.fetch, `DELETE`, `${this.url}/user/oauth/grants`, { headers: this.headers, jwt: n2.access_token, query: { client_id: e8.clientId }, noResolveJson: true }), { data: {}, error: null }) : this._returnResult({ data: null, error: new L() });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async fetchJwk(e8, t2 = { keys: [] }) {
    let n2 = t2.keys.find((t3) => t3.kid === e8);
    if (n2) return n2;
    let r2 = Date.now();
    if (n2 = this.jwks.keys.find((t3) => t3.kid === e8), n2 && this.jwks_cached_at + 6e5 > r2) return n2;
    let { data: i2, error: a2 } = await Y(this.fetch, `GET`, `${this.url}/.well-known/jwks.json`, { headers: this.headers });
    if (a2) throw a2;
    return !i2.keys || i2.keys.length === 0 || (this.jwks = i2, this.jwks_cached_at = r2, n2 = i2.keys.find((t3) => t3.kid === e8), !n2) ? null : n2;
  }
  async getClaims(e8, t2 = {}) {
    try {
      let n2 = e8;
      if (!n2) {
        let { data: e9, error: t3 } = await this.getSession();
        if (t3 || !e9.session) return this._returnResult({ data: null, error: t3 });
        n2 = e9.session.access_token;
      }
      let { header: r2, payload: i2, signature: a2, raw: { header: o2, payload: s2 } } = dr(n2);
      if (!t2?.allowExpired) try {
        jr(i2.exp);
      } catch (e9) {
        throw new qn(e9 instanceof Error ? e9.message : `JWT validation failed`);
      }
      let c2 = !r2.alg || r2.alg.startsWith(`HS`) || !r2.kid || !(`crypto` in globalThis && `subtle` in globalThis.crypto) ? null : await this.fetchJwk(r2.kid, t2?.keys ? { keys: t2.keys } : t2?.jwks);
      if (!c2) {
        let { error: e9 } = await this.getUser(n2);
        if (e9) throw e9;
        return { data: { claims: i2, header: r2, signature: a2 }, error: null };
      }
      let l2 = Mr(r2.alg), u2 = await crypto.subtle.importKey(`jwk`, c2, l2, true, [`verify`]);
      if (!await crypto.subtle.verify(l2, u2, a2, rr(`${o2}.${s2}`))) throw new qn(`Invalid JWT signature`);
      return { data: { claims: i2, header: r2, signature: a2 }, error: null };
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async signInWithPasskey(e8) {
    try {
      if (!di()) return this._returnResult({ data: null, error: new F(`Browser does not support WebAuthn`, null) });
      let { data: t2, error: n2 } = await this._startPasskeyAuthentication({ options: { captchaToken: e8?.options?.captchaToken } });
      if (n2 || !t2) return this._returnResult({ data: null, error: n2 });
      let { data: r2, error: i2 } = await pi({ publicKey: si(t2.options), signal: e8?.options?.signal ?? ai.createNewAbortSignal(), mediation: e8?.options?.mediation });
      if (i2 || !r2) return this._returnResult({ data: null, error: i2 ?? new F(`WebAuthn ceremony failed`, null) });
      let a2 = li(r2);
      return this._verifyPasskeyAuthentication({ challengeId: t2.challenge_id, credential: a2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async registerPasskey(e8) {
    try {
      if (!di()) return this._returnResult({ data: null, error: new F(`Browser does not support WebAuthn`, null) });
      let { data: t2, error: n2 } = await this._startPasskeyRegistration();
      if (n2 || !t2) return this._returnResult({ data: null, error: n2 });
      let { data: r2, error: i2 } = await fi({ publicKey: oi(t2.options), signal: e8?.options?.signal ?? ai.createNewAbortSignal() });
      if (i2 || !r2) return this._returnResult({ data: null, error: i2 ?? new F(`WebAuthn ceremony failed`, null) });
      let a2 = ci(r2);
      return this._verifyPasskeyRegistration({ challengeId: t2.challenge_id, credential: a2 });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _startPasskeyRegistration() {
    try {
      return await this._useSession(async (e8) => {
        let { data: { session: t2 }, error: n2 } = e8;
        if (n2) return this._returnResult({ data: null, error: n2 });
        if (!t2) return this._returnResult({ data: null, error: new L() });
        let { data: r2, error: i2 } = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/options`, { headers: this.headers, jwt: t2.access_token, body: {} });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: r2, error: null });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _verifyPasskeyRegistration(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: { session: n2 }, error: r2 } = t2;
        if (r2) return this._returnResult({ data: null, error: r2 });
        if (!n2) return this._returnResult({ data: null, error: new L() });
        let { data: i2, error: a2 } = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/verify`, { headers: this.headers, jwt: n2.access_token, body: { challenge_id: e8.challengeId, credential: e8.credential } });
        return a2 ? this._returnResult({ data: null, error: a2 }) : this._returnResult({ data: i2, error: null });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _startPasskeyAuthentication(e8) {
    try {
      let { data: t2, error: n2 } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/options`, { headers: this.headers, body: { gotrue_meta_security: { captcha_token: e8?.options?.captchaToken } } });
      return n2 ? this._returnResult({ data: null, error: n2 }) : this._returnResult({ data: t2, error: null });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _verifyPasskeyAuthentication(e8) {
    try {
      let { data: t2, error: n2 } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/verify`, { headers: this.headers, body: { challenge_id: e8.challengeId, credential: e8.credential }, xform: X });
      return n2 ? this._returnResult({ data: null, error: n2 }) : (t2.session && (await this._saveSession(t2.session), await this._notifyAllSubscribers(`SIGNED_IN`, t2.session)), this._returnResult({ data: t2, error: null }));
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _listPasskeys() {
    try {
      return await this._useSession(async (e8) => {
        let { data: { session: t2 }, error: n2 } = e8;
        if (n2) return this._returnResult({ data: null, error: n2 });
        if (!t2) return this._returnResult({ data: null, error: new L() });
        let { data: r2, error: i2 } = await Y(this.fetch, `GET`, `${this.url}/passkeys`, { headers: this.headers, jwt: t2.access_token, xform: (e9) => ({ data: e9, error: null }) });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: r2, error: null });
      });
    } catch (e8) {
      if (P(e8)) return this._returnResult({ data: null, error: e8 });
      throw e8;
    }
  }
  async _updatePasskey(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: { session: n2 }, error: r2 } = t2;
        if (r2) return this._returnResult({ data: null, error: r2 });
        if (!n2) return this._returnResult({ data: null, error: new L() });
        let { data: i2, error: a2 } = await Y(this.fetch, `PATCH`, `${this.url}/passkeys/${e8.passkeyId}`, { headers: this.headers, jwt: n2.access_token, body: { friendly_name: e8.friendlyName } });
        return a2 ? this._returnResult({ data: null, error: a2 }) : this._returnResult({ data: i2, error: null });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
  async _deletePasskey(e8) {
    try {
      return await this._useSession(async (t2) => {
        let { data: { session: n2 }, error: r2 } = t2;
        if (r2) return this._returnResult({ data: null, error: r2 });
        if (!n2) return this._returnResult({ data: null, error: new L() });
        let { error: i2 } = await Y(this.fetch, `DELETE`, `${this.url}/passkeys/${e8.passkeyId}`, { headers: this.headers, jwt: n2.access_token, noResolveJson: true });
        return i2 ? this._returnResult({ data: null, error: i2 }) : this._returnResult({ data: null, error: null });
      });
    } catch (e9) {
      if (P(e9)) return this._returnResult({ data: null, error: e9 });
      throw e9;
    }
  }
};
Ci.nextInstanceID = {};
var wi = Ci;
var Ti = `2.117.2`;
var Ei = ``;
var Di;
if (typeof Deno < `u`) Ei = `deno`, Di = Deno.version?.deno;
else if (typeof document < `u`) Ei = `web`;
else if (typeof navigator < `u` && navigator.product === `ReactNative`) Ei = `react-native`;
else {
  Ei = `node`;
  let e8 = globalThis.process;
  Di = e8 == null || (Oi = e8.version) == null ? void 0 : Oi.replace(/^v/, ``);
}
var Oi;
var ki = [`runtime=${Ei}`];
Di && ki.push(`runtime-version=${Di}`);
var Ai = { headers: { "X-Client-Info": `supabase-js/${Ti}; ${ki.join(`; `)}` } };
var ji = { schema: `public` };
var Mi = { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, flowType: `implicit` };
var Ni = {};
var Pi = { enabled: false, respectSamplingDecision: true };
function Fi(e8) {
  if (!e8 || typeof e8 != `string`) return null;
  let t2 = e8.split(`-`);
  if (t2.length !== 4) return null;
  let [n2, r2, i2, a2] = t2;
  if (n2.length !== 2 || r2.length !== 32 || i2.length !== 16 || a2.length !== 2) return null;
  let o2 = /^[0-9a-f]+$/i;
  return !o2.test(n2) || !o2.test(r2) || !o2.test(i2) || !o2.test(a2) || r2 === `00000000000000000000000000000000` || i2 === `0000000000000000` ? null : { version: n2, traceId: r2, parentId: i2, traceFlags: a2, isSampled: (parseInt(a2, 16) & 1) == 1 };
}
function Ii(e8, t2) {
  if (!e8 || !t2 || t2.length === 0) return false;
  let n2;
  if (e8 instanceof URL) n2 = e8;
  else try {
    n2 = new URL(e8);
  } catch {
    return false;
  }
  for (let e9 of t2) try {
    if (typeof e9 == `string`) {
      if (Li(n2.hostname, e9)) return true;
    } else if (e9 instanceof RegExp) {
      if (e9.test(n2.hostname)) return true;
    } else if (typeof e9 == `function` && e9(n2)) return true;
  } catch {
    continue;
  }
  return false;
}
function Li(e8, t2) {
  if (t2 === e8) return true;
  if (t2.startsWith(`*.`)) {
    let n2 = t2.slice(2);
    if (e8.endsWith(n2) && (e8 === n2 || e8.endsWith(`.` + n2))) return true;
  }
  return false;
}
function Ri(e8) {
  let t2 = [];
  try {
    let n2 = new URL(e8);
    t2.push(n2.hostname);
  } catch {
  }
  return t2.push(`*.supabase.co`, `*.supabase.in`), t2.push(`localhost`, `127.0.0.1`, `[::1]`), t2;
}
function zi(e8) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e9) {
    return typeof e9;
  } : function(e9) {
    return e9 && typeof Symbol == `function` && e9.constructor === Symbol && e9 !== Symbol.prototype ? `symbol` : typeof e9;
  }, zi(e8);
}
function Bi(e8, t2) {
  if (zi(e8) != `object` || !e8) return e8;
  var n2 = e8[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e8, t2 || `default`);
    if (zi(r2) != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t2 === `string` ? String : Number)(e8);
}
function Vi(e8) {
  var t2 = Bi(e8, `string`);
  return zi(t2) == `symbol` ? t2 : t2 + ``;
}
function Hi(e8, t2, n2) {
  return (t2 = Vi(t2)) in e8 ? Object.defineProperty(e8, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e8[t2] = n2, e8;
}
function Ui(e8, t2) {
  var n2 = Object.keys(e8);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e8);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e8, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function $(e8) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Ui(Object(n2), true).forEach(function(t3) {
      Hi(e8, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n2)) : Ui(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e8, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e8;
}
var Wi = (e8) => e8 ? (...t2) => e8(...t2) : (...e9) => fetch(...e9);
var Gi = () => Headers;
var Ki = (e8) => e8.startsWith(`sb_publishable_`) || e8.startsWith(`sb_secret_`);
var qi = `sb_temp_`;
var Ji = /* @__PURE__ */ new Set();
var Yi = (e8) => {
  if (!e8.startsWith(`sb_`) || Ki(e8) || e8.startsWith(qi)) return;
  let t2 = e8.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? `unknown`;
  Ji.has(t2) || (Ji.add(t2), console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`));
};
var Xi = (e8, t2, n2, r2, i2, a2) => {
  let o2 = Wi(r2), s2 = Gi(), c2 = i2?.enabled === true, l2 = i2?.respectSamplingDecision !== false, u2 = c2 ? Ri(t2) : null, d2 = !(a2?.omitApiKeyAsBearer && Ki(e8));
  return async (t3, r3) => {
    let i3 = await n2(), a3 = new s2(r3?.headers);
    if (a3.has(`apikey`) || a3.set(`apikey`, e8), !a3.has(`Authorization`)) {
      let t4 = i3 ?? (d2 ? e8 : null);
      t4 && a3.set(`Authorization`, `Bearer ${t4}`);
    }
    if (u2) {
      let e9 = $i(t3, u2, l2);
      e9 && (e9.traceparent && !a3.has(`traceparent`) && a3.set(`traceparent`, e9.traceparent), e9.tracestate && !a3.has(`tracestate`) && a3.set(`tracestate`, e9.tracestate), e9.baggage && !a3.has(`baggage`) && a3.set(`baggage`, e9.baggage));
    }
    return o2(t3, $($({}, r3), {}, { headers: a3 }));
  };
};
var Zi = false;
var Qi = false;
function $i(e8, n2, r2) {
  let i2 = t();
  if (!i2) return Zi || (Zi = true, console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")), null;
  if (!Ii(typeof e8 == `string` || e8 instanceof URL ? e8 : e8.url, n2)) return null;
  let a2 = i2();
  if (!a2 || !a2.traceparent) {
    var o2;
    if (a2 != null && (o2 = a2.carrierKeys) != null && o2.length && !Qi) {
      Qi = true;
      let e9 = a2.carrierKeys.includes(`sentry-trace`) ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it." : ` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;
      console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${a2.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.` + e9);
    }
    return null;
  }
  if (r2) {
    let e9 = Fi(a2.traceparent);
    if (e9 && !e9.isSampled) return { traceparent: a2.traceparent };
  }
  return a2;
}
function ea(e8) {
  return typeof e8 == `boolean` ? { enabled: e8 } : e8;
}
function ta(e8) {
  return e8.endsWith(`/`) ? e8 : e8 + `/`;
}
var na = false;
function ra(e8) {
  na || typeof e8 == `object` && e8 && `schema` in e8 && e8.schema !== void 0 && (na = true, console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`));
}
function ia(e8, t2) {
  let { db: n2, auth: r2, realtime: i2, global: a2 } = e8, { db: o2, auth: s2, realtime: c2, global: l2 } = t2, u2 = ea(e8.tracePropagation), d2 = ea(t2.tracePropagation), f2 = { db: $($({}, o2), n2), auth: $($({}, s2), r2), realtime: $($({}, c2), i2), storage: {}, global: $($($({}, l2), a2), {}, { headers: $($({}, l2?.headers ?? {}), a2?.headers ?? {}) }), tracePropagation: { enabled: u2?.enabled ?? d2?.enabled ?? false, respectSamplingDecision: u2?.respectSamplingDecision ?? d2?.respectSamplingDecision ?? true }, accessToken: async () => `` };
  return e8.accessToken ? f2.accessToken = e8.accessToken : delete f2.accessToken, f2;
}
function aa(e8) {
  let t2 = e8?.trim();
  if (!t2) throw Error(`supabaseUrl is required.`);
  if (!t2.match(/^https?:\/\//i)) throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
  try {
    return new URL(ta(t2));
  } catch {
    throw Error(`Invalid supabaseUrl: Provided URL is malformed.`);
  }
}
var oa = class extends wi {
  constructor(e8) {
    super(e8);
  }
};
var sa = class {
  constructor(e8, t2, n2) {
    this.supabaseUrl = e8, this.supabaseKey = t2;
    let r2 = aa(e8);
    if (!t2) throw Error(`supabaseKey is required.`);
    Yi(t2), ra(n2), this.realtimeUrl = new URL(`realtime/v1`, r2), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(`http`, `ws`), this.authUrl = new URL(`auth/v1`, r2), this.storageUrl = new URL(`storage/v1`, r2), this.functionsUrl = new URL(`functions/v1`, r2);
    let i2 = `sb-${r2.hostname.split(`.`)[0]}-auth-token`, a2 = { db: ji, realtime: Ni, auth: $($({}, Mi), {}, { storageKey: i2 }), global: Ai, tracePropagation: Pi }, o2 = ia(n2 ?? {}, a2);
    this.settings = o2, this.storageKey = o2.auth.storageKey ?? ``, this.headers = o2.global.headers ?? {}, o2.accessToken ? (this.accessToken = o2.accessToken, this.auth = new Proxy({}, { get: (e9, t3) => {
      throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t3)} is not possible`);
    } })) : this.auth = this._initSupabaseAuthClient(o2.auth ?? {}, this.headers, o2.global.fetch), this.fetch = Xi(t2, e8, this._getSessionToken.bind(this), o2.global.fetch, o2.tracePropagation), this.functionsFetch = Xi(t2, e8, this._getSessionToken.bind(this), o2.global.fetch, o2.tracePropagation, { omitApiKeyAsBearer: true }), this.realtime = this._initRealtimeClient($({ headers: this.headers, accessToken: this._getAccessToken.bind(this), fetch: this.fetch }, o2.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((e9) => this.realtime.setAuth(e9)).catch((e9) => console.warn(`Failed to set initial Realtime auth token:`, e9)), this.rest = new fe(new URL(`rest/v1`, r2).href, { headers: this.headers, schema: o2.db.schema, fetch: this.fetch, timeout: o2.db.timeout, urlLengthLimit: o2.db.urlLengthLimit, retry: o2.db.retry }), this.storage = new Sn(this.storageUrl.href, this.headers, this.fetch, n2?.storage), o2.accessToken || this._listenForAuthEvents();
  }
  get functions() {
    return new u(this.functionsUrl.href, { headers: this.headers, customFetch: this.functionsFetch });
  }
  from(e8) {
    return this.rest.from(e8);
  }
  schema(e8) {
    return this.rest.schema(e8);
  }
  getOpenApiSpec() {
    return this.rest.getOpenApiSpec();
  }
  rpc(e8, t2 = {}, n2 = { head: false, get: false, count: void 0 }) {
    return this.rest.rpc(e8, t2, n2);
  }
  channel(e8, t2 = { config: {} }) {
    return this.realtime.channel(e8, t2);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(e8) {
    return this.realtime.removeChannel(e8);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getSessionToken() {
    var e8 = this;
    if (e8.accessToken) return await e8.accessToken();
    let { data: t2 } = await e8.auth.getSession();
    return t2.session?.access_token ?? null;
  }
  async _getAccessToken() {
    var e8 = this;
    return await e8._getSessionToken() ?? e8.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: e8, persistSession: t2, detectSessionInUrl: n2, storage: r2, userStorage: i2, storageKey: a2, flowType: o2, lock: s2, debug: c2, throwOnError: l2, experimental: u2, lockAcquireTimeout: d2, skipAutoInitialize: f2 }, p2, m2) {
    let h2 = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
    return new oa({ url: this.authUrl.href, headers: $($({}, h2), p2), storageKey: a2, autoRefreshToken: e8, persistSession: t2, detectSessionInUrl: n2, storage: r2, userStorage: i2, flowType: o2, lock: s2, debug: c2, throwOnError: l2, experimental: u2, fetch: m2, lockAcquireTimeout: d2, skipAutoInitialize: f2, hasCustomAuthorizationHeader: Object.keys(this.headers).some((e9) => e9.toLowerCase() === `authorization`) });
  }
  _initRealtimeClient(e8) {
    return new Tt(this.realtimeUrl.href, $($({}, e8), {}, { params: $($({}, { apikey: this.supabaseKey }), e8?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e8, t2) => {
      this._handleTokenChanged(e8, `CLIENT`, t2?.access_token);
    });
  }
  _handleTokenChanged(e8, t2, n2) {
    (e8 === `TOKEN_REFRESHED` || e8 === `SIGNED_IN` || e8 === `INITIAL_SESSION`) && this.changedAccessToken !== n2 ? (this.changedAccessToken = n2, this.realtime.setAuth(n2)) : e8 === `SIGNED_OUT` && (this.realtime.setAuth(), t2 == `STORAGE` && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
var ca = (e8, t2, n2) => new sa(e8, t2, n2);
function la() {
  if (typeof window < `u` || globalThis.Deno !== void 0) return false;
  let e8 = globalThis.process;
  if (!e8) return false;
  let t2 = e8.version;
  if (t2 == null) return false;
  let n2 = t2.match(/^v(\d+)\./);
  return n2 ? parseInt(n2[1], 10) <= 20 : false;
}
la() && console.warn(`\u26A0\uFE0F  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);
var ua = ca(`https://sgpjbmkswbvhdsbrifpa.supabase.co`, `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`);

export {
  ua
};
