import {
  init_rolldown_runtime_BpQH8Ho1,
  n
} from "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/lib-D_jy-Mlc.js
init_rolldown_runtime_BpQH8Ho1();
var t = `identifier keyword string class property entity jsxliterals sign comment break space`.split(` `);
var [n2, r, i, a, o, s, c, l, u, d, f] = t.map((e, t2) => t2);
new Map(t.map((e, t2) => [e, t2]));
function p(e, n3) {
  let r2 = [], i2 = 0, a2 = [], o2 = false;
  function s2(e2) {
    r2.push({ index: i2++, value: e2.map(([, e3]) => e3).join(``), tokens: e2.map(([e3, n4]) => ({ type: t[e3], value: n4 })), annotations: [] });
  }
  for (let e2 = 0; e2 < n3.length; e2++) {
    let t2 = n3[e2], [r3, i3] = t2;
    if (r3 !== d) {
      if (i3.includes(`
`)) {
        let e3 = i3.split(`
`);
        for (let t3 = 0; t3 < e3.length; t3++) a2.push([r3, e3[t3]]), t3 < e3.length - 1 && (s2(a2), a2.length = 0);
      } else a2.push(t2);
      o2 = false;
    } else o2 ? s2([]) : (s2(a2), a2.length = 0), e2 === n3.length - 1 && s2([]), o2 = true;
  }
  return a2.length && s2(a2), { value: e, lines: r2 };
}
function m(e, t2) {
  let n3 = { index: e.index, value: e.value, tokens: e.tokens, annotations: e.annotations, className: `sh__line${e.annotations.map((e2) => ` sh__line--${e2}`).join(``)}`, style: {}, properties: {} };
  return t2?.(n3), n3;
}
function h({ type: e, value: t2 }, n3, r2) {
  let i2 = n3?.[e], a2 = { type: e, value: t2, className: `sh__token--${e}${i2 ? ` ${i2}` : ``}`, style: { color: `var(--sh-${e})` }, properties: {} };
  return r2?.(a2), a2;
}
function g(e, t2) {
  let n3 = t2?.cx, r2 = t2?.mark, i2 = t2?.markLine;
  return !n3 && !r2 && !i2 ? e.lines.map((e2) => {
    let t3 = `sh__line${e2.annotations.map((e3) => ` sh__line--${e3}`).join(``)}`, n4 = e2.tokens.map(({ type: e3, value: t4 }) => `<span class="sh__token--${e3}" style="color:var(--sh-${e3})">${v(t4)}</span>`).join(``);
    return `<span class="${v(t3)}">${n4}</span>`;
  }).join(`
`) : e.lines.map((e2) => {
    let t3 = m(e2, i2), a2 = e2.tokens.map((e3) => {
      let t4 = h(e3, n3, r2);
      return `<span ${y({ ...t4.properties, className: t4.className, style: t4.style })}>${v(t4.value)}</span>`;
    }).join(``);
    return `<span ${y({ ...t3.properties, className: t3.className, style: t3.style })}>${a2}</span>`;
  }).join(`
`);
}
var _ = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#039;` };
var v = (e) => e.replace(/[&<>"']/g, (e2) => _[e2]);
function y(e) {
  let t2 = Object.entries(e.style || {}).map(([e2, t3]) => `${e2.replace(/[A-Z]/g, (e3) => `-${e3.toLowerCase()}`)}:${t3}`).join(`;`), n3 = Object.entries(e).filter(([e2, t3]) => /^[\w:-]+$/.test(e2) && e2 !== `className` && e2 !== `style` && t3 !== false && t3 != null).map(([e2, t3]) => t3 === true ? e2 : `${e2}="${v(String(t3))}"`).join(` `);
  return `class="${v(e.className || ``)}"${t2 ? ` style="${v(t2)}"` : ``}${n3 ? ` ${n3}` : ``}`;
}
var ee = new Set(`+-*/%=!&|^~?:.,;()[]{}<>#@\\`.split(``));
var b = () => 0;
var x = (e) => e === `_` || e === `$` || /[\p{L}\p{N}]/u.test(e);
function S(e, t2) {
  for (; t2 < e.length && /\s/.test(e[t2]); ) t2++;
  return e[t2] === `:`;
}
function C(e, t2) {
  if (typeof t2?.tokenize == `function`) return t2.tokenize(e, t2);
  let s2 = t2?.keywords || /* @__PURE__ */ new Set(), c2 = t2?.typeKeywords || /* @__PURE__ */ new Set(), p2 = t2?.onCommentStart || b, m2 = t2?.onCommentEnd || b, h2 = t2?.caseInsensitive ? (e2) => e2.toLowerCase() : (e2) => e2, g2 = [], _2 = ``;
  function v2(e2, t3) {
    t3 && (g2.push([e2, t3]), e2 !== f && e2 !== d && (_2 = t3));
  }
  for (let g3 = 0; g3 < e.length; ) {
    let y2 = e[g3], b2 = e[g3 + 1], C2 = p2(y2, b2, g3, e);
    if (C2) {
      let t3 = g3++;
      for (; g3 < e.length; ) {
        if (m2(e[g3 - 1], e[g3], g3, e, t3) == C2) {
          g3++;
          break;
        }
        g3++;
      }
      v2(u, e.slice(t3, g3));
      continue;
    }
    let w2 = t2?.onLiteral?.(y2, g3, e);
    if (w2) {
      v2(i, e.slice(g3, g3 + w2)), g3 += w2;
      continue;
    }
    if (typeof t2?.onQuote == `function` && y2 === `'`) {
      let r2 = t2.onQuote(y2, g3, e);
      if (typeof r2 == `number` && r2 >= 1) {
        v2(n2, e.slice(g3, g3 + r2)), g3 += r2;
        continue;
      }
    }
    if (y2 === `"` || y2 === `'` || t2?.templateStrings && y2 === "`") {
      let n3 = y2, r2 = g3++;
      for (; g3 < e.length; ) {
        if (e[g3] === `\\`) g3++;
        else if (e[g3] === n3) {
          g3++;
          break;
        }
        g3++;
      }
      let a2 = e.slice(r2, g3);
      v2(t2?.quotedKeys && S(e, g3) ? o : i, a2);
      continue;
    }
    if (y2 === `
`) {
      v2(d, y2), g3++;
      continue;
    }
    if (/[^\S\r\n]/.test(y2)) {
      let t3 = g3++;
      for (; g3 < e.length && /[^\S\r\n]/.test(e[g3]); ) g3++;
      v2(f, e.slice(t3, g3));
      continue;
    }
    if (x(y2)) {
      let t3 = g3++;
      for (; g3 < e.length && x(e[g3]); ) g3++;
      if (/^\d/.test(y2) && e[g3] === `.` && /\d/.test(e[g3 + 1] || ``)) for (g3++; g3 < e.length && x(e[g3]); ) g3++;
      let i2 = e.slice(t3, g3), l2 = h2(i2);
      v2(c2.has(l2) ? a : s2.has(l2) ? r : _2 === `.` ? o : /^\d/.test(i2) || i2 === `null` || /^\p{Lu}/u.test(i2) ? a : n2, i2);
      continue;
    }
    if (ee.has(y2)) {
      v2(l, y2), g3++;
      continue;
    }
    v2(i, y2), g3++;
  }
  return g2;
}
function w(e, t2) {
  let n3 = p(e, C(e, t2));
  if (t2?.annotateLine) for (let e2 of n3.lines) t2.annotateLine(e2);
  return n3;
}
var T = (e, t2) => {
  let n3 = e + t2;
  return n3 === `//` ? 1 : n3 === `/*` ? 2 : 0;
};
var E = (e, t2) => t2 === `
` ? 1 : e + t2 === `*/` ? 2 : 0;
var te = n({ keywords: () => O, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => D });
var D = /* @__PURE__ */ new Set([`void`, `char`, `short`, `int`, `long`, `float`, `double`, `signed`, `unsigned`, `_Bool`, `_Complex`, `_Imaginary`]);
var O = new Set(`auto.break.case.const.continue.default.do.else.enum.extern.for.goto.if.inline.register.restrict.return.sizeof.static.struct.switch.typedef.union.volatile.while._Alignas._Alignof._Atomic._Generic._Noreturn._Static_assert._Thread_local`.split(`.`));
var k = n({ keywords: () => A, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => j });
var A = new Set(`alignas.alignof.and.and_eq.asm.auto.bitand.bitor.break.case.catch.class.compl.concept.const.consteval.constexpr.constinit.const_cast.continue.co_await.co_return.co_yield.decltype.default.delete.do.dynamic_cast.else.enum.explicit.export.extern.false.for.friend.goto.if.inline.mutable.namespace.new.noexcept.not.not_eq.nullptr.operator.or.or_eq.private.protected.public.register.reinterpret_cast.requires.return.sizeof.static.static_assert.static_cast.struct.switch.template.this.thread_local.throw.true.try.typedef.typeid.typename.union.using.virtual.volatile.while.xor.xor_eq`.split(`.`));
var j = /* @__PURE__ */ new Set([`bool`, `char`, `char8_t`, `char16_t`, `char32_t`, `double`, `float`, `int`, `long`, `short`, `signed`, `unsigned`, `void`, `wchar_t`]);
var M = n({ keywords: () => N, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => P });
var N = new Set(`abstract.as.async.await.base.break.case.catch.checked.class.const.continue.default.delegate.do.else.enum.event.explicit.extern.false.finally.fixed.for.foreach.from.get.global.goto.if.implicit.in.init.interface.internal.into.is.join.let.lock.namespace.new.null.on.operator.orderby.out.override.params.partial.private.protected.public.readonly.record.ref.remove.required.return.sealed.select.set.sizeof.stackalloc.static.struct.switch.this.throw.true.try.typeof.unchecked.unsafe.using.value.virtual.volatile.when.where.while.with.yield`.split(`.`));
var P = /* @__PURE__ */ new Set([`bool`, `byte`, `char`, `decimal`, `double`, `dynamic`, `float`, `int`, `long`, `nint`, `nuint`, `object`, `sbyte`, `short`, `string`, `uint`, `ulong`, `ushort`, `void`]);
var F = n({ keywords: () => I, onCommentEnd: () => R, onCommentStart: () => L, onLiteral: () => z, tokenize: () => K });
var I = /* @__PURE__ */ new Set([`@media`, `@import`, `@keyframes`, `@font-face`, `@supports`, `@page`, `@counter-style`, `@font-feature-values`, `@viewport`, `@counter-style`, `@font-feature-values`, `@document`]);
var L = (e, t2) => +(e + t2 === `/*`);
var R = (e, t2) => +(e + t2 === `*/`);
var z = (e, t2, n3) => e === `#` && n3.slice(t2).match(/^#(?:[\da-f]{8}|[\da-f]{6}|[\da-f]{4}|[\da-f]{3})(?![\w-])/i)?.[0].length || 0;
var B = (e) => e === f || e === d || e === u;
var V = ([e, t2]) => e === n2 || e === a || e === l && t2 === `-`;
var H = ([e]) => e === n2 || e === a || e === o;
var U = (e) => H(e) && !/^\d/.test(e[1]);
var W = ([e, t2]) => e === l && t2 === `-`;
var G = (e) => {
  for (let t2 = 0; t2 < e.length; t2++) {
    let n3 = t2, r2 = t2;
    if (W(e[r2])) {
      for (; e[r2] && W(e[r2]); ) r2++;
      if (!e[r2] || !U(e[r2])) continue;
      n3 = r2++;
    } else if (U(e[r2])) r2++;
    else continue;
    let i2 = n3 > t2;
    for (; e[r2] && W(e[r2]); ) {
      let t3 = r2;
      for (; e[r2] && W(e[r2]); ) r2++;
      if (!e[r2] || !H(e[r2])) {
        r2 = t3;
        break;
      }
      i2 = true, r2++;
    }
    if (!i2) continue;
    let a2 = e.slice(t2, r2).map(([, e2]) => e2).join(``);
    e.splice(t2, r2 - t2, [e[n3][0], a2]);
  }
};
var ne = (e, t2) => {
  let n3 = 0, r2 = 0;
  for (let i2 = t2; i2 < e.length; i2++) {
    let [t3, a2] = e[i2];
    if (t3 === l) {
      if (a2 === `(`) n3++;
      else if (a2 === `)`) n3--;
      else if (a2 === `[`) r2++;
      else if (a2 === `]`) r2--;
      else if (!n3 && !r2 && a2 === `{`) return true;
      else if (!n3 && !r2 && (a2 === `;` || a2 === `}`)) return false;
    }
  }
  return false;
};
var K = (e, t2) => {
  let n3 = C(e, { ...t2, tokenize: void 0 });
  G(n3);
  let r2 = 0, i2 = false;
  for (let e2 = 0; e2 < n3.length; e2++) {
    let [t3, a2] = n3[e2];
    if (t3 === l && a2 === `{`) {
      r2++, i2 = true;
      continue;
    }
    if (t3 === l && a2 === `}`) {
      r2--, i2 = false;
      continue;
    }
    if (t3 === l && a2 === `;`) {
      i2 = r2 > 0;
      continue;
    }
    if (!i2 || B(t3)) continue;
    let s2 = e2, c2 = e2;
    for (; c2 < n3.length && V(n3[c2]); ) c2++;
    let u2 = c2;
    for (; u2 < n3.length && B(n3[u2][0]); ) u2++;
    if (c2 > s2 && n3[u2]?.[0] === l && n3[u2][1] === `:` && !ne(n3, u2 + 1)) {
      let e3 = n3.slice(s2, c2).map(([, e4]) => e4).join(``);
      n3.splice(s2, c2 - s2, [o, e3]);
    }
    i2 = false;
  }
  return n3;
};
var re = n({ annotateLine: () => ae, keywords: () => ie });
var ie = /* @__PURE__ */ new Set([]);
var ae = (e) => {
  let t2 = ``;
  if (e.value.startsWith(`+`) && !e.value.startsWith(`+++`)) t2 = `diff-add`;
  else if (e.value.startsWith(`-`) && !e.value.startsWith(`---`)) t2 = `diff-remove`;
  else if (e.value.startsWith(`@@`)) t2 = `diff-hunk`;
  else if (/^(diff --git|index |--- |\+\+\+ )/.test(e.value)) {
    t2 = `diff-meta`;
    for (let t3 of e.tokens) t3.type === `property` && (t3.type = `identifier`);
  }
  t2 && e.annotations.push(t2);
};
var q = (e) => +(e === `#`);
var J = (e, t2) => +(t2 === `
`);
var oe = n({ caseInsensitive: () => true, keywords: () => se, onCommentEnd: () => J, onCommentStart: () => q });
var se = /* @__PURE__ */ new Set([`add`, `arg`, `cmd`, `copy`, `entrypoint`, `env`, `expose`, `from`, `healthcheck`, `label`, `maintainer`, `onbuild`, `run`, `shell`, `stopsignal`, `user`, `volume`, `workdir`]);
var ce = n({ keywords: () => ue, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => le });
var le = /* @__PURE__ */ new Set([`bool`, `byte`, `complex64`, `complex128`, `error`, `float32`, `float64`, `int`, `int8`, `int16`, `int32`, `int64`, `rune`, `string`, `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `uintptr`]);
var ue = /* @__PURE__ */ new Set([`break`, `case`, `chan`, `const`, `continue`, `default`, `defer`, `else`, `fallthrough`, `for`, `func`, `go`, `goto`, `if`, `import`, `interface`, `map`, `package`, `range`, `return`, `select`, `struct`, `switch`, `type`, `var`]);
var de = n({ keywords: () => fe, onCommentEnd: () => J, onCommentStart: () => q, typeKeywords: () => pe });
var fe = /* @__PURE__ */ new Set([`directive`, `enum`, `extend`, `fragment`, `implements`, `input`, `interface`, `mutation`, `on`, `query`, `repeatable`, `scalar`, `schema`, `subscription`, `type`, `union`]);
var pe = /* @__PURE__ */ new Set([`Boolean`, `Float`, `ID`, `Int`, `String`]);
var me = n({ keywords: () => he, onCommentEnd: () => _e, onCommentStart: () => ge });
var he = /* @__PURE__ */ new Set([`false`, `for`, `if`, `in`, `null`, `true`]);
var ge = (e, t2) => e === `#` || e + t2 === `//` ? 1 : e + t2 === `/*` ? 2 : 0;
var _e = (e, t2) => t2 === `
` ? 1 : e + t2 === `*/` ? 2 : 0;
var Y = /* @__PURE__ */ new Set([`<`, `>`, `{`, `}`, `[`, `]`]);
var ve = new Set(`for.do.while.if.else.return.function.var.let.const.true.false.undefined.this.new.delete.typeof.in.instanceof.void.break.continue.switch.case.default.throw.try.catch.finally.debugger.with.yield.async.await.class.extends.super.import.export.from.static`.split(`.`));
var ye = /* @__PURE__ */ new Set([...ve, `type`, `interface`, `enum`, `implements`, `readonly`, `abstract`, `declare`, `namespace`, `module`, `private`, `protected`, `public`, `override`, `keyof`, `infer`, `is`, `asserts`, `satisfies`, `as`, `unknown`, `never`, `any`, `number`, `string`, `boolean`, `bigint`, `symbol`, `object`]);
var be = /* @__PURE__ */ new Set([`+`, `-`, `*`, `/`, `%`, `=`, `!`, `&`, `|`, `^`, `~`, `!`, `?`, `:`, `.`, `,`, `;`, `'`, `"`, `.`, `(`, `)`, `[`, `]`, `#`, `@`, `\\`, ...Y]);
var xe = { keywords: ve, onCommentStart: Me, onCommentEnd: Ne, jsx: true, regex: true, templateStrings: true };
function Se(e) {
  return { ...xe, ...e };
}
function Ce(e) {
  let t2 = 0;
  return /\binterface\s+[A-Za-z_$][\w$]*/.test(e) && (t2 += 2), /\btype\s+[A-Za-z_$][\w$]*\s*=/.test(e) && (t2 += 2), /\benum\s+[A-Za-z_$][\w$]*/.test(e) && (t2 += 2), /\b(?:implements|readonly|declare|namespace|satisfies|infer|keyof|asserts)\b/.test(e) && (t2 += 2), /:\s*[A-Za-z_$][\w$]*(?:<[^>\n]+>)?(?:\[\])?(?=\s*[,)=;{])/m.test(e) && (t2 += 1), /\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*:\s*/.test(e) && (t2 += 1), /\)\s*:\s*[A-Za-z_$][\w$]*(?:<[^>\n]+>)?(?:\[\])?\s*(?:=>|\{)/.test(e) && (t2 += 1), t2 >= 2;
}
function we(e, t2) {
  if (e[t2] !== `<`) return false;
  let n3 = 0, r2 = false;
  for (let i2 = t2; i2 < e.length; i2++) {
    let t3 = e[i2];
    if (t3 === `<`) {
      n3++;
      continue;
    }
    if (t3 === `>`) {
      if (n3--, n3 === 0) {
        let t4 = i2 + 1;
        for (; t4 < e.length && /\s/.test(e[t4]); ) t4++;
        if (!(r2 && e[t4] === `(`)) return false;
        let n4 = e.slice(t4, t4 + 320);
        return /\)\s*(?::[\s\S]{0,120}?)?=>/.test(n4);
      }
      continue;
    }
    if (n3 !== 0) {
      if (/[$A-Za-z_]/.test(t3)) {
        r2 = true;
        continue;
      }
      if (!/[\s,\.\=\?\:\|\&\[\]]/.test(t3)) return false;
    }
  }
  return false;
}
function X(e) {
  return /^[^\S\r\n]+$/g.test(e);
}
function Te(e) {
  return be.has(e);
}
function Ee(e) {
  return /^[\w$\u0080-\uffff]+$/.test(e || ``);
}
function De(e) {
  return /^[0-9A-Z\p{Lu}]/u.test(e) || e === `null`;
}
function Oe(e) {
  return /^[a-zA-Z]$/.test(e);
}
function ke(e) {
  return /^[$_A-Za-z\u0080-\uffff]$/.test(e || ``);
}
function Z(e) {
  return ke(e[0]) && Ee(e);
}
function Ae(e) {
  return e === "`";
}
function je(e) {
  return e === `"` || e === `'`;
}
function Me(e, t2) {
  let n3 = e + t2;
  return n3 === `/*` ? 2 : +(n3 === `//`);
}
function Ne(e, t2) {
  return e + t2 === `*/` ? 2 : +(t2 === `
`);
}
function Pe(e) {
  return e[0] === `/` && !Me(e[0], e[1]);
}
function Fe(e, t2) {
  let n3 = t2 + 1;
  for (; n3 < e.length && /\s/.test(e[n3]); ) n3++;
  return e[n3] === `:`;
}
function Ie(e, t2) {
  let p2 = Se(t2), m2 = p2.keywords !== xe.keywords, h2 = typeof p2.typescript == `boolean` ? p2.typescript : Ce(e), g2 = m2 ? p2.keywords : h2 ? ye : ve, { onCommentStart: _2, onCommentEnd: v2 } = p2, y2 = p2.typeKeywords instanceof Set ? p2.typeKeywords : null, ee2 = p2.jsx !== false, b2 = p2.regex !== false, x2 = p2.templateStrings !== false, S2 = p2.caseInsensitive ? (e2) => e2.toLowerCase() : (e2) => e2, C2 = (e2) => x2 && Ae(e2), w2 = ``, T2 = -1, E2 = [-1, ``], te2 = [-2, ``], D2 = [], O2 = false, k2 = 0, A2 = 0, j2 = 0, M2 = 0, N2 = () => O2 && !A2 && !k2, P2 = () => k2, F2 = () => N2() && M2, I2 = null, L2 = 0, R2 = false, z2 = 0, B2 = 0, V2 = () => I2 !== null, H2 = () => R2, U2 = () => B2 > z2, W2 = () => B2 > 0 && B2 === z2, G2 = () => V2() || U2();
  function ne2(e2) {
    let t3 = e2 === `
`;
    if (P2()) {
      if (V2()) return i;
      let [, t4] = E2;
      if (Z(e2)) {
        if (t4 === `<` || t4 === `</`) return s;
        if (!j2 && /^\s+$/.test(D2[D2.length - 1]?.[1] || ``)) return o;
      }
    }
    if (F2()) return c;
    if (V2() || U2()) return i;
    if (y2 && y2.has(S2(e2))) return E2[1] === `.` ? n2 : a;
    if (g2.has(S2(e2))) return E2[1] === `.` ? n2 : r;
    if (t3) return d;
    if (X(e2)) return f;
    if (e2.split(``).every(Te)) return l;
    if (De(e2)) return P2() && !j2 ? n2 : a;
    if (Z(e2)) {
      let e3 = E2[1] === `.` && Z(te2[1]);
      if (!G2() && !e3) return n2;
      if (e3) return o;
    }
    return i;
  }
  let K2 = (e2, t3) => {
    if (t3 && (w2 = t3), w2) {
      T2 = typeof e2 == `number` ? e2 : ne2(w2);
      let t4 = [T2, w2];
      T2 !== f && T2 !== d && (te2 = E2, E2 = t4), P2() && T2 === l && (w2 === `{` && j2++, w2 === `}` && j2--), D2.push(t4);
    }
    w2 = ``;
  };
  for (let t3 = 0; t3 < e.length; t3++) {
    let r2 = e[t3], s2 = e[t3 - 1], c2 = e[t3 + 1], d2 = s2 + r2, f2 = r2 + c2;
    if (typeof p2.onQuote == `function` && r2 === `'` && !V2() && !F2() && !U2()) {
      let i2 = p2.onQuote(r2, t3, e);
      if (typeof i2 == `number` && i2 >= 1 && !Number.isNaN(i2)) {
        let r3 = Math.min(i2, e.length - t3), a2 = t3 + r3;
        K2(), w2 = e.slice(t3, a2), K2(n2), t3 = a2 - 1;
        continue;
      }
    }
    if (je(r2) && !F2() && !U2()) {
      K2();
      let n3 = false;
      if (I2 && r2 === I2 ? (I2 = null, n3 = true) : I2 || (I2 = r2, L2 = D2.length), K2(i, r2), p2.quotedKeys && n3 && Fe(e, t3)) for (let e2 = L2; e2 < D2.length; e2++) D2[e2][0] = o;
      continue;
    }
    if (C2(r2)) {
      K2(), B2 += U2() ? -1 : 1, K2(i, r2);
      continue;
    }
    if (U2() && f2 === "${") {
      z2++, K2(i), K2(l, f2), t3++;
      continue;
    }
    if (W2() && r2 === `}`) {
      K2(), z2--, K2(l, r2);
      continue;
    }
    if (N2() && r2 === `{`) {
      K2(), K2(l, r2), A2 = 1;
      continue;
    }
    if (O2) {
      if (!k2 && r2 === `<`) {
        K2(), c2 === `/` ? (k2 = 2, w2 = f2, t3++) : (k2 = 1, w2 = r2), K2(l);
        continue;
      }
      if (k2) {
        if (r2 === `>` && !`/=`.includes(s2)) {
          K2(), k2 === 1 ? (k2 = 0, M2++) : (k2 = 0, O2 = false), K2(l, r2);
          continue;
        }
        if (f2 === `/>` || f2 === `</`) {
          w2 !== `<` && w2 !== `/` && K2(), f2 === `/>` ? k2 = 0 : M2--, M2 || (O2 = false), w2 = f2, t3++, K2(l);
          continue;
        }
        if (r2 === `<`) {
          K2(), w2 = r2, K2(l);
          continue;
        }
        if (r2 === `-` && w2 && !G2() && !F2()) {
          let n3 = t3 + 1;
          for (; n3 < e.length && /[$\w-]/.test(e[n3]); ) n3++;
          K2(o, w2 + e.slice(t3, n3)), t3 = n3 - 1;
          continue;
        }
        if (c2 === `=` && !G2() && !X(r2)) {
          X(w2) && K2();
          let e2 = w2 + r2;
          if (Z(e2)) {
            K2(o, e2);
            continue;
          }
        }
      }
    }
    if (ee2 && !k2 && (r2 === `<` && ke(c2) || f2 === `</`)) {
      let i2 = t3 - 1;
      for (; i2 >= 0 && /\s/.test(e[i2]); ) i2--;
      let o2 = i2 >= 0 ? e[i2] : ``, [s3, u2] = E2, d3 = false, f3 = false;
      if (w2 && !X(w2)) {
        let e2 = w2;
        De(e2) || e2 === `true` || e2 === `false` ? d3 = true : g2.has(e2) && Z(e2) ? f3 = true : Z(e2) && (d3 = true);
      }
      let p3 = r2 === `<` && /[$\w\]\)]/.test(o2) && (d3 || !f3 && (s3 === n2 || s3 === a || s3 === l && (u2 === `)` || u2 === `]`))), m4 = r2 === `<` && we(e, t3);
      !p3 && !m4 && (k2 = c2 === `/` ? 2 : 1), r2 === `<` && (c2 === `/` || Oe(c2)) && !p3 && !m4 && !G2() && !F2() && !H2() && (O2 = true);
    }
    let m3 = je(r2) || C2(r2), h3 = U2(), y3 = b2 && !O2 && Pe(f2), x3 = F2();
    if (m3 || h3 || je(I2)) w2 += r2, r2 === `\\` && (w2 += e[++t3] || ``);
    else if (y3) {
      K2();
      let [n3, a2] = E2;
      if (y3 && n3 !== -1 && !(n3 === l && a2 !== `)` || n3 === u)) {
        w2 = r2, K2();
        continue;
      }
      R2 = true;
      let o2 = t3++, s3 = false, c3 = false;
      for (; t3 < e.length && e[t3] !== `
`; t3++) {
        let n4 = e[t3];
        if (n4 === `\\`) {
          if (e[t3 + 1] === `
`) break;
          t3++;
          continue;
        }
        if (n4 === `[` && (c3 = true), n4 === `]` && (c3 = false), n4 === `/` && !c3) {
          for (s3 = true; /^[a-z]$/.test(e[t3 + 1]); ) t3++;
          break;
        }
      }
      R2 = false, o2 !== t3 && s3 ? (w2 = e.slice(o2, t3 + 1), K2(i)) : (w2 = r2, K2(), t3 = o2);
    } else if (_2(r2, c2, t3, e)) {
      K2();
      let n3 = t3, i2 = _2(r2, c2, t3, e);
      if (i2) for (; t3 < e.length && v2(e[t3 - 1], e[t3], t3, e) != i2; t3++) ;
      w2 = e.slice(n3, t3 + 1), K2(u);
    } else if (r2 === ` ` || r2 === `
`) {
      if (r2 === ` ` && (X(w2) || !w2 || x3)) {
        let n3 = t3 + 1;
        for (; e[n3] === ` `; ) n3++;
        w2 += e.slice(t3, n3), t3 = n3 - 1, e[n3] === `<` && K2();
      } else K2(), w2 = r2, K2();
    } else A2 && r2 === `}` ? (K2(), w2 = r2, K2(), A2--) : x3 && !Y.has(r2) || U2() || (Ee(r2) === Ee(w2[w2.length - 1]) || N2()) && !be.has(r2) ? w2 += r2 : (d2 === `</` && (w2 = d2), K2(), d2 !== `</` && (w2 = r2), f2 === `</` || f2 === `/>` ? (w2 = f2, K2(), t3++) : Y.has(r2) && K2()), A2 && r2 === `{` && A2++;
  }
  return K2(), D2;
}
var Le = n({ tokenize: () => Re });
var Re = Ie;
var ze = { keywords: /* @__PURE__ */ new Set(), jsx: true, regex: false, templateStrings: false, onCommentStart: (e, t2, n3, r2) => r2.startsWith(`<!--`, n3) ? 2 : 0, onCommentEnd: (e, t2, n3, r2) => r2.slice(n3 - 2, n3 + 1) === `-->` ? 2 : 0 };
var Q = (e) => Re(e, ze);
var Be = /^<\s*(script|style)\b/i;
var Ve = (e) => RegExp(`</\\s*${e}\\s*>`, `ig`);
function He(e, t2) {
  let n3 = ``;
  for (let r2 = t2; r2 < e.length; r2++) {
    let t3 = e[r2];
    if (n3) t3 === n3 && (n3 = ``);
    else if (t3 === `"` || t3 === `'`) n3 = t3;
    else if (t3 === `>`) return r2 + 1;
  }
  return -1;
}
function Ue(e) {
  let t2 = [], n3 = 0;
  for (; n3 < e.length; ) {
    if (e.startsWith(`<!--`, n3)) {
      let t3 = e.indexOf(`-->`, n3 + 4);
      n3 = t3 === -1 ? e.length : t3 + 3;
      continue;
    }
    if (e[n3] !== `<`) {
      n3++;
      continue;
    }
    let r2 = He(e, n3);
    if (r2 === -1) break;
    let i2 = e.slice(n3, r2).match(Be);
    if (!i2) {
      n3 = r2;
      continue;
    }
    let a2 = i2[1].toLowerCase(), o2 = Ve(a2);
    o2.lastIndex = r2;
    let s2 = o2.exec(e);
    if (!s2) {
      n3 = r2;
      continue;
    }
    t2.push({ start: n3, openEnd: r2, closeStart: s2.index, end: o2.lastIndex, tag: a2 }), n3 = o2.lastIndex;
  }
  return t2;
}
function We(e) {
  let t2 = [], n3 = 0;
  for (let r2 of Ue(e)) {
    let { start: i2, openEnd: a2, closeStart: o2, end: s2, tag: c2 } = r2;
    t2.push(...Q(e.slice(n3, i2))), t2.push(...Q(e.slice(i2, a2))), t2.push(...c2 === `style` ? K(e.slice(a2, o2)) : Re(e.slice(a2, o2), { jsx: false })), t2.push(...Q(e.slice(o2, s2))), n3 = s2;
  }
  return t2.push(...Q(e.slice(n3))), t2;
}
var Ge = n({ jsx: () => true, keywords: () => Ke, onCommentEnd: () => Ye, onCommentStart: () => Je, regex: () => false, templateStrings: () => false, tokenize: () => qe });
var Ke = /* @__PURE__ */ new Set([]);
var qe = We;
var Je = (e, t2, n3, r2) => r2.startsWith(`<!--`, n3) ? 2 : 0;
var Ye = (e, t2, n3, r2) => r2.slice(n3 - 2, n3 + 1) === `-->` ? 2 : 0;
var Xe = n({ keywords: () => Qe, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => Ze });
var Ze = /* @__PURE__ */ new Set([`boolean`, `byte`, `char`, `double`, `float`, `int`, `long`, `short`, `void`]);
var Qe = new Set(`abstract.assert.break.case.catch.class.const.continue.default.do.else.enum.extends.final.finally.for.goto.if.implements.import.instanceof.interface.native.new.package.private.protected.public.return.static.strictfp.super.switch.synchronized.this.throw.throws.transient.try.volatile.while`.split(`.`));
var $e = n({ keywords: () => et, onCommentEnd: () => E, onCommentStart: () => T, quotedKeys: () => true });
var et = /* @__PURE__ */ new Set([`true`, `false`, `null`]);
var tt = n({ keywords: () => nt, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => rt });
var nt = new Set(`as.break.by.catch.class.companion.const.constructor.continue.data.do.else.enum.false.finally.for.fun.get.if.import.in.infix.init.interface.internal.is.lateinit.noinline.null.object.open.operator.out.override.package.private.protected.public.reified.return.sealed.set.suspend.tailrec.this.throw.true.try.typealias.val.var.vararg.when.where.while`.split(`.`));
var rt = /* @__PURE__ */ new Set([`Any`, `Boolean`, `Byte`, `Char`, `Double`, `Float`, `Int`, `Long`, `Nothing`, `Short`, `String`, `Unit`]);
var it = n({ keywords: () => at, onCommentEnd: () => st, onCommentStart: () => ot, onLiteral: () => ct });
var at = /* @__PURE__ */ new Set([`and`, `break`, `do`, `else`, `elseif`, `end`, `false`, `for`, `function`, `goto`, `if`, `in`, `local`, `nil`, `not`, `or`, `repeat`, `return`, `then`, `true`, `until`, `while`]);
function ot(e, t2, n3, r2) {
  return e === `#` && n3 === 0 && t2 === `!` ? 1 : e + t2 === `--` ? /^--\[=*\[/.test(r2.slice(n3)) ? 2 : 1 : 0;
}
function st(e, t2, n3, r2, i2) {
  if (t2 === `
`) return 1;
  if (t2 !== `]`) return 0;
  let a2 = r2.slice(i2).match(/^--\[(=*)\[/);
  if (!a2) return 0;
  let o2 = `]${a2[1]}]`;
  return r2.slice(n3 - o2.length + 1, n3 + 1) === o2 ? 2 : 0;
}
function ct(e, t2, n3) {
  if (e !== `[`) return 0;
  let r2 = n3.slice(t2).match(/^\[(=*)\[/);
  if (!r2) return 0;
  let i2 = `]${r2[1]}]`, a2 = n3.indexOf(i2, t2 + r2[0].length);
  return a2 === -1 ? n3.length - t2 : a2 + i2.length - t2;
}
var lt = () => 0;
var ut = () => 0;
var dt = n({ annotateLine: () => mt, keywords: () => ft, onCommentEnd: () => ut, onCommentStart: () => lt, tokenize: () => pt });
var ft = /* @__PURE__ */ new Set([]);
var pt = (e) => {
  let t2 = [], r2 = ``, i2 = false, a2 = (e2, n3) => {
    if (!n3) return;
    let r3 = t2[t2.length - 1];
    r3?.[0] === e2 ? r3[1] += n3 : t2.push([e2, n3]);
  };
  for (let t3 of e.match(/[^\n]*(?:\n|$)/g) || []) {
    if (!t3) continue;
    let e2 = t3.endsWith(`
`) ? `
` : ``, o2 = e2 ? t3.slice(0, -1) : t3, s2 = [], c2 = o2.match(/^(?: {0,3}>[ \t]?)*/)?.[0] || ``;
    if (!r2 || i2) for (let e3 of c2.matchAll(/>/g)) s2.push([e3.index, e3.index + 1]);
    let u2 = c2.length, d2 = 0;
    for (; d2 < 3 && o2[u2] === ` `; ) u2++, d2++;
    let f2 = o2.slice(u2).match(/^(`{3,}|~{3,})/)?.[1];
    if (r2) f2?.[0] === r2[0] && f2.length >= r2.length && /^\s*$/.test(o2.slice(u2 + f2.length)) && (s2.push([u2, u2 + f2.length]), r2 = ``, i2 = false);
    else if (f2) s2.push([u2, u2 + f2.length]), r2 = f2, i2 = c2.includes(`>`);
    else {
      let e3 = o2.slice(u2).match(/^(#{1,6}(?=\s)|(?:[-+*]|\d+[.)])(?=\s)|(?:(?:\*\s*){3,}|(?:-\s*){3,}|(?:_\s*){3,})$)/)?.[1];
      e3 && s2.push([u2, u2 + e3.length]);
      for (let e4 of o2.matchAll(/(`+)(.*?)\1|(\*{1,3}|_{1,3}|~{2})(?=\S)(.*?\S)\3/g)) {
        let t4 = e4[1] || e4[3];
        o2[e4.index - 1] === `\\` || t4[0] === `_` && /\w/.test(o2[e4.index - 1] || ``) || s2.push([e4.index, e4.index + t4.length], [e4.index + e4[0].length - t4.length, e4.index + e4[0].length]);
      }
    }
    let p2 = 0;
    for (let [e3, t4] of s2.sort((e4, t5) => e4[0] - t5[0])) e3 < p2 || (a2(n2, o2.slice(p2, e3)), a2(l, o2.slice(e3, t4)), p2 = t4);
    a2(n2, o2.slice(p2) + e2);
  }
  return t2;
};
var mt = (e) => {
  let t2 = ``;
  /^#{1,6}\s/.test(e.value) ? t2 = `markdown-heading` : /^\s*>/.test(e.value) ? t2 = `markdown-quote` : /^\s*(?:[-*+] |\d+[.)] )/.test(e.value) ? t2 = `markdown-list` : /^\s*```/.test(e.value) && (t2 = `markdown-fence`), t2 && e.annotations.push(t2);
};
var ht = n({ keywords: () => gt, onCommentEnd: () => yt, onCommentStart: () => vt, typeKeywords: () => _t });
var gt = new Set(`abstract.and.array.as.break.callable.case.catch.class.clone.const.continue.declare.default.do.echo.else.elseif.empty.enddeclare.endfor.endforeach.endif.endswitch.endwhile.enum.eval.exit.extends.false.final.finally.fn.for.foreach.from.function.global.goto.if.implements.include.include_once.instanceof.insteadof.interface.isset.list.match.namespace.new.null.or.print.private.protected.public.readonly.require.require_once.return.static.switch.throw.trait.true.try.unset.use.var.while.xor.yield`.split(`.`));
var _t = /* @__PURE__ */ new Set([`bool`, `float`, `int`, `iterable`, `mixed`, `never`, `object`, `string`, `void`]);
var vt = (e, t2) => e === `#` || e + t2 === `//` ? 1 : e + t2 === `/*` ? 2 : 0;
var yt = (e, t2) => t2 === `
` ? 1 : e + t2 === `*/` ? 2 : 0;
var bt = n({ tokenize: () => xt });
var xt = (e) => [[n2, e]];
var St = n({ caseInsensitive: () => true, keywords: () => Ct, onCommentEnd: () => Tt, onCommentStart: () => wt });
var Ct = new Set(`begin.break.catch.class.continue.data.define.do.dynamicparam.else.elseif.end.enum.exit.filter.finally.for.foreach.from.function.if.in.param.process.return.switch.throw.trap.try.until.using.while`.split(`.`));
var wt = (e, t2) => e === `#` ? 1 : e + t2 === `<#` ? 2 : 0;
var Tt = (e, t2) => t2 === `
` ? 1 : e + t2 === `#>` ? 2 : 0;
var Et = n({ keywords: () => Dt, onCommentEnd: () => kt, onCommentStart: () => Ot });
var Dt = new Set(`and.as.assert.async.await.break.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.nonlocal.not.or.pass.raise.return.try.while.with.yield`.split(`.`));
var Ot = (e, t2) => +(e === `#`);
var kt = (e, t2) => +(t2 === `
`);
var At = n({ keywords: () => jt, onCommentEnd: () => Pt, onCommentStart: () => Nt });
var jt = new Set(`BEGIN.END.__ENCODING__.__FILE__.__LINE__.alias.and.begin.break.case.class.def.defined.do.else.elsif.end.ensure.false.for.if.in.module.next.nil.not.or.redo.rescue.retry.return.self.super.then.true.undef.unless.until.when.while.yield`.split(`.`));
function Mt(e, t2) {
  return e > 0 && t2[e - 1] !== `
` ? false : /^=begin(?:\s|$)/.test(t2.slice(e));
}
function Nt(e, t2, n3, r2) {
  return e === `#` ? 1 : e === `=` && Mt(n3, r2) ? 2 : 0;
}
function Pt(e, t2, n3, r2) {
  if (t2 !== `
`) return 0;
  let i2 = r2.lastIndexOf(`
`, n3 - 1) + 1, a2 = r2.slice(i2, n3);
  return /^=end(?:\s|$)/.test(a2) ? 2 : 1;
}
var Ft = n({ keywords: () => It, onQuote: () => Lt });
var It = new Set(`as.break.const.continue.crate.else.enum.extern.false.fn.for.if.impl.in.let.loop.match.mod.move.mut.pub.ref.return.self.Self.static.struct.super.trait.true.type.unsafe.use.where.while.async.await.dyn.abstract.become.box.do.final.macro.override.priv.typeof.unsized.virtual.yield.try`.split(`.`));
function Lt(e, t2, n3) {
  if (e !== `'` || t2 + 1 >= n3.length) return 1;
  let r2 = n3[t2 + 1];
  if (r2 === `\\`) {
    let e2 = t2 + 2;
    for (; e2 < n3.length; ) {
      if (n3[e2] === `\\`) {
        e2 += 2;
        continue;
      }
      if (n3[e2] === `'`) return e2 - t2 + 1;
      e2++;
    }
    return n3.length - t2;
  }
  if (r2 === `_`) return 2;
  if (/[a-zA-Z]/.test(r2)) {
    let e2 = t2 + 2;
    for (; e2 < n3.length && /[a-zA-Z0-9_]/.test(n3[e2]); ) e2++;
    return e2 < n3.length && n3[e2] === `'` ? e2 - t2 + 1 : e2 - t2;
  }
  return 1;
}
var Rt = n({ keywords: () => zt, onCommentEnd: () => J, onCommentStart: () => q });
var zt = /* @__PURE__ */ new Set([`case`, `coproc`, `do`, `done`, `elif`, `else`, `esac`, `export`, `fi`, `for`, `function`, `if`, `in`, `local`, `readonly`, `return`, `select`, `then`, `time`, `until`, `while`]);
var Bt = n({ caseInsensitive: () => true, keywords: () => Vt, onCommentEnd: () => Wt, onCommentStart: () => Ut, typeKeywords: () => Ht });
var Vt = new Set(`add.all.alter.and.as.asc.between.by.case.check.column.constraint.create.cross.database.default.delete.desc.distinct.drop.else.end.exists.foreign.from.full.group.having.in.index.inner.insert.into.is.join.key.left.like.limit.not.null.offset.on.or.order.outer.primary.references.right.select.set.table.then.union.unique.update.values.view.when.where.with`.split(`.`));
var Ht = /* @__PURE__ */ new Set([`bigint`, `binary`, `bit`, `blob`, `boolean`, `char`, `date`, `datetime`, `decimal`, `double`, `float`, `int`, `integer`, `interval`, `json`, `numeric`, `real`, `smallint`, `text`, `time`, `timestamp`, `uuid`, `varchar`]);
var Ut = (e, t2) => {
  let n3 = e + t2;
  return n3 === `--` ? 1 : n3 === `/*` ? 2 : 0;
};
var Wt = (e, t2) => t2 === `
` ? 1 : e + t2 === `*/` ? 2 : 0;
var Gt = n({ keywords: () => Kt, onCommentEnd: () => E, onCommentStart: () => T, typeKeywords: () => qt });
var Kt = new Set(`as.associatedtype.break.case.catch.class.continue.convenience.default.defer.deinit.didSet.do.dynamic.else.enum.extension.fallthrough.false.fileprivate.final.for.func.get.guard.if.import.in.indirect.infix.init.inout.internal.is.lazy.let.mutating.nil.nonmutating.open.operator.override.precedencegroup.private.protocol.public.repeat.required.rethrows.return.self.set.some.static.struct.subscript.super.switch.throw.throws.true.try.typealias.unowned.var.weak.where.while.willSet`.split(`.`));
var qt = /* @__PURE__ */ new Set([`Any`, `Bool`, `Character`, `Double`, `Float`, `Int`, `Never`, `String`, `UInt`, `Void`]);
var Jt = n({ keywords: () => Yt, onCommentEnd: () => J, onCommentStart: () => q, quotedKeys: () => true });
var Yt = /* @__PURE__ */ new Set([`false`, `true`]);
var Xt = n({ tokenize: () => Zt });
var Zt = (e, t2) => Ie(e, { ...t2, typescript: true });
var Qt = n({ jsx: () => true, keywords: () => Ke, onCommentEnd: () => Ye, onCommentStart: () => Je, regex: () => false, templateStrings: () => false, tokenize: () => We });
var $t = n({ jsx: () => true, keywords: () => Ke, onCommentEnd: () => Ye, onCommentStart: () => Je, regex: () => false, templateStrings: () => false, tokenize: () => We });
var en = n({ keywords: () => tn, onCommentEnd: () => J, onCommentStart: () => q, quotedKeys: () => true });
var tn = /* @__PURE__ */ new Set([`false`, `False`, `FALSE`, `no`, `No`, `NO`, `null`, `Null`, `NULL`, `off`, `Off`, `OFF`, `on`, `On`, `ON`, `true`, `True`, `TRUE`, `yes`, `Yes`, `YES`]);
var nn = n({ keywords: () => rn, onCommentEnd: () => sn, onCommentStart: () => on, onLiteral: () => cn, typeKeywords: () => an });
var rn = new Set(`addrspace.align.allowzero.and.anyframe.anytype.asm.async.await.break.callconv.catch.comptime.const.continue.defer.else.enum.errdefer.error.export.extern.false.fn.for.if.inline.linksection.noalias.noinline.nosuspend.null.opaque.or.orelse.packed.pub.resume.return.struct.suspend.switch.test.threadlocal.true.try.undefined.union.unreachable.usingnamespace.var.volatile.while`.split(`.`));
var an = new Set(`anyerror.anyopaque.bool.c_char.c_int.c_long.c_longdouble.c_longlong.c_short.c_uint.c_ulong.c_ulonglong.c_ushort.comptime_float.comptime_int.f16.f32.f64.f80.f128.i8.i16.i32.i64.i128.isize.noreturn.type.u8.u16.u32.u64.u128.usize.void`.split(`.`));
var on = (e, t2) => +(e + t2 === `//`);
var sn = (e, t2) => +(t2 === `
`);
function cn(e, t2, n3) {
  if (e !== `\\` || n3[t2 + 1] !== `\\`) return 0;
  let r2 = n3.lastIndexOf(`
`, t2 - 1) + 1;
  if (n3.slice(r2, t2).trim()) return 0;
  let i2 = n3.indexOf(`
`, t2 + 2);
  return (i2 === -1 ? n3.length : i2) - t2;
}
function $(e) {
  return { ...e, jsx: false, regex: false, templateStrings: false };
}
function ln() {
  return { javascript: Le, typescript: Xt, css: $(F), python: $(Et), c: $(te), go: $(ce), java: $(Xe), rust: $(Ft), json: $($e), diff: $(re), shell: $(Rt), cpp: $(k), csharp: $(M), sql: $(Bt), html: Ge, vue: $t, svelte: Qt, yaml: $(en), markdown: $(dt), plaintext: $(bt), ruby: $(At), kotlin: $(tt), swift: $(Gt), php: $(ht), toml: $(Jt), powershell: $(St), dockerfile: $(oe), graphql: $(de), hcl: $(me), zig: $(nn), lua: $(it) };
}
var un = ln();
function dn(e) {
  return un[e || `javascript`];
}
function fn(e, t2) {
  let { lang: n3, cx: r2, mark: i2, markLine: a2 } = t2 || {};
  return g(w(e, dn(n3)), { cx: r2, mark: i2, markLine: a2 });
}
export {
  fn as highlight
};
