// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
const e = Symbol.for(`@supabase/supabase-js.traceContextExtractor`);
function t() {
  return globalThis[e];
}
function n(e, t) {
  const n = {};
  for (var r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
      n[r] = e[r];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
}
function r(e, t, n, r) {
  function i(e) {
    if (e instanceof n) {
      return e;
    }
    return new n(function (t) {
      t(e);
    });
  }
  return new (n ||= Promise)(function (n, a) {
    function o(e) {
      try {
        c(r.next(e));
      } catch (error) {
        a(error);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (error) {
        a(error);
      }
    }
    function c(e) {
      if (e.done) {
        n(e.value);
      } else {
        i(e.value).then(o, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
}
const i = customFetch => {
  if (customFetch) {
    return (...t) => customFetch(...t);
  }
  return (...e) => fetch(...e);
};
class a extends Error {
  constructor(e, t = `FunctionsError`, n) {
    super(e);
    this.name = t;
    this.context = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class o extends a {
  constructor(e) {
    super(`Failed to send a request to the Edge Function`, `FunctionsFetchError`, e);
  }
}
class s extends a {
  constructor(e) {
    super(`Relay Error invoking the Edge Function`, `FunctionsRelayError`, e);
  }
}
class c extends a {
  constructor(e) {
    super(`Edge Function returned a non-2xx status code`, `FunctionsHttpError`, e);
  }
}
let l;
(e => {
  e.Any = `any`;
  e.ApNortheast1 = `ap-northeast-1`;
  e.ApNortheast2 = `ap-northeast-2`;
  e.ApSouth1 = `ap-south-1`;
  e.ApSoutheast1 = `ap-southeast-1`;
  e.ApSoutheast2 = `ap-southeast-2`;
  e.CaCentral1 = `ca-central-1`;
  e.EuCentral1 = `eu-central-1`;
  e.EuWest1 = `eu-west-1`;
  e.EuWest2 = `eu-west-2`;
  e.EuWest3 = `eu-west-3`;
  e.SaEast1 = `sa-east-1`;
  e.UsEast1 = `us-east-1`;
  e.UsWest1 = `us-west-1`;
  e.UsWest2 = `us-west-2`;
})(l ||= {});
class u {
  constructor(e, {
    headers = {},
    customFetch,
    region = l.Any
  } = {}) {
    this.url = e;
    this.headers = headers;
    this.region = region;
    this.fetch = i(customFetch);
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return r(this, arguments, undefined, function* (e, t = {}) {
      let n;
      let r;
      let i;
      let a;
      try {
        let {
          headers,
          method,
          body,
          signal,
          timeout
        } = t;
        let p = {};
        let {
          region
        } = t;
        region ||= this.region;
        let h = new URL(`${this.url}/${e}`);
        if (region && region !== `any`) {
          p[`x-region`] = region;
          h.searchParams.set(`forceFunctionRegion`, region);
        }
        let g;
        let ee = !!headers && Object.keys(headers).some(e => e.toLowerCase() === `content-type`);
        if (body && !ee) {
          if (typeof Blob < `u` && body instanceof Blob || body instanceof ArrayBuffer) {
            p[`Content-Type`] = `application/octet-stream`;
            g = body;
          } else if (typeof body == `string`) {
            p[`Content-Type`] = `text/plain`;
            g = body;
          } else if (typeof FormData < `u` && body instanceof FormData) {
            g = body;
          } else {
            p[`Content-Type`] = `application/json`;
            g = JSON.stringify(body);
          }
        } else {
          g = body && typeof body != `string` && !(typeof Blob < `u` && body instanceof Blob) && !(body instanceof ArrayBuffer) && !(typeof FormData < `u` && body instanceof FormData) ? JSON.stringify(body) : body;
        }
        let signal_1 = signal;
        if (timeout) {
          i = new AbortController();
          r = setTimeout(() => i.abort(), timeout);
          if (signal) {
            signal_1 = i.signal;
            a = () => i.abort();
            signal.addEventListener(`abort`, a);
          } else {
            signal_1 = i.signal;
          }
        }
        let response = yield this.fetch(h.toString(), {
          method: method || `POST`,
          headers: {
            ...p,
            ...this.headers,
            ...headers
          },
          body: g,
          signal: signal_1
        }).catch(e => {
          throw new o(e);
        });
        let ne = response.headers.get(`x-relay-error`);
        if (ne && ne === `true`) {
          throw new s(response);
        }
        if (!response.ok) {
          throw new c(response);
        }
        let v = (response.headers.get(`Content-Type`) ?? `text/plain`).split(`;`)[0].trim().toLowerCase();
        let re;
        re = v === `application/json` ? yield response.json() : v === `application/octet-stream` || v === `application/pdf` ? yield response.blob() : v === `text/event-stream` ? response : v === `multipart/form-data` ? yield response.formData() : yield response.text();
        return {
          data: re,
          error: null,
          response
        };
      } catch (error) {
        return {
          data: null,
          error,
          response: error instanceof c || error instanceof s ? error.context : undefined
        };
      } finally {
        if (r) {
          clearTimeout(r);
        }
        if (a) {
          if ((n = t.signal) != null) {
            n.removeEventListener(`abort`, a);
          }
        }
      }
    });
  }
}
class d extends Error {
  constructor(e) {
    super(e.message);
    this.name = `PostgrestError`;
    this.details = e.details;
    this.hint = e.hint;
    this.code = e.code;
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
}
const f = 3;
const p = e => Math.min(1000 * 2 ** e, 30000);
const m = [520, 503];
const h = [`GET`, `HEAD`, `OPTIONS`];
function re(e, signal) {
  return new Promise(resolve => {
    if (signal?.aborted) {
      resolve();
      return;
    }
    let r = setTimeout(() => {
      signal?.removeEventListener(`abort`, i);
      resolve();
    }, e);
    function i() {
      clearTimeout(r);
      resolve();
    }
    signal?.addEventListener(`abort`, i);
  });
}
function ie(method, status, n, r) {
  return !(!r || n >= f || !h.includes(method) || !m.includes(status));
}
async function ae(e, t, n, r) {
  let i = 0;
  while (true) {
    let a = {
      ...n.headers
    };
    if (i > 0) {
      a[`X-Retry-Count`] = String(i);
    }
    let o;
    try {
      o = await e(t, {
        method: n.method,
        headers: a,
        body: n.body,
        signal: n.signal
      });
    } catch (error) {
      if (error?.name === `AbortError` || error?.code === `ABORT_ERR` || !h.includes(n.method)) {
        throw error;
      }
      if (r && i < f) {
        let e = p(i);
        i++;
        await re(e, n.signal);
        continue;
      }
      throw error;
    }
    if (ie(n.method, o.status, i, r)) {
      let e = o.headers?.get(`Retry-After`) ?? null;
      let t = e === null ? p(i) : Math.max(0, parseInt(e, 10) || 0) * 1000;
      await o.text();
      i++;
      await re(t, n.signal);
      continue;
    }
    return o;
  }
}
class oe {
  constructor(e) {
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = e.method;
    this.url = e.url;
    this.headers = new Headers(e.headers);
    this.schema = e.schema;
    this.body = e.body;
    this.shouldThrowOnError = e.shouldThrowOnError ?? false;
    this.signal = e.signal;
    this.isMaybeSingle = e.isMaybeSingle ?? false;
    this.shouldStripNulls = e.shouldStripNulls ?? false;
    this.urlLengthLimit = e.urlLengthLimit ?? 8000;
    this.retryEnabled = e.retry ?? true;
    this.fetch = e.fetch ? e.fetch : fetch;
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
  setHeader(e, t) {
    this.headers = new Headers(this.headers);
    this.headers.set(e, t);
    return this;
  }
  retry(e) {
    this.retryEnabled = e;
    return this;
  }
  then(e, t) {
    const n = this;
    if (this.schema !== undefined) {
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
      let e = this.headers.get(`Accept`);
      if (e === `application/vnd.pgrst.object+json`) {
        this.headers.set(`Accept`, `application/vnd.pgrst.object+json;nulls=stripped`);
      } else if (!e || e === `application/json`) {
        this.headers.set(`Accept`, `application/vnd.pgrst.array+json;nulls=stripped`);
      }
    }
    let fetch = this.fetch;
    let i = (async () => {
      let e = {};
      n.headers.forEach((t, n) => {
        e[n] = t;
      });
      let t = await ae(fetch, n.url.toString(), {
        method: n.method,
        headers: e,
        body: JSON.stringify(n.body, (e, t) => {
          if (typeof t == `bigint`) {
            return t.toString();
          }
          return t;
        }),
        signal: n.signal
      }, n.retryEnabled);
      return await n.processResponse(t);
    })();
    if (!this.shouldThrowOnError) {
      i = i.catch(e => {
        let t = ``;
        let hint = ``;
        let code = ``;
        let i = e?.cause;
        if (i) {
          let n = i?.message ?? ``;
          let r = i?.code ?? ``;
          t = `${e?.name ?? `FetchError`}: ${e?.message}`;
          t += `

Caused by: ${i?.name ?? `Error`}: ${n}`;
          if (r) {
            t += ` (${r})`;
          }
          if (i?.stack) {
            t += `
${i.stack}`;
          }
        } else {
          t = e?.stack ?? ``;
        }
        let length = this.url.toString().length;
        if (e?.name === `AbortError` || e?.code === `ABORT_ERR`) {
          code = ``;
          hint = `Request was aborted (timeout or manual cancellation)`;
          if (length > this.urlLengthLimit) {
            hint += `. Note: Your request URL is ${length} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
          }
        } else if (i?.name === `HeadersOverflowError` || i?.code === `UND_ERR_HEADERS_OVERFLOW`) {
          code = ``;
          hint = `HTTP headers exceeded server limits (typically 16KB)`;
          if (length > this.urlLengthLimit) {
            hint += `. Your request URL is ${length} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
          }
        }
        return {
          success: false,
          error: {
            message: `${e?.name ?? `FetchError`}: ${e?.message}`,
            details: t,
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
    return i.then(e, t);
  }
  async processResponse(e) {
    const t = this;
    let n = null;
    let r = null;
    let count = null;
    let e_status = e.status;
    let e_statusText = e.statusText;
    if (e.ok) {
      if (t.method !== `HEAD`) {
        let i = await e.text();
        if (i !== ``) {
          if (t.headers.get(`Accept`) === `text/csv`) {
            r = i;
          } else if (t.headers.get(`Accept`) && t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`)) {
            r = i;
          } else {
            try {
              r = JSON.parse(i);
            } catch {
              n = {
                message: i
              };
              r = null;
              if (t.shouldThrowOnError) {
                throw new d({
                  message: i,
                  details: ``,
                  hint: ``,
                  code: ``
                });
              }
            }
          }
        }
      }
      let s = t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/);
      let c = e.headers.get(`content-range`)?.split(`/`);
      if (s && c && c.length > 1) {
        count = parseInt(c[1]);
      }
      if (t.isMaybeSingle && Array.isArray(r)) {
        if (r.length > 1) {
          n = {
            code: `PGRST116`,
            details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: `JSON object requested, multiple (or no) rows returned`
          };
          r = null;
          count = null;
          e_status = 406;
          e_statusText = `Not Acceptable`;
          if (t.shouldThrowOnError) {
            throw new d({
              ...n,
              hint: n.hint ?? ``
            });
          }
        } else {
          r = r.length === 1 ? r[0] : null;
        }
      }
    } else {
      let i = await e.text();
      try {
        n = JSON.parse(i);
        if (Array.isArray(n) && e.status === 404) {
          r = [];
          n = null;
          e_status = 200;
          e_statusText = `OK`;
        }
      } catch {
        if (e.status === 404 && i === ``) {
          e_status = 204;
          e_statusText = `No Content`;
        } else {
          n = {
            message: i
          };
        }
      }
      if (n && t.shouldThrowOnError) {
        throw new d(n);
      }
    }
    return {
      success: n === null,
      error: n,
      data: r,
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
}
class se extends oe {
  throwOnError() {
    return super.throwOnError();
  }
  select(e) {
    let t = false;
    let n = (e ?? `*`).split(``).map(e => {
      if (/\s/.test(e) && !t) {
        return ``;
      }
      if (e === `"`) {
        t = !t;
      }
      return e;
    }).join(``);
    this.url.searchParams.set(`select`, n);
    this.headers.append(`Prefer`, `return=representation`);
    return this;
  }
  order(e, {
    ascending = true,
    nullsFirst,
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let a = referencedTable ? `${referencedTable}.order` : `order`;
    let o = this.url.searchParams.get(a);
    this.url.searchParams.set(a, `${o ? `${o},` : ``}${e}.${ascending ? `asc` : `desc`}${nullsFirst === undefined ? `` : nullsFirst ? `.nullsfirst` : `.nullslast`}`);
    return this;
  }
  limit(e, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let r = referencedTable === undefined ? `limit` : `${referencedTable}.limit`;
    this.url.searchParams.set(r, `${e}`);
    return this;
  }
  range(e, t, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let i = referencedTable === undefined ? `offset` : `${referencedTable}.offset`;
    let a = referencedTable === undefined ? `limit` : `${referencedTable}.limit`;
    this.url.searchParams.set(i, `${e}`);
    this.url.searchParams.set(a, `${t - e + 1}`);
    return this;
  }
  abortSignal(e) {
    this.signal = e;
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
    let o = [analyze ? `analyze` : null, verbose ? `verbose` : null, settings ? `settings` : null, buffers ? `buffers` : null, wal ? `wal` : null].filter(Boolean).join(`|`);
    let s = this.headers.get(`Accept`) ?? `application/json`;
    this.headers.set(`Accept`, `application/vnd.pgrst.plan+${format}; for="${s}"; options=${o};`);
    return this;
  }
  rollback() {
    this.headers.append(`Prefer`, `tx=rollback`);
    return this;
  }
  returns() {
    return this;
  }
  maxAffected(e) {
    this.headers.append(`Prefer`, `handling=strict`);
    this.headers.append(`Prefer`, `max-affected=${e}`);
    return this;
  }
}
const ce = RegExp(`[,()]`);
class y extends se {
  throwOnError() {
    return super.throwOnError();
  }
  eq(e, t) {
    this.url.searchParams.append(e, `eq.${t}`);
    return this;
  }
  neq(e, t) {
    this.url.searchParams.append(e, `neq.${t}`);
    return this;
  }
  gt(e, t) {
    this.url.searchParams.append(e, `gt.${t}`);
    return this;
  }
  gte(e, t) {
    this.url.searchParams.append(e, `gte.${t}`);
    return this;
  }
  lt(e, t) {
    this.url.searchParams.append(e, `lt.${t}`);
    return this;
  }
  lte(e, t) {
    this.url.searchParams.append(e, `lte.${t}`);
    return this;
  }
  like(e, t) {
    this.url.searchParams.append(e, `like.${t}`);
    return this;
  }
  likeAllOf(e, t) {
    this.url.searchParams.append(e, `like(all).{${t.join(`,`)}}`);
    return this;
  }
  likeAnyOf(e, t) {
    this.url.searchParams.append(e, `like(any).{${t.join(`,`)}}`);
    return this;
  }
  ilike(e, t) {
    this.url.searchParams.append(e, `ilike.${t}`);
    return this;
  }
  ilikeAllOf(e, t) {
    this.url.searchParams.append(e, `ilike(all).{${t.join(`,`)}}`);
    return this;
  }
  ilikeAnyOf(e, t) {
    this.url.searchParams.append(e, `ilike(any).{${t.join(`,`)}}`);
    return this;
  }
  regexMatch(e, t) {
    this.url.searchParams.append(e, `match.${t}`);
    return this;
  }
  regexIMatch(e, t) {
    this.url.searchParams.append(e, `imatch.${t}`);
    return this;
  }
  is(e, t) {
    this.url.searchParams.append(e, `is.${t}`);
    return this;
  }
  isDistinct(e, t) {
    this.url.searchParams.append(e, `isdistinct.${t}`);
    return this;
  }
  in(e, t) {
    let n = Array.from(new Set(t)).map(e => {
      if (typeof e == `string` && ce.test(e)) {
        return `"${e}"`;
      }
      return `${e}`;
    }).join(`,`);
    this.url.searchParams.append(e, `in.(${n})`);
    return this;
  }
  notIn(e, t) {
    let n = Array.from(new Set(t)).map(e => {
      if (typeof e == `string` && ce.test(e)) {
        return `"${e}"`;
      }
      return `${e}`;
    }).join(`,`);
    this.url.searchParams.append(e, `not.in.(${n})`);
    return this;
  }
  contains(e, t) {
    if (typeof t == `string`) {
      this.url.searchParams.append(e, `cs.${t}`);
    } else if (Array.isArray(t)) {
      this.url.searchParams.append(e, `cs.{${t.join(`,`)}}`);
    } else {
      this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`);
    }
    return this;
  }
  containedBy(e, t) {
    if (typeof t == `string`) {
      this.url.searchParams.append(e, `cd.${t}`);
    } else if (Array.isArray(t)) {
      this.url.searchParams.append(e, `cd.{${t.join(`,`)}}`);
    } else {
      this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`);
    }
    return this;
  }
  rangeGt(e, t) {
    this.url.searchParams.append(e, `sr.${t}`);
    return this;
  }
  rangeGte(e, t) {
    this.url.searchParams.append(e, `nxl.${t}`);
    return this;
  }
  rangeLt(e, t) {
    this.url.searchParams.append(e, `sl.${t}`);
    return this;
  }
  rangeLte(e, t) {
    this.url.searchParams.append(e, `nxr.${t}`);
    return this;
  }
  rangeAdjacent(e, t) {
    this.url.searchParams.append(e, `adj.${t}`);
    return this;
  }
  overlaps(e, t) {
    if (typeof t == `string`) {
      this.url.searchParams.append(e, `ov.${t}`);
    } else {
      this.url.searchParams.append(e, `ov.{${t.join(`,`)}}`);
    }
    return this;
  }
  textSearch(e, t, {
    config,
    type
  } = {}) {
    let i = ``;
    if (type === `plain`) {
      i = `pl`;
    } else if (type === `phrase`) {
      i = `ph`;
    } else if (type === `websearch`) {
      i = `w`;
    }
    let a = config === undefined ? `` : `(${config})`;
    this.url.searchParams.append(e, `${i}fts${a}.${t}`);
    return this;
  }
  match(e) {
    Object.entries(e).filter(([e, t]) => t !== undefined).forEach(([e, t]) => {
      this.url.searchParams.append(e, `eq.${t}`);
    });
    return this;
  }
  not(e, t, n) {
    this.url.searchParams.append(e, `not.${t}.${n}`);
    return this;
  }
  or(e, {
    foreignTable,
    referencedTable = foreignTable
  } = {}) {
    let r = referencedTable ? `${referencedTable}.or` : `or`;
    this.url.searchParams.append(r, `(${e})`);
    return this;
  }
  filter(e, t, n) {
    this.url.searchParams.append(e, `${t}.${n}`);
    return this;
  }
}
class le {
  constructor(e, {
    headers = {},
    schema,
    fetch,
    urlLengthLimit = 8000,
    retry
  }) {
    this.url = e;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch;
    this.urlLengthLimit = urlLengthLimit;
    this.retry = retry;
  }
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  select(e, t) {
    let {
      head = false,
      count
    } = t ?? {};
    let i = head ? `HEAD` : `GET`;
    let a = false;
    let o = (e ?? `*`).split(``).map(e => {
      if (/\s/.test(e) && !a) {
        return ``;
      }
      if (e === `"`) {
        a = !a;
      }
      return e;
    }).join(``);
    let {
      url,
      headers
    } = this.cloneRequestState();
    url.searchParams.set(`select`, o);
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: i,
      url,
      headers,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  insert(e, {
    count,
    defaultToNull = true
  } = {}) {
    let {
      url,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append(`Prefer`, `missing=default`);
    }
    if (Array.isArray(e)) {
      let t = e.reduce((acc, item) => acc.concat(Object.keys(item)), []);
      if (t.length > 0) {
        let e = [...new Set(t)].map(e => `"${e}"`);
        url.searchParams.set(`columns`, e.join(`,`));
      }
    }
    return new y({
      method: `POST`,
      url,
      headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  upsert(e, {
    onConflict,
    ignoreDuplicates = false,
    count,
    defaultToNull = true
  } = {}) {
    let {
      url,
      headers
    } = this.cloneRequestState();
    headers.append(`Prefer`, `resolution=${ignoreDuplicates ? `ignore` : `merge`}-duplicates`);
    if (onConflict !== undefined) {
      url.searchParams.set(`on_conflict`, onConflict);
    }
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    if (!defaultToNull) {
      headers.append(`Prefer`, `missing=default`);
    }
    if (Array.isArray(e)) {
      let t = e.reduce((acc, item) => acc.concat(Object.keys(item)), []);
      if (t.length > 0) {
        let e = [...new Set(t)].map(e => `"${e}"`);
        url.searchParams.set(`columns`, e.join(`,`));
      }
    }
    return new y({
      method: `POST`,
      url,
      headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  update(e, {
    count
  } = {}) {
    let {
      url,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: `PATCH`,
      url,
      headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  delete({
    count
  } = {}) {
    let {
      url,
      headers
    } = this.cloneRequestState();
    if (count) {
      headers.append(`Prefer`, `count=${count}`);
    }
    return new y({
      method: `DELETE`,
      url,
      headers,
      schema: this.schema,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
}
function ue(e, statusText) {
  try {
    let t = JSON.parse(e);
    if (t && typeof t == `object` && !Array.isArray(t)) {
      return new d({
        message: String(t.message ?? e),
        details: t.details ?? ``,
        hint: t.hint ?? ``,
        code: t.code ?? ``
      });
    }
  } catch {}
  return new d({
    message: e || statusText,
    details: ``,
    hint: ``,
    code: ``
  });
}
function de(error, t, statusText) {
  let r = error;
  return {
    success: false,
    error: new d({
      message: `${r?.name ?? `FetchError`}: ${r?.message}`,
      details: ``,
      hint: ``,
      code: ``
    }),
    data: null,
    count: null,
    status: t,
    statusText
  };
}
const fe = class e {
  constructor(e, {
    headers = {},
    schema,
    fetch,
    timeout,
    urlLengthLimit = 8000,
    retry
  } = {}) {
    this.url = e;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.urlLengthLimit = urlLengthLimit;
    let s = fetch ?? globalThis.fetch;
    this.fetch = timeout !== undefined && timeout > 0 ? (e, t) => {
      let n = new AbortController();
      let r = setTimeout(() => n.abort(), timeout);
      let a = t?.signal;
      if (a) {
        if (a.aborted) {
          clearTimeout(r);
          return s(e, t);
        }
        let i = () => {
          clearTimeout(r);
          n.abort();
        };
        a.addEventListener(`abort`, i, {
          once: true
        });
        return s(e, {
          ...t,
          signal: n.signal
        }).finally(() => {
          clearTimeout(r);
          a.removeEventListener(`abort`, i);
        });
      }
      return s(e, {
        ...t,
        signal: n.signal
      }).finally(() => clearTimeout(r));
    } : s;
    this.retry = retry;
  }
  from(e) {
    if (!e || typeof e != `string` || e.trim() === ``) {
      throw Error(`Invalid relation name: relation must be a non-empty string.`);
    }
    return new le(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  schema(schema) {
    return new e(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  async getOpenApiSpec() {
    const e = this;
    let t = new Headers(e.headers);
    t.set(`Accept`, `application/openapi+json`);
    if (e.schemaName) {
      t.set(`Accept-Profile`, e.schemaName);
    }
    let n = {};
    t.forEach((e, t) => {
      n[t] = e;
    });
    let r = e.fetch ?? globalThis.fetch;
    let i;
    try {
      i = await ae(r, `${e.url}/`, {
        method: `GET`,
        headers: n
      }, e.retry ?? true);
    } catch (error) {
      return de(error, 0, ``);
    }
    let a;
    try {
      a = await i.text();
    } catch (error) {
      return de(error, i.status, i.statusText);
    }
    if (i.ok) {
      try {
        return {
          success: true,
          error: null,
          data: JSON.parse(a),
          count: null,
          status: i.status,
          statusText: i.statusText
        };
      } catch {}
    }
    return {
      success: false,
      error: ue(a, i.statusText),
      data: null,
      count: null,
      status: i.status,
      statusText: i.statusText
    };
  }
  rpc(e, t = {}, {
    head = false,
    get = false,
    count
  } = {}) {
    let a;
    let url_1 = new URL(`${this.url}/rpc/${e}`);
    let s;
    let c = e => typeof e == `object` && !!e && (!Array.isArray(e) || e.some(c));
    let l = head && Object.values(t).some(c);
    if (l) {
      a = `POST`;
      s = t;
    } else if (head || get) {
      a = head ? `HEAD` : `GET`;
      Object.entries(t).filter(([e, t]) => t !== undefined).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(`,`)}}` : `${t}`]).forEach(([e, t]) => {
        url_1.searchParams.append(e, t);
      });
    } else {
      a = `POST`;
      s = t;
    }
    let u = new Headers(this.headers);
    if (l) {
      u.set(`Prefer`, count ? `count=${count},return=minimal` : `return=minimal`);
    } else if (count) {
      u.set(`Prefer`, `count=${count}`);
    }
    return new y({
      method: a,
      url: url_1,
      headers: u,
      schema: this.schemaName,
      body: s,
      fetch: this.fetch ?? fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class pe {
  constructor() {}
  static detectEnvironment() {
    if (typeof WebSocket < `u`) {
      return {
        type: `native`,
        wsConstructor: WebSocket
      };
    }
    let e = globalThis;
    if (typeof globalThis < `u` && e.WebSocket !== undefined) {
      return {
        type: `native`,
        wsConstructor: e.WebSocket
      };
    }
    let t = typeof global < `u` ? global : undefined;
    if (t && t.WebSocket !== undefined) {
      return {
        type: `native`,
        wsConstructor: t.WebSocket
      };
    }
    if (typeof globalThis < `u` && e.WebSocketPair !== undefined && globalThis.WebSocket === undefined) {
      return {
        type: `cloudflare`,
        error: `Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,
        workaround: `Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`
      };
    }
    if (typeof globalThis < `u` && e.EdgeRuntime || typeof navigator < `u` && navigator.userAgent?.includes(`Vercel-Edge`)) {
      return {
        type: `unsupported`,
        error: `Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,
        workaround: `Use serverless functions or a different deployment target for WebSocket functionality.`
      };
    }
    let globalThis_process = globalThis.process;
    if (globalThis_process) {
      let e = globalThis_process.versions;
      if (e && e.node) {
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
    let e = this.detectEnvironment();
    if (e.wsConstructor) {
      return e.wsConstructor;
    }
    let t = e.error || `WebSocket not supported in this environment.`;
    if (e.workaround) {
      t += `

Suggested solution: ${e.workaround}`;
    }
    throw Error(t);
  }
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === `native`;
    } catch {
      return false;
    }
  }
}
const version = `realtime-js/2.117.2`;
const he = `1.0.0`;
const ge = `2.0.0`;
const _e = ge;
const ve = 10000;
const ye = 15000;
const be = 10000;
const b = {
  closed: `closed`,
  errored: `errored`,
  joined: `joined`,
  joining: `joining`,
  leaving: `leaving`
};
const xe = {
  close: `phx_close`,
  error: `phx_error`,
  join: `phx_join`,
  reply: `phx_reply`,
  leave: `phx_leave`,
  access_token: `access_token`
};
const Se = {
  connecting: `connecting`,
  open: `open`,
  closing: `closing`,
  closed: `closed`
};
class Ce {
  constructor(e) {
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
    this.allowedMetadataKeys = e ?? [];
  }
  encode(e, t) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == `string`) {
      return t(this._binaryEncodeUserBroadcastPush(e));
    }
    let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(e) {
    if (this._isArrayBuffer(e.payload?.payload)) {
      return this._encodeBinaryUserBroadcastPush(e);
    }
    return this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    let t = e.payload?.payload ?? new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, t);
  }
  _encodeJsonUserBroadcastPush(e) {
    let t = e.payload?.payload ?? {};
    let buffer = new TextEncoder().encode(JSON.stringify(t)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, buffer);
  }
  _encodeUserBroadcastPush(e, t, n) {
    let r = new TextEncoder();
    let i = r.encode(e.topic);
    let a = r.encode(e.ref ?? ``);
    let o = r.encode(e.join_ref ?? ``);
    let s = r.encode(e.payload.event);
    let c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {};
    let l = r.encode(Object.keys(c).length === 0 ? `` : JSON.stringify(c));
    if (o.length > 255) {
      throw Error(`joinRef length ${o.length} exceeds maximum of 255`);
    }
    if (a.length > 255) {
      throw Error(`ref length ${a.length} exceeds maximum of 255`);
    }
    if (i.length > 255) {
      throw Error(`topic length ${i.length} exceeds maximum of 255`);
    }
    if (s.length > 255) {
      throw Error(`userEvent length ${s.length} exceeds maximum of 255`);
    }
    if (l.length > 255) {
      throw Error(`metadata length ${l.length} exceeds maximum of 255`);
    }
    let u = this.USER_BROADCAST_PUSH_META_LENGTH + o.length + a.length + i.length + s.length + l.length;
    let d = new ArrayBuffer(this.HEADER_LENGTH + u);
    let f = new DataView(d);
    let p = new Uint8Array(d);
    let m = 0;
    f.setUint8(m++, this.KINDS.userBroadcastPush);
    f.setUint8(m++, o.length);
    f.setUint8(m++, a.length);
    f.setUint8(m++, i.length);
    f.setUint8(m++, s.length);
    f.setUint8(m++, l.length);
    f.setUint8(m++, t);
    p.set(o, m);
    m += o.length;
    p.set(a, m);
    m += a.length;
    p.set(i, m);
    m += i.length;
    p.set(s, m);
    m += s.length;
    p.set(l, m);
    m += l.length;
    const h = new Uint8Array(d.byteLength + n.byteLength);
    h.set(new Uint8Array(d), 0);
    h.set(new Uint8Array(n), d.byteLength);
    return h.buffer;
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      return t(this._binaryDecode(e));
    }
    if (typeof e == `string`) {
      let [n, r, i, a, o] = JSON.parse(e);
      return t({
        join_ref: n,
        ref: r,
        topic: i,
        event: a,
        payload: o
      });
    }
    return t({});
  }
  _binaryDecode(e) {
    let t = new DataView(e);
    let n = t.getUint8(0);
    let r = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, t, r);
    }
  }
  _decodeUserBroadcast(e, t, n) {
    let r = t.getUint8(1);
    let i = t.getUint8(2);
    let a = t.getUint8(3);
    let o = t.getUint8(4);
    let s = this.HEADER_LENGTH + 4;
    let c = n.decode(e.slice(s, s + r));
    s += r;
    let l = n.decode(e.slice(s, s + i));
    s += i;
    let u = n.decode(e.slice(s, s + a));
    s += a;
    let d = e.slice(s, e.byteLength);
    let f = o === this.JSON_ENCODING ? JSON.parse(n.decode(d)) : d;
    let p = {
      type: this.BROADCAST_EVENT,
      event: l,
      payload: f
    };
    if (a > 0) {
      p.meta = JSON.parse(u);
    }
    return {
      join_ref: null,
      ref: null,
      topic: c,
      event: this.BROADCAST_EVENT,
      payload: p
    };
  }
  _isArrayBuffer(e) {
    return e instanceof ArrayBuffer || e?.constructor?.name === `ArrayBuffer`;
  }
  _pick(e, t) {
    if (!e || typeof e != `object`) {
      return {};
    }
    return Object.fromEntries(Object.entries(e).filter(([e]) => t.includes(e)));
  }
}
let x;
(e => {
  e.abstime = `abstime`;
  e.bool = `bool`;
  e.date = `date`;
  e.daterange = `daterange`;
  e.float4 = `float4`;
  e.float8 = `float8`;
  e.int2 = `int2`;
  e.int4 = `int4`;
  e.int4range = `int4range`;
  e.int8 = `int8`;
  e.int8range = `int8range`;
  e.json = `json`;
  e.jsonb = `jsonb`;
  e.money = `money`;
  e.numeric = `numeric`;
  e.oid = `oid`;
  e.reltime = `reltime`;
  e.text = `text`;
  e.time = `time`;
  e.timestamp = `timestamp`;
  e.timestamptz = `timestamptz`;
  e.timetz = `timetz`;
  e.tsrange = `tsrange`;
  e.tstzrange = `tstzrange`;
})(x ||= {});
const we = (columns, t, n = {}) => {
  let r = n.skipTypes ?? [];
  if (t) {
    return Object.keys(t).reduce((acc, key) => {
      acc[key] = Te(key, columns, t, r);
      return acc;
    }, {});
  }
  return {};
};
var Te = (key, columns, n, r) => {
  let i = columns.find(t => t.name === key)?.type;
  let a = n[key];
  if (i && !r.includes(i)) {
    return Ee(i, a);
  }
  return De(a);
};
var Ee = (e, t) => {
  if (e.charAt(0) === `_`) {
    return je(t, e.slice(1, e.length));
  }
  switch (e) {
    case x.bool:
      return Oe(t);
    case x.float4:
    case x.float8:
    case x.int2:
    case x.int4:
    case x.int8:
    case x.numeric:
    case x.oid:
      return ke(t);
    case x.json:
    case x.jsonb:
      return Ae(t);
    case x.timestamp:
      return Me(t);
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
      return De(t);
    default:
      return De(t);
  }
};
var De = e => e;
var Oe = e => {
  switch (e) {
    case `t`:
      return true;
    case `f`:
      return false;
    default:
      return e;
  }
};
var ke = e => {
  if (typeof e == `string`) {
    let t = parseFloat(e);
    if (!Number.isNaN(t)) {
      return t;
    }
  }
  return e;
};
var Ae = e => {
  if (typeof e == `string`) {
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  return e;
};
var je = (e, t) => {
  if (typeof e != `string`) {
    return e;
  }
  let n = e.length - 1;
  let r = e[n];
  if (e[0] === `{` && r === `}`) {
    let r;
    let i = e.slice(1, n);
    try {
      r = JSON.parse(`[` + i + `]`);
    } catch {
      r = i ? i.split(`,`) : [];
    }
    return r.map(e => Ee(t, e));
  }
  return e;
};
var Me = e => {
  if (typeof e == `string`) {
    return e.replace(` `, `T`);
  }
  return e;
};
const Ne = e => {
  let t = new URL(e);
  t.protocol = t.protocol.replace(/^ws/i, `http`);
  t.pathname = t.pathname.replace(/\/+$/, ``).replace(/\/socket\/websocket$/i, ``).replace(/\/socket$/i, ``).replace(/\/websocket$/i, ``);
  if (t.pathname === `` || t.pathname === `/`) {
    t.pathname = `/api/broadcast`;
  } else {
    t.pathname += `/api/broadcast`;
  }
  return t.href;
};
const Pe = e => {
  if (typeof e == `function`) {
    return e;
  }
  return function () {
    return e;
  };
};
const Fe = typeof self < `u` ? self : null;
const Ie = typeof window < `u` ? window : null;
const S = Fe || Ie || globalThis;
const Le = `2.0.0`;
const Re = 10000;
const ze = 1000;
const Be = 100;
const C = {
  connecting: 0,
  open: 1,
  closing: 2,
  closed: 3
};
const w = {
  closed: `closed`,
  errored: `errored`,
  joined: `joined`,
  joining: `joining`,
  leaving: `leaving`
};
const T = {
  close: `phx_close`,
  error: `phx_error`,
  join: `phx_join`,
  reply: `phx_reply`,
  leave: `phx_leave`
};
const Ve = {
  longpoll: `longpoll`,
  websocket: `websocket`
};
const He = {
  complete: 4
};
const Ue = `base64url.bearer.phx.`;
class We {
  constructor(e, t, n, r) {
    this.channel = e;
    this.event = t;
    this.payload = n || function () {
      return {};
    };
    this.receivedResp = null;
    this.timeout = r;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
    this.ref = undefined;
  }
  resend(e) {
    this.timeout = e;
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
  receive(e, t) {
    if (this.hasReceived(e)) {
      t(this.receivedResp.response);
    }
    this.recHooks.push({
      status: e,
      callback: t
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
    this.recHooks.filter(t => t.status === status).forEach(e => e.callback(response));
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
    this.channel.on(this.refEvent, e => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = e;
      this.matchReceive(e);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger(`timeout`, {});
    }, this.timeout);
  }
  hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
  trigger(e, response) {
    this.channel.trigger(this.refEvent, {
      status: e,
      response
    });
  }
}
class Ge {
  constructor(e, t) {
    this.callback = e;
    this.timerCalc = t;
    this.timer = undefined;
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
}
class Ke {
  constructor(e, t, n) {
    this.state = w.closed;
    this.topic = e;
    this.params = Pe(t || {});
    this.socket = n;
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
      this.pushBuffer.forEach(e => e.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive(`error`, e => {
      this.state = w.errored;
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `error ${this.topic}`, e);
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
    this.onError(e => {
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `error ${this.topic}`, e);
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
    this.on(T.reply, (e, t) => {
      this.trigger(this.replyEventName(t), e);
    });
  }
  join(e = this.timeout) {
    if (this.joinedOnce) {
      throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);
    }
    this.timeout = e;
    this.joinedOnce = true;
    this.rejoin();
    return this.joinPush;
  }
  teardown() {
    this.pushBuffer.forEach(e => e.destroy());
    this.pushBuffer = [];
    this.rejoinTimer.reset();
    this.joinPush.destroy();
    this.state = w.closed;
    this.bindings = [];
  }
  onClose(e) {
    this.on(T.close, e);
  }
  onError(e) {
    return this.on(T.error, t => e(t));
  }
  on(e, t) {
    let n = this.bindingRef++;
    this.bindings.push({
      event: e,
      ref: n,
      callback: t
    });
    return n;
  }
  off(e, t) {
    this.bindings = this.bindings.filter(n => n.event !== e || t !== undefined && t !== n.ref);
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(e, t, n = this.timeout) {
    t ||= {};
    if (!this.joinedOnce) {
      throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let r = new We(this, e, function () {
      return t;
    }, n);
    if (this.canPush()) {
      r.send();
    } else {
      r.startTimeout();
      this.pushBuffer.push(r);
    }
    return r;
  }
  leave(e = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = w.leaving;
    let t = () => {
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, `leave ${this.topic}`);
      }
      this.trigger(T.close, `leave`);
    };
    let n = new We(this, T.leave, Pe({}), e);
    n.receive(`ok`, () => t()).receive(`timeout`, () => t());
    n.send();
    if (!this.canPush()) {
      n.trigger(`ok`, {});
    }
    return n;
  }
  onMessage(e, t, n) {
    return t;
  }
  filterBindings(e, t, n) {
    return true;
  }
  isMember(e, t, n, joinRef) {
    if (this.topic === e) {
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger()) {
          this.socket.log(`channel`, `dropping outdated message`, {
            topic: e,
            event: t,
            payload: n,
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
  rejoin(e = this.timeout) {
    if (!this.isLeaving()) {
      this.socket.leaveOpenTopic(this.topic);
      this.state = w.joining;
      this.joinPush.resend(e);
    }
  }
  trigger(e, t, n, r) {
    let i = this.onMessage(e, t, n, r);
    if (t && !i) {
      throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);
    }
    let a = this.bindings.filter(r => r.event === e && this.filterBindings(r, t, n));
    for (let e = 0; e < a.length; e++) {
      a[e].callback(i, n, r || this.joinRef());
    }
  }
  replyEventName(e) {
    return `chan_reply_${e}`;
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
}
class qe {
  static request(e, t, n, r, i, a, o) {
    if (S.XDomainRequest) {
      let n = new S.XDomainRequest();
      return this.xdomainRequest(n, e, t, r, i, a, o);
    }
    if (S.XMLHttpRequest) {
      let s = new S.XMLHttpRequest();
      return this.xhrRequest(s, e, t, n, r, i, a, o);
    }
    if (S.fetch && S.AbortController) {
      return this.fetchRequest(e, t, n, r, i, a, o);
    }
    throw Error(`No suitable XMLHttpRequest implementation found`);
  }
  static fetchRequest(e, t, n, r, i, a, o) {
    let s = {
      method: e,
      headers: n,
      body: r
    };
    let c = null;
    if (i) {
      c = new AbortController();
      setTimeout(() => c.abort(), i);
      s.signal = c.signal;
    }
    S.fetch(t, s).then(e => e.text()).then(e => this.parseJSON(e)).then(e => o && o(e)).catch(e => {
      if (e.name === `AbortError` && a) {
        a();
      } else if (o) {
        o(null);
      }
    });
    return c;
  }
  static xdomainRequest(e, t, n, r, i, a, o) {
    e.timeout = i;
    e.open(t, n);
    e.onload = () => {
      let t = this.parseJSON(e.responseText);
      if (o) {
        o(t);
      }
    };
    if (a) {
      e.ontimeout = a;
    }
    e.onprogress = () => {};
    e.send(r);
    return e;
  }
  static xhrRequest(e, t, n, r, i, a, o, s) {
    e.open(t, n, true);
    e.timeout = a;
    for (let [t, n] of Object.entries(r)) {
      e.setRequestHeader(t, n);
    }
    e.onerror = () => s && s(null);
    e.onreadystatechange = () => {
      if (e.readyState === He.complete && s) {
        s(this.parseJSON(e.responseText));
      }
    };
    if (o) {
      e.ontimeout = o;
    }
    e.send(i);
    return e;
  }
  static parseJSON(e) {
    if (!e || e === ``) {
      return null;
    }
    try {
      return JSON.parse(e);
    } catch {
      if (console) {
        console.log(`failed to parse JSON response`, e);
      }
      return null;
    }
  }
  static serialize(e, t) {
    let n = [];
    for (const r in e) {
      if (!Object.prototype.hasOwnProperty.call(e, r)) {
        continue;
      }
      let i = t ? `${t}[${r}]` : r;
      let a = e[r];
      if (typeof a == `object`) {
        n.push(this.serialize(a, i));
      } else {
        n.push(encodeURIComponent(i) + `=` + encodeURIComponent(a));
      }
    }
    return n.join(`&`);
  }
  static appendParams(e, t) {
    if (Object.keys(t).length === 0) {
      return e;
    }
    return `${e}${e.match(/\?/) ? `&` : `?`}${this.serialize(t)}`;
  }
}
const Je = e => {
  let t = ``;
  let n = new Uint8Array(e);
  let n_byteLength = n.byteLength;
  for (let e = 0; e < n_byteLength; e++) {
    t += String.fromCharCode(n[e]);
  }
  return btoa(t);
};
class E {
  constructor(e, t) {
    if (t && t.length === 2 && t[1].startsWith(Ue)) {
      this.authToken = atob(t[1].slice(Ue.length));
    }
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function () {};
    this.onerror = function () {};
    this.onmessage = function () {};
    this.onclose = function () {};
    this.pollEndpoint = this.normalizeEndpoint(e);
    this.readyState = C.connecting;
    setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(e) {
    return e.replace(`ws://`, `http://`).replace(`wss://`, `https://`).replace(RegExp(`(.*)/` + Ve.websocket), `$1/` + Ve.longpoll);
  }
  endpointURL() {
    return qe.appendParams(this.pollEndpoint, {
      token: this.token
    });
  }
  closeAndRetry(e, t, n) {
    this.close(e, t, n);
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
    let e = {
      Accept: `application/json`
    };
    if (this.authToken) {
      e[`X-Phoenix-AuthToken`] = this.authToken;
    }
    this.ajax(`GET`, e, null, () => this.ontimeout(), e => {
      if (e) {
        var {
          status,
          token,
          messages
        } = e;
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
          messages.forEach(e => {
            setTimeout(() => this.onmessage({
              data: e
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
  send(e) {
    if (typeof e != `string`) {
      e = Je(e);
    }
    if (this.currentBatch) {
      this.currentBatch.push(e);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(e);
    } else {
      this.currentBatch = [e];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(e, t = 0) {
    this.awaitingBatchAck = true;
    let n = t + Be;
    let r = e.slice(t, n);
    this.ajax(`POST`, {
      "Content-Type": `application/x-ndjson`
    }, r.join(`
`), () => this.onerror(`timeout`), t => {
      if (!t || t.status !== 200) {
        this.awaitingBatchAck = false;
        this.onerror(t && t.status);
        this.closeAndRetry(1011, `internal server error`, false);
      } else if (n < e.length) {
        this.batchSend(e, n);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      } else {
        this.awaitingBatchAck = false;
      }
    });
  }
  close(code, reason, wasClean) {
    for (let e of this.reqs) {
      e.abort();
    }
    this.readyState = C.closed;
    let r = {
      code: 1000,
      reason: undefined,
      wasClean: true,
      code,
      reason,
      wasClean
    };
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent < `u`) {
      this.onclose(new CloseEvent(`close`, r));
    } else {
      this.onclose(r);
    }
  }
  ajax(e, t, n, r, i) {
    let a;
    a = qe.request(e, this.endpointURL(), t, n, this.timeout, () => {
      this.reqs.delete(a);
      r();
    }, e => {
      this.reqs.delete(a);
      if (this.isActive()) {
        i(e);
      }
    });
    this.reqs.add(a);
  }
}
const Ye = class e {
  constructor(t, n = {}) {
    let r = n.events || {
      state: `presence_state`,
      diff: `presence_diff`
    };
    this.state = Object.create(null);
    this.pendingDiffs = [];
    this.channel = t;
    this.joinRef = null;
    this.caller = {
      onJoin: function () {},
      onLeave: function () {},
      onSync: function () {}
    };
    this.channel.on(r.state, t => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = e.syncState(this.state, t, onJoin, onLeave);
      this.pendingDiffs.forEach(t => {
        this.state = e.syncDiff(this.state, t, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(r.diff, t => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(t);
      } else {
        this.state = e.syncDiff(this.state, t, onJoin, onLeave);
        onSync();
      }
    });
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  list(t) {
    return e.list(this.state, t);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  static syncState(e, t, n, r) {
    let i = this.toNullProtoObj(this.clone(e));
    t = this.toNullProtoObj(t);
    let joins = Object.create(null);
    let leaves = Object.create(null);
    this.map(i, (e, n) => {
      if (!t[e]) {
        leaves[e] = n;
      }
    });
    this.map(t, (e, t) => {
      let n = i[e];
      if (n) {
        let r = t.metas.map(e => e.phx_ref);
        let i = n.metas.map(e => e.phx_ref);
        let s = t.metas.filter(e => i.indexOf(e.phx_ref) < 0);
        let c = n.metas.filter(e => r.indexOf(e.phx_ref) < 0);
        if (s.length > 0) {
          joins[e] = t;
          joins[e].metas = s;
        }
        if (c.length > 0) {
          leaves[e] = this.clone(n);
          leaves[e].metas = c;
        }
      } else {
        joins[e] = t;
      }
    });
    return this.syncDiff(i, {
      joins,
      leaves
    }, n, r);
  }
  static syncDiff(e, t, n, r) {
    e = this.toNullProtoObj(e);
    let {
      joins,
      leaves
    } = this.clone(t);
    n ||= function () {};
    r ||= function () {};
    this.map(joins, (t, r) => {
      let i = e[t];
      e[t] = this.clone(r);
      if (i) {
        let n = e[t].metas.map(e => e.phx_ref);
        let r = i.metas.filter(e => n.indexOf(e.phx_ref) < 0);
        e[t].metas.unshift(...r);
      }
      n(t, i, r);
    });
    this.map(leaves, (t, n) => {
      let i = e[t];
      if (!i) {
        return;
      }
      let a = n.metas.map(e => e.phx_ref);
      i.metas = i.metas.filter(e => a.indexOf(e.phx_ref) < 0);
      r(t, i, n);
      if (i.metas.length === 0) {
        delete e[t];
      }
    });
    return e;
  }
  static list(e, t) {
    t ||= function (e, t) {
      return t;
    };
    return this.map(e, (e, n) => t(e, n));
  }
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map(n => t(n, e[n]));
  }
  static toNullProtoObj(e) {
    if (Object.getPrototypeOf(e) === null) {
      return e;
    }
    let t = Object.create(null);
    Object.getOwnPropertyNames(e).forEach(n => {
      t[n] = e[n];
    });
    return t;
  }
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
};
const Xe = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: {
    push: 0,
    reply: 1,
    broadcast: 2
  },
  encode(e, t) {
    if (e.payload.constructor === ArrayBuffer) {
      return t(this.binaryEncode(e));
    }
    {
      let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
      return t(JSON.stringify(n));
    }
  },
  decode(e, t) {
    if (e.constructor === ArrayBuffer) {
      return t(this.binaryDecode(e));
    }
    {
      let [n, r, i, a, o] = JSON.parse(e);
      return t({
        join_ref: n,
        ref: r,
        topic: i,
        event: a,
        payload: o
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
    let o = new TextEncoder();
    let s = o.encode(join_ref);
    let c = o.encode(ref);
    let l = o.encode(topic);
    let u = o.encode(event);
    this.assertFieldSize(s.byteLength, `join_ref`);
    this.assertFieldSize(c.byteLength, `ref`);
    this.assertFieldSize(l.byteLength, `topic`);
    this.assertFieldSize(u.byteLength, `event`);
    let d = this.META_LENGTH + s.byteLength + c.byteLength + l.byteLength + u.byteLength;
    let f = new ArrayBuffer(this.HEADER_LENGTH + d);
    let p = new Uint8Array(f);
    let m = new DataView(f);
    let h = 0;
    m.setUint8(h++, this.KINDS.push);
    m.setUint8(h++, s.byteLength);
    m.setUint8(h++, c.byteLength);
    m.setUint8(h++, l.byteLength);
    m.setUint8(h++, u.byteLength);
    p.set(s, h);
    h += s.byteLength;
    p.set(c, h);
    h += c.byteLength;
    p.set(l, h);
    h += l.byteLength;
    p.set(u, h);
    h += u.byteLength;
    const g = new Uint8Array(f.byteLength + payload.byteLength);
    g.set(p, 0);
    g.set(new Uint8Array(payload), f.byteLength);
    return g.buffer;
  },
  assertFieldSize(e, t) {
    if (e > 255) {
      throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`);
    }
  },
  binaryDecode(e) {
    let t = new DataView(e);
    let n = t.getUint8(0);
    let r = new TextDecoder();
    switch (n) {
      case this.KINDS.push:
        return this.decodePush(e, t, r);
      case this.KINDS.reply:
        return this.decodeReply(e, t, r);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(e, t, r);
    }
  },
  decodePush(e, t, n) {
    let r = t.getUint8(1);
    let i = t.getUint8(2);
    let a = t.getUint8(3);
    let o = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let s = n.decode(e.slice(o, o + r));
    o += r;
    let c = n.decode(e.slice(o, o + i));
    o += i;
    let l = n.decode(e.slice(o, o + a));
    o += a;
    return {
      join_ref: s,
      ref: null,
      topic: c,
      event: l,
      payload: e.slice(o, e.byteLength)
    };
  },
  decodeReply(e, t, n) {
    let r = t.getUint8(1);
    let i = t.getUint8(2);
    let a = t.getUint8(3);
    let o = t.getUint8(4);
    let s = this.HEADER_LENGTH + this.META_LENGTH;
    let c = n.decode(e.slice(s, s + r));
    s += r;
    let l = n.decode(e.slice(s, s + i));
    s += i;
    let u = n.decode(e.slice(s, s + a));
    s += a;
    let d = n.decode(e.slice(s, s + o));
    s += o;
    let f = {
      status: d,
      response: e.slice(s, e.byteLength)
    };
    return {
      join_ref: c,
      ref: l,
      topic: u,
      event: T.reply,
      payload: f
    };
  },
  decodeBroadcast(e, t, n) {
    let r = t.getUint8(1);
    let i = t.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    let o = n.decode(e.slice(a, a + r));
    a += r;
    let s = n.decode(e.slice(a, a + i));
    a += i;
    return {
      join_ref: null,
      ref: null,
      topic: o,
      event: s,
      payload: e.slice(a, e.byteLength)
    };
  }
};
class Ze {
  constructor(e, t = {}) {
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
    this.timeout = t.timeout || Re;
    this.transport = t.transport || S.WebSocket || E;
    this.conn = undefined;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = t.longPollFallbackMs;
    this.fallbackTimer = null;
    let n = null;
    try {
      n = S && S.sessionStorage;
    } catch {}
    this.sessionStore = t.sessionStorage || n;
    this.establishedConnections = 0;
    this.defaultEncoder = Xe.encode.bind(Xe);
    this.defaultDecoder = Xe.decode.bind(Xe);
    this.closeWasClean = true;
    this.disconnecting = false;
    this.binaryType = t.binaryType || `arraybuffer`;
    this.connectClock = 1;
    this.pageHidden = false;
    this.encode = undefined;
    this.decode = undefined;
    if (this.transport === E) {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    } else {
      this.encode = t.encode || this.defaultEncoder;
      this.decode = t.decode || this.defaultDecoder;
    }
    let r = null;
    if (Ie && Ie.addEventListener) {
      Ie.addEventListener(`pagehide`, e => {
        if (this.conn) {
          this.disconnect();
          r = this.connectClock;
        }
      });
      Ie.addEventListener(`pageshow`, e => {
        if (r === this.connectClock) {
          r = null;
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
    this.heartbeatIntervalMs = t.heartbeatIntervalMs || 30000;
    this.autoSendHeartbeat = t.autoSendHeartbeat ?? true;
    this.heartbeatCallback = t.heartbeatCallback ?? (() => {});
    this.rejoinAfterMs = e => {
      if (t.rejoinAfterMs) {
        return t.rejoinAfterMs(e);
      }
      return [1000, 2000, 5000][e - 1] || 10000;
    };
    this.reconnectAfterMs = e => {
      if (t.reconnectAfterMs) {
        return t.reconnectAfterMs(e);
      }
      return [10, 50, 100, 150, 200, 250, 500, 1000, 2000][e - 1] || 5000;
    };
    this.logger = t.logger || null;
    if (!this.logger && t.debug) {
      this.logger = (e, t, n) => {
        console.log(`${e}: ${t}`, n);
      };
    }
    this.longpollerTimeout = t.longpollerTimeout || 20000;
    this.params = Pe(t.params || {});
    this.endPoint = `${e}/${Ve.websocket}`;
    this.vsn = t.vsn || Le;
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
        if (t.beforeReconnect) {
          await t.beforeReconnect();
        }
        this.connect();
      });
    }, this.reconnectAfterMs);
    this.authToken = t.authToken && Pe(t.authToken);
  }
  getLongPollTransport() {
    return E;
  }
  replaceTransport(e) {
    this.connectClock++;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.conn &&= (this.conn.close(), null);
    this.transport = e;
  }
  protocol() {
    if (location.protocol.match(/^https/)) {
      return `wss`;
    }
    return `ws`;
  }
  endPointURL() {
    let e = qe.appendParams(qe.appendParams(this.endPoint, this.params()), {
      vsn: this.vsn
    });
    if (e.charAt(0) === `/`) {
      if (e.charAt(1) === `/`) {
        return `${this.protocol()}:${e}`;
      }
      return `${this.protocol()}://${location.host}${e}`;
    }
    return e;
  }
  disconnect(e, t, n) {
    this.connectClock++;
    this.disconnecting = true;
    this.closeWasClean = true;
    clearTimeout(this.fallbackTimer);
    this.reconnectTimer.reset();
    this.teardown(() => {
      this.disconnecting = false;
      if (e) {
        e();
      }
    }, t, n);
  }
  connect(e) {
    if (e) {
      if (console) {
        console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`);
      }
      this.params = Pe(e);
    }
    if (!this.conn || this.disconnecting) {
      if (this.longPollFallbackMs && this.transport !== E) {
        this.connectWithFallback(E, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
  }
  log(e, t, n) {
    if (this.logger) {
      this.logger(e, t, n);
    }
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(e) {
    let t = this.makeRef();
    this.stateChangeCallbacks.open.push([t, e]);
    return t;
  }
  onClose(e) {
    let t = this.makeRef();
    this.stateChangeCallbacks.close.push([t, e]);
    return t;
  }
  onError(e) {
    let t = this.makeRef();
    this.stateChangeCallbacks.error.push([t, e]);
    return t;
  }
  onMessage(e) {
    let t = this.makeRef();
    this.stateChangeCallbacks.message.push([t, e]);
    return t;
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  ping(e) {
    if (!this.isConnected()) {
      return false;
    }
    let t = this.makeRef();
    let n = Date.now();
    this.push({
      topic: `phoenix`,
      event: `heartbeat`,
      payload: {},
      ref: t
    });
    let r = this.onMessage(i => {
      if (i.ref === t) {
        this.off([r]);
        e(Date.now() - n);
      }
    });
    return true;
  }
  transportName(e) {
    switch (e) {
      case E:
        return `LongPoll`;
      default:
        return e.name;
    }
  }
  transportConnect() {
    this.connectClock++;
    this.closeWasClean = false;
    let e;
    if (this.authToken) {
      e = [`phoenix`, `${Ue}${btoa(this.authToken()).replace(/=/g, ``)}`];
    }
    this.conn = new this.transport(this.endPointURL(), e);
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = e => this.onConnError(e);
    this.conn.onmessage = e => this.onConnMessage(e);
    this.conn.onclose = e => this.onConnClose(e);
  }
  getSession(e) {
    return this.sessionStore && this.sessionStore.getItem(e);
  }
  storeSession(e, t) {
    if (this.sessionStore) {
      this.sessionStore.setItem(e, t);
    }
  }
  connectWithFallback(e, t = 2500) {
    clearTimeout(this.fallbackTimer);
    let n = false;
    let r = true;
    let i;
    let a;
    let o = this.transportName(e);
    let s = t => {
      this.log(`transport`, `falling back to ${o}...`, t);
      this.off([i, a]);
      r = false;
      this.replaceTransport(e);
      this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${o}`)) {
      return s(`memorized`);
    }
    this.fallbackTimer = setTimeout(s, t);
    a = this.onError(e => {
      this.log(`transport`, `error`, e);
      if (r && !n) {
        clearTimeout(this.fallbackTimer);
        s(e);
      }
    });
    if (this.fallbackRef) {
      this.off([this.fallbackRef]);
    }
    this.fallbackRef = this.onOpen(() => {
      n = true;
      if (!r) {
        let t = this.transportName(e);
        if (!this.primaryPassedHealthCheck) {
          this.storeSession(`phx:fallback:${t}`, `true`);
        }
        return this.log(`transport`, `established ${t} fallback`);
      }
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = setTimeout(s, t);
      this.ping(e => {
        this.log(`transport`, `connected to primary after`, e);
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
  teardown(e, t, n) {
    if (!this.conn) {
      return e && e();
    }
    let conn = this.conn;
    this.waitForBufferDone(conn, () => {
      if (t) {
        conn.close(t, n || ``);
      } else {
        conn.close();
      }
      this.waitForSocketClosed(conn, () => {
        if (this.conn === conn) {
          this.conn.onopen = function () {};
          this.conn.onerror = function () {};
          this.conn.onmessage = function () {};
          this.conn.onclose = function () {};
          this.conn = null;
        }
        if (e) {
          e();
        }
      });
    });
  }
  waitForBufferDone(e, t, n = 1) {
    if (n === 5 || !e.bufferedAmount) {
      t();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(e, t, n + 1);
    }, 150 * n);
  }
  waitForSocketClosed(e, t, n = 1) {
    if (n === 5 || e.readyState === C.closed) {
      t();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(e, t, n + 1);
    }, 150 * n);
  }
  onConnClose(e) {
    if (this.conn) {
      this.conn.onclose = () => {};
    }
    if (this.hasLogger()) {
      this.log(`transport`, `close`, e);
    }
    this.triggerChanError(e);
    this.clearHeartbeats();
    if (!this.closeWasClean) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.triggerStateCallbacks(`close`, e);
  }
  onConnError(e) {
    if (this.hasLogger()) {
      this.log(`transport`, `error`, e);
    }
    let transport = this.transport;
    let establishedConnections = this.establishedConnections;
    this.triggerStateCallbacks(`error`, e, transport, establishedConnections);
    if (transport === this.transport || establishedConnections > 0) {
      this.triggerChanError(e);
    }
  }
  triggerChanError(e) {
    this.channels.forEach(t => {
      if (!(t.isErrored() || t.isLeaving() || t.isClosed())) {
        t.trigger(T.error, e);
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
  remove(e) {
    this.off(e.stateChangeRefs);
    this.channels = this.channels.filter(t => t !== e);
  }
  off(e) {
    for (let t in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([t]) => e.indexOf(t) === -1);
    }
  }
  channel(e, t = {}) {
    let n = new Ke(e, t, this);
    this.channels.push(n);
    return n;
  }
  push(e) {
    if (this.hasLogger()) {
      let {
        topic,
        event,
        payload,
        ref,
        join_ref
      } = e;
      this.log(`push`, `${topic} ${event} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(e, e => this.conn.send(e));
    } else {
      this.sendBuffer.push(() => this.encode(e, e => this.conn.send(e)));
    }
  }
  makeRef() {
    let e = this.ref + 1;
    this.ref = e === this.ref ? 0 : e;
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
      this.sendBuffer.forEach(e => e());
      this.sendBuffer = [];
    }
  }
  onConnMessage(e) {
    this.decode(e.data, e => {
      let {
        topic,
        event,
        payload,
        ref,
        join_ref
      } = e;
      if (ref && ref === this.pendingHeartbeatRef) {
        let e = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : undefined;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(payload.status === `ok` ? `ok` : `error`, e);
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
      for (let e = 0; e < this.channels.length; e++) {
        let channel = this.channels[e];
        if (channel.isMember(topic, event, payload, join_ref)) {
          channel.trigger(event, payload, ref, join_ref);
        }
      }
      this.triggerStateCallbacks(`message`, e);
    });
  }
  triggerStateCallbacks(e, ...t) {
    try {
      this.stateChangeCallbacks[e].forEach(([n, r]) => {
        try {
          r(...t);
        } catch (error) {
          this.log(`error`, `error in ${e} callback`, error);
        }
      });
    } catch (error) {
      this.log(`error`, `error triggering ${e} callbacks`, error);
    }
  }
  leaveOpenTopic(e) {
    let t = this.channels.find(t => t.topic === e && (t.isJoined() || t.isJoining()));
    if (t) {
      if (this.hasLogger()) {
        this.log(`transport`, `leaving duplicate topic "${e}"`);
      }
      t.leave();
    }
  }
}
const Qe = class e {
  constructor(t, n) {
    let r = tt(n);
    this.presence = new Ye(t.getChannel(), r);
    this.presence.onJoin((n, r, i) => {
      let a = e.onJoinPayload(n, r, i);
      t.getChannel().trigger(`presence`, a);
    });
    this.presence.onLeave((n, r, i) => {
      let a = e.onLeavePayload(n, r, i);
      t.getChannel().trigger(`presence`, a);
    });
    this.presence.onSync(() => {
      t.getChannel().trigger(`presence`, {
        event: `sync`
      });
    });
  }
  get state() {
    return e.transformState(this.presence.state);
  }
  static transformState(e) {
    e = et(e);
    return Object.getOwnPropertyNames(e).reduce((acc, key) => {
      let r = e[key];
      acc[key] = $e(r);
      return acc;
    }, {});
  }
  static onJoinPayload(e, t, n) {
    return {
      event: `join`,
      key: e,
      currentPresences: nt(t),
      newPresences: $e(n)
    };
  }
  static onLeavePayload(e, t, n) {
    return {
      event: `leave`,
      key: e,
      currentPresences: nt(t),
      leftPresences: $e(n)
    };
  }
};
function $e(e) {
  return e.metas.map(e => {
    let t = Object.getOwnPropertyDescriptors(e);
    let n = Object.defineProperties({}, t);
    n.presence_ref = n.phx_ref;
    delete n.phx_ref;
    delete n.phx_ref_prev;
    return n;
  });
}
function et(e) {
  return JSON.parse(JSON.stringify(e));
}
function tt(e) {
  return e?.events && {
    events: e.events
  };
}
function nt(e) {
  if (e?.metas) {
    return $e(e);
  }
  return [];
}
let rt;
(e => {
  e.SYNC = `sync`;
  e.JOIN = `join`;
  e.LEAVE = `leave`;
})(rt ||= {});
class it {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(e, t) {
    this.channel = e;
    this.presenceAdapter = new Qe(this.channel.channelAdapter, t);
  }
}
function at(e) {
  if (e instanceof Error) {
    return e;
  }
  if (typeof e == `string`) {
    return Error(e);
  }
  if (e && typeof e == `object`) {
    let t = e;
    if (typeof t.code == `number`) {
      let n = typeof t.reason == `string` && t.reason ? ` (${t.reason})` : ``;
      return Error(`socket closed: ${t.code}${n}`, {
        cause: e
      });
    }
    return Error(`channel error: transport failure`, {
      cause: e
    });
  }
  return Error(`channel error: connection lost`);
}
class ot {
  constructor(e, t, n) {
    let r = st(n);
    this.channel = e.getSocket().channel(t, r);
    this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
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
  on(e, t) {
    return this.channel.on(e, t);
  }
  off(e, t) {
    this.channel.off(e, t);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, t, n) {
    let r;
    try {
      r = this.channel.push(e, t, n);
    } catch {
      throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > 100) {
      let e = this.channel.pushBuffer.shift();
      e.cancelTimeout();
      this.socket.log(`channel`, `discarded push due to buffer overflow: ${e.event}`, e.payload());
    }
    return r;
  }
  updateJoinPayload(e) {
    let t = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => ({
      ...t,
      ...e
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
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  getChannel() {
    return this.channel;
  }
}
function st(e) {
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
      ...e.config
    }
  };
}
const ct = /[,()"\\]/;
const lt = e => ct.test(e) || e !== e.trim();
const ut = e => `"${e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`)}"`;
const dt = e => {
  let t = e === null ? `null` : String(e);
  if (lt(t)) {
    return ut(t);
  }
  return t;
};
const ft = e => {
  if (e === null) {
    return `null`;
  }
  return String(e);
};
const pt = (e, t) => {
  if (e === `in`) {
    let e = Array.isArray(t) ? t : [t];
    if (e.length === 0) {
      throw Error("Realtime `in` filter requires at least one value.");
    }
    return `in.(${Array.from(new Set(e)).map(e => dt(e)).join(`,`)})`;
  }
  if (e === `is`) {
    return `is.${ft(t)}`;
  }
  return `${e}.${dt(t)}`;
};
class mt {
  constructor() {
    this.filters = [];
  }
  add(e, t, n, r = false) {
    let i = r ? `not.` : ``;
    this.filters.push(`${e}=${i}${pt(t, n)}`);
    return this;
  }
  eq(e, t) {
    return this.add(e, `eq`, t);
  }
  neq(e, t) {
    return this.add(e, `neq`, t);
  }
  gt(e, t) {
    return this.add(e, `gt`, t);
  }
  gte(e, t) {
    return this.add(e, `gte`, t);
  }
  lt(e, t) {
    return this.add(e, `lt`, t);
  }
  lte(e, t) {
    return this.add(e, `lte`, t);
  }
  in(e, t) {
    return this.add(e, `in`, t);
  }
  like(e, t) {
    return this.add(e, `like`, t);
  }
  ilike(e, t) {
    return this.add(e, `ilike`, t);
  }
  match(e, t) {
    return this.add(e, `match`, t);
  }
  imatch(e, t) {
    return this.add(e, `imatch`, t);
  }
  is(e, t) {
    return this.add(e, `is`, t);
  }
  isDistinct(e, t) {
    return this.add(e, `isdistinct`, t);
  }
  not(e, t, n) {
    return this.add(e, t, n, true);
  }
  build() {
    return this.filters.join(`,`);
  }
  toString() {
    return this.build();
  }
}
let ht;
(e => {
  e.ALL = `*`;
  e.INSERT = `INSERT`;
  e.UPDATE = `UPDATE`;
  e.DELETE = `DELETE`;
})(ht ||= {});
let gt;
(e => {
  e.BROADCAST = `broadcast`;
  e.PRESENCE = `presence`;
  e.POSTGRES_CHANGES = `postgres_changes`;
  e.SYSTEM = `system`;
})(gt ||= {});
let D;
(e => {
  e.SUBSCRIBED = `SUBSCRIBED`;
  e.TIMED_OUT = `TIMED_OUT`;
  e.CLOSED = `CLOSED`;
  e.CHANNEL_ERROR = `CHANNEL_ERROR`;
})(D ||= {});
const _t = class e {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
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
  constructor(e, t = {
    config: {}
  }, n) {
    this.topic = e;
    this.params = t;
    this.socket = n;
    this.bindings = {};
    this.subTopic = e.replace(/^realtime:/i, ``);
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
      ...t.config
    };
    this.channelAdapter = new ot(this.socket.socketAdapter, e, this.params);
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
  subscribe(e, t = this.timeout) {
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
      let postgres_changes = this.bindings.postgres_changes?.map(e => e.filter) ?? [];
      let enabled = !!this.bindings[gt.PRESENCE] && this.bindings[gt.PRESENCE].length > 0 || this.params.config.presence?.enabled === true;
      let c = {};
      let config = {
        broadcast,
        presence: {
          ...presence,
          enabled
        },
        postgres_changes,
        private: _private,
        ...(postgres_changes_options ? {
          postgres_changes_options
        } : {})
      };
      if (this.socket.accessTokenValue) {
        c.access_token = this.socket.accessTokenValue;
      }
      this._onError(t => {
        e?.(D.CHANNEL_ERROR, at(t));
      });
      this._onClose(() => e?.(D.CLOSED));
      this.updateJoinPayload({
        config,
        ...c
      });
      this._updateFilterMessage();
      let u = postgres_changes_options?.wait && postgres_changes.length > 0 ? Math.max(t, (postgres_changes_options.timeout ?? ye) + be) : t;
      this.channelAdapter.subscribe(u).receive(`ok`, async ({
        postgres_changes
      }) => {
        if (!this.socket._isManualToken()) {
          this.socket.setAuth();
        }
        if (postgres_changes === undefined) {
          e?.(D.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(postgres_changes, e);
      }).receive(`error`, t => {
        this.state = b.errored;
        let n = Object.values(t).join(`, `) || `error`;
        e?.(D.CHANNEL_ERROR, Error(n, {
          cause: t
        }));
      }).receive(`timeout`, () => {
        e?.(D.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(t, n) {
    let postgres_changes = this.bindings.postgres_changes;
    let i = postgres_changes?.length ?? 0;
    let a = [];
    for (let o = 0; o < i; o++) {
      let i = postgres_changes[o];
      let {
        filter: {
          event,
          schema,
          table,
          filter
        }
      } = i;
      let d = t && t[o];
      if (d && d.event === event && e.isFilterValueEqual(d.schema, schema) && e.isFilterValueEqual(d.table, table) && e.isFilterValueEqual(d.filter, filter)) {
        a.push({
          ...i,
          id: d.id
        });
      } else {
        this.unsubscribe();
        this.state = b.errored;
        n?.(D.CHANNEL_ERROR, Error(`mismatch between server and client bindings for postgres changes`));
        return;
      }
    }
    this.bindings.postgres_changes = a;
    if (this.state != b.errored && n) {
      n(D.SUBSCRIBED);
    }
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: `presence`,
      event: `track`,
      payload: e
    }, t);
  }
  async untrack(e = {}) {
    return await this.send({
      type: `presence`,
      event: `untrack`
    }, e);
  }
  on(e, t, n) {
    let r = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
    let i = e === gt.PRESENCE || e === gt.POSTGRES_CHANGES;
    if (r && i) {
      this.socket.log(`channel`, `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      throw Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    }
    return this._on(e, t, n);
  }
  async httpSend(e, t, n = {}) {
    if (t == null) {
      return Promise.reject(Error(`Payload is required for httpSend()`));
    }
    let r = t instanceof ArrayBuffer || ArrayBuffer.isView(t);
    let i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : ``,
      "Content-Type": r ? `application/octet-stream` : `application/json`
    };
    if (this.socket.accessTokenValue) {
      i.Authorization = `Bearer ${this.socket.accessTokenValue}`;
    }
    let a = new URL(this.broadcastEndpointURL);
    a.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`;
    if (this.private) {
      a.searchParams.set(`private`, `true`);
    }
    let o = {
      method: `POST`,
      headers: i,
      body: r ? t : JSON.stringify(t)
    };
    let s = await this._fetchWithTimeout(a.toString(), o, n.timeout ?? this.timeout);
    if (s.status === 202) {
      return {
        success: true
      };
    }
    if (s.status === 404) {
      return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));
    }
    let s_statusText = s.statusText;
    try {
      let e = await s.json();
      s_statusText = e.error || e.message || s_statusText;
    } catch {}
    return Promise.reject(Error(s_statusText));
  }
  async send(e, t = {}) {
    if (!this.channelAdapter.canPush() && e.type === `broadcast`) {
      let n = `Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;
      if (this.socket.hasLogger()) {
        this.socket.log(`channel`, n);
      } else {
        console.warn(n);
      }
      let {
        event,
        payload
      } = e;
      let a = {
        apikey: this.socket.apiKey ? this.socket.apiKey : ``,
        "Content-Type": `application/json`
      };
      if (this.socket.accessTokenValue) {
        a.Authorization = `Bearer ${this.socket.accessTokenValue}`;
      }
      let o = {
        method: `POST`,
        headers: a,
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
        let e = await this._fetchWithTimeout(this.broadcastEndpointURL, o, t.timeout ?? this.timeout);
        await e.body?.cancel();
        if (e.ok) {
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
    return new Promise(resolve => {
      let r = this.channelAdapter.push(e.type, e, t.timeout || this.timeout);
      if (e.type === `broadcast` && !this.params?.config?.broadcast?.ack) {
        resolve(`ok`);
      }
      r.receive(`ok`, () => resolve(`ok`));
      r.receive(`error`, () => resolve(`error`));
      r.receive(`timeout`, () => resolve(`timed out`));
    });
  }
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  async unsubscribe(e = this.timeout) {
    return new Promise(resolve => {
      this.channelAdapter.unsubscribe(e).receive(`ok`, () => resolve(`ok`)).receive(`timeout`, () => resolve(`timed out`)).receive(`error`, () => resolve(`error`));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(e, t, n) {
    let r = new AbortController();
    let i = setTimeout(() => r.abort(), n);
    let a = await this.socket.fetch(e, {
      ...t,
      signal: r.signal
    });
    clearTimeout(i);
    return a;
  }
  _on(t, filter, r) {
    let i = t.toLocaleLowerCase();
    let a = filter?.filter;
    if (a instanceof mt || typeof a == `object` && a && typeof a.build == `function`) {
      filter = {
        ...filter,
        filter: a.build()
      };
    }
    if (i === gt.POSTGRES_CHANGES && this.bindings[i]?.find(t => e.isSamePostgresFilter(t.filter, filter))) {
      this.socket.log(`error`, `duplicate \`postgres_changes\` binding for ${this.topic} ignored`, filter);
      return this;
    }
    let o = this.channelAdapter.on(t, r);
    let s = {
      type: i,
      filter,
      callback: r,
      ref: o
    };
    if (this.bindings[i]) {
      this.bindings[i].push(s);
    } else {
      this.bindings[i] = [s];
    }
    this._updateFilterMessage();
    return this;
  }
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, t, n) => {
      let r = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(r, n)) {
        return false;
      }
      let i = this.bindings[r]?.find(t => t.ref === e.ref);
      if (!i) {
        return true;
      }
      if ([`broadcast`, `presence`, `postgres_changes`].includes(r)) {
        if (`id` in i) {
          let e = i.id;
          let n = i.filter?.event;
          return e && t.ids?.includes(e) && (n === `*` || n?.toLocaleLowerCase() === t.data?.type.toLocaleLowerCase());
        }
        {
          let e = i?.filter?.event?.toLocaleLowerCase();
          return e === `*` || e === t?.event?.toLocaleLowerCase();
        }
      }
      return i.type.toLocaleLowerCase() === r;
    });
  }
  _notThisChannelEvent(e, t) {
    let {
      close,
      error,
      leave,
      join
    } = xe;
    return t && [close, error, leave, join].includes(e) && t !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, t, n) => {
      if (typeof t == `object` && `ids` in t) {
        let e = t.data;
        let {
          schema,
          table,
          commit_timestamp,
          type,
          errors
        } = e;
        return {
          schema,
          table,
          commit_timestamp,
          eventType: type,
          new: {},
          old: {},
          errors,
          ...this._getPayloadRecords(e)
        };
      }
      return t;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce) {
      throw Error(`cannot copy bindings into joined channel`);
    }
    for (let t in e.bindings) {
      for (let n of e.bindings[t]) {
        this._on(n.type, n.filter, n.callback);
      }
    }
  }
  static isFilterValueEqual(e, t) {
    return (e ?? undefined) === (t ?? undefined);
  }
  static isSamePostgresFilter(t, n) {
    let r = t?.select?.join() ?? undefined;
    let i = n?.select?.join() ?? undefined;
    return t?.event === n?.event && e.isFilterValueEqual(t?.schema, n?.schema) && e.isFilterValueEqual(t?.table, n?.table) && e.isFilterValueEqual(t?.filter, n?.filter) && r === i;
  }
  _getPayloadRecords(e) {
    let t = {
      new: {},
      old: {}
    };
    if (e.type === `INSERT` || e.type === `UPDATE`) {
      t.new = we(e.columns, e.record);
    }
    if (e.type === `UPDATE` || e.type === `DELETE`) {
      t.old = we(e.columns, e.old_record);
    }
    return t;
  }
};
class vt {
  constructor(e, t) {
    this.socket = new Ze(e, t);
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
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
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
  disconnect(e, t, n, r = 10000) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`timeout`), r);
      this.socket.disconnect(() => {
        e();
        resolve(`ok`);
      }, t, n);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, t, n) {
    this.socket.log(e, t, n);
  }
  hasLogger() {
    return this.socket.hasLogger();
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
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
}
const yt = {
  HEARTBEAT_INTERVAL: 25000,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
};
const bt = [1000, 2000, 5000, 10000];
const xt = 10000;
function St() {
  let e = new Map();
  return {
    get length() {
      return e.size;
    },
    clear() {
      e.clear();
    },
    getItem(t) {
      if (e.has(t)) {
        return e.get(t);
      }
      return null;
    },
    key(t) {
      return Array.from(e.keys())[t] ?? null;
    },
    removeItem(t) {
      e.delete(t);
    },
    setItem(t, n) {
      e.set(t, String(n));
    }
  };
}
function Ct() {
  try {
    if (typeof globalThis < `u` && globalThis.sessionStorage) {
      return globalThis.sessionStorage;
    }
  } catch {}
  return St();
}
const wt = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Tt {
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
  constructor(e, t) {
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
    this._workerHeartbeatTimer = undefined;
    this._pendingWorkerHeartbeatRef = null;
    this._pendingDisconnectTimer = null;
    this._disconnectOnEmptyChannelsAfterMs = 0;
    this._resolveFetch = e => {
      if (e) {
        return (...t) => e(...t);
      }
      return (...e) => fetch(...e);
    };
    if (!t?.params?.apikey) {
      throw Error(`API key is required to connect to Realtime`);
    }
    this.apiKey = t.params.apikey;
    let n = this._initializeOptions(t);
    this.socketAdapter = new vt(e, n);
    this.httpEndpoint = Ne(e);
    this.fetch = this._resolveFetch(t?.fetch);
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
        let t = error.message;
        throw Error(`WebSocket not available: ${t}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(e, t) {
    this._cancelPendingDisconnect();
    if (this.isDisconnecting()) {
      return `ok`;
    }
    return await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer);
      this._terminateWorker();
    }, e, t);
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    let t = await e.unsubscribe();
    if (t === `ok`) {
      e.teardown();
    }
    return t;
  }
  async removeAllChannels() {
    let e = this.channels.map(async e => {
      let t = await e.unsubscribe();
      e.teardown();
      return t;
    });
    let t = await Promise.all(e);
    await this.disconnect();
    return t;
  }
  log(e, t, n) {
    this.socketAdapter.log(e, t, n);
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
  channel(e, t = {
    config: {}
  }) {
    let n = `realtime:${e}`;
    let r = this.getChannels().find(e => e.topic === n);
    if (r) {
      return r;
    }
    {
      let n = new _t(`realtime:${e}`, t, this);
      this._cancelPendingDisconnect();
      this.channels.push(n);
      return n;
    }
  }
  push(e) {
    this.socketAdapter.push(e);
  }
  async setAuth(e = null) {
    let t = ++this._authGeneration;
    let n = this._performAuth(e, t);
    if (t === this._authGeneration) {
      this._authPromise = n;
    }
    try {
      await n;
    } finally {
      if (this._authPromise === n) {
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
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(e) {
    this.channels = this.channels.filter(t => t.topic !== e.topic);
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
  async _performAuth(e, t) {
    let access_token;
    let r = false;
    if (e) {
      access_token = e;
      r = true;
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
    if (t === this._authGeneration) {
      if (this.accessToken) {
        this._manuallySetToken = false;
      } else if (r) {
        this._manuallySetToken = true;
      }
      if (this.accessTokenValue != access_token) {
        this.accessTokenValue = access_token;
        this.channels.forEach(e => {
          let t = {
            access_token,
            version
          };
          e.updateJoinPayload(t);
          if (e.joinedOnce && e.channelAdapter.isJoined()) {
            e.channelAdapter.push(xe.access_token, {
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
  _setAuthSafely(e = `general`) {
    if (!this._isManualToken()) {
      this.setAuth().catch(t => {
        this.log(`error`, `Error setting auth in ${e}`, t);
      });
    }
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch(e => {
        this.log(`error`, `error waiting for auth on connect`, e);
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
    this.socketAdapter.onMessage(e => {
      if (e.ref && e.ref === this._pendingWorkerHeartbeatRef) {
        this._pendingWorkerHeartbeatRef = null;
      }
    });
  }
  _handleNodeJsRaceCondition() {
    if (this.socketAdapter.isConnected()) {
      this.socketAdapter.getSocket().onConnOpen();
    }
  }
  _wrapHeartbeatCallback(e) {
    return (t, n) => {
      if (t !== `disconnected`) {
        if (t == `sent`) {
          this._setAuthSafely();
        }
        if (e) {
          e(t, n);
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
    let e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e);
    this.workerRef.onerror = e => {
      this.log(`worker`, `worker error`, e.message);
      this._terminateWorker();
      this.disconnect();
    };
    this.workerRef.onmessage = e => {
      if (e.data.event === `keepAlive`) {
        this.sendHeartbeat();
      }
    };
    this.workerRef.postMessage({
      event: `start`,
      interval: this.heartbeatIntervalMs
    });
  }
  _terminateWorker() {
    this.workerRef &&= (this.log(`worker`, `terminating worker`), this.workerRef.terminate(), undefined);
  }
  _workerObjectUrl(e) {
    let t;
    if (e) {
      t = e;
    } else {
      let e = new Blob([wt], {
        type: `application/javascript`
      });
      t = URL.createObjectURL(e);
    }
    return t;
  }
  _initializeOptions(e) {
    this.worker = e?.worker ?? false;
    this.accessToken = e?.accessToken ?? null;
    let t = {};
    t.timeout = e?.timeout ?? ve;
    t.heartbeatIntervalMs = e?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL;
    this._disconnectOnEmptyChannelsAfterMs = e?.disconnectOnEmptyChannelsAfterMs ?? 2 * (e?.heartbeatIntervalMs ?? yt.HEARTBEAT_INTERVAL);
    t.transport = e?.transport ?? pe.getWebSocketConstructor();
    t.params = e?.params;
    t.logger = e?.logger;
    t.heartbeatCallback = this._wrapHeartbeatCallback(e?.heartbeatCallback);
    t.sessionStorage = e?.sessionStorage ?? Ct();
    t.reconnectAfterMs = e?.reconnectAfterMs ?? (e => bt[e - 1] || xt);
    let n;
    let r;
    let i = e?.vsn ?? _e;
    switch (i) {
      case he:
        n = (e, t) => t(JSON.stringify(e));
        r = (e, t) => t(JSON.parse(e));
        break;
      case ge:
        n = this.serializer.encode.bind(this.serializer);
        r = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw Error(`Unsupported serializer version: ${t.vsn}`);
    }
    t.vsn = i;
    t.encode = e?.encode ?? n;
    t.decode = e?.decode ?? r;
    t.beforeReconnect = this._reconnectAuth.bind(this);
    if (e?.logLevel || e?.log_level) {
      this.logLevel = e.logLevel || e.log_level;
      t.params = {
        ...t.params,
        log_level: this.logLevel
      };
    }
    if (this.worker) {
      if (typeof window < `u` && !window.Worker) {
        throw Error(`Web Worker is not supported`);
      }
      this.workerUrl = e?.workerUrl;
      t.autoSendHeartbeat = !this.worker;
    }
    return t;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded();
    if (!this.isConnected()) {
      this.connect();
    }
  }
}
class Et extends Error {
  constructor(e, t) {
    super(e);
    this.name = `IcebergError`;
    this.status = t.status;
    this.icebergType = t.icebergType;
    this.icebergCode = t.icebergCode;
    this.details = t.details;
    this.isCommitStateUnknown = t.icebergType === `CommitStateUnknownException` || [500, 502, 504].includes(t.status) && t.icebergType?.includes(`CommitState`) === true;
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
}
function Dt(baseUrl, path, query) {
  let r = new URL(path, baseUrl);
  if (query) {
    for (let [e, t] of Object.entries(query)) {
      if (t !== undefined) {
        r.searchParams.set(e, t);
      }
    }
  }
  return r.toString();
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
function kt(e) {
  let t = e.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method,
      path,
      query,
      body,
      headers
    }) {
      let s = Dt(e.baseUrl, path, query);
      let c = await Ot(e.auth);
      let l = await t(s, {
        method,
        headers: {
          ...(body ? {
            "Content-Type": `application/json`
          } : {}),
          ...c,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      });
      let u = await l.text();
      let d = (l.headers.get(`content-type`) || ``).includes(`application/json`);
      let f = d && u ? JSON.parse(u) : u;
      if (!l.ok) {
        let e = d ? f : undefined;
        let t = e?.error;
        throw new Et(t?.message ?? `Request failed with status ${l.status}`, {
          status: l.status,
          icebergType: t?.type,
          icebergCode: t?.code,
          details: e
        });
      }
      return {
        status: l.status,
        headers: l.headers,
        data: f
      };
    }
  };
}
function At(namespace) {
  return namespace.join(``);
}
class jt {
  constructor(e, t = ``) {
    this.client = e;
    this.prefix = t;
  }
  async listNamespaces(e) {
    let query = e ? {
      parent: At(e.namespace)
    } : undefined;
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces`,
      query
    })).data.namespaces.map(namespace => ({
      namespace
    }));
  }
  async createNamespace(e, t) {
    let n = {
      namespace: e.namespace,
      properties: t?.properties
    };
    return (await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces`,
      body: n
    })).data;
  }
  async dropNamespace(e) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${At(e.namespace)}`
    });
  }
  async loadNamespaceMetadata(e) {
    return {
      properties: (await this.client.request({
        method: `GET`,
        path: `${this.prefix}/namespaces/${At(e.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(e) {
    try {
      await this.client.request({
        method: `HEAD`,
        path: `${this.prefix}/namespaces/${At(e.namespace)}`
      });
      return true;
    } catch (error) {
      if (error instanceof Et && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createNamespaceIfNotExists(e, t) {
    try {
      return await this.createNamespace(e, t);
    } catch (error) {
      if (error instanceof Et && error.status === 409) {
        return;
      }
      throw error;
    }
  }
}
function O(namespace) {
  return namespace.join(``);
}
class Mt {
  constructor(e, t = ``, n) {
    this.client = e;
    this.prefix = t;
    this.accessDelegation = n;
  }
  async listTables(e) {
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces/${O(e.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(e, t) {
    let n = {};
    if (this.accessDelegation) {
      n[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    return (await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces/${O(e.namespace)}/tables`,
      body: t,
      headers: n
    })).data.metadata;
  }
  async updateTable(e, t) {
    let n = await this.client.request({
      method: `POST`,
      path: `${this.prefix}/namespaces/${O(e.namespace)}/tables/${e.name}`,
      body: t
    });
    return {
      "metadata-location": n.data[`metadata-location`],
      metadata: n.data.metadata
    };
  }
  async dropTable(e, t) {
    await this.client.request({
      method: `DELETE`,
      path: `${this.prefix}/namespaces/${O(e.namespace)}/tables/${e.name}`,
      query: {
        purgeRequested: String(t?.purge ?? false)
      }
    });
  }
  async loadTable(e) {
    let t = {};
    if (this.accessDelegation) {
      t[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    return (await this.client.request({
      method: `GET`,
      path: `${this.prefix}/namespaces/${O(e.namespace)}/tables/${e.name}`,
      headers: t
    })).data.metadata;
  }
  async tableExists(e) {
    let t = {};
    if (this.accessDelegation) {
      t[`X-Iceberg-Access-Delegation`] = this.accessDelegation;
    }
    try {
      await this.client.request({
        method: `HEAD`,
        path: `${this.prefix}/namespaces/${O(e.namespace)}/tables/${e.name}`,
        headers: t
      });
      return true;
    } catch (error) {
      if (error instanceof Et && error.status === 404) {
        return false;
      }
      throw error;
    }
  }
  async createTableIfNotExists(e, t) {
    try {
      return await this.createTable(e, t);
    } catch (error) {
      if (error instanceof Et && error.status === 409) {
        return await this.loadTable({
          namespace: e.namespace,
          name: t.name
        });
      }
      throw error;
    }
  }
}
class Nt {
  constructor(e) {
    let t = `v1`;
    if (e.catalogName) {
      t += `/${e.catalogName}`;
    }
    let baseUrl = e.baseUrl.endsWith(`/`) ? e.baseUrl : `${e.baseUrl}/`;
    this.client = kt({
      baseUrl,
      auth: e.auth,
      fetchImpl: e.fetch
    });
    this.accessDelegation = e.accessDelegation?.join(`,`);
    this.namespaceOps = new jt(this.client, t);
    this.tableOps = new Mt(this.client, t, this.accessDelegation);
  }
  async listNamespaces(e) {
    return this.namespaceOps.listNamespaces(e);
  }
  async createNamespace(e, t) {
    return this.namespaceOps.createNamespace(e, t);
  }
  async dropNamespace(e) {
    await this.namespaceOps.dropNamespace(e);
  }
  async loadNamespaceMetadata(e) {
    return this.namespaceOps.loadNamespaceMetadata(e);
  }
  async listTables(e) {
    return this.tableOps.listTables(e);
  }
  async createTable(e, t) {
    return this.tableOps.createTable(e, t);
  }
  async updateTable(e, t) {
    return this.tableOps.updateTable(e, t);
  }
  async dropTable(e, t) {
    await this.tableOps.dropTable(e, t);
  }
  async loadTable(e) {
    return this.tableOps.loadTable(e);
  }
  async namespaceExists(e) {
    return this.namespaceOps.namespaceExists(e);
  }
  async tableExists(e) {
    return this.tableOps.tableExists(e);
  }
  async createNamespaceIfNotExists(e, t) {
    return this.namespaceOps.createNamespaceIfNotExists(e, t);
  }
  async createTableIfNotExists(e, t) {
    return this.tableOps.createTableIfNotExists(e, t);
  }
}
class zt extends Error {
  constructor(e, t = `storage`, n, r) {
    super(e);
    this.__isStorageError = true;
    this.namespace = t;
    this.name = t === `vectors` ? `StorageVectorsError` : `StorageError`;
    this.status = n;
    this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
function Bt(error) {
  return typeof error == `object` && !!error && `__isStorageError` in error;
}
class Vt extends zt {
  constructor(e, t, n, r = `storage`, i) {
    super(e, r, t, n);
    this.name = r === `vectors` ? `StorageVectorsApiError` : `StorageApiError`;
    this.status = t;
    this.statusCode = n;
    this.code = i;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      code: this.code
    };
  }
}
class Ht extends zt {
  constructor(e, t, n = `storage`) {
    super(e, n);
    this.name = n === `vectors` ? `StorageVectorsUnknownError` : `StorageUnknownError`;
    this.originalError = t;
  }
}
function Ut(e, t, n) {
  let r = {
    ...e
  };
  let i = t.toLowerCase();
  for (let e of Object.keys(r)) {
    if (e.toLowerCase() === i) {
      delete r[e];
    }
  }
  r[i] = n;
  return r;
}
function Wt(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    t[n.toLowerCase()] = r;
  }
  return t;
}
const Gt = e => {
  if (e) {
    return (...t) => e(...t);
  }
  return (...e) => fetch(...e);
};
const Kt = e => {
  if (typeof e != `object` || !e) {
    return false;
  }
  let t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
};
const qt = e => {
  if (Array.isArray(e)) {
    return e.map(e => qt(e));
  }
  if (typeof e == `function` || e !== Object(e)) {
    return e;
  }
  let t = {};
  Object.entries(e).forEach(([e, n]) => {
    let r = e.replace(/([-_][a-z])/gi, e => e.toUpperCase().replace(/[-_]/g, ``));
    t[r] = qt(n);
  });
  return t;
};
const Jt = catalogName => {
  if (!catalogName || typeof catalogName != `string` || catalogName.length === 0 || catalogName.length > 100 || catalogName.trim() !== catalogName || catalogName.includes(`/`) || catalogName.includes(`\\`)) {
    return false;
  }
  return /^[\w!.\*'() &$@=;:+,?-]+$/.test(catalogName);
};
const Yt = e => e.split(`/`).map(encodeURIComponent).join(`/`);
const Xt = e => {
  if (typeof e == `object` && e) {
    let t = e;
    if (typeof t.msg == `string`) {
      return t.msg;
    }
    if (typeof t.message == `string`) {
      return t.message;
    }
    if (typeof t.error_description == `string`) {
      return t.error_description;
    }
    if (typeof t.error == `string`) {
      return t.error;
    }
    if (typeof t.error == `object` && t.error !== null) {
      let e = t.error;
      if (typeof e.message == `string`) {
        return e.message;
      }
    }
  }
  return JSON.stringify(e);
};
const Zt = async (e, reject, n, r) => {
  if (typeof e == `object` && e && `json` in e && typeof e.json == `function`) {
    let n = e;
    let i = parseInt(String(n.status), 10);
    if (!Number.isFinite(i)) {
      i = 500;
    }
    n.json().then(e => {
      let n = e?.statusCode || e?.code || i + ``;
      reject(new Vt(Xt(e), i, n, r, e?.code));
    }).catch(() => {
      let e = i + ``;
      reject(new Vt(n.statusText || `HTTP ${i} error`, i, e, r));
    });
  } else {
    reject(new Ht(Xt(e), e, r));
  }
};
const Qt = (e, t, n, r) => {
  let i = {
    method: e,
    headers: t?.headers || {}
  };
  if (e === `GET` || e === `HEAD` || !r) {
    return {
      ...i,
      ...n
    };
  }
  if (Kt(r)) {
    let e = t?.headers || {};
    let n;
    for (let [t, r] of Object.entries(e)) {
      if (t.toLowerCase() === `content-type`) {
        n = r;
      }
    }
    i.headers = Ut(e, `Content-Type`, n ?? `application/json`);
    i.body = JSON.stringify(r);
  } else {
    i.body = r;
  }
  if (t?.duplex) {
    i.duplex = t.duplex;
  }
  return {
    ...i,
    ...n
  };
};
async function $t(e, t, n, r, i, a, o) {
  return new Promise((resolve, reject) => {
    e(n, Qt(t, r, i, a)).then(e => {
      if (!e.ok) {
        throw e;
      }
      if (r?.noResolveJson) {
        return e;
      }
      if (o === `vectors`) {
        let t = e.headers.get(`content-type`);
        if (e.headers.get(`content-length`) === `0` || e.status === 204 || !t || !t.includes(`application/json`)) {
          return {};
        }
      }
      return e.json();
    }).then(e => resolve(e)).catch(e => Zt(e, reject, r, o));
  });
}
function en(e = `storage`) {
  return {
    get: async (t, n, r, i) => $t(t, `GET`, n, r, i, undefined, e),
    post: async (t, n, r, i, a) => $t(t, `POST`, n, i, a, r, e),
    put: async (t, n, r, i, a) => $t(t, `PUT`, n, i, a, r, e),
    head: async (t, n, r, i) => $t(t, `HEAD`, n, {
      ...r,
      noResolveJson: true
    }, i, undefined, e),
    remove: async (t, n, r, i, a) => $t(t, `DELETE`, n, i, a, r, e)
  };
}
const {
  get,
  post,
  put,
  head,
  remove
} = en(`storage`);
const j = en(`vectors`);
class M {
  constructor(e, t = {}, n, r = `storage`) {
    this.shouldThrowOnError = false;
    this.url = e;
    this.headers = Wt(t);
    this.fetch = Gt(n);
    this.namespace = r;
  }
  throwOnError() {
    this.shouldThrowOnError = true;
    return this;
  }
  setHeader(e, t) {
    this.headers = Ut(this.headers, e, t);
    return this;
  }
  async handleOperation(e) {
    const t = this;
    try {
      return {
        data: await e(),
        error: null
      };
    } catch (error) {
      if (t.shouldThrowOnError) {
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
}
class sn {
  constructor(e, t) {
    this.downloadFn = e;
    this.shouldThrowOnError = t;
    this[Symbol.toStringTag] = `StreamDownloadBuilder`;
    this.promise = null;
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    const e = this;
    try {
      return {
        data: (await e.downloadFn()).body,
        error: null
      };
    } catch (error) {
      if (e.shouldThrowOnError) {
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
}
class ln {
  constructor(e, t) {
    this.downloadFn = e;
    this.shouldThrowOnError = t;
    this[Symbol.toStringTag] = `BlobDownloadBuilder`;
    this.promise = null;
  }
  asStream() {
    return new sn(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    this.promise ||= this.execute();
    return this.promise;
  }
  async execute() {
    const e = this;
    try {
      return {
        data: await (await e.downloadFn()).blob(),
        error: null
      };
    } catch (error) {
      if (e.shouldThrowOnError) {
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
}
const un = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: `name`,
    order: `asc`
  }
};
const dn = {
  cacheControl: `3600`,
  contentType: `text/plain;charset=UTF-8`,
  upsert: false
};
class fn extends M {
  constructor(e, t = {}, n, r) {
    super(e, t, r, `storage`);
    this.bucketId = n;
  }
  async uploadOrUpdate(e, t, n, r) {
    const i = this;
    return i.handleOperation(async () => {
      let a;
      let o = {
        ...dn,
        ...r
      };
      let s = {
        ...i.headers,
        ...(e === `POST` && {
          "x-upsert": String(o.upsert)
        })
      };
      let o_metadata = o.metadata;
      if (typeof Blob < `u` && n instanceof Blob) {
        a = new FormData();
        a.append(`cacheControl`, o.cacheControl);
        if (o_metadata) {
          a.append(`metadata`, i.encodeMetadata(o_metadata));
        }
        a.append(``, n);
      } else if (typeof FormData < `u` && n instanceof FormData) {
        a = n;
        if (!a.has(`cacheControl`)) {
          a.append(`cacheControl`, o.cacheControl);
        }
        if (o_metadata && !a.has(`metadata`)) {
          a.append(`metadata`, i.encodeMetadata(o_metadata));
        }
      } else {
        a = n;
        s[`cache-control`] = `max-age=${o.cacheControl}`;
        s[`content-type`] = o.contentType;
        if (o_metadata) {
          s[`x-metadata`] = i.toBase64(i.encodeMetadata(o_metadata));
        }
        if ((typeof ReadableStream < `u` && a instanceof ReadableStream || a && typeof a == `object` && `pipe` in a && typeof a.pipe == `function`) && !o.duplex) {
          o.duplex = `half`;
        }
      }
      if (r?.headers) {
        for (let [e, t] of Object.entries(r.headers)) {
          s = Ut(s, e, t);
        }
      }
      let l = i._removeEmptyFolders(t);
      let u = i._getFinalPath(l);
      let d = await (e == `PUT` ? put : post)(i.fetch, `${i.url}/object/${u}`, a, {
        headers: s,
        ...(o?.duplex ? {
          duplex: o.duplex
        } : {})
      });
      return {
        path: l,
        id: d.Id,
        fullPath: d.Key
      };
    });
  }
  async upload(e, t, n) {
    return this.uploadOrUpdate(`POST`, e, t, n);
  }
  async uploadToSignedUrl(e, t, n, r) {
    const i = this;
    let a = i._removeEmptyFolders(e);
    let o = i._getFinalPath(a);
    let s = new URL(i.url + `/object/upload/sign/${o}`);
    s.searchParams.set(`token`, t);
    return i.handleOperation(async () => {
      let e;
      let t = {
        ...dn,
        ...r
      };
      let o = {
        ...i.headers,
        "x-upsert": String(t.upsert)
      };
      let t_metadata = t.metadata;
      if (typeof Blob < `u` && n instanceof Blob) {
        e = new FormData();
        e.append(`cacheControl`, t.cacheControl);
        if (t_metadata) {
          e.append(`metadata`, i.encodeMetadata(t_metadata));
        }
        e.append(``, n);
      } else if (typeof FormData < `u` && n instanceof FormData) {
        e = n;
        if (!e.has(`cacheControl`)) {
          e.append(`cacheControl`, t.cacheControl);
        }
        if (t_metadata && !e.has(`metadata`)) {
          e.append(`metadata`, i.encodeMetadata(t_metadata));
        }
      } else {
        e = n;
        o[`cache-control`] = `max-age=${t.cacheControl}`;
        o[`content-type`] = t.contentType;
        if (t_metadata) {
          o[`x-metadata`] = i.toBase64(i.encodeMetadata(t_metadata));
        }
        if ((typeof ReadableStream < `u` && e instanceof ReadableStream || e && typeof e == `object` && `pipe` in e && typeof e.pipe == `function`) && !t.duplex) {
          t.duplex = `half`;
        }
      }
      if (r?.headers) {
        for (let [e, t] of Object.entries(r.headers)) {
          o = Ut(o, e, t);
        }
      }
      return {
        path: a,
        fullPath: (await put(i.fetch, s.toString(), e, {
          headers: o,
          ...(t?.duplex ? {
            duplex: t.duplex
          } : {})
        })).Key
      };
    });
  }
  async createSignedUploadUrl(e, t) {
    const n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(e);
      let i = {
        ...n.headers
      };
      if (t?.upsert) {
        i[`x-upsert`] = `true`;
      }
      let a = await post(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, {
        headers: i
      });
      let o = new URL(n.url + a.url);
      let token = o.searchParams.get(`token`);
      if (!token) {
        throw new zt(`No token returned by API`);
      }
      return {
        signedUrl: o.toString(),
        path: e,
        token
      };
    });
  }
  async update(e, t, n) {
    return this.uploadOrUpdate(`PUT`, e, t, n);
  }
  async move(e, t, n) {
    const r = this;
    return r.handleOperation(async () => await post(r.fetch, `${r.url}/object/move`, {
      bucketId: r.bucketId,
      sourceKey: e,
      destinationKey: t,
      destinationBucket: n?.destinationBucket,
      sourceVersionId: n?.sourceVersionId
    }, {
      headers: r.headers
    }));
  }
  async copy(e, t, n) {
    const r = this;
    return r.handleOperation(async () => ({
      path: (await post(r.fetch, `${r.url}/object/copy`, {
        bucketId: r.bucketId,
        sourceKey: e,
        destinationKey: t,
        destinationBucket: n?.destinationBucket,
        sourceVersionId: n?.sourceVersionId
      }, {
        headers: r.headers
      })).Key
    }));
  }
  async createSignedUrl(e, t, n) {
    const r = this;
    return r.handleOperation(async () => {
      let i = r._getFinalPath(e);
      let a = typeof n?.transform == `object` && n.transform !== null && Object.keys(n.transform).length > 0;
      let o = await post(r.fetch, `${r.url}/object/sign/${i}`, {
        expiresIn: t,
        ...(a ? {
          transform: n.transform
        } : {}),
        ...(!(n?.versionId == null) ? {
          versionId: n.versionId
        } : {})
      }, {
        headers: r.headers
      });
      let s = new URLSearchParams();
      if (n?.download) {
        s.set(`download`, n.download === true ? `` : n.download);
      }
      if (n?.cacheNonce != null) {
        s.set(`cacheNonce`, String(n.cacheNonce));
      }
      let c = s.toString();
      return {
        signedUrl: encodeURI(`${r.url}${o.signedURL}${c ? `&${c}` : ``}`)
      };
    });
  }
  async createSignedUrls(paths, t, n) {
    const r = this;
    return r.handleOperation(async () => {
      let i = await post(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
        expiresIn: t,
        paths
      }, {
        headers: r.headers
      });
      let a = new URLSearchParams();
      if (n?.download) {
        a.set(`download`, n.download === true ? `` : n.download);
      }
      if (n?.cacheNonce != null) {
        a.set(`cacheNonce`, String(n.cacheNonce));
      }
      let o = a.toString();
      return i.map(e => ({
        ...e,
        signedUrl: e.signedURL ? encodeURI(`${r.url}${e.signedURL}${o ? `&${o}` : ``}`) : null
      }));
    });
  }
  download(e, t, n) {
    let r = typeof t?.transform == `object` && t.transform !== null && Object.keys(t.transform).length > 0 ? `render/image/authenticated` : `object`;
    let i = new URLSearchParams();
    if (t?.transform) {
      this.applyTransformOptsToQuery(i, t.transform);
    }
    if (t?.cacheNonce != null) {
      i.set(`cacheNonce`, String(t.cacheNonce));
    }
    if (t?.versionId != null) {
      i.set(`versionId`, String(t.versionId));
    }
    let a = i.toString();
    let o = this._getFinalPath(e);
    return new ln(() => get(this.fetch, `${this.url}/${r}/${o}${a ? `?${a}` : ``}`, {
      headers: this.headers,
      noResolveJson: true
    }, n), this.shouldThrowOnError);
  }
  async info(e, t) {
    const n = this;
    let r = n._getFinalPath(e);
    let i = new URLSearchParams();
    if (t?.versionId != null) {
      i.set(`versionId`, String(t.versionId));
    }
    let a = i.toString();
    return n.handleOperation(async () => qt(await get(n.fetch, `${n.url}/object/info/${r}${a ? `?${a}` : ``}`, {
      headers: n.headers
    })));
  }
  async exists(e) {
    const t = this;
    let n = t._getFinalPath(e);
    try {
      await head(t.fetch, `${t.url}/object/${n}`, {
        headers: t.headers
      });
      return {
        data: true,
        error: null
      };
    } catch (error) {
      if (t.shouldThrowOnError) {
        throw error;
      }
      if (Bt(error)) {
        let t = error instanceof Vt ? error.status : error instanceof Ht ? error.originalError?.status : undefined;
        if (t !== undefined && [400, 404].includes(t)) {
          return {
            data: false,
            error
          };
        }
      }
      throw error;
    }
  }
  getPublicUrl(e, t) {
    let n = this._getFinalPath(e);
    let r = new URLSearchParams();
    if (t?.download) {
      r.set(`download`, t.download === true ? `` : t.download);
    }
    if (t?.transform) {
      this.applyTransformOptsToQuery(r, t.transform);
    }
    if (t?.cacheNonce != null) {
      r.set(`cacheNonce`, String(t.cacheNonce));
    }
    if (t?.versionId != null) {
      r.set(`versionId`, String(t.versionId));
    }
    let i = r.toString();
    let a = typeof t?.transform == `object` && t.transform !== null && Object.keys(t.transform).length > 0 ? `render/image` : `object`;
    return {
      data: {
        publicUrl: encodeURI(`${this.url}/${a}/public/${n}`) + (i ? `?${i}` : ``)
      }
    };
  }
  async remove(prefixes) {
    const t = this;
    return t.handleOperation(async () => await remove(t.fetch, `${t.url}/object/${t.bucketId}`, {
      prefixes
    }, {
      headers: t.headers
    }));
  }
  async purgeCache(e, t, n) {
    const r = this;
    return r.handleOperation(async () => {
      let i = Yt(r._getFinalPath(e));
      let a = new URLSearchParams();
      if (t?.transformations) {
        a.set(`transformations`, `true`);
      }
      let o = a.toString();
      return await remove(r.fetch, `${r.url}/cdn/${i}${o ? `?${o}` : ``}`, {}, {
        headers: r.headers
      }, n);
    });
  }
  async list(e, t, n) {
    const r = this;
    return r.handleOperation(async () => {
      let sortBy = t?.sortBy ? {
        ...un.sortBy,
        ...t.sortBy
      } : un.sortBy;
      let a = {
        ...un,
        ...t,
        sortBy,
        prefix: e || ``
      };
      return await post(r.fetch, `${r.url}/object/list/${r.bucketId}`, a, {
        headers: r.headers
      }, n);
    });
  }
  async listV2(e, t) {
    const n = this;
    return n.handleOperation(async () => {
      let r = {
        ...e
      };
      return await post(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, {
        headers: n.headers
      }, t);
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    if (typeof Buffer < `u`) {
      return Buffer.from(e).toString(`base64`);
    }
    return btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, ``)}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, ``).replace(/\/+/g, `/`);
  }
  applyTransformOptsToQuery(e, t) {
    if (t.width) {
      e.set(`width`, t.width.toString());
    }
    if (t.height) {
      e.set(`height`, t.height.toString());
    }
    if (t.resize) {
      e.set(`resize`, t.resize);
    }
    if (t.format) {
      e.set(`format`, t.format);
    }
    if (t.quality) {
      e.set(`quality`, t.quality.toString());
    }
    return e;
  }
}
const pn = {
  "X-Client-Info": `storage-js/2.117.2`
};
class mn extends M {
  constructor(e, t = {}, n, r) {
    let i = new URL(e);
    if (r?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes(`storage.supabase.`)) {
      i.hostname = i.hostname.replace(`supabase.`, `storage.supabase.`);
    }
    let a = i.href.replace(/\/$/, ``);
    let o = {
      ...pn,
      ...t
    };
    super(a, o, n, `storage`);
  }
  async listBuckets(e) {
    const t = this;
    return t.handleOperation(async () => {
      let n = t.listBucketOptionsToQueryString(e);
      return await get(t.fetch, `${t.url}/bucket${n}`, {
        headers: t.headers
      });
    });
  }
  async getBucket(e) {
    const t = this;
    return t.handleOperation(async () => await get(t.fetch, `${t.url}/bucket/${e}`, {
      headers: t.headers
    }));
  }
  async createBucket(e, t = {
    public: false
  }) {
    const n = this;
    return n.handleOperation(async () => await post(n.fetch, `${n.url}/bucket`, {
      id: e,
      name: e,
      type: t.type,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes,
      versioning_status: t.versioningStatus
    }, {
      headers: n.headers
    }));
  }
  async updateBucket(e, t) {
    const n = this;
    return n.handleOperation(async () => await put(n.fetch, `${n.url}/bucket/${e}`, {
      id: e,
      name: e,
      public: t.public,
      file_size_limit: t.fileSizeLimit,
      allowed_mime_types: t.allowedMimeTypes,
      versioning_status: t.versioningStatus
    }, {
      headers: n.headers
    }));
  }
  async emptyBucket(e) {
    const t = this;
    return t.handleOperation(async () => await post(t.fetch, `${t.url}/bucket/${e}/empty`, {}, {
      headers: t.headers
    }));
  }
  async deleteBucket(e) {
    const t = this;
    return t.handleOperation(async () => await remove(t.fetch, `${t.url}/bucket/${e}`, {}, {
      headers: t.headers
    }));
  }
  async getBucketLifecycle(e) {
    const t = this;
    return t.handleOperation(async () => await get(t.fetch, t.bucketLifecycleUrl(e), {
      headers: t.headers
    }));
  }
  async updateBucketLifecycle(e, t) {
    const n = this;
    return n.handleOperation(async () => await put(n.fetch, n.bucketLifecycleUrl(e), t, {
      headers: n.headers
    }));
  }
  async deleteBucketLifecycle(e) {
    const t = this;
    return t.handleOperation(async () => await remove(t.fetch, t.bucketLifecycleUrl(e), {}, {
      headers: t.headers
    }));
  }
  async purgeBucketCache(e, t, n) {
    const r = this;
    return r.handleOperation(async () => {
      let i = new URLSearchParams();
      if (t?.transformations) {
        i.set(`transformations`, `true`);
      }
      let a = i.toString();
      return await remove(r.fetch, `${r.url}/cdn/${Yt(e)}${a ? `?${a}` : ``}`, {}, {
        headers: r.headers
      }, n);
    });
  }
  bucketLifecycleUrl(e) {
    return `${this.url}/bucket/${Yt(e)}/lifecycle`;
  }
  listBucketOptionsToQueryString(e) {
    let t = {};
    if (e) {
      if (`limit` in e) {
        t.limit = String(e.limit);
      }
      if (`offset` in e) {
        t.offset = String(e.offset);
      }
      if (e.search) {
        t.search = e.search;
      }
      if (e.sortColumn) {
        t.sortColumn = e.sortColumn;
      }
      if (e.sortOrder) {
        t.sortOrder = e.sortOrder;
      }
    }
    if (Object.keys(t).length > 0) {
      return `?` + new URLSearchParams(t).toString();
    }
    return ``;
  }
}
class hn extends M {
  constructor(e, t = {}, n) {
    let r = e.replace(/\/$/, ``);
    let i = {
      ...pn,
      ...t
    };
    super(r, i, n, `storage`);
  }
  async createBucket(name) {
    const t = this;
    return t.handleOperation(async () => await post(t.fetch, `${t.url}/bucket`, {
      name
    }, {
      headers: t.headers
    }));
  }
  async listBuckets(e) {
    const t = this;
    return t.handleOperation(async () => {
      let n = new URLSearchParams();
      if (e?.limit !== undefined) {
        n.set(`limit`, e.limit.toString());
      }
      if (e?.offset !== undefined) {
        n.set(`offset`, e.offset.toString());
      }
      if (e?.sortColumn) {
        n.set(`sortColumn`, e.sortColumn);
      }
      if (e?.sortOrder) {
        n.set(`sortOrder`, e.sortOrder);
      }
      if (e?.search) {
        n.set(`search`, e.search);
      }
      let r = n.toString();
      let i = r ? `${t.url}/bucket?${r}` : `${t.url}/bucket`;
      return await get(t.fetch, i, {
        headers: t.headers
      });
    });
  }
  async deleteBucket(e) {
    const t = this;
    return t.handleOperation(async () => await remove(t.fetch, `${t.url}/bucket/${e}`, {}, {
      headers: t.headers
    }));
  }
  from(catalogName) {
    const t = this;
    if (!Jt(catalogName)) {
      throw new zt(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);
    }
    let n = new Nt({
      baseUrl: this.url,
      catalogName,
      auth: {
        type: `custom`,
        getHeaders: async () => t.headers
      },
      fetch: this.fetch
    });
    let shouldThrowOnError = this.shouldThrowOnError;
    return new Proxy(n, {
      get(e, t) {
        let n = e[t];
        if (typeof n == `function`) {
          return async (...t) => {
            try {
              return {
                data: await n.apply(e, t),
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
        return n;
      }
    });
  }
}
class gn extends M {
  constructor(e, t = {}, n) {
    let r = e.replace(/\/$/, ``);
    let i = {
      ...pn,
      "Content-Type": `application/json`,
      ...t
    };
    super(r, i, n, `vectors`);
  }
  async createIndex(e) {
    const t = this;
    return t.handleOperation(async () => (await j.post(t.fetch, `${t.url}/CreateIndex`, e, {
      headers: t.headers
    })) || {});
  }
  async getIndex(e, t) {
    const n = this;
    return n.handleOperation(async () => await j.post(n.fetch, `${n.url}/GetIndex`, {
      vectorBucketName: e,
      indexName: t
    }, {
      headers: n.headers
    }));
  }
  async listIndexes(e) {
    const t = this;
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/ListIndexes`, e, {
      headers: t.headers
    }));
  }
  async deleteIndex(e, t) {
    const n = this;
    return n.handleOperation(async () => (await j.post(n.fetch, `${n.url}/DeleteIndex`, {
      vectorBucketName: e,
      indexName: t
    }, {
      headers: n.headers
    })) || {});
  }
}
class _n extends M {
  constructor(e, t = {}, n) {
    let r = e.replace(/\/$/, ``);
    let i = {
      ...pn,
      "Content-Type": `application/json`,
      ...t
    };
    super(r, i, n, `vectors`);
  }
  async putVectors(e) {
    const t = this;
    if (e.vectors.length < 1 || e.vectors.length > 500) {
      throw Error(`Vector batch size must be between 1 and 500 items`);
    }
    return t.handleOperation(async () => (await j.post(t.fetch, `${t.url}/PutVectors`, e, {
      headers: t.headers
    })) || {});
  }
  async getVectors(e) {
    const t = this;
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/GetVectors`, e, {
      headers: t.headers
    }));
  }
  async listVectors(e) {
    const t = this;
    if (e.segmentCount !== undefined) {
      if (e.segmentCount < 1 || e.segmentCount > 16) {
        throw Error(`segmentCount must be between 1 and 16`);
      }
      if (e.segmentIndex !== undefined && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount)) {
        throw Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
      }
    }
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/ListVectors`, e, {
      headers: t.headers
    }));
  }
  async queryVectors(e) {
    const t = this;
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/QueryVectors`, e, {
      headers: t.headers
    }));
  }
  async deleteVectors(e) {
    const t = this;
    if (e.keys.length < 1 || e.keys.length > 500) {
      throw Error(`Keys batch size must be between 1 and 500 items`);
    }
    return t.handleOperation(async () => (await j.post(t.fetch, `${t.url}/DeleteVectors`, e, {
      headers: t.headers
    })) || {});
  }
}
class vn extends M {
  constructor(e, t = {}, n) {
    let r = e.replace(/\/$/, ``);
    let i = {
      ...pn,
      "Content-Type": `application/json`,
      ...t
    };
    super(r, i, n, `vectors`);
  }
  async createBucket(e) {
    const t = this;
    return t.handleOperation(async () => (await j.post(t.fetch, `${t.url}/CreateVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    })) || {});
  }
  async getBucket(e) {
    const t = this;
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/GetVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    }));
  }
  async listBuckets(e = {}) {
    const t = this;
    return t.handleOperation(async () => await j.post(t.fetch, `${t.url}/ListVectorBuckets`, e, {
      headers: t.headers
    }));
  }
  async deleteBucket(e) {
    const t = this;
    return t.handleOperation(async () => (await j.post(t.fetch, `${t.url}/DeleteVectorBucket`, {
      vectorBucketName: e
    }, {
      headers: t.headers
    })) || {});
  }
}
class yn extends vn {
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  from(e) {
    return new bn(this.url, this.headers, e, this.fetch);
  }
  async createBucket(e) {
    const t = () => super.createBucket;
    const n = this;
    return t().call(n, e);
  }
  async getBucket(e) {
    const t = () => super.getBucket;
    const n = this;
    return t().call(n, e);
  }
  async listBuckets(e = {}) {
    const t = () => super.listBuckets;
    const n = this;
    return t().call(n, e);
  }
  async deleteBucket(e) {
    const t = () => super.deleteBucket;
    const n = this;
    return t().call(n, e);
  }
}
var bn = class extends gn {
  constructor(e, t, n, r) {
    super(e, t, r);
    this.vectorBucketName = n;
  }
  async createIndex(e) {
    const t = () => super.createIndex;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName
    });
  }
  async listIndexes(e = {}) {
    const t = () => super.listIndexes;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName
    });
  }
  async getIndex(e) {
    const t = () => super.getIndex;
    const n = this;
    return t().call(n, n.vectorBucketName, e);
  }
  async deleteIndex(e) {
    const t = () => super.deleteIndex;
    const n = this;
    return t().call(n, n.vectorBucketName, e);
  }
  index(e) {
    return new xn(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
};
var xn = class extends _n {
  constructor(e, t, n, r, i) {
    super(e, t, i);
    this.vectorBucketName = n;
    this.indexName = r;
  }
  async putVectors(e) {
    const t = () => super.putVectors;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    });
  }
  async getVectors(e) {
    const t = () => super.getVectors;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    });
  }
  async listVectors(e = {}) {
    const t = () => super.listVectors;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    });
  }
  async queryVectors(e) {
    const t = () => super.queryVectors;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    });
  }
  async deleteVectors(e) {
    const t = () => super.deleteVectors;
    const n = this;
    return t().call(n, {
      ...e,
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    });
  }
};
class Sn extends mn {
  constructor(e, t = {}, n, r) {
    super(e, t, n, r);
  }
  from(e) {
    return new fn(this.url, this.headers, e, this.fetch);
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
}
const Cn = `2.117.2`;
const N = 30000;
const wn = 3 * N;
const Tn = 2 * N;
const url = `http://localhost:9999`;
const Dn = `supabase.auth.token`;
const On = {
  "X-Client-Info": `gotrue-js/${Cn}`
};
const kn = `X-Supabase-Api-Version`;
const An = {
  "2024-01-01": {
    timestamp: Date.parse(`2024-01-01T00:00:00.0Z`),
    name: `2024-01-01`
  }
};
const jn = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
const Mn = `sb_flow_id`;
class Nn extends Error {
  constructor(e, t, n) {
    super(e);
    this.__isAuthError = true;
    this.name = `AuthError`;
    this.status = t;
    this.code = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function P(e) {
  return typeof e == `object` && !!e && `__isAuthError` in e;
}
class Pn extends Nn {
  constructor(e, t, n) {
    super(e, t, n);
    this.name = `AuthApiError`;
    this.status = t;
    this.code = n;
  }
}
function Fn(error) {
  return P(error) && error.name === `AuthApiError`;
}
class F extends Nn {
  constructor(e, t) {
    super(e);
    this.name = `AuthUnknownError`;
    this.originalError = t;
  }
}
class I extends Nn {
  constructor(e, t, n, r) {
    super(e, n, r);
    this.name = t;
    this.status = n;
  }
}
class L extends I {
  constructor() {
    super(`Auth session missing!`, `AuthSessionMissingError`, 400, undefined);
  }
}
function In(error) {
  return P(error) && error.name === `AuthSessionMissingError`;
}
class R extends I {
  constructor() {
    super(`Auth session or user missing`, `AuthInvalidTokenResponseError`, 500, undefined);
  }
}
class Ln extends I {
  constructor(e) {
    super(e, `AuthInvalidCredentialsError`, 400, undefined);
  }
}
class Rn extends I {
  constructor(e, t = null) {
    super(e, `AuthImplicitGrantRedirectError`, 500, undefined);
    this.details = null;
    this.details = t;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      details: this.details
    };
  }
}
function zn(error) {
  return P(error) && error.name === `AuthImplicitGrantRedirectError`;
}
class Bn extends I {
  constructor(e, t = null) {
    super(e, `AuthPKCEGrantCodeExchangeError`, 500, undefined);
    this.details = null;
    this.details = t;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      details: this.details
    };
  }
}
class Vn extends I {
  constructor() {
    super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`, `AuthPKCECodeVerifierMissingError`, 400, `pkce_code_verifier_not_found`);
  }
}
class Hn extends I {
  constructor(e, t) {
    super(e, `AuthRetryableFetchError`, t, undefined);
  }
}
function Un(e) {
  return P(e) && e.name === `AuthRetryableFetchError`;
}
class Wn extends I {
  constructor(e = `Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`) {
    super(e, `AuthRefreshDiscardedError`, 409, undefined);
  }
}
function Gn(error) {
  return P(error) && error.name === `AuthRefreshDiscardedError`;
}
class Kn extends I {
  constructor(e, t, n) {
    super(e, `AuthWeakPasswordError`, t, `weak_password`);
    this.reasons = n;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      reasons: this.reasons
    };
  }
}
class qn extends I {
  constructor(e) {
    super(e, `AuthInvalidJwtError`, 400, `invalid_jwt`);
  }
}
const Jn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``);
const Yn = ` 	
\r=`.split(``);
const Xn = (() => {
  let e = Array(128);
  for (let t = 0; t < e.length; t += 1) {
    e[t] = -1;
  }
  for (let t = 0; t < Yn.length; t += 1) {
    e[Yn[t].charCodeAt(0)] = -2;
  }
  for (let t = 0; t < Jn.length; t += 1) {
    e[Jn[t].charCodeAt(0)] = t;
  }
  return e;
})();
function Zn(e, t, n) {
  if (e !== null) {
    t.queue = t.queue << 8 | e;
    for (t.queuedBits += 8; t.queuedBits >= 6;) {
      n(Jn[t.queue >> t.queuedBits - 6 & 63]);
      t.queuedBits -= 6;
    }
  } else if (t.queuedBits > 0) {
    t.queue <<= 6 - t.queuedBits;
    for (t.queuedBits = 6; t.queuedBits >= 6;) {
      n(Jn[t.queue >> t.queuedBits - 6 & 63]);
      t.queuedBits -= 6;
    }
  }
}
function Qn(e, t, n) {
  let r = Xn[e];
  if (r > -1) {
    t.queue = t.queue << 6 | r;
    for (t.queuedBits += 6; t.queuedBits >= 8;) {
      n(t.queue >> t.queuedBits - 8 & 255);
      t.queuedBits -= 8;
    }
  } else if (r === -2) {
    return;
  } else {
    throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`);
  }
}
function $n(e) {
  let t = [];
  let n = e => {
    t.push(String.fromCodePoint(e));
  };
  let r = {
    utf8seq: 0,
    codepoint: 0
  };
  let i = {
    queue: 0,
    queuedBits: 0
  };
  let a = e => {
    nr(e, r, n);
  };
  for (let t = 0; t < e.length; t += 1) {
    Qn(e.charCodeAt(t), i, a);
  }
  return t.join(``);
}
function er(e, t) {
  if (e <= 127) {
    t(e);
    return;
  }
  if (e <= 2047) {
    t(192 | e >> 6);
    t(128 | e & 63);
    return;
  }
  if (e <= 65535) {
    t(224 | e >> 12);
    t(128 | e >> 6 & 63);
    t(128 | e & 63);
    return;
  }
  if (e <= 1114111) {
    t(240 | e >> 18);
    t(128 | e >> 12 & 63);
    t(128 | e >> 6 & 63);
    t(128 | e & 63);
    return;
  }
  throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`);
}
function tr(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      let t = (r - 55296) * 1024 & 65535;
      r = (e.charCodeAt(n + 1) - 56320 & 65535 | t) + 65536;
      n += 1;
    }
    er(r, t);
  }
}
function nr(e, t, n) {
  if (t.utf8seq === 0) {
    if (e <= 127) {
      n(e);
      return;
    }
    for (let n = 1; n < 6; n += 1) {
      if (!(e >> 7 - n & 1)) {
        t.utf8seq = n;
        break;
      }
    }
    if (t.utf8seq === 2) {
      t.codepoint = e & 31;
    } else if (t.utf8seq === 3) {
      t.codepoint = e & 15;
    } else if (t.utf8seq === 4) {
      t.codepoint = e & 7;
    } else {
      throw Error(`Invalid UTF-8 sequence`);
    }
    --t.utf8seq;
  } else if (t.utf8seq > 0) {
    if (e <= 127) {
      throw Error(`Invalid UTF-8 sequence`);
    }
    t.codepoint = t.codepoint << 6 | e & 63;
    --t.utf8seq;
    if (t.utf8seq === 0) {
      n(t.codepoint);
    }
  }
}
function z(e) {
  let t = [];
  let n = {
    queue: 0,
    queuedBits: 0
  };
  let r = e => {
    t.push(e);
  };
  for (let t = 0; t < e.length; t += 1) {
    Qn(e.charCodeAt(t), n, r);
  }
  return new Uint8Array(t);
}
function rr(e) {
  let t = [];
  tr(e, e => t.push(e));
  return new Uint8Array(t);
}
function B(e) {
  let t = [];
  let n = {
    queue: 0,
    queuedBits: 0
  };
  let r = e => {
    t.push(e);
  };
  e.forEach(e => Zn(e, n, r));
  Zn(null, n, r);
  return t.join(``);
}
function ir(expires_in) {
  return Math.round(Date.now() / 1000) + expires_in;
}
function ar() {
  return Symbol(`auth-callback`);
}
const V = () => typeof window < `u` && typeof document < `u`;
const H = {
  tested: false,
  writable: false
};
const or = () => {
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
  let e = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(e, e);
    globalThis.localStorage.removeItem(e);
    H.tested = true;
    H.writable = true;
  } catch {
    H.tested = true;
    H.writable = false;
  }
  return H.writable;
};
function sr(href) {
  let t = {};
  let n = new URL(href);
  if (n.hash && n.hash[0] === `#`) {
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((e, n) => {
        t[n] = e;
      });
    } catch {}
  }
  n.searchParams.forEach((e, n) => {
    t[n] = e;
  });
  return t;
}
const cr = e => {
  if (e) {
    return (...t) => e(...t);
  }
  return (...e) => fetch(...e);
};
const lr = e => typeof e == `object` && !!e && `status` in e && `ok` in e && `json` in e && typeof e.json == `function`;
const U = async (e, t, n) => {
  await e.setItem(t, JSON.stringify(n));
};
const W = async (e, t) => {
  let n = await e.getItem(t);
  if (!n) {
    return null;
  }
  try {
    return JSON.parse(n);
  } catch {
    return null;
  }
};
const G = async (e, t) => {
  await e.removeItem(t);
};
const ur = class e {
  constructor() {
    this.promise = new e.promiseConstructor((e, t) => {
      this.resolve = e;
      this.reject = t;
    });
  }
};
ur.promiseConstructor = Promise;
function dr(e) {
  let t = e.split(`.`);
  if (t.length !== 3) {
    throw new qn(`Invalid JWT structure`);
  }
  for (let e = 0; e < t.length; e++) {
    if (!jn.test(t[e])) {
      throw new qn(`JWT not in base64url format`);
    }
  }
  return {
    header: JSON.parse($n(t[0])),
    payload: JSON.parse($n(t[1])),
    signature: z(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function fr(e) {
  return await new Promise(resolve => {
    setTimeout(() => resolve(null), e);
  });
}
function pr(e, t) {
  return new Promise((resolve, reject) => {
    (async () => {
      for (let i = 0; i < Infinity; i++) {
        try {
          let r = await e(i);
          if (!t(i, null, r)) {
            resolve(r);
            return;
          }
        } catch (error) {
          if (!t(i, error)) {
            reject(error);
            return;
          }
        }
      }
    })();
  });
}
function mr(e) {
  return (`0` + e.toString(16)).substr(-2);
}
function hr() {
  let e = new Uint32Array(56);
  if (typeof crypto > `u`) {
    let e = ``;
    for (let t = 0; t < 56; t++) {
      e += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random() * 66));
    }
    return e;
  }
  crypto.getRandomValues(e);
  return Array.from(e, mr).join(``);
}
async function gr(e) {
  let t = new TextEncoder().encode(e);
  let n = await crypto.subtle.digest(`SHA-256`, t);
  let r = new Uint8Array(n);
  return Array.from(r).map(e => String.fromCharCode(e)).join(``);
}
async function _r(e) {
  if (typeof crypto > `u` || crypto.subtle === undefined || typeof TextEncoder > `u`) {
    console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`);
    return e;
  }
  let t = await gr(e);
  return btoa(t).replace(/\+/g, `-`).replace(/\//g, `_`).replace(/=+$/, ``);
}
const vr = /^[a-zA-Z0-9_-]{8,64}$/;
function yr(e) {
  if (typeof e == `string` && vr.test(e)) {
    return e;
  }
  return null;
}
function br() {
  if (typeof crypto < `u` && typeof crypto.getRandomValues == `function`) {
    let e = new Uint8Array(16);
    crypto.getRandomValues(e);
    return Array.from(e, mr).join(``);
  }
  let e = ``;
  for (let t = 0; t < 32; t++) {
    e += Math.floor(Math.random() * 16).toString(16);
  }
  return e;
}
const xr = (e, t) => `${e}-flow-${t}-code-verifier`;
const Sr = e => `${e}-flows-code-verifier`;
async function Cr(e, t) {
  let n = await W(e, Sr(t));
  if (Array.isArray(n)) {
    return n.filter(e => yr(e) !== null);
  }
  return [];
}
async function wr(storage, storageKey, n, r, i) {
  await U(storage, xr(storageKey, n), r);
  let a = (await Cr(storage, storageKey)).filter(e => e !== n);
  for (a.push(n); a.length > 5;) {
    let n = a.shift();
    await G(storage, xr(storageKey, n));
    i?.(n);
  }
  await U(storage, Sr(storageKey), a);
  await U(storage, `${storageKey}-code-verifier`, r);
}
async function Tr(storage, storageKey, n) {
  if (n) {
    let r = await W(storage, xr(storageKey, n));
    return {
      verifier: typeof r == `string` ? r : null,
      flowId: n
    };
  }
  let r = await W(storage, `${storageKey}-code-verifier`);
  return {
    verifier: typeof r == `string` ? r : null,
    flowId: null
  };
}
async function K(storage, storageKey, n) {
  let r = `${storageKey}-code-verifier`;
  if (!n) {
    await G(storage, r);
    return;
  }
  let i = xr(storageKey, n);
  let a = await W(storage, i);
  await G(storage, i);
  let o = await Cr(storage, storageKey);
  let s = o.filter(e => e !== n);
  if (s.length !== o.length) {
    if (s.length > 0) {
      await U(storage, Sr(storageKey), s);
    } else {
      await G(storage, Sr(storageKey));
    }
  }
  if (a != null && a === (await W(storage, r))) {
    await G(storage, r);
  }
}
async function Er(storage, storageKey) {
  let n = await Cr(storage, storageKey);
  for (let r of n) {
    await G(storage, xr(storageKey, r));
  }
  await G(storage, Sr(storageKey));
  await G(storage, `${storageKey}-code-verifier`);
}
function Dr(e, t) {
  let n = e.indexOf(`#`);
  let r = n === -1 ? e : e.slice(0, n);
  let i = n === -1 ? `` : e.slice(n);
  let a = r.indexOf(`?`);
  if (a !== -1) {
    let e = r.slice(0, a);
    let t = r.slice(a + 1).split(`&`).filter(e => e !== `` && e !== `sb_flow_id` && !e.startsWith(`sb_flow_id=`));
    r = t.length > 0 ? `${e}?${t.join(`&`)}` : e;
  }
  let o = r.includes(`?`) ? `&` : `?`;
  return `${r}${o}${Mn}=${encodeURIComponent(t)}${i}`;
}
async function Or(storage, storageKey, n = false, r) {
  let i = hr();
  let a = i;
  if (n) {
    a += `/recovery`;
  }
  let o = br();
  await wr(storage, storageKey, o, a, r);
  let s = await _r(i);
  return [s, i === s ? `plain` : `s256`, o];
}
const kr = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ar(e) {
  let t = e.headers.get(kn);
  if (!t || !t.match(kr)) {
    return null;
  }
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function jr(exp) {
  if (!exp) {
    throw Error(`Missing exp claim`);
  }
  if (exp <= Math.floor(Date.now() / 1000)) {
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
const Nr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function q(e) {
  if (!Nr.test(e)) {
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
    get: (e, t) => {
      if (t === `__isUserNotAvailableProxy`) {
        return true;
      }
      if (typeof t == `symbol`) {
        let e = t.toString();
        if (e === `Symbol(Symbol.toPrimitive)` || e === `Symbol(Symbol.toStringTag)` || e === `Symbol(util.inspect.custom)`) {
          return;
        }
      }
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, t) => {
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, t) => {
      throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Ir(user, t) {
  return new Proxy(user, {
    get: (e, n, r) => {
      if (n === `__isInsecureUserWarningProxy`) {
        return true;
      }
      if (typeof n == `symbol`) {
        let t = n.toString();
        if (t === `Symbol(Symbol.toPrimitive)` || t === `Symbol(Symbol.toStringTag)` || t === `Symbol(util.inspect.custom)` || t === `Symbol(nodejs.util.inspect.custom)`) {
          return Reflect.get(e, n, r);
        }
      }
      if (!t.value && typeof n == `string`) {
        console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`);
        t.value = true;
      }
      return Reflect.get(e, n, r);
    }
  });
}
function Lr(e) {
  return JSON.parse(JSON.stringify(e));
}
const J = e => {
  if (typeof e == `object` && e) {
    let t = e;
    if (typeof t.msg == `string`) {
      return t.msg;
    }
    if (typeof t.message == `string`) {
      return t.message;
    }
    if (typeof t.error_description == `string`) {
      return t.error_description;
    }
    if (typeof t.error == `string`) {
      return t.error;
    }
  }
  return JSON.stringify(e);
};
const Rr = [500, 501, 502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530];
async function zr(e) {
  if (!lr(e)) {
    throw new Hn(J(e), 0);
  }
  let t;
  try {
    t = await e.json();
  } catch (error) {
    throw Rr.includes(e.status) ? new Hn(e.statusText || `HTTP ${e.status}`, e.status) : new F(J(error), error);
  }
  if (Rr.includes(e.status)) {
    throw new Hn(J(t), e.status);
  }
  let n;
  let r = Ar(e);
  if (r && r.getTime() >= An[`2024-01-01`].timestamp && typeof t == `object` && t && typeof t.code == `string`) {
    n = t.code;
  } else if (typeof t == `object` && t && typeof t.error_code == `string`) {
    n = t.error_code;
  }
  if (!n) {
    if (typeof t == `object` && t && typeof t.weak_password == `object` && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((acc, reason) => acc && typeof reason == `string`, true)) {
      throw new Kn(J(t), e.status, t.weak_password.reasons);
    }
  } else if (n === `weak_password`) {
    throw new Kn(J(t), e.status, t.weak_password?.reasons || []);
  } else if (n === `session_not_found`) {
    throw new L();
  }
  throw new Pn(J(t), e.status || 500, n);
}
const Br = (e, t, n, r) => {
  let i = {
    method: e,
    headers: t?.headers || {}
  };
  if (e === `GET`) {
    return i;
  }
  i.headers = {
    "Content-Type": `application/json;charset=UTF-8`,
    ...t?.headers
  };
  i.body = JSON.stringify(r);
  return {
    ...i,
    ...n
  };
};
async function Y(fetch, t, n, r) {
  let i = {
    ...r?.headers
  };
  if (!i[`X-Supabase-Api-Version`]) {
    i[kn] = An[`2024-01-01`].name;
  }
  if (r?.jwt) {
    i.Authorization = `Bearer ${r.jwt}`;
  }
  let a = r?.query ?? {};
  if (r?.redirectTo) {
    a.redirect_to = r.redirectTo;
  }
  let o = await Vr(fetch, t, n + (Object.keys(a).length ? `?` + new URLSearchParams(a).toString() : ``), {
    headers: i,
    noResolveJson: r?.noResolveJson
  }, {}, r?.body);
  if (r?.xform) {
    return r?.xform(o);
  }
  return {
    data: {
      ...o
    },
    error: null
  };
}
async function Vr(fetch, t, n, r, i, a) {
  let o = Br(t, r, i, a);
  let s;
  try {
    s = await fetch(n, {
      ...o
    });
  } catch (error) {
    throw new Hn(J(error), 0);
  }
  if (!s.ok) {
    await zr(s);
  }
  if (r?.noResolveJson) {
    return s;
  }
  try {
    return await s.json();
  } catch (error) {
    await zr(error);
  }
}
function X(e) {
  let t = null;
  if (Kr(e)) {
    t = {
      ...e
    };
    if (!e.expires_at) {
      t.expires_at = ir(e.expires_in);
    }
  }
  let n = e.user ?? (typeof e?.id == `string` ? e : null);
  return {
    data: {
      session: t,
      user: n
    },
    error: null
  };
}
function Hr(e) {
  let t = X(e);
  if (!t.error && e.weak_password && typeof e.weak_password == `object` && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == `string` && e.weak_password.reasons.reduce((acc, reason) => acc && typeof reason == `string`, true)) {
    t.data.weak_password = e.weak_password;
  }
  return t;
}
function Z(e) {
  return {
    data: {
      user: e.user ?? e
    },
    error: null
  };
}
function Ur(e) {
  return {
    data: e,
    error: null
  };
}
function Wr(e) {
  let {
    action_link,
    email_otp,
    hashed_token,
    redirect_to,
    verification_type
  } = e;
  let s = n(e, [`action_link`, `email_otp`, `hashed_token`, `redirect_to`, `verification_type`]);
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
        ...s
      }
    },
    error: null
  };
}
function Gr(e) {
  return e;
}
function Kr(e) {
  return !!e.access_token && !!e.refresh_token && !!e.expires_in;
}
const qr = [`global`, `local`, `others`];
class Jr {
  constructor({
    url = ``,
    headers = {},
    fetch,
    experimental
  }) {
    this.url = url;
    this.headers = headers;
    this.fetch = cr(fetch);
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
  async signOut(jwt, t = qr[0]) {
    if (qr.indexOf(t) < 0) {
      throw Error(`@supabase/auth-js: Parameter scope must be one of ${qr.join(`, `)}`);
    }
    try {
      await Y(this.fetch, `POST`, `${this.url}/logout?scope=${t}`, {
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
  async inviteUserByEmail(e, t = {}) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/invite`, {
        body: {
          email: e,
          data: t.data
        },
        headers: this.headers,
        redirectTo: t.redirectTo,
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
  async generateLink(e) {
    try {
      let {
        options
      } = e;
      let r = n(e, [`options`]);
      let i = {
        ...r,
        ...options
      };
      if (`newEmail` in r) {
        i.new_email = r?.newEmail;
        delete i.newEmail;
      }
      return await Y(this.fetch, `POST`, `${this.url}/admin/generate_link`, {
        body: i,
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
  async createUser(e) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/users`, {
        body: e,
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
  async listUsers(e) {
    try {
      let t = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      let n = await Y(this.fetch, `GET`, `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: e?.page?.toString() ?? ``,
          per_page: e?.perPage?.toString() ?? ``
        },
        xform: Gr
      });
      if (n.error) {
        throw n.error;
      }
      let r = await n.json();
      let i = n.headers.get(`x-total-count`) ?? 0;
      let a = n.headers.get(`link`)?.split(`,`) ?? [];
      if (a.length > 0) {
        a.forEach(e => {
          let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1));
          let r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
          t[`${r}Page`] = n;
        });
        t.total = parseInt(i);
      }
      return {
        data: {
          ...r,
          ...t
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
  async getUserById(e) {
    q(e);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e}`, {
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
  async updateUserById(e, t) {
    q(e);
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/users/${e}`, {
        body: t,
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
  async deleteUser(e, should_soft_delete = false) {
    q(e);
    try {
      return await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e}`, {
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
  async _listFactors(e) {
    q(e.userId);
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `GET`, `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: factors => ({
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
  async _deleteFactor(e) {
    q(e.userId);
    q(e.id);
    try {
      return {
        data: await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
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
  async _listOAuthClients(e) {
    try {
      let t = {
        nextPage: null,
        lastPage: 0,
        total: 0
      };
      let n = await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: true,
        query: {
          page: e?.page?.toString() ?? ``,
          per_page: e?.perPage?.toString() ?? ``
        },
        xform: Gr
      });
      if (n.error) {
        throw n.error;
      }
      let r = await n.json();
      let i = n.headers.get(`x-total-count`) ?? 0;
      let a = n.headers.get(`link`)?.split(`,`) ?? [];
      if (a.length > 0) {
        a.forEach(e => {
          let n = parseInt(e.split(`;`)[0].split(`=`)[1].substring(0, 1));
          let r = JSON.parse(e.split(`;`)[1].split(`=`)[1]);
          t[`${r}Page`] = n;
        });
        t.total = parseInt(i);
      }
      return {
        data: {
          ...r,
          ...t
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
  async _createOAuthClient(e) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _getOAuthClient(e) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _updateOAuthClient(e, t) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/oauth/clients/${e}`, {
        body: t,
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _deleteOAuthClient(e) {
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/oauth/clients/${e}`, {
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
  async _regenerateOAuthClientSecret(e) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _listCustomProviders(e) {
    try {
      let query = {};
      if (e?.type) {
        query.type = e.type;
      }
      return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query,
        xform: e => ({
          data: {
            providers: e?.providers ?? []
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
  async _createCustomProvider(e) {
    try {
      return await Y(this.fetch, `POST`, `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _getCustomProvider(e) {
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _updateCustomProvider(e, t) {
    try {
      return await Y(this.fetch, `PUT`, `${this.url}/admin/custom-providers/${e}`, {
        body: t,
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _deleteCustomProvider(e) {
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/custom-providers/${e}`, {
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
  async _adminListPasskeys(e) {
    q(e.userId);
    try {
      return await Y(this.fetch, `GET`, `${this.url}/admin/users/${e.userId}/passkeys`, {
        headers: this.headers,
        xform: e => ({
          data: e,
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
  async _adminDeletePasskey(e) {
    q(e.userId);
    q(e.passkeyId);
    try {
      await Y(this.fetch, `DELETE`, `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, {
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
}
function Yr(e = {}) {
  return {
    getItem: t => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: t => {
      delete e[t];
    }
  };
}
if (globalThis && or() && globalThis.localStorage) {
  globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);
}
class Xr extends Error {
  constructor(e) {
    super(e);
    this.isAcquireTimeout = true;
  }
}
function Zr() {
  if (typeof globalThis != `object`) {
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
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
function Qr(e) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(e)) {
    throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);
  }
  return e.toLowerCase();
}
function $r(e) {
  return parseInt(e, 16);
}
function ei(e) {
  let t = new TextEncoder().encode(e);
  return `0x` + Array.from(t, e => e.toString(16).padStart(2, `0`)).join(``);
}
function ti(e) {
  let {
    chainId,
    domain,
    expirationTime,
    issuedAt = new Date(),
    nonce,
    notBefore,
    requestId,
    resources,
    scheme,
    uri,
    version
  } = e;
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
  if (version !== `1`) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${version}`);
  }
  if (e.statement?.includes(`
`)) {
    throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);
  }
  let f = Qr(e.address);
  let p = `${scheme ? `${scheme}://${domain}` : domain} wants you to sign in with your Ethereum account:
${f}

${e.statement ? `${e.statement}
` : ``}`;
  let m = `URI: ${uri}
Version: ${version}
Chain ID: ${chainId}${nonce ? `
Nonce: ${nonce}` : ``}
Issued At: ${issuedAt.toISOString()}`;
  if (expirationTime) {
    m += `
Expiration Time: ${expirationTime.toISOString()}`;
  }
  if (notBefore) {
    m += `
Not Before: ${notBefore.toISOString()}`;
  }
  if (requestId) {
    m += `
Request ID: ${requestId}`;
  }
  if (resources) {
    let e = `
Resources:`;
    for (let t of resources) {
      if (!t || typeof t != `string`) {
        throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);
      }
      e += `
- ${t}`;
    }
    m += e;
  }
  return `${p}
${m}`;
}
class Q extends Error {
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
    this.name = name ?? (cause instanceof Error ? cause.name : undefined) ?? `Unknown Error`;
    this.code = code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class ni extends Q {
  constructor(message, t) {
    super({
      code: `ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,
      cause: t,
      message
    });
    this.name = `WebAuthnUnknownError`;
    this.originalError = t;
  }
}
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
    if (publicKey.pubKeyCredParams.filter(e => e.type === `public-key`).length === 0) {
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
    let t = window.location.hostname;
    if (!ui(t)) {
      return new Q({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: error
      });
    }
    if (publicKey.rp.id !== t) {
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
    let t = window.location.hostname;
    if (!ui(t)) {
      return new Q({
        message: `${window.location.hostname} is an invalid domain`,
        code: `ERROR_INVALID_DOMAIN`,
        cause: error
      });
    }
    if (publicKey.rpId !== t) {
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
const ai = new class {
  createNewAbortSignal() {
    if (this.controller) {
      let e = Error(`Cancelling existing WebAuthn API call for new one`);
      e.name = `AbortError`;
      this.controller.abort(e);
    }
    let e = new AbortController();
    this.controller = e;
    return e.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      let e = Error(`Manually cancelling existing WebAuthn API call`);
      e.name = `AbortError`;
      this.controller.abort(e);
      this.controller = undefined;
    }
  }
}();
function oi(e) {
  if (!e) {
    throw Error(`Credential creation options are required`);
  }
  if (typeof PublicKeyCredential < `u` && `parseCreationOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == `function`) {
    return PublicKeyCredential.parseCreationOptionsFromJSON(e);
  }
  let {
    challenge,
    user,
    excludeCredentials
  } = e;
  let a = n(e, [`challenge`, `user`, `excludeCredentials`]);
  let buffer = z(challenge).buffer;
  let s = {
    ...user,
    id: z(user.id).buffer
  };
  let c = {
    ...a,
    challenge: buffer,
    user: s
  };
  if (excludeCredentials && excludeCredentials.length > 0) {
    c.excludeCredentials = Array(excludeCredentials.length);
    for (let e = 0; e < excludeCredentials.length; e++) {
      let excludeCredential = excludeCredentials[e];
      c.excludeCredentials[e] = {
        ...excludeCredential,
        id: z(excludeCredential.id).buffer,
        type: excludeCredential.type || `public-key`,
        transports: excludeCredential.transports
      };
    }
  }
  return c;
}
function si(e) {
  if (!e) {
    throw Error(`Credential request options are required`);
  }
  if (typeof PublicKeyCredential < `u` && `parseRequestOptionsFromJSON` in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == `function`) {
    return PublicKeyCredential.parseRequestOptionsFromJSON(e);
  }
  let {
    challenge,
    allowCredentials
  } = e;
  let i = n(e, [`challenge`, `allowCredentials`]);
  let buffer = z(challenge).buffer;
  let o = {
    ...i,
    challenge: buffer
  };
  if (allowCredentials && allowCredentials.length > 0) {
    o.allowCredentials = Array(allowCredentials.length);
    for (let e = 0; e < allowCredentials.length; e++) {
      let allowCredential = allowCredentials[e];
      o.allowCredentials[e] = {
        ...allowCredential,
        id: z(allowCredential.id).buffer,
        type: allowCredential.type || `public-key`,
        transports: allowCredential.transports
      };
    }
  }
  return o;
}
function ci(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) {
    return e.toJSON();
  }
  let t = e;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      attestationObject: B(new Uint8Array(e.response.attestationObject)),
      clientDataJSON: B(new Uint8Array(e.response.clientDataJSON))
    },
    type: `public-key`,
    clientExtensionResults: e.getClientExtensionResults(),
    authenticatorAttachment: t.authenticatorAttachment ?? undefined
  };
}
function li(e) {
  if (`toJSON` in e && typeof e.toJSON == `function`) {
    return e.toJSON();
  }
  let t = e;
  let clientExtensionResults = e.getClientExtensionResults();
  let e_response = e.response;
  return {
    id: e.id,
    rawId: e.id,
    response: {
      authenticatorData: B(new Uint8Array(e_response.authenticatorData)),
      clientDataJSON: B(new Uint8Array(e_response.clientDataJSON)),
      signature: B(new Uint8Array(e_response.signature)),
      userHandle: e_response.userHandle ? B(new Uint8Array(e_response.userHandle)) : undefined
    },
    type: `public-key`,
    clientExtensionResults,
    authenticatorAttachment: t.authenticatorAttachment ?? undefined
  };
}
function ui(e) {
  return e === `localhost` || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e);
}
function di() {
  return !!(V() && `PublicKeyCredential` in window && window.PublicKeyCredential && `credentials` in navigator && typeof navigator?.credentials?.create == `function` && typeof navigator?.credentials?.get == `function`);
}
async function fi(e) {
  try {
    let t = await navigator.credentials.create(e);
    if (t) {
      if (t instanceof PublicKeyCredential) {
        return {
          data: t,
          error: null
        };
      }
      return {
        data: null,
        error: new ni(`Browser returned unexpected credential type`, t)
      };
    }
    return {
      data: null,
      error: new ni(`Empty credential response`, t)
    };
  } catch (error) {
    return {
      data: null,
      error: ri({
        error,
        options: e
      })
    };
  }
}
async function pi(e) {
  try {
    let t = await navigator.credentials.get(e);
    if (t) {
      if (t instanceof PublicKeyCredential) {
        return {
          data: t,
          error: null
        };
      }
      return {
        data: null,
        error: new ni(`Browser returned unexpected credential type`, t)
      };
    }
    return {
      data: null,
      error: new ni(`Empty credential response`, t)
    };
  } catch (error) {
    return {
      data: null,
      error: ii({
        error,
        options: e
      })
    };
  }
}
const mi = {
  hints: [`security-key`],
  authenticatorSelection: {
    authenticatorAttachment: `cross-platform`,
    requireResidentKey: false,
    userVerification: `preferred`,
    residentKey: `discouraged`
  },
  attestation: `direct`
};
const hi = {
  userVerification: `preferred`,
  hints: [`security-key`],
  attestation: `direct`
};
function gi(...e) {
  let t = e => typeof e == `object` && !!e && !Array.isArray(e);
  let n = e => e instanceof ArrayBuffer || ArrayBuffer.isView(e);
  let r = {};
  for (let i of e) {
    if (i) {
      for (let e in i) {
        let a = i[e];
        if (a !== undefined) {
          if (Array.isArray(a)) {
            r[e] = a;
          } else if (n(a)) {
            r[e] = a;
          } else if (t(a)) {
            let n = r[e];
            r[e] = t(n) ? gi(n, a) : gi(a);
          } else {
            r[e] = a;
          }
        }
      }
    }
  }
  return r;
}
function _i(publicKey, t) {
  return gi(mi, publicKey, t || {});
}
function vi(publicKey, t) {
  return gi(hi, publicKey, t || {});
}
class yi {
  constructor(e) {
    this.client = e;
    this.enroll = this._enroll.bind(this);
    this.challenge = this._challenge.bind(this);
    this.verify = this._verify.bind(this);
    this.authenticate = this._authenticate.bind(this);
    this.register = this._register.bind(this);
  }
  async _enroll(e) {
    return this.client.mfa.enroll({
      ...e,
      factorType: `webauthn`
    });
  }
  async _challenge({
    factorId,
    webauthn,
    friendlyName,
    signal
  }, i) {
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
          let t = friendlyName;
          if (t) {
            user.name = `${user.id}:${t}`;
          } else {
            let t = (await this.client.getUser()).data.user;
            let n = t?.user_metadata?.name || t?.email || t?.id || `User`;
            user.name = `${user.id}:${n}`;
          }
        }
        user.displayName ||= user.name;
      }
      switch (data.webauthn.type) {
        case `create`:
          {
            let {
              data: data_1,
              error: error_1
            } = await fi({
              publicKey: _i(data.webauthn.credential_options.publicKey, i?.create),
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
        case `request`:
          {
            let publicKey = vi(data.webauthn.credential_options.publicKey, i?.request);
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
      rpId = typeof window < `u` ? window.location.hostname : undefined,
      rpOrigins = typeof window < `u` ? [window.location.origin] : undefined,
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
      rpId = typeof window < `u` ? window.location.hostname : undefined,
      rpOrigins = typeof window < `u` ? [window.location.origin] : undefined,
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
        await this.client.mfa.listFactors().then(t => t.data?.all.find(t => t.factor_type === `webauthn` && t.friendly_name === friendlyName && t.status === `unverified`)).then(e => {
          if (e) {
            return this.client.mfa.unenroll({
              factorId: e?.id
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
}
Zr();
const bi = {
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
  lockAcquireTimeout: 5000,
  skipAutoInitialize: false,
  experimental: {}
};
const xi = {};
let Si = false;
const Ci = class e {
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
  constructor(t) {
    this.userStorage = null;
    this.memoryStorage = null;
    this.stateChangeEmitters = new Map();
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
    let r = {
      ...bi,
      ...t
    };
    this.storageKey = r.storageKey;
    this.instanceID = e.nextInstanceID[this.storageKey] ?? 0;
    e.nextInstanceID[this.storageKey] = this.instanceID + 1;
    this.logDebugMessages = !!r.debug;
    if (typeof r.debug == `function`) {
      this.logger = r.debug;
    }
    if (this.instanceID > 0 && V()) {
      let e = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(e);
      if (this.logDebugMessages) {
        console.trace(e);
      }
    }
    this.persistSession = r.persistSession;
    this.autoRefreshToken = r.autoRefreshToken;
    this.experimental = r.experimental ?? {};
    this.admin = new Jr({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch,
      experimental: this.experimental
    });
    this.url = r.url;
    this.headers = r.headers;
    this.fetch = cr(r.fetch);
    this.detectSessionInUrl = r.detectSessionInUrl;
    this.flowType = r.flowType;
    this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader;
    this.throwOnError = r.throwOnError;
    this.lockAcquireTimeout = r.lockAcquireTimeout;
    if (r.lock != null) {
      this.lock = r.lock;
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
      if (r.storage) {
        this.storage = r.storage;
      } else if (or()) {
        this.storage = globalThis.localStorage;
      } else {
        this.memoryStorage = {};
        this.storage = Yr(this.memoryStorage);
      }
      if (r.userStorage) {
        this.userStorage = r.userStorage;
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
      this.broadcastChannel?.addEventListener(`message`, async e => {
        this._debug(`received broadcast notification from other tab or client`, e);
        if (e.data.event === `TOKEN_REFRESHED` || e.data.event === `SIGNED_IN`) {
          this.lastRefreshFailure = null;
        }
        try {
          await this._notifyAllSubscribers(e.data.event, e.data.session, false);
        } catch (error) {
          this._debug(`#broadcastChannel`, `error`, error);
        }
      });
    }
    if (!r.skipAutoInitialize) {
      this.initialize().catch(e => {
        this._debug(`#initialize()`, `error`, e);
      });
    }
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) {
      throw e.error;
    }
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Cn}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    if (this.logDebugMessages) {
      this.logger(this._logPrefix(), ...e);
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
    let e = await this.initializePromise;
    let t = this._pendingInitNotifications ?? [];
    this._pendingInitNotifications = null;
    for (let e of t) {
      await this._notifyAllSubscribers(e.event, e.session, e.broadcast);
    }
    return e;
  }
  async _initialize() {
    try {
      let e = {};
      let t = `none`;
      if (V()) {
        e = sr(window.location.href);
        if (this._isImplicitGrantCallback(e)) {
          t = `implicit`;
        } else if (await this._isPKCECallback(e)) {
          t = `pkce`;
        }
      }
      if (V() && this.detectSessionInUrl && t !== `none`) {
        let {
          data,
          error
        } = await this._getSessionFromURL(e, t);
        if (error) {
          this._debug(`#_initialize()`, `error detecting session from URL`, error);
          if (zn(error)) {
            let e = error.details?.code;
            if (e === `identity_already_exists` || e === `identity_not_found` || e === `single_identity_not_deletable`) {
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
  async signInAnonymously(e) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: e?.options?.data ?? {},
          gotrue_meta_security: {
            captcha_token: e?.options?.captchaToken
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
      let r = data.session;
      let i = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, r);
      }
      return this._returnResult({
        data: {
          user: i,
          session: r
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
  async signUp(e) {
    let t = null;
    try {
      let n;
      if (`email` in e) {
        let {
          email,
          password,
          options
        } = e;
        let o = null;
        let s = null;
        if (this.flowType === `pkce`) {
          [o, s, t] = await this._getCodeChallengeAndMethod();
        }
        n = await Y(this.fetch, `POST`, `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t),
          body: {
            email,
            password,
            data: options?.data ?? {},
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            code_challenge: o,
            code_challenge_method: s
          },
          xform: X
        });
      } else if (`phone` in e) {
        let {
          phone,
          password,
          options
        } = e;
        n = await Y(this.fetch, `POST`, `${this.url}/signup`, {
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
      } = n;
      if (error || !data) {
        await K(this.storage, this.storageKey, t);
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      let a = data.session;
      let o = data.user;
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(`SIGNED_IN`, a);
      }
      return this._returnResult({
        data: {
          user: o,
          session: a
        },
        error: null
      });
    } catch (error) {
      await K(this.storage, this.storageKey, t);
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
  async signInWithPassword(e) {
    try {
      let t;
      if (`email` in e) {
        let {
          email,
          password,
          options
        } = e;
        t = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
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
      } else if (`phone` in e) {
        let {
          phone,
          password,
          options
        } = e;
        t = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=password`, {
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
      } = t;
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
        let e = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
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
          ...(data.weak_password ? {
            weakPassword: data.weak_password
          } : null)
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
  async signInWithOAuth(e) {
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: e.options?.redirectTo,
      scopes: e.options?.scopes,
      queryParams: e.options?.queryParams,
      skipBrowserRedirect: e.options?.skipBrowserRedirect
    });
  }
  async exchangeCodeForSession(e, t) {
    await this.initializePromise;
    if (this.lock == null) {
      return this._exchangeCodeForSession(e, t);
    }
    return this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e, t));
  }
  async signInWithWeb3(e) {
    let {
      chain
    } = e;
    switch (chain) {
      case `ethereum`:
        return await this.signInWithEthereum(e);
      case `solana`:
        return await this.signInWithSolana(e);
      default:
        throw Error(`@supabase/auth-js: Unsupported chain "${chain}"`);
    }
  }
  async signInWithEthereum(e) {
    let t;
    let signature;
    if (`message` in e) {
      t = e.message;
      signature = e.signature;
    } else {
      let {
        chain,
        wallet,
        statement,
        options
      } = e;
      let s;
      if (!V()) {
        if (typeof wallet != `object` || !options?.url) {
          throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        }
        s = wallet;
      } else if (typeof wallet == `object`) {
        s = wallet;
      } else {
        let e = window;
        if (`ethereum` in e && typeof e.ethereum == `object` && `request` in e.ethereum && typeof e.ethereum.request == `function`) {
          s = e.ethereum;
        } else {
          throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`);
        }
      }
      let c = new URL(options?.url ?? window.location.href);
      let l = await s.request({
        method: `eth_requestAccounts`
      }).then(e => e).catch(() => {
        throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`);
      });
      if (!l || l.length === 0) {
        throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);
      }
      let address = Qr(l[0]);
      let chainId = options?.signInWithEthereum?.chainId;
      chainId ||= $r(await s.request({
        method: `eth_chainId`
      }));
      t = ti({
        domain: c.host,
        address,
        statement,
        uri: c.href,
        version: `1`,
        chainId,
        nonce: options?.signInWithEthereum?.nonce,
        issuedAt: options?.signInWithEthereum?.issuedAt ?? new Date(),
        expirationTime: options?.signInWithEthereum?.expirationTime,
        notBefore: options?.signInWithEthereum?.notBefore,
        requestId: options?.signInWithEthereum?.requestId,
        resources: options?.signInWithEthereum?.resources
      });
      signature = await s.request({
        method: `personal_sign`,
        params: [ei(t), address]
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
          message: t,
          signature,
          ...(e.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e.options?.captchaToken
            }
          } : null)
        },
        xform: X
      });
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
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
  async signInWithSolana(e) {
    let t;
    let n;
    if (`message` in e) {
      t = e.message;
      n = e.signature;
    } else {
      let {
        chain,
        wallet,
        statement,
        options
      } = e;
      let s;
      if (!V()) {
        if (typeof wallet != `object` || !options?.url) {
          throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);
        }
        s = wallet;
      } else if (typeof wallet == `object`) {
        s = wallet;
      } else {
        let e = window;
        if (`solana` in e && typeof e.solana == `object` && (`signIn` in e.solana && typeof e.solana.signIn == `function` || `signMessage` in e.solana && typeof e.solana.signMessage == `function`)) {
          s = e.solana;
        } else {
          throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`);
        }
      }
      let c = new URL(options?.url ?? window.location.href);
      if (`signIn` in s && s.signIn) {
        let e = await s.signIn({
          issuedAt: new Date().toISOString(),
          ...options?.signInWithSolana,
          version: `1`,
          domain: c.host,
          uri: c.href,
          ...(statement ? {
            statement
          } : null)
        });
        let r;
        if (Array.isArray(e) && e[0] && typeof e[0] == `object`) {
          r = e[0];
        } else if (e && typeof e == `object` && `signedMessage` in e && `signature` in e) {
          r = e;
        } else {
          throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);
        }
        if (`signedMessage` in r && `signature` in r && (typeof r.signedMessage == `string` || r.signedMessage instanceof Uint8Array) && r.signature instanceof Uint8Array) {
          t = typeof r.signedMessage == `string` ? r.signedMessage : new TextDecoder().decode(r.signedMessage);
          n = r.signature;
        } else {
          throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`);
        }
      } else {
        if (!(`signMessage` in s) || typeof s.signMessage != `function` || !(`publicKey` in s) || typeof s != `object` || !s.publicKey || !(`toBase58` in s.publicKey) || typeof s.publicKey.toBase58 != `function`) {
          throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);
        }
        t = [`${c.host} wants you to sign in with your Solana account:`, s.publicKey.toBase58(), ...(statement ? [``, statement, ``] : [``]), `Version: 1`, `URI: ${c.href}`, `Issued At: ${options?.signInWithSolana?.issuedAt ?? new Date().toISOString()}`, ...(options?.signInWithSolana?.notBefore ? [`Not Before: ${options.signInWithSolana.notBefore}`] : []), ...(options?.signInWithSolana?.expirationTime ? [`Expiration Time: ${options.signInWithSolana.expirationTime}`] : []), ...(options?.signInWithSolana?.chainId ? [`Chain ID: ${options.signInWithSolana.chainId}`] : []), ...(options?.signInWithSolana?.nonce ? [`Nonce: ${options.signInWithSolana.nonce}`] : []), ...(options?.signInWithSolana?.requestId ? [`Request ID: ${options.signInWithSolana.requestId}`] : []), ...(options?.signInWithSolana?.resources?.length ? [`Resources`, ...options.signInWithSolana.resources.map(e => `- ${e}`)] : [])].join(`
`);
        let e = await s.signMessage(new TextEncoder().encode(t), `utf8`);
        if (!e || !(e instanceof Uint8Array)) {
          throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);
        }
        n = e;
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
          message: t,
          signature: B(n),
          ...(e.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e.options?.captchaToken
            }
          } : null)
        },
        xform: X
      });
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
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
  async _exchangeCodeForSession(auth_code, t) {
    let n = t?.flowId != null;
    let r = n ? yr(t?.flowId) : V() ? yr(sr(window.location.href)[Mn]) : null;
    if (n && !r) {
      this._debug(`#_exchangeCodeForSession()`, `provided flowId is not a valid flow id`, t?.flowId);
    }
    let {
      verifier,
      flowId
    } = n && !r ? {
      verifier: null,
      flowId: null
    } : await Tr(this.storage, this.storageKey, r);
    let [o, s] = (verifier ?? ``).split(`/`);
    try {
      if (!o && this.flowType === `pkce`) {
        throw new Vn();
      }
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code,
          code_verifier: o
        },
        xform: X
      });
      await K(this.storage, this.storageKey, flowId);
      if (error) {
        throw error;
      }
      if (!data || !data.session || !data.user) {
        let e = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null,
            redirectType: null
          },
          error: e
        });
      }
      if (data.session) {
        await this._saveSession(data.session);
        await this._notifyAllSubscribers(s === `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, data.session);
      }
      return this._returnResult({
        data: {
          ...data,
          redirectType: s ?? null
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
  async signInWithIdToken(e) {
    try {
      let {
        options,
        provider,
        token,
        access_token,
        nonce
      } = e;
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
        let e = new R();
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error: e
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
  async signInWithOtp(e) {
    let t = null;
    try {
      if (`email` in e) {
        let {
          email,
          options
        } = e;
        let i = null;
        let a = null;
        if (this.flowType === `pkce`) {
          [i, a, t] = await this._getCodeChallengeAndMethod();
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
            code_challenge: i,
            code_challenge_method: a
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t)
        });
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (`phone` in e) {
        let {
          phone,
          options
        } = e;
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
      await K(this.storage, this.storageKey, t);
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
  async verifyOtp(e) {
    try {
      let redirectTo;
      let captcha_token;
      if (`options` in e) {
        redirectTo = e.options?.redirectTo;
        captcha_token = e.options?.captchaToken;
      }
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/verify`, {
        headers: this.headers,
        body: {
          ...e,
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
      let a = data.session;
      let o = data.user;
      if (a?.access_token) {
        await this._saveSession(a);
        await this._notifyAllSubscribers(e.type == `recovery` ? `PASSWORD_RECOVERY` : `SIGNED_IN`, a);
      }
      return this._returnResult({
        data: {
          user: o,
          session: a
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
  async signInWithSSO(e) {
    let t = null;
    try {
      let n = null;
      let r = null;
      if (this.flowType === `pkce`) {
        [n, r, t] = await this._getCodeChallengeAndMethod();
      }
      let i = await Y(this.fetch, `POST`, `${this.url}/sso`, {
        body: {
          ...(`providerId` in e ? {
            provider_id: e.providerId
          } : null),
          ...(`domain` in e ? {
            domain: e.domain
          } : null),
          redirect_to: this._maybeAppendFlowIdToRedirect(e.options?.redirectTo, t),
          ...(e?.options?.captchaToken ? {
            gotrue_meta_security: {
              captcha_token: e.options.captchaToken
            }
          } : null),
          skip_http_redirect: true,
          code_challenge: n,
          code_challenge_method: r
        },
        headers: this.headers,
        xform: Ur
      });
      if (i.data?.url && V() && !e.options?.skipBrowserRedirect) {
        window.location.assign(i.data.url);
      }
      return this._returnResult(i);
    } catch (error) {
      await K(this.storage, this.storageKey, t);
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
  async resend(e) {
    let t = null;
    try {
      let n = `${this.url}/resend`;
      if (`email` in e) {
        let {
          email,
          type,
          options
        } = e;
        let o = null;
        let s = null;
        if (this.flowType === `pkce`) {
          [o, s, t] = await this._getCodeChallengeAndMethod();
        }
        let {
          error
        } = await Y(this.fetch, `POST`, n, {
          headers: this.headers,
          body: {
            email,
            type,
            gotrue_meta_security: {
              captcha_token: options?.captchaToken
            },
            code_challenge: o,
            code_challenge_method: s
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(options?.emailRedirectTo, t)
        });
        if (error) {
          await K(this.storage, this.storageKey, t);
        }
        return this._returnResult({
          data: {
            user: null,
            session: null
          },
          error
        });
      }
      if (`phone` in e) {
        let {
          phone,
          type,
          options
        } = e;
        let {
          data,
          error
        } = await Y(this.fetch, `POST`, n, {
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
      await K(this.storage, this.storageKey, t);
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
      return await this._useSession(async e => e);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async e => e));
  }
  async _acquireLock(e, t) {
    this._debug(`#_acquireLock`, `begin`, e);
    try {
      if (this.lockAcquired) {
        let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
        let n = (async () => {
          await e;
          return await t();
        })();
        this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {}
        })());
        return n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug(`#_acquireLock`, `lock acquired for storage key`, this.storageKey);
        try {
          this.lockAcquired = true;
          let e = t();
          this.pendingInLock.push((async () => {
            try {
              await e;
            } catch {}
          })());
          await e;
          while (this.pendingInLock.length) {
            let e = [...this.pendingInLock];
            await Promise.all(e);
            this.pendingInLock.splice(0, e.length);
          }
          return await e;
        } finally {
          this._debug(`#_acquireLock`, `lock released for storage key`, this.storageKey);
          this.lockAcquired = false;
        }
      });
    } finally {
      this._debug(`#_acquireLock`, `end`);
    }
  }
  async _useSession(e) {
    this._debug(`#_useSession`, `begin`);
    try {
      return await e(await this.__loadSession());
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
      let e = null;
      let t = await W(this.storage, this.storageKey);
      this._debug(`#getSession()`, `session from storage`, t);
      if (t !== null) {
        if (this._isValidSession(t)) {
          e = t;
        } else {
          this._debug(`#getSession()`, `session from storage is not valid`);
          await this._removeSession();
        }
      }
      if (!e) {
        return {
          data: {
            session: null
          },
          error: null
        };
      }
      let n = e.expires_at ? e.expires_at * 1000 - Date.now() < wn : false;
      this._debug(`#__loadSession()`, `session has${n ? `` : ` not`} expired`, `expires_at`, e.expires_at);
      if (!n) {
        return {
          data: {
            session: await this._hydrateSessionUser(e)
          },
          error: null
        };
      }
      let {
        data,
        error
      } = await this._callRefreshToken(e.refresh_token);
      if (error) {
        let e = await W(this.storage, this.storageKey);
        if (e && this._isValidSession(e) && e.expires_at && e.expires_at * 1000 > Date.now()) {
          return this._returnResult({
            data: {
              session: await this._hydrateSessionUser(e)
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
  async _hydrateSessionUser(e) {
    if (this.userStorage) {
      let t = await W(this.userStorage, this.storageKey + `-user`);
      e.user = t?.user ? t.user : Fr();
    }
    if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
      let t = {
        value: this.suppressGetSessionWarning
      };
      e.user = Ir(e.user, t);
      if (t.value) {
        this.suppressGetSessionWarning = true;
      }
    }
    return e;
  }
  async getUser(e) {
    if (e) {
      return await this._getUser(e);
    }
    await this.initializePromise;
    let t;
    t = this.lock == null ? await this._getUser() : await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser());
    if (t.data.user) {
      this.suppressGetSessionWarning = true;
    }
    return t;
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
          jwt: data.session?.access_token ?? undefined,
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
  async updateUser(e, t = {}) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._updateUser(e, t);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    let n = null;
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
        let s = null;
        let c = null;
        if (this.flowType === `pkce` && e.email != null) {
          [s, c, n] = await this._getCodeChallengeAndMethod();
        }
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `PUT`, `${this.url}/user`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo, n),
          body: {
            ...e,
            code_challenge: s,
            code_challenge_method: c
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
      await K(this.storage, this.storageKey, n);
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
  async setSession(e) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._setSession(e);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) {
        throw new L();
      }
      let t = Date.now() / 1000;
      let n = t;
      let r = true;
      let i = null;
      let {
        payload
      } = dr(e.access_token);
      if (payload.exp) {
        n = payload.exp;
        r = n <= t;
      }
      if (r) {
        let {
          data,
          error
        } = await this._callRefreshToken(e.refresh_token);
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
        i = data;
      } else {
        let {
          data,
          error
        } = await this._getUser(e.access_token);
        if (error) {
          return this._returnResult({
            data: {
              user: null,
              session: null
            },
            error
          });
        }
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: data.user,
          token_type: `bearer`,
          expires_in: n - t,
          expires_at: n
        };
        await this._saveSession(i);
        await this._notifyAllSubscribers(`SIGNED_IN`, i);
      }
      return this._returnResult({
        data: {
          user: i.user,
          session: i
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
  async refreshSession(e) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._refreshSession(e);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async t => {
        if (!e) {
          let {
            data: data_1,
            error: error_1
          } = t;
          if (error_1) {
            throw error_1;
          }
          e = data_1.session ?? undefined;
        }
        if (!e?.refresh_token) {
          throw new L();
        }
        let {
          data,
          error
        } = await this._callRefreshToken(e.refresh_token);
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
  async _getSessionFromURL(e, t) {
    try {
      if (!V()) {
        throw new Rn(`No browser detected.`);
      }
      if (e.error || e.error_description || e.error_code) {
        throw new Rn(e.error_description || `Error in URL with unspecified error_description`, {
          error: e.error || `unspecified_error`,
          code: e.error_code || `unspecified_code`
        });
      }
      switch (t) {
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
      if (t === `pkce`) {
        this._debug(`#_initialize()`, `begin`, `is PKCE flow`, true);
        if (!e.code) {
          throw new Bn(`No code detected.`);
        }
        let {
          data: data_1,
          error: error_1
        } = await this._exchangeCodeForSession(e.code, {
          flowId: e[Mn]
        });
        if (error_1) {
          throw error_1;
        }
        let r = new URL(window.location.href);
        r.searchParams.delete(`code`);
        r.searchParams.delete(Mn);
        window.history.replaceState(window.history.state, ``, r.toString());
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
      } = e;
      if (!access_token || !expires_in || !refresh_token || !token_type) {
        throw new Rn(`No session defined in URL`);
      }
      let l = Math.round(Date.now() / 1000);
      let expires_in_1 = parseInt(expires_in);
      let d = l + expires_in_1;
      if (expires_at) {
        d = parseInt(expires_at);
      }
      let f = d - l;
      if (f * 1000 <= 30000) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${expires_in_1}s`);
      }
      let p = d - expires_in_1;
      if (l - p >= 120) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`, p, d, l);
      } else if (l - p < 0) {
        console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`, p, d, l);
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
        expires_at: d,
        refresh_token,
        token_type,
        user: data.user
      };
      window.location.hash = ``;
      this._debug(`#_getSessionFromURL()`, `clearing window.location.hash`);
      return this._returnResult({
        data: {
          session,
          redirectType: e.type
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
  _isImplicitGrantCallback(e) {
    if (typeof this.detectSessionInUrl == `function`) {
      return this.detectSessionInUrl(new URL(window.location.href), e);
    }
    return !!(e.access_token || e.error || e.error_description || e.error_code);
  }
  async _isPKCECallback(e) {
    if (!e.code) {
      return false;
    }
    let t = yr(e[Mn]);
    if (t && (await W(this.storage, xr(this.storageKey, t)))) {
      return true;
    }
    return !!(await W(this.storage, `${this.storageKey}-code-verifier`));
  }
  async signOut(e = {
    scope: `global`
  }) {
    await this.initializePromise;
    if (this.lock == null) {
      return await this._signOut(e);
    }
    return await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e));
  }
  async _signOut({
    scope
  } = {
    scope: `global`
  }) {
    return await this._useSession(async t => {
      let n = async () => {
        await this._removeSession();
      };
      let {
        data,
        error
      } = t;
      if (error && !In(error)) {
        return this._returnResult({
          error
        });
      }
      let a = data.session?.access_token;
      if (a) {
        let {
          error: error_1
        } = await this.admin.signOut(a, scope);
        if (error_1 && !(Fn(error_1) && (error_1.status === 404 || error_1.status === 401 || error_1.status === 403) || In(error_1))) {
          if (scope !== `others`) {
            await n();
          }
          return this._returnResult({
            error: error_1
          });
        }
      }
      if (scope !== `others`) {
        await n();
      }
      return this._returnResult({
        error: null
      });
    });
  }
  onAuthStateChange(e) {
    let id = ar();
    let subscription = {
      id,
      callback: e,
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
  async _emitInitialSession(e) {
    return await this._useSession(async t => {
      try {
        let {
          data: {
            session
          },
          error
        } = t;
        if (error) {
          throw error;
        }
        await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`, session);
        this._debug(`INITIAL_SESSION`, `callback id`, e, `session`, session);
      } catch (error) {
        await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`, null);
        this._debug(`INITIAL_SESSION`, `callback id`, e, `error`, error);
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
  async resetPasswordForEmail(e, t = {}) {
    let n = null;
    let r = null;
    let i = null;
    if (this.flowType === `pkce`) {
      [n, r, i] = await this._getCodeChallengeAndMethod(true);
    }
    try {
      return await Y(this.fetch, `POST`, `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: n,
          code_challenge_method: r,
          gotrue_meta_security: {
            captcha_token: t.captchaToken
          }
        },
        headers: this.headers,
        redirectTo: this._maybeAppendFlowIdToRedirect(t.redirectTo, i)
      });
    } catch (error) {
      await K(this.storage, this.storageKey, i);
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
  async linkIdentity(e) {
    if (`token` in e) {
      return this.linkIdentityIdToken(e);
    }
    return this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    let t = null;
    try {
      let {
        data,
        error
      } = await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          throw error;
        }
        let {
          url,
          flowId
        } = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: e.options?.redirectTo,
          scopes: e.options?.scopes,
          queryParams: e.options?.queryParams,
          skipBrowserRedirect: true
        });
        t = flowId;
        return await Y(this.fetch, `GET`, url, {
          headers: this.headers,
          jwt: data.session?.access_token ?? undefined
        });
      });
      if (error) {
        throw error;
      }
      if (V() && !e.options?.skipBrowserRedirect) {
        window.location.assign(data?.url);
      }
      return this._returnResult({
        data: {
          provider: e.provider,
          url: data?.url,
          flowId: t
        },
        error: null
      });
    } catch (error) {
      if (P(error)) {
        return this._returnResult({
          data: {
            provider: e.provider,
            url: null,
            flowId: t
          },
          error
        });
      }
      throw error;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async t => {
      try {
        let {
          error,
          data: {
            session
          }
        } = t;
        if (error) {
          throw error;
        }
        let {
          options,
          provider,
          token,
          access_token,
          nonce
        } = e;
        let {
          data,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: session?.access_token ?? undefined,
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
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async ({
        data,
        error
      }) => {
        if (error) {
          throw error;
        }
        return await Y(this.fetch, `DELETE`, `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: data.session?.access_token ?? undefined
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
    let t = `#_refreshAccessToken()`;
    this._debug(t, `begin`);
    try {
      let n = Date.now();
      return await pr(async n => {
        if (n > 0) {
          await fr(200 * 2 ** (n - 1));
        }
        this._debug(t, `refreshing attempt`, n);
        return await Y(this.fetch, `POST`, `${this.url}/token?grant_type=refresh_token`, {
          body: {
            refresh_token
          },
          headers: this.headers,
          xform: X
        });
      }, (e, t) => {
        let r = 200 * 2 ** e;
        return t && Un(t) && Date.now() + r - n < 30000;
      });
    } catch (error) {
      this._debug(t, `error`, error);
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
      this._debug(t, `end`);
    }
  }
  _isValidSession(e) {
    return typeof e == `object` && !!e && `access_token` in e && `refresh_token` in e && `expires_at` in e;
  }
  async _handleProviderSignIn(provider, t) {
    let {
      url,
      flowId
    } = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    this._debug(`#_handleProviderSignIn()`, `provider`, provider, `options`, t, `url`, url);
    if (V() && !t.skipBrowserRedirect) {
      window.location.assign(url);
    }
    return {
      data: {
        provider,
        url,
        flowId
      },
      error: null
    };
  }
  async _recoverAndRefresh() {
    let e = `#_recoverAndRefresh()`;
    this._debug(e, `begin`);
    try {
      let t = await W(this.storage, this.storageKey);
      if (t && this.userStorage) {
        let e = await W(this.userStorage, this.storageKey + `-user`);
        if (!this.storage.isServer && Object.is(this.storage, this.userStorage) && !e) {
          e = {
            user: t.user
          };
          await U(this.userStorage, this.storageKey + `-user`, e);
        }
        t.user = e?.user ?? Fr();
      } else if (t && !t.user && !t.user) {
        let e = await W(this.storage, this.storageKey + `-user`);
        if (e && e?.user) {
          t.user = e.user;
          await G(this.storage, this.storageKey + `-user`);
          await U(this.storage, this.storageKey, t);
        } else {
          t.user = Fr();
        }
      }
      this._debug(e, `session from storage`, t);
      if (!this._isValidSession(t)) {
        this._debug(e, `session is not valid`);
        if (t !== null) {
          await this._removeSession();
        }
        return;
      }
      let n = (t.expires_at ?? Infinity) * 1000 - Date.now() < wn;
      this._debug(e, `session has${n ? `` : ` not`} expired with margin of ${wn}s`);
      if (n) {
        if (this.autoRefreshToken && t.refresh_token) {
          let {
            error
          } = await this._callRefreshToken(t.refresh_token);
          if (error) {
            if (Gn(error)) {
              this._debug(e, `refresh discarded by commit guard`, error);
            } else {
              this._debug(e, `refresh failed`, error);
            }
          }
        }
      } else if (t.user && t.user.__isUserNotAvailableProxy === true) {
        try {
          let {
            data,
            error
          } = await this._getUser(t.access_token);
          if (!error && data?.user) {
            t.user = data.user;
            await this._saveSession(t);
            await this._notifyAllSubscribers(`SIGNED_IN`, t);
          } else {
            this._debug(e, `could not get user data, skipping SIGNED_IN notification`);
          }
        } catch (error) {
          console.error(`Error getting user data:`, error);
          this._debug(e, `error getting user data, skipping SIGNED_IN notification`, error);
        }
      } else {
        await this._notifyAllSubscribers(`SIGNED_IN`, t);
      }
    } catch (error) {
      this._debug(e, `error`, error);
      if (Un(error)) {
        console.warn(error);
      } else {
        console.error(error);
      }
      return;
    } finally {
      this._debug(e, `end`);
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
    let r = `#_callRefreshToken()`;
    this._debug(r, `begin`);
    try {
      this.refreshingDeferred = new ur();
      this.refreshingDeferred.promise.then(undefined, () => {});
      let t = await W(this.storage, this.storageKey);
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
      let a = await W(this.storage, this.storageKey);
      if (t !== null && (a === null || a.refresh_token !== t.refresh_token)) {
        this._debug(r, `commit guard: storage changed since refresh started, discarding rotated tokens`, {
          startedWith: `present`,
          nowHolds: a ? `replaced` : `cleared`
        });
        let e = {
          data: null,
          error: new Wn()
        };
        this.refreshingDeferred.resolve(e);
        return e;
      }
      let o = this._sessionRemovalEpoch;
      await this._saveSession(data.session);
      if (this._sessionRemovalEpoch !== o) {
        this._debug(r, `commit guard (post-save): _removeSession ran during _saveSession, undoing write`);
        await G(this.storage, this.storageKey);
        if (this.userStorage) {
          await G(this.userStorage, this.storageKey + `-user`);
        }
        let e = {
          data: null,
          error: new Wn()
        };
        this.refreshingDeferred.resolve(e);
        return e;
      }
      await this._notifyAllSubscribers(`TOKEN_REFRESHED`, data.session);
      let s = {
        data: data.session,
        error: null
      };
      this.lastRefreshFailure = null;
      this.refreshingDeferred.resolve(s);
      return s;
    } catch (error) {
      this._debug(r, `error`, error);
      if (P(error)) {
        let result = {
          data: null,
          error
        };
        if (!Un(error)) {
          let e = await W(this.storage, this.storageKey);
          if (e?.expires_at && e.expires_at * 1000 > Date.now()) {
            this._debug(r, `proactive refresh failed, access token still valid — preserving session`);
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
      this._debug(r, `end`);
    }
  }
  async _notifyAllSubscribers(e, t, broadcast = true) {
    if (this._pendingInitNotifications !== null && broadcast) {
      this._pendingInitNotifications.push({
        event: e,
        session: t,
        broadcast
      });
      return;
    }
    let r = `#_notifyAllSubscribers(${e})`;
    this._debug(r, `begin`, t, `broadcast = ${broadcast}`);
    try {
      if (this.broadcastChannel && broadcast) {
        this.broadcastChannel.postMessage({
          event: e,
          session: t
        });
      }
      let r = [];
      let i = Array.from(this.stateChangeEmitters.values()).map(async n => {
        try {
          await n.callback(e, t);
        } catch (error) {
          r.push(error);
        }
      });
      await Promise.all(i);
      if (r.length > 0) {
        for (let e = 0; e < r.length; e += 1) {
          console.error(r[e]);
        }
        throw r[0];
      }
    } finally {
      this._debug(r, `end`);
    }
  }
  async _saveSession(e) {
    this._debug(`#_saveSession()`, e);
    this.suppressGetSessionWarning = true;
    let t = {
      ...e
    };
    let n = t.user && t.user.__isUserNotAvailableProxy === true;
    if (this.userStorage) {
      if (!n && t.user) {
        await U(this.userStorage, this.storageKey + `-user`, {
          user: t.user
        });
      }
      let e = {
        ...t
      };
      delete e.user;
      let r = Lr(e);
      await U(this.storage, this.storageKey, r);
    } else {
      let e = Lr(t);
      await U(this.storage, this.storageKey, e);
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
    let e = setInterval(() => this._autoRefreshTokenTick(), N);
    this.autoRefreshTicker = e;
    if (e && typeof e == `object` && typeof e.unref == `function`) {
      e.unref();
    } else if (typeof Deno < `u` && typeof Deno.unrefTimer == `function`) {
      Deno.unrefTimer(e);
    }
    let t = setTimeout(async () => {
      await this.initializePromise;
      await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = t;
    if (t && typeof t == `object` && typeof t.unref == `function`) {
      t.unref();
    } else if (typeof Deno < `u` && typeof Deno.unrefTimer == `function`) {
      Deno.unrefTimer(t);
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
            let e = Date.now();
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
                let r = Math.floor((session.expires_at * 1000 - e) / N);
                this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`);
                if (r <= 3) {
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
      let e = Date.now();
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
          let r = Math.floor((session.expires_at * 1000 - e) / N);
          this._debug(`#_autoRefreshTokenTick()`, `access token expires in ${r} ticks, a tick lasts ${N}ms, refresh threshold is 3 ticks`);
          if (r <= 3) {
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
  async _onVisibilityChanged(e) {
    let t = `#_onVisibilityChanged(${e})`;
    this._debug(t, `visibilityState`, document.visibilityState);
    if (document.visibilityState === `visible`) {
      if (this.autoRefreshToken) {
        this._startAutoRefresh();
      }
      if (!e) {
        await this.initializePromise;
        if (this.lock != null) {
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== `visible`) {
              this._debug(t, `acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);
              return;
            }
            await this._recoverAndRefresh();
          });
        } else {
          if (document.visibilityState !== `visible`) {
            this._debug(t, `visibilityState is no longer visible, skipping recovery`);
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
  async _getUrlForProvider(e, t, n) {
    let r = n?.redirectTo;
    let i = null;
    let a = null;
    let o = null;
    if (this.flowType === `pkce`) {
      [i, a, o] = await this._getCodeChallengeAndMethod();
      r = this._maybeAppendFlowIdToRedirect(r, o);
    }
    let s = [`provider=${encodeURIComponent(t)}`];
    if (r) {
      s.push(`redirect_to=${encodeURIComponent(r)}`);
    }
    if (n?.scopes) {
      s.push(`scopes=${encodeURIComponent(n.scopes)}`);
    }
    if (i != null && a != null) {
      let e = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      s.push(e.toString());
    }
    if (n?.queryParams) {
      let e = new URLSearchParams(n.queryParams);
      s.push(e.toString());
    }
    if (n?.skipBrowserRedirect) {
      s.push(`skip_http_redirect=${n.skipBrowserRedirect}`);
    }
    return {
      url: `${e}?${s.join(`&`)}`,
      flowId: o
    };
  }
  _maybeAppendFlowIdToRedirect(e, t) {
    if (!e || !t || !this.experimental.appendPkceFlowIdToRedirects) {
      return e ?? undefined;
    }
    return Dr(e, t);
  }
  async _getCodeChallengeAndMethod(e = false) {
    return Or(this.storage, this.storageKey, e, e => this._debug(`#_getCodeChallengeAndMethod()`, `evicted oldest pending PKCE verifier slot`, e));
  }
  async _unenroll(e) {
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
        return await Y(this.fetch, `DELETE`, `${this.url}/factors/${e.factorId}`, {
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
  async _enroll(e) {
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
        let i = {
          friendly_name: e.friendlyName,
          factor_type: e.factorType,
          ...(e.factorType === `phone` ? {
            phone: e.phone
          } : e.factorType === `totp` ? {
            issuer: e.issuer
          } : {})
        };
        let {
          data: data_1,
          error: error_1
        } = await Y(this.fetch, `POST`, `${this.url}/factors`, {
          body: i,
          headers: this.headers,
          jwt: data?.session?.access_token
        });
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        if (e.factorType === `totp` && data_1.type === `totp` && data_1?.totp?.qr_code) {
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
  async _verify(e) {
    let t = async () => {
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
          let i = {
            challenge_id: e.challengeId,
            ...(`webauthn` in e ? {
              webauthn: {
                ...e.webauthn,
                credential_response: e.webauthn.type === `create` ? ci(e.webauthn.credential_response) : li(e.webauthn.credential_response)
              }
            } : {
              code: e.code
            })
          };
          let {
            data: data_1,
            error: error_1
          } = await Y(this.fetch, `POST`, `${this.url}/factors/${e.factorId}/verify`, {
            body: i,
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
            expires_at: Math.round(Date.now() / 1000) + data_1.expires_in,
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
      return t();
    }
    return this._acquireLock(this.lockAcquireTimeout, t);
  }
  async _challenge(e) {
    let t = async () => {
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
          let i = await Y(this.fetch, `POST`, `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: data?.session?.access_token
          });
          if (i.error) {
            return i;
          }
          let {
            data: data_1
          } = i;
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
      return t();
    }
    return this._acquireLock(this.lockAcquireTimeout, t);
  }
  async _challengeAndVerify(e) {
    let {
      data,
      error
    } = await this._challenge({
      factorId: e.factorId
    });
    if (error) {
      return this._returnResult({
        data: null,
        error
      });
    }
    return await this._verify({
      factorId: e.factorId,
      challengeId: data.id,
      code: e.code
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
    let n = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: []
    };
    for (let t of user?.factors ?? []) {
      n.all.push(t);
      if (t.status === `verified` && t.factor_type in n && Array.isArray(n[t.factor_type])) {
        n[t.factor_type].push(t);
      }
    }
    return {
      data: n,
      error: null
    };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    if (e) {
      try {
        let {
          payload: payload_1
        } = dr(e);
        let n = null;
        if (payload_1.aal) {
          n = payload_1.aal;
        }
        let r = n;
        let {
          data: {
            user
          },
          error: error_1
        } = await this.getUser(e);
        if (error_1) {
          return this._returnResult({
            data: null,
            error: error_1
          });
        }
        if ((user?.factors?.filter(e => e.status === `verified`) ?? []).length > 0) {
          r = `aal2`;
        }
        let o = payload_1.amr || [];
        return {
          data: {
            currentLevel: n,
            nextLevel: r,
            currentAuthenticationMethods: o
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
    let i = null;
    if (payload.aal) {
      i = payload.aal;
    }
    let a = i;
    if ((session.user.factors?.filter(e => e.status === `verified`) ?? []).length > 0) {
      a = `aal2`;
    }
    let o = payload.amr || [];
    return {
      data: {
        currentLevel: i,
        nextLevel: a,
        currentAuthenticationMethods: o
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
  async _generateRecoveryCodes(e) {
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
          body: e?.friendlyName ? {
            friendly_name: e.friendlyName
          } : undefined,
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
  async _verifyRecoveryCode(e) {
    Pr(this.experimental);
    let t = async () => {
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
              code: e.code
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
          let o = {
            expires_at: ir(data_1.expires_in),
            ...data_1
          };
          await this._saveSession(o);
          await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`, o);
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
      return t();
    }
    return this._acquireLock(this.lockAcquireTimeout, t);
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
  async _getAuthorizationDetails(e) {
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
          return await Y(this.fetch, `GET`, `${this.url}/oauth/authorizations/${e}`, {
            headers: this.headers,
            jwt: session.access_token,
            xform: e => ({
              data: e,
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
  async _approveAuthorization(e, t) {
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
        let a = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            action: `approve`
          },
          xform: e => ({
            data: e,
            error: null
          })
        });
        if (a.data && a.data.redirect_url && V() && !t?.skipBrowserRedirect) {
          window.location.assign(a.data.redirect_url);
        }
        return a;
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
  async _denyAuthorization(e, t) {
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
        let a = await Y(this.fetch, `POST`, `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            action: `deny`
          },
          xform: e => ({
            data: e,
            error: null
          })
        });
        if (a.data && a.data.redirect_url && V() && !t?.skipBrowserRedirect) {
          window.location.assign(a.data.redirect_url);
        }
        return a;
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
            xform: e => ({
              data: e,
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
  async _revokeOAuthGrant(e) {
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
              client_id: e.clientId
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
  async fetchJwk(e, t = {
    keys: []
  }) {
    let n = t.keys.find(t => t.kid === e);
    if (n) {
      return n;
    }
    let r = Date.now();
    n = this.jwks.keys.find(t => t.kid === e);
    if (n && this.jwks_cached_at + 600000 > r) {
      return n;
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
    if (!data.keys || data.keys.length === 0 || (this.jwks = data, this.jwks_cached_at = r, n = data.keys.find(t => t.kid === e), !n)) {
      return null;
    }
    return n;
  }
  async getClaims(e, t = {}) {
    try {
      let n = e;
      if (!n) {
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
        n = data.session.access_token;
      }
      let {
        header,
        payload,
        signature,
        raw: {
          header: header_1,
          payload: payload_1
        }
      } = dr(n);
      if (!t?.allowExpired) {
        try {
          jr(payload.exp);
        } catch (error) {
          throw new qn(error instanceof Error ? error.message : `JWT validation failed`);
        }
      }
      let c = !header.alg || header.alg.startsWith(`HS`) || !header.kid || !(`crypto` in globalThis && `subtle` in globalThis.crypto) ? null : await this.fetchJwk(header.kid, t?.keys ? {
        keys: t.keys
      } : t?.jwks);
      if (!c) {
        let {
          error
        } = await this.getUser(n);
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
      let l = Mr(header.alg);
      let u = await crypto.subtle.importKey(`jwk`, c, l, true, [`verify`]);
      if (!(await crypto.subtle.verify(l, u, signature, rr(`${header_1}.${payload_1}`)))) {
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
  async signInWithPasskey(e) {
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
          captchaToken: e?.options?.captchaToken
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
        signal: e?.options?.signal ?? ai.createNewAbortSignal(),
        mediation: e?.options?.mediation
      });
      if (error_1 || !data_1) {
        return this._returnResult({
          data: null,
          error: error_1 ?? new F(`WebAuthn ceremony failed`, null)
        });
      }
      let a = li(data_1);
      return this._verifyPasskeyAuthentication({
        challengeId: data.challenge_id,
        credential: a
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
  async registerPasskey(e) {
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
        signal: e?.options?.signal ?? ai.createNewAbortSignal()
      });
      if (error_1 || !data_1) {
        return this._returnResult({
          data: null,
          error: error_1 ?? new F(`WebAuthn ceremony failed`, null)
        });
      }
      let a = ci(data_1);
      return this._verifyPasskeyRegistration({
        challengeId: data.challenge_id,
        credential: a
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
  async _verifyPasskeyRegistration(e) {
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
            challenge_id: e.challengeId,
            credential: e.credential
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
  async _startPasskeyAuthentication(e) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: {
            captcha_token: e?.options?.captchaToken
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
  async _verifyPasskeyAuthentication(e) {
    try {
      let {
        data,
        error
      } = await Y(this.fetch, `POST`, `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
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
          xform: e => ({
            data: e,
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
  async _updatePasskey(e) {
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
        } = await Y(this.fetch, `PATCH`, `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: session.access_token,
          body: {
            friendly_name: e.friendlyName
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
  async _deletePasskey(e) {
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
        } = await Y(this.fetch, `DELETE`, `${this.url}/passkeys/${e.passkeyId}`, {
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
const wi = Ci;
const Ti = `2.117.2`;
let Ei = ``;
let Di;
if (typeof Deno < `u`) {
  Ei = `deno`;
  Di = Deno.version?.deno;
} else if (typeof document < `u`) {
  Ei = `web`;
} else if (typeof navigator < `u` && navigator.product === `ReactNative`) {
  Ei = `react-native`;
} else {
  Ei = `node`;
  let e = globalThis.process;
  Di = e?.version?.replace(/^v/, ``);
}
const ki = [`runtime=${Ei}`];
if (Di) {
  ki.push(`runtime-version=${Di}`);
}
const global_1 = {
  headers: {
    "X-Client-Info": `supabase-js/${Ti}; ${ki.join(`; `)}`
  }
};
const db = {
  schema: `public`
};
const Mi = {
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  flowType: `implicit`
};
const realtime = {};
const tracePropagation = {
  enabled: false,
  respectSamplingDecision: true
};
function Fi(traceparent) {
  if (!traceparent || typeof traceparent != `string`) {
    return null;
  }
  let t = traceparent.split(`-`);
  if (t.length !== 4) {
    return null;
  }
  let [n, r, i, a] = t;
  if (n.length !== 2 || r.length !== 32 || i.length !== 16 || a.length !== 2) {
    return null;
  }
  let o = /^[0-9a-f]+$/i;
  if (!o.test(n) || !o.test(r) || !o.test(i) || !o.test(a) || r === `00000000000000000000000000000000` || i === `0000000000000000`) {
    return null;
  }
  return {
    version: n,
    traceId: r,
    parentId: i,
    traceFlags: a,
    isSampled: (parseInt(a, 16) & 1) == 1
  };
}
function Ii(e, t) {
  if (!e || !t || t.length === 0) {
    return false;
  }
  let n;
  if (e instanceof URL) {
    n = e;
  } else {
    try {
      n = new URL(e);
    } catch {
      return false;
    }
  }
  for (let e of t) {
    try {
      if (typeof e == `string`) {
        if (Li(n.hostname, e)) {
          return true;
        }
      } else if (e instanceof RegExp) {
        if (e.test(n.hostname)) {
          return true;
        }
      } else if (typeof e == `function` && e(n)) {
        return true;
      }
    } catch {
      continue;
    }
  }
  return false;
}
function Li(hostname, t) {
  if (t === hostname) {
    return true;
  }
  if (t.startsWith(`*.`)) {
    let n = t.slice(2);
    if (hostname.endsWith(n) && (hostname === n || hostname.endsWith(`.` + n))) {
      return true;
    }
  }
  return false;
}
function Ri(e) {
  let t = [];
  try {
    let n = new URL(e);
    t.push(n.hostname);
  } catch {}
  t.push(`*.supabase.co`, `*.supabase.in`);
  t.push(`localhost`, `127.0.0.1`, `[::1]`);
  return t;
}
const Wi = e => {
  if (e) {
    return (...t) => e(...t);
  }
  return (...e) => fetch(...e);
};
const Ki = e => e.startsWith(`sb_publishable_`) || e.startsWith(`sb_secret_`);
const qi = `sb_temp_`;
const Ji = new Set();
const Yi = e => {
  if (!e.startsWith(`sb_`) || Ki(e) || e.startsWith(qi)) {
    return;
  }
  let t = e.match(/^sb_[a-zA-Z0-9]+_/)?.[0] ?? `unknown`;
  if (!Ji.has(t)) {
    Ji.add(t);
    console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`);
  }
};
const Xi = (e, t, n, fetch, tracePropagation, a) => {
  let o = Wi(fetch);
  let s = Headers;
  let c = tracePropagation?.enabled === true;
  let l = tracePropagation?.respectSamplingDecision !== false;
  let u = c ? Ri(t) : null;
  let d = !(a?.omitApiKeyAsBearer && Ki(e));
  return async (t, r) => {
    let i = await n();
    let a = new s(r?.headers);
    if (!a.has(`apikey`)) {
      a.set(`apikey`, e);
    }
    if (!a.has(`Authorization`)) {
      let t = i ?? (d ? e : null);
      if (t) {
        a.set(`Authorization`, `Bearer ${t}`);
      }
    }
    if (u) {
      let e = $i(t, u, l);
      if (e) {
        if (e.traceparent && !a.has(`traceparent`)) {
          a.set(`traceparent`, e.traceparent);
        }
        if (e.tracestate && !a.has(`tracestate`)) {
          a.set(`tracestate`, e.tracestate);
        }
        if (e.baggage && !a.has(`baggage`)) {
          a.set(`baggage`, e.baggage);
        }
      }
    }
    return o(t, {
      ...r,
      headers: a
    });
  };
};
var Zi = false;
var Qi = false;
function $i(e, n, r) {
  let i = t();
  if (!i) {
    if (!Zi) {
      Zi = true;
      console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.");
    }
    return null;
  }
  if (!Ii(typeof e == `string` || e instanceof URL ? e : e.url, n)) {
    return null;
  }
  let a = i();
  if (!a || !a.traceparent) {
    if (a?.carrierKeys?.length && !Qi) {
      Qi = true;
      let e = a.carrierKeys.includes(`sentry-trace`) ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it." : ` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;
      console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${a.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.` + e);
    }
    return null;
  }
  if (r) {
    let e = Fi(a.traceparent);
    if (e && !e.isSampled) {
      return {
        traceparent: a.traceparent
      };
    }
  }
  return a;
}
function ea(tracePropagation) {
  if (typeof tracePropagation == `boolean`) {
    return {
      enabled: tracePropagation
    };
  }
  return tracePropagation;
}
function ta(e) {
  if (e.endsWith(`/`)) {
    return e;
  }
  return e + `/`;
}
let na = false;
function ra(e) {
  if (!na) {
    if (typeof e == `object` && e && `schema` in e && e.schema !== undefined) {
      na = true;
      console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`);
    }
  }
}
function ia(e, t) {
  let {
    db,
    auth,
    realtime,
    global
  } = e;
  let {
    db: db_1,
    auth: auth_1,
    realtime: realtime_1,
    global: global_1
  } = t;
  let u = ea(e.tracePropagation);
  let d = ea(t.tracePropagation);
  let f = {
    db: {
      ...db_1,
      ...db
    },
    auth: {
      ...auth_1,
      ...auth
    },
    realtime: {
      ...realtime_1,
      ...realtime
    },
    storage: {},
    global: {
      ...global_1,
      ...global,
      headers: {
        ...(global_1?.headers ?? {}),
        ...(global?.headers ?? {})
      }
    },
    tracePropagation: {
      enabled: u?.enabled ?? d?.enabled ?? false,
      respectSamplingDecision: u?.respectSamplingDecision ?? d?.respectSamplingDecision ?? true
    },
    accessToken: async () => ``
  };
  if (e.accessToken) {
    f.accessToken = e.accessToken;
  } else {
    delete f.accessToken;
  }
  return f;
}
function aa(e) {
  let t = e?.trim();
  if (!t) {
    throw Error(`supabaseUrl is required.`);
  }
  if (!t.match(/^https?:\/\//i)) {
    throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);
  }
  try {
    return new URL(ta(t));
  } catch {
    throw Error(`Invalid supabaseUrl: Provided URL is malformed.`);
  }
}
class oa extends wi {
  constructor(e) {
    super(e);
  }
}
class sa {
  constructor(e, t, n) {
    this.supabaseUrl = e;
    this.supabaseKey = t;
    let r = aa(e);
    if (!t) {
      throw Error(`supabaseKey is required.`);
    }
    Yi(t);
    ra(n);
    this.realtimeUrl = new URL(`realtime/v1`, r);
    this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(`http`, `ws`);
    this.authUrl = new URL(`auth/v1`, r);
    this.storageUrl = new URL(`storage/v1`, r);
    this.functionsUrl = new URL(`functions/v1`, r);
    let i = `sb-${r.hostname.split(`.`)[0]}-auth-token`;
    let a = {
      db,
      realtime,
      auth: {
        ...Mi,
        storageKey: i
      },
      global: global_1,
      tracePropagation
    };
    let o = ia(n ?? {}, a);
    this.settings = o;
    this.storageKey = o.auth.storageKey ?? ``;
    this.headers = o.global.headers ?? {};
    if (o.accessToken) {
      this.accessToken = o.accessToken;
      this.auth = new Proxy({}, {
        get: (e, t) => {
          throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`);
        }
      });
    } else {
      this.auth = this._initSupabaseAuthClient(o.auth ?? {}, this.headers, o.global.fetch);
    }
    this.fetch = Xi(t, e, this._getSessionToken.bind(this), o.global.fetch, o.tracePropagation);
    this.functionsFetch = Xi(t, e, this._getSessionToken.bind(this), o.global.fetch, o.tracePropagation, {
      omitApiKeyAsBearer: true
    });
    this.realtime = this._initRealtimeClient({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch,
      ...o.realtime
    });
    if (this.accessToken) {
      Promise.resolve(this.accessToken()).then(e => this.realtime.setAuth(e)).catch(e => console.warn(`Failed to set initial Realtime auth token:`, e));
    }
    this.rest = new fe(new URL(`rest/v1`, r).href, {
      headers: this.headers,
      schema: o.db.schema,
      fetch: this.fetch,
      timeout: o.db.timeout,
      urlLengthLimit: o.db.urlLengthLimit,
      retry: o.db.retry
    });
    this.storage = new Sn(this.storageUrl.href, this.headers, this.fetch, n?.storage);
    if (!o.accessToken) {
      this._listenForAuthEvents();
    }
  }
  get functions() {
    return new u(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.functionsFetch
    });
  }
  from(e) {
    return this.rest.from(e);
  }
  schema(e) {
    return this.rest.schema(e);
  }
  getOpenApiSpec() {
    return this.rest.getOpenApiSpec();
  }
  rpc(e, t = {}, n = {
    head: false,
    get: false,
    count: undefined
  }) {
    return this.rest.rpc(e, t, n);
  }
  channel(e, t = {
    config: {}
  }) {
    return this.realtime.channel(e, t);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getSessionToken() {
    const e = this;
    if (e.accessToken) {
      return await e.accessToken();
    }
    let {
      data
    } = await e.auth.getSession();
    return data.session?.access_token ?? null;
  }
  async _getAccessToken() {
    const e = this;
    return (await e._getSessionToken()) ?? e.supabaseKey;
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
  }, p, fetch) {
    let h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new oa({
      url: this.authUrl.href,
      headers: {
        ...h,
        ...p
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
      fetch,
      lockAcquireTimeout,
      skipAutoInitialize,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some(e => e.toLowerCase() === `authorization`)
    });
  }
  _initRealtimeClient(e) {
    return new Tt(this.realtimeUrl.href, {
      ...e,
      params: {
        apikey: this.supabaseKey,
        ...e?.params
      }
    });
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e, t) => {
      this._handleTokenChanged(e, `CLIENT`, t?.access_token);
    });
  }
  _handleTokenChanged(e, t, n) {
    if ((e === `TOKEN_REFRESHED` || e === `SIGNED_IN` || e === `INITIAL_SESSION`) && this.changedAccessToken !== n) {
      this.changedAccessToken = n;
      this.realtime.setAuth(n);
    } else if (e === `SIGNED_OUT`) {
      this.realtime.setAuth();
      if (t == `STORAGE`) {
        this.auth.signOut();
      }
      this.changedAccessToken = undefined;
    }
  }
}
const ca = (e, t, n) => new sa(e, t, n);
function la() {
  if (typeof window < `u` || globalThis.Deno !== undefined) {
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
  let n = e_version.match(/^v(\d+)\./);
  if (n) {
    return parseInt(n[1], 10) <= 20;
  }
  return false;
}
if (la()) {
  console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);
}
export const supabase = ca(`https://sgpjbmkswbvhdsbrifpa.supabase.co`, `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`);
