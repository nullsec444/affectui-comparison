// reconstructed/supabaseClient-MZLUyPvg.jsx
var e = /* @__PURE__ */ Symbol.for(`@supabase/supabase-js.traceContextExtractor`);
function t() {
  return globalThis[e];
}
function n(e8, t2) {
  const n2 = {};
  for (var r2 in e8) {
    if (Object.prototype.hasOwnProperty.call(e8, r2) && t2.indexOf(r2) < 0) {
      n2[r2] = e8[r2];
    }
  }
  if (e8 != null && typeof Object.getOwnPropertySymbols == `function`) {
    for (var i2 = 0, r2 = Object.getOwnPropertySymbols(e8); i2 < r2.length; i2++) {
      if (t2.indexOf(r2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(e8, r2[i2])) {
        n2[r2[i2]] = e8[r2[i2]];
      }
    }
  }
  return n2;
}
function r(e8, t2, n2, r2) {
  function i2(e9) {
    if (e9 instanceof n2) {
      return e9;
    }
    return new n2(function(t3) {
      t3(e9);
    });
  }
  return new (n2 ||= Promise)(function(n3, a2) {
    function o2(e9) {
      try {
        c2(r2.next(e9));
      } catch (error) {
        a2(error);
      }
    }
    function s2(e9) {
      try {
        c2(r2.throw(e9));
      } catch (error) {
        a2(error);
      }
    }
    function c2(e9) {
      if (e9.done) {
        n3(e9.value);
      } else {
        i2(e9.value).then(o2, s2);
      }
    }
    c2((r2 = r2.apply(e8, t2 || [])).next());
  });
}
var i = (customFetch) => {
  if (customFetch) {
    return (...t2) => customFetch(...t2);
  }
  return (...e8) => fetch(...e8);
};
var a = class extends Error {
  constructor(e8, t2 = `FunctionsError`, n2) {
    super(e8);
    this.name = t2;
    this.context = n2;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
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
((e8) => {
  e8.Any = `any`;
  e8.ApNortheast1 = `ap-northeast-1`;
  e8.ApNortheast2 = `ap-northeast-2`;
  e8.ApSouth1 = `ap-south-1`;
  e8.ApSoutheast1 = `ap-southeast-1`;
  e8.ApSoutheast2 = `ap-southeast-2`;
  e8.CaCentral1 = `ca-central-1`;
  e8.EuCentral1 = `eu-central-1`;
  e8.EuWest1 = `eu-west-1`;
  e8.EuWest2 = `eu-west-2`;
  e8.EuWest3 = `eu-west-3`;
  e8.SaEast1 = `sa-east-1`;
  e8.UsEast1 = `us-east-1`;
  e8.UsWest1 = `us-west-1`;
  e8.UsWest2 = `us-west-2`;
})(l ||= {});
var u = class {
  constructor(e8, {
    headers = {},
    customFetch,
    region = l.Any
  } = {}) {
    this.url = e8;
    this.headers = headers;
    this.region = region;
    this.fetch = i(customFetch);
  }
  setAuth(e8) {
    this.headers.Authorization = `Bearer ${e8}`;
  }
  invoke(e8) {
    return r(this, arguments, void 0, function* (e9, t2 = {}) {
      let n2;
      let r2;
      let i2;
      let a2;
      try {
        let {
          headers,
          method,
          body,
          signal,
          timeout
        } = t2;
        let p2 = {};
        let {
          region
        } = t2;
        region ||= this.region;
        let h2 = new URL(`${this.url}/${e9}`);
        if (region && region !== `any`) {
          p2[`x-region`] = region;
          h2.searchParams.set(`forceFunctionRegion`, region);
        }
        let g;
        let ee = !!headers && Object.keys(headers).some((e10) => e10.toLowerCase() === `content-type`);
        if (body && !ee) {
          if (typeof Blob < `u` && body instanceof Blob || body instanceof ArrayBuffer) {
            p2[`Content-Type`] = `application/octet-stream`;
            g = body;
          } else if (typeof body == `string`) {
            p2[`Content-Type`] = `text/plain`;
            g = body;
          } else if (typeof FormData < `u` && body instanceof FormData) {
            g = body;
          } else {
            p2[`Content-Type`] = `application/json`;
            g = JSON.stringify(body);
          }
        } else {
          g = body && typeof body != `string` && !(typeof Blob < `u` && body instanceof Blob) && !(body instanceof ArrayBuffer) && !(typeof FormData < `u` && body instanceof FormData) ? JSON.stringify(body) : body;
        }
        let signal_1 = signal;
        if (timeout) {
          i2 = new AbortController();
          r2 = setTimeout(() => i2.abort(), timeout);
          if (signal) {
            signal_1 = i2.signal;
            a2 = () => i2.abort();
            signal.addEventListener(`abort`, a2);
          } else {
            signal_1 = i2.signal;
          }
        }
        let response = yield this.fetch(h2.toString(), {
          method: method || `POST`,
          headers: {
            ...p2,
            ...this.headers,
            ...headers
          },
          body: g,
          signal: signal_1
        }).catch((e10) => {
          throw new o(e10);
        });
        let ne = response.headers.get(`x-relay-error`);
        if (ne && ne === `true`) {
          throw new s(response);
        }
        if (!response.ok) {
          throw new c(response);
        }
        let v = (response.headers.get(`Content-Type`) ?? `text/plain`).split(`;`)[0].trim().toLowerCase();
        let re2;
        re2 = v === `application/json` ? yield response.json() : v === `application/octet-stream` || v === `application/pdf` ? yield response.blob() : v === `text/event-stream` ? response : v === `multipart/form-data` ? yield response.formData() : yield response.text();
        return {
          data: re2,
          error: null,
          response
        };
      } catch (error) {
        return {
          data: null,
          error,
          response: error instanceof c || error instanceof s ? error.context : void 0
        };
      } finally {
        if (r2) {
          clearTimeout(r2);
        }
        if (a2) {
          if ((n2 = t2.signal) != null) {
            n2.removeEventListener(`abort`, a2);
          }
        }
      }
    });
  }
};
var d = class extends Error {
  constructor(e8) {
    super(e8.message);
    this.name = `PostgrestError`;
    this.details = e8.details;
    this.hint = e8.hint;
    this.code = e8.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
var f = 3;
var p = (e8) => Math.min(1e3 * 2 ** e8, 3e4);
var m = [520, 503];
var h = [`GET`, `HEAD`, `OPTIONS`];
function re(e8, signal) {
  return new Promise((resolve) => {
    if (signal?.aborted) {
      resolve();
      return;
    }
    let r2 = setTimeout(() => {
      signal?.removeEventListener(`abort`, i2);
      resolve();
    }, e8);
    function i2() {
      clearTimeout(r2);
      resolve();
    }
    signal?.addEventListener(`abort`, i2);
  });
}
function ie(method, status, n2, r2) {
  return !(!r2 || n2 >= f || !h.includes(method) || !m.includes(status));
}
async function ae(e8, t2, n2, r2) {
  let i2 = 0;
  while (true) {
    let a2 = {
      ...n2.headers
    };
    if (i2 > 0) {
      a2[`X-Retry-Count`] = String(i2);
    }
    let o2;
    try {
      o2 = await e8(t2, {
        method: n2.method,
        headers: a2,
        body: n2.body,
        signal: n2.signal
      });
    } catch (error) {
      if (error?.name === `AbortError` || error?.code === `ABORT_ERR` || !h.includes(n2.method)) {
        throw error;
      }
      if (r2 && i2 < f) {
        let e9 = p(i2);
        i2++;
        await re(e9, n2.signal);
        continue;
      }
      throw error;
    }
    if (ie(n2.method, o2.status, i2, r2)) {
      let e9 = o2.headers?.get(`Retry-After`) ?? null;
      let t3 = e9 === null ? p(i2) : Math.max(0, parseInt(e9, 10) || 0) * 1e3;
      await o2.text();
      i2++;
      await re(t3, n2.signal);
      continue;
    }
    return o2;
  }
}
var oe = class {
  constructor(e8) {
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = e8.method;
    this.url = e8.url;
    this.headers = new Headers(e8.headers);
    this.schema = e8.schema;
    this.body = e8.body;
    this.shouldThrowOnError = e8.shouldThrowOnError ?? false;
    this.signal = e8.signal;
    this.isMaybeSingle = e8.isMaybeSingle ?? false;
    this.shouldStripNulls = e8.shouldStripNulls ?? false;
    this.urlLengthLimit = e8.urlLengthLimit ?? 8e3;
    this.retryEnabled = e8.retry ?? true;
    this.fetch = e8.fetch ? e8.fetch : fetch;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  stripNulls() {
    if (this.headers.get(`Accept`) === `text/csv`) {
      throw Error(`stripNulls() cannot be used with csv()`);
    }
    this.shouldStripNulls = true;
    return this;
  }
  setHeader(e8, t2) {
    this.headers = new Headers(this.headers);
    this.headers.set(e8, t2);
    return this;
  }
  retry(e8) {
    this.retryEnabled = e8;
    return this;
  }
  then(e8, t2) {
    const n2 = this;
    if (this.schema !== void 0) {
      if ([`GET`, `HEAD`].includes(this.method)) {
        this.headers.set(`Accept-Profile`, this.schema);
      } else {
        this.headers.set(`Content-Profile`, this.schema);
      }
    }
    if (this.method !== `GET` && this.method !== `HEAD`) {
      this.headers.set(`Content-Type`, `application/json`);
    }
    if (this.shouldStripNulls) {
      let e9 = this.headers.get(`Accept`);
      if (e9 === `application/vnd.pgrst.object+json`) {
        this.headers.set(`Accept`, `application/vnd.pgrst.object+json;nulls=stripped`);
      } else if (!e9 || e9 === `application/json`) {
        this.headers.set(`Accept`, `application/vnd.pgrst.array+json;nulls=stripped`);
      }
    }
    let fetch2 = this.fetch;
    let i2 = (async () => {
      let e9 = {};
      n2.headers.forEach((t4, n3) => {
        e9[n3] = t4;
      });
      let t3 = await ae(fetch2, n2.url.toString(), {
        method: n2.method,
        headers: e9,
        body: JSON.stringify(n2.body, (e10, t4) => {
          if (typeof t4 == `bigint`) {
            return t4.toString();
          }
          return t4;
        }),
        signal: n2.signal
      }, n2.retryEnabled);
      return await n2.processResponse(t3);
    })();
    if (!this.shouldThrowOnError) {
      i2 = i2.catch((e9) => {
        let t3 = ``;
        let hint = ``;
        let code = ``;
        let i3 = e9?.cause;
        if (i3) {
          let n3 = i3?.message ?? ``;
          let r2 = i3?.code ?? ``;
          t3 = `${e9?.name ?? `FetchError`}: ${e9?.message}`;
          t3 += `

Caused by: ${i3?.name ?? `Error`}: ${n3}`;
          if (r2) {
            t3 += ` (${r2})`;
          }
          if (i3?.stack) {
            t3 += `
${i3.stack}`;
          }
        } else {
          t3 = e9?.stack ?? ``;
        }
        let length = this.url.toString().length;
        if (e9?.name === `AbortError` || e9?.code === `ABORT_ERR`) {
          code = ``;
          hint = `Request was aborted (timeout or manual cancellation)`;
          if (length > this.urlLengthLimit) {
            hint += `. Note: Your request URL is ${length} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if (i3?.name === `HeadersOverflowError` || i3?.code === `UND_ERR_HEADERS_OVERFLOW`) {
          code = ``;
          hint = `HTTP headers exceeded server limits (typically 16KB)`;
          if (length > this.urlLengthLimit) {
            hint += `. Your request URL is ${length} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          success: false,
          error: {
            message: `${e9?.name ?? `FetchError`}: ${e9?.message}`,
            details: t3,
            hint,
            code
          },
          data: null,
          count: null,
          status: 0,
          statusText: ``
        };
      });
    }
    return i2.then(e8, t2);
  }
  async processResponse(e8) {
    const t2 = this;
    let n2 = null;
    let r2 = null;
    let count = null;
    let e_status = e8.status;
    let e_statusText = e8.statusText;
    if (e8.ok) {
      if (t2.method !== `HEAD`) {
        let i2 = await e8.text();
        if (i2 !== ``) {
          if (t2.headers.get(`Accept`) === `text/csv`) {
            r2 = i2;
          } else if (t2.headers.get(`Accept`) && t2.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)) {
            r2 = i2;
          } else {
            try {
              r2 = JSON.parse(i2);
            } catch {
              n2 = {
                message: i2
              };
              r2 = null;
              if (t2.shouldThrowOnError) {
                throw new d({
                  message: i2,
                  details: ``,
                  hint: ``,
                  code: ``
                });
              }
            }
          }
        }
      }
      let s2 = t2.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/);
      let c2 = e8.headers.get(`content-range`)?.split(`/`);
      if (s2 && c2 && c2.length > 1) {
        count = parseInt(c2[1]);
      }
      if (t2.isMaybeSingle && Array.isArray(r2)) {
        if (r2.length > 1) {
          n2 = {
            code: `PGRST116`,
            details: `Results contain ${r2.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: `JSON object requested, multiple (or no) rows returned`
          };
          r2 = null;
          count = null;
          e_status = 406;
          e_statusText = `Not Acceptable`;
          if (t2.shouldThrowOnError) {
            throw new d({
              ...n2,
              hint: n2.hint ?? ``
            });
          }
        } else {
          r2 = r2.length === 1 ? r2[0] : null;
        }
      }
    } else {
      let i2 = await e8.text();
      try {
        n2 = JSON.parse(i2);
        if (Array.isArray(n2) && e8.status === 404) {
          r2 = [];
          n2 = null;
          e_status = 200;
          e_statusText = `OK`;
        }
      } catch {
        if (e8.status === 404 && i2 === ``) {
          e_status = 204;
          e_statusText = `No Content`;
        } else {
          n2 = {
            message: i2
          };
        }
      }
      if (n2 && t2.shouldThrowOnError) {
        throw new d(n2);
      }
    }
    return {
      success: n2 === null,
      error: n2,
      data: r2,
      count,
      status: e_status,
      statusText: e_statusText
    };
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
    let t2 = false;
    let n2 = (e8 ?? `*`).split(``).map((e9) => {
      if (/\s/.test(e9) && !t2) {
        return ``;
      }
      if (e9 === `"`) {
        t2 = !t2;
      }
      return e9;
    }).join(``);
    this.url.searchParams.set(`select`, n2);
    this.headers.append(`Prefer`, `return=representation`);
    return this;
  }
  order(e8, {
    ascending = true,
    nullsFirst,
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let a2 = referencedTable ? `${referencedTable}.order` : `order`;
    let o2 = this.url.searchParams.get(a2);
    this.url.searchParams.set(a2, `${o2 ? `${o2},` : ``}${e8}.${ascending ? `asc` : `desc`}${nullsFirst === void 0 ? `` : nullsFirst ? `.nullsfirst` : `.nullslast`}`);
    return this;
  }
  limit(e8, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let r2 = referencedTable === void 0 ? `limit` : `${referencedTable}.limit`;
    this.url.searchParams.set(r2, `${e8}`);
    return this;
  }
  range(e8, t2, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let i2 = referencedTable === void 0 ? `offset` : `${referencedTable}.offset`;
    let a2 = referencedTable === void 0 ? `limit` : `${referencedTable}.limit`;
    this.url.searchParams.set(i2, `${e8}`);
    this.url.searchParams.set(a2, `${t2 - e8 + 1}`);
    return this;
  }
  abortSignal(e8) {
    this.signal = e8;
    return this;
  }
  single() {
    this.headers.set(`Accept`, `application/vnd.pgrst.object+json`);
    return this;
  }
  maybeSingle() {
    this.isMaybeSingle = true;
    return this;
  }
  csv() {
    this.headers.set(`Accept`, `text/csv`);
    return this;
  }
  geojson() {
    this.headers.set(`Accept`, `application/geo+json`);
    return this;
  }
  explain({
    analyze = false,
    verbose = false,
    settings = false,
    buffers = false,
    wal = false,
    format = `text`
  } = {}) {
    let o2 = [analyze ? `analyze` : null, verbose ? `verbose` : null, settings ? `settings` : null, buffers ? `buffers` : null, wal ? `wal` : null].filter(Boolean).join(`|`);
    let s2 = this.headers.get(`Accept`) ?? `application/json`;
    this.headers.set(`Accept`, `application/vnd.pgrst.plan+${format}; for="${s2}"; options=${o2};`);
    return this;
  }
  rollback() {
    this.headers.append(`Prefer`, `tx=rollback`);
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(e8) {
    this.headers.append(`Prefer`, `handling=strict`);
    this.headers.append(`Prefer`, `max-affected=${e8}`);
    return this;
  }
};
var ce = RegExp(`[,()]`);
var y = class extends se {
  throwOnError() {
    return super.throwOnError();
  }
  eq(e8, t2) {
    this.url.searchParams.append(e8, `eq.${t2}`);
    return this;
  }
  neq(e8, t2) {
    this.url.searchParams.append(e8, `neq.${t2}`);
    return this;
  }
  gt(e8, t2) {
    this.url.searchParams.append(e8, `gt.${t2}`);
    return this;
  }
  gte(e8, t2) {
    this.url.searchParams.append(e8, `gte.${t2}`);
    return this;
  }
  lt(e8, t2) {
    this.url.searchParams.append(e8, `lt.${t2}`);
    return this;
  }
  lte(e8, t2) {
    this.url.searchParams.append(e8, `lte.${t2}`);
    return this;
  }
  like(e8, t2) {
    this.url.searchParams.append(e8, `like.${t2}`);
    return this;
  }
  likeAllOf(e8, t2) {
    this.url.searchParams.append(e8, `like(all).{${t2.join(`,`)}}`);
    return this;
  }
  likeAnyOf(e8, t2) {
    this.url.searchParams.append(e8, `like(any).{${t2.join(`,`)}}`);
    return this;
  }
  ilike(e8, t2) {
    this.url.searchParams.append(e8, `ilike.${t2}`);
    return this;
  }
  ilikeAllOf(e8, t2) {
    this.url.searchParams.append(e8, `ilike(all).{${t2.join(`,`)}}`);
    return this;
  }
  ilikeAnyOf(e8, t2) {
    this.url.searchParams.append(e8, `ilike(any).{${t2.join(`,`)}}`);
    return this;
  }
  regexMatch(e8, t2) {
    this.url.searchParams.append(e8, `match.${t2}`);
    return this;
  }
  regexIMatch(e8, t2) {
    this.url.searchParams.append(e8, `imatch.${t2}`);
    return this;
  }
  is(e8, t2) {
    this.url.searchParams.append(e8, `is.${t2}`);
    return this;
  }
  isDistinct(e8, t2) {
    this.url.searchParams.append(e8, `isdistinct.${t2}`);
    return this;
  }
  in(e8, t2) {
    let n2 = Array.from(new Set(t2)).map((e9) => {
      if (typeof e9 == `string` && ce.test(e9)) {
        return `"${e9}"`;
      }
      return `${e9}`;
    }).join(`,`);
    this.url.searchParams.append(e8, `in.(${n2})`);
    return this;
  }
  notIn(e8, t2) {
    let n2 = Array.from(new Set(t2)).map((e9) => {
      if (typeof e9 == `string` && ce.test(e9)) {
        return `"${e9}"`;
      }
      return `${e9}`;
    }).join(`,`);
    this.url.searchParams.append(e8, `not.in.(${n2})`);
    return this;
  }
  contains(e8, t2) {
    if (typeof t2 == `string`) {
      this.url.searchParams.append(e8, `cs.${t2}`);
    } else if (Array.isArray(t2)) {
      this.url.searchParams.append(e8, `cs.{${t2.join(`,`)}}`);
    } else {
      this.url.searchParams.append(e8, `cs.${JSON.stringify(t2)}`);
    }
    return this;
  }
  containedBy(e8, t2) {
    if (typeof t2 == `string`) {
      this.url.searchParams.append(e8, `cd.${t2}`);
    } else if (Array.isArray(t2)) {
      this.url.searchParams.append(e8, `cd.{${t2.join(`,`)}}`);
    } else {
      this.url.searchParams.append(e8, `cd.${JSON.stringify(t2)}`);
    }
    return this;
  }
  rangeGt(e8, t2) {
    this.url.searchParams.append(e8, `sr.${t2}`);
    return this;
  }
  rangeGte(e8, t2) {
    this.url.searchParams.append(e8, `nxl.${t2}`);
    return this;
  }
  rangeLt(e8, t2) {
    this.url.searchParams.append(e8, `sl.${t2}`);
    return this;
  }
  rangeLte(e8, t2) {
    this.url.searchParams.append(e8, `nxr.${t2}`);
    return this;
  }
  rangeAdjacent(e8, t2) {
    this.url.searchParams.append(e8, `adj.${t2}`);
    return this;
  }
  overlaps(e8, t2) {
    if (typeof t2 == `string`) {
      this.url.searchParams.append(e8, `ov.${t2}`);
    } else {
      this.url.searchParams.append(e8, `ov.{${t2.join(`,`)}}`);
    }
    return this;
  }
  textSearch(e8, t2, {
    config,
    type
  } = {}) {
    let i2 = ``;
    if (type === `plain`) {
      i2 = `pl`;
    } else if (type === `phrase`) {
      i2 = `ph`;
    } else if (type === `websearch`) {
      i2 = `w`;
    }
    let a2 = config === void 0 ? `` : `(${config})`;
    this.url.searchParams.append(e8, `${i2}fts${a2}.${t2}`);
    return this;
  }
  match(e8) {
    Object.entries(e8).filter(([e9, t2]) => t2 !== void 0).forEach(([e9, t2]) => {
      this.url.searchParams.append(e9, `eq.${t2}`);
    });
    return this;
  }
  not(e8, t2, n2) {
    this.url.searchParams.append(e8, `not.${t2}.${n2}`);
    return this;
  }
  or(e8, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let r2 = referencedTable ? `${referencedTable}.or` : `or`;
    this.url.searchParams.append(r2, `(${e8})`);
    return this;
  }
  filter(e8, t2, n2) {
    this.url.searchParams.append(e8, `${t2}.${n2}`);
    return this;
  }
};
var le = class {
  constructor(e8, {
    headers = {},
    schema,
    fetch: fetch2,
    urlLengthLimit = 8e3,
    retry
  }) {
    this.url = e8;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch2;
    this.urlLengthLimit = urlLengthLimit;
    this.retry = retry;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(e8, t2) {
    let {
      head: head2 = false,
      count
    } = t2 ?? {};
    let i2 = head2 ? `HEAD` : `GET`;
    let a2 = false;
    let o2 = (e8 ?? `*`).split(``).map((e9) => {
      if (/\s/.test(e9) && !a2) {
        return ``;
      }
      if (e9 === `"`) {
        a2 = !a2;
      }
      return e9;
    }).join(``);
    let {
      url: url2,
      headers
    } = this.cloneRequestState();
    url2.searchParams.set(`select`, o2);
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: i2,
      url: url2,
      headers,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  insert(e8, {
    count,
    defaultToNull = true
  } = {}) {
    let {
      url: url2,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append(`Prefer`, `missing=default`);
    }
    if (Array.isArray(e8)) {
      let t2 = e8.reduce((acc, item) => acc.concat(Object.keys(item)), []);
      if (t2.length > 0) {
        let e9 = [...new Set(t2)].map((e10) => `"${e10}"`);
        url2.searchParams.set(`columns`, e9.join(`,`));
      }
    }
    return new y({
      method: `POST`,
      url: url2,
      headers,
      schema: this.schema,
      body: e8,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  upsert(e8, {
    onConflict,
    ignoreDuplicates = false,
    count,
    defaultToNull = true
  } = {}) {
    let {
      url: url2,
      headers
    } = this.cloneRequestState();
    headers.append(`Prefer`, `resolution=${ignoreDuplicates ? `ignore` : `merge`}-duplicates`);
    if (onConflict !== void 0) {
      url2.searchParams.set(`on_conflict`, onConflict);
    }
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append(`Prefer`, `missing=default`);
    }
    if (Array.isArray(e8)) {
      let t2 = e8.reduce((acc, item) => acc.concat(Object.keys(item)), []);
      if (t2.length > 0) {
        let e9 = [...new Set(t2)].map((e10) => `"${e10}"`);
        url2.searchParams.set(`columns`, e9.join(`,`));
      }
    }
    return new y({
      method: `POST`,
      url: url2,
      headers,
      schema: this.schema,
      body: e8,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  update(e8, {
    count
  } = {}) {
    let {
      url: url2,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: `PATCH`,
      url: url2,
      headers,
      schema: this.schema,
      body: e8,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  delete({
    count
  } = {}) {
    let {
      url: url2,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: `DELETE`,
      url: url2,
      headers,
      schema: this.schema,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function ue(e8, statusText) {
  try {
    let t2 = JSON.parse(e8);
    if (t2 && typeof t2 == `object` && !Array.isArray(t2)) {
      return new d({
        message: String(t2.message ?? e8),
        details: t2.details ?? ``,
        hint: t2.hint ?? ``,
        code: t2.code ?? ``
      });
    }
  } catch {
  }
  return new d({
    message: e8 || statusText,
    details: ``,
    hint: ``,
    code: ``
  });
}
function de(error, t2, statusText) {
  let r2 = error;
  return {
    success: false,
    error: new d({
      message: `${r2?.name ?? `FetchError`}: ${r2?.message}`,
      details: ``,
      hint: ``,
      code: ``
    }),
    data: null,
    count: null,
    status: t2,
    statusText
  };
}
var fe = class e2 {
  constructor(e8, {
    headers = {},
    schema,
    fetch: fetch2,
    timeout,
    urlLengthLimit = 8e3,
    retry
  } = {}) {
    this.url = e8;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.urlLengthLimit = urlLengthLimit;
    let s2 = fetch2 ?? globalThis.fetch;
    this.fetch = timeout !== void 0 && timeout > 0 ? (e9, t2) => {
      let n2 = new AbortController();
      let r2 = setTimeout(() => n2.abort(), timeout);
      let a2 = t2?.signal;
      if (a2) {
        if (a2.aborted) {
          clearTimeout(r2);
          return s2(e9, t2);
        }
        let i2 = () => {
          clearTimeout(r2);
          n2.abort();
        };
        a2.addEventListener(`abort`, i2, {
          once: true
        });
        return s2(e9, {
          ...t2,
          signal: n2.signal
        }).finally(() => {
          clearTimeout(r2);
          a2.removeEventListener(`abort`, i2);
        });
      }
      return s2(e9, {
        ...t2,
        signal: n2.signal
      }).finally(() => clearTimeout(r2));
    } : s2;
    this.retry = retry;
  }
  from(e8) {
    if (!e8 || typeof e8 != `string` || e8.trim() === ``) {
      throw Error(`Invalid relation name: relation must be a non-empty string.`);
    }
    return new le(new URL(`${this.url}/${e8}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  schema(schema) {
    return new e2(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  async getOpenApiSpec() {
    const e8 = this;
    let t2 = new Headers(e8.headers);
    t2.set(`Accept`, `application/openapi+json`);
    if (e8.schemaName) {
      t2.set(`Accept-Profile`, e8.schemaName);
    }
    let n2 = {};
    t2.forEach((e9, t3) => {
      n2[t3] = e9;
    });
    let r2 = e8.fetch ?? globalThis.fetch;
    let i2;
    try {
      i2 = await ae(r2, `${e8.url}/`, {
        method: `GET`,
        headers: n2
      }, e8.retry ?? true);
    } catch (error) {
      return de(error, 0, ``);
    }
    let a2;
    try {
      a2 = await i2.text();
    } catch (error) {
      return de(error, i2.status, i2.statusText);
    }
    if (i2.ok) {
      try {
        return {
          success: true,
          error: null,
          data: JSON.parse(a2),
          count: null,
          status: i2.status,
          statusText: i2.statusText
        };
      } catch {
      }
    }
    return {
      success: false,
      error: ue(a2, i2.statusText),
      data: null,
      count: null,
      status: i2.status,
      statusText: i2.statusText
    };
  }
  rpc(e8, t2 = {}, {
    head: head2 = false,
    get: get2 = false,
    count
  } = {}) {
    let a2;
    let url_1 = new URL(`${this.url}/rpc/${e8}`);
    let s2;
    let c2 = (e9) => typeof e9 == `object` && !!e9 && (!Array.isArray(e9) || e9.some(c2));
    let l2 = head2 && Object.values(t2).some(c2);
    if (l2) {
      a2 = `POST`;
      s2 = t2;
    } else if (head2 || get2) {
      a2 = head2 ? `HEAD` : `GET`;
      Object.entries(t2).filter(([e9, t3]) => t3 !== void 0).map(([e9, t3]) => [e9, Array.isArray(t3) ? `{${t3.join(`,`)}}` : `${t3}`]).forEach(([e9, t3]) => {
        url_1.searchParams.append(e9, t3);
      });
    } else {
      a2 = `POST`;
      s2 = t2;
    }
    let u2 = new Headers(this.headers);
    if (l2) {
      u2.set(`Prefer`, count ? `count=${count},return=minimal` : `return=minimal`);
    } else if (count) {
      u2.set(`Prefer`, `count=${count}`);
    }
    return new y({
      method: a2,
      url: url_1,
      headers: u2,
      schema: this.schemaName,
      body: s2,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
var pe = class {
  constructor() {
  }
  static detectEnvironment() {
    if (typeof WebSocket < `u`) {
      return {
        type: `native`,
        wsConstructor: WebSocket
      };
    }
    let e8 = globalThis;
    if (typeof globalThis < `u` && e8.WebSocket !== void 0) {
      return {
        type: `native`,
        wsConstructor: e8.WebSocket
      };
    }
    let t2 = typeof global < `u` ? global : void 0;
    if (t2 && t2.WebSocket !== void 0) {
      return {
        type: `native`,
        wsConstructor: t2.WebSocket
      };
    }
    if (typeof globalThis < `u` && e8.WebSocketPair !== void 0 && globalThis.WebSocket === void 0) {
      return {
        type: `cloudflare`,
        error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,
        workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`
      };
    }
    if (typeof globalThis < `u` && e8.EdgeRuntime || typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`)) {
      return {
        type: `unsupported`,
        error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,
        workaround: `Use serverless functions or a different deployment target for WebSocket functionality.`
      };
    }
    let globalThis_process = globalThis.process;
    if (globalThis_process) {
      let e9 = globalThis_process.versions;
      if (e9 && e9.node) {
        return {
          type: `unsupported`,
          error: `Node.js detected but native WebSocket not found.`,
          workaround: `Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`
        };
      }
    }
    return {
      type: `unsupported`,
      error: `Unknown JavaScript runtime without WebSocket support.`,
      workaround: `Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`
    };
  }
  static getWebSocketConstructor() {
    let e8 = this.detectEnvironment();
    if (e8.wsConstructor) {
      return e8.wsConstructor;
    }
    let t2 = e8.error || `WebSocket not supported in this environment.`;
    if (e8.workaround) {
      t2 += `

Suggested solution: ${e8.workaround}`;
    }
    throw Error(t2);
  }
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === `native`;
    } catch {
      return false;
    }
  }
};
var version = `realtime-js/2.117.2`;
var he = `1.0.0`;
var ge = `2.0.0`;
var _e = ge;
var ve = 1e4;
var ye = 15e3;
var be = 1e4;
var b = {
  closed: `closed`,
  errored: `errored`,
  joined: `joined`,
  joining: `joining`,
  leaving: `leaving`
};
var xe = {
  close: `phx_close`,
  error: `phx_error`,
  join: `phx_join`,
  reply: `phx_reply`,
  leave: `phx_leave`,
  access_token: `access_token`
};
var Se = {
  connecting: `connecting`,
  open: `open`,
  closing: `closing`,
  closed: `closed`
};
var Ce = class {
  constructor(e8) {
    this.HEADER_LENGTH = 1;
    this.USER_BROADCAST_PUSH_META_LENGTH = 6;
    this.KINDS = {
      userBroadcastPush: 3,
      userBroadcast: 4
    };
    this.BINARY_ENCODING = 0;
    this.JSON_ENCODING = 1;
    this.BROADCAST_EVENT = `broadcast`;
    this.allowedMetadataKeys = [];
    this.allowedMetadataKeys = e8 ?? [];
  }
  encode(e8, t2) {
    if (e8.event === this.BROADCAST_EVENT && !(e8.payload instanceof ArrayBuffer) && typeof e8.payload.event == `string`) {
      return t2(this._binaryEncodeUserBroadcastPush(e8));
    }
    let n2 = [e8.join_ref, e8.ref, e8.topic, e8.event, e8.payload];
    return t2(JSON.stringify(n2));
  }
  _binaryEncodeUserBroadcastPush(e8) {
    if (this._isArrayBuffer(e8.payload?.payload)) {
      return this._encodeBinaryUserBroadcastPush(e8);
    }
    return this._encodeJsonUserBroadcastPush(e8);
  }
  _encodeBinaryUserBroadcastPush(e8) {
    let t2 = e8.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e8, this.BINARY_ENCODING, t2);
  }
  _encodeJsonUserBroadcastPush(e8) {
    let t2 = e8.payload?.payload ?? {};
    let buffer = new TextEncoder().encode(JSON.stringify(t2)).buffer;
    return this._encodeUserBroadcastPush(e8, this.JSON_ENCODING, buffer);
  }
  _encodeUserBroadcastPush(e8, t2, n2) {
    let r2 = new TextEncoder();
    let i2 = r2.encode(e8.topic);
    let a2 = r2.encode(e8.ref ?? ``);
    let o2 = r2.encode(e8.join_ref ?? ``);
    let s2 = r2.encode(e8.payload.event);
    let c2 = this.allowedMetadataKeys ? this._pick(e8.payload, this.allowedMetadataKeys) : {};
    let l2 = r2.encode(Object.keys(c2).length === 0 ? `` : JSON.stringify(c2));
    if (o2.length > 255) {
      throw Error(`joinRef length ${o2.length} exceeds maximum of 255`);
    }
    if (a2.length > 255) {
      throw Error(`ref length ${a2.length} exceeds maximum of 255`);
    }
    if (i2.length > 255) {
      throw Error(`topic length ${i2.length} exceeds maximum of 255`);
    }
    if (s2.length > 255) {
      throw Error(`userEvent length ${s2.length} exceeds maximum of 255`);
    }
    if (l2.length > 255) {
      throw Error(`metadata length ${l2.length} exceeds maximum of 255`);
    }
    let u2 = this.USER_BROADCAST_PUSH_META_LENGTH + o2.length + a2.length + i2.length + s2.length + l2.length;
    let d2 = new ArrayBuffer(this.HEADER_LENGTH + u2);
    let f2 = new DataView(d2);
    let p2 = new Uint8Array(d2);
    let m2 = 0;
    f2.setUint8(m2++, this.KINDS.userBroadcastPush);
    f2.setUint8(m2++, o2.length);
    f2.setUint8(m2++, a2.length);
    f2.setUint8(m2++, i2.length);
    f2.setUint8(m2++, s2.length);
    f2.setUint8(m2++, l2.length);
    f2.setUint8(m2++, t2);
    p2.set(o2, m2);
    m2 += o2.length;
    p2.set(a2, m2);
    m2 += a2.length;
    p2.set(i2, m2);
    m2 += i2.length;
    p2.set(s2, m2);
    m2 += s2.length;
    p2.set(l2, m2);
    m2 += l2.length;
    const h2 = new Uint8Array(d2.byteLength + n2.byteLength);
    h2.set(new Uint8Array(d2), 0);
    h2.set(new Uint8Array(n2), d2.byteLength);
    return h2.buffer;
  }
  decode(e8, t2) {
    if (this._isArrayBuffer(e8)) {
      return t2(this._binaryDecode(e8));
    }
    if (typeof e8 == `string`) {
      let [n2, r2, i2, a2, o2] = JSON.parse(e8);
      return t2({
        join_ref: n2,
        ref: r2,
        topic: i2,
        event: a2,
        payload: o2
      });
    }
    return t2({});
  }
  _binaryDecode(e8) {
    let t2 = new DataView(e8);
    let n2 = t2.getUint8(0);
    let r2 = new TextDecoder();
    switch (n2) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e8, t2, r2);
    }
  }
  _decodeUserBroadcast(e8, t2, n2) {
    let r2 = t2.getUint8(1);
    let i2 = t2.getUint8(2);
    let a2 = t2.getUint8(3);
    let o2 = t2.getUint8(4);
    let s2 = this.HEADER_LENGTH + 4;
    let c2 = n2.decode(e8.slice(s2, s2 + r2));
    s2 += r2;
    let l2 = n2.decode(e8.slice(s2, s2 + i2));
    s2 += i2;
    let u2 = n2.decode(e8.slice(s2, s2 + a2));
    s2 += a2;
    let d2 = e8.slice(s2, e8.byteLength);
    let f2 = o2 === this.JSON_ENCODING ? JSON.parse(n2.decode(d2)) : d2;
    let p2 = {
      type: this.BROADCAST_EVENT,
      event: l2,
      payload: f2
    };
    if (a2 > 0) {
      p2.meta = JSON.parse(u2);
    }
    return {
      join_ref: null,
      ref: null,
      topic: c2,
      event: this.BROADCAST_EVENT,
      payload: p2
    };
  }
  _isArrayBuffer(e8) {
    return e8 instanceof ArrayBuffer || e8?.constructor?.name === `ArrayBuffer`;
  }
  _pick(e8, t2) {
    if (!e8 || typeof e8 != `object`) {
      return {};
    }
    return Object.fromEntries(Object.entries(e8).filter(([e9]) => t2.includes(e9)));
  }
};
var x;
((e8) => {
  e8.abstime = `abstime`;
  e8.bool = `bool`;
  e8.date = `date`;
  e8.daterange = `daterange`;
  e8.float4 = `float4`;
  e8.float8 = `float8`;
  e8.int2 = `int2`;
  e8.int4 = `int4`;
  e8.int4range = `int4range`;
  e8.int8 = `int8`;
  e8.int8range = `int8range`;
  e8.json = `json`;
  e8.jsonb = `jsonb`;
  e8.money = `money`;
  e8.numeric = `numeric`;
  e8.oid = `oid`;
  e8.reltime = `reltime`;
  e8.text = `text`;
  e8.time = `time`;
  e8.timestamp = `timestamp`;
  e8.timestamptz = `timestamptz`;
  e8.timetz = `timetz`;
  e8.tsrange = `tsrange`;
  e8.tstzrange = `tstzrange`;
})(x ||= {});
var we = (columns, t2, n2 = {}) => {
  let r2 = n2.skipTypes ?? [];
  if (t2) {
    return Object.keys(t2).reduce((acc, key) => {
      acc[key] = Te(key, columns, t2, r2);
      return acc;
    }, {});
  }
  return {};
};
var Te = (key, columns, n2, r2) => {
  let i2 = columns.find((t2) => t2.name === key)?.type;
  let a2 = n2[key];
  if (i2 && !r2.includes(i2)) {
    return Ee(i2, a2);
  }
  return De(a2);
};
var Ee = (e8, t2) => {
  if (e8.charAt(0) === `_`) {
    return je(t2, e8.slice(1, e8.length));
  }
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
    if (!Number.isNaN(t2)) {
      return t2;
    }
  }
  return e8;
};
var Ae = (e8) => {
  if (typeof e8 == `string`) {
    try {
      return JSON.parse(e8);
    } catch {
      return e8;
    }
  }
  return e8;
};
var je = (e8, t2) => {
  if (typeof e8 != `string`) {
    return e8;
  }
  let n2 = e8.length - 1;
  let r2 = e8[n2];
  if (e8[0] === `{` && r2 === `}`) {
    let r3;
    let i2 = e8.slice(1, n2);
    try {
      r3 = JSON.parse(`[` + i2 + `]`);
    } catch {
      r3 = i2 ? i2.split(`,`) : [];
    }
    return r3.map((e9) => Ee(t2, e9));
  }
  return e8;
};
var Me = (e8) => {
  if (typeof e8 == `string`) {
    return e8.replace(` `, `T`);
  }
  return e8;
};
var Ne = (e8) => {
  let t2 = new URL(e8);
  t2.protocol = t2.protocol.replace(/^ws/i, `http`);
  t2.pathname = t2.pathname.replace(/\/+$/, ``).replace(/\/socket\/websocket$/i, ``).replace(/\/socket$/i, ``).replace(/\/websocket$/i, ``);
  if (t2.pathname === `` || t2.pathname === `/`) {
    t2.pathname = `/api/broadcast`;
  } else {
    t2.pathname += `/api/broadcast`;
  }
  return t2.href;
};
var Pe = (e8) => {
  if (typeof e8 == `function`) {
    return e8;
  }
  return function() {
    return e8;
  };
};
var Fe = typeof self < `u` ? self : null;
var Ie = typeof window < `u` ? window : null;
var S = Fe || Ie || globalThis;
var Le = `2.0.0`;
var Re = 1e4;
var ze = 1e3;
var Be = 100;
var C = {
  connecting: 0,
  open: 1,
  closing: 2,
  closed: 3
};
var w = {
  closed: `closed`,
  errored: `errored`,
  joined: `joined`,
  joining: `joining`,
  leaving: `leaving`
};
var T = {
  close: `phx_close`,
  error: `phx_error`,
  join: `phx_join`,
  reply: `phx_reply`,
  leave: `phx_leave`
};
var Ve = {
  longpoll: `longpoll`,
  websocket: `websocket`
};
var He = {
  complete: 4
};
var Ue = `base64url.bearer.phx.`;
var We = class {
  constructor(e8, t2, n2, r2) {
    this.channel = e8;
    this.event = t2;
    this.payload = n2 || function() {
      return {};
    };
    this.receivedResp = null;
    this.timeout = r2;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
    this.ref = void 0;
  }
  resend(e8) {
    this.timeout = e8;
    this.reset();
    this.send();
  }
  send() {
    if (!this.hasReceived(`timeout`)) {
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
  }
  receive(e8, t2) {
    if (this.hasReceived(e8)) {
      t2(this.receivedResp.response);
    }
    this.recHooks.push({
      status: e8,
      callback: t2
    });
    return this;
  }
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  destroy() {
    this.cancelRefEvent();
    this.cancelTimeout();
  }
  matchReceive({
    status,
    response,
    _ref
  }) {
    this.recHooks.filter((t2) => t2.status === status).forEach((e8) => e8.callback(response));
  }
  cancelRefEvent() {
    if (this.refEvent) {
      this.channel.off(this.refEvent);
    }
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, (e8) => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = e8;
      this.matchReceive(e8);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger(`timeout`, {});
    }, this.timeout);
  }
  hasReceived(e8) {
    return this.receivedResp && this.receivedResp.status === e8;
  }
  trigger(e8, response) {
    this.channel.trigger(this.refEvent, {
      status: e8,
      response
    });
  }
};
var Ge = class {
  constructor(e8, t2) {
    this.callback = e8;
    this.timerCalc = t2;
    this.timer = void 0;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries += 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var Ke = class {
  constructor(e8, t2, n2) {
    this.state = w.closed;
    this.topic = e8;
    this.params = Pe(t2 || {});
    this.socket = n2;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new We(this, T.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Ge(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive(`ok`, () => {
      this.state = w.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((e9) => e9.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive(`error`, (e9) => {
      this.state = w.errored;
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `error ${this.topic}`, e9);
      }
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `close ${this.topic}`);
      }
      this.state = w.closed;
      this.socket.remove(this);
    });
    this.onError((e9) => {
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `error ${this.topic}`, e9);
      }
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = w.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive(`timeout`, () => {
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `timeout ${this.topic}`, this.joinPush.timeout);
      }
      new We(this, T.leave, Pe({}), this.timeout).send();
      this.state = w.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(T.reply, (e9, t3) => {
      this.trigger(this.replyEventName(t3), e9);
    });
  }
  join(e8 = this.timeout) {
    if (this.joinedOnce) {
      throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);
    }
    this.timeout = e8;
    this.joinedOnce = true;
    this.rejoin();
    return this.joinPush;
  }
  teardown() {
    this.pushBuffer.forEach((e8) => e8.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = w.closed;
    this.bindings = [];
  }
  onClose(e8) {
    this.on(T.close, e8);
  }
  onError(e8) {
    return this.on(T.error, (t2) => e8(t2));
  }
  on(e8, t2) {
    let n2 = this.bindingRef++;
    this.bindings.push({
      event: e8,
      ref: n2,
      callback: t2
    });
    return n2;
  }
  off(e8, t2) {
    this.bindings = this.bindings.filter((n2) => n2.event !== e8 || t2 !== void 0 && t2 !== n2.ref);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(e8, t2, n2 = this.timeout) {
    t2 ||= {};
    if (!this.joinedOnce) {
      throw Error(`tried to push '${e8}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let r2 = new We(this, e8, function() {
      return t2;
    }, n2);
    if (this.canPush()) {
      r2.send();
    } else {
      r2.startTimeout();
      this.pushBuffer.push(r2);
    }
    return r2;
  }
  leave(e8 = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = w.leaving;
    let t2 = () => {
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `leave ${this.topic}`);
      }
      this.trigger(T.close, `leave`);
    };
    let n2 = new We(this, T.leave, Pe({}), e8);
    n2.receive(`ok`, () => t2()).receive(`timeout`, () => t2());
    n2.send();
    if (!this.canPush()) {
      n2.trigger(`ok`, {});
    }
    return n2;
  }
  onMessage(e8, t2, n2) {
    return t2;
  }
  filterBindings(e8, t2, n2) {
    return true;
  }
  isMember(e8, t2, n2, joinRef) {
    if (this.topic === e8) {
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger()) {
          this.socket.log(`channel`, `dropping outdated message`, {
            topic: e8,
            event: t2,
            payload: n2,
            joinRef
          });
        }
        return false;
      }
      return true;
    }
    return false;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(e8 = this.timeout) {
    if (!this.isLeaving()) {
      this.socket.leaveOpenTopic(this.topic);
      this.state = w.joining;
      this.joinPush.resend(e8);
    }
  }
  trigger(e8, t2, n2, r2) {
    let i2 = this.onMessage(e8, t2, n2, r2);
    if (t2 && !i2) {
      throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);
    }
    let a2 = this.bindings.filter((r3) => r3.event === e8 && this.filterBindings(r3, t2, n2));
    for (let e9 = 0; e9 < a2.length; e9++) {
      a2[e9].callback(i2, n2, r2 || this.joinRef());
    }
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
    if (S.fetch && S.AbortController) {
      return this.fetchRequest(e8, t2, n2, r2, i2, a2, o2);
    }
    throw Error(`No suitable XMLHttpRequest implementation found`);
  }
  static fetchRequest(e8, t2, n2, r2, i2, a2, o2) {
    let s2 = {
      method: e8,
      headers: n2,
      body: r2
    };
    let c2 = null;
    if (i2) {
      c2 = new AbortController();
      setTimeout(() => c2.abort(), i2);
      s2.signal = c2.signal;
    }
    S.fetch(t2, s2).then((e9) => e9.text()).then((e9) => this.parseJSON(e9)).then((e9) => o2 && o2(e9)).catch((e9) => {
      if (e9.name === `AbortError` && a2) {
        a2();
      } else if (o2) {
        o2(null);
      }
    });
    return c2;
  }
  static xdomainRequest(e8, t2, n2, r2, i2, a2, o2) {
    e8.timeout = i2;
    e8.open(t2, n2);
    e8.onload = () => {
      let t3 = this.parseJSON(e8.responseText);
      if (o2) {
        o2(t3);
      }
    };
    if (a2) {
      e8.ontimeout = a2;
    }
    e8.onprogress = () => {
    };
    e8.send(r2);
    return e8;
  }
  static xhrRequest(e8, t2, n2, r2, i2, a2, o2, s2) {
    e8.open(t2, n2, true);
    e8.timeout = a2;
    for (let [t3, n3] of Object.entries(r2)) {
      e8.setRequestHeader(t3, n3);
    }
    e8.onerror = () => s2 && s2(null);
    e8.onreadystatechange = () => {
      if (e8.readyState === He.complete && s2) {
        s2(this.parseJSON(e8.responseText));
      }
    };
    if (o2) {
      e8.ontimeout = o2;
    }
    e8.send(i2);
    return e8;
  }
  static parseJSON(e8) {
    if (!e8 || e8 === ``) {
      return null;
    }
    try {
      return JSON.parse(e8);
    } catch {
      if (console) {
        console.log(`failed to parse JSON response`, e8);
      }
      return null;
    }
  }
  static serialize(e8, t2) {
    let n2 = [];
    for (const r2 in e8) {
      if (!Object.prototype.hasOwnProperty.call(e8, r2)) {
        continue;
      }
      let i2 = t2 ? `${t2}[${r2}]` : r2;
      let a2 = e8[r2];
      if (typeof a2 == `object`) {
        n2.push(this.serialize(a2, i2));
      } else {
        n2.push(encodeURIComponent(i2) + `=` + encodeURIComponent(a2));
      }
    }
    return n2.join(`&`);
  }
  static appendParams(e8, t2) {
    if (Object.keys(t2).length === 0) {
      return e8;
    }
    return `${e8}${e8.match(/\?/) ? `&` : `?`}${this.serialize(t2)}`;
  }
};
var Je = (e8) => {
  let t2 = ``;
  let n2 = new Uint8Array(e8);
  let n_byteLength = n2.byteLength;
  for (let e9 = 0; e9 < n_byteLength; e9++) {
    t2 += String.fromCharCode(n2[e9]);
  }
  return btoa(t2);
};
var E = class {
  constructor(e8, t2) {
    if (t2 && t2.length === 2 && t2[1].startsWith(Ue)) {
      this.authToken = atob(t2[1].slice(Ue.length));
    }
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = /* @__PURE__ */ new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function() {
    };
    this.onerror = function() {
    };
    this.onmessage = function() {
    };
    this.onclose = function() {
    };
    this.pollEndpoint = this.normalizeEndpoint(e8);
    this.readyState = C.connecting;
    setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(e8) {
    return e8.replace(`ws://`, `http://`).replace(`wss://`, `https://`).replace(RegExp(`(.*)/` + Ve.websocket), `$1/` + Ve.longpoll);
  }
  endpointURL() {
    return qe.appendParams(this.pollEndpoint, {
      token: this.token
    });
  }
  closeAndRetry(e8, t2, n2) {
    this.close(e8, t2, n2);
    this.readyState = C.connecting;
  }
  ontimeout() {
    this.onerror(`timeout`);
    this.closeAndRetry(1005, `timeout`, false);
  }
  isActive() {
    return this.readyState === C.open || this.readyState === C.connecting;
  }
  poll() {
    let e8 = {
      Accept: `application/json`
    };
    if (this.authToken) {
      e8[`X-Phoenix-AuthToken`] = this.authToken;
    }
    this.ajax(`GET`, e8, null, () => this.ontimeout(), (e9) => {
      if (e9) {
        var {
          status,
          token,
          messages
        } = e9;
        if (status === 410 && this.token !== null) {
          this.onerror(410);
          this.closeAndRetry(3410, `session_gone`, false);
          return;
        }
        this.token = token;
      } else {
        status = 0;
      }
      switch (status) {
        case 200:
          messages.forEach((e10) => {
            setTimeout(() => this.onmessage({
              data: e10
            }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = C.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, `forbidden`, false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, `internal server error`, 500);
          break;
        default:
          throw Error(`unhandled poll status ${status}`);
      }
    });
  }
  send(e8) {
    if (typeof e8 != `string`) {
      e8 = Je(e8);
    }
    if (this.currentBatch) {
      this.currentBatch.push(e8);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(e8);
    } else {
      this.currentBatch = [e8];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(e8, t2 = 0) {
    this.awaitingBatchAck = true;
    let n2 = t2 + Be;
    let r2 = e8.slice(t2, n2);
    this.ajax(`POST`, {
      "Content-Type": `application/x-ndjson`
    }, r2.join(`
`), () => this.onerror(`timeout`), (t3) => {
      if (!t3 || t3.status !== 200) {
        this.awaitingBatchAck = false;
        this.onerror(t3 && t3.status);
        this.closeAndRetry(1011, `internal server error`, false);
      } else if (n2 < e8.length) {
        this.batchSend(e8, n2);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      } else {
        this.awaitingBatchAck = false;
      }
    });
  }
  close(code, reason, wasClean) {
    for (let e8 of this.reqs) {
      e8.abort();
    }
    this.readyState = C.closed;
    let r2 = {
      code: 1e3,
      reason: void 0,
      wasClean: true,
      code,
      reason,
      wasClean
    };
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent < `u`) {
      this.onclose(new CloseEvent(`close`, r2));
    } else {
      this.onclose(r2);
    }
  }
  ajax(e8, t2, n2, r2, i2) {
    let a2;
    a2 = qe.request(e8, this.endpointURL(), t2, n2, this.timeout, () => {
      this.reqs.delete(a2);
      r2();
    }, (e9) => {
      this.reqs.delete(a2);
      if (this.isActive()) {
        i2(e9);
      }
    });
    this.reqs.add(a2);
  }
};
var Ye = class e3 {
  constructor(t2, n2 = {}) {
    let r2 = n2.events || {
      state: `presence_state`,
      diff: `presence_diff`
    };
    this.state = /* @__PURE__ */ Object.create(null);
    this.pendingDiffs = [];
    this.channel = t2;
    this.joinRef = null;
    this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    };
    this.channel.on(r2.state, (t3) => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = e3.syncState(this.state, t3, onJoin, onLeave);
      this.pendingDiffs.forEach((t4) => {
        this.state = e3.syncDiff(this.state, t4, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(r2.diff, (t3) => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(t3);
      } else {
        this.state = e3.syncDiff(this.state, t3, onJoin, onLeave);
        onSync();
      }
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
    let joins = /* @__PURE__ */ Object.create(null);
    let leaves = /* @__PURE__ */ Object.create(null);
    this.map(i2, (e9, n3) => {
      if (!t2[e9]) {
        leaves[e9] = n3;
      }
    });
    this.map(t2, (e9, t3) => {
      let n3 = i2[e9];
      if (n3) {
        let r3 = t3.metas.map((e10) => e10.phx_ref);
        let i3 = n3.metas.map((e10) => e10.phx_ref);
        let s2 = t3.metas.filter((e10) => i3.indexOf(e10.phx_ref) < 0);
        let c2 = n3.metas.filter((e10) => r3.indexOf(e10.phx_ref) < 0);
        if (s2.length > 0) {
          joins[e9] = t3;
          joins[e9].metas = s2;
        }
        if (c2.length > 0) {
          leaves[e9] = this.clone(n3);
          leaves[e9].metas = c2;
        }
      } else {
        joins[e9] = t3;
      }
    });
    return this.syncDiff(i2, {
      joins,
      leaves
    }, n2, r2);
  }
  static syncDiff(e8, t2, n2, r2) {
    e8 = this.toNullProtoObj(e8);
    let {
      joins,
      leaves
    } = this.clone(t2);
    n2 ||= function() {
    };
    r2 ||= function() {
    };
    this.map(joins, (t3, r3) => {
      let i2 = e8[t3];
      e8[t3] = this.clone(r3);
      if (i2) {
        let n3 = e8[t3].metas.map((e9) => e9.phx_ref);
        let r4 = i2.metas.filter((e9) => n3.indexOf(e9.phx_ref) < 0);
        e8[t3].metas.unshift(...r4);
      }
      n2(t3, i2, r3);
    });
    this.map(leaves, (t3, n3) => {
      let i2 = e8[t3];
      if (!i2) {
        return;
      }
      let a2 = n3.metas.map((e9) => e9.phx_ref);
      i2.metas = i2.metas.filter((e9) => a2.indexOf(e9.phx_ref) < 0);
      r2(t3, i2, n3);
      if (i2.metas.length === 0) {
        delete e8[t3];
      }
    });
    return e8;
  }
  static list(e8, t2) {
    t2 ||= function(e9, t3) {
      return t3;
    };
    return this.map(e8, (e9, n2) => t2(e9, n2));
  }
  static map(e8, t2) {
    return Object.getOwnPropertyNames(e8).map((n2) => t2(n2, e8[n2]));
  }
  static toNullProtoObj(e8) {
    if (Object.getPrototypeOf(e8) === null) {
      return e8;
    }
    let t2 = /* @__PURE__ */ Object.create(null);
    Object.getOwnPropertyNames(e8).forEach((n2) => {
      t2[n2] = e8[n2];
    });
    return t2;
  }
  static clone(e8) {
    return JSON.parse(JSON.stringify(e8));
  }
};
var Xe = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: {
    push: 0,
    reply: 1,
    broadcast: 2
  },
  encode(e8, t2) {
    if (e8.payload.constructor === ArrayBuffer) {
      return t2(this.binaryEncode(e8));
    }
    {
      let n2 = [e8.join_ref, e8.ref, e8.topic, e8.event, e8.payload];
      return t2(JSON.stringify(n2));
    }
  },
  decode(e8, t2) {
    if (e8.constructor === ArrayBuffer) {
      return t2(this.binaryDecode(e8));
    }
    {
      let [n2, r2, i2, a2, o2] = JSON.parse(e8);
      return t2({
        join_ref: n2,
        ref: r2,
        topic: i2,
        event: a2,
        payload: o2
      });
    }
  },
  binaryEncode({
    join_ref,
    ref,
    event,
    topic,
    payload
  }) {
    let o2 = new TextEncoder();
    let s2 = o2.encode(join_ref);
    let c2 = o2.encode(ref);
    let l2 = o2.encode(topic);
    let u2 = o2.encode(event);
    this.assertFieldSize(s2.byteLength, `join_ref`);
    this.assertFieldSize(c2.byteLength, `ref`);
    this.assertFieldSize(l2.byteLength, `topic`);
    this.assertFieldSize(u2.byteLength, `event`);
    let d2 = this.META_LENGTH + s2.byteLength + c2.byteLength + l2.byteLength + u2.byteLength;
    let f2 = new ArrayBuffer(this.HEADER_LENGTH + d2);
    let p2 = new Uint8Array(f2);
    let m2 = new DataView(f2);
    let h2 = 0;
    m2.setUint8(h2++, this.KINDS.push);
    m2.setUint8(h2++, s2.byteLength);
    m2.setUint8(h2++, c2.byteLength);
    m2.setUint8(h2++, l2.byteLength);
    m2.setUint8(h2++, u2.byteLength);
    p2.set(s2, h2);
    h2 += s2.byteLength;
    p2.set(c2, h2);
    h2 += c2.byteLength;
    p2.set(l2, h2);
    h2 += l2.byteLength;
    p2.set(u2, h2);
    h2 += u2.byteLength;
    const g = new Uint8Array(f2.byteLength + payload.byteLength);
    g.set(p2, 0);
    g.set(new Uint8Array(payload), f2.byteLength);
    return g.buffer;
  },
  assertFieldSize(e8, t2) {
    if (e8 > 255) {
      throw Error(`unable to convert ${t2} to binary: must be less than or equal to 255 bytes, but is ${e8} bytes`);
    }
  },
  binaryDecode(e8) {
    let t2 = new DataView(e8);
    let n2 = t2.getUint8(0);
    let r2 = new TextDecoder();
    switch (n2) {
      case this.KINDS.push:
        return this.decodePush(e8, t2, r2);
      case this.KINDS.reply:
        return this.decodeReply(e8, t2, r2);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(e8, t2, r2);
    }
  },
  decodePush(e8, t2, n2) {
    let r2 = t2.getUint8(1);
    let i2 = t2.getUint8(2);
    let a2 = t2.getUint8(3);
    let o2 = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let s2 = n2.decode(e8.slice(o2, o2 + r2));
    o2 += r2;
    let c2 = n2.decode(e8.slice(o2, o2 + i2));
    o2 += i2;
    let l2 = n2.decode(e8.slice(o2, o2 + a2));
    o2 += a2;
    return {
      join_ref: s2,
      ref: null,
      topic: c2,
      event: l2,
      payload: e8.slice(o2, e8.byteLength)
    };
  },
  decodeReply(e8, t2, n2) {
    let r2 = t2.getUint8(1);
    let i2 = t2.getUint8(2);
    let a2 = t2.getUint8(3);
    let o2 = t2.getUint8(4);
    let s2 = this.HEADER_LENGTH + this.META_LENGTH;
    let c2 = n2.decode(e8.slice(s2, s2 + r2));
    s2 += r2;
    let l2 = n2.decode(e8.slice(s2, s2 + i2));
    s2 += i2;
    let u2 = n2.decode(e8.slice(s2, s2 + a2));
    s2 += a2;
    let d2 = n2.decode(e8.slice(s2, s2 + o2));
    s2 += o2;
    let f2 = {
      status: d2,
      response: e8.slice(s2, e8.byteLength)
    };
    return {
      join_ref: c2,
      ref: l2,
      topic: u2,
      event: T.reply,
      payload: f2
    };
  },
  decodeBroadcast(e8, t2, n2) {
    let r2 = t2.getUint8(1);
    let i2 = t2.getUint8(2);
    let a2 = this.HEADER_LENGTH + 2;
    let o2 = n2.decode(e8.slice(a2, a2 + r2));
    a2 += r2;
    let s2 = n2.decode(e8.slice(a2, a2 + i2));
    a2 += i2;
    return {
      join_ref: null,
      ref: null,
      topic: o2,
      event: s2,
      payload: e8.slice(a2, e8.byteLength)
    };
  }
};
var Ze = class {
  constructor(e8, t2 = {}) {
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.fallbackRef = null;
    this.timeout = t2.timeout || Re;
    this.transport = t2.transport || S.WebSocket || E;
    this.conn = void 0;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = t2.longPollFallbackMs;
    this.fallbackTimer = null;
    let n2 = null;
    try {
      n2 = S && S.sessionStorage;
    } catch {
    }
    this.sessionStore = t2.sessionStorage || n2;
    this.establishedConnections = 0;
    this.defaultEncoder = Xe.encode.bind(Xe);
    this.defaultDecoder = Xe.decode.bind(Xe);
    this.closeWasClean = true;
    this.disconnecting = false;
    this.binaryType = t2.binaryType || `arraybuffer`;
    this.connectClock = 1;
    this.pageHidden = false;
    this.encode = void 0;
    this.decode = void 0;
    if (this.transport === E) {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    } else {
      this.encode = t2.encode || this.defaultEncoder;
      this.decode = t2.decode || this.defaultDecoder;
    }
    let r2 = null;
    if (Ie && Ie.addEventListener) {
      Ie.addEventListener(`pagehide`, (e9) => {
        if (this.conn) {
          this.disconnect();
          r2 = this.connectClock;
        }
      });
      Ie.addEventListener(`pageshow`, (e9) => {
        if (r2 === this.connectClock) {
          r2 = null;
          this.connect();
        }
      });
      Ie.addEventListener(`visibilitychange`, () => {
        if (document.visibilityState === `hidden`) {
          this.pageHidden = true;
        } else {
          this.pageHidden = false;
          if (!this.isConnected() && !this.closeWasClean) {
            this.teardown(() => this.connect());
          }
        }
      });
    }
    this.heartbeatIntervalMs = t2.heartbeatIntervalMs || 3e4;
    this.autoSendHeartbeat = t2.autoSendHeartbeat ?? true;
    this.heartbeatCallback = t2.heartbeatCallback ?? (() => {
    });
    this.rejoinAfterMs = (e9) => {
      if (t2.rejoinAfterMs) {
        return t2.rejoinAfterMs(e9);
      }
      return [1e3, 2e3, 5e3][e9 - 1] || 1e4;
    };
    this.reconnectAfterMs = (e9) => {
      if (t2.reconnectAfterMs) {
        return t2.reconnectAfterMs(e9);
      }
      return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e9 - 1] || 5e3;
    };
    this.logger = t2.logger || null;
    if (!this.logger && t2.debug) {
      this.logger = (e9, t3, n3) => {
        console.log(`${e9}: ${t3}`, n3);
      };
    }
    this.longpollerTimeout = t2.longpollerTimeout || 2e4;
    this.params = Pe(t2.params || {});
    this.endPoint = `${e8}/${Ve.websocket}`;
    this.vsn = t2.vsn || Le;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.heartbeatSentAt = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Ge(() => {
      if (this.pageHidden) {
        this.log(`Not reconnecting as page is hidden!`);
        this.teardown();
        return;
      }
      this.teardown(async () => {
        if (t2.beforeReconnect) {
          await t2.beforeReconnect();
        }
        this.connect();
      });
    }, this.reconnectAfterMs);
    this.authToken = t2.authToken && Pe(t2.authToken);
  }
  getLongPollTransport() {
    return E;
  }
  replaceTransport(e8) {
    this.connectClock++;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.conn &&= (this.conn.close(), null);
    this.transport = e8;
  }
  protocol() {
    if (location.protocol.match(/^https/)) {
      return `wss`;
    }
    return `ws`;
  }
  endPointURL() {
    let e8 = qe.appendParams(qe.appendParams(this.endPoint, this.params()), {
      vsn: this.vsn
    });
    if (e8.charAt(0) === `/`) {
      if (e8.charAt(1) === `/`) {
        return `${this.protocol()}:${e8}`;
      }
      return `${this.protocol()}://${location.host}${e8}`;
    }
    return e8;
  }
  disconnect(e8, t2, n2) {
    this.connectClock++;
    this.disconnecting = true;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.teardown(() => {
      this.disconnecting = false;
      if (e8) {
        e8();
      }
    }, t2, n2);
  }
  connect(e8) {
    if (e8) {
      if (console) {
        console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`);
      }
      this.params = Pe(e8);
    }
    if (!this.conn || this.disconnecting) {
      if (this.longPollFallbackMs && this.transport !== E) {
        this.connectWithFallback(E, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
  }
  log(e8, t2, n2) {
    if (this.logger) {
      this.logger(e8, t2, n2);
    }
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(e8) {
    let t2 = this.makeRef();
    this.stateChangeCallbacks.open.push([t2, e8]);
    return t2;
  }
  onClose(e8) {
    let t2 = this.makeRef();
    this.stateChangeCallbacks.close.push([t2, e8]);
    return t2;
  }
  onError(e8) {
    let t2 = this.makeRef();
    this.stateChangeCallbacks.error.push([t2, e8]);
    return t2;
  }
  onMessage(e8) {
    let t2 = this.makeRef();
    this.stateChangeCallbacks.message.push([t2, e8]);
    return t2;
  }
  onHeartbeat(e8) {
    this.heartbeatCallback = e8;
  }
  ping(e8) {
    if (!this.isConnected()) {
      return false;
    }
    let t2 = this.makeRef();
    let n2 = Date.now();
    this.push({
      topic: `phoenix`,
      event: `heartbeat`,
      payload: {},
      ref: t2
    });
    let r2 = this.onMessage((i2) => {
      if (i2.ref === t2) {
        this.off([r2]);
        e8(Date.now() - n2);
      }
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
    this.connectClock++;
    this.closeWasClean = false;
    let e8;
    if (this.authToken) {
      e8 = [`phoenix`, `${Ue}${btoa(this.authToken()).replace(/=/g, ``)}`];
    }
    this.conn = new this.transport(this.endPointURL(), e8);
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = (e9) => this.onConnError(e9);
    this.conn.onmessage = (e9) => this.onConnMessage(e9);
    this.conn.onclose = (e9) => this.onConnClose(e9);
  }
  getSession(e8) {
    return this.sessionStore && this.sessionStore.getItem(e8);
  }
  storeSession(e8, t2) {
    if (this.sessionStore) {
      this.sessionStore.setItem(e8, t2);
    }
  }
  connectWithFallback(e8, t2 = 2500) {
    clearTimeout(this.fallbackTimer);
    let n2 = false;
    let r2 = true;
    let i2;
    let a2;
    let o2 = this.transportName(e8);
    let s2 = (t3) => {
      this.log(`transport`, `falling back to ${o2}...`, t3);
      this.off([i2, a2]);
      r2 = false;
      this.replaceTransport(e8);
      this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${o2}`)) {
      return s2(`memorized`);
    }
    this.fallbackTimer = setTimeout(s2, t2);
    a2 = this.onError((e9) => {
      this.log(`transport`, `error`, e9);
      if (r2 && !n2) {
        clearTimeout(this.fallbackTimer);
        s2(e9);
      }
    });
    if (this.fallbackRef) {
      this.off([this.fallbackRef]);
    }
    this.fallbackRef = this.onOpen(() => {
      n2 = true;
      if (!r2) {
        let t3 = this.transportName(e8);
        if (!this.primaryPassedHealthCheck) {
          this.storeSession(`phx:fallback:${t3}`, `true`);
        }
        return this.log(`transport`, `established ${t3} fallback`);
      }
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = setTimeout(s2, t2);
      this.ping((e9) => {
        this.log(`transport`, `connected to primary after`, e9);
        this.primaryPassedHealthCheck = true;
        clearTimeout(this.fallbackTimer);
      });
    });
    this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger()) {
      this.log(`transport`, `connected to ${this.endPointURL()}`);
    }
    this.closeWasClean = false;
    this.disconnecting = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    if (this.autoSendHeartbeat) {
      this.resetHeartbeat();
    }
    this.triggerStateCallbacks(`open`);
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      this.heartbeatSentAt = null;
      if (this.hasLogger()) {
        this.log(`transport`, `heartbeat timeout. Attempting to re-establish connection`);
      }
      try {
        this.heartbeatCallback(`timeout`);
      } catch (error) {
        this.log(`error`, `error in heartbeat callback`, error);
      }
      this.triggerChanError(Error(`heartbeat timeout`));
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), ze, `heartbeat timeout`);
    }
  }
  resetHeartbeat() {
    if (!(this.conn && this.conn.skipHeartbeat)) {
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
  }
  teardown(e8, t2, n2) {
    if (!this.conn) {
      return e8 && e8();
    }
    let conn = this.conn;
    this.waitForBufferDone(conn, () => {
      if (t2) {
        conn.close(t2, n2 || ``);
      } else {
        conn.close();
      }
      this.waitForSocketClosed(conn, () => {
        if (this.conn === conn) {
          this.conn.onopen = function() {
          };
          this.conn.onerror = function() {
          };
          this.conn.onmessage = function() {
          };
          this.conn.onclose = function() {
          };
          this.conn = null;
        }
        if (e8) {
          e8();
        }
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
    if (this.conn) {
      this.conn.onclose = () => {
      };
    }
    if (this.hasLogger()) {
      this.log(`transport`, `close`, e8);
    }
    this.triggerChanError(e8);
    this.clearHeartbeats();
    if (!this.closeWasClean) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.triggerStateCallbacks(`close`, e8);
  }
  onConnError(e8) {
    if (this.hasLogger()) {
      this.log(`transport`, `error`, e8);
    }
    let transport = this.transport;
    let establishedConnections = this.establishedConnections;
    this.triggerStateCallbacks(`error`, e8, transport, establishedConnections);
    if (transport === this.transport || establishedConnections > 0) {
      this.triggerChanError(e8);
    }
  }
  triggerChanError(e8) {
    this.channels.forEach((t2) => {
      if (!(t2.isErrored() || t2.isLeaving() || t2.isClosed())) {
        t2.trigger(T.error, e8);
      }
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
    this.off(e8.stateChangeRefs);
    this.channels = this.channels.filter((t2) => t2 !== e8);
  }
  off(e8) {
    for (let t2 in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(([t3]) => e8.indexOf(t3) === -1);
    }
  }
  channel(e8, t2 = {}) {
    let n2 = new Ke(e8, t2, this);
    this.channels.push(n2);
    return n2;
  }
  push(e8) {
    if (this.hasLogger()) {
      let {
        topic,
        event,
        payload,
        ref,
        join_ref
      } = e8;
      this.log(`push`, `${topic} ${event} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(e8, (e9) => this.conn.send(e9));
    } else {
      this.sendBuffer.push(() => this.encode(e8, (e9) => this.conn.send(e9)));
    }
  }
  makeRef() {
    let e8 = this.ref + 1;
    this.ref = e8 === this.ref ? 0 : e8;
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback(`disconnected`);
      } catch (error) {
        this.log(`error`, `error in heartbeat callback`, error);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.heartbeatSentAt = Date.now();
    this.push({
      topic: `phoenix`,
      event: `heartbeat`,
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback(`sent`);
    } catch (error) {
      this.log(`error`, `error in heartbeat callback`, error);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((e8) => e8());
      this.sendBuffer = [];
    }
  }
  onConnMessage(e8) {
    this.decode(e8.data, (e9) => {
      let {
        topic,
        event,
        payload,
        ref,
        join_ref
      } = e9;
      if (ref && ref === this.pendingHeartbeatRef) {
        let e10 = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(payload.status === `ok` ? `ok` : `error`, e10);
        } catch (error) {
          this.log(`error`, `error in heartbeat callback`, error);
        }
        this.pendingHeartbeatRef = null;
        this.heartbeatSentAt = null;
        if (this.autoSendHeartbeat) {
          this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
      }
      if (this.hasLogger()) {
        this.log(`receive`, `${payload.status || ``} ${topic} ${event} ${ref && `(` + ref + `)` || ``}`.trim(), payload);
      }
      for (let e10 = 0; e10 < this.channels.length; e10++) {
        let channel = this.channels[e10];
        if (channel.isMember(topic, event, payload, join_ref)) {
          channel.trigger(event, payload, ref, join_ref);
        }
      }
      this.triggerStateCallbacks(`message`, e9);
    });
  }
  triggerStateCallbacks(e8, ...t2) {
    try {
      this.stateChangeCallbacks[e8].forEach(([n2, r2]) => {
        try {
          r2(...t2);
        } catch (error) {
          this.log(`error`, `error in ${e8} callback`, error);
        }
      });
    } catch (error) {
      this.log(`error`, `error triggering ${e8} callbacks`, error);
    }
  }
  leaveOpenTopic(e8) {
    let t2 = this.channels.find((t3) => t3.topic === e8 && (t3.isJoined() || t3.isJoining()));
    if (t2) {
      if (this.hasLogger()) {
        this.log(`transport`, `leaving duplicate topic "${e8}"`);
      }
      t2.leave();
    }
  }
};
var Qe = class e4 {
  constructor(t2, n2) {
    let r2 = tt(n2);
    this.presence = new Ye(t2.getChannel(), r2);
    this.presence.onJoin((n3, r3, i2) => {
      let a2 = e4.onJoinPayload(n3, r3, i2);
      t2.getChannel().trigger(`presence`, a2);
    });
    this.presence.onLeave((n3, r3, i2) => {
      let a2 = e4.onLeavePayload(n3, r3, i2);
      t2.getChannel().trigger(`presence`, a2);
    });
    this.presence.onSync(() => {
      t2.getChannel().trigger(`presence`, {
        event: `sync`
      });
    });
  }
  get state() {
    return e4.transformState(this.presence.state);
  }
  static transformState(e8) {
    e8 = et(e8);
    return Object.getOwnPropertyNames(e8).reduce((acc, key) => {
      let r2 = e8[key];
      acc[key] = $e(r2);
      return acc;
    }, {});
  }
  static onJoinPayload(e8, t2, n2) {
    return {
      event: `join`,
      key: e8,
      currentPresences: nt(t2),
      newPresences: $e(n2)
    };
  }
  static onLeavePayload(e8, t2, n2) {
    return {
      event: `leave`,
      key: e8,
      currentPresences: nt(t2),
      leftPresences: $e(n2)
    };
  }
};
function $e(e8) {
  return e8.metas.map((e9) => {
    let t2 = Object.getOwnPropertyDescriptors(e9);
    let n2 = Object.defineProperties({}, t2);
    n2.presence_ref = n2.phx_ref;
    delete n2.phx_ref;
    delete n2.phx_ref_prev;
    return n2;
  });
}
function et(e8) {
  return JSON.parse(JSON.stringify(e8));
}
function tt(e8) {
  return e8?.events && {
    events: e8.events
  };
}
function nt(e8) {
  if (e8?.metas) {
    return $e(e8);
  }
  return [];
}
var rt;
((e8) => {
  e8.SYNC = `sync`;
  e8.JOIN = `join`;
  e8.LEAVE = `leave`;
})(rt ||= {});
var it = class {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e8, t2) {
    this.channel = e8;
    this.presenceAdapter = new Qe(this.channel.channelAdapter, t2);
  }
};
function at(e8) {
  if (e8 instanceof Error) {
    return e8;
  }
  if (typeof e8 == `string`) {
    return Error(e8);
  }
  if (e8 && typeof e8 == `object`) {
    let t2 = e8;
    if (typeof t2.code == `number`) {
      let n2 = typeof t2.reason == `string` && t2.reason ? ` (${t2.reason})` : ``;
      return Error(`socket closed: ${t2.code}${n2}`, {
        cause: e8
      });
    }
    return Error(`channel error: transport failure`, {
      cause: e8
    });
  }
  return Error(`channel error: connection lost`);
}
var ot = class {
  constructor(e8, t2, n2) {
    let r2 = st(n2);
    this.channel = e8.getSocket().channel(t2, r2);
    this.socket = e8;
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
      e9.cancelTimeout();
      this.socket.log(`channel`, `discarded push due to buffer overflow: ${e9.event}`, e9.payload());
    }
    return r2;
  }
  updateJoinPayload(e8) {
    let t2 = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => ({
      ...t2,
      ...e8
    });
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
  return {
    config: {
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: ``,
        enabled: false
      },
      private: false,
      ...e8.config
    }
  };
}
var ct = /[,()"\\]/;
var lt = (e8) => ct.test(e8) || e8 !== e8.trim();
var ut = (e8) => `"${e8.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`;
var dt = (e8) => {
  let t2 = e8 === null ? `null` : String(e8);
  if (lt(t2)) {
    return ut(t2);
  }
  return t2;
};
var ft = (e8) => {
  if (e8 === null) {
    return `null`;
  }
  return String(e8);
};
var pt = (e8, t2) => {
  if (e8 === `in`) {
    let e9 = Array.isArray(t2) ? t2 : [t2];
    if (e9.length === 0) {
      throw Error("Realtime `in` filter requires at least one value.");
    }
    return `in.(${Array.from(new Set(e9)).map((e10) => dt(e10)).join(`,`)})`;
  }
  if (e8 === `is`) {
    return `is.${ft(t2)}`;
  }
  return `${e8}.${dt(t2)}`;
};
var mt = class {
  constructor() {
    this.filters = [];
  }
  add(e8, t2, n2, r2 = false) {
    let i2 = r2 ? `not.` : ``;
    this.filters.push(`${e8}=${i2}${pt(t2, n2)}`);
    return this;
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
((e8) => {
  e8.ALL = `*`;
  e8.INSERT = `INSERT`;
  e8.UPDATE = `UPDATE`;
  e8.DELETE = `DELETE`;
})(ht ||= {});
var gt;
((e8) => {
  e8.BROADCAST = `broadcast`;
  e8.PRESENCE = `presence`;
  e8.POSTGRES_CHANGES = `postgres_changes`;
  e8.SYSTEM = `system`;
})(gt ||= {});
var D;
((e8) => {
  e8.SUBSCRIBED = `SUBSCRIBED`;
  e8.TIMED_OUT = `TIMED_OUT`;
  e8.CLOSED = `CLOSED`;
  e8.CHANNEL_ERROR = `CHANNEL_ERROR`;
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
  constructor(e8, t2 = {
    config: {}
  }, n2) {
    this.topic = e8;
    this.params = t2;
    this.socket = n2;
    this.bindings = {};
    this.subTopic = e8.replace(/^realtime:/i, ``);
    this.params.config = {
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: ``,
        enabled: false
      },
      private: false,
      ...t2.config
    };
    this.channelAdapter = new ot(this.socket.socketAdapter, e8, this.params);
    this.presence = new it(this);
    this._onClose(() => {
      this.socket._remove(this);
    });
    this._updateFilterTransform();
    this.broadcastEndpointURL = Ne(this.socket.socketAdapter.endPointURL());
    this.private = this.params.config.private || false;
    if (!this.private && this.params.config?.broadcast?.replay) {
      throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
    }
  }
  subscribe(e8, t2 = this.timeout) {
    if (!this.socket.isConnected()) {
      this.socket.connect();
    }
    if (this.channelAdapter.isClosed()) {
      let {
        config: {
          broadcast,
          presence,
          private: _private,
          postgres_changes_options
        }
      } = this.params;
      let postgres_changes = this.bindings.postgres_changes?.map((e9) => e9.filter) ?? [];
      let enabled = !!this.bindings[gt.PRESENCE] && this.bindings[gt.PRESENCE].length > 0 || this.params.config.presence?.enabled === true;
      let c2 = {};
      let config = {
        broadcast,
        presence: {
          ...presence,
          enabled
        },
        postgres_changes,
        private: _private,
        ...postgres_changes_options ? {
          postgres_changes_options
        } : {}
      };
      if (this.socket.accessTokenValue) {
        c2.access_token = this.socket.accessTokenValue;
      }
      this._onError((t3) => {
        e8?.(D.CHANNEL_ERROR, at(t3));
      });
      this._onClose(() => e8?.(D.CLOSED));
      this.updateJoinPayload({
        config,
        ...c2
      });
      this._updateFilterMessage();
      let u2 = postgres_changes_options?.wait && postgres_changes.length > 0 ? Math.max(t2, (postgres_changes_options.timeout ?? ye) + be) : t2;
      this.channelAdapter.subscribe(u2).receive(`ok`, async ({
        postgres_changes: postgres_changes2
      }) => {
        if (!this.socket._isManualToken()) {
          this.socket.setAuth();
        }
        if (postgres_changes2 === void 0) {
          e8?.(D.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(postgres_changes2, e8);
      }).receive(`error`, (t3) => {
        this.state = b.errored;
        let n2 = Object.values(t3).join(`, `) || `error`;
        e8?.(D.CHANNEL_ERROR, Error(n2, {
          cause: t3
        }));
      }).receive(`timeout`, () => {
        e8?.(D.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(t2, n2) {
    let postgres_changes = this.bindings.postgres_changes;
    let i2 = postgres_changes?.length ?? 0;
    let a2 = [];
    for (let o2 = 0; o2 < i2; o2++) {
      let i3 = postgres_changes[o2];
      let {
        filter: {
          event,
          schema,
          table,
          filter
        }
      } = i3;
      let d2 = t2 && t2[o2];
      if (d2 && d2.event === event && e5.isFilterValueEqual(d2.schema, schema) && e5.isFilterValueEqual(d2.table, table) && e5.isFilterValueEqual(d2.filter, filter)) {
        a2.push({
          ...i3,
          id: d2.id
        });
      } else {
        this.unsubscribe();
        this.state = b.errored;
        n2?.(D.CHANNEL_ERROR, Error(`mismatch between server and client bindings for postgres changes`));
        return;
      }
    }
    this.bindings.postgres_changes = a2;
    if (this.state != b.errored && n2) {
      n2(D.SUBSCRIBED);
    }
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e8, t2 = {}) {
    return await this.send({
      type: `presence`,
      event: `track`,
      payload: e8
    }, t2);
  }
  async untrack(e8 = {}) {
    return await this.send({
      type: `presence`,
      event: `untrack`
    }, e8);
  }
  on(e8, t2, n2) {
    let r2 = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
    let i2 = e8 === gt.PRESENCE || e8 === gt.POSTGRES_CHANGES;
    if (r2 && i2) {
      this.socket.log(`channel`, `cannot add \`${e8}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      throw Error(`cannot add \`${e8}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    }
    return this._on(e8, t2, n2);
  }
  async httpSend(e8, t2, n2 = {}) {
    if (t2 == null) {
      return Promise.reject(Error(`Payload is required for httpSend()`));
    }
    let r2 = t2 instanceof ArrayBuffer || ArrayBuffer.isView(t2);
    let i2 = {
      apikey: this.socket.apiKey ? this.socket.apiKey : ``,
      "Content-Type": r2 ? `application/octet-stream` : `application/json`
    };
    if (this.socket.accessTokenValue) {
      i2.Authorization = `Bearer ${this.socket.accessTokenValue}`;
    }
    let a2 = new URL(this.broadcastEndpointURL);
    a2.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e8)}`;
    if (this.private) {
      a2.searchParams.set(`private`, `true`);
    }
    let o2 = {
      method: `POST`,
      headers: i2,
      body: r2 ? t2 : JSON.stringify(t2)
    };
    let s2 = await this._fetchWithTimeout(a2.toString(), o2, n2.timeout ?? this.timeout);
    if (s2.status === 202) {
      return {
        success: true
      };
    }
    if (s2.status === 404) {
      return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));
    }
    let s_statusText = s2.statusText;
    try {
      let e9 = await s2.json();
      s_statusText = e9.error || e9.message || s_statusText;
    } catch {
    }
    return Promise.reject(Error(s_statusText));
  }
  async send(e8, t2 = {}) {
    if (!this.channelAdapter.canPush() && e8.type === `broadcast`) {
      let n2 = `Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, n2);
      } else {
        console.warn(n2);
      }
      let {
        event,
        payload
      } = e8;
      let a2 = {
        apikey: this.socket.apiKey ? this.socket.apiKey : ``,
        "Content-Type": `application/json`
      };
      if (this.socket.accessTokenValue) {
        a2.Authorization = `Bearer ${this.socket.accessTokenValue}`;
      }
      let o2 = {
        method: `POST`,
        headers: a2,
        body: JSON.stringify({
          messages: [{
            topic: this.subTopic,
            event,
            payload,
            private: this.private
          }]
        })
      };
      try {
        let e9 = await this._fetchWithTimeout(this.broadcastEndpointURL, o2, t2.timeout ?? this.timeout);
        await e9.body?.cancel();
        if (e9.ok) {
          return `ok`;
        }
        return `error`;
      } catch (error) {
        if (error instanceof Error && error.name === `AbortError`) {
          return `timed out`;
        }
        return `error`;
      }
    }
    return new Promise((resolve) => {
      let r2 = this.channelAdapter.push(e8.type, e8, t2.timeout || this.timeout);
      if (e8.type === `broadcast` && !this.params?.config?.broadcast?.ack) {
        resolve(`ok`);
      }
      r2.receive(`ok`, () => resolve(`ok`));
      r2.receive(`error`, () => resolve(`error`));
      r2.receive(`timeout`, () => resolve(`timed out`));
    });
  }
  updateJoinPayload(e8) {
    this.channelAdapter.updateJoinPayload(e8);
  }
  async unsubscribe(e8 = this.timeout) {
    return new Promise((resolve) => {
      this.channelAdapter.unsubscribe(e8).receive(`ok`, () => resolve(`ok`)).receive(`timeout`, () => resolve(`timed out`)).receive(`error`, () => resolve(`error`));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e8, t2, n2) {
    let r2 = new AbortController();
    let i2 = setTimeout(() => r2.abort(), n2);
    let a2 = await this.socket.fetch(e8, {
      ...t2,
      signal: r2.signal
    });
    clearTimeout(i2);
    return a2;
  }
  _on(t2, filter, r2) {
    let i2 = t2.toLocaleLowerCase();
    let a2 = filter?.filter;
    if (a2 instanceof mt || typeof a2 == `object` && a2 && typeof a2.build == `function`) {
      filter = {
        ...filter,
        filter: a2.build()
      };
    }
    if (i2 === gt.POSTGRES_CHANGES && this.bindings[i2]?.find((t3) => e5.isSamePostgresFilter(t3.filter, filter))) {
      this.socket.log(`error`, `duplicate \`postgres_changes\` binding for ${this.topic} ignored`, filter);
      return this;
    }
    let o2 = this.channelAdapter.on(t2, r2);
    let s2 = {
      type: i2,
      filter,
      callback: r2,
      ref: o2
    };
    if (this.bindings[i2]) {
      this.bindings[i2].push(s2);
    } else {
      this.bindings[i2] = [s2];
    }
    this._updateFilterMessage();
    return this;
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
      if (this._notThisChannelEvent(r2, n2)) {
        return false;
      }
      let i2 = this.bindings[r2]?.find((t3) => t3.ref === e8.ref);
      if (!i2) {
        return true;
      }
      if ([`broadcast`, `presence`, `postgres_changes`].includes(r2)) {
        if (`id` in i2) {
          let e9 = i2.id;
          let n3 = i2.filter?.event;
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
    let {
      close,
      error,
      leave,
      join
    } = xe;
    return t2 && [close, error, leave, join].includes(e8) && t2 !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e8, t2, n2) => {
      if (typeof t2 == `object` && `ids` in t2) {
        let e9 = t2.data;
        let {
          schema,
          table,
          commit_timestamp,
          type,
          errors
        } = e9;
        return {
          schema,
          table,
          commit_timestamp,
          eventType: type,
          new: {},
          old: {},
          errors,
          ...this._getPayloadRecords(e9)
        };
      }
      return t2;
    });
  }
  copyBindings(e8) {
    if (this.joinedOnce) {
      throw Error(`cannot copy bindings into joined channel`);
    }
    for (let t2 in e8.bindings) {
      for (let n2 of e8.bindings[t2]) {
        this._on(n2.type, n2.filter, n2.callback);
      }
    }
  }
  static isFilterValueEqual(e8, t2) {
    return (e8 ?? void 0) === (t2 ?? void 0);
  }
  static isSamePostgresFilter(t2, n2) {
    let r2 = t2?.select?.join() ?? void 0;
    let i2 = n2?.select?.join() ?? void 0;
    return t2?.event === n2?.event && e5.isFilterValueEqual(t2?.schema, n2?.schema) && e5.isFilterValueEqual(t2?.table, n2?.table) && e5.isFilterValueEqual(t2?.filter, n2?.filter) && r2 === i2;
  }
  _getPayloadRecords(e8) {
    let t2 = {
      new: {},
      old: {}
    };
    if (e8.type === `INSERT` || e8.type === `UPDATE`) {
      t2.new = we(e8.columns, e8.record);
    }
    if (e8.type === `UPDATE` || e8.type === `DELETE`) {
      t2.old = we(e8.columns, e8.old_record);
    }
    return t2;
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
    return new Promise((resolve) => {
      setTimeout(() => resolve(`timeout`), r2);
      this.socket.disconnect(() => {
        e8();
        resolve(`ok`);
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
var yt = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
};
var bt = [1e3, 2e3, 5e3, 1e4];
var xt = 1e4;
function St() {
  let e8 = /* @__PURE__ */ new Map();
  return {
    get length() {
      return e8.size;
    },
    clear() {
      e8.clear();
    },
    getItem(t2) {
      if (e8.has(t2)) {
        return e8.get(t2);
      }
      return null;
    },
    key(t2) {
      return Array.from(e8.keys())[t2] ?? null;
    },
    removeItem(t2) {
      e8.delete(t2);
    },
    setItem(t2, n2) {
      e8.set(t2, String(n2));
    }
  };
}
function Ct() {
  try {
    if (typeof globalThis < `u` && globalThis.sessionStorage) {
      return globalThis.sessionStorage;
    }
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
    if (this.worker) {
      return this._workerHeartbeatTimer;
    }
    return this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    if (this.worker) {
      return this._pendingWorkerHeartbeatRef;
    }
    return this.socketAdapter.pendingHeartbeatRef;
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
    this.channels = [];
    this.accessTokenValue = null;
    this.accessToken = null;
    this.apiKey = null;
    this.httpEndpoint = ``;
    this.headers = {};
    this.params = {};
    this.ref = 0;
    this.serializer = new Ce();
    this._manuallySetToken = false;
    this._authPromise = null;
    this._authGeneration = 0;
    this._workerHeartbeatTimer = void 0;
    this._pendingWorkerHeartbeatRef = null;
    this._pendingDisconnectTimer = null;
    this._disconnectOnEmptyChannelsAfterMs = 0;
    this._resolveFetch = (e9) => {
      if (e9) {
        return (...t3) => e9(...t3);
      }
      return (...e10) => fetch(...e10);
    };
    if (!t2?.params?.apikey) {
      throw Error(`API key is required to connect to Realtime`);
    }
    this.apiKey = t2.params.apikey;
    let n2 = this._initializeOptions(t2);
    this.socketAdapter = new vt(e8, n2);
    this.httpEndpoint = Ne(e8);
    this.fetch = this._resolveFetch(t2?.fetch);
  }
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely(`connect`);
      }
      this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (error) {
        let t2 = error.message;
        throw Error(`WebSocket not available: ${t2}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e8, t2) {
    this._cancelPendingDisconnect();
    if (this.isDisconnecting()) {
      return `ok`;
    }
    return await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer);
      this._terminateWorker();
    }, e8, t2);
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e8) {
    let t2 = await e8.unsubscribe();
    if (t2 === `ok`) {
      e8.teardown();
    }
    return t2;
  }
  async removeAllChannels() {
    let e8 = this.channels.map(async (e9) => {
      let t3 = await e9.unsubscribe();
      e9.teardown();
      return t3;
    });
    let t2 = await Promise.all(e8);
    await this.disconnect();
    return t2;
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
  channel(e8, t2 = {
    config: {}
  }) {
    let n2 = `realtime:${e8}`;
    let r2 = this.getChannels().find((e9) => e9.topic === n2);
    if (r2) {
      return r2;
    }
    {
      let n3 = new _t(`realtime:${e8}`, t2, this);
      this._cancelPendingDisconnect();
      this.channels.push(n3);
      return n3;
    }
  }
  push(e8) {
    this.socketAdapter.push(e8);
  }
  async setAuth(e8 = null) {
    let t2 = ++this._authGeneration;
    let n2 = this._performAuth(e8, t2);
    if (t2 === this._authGeneration) {
      this._authPromise = n2;
    }
    try {
      await n2;
    } finally {
      if (this._authPromise === n2) {
        this._authPromise = null;
      }
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
    this.channels = this.channels.filter((t2) => t2.topic !== e8.topic);
    if (this.channels.length === 0) {
      this.log(`transport`, `no channels remaining, scheduling disconnect`);
      this._schedulePendingDisconnect();
    }
  }
  _schedulePendingDisconnect() {
    this._cancelPendingDisconnect();
    if (this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log(`transport`, `disconnecting immediately - no channels`);
      this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null;
      if (this.channels.length === 0) {
        this.log(`transport`, `deferred disconnect fired - no channels, disconnecting`);
        this.disconnect();
      }
    }, this._disconnectOnEmptyChannelsAfterMs);
    this.log(`transport`, `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  _cancelPendingDisconnect() {
    if (this._pendingDisconnectTimer !== null) {
      this.log(`transport`, `pending disconnect cancelled - channel activity detected`);
      clearTimeout(this._pendingDisconnectTimer);
      this._pendingDisconnectTimer = null;
    }
  }
  async _performAuth(e8, t2) {
    let access_token;
    let r2 = false;
    if (e8) {
      access_token = e8;
      r2 = true;
    } else if (this.accessToken) {
      try {
        access_token = await this.accessToken();
      } catch (error) {
        this.log(`error`, `Error fetching access token from callback`, error);
        access_token = this.accessTokenValue;
      }
    } else {
      access_token = this.accessTokenValue;
    }
    if (t2 === this._authGeneration) {
      if (this.accessToken) {
        this._manuallySetToken = false;
      } else if (r2) {
        this._manuallySetToken = true;
      }
      if (this.accessTokenValue != access_token) {
        this.accessTokenValue = access_token;
        this.channels.forEach((e9) => {
          let t3 = {
            access_token,
            version
          };
          e9.updateJoinPayload(t3);
          if (e9.joinedOnce && e9.channelAdapter.isJoined()) {
            e9.channelAdapter.push(xe.access_token, {
              access_token
            });
          }
        });
      }
    }
  }
  async _waitForAuthIfNeeded() {
    if (this._authPromise) {
      await this._authPromise;
    }
  }
  _setAuthSafely(e8 = `general`) {
    if (!this._isManualToken()) {
      this.setAuth().catch((t2) => {
        this.log(`error`, `Error setting auth in ${e8}`, t2);
      });
    }
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((e8) => {
        this.log(`error`, `error waiting for auth on connect`, e8);
      });
      if (this.worker && !this.workerRef) {
        this._startWorkerHeartbeat();
      }
    });
    this.socketAdapter.onClose(() => {
      if (this.worker && this.workerRef) {
        this._terminateWorker();
      }
    });
    this.socketAdapter.onMessage((e8) => {
      if (e8.ref && e8.ref === this._pendingWorkerHeartbeatRef) {
        this._pendingWorkerHeartbeatRef = null;
      }
    });
  }
  _handleNodeJsRaceCondition() {
    if (this.socketAdapter.isConnected()) {
      this.socketAdapter.getSocket().onConnOpen();
    }
  }
  _wrapHeartbeatCallback(e8) {
    return (t2, n2) => {
      if (t2 !== `disconnected`) {
        if (t2 == `sent`) {
          this._setAuthSafely();
        }
        if (e8) {
          e8(t2, n2);
        }
      }
    };
  }
  _startWorkerHeartbeat() {
    if (this.workerUrl) {
      this.log(`worker`, `starting worker for from ${this.workerUrl}`);
    } else {
      this.log(`worker`, `starting default worker`);
    }
    let e8 = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e8);
    this.workerRef.onerror = (e9) => {
      this.log(`worker`, `worker error`, e9.message);
      this._terminateWorker();
      this.disconnect();
    };
    this.workerRef.onmessage = (e9) => {
      if (e9.data.event === `keepAlive`) {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: `start`,
      interval: this.heartbeatIntervalMs
    });
  }
  _terminateWorker() {
    this.workerRef &&= (this.log(`worker`, `terminating worker`), this.workerRef.terminate(), void 0);
  }
  _workerObjectUrl(e8) {
    let t2;
    if (e8) {
      t2 = e8;
    } else {
      let e9 = new Blob([wt], {
        type: `application/javascript`
      });
      t2 = URL.createObjectURL(e9);
    }
    return t2;
  }
  _initializeOptions(e8) {
    this.worker = e8?.worker ?? false;
    this.accessToken = e8?.accessToken ?? null;
    let t2 = {};
    t2.timeout = e8?.timeout ?? ve;
    t2.heartbeatIntervalMs = e8?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL;
    this._disconnectOnEmptyChannelsAfterMs = e8?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e8?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL);
    t2.transport = e8?.transport ?? pe.getWebSocketConstructor();
    t2.params = e8?.params;
    t2.logger = e8?.logger;
    t2.heartbeatCallback = this._wrapHeartbeatCallback(e8?.heartbeatCallback);
    t2.sessionStorage = e8?.sessionStorage ?? Ct();
    t2.reconnectAfterMs = e8?.reconnectAfterMs ?? ((e9) => bt[e9 - 1] || xt);
    let n2;
    let r2;
    let i2 = e8?.vsn ?? _e;
    switch (i2) {
      case he:
        n2 = (e9, t3) => t3(JSON.stringify(e9));
        r2 = (e9, t3) => t3(JSON.parse(e9));
        break;
      case ge:
        n2 = this.serializer.encode.bind(this.serializer);
        r2 = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw Error(`Unsupported serializer version: ${t2.vsn}`);
    }
    t2.vsn = i2;
    t2.encode = e8?.encode ?? n2;
    t2.decode = e8?.decode ?? r2;
    t2.beforeReconnect = this._reconnectAuth.bind(this);
    if (e8?.logLevel || e8?.log_level) {
      this.logLevel = e8.logLevel || e8.log_level;
      t2.params = {
        ...t2.params,
        log_level: this.logLevel
      };
    }
    if (this.worker) {
      if (typeof window < `u` && !window.Worker) {
        throw Error(`Web Worker is not supported`);
      }
      this.workerUrl = e8?.workerUrl;
      t2.autoSendHeartbeat = !this.worker;
    }
    return t2;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded();
    if (!this.isConnected()) {
      this.connect();
    }
  }
};
var Et = class extends Error {
  constructor(e8, t2) {
    super(e8);
    this.name = `IcebergError`;
    this.status = t2.status;
    this.icebergType = t2.icebergType;
    this.icebergCode = t2.icebergCode;
    this.details = t2.details;
    this.isCommitStateUnknown = t2.icebergType === `CommitStateUnknownException` || [500, 502, 504].includes(t2.status) && t2.icebergType?.includes(`CommitState`) === true;
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
function Dt(baseUrl, path, query) {
  let r2 = new URL(path, baseUrl);
  if (query) {
    for (let [e8, t2] of Object.entries(query)) {
      if (t2 !== void 0) {
        r2.searchParams.set(e8, t2);
      }
    }
  }
  return r2.toString();
}
async function Ot(auth) {
  if (!auth || auth.type === `none`) {
    return {};
  }
  if (auth.type === `bearer`) {
    return {
      Authorization: `Bearer ${auth.token}`
    };
  }
  if (auth.type === `header`) {
    return {
      [auth.name]: auth.value
    };
  }
  if (auth.type === `custom`) {
    return await auth.getHeaders();
  }
  return {};
}
function kt(e8) {
  let t2 = e8.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method,
      path,
      query,
      body,
      headers
    }) {
      let s2 = Dt(e8.baseUrl, path, query);
      let c2 = await Ot(e8.auth);
      let l2 = await t2(s2, {
        method,
        headers: {
          ...body ? {
            "Content-Type": `application/json`
          } : {},
          ...c2,
          ...headers
        },
        body: body ? JSON.stringify(body) : void 0
      });
      let u2 = await l2.text();
      let d2 = (l2.headers.get(`content-type`) || ``).includes(`application/json`);
      let f2 = d2 && u2 ? JSON.parse(u2) : u2;
      if (!l2.ok) {
        let e9 = d2 ? f2 : void 0;
        let t3 = e9?.error;
        throw new Et(t3?.message ?? `Request failed with status ${l2.status}`, {
          status: l2.status,
          icebergType: t3?.type,
          icebergCode: t3?.code,
          details: e9
        });
      }
      return {
        status: l2.status,
        headers: l2.headers,
        data: f2
      };
    }
  };
}
function At(namespace) {
  return namespace.join(``);
}
var jt = class {
  constructor(e8, t2 = ``) {
    this.client = e8;
    this.prefix = t2;
  }
  async listNamespaces(e8) {
    let query = e8 ? {
      parent: At(e8.namespace)
    } : void 0;
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces`,
      query
    })).data.namespaces.map((namespace) => ({
      namespace
    }));
  }
  async createNamespace(e8, t2) {
    let n2 = {
      namespace: e8.namespace,
      properties: t2?.properties
    };
    return (await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces`,
      body: n2
    })).data;
  }
  async dropNamespace(e8) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${At(e8.namespace)}`
    });
  }
  async loadNamespaceMetadata(e8) {
    return {
      properties: (await this.client.request({
        method: `GET`,
        path: `${this.prefix}/namespaces/${At(e8.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e8) {
    try {
      await this.client.request({
        method: `HEAD`,
        path: `${this.prefix}/namespaces/${At(e8.namespace)}`
      });
      return true;
    } catch (error) {
      if (error instanceof Et && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createNamespaceIfNotExists(e8, t2) {
    try {
      return await this.createNamespace(e8, t2);
    } catch (error) {
      if (error instanceof Et && error.status === 409) {
        return;
      }
      throw error;
    }
  }
};
function O(namespace) {
  return namespace.join(``);
}
var Mt = class {
  constructor(e8, t2 = ``, n2) {
    this.client = e8;
    this.prefix = t2;
    this.accessDelegation = n2;
  }
  async listTables(e8) {
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e8, t2) {
    let n2 = {};
    if (this.accessDelegation) {
      n2[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    return (await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables`,
      body: t2,
      headers: n2
    })).data.metadata;
  }
  async updateTable(e8, t2) {
    let n2 = await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`,
      body: t2
    });
    return {
      "metadata-location": n2.data[`metadata-location`],
      metadata: n2.data.metadata
    };
  }
  async dropTable(e8, t2) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`,
      query: {
        purgeRequested: String(t2?.purge ?? false)
      }
    });
  }
  async loadTable(e8) {
    let t2 = {};
    if (this.accessDelegation) {
      t2[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`,
      headers: t2
    })).data.metadata;
  }
  async tableExists(e8) {
    let t2 = {};
    if (this.accessDelegation) {
      t2[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: `HEAD`,
        path: `${this.prefix}/namespaces/${O(e8.namespace)}/tables/${e8.name}`,
        headers: t2
      });
      return true;
    } catch (error) {
      if (error instanceof Et && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createTableIfNotExists(e8, t2) {
    try {
      return await this.createTable(e8, t2);
    } catch (error) {
      if (error instanceof Et && error.status === 409) {
        return await this.loadTable({
          namespace: e8.namespace,
          name: t2.name
        });
      }
      throw error;
    }
  }
};
var Nt = class {
  constructor(e8) {
    let t2 = `v1`;
    if (e8.catalogName) {
      t2 += `/${e8.catalogName}`;
    }
    let baseUrl = e8.baseUrl.endsWith(`/`) ? e8.baseUrl : `${e8.baseUrl}/`;
    this.client = kt({
      baseUrl,
      auth: e8.auth,
      fetchImpl: e8.fetch
    });
    this.accessDelegation = e8.accessDelegation?.join(`,`);
    this.namespaceOps = new jt(this.client, t2);
    this.tableOps = new Mt(this.client, t2, this.accessDelegation);
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
var zt = class extends Error {
  constructor(e8, t2 = `storage`, n2, r2) {
    super(e8);
    this.__isStorageError = true;
    this.namespace = t2;
    this.name = t2 === `vectors` ? `StorageVectorsError` : `StorageError`;
    this.status = n2;
    this.statusCode = r2;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function Bt(error) {
  return typeof error == `object` && !!error && `__isStorageError` in error;
}
var Vt = class extends zt {
  constructor(e8, t2, n2, r2 = `storage`, i2) {
    super(e8, r2, t2, n2);
    this.name = r2 === `vectors` ? `StorageVectorsApiError` : `StorageApiError`;
    this.status = t2;
    this.statusCode = n2;
    this.code = i2;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      code: this.code
    };
  }
};
var Ht = class extends zt {
  constructor(e8, t2, n2 = `storage`) {
    super(e8, n2);
    this.name = n2 === `vectors` ? `StorageVectorsUnknownError` : `StorageUnknownError`;
    this.originalError = t2;
  }
};
function Ut(e8, t2, n2) {
  let r2 = {
    ...e8
  };
  let i2 = t2.toLowerCase();
  for (let e9 of Object.keys(r2)) {
    if (e9.toLowerCase() === i2) {
      delete r2[e9];
    }
  }
  r2[i2] = n2;
  return r2;
}
function Wt(e8) {
  let t2 = {};
  for (let [n2, r2] of Object.entries(e8)) {
    t2[n2.toLowerCase()] = r2;
  }
  return t2;
}
var Gt = (e8) => {
  if (e8) {
    return (...t2) => e8(...t2);
  }
  return (...e9) => fetch(...e9);
};
var Kt = (e8) => {
  if (typeof e8 != `object` || !e8) {
    return false;
  }
  let t2 = Object.getPrototypeOf(e8);
  return (t2 === null || t2 === Object.prototype || Object.getPrototypeOf(t2) === null) && !(Symbol.toStringTag in e8) && !(Symbol.iterator in e8);
};
var qt = (e8) => {
  if (Array.isArray(e8)) {
    return e8.map((e9) => qt(e9));
  }
  if (typeof e8 == `function` || e8 !== Object(e8)) {
    return e8;
  }
  let t2 = {};
  Object.entries(e8).forEach(([e9, n2]) => {
    let r2 = e9.replace(/([-_][a-z])/gi, (e10) => e10.toUpperCase().replace(/[-_]/g, ``));
    t2[r2] = qt(n2);
  });
  return t2;
};
var Jt = (catalogName) => {
  if (!catalogName || typeof catalogName != `string` || catalogName.length === 0 || catalogName.length > 100 || catalogName.trim() !== catalogName || catalogName.includes(`/`) || catalogName.includes(`\\`)) {
    return false;
  }
  return /^[\w!.\*'() &$@=;:+,?-]+$/.test(catalogName);
};
var Yt = (e8) => e8.split(`/`).map(encodeURIComponent).join(`/`);
var Xt = (e8) => {
  if (typeof e8 == `object` && e8) {
    let t2 = e8;
    if (typeof t2.msg == `string`) {
      return t2.msg;
    }
    if (typeof t2.message == `string`) {
      return t2.message;
    }
    if (typeof t2.error_description == `string`) {
      return t2.error_description;
    }
    if (typeof t2.error == `string`) {
      return t2.error;
    }
    if (typeof t2.error == `object` && t2.error !== null) {
      let e9 = t2.error;
      if (typeof e9.message == `string`) {
        return e9.message;
      }
    }
  }
  return JSON.stringify(e8);
};
var Zt = async (e8, reject, n2, r2) => {
  if (typeof e8 == `object` && e8 && `json` in e8 && typeof e8.json == `function`) {
    let n3 = e8;
    let i2 = parseInt(String(n3.status), 10);
    if (!Number.isFinite(i2)) {
      i2 = 500;
    }
    n3.json().then((e9) => {
      let n4 = e9?.statusCode || e9?.code || i2 + ``;
      reject(new Vt(Xt(e9), i2, n4, r2, e9?.code));
    }).catch(() => {
      let e9 = i2 + ``;
      reject(new Vt(n3.statusText || `HTTP ${i2} error`, i2, e9, r2));
    });
  } else {
    reject(new Ht(Xt(e8), e8, r2));
  }
};
var Qt = (e8, t2, n2, r2) => {
  let i2 = {
    method: e8,
    headers: t2?.headers || {}
  };
  if (e8 === `GET` || e8 === `HEAD` || !r2) {
    return {
      ...i2,
      ...n2
    };
  }
  if (Kt(r2)) {
    let e9 = t2?.headers || {};
    let n3;
    for (let [t3, r3] of Object.entries(e9)) {
      if (t3.toLowerCase() === `content-type`) {
        n3 = r3;
      }
    }
    i2.headers = Ut(e9, `Content-Type`, n3 ?? `application/json`);
    i2.body = JSON.stringify(r2);
  } else {
    i2.body = r2;
  }
  if (t2?.duplex) {
    i2.duplex = t2.duplex;
  }
  return {
    ...i2,
    ...n2
  };
};
async function $t(e8, t2, n2, r2, i2, a2, o2) {
  return new Promise((resolve, reject) => {
    e8(n2, Qt(t2, r2, i2, a2)).then((e9) => {
      if (!e9.ok) {
        throw e9;
      }
      if (r2?.noResolveJson) {
        return e9;
      }
      if (o2 === `vectors`) {
        let t3 = e9.headers.get(`content-type`);
        if (e9.headers.get(`content-length`) === `0` || e9.status === 204 || !t3 || !t3.includes(`application/json`)) {
          return {};
        }
      }
      return e9.json();
    }).then((e9) => resolve(e9)).catch((e9) => Zt(e9, reject, r2, o2));
  });
}
function en(e8 = `storage`) {
  return {
    get: async (t2, n2, r2, i2) => $t(t2, `GET`, n2, r2, i2, void 0, e8),
    post: async (t2, n2, r2, i2, a2) => $t(t2, `POST`, n2, i2, a2, r2, e8),
    put: async (t2, n2, r2, i2, a2) => $t(t2, `PUT`, n2, i2, a2, r2, e8),
    head: async (t2, n2, r2, i2) => $t(t2, `HEAD`, n2, {
      ...r2,
      noResolveJson: true
    }, i2, void 0, e8),
    remove: async (t2, n2, r2, i2, a2) => $t(t2, `DELETE`, n2, i2, a2, r2, e8)
  };
}
var {
  get,
  post,
  put,
  head,
  remove
} = en(`storage`);
var j = en(`vectors`);
var M = class {
  constructor(e8, t2 = {}, n2, r2 = `storage`) {
    this.shouldThrowOnError = false;
    this.url = e8;
    this.headers = Wt(t2);
    this.fetch = Gt(n2);
    this.namespace = r2;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(e8, t2) {
    this.headers = Ut(this.headers, e8, t2);
    return this;
  }
  async handleOperation(e8) {
    const t2 = this;
    try {
      return {
        data: await e8(),
        error: null
      };
    } catch (error) {
      if (t2.shouldThrowOnError) {
        throw error;
      }
      if (Bt(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
var sn = class {
  constructor(e8, t2) {
    this.downloadFn = e8;
    this.shouldThrowOnError = t2;
    this[Symbol.toStringTag] = `StreamDownloadBuilder`;
    this.promise = null;
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
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    const e8 = this;
    try {
      return {
        data: (await e8.downloadFn()).body,
        error: null
      };
    } catch (error) {
      if (e8.shouldThrowOnError) {
        throw error;
      }
      if (Bt(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
var ln = class {
  constructor(e8, t2) {
    this.downloadFn = e8;
    this.shouldThrowOnError = t2;
    this[Symbol.toStringTag] = `BlobDownloadBuilder`;
    this.promise = null;
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
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    const e8 = this;
    try {
      return {
        data: await (await e8.downloadFn()).blob(),
        error: null
      };
    } catch (error) {
      if (e8.shouldThrowOnError) {
        throw error;
      }
      if (Bt(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
var un = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: `name`,
    order: `asc`
  }
};
var dn = {
  cacheControl: `3600`,
  contentType: `text/plain;charset=UTF-8`,
  upsert: false
};
var fn = class extends M {
  constructor(e8, t2 = {}, n2, r2) {
    super(e8, t2, r2, `storage`);
    this.bucketId = n2;
  }
  async uploadOrUpdate(e8, t2, n2, r2) {
    const i2 = this;
    return i2.handleOperation(async () => {
      let a2;
      let o2 = {
        ...dn,
        ...r2
      };
      let s2 = {
        ...i2.headers,
        ...e8 === `POST` && {
          "x-upsert": String(o2.upsert)
        }
      };
      let o_metadata = o2.metadata;
      if (typeof Blob < `u` && n2 instanceof Blob) {
        a2 = new FormData();
        a2.append(`cacheControl`, o2.cacheControl);
        if (o_metadata) {
          a2.append(`metadata`, i2.encodeMetadata(o_metadata));
        }
        a2.append(``, n2);
      } else if (typeof FormData < `u` && n2 instanceof FormData) {
        a2 = n2;
        if (!a2.has(`cacheControl`)) {
          a2.append(`cacheControl`, o2.cacheControl);
        }
        if (o_metadata && !a2.has(`metadata`)) {
          a2.append(`metadata`, i2.encodeMetadata(o_metadata));
        }
      } else {
        a2 = n2;
        s2[`cache-control`] = `max-age=${o2.cacheControl}`;
        s2[`content-type`] = o2.contentType;
        if (o_metadata) {
          s2[`x-metadata`] = i2.toBase64(i2.encodeMetadata(o_metadata));
        }
        if ((typeof ReadableStream < `u` && a2 instanceof ReadableStream || a2 && typeof a2 == `object` && `pipe` in a2 && typeof a2.pipe == `function`) && !o2.duplex) {
          o2.duplex = `half`;
        }
      }
      if (r2?.headers) {
        for (let [e9, t3] of Object.entries(r2.headers)) {
          s2 = Ut(s2, e9, t3);
        }
      }
      let l2 = i2._removeEmptyFolders(t2);
      let u2 = i2._getFinalPath(l2);
      let d2 = await (e8 == `PUT` ? put : post)(i2.fetch, `${i2.url}/object/${u2}`, a2, {
        headers: s2,
        ...o2?.duplex ? {
          duplex: o2.duplex
        } : {}
      });
      return {
        path: l2,
        id: d2.Id,
        fullPath: d2.Key
      };
    });
  }
  async upload(e8, t2, n2) {
    return this.uploadOrUpdate(`POST`, e8, t2, n2);
  }
  async uploadToSignedUrl(e8, t2, n2, r2) {
    const i2 = this;
    let a2 = i2._removeEmptyFolders(e8);
    let o2 = i2._getFinalPath(a2);
    let s2 = new URL(i2.url + `/object/upload/sign/${o2}`);
    s2.searchParams.set(`token`, t2);
    return i2.handleOperation(async () => {
      let e9;
      let t3 = {
        ...dn,
        ...r2
      };
      let o3 = {
        ...i2.headers,
        "x-upsert": String(t3.upsert)
      };
      let t_metadata = t3.metadata;
      if (typeof Blob < `u` && n2 instanceof Blob) {
        e9 = new FormData();
        e9.append(`cacheControl`, t3.cacheControl);
        if (t_metadata) {
          e9.append(`metadata`, i2.encodeMetadata(t_metadata));
        }
        e9.append(``, n2);
      } else if (typeof FormData < `u` && n2 instanceof FormData) {
        e9 = n2;
        if (!e9.has(`cacheControl`)) {
          e9.append(`cacheControl`, t3.cacheControl);
        }
        if (t_metadata && !e9.has(`metadata`)) {
          e9.append(`metadata`, i2.encodeMetadata(t_metadata));
        }
      } else {
        e9 = n2;
        o3[`cache-control`] = `max-age=${t3.cacheControl}`;
        o3[`content-type`] = t3.contentType;
        if (t_metadata) {
          o3[`x-metadata`] = i2.toBase64(i2.encodeMetadata(t_metadata));
        }
        if ((typeof ReadableStream < `u` && e9 instanceof ReadableStream || e9 && typeof e9 == `object` && `pipe` in e9 && typeof e9.pipe == `function`) && !t3.duplex) {
          t3.duplex = `half`;
        }
      }
      if (r2?.headers) {
        for (let [e10, t4] of Object.entries(r2.headers)) {
          o3 = Ut(o3, e10, t4);
        }
      }
      return {
        path: a2,
        fullPath: (await put(i2.fetch, s2.toString(), e9, {
          headers: o3,
          ...t3?.duplex ? {
            duplex: t3.duplex
          } : {}
        })).Key
      };
    });
  }
  async createSignedUploadUrl(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => {
      let r2 = n2._getFinalPath(e8);
      let i2 = {
        ...n2.headers
      };
      if (t2?.upsert) {
        i2[`x-upsert`] = `true`;
      }
      let a2 = await post(n2.fetch, `${n2.url}/object/upload/sign/${r2}`, {}, {
        headers: i2
      });
      let o2 = new URL(n2.url + a2.url);
      let token = o2.searchParams.get(`token`);
      if (!token) {
        throw new zt(`No token returned by API`);
      }
      return {
        signedUrl: o2.toString(),
        path: e8,
        token
      };
    });
  }
  async update(e8, t2, n2) {
    return this.uploadOrUpdate(`PUT`, e8, t2, n2);
  }
  async move(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => await post(r2.fetch, `${r2.url}/object/move`, {
      bucketId: r2.bucketId,
      sourceKey: e8,
      destinationKey: t2,
      destinationBucket: n2?.destinationBucket,
      sourceVersionId: n2?.sourceVersionId
    }, {
      headers: r2.headers
    }));
  }
  async copy(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => ({
      path: (await post(r2.fetch, `${r2.url}/object/copy`, {
        bucketId: r2.bucketId,
        sourceKey: e8,
        destinationKey: t2,
        destinationBucket: n2?.destinationBucket,
        sourceVersionId: n2?.sourceVersionId
      }, {
        headers: r2.headers
      })).Key
    }));
  }
  async createSignedUrl(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => {
      let i2 = r2._getFinalPath(e8);
      let a2 = typeof n2?.transform == `object` && n2.transform !== null && Object.keys(n2.transform).length > 0;
      let o2 = await post(r2.fetch, `${r2.url}/object/sign/${i2}`, {
        expiresIn: t2,
        ...a2 ? {
          transform: n2.transform
        } : {},
        ...!(n2?.versionId == null) ? {
          versionId: n2.versionId
        } : {}
      }, {
        headers: r2.headers
      });
      let s2 = new URLSearchParams();
      if (n2?.download) {
        s2.set(`download`, n2.download === true ? `` : n2.download);
      }
      if (n2?.cacheNonce != null) {
        s2.set(`cacheNonce`, String(n2.cacheNonce));
      }
      let c2 = s2.toString();
      return {
        signedUrl: encodeURI(`${r2.url}${o2.signedURL}${c2 ? `&${c2}` : ``}`)
      };
    });
  }
  async createSignedUrls(paths, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => {
      let i2 = await post(r2.fetch, `${r2.url}/object/sign/${r2.bucketId}`, {
        expiresIn: t2,
        paths
      }, {
        headers: r2.headers
      });
      let a2 = new URLSearchParams();
      if (n2?.download) {
        a2.set(`download`, n2.download === true ? `` : n2.download);
      }
      if (n2?.cacheNonce != null) {
        a2.set(`cacheNonce`, String(n2.cacheNonce));
      }
      let o2 = a2.toString();
      return i2.map((e8) => ({
        ...e8,
        signedUrl: e8.signedURL ? encodeURI(`${r2.url}${e8.signedURL}${o2 ? `&${o2}` : ``}`) : null
      }));
    });
  }
  download(e8, t2, n2) {
    let r2 = typeof t2?.transform == `object` && t2.transform !== null && Object.keys(t2.transform).length > 0 ? `render/image/authenticated` : `object`;
    let i2 = new URLSearchParams();
    if (t2?.transform) {
      this.applyTransformOptsToQuery(i2, t2.transform);
    }
    if (t2?.cacheNonce != null) {
      i2.set(`cacheNonce`, String(t2.cacheNonce));
    }
    if (t2?.versionId != null) {
      i2.set(`versionId`, String(t2.versionId));
    }
    let a2 = i2.toString();
    let o2 = this._getFinalPath(e8);
    return new ln(() => get(this.fetch, `${this.url}/${r2}/${o2}${a2 ? `?${a2}` : ``}`, {
      headers: this.headers,
      noResolveJson: true
    }, n2), this.shouldThrowOnError);
  }
  async info(e8, t2) {
    const n2 = this;
    let r2 = n2._getFinalPath(e8);
    let i2 = new URLSearchParams();
    if (t2?.versionId != null) {
      i2.set(`versionId`, String(t2.versionId));
    }
    let a2 = i2.toString();
    return n2.handleOperation(async () => qt(await get(n2.fetch, `${n2.url}/object/info/${r2}${a2 ? `?${a2}` : ``}`, {
      headers: n2.headers
    })));
  }
  async exists(e8) {
    const t2 = this;
    let n2 = t2._getFinalPath(e8);
    try {
      await head(t2.fetch, `${t2.url}/object/${n2}`, {
        headers: t2.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (error) {
      if (t2.shouldThrowOnError) {
        throw error;
      }
      if (Bt(error)) {
        let t3 = error instanceof Vt ? error.status : error instanceof Ht ? error.originalError?.status : void 0;
        if (t3 !== void 0 && [400, 404].includes(t3)) {
          return {
            data: false,
            error
          };
        }
      }
      throw error;
    }
  }
  getPublicUrl(e8, t2) {
    let n2 = this._getFinalPath(e8);
    let r2 = new URLSearchParams();
    if (t2?.download) {
      r2.set(`download`, t2.download === true ? `` : t2.download);
    }
    if (t2?.transform) {
      this.applyTransformOptsToQuery(r2, t2.transform);
    }
    if (t2?.cacheNonce != null) {
      r2.set(`cacheNonce`, String(t2.cacheNonce));
    }
    if (t2?.versionId != null) {
      r2.set(`versionId`, String(t2.versionId));
    }
    let i2 = r2.toString();
    let a2 = typeof t2?.transform == `object` && t2.transform !== null && Object.keys(t2.transform).length > 0 ? `render/image` : `object`;
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${a2}/public/${n2}`) + (i2 ? `?${i2}` : ``)
      }
    };
  }
  async remove(prefixes) {
    const t2 = this;
    return t2.handleOperation(async () => await remove(t2.fetch, `${t2.url}/object/${t2.bucketId}`, {
      prefixes
    }, {
      headers: t2.headers
    }));
  }
  async purgeCache(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => {
      let i2 = Yt(r2._getFinalPath(e8));
      let a2 = new URLSearchParams();
      if (t2?.transformations) {
        a2.set(`transformations`, `true`);
      }
      let o2 = a2.toString();
      return await remove(r2.fetch, `${r2.url}/cdn/${i2}${o2 ? `?${o2}` : ``}`, {}, {
        headers: r2.headers
      }, n2);
    });
  }
  async list(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => {
      let sortBy = t2?.sortBy ? {
        ...un.sortBy,
        ...t2.sortBy
      } : un.sortBy;
      let a2 = {
        ...un,
        ...t2,
        sortBy,
        prefix: e8 || ``
      };
      return await post(r2.fetch, `${r2.url}/object/list/${r2.bucketId}`, a2, {
        headers: r2.headers
      }, n2);
    });
  }
  async listV2(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => {
      let r2 = {
        ...e8
      };
      return await post(n2.fetch, `${n2.url}/object/list-v2/${n2.bucketId}`, r2, {
        headers: n2.headers
      }, t2);
    });
  }
  encodeMetadata(e8) {
    return JSON.stringify(e8);
  }
  toBase64(e8) {
    if (typeof Buffer < `u`) {
      return Buffer.from(e8).toString(`base64`);
    }
    return btoa(e8);
  }
  _getFinalPath(e8) {
    return `${this.bucketId}/${e8.replace(/^\/+/, ``)}`;
  }
  _removeEmptyFolders(e8) {
    return e8.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`);
  }
  applyTransformOptsToQuery(e8, t2) {
    if (t2.width) {
      e8.set(`width`, t2.width.toString());
    }
    if (t2.height) {
      e8.set(`height`, t2.height.toString());
    }
    if (t2.resize) {
      e8.set(`resize`, t2.resize);
    }
    if (t2.format) {
      e8.set(`format`, t2.format);
    }
    if (t2.quality) {
      e8.set(`quality`, t2.quality.toString());
    }
    return e8;
  }
};
var pn = {
  "X-Client-Info": `storage-js/2.117.2`
};
var mn = class extends M {
  constructor(e8, t2 = {}, n2, r2) {
    let i2 = new URL(e8);
    if (r2?.useNewHostname && /supabase\.(co|in|red)$/.test(i2.hostname) && !i2.hostname.includes(`storage.supabase.`)) {
      i2.hostname = i2.hostname.replace(`supabase.`, `storage.supabase.`);
    }
    let a2 = i2.href.replace(/\/$/, ``);
    let o2 = {
      ...pn,
      ...t2
    };
    super(a2, o2, n2, `storage`);
  }
  async listBuckets(e8) {
    const t2 = this;
    return t2.handleOperation(async () => {
      let n2 = t2.listBucketOptionsToQueryString(e8);
      return await get(t2.fetch, `${t2.url}/bucket${n2}`, {
        headers: t2.headers
      });
    });
  }
  async getBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await get(t2.fetch, `${t2.url}/bucket/${e8}`, {
      headers: t2.headers
    }));
  }
  async createBucket(e8, t2 = {
    public: false
  }) {
    const n2 = this;
    return n2.handleOperation(async () => await post(n2.fetch, `${n2.url}/bucket`, {
      id: e8,
      name: e8,
      type: t2.type,
      public: t2.public,
      file_size_limit: t2.fileSizeLimit,
      allowed_mime_types: t2.allowedMimeTypes,
      versioning_status: t2.versioningStatus
    }, {
      headers: n2.headers
    }));
  }
  async updateBucket(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => await put(n2.fetch, `${n2.url}/bucket/${e8}`, {
      id: e8,
      name: e8,
      public: t2.public,
      file_size_limit: t2.fileSizeLimit,
      allowed_mime_types: t2.allowedMimeTypes,
      versioning_status: t2.versioningStatus
    }, {
      headers: n2.headers
    }));
  }
  async emptyBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await post(t2.fetch, `${t2.url}/bucket/${e8}/empty`, {}, {
      headers: t2.headers
    }));
  }
  async deleteBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await remove(t2.fetch, `${t2.url}/bucket/${e8}`, {}, {
      headers: t2.headers
    }));
  }
  async getBucketLifecycle(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await get(t2.fetch, t2.bucketLifecycleUrl(e8), {
      headers: t2.headers
    }));
  }
  async updateBucketLifecycle(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => await put(n2.fetch, n2.bucketLifecycleUrl(e8), t2, {
      headers: n2.headers
    }));
  }
  async deleteBucketLifecycle(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await remove(t2.fetch, t2.bucketLifecycleUrl(e8), {}, {
      headers: t2.headers
    }));
  }
  async purgeBucketCache(e8, t2, n2) {
    const r2 = this;
    return r2.handleOperation(async () => {
      let i2 = new URLSearchParams();
      if (t2?.transformations) {
        i2.set(`transformations`, `true`);
      }
      let a2 = i2.toString();
      return await remove(r2.fetch, `${r2.url}/cdn/${Yt(e8)}${a2 ? `?${a2}` : ``}`, {}, {
        headers: r2.headers
      }, n2);
    });
  }
  bucketLifecycleUrl(e8) {
    return `${this.url}/bucket/${Yt(e8)}/lifecycle`;
  }
  listBucketOptionsToQueryString(e8) {
    let t2 = {};
    if (e8) {
      if (`limit` in e8) {
        t2.limit = String(e8.limit);
      }
      if (`offset` in e8) {
        t2.offset = String(e8.offset);
      }
      if (e8.search) {
        t2.search = e8.search;
      }
      if (e8.sortColumn) {
        t2.sortColumn = e8.sortColumn;
      }
      if (e8.sortOrder) {
        t2.sortOrder = e8.sortOrder;
      }
    }
    if (Object.keys(t2).length > 0) {
      return `?` + new URLSearchParams(t2).toString();
    }
    return ``;
  }
};
var hn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``);
    let i2 = {
      ...pn,
      ...t2
    };
    super(r2, i2, n2, `storage`);
  }
  async createBucket(name) {
    const t2 = this;
    return t2.handleOperation(async () => await post(t2.fetch, `${t2.url}/bucket`, {
      name
    }, {
      headers: t2.headers
    }));
  }
  async listBuckets(e8) {
    const t2 = this;
    return t2.handleOperation(async () => {
      let n2 = new URLSearchParams();
      if (e8?.limit !== void 0) {
        n2.set(`limit`, e8.limit.toString());
      }
      if (e8?.offset !== void 0) {
        n2.set(`offset`, e8.offset.toString());
      }
      if (e8?.sortColumn) {
        n2.set(`sortColumn`, e8.sortColumn);
      }
      if (e8?.sortOrder) {
        n2.set(`sortOrder`, e8.sortOrder);
      }
      if (e8?.search) {
        n2.set(`search`, e8.search);
      }
      let r2 = n2.toString();
      let i2 = r2 ? `${t2.url}/bucket?${r2}` : `${t2.url}/bucket`;
      return await get(t2.fetch, i2, {
        headers: t2.headers
      });
    });
  }
  async deleteBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await remove(t2.fetch, `${t2.url}/bucket/${e8}`, {}, {
      headers: t2.headers
    }));
  }
  from(catalogName) {
    const t2 = this;
    if (!Jt(catalogName)) {
      throw new zt(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);
    }
    let n2 = new Nt({
      baseUrl: this.url,
      catalogName,
      auth: {
        type: `custom`,
        getHeaders: async () => t2.headers
      },
      fetch: this.fetch
    });
    let shouldThrowOnError = this.shouldThrowOnError;
    return new Proxy(n2, {
      get(e8, t3) {
        let n3 = e8[t3];
        if (typeof n3 == `function`) {
          return async (...t4) => {
            try {
              return {
                data: await n3.apply(e8, t4),
                error: null
              };
            } catch (error) {
              if (shouldThrowOnError) {
                throw error;
              }
              return {
                data: null,
                error
              };
            }
          };
        }
        return n3;
      }
    });
  }
};
var gn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``);
    let i2 = {
      ...pn,
      "Content-Type": `application/json`,
      ...t2
    };
    super(r2, i2, n2, `vectors`);
  }
  async createIndex(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/CreateIndex`, e8, {
      headers: t2.headers
    }) || {});
  }
  async getIndex(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => await j.post(n2.fetch, `${n2.url}/GetIndex`, {
      vectorBucketName: e8,
      indexName: t2
    }, {
      headers: n2.headers
    }));
  }
  async listIndexes(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListIndexes`, e8, {
      headers: t2.headers
    }));
  }
  async deleteIndex(e8, t2) {
    const n2 = this;
    return n2.handleOperation(async () => await j.post(n2.fetch, `${n2.url}/DeleteIndex`, {
      vectorBucketName: e8,
      indexName: t2
    }, {
      headers: n2.headers
    }) || {});
  }
};
var _n = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``);
    let i2 = {
      ...pn,
      "Content-Type": `application/json`,
      ...t2
    };
    super(r2, i2, n2, `vectors`);
  }
  async putVectors(e8) {
    const t2 = this;
    if (e8.vectors.length < 1 || e8.vectors.length > 500) {
      throw Error(`Vector batch size must be between 1 and 500 items`);
    }
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/PutVectors`, e8, {
      headers: t2.headers
    }) || {});
  }
  async getVectors(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/GetVectors`, e8, {
      headers: t2.headers
    }));
  }
  async listVectors(e8) {
    const t2 = this;
    if (e8.segmentCount !== void 0) {
      if (e8.segmentCount < 1 || e8.segmentCount > 16) {
        throw Error(`segmentCount must be between 1 and 16`);
      }
      if (e8.segmentIndex !== void 0 && (e8.segmentIndex < 0 || e8.segmentIndex >= e8.segmentCount)) {
        throw Error(`segmentIndex must be between 0 and ${e8.segmentCount - 1}`);
      }
    }
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListVectors`, e8, {
      headers: t2.headers
    }));
  }
  async queryVectors(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/QueryVectors`, e8, {
      headers: t2.headers
    }));
  }
  async deleteVectors(e8) {
    const t2 = this;
    if (e8.keys.length < 1 || e8.keys.length > 500) {
      throw Error(`Keys batch size must be between 1 and 500 items`);
    }
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/DeleteVectors`, e8, {
      headers: t2.headers
    }) || {});
  }
};
var vn = class extends M {
  constructor(e8, t2 = {}, n2) {
    let r2 = e8.replace(/\/$/, ``);
    let i2 = {
      ...pn,
      "Content-Type": `application/json`,
      ...t2
    };
    super(r2, i2, n2, `vectors`);
  }
  async createBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/CreateVectorBucket`, {
      vectorBucketName: e8
    }, {
      headers: t2.headers
    }) || {});
  }
  async getBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/GetVectorBucket`, {
      vectorBucketName: e8
    }, {
      headers: t2.headers
    }));
  }
  async listBuckets(e8 = {}) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/ListVectorBuckets`, e8, {
      headers: t2.headers
    }));
  }
  async deleteBucket(e8) {
    const t2 = this;
    return t2.handleOperation(async () => await j.post(t2.fetch, `${t2.url}/DeleteVectorBucket`, {
      vectorBucketName: e8
    }, {
      headers: t2.headers
    }) || {});
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
    const t2 = () => super.createBucket;
    const n2 = this;
    return t2().call(n2, e8);
  }
  async getBucket(e8) {
    const t2 = () => super.getBucket;
    const n2 = this;
    return t2().call(n2, e8);
  }
  async listBuckets(e8 = {}) {
    const t2 = () => super.listBuckets;
    const n2 = this;
    return t2().call(n2, e8);
  }
  async deleteBucket(e8) {
    const t2 = () => super.deleteBucket;
    const n2 = this;
    return t2().call(n2, e8);
  }
};
var bn = class extends gn {
  constructor(e8, t2, n2, r2) {
    super(e8, t2, r2);
    this.vectorBucketName = n2;
  }
  async createIndex(e8) {
    const t2 = () => super.createIndex;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName
    });
  }
  async listIndexes(e8 = {}) {
    const t2 = () => super.listIndexes;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName
    });
  }
  async getIndex(e8) {
    const t2 = () => super.getIndex;
    const n2 = this;
    return t2().call(n2, n2.vectorBucketName, e8);
  }
  async deleteIndex(e8) {
    const t2 = () => super.deleteIndex;
    const n2 = this;
    return t2().call(n2, n2.vectorBucketName, e8);
  }
  index(e8) {
    return new xn(this.url, this.headers, this.vectorBucketName, e8, this.fetch);
  }
};
var xn = class extends _n {
  constructor(e8, t2, n2, r2, i2) {
    super(e8, t2, i2);
    this.vectorBucketName = n2;
    this.indexName = r2;
  }
  async putVectors(e8) {
    const t2 = () => super.putVectors;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName,
      indexName: n2.indexName
    });
  }
  async getVectors(e8) {
    const t2 = () => super.getVectors;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName,
      indexName: n2.indexName
    });
  }
  async listVectors(e8 = {}) {
    const t2 = () => super.listVectors;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName,
      indexName: n2.indexName
    });
  }
  async queryVectors(e8) {
    const t2 = () => super.queryVectors;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName,
      indexName: n2.indexName
    });
  }
  async deleteVectors(e8) {
    const t2 = () => super.deleteVectors;
    const n2 = this;
    return t2().call(n2, {
      ...e8,
      vectorBucketName: n2.vectorBucketName,
      indexName: n2.indexName
    });
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
    return new yn(this.url + `/vector`, {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  get analytics() {
    return new hn(this.url + `/iceberg`, this.headers, this.fetch);
  }
};
var Cn = `2.117.2`;
var N = 3e4;
var wn = 3 * N;
var Tn = 2 * N;
var url = `http://localhost:9999`;
var Dn = `supabase.auth.token`;
var On = {
  "X-Client-Info": `gotrue-js/${Cn}`
};
var kn = `X-Supabase-Api-Version`;
var An = {
  "2024-01-01": {
    timestamp: Date.parse(`2024-01-01T00:00:00.0Z`),
    name: `2024-01-01`
  }
};
var jn = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
var Mn = `sb_flow_id`;
var Nn = class extends Error {
  constructor(e8, t2, n2) {
    super(e8);
    this.__isAuthError = true;
    this.name = `AuthError`;
    this.status = t2;
    this.code = n2;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
};
function P(e8) {
  return typeof e8 == `object` && !!e8 && `__isAuthError` in e8;
}
var Pn = class extends Nn {
  constructor(e8, t2, n2) {
    super(e8, t2, n2);
    this.name = `AuthApiError`;
    this.status = t2;
    this.code = n2;
  }
};
function Fn(error) {
  return P(error) && error.name === `AuthApiError`;
}
var F = class extends Nn {
  constructor(e8, t2) {
    super(e8);
    this.name = `AuthUnknownError`;
    this.originalError = t2;
  }
};
var I = class extends Nn {
  constructor(e8, t2, n2, r2) {
    super(e8, n2, r2);
    this.name = t2;
    this.status = n2;
  }
};
var L = class extends I {
  constructor() {
    super(`Auth session missing!`, `AuthSessionMissingError`, 400, void 0);
  }
};
function In(error) {
  return P(error) && error.name === `AuthSessionMissingError`;
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
    super(e8, `AuthImplicitGrantRedirectError`, 500, void 0);
    this.details = null;
    this.details = t2;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      details: this.details
    };
  }
};
function zn(error) {
  return P(error) && error.name === `AuthImplicitGrantRedirectError`;
}
var Bn = class extends I {
  constructor(e8, t2 = null) {
    super(e8, `AuthPKCEGrantCodeExchangeError`, 500, void 0);
    this.details = null;
    this.details = t2;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      details: this.details
    };
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
function Gn(error) {
  return P(error) && error.name === `AuthRefreshDiscardedError`;
}
var Kn = class extends I {
  constructor(e8, t2, n2) {
    super(e8, `AuthWeakPasswordError`, t2, `weak_password`);
    this.reasons = n2;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      reasons: this.reasons
    };
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
  for (let t2 = 0; t2 < e8.length; t2 += 1) {
    e8[t2] = -1;
  }
  for (let t2 = 0; t2 < Yn.length; t2 += 1) {
    e8[Yn[t2].charCodeAt(0)] = -2;
  }
  for (let t2 = 0; t2 < Jn.length; t2 += 1) {
    e8[Jn[t2].charCodeAt(0)] = t2;
  }
  return e8;
})();
function Zn(e8, t2, n2) {
  if (e8 !== null) {
    t2.queue = t2.queue << 8 | e8;
    for (t2.queuedBits += 8; t2.queuedBits >= 6; ) {
      n2(Jn[t2.queue >> t2.queuedBits - 6 & 63]);
      t2.queuedBits -= 6;
    }
  } else if (t2.queuedBits > 0) {
    t2.queue <<= 6 - t2.queuedBits;
    for (t2.queuedBits = 6; t2.queuedBits >= 6; ) {
      n2(Jn[t2.queue >> t2.queuedBits - 6 & 63]);
      t2.queuedBits -= 6;
    }
  }
}
function Qn(e8, t2, n2) {
  let r2 = Xn[e8];
  if (r2 > -1) {
    t2.queue = t2.queue << 6 | r2;
    for (t2.queuedBits += 6; t2.queuedBits >= 8; ) {
      n2(t2.queue >> t2.queuedBits - 8 & 255);
      t2.queuedBits -= 8;
    }
  } else if (r2 === -2) {
    return;
  } else {
    throw Error(`Invalid Base64-URL character "${String.fromCharCode(e8)}"`);
  }
}
function $n(e8) {
  let t2 = [];
  let n2 = (e9) => {
    t2.push(String.fromCodePoint(e9));
  };
  let r2 = {
    utf8seq: 0,
    codepoint: 0
  };
  let i2 = {
    queue: 0,
    queuedBits: 0
  };
  let a2 = (e9) => {
    nr(e9, r2, n2);
  };
  for (let t3 = 0; t3 < e8.length; t3 += 1) {
    Qn(e8.charCodeAt(t3), i2, a2);
  }
  return t2.join(``);
}
function er(e8, t2) {
  if (e8 <= 127) {
    t2(e8);
    return;
  }
  if (e8 <= 2047) {
    t2(192 | e8 >> 6);
    t2(128 | e8 & 63);
    return;
  }
  if (e8 <= 65535) {
    t2(224 | e8 >> 12);
    t2(128 | e8 >> 6 & 63);
    t2(128 | e8 & 63);
    return;
  }
  if (e8 <= 1114111) {
    t2(240 | e8 >> 18);
    t2(128 | e8 >> 12 & 63);
    t2(128 | e8 >> 6 & 63);
    t2(128 | e8 & 63);
    return;
  }
  throw Error(`Unrecognized Unicode codepoint: ${e8.toString(16)}`);
}
function tr(e8, t2) {
  for (let n2 = 0; n2 < e8.length; n2 += 1) {
    let r2 = e8.charCodeAt(n2);
    if (r2 > 55295 && r2 <= 56319) {
      let t3 = (r2 - 55296) * 1024 & 65535;
      r2 = (e8.charCodeAt(n2 + 1) - 56320 & 65535 | t3) + 65536;
      n2 += 1;
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
    for (let n3 = 1; n3 < 6; n3 += 1) {
      if (!(e8 >> 7 - n3 & 1)) {
        t2.utf8seq = n3;
        break;
      }
    }
    if (t2.utf8seq === 2) {
      t2.codepoint = e8 & 31;
    } else if (t2.utf8seq === 3) {
      t2.codepoint = e8 & 15;
    } else if (t2.utf8seq === 4) {
      t2.codepoint = e8 & 7;
    } else {
      throw Error(`Invalid UTF-8 sequence`);
    }
    --t2.utf8seq;
  } else if (t2.utf8seq > 0) {
    if (e8 <= 127) {
      throw Error(`Invalid UTF-8 sequence`);
    }
    t2.codepoint = t2.codepoint << 6 | e8 & 63;
    --t2.utf8seq;
    if (t2.utf8seq === 0) {
      n2(t2.codepoint);
    }
  }
}
function z(e8) {
  let t2 = [];
  let n2 = {
    queue: 0,
    queuedBits: 0
  };
  let r2 = (e9) => {
    t2.push(e9);
  };
  for (let t3 = 0; t3 < e8.length; t3 += 1) {
    Qn(e8.charCodeAt(t3), n2, r2);
  }
  return new Uint8Array(t2);
}
function rr(e8) {
  let t2 = [];
  tr(e8, (e9) => t2.push(e9));
  return new Uint8Array(t2);
}
function B(e8) {
  let t2 = [];
  let n2 = {
    queue: 0,
    queuedBits: 0
  };
  let r2 = (e9) => {
    t2.push(e9);
  };
  e8.forEach((e9) => Zn(e9, n2, r2));
  Zn(null, n2, r2);
  return t2.join(``);
}
function ir(expires_in) {
  return Math.round(Date.now() / 1e3) + expires_in;
}
function ar() {
  return /* @__PURE__ */ Symbol(`auth-callback`);
}
var V = () => typeof window < `u` && typeof document < `u`;
var H = {
  tested: false,
  writable: false
};
var or = () => {
  if (!V()) {
    return false;
  }
  try {
    if (typeof globalThis.localStorage != `object`) {
      return false;
    }
  } catch {
    return false;
  }
  if (H.tested) {
    return H.writable;
  }
  let e8 = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e8, e8);
    globalThis.localStorage.removeItem(e8);
    H.tested = true;
    H.writable = true;
  } catch {
    H.tested = true;
    H.writable = false;
  }
  return H.writable;
};
function sr(href) {
  let t2 = {};
  let n2 = new URL(href);
  if (n2.hash && n2.hash[0] === `#`) {
    try {
      new URLSearchParams(n2.hash.substring(1)).forEach((e8, n3) => {
        t2[n3] = e8;
      });
    } catch {
    }
  }
  n2.searchParams.forEach((e8, n3) => {
    t2[n3] = e8;
  });
  return t2;
}
var cr = (e8) => {
  if (e8) {
    return (...t2) => e8(...t2);
  }
  return (...e9) => fetch(...e9);
};
var lr = (e8) => typeof e8 == `object` && !!e8 && `status` in e8 && `ok` in e8 && `json` in e8 && typeof e8.json == `function`;
var U = async (e8, t2, n2) => {
  await e8.setItem(t2, JSON.stringify(n2));
};
var W = async (e8, t2) => {
  let n2 = await e8.getItem(t2);
  if (!n2) {
    return null;
  }
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
      this.resolve = e8;
      this.reject = t2;
    });
  }
};
ur.promiseConstructor = Promise;
function dr(e8) {
  let t2 = e8.split(`.`);
  if (t2.length !== 3) {
    throw new qn(`Invalid JWT structure`);
  }
  for (let e9 = 0; e9 < t2.length; e9++) {
    if (!jn.test(t2[e9])) {
      throw new qn(`JWT not in base64url format`);
    }
  }
  return {
    header: JSON.parse($n(t2[0])),
    payload: JSON.parse($n(t2[1])),
    signature: z(t2[2]),
    raw: {
      header: t2[0],
      payload: t2[1]
    }
  };
}
async function fr(e8) {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(null), e8);
  });
}
function pr(e8, t2) {
  return new Promise((resolve, reject) => {
    (async () => {
      for (let i2 = 0; i2 < Infinity; i2++) {
        try {
          let r2 = await e8(i2);
          if (!t2(i2, null, r2)) {
            resolve(r2);
            return;
          }
        } catch (error) {
          if (!t2(i2, error)) {
            reject(error);
            return;
          }
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
    for (let t2 = 0; t2 < 56; t2++) {
      e9 += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random() * 66));
    }
    return e9;
  }
  crypto.getRandomValues(e8);
  return Array.from(e8, mr).join(``);
}
async function gr(e8) {
  let t2 = new TextEncoder().encode(e8);
  let n2 = await crypto.subtle.digest(`SHA-256`, t2);
  let r2 = new Uint8Array(n2);
  return Array.from(r2).map((e9) => String.fromCharCode(e9)).join(``);
}
async function _r(e8) {
  if (typeof crypto > `u` || crypto.subtle === void 0 || typeof TextEncoder > `u`) {
    console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`);
    return e8;
  }
  let t2 = await gr(e8);
  return btoa(t2).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
var vr = /^[a-zA-Z0-9_-]{8,64}$/;
function yr(e8) {
  if (typeof e8 == `string` && vr.test(e8)) {
    return e8;
  }
  return null;
}
function br() {
  if (typeof crypto < `u` && typeof crypto.getRandomValues == `function`) {
    let e9 = new Uint8Array(16);
    crypto.getRandomValues(e9);
    return Array.from(e9, mr).join(``);
  }
  let e8 = ``;
  for (let t2 = 0; t2 < 32; t2++) {
    e8 += Math.floor(Math.random() * 16).toString(16);
  }
  return e8;
}
var xr = (e8, t2) => `${e8}-flow-${t2}-code-verifier`;
var Sr = (e8) => `${e8}-flows-code-verifier`;
async function Cr(e8, t2) {
  let n2 = await W(e8, Sr(t2));
  if (Array.isArray(n2)) {
    return n2.filter((e9) => yr(e9) !== null);
  }
  return [];
}
async function wr(storage, storageKey, n2, r2, i2) {
  await U(storage, xr(storageKey, n2), r2);
  let a2 = (await Cr(storage, storageKey)).filter((e8) => e8 !== n2);
  for (a2.push(n2); a2.length > 5; ) {
    let n3 = a2.shift();
    await G(storage, xr(storageKey, n3));
    i2?.(n3);
  }
  await U(storage, Sr(storageKey), a2);
  await U(storage, `${storageKey}-code-verifier`, r2);
}
async function Tr(storage, storageKey, n2) {
  if (n2) {
    let r3 = await W(storage, xr(storageKey, n2));
    return {
      verifier: typeof r3 == `string` ? r3 : null,
      flowId: n2
    };
  }
  let r2 = await W(storage, `${storageKey}-code-verifier`);
  return {
    verifier: typeof r2 == `string` ? r2 : null,
    flowId: null
  };
}
async function K(storage, storageKey, n2) {
  let r2 = `${storageKey}-code-verifier`;
  if (!n2) {
    await G(storage, r2);
    return;
  }
  let i2 = xr(storageKey, n2);
  let a2 = await W(storage, i2);
  await G(storage, i2);
  let o2 = await Cr(storage, storageKey);
  let s2 = o2.filter((e8) => e8 !== n2);
  if (s2.length !== o2.length) {
    if (s2.length > 0) {
      await U(storage, Sr(storageKey), s2);
    } else {
      await G(storage, Sr(storageKey));
    }
  }
  if (a2 != null && a2 === await W(storage, r2)) {
    await G(storage, r2);
  }
}
async function Er(storage, storageKey) {
  let n2 = await Cr(storage, storageKey);
  for (let r2 of n2) {
    await G(storage, xr(storageKey, r2));
  }
  await G(storage, Sr(storageKey));
  await G(storage, `${storageKey}-code-verifier`);
}
function Dr(e8, t2) {
  let n2 = e8.indexOf(`#`);
  let r2 = n2 === -1 ? e8 : e8.slice(0, n2);
  let i2 = n2 === -1 ? `` : e8.slice(n2);
  let a2 = r2.indexOf(`?`);
  if (a2 !== -1) {
    let e9 = r2.slice(0, a2);
    let t3 = r2.slice(a2 + 1).split(`&`).filter((e10) => e10 !== `` && e10 !== `sb_flow_id` && !e10.startsWith(`sb_flow_id=`));
    r2 = t3.length > 0 ? `${e9}?${t3.join(`&`)}` : e9;
  }
  let o2 = r2.includes(`?`) ? `&` : `?`;
  return `${r2}${o2}${Mn}=${encodeURIComponent(t2)}${i2}`;
}
async function Or(storage, storageKey, n2 = false, r2) {
  let i2 = hr();
  let a2 = i2;
  if (n2) {
    a2 += `/recovery`;
  }
  let o2 = br();
  await wr(storage, storageKey, o2, a2, r2);
  let s2 = await _r(i2);
  return [s2, i2 === s2 ? `plain` : `s256`, o2];
}
var kr = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ar(e8) {
  let t2 = e8.headers.get(kn);
  if (!t2 || !t2.match(kr)) {
    return null;
  }
  try {
    return /* @__PURE__ */ new Date(`${t2}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function jr(exp) {
  if (!exp) {
    throw Error(`Missing exp claim`);
  }
  if (exp <= Math.floor(Date.now() / 1e3)) {
    throw Error(`JWT has expired`);
  }
}
function Mr(alg) {
  switch (alg) {
    case `RS256`:
      return {
        name: `RSASSA-PKCS1-v1_5`,
        hash: {
          name: `SHA-256`
        }
      };
    case `ES256`:
      return {
        name: `ECDSA`,
        namedCurve: `P-256`,
        hash: {
          name: `SHA-256`
        }
      };
    default:
      throw Error(`Invalid alg claim`);
  }
}
var Nr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function q(e8) {
  if (!Nr.test(e8)) {
    throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`);
  }
}
function Pr(experimental) {
  if (!experimental.recoveryCodes) {
    throw Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).");
  }
}
function Fr() {
  return new Proxy({}, {
    get: (e8, t2) => {
      if (t2 === `__isUserNotAvailableProxy`) {
        return true;
      }
      if (typeof t2 == `symbol`) {
        let e9 = t2.toString();
        if (e9 === `Symbol(Symbol.toPrimitive)` || e9 === `Symbol(Symbol.toStringTag)` || e9 === `Symbol(util.inspect.custom)`) {
          return;
        }
      }
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t2}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e8, t2) => {
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t2}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e8, t2) => {
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t2}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Ir(user, t2) {
  return new Proxy(user, {
    get: (e8, n2, r2) => {
      if (n2 === `__isInsecureUserWarningProxy`) {
        return true;
      }
      if (typeof n2 == `symbol`) {
        let t3 = n2.toString();
        if (t3 === `Symbol(Symbol.toPrimitive)` || t3 === `Symbol(Symbol.toStringTag)` || t3 === `Symbol(util.inspect.custom)` || t3 === `Symbol(nodejs.util.inspect.custom)`) {
          return Reflect.get(e8, n2, r2);
        }
      }
      if (!t2.value && typeof n2 == `string`) {
        console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`);
        t2.value = true;
      }
      return Reflect.get(e8, n2, r2);
    }
  });
}
function Lr(e8) {
  return JSON.parse(JSON.stringify(e8));
}
var J = (e8) => {
  if (typeof e8 == `object` && e8) {
    let t2 = e8;
    if (typeof t2.msg == `string`) {
      return t2.msg;
    }
    if (typeof t2.message == `string`) {
      return t2.message;
    }
    if (typeof t2.error_description == `string`) {
      return t2.error_description;
    }
    if (typeof t2.error == `string`) {
      return t2.error;
    }
  }
  return JSON.stringify(e8);
};
var Rr = [500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530];
async function zr(e8) {
  if (!lr(e8)) {
    throw new Hn(J(e8), 0);
  }
  let t2;
  try {
    t2 = await e8.json();
  } catch (error) {
    throw Rr.includes(e8.status) ? new Hn(e8.statusText || `HTTP ${e8.status}`, e8.status) : new F(J(error), error);
  }
  if (Rr.includes(e8.status)) {
    throw new Hn(J(t2), e8.status);
  }
  let n2;
  let r2 = Ar(e8);
  if (r2 && r2.getTime() >= An[`2024-01-01`].timestamp && typeof t2 == `object` && t2 && typeof t2.code == `string`) {
    n2 = t2.code;
  } else if (typeof t2 == `object` && t2 && typeof t2.error_code == `string`) {
    n2 = t2.error_code;
  }
  if (!n2) {
    if (typeof t2 == `object` && t2 && typeof t2.weak_password == `object` && t2.weak_password && Array.isArray(t2.weak_password.reasons) && t2.weak_password.reasons.length && t2.weak_password.reasons.reduce((acc, reason) => acc && typeof reason == `string`, true)) {
      throw new Kn(J(t2), e8.status, t2.weak_password.reasons);
    }
  } else if (n2 === `weak_password`) {
    throw new Kn(J(t2), e8.status, t2.weak_password?.reasons || []);
  } else if (n2 === `session_not_found`) {
    throw new L();
  }
  throw new Pn(J(t2), e8.status || 500, n2);
}
var Br = (e8, t2, n2, r2) => {
  let i2 = {
    method: e8,
    headers: t2?.headers || {}
  };
  if (e8 === `GET`) {
    return i2;
  }
  i2.headers = {
    "Content-Type": `application/json;charset=UTF-8`,
    ...t2?.headers
  };
  i2.body = JSON.stringify(r2);
  return {
    ...i2,
    ...n2
  };
};
async function Y(fetch2, t2, n2, r2) {
  let i2 = {
    ...r2?.headers
  };
  if (!i2[`X-Supabase-Api-Version`]) {
    i2[kn] = An[`2024-01-01`].name;
  }
  if (r2?.jwt) {
    i2.Authorization = `Bearer ${r2.jwt}`;
  }
  let a2 = r2?.query ?? {};
  if (r2?.redirectTo) {
    a2.redirect_to = r2.redirectTo;
  }
  let o2 = await Vr(fetch2, t2, n2 + (Object.keys(a2).length ? `?` + new URLSearchParams(a2).toString() : ``), {
    headers: i2,
    noResolveJson: r2?.noResolveJson
  }, {}, r2?.body);
  if (r2?.xform) {
    return r2?.xform(o2);
  }
  return {
    data: {
      ...o2
    },
    error: null
  };
}
async function Vr(fetch2, t2, n2, r2, i2, a2) {
  let o2 = Br(t2, r2, i2, a2);
  let s2;
  try {
    s2 = await fetch2(n2, {
      ...o2
    });
  } catch (error) {
    throw new Hn(J(error), 0);
  }
  if (!s2.ok) {
    await zr(s2);
  }
  if (r2?.noResolveJson) {
    return s2;
  }
  try {
    return await s2.json();
  } catch (error) {
    await zr(error);
  }
}
function X(e8) {
  let t2 = null;
  if (Kr(e8)) {
    t2 = {
      ...e8
    };
    if (!e8.expires_at) {
      t2.expires_at = ir(e8.expires_in);
    }
  }
  let n2 = e8.user ?? (typeof e8?.id == `string` ? e8 : null);
  return {
    data: {
      session: t2,
      user: n2
    },
    error: null
  };
}
function Hr(e8) {
  let t2 = X(e8);
  if (!t2.error && e8.weak_password && typeof e8.weak_password == `object` && Array.isArray(e8.weak_password.reasons) && e8.weak_password.reasons.length && e8.weak_password.message && typeof e8.weak_password.message == `string` && e8.weak_password.reasons.reduce((acc, reason) => acc && typeof reason == `string`, true)) {
    t2.data.weak_password = e8.weak_password;
  }
  return t2;
}
function Z(e8) {
  return {
    data: {
      user: e8.user ?? e8
    },
    error: null
  };
}
function Ur(e8) {
  return {
    data: e8,
    error: null
  };
}
function Wr(e8) {
  let {
    action_link,
    email_otp,
    hashed_token,
    redirect_to,
    verification_type
  } = e8;
  let s2 = n(e8, [`action_link`, `email_otp`, `hashed_token`, `redirect_to`, `verification_type`]);
  return {
    data: {
      properties: {
        action_link,
        email_otp,
        hashed_token,
        redirect_to,
        verification_type
      },
      user: {
        ...s2
      }
    },
    error: null
  };
}
function Gr(e8) {
  return e8;
}
function Kr(e8) {
  return !!e8.access_token && !!e8.refresh_token && !!e8.expires_in;
}
var qr = [`global`, `local`, `others`];
var Jr = class {
  constructor({
    url: url2 = ``,
    headers = {},
    fetch: fetch2,
    experimental
  }) {
    this.url = url2;
    this.headers = headers;
    this.fetch = cr(fetch2);
    this.experimental = experimental ?? {};
    this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
    this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
    this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    };
    this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  async signOut(jwt, t2 = qr[0]) {
    if (qr.indexOf(t2) < 0) {
      throw Error(`@supabase/auth-js: Parameter scope must be one of ${qr.join(`, `)}`);
    }
    try {
      await Y(this.fetch, `POST`, `${this.url}/logout?scope=${t2}`, {
        headers: this.headers,
        jwt,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async inviteUserByEmail(e8, t2 = {}) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/invite`, {
        body: {
          email: e8,
          data: t2.data
        },
        headers: this.headers,
        redirectTo: t2.redirectTo,
        xform: Z
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async generateLink(e8) {
    try {
      let {
        options
      } = e8;
      let r2 = n(e8, [`options`]);
      let i2 = {
        ...r2,
        ...options
      };
      if (`newEmail` in r2) {
        i2.new_email = r2?.newEmail;
        delete i2.newEmail;
      }
      return await Y(this.fetch, `POST`, `${this.url}/admin/generate_link`, {
        body: i2,
        headers: this.headers,
        xform: Wr,
        redirectTo: options?.redirectTo
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            properties: null,
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async createUser(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/users`, {
        body: e8,
        headers: this.headers,
        xform: Z
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async listUsers(e8) {
    try {
      let t2 = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      let n2 = await Y(this.fetch, `GET`, `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: e8?.page?.toString() ?? ``,
          per_page: e8?.perPage?.toString() ?? ``
        },
        xform: Gr
      });
      if (n2.error) {
        throw n2.error;
      }
      let r2 = await n2.json();
      let i2 = n2.headers.get(`x-total-count`) ?? 0;
      let a2 = n2.headers.get(`link`)?.split(`,`) ?? [];
      if (a2.length > 0) {
        a2.forEach((e9) => {
          let n3 = parseInt(e9.split(`;`)[0].split(`=`)[1].substring(0, 1));
          let r3 = JSON.parse(e9.split(`;`)[1].split(`=`)[1]);
          t2[`${r3}Page`] = n3;
        });
        t2.total = parseInt(i2);
      }
      return {
        data: {
          ...r2,
          ...t2
        },
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            users: []
          },
          error
        };
      }
      throw error;
    }
  }
  async getUserById(e8) {
    q(e8);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8}`, {
        headers: this.headers,
        xform: Z
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async updateUserById(e8, t2) {
    q(e8);
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/users/${e8}`, {
        body: t2,
        headers: this.headers,
        xform: Z
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async deleteUser(e8, should_soft_delete = false) {
    q(e8);
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8}`, {
        headers: this.headers,
        body: {
          should_soft_delete
        },
        xform: Z
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            user: null
          },
          error
        };
      }
      throw error;
    }
  }
  async _listFactors(e8) {
    q(e8.userId);
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8.userId}/factors`, {
        headers: this.headers,
        xform: (factors) => ({
          data: {
            factors
          },
          error: null
        })
      });
      return {
        data,
        error
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _deleteFactor(e8) {
    q(e8.userId);
    q(e8.id);
    try {
      return {
        data: await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8.userId}/factors/${e8.id}`, {
          headers: this.headers
        }),
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _listOAuthClients(e8) {
    try {
      let t2 = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      let n2 = await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: e8?.page?.toString() ?? ``,
          per_page: e8?.perPage?.toString() ?? ``
        },
        xform: Gr
      });
      if (n2.error) {
        throw n2.error;
      }
      let r2 = await n2.json();
      let i2 = n2.headers.get(`x-total-count`) ?? 0;
      let a2 = n2.headers.get(`link`)?.split(`,`) ?? [];
      if (a2.length > 0) {
        a2.forEach((e9) => {
          let n3 = parseInt(e9.split(`;`)[0].split(`=`)[1].substring(0, 1));
          let r3 = JSON.parse(e9.split(`;`)[1].split(`=`)[1]);
          t2[`${r3}Page`] = n3;
        });
        t2.total = parseInt(i2);
      }
      return {
        data: {
          ...r2,
          ...t2
        },
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            clients: []
          },
          error
        };
      }
      throw error;
    }
  }
  async _createOAuthClient(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients`, {
        body: e8,
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _getOAuthClient(e8) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients/${e8}`, {
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _updateOAuthClient(e8, t2) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/oauth/clients/${e8}`, {
        body: t2,
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _deleteOAuthClient(e8) {
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/oauth/clients/${e8}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _regenerateOAuthClientSecret(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients/${e8}/regenerate_secret`, {
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _listCustomProviders(e8) {
    try {
      let query = {};
      if (e8?.type) {
        query.type = e8.type;
      }
      return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query,
        xform: (e9) => ({
          data: {
            providers: e9?.providers ?? []
          },
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: {
            providers: []
          },
          error
        };
      }
      throw error;
    }
  }
  async _createCustomProvider(e8) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/custom-providers`, {
        body: e8,
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _getCustomProvider(e8) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers/${e8}`, {
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _updateCustomProvider(e8, t2) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/custom-providers/${e8}`, {
        body: t2,
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _deleteCustomProvider(e8) {
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/custom-providers/${e8}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _adminListPasskeys(e8) {
    q(e8.userId);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e8.userId}/passkeys`, {
        headers: this.headers,
        xform: (e9) => ({
          data: e9,
          error: null
        })
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
  async _adminDeletePasskey(e8) {
    q(e8.userId);
    q(e8.passkeyId);
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e8.userId}/passkeys/${e8.passkeyId}`, {
        headers: this.headers,
        noResolveJson: true
      });
      return {
        data: null,
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      throw error;
    }
  }
};
function Yr(e8 = {}) {
  return {
    getItem: (t2) => e8[t2] || null,
    setItem: (t2, n2) => {
      e8[t2] = n2;
    },
    removeItem: (t2) => {
      delete e8[t2];
    }
  };
}
if (globalThis && or() && globalThis.localStorage) {
  globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
}
var Xr = class extends Error {
  constructor(e8) {
    super(e8);
    this.isAcquireTimeout = true;
  }
};
function Zr() {
  if (typeof globalThis != `object`) {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: true
      });
      __magic__.globalThis = __magic__;
      delete Object.prototype.__magic__;
    } catch {
      if (typeof self < `u`) {
        self.globalThis = self;
      }
    }
  }
}
function Qr(e8) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e8)) {
    throw Error(`@supabase/auth-js: Address "${e8}" is invalid.`);
  }
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
  let {
    chainId,
    domain,
    expirationTime,
    issuedAt = /* @__PURE__ */ new Date(),
    nonce,
    notBefore,
    requestId,
    resources,
    scheme,
    uri,
    version: version2
  } = e8;
  if (!Number.isInteger(chainId)) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${chainId}`);
  }
  if (!domain) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);
  }
  if (nonce && nonce.length < 8) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${nonce}`);
  }
  if (!uri) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);
  }
  if (version2 !== `1`) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${version2}`);
  }
  if (e8.statement?.includes(`
`)) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e8.statement}`);
  }
  let f2 = Qr(e8.address);
  let p2 = `${scheme ? `${scheme}://${domain}` : domain} wants you to sign in with your Ethereum account:
${f2}

${e8.statement ? `${e8.statement}
` : ``}`;
  let m2 = `URI: ${uri}
Version: ${version2}
Chain ID: ${chainId}${nonce ? `
Nonce: ${nonce}` : ``}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime) {
    m2 += `
Expiration Time: ${expirationTime.toISOString()}`;
  }
  if (notBefore) {
    m2 += `
Not Before: ${notBefore.toISOString()}`;
  }
  if (requestId) {
    m2 += `
Request ID: ${requestId}`;
  }
  if (resources) {
    let e9 = `
Resources:`;
    for (let t2 of resources) {
      if (!t2 || typeof t2 != `string`) {
        throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t2}`);
      }
      e9 += `
- ${t2}`;
    }
    m2 += e9;
  }
  return `${p2}
${m2}`;
}
var Q = class extends Error {
  constructor({
    message,
    code,
    cause,
    name
  }) {
    super(message, {
      cause
    });
    this.__isWebAuthnError = true;
    this.name = name ?? (cause instanceof Error ? cause.name : void 0) ?? `Unknown Error`;
    this.code = code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
};
var ni = class extends Q {
  constructor(message, t2) {
    super({
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: t2,
      message
    });
    this.name = `WebAuthnUnknownError`;
    this.originalError = t2;
  }
};
function ri({
  error,
  options
}) {
  let {
    publicKey
  } = options;
  if (!publicKey) {
    throw Error(`options was missing required publicKey property`);
  }
  if (error.name === `AbortError`) {
    if (options.signal instanceof AbortSignal) {
      return new Q({
        message: `Registration ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: error
      });
    }
  } else if (error.name === `ConstraintError`) {
    if (publicKey.authenticatorSelection?.requireResidentKey === true) {
      return new Q({
        message: `Discoverable credentials were required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,
        cause: error
      });
    }
    if (options.mediation === `conditional` && publicKey.authenticatorSelection?.userVerification === `required`) {
      return new Q({
        message: `User verification was required during automatic registration but it could not be performed`,
        code: `ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,
        cause: error
      });
    }
    if (publicKey.authenticatorSelection?.userVerification === `required`) {
      return new Q({
        message: `User verification was required but no available authenticator supported it`,
        code: `ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,
        cause: error
      });
    }
  } else if (error.name === `InvalidStateError`) {
    return new Q({
      message: `The authenticator was previously registered`,
      code: `ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,
      cause: error
    });
  } else if (error.name === `NotAllowedError`) {
    return new Q({
      message: error.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: error
    });
  } else if (error.name === `NotSupportedError`) {
    if (publicKey.pubKeyCredParams.filter((e8) => e8.type === `public-key`).length === 0) {
      return new Q({
        message: `No entry in pubKeyCredParams was of type "public-key"`,
        code: `ERROR_MALFORMED_PUBKEYCREDPARAMS`,
        cause: error
      });
    }
    return new Q({
      message: `No available authenticator supported any of the specified pubKeyCredParams algorithms`,
      code: `ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,
      cause: error
    });
  } else if (error.name === `SecurityError`) {
    let t2 = window.location.hostname;
    if (!ui(t2)) {
      return new Q({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: error
      });
    }
    if (publicKey.rp.id !== t2) {
      return new Q({
        message: `The RP ID "${publicKey.rp.id}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: error
      });
    }
  } else if (error.name === `TypeError`) {
    if (publicKey.user.id.byteLength < 1 || publicKey.user.id.byteLength > 64) {
      return new Q({
        message: `User ID was not between 1 and 64 characters`,
        code: `ERROR_INVALID_USER_ID_LENGTH`,
        cause: error
      });
    }
  } else if (error.name === `UnknownError`) {
    return new Q({
      message: `The authenticator was unable to process the specified options, or could not create a new credential`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: error
    });
  }
  return new Q({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: error
  });
}
function ii({
  error,
  options
}) {
  let {
    publicKey
  } = options;
  if (!publicKey) {
    throw Error(`options was missing required publicKey property`);
  }
  if (error.name === `AbortError`) {
    if (options.signal instanceof AbortSignal) {
      return new Q({
        message: `Authentication ceremony was sent an abort signal`,
        code: `ERROR_CEREMONY_ABORTED`,
        cause: error
      });
    }
  } else if (error.name === `NotAllowedError`) {
    return new Q({
      message: error.message,
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: error
    });
  } else if (error.name === `SecurityError`) {
    let t2 = window.location.hostname;
    if (!ui(t2)) {
      return new Q({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: error
      });
    }
    if (publicKey.rpId !== t2) {
      return new Q({
        message: `The RP ID "${publicKey.rpId}" is invalid for this domain`,
        code: `ERROR_INVALID_RP_ID`,
        cause: error
      });
    }
  } else if (error.name === `UnknownError`) {
    return new Q({
      message: `The authenticator was unable to process the specified options, or could not create a new assertion signature`,
      code: `ERROR_AUTHENTICATOR_GENERAL_ERROR`,
      cause: error
    });
  }
  return new Q({
    message: `a Non-Webauthn related error has occurred`,
    code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
    cause: error
  });
}
var ai = new class {
  createNewAbortSignal() {
    if (this.controller) {
      let e9 = Error(`Cancelling existing WebAuthn API call for new one`);
      e9.name = `AbortError`;
      this.controller.abort(e9);
    }
    let e8 = new AbortController();
    this.controller = e8;
    return e8.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      let e8 = Error(`Manually cancelling existing WebAuthn API call`);
      e8.name = `AbortError`;
      this.controller.abort(e8);
      this.controller = void 0;
    }
  }
}();
function oi(e8) {
  if (!e8) {
    throw Error(`Credential creation options are required`);
  }
  if (typeof PublicKeyCredential < `u` && `parseCreationOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`) {
    return PublicKeyCredential.parseCreationOptionsFromJSON(e8);
  }
  let {
    challenge,
    user,
    excludeCredentials
  } = e8;
  let a2 = n(e8, [`challenge`, `user`, `excludeCredentials`]);
  let buffer = z(challenge).buffer;
  let s2 = {
    ...user,
    id: z(user.id).buffer
  };
  let c2 = {
    ...a2,
    challenge: buffer,
    user: s2
  };
  if (excludeCredentials && excludeCredentials.length > 0) {
    c2.excludeCredentials = Array(excludeCredentials.length);
    for (let e9 = 0; e9 < excludeCredentials.length; e9++) {
      let excludeCredential = excludeCredentials[e9];
      c2.excludeCredentials[e9] = {
        ...excludeCredential,
        id: z(excludeCredential.id).buffer,
        type: excludeCredential.type || `public-key`,
        transports: excludeCredential.transports
      };
    }
  }
  return c2;
}
function si(e8) {
  if (!e8) {
    throw Error(`Credential request options are required`);
  }
  if (typeof PublicKeyCredential < `u` && `parseRequestOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`) {
    return PublicKeyCredential.parseRequestOptionsFromJSON(e8);
  }
  let {
    challenge,
    allowCredentials
  } = e8;
  let i2 = n(e8, [`challenge`, `allowCredentials`]);
  let buffer = z(challenge).buffer;
  let o2 = {
    ...i2,
    challenge: buffer
  };
  if (allowCredentials && allowCredentials.length > 0) {
    o2.allowCredentials = Array(allowCredentials.length);
    for (let e9 = 0; e9 < allowCredentials.length; e9++) {
      let allowCredential = allowCredentials[e9];
      o2.allowCredentials[e9] = {
        ...allowCredential,
        id: z(allowCredential.id).buffer,
        type: allowCredential.type || `public-key`,
        transports: allowCredential.transports
      };
    }
  }
  return o2;
}
function ci(e8) {
  if (`toJSON` in e8 && typeof e8.toJSON == `function`) {
    return e8.toJSON();
  }
  let t2 = e8;
  return {
    id: e8.id,
    rawId: e8.id,
    response: {
      attestationObject: B(new Uint8Array(e8.response.attestationObject)),
      clientDataJSON: B(new Uint8Array(e8.response.clientDataJSON))
    },
    type: `public-key`,
    clientExtensionResults: e8.getClientExtensionResults(),
    authenticatorAttachment: t2.authenticatorAttachment ?? void 0
  };
}
function li(e8) {
  if (`toJSON` in e8 && typeof e8.toJSON == `function`) {
    return e8.toJSON();
  }
  let t2 = e8;
  let clientExtensionResults = e8.getClientExtensionResults();
  let e_response = e8.response;
  return {
    id: e8.id,
    rawId: e8.id,
    response: {
      authenticatorData: B(new Uint8Array(e_response.authenticatorData)),
      clientDataJSON: B(new Uint8Array(e_response.clientDataJSON)),
      signature: B(new Uint8Array(e_response.signature)),
      userHandle: e_response.userHandle ? B(new Uint8Array(e_response.userHandle)) : void 0
    },
    type: `public-key`,
    clientExtensionResults,
    authenticatorAttachment: t2.authenticatorAttachment ?? void 0
  };
}
function ui(e8) {
  return e8 === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e8);
}
function di() {
  return !!(V() && `PublicKeyCredential` in window && window.PublicKeyCredential && `credentials` in navigator && typeof navigator?.credentials?.create == `function` && typeof navigator?.credentials?.get == `function`);
}
async function fi(e8) {
  try {
    let t2 = await navigator.credentials.create(e8);
    if (t2) {
      if (t2 instanceof PublicKeyCredential) {
        return {
          data: t2,
          error: null
        };
      }
      return {
        data: null,
        error: new ni(`Browser returned unexpected credential type`, t2)
      };
    }
    return {
      data: null,
      error: new ni(`Empty credential response`, t2)
    };
  } catch (error) {
    return {
      data: null,
      error: ri({
        error,
        options: e8
      })
    };
  }
}
async function pi(e8) {
  try {
    let t2 = await navigator.credentials.get(e8);
    if (t2) {
      if (t2 instanceof PublicKeyCredential) {
        return {
          data: t2,
          error: null
        };
      }
      return {
        data: null,
        error: new ni(`Browser returned unexpected credential type`, t2)
      };
    }
    return {
      data: null,
      error: new ni(`Empty credential response`, t2)
    };
  } catch (error) {
    return {
      data: null,
      error: ii({
        error,
        options: e8
      })
    };
  }
}
var mi = {
  hints: [`security-key`],
  authenticatorSelection: {
    authenticatorAttachment: `cross-platform`,
    requireResidentKey: false,
    userVerification: `preferred`,
    residentKey: `discouraged`
  },
  attestation: `direct`
};
var hi = {
  userVerification: `preferred`,
  hints: [`security-key`],
  attestation: `direct`
};
function gi(...e8) {
  let t2 = (e9) => typeof e9 == `object` && !!e9 && !Array.isArray(e9);
  let n2 = (e9) => e9 instanceof ArrayBuffer || ArrayBuffer.isView(e9);
  let r2 = {};
  for (let i2 of e8) {
    if (i2) {
      for (let e9 in i2) {
        let a2 = i2[e9];
        if (a2 !== void 0) {
          if (Array.isArray(a2)) {
            r2[e9] = a2;
          } else if (n2(a2)) {
            r2[e9] = a2;
          } else if (t2(a2)) {
            let n3 = r2[e9];
            r2[e9] = t2(n3) ? gi(n3, a2) : gi(a2);
          } else {
            r2[e9] = a2;
          }
        }
      }
    }
  }
  return r2;
}
function _i(publicKey, t2) {
  return gi(mi, publicKey, t2 || {});
}
function vi(publicKey, t2) {
  return gi(hi, publicKey, t2 || {});
}
var yi = class {
  constructor(e8) {
    this.client = e8;
    this.enroll = this._enroll.bind(this);
    this.challenge = this._challenge.bind(this);
    this.verify = this._verify.bind(this);
    this.authenticate = this._authenticate.bind(this);
    this.register = this._register.bind(this);
  }
  async _enroll(e8) {
    return this.client.mfa.enroll({
      ...e8,
      factorType: `webauthn`
    });
  }
  async _challenge({
    factorId,
    webauthn,
    friendlyName,
    signal
  }, i2) {
    try {
      let {
        data,
        error
      } = await this.client.mfa.challenge({
        factorId,
        webauthn
      });
      if (!data) {
        return {
          data: null,
          error
        };
      }
      let signal_1 = signal ?? ai.createNewAbortSignal();
      if (data.webauthn.type === `create`) {
        let {
          user
        } = data.webauthn.credential_options.publicKey;
        if (!user.name) {
          let t2 = friendlyName;
          if (t2) {
            user.name = `${user.id}:${t2}`;
          } else {
            let t3 = (await this.client.getUser()).data.user;
            let n2 = t3?.user_metadata?.name || t3?.email || t3?.id || `User`;
            user.name = `${user.id}:${n2}`;
          }
        }
        user.displayName ||= user.name;
      }
      switch (data.webauthn.type) {
        case `create`: {
          let {
            data: data_1,
            error: error_1
          } = await fi({
            publicKey: _i(data.webauthn.credential_options.publicKey, i2?.create),
            signal: signal_1
          });
          if (data_1) {
            return {
              data: {
                factorId,
                challengeId: data.id,
                webauthn: {
                  type: data.webauthn.type,
                  credential_response: data_1
                }
              },
              error: null
            };
          }
          return {
            data: null,
            error: error_1
          };
        }
        case `request`: {
          let publicKey = vi(data.webauthn.credential_options.publicKey, i2?.request);
          let {
            data: data_1,
            error: error_1
          } = await pi({
            ...data.webauthn.credential_options,
            publicKey,
            signal: signal_1
          });
          if (data_1) {
            return {
              data: {
                factorId,
                challengeId: data.id,
                webauthn: {
                  type: data.webauthn.type,
                  credential_response: data_1
                }
              },
              error: null
            };
          }
          return {
            data: null,
            error: error_1
          };
        }
      }
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      return {
        data: null,
        error: new F(`Unexpected error in challenge`, error)
      };
    }
  }
  async _verify({
    challengeId,
    factorId,
    webauthn
  }) {
    return this.client.mfa.verify({
      factorId,
      challengeId,
      webauthn
    });
  }
  async _authenticate({
    factorId,
    webauthn: {
      rpId = typeof window < `u` ? window.location.hostname : void 0,
      rpOrigins = typeof window < `u` ? [window.location.origin] : void 0,
      signal
    } = {}
  }, request) {
    if (!rpId) {
      return {
        data: null,
        error: new Nn(`rpId is required for WebAuthn authentication`)
      };
    }
    try {
      if (!di()) {
        return {
          data: null,
          error: new F(`Browser does not support WebAuthn`, null)
        };
      }
      let {
        data,
        error
      } = await this.challenge({
        factorId,
        webauthn: {
          rpId,
          rpOrigins
        },
        signal
      }, {
        request
      });
      if (!data) {
        return {
          data: null,
          error
        };
      }
      let {
        webauthn
      } = data;
      return this._verify({
        factorId,
        challengeId: data.challengeId,
        webauthn: {
          type: webauthn.type,
          rpId,
          rpOrigins,
          credential_response: webauthn.credential_response
        }
      });
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      return {
        data: null,
        error: new F(`Unexpected error in authenticate`, error)
      };
    }
  }
  async _register({
    friendlyName,
    webauthn: {
      rpId = typeof window < `u` ? window.location.hostname : void 0,
      rpOrigins = typeof window < `u` ? [window.location.origin] : void 0,
      signal
    } = {}
  }, create) {
    if (!rpId) {
      return {
        data: null,
        error: new Nn(`rpId is required for WebAuthn registration`)
      };
    }
    try {
      if (!di()) {
        return {
          data: null,
          error: new F(`Browser does not support WebAuthn`, null)
        };
      }
      let {
        data,
        error
      } = await this._enroll({
        friendlyName
      });
      if (!data) {
        await this.client.mfa.listFactors().then((t2) => t2.data?.all.find((t3) => t3.factor_type === `webauthn` && t3.friendly_name === friendlyName && t3.status === `unverified`)).then((e8) => {
          if (e8) {
            return this.client.mfa.unenroll({
              factorId: e8?.id
            });
          }
        });
        return {
          data: null,
          error
        };
      }
      let {
        data: data_1,
        error: error_1
      } = await this._challenge({
        factorId: data.id,
        friendlyName: data.friendly_name,
        webauthn: {
          rpId,
          rpOrigins
        },
        signal
      }, {
        create
      });
      if (data_1) {
        return this._verify({
          factorId: data.id,
          challengeId: data_1.challengeId,
          webauthn: {
            rpId,
            rpOrigins,
            type: data_1.webauthn.type,
            credential_response: data_1.webauthn.credential_response
          }
        });
      }
      return {
        data: null,
        error: error_1
      };
    } catch (error) {
      if (P(error)) {
        return {
          data: null,
          error
        };
      }
      return {
        data: null,
        error: new F(`Unexpected error in register`, error)
      };
    }
  }
};
Zr();
var bi = {
  url,
  storageKey: Dn,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  headers: On,
  flowType: `implicit`,
  debug: false,
  hasCustomAuthorizationHeader: false,
  throwOnError: false,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: false,
  experimental: {}
};
var xi = {};
var Si = false;
var Ci = class e7 {
  get jwks() {
    return xi[this.storageKey]?.jwks ?? {
      keys: []
    };
  }
  set jwks(jwks) {
    xi[this.storageKey] = {
      ...xi[this.storageKey],
      jwks
    };
  }
  get jwks_cached_at() {
    return xi[this.storageKey]?.cachedAt ?? -(2 ** 53 - 1);
  }
  set jwks_cached_at(cachedAt) {
    xi[this.storageKey] = {
      ...xi[this.storageKey],
      cachedAt
    };
  }
  constructor(t2) {
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = /* @__PURE__ */ new Map();
    this.autoRefreshTicker = null;
    this.autoRefreshTickTimeout = null;
    this.visibilityChangedCallback = null;
    this.refreshingDeferred = null;
    this.lastRefreshFailure = null;
    this._sessionRemovalEpoch = 0;
    this.initializePromise = null;
    this._pendingInitNotifications = null;
    this.detectSessionInUrl = true;
    this.hasCustomAuthorizationHeader = false;
    this.suppressGetSessionWarning = false;
    this.lock = null;
    this.lockAcquired = false;
    this.pendingInLock = [];
    this.broadcastChannel = null;
    this.logger = console.log;
    let r2 = {
      ...bi,
      ...t2
    };
    this.storageKey = r2.storageKey;
    this.instanceID = e7.nextInstanceID[this.storageKey] ?? 0;
    e7.nextInstanceID[this.storageKey] = this.instanceID + 1;
    this.logDebugMessages = !!r2.debug;
    if (typeof r2.debug == `function`) {
      this.logger = r2.debug;
    }
    if (this.instanceID > 0 && V()) {
      let e8 = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(e8);
      if (this.logDebugMessages) {
        console.trace(e8);
      }
    }
    this.persistSession = r2.persistSession;
    this.autoRefreshToken = r2.autoRefreshToken;
    this.experimental = r2.experimental ?? {};
    this.admin = new Jr({
      url: r2.url,
      headers: r2.headers,
      fetch: r2.fetch,
      experimental: this.experimental
    });
    this.url = r2.url;
    this.headers = r2.headers;
    this.fetch = cr(r2.fetch);
    this.detectSessionInUrl = r2.detectSessionInUrl;
    this.flowType = r2.flowType;
    this.hasCustomAuthorizationHeader = r2.hasCustomAuthorizationHeader;
    this.throwOnError = r2.throwOnError;
    this.lockAcquireTimeout = r2.lockAcquireTimeout;
    if (r2.lock != null) {
      this.lock = r2.lock;
      if (!Si) {
        Si = true;
        console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`);
      }
    }
    if (!this.jwks) {
      this.jwks = {
        keys: []
      };
      this.jwks_cached_at = -(2 ** 53 - 1);
    }
    this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new yi(this),
      recoveryCodes: {
        getStatus: this._getRecoveryCodesStatus.bind(this),
        generate: this._generateRecoveryCodes.bind(this),
        verify: this._verifyRecoveryCode.bind(this),
        regenerate: this._regenerateRecoveryCodes.bind(this),
        unenroll: this._unenrollRecoveryCodes.bind(this)
      }
    };
    this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    };
    this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    };
    if (this.persistSession) {
      if (r2.storage) {
        this.storage = r2.storage;
      } else if (or()) {
        this.storage = globalThis.localStorage;
      } else {
        this.memoryStorage = {};
        this.storage = Yr(this.memoryStorage);
      }
      if (r2.userStorage) {
        this.userStorage = r2.userStorage;
      }
    } else {
      this.memoryStorage = {};
      this.storage = Yr(this.memoryStorage);
    }
    if (V() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (error) {
        console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`, error);
      }
      this.broadcastChannel?.addEventListener(`message`, async (e8) => {
        this._debug(`received broadcast notification from other tab or client`, e8);
        if (e8.data.event === `TOKEN_REFRESHED` || e8.data.event === `SIGNED_IN`) {
          this.lastRefreshFailure = null;
        }
        try {
          await this._notifyAllSubscribers(e8.data.event, e8.data.session, false);
        } catch (error) {
          this._debug(`#broadcastChannel`, `error`, error);
        }
      });
    }
    if (!r2.skipAutoInitialize) {
      this.initialize().catch((e8) => {
        this._debug(`#initialize()`, `error`, e8);
      });
    }
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e8) {
    if (this.throwOnError && e8 && e8.error) {
      throw e8.error;
    }
    return e8;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Cn}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e8) {
    if (this.logDebugMessages) {
      this.logger(this._logPrefix(), ...e8);
    }
    return this;
  }
  async initialize() {
    if (this.initializePromise) {
      return await this.initializePromise;
    }
    this._pendingInitNotifications = [];
    this.initializePromise = (async () => {
      if (this.lock == null) {
        return await this._initialize();
      }
      return await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize());
    })();
    let e8 = await this.initializePromise;
    let t2 = this._pendingInitNotifications ?? [];
    this._pendingInitNotifications = null;
    for (let e9 of t2) {
      await this._notifyAllSubscribers(e9.event, e9.session, e9.broadcast);
    }
    return e8;
  }
  async _initialize() {
    try {
      let e8 = {};
      let t2 = `none`;
      if (V()) {
        e8 = sr(window.location.href);
        if (this._isImplicitGrantCallback(e8)) {
          t2 = `implicit`;
        } else if (await this._isPKCECallback(e8)) {
          t2 = `pkce`;
        }
      }
      if (V() && this.detectSessionInUrl && t2 !== `none`) {
        let {
          data,
          error
        } = await this._getSessionFromURL(e8, t2);
        if (error) {
          this._debug(`#_initialize()`, `error detecting session from URL`, error);
          if (zn(error)) {
            let e9 = error.details?.code;
            if (e9 === `identity_already_exists` || e9 === `identity_not_found` || e9 === `single_identity_not_deletable`) {
              return {
                error
              };
            }
          }
          return {
            error
          };
        }
        let {
          session,
          redirectType
        } = data;
        this._debug(`#_initialize()`, `detected session in URL`, session, `redirect type`, redirectType);
        await this._saveSession(session);
        setTimeout(async () => {
          if (redirectType === `recovery`) {
            await this._notifyAllSubscribers(`PASSWORD_RECOVERY`, session);
          } else {
            await this._notifyAllSubscribers(`SIGNED_IN`, session);
          }
        }, 0);
        return {
          error: null
        };
      }
      await this._recoverAndRefresh();
      return {
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          error
        });
      }
      return this._returnResult({
        error: new F(`Unexpected error during initialization`, error)
      });
    } finally {
      await this._handleVisibilityChange();
      this._debug(`#_initialize()`, `end`);
    }
  }
  async signInAnonymously(e8) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: e8?.options?.data ?? {},
          gotrue_meta_security: {
            captcha_token: e8?.options?.captchaToken
          }
        },
        xform: X
      });
      if (error || !data) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      let r2 = data.session;
      let i2 = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, r2);
      }
      return this._returnResult({
        data: {
          user: i2,
          session: r2
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signUp(e8) {
    let t2 = null;
    try {
      let n2;
      if (`email` in e8) {
        let {
          email,
          password,
          options
        } = e8;
        let o3 = null;
        let s2 = null;
        if (this.flowType === `pkce`) {
          [o3, s2, t2] = await this._getCodeChallengeAndMethod();
        }
        n2 = await Y(this.fetch, `POST`, `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t2),
          body: {
            email,
            password,
            data: options?.data ?? {},
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            code_challenge: o3,
            code_challenge_method: s2
          },
          xform: X
        });
      } else if (`phone` in e8) {
        let {
          phone,
          password,
          options
        } = e8;
        n2 = await Y(this.fetch, `POST`, `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone,
            password,
            data: options?.data ?? {},
            channel: options?.channel ?? `sms`,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            }
          },
          xform: X
        });
      } else {
        throw new Ln(`You must provide either an email or phone number and a password`);
      }
      let {
        data,
        error
      } = n2;
      if (error || !data) {
        await K(this.storage, this.storageKey, t2);
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      let a2 = data.session;
      let o2 = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, a2);
      }
      return this._returnResult({
        data: {
          user: o2,
          session: a2
        },
        error: null
      });
    } catch (error) {
      await K(this.storage, this.storageKey, t2);
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithPassword(e8) {
    try {
      let t2;
      if (`email` in e8) {
        let {
          email,
          password,
          options
        } = e8;
        t2 = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email,
            password,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            }
          },
          xform: Hr
        });
      } else if (`phone` in e8) {
        let {
          phone,
          password,
          options
        } = e8;
        t2 = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone,
            password,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            }
          },
          xform: Hr
        });
      } else {
        throw new Ln(`You must provide either an email or phone number and a password`);
      }
      let {
        data,
        error
      } = t2;
      if (error) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (!data || !data.session || !data.user) {
        let e9 = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e9
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data: {
          user: data.user,
          session: data.session,
          ...data.weak_password ? {
            weakPassword: data.weak_password
          } : null
        },
        error
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithOAuth(e8) {
    return await this._handleProviderSignIn(e8.provider, {
      redirectTo: e8.options?.redirectTo,
      scopes: e8.options?.scopes,
      queryParams: e8.options?.queryParams,
      skipBrowserRedirect: e8.options?.skipBrowserRedirect
    });
  }
  async exchangeCodeForSession(e8, t2) {
    await this.initializePromise;
    if (this.lock == null) {
      return this._exchangeCodeForSession(e8, t2);
    }
    return this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e8, t2));
  }
  async signInWithWeb3(e8) {
    let {
      chain
    } = e8;
    switch (chain) {
      case `ethereum`:
        return await this.signInWithEthereum(e8);
      case `solana`:
        return await this.signInWithSolana(e8);
      default:
        throw Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
    }
  }
  async signInWithEthereum(e8) {
    let t2;
    let signature;
    if (`message` in e8) {
      t2 = e8.message;
      signature = e8.signature;
    } else {
      let {
        chain,
        wallet,
        statement,
        options
      } = e8;
      let s2;
      if (!V()) {
        if (typeof wallet != `object` || !options?.url) {
          throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        }
        s2 = wallet;
      } else if (typeof wallet == `object`) {
        s2 = wallet;
      } else {
        let e9 = window;
        if (`ethereum` in e9 && typeof e9.ethereum == `object` && `request` in e9.ethereum && typeof e9.ethereum.request == `function`) {
          s2 = e9.ethereum;
        } else {
          throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
        }
      }
      let c2 = new URL(options?.url ?? window.location.href);
      let l2 = await s2.request({
        method: `eth_requestAccounts`
      }).then((e9) => e9).catch(() => {
        throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
      });
      if (!l2 || l2.length === 0) {
        throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
      }
      let address = Qr(l2[0]);
      let chainId = options?.signInWithEthereum?.chainId;
      chainId ||= $r(await s2.request({
        method: `eth_chainId`
      }));
      t2 = ti({
        domain: c2.host,
        address,
        statement,
        uri: c2.href,
        version: `1`,
        chainId,
        nonce: options?.signInWithEthereum?.nonce,
        issuedAt: options?.signInWithEthereum?.issuedAt ?? /* @__PURE__ */ new Date(),
        expirationTime: options?.signInWithEthereum?.expirationTime,
        notBefore: options?.signInWithEthereum?.notBefore,
        requestId: options?.signInWithEthereum?.requestId,
        resources: options?.signInWithEthereum?.resources
      });
      signature = await s2.request({
        method: `personal_sign`,
        params: [ei(t2), address]
      });
    }
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: {
          chain: `ethereum`,
          message: t2,
          signature,
          ...e8.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e8.options?.captchaToken
            }
          } : null
        },
        xform: X
      });
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e9 = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e9
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data: {
          ...data
        },
        error
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithSolana(e8) {
    let t2;
    let n2;
    if (`message` in e8) {
      t2 = e8.message;
      n2 = e8.signature;
    } else {
      let {
        chain,
        wallet,
        statement,
        options
      } = e8;
      let s2;
      if (!V()) {
        if (typeof wallet != `object` || !options?.url) {
          throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        }
        s2 = wallet;
      } else if (typeof wallet == `object`) {
        s2 = wallet;
      } else {
        let e9 = window;
        if (`solana` in e9 && typeof e9.solana == `object` && (`signIn` in e9.solana && typeof e9.solana.signIn == `function` || `signMessage` in e9.solana && typeof e9.solana.signMessage == `function`)) {
          s2 = e9.solana;
        } else {
          throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
        }
      }
      let c2 = new URL(options?.url ?? window.location.href);
      if (`signIn` in s2 && s2.signIn) {
        let e9 = await s2.signIn({
          issuedAt: (/* @__PURE__ */ new Date()).toISOString(),
          ...options?.signInWithSolana,
          version: `1`,
          domain: c2.host,
          uri: c2.href,
          ...statement ? {
            statement
          } : null
        });
        let r2;
        if (Array.isArray(e9) && e9[0] && typeof e9[0] == `object`) {
          r2 = e9[0];
        } else if (e9 && typeof e9 == `object` && `signedMessage` in e9 && `signature` in e9) {
          r2 = e9;
        } else {
          throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);
        }
        if (`signedMessage` in r2 && `signature` in r2 && (typeof r2.signedMessage == `string` || r2.signedMessage instanceof Uint8Array) && r2.signature instanceof Uint8Array) {
          t2 = typeof r2.signedMessage == `string` ? r2.signedMessage : new TextDecoder().decode(r2.signedMessage);
          n2 = r2.signature;
        } else {
          throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`);
        }
      } else {
        if (!(`signMessage` in s2) || typeof s2.signMessage != `function` || !(`publicKey` in s2) || typeof s2 != `object` || !s2.publicKey || !(`toBase58` in s2.publicKey) || typeof s2.publicKey.toBase58 != `function`) {
          throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);
        }
        t2 = [`${c2.host} wants you to sign in with your Solana account:`, s2.publicKey.toBase58(), ...statement ? [``, statement, ``] : [``], `Version: 1`, `URI: ${c2.href}`, `Issued At: ${options?.signInWithSolana?.issuedAt ?? (/* @__PURE__ */ new Date()).toISOString()}`, ...options?.signInWithSolana?.notBefore ? [`Not Before: ${options.signInWithSolana.notBefore}`] : [], ...options?.signInWithSolana?.expirationTime ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : [], ...options?.signInWithSolana?.chainId ? [`Chain ID: ${options.signInWithSolana.chainId}`] : [], ...options?.signInWithSolana?.nonce ? [`Nonce: ${options.signInWithSolana.nonce}`] : [], ...options?.signInWithSolana?.requestId ? [`Request ID: ${options.signInWithSolana.requestId}`] : [], ...options?.signInWithSolana?.resources?.length ? [`Resources`, ...options.signInWithSolana.resources.map((e10) => `- ${e10}`)] : []].join(`
`);
        let e9 = await s2.signMessage(new TextEncoder().encode(t2), `utf8`);
        if (!e9 || !(e9 instanceof Uint8Array)) {
          throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);
        }
        n2 = e9;
      }
    }
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: {
          chain: `solana`,
          message: t2,
          signature: B(n2),
          ...e8.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e8.options?.captchaToken
            }
          } : null
        },
        xform: X
      });
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e9 = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e9
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data: {
          ...data
        },
        error
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async _exchangeCodeForSession(auth_code, t2) {
    let n2 = t2?.flowId != null;
    let r2 = n2 ? yr(t2?.flowId) : V() ? yr(sr(window.location.href)[Mn]) : null;
    if (n2 && !r2) {
      this._debug(`#_exchangeCodeForSession()`, `provided flowId is not a valid flow id`, t2?.flowId);
    }
    let {
      verifier,
      flowId
    } = n2 && !r2 ? {
      verifier: null,
      flowId: null
    } : await Tr(this.storage, this.storageKey, r2);
    let [o2, s2] = (verifier ?? ``).split(`/`);
    try {
      if (!o2 && this.flowType === `pkce`) {
        throw new Vn();
      }
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code,
          code_verifier: o2
        },
        xform: X
      });
      await K(this.storage, this.storageKey, flowId);
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e8 = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: e8
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(s2 === `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data: {
          ...data,
          redirectType: s2 ?? null
        },
        error
      });
    } catch (error) {
      await K(this.storage, this.storageKey, flowId);
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithIdToken(e8) {
    try {
      let {
        options,
        provider,
        token,
        access_token,
        nonce
      } = e8;
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider,
          id_token: token,
          access_token,
          nonce,
          gotrue_meta_security: {
            captcha_token: options?.captchaToken
          }
        },
        xform: X
      });
      if (error) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (!data || !data.session || !data.user) {
        let e9 = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e9
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data,
        error
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithOtp(e8) {
    let t2 = null;
    try {
      if (`email` in e8) {
        let {
          email,
          options
        } = e8;
        let i2 = null;
        let a2 = null;
        if (this.flowType === `pkce`) {
          [i2, a2, t2] = await this._getCodeChallengeAndMethod();
        }
        let {
          error
        } = await Y(this.fetch, `POST`, `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email,
            data: options?.data ?? {},
            create_user: options?.shouldCreateUser ?? true,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            code_challenge: i2,
            code_challenge_method: a2
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t2)
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (`phone` in e8) {
        let {
          phone,
          options
        } = e8;
        let {
          data,
          error
        } = await Y(this.fetch, `POST`, `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone,
            data: options?.data ?? {},
            create_user: options?.shouldCreateUser ?? true,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            channel: options?.channel ?? `sms`
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: data?.message_id
          },
          error
        });
      }
      throw new Ln(`You must provide either an email or phone number.`);
    } catch (error) {
      await K(this.storage, this.storageKey, t2);
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async verifyOtp(e8) {
    try {
      let redirectTo;
      let captcha_token;
      if (`options` in e8) {
        redirectTo = e8.options?.redirectTo;
        captcha_token = e8.options?.captchaToken;
      }
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/verify`, {
        headers: this.headers,
        body: {
          ...e8,
          gotrue_meta_security: {
            captcha_token
          }
        },
        redirectTo,
        xform: X
      });
      if (error) {
        throw error;
      }
      if (!data) {
        throw Error(`An error occurred on token verification.`);
      }
      let a2 = data.session;
      let o2 = data.user;
      if (a2?.access_token) {
        await this._saveSession(a2);
        await this._notifyAllSubscribers(e8.type == `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, a2);
      }
      return this._returnResult({
        data: {
          user: o2,
          session: a2
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async signInWithSSO(e8) {
    let t2 = null;
    try {
      let n2 = null;
      let r2 = null;
      if (this.flowType === `pkce`) {
        [n2, r2, t2] = await this._getCodeChallengeAndMethod();
      }
      let i2 = await Y(this.fetch, `POST`, `${this.url}/sso`, {
        body: {
          ...`providerId` in e8 ? {
            provider_id: e8.providerId
          } : null,
          ...`domain` in e8 ? {
            domain: e8.domain
          } : null,
          redirect_to: this._maybeAppendFlowIdToRedirect(e8.options?.redirectTo, t2),
          ...e8?.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e8.options.captchaToken
            }
          } : null,
          skip_http_redirect: true,
          code_challenge: n2,
          code_challenge_method: r2
        },
        headers: this.headers,
        xform: Ur
      });
      if (i2.data?.url && V() && !e8.options?.skipBrowserRedirect) {
        window.location.assign(i2.data.url);
      }
      return this._returnResult(i2);
    } catch (error) {
      await K(this.storage, this.storageKey, t2);
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async reauthenticate() {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._reauthenticate();
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          throw error;
        }
        if (!session) {
          throw new L();
        }
        let {
          error: error_1
        } = await Y(this.fetch, `GET`, `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: session.access_token
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: error_1
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async resend(e8) {
    let t2 = null;
    try {
      let n2 = `${this.url}/resend`;
      if (`email` in e8) {
        let {
          email,
          type,
          options
        } = e8;
        let o2 = null;
        let s2 = null;
        if (this.flowType === `pkce`) {
          [o2, s2, t2] = await this._getCodeChallengeAndMethod();
        }
        let {
          error
        } = await Y(this.fetch, `POST`, n2, {
          headers: this.headers,
          body: {
            email,
            type,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            code_challenge: o2,
            code_challenge_method: s2
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t2)
        });
        if (error) {
          await K(this.storage, this.storageKey, t2);
        }
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (`phone` in e8) {
        let {
          phone,
          type,
          options
        } = e8;
        let {
          data,
          error
        } = await Y(this.fetch, `POST`, n2, {
          headers: this.headers,
          body: {
            phone,
            type,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            }
          }
        });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: data?.message_id
          },
          error
        });
      }
      throw new Ln(`You must provide either an email or phone number and a type`);
    } catch (error) {
      await K(this.storage, this.storageKey, t2);
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async getSession() {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._useSession(async (e8) => e8);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (e8) => e8));
  }
  async _acquireLock(e8, t2) {
    this._debug(`#_acquireLock`, `begin`, e8);
    try {
      if (this.lockAcquired) {
        let e9 = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        let n2 = (async () => {
          await e9;
          return await t2();
        })();
        this.pendingInLock.push((async () => {
          try {
            await n2;
          } catch {
          }
        })());
        return n2;
      }
      return await this.lock(`lock:${this.storageKey}`, e8, async () => {
        this._debug(`#_acquireLock`, `lock acquired for storage key`, this.storageKey);
        try {
          this.lockAcquired = true;
          let e9 = t2();
          this.pendingInLock.push((async () => {
            try {
              await e9;
            } catch {
            }
          })());
          await e9;
          while (this.pendingInLock.length) {
            let e10 = [...this.pendingInLock];
            await Promise.all(e10);
            this.pendingInLock.splice(0, e10.length);
          }
          return await e9;
        } finally {
          this._debug(`#_acquireLock`, `lock released for storage key`, this.storageKey);
          this.lockAcquired = false;
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
    this._debug(`#__loadSession()`, `begin`);
    if (this.lock != null && !this.lockAcquired) {
      this._debug(`#__loadSession()`, `used outside of an acquired lock!`, Error().stack);
    }
    try {
      let e8 = null;
      let t2 = await W(this.storage, this.storageKey);
      this._debug(`#getSession()`, `session from storage`, t2);
      if (t2 !== null) {
        if (this._isValidSession(t2)) {
          e8 = t2;
        } else {
          this._debug(`#getSession()`, `session from storage is not valid`);
          await this._removeSession();
        }
      }
      if (!e8) {
        return {
          data: {
            session: null
          },
          error: null
        };
      }
      let n2 = e8.expires_at ? e8.expires_at * 1e3 - Date.now() < wn : false;
      this._debug(`#__loadSession()`, `session has${n2 ? `` : ` not`} expired`, `expires_at`, e8.expires_at);
      if (!n2) {
        return {
          data: {
            session: await this._hydrateSessionUser(e8)
          },
          error: null
        };
      }
      let {
        data,
        error
      } = await this._callRefreshToken(e8.refresh_token);
      if (error) {
        let e9 = await W(this.storage, this.storageKey);
        if (e9 && this._isValidSession(e9) && e9.expires_at && e9.expires_at * 1e3 > Date.now()) {
          return this._returnResult({
            data: {
              session: await this._hydrateSessionUser(e9)
            },
            error: null
          });
        }
        return this._returnResult({
          data: {
            session: null
          },
          error
        });
      }
      return this._returnResult({
        data: {
          session: data
        },
        error: null
      });
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
      let t2 = {
        value: this.suppressGetSessionWarning
      };
      e8.user = Ir(e8.user, t2);
      if (t2.value) {
        this.suppressGetSessionWarning = true;
      }
    }
    return e8;
  }
  async getUser(e8) {
    if (e8) {
      return await this._getUser(e8);
    }
    await this.initializePromise;
    let t2;
    t2 = this.lock == null ? await this._getUser() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    if (t2.data.user) {
      this.suppressGetSessionWarning = true;
    }
    return t2;
  }
  async _getUser(jwt) {
    try {
      if (jwt) {
        return await Y(this.fetch, `GET`, `${this.url}/user`, {
          headers: this.headers,
          jwt,
          xform: Z
        });
      }
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          throw error;
        }
        if (!data.session?.access_token && !this.hasCustomAuthorizationHeader) {
          return {
            data: {
              user: null
            },
            error: new L()
          };
        }
        return await Y(this.fetch, `GET`, `${this.url}/user`, {
          headers: this.headers,
          jwt: data.session?.access_token ?? void 0,
          xform: Z
        });
      });
    } catch (error) {
      if (P(error)) {
        if (In(error)) {
          await this._removeSession();
        }
        return this._returnResult({
          data: {
            user: null
          },
          error
        });
      }
      throw error;
    }
  }
  async updateUser(e8, t2 = {}) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._updateUser(e8, t2);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e8, t2));
  }
  async _updateUser(e8, t2 = {}) {
    let n2 = null;
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          throw error;
        }
        if (!data.session) {
          throw new L();
        }
        let data_session = data.session;
        let s2 = null;
        let c2 = null;
        if (this.flowType === `pkce` && e8.email != null) {
          [s2, c2, n2] = await this._getCodeChallengeAndMethod();
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `PUT`, `${this.url}/user`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(t2?.emailRedirectTo, n2),
          body: {
            ...e8,
            code_challenge: s2,
            code_challenge_method: c2
          },
          jwt: data_session.access_token,
          xform: Z
        });
        if (error_1) {
          throw error_1;
        }
        data_session.user = data_1.user;
        await this._saveSession(data_session);
        await this._notifyAllSubscribers(`USER_UPDATED`, data_session);
        return this._returnResult({
          data: {
            user: data_session.user
          },
          error: null
        });
      });
    } catch (error) {
      await K(this.storage, this.storageKey, n2);
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null
          },
          error
        });
      }
      throw error;
    }
  }
  async setSession(e8) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._setSession(e8);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e8));
  }
  async _setSession(e8) {
    try {
      if (!e8.access_token || !e8.refresh_token) {
        throw new L();
      }
      let t2 = Date.now() / 1e3;
      let n2 = t2;
      let r2 = true;
      let i2 = null;
      let {
        payload
      } = dr(e8.access_token);
      if (payload.exp) {
        n2 = payload.exp;
        r2 = n2 <= t2;
      }
      if (r2) {
        let {
          data,
          error
        } = await this._callRefreshToken(e8.refresh_token);
        if (error) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error
          });
        }
        if (!data) {
          return {
            data: {
              user: null,
              session: null
            },
            error: null
          };
        }
        i2 = data;
      } else {
        let {
          data,
          error
        } = await this._getUser(e8.access_token);
        if (error) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error
          });
        }
        i2 = {
          access_token: e8.access_token,
          refresh_token: e8.refresh_token,
          user: data.user,
          token_type: `bearer`,
          expires_in: n2 - t2,
          expires_at: n2
        };
        await this._saveSession(i2);
        await this._notifyAllSubscribers(`SIGNED_IN`, i2);
      }
      return this._returnResult({
        data: {
          user: i2.user,
          session: i2
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error
        });
      }
      throw error;
    }
  }
  async refreshSession(e8) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._refreshSession(e8);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e8));
  }
  async _refreshSession(e8) {
    try {
      return await this._useSession(async (t2) => {
        if (!e8) {
          let {
            data: data_1,
            error: error_1
          } = t2;
          if (error_1) {
            throw error_1;
          }
          e8 = data_1.session ?? void 0;
        }
        if (!e8?.refresh_token) {
          throw new L();
        }
        let {
          data,
          error
        } = await this._callRefreshToken(e8.refresh_token);
        if (error) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error
          });
        }
        if (data) {
          return this._returnResult({
            data: {
              user: data.user,
              session: data
            },
            error: null
          });
        }
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      throw error;
    }
  }
  async _getSessionFromURL(e8, t2) {
    try {
      if (!V()) {
        throw new Rn(`No browser detected.`);
      }
      if (e8.error || e8.error_description || e8.error_code) {
        throw new Rn(e8.error_description || `Error in URL with unspecified error_description`, {
          error: e8.error || `unspecified_error`,
          code: e8.error_code || `unspecified_code`
        });
      }
      switch (t2) {
        case `implicit`:
          if (this.flowType === `pkce`) {
            throw new Bn(`Not a valid PKCE flow url.`);
          }
          break;
        case `pkce`:
          if (this.flowType === `implicit`) {
            throw new Rn(`Not a valid implicit grant flow url.`);
          }
      }
      if (t2 === `pkce`) {
        this._debug(`#_initialize()`, `begin`, `is PKCE flow`, true);
        if (!e8.code) {
          throw new Bn(`No code detected.`);
        }
        let {
          data: data_1,
          error: error_1
        } = await this._exchangeCodeForSession(e8.code, {
          flowId: e8[Mn]
        });
        if (error_1) {
          throw error_1;
        }
        let r2 = new URL(window.location.href);
        r2.searchParams.delete(`code`);
        r2.searchParams.delete(Mn);
        window.history.replaceState(window.history.state, ``, r2.toString());
        return {
          data: {
            session: data_1.session,
            redirectType: data_1.redirectType ?? null
          },
          error: null
        };
      }
      let {
        provider_token,
        provider_refresh_token,
        access_token,
        refresh_token,
        expires_in,
        expires_at,
        token_type
      } = e8;
      if (!access_token || !expires_in || !refresh_token || !token_type) {
        throw new Rn(`No session defined in URL`);
      }
      let l2 = Math.round(Date.now() / 1e3);
      let expires_in_1 = parseInt(expires_in);
      let d2 = l2 + expires_in_1;
      if (expires_at) {
        d2 = parseInt(expires_at);
      }
      let f2 = d2 - l2;
      if (f2 * 1e3 <= 3e4) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f2}s, should have been closer to ${expires_in_1}s`);
      }
      let p2 = d2 - expires_in_1;
      if (l2 - p2 >= 120) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`, p2, d2, l2);
      } else if (l2 - p2 < 0) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`, p2, d2, l2);
      }
      let {
        data,
        error
      } = await this._getUser(access_token);
      if (error) {
        throw error;
      }
      let session = {
        provider_token,
        provider_refresh_token,
        access_token,
        expires_in: expires_in_1,
        expires_at: d2,
        refresh_token,
        token_type,
        user: data.user
      };
      window.location.hash = ``;
      this._debug(`#_getSessionFromURL()`, `clearing window.location.hash`);
      return this._returnResult({
        data: {
          session,
          redirectType: e8.type
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            session: null,
            redirectType: null
          },
          error
        });
      }
      throw error;
    }
  }
  _isImplicitGrantCallback(e8) {
    if (typeof this.detectSessionInUrl == `function`) {
      return this.detectSessionInUrl(new URL(window.location.href), e8);
    }
    return !!(e8.access_token || e8.error || e8.error_description || e8.error_code);
  }
  async _isPKCECallback(e8) {
    if (!e8.code) {
      return false;
    }
    let t2 = yr(e8[Mn]);
    if (t2 && await W(this.storage, xr(this.storageKey, t2))) {
      return true;
    }
    return !!await W(this.storage, `${this.storageKey}-code-verifier`);
  }
  async signOut(e8 = {
    scope: `global`
  }) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._signOut(e8);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e8));
  }
  async _signOut({
    scope
  } = {
    scope: `global`
  }) {
    return await this._useSession(async (t2) => {
      let n2 = async () => {
        await this._removeSession();
      };
      let {
        data,
        error
      } = t2;
      if (error && !In(error)) {
        return this._returnResult({
          error
        });
      }
      let a2 = data.session?.access_token;
      if (a2) {
        let {
          error: error_1
        } = await this.admin.signOut(a2, scope);
        if (error_1 && !(Fn(error_1) && (error_1.status === 404 || error_1.status === 401 || error_1.status === 403) || In(error_1))) {
          if (scope !== `others`) {
            await n2();
          }
          return this._returnResult({
            error: error_1
          });
        }
      }
      if (scope !== `others`) {
        await n2();
      }
      return this._returnResult({
        error: null
      });
    });
  }
  onAuthStateChange(e8) {
    let id = ar();
    let subscription = {
      id,
      callback: e8,
      unsubscribe: () => {
        this._debug(`#unsubscribe()`, `state change callback with id removed`, id);
        this.stateChangeEmitters.delete(id);
      }
    };
    this._debug(`#onAuthStateChange()`, `registered callback with id`, id);
    this.stateChangeEmitters.set(id, subscription);
    (async () => {
      await this.initializePromise;
      if (this.lock == null) {
        await this._emitInitialSession(id);
      } else {
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(id);
        });
      }
    })();
    return {
      data: {
        subscription
      }
    };
  }
  async _emitInitialSession(e8) {
    return await this._useSession(async (t2) => {
      try {
        let {
          data: {
            session
          },
          error
        } = t2;
        if (error) {
          throw error;
        }
        await this.stateChangeEmitters.get(e8)?.callback(`INITIAL_SESSION`, session);
        this._debug(`INITIAL_SESSION`, `callback id`, e8, `session`, session);
      } catch (error) {
        await this.stateChangeEmitters.get(e8)?.callback(`INITIAL_SESSION`, null);
        this._debug(`INITIAL_SESSION`, `callback id`, e8, `error`, error);
        if (Gn(error)) {
          return;
        }
        if (In(error) || Un(error) || Fn(error) && (error.code === `refresh_token_not_found` || error.code === `refresh_token_already_used` || error.code === `session_expired`)) {
          console.warn(error);
        } else {
          console.error(error);
        }
      }
    });
  }
  async resetPasswordForEmail(e8, t2 = {}) {
    let n2 = null;
    let r2 = null;
    let i2 = null;
    if (this.flowType === `pkce`) {
      [n2, r2, i2] = await this._getCodeChallengeAndMethod(true);
    }
    try {
      return await Y(this.fetch, `POST`, `${this.url}/recover`, {
        body: {
          email: e8,
          code_challenge: n2,
          code_challenge_method: r2,
          gotrue_meta_security: {
            captcha_token: t2.captchaToken
          }
        },
        headers: this.headers,
        redirectTo: this._maybeAppendFlowIdToRedirect(t2.redirectTo, i2)
      });
    } catch (error) {
      await K(this.storage, this.storageKey, i2);
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async getUserIdentities() {
    try {
      let {
        data,
        error
      } = await this.getUser();
      if (error) {
        throw error;
      }
      return this._returnResult({
        data: {
          identities: data.user.identities ?? []
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async linkIdentity(e8) {
    if (`token` in e8) {
      return this.linkIdentityIdToken(e8);
    }
    return this.linkIdentityOAuth(e8);
  }
  async linkIdentityOAuth(e8) {
    let t2 = null;
    try {
      let {
        data,
        error
      } = await this._useSession(async ({
        data: data2,
        error: error2
      }) => {
        if (error2) {
          throw error2;
        }
        let {
          url: url2,
          flowId
        } = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e8.provider, {
          redirectTo: e8.options?.redirectTo,
          scopes: e8.options?.scopes,
          queryParams: e8.options?.queryParams,
          skipBrowserRedirect: true
        });
        t2 = flowId;
        return await Y(this.fetch, `GET`, url2, {
          headers: this.headers,
          jwt: data2.session?.access_token ?? void 0
        });
      });
      if (error) {
        throw error;
      }
      if (V() && !e8.options?.skipBrowserRedirect) {
        window.location.assign(data?.url);
      }
      return this._returnResult({
        data: {
          provider: e8.provider,
          url: data?.url,
          flowId: t2
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            provider: e8.provider,
            url: null,
            flowId: t2
          },
          error
        });
      }
      throw error;
    }
  }
  async linkIdentityIdToken(e8) {
    return await this._useSession(async (t2) => {
      try {
        let {
          error,
          data: {
            session
          }
        } = t2;
        if (error) {
          throw error;
        }
        let {
          options,
          provider,
          token,
          access_token,
          nonce
        } = e8;
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: session?.access_token ?? void 0,
          body: {
            provider,
            id_token: token,
            access_token,
            nonce,
            link_identity: true,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            }
          },
          xform: X
        });
        if (error_1) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: error_1
          });
        }
        if (!data || !data.session || !data.user) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error: new R()
          });
        }
        if (data.session) {
          await this._saveSession(data.session);
          await this._notifyAllSubscribers(`USER_UPDATED`, data.session);
        }
        return this._returnResult({
          data,
          error: error_1
        });
      } catch (error) {
        await K(this.storage, this.storageKey, null);
        if (P(error)) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error
          });
        }
        throw error;
      }
    });
  }
  async unlinkIdentity(e8) {
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          throw error;
        }
        return await Y(this.fetch, `DELETE`, `${this.url}/user/identities/${e8.identity_id}`, {
          headers: this.headers,
          jwt: data.session?.access_token ?? void 0
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _refreshAccessToken(refresh_token) {
    let t2 = `#_refreshAccessToken()`;
    this._debug(t2, `begin`);
    try {
      let n2 = Date.now();
      return await pr(async (n3) => {
        if (n3 > 0) {
          await fr(200 * 2 ** (n3 - 1));
        }
        this._debug(t2, `refreshing attempt`, n3);
        return await Y(this.fetch, `POST`, `${this.url}/token?grant_type=refresh_token`, {
          body: {
            refresh_token
          },
          headers: this.headers,
          xform: X
        });
      }, (e8, t3) => {
        let r2 = 200 * 2 ** e8;
        return t3 && Un(t3) && Date.now() + r2 - n2 < 3e4;
      });
    } catch (error) {
      this._debug(t2, `error`, error);
      if (P(error)) {
        return this._returnResult({
          data: {
            session: null,
            user: null
          },
          error
        });
      }
      throw error;
    } finally {
      this._debug(t2, `end`);
    }
  }
  _isValidSession(e8) {
    return typeof e8 == `object` && !!e8 && `access_token` in e8 && `refresh_token` in e8 && `expires_at` in e8;
  }
  async _handleProviderSignIn(provider, t2) {
    let {
      url: url2,
      flowId
    } = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
      redirectTo: t2.redirectTo,
      scopes: t2.scopes,
      queryParams: t2.queryParams
    });
    this._debug(`#_handleProviderSignIn()`, `provider`, provider, `options`, t2, `url`, url2);
    if (V() && !t2.skipBrowserRedirect) {
      window.location.assign(url2);
    }
    return {
      data: {
        provider,
        url: url2,
        flowId
      },
      error: null
    };
  }
  async _recoverAndRefresh() {
    let e8 = `#_recoverAndRefresh()`;
    this._debug(e8, `begin`);
    try {
      let t2 = await W(this.storage, this.storageKey);
      if (t2 && this.userStorage) {
        let e9 = await W(this.userStorage, this.storageKey + `-user`);
        if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e9) {
          e9 = {
            user: t2.user
          };
          await U(this.userStorage, this.storageKey + `-user`, e9);
        }
        t2.user = e9?.user ?? Fr();
      } else if (t2 && !t2.user && !t2.user) {
        let e9 = await W(this.storage, this.storageKey + `-user`);
        if (e9 && e9?.user) {
          t2.user = e9.user;
          await G(this.storage, this.storageKey + `-user`);
          await U(this.storage, this.storageKey, t2);
        } else {
          t2.user = Fr();
        }
      }
      this._debug(e8, `session from storage`, t2);
      if (!this._isValidSession(t2)) {
        this._debug(e8, `session is not valid`);
        if (t2 !== null) {
          await this._removeSession();
        }
        return;
      }
      let n2 = (t2.expires_at ?? Infinity) * 1e3 - Date.now() < wn;
      this._debug(e8, `session has${n2 ? `` : ` not`} expired with margin of ${wn}s`);
      if (n2) {
        if (this.autoRefreshToken && t2.refresh_token) {
          let {
            error
          } = await this._callRefreshToken(t2.refresh_token);
          if (error) {
            if (Gn(error)) {
              this._debug(e8, `refresh discarded by commit guard`, error);
            } else {
              this._debug(e8, `refresh failed`, error);
            }
          }
        }
      } else if (t2.user && t2.user.__isUserNotAvailableProxy === true) {
        try {
          let {
            data,
            error
          } = await this._getUser(t2.access_token);
          if (!error && data?.user) {
            t2.user = data.user;
            await this._saveSession(t2);
            await this._notifyAllSubscribers(`SIGNED_IN`, t2);
          } else {
            this._debug(e8, `could not get user data, skipping SIGNED_IN notification`);
          }
        } catch (error) {
          console.error(`Error getting user data:`, error);
          this._debug(e8, `error getting user data, skipping SIGNED_IN notification`, error);
        }
      } else {
        await this._notifyAllSubscribers(`SIGNED_IN`, t2);
      }
    } catch (error) {
      this._debug(e8, `error`, error);
      if (Un(error)) {
        console.warn(error);
      } else {
        console.error(error);
      }
      return;
    } finally {
      this._debug(e8, `end`);
    }
  }
  async _callRefreshToken(refreshToken) {
    if (!refreshToken) {
      throw new L();
    }
    if (this.refreshingDeferred) {
      return this.refreshingDeferred.promise;
    }
    if (this.lastRefreshFailure && this.lastRefreshFailure.refreshToken === refreshToken && Date.now() < this.lastRefreshFailure.expiresAt) {
      this._debug(`#_callRefreshToken()`, `returning cached failure (cooldown active)`);
      return this.lastRefreshFailure.result;
    }
    let r2 = `#_callRefreshToken()`;
    this._debug(r2, `begin`);
    try {
      this.refreshingDeferred = new ur();
      this.refreshingDeferred.promise.then(void 0, () => {
      });
      let t2 = await W(this.storage, this.storageKey);
      let {
        data,
        error
      } = await this._refreshAccessToken(refreshToken);
      if (error) {
        throw error;
      }
      if (!data.session) {
        throw new L();
      }
      let a2 = await W(this.storage, this.storageKey);
      if (t2 !== null && (a2 === null || a2.refresh_token !== t2.refresh_token)) {
        this._debug(r2, `commit guard: storage changed since refresh started, discarding rotated tokens`, {
          startedWith: `present`,
          nowHolds: a2 ? `replaced` : `cleared`
        });
        let e8 = {
          data: null,
          error: new Wn()
        };
        this.refreshingDeferred.resolve(e8);
        return e8;
      }
      let o2 = this._sessionRemovalEpoch;
      await this._saveSession(data.session);
      if (this._sessionRemovalEpoch !== o2) {
        this._debug(r2, `commit guard (post-save): _removeSession ran during _saveSession, undoing write`);
        await G(this.storage, this.storageKey);
        if (this.userStorage) {
          await G(this.userStorage, this.storageKey + `-user`);
        }
        let e8 = {
          data: null,
          error: new Wn()
        };
        this.refreshingDeferred.resolve(e8);
        return e8;
      }
      await this._notifyAllSubscribers(`TOKEN_REFRESHED`, data.session);
      let s2 = {
        data: data.session,
        error: null
      };
      this.lastRefreshFailure = null;
      this.refreshingDeferred.resolve(s2);
      return s2;
    } catch (error) {
      this._debug(r2, `error`, error);
      if (P(error)) {
        let result = {
          data: null,
          error
        };
        if (!Un(error)) {
          let e8 = await W(this.storage, this.storageKey);
          if (e8?.expires_at && e8.expires_at * 1e3 > Date.now()) {
            this._debug(r2, `proactive refresh failed, access token still valid \u2014 preserving session`);
          } else {
            await this._removeSession();
          }
        }
        this.lastRefreshFailure = {
          refreshToken,
          result,
          expiresAt: Date.now() + Tn
        };
        this.refreshingDeferred?.resolve(result);
        return result;
      }
      this.refreshingDeferred?.reject(error);
      throw error;
    } finally {
      this.refreshingDeferred = null;
      this._debug(r2, `end`);
    }
  }
  async _notifyAllSubscribers(e8, t2, broadcast = true) {
    if (this._pendingInitNotifications !== null && broadcast) {
      this._pendingInitNotifications.push({
        event: e8,
        session: t2,
        broadcast
      });
      return;
    }
    let r2 = `#_notifyAllSubscribers(${e8})`;
    this._debug(r2, `begin`, t2, `broadcast = ${broadcast}`);
    try {
      if (this.broadcastChannel && broadcast) {
        this.broadcastChannel.postMessage({
          event: e8,
          session: t2
        });
      }
      let r3 = [];
      let i2 = Array.from(this.stateChangeEmitters.values()).map(async (n2) => {
        try {
          await n2.callback(e8, t2);
        } catch (error) {
          r3.push(error);
        }
      });
      await Promise.all(i2);
      if (r3.length > 0) {
        for (let e9 = 0; e9 < r3.length; e9 += 1) {
          console.error(r3[e9]);
        }
        throw r3[0];
      }
    } finally {
      this._debug(r2, `end`);
    }
  }
  async _saveSession(e8) {
    this._debug(`#_saveSession()`, e8);
    this.suppressGetSessionWarning = true;
    let t2 = {
      ...e8
    };
    let n2 = t2.user && t2.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!n2 && t2.user) {
        await U(this.userStorage, this.storageKey + `-user`, {
          user: t2.user
        });
      }
      let e9 = {
        ...t2
      };
      delete e9.user;
      let r2 = Lr(e9);
      await U(this.storage, this.storageKey, r2);
    } else {
      let e9 = Lr(t2);
      await U(this.storage, this.storageKey, e9);
    }
  }
  async _removeSession() {
    this._sessionRemovalEpoch += 1;
    this._debug(`#_removeSession()`);
    this.lastRefreshFailure = null;
    this.suppressGetSessionWarning = false;
    await G(this.storage, this.storageKey);
    await Er(this.storage, this.storageKey);
    await G(this.storage, this.storageKey + `-user`);
    if (this.userStorage) {
      await G(this.userStorage, this.storageKey + `-user`);
    }
    await this._notifyAllSubscribers(`SIGNED_OUT`, null);
  }
  _removeVisibilityChangedCallback() {
    this._debug(`#_removeVisibilityChangedCallback()`);
    let visibilityChangedCallback = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      if (visibilityChangedCallback && V() && window != null && window.removeEventListener) {
        window.removeEventListener(`visibilitychange`, visibilityChangedCallback);
      }
    } catch (error) {
      console.error(`removing visibilitychange callback failed`, error);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh();
    this._debug(`#_startAutoRefresh()`);
    let e8 = setInterval(() => this._autoRefreshTokenTick(), N);
    this.autoRefreshTicker = e8;
    if (e8 && typeof e8 == `object` && typeof e8.unref == `function`) {
      e8.unref();
    } else if (typeof Deno < `u` && typeof Deno.unrefTimer == `function`) {
      Deno.unrefTimer(e8);
    }
    let t2 = setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = t2;
    if (t2 && typeof t2 == `object` && typeof t2.unref == `function`) {
      t2.unref();
    } else if (typeof Deno < `u` && typeof Deno.unrefTimer == `function`) {
      Deno.unrefTimer(t2);
    }
  }
  async _stopAutoRefresh() {
    this._debug(`#_stopAutoRefresh()`);
    let autoRefreshTicker = this.autoRefreshTicker;
    this.autoRefreshTicker = null;
    if (autoRefreshTicker) {
      clearInterval(autoRefreshTicker);
    }
    let autoRefreshTickTimeout = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null;
    if (autoRefreshTickTimeout) {
      clearTimeout(autoRefreshTickTimeout);
    }
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
  }
  async dispose() {
    this._removeVisibilityChangedCallback();
    await this._stopAutoRefresh();
    this.broadcastChannel?.close();
    this.broadcastChannel = null;
    this.stateChangeEmitters.clear();
  }
  async _autoRefreshTokenTick() {
    this._debug(`#_autoRefreshTokenTick()`, `begin`);
    if (this.lock != null) {
      try {
        await this._acquireLock(0, async () => {
          try {
            let e8 = Date.now();
            try {
              return await this._useSession(async ({
                data: {
                  session
                }
              }) => {
                if (!session || !session.refresh_token || !session.expires_at) {
                  this._debug(`#_autoRefreshTokenTick()`, `no session`);
                  return;
                }
                let r2 = Math.floor((session.expires_at * 1e3 - e8) / N);
                this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r2} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`);
                if (r2 <= 3) {
                  await this._callRefreshToken(session.refresh_token);
                }
              });
            } catch (error) {
              console.error(`Auto refresh tick failed with error. This is likely a transient error.`, error);
            }
          } finally {
            this._debug(`#_autoRefreshTokenTick()`, `end`);
          }
        });
      } catch (error) {
        if (error instanceof Xr) {
          this._debug(`auto refresh token tick lock not available`);
        } else {
          throw error;
        }
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
        await this._useSession(async ({
          data: {
            session
          }
        }) => {
          if (!session || !session.refresh_token || !session.expires_at) {
            this._debug(`#_autoRefreshTokenTick()`, `no session`);
            return;
          }
          let r2 = Math.floor((session.expires_at * 1e3 - e8) / N);
          this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r2} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`);
          if (r2 <= 3) {
            await this._callRefreshToken(session.refresh_token);
          }
        });
      } catch (error) {
        console.error(`Auto refresh tick failed with error. This is likely a transient error.`, error);
      }
    } finally {
      this._debug(`#_autoRefreshTokenTick()`, `end`);
    }
  }
  async _handleVisibilityChange() {
    this._debug(`#_handleVisibilityChange()`);
    if (!V() || !(window != null && window.addEventListener)) {
      if (this.autoRefreshToken) {
        this.startAutoRefresh();
      }
      return false;
    }
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(false);
        } catch (error) {
          this._debug(`#visibilityChangedCallback`, `error`, error);
        }
      };
      window?.addEventListener(`visibilitychange`, this.visibilityChangedCallback);
      await this._onVisibilityChanged(true);
    } catch (error) {
      console.error(`_handleVisibilityChange`, error);
    }
  }
  async _onVisibilityChanged(e8) {
    let t2 = `#_onVisibilityChanged(${e8})`;
    this._debug(t2, `visibilityState`, document.visibilityState);
    if (document.visibilityState === `visible`) {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!e8) {
        await this.initializePromise;
        if (this.lock != null) {
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== `visible`) {
              this._debug(t2, `acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);
              return;
            }
            await this._recoverAndRefresh();
          });
        } else {
          if (document.visibilityState !== `visible`) {
            this._debug(t2, `visibilityState is no longer visible, skipping recovery`);
            return;
          }
          await this._recoverAndRefresh();
        }
      }
    } else {
      if (document.visibilityState === `hidden` && this.autoRefreshToken) {
        this._stopAutoRefresh();
      }
    }
  }
  async _getUrlForProvider(e8, t2, n2) {
    let r2 = n2?.redirectTo;
    let i2 = null;
    let a2 = null;
    let o2 = null;
    if (this.flowType === `pkce`) {
      [i2, a2, o2] = await this._getCodeChallengeAndMethod();
      r2 = this._maybeAppendFlowIdToRedirect(r2, o2);
    }
    let s2 = [`provider=${encodeURIComponent(t2)}`];
    if (r2) {
      s2.push(`redirect_to=${encodeURIComponent(r2)}`);
    }
    if (n2?.scopes) {
      s2.push(`scopes=${encodeURIComponent(n2.scopes)}`);
    }
    if (i2 != null && a2 != null) {
      let e9 = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i2)}`,
        code_challenge_method: `${encodeURIComponent(a2)}`
      });
      s2.push(e9.toString());
    }
    if (n2?.queryParams) {
      let e9 = new URLSearchParams(n2.queryParams);
      s2.push(e9.toString());
    }
    if (n2?.skipBrowserRedirect) {
      s2.push(`skip_http_redirect=${n2.skipBrowserRedirect}`);
    }
    return {
      url: `${e8}?${s2.join(`&`)}`,
      flowId: o2
    };
  }
  _maybeAppendFlowIdToRedirect(e8, t2) {
    if (!e8 || !t2 || !this.experimental.appendPkceFlowIdToRedirects) {
      return e8 ?? void 0;
    }
    return Dr(e8, t2);
  }
  async _getCodeChallengeAndMethod(e8 = false) {
    return Or(this.storage, this.storageKey, e8, (e9) => this._debug(`#_getCodeChallengeAndMethod()`, `evicted oldest pending PKCE verifier slot`, e9));
  }
  async _unenroll(e8) {
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        return await Y(this.fetch, `DELETE`, `${this.url}/factors/${e8.factorId}`, {
          headers: this.headers,
          jwt: data?.session?.access_token
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _enroll(e8) {
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        let i2 = {
          friendly_name: e8.friendlyName,
          factor_type: e8.factorType,
          ...e8.factorType === `phone` ? {
            phone: e8.phone
          } : e8.factorType === `totp` ? {
            issuer: e8.issuer
          } : {}
        };
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/factors`, {
          body: i2,
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        if (e8.factorType === `totp` && data_1.type === `totp` && data_1?.totp?.qr_code) {
          data_1.totp.qr_code = `data:image/svg+xml;utf-8,${data_1.totp.qr_code}`;
        }
        return this._returnResult({
          data: data_1,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _verify(e8) {
    let t2 = async () => {
      try {
        return await this._useSession(async ({
          data,
          error
        }) => {
          if (error) {
            return this._returnResult({
              data: null,
              error
            });
          }
          let i2 = {
            challenge_id: e8.challengeId,
            ...`webauthn` in e8 ? {
              webauthn: {
                ...e8.webauthn,
                credential_response: e8.webauthn.type === `create` ? ci(e8.webauthn.credential_response) : li(e8.webauthn.credential_response)
              }
            } : {
              code: e8.code
            }
          };
          let {
            data: data_1,
            error: error_1
          } = await Y(this.fetch, `POST`, `${this.url}/factors/${e8.factorId}/verify`, {
            body: i2,
            headers: this.headers,
            jwt: data?.session?.access_token
          });
          if (error_1) {
            return this._returnResult({
              data: null,
              error: error_1
            });
          }
          await this._saveSession({
            expires_at: Math.round(Date.now() / 1e3) + data_1.expires_in,
            ...data_1
          });
          await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, data_1);
          return this._returnResult({
            data: data_1,
            error: error_1
          });
        });
      } catch (error) {
        if (P(error)) {
          return this._returnResult({
            data: null,
            error
          });
        }
        throw error;
      }
    };
    if (this.lock == null) {
      return t2();
    }
    return this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _challenge(e8) {
    let t2 = async () => {
      try {
        return await this._useSession(async ({
          data,
          error
        }) => {
          if (error) {
            return this._returnResult({
              data: null,
              error
            });
          }
          let i2 = await Y(this.fetch, `POST`, `${this.url}/factors/${e8.factorId}/challenge`, {
            body: e8,
            headers: this.headers,
            jwt: data?.session?.access_token
          });
          if (i2.error) {
            return i2;
          }
          let {
            data: data_1
          } = i2;
          if (data_1.type !== `webauthn`) {
            return {
              data: data_1,
              error: null
            };
          }
          switch (data_1.webauthn.type) {
            case `create`:
              return {
                data: {
                  ...data_1,
                  webauthn: {
                    ...data_1.webauthn,
                    credential_options: {
                      ...data_1.webauthn.credential_options,
                      publicKey: oi(data_1.webauthn.credential_options.publicKey)
                    }
                  }
                },
                error: null
              };
            case `request`:
              return {
                data: {
                  ...data_1,
                  webauthn: {
                    ...data_1.webauthn,
                    credential_options: {
                      ...data_1.webauthn.credential_options,
                      publicKey: si(data_1.webauthn.credential_options.publicKey)
                    }
                  }
                },
                error: null
              };
          }
        });
      } catch (error) {
        if (P(error)) {
          return this._returnResult({
            data: null,
            error
          });
        }
        throw error;
      }
    };
    if (this.lock == null) {
      return t2();
    }
    return this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _challengeAndVerify(e8) {
    let {
      data,
      error
    } = await this._challenge({
      factorId: e8.factorId
    });
    if (error) {
      return this._returnResult({
        data: null,
        error
      });
    }
    return await this._verify({
      factorId: e8.factorId,
      challengeId: data.id,
      code: e8.code
    });
  }
  async _listFactors() {
    let {
      data: {
        user
      },
      error
    } = await this.getUser();
    if (error) {
      return {
        data: null,
        error
      };
    }
    let n2 = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: []
    };
    for (let t2 of user?.factors ?? []) {
      n2.all.push(t2);
      if (t2.status === `verified` && t2.factor_type in n2 && Array.isArray(n2[t2.factor_type])) {
        n2[t2.factor_type].push(t2);
      }
    }
    return {
      data: n2,
      error: null
    };
  }
  async _getAuthenticatorAssuranceLevel(e8) {
    if (e8) {
      try {
        let {
          payload: payload_1
        } = dr(e8);
        let n2 = null;
        if (payload_1.aal) {
          n2 = payload_1.aal;
        }
        let r2 = n2;
        let {
          data: {
            user
          },
          error: error_1
        } = await this.getUser(e8);
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        if ((user?.factors?.filter((e9) => e9.status === `verified`) ?? []).length > 0) {
          r2 = `aal2`;
        }
        let o3 = payload_1.amr || [];
        return {
          data: {
            currentLevel: n2,
            nextLevel: r2,
            currentAuthenticationMethods: o3
          },
          error: null
        };
      } catch (err) {
        if (P(err)) {
          return this._returnResult({
            data: null,
            error: err
          });
        }
        throw err;
      }
    }
    let {
      data: {
        session
      },
      error
    } = await this.getSession();
    if (error) {
      return this._returnResult({
        data: null,
        error
      });
    }
    if (!session) {
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: []
        },
        error: null
      };
    }
    let {
      payload
    } = dr(session.access_token);
    let i2 = null;
    if (payload.aal) {
      i2 = payload.aal;
    }
    let a2 = i2;
    if ((session.user.factors?.filter((e9) => e9.status === `verified`) ?? []).length > 0) {
      a2 = `aal2`;
    }
    let o2 = payload.amr || [];
    return {
      data: {
        currentLevel: i2,
        nextLevel: a2,
        currentAuthenticationMethods: o2
      },
      error: null
    };
  }
  async _getRecoveryCodesStatus() {
    Pr(this.experimental);
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `GET`, `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data: data_1,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _generateRecoveryCodes(e8) {
    Pr(this.experimental);
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes`, {
          body: e8?.friendlyName ? {
            friendly_name: e8.friendlyName
          } : void 0,
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data: data_1,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _verifyRecoveryCode(e8) {
    Pr(this.experimental);
    let t2 = async () => {
      try {
        return await this._useSession(async ({
          data,
          error
        }) => {
          if (error) {
            return this._returnResult({
              data: null,
              error
            });
          }
          let {
            data: data_1,
            error: error_1
          } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes/verify`, {
            body: {
              code: e8.code
            },
            headers: this.headers,
            jwt: data?.session?.access_token
          });
          if (error_1) {
            return this._returnResult({
              data: null,
              error: error_1
            });
          }
          let o2 = {
            expires_at: ir(data_1.expires_in),
            ...data_1
          };
          await this._saveSession(o2);
          await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, o2);
          return this._returnResult({
            data: data_1,
            error: null
          });
        });
      } catch (error) {
        if (P(error)) {
          return this._returnResult({
            data: null,
            error
          });
        }
        throw error;
      }
    };
    if (this.lock == null) {
      return t2();
    }
    return this._acquireLock(this.lockAcquireTimeout, t2);
  }
  async _regenerateRecoveryCodes() {
    Pr(this.experimental);
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/factors/recovery-codes/regenerate`, {
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data: data_1,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _unenrollRecoveryCodes() {
    Pr(this.experimental);
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `DELETE`, `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data: data_1,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _getAuthorizationDetails(e8) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (session) {
          return await Y(this.fetch, `GET`, `${this.url}/oauth/authorizations/${e8}`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (e9) => ({
              data: e9,
              error: null
            })
          });
        }
        return this._returnResult({
          data: null,
          error: new L()
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _approveAuthorization(e8, t2) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let a2 = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e8}/consent`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            action: `approve`
          },
          xform: (e9) => ({
            data: e9,
            error: null
          })
        });
        if (a2.data && a2.data.redirect_url && V() && !t2?.skipBrowserRedirect) {
          window.location.assign(a2.data.redirect_url);
        }
        return a2;
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _denyAuthorization(e8, t2) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let a2 = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e8}/consent`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            action: `deny`
          },
          xform: (e9) => ({
            data: e9,
            error: null
          })
        });
        if (a2.data && a2.data.redirect_url && V() && !t2?.skipBrowserRedirect) {
          window.location.assign(a2.data.redirect_url);
        }
        return a2;
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (session) {
          return await Y(this.fetch, `GET`, `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: (e8) => ({
              data: e8,
              error: null
            })
          });
        }
        return this._returnResult({
          data: null,
          error: new L()
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _revokeOAuthGrant(e8) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (session) {
          await Y(this.fetch, `DELETE`, `${this.url}/user/oauth/grants`, {
            headers: this.headers,
            jwt: session.access_token,
            query: {
              client_id: e8.clientId
            },
            noResolveJson: true
          });
          return {
            data: {},
            error: null
          };
        }
        return this._returnResult({
          data: null,
          error: new L()
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async fetchJwk(e8, t2 = {
    keys: []
  }) {
    let n2 = t2.keys.find((t3) => t3.kid === e8);
    if (n2) {
      return n2;
    }
    let r2 = Date.now();
    n2 = this.jwks.keys.find((t3) => t3.kid === e8);
    if (n2 && this.jwks_cached_at + 6e5 > r2) {
      return n2;
    }
    let {
      data,
      error
    } = await Y(this.fetch, `GET`, `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (error) {
      throw error;
    }
    if (!data.keys || data.keys.length === 0 || (this.jwks = data, this.jwks_cached_at = r2, n2 = data.keys.find((t3) => t3.kid === e8), !n2)) {
      return null;
    }
    return n2;
  }
  async getClaims(e8, t2 = {}) {
    try {
      let n2 = e8;
      if (!n2) {
        let {
          data,
          error
        } = await this.getSession();
        if (error || !data.session) {
          return this._returnResult({
            data: null,
            error
          });
        }
        n2 = data.session.access_token;
      }
      let {
        header,
        payload,
        signature,
        raw: {
          header: header_1,
          payload: payload_1
        }
      } = dr(n2);
      if (!t2?.allowExpired) {
        try {
          jr(payload.exp);
        } catch (error) {
          throw new qn(error instanceof Error ? error.message : `JWT validation failed`);
        }
      }
      let c2 = !header.alg || header.alg.startsWith(`HS`) || !header.kid || !(`crypto` in globalThis && `subtle` in globalThis.crypto) ? null : await this.fetchJwk(header.kid, t2?.keys ? {
        keys: t2.keys
      } : t2?.jwks);
      if (!c2) {
        let {
          error
        } = await this.getUser(n2);
        if (error) {
          throw error;
        }
        return {
          data: {
            claims: payload,
            header,
            signature
          },
          error: null
        };
      }
      let l2 = Mr(header.alg);
      let u2 = await crypto.subtle.importKey(`jwk`, c2, l2, true, [`verify`]);
      if (!await crypto.subtle.verify(l2, u2, signature, rr(`${header_1}.${payload_1}`))) {
        throw new qn(`Invalid JWT signature`);
      }
      return {
        data: {
          claims: payload,
          header,
          signature
        },
        error: null
      };
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async signInWithPasskey(e8) {
    try {
      if (!di()) {
        return this._returnResult({
          data: null,
          error: new F(`Browser does not support WebAuthn`, null)
        });
      }
      let {
        data,
        error
      } = await this._startPasskeyAuthentication({
        options: {
          captchaToken: e8?.options?.captchaToken
        }
      });
      if (error || !data) {
        return this._returnResult({
          data: null,
          error
        });
      }
      let {
        data: data_1,
        error: error_1
      } = await pi({
        publicKey: si(data.options),
        signal: e8?.options?.signal ?? ai.createNewAbortSignal(),
        mediation: e8?.options?.mediation
      });
      if (error_1 || !data_1) {
        return this._returnResult({
          data: null,
          error: error_1 ?? new F(`WebAuthn ceremony failed`, null)
        });
      }
      let a2 = li(data_1);
      return this._verifyPasskeyAuthentication({
        challengeId: data.challenge_id,
        credential: a2
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async registerPasskey(e8) {
    try {
      if (!di()) {
        return this._returnResult({
          data: null,
          error: new F(`Browser does not support WebAuthn`, null)
        });
      }
      let {
        data,
        error
      } = await this._startPasskeyRegistration();
      if (error || !data) {
        return this._returnResult({
          data: null,
          error
        });
      }
      let {
        data: data_1,
        error: error_1
      } = await fi({
        publicKey: oi(data.options),
        signal: e8?.options?.signal ?? ai.createNewAbortSignal()
      });
      if (error_1 || !data_1) {
        return this._returnResult({
          data: null,
          error: error_1 ?? new F(`WebAuthn ceremony failed`, null)
        });
      }
      let a2 = ci(data_1);
      return this._verifyPasskeyRegistration({
        challengeId: data.challenge_id,
        credential: a2
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _startPasskeyRegistration() {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {}
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _verifyPasskeyRegistration(e8) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            challenge_id: e8.challengeId,
            credential: e8.credential
          }
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _startPasskeyAuthentication(e8) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: {
            captcha_token: e8?.options?.captchaToken
          }
        }
      });
      if (error) {
        return this._returnResult({
          data: null,
          error
        });
      }
      return this._returnResult({
        data,
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _verifyPasskeyAuthentication(e8) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e8.challengeId,
          credential: e8.credential
        },
        xform: X
      });
      if (error) {
        return this._returnResult({
          data: null,
          error
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data,
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _listPasskeys() {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `GET`, `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: session.access_token,
          xform: (e8) => ({
            data: e8,
            error: null
          })
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _updatePasskey(e8) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `PATCH`, `${this.url}/passkeys/${e8.passkeyId}`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            friendly_name: e8.friendlyName
          }
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
  async _deletePasskey(e8) {
    try {
      return await this._useSession(async ({
        data: {
          session
        },
        error
      }) => {
        if (error) {
          return this._returnResult({
            data: null,
            error
          });
        }
        if (!session) {
          return this._returnResult({
            data: null,
            error: new L()
          });
        }
        let {
          error: error_1
        } = await Y(this.fetch, `DELETE`, `${this.url}/passkeys/${e8.passkeyId}`, {
          headers: this.headers,
          jwt: session.access_token,
          noResolveJson: true
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        return this._returnResult({
          data: null,
          error: null
        });
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: null,
          error
        });
      }
      throw error;
    }
  }
};
Ci.nextInstanceID = {};
var wi = Ci;
var Ti = `2.117.2`;
var Ei = ``;
var Di;
if (typeof Deno < `u`) {
  Ei = `deno`;
  Di = Deno.version?.deno;
} else if (typeof document < `u`) {
  Ei = `web`;
} else if (typeof navigator < `u` && navigator.product === `ReactNative`) {
  Ei = `react-native`;
} else {
  Ei = `node`;
  let e8 = globalThis.process;
  Di = e8?.version?.replace(/^v/, ``);
}
var ki = [`runtime=${Ei}`];
if (Di) {
  ki.push(`runtime-version=${Di}`);
}
var global_1 = {
  headers: {
    "X-Client-Info": `supabase-js/${Ti}; ${ki.join(`; `)}`
  }
};
var db = {
  schema: `public`
};
var Mi = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: `implicit`
};
var realtime = {};
var tracePropagation = {
  enabled: false,
  respectSamplingDecision: true
};
function Fi(traceparent) {
  if (!traceparent || typeof traceparent != `string`) {
    return null;
  }
  let t2 = traceparent.split(`-`);
  if (t2.length !== 4) {
    return null;
  }
  let [n2, r2, i2, a2] = t2;
  if (n2.length !== 2 || r2.length !== 32 || i2.length !== 16 || a2.length !== 2) {
    return null;
  }
  let o2 = /^[0-9a-f]+$/i;
  if (!o2.test(n2) || !o2.test(r2) || !o2.test(i2) || !o2.test(a2) || r2 === `00000000000000000000000000000000` || i2 === `0000000000000000`) {
    return null;
  }
  return {
    version: n2,
    traceId: r2,
    parentId: i2,
    traceFlags: a2,
    isSampled: (parseInt(a2, 16) & 1) == 1
  };
}
function Ii(e8, t2) {
  if (!e8 || !t2 || t2.length === 0) {
    return false;
  }
  let n2;
  if (e8 instanceof URL) {
    n2 = e8;
  } else {
    try {
      n2 = new URL(e8);
    } catch {
      return false;
    }
  }
  for (let e9 of t2) {
    try {
      if (typeof e9 == `string`) {
        if (Li(n2.hostname, e9)) {
          return true;
        }
      } else if (e9 instanceof RegExp) {
        if (e9.test(n2.hostname)) {
          return true;
        }
      } else if (typeof e9 == `function` && e9(n2)) {
        return true;
      }
    } catch {
      continue;
    }
  }
  return false;
}
function Li(hostname, t2) {
  if (t2 === hostname) {
    return true;
  }
  if (t2.startsWith(`*.`)) {
    let n2 = t2.slice(2);
    if (hostname.endsWith(n2) && (hostname === n2 || hostname.endsWith(`.` + n2))) {
      return true;
    }
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
  t2.push(`*.supabase.co`, `*.supabase.in`);
  t2.push(`localhost`, `127.0.0.1`, `[::1]`);
  return t2;
}
var Wi = (e8) => {
  if (e8) {
    return (...t2) => e8(...t2);
  }
  return (...e9) => fetch(...e9);
};
var Ki = (e8) => e8.startsWith(`sb_publishable_`) || e8.startsWith(`sb_secret_`);
var qi = `sb_temp_`;
var Ji = /* @__PURE__ */ new Set();
var Yi = (e8) => {
  if (!e8.startsWith(`sb_`) || Ki(e8) || e8.startsWith(qi)) {
    return;
  }
  let t2 = e8.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? `unknown`;
  if (!Ji.has(t2)) {
    Ji.add(t2);
    console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`);
  }
};
var Xi = (e8, t2, n2, fetch2, tracePropagation2, a2) => {
  let o2 = Wi(fetch2);
  let s2 = Headers;
  let c2 = tracePropagation2?.enabled === true;
  let l2 = tracePropagation2?.respectSamplingDecision !== false;
  let u2 = c2 ? Ri(t2) : null;
  let d2 = !(a2?.omitApiKeyAsBearer && Ki(e8));
  return async (t3, r2) => {
    let i2 = await n2();
    let a3 = new s2(r2?.headers);
    if (!a3.has(`apikey`)) {
      a3.set(`apikey`, e8);
    }
    if (!a3.has(`Authorization`)) {
      let t4 = i2 ?? (d2 ? e8 : null);
      if (t4) {
        a3.set(`Authorization`, `Bearer ${t4}`);
      }
    }
    if (u2) {
      let e9 = $i(t3, u2, l2);
      if (e9) {
        if (e9.traceparent && !a3.has(`traceparent`)) {
          a3.set(`traceparent`, e9.traceparent);
        }
        if (e9.tracestate && !a3.has(`tracestate`)) {
          a3.set(`tracestate`, e9.tracestate);
        }
        if (e9.baggage && !a3.has(`baggage`)) {
          a3.set(`baggage`, e9.baggage);
        }
      }
    }
    return o2(t3, {
      ...r2,
      headers: a3
    });
  };
};
var Zi = false;
var Qi = false;
function $i(e8, n2, r2) {
  let i2 = t();
  if (!i2) {
    if (!Zi) {
      Zi = true;
      console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.");
    }
    return null;
  }
  if (!Ii(typeof e8 == `string` || e8 instanceof URL ? e8 : e8.url, n2)) {
    return null;
  }
  let a2 = i2();
  if (!a2 || !a2.traceparent) {
    if (a2?.carrierKeys?.length && !Qi) {
      Qi = true;
      let e9 = a2.carrierKeys.includes(`sentry-trace`) ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it." : ` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;
      console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${a2.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.` + e9);
    }
    return null;
  }
  if (r2) {
    let e9 = Fi(a2.traceparent);
    if (e9 && !e9.isSampled) {
      return {
        traceparent: a2.traceparent
      };
    }
  }
  return a2;
}
function ea(tracePropagation2) {
  if (typeof tracePropagation2 == `boolean`) {
    return {
      enabled: tracePropagation2
    };
  }
  return tracePropagation2;
}
function ta(e8) {
  if (e8.endsWith(`/`)) {
    return e8;
  }
  return e8 + `/`;
}
var na = false;
function ra(e8) {
  if (!na) {
    if (typeof e8 == `object` && e8 && `schema` in e8 && e8.schema !== void 0) {
      na = true;
      console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`);
    }
  }
}
function ia(e8, t2) {
  let {
    db: db2,
    auth,
    realtime: realtime2,
    global: global2
  } = e8;
  let {
    db: db_1,
    auth: auth_1,
    realtime: realtime_1,
    global: global_12
  } = t2;
  let u2 = ea(e8.tracePropagation);
  let d2 = ea(t2.tracePropagation);
  let f2 = {
    db: {
      ...db_1,
      ...db2
    },
    auth: {
      ...auth_1,
      ...auth
    },
    realtime: {
      ...realtime_1,
      ...realtime2
    },
    storage: {},
    global: {
      ...global_12,
      ...global2,
      headers: {
        ...global_12?.headers ?? {},
        ...global2?.headers ?? {}
      }
    },
    tracePropagation: {
      enabled: u2?.enabled ?? d2?.enabled ?? false,
      respectSamplingDecision: u2?.respectSamplingDecision ?? d2?.respectSamplingDecision ?? true
    },
    accessToken: async () => ``
  };
  if (e8.accessToken) {
    f2.accessToken = e8.accessToken;
  } else {
    delete f2.accessToken;
  }
  return f2;
}
function aa(e8) {
  let t2 = e8?.trim();
  if (!t2) {
    throw Error(`supabaseUrl is required.`);
  }
  if (!t2.match(/^https?:\/\//i)) {
    throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
  }
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
    this.supabaseUrl = e8;
    this.supabaseKey = t2;
    let r2 = aa(e8);
    if (!t2) {
      throw Error(`supabaseKey is required.`);
    }
    Yi(t2);
    ra(n2);
    this.realtimeUrl = new URL(`realtime/v1`, r2);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(`http`, `ws`);
    this.authUrl = new URL(`auth/v1`, r2);
    this.storageUrl = new URL(`storage/v1`, r2);
    this.functionsUrl = new URL(`functions/v1`, r2);
    let i2 = `sb-${r2.hostname.split(`.`)[0]}-auth-token`;
    let a2 = {
      db,
      realtime,
      auth: {
        ...Mi,
        storageKey: i2
      },
      global: global_1,
      tracePropagation
    };
    let o2 = ia(n2 ?? {}, a2);
    this.settings = o2;
    this.storageKey = o2.auth.storageKey ?? ``;
    this.headers = o2.global.headers ?? {};
    if (o2.accessToken) {
      this.accessToken = o2.accessToken;
      this.auth = new Proxy({}, {
        get: (e9, t3) => {
          throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t3)} is not possible`);
        }
      });
    } else {
      this.auth = this._initSupabaseAuthClient(o2.auth ?? {}, this.headers, o2.global.fetch);
    }
    this.fetch = Xi(t2, e8, this._getSessionToken.bind(this), o2.global.fetch, o2.tracePropagation);
    this.functionsFetch = Xi(t2, e8, this._getSessionToken.bind(this), o2.global.fetch, o2.tracePropagation, {
      omitApiKeyAsBearer: true
    });
    this.realtime = this._initRealtimeClient({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch,
      ...o2.realtime
    });
    if (this.accessToken) {
      Promise.resolve(this.accessToken()).then((e9) => this.realtime.setAuth(e9)).catch((e9) => console.warn(`Failed to set initial Realtime auth token:`, e9));
    }
    this.rest = new fe(new URL(`rest/v1`, r2).href, {
      headers: this.headers,
      schema: o2.db.schema,
      fetch: this.fetch,
      timeout: o2.db.timeout,
      urlLengthLimit: o2.db.urlLengthLimit,
      retry: o2.db.retry
    });
    this.storage = new Sn(this.storageUrl.href, this.headers, this.fetch, n2?.storage);
    if (!o2.accessToken) {
      this._listenForAuthEvents();
    }
  }
  get functions() {
    return new u(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.functionsFetch
    });
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
  rpc(e8, t2 = {}, n2 = {
    head: false,
    get: false,
    count: void 0
  }) {
    return this.rest.rpc(e8, t2, n2);
  }
  channel(e8, t2 = {
    config: {}
  }) {
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
    const e8 = this;
    if (e8.accessToken) {
      return await e8.accessToken();
    }
    let {
      data
    } = await e8.auth.getSession();
    return data.session?.access_token ?? null;
  }
  async _getAccessToken() {
    const e8 = this;
    return await e8._getSessionToken() ?? e8.supabaseKey;
  }
  _initSupabaseAuthClient({
    autoRefreshToken,
    persistSession,
    detectSessionInUrl,
    storage,
    userStorage,
    storageKey,
    flowType,
    lock,
    debug,
    throwOnError,
    experimental,
    lockAcquireTimeout,
    skipAutoInitialize
  }, p2, fetch2) {
    let h2 = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new oa({
      url: this.authUrl.href,
      headers: {
        ...h2,
        ...p2
      },
      storageKey,
      autoRefreshToken,
      persistSession,
      detectSessionInUrl,
      storage,
      userStorage,
      flowType,
      lock,
      debug,
      throwOnError,
      experimental,
      fetch: fetch2,
      lockAcquireTimeout,
      skipAutoInitialize,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((e8) => e8.toLowerCase() === `authorization`)
    });
  }
  _initRealtimeClient(e8) {
    return new Tt(this.realtimeUrl.href, {
      ...e8,
      params: {
        apikey: this.supabaseKey,
        ...e8?.params
      }
    });
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e8, t2) => {
      this._handleTokenChanged(e8, `CLIENT`, t2?.access_token);
    });
  }
  _handleTokenChanged(e8, t2, n2) {
    if ((e8 === `TOKEN_REFRESHED` || e8 === `SIGNED_IN` || e8 === `INITIAL_SESSION`) && this.changedAccessToken !== n2) {
      this.changedAccessToken = n2;
      this.realtime.setAuth(n2);
    } else if (e8 === `SIGNED_OUT`) {
      this.realtime.setAuth();
      if (t2 == `STORAGE`) {
        this.auth.signOut();
      }
      this.changedAccessToken = void 0;
    }
  }
};
var ca = (e8, t2, n2) => new sa(e8, t2, n2);
function la() {
  if (typeof window < `u` || globalThis.Deno !== void 0) {
    return false;
  }
  let globalThis_process = globalThis.process;
  if (!globalThis_process) {
    return false;
  }
  let e_version = globalThis_process.version;
  if (e_version == null) {
    return false;
  }
  let n2 = e_version.match(/^v(\d+)\./);
  if (n2) {
    return parseInt(n2[1], 10) <= 20;
  }
  return false;
}
if (la()) {
  console.warn(`\u26A0\uFE0F  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);
}
var supabase = ca(`https://sgpjbmkswbvhdsbrifpa.supabase.co`, `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`);

export {
  supabase
};
