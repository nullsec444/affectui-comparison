import { n as n_1 } from "./rolldown-runtime-BpQH8Ho1.js";
const t = `identifier keyword string class property entity jsxliterals sign comment break space`.split(` `);
const [n, r, i, a, o, s, c, l, u, d, f] = t.map((e, t)=>t);
new Map(t.map((e, t)=>[
        e,
        t
    ]));
function p(e, n) {
    let lines = [];
    let i = 0;
    let a = [];
    let o = false;
    function s(e) {
        lines.push({
            index: i++,
            value: e.map(([, e])=>e).join(``),
            tokens: e.map(([e, n])=>({
                    type: t[e],
                    value: n
                })),
            annotations: []
        });
    }
    for(let e = 0; e < n.length; e++){
        let t = n[e];
        let [r, i] = t;
        if (r !== d) {
            if (i.includes(`
`)) {
                let e = i.split(`
`);
                for(let t = 0; t < e.length; t++){
                    a.push([
                        r,
                        e[t]
                    ]);
                    if (t < e.length - 1) {
                        s(a);
                        a.length = 0;
                    }
                }
            } else {
                a.push(t);
            }
            o = false;
        } else {
            if (o) {
                s([]);
            } else {
                s(a);
                a.length = 0;
            }
            if (e === n.length - 1) {
                s([]);
            }
            o = true;
        }
    }
    if (a.length) {
        s(a);
    }
    return {
        value: e,
        lines
    };
}
function m(e, t) {
    let n = {
        index: e.index,
        value: e.value,
        tokens: e.tokens,
        annotations: e.annotations,
        className: `sh__line${e.annotations.map((e)=>` sh__line--${e}`).join(``)}`,
        style: {},
        properties: {}
    };
    t?.(n);
    return n;
}
function h({ type, value }, n, r) {
    let i = n?.[type];
    let a = {
        type,
        value,
        className: `sh__token--${type}${i ? ` ${i}` : ``}`,
        style: {
            color: `var(--sh-${type})`
        },
        properties: {}
    };
    r?.(a);
    return a;
}
function g(e, t) {
    let n = t?.cx;
    let r = t?.mark;
    let i = t?.markLine;
    if (!n && !r && !i) {
        return e.lines.map((e)=>{
            let t = `sh__line${e.annotations.map((e)=>` sh__line--${e}`).join(``)}`;
            let n = e.tokens.map(({ type, value })=>`<span class="sh__token--${type}" style="color:var(--sh-${type})">${v(value)}</span>`).join(``);
            return `<span class="${v(t)}">${n}</span>`;
        }).join(`
`);
    }
    return e.lines.map((e)=>{
        let t = m(e, i);
        let a = e.tokens.map((e)=>{
            let t = h(e, n, r);
            return `<span ${y({
                ...t.properties,
                className: t.className,
                style: t.style
            })}>${v(t.value)}</span>`;
        }).join(``);
        return `<span ${y({
            ...t.properties,
            className: t.className,
            style: t.style
        })}>${a}</span>`;
    }).join(`
`);
}
const _ = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#039;`
};
var v = (e)=>e.replace(/[&<>"']/g, (e)=>_[e]);
function y(e) {
    let t = Object.entries(e.style || {}).map(([e, t])=>`${e.replace(/[A-Z]/g, (e)=>`-${e.toLowerCase()}`)}:${t}`).join(`;`);
    let n = Object.entries(e).filter(([e, t])=>/^[\w:-]+$/.test(e) && e !== `className` && e !== `style` && t !== false && t != null).map(([e, t])=>{
        if (t === true) {
            return e;
        }
        return `${e}="${v(String(t))}"`;
    }).join(` `);
    return `class="${v(e.className || ``)}"${t ? ` style="${v(t)}"` : ``}${n ? ` ${n}` : ``}`;
}
const ee = new Set(`+-*/%=!&|^~?:.,;()[]{}<>#@\\`.split(``));
const b = ()=>0;
const x = (e)=>e === `_` || e === `$` || /[\p{L}\p{N}]/u.test(e);
function S(e, t) {
    while(t < e.length && /\s/.test(e[t])){
        t++;
    }
    return e[t] === `:`;
}
function C(e, t) {
    if (typeof t?.tokenize == `function`) {
        return t.tokenize(e, t);
    }
    let s = t?.keywords || new Set;
    let c = t?.typeKeywords || new Set;
    let p = t?.onCommentStart || b;
    let m = t?.onCommentEnd || b;
    let h = t?.caseInsensitive ? (e)=>e.toLowerCase() : (e)=>e;
    let g = [];
    let _ = ``;
    function v(e, t) {
        if (t) {
            g.push([
                e,
                t
            ]);
            if (e !== f && e !== d) {
                _ = t;
            }
        }
    }
    for(let g = 0; g < e.length;){
        let y = e[g];
        let b = e[g + 1];
        let C = p(y, b, g, e);
        if (C) {
            let t = g++;
            while(g < e.length){
                if (m(e[g - 1], e[g], g, e, t) == C) {
                    g++;
                    break;
                }
                g++;
            }
            v(u, e.slice(t, g));
            continue;
        }
        let w = t?.onLiteral?.(y, g, e);
        if (w) {
            v(i, e.slice(g, g + w));
            g += w;
            continue;
        }
        if (typeof t?.onQuote == `function` && y === `'`) {
            let r = t.onQuote(y, g, e);
            if (typeof r == `number` && r >= 1) {
                v(n, e.slice(g, g + r));
                g += r;
                continue;
            }
        }
        if (y === `"` || y === `'` || t?.templateStrings && y === "`") {
            let n = y;
            let r = g++;
            while(g < e.length){
                if (e[g] === `\\`) {
                    g++;
                } else if (e[g] === n) {
                    g++;
                    break;
                }
                g++;
            }
            let a = e.slice(r, g);
            v(t?.quotedKeys && S(e, g) ? o : i, a);
            continue;
        }
        if (y === `
`) {
            v(d, y);
            g++;
            continue;
        }
        if (/[^\S\r\n]/.test(y)) {
            let t = g++;
            while(g < e.length && /[^\S\r\n]/.test(e[g])){
                g++;
            }
            v(f, e.slice(t, g));
            continue;
        }
        if (x(y)) {
            let t = g++;
            while(g < e.length && x(e[g])){
                g++;
            }
            if (/^\d/.test(y) && e[g] === `.` && /\d/.test(e[g + 1] || ``)) {
                for(g++; g < e.length && x(e[g]);){
                    g++;
                }
            }
            let i = e.slice(t, g);
            let l = h(i);
            v(c.has(l) ? a : s.has(l) ? r : _ === `.` ? o : /^\d/.test(i) || i === `null` || /^\p{Lu}/u.test(i) ? a : n, i);
            continue;
        }
        if (ee.has(y)) {
            v(l, y);
            g++;
            continue;
        }
        v(i, y);
        g++;
    }
    return g;
}
function w(e, t) {
    let n = p(e, C(e, t));
    if (t?.annotateLine) {
        for (let e of n.lines){
            t.annotateLine(e);
        }
    }
    return n;
}
const T = (e, t)=>{
    let n = e + t;
    if (n === `//`) {
        return 1;
    }
    if (n === `/*`) {
        return 2;
    }
    return 0;
};
const E = (e, t)=>{
    if (t === `
`) {
        return 1;
    }
    if (e + t === `*/`) {
        return 2;
    }
    return 0;
};
const te = n_1({
    keywords: ()=>O,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>D
});
var D = new Set([
    `void`,
    `char`,
    `short`,
    `int`,
    `long`,
    `float`,
    `double`,
    `signed`,
    `unsigned`,
    `_Bool`,
    `_Complex`,
    `_Imaginary`
]);
var O = new Set(`auto.break.case.const.continue.default.do.else.enum.extern.for.goto.if.inline.register.restrict.return.sizeof.static.struct.switch.typedef.union.volatile.while._Alignas._Alignof._Atomic._Generic._Noreturn._Static_assert._Thread_local`.split(`.`));
const k = n_1({
    keywords: ()=>A,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>j
});
var A = new Set(`alignas.alignof.and.and_eq.asm.auto.bitand.bitor.break.case.catch.class.compl.concept.const.consteval.constexpr.constinit.const_cast.continue.co_await.co_return.co_yield.decltype.default.delete.do.dynamic_cast.else.enum.explicit.export.extern.false.for.friend.goto.if.inline.mutable.namespace.new.noexcept.not.not_eq.nullptr.operator.or.or_eq.private.protected.public.register.reinterpret_cast.requires.return.sizeof.static.static_assert.static_cast.struct.switch.template.this.thread_local.throw.true.try.typedef.typeid.typename.union.using.virtual.volatile.while.xor.xor_eq`.split(`.`));
var j = new Set([
    `bool`,
    `char`,
    `char8_t`,
    `char16_t`,
    `char32_t`,
    `double`,
    `float`,
    `int`,
    `long`,
    `short`,
    `signed`,
    `unsigned`,
    `void`,
    `wchar_t`
]);
const M = n_1({
    keywords: ()=>N,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>P
});
var N = new Set(`abstract.as.async.await.base.break.case.catch.checked.class.const.continue.default.delegate.do.else.enum.event.explicit.extern.false.finally.fixed.for.foreach.from.get.global.goto.if.implicit.in.init.interface.internal.into.is.join.let.lock.namespace.new.null.on.operator.orderby.out.override.params.partial.private.protected.public.readonly.record.ref.remove.required.return.sealed.select.set.sizeof.stackalloc.static.struct.switch.this.throw.true.try.typeof.unchecked.unsafe.using.value.virtual.volatile.when.where.while.with.yield`.split(`.`));
var P = new Set([
    `bool`,
    `byte`,
    `char`,
    `decimal`,
    `double`,
    `dynamic`,
    `float`,
    `int`,
    `long`,
    `nint`,
    `nuint`,
    `object`,
    `sbyte`,
    `short`,
    `string`,
    `uint`,
    `ulong`,
    `ushort`,
    `void`
]);
const F = n_1({
    keywords: ()=>I,
    onCommentEnd: ()=>R,
    onCommentStart: ()=>L,
    onLiteral: ()=>z,
    tokenize: ()=>K
});
var I = new Set([
    `@media`,
    `@import`,
    `@keyframes`,
    `@font-face`,
    `@supports`,
    `@page`,
    `@counter-style`,
    `@font-feature-values`,
    `@viewport`,
    `@counter-style`,
    `@font-feature-values`,
    `@document`
]);
var L = (e, t)=>+(e + t === `/*`);
var R = (e, t)=>+(e + t === `*/`);
var z = (e, t, n)=>e === `#` && n.slice(t).match(/^#(?:[\da-f]{8}|[\da-f]{6}|[\da-f]{4}|[\da-f]{3})(?![\w-])/i)?.[0].length || 0;
const B = (e)=>e === f || e === d || e === u;
const V = ([e, t])=>e === n || e === a || e === l && t === `-`;
const H = ([e])=>e === n || e === a || e === o;
const U = (e)=>H(e) && !/^\d/.test(e[1]);
const W = ([e, t])=>e === l && t === `-`;
const G = (e)=>{
    for(let t = 0; t < e.length; t++){
        let n = t;
        let r = t;
        if (W(e[r])) {
            while(e[r] && W(e[r])){
                r++;
            }
            if (!e[r] || !U(e[r])) {
                continue;
            }
            n = r++;
        } else if (U(e[r])) {
            r++;
        } else {
            continue;
        }
        let i = n > t;
        while(e[r] && W(e[r])){
            let t = r;
            while(e[r] && W(e[r])){
                r++;
            }
            if (!e[r] || !H(e[r])) {
                r = t;
                break;
            }
            i = true;
            r++;
        }
        if (!i) {
            continue;
        }
        let a = e.slice(t, r).map(([, e])=>e).join(``);
        e.splice(t, r - t, [
            e[n][0],
            a
        ]);
    }
};
const ne = (e, t)=>{
    let n = 0;
    let r = 0;
    for(let i = t; i < e.length; i++){
        let [t, a] = e[i];
        if (t === l) {
            if (a === `(`) {
                n++;
            } else if (a === `)`) {
                n--;
            } else if (a === `[`) {
                r++;
            } else if (a === `]`) {
                r--;
            } else if (!n && !r && a === `{`) {
                return true;
            } else if (!n && !r && (a === `;` || a === `}`)) {
                return false;
            }
        }
    }
    return false;
};
var K = (e, t)=>{
    let n = C(e, {
        ...t,
        tokenize: undefined
    });
    G(n);
    let r = 0;
    let i = false;
    for(let e = 0; e < n.length; e++){
        let [t, a] = n[e];
        if (t === l && a === `{`) {
            r++;
            i = true;
            continue;
        }
        if (t === l && a === `}`) {
            r--;
            i = false;
            continue;
        }
        if (t === l && a === `;`) {
            i = r > 0;
            continue;
        }
        if (!i || B(t)) {
            continue;
        }
        let s = e;
        let c = e;
        while(c < n.length && V(n[c])){
            c++;
        }
        let u = c;
        while(u < n.length && B(n[u][0])){
            u++;
        }
        if (c > s && n[u]?.[0] === l && n[u][1] === `:` && !ne(n, u + 1)) {
            let e = n.slice(s, c).map(([, e])=>e).join(``);
            n.splice(s, c - s, [
                o,
                e
            ]);
        }
        i = false;
    }
    return n;
};
const re = n_1({
    annotateLine: ()=>ae,
    keywords: ()=>ie
});
var ie = new Set([]);
var ae = (e)=>{
    let t = ``;
    if (e.value.startsWith(`+`) && !e.value.startsWith(`+++`)) {
        t = `diff-add`;
    } else if (e.value.startsWith(`-`) && !e.value.startsWith(`---`)) {
        t = `diff-remove`;
    } else if (e.value.startsWith(`@@`)) {
        t = `diff-hunk`;
    } else if (/^(diff --git|index |--- |\+\+\+ )/.test(e.value)) {
        t = `diff-meta`;
        for (let t of e.tokens){
            if (t.type === `property`) {
                t.type = `identifier`;
            }
        }
    }
    if (t) {
        e.annotations.push(t);
    }
};
const q = (e)=>+(e === `#`);
const J = (e, t)=>+(t === `
`);
const oe = n_1({
    caseInsensitive: ()=>true,
    keywords: ()=>se,
    onCommentEnd: ()=>J,
    onCommentStart: ()=>q
});
var se = new Set([
    `add`,
    `arg`,
    `cmd`,
    `copy`,
    `entrypoint`,
    `env`,
    `expose`,
    `from`,
    `healthcheck`,
    `label`,
    `maintainer`,
    `onbuild`,
    `run`,
    `shell`,
    `stopsignal`,
    `user`,
    `volume`,
    `workdir`
]);
const ce = n_1({
    keywords: ()=>ue,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>le
});
var le = new Set([
    `bool`,
    `byte`,
    `complex64`,
    `complex128`,
    `error`,
    `float32`,
    `float64`,
    `int`,
    `int8`,
    `int16`,
    `int32`,
    `int64`,
    `rune`,
    `string`,
    `uint`,
    `uint8`,
    `uint16`,
    `uint32`,
    `uint64`,
    `uintptr`
]);
var ue = new Set([
    `break`,
    `case`,
    `chan`,
    `const`,
    `continue`,
    `default`,
    `defer`,
    `else`,
    `fallthrough`,
    `for`,
    `func`,
    `go`,
    `goto`,
    `if`,
    `import`,
    `interface`,
    `map`,
    `package`,
    `range`,
    `return`,
    `select`,
    `struct`,
    `switch`,
    `type`,
    `var`
]);
const de = n_1({
    keywords: ()=>fe,
    onCommentEnd: ()=>J,
    onCommentStart: ()=>q,
    typeKeywords: ()=>pe
});
var fe = new Set([
    `directive`,
    `enum`,
    `extend`,
    `fragment`,
    `implements`,
    `input`,
    `interface`,
    `mutation`,
    `on`,
    `query`,
    `repeatable`,
    `scalar`,
    `schema`,
    `subscription`,
    `type`,
    `union`
]);
var pe = new Set([
    `Boolean`,
    `Float`,
    `ID`,
    `Int`,
    `String`
]);
const me = n_1({
    keywords: ()=>he,
    onCommentEnd: ()=>_e,
    onCommentStart: ()=>ge
});
var he = new Set([
    `false`,
    `for`,
    `if`,
    `in`,
    `null`,
    `true`
]);
var ge = (e, t)=>{
    if (e === `#` || e + t === `//`) {
        return 1;
    }
    if (e + t === `/*`) {
        return 2;
    }
    return 0;
};
var _e = (e, t)=>{
    if (t === `
`) {
        return 1;
    }
    if (e + t === `*/`) {
        return 2;
    }
    return 0;
};
const Y = new Set([
    `<`,
    `>`,
    `{`,
    `}`,
    `[`,
    `]`
]);
const keywords = new Set(`for.do.while.if.else.return.function.var.let.const.true.false.undefined.this.new.delete.typeof.in.instanceof.void.break.continue.switch.case.default.throw.try.catch.finally.debugger.with.yield.async.await.class.extends.super.import.export.from.static`.split(`.`));
const ye = new Set([
    ...keywords,
    `type`,
    `interface`,
    `enum`,
    `implements`,
    `readonly`,
    `abstract`,
    `declare`,
    `namespace`,
    `module`,
    `private`,
    `protected`,
    `public`,
    `override`,
    `keyof`,
    `infer`,
    `is`,
    `asserts`,
    `satisfies`,
    `as`,
    `unknown`,
    `never`,
    `any`,
    `number`,
    `string`,
    `boolean`,
    `bigint`,
    `symbol`,
    `object`
]);
const be = new Set([
    `+`,
    `-`,
    `*`,
    `/`,
    `%`,
    `=`,
    `!`,
    `&`,
    `|`,
    `^`,
    `~`,
    `!`,
    `?`,
    `:`,
    `.`,
    `,`,
    `;`,
    `'`,
    `"`,
    `.`,
    `(`,
    `)`,
    `[`,
    `]`,
    `#`,
    `@`,
    `\\`,
    ...Y
]);
const xe = {
    keywords,
    onCommentStart,
    onCommentEnd,
    jsx: true,
    regex: true,
    templateStrings: true
};
function Se(e) {
    return {
        ...xe,
        ...e
    };
}
function Ce(e) {
    let t = 0;
    if (/\binterface\s+[A-Za-z_$][\w$]*/.test(e)) {
        t += 2;
    }
    if (/\btype\s+[A-Za-z_$][\w$]*\s*=/.test(e)) {
        t += 2;
    }
    if (/\benum\s+[A-Za-z_$][\w$]*/.test(e)) {
        t += 2;
    }
    if (/\b(?:implements|readonly|declare|namespace|satisfies|infer|keyof|asserts)\b/.test(e)) {
        t += 2;
    }
    if (/:\s*[A-Za-z_$][\w$]*(?:<[^>\n]+>)?(?:\[\])?(?=\s*[,)=;{])/m.test(e)) {
        t += 1;
    }
    if (/\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*:\s*/.test(e)) {
        t += 1;
    }
    if (/\)\s*:\s*[A-Za-z_$][\w$]*(?:<[^>\n]+>)?(?:\[\])?\s*(?:=>|\{)/.test(e)) {
        t += 1;
    }
    return t >= 2;
}
function we(e, t) {
    if (e[t] !== `<`) {
        return false;
    }
    let n = 0;
    let r = false;
    for(let i = t; i < e.length; i++){
        let t = e[i];
        if (t === `<`) {
            n++;
            continue;
        }
        if (t === `>`) {
            n--;
            if (n === 0) {
                let t = i + 1;
                while(t < e.length && /\s/.test(e[t])){
                    t++;
                }
                if (!(r && e[t] === `(`)) {
                    return false;
                }
                let n = e.slice(t, t + 320);
                return /\)\s*(?::[\s\S]{0,120}?)?=>/.test(n);
            }
            continue;
        }
        if (n !== 0) {
            if (/[$A-Za-z_]/.test(t)) {
                r = true;
                continue;
            }
            if (!/[\s,\.\=\?\:\|\&\[\]]/.test(t)) {
                return false;
            }
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
function onCommentStart(e, t) {
    let n = e + t;
    if (n === `/*`) {
        return 2;
    }
    return +(n === `//`);
}
function onCommentEnd(e, t) {
    if (e + t === `*/`) {
        return 2;
    }
    return +(t === `
`);
}
function Pe(e) {
    return e[0] === `/` && !onCommentStart(e[0], e[1]);
}
function Fe(e, t) {
    let n = t + 1;
    while(n < e.length && /\s/.test(e[n])){
        n++;
    }
    return e[n] === `:`;
}
function Ie(e, t) {
    let p = Se(t);
    let m = p.keywords !== xe.keywords;
    let h = typeof p.typescript == `boolean` ? p.typescript : Ce(e);
    let g = m ? p.keywords : h ? ye : keywords;
    let { onCommentStart, onCommentEnd } = p;
    let y = p.typeKeywords instanceof Set ? p.typeKeywords : null;
    let ee = p.jsx !== false;
    let b = p.regex !== false;
    let x = p.templateStrings !== false;
    let S = p.caseInsensitive ? (e)=>e.toLowerCase() : (e)=>e;
    let C = (e)=>x && Ae(e);
    let w = ``;
    let T = -1;
    let E = [
        -1,
        ``
    ];
    let te = [
        -2,
        ``
    ];
    let D = [];
    let O = false;
    let k = 0;
    let A = 0;
    let j = 0;
    let M = 0;
    let N = ()=>O && !A && !k;
    let P = ()=>k;
    let F = ()=>N() && M;
    let I = null;
    let L = 0;
    let R = false;
    let z = 0;
    let B = 0;
    let V = ()=>I !== null;
    let H = ()=>R;
    let U = ()=>B > z;
    let W = ()=>B > 0 && B === z;
    let G = ()=>V() || U();
    function ne(e) {
        let t = e === `
`;
        if (P()) {
            if (V()) {
                return i;
            }
            let [, t] = E;
            if (Z(e)) {
                if (t === `<` || t === `</`) {
                    return s;
                }
                if (!j && /^\s+$/.test(D[D.length - 1]?.[1] || ``)) {
                    return o;
                }
            }
        }
        if (F()) {
            return c;
        }
        if (V() || U()) {
            return i;
        }
        if (y && y.has(S(e))) {
            if (E[1] === `.`) {
                return n;
            }
            return a;
        }
        if (g.has(S(e))) {
            if (E[1] === `.`) {
                return n;
            }
            return r;
        }
        if (t) {
            return d;
        }
        if (X(e)) {
            return f;
        }
        if (e.split(``).every(Te)) {
            return l;
        }
        if (De(e)) {
            if (P() && !j) {
                return n;
            }
            return a;
        }
        if (Z(e)) {
            let e = E[1] === `.` && Z(te[1]);
            if (!G() && !e) {
                return n;
            }
            if (e) {
                return o;
            }
        }
        return i;
    }
    let K = (e, t)=>{
        if (t) {
            w = t;
        }
        if (w) {
            T = typeof e == `number` ? e : ne(w);
            let t = [
                T,
                w
            ];
            if (T !== f && T !== d) {
                te = E;
                E = t;
            }
            if (P() && T === l) {
                if (w === `{`) {
                    j++;
                }
                if (w === `}`) {
                    j--;
                }
            }
            D.push(t);
        }
        w = ``;
    };
    for(let t = 0; t < e.length; t++){
        let r = e[t];
        let s = e[t - 1];
        let c = e[t + 1];
        let d = s + r;
        let f = r + c;
        if (typeof p.onQuote == `function` && r === `'` && !V() && !F() && !U()) {
            let i = p.onQuote(r, t, e);
            if (typeof i == `number` && i >= 1 && !Number.isNaN(i)) {
                let r = Math.min(i, e.length - t);
                let a = t + r;
                K();
                w = e.slice(t, a);
                K(n);
                t = a - 1;
                continue;
            }
        }
        if (je(r) && !F() && !U()) {
            K();
            let n = false;
            if (I && r === I) {
                I = null;
                n = true;
            } else if (!I) {
                I = r;
                L = D.length;
            }
            K(i, r);
            if (p.quotedKeys && n && Fe(e, t)) {
                for(let e = L; e < D.length; e++){
                    D[e][0] = o;
                }
            }
            continue;
        }
        if (C(r)) {
            K();
            B += U() ? -1 : 1;
            K(i, r);
            continue;
        }
        if (U() && f === "${") {
            z++;
            K(i);
            K(l, f);
            t++;
            continue;
        }
        if (W() && r === `}`) {
            K();
            z--;
            K(l, r);
            continue;
        }
        if (N() && r === `{`) {
            K();
            K(l, r);
            A = 1;
            continue;
        }
        if (O) {
            if (!k && r === `<`) {
                K();
                if (c === `/`) {
                    k = 2;
                    w = f;
                    t++;
                } else {
                    k = 1;
                    w = r;
                }
                K(l);
                continue;
            }
            if (k) {
                if (r === `>` && !`/=`.includes(s)) {
                    K();
                    if (k === 1) {
                        k = 0;
                        M++;
                    } else {
                        k = 0;
                        O = false;
                    }
                    K(l, r);
                    continue;
                }
                if (f === `/>` || f === `</`) {
                    if (w !== `<` && w !== `/`) {
                        K();
                    }
                    if (f === `/>`) {
                        k = 0;
                    } else {
                        M--;
                    }
                    if (!M) {
                        O = false;
                    }
                    w = f;
                    t++;
                    K(l);
                    continue;
                }
                if (r === `<`) {
                    K();
                    w = r;
                    K(l);
                    continue;
                }
                if (r === `-` && w && !G() && !F()) {
                    let n = t + 1;
                    while(n < e.length && /[$\w-]/.test(e[n])){
                        n++;
                    }
                    K(o, w + e.slice(t, n));
                    t = n - 1;
                    continue;
                }
                if (c === `=` && !G() && !X(r)) {
                    if (X(w)) {
                        K();
                    }
                    let e = w + r;
                    if (Z(e)) {
                        K(o, e);
                        continue;
                    }
                }
            }
        }
        if (ee && !k && (r === `<` && ke(c) || f === `</`)) {
            let i = t - 1;
            while(i >= 0 && /\s/.test(e[i])){
                i--;
            }
            let o = i >= 0 ? e[i] : ``;
            let [s, u] = E;
            let d = false;
            let f = false;
            if (w && !X(w)) {
                let e = w;
                if (De(e) || e === `true` || e === `false`) {
                    d = true;
                } else if (g.has(e) && Z(e)) {
                    f = true;
                } else if (Z(e)) {
                    d = true;
                }
            }
            let p = r === `<` && /[$\w\]\)]/.test(o) && (d || !f && (s === n || s === a || s === l && (u === `)` || u === `]`)));
            let m = r === `<` && we(e, t);
            if (!p && !m) {
                k = c === `/` ? 2 : 1;
            }
            if (r === `<` && (c === `/` || Oe(c)) && !p && !m && !G() && !F() && !H()) {
                O = true;
            }
        }
        let m = je(r) || C(r);
        let h = U();
        let y = b && !O && Pe(f);
        let x = F();
        if (m || h || je(I)) {
            w += r;
            if (r === `\\`) {
                w += e[++t] || ``;
            }
        } else if (y) {
            K();
            let [n, a] = E;
            if (y && n !== -1 && !(n === l && a !== `)` || n === u)) {
                w = r;
                K();
                continue;
            }
            R = true;
            let o = t++;
            let s = false;
            let c = false;
            for(; t < e.length && e[t] !== `
`; t++){
                let n = e[t];
                if (n === `\\`) {
                    if (e[t + 1] === `
`) {
                        break;
                    }
                    t++;
                    continue;
                }
                if (n === `[`) {
                    c = true;
                }
                if (n === `]`) {
                    c = false;
                }
                if (n === `/` && !c) {
                    for(s = true; /^[a-z]$/.test(e[t + 1]);){
                        t++;
                    }
                    break;
                }
            }
            R = false;
            if (o !== t && s) {
                w = e.slice(o, t + 1);
                K(i);
            } else {
                w = r;
                K();
                t = o;
            }
        } else if (onCommentStart(r, c, t, e)) {
            K();
            let n = t;
            let i = onCommentStart(r, c, t, e);
            if (i) {
                for(; t < e.length && onCommentEnd(e[t - 1], e[t], t, e) != i; t++);
            }
            w = e.slice(n, t + 1);
            K(u);
        } else if (r === ` ` || r === `
`) {
            if (r === ` ` && (X(w) || !w || x)) {
                let n = t + 1;
                while(e[n] === ` `){
                    n++;
                }
                w += e.slice(t, n);
                t = n - 1;
                if (e[n] === `<`) {
                    K();
                }
            } else {
                K();
                w = r;
                K();
            }
        } else {
            if (A && r === `}`) {
                K();
                w = r;
                K();
                A--;
            } else if (x && !Y.has(r) || U() || (Ee(r) === Ee(w[w.length - 1]) || N()) && !be.has(r)) {
                w += r;
            } else {
                if (d === `</`) {
                    w = d;
                }
                K();
                if (d !== `</`) {
                    w = r;
                }
                if (f === `</` || f === `/>`) {
                    w = f;
                    K();
                    t++;
                } else if (Y.has(r)) {
                    K();
                }
            }
            if (A && r === `{`) {
                A++;
            }
        }
    }
    K();
    return D;
}
const javascript = n_1({
    tokenize: ()=>Re
});
var Re = Ie;
const ze = {
    keywords: new Set,
    jsx: true,
    regex: false,
    templateStrings: false,
    onCommentStart: (e, t, n, r)=>{
        if (r.startsWith(`<!--`, n)) {
            return 2;
        }
        return 0;
    },
    onCommentEnd: (e, t, n, r)=>{
        if (r.slice(n - 2, n + 1) === `-->`) {
            return 2;
        }
        return 0;
    }
};
const Q = (e)=>Re(e, ze);
const Be = /^<\s*(script|style)\b/i;
const Ve = (tag)=>RegExp(`</\\s*${tag}\\s*>`, `ig`);
function He(e, start) {
    let n = ``;
    for(let r = start; r < e.length; r++){
        let t = e[r];
        if (n) {
            if (t === n) {
                n = ``;
            }
        } else if (t === `"` || t === `'`) {
            n = t;
        } else if (t === `>`) {
            return r + 1;
        }
    }
    return -1;
}
function Ue(e) {
    let t = [];
    let start = 0;
    while(start < e.length){
        if (e.startsWith(`<!--`, start)) {
            let t = e.indexOf(`-->`, start + 4);
            start = t === -1 ? e.length : t + 3;
            continue;
        }
        if (e[start] !== `<`) {
            start++;
            continue;
        }
        let openEnd = He(e, start);
        if (openEnd === -1) {
            break;
        }
        let i = e.slice(start, openEnd).match(Be);
        if (!i) {
            start = openEnd;
            continue;
        }
        let tag = i[1].toLowerCase();
        let o = Ve(tag);
        o.lastIndex = openEnd;
        let s = o.exec(e);
        if (!s) {
            start = openEnd;
            continue;
        }
        t.push({
            start,
            openEnd,
            closeStart: s.index,
            end: o.lastIndex,
            tag
        });
        start = o.lastIndex;
    }
    return t;
}
function We(e) {
    let t = [];
    let n = 0;
    for (let r of Ue(e)){
        let { start, openEnd, closeStart, end, tag } = r;
        t.push(...Q(e.slice(n, start)));
        t.push(...Q(e.slice(start, openEnd)));
        t.push(...tag === `style` ? K(e.slice(openEnd, closeStart)) : Re(e.slice(openEnd, closeStart), {
            jsx: false
        }));
        t.push(...Q(e.slice(closeStart, end)));
        n = end;
    }
    t.push(...Q(e.slice(n)));
    return t;
}
const html = n_1({
    jsx: ()=>true,
    keywords: ()=>Ke,
    onCommentEnd: ()=>Ye,
    onCommentStart: ()=>Je,
    regex: ()=>false,
    templateStrings: ()=>false,
    tokenize: ()=>qe
});
var Ke = new Set([]);
var qe = We;
var Je = (e, t, n, r)=>{
    if (r.startsWith(`<!--`, n)) {
        return 2;
    }
    return 0;
};
var Ye = (e, t, n, r)=>{
    if (r.slice(n - 2, n + 1) === `-->`) {
        return 2;
    }
    return 0;
};
const Xe = n_1({
    keywords: ()=>Qe,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>Ze
});
var Ze = new Set([
    `boolean`,
    `byte`,
    `char`,
    `double`,
    `float`,
    `int`,
    `long`,
    `short`,
    `void`
]);
var Qe = new Set(`abstract.assert.break.case.catch.class.const.continue.default.do.else.enum.extends.final.finally.for.goto.if.implements.import.instanceof.interface.native.new.package.private.protected.public.return.static.strictfp.super.switch.synchronized.this.throw.throws.transient.try.volatile.while`.split(`.`));
const $e = n_1({
    keywords: ()=>et,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    quotedKeys: ()=>true
});
var et = new Set([
    `true`,
    `false`,
    `null`
]);
const tt = n_1({
    keywords: ()=>nt,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>rt
});
var nt = new Set(`as.break.by.catch.class.companion.const.constructor.continue.data.do.else.enum.false.finally.for.fun.get.if.import.in.infix.init.interface.internal.is.lateinit.noinline.null.object.open.operator.out.override.package.private.protected.public.reified.return.sealed.set.suspend.tailrec.this.throw.true.try.typealias.val.var.vararg.when.where.while`.split(`.`));
var rt = new Set([
    `Any`,
    `Boolean`,
    `Byte`,
    `Char`,
    `Double`,
    `Float`,
    `Int`,
    `Long`,
    `Nothing`,
    `Short`,
    `String`,
    `Unit`
]);
const it = n_1({
    keywords: ()=>at,
    onCommentEnd: ()=>st,
    onCommentStart: ()=>ot,
    onLiteral: ()=>ct
});
var at = new Set([
    `and`,
    `break`,
    `do`,
    `else`,
    `elseif`,
    `end`,
    `false`,
    `for`,
    `function`,
    `goto`,
    `if`,
    `in`,
    `local`,
    `nil`,
    `not`,
    `or`,
    `repeat`,
    `return`,
    `then`,
    `true`,
    `until`,
    `while`
]);
function ot(e, t, n, r) {
    if (e === `#` && n === 0 && t === `!`) {
        return 1;
    }
    if (e + t === `--`) {
        if (/^--\[=*\[/.test(r.slice(n))) {
            return 2;
        }
        return 1;
    }
    return 0;
}
function st(e, t, n, r, i) {
    if (t === `
`) {
        return 1;
    }
    if (t !== `]`) {
        return 0;
    }
    let a = r.slice(i).match(/^--\[(=*)\[/);
    if (!a) {
        return 0;
    }
    let o = `]${a[1]}]`;
    if (r.slice(n - o.length + 1, n + 1) === o) {
        return 2;
    }
    return 0;
}
function ct(e, t, n) {
    if (e !== `[`) {
        return 0;
    }
    let r = n.slice(t).match(/^\[(=*)\[/);
    if (!r) {
        return 0;
    }
    let i = `]${r[1]}]`;
    let a = n.indexOf(i, t + r[0].length);
    if (a === -1) {
        return n.length - t;
    }
    return a + i.length - t;
}
const lt = ()=>0;
const ut = ()=>0;
const dt = n_1({
    annotateLine: ()=>mt,
    keywords: ()=>ft,
    onCommentEnd: ()=>ut,
    onCommentStart: ()=>lt,
    tokenize: ()=>pt
});
var ft = new Set([]);
var pt = (e)=>{
    let t = [];
    let r = ``;
    let i = false;
    let a = (e, n)=>{
        if (!n) {
            return;
        }
        let r = t[t.length - 1];
        if (r?.[0] === e) {
            r[1] += n;
        } else {
            t.push([
                e,
                n
            ]);
        }
    };
    for (let t of e.match(/[^\n]*(?:\n|$)/g) || []){
        if (!t) {
            continue;
        }
        let e = t.endsWith(`
`) ? `
` : ``;
        let o = e ? t.slice(0, -1) : t;
        let s = [];
        let c = o.match(/^(?: {0,3}>[ \t]?)*/)?.[0] || ``;
        if (!r || i) {
            for (let e of c.matchAll(/>/g)){
                s.push([
                    e.index,
                    e.index + 1
                ]);
            }
        }
        let u = c.length;
        let d = 0;
        while(d < 3 && o[u] === ` `){
            u++;
            d++;
        }
        let f = o.slice(u).match(/^(`{3,}|~{3,})/)?.[1];
        if (r) {
            if (f?.[0] === r[0] && f.length >= r.length && /^\s*$/.test(o.slice(u + f.length))) {
                s.push([
                    u,
                    u + f.length
                ]);
                r = ``;
                i = false;
            }
        } else if (f) {
            s.push([
                u,
                u + f.length
            ]);
            r = f;
            i = c.includes(`>`);
        } else {
            let e = o.slice(u).match(/^(#{1,6}(?=\s)|(?:[-+*]|\d+[.)])(?=\s)|(?:(?:\*\s*){3,}|(?:-\s*){3,}|(?:_\s*){3,})$)/)?.[1];
            if (e) {
                s.push([
                    u,
                    u + e.length
                ]);
            }
            for (let e of o.matchAll(/(`+)(.*?)\1|(\*{1,3}|_{1,3}|~{2})(?=\S)(.*?\S)\3/g)){
                let t = e[1] || e[3];
                if (!(o[e.index - 1] === `\\` || t[0] === `_` && /\w/.test(o[e.index - 1] || ``))) {
                    s.push([
                        e.index,
                        e.index + t.length
                    ], [
                        e.index + e[0].length - t.length,
                        e.index + e[0].length
                    ]);
                }
            }
        }
        let p = 0;
        for (let [e, t] of s.sort((e, t)=>e[0] - t[0])){
            if (!(e < p)) {
                a(n, o.slice(p, e));
                a(l, o.slice(e, t));
                p = t;
            }
        }
        a(n, o.slice(p) + e);
    }
    return t;
};
var mt = (e)=>{
    let t = ``;
    if (/^#{1,6}\s/.test(e.value)) {
        t = `markdown-heading`;
    } else if (/^\s*>/.test(e.value)) {
        t = `markdown-quote`;
    } else if (/^\s*(?:[-*+] |\d+[.)] )/.test(e.value)) {
        t = `markdown-list`;
    } else if (/^\s*```/.test(e.value)) {
        t = `markdown-fence`;
    }
    if (t) {
        e.annotations.push(t);
    }
};
const ht = n_1({
    keywords: ()=>gt,
    onCommentEnd: ()=>yt,
    onCommentStart: ()=>vt,
    typeKeywords: ()=>_t
});
var gt = new Set(`abstract.and.array.as.break.callable.case.catch.class.clone.const.continue.declare.default.do.echo.else.elseif.empty.enddeclare.endfor.endforeach.endif.endswitch.endwhile.enum.eval.exit.extends.false.final.finally.fn.for.foreach.from.function.global.goto.if.implements.include.include_once.instanceof.insteadof.interface.isset.list.match.namespace.new.null.or.print.private.protected.public.readonly.require.require_once.return.static.switch.throw.trait.true.try.unset.use.var.while.xor.yield`.split(`.`));
var _t = new Set([
    `bool`,
    `float`,
    `int`,
    `iterable`,
    `mixed`,
    `never`,
    `object`,
    `string`,
    `void`
]);
var vt = (e, t)=>{
    if (e === `#` || e + t === `//`) {
        return 1;
    }
    if (e + t === `/*`) {
        return 2;
    }
    return 0;
};
var yt = (e, t)=>{
    if (t === `
`) {
        return 1;
    }
    if (e + t === `*/`) {
        return 2;
    }
    return 0;
};
const bt = n_1({
    tokenize: ()=>xt
});
var xt = (e)=>[
        [
            n,
            e
        ]
    ];
const St = n_1({
    caseInsensitive: ()=>true,
    keywords: ()=>Ct,
    onCommentEnd: ()=>Tt,
    onCommentStart: ()=>wt
});
var Ct = new Set(`begin.break.catch.class.continue.data.define.do.dynamicparam.else.elseif.end.enum.exit.filter.finally.for.foreach.from.function.if.in.param.process.return.switch.throw.trap.try.until.using.while`.split(`.`));
var wt = (e, t)=>{
    if (e === `#`) {
        return 1;
    }
    if (e + t === `<#`) {
        return 2;
    }
    return 0;
};
var Tt = (e, t)=>{
    if (t === `
`) {
        return 1;
    }
    if (e + t === `#>`) {
        return 2;
    }
    return 0;
};
const Et = n_1({
    keywords: ()=>Dt,
    onCommentEnd: ()=>kt,
    onCommentStart: ()=>Ot
});
var Dt = new Set(`and.as.assert.async.await.break.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.nonlocal.not.or.pass.raise.return.try.while.with.yield`.split(`.`));
var Ot = (e, t)=>+(e === `#`);
var kt = (e, t)=>+(t === `
`);
const At = n_1({
    keywords: ()=>jt,
    onCommentEnd: ()=>Pt,
    onCommentStart: ()=>Nt
});
var jt = new Set(`BEGIN.END.__ENCODING__.__FILE__.__LINE__.alias.and.begin.break.case.class.def.defined.do.else.elsif.end.ensure.false.for.if.in.module.next.nil.not.or.redo.rescue.retry.return.self.super.then.true.undef.unless.until.when.while.yield`.split(`.`));
function Mt(e, t) {
    if (e > 0 && t[e - 1] !== `
`) {
        return false;
    }
    return /^=begin(?:\s|$)/.test(t.slice(e));
}
function Nt(e, t, n, r) {
    if (e === `#`) {
        return 1;
    }
    if (e === `=` && Mt(n, r)) {
        return 2;
    }
    return 0;
}
function Pt(e, t, n, r) {
    if (t !== `
`) {
        return 0;
    }
    let i = r.lastIndexOf(`
`, n - 1) + 1;
    let a = r.slice(i, n);
    if (/^=end(?:\s|$)/.test(a)) {
        return 2;
    }
    return 1;
}
const Ft = n_1({
    keywords: ()=>It,
    onQuote: ()=>Lt
});
var It = new Set(`as.break.const.continue.crate.else.enum.extern.false.fn.for.if.impl.in.let.loop.match.mod.move.mut.pub.ref.return.self.Self.static.struct.super.trait.true.type.unsafe.use.where.while.async.await.dyn.abstract.become.box.do.final.macro.override.priv.typeof.unsized.virtual.yield.try`.split(`.`));
function Lt(e, t, n) {
    if (e !== `'` || t + 1 >= n.length) {
        return 1;
    }
    let r = n[t + 1];
    if (r === `\\`) {
        let e = t + 2;
        while(e < n.length){
            if (n[e] === `\\`) {
                e += 2;
                continue;
            }
            if (n[e] === `'`) {
                return e - t + 1;
            }
            e++;
        }
        return n.length - t;
    }
    if (r === `_`) {
        return 2;
    }
    if (/[a-zA-Z]/.test(r)) {
        let e = t + 2;
        while(e < n.length && /[a-zA-Z0-9_]/.test(n[e])){
            e++;
        }
        if (e < n.length && n[e] === `'`) {
            return e - t + 1;
        }
        return e - t;
    }
    return 1;
}
const Rt = n_1({
    keywords: ()=>zt,
    onCommentEnd: ()=>J,
    onCommentStart: ()=>q
});
var zt = new Set([
    `case`,
    `coproc`,
    `do`,
    `done`,
    `elif`,
    `else`,
    `esac`,
    `export`,
    `fi`,
    `for`,
    `function`,
    `if`,
    `in`,
    `local`,
    `readonly`,
    `return`,
    `select`,
    `then`,
    `time`,
    `until`,
    `while`
]);
const Bt = n_1({
    caseInsensitive: ()=>true,
    keywords: ()=>Vt,
    onCommentEnd: ()=>Wt,
    onCommentStart: ()=>Ut,
    typeKeywords: ()=>Ht
});
var Vt = new Set(`add.all.alter.and.as.asc.between.by.case.check.column.constraint.create.cross.database.default.delete.desc.distinct.drop.else.end.exists.foreign.from.full.group.having.in.index.inner.insert.into.is.join.key.left.like.limit.not.null.offset.on.or.order.outer.primary.references.right.select.set.table.then.union.unique.update.values.view.when.where.with`.split(`.`));
var Ht = new Set([
    `bigint`,
    `binary`,
    `bit`,
    `blob`,
    `boolean`,
    `char`,
    `date`,
    `datetime`,
    `decimal`,
    `double`,
    `float`,
    `int`,
    `integer`,
    `interval`,
    `json`,
    `numeric`,
    `real`,
    `smallint`,
    `text`,
    `time`,
    `timestamp`,
    `uuid`,
    `varchar`
]);
var Ut = (e, t)=>{
    let n = e + t;
    if (n === `--`) {
        return 1;
    }
    if (n === `/*`) {
        return 2;
    }
    return 0;
};
var Wt = (e, t)=>{
    if (t === `
`) {
        return 1;
    }
    if (e + t === `*/`) {
        return 2;
    }
    return 0;
};
const Gt = n_1({
    keywords: ()=>Kt,
    onCommentEnd: ()=>E,
    onCommentStart: ()=>T,
    typeKeywords: ()=>qt
});
var Kt = new Set(`as.associatedtype.break.case.catch.class.continue.convenience.default.defer.deinit.didSet.do.dynamic.else.enum.extension.fallthrough.false.fileprivate.final.for.func.get.guard.if.import.in.indirect.infix.init.inout.internal.is.lazy.let.mutating.nil.nonmutating.open.operator.override.precedencegroup.private.protocol.public.repeat.required.rethrows.return.self.set.some.static.struct.subscript.super.switch.throw.throws.true.try.typealias.unowned.var.weak.where.while.willSet`.split(`.`));
var qt = new Set([
    `Any`,
    `Bool`,
    `Character`,
    `Double`,
    `Float`,
    `Int`,
    `Never`,
    `String`,
    `UInt`,
    `Void`
]);
const Jt = n_1({
    keywords: ()=>Yt,
    onCommentEnd: ()=>J,
    onCommentStart: ()=>q,
    quotedKeys: ()=>true
});
var Yt = new Set([
    `false`,
    `true`
]);
const typescript = n_1({
    tokenize: ()=>Zt
});
var Zt = (e, t)=>Ie(e, {
        ...t,
        typescript: true
    });
const svelte = n_1({
    jsx: ()=>true,
    keywords: ()=>Ke,
    onCommentEnd: ()=>Ye,
    onCommentStart: ()=>Je,
    regex: ()=>false,
    templateStrings: ()=>false,
    tokenize: ()=>We
});
const vue = n_1({
    jsx: ()=>true,
    keywords: ()=>Ke,
    onCommentEnd: ()=>Ye,
    onCommentStart: ()=>Je,
    regex: ()=>false,
    templateStrings: ()=>false,
    tokenize: ()=>We
});
const en = n_1({
    keywords: ()=>tn,
    onCommentEnd: ()=>J,
    onCommentStart: ()=>q,
    quotedKeys: ()=>true
});
var tn = new Set([
    `false`,
    `False`,
    `FALSE`,
    `no`,
    `No`,
    `NO`,
    `null`,
    `Null`,
    `NULL`,
    `off`,
    `Off`,
    `OFF`,
    `on`,
    `On`,
    `ON`,
    `true`,
    `True`,
    `TRUE`,
    `yes`,
    `Yes`,
    `YES`
]);
const nn = n_1({
    keywords: ()=>rn,
    onCommentEnd: ()=>sn,
    onCommentStart: ()=>on,
    onLiteral: ()=>cn,
    typeKeywords: ()=>an
});
var rn = new Set(`addrspace.align.allowzero.and.anyframe.anytype.asm.async.await.break.callconv.catch.comptime.const.continue.defer.else.enum.errdefer.error.export.extern.false.fn.for.if.inline.linksection.noalias.noinline.nosuspend.null.opaque.or.orelse.packed.pub.resume.return.struct.suspend.switch.test.threadlocal.true.try.undefined.union.unreachable.usingnamespace.var.volatile.while`.split(`.`));
var an = new Set(`anyerror.anyopaque.bool.c_char.c_int.c_long.c_longdouble.c_longlong.c_short.c_uint.c_ulong.c_ulonglong.c_ushort.comptime_float.comptime_int.f16.f32.f64.f80.f128.i8.i16.i32.i64.i128.isize.noreturn.type.u8.u16.u32.u64.u128.usize.void`.split(`.`));
var on = (e, t)=>+(e + t === `//`);
var sn = (e, t)=>+(t === `
`);
function cn(e, t, n) {
    if (e !== `\\` || n[t + 1] !== `\\`) {
        return 0;
    }
    let r = n.lastIndexOf(`
`, t - 1) + 1;
    if (n.slice(r, t).trim()) {
        return 0;
    }
    let i = n.indexOf(`
`, t + 2);
    return (i === -1 ? n.length : i) - t;
}
function $(e) {
    return {
        ...e,
        jsx: false,
        regex: false,
        templateStrings: false
    };
}
function ln() {
    return {
        javascript,
        typescript,
        css: $(F),
        python: $(Et),
        c: $(te),
        go: $(ce),
        java: $(Xe),
        rust: $(Ft),
        json: $($e),
        diff: $(re),
        shell: $(Rt),
        cpp: $(k),
        csharp: $(M),
        sql: $(Bt),
        html,
        vue,
        svelte,
        yaml: $(en),
        markdown: $(dt),
        plaintext: $(bt),
        ruby: $(At),
        kotlin: $(tt),
        swift: $(Gt),
        php: $(ht),
        toml: $(Jt),
        powershell: $(St),
        dockerfile: $(oe),
        graphql: $(de),
        hcl: $(me),
        zig: $(nn),
        lua: $(it)
    };
}
const un = ln();
function dn(lang) {
    return un[lang || `javascript`];
}
export function highlight(e, t) {
    let { lang, cx, mark, markLine } = t || {};
    return g(w(e, dn(lang)), {
        cx,
        mark,
        markLine
    });
}
