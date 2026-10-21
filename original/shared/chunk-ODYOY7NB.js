import {
  init_react_BkAXpnfr,
  n as n2
} from "./chunk-C7RUFYJH.js";
import {
  n as n3
} from "./chunk-Y3JEZZ7A.js";
import {
  init_rolldown_runtime_BpQH8Ho1,
  n,
  t
} from "./chunk-IV3FP5QI.js";

// current-assets/supabase-CqDuy7ko.js
var e = function(e3) {
  return `/` + e3;
};
var t2 = {};
var n4 = function(e3) {
  return e3.pathname.endsWith(`.css`);
};
var r = function(r4, i3, a3) {
  let o2 = Promise.resolve();
  if (i3 && i3.length > 0) {
    let l = function(e3) {
      return Promise.all(e3.map((e4) => Promise.resolve(e4).then((e5) => ({ status: `fulfilled`, value: e5 }), (e5) => ({ status: `rejected`, reason: e5 }))));
    }, u = function(e3) {
      return import.meta.resolve ? new URL(import.meta.resolve(e3)) : new URL(e3, import.meta.url);
    };
    let r5, s2 = document.querySelector(`meta[property=csp-nonce]`), c = s2?.nonce || s2?.getAttribute(`nonce`);
    o2 = l(i3.map((i4) => {
      i4 = e(i4, a3);
      let o3 = u(i4);
      if (o3.href in t2) return;
      t2[o3.href] = true;
      let s3 = n4(o3);
      if (r5 === void 0) {
        r5 = { all: /* @__PURE__ */ new Set(), styles: /* @__PURE__ */ new Set() };
        let e3 = document.getElementsByTagName(`link`);
        for (let t5 = e3.length - 1; t5 >= 0; t5--) {
          let n7 = e3[t5];
          r5.all.add(n7.href), n7.rel === `stylesheet` && r5.styles.add(n7.href);
        }
      }
      if ((s3 ? r5.styles : r5.all).has(o3.href)) return;
      let l2 = document.createElement(`link`);
      if (l2.rel = s3 ? `stylesheet` : `modulepreload`, s3 || (l2.as = `script`), l2.crossOrigin = ``, l2.href = o3.href, c && l2.setAttribute(`nonce`, c), document.head.appendChild(l2), s3) return new Promise((e3, t5) => {
        l2.addEventListener(`load`, e3), l2.addEventListener(`error`, () => t5(Error(`Unable to preload CSS for ${o3}`)));
      });
    }).filter((e3) => e3 !== void 0));
  }
  function s(e3) {
    let t5 = new Event(`vite:preloadError`, { cancelable: true });
    if (t5.payload = e3, window.dispatchEvent(t5), !t5.defaultPrevented) throw e3;
  }
  return o2.then((e3) => {
    for (let t5 of e3 || []) t5.status === `rejected` && s(t5.reason);
    return r4().catch(s);
  });
};
var i = () => r(() => import("./supabaseClient-MZLUyPvg-VPS2KHGQ.js").then((e3) => e3.supabase), []);
function a() {
  try {
    if (/access_token|refresh_token|[?&]code=|token_hash/.test(window.location.hash + window.location.search)) return true;
    for (let e3 = 0; e3 < localStorage.length; e3++) {
      let t5 = localStorage.key(e3) ?? ``;
      if (t5.startsWith(`sb-`) && t5.endsWith(`-auth-token`)) return true;
    }
  } catch {
    return true;
  }
  return false;
}

// current-assets/site-D86YA7B9.js
var e2 = { googleTagId: `G-KSXWJT5S69`, metaPixelId: `1121395016946016` };
var t3 = { name: `affectUI`, registry: `@affectui`, url: `https://www.affectui.com`, tagline: `Agent-ready React UI for AI products \u2013 one file each, no dependencies.`, author: { name: `Flo`, url: `https://x.com/flohoeller` }, contactEmail: `hello@affectui.com`, promo: { enabled: false, code: `AFFECT20`, percent: 20, delaySeconds: 45, hours: 24 }, links: { pro: `/pricing`, github: `https://github.com/flohoeller/affectui`, feedback: `#`, x: `https://x.com/flohoeller`, support: `/contact?topic=support` } };
var n5 = { pnpm: `pnpm dlx`, npm: `npx`, yarn: `yarn dlx`, bun: `bunx --bun` };
var r2 = (e3, r4 = `pnpm`) => `${n5[r4]} shadcn@latest add ${t3.url}/r/${e3}.json`;
var i2 = { currency: `USD`, individual: 199, team: 499, teamSeats: 10 };
var a2 = [{ id: `founder`, name: `Founding offer`, badge: `Founder price`, price: 99, until: 25 }, { id: `early`, name: `Early access`, badge: `Early access price`, price: 149, until: 50 }];

// current-assets/HugeiconsIcon-C2cDExRS.js
init_react_BkAXpnfr();
var t4 = n2();
var n6 = { xmlns: `http://www.w3.org/2000/svg`, width: 24, height: 24, viewBox: `0 0 24 24`, fill: `none` };
var r3 = (0, t4.forwardRef)(({ color: e3 = `currentColor`, size: r4 = 24, strokeWidth: i3, absoluteStrokeWidth: a3 = false, className: o2 = ``, altIcon: s, showAlt: c = false, icon: l, primaryColor: u, secondaryColor: d, disableSecondaryOpacity: f = false, ...p }, m2) => {
  let h2 = i3 === void 0 ? void 0 : a3 ? Number(i3) * 24 / Number(r4) : i3, g2 = h2 === void 0 ? {} : { strokeWidth: h2, stroke: `currentColor` }, _2 = { ref: m2, ...n6, width: r4, height: r4, color: u || e3, className: o2, ...g2, ...p }, v2 = [...c && s ? s : l].sort(([, e4], [, t5]) => {
    let n7 = e4.opacity !== void 0;
    return t5.opacity === void 0 ? n7 ? -1 : 0 : 1;
  }).map(([n7, r5]) => {
    let i4 = r5.opacity !== void 0, a4 = i4 && !f ? r5.opacity : void 0, o3 = d ? { ...r5.stroke === void 0 ? { fill: i4 ? d : u || e3 } : { stroke: i4 ? d : u || e3 } } : {};
    return (0, t4.createElement)(n7, { ...r5, ...g2, ...o3, opacity: a4, key: r5.key });
  });
  return (0, t4.createElement)(`svg`, _2, v2);
});
r3.displayName = `HugeiconsIcon`;

// current-assets/index-CxCSU7QX.js
init_rolldown_runtime_BpQH8Ho1();
init_react_BkAXpnfr();
var __vite__mapDeps = (i3, m2 = __vite__mapDeps, d = m2.f || (m2.f = ["assets/demo-BpwDm3_5.js", "assets/react-BkAXpnfr.js", "assets/rolldown-runtime-BpQH8Ho1.js", "assets/jsx-runtime-CTsRTJUX.js", "assets/demo-CeLlHdJ-.css", "assets/demo.clean-BdsziCoX.js", "assets/demo-Bq86T0RX.js", "assets/demo-w8HemkFL.css", "assets/demo.clean-DQ6MZQcD.js", "assets/demo-CCeL1VNp.js", "assets/demo-UKD1ftz8.css", "assets/demo.clean-DC3N3Pap.js", "assets/demo-crn6hRBF.js", "assets/component-CabyG3jS.js", "assets/demo-s3qRD0hW.css", "assets/demo.clean-BjIF1-j-.js", "assets/demo-Bzg0Jm8m.js", "assets/demo-DeplEzVC.css", "assets/demo.clean-CykqoJC9.js", "assets/demo-Ddb1Dch3.js", "assets/demo-CeS5eV_E.css", "assets/demo.clean-CX0onucT.js", "assets/demo-NvLm8mGU.js", "assets/demo-BT26IZiJ.css", "assets/demo.clean-B3KZIS0J.js", "assets/demo-DtfhNS6P.js", "assets/component-D_NiR_dg.js", "assets/demo-CoGzhDuu.css", "assets/demo.clean-Dkj-1MDj.js", "assets/demo-CZQO5p6C.js", "assets/demo-DA1DNmMV.css", "assets/demo.clean-D4m3L74b.js", "assets/demo-65xDbaC9.js", "assets/demo-B_Ua7zhz.css", "assets/demo.clean-dYQPE1hb.js", "assets/demo-BXlx9pcF.js", "assets/component-CHAr1UD2.js", "assets/demo-CWncpXCS.css", "assets/demo.clean-D3ZXLUIO.js", "assets/demo-Da5-XF-c.js", "assets/component-x-U6EJWL.js", "assets/demo-Be3B1cuN.css", "assets/demo.clean-DkN_5ZQ5.js", "assets/demo-D_fnjW-9.js", "assets/demo-CBYN1eoj.css", "assets/demo.clean-CUpZACNd.js", "assets/demo-DI66HSts.js", "assets/component-MWY_GX0G.js", "assets/demo-BtJ5ReLf.css", "assets/demo.clean-CCr62Jz8.js", "assets/demo-xRyZ19Jc.js", "assets/demo-C0huakYH.css", "assets/demo.clean-CnchuWt9.js", "assets/demo-tcGbF7g2.js", "assets/demo-CEWDYID4.css", "assets/demo.clean-DhS0HlaW.js", "assets/demo-Cde_N0C0.js", "assets/demo-BZTl0vFF.css", "assets/demo.clean-BkpdJDtQ.js", "assets/demo-TTVz3U3f.js", "assets/demo-BiHvyvIV.css", "assets/demo.clean-DgcZN_UD.js", "assets/demo-BlNBUErF.js", "assets/demo-Dn6GavXm.css", "assets/demo.clean-Lan03W3V.js", "assets/demo-BgsJzBTE.js", "assets/demo-DQOONSHb.css", "assets/demo.clean-BmiiHyGl.js", "assets/demo-DgdoHbQS.js", "assets/demo-Ct0hTa3E.css", "assets/demo.clean-DbXcMJMS.js", "assets/demo-DGaVy3XD.js", "assets/component-BpWpTuwn.js", "assets/demo-CZta6kRg.css", "assets/demo.clean-OeBBW_7u.js", "assets/demo-CYhBENQa.js", "assets/demo-DSzFpjk6.css", "assets/demo.clean-DZiTLSj_.js", "assets/demo-CcNPpld_.js", "assets/demo-qHs5QTOL.css", "assets/demo.clean-Cwxrnsci.js", "assets/demo-V6j80N0E.js", "assets/demo-Bdl4gtlY.css", "assets/demo.clean-DNxPbueK.js", "assets/demo-BBMr4ztO.js", "assets/demo-CHxHjtGF.css", "assets/demo.clean-BtR7iQdY.js", "assets/demo-CQRf-Cg5.js", "assets/demo-CtX7DdQf.css", "assets/demo.clean-CjJwmC-8.js", "assets/demo-ik_0XYps.js", "assets/demo-BRb4XxkZ.css", "assets/demo.clean-Vp-K1jMG.js", "assets/demo-BkxWHDVt.js", "assets/component-LyBMd15F.js", "assets/demo-H9tuM7PY.css", "assets/demo.clean-Djfm83dS.js", "assets/demo-Y9Qip8LJ.js", "assets/component-7zQPnK-d.js", "assets/demo-Di_7AkW9.css", "assets/demo.clean-BXz9gUDp.js", "assets/demo-5-hgQYhm.js", "assets/demo-DFvtknob.css", "assets/demo.clean-CPhhQKKr.js", "assets/demo-Dxm1xr9_.js", "assets/demo-CJ4z72Ej.css", "assets/demo.clean-CTC16fNW.js", "assets/demo-BQ61UvP8.js", "assets/component-BZJ0c7rx.js", "assets/demo-43cus7LW.css", "assets/demo.clean-B4-Re8fT.js", "assets/demo-CEgv5bR9.js", "assets/demo-CQoJKBzs.css", "assets/demo.clean-C1W0NbsT.js", "assets/demo-CgV2euur.js", "assets/demo-DaCE-JsF.css", "assets/demo.clean-jqs229XM.js", "assets/demo-C580yDTY.js", "assets/demo-BWPo2vC0.css", "assets/demo.clean-B7cgzOPZ.js", "assets/demo-RSBM-GoA.js", "assets/demo-B_-V1qta.css", "assets/demo.clean-gBQjVTxc.js", "assets/demo-BoVVleq1.js", "assets/demo-Dhul4zoE.css", "assets/demo.clean-SPg51xTG.js", "assets/demo-B1zzQqO2.js", "assets/demo-DZ4DQtKG.css", "assets/demo.clean-DKsx9U9O.js", "assets/demo-d_AV0tPL.js", "assets/demo-CKu0wqnS.css", "assets/demo.clean-Du4BhTGQ.js", "assets/demo-BKqcXOSN.js", "assets/demo-CTTiXRUG.css", "assets/demo.clean-CQ9Mgt2p.js", "assets/demo-9sHHhTyA.js", "assets/demo-CtLeN6GG.css", "assets/demo.clean-DiU4wbPA.js", "assets/demo-CctwMXFR.js", "assets/demo-YJNU2W1Y.css", "assets/demo.clean-DRfoB4wl.js", "assets/demo-DlJqXDIq.js", "assets/demo-DxsbjXIi.css", "assets/demo.clean-1KuFFkG8.js", "assets/demo-BzK_zDAD.js", "assets/component-BDo0fvGw.js", "assets/demo-okgBcVKl.css", "assets/demo.clean-D1uXYCFG.js", "assets/demo-Cb1j7tKz.js", "assets/component-BUgiZiPt.js", "assets/demo-BtrsrzeH.css", "assets/demo.clean-DgcWwiZH.js", "assets/demo-Ed3S7lvS.js", "assets/demo-Dfjh_Nog.css", "assets/demo.clean-CnpU6JZL.js", "assets/demo-BOLhhfTT.js", "assets/demo-CBnDBA1e.css", "assets/demo.clean-BYDkomFg.js", "assets/demo-qJGH2Gjh.js", "assets/component-jpqc9dJC.js", "assets/demo-BFeSDQCw.css", "assets/demo.clean-DWvTXnKE.js", "assets/demo-sabUvR7r.js", "assets/component-CQGDXGUk.js", "assets/demo-Bwwy34Kj.css", "assets/demo.clean-CXxA6VEx.js", "assets/demo-D2Q4vYDw.js", "assets/demo-Bd8TQevV.css", "assets/demo.clean-Bfu_rP8L.js", "assets/demo-Cv538yeC.js", "assets/demo-n8KZiTF2.css", "assets/demo.clean-CtdFgWee.js", "assets/demo-C2oxSuna.js", "assets/component-CA_4LgO0.js", "assets/demo-DE2b60zA.css", "assets/demo.clean-q2ZwGlZu.js", "assets/demo-VWNU0E7Q.js", "assets/demo-D2BY6rOC.css", "assets/demo.clean-Cim7onyI.js", "assets/demo-izlk0-DS.js", "assets/component-DxL4SVuQ.js", "assets/demo-CzkiUT9-.css", "assets/demo.clean-BjDeSoUM.js", "assets/demo-BhVeTwOS.js", "assets/demo-DsiVsikb.css", "assets/demo.clean-B-ER_Luk.js", "assets/demo-Dx1zk5ox.js", "assets/demo-4qf089Hm.css", "assets/demo-CZJ2T4nU.js", "assets/demo-lIACZQBf.css", "assets/demo-BiwOrW2x.js", "assets/demo-CT9UQG8Q.css", "assets/demo-rS721rJa.js", "assets/demo-CzHqDxM2.css", "assets/demo-D1arByOa.js", "assets/demo-X4nE4hhv.css", "assets/demo-mNpCRsfS.js", "assets/demo-C0IXn0BJ.css", "assets/demo-Bp-um2Aj.js", "assets/demo-C2bhkcHT.css", "assets/demo-Ytbb4Swi.js", "assets/demo-CW0kyWxi.css", "assets/demo-DWd1ZKX0.js", "assets/demo-mBBe7Cka.css", "assets/demo-BbZ2lqOk.js", "assets/demo--23xacFf.css", "assets/demo-DrrNKEd7.js", "assets/demo-CqFNiKP9.css", "assets/demo-BtlH6dH8.js", "assets/demo-DhPmofCn.css", "assets/demo-C2jfF4UB.js", "assets/demo-C7lGzSvq.css", "assets/demo-MXjIQshC.js", "assets/demo-C84Rtc7Q.css", "assets/demo-CU49Fdlm.js", "assets/demo-LIDC0AW0.css", "assets/demo-DrDu-VuE.js", "assets/demo-Df5bkK6U.css", "assets/demo-Cm2FVMWj.js", "assets/demo-BpX_rAfy.css", "assets/demo-DlhpiUWr.js", "assets/demo-AoQgzkmh.css", "assets/demo-Cm8kSHcX.js", "assets/demo-yLglQlH0.css", "assets/demo-CfD9afHB.js", "assets/demo-BTfB4k9k.css", "assets/demo-B_Bc7Zla.js", "assets/demo-CELo7ePn.css", "assets/demo-CL_ySX-H.js", "assets/demo-C8RkVAZ5.css", "assets/demo-BABw5NIJ.js", "assets/component-WEwHkvy1.js", "assets/demo-DX6xN4by.css", "assets/demo-KQRMxKWn.js", "assets/demo-CPGvV7yx.css", "assets/demo-BTBcqeeL.js", "assets/demo-CG8W-oPE.css", "assets/demo-CkkSZhS9.js", "assets/demo-DT0UlCV-.css", "assets/demo-OZULToi6.js", "assets/demo-bTIz8Fba.css", "assets/demo-D-FldunI.js", "assets/demo-CbCO9TS3.css", "assets/demo-Cwdm4ytX.js", "assets/demo-BBj9PGLg.css", "assets/demo-CmYYw1tl.js", "assets/demo-BsWSSdSp.css", "assets/demo-ClUxDNiT.js", "assets/demo-CrzkFw__.css", "assets/demo-CVKU8Uzh.js", "assets/demo-D3V8sr_3.css", "assets/demo-cWsVSmbI.js", "assets/demo-BeWyOZSS.css", "assets/demo-B3RzKcXL.js", "assets/demo-C3146Vn5.css", "assets/demo-Q0wmIwEm.js", "assets/demo-Bouwhv8z.css", "assets/demo-BWWWdWrI.js", "assets/PresentationBarChart01Icon-C8MfgXhe.js", "assets/component-Dor7H1ln.js", "assets/component-qs8CseUl.js", "assets/HugeiconsIcon-C2cDExRS.js", "assets/ChartColumnIcon-CdOeU6Br.js", "assets/Database01Icon-DrAaO4oe.js", "assets/Globe02Icon-jOAiZzRC.js", "assets/Table01Icon-CpK0cmMJ.js", "assets/UserAdd01Icon-CeNWxiQ5.js", "assets/Analytics01Icon-DzRjULbW.js", "assets/BubbleChatIcon-pbmBjpVO.js", "assets/Calendar03Icon-DcAo2VXN.js", "assets/WorkflowSquare03Icon-KUZ5l40I.js", "assets/Delete02Icon-CsyBlwAn.js", "assets/Dollar01Icon-CKgdstwc.js", "assets/Home01Icon-CtlfDZqB.js", "assets/MoreHorizontalIcon-CBUy2huH.js", "assets/ShoppingBag01Icon-fOOVs0Uq.js", "assets/Target02Icon-B_T0iwXf.js", "assets/demo-eQInHe1Q.js", "assets/Copy01Icon-DrPxamgF.js", "assets/Mail01Icon-qGLuNJQs.js", "assets/RepeatIcon-CJJ1C8N9.js", "assets/demo-iLo3CJ8-.js", "assets/Download04Icon-C2-aGxK5.js", "assets/UserMultipleIcon-BFkjj3cH.js", "assets/demo-DwSEqjaS.js", "assets/demo-C1U6NI7B.js", "assets/demo-Dj5g1Sf_.js", "assets/demo-De2n08Zl.js", "assets/Link01Icon-DMZyIG_F.js", "assets/demo-IfuY4zjH.js", "assets/demo-CUdsyn6m.js", "assets/UserMultiple02Icon-CmkUO2wo.js", "assets/demo-d_U4qihD.js", "assets/demo-CRG7NKBx.js", "assets/demo-CBRMIUgj.js", "assets/demo-4lbOOBUM.js", "assets/demo-Ye53Zfy1.js", "assets/demo-216Xdj1g.css", "assets/demo-B-TgH1P-.js", "assets/demo-Cq9Jvjc6.css", "assets/demo-Dcdtba_V.js", "assets/demo-DO5raLtj.css", "assets/demo-S1hMjDCH.js", "assets/demo-KXXiA1pF.css", "assets/demo-0IZOAjVo.js", "assets/demo-Cqs4NNzb.css", "assets/demo-Cc3_N5Az.js", "assets/demo-Bk7Us5KG.css", "assets/demo-BEzbCisV.js", "assets/demo-Cd_tWGts.css", "assets/demo-BijqyLh8.js", "assets/demo-0-qyOf6s.css", "assets/lib-D_jy-Mlc.js", "assets/BeforeAfter-XemvtPU0.js", "assets/ArrowRight01Icon-JBN5MFu9.js", "assets/RefreshIcon-fjVu6A90.js", "assets/ComponentPage-CfGkuqUP.js", "assets/site-D86YA7B9.js", "assets/PricingPage-BGJTK7yG.js", "assets/DocsPage-Dn22oIr8.js", "assets/LoginPage-BB75HT7y.js", "assets/ArrowLeft01Icon-qNK3q5ZR.js", "assets/ContactPage-DorHHgI_.js", "assets/LegalPage-Bm3lx0aM.js", "assets/LicensePage-wC-NfGoE.js", "assets/AccountPage-DvJClPAR.js", "assets/supabaseClient-MZLUyPvg.js", "assets/PartnerPage-BKenGWHF.js", "assets/supabase-CqDuy7ko.js", "assets/PartnerPage-B8QmlA8_.css"])) => i3.map((i4) => d[i4]);
(function() {
  let e3 = document.createElement(`link`).relList;
  if (e3 && e3.supports && e3.supports(`modulepreload`)) return;
  for (let e4 of document.querySelectorAll(`link[rel="modulepreload"]`)) n7(e4);
  new MutationObserver((e4) => {
    for (let t6 of e4) if (t6.type === `childList`) for (let e5 of t6.addedNodes) e5.tagName === `LINK` && e5.rel === `modulepreload` && n7(e5);
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t5(e4) {
    let t6 = {};
    return e4.integrity && (t6.integrity = e4.integrity), e4.referrerPolicy && (t6.referrerPolicy = e4.referrerPolicy), t6.credentials = e4.crossOrigin === `use-credentials` ? `include` : e4.crossOrigin === `anonymous` ? `omit` : `same-origin`, t6;
  }
  function n7(e4) {
    if (e4.ep) return;
    e4.ep = true;
    let n8 = t5(e4);
    fetch(e4.href, n8);
  }
})();
var m = t((e3) => {
  function t5(e4, t6) {
    var n8 = e4.length;
    e4.push(t6);
    a: for (; 0 < n8; ) {
      var r5 = n8 - 1 >>> 1, a4 = e4[r5];
      if (0 < i3(a4, t6)) e4[r5] = t6, e4[n8] = a4, n8 = r5;
      else break a;
    }
  }
  function n7(e4) {
    return e4.length === 0 ? null : e4[0];
  }
  function r4(e4) {
    if (e4.length === 0) return null;
    var t6 = e4[0], n8 = e4.pop();
    if (n8 !== t6) {
      e4[0] = n8;
      a: for (var r5 = 0, a4 = e4.length, o3 = a4 >>> 1; r5 < o3; ) {
        var s2 = 2 * (r5 + 1) - 1, c2 = e4[s2], l2 = s2 + 1, u2 = e4[l2];
        if (0 > i3(c2, n8)) l2 < a4 && 0 > i3(u2, c2) ? (e4[r5] = u2, e4[l2] = n8, r5 = l2) : (e4[r5] = c2, e4[s2] = n8, r5 = s2);
        else if (l2 < a4 && 0 > i3(u2, n8)) e4[r5] = u2, e4[l2] = n8, r5 = l2;
        else break a;
      }
    }
    return t6;
  }
  function i3(e4, t6) {
    var n8 = e4.sortIndex - t6.sortIndex;
    return n8 === 0 ? e4.id - t6.id : n8;
  }
  if (e3.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a3 = performance;
    e3.unstable_now = function() {
      return a3.now();
    };
  } else {
    var o2 = Date, s = o2.now();
    e3.unstable_now = function() {
      return o2.now() - s;
    };
  }
  var c = [], l = [], u = 1, d = null, f = 3, p = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e4) {
    for (var i4 = n7(l); i4 !== null; ) {
      if (i4.callback === null) r4(l);
      else if (i4.startTime <= e4) r4(l), i4.sortIndex = i4.expirationTime, t5(c, i4);
      else break;
      i4 = n7(l);
    }
  }
  function ee(e4) {
    if (h2 = false, b2(e4), !m2) {
      if (n7(c) !== null) m2 = true, x || (x = true, ae());
      else {
        var t6 = n7(l);
        t6 !== null && ce(ee, t6.startTime - e4);
      }
    }
  }
  var x = false, te = -1, ne = 5, re = -1;
  function ie() {
    return g2 ? true : !(e3.unstable_now() - re < ne);
  }
  function S() {
    if (g2 = false, x) {
      var t6 = e3.unstable_now();
      re = t6;
      var i4 = true;
      try {
        a: {
          m2 = false, h2 && (h2 = false, v2(te), te = -1), p = true;
          var a4 = f;
          try {
            b: {
              for (b2(t6), d = n7(c); d !== null && !(d.expirationTime > t6 && ie()); ) {
                var o3 = d.callback;
                if (typeof o3 == `function`) {
                  d.callback = null, f = d.priorityLevel;
                  var s2 = o3(d.expirationTime <= t6);
                  if (t6 = e3.unstable_now(), typeof s2 == `function`) {
                    d.callback = s2, b2(t6), i4 = true;
                    break b;
                  }
                  d === n7(c) && r4(c), b2(t6);
                } else r4(c);
                d = n7(c);
              }
              if (d !== null) i4 = true;
              else {
                var u2 = n7(l);
                u2 !== null && ce(ee, u2.startTime - t6), i4 = false;
              }
            }
            break a;
          } finally {
            d = null, f = a4, p = false;
          }
          i4 = void 0;
        }
      } finally {
        i4 ? ae() : x = false;
      }
    }
  }
  var ae;
  if (typeof y2 == `function`) ae = function() {
    y2(S);
  };
  else if (typeof MessageChannel < `u`) {
    var oe = new MessageChannel(), se = oe.port2;
    oe.port1.onmessage = S, ae = function() {
      se.postMessage(null);
    };
  } else ae = function() {
    _2(S, 0);
  };
  function ce(t6, n8) {
    te = _2(function() {
      t6(e3.unstable_now());
    }, n8);
  }
  e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(e4) {
    e4.callback = null;
  }, e3.unstable_forceFrameRate = function(e4) {
    0 > e4 || 125 < e4 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : ne = 0 < e4 ? Math.floor(1e3 / e4) : 5;
  }, e3.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e3.unstable_next = function(e4) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t6 = 3;
        break;
      default:
        t6 = f;
    }
    var n8 = f;
    f = t6;
    try {
      return e4();
    } finally {
      f = n8;
    }
  }, e3.unstable_requestPaint = function() {
    g2 = true;
  }, e3.unstable_runWithPriority = function(e4, t6) {
    switch (e4) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e4 = 3;
    }
    var n8 = f;
    f = e4;
    try {
      return t6();
    } finally {
      f = n8;
    }
  }, e3.unstable_scheduleCallback = function(r5, i4, a4) {
    var o3 = e3.unstable_now();
    switch (typeof a4 == `object` && a4 ? (a4 = a4.delay, a4 = typeof a4 == `number` && 0 < a4 ? o3 + a4 : o3) : a4 = o3, r5) {
      case 1:
        var s2 = -1;
        break;
      case 2:
        s2 = 250;
        break;
      case 5:
        s2 = 1073741823;
        break;
      case 4:
        s2 = 1e4;
        break;
      default:
        s2 = 5e3;
    }
    return s2 = a4 + s2, r5 = {
      id: u++,
      callback: i4,
      priorityLevel: r5,
      startTime: a4,
      expirationTime: s2,
      sortIndex: -1
    }, a4 > o3 ? (r5.sortIndex = a4, t5(l, r5), n7(c) === null && r5 === n7(l) && (h2 ? (v2(te), te = -1) : h2 = true, ce(ee, a4 - o3))) : (r5.sortIndex = s2, t5(c, r5), m2 || p || (m2 = true, x || (x = true, ae()))), r5;
  }, e3.unstable_shouldYield = ie, e3.unstable_wrapCallback = function(e4) {
    var t6 = f;
    return function() {
      var n8 = f;
      f = t6;
      try {
        return e4.apply(this, arguments);
      } finally {
        f = n8;
      }
    };
  };
});
var h = t((e3, t5) => {
  t5.exports = m();
});
var g = t((e3) => {
  var t5 = n2();
  function r4(e4) {
    var t6 = `https://react.dev/errors/` + e4;
    if (1 < arguments.length) {
      t6 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n7 = 2; n7 < arguments.length; n7++) t6 += `&args[]=` + encodeURIComponent(arguments[n7]);
    }
    return `Minified React error #` + e4 + `; visit ` + t6 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i3() {
  }
  var a3 = {
    d: {
      f: i3,
      r: function() {
        throw Error(r4(522));
      },
      D: i3,
      C: i3,
      L: i3,
      m: i3,
      X: i3,
      S: i3,
      M: i3
    },
    p: 0,
    findDOMNode: null
  }, o2 = /* @__PURE__ */ Symbol.for(`react.portal`), s = /* @__PURE__ */ Symbol.for(`react.recoverable`), c = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
  function l(e4, t6, n7) {
    var r5 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o2,
      key: r5 == null ? null : r5 === c ? c : `` + r5,
      children: e4,
      containerInfo: t6,
      implementation: n7
    };
  }
  var u = t5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e4, t6) {
    if (e4 === `font`) return ``;
    if (typeof t6 == `string`) return t6 === `use-credentials` ? t6 : ``;
  }
  e3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a3, e3.browser = function(e4) {
    return {
      $$typeof: s,
      _reason: e4
    };
  }, e3.createPortal = function(e4, t6) {
    var n7 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t6 || t6.nodeType !== 1 && t6.nodeType !== 9 && t6.nodeType !== 11) throw Error(r4(299));
    return l(e4, t6, null, n7);
  }, e3.flushSync = function(e4) {
    var t6 = u.T, n7 = a3.p;
    try {
      if (u.T = null, a3.p = 2, e4) return e4();
    } finally {
      u.T = t6, a3.p = n7, a3.d.f();
    }
  }, e3.preconnect = function(e4, t6) {
    typeof e4 == `string` && (t6 ? (t6 = t6.crossOrigin, t6 = typeof t6 == `string` ? t6 === `use-credentials` ? t6 : `` : void 0) : t6 = null, a3.d.C(e4, t6));
  }, e3.prefetchDNS = function(e4) {
    typeof e4 == `string` && a3.d.D(e4);
  }, e3.preinit = function(e4, t6) {
    if (typeof e4 == `string` && t6 && typeof t6.as == `string`) {
      var n7 = t6.as, r5 = d(n7, t6.crossOrigin), i4 = typeof t6.integrity == `string` ? t6.integrity : void 0, o3 = typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0;
      n7 === `style` ? a3.d.S(e4, typeof t6.precedence == `string` ? t6.precedence : void 0, {
        crossOrigin: r5,
        integrity: i4,
        fetchPriority: o3
      }) : n7 === `script` && a3.d.X(e4, {
        crossOrigin: r5,
        integrity: i4,
        fetchPriority: o3,
        nonce: typeof t6.nonce == `string` ? t6.nonce : void 0
      });
    }
  }, e3.preinitModule = function(e4, t6) {
    if (typeof e4 == `string`) {
      if (typeof t6 == `object` && t6) {
        if (t6.as == null || t6.as === `script`) {
          var n7 = d(t6.as, t6.crossOrigin);
          a3.d.M(e4, {
            crossOrigin: n7,
            integrity: typeof t6.integrity == `string` ? t6.integrity : void 0,
            nonce: typeof t6.nonce == `string` ? t6.nonce : void 0,
            fetchPriority: typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0
          });
        }
      } else t6 ?? a3.d.M(e4);
    }
  }, e3.preload = function(e4, t6) {
    if (typeof e4 == `string` && typeof t6 == `object` && t6 && typeof t6.as == `string`) {
      var n7 = t6.as, r5 = d(n7, t6.crossOrigin);
      a3.d.L(e4, n7, {
        crossOrigin: r5,
        integrity: typeof t6.integrity == `string` ? t6.integrity : void 0,
        nonce: typeof t6.nonce == `string` ? t6.nonce : void 0,
        type: typeof t6.type == `string` ? t6.type : void 0,
        fetchPriority: typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0,
        referrerPolicy: typeof t6.referrerPolicy == `string` ? t6.referrerPolicy : void 0,
        imageSrcSet: typeof t6.imageSrcSet == `string` ? t6.imageSrcSet : void 0,
        imageSizes: typeof t6.imageSizes == `string` ? t6.imageSizes : void 0,
        media: typeof t6.media == `string` ? t6.media : void 0
      });
    }
  }, e3.preloadModule = function(e4, t6) {
    if (typeof e4 == `string`) {
      if (t6) {
        var n7 = d(t6.as, t6.crossOrigin);
        a3.d.m(e4, {
          as: typeof t6.as == `string` && t6.as !== `script` ? t6.as : void 0,
          crossOrigin: n7,
          integrity: typeof t6.integrity == `string` ? t6.integrity : void 0,
          nonce: typeof t6.nonce == `string` ? t6.nonce : void 0,
          fetchPriority: typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0
        });
      } else a3.d.m(e4);
    }
  }, e3.requestFormReset = function(e4) {
    a3.d.r(e4);
  }, e3.unstable_batchedUpdates = function(e4, t6) {
    return e4(t6);
  }, e3.useFormState = function(e4, t6, n7) {
    return u.H.useFormState(e4, t6, n7);
  }, e3.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, e3.version = `19.3.0`;
});
var _ = t((e3, t5) => {
  function n7() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n7);
    } catch (e4) {
      console.error(e4);
    }
  }
  n7(), t5.exports = g();
});
var v = t((e3) => {
  var t5 = h(), r4 = n2(), i3 = _();
  function a3(e4) {
    var t6 = `https://react.dev/errors/` + e4;
    if (1 < arguments.length) {
      t6 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n7 = 2; n7 < arguments.length; n7++) t6 += `&args[]=` + encodeURIComponent(arguments[n7]);
    }
    return `Minified React error #` + e4 + `; visit ` + t6 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function o2(e4) {
    return !(!e4 || e4.nodeType !== 1 && e4.nodeType !== 9 && e4.nodeType !== 11);
  }
  function s(e4) {
    for (var t6 = e4, n7 = t6; n7 && !n7.alternate; ) t6 = n7, t6.flags & 4098 && (e4 = t6.return), n7 = t6.return;
    for (; t6.return; ) t6 = t6.return;
    return t6.tag === 3 ? e4 : null;
  }
  function c(e4) {
    if (e4.tag === 13) {
      var t6 = e4.memoizedState;
      if (t6 === null && (e4 = e4.alternate, e4 !== null && (t6 = e4.memoizedState)), t6 !== null) return t6.dehydrated;
    }
    return null;
  }
  function l(e4) {
    if (e4.tag === 31) {
      var t6 = e4.memoizedState;
      if (t6 === null && (e4 = e4.alternate, e4 !== null && (t6 = e4.memoizedState)), t6 !== null) return t6.dehydrated;
    }
    return null;
  }
  function u(e4) {
    if (s(e4) !== e4) throw Error(a3(188));
  }
  function d(e4) {
    var t6 = e4.alternate;
    if (!t6) {
      if (t6 = s(e4), t6 === null) throw Error(a3(188));
      return t6 === e4 ? e4 : null;
    }
    for (var n7 = e4, r5 = t6; ; ) {
      var i4 = n7.return;
      if (i4 === null) break;
      var o3 = i4.alternate;
      if (o3 === null) {
        if (r5 = i4.return, r5 !== null) {
          n7 = r5;
          continue;
        }
        break;
      }
      if (i4.child === o3.child) {
        for (o3 = i4.child; o3; ) {
          if (o3 === n7) return u(i4), e4;
          if (o3 === r5) return u(i4), t6;
          o3 = o3.sibling;
        }
        throw Error(a3(188));
      }
      if (n7.return !== r5.return) n7 = i4, r5 = o3;
      else {
        for (var c2 = false, l2 = i4.child; l2; ) {
          if (l2 === n7) {
            c2 = true, n7 = i4, r5 = o3;
            break;
          }
          if (l2 === r5) {
            c2 = true, r5 = i4, n7 = o3;
            break;
          }
          l2 = l2.sibling;
        }
        if (!c2) {
          for (l2 = o3.child; l2; ) {
            if (l2 === n7) {
              c2 = true, n7 = o3, r5 = i4;
              break;
            }
            if (l2 === r5) {
              c2 = true, r5 = o3, n7 = i4;
              break;
            }
            l2 = l2.sibling;
          }
          if (!c2) throw Error(a3(189));
        }
      }
      if (n7.alternate !== r5) throw Error(a3(190));
    }
    if (n7.tag !== 3) throw Error(a3(188));
    return n7.stateNode.current === n7 ? e4 : t6;
  }
  function f(e4) {
    var t6 = e4.tag;
    if (t6 === 5 || t6 === 26 || t6 === 27 || t6 === 6) return e4;
    for (e4 = e4.child; e4 !== null; ) {
      if (t6 = f(e4), t6 !== null) return t6;
      e4 = e4.sibling;
    }
    return null;
  }
  function p(e4, t6, n7, r5, i4, a4) {
    for (; e4 !== null; ) {
      if ((e4.tag === 5 || e4.tag === 27 || e4.tag === 6) && n7(e4, r5, i4, a4) || (e4.tag !== 22 || e4.memoizedState === null) && (t6 || e4.tag !== 5 && e4.tag !== 27) && p(e4.child, t6, n7, r5, i4, a4)) return true;
      e4 = e4.sibling;
    }
    return false;
  }
  function m2(e4) {
    for (e4 = e4.return; e4 !== null; ) {
      if (e4.tag === 3 || e4.tag === 5 || e4.tag === 27) return e4;
      e4 = e4.return;
    }
    return null;
  }
  function g2(e4) {
    var t6 = false;
    for (e4 = e4.return; e4 !== null && (e4.tag === 4 && (t6 = true), e4.tag !== 3 && e4.tag !== 5 && e4.tag !== 27); ) e4 = e4.return;
    return t6;
  }
  function v2(e4) {
    var t6 = [null, null], n7 = m2(e4);
    return n7 === null || y2(t6, e4, n7.child, {
      foundSelf: false
    }), t6;
  }
  function y2(e4, t6, n7, r5) {
    for (; n7 !== null; ) {
      if (n7 === t6) r5.foundSelf = true;
      else if (n7.tag === 5 || n7.tag === 27 || n7.tag === 6) {
        if (r5.foundSelf) return e4[1] = n7, true;
        e4[0] = n7;
      } else if ((n7.tag !== 22 || n7.memoizedState === null) && y2(e4, t6, n7.child, r5)) return true;
      n7 = n7.sibling;
    }
    return false;
  }
  function b2(e4) {
    switch (e4.tag) {
      case 5:
      case 27:
      case 6:
        return e4.stateNode;
      case 3:
        return e4.stateNode.containerInfo;
      default:
        throw Error(a3(559));
    }
  }
  var ee = null, x = null;
  function te(e4, t6, n7) {
    return e4 === n7 || e4 === t6 && (ee = e4, true);
  }
  function ne(e4, t6, n7) {
    return e4 === n7 ? (x = e4, false) : e4 === t6 && (x !== null && (ee = e4), true);
  }
  function re(e4) {
    if (e4 === null) return null;
    do
      e4 = e4 === null ? null : e4.return;
    while (e4 && e4.tag !== 5 && e4.tag !== 27 && e4.tag !== 3);
    return e4 || null;
  }
  function ie(e4, t6, n7) {
    for (var r5 = 0, i4 = e4; i4; i4 = n7(i4)) r5++;
    i4 = 0;
    for (var a4 = t6; a4; a4 = n7(a4)) i4++;
    for (; 0 < r5 - i4; ) e4 = n7(e4), r5--;
    for (; 0 < i4 - r5; ) t6 = n7(t6), i4--;
    for (; r5--; ) {
      if (e4 === t6 || t6 !== null && e4 === t6.alternate) return e4;
      e4 = n7(e4), t6 = n7(t6);
    }
    return null;
  }
  var S = Object.assign, ae = /* @__PURE__ */ Symbol.for(`react.element`), oe = /* @__PURE__ */ Symbol.for(`react.transitional.element`), se = /* @__PURE__ */ Symbol.for(`react.portal`), ce = /* @__PURE__ */ Symbol.for(`react.fragment`), le = /* @__PURE__ */ Symbol.for(`react.strict_mode`), ue = /* @__PURE__ */ Symbol.for(`react.profiler`), de = /* @__PURE__ */ Symbol.for(`react.consumer`), fe = /* @__PURE__ */ Symbol.for(`react.context`), pe = /* @__PURE__ */ Symbol.for(`react.forward_ref`), me2 = /* @__PURE__ */ Symbol.for(`react.suspense`), he2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), C2 = /* @__PURE__ */ Symbol.for(`react.memo`), ge2 = /* @__PURE__ */ Symbol.for(`react.lazy`), _e2 = /* @__PURE__ */ Symbol.for(`react.activity`), ve2 = /* @__PURE__ */ Symbol.for(`react.legacy_hidden`), ye2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), be2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), xe2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), Se2 = Symbol.iterator;
  function Ce2(e4) {
    return typeof e4 != `object` || !e4 ? null : (e4 = Se2 && e4[Se2] || e4[`@@iterator`], typeof e4 == `function` ? e4 : null);
  }
  var we2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
  function Te2(e4) {
    if (e4 == null) return null;
    if (typeof e4 == `function`) return e4.$$typeof === we2 ? null : e4.displayName || e4.name || null;
    if (typeof e4 == `string`) return e4;
    switch (e4) {
      case ce:
        return `Fragment`;
      case ue:
        return `Profiler`;
      case le:
        return `StrictMode`;
      case me2:
        return `Suspense`;
      case he2:
        return `SuspenseList`;
      case _e2:
        return `Activity`;
      case be2:
        return `ViewTransition`;
    }
    if (typeof e4 == `object`) switch (e4.$$typeof) {
      case se:
        return `Portal`;
      case fe:
        return e4.displayName || `Context`;
      case de:
        return (e4._context.displayName || `Context`) + `.Consumer`;
      case pe:
        var t6 = e4.render;
        return e4 = e4.displayName, e4 ||= (e4 = t6.displayName || t6.name || ``, e4 === `` ? `ForwardRef` : `ForwardRef(` + e4 + `)`), e4;
      case C2:
        return t6 = e4.displayName || null, t6 === null ? Te2(e4.type) || `Memo` : t6;
      case ge2:
        t6 = e4._payload, e4 = e4._init;
        try {
          return Te2(e4(t6));
        } catch {
        }
    }
    return null;
  }
  var Ee2 = Array.isArray, w2 = r4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T2 = i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, De2 = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, Oe2 = [], ke2 = -1;
  function Ae2(e4) {
    return {
      current: e4
    };
  }
  function je2(e4) {
    0 > ke2 || (e4.current = Oe2[ke2], Oe2[ke2] = null, ke2--);
  }
  function E2(e4, t6) {
    ke2++, Oe2[ke2] = e4.current, e4.current = t6;
  }
  var Me2 = Ae2(null), Ne2 = Ae2(null), Pe2 = Ae2(null), Fe2 = Ae2(null);
  function Ie2(e4, t6) {
    switch (E2(Pe2, t6), E2(Ne2, e4), E2(Me2, null), t6.nodeType) {
      case 9:
      case 11:
        e4 = (e4 = t6.documentElement) && (e4 = e4.namespaceURI) ? up(e4) : 0;
        break;
      default:
        if (e4 = t6.tagName, t6 = t6.namespaceURI) t6 = up(t6), e4 = dp(t6, e4);
        else switch (e4) {
          case `svg`:
            e4 = 1;
            break;
          case `math`:
            e4 = 2;
            break;
          default:
            e4 = 0;
        }
    }
    je2(Me2), E2(Me2, e4);
  }
  function Le2() {
    je2(Me2), je2(Ne2), je2(Pe2);
  }
  function Re2(e4) {
    var t6 = e4.memoizedState;
    t6 !== null && (sh._currentValue = t6.memoizedState, E2(Fe2, e4)), t6 = Me2.current;
    var n7 = dp(t6, e4.type);
    t6 !== n7 && (E2(Ne2, e4), E2(Me2, n7));
  }
  function ze2(e4) {
    Ne2.current === e4 && (je2(Me2), je2(Ne2)), Fe2.current === e4 && (je2(Fe2), sh._currentValue = De2);
  }
  var Be2, Ve2;
  function He2(e4) {
    if (Be2 === void 0) try {
      throw Error();
    } catch (e5) {
      var t6 = e5.stack.trim().match(/\n( *(at )?)/);
      Be2 = t6 && t6[1] || ``, Ve2 = -1 < e5.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e5.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
    }
    return `
` + Be2 + e4 + Ve2;
  }
  var Ue2 = false;
  function We2(e4, t6) {
    if (!e4 || Ue2) return ``;
    Ue2 = true;
    var n7 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r5 = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t6) {
              var n8 = function() {
                throw Error();
              };
              if (Object.defineProperty(n8.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n8, []);
                } catch (e5) {
                  var r6 = e5;
                }
                Reflect.construct(e4, [], n8);
              } else {
                try {
                  n8.call();
                } catch (e5) {
                  r6 = e5;
                }
                n8 = false;
                try {
                  var i5 = Object.getOwnPropertyDescriptor(e4.prototype, `props`);
                  Object.defineProperty(e4.prototype, "props", {
                    configurable: true,
                    set: function() {
                      throw Error();
                    }
                  }), n8 = true, new e4();
                } finally {
                  n8 && (i5 === void 0 ? delete e4.prototype.props : Object.defineProperty(e4.prototype, "props", i5));
                }
              }
            } else {
              try {
                throw Error();
              } catch (e5) {
                r6 = e5;
              }
              (n8 = e4()) && typeof n8.catch == `function` && n8.catch(function() {
              });
            }
          } catch (e5) {
            if (e5 && r6 && typeof e5.stack == `string`) return [e5.stack, r6.stack];
          }
          return [null, null];
        }
      };
      r5.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i4 = Object.getOwnPropertyDescriptor(r5.DetermineComponentFrameRoot, `name`);
      i4 && i4.configurable && Object.defineProperty(r5.DetermineComponentFrameRoot, "name", {
        value: `DetermineComponentFrameRoot`
      });
      var a4 = r5.DetermineComponentFrameRoot(), o3 = a4[0], s2 = a4[1];
      if (o3 && s2) {
        var c2 = o3.split(`
`), l2 = s2.split(`
`);
        for (i4 = r5 = 0; r5 < c2.length && !c2[r5].includes(`DetermineComponentFrameRoot`); ) r5++;
        for (; i4 < l2.length && !l2[i4].includes(`DetermineComponentFrameRoot`); ) i4++;
        if (r5 === c2.length || i4 === l2.length) for (r5 = c2.length - 1, i4 = l2.length - 1; 1 <= r5 && 0 <= i4 && c2[r5] !== l2[i4]; ) i4--;
        for (; 1 <= r5 && 0 <= i4; r5--, i4--) if (c2[r5] !== l2[i4]) {
          if (r5 !== 1 || i4 !== 1) do
            if (r5--, i4--, 0 > i4 || c2[r5] !== l2[i4]) {
              var u2 = `
` + c2[r5].replace(` at new `, ` at `);
              return e4.displayName && u2.includes(`<anonymous>`) && (u2 = u2.replace(`<anonymous>`, e4.displayName)), u2;
            }
          while (1 <= r5 && 0 <= i4);
          break;
        }
      }
    } finally {
      Ue2 = false, Error.prepareStackTrace = n7;
    }
    return (n7 = e4 ? e4.displayName || e4.name : ``) ? He2(n7) : ``;
  }
  function Ge2(e4, t6) {
    switch (e4.tag) {
      case 26:
      case 27:
      case 5:
        return He2(e4.type);
      case 16:
        return He2(`Lazy`);
      case 13:
        return e4.child !== t6 && t6 !== null ? He2(`Suspense Fallback`) : He2(`Suspense`);
      case 19:
        return He2(`SuspenseList`);
      case 0:
      case 15:
        return We2(e4.type, false);
      case 11:
        return We2(e4.type.render, false);
      case 1:
        return We2(e4.type, true);
      case 31:
        return He2(`Activity`);
      case 30:
        return He2(`ViewTransition`);
      default:
        return ``;
    }
  }
  function Ke2(e4) {
    try {
      var t6 = ``, n7 = null;
      do
        t6 += Ge2(e4, n7), n7 = e4, e4 = e4.return;
      while (e4);
      return t6;
    } catch (e5) {
      return `
Error generating stack: ` + e5.message + `
` + e5.stack;
    }
  }
  var qe2 = Object.prototype.hasOwnProperty, Je2 = t5.unstable_scheduleCallback, Ye2 = t5.unstable_cancelCallback, Xe2 = t5.unstable_shouldYield, Ze2 = t5.unstable_requestPaint, Qe2 = t5.unstable_now, $e2 = t5.unstable_getCurrentPriorityLevel, et2 = t5.unstable_ImmediatePriority, tt2 = t5.unstable_UserBlockingPriority, nt2 = t5.unstable_NormalPriority, rt2 = t5.unstable_LowPriority, it2 = t5.unstable_IdlePriority, at2 = t5.log, ot2 = t5.unstable_setDisableYieldValue, st2 = null, ct2 = null;
  function lt2(e4) {
    if (typeof at2 == `function` && ot2(e4), ct2 && typeof ct2.setStrictMode == `function`) try {
      ct2.setStrictMode(st2, e4);
    } catch {
    }
  }
  var ut2 = Math.clz32 ? Math.clz32 : pt2, dt2 = Math.log, ft2 = Math.LN2;
  function pt2(e4) {
    return e4 >>>= 0, e4 === 0 ? 32 : 31 - (dt2(e4) / ft2 | 0) | 0;
  }
  var mt2 = 256, ht2 = 262144, gt2 = 4194304;
  function _t2(e4) {
    var t6 = e4 & 42;
    if (t6 !== 0) return t6;
    switch (e4 & -e4) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e4 & -e4;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e4 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e4 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e4;
    }
  }
  function vt2(e4, t6, n7) {
    var r5 = e4.pendingLanes;
    if (r5 === 0) return 0;
    var i4 = 0, a4 = e4.suspendedLanes, o3 = e4.pingedLanes;
    e4 = e4.warmLanes;
    var s2 = r5 & 134217727;
    return s2 === 0 ? (s2 = r5 & ~a4, s2 === 0 ? o3 === 0 ? n7 || (n7 = r5 & ~e4, n7 !== 0 && (i4 = _t2(n7))) : i4 = _t2(o3) : i4 = _t2(s2)) : (r5 = s2 & ~a4, r5 === 0 ? (o3 &= s2, o3 === 0 ? n7 || (n7 = s2 & ~e4, n7 !== 0 && (i4 = _t2(n7))) : i4 = _t2(o3)) : i4 = _t2(r5)), i4 === 0 ? 0 : t6 !== 0 && t6 !== i4 && (t6 & a4) === 0 && (a4 = i4 & -i4, n7 = t6 & -t6, a4 >= n7 || a4 === 32 && n7 & 4194048) ? t6 : i4;
  }
  function yt2(e4, t6) {
    return (e4.pendingLanes & ~(e4.suspendedLanes & ~e4.pingedLanes) & t6) === 0;
  }
  function bt2(e4, t6) {
    t6 & 8 && (t6 |= t6 & 32);
    var n7 = e4.entangledLanes;
    if (n7 !== 0) for (e4 = e4.entanglements, n7 &= t6; 0 < n7; ) {
      var r5 = 31 - ut2(n7), i4 = 1 << r5;
      t6 |= e4[r5], n7 &= ~i4;
    }
    return t6;
  }
  function xt2(e4, t6) {
    switch (e4) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t6 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t6 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function St2() {
    var e4 = gt2;
    return gt2 <<= 1, !(gt2 & 62914560) && (gt2 = 4194304), e4;
  }
  function Ct2(e4) {
    for (var t6 = [], n7 = 0; 31 > n7; n7++) t6.push(e4);
    return t6;
  }
  function wt2(e4, t6) {
    e4.pendingLanes |= t6, t6 !== 268435456 && (e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0);
  }
  function Tt2(e4, t6, n7, r5, i4, a4) {
    var o3 = e4.pendingLanes;
    e4.pendingLanes = n7, e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0, e4.expiredLanes &= n7, e4.entangledLanes &= n7, e4.errorRecoveryDisabledLanes &= n7, e4.shellSuspendCounter = 0;
    var s2 = e4.entanglements, c2 = e4.expirationTimes, l2 = e4.hiddenUpdates;
    for (n7 = o3 & ~n7; 0 < n7; ) {
      var u2 = 31 - ut2(n7), d2 = 1 << u2;
      s2[u2] = 0, c2[u2] = -1;
      var f2 = l2[u2];
      if (f2 !== null) for (l2[u2] = null, u2 = 0; u2 < f2.length; u2++) {
        var p2 = f2[u2];
        p2 !== null && (p2.lane &= -536870913);
      }
      n7 &= ~d2;
    }
    r5 !== 0 && Et2(e4, r5, 0), a4 !== 0 && i4 === 0 && e4.tag !== 0 && (e4.suspendedLanes |= a4 & ~(o3 & ~t6));
  }
  function Et2(e4, t6, n7) {
    e4.pendingLanes |= t6, e4.suspendedLanes &= ~t6;
    var r5 = 31 - ut2(t6);
    e4.entangledLanes |= t6, e4.entanglements[r5] = e4.entanglements[r5] | 1073741824 | n7 & 261930;
  }
  function Dt2(e4, t6) {
    var n7 = e4.entangledLanes |= t6;
    for (e4 = e4.entanglements; n7; ) {
      var r5 = 31 - ut2(n7), i4 = 1 << r5;
      i4 & t6 | e4[r5] & t6 && (e4[r5] |= t6), n7 &= ~i4;
    }
  }
  function Ot2(e4, t6) {
    var n7 = t6 & -t6;
    return n7 = n7 & 42 ? 1 : kt2(n7), (n7 & (e4.suspendedLanes | t6)) === 0 ? n7 : 0;
  }
  function kt2(e4) {
    switch (e4) {
      case 2:
        e4 = 1;
        break;
      case 8:
        e4 = 4;
        break;
      case 32:
        e4 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e4 = 128;
        break;
      case 268435456:
        e4 = 134217728;
        break;
      default:
        e4 = 0;
    }
    return e4;
  }
  function At2(e4) {
    return e4 &= -e4, 2 < e4 ? 8 < e4 ? e4 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function jt2() {
    var e4 = T2.p;
    return e4 === 0 ? (e4 = window.event, e4 === void 0 ? 32 : Ch(e4.type)) : e4;
  }
  function Mt2(e4, t6) {
    var n7 = T2.p;
    try {
      return T2.p = e4, t6();
    } finally {
      T2.p = n7;
    }
  }
  var Nt2 = Math.random().toString(36).slice(2), Pt2 = `__reactFiber$` + Nt2, Ft2 = `__reactProps$` + Nt2, It2 = `__reactContainer$` + Nt2, Lt2 = `__reactEvents$` + Nt2, Rt2 = `__reactListeners$` + Nt2, zt2 = `__reactHandles$` + Nt2, Bt2 = `__reactResources$` + Nt2, Vt2 = `__reactMarker$` + Nt2, Ht2 = `__reactLoad$` + Nt2;
  function Ut2(e4) {
    delete e4[Pt2], delete e4[Ft2], delete e4[Rt2], delete e4[zt2];
  }
  function Wt2(e4) {
    var t6;
    if (t6 = e4[Pt2]) return t6;
    for (var n7 = e4.parentNode; n7; ) {
      if (t6 = n7[It2] || n7[Pt2]) {
        if (n7 = t6.alternate, t6.child !== null || n7 !== null && n7.child !== null) for (e4 = fm(e4); e4 !== null; ) {
          if (n7 = e4[Pt2]) return n7;
          e4 = fm(e4);
        }
        return t6;
      }
      e4 = n7, n7 = e4.parentNode;
    }
    return null;
  }
  function Gt2(e4) {
    if (e4 = e4[Pt2] || e4[It2]) {
      var t6 = e4.tag;
      if (t6 === 5 || t6 === 6 || t6 === 13 || t6 === 31 || t6 === 26 || t6 === 27 || t6 === 3) return e4;
    }
    return null;
  }
  function Kt2(e4) {
    var t6 = e4.tag;
    if (t6 === 5 || t6 === 26 || t6 === 27 || t6 === 6) return e4.stateNode;
    throw Error(a3(33));
  }
  function qt2(e4) {
    var t6 = e4[Bt2];
    return t6 ||= e4[Bt2] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }, t6;
  }
  function Jt2(e4) {
    e4[Vt2] = true;
  }
  function Yt2(e4) {
    e4[Ht2] = void 0;
  }
  var Xt2 = /* @__PURE__ */ new Set(), Zt2 = {};
  function Qt2(e4, t6) {
    $t2(e4, t6), $t2(e4 + `Capture`, t6);
  }
  function $t2(e4, t6) {
    for (Zt2[e4] = t6, e4 = 0; e4 < t6.length; e4++) Xt2.add(t6[e4]);
  }
  var en2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), tn2 = {}, nn2 = {};
  function rn2(e4) {
    return qe2.call(nn2, e4) ? true : qe2.call(tn2, e4) ? false : en2.test(e4) ? nn2[e4] = true : (tn2[e4] = true, false);
  }
  var D2 = false;
  function an2() {
    var e4 = D2;
    return D2 = false, e4;
  }
  function on2(e4, t6, n7) {
    if (rn2(t6)) {
      if (n7 === null) e4.removeAttribute(t6);
      else {
        switch (typeof n7) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e4.removeAttribute(t6);
            return;
          case `boolean`:
            var r5 = t6.toLowerCase().slice(0, 5);
            if (r5 !== `data-` && r5 !== `aria-`) {
              e4.removeAttribute(t6);
              return;
            }
        }
        e4.setAttribute(t6, n7);
      }
    }
  }
  function sn2(e4, t6, n7) {
    if (n7 === null) e4.removeAttribute(t6);
    else {
      switch (typeof n7) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e4.removeAttribute(t6);
          return;
      }
      e4.setAttribute(t6, n7);
    }
  }
  function cn2(e4, t6, n7, r5) {
    if (r5 === null) e4.removeAttribute(n7);
    else {
      switch (typeof r5) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e4.removeAttribute(n7);
          return;
      }
      e4.setAttributeNS(t6, n7, r5);
    }
  }
  function ln2(e4) {
    switch (typeof e4) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e4;
      case `object`:
        return e4;
      default:
        return ``;
    }
  }
  function un2(e4) {
    var t6 = e4.type;
    return (e4 = e4.nodeName) && e4.toLowerCase() === `input` && (t6 === `checkbox` || t6 === `radio`);
  }
  function dn2(e4, t6, n7) {
    var r5 = Object.getOwnPropertyDescriptor(e4.constructor.prototype, t6);
    if (!e4.hasOwnProperty(t6) && r5 !== void 0 && typeof r5.get == `function` && typeof r5.set == `function`) {
      var i4 = r5.get, a4 = r5.set;
      return Object.defineProperty(e4, t6, {
        configurable: true,
        get: function() {
          return i4.call(this);
        },
        set: function(e5) {
          n7 = `` + e5, a4.call(this, e5);
        }
      }), Object.defineProperty(e4, t6, {
        enumerable: r5.enumerable
      }), {
        getValue: function() {
          return n7;
        },
        setValue: function(e5) {
          n7 = `` + e5;
        },
        stopTracking: function() {
          e4._valueTracker = null, delete e4[t6];
        }
      };
    }
  }
  function fn2(e4) {
    if (!e4._valueTracker) {
      var t6 = un2(e4) ? `checked` : `value`;
      e4._valueTracker = dn2(e4, t6, `` + e4[t6]);
    }
  }
  function pn2(e4) {
    if (!e4) return false;
    var t6 = e4._valueTracker;
    if (!t6) return true;
    var n7 = t6.getValue(), r5 = ``;
    return e4 && (r5 = un2(e4) ? e4.checked ? `true` : `false` : e4.value), e4 = r5, e4 !== n7 && (t6.setValue(e4), true);
  }
  var mn2 = /[\n"\\]/g;
  function hn2(e4) {
    return e4.replace(mn2, function(e5) {
      return `\\` + e5.charCodeAt(0).toString(16) + ` `;
    });
  }
  function gn2(e4, t6, n7, r5, i4, a4, o3, s2) {
    e4.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e4.type = o3 : e4.removeAttribute(`type`), t6 == null ? o3 !== `submit` && o3 !== `reset` || e4.removeAttribute(`value`) : o3 === `number` ? (t6 === 0 && e4.value === `` || e4.value != t6) && (e4.value = `` + ln2(t6)) : e4.value !== `` + ln2(t6) && (e4.value = `` + ln2(t6)), t6 == null ? n7 == null ? r5 != null && e4.removeAttribute(`value`) : vn2(e4, ln2(n7)) : o3 === `number` && e4.value == t6 ? vn2(e4, ln2(e4.value)) : vn2(e4, ln2(t6)), i4 == null && a4 != null && (e4.defaultChecked = !!a4), i4 != null && (e4.checked = i4 && typeof i4 != `function` && typeof i4 != `symbol`), s2 != null && typeof s2 != `function` && typeof s2 != `symbol` && typeof s2 != `boolean` ? e4.name = `` + ln2(s2) : e4.removeAttribute(`name`);
  }
  function _n2(e4, t6, n7, r5, i4, a4, o3, s2) {
    if (a4 != null && typeof a4 != `function` && typeof a4 != `symbol` && typeof a4 != `boolean` && (e4.type = a4), t6 != null || n7 != null) {
      if (!(a4 !== `submit` && a4 !== `reset` || t6 != null)) {
        fn2(e4);
        return;
      }
      n7 = n7 == null ? `` : `` + ln2(n7), t6 = t6 == null ? n7 : `` + ln2(t6), s2 || t6 === e4.value || (e4.value = t6), e4.defaultValue = t6;
    }
    r5 ??= i4, r5 = typeof r5 != `function` && typeof r5 != `symbol` && !!r5, e4.checked = s2 ? e4.checked : !!r5, e4.defaultChecked = !!r5, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e4.name = o3), fn2(e4);
  }
  function vn2(e4, t6) {
    e4.defaultValue !== `` + t6 && (e4.defaultValue = `` + t6);
  }
  function yn2(e4, t6, n7, r5) {
    if (e4 = e4.options, t6) {
      t6 = {};
      for (var i4 = 0; i4 < n7.length; i4++) t6[`$` + n7[i4]] = true;
      for (n7 = 0; n7 < e4.length; n7++) i4 = t6.hasOwnProperty(`$` + e4[n7].value), e4[n7].selected !== i4 && (e4[n7].selected = i4), i4 && r5 && (e4[n7].defaultSelected = true);
    } else {
      for (n7 = `` + ln2(n7), t6 = null, i4 = 0; i4 < e4.length; i4++) {
        if (e4[i4].value === n7) {
          e4[i4].selected = true, r5 && (e4[i4].defaultSelected = true);
          return;
        }
        t6 !== null || e4[i4].disabled || (t6 = e4[i4]);
      }
      t6 !== null && (t6.selected = true);
    }
  }
  function bn2(e4, t6, n7) {
    if (t6 != null && (t6 = `` + ln2(t6), t6 !== e4.value && (e4.value = t6), n7 == null)) {
      e4.defaultValue !== t6 && (e4.defaultValue = t6);
      return;
    }
    e4.defaultValue = n7 == null ? `` : `` + ln2(n7);
  }
  function xn2(e4, t6, n7, r5) {
    if (t6 == null) {
      if (r5 != null) {
        if (n7 != null) throw Error(a3(92));
        if (Ee2(r5)) {
          if (1 < r5.length) throw Error(a3(93));
          r5 = r5[0];
        }
        n7 = r5;
      }
      n7 ??= ``, t6 = n7;
    }
    n7 = ln2(t6), e4.defaultValue = n7, r5 = e4.textContent, r5 === n7 && r5 !== `` && r5 !== null && (e4.value = r5), fn2(e4);
  }
  function Sn2(e4, t6) {
    if (t6) {
      var n7 = e4.firstChild;
      if (n7 && n7 === e4.lastChild && n7.nodeType === 3) {
        n7.nodeValue = t6;
        return;
      }
    }
    e4.textContent = t6;
  }
  var Cn2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function wn2(e4, t6, n7) {
    var r5 = t6.indexOf(`--`) === 0;
    n7 == null || typeof n7 == `boolean` || n7 === `` ? r5 ? e4.setProperty(t6, ``) : t6 === `float` ? e4.cssFloat = `` : e4[t6] = `` : r5 ? e4.setProperty(t6, n7) : typeof n7 != `number` || n7 === 0 || Cn2.has(t6) ? t6 === `float` ? e4.cssFloat = n7 : e4[t6] = (`` + n7).trim() : e4[t6] = n7 + `px`;
  }
  function Tn2(e4, t6, n7) {
    if (t6 != null && typeof t6 != `object`) throw Error(a3(62));
    if (e4 = e4.style, n7 != null) {
      for (var r5 in n7) !n7.hasOwnProperty(r5) || t6 != null && t6.hasOwnProperty(r5) || (r5.indexOf(`--`) === 0 ? e4.setProperty(r5, ``) : r5 === `float` ? e4.cssFloat = `` : e4[r5] = ``, D2 = true);
      for (var i4 in t6) r5 = t6[i4], t6.hasOwnProperty(i4) && n7[i4] !== r5 && (wn2(e4, i4, r5), D2 = true);
    } else for (var o3 in t6) t6.hasOwnProperty(o3) && wn2(e4, o3, t6[o3]);
  }
  function En2(e4) {
    if (e4.indexOf(`-`) === -1) return false;
    switch (e4) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var Dn2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), On2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kn2(e4) {
    return On2.test(`` + e4) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e4;
  }
  function An2() {
  }
  var jn2 = null;
  function Mn2(e4) {
    return e4 = e4.target || e4.srcElement || window, e4.correspondingUseElement && (e4 = e4.correspondingUseElement), e4.nodeType === 3 ? e4.parentNode : e4;
  }
  var Nn2 = null, Pn2 = null;
  function Fn2(e4) {
    var t6 = Gt2(e4);
    if (t6 && (e4 = t6.stateNode)) {
      var n7 = e4[Ft2] || null;
      a: switch (e4 = t6.stateNode, t6.type) {
        case `input`:
          if (gn2(e4, n7.value, n7.defaultValue, n7.defaultValue, n7.checked, n7.defaultChecked, n7.type, n7.name), t6 = n7.name, n7.type === `radio` && t6 != null) {
            for (n7 = e4; n7.parentNode; ) n7 = n7.parentNode;
            for (n7 = n7.querySelectorAll(`input[name="` + hn2(`` + t6) + `"][type="radio"]`), t6 = 0; t6 < n7.length; t6++) {
              var r5 = n7[t6];
              if (r5 !== e4 && r5.form === e4.form) {
                var i4 = r5[Ft2] || null;
                if (!i4) throw Error(a3(90));
                gn2(r5, i4.value, i4.defaultValue, i4.defaultValue, i4.checked, i4.defaultChecked, i4.type, i4.name);
              }
            }
            for (t6 = 0; t6 < n7.length; t6++) r5 = n7[t6], r5.form === e4.form && pn2(r5);
          }
          break a;
        case `textarea`:
          bn2(e4, n7.value, n7.defaultValue);
          break a;
        case `select`:
          t6 = n7.value, t6 != null && yn2(e4, !!n7.multiple, t6, false);
      }
    }
  }
  var In2 = false;
  function Ln2(e4, t6, n7) {
    if (In2) return e4(t6, n7);
    In2 = true;
    try {
      return e4(t6);
    } finally {
      if (In2 = false, (Nn2 !== null || Pn2 !== null) && (zd(), Nn2 && (t6 = Nn2, e4 = Pn2, Pn2 = Nn2 = null, Fn2(t6), e4))) for (t6 = 0; t6 < e4.length; t6++) Fn2(e4[t6]);
    }
  }
  function Rn2(e4, t6) {
    var n7 = e4.stateNode;
    if (n7 === null) return null;
    var r5 = n7[Ft2] || null;
    if (r5 === null) return null;
    n7 = r5[t6];
    a: switch (t6) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        (r5 = !r5.disabled) || (e4 = e4.type, r5 = e4 !== `button` && e4 !== `input` && e4 !== `select` && e4 !== `textarea`), e4 = !r5;
        break a;
      default:
        e4 = false;
    }
    if (e4) return null;
    if (n7 && typeof n7 != `function`) throw Error(a3(231, t6, typeof n7));
    return n7;
  }
  var zn2 = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, Bn2 = false;
  if (zn2) try {
    var Vn2 = {};
    Object.defineProperty(Vn2, "passive", {
      get: function() {
        Bn2 = true;
      }
    }), window.addEventListener(`test`, Vn2, Vn2), window.removeEventListener(`test`, Vn2, Vn2);
  } catch {
    Bn2 = false;
  }
  var Hn2 = null, Un2 = null, Wn2 = null;
  function Gn2() {
    if (Wn2) return Wn2;
    var e4, t6 = Un2, n7 = t6.length, r5, i4 = `value` in Hn2 ? Hn2.value : Hn2.textContent, a4 = i4.length;
    for (e4 = 0; e4 < n7 && t6[e4] === i4[e4]; e4++) ;
    var o3 = n7 - e4;
    for (r5 = 1; r5 <= o3 && t6[n7 - r5] === i4[a4 - r5]; r5++) ;
    return Wn2 = i4.slice(e4, 1 < r5 ? 1 - r5 : void 0);
  }
  function Kn2(e4) {
    var t6 = e4.keyCode;
    return `charCode` in e4 ? (e4 = e4.charCode, e4 === 0 && t6 === 13 && (e4 = 13)) : e4 = t6, e4 === 10 && (e4 = 13), 32 <= e4 || e4 === 13 ? e4 : 0;
  }
  function qn2() {
    return true;
  }
  function Jn2() {
    return false;
  }
  function Yn2(e4) {
    function t6(t7, n7, r5, i4, a4) {
      for (var o3 in this._reactName = t7, this._targetInst = r5, this.type = n7, this.nativeEvent = i4, this.target = a4, this.currentTarget = null, e4) e4.hasOwnProperty(o3) && (t7 = e4[o3], this[o3] = t7 ? t7(i4) : i4[o3]);
      return this.isDefaultPrevented = (i4.defaultPrevented == null ? false === i4.returnValue : i4.defaultPrevented) ? qn2 : Jn2, this.isPropagationStopped = Jn2, this;
    }
    return S(t6.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var e5 = this.nativeEvent;
        e5 && (e5.preventDefault ? e5.preventDefault() : typeof e5.returnValue != `unknown` && (e5.returnValue = false), this.isDefaultPrevented = qn2);
      },
      stopPropagation: function() {
        var e5 = this.nativeEvent;
        e5 && (e5.stopPropagation ? e5.stopPropagation() : typeof e5.cancelBubble != `unknown` && (e5.cancelBubble = true), this.isPropagationStopped = qn2);
      },
      persist: function() {
      },
      isPersistent: qn2
    }), t6;
  }
  var Xn2 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e4) {
      return e4.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zn2 = Yn2(Xn2), Qn2 = S({}, Xn2, {
    view: 0,
    detail: 0
  }), $n2 = Yn2(Qn2), er2, tr2, nr2, rr2 = S({}, Qn2, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mr2,
    button: 0,
    buttons: 0,
    relatedTarget: function(e4) {
      return e4.relatedTarget === void 0 ? e4.fromElement === e4.srcElement ? e4.toElement : e4.fromElement : e4.relatedTarget;
    },
    movementX: function(e4) {
      return `movementX` in e4 ? e4.movementX : (e4 !== nr2 && (nr2 && e4.type === `mousemove` ? (er2 = e4.screenX - nr2.screenX, tr2 = e4.screenY - nr2.screenY) : tr2 = er2 = 0, nr2 = e4), er2);
    },
    movementY: function(e4) {
      return `movementY` in e4 ? e4.movementY : tr2;
    }
  }), ir2 = Yn2(rr2), ar2 = Yn2(S({}, rr2, {
    dataTransfer: 0
  })), or2 = Yn2(S({}, Qn2, {
    relatedTarget: 0
  })), sr2 = Yn2(S({}, Xn2, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), cr2 = Yn2(S({}, Xn2, {
    clipboardData: function(e4) {
      return `clipboardData` in e4 ? e4.clipboardData : window.clipboardData;
    }
  })), lr2 = Yn2(S({}, Xn2, {
    data: 0
  })), ur2 = {
    Esc: `Escape`,
    Spacebar: ` `,
    Left: `ArrowLeft`,
    Up: `ArrowUp`,
    Right: `ArrowRight`,
    Down: `ArrowDown`,
    Del: `Delete`,
    Win: `OS`,
    Menu: `ContextMenu`,
    Apps: `ContextMenu`,
    Scroll: `ScrollLock`,
    MozPrintableKey: `Unidentified`
  }, dr2 = {
    8: `Backspace`,
    9: `Tab`,
    12: `Clear`,
    13: `Enter`,
    16: `Shift`,
    17: `Control`,
    18: `Alt`,
    19: `Pause`,
    20: `CapsLock`,
    27: `Escape`,
    32: ` `,
    33: `PageUp`,
    34: `PageDown`,
    35: `End`,
    36: `Home`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    45: `Insert`,
    46: `Delete`,
    112: `F1`,
    113: `F2`,
    114: `F3`,
    115: `F4`,
    116: `F5`,
    117: `F6`,
    118: `F7`,
    119: `F8`,
    120: `F9`,
    121: `F10`,
    122: `F11`,
    123: `F12`,
    144: `NumLock`,
    145: `ScrollLock`,
    224: `Meta`
  }, fr2 = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
  };
  function pr2(e4) {
    var t6 = this.nativeEvent;
    return t6.getModifierState ? t6.getModifierState(e4) : (e4 = fr2[e4]) ? !!t6[e4] : false;
  }
  function mr2() {
    return pr2;
  }
  var hr2 = Yn2(S({}, Qn2, {
    key: function(e4) {
      if (e4.key) {
        var t6 = ur2[e4.key] || e4.key;
        if (t6 !== `Unidentified`) return t6;
      }
      return e4.type === `keypress` ? (e4 = Kn2(e4), e4 === 13 ? `Enter` : String.fromCharCode(e4)) : e4.type === `keydown` || e4.type === `keyup` ? dr2[e4.keyCode] || `Unidentified` : ``;
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mr2,
    charCode: function(e4) {
      return e4.type === `keypress` ? Kn2(e4) : 0;
    },
    keyCode: function(e4) {
      return e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
    },
    which: function(e4) {
      return e4.type === `keypress` ? Kn2(e4) : e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
    }
  })), gr2 = Yn2(S({}, rr2, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), _r2 = Yn2(S({}, Xn2, {
    submitter: 0
  })), vr2 = Yn2(S({}, Qn2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mr2
  })), yr2 = Yn2(S({}, Xn2, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), br2 = Yn2(S({}, rr2, {
    deltaX: function(e4) {
      return `deltaX` in e4 ? e4.deltaX : `wheelDeltaX` in e4 ? -e4.wheelDeltaX : 0;
    },
    deltaY: function(e4) {
      return `deltaY` in e4 ? e4.deltaY : `wheelDeltaY` in e4 ? -e4.wheelDeltaY : `wheelDelta` in e4 ? -e4.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), xr2 = Yn2(S({}, Xn2, {
    newState: 0,
    oldState: 0,
    source: 0
  })), Sr2 = [9, 13, 27, 32], Cr2 = zn2 && `CompositionEvent` in window, wr2 = null;
  zn2 && `documentMode` in document && (wr2 = document.documentMode);
  var Tr2 = zn2 && `TextEvent` in window && !wr2, Er2 = zn2 && (!Cr2 || wr2 && 8 < wr2 && 11 >= wr2), Dr2 = ` `, Or2 = false;
  function kr2(e4, t6) {
    switch (e4) {
      case `keyup`:
        return Sr2.indexOf(t6.keyCode) !== -1;
      case `keydown`:
        return t6.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Ar2(e4) {
    return e4 = e4.detail, typeof e4 == `object` && `data` in e4 ? e4.data : null;
  }
  var jr2 = false;
  function Mr2(e4, t6) {
    switch (e4) {
      case `compositionend`:
        return Ar2(t6);
      case `keypress`:
        return t6.which === 32 ? (Or2 = true, Dr2) : null;
      case `textInput`:
        return e4 = t6.data, e4 === Dr2 && Or2 ? null : e4;
      default:
        return null;
    }
  }
  function Nr2(e4, t6) {
    if (jr2) return e4 === `compositionend` || !Cr2 && kr2(e4, t6) ? (e4 = Gn2(), Wn2 = Un2 = Hn2 = null, jr2 = false, e4) : null;
    switch (e4) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t6.ctrlKey || t6.altKey || t6.metaKey) || t6.ctrlKey && t6.altKey) {
          if (t6.char && 1 < t6.char.length) return t6.char;
          if (t6.which) return String.fromCharCode(t6.which);
        }
        return null;
      case `compositionend`:
        return Er2 && t6.locale !== `ko` ? null : t6.data;
      default:
        return null;
    }
  }
  var Pr2 = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Fr2(e4) {
    var t6 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
    return t6 === `input` ? !!Pr2[e4.type] : t6 === `textarea`;
  }
  function Ir2(e4, t6, n7, r5) {
    Nn2 ? Pn2 ? Pn2.push(r5) : Pn2 = [r5] : Nn2 = r5, t6 = Jf(t6, `onChange`), 0 < t6.length && (n7 = new Zn2(`onChange`, `change`, null, n7, r5), e4.push({
      event: n7,
      listeners: t6
    }));
  }
  var Lr2 = null, Rr2 = null;
  function zr2(e4) {
    Vf(e4, 0);
  }
  function Br2(e4) {
    if (pn2(Kt2(e4))) return e4;
  }
  function Vr2(e4, t6) {
    if (e4 === `change`) return t6;
  }
  var Hr2 = false;
  if (zn2) {
    var Ur2;
    if (zn2) {
      var Wr2 = `oninput` in document;
      if (!Wr2) {
        var Gr2 = document.createElement(`div`);
        Gr2.setAttribute(`oninput`, `return;`), Wr2 = typeof Gr2.oninput == `function`;
      }
      Ur2 = Wr2;
    } else Ur2 = false;
    Hr2 = Ur2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Kr2() {
    Lr2 && (Lr2.detachEvent(`onpropertychange`, qr2), Rr2 = Lr2 = null);
  }
  function qr2(e4) {
    if (e4.propertyName === `value` && Br2(Rr2)) {
      var t6 = [];
      Ir2(t6, Rr2, e4, Mn2(e4)), Ln2(zr2, t6);
    }
  }
  function Jr2(e4, t6, n7) {
    e4 === `focusin` ? (Kr2(), Lr2 = t6, Rr2 = n7, Lr2.attachEvent(`onpropertychange`, qr2)) : e4 === `focusout` && Kr2();
  }
  function Yr2(e4) {
    if (e4 === `selectionchange` || e4 === `keyup` || e4 === `keydown`) return Br2(Rr2);
  }
  function Xr2(e4, t6) {
    if (e4 === `click`) return Br2(t6);
  }
  function Zr2(e4, t6) {
    if (e4 === `input` || e4 === `change`) return Br2(t6);
  }
  function Qr2(e4, t6) {
    return e4 === t6 && (e4 !== 0 || 1 / e4 == 1 / t6) || e4 !== e4 && t6 !== t6;
  }
  var $r2 = typeof Object.is == `function` ? Object.is : Qr2;
  function ei2(e4, t6) {
    if ($r2(e4, t6)) return true;
    if (typeof e4 != `object` || !e4 || typeof t6 != `object` || !t6) return false;
    var n7 = Object.keys(e4), r5 = Object.keys(t6);
    if (n7.length !== r5.length) return false;
    for (r5 = 0; r5 < n7.length; r5++) {
      var i4 = n7[r5];
      if (!qe2.call(t6, i4) || !$r2(e4[i4], t6[i4])) return false;
    }
    return true;
  }
  function ti2(e4) {
    if (e4 ||= typeof document < `u` ? document : void 0, e4 === void 0) return null;
    try {
      return e4.activeElement || e4.body;
    } catch {
      return e4.body;
    }
  }
  function ni2(e4) {
    for (; e4 && e4.firstChild; ) e4 = e4.firstChild;
    return e4;
  }
  function ri2(e4, t6) {
    var n7 = ni2(e4);
    e4 = 0;
    for (var r5; n7; ) {
      if (n7.nodeType === 3) {
        if (r5 = e4 + n7.textContent.length, e4 <= t6 && r5 >= t6) return {
          node: n7,
          offset: t6 - e4
        };
        e4 = r5;
      }
      a: {
        for (; n7; ) {
          if (n7.nextSibling) {
            n7 = n7.nextSibling;
            break a;
          }
          n7 = n7.parentNode;
        }
        n7 = void 0;
      }
      n7 = ni2(n7);
    }
  }
  function ii2(e4, t6) {
    return e4 && t6 ? e4 === t6 ? true : e4 && e4.nodeType === 3 ? false : t6 && t6.nodeType === 3 ? ii2(e4, t6.parentNode) : `contains` in e4 ? e4.contains(t6) : e4.compareDocumentPosition ? !!(e4.compareDocumentPosition(t6) & 16) : false : false;
  }
  function ai2(e4) {
    e4 = e4 != null && e4.ownerDocument != null && e4.ownerDocument.defaultView != null ? e4.ownerDocument.defaultView : window;
    for (var t6 = ti2(e4.document); t6 instanceof e4.HTMLIFrameElement; ) {
      try {
        var n7 = typeof t6.contentWindow.location.href == `string`;
      } catch {
        n7 = false;
      }
      if (n7) e4 = t6.contentWindow;
      else break;
      t6 = ti2(e4.document);
    }
    return t6;
  }
  function oi2(e4) {
    var t6 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
    return t6 && (t6 === `input` && (e4.type === `text` || e4.type === `search` || e4.type === `tel` || e4.type === `url` || e4.type === `password`) || t6 === `textarea` || e4.contentEditable === `true`);
  }
  var si2 = zn2 && `documentMode` in document && 11 >= document.documentMode, ci2 = null, li2 = null, ui2 = null, di2 = false;
  function fi2(e4, t6, n7) {
    var r5 = n7.window === n7 ? n7.document : n7.nodeType === 9 ? n7 : n7.ownerDocument;
    di2 || ci2 == null || ci2 !== ti2(r5) || (r5 = ci2, `selectionStart` in r5 && oi2(r5) ? r5 = {
      start: r5.selectionStart,
      end: r5.selectionEnd
    } : (r5 = (r5.ownerDocument && r5.ownerDocument.defaultView || window).getSelection(), r5 = {
      anchorNode: r5.anchorNode,
      anchorOffset: r5.anchorOffset,
      focusNode: r5.focusNode,
      focusOffset: r5.focusOffset
    }), ui2 && ei2(ui2, r5) || (ui2 = r5, r5 = Jf(li2, `onSelect`), 0 < r5.length && (t6 = new Zn2(`onSelect`, `select`, null, t6, n7), e4.push({
      event: t6,
      listeners: r5
    }), t6.target = ci2)));
  }
  function pi2(e4, t6) {
    var n7 = {};
    return n7[e4.toLowerCase()] = t6.toLowerCase(), n7[`Webkit` + e4] = `webkit` + t6, n7[`Moz` + e4] = `moz` + t6, n7;
  }
  var mi2 = {
    animationend: pi2(`Animation`, `AnimationEnd`),
    animationiteration: pi2(`Animation`, `AnimationIteration`),
    animationstart: pi2(`Animation`, `AnimationStart`),
    transitionrun: pi2(`Transition`, `TransitionRun`),
    transitionstart: pi2(`Transition`, `TransitionStart`),
    transitioncancel: pi2(`Transition`, `TransitionCancel`),
    transitionend: pi2(`Transition`, `TransitionEnd`)
  }, hi2 = {}, gi2 = {};
  zn2 && (gi2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete mi2.animationend.animation, delete mi2.animationiteration.animation, delete mi2.animationstart.animation), `TransitionEvent` in window || delete mi2.transitionend.transition);
  function _i2(e4) {
    if (hi2[e4]) return hi2[e4];
    if (!mi2[e4]) return e4;
    var t6 = mi2[e4], n7;
    for (n7 in t6) if (t6.hasOwnProperty(n7) && n7 in gi2) return hi2[e4] = t6[n7];
    return e4;
  }
  var vi2 = _i2(`animationend`), yi2 = _i2(`animationiteration`), bi2 = _i2(`animationstart`), xi2 = _i2(`transitionrun`), Si2 = _i2(`transitionstart`), Ci2 = _i2(`transitioncancel`), wi2 = _i2(`transitionend`), Ti2 = /* @__PURE__ */ new Map(), Ei2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Ei2.push(`scrollEnd`);
  function O2(e4, t6) {
    Ti2.set(e4, t6), Qt2(t6, [e4]);
  }
  var Di2 = 0;
  function k2(e4, t6) {
    if (e4.name != null && e4.name !== `auto`) return e4.name;
    if (t6.autoName !== null) return t6.autoName;
    e4 = bd.identifierPrefix;
    var n7 = Di2++;
    return e4 = `_` + e4 + `t_` + n7.toString(32) + `_`, t6.autoName = e4;
  }
  function Oi2(e4) {
    if (e4 == null || typeof e4 == `string`) return e4;
    var t6 = null, n7 = Od;
    if (n7 !== null) for (var r5 = 0; r5 < n7.length; r5++) {
      var i4 = e4[n7[r5]];
      if (i4 != null) {
        if (i4 === `none`) return `none`;
        t6 = t6 == null ? i4 : t6 + (` ` + i4);
      }
    }
    return t6 ?? e4.default;
  }
  function ki2(e4, t6) {
    return e4 = Oi2(e4), t6 = Oi2(t6), t6 == null ? e4 === `auto` ? null : e4 : t6 === `auto` ? null : t6;
  }
  var Ai = typeof reportError == `function` ? reportError : function(e4) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t6 = new window.ErrorEvent(`error`, {
        bubbles: true,
        cancelable: true,
        message: typeof e4 == `object` && e4 && typeof e4.message == `string` ? String(e4.message) : String(e4),
        error: e4
      });
      if (!window.dispatchEvent(t6)) return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e4);
      return;
    }
    console.error(e4);
  }, ji = [], Mi = 0, Ni = 0;
  function Pi2() {
    for (var e4 = Mi, t6 = Ni = Mi = 0; t6 < e4; ) {
      var n7 = ji[t6];
      ji[t6++] = null;
      var r5 = ji[t6];
      ji[t6++] = null;
      var i4 = ji[t6];
      ji[t6++] = null;
      var a4 = ji[t6];
      if (ji[t6++] = null, r5 !== null && i4 !== null) {
        var o3 = r5.pending;
        o3 === null ? i4.next = i4 : (i4.next = o3.next, o3.next = i4), r5.pending = i4;
      }
      a4 !== 0 && Ri2(n7, i4, a4);
    }
  }
  function Fi2(e4, t6, n7, r5) {
    ji[Mi++] = e4, ji[Mi++] = t6, ji[Mi++] = n7, ji[Mi++] = r5, Ni |= r5, e4.lanes |= r5, e4 = e4.alternate, e4 !== null && (e4.lanes |= r5);
  }
  function Ii2(e4, t6, n7, r5) {
    return Fi2(e4, t6, n7, r5), zi2(e4);
  }
  function Li2(e4, t6) {
    return Fi2(e4, null, null, t6), zi2(e4);
  }
  function Ri2(e4, t6, n7) {
    e4.lanes |= n7;
    var r5 = e4.alternate;
    r5 !== null && (r5.lanes |= n7);
    for (var i4 = false, a4 = e4.return; a4 !== null; ) a4.childLanes |= n7, r5 = a4.alternate, r5 !== null && (r5.childLanes |= n7), a4.tag === 22 && (e4 = a4.stateNode, e4 === null || e4._visibility & 1 || (i4 = true)), e4 = a4, a4 = a4.return;
    return e4.tag === 3 ? (a4 = e4.stateNode, i4 && t6 !== null && (i4 = 31 - ut2(n7), e4 = a4.hiddenUpdates, r5 = e4[i4], r5 === null ? e4[i4] = [t6] : r5.push(t6), t6.lane = n7 | 536870912), a4) : null;
  }
  function zi2(e4) {
    if (50 < kd) throw kd = 0, Ad = null, Error(a3(185));
    for (var t6 = e4.return; t6 !== null; ) e4 = t6, t6 = e4.return;
    return e4.tag === 3 ? e4.stateNode : null;
  }
  var Bi2 = {};
  function Vi2(e4, t6, n7, r5) {
    this.tag = e4, this.key = n7, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t6, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r5, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Hi(e4, t6, n7, r5) {
    return new Vi2(e4, t6, n7, r5);
  }
  function Ui2(e4) {
    return e4 = e4.prototype, !(!e4 || !e4.isReactComponent);
  }
  function Wi2(e4, t6) {
    var n7 = e4.alternate;
    return n7 === null ? (n7 = Hi(e4.tag, t6, e4.key, e4.mode), n7.elementType = e4.elementType, n7.type = e4.type, n7.stateNode = e4.stateNode, n7.alternate = e4, e4.alternate = n7) : (n7.pendingProps = t6, n7.type = e4.type, n7.flags = 0, n7.subtreeFlags = 0, n7.deletions = null), n7.flags = e4.flags & 1206910976, n7.childLanes = e4.childLanes, n7.lanes = e4.lanes, n7.child = e4.child, n7.memoizedProps = e4.memoizedProps, n7.memoizedState = e4.memoizedState, n7.updateQueue = e4.updateQueue, t6 = e4.dependencies, n7.dependencies = t6 === null ? null : {
      lanes: t6.lanes,
      firstContext: t6.firstContext
    }, n7.sibling = e4.sibling, n7.index = e4.index, n7.ref = e4.ref, n7.refCleanup = e4.refCleanup, n7;
  }
  function Gi2(e4, t6) {
    e4.flags &= 1206910978;
    var n7 = e4.alternate;
    return n7 === null ? (e4.childLanes = 0, e4.lanes = t6, e4.child = null, e4.subtreeFlags = 0, e4.memoizedProps = null, e4.memoizedState = null, e4.updateQueue = null, e4.dependencies = null, e4.stateNode = null) : (e4.childLanes = n7.childLanes, e4.lanes = n7.lanes, e4.child = n7.child, e4.subtreeFlags = 0, e4.deletions = null, e4.memoizedProps = n7.memoizedProps, e4.memoizedState = n7.memoizedState, e4.updateQueue = n7.updateQueue, e4.type = n7.type, t6 = n7.dependencies, e4.dependencies = t6 === null ? null : {
      lanes: t6.lanes,
      firstContext: t6.firstContext
    }), e4;
  }
  function Ki(e4, t6, n7, r5, i4, o3) {
    var s2 = 0;
    if (r5 = e4, typeof r5 == `function`) Ui2(r5) && (s2 = 1);
    else if (typeof r5 == `string`) s2 = qm(e4, n7, Me2.current) ? 26 : e4 === `html` || e4 === `head` || e4 === `body` ? 27 : 5;
    else a: switch (r5) {
      case _e2:
        return e4 = Hi(31, n7, t6, i4), e4.elementType = _e2, e4.lanes = o3, e4;
      case ce:
        return qi2(n7.children, i4, o3, t6);
      case le:
        s2 = 8, i4 |= 24;
        break;
      case ue:
        return e4 = Hi(12, n7, t6, i4 | 2), e4.elementType = ue, e4.lanes = o3, e4;
      case me2:
        return e4 = Hi(13, n7, t6, i4), e4.elementType = me2, e4.lanes = o3, e4;
      case he2:
        return e4 = Hi(19, n7, t6, i4), e4.elementType = he2, e4.lanes = o3, e4;
      case ve2:
      case be2:
        return e4 = i4 | 32, e4 = Hi(30, n7, t6, e4), e4.elementType = be2, e4.lanes = o3, e4.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }, e4;
      default:
        if (typeof r5 == `object` && r5) switch (r5.$$typeof) {
          case fe:
            s2 = 10;
            break a;
          case de:
            s2 = 9;
            break a;
          case pe:
            s2 = 11;
            break a;
          case C2:
            s2 = 14;
            break a;
          case ge2:
            s2 = 16, r5 = null;
            break a;
        }
        s2 = 29, n7 = Error(a3(130, e4 === null ? `null` : typeof e4, ``)), r5 = null;
    }
    return t6 = Hi(s2, n7, t6, i4), t6.elementType = e4, t6.type = r5, t6.lanes = o3, t6;
  }
  function qi2(e4, t6, n7, r5) {
    return e4 = Hi(7, e4, r5, t6), e4.lanes = n7, e4;
  }
  function Ji2(e4, t6, n7) {
    return e4 = Hi(6, e4, null, t6), e4.lanes = n7, e4;
  }
  function Yi2(e4) {
    var t6 = Hi(18, null, null, 0);
    return t6.stateNode = e4, t6;
  }
  function Xi(e4, t6, n7) {
    return t6 = Hi(4, e4.children === null ? [] : e4.children, e4.key, t6), t6.lanes = n7, t6.stateNode = {
      containerInfo: e4.containerInfo,
      pendingChildren: null,
      implementation: e4.implementation
    }, t6;
  }
  var Zi2 = /* @__PURE__ */ new WeakMap();
  function Qi2(e4, t6) {
    if (typeof e4 == `object` && e4) {
      var n7 = Zi2.get(e4);
      return n7 === void 0 ? (t6 = {
        value: e4,
        source: t6,
        stack: Ke2(t6)
      }, Zi2.set(e4, t6), t6) : n7;
    }
    return {
      value: e4,
      source: t6,
      stack: Ke2(t6)
    };
  }
  var A2 = [], j2 = 0, $i2 = null, ea2 = 0, ta2 = [], na2 = 0, ra2 = null, ia2 = 1, M2 = ``;
  function aa2(e4, t6) {
    A2[j2++] = ea2, A2[j2++] = $i2, $i2 = e4, ea2 = t6;
  }
  function N2(e4, t6, n7) {
    ta2[na2++] = ia2, ta2[na2++] = M2, ta2[na2++] = ra2, ra2 = e4;
    var r5 = ia2;
    e4 = M2;
    var i4 = 32 - ut2(r5) - 1;
    r5 &= ~(1 << i4), n7 += 1;
    var a4 = 32 - ut2(t6) + i4;
    if (30 < a4) {
      var o3 = i4 - i4 % 5;
      a4 = (r5 & (1 << o3) - 1).toString(32), r5 >>= o3, i4 -= o3, ia2 = 1 << 32 - ut2(t6) + i4 | n7 << i4 | r5, M2 = a4 + e4;
    } else ia2 = 1 << a4 | n7 << i4 | r5, M2 = e4;
  }
  function oa2(e4) {
    e4.return !== null && (aa2(e4, 1), N2(e4, 1, 0));
  }
  function sa2(e4) {
    for (; e4 === $i2; ) $i2 = A2[--j2], A2[j2] = null, ea2 = A2[--j2], A2[j2] = null;
    for (; e4 === ra2; ) ra2 = ta2[--na2], ta2[na2] = null, M2 = ta2[--na2], ta2[na2] = null, ia2 = ta2[--na2], ta2[na2] = null;
  }
  function ca2(e4, t6) {
    ta2[na2++] = ia2, ta2[na2++] = M2, ta2[na2++] = ra2, ia2 = t6.id, M2 = t6.overflow, ra2 = e4;
  }
  var la2 = null, P2 = null, F2 = false, ua2 = null, da2 = false, fa2 = Error(a3(519));
  function pa(e4) {
    throw ya2(Qi2(Error(a3(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e4)), fa2;
  }
  function ma2(e4) {
    var t6 = e4.stateNode, n7 = e4.type, r5 = e4.memoizedProps;
    switch (t6[Pt2] = e4, t6[Ft2] = r5, n7) {
      case `dialog`:
        Q(`cancel`, t6), Q(`close`, t6);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, t6);
        break;
      case `video`:
      case `audio`:
        for (n7 = 0; n7 < zf.length; n7++) Q(zf[n7], t6);
        break;
      case `source`:
        Q(`error`, t6);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, t6), Q(`load`, t6);
        break;
      case `details`:
        Q(`toggle`, t6);
        break;
      case `input`:
        Q(`invalid`, t6), _n2(t6, r5.value, r5.defaultValue, r5.checked, r5.defaultChecked, r5.type, r5.name, true);
        break;
      case `select`:
        Q(`invalid`, t6);
        break;
      case `textarea`:
        Q(`invalid`, t6), xn2(t6, r5.value, r5.defaultValue, r5.children);
    }
    n7 = r5.children, typeof n7 != `string` && typeof n7 != `number` && typeof n7 != `bigint` || t6.textContent === `` + n7 || true === r5.suppressHydrationWarning || ep(t6.textContent, n7) ? (r5.popover != null && (Q(`beforetoggle`, t6), Q(`toggle`, t6)), r5.onScroll != null && Q(`scroll`, t6), r5.onScrollEnd != null && Q(`scrollend`, t6), r5.onClick != null && (t6.onclick = An2), t6 = true) : t6 = false, t6 || pa(e4, true);
  }
  function ha2(e4) {
    for (la2 = e4.return; la2; ) switch (la2.tag) {
      case 5:
      case 31:
      case 13:
        da2 = false;
        return;
      case 27:
      case 3:
        da2 = true;
        return;
      default:
        la2 = la2.return;
    }
  }
  function ga2(e4) {
    if (e4 !== la2) return false;
    if (!F2) return ha2(e4), F2 = true, false;
    var t6 = e4.tag, n7;
    if ((n7 = t6 !== 3 && t6 !== 27) && ((n7 = t6 === 5) && (n7 = e4.type, n7 = n7 === `form` || n7 === `button` || pp(e4.type, e4.memoizedProps)), n7 = !n7), n7 && P2 && pa(e4), ha2(e4), t6 === 13) {
      if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(a3(317));
      P2 = dm(e4);
    } else if (t6 === 31) {
      if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(a3(317));
      P2 = dm(e4);
    } else t6 === 27 ? (t6 = P2, Sp(e4.type) ? (e4 = um, um = null, P2 = e4) : P2 = t6) : P2 = la2 ? lm(e4.stateNode.nextSibling) : null;
    return true;
  }
  function _a() {
    P2 = la2 = null, F2 = false;
  }
  function va2() {
    var e4 = ua2;
    return e4 !== null && (pd === null ? pd = e4 : pd.push.apply(pd, e4), ua2 = null), e4;
  }
  function ya2(e4) {
    ua2 === null ? ua2 = [e4] : ua2.push(e4);
  }
  var ba2 = Ae2(null), xa2 = null, Sa2 = null;
  function Ca2(e4, t6, n7) {
    E2(ba2, t6._currentValue), t6._currentValue = n7;
  }
  function wa2(e4) {
    e4._currentValue = ba2.current, je2(ba2);
  }
  function I2(e4, t6, n7) {
    for (; e4 !== null; ) {
      var r5 = e4.alternate;
      if ((e4.childLanes & t6) === t6 ? r5 !== null && (r5.childLanes & t6) !== t6 && (r5.childLanes |= t6) : (e4.childLanes |= t6, r5 !== null && (r5.childLanes |= t6)), e4 === n7) break;
      e4 = e4.return;
    }
  }
  function Ta2(e4, t6, n7, r5) {
    var i4 = e4.child;
    for (i4 !== null && (i4.return = e4); i4 !== null; ) {
      var o3 = i4.dependencies;
      if (o3 !== null) {
        var s2 = i4.child;
        o3 = o3.firstContext;
        a: for (; o3 !== null; ) {
          var c2 = o3;
          o3 = i4;
          for (var l2 = 0; l2 < t6.length; l2++) if (c2.context === t6[l2]) {
            o3.lanes |= n7, c2 = o3.alternate, c2 !== null && (c2.lanes |= n7), I2(o3.return, n7, e4), r5 || (s2 = null);
            break a;
          }
          o3 = c2.next;
        }
      } else if (i4.tag === 18) {
        if (s2 = i4.return, s2 === null) throw Error(a3(341));
        s2.lanes |= n7, o3 = s2.alternate, o3 !== null && (o3.lanes |= n7), I2(s2, n7, e4), s2 = null;
      } else i4.tag === 13 && i4.memoizedState !== null && i4.memoizedState.dehydrated === null ? (i4.lanes |= n7, s2 = i4.alternate, s2 !== null && (s2.lanes |= n7), I2(i4.return, n7, e4), s2 = i4.child, s2 = s2 === null ? null : s2.sibling) : s2 = i4.child;
      if (s2 !== null) s2.return = i4;
      else for (s2 = i4; s2 !== null; ) {
        if (s2 === e4) {
          s2 = null;
          break;
        }
        if (i4 = s2.sibling, i4 !== null) {
          i4.return = s2.return, s2 = i4;
          break;
        }
        s2 = s2.return;
      }
      i4 = s2;
    }
  }
  function Ea2(e4, t6, n7, r5) {
    e4 = null;
    for (var i4 = t6, o3 = false; i4 !== null; ) {
      if (!o3) {
        if (i4.flags & 524288) o3 = true;
        else if (i4.flags & 262144) break;
      }
      if (i4.tag === 10) {
        var s2 = i4.alternate;
        if (s2 === null) throw Error(a3(387));
        if (s2 = s2.memoizedProps, s2 !== null) {
          var c2 = i4.type;
          $r2(i4.pendingProps.value, s2.value) || (e4 === null ? e4 = [c2] : e4.push(c2));
        }
      } else if (i4 === Fe2.current) {
        if (s2 = i4.alternate, s2 === null) throw Error(a3(387));
        s2.memoizedState.memoizedState !== i4.memoizedState.memoizedState && (e4 === null ? e4 = [sh] : e4.push(sh));
      }
      i4 = i4.return;
    }
    return e4 !== null && Ta2(t6, e4, n7, r5), t6.flags |= 262144, e4 !== null;
  }
  function Da2(e4) {
    for (e4 = e4.firstContext; e4 !== null; ) {
      if (!$r2(e4.context._currentValue, e4.memoizedValue)) return true;
      e4 = e4.next;
    }
    return false;
  }
  function Oa2(e4) {
    xa2 = e4, Sa2 = null, e4 = e4.dependencies, e4 !== null && (e4.firstContext = null);
  }
  function ka2(e4) {
    return ja2(xa2, e4);
  }
  function Aa2(e4, t6) {
    return xa2 === null && Oa2(e4), ja2(e4, t6);
  }
  function ja2(e4, t6) {
    var n7 = t6._currentValue;
    if (t6 = {
      context: t6,
      memoizedValue: n7,
      next: null
    }, Sa2 === null) {
      if (e4 === null) throw Error(a3(308));
      Sa2 = t6, e4.dependencies = {
        lanes: 0,
        firstContext: t6
      }, e4.flags |= 524288;
    } else Sa2 = Sa2.next = t6;
    return n7;
  }
  var Ma2 = typeof AbortController < `u` ? AbortController : function() {
    var e4 = [], t6 = this.signal = {
      aborted: false,
      addEventListener: function(t7, n7) {
        e4.push(n7);
      }
    };
    this.abort = function() {
      t6.aborted = true, e4.forEach(function(e5) {
        return e5();
      });
    };
  }, Na2 = t5.unstable_scheduleCallback, Pa2 = t5.unstable_NormalPriority, L2 = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fa2() {
    return {
      controller: new Ma2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia2(e4) {
    e4.refCount--, e4.refCount === 0 && Na2(Pa2, function() {
      e4.controller.abort();
    });
  }
  function La(e4, t6) {
    if (e4.pendingLanes & 4194048) {
      var n7 = e4.transitionTypes;
      for (n7 === null && (n7 = e4.transitionTypes = []), e4 = 0; e4 < t6.length; e4++) {
        var r5 = t6[e4];
        n7.indexOf(r5) === -1 && n7.push(r5);
      }
    }
  }
  var Ra = null;
  function za(e4) {
    var t6 = e4.transitionTypes;
    return e4.transitionTypes = null, t6;
  }
  var Ba = null, Va = 0, Ha = 0, Ua = null;
  function Wa(e4, t6) {
    if (Ba === null) {
      var n7 = Ba = [];
      Va = 0, Ha = Pf(), Ua = {
        status: `pending`,
        value: void 0,
        then: function(e5) {
          n7.push(e5);
        }
      };
    }
    return Va++, t6.then(Ga, Ga), t6;
  }
  function Ga() {
    if (--Va === 0 && (Ra = null, Ba !== null)) {
      Ua !== null && (Ua.status = `fulfilled`);
      var e4 = Ba;
      Ba = null, Ha = 0, Ua = null;
      for (var t6 = 0; t6 < e4.length; t6++) (0, e4[t6])();
    }
  }
  function Ka(e4, t6) {
    var n7 = [], r5 = {
      status: `pending`,
      value: null,
      reason: null,
      then: function(e5) {
        n7.push(e5);
      }
    };
    return e4.then(function() {
      r5.status = `fulfilled`, r5.value = t6;
      for (var e5 = 0; e5 < n7.length; e5++) (0, n7[e5])(t6);
    }, function(e5) {
      for (r5.status = `rejected`, r5.reason = e5, e5 = 0; e5 < n7.length; e5++) (0, n7[e5])(void 0);
    }), r5;
  }
  var qa = w2.S;
  w2.S = function(e4, t6) {
    if (gd = Qe2(), typeof t6 == `object` && t6 && typeof t6.then == `function` && Wa(e4, t6), Ra !== null) for (var n7 = bf; n7 !== null; ) La(n7, Ra), n7 = n7.next;
    if (n7 = e4.types, n7 !== null) {
      for (var r5 = bf; r5 !== null; ) La(r5, n7), r5 = r5.next;
      if (Ha !== 0) {
        r5 = Ra, r5 === null && (r5 = Ra = []);
        for (var i4 = 0; i4 < n7.length; i4++) {
          var a4 = n7[i4];
          r5.indexOf(a4) === -1 && r5.push(a4);
        }
      }
    }
    qa !== null && qa(e4, t6);
  };
  var Ja = Ae2(null);
  function Ya() {
    var e4 = Ja.current;
    return e4 === null ? K.pooledCache : e4;
  }
  function Xa(e4, t6) {
    t6 === null ? E2(Ja, Ja.current) : E2(Ja, t6.pool);
  }
  function Za() {
    var e4 = Ya();
    return e4 === null ? null : {
      parent: L2._currentValue,
      pool: e4
    };
  }
  var Qa = Error(a3(460)), $a2 = Error(a3(474)), eo2 = Error(a3(542)), to2 = {
    then: function() {
    }
  };
  function no2(e4) {
    return e4 = e4.status, e4 === `fulfilled` || e4 === `rejected`;
  }
  function ro2(e4, t6, n7) {
    switch (n7 = e4[n7], n7 === void 0 ? e4.push(t6) : n7 !== t6 && (t6.then(An2, An2), t6 = n7), t6.status) {
      case `fulfilled`:
        return t6.value;
      case `rejected`:
        throw e4 = t6.reason, so2(e4), e4 === void 0 && !(`reason` in t6) ? Error(a3(600)) : e4;
      default:
        if (typeof t6.status == `string`) t6.then(An2, An2);
        else {
          if (e4 = K, e4 !== null && 100 < e4.shellSuspendCounter) throw Error(a3(482));
          e4 = t6, e4.status = `pending`, e4.then(function(e5) {
            if (t6.status === `pending`) {
              var n8 = t6;
              n8.status = `fulfilled`, n8.value = e5;
            }
          }, function(e5) {
            if (t6.status === `pending`) {
              var n8 = t6;
              n8.status = `rejected`, n8.reason = e5;
            }
          });
        }
        switch (t6.status) {
          case `fulfilled`:
            return t6.value;
          case `rejected`:
            throw e4 = t6.reason, so2(e4), e4;
        }
        throw ao2 = t6, Qa;
    }
  }
  function io(e4) {
    try {
      var t6 = e4._init;
      return t6(e4._payload);
    } catch (e5) {
      throw typeof e5 == `object` && e5 && typeof e5.then == `function` ? (ao2 = e5, Qa) : e5;
    }
  }
  var ao2 = null;
  function oo2() {
    if (ao2 === null) throw Error(a3(459));
    var e4 = ao2;
    return ao2 = null, e4;
  }
  function so2(e4) {
    if (e4 === Qa || e4 === eo2) throw Error(a3(483));
  }
  var co2 = null, lo2 = 0;
  function uo2(e4) {
    var t6 = lo2;
    return lo2 += 1, co2 === null && (co2 = []), ro2(co2, e4, t6);
  }
  function fo2(e4, t6) {
    t6 = t6.props.ref, e4.ref = t6 === void 0 ? null : t6;
  }
  function po2(e4, t6) {
    throw t6.$$typeof === ae ? Error(a3(525)) : (e4 = Object.prototype.toString.call(t6), Error(a3(31, e4 === `[object Object]` ? `object with keys {` + Object.keys(t6).join(`, `) + `}` : e4)));
  }
  function mo2(e4) {
    function t6(t7, n8) {
      if (e4) {
        var r6 = t7.deletions;
        r6 === null ? (t7.deletions = [n8], t7.flags |= 16) : r6.push(n8);
      }
    }
    function n7(n8, r6) {
      if (!e4) return null;
      for (; r6 !== null; ) t6(n8, r6), r6 = r6.sibling;
      return null;
    }
    function r5(e5) {
      for (var t7 = /* @__PURE__ */ new Map(); e5 !== null; ) e5.key === null ? t7.set(e5.index, e5) : t7.set(e5.key, e5), e5 = e5.sibling;
      return t7;
    }
    function i4(e5, t7) {
      return e5 = Wi2(e5, t7), e5.index = 0, e5.sibling = null, e5;
    }
    function o3(t7, n8, r6) {
      return t7.index = r6, e4 ? (r6 = t7.alternate, r6 === null ? (t7.flags |= 134217730, n8) : (r6 = r6.index, r6 < n8 ? (t7.flags |= 2, n8) : r6)) : (t7.flags |= 1048576, n8);
    }
    function s2(t7) {
      return e4 && t7.alternate === null && (t7.flags |= 134217730), t7;
    }
    function c2(e5, t7, n8, r6) {
      return t7 === null || t7.tag !== 6 ? (t7 = Ji2(n8, e5.mode, r6), t7.return = e5, t7) : (t7 = i4(t7, n8), t7.return = e5, t7);
    }
    function l2(e5, t7, n8, r6) {
      var a4 = n8.type;
      return a4 === ce ? (e5 = d2(e5, t7, n8.props.children, r6, n8.key), fo2(e5, n8), e5) : t7 !== null && (t7.elementType === a4 || typeof a4 == `object` && a4 && a4.$$typeof === ge2 && io(a4) === t7.type) ? (t7 = i4(t7, n8.props), fo2(t7, n8), t7.return = e5, t7) : (t7 = Ki(n8.type, n8.key, n8.props, null, e5.mode, r6), fo2(t7, n8), t7.return = e5, t7);
    }
    function u2(e5, t7, n8, r6) {
      return t7 === null || t7.tag !== 4 || t7.stateNode.containerInfo !== n8.containerInfo || t7.stateNode.implementation !== n8.implementation ? (t7 = Xi(n8, e5.mode, r6), t7.return = e5, t7) : (t7 = i4(t7, n8.children || []), t7.return = e5, t7);
    }
    function d2(e5, t7, n8, r6, a4) {
      return t7 === null || t7.tag !== 7 ? (t7 = qi2(n8, e5.mode, r6, a4), t7.return = e5, t7) : (t7 = i4(t7, n8), t7.return = e5, t7);
    }
    function f2(e5, t7, n8) {
      if (typeof t7 == `string` && t7 !== `` || typeof t7 == `number` || typeof t7 == `bigint`) return t7 = Ji2(`` + t7, e5.mode, n8), t7.return = e5, t7;
      if (typeof t7 == `object` && t7) {
        switch (t7.$$typeof) {
          case oe:
            return n8 = Ki(t7.type, t7.key, t7.props, null, e5.mode, n8), fo2(n8, t7), n8.return = e5, n8;
          case se:
            return t7 = Xi(t7, e5.mode, n8), t7.return = e5, t7;
          case ge2:
            return t7 = io(t7), f2(e5, t7, n8);
        }
        if (Ee2(t7) || Ce2(t7)) return t7 = qi2(t7, e5.mode, n8, null), t7.return = e5, t7;
        if (typeof t7.then == `function`) return f2(e5, uo2(t7), n8);
        if (t7.$$typeof === fe) return f2(e5, Aa2(e5, t7), n8);
        po2(e5, t7);
      }
      return null;
    }
    function p2(e5, t7, n8, r6) {
      var i5 = t7 === null ? null : t7.key;
      if (typeof n8 == `string` && n8 !== `` || typeof n8 == `number` || typeof n8 == `bigint`) return i5 === null ? c2(e5, t7, `` + n8, r6) : null;
      if (typeof n8 == `object` && n8) {
        switch (n8.$$typeof) {
          case oe:
            return n8.key === i5 ? l2(e5, t7, n8, r6) : null;
          case se:
            return n8.key === i5 ? u2(e5, t7, n8, r6) : null;
          case ge2:
            return n8 = io(n8), p2(e5, t7, n8, r6);
        }
        if (Ee2(n8) || Ce2(n8)) return i5 === null ? d2(e5, t7, n8, r6, null) : null;
        if (typeof n8.then == `function`) return p2(e5, t7, uo2(n8), r6);
        if (n8.$$typeof === fe) return p2(e5, t7, Aa2(e5, n8), r6);
        po2(e5, n8);
      }
      return null;
    }
    function m3(e5, t7, n8, r6, i5) {
      if (typeof r6 == `string` && r6 !== `` || typeof r6 == `number` || typeof r6 == `bigint`) return e5 = e5.get(n8) || null, c2(t7, e5, `` + r6, i5);
      if (typeof r6 == `object` && r6) {
        switch (r6.$$typeof) {
          case oe:
            return e5 = e5.get(r6.key === null ? n8 : r6.key) || null, l2(t7, e5, r6, i5);
          case se:
            return e5 = e5.get(r6.key === null ? n8 : r6.key) || null, u2(t7, e5, r6, i5);
          case ge2:
            return r6 = io(r6), m3(e5, t7, n8, r6, i5);
        }
        if (Ee2(r6) || Ce2(r6)) return e5 = e5.get(n8) || null, d2(t7, e5, r6, i5, null);
        if (typeof r6.then == `function`) return m3(e5, t7, n8, uo2(r6), i5);
        if (r6.$$typeof === fe) return m3(e5, t7, n8, Aa2(t7, r6), i5);
        po2(t7, r6);
      }
      return null;
    }
    function h2(i5, a4, s3, c3) {
      for (var l3 = null, u3 = null, d3 = a4, h3 = a4 = 0, g4 = null; d3 !== null && h3 < s3.length; h3++) {
        d3.index > h3 ? (g4 = d3, d3 = null) : g4 = d3.sibling;
        var _3 = p2(i5, d3, s3[h3], c3);
        if (_3 === null) {
          d3 === null && (d3 = g4);
          break;
        }
        e4 && d3 && _3.alternate === null && t6(i5, d3), a4 = o3(_3, a4, h3), u3 === null ? l3 = _3 : u3.sibling = _3, u3 = _3, d3 = g4;
      }
      if (h3 === s3.length) return n7(i5, d3), F2 && aa2(i5, h3), l3;
      if (d3 === null) {
        for (; h3 < s3.length; h3++) d3 = f2(i5, s3[h3], c3), d3 !== null && (a4 = o3(d3, a4, h3), u3 === null ? l3 = d3 : u3.sibling = d3, u3 = d3);
        return F2 && aa2(i5, h3), l3;
      }
      for (d3 = r5(d3); h3 < s3.length; h3++) g4 = m3(d3, i5, h3, s3[h3], c3), g4 !== null && (e4 && (_3 = g4.alternate, _3 !== null && d3.delete(_3.key === null ? h3 : _3.key)), a4 = o3(g4, a4, h3), u3 === null ? l3 = g4 : u3.sibling = g4, u3 = g4);
      return e4 && d3.forEach(function(e5) {
        return t6(i5, e5);
      }), F2 && aa2(i5, h3), l3;
    }
    function g3(i5, s3, c3, l3) {
      if (c3 == null) throw Error(a3(151));
      for (var u3 = null, d3 = null, h3 = s3, g4 = s3 = 0, _3 = null, v3 = c3.next(); h3 !== null && !v3.done; g4++, v3 = c3.next()) {
        h3.index > g4 ? (_3 = h3, h3 = null) : _3 = h3.sibling;
        var y3 = p2(i5, h3, v3.value, l3);
        if (y3 === null) {
          h3 === null && (h3 = _3);
          break;
        }
        e4 && h3 && y3.alternate === null && t6(i5, h3), s3 = o3(y3, s3, g4), d3 === null ? u3 = y3 : d3.sibling = y3, d3 = y3, h3 = _3;
      }
      if (v3.done) return n7(i5, h3), F2 && aa2(i5, g4), u3;
      if (h3 === null) {
        for (; !v3.done; g4++, v3 = c3.next()) v3 = f2(i5, v3.value, l3), v3 !== null && (s3 = o3(v3, s3, g4), d3 === null ? u3 = v3 : d3.sibling = v3, d3 = v3);
        return F2 && aa2(i5, g4), u3;
      }
      for (h3 = r5(h3); !v3.done; g4++, v3 = c3.next()) v3 = m3(h3, i5, g4, v3.value, l3), v3 !== null && (e4 && (_3 = v3.alternate, _3 !== null && h3.delete(_3.key === null ? g4 : _3.key)), s3 = o3(v3, s3, g4), d3 === null ? u3 = v3 : d3.sibling = v3, d3 = v3);
      return e4 && h3.forEach(function(e5) {
        return t6(i5, e5);
      }), F2 && aa2(i5, g4), u3;
    }
    function _2(e5, r6, o4, c3) {
      if (typeof o4 == `object` && o4 && o4.type === ce && o4.key === null && o4.props.ref === void 0 && (o4 = o4.props.children), typeof o4 == `object` && o4) {
        switch (o4.$$typeof) {
          case oe:
            a: {
              for (var l3 = o4.key; r6 !== null; ) {
                if (r6.key === l3) {
                  if (l3 = o4.type, l3 === ce) {
                    if (r6.tag === 7) {
                      n7(e5, r6.sibling), c3 = i4(r6, o4.props.children), fo2(c3, o4), c3.return = e5, e5 = c3;
                      break a;
                    }
                  } else if (r6.elementType === l3 || typeof l3 == `object` && l3 && l3.$$typeof === ge2 && io(l3) === r6.type) {
                    n7(e5, r6.sibling), c3 = i4(r6, o4.props), fo2(c3, o4), c3.return = e5, e5 = c3;
                    break a;
                  }
                  n7(e5, r6);
                  break;
                }
                t6(e5, r6), r6 = r6.sibling;
              }
              o4.type === ce ? (c3 = qi2(o4.props.children, e5.mode, c3, o4.key), fo2(c3, o4), c3.return = e5, e5 = c3) : (c3 = Ki(o4.type, o4.key, o4.props, null, e5.mode, c3), fo2(c3, o4), c3.return = e5, e5 = c3);
            }
            return s2(e5);
          case se:
            a: {
              for (l3 = o4.key; r6 !== null; ) {
                if (r6.key === l3) {
                  if (r6.tag === 4 && r6.stateNode.containerInfo === o4.containerInfo && r6.stateNode.implementation === o4.implementation) {
                    n7(e5, r6.sibling), c3 = i4(r6, o4.children || []), c3.return = e5, e5 = c3;
                    break a;
                  }
                  n7(e5, r6);
                  break;
                }
                t6(e5, r6), r6 = r6.sibling;
              }
              c3 = Xi(o4, e5.mode, c3), c3.return = e5, e5 = c3;
            }
            return s2(e5);
          case ge2:
            return o4 = io(o4), _2(e5, r6, o4, c3);
        }
        if (Ee2(o4)) return h2(e5, r6, o4, c3);
        if (Ce2(o4)) {
          if (l3 = Ce2(o4), typeof l3 != `function`) throw Error(a3(150));
          return o4 = l3.call(o4), g3(e5, r6, o4, c3);
        }
        if (typeof o4.then == `function`) return _2(e5, r6, uo2(o4), c3);
        if (o4.$$typeof === fe) return _2(e5, r6, Aa2(e5, o4), c3);
        po2(e5, o4);
      }
      return typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint` ? (o4 = `` + o4, r6 !== null && r6.tag === 6 ? (n7(e5, r6.sibling), c3 = i4(r6, o4), c3.return = e5, e5 = c3) : (n7(e5, r6), c3 = Ji2(o4, e5.mode, c3), c3.return = e5, e5 = c3), s2(e5)) : n7(e5, r6);
    }
    return function(e5, t7, n8, r6) {
      try {
        lo2 = 0;
        var i5 = _2(e5, t7, n8, r6);
        return co2 = null, i5;
      } catch (t8) {
        if (t8 === Qa || t8 === eo2) throw t8;
        var a4 = Hi(29, t8, null, e5.mode);
        return a4.lanes = r6, a4.return = e5, a4;
      }
    };
  }
  var ho2 = mo2(true), go2 = mo2(false), _o2 = false;
  function vo2(e4) {
    e4.updateQueue = {
      baseState: e4.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function yo2(e4, t6) {
    e4 = e4.updateQueue, t6.updateQueue === e4 && (t6.updateQueue = {
      baseState: e4.baseState,
      firstBaseUpdate: e4.firstBaseUpdate,
      lastBaseUpdate: e4.lastBaseUpdate,
      shared: e4.shared,
      callbacks: null
    });
  }
  function bo2(e4) {
    return {
      lane: e4,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function xo2(e4, t6, n7) {
    var r5 = e4.updateQueue;
    if (r5 === null) return null;
    if (r5 = r5.shared, G & 2) {
      var i4 = r5.pending;
      return i4 === null ? t6.next = t6 : (t6.next = i4.next, i4.next = t6), r5.pending = t6, t6 = zi2(e4), Ri2(e4, null, n7), t6;
    }
    return Fi2(e4, r5, t6, n7), zi2(e4);
  }
  function So2(e4, t6, n7) {
    if (t6 = t6.updateQueue, t6 !== null && (t6 = t6.shared, n7 & 4194048)) {
      var r5 = t6.lanes;
      r5 &= e4.pendingLanes, n7 |= r5, t6.lanes = n7, Dt2(e4, n7);
    }
  }
  function Co2(e4, t6) {
    var n7 = e4.updateQueue, r5 = e4.alternate;
    if (r5 !== null && (r5 = r5.updateQueue, n7 === r5)) {
      var i4 = null, a4 = null;
      if (n7 = n7.firstBaseUpdate, n7 !== null) {
        do {
          var o3 = {
            lane: n7.lane,
            tag: n7.tag,
            payload: n7.payload,
            callback: null,
            next: null
          };
          a4 === null ? i4 = a4 = o3 : a4 = a4.next = o3, n7 = n7.next;
        } while (n7 !== null);
        a4 === null ? i4 = a4 = t6 : a4 = a4.next = t6;
      } else i4 = a4 = t6;
      n7 = {
        baseState: r5.baseState,
        firstBaseUpdate: i4,
        lastBaseUpdate: a4,
        shared: r5.shared,
        callbacks: r5.callbacks
      }, e4.updateQueue = n7;
      return;
    }
    e4 = n7.lastBaseUpdate, e4 === null ? n7.firstBaseUpdate = t6 : e4.next = t6, n7.lastBaseUpdate = t6;
  }
  var wo2 = false;
  function To2() {
    if (wo2) {
      var e4 = Ua;
      if (e4 !== null) throw e4;
    }
  }
  function Eo2(e4, t6, n7, r5) {
    wo2 = false;
    var i4 = e4.updateQueue;
    _o2 = false;
    var a4 = i4.firstBaseUpdate, o3 = i4.lastBaseUpdate, s2 = i4.shared.pending;
    if (s2 !== null) {
      i4.shared.pending = null;
      var c2 = s2, l2 = c2.next;
      c2.next = null, o3 === null ? a4 = l2 : o3.next = l2, o3 = c2;
      var u2 = e4.alternate;
      u2 !== null && (u2 = u2.updateQueue, s2 = u2.lastBaseUpdate, s2 !== o3 && (s2 === null ? u2.firstBaseUpdate = l2 : s2.next = l2, u2.lastBaseUpdate = c2));
    }
    if (a4 !== null) {
      var d2 = i4.baseState;
      o3 = 0, u2 = l2 = c2 = null, s2 = a4;
      do {
        var f2 = s2.lane & -536870913, p2 = f2 !== s2.lane;
        if (p2 ? (J & f2) === f2 : (r5 & f2) === f2) {
          f2 !== 0 && f2 === Ha && (wo2 = true), u2 !== null && (u2 = u2.next = {
            lane: 0,
            tag: s2.tag,
            payload: s2.payload,
            callback: null,
            next: null
          });
          a: {
            var m3 = e4, h2 = s2;
            f2 = t6;
            var g3 = n7;
            switch (h2.tag) {
              case 1:
                if (m3 = h2.payload, typeof m3 == `function`) {
                  d2 = m3.call(g3, d2, f2);
                  break a;
                }
                d2 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                if (m3 = h2.payload, f2 = typeof m3 == `function` ? m3.call(g3, d2, f2) : m3, f2 == null) break a;
                d2 = S({}, d2, f2);
                break a;
              case 2:
                _o2 = true;
            }
          }
          f2 = s2.callback, f2 !== null && (e4.flags |= 64, p2 && (e4.flags |= 8192), p2 = i4.callbacks, p2 === null ? i4.callbacks = [f2] : p2.push(f2));
        } else p2 = {
          lane: f2,
          tag: s2.tag,
          payload: s2.payload,
          callback: s2.callback,
          next: null
        }, u2 === null ? (l2 = u2 = p2, c2 = d2) : u2 = u2.next = p2, o3 |= f2;
        if (s2 = s2.next, s2 === null) {
          if (s2 = i4.shared.pending, s2 === null) break;
          p2 = s2, s2 = p2.next, p2.next = null, i4.lastBaseUpdate = p2, i4.shared.pending = null;
        }
      } while (1);
      u2 === null && (c2 = d2), i4.baseState = c2, i4.firstBaseUpdate = l2, i4.lastBaseUpdate = u2, a4 === null && (i4.shared.lanes = 0), sd |= o3, e4.lanes = o3, e4.memoizedState = d2;
    }
  }
  function Do2(e4, t6) {
    if (typeof e4 != `function`) throw Error(a3(191, e4));
    e4.call(t6);
  }
  function Oo2(e4, t6) {
    var n7 = e4.callbacks;
    if (n7 !== null) for (e4.callbacks = null, e4 = 0; e4 < n7.length; e4++) Do2(n7[e4], t6);
  }
  var ko = Ae2(null), Ao2 = Ae2(0);
  function jo(e4, t6) {
    e4 = ad, E2(Ao2, e4), E2(ko, t6), ad = e4 | t6.baseLanes;
  }
  function Mo() {
    E2(Ao2, ad), E2(ko, ko.current);
  }
  function No() {
    ad = Ao2.current, je2(ko), je2(Ao2);
  }
  var Po = Ae2(null), Fo = null;
  function Io2(e4) {
    var t6 = e4.alternate;
    E2(Vo2, Vo2.current & 1), E2(Po, e4), Fo === null && (t6 === null || ko.current !== null || t6.memoizedState !== null) && (Fo = e4);
  }
  function Lo2(e4) {
    E2(Vo2, Vo2.current), E2(Po, e4), Fo === null && (Fo = e4);
  }
  function Ro2(e4) {
    e4.tag === 22 ? (E2(Vo2, Vo2.current), E2(Po, e4), Fo === null && (Fo = e4)) : zo2();
  }
  function zo2() {
    E2(Vo2, Vo2.current), E2(Po, Po.current);
  }
  function Bo2(e4) {
    je2(Po), Fo === e4 && (Fo = null), je2(Vo2);
  }
  var Vo2 = Ae2(0);
  function Ho2(e4, t6) {
    E2(Po, Po.current), E2(Vo2, t6);
  }
  function Uo2(e4) {
    je2(Vo2), je2(Po), Fo === e4 && (Fo = null);
  }
  function Wo2(e4) {
    for (var t6 = e4; t6 !== null; ) {
      if (t6.tag === 13) {
        var n7 = t6.memoizedState;
        if (n7 !== null && (n7 = n7.dehydrated, n7 === null || om(n7) || sm(n7))) return t6;
      } else if (t6.tag === 19 && t6.memoizedProps.revealOrder !== `independent`) {
        if (t6.flags & 128) return t6;
      } else if (t6.child !== null) {
        t6.child.return = t6, t6 = t6.child;
        continue;
      }
      if (t6 === e4) break;
      for (; t6.sibling === null; ) {
        if (t6.return === null || t6.return === e4) return null;
        t6 = t6.return;
      }
      t6.sibling.return = t6.return, t6 = t6.sibling;
    }
    return null;
  }
  var Go2 = 0, R2 = null, z2 = null, Ko2 = null, qo = false, Jo2 = false, Yo = false, Xo2 = 0, Zo2 = 0, Qo2 = null, $o = 0;
  function B() {
    throw Error(a3(321));
  }
  function es(e4, t6) {
    if (t6 === null) return false;
    for (var n7 = 0; n7 < t6.length && n7 < e4.length; n7++) if (!$r2(e4[n7], t6[n7])) return false;
    return true;
  }
  function ts(e4, t6, n7, r5, i4, a4) {
    return Go2 = a4, R2 = t6, t6.memoizedState = null, t6.updateQueue = null, t6.lanes = 0, w2.H = e4 === null || e4.memoizedState === null ? _c : vc, Yo = false, a4 = n7(r5, i4), Yo = false, Jo2 && (a4 = rs(t6, n7, r5, i4)), ns(e4), a4;
  }
  function ns(e4) {
    w2.H = gc2;
    var t6 = z2 !== null && z2.next !== null;
    if (Go2 = 0, Ko2 = z2 = R2 = null, qo = false, Zo2 = 0, Qo2 = null, t6) throw Error(a3(300));
    e4 === null || Fc2 || (e4 = e4.dependencies, e4 !== null && Da2(e4) && (Fc2 = true));
  }
  function rs(e4, t6, n7, r5) {
    R2 = e4;
    var i4 = 0;
    do {
      if (Jo2 && (Qo2 = null), Zo2 = 0, Jo2 = false, 25 <= i4) throw Error(a3(301));
      if (i4 += 1, Ko2 = z2 = null, e4.updateQueue != null) {
        var o3 = e4.updateQueue;
        o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
      }
      w2.H = yc, o3 = t6(n7, r5);
    } while (Jo2);
    return o3;
  }
  function is() {
    var e4 = w2.H, t6 = e4.useState()[0];
    return t6 = typeof t6.then == `function` ? us2(t6) : t6, e4 = e4.useState()[0], (z2 === null ? null : z2.memoizedState) !== e4 && (R2.flags |= 1024), t6;
  }
  function as() {
    var e4 = Xo2 !== 0;
    return Xo2 = 0, e4;
  }
  function os(e4, t6, n7) {
    t6.updateQueue = e4.updateQueue, t6.flags &= -2053, e4.lanes &= ~n7;
  }
  function ss2(e4) {
    if (qo) {
      for (e4 = e4.memoizedState; e4 !== null; ) {
        var t6 = e4.queue;
        t6 !== null && (t6.pending = null), e4 = e4.next;
      }
      qo = false;
    }
    Go2 = 0, Ko2 = z2 = R2 = null, Jo2 = false, Zo2 = Xo2 = 0, Qo2 = null;
  }
  function cs2() {
    var e4 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ko2 === null ? R2.memoizedState = Ko2 = e4 : Ko2 = Ko2.next = e4, Ko2;
  }
  function V2() {
    if (z2 === null) {
      var e4 = R2.alternate;
      e4 = e4 === null ? null : e4.memoizedState;
    } else e4 = z2.next;
    var t6 = Ko2 === null ? R2.memoizedState : Ko2.next;
    if (t6 !== null) Ko2 = t6, z2 = e4;
    else {
      if (e4 === null) throw R2.alternate === null ? Error(a3(467)) : Error(a3(310));
      z2 = e4, e4 = {
        memoizedState: z2.memoizedState,
        baseState: z2.baseState,
        baseQueue: z2.baseQueue,
        queue: z2.queue,
        next: null
      }, Ko2 === null ? R2.memoizedState = Ko2 = e4 : Ko2 = Ko2.next = e4;
    }
    return Ko2;
  }
  function ls2() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function us2(e4) {
    var t6 = Zo2;
    return Zo2 += 1, Qo2 === null && (Qo2 = []), e4 = ro2(Qo2, e4, t6), t6 = R2, (Ko2 === null ? t6.memoizedState : Ko2.next) === null && (t6 = t6.alternate, w2.H = t6 === null || t6.memoizedState === null ? _c : vc), e4;
  }
  function ds2(e4) {
    if (typeof e4 == `object` && e4) {
      if (typeof e4.then == `function`) return us2(e4);
      if (e4.$$typeof === xe2) return;
      if (e4.$$typeof === fe) return ka2(e4);
    }
    throw Error(a3(438, String(e4)));
  }
  function fs2(e4) {
    var t6 = null, n7 = R2.updateQueue;
    if (n7 !== null && (t6 = n7.memoCache), t6 == null) {
      var r5 = R2.alternate;
      r5 !== null && (r5 = r5.updateQueue, r5 !== null && (r5 = r5.memoCache, r5 != null && (t6 = {
        data: r5.data.map(function(e5) {
          return e5.slice();
        }),
        index: 0
      })));
    }
    if (t6 ??= {
      data: [],
      index: 0
    }, n7 === null && (n7 = ls2(), R2.updateQueue = n7), n7.memoCache = t6, n7 = t6.data[t6.index], n7 === void 0) for (n7 = t6.data[t6.index] = Array(e4), r5 = 0; r5 < e4; r5++) n7[r5] = ye2;
    return t6.index++, n7;
  }
  function ps2(e4, t6) {
    return typeof t6 == `function` ? t6(e4) : t6;
  }
  function ms2(e4) {
    return hs2(V2(), z2, e4);
  }
  function hs2(e4, t6, n7) {
    var r5 = e4.queue;
    if (r5 === null) throw Error(a3(311));
    r5.lastRenderedReducer = n7;
    var i4 = e4.baseQueue, o3 = r5.pending;
    if (o3 !== null) {
      if (i4 !== null) {
        var s2 = i4.next;
        i4.next = o3.next, o3.next = s2;
      }
      t6.baseQueue = i4 = o3, r5.pending = null;
    }
    if (o3 = e4.baseState, i4 === null) e4.memoizedState = o3;
    else {
      t6 = i4.next;
      var c2 = s2 = null, l2 = null, u2 = t6, d2 = false;
      do {
        var f2 = u2.lane & -536870913;
        if (f2 === u2.lane ? (Go2 & f2) === f2 : (J & f2) === f2) {
          var p2 = u2.revertLane;
          if (p2 === 0) l2 !== null && (l2 = l2.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: u2.action,
            hasEagerState: u2.hasEagerState,
            eagerState: u2.eagerState,
            next: null
          }), f2 === Ha && (d2 = true);
          else if ((Go2 & p2) === p2) {
            u2 = u2.next, p2 === Ha && (d2 = true);
            continue;
          } else f2 = {
            lane: 0,
            revertLane: u2.revertLane,
            gesture: null,
            action: u2.action,
            hasEagerState: u2.hasEagerState,
            eagerState: u2.eagerState,
            next: null
          }, l2 === null ? (c2 = l2 = f2, s2 = o3) : l2 = l2.next = f2, R2.lanes |= p2, sd |= p2;
          f2 = u2.action, Yo && n7(o3, f2), o3 = u2.hasEagerState ? u2.eagerState : n7(o3, f2);
        } else p2 = {
          lane: f2,
          revertLane: u2.revertLane,
          gesture: u2.gesture,
          action: u2.action,
          hasEagerState: u2.hasEagerState,
          eagerState: u2.eagerState,
          next: null
        }, l2 === null ? (c2 = l2 = p2, s2 = o3) : l2 = l2.next = p2, R2.lanes |= f2, sd |= f2;
        u2 = u2.next;
      } while (u2 !== null && u2 !== t6);
      if (l2 === null ? s2 = o3 : l2.next = c2, !$r2(o3, e4.memoizedState) && (Fc2 = true, d2 && (n7 = Ua, n7 !== null))) throw n7;
      e4.memoizedState = o3, e4.baseState = s2, e4.baseQueue = l2, r5.lastRenderedState = o3;
    }
    return i4 === null && (r5.lanes = 0), [e4.memoizedState, r5.dispatch];
  }
  function gs(e4) {
    var t6 = V2(), n7 = t6.queue;
    if (n7 === null) throw Error(a3(311));
    n7.lastRenderedReducer = e4;
    var r5 = n7.dispatch, i4 = n7.pending, o3 = t6.memoizedState;
    if (i4 !== null) {
      n7.pending = null;
      var s2 = i4 = i4.next;
      do
        o3 = e4(o3, s2.action), s2 = s2.next;
      while (s2 !== i4);
      $r2(o3, t6.memoizedState) || (Fc2 = true), t6.memoizedState = o3, t6.baseQueue === null && (t6.baseState = o3), n7.lastRenderedState = o3;
    }
    return [o3, r5];
  }
  function _s2(e4, t6, n7) {
    var r5 = R2, i4 = V2(), o3 = F2;
    if (o3) {
      if (n7 === void 0) throw Error(a3(407));
      n7 = n7();
    } else n7 = t6();
    var s2 = !$r2((z2 || i4).memoizedState, n7);
    if (s2 && (i4.memoizedState = n7, Fc2 = true), i4 = i4.queue, Hs2(bs2.bind(null, r5, i4, e4), [e4]), e4 = i4.getSnapshot !== t6 || s2 || Ko2 !== null && !!(Ko2.memoizedState.tag & 1), Ls2(e4 ? 9 : 8, {
      destroy: void 0
    }, ys2.bind(null, r5, i4, n7, t6), null), e4) {
      if (r5.flags |= 2048, K === null) throw Error(a3(349));
      o3 || Go2 & 127 || vs2(r5, t6, n7);
    }
    return n7;
  }
  function vs2(e4, t6, n7) {
    e4.flags |= 16384, e4 = {
      getSnapshot: t6,
      value: n7
    }, t6 = R2.updateQueue, t6 === null ? (t6 = ls2(), R2.updateQueue = t6, t6.stores = [e4]) : (n7 = t6.stores, n7 === null ? t6.stores = [e4] : n7.push(e4));
  }
  function ys2(e4, t6, n7, r5) {
    t6.value = n7, t6.getSnapshot = r5, xs2(t6) && Ss(e4);
  }
  function bs2(e4, t6, n7) {
    return n7(function() {
      xs2(t6) && Ss(e4);
    });
  }
  function xs2(e4) {
    var t6 = e4.getSnapshot;
    e4 = e4.value;
    try {
      var n7 = t6();
      return !$r2(e4, n7);
    } catch {
      return true;
    }
  }
  function Ss(e4) {
    var t6 = Li2(e4, 2);
    t6 !== null && Pd(t6, e4, 2);
  }
  function Cs(e4) {
    var t6 = cs2();
    if (typeof e4 == `function`) {
      var n7 = e4;
      if (e4 = n7(), Yo) {
        lt2(true);
        try {
          n7();
        } finally {
          lt2(false);
        }
      }
    }
    return t6.memoizedState = t6.baseState = e4, t6.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ps2,
      lastRenderedState: e4
    }, t6;
  }
  function ws2(e4, t6, n7, r5) {
    return e4.baseState = n7, hs2(e4, z2, typeof r5 == `function` ? r5 : ps2);
  }
  function Ts(e4, t6, n7, r5, i4) {
    if (pc(e4)) throw Error(a3(485));
    if (e4 = t6.action, e4 !== null) {
      var o3 = {
        payload: i4,
        action: e4,
        next: null,
        isTransition: true,
        status: `pending`,
        value: null,
        reason: null,
        listeners: [],
        then: function(e5) {
          o3.listeners.push(e5);
        }
      };
      w2.T === null ? o3.isTransition = false : n7(true), r5(o3), n7 = t6.pending, n7 === null ? (o3.next = t6.pending = o3, Es(t6, o3)) : (o3.next = n7.next, t6.pending = n7.next = o3);
    }
  }
  function Es(e4, t6) {
    var n7 = t6.action, r5 = t6.payload, i4 = e4.state;
    if (t6.isTransition) {
      var a4 = w2.T, o3 = {};
      o3.types = a4 === null ? null : a4.types, w2.T = o3;
      try {
        var s2 = n7(i4, r5), c2 = w2.S;
        c2 !== null && c2(o3, s2), Ds2(e4, t6, s2);
      } catch (n8) {
        ks(e4, t6, n8);
      } finally {
        a4 !== null && o3.types !== null && (a4.types = o3.types), w2.T = a4;
      }
    } else try {
      a4 = n7(i4, r5), Ds2(e4, t6, a4);
    } catch (n8) {
      ks(e4, t6, n8);
    }
  }
  function Ds2(e4, t6, n7) {
    typeof n7 == `object` && n7 && typeof n7.then == `function` ? n7.then(function(n8) {
      Os(e4, t6, n8);
    }, function(n8) {
      return ks(e4, t6, n8);
    }) : Os(e4, t6, n7);
  }
  function Os(e4, t6, n7) {
    t6.status = `fulfilled`, t6.value = n7, As2(t6), e4.state = n7, t6 = e4.pending, t6 !== null && (n7 = t6.next, n7 === t6 ? e4.pending = null : (n7 = n7.next, t6.next = n7, Es(e4, n7)));
  }
  function ks(e4, t6, n7) {
    var r5 = e4.pending;
    if (e4.pending = null, r5 !== null) {
      r5 = r5.next;
      do
        t6.status = `rejected`, t6.reason = n7, As2(t6), t6 = t6.next;
      while (t6 !== r5);
    }
    e4.action = null;
  }
  function As2(e4) {
    e4 = e4.listeners;
    for (var t6 = 0; t6 < e4.length; t6++) (0, e4[t6])();
  }
  function js2(e4, t6) {
    return t6;
  }
  function Ms2(e4, t6) {
    if (F2) {
      var n7 = K.formState;
      if (n7 !== null) {
        a: {
          var r5 = R2;
          if (F2) {
            if (P2) {
              b: {
                for (var i4 = P2, a4 = da2; i4.nodeType !== 8; ) {
                  if (!a4) {
                    i4 = null;
                    break b;
                  }
                  if (i4 = lm(i4.nextSibling), i4 === null) {
                    i4 = null;
                    break b;
                  }
                }
                a4 = i4.data, i4 = a4 === `F!` || a4 === `F` ? i4 : null;
              }
              if (i4) {
                P2 = lm(i4.nextSibling), r5 = i4.data === `F!`;
                break a;
              }
            }
            pa(r5);
          }
          r5 = false;
        }
        r5 && (t6 = n7[0]);
      }
    }
    return n7 = cs2(), n7.memoizedState = n7.baseState = t6, r5 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js2,
      lastRenderedState: t6
    }, n7.queue = r5, n7 = uc.bind(null, R2, r5), r5.dispatch = n7, r5 = Cs(false), a4 = fc.bind(null, R2, false, r5.queue), r5 = cs2(), i4 = {
      state: t6,
      dispatch: null,
      action: e4,
      pending: null
    }, r5.queue = i4, n7 = Ts.bind(null, R2, i4, a4, n7), i4.dispatch = n7, r5.memoizedState = e4, [t6, n7, false];
  }
  function Ns2(e4) {
    return Ps2(V2(), z2, e4);
  }
  function Ps2(e4, t6, n7) {
    if (t6 = hs2(e4, t6, js2)[0], e4 = ms2(ps2)[0], typeof t6 == `object` && t6 && typeof t6.then == `function`) try {
      var r5 = us2(t6);
    } catch (e5) {
      throw e5 === Qa ? eo2 : e5;
    }
    else r5 = t6;
    t6 = V2();
    var i4 = t6.queue, a4 = i4.dispatch;
    return n7 !== t6.memoizedState && (R2.flags |= 2048, Ls2(9, {
      destroy: void 0
    }, Fs2.bind(null, i4, n7), null)), [r5, a4, e4];
  }
  function Fs2(e4, t6) {
    e4.action = t6;
  }
  function Is2(e4) {
    var t6 = V2(), n7 = z2;
    if (n7 !== null) return Ps2(t6, n7, e4);
    V2(), t6 = t6.memoizedState, n7 = V2();
    var r5 = n7.queue.dispatch;
    return n7.memoizedState = e4, [t6, r5, false];
  }
  function Ls2(e4, t6, n7, r5) {
    return e4 = {
      tag: e4,
      create: n7,
      deps: r5,
      inst: t6,
      next: null
    }, t6 = R2.updateQueue, t6 === null && (t6 = ls2(), R2.updateQueue = t6), n7 = t6.lastEffect, n7 === null ? t6.lastEffect = e4.next = e4 : (r5 = n7.next, n7.next = e4, e4.next = r5, t6.lastEffect = e4), e4;
  }
  function Rs2() {
    return V2().memoizedState;
  }
  function zs2(e4, t6, n7, r5) {
    var i4 = cs2();
    R2.flags |= e4, i4.memoizedState = Ls2(1 | t6, {
      destroy: void 0
    }, n7, r5 === void 0 ? null : r5);
  }
  function Bs2(e4, t6, n7, r5) {
    var i4 = V2();
    r5 = r5 === void 0 ? null : r5;
    var a4 = i4.memoizedState.inst;
    z2 !== null && r5 !== null && es(r5, z2.memoizedState.deps) ? i4.memoizedState = Ls2(t6, a4, n7, r5) : (R2.flags |= e4, i4.memoizedState = Ls2(1 | t6, a4, n7, r5));
  }
  function Vs2(e4, t6) {
    zs2(8390656, 8, e4, t6);
  }
  function Hs2(e4, t6) {
    Bs2(2048, 8, e4, t6);
  }
  function Us(e4) {
    R2.flags |= 4;
    var t6 = R2.updateQueue;
    if (t6 === null) t6 = ls2(), R2.updateQueue = t6, t6.events = [e4];
    else {
      var n7 = t6.events;
      n7 === null ? t6.events = [e4] : n7.push(e4);
    }
  }
  function Ws(e4) {
    var t6 = V2().memoizedState;
    return Us({
      ref: t6,
      nextImpl: e4
    }), function() {
      if (G & 2) throw Error(a3(440));
      return t6.impl.apply(void 0, arguments);
    };
  }
  function Gs(e4, t6) {
    return Bs2(4, 2, e4, t6);
  }
  function Ks(e4, t6) {
    return Bs2(4, 4, e4, t6);
  }
  function qs(e4, t6) {
    if (typeof t6 == `function`) {
      e4 = e4();
      var n7 = t6(e4);
      return function() {
        typeof n7 == `function` ? n7() : t6(null);
      };
    }
    if (t6 != null) return e4 = e4(), t6.current = e4, function() {
      t6.current = null;
    };
  }
  function Js2(e4, t6, n7) {
    n7 = n7 == null ? null : n7.concat([e4]), Bs2(4, 4, qs.bind(null, t6, e4), n7);
  }
  function Ys2() {
  }
  function Xs2(e4, t6) {
    var n7 = V2();
    t6 = t6 === void 0 ? null : t6;
    var r5 = n7.memoizedState;
    return t6 !== null && es(t6, r5[1]) ? r5[0] : (n7.memoizedState = [e4, t6], e4);
  }
  function Zs2(e4, t6) {
    var n7 = V2();
    t6 = t6 === void 0 ? null : t6;
    var r5 = n7.memoizedState;
    if (t6 !== null && es(t6, r5[1])) return r5[0];
    if (r5 = e4(), Yo) {
      lt2(true);
      try {
        e4();
      } finally {
        lt2(false);
      }
    }
    return n7.memoizedState = [r5, t6], r5;
  }
  function Qs2(e4, t6, n7) {
    return n7 === void 0 || Go2 & 1073741824 && !(J & 261930) ? e4.memoizedState = t6 : (e4.memoizedState = n7, e4 = Md(), R2.lanes |= e4, sd |= e4, n7);
  }
  function $s2(e4, t6, n7, r5) {
    return $r2(n7, t6) ? n7 : ko.current === null ? !(Go2 & 106) || Go2 & 1073741824 && !(J & 261930) ? (Fc2 = true, e4.memoizedState = n7) : (e4 = Md(), R2.lanes |= e4, sd |= e4, t6) : (e4 = Qs2(e4, n7, r5), $r2(e4, t6) || (Fc2 = true), e4);
  }
  function ec2(e4, t6, n7, r5, i4) {
    var a4 = T2.p;
    T2.p = a4 !== 0 && 8 > a4 ? a4 : 8;
    var o3 = w2.T, s2 = {};
    s2.types = o3 === null ? null : o3.types, w2.T = s2, fc(e4, false, t6, n7);
    try {
      var c2 = i4(), l2 = w2.S;
      l2 !== null && l2(s2, c2), typeof c2 == `object` && c2 && typeof c2.then == `function` ? dc(e4, t6, Ka(c2, r5), jd(e4)) : dc(e4, t6, r5, jd(e4));
    } catch (n8) {
      dc(e4, t6, {
        then: function() {
        },
        status: `rejected`,
        reason: n8
      }, jd());
    } finally {
      T2.p = a4, o3 !== null && s2.types !== null && (o3.types = s2.types), w2.T = o3;
    }
  }
  function tc2() {
  }
  function nc(e4, t6, n7, r5) {
    if (e4.tag !== 5) throw Error(a3(476));
    var i4 = rc(e4).queue;
    ec2(e4, i4, t6, De2, n7 === null ? tc2 : function() {
      return ic2(e4), n7(r5);
    });
  }
  function rc(e4) {
    var t6 = e4.memoizedState;
    if (t6 !== null) return t6;
    t6 = {
      memoizedState: De2,
      baseState: De2,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ps2,
        lastRenderedState: De2
      },
      next: null
    };
    var n7 = {};
    return t6.next = {
      memoizedState: n7,
      baseState: n7,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ps2,
        lastRenderedState: n7
      },
      next: null
    }, e4.memoizedState = t6, e4 = e4.alternate, e4 !== null && (e4.memoizedState = t6), t6;
  }
  function ic2(e4) {
    var t6 = rc(e4);
    t6.next === null && (t6 = e4.alternate.memoizedState), dc(e4, t6.next.queue, {}, jd());
  }
  function ac2() {
    return ka2(sh);
  }
  function oc2() {
    return V2().memoizedState;
  }
  function sc2() {
    return V2().memoizedState;
  }
  function cc2(e4) {
    for (var t6 = e4.return; t6 !== null; ) {
      switch (t6.tag) {
        case 24:
        case 3:
          var n7 = jd();
          e4 = bo2(n7);
          var r5 = xo2(t6, e4, n7);
          r5 !== null && (Pd(r5, t6, n7), So2(r5, t6, n7)), t6 = {
            cache: Fa2()
          }, e4.payload = t6;
          return;
      }
      t6 = t6.return;
    }
  }
  function lc2(e4, t6, n7) {
    var r5 = jd();
    n7 = {
      lane: r5,
      revertLane: 0,
      gesture: null,
      action: n7,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, pc(e4) ? mc(t6, n7) : (n7 = Ii2(e4, t6, n7, r5), n7 !== null && (Pd(n7, e4, r5), hc2(n7, t6, r5)));
  }
  function uc(e4, t6, n7) {
    dc(e4, t6, n7, jd());
  }
  function dc(e4, t6, n7, r5) {
    var i4 = {
      lane: r5,
      revertLane: 0,
      gesture: null,
      action: n7,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e4)) mc(t6, i4);
    else {
      var a4 = e4.alternate;
      if (e4.lanes === 0 && (a4 === null || a4.lanes === 0) && (a4 = t6.lastRenderedReducer, a4 !== null)) try {
        var o3 = t6.lastRenderedState, s2 = a4(o3, n7);
        if (i4.hasEagerState = true, i4.eagerState = s2, $r2(s2, o3)) return Fi2(e4, t6, i4, 0), K === null && Pi2(), false;
      } catch {
      }
      if (n7 = Ii2(e4, t6, i4, r5), n7 !== null) return Pd(n7, e4, r5), hc2(n7, t6, r5), true;
    }
    return false;
  }
  function fc(e4, t6, n7, r5) {
    if (r5 = {
      lane: 2,
      revertLane: Pf(),
      gesture: null,
      action: r5,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, pc(e4)) {
      if (t6) throw Error(a3(479));
    } else t6 = Ii2(e4, n7, r5, 2), t6 !== null && Pd(t6, e4, 2);
  }
  function pc(e4) {
    var t6 = e4.alternate;
    return e4 === R2 || t6 !== null && t6 === R2;
  }
  function mc(e4, t6) {
    Jo2 = qo = true;
    var n7 = e4.pending;
    n7 === null ? t6.next = t6 : (t6.next = n7.next, n7.next = t6), e4.pending = t6;
  }
  function hc2(e4, t6, n7) {
    if (n7 & 4194048) {
      var r5 = t6.lanes;
      r5 &= e4.pendingLanes, n7 |= r5, t6.lanes = n7, Dt2(e4, n7);
    }
  }
  var gc2 = {
    readContext: ka2,
    use: ds2,
    useCallback: B,
    useContext: B,
    useEffect: B,
    useImperativeHandle: B,
    useLayoutEffect: B,
    useInsertionEffect: B,
    useMemo: B,
    useReducer: B,
    useRef: B,
    useState: B,
    useDebugValue: B,
    useDeferredValue: B,
    useTransition: B,
    useSyncExternalStore: B,
    useId: B,
    useHostTransitionStatus: B,
    useFormState: B,
    useActionState: B,
    useOptimistic: B,
    useMemoCache: B,
    useCacheRefresh: B,
    useEffectEvent: B
  }, _c = {
    readContext: ka2,
    use: ds2,
    useCallback: function(e4, t6) {
      return cs2().memoizedState = [e4, t6 === void 0 ? null : t6], e4;
    },
    useContext: ka2,
    useEffect: Vs2,
    useImperativeHandle: function(e4, t6, n7) {
      n7 = n7 == null ? null : n7.concat([e4]), zs2(4194308, 4, qs.bind(null, t6, e4), n7);
    },
    useLayoutEffect: function(e4, t6) {
      return zs2(4194308, 4, e4, t6);
    },
    useInsertionEffect: function(e4, t6) {
      zs2(4, 2, e4, t6);
    },
    useMemo: function(e4, t6) {
      var n7 = cs2();
      t6 = t6 === void 0 ? null : t6;
      var r5 = e4();
      if (Yo) {
        lt2(true);
        try {
          e4();
        } finally {
          lt2(false);
        }
      }
      return n7.memoizedState = [r5, t6], r5;
    },
    useReducer: function(e4, t6, n7) {
      var r5 = cs2();
      if (n7 !== void 0) {
        var i4 = n7(t6);
        if (Yo) {
          lt2(true);
          try {
            n7(t6);
          } finally {
            lt2(false);
          }
        }
      } else i4 = t6;
      return r5.memoizedState = r5.baseState = i4, e4 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e4,
        lastRenderedState: i4
      }, r5.queue = e4, e4 = e4.dispatch = lc2.bind(null, R2, e4), [r5.memoizedState, e4];
    },
    useRef: function(e4) {
      var t6 = cs2();
      return e4 = {
        current: e4
      }, t6.memoizedState = e4;
    },
    useState: function(e4) {
      e4 = Cs(e4);
      var t6 = e4.queue, n7 = uc.bind(null, R2, t6);
      return t6.dispatch = n7, [e4.memoizedState, n7];
    },
    useDebugValue: Ys2,
    useDeferredValue: function(e4, t6) {
      return Qs2(cs2(), e4, t6);
    },
    useTransition: function() {
      var e4 = Cs(false);
      return e4 = ec2.bind(null, R2, e4.queue, true, false), cs2().memoizedState = e4, [false, e4];
    },
    useSyncExternalStore: function(e4, t6, n7) {
      var r5 = R2, i4 = cs2();
      if (F2) {
        if (n7 === void 0) throw Error(a3(407));
        n7 = n7();
      } else {
        if (n7 = t6(), K === null) throw Error(a3(349));
        J & 127 || vs2(r5, t6, n7);
      }
      i4.memoizedState = n7;
      var o3 = {
        value: n7,
        getSnapshot: t6
      };
      return i4.queue = o3, Vs2(bs2.bind(null, r5, o3, e4), [e4]), r5.flags |= 2048, Ls2(9, {
        destroy: void 0
      }, ys2.bind(null, r5, o3, n7, t6), null), n7;
    },
    useId: function() {
      var e4 = cs2(), t6 = K.identifierPrefix;
      if (F2) {
        var n7 = M2, r5 = ia2;
        n7 = (r5 & ~(1 << 32 - ut2(r5) - 1)).toString(32) + n7, t6 = `_` + t6 + `R_` + n7, n7 = Xo2++, 0 < n7 && (t6 += `H` + n7.toString(32)), t6 += `_`;
      } else n7 = $o++, t6 = `_` + t6 + `r_` + n7.toString(32) + `_`;
      return e4.memoizedState = t6;
    },
    useHostTransitionStatus: ac2,
    useFormState: Ms2,
    useActionState: Ms2,
    useOptimistic: function(e4) {
      var t6 = cs2();
      t6.memoizedState = t6.baseState = e4;
      var n7 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t6.queue = n7, t6 = fc.bind(null, R2, true, n7), n7.dispatch = t6, [e4, t6];
    },
    useMemoCache: fs2,
    useCacheRefresh: function() {
      return cs2().memoizedState = cc2.bind(null, R2);
    },
    useEffectEvent: function(e4) {
      var t6 = cs2(), n7 = {
        impl: e4
      };
      return t6.memoizedState = n7, function() {
        if (G & 2) throw Error(a3(440));
        return n7.impl.apply(void 0, arguments);
      };
    }
  }, vc = {
    readContext: ka2,
    use: ds2,
    useCallback: Xs2,
    useContext: ka2,
    useEffect: Hs2,
    useImperativeHandle: Js2,
    useInsertionEffect: Gs,
    useLayoutEffect: Ks,
    useMemo: Zs2,
    useReducer: ms2,
    useRef: Rs2,
    useState: function() {
      return ms2(ps2);
    },
    useDebugValue: Ys2,
    useDeferredValue: function(e4, t6) {
      return $s2(V2(), z2.memoizedState, e4, t6);
    },
    useTransition: function() {
      var e4 = ms2(ps2)[0], t6 = V2().memoizedState;
      return [typeof e4 == `boolean` ? e4 : us2(e4), t6];
    },
    useSyncExternalStore: _s2,
    useId: oc2,
    useHostTransitionStatus: ac2,
    useFormState: Ns2,
    useActionState: Ns2,
    useOptimistic: function(e4, t6) {
      return ws2(V2(), z2, e4, t6);
    },
    useMemoCache: fs2,
    useCacheRefresh: sc2,
    useEffectEvent: Ws
  }, yc = {
    readContext: ka2,
    use: ds2,
    useCallback: Xs2,
    useContext: ka2,
    useEffect: Hs2,
    useImperativeHandle: Js2,
    useInsertionEffect: Gs,
    useLayoutEffect: Ks,
    useMemo: Zs2,
    useReducer: gs,
    useRef: Rs2,
    useState: function() {
      return gs(ps2);
    },
    useDebugValue: Ys2,
    useDeferredValue: function(e4, t6) {
      var n7 = V2();
      return z2 === null ? Qs2(n7, e4, t6) : $s2(n7, z2.memoizedState, e4, t6);
    },
    useTransition: function() {
      var e4 = gs(ps2)[0], t6 = V2().memoizedState;
      return [typeof e4 == `boolean` ? e4 : us2(e4), t6];
    },
    useSyncExternalStore: _s2,
    useId: oc2,
    useHostTransitionStatus: ac2,
    useFormState: Is2,
    useActionState: Is2,
    useOptimistic: function(e4, t6) {
      var n7 = V2();
      return z2 === null ? (n7.baseState = e4, [e4, n7.queue.dispatch]) : ws2(n7, z2, e4, t6);
    },
    useMemoCache: fs2,
    useCacheRefresh: sc2,
    useEffectEvent: Ws
  };
  function bc(e4, t6, n7, r5) {
    t6 = e4.memoizedState, n7 = n7(r5, t6), n7 = n7 == null ? t6 : S({}, t6, n7), e4.memoizedState = n7, e4.lanes === 0 && (e4.updateQueue.baseState = n7);
  }
  var xc = {
    enqueueSetState: function(e4, t6, n7) {
      e4 = e4._reactInternals;
      var r5 = jd(), i4 = bo2(r5);
      i4.payload = t6, n7 != null && (i4.callback = n7), t6 = xo2(e4, i4, r5), t6 !== null && (Pd(t6, e4, r5), So2(t6, e4, r5));
    },
    enqueueReplaceState: function(e4, t6, n7) {
      e4 = e4._reactInternals;
      var r5 = jd(), i4 = bo2(r5);
      i4.tag = 1, i4.payload = t6, n7 != null && (i4.callback = n7), t6 = xo2(e4, i4, r5), t6 !== null && (Pd(t6, e4, r5), So2(t6, e4, r5));
    },
    enqueueForceUpdate: function(e4, t6) {
      e4 = e4._reactInternals;
      var n7 = jd(), r5 = bo2(n7);
      r5.tag = 2, t6 != null && (r5.callback = t6), t6 = xo2(e4, r5, n7), t6 !== null && (Pd(t6, e4, n7), So2(t6, e4, n7));
    }
  };
  function Sc(e4, t6, n7, r5, i4, a4, o3) {
    return e4 = e4.stateNode, typeof e4.shouldComponentUpdate == `function` ? e4.shouldComponentUpdate(r5, a4, o3) : t6.prototype && t6.prototype.isPureReactComponent ? !ei2(n7, r5) || !ei2(i4, a4) : true;
  }
  function Cc(e4, t6, n7, r5) {
    e4 = t6.state, typeof t6.componentWillReceiveProps == `function` && t6.componentWillReceiveProps(n7, r5), typeof t6.UNSAFE_componentWillReceiveProps == `function` && t6.UNSAFE_componentWillReceiveProps(n7, r5), t6.state !== e4 && xc.enqueueReplaceState(t6, t6.state, null);
  }
  function wc2(e4, t6) {
    var n7 = t6;
    if (`ref` in t6) for (var r5 in n7 = {}, t6) r5 !== `ref` && (n7[r5] = t6[r5]);
    if (e4 = e4.defaultProps) for (var i4 in n7 === t6 && (n7 = S({}, n7)), e4) n7[i4] === void 0 && (n7[i4] = e4[i4]);
    return n7;
  }
  function Tc2(e4) {
    Ai(e4);
  }
  function Ec2(e4) {
    console.error(e4);
  }
  function Dc2(e4) {
    Ai(e4);
  }
  function Oc2(e4, t6) {
    try {
      var n7 = e4.onUncaughtError;
      n7(t6.value, {
        componentStack: t6.stack
      });
    } catch (e5) {
      setTimeout(function() {
        throw e5;
      });
    }
  }
  function kc2(e4, t6, n7) {
    try {
      var r5 = e4.onCaughtError;
      r5(n7.value, {
        componentStack: n7.stack,
        errorBoundary: t6.tag === 1 ? t6.stateNode : null
      });
    } catch (e5) {
      setTimeout(function() {
        throw e5;
      });
    }
  }
  function Ac2(e4, t6, n7) {
    return n7 = bo2(n7), n7.tag = 3, n7.payload = {
      element: null
    }, n7.callback = function() {
      Oc2(e4, t6);
    }, n7;
  }
  function jc2(e4) {
    return e4 = bo2(e4), e4.tag = 3, e4;
  }
  function Mc2(e4, t6, n7, r5) {
    var i4 = n7.type.getDerivedStateFromError;
    if (typeof i4 == `function`) {
      var a4 = r5.value;
      e4.payload = function() {
        return i4(a4);
      }, e4.callback = function() {
        kc2(t6, n7, r5);
      };
    }
    var o3 = n7.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e4.callback = function() {
      kc2(t6, n7, r5), typeof i4 != `function` && (yd === null ? yd = /* @__PURE__ */ new Set([this]) : yd.add(this));
      var e5 = r5.stack;
      this.componentDidCatch(r5.value, {
        componentStack: e5 === null ? `` : e5
      });
    });
  }
  function Nc2(e4, t6, n7, r5, i4) {
    if (n7.flags |= 32768, typeof r5 == `object` && r5 && typeof r5.then == `function`) {
      if (t6 = n7.alternate, t6 !== null && Ea2(t6, n7, i4, true), n7 = Po.current, n7 !== null) {
        switch (n7.tag) {
          case 31:
          case 13:
          case 19:
            return Fo === null ? Kd() : n7.alternate === null && od === 0 && (od = 3), n7.flags &= -257, n7.flags |= 65536, n7.lanes = i4, r5 === to2 ? n7.flags |= 16384 : (t6 = n7.updateQueue, t6 === null ? n7.updateQueue = /* @__PURE__ */ new Set([r5]) : t6.add(r5), mf(e4, r5, i4)), false;
          case 22:
            return n7.flags |= 65536, r5 === to2 ? n7.flags |= 16384 : (t6 = n7.updateQueue, t6 === null ? (t6 = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r5])
            }, n7.updateQueue = t6) : (n7 = t6.retryQueue, n7 === null ? t6.retryQueue = /* @__PURE__ */ new Set([r5]) : n7.add(r5)), mf(e4, r5, i4)), false;
        }
        throw Error(a3(435, n7.tag));
      }
      return mf(e4, r5, i4), Kd(), false;
    }
    if (F2) return t6 = Po.current, t6 === null ? (r5 !== fa2 && (t6 = Error(a3(423), {
      cause: r5
    }), ya2(Qi2(t6, n7))), e4 = e4.current.alternate, e4.flags |= 65536, i4 &= -i4, e4.lanes |= i4, r5 = Qi2(r5, n7), i4 = Ac2(e4.stateNode, r5, i4), Co2(e4, i4), od !== 4 && (od = 2)) : (!(t6.flags & 65536) && (t6.flags |= 256), t6.flags |= 65536, t6.lanes = i4, r5 !== fa2 && (e4 = Error(a3(422), {
      cause: r5
    }), ya2(Qi2(e4, n7)))), false;
    var o3 = Error(a3(520), {
      cause: r5
    });
    if (o3 = Qi2(o3, n7), fd === null ? fd = [o3] : fd.push(o3), od !== 4 && (od = 2), t6 === null) return true;
    r5 = Qi2(r5, n7), n7 = t6;
    do {
      switch (n7.tag) {
        case 3:
          return n7.flags |= 65536, e4 = i4 & -i4, n7.lanes |= e4, e4 = Ac2(n7.stateNode, r5, e4), Co2(n7, e4), false;
        case 1:
          if (t6 = n7.type, o3 = n7.stateNode, !(n7.flags & 128) && (typeof t6.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (yd === null || !yd.has(o3)))) return n7.flags |= 65536, i4 &= -i4, n7.lanes |= i4, i4 = jc2(i4), Mc2(i4, e4, n7, r5), Co2(n7, i4), false;
          break;
        case 22:
          if (n7.memoizedState !== null) return n7.flags |= 65536, false;
      }
      n7 = n7.return;
    } while (n7 !== null);
    return false;
  }
  var Pc2 = Error(a3(461)), Fc2 = false;
  function Ic2(e4, t6, n7, r5) {
    t6.child = e4 === null ? go2(t6, null, n7, r5) : ho2(t6, e4.child, n7, r5);
  }
  function Lc2(e4, t6, n7, r5, i4) {
    n7 = n7.render;
    var a4 = t6.ref;
    if (`ref` in r5) {
      var o3 = {};
      for (var s2 in r5) s2 !== `ref` && (o3[s2] = r5[s2]);
    } else o3 = r5;
    return Oa2(t6), r5 = ts(e4, t6, n7, o3, a4, i4), s2 = as(), e4 !== null && !Fc2 ? (os(e4, t6, i4), dl2(e4, t6, i4)) : (F2 && s2 && oa2(t6), t6.flags |= 1, Ic2(e4, t6, r5, i4), t6.child);
  }
  function Rc2(e4, t6, n7, r5, i4) {
    if (e4 === null) {
      var a4 = n7.type;
      return typeof a4 == `function` && !Ui2(a4) && a4.defaultProps === void 0 && n7.compare === null ? (t6.tag = 15, t6.type = a4, zc2(e4, t6, a4, r5, i4)) : (e4 = Ki(n7.type, null, r5, t6, t6.mode, i4), e4.ref = t6.ref, e4.return = t6, t6.child = e4);
    }
    if (a4 = e4.child, !fl(e4, i4)) {
      var o3 = a4.memoizedProps;
      if (n7 = n7.compare, n7 = n7 === null ? ei2 : n7, n7(o3, r5) && e4.ref === t6.ref) return dl2(e4, t6, i4);
    }
    return t6.flags |= 1, e4 = Wi2(a4, r5), e4.ref = t6.ref, e4.return = t6, t6.child = e4;
  }
  function zc2(e4, t6, n7, r5, i4) {
    if (e4 !== null) {
      var a4 = e4.memoizedProps;
      if (ei2(a4, r5) && e4.ref === t6.ref) {
        if (Fc2 = false, t6.pendingProps = r5 = a4, fl(e4, i4)) e4.flags & 131072 && (Fc2 = true);
        else return t6.lanes = e4.lanes, dl2(e4, t6, i4);
      }
    }
    return qc2(e4, t6, n7, r5, i4);
  }
  function Bc2(e4, t6, n7, r5) {
    var i4 = r5.children, a4 = e4 === null ? null : e4.memoizedState;
    if (e4 === null && t6.stateNode === null && (t6.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r5.mode === `hidden`) {
      if (t6.flags & 128) {
        if (a4 = a4 === null ? n7 : a4.baseLanes | n7, e4 !== null) {
          for (r5 = t6.child = e4.child, i4 = 0; r5 !== null; ) i4 = i4 | r5.lanes | r5.childLanes, r5 = r5.sibling;
          r5 = i4 & ~a4;
        } else r5 = 0, t6.child = null;
        return Hc2(e4, t6, a4, n7, r5);
      }
      if (n7 & 536870912) t6.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e4 !== null && Xa(t6, a4 === null ? null : a4.cachePool), a4 === null ? Mo() : jo(t6, a4), Ro2(t6);
      else return r5 = t6.lanes = 536870912, Hc2(e4, t6, a4 === null ? n7 : a4.baseLanes | n7, n7, r5);
    } else a4 === null ? (e4 !== null && Xa(t6, null), Mo(), zo2()) : (Xa(t6, a4.cachePool), jo(t6, a4), zo2(), t6.memoizedState = null);
    return Ic2(e4, t6, i4, n7), t6.child;
  }
  function Vc2(e4, t6) {
    return e4 !== null && e4.tag === 22 || t6.stateNode !== null || (t6.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t6.sibling;
  }
  function Hc2(e4, t6, n7, r5, i4) {
    var a4 = Ya();
    return a4 = a4 === null ? null : {
      parent: L2._currentValue,
      pool: a4
    }, t6.memoizedState = {
      baseLanes: n7,
      cachePool: a4
    }, e4 !== null && Xa(t6, null), Mo(), Ro2(t6), e4 !== null && Ea2(e4, t6, r5, true), t6.childLanes = i4, null;
  }
  function Uc2(e4, t6) {
    return t6 = nl2({
      mode: t6.mode,
      children: t6.children
    }, e4.mode), t6.ref = e4.ref, e4.child = t6, t6.return = e4, t6;
  }
  function Wc2(e4, t6, n7) {
    return ho2(t6, e4.child, null, n7), e4 = Uc2(t6, t6.pendingProps), e4.flags |= 2, Bo2(t6), t6.memoizedState = null, e4;
  }
  function Gc2(e4, t6, n7) {
    var r5 = t6.pendingProps, i4 = !!(t6.flags & 128);
    if (t6.flags &= -129, e4 === null) {
      if (F2) {
        if (r5.mode === `hidden`) return e4 = Uc2(t6, r5), t6.lanes = 536870912, e4.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, Vc2(null, e4);
        if (Lo2(t6), (e4 = P2) ? (e4 = am(e4, da2), e4 = e4 !== null && e4.data === `&` ? e4 : null, e4 !== null && (t6.memoizedState = {
          dehydrated: e4,
          treeContext: ra2 === null ? null : {
            id: ia2,
            overflow: M2
          },
          retryLane: 536870912,
          hydrationErrors: null
        }, n7 = Yi2(e4), n7.return = t6, t6.child = n7, la2 = t6, P2 = null)) : e4 = null, e4 === null) throw pa(t6);
        return t6.lanes = 536870912, null;
      }
      return Uc2(t6, r5);
    }
    var o3 = e4.memoizedState;
    if (o3 !== null) {
      var s2 = o3.dehydrated;
      if (Lo2(t6), i4) {
        if (t6.flags & 256) t6.flags &= -257, t6 = Wc2(e4, t6, n7);
        else if (t6.memoizedState !== null) t6.child = e4.child, t6.flags |= 128, t6 = null;
        else throw Error(a3(558));
      } else if (Fc2 || Ea2(e4, t6, n7, false), i4 = (n7 & e4.childLanes) !== 0, Fc2 || i4) {
        if (ko.current === null) {
          if (r5 = K, r5 !== null && (s2 = Ot2(r5, n7), s2 !== 0 && s2 !== o3.retryLane)) throw o3.retryLane = s2, Li2(e4, s2), Pd(r5, e4, s2), Pc2;
          Kd();
        }
        t6 = Wc2(e4, t6, n7);
      } else e4 = o3.treeContext, P2 = lm(s2.nextSibling), la2 = t6, F2 = true, ua2 = null, da2 = false, e4 !== null && ca2(t6, e4), t6 = Uc2(t6, r5), t6.flags |= 134221824;
      return t6;
    }
    return e4 = Wi2(e4.child, {
      mode: r5.mode,
      children: r5.children
    }), e4.ref = t6.ref, t6.child = e4, e4.return = t6, e4;
  }
  function Kc2(e4, t6) {
    var n7 = t6.ref;
    if (n7 === null) e4 !== null && e4.ref !== null && (t6.flags |= 4194816);
    else {
      if (typeof n7 != `function` && typeof n7 != `object`) throw Error(a3(284));
      (e4 === null || e4.ref !== n7) && (t6.flags |= 4194816);
    }
  }
  function qc2(e4, t6, n7, r5, i4) {
    return Oa2(t6), n7 = ts(e4, t6, n7, r5, void 0, i4), r5 = as(), e4 !== null && !Fc2 ? (os(e4, t6, i4), dl2(e4, t6, i4)) : (F2 && r5 && oa2(t6), t6.flags |= 1, Ic2(e4, t6, n7, i4), t6.child);
  }
  function Jc(e4, t6, n7, r5, i4, a4) {
    return Oa2(t6), t6.updateQueue = null, n7 = rs(t6, r5, n7, i4), ns(e4), r5 = as(), e4 !== null && !Fc2 ? (os(e4, t6, a4), dl2(e4, t6, a4)) : (F2 && r5 && oa2(t6), t6.flags |= 1, Ic2(e4, t6, n7, a4), t6.child);
  }
  function Yc(e4, t6, n7, r5, i4) {
    if (Oa2(t6), t6.stateNode === null) {
      var a4 = Bi2, o3 = n7.contextType;
      typeof o3 == `object` && o3 && (a4 = ka2(o3)), a4 = new n7(r5, a4), t6.memoizedState = a4.state !== null && a4.state !== void 0 ? a4.state : null, a4.updater = xc, t6.stateNode = a4, a4._reactInternals = t6, a4 = t6.stateNode, a4.props = r5, a4.state = t6.memoizedState, a4.refs = {}, vo2(t6), o3 = n7.contextType, a4.context = typeof o3 == `object` && o3 ? ka2(o3) : Bi2, a4.state = t6.memoizedState, o3 = n7.getDerivedStateFromProps, typeof o3 == `function` && (bc(t6, n7, o3, r5), a4.state = t6.memoizedState), typeof n7.getDerivedStateFromProps == `function` || typeof a4.getSnapshotBeforeUpdate == `function` || typeof a4.UNSAFE_componentWillMount != `function` && typeof a4.componentWillMount != `function` || (o3 = a4.state, typeof a4.componentWillMount == `function` && a4.componentWillMount(), typeof a4.UNSAFE_componentWillMount == `function` && a4.UNSAFE_componentWillMount(), o3 !== a4.state && xc.enqueueReplaceState(a4, a4.state, null), Eo2(t6, r5, a4, i4), To2(), a4.state = t6.memoizedState), typeof a4.componentDidMount == `function` && (t6.flags |= 4194308), r5 = true;
    } else if (e4 === null) {
      a4 = t6.stateNode;
      var s2 = t6.memoizedProps, c2 = wc2(n7, s2);
      a4.props = c2;
      var l2 = a4.context, u2 = n7.contextType;
      o3 = Bi2, typeof u2 == `object` && u2 && (o3 = ka2(u2));
      var d2 = n7.getDerivedStateFromProps;
      u2 = typeof d2 == `function` || typeof a4.getSnapshotBeforeUpdate == `function`, s2 = t6.pendingProps !== s2, u2 || typeof a4.UNSAFE_componentWillReceiveProps != `function` && typeof a4.componentWillReceiveProps != `function` || (s2 || l2 !== o3) && Cc(t6, a4, r5, o3), _o2 = false;
      var f2 = t6.memoizedState;
      a4.state = f2, Eo2(t6, r5, a4, i4), To2(), l2 = t6.memoizedState, s2 || f2 !== l2 || _o2 ? (typeof d2 == `function` && (bc(t6, n7, d2, r5), l2 = t6.memoizedState), (c2 = _o2 || Sc(t6, n7, c2, r5, f2, l2, o3)) ? (u2 || typeof a4.UNSAFE_componentWillMount != `function` && typeof a4.componentWillMount != `function` || (typeof a4.componentWillMount == `function` && a4.componentWillMount(), typeof a4.UNSAFE_componentWillMount == `function` && a4.UNSAFE_componentWillMount()), typeof a4.componentDidMount == `function` && (t6.flags |= 4194308)) : (typeof a4.componentDidMount == `function` && (t6.flags |= 4194308), t6.memoizedProps = r5, t6.memoizedState = l2), a4.props = r5, a4.state = l2, a4.context = o3, r5 = c2) : (typeof a4.componentDidMount == `function` && (t6.flags |= 4194308), r5 = false);
    } else {
      a4 = t6.stateNode, yo2(e4, t6), o3 = t6.memoizedProps, u2 = wc2(n7, o3), a4.props = u2, d2 = t6.pendingProps, f2 = a4.context, l2 = n7.contextType, c2 = Bi2, typeof l2 == `object` && l2 && (c2 = ka2(l2)), s2 = n7.getDerivedStateFromProps, (l2 = typeof s2 == `function` || typeof a4.getSnapshotBeforeUpdate == `function`) || typeof a4.UNSAFE_componentWillReceiveProps != `function` && typeof a4.componentWillReceiveProps != `function` || (o3 !== d2 || f2 !== c2) && Cc(t6, a4, r5, c2), _o2 = false, f2 = t6.memoizedState, a4.state = f2, Eo2(t6, r5, a4, i4), To2();
      var p2 = t6.memoizedState;
      o3 !== d2 || f2 !== p2 || _o2 || e4 !== null && e4.dependencies !== null && Da2(e4.dependencies) ? (typeof s2 == `function` && (bc(t6, n7, s2, r5), p2 = t6.memoizedState), (u2 = _o2 || Sc(t6, n7, u2, r5, f2, p2, c2) || e4 !== null && e4.dependencies !== null && Da2(e4.dependencies)) ? (l2 || typeof a4.UNSAFE_componentWillUpdate != `function` && typeof a4.componentWillUpdate != `function` || (typeof a4.componentWillUpdate == `function` && a4.componentWillUpdate(r5, p2, c2), typeof a4.UNSAFE_componentWillUpdate == `function` && a4.UNSAFE_componentWillUpdate(r5, p2, c2)), typeof a4.componentDidUpdate == `function` && (t6.flags |= 4), typeof a4.getSnapshotBeforeUpdate == `function` && (t6.flags |= 1024)) : (typeof a4.componentDidUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t6.flags |= 4), typeof a4.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t6.flags |= 1024), t6.memoizedProps = r5, t6.memoizedState = p2), a4.props = r5, a4.state = p2, a4.context = c2, r5 = u2) : (typeof a4.componentDidUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t6.flags |= 4), typeof a4.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t6.flags |= 1024), r5 = false);
    }
    return a4 = r5, Kc2(e4, t6), r5 = !!(t6.flags & 128), a4 || r5 ? (a4 = t6.stateNode, n7 = r5 && typeof n7.getDerivedStateFromError != `function` ? null : a4.render(), t6.flags |= 1, e4 !== null && r5 ? (t6.child = ho2(t6, e4.child, null, i4), t6.child = ho2(t6, null, n7, i4)) : Ic2(e4, t6, n7, i4), t6.memoizedState = a4.state, e4 = t6.child) : e4 = dl2(e4, t6, i4), e4;
  }
  function Xc(e4, t6, n7, r5) {
    return _a(), t6.flags |= 256, Ic2(e4, t6, n7, r5), t6.child;
  }
  var Zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc2(e4) {
    return {
      baseLanes: e4,
      cachePool: Za()
    };
  }
  function $c2(e4, t6, n7) {
    return e4 = e4 === null ? 0 : e4.childLanes & ~n7, t6 && (e4 |= ud), e4;
  }
  function el2(e4, t6, n7) {
    var r5 = t6.pendingProps, i4 = false, a4 = !!(t6.flags & 128), o3;
    if ((o3 = a4) || (o3 = e4 !== null && e4.memoizedState === null ? false : !!(Vo2.current & 2)), o3 && (i4 = true, t6.flags &= -129), o3 = !!(t6.flags & 32), t6.flags &= -33, e4 === null) {
      if (F2) {
        if (i4 ? Io2(t6) : zo2(), (e4 = P2) ? (e4 = am(e4, da2), e4 = e4 !== null && e4.data !== `&` ? e4 : null, e4 !== null && (t6.memoizedState = {
          dehydrated: e4,
          treeContext: ra2 === null ? null : {
            id: ia2,
            overflow: M2
          },
          retryLane: 536870912,
          hydrationErrors: null
        }, n7 = Yi2(e4), n7.return = t6, t6.child = n7, la2 = t6, P2 = null)) : e4 = null, e4 === null) throw pa(t6);
        return t6.lanes = sm(e4) ? 32 : 536870912, null;
      }
      return a4 = r5.children, r5 = r5.fallback, i4 ? (zo2(), i4 = t6.mode, a4 = nl2({
        mode: `hidden`,
        children: a4
      }, i4), r5 = qi2(r5, i4, n7, null), a4.return = t6, r5.return = t6, a4.sibling = r5, t6.child = a4, r5 = t6.child, r5.memoizedState = Qc2(n7), r5.childLanes = $c2(e4, o3, n7), t6.memoizedState = Zc, Vc2(null, r5)) : (Io2(t6), tl2(t6, a4));
    }
    var s2 = e4.memoizedState;
    if (s2 !== null) {
      var c2 = s2.dehydrated;
      if (c2 !== null) return il(e4, t6, a4, o3, r5, c2, s2, n7);
    }
    return i4 ? (zo2(), i4 = r5.fallback, a4 = t6.mode, s2 = e4.child, c2 = s2.sibling, r5 = Wi2(s2, {
      mode: `hidden`,
      children: r5.children
    }), r5.subtreeFlags = s2.subtreeFlags & 1206910976, c2 === null ? (i4 = qi2(i4, a4, n7, null), i4.flags |= 2) : i4 = Wi2(c2, i4), i4.return = t6, r5.return = t6, r5.sibling = i4, t6.child = r5, Vc2(null, r5), r5 = t6.child, i4 = e4.child.memoizedState, i4 === null ? i4 = Qc2(n7) : (a4 = i4.cachePool, a4 === null ? a4 = Za() : (s2 = L2._currentValue, a4 = a4.parent === s2 ? a4 : {
      parent: s2,
      pool: s2
    }), i4 = {
      baseLanes: i4.baseLanes | n7,
      cachePool: a4
    }), r5.memoizedState = i4, r5.childLanes = $c2(e4, o3, n7), t6.memoizedState = Zc, Vc2(e4.child, r5)) : (Io2(t6), n7 = e4.child, e4 = n7.sibling, n7 = Wi2(n7, {
      mode: `visible`,
      children: r5.children
    }), n7.return = t6, n7.sibling = null, e4 !== null && (o3 = t6.deletions, o3 === null ? (t6.deletions = [e4], t6.flags |= 16) : o3.push(e4)), t6.child = n7, t6.memoizedState = null, n7);
  }
  function tl2(e4, t6) {
    return t6 = nl2({
      mode: `visible`,
      children: t6
    }, e4.mode), t6.return = e4, e4.child = t6;
  }
  function nl2(e4, t6) {
    return e4 = Hi(22, e4, null, t6), e4.lanes = 0, e4;
  }
  function rl2(e4, t6, n7) {
    return ho2(t6, e4.child, null, n7), e4 = tl2(t6, t6.pendingProps.children), e4.flags |= 2, t6.memoizedState = null, e4;
  }
  function il(e4, t6, n7, r5, i4, o3, s2, c2) {
    if (n7) return t6.flags & 256 ? (Io2(t6), t6.flags &= -257, rl2(e4, t6, c2)) : t6.memoizedState === null ? (zo2(), o3 = i4.fallback, s2 = t6.mode, i4 = nl2({
      mode: `visible`,
      children: i4.children
    }, s2), o3 = qi2(o3, s2, c2, null), o3.flags |= 2, i4.return = t6, o3.return = t6, i4.sibling = o3, t6.child = i4, ho2(t6, e4.child, null, c2), i4 = t6.child, i4.memoizedState = Qc2(c2), i4.childLanes = $c2(e4, r5, c2), t6.memoizedState = Zc, Vc2(null, i4)) : (zo2(), t6.child = e4.child, t6.flags |= 128, null);
    if (Io2(t6), sm(o3)) {
      if (r5 = o3.nextSibling && o3.nextSibling.dataset, r5) var l2 = r5.dgst;
      return r5 = l2, r5 !== `` && (i4 = Error(a3(419)), i4.stack = ``, i4.digest = r5, ya2({
        value: i4,
        source: null,
        stack: null
      })), rl2(e4, t6, c2);
    }
    if (Fc2 || Ea2(e4, t6, c2, false), r5 = (c2 & e4.childLanes) !== 0, Fc2 || r5) {
      if (ko.current !== null) return rl2(e4, t6, c2);
      if (r5 = K, r5 !== null && (i4 = Ot2(r5, c2), i4 !== 0 && i4 !== s2.retryLane)) throw s2.retryLane = i4, Li2(e4, i4), Pd(r5, e4, i4), Pc2;
      return om(o3) || Kd(), rl2(e4, t6, c2);
    }
    return om(o3) ? (t6.flags |= 192, t6.child = e4.child, null) : (e4 = s2.treeContext, P2 = lm(o3.nextSibling), la2 = t6, F2 = true, ua2 = null, da2 = false, e4 !== null && ca2(t6, e4), t6 = tl2(t6, i4.children), t6.flags |= 134221824, t6);
  }
  function al(e4, t6, n7) {
    e4.lanes |= t6;
    var r5 = e4.alternate;
    r5 !== null && (r5.lanes |= t6), I2(e4.return, t6, n7);
  }
  function ol(e4) {
    for (var t6 = null; e4 !== null; ) {
      var n7 = e4.alternate;
      n7 !== null && Wo2(n7) === null && (t6 = e4), e4 = e4.sibling;
    }
    return t6;
  }
  function sl(e4, t6, n7, r5, i4, a4) {
    var o3 = e4.memoizedState;
    o3 === null ? e4.memoizedState = {
      isBackwards: t6,
      rendering: null,
      renderingStartTime: 0,
      last: r5,
      tail: n7,
      tailMode: i4,
      treeForkCount: a4
    } : (o3.isBackwards = t6, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r5, o3.tail = n7, o3.tailMode = i4, o3.treeForkCount = a4);
  }
  function cl2(e4) {
    var t6 = e4.child;
    for (e4.child = null; t6 !== null; ) {
      var n7 = t6.sibling;
      t6.sibling = e4.child, e4.child = t6, t6 = n7;
    }
  }
  function ll(e4, t6, n7) {
    var r5 = t6.pendingProps, i4 = r5.revealOrder, a4 = r5.tail;
    r5 = r5.children;
    var o3 = Vo2.current;
    if (t6.flags & 128) return Ho2(t6, o3), null;
    var s2 = !!(o3 & 2);
    if (s2 ? (o3 = o3 & 1 | 2, t6.flags |= 128) : o3 &= 1, Ho2(t6, o3), i4 === `backwards` && e4 !== null ? (cl2(e4), Ic2(e4, t6, r5, n7), cl2(e4)) : Ic2(e4, t6, r5, n7), r5 = F2 ? ea2 : 0, !s2 && e4 !== null && e4.flags & 128) a: for (e4 = t6.child; e4 !== null; ) {
      if (e4.tag === 13) e4.memoizedState !== null && al(e4, n7, t6);
      else if (e4.tag === 19) al(e4, n7, t6);
      else if (e4.child !== null) {
        e4.child.return = e4, e4 = e4.child;
        continue;
      }
      if (e4 === t6) break a;
      for (; e4.sibling === null; ) {
        if (e4.return === null || e4.return === t6) break a;
        e4 = e4.return;
      }
      e4.sibling.return = e4.return, e4 = e4.sibling;
    }
    switch (i4) {
      case `backwards`:
        n7 = ol(t6.child), n7 === null ? (i4 = t6.child, t6.child = null) : (i4 = n7.sibling, n7.sibling = null, cl2(t6)), sl(t6, true, i4, null, a4, r5);
        break;
      case `unstable_legacy-backwards`:
        for (n7 = null, i4 = t6.child, t6.child = null; i4 !== null; ) {
          if (e4 = i4.alternate, e4 !== null && Wo2(e4) === null) {
            t6.child = i4;
            break;
          }
          e4 = i4.sibling, i4.sibling = n7, n7 = i4, i4 = e4;
        }
        sl(t6, true, n7, null, a4, r5);
        break;
      case `together`:
        sl(t6, false, null, null, void 0, r5);
        break;
      case `independent`:
        t6.memoizedState = null;
        break;
      default:
        n7 = ol(t6.child), n7 === null ? (i4 = t6.child, t6.child = null) : (i4 = n7.sibling, n7.sibling = null), sl(t6, false, i4, n7, a4, r5);
    }
    return t6.child;
  }
  function ul(e4, t6, n7) {
    var r5 = t6.pendingProps;
    return Ca2(t6, t6.type, r5.value), Ic2(e4, t6, r5.children, n7), t6.child;
  }
  function dl2(e4, t6, n7) {
    if (e4 !== null && (t6.dependencies = e4.dependencies), sd |= t6.lanes, (n7 & t6.childLanes) === 0) {
      if (e4 !== null) {
        if (Ea2(e4, t6, n7, false), (n7 & t6.childLanes) === 0) return null;
      } else return null;
    }
    if (e4 !== null && t6.child !== e4.child) throw Error(a3(153));
    if (t6.child !== null) {
      for (e4 = t6.child, n7 = Wi2(e4, e4.pendingProps), t6.child = n7, n7.return = t6; e4.sibling !== null; ) e4 = e4.sibling, n7 = n7.sibling = Wi2(e4, e4.pendingProps), n7.return = t6;
      n7.sibling = null;
    }
    return t6.child;
  }
  function fl(e4, t6) {
    return (e4.lanes & t6) !== 0 || (e4 = e4.dependencies, !!(e4 !== null && Da2(e4)));
  }
  function pl(e4, t6, n7) {
    switch (t6.tag) {
      case 3:
        Ie2(t6, t6.stateNode.containerInfo), Ca2(t6, L2, e4.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        Re2(t6);
        break;
      case 4:
        Ie2(t6, t6.stateNode.containerInfo);
        break;
      case 10:
        Ca2(t6, t6.type, t6.memoizedProps.value);
        break;
      case 31:
        if (t6.memoizedState !== null) return t6.flags |= 128, Lo2(t6), null;
        break;
      case 13:
        var r5 = t6.memoizedState;
        if (r5 !== null) {
          if (r5.dehydrated !== null) return Io2(t6), t6.flags |= 128, null;
          r5 = Ea2(e4, t6, n7, false);
          var i4 = t6.child.childLanes;
          return r5 || (n7 & i4) !== 0 ? el2(e4, t6, n7) : (Io2(t6), e4 = dl2(e4, t6, n7), e4 === null ? null : e4.sibling);
        }
        Io2(t6);
        break;
      case 19:
        if (t6.flags & 128) return ll(e4, t6, n7);
        if (i4 = !!(e4.flags & 128), r5 = (n7 & t6.childLanes) !== 0, r5 ||= (Ea2(e4, t6, n7, false), (n7 & t6.childLanes) !== 0), i4) {
          if (r5) return ll(e4, t6, n7);
          t6.flags |= 128;
        }
        if (i4 = t6.memoizedState, i4 !== null && (i4.rendering = null, i4.tail = null, i4.lastEffect = null), Ho2(t6, Vo2.current), r5) break;
        return null;
      case 22:
        return t6.lanes = 0, Bc2(e4, t6, n7, t6.pendingProps);
      case 24:
        Ca2(t6, L2, e4.memoizedState.cache);
    }
    return dl2(e4, t6, n7);
  }
  function ml(e4, t6, n7) {
    if (e4 !== null) {
      if (e4.memoizedProps !== t6.pendingProps) Fc2 = true;
      else {
        if (!fl(e4, n7) && !(t6.flags & 128)) return Fc2 = false, pl(e4, t6, n7);
        Fc2 = !!(e4.flags & 131072);
      }
    } else Fc2 = false, F2 && t6.flags & 1048576 && N2(t6, ea2, t6.index);
    switch (t6.lanes = 0, t6.tag) {
      case 16:
        a: {
          var r5 = t6.pendingProps;
          if (e4 = io(t6.elementType), t6.type = e4, typeof e4 == `function`) Ui2(e4) ? (r5 = wc2(e4, r5), t6.tag = 1, t6 = Yc(null, t6, e4, r5, n7)) : (t6.tag = 0, t6 = qc2(null, t6, e4, r5, n7));
          else {
            if (e4 != null) {
              var i4 = e4.$$typeof;
              if (i4 === pe) {
                t6.tag = 11, t6 = Lc2(null, t6, e4, r5, n7);
                break a;
              }
              if (i4 === C2) {
                t6.tag = 14, t6 = Rc2(null, t6, e4, r5, n7);
                break a;
              }
              if (i4 === fe) {
                t6.tag = 10, t6.type = e4, t6 = ul(null, t6, n7);
                break a;
              }
            }
            throw t6 = Te2(e4) || e4, Error(a3(306, t6, ``));
          }
        }
        return t6;
      case 0:
        return qc2(e4, t6, t6.type, t6.pendingProps, n7);
      case 1:
        return r5 = t6.type, i4 = wc2(r5, t6.pendingProps), Yc(e4, t6, r5, i4, n7);
      case 3:
        a: {
          if (Ie2(t6, t6.stateNode.containerInfo), e4 === null) throw Error(a3(387));
          r5 = t6.pendingProps;
          var o3 = t6.memoizedState;
          i4 = o3.element, yo2(e4, t6), Eo2(t6, r5, null, n7);
          var s2 = t6.memoizedState;
          if (r5 = s2.cache, Ca2(t6, L2, r5), r5 !== o3.cache && Ta2(t6, [L2], n7, true), To2(), r5 = s2.element, o3.isDehydrated) {
            if (o3 = {
              element: r5,
              isDehydrated: false,
              cache: s2.cache
            }, t6.updateQueue.baseState = o3, t6.memoizedState = o3, t6.flags & 256) {
              t6 = Xc(e4, t6, r5, n7);
              break a;
            }
            if (r5 !== i4) {
              i4 = Qi2(Error(a3(424)), t6), ya2(i4), t6 = Xc(e4, t6, r5, n7);
              break a;
            }
            switch (e4 = t6.stateNode.containerInfo, e4.nodeType) {
              case 9:
                e4 = e4.body;
                break;
              default:
                e4 = e4.nodeName === `HTML` ? e4.ownerDocument.body : e4;
            }
            for (P2 = lm(e4.firstChild), la2 = t6, F2 = true, ua2 = null, da2 = true, n7 = go2(t6, null, r5, n7), t6.child = n7; n7; ) n7.flags = n7.flags & -3 | 134221824, n7 = n7.sibling;
          } else {
            if (_a(), r5 === i4) {
              t6 = dl2(e4, t6, n7);
              break a;
            }
            Ic2(e4, t6, r5, n7);
          }
          t6 = t6.child;
        }
        return t6;
      case 26:
        return Kc2(e4, t6), e4 === null ? (n7 = Nm(t6.type, null, t6.pendingProps, null)) ? t6.memoizedState = n7 : F2 || (t6.stateNode = fp(t6.type, t6.pendingProps, Pe2.current, t6)) : t6.memoizedState = Nm(t6.type, e4.memoizedProps, t6.pendingProps, e4.memoizedState), null;
      case 27:
        return Re2(t6), e4 === null && F2 && (r5 = t6.stateNode = hm(t6.type, t6.pendingProps, Pe2.current), la2 = t6, da2 = true, i4 = P2, Sp(t6.type) ? (um = i4, P2 = lm(r5.firstChild)) : P2 = i4), Ic2(e4, t6, t6.pendingProps.children, n7), Kc2(e4, t6), e4 === null && (t6.flags |= 4194304), t6.child;
      case 5:
        return e4 === null && F2 && ((i4 = r5 = P2) && (r5 = rm(r5, t6.type, t6.pendingProps, da2), r5 === null ? i4 = false : (t6.stateNode = r5, la2 = t6, P2 = lm(r5.firstChild), da2 = false, i4 = true)), i4 || pa(t6)), Re2(t6), i4 = t6.type, o3 = t6.pendingProps, s2 = e4 === null ? null : e4.memoizedProps, r5 = o3.children, pp(i4, o3) ? r5 = null : s2 !== null && pp(i4, s2) && (t6.flags |= 32), t6.memoizedState !== null && (i4 = ts(e4, t6, is, null, null, n7), sh._currentValue = i4), Kc2(e4, t6), Ic2(e4, t6, r5, n7), t6.child;
      case 6:
        return e4 === null && F2 && ((e4 = n7 = P2) && (n7 = im(n7, t6.pendingProps, da2), n7 === null ? e4 = false : (t6.stateNode = n7, la2 = t6, P2 = null, e4 = true)), e4 || pa(t6)), null;
      case 13:
        return el2(e4, t6, n7);
      case 4:
        return Ie2(t6, t6.stateNode.containerInfo), r5 = t6.pendingProps, e4 === null ? t6.child = ho2(t6, null, r5, n7) : Ic2(e4, t6, r5, n7), t6.child;
      case 11:
        return Lc2(e4, t6, t6.type, t6.pendingProps, n7);
      case 7:
        return r5 = t6.pendingProps, Kc2(e4, t6), Ic2(e4, t6, r5, n7), t6.child;
      case 8:
        return Ic2(e4, t6, t6.pendingProps.children, n7), t6.child;
      case 12:
        return Ic2(e4, t6, t6.pendingProps.children, n7), t6.child;
      case 10:
        return ul(e4, t6, n7);
      case 9:
        return i4 = t6.type._context, r5 = t6.pendingProps.children, Oa2(t6), i4 = ka2(i4), r5 = r5(i4), t6.flags |= 1, Ic2(e4, t6, r5, n7), t6.child;
      case 14:
        return Rc2(e4, t6, t6.type, t6.pendingProps, n7);
      case 15:
        return zc2(e4, t6, t6.type, t6.pendingProps, n7);
      case 19:
        return ll(e4, t6, n7);
      case 31:
        return Gc2(e4, t6, n7);
      case 22:
        return Bc2(e4, t6, n7, t6.pendingProps);
      case 24:
        return Oa2(t6), r5 = ka2(L2), e4 === null ? (i4 = Ya(), i4 === null && (i4 = K, o3 = Fa2(), i4.pooledCache = o3, o3.refCount++, o3 !== null && (i4.pooledCacheLanes |= n7), i4 = o3), t6.memoizedState = {
          parent: r5,
          cache: i4
        }, vo2(t6), Ca2(t6, L2, i4)) : ((e4.lanes & n7) !== 0 && (yo2(e4, t6), Eo2(t6, null, null, n7), To2()), i4 = e4.memoizedState, o3 = t6.memoizedState, i4.parent === r5 ? (r5 = o3.cache, Ca2(t6, L2, r5), r5 !== i4.cache && Ta2(t6, [L2], n7, true)) : (i4 = {
          parent: r5,
          cache: r5
        }, t6.memoizedState = i4, t6.lanes === 0 && (t6.memoizedState = t6.updateQueue.baseState = i4), Ca2(t6, L2, r5))), Ic2(e4, t6, t6.pendingProps.children, n7), t6.child;
      case 30:
        return t6.stateNode === null && (t6.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), r5 = t6.pendingProps, r5.name != null && r5.name !== `auto` ? t6.flags |= e4 === null ? 18882560 : 18874368 : F2 && oa2(t6), e4 !== null && e4.memoizedProps.name !== r5.name ? t6.flags |= 4194816 : Kc2(e4, t6), Ic2(e4, t6, r5.children, n7), t6.child;
      case 29:
        throw t6.pendingProps;
    }
    throw Error(a3(156, t6.tag));
  }
  function hl(e4) {
    e4.flags |= 4;
  }
  function gl2(e4, t6, n7, r5, i4) {
    var a4;
    if ((a4 = !!(e4.mode & 32)) && (a4 = n7 === null ? Jm(t6, r5) : Jm(t6, r5) && (r5.src !== n7.src || r5.srcSet !== n7.srcSet)), a4) {
      if (e4.flags |= 16777216, (i4 & 335544128) === i4) {
        if (e4.stateNode.complete) e4.flags |= 8192;
        else if (Ud()) e4.flags |= 8192;
        else throw ao2 = to2, $a2;
      }
    } else e4.flags &= -16777217;
  }
  function _l2(e4, t6) {
    if (t6.type !== `stylesheet` || t6.state.loading & 4) e4.flags &= -16777217;
    else if (e4.flags |= 16777216, !Ym(t6)) {
      if (Ud()) e4.flags |= 8192;
      else throw ao2 = to2, $a2;
    }
  }
  function vl2(e4, t6) {
    t6 !== null && (e4.flags |= 4), e4.flags & 16384 && (t6 = e4.tag === 22 ? 536870912 : St2(), e4.lanes |= t6, dd |= t6);
  }
  function yl2(e4, t6) {
    if (!F2) switch (e4.tailMode) {
      case `visible`:
        break;
      case `collapsed`:
        for (var n7 = e4.tail, r5 = null; n7 !== null; ) n7.alternate !== null && (r5 = n7), n7 = n7.sibling;
        r5 === null ? t6 || e4.tail === null ? e4.tail = null : e4.tail.sibling = null : r5.sibling = null;
        break;
      default:
        for (t6 = e4.tail, n7 = null; t6 !== null; ) t6.alternate !== null && (n7 = t6), t6 = t6.sibling;
        n7 === null ? e4.tail = null : n7.sibling = null;
    }
  }
  function H2(e4) {
    var t6 = e4.alternate !== null && e4.alternate.child === e4.child, n7 = 0, r5 = 0;
    if (t6) for (var i4 = e4.child; i4 !== null; ) n7 |= i4.lanes | i4.childLanes, r5 |= i4.subtreeFlags & 1206910976, r5 |= i4.flags & 1206910976, i4.return = e4, i4 = i4.sibling;
    else for (i4 = e4.child; i4 !== null; ) n7 |= i4.lanes | i4.childLanes, r5 |= i4.subtreeFlags, r5 |= i4.flags, i4.return = e4, i4 = i4.sibling;
    return e4.subtreeFlags |= r5, e4.childLanes = n7, t6;
  }
  function bl(e4, t6, n7) {
    var r5 = t6.pendingProps;
    switch (sa2(t6), t6.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return H2(t6), null;
      case 1:
        return H2(t6), null;
      case 3:
        return n7 = t6.stateNode, r5 = null, e4 !== null && (r5 = e4.memoizedState.cache), t6.memoizedState.cache !== r5 && (t6.flags |= 2048), wa2(L2), Le2(), n7.pendingContext && (n7.context = n7.pendingContext, n7.pendingContext = null), (e4 === null || e4.child === null) && (ga2(t6) ? hl(t6) : e4 === null || e4.memoizedState.isDehydrated && !(t6.flags & 256) || (t6.flags |= 1024, va2())), H2(t6), null;
      case 26:
        var i4 = t6.type, o3 = t6.memoizedState;
        return e4 === null ? (hl(t6), o3 === null ? (H2(t6), gl2(t6, i4, null, r5, n7)) : (H2(t6), _l2(t6, o3))) : o3 ? o3 === e4.memoizedState ? (H2(t6), t6.flags &= -16777217) : (hl(t6), H2(t6), _l2(t6, o3)) : (e4 = e4.memoizedProps, e4 !== r5 && hl(t6), H2(t6), gl2(t6, i4, e4, r5, n7)), null;
      case 27:
        if (ze2(t6), n7 = Pe2.current, i4 = t6.type, e4 !== null && t6.stateNode != null) e4.memoizedProps !== r5 && hl(t6);
        else {
          if (!r5) {
            if (t6.stateNode === null) throw Error(a3(166));
            return H2(t6), t6.subtreeFlags &= -33554433, null;
          }
          e4 = Me2.current, ga2(t6) ? ma2(t6, e4) : (e4 = hm(i4, r5, n7), t6.stateNode = e4, hl(t6));
        }
        return H2(t6), t6.subtreeFlags &= -33554433, null;
      case 5:
        if (ze2(t6), i4 = t6.type, e4 !== null && t6.stateNode != null) e4.memoizedProps !== r5 && hl(t6);
        else {
          if (!r5) {
            if (t6.stateNode === null) throw Error(a3(166));
            return H2(t6), t6.subtreeFlags &= -33554433, null;
          }
          if (o3 = Me2.current, ga2(t6)) ma2(t6, o3);
          else {
            var s2 = lp(Pe2.current);
            switch (o3) {
              case 1:
                o3 = s2.createElementNS(`http://www.w3.org/2000/svg`, i4);
                break;
              case 2:
                o3 = s2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                break;
              default:
                switch (i4) {
                  case `svg`:
                    o3 = s2.createElementNS(`http://www.w3.org/2000/svg`, i4);
                    break;
                  case `math`:
                    o3 = s2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                    break;
                  case `script`:
                    o3 = s2.createElement(`div`), o3.innerHTML = `<script><\/script>`, o3 = o3.removeChild(o3.firstChild);
                    break;
                  case `select`:
                    o3 = typeof r5.is == `string` ? s2.createElement(`select`, {
                      is: r5.is
                    }) : s2.createElement(`select`), r5.multiple ? o3.multiple = true : r5.size && (o3.size = r5.size);
                    break;
                  default:
                    o3 = typeof r5.is == `string` ? s2.createElement(i4, {
                      is: r5.is
                    }) : s2.createElement(i4);
                }
            }
            o3[Pt2] = t6, o3[Ft2] = r5;
            a: for (s2 = t6.child; s2 !== null; ) {
              if (s2.tag === 5 || s2.tag === 6) o3.appendChild(s2.stateNode);
              else if (s2.tag !== 4 && s2.tag !== 27 && s2.child !== null) {
                s2.child.return = s2, s2 = s2.child;
                continue;
              }
              if (s2 === t6) break a;
              for (; s2.sibling === null; ) {
                if (s2.return === null || s2.return === t6) break a;
                s2 = s2.return;
              }
              s2.sibling.return = s2.return, s2 = s2.sibling;
            }
            t6.stateNode = o3;
            a: switch (np(o3, i4, r5), i4) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r5 = !!r5.autoFocus;
                break a;
              case `img`:
                r5 = true;
                break a;
              default:
                r5 = false;
            }
            r5 && hl(t6);
          }
        }
        return H2(t6), t6.subtreeFlags &= -33554433, gl2(t6, t6.type, e4 === null ? null : e4.memoizedProps, t6.pendingProps, n7), null;
      case 6:
        if (e4 && t6.stateNode != null) e4.memoizedProps !== r5 && hl(t6);
        else {
          if (typeof r5 != `string` && t6.stateNode === null) throw Error(a3(166));
          if (e4 = Pe2.current, ga2(t6)) {
            if (e4 = t6.stateNode, n7 = t6.memoizedProps, r5 = null, i4 = la2, i4 !== null) switch (i4.tag) {
              case 27:
              case 5:
                r5 = i4.memoizedProps;
            }
            e4[Pt2] = t6, e4 = !!(e4.nodeValue === n7 || r5 !== null && true === r5.suppressHydrationWarning || ep(e4.nodeValue, n7)), e4 || pa(t6, true);
          } else e4 = lp(e4).createTextNode(r5), e4[Pt2] = t6, t6.stateNode = e4;
        }
        return H2(t6), null;
      case 31:
        if (n7 = t6.memoizedState, e4 === null || e4.memoizedState !== null) {
          if (r5 = ga2(t6), n7 !== null) {
            if (e4 === null) {
              if (!r5) throw Error(a3(318));
              if (e4 = t6.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(a3(557));
              e4[Pt2] = t6;
            } else _a(), !(t6.flags & 128) && (t6.memoizedState = null), t6.flags |= 4;
            H2(t6), e4 = false;
          } else n7 = va2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = n7), e4 = true;
          if (!e4) return t6.flags & 256 ? (Bo2(t6), t6) : (Bo2(t6), null);
          if (t6.flags & 128) throw Error(a3(558));
        }
        return H2(t6), null;
      case 13:
        if (r5 = t6.memoizedState, e4 === null || e4.memoizedState !== null && e4.memoizedState.dehydrated !== null) {
          if (i4 = ga2(t6), r5 !== null && r5.dehydrated !== null) {
            if (e4 === null) {
              if (!i4) throw Error(a3(318));
              if (i4 = t6.memoizedState, i4 = i4 === null ? null : i4.dehydrated, !i4) throw Error(a3(317));
              i4[Pt2] = t6;
            } else _a(), !(t6.flags & 128) && (t6.memoizedState = null), t6.flags |= 4;
            H2(t6), i4 = false;
          } else i4 = va2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = i4), i4 = true;
          if (!i4) return t6.flags & 256 ? (Bo2(t6), t6) : (Bo2(t6), null);
        }
        return Bo2(t6), t6.flags & 128 ? (t6.lanes = n7, t6) : (n7 = r5 !== null, e4 = e4 !== null && e4.memoizedState !== null, n7 && (r5 = t6.child, i4 = null, r5.alternate !== null && r5.alternate.memoizedState !== null && r5.alternate.memoizedState.cachePool !== null && (i4 = r5.alternate.memoizedState.cachePool.pool), o3 = null, r5.memoizedState !== null && r5.memoizedState.cachePool !== null && (o3 = r5.memoizedState.cachePool.pool), o3 !== i4 && (r5.flags |= 2048)), n7 !== e4 && n7 && (t6.child.flags |= 8192), vl2(t6, t6.updateQueue), H2(t6), null);
      case 4:
        return Le2(), e4 === null && Wf(t6.stateNode.containerInfo), t6.flags |= 67108864, H2(t6), null;
      case 10:
        return wa2(t6.type), H2(t6), null;
      case 19:
        if (Uo2(t6), r5 = t6.memoizedState, r5 === null) return H2(t6), null;
        if (i4 = !!(t6.flags & 128), o3 = r5.rendering, o3 === null) {
          if (i4) yl2(r5, false);
          else {
            if (od !== 0 || e4 !== null && e4.flags & 128) for (e4 = t6.child; e4 !== null; ) {
              if (o3 = Wo2(e4), o3 !== null) {
                for (t6.flags |= 128, yl2(r5, false), e4 = o3.updateQueue, t6.updateQueue = e4, vl2(t6, e4), t6.subtreeFlags = 0, e4 = n7, n7 = t6.child; n7 !== null; ) Gi2(n7, e4), n7 = n7.sibling;
                return Ho2(t6, Vo2.current & 1 | 2), F2 && aa2(t6, r5.treeForkCount), t6.child;
              }
              e4 = e4.sibling;
            }
            r5.tail !== null && Qe2() > _d && (t6.flags |= 128, i4 = true, yl2(r5, false), t6.lanes = 4194304);
          }
        } else {
          if (!i4) {
            if (e4 = Wo2(o3), e4 !== null) {
              if (t6.flags |= 128, i4 = true, e4 = e4.updateQueue, t6.updateQueue = e4, vl2(t6, e4), yl2(r5, true), r5.tail === null && r5.tailMode !== `collapsed` && r5.tailMode !== `visible` && !o3.alternate && !F2) return H2(t6), null;
            } else 2 * Qe2() - r5.renderingStartTime > _d && n7 !== 536870912 && (t6.flags |= 128, i4 = true, yl2(r5, false), t6.lanes = 4194304);
          }
          r5.isBackwards ? (o3.sibling = t6.child, t6.child = o3) : (e4 = r5.last, e4 === null ? t6.child = o3 : e4.sibling = o3, r5.last = o3);
        }
        if (r5.tail !== null) {
          e4 = r5.tail;
          a: {
            for (n7 = e4; n7 !== null; ) {
              if (n7.alternate !== null) {
                n7 = false;
                break a;
              }
              n7 = n7.sibling;
            }
            n7 = true;
          }
          return r5.rendering = e4, r5.tail = e4.sibling, r5.renderingStartTime = Qe2(), e4.sibling = null, o3 = Vo2.current, o3 = i4 ? o3 & 1 | 2 : o3 & 1, r5.tailMode === `visible` || r5.tailMode === `collapsed` || !n7 || F2 ? Ho2(t6, o3) : (n7 = o3, E2(Po, t6), E2(Vo2, n7), Fo === null && (Fo = t6)), F2 && aa2(t6, r5.treeForkCount), e4;
        }
        return H2(t6), null;
      case 22:
      case 23:
        return Bo2(t6), No(), r5 = t6.memoizedState !== null, e4 === null ? r5 && (t6.flags |= 8192) : e4.memoizedState !== null !== r5 && (t6.flags |= 8192), r5 ? n7 & 536870912 && !(t6.flags & 128) && (H2(t6), t6.subtreeFlags & 6 && (t6.flags |= 8192)) : H2(t6), n7 = t6.updateQueue, n7 !== null && vl2(t6, n7.retryQueue), n7 = null, e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n7 = e4.memoizedState.cachePool.pool), r5 = null, t6.memoizedState !== null && t6.memoizedState.cachePool !== null && (r5 = t6.memoizedState.cachePool.pool), r5 !== n7 && (t6.flags |= 2048), e4 !== null && je2(Ja), null;
      case 24:
        return n7 = null, e4 !== null && (n7 = e4.memoizedState.cache), t6.memoizedState.cache !== n7 && (t6.flags |= 2048), wa2(L2), H2(t6), null;
      case 25:
        return null;
      case 30:
        return t6.flags |= 33554432, H2(t6), null;
    }
    throw Error(a3(156, t6.tag));
  }
  function xl2(e4, t6) {
    switch (sa2(t6), t6.tag) {
      case 1:
        return e4 = t6.flags, e4 & 65536 ? (t6.flags = e4 & -65537 | 128, t6) : null;
      case 3:
        return wa2(L2), Le2(), e4 = t6.flags, e4 & 65536 && !(e4 & 128) ? (t6.flags = e4 & -65537 | 128, t6) : null;
      case 26:
      case 27:
      case 5:
        return ze2(t6), null;
      case 31:
        if (t6.memoizedState !== null) {
          if (Bo2(t6), t6.alternate === null) throw Error(a3(340));
          _a();
        }
        return e4 = t6.flags, e4 & 65536 ? (t6.flags = e4 & -65537 | 128, t6) : null;
      case 13:
        if (Bo2(t6), e4 = t6.memoizedState, e4 !== null && e4.dehydrated !== null) {
          if (t6.alternate === null) throw Error(a3(340));
          _a();
        }
        return e4 = t6.flags, e4 & 65536 ? (t6.flags = e4 & -65537 | 128, t6) : null;
      case 19:
        return Uo2(t6), e4 = t6.flags, e4 & 65536 ? (t6.flags = e4 & -65537 | 128, e4 = t6.memoizedState, e4 !== null && (e4.rendering = null, e4.tail = null), t6.flags |= 4, t6) : null;
      case 4:
        return Le2(), null;
      case 10:
        return wa2(t6.type), null;
      case 22:
      case 23:
        return Bo2(t6), No(), e4 !== null && je2(Ja), e4 = t6.flags, e4 & 65536 ? (t6.flags = e4 & -65537 | 128, t6) : null;
      case 24:
        return wa2(L2), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sl2(e4, t6) {
    switch (sa2(t6), t6.tag) {
      case 3:
        wa2(L2), Le2();
        break;
      case 26:
      case 27:
      case 5:
        ze2(t6);
        break;
      case 4:
        Le2();
        break;
      case 31:
        t6.memoizedState !== null && Bo2(t6);
        break;
      case 13:
        Bo2(t6);
        break;
      case 19:
        Uo2(t6);
        break;
      case 10:
        wa2(t6.type);
        break;
      case 22:
      case 23:
        Bo2(t6), No(), e4 !== null && je2(Ja);
        break;
      case 24:
        wa2(L2);
    }
  }
  function Cl2(e4, t6) {
    try {
      var n7 = t6.updateQueue, r5 = n7 === null ? null : n7.lastEffect;
      if (r5 !== null) {
        var i4 = r5.next;
        n7 = i4;
        do {
          if ((n7.tag & e4) === e4) {
            r5 = void 0;
            var a4 = n7.create, o3 = n7.inst;
            r5 = a4(), o3.destroy = r5;
          }
          n7 = n7.next;
        } while (n7 !== i4);
      }
    } catch (e5) {
      Z(t6, t6.return, e5);
    }
  }
  function wl2(e4, t6, n7) {
    try {
      var r5 = t6.updateQueue, i4 = r5 === null ? null : r5.lastEffect;
      if (i4 !== null) {
        var a4 = i4.next;
        r5 = a4;
        do {
          if ((r5.tag & e4) === e4) {
            var o3 = r5.inst, s2 = o3.destroy;
            if (s2 !== void 0) {
              o3.destroy = void 0, i4 = t6;
              var c2 = n7, l2 = s2;
              try {
                l2();
              } catch (e5) {
                Z(i4, c2, e5);
              }
            }
          }
          r5 = r5.next;
        } while (r5 !== a4);
      }
    } catch (e5) {
      Z(t6, t6.return, e5);
    }
  }
  function Tl2(e4) {
    var t6 = e4.updateQueue;
    if (t6 !== null) {
      var n7 = e4.stateNode;
      try {
        Oo2(t6, n7);
      } catch (t7) {
        Z(e4, e4.return, t7);
      }
    }
  }
  function El2(e4, t6, n7) {
    n7.props = wc2(e4.type, e4.memoizedProps), n7.state = e4.memoizedState;
    try {
      n7.componentWillUnmount();
    } catch (n8) {
      Z(e4, t6, n8);
    }
  }
  function Dl2(e4, t6) {
    try {
      var n7 = e4.ref;
      if (n7 !== null) {
        switch (e4.tag) {
          case 26:
          case 27:
          case 5:
            var r5 = e4.stateNode;
            break;
          case 30:
            var i4 = e4.stateNode, a4 = k2(e4.memoizedProps, i4);
            (i4.ref === null || i4.ref.name !== a4) && (i4.ref = Pp(a4)), r5 = i4.ref;
            break;
          case 7:
            if (e4.stateNode === null) {
              var o3 = new Fp(e4);
              p(e4.child, false, Qp, o3, void 0, void 0), e4.stateNode = o3;
            }
            r5 = e4.stateNode;
            break;
          default:
            r5 = e4.stateNode;
        }
        typeof n7 == `function` ? e4.refCleanup = n7(r5) : n7.current = r5;
      }
    } catch (n8) {
      Z(e4, t6, n8);
    }
  }
  function Ol(e4, t6) {
    var n7 = e4.ref, r5 = e4.refCleanup;
    if (n7 !== null) {
      if (typeof r5 == `function`) try {
        r5();
      } catch (n8) {
        Z(e4, t6, n8);
      } finally {
        e4.refCleanup = null, e4 = e4.alternate, e4 != null && (e4.refCleanup = null);
      }
      else if (typeof n7 == `function`) try {
        n7(null);
      } catch (n8) {
        Z(e4, t6, n8);
      }
      else n7.current = null;
    }
  }
  function kl(e4, t6) {
    if ((e4.tag === 5 || e4.tag === 27 || e4.tag === 6) && e4.alternate === null && t6 !== null) for (var n7 = 0; n7 < t6.length; n7++) em(e4.stateNode, t6[n7]);
  }
  function Al(e4) {
    for (var t6 = e4.return; t6 !== null && (Nl2(t6) && em(e4.stateNode, t6.stateNode), !Ml2(t6)); ) t6 = t6.return;
  }
  function jl2(e4) {
    for (var t6 = e4.return; t6 !== null && (Nl2(t6) && tm(e4.stateNode, t6.stateNode), !Ml2(t6)); ) t6 = t6.return;
  }
  function Ml2(e4) {
    return e4.tag === 5 || e4.tag === 3 || e4.tag === 27;
  }
  function Nl2(e4) {
    return e4 && e4.tag === 7 && e4.stateNode !== null;
  }
  function Pl2(e4) {
    var t6 = e4.type, n7 = e4.memoizedProps, r5 = e4.stateNode;
    try {
      a: switch (t6) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          n7.autoFocus && r5.focus();
          break a;
        case `img`:
          n7.src ? r5.src = n7.src : n7.srcSet && (r5.srcset = n7.srcSet);
      }
    } catch (t7) {
      Z(e4, e4.return, t7);
    }
  }
  function Fl2(e4, t6, n7) {
    try {
      var r5 = e4.stateNode;
      ip(r5, e4.type, n7, t6), r5[Ft2] = t6;
    } catch (t7) {
      Z(e4, e4.return, t7);
    }
  }
  function Il2(e4) {
    return e4.tag === 5 || e4.tag === 3 || e4.tag === 26 || e4.tag === 27 && Sp(e4.type) || e4.tag === 4;
  }
  function Ll2(e4) {
    a: for (; ; ) {
      for (; e4.sibling === null; ) {
        if (e4.return === null || Il2(e4.return)) return null;
        e4 = e4.return;
      }
      for (e4.sibling.return = e4.return, e4 = e4.sibling; e4.tag !== 5 && e4.tag !== 6 && e4.tag !== 18; ) {
        if (e4.tag === 27 && Sp(e4.type) || e4.flags & 2 || e4.child === null || e4.tag === 4) continue a;
        e4.child.return = e4, e4 = e4.child;
      }
      if (!(e4.flags & 2)) return e4.stateNode;
    }
  }
  function Rl2(e4, t6, n7, r5) {
    var i4 = e4.tag;
    if (i4 === 5 || i4 === 6) i4 = e4.stateNode, t6 ? (n7.nodeType === 9 ? n7.body : n7.nodeName === `HTML` ? n7.ownerDocument.body : n7).insertBefore(i4, t6) : (t6 = n7.nodeType === 9 ? n7.body : n7.nodeName === `HTML` ? n7.ownerDocument.body : n7, t6.appendChild(i4), n7 = n7._reactRootContainer, n7 != null || t6.onclick !== null || (t6.onclick = An2)), kl(e4, r5), D2 = true;
    else if (i4 !== 4 && (i4 === 27 && (kl(e4, r5), r5 = null, Sp(e4.type) && (n7 = e4.stateNode, t6 = null)), e4 = e4.child, e4 !== null)) for (Rl2(e4, t6, n7, r5), e4 = e4.sibling; e4 !== null; ) Rl2(e4, t6, n7, r5), e4 = e4.sibling;
  }
  function zl2(e4, t6, n7, r5) {
    var i4 = e4.tag;
    if (i4 === 5 || i4 === 6) i4 = e4.stateNode, t6 ? n7.insertBefore(i4, t6) : n7.appendChild(i4), kl(e4, r5), D2 = true;
    else if (i4 !== 4 && (i4 === 27 && (kl(e4, r5), r5 = null, Sp(e4.type) && (n7 = e4.stateNode)), e4 = e4.child, e4 !== null)) for (zl2(e4, t6, n7, r5), e4 = e4.sibling; e4 !== null; ) zl2(e4, t6, n7, r5), e4 = e4.sibling;
  }
  function Bl2(e4) {
    var t6 = e4.stateNode, n7 = e4.memoizedProps;
    try {
      for (var r5 = e4.type, i4 = t6.attributes; i4.length; ) t6.removeAttributeNode(i4[0]);
      np(t6, r5, n7), t6[Pt2] = e4, t6[Ft2] = n7;
    } catch (t7) {
      Z(e4, e4.return, t7);
    }
  }
  var Vl2 = false, Hl = null;
  function Ul(e4) {
    (e4.tag === 30 || e4.subtreeFlags & 33554432) && (Vl2 = true);
  }
  var Wl = null;
  function Gl2() {
    var e4 = Wl;
    return Wl = null, e4;
  }
  var Kl = 0;
  function ql(e4, t6, n7, r5, i4) {
    return Kl = 0, Jl(e4.child, t6, n7, r5, i4);
  }
  function Jl(e4, t6, n7, r5, i4) {
    for (var a4 = false; e4 !== null; ) {
      if (e4.tag === 5) {
        var o3 = e4.stateNode;
        if (r5 !== null) {
          var s2 = Op(o3);
          r5.push(s2), s2.view && (a4 = true);
        } else a4 || Op(o3).view && (a4 = true);
        Vl2 = true, Tp(o3, Kl === 0 ? t6 : t6 + `_` + Kl, n7), Kl++;
      } else (e4.tag !== 22 || e4.memoizedState === null) && (e4.tag === 30 && i4 || Jl(e4.child, t6, n7, r5, i4) && (a4 = true));
      e4 = e4.sibling;
    }
    return a4;
  }
  function Yl(e4, t6) {
    for (; e4 !== null; ) e4.tag === 5 ? Ep(e4.stateNode, e4.memoizedProps) : (e4.tag !== 22 || e4.memoizedState === null) && (e4.tag === 30 && t6 || Yl(e4.child, t6)), e4 = e4.sibling;
  }
  function Xl(e4) {
    if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
      if ((e4.tag !== 22 || e4.memoizedState === null) && (Xl(e4), e4.tag === 30 && e4.flags & 18874368 && e4.stateNode.paired)) {
        var t6 = e4.memoizedProps;
        if (t6.name == null || t6.name === `auto`) throw Error(a3(544));
        var n7 = t6.name;
        t6 = ki2(t6.default, t6.share), t6 !== `none` && (ql(e4, n7, t6, null, false) || Yl(e4.child, false));
      }
      e4 = e4.sibling;
    }
  }
  function Zl(e4, t6) {
    if (e4.tag === 30) {
      var n7 = e4.stateNode, r5 = e4.memoizedProps, i4 = k2(r5, n7), a4 = ki2(r5.default, n7.paired ? r5.share : r5.enter);
      a4 === `none` ? Xl(e4) : ql(e4, i4, a4, null, false) ? (Xl(e4), n7.paired || t6 || Nd(e4, r5.onEnter)) : Yl(e4.child, false);
    } else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) Zl(e4, t6), e4 = e4.sibling;
    else Xl(e4);
  }
  function Ql(e4) {
    if (Hl !== null && Hl.size !== 0) {
      var t6 = Hl;
      if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
        if (e4.tag !== 22 || e4.memoizedState === null) {
          if (e4.tag === 30 && e4.flags & 18874368) {
            var n7 = e4.memoizedProps, r5 = n7.name;
            if (r5 != null && r5 !== `auto`) {
              var i4 = t6.get(r5);
              if (i4 !== void 0) {
                var a4 = ki2(n7.default, n7.share);
                if (a4 !== `none` && (ql(e4, r5, a4, null, false) ? (a4 = e4.stateNode, i4.paired = a4, a4.paired = i4, Nd(e4, n7.onShare)) : Yl(e4.child, false)), t6.delete(r5), t6.size === 0) break;
              }
            }
          }
          Ql(e4);
        }
        e4 = e4.sibling;
      }
    }
  }
  function $l(e4) {
    if (e4.tag === 30) {
      var t6 = e4.memoizedProps, n7 = k2(t6, e4.stateNode), r5 = Hl === null ? void 0 : Hl.get(n7), i4 = ki2(t6.default, r5 === void 0 ? t6.exit : t6.share);
      i4 !== `none` && (ql(e4, n7, i4, null, false) ? r5 === void 0 ? Nd(e4, t6.onExit) : (i4 = e4.stateNode, r5.paired = i4, i4.paired = r5, Hl.delete(n7), Nd(e4, t6.onShare)) : Yl(e4.child, false)), Hl !== null && Ql(e4);
    } else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) $l(e4), e4 = e4.sibling;
    else Hl !== null && Ql(e4);
  }
  function eu(e4) {
    for (e4 = e4.child; e4 !== null; ) {
      if (e4.tag === 30) {
        var t6 = e4.memoizedProps, n7 = k2(t6, e4.stateNode);
        t6 = ki2(t6.default, t6.update), e4.flags &= -5, t6 !== `none` && ql(e4, n7, t6, e4.memoizedState = [], false);
      } else e4.subtreeFlags & 33554432 && eu(e4);
      e4 = e4.sibling;
    }
  }
  function tu(e4) {
    if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
      if (e4.tag !== 22 || e4.memoizedState === null) {
        if (e4.tag === 30 && e4.flags & 18874368) {
          var t6 = e4.stateNode;
          t6.paired !== null && (t6.paired = null, Yl(e4.child, false));
        }
        tu(e4);
      }
      e4 = e4.sibling;
    }
  }
  function nu(e4) {
    if (e4.tag === 30) e4.stateNode.paired = null, Yl(e4.child, false), tu(e4);
    else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) nu(e4), e4 = e4.sibling;
    else tu(e4);
  }
  function ru(e4) {
    for (e4 = e4.child; e4 !== null; ) e4.tag === 30 ? Yl(e4.child, false) : e4.subtreeFlags & 33554432 && ru(e4), e4 = e4.sibling;
  }
  function iu(e4, t6, n7, r5, i4, a4, o3) {
    for (var s2 = false; t6 !== null; ) {
      if (t6.tag === 5) {
        var c2 = t6.stateNode;
        if (a4 !== null && Kl < a4.length) {
          var l2 = a4[Kl], u2 = Op(c2);
          (l2.view || u2.view) && (s2 = true);
          var d2;
          if (d2 = !(e4.flags & 4)) {
            if (u2.clip) d2 = true;
            else {
              d2 = l2.rect;
              var f2 = u2.rect;
              d2 = d2.y !== f2.y || d2.x !== f2.x || d2.height !== f2.height || d2.width !== f2.width;
            }
          }
          d2 && (e4.flags |= 4), u2.abs ? u2 = !l2.abs : (l2 = l2.rect, u2 = u2.rect, u2 = l2.height !== u2.height || l2.width !== u2.width), u2 && (e4.flags |= 32);
        } else e4.flags |= 32;
        e4.flags & 4 && Tp(c2, Kl === 0 ? n7 : n7 + `_` + Kl, i4), s2 && e4.flags & 4 || (Wl === null && (Wl = []), Wl.push(c2, Kl === 0 ? r5 : r5 + `_` + Kl, t6.memoizedProps)), Kl++;
      } else (t6.tag !== 22 || t6.memoizedState === null) && (t6.tag === 30 && o3 ? e4.flags |= t6.flags & 32 : iu(e4, t6.child, n7, r5, i4, a4, o3) && (s2 = true));
      t6 = t6.sibling;
    }
    return s2;
  }
  function au(e4, t6) {
    for (e4 = e4.child; e4 !== null; ) {
      if (e4.tag === 30) {
        var n7 = e4.memoizedProps, r5 = e4.stateNode, i4 = k2(n7, r5), a4 = ki2(n7.default, n7.update);
        if (t6) {
          r5 = r5.clones;
          var o3 = r5 === null ? null : r5.map(kp);
        } else o3 = e4.memoizedState, e4.memoizedState = null;
        r5 = e4;
        var s2 = e4.child;
        Kl = 0, i4 = iu(r5, s2, i4, i4, a4, o3, false), e4.flags & 4 && i4 && (t6 || Nd(e4, n7.onUpdate));
      } else e4.subtreeFlags & 33554432 && au(e4, t6);
      e4 = e4.sibling;
    }
  }
  var ou = false, U = false, su = false, cu = false, lu = typeof WeakSet == `function` ? WeakSet : Set, uu = null, du = false, fu = false, pu = false, mu = false;
  function hu(e4, t6, n7) {
    if (e4 = e4.containerInfo, sp = gh, e4 = ai2(e4), oi2(e4)) {
      if (`selectionStart` in e4) var r5 = {
        start: e4.selectionStart,
        end: e4.selectionEnd
      };
      else a: {
        r5 = (r5 = e4.ownerDocument) && r5.defaultView || window;
        var i4 = r5.getSelection && r5.getSelection();
        if (i4 && i4.rangeCount !== 0) {
          r5 = i4.anchorNode;
          var a4 = i4.anchorOffset, o3 = i4.focusNode;
          i4 = i4.focusOffset;
          try {
            r5.nodeType, o3.nodeType;
          } catch {
            r5 = null;
            break a;
          }
          var s2 = 0, c2 = -1, l2 = -1, u2 = 0, d2 = 0, f2 = e4, p2 = null;
          b: for (; ; ) {
            for (var m3; f2 !== r5 || a4 !== 0 && f2.nodeType !== 3 || (c2 = s2 + a4), f2 !== o3 || i4 !== 0 && f2.nodeType !== 3 || (l2 = s2 + i4), f2.nodeType === 3 && (s2 += f2.nodeValue.length), (m3 = f2.firstChild) !== null; ) p2 = f2, f2 = m3;
            for (; ; ) {
              if (f2 === e4) break b;
              if (p2 === r5 && ++u2 === a4 && (c2 = s2), p2 === o3 && ++d2 === i4 && (l2 = s2), (m3 = f2.nextSibling) !== null) break;
              f2 = p2, p2 = f2.parentNode;
            }
            f2 = m3;
          }
          r5 = c2 === -1 || l2 === -1 ? null : {
            start: c2,
            end: l2
          };
        } else r5 = null;
      }
      r5 ||= {
        start: 0,
        end: 0
      };
    } else r5 = null;
    for (cp = {
      focusedElem: e4,
      selectionRange: r5
    }, gh = false, n7 = (n7 & 335544064) === n7, uu = t6, t6 = n7 ? 9270 : 1024; uu !== null; ) {
      if (e4 = uu, n7 && (r5 = e4.deletions, r5 !== null)) for (a4 = 0; a4 < r5.length; a4++) n7 && $l(r5[a4]);
      if (e4.alternate === null && e4.flags & 2) n7 && Ul(e4), gu(n7);
      else {
        if (e4.tag === 22) {
          if (r5 = e4.alternate, e4.memoizedState !== null) {
            r5 !== null && r5.memoizedState === null && n7 && $l(r5), gu(n7);
            continue;
          }
          if (r5 !== null && r5.memoizedState !== null) {
            n7 && Ul(e4), gu(n7);
            continue;
          }
        }
        r5 = e4.child, (e4.subtreeFlags & t6) !== 0 && r5 !== null ? (r5.return = e4, uu = r5) : (n7 && eu(e4), gu(n7));
      }
    }
    Hl = null;
  }
  function gu(e4) {
    for (; uu !== null; ) {
      var t6 = uu, n7 = e4, r5 = t6.alternate, i4 = t6.flags;
      switch (t6.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i4 & 1024 && r5 !== null) {
            n7 = void 0, i4 = r5.memoizedProps, r5 = r5.memoizedState;
            var o3 = t6.stateNode;
            try {
              var s2 = wc2(t6.type, i4);
              n7 = o3.getSnapshotBeforeUpdate(s2, r5), o3.__reactInternalSnapshotBeforeUpdate = n7;
            } catch (e5) {
              Z(t6, t6.return, e5);
            }
          }
          break;
        case 3:
          if (i4 & 1024) {
            if (r5 = t6.stateNode.containerInfo, n7 = r5.nodeType, n7 === 9) nm(r5);
            else if (n7 === 1) switch (r5.nodeName) {
              case `HEAD`:
              case `HTML`:
              case `BODY`:
                nm(r5);
                break;
              default:
                r5.textContent = ``;
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n7 && r5 !== null && (n7 = k2(r5.memoizedProps, r5.stateNode), i4 = t6.memoizedProps, i4 = ki2(i4.default, i4.update), i4 !== `none` && ql(r5, n7, i4, r5.memoizedState = [], true));
          break;
        default:
          if (i4 & 1024) throw Error(a3(163));
      }
      if (r5 = t6.sibling, r5 !== null) {
        r5.return = t6.return, uu = r5;
        break;
      }
      uu = t6.return;
    }
  }
  function _u(e4, t6, n7) {
    var r5 = n7.flags;
    switch (n7.tag) {
      case 0:
      case 11:
      case 15:
        Iu(e4, n7), r5 & 4 && Cl2(5, n7);
        break;
      case 1:
        if (Iu(e4, n7), r5 & 4) {
          if (e4 = n7.stateNode, t6 === null) try {
            e4.componentDidMount();
          } catch (e5) {
            Z(n7, n7.return, e5);
          }
          else {
            var i4 = wc2(n7.type, t6.memoizedProps);
            t6 = t6.memoizedState;
            try {
              e4.componentDidUpdate(i4, t6, e4.__reactInternalSnapshotBeforeUpdate);
            } catch (e5) {
              Z(n7, n7.return, e5);
            }
          }
        }
        r5 & 64 && Tl2(n7), r5 & 512 && Dl2(n7, n7.return);
        break;
      case 3:
        if (Iu(e4, n7), r5 & 64 && (e4 = n7.updateQueue, e4 !== null)) {
          if (t6 = null, n7.child !== null) switch (n7.child.tag) {
            case 27:
            case 5:
              t6 = n7.child.stateNode;
              break;
            case 1:
              t6 = n7.child.stateNode;
          }
          try {
            Oo2(e4, t6);
          } catch (e5) {
            Z(n7, n7.return, e5);
          }
        }
        break;
      case 27:
        t6 === null && r5 & 4 && Bl2(n7);
      case 26:
      case 5:
        Iu(e4, n7), t6 === null && r5 & 4 && Pl2(n7), r5 & 512 && Dl2(n7, n7.return);
        break;
      case 12:
        Iu(e4, n7);
        break;
      case 31:
        Iu(e4, n7), r5 & 4 && Tu(e4, n7);
        break;
      case 13:
        Iu(e4, n7), r5 & 4 && Eu(e4, n7), r5 & 64 && (e4 = n7.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null && (n7 = _f.bind(null, n7), cm(e4, n7))));
        break;
      case 22:
        if (r5 = n7.memoizedState !== null || ou, !r5) {
          var a4 = t6 !== null && t6.memoizedState !== null || U;
          t6 = ou, i4 = U, ou = r5, (U = a4) && !i4 ? (r5 = 2, n7.subtreeFlags & 8772 && (r5 |= 1), Ru(e4, n7, r5)) : Iu(e4, n7), ou = t6, U = i4;
        }
        break;
      case 30:
        Iu(e4, n7), r5 & 512 && Dl2(n7, n7.return);
        break;
      case 7:
        r5 & 512 && Dl2(n7, n7.return);
      default:
        Iu(e4, n7);
    }
  }
  function vu(e4, t6) {
    for (e4 = e4.child; e4 !== null; ) yu(e4, t6), e4 = e4.sibling;
  }
  function yu(e4, t6) {
    switch (e4.tag) {
      case 5:
      case 26:
        try {
          var n7 = e4.stateNode;
          if (t6) {
            var r5 = n7.style;
            typeof r5.setProperty == `function` ? r5.setProperty(`display`, `none`, `important`) : r5.display = `none`;
          } else {
            var i4 = e4.stateNode, a4 = e4.memoizedProps.style, o3 = a4 != null && a4.hasOwnProperty(`display`) ? a4.display : null;
            i4.style.display = o3 == null || typeof o3 == `boolean` ? `` : (`` + o3).trim();
          }
        } catch (t7) {
          Z(e4, e4.return, t7);
        }
        bu(e4, t6);
        break;
      case 6:
        try {
          e4.stateNode.nodeValue = t6 ? `` : e4.memoizedProps, D2 = true;
        } catch (t7) {
          Z(e4, e4.return, t7);
        }
        break;
      case 18:
        try {
          var s2 = e4.stateNode;
          t6 ? wp(s2, true) : wp(e4.stateNode, false);
        } catch (t7) {
          Z(e4, e4.return, t7);
        }
        break;
      case 22:
      case 23:
        e4.memoizedState === null && vu(e4, t6);
        break;
      default:
        vu(e4, t6);
    }
  }
  function bu(e4, t6) {
    if (e4.subtreeFlags & 67108864) for (e4 = e4.child; e4 !== null; ) {
      a: {
        var n7 = e4, r5 = t6;
        switch (n7.tag) {
          case 4:
            yu(n7, r5);
            break a;
          case 22:
            n7.memoizedState === null && bu(n7, r5);
            break a;
          default:
            bu(n7, r5);
        }
      }
      e4 = e4.sibling;
    }
  }
  function xu(e4) {
    var t6 = e4.alternate;
    t6 !== null && (e4.alternate = null, xu(t6)), e4.child = null, e4.deletions = null, e4.sibling = null, e4.tag === 5 && (t6 = e4.stateNode, t6 !== null && Ut2(t6)), e4.stateNode = null, e4.return = null, e4.dependencies = null, e4.memoizedProps = null, e4.memoizedState = null, e4.pendingProps = null, e4.stateNode = null, e4.updateQueue = null;
  }
  var W = null, Su = false;
  function Cu(e4, t6, n7) {
    for (n7 = n7.child; n7 !== null; ) wu(e4, t6, n7), n7 = n7.sibling;
  }
  function wu(e4, t6, n7) {
    if (ct2 && typeof ct2.onCommitFiberUnmount == `function`) try {
      ct2.onCommitFiberUnmount(st2, n7);
    } catch {
    }
    switch (n7.tag) {
      case 26:
        U || Ol(n7, t6), Cu(e4, t6, n7), n7.memoizedState ? n7.memoizedState.count-- : n7.stateNode && !U && (n7 = n7.stateNode, n7.parentNode.removeChild(n7));
        break;
      case 27:
        U || Ol(n7, t6), jl2(n7);
        var r5 = W, i4 = Su;
        Sp(n7.type) && (W = n7.stateNode, Su = false), Cu(e4, t6, n7), gm(n7.stateNode, n7.type, n7.memoizedProps), W = r5, Su = i4;
        break;
      case 5:
        U || Ol(n7, t6), jl2(n7);
      case 6:
        if (n7.tag === 6 && jl2(n7), r5 = W, i4 = Su, W = null, Cu(e4, t6, n7), W = r5, Su = i4, W !== null) {
          if (Su) try {
            (W.nodeType === 9 ? W.body : W.nodeName === `HTML` ? W.ownerDocument.body : W).removeChild(n7.stateNode), D2 = true;
          } catch (e5) {
            Z(n7, t6, e5);
          }
          else try {
            W.removeChild(n7.stateNode), D2 = true;
          } catch (e5) {
            Z(n7, t6, e5);
          }
        }
        break;
      case 18:
        W !== null && (Su ? (e4 = W, Cp(e4.nodeType === 9 ? e4.body : e4.nodeName === `HTML` ? e4.ownerDocument.body : e4, n7.stateNode), Hh(e4)) : Cp(W, n7.stateNode));
        break;
      case 4:
        r5 = W, i4 = Su, W = n7.stateNode.containerInfo, Su = true, Cu(e4, t6, n7), W = r5, Su = i4;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wl2(2, n7, t6), U || wl2(4, n7, t6), Cu(e4, t6, n7);
        break;
      case 1:
        U || (Ol(n7, t6), r5 = n7.stateNode, typeof r5.componentWillUnmount == `function` && El2(n7, t6, r5)), Cu(e4, t6, n7);
        break;
      case 21:
        Cu(e4, t6, n7);
        break;
      case 22:
        U = (r5 = U) || n7.memoizedState !== null, Cu(e4, t6, n7), U = r5;
        break;
      case 30:
        Ol(n7, t6), Cu(e4, t6, n7);
        break;
      case 7:
        U || Ol(n7, t6), Cu(e4, t6, n7);
        break;
      default:
        Cu(e4, t6, n7);
    }
  }
  function Tu(e4, t6) {
    if (t6.memoizedState === null && (e4 = t6.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null))) {
      e4 = e4.dehydrated;
      try {
        Hh(e4);
      } catch (e5) {
        Z(t6, t6.return, e5);
      }
    }
  }
  function Eu(e4, t6) {
    if (t6.memoizedState === null && (e4 = t6.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null)))) try {
      Hh(e4);
    } catch (e5) {
      Z(t6, t6.return, e5);
    }
  }
  function Du(e4) {
    switch (e4.tag) {
      case 31:
      case 13:
      case 19:
        var t6 = e4.stateNode;
        return t6 === null && (t6 = e4.stateNode = new lu()), t6;
      case 22:
        return e4 = e4.stateNode, t6 = e4._retryCache, t6 === null && (t6 = e4._retryCache = new lu()), t6;
      default:
        throw Error(a3(435, e4.tag));
    }
  }
  function Ou(e4, t6) {
    var n7 = Du(e4);
    t6.forEach(function(t7) {
      if (!n7.has(t7)) {
        n7.add(t7);
        var r5 = vf.bind(null, e4, t7);
        t7.then(r5, r5);
      }
    });
  }
  function ku(e4, t6, n7) {
    var r5 = t6.deletions;
    if (r5 !== null) for (var i4 = 0; i4 < r5.length; i4++) {
      var o3 = r5[i4], s2 = e4, c2 = t6, l2 = c2;
      a: for (; l2 !== null; ) {
        switch (l2.tag) {
          case 27:
            if (Sp(l2.type)) {
              W = l2.stateNode, Su = false;
              break a;
            }
            break;
          case 5:
            W = l2.stateNode, Su = false;
            break a;
          case 3:
          case 4:
            W = l2.stateNode.containerInfo, Su = true;
            break a;
        }
        l2 = l2.return;
      }
      if (W === null) throw Error(a3(160));
      wu(s2, c2, o3), W = null, Su = false, s2 = o3.alternate, s2 !== null && (s2.return = null), o3.return = null;
    }
    if (t6.subtreeFlags & 13886) for (t6 = t6.child; t6 !== null; ) ju(t6, e4, n7), t6 = t6.sibling;
  }
  var Au = null;
  function ju(e4, t6, n7) {
    var r5 = e4.alternate, i4 = e4.flags;
    switch (e4.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (i4 & 4 && (r5 = e4.updateQueue, r5 = r5 === null ? null : r5.events, r5 !== null)) for (var o3 = 0; o3 < r5.length; o3++) {
          var s2 = r5[o3];
          s2.ref.impl = s2.nextImpl;
        }
        ku(t6, e4, n7), Mu(e4), i4 & 4 && (wl2(3, e4, e4.return), Cl2(3, e4), wl2(5, e4, e4.return));
        break;
      case 1:
        ku(t6, e4, n7), Mu(e4), i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), i4 & 64 && ou && (e4 = e4.updateQueue, e4 !== null && (t6 = e4.callbacks, t6 !== null && (n7 = e4.shared.hiddenCallbacks, e4.shared.hiddenCallbacks = n7 === null ? t6 : n7.concat(t6))));
        break;
      case 26:
        if (o3 = Au, ku(t6, e4, n7), Mu(e4), i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), i4 & 4) {
          if (i4 = r5 === null ? null : r5.memoizedState, n7 = e4.memoizedState, r5 === null) {
            if (n7 === null) {
              if (e4.stateNode === null) {
                if (ou) e4.stateNode = fp(e4.type, e4.memoizedProps, t6.containerInfo, e4);
                else {
                  a: {
                    t6 = e4.type, n7 = e4.memoizedProps, i4 = o3.ownerDocument || o3;
                    b: switch (t6) {
                      case `title`:
                        r5 = i4.getElementsByTagName(`title`)[0], (!r5 || r5[Vt2] || r5[Pt2] || r5.namespaceURI === `http://www.w3.org/2000/svg` || r5.hasAttribute(`itemprop`)) && (r5 = i4.createElement(t6), i4.head.insertBefore(r5, i4.querySelector(`head > title`))), np(r5, t6, n7), r5[Pt2] = e4, Jt2(r5), t6 = r5;
                        break a;
                      case `link`:
                        if (o3 = Gm(`link`, `href`, i4).get(t6 + (n7.href || ``))) {
                          for (s2 = 0; s2 < o3.length; s2++) if (r5 = o3[s2], r5.getAttribute(`href`) === (n7.href == null || n7.href === `` ? null : n7.href) && r5.getAttribute(`rel`) === (n7.rel == null ? null : n7.rel) && r5.getAttribute(`title`) === (n7.title == null ? null : n7.title) && r5.getAttribute(`crossorigin`) === (n7.crossOrigin == null ? null : n7.crossOrigin)) {
                            o3.splice(s2, 1);
                            break b;
                          }
                        }
                        r5 = i4.createElement(t6), np(r5, t6, n7), i4.head.appendChild(r5);
                        break;
                      case `meta`:
                        if (o3 = Gm(`meta`, `content`, i4).get(t6 + (n7.content || ``))) {
                          for (s2 = 0; s2 < o3.length; s2++) if (r5 = o3[s2], r5.getAttribute(`content`) === (n7.content == null ? null : `` + n7.content) && r5.getAttribute(`name`) === (n7.name == null ? null : n7.name) && r5.getAttribute(`property`) === (n7.property == null ? null : n7.property) && r5.getAttribute(`http-equiv`) === (n7.httpEquiv == null ? null : n7.httpEquiv) && r5.getAttribute(`charset`) === (n7.charSet == null ? null : n7.charSet)) {
                            o3.splice(s2, 1);
                            break b;
                          }
                        }
                        r5 = i4.createElement(t6), np(r5, t6, n7), i4.head.appendChild(r5);
                        break;
                      default:
                        throw Error(a3(468, t6));
                    }
                    r5[Pt2] = e4, Jt2(r5), t6 = r5;
                  }
                  e4.stateNode = t6;
                }
              } else ou || Km(o3, e4.type, e4.stateNode);
            } else e4.stateNode = Bm(o3, n7, e4.memoizedProps);
          } else i4 === n7 ? n7 === null && e4.stateNode !== null && Fl2(e4, e4.memoizedProps, r5.memoizedProps) : (i4 === null ? (t6 = r5.stateNode, t6 === null || U || t6.parentNode.removeChild(t6)) : i4.count--, n7 === null ? ou || Km(o3, e4.type, e4.stateNode) : Bm(o3, n7, e4.memoizedProps));
        }
        break;
      case 27:
        ku(t6, e4, n7), Mu(e4), i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), r5 !== null && i4 & 4 && Fl2(e4, e4.memoizedProps, r5.memoizedProps);
        break;
      case 5:
        if (o3 = su, su = false, ku(t6, e4, n7), su = o3, Mu(e4), i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), e4.flags & 32) {
          t6 = e4.stateNode;
          try {
            Sn2(t6, ``), D2 = true;
          } catch (t7) {
            Z(e4, e4.return, t7);
          }
        }
        i4 & 4 && e4.stateNode != null && (t6 = e4.memoizedProps, Fl2(e4, t6, r5 === null ? t6 : r5.memoizedProps)), i4 & 1024 && (cu = true);
        break;
      case 6:
        if (ku(t6, e4, n7), Mu(e4), i4 & 4) {
          if (e4.stateNode === null) throw Error(a3(162));
          t6 = e4.memoizedProps, n7 = e4.stateNode;
          try {
            n7.nodeValue = t6, D2 = true;
          } catch (t7) {
            Z(e4, e4.return, t7);
          }
        }
        break;
      case 3:
        if (D2 = false, Wm = null, o3 = Au, Au = bm(t6.containerInfo), ku(t6, e4, n7), Au = o3, Mu(e4), i4 & 4 && r5 !== null && r5.memoizedState.isDehydrated) try {
          Hh(t6.containerInfo);
        } catch (t7) {
          Z(e4, e4.return, t7);
        }
        cu && (cu = false, Nu(e4)), D2 = false;
        break;
      case 4:
        i4 = su, su = ou, r5 = an2(), o3 = Au, Au = bm(e4.stateNode.containerInfo), ku(t6, e4, n7), Mu(e4), Au = o3, D2 && fu && (pu = true), D2 = r5, su = i4;
        break;
      case 12:
        ku(t6, e4, n7), Mu(e4);
        break;
      case 31:
        ku(t6, e4, n7), Mu(e4), i4 & 4 && (t6 = e4.updateQueue, t6 !== null && (e4.updateQueue = null, Ou(e4, t6)));
        break;
      case 13:
        ku(t6, e4, n7), Mu(e4), e4.child.flags & 8192 && e4.memoizedState !== null != (r5 !== null && r5.memoizedState !== null) && (hd = Qe2()), i4 & 4 && (t6 = e4.updateQueue, t6 !== null && (e4.updateQueue = null, Ou(e4, t6)));
        break;
      case 22:
        o3 = e4.memoizedState !== null, s2 = r5 !== null && r5.memoizedState !== null;
        var c2 = ou, l2 = U, u2 = su;
        ou = c2 || o3, su = u2 || o3, U = l2 || s2, ku(t6, e4, n7), U = l2, su = u2, ou = c2, Mu(e4), i4 & 8192 && (t6 = e4.stateNode, t6._visibility = o3 ? t6._visibility & -2 : t6._visibility | 1, !o3 || r5 === null || s2 || ou || U || (t6 = s2 || U, n7 = ou, r5 = U, ou = o3 || ou, U = t6, Lu(e4, 2), ou = n7, U = r5), !o3 && su || vu(e4, o3)), i4 & 4 && (t6 = e4.updateQueue, t6 !== null && (n7 = t6.retryQueue, n7 !== null && (t6.retryQueue = null, Ou(e4, n7))));
        break;
      case 19:
        ku(t6, e4, n7), Mu(e4), i4 & 4 && (t6 = e4.updateQueue, t6 !== null && (e4.updateQueue = null, Ou(e4, t6)));
        break;
      case 30:
        i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), i4 = an2(), o3 = fu, s2 = (n7 & 335544064) === n7, c2 = e4.memoizedProps, fu = s2 && ki2(c2.default, c2.update) !== `none`, ku(t6, e4, n7), Mu(e4), s2 && r5 !== null && D2 && (e4.flags |= 4), fu = o3, D2 = i4;
        break;
      case 21:
        break;
      case 7:
        i4 & 512 && (U || r5 === null || Ol(r5, r5.return)), r5 && r5.stateNode !== null && (r5.stateNode._fragmentFiber = e4);
      default:
        ku(t6, e4, n7), Mu(e4);
    }
  }
  function Mu(e4) {
    var t6 = e4.flags;
    if (t6 & 2) {
      try {
        for (var n7, r5 = e4.return; r5 !== null; ) {
          if (Il2(r5)) {
            n7 = r5;
            break;
          }
          r5 = r5.return;
        }
        r5 = null;
        for (var i4 = e4.return; i4 !== null; ) {
          if (Nl2(i4)) {
            var o3 = i4.stateNode;
            r5 === null ? r5 = [o3] : r5.push(o3);
          }
          if (Ml2(i4)) break;
          i4 = i4.return;
        }
        var s2 = r5;
        if (n7 == null) throw Error(a3(160));
        switch (n7.tag) {
          case 27:
            var c2 = n7.stateNode;
            zl2(e4, Ll2(e4), c2, s2);
            break;
          case 5:
            var l2 = n7.stateNode;
            n7.flags & 32 && (Sn2(l2, ``), n7.flags &= -33), zl2(e4, Ll2(e4), l2, s2);
            break;
          case 3:
          case 4:
            var u2 = n7.stateNode.containerInfo;
            Rl2(e4, Ll2(e4), u2, s2);
            break;
          default:
            throw Error(a3(161));
        }
      } catch (t7) {
        Z(e4, e4.return, t7);
      }
      e4.flags &= -3;
    }
    t6 & 4096 && (e4.flags &= -4097);
  }
  function Nu(e4) {
    if (e4.subtreeFlags & 1024) for (e4 = e4.child; e4 !== null; ) {
      var t6 = e4;
      Nu(t6), t6.tag === 5 && t6.flags & 1024 && (t6 = t6.stateNode, gh = true, t6.reset(), gh = false), e4 = e4.sibling;
    }
  }
  function Pu(e4, t6) {
    if (t6.subtreeFlags & 9270) for (t6 = t6.child; t6 !== null; ) Fu(t6, e4), t6 = t6.sibling;
    else au(t6, false);
  }
  function Fu(e4, t6) {
    var n7 = e4.alternate;
    if (n7 === null) Zl(e4, false);
    else switch (e4.tag) {
      case 3:
        if (mu = du = false, Gl2(), Pu(t6, e4), !du && !pu) {
          if (e4 = Wl, e4 !== null) for (var r5 = 0; r5 < e4.length; r5 += 3) {
            n7 = e4[r5];
            var i4 = e4[r5 + 1];
            Ep(n7, e4[r5 + 2]), n7 = n7.ownerDocument.documentElement, n7 !== null && n7.animate({
              opacity: [0, 0],
              pointerEvents: [`none`, `none`]
            }, {
              duration: 0,
              fill: `forwards`,
              pseudoElement: `::view-transition-group(` + i4 + `)`
            });
          }
          e4 = t6.containerInfo, e4 = e4.nodeType === 9 ? e4.documentElement : e4.ownerDocument.documentElement, e4 !== null && e4.style.viewTransitionName === `` && (e4.style.viewTransitionName = `none`, e4.animate({
            opacity: [0, 0],
            pointerEvents: [`none`, `none`]
          }, {
            duration: 0,
            fill: `forwards`,
            pseudoElement: `::view-transition-group(root)`
          }), e4.animate({
            width: [0, 0],
            height: [0, 0]
          }, {
            duration: 0,
            fill: `forwards`,
            pseudoElement: `::view-transition`
          })), mu = true;
        }
        Wl = null;
        break;
      case 5:
        Pu(t6, e4);
        break;
      case 4:
        r5 = du, du = false, Pu(t6, e4), du && (pu = true), du = r5;
        break;
      case 22:
        e4.memoizedState === null && (n7.memoizedState === null ? Pu(t6, e4) : Zl(e4, false));
        break;
      case 30:
        r5 = du, i4 = Gl2(), du = false, Pu(t6, e4), du && (e4.flags |= 4);
        var a4 = e4.memoizedProps, o3 = e4.stateNode;
        t6 = k2(a4, o3), o3 = k2(n7.memoizedProps, o3);
        var s2 = ki2(a4.default, a4.update);
        s2 === `none` ? t6 = false : (a4 = n7.memoizedState, n7.memoizedState = null, n7 = e4.child, Kl = 0, t6 = iu(e4, n7, t6, o3, s2, a4, true), Kl !== (a4 === null ? 0 : a4.length) && (e4.flags |= 32)), e4.flags & 4 && t6 ? (Nd(e4, e4.memoizedProps.onUpdate), Wl = i4) : i4 !== null && (i4.push.apply(i4, Wl), Wl = i4), du = e4.flags & 32 ? true : r5;
        break;
      default:
        Pu(t6, e4);
    }
  }
  function Iu(e4, t6) {
    if (t6.subtreeFlags & 8772) for (t6 = t6.child; t6 !== null; ) _u(e4, t6.alternate, t6), t6 = t6.sibling;
  }
  function Lu(e4, t6) {
    for (e4 = e4.child; e4 !== null; ) {
      var n7 = e4, r5 = t6;
      switch (n7.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wl2(4, n7, n7.return), Lu(n7, r5);
          break;
        case 1:
          Ol(n7, n7.return);
          var i4 = n7.stateNode;
          typeof i4.componentWillUnmount == `function` && El2(n7, n7.return, i4), Lu(n7, r5);
          break;
        case 27:
          r5 & 2 && gm(n7.stateNode, n7.type, n7.memoizedProps);
        case 5:
          Ol(n7, n7.return), n7.tag !== 5 && n7.tag !== 27 || jl2(n7), Lu(n7, r5);
          break;
        case 6:
          jl2(n7);
          break;
        case 26:
          Ol(n7, n7.return), i4 = n7.stateNode, n7.memoizedState !== null || i4 === null || U || i4.parentNode.removeChild(i4), Lu(n7, r5);
          break;
        case 22:
          n7.memoizedState === null && Lu(n7, r5);
          break;
        case 30:
          Ol(n7, n7.return), Lu(n7, r5);
          break;
        case 7:
          Ol(n7, n7.return);
        default:
          Lu(n7, r5);
      }
      e4 = e4.sibling;
    }
  }
  function Ru(e4, t6, n7) {
    for (n7 = t6.subtreeFlags & 8772 ? n7 : n7 & -2, t6 = t6.child; t6 !== null; ) {
      var r5 = t6.alternate, i4 = e4, a4 = t6, o3 = a4.flags, s2 = !!(n7 & 1);
      switch (a4.tag) {
        case 0:
        case 11:
        case 15:
          Ru(i4, a4, n7), Cl2(4, a4);
          break;
        case 1:
          if (Ru(i4, a4, n7), r5 = a4, i4 = r5.stateNode, typeof i4.componentDidMount == `function`) try {
            i4.componentDidMount();
          } catch (e5) {
            Z(r5, r5.return, e5);
          }
          if (r5 = a4, i4 = r5.updateQueue, i4 !== null) {
            var c2 = r5.stateNode;
            try {
              var l2 = i4.shared.hiddenCallbacks;
              if (l2 !== null) for (i4.shared.hiddenCallbacks = null, i4 = 0; i4 < l2.length; i4++) Do2(l2[i4], c2);
            } catch (e5) {
              Z(r5, r5.return, e5);
            }
          }
          s2 && o3 & 64 && Tl2(a4), Dl2(a4, a4.return);
          break;
        case 27:
          n7 & 2 && Bl2(a4);
        case 5:
          a4.tag !== 5 && a4.tag !== 27 || Al(a4), Ru(i4, a4, n7), s2 && r5 === null && o3 & 4 && Pl2(a4), Dl2(a4, a4.return);
          break;
        case 6:
          Al(a4);
          break;
        case 26:
          c2 = a4.stateNode, a4.memoizedState !== null || c2 === null || ou || Km(bm(c2.ownerDocument), a4.type, c2), Ru(i4, a4, n7), s2 && r5 === null && o3 & 4 && Pl2(a4), Dl2(a4, a4.return);
          break;
        case 12:
          Ru(i4, a4, n7);
          break;
        case 31:
          Ru(i4, a4, n7), s2 && o3 & 4 && Tu(i4, a4);
          break;
        case 13:
          Ru(i4, a4, n7), s2 && o3 & 4 && Eu(i4, a4);
          break;
        case 22:
          a4.memoizedState === null && Ru(i4, a4, n7), Dl2(a4, a4.return);
          break;
        case 30:
          Ru(i4, a4, n7), Dl2(a4, a4.return);
          break;
        case 7:
          Dl2(a4, a4.return);
        default:
          Ru(i4, a4, n7);
      }
      t6 = t6.sibling;
    }
  }
  function zu(e4, t6) {
    var n7 = null;
    e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n7 = e4.memoizedState.cachePool.pool), e4 = null, t6.memoizedState !== null && t6.memoizedState.cachePool !== null && (e4 = t6.memoizedState.cachePool.pool), e4 !== n7 && (e4 != null && e4.refCount++, n7 != null && Ia2(n7));
  }
  function Bu(e4, t6) {
    e4 = null, t6.alternate !== null && (e4 = t6.alternate.memoizedState.cache), t6 = t6.memoizedState.cache, t6 !== e4 && (t6.refCount++, e4 != null && Ia2(e4));
  }
  function Vu(e4, t6, n7, r5) {
    var i4 = (n7 & 335544064) === n7;
    if (t6.subtreeFlags & (i4 ? 10262 : 10256)) for (t6 = t6.child; t6 !== null; ) Hu(e4, t6, n7, r5), t6 = t6.sibling;
    else i4 && ru(t6);
  }
  function Hu(e4, t6, n7, r5) {
    var i4 = (n7 & 335544064) === n7;
    i4 && t6.alternate === null && t6.return !== null && t6.return.alternate !== null && nu(t6);
    var a4 = t6.flags;
    switch (t6.tag) {
      case 0:
      case 11:
      case 15:
        Vu(e4, t6, n7, r5), a4 & 2048 && Cl2(9, t6);
        break;
      case 1:
        Vu(e4, t6, n7, r5);
        break;
      case 3:
        Vu(e4, t6, n7, r5), i4 && mu && (e4 = e4.containerInfo, e4 = e4.nodeType === 9 ? e4.body : e4.nodeName === `HTML` ? e4.ownerDocument.body : e4, e4.style.viewTransitionName === `root` && (e4.style.viewTransitionName = ``), e4 = e4.ownerDocument.documentElement, e4 !== null && e4.style.viewTransitionName === `none` && (e4.style.viewTransitionName = ``)), a4 & 2048 && (a4 = null, t6.alternate !== null && (a4 = t6.alternate.memoizedState.cache), t6 = t6.memoizedState.cache, t6 !== a4 && (t6.refCount++, a4 != null && Ia2(a4)));
        break;
      case 12:
        if (a4 & 2048) {
          Vu(e4, t6, n7, r5), a4 = t6.stateNode;
          try {
            var o3 = t6.memoizedProps, s2 = o3.id, c2 = o3.onPostCommit;
            typeof c2 == `function` && c2(s2, t6.alternate === null ? `mount` : `update`, a4.passiveEffectDuration, -0);
          } catch (e5) {
            Z(t6, t6.return, e5);
          }
        } else Vu(e4, t6, n7, r5);
        break;
      case 31:
        Vu(e4, t6, n7, r5);
        break;
      case 13:
        Vu(e4, t6, n7, r5);
        break;
      case 23:
        break;
      case 22:
        o3 = t6.stateNode, s2 = t6.alternate, t6.memoizedState === null ? (i4 && s2 !== null && s2.memoizedState !== null && nu(t6), o3._visibility & 2 ? Vu(e4, t6, n7, r5) : (o3._visibility |= 2, Uu(e4, t6, n7, r5, !!(t6.subtreeFlags & 10256) || false))) : (i4 && s2 !== null && s2.memoizedState === null && nu(s2), o3._visibility & 2 ? Vu(e4, t6, n7, r5) : Wu(e4, t6)), a4 & 2048 && zu(s2, t6);
        break;
      case 24:
        Vu(e4, t6, n7, r5), a4 & 2048 && Bu(t6.alternate, t6);
        break;
      case 30:
        i4 && (a4 = t6.alternate, a4 !== null && (Yl(a4.child, true), Yl(t6.child, true))), Vu(e4, t6, n7, r5);
        break;
      default:
        Vu(e4, t6, n7, r5);
    }
  }
  function Uu(e4, t6, n7, r5, i4) {
    for (i4 &&= !!(t6.subtreeFlags & 10256) || false, t6 = t6.child; t6 !== null; ) {
      var a4 = e4, o3 = t6, s2 = n7, c2 = r5, l2 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          Uu(a4, o3, s2, c2, i4), Cl2(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u2 = o3.stateNode;
          o3.memoizedState === null ? (u2._visibility |= 2, Uu(a4, o3, s2, c2, i4)) : u2._visibility & 2 ? Uu(a4, o3, s2, c2, i4) : Wu(a4, o3), i4 && l2 & 2048 && zu(o3.alternate, o3);
          break;
        case 24:
          Uu(a4, o3, s2, c2, i4), i4 && l2 & 2048 && Bu(o3.alternate, o3);
          break;
        default:
          Uu(a4, o3, s2, c2, i4);
      }
      t6 = t6.sibling;
    }
  }
  function Wu(e4, t6) {
    if (t6.subtreeFlags & 10256) for (t6 = t6.child; t6 !== null; ) {
      var n7 = e4, r5 = t6, i4 = r5.flags;
      switch (r5.tag) {
        case 22:
          Wu(n7, r5), i4 & 2048 && zu(r5.alternate, r5);
          break;
        case 24:
          Wu(n7, r5), i4 & 2048 && Bu(r5.alternate, r5);
          break;
        default:
          Wu(n7, r5);
      }
      t6 = t6.sibling;
    }
  }
  var Gu = 8192;
  function Ku(e4, t6, n7) {
    if (e4.subtreeFlags & Gu) for (e4 = e4.child; e4 !== null; ) qu(e4, t6, n7), e4 = e4.sibling;
  }
  function qu(e4, t6, n7) {
    switch (e4.tag) {
      case 26:
        Ku(e4, t6, n7), e4.flags & Gu && (e4.memoizedState === null ? (e4 = e4.stateNode, (t6 & 335544128) === t6 && Zm(n7, e4)) : Qm(n7, Au, e4.memoizedState, e4.memoizedProps));
        break;
      case 5:
        Ku(e4, t6, n7), e4.flags & Gu && (e4 = e4.stateNode, (t6 & 335544128) === t6 && Zm(n7, e4));
        break;
      case 3:
      case 4:
        var r5 = Au;
        Au = bm(e4.stateNode.containerInfo), Ku(e4, t6, n7), Au = r5;
        break;
      case 22:
        e4.memoizedState === null && (r5 = e4.alternate, r5 !== null && r5.memoizedState !== null ? (r5 = Gu, Gu = 16777216, Ku(e4, t6, n7), Gu = r5) : Ku(e4, t6, n7));
        break;
      case 30:
        if ((e4.flags & Gu) !== 0 && (r5 = e4.memoizedProps.name, r5 != null && r5 !== `auto`)) {
          var i4 = e4.stateNode;
          i4.paired = null, Hl === null && (Hl = /* @__PURE__ */ new Map()), Hl.set(r5, i4);
        }
        Ku(e4, t6, n7);
        break;
      default:
        Ku(e4, t6, n7);
    }
  }
  function Ju(e4) {
    var t6 = e4.alternate;
    if (t6 !== null && (e4 = t6.child, e4 !== null)) {
      t6.child = null;
      do
        t6 = e4.sibling, e4.sibling = null, e4 = t6;
      while (e4 !== null);
    }
  }
  function Yu(e4) {
    var t6 = e4.deletions;
    if (e4.flags & 16) {
      if (t6 !== null) for (var n7 = 0; n7 < t6.length; n7++) {
        var r5 = t6[n7];
        uu = r5, Qu(r5, e4);
      }
      Ju(e4);
    }
    if (e4.subtreeFlags & 10256) for (e4 = e4.child; e4 !== null; ) Xu(e4), e4 = e4.sibling;
  }
  function Xu(e4) {
    switch (e4.tag) {
      case 0:
      case 11:
      case 15:
        Yu(e4), e4.flags & 2048 && wl2(9, e4, e4.return);
        break;
      case 3:
        Yu(e4);
        break;
      case 12:
        Yu(e4);
        break;
      case 22:
        var t6 = e4.stateNode;
        e4.memoizedState !== null && t6._visibility & 2 && (e4.return === null || e4.return.tag !== 13) ? (t6._visibility &= -3, Zu(e4)) : Yu(e4);
        break;
      default:
        Yu(e4);
    }
  }
  function Zu(e4) {
    var t6 = e4.deletions;
    if (e4.flags & 16) {
      if (t6 !== null) for (var n7 = 0; n7 < t6.length; n7++) {
        var r5 = t6[n7];
        uu = r5, Qu(r5, e4);
      }
      Ju(e4);
    }
    for (e4 = e4.child; e4 !== null; ) {
      switch (t6 = e4, t6.tag) {
        case 0:
        case 11:
        case 15:
          wl2(8, t6, t6.return), Zu(t6);
          break;
        case 22:
          n7 = t6.stateNode, n7._visibility & 2 && (n7._visibility &= -3, Zu(t6));
          break;
        default:
          Zu(t6);
      }
      e4 = e4.sibling;
    }
  }
  function Qu(e4, t6) {
    for (; uu !== null; ) {
      var n7 = uu;
      switch (n7.tag) {
        case 0:
        case 11:
        case 15:
          wl2(8, n7, t6);
          break;
        case 23:
        case 22:
          if (n7.memoizedState !== null && n7.memoizedState.cachePool !== null) {
            var r5 = n7.memoizedState.cachePool.pool;
            r5 != null && r5.refCount++;
          }
          break;
        case 24:
          Ia2(n7.memoizedState.cache);
      }
      if (r5 = n7.child, r5 !== null) r5.return = n7, uu = r5;
      else a: for (n7 = e4; uu !== null; ) {
        r5 = uu;
        var i4 = r5.sibling, a4 = r5.return;
        if (xu(r5), r5 === n7) {
          uu = null;
          break a;
        }
        if (i4 !== null) {
          i4.return = a4, uu = i4;
          break a;
        }
        uu = a4;
      }
    }
  }
  var $u = {
    getCacheForType: function(e4) {
      var t6 = ka2(L2), n7 = t6.data.get(e4);
      return n7 === void 0 && (n7 = e4(), t6.data.set(e4, n7)), n7;
    },
    cacheSignal: function() {
      return ka2(L2).controller.signal;
    }
  }, ed = typeof WeakMap == `function` ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, td = null, nd = false, rd = false, id = false, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = 0, fd = null, pd = null, md = false, hd = 0, gd = 0, _d = 1 / 0, vd = null, yd = null, X = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
  function jd() {
    return G & 2 && J !== 0 ? J & -J : w2.T === null ? jt2() : Pf();
  }
  function Md() {
    if (ud === 0) {
      if (!(J & 536870912) || F2) {
        var e4 = ht2;
        ht2 <<= 1, !(ht2 & 3932160) && (ht2 = 262144), ud = e4;
      } else ud = 536870912;
    }
    return e4 = Po.current, e4 !== null && (e4.flags |= 32), ud;
  }
  function Nd(e4, t6) {
    if (t6 != null) {
      var n7 = e4.stateNode, r5 = n7.ref;
      r5 === null && (r5 = n7.ref = Pp(k2(e4.memoizedProps, n7))), Dd === null && (Dd = []), Dd.push(t6.bind(null, r5));
    }
  }
  function Pd(e4, t6, n7) {
    (e4 === K && (Y === 2 || Y === 9) || e4.cancelPendingCommit !== null) && (Vd(e4, 0), Rd(e4, J, ud, false)), wt2(e4, n7), (!(G & 2) || e4 !== K) && (e4 === K && (!(G & 2) && (cd |= n7), od === 4 && Rd(e4, J, ud, false)), Ef(e4));
  }
  function Fd(e4, t6, n7) {
    if (G & 6) throw Error(a3(327));
    var r5 = !n7 && !(t6 & 127) && (t6 & e4.expiredLanes) === 0 || yt2(e4, t6), i4 = r5 ? Yd(e4, t6) : qd(e4, t6, true), o3 = r5;
    do {
      if (i4 === 0) {
        rd && !r5 && Rd(e4, t6, 0, false);
        break;
      }
      if (n7 = e4.current.alternate, o3 && !Ld(n7)) {
        i4 = qd(e4, t6, false), o3 = false;
        continue;
      }
      if (i4 === 2) {
        if (o3 = t6, e4.errorRecoveryDisabledLanes & o3) var s2 = 0;
        else s2 = e4.pendingLanes & -536870913, s2 = s2 === 0 ? s2 & 536870912 ? 536870912 : 0 : s2;
        if (s2 !== 0) {
          t6 = s2;
          a: {
            var c2 = e4;
            i4 = fd;
            var l2 = c2.current.memoizedState.isDehydrated;
            if (l2 && (Vd(c2, s2).flags |= 256), s2 = qd(c2, s2, false), s2 !== 2 && s2 !== 6) {
              if (id && !l2) {
                c2.errorRecoveryDisabledLanes |= o3, cd |= o3, i4 = 4;
                break a;
              }
              o3 = pd, pd = i4, o3 !== null && (pd === null ? pd = o3 : pd.push.apply(pd, o3));
            }
            i4 = s2;
          }
          if (o3 = false, i4 !== 2) continue;
        }
      }
      if (i4 === 1) {
        Vd(e4, 0), Rd(e4, t6, 0, true);
        break;
      }
      a: {
        switch (r5 = e4, o3 = i4, o3) {
          case 0:
          case 1:
            throw Error(a3(345));
          case 4:
            if ((t6 & 4194048) !== t6 && (t6 & 62914560) !== t6) break;
          case 6:
            Rd(r5, t6, ud, !nd);
            break a;
          case 2:
            pd = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(a3(329));
        }
        if ((t6 & 62914560) === t6 && (i4 = hd + 300 - Qe2(), 10 < i4)) {
          if (Rd(r5, t6, ud, !nd), vt2(r5, 0, true) !== 0) break a;
          Sd = t6, r5.timeoutHandle = gp(Id.bind(null, r5, n7, pd, vd, md, t6, ud, cd, dd, nd, o3, `Throttled`, -0, 0), i4);
          break a;
        }
        Id(r5, n7, pd, vd, md, t6, ud, cd, dd, nd, o3, null, -0, 0);
      }
      break;
    } while (1);
    Ef(e4);
  }
  function Id(e4, t6, n7, r5, i4, a4, o3, s2, c2, l2, u2, d2, f2, p2) {
    e4.timeoutHandle = -1;
    var m3 = t6.subtreeFlags, h2 = (a4 & 335544064) === a4;
    if (d2 = null, (h2 || m3 & 8192 || (m3 & 16785408) == 16785408) && (d2 = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend: An2
    }, Hl = null, qu(t6, a4, d2), h2 && (m3 = d2, h2 = e4.containerInfo, h2 = (h2.nodeType === 9 ? h2 : h2.ownerDocument).__reactViewTransition, h2 != null && (m3.count++, m3.waitingForViewTransition = true, m3 = nh.bind(m3), h2.finished.then(m3, m3))), m3 = (a4 & 62914560) === a4 ? hd - Qe2() : (a4 & 4194048) === a4 ? gd - Qe2() : 0, m3 = eh(d2, m3), m3 !== null)) {
      Sd = a4, e4.cancelPendingCommit = m3(nf.bind(null, e4, t6, a4, n7, r5, i4, o3, s2, c2, l2, u2, d2, null, f2, p2)), Rd(e4, a4, o3, !l2);
      return;
    }
    nf(e4, t6, a4, n7, r5, i4, o3, s2, c2, l2, u2, d2);
  }
  function Ld(e4) {
    for (var t6 = e4; ; ) {
      var n7 = t6.tag;
      if ((n7 === 0 || n7 === 11 || n7 === 15) && t6.flags & 16384 && (n7 = t6.updateQueue, n7 !== null && (n7 = n7.stores, n7 !== null))) for (var r5 = 0; r5 < n7.length; r5++) {
        var i4 = n7[r5], a4 = i4.getSnapshot;
        i4 = i4.value;
        try {
          if (!$r2(a4(), i4)) return false;
        } catch {
          return false;
        }
      }
      if (n7 = t6.child, t6.subtreeFlags & 16384 && n7 !== null) n7.return = t6, t6 = n7;
      else {
        if (t6 === e4) break;
        for (; t6.sibling === null; ) {
          if (t6.return === null || t6.return === e4) return true;
          t6 = t6.return;
        }
        t6.sibling.return = t6.return, t6 = t6.sibling;
      }
    }
    return true;
  }
  function Rd(e4, t6, n7, r5) {
    t6 = bt2(e4, t6), t6 &= ~ld, t6 &= ~cd, e4.suspendedLanes |= t6, e4.pingedLanes &= ~t6, r5 && (e4.warmLanes |= t6), r5 = e4.expirationTimes;
    for (var i4 = t6; 0 < i4; ) {
      var a4 = 31 - ut2(i4), o3 = 1 << a4;
      r5[a4] = -1, i4 &= ~o3;
    }
    n7 !== 0 && Et2(e4, n7, t6);
  }
  function zd() {
    return G & 6 ? true : (Df(0, false), false);
  }
  function Bd() {
    if (q !== null) {
      if (Y === 0) var e4 = q.return;
      else e4 = q, Sa2 = xa2 = null, ss2(e4), co2 = null, lo2 = 0, e4 = q;
      for (; e4 !== null; ) Sl2(e4.alternate, e4), e4 = e4.return;
      q = null;
    }
  }
  function Vd(e4, t6) {
    var n7 = e4.timeoutHandle;
    return n7 !== -1 && (e4.timeoutHandle = -1, _p(n7)), n7 = e4.cancelPendingCommit, n7 !== null && (e4.cancelPendingCommit = null, n7()), Sd = 0, Bd(), K = e4, q = n7 = Wi2(e4.current, null), J = t6, Y = 0, td = null, nd = false, rd = yt2(e4, t6), id = false, dd = ud = ld = cd = sd = od = 0, pd = fd = null, md = false, ad = bt2(e4, t6), Pi2(), n7;
  }
  function Hd(e4, t6) {
    R2 = null, w2.H = gc2, t6 === Qa || t6 === eo2 ? (t6 = oo2(), Y = 3) : t6 === $a2 ? (t6 = oo2(), Y = 4) : Y = t6 === Pc2 ? 8 : typeof t6 == `object` && t6 && typeof t6.then == `function` ? 6 : 1, td = t6, q === null && (od = 1, Oc2(e4, Qi2(t6, e4.current)));
  }
  function Ud() {
    var e4 = Po.current;
    return e4 === null ? true : (J & 4194048) === J ? Fo === null : (J & 62914560) === J || J & 536870912 ? e4 === Fo : false;
  }
  function Wd() {
    var e4 = w2.H;
    return w2.H = gc2, e4 === null ? gc2 : e4;
  }
  function Gd() {
    var e4 = w2.A;
    return w2.A = $u, e4;
  }
  function Kd() {
    od = 4, nd || (J & 4194048) !== J && Po.current !== null || (rd = true), !(sd & 134217727) && !(cd & 134217727) || K === null || Rd(K, J, ud, false);
  }
  function qd(e4, t6, n7) {
    var r5 = G;
    G |= 2;
    var i4 = Wd(), a4 = Gd();
    (K !== e4 || J !== t6) && (vd = null, Vd(e4, t6)), t6 = false;
    var o3 = od;
    a: do
      try {
        if (Y !== 0 && q !== null) {
          var s2 = q, c2 = td;
          switch (Y) {
            case 8:
              Bd(), o3 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              Po.current === null && (t6 = true);
              var l2 = Y;
              if (Y = 0, td = null, $d(e4, s2, c2, l2), n7 && rd) {
                o3 = 0;
                break a;
              }
              break;
            default:
              l2 = Y, Y = 0, td = null, $d(e4, s2, c2, l2);
          }
        }
        Jd(), o3 = od;
        break;
      } catch (t7) {
        Hd(e4, t7);
      }
    while (1);
    return t6 && e4.shellSuspendCounter++, Sa2 = xa2 = null, G = r5, w2.H = i4, w2.A = a4, q === null && (K = null, J = 0, Pi2()), o3;
  }
  function Jd() {
    for (; q !== null; ) Zd(q);
  }
  function Yd(e4, t6) {
    var n7 = G;
    G |= 2;
    var r5 = Wd(), i4 = Gd();
    K !== e4 || J !== t6 ? (vd = null, _d = Qe2() + 500, Vd(e4, t6)) : rd = yt2(e4, t6);
    a: do
      try {
        if (Y !== 0 && q !== null) {
          t6 = q;
          var o3 = td;
          b: switch (Y) {
            case 1:
              Y = 0, td = null, $d(e4, t6, o3, 1);
              break;
            case 2:
            case 9:
              if (no2(o3)) {
                Y = 0, td = null, Qd(t6);
                break;
              }
              t6 = function() {
                Y !== 2 && Y !== 9 || K !== e4 || (Y = 7), Ef(e4);
              }, o3.then(t6, t6);
              break a;
            case 3:
              Y = 7;
              break a;
            case 4:
              Y = 5;
              break a;
            case 7:
              no2(o3) ? (Y = 0, td = null, Qd(t6)) : (Y = 0, td = null, $d(e4, t6, o3, 7));
              break;
            case 5:
              var s2 = null;
              switch (q.tag) {
                case 26:
                  s2 = q.memoizedState;
                case 5:
                case 27:
                  var c2 = q;
                  if (s2 ? Ym(s2) : c2.stateNode.complete) {
                    Y = 0, td = null;
                    var l2 = c2.sibling;
                    if (l2 !== null) q = l2;
                    else {
                      var u2 = c2.return;
                      u2 === null ? q = null : (q = u2, ef(u2));
                    }
                    break b;
                  }
              }
              Y = 0, td = null, $d(e4, t6, o3, 5);
              break;
            case 6:
              Y = 0, td = null, $d(e4, t6, o3, 6);
              break;
            case 8:
              Bd(), od = 6;
              break a;
            default:
              throw Error(a3(462));
          }
        }
        Xd();
        break;
      } catch (t7) {
        Hd(e4, t7);
      }
    while (1);
    return Sa2 = xa2 = null, w2.H = r5, w2.A = i4, G = n7, q === null ? (K = null, J = 0, Pi2(), od) : 0;
  }
  function Xd() {
    for (; q !== null && !Xe2(); ) Zd(q);
  }
  function Zd(e4) {
    var t6 = ml(e4.alternate, e4, ad);
    e4.memoizedProps = e4.pendingProps, t6 === null ? ef(e4) : q = t6;
  }
  function Qd(e4) {
    var t6 = e4, n7 = t6.alternate;
    switch (t6.tag) {
      case 15:
      case 0:
        t6 = Jc(n7, t6, t6.pendingProps, t6.type, void 0, J);
        break;
      case 11:
        t6 = Jc(n7, t6, t6.pendingProps, t6.type.render, t6.ref, J);
        break;
      case 5:
        ss2(t6);
        var r5 = t6;
        r5 === la2 && (F2 ? (ha2(r5), r5.tag === 5 && r5.stateNode != null && (P2 = r5.stateNode)) : (ha2(r5), F2 = true));
      default:
        Sl2(n7, t6), t6 = q = Gi2(t6, ad), t6 = ml(n7, t6, ad);
    }
    e4.memoizedProps = e4.pendingProps, t6 === null ? ef(e4) : q = t6;
  }
  function $d(e4, t6, n7, r5) {
    Sa2 = xa2 = null, ss2(t6), co2 = null, lo2 = 0;
    var i4 = t6.return;
    try {
      if (Nc2(e4, i4, t6, n7, J)) {
        od = 1, Oc2(e4, Qi2(n7, e4.current)), q = null;
        return;
      }
    } catch (t7) {
      if (i4 !== null) throw q = i4, t7;
      od = 1, Oc2(e4, Qi2(n7, e4.current)), q = null;
      return;
    }
    t6.flags & 32768 ? (F2 || r5 === 1 ? e4 = true : rd || J & 536870912 ? e4 = false : (nd = e4 = true, (r5 === 2 || r5 === 9 || r5 === 3 || r5 === 6) && (r5 = Po.current, r5 !== null && r5.tag === 13 && (r5.flags |= 16384))), tf(t6, e4)) : ef(t6);
  }
  function ef(e4) {
    var t6 = e4;
    do {
      if (t6.flags & 32768) {
        tf(t6, nd);
        return;
      }
      e4 = t6.return;
      var n7 = bl(t6.alternate, t6, ad);
      if (n7 !== null) {
        q = n7;
        return;
      }
      if (t6 = t6.sibling, t6 !== null) {
        q = t6;
        return;
      }
      q = t6 = e4;
    } while (t6 !== null);
    od === 0 && (od = 5);
  }
  function tf(e4, t6) {
    do {
      var n7 = xl2(e4.alternate, e4);
      if (n7 !== null) {
        n7.flags &= 32767, q = n7;
        return;
      }
      if (n7 = e4.return, n7 !== null && (n7.flags |= 32768, n7.subtreeFlags = 0, n7.deletions = null), !t6 && (e4 = e4.sibling, e4 !== null)) {
        q = e4;
        return;
      }
      q = e4 = n7;
    } while (e4 !== null);
    od = 6, q = null;
  }
  function nf(e4, t6, n7, r5, i4, o3, s2, c2, l2, u2, d2, f2) {
    e4.cancelPendingCommit = null;
    do
      df();
    while (X !== 0);
    if (G & 6) throw Error(a3(327));
    if (t6 !== null) {
      if (t6 === e4.current) throw Error(a3(177));
      e4 === K && (q = K = null, J = 0), xd = t6, bd = e4, Sd = n7, wd = i4, Td = r5, rf(e4, t6, n7, s2, c2, l2, f2);
    }
  }
  function rf(e4, t6, n7, r5, i4, a4, o3) {
    var s2 = t6.lanes | t6.childLanes;
    if (Cd = s2, s2 |= Ni, Tt2(e4, n7, s2, r5, i4, a4), Dd = null, (n7 & 335544064) === n7 ? (Od = za(e4), r5 = 10262) : (Od = null, r5 = 10256), (t6.subtreeFlags & r5) !== 0 || (t6.flags & r5) !== 0 ? (e4.callbackNode = null, e4.callbackPriority = 0, yf(nt2, function() {
      return ff(), null;
    })) : (e4.callbackNode = null, e4.callbackPriority = 0), Vl2 = false, r5 = !!(t6.flags & 13878), t6.subtreeFlags & 13878 || r5) {
      r5 = w2.T, w2.T = null, i4 = T2.p, T2.p = 2, a4 = G, G |= 4;
      try {
        hu(e4, t6, n7);
      } finally {
        G = a4, T2.p = i4, w2.T = r5;
      }
    }
    X = 1, Vl2 ? Ed = Mp(o3, e4.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
  }
  function af(e4) {
    if (X !== 0) {
      var t6 = bd.onRecoverableError;
      t6(e4, {
        componentStack: null
      });
    }
  }
  function of() {
    X === 3 && (X = 0, Fu(xd, bd), X = 4);
  }
  function sf() {
    if (X === 1) {
      X = 0;
      var e4 = bd, t6 = xd, n7 = Sd, r5 = !!(t6.flags & 13878);
      if (t6.subtreeFlags & 13878 || r5) {
        r5 = w2.T, w2.T = null;
        var i4 = T2.p;
        T2.p = 2;
        var a4 = G;
        G |= 4;
        try {
          fu = pu = false, ju(t6, e4, n7), n7 = cp;
          var o3 = ai2(e4.containerInfo), s2 = n7.focusedElem, c2 = n7.selectionRange;
          if (o3 !== s2 && s2 && s2.ownerDocument && ii2(s2.ownerDocument.documentElement, s2)) {
            if (c2 !== null && oi2(s2)) {
              var l2 = c2.start, u2 = c2.end;
              if (u2 === void 0 && (u2 = l2), `selectionStart` in s2) s2.selectionStart = l2, s2.selectionEnd = Math.min(u2, s2.value.length);
              else {
                var d2 = s2.ownerDocument || document, f2 = d2 && d2.defaultView || window;
                if (f2.getSelection) {
                  var p2 = f2.getSelection(), m3 = s2.textContent.length, h2 = Math.min(c2.start, m3), g3 = c2.end === void 0 ? h2 : Math.min(c2.end, m3);
                  !p2.extend && h2 > g3 && (o3 = g3, g3 = h2, h2 = o3);
                  var _2 = ri2(s2, h2), v3 = ri2(s2, g3);
                  if (_2 && v3 && (p2.rangeCount !== 1 || p2.anchorNode !== _2.node || p2.anchorOffset !== _2.offset || p2.focusNode !== v3.node || p2.focusOffset !== v3.offset)) {
                    var y3 = d2.createRange();
                    y3.setStart(_2.node, _2.offset), p2.removeAllRanges(), h2 > g3 ? (p2.addRange(y3), p2.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p2.addRange(y3));
                  }
                }
              }
            }
            for (d2 = [], p2 = s2; p2 = p2.parentNode; ) p2.nodeType === 1 && d2.push({
              element: p2,
              left: p2.scrollLeft,
              top: p2.scrollTop
            });
            for (typeof s2.focus == `function` && s2.focus(), s2 = 0; s2 < d2.length; s2++) {
              var b3 = d2[s2];
              b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
            }
          }
          gh = !!sp, cp = sp = null;
        } finally {
          G = a4, T2.p = i4, w2.T = r5;
        }
      }
      e4.current = t6, X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      var e4 = bd, t6 = xd, n7 = !!(t6.flags & 8772);
      if (t6.subtreeFlags & 8772 || n7) {
        n7 = w2.T, w2.T = null;
        var r5 = T2.p;
        T2.p = 2;
        var i4 = G;
        G |= 4;
        try {
          _u(e4, t6.alternate, t6);
        } finally {
          G = i4, T2.p = r5, w2.T = n7;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      var e4 = Ed;
      Ed = null, Ze2();
      var t6 = bd, n7 = xd, r5 = Sd, i4 = Td, a4 = (r5 & 335544064) === r5 ? 10262 : 10256;
      if ((n7.subtreeFlags & a4) !== 0 || (n7.flags & a4) !== 0 ? X = 5 : (X = 0, xd = bd = null, uf(t6, t6.pendingLanes)), a4 = t6.pendingLanes, a4 === 0 && (yd = null), At2(r5), n7 = n7.stateNode, ct2 && typeof ct2.onCommitFiberRoot == `function`) try {
        ct2.onCommitFiberRoot(st2, n7, void 0, (n7.current.flags & 128) == 128);
      } catch {
      }
      if (i4 !== null) {
        n7 = w2.T, a4 = T2.p, T2.p = 2, w2.T = null;
        try {
          for (var o3 = t6.onRecoverableError, s2 = 0; s2 < i4.length; s2++) {
            var c2 = i4[s2];
            o3(c2.value, {
              componentStack: c2.stack
            });
          }
        } finally {
          w2.T = n7, T2.p = a4;
        }
      }
      if (i4 = Dd, o3 = Od, Od = null, i4 !== null && (Dd = null, o3 === null && (o3 = []), e4 !== null)) for (c2 = 0; c2 < i4.length; c2++) n7 = (0, i4[c2])(o3), n7 !== void 0 && e4.finished.finally(n7);
      Sd & 3 && df(), Ef(t6), a4 = t6.pendingLanes, r5 & 261930 && a4 & 42 ? t6 === Ad ? kd++ : (kd = 0, Ad = t6) : (kd = 0, Ad = null), Df(0, false);
    }
  }
  function uf(e4, t6) {
    (e4.pooledCacheLanes &= t6) === 0 && (t6 = e4.pooledCache, t6 != null && (e4.pooledCache = null, Ia2(t6)));
  }
  function df() {
    return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
  }
  function ff() {
    if (X !== 5) return false;
    var e4 = bd, t6 = Cd;
    Cd = 0;
    var n7 = At2(Sd), r5 = w2.T, i4 = T2.p;
    try {
      T2.p = 32 > n7 ? 32 : n7, w2.T = null, n7 = wd, wd = null;
      var o3 = bd, s2 = Sd;
      if (X = 0, xd = bd = null, Sd = 0, G & 6) throw Error(a3(331));
      var c2 = G;
      if (G |= 4, Xu(o3.current), Hu(o3, o3.current, s2, n7), G = c2, Df(0, false), ct2 && typeof ct2.onPostCommitFiberRoot == `function`) try {
        ct2.onPostCommitFiberRoot(st2, o3);
      } catch {
      }
      return true;
    } finally {
      T2.p = i4, w2.T = r5, uf(e4, t6);
    }
  }
  function pf(e4, t6, n7) {
    t6 = Qi2(n7, t6), t6 = Ac2(e4.stateNode, t6, 2), e4 = xo2(e4, t6, 2), e4 !== null && (wt2(e4, 2), Ef(e4));
  }
  function Z(e4, t6, n7) {
    if (e4.tag === 3) pf(e4, e4, n7);
    else for (; t6 !== null; ) {
      if (t6.tag === 3) {
        pf(t6, e4, n7);
        break;
      }
      if (t6.tag === 1) {
        var r5 = t6.stateNode;
        if (typeof t6.type.getDerivedStateFromError == `function` || typeof r5.componentDidCatch == `function` && (yd === null || !yd.has(r5))) {
          e4 = Qi2(n7, e4), n7 = jc2(2), r5 = xo2(t6, n7, 2), r5 !== null && (Mc2(n7, r5, t6, e4), wt2(r5, 2), Ef(r5));
          break;
        }
      }
      t6 = t6.return;
    }
  }
  function mf(e4, t6, n7) {
    var r5 = e4.pingCache;
    if (r5 === null) {
      r5 = e4.pingCache = new ed();
      var i4 = /* @__PURE__ */ new Set();
      r5.set(t6, i4);
    } else i4 = r5.get(t6), i4 === void 0 && (i4 = /* @__PURE__ */ new Set(), r5.set(t6, i4));
    i4.has(n7) || (id = true, i4.add(n7), e4 = hf.bind(null, e4, t6, n7), t6.then(e4, e4));
  }
  function hf(e4, t6, n7) {
    var r5 = e4.pingCache;
    r5 !== null && r5.delete(t6), e4.pingedLanes |= e4.suspendedLanes & n7, e4.warmLanes &= ~n7, K === e4 && (J & n7) === n7 && (od === 4 || od === 3 && (J & 62914560) === J && 300 > Qe2() - hd ? G & 2 ? ld |= n7 : Vd(e4, 0) : ld |= n7, dd === J && (dd = 0)), Ef(e4);
  }
  function gf(e4, t6) {
    t6 === 0 && (t6 = St2()), e4 = Li2(e4, t6), e4 !== null && (wt2(e4, t6), Ef(e4));
  }
  function _f(e4) {
    var t6 = e4.memoizedState, n7 = 0;
    t6 !== null && (n7 = t6.retryLane), gf(e4, n7);
  }
  function vf(e4, t6) {
    var n7 = 0;
    switch (e4.tag) {
      case 31:
      case 13:
        var r5 = e4.stateNode, i4 = e4.memoizedState;
        i4 !== null && (n7 = i4.retryLane);
        break;
      case 19:
        r5 = e4.stateNode;
        break;
      case 22:
        r5 = e4.stateNode._retryCache;
        break;
      default:
        throw Error(a3(314));
    }
    r5 !== null && r5.delete(t6), gf(e4, n7);
  }
  function yf(e4, t6) {
    return Je2(e4, t6);
  }
  var bf = null, xf = null, Sf = false, Cf = false, wf = false, Tf = 0;
  function Ef(e4) {
    e4 !== xf && e4.next === null && (xf === null ? bf = xf = e4 : xf = xf.next = e4), Cf = true, Sf || (Sf = true, Nf());
  }
  function Df(e4, t6) {
    if (!wf && Cf) {
      wf = true;
      do
        for (var n7 = false, r5 = bf; r5 !== null; ) {
          if (!t6) {
            if (e4 !== 0) {
              var i4 = r5.pendingLanes;
              if (i4 === 0) var a4 = 0;
              else {
                var o3 = r5.suspendedLanes, s2 = r5.pingedLanes;
                a4 = (1 << 31 - ut2(42 | e4) + 1) - 1, a4 &= i4 & ~(o3 & ~s2), a4 = a4 & 201326741 ? a4 & 201326741 | 1 : a4 ? a4 | 2 : 0;
              }
              a4 !== 0 && (n7 = true, Mf(r5, a4));
            } else a4 = J, a4 = vt2(r5, r5 === K ? a4 : 0, r5.cancelPendingCommit !== null || r5.timeoutHandle !== -1), !(a4 & 3) || yt2(r5, a4) || (n7 = true, Mf(r5, a4));
          }
          r5 = r5.next;
        }
      while (n7);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Cf = Sf = false;
    var e4 = 0;
    Tf !== 0 && hp() && (e4 = Tf);
    for (var t6 = Qe2(), n7 = null, r5 = bf; r5 !== null; ) {
      var i4 = r5.next, a4 = Af(r5, t6);
      a4 === 0 ? (r5.next = null, n7 === null ? bf = i4 : n7.next = i4, i4 === null && (xf = n7)) : (n7 = r5, (e4 !== 0 || a4 & 3) && (Cf = true)), r5 = i4;
    }
    X !== 0 && X !== 5 || Df(e4, false), Tf !== 0 && (Tf = 0);
  }
  function Af(e4, t6) {
    for (var n7 = e4.suspendedLanes, r5 = e4.pingedLanes, i4 = e4.expirationTimes, a4 = e4.pendingLanes & -62914561; 0 < a4; ) {
      var o3 = 31 - ut2(a4), s2 = 1 << o3, c2 = i4[o3];
      c2 === -1 ? ((s2 & n7) === 0 || (s2 & r5) !== 0) && (i4[o3] = xt2(s2, t6)) : c2 <= t6 && (e4.expiredLanes |= s2), a4 &= ~s2;
    }
    if (t6 = K, n7 = J, n7 = vt2(e4, e4 === t6 ? n7 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r5 = e4.callbackNode, n7 === 0 || e4 === t6 && (Y === 2 || Y === 9) || e4.cancelPendingCommit !== null) return r5 !== null && r5 !== null && Ye2(r5), e4.callbackNode = null, e4.callbackPriority = 0;
    if (!(n7 & 3) || yt2(e4, n7)) {
      if (t6 = n7 & -n7, t6 === e4.callbackPriority) return t6;
      switch (r5 !== null && Ye2(r5), At2(n7)) {
        case 2:
        case 8:
          n7 = tt2;
          break;
        case 32:
          n7 = nt2;
          break;
        case 268435456:
          n7 = it2;
          break;
        default:
          n7 = nt2;
      }
      return r5 = jf.bind(null, e4), n7 = Je2(n7, r5), e4.callbackPriority = t6, e4.callbackNode = n7, t6;
    }
    return r5 !== null && r5 !== null && Ye2(r5), e4.callbackPriority = 2, e4.callbackNode = null, 2;
  }
  function jf(e4, t6) {
    if (X !== 0 && X !== 5) return e4.callbackNode = null, e4.callbackPriority = 0, null;
    var n7 = e4.callbackNode;
    if (df() && e4.callbackNode !== n7) return null;
    var r5 = J;
    return r5 = vt2(e4, e4 === K ? r5 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r5 === 0 ? null : (Fd(e4, r5, t6), Af(e4, Qe2()), e4.callbackNode != null && e4.callbackNode === n7 ? jf.bind(null, e4) : null);
  }
  function Mf(e4, t6) {
    if (df()) return null;
    Fd(e4, t6, true);
  }
  function Nf() {
    bp(function() {
      G & 6 ? Je2(et2, Of) : kf();
    });
  }
  function Pf() {
    if (Tf === 0) {
      var e4 = Ha;
      e4 === 0 && (e4 = mt2, mt2 <<= 1, !(mt2 & 261888) && (mt2 = 256)), Tf = e4;
    }
    return Tf;
  }
  function Ff(e4) {
    return e4 == null || typeof e4 == `symbol` || typeof e4 == `boolean` ? null : typeof e4 == `function` ? e4 : kn2(e4);
  }
  function If(e4, t6, n7, r5, i4) {
    if (t6 === `submit` && n7 && n7.stateNode === i4) {
      var a4 = Ff((i4[Ft2] || null).action), o3 = r5.submitter;
      o3 && (t6 = (t6 = o3[Ft2] || null) ? Ff(t6.formAction) : o3.getAttribute(`formAction`), t6 !== null && (a4 = t6, o3 = null));
      var s2 = new Zn2(`action`, `action`, null, r5, i4);
      e4.push({
        event: s2,
        listeners: [{
          instance: null,
          listener: function() {
            if (r5.defaultPrevented) {
              if (Tf !== 0) {
                var e5 = new FormData(i4, o3);
                nc(n7, {
                  pending: true,
                  data: e5,
                  method: i4.method,
                  action: a4
                }, null, e5);
              }
            } else typeof a4 == `function` && (s2.preventDefault(), e5 = new FormData(i4, o3), nc(n7, {
              pending: true,
              data: e5,
              method: i4.method,
              action: a4
            }, a4, e5));
          },
          currentTarget: i4
        }]
      });
    }
  }
  for (var Lf = 0; Lf < Ei2.length; Lf++) {
    var Rf = Ei2[Lf];
    O2(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
  }
  O2(vi2, `onAnimationEnd`), O2(yi2, `onAnimationIteration`), O2(bi2, `onAnimationStart`), O2(`dblclick`, `onDoubleClick`), O2(`focusin`, `onFocus`), O2(`focusout`, `onBlur`), O2(xi2, `onTransitionRun`), O2(Si2, `onTransitionStart`), O2(Ci2, `onTransitionCancel`), O2(wi2, `onTransitionEnd`), $t2(`onMouseEnter`, [`mouseout`, `mouseover`]), $t2(`onMouseLeave`, [`mouseout`, `mouseover`]), $t2(`onPointerEnter`, [`pointerout`, `pointerover`]), $t2(`onPointerLeave`, [`pointerout`, `pointerover`]), Qt2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Qt2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Qt2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Qt2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Qt2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Qt2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e4, t6) {
    t6 = !!(t6 & 4);
    for (var n7 = 0; n7 < e4.length; n7++) {
      var r5 = e4[n7], i4 = r5.event;
      r5 = r5.listeners;
      a: {
        var a4 = void 0;
        if (t6) for (var o3 = r5.length - 1; 0 <= o3; o3--) {
          var s2 = r5[o3], c2 = s2.instance, l2 = s2.currentTarget;
          if (s2 = s2.listener, c2 !== a4 && i4.isPropagationStopped()) break a;
          a4 = s2, i4.currentTarget = l2;
          try {
            a4(i4);
          } catch (e5) {
            Ai(e5);
          }
          i4.currentTarget = null, a4 = c2;
        }
        else for (o3 = 0; o3 < r5.length; o3++) {
          if (s2 = r5[o3], c2 = s2.instance, l2 = s2.currentTarget, s2 = s2.listener, c2 !== a4 && i4.isPropagationStopped()) break a;
          a4 = s2, i4.currentTarget = l2;
          try {
            a4(i4);
          } catch (e5) {
            Ai(e5);
          }
          i4.currentTarget = null, a4 = c2;
        }
      }
    }
  }
  function Q(e4, t6) {
    var n7 = t6[Lt2];
    n7 === void 0 && (n7 = t6[Lt2] = /* @__PURE__ */ new Set());
    var r5 = e4 + `__bubble`;
    n7.has(r5) || (Gf(t6, e4, 2, false), n7.add(r5));
  }
  function Hf(e4, t6, n7) {
    var r5 = 0;
    t6 && (r5 |= 4), Gf(n7, e4, r5, t6);
  }
  var Uf = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf(e4) {
    if (!e4[Uf]) {
      e4[Uf] = true, Xt2.forEach(function(t7) {
        t7 !== `selectionchange` && (Bf.has(t7) || Hf(t7, false, e4), Hf(t7, true, e4));
      });
      var t6 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
      t6 === null || t6[Uf] || (t6[Uf] = true, Hf(`selectionchange`, false, t6));
    }
  }
  function Gf(e4, t6, n7, r5) {
    switch (Ch(t6)) {
      case 2:
        var i4 = _h;
        break;
      case 8:
        i4 = vh;
        break;
      default:
        i4 = yh;
    }
    n7 = i4.bind(null, t6, n7, e4), i4 = void 0, !Bn2 || t6 !== `touchstart` && t6 !== `touchmove` && t6 !== `wheel` || (i4 = true), r5 ? i4 === void 0 ? e4.addEventListener(t6, n7, true) : e4.addEventListener(t6, n7, {
      capture: true,
      passive: i4
    }) : i4 === void 0 ? e4.addEventListener(t6, n7, false) : e4.addEventListener(t6, n7, {
      passive: i4
    });
  }
  function Kf(e4, t6, n7, r5, i4) {
    var a4 = r5;
    if (!(t6 & 1) && !(t6 & 2) && r5 !== null) a: for (; ; ) {
      if (r5 === null) return;
      var o3 = r5.tag;
      if (o3 === 3 || o3 === 4) {
        var c2 = r5.stateNode.containerInfo;
        if (c2 === i4) break;
        if (o3 === 4) for (o3 = r5.return; o3 !== null; ) {
          var l2 = o3.tag;
          if ((l2 === 3 || l2 === 4) && o3.stateNode.containerInfo === i4) return;
          o3 = o3.return;
        }
        for (; c2 !== null; ) {
          if (o3 = Wt2(c2), o3 === null) return;
          if (l2 = o3.tag, l2 === 5 || l2 === 6 || l2 === 26 || l2 === 27) {
            r5 = a4 = o3;
            continue a;
          }
          c2 = c2.parentNode;
        }
      }
      r5 = r5.return;
    }
    Ln2(function() {
      var r6 = a4, i5 = Mn2(n7), o4 = [];
      a: {
        var c3 = Ti2.get(e4);
        if (c3 !== void 0) {
          var l3 = Zn2, u2 = e4;
          switch (e4) {
            case `keypress`:
              if (Kn2(n7) === 0) break a;
            case `keydown`:
            case `keyup`:
              l3 = hr2;
              break;
            case `focusin`:
              u2 = `focus`, l3 = or2;
              break;
            case `focusout`:
              u2 = `blur`, l3 = or2;
              break;
            case `beforeblur`:
            case `afterblur`:
              l3 = or2;
              break;
            case `click`:
              if (n7.button === 2) break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              l3 = ir2;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              l3 = ar2;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              l3 = vr2;
              break;
            case vi2:
            case yi2:
            case bi2:
              l3 = sr2;
              break;
            case wi2:
              l3 = yr2;
              break;
            case `scroll`:
            case `scrollend`:
              l3 = $n2;
              break;
            case `wheel`:
              l3 = br2;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              l3 = cr2;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              l3 = gr2;
              break;
            case `submit`:
              l3 = _r2;
              break;
            case `toggle`:
            case `beforetoggle`:
              l3 = xr2;
          }
          var d2 = !!(t6 & 4), f2 = !d2 && (e4 === `scroll` || e4 === `scrollend`), p2 = d2 ? c3 === null ? null : c3 + `Capture` : c3;
          d2 = [];
          for (var m3 = r6, h2; m3 !== null; ) {
            var g3 = m3;
            if (h2 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h2 === null || p2 === null || (g3 = Rn2(m3, p2), g3 != null && d2.push(qf(m3, g3, h2))), f2) break;
            m3 = m3.return;
          }
          0 < d2.length && (c3 = new l3(c3, u2, null, n7, i5), o4.push({
            event: c3,
            listeners: d2
          }));
        }
      }
      if (!(t6 & 7)) {
        a: {
          if (l3 = e4 === `mouseover` || e4 === `pointerover`, c3 = e4 === `mouseout` || e4 === `pointerout`, l3 && n7 !== jn2 && (u2 = n7.relatedTarget || n7.fromElement) && (Wt2(u2) || u2[It2])) break a;
          (c3 || l3) && (u2 = i5.window === i5 ? i5 : (l3 = i5.ownerDocument) ? l3.defaultView || l3.parentWindow : window, c3 ? (l3 = n7.relatedTarget || n7.toElement, c3 = r6, l3 = l3 ? Wt2(l3) : null, l3 !== null && (f2 = s(l3), d2 = l3.tag, l3 !== f2 || d2 !== 5 && d2 !== 27 && d2 !== 6) && (l3 = null)) : (c3 = null, l3 = r6), c3 !== l3 && (d2 = ir2, g3 = `onMouseLeave`, p2 = `onMouseEnter`, m3 = `mouse`, (e4 === `pointerout` || e4 === `pointerover`) && (d2 = gr2, g3 = `onPointerLeave`, p2 = `onPointerEnter`, m3 = `pointer`), f2 = c3 == null ? u2 : Kt2(c3), h2 = l3 == null ? u2 : Kt2(l3), u2 = new d2(g3, m3 + `leave`, c3, n7, i5), u2.target = f2, u2.relatedTarget = h2, g3 = null, Wt2(i5) === r6 && (d2 = new d2(p2, m3 + `enter`, l3, n7, i5), d2.target = h2, d2.relatedTarget = f2, g3 = d2), f2 = g3, d2 = c3 && l3 ? ie(c3, l3, Yf) : null, c3 !== null && Xf(o4, u2, c3, d2, false), l3 !== null && f2 !== null && Xf(o4, f2, l3, d2, true)));
        }
        a: {
          if (c3 = r6 ? Kt2(r6) : window, l3 = c3.nodeName && c3.nodeName.toLowerCase(), l3 === `select` || l3 === `input` && c3.type === `file`) var _2 = Vr2;
          else if (Fr2(c3)) {
            if (Hr2) _2 = Zr2;
            else {
              _2 = Yr2;
              var v3 = Jr2;
            }
          } else l3 = c3.nodeName, !l3 || l3.toLowerCase() !== `input` || c3.type !== `checkbox` && c3.type !== `radio` ? r6 && En2(r6.elementType) && (_2 = Vr2) : _2 = Xr2;
          if (_2 &&= _2(e4, r6)) {
            Ir2(o4, _2, n7, i5);
            break a;
          }
          v3 && v3(e4, c3, r6);
        }
        switch (v3 = r6 ? Kt2(r6) : window, e4) {
          case `focusin`:
            (Fr2(v3) || v3.contentEditable === `true`) && (ci2 = v3, li2 = r6, ui2 = null);
            break;
          case `focusout`:
            ui2 = li2 = ci2 = null;
            break;
          case `mousedown`:
            di2 = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            di2 = false, fi2(o4, n7, i5);
            break;
          case `selectionchange`:
            if (si2) break;
          case `keydown`:
          case `keyup`:
            fi2(o4, n7, i5);
        }
        var y3;
        if (Cr2) b: {
          switch (e4) {
            case `compositionstart`:
              var b3 = `onCompositionStart`;
              break b;
            case `compositionend`:
              b3 = `onCompositionEnd`;
              break b;
            case `compositionupdate`:
              b3 = `onCompositionUpdate`;
              break b;
          }
          b3 = void 0;
        }
        else jr2 ? kr2(e4, n7) && (b3 = `onCompositionEnd`) : e4 === `keydown` && n7.keyCode === 229 && (b3 = `onCompositionStart`);
        b3 && (Er2 && n7.locale !== `ko` && (jr2 || b3 !== `onCompositionStart` ? b3 === `onCompositionEnd` && jr2 && (y3 = Gn2()) : (Hn2 = i5, Un2 = `value` in Hn2 ? Hn2.value : Hn2.textContent, jr2 = true)), v3 = Jf(r6, b3), 0 < v3.length && (b3 = new lr2(b3, e4, null, n7, i5), o4.push({
          event: b3,
          listeners: v3
        }), y3 ? b3.data = y3 : (y3 = Ar2(n7), y3 !== null && (b3.data = y3)))), (y3 = Tr2 ? Mr2(e4, n7) : Nr2(e4, n7)) && (b3 = Jf(r6, `onBeforeInput`), 0 < b3.length && (v3 = new lr2(`onBeforeInput`, `beforeinput`, null, n7, i5), o4.push({
          event: v3,
          listeners: b3
        }), v3.data = y3)), If(o4, e4, r6, n7, i5);
      }
      Vf(o4, t6);
    });
  }
  function qf(e4, t6, n7) {
    return {
      instance: e4,
      listener: t6,
      currentTarget: n7
    };
  }
  function Jf(e4, t6) {
    for (var n7 = t6 + `Capture`, r5 = []; e4 !== null; ) {
      var i4 = e4, a4 = i4.stateNode;
      if (i4 = i4.tag, i4 !== 5 && i4 !== 26 && i4 !== 27 || a4 === null || (i4 = Rn2(e4, n7), i4 != null && r5.unshift(qf(e4, i4, a4)), i4 = Rn2(e4, t6), i4 != null && r5.push(qf(e4, i4, a4))), e4.tag === 3) return r5;
      e4 = e4.return;
    }
    return [];
  }
  function Yf(e4) {
    if (e4 === null) return null;
    do
      e4 = e4.return;
    while (e4 && e4.tag !== 5 && e4.tag !== 27);
    return e4 || null;
  }
  function Xf(e4, t6, n7, r5, i4) {
    for (var a4 = t6._reactName, o3 = []; n7 !== null && n7 !== r5; ) {
      var s2 = n7, c2 = s2.alternate, l2 = s2.stateNode;
      if (s2 = s2.tag, c2 !== null && c2 === r5) break;
      s2 !== 5 && s2 !== 26 && s2 !== 27 || l2 === null || (c2 = l2, i4 ? (l2 = Rn2(n7, a4), l2 != null && o3.unshift(qf(n7, l2, c2))) : i4 || (l2 = Rn2(n7, a4), l2 != null && o3.push(qf(n7, l2, c2)))), n7 = n7.return;
    }
    o3.length !== 0 && e4.push({
      event: t6,
      listeners: o3
    });
  }
  var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
  function $f(e4) {
    return (typeof e4 == `string` ? e4 : `` + e4).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e4, t6) {
    return t6 = $f(t6), $f(e4) === t6;
  }
  function $(e4, t6, n7, r5, i4, o3) {
    switch (n7) {
      case `children`:
        if (typeof r5 == `string`) t6 === `body` || t6 === `textarea` && r5 === `` || Sn2(e4, r5);
        else if (typeof r5 == `number` || typeof r5 == `bigint`) t6 !== `body` && Sn2(e4, `` + r5);
        else return;
        break;
      case `className`:
        sn2(e4, `class`, r5);
        break;
      case `tabIndex`:
        sn2(e4, `tabindex`, r5);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        sn2(e4, n7, r5);
        break;
      case `style`:
        Tn2(e4, r5, o3);
        return;
      case `data`:
        if (t6 !== `object`) {
          sn2(e4, `data`, r5);
          break;
        }
      case `src`:
      case `href`:
        if (r5 === `` && (t6 !== `a` || n7 !== `href`)) {
          e4.removeAttribute(n7);
          break;
        }
        if (r5 == null || typeof r5 == `function` || typeof r5 == `symbol` || typeof r5 == `boolean`) {
          e4.removeAttribute(n7);
          break;
        }
        r5 = kn2(r5), e4.setAttribute(n7, r5);
        break;
      case `action`:
      case `formAction`:
        if (typeof r5 == `function`) {
          e4.setAttribute(n7, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o3 == `function` && (n7 === `formAction` ? (t6 !== `input` && $(e4, t6, `name`, i4.name, i4, null), $(e4, t6, `formEncType`, i4.formEncType, i4, null), $(e4, t6, `formMethod`, i4.formMethod, i4, null), $(e4, t6, `formTarget`, i4.formTarget, i4, null)) : ($(e4, t6, `encType`, i4.encType, i4, null), $(e4, t6, `method`, i4.method, i4, null), $(e4, t6, `target`, i4.target, i4, null))), r5 == null || typeof r5 == `symbol` || typeof r5 == `boolean`) {
          e4.removeAttribute(n7);
          break;
        }
        r5 = kn2(r5), e4.setAttribute(n7, r5);
        break;
      case `onClick`:
        r5 != null && (e4.onclick = An2);
        return;
      case `onScroll`:
        r5 != null && Q(`scroll`, e4);
        return;
      case `onScrollEnd`:
        r5 != null && Q(`scrollend`, e4);
        return;
      case `dangerouslySetInnerHTML`:
        if (r5 != null) {
          if (typeof r5 != `object` || !(`__html` in r5)) throw Error(a3(61));
          if (n7 = r5.__html, n7 != null) {
            if (i4.children != null) throw Error(a3(60));
            o3?.__html !== n7 && (e4.innerHTML = n7);
          }
        }
        break;
      case `multiple`:
        e4.multiple = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
        break;
      case `muted`:
        e4.muted = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r5 == null || typeof r5 == `function` || typeof r5 == `boolean` || typeof r5 == `symbol`) {
          e4.removeAttribute(`xlink:href`);
          break;
        }
        n7 = kn2(r5), e4.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n7);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r5 != null && typeof r5 != `function` && typeof r5 != `symbol` ? e4.setAttribute(n7, r5) : e4.removeAttribute(n7);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `credentialless`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r5 && typeof r5 != `function` && typeof r5 != `symbol` ? e4.setAttribute(n7, ``) : e4.removeAttribute(n7);
        break;
      case `capture`:
      case `download`:
        true === r5 ? e4.setAttribute(n7, ``) : false !== r5 && r5 != null && typeof r5 != `function` && typeof r5 != `symbol` ? e4.setAttribute(n7, r5) : e4.removeAttribute(n7);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r5 != null && typeof r5 != `function` && typeof r5 != `symbol` && !isNaN(r5) && 1 <= r5 ? e4.setAttribute(n7, r5) : e4.removeAttribute(n7);
        break;
      case `rowSpan`:
      case `start`:
        r5 == null || typeof r5 == `function` || typeof r5 == `symbol` || isNaN(r5) ? e4.removeAttribute(n7) : e4.setAttribute(n7, r5);
        break;
      case `popover`:
        Q(`beforetoggle`, e4), Q(`toggle`, e4), on2(e4, `popover`, r5);
        break;
      case `xlinkActuate`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r5);
        break;
      case `xlinkArcrole`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r5);
        break;
      case `xlinkRole`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:role`, r5);
        break;
      case `xlinkShow`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:show`, r5);
        break;
      case `xlinkTitle`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:title`, r5);
        break;
      case `xlinkType`:
        cn2(e4, `http://www.w3.org/1999/xlink`, `xlink:type`, r5);
        break;
      case `xmlBase`:
        cn2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r5);
        break;
      case `xmlLang`:
        cn2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r5);
        break;
      case `xmlSpace`:
        cn2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r5);
        break;
      case `is`:
        on2(e4, `is`, r5);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(2 < n7.length) || n7[0] !== `o` && n7[0] !== `O` || n7[1] !== `n` && n7[1] !== `N`) n7 = Dn2.get(n7) || n7, on2(e4, n7, r5);
        else return;
    }
    D2 = true;
  }
  function tp(e4, t6, n7, r5, i4, o3) {
    switch (n7) {
      case `style`:
        Tn2(e4, r5, o3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r5 != null) {
          if (typeof r5 != `object` || !(`__html` in r5)) throw Error(a3(61));
          if (n7 = r5.__html, n7 != null) {
            if (i4.children != null) throw Error(a3(60));
            o3?.__html !== n7 && (e4.innerHTML = n7);
          }
        }
        break;
      case `children`:
        if (typeof r5 == `string`) Sn2(e4, r5);
        else if (typeof r5 == `number` || typeof r5 == `bigint`) Sn2(e4, `` + r5);
        else return;
        break;
      case `onScroll`:
        r5 != null && Q(`scroll`, e4);
        return;
      case `onScrollEnd`:
        r5 != null && Q(`scrollend`, e4);
        return;
      case `onClick`:
        r5 != null && (e4.onclick = An2);
        return;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        return;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!Zt2.hasOwnProperty(n7)) a: {
          if (n7[0] === `o` && n7[1] === `n` && (i4 = n7.endsWith(`Capture`), o3 = n7.slice(2, i4 ? n7.length - 7 : void 0), t6 = e4[Ft2] || null, t6 = t6 == null ? null : t6[n7], typeof t6 == `function` && e4.removeEventListener(o3, t6, i4), typeof r5 == `function`)) {
            typeof t6 != `function` && t6 !== null && (n7 in e4 ? e4[n7] = null : e4.hasAttribute(n7) && e4.removeAttribute(n7)), e4.addEventListener(o3, r5, i4);
            break a;
          }
          D2 = true, n7 in e4 ? e4[n7] = r5 : true === r5 ? e4.setAttribute(n7, ``) : on2(e4, n7, r5);
        }
        return;
    }
    D2 = true;
  }
  function np(e4, t6, n7) {
    switch (t6) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q(`error`, e4), Q(`load`, e4);
        var r5 = false, i4 = false, o3;
        for (o3 in n7) if (n7.hasOwnProperty(o3)) {
          var s2 = n7[o3];
          if (s2 != null) switch (o3) {
            case `src`:
              r5 = true;
              break;
            case `srcSet`:
              i4 = true;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(a3(137, t6));
            default:
              $(e4, t6, o3, s2, n7, null);
          }
        }
        i4 && $(e4, t6, `srcSet`, n7.srcSet, n7, null), r5 && $(e4, t6, `src`, n7.src, n7, null);
        return;
      case `input`:
        Q(`invalid`, e4);
        var c2 = o3 = s2 = i4 = null, l2 = null, u2 = null;
        for (r5 in n7) if (n7.hasOwnProperty(r5)) {
          var d2 = n7[r5];
          if (d2 != null) switch (r5) {
            case `name`:
              i4 = d2;
              break;
            case `type`:
              s2 = d2;
              break;
            case `checked`:
              l2 = d2;
              break;
            case `defaultChecked`:
              u2 = d2;
              break;
            case `value`:
              o3 = d2;
              break;
            case `defaultValue`:
              c2 = d2;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (d2 != null) throw Error(a3(137, t6));
              break;
            default:
              $(e4, t6, r5, d2, n7, null);
          }
        }
        _n2(e4, o3, c2, l2, u2, s2, i4, false);
        return;
      case `select`:
        for (i4 in Q(`invalid`, e4), r5 = s2 = o3 = null, n7) if (n7.hasOwnProperty(i4) && (c2 = n7[i4], c2 != null)) switch (i4) {
          case `value`:
            o3 = c2;
            break;
          case `defaultValue`:
            s2 = c2;
            break;
          case `multiple`:
            r5 = c2;
          default:
            $(e4, t6, i4, c2, n7, null);
        }
        t6 = o3, n7 = s2, e4.multiple = !!r5, t6 == null ? n7 != null && yn2(e4, !!r5, n7, true) : yn2(e4, !!r5, t6, false);
        return;
      case `textarea`:
        for (s2 in Q(`invalid`, e4), o3 = i4 = r5 = null, n7) if (n7.hasOwnProperty(s2) && (c2 = n7[s2], c2 != null)) switch (s2) {
          case `value`:
            r5 = c2;
            break;
          case `defaultValue`:
            i4 = c2;
            break;
          case `children`:
            o3 = c2;
            break;
          case `dangerouslySetInnerHTML`:
            if (c2 != null) throw Error(a3(91));
            break;
          default:
            $(e4, t6, s2, c2, n7, null);
        }
        xn2(e4, r5, i4, o3);
        return;
      case `option`:
        for (l2 in n7) if (n7.hasOwnProperty(l2) && (r5 = n7[l2], r5 != null)) switch (l2) {
          case `selected`:
            e4.selected = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
            break;
          default:
            $(e4, t6, l2, r5, n7, null);
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e4), Q(`toggle`, e4), Q(`cancel`, e4), Q(`close`, e4);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e4);
        break;
      case `video`:
      case `audio`:
        for (r5 = 0; r5 < zf.length; r5++) Q(zf[r5], e4);
        break;
      case `image`:
        Q(`error`, e4), Q(`load`, e4);
        break;
      case `details`:
        Q(`toggle`, e4);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e4), Q(`load`, e4);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u2 in n7) if (n7.hasOwnProperty(u2) && (r5 = n7[u2], r5 != null)) switch (u2) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            throw Error(a3(137, t6));
          default:
            $(e4, t6, u2, r5, n7, null);
        }
        return;
      default:
        if (En2(t6)) {
          for (d2 in n7) n7.hasOwnProperty(d2) && (r5 = n7[d2], r5 !== void 0 && tp(e4, t6, d2, r5, n7, void 0));
          return;
        }
    }
    for (c2 in n7) n7.hasOwnProperty(c2) && (r5 = n7[c2], r5 != null && $(e4, t6, c2, r5, n7, null));
  }
  var rp = {};
  function ip(e4, t6, n7, r5) {
    switch (t6) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var i4 = null, o3 = null, s2 = null, c2 = null, l2 = null, u2 = null, d2 = null;
        for (m3 in n7) {
          var f2 = n7[m3];
          if (n7.hasOwnProperty(m3) && f2 != null) switch (m3) {
            case `checked`:
              break;
            case `value`:
              break;
            case `defaultValue`:
              l2 = f2;
            default:
              r5.hasOwnProperty(m3) || $(e4, t6, m3, null, r5, f2);
          }
        }
        for (var p2 in r5) {
          var m3 = r5[p2];
          if (f2 = n7[p2], r5.hasOwnProperty(p2) && (m3 != null || f2 != null)) switch (p2) {
            case `type`:
              m3 !== f2 && (D2 = true), o3 = m3;
              break;
            case `name`:
              m3 !== f2 && (D2 = true), i4 = m3;
              break;
            case `checked`:
              m3 !== f2 && (D2 = true), u2 = m3;
              break;
            case `defaultChecked`:
              m3 !== f2 && (D2 = true), d2 = m3;
              break;
            case `value`:
              m3 !== f2 && (D2 = true), s2 = m3;
              break;
            case `defaultValue`:
              m3 !== f2 && (D2 = true), c2 = m3;
              break;
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m3 != null) throw Error(a3(137, t6));
              break;
            default:
              m3 !== f2 && $(e4, t6, p2, m3, r5, f2);
          }
        }
        gn2(e4, s2, c2, l2, u2, d2, o3, i4);
        return;
      case `select`:
        for (o3 in m3 = s2 = c2 = p2 = null, n7) if (l2 = n7[o3], n7.hasOwnProperty(o3) && l2 != null) switch (o3) {
          case `value`:
            break;
          case `multiple`:
            m3 = l2;
          default:
            r5.hasOwnProperty(o3) || $(e4, t6, o3, null, r5, l2);
        }
        for (i4 in r5) if (o3 = r5[i4], l2 = n7[i4], r5.hasOwnProperty(i4) && (o3 != null || l2 != null)) switch (i4) {
          case `value`:
            o3 !== l2 && (D2 = true), p2 = o3;
            break;
          case `defaultValue`:
            o3 !== l2 && (D2 = true), c2 = o3;
            break;
          case `multiple`:
            o3 !== l2 && (D2 = true), s2 = o3;
          default:
            o3 !== l2 && $(e4, t6, i4, o3, r5, l2);
        }
        t6 = c2, n7 = s2, r5 = m3, p2 == null ? !!r5 != !!n7 && (t6 == null ? yn2(e4, !!n7, n7 ? [] : ``, false) : yn2(e4, !!n7, t6, true)) : yn2(e4, !!n7, p2, false);
        return;
      case `textarea`:
        for (c2 in m3 = p2 = null, n7) if (i4 = n7[c2], n7.hasOwnProperty(c2) && i4 != null && !r5.hasOwnProperty(c2)) switch (c2) {
          case `value`:
            break;
          case `children`:
            break;
          default:
            $(e4, t6, c2, null, r5, i4);
        }
        for (s2 in r5) if (i4 = r5[s2], o3 = n7[s2], r5.hasOwnProperty(s2) && (i4 != null || o3 != null)) switch (s2) {
          case `value`:
            i4 !== o3 && (D2 = true), p2 = i4;
            break;
          case `defaultValue`:
            i4 !== o3 && (D2 = true), m3 = i4;
            break;
          case `children`:
            break;
          case `dangerouslySetInnerHTML`:
            if (i4 != null) throw Error(a3(91));
            break;
          default:
            i4 !== o3 && $(e4, t6, s2, i4, r5, o3);
        }
        bn2(e4, p2, m3);
        return;
      case `option`:
        for (var h2 in n7) if (p2 = n7[h2], n7.hasOwnProperty(h2) && p2 != null && !r5.hasOwnProperty(h2)) switch (h2) {
          case `selected`:
            e4.selected = false;
            break;
          default:
            $(e4, t6, h2, null, r5, p2);
        }
        for (l2 in r5) if (p2 = r5[l2], m3 = n7[l2], r5.hasOwnProperty(l2) && p2 !== m3 && (p2 != null || m3 != null)) switch (l2) {
          case `selected`:
            p2 !== m3 && (D2 = true), e4.selected = p2 && typeof p2 != `function` && typeof p2 != `symbol`;
            break;
          default:
            $(e4, t6, l2, p2, r5, m3);
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g3 in n7) p2 = n7[g3], n7.hasOwnProperty(g3) && p2 != null && !r5.hasOwnProperty(g3) && $(e4, t6, g3, null, r5, p2);
        for (u2 in r5) if (p2 = r5[u2], m3 = n7[u2], r5.hasOwnProperty(u2) && p2 !== m3 && (p2 != null || m3 != null)) switch (u2) {
          case `children`:
          case `dangerouslySetInnerHTML`:
            if (p2 != null) throw Error(a3(137, t6));
            break;
          default:
            $(e4, t6, u2, p2, r5, m3);
        }
        return;
      default:
        if (En2(t6)) {
          for (var _2 in n7) p2 = n7[_2], n7.hasOwnProperty(_2) && p2 !== void 0 && !r5.hasOwnProperty(_2) && tp(e4, t6, _2, void 0, r5, p2);
          for (d2 in r5) p2 = r5[d2], m3 = n7[d2], !r5.hasOwnProperty(d2) || p2 === m3 || p2 === void 0 && m3 === void 0 || tp(e4, t6, d2, p2, r5, m3);
          return;
        }
    }
    for (var v3 in n7) p2 = n7[v3], n7.hasOwnProperty(v3) && p2 != null && !r5.hasOwnProperty(v3) && $(e4, t6, v3, null, r5, p2);
    for (f2 in r5) p2 = r5[f2], m3 = n7[f2], !r5.hasOwnProperty(f2) || p2 === m3 || p2 == null && m3 == null || $(e4, t6, f2, p2, r5, m3);
  }
  function ap(e4) {
    switch (e4) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function op() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e4 = 0, t6 = 0, n7 = performance.getEntriesByType(`resource`), r5 = 0; r5 < n7.length; r5++) {
        var i4 = n7[r5], a4 = i4.transferSize, o3 = i4.initiatorType, s2 = i4.duration;
        if (a4 && s2 && ap(o3)) {
          for (o3 = 0, s2 = i4.responseEnd, r5 += 1; r5 < n7.length; r5++) {
            var c2 = n7[r5], l2 = c2.startTime;
            if (l2 > s2) break;
            var u2 = c2.transferSize, d2 = c2.initiatorType;
            u2 && ap(d2) && (c2 = c2.responseEnd, o3 += u2 * (c2 < s2 ? 1 : (s2 - l2) / (c2 - l2)));
          }
          if (--r5, t6 += 8 * (a4 + o3) / (i4.duration / 1e3), e4++, 10 < e4) break;
        }
      }
      if (0 < e4) return t6 / e4 / 1e6;
    }
    return navigator.connection && (e4 = navigator.connection.downlink, typeof e4 == `number`) ? e4 : 5;
  }
  var sp = null, cp = null;
  function lp(e4) {
    return e4.nodeType === 9 ? e4 : e4.ownerDocument;
  }
  function up(e4) {
    switch (e4) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e4, t6) {
    if (e4 === 0) switch (t6) {
      case `svg`:
        return 1;
      case `math`:
        return 2;
      default:
        return 0;
    }
    return e4 === 1 && t6 === `foreignObject` ? 0 : e4;
  }
  function fp(e4, t6, n7, r5) {
    return n7 = lp(n7).createElement(e4), n7[Pt2] = r5, n7[Ft2] = t6, np(n7, e4, t6), Jt2(n7), n7;
  }
  function pp(e4, t6) {
    return e4 === `textarea` || e4 === `noscript` || typeof t6.children == `string` || typeof t6.children == `number` || typeof t6.children == `bigint` || typeof t6.dangerouslySetInnerHTML == `object` && t6.dangerouslySetInnerHTML !== null && t6.dangerouslySetInnerHTML.__html != null;
  }
  var mp = null;
  function hp() {
    var e4 = window.event;
    return e4 && e4.type === `popstate` ? e4 !== mp && (mp = e4, true) : (mp = null, false);
  }
  var gp = typeof setTimeout == `function` ? setTimeout : void 0, _p = typeof clearTimeout == `function` ? clearTimeout : void 0, vp = typeof Promise == `function` ? Promise : void 0, yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp, bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : function(e4) {
    return vp.resolve(null).then(e4).catch(xp);
  };
  function xp(e4) {
    setTimeout(function() {
      throw e4;
    });
  }
  function Sp(e4) {
    return e4 === `head`;
  }
  function Cp(e4, t6) {
    var n7 = t6, r5 = 0;
    do {
      var i4 = n7.nextSibling;
      if (e4.removeChild(n7), i4 && i4.nodeType === 8) {
        if (n7 = i4.data, n7 === `/$` || n7 === `/&`) {
          if (r5 === 0) {
            e4.removeChild(i4), Hh(t6);
            return;
          }
          r5--;
        } else if (n7 === `$` || n7 === `$?` || n7 === `$~` || n7 === `$!` || n7 === `&`) r5++;
        else if (n7 === `html`) _m(e4.ownerDocument.documentElement);
        else if (n7 === `head`) {
          n7 = e4.ownerDocument.head, _m(n7);
          for (var a4 = n7.firstChild; a4; ) {
            var o3 = a4.nextSibling, s2 = a4.nodeName;
            a4[Vt2] || s2 === `SCRIPT` || s2 === `STYLE` || s2 === `LINK` && a4.rel.toLowerCase() === `stylesheet` || n7.removeChild(a4), a4 = o3;
          }
        } else n7 === `body` && _m(e4.ownerDocument.body);
      }
      n7 = i4;
    } while (n7);
    Hh(t6);
  }
  function wp(e4, t6) {
    var n7 = e4;
    e4 = 0;
    do {
      var r5 = n7.nextSibling;
      if (n7.nodeType === 1 ? t6 ? (n7._stashedDisplay = n7.style.display, n7.style.display = `none`) : (n7.style.display = n7._stashedDisplay || ``, n7.getAttribute(`style`) === `` && n7.removeAttribute(`style`)) : n7.nodeType === 3 && (t6 ? (n7._stashedText = n7.nodeValue, n7.nodeValue = ``) : n7.nodeValue = n7._stashedText || ``), r5 && r5.nodeType === 8) {
        if (n7 = r5.data, n7 === `/$`) {
          if (e4 === 0) break;
          e4--;
        } else n7 !== `$` && n7 !== `$?` && n7 !== `$~` && n7 !== `$!` || e4++;
      }
      n7 = r5;
    } while (n7);
  }
  function Tp(e4, t6, n7) {
    if (t6 = CSS.escape(t6) === t6 ? t6 : `r-` + btoa(t6).replace(/=/g, ``), e4.style.viewTransitionName = t6, n7 != null && (e4.style.viewTransitionClass = n7), n7 = getComputedStyle(e4), n7.display === `inline`) {
      if (t6 = e4.getClientRects(), t6.length === 1) var r5 = 1;
      else for (var i4 = r5 = 0; i4 < t6.length; i4++) {
        var a4 = t6[i4];
        0 < a4.width && 0 < a4.height && r5++;
      }
      r5 === 1 && (e4 = e4.style, e4.display = t6.length === 1 ? `inline-block` : `block`, e4.marginTop = `-` + n7.paddingTop, e4.marginBottom = `-` + n7.paddingBottom);
    }
  }
  function Ep(e4, t6) {
    e4 = e4.style, t6 = t6.style;
    var n7 = t6 == null ? null : t6.hasOwnProperty(`viewTransitionName`) ? t6.viewTransitionName : t6.hasOwnProperty(`view-transition-name`) ? t6[`view-transition-name`] : null;
    e4.viewTransitionName = n7 == null || typeof n7 == `boolean` ? `` : (`` + n7).trim(), n7 = t6 == null ? null : t6.hasOwnProperty(`viewTransitionClass`) ? t6.viewTransitionClass : t6.hasOwnProperty(`view-transition-class`) ? t6[`view-transition-class`] : null, e4.viewTransitionClass = n7 == null || typeof n7 == `boolean` ? `` : (`` + n7).trim(), e4.display === `inline-block` && (t6 == null ? e4.display = e4.margin = `` : (n7 = t6.display, e4.display = n7 == null || typeof n7 == `boolean` ? `` : n7, n7 = t6.margin, n7 == null ? (n7 = t6.hasOwnProperty(`marginTop`) ? t6.marginTop : t6[`margin-top`], e4.marginTop = n7 == null || typeof n7 == `boolean` ? `` : n7, t6 = t6.hasOwnProperty(`marginBottom`) ? t6.marginBottom : t6[`margin-bottom`], e4.marginBottom = t6 == null || typeof t6 == `boolean` ? `` : t6) : e4.margin = n7));
  }
  function Dp(e4, t6, n7) {
    return n7 = n7.ownerDocument.defaultView, {
      rect: e4,
      abs: t6.position === `absolute` || t6.position === `fixed`,
      clip: t6.clipPath !== `none` || t6.overflow !== `visible` || t6.filter !== `none` || t6.mask !== `none` || t6.mask !== `none` || t6.borderRadius !== `0px`,
      view: 0 <= e4.bottom && 0 <= e4.right && e4.top <= n7.innerHeight && e4.left <= n7.innerWidth
    };
  }
  function Op(e4) {
    return Dp(e4.getBoundingClientRect(), getComputedStyle(e4), e4);
  }
  function kp(e4) {
    var t6 = e4.getBoundingClientRect();
    t6 = new DOMRect(t6.x + 2e4, t6.y + 2e4, t6.width, t6.height);
    var n7 = getComputedStyle(e4);
    return Dp(t6, n7, e4);
  }
  function Ap(e4) {
    return e4.documentElement.clientHeight;
  }
  function jp(e4) {
    this.addEventListener(`load`, e4), this.addEventListener(`error`, e4);
  }
  function Mp(e4, t6, n7, r5, i4, a4, o3, s2, c2) {
    var l2 = t6.nodeType === 9 ? t6 : t6.ownerDocument;
    try {
      var u2 = l2.startViewTransition({
        update: function() {
          var t7 = l2.defaultView, n8 = t7.navigation && t7.navigation.transition, o4 = l2.fonts.status;
          r5();
          var s3 = [];
          if (o4 === `loaded` && (Ap(l2), l2.fonts.status === `loading` && s3.push(l2.fonts.ready)), o4 = s3.length, e4 !== null) for (var c3 = e4.suspenseyImages, u3 = 0, d3 = 0; d3 < c3.length; d3++) {
            var f2 = c3[d3];
            if (!f2.complete) {
              var p2 = f2.getBoundingClientRect();
              if (0 < p2.bottom && 0 < p2.right && p2.top < t7.innerHeight && p2.left < t7.innerWidth) {
                if (u3 += Xm(f2), u3 > $m) {
                  s3.length = o4;
                  break;
                }
                f2 = new Promise(jp.bind(f2)), s3.push(f2);
              }
            }
          }
          if (0 < s3.length) return t7 = Promise.race([Promise.all(s3), new Promise(function(e5) {
            return setTimeout(e5, 500);
          })]).then(i4, i4), (n8 ? Promise.allSettled([n8.finished, t7]) : t7).then(a4, a4);
          if (i4(), n8) return n8.finished.then(a4, a4);
          a4();
        },
        types: n7
      });
      l2.__reactViewTransition = u2;
      var d2 = [];
      return u2.ready.then(function() {
        for (var e5 = l2.documentElement.getAnimations({
          subtree: true
        }), t7 = 0; t7 < e5.length; t7++) {
          var n8 = e5[t7], r6 = n8.effect, i5 = r6.pseudoElement;
          if (i5 != null && i5.startsWith(`::view-transition`)) {
            d2.push(n8), n8 = r6.getKeyframes();
            for (var a5 = i5 = void 0, s3 = true, c3 = 0; c3 < n8.length; c3++) {
              var u3 = n8[c3], f2 = u3.width;
              if (i5 === void 0) i5 = f2;
              else if (i5 !== f2) {
                s3 = false;
                break;
              }
              if (f2 = u3.height, a5 === void 0) a5 = f2;
              else if (a5 !== f2) {
                s3 = false;
                break;
              }
              delete u3.width, delete u3.height, u3.transform === `none` && delete u3.transform;
            }
            s3 && i5 !== void 0 && a5 !== void 0 && (r6.setKeyframes(n8), s3 = getComputedStyle(r6.target, r6.pseudoElement), s3.width !== i5 || s3.height !== a5) && (s3 = n8[0], s3.width = i5, s3.height = a5, s3 = n8[n8.length - 1], s3.width = i5, s3.height = a5, r6.setKeyframes(n8));
          }
        }
        o3();
      }, function(e5) {
        l2.__reactViewTransition === u2 && (l2.__reactViewTransition = null);
        try {
          if (typeof e5 == `object` && e5) switch (e5.name) {
            case `InvalidStateError`:
              (e5.message === `View transition was skipped because document visibility state is hidden.` || e5.message === `Skipping view transition because document visibility state has become hidden.` || e5.message === `Skipping view transition because viewport size changed.` || e5.message === `Transition was aborted because of invalid state`) && (e5 = null);
          }
          e5 !== null && c2(e5);
        } finally {
          r5(), i4(), o3();
        }
      }), u2.finished.finally(function() {
        for (var e5 = 0; e5 < d2.length; e5++) d2[e5].cancel();
        l2.__reactViewTransition === u2 && (l2.__reactViewTransition = null), s2();
      }), u2;
    } catch {
      return r5(), i4(), o3(), null;
    }
  }
  function Np(e4, t6) {
    this._scope = document.documentElement, this._selector = `::view-transition-` + e4 + `(` + t6 + `)`;
  }
  Np.prototype.animate = function(e4, t6) {
    return t6 = typeof t6 == `number` ? {
      duration: t6
    } : S({}, t6), t6.pseudoElement = this._selector, this._scope.animate(e4, t6);
  }, Np.prototype.getAnimations = function() {
    for (var e4 = this._scope, t6 = this._selector, n7 = e4.getAnimations({
      subtree: true
    }), r5 = [], i4 = 0; i4 < n7.length; i4++) {
      var a4 = n7[i4].effect;
      a4 !== null && a4.target === e4 && a4.pseudoElement === t6 && r5.push(n7[i4]);
    }
    return r5;
  }, Np.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Pp(e4) {
    return {
      name: e4,
      group: new Np(`group`, e4),
      imagePair: new Np(`image-pair`, e4),
      old: new Np(`old`, e4),
      new: new Np(`new`, e4)
    };
  }
  function Fp(e4) {
    this._fragmentFiber = e4, this._observers = this._eventListeners = null;
  }
  Fp.prototype.addEventListener = function(e4, t6, n7) {
    var r5 = null, i4 = null;
    if (!(n7 != null && typeof n7 != `boolean` && (r5 = n7.signal || null, r5 !== null && r5.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var a4 = this._eventListeners;
      if (Bp(a4, e4, t6, n7) === -1) {
        var o3 = this, s2 = t6;
        n7 != null && typeof n7 != `boolean` && true === n7.once && (s2 = function(r6) {
          o3.removeEventListener(e4, t6, n7), typeof t6 == `function` ? t6.call(this, r6) : t6.handleEvent(r6);
        }), r5 !== null && (i4 = o3.removeEventListener.bind(o3, e4, t6, n7), r5.addEventListener(`abort`, i4, {
          once: true
        }), i4 = r5.removeEventListener.bind(r5, `abort`, i4)), r5 = Rp(n7), a4.push({
          type: e4,
          listener: t6,
          optionsOrUseCapture: n7,
          attachedListener: s2,
          cleanup: i4
        }), p(this._fragmentFiber.child, false, Ip, e4, s2, r5);
      }
      this._eventListeners = a4;
    }
  };
  function Ip(e4, t6, n7, r5) {
    return b2(e4).addEventListener(t6, n7, r5), false;
  }
  Fp.prototype.removeEventListener = function(e4, t6, n7) {
    var r5 = this._eventListeners;
    if (r5 !== null && (t6 = Bp(r5, e4, t6, n7), t6 !== -1)) {
      var i4 = r5[t6];
      n7 = i4.attachedListener;
      var a4 = i4.cleanup;
      i4 = Rp(i4.optionsOrUseCapture), p(this._fragmentFiber.child, false, Lp, e4, n7, i4), r5.splice(t6, 1), a4 !== null && a4();
    }
  };
  function Lp(e4, t6, n7, r5) {
    return b2(e4).removeEventListener(t6, n7, r5), false;
  }
  function Rp(e4) {
    return e4 != null && typeof e4 != `boolean` && (true === e4.once || e4.signal instanceof AbortSignal) ? {
      capture: e4.capture,
      passive: e4.passive
    } : e4;
  }
  function zp(e4) {
    return e4 == null ? `c=0` : typeof e4 == `boolean` ? `c=` + (e4 ? `1` : `0`) : `c=` + (e4.capture ? `1` : `0`);
  }
  function Bp(e4, t6, n7, r5) {
    if (e4.length === 0) return -1;
    r5 = zp(r5);
    for (var i4 = 0; i4 < e4.length; i4++) {
      var a4 = e4[i4];
      if (a4.type === t6 && a4.listener === n7 && zp(a4.optionsOrUseCapture) === r5) return i4;
    }
    return -1;
  }
  Fp.prototype.dispatchEvent = function(e4) {
    var t6 = m2(this._fragmentFiber);
    if (t6 === null) return true;
    t6 = b2(t6);
    var n7 = this._eventListeners;
    if (n7 !== null && 0 < n7.length || !e4.bubbles) {
      var r5 = t6.nodeType === 9 ? t6.createComment(``) : document.createTextNode(``);
      if (n7) for (var i4 = 0; i4 < n7.length; i4++) {
        var a4 = n7[i4];
        r5.addEventListener(a4.type, a4.attachedListener, Rp(a4.optionsOrUseCapture));
      }
      if (t6.appendChild(r5), e4 = r5.dispatchEvent(e4), n7) for (i4 = 0; i4 < n7.length; i4++) a4 = n7[i4], r5.removeEventListener(a4.type, a4.attachedListener, Rp(a4.optionsOrUseCapture));
      return t6.removeChild(r5), e4;
    }
    return t6.dispatchEvent(e4);
  }, Fp.prototype.focus = function(e4) {
    p(this._fragmentFiber.child, true, Vp, e4, void 0, void 0);
  };
  function Vp(e4, t6) {
    return e4.tag !== 6 && (e4 = b2(e4), pm(e4, t6));
  }
  Fp.prototype.focusLast = function(e4) {
    var t6 = [];
    p(this._fragmentFiber.child, true, Hp, t6, void 0, void 0);
    for (var n7 = t6.length - 1; 0 <= n7 && !Vp(t6[n7], e4); n7--) ;
  };
  function Hp(e4, t6) {
    return t6.push(e4), false;
  }
  Fp.prototype.blur = function() {
    var e4 = m2(this._fragmentFiber);
    e4 !== null && (e4 = b2(e4), e4 = lp(e4).activeElement, e4 !== null && p(this._fragmentFiber.child, false, Up, e4, void 0, void 0));
  };
  function Up(e4, t6) {
    return e4.tag !== 6 && (e4 = b2(e4), e4 === t6 || e4.contains(t6) ? (t6.blur(), true) : false);
  }
  Fp.prototype.observeUsing = function(e4) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e4), p(this._fragmentFiber.child, false, Wp, e4, void 0, void 0);
  };
  function Wp(e4, t6) {
    return e4.tag !== 6 && (e4 = b2(e4), t6.observe(e4), false);
  }
  Fp.prototype.unobserveUsing = function(e4) {
    var t6 = this._observers;
    if (t6 !== null && t6.has(e4)) {
      t6.delete(e4), p(this._fragmentFiber.child, false, Gp, e4, void 0, void 0);
      for (var n7 = t6 = 0; n7 < Kp.length; n7++) {
        var r5 = Kp[n7];
        r5.fragmentInstance === this && r5.observer === e4 ? e4.unobserve(r5.instance) : Kp[t6++] = r5;
      }
      Kp.length = t6;
    }
  };
  function Gp(e4, t6) {
    return e4.tag !== 6 && (e4 = b2(e4), t6.unobserve(e4), false);
  }
  var Kp = [], qp = false;
  function Jp(e4, t6, n7) {
    Kp.push({
      fragmentInstance: e4,
      observer: t6,
      instance: n7
    }), qp || (qp = true, mm(function() {
      qp = false;
      var e5 = Kp;
      Kp = [];
      for (var t7 = 0; t7 < e5.length; t7++) {
        var n8 = e5[t7];
        n8.observer.unobserve(n8.instance);
      }
    }));
  }
  Fp.prototype.getClientRects = function() {
    var e4 = [];
    return p(this._fragmentFiber.child, false, Yp, e4, void 0, void 0), e4;
  };
  function Yp(e4, t6) {
    if (e4.tag === 6) {
      e4 = e4.stateNode;
      var n7 = e4.ownerDocument.createRange();
      n7.selectNodeContents(e4), t6.push.apply(t6, n7.getClientRects());
    } else e4 = b2(e4), t6.push.apply(t6, e4.getClientRects());
    return false;
  }
  Fp.prototype.getRootNode = function(e4) {
    var t6 = m2(this._fragmentFiber);
    return t6 === null ? this : b2(t6).getRootNode(e4);
  }, Fp.prototype.compareDocumentPosition = function(e4) {
    var t6 = m2(this._fragmentFiber);
    if (t6 === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n7 = [];
    p(this._fragmentFiber.child, false, Hp, n7, void 0, void 0);
    var r5 = b2(t6);
    if (n7.length === 0) {
      if (n7 = r5, g2(this._fragmentFiber)) {
        a: {
          for (t6 = this._fragmentFiber.return; t6 !== null; ) {
            if (t6.tag === 4) {
              t6 = t6.stateNode.containerInfo;
              break a;
            }
            if (t6.tag === 3 || t6.tag === 5 || t6.tag === 27) break;
            t6 = t6.return;
          }
          t6 = null;
        }
        t6 != null && (n7 = t6);
      }
      t6 = this._fragmentFiber;
      var i4 = r5 = n7.compareDocumentPosition(e4);
      return n7 === e4 ? i4 = Node.DOCUMENT_POSITION_CONTAINS : r5 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n7 = v2(t6)[1], n7 === null ? i4 = Node.DOCUMENT_POSITION_PRECEDING : (e4 = b2(n7).compareDocumentPosition(e4), i4 = e4 === 0 || e4 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i4 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t6 = b2(n7[0]), i4 = b2(n7[n7.length - 1]);
    var a4 = g2(this._fragmentFiber) ? t6.parentElement : r5;
    if (a4 == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r5 = a4.compareDocumentPosition(t6) & Node.DOCUMENT_POSITION_CONTAINED_BY, a4 = a4.compareDocumentPosition(i4) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o3 = t6.compareDocumentPosition(e4), s2 = i4.compareDocumentPosition(e4), c2 = o3 & Node.DOCUMENT_POSITION_CONTAINED_BY || s2 & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return s2 = r5 && a4 && o3 & Node.DOCUMENT_POSITION_FOLLOWING && s2 & Node.DOCUMENT_POSITION_PRECEDING, t6 = r5 && t6 === e4 || a4 && i4 === e4 || c2 || s2 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r5 && t6 === e4 || !a4 && i4 === e4 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o3, t6 & Node.DOCUMENT_POSITION_DISCONNECTED || t6 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t6, this._fragmentFiber, n7[0], n7[n7.length - 1], e4) ? t6 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Xp(e4, t6, n7, r5, i4) {
    var a4 = Wt2(i4);
    if (e4 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n7 = !!a4) a: {
        for (; a4 !== null; ) {
          if (a4.tag === 7 && (a4 === t6 || a4.alternate === t6)) {
            n7 = true;
            break a;
          }
          a4 = a4.return;
        }
        n7 = false;
      }
      return n7;
    }
    if (e4 & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a4 === null) return a4 = i4.ownerDocument, i4 === a4 || i4 === a4.documentElement || i4 === a4.body;
      a: {
        for (a4 = t6, t6 = m2(t6); a4 !== null; ) {
          if (!(a4.tag !== 5 && a4.tag !== 3 && a4.tag !== 27 || a4 !== t6 && a4.alternate !== t6)) {
            a4 = true;
            break a;
          }
          a4 = a4.return;
        }
        a4 = false;
      }
      return a4;
    }
    return e4 & Node.DOCUMENT_POSITION_PRECEDING ? ((t6 = !!a4) && !(t6 = a4 === n7) && (t6 = ie(n7, a4, re), t6 === null ? t6 = false : (p(t6, true, te, a4, n7), a4 = ee, ee = null, t6 = a4 !== null)), t6) : e4 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t6 = !!a4) && !(t6 = a4 === r5) && (t6 = ie(r5, a4, re), t6 === null ? t6 = false : (p(t6, true, ne, a4, r5), a4 = ee, x = ee = null, t6 = a4 !== null)), t6) : false;
  }
  function Zp(e4, t6) {
    var n7 = e4.ownerDocument.createRange();
    n7.selectNodeContents(e4), e4 = n7.getBoundingClientRect(), window.scrollTo(window.scrollX + e4.left, t6 ? window.scrollY + e4.top : window.scrollY + e4.bottom - window.innerHeight);
  }
  Fp.prototype.scrollIntoView = function(e4) {
    if (typeof e4 == `object`) throw Error(a3(566));
    var t6 = [];
    p(this._fragmentFiber.child, false, Hp, t6, void 0, void 0);
    var n7 = false !== e4;
    if (t6.length === 0) {
      var r5 = v2(this._fragmentFiber);
      if (r5 = n7 ? r5[1] || r5[0] || m2(this._fragmentFiber) : r5[0] || r5[1], r5 === null) return;
      if (r5.tag === 6) {
        e4 = b2(r5), Zp(e4, n7);
        return;
      }
      if (r5 = b2(r5), r5.nodeType !== 9) {
        if (r5.nodeType === 11) {
          n7 = `host` in r5 ? r5.host : null, n7 !== null && n7.scrollIntoView(e4);
          return;
        }
        r5.scrollIntoView(e4);
      }
    }
    for (r5 = n7 ? t6.length - 1 : 0; r5 !== (n7 ? -1 : t6.length); ) {
      var i4 = t6[r5];
      i4.tag === 6 ? (i4 = b2(i4), Zp(i4, n7)) : b2(i4).scrollIntoView(e4), r5 += n7 ? -1 : 1;
    }
  };
  function Qp(e4, t6) {
    return e4 = b2(e4), $p(e4, t6), false;
  }
  function $p(e4, t6) {
    e4.reactFragments ??= /* @__PURE__ */ new Set(), e4.reactFragments.add(t6);
  }
  function em(e4, t6) {
    var n7 = t6._eventListeners;
    if (n7 !== null) for (var r5 = 0; r5 < n7.length; r5++) {
      var i4 = n7[r5];
      e4.addEventListener(i4.type, i4.attachedListener, Rp(i4.optionsOrUseCapture));
    }
    e4.nodeType !== 3 && (n7 = t6._observers, n7 !== null && n7.forEach(function(n8) {
      for (var r6 = 0, i5 = 0; i5 < Kp.length; i5++) {
        var a4 = Kp[i5];
        (a4.fragmentInstance !== t6 || a4.observer !== n8 || a4.instance !== e4) && (Kp[r6++] = a4);
      }
      Kp.length = r6, n8.observe(e4);
    }), $p(e4, t6));
  }
  function tm(e4, t6) {
    var n7 = t6._eventListeners;
    if (n7 !== null) for (var r5 = 0; r5 < n7.length; r5++) {
      var i4 = n7[r5];
      e4.removeEventListener(i4.type, i4.attachedListener, Rp(i4.optionsOrUseCapture));
    }
    e4.nodeType !== 3 && (n7 = t6._observers, n7 !== null && n7.forEach(function(n8) {
      typeof n8.rootMargin == `string` ? Jp(t6, n8, e4) : n8.unobserve(e4);
    }), e4.reactFragments != null && e4.reactFragments.delete(t6));
  }
  function nm(e4) {
    var t6 = e4.firstChild;
    for (t6 && t6.nodeType === 10 && (t6 = t6.nextSibling); t6; ) {
      var n7 = t6;
      switch (t6 = t6.nextSibling, n7.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n7), Ut2(n7);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n7.rel.toLowerCase() === `stylesheet`) continue;
      }
      e4.removeChild(n7);
    }
  }
  function rm(e4, t6, n7, r5) {
    for (; e4.nodeType === 1; ) {
      var i4 = n7;
      if (e4.nodeName.toLowerCase() !== t6.toLowerCase()) {
        if (!r5 && (e4.nodeName !== `INPUT` || e4.type !== `hidden`)) break;
      } else if (!r5) {
        if (t6 === `input` && e4.type === `hidden`) {
          var a4 = i4.name == null ? null : `` + i4.name;
          if (i4.type === `hidden` && e4.getAttribute(`name`) === a4) return e4;
        } else return e4;
      } else if (!e4[Vt2]) switch (t6) {
        case `meta`:
          if (!e4.hasAttribute(`itemprop`)) break;
          return e4;
        case `link`:
          if (a4 = e4.getAttribute(`rel`), a4 === `stylesheet` && e4.hasAttribute(`data-precedence`) || a4 !== i4.rel || e4.getAttribute(`href`) !== (i4.href == null || i4.href === `` ? null : i4.href) || e4.getAttribute(`crossorigin`) !== (i4.crossOrigin == null ? null : i4.crossOrigin) || e4.getAttribute(`title`) !== (i4.title == null ? null : i4.title)) break;
          return e4;
        case `style`:
          if (e4.hasAttribute(`data-precedence`)) break;
          return e4;
        case `script`:
          if (a4 = e4.getAttribute(`src`), (a4 !== (i4.src == null ? null : i4.src) || e4.getAttribute(`type`) !== (i4.type == null ? null : i4.type) || e4.getAttribute(`crossorigin`) !== (i4.crossOrigin == null ? null : i4.crossOrigin)) && a4 && e4.hasAttribute(`async`) && !e4.hasAttribute(`itemprop`)) break;
          return e4;
        default:
          return e4;
      }
      if (e4 = lm(e4.nextSibling), e4 === null) break;
    }
    return null;
  }
  function im(e4, t6, n7) {
    if (t6 === ``) return null;
    for (; e4.nodeType !== 3; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !n7 || (e4 = lm(e4.nextSibling), e4 === null)) return null;
    return e4;
  }
  function am(e4, t6) {
    for (; e4.nodeType !== 8; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !t6 || (e4 = lm(e4.nextSibling), e4 === null)) return null;
    return e4;
  }
  function om(e4) {
    return e4.data === `$?` || e4.data === `$~`;
  }
  function sm(e4) {
    return e4.data === `$!` || e4.data === `$?` && e4.ownerDocument.readyState !== `loading`;
  }
  function cm(e4, t6) {
    var n7 = e4.ownerDocument;
    if (e4.data === `$~`) e4._reactRetry = t6;
    else if (e4.data !== `$?` || n7.readyState !== `loading`) t6();
    else {
      var r5 = function() {
        t6(), n7.removeEventListener(`DOMContentLoaded`, r5);
      };
      n7.addEventListener(`DOMContentLoaded`, r5), e4._reactRetry = r5;
    }
  }
  function lm(e4) {
    for (; e4 != null; e4 = e4.nextSibling) {
      var t6 = e4.nodeType;
      if (t6 === 1 || t6 === 3) break;
      if (t6 === 8) {
        if (t6 = e4.data, t6 === `$` || t6 === `$!` || t6 === `$?` || t6 === `$~` || t6 === `&` || t6 === `F!` || t6 === `F`) break;
        if (t6 === `/$` || t6 === `/&`) return null;
      }
    }
    return e4;
  }
  var um = null;
  function dm(e4) {
    e4 = e4.nextSibling;
    for (var t6 = 0; e4; ) {
      if (e4.nodeType === 8) {
        var n7 = e4.data;
        if (n7 === `/$` || n7 === `/&`) {
          if (t6 === 0) return lm(e4.nextSibling);
          t6--;
        } else n7 !== `$` && n7 !== `$!` && n7 !== `$?` && n7 !== `$~` && n7 !== `&` || t6++;
      }
      e4 = e4.nextSibling;
    }
    return null;
  }
  function fm(e4) {
    e4 = e4.previousSibling;
    for (var t6 = 0; e4; ) {
      if (e4.nodeType === 8) {
        var n7 = e4.data;
        if (n7 === `$` || n7 === `$!` || n7 === `$?` || n7 === `$~` || n7 === `&`) {
          if (t6 === 0) return e4;
          t6--;
        } else n7 !== `/$` && n7 !== `/&` || t6++;
      }
      e4 = e4.previousSibling;
    }
    return null;
  }
  function pm(e4, t6) {
    function n7() {
      r5 = true;
    }
    if (e4.ownerDocument.activeElement === e4) return true;
    var r5 = false;
    try {
      e4.ownerDocument.addEventListener(`focus`, n7, true), (e4.focus || HTMLElement.prototype.focus).call(e4, t6);
    } finally {
      e4.ownerDocument.removeEventListener(`focus`, n7, true);
    }
    return r5;
  }
  function mm(e4) {
    yp(function() {
      yp(function(t6) {
        return e4(t6);
      });
    });
  }
  function hm(e4, t6, n7) {
    switch (t6 = lp(n7), e4) {
      case `html`:
        if (e4 = t6.documentElement, !e4) throw Error(a3(452));
        return e4;
      case `head`:
        if (e4 = t6.head, !e4) throw Error(a3(453));
        return e4;
      case `body`:
        if (e4 = t6.body, !e4) throw Error(a3(454));
        return e4;
      default:
        throw Error(a3(451));
    }
  }
  function gm(e4, t6, n7) {
    for (var r5 in n7) {
      var i4 = n7[r5];
      n7.hasOwnProperty(r5) && i4 != null && $(e4, t6, r5, null, rp, i4);
    }
    n7.dangerouslySetInnerHTML != null && (e4.textContent = ``), e4.onclick === An2 && (e4.onclick = null), Ut2(e4);
  }
  function _m(e4) {
    for (var t6 = e4.attributes; t6.length; ) e4.removeAttributeNode(t6[0]);
    Ut2(e4);
  }
  var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
  function bm(e4) {
    if (typeof e4.getRootNode == `function`) {
      var t6 = e4.getRootNode();
      if (t6.nodeType === 9 || t6.nodeType === 11) return t6;
    }
    return e4.nodeType === 9 ? e4 : e4.ownerDocument;
  }
  var xm = T2.d;
  T2.d = {
    f: Sm,
    r: Cm,
    D: Em,
    C: Dm,
    L: Om,
    m: km,
    X: jm,
    S: Am,
    M: Mm
  };
  function Sm() {
    var e4 = xm.f(), t6 = zd();
    return e4 || t6;
  }
  function Cm(e4) {
    var t6 = Gt2(e4);
    t6 !== null && t6.tag === 5 && t6.type === `form` ? ic2(t6) : xm.r(e4);
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(e4, t6, n7) {
    var r5 = wm;
    if (r5 && typeof t6 == `string` && t6) {
      var i4 = hn2(t6);
      i4 = `link[rel="` + e4 + `"][href="` + i4 + `"]`, typeof n7 == `string` && (i4 += `[crossorigin="` + n7 + `"]`), ym.has(i4) || (ym.add(i4), e4 = {
        rel: e4,
        crossOrigin: n7,
        href: t6
      }, r5.querySelector(i4) === null && (t6 = r5.createElement(`link`), np(t6, `link`, e4), Jt2(t6), r5.head.appendChild(t6)));
    }
  }
  function Em(e4) {
    xm.D(e4), Tm(`dns-prefetch`, e4, null);
  }
  function Dm(e4, t6) {
    xm.C(e4, t6), Tm(`preconnect`, e4, t6);
  }
  function Om(e4, t6, n7) {
    xm.L(e4, t6, n7);
    var r5 = wm;
    if (r5 && e4 && t6) {
      var i4 = `link[rel="preload"][as="` + hn2(t6) + `"]`;
      t6 === `image` && n7 && n7.imageSrcSet ? (i4 += `[imagesrcset="` + hn2(n7.imageSrcSet) + `"]`, typeof n7.imageSizes == `string` && (i4 += `[imagesizes="` + hn2(n7.imageSizes) + `"]`)) : i4 += `[href="` + hn2(e4) + `"]`;
      var a4 = i4;
      switch (t6) {
        case `style`:
          a4 = Pm(e4);
          break;
        case `script`:
          a4 = Rm(e4);
      }
      if (!(vm.has(a4) || (e4 = S({
        rel: `preload`,
        href: t6 === `image` && n7 && n7.imageSrcSet ? void 0 : e4,
        as: t6
      }, n7), vm.set(a4, e4), r5.querySelector(i4) !== null || t6 === `style` && r5.querySelector(Fm(a4)) || t6 === `script` && r5.querySelector(zm(a4))))) {
        var o3 = r5.createElement(`link`);
        np(o3, `link`, e4), t6 === `style` && (o3[Ht2] = true, o3.onload = o3.onerror = function() {
          Yt2(o3);
        }), Jt2(o3), r5.head.appendChild(o3);
      }
    }
  }
  function km(e4, t6) {
    xm.m(e4, t6);
    var n7 = wm;
    if (n7 && e4) {
      var r5 = t6 && typeof t6.as == `string` ? t6.as : `script`, i4 = `link[rel="modulepreload"][as="` + hn2(r5) + `"][href="` + hn2(e4) + `"]`, a4 = i4;
      switch (r5) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a4 = Rm(e4);
      }
      if (!vm.has(a4) && (e4 = S({
        rel: `modulepreload`,
        href: e4
      }, t6), vm.set(a4, e4), n7.querySelector(i4) === null)) {
        switch (r5) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n7.querySelector(zm(a4))) return;
        }
        r5 = n7.createElement(`link`), np(r5, `link`, e4), Jt2(r5), n7.head.appendChild(r5);
      }
    }
  }
  function Am(e4, t6, n7) {
    xm.S(e4, t6, n7);
    var r5 = wm;
    if (r5 && e4) {
      var i4 = qt2(r5).hoistableStyles, a4 = Pm(e4);
      t6 ||= `default`;
      var o3 = i4.get(a4);
      if (!o3) {
        var s2 = {
          loading: 0,
          preload: null
        };
        if (o3 = r5.querySelector(Fm(a4))) s2.loading = 5;
        else {
          e4 = S({
            rel: `stylesheet`,
            href: e4,
            "data-precedence": t6
          }, n7), (n7 = vm.get(a4)) && Hm(e4, n7);
          var c2 = o3 = r5.createElement(`link`);
          Jt2(c2), np(c2, `link`, e4), c2._p = new Promise(function(e5, t7) {
            c2.onload = e5, c2.onerror = t7;
          }), c2.addEventListener(`load`, function() {
            s2.loading |= 1;
          }), c2.addEventListener(`error`, function() {
            s2.loading |= 2;
          }), s2.loading |= 4, Vm(o3, t6, r5);
        }
        o3 = {
          type: `stylesheet`,
          instance: o3,
          count: 1,
          state: s2
        }, i4.set(a4, o3);
      }
    }
  }
  function jm(e4, t6) {
    xm.X(e4, t6);
    var n7 = wm;
    if (n7 && e4) {
      var r5 = qt2(n7).hoistableScripts, i4 = Rm(e4), a4 = r5.get(i4);
      a4 || (a4 = n7.querySelector(zm(i4)), a4 || (e4 = S({
        src: e4,
        async: true
      }, t6), (t6 = vm.get(i4)) && Um(e4, t6), a4 = n7.createElement(`script`), Jt2(a4), np(a4, `link`, e4), n7.head.appendChild(a4)), a4 = {
        type: `script`,
        instance: a4,
        count: 1,
        state: null
      }, r5.set(i4, a4));
    }
  }
  function Mm(e4, t6) {
    xm.M(e4, t6);
    var n7 = wm;
    if (n7 && e4) {
      var r5 = qt2(n7).hoistableScripts, i4 = Rm(e4), a4 = r5.get(i4);
      a4 || (a4 = n7.querySelector(zm(i4)), a4 || (e4 = S({
        src: e4,
        async: true,
        type: `module`
      }, t6), (t6 = vm.get(i4)) && Um(e4, t6), a4 = n7.createElement(`script`), Jt2(a4), np(a4, `link`, e4), n7.head.appendChild(a4)), a4 = {
        type: `script`,
        instance: a4,
        count: 1,
        state: null
      }, r5.set(i4, a4));
    }
  }
  function Nm(e4, t6, n7, r5) {
    var i4 = (i4 = Pe2.current) ? bm(i4) : null;
    if (!i4) throw Error(a3(446));
    switch (e4) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n7.precedence == `string` && typeof n7.href == `string` ? (n7 = Pm(n7.href), t6 = qt2(i4).hoistableStyles, r5 = t6.get(n7), r5 || (r5 = {
          type: `style`,
          instance: null,
          count: 0,
          state: null
        }, t6.set(n7, r5)), r5) : {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      case `link`:
        if (n7.rel === `stylesheet` && typeof n7.href == `string` && typeof n7.precedence == `string`) {
          e4 = Pm(n7.href);
          var o3 = qt2(i4).hoistableStyles, s2 = o3.get(e4);
          if (s2 || (i4 = i4.ownerDocument || i4, s2 = {
            type: `stylesheet`,
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, o3.set(e4, s2), (o3 = i4.querySelector(Fm(e4))) ? o3._p || (s2.instance = o3, s2.state.loading = 5) : (o3 = vm.get(e4), o3 || (o3 = {
            rel: `preload`,
            as: `style`,
            href: n7.href,
            crossOrigin: n7.crossOrigin,
            integrity: n7.integrity,
            media: n7.media,
            hrefLang: n7.hrefLang,
            referrerPolicy: n7.referrerPolicy
          }, vm.set(e4, o3)), Lm(i4, e4, o3, s2.state))), t6 && r5 === null) throw Error(a3(528, ``));
          return s2;
        }
        if (t6 && r5 !== null) throw Error(a3(529, ``));
        return null;
      case `script`:
        return t6 = n7.async, n7 = n7.src, typeof n7 == `string` && t6 && typeof t6 != `function` && typeof t6 != `symbol` ? (n7 = Rm(n7), t6 = qt2(i4).hoistableScripts, r5 = t6.get(n7), r5 || (r5 = {
          type: `script`,
          instance: null,
          count: 0,
          state: null
        }, t6.set(n7, r5)), r5) : {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(a3(444, e4));
    }
  }
  function Pm(e4) {
    return `href="` + hn2(e4) + `"`;
  }
  function Fm(e4) {
    return `link[rel="stylesheet"][` + e4 + `]`;
  }
  function Im(e4) {
    return S({}, e4, {
      "data-precedence": e4.precedence,
      precedence: null
    });
  }
  function Lm(e4, t6, n7, r5) {
    if (t6 = e4.querySelector(`link[rel="preload"][as="style"][` + t6 + `]`)) {
      if (true !== t6[Ht2]) {
        r5.loading = 1;
        return;
      }
    } else t6 = e4.createElement(`link`), t6[Ht2] = true, t6.onload = t6.onerror = Yt2.bind(null, t6), np(t6, `link`, n7), Jt2(t6), e4.head.appendChild(t6);
    r5.preload = t6, t6.addEventListener(`load`, function() {
      return r5.loading |= 1;
    }), t6.addEventListener(`error`, function() {
      return r5.loading |= 2;
    });
  }
  function Rm(e4) {
    return `[src="` + hn2(e4) + `"]`;
  }
  function zm(e4) {
    return `script[async]` + e4;
  }
  function Bm(e4, t6, n7) {
    if (t6.count++, t6.instance === null) switch (t6.type) {
      case `style`:
        var r5 = e4.querySelector(`style[data-href~="` + hn2(n7.href) + `"]`);
        if (r5) return t6.instance = r5, Jt2(r5), r5;
        var i4 = S({}, n7, {
          "data-href": n7.href,
          "data-precedence": n7.precedence,
          href: null,
          precedence: null
        });
        return r5 = (e4.ownerDocument || e4).createElement(`style`), Jt2(r5), np(r5, `style`, i4), Vm(r5, n7.precedence, e4), t6.instance = r5;
      case `stylesheet`:
        i4 = Pm(n7.href);
        var o3 = e4.querySelector(Fm(i4));
        if (o3) return t6.state.loading |= 4, t6.instance = o3, Jt2(o3), o3;
        r5 = Im(n7), (i4 = vm.get(i4)) && Hm(r5, i4), o3 = (e4.ownerDocument || e4).createElement(`link`), Jt2(o3);
        var s2 = o3;
        return s2._p = new Promise(function(e5, t7) {
          s2.onload = e5, s2.onerror = t7;
        }), np(o3, `link`, r5), t6.state.loading |= 4, Vm(o3, n7.precedence, e4), t6.instance = o3;
      case `script`:
        return o3 = Rm(n7.src), (i4 = e4.querySelector(zm(o3))) ? (t6.instance = i4, Jt2(i4), i4) : (r5 = n7, (i4 = vm.get(o3)) && (r5 = S({}, n7), Um(r5, i4)), e4 = e4.ownerDocument || e4, i4 = e4.createElement(`script`), Jt2(i4), np(i4, `link`, r5), e4.head.appendChild(i4), t6.instance = i4);
      case `void`:
        return null;
      default:
        throw Error(a3(443, t6.type));
    }
    else t6.type === `stylesheet` && !(t6.state.loading & 4) && (r5 = t6.instance, t6.state.loading |= 4, Vm(r5, n7.precedence, e4));
    return t6.instance;
  }
  function Vm(e4, t6, n7) {
    for (var r5 = n7.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i4 = r5.length ? r5[r5.length - 1] : null, a4 = i4, o3 = 0; o3 < r5.length; o3++) {
      var s2 = r5[o3];
      if (s2.dataset.precedence === t6) a4 = s2;
      else if (a4 !== i4) break;
    }
    a4 ? a4.parentNode.insertBefore(e4, a4.nextSibling) : (t6 = n7.nodeType === 9 ? n7.head : n7, t6.insertBefore(e4, t6.firstChild));
  }
  function Hm(e4, t6) {
    e4.crossOrigin ??= t6.crossOrigin, e4.referrerPolicy ??= t6.referrerPolicy, e4.title ??= t6.title;
  }
  function Um(e4, t6) {
    e4.crossOrigin ??= t6.crossOrigin, e4.referrerPolicy ??= t6.referrerPolicy, e4.integrity ??= t6.integrity;
  }
  var Wm = null;
  function Gm(e4, t6, n7) {
    if (Wm === null) {
      var r5 = /* @__PURE__ */ new Map(), i4 = Wm = /* @__PURE__ */ new Map();
      i4.set(n7, r5);
    } else i4 = Wm, r5 = i4.get(n7), r5 || (r5 = /* @__PURE__ */ new Map(), i4.set(n7, r5));
    if (r5.has(e4)) return r5;
    for (r5.set(e4, null), n7 = n7.getElementsByTagName(e4), i4 = 0; i4 < n7.length; i4++) {
      var a4 = n7[i4];
      if (!(a4[Vt2] || a4[Pt2] || e4 === `link` && a4.getAttribute(`rel`) === `stylesheet`) && a4.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a4.getAttribute(t6) || ``;
        o3 = e4 + o3;
        var s2 = r5.get(o3);
        s2 ? s2.push(a4) : r5.set(o3, [a4]);
      }
    }
    return r5;
  }
  function Km(e4, t6, n7) {
    e4 = e4.ownerDocument || e4, e4.head.insertBefore(n7, t6 === `title` ? e4.querySelector(`head > title`) : null);
  }
  function qm(e4, t6, n7) {
    if (n7 === 1 || t6.itemProp != null) return false;
    switch (e4) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t6.precedence != `string` || typeof t6.href != `string` || t6.href === ``) break;
        return true;
      case `link`:
        if (typeof t6.rel != `string` || typeof t6.href != `string` || t6.href === `` || t6.onLoad || t6.onError) break;
        switch (t6.rel) {
          case `stylesheet`:
            return e4 = t6.disabled, typeof t6.precedence == `string` && e4 == null;
          default:
            return true;
        }
      case `script`:
        if (t6.async && typeof t6.async != `function` && typeof t6.async != `symbol` && !t6.onLoad && !t6.onError && t6.src && typeof t6.src == `string`) return true;
    }
    return false;
  }
  function Jm(e4, t6) {
    return e4 === `img` && t6.src != null && t6.src !== `` && t6.onLoad == null && t6.loading !== `lazy`;
  }
  function Ym(e4) {
    return !(e4.type === `stylesheet` && !(e4.state.loading & 3));
  }
  function Xm(e4) {
    return (e4.width || 100) * (e4.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e4, t6) {
    typeof t6.decode == `function` && (e4.imgCount++, t6.complete || (e4.imgBytes += Xm(t6), e4.suspenseyImages.push(t6)), e4 = rh.bind(e4), t6.decode().then(e4, e4));
  }
  function Qm(e4, t6, n7, r5) {
    if (n7.type === `stylesheet` && (typeof r5.media != `string` || false !== matchMedia(r5.media).matches) && !(n7.state.loading & 4)) {
      if (n7.instance === null) {
        var i4 = Pm(r5.href), a4 = t6.querySelector(Fm(i4));
        if (a4) {
          t6 = a4._p, typeof t6 == `object` && t6 && typeof t6.then == `function` && (e4.count++, e4 = nh.bind(e4), t6.then(e4, e4)), n7.state.loading |= 4, n7.instance = a4, Jt2(a4);
          return;
        }
        a4 = t6.ownerDocument || t6, r5 = Im(r5), (i4 = vm.get(i4)) && Hm(r5, i4), a4 = a4.createElement(`link`), Jt2(a4);
        var o3 = a4;
        o3._p = new Promise(function(e5, t7) {
          o3.onload = e5, o3.onerror = t7;
        }), np(a4, `link`, r5), n7.instance = a4;
      }
      e4.stylesheets === null && (e4.stylesheets = /* @__PURE__ */ new Map()), e4.stylesheets.set(n7, t6), (t6 = n7.state.preload) && !(n7.state.loading & 3) && (e4.count++, n7 = nh.bind(e4), t6.addEventListener(`load`, n7), t6.addEventListener(`error`, n7));
    }
  }
  var $m = 0;
  function eh(e4, t6) {
    return e4.stylesheets && e4.count === 0 && ah(e4, e4.stylesheets), 0 < e4.count || 0 < e4.imgCount ? function(n7) {
      var r5 = setTimeout(function() {
        if (e4.stylesheets && ah(e4, e4.stylesheets), e4.unsuspend) {
          var t7 = e4.unsuspend;
          e4.unsuspend = null, t7();
        }
      }, 6e4 + t6);
      0 < e4.imgBytes && $m === 0 && ($m = 62500 * op());
      var i4 = setTimeout(function() {
        if (e4.waitingForImages = false, e4.count === 0 && (e4.stylesheets && ah(e4, e4.stylesheets), e4.unsuspend)) {
          var t7 = e4.unsuspend;
          e4.unsuspend = null, t7();
        }
      }, (e4.imgBytes > $m ? 50 : 800) + t6);
      return e4.unsuspend = n7, function() {
        e4.unsuspend = null, clearTimeout(r5), clearTimeout(i4);
      };
    } : null;
  }
  function th(e4) {
    if (e4.count === 0 && (e4.imgCount === 0 || !e4.waitingForImages)) {
      if (e4.stylesheets) ah(e4, e4.stylesheets);
      else if (e4.unsuspend) {
        var t6 = e4.unsuspend;
        e4.unsuspend = null, t6();
      }
    }
  }
  function nh() {
    this.count--, th(this);
  }
  function rh() {
    this.imgCount--, th(this);
  }
  var ih = null;
  function ah(e4, t6) {
    e4.stylesheets = null, e4.unsuspend !== null && (e4.count++, ih = /* @__PURE__ */ new Map(), t6.forEach(oh, e4), ih = null, nh.call(e4));
  }
  function oh(e4, t6) {
    if (!(t6.state.loading & 4)) {
      var n7 = ih.get(e4);
      if (n7) var r5 = n7.get(null);
      else {
        n7 = /* @__PURE__ */ new Map(), ih.set(e4, n7);
        for (var i4 = e4.querySelectorAll(`link[data-precedence],style[data-precedence]`), a4 = 0; a4 < i4.length; a4++) {
          var o3 = i4[a4];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n7.set(o3.dataset.precedence, o3), r5 = o3);
        }
        r5 && n7.set(null, r5);
      }
      i4 = t6.instance, o3 = i4.getAttribute(`data-precedence`), a4 = n7.get(o3) || r5, a4 === r5 && n7.set(null, i4), n7.set(o3, i4), this.count++, r5 = nh.bind(this), i4.addEventListener(`load`, r5), i4.addEventListener(`error`, r5), a4 ? a4.parentNode.insertBefore(i4, a4.nextSibling) : (e4 = e4.nodeType === 9 ? e4.head : e4, e4.insertBefore(i4, e4.firstChild)), t6.state.loading |= 4;
    }
  }
  var sh = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: De2,
    _currentValue2: De2,
    _threadCount: 0
  };
  function ch(e4, t6, n7, r5, i4, a4, o3, s2, c2) {
    this.tag = 1, this.containerInfo = e4, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ct2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ct2(0), this.hiddenUpdates = Ct2(null), this.identifierPrefix = r5, this.onUncaughtError = i4, this.onCaughtError = a4, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c2, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e4, t6, n7, r5, i4, a4, o3, s2, c2, l2, u2, d2) {
    return e4 = new ch(e4, t6, n7, o3, c2, l2, u2, d2, s2), t6 = 1, true === a4 && (t6 |= 24), a4 = Hi(3, null, null, t6), e4.current = a4, a4.stateNode = e4, t6 = Fa2(), t6.refCount++, e4.pooledCache = t6, t6.refCount++, a4.memoizedState = {
      element: r5,
      isDehydrated: n7,
      cache: t6
    }, vo2(a4), e4;
  }
  function uh(e4) {
    return e4 ? (e4 = Bi2, e4) : Bi2;
  }
  function dh(e4, t6, n7, r5, i4, a4) {
    i4 = uh(i4), r5.context === null ? r5.context = i4 : r5.pendingContext = i4, r5 = bo2(t6), r5.payload = {
      element: n7
    }, a4 = a4 === void 0 ? null : a4, a4 !== null && (r5.callback = a4), n7 = xo2(e4, r5, t6), n7 !== null && (Pd(n7, e4, t6), So2(n7, e4, t6));
  }
  function fh(e4, t6) {
    if (e4 = e4.memoizedState, e4 !== null && e4.dehydrated !== null) {
      var n7 = e4.retryLane;
      e4.retryLane = n7 !== 0 && n7 < t6 ? n7 : t6;
    }
  }
  function ph(e4, t6) {
    fh(e4, t6), (e4 = e4.alternate) && fh(e4, t6);
  }
  function mh(e4) {
    if (e4.tag === 13 || e4.tag === 31) {
      var t6 = Li2(e4, 67108864);
      t6 !== null && Pd(t6, e4, 67108864), ph(e4, 67108864);
    }
  }
  function hh(e4) {
    if (e4.tag === 13 || e4.tag === 31) {
      var t6 = jd();
      t6 = kt2(t6);
      var n7 = Li2(e4, t6);
      n7 !== null && Pd(n7, e4, t6), ph(e4, t6);
    }
  }
  var gh = true;
  function _h(e4, t6, n7, r5) {
    var i4 = w2.T;
    w2.T = null;
    var a4 = T2.p;
    try {
      T2.p = 2, yh(e4, t6, n7, r5);
    } finally {
      T2.p = a4, w2.T = i4;
    }
  }
  function vh(e4, t6, n7, r5) {
    var i4 = w2.T;
    w2.T = null;
    var a4 = T2.p;
    try {
      T2.p = 8, yh(e4, t6, n7, r5);
    } finally {
      T2.p = a4, w2.T = i4;
    }
  }
  function yh(e4, t6, n7, r5) {
    if (gh) {
      var i4 = bh(r5);
      if (i4 === null) Kf(e4, t6, r5, xh, n7), Mh(e4, r5);
      else if (Ph(i4, e4, t6, n7, r5)) r5.stopPropagation();
      else if (Mh(e4, r5), t6 & 4 && -1 < jh.indexOf(e4)) {
        for (; i4 !== null; ) {
          var a4 = Gt2(i4);
          if (a4 !== null) switch (a4.tag) {
            case 3:
              if (a4 = a4.stateNode, a4.current.memoizedState.isDehydrated) {
                var o3 = _t2(a4.pendingLanes);
                if (o3 !== 0) {
                  var s2 = a4;
                  for (s2.pendingLanes |= 2, s2.entangledLanes |= 2; o3; ) {
                    var c2 = 1 << 31 - ut2(o3);
                    s2.entanglements[1] |= c2, o3 &= ~c2;
                  }
                  Ef(a4), !(G & 6) && (_d = Qe2() + 500, Df(0, false));
                }
              }
              break;
            case 31:
            case 13:
              s2 = Li2(a4, 2), s2 !== null && Pd(s2, a4, 2), zd(), ph(a4, 2);
          }
          if (a4 = bh(r5), a4 === null && Kf(e4, t6, r5, xh, n7), a4 === i4) break;
          i4 = a4;
        }
        i4 !== null && r5.stopPropagation();
      } else Kf(e4, t6, r5, null, n7);
    }
  }
  function bh(e4) {
    return e4 = Mn2(e4), Sh(e4);
  }
  var xh = null;
  function Sh(e4) {
    if (xh = null, e4 = Wt2(e4), e4 !== null) {
      var t6 = s(e4);
      if (t6 === null) e4 = null;
      else {
        var n7 = t6.tag;
        if (n7 === 13) {
          if (e4 = c(t6), e4 !== null) return e4;
          e4 = null;
        } else if (n7 === 31) {
          if (e4 = l(t6), e4 !== null) return e4;
          e4 = null;
        } else if (n7 === 3) {
          if (t6.stateNode.current.memoizedState.isDehydrated) return t6.tag === 3 ? t6.stateNode.containerInfo : null;
          e4 = null;
        } else t6 !== e4 && (e4 = null);
      }
    }
    return xh = e4, null;
  }
  function Ch(e4) {
    switch (e4) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `fullscreenerror`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `resize`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch ($e2()) {
          case et2:
            return 2;
          case tt2:
            return 8;
          case nt2:
          case rt2:
            return 32;
          case it2:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e4, t6) {
    switch (e4) {
      case `focusin`:
      case `focusout`:
        Th = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Eh = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Dh = null;
        break;
      case `pointerover`:
      case `pointerout`:
        Oh.delete(t6.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t6.pointerId);
    }
  }
  function Nh(e4, t6, n7, r5, i4, a4) {
    return e4 === null || e4.nativeEvent !== a4 ? (e4 = {
      blockedOn: t6,
      domEventName: n7,
      eventSystemFlags: r5,
      nativeEvent: a4,
      targetContainers: [i4]
    }, t6 !== null && (t6 = Gt2(t6), t6 !== null && mh(t6)), e4) : (e4.eventSystemFlags |= r5, t6 = e4.targetContainers, i4 !== null && t6.indexOf(i4) === -1 && t6.push(i4), e4);
  }
  function Ph(e4, t6, n7, r5, i4) {
    switch (t6) {
      case `focusin`:
        return Th = Nh(Th, e4, t6, n7, r5, i4), true;
      case `dragenter`:
        return Eh = Nh(Eh, e4, t6, n7, r5, i4), true;
      case `mouseover`:
        return Dh = Nh(Dh, e4, t6, n7, r5, i4), true;
      case `pointerover`:
        var a4 = i4.pointerId;
        return Oh.set(a4, Nh(Oh.get(a4) || null, e4, t6, n7, r5, i4)), true;
      case `gotpointercapture`:
        return a4 = i4.pointerId, kh.set(a4, Nh(kh.get(a4) || null, e4, t6, n7, r5, i4)), true;
    }
    return false;
  }
  function Fh(e4) {
    var t6 = Wt2(e4.target);
    if (t6 !== null) {
      var n7 = s(t6);
      if (n7 !== null) {
        if (t6 = n7.tag, t6 === 13) {
          if (t6 = c(n7), t6 !== null) {
            e4.blockedOn = t6, Mt2(e4.priority, function() {
              hh(n7);
            });
            return;
          }
        } else if (t6 === 31) {
          if (t6 = l(n7), t6 !== null) {
            e4.blockedOn = t6, Mt2(e4.priority, function() {
              hh(n7);
            });
            return;
          }
        } else if (t6 === 3 && n7.stateNode.current.memoizedState.isDehydrated) {
          e4.blockedOn = n7.tag === 3 ? n7.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e4.blockedOn = null;
  }
  function Ih(e4) {
    if (e4.blockedOn !== null) return false;
    for (var t6 = e4.targetContainers; 0 < t6.length; ) {
      var n7 = bh(e4.nativeEvent);
      if (n7 === null) {
        n7 = e4.nativeEvent;
        var r5 = new n7.constructor(n7.type, n7);
        jn2 = r5, n7.target.dispatchEvent(r5), jn2 = null;
      } else return t6 = Gt2(n7), t6 !== null && mh(t6), e4.blockedOn = n7, false;
      t6.shift();
    }
    return true;
  }
  function Lh(e4, t6, n7) {
    Ih(e4) && n7.delete(t6);
  }
  function Rh() {
    wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
  }
  function zh(e4, n7) {
    e4.blockedOn === n7 && (e4.blockedOn = null, wh || (wh = true, t5.unstable_scheduleCallback(t5.unstable_NormalPriority, Rh)));
  }
  var Bh = null;
  function Vh(e4) {
    Bh !== e4 && (Bh = e4, t5.unstable_scheduleCallback(t5.unstable_NormalPriority, function() {
      Bh === e4 && (Bh = null);
      for (var t6 = 0; t6 < e4.length; t6 += 3) {
        var n7 = e4[t6], r5 = e4[t6 + 1], i4 = e4[t6 + 2];
        if (typeof r5 != `function`) {
          if (Sh(r5 || n7) === null) continue;
          break;
        }
        var a4 = Gt2(n7);
        a4 !== null && (e4.splice(t6, 3), t6 -= 3, nc(a4, {
          pending: true,
          data: i4,
          method: n7.method,
          action: r5
        }, r5, i4));
      }
    }));
  }
  function Hh(e4) {
    function t6(t7) {
      return zh(t7, e4);
    }
    Th !== null && zh(Th, e4), Eh !== null && zh(Eh, e4), Dh !== null && zh(Dh, e4), Oh.forEach(t6), kh.forEach(t6);
    for (var n7 = 0; n7 < Ah.length; n7++) {
      var r5 = Ah[n7];
      r5.blockedOn === e4 && (r5.blockedOn = null);
    }
    for (; 0 < Ah.length && (n7 = Ah[0], n7.blockedOn === null); ) Fh(n7), n7.blockedOn === null && Ah.shift();
    if (n7 = (e4.ownerDocument || e4).$$reactFormReplay, n7 != null) for (r5 = 0; r5 < n7.length; r5 += 3) {
      var i4 = n7[r5], a4 = n7[r5 + 1], o3 = i4[Ft2] || null;
      if (typeof a4 == `function`) o3 || Vh(n7);
      else if (o3) {
        var s2 = null;
        if (a4 && a4.hasAttribute(`formAction`)) {
          if (i4 = a4, o3 = a4[Ft2] || null) s2 = o3.formAction;
          else if (Sh(i4) !== null) continue;
        } else s2 = o3.action;
        typeof s2 == `function` ? n7[r5 + 1] = s2 : (n7.splice(r5, 3), r5 -= 3), Vh(n7);
      }
    }
  }
  function Uh() {
    function e4(e5) {
      e5.canIntercept && e5.info === `react-transition` && e5.intercept({
        handler: function() {
          return new Promise(function(e6) {
            return i4 = e6;
          });
        },
        focusReset: `manual`,
        scroll: `manual`
      });
    }
    function t6() {
      i4 !== null && (i4(), i4 = null), r5 || setTimeout(n7, 20);
    }
    function n7() {
      if (!r5 && !navigation.transition) {
        var e5 = navigation.currentEntry;
        e5 && e5.url != null && navigation.navigate(e5.url, {
          state: e5.getState(),
          info: `react-transition`,
          history: `replace`
        });
      }
    }
    if (typeof navigation == `object`) {
      var r5 = false, i4 = null;
      return navigation.addEventListener(`navigate`, e4), navigation.addEventListener(`navigatesuccess`, t6), navigation.addEventListener(`navigateerror`, t6), setTimeout(n7, 100), function() {
        r5 = true, navigation.removeEventListener(`navigate`, e4), navigation.removeEventListener(`navigatesuccess`, t6), navigation.removeEventListener(`navigateerror`, t6), i4 !== null && (i4(), i4 = null);
      };
    }
  }
  function Wh(e4) {
    this._internalRoot = e4;
  }
  Gh.prototype.render = Wh.prototype.render = function(e4) {
    var t6 = this._internalRoot;
    if (t6 === null) throw Error(a3(409));
    var n7 = t6.current;
    dh(n7, jd(), e4, t6, null, null);
  }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
    var e4 = this._internalRoot;
    if (e4 !== null) {
      this._internalRoot = null;
      var t6 = e4.containerInfo;
      dh(e4.current, 2, null, e4, null, null), zd(), t6[It2] = null;
    }
  };
  function Gh(e4) {
    this._internalRoot = e4;
  }
  Gh.prototype.unstable_scheduleHydration = function(e4) {
    if (e4) {
      var t6 = jt2();
      e4 = {
        blockedOn: null,
        target: e4,
        priority: t6
      };
      for (var n7 = 0; n7 < Ah.length && t6 !== 0 && t6 < Ah[n7].priority; n7++) ;
      Ah.splice(n7, 0, e4), n7 === 0 && Fh(e4);
    }
  };
  var Kh = r4.version;
  if (Kh !== `19.3.0`) throw Error(a3(527, Kh, `19.3.0`));
  T2.findDOMNode = function(e4) {
    var t6 = e4._reactInternals;
    if (t6 === void 0) throw typeof e4.render == `function` ? Error(a3(188)) : (e4 = Object.keys(e4).join(`,`), Error(a3(268, e4)));
    return e4 = d(t6), e4 = e4 === null ? null : f(e4), e4 = e4 === null ? null : e4.stateNode, e4;
  };
  var qh = {
    bundleType: 0,
    version: `19.3.0`,
    rendererPackageName: `react-dom`,
    currentDispatcherRef: w2,
    reconcilerVersion: `19.3.0`
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber) try {
      st2 = Jh.inject(qh), ct2 = Jh;
    } catch {
    }
  }
  e3.createRoot = function(e4, t6) {
    if (!o2(e4)) throw Error(a3(299));
    var n7 = false, r5 = ``, i4 = Tc2, s2 = Ec2, c2 = Dc2;
    return t6 != null && (true === t6.unstable_strictMode && (n7 = true), t6.identifierPrefix !== void 0 && (r5 = t6.identifierPrefix), t6.onUncaughtError !== void 0 && (i4 = t6.onUncaughtError), t6.onCaughtError !== void 0 && (s2 = t6.onCaughtError), t6.onRecoverableError !== void 0 && (c2 = t6.onRecoverableError)), t6 = lh(e4, 1, false, null, null, n7, r5, null, i4, s2, c2, Uh), e4[It2] = t6.current, Wf(e4), new Wh(t6);
  };
});
var y = t((e3, t5) => {
  function n7() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n7);
    } catch (e4) {
      console.error(e4);
    }
  }
  n7(), t5.exports = v();
})();
var b = n2();
var me = n({
  entry: () => he
});
var he = {
  slug: `agent-cursors`,
  name: `Agent Cursors`,
  description: `Agents working in a document like teammates in a multiplayer editor \u2013 live pointers with names, suggestions typed letter by letter, images they resize, code they fix and comments beside the page`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BpwDm3_5-CTWOVPSB.js"), __vite__mapDeps([0, 1, 2, 3, 4]))),
  loadSource: () => r(() => import("./component-BfIA_sur-2V3JRPIY.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-F9iwrvZt-SYI2SNUK.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BdsziCoX-FIIOEROK.js"), __vite__mapDeps([5, 1, 2, 3, 4]))),
    loadSource: () => r(() => import("./component.clean-C81bLSK9-QMWLORMU.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BCszff8i-O65ZR3OQ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-19T18:00:00+02:00`,
  order: 1,
  pro: true
};
var C = n({
  entry: () => ge
});
var ge = {
  slug: `agent-inbox`,
  name: `Agent Inbox`,
  description: `All your background agent tasks in one calm list \u2013 live clocks and status tags, filter tabs with rolling counts, rows that unfold to the last steps with Approve, Reject, Retry or Open, and glide to their new place`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Bq86T0RX-ED34K2SO.js"), __vite__mapDeps([6, 1, 2, 3, 7]))),
  loadSource: () => r(() => import("./component-zV5da3i0-H5PF5UVH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-D_d0RPGD-PG7CMXPJ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DQ6MZQcD-5RBU7BTX.js"), __vite__mapDeps([8, 1, 2, 3, 7]))),
    loadSource: () => r(() => import("./component.clean-G7HptHGl-CQM6URRX.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BKGBfDOD-7ZSI2OR4.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T16:00:00+02:00`,
  order: 1,
  pro: true
};
var _e = n({
  entry: () => ve
});
var ve = {
  slug: `agent-lanes`,
  name: `Agent Lanes`,
  description: `Where every agent is right now \u2013 a live timeline with a lane per agent, tasks growing into \u201Cnow\u201D, hand-offs drawn between agents and approvals right on the block`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CCeL1VNp-MYHRZ44R.js"), __vite__mapDeps([9, 1, 2, 3, 10]))),
  loadSource: () => r(() => import("./component-CVBds3Db-QH72ZJLJ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Cr8lKUzQ-FKMXVI6I.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DC3N3Pap-ZBXRYQQN.js"), __vite__mapDeps([11, 1, 2, 3, 10]))),
    loadSource: () => r(() => import("./component.clean-C7ROz4iL-INH7COGI.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-C4vtpNbt-KZFX27TP.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-17T12:00:00+02:00`,
  order: 1,
  pro: true
};
var ye = n({
  entry: () => be
});
var be = {
  slug: `agent-plan`,
  name: `Agent Plan`,
  description: `An agent's step-by-step plan to review before it runs \u2013 rename, drag to reorder, remove or add steps, then watch each one run with live timers and retry from a failed step`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-crn6hRBF-TL5DRGH4.js"), __vite__mapDeps([12, 1, 2, 3, 13, 14]))),
  loadSource: () => r(() => import("./component-CJBnN79--RCL6OBOD.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-D3ABdLPT-3637IUCW.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BjIF1-j--3EZCTDDM.js"), __vite__mapDeps([15, 1, 2, 3, 14]))),
    loadSource: () => r(() => import("./component.clean-MnuLboKN-OKI2YEJM.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DSswoBJu-DAYX5DZ7.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 3,
  pro: true
};
var xe = n({
  entry: () => Se
});
var Se = {
  slug: `agent-steering`,
  name: `Agent Steering`,
  description: `Steer an agent while it works \u2013 queue a note for the next step and watch it glide into the plan when the agent picks it up, or interrupt right away`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Bzg0Jm8m-CTXF7I5B.js"), __vite__mapDeps([16, 1, 2, 3, 17]))),
  loadSource: () => r(() => import("./component-DEaAy1BC-5LB3SOE7.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CaN0P0XV-J45QVGXL.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CykqoJC9-CICMQWJY.js"), __vite__mapDeps([18, 1, 2, 3, 17]))),
    loadSource: () => r(() => import("./component.clean-BEShq_nD-ZRC4GGCV.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6WKo64J-4A4URVDR.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-16T12:00:00+02:00`,
  order: 1,
  pro: true
};
var Ce = n({
  entry: () => we
});
var we = {
  slug: `agent-tree`,
  name: `Agent Tree`,
  description: `Who started whom \u2013 an orchestrator and its sub-agents as a live tree, with status, cost and time on every card, costs rolling up each branch, and branches that fold to one line`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Ddb1Dch3-TUPSXDUD.js"), __vite__mapDeps([19, 1, 2, 3, 20]))),
  loadSource: () => r(() => import("./component-B-u-OuX--R42BRUXA.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bu9_xt8V-2AF5FUVJ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CX0onucT-ZUHGNN5M.js"), __vite__mapDeps([21, 1, 2, 3, 20]))),
    loadSource: () => r(() => import("./component.clean-DZ0boXyY-47F7TXYT.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DN7ImmUS-FZENV2NQ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-18T21:30:00+02:00`,
  order: 1,
  pro: true
};
var Te = n({
  entry: () => Ee
});
var Ee = {
  slug: `ai-answer`,
  name: `AI Answer`,
  description: `Streamed answer with source cards, citation chips that preview their source, copy, regenerate, feedback and follow-ups`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-NvLm8mGU-2RALLUXP.js"), __vite__mapDeps([22, 1, 2, 3, 23]))),
  loadSource: () => r(() => import("./component-CC41BuLe-QTPFKTQH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DnStOjCc-HXEQT6UM.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-B3KZIS0J-JGNVQCJH.js"), __vite__mapDeps([24, 1, 2, 3, 23]))),
    loadSource: () => r(() => import("./component.clean-DFTWGCQh-KSTCAMLD.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-q_5UM703-KYUEZXBC.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T12:38:00+02:00`,
  order: 0,
  pro: true
};
var w = n({
  entry: () => T
});
var T = {
  slug: `approval-card`,
  name: `Approval Card`,
  description: `An agent asks before it acts \u2013 risk badge, preview, Approve and Deny with shortcuts, a pausing countdown, and a smooth morph into a resolved row`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DtfhNS6P-TMHW2GAQ.js"), __vite__mapDeps([25, 1, 2, 3, 26, 27]))),
  loadSource: () => r(() => import("./component-DMHjnFWv-64YKDCXY.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BfqH4QUp-GLNKTT5D.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Dkj-1MDj-QFDP4MLB.js"), __vite__mapDeps([28, 1, 2, 3, 27]))),
    loadSource: () => r(() => import("./component.clean-BZVoUx2k-OCOLQTZO.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BblgJ4cP-KO6ONLAA.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-09T23:33:00+02:00`,
  order: 2,
  pro: true
};
var De = n({
  entry: () => Oe
});
var Oe = {
  slug: `autonomy-dial`,
  name: `Autonomy Dial`,
  description: `How much an agent may do on its own \u2013 a three-stop dial, and its real actions gliding between \u201CRuns on its own\u201D and \u201CAsks you first\u201D, with a lock for what always asks`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CZQO5p6C-ZKUL6NKT.js"), __vite__mapDeps([29, 1, 2, 3, 30]))),
  loadSource: () => r(() => import("./component-B_9gj-Ov-6XRKBL34.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bo7zVMZQ-BHG2ZNCM.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-D4m3L74b-3INGESVG.js"), __vite__mapDeps([31, 1, 2, 3, 30]))),
    loadSource: () => r(() => import("./component.clean-CLZvFUCF-XXKM4EVF.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bh2SgH6--HZVQTCPU.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-16T15:00:00+02:00`,
  order: 1,
  pro: true
};
var ke = n({
  entry: () => Ae
});
var Ae = {
  slug: `billing-schedule`,
  name: `Billing Schedule`,
  description: `Build a billing phase \u2013 start date, duration, products with repeats and timing, discount, minimum and live totals`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-65xDbaC9-L745OUU4.js"), __vite__mapDeps([32, 1, 2, 3, 33]))),
  loadSource: () => r(() => import("./component-D4LZ8L6f-HNQLZELD.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CWsQ8QN--ZRXE3N4M.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-dYQPE1hb-U2XF2PC7.js"), __vite__mapDeps([34, 1, 2, 3, 33]))),
    loadSource: () => r(() => import("./component.clean-CtS7yavp-GJFOSEVD.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-B5LUm_il-6JGIU7TN.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-04T20:47:00+02:00`,
  order: 3,
  pro: true
};
var je = n({
  entry: () => E
});
var E = {
  slug: `breakdown-chart`,
  name: `Breakdown Chart`,
  description: `Stacked bar chart with measure, slice and segment pickers, a hover breakdown and a linked table`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BXlx9pcF-UMRUJBPP.js"), __vite__mapDeps([35, 3, 2, 36, 1, 37]))),
  loadSource: () => r(() => import("./component-BcChx9Jw-S7TEZAVR.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-IkEC_JRe-J7JNI3EF.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-D3ZXLUIO-V3XB5FXR.js"), __vite__mapDeps([38, 1, 2, 3, 37]))),
    loadSource: () => r(() => import("./component.clean-CWGZCMX--I6TENZEJ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-kzokqAH9-BFEJDN6D.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 2,
  pro: true
};
var Me = n({
  entry: () => Ne
});
var Ne = {
  slug: `button`,
  name: `Button`,
  description: `Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state`,
  category: `Buttons`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Da5-XF-c-QTGA2JOR.js"), __vite__mapDeps([39, 1, 2, 3, 40, 41]))),
  loadSource: () => r(() => import("./component-BZX7ccTs-UE3OLH26.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-C9p_9cDP-LNX7MMYI.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DkN_5ZQ5-XDCRD66D.js"), __vite__mapDeps([42, 1, 2, 3, 41]))),
    loadSource: () => r(() => import("./component.clean-CJ-0-SIS-LIKX46WY.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Cj2wJRA7-ANDH73MO.js").then((e3) => e3.docs), [])
  },
  order: 2
};
var Pe = n({
  entry: () => Fe
});
var Fe = {
  slug: `change-summary`,
  name: `Change Summary`,
  description: `What moved since last time \u2013 one metric per row with a colored trend`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-D_fnjW-9-U6WUELN4.js"), __vite__mapDeps([43, 3, 2, 44]))),
  loadSource: () => r(() => import("./component-re2QJung-FS7UZYVO.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-pueYgHNw-M43V2VHA.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CUpZACNd-LLQ3MTOK.js"), __vite__mapDeps([45, 3, 2, 44]))),
    loadSource: () => r(() => import("./component.clean-ChvuXtkV-4UNR273Y.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BJyOolVS-THPTQB4Z.js").then((e3) => e3.docs), [])
  },
  order: 3
};
var Ie = n({
  entry: () => Le
});
var Le = {
  slug: `chat-composer`,
  name: `Chat Composer`,
  description: `Prompt composer with model picker, voice input, app connections and approval request`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DI66HSts-6JLO22QS.js"), __vite__mapDeps([46, 3, 2, 47, 1, 48]))),
  loadSource: () => r(() => import("./component-Bcgm0lKS-DFSO2MC7.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-kKiOVARV-3YFKIQS4.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CCr62Jz8-XACTR63D.js"), __vite__mapDeps([49, 1, 2, 3, 48]))),
    loadSource: () => r(() => import("./component.clean-L0LpkbiF-SPWYAU72.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-LcU0OicS-3YYGWVBD.js").then((e3) => e3.docs), [])
  },
  order: 1,
  pro: true
};
var Re = n({
  entry: () => ze
});
var ze = {
  slug: `cited-answer`,
  name: `Cited Answer`,
  description: `An AI answer wired to its sources \u2013 point at a citation to light up its sentence and source, click to unfold the quoted passage with the matching words marked`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-xRyZ19Jc-GACIOXVG.js"), __vite__mapDeps([50, 1, 2, 3, 51]))),
  loadSource: () => r(() => import("./component-BNbr74FU-56KF377Y.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B05SYv6Z-U6BT7GLO.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CnchuWt9-RQ4HR47V.js"), __vite__mapDeps([52, 1, 2, 3, 51]))),
    loadSource: () => r(() => import("./component.clean-OoeQadAf-OC43MUZG.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bgc76ydH-NXKI4I2D.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
var Be = n({
  entry: () => Ve
});
var Ve = {
  slug: `combobox`,
  name: `Combobox`,
  description: `Pick one or many from a searchable, grouped list \u2013 chips with avatars, highlighted matches, create-on-the-fly and full keyboard support`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-tcGbF7g2-WGGCRCF5.js"), __vite__mapDeps([53, 1, 2, 3, 54]))),
  loadSource: () => r(() => import("./component-DUiKVJf3-OFQAIKNI.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-gx2cWf0_-YXS5Z5MG.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DhS0HlaW-I4367RP4.js"), __vite__mapDeps([55, 1, 2, 3, 54]))),
    loadSource: () => r(() => import("./component.clean-BeLkFd64-7KA3OG5Y.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-C6fAXNCk-2Q7BORAX.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T15:41:00+02:00`,
  order: 0,
  pro: true
};
var He = n({
  entry: () => Ue
});
var Ue = {
  slug: `command-menu`,
  name: `Command Menu`,
  description: `Search and run anything from one field \u2013 tool actions with logos and \u23181\u2013\u23185, everyday commands with icons`,
  category: `Navigation`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cde_N0C0-4V43D5ND.js"), __vite__mapDeps([56, 1, 2, 3, 57]))),
  loadSource: () => r(() => import("./component-D1ism7Wk-VKFAEXF5.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Ch0zWVGM-SGGS63MU.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BkpdJDtQ-PAOAPHKK.js"), __vite__mapDeps([58, 1, 2, 3, 57]))),
    loadSource: () => r(() => import("./component.clean-Cuyk80dR-NNKSGEMW.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DPoM2rqj-KXIDXL4R.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-07T22:30:00+02:00`,
  order: 0,
  pro: true
};
var We = n({
  entry: () => Ge
});
var Ge = {
  slug: `comment-thread`,
  name: `Comment Thread`,
  description: `One comment with replies \u2013 an assistant reports what it did, folds open details and answers @mentions`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-TTVz3U3f-H35LIECX.js"), __vite__mapDeps([59, 1, 2, 3, 60]))),
  loadSource: () => r(() => import("./component-Bs5q_-Hg-LPSRUBSK.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-_yznjEBE-5WPBDT5G.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DgcZN_UD-YQL5YFT2.js"), __vite__mapDeps([61, 1, 2, 3, 60]))),
    loadSource: () => r(() => import("./component.clean-DU-K_CLK-L73R2XMN.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CYmTgIA9-NR2HMXCR.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 4
};
var Ke = n({
  entry: () => qe
});
var qe = {
  slug: `comments-panel`,
  name: `Comments Panel`,
  description: `Comment feed with filters, runnable /edit commands, resolve and a composer`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BlNBUErF-76O4W46Z.js"), __vite__mapDeps([62, 1, 2, 3, 63]))),
  loadSource: () => r(() => import("./component-BdmpRaui-WR4WL74U.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Ckp_fKFV-L2RMAJ3F.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Lan03W3V-UDTFKW6V.js"), __vite__mapDeps([64, 1, 2, 3, 63]))),
    loadSource: () => r(() => import("./component.clean-DXXuHFnW-HJZRFXQQ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-ALKW-pwL-BGJRYBRI.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 3,
  pro: true
};
var Je = n({
  entry: () => Ye
});
var Ye = {
  slug: `compact-breakdown`,
  name: `Compact Breakdown`,
  description: `A total split into its parts in one small card \u2013 numbers roll, the bar glides and the ranked rows trade places when the period changes`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BgsJzBTE-AGPCPBSJ.js"), __vite__mapDeps([65, 1, 2, 3, 66]))),
  loadSource: () => r(() => import("./component-pTy_OjKD-J4B2ENAY.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DIzwe3nY-UAS2KHW5.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BmiiHyGl-SSWSB3X3.js"), __vite__mapDeps([67, 1, 2, 3, 66]))),
    loadSource: () => r(() => import("./component.clean-DPcOx-S--7JKEXAGJ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DwdLDQor-26BQ6VLZ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-10T11:42:00+02:00`,
  order: 1,
  pro: true
};
var Xe = n({
  entry: () => Ze
});
var Ze = {
  slug: `context-window`,
  name: `Context Window`,
  description: `What fills the model's context, as a field of cells \u2013 hover a part to light it up, remove files, and compact the conversation while its cells shimmer and clear`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DgdoHbQS-5KJSUONR.js"), __vite__mapDeps([68, 1, 2, 3, 69]))),
  loadSource: () => r(() => import("./component-MY9L9DOs-KPX4AYNY.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-4sS4mJxe-R4ZPD63Z.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DbXcMJMS-W7OHQBRW.js"), __vite__mapDeps([70, 1, 2, 3, 69]))),
    loadSource: () => r(() => import("./component.clean-DV8U20np-LEPBP4GS.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean--EKmLA6h-TXK5ZTLO.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-12T14:00:00+02:00`,
  order: 1,
  pro: true
};
var Qe = n({
  entry: () => $e
});
var $e = {
  slug: `data-table`,
  name: `Data Table`,
  description: `Spreadsheet-style table: select cells and ranges, edit in place, copy and paste, undo and sort`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DGaVy3XD-WV7BNBE3.js"), __vite__mapDeps([71, 1, 2, 3, 72, 73]))),
  loadSource: () => r(() => import("./component-zjZL_VoW-GYDU3FIR.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BF18aJ-j-UTICN6E6.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-OeBBW_7u-SSE65N2A.js"), __vite__mapDeps([74, 1, 2, 3, 73]))),
    loadSource: () => r(() => import("./component.clean-DihFuV2a-MYXGGNSW.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6zbp80y-GGK6R27J.js").then((e3) => e3.docs), [])
  },
  order: 2,
  pro: true
};
var et = n({
  entry: () => tt
});
var tt = {
  slug: `date-range-picker`,
  name: `Date Range Picker`,
  description: `Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CYhBENQa-P6K6EZAE.js"), __vite__mapDeps([75, 1, 2, 3, 76]))),
  loadSource: () => r(() => import("./component-BtM-sP6A-V5JJY3XH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Co7_OGHR-E2GNUKIZ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DZiTLSj_-RLPLMVUB.js"), __vite__mapDeps([77, 1, 2, 3, 76]))),
    loadSource: () => r(() => import("./component.clean-CEv4fZRb-4MOXS43D.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-B0oHunXD-K5MKXMQ6.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T15:21:00+02:00`,
  order: 0,
  pro: true
};
var nt = n({
  entry: () => rt
});
var rt = {
  slug: `decision-inbox`,
  name: `Decision Inbox`,
  description: `Open decisions with two quick answers each \u2013 answered ones confirm and fold away`,
  category: `Feedback`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CcNPpld_-IR4ON6JX.js"), __vite__mapDeps([78, 1, 2, 3, 79]))),
  loadSource: () => r(() => import("./component-DKNf3JpT-O2JG2QUE.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Dk9yv4ja-HWN2FASR.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Cwxrnsci-ZR7SOVMR.js"), __vite__mapDeps([80, 1, 2, 3, 79]))),
    loadSource: () => r(() => import("./component.clean-DvCuYHUC-5JBRQX5M.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-F2xvmquK-JTVBYEL5.js").then((e3) => e3.docs), [])
  },
  order: 5
};
var it = n({
  entry: () => at
});
var at = {
  slug: `delegate-board`,
  name: `Delegate Board`,
  description: `Hand work to your agents by dragging it onto them \u2013 each agent previews its new \u201Cbusy until\u201D time, or switch to Auto and every new task goes to whoever is free first`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-V6j80N0E-CYRQPLB3.js"), __vite__mapDeps([81, 1, 2, 3, 82]))),
  loadSource: () => r(() => import("./component-C4JJselr-KEWBN5T4.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-zsx878sd-QPPRFC3O.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DNxPbueK-WWHUXGZF.js"), __vite__mapDeps([83, 1, 2, 3, 82]))),
    loadSource: () => r(() => import("./component.clean-CEwHmLzb-MJYOVQNC.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Pqz2BG28-U2DXZS6R.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-17T18:00:00+02:00`,
  order: 1,
  pro: true
};
var ot = n({
  entry: () => st
});
var st = {
  slug: `dropzone`,
  name: `Dropzone`,
  description: `Drag files in and watch them upload \u2013 fanning documents, colored type badges, progress with time left, errors with retry`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BBMr4ztO-A2P7OG6A.js"), __vite__mapDeps([84, 1, 2, 3, 85]))),
  loadSource: () => r(() => import("./component-CS4yLRuV-N5X5Y3IW.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CEAyQswo-7OEYD7ZF.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BtR7iQdY-YE7ACTXU.js"), __vite__mapDeps([86, 1, 2, 3, 85]))),
    loadSource: () => r(() => import("./component.clean-ISS8Q3NK-PJ5VQOHX.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BnqtWD6T-7DPDUQJ6.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T14:43:00+02:00`,
  order: 0,
  pro: true
};
var ct = n({
  entry: () => lt
});
var lt = {
  slug: `email-draft`,
  name: `Email Draft`,
  description: `Agent-written email for review \u2013 switch recipient and tone, edit inline, remove the attachment, send or discard with undo`,
  category: `Cards`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CQRf-Cg5-2G7PQ73A.js"), __vite__mapDeps([87, 1, 2, 3, 88]))),
  loadSource: () => r(() => import("./component-CA8MD8Pb-2NG2L5TC.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DvG6MyGO-GGOTVMVS.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CjJwmC-8-2T2L6PW2.js"), __vite__mapDeps([89, 1, 2, 3, 88]))),
    loadSource: () => r(() => import("./component.clean-BQx6n54n-4SP6QJPC.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CSmepD-w-S7SRXYEV.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-04T20:28:00+02:00`,
  order: 3
};
var ut = n({
  entry: () => dt
});
var dt = {
  slug: `experiment-card`,
  name: `Experiment Card`,
  description: `An A/B test in two lines that quietly unfolds on hover \u2013 variants linked to a tiny chart, a metric switch with rolling numbers, and a winner you pick with a click`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-ik_0XYps-UWFMJBXK.js"), __vite__mapDeps([90, 1, 2, 3, 91]))),
  loadSource: () => r(() => import("./component-x34Rnmkd-RUDDOBPW.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-4mTBCgRQ-YX667ORC.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Vp-K1jMG-XMLM2XVS.js"), __vite__mapDeps([92, 1, 2, 3, 91]))),
    loadSource: () => r(() => import("./component.clean-JBe9bepD-EOP7UQPB.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BMZW7XW_-5FLM4WUE.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-12T10:30:00+02:00`,
  order: 1,
  pro: true
};
var ft = n({
  entry: () => pt
});
var pt = {
  slug: `filter-menu`,
  name: `Filter Menu`,
  description: `Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BkxWHDVt-GZSP5ZXQ.js"), __vite__mapDeps([93, 3, 2, 94, 1, 95]))),
  loadSource: () => r(() => import("./component-DA4nGpsg-RJL6TQXR.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BAeK2YxB-R5AYTO6T.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Djfm83dS-MMPLUDEU.js"), __vite__mapDeps([96, 1, 2, 3, 95]))),
    loadSource: () => r(() => import("./component.clean-g0Mu7KP8-MOG6EU7I.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BHAk7JVw-KQLELSU3.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-04T20:10:00+02:00`,
  order: 2
};
var mt = n({
  entry: () => ht
});
var ht = {
  slug: `inline-diff`,
  name: `Inline Diff`,
  description: `AI edits to prose shown inline \u2013 struck and added words you accept or reject one by one, with keys, a popover and undo`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Y9Qip8LJ-X2QNX2YD.js"), __vite__mapDeps([97, 1, 2, 3, 98, 99]))),
  loadSource: () => r(() => import("./component-DcePCLLi-X7ZZTV4B.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B2DLF_SS-LOOLIROW.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BXz9gUDp-PEOMBWKR.js"), __vite__mapDeps([100, 1, 2, 3, 99]))),
    loadSource: () => r(() => import("./component.clean-DiUTkznR-UGDKETGS.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BcLvHkbg-QXMKGZUV.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 4,
  pro: true
};
var gt = n({
  entry: () => _t
});
var _t = {
  slug: `integration-picker`,
  name: `Integration Picker`,
  description: `Integrations page of a command menu \u2013 search, a list of services and the picked one with its connection on two tiles`,
  category: `Navigation`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-5-hgQYhm-SBLWCFQ2.js"), __vite__mapDeps([101, 1, 2, 3, 102]))),
  loadSource: () => r(() => import("./component-o-R9Codt-HFTXJ2YS.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BF4_1L0x-CYVWJLFF.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CPhhQKKr-4RSVBSFB.js"), __vite__mapDeps([103, 1, 2, 3, 102]))),
    loadSource: () => r(() => import("./component.clean-LFzR0Bzq-2IRQV32B.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-tUSra5Eq-ZVM3JCJ5.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-07T22:20:00+02:00`,
  order: 1,
  pro: true
};
var vt = n({
  entry: () => yt
});
var yt = {
  slug: `integration-settings`,
  name: `Integration Settings`,
  description: `Settings card for a connected service \u2013 on/off switch, API key, validated site address, time zone and a save bar`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Dxm1xr9_-62JVHYDX.js"), __vite__mapDeps([104, 1, 2, 3, 105]))),
  loadSource: () => r(() => import("./component-Bjr5P8jy-H3AMNHOP.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-subIR2Oi-2W4LAKRX.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CTC16fNW-LNXCZHEQ.js"), __vite__mapDeps([106, 1, 2, 3, 105]))),
    loadSource: () => r(() => import("./component.clean-BUrOVrhl-XXQZVVBQ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Q5m9NBRf-K7XTLXV2.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 1,
  pro: true
};
var bt = n({
  entry: () => xt
});
var xt = {
  slug: `kpi-chart`,
  name: `KPI Chart`,
  description: `Metric card with a multi-line chart and a tooltip that follows the pointer`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BQ61UvP8-VBRSAVIL.js"), __vite__mapDeps([107, 3, 2, 108, 1, 109]))),
  loadSource: () => r(() => import("./component-Jgn6z6mZ-Q3BDUSWD.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Dde47EwE-W6I3IXRJ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-B4-Re8fT-FLS6O37N.js"), __vite__mapDeps([110, 1, 2, 3, 109]))),
    loadSource: () => r(() => import("./component.clean-BKIbnoSt-6Q2BBZCS.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DG9GSNHk-AHBVQVQV.js").then((e3) => e3.docs), [])
  },
  order: 1,
  pro: true
};
var St = n({
  entry: () => Ct
});
var Ct = {
  slug: `memory-panel`,
  name: `Memory Panel`,
  description: `What the assistant remembers about you, grouped and editable \u2013 a master switch, category filters, and on every memory edit in place, pause or forget with Undo on the tray`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CEgv5bR9-3SNDFWL6.js"), __vite__mapDeps([111, 1, 2, 3, 112]))),
  loadSource: () => r(() => import("./component-D7aihq6a-XAUUL7JN.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BYw0IeXU-7RT3B34Q.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-C1W0NbsT-63FBKZUF.js"), __vite__mapDeps([113, 1, 2, 3, 112]))),
    loadSource: () => r(() => import("./component.clean-CyzFAbzv-WQN6L54I.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DIZNujLU-Z6AW5X4S.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
var wt = n({
  entry: () => Tt
});
var Tt = {
  slug: `message-actions`,
  name: `Message Actions`,
  description: `The quiet bar under an AI message \u2013 copy turns into a check, regenerate spins and unfolds a version switcher, thumbs pop and ask why, read aloud becomes a tiny equalizer`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CgV2euur-VG2ERNTZ.js"), __vite__mapDeps([114, 1, 2, 3, 115]))),
  loadSource: () => r(() => import("./component-j9tATXkO-EOOZZVU2.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DHZEMMUR-M4FSIE7H.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-jqs229XM-P7H3U3XK.js"), __vite__mapDeps([116, 1, 2, 3, 115]))),
    loadSource: () => r(() => import("./component.clean-Dh5NyMar-YAAWI7EH.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-7a_3RgBj-BJYY3NFA.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T16:00:00+02:00`,
  order: 1,
  pro: false
};
var Et = n({
  entry: () => Dt
});
var Dt = {
  slug: `model-picker`,
  name: `Model Picker`,
  description: `The model menu of an AI chat \u2013 point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-C580yDTY-BPE2X5HD.js"), __vite__mapDeps([117, 1, 2, 3, 118]))),
  loadSource: () => r(() => import("./component-BicykQ1s-2BZGI7ZQ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B2vZk3kt-KVURRUT2.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-B7cgzOPZ-L77TPHAW.js"), __vite__mapDeps([119, 1, 2, 3, 118]))),
    loadSource: () => r(() => import("./component.clean-O4r9_IHP-4EHIV7UR.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BaZCBKT8-ZFZQVGFU.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
var Ot = n({
  entry: () => kt
});
var kt = {
  slug: `notification-stack`,
  name: `Notification Stack`,
  description: `Notice cards stacked behind each other \u2013 dismiss the front one to reveal the next`,
  category: `Feedback`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-RSBM-GoA-D3LJRLB4.js"), __vite__mapDeps([120, 1, 2, 3, 121]))),
  loadSource: () => r(() => import("./component-gA3RoTWK-MQNCLZSJ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Y8kxxKKu-NG5UY3BS.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-gBQjVTxc-7UAAMD52.js"), __vite__mapDeps([122, 1, 2, 3, 121]))),
    loadSource: () => r(() => import("./component.clean-DJKRjQ7k-PQDWGDKV.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DzYWfmI1-KGAEFCZH.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 6
};
var At = n({
  entry: () => jt
});
var jt = {
  slug: `otp-input`,
  name: `OTP Input`,
  description: `The verification code field done right \u2013 a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BoVVleq1-RCQPUCSH.js"), __vite__mapDeps([123, 1, 2, 3, 124]))),
  loadSource: () => r(() => import("./component-CDqIdVLz-PK3OAMJV.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BNtW5zDz-F6HHITPO.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-SPg51xTG-BCO4V2GS.js"), __vite__mapDeps([125, 1, 2, 3, 124]))),
    loadSource: () => r(() => import("./component.clean-DxVBY7aC-RW6YDE23.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-Gin_1k8r-3SXCZSVP.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T17:53:00+02:00`,
  order: 0
};
var Mt = n({
  entry: () => Nt
});
var Nt = {
  slug: `permission-request`,
  name: `Permission Request`,
  description: `An agent asks for one specific right \u2013 who, why and exactly what will happen \u2013 and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-B1zzQqO2-OOE76CJH.js"), __vite__mapDeps([126, 1, 2, 3, 127]))),
  loadSource: () => r(() => import("./component-COkht5bW-3RJHLMEF.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BZMuWE3V-EC5WZ5TG.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DKsx9U9O-5RUOREW2.js"), __vite__mapDeps([128, 1, 2, 3, 127]))),
    loadSource: () => r(() => import("./component.clean-CZdJFe3o-4EQRCFRY.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CcOqdgxq-4EMOCGJ2.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-18T12:00:00+02:00`,
  order: 1,
  pro: true
};
var Pt = n({
  entry: () => Ft
});
var Ft = {
  slug: `profile-menu`,
  name: `Profile Menu`,
  description: `Account card with the signed-in user, menu actions and profile setup progress`,
  category: `Navigation`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-d_AV0tPL-C3WNRV23.js"), __vite__mapDeps([129, 1, 2, 3, 130]))),
  loadSource: () => r(() => import("./component-B655DKtJ-W7BEGN6W.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-C8QFU_GC-TTTH52DG.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Du4BhTGQ-DBT5LPDE.js"), __vite__mapDeps([131, 1, 2, 3, 130]))),
    loadSource: () => r(() => import("./component.clean-Bg6CvdjJ-YIHCL56E.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-H8K3PE8_-2RQRVCDF.js").then((e3) => e3.docs), [])
  },
  order: 1
};
var It = n({
  entry: () => Lt
});
var Lt = {
  slug: `progress-tracker`,
  name: `Progress Tracker`,
  description: `Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play`,
  category: `Feedback`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BKqcXOSN-HUUFHWSX.js"), __vite__mapDeps([132, 1, 2, 3, 133]))),
  loadSource: () => r(() => import("./component-4AUM-pc3-GEGPHGQM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CaD1NYxe-RUKB24RZ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CQ9Mgt2p-UECU33TQ.js"), __vite__mapDeps([134, 1, 2, 3, 133]))),
    loadSource: () => r(() => import("./component.clean-yoynJ5MU-QBIGKROI.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CyqSWI06-WQYTJLEV.js").then((e3) => e3.docs), [])
  },
  order: 3
};
var Rt = n({
  entry: () => zt
});
var zt = {
  slug: `project-card`,
  name: `Project Card`,
  description: `A two-line project summary that quietly unfolds on hover \u2013 a progress ring with one segment per subtask, a people filter and a status picker, all linked by hover`,
  category: `Cards`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-9sHHhTyA-WCVOVSHR.js"), __vite__mapDeps([135, 1, 2, 3, 136]))),
  loadSource: () => r(() => import("./component-ouJ0vbVn-COIQGB2H.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B7LDXgsz-SCWCZCQE.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DiU4wbPA-EXRBDHDH.js"), __vite__mapDeps([137, 1, 2, 3, 136]))),
    loadSource: () => r(() => import("./component.clean-Bkj7cENz-4ZI6GM6D.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BzBRkLoA-PE3OMCLH.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-10T15:20:00+02:00`,
  order: 1,
  pro: true
};
var Bt = n({
  entry: () => Vt
});
var Vt = {
  slug: `prompt-library`,
  name: `Prompt Library`,
  description: `Saved prompt templates with variables \u2013 type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CctwMXFR-GOWUYQ3T.js"), __vite__mapDeps([138, 1, 2, 3, 139]))),
  loadSource: () => r(() => import("./component-irX2Z2jz-E23L2Z5A.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BkEThM39-DMKOQKOZ.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DRfoB4wl-QVWYPBFA.js"), __vite__mapDeps([140, 1, 2, 3, 139]))),
    loadSource: () => r(() => import("./component.clean-iuex-cSq-4PGZL2WD.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-pSez6WcC-PBGNRJIW.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
var Ht = n({
  entry: () => Ut
});
var Ut = {
  slug: `reaction-bar`,
  name: `Reaction Bar`,
  description: `Like, comment, repost and share in one pill \u2013 icons pop and fill, counts roll in digit by digit`,
  category: `Buttons`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DlJqXDIq-PBNN7TTR.js"), __vite__mapDeps([141, 1, 2, 3, 142]))),
  loadSource: () => r(() => import("./component-DhnR-6x--E2ID4UZM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BlXuOLsY-325JFZT6.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-1KuFFkG8-7IOUOJSJ.js"), __vite__mapDeps([143, 1, 2, 3, 142]))),
    loadSource: () => r(() => import("./component.clean-Czoq8jHQ-GZ2FYNUH.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BIHx13f2-TYVSWAIR.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-04T10:00:00+02:00`,
  order: 2
};
var Wt = n({
  entry: () => Gt
});
var Gt = {
  slug: `segmented-control`,
  name: `Segmented Control`,
  description: `Switch between two to six options \u2013 a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges`,
  category: `Navigation`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BzK_zDAD-JNC57ABM.js"), __vite__mapDeps([144, 1, 2, 3, 145, 146]))),
  loadSource: () => r(() => import("./component-D8XzTnaf-7C6XVRJA.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DnR5fqUI-7U4FGZOD.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-D1uXYCFG-EORBGG3V.js"), __vite__mapDeps([147, 1, 2, 3, 146]))),
    loadSource: () => r(() => import("./component.clean-CmUvwP9C-4BCIHBZV.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DiUhGaq--CWYZ6CLG.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T15:42:00+02:00`,
  order: 0
};
var Kt = n({
  entry: () => qt
});
var qt = {
  slug: `setup-guide`,
  name: `Setup Guide`,
  description: `Onboarding panel with a progress bar and collapsible task groups that strike through when done`,
  category: `Feedback`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cb1j7tKz-EAOG7YHM.js"), __vite__mapDeps([148, 1, 2, 3, 149, 150]))),
  loadSource: () => r(() => import("./component-DK30rsxS-RB6Q5COH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CiCBMHAb-WGZYLGM2.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DgcWwiZH-LXX2ZV35.js"), __vite__mapDeps([151, 1, 2, 3, 150]))),
    loadSource: () => r(() => import("./component.clean-OCK50Cmo-U6BSP2IN.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CWU7X6cT-SG2RGF37.js").then((e3) => e3.docs), [])
  },
  order: 4,
  pro: true
};
var Jt = n({
  entry: () => Yt
});
var Yt = {
  slug: `smart-recommendation`,
  name: `Smart Recommendation`,
  description: `Suggestion card with a confidence signal, alternatives to switch to and accept with undo`,
  category: `Cards`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Ed3S7lvS-FRGBVUUZ.js"), __vite__mapDeps([152, 1, 2, 3, 153]))),
  loadSource: () => r(() => import("./component-BrneHT_E-7KILX6KV.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bj9wwWM5-RLNON3HY.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CnpU6JZL-VYM6MF6L.js"), __vite__mapDeps([154, 1, 2, 3, 153]))),
    loadSource: () => r(() => import("./component.clean-BgLR5R6h-PCPQTTVJ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-DAMwFsKO-QA6OPHPU.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 2
};
var Xt = n({
  entry: () => Zt
});
var Zt = {
  slug: `stepper-form`,
  name: `Stepper Form`,
  description: `A multi-step flow for onboarding and setup \u2013 steps that fill and check off, sliding steps, a card that morphs to each step, inline validation and a success state`,
  category: `Inputs`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BOLhhfTT-LJG2YZ67.js"), __vite__mapDeps([155, 1, 2, 3, 156]))),
  loadSource: () => r(() => import("./component-C81bLSK9-RRDUTGMR.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-C4pAsv52-M732KSXY.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BYDkomFg-FPQBO5QQ.js"), __vite__mapDeps([157, 1, 2, 3, 156]))),
    loadSource: () => r(() => import("./component.clean-DCdgppww-DFRD7HCU.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CGankNEa-IX5BFX4E.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T17:52:00+02:00`,
  order: 0,
  pro: true
};
var Qt = n({
  entry: () => $t
});
var $t = {
  slug: `thinking-loader`,
  name: `Thinking Loader`,
  description: `A small working pill for AI replies \u2013 an eight-ray spinner and a shimmering label that rolls through phases and settles on a check`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-qJGH2Gjh-ARQVUADR.js"), __vite__mapDeps([158, 1, 2, 3, 159, 160]))),
  loadSource: () => r(() => import("./component-DrU1Ef96-5H2IPZCN.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CqEa36vT-7TPA6FHB.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-DWvTXnKE-QONUPCMV.js"), __vite__mapDeps([161, 1, 2, 3, 160]))),
    loadSource: () => r(() => import("./component.clean-CkLznOln-5NOQCAZS.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-O5cvsaD9-ZFPDLOTQ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-09T22:55:00+02:00`,
  order: 3
};
var en = n({
  entry: () => tn
});
var tn = {
  slug: `thinking-state`,
  name: `Thinking State`,
  description: `AI working panel with a live timer, searched sources and thinking steps that appear one by one`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-sabUvR7r-O36ZCZV2.js"), __vite__mapDeps([162, 3, 2, 163, 1, 164]))),
  loadSource: () => r(() => import("./component-G7HptHGl-NSPDBX4G.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DQUTX2jQ-MTTQM2OY.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CXxA6VEx-HRKJBODC.js"), __vite__mapDeps([165, 1, 2, 3, 164]))),
    loadSource: () => r(() => import("./component.clean-DpWH1oax-HBIELHNF.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-6__65Xac-5CJN23N3.js").then((e3) => e3.docs), [])
  },
  order: 2,
  pro: true
};
var nn = n({
  entry: () => rn
});
var rn = {
  slug: `tips-panel`,
  name: `Tips Panel`,
  description: `Grid of short tips with one action each \u2013 taken tips turn into a done state`,
  category: `Cards`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-D2Q4vYDw-PW5567GC.js"), __vite__mapDeps([166, 1, 2, 3, 167]))),
  loadSource: () => r(() => import("./component-DHMdjTdE-ZF7A2FQS.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DiX_OeMs-JBHRJPZ7.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Bfu_rP8L-KGNUCAOA.js"), __vite__mapDeps([168, 1, 2, 3, 167]))),
    loadSource: () => r(() => import("./component.clean-BVT04wSu-KIK6UHH6.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-BRNY_KgW-HFOGXVTL.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-03`,
  order: 1
};
var D = n({
  entry: () => an
});
var an = {
  slug: `toaster`,
  name: `Toaster`,
  description: `Calm toasts from anywhere \u2013 a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss`,
  category: `Feedback`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cv538yeC-IBNX4OSX.js"), __vite__mapDeps([169, 1, 2, 3, 170]))),
  loadSource: () => r(() => import("./component-C7ROz4iL-AGGR2VKQ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CQfMJLpp-S4FZQ6LX.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-CtdFgWee-OU2F2OBY.js"), __vite__mapDeps([171, 1, 2, 3, 170]))),
    loadSource: () => r(() => import("./component.clean-DSitrADN-LXWZFBDW.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CflJ0oKJ-LP565WWP.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T15:40:00+02:00`,
  order: 0,
  pro: true
};
var on = n({
  entry: () => sn
});
var sn = {
  slug: `tool-call-card`,
  name: `Tool Call Card`,
  description: `An agent's tool call in one line \u2013 live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-C2oxSuna-Y7P73VBJ.js"), __vite__mapDeps([172, 1, 2, 3, 173, 174]))),
  loadSource: () => r(() => import("./component-DOfHRYAO-RG2AKWEH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-I28H9on4-HKLJT2LN.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-q2ZwGlZu-KCW4PWZV.js"), __vite__mapDeps([175, 1, 2, 3, 174]))),
    loadSource: () => r(() => import("./component.clean-DoWPdBku-A6GJS4DD.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-vn8R5wlP-G2C7LDGP.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 1
};
var cn = n({
  entry: () => ln
});
var ln = {
  slug: `trace-waterfall`,
  name: `Trace Waterfall`,
  description: `Where the time and money of an agent run go \u2013 every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent`,
  category: `Agents`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-VWNU0E7Q-Q7DEMRMD.js"), __vite__mapDeps([176, 1, 2, 3, 177]))),
  loadSource: () => r(() => import("./component-MnuLboKN-VSLGQ57I.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CPzCd5SO-RWFAI6SS.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-Cim7onyI-2KNZY37Q.js"), __vite__mapDeps([178, 1, 2, 3, 177]))),
    loadSource: () => r(() => import("./component.clean-uYI34p6t-WVUXDXIV.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-CMKNDwWl-VXSAYZM3.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-20T10:00:00+02:00`,
  order: 1,
  pro: true
};
var un = n({
  entry: () => dn
});
var dn = {
  slug: `usage-meter`,
  name: `Usage Meter`,
  description: `Plan usage and AI credits \u2013 a stacked credits meter by category, daily sparkline, limits and a button that speaks up near the limit`,
  category: `Data display`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-izlk0-DS-5JN5I2ST.js"), __vite__mapDeps([179, 1, 2, 3, 180, 181]))),
  loadSource: () => r(() => import("./component-BEShq_nD-W7IHBTWZ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CeOV3oLU-6IJ6GYAX.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-BjDeSoUM-H5KZI2LH.js"), __vite__mapDeps([182, 1, 2, 3, 181]))),
    loadSource: () => r(() => import("./component.clean-DZEPLsCQ-74R2YANO.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-C76Xpqc0-A7OIZSSZ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-08T17:51:00+02:00`,
  order: 0,
  pro: true
};
var fn = n({
  entry: () => pn
});
var pn = {
  slug: `writing-assistant`,
  name: `Writing Assistant`,
  description: `AI chat card with a soft gradient glow, suggestions, streaming replies and live voice dictation`,
  category: `Chat`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BhVeTwOS-UADHFEFV.js"), __vite__mapDeps([183, 1, 2, 3, 184]))),
  loadSource: () => r(() => import("./component-DZ0boXyY-KRWVOLZW.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-cbxE_Tr5-PV5PXMXL.js").then((e3) => e3.docs), []),
  clean: {
    Preview: (0, b.lazy)(() => r(() => import("./demo.clean-B-ER_Luk-2X53D62D.js"), __vite__mapDeps([185, 1, 2, 3, 184]))),
    loadSource: () => r(() => import("./component.clean-D2uIa_Gl-5SR5JNQZ.js").then((e3) => e3.default), []),
    loadDocs: () => r(() => import("./docs.clean-B6YbLikW-5BZGKPRZ.js").then((e3) => e3.docs), [])
  },
  added: `2026-10-04T20:14:00+02:00`,
  order: 3,
  pro: true
};
var mn = n({
  entry: () => hn
});
var hn = {
  slug: `agent-gallery`,
  name: `Agent Gallery`,
  description: `Slim gradient panels with one open product screen in the middle \u2013 pick a panel and it glides open`,
  category: `Feature sections`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Dx1zk5ox-3GPLAP24.js"), __vite__mapDeps([186, 1, 2, 3, 187]))),
  loadSource: () => r(() => import("./component-DFTWGCQh-5VDOEDUC.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BpUkSURm-I3MTGPOD.js").then((e3) => e3.docs), []),
  added: `2026-10-04T20:32:00+02:00`,
  order: 2,
  pro: true
};
var gn = n({
  entry: () => _n
});
var _n = {
  slug: `ai-workspace`,
  name: `AI Workspace`,
  description: `Complete assistant app \u2013 sidebar, welcome, streaming chat and projects, built on the Chat Composer`,
  category: `Productivity`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CZJ2T4nU-JPKQ6D5O.js"), __vite__mapDeps([188, 1, 2, 3, 47, 189]))),
  loadSource: () => r(() => import("./component-BZVoUx2k-MVTV2M6F.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DP4g1Nn7-AE5CBWNM.js").then((e3) => e3.docs), []),
  added: `2026-10-04T11:30:00+02:00`,
  order: 1,
  pro: true
};
var vn = n({
  entry: () => yn
});
var yn = {
  slug: `app-directory`,
  name: `App Directory`,
  description: `Browse, search and connect integrations \u2013 categories, filters and app cards with a connect flow`,
  category: `Integrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BiwOrW2x-4HYWPAXG.js"), __vite__mapDeps([190, 1, 2, 3, 191]))),
  loadSource: () => r(() => import("./component-CLZvFUCF-WKO2U36W.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bi_YQg2x-IBDZJGHP.js").then((e3) => e3.docs), []),
  added: `2026-10-03`,
  order: 1,
  pro: true
};
var bn = n({
  entry: () => xn
});
var xn = {
  slug: `client-context`,
  name: `Client Context`,
  description: `A client workspace with live numbers and a shared context timeline \u2013 switch clients, search, filter and add notes or files`,
  category: `Productivity`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-rS721rJa-WK63IQTC.js"), __vite__mapDeps([192, 1, 2, 3, 193]))),
  loadSource: () => r(() => import("./component-CtS7yavp-IFAL4ZFR.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-D418_9B_-RBSXHQ7F.js").then((e3) => e3.docs), []),
  added: `2026-10-05T15:50:00+02:00`,
  order: 0,
  pro: true
};
var Sn = n({
  entry: () => Cn
});
var Cn = {
  slug: `invoice-credit`,
  name: `Invoice & Credit Note`,
  description: `An invoice and its credit note stacked like paper \u2013 switch between them, pick lines to credit, adjust amounts and issue`,
  category: `Billing`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-D1arByOa-VKAW7G2K.js"), __vite__mapDeps([194, 1, 2, 3, 195]))),
  loadSource: () => r(() => import("./component-CWGZCMX--BMPDNZB2.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BUxqzOgh-V5BZZR5S.js").then((e3) => e3.docs), []),
  added: `2026-10-04T20:52:00+02:00`,
  order: 0,
  pro: true
};
var wn = n({
  entry: () => Tn
});
var Tn = {
  slug: `kpi-board`,
  name: `KPI Board`,
  description: `The top of a dashboard \u2013 three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes`,
  category: `Analytics`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-mNpCRsfS-CW36B5KS.js"), __vite__mapDeps([196, 1, 2, 3, 197]))),
  loadSource: () => r(() => import("./component-L0LpkbiF-M2O2XQKG.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-D5diAW3h-DPKMHD73.js").then((e3) => e3.docs), []),
  added: `2026-10-12T20:00:00+02:00`,
  order: 1,
  pro: true
};
var En = n({
  entry: () => Dn
});
var Dn = {
  slug: `logo-marquee`,
  name: `Logo Marquee`,
  description: `The endless \u201CTrusted by\u201D strip \u2013 a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour`,
  category: `Social proof`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Bp-um2Aj-LZRPB6IF.js"), __vite__mapDeps([198, 1, 2, 3, 199]))),
  loadSource: () => r(() => import("./component-CXPyG-44-EVEUVDJC.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-6bqyeHxu-O5N7UBAG.js").then((e3) => e3.docs), []),
  added: `2026-10-08T15:44:00+02:00`,
  order: 0,
  pro: false
};
var On = n({
  entry: () => kn
});
var kn = {
  slug: `metrics-dashboard`,
  name: `Metrics Dashboard`,
  description: `Sales overview \u2013 KPI cards pick the metric, one chart switches between dotted line and bars, with top products and channels`,
  category: `Analytics`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Ytbb4Swi-FJG3JYKC.js"), __vite__mapDeps([200, 1, 2, 3, 201]))),
  loadSource: () => r(() => import("./component-OoeQadAf-73I6NQS2.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-ZdpK_fwc-3WTZX6OA.js").then((e3) => e3.docs), []),
  added: `2026-10-04T18:59:00+02:00`,
  order: 0,
  pro: true
};
var An = n({
  entry: () => jn
});
var jn = {
  slug: `pricing-plans`,
  name: `Pricing Plans`,
  description: `Pricing section with a monthly / yearly switch, three plan cards and collapsible details`,
  category: `Pricing`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DWd1ZKX0-2CYEXLQJ.js"), __vite__mapDeps([202, 1, 2, 3, 203]))),
  loadSource: () => r(() => import("./component-BeLkFd64-NVZNFN6Z.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-KUHWR962-LF225WR2.js").then((e3) => e3.docs), []),
  order: 0,
  pro: true
};
var Mn = n({
  entry: () => Nn
});
var Nn = {
  slug: `task-board`,
  name: `Task Board`,
  description: `Kanban board with drag and drop, quick add, a detail panel, search, label filters and a compact view`,
  category: `Productivity`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BbZ2lqOk-U3G7JZQP.js"), __vite__mapDeps([204, 1, 2, 3, 36, 205]))),
  loadSource: () => r(() => import("./component-Cuyk80dR-FT2L6WX3.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BQ4CPEZB-2LL2CPP6.js").then((e3) => e3.docs), []),
  added: `2026-10-03`,
  order: 0,
  pro: true
};
var Pn = n({
  entry: () => Fn
});
var Fn = {
  slug: `testimonial-wall`,
  name: `Testimonial Wall`,
  description: `The landing-page wall of quotes \u2013 columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia`,
  category: `Social proof`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DrrNKEd7-JMFFJNT6.js"), __vite__mapDeps([206, 1, 2, 3, 207]))),
  loadSource: () => r(() => import("./component-DEfvlqwK-NMP6S44U.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DNt7L4gM-64QHPZDX.js").then((e3) => e3.docs), []),
  added: `2026-10-08T17:54:00+02:00`,
  order: 0,
  pro: false
};
var In = n({
  entry: () => Ln
});
var Ln = {
  slug: `agent-team`,
  name: `Agent Team`,
  description: `A prompt types itself and branches out into three agents, each with a role and overlapping tool logos`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BtlH6dH8-CH7WLNIP.js"), __vite__mapDeps([208, 1, 2, 3, 209]))),
  loadSource: () => r(() => import("./component-DYurEycN-7VZNJGTJ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BNtHN1ia-7FM2TCVR.js").then((e3) => e3.docs), []),
  order: 10,
  added: `2026-10-04T18:21:00+02:00`
};
var Rn = n({
  entry: () => zn
});
var zn = {
  slug: `cover-flow`,
  name: `Cover Flow`,
  description: `Browse covers in 3D \u2013 drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-C2jfF4UB-SMTFR5T3.js"), __vite__mapDeps([210, 1, 2, 3, 211]))),
  loadSource: () => r(() => import("./component-DvIszmxu-5BG2T4F2.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-YCamylwB-WRSAKZZL.js").then((e3) => e3.docs), []),
  added: `2026-10-09T23:05:00+02:00`,
  order: 0
};
var Bn = n({
  entry: () => Vn
});
var Vn = {
  slug: `empty-calendar`,
  name: `Empty Calendar`,
  description: `Stack of calendar cards marked empty, fanning out on hover`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-MXjIQshC-OOBQJ4IL.js"), __vite__mapDeps([212, 1, 2, 3, 213]))),
  loadSource: () => r(() => import("./component-PJ290Npx-HSKINNWY.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BwxiOt3k-6ZPYMYIQ.js").then((e3) => e3.docs), []),
  order: 1
};
var Hn = n({
  entry: () => Un
});
var Un = {
  slug: `enrichment-orbit`,
  name: `Enrichment Orbit`,
  description: `Grok tile inside two rings with comets and data nodes orbiting around it`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CU49Fdlm-KKHRG5TA.js"), __vite__mapDeps([214, 1, 2, 3, 215]))),
  loadSource: () => r(() => import("./component-fn3yfRgp-BPKL7NLT.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B44eJjOH-LYWNIBGM.js").then((e3) => e3.docs), []),
  order: 5
};
var Wn = n({
  entry: () => Gn
});
var Gn = {
  slug: `frost-cloud`,
  name: `Frost Cloud`,
  description: `A frosted white cloud with eyes cut out of it, on a red-orange or blue sky \u2013 it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DrDu-VuE-WVYGJYKR.js"), __vite__mapDeps([216, 1, 2, 3, 217]))),
  loadSource: () => r(() => import("./component-CujPjqAK-ZRTI6AKO.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BkosQpJv-JQARQKFL.js").then((e3) => e3.docs), []),
  order: 0,
  added: `2026-10-08T12:40:00+02:00`
};
var Kn = n({
  entry: () => qn
});
var qn = {
  slug: `ghosted-chat`,
  name: `Ghosted Chat`,
  description: `Unanswered chat messages marked as read, with a thumbs-down reply on hover`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cm2FVMWj-AP6WFUP5.js"), __vite__mapDeps([218, 1, 2, 3, 219]))),
  loadSource: () => r(() => import("./component-DmIFsdg6-QUUVXNHU.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BHILhaci-57GCGWCL.js").then((e3) => e3.docs), []),
  order: 3
};
var Jn = n({
  entry: () => Yn
});
var Yn = {
  slug: `glass-folder`,
  name: `Glass Folder`,
  description: `Glassy blue folder with documents behind a frosted pocket that tips open on hover`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DlhpiUWr-JK4USNV2.js"), __vite__mapDeps([220, 3, 2, 221]))),
  loadSource: () => r(() => import("./component-DXXuHFnW-KBVCPHDM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DSLhnq5S-UYM7CVLN.js").then((e3) => e3.docs), []),
  order: 7,
  pro: true,
  added: `2026-10-04T14:30:00+02:00`
};
var Xn = n({
  entry: () => Zn
});
var Zn = {
  slug: `glow-cloud`,
  name: `Glow Cloud`,
  description: `A glowing cloud with eyes in blue or red-orange \u2013 it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cm8kSHcX-DQRKOXRS.js"), __vite__mapDeps([222, 1, 2, 3, 223]))),
  loadSource: () => r(() => import("./component-CaX99EJw-RYFEBBWB.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B3la3x8y-Z5ZX5WYQ.js").then((e3) => e3.docs), []),
  order: 0,
  added: `2026-10-08T12:39:00+02:00`
};
var Qn = n({
  entry: () => $n
});
var $n = {
  slug: `glow-keyboard`,
  name: `Glow Keyboard`,
  description: `AI chat input that types itself over a glass keyboard \u2013 every key press sends a wave up the gradient floor`,
  category: `Product scenes`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CfD9afHB-3YJOZHZO.js"), __vite__mapDeps([224, 1, 2, 3, 225]))),
  loadSource: () => r(() => import("./component-DPcOx-S--4GWD645M.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BnO3I4vF-RT5CDLXA.js").then((e3) => e3.docs), []),
  order: 0,
  pro: true,
  added: `2026-10-06T19:00:00+02:00`
};
var er = n({
  entry: () => tr
});
var tr = {
  slug: `integration-beam`,
  name: `Integration Beam`,
  description: `Your product between the tools it connects \u2013 light pulses flow along curved beams, hover to focus a tool, click to pause it`,
  category: `Product scenes`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-B_Bc7Zla-23AD6V62.js"), __vite__mapDeps([226, 1, 2, 3, 227]))),
  loadSource: () => r(() => import("./component-B2U-I8IC-2GXMSKIP.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DrI7Fr6r-7B74YG4Q.js").then((e3) => e3.docs), []),
  order: 0,
  added: `2026-10-08T15:43:00+02:00`
};
var nr = n({
  entry: () => rr
});
var rr = {
  slug: `integration-flow`,
  name: `Integration Flow`,
  description: `Integration pills rotating along a dashed arc, each beaming its data into a central analysis hub`,
  category: `Product scenes`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CL_ySX-H-B6QG67HM.js"), __vite__mapDeps([228, 1, 2, 3, 229]))),
  loadSource: () => r(() => import("./component-DV8U20np-XMDH4VPX.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DVNki4xQ-CPPOW473.js").then((e3) => e3.docs), []),
  order: 1,
  pro: true,
  added: `2026-10-04T15:41:00+02:00`
};
var ir = n({
  entry: () => ar
});
var ar = {
  slug: `integration-grid`,
  name: `Integration Grid`,
  description: `Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BABw5NIJ-UL6QJ6T4.js"), __vite__mapDeps([230, 3, 2, 231, 232]))),
  loadSource: () => r(() => import("./component-CIl7yz5m-ZCZJIJ27.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-1TxNi_aU-5T7JWYBT.js").then((e3) => e3.docs), []),
  order: 11,
  added: `2026-10-04T20:31:00+02:00`
};
var or = n({
  entry: () => sr
});
var sr = {
  slug: `layer-stack`,
  name: `Layer Stack`,
  description: `Isometric stack of five layers with a list beside it \u2013 the chosen entry lifts its layer out in color`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-KQRMxKWn-MOXES45F.js"), __vite__mapDeps([233, 1, 2, 3, 234]))),
  loadSource: () => r(() => import("./component-Dsgd5ZHH-DE4TELWM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BWUGRuON-WG3HTVRV.js").then((e3) => e3.docs), []),
  order: 9,
  added: `2026-10-04T18:03:00+02:00`
};
var cr = n({
  entry: () => lr
});
var lr = {
  slug: `lead-sourcing`,
  name: `Lead Sourcing`,
  description: `ChatGPT tile linked to Gmail and Grok, with a shine running along the connection`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BTBcqeeL-VLXYUGGC.js"), __vite__mapDeps([235, 1, 2, 3, 236]))),
  loadSource: () => r(() => import("./component-DKl1mEra-RDAMJHBB.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BEdCATSE-JXFEQT6Y.js").then((e3) => e3.docs), []),
  order: 4
};
var ur = n({
  entry: () => dr
});
var dr = {
  slug: `logo-cluster`,
  name: `Logo Cluster`,
  description: `Your mark on a white disc in the middle \u2013 company logos bounce out of it and settle around it`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CkkSZhS9-26MMS5XR.js"), __vite__mapDeps([237, 1, 2, 3, 238]))),
  loadSource: () => r(() => import("./component-BE1e5ouD-PCA3YTMG.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-C_UZC7kN-Q7XDPRPZ.js").then((e3) => e3.docs), []),
  order: 0,
  added: `2026-10-07T15:00:00+02:00`
};
var fr = n({
  entry: () => pr
});
var pr = {
  slug: `model-wheel`,
  name: `Model Wheel`,
  description: `AI model names on a turning drum \u2013 the rows bend away at the edges and each model lands on a soft gray fill`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-OZULToi6-Z3OUKQW3.js"), __vite__mapDeps([239, 1, 2, 3, 240]))),
  loadSource: () => r(() => import("./component-hDQpocSR-46L2ALUK.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-ubQm_MNq-RH3LQVPP.js").then((e3) => e3.docs), []),
  order: 0,
  added: `2026-10-07T12:00:00+02:00`
};
var mr = n({
  entry: () => hr
});
var hr = {
  slug: `outreach-branches`,
  name: `Outreach Branches`,
  description: `Lines branching out to Gmail, Slack and Notion with colored pulses flowing down`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-D-FldunI-AWCIBVPN.js"), __vite__mapDeps([241, 1, 2, 3, 242]))),
  loadSource: () => r(() => import("./component-DihFuV2a-XVABOEKQ.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CgriwkwB-R4OH4WFU.js").then((e3) => e3.docs), []),
  order: 6,
  pro: true
};
var gr = n({
  entry: () => _r
});
var _r = {
  slug: `project-flow`,
  name: `Project Flow`,
  description: `Animated scene of a client task branching into subtasks, notes and assigned roles`,
  category: `Product scenes`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cwdm4ytX-VIFUWVTR.js"), __vite__mapDeps([243, 1, 2, 3, 244]))),
  loadSource: () => r(() => import("./component-CEv4fZRb-TTYHDJOM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DF3ihqsX-XZRZUV55.js").then((e3) => e3.docs), []),
  order: 0,
  pro: true
};
var vr = n({
  entry: () => yr
});
var yr = {
  slug: `region-dach`,
  name: `DACH Region`,
  description: `DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan`,
  category: `Maps`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CmYYw1tl-Q6356USN.js"), __vite__mapDeps([245, 1, 2, 3, 246]))),
  loadSource: () => r(() => import("./component-CSUU-7Px-QX7LRMMH.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B_OI8PyY-IZ2ITZGV.js").then((e3) => e3.docs), []),
  order: 1
};
var br = n({
  entry: () => xr
});
var xr = {
  slug: `side-folder`,
  name: `Side Folder`,
  description: `Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-ClUxDNiT-OBP3ETDC.js"), __vite__mapDeps([247, 1, 2, 3, 248]))),
  loadSource: () => r(() => import("./component-CSj-h-r4-MQTU7E4Y.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BG1aWD2h-AU6QWDQW.js").then((e3) => e3.docs), []),
  order: 8,
  added: `2026-10-04T15:00:00+02:00`
};
var Sr = n({
  entry: () => Cr
});
var Cr = {
  slug: `tab-overload`,
  name: `Tab Overload`,
  description: `Overlapping browser windows where the highlight follows the hovered tab`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CVKU8Uzh-K3XJPPZP.js"), __vite__mapDeps([249, 1, 2, 3, 250]))),
  loadSource: () => r(() => import("./component-fYpYKcvB-DZ5U5LQB.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Cf87NU-O-DP7QOKNV.js").then((e3) => e3.docs), []),
  order: 2
};
var wr = n({
  entry: () => Tr
});
var Tr = {
  slug: `team-invite`,
  name: `Team Invite`,
  description: `Connected teammates \u2013 a cursor drags a new one into the empty slot, the line turns solid and they go online`,
  category: `Card illustrations`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-cWsVSmbI-B2CLPAOA.js"), __vite__mapDeps([251, 1, 2, 3, 252]))),
  loadSource: () => r(() => import("./component-BA2VwGBj-DW2C2U6P.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BtJJaDyI-7TMN2GYF.js").then((e3) => e3.docs), []),
  order: 8,
  added: `2026-10-04T17:49:00+02:00`
};
var Er = n({
  entry: () => Dr
});
var Dr = {
  slug: `voice-orb`,
  name: `Voice Orb`,
  description: `The face of a voice assistant \u2013 a sphere of dots that breathes, catches sound, collapses into a spinning ring while thinking and ripples when it speaks`,
  category: `Product scenes`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-B3RzKcXL-KXAQC6KG.js"), __vite__mapDeps([253, 1, 2, 3, 254]))),
  loadSource: () => r(() => import("./component-CEwHmLzb-BV47YMMS.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B_2rjjD8-MEVYSQWT.js").then((e3) => e3.docs), []),
  added: `2026-10-12T12:00:00+02:00`,
  order: 1,
  pro: true
};
var Or = n({
  entry: () => kr
});
var kr = {
  slug: `world-map`,
  name: `World Map Continental`,
  description: `World map with one highlighted continent and a pastel band along its coastline, switchable between all six`,
  category: `Maps`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Q0wmIwEm-Q67D3PA2.js"), __vite__mapDeps([255, 1, 2, 3, 256]))),
  loadSource: () => r(() => import("./component-ISS8Q3NK-AYP6V2CG.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B-pCOumb-OYKU6XNE.js").then((e3) => e3.docs), []),
  order: 2,
  pro: true
};
var Ar = n({
  entry: () => jr
});
var jr = {
  slug: `agent-chat`,
  name: `Agent Chat`,
  description: `Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BWWWdWrI-DLJ646J2.js"), __vite__mapDeps([257, 1, 2, 3, 40, 258, 259, 163, 260, 261, 94, 149, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276]))),
  loadSource: () => r(() => import("./component-JBe9bepD-U6VINZWG.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BxLsAAJw-ZCOCGEEP.js").then((e3) => e3.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 6,
  pro: true
};
var Mr = n({
  entry: () => Nr
});
var Nr = {
  slug: `agent-run`,
  name: `Agent Run`,
  description: `One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-eQInHe1Q-L27ENZM4.js"), __vite__mapDeps([277, 1, 2, 3, 13, 26, 40, 98, 159, 173, 258, 267, 260, 261, 94, 149, 268, 269, 270, 278, 272, 273, 279, 274, 280]))),
  loadSource: () => r(() => import("./component-DiUTkznR-T7SF56TL.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-J0FQBf8r-H2DTPFRS.js").then((e3) => e3.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 9,
  pro: true
};
var Pr = n({
  entry: () => Fr
});
var Fr = {
  slug: `analytics`,
  name: `Analytics`,
  description: `Revenue dashboard: key figures, revenue by channel, breakdown, top products and weekly trends`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-iLo3CJ8--BMEDV4KP.js"), __vite__mapDeps([281, 1, 2, 3, 40, 108, 267, 260, 261, 94, 149, 269, 282, 273, 280, 275, 283]))),
  loadSource: () => r(() => import("./component-LFzR0Bzq-V6ZJPX6T.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BLrJfzvH-LLBAMH6Z.js").then((e3) => e3.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 8,
  pro: true
};
var Ir = n({
  entry: () => Lr
});
var Lr = {
  slug: `app-shell`,
  name: `App Shell Inset`,
  description: `Collapsible sidebar with workspace, menu, projects and account \u2013 the frame every screen sits in`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-DwSEqjaS-47IS2L2V.js"), __vite__mapDeps([284, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BUrOVrhl-GK2SETPB.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Cfk5B1z9-BNJGN5AY.js").then((e3) => e3.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 1,
  pro: true
};
var Rr = n({
  entry: () => zr
});
var zr = {
  slug: `app-shell-flat`,
  name: `App Shell Flat`,
  description: `The App Shell laid flat \u2013 gray sidebar and an edge-to-edge page, split by a single hairline`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-C1U6NI7B-IJXXC7G5.js"), __vite__mapDeps([285, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BKIbnoSt-4Z4E5EAX.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-n3nxXhui-BGR35SDC.js").then((e3) => e3.docs), []),
  added: `2026-10-19T12:00:00+02:00`,
  order: 1,
  pro: true
};
var Br = n({
  entry: () => Vr
});
var Vr = {
  slug: `assistant-home`,
  name: `Assistant Home`,
  description: `AI assistant start page: greeting, prompt box with tools, connected apps and suggestions`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Dj5g1Sf_-IJHJM3B3.js"), __vite__mapDeps([286, 3, 2, 259, 1, 163, 258, 260, 261, 94, 149, 262, 263, 264, 265, 266]))),
  loadSource: () => r(() => import("./component-CyzFAbzv-EVAW5R3S.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Cdva6Ahi-JJCJSHX5.js").then((e3) => e3.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 2,
  pro: true
};
var Hr = n({
  entry: () => Ur
});
var Ur = {
  slug: `crm`,
  name: `CRM`,
  description: `Company list with pipelines, open views as tabs and an editable data table`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-De2n08Zl-5Q4ZSJ5H.js"), __vite__mapDeps([287, 1, 2, 3, 72, 267, 260, 261, 94, 149, 269, 278, 272, 273, 288, 265, 276, 283]))),
  loadSource: () => r(() => import("./component-O4r9_IHP-3FQ36CJW.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-sV6Exspv-PXMD34IL.js").then((e3) => e3.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 7,
  pro: true
};
var Wr = n({
  entry: () => Gr
});
var Gr = {
  slug: `evals`,
  name: `Evals`,
  description: `Prompt evaluation dashboard: pass rate by version, reviewable prompt changes and test cases you can re-run`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-IfuY4zjH-Q3CRURFI.js"), __vite__mapDeps([289, 1, 2, 3, 40, 98, 108, 145, 267, 260, 261, 94, 149, 268, 263, 273, 279, 266]))),
  loadSource: () => r(() => import("./component-CZdJFe3o-QZXAXH4E.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-B-2N1ZTn-C4X7VQIA.js").then((e3) => e3.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 12,
  pro: true
};
var Kr = n({
  entry: () => qr
});
var qr = {
  slug: `files`,
  name: `Folders`,
  description: `Folder overview with tabs, search, sort, grid/list toggle and file templates`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CUdsyn6m-7JR4PI5H.js"), __vite__mapDeps([290, 1, 2, 3, 40, 260, 261, 94, 149, 291]))),
  loadSource: () => r(() => import("./component-Bkj7cENz-2ECYEKUD.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bg0MHHdB-JKNYXA5R.js").then((e3) => e3.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 3,
  pro: true
};
var Jr = n({
  entry: () => Yr
});
var Yr = {
  slug: `folder`,
  name: `Folder`,
  description: `Inside one folder: breadcrumbs, file cards with previews, and an empty state`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-d_U4qihD-SPYIU77K.js"), __vite__mapDeps([292, 1, 2, 3, 40, 260, 261, 94, 149, 271, 288, 274, 291]))),
  loadSource: () => r(() => import("./component-iuex-cSq-3AFDDZE6.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bk4Nc0yi-GPOAILI5.js").then((e3) => e3.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 4,
  pro: true
};
var Xr = n({
  entry: () => Zr
});
var Zr = {
  slug: `integrations`,
  name: `Integrations`,
  description: `App directory with a sticky header, categories, search and connect states`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CRG7NKBx-AS3I5EH5.js"), __vite__mapDeps([293, 1, 2, 3, 40, 260, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-OCK50Cmo-IHETSTDU.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-CqGta5k3-4QN425X3.js").then((e3) => e3.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 5,
  pro: true
};
var Qr = n({
  entry: () => $r
});
var $r = {
  slug: `onboarding`,
  name: `Onboarding`,
  description: `First-run flow of an AI workspace: workspace setup, tool connections, team invites and a first agent, with a getting-started checklist`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-CBRMIUgj-4DZJDZ5G.js"), __vite__mapDeps([294, 1, 2, 3, 40, 145, 267, 260, 261, 94, 149, 268, 262, 278, 273, 288]))),
  loadSource: () => r(() => import("./component-DCdgppww-P7J4LSWA.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DKnQ9DNv-VDVIBERP.js").then((e3) => e3.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 11,
  pro: true
};
var ei = n({
  entry: () => ti
});
var ti = {
  slug: `settings-billing`,
  name: `Settings & Billing`,
  description: `Settings page with tabs: workspace, members, API keys and billing with plan, usage, payment method, plan comparison and invoices`,
  category: `App screens`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-4lbOOBUM-6EU5YGY4.js"), __vite__mapDeps([295, 1, 2, 3, 40, 145, 180, 267, 260, 261, 94, 149, 268, 278, 271, 282, 264, 279, 274, 266]))),
  loadSource: () => r(() => import("./component-DpWH1oax-MY7EC5WI.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DR5BTgCD-SVSVT5JM.js").then((e3) => e3.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 10,
  pro: true
};
var ni = n({
  entry: () => ri
});
var ri = {
  slug: `blur-crossfade`,
  name: `Blur Crossfade`,
  description: `Swaps content with a soft blur while the box glides smoothly to the size of what comes next`,
  category: `Transitions`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Ye53Zfy1-OMETK7VS.js"), __vite__mapDeps([296, 1, 2, 3, 297]))),
  loadSource: () => r(() => import("./component-DSitrADN-B5QEY3O3.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Datr-mCn-KRNBVNUR.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
var ii = n({
  entry: () => ai
});
var ai = {
  slug: `gradient-floor`,
  name: `Gradient Floor`,
  description: `A blurred colour gradient that glows up from the bottom edge \u2013 two layers that drift and morph`,
  category: `Backgrounds`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-B-TgH1P--X56EEWGP.js"), __vite__mapDeps([298, 1, 2, 3, 299]))),
  loadSource: () => r(() => import("./component-uYI34p6t-EUJKSEZK.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DdQN5WXt-PB5CM65K.js").then((e3) => e3.docs), []),
  added: `2026-10-06T18:30:00+02:00`,
  order: 0,
  pro: true
};
var oi = n({
  entry: () => si
});
var si = {
  slug: `gradient-text`,
  name: `Gradient Text`,
  description: `Letters cut from a liquid, ever-flowing gradient \u2013 the color sweeps across the word the first time it's seen`,
  category: `Text`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Dcdtba_V-6WZUWE2P.js"), __vite__mapDeps([300, 1, 2, 3, 301]))),
  loadSource: () => r(() => import("./component-DZEPLsCQ-4YZUA5H5.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-JecR3ZCs-M2GGGHIH.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
var ci = n({
  entry: () => li
});
var li = {
  slug: `grid-background`,
  name: `Grid Background`,
  description: `A fine line grid that drifts slowly behind your content and fades out towards the edges`,
  category: `Backgrounds`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-S1hMjDCH-A6H3T4QG.js"), __vite__mapDeps([302, 1, 2, 3, 303]))),
  loadSource: () => r(() => import("./component-Bswo_Nl2-B4YY2S4Y.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BaC6K2ad-SIOSE7BO.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
var ui = n({
  entry: () => di
});
var di = {
  slug: `number-ticker`,
  name: `Number Ticker`,
  description: `Odometer-style numbers \u2013 every digit rolls to its new value and counts in from zero when it scrolls into view`,
  category: `Numbers`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-0IZOAjVo-K5ILUFG4.js"), __vite__mapDeps([304, 1, 2, 3, 305]))),
  loadSource: () => r(() => import("./component-tKo-lMTz-COBNAULC.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-BzUQTIno-427NUMSQ.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
var fi = n({
  entry: () => pi
});
var pi = {
  slug: `shimmer-loader`,
  name: `Shimmer Loader`,
  description: `Skeleton blocks that share one soft light sweep, plus shimmering text for \u201CThinking\u2026\u201D states`,
  category: `Loaders`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-Cc3_N5Az-46R67FME.js"), __vite__mapDeps([306, 1, 2, 3, 307]))),
  loadSource: () => r(() => import("./component-BhZZSUUH-A7NOSSOW.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-jUzYsO8s-QU4ZYZBM.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
var mi = n({
  entry: () => hi
});
var hi = {
  slug: `text-reveal`,
  name: `Text Reveal`,
  description: `Text that arrives word by word or letter by letter \u2013 each piece rises out of a soft blur as it scrolls into view`,
  category: `Text`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BEzbCisV-3MDZIAJQ.js"), __vite__mapDeps([308, 1, 2, 3, 309]))),
  loadSource: () => r(() => import("./component-DQdAXRcF-4YY3NHRM.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-DX5lHDck-33Z3A75Y.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
var gi = n({
  entry: () => _i
});
var _i = {
  slug: `tilt-card`,
  name: `Tilt Card`,
  description: `A card that tilts in 3D towards the pointer, with a soft glare that follows it and a smooth spring back`,
  category: `Hover`,
  Preview: (0, b.lazy)(() => r(() => import("./demo-BijqyLh8-SQBMVHT4.js"), __vite__mapDeps([310, 1, 2, 3, 311]))),
  loadSource: () => r(() => import("./component-D2uIa_Gl-TEEJFAHK.js").then((e3) => e3.default), []),
  loadDocs: () => r(() => import("./docs-Bbarn97a-VSFMKKTH.js").then((e3) => e3.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
var vi = Object.assign({
  "./agent-cursors/index.ts": me,
  "./agent-inbox/index.ts": C,
  "./agent-lanes/index.ts": _e,
  "./agent-plan/index.ts": ye,
  "./agent-steering/index.ts": xe,
  "./agent-tree/index.ts": Ce,
  "./ai-answer/index.ts": Te,
  "./approval-card/index.ts": w,
  "./autonomy-dial/index.ts": De,
  "./billing-schedule/index.ts": ke,
  "./breakdown-chart/index.ts": je,
  "./button/index.ts": Me,
  "./change-summary/index.ts": Pe,
  "./chat-composer/index.ts": Ie,
  "./cited-answer/index.ts": Re,
  "./combobox/index.ts": Be,
  "./command-menu/index.ts": He,
  "./comment-thread/index.ts": We,
  "./comments-panel/index.ts": Ke,
  "./compact-breakdown/index.ts": Je,
  "./context-window/index.ts": Xe,
  "./data-table/index.ts": Qe,
  "./date-range-picker/index.ts": et,
  "./decision-inbox/index.ts": nt,
  "./delegate-board/index.ts": it,
  "./dropzone/index.ts": ot,
  "./email-draft/index.ts": ct,
  "./experiment-card/index.ts": ut,
  "./filter-menu/index.ts": ft,
  "./inline-diff/index.ts": mt,
  "./integration-picker/index.ts": gt,
  "./integration-settings/index.ts": vt,
  "./kpi-chart/index.ts": bt,
  "./memory-panel/index.ts": St,
  "./message-actions/index.ts": wt,
  "./model-picker/index.ts": Et,
  "./notification-stack/index.ts": Ot,
  "./otp-input/index.ts": At,
  "./permission-request/index.ts": Mt,
  "./profile-menu/index.ts": Pt,
  "./progress-tracker/index.ts": It,
  "./project-card/index.ts": Rt,
  "./prompt-library/index.ts": Bt,
  "./reaction-bar/index.ts": Ht,
  "./segmented-control/index.ts": Wt,
  "./setup-guide/index.ts": Kt,
  "./smart-recommendation/index.ts": Jt,
  "./stepper-form/index.ts": Xt,
  "./thinking-loader/index.ts": Qt,
  "./thinking-state/index.ts": en,
  "./tips-panel/index.ts": nn,
  "./toaster/index.ts": D,
  "./tool-call-card/index.ts": on,
  "./trace-waterfall/index.ts": cn,
  "./usage-meter/index.ts": un,
  "./writing-assistant/index.ts": fn
});
var yi = Object.assign({
  "../blocks/agent-gallery/index.ts": mn,
  "../blocks/ai-workspace/index.ts": gn,
  "../blocks/app-directory/index.ts": vn,
  "../blocks/client-context/index.ts": bn,
  "../blocks/invoice-credit/index.ts": Sn,
  "../blocks/kpi-board/index.ts": wn,
  "../blocks/logo-marquee/index.ts": En,
  "../blocks/metrics-dashboard/index.ts": On,
  "../blocks/pricing-plans/index.ts": An,
  "../blocks/task-board/index.ts": Mn,
  "../blocks/testimonial-wall/index.ts": Pn
});
var bi = Object.assign({
  "../illustrations/agent-team/index.ts": In,
  "../illustrations/cover-flow/index.ts": Rn,
  "../illustrations/empty-calendar/index.ts": Bn,
  "../illustrations/enrichment-orbit/index.ts": Hn,
  "../illustrations/frost-cloud/index.ts": Wn,
  "../illustrations/ghosted-chat/index.ts": Kn,
  "../illustrations/glass-folder/index.ts": Jn,
  "../illustrations/glow-cloud/index.ts": Xn,
  "../illustrations/glow-keyboard/index.ts": Qn,
  "../illustrations/integration-beam/index.ts": er,
  "../illustrations/integration-flow/index.ts": nr,
  "../illustrations/integration-grid/index.ts": ir,
  "../illustrations/layer-stack/index.ts": or,
  "../illustrations/lead-sourcing/index.ts": cr,
  "../illustrations/logo-cluster/index.ts": ur,
  "../illustrations/model-wheel/index.ts": fr,
  "../illustrations/outreach-branches/index.ts": mr,
  "../illustrations/project-flow/index.ts": gr,
  "../illustrations/region-dach/index.ts": vr,
  "../illustrations/side-folder/index.ts": br,
  "../illustrations/tab-overload/index.ts": Sr,
  "../illustrations/team-invite/index.ts": wr,
  "../illustrations/voice-orb/index.ts": Er,
  "../illustrations/world-map/index.ts": Or
});
var xi = Object.assign({
  "../screens/agent-chat/index.ts": Ar,
  "../screens/agent-run/index.ts": Mr,
  "../screens/analytics/index.ts": Pr,
  "../screens/app-shell/index.ts": Ir,
  "../screens/app-shell-flat/index.ts": Rr,
  "../screens/assistant-home/index.ts": Br,
  "../screens/crm/index.ts": Hr,
  "../screens/evals/index.ts": Wr,
  "../screens/files/index.ts": Kr,
  "../screens/folder/index.ts": Jr,
  "../screens/integrations/index.ts": Xr,
  "../screens/onboarding/index.ts": Qr,
  "../screens/settings-billing/index.ts": ei
});
var Si = Object.assign({
  "../motion/blur-crossfade/index.ts": ni,
  "../motion/gradient-floor/index.ts": ii,
  "../motion/gradient-text/index.ts": oi,
  "../motion/grid-background/index.ts": ci,
  "../motion/number-ticker/index.ts": ui,
  "../motion/shimmer-loader/index.ts": fi,
  "../motion/text-reveal/index.ts": mi,
  "../motion/tilt-card/index.ts": gi
});
var Ci = (e3) => Object.values(e3).map((e4) => e4.entry).sort((e4, t5) => (e4.order ?? 999) - (t5.order ?? 999) || e4.name.localeCompare(t5.name));
var wi = [`ai-answer`, `chat-composer`, `thinking-state`, `writing-assistant`, `thinking-loader`];
var Ti = ((e3) => {
  let t5 = (e4) => wi.includes(e4.slug) ? wi.indexOf(e4.slug) : wi.length;
  return [...e3].sort((e4, n7) => t5(e4) - t5(n7));
})(Ci(vi));
var Ei = Ci(yi).map((e3) => ({
  ...e3,
  kind: `block`
}));
var O = Ci(bi).map((e3) => ({
  ...e3,
  kind: `illustration`
}));
var Di = Ci(xi).map((e3) => ({
  ...e3,
  kind: `screen`
}));
var k = Ci(Si).map((e3) => ({
  ...e3,
  kind: `motion`
}));
var Oi = [...Ti, ...Di, ...Ei, ...O, ...k];
var ki = [`Chat`, `Agents`, `Cards`, `Text`, `Data display`, `Navigation`, `Buttons`, `Inputs`, `Feedback`];
var Pi = (e3) => e3.toLowerCase().replace(/\s+/g, `-`);
var Fi = [[`path`, {
  d: `M18.593 8.19486C19.0376 8.52237 19.1326 9.14837 18.8051 9.59306C18.5507 9.93847 18.2963 10.2668 18.0731 10.5528C17.6276 11.1236 17.0143 11.8882 16.3479 12.6556C15.6859 13.4181 14.9518 14.2064 14.2666 14.8119C13.9251 15.1136 13.5721 15.3911 13.2279 15.5986C12.9112 15.7895 12.476 16 11.9999 16C11.5238 16 11.0885 15.7895 10.7718 15.5986C10.4276 15.3911 10.0747 15.1136 9.7332 14.8119C9.04791 14.2064 8.31387 13.4181 7.65183 12.6556C6.98548 11.8882 6.37216 11.1236 5.92664 10.5528C5.70347 10.2668 5.44902 9.93847 5.19463 9.59307C4.86712 9.14837 4.96211 8.52237 5.4068 8.19486C5.58556 8.0632 5.79362 7.99983 5.99982 8L11.9999 8L17.9999 8C18.2061 7.99983 18.4142 8.0632 18.593 8.19486Z`,
  fill: `currentColor`,
  key: `0`
}]];
var Ii = [[`path`, {
  d: `M17.293 5.29295C17.6835 4.90243 18.3165 4.90243 18.707 5.29295C19.0976 5.68348 19.0976 6.31649 18.707 6.70702L13.4131 12L18.7061 17.293L18.7754 17.3691C19.0954 17.7619 19.0721 18.341 18.7061 18.707C18.3399 19.0731 17.7609 19.0958 17.3682 18.7754L17.292 18.707L11.999 13.414L6.70802 18.706C6.3175 19.0966 5.68449 19.0965 5.29396 18.706C4.90344 18.3155 4.90344 17.6825 5.29396 17.292L10.585 12L5.29298 6.70799L5.22462 6.63182C4.90423 6.23907 4.92691 5.66007 5.29298 5.29393C5.65897 4.92794 6.23811 4.9046 6.63087 5.22459L6.70705 5.29393L11.999 10.5859L17.293 5.29295Z`,
  fill: `currentColor`,
  key: `0`
}]];
var Li = [[`path`, {
  d: `M16.0549 2.25C17.4225 2.24998 18.5248 2.24996 19.3918 2.36652C20.2919 2.48754 21.0497 2.74643 21.6517 3.34835C22.2536 3.95027 22.5125 4.70814 22.6335 5.60825C22.75 6.47522 22.75 7.57754 22.75 8.94513V11.0549C22.75 12.4225 22.75 13.5248 22.6335 14.3918C22.5125 15.2919 22.2536 16.0497 21.6517 16.6517C21.0497 17.2536 20.2919 17.5125 19.3918 17.6335C18.5248 17.75 17.4225 17.75 16.0549 17.75H16.0549H7.94513H7.94512C6.57754 17.75 5.47522 17.75 4.60825 17.6335C3.70814 17.5125 2.95027 17.2536 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.24996 13.5248 1.24998 12.4225 1.25 11.0549V11.0549V8.94513V8.94511C1.24998 7.57753 1.24996 6.47521 1.36652 5.60825C1.48754 4.70814 1.74643 3.95027 2.34835 3.34835C2.95027 2.74643 3.70814 2.48754 4.60825 2.36652C5.47521 2.24996 6.57753 2.24998 7.94511 2.25H7.94513H16.0549H16.0549Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M10.5 16.75C10.5 16.1977 10.9477 15.75 11.5 15.75H12.5C13.0523 15.75 13.5 16.1977 13.5 16.75V19.25C13.5 19.5261 13.7239 19.75 14 19.75H16C16.5523 19.75 17 20.1977 17 20.75C17 21.3023 16.5523 21.75 16 21.75H8C7.44772 21.75 7 21.3023 7 20.75C7 20.1977 7.44772 19.75 8 19.75H10C10.2761 19.75 10.5 19.5261 10.5 19.25V16.75Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `1`
}]];
var Ri = [[`path`, {
  d: `M22.25 14.5C22.25 16.1287 22.2517 17.4257 22.1152 18.4404C21.9759 19.4767 21.68 20.3298 21.0049 21.0049C20.3298 21.68 19.4767 21.9759 18.4404 22.1152C17.4257 22.2517 16.1287 22.25 14.5 22.25C12.8713 22.25 11.5743 22.2517 10.5596 22.1152C9.52332 21.9759 8.67025 21.68 7.99512 21.0049C7.31999 20.3298 7.02409 19.4767 6.88477 18.4404C6.74835 17.4257 6.75 16.1287 6.75 14.5C6.75 12.8713 6.74835 11.5743 6.88477 10.5596C7.02409 9.52332 7.31999 8.67025 7.99512 7.99512C8.67025 7.31999 9.52332 7.02409 10.5596 6.88477C11.5743 6.74835 12.8713 6.75 14.5 6.75C16.1287 6.75 17.4257 6.74835 18.4404 6.88477C19.4767 7.02409 20.3298 7.31999 21.0049 7.99512C21.68 8.67025 21.9759 9.52332 22.1152 10.5596C22.2517 11.5743 22.25 12.8713 22.25 14.5Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M9.5 1.75C11.1287 1.75 12.4257 1.74835 13.4404 1.88477C14.4767 2.02409 15.3298 2.31999 16.0049 2.99512C16.6176 3.60786 16.9159 4.36754 17.0703 5.27734C16.2852 5.24868 15.4214 5.25 14.5 5.25C12.9131 5.25 11.4971 5.24547 10.3594 5.39844C9.15677 5.56017 7.93469 5.93445 6.93457 6.93457C5.93445 7.93469 5.56017 9.15677 5.39844 10.3594C5.24547 11.4971 5.25 12.9131 5.25 14.5C5.25 15.4214 5.24868 16.2852 5.27734 17.0703C4.36754 16.9159 3.60786 16.6176 2.99512 16.0049C2.31999 15.3298 2.02409 14.4767 1.88477 13.4404C1.74835 12.4257 1.75 11.1287 1.75 9.5C1.75 7.87129 1.74835 6.57426 1.88477 5.55957C2.02409 4.52332 2.31999 3.67025 2.99512 2.99512C3.67025 2.31999 4.52332 2.02409 5.55957 1.88477C6.57426 1.74835 7.87129 1.75 9.5 1.75Z`,
  fill: `currentColor`,
  key: `1`
}]];
var zi = [[`path`, {
  d: `M17.2239 12.75H17.2761C17.8364 12.75 18.2946 12.75 18.6689 12.7755C19.0558 12.8019 19.4074 12.8581 19.7437 12.9974C20.5401 13.3272 21.1728 13.9599 21.5026 14.7563C21.6419 15.0926 21.6981 15.4442 21.7245 15.8311C21.75 16.2054 21.75 16.6636 21.75 17.2239V17.2761C21.75 17.8364 21.75 18.2946 21.7245 18.6689C21.6981 19.0558 21.6419 19.4074 21.5026 19.7437C21.1728 20.5401 20.5401 21.1728 19.7437 21.5026C19.4074 21.6419 19.0558 21.6981 18.6689 21.7245C18.2946 21.75 17.8364 21.75 17.2761 21.75H17.2239C16.6636 21.75 16.2054 21.75 15.8311 21.7245C15.4442 21.6981 15.0926 21.6419 14.7563 21.5026C13.9599 21.1728 13.3272 20.5401 12.9974 19.7437C12.8581 19.4074 12.8019 19.0558 12.7755 18.6689C12.75 18.2946 12.75 17.8364 12.75 17.2761V17.2239C12.75 16.6636 12.75 16.2054 12.7755 15.8311C12.8019 15.4442 12.8581 15.0926 12.9974 14.7563C13.3272 13.9599 13.9599 13.3272 14.7563 12.9974C15.0926 12.8581 15.4442 12.8019 15.8311 12.7755C16.2054 12.75 16.6636 12.75 17.2239 12.75ZM15.9332 14.272C15.6227 14.2932 15.4534 14.3322 15.3303 14.3832C14.9015 14.5608 14.5608 14.9015 14.3832 15.3303C14.3322 15.4534 14.2932 15.6227 14.272 15.9332C14.2504 16.2504 14.25 16.6573 14.25 17.25C14.25 17.8427 14.2504 18.2496 14.272 18.5668C14.2932 18.8773 14.3322 19.0466 14.3832 19.1697C14.5608 19.5985 14.9015 19.9392 15.3303 20.1168C15.4534 20.1678 15.6227 20.2068 15.9332 20.228C16.2504 20.2496 16.6573 20.25 17.25 20.25C17.8427 20.25 18.2496 20.2496 18.5668 20.228C18.8773 20.2068 19.0466 20.1678 19.1697 20.1168C19.5985 19.9392 19.9392 19.5985 20.1168 19.1697C20.1678 19.0466 20.2068 18.8773 20.228 18.5668C20.2496 18.2496 20.25 17.8427 20.25 17.25C20.25 16.6573 20.2496 16.2504 20.228 15.9332C20.2068 15.6227 20.1678 15.4534 20.1168 15.3303C19.9392 14.9015 19.5985 14.5608 19.1697 14.3832C19.0466 14.3322 18.8773 14.2932 18.5668 14.272C18.2496 14.2504 17.8427 14.25 17.25 14.25C16.6573 14.25 16.2504 14.2504 15.9332 14.272Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}], [`path`, {
  d: `M17.2761 2.25C17.8364 2.24999 18.2946 2.24999 18.6689 2.27553C19.0558 2.30192 19.4074 2.35808 19.7437 2.49739C20.5401 2.82725 21.1728 3.45994 21.5026 4.25628C21.6419 4.59261 21.6981 4.94423 21.7245 5.33106C21.75 5.70535 21.75 6.21576 21.75 6.77604V6.77607V6.77614C21.75 7.3364 21.75 7.79466 21.7245 8.16894C21.6981 8.55577 21.6419 8.90739 21.5026 9.24372C21.1728 10.0401 20.5401 10.6728 19.7437 11.0026C19.4074 11.1419 19.0558 11.1981 18.6689 11.2245C18.2947 11.25 17.8364 11.25 17.2761 11.25H17.2761H17.276C16.7158 11.25 16.2054 11.25 15.8311 11.2245C15.4442 11.1981 15.0926 11.1419 14.7563 11.0026C13.9599 10.6728 13.3272 10.0401 12.9974 9.24372C12.8581 8.90739 12.8019 8.55577 12.7755 8.16894C12.75 7.79464 12.75 7.33637 12.75 6.77608V6.77607C12.75 6.21577 12.75 5.70536 12.7755 5.33106C12.8019 4.94423 12.8581 4.59261 12.9974 4.25628C13.3272 3.45994 13.9599 2.82725 14.7563 2.49739C15.0926 2.35808 15.4442 2.30192 15.8311 2.27553C16.2054 2.24999 16.7158 2.24999 17.2761 2.25H17.2761Z`,
  fill: `currentColor`,
  key: `1`
}], [`path`, {
  d: `M17.2761 12.75C17.8364 12.75 18.2946 12.75 18.6689 12.7755C19.0558 12.8019 19.4074 12.8581 19.7437 12.9974C20.5401 13.3272 21.1728 13.9599 21.5026 14.7563C21.6419 15.0926 21.6981 15.4442 21.7245 15.8311C21.75 16.2054 21.75 16.7158 21.75 17.276V17.2761V17.2761C21.75 17.8364 21.75 18.2947 21.7245 18.6689C21.6981 19.0558 21.6419 19.4074 21.5026 19.7437C21.1728 20.5401 20.5401 21.1728 19.7437 21.5026C19.4074 21.6419 19.0558 21.6981 18.6689 21.7245C18.2947 21.75 17.8364 21.75 17.2761 21.75H17.2761H17.276C16.7158 21.75 16.2054 21.75 15.8311 21.7245C15.4442 21.6981 15.0926 21.6419 14.7563 21.5026C13.9599 21.1728 13.3272 20.5401 12.9974 19.7437C12.8581 19.4074 12.8019 19.0558 12.7755 18.6689C12.75 18.2946 12.75 17.8364 12.75 17.2761V17.2761C12.75 16.7158 12.75 16.2054 12.7755 15.8311C12.8019 15.4442 12.8581 15.0926 12.9974 14.7563C13.3272 13.9599 13.9599 13.3272 14.7563 12.9974C15.0926 12.8581 15.4442 12.8019 15.8311 12.7755C16.2054 12.75 16.7158 12.75 17.2761 12.75H17.2761Z`,
  fill: `currentColor`,
  key: `2`
}], [`path`, {
  d: `M6.77608 2.25C7.33637 2.24999 7.79464 2.24999 8.16894 2.27553C8.55577 2.30192 8.90739 2.35808 9.24372 2.49739C10.0401 2.82725 10.6728 3.45994 11.0026 4.25628C11.1419 4.59261 11.1981 4.94423 11.2245 5.33106C11.25 5.70535 11.25 6.21576 11.25 6.77604V6.77607V6.77614C11.25 7.3364 11.25 7.79466 11.2245 8.16894C11.1981 8.55577 11.1419 8.90739 11.0026 9.24372C10.6728 10.0401 10.0401 10.6728 9.24372 11.0026C8.90739 11.1419 8.55577 11.1981 8.16894 11.2245C7.79466 11.25 7.3364 11.25 6.77614 11.25H6.77607H6.77604C6.21576 11.25 5.70535 11.25 5.33106 11.2245C4.94423 11.1981 4.59261 11.1419 4.25628 11.0026C3.45994 10.6728 2.82725 10.0401 2.49739 9.24372C2.35808 8.90739 2.30192 8.55577 2.27553 8.16894C2.24999 7.79464 2.24999 7.33637 2.25 6.77608V6.77607C2.24999 6.21577 2.24999 5.70536 2.27553 5.33106C2.30192 4.94423 2.35808 4.59261 2.49739 4.25628C2.82725 3.45994 3.45994 2.82725 4.25628 2.49739C4.59261 2.35808 4.94423 2.30192 5.33106 2.27553C5.70536 2.24999 6.21577 2.24999 6.77607 2.25H6.77608Z`,
  fill: `currentColor`,
  key: `3`
}], [`path`, {
  d: `M6.77608 12.75C7.33637 12.75 7.79464 12.75 8.16894 12.7755C8.55577 12.8019 8.90739 12.8581 9.24372 12.9974C10.0401 13.3272 10.6728 13.9599 11.0026 14.7563C11.1419 15.0926 11.1981 15.4442 11.2245 15.8311C11.25 16.2054 11.25 16.7158 11.25 17.276V17.2761V17.2761C11.25 17.8364 11.25 18.2947 11.2245 18.6689C11.1981 19.0558 11.1419 19.4074 11.0026 19.7437C10.6728 20.5401 10.0401 21.1728 9.24372 21.5026C8.90739 21.6419 8.55577 21.6981 8.16894 21.7245C7.79466 21.75 7.3364 21.75 6.77614 21.75H6.77607H6.77604C6.21576 21.75 5.70535 21.75 5.33106 21.7245C4.94423 21.6981 4.59261 21.6419 4.25628 21.5026C3.45994 21.1728 2.82725 20.5401 2.49739 19.7437C2.35808 19.4074 2.30192 19.0558 2.27553 18.6689C2.24999 18.2946 2.24999 17.8364 2.25 17.2761V17.2761C2.24999 16.7158 2.24999 16.2054 2.27553 15.8311C2.30192 15.4442 2.35808 15.0926 2.49739 14.7563C2.82725 13.9599 3.45994 13.3272 4.25628 12.9974C4.59261 12.8581 4.94423 12.8019 5.33106 12.7755C5.70536 12.75 6.21577 12.75 6.77607 12.75H6.77608Z`,
  fill: `currentColor`,
  key: `4`
}]];
var Bi = [[`path`, {
  d: `M11.5875 22.75C12.1575 22.7507 12.662 22.7514 13.1374 22.5827C13.2354 22.548 13.3314 22.508 13.4252 22.4629C13.88 22.2442 14.2363 21.8852 14.6387 21.4795L19.4216 16.6719C19.8889 16.2035 20.3037 15.7879 20.5278 15.2441C20.7518 14.7004 20.7509 14.1116 20.7499 13.4482L20.7498 9.97396C20.7498 8.19195 20.7498 6.7556 20.5987 5.62592C20.4419 4.45306 20.1063 3.46554 19.326 2.68123C18.5458 1.89693 17.5634 1.55958 16.3966 1.40189C15.2727 1.25002 13.8438 1.25004 12.071 1.25006C10.2982 1.25004 8.72712 1.25002 7.60328 1.4019C6.43649 1.55958 5.45408 1.89693 4.67383 2.68123C3.89358 3.46554 3.55798 4.45307 3.40111 5.62592C3.25002 6.75558 3.25004 8.19193 3.25006 9.97389V9.9739V9.97392V9.97394V14.5475V14.5475V14.5475V14.5476C3.25005 16.0812 3.25003 17.3177 3.36431 18.3015C3.48255 19.3195 3.73424 20.1917 4.32688 20.9305C4.54441 21.2017 4.79018 21.4488 5.05999 21.6674C5.79501 22.2632 6.66272 22.5162 7.67541 22.635C8.65417 22.7499 10.0618 22.75 11.5875 22.75ZM18.7314 14.4962C18.6746 14.634 18.5693 14.7644 17.9512 15.3857L13.3463 20.0145C12.8133 20.5502 12.6719 20.6837 12.4903 20.7383C12.4903 19.3765 12.4903 18.7204 12.6066 17.8552C12.7276 16.9551 12.9865 16.1972 13.5884 15.5953C14.1903 14.9934 14.9482 14.7345 15.8483 14.6135C16.7153 14.4969 17.3638 14.4961 18.7314 14.4962ZM16.7501 7.00006C16.7501 7.41428 16.4143 7.75006 16.0001 7.75006L8.00006 7.75006C7.58585 7.75006 7.25006 7.41428 7.25006 7.00006C7.25006 6.58585 7.58585 6.25006 8.00006 6.25006L16.0001 6.25006C16.4143 6.25006 16.7501 6.58585 16.7501 7.00006ZM12.0001 11.7501C12.4143 11.7501 12.7501 11.4143 12.7501 11.0001C12.7501 10.5858 12.4143 10.2501 12.0001 10.2501H8.00006C7.58585 10.2501 7.25006 10.5858 7.25006 11.0001C7.25006 11.4143 7.58585 11.7501 8.00006 11.7501H12.0001Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var Vi = [[`path`, {
  d: `M13.6076 1.14723C14.3143 1.44842 14.7969 2.16259 14.7969 3.01681L14.7976 9.78474C14.7976 9.89519 14.8871 9.98472 14.9976 9.98472H18.0993C18.9851 9.98472 19.5954 10.5826 19.8466 11.2101C20.0974 11.8369 20.0636 12.642 19.5628 13.2849L12.5645 22.2678C12.0032 22.9883 11.1205 23.1629 10.3917 22.8523C9.68508 22.5511 9.20248 21.8369 9.20248 20.9827L9.20181 14.2148C9.2018 14.1043 9.11226 14.0148 9.00181 14.0148H5.90003C5.01422 14.0148 4.40394 13.4169 4.1528 12.7894C3.90193 12.1626 3.93574 11.3575 4.43658 10.7146L11.4348 1.73169C11.9962 1.01115 12.8788 0.83658 13.6076 1.14723Z`,
  fill: `currentColor`,
  key: `0`
}]];
var Ui = [[`path`, {
  d: `M12.0652 1.75C14.0744 1.74998 15.6717 1.74997 16.934 1.90331C18.2327 2.06106 19.3071 2.39345 20.1968 3.15334C20.4301 3.35261 20.6474 3.56991 20.8467 3.80323C21.6065 4.69294 21.9389 5.76729 22.0967 7.06598C22.25 8.32829 22.25 10.0561 22.25 12.0653C22.25 14.0744 22.25 15.6717 22.0967 16.934C21.9389 18.2327 21.6065 19.3071 20.8467 20.1968C20.6474 20.4301 20.4301 20.6474 20.1968 20.8467C19.3071 21.6065 18.2327 21.9389 16.934 22.0967C15.6717 22.25 13.9439 22.25 11.9347 22.25C9.92558 22.25 8.32829 22.25 7.06598 22.0967C5.76729 21.9389 4.69294 21.6065 3.80323 20.8467C3.56991 20.6474 3.35261 20.4301 3.15334 20.1968C2.39345 19.3071 2.06106 18.2327 1.90331 16.934C1.74997 15.6717 1.74998 14.0744 1.75 12.0652V12.0652C1.74998 10.0561 1.74997 8.3283 1.90331 7.06598C2.06106 5.76729 2.39345 4.69294 3.15334 3.80323C3.35261 3.56991 3.56991 3.35261 3.80323 3.15334C4.69294 2.39345 5.76729 2.06106 7.06598 1.90331C8.3283 1.74997 10.0561 1.74998 12.0652 1.75H12.0652ZM3.84153 16.6986C3.97614 17.8067 4.22847 18.4493 4.63803 18.9288C4.77088 19.0843 4.91575 19.2292 5.0713 19.3621C5.55084 19.7716 6.19337 20.024 7.3015 20.1586C8.43237 20.2959 9.91094 20.2976 12.0001 20.2976C14.0892 20.2976 15.5678 20.2959 16.6987 20.1586C17.8068 20.024 18.4493 19.7716 18.9289 19.3621C19.0844 19.2292 19.2293 19.0843 19.3622 18.9288C19.7717 18.4493 20.024 17.8067 20.1587 16.6986C20.2103 16.2738 20.2427 15.7999 20.2631 15.263L18.5304 13.5303C18.1909 13.1908 17.7303 13 17.2501 13C16.7699 13 16.3093 13.1908 15.9698 13.5303L14.0001 15.5L10.0304 11.5303C9.69086 11.1908 9.23031 11 8.75009 11C8.26988 11 7.80933 11.1908 7.46976 11.5303L3.73706 15.263C3.75747 15.7999 3.78993 16.2738 3.84153 16.6986ZM15.5 6.25C14.8096 6.25 14.25 6.80964 14.25 7.5C14.25 8.19036 14.8096 8.75 15.5 8.75C16.1904 8.75 16.75 8.19036 16.75 7.5C16.75 6.80964 16.1904 6.25 15.5 6.25Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var Wi = [[`path`, {
  d: `M8.48709 2.39137C9.98525 1.69829 10.9543 1.25 12 1.25C13.0457 1.25 14.0147 1.69829 15.5129 2.39137L15.6717 2.4648L17.4361 3.28038L17.4362 3.28039C18.6983 3.86376 19.7228 4.33731 20.425 4.7951C21.1276 5.25313 21.75 5.84942 21.75 6.75C21.75 7.65058 21.1276 8.24687 20.425 8.7049C19.7228 9.16269 18.6983 9.63625 17.4361 10.2196L15.6717 11.0352L15.5129 11.1086C14.0147 11.8017 13.0457 12.25 12 12.25C10.9543 12.25 9.98524 11.8017 8.48707 11.1086L8.3283 11.0352L6.56388 10.2196C5.30174 9.63625 4.27718 9.16269 3.57495 8.7049C2.87237 8.24687 2.25 7.65058 2.25 6.75C2.25 5.84942 2.87237 5.25313 3.57495 4.7951C4.27718 4.33731 5.30174 3.86375 6.56388 3.28038L8.3283 2.4648L8.48709 2.39137Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M4.59541 15.3926C4.93089 15.8246 4.8614 16.4538 4.4402 16.7979C4.29438 16.917 4.23479 16.9964 4.21238 17.0346C4.19921 17.0571 4.19963 17.0622 4.19992 17.0657C4.19996 17.0662 4.2 17.0667 4.2 17.0672C4.2 17.0742 4.20055 17.0756 4.20099 17.0767C4.20094 17.0766 4.20105 17.0769 4.20099 17.0767C4.20207 17.0798 4.20941 17.0995 4.23715 17.1364C4.29989 17.2199 4.43529 17.3512 4.71204 17.5336C5.27828 17.9069 6.15898 18.3213 7.46898 18.9335L9.13118 19.7103C10.8225 20.5007 11.4045 20.7495 12 20.7495C12.5955 20.7495 13.1775 20.5007 14.8688 19.7103L16.531 18.9335C17.841 18.3213 18.7217 17.9068 19.288 17.5336C19.5647 17.3512 19.7001 17.2199 19.7629 17.1364C19.7906 17.0995 19.7978 17.0802 19.7989 17.0771C19.7988 17.0773 19.7989 17.077 19.7989 17.0771C19.7993 17.076 19.8 17.0742 19.8 17.0672C19.8 17.0667 19.8 17.0662 19.8001 17.0657C19.8004 17.0622 19.8008 17.0571 19.7876 17.0346C19.7652 16.9964 19.7056 16.917 19.5598 16.7979C19.1386 16.4538 19.0691 15.8246 19.4046 15.3926C19.7401 14.9606 20.3535 14.8894 20.7747 15.2335C21.2978 15.6608 21.75 16.2484 21.75 17.0672C21.75 18.1017 21.0384 18.7572 20.3422 19.2162C19.6427 19.6772 18.6305 20.1502 17.4138 20.7188L15.6774 21.5302C15.6143 21.5597 15.5522 21.5888 15.4908 21.6175C14.0619 22.2862 13.0718 22.7495 12 22.7495C10.9282 22.7495 9.93809 22.2862 8.50921 21.6175C8.44785 21.5888 8.38567 21.5597 8.32264 21.5302L6.58625 20.7188C5.3695 20.1502 4.35731 19.6772 3.65782 19.2162C2.96157 18.7572 2.25 18.1017 2.25 17.0672C2.25 16.2484 2.70221 15.6608 3.22531 15.2335C3.64651 14.8894 4.25992 14.9606 4.59541 15.3926Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `1`
}], [`path`, {
  d: `M4.59541 10.2637C4.93089 10.6957 4.8614 11.3249 4.4402 11.669C4.29438 11.7881 4.23479 11.8675 4.21238 11.9057C4.19921 11.9281 4.19963 11.9332 4.19992 11.9368C4.19996 11.9373 4.2 11.9378 4.2 11.9383C4.2 11.9453 4.20055 11.9467 4.20099 11.9478C4.20094 11.9477 4.20105 11.948 4.20099 11.9478C4.20207 11.9509 4.20941 11.9706 4.23715 12.0075C4.29989 12.091 4.43529 12.2223 4.71204 12.4047C5.27828 12.7779 6.15898 13.1923 7.46898 13.8046L9.13118 14.5814C10.8225 15.3718 11.4045 15.6206 12 15.6206C12.5955 15.6206 13.1775 15.3718 14.8688 14.5814L16.531 13.8046C17.841 13.1923 18.7217 12.7779 19.288 12.4047C19.5647 12.2223 19.7001 12.091 19.7629 12.0075C19.7906 11.9706 19.7978 11.9513 19.7989 11.9482C19.7988 11.9484 19.7989 11.9481 19.7989 11.9482C19.7993 11.9471 19.8 11.9453 19.8 11.9383C19.8 11.9378 19.8 11.9373 19.8001 11.9368C19.8004 11.9332 19.8008 11.9281 19.7876 11.9057C19.7652 11.8675 19.7056 11.7881 19.5598 11.669C19.1386 11.3249 19.0691 10.6957 19.4046 10.2637C19.7401 9.83174 20.3535 9.76047 20.7747 10.1045C21.2978 10.5319 21.75 11.1195 21.75 11.9383C21.75 12.9728 21.0384 13.6283 20.3422 14.0872C19.6427 14.5483 18.6305 15.0213 17.4138 15.5899L15.6774 16.4013C15.6143 16.4308 15.5522 16.4599 15.4908 16.4886C14.0619 17.1573 13.0718 17.6206 12 17.6206C10.9282 17.6206 9.93809 17.1573 8.50921 16.4886C8.44785 16.4599 8.38567 16.4308 8.32264 16.4013L6.58625 15.5899C5.3695 15.0213 4.35731 14.5483 3.65782 14.0872C2.96157 13.6283 2.25 12.9728 2.25 11.9383C2.25 11.1195 2.70221 10.5319 3.22531 10.1045C3.64651 9.76047 4.25992 9.83174 4.59541 10.2637Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `2`
}]];
var Gi = [[`path`, {
  d: `M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.5 10.75C9.5 9.36929 10.6193 8.25 12 8.25C13.3807 8.25 14.5 9.36929 14.5 10.75C14.5 11.7752 13.883 12.6562 13 13.042V15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75V13.042C10.117 12.6562 9.5 11.7752 9.5 10.75Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var qi = [[`path`, {
  d: `M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z`,
  fill: `currentColor`,
  key: `0`
}]];
var Ji = [[`path`, {
  d: `M6.99793 1H7.09013C7.99378 0.999985 8.73891 0.999972 9.34348 1.05477C9.97205 1.11174 10.5461 1.23419 11.0748 1.53944C11.6869 1.89283 12.1952 2.40112 12.5486 3.01321C12.8248 3.4915 12.6609 4.10309 12.1826 4.37923C11.7043 4.65538 11.0927 4.4915 10.8166 4.01321C10.6387 3.70515 10.3829 3.44934 10.0748 3.27149C9.90127 3.17128 9.6528 3.091 9.16295 3.0466C8.65935 3.00096 8.00528 3 7.04403 3C6.08278 3 5.4287 3.00096 4.9251 3.0466C4.43525 3.091 4.18678 3.17128 4.01321 3.27149C3.70515 3.44934 3.44934 3.70515 3.27149 4.01321C3.17128 4.18678 3.091 4.43525 3.0466 4.9251C3.00096 5.4287 3 6.08278 3 7.04403C3 8.00528 3.00096 8.65935 3.0466 9.16295C3.091 9.6528 3.17128 9.90127 3.27149 10.0748C3.44934 10.3829 3.70515 10.6387 4.01321 10.8166C4.4915 11.0927 4.65538 11.7043 4.37923 12.1826C4.10309 12.6609 3.4915 12.8248 3.01321 12.5486C2.40112 12.1952 1.89283 11.6869 1.53944 11.0748C1.23419 10.5461 1.11174 9.97205 1.05477 9.34348C0.999972 8.73891 0.999985 7.99378 1 7.09013V6.99793C0.999985 6.09428 0.999972 5.34915 1.05477 4.74458C1.11173 4.11601 1.23419 3.54192 1.53944 3.01321C1.89283 2.40112 2.40112 1.89283 3.01321 1.53944C3.54192 1.23419 4.11601 1.11173 4.74458 1.05477C5.34915 0.999972 6.09428 0.999985 6.99793 1Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}], [`path`, {
  d: `M11.9973 6H12.0895C12.993 5.99998 13.738 5.99997 14.3425 6.05476C14.971 6.11172 15.5451 6.23416 16.0737 6.53939C16.6858 6.89274 17.194 7.40098 17.5474 8.01301C17.8235 8.49131 17.6596 9.1029 17.1813 9.37904C16.7031 9.65518 16.0915 9.49131 15.8153 9.01301C15.6375 8.70502 15.3817 8.44926 15.0737 8.27144C14.9002 8.17125 14.6518 8.09099 14.162 8.0466C13.6585 8.00096 13.0045 8 12.0434 8C11.0823 8 10.4283 8.00096 9.92474 8.0466C9.43496 8.09099 9.18654 8.17125 9.01301 8.27144C8.70502 8.44926 8.44926 8.70502 8.27144 9.01301C8.17125 9.18654 8.09099 9.43496 8.0466 9.92474C8.00096 10.4283 8 11.0823 8 12.0434C8 13.0045 8.00096 13.6585 8.0466 14.162C8.09099 14.6518 8.17125 14.9002 8.27144 15.0737C8.44926 15.3817 8.70502 15.6375 9.01301 15.8153C9.49131 16.0915 9.65518 16.7031 9.37904 17.1813C9.1029 17.6596 8.49131 17.8235 8.01301 17.5474C7.40098 17.194 6.89274 16.6858 6.53939 16.0737C6.23416 15.5451 6.11172 14.971 6.05476 14.3425C5.99997 13.738 5.99998 12.993 6 12.0895V11.9973C5.99998 11.0938 5.99997 10.3487 6.05476 9.74421C6.11172 9.11572 6.23416 8.54168 6.53939 8.01301C6.89274 7.40098 7.40098 6.89274 8.01301 6.53939C8.54168 6.23416 9.11572 6.11172 9.74421 6.05476C10.3487 5.99997 11.0938 5.99998 11.9973 6Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `1`
}], [`path`, {
  d: `M17.0461 11C17.9415 11 18.6805 11 19.2802 11.0543C19.9039 11.1109 20.4744 11.2324 21 11.5359C21.6081 11.887 22.113 12.3919 22.4641 13C22.7676 13.5256 22.8892 14.0961 22.9457 14.7198C23 15.3195 23 16.0585 23 16.9539V17.0461C23 17.9415 23 18.6805 22.9457 19.2802C22.8892 19.9039 22.7676 20.4744 22.4641 21C22.113 21.6081 21.6081 22.113 21 22.4641C20.4744 22.7676 19.9039 22.8892 19.2802 22.9457C18.6805 23 17.9415 23 17.0461 23H16.9539C16.0585 23 15.3195 23 14.7198 22.9457C14.0961 22.8892 13.5256 22.7676 13 22.4641C12.3919 22.113 11.887 21.6081 11.5359 21C11.2324 20.4744 11.1109 19.9039 11.0543 19.2802C11 18.6805 11 17.9415 11 17.0461V17.046V16.954V16.9539C11 16.0585 11 15.3195 11.0543 14.7198C11.1109 14.0961 11.2324 13.5256 11.5359 13C11.887 12.3919 12.3919 11.887 13 11.5359C13.5256 11.2324 14.0961 11.1109 14.7198 11.0543C15.3195 11 16.0585 11 16.9539 11H16.954H17.046H17.0461Z`,
  fill: `currentColor`,
  key: `2`
}]];
var Yi = [[`path`, {
  d: `M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var Zi = [[`path`, {
  d: `M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M12 1C12.5523 1 13 1.44772 13 2V3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5V2C11 1.44772 11.4477 1 12 1ZM4.22149 4.22149C4.61202 3.83097 5.24518 3.83097 5.6357 4.22149L6.69636 5.28215C7.08689 5.67268 7.08689 6.30584 6.69636 6.69636C6.30584 7.08689 5.67268 7.08689 5.28215 6.69636L4.22149 5.6357C3.83097 5.24518 3.83097 4.61201 4.22149 4.22149ZM19.7784 4.2216C20.1689 4.61213 20.1689 5.24529 19.7784 5.63582L18.7177 6.69648C18.3272 7.087 17.694 7.087 17.3035 6.69648C16.913 6.30595 16.913 5.67279 17.3035 5.28226L18.3642 4.2216C18.7547 3.83108 19.3879 3.83108 19.7784 4.2216ZM1 12C1 11.4477 1.44772 11 2 11H3.5C4.05228 11 4.5 11.4477 4.5 12C4.5 12.5523 4.05228 13 3.5 13H2C1.44772 13 1 12.5523 1 12ZM19.5 12C19.5 11.4477 19.9477 11 20.5 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.5C19.9477 13 19.5 12.5523 19.5 12ZM17.303 17.3035C17.6936 16.913 18.3267 16.913 18.7172 17.3035L19.7779 18.3642C20.1684 18.7547 20.1684 19.3879 19.7779 19.7784C19.3874 20.1689 18.7542 20.1689 18.3637 19.7784L17.303 18.7177C16.9125 18.3272 16.9125 17.694 17.303 17.3035ZM6.69685 17.3036C7.08738 17.6942 7.08738 18.3273 6.69685 18.7178L5.63619 19.7785C5.24567 20.169 4.6125 20.169 4.22198 19.7785C3.83145 19.388 3.83145 18.7548 4.22198 18.3643L5.28264 17.3036C5.67316 16.9131 6.30633 16.9131 6.69685 17.3036ZM12 19.5C12.5523 19.5 13 19.9477 13 20.5V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.5C11 19.9477 11.4477 19.5 12 19.5Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `1`
}]];
var Qi = [[`path`, {
  d: `M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C9.03745 18.3852 8.78086 18.4968 8.51163 18.4999C8.2424 18.5031 7.98328 18.3975 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L8.48336 16.0692L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
var A = n3();
function j({
  icon: e3,
  size: t5 = 16
}) {
  return (0, A.jsx)(r3, {
    icon: e3,
    size: t5,
    color: `currentColor`,
    "aria-hidden": true
  });
}
function $i({
  value: e3,
  label: t5,
  className: n7 = ``,
  onCopied: r4
}) {
  let [i3, a3] = (0, b.useState)(false), o2 = async () => {
    try {
      if (typeof e3 == `string`) await navigator.clipboard.writeText(e3);
      else if (typeof ClipboardItem < `u`) {
        let t6 = e3().then((e4) => new Blob([e4], {
          type: `text/plain`
        }));
        await navigator.clipboard.write([new ClipboardItem({
          "text/plain": t6
        })]);
      } else await navigator.clipboard.writeText(await e3());
      a3(true), r4?.(), setTimeout(() => a3(false), 1400);
    } catch {
    }
  }, s = (0, A.jsx)(j, {
    icon: i3 ? Qi : Ri,
    size: 14
  });
  return t5 ? (0, A.jsxs)(`button`, {
    className: `btn btn--ghost btn--xs ${n7}`,
    onClick: o2,
    children: [s, i3 ? `Copied` : t5]
  }) : (0, A.jsx)(`button`, {
    className: `icon-btn ${n7}`,
    onClick: o2,
    "aria-label": `Copy to clipboard`,
    children: s
  });
}
var ea = null;
var ta = null;
var na = () => ta ??= r(() => import("./lib-D_jy-Mlc-VQNNKXCP.js").then((e3) => ea = e3.highlight), __vite__mapDeps([312, 2]));
var ra = (e3) => e3.replace(/[&<>]/g, (e4) => ({
  "&": `&amp;`,
  "<": `&lt;`,
  ">": `&gt;`
})[e4]);
var ia = (e3) => e3.split(`
`).map((e4) => `<span class="sh__line">${ra(e4)}</span>`).join(`
`);
function M({
  code: e3,
  filename: t5,
  lineNumbers: n7 = true,
  maxHeight: r4,
  onCopied: i3
}) {
  let [a3, o2] = (0, b.useState)(!!ea);
  (0, b.useEffect)(() => {
    a3 || na().then(() => o2(true));
  }, [a3]);
  let s = (0, b.useMemo)(() => ea ? ea(e3.trimEnd()) : ia(e3.trimEnd()), [e3, a3]);
  return (0, A.jsxs)(`div`, {
    className: `code`,
    children: [t5 ? (0, A.jsxs)(`div`, {
      className: `code__head`,
      children: [(0, A.jsxs)(`span`, {
        className: `code__file`,
        children: [(0, A.jsx)(j, {
          icon: Bi,
          size: 14
        }), t5]
      }), (0, A.jsx)($i, {
        value: e3,
        label: `Copy`,
        onCopied: i3
      })]
    }) : (0, A.jsx)($i, {
      value: e3,
      className: `code__copy`,
      onCopied: i3
    }), (0, A.jsx)(`pre`, {
      className: `code__body`,
      "data-lines": n7,
      style: {
        maxHeight: r4
      },
      children: (0, A.jsx)(`code`, {
        dangerouslySetInnerHTML: {
          __html: s
        }
      })
    })]
  });
}
function aa({
  command: e3,
  onCopied: t5
}) {
  return (0, A.jsxs)(`div`, {
    className: `command`,
    children: [(0, A.jsxs)(`code`, {
      children: [(0, A.jsx)(`span`, {
        className: `command__prompt`,
        children: `$`
      }), ` `, e3]
    }), (0, A.jsx)($i, {
      value: e3,
      onCopied: t5
    })]
  });
}
function N({
  id: e3,
  title: t5,
  lead: n7,
  children: r4
}) {
  return (0, A.jsxs)(`section`, {
    id: e3,
    className: `doc__section`,
    children: [(0, A.jsx)(`h2`, {
      className: `doc__h2`,
      children: t5
    }), n7 && (0, A.jsx)(`p`, {
      className: `doc__p`,
      children: n7
    }), r4]
  });
}
function oa({
  id: e3,
  title: t5,
  lead: n7,
  items: r4
}) {
  return r4?.length ? (0, A.jsx)(N, {
    id: e3,
    title: t5,
    lead: n7,
    children: (0, A.jsx)(`ul`, {
      className: `doc__list`,
      children: r4.map((e4) => (0, A.jsx)(`li`, {
        children: e4
      }, e4))
    })
  }) : null;
}
function sa({
  command: e3,
  onCopied: t5
}) {
  let [n7, r4] = (0, b.useState)(`pnpm`);
  return (0, A.jsxs)(`div`, {
    className: `install`,
    children: [(0, A.jsxs)(`div`, {
      className: `install__head`,
      children: [(0, A.jsx)(`div`, {
        className: `pm-tabs`,
        role: `tablist`,
        "aria-label": `Package manager`,
        children: Object.keys(n5).map((e4) => (0, A.jsx)(`button`, {
          role: `tab`,
          "aria-selected": n7 === e4,
          onClick: () => r4(e4),
          children: e4
        }, e4))
      }), (0, A.jsx)($i, {
        value: e3(n7),
        label: `Copy`,
        onCopied: t5
      })]
    }), (0, A.jsx)(`pre`, {
      className: `install__cmd`,
      children: (0, A.jsx)(`code`, {
        children: e3(n7)
      })
    })]
  });
}
function ca({
  label: e3,
  code: t5
}) {
  return (0, A.jsxs)(`div`, {
    className: `install`,
    children: [(0, A.jsxs)(`div`, {
      className: `install__head`,
      children: [(0, A.jsx)(`span`, {
        className: `install__label`,
        children: e3
      }), (0, A.jsx)($i, {
        value: t5,
        label: `Copy`
      })]
    }), (0, A.jsx)(`pre`, {
      className: `install__cmd`,
      children: (0, A.jsx)(`code`, {
        children: t5
      })
    })]
  });
}
function la({
  className: e3 = ``
}) {
  return (0, A.jsxs)(`span`, {
    className: `pro-badge ${e3}`,
    children: [(0, A.jsx)(j, {
      icon: Vi,
      size: 10
    }), (0, A.jsx)(`span`, {
      children: `Pro`
    })]
  });
}
var P = /* @__PURE__ */ new Set();
var F = (e3) => e3.match(/^\/(components|screens|blocks|illustrations|motion)\/?$/)?.[1];
function ua() {
  let e3 = document.querySelector(`.panel`);
  return e3 && getComputedStyle(e3).overflowY === `auto` ? e3 : null;
}
var da = () => ua()?.scrollTop ?? window.scrollY;
var fa = false;
function ma(e3, t5) {
  let n7 = fa;
  fa = false;
  let r4 = () => e3 === `components` ? n7 ? document.getElementById(`components`) : null : document.querySelector(`#${e3} .library__title`) ?? document.getElementById(e3), i3 = (e4) => {
    let t6 = r4();
    t6 ? t6.scrollIntoView({
      block: `start`,
      behavior: e4
    }) : (ua() ?? window).scrollTo({
      top: 0,
      behavior: e4
    });
  }, a3 = false, o2 = () => a3 = true, s = [`wheel`, `touchstart`, `keydown`, `pointerdown`];
  s.forEach((e4) => window.addEventListener(e4, o2, {
    passive: true,
    once: true
  })), i3(t5 ? `smooth` : `auto`), [t5 ? 900 : 200, 1300, 2200].forEach((e4, t6, n8) => window.setTimeout(() => {
    let e5 = r4(), c = e5 ? Math.abs(e5.getBoundingClientRect().top - parseFloat(getComputedStyle(e5).scrollMarginTop || `0`)) : da();
    !a3 && c > 4 && i3(`auto`), t6 === n8.length - 1 && s.forEach((e6) => window.removeEventListener(e6, o2));
  }, e4));
}
var ha = null;
function ga(e3, t5 = false) {
  let n7 = window.location.pathname;
  if (!t5 && e3.split(`?`)[0] !== n7 && (ha = n7), e3 === n7 + window.location.search) {
    let t6 = F(e3);
    t6 && ma(t6, false);
    return;
  }
  window.history[t5 ? `replaceState` : `pushState`](null, ``, e3), P.forEach((e4) => e4()), !(F(n7) && F(e3)) && (document.querySelector(`.panel`)?.scrollTo({
    top: 0
  }), window.scrollTo({
    top: 0
  }));
}
var va = (e3) => `/components/${e3}`;
var ya = (e3) => `/blocks/${e3}`;
var ba = (e3) => `/illustrations/${e3}`;
var xa = (e3) => `/motion/${e3}`;
var Sa = (e3) => `/screens/${e3}`;
var Ca = (e3) => e3.kind === `block` ? ya(e3.slug) : e3.kind === `illustration` ? ba(e3.slug) : e3.kind === `motion` ? xa(e3.slug) : e3.kind === `screen` ? Sa(e3.slug) : va(e3.slug);
var wa = (e3) => `/category/${e3}`;
function I({
  to: e3,
  onClick: t5,
  ...n7
}) {
  return (0, A.jsx)(`a`, {
    href: e3,
    onClick: (n8) => {
      t5?.(n8), !(n8.defaultPrevented || n8.metaKey || n8.ctrlKey || n8.shiftKey || n8.button !== 0) && (n8.preventDefault(), ga(e3));
    },
    ...n7
  });
}
var Ta = `${t3.url}/r/{name}.json`;
var Ea = Ti.find((e3) => !e3.pro);
var Da = {
  slug: Ea?.slug ?? `chat-composer`,
  name: (Ea?.name ?? `Chat Composer`).replace(/\s+/g, ``)
};
function Oa() {
  let e3 = Ti.filter((e4) => e4.pro).length;
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsxs)(N, {
      id: `what-it-is`,
      title: `What ${t3.name} is`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [t3.name, ` is a library of React components with live previews and source you own. You install a component with the shadcn CLI or copy it by hand \u2013 it lands in your project as a single TSX file (styles included) that you can read and change.`]
      }), (0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Every preview runs the same source you install, so the keyboard behavior, states and motion you try on a page are exactly what you get.`
      })]
    }), (0, A.jsxs)(N, {
      id: `how-it-is-organized`,
      title: `How it is organized`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`The library has four parts. `, (0, A.jsx)(`strong`, {
          children: `Components`
        }), ` are single interface pieces, like a chat composer.`, ` `, (0, A.jsx)(`strong`, {
          children: `Blocks`
        }), ` are complete sections such as a hero or a pricing table`, Ei.length ? `` : ` \u2013 the first ones are on their way`, `. `, (0, A.jsx)(`strong`, {
          children: `Illustrations`
        }), ` are animated scenes for landing pages`, O.length ? `` : `, coming soon`, `. `, (0, A.jsx)(`strong`, {
          children: `Motion`
        }), ` covers effects that move your content \u2013 text, numbers, transitions and backgrounds`, k.length ? `` : `, coming soon`, `. All of them are grouped by what they do; pick a category in the sidebar to see them.`]
      }), (0, A.jsx)(`div`, {
        className: `table-wrap`,
        children: (0, A.jsxs)(`table`, {
          className: `table`,
          children: [(0, A.jsx)(`thead`, {
            children: (0, A.jsxs)(`tr`, {
              children: [(0, A.jsx)(`th`, {
                children: `Category`
              }), (0, A.jsx)(`th`, {
                children: `Components`
              })]
            })
          }), (0, A.jsx)(`tbody`, {
            children: ki.map((e4) => {
              let t5 = Ti.filter((t6) => t6.category === e4);
              return t5.length ? (0, A.jsxs)(`tr`, {
                children: [(0, A.jsx)(`td`, {
                  children: (0, A.jsx)(I, {
                    to: wa(Pi(e4)),
                    className: `doc__link`,
                    children: e4
                  })
                }), (0, A.jsx)(`td`, {
                  children: t5.map((e5) => e5.name).join(`, `)
                })]
              }, e4) : null;
            })
          })]
        })
      })]
    }), (0, A.jsxs)(N, {
      id: `reading-a-page`,
      title: `Reading a component page`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Every component page follows the same order, so you can jump straight to what you need:`
      }), (0, A.jsxs)(`ul`, {
        className: `doc__list`,
        children: [(0, A.jsx)(`li`, {
          children: `Preview and Code \u2013 try it, then read the exact source. The reset button restarts the preview.`
        }), (0, A.jsx)(`li`, {
          children: `When to use and when not to \u2013 a quick check whether it fits your case.`
        }), (0, A.jsx)(`li`, {
          children: `Installation \u2013 one CLI command, or copy the single file by hand.`
        }), (0, A.jsx)(`li`, {
          children: `Usage, examples and API reference \u2013 copyable code and every prop with its type and default.`
        }), (0, A.jsx)(`li`, {
          children: `Keyboard, accessibility, motion and responsive behavior \u2013 how it works for keyboard, screen reader and reduced motion.`
        })]
      }), (0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Press \u2318K anywhere to search.`
      })]
    }), (0, A.jsx)(N, {
      id: `free-and-pro`,
      title: `Free and Pro`,
      children: (0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`Free components can be used in any project. Components marked `, (0, A.jsx)(la, {
          className: `doc__inline-pro`
        }), ` are part of `, t3.name, ` Pro`, e3 ? ` (${e3} today)` : ``, `: their previews and docs are open to everyone, the source comes with Pro. See`, ` `, (0, A.jsx)(I, {
          to: `/pricing`,
          className: `doc__link`,
          children: `Pricing`
        }), `.`]
      })
    }), (0, A.jsx)(Pa, {
      items: [{
        to: `/docs/installation`,
        title: `Installation`,
        text: `Install a component with the shadcn CLI or by copying one file.`
      }, {
        to: `/docs/theming`,
        title: `Theming`,
        text: `Change colors with CSS variables, including dark mode.`
      }, {
        to: `/docs/ai`,
        title: `Using with AI`,
        text: `Point your coding assistant at a component so it can install and use it.`
      }]
    })]
  });
}
function ka() {
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(N, {
      id: `requirements`,
      title: `Requirements`,
      children: (0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`A React 19 project with TypeScript and the `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `@/*`
        }), ` path alias, for example Next.js or Vite. Each component is one self-contained file with its styles inside, so it needs neither Tailwind nor any other package.`]
      })
    }), (0, A.jsxs)(N, {
      id: `initialize`,
      title: `1. Add a components.json`,
      lead: `The shadcn CLI reads this file to know where components go. Skip this step if your project already has one.`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`With Tailwind, let shadcn create it \u2013 `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `init`
        }), ` requires Tailwind:`]
      }), (0, A.jsx)(sa, {
        command: (e3) => `${n5[e3]} shadcn@latest init`
      }), (0, A.jsx)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: `Without Tailwind, create the file by hand in your project root instead:`
      }), (0, A.jsx)(M, {
        filename: `components.json`,
        lineNumbers: false,
        code: `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": { "config": "", "css": "", "baseColor": "neutral", "cssVariables": true, "prefix": "" },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "utils": "@/lib/utils",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}`
      }), (0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`The empty `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `tailwind`
        }), ` entries are only there because the file format requires them \u2013 nothing gets installed.`]
      })]
    }), (0, A.jsxs)(N, {
      id: `install`,
      title: `2. Install components`,
      lead: `Point the CLI at a component's address. No further setup needed \u2013 the file lands in components/ui.`,
      children: [(0, A.jsx)(sa, {
        command: (e3) => r2(Da.slug, e3)
      }), (0, A.jsx)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: `Then use it like any local component:`
      }), (0, A.jsx)(M, {
        filename: `app/page.tsx`,
        code: `import { ${Da.name} } from "@/components/ui/${Da.slug}";

export default function Page() {
  return <${Da.name} />;
}`
      })]
    }), (0, A.jsxs)(N, {
      id: `registry`,
      title: `Optional: short names`,
      lead: `Register the ${t3.registry} namespace once in components.json, then install by name instead of by address.`,
      children: [(0, A.jsx)(M, {
        filename: `components.json`,
        lineNumbers: false,
        code: `{
  "registries": {
    "${t3.registry}": "${Ta}"
  }
}`
      }), (0, A.jsx)(sa, {
        command: (e3) => `${n5[e3]} shadcn@latest add ${t3.registry}/${Da.slug}`
      })]
    }), (0, A.jsxs)(N, {
      id: `pro`,
      title: `Pro components`,
      lead: `Pro items install the same way \u2013 the registry only hands them out with your personal access key.`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`1. Create your key under`, ` `, (0, A.jsx)(I, {
          to: `/account/downloads`,
          className: `doc__link`,
          children: `Account \u2192 Downloads`
        }), ` `, `and add it to `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `.env.local`
        }), ` \u2013 never commit it:`]
      }), (0, A.jsx)(M, {
        filename: `.env.local`,
        lineNumbers: false,
        code: `AFFECTUI_TOKEN=aui_\u2026`
      }), (0, A.jsx)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: `2. Register the namespace with the key as a header:`
      }), (0, A.jsx)(M, {
        filename: `components.json`,
        lineNumbers: false,
        code: `{
  "registries": {
    "${t3.registry}": {
      "url": "${Ta}",
      "headers": { "Authorization": "Bearer \${AFFECTUI_TOKEN}" }
    }
  }
}`
      }), (0, A.jsx)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: `3. Install free and Pro items by name:`
      }), (0, A.jsx)(sa, {
        command: (e3) => `${n5[e3]} shadcn@latest add ${t3.registry}/<name>`
      }), (0, A.jsx)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: `Without the CLI, Pro members see the code and a copy button on every Pro page while signed in.`
      })]
    }), (0, A.jsx)(N, {
      id: `manual`,
      title: `Manual installation`,
      children: (0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`Open a component page, switch Installation to Manual and copy the file into`, ` `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `components/ui`
        }), `. Or use the copy button on any card \u2013 it copies the same file.`]
      })
    })]
  });
}
var Aa = [[`--ui-cc-card`, `White text area`], [`--ui-cc-tray`, `Gray layer behind it`], [`--ui-cc-line`, `Outlines`], [`--ui-cc-ink`, `Text and the send button`], [`--ui-cc-ink-muted`, `Labels such as \u201CRequest approval\u201D`], [`--ui-cc-placeholder`, `Placeholder text`], [`--ui-cc-alert`, `\u201CUnrestricted access\u201D and the recording dot`]];
function ja() {
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsxs)(N, {
      id: `variables`,
      title: `CSS variables`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`Every component brings its own colors and timings as CSS variables on its root class. They share a short prefix, so they never clash with your own variables \u2013 the Chat Composer uses`, ` `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `--ui-cc-`
        }), ` on `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `.ui-chat-composer`
        }), `.`]
      }), (0, A.jsx)(`div`, {
        className: `table-wrap`,
        children: (0, A.jsxs)(`table`, {
          className: `table`,
          children: [(0, A.jsx)(`thead`, {
            children: (0, A.jsxs)(`tr`, {
              children: [(0, A.jsx)(`th`, {
                children: `Chat Composer variable`
              }), (0, A.jsx)(`th`, {
                children: `Used for`
              })]
            })
          }), (0, A.jsx)(`tbody`, {
            children: Aa.map(([e3, t5]) => (0, A.jsxs)(`tr`, {
              children: [(0, A.jsx)(`td`, {
                children: (0, A.jsx)(`code`, {
                  className: `token`,
                  children: e3
                })
              }), (0, A.jsx)(`td`, {
                children: t5
              })]
            }, e3))
          })]
        })
      }), (0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `The full list sits at the top of the styles inside the component file.`
      })]
    }), (0, A.jsxs)(N, {
      id: `brand`,
      title: `Bring your own brand`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Override the variables in your global CSS. Put one class in front of the component class, so your values win no matter which stylesheet loads first:`
      }), (0, A.jsx)(M, {
        filename: `globals.css`,
        code: `body .ui-chat-composer {
  --ui-cc-ink: #1e1b4b;
  --ui-cc-alert: #4f46e5;
  --ui-cc-alert-wash: rgba(79, 70, 229, 0.1);
}`
      })]
    }), (0, A.jsxs)(N, {
      id: `dark-mode`,
      title: `Dark mode`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Components ship in light colors and don't switch on their own. Set the variables under the selector your app uses for dark mode:`
      }), (0, A.jsx)(M, {
        filename: `globals.css`,
        code: `.dark .ui-chat-composer {
  --ui-cc-card: #19191b;
  --ui-cc-tray: #232326;
  --ui-cc-line: #2e2e31;
  --ui-cc-ink: #ededed;
  --ui-cc-placeholder: #5c5c60;
}`
      })]
    })]
  });
}
function Ma() {
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsx)(N, {
      id: `principles`,
      title: `Principles`,
      children: (0, A.jsxs)(`ul`, {
        className: `doc__list`,
        children: [(0, A.jsx)(`li`, {
          children: `Native elements first \u2013 buttons are buttons, inputs are inputs, so focus and keyboard work out of the box.`
        }), (0, A.jsx)(`li`, {
          children: `Visible focus rings for keyboard users only, via :focus-visible.`
        }), (0, A.jsx)(`li`, {
          children: `Every control has an accessible name; icon-only buttons ship with an aria-label.`
        }), (0, A.jsx)(`li`, {
          children: `Status changes, like a finished loading state, are announced politely with aria-live.`
        })]
      })
    }), (0, A.jsx)(N, {
      id: `keyboard`,
      title: `Keyboard`,
      children: (0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Each component page lists its keyboard interactions. As a rule, Tab moves focus, Enter and Space activate, and Escape closes or clears.`
      })
    }), (0, A.jsx)(N, {
      id: `reduced-motion`,
      title: `Reduced motion`,
      children: (0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`All motion respects `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `prefers-reduced-motion`
        }), `. Transitions become instant and looping animations stop, without losing any state change.`]
      })
    })]
  });
}
function Na() {
  let e3 = `${t3.url}/r/${Da.slug}.json`, t5 = `${t3.url}/api/mcp`;
  return (0, A.jsxs)(A.Fragment, {
    children: [(0, A.jsxs)(N, {
      id: `mcp`,
      title: `MCP server`,
      lead: `Connect your coding assistant once \u2013 it can then search every item, read its docs and add it to your project when you ask.`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Claude Code:`
      }), (0, A.jsx)(ca, {
        label: `Terminal`,
        code: `claude mcp add --transport http affectui ${t5}`
      }), (0, A.jsxs)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: [`Cursor (`, (0, A.jsx)(`code`, {
          className: `token`,
          children: `.cursor/mcp.json`
        }), `), VS Code (`, (0, A.jsx)(`code`, {
          className: `token`,
          children: `.vscode/mcp.json`
        }), `, key`, ` `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `servers`
        }), ` instead of `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `mcpServers`
        }), `) and other clients:`]
      }), (0, A.jsx)(M, {
        filename: `mcp.json`,
        lineNumbers: false,
        code: `{
  "mcpServers": {
    "affectui": { "url": "${t5}" }
  }
}`
      }), (0, A.jsxs)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: [`Codex (`, (0, A.jsx)(`code`, {
          className: `token`,
          children: `~/.codex/config.toml`
        }), `):`]
      }), (0, A.jsx)(M, {
        filename: `config.toml`,
        lineNumbers: false,
        code: `[mcp_servers.affectui]
url = "${t5}"`
      }), (0, A.jsxs)(`p`, {
        className: `doc__p doc__p--spaced`,
        children: [`The tools: `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `search_components`
        }), `, `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `list_components`
        }), `,`, ` `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `get_component`
        }), ` (docs, usage, props, install command) and `, (0, A.jsx)(`code`, {
          className: `token`,
          children: `get_source`
        }), `. Then just ask, for example \u201Cadd a chat input with a model picker to the dashboard\u201D.`]
      })]
    }), (0, A.jsxs)(N, {
      id: `mcp-pro`,
      title: `Pro items through MCP`,
      children: [(0, A.jsxs)(`p`, {
        className: `doc__p`,
        children: [`Docs of every item are open. For the source of Pro items, add your access key from`, ` `, (0, A.jsx)(I, {
          to: `/account/downloads`,
          className: `doc__link`,
          children: `Account \u2192 Downloads`
        }), ` `, `as a header \u2013 the same key the shadcn CLI uses:`]
      }), (0, A.jsx)(ca, {
        label: `Terminal`,
        code: `claude mcp add --transport http affectui ${t5} --header "Authorization: Bearer aui_\u2026"`
      }), (0, A.jsx)(M, {
        filename: `mcp.json`,
        lineNumbers: false,
        code: `{
  "mcpServers": {
    "affectui": {
      "url": "${t5}",
      "headers": { "Authorization": "Bearer aui_\u2026" }
    }
  }
}`
      })]
    }), (0, A.jsxs)(N, {
      id: `llms`,
      title: `llms.txt`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Without any setup, point an assistant at the index or at the full docs of every item in one file:`
      }), (0, A.jsx)(ca, {
        label: `Addresses`,
        code: `${t3.url}/llms.txt
${t3.url}/llms-full.txt`
      })]
    }), (0, A.jsxs)(N, {
      id: `address`,
      title: `One component by address`,
      children: [(0, A.jsx)(`p`, {
        className: `doc__p`,
        children: `Every free component also has an address with its full source, name and description. Assistants can read it and run the install command for you:`
      }), (0, A.jsx)(ca, {
        label: `Address`,
        code: e3
      })]
    }), (0, A.jsx)(N, {
      id: `prompt`,
      title: `Example prompt`,
      children: (0, A.jsx)(M, {
        lineNumbers: false,
        code: `Use the affectUI MCP server to find a component for an onboarding checklist,
install it with the shadcn CLI and use it on the dashboard.
Keep its styles and motion; adapt only the content.`
      })
    })]
  });
}
function Pa({
  items: e3
}) {
  return (0, A.jsx)(N, {
    id: `next-steps`,
    title: `Next steps`,
    children: (0, A.jsx)(`div`, {
      className: `related`,
      children: e3.map((e4) => (0, A.jsxs)(I, {
        to: e4.to,
        className: `related__card`,
        children: [(0, A.jsx)(`span`, {
          className: `related__name`,
          children: e4.title
        }), (0, A.jsx)(`span`, {
          className: `related__desc`,
          children: e4.text
        })]
      }, e4.to))
    })
  });
}
var L = [{
  slug: `introduction`,
  title: `Introduction`,
  description: `What ${t3.name} is, how it is organized and how to read a component page.`,
  Content: Oa
}, {
  slug: `installation`,
  title: `Installation`,
  description: `Install components with the shadcn CLI or by copying a single file.`,
  Content: ka
}, {
  slug: `theming`,
  title: `Theming`,
  description: `Change a component's colors with CSS variables, including dark mode.`,
  Content: ja
}, {
  slug: `accessibility`,
  title: `Accessibility`,
  description: `Keyboard support, focus handling and reduced motion.`,
  Content: Ma
}, {
  slug: `ai`,
  title: `Using with AI`,
  description: `MCP server, llms.txt and prompts \u2013 let your coding assistant find and add components.`,
  Content: Na
}];
function Fa({
  size: e3 = 15,
  className: t5 = ``
}) {
  return (0, A.jsx)(`svg`, {
    className: `logo-mark ${t5}`,
    width: e3,
    height: e3,
    viewBox: `0 0 107 107`,
    fill: `currentColor`,
    "aria-hidden": true,
    children: (0, A.jsx)(`path`, {
      d: `M106.447 67.3367C106.447 69.7104 104.523 71.6348 102.149 71.6348H75.928C73.5542 71.6348 71.6299 73.5591 71.6299 75.9329V102.16C71.6299 104.534 69.7056 106.458 67.3318 106.458H35.8198C35.8185 106.458 35.8174 106.459 35.8174 106.46C35.8174 106.462 35.8163 106.463 35.8149 106.463H4.29811C1.92433 106.463 0 104.539 0 102.165V39.1262C0 36.7525 1.92433 34.8281 4.29811 34.8281H30.5193C32.8931 34.8281 34.8174 32.9038 34.8174 30.53V4.29812C34.8174 1.92433 36.7417 0 39.1155 0H102.149C104.523 0 106.447 1.92433 106.447 4.29811V67.3367ZM35.8174 66.3425C35.8174 68.7163 37.7417 70.6406 40.1155 70.6406H66.3318C68.7056 70.6406 70.6299 68.7163 70.6299 66.3425V40.1155C70.6299 37.7417 68.7056 35.8174 66.3318 35.8174H40.1155C37.7417 35.8174 35.8174 37.7417 35.8174 40.1155V66.3425Z`
    })
  });
}
var Ia = _();
function $a(e3, t5) {
  let n7 = `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`;
  return fetch(`https://sgpjbmkswbvhdsbrifpa.supabase.co/rest/v1/rpc/${e3}`, {
    method: `POST`,
    keepalive: true,
    headers: {
      "Content-Type": `application/json`,
      apikey: n7,
      Authorization: `Bearer ${n7}`
    },
    body: JSON.stringify(t5)
  }).then(() => void 0, () => void 0);
}
var eo = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
var to = false;
var no = (e3) => ({
  analytics_storage: e3,
  ad_storage: e3,
  ad_user_data: e3,
  ad_personalization: e3
});
function ro(e3 = true) {
  if (to || !eo() || !e2.googleTagId) return;
  to = true, window.dataLayer = window.dataLayer || [], window.gtag = function() {
    window.dataLayer.push(arguments);
  }, window.gtag(`consent`, `default`, no(`denied`)), window.gtag(`consent`, `update`, no(`granted`)), window.gtag(`js`, /* @__PURE__ */ new Date()), window.gtag(`config`, e2.googleTagId, {
    send_page_view: false
  });
  let t5 = document.createElement(`script`);
  t5.async = true, t5.src = `https://www.googletagmanager.com/gtag/js?id=${e2.googleTagId}`, document.head.append(t5), e3 && oo();
}
function ao(e3, t5) {
  to && window.gtag?.(`event`, e3, t5);
}
function oo() {
  ao(`page_view`, {
    page_location: window.location.href,
    page_title: document.title
  });
}
var so = `aui_ref`;
var co = (e3) => /^[a-z0-9_-]{2,32}$/.test(e3);
function lo() {
  let e3 = document.cookie.match(/(?:^|;\s*)aui_ref=([^;]+)/), t5 = e3 ? decodeURIComponent(e3[1]) : ``;
  return co(t5) ? t5 : null;
}
function uo() {
  try {
    let e3 = document.cookie.match(/(?:^|;\s*)aui_vid=([A-Za-z0-9_-]{8,40})/);
    if (e3) return e3[1];
    let t5 = crypto.randomUUID().replace(/-/g, ``), n7 = window.location.protocol === `https:` ? `; Secure` : ``;
    return document.cookie = `aui_vid=${t5}; Max-Age=31536000; Path=/; SameSite=Lax${n7}`, t5;
  } catch {
    return null;
  }
}
function fo() {
  let e3 = new URL(window.location.href), t5 = (e3.searchParams.get(`ref`) ?? e3.searchParams.get(`via`) ?? ``).trim().toLowerCase();
  if (!t5) return ho();
  if (e3.searchParams.delete(`ref`), e3.searchParams.delete(`via`), window.history.replaceState(window.history.state, ``, e3.pathname + e3.search + e3.hash), !co(t5)) return;
  let n7 = window.location.protocol === `https:` ? `; Secure` : ``;
  document.cookie = `${so}=${encodeURIComponent(t5)}; Max-Age=2592000; Path=/; SameSite=Lax${n7}`, mo(), vo(`Referral visit`, {
    from: window.location.pathname
  });
}
var po = `aui_ref_seen`;
function mo() {
  try {
    sessionStorage.setItem(po, `1`);
  } catch {
  }
}
function ho() {
  if (lo() && !window.location.pathname.startsWith(`/partner/`)) {
    try {
      if (sessionStorage.getItem(po)) return;
    } catch {
      return;
    }
    mo(), vo(`Referral return`, {
      from: window.location.pathname
    });
  }
}
try {
  fo();
} catch {
}
var go = {
  "Get Pro": `get_pro`,
  "Browse library": `browse_library`,
  "Checkout start": `checkout_start`,
  "Referral visit": `ref_visit`,
  "Referral return": `ref_return`,
  "Pricing view": `pricing_view`,
  "Pricing scroll": `pricing_scroll`,
  "Plan click": `plan_click`,
  "Checkout error": `checkout_error`,
  "Upsell open": `upsell_open`,
  "Upsell close": `upsell_close`,
  "Style switch": `style_switch`
};
var _o = (e3) => e3.replace(/[^a-zA-Z0-9 /:._-]/g, ``).trim().slice(0, 80);
function vo(e3, t5) {
  if (/^(localhost|127\.|\[::1\])/.test(window.location.hostname)) return;
  let n7 = t5?.from == null ? t5?.plan ?? null : _o(t5.from) || null, r4 = t5?.item == null ? t5?.seats == null ? null : `${t5.seats} seats` : _o(t5.item) || null;
  $a(`track_funnel`, {
    p_event: go[e3],
    p_source: n7,
    p_detail: r4,
    p_ref: lo(),
    p_vid: uo()
  }), ao(go[e3], {
    source: n7 ?? void 0,
    detail: r4 ?? void 0
  });
}
var yo = `affectui-style`;
var bo = /* @__PURE__ */ new Set();
function xo() {
  if (typeof window > `u`) return `clean`;
  let e3 = new URLSearchParams(window.location.search).get(`style`);
  if (e3 === `clean` || e3 === `classic`) {
    try {
      localStorage.setItem(yo, e3);
    } catch {
    }
    return e3;
  }
  try {
    return localStorage.getItem(yo) === `classic` ? `classic` : `clean`;
  } catch {
    return `clean`;
  }
}
var So = xo();
function Co(e3) {
  e3 !== So && (vo(`Style switch`, {
    from: window.location.pathname,
    item: e3
  }), wo(e3));
}
function wo(e3) {
  if (e3 === So) return;
  So = e3;
  try {
    localStorage.setItem(yo, e3);
  } catch {
  }
  let t5 = new URL(window.location.href);
  e3 === `classic` ? t5.searchParams.set(`style`, `classic`) : t5.searchParams.delete(`style`), window.history.replaceState(window.history.state, ``, t5), bo.forEach((e4) => e4());
}
function To() {
  let [e3, t5] = (0, b.useState)(So);
  return (0, b.useEffect)(() => {
    let e4 = () => t5(So);
    return bo.add(e4), e4(), () => {
      bo.delete(e4);
    };
  }, []), e3;
}
function Eo(e3, t5) {
  if (t5 !== `clean` || !e3.clean) return e3;
  let {
    Preview: n7,
    loadSource: r4,
    loadDocs: i3
  } = e3.clean;
  return {
    ...e3,
    Preview: n7,
    loadSource: r4,
    loadDocs: i3 ?? e3.loadDocs,
    sourceSlug: `${e3.slug}-clean`
  };
}
var Do = () => (0, A.jsxs)(`svg`, {
  width: `16`,
  height: `14`,
  viewBox: `0 0 16 14`,
  "aria-hidden": `true`,
  children: [(0, A.jsx)(`rect`, {
    x: `0.5`,
    y: `0.5`,
    width: `15`,
    height: `13`,
    rx: `3.5`,
    fill: `currentColor`,
    opacity: `0.18`
  }), (0, A.jsx)(`rect`, {
    x: `2.5`,
    y: `2.5`,
    width: `11`,
    height: `6.5`,
    rx: `2`,
    fill: `var(--switch-card, #fff)`,
    stroke: `currentColor`,
    strokeOpacity: `0.35`
  }), (0, A.jsx)(`rect`, {
    x: `9`,
    y: `10.4`,
    width: `4.5`,
    height: `1.6`,
    rx: `0.8`,
    fill: `currentColor`,
    opacity: `0.55`
  })]
});
var Oo = () => (0, A.jsxs)(`svg`, {
  width: `16`,
  height: `14`,
  viewBox: `0 0 16 14`,
  "aria-hidden": `true`,
  children: [(0, A.jsx)(`rect`, {
    x: `1.5`,
    y: `1.5`,
    width: `13`,
    height: `11`,
    rx: `2.5`,
    fill: `var(--switch-card, #fff)`,
    stroke: `currentColor`,
    strokeOpacity: `0.55`
  }), (0, A.jsx)(`path`, {
    d: `M4 5h6M4 7.6h4`,
    stroke: `currentColor`,
    strokeOpacity: `0.55`,
    strokeLinecap: `round`
  })]
});
function Ao() {
  let e3 = To();
  return (0, A.jsx)(`div`, {
    className: `stage__theme stage__style`,
    role: `radiogroup`,
    "aria-label": `Component style`,
    children: [[`classic`, `Classic`, (0, A.jsx)(Do, {}, `c`)], [`clean`, `Clean`, (0, A.jsx)(Oo, {}, `n`)]].map(([t5, n7, r4]) => (0, A.jsx)(`button`, {
      type: `button`,
      role: `radio`,
      "data-look": t5,
      "aria-checked": e3 === t5,
      "aria-label": `${n7} style`,
      title: `${n7} style`,
      className: `stage__theme-btn`,
      onClick: () => Co(t5),
      children: r4
    }, t5))
  });
}
var Io = /* @__PURE__ */ new Set();
var Lo = null;
var Ro = !a();
function zo(e3) {
  Lo = e3, Ro = true, Io.forEach((e4) => e4());
}
async function Bo(e3) {
  if (!e3) return zo(null);
  let {
    data: t5
  } = await (await i()).from(`profiles`).select(`plan`).eq(`id`, e3.user.id).maybeSingle();
  zo({
    email: e3.user.email ?? ``,
    plan: t5?.plan === `pro` ? `pro` : `none`
  });
}
var Vo = null;
function Ho() {
  return Vo ??= i().then((e3) => (e3.auth.getSession().then(({
    data: e4
  }) => Bo(e4.session)).catch(() => zo(null)), e3.auth.onAuthStateChange((e4, t5) => {
    setTimeout(() => Bo(t5), 0);
  }), e3)), Vo;
}
a() && Ho();
async function Uo(e3) {
  let {
    error: t5
  } = await (await Ho()).auth.signInWithOtp({
    email: e3.trim().toLowerCase(),
    options: {
      emailRedirectTo: `${window.location.origin}/account`
    }
  });
  return t5?.message ?? null;
}
async function Wo(e3, t5) {
  let {
    error: n7
  } = await (await Ho()).auth.verifyOtp({
    email: e3.trim().toLowerCase(),
    token: t5.trim(),
    type: `email`
  });
  return n7?.message ?? null;
}
async function Go(e3) {
  let {
    error: t5
  } = await (await Ho()).auth.signInWithOAuth({
    provider: e3,
    options: {
      redirectTo: `${window.location.origin}/account`
    }
  });
  return t5?.message ?? null;
}
async function R() {
  try {
    let {
      external: e3
    } = await (await fetch(`https://sgpjbmkswbvhdsbrifpa.supabase.co/auth/v1/settings`, {
      headers: {
        apikey: `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`
      }
    })).json();
    return [`google`, `github`].filter((t5) => e3?.[t5]);
  } catch {
    return [];
  }
}
async function z(e3 = false) {
  await (await Ho()).auth.signOut({
    scope: e3 ? `global` : `local`
  });
}
async function Ko() {
  let {
    data: e3
  } = await (await Ho()).auth.getSession();
  return await Bo(e3.session), Lo;
}
function Jo() {
  let [e3, t5] = (0, b.useState)(Lo);
  return (0, b.useEffect)(() => {
    let e4 = () => t5(Lo);
    return Io.add(e4), e4(), () => {
      Io.delete(e4);
    };
  }, []), e3;
}
async function Xo(e3) {
  if (!e3.pro) return e3.loadSource();
  let {
    data: t5
  } = await (await i()).auth.getSession(), n7 = t5.session?.access_token;
  if (!n7) throw Error(`Sign in with a Pro account to get the code.`);
  let r4 = await fetch(`/api/source?slug=${encodeURIComponent(e3.sourceSlug ?? e3.slug)}`, {
    headers: {
      Authorization: `Bearer ${n7}`
    }
  }), i3 = await r4.json().catch(() => ({}));
  if (!r4.ok || typeof i3.source != `string`) throw Error(i3.error ?? `Could not load the code.`);
  return i3.source;
}
function Zo(e3, t5) {
  let [n7, r4] = (0, b.useState)(null), i3 = (0, b.useRef)(e3);
  i3.current = e3;
  let {
    pro: a3
  } = e3, o2 = e3.sourceSlug ?? e3.slug;
  return (0, b.useEffect)(() => {
    if (r4(null), a3 && !t5) return;
    let e4 = true;
    return Xo(i3.current).then((t6) => e4 && r4(t6)).catch((t6) => e4 && r4(`// ${t6 instanceof Error ? t6.message : `Could not load the code.`}
// Reload the page to try again, or write to us if it keeps happening.`)), () => {
      e4 = false;
    };
  }, [o2, a3, t5]), n7;
}
function Qo(e3, t5) {
  window.dispatchEvent(new CustomEvent(`affectui:copied`, {
    detail: e3
  })), !/^(localhost|127\.|\[::1\])/.test(window.location.hostname) && $a(`track_usage`, {
    p_slug: e3,
    p_action: t5,
    p_ref: lo()
  });
}
var ss = `aui_offer`;
var cs = () => {
  try {
    let e3 = localStorage.getItem(ss);
    return e3 === null ? void 0 : JSON.parse(e3);
  } catch {
    return;
  }
};
var V = (() => {
  let e3 = cs();
  return {
    offer: e3 === void 0 ? null : e3,
    loaded: false
  };
})();
var ls = /* @__PURE__ */ new Set();
var us = null;
function ds() {
  return us ??= fetch(`/api/pricing`).then((e3) => e3.ok ? e3.json() : null).then((e3) => {
    if (e3 && e3.offer !== void 0) {
      V = {
        offer: e3.offer,
        loaded: true
      };
      try {
        localStorage.setItem(ss, JSON.stringify(e3.offer));
      } catch {
      }
      ls.forEach((e4) => e4(V));
    }
  }).catch(() => void 0), us;
}
function fs(e3 = true) {
  let [t5, n7] = (0, b.useState)(V);
  return (0, b.useEffect)(() => {
    if (e3) return ls.add(n7), n7(V), ds(), () => {
      ls.delete(n7);
    };
  }, [e3]), t5;
}
var ps = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
var ms = false;
function hs(e3 = true) {
  if (ms || !ps() || !e2.metaPixelId) return;
  ms = true;
  let t5 = function(...e4) {
    t5.callMethod ? t5.callMethod(...e4) : t5.queue.push(e4);
  };
  t5.queue = [], t5.push = t5, t5.loaded = true, t5.version = `2.0`, window.fbq = t5, window._fbq = window._fbq || t5;
  let n7 = document.createElement(`script`);
  n7.async = true, n7.src = `https://connect.facebook.net/en_US/fbevents.js`, document.head.append(n7), t5(`init`, e2.metaPixelId), e3 && vs();
}
function _s(e3, t5, n7) {
  ms && (n7 ? window.fbq?.(`track`, e3, t5 ?? {}, {
    eventID: n7
  }) : window.fbq?.(`track`, e3, t5 ?? {}));
}
function vs() {
  ms && window.fbq?.(`track`, `PageView`);
}
function ys() {
  let e3 = (e4) => document.cookie.match(RegExp(`(?:^|;\\s*)${e4}=([^;]+)`))?.[1];
  return {
    fbp: e3(`_fbp`),
    fbc: e3(`_fbc`)
  };
}
var bs = `aui_consent`;
var xs = 2;
function ws() {
  try {
    let e3 = JSON.parse(localStorage.getItem(bs) ?? `null`);
    return e3?.v === xs && (e3.choice === `granted` || e3.choice === `denied`) ? e3.choice : null;
  } catch {
    return null;
  }
}
function Ds() {
  ws() === `granted` && (ro(false), hs(false));
}
var As = `aui_pending_purchase`;
var js = (e3, t5) => ({
  item_id: e3,
  item_name: e3 === `team` ? `affectUI Team` : `affectUI Individual`,
  price: t5,
  quantity: 1
});
function Ms(e3) {
  if (ws() === `granted`) {
    ao(`begin_checkout`, {
      currency: `USD`,
      value: e3.value,
      items: [js(e3.kind, e3.value)]
    }), _s(`InitiateCheckout`, {
      currency: `USD`,
      value: e3.value,
      content_ids: [e3.kind],
      content_type: `product`,
      num_items: 1
    });
    try {
      localStorage.setItem(As, JSON.stringify(e3));
    } catch {
    }
  }
}
function Ns() {
  try {
    let e3 = localStorage.getItem(As);
    if (!e3) return;
    localStorage.removeItem(As);
    let t5 = JSON.parse(e3);
    ao(`purchase`, {
      transaction_id: t5.id,
      currency: `USD`,
      value: t5.value,
      items: [js(t5.kind, t5.value)]
    }), _s(`Purchase`, {
      currency: `USD`,
      value: t5.value,
      content_ids: [t5.kind],
      content_type: `product`
    }, `purchase-${t5.id}`);
  } catch {
  }
}
function Ps(e3) {
  ao(`generate_lead`, {
    topic: e3
  }), _s(`Lead`, {
    content_name: e3
  });
}
async function Fs(e3, t5 = 1) {
  vo(`Checkout start`, {
    plan: e3,
    seats: t5
  });
  let n7 = a() ? (await (await i()).auth.getSession()).data.session?.access_token : void 0, i3 = await fetch(`/api/checkout`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      ...n7 ? {
        Authorization: `Bearer ${n7}`
      } : {}
    },
    body: JSON.stringify({
      kind: e3,
      seats: t5,
      ...ws() === `granted` ? {
        ads: true,
        ...ys()
      } : {}
    })
  }), o2 = await i3.json().catch(() => ({}));
  if (!i3.ok || !o2.url) throw Error(o2.error ?? `Checkout is not available right now.`);
  o2.id && o2.value != null && Ms({
    id: o2.id,
    value: o2.value,
    kind: e3
  }), window.location.assign(o2.url);
}
var Is = false;
function Ls() {
  if (!Is) {
    Is = true, fetch(`/api/checkout`, {
      method: `GET`
    }).catch(() => void 0);
    for (let e3 of [`https://checkout.stripe.com`, `https://js.stripe.com`, `https://m.stripe.network`]) {
      let t5 = Object.assign(document.createElement(`link`), {
        rel: `preconnect`,
        href: e3,
        crossOrigin: ``
      });
      document.head.append(t5);
    }
  }
}
var Rs = null;
var zs = /* @__PURE__ */ new Set();
var Bs = (e3) => {
  Rs = e3, zs.forEach((e4) => e4());
};
var Vs = (e3) => {
  let t5 = e3.match(/^\/(?:components|screens|blocks|illustrations|motion)\/([a-z0-9-]+)\/?$/)?.[1];
  return Oi.find((e4) => e4.slug === t5 && e4.pro) ?? null;
};
function Hs({
  entry: e3,
  from: t5
}) {
  let n7 = e3 ?? Vs(window.location.pathname);
  vo(`Upsell open`, {
    from: t5,
    item: n7?.slug
  }), Ls(), Bs({
    entry: n7,
    from: t5
  });
}
var Js = (0, b.createContext)(false);
var Ys = 1440;
var Xs = 900;
function Zs({
  children: e3
}) {
  let t5 = (0, b.useContext)(Js), n7 = (0, b.useRef)(null), [r4, i3] = (0, b.useState)(0);
  return (0, b.useLayoutEffect)(() => {
    let e4 = n7.current;
    if (!e4 || t5) return;
    let r5 = () => i3(e4.clientWidth / Ys);
    r5();
    let a3 = new ResizeObserver(r5);
    return a3.observe(e4), () => a3.disconnect();
  }, [t5]), t5 ? (0, A.jsx)(`div`, {
    className: `screen-full`,
    children: e3
  }) : (0, A.jsx)(`div`, {
    ref: n7,
    className: `screen-stage`,
    style: {
      aspectRatio: `${Ys} / ${Xs}`
    },
    children: r4 > 0 && (0, A.jsx)(`div`, {
      className: `screen-stage__canvas`,
      style: {
        width: Ys,
        height: Xs,
        transform: `scale(${r4})`
      },
      children: e3
    })
  });
}
var Qs = [`Q3 Campaign`, `Brand assets`, `Hiring`, `Research`];
var $s = {
  "New chat": `assistant-home`,
  Folders: `files`,
  Integrations: `integrations`,
  Chat: `agent-chat`,
  Companies: `crm`,
  Revenue: `analytics`,
  Analytics: `analytics`,
  Runs: `agent-run`,
  Evals: `evals`,
  Settings: `settings-billing`
};
function ec(e3) {
  let t5 = /\/full\/?$/.test(window.location.pathname), n7 = Qs.includes(e3), r4 = $s[e3] ?? (n7 ? `folder` : null);
  if (!r4) return;
  let i3 = n7 ? `?folder=${encodeURIComponent(e3)}` : ``;
  ga(`/screens/${r4}${t5 ? `/full` : ``}${i3}`), window.dispatchEvent(new Event(`screen-query`));
}
function tc() {
  let e3 = () => new URLSearchParams(window.location.search).get(`folder`) ?? void 0, [t5, n7] = (0, b.useState)(e3);
  return (0, b.useEffect)(() => {
    let t6 = () => n7(e3());
    return window.addEventListener(`screen-query`, t6), window.addEventListener(`popstate`, t6), () => {
      window.removeEventListener(`screen-query`, t6), window.removeEventListener(`popstate`, t6);
    };
  }, []), t5;
}
var ic = () => {
  try {
    let e3 = localStorage.getItem(`theme`);
    return e3 === `light` || e3 === `dark` ? e3 : `system`;
  } catch {
    return `system`;
  }
};
var ac = /* @__PURE__ */ new Set();
var oc = null;
function sc() {
  let [e3, t5] = (0, b.useState)(() => oc ??= ic());
  return (0, b.useEffect)(() => (ac.add(t5), () => {
    ac.delete(t5);
  }), []), (0, b.useEffect)(() => {
    let t6 = document.documentElement;
    try {
      e3 === `system` ? (delete t6.dataset.theme, localStorage.removeItem(`theme`)) : (t6.dataset.theme = e3, localStorage.setItem(`theme`, e3));
    } catch {
    }
  }, [e3]), (0, b.useEffect)(() => {
    let e4 = document.documentElement, t6 = matchMedia(`(prefers-color-scheme: dark)`), n7 = () => {
      let n8 = e4.dataset.theme;
      e4.classList.toggle(`dark`, n8 ? n8 === `dark` : t6.matches);
    };
    return n7(), t6.addEventListener(`change`, n7), () => t6.removeEventListener(`change`, n7);
  }, [e3]), {
    theme: e3,
    setTheme: (e4) => {
      oc = e4, ac.forEach((t6) => t6(e4));
    }
  };
}
var cc = [{
  value: `light`,
  label: `Light theme`,
  icon: Zi
}, {
  value: `dark`,
  label: `Dark theme`,
  icon: qi
}];
function lc() {
  let {
    theme: e3,
    setTheme: t5
  } = sc(), n7 = e3 === `system` ? window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` : e3;
  return (0, A.jsx)(`div`, {
    className: `theme-switch theme-switch--top`,
    role: `radiogroup`,
    "aria-label": `Theme`,
    children: cc.map(({
      value: e4,
      label: r4,
      icon: i3
    }) => (0, A.jsx)(`button`, {
      role: `radio`,
      "aria-checked": n7 === e4,
      "aria-label": r4,
      className: `icon-btn`,
      onClick: () => t5(e4),
      children: (0, A.jsx)(j, {
        icon: i3,
        size: 14
      })
    }, e4))
  });
}
function hc({
  label: e3 = `Get Pro`,
  className: t5 = ``
}) {
  return (0, A.jsxs)(I, {
    to: t3.links.pro,
    className: `btn pro-badge btn--pro ${t5}`,
    onClick: (e4) => {
      vo(`Get Pro`, {
        from: window.location.pathname
      }), !(e4.metaKey || e4.ctrlKey || e4.shiftKey || e4.button !== 0) && (e4.preventDefault(), Hs({
        from: window.location.pathname
      }));
    },
    children: [(0, A.jsx)(j, {
      icon: Vi,
      size: 14
    }), (0, A.jsx)(`span`, {
      children: e3
    })]
  });
}
function gc({
  compact: e3 = false,
  label: t5 = `Source code`
}) {
  return (0, A.jsxs)(`div`, {
    className: `locked`,
    "data-compact": e3 || void 0,
    children: [(0, A.jsx)(`div`, {
      className: `locked__lines`,
      "aria-hidden": true,
      children: (e3 ? [62, 48, 70] : [38, 64, 52, 80, 44, 70, 58, 34, 66, 48]).map((e4, t6) => (0, A.jsx)(`span`, {
        style: {
          width: `${e4}%`,
          marginLeft: t6 % 3 == 1 ? 24 : t6 % 3 == 2 ? 48 : 0
        }
      }, t6))
    }), (0, A.jsxs)(`div`, {
      className: `locked__body`,
      children: [(0, A.jsx)(`span`, {
        className: `locked__icon`,
        children: (0, A.jsx)(j, {
          icon: Gi,
          size: e3 ? 14 : 16
        })
      }), (0, A.jsxs)(`div`, {
        className: `locked__text`,
        children: [(0, A.jsxs)(`strong`, {
          children: [t5, ` is part of Pro`]
        }), !e3 && (0, A.jsx)(`span`, {
          children: `Get Pro to copy the code, install it with the CLI and use it in your projects.`
        })]
      }), (0, A.jsx)(hc, {
        label: e3 ? `Get Pro` : `Unlock with Pro`
      })]
    })]
  });
}
var wc = [];
var Tc = /* @__PURE__ */ new Set();
var Ec = [];
var Dc = 0;
var Oc = (e3) => {
  wc = e3, Tc.forEach((e4) => e4());
};
var kc = (e3) => (Tc.add(e3), () => {
  Tc.delete(e3);
});
var Ac = () => wc;
var jc = () => Ec;
function Mc(e3, t5, n7 = {}, r4 = false) {
  let {
    id: i3,
    ...a3
  } = n7, o2 = i3 === void 0 ? void 0 : wc.find((e4) => e4.id === i3 && !e4.removing);
  if (o2) return Oc(wc.map((n8) => n8 === o2 ? {
    ...n8,
    ...a3,
    type: e3,
    title: t5,
    version: n8.version + 1
  } : n8)), o2.id;
  let s = i3 ?? `toast-${++Dc}`;
  return r4 || Oc([...wc.filter((e4) => e4.id !== s), {
    ...a3,
    id: s,
    type: e3,
    title: t5,
    version: 0
  }]), s;
}
var Nc = 420;
function Pc(e3) {
  let t5 = wc.filter((t6) => !t6.removing && (e3 === void 0 || t6.id === e3));
  t5.length && (Oc(wc.map((e4) => t5.includes(e4) ? {
    ...e4,
    removing: true
  } : e4)), t5.forEach((e4) => e4.onDismiss?.(e4.id)), window.setTimeout(() => Oc(wc.filter((e4) => !(e4.removing && t5.some((t6) => t6.id === e4.id)))), Nc));
}
var Fc = (e3) => typeof e3 == `object` && !!e3 && !(0, b.isValidElement)(e3) && !Array.isArray(e3) && `title` in e3;
var Ic = (e3) => Fc(e3) ? e3 : {
  title: e3,
  description: void 0
};
function Lc(e3, t5, n7 = {}) {
  let r4 = typeof e3 == `function` ? e3() : e3, i3 = Ic(t5.loading), a3 = Mc(`loading`, i3.title, {
    ...n7,
    description: i3.description
  }), o2 = (e4, t6) => {
    let r5 = Ic(t6);
    Mc(e4, r5.title, {
      ...n7,
      id: a3,
      description: r5.description
    }, true);
  };
  return r4.then((e4) => o2(`success`, typeof t5.success == `function` ? t5.success(e4) : t5.success), (e4) => o2(`error`, typeof t5.error == `function` ? t5.error(e4) : t5.error)), r4;
}
var Rc = Object.assign((e3, t5) => Mc(`default`, e3, t5), {
  success: (e3, t5) => Mc(`success`, e3, t5),
  error: (e3, t5) => Mc(`error`, e3, t5),
  info: (e3, t5) => Mc(`info`, e3, t5),
  loading: (e3, t5) => Mc(`loading`, e3, t5),
  promise: Lc,
  dismiss: Pc
});
function zc() {
  return (0, A.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    className: `ui-ts__status`,
    "aria-hidden": `true`,
    children: [(0, A.jsx)(`g`, {
      className: `ui-ts__spin`,
      children: (0, A.jsx)(`circle`, {
        className: `ui-ts__ring`,
        cx: `12`,
        cy: `12`,
        r: `9.25`,
        pathLength: 1
      })
    }), (0, A.jsx)(`path`, {
      className: `ui-ts__mark ui-ts__check`,
      d: `M8.3 12.4l2.5 2.5 4.9-5.3`,
      pathLength: 1
    }), (0, A.jsx)(`path`, {
      className: `ui-ts__mark ui-ts__x1`,
      d: `M9.5 9.5l5 5`,
      pathLength: 1
    }), (0, A.jsx)(`path`, {
      className: `ui-ts__mark ui-ts__x2`,
      d: `M14.5 9.5l-5 5`,
      pathLength: 1
    }), (0, A.jsx)(`path`, {
      className: `ui-ts__info`,
      d: `M12 11.2v4.6M12 8.2h.01`
    })]
  });
}
var Bc = () => (0, A.jsx)(`svg`, {
  viewBox: `0 0 24 24`,
  className: `ui-ts__glyph`,
  "aria-hidden": `true`,
  children: (0, A.jsx)(`path`, {
    d: `M7.5 7.5l9 9M16.5 7.5l-9 9`
  })
});
var Vc = (e3) => String(e3.id);
function Hc({
  t: e3,
  layout: t5,
  edge: n7,
  paused: r4,
  defaultDuration: i3,
  hairline: a3,
  closeButton: o2,
  onHeight: s
}) {
  let [c, l] = (0, b.useState)(false), [u, d] = (0, b.useState)(false), [f, p] = (0, b.useState)(null), m2 = (0, b.useRef)(null), h2 = (0, b.useRef)(null), g2 = (0, b.useRef)({
    title: e3.title,
    description: e3.description,
    version: e3.version
  }), _2 = (0, b.useRef)(0), v2 = (0, b.useRef)({
    version: -1,
    left: 0
  }), y2 = (0, b.useRef)(null), ee = (0, b.useRef)(false), x = !!e3.removing;
  (0, b.useEffect)(() => {
    let e4 = requestAnimationFrame(() => requestAnimationFrame(() => l(true)));
    return () => cancelAnimationFrame(e4);
  }, []), (0, b.useLayoutEffect)(() => {
    let t6 = m2.current;
    if (!t6) return;
    let n8 = Vc(e3), r5 = () => s(n8, t6.offsetHeight);
    r5();
    let i4 = new ResizeObserver(r5);
    return i4.observe(t6), () => i4.disconnect();
  }, []), (0, b.useLayoutEffect)(() => {
    let t6 = g2.current;
    t6.version !== e3.version && (g2.current = {
      title: e3.title,
      description: e3.description,
      version: e3.version
    }, (t6.title !== e3.title || t6.description !== e3.description) && (p(t6), window.clearTimeout(_2.current), _2.current = window.setTimeout(() => p(null), 320)));
  }, [e3.version]), (0, b.useEffect)(() => () => window.clearTimeout(_2.current), []);
  let te = e3.duration ?? i3, ne = e3.type !== `loading` && Number.isFinite(te), re = ne && !r4 && !u && !x;
  (0, b.useEffect)(() => {
    if (v2.current.version !== e3.version && (v2.current = {
      version: e3.version,
      left: te
    }), !re) return;
    let t6 = e3.version, n8 = Date.now(), r5 = window.setTimeout(() => Pc(e3.id), Math.max(0, v2.current.left));
    return () => {
      window.clearTimeout(r5), v2.current.version === t6 && (v2.current.left -= Date.now() - n8);
    };
  }, [re, e3.version, te, e3.id]);
  let ie = (e4) => {
    e4.button !== 0 || x || e4.target.closest(`button, a, input, textarea, select`) || (y2.current = {
      pointer: e4.pointerId,
      x: e4.clientX,
      y: e4.clientY,
      axis: null,
      samples: []
    }, ee.current = false);
  }, S = (e4) => {
    let t6 = y2.current, r5 = h2.current;
    if (!t6 || t6.pointer !== e4.pointerId || !r5) return;
    let i4 = e4.clientX - t6.x, a4 = e4.clientY - t6.y;
    if (!t6.axis) {
      if (Math.hypot(i4, a4) < 6) return;
      t6.axis = Math.abs(i4) > Math.abs(a4) ? `x` : `y`, e4.currentTarget.setPointerCapture(e4.pointerId), ee.current = true, d(true), r5.style.transition = `none`;
    }
    let o3 = t6.axis === `x` ? i4 : a4, s2 = t6.axis === `x` || o3 * n7 > 0;
    s2 || (o3 = Math.sign(o3) * Math.abs(o3) ** 0.7 * 0.6);
    let c2 = t6.axis === `x` ? r5.offsetWidth : r5.offsetHeight * 2;
    r5.style.transform = t6.axis === `x` ? `translateX(${o3}px)` : `translateY(${o3}px)`, r5.style.opacity = s2 ? String(Math.max(0.25, 1 - Math.abs(o3) / (c2 * 1.1))) : ``, t6.samples.push({
      v: o3,
      at: e4.timeStamp
    }), t6.samples.length > 6 && t6.samples.shift();
  }, ae = (t6) => {
    let r5 = y2.current, i4 = h2.current;
    if (!r5 || r5.pointer !== t6.pointerId || (y2.current = null, !r5.axis || !i4)) return;
    d(false);
    let a4 = r5.samples[r5.samples.length - 1] ?? {
      v: 0,
      at: 0
    }, o3 = r5.samples[0] ?? a4, s2 = a4.at > o3.at ? (a4.v - o3.v) / (a4.at - o3.at) : 0, c2 = r5.axis === `x` || a4.v * n7 > 0, l2 = Math.abs(s2) > 0.45 && Math.sign(s2) === Math.sign(a4.v);
    if (t6.type === `pointerup` && c2 && (Math.abs(a4.v) > 64 || l2)) {
      let t7 = (r5.axis === `x` ? i4.offsetWidth : i4.offsetHeight) + 48;
      i4.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`, i4.style.transform = `${r5.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a4.v) * t7}px)`, i4.style.opacity = `0`, Pc(e3.id);
    } else i4.style.transition = ``, i4.style.transform = ``, i4.style.opacity = ``;
  }, oe = -n7, se = `translateY(${oe * t5.y}px) scale(${t5.scale})`;
  c || (se = `translateY(${n7 * 100}%) scale(${t5.scale})`), x && (se = `translateY(${oe * t5.y + n7 * 10}px) scale(${t5.scale * 0.96})`);
  let ce = e3.type === `loading` ? (0, A.jsx)(zc, {}) : e3.icon ?? (e3.type === "default" ? null : (0, A.jsx)(zc, {}));
  return (0, A.jsx)(`li`, {
    className: `ui-ts__toast`,
    "data-toast-id": Vc(e3),
    "data-type": e3.type,
    "data-behind": t5.behind || void 0,
    "data-removing": x || void 0,
    "data-swiping": u || void 0,
    tabIndex: 0,
    inert: t5.hidden || x,
    style: {
      transform: se,
      opacity: !c || x || t5.hidden ? 0 : 1,
      height: t5.height ? `${t5.height}px` : void 0,
      zIndex: t5.z
    },
    onPointerDown: ie,
    onPointerMove: S,
    onPointerUp: ae,
    onPointerCancel: ae,
    onClickCapture: (e4) => {
      ee.current && (ee.current = false, e4.stopPropagation(), e4.preventDefault());
    },
    children: (0, A.jsxs)(`div`, {
      ref: h2,
      className: `ui-ts__swipe`,
      children: [(0, A.jsxs)(`div`, {
        className: `ui-ts__card`,
        children: [(0, A.jsxs)(`div`, {
          ref: m2,
          className: `ui-ts__content`,
          "data-action": e3.action ? `` : void 0,
          children: [ce && (0, A.jsx)(`span`, {
            className: `ui-ts__icon`,
            "data-type": e3.icon && e3.type !== `loading` ? `custom` : e3.type,
            children: ce
          }), (0, A.jsxs)(`div`, {
            className: `ui-ts__text`,
            children: [(0, A.jsxs)(`div`, {
              className: `ui-ts__copy`,
              "data-changed": e3.version > 0 || void 0,
              children: [(0, A.jsx)(`div`, {
                className: `ui-ts__title`,
                children: e3.title
              }), e3.description != null && e3.description !== `` && (0, A.jsx)(`div`, {
                className: `ui-ts__desc`,
                children: e3.description
              })]
            }, e3.version), f && (0, A.jsxs)(`div`, {
              className: `ui-ts__copy ui-ts__ghost`,
              "aria-hidden": `true`,
              children: [(0, A.jsx)(`div`, {
                className: `ui-ts__title`,
                children: f.title
              }), f.description != null && f.description !== `` && (0, A.jsx)(`div`, {
                className: `ui-ts__desc`,
                children: f.description
              })]
            }, `ghost-${f.version}`)]
          }), e3.action && (0, A.jsx)(`button`, {
            type: `button`,
            className: `ui-ts__action`,
            onClick: (t6) => {
              e3.action.onClick(t6), t6.defaultPrevented || Pc(e3.id);
            },
            children: e3.action.label
          })]
        }), a3 && ne && (0, A.jsx)(`span`, {
          className: `ui-ts__timer`,
          "aria-hidden": `true`,
          style: {
            animationDuration: `${te}ms`,
            animationPlayState: re ? `running` : `paused`
          }
        }, e3.version)]
      }), o2 && (0, A.jsx)(`button`, {
        type: `button`,
        className: `ui-ts__close`,
        "aria-label": `Dismiss notification`,
        onClick: () => Pc(e3.id),
        children: (0, A.jsx)(Bc, {})
      })]
    })
  });
}
var Uc = 10;
var Wc = 0.05;
var Gc = {
  y: 0,
  scale: 1,
  height: 0,
  z: 0,
  behind: false,
  hidden: true
};
function Kc({
  position: e3 = `bottom-right`,
  inline: t5 = false,
  id: n7,
  duration: r4 = 4e3,
  visibleToasts: i3 = 3,
  expand: a3 = false,
  offset: o2,
  gap: s = 10,
  hotkey: c = `F8`,
  hairline: l = true,
  closeButton: u = true,
  label: d = `Notifications`,
  className: f
}) {
  let p = (0, b.useSyncExternalStore)(kc, Ac, jc), [m2, h2] = (0, b.useState)({}), [g2, _2] = (0, b.useState)(false), [v2, y2] = (0, b.useState)(false), [ee, x] = (0, b.useState)(false), [te, ne] = (0, b.useState)(false), [re, ie] = (0, b.useState)(``), [S, ae] = (0, b.useState)(``), oe = (0, b.useRef)(null), se = (0, b.useRef)(/* @__PURE__ */ new Map()), ce = (0, b.useRef)(0), le = (0, b.useRef)(null), ue = (0, b.useRef)(`mouse`), de = (0, b.useRef)(/* @__PURE__ */ new Map()), [fe, pe] = e3.split(`-`), me2 = fe === `bottom` ? 1 : -1, he2 = p.filter((e4) => (e4.toaster ?? null) === (n7 ?? null)).reverse(), C2 = he2.filter((e4) => !e4.removing), ge2 = a3 || g2 || v2 || ee, _e2 = g2 || v2 || ee || te, ve2 = Math.max(1, i3), ye2 = (0, b.useCallback)((e4, t6) => {
    h2((n8) => n8[e4] === t6 ? n8 : {
      ...n8,
      [e4]: t6
    });
  }, []), be2 = C2[0] && m2[Vc(C2[0])] || ce.current;
  be2 && (ce.current = be2);
  let xe2 = /* @__PURE__ */ new Map(), Se2 = 0;
  C2.forEach((e4, t6) => {
    let n8 = m2[Vc(e4)] ?? 0, r5 = Math.min(t6, ve2 - 1), i4 = ge2 ? {
      y: Se2,
      scale: 1,
      height: n8,
      z: C2.length - t6,
      behind: false,
      hidden: t6 >= ve2
    } : {
      y: r5 * Uc,
      scale: 1 - r5 * Wc,
      height: t6 === 0 ? n8 : be2,
      z: C2.length - t6,
      behind: t6 > 0,
      hidden: t6 >= ve2
    };
    t6 < ve2 && (Se2 += n8 + s), xe2.set(Vc(e4), i4), se.current.set(Vc(e4), i4);
  });
  let Ce2 = Math.min(C2.length, ve2), we2 = C2.length ? ge2 ? Math.max(0, Se2 - s) : be2 + Uc * (Ce2 - 1) : 0;
  (0, b.useEffect)(() => {
    let e4 = new Set(he2.map(Vc));
    h2((t6) => {
      let n8 = Object.keys(t6).filter((t7) => !e4.has(t7));
      if (!n8.length) return t6;
      let r5 = {
        ...t6
      };
      return n8.forEach((e5) => delete r5[e5]), r5;
    }), se.current.forEach((t6, n8) => !e4.has(n8) && se.current.delete(n8)), C2.length || x(false);
  }, [p]), (0, b.useEffect)(() => {
    let e4 = oe.current;
    e4 && (C2.forEach((t6) => {
      let n8 = Vc(t6);
      if (de.current.get(n8) === t6.version) return;
      de.current.set(n8, t6.version);
      let r5 = Array.from(e4.querySelectorAll(`[data-toast-id]`)).find((e5) => e5.dataset.toastId === n8)?.querySelector(`.ui-ts__copy:not(.ui-ts__ghost)`)?.textContent?.trim();
      r5 && (t6.type === `error` ? ae : ie)((e5) => e5 === r5 ? `${r5}\xA0` : r5);
    }), de.current.forEach((e5, t6) => !he2.some((e6) => Vc(e6) === t6) && de.current.delete(t6)));
  }, [p]), (0, b.useEffect)(() => {
    let e4 = () => ne(document.visibilityState === `hidden`);
    return e4(), document.addEventListener(`visibilitychange`, e4), () => document.removeEventListener(`visibilitychange`, e4);
  }, []), (0, b.useEffect)(() => {
    if (!ee) return;
    let e4 = (e5) => {
      oe.current?.contains(e5.target) || x(false);
    };
    return document.addEventListener(`pointerdown`, e4), () => document.removeEventListener(`pointerdown`, e4);
  }, [ee]);
  let Te2 = () => Array.from(oe.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
  (0, b.useEffect)(() => {
    if (!c) return;
    let e4 = (e5) => {
      if (e5.key !== c && e5.code !== c) return;
      let t6 = Te2().find((e6) => !e6.inert);
      t6 && (e5.preventDefault(), oe.current?.contains(document.activeElement) || (le.current = document.activeElement), t6.focus());
    };
    return window.addEventListener(`keydown`, e4), () => window.removeEventListener(`keydown`, e4);
  }, [c]);
  let Ee2 = (e4) => {
    if (e4.key !== `Escape` || !C2.length) return;
    e4.preventDefault(), e4.stopPropagation();
    let t6 = e4.target.closest(`[data-toast-id]`), n8 = C2.find((e5) => Vc(e5) === t6?.dataset.toastId) ?? C2[0], r5 = C2.indexOf(n8);
    Pc(n8.id);
    let i4 = C2.filter((e5) => e5 !== n8)[Math.min(r5, C2.length - 2)], a4 = i4 && Te2().find((e5) => e5.dataset.toastId === Vc(i4));
    a4 ? a4.focus() : le.current?.isConnected ? le.current.focus() : document.activeElement?.blur();
  }, w2 = (e4) => {
    e4.target.matches(`:focus-visible`) && y2(true);
  }, T2 = (e4) => {
    e4.currentTarget.contains(e4.relatedTarget) || y2(false);
  }, De2 = {
    "--ui-ts-offset": o2 === void 0 ? void 0 : `${o2}px`
  };
  return (0, A.jsxs)(`section`, {
    ref: oe,
    className: [`ui-ts`, f].filter(Boolean).join(` `),
    "data-y": fe,
    "data-x": pe,
    "data-inline": t5 || void 0,
    "data-expanded": ge2 || void 0,
    "data-empty": !C2.length || void 0,
    "aria-label": c ? `${d} (${c})` : d,
    tabIndex: -1,
    style: De2,
    onKeyDown: Ee2,
    onFocus: w2,
    onBlur: T2,
    onPointerDownCapture: (e4) => ue.current = e4.pointerType,
    onPointerEnter: (e4) => e4.pointerType === `mouse` && _2(true),
    onPointerLeave: (e4) => e4.pointerType === `mouse` && _2(false),
    onClick: () => ue.current !== `mouse` && C2.length > 1 && x(true),
    children: [(0, A.jsx)(`style`, {
      href: `ui-toaster`,
      precedence: `default`,
      children: qc
    }), (0, A.jsx)(`ol`, {
      className: `ui-ts__list`,
      style: {
        height: `${we2}px`
      },
      children: he2.map((e4) => (0, A.jsx)(Hc, {
        t: e4,
        layout: xe2.get(Vc(e4)) ?? se.current.get(Vc(e4)) ?? Gc,
        edge: me2,
        paused: _e2 || (xe2.get(Vc(e4))?.hidden ?? false),
        defaultDuration: r4,
        hairline: l,
        closeButton: u,
        onHeight: ye2
      }, Vc(e4)))
    }), (0, A.jsx)(`div`, {
      className: `ui-ts__sr`,
      role: `status`,
      "aria-live": `polite`,
      children: re
    }), (0, A.jsx)(`div`, {
      className: `ui-ts__sr`,
      role: `alert`,
      children: S
    })]
  });
}
var qc = `.ui-ts{--ui-ts-card: #ffffff;--ui-ts-line: #ececec;--ui-ts-ink: #171717;--ui-ts-text: #404040;--ui-ts-muted: #8f8f8f;--ui-ts-faint: #b5b5b5;--ui-ts-button: #f0f0f0;--ui-ts-button-hover: #e6e6e7;--ui-ts-hairline: rgba(23, 23, 23, 0.14);--ui-ts-success: #2f9e5b;--ui-ts-danger: #e5484d;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -6px rgba(0, 0, 0, 0.1);--ui-ts-focus: rgba(23, 23, 23, 0.22);--ui-ts-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-ts-width: 356px;--ui-ts-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;width: var(--ui-ts-width);max-width: calc(100% - 2 * var(--ui-ts-offset));margin: 0;padding: 0;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-ts-text);-webkit-font-smoothing: antialiased;outline: none}.ui-ts[data-inline]{position: absolute;z-index: 20;--ui-ts-offset: 20px}.ui-ts[data-empty]{pointer-events: none}.ui-ts *, .ui-ts *::before, .ui-ts *::after{box-sizing: border-box}:where(.ui-ts) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-ts) svg{display: block;flex: none}.ui-ts button:focus-visible{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts[data-y="bottom"]{bottom: var(--ui-ts-offset)}.ui-ts[data-y="top"]{top: var(--ui-ts-offset)}.ui-ts[data-x="right"]{right: var(--ui-ts-offset)}.ui-ts[data-x="left"]{left: var(--ui-ts-offset)}.ui-ts[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-ts-offset), env(safe-area-inset-bottom))}.ui-ts__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-ts__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-ts-ease), opacity 320ms ease, height 380ms var(--ui-ts-ease)}.ui-ts[data-y="bottom"] .ui-ts__toast{bottom: 0;transform-origin: 50% 0}.ui-ts[data-y="top"] .ui-ts__toast{top: 0;transform-origin: 50% 100%}.ui-ts__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-ts-ease), opacity 260ms ease, height 380ms var(--ui-ts-ease)}.ui-ts__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-ts__toast[data-swiping]{cursor: grabbing}.ui-ts__card{position: relative;height: 100%;overflow: hidden;border-radius: 14px;background: var(--ui-ts-card);box-shadow: var(--ui-ts-shadow)}.ui-ts__toast:focus-visible .ui-ts__card{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts__content{display: flex;align-items: flex-start;gap: 10px;padding: 14px;transition: opacity 260ms ease}.ui-ts__content[data-action]{padding-right: 10px}.ui-ts__toast[data-behind] .ui-ts__content, .ui-ts__toast[data-behind] .ui-ts__timer{opacity: 0}.ui-ts__text{position: relative;flex: 1;min-width: 0}.ui-ts__title{color: var(--ui-ts-ink);font-weight: 500;line-height: 20px;overflow-wrap: anywhere}.ui-ts__desc{margin-top: 1px;font-size: 13px;line-height: 18px;color: var(--ui-ts-muted);overflow-wrap: anywhere}.ui-ts__copy[data-changed]{animation: ui-ts-text-in 300ms var(--ui-ts-ease) both}.ui-ts__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-ts-text-out 220ms ease both}.ui-ts__icon{display: grid;place-items: center;flex: none;width: 20px;height: 20px;color: var(--ui-ts-muted);transition: color 300ms ease}.ui-ts__icon[data-type="success"]{color: var(--ui-ts-success)}.ui-ts__icon[data-type="error"]{color: var(--ui-ts-danger)}.ui-ts__icon[data-type="info"]{color: var(--ui-ts-ink)}.ui-ts__icon[data-type="custom"] > *{width: 18px;height: 18px}.ui-ts__status{width: 18px;height: 18px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-ts__icon[data-type="success"] .ui-ts__status, .ui-ts__icon[data-type="error"] .ui-ts__status{animation: ui-ts-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-ts__spin{transform-box: fill-box;transform-origin: center;animation: ui-ts-spin 760ms linear infinite;animation-play-state: paused}.ui-ts__icon[data-type="loading"] .ui-ts__spin{animation-play-state: running}.ui-ts__ring{stroke-dasharray: 1 0;stroke-opacity: 0.28;transition: stroke-dasharray 560ms var(--ui-ts-ease), stroke-opacity 360ms ease}.ui-ts__icon[data-type="loading"] .ui-ts__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-ts__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-ts__info{opacity: 0;transition: opacity 240ms ease}.ui-ts__icon[data-type="success"] .ui-ts__check, .ui-ts__icon[data-type="error"] .ui-ts__x1, .ui-ts__icon[data-type="error"] .ui-ts__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-ts-draw 340ms var(--ui-ts-ease) 160ms both}.ui-ts__icon[data-type="error"] .ui-ts__x2{animation-delay: 260ms}.ui-ts__icon[data-type="info"] .ui-ts__info{opacity: 1}.ui-ts__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 8px;background: var(--ui-ts-button);font-size: 12.5px;font-weight: 500;color: var(--ui-ts-ink);white-space: nowrap;transition: background-color 160ms ease}.ui-ts__action:hover{background: var(--ui-ts-button-hover)}.ui-ts__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-ts-card);box-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 3px rgba(0, 0, 0, 0.08);color: var(--ui-ts-muted);opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-ts-ease), color 160ms ease}.ui-ts__close::before{content: "";position: absolute;inset: -6px}.ui-ts__close:hover{color: var(--ui-ts-ink)}.ui-ts__toast:not([data-behind]):hover .ui-ts__close, .ui-ts__toast:not([data-behind]):focus-within .ui-ts__close{opacity: 1;transform: none}.ui-ts__glyph{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round}.ui-ts__timer{position: absolute;left: 14px;right: 14px;bottom: 0;height: 1px;background: var(--ui-ts-hairline);transform-origin: left;animation-name: ui-ts-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-ts__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-ts-spin{to{transform: rotate(360deg)}}@keyframes ui-ts-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-ts-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-ts-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-ts-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-ts-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@media (max-width: 600px){.ui-ts, .ui-ts[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-ts[data-y="bottom"]{bottom: 12px}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-ts[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-ts__toast:not([data-behind]) .ui-ts__close{opacity: 1;transform: none}.ui-ts__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-ts__close::before{inset: -8px}.ui-ts__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px;border-radius: 10px;font-size: 13px}}@media (prefers-reduced-motion: reduce){.ui-ts *:not(.ui-ts__spin):not(.ui-ts__timer), .ui-ts *::before, .ui-ts *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ts{--ui-ts-card: #19191b;--ui-ts-line: #2a2a2e;--ui-ts-ink: #ededed;--ui-ts-text: #c8c8cc;--ui-ts-muted: #8b8b92;--ui-ts-faint: #5c5c63;--ui-ts-button: #26262a;--ui-ts-button-hover: #2e2e33;--ui-ts-hairline: rgba(255, 255, 255, 0.16);--ui-ts-success: #4cc38a;--ui-ts-danger: #ff6369;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.3), 0 10px 28px -6px rgba(0, 0, 0, 0.5);--ui-ts-focus: rgba(255, 255, 255, 0.3)}`;
function Qc({
  faqs: e3,
  defaultOpen: t5 = 0
}) {
  let [n7, r4] = (0, b.useState)(t5);
  return (0, A.jsx)(`div`, {
    className: `faq__list`,
    children: e3.map((e4, t6) => {
      let i3 = n7 === t6, a3 = `faq-a-${t6}`;
      return (0, A.jsxs)(`div`, {
        className: `faq__item`,
        "data-open": i3 || void 0,
        children: [(0, A.jsxs)(`button`, {
          className: `faq__q`,
          "aria-expanded": i3,
          "aria-controls": a3,
          onClick: () => r4(i3 ? null : t6),
          children: [e4.q, (0, A.jsx)(j, {
            icon: Fi,
            size: 16
          })]
        }), (0, A.jsx)(`div`, {
          className: `faq__panel`,
          id: a3,
          inert: !i3,
          children: (0, A.jsx)(`div`, {
            children: (0, A.jsx)(`p`, {
              className: `faq__a`,
              children: e4.a
            })
          })
        })]
      }, e4.q);
    })
  });
}
var $c = `M38 0H176Q196 0 204 14L218 30Q224 38 246 38H562Q600 38 600 76V462Q600 500 562 500H38Q0 500 0 462V38Q0 0 38 0Z`;
var el = [78, 180, 140, 175, 126, 168, 110];
function tl({
  className: e3,
  label: t5 = `Blue folder holding three documents behind a frosted front pocket`
}) {
  let n7 = `ui-fd` + (0, b.useId)().replace(/[^a-zA-Z0-9_-]/g, ``);
  return (0, A.jsxs)(`div`, {
    className: [`ui-fd`, e3].filter(Boolean).join(` `),
    role: `img`,
    "aria-label": t5,
    children: [(0, A.jsx)(`style`, {
      href: `ui-glass-folder`,
      precedence: `default`,
      children: nl
    }), (0, A.jsxs)(`div`, {
      className: `ui-fd-icon`,
      "aria-hidden": `true`,
      children: [(0, A.jsxs)(`svg`, {
        className: `ui-fd-layer ui-fd-back`,
        viewBox: `0 0 600 500`,
        children: [(0, A.jsx)(`defs`, {
          children: (0, A.jsxs)(`filter`, {
            id: `${n7}-hl`,
            x: `-10%`,
            y: `-10%`,
            width: `120%`,
            height: `120%`,
            children: [(0, A.jsx)(`feGaussianBlur`, {
              in: `SourceAlpha`,
              stdDeviation: `4`,
              result: `blur`
            }), (0, A.jsx)(`feOffset`, {
              in: `blur`,
              dy: `3`,
              result: `offset`
            }), (0, A.jsx)(`feComposite`, {
              in: `blur`,
              in2: `offset`,
              operator: `arithmetic`,
              k2: `1`,
              k3: `-1`,
              result: `diff`
            }), (0, A.jsx)(`feFlood`, {
              floodColor: `#fff`,
              floodOpacity: `0.65`
            }), (0, A.jsx)(`feComposite`, {
              in2: `diff`,
              operator: `in`,
              result: `light`
            }), (0, A.jsx)(`feComposite`, {
              in: `light`,
              in2: `SourceAlpha`,
              operator: `in`
            })]
          })
        }), (0, A.jsx)(`path`, {
          className: `ui-fd-back-fill`,
          d: $c,
          fill: `#5bb7ea`
        }), (0, A.jsx)(`path`, {
          d: $c,
          fill: `#000`,
          filter: `url(#${n7}-hl)`
        })]
      }), (0, A.jsxs)(`svg`, {
        className: `ui-fd-layer`,
        viewBox: `0 0 600 500`,
        children: [(0, A.jsxs)(`defs`, {
          children: [(0, A.jsxs)(`linearGradient`, {
            id: `${n7}-paper`,
            x1: `0`,
            y1: `0`,
            x2: `0`,
            y2: `1`,
            children: [(0, A.jsx)(`stop`, {
              className: `ui-fd-paper-top`,
              offset: `0%`,
              stopColor: `#fff`
            }), (0, A.jsx)(`stop`, {
              className: `ui-fd-paper-bottom`,
              offset: `100%`,
              stopColor: `#eaf2f8`
            })]
          }), (0, A.jsxs)(`symbol`, {
            id: `${n7}-doc`,
            overflow: `visible`,
            children: [(0, A.jsx)(`rect`, {
              className: `ui-fd-paper`,
              x: `0.6`,
              y: `0.6`,
              width: `278.8`,
              height: `348.8`,
              rx: `19.4`,
              fill: `url(#${n7}-paper)`,
              stroke: `rgba(0,0,0,0.12)`,
              strokeWidth: `1.2`
            }), el.map((e4, t6) => (0, A.jsx)(`rect`, {
              className: `ui-fd-line`,
              x: `30`,
              y: 87 + t6 * 28,
              width: e4,
              height: `9`,
              rx: `4.5`,
              fill: `rgba(0,0,0,0.12)`
            }, t6))]
          })]
        }), (0, A.jsx)(`use`, {
          className: `ui-fd-doc ui-fd-doc--left`,
          href: `#${n7}-doc`
        }), (0, A.jsx)(`use`, {
          className: `ui-fd-doc ui-fd-doc--right`,
          href: `#${n7}-doc`
        }), (0, A.jsx)(`use`, {
          className: `ui-fd-doc ui-fd-doc--middle`,
          href: `#${n7}-doc`
        })]
      }), (0, A.jsx)(`div`, {
        className: `ui-fd-front`
      })]
    })]
  });
}
var nl = `.ui-fd{--ui-fd-ease: cubic-bezier(0.2, 0.85, 0.25, 1);position: relative;width: 100%;aspect-ratio: 3 / 2;overflow: hidden;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif}.ui-fd-icon{position: absolute;left: 50%;top: 50%;width: 40%;aspect-ratio: 6 / 5;container-type: inline-size;perspective: 220cqw;perspective-origin: 50% 60%;transform: translate(-50%, -48%);transition: transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover{transform: translate(-50%, -48%) scale(1.03)}.ui-fd-layer{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible}.ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(60, 130, 180, 0.28)) drop-shadow(0 1.3cqw 2cqw rgba(60, 130, 180, 0.16)) drop-shadow(0 0.3cqw 0.7cqw rgba(60, 130, 180, 0.1))}.ui-fd-doc{transform-box: fill-box;transform-origin: center;filter: drop-shadow(0 3px 4px rgba(0, 30, 60, 0.18));transition: transform 0.55s var(--ui-fd-ease)}.ui-fd-doc--left{transform: translate(40px, 80px) rotate(6deg)}.ui-fd-doc--right{transform: translate(280px, 80px) rotate(6deg)}.ui-fd-doc--middle{transform: translate(160px, 66px) rotate(-4deg)}.ui-fd-icon:hover .ui-fd-doc--left{transform: translate(32px, 70px) rotate(9deg)}.ui-fd-icon:hover .ui-fd-doc--right{transform: translate(286px, 76px) rotate(5deg)}.ui-fd-icon:hover .ui-fd-doc--middle{transform: translate(166px, 52px) rotate(-7deg)}.ui-fd-front{position: absolute;inset: 21.6% 0 0;border-radius: 6.333cqw;background: linear-gradient(180deg, rgba(0, 40, 75, 0) 74%, rgba(0, 40, 75, 0.28) 100%), linear-gradient(180deg, rgba(132, 214, 248, 0.45) 0%, rgba(69, 170, 220, 0.45) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.3), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.55);-webkit-backdrop-filter: blur(3.3cqw) saturate(1.1);backdrop-filter: blur(3.3cqw) saturate(1.1);transform-origin: 50% 100%;transition: top 0.6s var(--ui-fd-ease), border-radius 0.6s var(--ui-fd-ease), transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover .ui-fd-front{top: 24.8%;border-radius: 3cqw 3cqw 6.333cqw 6.333cqw;transform: translateZ(2.33cqw) rotateX(-9deg)}:where(.dark, [data-theme="dark"]) .ui-fd-back-fill{fill: #3d8fc6}:where(.dark, [data-theme="dark"]) .ui-fd-paper-top{stop-color: #34363c}:where(.dark, [data-theme="dark"]) .ui-fd-paper-bottom{stop-color: #26292f}:where(.dark, [data-theme="dark"]) .ui-fd-paper{stroke: rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-fd-line{fill: rgba(255, 255, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(0, 0, 0, 0.45)) drop-shadow(0 1.3cqw 2cqw rgba(0, 0, 0, 0.3))}:where(.dark, [data-theme="dark"]) .ui-fd-doc{filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.45))}:where(.dark, [data-theme="dark"]) .ui-fd-front{background: linear-gradient(180deg, rgba(0, 20, 40, 0) 70%, rgba(0, 20, 40, 0.4) 100%), linear-gradient(180deg, rgba(100, 190, 235, 0.42) 0%, rgba(45, 130, 190, 0.5) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.14), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.3)}@media (prefers-reduced-motion: reduce){.ui-fd-icon, .ui-fd-doc, .ui-fd-front{transition: none}}`;
var rl = (0, b.lazy)(() => r(() => import("./component-WEwHkvy1-6R7XDT4G.js").then((e3) => ({
  default: e3.IntegrationGrid
})), __vite__mapDeps([231, 3, 2])));
var cl = `claude mcp add --transport http affectui ${`${t3.url}/api/mcp`}`;
var dl = [`agent-run`, `agent-chat`, `evals`, `analytics`, `crm`, `settings-billing`].map((e3) => Di.find((t5) => t5.slug === e3)).filter((e3) => e3 !== void 0);
var gl = (0, b.lazy)(() => r(() => import("./BeforeAfter-XemvtPU0-DVRRBNLS.js").then((e3) => ({
  default: e3.BeforeAfter
})), __vite__mapDeps([313, 1, 2, 3, 261, 314, 315, 47, 40, 72, 108])));
var _l = [{
  label: `Components`,
  to: `/components`,
  icon: zi,
  count: Ti.length,
  text: `Buttons, inputs, cards, chat`
}, {
  label: `Screens`,
  to: `/screens`,
  icon: Li,
  count: Di.length,
  text: `Complete app pages, ready to wire up`
}, {
  label: `Blocks`,
  to: `/blocks`,
  icon: Wi,
  count: Ei.length,
  text: `Whole sections for real products`
}, {
  label: `Illustrations`,
  to: `/illustrations`,
  icon: Ui,
  count: O.length,
  text: `Animated scenes for landing pages`
}, {
  label: `Motion`,
  to: `/motion`,
  icon: Ji,
  count: k.length,
  text: `Text, numbers, transitions, loaders`
}];
var vl = (e3) => [...e3].sort((e4, t5) => Date.parse(t5.added ?? ``) - Date.parse(e4.added ?? ``));
var yl = [{
  q: `What is affectUI?`,
  a: `A library of hand-designed React components, blocks, illustrations and motion effects. Every piece is one file you copy into your project and own from then on.`
}, {
  q: `Do I need Tailwind or another UI library?`,
  a: `No. Each piece only imports from React and brings its own styles, so it works in any React setup \u2013 with or without Tailwind.`
}, {
  q: `How do I install a component?`,
  a: `Copy the file from the site, or install it with the shadcn CLI. Either way you end up with a single TSX file in your project.`
}, {
  q: `Does it work with Claude Code, Cursor or Codex?`,
  a: `Yes. Connect the affectUI MCP server once and your assistant can search every piece, read its docs and add it for you. Without setup, point it at affectui.com/llms.txt \u2013 or use the Copy prompt bar on any page.`
}, {
  q: `Does it work in light and dark mode?`,
  a: `Yes. Every piece follows your theme, and motion respects the reduced-motion setting of your visitors.`
}, {
  q: `What is free and what is Pro?`,
  a: `${Oi.filter((e3) => !e3.pro).length} items are free to copy and keep. Pro unlocks every item with source and all future updates \u2013 you pay once, there is no subscription.`
}, {
  q: `Can I use it in client projects?`,
  a: `Yes. Pro includes a commercial license for unlimited projects, for you and your clients.`
}];
var H = [{
  key: `components`,
  label: `Components`,
  to: `/components`,
  items: [`agent-tree`, `agent-inbox`, `agent-lanes`, `trace-waterfall`, `agent-graph`, `agent-steering`, `autonomy-dial`, `approval-card`, `agent-plan`, `tool-call-card`, `thinking-state`, `ai-answer`, `chat-composer`, `model-picker`, `context-window`, `memory-panel`].map((e3) => Ti.find((t5) => t5.slug === e3)).filter((e3) => e3 !== void 0).slice(0, 6)
}, {
  key: `screens`,
  label: `Screens`,
  to: `/screens`,
  items: vl(Di).slice(0, 4)
}, {
  key: `blocks`,
  label: `Blocks`,
  to: `/blocks`,
  items: vl(Ei).slice(0, 4)
}, {
  key: `illustrations`,
  label: `Illustrations`,
  to: `/illustrations`,
  items: vl(O).slice(0, 4)
}, {
  key: `motion`,
  label: `Motion`,
  to: `/motion`,
  items: vl(k).slice(0, 6)
}].filter((e3) => e3.items.length > 0);
var xl = [`kpi-chart`, `notification-stack`, `chat-composer`, `profile-menu`, `thinking-state`, `setup-guide`, `integration-settings`, `smart-recommendation`, `filter-menu`];
var Sl = [`glass-folder`, `integration-grid`, `empty-calendar`, `layer-stack`, `team-invite`, `enrichment-orbit`, `side-folder`, `ghosted-chat`, `world-map`];
var Cl = (e3, t5) => t5.map((t6) => e3.find((e4) => e4.slug === t6)).filter((e4) => !!e4);
var wl = Cl(Ti, xl);
var Tl = Cl(O, Sl);
var El = wl.flatMap((e3, t5) => Tl[t5] ? [e3, Tl[t5]] : [e3]);
var Dl = Array.from({
  length: 21
}, (e3, t5) => El[t5 % El.length]);
var jl = (e3, t5) => (0, b.lazy)(() => e3().then((e4) => ({
  default: e4[t5]
})));
var Ml = jl(() => r(() => import("./ComponentPage-CfGkuqUP-BUWFCHRW.js"), __vite__mapDeps([316, 1, 2, 317, 3, 314, 315])), `ComponentPage`);
var Nl = jl(() => r(() => import("./PricingPage-BGJTK7yG-AVOIXGB7.js"), __vite__mapDeps([318, 1, 2, 317, 3])), `PricingPage`);
var Pl = jl(() => r(() => import("./DocsPage-Dn22oIr8-ADIHCUCZ.js"), __vite__mapDeps([319, 317, 3, 2, 314])), `DocsPage`);
var Fl = jl(() => r(() => import("./LoginPage-BB75HT7y-2VLQJWUU.js"), __vite__mapDeps([320, 1, 2, 317, 3, 321])), `LoginPage`);
var Il = jl(() => r(() => import("./ContactPage-DorHHgI_-QIGRGW6I.js"), __vite__mapDeps([322, 1, 2, 317, 3, 321])), `ContactPage`);
var Ll = jl(() => r(() => import("./LegalPage-Bm3lx0aM-XON7TY2C.js"), __vite__mapDeps([323, 317, 3, 2])), `LegalPage`);
var Rl = jl(() => r(() => import("./LicensePage-wC-NfGoE-655C62TQ.js"), __vite__mapDeps([324, 317, 3, 2, 323])), `LicensePage`);
var zl = jl(() => r(() => import("./AccountPage-DvJClPAR-ET7BXM6H.js"), __vite__mapDeps([325, 1, 2, 317, 3, 326])), `AccountPage`);
var Bl = jl(() => r(() => import("./PartnerPage-BKenGWHF-G3FE4K3C.js"), __vite__mapDeps([327, 1, 2, 328, 317, 3, 329])), `PartnerPage`);
var Vl = [{
  id: `components`,
  label: `Components`,
  count: Ti.length
}, {
  id: `screens`,
  label: `Screens`,
  count: Di.length
}, {
  id: `blocks`,
  label: `Blocks`,
  count: Ei.length
}, {
  id: `illustrations`,
  label: `Illustrations`,
  count: O.length
}, {
  id: `motion`,
  label: `Motion`,
  count: k.length
}].filter((e3) => e3.count > 0);
var Gl = (0, y.createRoot)(document.getElementById(`root`));
Ds(), void 0;

export {
  i,
  t3 as t,
  r2 as r,
  i2,
  a2 as a,
  r3 as r2,
  Ti,
  Ei,
  O,
  Di,
  k,
  Oi,
  Fi,
  Ii,
  Ri,
  Vi,
  qi,
  Yi,
  Zi,
  Qi,
  j,
  $i,
  M,
  aa,
  N,
  oa,
  sa,
  ha,
  ga,
  Ca,
  I,
  Fa,
  vo,
  To,
  Eo,
  Ao,
  Uo,
  Wo,
  Go,
  R,
  z,
  Ko,
  Jo,
  Zo,
  Qo,
  fs,
  Ns,
  Ps,
  Fs,
  Ls,
  Hs,
  Zs,
  ec,
  tc,
  sc,
  lc,
  hc,
  gc,
  Rc,
  Kc,
  Qc,
  tl
};
