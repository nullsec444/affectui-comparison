import {
  e
} from "./chunk-JFKWZ3CE.js";
import {
  Fa,
  Go,
  I,
  R,
  Uo,
  Wo,
  ga,
  j,
  t
} from "./chunk-JMKFK6OM.js";
import {
  init_react_BkAXpnfr,
  n
} from "./chunk-C7RUFYJH.js";
import {
  n as n2
} from "./chunk-Y3JEZZ7A.js";
import "./chunk-IV3FP5QI.js";
import "./chunk-CTH3ASD6.js";

// current-assets/LoginPage-BB75HT7y.js
init_react_BkAXpnfr();
var f = [[`path`, { d: `M5.02799 21.363C3.7594 20.7472 2.70468 19.7093 1.87557 18.3139C1.59346 17.8391 1.80778 17.2382 2.30557 16.999C2.80337 16.7598 3.39448 16.9744 3.6865 17.4431C4.33618 18.486 5.09168 19.1707 5.9014 19.5638C6.91266 20.0547 8.12341 20.1467 9.5396 19.756L10.0715 21.6839C8.2818 22.1778 6.55768 22.1056 5.02799 21.363Z`, fill: `currentColor`, fillRule: `evenodd`, clipRule: `evenodd`, key: `0` }], [`path`, { d: `M5.89322 1.25C6.32429 1.25 6.92392 1.3505 7.32982 1.44894C8.04979 1.62356 8.97224 1.95848 9.8331 2.60631C10.5823 2.42952 11.6434 2.22317 13 2.22315C14.3566 2.22312 15.4177 2.42953 16.1669 2.60634C17.0278 1.95849 17.9502 1.62357 18.6702 1.44895C19.0761 1.3505 19.6906 1.25 20.1068 1.25H20.6195L20.8056 1.72771C21.0649 2.3931 21.1586 3.20254 21.1599 3.96175C21.161 4.60091 21.0965 5.24848 20.984 5.81333C21.2885 6.295 21.5728 6.86589 21.7936 7.45193C22.0569 8.15071 22.25 8.92404 22.25 9.6286C22.25 12.0507 21.4385 13.7613 20.1549 14.9682C19.1799 15.8849 17.9698 16.4752 16.7459 16.8944C17.0081 17.2892 17.25 17.811 17.25 18.4951V20.75C17.25 21.6928 17.25 22.1642 16.9571 22.4571C16.6642 22.75 16.1928 22.75 15.25 22.75H10.75C9.80719 22.75 9.33579 22.75 9.04289 22.4571C8.75 22.1642 8.75 21.6928 8.75 20.75V18.4951C8.75 17.811 8.99194 17.2892 9.25414 16.8944C8.03018 16.4752 6.82008 15.8849 5.84507 14.9682C4.56153 13.7613 3.75 12.0507 3.75 9.6286C3.75 8.92404 3.94309 8.15071 4.20638 7.45193C4.4272 6.86589 4.71153 6.29499 5.01601 5.81332C4.90345 5.24848 4.83899 4.6009 4.8401 3.96175C4.8414 3.20254 4.93514 2.3931 5.1944 1.72771L5.38053 1.25H5.89322Z`, fill: `currentColor`, key: `1` }]];
var p = n();
var m = n2();
var h = () => (0, m.jsxs)(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24`, "aria-hidden": `true`, children: [(0, m.jsx)(`path`, { fill: `#4285F4`, d: `M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.08 3.57-5.15 3.57-8.81Z` }), (0, m.jsx)(`path`, { fill: `#34A853`, d: `M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.1A12 12 0 0 0 12 24Z` }), (0, m.jsx)(`path`, { fill: `#FBBC05`, d: `M5.27 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z` }), (0, m.jsx)(`path`, { fill: `#EA4335`, d: `M12 4.75c1.76 0 3.34.6 4.59 1.8l3.43-3.43A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.27 6.6l4 3.1C6.22 6.86 8.87 4.75 12 4.75Z` })] });
var g = { google: `Google`, github: `GitHub` };
function _() {
  let [e2, n3] = (0, p.useState)(``), [_2, v] = (0, p.useState)(``), [y, b] = (0, p.useState)(`idle`), [x, S] = (0, p.useState)(null), [C, w] = (0, p.useState)([]), T = /^\S+@\S+\.\S+$/.test(e2), E = /^\d{6,8}$/.test(_2.trim()), D = new URLSearchParams(window.location.search).get(`checkout`) === `success`;
  (0, p.useEffect)(() => {
    R().then(w);
  }, []);
  let O = async (t2) => {
    if (t2.preventDefault(), !T || y === `sending`) return;
    b(`sending`), S(null);
    let n4 = await Uo(e2);
    n4 ? (S(n4), b(`idle`)) : (v(``), b(`sent`));
  }, k = async (t2) => {
    t2.preventDefault(), E && y !== `verifying` && (b(`verifying`), S(null), await Wo(e2, _2) ? (S(`That code didn't work \u2013 check it or request a new one.`), b(`sent`)) : ga(`/account`));
  }, A = async (e3) => {
    S(null);
    let t2 = await Go(e3);
    t2 && S(t2);
  };
  return (0, m.jsxs)(`div`, { className: `login`, children: [(0, m.jsxs)(`button`, { className: `btn btn--ghost login__back`, onClick: () => window.history.length > 1 ? window.history.back() : ga(`/`), children: [(0, m.jsx)(j, { icon: e, size: 14 }), `Back`] }), (0, m.jsxs)(`div`, { className: `login__card`, children: [(0, m.jsx)(Fa, { size: 28, className: `login__mark` }), (0, m.jsx)(`h1`, { className: `login__title`, children: D ? `Payment received` : `Sign in to ${t.name}` }), (0, m.jsx)(`p`, { className: `login__sub`, children: D ? `Thanks for your purchase. Sign in with the email you used at checkout to unlock Pro.` : `Unlock Pro components, downloads and your access key.` }), y === `sent` || y === `verifying` ? (0, m.jsxs)(`form`, { className: `login__sent`, role: `status`, onSubmit: k, children: [(0, m.jsx)(`strong`, { children: `Check your inbox` }), (0, m.jsxs)(`span`, { children: [`We sent a sign-in link and a code to `, e2, `. Open the link, or enter the code here.`] }), (0, m.jsx)(`input`, { className: `login__code`, inputMode: `numeric`, autoComplete: `one-time-code`, placeholder: `123456`, maxLength: 8, value: _2, onChange: (e3) => v(e3.target.value.replace(/\D/g, ``)), "aria-label": `Sign-in code`, autoFocus: true }), (0, m.jsx)(`button`, { className: `tier__cta tier__cta--primary login__submit`, type: `submit`, disabled: !E || y === `verifying`, children: y === `verifying` ? `Signing in\u2026` : `Sign in with code` }), x && (0, m.jsx)(`p`, { className: `login__error`, children: x }), (0, m.jsx)(`button`, { className: `btn btn--ghost`, type: `button`, onClick: () => b(`idle`), children: `Use a different email` })] }) : (0, m.jsxs)(m.Fragment, { children: [C.length > 0 && (0, m.jsxs)(m.Fragment, { children: [(0, m.jsx)(`div`, { className: `login__social`, children: C.map((e3) => (0, m.jsxs)(`button`, { className: `tier__cta tier__cta--secondary login__alt`, type: `button`, onClick: () => A(e3), children: [e3 === `google` ? (0, m.jsx)(h, {}) : (0, m.jsx)(j, { icon: f, size: 16 }), `Continue with `, g[e3]] }, e3)) }), (0, m.jsx)(`div`, { className: `login__divider`, children: (0, m.jsx)(`span`, { children: `or` }) })] }), (0, m.jsxs)(`form`, { className: `login__form`, onSubmit: O, children: [(0, m.jsxs)(`label`, { className: `login__field`, children: [(0, m.jsx)(`span`, { children: `Email` }), (0, m.jsx)(`input`, { type: `email`, value: e2, onChange: (e3) => n3(e3.target.value), placeholder: `you@example.com`, autoComplete: `email`, autoFocus: true, required: true })] }), (0, m.jsx)(`button`, { className: `tier__cta tier__cta--primary login__submit`, type: `submit`, disabled: !T || y === `sending`, children: y === `sending` ? `Sending\u2026` : `Continue with email` }), x && (0, m.jsx)(`p`, { className: `login__error`, children: x })] })] }), (0, m.jsxs)(`p`, { className: `login__legal`, children: [`No account yet? Signing in creates one \u2013 with any email address. Want Pro? See `, (0, m.jsx)(I, { to: `/pricing`, children: `Pricing` }), `.`] })] })] });
}
export {
  _ as LoginPage
};
