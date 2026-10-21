import {
  init_react_BkAXpnfr,
  n as n2
} from "./chunk-BEJH6NDY.js";
import {
  Fragment,
  jsx,
  jsxs,
  n as n3
} from "./chunk-57INBORX.js";
import {
  init_rolldown_runtime_BpQH8Ho1,
  n,
  t
} from "./chunk-JTXQSSYA.js";

// reconstructed/supabase-CqDuy7ko.jsx
var e = (e2) => `/` + e2;
var t2 = {};
var n4 = function(e2) {
  return e2.pathname.endsWith(`.css`);
};
var r = function(r4, i3, a3) {
  let o2 = Promise.resolve();
  if (i3 && i3.length > 0) {
    let l = function(e2) {
      return Promise.all(e2.map((e3) => Promise.resolve(e3).then((value) => ({
        status: `fulfilled`,
        value
      }), (reason) => ({
        status: `rejected`,
        reason
      }))));
    }, u = function(e2) {
      if (import.meta.resolve) {
        return new URL(import.meta.resolve(e2));
      }
      return new URL(e2, import.meta.url);
    };
    let r5;
    let s3 = document.querySelector(`meta[property=csp-nonce]`);
    let c = s3?.nonce || s3?.getAttribute(`nonce`);
    o2 = l(i3.map((i4) => {
      i4 = e(i4, a3);
      let o3 = u(i4);
      if (o3.href in t2) {
        return;
      }
      t2[o3.href] = true;
      let s4 = n4(o3);
      if (r5 === void 0) {
        r5 = {
          all: /* @__PURE__ */ new Set(),
          styles: /* @__PURE__ */ new Set()
        };
        let e2 = document.getElementsByTagName(`link`);
        for (let t5 = e2.length - 1; t5 >= 0; t5--) {
          let n7 = e2[t5];
          r5.all.add(n7.href);
          if (n7.rel === `stylesheet`) {
            r5.styles.add(n7.href);
          }
        }
      }
      if ((s4 ? r5.styles : r5.all).has(o3.href)) {
        return;
      }
      let l2 = document.createElement(`link`);
      l2.rel = s4 ? `stylesheet` : `modulepreload`;
      if (!s4) {
        l2.as = `script`;
      }
      l2.crossOrigin = ``;
      l2.href = o3.href;
      if (c) {
        l2.setAttribute(`nonce`, c);
      }
      document.head.appendChild(l2);
      if (s4) {
        return new Promise((resolve, reject) => {
          l2.addEventListener(`load`, resolve);
          l2.addEventListener(`error`, () => reject(Error(`Unable to preload CSS for ${o3}`)));
        });
      }
    }).filter((e2) => e2 !== void 0));
  }
  function s2(e2) {
    let t5 = new Event(`vite:preloadError`, {
      cancelable: true
    });
    t5.payload = e2;
    window.dispatchEvent(t5);
    if (!t5.defaultPrevented) {
      throw e2;
    }
  }
  return o2.then((e2) => {
    for (let t5 of e2 || []) {
      if (t5.status === `rejected`) {
        s2(t5.reason);
      }
    }
    return r4().catch(s2);
  });
};
var i = () => r(() => import("./supabaseClient-MZLUyPvg-3SXB75UT.js").then((e2) => e2.supabase), []);
function a() {
  try {
    if (/access_token|refresh_token|[?&]code=|token_hash/.test(window.location.hash + window.location.search)) {
      return true;
    }
    for (let e2 = 0; e2 < localStorage.length; e2++) {
      let t5 = localStorage.key(e2) ?? ``;
      if (t5.startsWith(`sb-`) && t5.endsWith(`-auth-token`)) {
        return true;
      }
    }
  } catch {
    return true;
  }
  return false;
}

// reconstructed/site-D86YA7B9.jsx
var s = {
  googleTagId: `G-KSXWJT5S69`,
  metaPixelId: `1121395016946016`
};
var t3 = {
  name: `affectUI`,
  registry: `@affectui`,
  url: `https://www.affectui.com`,
  tagline: `Agent-ready React UI for AI products \u2013 one file each, no dependencies.`,
  author: {
    name: `Flo`,
    url: `https://x.com/flohoeller`
  },
  contactEmail: `hello@affectui.com`,
  promo: {
    enabled: false,
    code: `AFFECT20`,
    percent: 20,
    delaySeconds: 45,
    hours: 24
  },
  links: {
    pro: `/pricing`,
    github: `https://github.com/flohoeller/affectui`,
    feedback: `#`,
    x: `https://x.com/flohoeller`,
    support: `/contact?topic=support`
  }
};
var n5 = {
  pnpm: `pnpm dlx`,
  npm: `npx`,
  yarn: `yarn dlx`,
  bun: `bunx --bun`
};
var r2 = (e2, r4 = `pnpm`) => `${n5[r4]} shadcn@latest add ${t3.url}/r/${e2}.json`;
var i2 = {
  currency: `USD`,
  individual: 199,
  team: 499,
  teamSeats: 10
};
var a2 = [{
  id: `founder`,
  name: `Founding offer`,
  badge: `Founder price`,
  price: 99,
  until: 25
}, {
  id: `early`,
  name: `Early access`,
  badge: `Early access price`,
  price: 149,
  until: 50
}];

// reconstructed/HugeiconsIcon-C2cDExRS.jsx
init_react_BkAXpnfr();
var t4 = n2();
var n6 = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`
};
var r3 = t4.forwardRef(({
  color = `currentColor`,
  size = 24,
  strokeWidth,
  absoluteStrokeWidth = false,
  className = ``,
  altIcon,
  showAlt = false,
  icon,
  primaryColor,
  secondaryColor,
  disableSecondaryOpacity = false,
  ...rest
}, ref) => {
  let strokeWidth_1 = strokeWidth === void 0 ? void 0 : absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth;
  let g2 = strokeWidth_1 === void 0 ? {} : {
    strokeWidth: strokeWidth_1,
    stroke: `currentColor`
  };
  let _2 = {
    ref,
    ...n6,
    width: size,
    height: size,
    color: primaryColor || color,
    className,
    ...g2,
    ...rest
  };
  let v2 = [...showAlt && altIcon ? altIcon : icon].sort(([, e2], [, t5]) => {
    let n7 = e2.opacity !== void 0;
    if (t5.opacity === void 0) {
      if (n7) {
        return -1;
      }
      return 0;
    }
    return 1;
  }).map(([n7, r4]) => {
    let i3 = r4.opacity !== void 0;
    let opacity = i3 && !disableSecondaryOpacity ? r4.opacity : void 0;
    let o2 = secondaryColor ? {
      ...r4.stroke === void 0 ? {
        fill: i3 ? secondaryColor : primaryColor || color
      } : {
        stroke: i3 ? secondaryColor : primaryColor || color
      }
    } : {};
    return t4.createElement(n7, {
      ...r4,
      ...g2,
      ...o2,
      opacity,
      key: r4.key
    });
  });
  return /* @__PURE__ */ jsx("svg", { ..._2, children: v2 });
});
r3.displayName = `HugeiconsIcon`;

// reconstructed/index-CxCSU7QX.jsx
init_rolldown_runtime_BpQH8Ho1();
init_react_BkAXpnfr();
var __vite__mapDeps = (i3, m2 = __vite__mapDeps, d = m2.f || (m2.f = ["assets/demo-BpwDm3_5.js", "assets/react-BkAXpnfr.js", "assets/rolldown-runtime-BpQH8Ho1.js", "assets/jsx-runtime-CTsRTJUX.js", "assets/demo-CeLlHdJ-.css", "assets/demo.clean-BdsziCoX.js", "assets/demo-Bq86T0RX.js", "assets/demo-w8HemkFL.css", "assets/demo.clean-DQ6MZQcD.js", "assets/demo-CCeL1VNp.js", "assets/demo-UKD1ftz8.css", "assets/demo.clean-DC3N3Pap.js", "assets/demo-crn6hRBF.js", "assets/component-CabyG3jS.js", "assets/demo-s3qRD0hW.css", "assets/demo.clean-BjIF1-j-.js", "assets/demo-Bzg0Jm8m.js", "assets/demo-DeplEzVC.css", "assets/demo.clean-CykqoJC9.js", "assets/demo-Ddb1Dch3.js", "assets/demo-CeS5eV_E.css", "assets/demo.clean-CX0onucT.js", "assets/demo-NvLm8mGU.js", "assets/demo-BT26IZiJ.css", "assets/demo.clean-B3KZIS0J.js", "assets/demo-DtfhNS6P.js", "assets/component-D_NiR_dg.js", "assets/demo-CoGzhDuu.css", "assets/demo.clean-Dkj-1MDj.js", "assets/demo-CZQO5p6C.js", "assets/demo-DA1DNmMV.css", "assets/demo.clean-D4m3L74b.js", "assets/demo-65xDbaC9.js", "assets/demo-B_Ua7zhz.css", "assets/demo.clean-dYQPE1hb.js", "assets/demo-BXlx9pcF.js", "assets/component-CHAr1UD2.js", "assets/demo-CWncpXCS.css", "assets/demo.clean-D3ZXLUIO.js", "assets/demo-Da5-XF-c.js", "assets/component-x-U6EJWL.js", "assets/demo-Be3B1cuN.css", "assets/demo.clean-DkN_5ZQ5.js", "assets/demo-D_fnjW-9.js", "assets/demo-CBYN1eoj.css", "assets/demo.clean-CUpZACNd.js", "assets/demo-DI66HSts.js", "assets/component-MWY_GX0G.js", "assets/demo-BtJ5ReLf.css", "assets/demo.clean-CCr62Jz8.js", "assets/demo-xRyZ19Jc.js", "assets/demo-C0huakYH.css", "assets/demo.clean-CnchuWt9.js", "assets/demo-tcGbF7g2.js", "assets/demo-CEWDYID4.css", "assets/demo.clean-DhS0HlaW.js", "assets/demo-Cde_N0C0.js", "assets/demo-BZTl0vFF.css", "assets/demo.clean-BkpdJDtQ.js", "assets/demo-TTVz3U3f.js", "assets/demo-BiHvyvIV.css", "assets/demo.clean-DgcZN_UD.js", "assets/demo-BlNBUErF.js", "assets/demo-Dn6GavXm.css", "assets/demo.clean-Lan03W3V.js", "assets/demo-BgsJzBTE.js", "assets/demo-DQOONSHb.css", "assets/demo.clean-BmiiHyGl.js", "assets/demo-DgdoHbQS.js", "assets/demo-Ct0hTa3E.css", "assets/demo.clean-DbXcMJMS.js", "assets/demo-DGaVy3XD.js", "assets/component-BpWpTuwn.js", "assets/demo-CZta6kRg.css", "assets/demo.clean-OeBBW_7u.js", "assets/demo-CYhBENQa.js", "assets/demo-DSzFpjk6.css", "assets/demo.clean-DZiTLSj_.js", "assets/demo-CcNPpld_.js", "assets/demo-qHs5QTOL.css", "assets/demo.clean-Cwxrnsci.js", "assets/demo-V6j80N0E.js", "assets/demo-Bdl4gtlY.css", "assets/demo.clean-DNxPbueK.js", "assets/demo-BBMr4ztO.js", "assets/demo-CHxHjtGF.css", "assets/demo.clean-BtR7iQdY.js", "assets/demo-CQRf-Cg5.js", "assets/demo-CtX7DdQf.css", "assets/demo.clean-CjJwmC-8.js", "assets/demo-ik_0XYps.js", "assets/demo-BRb4XxkZ.css", "assets/demo.clean-Vp-K1jMG.js", "assets/demo-BkxWHDVt.js", "assets/component-LyBMd15F.js", "assets/demo-H9tuM7PY.css", "assets/demo.clean-Djfm83dS.js", "assets/demo-Y9Qip8LJ.js", "assets/component-7zQPnK-d.js", "assets/demo-Di_7AkW9.css", "assets/demo.clean-BXz9gUDp.js", "assets/demo-5-hgQYhm.js", "assets/demo-DFvtknob.css", "assets/demo.clean-CPhhQKKr.js", "assets/demo-Dxm1xr9_.js", "assets/demo-CJ4z72Ej.css", "assets/demo.clean-CTC16fNW.js", "assets/demo-BQ61UvP8.js", "assets/component-BZJ0c7rx.js", "assets/demo-43cus7LW.css", "assets/demo.clean-B4-Re8fT.js", "assets/demo-CEgv5bR9.js", "assets/demo-CQoJKBzs.css", "assets/demo.clean-C1W0NbsT.js", "assets/demo-CgV2euur.js", "assets/demo-DaCE-JsF.css", "assets/demo.clean-jqs229XM.js", "assets/demo-C580yDTY.js", "assets/demo-BWPo2vC0.css", "assets/demo.clean-B7cgzOPZ.js", "assets/demo-RSBM-GoA.js", "assets/demo-B_-V1qta.css", "assets/demo.clean-gBQjVTxc.js", "assets/demo-BoVVleq1.js", "assets/demo-Dhul4zoE.css", "assets/demo.clean-SPg51xTG.js", "assets/demo-B1zzQqO2.js", "assets/demo-DZ4DQtKG.css", "assets/demo.clean-DKsx9U9O.js", "assets/demo-d_AV0tPL.js", "assets/demo-CKu0wqnS.css", "assets/demo.clean-Du4BhTGQ.js", "assets/demo-BKqcXOSN.js", "assets/demo-CTTiXRUG.css", "assets/demo.clean-CQ9Mgt2p.js", "assets/demo-9sHHhTyA.js", "assets/demo-CtLeN6GG.css", "assets/demo.clean-DiU4wbPA.js", "assets/demo-CctwMXFR.js", "assets/demo-YJNU2W1Y.css", "assets/demo.clean-DRfoB4wl.js", "assets/demo-DlJqXDIq.js", "assets/demo-DxsbjXIi.css", "assets/demo.clean-1KuFFkG8.js", "assets/demo-BzK_zDAD.js", "assets/component-BDo0fvGw.js", "assets/demo-okgBcVKl.css", "assets/demo.clean-D1uXYCFG.js", "assets/demo-Cb1j7tKz.js", "assets/component-BUgiZiPt.js", "assets/demo-BtrsrzeH.css", "assets/demo.clean-DgcWwiZH.js", "assets/demo-Ed3S7lvS.js", "assets/demo-Dfjh_Nog.css", "assets/demo.clean-CnpU6JZL.js", "assets/demo-BOLhhfTT.js", "assets/demo-CBnDBA1e.css", "assets/demo.clean-BYDkomFg.js", "assets/demo-qJGH2Gjh.js", "assets/component-jpqc9dJC.js", "assets/demo-BFeSDQCw.css", "assets/demo.clean-DWvTXnKE.js", "assets/demo-sabUvR7r.js", "assets/component-CQGDXGUk.js", "assets/demo-Bwwy34Kj.css", "assets/demo.clean-CXxA6VEx.js", "assets/demo-D2Q4vYDw.js", "assets/demo-Bd8TQevV.css", "assets/demo.clean-Bfu_rP8L.js", "assets/demo-Cv538yeC.js", "assets/demo-n8KZiTF2.css", "assets/demo.clean-CtdFgWee.js", "assets/demo-C2oxSuna.js", "assets/component-CA_4LgO0.js", "assets/demo-DE2b60zA.css", "assets/demo.clean-q2ZwGlZu.js", "assets/demo-VWNU0E7Q.js", "assets/demo-D2BY6rOC.css", "assets/demo.clean-Cim7onyI.js", "assets/demo-izlk0-DS.js", "assets/component-DxL4SVuQ.js", "assets/demo-CzkiUT9-.css", "assets/demo.clean-BjDeSoUM.js", "assets/demo-BhVeTwOS.js", "assets/demo-DsiVsikb.css", "assets/demo.clean-B-ER_Luk.js", "assets/demo-Dx1zk5ox.js", "assets/demo-4qf089Hm.css", "assets/demo-CZJ2T4nU.js", "assets/demo-lIACZQBf.css", "assets/demo-BiwOrW2x.js", "assets/demo-CT9UQG8Q.css", "assets/demo-rS721rJa.js", "assets/demo-CzHqDxM2.css", "assets/demo-D1arByOa.js", "assets/demo-X4nE4hhv.css", "assets/demo-mNpCRsfS.js", "assets/demo-C0IXn0BJ.css", "assets/demo-Bp-um2Aj.js", "assets/demo-C2bhkcHT.css", "assets/demo-Ytbb4Swi.js", "assets/demo-CW0kyWxi.css", "assets/demo-DWd1ZKX0.js", "assets/demo-mBBe7Cka.css", "assets/demo-BbZ2lqOk.js", "assets/demo--23xacFf.css", "assets/demo-DrrNKEd7.js", "assets/demo-CqFNiKP9.css", "assets/demo-BtlH6dH8.js", "assets/demo-DhPmofCn.css", "assets/demo-C2jfF4UB.js", "assets/demo-C7lGzSvq.css", "assets/demo-MXjIQshC.js", "assets/demo-C84Rtc7Q.css", "assets/demo-CU49Fdlm.js", "assets/demo-LIDC0AW0.css", "assets/demo-DrDu-VuE.js", "assets/demo-Df5bkK6U.css", "assets/demo-Cm2FVMWj.js", "assets/demo-BpX_rAfy.css", "assets/demo-DlhpiUWr.js", "assets/demo-AoQgzkmh.css", "assets/demo-Cm8kSHcX.js", "assets/demo-yLglQlH0.css", "assets/demo-CfD9afHB.js", "assets/demo-BTfB4k9k.css", "assets/demo-B_Bc7Zla.js", "assets/demo-CELo7ePn.css", "assets/demo-CL_ySX-H.js", "assets/demo-C8RkVAZ5.css", "assets/demo-BABw5NIJ.js", "assets/component-WEwHkvy1.js", "assets/demo-DX6xN4by.css", "assets/demo-KQRMxKWn.js", "assets/demo-CPGvV7yx.css", "assets/demo-BTBcqeeL.js", "assets/demo-CG8W-oPE.css", "assets/demo-CkkSZhS9.js", "assets/demo-DT0UlCV-.css", "assets/demo-OZULToi6.js", "assets/demo-bTIz8Fba.css", "assets/demo-D-FldunI.js", "assets/demo-CbCO9TS3.css", "assets/demo-Cwdm4ytX.js", "assets/demo-BBj9PGLg.css", "assets/demo-CmYYw1tl.js", "assets/demo-BsWSSdSp.css", "assets/demo-ClUxDNiT.js", "assets/demo-CrzkFw__.css", "assets/demo-CVKU8Uzh.js", "assets/demo-D3V8sr_3.css", "assets/demo-cWsVSmbI.js", "assets/demo-BeWyOZSS.css", "assets/demo-B3RzKcXL.js", "assets/demo-C3146Vn5.css", "assets/demo-Q0wmIwEm.js", "assets/demo-Bouwhv8z.css", "assets/demo-BWWWdWrI.js", "assets/PresentationBarChart01Icon-C8MfgXhe.js", "assets/component-Dor7H1ln.js", "assets/component-qs8CseUl.js", "assets/HugeiconsIcon-C2cDExRS.js", "assets/ChartColumnIcon-CdOeU6Br.js", "assets/Database01Icon-DrAaO4oe.js", "assets/Globe02Icon-jOAiZzRC.js", "assets/Table01Icon-CpK0cmMJ.js", "assets/UserAdd01Icon-CeNWxiQ5.js", "assets/Analytics01Icon-DzRjULbW.js", "assets/BubbleChatIcon-pbmBjpVO.js", "assets/Calendar03Icon-DcAo2VXN.js", "assets/WorkflowSquare03Icon-KUZ5l40I.js", "assets/Delete02Icon-CsyBlwAn.js", "assets/Dollar01Icon-CKgdstwc.js", "assets/Home01Icon-CtlfDZqB.js", "assets/MoreHorizontalIcon-CBUy2huH.js", "assets/ShoppingBag01Icon-fOOVs0Uq.js", "assets/Target02Icon-B_T0iwXf.js", "assets/demo-eQInHe1Q.js", "assets/Copy01Icon-DrPxamgF.js", "assets/Mail01Icon-qGLuNJQs.js", "assets/RepeatIcon-CJJ1C8N9.js", "assets/demo-iLo3CJ8-.js", "assets/Download04Icon-C2-aGxK5.js", "assets/UserMultipleIcon-BFkjj3cH.js", "assets/demo-DwSEqjaS.js", "assets/demo-C1U6NI7B.js", "assets/demo-Dj5g1Sf_.js", "assets/demo-De2n08Zl.js", "assets/Link01Icon-DMZyIG_F.js", "assets/demo-IfuY4zjH.js", "assets/demo-CUdsyn6m.js", "assets/UserMultiple02Icon-CmkUO2wo.js", "assets/demo-d_U4qihD.js", "assets/demo-CRG7NKBx.js", "assets/demo-CBRMIUgj.js", "assets/demo-4lbOOBUM.js", "assets/demo-Ye53Zfy1.js", "assets/demo-216Xdj1g.css", "assets/demo-B-TgH1P-.js", "assets/demo-Cq9Jvjc6.css", "assets/demo-Dcdtba_V.js", "assets/demo-DO5raLtj.css", "assets/demo-S1hMjDCH.js", "assets/demo-KXXiA1pF.css", "assets/demo-0IZOAjVo.js", "assets/demo-Cqs4NNzb.css", "assets/demo-Cc3_N5Az.js", "assets/demo-Bk7Us5KG.css", "assets/demo-BEzbCisV.js", "assets/demo-Cd_tWGts.css", "assets/demo-BijqyLh8.js", "assets/demo-0-qyOf6s.css", "assets/lib-D_jy-Mlc.js", "assets/BeforeAfter-XemvtPU0.js", "assets/ArrowRight01Icon-JBN5MFu9.js", "assets/RefreshIcon-fjVu6A90.js", "assets/ComponentPage-CfGkuqUP.js", "assets/site-D86YA7B9.js", "assets/PricingPage-BGJTK7yG.js", "assets/DocsPage-Dn22oIr8.js", "assets/LoginPage-BB75HT7y.js", "assets/ArrowLeft01Icon-qNK3q5ZR.js", "assets/ContactPage-DorHHgI_.js", "assets/LegalPage-Bm3lx0aM.js", "assets/LicensePage-wC-NfGoE.js", "assets/AccountPage-DvJClPAR.js", "assets/supabaseClient-MZLUyPvg.js", "assets/PartnerPage-BKenGWHF.js", "assets/supabase-CqDuy7ko.js", "assets/PartnerPage-B8QmlA8_.css"])) => i3.map((i4) => d[i4]).filter((asset) => asset.endsWith(".css"));
(() => {
  let relList = document.createElement(`link`).relList;
  if (relList && relList.supports && relList.supports(`modulepreload`)) {
    return;
  }
  for (let e2 of document.querySelectorAll(`link[rel="modulepreload"]`)) {
    n7(e2);
  }
  new MutationObserver((e2) => {
    for (let t6 of e2) {
      if (t6.type === `childList`) {
        for (let e3 of t6.addedNodes) {
          if (e3.tagName === `LINK` && e3.rel === `modulepreload`) {
            n7(e3);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t5(e2) {
    let t6 = {};
    if (e2.integrity) {
      t6.integrity = e2.integrity;
    }
    if (e2.referrerPolicy) {
      t6.referrerPolicy = e2.referrerPolicy;
    }
    t6.credentials = e2.crossOrigin === `use-credentials` ? `include` : e2.crossOrigin === `anonymous` ? `omit` : `same-origin`;
    return t6;
  }
  function n7(e2) {
    if (e2.ep) {
      return;
    }
    e2.ep = true;
    let n8 = t5(e2);
    fetch(e2.href, n8);
  }
})();
var m = t((e2) => {
  function t5(e3, t6) {
    let e_length = e3.length;
    e3.push(t6);
    a: while (e_length > 0) {
      const r5 = e_length - 1 >>> 1;
      const a4 = e3[r5];
      if (i3(a4, t6) > 0) {
        e3[r5] = t6;
        e3[e_length] = a4;
        e_length = r5;
      } else {
        break a;
      }
    }
  }
  function n7(e3) {
    if (e3.length === 0) {
      return null;
    }
    return e3[0];
  }
  function r4(e3) {
    if (e3.length === 0) {
      return null;
    }
    const t6 = e3[0];
    const n8 = e3.pop();
    if (n8 !== t6) {
      e3[0] = n8;
      a: for (let r5 = 0, a4 = e3.length, o3 = a4 >>> 1; r5 < o3; ) {
        const s3 = 2 * (r5 + 1) - 1;
        const c2 = e3[s3];
        const l2 = s3 + 1;
        const u2 = e3[l2];
        if (i3(c2, n8) < 0) {
          if (l2 < a4 && i3(u2, c2) < 0) {
            e3[r5] = u2;
            e3[l2] = n8;
            r5 = l2;
          } else {
            e3[r5] = c2;
            e3[s3] = n8;
            r5 = s3;
          }
        } else if (l2 < a4 && i3(u2, n8) < 0) {
          e3[r5] = u2;
          e3[l2] = n8;
          r5 = l2;
        } else {
          break a;
        }
      }
    }
    return t6;
  }
  function i3(e3, t6) {
    const n8 = e3.sortIndex - t6.sortIndex;
    if (n8 === 0) {
      return e3.id - t6.id;
    }
    return n8;
  }
  e2.unstable_now = void 0;
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a3 = performance;
    e2.unstable_now = function() {
      return a3.now();
    };
  } else {
    var o2 = Date;
    var s2 = o2.now();
    e2.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c = [];
  var l = [];
  var u = 1;
  var d = null;
  var f = 3;
  var p = false;
  var m2 = false;
  var h2 = false;
  var g2 = false;
  var _2 = typeof setTimeout == `function` ? setTimeout : null;
  var v2 = typeof clearTimeout == `function` ? clearTimeout : null;
  var y2 = typeof setImmediate < `u` ? setImmediate : null;
  function b2(e3) {
    for (let i4 = n7(l); i4 !== null; ) {
      if (i4.callback === null) {
        r4(l);
      } else if (i4.startTime <= e3) {
        r4(l);
        i4.sortIndex = i4.expirationTime;
        t5(c, i4);
      } else {
        break;
      }
      i4 = n7(l);
    }
  }
  function ee(e3) {
    h2 = false;
    b2(e3);
    if (!m2) {
      if (n7(c) !== null) {
        m2 = true;
        if (!x) {
          x = true;
          ae();
        }
      } else {
        const t6 = n7(l);
        if (t6 !== null) {
          ce(ee, t6.startTime - e3);
        }
      }
    }
  }
  var x = false;
  var te = -1;
  var ne = 5;
  var re = -1;
  function ie() {
    if (g2) {
      return true;
    }
    return !(e2.unstable_now() - re < ne);
  }
  function S() {
    g2 = false;
    if (x) {
      let t6 = e2.unstable_now();
      re = t6;
      let i4 = true;
      try {
        a: {
          m2 = false;
          if (h2) {
            h2 = false;
            v2(te);
            te = -1;
          }
          p = true;
          const a4 = f;
          try {
            b: {
              b2(t6);
              for (d = n7(c); d !== null && !(d.expirationTime > t6 && ie()); ) {
                const o3 = d.callback;
                if (typeof o3 == `function`) {
                  d.callback = null;
                  f = d.priorityLevel;
                  const s3 = o3(d.expirationTime <= t6);
                  t6 = e2.unstable_now();
                  if (typeof s3 == `function`) {
                    d.callback = s3;
                    b2(t6);
                    i4 = true;
                    break b;
                  }
                  if (d === n7(c)) {
                    r4(c);
                  }
                  b2(t6);
                } else {
                  r4(c);
                }
                d = n7(c);
              }
              if (d !== null) {
                i4 = true;
              } else {
                const u2 = n7(l);
                if (u2 !== null) {
                  ce(ee, u2.startTime - t6);
                }
                i4 = false;
              }
            }
            break a;
          } finally {
            d = null;
            f = a4;
            p = false;
          }
          i4 = void 0;
        }
      } finally {
        if (i4) {
          ae();
        } else {
          x = false;
        }
      }
    }
  }
  var ae;
  if (typeof y2 == `function`) {
    ae = function() {
      y2(S);
    };
  } else if (typeof MessageChannel < `u`) {
    var oe = new MessageChannel();
    var se = oe.port2;
    oe.port1.onmessage = S;
    ae = function() {
      se.postMessage(null);
    };
  } else {
    ae = function() {
      _2(S, 0);
    };
  }
  function ce(t6, n8) {
    te = _2(function() {
      t6(e2.unstable_now());
    }, n8);
  }
  e2.unstable_IdlePriority = 5;
  e2.unstable_ImmediatePriority = 1;
  e2.unstable_LowPriority = 4;
  e2.unstable_NormalPriority = 3;
  e2.unstable_Profiling = null;
  e2.unstable_UserBlockingPriority = 2;
  e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  };
  e2.unstable_forceFrameRate = function(e3) {
    if (e3 < 0 || e3 > 125) {
      console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`);
    } else {
      ne = e3 > 0 ? Math.floor(1e3 / e3) : 5;
    }
  };
  e2.unstable_getCurrentPriorityLevel = function() {
    return f;
  };
  e2.unstable_next = function(e3) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t6 = 3;
        break;
      default:
        t6 = f;
    }
    const n8 = f;
    f = t6;
    try {
      return e3();
    } finally {
      f = n8;
    }
  };
  e2.unstable_requestPaint = function() {
    g2 = true;
  };
  e2.unstable_runWithPriority = function(e3, t6) {
    switch (e3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e3 = 3;
    }
    const n8 = f;
    f = e3;
    try {
      return t6();
    } finally {
      f = n8;
    }
  };
  e2.unstable_scheduleCallback = function(priorityLevel, callback, startTime) {
    const o3 = e2.unstable_now();
    if (typeof startTime == `object` && startTime) {
      startTime = startTime.delay;
      startTime = typeof startTime == `number` && startTime > 0 ? o3 + startTime : o3;
    } else {
      startTime = o3;
    }
    switch (priorityLevel) {
      case 1:
        var expirationTime = -1;
        break;
      case 2:
        expirationTime = 250;
        break;
      case 5:
        expirationTime = 1073741823;
        break;
      case 4:
        expirationTime = 1e4;
        break;
      default:
        expirationTime = 5e3;
    }
    expirationTime = startTime + expirationTime;
    priorityLevel = {
      id: u++,
      callback,
      priorityLevel,
      startTime,
      expirationTime,
      sortIndex: -1
    };
    if (startTime > o3) {
      priorityLevel.sortIndex = startTime;
      t5(l, priorityLevel);
      if (n7(c) === null && priorityLevel === n7(l)) {
        if (h2) {
          v2(te);
          te = -1;
        } else {
          h2 = true;
        }
        ce(ee, startTime - o3);
      }
    } else {
      priorityLevel.sortIndex = expirationTime;
      t5(c, priorityLevel);
      if (!(m2 || p)) {
        m2 = true;
        if (!x) {
          x = true;
          ae();
        }
      }
    }
    return priorityLevel;
  };
  e2.unstable_shouldYield = ie;
  e2.unstable_wrapCallback = function(e3) {
    const t6 = f;
    return function() {
      const n8 = f;
      f = t6;
      try {
        return e3.apply(this, arguments);
      } finally {
        f = n8;
      }
    };
  };
});
var h = t((e2, t5) => {
  t5.exports = m();
});
var g = t((e2) => {
  var t5 = n2();
  function r4(e3) {
    let t6 = `https://react.dev/errors/` + e3;
    if (arguments.length > 1) {
      t6 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (let n7 = 2; n7 < arguments.length; n7++) {
        t6 += `&args[]=` + encodeURIComponent(arguments[n7]);
      }
    }
    return `Minified React error #` + e3 + `; visit ` + t6 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
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
  };
  var o2 = /* @__PURE__ */ Symbol.for(`react.portal`);
  var s2 = /* @__PURE__ */ Symbol.for(`react.recoverable`);
  var c = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
  function l(children, containerInfo, implementation, r5 = null) {
    return {
      $$typeof: o2,
      key: r5 == null ? null : r5 === c ? c : `` + r5,
      children,
      containerInfo,
      implementation
    };
  }
  var t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = t5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e3, crossOrigin) {
    if (e3 === `font`) {
      return ``;
    }
    if (typeof crossOrigin == `string`) {
      if (crossOrigin === `use-credentials`) {
        return crossOrigin;
      }
      return ``;
    }
  }
  e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a3;
  e2.browser = function(_reason) {
    return {
      $$typeof: s2,
      _reason
    };
  };
  e2.createPortal = function(e3, t6, n7 = null) {
    if (!t6 || t6.nodeType !== 1 && t6.nodeType !== 9 && t6.nodeType !== 11) {
      throw Error(r4(299));
    }
    return l(e3, t6, null, n7);
  };
  e2.flushSync = function(e3) {
    const t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const n7 = a3.p;
    try {
      t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      a3.p = 2;
      if (e3) {
        return e3();
      }
    } finally {
      t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
      a3.p = n7;
      a3.d.f();
    }
  };
  e2.preconnect = function(e3, t6) {
    if (typeof e3 == `string`) {
      if (t6) {
        t6 = t6.crossOrigin;
        t6 = typeof t6 == `string` ? t6 === `use-credentials` ? t6 : `` : void 0;
      } else {
        t6 = null;
      }
      a3.d.C(e3, t6);
    }
  };
  e2.prefetchDNS = function(e3) {
    if (typeof e3 == `string`) {
      a3.d.D(e3);
    }
  };
  e2.preinit = function(e3, t6) {
    if (typeof e3 == `string` && t6 && typeof t6.as == `string`) {
      const n7 = t6.as;
      const r5 = d(n7, t6.crossOrigin);
      const integrity = typeof t6.integrity == `string` ? t6.integrity : void 0;
      const fetchPriority = typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0;
      if (n7 === `style`) {
        a3.d.S(e3, typeof t6.precedence == `string` ? t6.precedence : void 0, {
          crossOrigin: r5,
          integrity,
          fetchPriority
        });
      } else if (n7 === `script`) {
        a3.d.X(e3, {
          crossOrigin: r5,
          integrity,
          fetchPriority,
          nonce: typeof t6.nonce == `string` ? t6.nonce : void 0
        });
      }
    }
  };
  e2.preinitModule = function(e3, t6) {
    if (typeof e3 == `string`) {
      if (typeof t6 == `object` && t6) {
        if (t6.as == null || t6.as === `script`) {
          const n7 = d(t6.as, t6.crossOrigin);
          a3.d.M(e3, {
            crossOrigin: n7,
            integrity: typeof t6.integrity == `string` ? t6.integrity : void 0,
            nonce: typeof t6.nonce == `string` ? t6.nonce : void 0,
            fetchPriority: typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0
          });
        }
      } else {
        t6 ?? a3.d.M(e3);
      }
    }
  };
  e2.preload = function(e3, t6) {
    if (typeof e3 == `string` && typeof t6 == `object` && t6 && typeof t6.as == `string`) {
      const n7 = t6.as;
      const r5 = d(n7, t6.crossOrigin);
      a3.d.L(e3, n7, {
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
  };
  e2.preloadModule = function(e3, t6) {
    if (typeof e3 == `string`) {
      if (t6) {
        const n7 = d(t6.as, t6.crossOrigin);
        a3.d.m(e3, {
          as: typeof t6.as == `string` && t6.as !== `script` ? t6.as : void 0,
          crossOrigin: n7,
          integrity: typeof t6.integrity == `string` ? t6.integrity : void 0,
          nonce: typeof t6.nonce == `string` ? t6.nonce : void 0,
          fetchPriority: typeof t6.fetchPriority == `string` ? t6.fetchPriority : void 0
        });
      } else {
        a3.d.m(e3);
      }
    }
  };
  e2.requestFormReset = function(e3) {
    a3.d.r(e3);
  };
  e2.unstable_batchedUpdates = function(e3, t6) {
    return e3(t6);
  };
  e2.useFormState = function(e3, t6, n7) {
    return t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useFormState(e3, t6, n7);
  };
  e2.useFormStatus = function() {
    return t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useHostTransitionStatus();
  };
  e2.version = `19.3.0`;
});
var _ = t((e2, t5) => {
  function n7() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n7);
      } catch (error) {
        console.error(error);
      }
    }
  }
  n7();
  t5.exports = g();
});
var v = t((e2) => {
  var t5 = h();
  var r4 = n2();
  var i3 = _();
  function a3(e3) {
    let t6 = `https://react.dev/errors/` + e3;
    if (arguments.length > 1) {
      t6 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (let n7 = 2; n7 < arguments.length; n7++) {
        t6 += `&args[]=` + encodeURIComponent(arguments[n7]);
      }
    }
    return `Minified React error #` + e3 + `; visit ` + t6 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function o2(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
  }
  function s2(e3) {
    let t6 = e3;
    for (let n7 = t6; n7 && !n7.alternate; ) {
      t6 = n7;
      if (t6.flags & 4098) {
        e3 = t6.return;
      }
      n7 = t6.return;
    }
    while (t6.return) {
      t6 = t6.return;
    }
    if (t6.tag === 3) {
      return e3;
    }
    return null;
  }
  function c(e3) {
    if (e3.tag === 13) {
      let t6 = e3.memoizedState;
      if (t6 === null) {
        e3 = e3.alternate;
        if (e3 !== null) {
          t6 = e3.memoizedState;
        }
      }
      if (t6 !== null) {
        return t6.dehydrated;
      }
    }
    return null;
  }
  function l(e3) {
    if (e3.tag === 31) {
      let t6 = e3.memoizedState;
      if (t6 === null) {
        e3 = e3.alternate;
        if (e3 !== null) {
          t6 = e3.memoizedState;
        }
      }
      if (t6 !== null) {
        return t6.dehydrated;
      }
    }
    return null;
  }
  function u(e3) {
    if (s2(e3) !== e3) {
      throw Error(a3(188));
    }
  }
  function d(e__reactInternals) {
    let e_alternate = e__reactInternals.alternate;
    if (!e_alternate) {
      e_alternate = s2(e__reactInternals);
      if (e_alternate === null) {
        throw Error(a3(188));
      }
      if (e_alternate === e__reactInternals) {
        return e__reactInternals;
      }
      return null;
    }
    let n7 = e__reactInternals;
    let r5 = e_alternate;
    while (true) {
      const i4 = n7.return;
      if (i4 === null) {
        break;
      }
      let o3 = i4.alternate;
      if (o3 === null) {
        r5 = i4.return;
        if (r5 !== null) {
          n7 = r5;
          continue;
        }
        break;
      }
      if (i4.child === o3.child) {
        for (o3 = i4.child; o3; ) {
          if (o3 === n7) {
            u(i4);
            return e__reactInternals;
          }
          if (o3 === r5) {
            u(i4);
            return e_alternate;
          }
          o3 = o3.sibling;
        }
        throw Error(a3(188));
      }
      if (n7.return !== r5.return) {
        n7 = i4;
        r5 = o3;
      } else {
        let c2 = false;
        for (var l2 = i4.child; l2; ) {
          if (l2 === n7) {
            c2 = true;
            n7 = i4;
            r5 = o3;
            break;
          }
          if (l2 === r5) {
            c2 = true;
            r5 = i4;
            n7 = o3;
            break;
          }
          l2 = l2.sibling;
        }
        if (!c2) {
          for (l2 = o3.child; l2; ) {
            if (l2 === n7) {
              c2 = true;
              n7 = o3;
              r5 = i4;
              break;
            }
            if (l2 === r5) {
              c2 = true;
              r5 = o3;
              n7 = i4;
              break;
            }
            l2 = l2.sibling;
          }
          if (!c2) {
            throw Error(a3(189));
          }
        }
      }
      if (n7.alternate !== r5) {
        throw Error(a3(190));
      }
    }
    if (n7.tag !== 3) {
      throw Error(a3(188));
    }
    if (n7.stateNode.current === n7) {
      return e__reactInternals;
    }
    return e_alternate;
  }
  function f(e3) {
    let e_tag = e3.tag;
    if (e_tag === 5 || e_tag === 26 || e_tag === 27 || e_tag === 6) {
      return e3;
    }
    for (e3 = e3.child; e3 !== null; ) {
      e_tag = f(e3);
      if (e_tag !== null) {
        return e_tag;
      }
      e3 = e3.sibling;
    }
    return null;
  }
  function p(e3, t6, n7, r5, i4, a4) {
    while (e3 !== null) {
      if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && n7(e3, r5, i4, a4) || (e3.tag !== 22 || e3.memoizedState === null) && (t6 || e3.tag !== 5 && e3.tag !== 27) && p(e3.child, t6, n7, r5, i4, a4)) {
        return true;
      }
      e3 = e3.sibling;
    }
    return false;
  }
  function m2(e3) {
    for (e3 = e3.return; e3 !== null; ) {
      if (e3.tag === 3 || e3.tag === 5 || e3.tag === 27) {
        return e3;
      }
      e3 = e3.return;
    }
    return null;
  }
  function g2(e3) {
    let t6 = false;
    for (e3 = e3.return; e3 !== null && (e3.tag === 4 && (t6 = true), e3.tag !== 3 && e3.tag !== 5 && e3.tag !== 27); ) {
      e3 = e3.return;
    }
    return t6;
  }
  function v2(e3) {
    const t6 = [null, null];
    const n7 = m2(e3);
    if (n7 !== null) {
      y2(t6, e3, n7.child, {
        foundSelf: false
      });
    }
    return t6;
  }
  function y2(e3, t6, n7, r5) {
    while (n7 !== null) {
      if (n7 === t6) {
        r5.foundSelf = true;
      } else if (n7.tag === 5 || n7.tag === 27 || n7.tag === 6) {
        if (r5.foundSelf) {
          e3[1] = n7;
          return true;
        }
        e3[0] = n7;
      } else if ((n7.tag !== 22 || n7.memoizedState === null) && y2(e3, t6, n7.child, r5)) {
        return true;
      }
      n7 = n7.sibling;
    }
    return false;
  }
  function b2(e3) {
    switch (e3.tag) {
      case 5:
      case 27:
      case 6:
        return e3.stateNode;
      case 3:
        return e3.stateNode.containerInfo;
      default:
        throw Error(a3(559));
    }
  }
  var ee = null;
  var x = null;
  function te(e3, t6, n7) {
    return e3 === n7 || e3 === t6 && (ee = e3, true);
  }
  function ne(e3, t6, n7) {
    if (e3 === n7) {
      x = e3;
      return false;
    }
    return e3 === t6 && (x !== null && (ee = e3), true);
  }
  function re(e3) {
    if (e3 === null) {
      return null;
    }
    do {
      e3 = e3 === null ? null : e3.return;
    } while (e3 && e3.tag !== 5 && e3.tag !== 27 && e3.tag !== 3);
    return e3 || null;
  }
  function ie(e3, t6, n7) {
    let r5 = 0;
    for (var i4 = e3; i4; i4 = n7(i4)) {
      r5++;
    }
    i4 = 0;
    for (let a4 = t6; a4; a4 = n7(a4)) {
      i4++;
    }
    while (r5 - i4 > 0) {
      e3 = n7(e3);
      r5--;
    }
    while (i4 - r5 > 0) {
      t6 = n7(t6);
      i4--;
    }
    while (r5--) {
      if (e3 === t6 || t6 !== null && e3 === t6.alternate) {
        return e3;
      }
      e3 = n7(e3);
      t6 = n7(t6);
    }
    return null;
  }
  var Object_assign = Object.assign;
  var ae = /* @__PURE__ */ Symbol.for(`react.element`);
  var oe = /* @__PURE__ */ Symbol.for(`react.transitional.element`);
  var se = /* @__PURE__ */ Symbol.for(`react.portal`);
  var ce = /* @__PURE__ */ Symbol.for(`react.fragment`);
  var le = /* @__PURE__ */ Symbol.for(`react.strict_mode`);
  var ue = /* @__PURE__ */ Symbol.for(`react.profiler`);
  var de = /* @__PURE__ */ Symbol.for(`react.consumer`);
  var fe = /* @__PURE__ */ Symbol.for(`react.context`);
  var pe = /* @__PURE__ */ Symbol.for(`react.forward_ref`);
  var me2 = /* @__PURE__ */ Symbol.for(`react.suspense`);
  var he2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`);
  var C2 = /* @__PURE__ */ Symbol.for(`react.memo`);
  var ge2 = /* @__PURE__ */ Symbol.for(`react.lazy`);
  var _e2 = /* @__PURE__ */ Symbol.for(`react.activity`);
  var ve2 = /* @__PURE__ */ Symbol.for(`react.legacy_hidden`);
  var ye2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`);
  var be2 = /* @__PURE__ */ Symbol.for(`react.view_transition`);
  var xe2 = /* @__PURE__ */ Symbol.for(`react.recoverable`);
  var Symbol_iterator = Symbol.iterator;
  function Ce2(e3) {
    if (typeof e3 != `object` || !e3) {
      return null;
    }
    e3 = Symbol_iterator && e3[Symbol_iterator] || e3[`@@iterator`];
    if (typeof e3 == `function`) {
      return e3;
    }
    return null;
  }
  var we2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
  function Te2(e3) {
    if (e3 == null) {
      return null;
    }
    if (typeof e3 == `function`) {
      if (e3.$$typeof === we2) {
        return null;
      }
      return e3.displayName || e3.name || null;
    }
    if (typeof e3 == `string`) {
      return e3;
    }
    switch (e3) {
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
    if (typeof e3 == `object`) {
      switch (e3.$$typeof) {
        case se:
          return `Portal`;
        case fe:
          return e3.displayName || `Context`;
        case de:
          return (e3._context.displayName || `Context`) + `.Consumer`;
        case pe:
          var t6 = e3.render;
          e3 = e3.displayName;
          e3 ||= (e3 = t6.displayName || t6.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`);
          return e3;
        case C2:
          t6 = e3.displayName || null;
          if (t6 === null) {
            return Te2(e3.type) || `Memo`;
          }
          return t6;
        case ge2:
          t6 = e3._payload;
          e3 = e3._init;
          try {
            return Te2(e3(t6));
          } catch {
          }
      }
    }
    return null;
  }
  var Array_isArray = Array.isArray;
  var r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var De2 = {
    pending: false,
    data: null,
    method: null,
    action: null
  };
  var Oe2 = [];
  var ke2 = -1;
  function Ae2(current) {
    return {
      current
    };
  }
  function je2(e3) {
    if (!(ke2 < 0)) {
      e3.current = Oe2[ke2];
      Oe2[ke2] = null;
      ke2--;
    }
  }
  function E2(e3, t6) {
    ke2++;
    Oe2[ke2] = e3.current;
    e3.current = t6;
  }
  var Me2 = Ae2(null);
  var Ne2 = Ae2(null);
  var Pe2 = Ae2(null);
  var Fe2 = Ae2(null);
  function Ie2(e3, t6) {
    E2(Pe2, t6);
    E2(Ne2, e3);
    E2(Me2, null);
    switch (t6.nodeType) {
      case 9:
      case 11:
        e3 = (e3 = t6.documentElement) && (e3 = e3.namespaceURI) ? up(e3) : 0;
        break;
      default:
        e3 = t6.tagName;
        if (t6 = t6.namespaceURI) {
          t6 = up(t6);
          e3 = dp(t6, e3);
        } else {
          switch (e3) {
            case `svg`:
              e3 = 1;
              break;
            case `math`:
              e3 = 2;
              break;
            default:
              e3 = 0;
          }
        }
    }
    je2(Me2);
    E2(Me2, e3);
  }
  function Le2() {
    je2(Me2);
    je2(Ne2);
    je2(Pe2);
  }
  function Re2(e3) {
    let e_memoizedState = e3.memoizedState;
    if (e_memoizedState !== null) {
      sh._currentValue = e_memoizedState.memoizedState;
      E2(Fe2, e3);
    }
    e_memoizedState = Me2.current;
    const n7 = dp(e_memoizedState, e3.type);
    if (e_memoizedState !== n7) {
      E2(Ne2, e3);
      E2(Me2, n7);
    }
  }
  function ze2(e3) {
    if (Ne2.current === e3) {
      je2(Me2);
      je2(Ne2);
    }
    if (Fe2.current === e3) {
      je2(Fe2);
      sh._currentValue = De2;
    }
  }
  var Be2;
  var Ve2;
  function He2(e3) {
    if (Be2 === void 0) {
      try {
        throw Error();
      } catch (error) {
        const t6 = error.stack.trim().match(/\n( *(at )?)/);
        Be2 = t6 && t6[1] || ``;
        Ve2 = error.stack.indexOf(`
    at`) > -1 ? ` (<anonymous>)` : error.stack.indexOf(`@`) > -1 ? `@unknown:0:0` : ``;
      }
    }
    return `
` + Be2 + e3 + Ve2;
  }
  var Ue2 = false;
  function We2(e3, t6) {
    if (!e3 || Ue2) {
      return ``;
    }
    Ue2 = true;
    let Error_prepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      let r5 = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t6) {
              var n7 = function() {
                throw Error();
              };
              Object.defineProperty(n7.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n7, []);
                } catch (error) {
                  var r6 = error;
                }
                Reflect.construct(e3, [], n7);
              } else {
                try {
                  n7.call();
                } catch (error) {
                  r6 = error;
                }
                n7 = false;
                try {
                  var i5 = Object.getOwnPropertyDescriptor(e3.prototype, `props`);
                  Object.defineProperty(e3.prototype, "props", {
                    configurable: true,
                    set: function() {
                      throw Error();
                    }
                  });
                  n7 = true;
                  new e3();
                } finally {
                  if (n7) {
                    if (i5 === void 0) {
                      delete e3.prototype.props;
                    } else {
                      Object.defineProperty(e3.prototype, "props", i5);
                    }
                  }
                }
              }
            } else {
              try {
                throw Error();
              } catch (error) {
                r6 = error;
              }
              if ((n7 = e3()) && typeof n7.catch == `function`) {
                n7.catch(() => {
                });
              }
            }
          } catch (error) {
            if (error && r6 && typeof error.stack == `string`) {
              return [error.stack, r6.stack];
            }
          }
          return [null, null];
        }
      };
      r5.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      let i4 = Object.getOwnPropertyDescriptor(r5.DetermineComponentFrameRoot, `name`);
      if (i4 && i4.configurable) {
        Object.defineProperty(r5.DetermineComponentFrameRoot, "name", {
          value: `DetermineComponentFrameRoot`
        });
      }
      const a4 = r5.DetermineComponentFrameRoot();
      const o3 = a4[0];
      const s3 = a4[1];
      if (o3 && s3) {
        const c2 = o3.split(`
`);
        const l2 = s3.split(`
`);
        for (i4 = r5 = 0; r5 < c2.length && !c2[r5].includes(`DetermineComponentFrameRoot`); ) {
          r5++;
        }
        while (i4 < l2.length && !l2[i4].includes(`DetermineComponentFrameRoot`)) {
          i4++;
        }
        if (r5 === c2.length || i4 === l2.length) {
          r5 = c2.length - 1;
          for (i4 = l2.length - 1; r5 >= 1 && i4 >= 0 && c2[r5] !== l2[i4]; ) {
            i4--;
          }
        }
        for (; r5 >= 1 && i4 >= 0; r5--, i4--) {
          if (c2[r5] !== l2[i4]) {
            if (r5 !== 1 || i4 !== 1) {
              do {
                r5--;
                i4--;
                if (i4 < 0 || c2[r5] !== l2[i4]) {
                  let u2 = `
` + c2[r5].replace(` at new `, ` at `);
                  if (e3.displayName && u2.includes(`<anonymous>`)) {
                    u2 = u2.replace(`<anonymous>`, e3.displayName);
                  }
                  return u2;
                }
              } while (r5 >= 1 && i4 >= 0);
            }
            break;
          }
        }
      }
    } finally {
      Ue2 = false;
      Error.prepareStackTrace = Error_prepareStackTrace;
    }
    if (Error_prepareStackTrace = e3 ? e3.displayName || e3.name : ``) {
      return He2(Error_prepareStackTrace);
    }
    return ``;
  }
  function Ge2(e3, t6) {
    switch (e3.tag) {
      case 26:
      case 27:
      case 5:
        return He2(e3.type);
      case 16:
        return He2(`Lazy`);
      case 13:
        if (e3.child !== t6 && t6 !== null) {
          return He2(`Suspense Fallback`);
        }
        return He2(`Suspense`);
      case 19:
        return He2(`SuspenseList`);
      case 0:
      case 15:
        return We2(e3.type, false);
      case 11:
        return We2(e3.type.render, false);
      case 1:
        return We2(e3.type, true);
      case 31:
        return He2(`Activity`);
      case 30:
        return He2(`ViewTransition`);
      default:
        return ``;
    }
  }
  function Ke2(e3) {
    try {
      let t6 = ``;
      let n7 = null;
      do {
        t6 += Ge2(e3, n7);
        n7 = e3;
        e3 = e3.return;
      } while (e3);
      return t6;
    } catch (error) {
      return `
Error generating stack: ` + error.message + `
` + error.stack;
    }
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var t_unstable_scheduleCallback = t5.unstable_scheduleCallback;
  var t_unstable_cancelCallback = t5.unstable_cancelCallback;
  var t_unstable_shouldYield = t5.unstable_shouldYield;
  var t_unstable_requestPaint = t5.unstable_requestPaint;
  var t_unstable_now = t5.unstable_now;
  var t_unstable_getCurrentPriorityLevel = t5.unstable_getCurrentPriorityLevel;
  var t_unstable_ImmediatePriority = t5.unstable_ImmediatePriority;
  var t_unstable_UserBlockingPriority = t5.unstable_UserBlockingPriority;
  var t_unstable_NormalPriority = t5.unstable_NormalPriority;
  var t_unstable_LowPriority = t5.unstable_LowPriority;
  var t_unstable_IdlePriority = t5.unstable_IdlePriority;
  var t_log = t5.log;
  var t_unstable_setDisableYieldValue = t5.unstable_setDisableYieldValue;
  var st2 = null;
  var ct2 = null;
  function lt2(e3) {
    if (typeof t_log == `function`) {
      t_unstable_setDisableYieldValue(e3);
    }
    if (ct2 && typeof ct2.setStrictMode == `function`) {
      try {
        ct2.setStrictMode(st2, e3);
      } catch {
      }
    }
  }
  var ut2 = Math.clz32 ? Math.clz32 : pt2;
  var Math_log = Math.log;
  var Math_LN2 = Math.LN2;
  function pt2(e3) {
    e3 >>>= 0;
    if (e3 === 0) {
      return 32;
    }
    return 31 - (Math_log(e3) / Math_LN2 | 0) | 0;
  }
  var mt2 = 256;
  var ht2 = 262144;
  var gt2 = 4194304;
  function _t2(e3) {
    const t6 = e3 & 42;
    if (t6 !== 0) {
      return t6;
    }
    switch (e3 & -e3) {
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
        return e3 & -e3;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e3 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e3 & 62914560;
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
        return e3;
    }
  }
  function vt2(e3, t6, n7) {
    let e_pendingLanes = e3.pendingLanes;
    if (e_pendingLanes === 0) {
      return 0;
    }
    let i4 = 0;
    let e_suspendedLanes = e3.suspendedLanes;
    let e_pingedLanes = e3.pingedLanes;
    e3 = e3.warmLanes;
    let s3 = e_pendingLanes & 134217727;
    if (s3 === 0) {
      s3 = e_pendingLanes & ~e_suspendedLanes;
      if (s3 === 0) {
        if (e_pingedLanes === 0) {
          if (!n7) {
            n7 = e_pendingLanes & ~e3;
            if (n7 !== 0) {
              i4 = _t2(n7);
            }
          }
        } else {
          i4 = _t2(e_pingedLanes);
        }
      } else {
        i4 = _t2(s3);
      }
    } else {
      e_pendingLanes = s3 & ~e_suspendedLanes;
      if (e_pendingLanes === 0) {
        e_pingedLanes &= s3;
        if (e_pingedLanes === 0) {
          if (!n7) {
            n7 = s3 & ~e3;
            if (n7 !== 0) {
              i4 = _t2(n7);
            }
          }
        } else {
          i4 = _t2(e_pingedLanes);
        }
      } else {
        i4 = _t2(e_pendingLanes);
      }
    }
    if (i4 === 0) {
      return 0;
    }
    if (t6 !== 0 && t6 !== i4 && (t6 & e_suspendedLanes) === 0 && (e_suspendedLanes = i4 & -i4, n7 = t6 & -t6, e_suspendedLanes >= n7 || e_suspendedLanes === 32 && n7 & 4194048)) {
      return t6;
    }
    return i4;
  }
  function yt2(e3, t6) {
    return (e3.pendingLanes & ~(e3.suspendedLanes & ~e3.pingedLanes) & t6) === 0;
  }
  function bt2(e3, t6) {
    if (t6 & 8) {
      t6 |= t6 & 32;
    }
    let e_entangledLanes = e3.entangledLanes;
    if (e_entangledLanes !== 0) {
      e3 = e3.entanglements;
      for (e_entangledLanes &= t6; e_entangledLanes > 0; ) {
        const r5 = 31 - ut2(e_entangledLanes);
        const i4 = 1 << r5;
        t6 |= e3[r5];
        e_entangledLanes &= ~i4;
      }
    }
    return t6;
  }
  function xt2(e3, t6) {
    switch (e3) {
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
    const e3 = gt2;
    gt2 <<= 1;
    if (!(gt2 & 62914560)) {
      gt2 = 4194304;
    }
    return e3;
  }
  function Ct2(e3) {
    const t6 = [];
    for (let n7 = 0; n7 < 31; n7++) {
      t6.push(e3);
    }
    return t6;
  }
  function wt2(e3, t6) {
    e3.pendingLanes |= t6;
    if (t6 !== 268435456) {
      e3.suspendedLanes = 0;
      e3.pingedLanes = 0;
      e3.warmLanes = 0;
    }
  }
  function Tt2(e3, t6, n7, r5, i4, a4) {
    const e_pendingLanes = e3.pendingLanes;
    e3.pendingLanes = n7;
    e3.suspendedLanes = 0;
    e3.pingedLanes = 0;
    e3.warmLanes = 0;
    e3.expiredLanes &= n7;
    e3.entangledLanes &= n7;
    e3.errorRecoveryDisabledLanes &= n7;
    e3.shellSuspendCounter = 0;
    const {
      entanglements,
      expirationTimes,
      hiddenUpdates
    } = e3;
    for (n7 = e_pendingLanes & ~n7; n7 > 0; ) {
      let u2 = 31 - ut2(n7);
      const d2 = 1 << u2;
      entanglements[u2] = 0;
      expirationTimes[u2] = -1;
      const f2 = hiddenUpdates[u2];
      if (f2 !== null) {
        hiddenUpdates[u2] = null;
        for (u2 = 0; u2 < f2.length; u2++) {
          const p2 = f2[u2];
          if (p2 !== null) {
            p2.lane &= -536870913;
          }
        }
      }
      n7 &= ~d2;
    }
    if (r5 !== 0) {
      Et2(e3, r5, 0);
    }
    if (a4 !== 0 && i4 === 0 && e3.tag !== 0) {
      e3.suspendedLanes |= a4 & ~(e_pendingLanes & ~t6);
    }
  }
  function Et2(e3, t6, n7) {
    e3.pendingLanes |= t6;
    e3.suspendedLanes &= ~t6;
    const r5 = 31 - ut2(t6);
    e3.entangledLanes |= t6;
    e3.entanglements[r5] = e3.entanglements[r5] | 1073741824 | n7 & 261930;
  }
  function Dt2(e3, t6) {
    let n7 = e3.entangledLanes |= t6;
    for (e3 = e3.entanglements; n7; ) {
      const r5 = 31 - ut2(n7);
      const i4 = 1 << r5;
      if (i4 & t6 | e3[r5] & t6) {
        e3[r5] |= t6;
      }
      n7 &= ~i4;
    }
  }
  function Ot2(e3, t6) {
    let n7 = t6 & -t6;
    n7 = n7 & 42 ? 1 : kt2(n7);
    if ((n7 & (e3.suspendedLanes | t6)) === 0) {
      return n7;
    }
    return 0;
  }
  function kt2(e3) {
    switch (e3) {
      case 2:
        e3 = 1;
        break;
      case 8:
        e3 = 4;
        break;
      case 32:
        e3 = 16;
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
        e3 = 128;
        break;
      case 268435456:
        e3 = 134217728;
        break;
      default:
        e3 = 0;
    }
    return e3;
  }
  function At2(e3) {
    e3 &= -e3;
    if (e3 > 2) {
      if (e3 > 8) {
        if (e3 & 134217727) {
          return 32;
        }
        return 268435456;
      }
      return 8;
    }
    return 2;
  }
  function jt2() {
    let i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    if (i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p === 0) {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = window.event;
      if (i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p === void 0) {
        return 32;
      }
      return Ch(i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p.type);
    }
    return i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
  }
  function Mt2(priority, t6) {
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = priority;
      return t6();
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
    }
  }
  var Nt2 = Math.random().toString(36).slice(2);
  var Pt2 = `__reactFiber$` + Nt2;
  var Ft2 = `__reactProps$` + Nt2;
  var It2 = `__reactContainer$` + Nt2;
  var Lt2 = `__reactEvents$` + Nt2;
  var Rt2 = `__reactListeners$` + Nt2;
  var zt2 = `__reactHandles$` + Nt2;
  var Bt2 = `__reactResources$` + Nt2;
  var Vt2 = `__reactMarker$` + Nt2;
  var Ht2 = `__reactLoad$` + Nt2;
  function Ut2(e3) {
    delete e3[Pt2];
    delete e3[Ft2];
    delete e3[Rt2];
    delete e3[zt2];
  }
  function Wt2(e3) {
    let t6;
    if (t6 = e3[Pt2]) {
      return t6;
    }
    for (let n7 = e3.parentNode; n7; ) {
      if (t6 = n7[It2] || n7[Pt2]) {
        n7 = t6.alternate;
        if (t6.child !== null || n7 !== null && n7.child !== null) {
          for (e3 = fm(e3); e3 !== null; ) {
            if (n7 = e3[Pt2]) {
              return n7;
            }
            e3 = fm(e3);
          }
        }
        return t6;
      }
      e3 = n7;
      n7 = e3.parentNode;
    }
    return null;
  }
  function Gt2(e3) {
    if (e3 = e3[Pt2] || e3[It2]) {
      const t6 = e3.tag;
      if (t6 === 5 || t6 === 6 || t6 === 13 || t6 === 31 || t6 === 26 || t6 === 27 || t6 === 3) {
        return e3;
      }
    }
    return null;
  }
  function Kt2(e3) {
    const e_tag = e3.tag;
    if (e_tag === 5 || e_tag === 26 || e_tag === 27 || e_tag === 6) {
      return e3.stateNode;
    }
    throw Error(a3(33));
  }
  function qt2(e3) {
    let t6 = e3[Bt2];
    t6 ||= e3[Bt2] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    };
    return t6;
  }
  function Jt2(e3) {
    e3[Vt2] = true;
  }
  function Yt2(e3) {
    e3[Ht2] = void 0;
  }
  var Xt2 = /* @__PURE__ */ new Set();
  var Zt2 = {};
  function Qt2(e3, t6) {
    $t2(e3, t6);
    $t2(e3 + `Capture`, t6);
  }
  function $t2(e3, t6) {
    Zt2[e3] = t6;
    for (e3 = 0; e3 < t6.length; e3++) {
      Xt2.add(t6[e3]);
    }
  }
  var en2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`);
  var tn2 = {};
  var nn2 = {};
  function rn2(e3) {
    if (hasOwnProperty.call(nn2, e3)) {
      return true;
    }
    if (hasOwnProperty.call(tn2, e3)) {
      return false;
    }
    if (en2.test(e3)) {
      return nn2[e3] = true;
    }
    tn2[e3] = true;
    return false;
  }
  var D2 = false;
  function an2() {
    const e3 = D2;
    D2 = false;
    return e3;
  }
  function on2(e3, t6, n7) {
    if (rn2(t6)) {
      if (n7 === null) {
        e3.removeAttribute(t6);
      } else {
        switch (typeof n7) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e3.removeAttribute(t6);
            return;
          case `boolean`:
            const r5 = t6.toLowerCase().slice(0, 5);
            if (r5 !== `data-` && r5 !== `aria-`) {
              e3.removeAttribute(t6);
              return;
            }
        }
        e3.setAttribute(t6, n7);
      }
    }
  }
  function sn2(e3, t6, n7) {
    if (n7 === null) {
      e3.removeAttribute(t6);
    } else {
      switch (typeof n7) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(t6);
          return;
      }
      e3.setAttribute(t6, n7);
    }
  }
  function cn2(e3, t6, n7, r5) {
    if (r5 === null) {
      e3.removeAttribute(n7);
    } else {
      switch (typeof r5) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(n7);
          return;
      }
      e3.setAttributeNS(t6, n7, r5);
    }
  }
  function ln2(e3) {
    switch (typeof e3) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e3;
      case `object`:
        return e3;
      default:
        return ``;
    }
  }
  function un2(e3) {
    const e_type = e3.type;
    return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (e_type === `checkbox` || e_type === `radio`);
  }
  function dn2(e3, t6, n7) {
    const r5 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t6);
    if (!e3.hasOwnProperty(t6) && r5 !== void 0 && typeof r5.get == `function` && typeof r5.set == `function`) {
      const {
        get,
        set
      } = r5;
      Object.defineProperty(e3, t6, {
        configurable: true,
        get: function() {
          return get.call(this);
        },
        set: function(e4) {
          n7 = `` + e4;
          set.call(this, e4);
        }
      });
      Object.defineProperty(e3, t6, {
        enumerable: r5.enumerable
      });
      return {
        getValue: function() {
          return n7;
        },
        setValue: function(e4) {
          n7 = `` + e4;
        },
        stopTracking: function() {
          e3._valueTracker = null;
          delete e3[t6];
        }
      };
    }
  }
  function fn2(e3) {
    if (!e3._valueTracker) {
      const t6 = un2(e3) ? `checked` : `value`;
      e3._valueTracker = dn2(e3, t6, `` + e3[t6]);
    }
  }
  function pn2(e3) {
    if (!e3) {
      return false;
    }
    const e__valueTracker = e3._valueTracker;
    if (!e__valueTracker) {
      return true;
    }
    const n7 = e__valueTracker.getValue();
    let r5 = ``;
    if (e3) {
      r5 = un2(e3) ? e3.checked ? `true` : `false` : e3.value;
    }
    e3 = r5;
    return e3 !== n7 && (e__valueTracker.setValue(e3), true);
  }
  var mn2 = /[\n"\\]/g;
  function hn2(e3) {
    return e3.replace(mn2, (e4) => `\\` + e4.charCodeAt(0).toString(16) + ` `);
  }
  function gn2(e3, t6, n7, r5, i4, a4, o3, s3) {
    e3.name = ``;
    if (o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean`) {
      e3.type = o3;
    } else {
      e3.removeAttribute(`type`);
    }
    if (t6 == null) {
      if (!(o3 !== `submit` && o3 !== `reset`)) {
        e3.removeAttribute(`value`);
      }
    } else if (o3 === `number`) {
      if (t6 === 0 && e3.value === `` || e3.value != t6) {
        e3.value = `` + ln2(t6);
      }
    } else if (e3.value !== `` + ln2(t6)) {
      e3.value = `` + ln2(t6);
    }
    if (t6 == null) {
      if (n7 == null) {
        if (r5 != null) {
          e3.removeAttribute(`value`);
        }
      } else {
        vn2(e3, ln2(n7));
      }
    } else if (o3 === `number` && e3.value == t6) {
      vn2(e3, ln2(e3.value));
    } else {
      vn2(e3, ln2(t6));
    }
    if (i4 == null && a4 != null) {
      e3.defaultChecked = !!a4;
    }
    if (i4 != null) {
      e3.checked = i4 && typeof i4 != `function` && typeof i4 != `symbol`;
    }
    if (s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean`) {
      e3.name = `` + ln2(s3);
    } else {
      e3.removeAttribute(`name`);
    }
  }
  function _n2(e3, t6, n7, r5, i4, a4, o3, s3) {
    if (a4 != null && typeof a4 != `function` && typeof a4 != `symbol` && typeof a4 != `boolean`) {
      e3.type = a4;
    }
    if (t6 != null || n7 != null) {
      if (!(a4 !== `submit` && a4 !== `reset` || t6 != null)) {
        fn2(e3);
        return;
      }
      n7 = n7 == null ? `` : `` + ln2(n7);
      t6 = t6 == null ? n7 : `` + ln2(t6);
      if (!(s3 || t6 === e3.value)) {
        e3.value = t6;
      }
      e3.defaultValue = t6;
    }
    r5 ??= i4;
    r5 = typeof r5 != `function` && typeof r5 != `symbol` && !!r5;
    e3.checked = s3 ? e3.checked : !!r5;
    e3.defaultChecked = !!r5;
    if (o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean`) {
      e3.name = o3;
    }
    fn2(e3);
  }
  function vn2(e3, t6) {
    if (e3.defaultValue !== `` + t6) {
      e3.defaultValue = `` + t6;
    }
  }
  function yn2(e3, t6, n7, r5) {
    e3 = e3.options;
    if (t6) {
      t6 = {};
      for (var i4 = 0; i4 < n7.length; i4++) {
        t6[`$` + n7[i4]] = true;
      }
      for (n7 = 0; n7 < e3.length; n7++) {
        i4 = t6.hasOwnProperty(`$` + e3[n7].value);
        if (e3[n7].selected !== i4) {
          e3[n7].selected = i4;
        }
        if (i4 && r5) {
          e3[n7].defaultSelected = true;
        }
      }
    } else {
      n7 = `` + ln2(n7);
      t6 = null;
      for (i4 = 0; i4 < e3.length; i4++) {
        if (e3[i4].value === n7) {
          e3[i4].selected = true;
          if (r5) {
            e3[i4].defaultSelected = true;
          }
          return;
        }
        if (!(t6 !== null || e3[i4].disabled)) {
          t6 = e3[i4];
        }
      }
      if (t6 !== null) {
        t6.selected = true;
      }
    }
  }
  function bn2(e3, t6, n7) {
    if (t6 != null && (t6 = `` + ln2(t6), t6 !== e3.value && (e3.value = t6), n7 == null)) {
      if (e3.defaultValue !== t6) {
        e3.defaultValue = t6;
      }
      return;
    }
    e3.defaultValue = n7 == null ? `` : `` + ln2(n7);
  }
  function xn2(e3, t6, n7, r5) {
    if (t6 == null) {
      if (r5 != null) {
        if (n7 != null) {
          throw Error(a3(92));
        }
        if (Array_isArray(r5)) {
          if (r5.length > 1) {
            throw Error(a3(93));
          }
          r5 = r5[0];
        }
        n7 = r5;
      }
      n7 ??= ``;
      t6 = n7;
    }
    n7 = ln2(t6);
    e3.defaultValue = n7;
    r5 = e3.textContent;
    if (r5 === n7 && r5 !== `` && r5 !== null) {
      e3.value = r5;
    }
    fn2(e3);
  }
  function Sn2(e3, t6) {
    if (t6) {
      const n7 = e3.firstChild;
      if (n7 && n7 === e3.lastChild && n7.nodeType === 3) {
        n7.nodeValue = t6;
        return;
      }
    }
    e3.textContent = t6;
  }
  var Cn2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function wn2(e3, t6, n7) {
    const r5 = t6.indexOf(`--`) === 0;
    if (n7 == null || typeof n7 == `boolean` || n7 === ``) {
      if (r5) {
        e3.setProperty(t6, ``);
      } else if (t6 === `float`) {
        e3.cssFloat = ``;
      } else {
        e3[t6] = ``;
      }
    } else if (r5) {
      e3.setProperty(t6, n7);
    } else if (typeof n7 != `number` || n7 === 0 || Cn2.has(t6)) {
      if (t6 === `float`) {
        e3.cssFloat = n7;
      } else {
        e3[t6] = (`` + n7).trim();
      }
    } else {
      e3[t6] = n7 + `px`;
    }
  }
  function Tn2(e3, t6, n7) {
    if (t6 != null && typeof t6 != `object`) {
      throw Error(a3(62));
    }
    e3 = e3.style;
    if (n7 != null) {
      for (var r5 in n7) {
        if (!(!n7.hasOwnProperty(r5) || t6 != null && t6.hasOwnProperty(r5))) {
          if (r5.indexOf(`--`) === 0) {
            e3.setProperty(r5, ``);
          } else if (r5 === `float`) {
            e3.cssFloat = ``;
          } else {
            e3[r5] = ``;
          }
          D2 = true;
        }
      }
      for (const i4 in t6) {
        r5 = t6[i4];
        if (t6.hasOwnProperty(i4) && n7[i4] !== r5) {
          wn2(e3, i4, r5);
          D2 = true;
        }
      }
    } else {
      for (const o3 in t6) {
        if (t6.hasOwnProperty(o3)) {
          wn2(e3, o3, t6[o3]);
        }
      }
    }
  }
  function En2(e3) {
    if (e3.indexOf(`-`) === -1) {
      return false;
    }
    switch (e3) {
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
  var Dn2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]);
  var On2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kn2(e3) {
    if (On2.test(`` + e3)) {
      return `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`;
    }
    return e3;
  }
  function unsuspend() {
  }
  var jn2 = null;
  function Mn2(e3) {
    e3 = e3.target || e3.srcElement || window;
    if (e3.correspondingUseElement) {
      e3 = e3.correspondingUseElement;
    }
    if (e3.nodeType === 3) {
      return e3.parentNode;
    }
    return e3;
  }
  var Nn2 = null;
  var Pn2 = null;
  function Fn2(e3) {
    let t6 = Gt2(e3);
    if (t6 && (e3 = t6.stateNode)) {
      let n7 = e3[Ft2] || null;
      a: switch (e3 = t6.stateNode, t6.type) {
        case `input`:
          gn2(e3, n7.value, n7.defaultValue, n7.defaultValue, n7.checked, n7.defaultChecked, n7.type, n7.name);
          t6 = n7.name;
          if (n7.type === `radio` && t6 != null) {
            for (n7 = e3; n7.parentNode; ) {
              n7 = n7.parentNode;
            }
            n7 = n7.querySelectorAll(`input[name="` + hn2(`` + t6) + `"][type="radio"]`);
            for (t6 = 0; t6 < n7.length; t6++) {
              var r5 = n7[t6];
              if (r5 !== e3 && r5.form === e3.form) {
                const i4 = r5[Ft2] || null;
                if (!i4) {
                  throw Error(a3(90));
                }
                gn2(r5, i4.value, i4.defaultValue, i4.defaultValue, i4.checked, i4.defaultChecked, i4.type, i4.name);
              }
            }
            for (t6 = 0; t6 < n7.length; t6++) {
              r5 = n7[t6];
              if (r5.form === e3.form) {
                pn2(r5);
              }
            }
          }
          break a;
        case `textarea`:
          bn2(e3, n7.value, n7.defaultValue);
          break a;
        case `select`:
          t6 = n7.value;
          if (t6 != null) {
            yn2(e3, !!n7.multiple, t6, false);
          }
      }
    }
  }
  var In2 = false;
  function Ln2(e3, t6, n7) {
    if (In2) {
      return e3(t6, n7);
    }
    In2 = true;
    try {
      return e3(t6);
    } finally {
      In2 = false;
      if ((Nn2 !== null || Pn2 !== null) && (zd(), Nn2 && (t6 = Nn2, e3 = Pn2, Pn2 = Nn2 = null, Fn2(t6), e3))) {
        for (t6 = 0; t6 < e3.length; t6++) {
          Fn2(e3[t6]);
        }
      }
    }
  }
  function Rn2(e3, t6) {
    let e_stateNode = e3.stateNode;
    if (e_stateNode === null) {
      return null;
    }
    let r5 = e_stateNode[Ft2] || null;
    if (r5 === null) {
      return null;
    }
    e_stateNode = r5[t6];
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
        if (!(r5 = !r5.disabled)) {
          e3 = e3.type;
          r5 = e3 !== `button` && e3 !== `input` && e3 !== `select` && e3 !== `textarea`;
        }
        e3 = !r5;
        break a;
      default:
        e3 = false;
    }
    if (e3) {
      return null;
    }
    if (e_stateNode && typeof e_stateNode != `function`) {
      throw Error(a3(231, t6, typeof e_stateNode));
    }
    return e_stateNode;
  }
  var zn2 = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
  var Bn2 = false;
  if (zn2) {
    try {
      var Vn2 = {};
      Object.defineProperty(Vn2, "passive", {
        get: function() {
          Bn2 = true;
        }
      });
      window.addEventListener(`test`, Vn2, Vn2);
      window.removeEventListener(`test`, Vn2, Vn2);
    } catch {
      Bn2 = false;
    }
  }
  var Hn2 = null;
  var Un2 = null;
  var Wn2 = null;
  function Gn2() {
    if (Wn2) {
      return Wn2;
    }
    let e3;
    const t6 = Un2;
    const t_length = t6.length;
    let r5;
    const i4 = `value` in Hn2 ? Hn2.value : Hn2.textContent;
    const i_length = i4.length;
    for (e3 = 0; e3 < t_length && t6[e3] === i4[e3]; e3++) ;
    const o3 = t_length - e3;
    for (r5 = 1; r5 <= o3 && t6[t_length - r5] === i4[i_length - r5]; r5++) ;
    return Wn2 = i4.slice(e3, r5 > 1 ? 1 - r5 : void 0);
  }
  function Kn2(e3) {
    const e_keyCode = e3.keyCode;
    if (`charCode` in e3) {
      e3 = e3.charCode;
      if (e3 === 0 && e_keyCode === 13) {
        e3 = 13;
      }
    } else {
      e3 = e_keyCode;
    }
    if (e3 === 10) {
      e3 = 13;
    }
    if (e3 >= 32 || e3 === 13) {
      return e3;
    }
    return 0;
  }
  function isPersistent() {
    return true;
  }
  function Jn2() {
    return false;
  }
  function Yn2(e3) {
    function t6(t7, n7, r5, i4, a4) {
      this._reactName = t7;
      this._targetInst = r5;
      this.type = n7;
      this.nativeEvent = i4;
      this.target = a4;
      this.currentTarget = null;
      for (const o3 in e3) {
        if (e3.hasOwnProperty(o3)) {
          t7 = e3[o3];
          this[o3] = t7 ? t7(i4) : i4[o3];
        }
      }
      this.isDefaultPrevented = i4.defaultPrevented ?? i4.returnValue === false ? isPersistent : Jn2;
      this.isPropagationStopped = Jn2;
      return this;
    }
    Object_assign(t6.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        const nativeEvent = this.nativeEvent;
        if (nativeEvent) {
          if (nativeEvent.preventDefault) {
            nativeEvent.preventDefault();
          } else if (typeof nativeEvent.returnValue != `unknown`) {
            nativeEvent.returnValue = false;
          }
          this.isDefaultPrevented = isPersistent;
        }
      },
      stopPropagation: function() {
        const nativeEvent = this.nativeEvent;
        if (nativeEvent) {
          if (nativeEvent.stopPropagation) {
            nativeEvent.stopPropagation();
          } else if (typeof nativeEvent.cancelBubble != `unknown`) {
            nativeEvent.cancelBubble = true;
          }
          this.isPropagationStopped = isPersistent;
        }
      },
      persist: function() {
      },
      isPersistent
    });
    return t6;
  }
  var Xn2 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e3) {
      return e3.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Zn2 = Yn2(Xn2);
  var Qn2 = Object_assign({}, Xn2, {
    view: 0,
    detail: 0
  });
  var $n2 = Yn2(Qn2);
  var er2;
  var tr2;
  var nr2;
  var rr2 = Object_assign({}, Qn2, {
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
    getModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function(e3) {
      if (e3.relatedTarget === void 0) {
        if (e3.fromElement === e3.srcElement) {
          return e3.toElement;
        }
        return e3.fromElement;
      }
      return e3.relatedTarget;
    },
    movementX: function(e3) {
      if (`movementX` in e3) {
        return e3.movementX;
      }
      if (e3 !== nr2) {
        if (nr2 && e3.type === `mousemove`) {
          er2 = e3.screenX - nr2.screenX;
          tr2 = e3.screenY - nr2.screenY;
        } else {
          tr2 = er2 = 0;
        }
        nr2 = e3;
      }
      return er2;
    },
    movementY: function(e3) {
      if (`movementY` in e3) {
        return e3.movementY;
      }
      return tr2;
    }
  });
  var ir2 = Yn2(rr2);
  var ar2 = Yn2(Object_assign({}, rr2, {
    dataTransfer: 0
  }));
  var or2 = Yn2(Object_assign({}, Qn2, {
    relatedTarget: 0
  }));
  var sr2 = Yn2(Object_assign({}, Xn2, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var cr2 = Yn2(Object_assign({}, Xn2, {
    clipboardData: function(e3) {
      if (`clipboardData` in e3) {
        return e3.clipboardData;
      }
      return window.clipboardData;
    }
  }));
  var lr2 = Yn2(Object_assign({}, Xn2, {
    data: 0
  }));
  var ur2 = {
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
  };
  var dr2 = {
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
  };
  var fr2 = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
  };
  function pr2(e3) {
    const nativeEvent = this.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(e3);
    }
    if (e3 = fr2[e3]) {
      return !!nativeEvent[e3];
    }
    return false;
  }
  function getModifierState() {
    return pr2;
  }
  var hr2 = Yn2(Object_assign({}, Qn2, {
    key: function(e3) {
      if (e3.key) {
        const t6 = ur2[e3.key] || e3.key;
        if (t6 !== `Unidentified`) {
          return t6;
        }
      }
      if (e3.type === `keypress`) {
        e3 = Kn2(e3);
        if (e3 === 13) {
          return `Enter`;
        }
        return String.fromCharCode(e3);
      }
      if (e3.type === `keydown` || e3.type === `keyup`) {
        return dr2[e3.keyCode] || `Unidentified`;
      }
      return ``;
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState,
    charCode: function(e3) {
      if (e3.type === `keypress`) {
        return Kn2(e3);
      }
      return 0;
    },
    keyCode: function(e3) {
      if (e3.type === `keydown` || e3.type === `keyup`) {
        return e3.keyCode;
      }
      return 0;
    },
    which: function(e3) {
      if (e3.type === `keypress`) {
        return Kn2(e3);
      }
      if (e3.type === `keydown` || e3.type === `keyup`) {
        return e3.keyCode;
      }
      return 0;
    }
  }));
  var gr2 = Yn2(Object_assign({}, rr2, {
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
  }));
  var _r2 = Yn2(Object_assign({}, Xn2, {
    submitter: 0
  }));
  var vr2 = Yn2(Object_assign({}, Qn2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState
  }));
  var yr2 = Yn2(Object_assign({}, Xn2, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var br2 = Yn2(Object_assign({}, rr2, {
    deltaX: function(e3) {
      if (`deltaX` in e3) {
        return e3.deltaX;
      }
      if (`wheelDeltaX` in e3) {
        return -e3.wheelDeltaX;
      }
      return 0;
    },
    deltaY: function(e3) {
      if (`deltaY` in e3) {
        return e3.deltaY;
      }
      if (`wheelDeltaY` in e3) {
        return -e3.wheelDeltaY;
      }
      if (`wheelDelta` in e3) {
        return -e3.wheelDelta;
      }
      return 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }));
  var xr2 = Yn2(Object_assign({}, Xn2, {
    newState: 0,
    oldState: 0,
    source: 0
  }));
  var Sr2 = [9, 13, 27, 32];
  var Cr2 = zn2 && `CompositionEvent` in window;
  var wr2 = null;
  if (zn2 && `documentMode` in document) {
    wr2 = document.documentMode;
  }
  var Tr2 = zn2 && `TextEvent` in window && !wr2;
  var Er2 = zn2 && (!Cr2 || wr2 && wr2 > 8 && wr2 <= 11);
  var Dr2 = ` `;
  var Or2 = false;
  function kr2(e3, t6) {
    switch (e3) {
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
  function Ar2(e3) {
    e3 = e3.detail;
    if (typeof e3 == `object` && `data` in e3) {
      return e3.data;
    }
    return null;
  }
  var jr2 = false;
  function Mr2(e3, t6) {
    switch (e3) {
      case `compositionend`:
        return Ar2(t6);
      case `keypress`:
        if (t6.which === 32) {
          Or2 = true;
          return Dr2;
        }
        return null;
      case `textInput`:
        e3 = t6.data;
        if (e3 === Dr2 && Or2) {
          return null;
        }
        return e3;
      default:
        return null;
    }
  }
  function Nr2(e3, t6) {
    if (jr2) {
      if (e3 === `compositionend` || !Cr2 && kr2(e3, t6)) {
        e3 = Gn2();
        Hn2 = null;
        Un2 = null;
        Wn2 = null;
        jr2 = false;
        return e3;
      }
      return null;
    }
    switch (e3) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t6.ctrlKey || t6.altKey || t6.metaKey) || t6.ctrlKey && t6.altKey) {
          if (t6.char && t6.char.length > 1) {
            return t6.char;
          }
          if (t6.which) {
            return String.fromCharCode(t6.which);
          }
        }
        return null;
      case `compositionend`:
        if (Er2 && t6.locale !== `ko`) {
          return null;
        }
        return t6.data;
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
  function Fr2(e3) {
    const t6 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    if (t6 === `input`) {
      return !!Pr2[e3.type];
    }
    return t6 === `textarea`;
  }
  function Ir2(e3, t6, n7, r5) {
    if (Nn2) {
      if (Pn2) {
        Pn2.push(r5);
      } else {
        Pn2 = [r5];
      }
    } else {
      Nn2 = r5;
    }
    t6 = Jf(t6, `onChange`);
    if (t6.length > 0) {
      n7 = new Zn2(`onChange`, `change`, null, n7, r5);
      e3.push({
        event: n7,
        listeners: t6
      });
    }
  }
  var Lr2 = null;
  var Rr2 = null;
  function zr2(e3) {
    Vf(e3, 0);
  }
  function Br2(e3) {
    if (pn2(Kt2(e3))) {
      return e3;
    }
  }
  function Vr2(e3, t6) {
    if (e3 === `change`) {
      return t6;
    }
  }
  var Hr2 = false;
  if (zn2) {
    var Ur2;
    if (zn2) {
      var Wr2 = `oninput` in document;
      if (!Wr2) {
        var Gr2 = document.createElement(`div`);
        Gr2.setAttribute(`oninput`, `return;`);
        Wr2 = typeof Gr2.oninput == `function`;
      }
      Ur2 = Wr2;
    } else {
      Ur2 = false;
    }
    Hr2 = Ur2 && (!document.documentMode || document.documentMode > 9);
  }
  function Kr2() {
    if (Lr2) {
      Lr2.detachEvent(`onpropertychange`, qr2);
      Lr2 = null;
      Rr2 = null;
    }
  }
  function qr2(e3) {
    if (e3.propertyName === `value` && Br2(Rr2)) {
      const t6 = [];
      Ir2(t6, Rr2, e3, Mn2(e3));
      Ln2(zr2, t6);
    }
  }
  function Jr2(e3, t6, n7) {
    if (e3 === `focusin`) {
      Kr2();
      Lr2 = t6;
      Rr2 = n7;
      Lr2.attachEvent(`onpropertychange`, qr2);
    } else if (e3 === `focusout`) {
      Kr2();
    }
  }
  function Yr2(e3) {
    if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`) {
      return Br2(Rr2);
    }
  }
  function Xr2(e3, t6) {
    if (e3 === `click`) {
      return Br2(t6);
    }
  }
  function Zr2(e3, t6) {
    if (e3 === `input` || e3 === `change`) {
      return Br2(t6);
    }
  }
  function Qr2(e3, t6) {
    return e3 === t6 && (e3 !== 0 || 1 / e3 == 1 / t6) || e3 !== e3 && t6 !== t6;
  }
  var $r2 = typeof Object.is == `function` ? Object.is : Qr2;
  function ei2(e3, t6) {
    if ($r2(e3, t6)) {
      return true;
    }
    if (typeof e3 != `object` || !e3 || typeof t6 != `object` || !t6) {
      return false;
    }
    const n7 = Object.keys(e3);
    let r5 = Object.keys(t6);
    if (n7.length !== r5.length) {
      return false;
    }
    for (r5 = 0; r5 < n7.length; r5++) {
      const i4 = n7[r5];
      if (!hasOwnProperty.call(t6, i4) || !$r2(e3[i4], t6[i4])) {
        return false;
      }
    }
    return true;
  }
  function ti2(e3) {
    e3 ||= typeof document < `u` ? document : void 0;
    if (e3 === void 0) {
      return null;
    }
    try {
      return e3.activeElement || e3.body;
    } catch {
      return e3.body;
    }
  }
  function ni2(e3) {
    while (e3 && e3.firstChild) {
      e3 = e3.firstChild;
    }
    return e3;
  }
  function ri2(e3, t6) {
    let node = ni2(e3);
    e3 = 0;
    let r5;
    while (node) {
      if (node.nodeType === 3) {
        r5 = e3 + node.textContent.length;
        if (e3 <= t6 && r5 >= t6) {
          return {
            node,
            offset: t6 - e3
          };
        }
        e3 = r5;
      }
      a: {
        while (node) {
          if (node.nextSibling) {
            node = node.nextSibling;
            break a;
          }
          node = node.parentNode;
        }
        node = void 0;
      }
      node = ni2(node);
    }
  }
  function ii2(e3, t6) {
    if (e3 && t6) {
      if (e3 === t6) {
        return true;
      }
      if (e3 && e3.nodeType === 3) {
        return false;
      }
      if (t6 && t6.nodeType === 3) {
        return ii2(e3, t6.parentNode);
      }
      if (`contains` in e3) {
        return e3.contains(t6);
      }
      if (e3.compareDocumentPosition) {
        return !!(e3.compareDocumentPosition(t6) & 16);
      }
      return false;
    }
    return false;
  }
  function ai2(e3) {
    e3 = e3 != null && e3.ownerDocument != null && e3.ownerDocument.defaultView != null ? e3.ownerDocument.defaultView : window;
    for (var t6 = ti2(e3.document); t6 instanceof e3.HTMLIFrameElement; ) {
      try {
        var n7 = typeof t6.contentWindow.location.href == `string`;
      } catch {
        n7 = false;
      }
      if (n7) {
        e3 = t6.contentWindow;
      } else {
        break;
      }
      t6 = ti2(e3.document);
    }
    return t6;
  }
  function oi2(e3) {
    const t6 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t6 && (t6 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t6 === `textarea` || e3.contentEditable === `true`);
  }
  var si2 = zn2 && `documentMode` in document && document.documentMode <= 11;
  var ci2 = null;
  var li2 = null;
  var ui2 = null;
  var di2 = false;
  function fi2(e3, t6, n7) {
    let r5 = n7.window === n7 ? n7.document : n7.nodeType === 9 ? n7 : n7.ownerDocument;
    if (!(di2 || ci2 == null || ci2 !== ti2(r5))) {
      r5 = ci2;
      if (`selectionStart` in r5 && oi2(r5)) {
        r5 = {
          start: r5.selectionStart,
          end: r5.selectionEnd
        };
      } else {
        r5 = (r5.ownerDocument && r5.ownerDocument.defaultView || window).getSelection();
        r5 = {
          anchorNode: r5.anchorNode,
          anchorOffset: r5.anchorOffset,
          focusNode: r5.focusNode,
          focusOffset: r5.focusOffset
        };
      }
      if (!(ui2 && ei2(ui2, r5))) {
        ui2 = r5;
        r5 = Jf(li2, `onSelect`);
        if (r5.length > 0) {
          t6 = new Zn2(`onSelect`, `select`, null, t6, n7);
          e3.push({
            event: t6,
            listeners: r5
          });
          t6.target = ci2;
        }
      }
    }
  }
  function pi2(e3, t6) {
    const n7 = {};
    n7[e3.toLowerCase()] = t6.toLowerCase();
    n7[`Webkit` + e3] = `webkit` + t6;
    n7[`Moz` + e3] = `moz` + t6;
    return n7;
  }
  var mi2 = {
    animationend: pi2(`Animation`, `AnimationEnd`),
    animationiteration: pi2(`Animation`, `AnimationIteration`),
    animationstart: pi2(`Animation`, `AnimationStart`),
    transitionrun: pi2(`Transition`, `TransitionRun`),
    transitionstart: pi2(`Transition`, `TransitionStart`),
    transitioncancel: pi2(`Transition`, `TransitionCancel`),
    transitionend: pi2(`Transition`, `TransitionEnd`)
  };
  var hi2 = {};
  var gi2 = {};
  if (zn2) {
    gi2 = document.createElement(`div`).style;
    if (!(`AnimationEvent` in window)) {
      delete mi2.animationend.animation;
      delete mi2.animationiteration.animation;
      delete mi2.animationstart.animation;
    }
    if (!(`TransitionEvent` in window)) {
      delete mi2.transitionend.transition;
    }
  }
  function _i2(e3) {
    if (hi2[e3]) {
      return hi2[e3];
    }
    if (!mi2[e3]) {
      return e3;
    }
    const t6 = mi2[e3];
    let n7;
    for (n7 in t6) {
      if (t6.hasOwnProperty(n7) && n7 in gi2) {
        return hi2[e3] = t6[n7];
      }
    }
    return e3;
  }
  var vi2 = _i2(`animationend`);
  var yi2 = _i2(`animationiteration`);
  var bi2 = _i2(`animationstart`);
  var xi2 = _i2(`transitionrun`);
  var Si2 = _i2(`transitionstart`);
  var Ci2 = _i2(`transitioncancel`);
  var wi2 = _i2(`transitionend`);
  var Ti2 = /* @__PURE__ */ new Map();
  var Ei2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Ei2.push(`scrollEnd`);
  function O(e3, t6) {
    Ti2.set(e3, t6);
    Qt2(t6, [e3]);
  }
  var Di2 = 0;
  function k2(e3, t6) {
    if (e3.name != null && e3.name !== `auto`) {
      return e3.name;
    }
    if (t6.autoName !== null) {
      return t6.autoName;
    }
    e3 = bd.identifierPrefix;
    const n7 = Di2++;
    e3 = `_` + e3 + `t_` + n7.toString(32) + `_`;
    return t6.autoName = e3;
  }
  function Oi2(e3) {
    if (e3 == null || typeof e3 == `string`) {
      return e3;
    }
    let t6 = null;
    const n7 = Od;
    if (n7 !== null) {
      for (let r5 = 0; r5 < n7.length; r5++) {
        const i4 = e3[n7[r5]];
        if (i4 != null) {
          if (i4 === `none`) {
            return `none`;
          }
          t6 = t6 == null ? i4 : t6 + (` ` + i4);
        }
      }
    }
    return t6 ?? e3.default;
  }
  function ki2(e3, t6) {
    e3 = Oi2(e3);
    t6 = Oi2(t6);
    if (t6 == null) {
      if (e3 === `auto`) {
        return null;
      }
      return e3;
    }
    if (t6 === `auto`) {
      return null;
    }
    return t6;
  }
  var Ai = typeof reportError == `function` ? reportError : (error) => {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      const t6 = new window.ErrorEvent(`error`, {
        bubbles: true,
        cancelable: true,
        message: typeof error == `object` && error && typeof error.message == `string` ? String(error.message) : String(error),
        error
      });
      if (!window.dispatchEvent(t6)) {
        return;
      }
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, error);
      return;
    }
    console.error(error);
  };
  var ji = [];
  var Mi = 0;
  var Ni = 0;
  function Pi2() {
    for (let e3 = Mi, t6 = Ni = Mi = 0; t6 < e3; ) {
      const n7 = ji[t6];
      ji[t6++] = null;
      const r5 = ji[t6];
      ji[t6++] = null;
      const i4 = ji[t6];
      ji[t6++] = null;
      const a4 = ji[t6];
      ji[t6++] = null;
      if (r5 !== null && i4 !== null) {
        const o3 = r5.pending;
        if (o3 === null) {
          i4.next = i4;
        } else {
          i4.next = o3.next;
          o3.next = i4;
        }
        r5.pending = i4;
      }
      if (a4 !== 0) {
        Ri2(n7, i4, a4);
      }
    }
  }
  function Fi2(e3, t6, n7, r5) {
    ji[Mi++] = e3;
    ji[Mi++] = t6;
    ji[Mi++] = n7;
    ji[Mi++] = r5;
    Ni |= r5;
    e3.lanes |= r5;
    e3 = e3.alternate;
    if (e3 !== null) {
      e3.lanes |= r5;
    }
  }
  function Ii2(e3, t6, n7, r5) {
    Fi2(e3, t6, n7, r5);
    return zi2(e3);
  }
  function Li2(e3, t6) {
    Fi2(e3, null, null, t6);
    return zi2(e3);
  }
  function Ri2(e3, t6, n7) {
    e3.lanes |= n7;
    let e_alternate = e3.alternate;
    if (e_alternate !== null) {
      e_alternate.lanes |= n7;
    }
    let i4 = false;
    for (var a4 = e3.return; a4 !== null; ) {
      a4.childLanes |= n7;
      e_alternate = a4.alternate;
      if (e_alternate !== null) {
        e_alternate.childLanes |= n7;
      }
      if (a4.tag === 22) {
        e3 = a4.stateNode;
        if (!(e3 === null || e3._visibility & 1)) {
          i4 = true;
        }
      }
      e3 = a4;
      a4 = a4.return;
    }
    if (e3.tag === 3) {
      a4 = e3.stateNode;
      if (i4 && t6 !== null) {
        i4 = 31 - ut2(n7);
        e3 = a4.hiddenUpdates;
        e_alternate = e3[i4];
        if (e_alternate === null) {
          e3[i4] = [t6];
        } else {
          e_alternate.push(t6);
        }
        t6.lane = n7 | 536870912;
      }
      return a4;
    }
    return null;
  }
  function zi2(e3) {
    if (kd > 50) {
      kd = 0;
      Ad = null;
      throw Error(a3(185));
    }
    for (let t6 = e3.return; t6 !== null; ) {
      e3 = t6;
      t6 = e3.return;
    }
    if (e3.tag === 3) {
      return e3.stateNode;
    }
    return null;
  }
  var Bi2 = {};
  function Vi2(e3, t6, n7, r5) {
    this.tag = e3;
    this.key = n7;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.refCleanup = this.ref = null;
    this.pendingProps = t6;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = r5;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Hi(e3, t6, n7, r5) {
    return new Vi2(e3, t6, n7, r5);
  }
  function Ui2(e3) {
    e3 = e3.prototype;
    return !(!e3 || !e3.isReactComponent);
  }
  function Wi2(e3, t6) {
    let e_alternate = e3.alternate;
    if (e_alternate === null) {
      e_alternate = Hi(e3.tag, t6, e3.key, e3.mode);
      e_alternate.elementType = e3.elementType;
      e_alternate.type = e3.type;
      e_alternate.stateNode = e3.stateNode;
      e_alternate.alternate = e3;
      e3.alternate = e_alternate;
    } else {
      e_alternate.pendingProps = t6;
      e_alternate.type = e3.type;
      e_alternate.flags = 0;
      e_alternate.subtreeFlags = 0;
      e_alternate.deletions = null;
    }
    e_alternate.flags = e3.flags & 1206910976;
    e_alternate.childLanes = e3.childLanes;
    e_alternate.lanes = e3.lanes;
    e_alternate.child = e3.child;
    e_alternate.memoizedProps = e3.memoizedProps;
    e_alternate.memoizedState = e3.memoizedState;
    e_alternate.updateQueue = e3.updateQueue;
    t6 = e3.dependencies;
    e_alternate.dependencies = t6 === null ? null : {
      lanes: t6.lanes,
      firstContext: t6.firstContext
    };
    e_alternate.sibling = e3.sibling;
    e_alternate.index = e3.index;
    e_alternate.ref = e3.ref;
    e_alternate.refCleanup = e3.refCleanup;
    return e_alternate;
  }
  function Gi2(e3, t6) {
    e3.flags &= 1206910978;
    const e_alternate = e3.alternate;
    if (e_alternate === null) {
      e3.childLanes = 0;
      e3.lanes = t6;
      e3.child = null;
      e3.subtreeFlags = 0;
      e3.memoizedProps = null;
      e3.memoizedState = null;
      e3.updateQueue = null;
      e3.dependencies = null;
      e3.stateNode = null;
    } else {
      e3.childLanes = e_alternate.childLanes;
      e3.lanes = e_alternate.lanes;
      e3.child = e_alternate.child;
      e3.subtreeFlags = 0;
      e3.deletions = null;
      e3.memoizedProps = e_alternate.memoizedProps;
      e3.memoizedState = e_alternate.memoizedState;
      e3.updateQueue = e_alternate.updateQueue;
      e3.type = e_alternate.type;
      t6 = e_alternate.dependencies;
      e3.dependencies = t6 === null ? null : {
        lanes: t6.lanes,
        firstContext: t6.firstContext
      };
    }
    return e3;
  }
  function Ki(e3, t6, n7, r5, i4, o3) {
    let s3 = 0;
    r5 = e3;
    if (typeof r5 == `function`) {
      if (Ui2(r5)) {
        s3 = 1;
      }
    } else if (typeof r5 == `string`) {
      s3 = qm(e3, n7, Me2.current) ? 26 : e3 === `html` || e3 === `head` || e3 === `body` ? 27 : 5;
    } else {
      a: switch (r5) {
        case _e2:
          e3 = Hi(31, n7, t6, i4);
          e3.elementType = _e2;
          e3.lanes = o3;
          return e3;
        case ce:
          return qi2(n7.children, i4, o3, t6);
        case le:
          s3 = 8;
          i4 |= 24;
          break;
        case ue:
          e3 = Hi(12, n7, t6, i4 | 2);
          e3.elementType = ue;
          e3.lanes = o3;
          return e3;
        case me2:
          e3 = Hi(13, n7, t6, i4);
          e3.elementType = me2;
          e3.lanes = o3;
          return e3;
        case he2:
          e3 = Hi(19, n7, t6, i4);
          e3.elementType = he2;
          e3.lanes = o3;
          return e3;
        case ve2:
        case be2:
          e3 = i4 | 32;
          e3 = Hi(30, n7, t6, e3);
          e3.elementType = be2;
          e3.lanes = o3;
          e3.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
          return e3;
        default:
          if (typeof r5 == `object` && r5) {
            switch (r5.$$typeof) {
              case fe:
                s3 = 10;
                break a;
              case de:
                s3 = 9;
                break a;
              case pe:
                s3 = 11;
                break a;
              case C2:
                s3 = 14;
                break a;
              case ge2:
                s3 = 16;
                r5 = null;
                break a;
            }
          }
          s3 = 29;
          n7 = Error(a3(130, e3 === null ? `null` : typeof e3, ``));
          r5 = null;
      }
    }
    t6 = Hi(s3, n7, t6, i4);
    t6.elementType = e3;
    t6.type = r5;
    t6.lanes = o3;
    return t6;
  }
  function qi2(e3, t6, n7, r5) {
    e3 = Hi(7, e3, r5, t6);
    e3.lanes = n7;
    return e3;
  }
  function Ji2(e3, mode, n7) {
    e3 = Hi(6, e3, null, mode);
    e3.lanes = n7;
    return e3;
  }
  function Yi2(e3) {
    const t6 = Hi(18, null, null, 0);
    t6.stateNode = e3;
    return t6;
  }
  function Xi(e3, t6, n7) {
    t6 = Hi(4, e3.children === null ? [] : e3.children, e3.key, t6);
    t6.lanes = n7;
    t6.stateNode = {
      containerInfo: e3.containerInfo,
      pendingChildren: null,
      implementation: e3.implementation
    };
    return t6;
  }
  var Zi2 = /* @__PURE__ */ new WeakMap();
  function Qi2(e3, source) {
    if (typeof e3 == `object` && e3) {
      const n7 = Zi2.get(e3);
      if (n7 === void 0) {
        source = {
          value: e3,
          source,
          stack: Ke2(source)
        };
        Zi2.set(e3, source);
        return source;
      }
      return n7;
    }
    return {
      value: e3,
      source,
      stack: Ke2(source)
    };
  }
  var A2 = [];
  var j = 0;
  var $i = null;
  var ea2 = 0;
  var ta2 = [];
  var na2 = 0;
  var ra2 = null;
  var ia2 = 1;
  var overflow = ``;
  function aa(e3, t6) {
    A2[j++] = ea2;
    A2[j++] = $i;
    $i = e3;
    ea2 = t6;
  }
  function N(e3, t6, n7) {
    ta2[na2++] = ia2;
    ta2[na2++] = overflow;
    ta2[na2++] = ra2;
    ra2 = e3;
    let r5 = ia2;
    e3 = overflow;
    let i4 = 32 - ut2(r5) - 1;
    r5 &= ~(1 << i4);
    n7 += 1;
    let a4 = 32 - ut2(t6) + i4;
    if (a4 > 30) {
      const o3 = i4 - i4 % 5;
      a4 = (r5 & (1 << o3) - 1).toString(32);
      r5 >>= o3;
      i4 -= o3;
      ia2 = 1 << 32 - ut2(t6) + i4 | n7 << i4 | r5;
      overflow = a4 + e3;
    } else {
      ia2 = 1 << a4 | n7 << i4 | r5;
      overflow = e3;
    }
  }
  function oa(e3) {
    if (e3.return !== null) {
      aa(e3, 1);
      N(e3, 1, 0);
    }
  }
  function sa(e3) {
    while (e3 === $i) {
      $i = A2[--j];
      A2[j] = null;
      ea2 = A2[--j];
      A2[j] = null;
    }
    while (e3 === ra2) {
      ra2 = ta2[--na2];
      ta2[na2] = null;
      overflow = ta2[--na2];
      ta2[na2] = null;
      ia2 = ta2[--na2];
      ta2[na2] = null;
    }
  }
  function ca(e3, t6) {
    ta2[na2++] = ia2;
    ta2[na2++] = overflow;
    ta2[na2++] = ra2;
    ia2 = t6.id;
    overflow = t6.overflow;
    ra2 = e3;
  }
  var la = null;
  var P2 = null;
  var F2 = false;
  var ua2 = null;
  var da2 = false;
  var fa2 = Error(a3(519));
  function pa(e3) {
    ya2(Qi2(Error(a3(418, arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e3));
    throw fa2;
  }
  function ma2(e3) {
    let e_stateNode = e3.stateNode;
    let e_type = e3.type;
    const e_memoizedProps = e3.memoizedProps;
    e_stateNode[Pt2] = e3;
    e_stateNode[Ft2] = e_memoizedProps;
    switch (e_type) {
      case `dialog`:
        Q(`cancel`, e_stateNode);
        Q(`close`, e_stateNode);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, e_stateNode);
        break;
      case `video`:
      case `audio`:
        for (e_type = 0; e_type < zf.length; e_type++) {
          Q(zf[e_type], e_stateNode);
        }
        break;
      case `source`:
        Q(`error`, e_stateNode);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, e_stateNode);
        Q(`load`, e_stateNode);
        break;
      case `details`:
        Q(`toggle`, e_stateNode);
        break;
      case `input`:
        Q(`invalid`, e_stateNode);
        _n2(e_stateNode, e_memoizedProps.value, e_memoizedProps.defaultValue, e_memoizedProps.checked, e_memoizedProps.defaultChecked, e_memoizedProps.type, e_memoizedProps.name, true);
        break;
      case `select`:
        Q(`invalid`, e_stateNode);
        break;
      case `textarea`:
        Q(`invalid`, e_stateNode);
        xn2(e_stateNode, e_memoizedProps.value, e_memoizedProps.defaultValue, e_memoizedProps.children);
    }
    e_type = e_memoizedProps.children;
    if (typeof e_type != `string` && typeof e_type != `number` && typeof e_type != `bigint` || e_stateNode.textContent === `` + e_type || e_memoizedProps.suppressHydrationWarning === true || ep(e_stateNode.textContent, e_type)) {
      if (e_memoizedProps.popover != null) {
        Q(`beforetoggle`, e_stateNode);
        Q(`toggle`, e_stateNode);
      }
      if (e_memoizedProps.onScroll != null) {
        Q(`scroll`, e_stateNode);
      }
      if (e_memoizedProps.onScrollEnd != null) {
        Q(`scrollend`, e_stateNode);
      }
      if (e_memoizedProps.onClick != null) {
        e_stateNode.onclick = unsuspend;
      }
      e_stateNode = true;
    } else {
      e_stateNode = false;
    }
    if (!e_stateNode) {
      pa(e3, true);
    }
  }
  function ha2(e3) {
    for (la = e3.return; la; ) {
      switch (la.tag) {
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
          la = la.return;
      }
    }
  }
  function ga2(e3) {
    if (e3 !== la) {
      return false;
    }
    if (!F2) {
      ha2(e3);
      F2 = true;
      return false;
    }
    let e_tag = e3.tag;
    let n7;
    if (n7 = e_tag !== 3 && e_tag !== 27) {
      if (n7 = e_tag === 5) {
        n7 = e3.type;
        n7 = n7 === `form` || n7 === `button` || pp(e3.type, e3.memoizedProps);
      }
      n7 = !n7;
    }
    if (n7 && P2) {
      pa(e3);
    }
    ha2(e3);
    if (e_tag === 13) {
      e3 = e3.memoizedState;
      e3 = e3 === null ? null : e3.dehydrated;
      if (!e3) {
        throw Error(a3(317));
      }
      P2 = dm(e3);
    } else if (e_tag === 31) {
      e3 = e3.memoizedState;
      e3 = e3 === null ? null : e3.dehydrated;
      if (!e3) {
        throw Error(a3(317));
      }
      P2 = dm(e3);
    } else {
      if (e_tag === 27) {
        e_tag = P2;
        if (Sp(e3.type)) {
          e3 = um;
          um = null;
          P2 = e3;
        } else {
          P2 = e_tag;
        }
      } else {
        P2 = la ? lm(e3.stateNode.nextSibling) : null;
      }
    }
    return true;
  }
  function _a() {
    la = null;
    P2 = null;
    F2 = false;
  }
  function va2() {
    const e3 = ua2;
    if (e3 !== null) {
      if (pd === null) {
        pd = e3;
      } else {
        pd.push(...e3);
      }
      ua2 = null;
    }
    return e3;
  }
  function ya2(e3) {
    if (ua2 === null) {
      ua2 = [e3];
    } else {
      ua2.push(e3);
    }
  }
  var ba2 = Ae2(null);
  var xa2 = null;
  var Sa2 = null;
  function Ca2(e3, t6, n7) {
    E2(ba2, t6._currentValue);
    t6._currentValue = n7;
  }
  function wa2(e3) {
    e3._currentValue = ba2.current;
    je2(ba2);
  }
  function I(e3, t6, n7) {
    while (e3 !== null) {
      const r5 = e3.alternate;
      if ((e3.childLanes & t6) === t6) {
        if (r5 !== null && (r5.childLanes & t6) !== t6) {
          r5.childLanes |= t6;
        }
      } else {
        e3.childLanes |= t6;
        if (r5 !== null) {
          r5.childLanes |= t6;
        }
      }
      if (e3 === n7) {
        break;
      }
      e3 = e3.return;
    }
  }
  function Ta2(e3, t6, n7, r5) {
    let e_child = e3.child;
    for (e_child !== null && (e_child.return = e3); e_child !== null; ) {
      let o3 = e_child.dependencies;
      if (o3 !== null) {
        var s3 = e_child.child;
        o3 = o3.firstContext;
        a: while (o3 !== null) {
          let c2 = o3;
          o3 = e_child;
          for (let l2 = 0; l2 < t6.length; l2++) {
            if (c2.context === t6[l2]) {
              o3.lanes |= n7;
              c2 = o3.alternate;
              if (c2 !== null) {
                c2.lanes |= n7;
              }
              I(o3.return, n7, e3);
              if (!r5) {
                s3 = null;
              }
              break a;
            }
          }
          o3 = c2.next;
        }
      } else if (e_child.tag === 18) {
        s3 = e_child.return;
        if (s3 === null) {
          throw Error(a3(341));
        }
        s3.lanes |= n7;
        o3 = s3.alternate;
        if (o3 !== null) {
          o3.lanes |= n7;
        }
        I(s3, n7, e3);
        s3 = null;
      } else {
        if (e_child.tag === 13 && e_child.memoizedState !== null && e_child.memoizedState.dehydrated === null) {
          e_child.lanes |= n7;
          s3 = e_child.alternate;
          if (s3 !== null) {
            s3.lanes |= n7;
          }
          I(e_child.return, n7, e3);
          s3 = e_child.child;
          s3 = s3 === null ? null : s3.sibling;
        } else {
          s3 = e_child.child;
        }
      }
      if (s3 !== null) {
        s3.return = e_child;
      } else {
        for (s3 = e_child; s3 !== null; ) {
          if (s3 === e3) {
            s3 = null;
            break;
          }
          e_child = s3.sibling;
          if (e_child !== null) {
            e_child.return = s3.return;
            s3 = e_child;
            break;
          }
          s3 = s3.return;
        }
      }
      e_child = s3;
    }
  }
  function Ea2(e3, t6, n7, r5) {
    e3 = null;
    for (let i4 = t6, o3 = false; i4 !== null; ) {
      if (!o3) {
        if (i4.flags & 524288) {
          o3 = true;
        } else if (i4.flags & 262144) {
          break;
        }
      }
      if (i4.tag === 10) {
        var s3 = i4.alternate;
        if (s3 === null) {
          throw Error(a3(387));
        }
        s3 = s3.memoizedProps;
        if (s3 !== null) {
          const c2 = i4.type;
          if (!$r2(i4.pendingProps.value, s3.value)) {
            if (e3 === null) {
              e3 = [c2];
            } else {
              e3.push(c2);
            }
          }
        }
      } else if (i4 === Fe2.current) {
        s3 = i4.alternate;
        if (s3 === null) {
          throw Error(a3(387));
        }
        if (s3.memoizedState.memoizedState !== i4.memoizedState.memoizedState) {
          if (e3 === null) {
            e3 = [sh];
          } else {
            e3.push(sh);
          }
        }
      }
      i4 = i4.return;
    }
    if (e3 !== null) {
      Ta2(t6, e3, n7, r5);
    }
    t6.flags |= 262144;
    return e3 !== null;
  }
  function Da2(e3) {
    for (e3 = e3.firstContext; e3 !== null; ) {
      if (!$r2(e3.context._currentValue, e3.memoizedValue)) {
        return true;
      }
      e3 = e3.next;
    }
    return false;
  }
  function Oa(e3) {
    xa2 = e3;
    Sa2 = null;
    e3 = e3.dependencies;
    if (e3 !== null) {
      e3.firstContext = null;
    }
  }
  function ka(e3) {
    return ja(xa2, e3);
  }
  function Aa2(e3, t6) {
    if (xa2 === null) {
      Oa(e3);
    }
    return ja(e3, t6);
  }
  function ja(e3, t6) {
    const t__currentValue = t6._currentValue;
    t6 = {
      context: t6,
      memoizedValue: t__currentValue,
      next: null
    };
    if (Sa2 === null) {
      if (e3 === null) {
        throw Error(a3(308));
      }
      Sa2 = t6;
      e3.dependencies = {
        lanes: 0,
        firstContext: t6
      };
      e3.flags |= 524288;
    } else {
      Sa2 = Sa2.next = t6;
    }
    return t__currentValue;
  }
  var Ma = typeof AbortController < `u` ? AbortController : function() {
    const e3 = [];
    const t6 = this.signal = {
      aborted: false,
      addEventListener: function(t7, n7) {
        e3.push(n7);
      }
    };
    this.abort = function() {
      t6.aborted = true;
      e3.forEach((e4) => e4());
    };
  };
  var t_unstable_scheduleCallback_1 = t5.unstable_scheduleCallback;
  var t_unstable_NormalPriority_1 = t5.unstable_NormalPriority;
  var L2 = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fa() {
    return {
      controller: new Ma(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ia2(e3) {
    e3.refCount--;
    if (e3.refCount === 0) {
      t_unstable_scheduleCallback_1(t_unstable_NormalPriority_1, function() {
        e3.controller.abort();
      });
    }
  }
  function La(e3, t6) {
    if (e3.pendingLanes & 4194048) {
      let n7 = e3.transitionTypes;
      if (n7 === null) {
        n7 = e3.transitionTypes = [];
      }
      for (e3 = 0; e3 < t6.length; e3++) {
        const r5 = t6[e3];
        if (n7.indexOf(r5) === -1) {
          n7.push(r5);
        }
      }
    }
  }
  var Ra = null;
  function za(e3) {
    const e_transitionTypes = e3.transitionTypes;
    e3.transitionTypes = null;
    return e_transitionTypes;
  }
  var Ba = null;
  var Va = 0;
  var Ha = 0;
  var Ua = null;
  function Wa(e3, t6) {
    if (Ba === null) {
      const n7 = Ba = [];
      Va = 0;
      Ha = Pf();
      Ua = {
        status: `pending`,
        value: void 0,
        then: function(e4) {
          n7.push(e4);
        }
      };
    }
    Va++;
    t6.then(Ga, Ga);
    return t6;
  }
  function Ga() {
    if (--Va === 0 && (Ra = null, Ba !== null)) {
      if (Ua !== null) {
        Ua.status = `fulfilled`;
      }
      const e3 = Ba;
      Ba = null;
      Ha = 0;
      Ua = null;
      for (let t6 = 0; t6 < e3.length; t6++) {
        e3[t6]();
      }
    }
  }
  function Ka(e3, t6) {
    const n7 = [];
    const r5 = {
      status: `pending`,
      value: null,
      reason: null,
      then: function(e4) {
        n7.push(e4);
      }
    };
    e3.then(() => {
      r5.status = `fulfilled`;
      r5.value = t6;
      for (let e4 = 0; e4 < n7.length; e4++) {
        n7[e4](t6);
      }
    }, (e4) => {
      r5.status = `rejected`;
      r5.reason = e4;
      for (e4 = 0; e4 < n7.length; e4++) {
        n7[e4](void 0);
      }
    });
    return r5;
  }
  var r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
  r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = function(e3, t6) {
    gd = t_unstable_now();
    if (typeof t6 == `object` && t6 && typeof t6.then == `function`) {
      Wa(e3, t6);
    }
    if (Ra !== null) {
      for (var n7 = bf; n7 !== null; ) {
        La(n7, Ra);
        n7 = n7.next;
      }
    }
    n7 = e3.types;
    if (n7 !== null) {
      for (var r5 = bf; r5 !== null; ) {
        La(r5, n7);
        r5 = r5.next;
      }
      if (Ha !== 0) {
        r5 = Ra;
        if (r5 === null) {
          r5 = Ra = [];
        }
        for (const a4 of n7) {
          if (r5.indexOf(a4) === -1) {
            r5.push(a4);
          }
        }
      }
    }
    if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S !== null) {
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S(e3, t6);
    }
  };
  var Ja = Ae2(null);
  function Ya() {
    const Ja_current = Ja.current;
    if (Ja_current === null) {
      return K.pooledCache;
    }
    return Ja_current;
  }
  function Xa(e3, t6) {
    if (t6 === null) {
      E2(Ja, Ja.current);
    } else {
      E2(Ja, t6.pool);
    }
  }
  function Za() {
    const pool = Ya();
    if (pool === null) {
      return null;
    }
    return {
      parent: L2._currentValue,
      pool
    };
  }
  var Qa = Error(a3(460));
  var $a2 = Error(a3(474));
  var eo2 = Error(a3(542));
  var to2 = {
    then: function() {
    }
  };
  function no2(e3) {
    e3 = e3.status;
    return e3 === `fulfilled` || e3 === `rejected`;
  }
  function ro2(e3, t6, n7) {
    n7 = e3[n7];
    if (n7 === void 0) {
      e3.push(t6);
    } else if (n7 !== t6) {
      t6.then(unsuspend, unsuspend);
      t6 = n7;
    }
    switch (t6.status) {
      case `fulfilled`:
        return t6.value;
      case `rejected`:
        e3 = t6.reason;
        so2(e3);
        throw e3 === void 0 && !(`reason` in t6) ? Error(a3(600)) : e3;
      default:
        if (typeof t6.status == `string`) {
          t6.then(unsuspend, unsuspend);
        } else {
          e3 = K;
          if (e3 !== null && e3.shellSuspendCounter > 100) {
            throw Error(a3(482));
          }
          e3 = t6;
          e3.status = `pending`;
          e3.then((e4) => {
            if (t6.status === `pending`) {
              const n8 = t6;
              n8.status = `fulfilled`;
              n8.value = e4;
            }
          }, (e4) => {
            if (t6.status === `pending`) {
              const n8 = t6;
              n8.status = `rejected`;
              n8.reason = e4;
            }
          });
        }
        switch (t6.status) {
          case `fulfilled`:
            return t6.value;
          case `rejected`:
            e3 = t6.reason;
            so2(e3);
            throw e3;
        }
        ao2 = t6;
        throw Qa;
    }
  }
  function io(e3) {
    try {
      const t6 = e3._init;
      return t6(e3._payload);
    } catch (error) {
      throw typeof error == `object` && error && typeof error.then == `function` ? (ao2 = error, Qa) : error;
    }
  }
  var ao2 = null;
  function oo2() {
    if (ao2 === null) {
      throw Error(a3(459));
    }
    const e3 = ao2;
    ao2 = null;
    return e3;
  }
  function so2(e3) {
    if (e3 === Qa || e3 === eo2) {
      throw Error(a3(483));
    }
  }
  var co2 = null;
  var lo2 = 0;
  function uo2(e3) {
    const t6 = lo2;
    lo2 += 1;
    if (co2 === null) {
      co2 = [];
    }
    return ro2(co2, e3, t6);
  }
  function fo2(e3, t6) {
    t6 = t6.props.ref;
    e3.ref = t6 === void 0 ? null : t6;
  }
  function po2(e3, t6) {
    throw t6.$$typeof === ae ? Error(a3(525)) : (e3 = Object.prototype.toString.call(t6), Error(a3(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t6).join(`, `) + `}` : e3)));
  }
  function mo2(e3) {
    function t6(t7, n8) {
      if (e3) {
        const r6 = t7.deletions;
        if (r6 === null) {
          t7.deletions = [n8];
          t7.flags |= 16;
        } else {
          r6.push(n8);
        }
      }
    }
    function n7(n8, r6) {
      if (!e3) {
        return null;
      }
      while (r6 !== null) {
        t6(n8, r6);
        r6 = r6.sibling;
      }
      return null;
    }
    function r5(e4) {
      const t7 = /* @__PURE__ */ new Map();
      while (e4 !== null) {
        if (e4.key === null) {
          t7.set(e4.index, e4);
        } else {
          t7.set(e4.key, e4);
        }
        e4 = e4.sibling;
      }
      return t7;
    }
    function i4(e4, t7) {
      e4 = Wi2(e4, t7);
      e4.index = 0;
      e4.sibling = null;
      return e4;
    }
    function o3(t7, n8, r6) {
      t7.index = r6;
      if (e3) {
        r6 = t7.alternate;
        if (r6 === null) {
          return t7.flags |= 134217730, n8;
        }
        return r6 = r6.index, r6 < n8 ? (t7.flags |= 2, n8) : r6;
      }
      t7.flags |= 1048576;
      return n8;
    }
    function s3(t7) {
      if (e3 && t7.alternate === null) {
        t7.flags |= 134217730;
      }
      return t7;
    }
    function c2(e4, t7, n8, r6) {
      if (t7 === null || t7.tag !== 6) {
        t7 = Ji2(n8, e4.mode, r6);
        t7.return = e4;
        return t7;
      }
      t7 = i4(t7, n8);
      t7.return = e4;
      return t7;
    }
    function l2(e4, t7, n8, r6) {
      const n_type = n8.type;
      if (n_type === ce) {
        e4 = d2(e4, t7, n8.props.children, r6, n8.key);
        fo2(e4, n8);
        return e4;
      }
      if (t7 !== null && (t7.elementType === n_type || typeof n_type == `object` && n_type && n_type.$$typeof === ge2 && io(n_type) === t7.type)) {
        t7 = i4(t7, n8.props);
        fo2(t7, n8);
        t7.return = e4;
        return t7;
      }
      t7 = Ki(n8.type, n8.key, n8.props, null, e4.mode, r6);
      fo2(t7, n8);
      t7.return = e4;
      return t7;
    }
    function u2(e4, t7, n8, r6) {
      if (t7 === null || t7.tag !== 4 || t7.stateNode.containerInfo !== n8.containerInfo || t7.stateNode.implementation !== n8.implementation) {
        t7 = Xi(n8, e4.mode, r6);
        t7.return = e4;
        return t7;
      }
      t7 = i4(t7, n8.children || []);
      t7.return = e4;
      return t7;
    }
    function d2(e4, t7, n8, r6, a4) {
      if (t7 === null || t7.tag !== 7) {
        t7 = qi2(n8, e4.mode, r6, a4);
        t7.return = e4;
        return t7;
      }
      t7 = i4(t7, n8);
      t7.return = e4;
      return t7;
    }
    function f2(e4, t7, n8) {
      if (typeof t7 == `string` && t7 !== `` || typeof t7 == `number` || typeof t7 == `bigint`) {
        t7 = Ji2(`` + t7, e4.mode, n8);
        t7.return = e4;
        return t7;
      }
      if (typeof t7 == `object` && t7) {
        switch (t7.$$typeof) {
          case oe:
            n8 = Ki(t7.type, t7.key, t7.props, null, e4.mode, n8);
            fo2(n8, t7);
            n8.return = e4;
            return n8;
          case se:
            t7 = Xi(t7, e4.mode, n8);
            t7.return = e4;
            return t7;
          case ge2:
            t7 = io(t7);
            return f2(e4, t7, n8);
        }
        if (Array_isArray(t7) || Ce2(t7)) {
          t7 = qi2(t7, e4.mode, n8, null);
          t7.return = e4;
          return t7;
        }
        if (typeof t7.then == `function`) {
          return f2(e4, uo2(t7), n8);
        }
        if (t7.$$typeof === fe) {
          return f2(e4, Aa2(e4, t7), n8);
        }
        po2(e4, t7);
      }
      return null;
    }
    function p2(e4, t7, n8, r6) {
      const i5 = t7 === null ? null : t7.key;
      if (typeof n8 == `string` && n8 !== `` || typeof n8 == `number` || typeof n8 == `bigint`) {
        if (i5 === null) {
          return c2(e4, t7, `` + n8, r6);
        }
        return null;
      }
      if (typeof n8 == `object` && n8) {
        switch (n8.$$typeof) {
          case oe:
            if (n8.key === i5) {
              return l2(e4, t7, n8, r6);
            }
            return null;
          case se:
            if (n8.key === i5) {
              return u2(e4, t7, n8, r6);
            }
            return null;
          case ge2:
            n8 = io(n8);
            return p2(e4, t7, n8, r6);
        }
        if (Array_isArray(n8) || Ce2(n8)) {
          if (i5 === null) {
            return d2(e4, t7, n8, r6, null);
          }
          return null;
        }
        if (typeof n8.then == `function`) {
          return p2(e4, t7, uo2(n8), r6);
        }
        if (n8.$$typeof === fe) {
          return p2(e4, t7, Aa2(e4, n8), r6);
        }
        po2(e4, n8);
      }
      return null;
    }
    function m3(e4, t7, n8, r6, i5) {
      if (typeof r6 == `string` && r6 !== `` || typeof r6 == `number` || typeof r6 == `bigint`) {
        e4 = e4.get(n8) || null;
        return c2(t7, e4, `` + r6, i5);
      }
      if (typeof r6 == `object` && r6) {
        switch (r6.$$typeof) {
          case oe:
            e4 = e4.get(r6.key === null ? n8 : r6.key) || null;
            return l2(t7, e4, r6, i5);
          case se:
            e4 = e4.get(r6.key === null ? n8 : r6.key) || null;
            return u2(t7, e4, r6, i5);
          case ge2:
            r6 = io(r6);
            return m3(e4, t7, n8, r6, i5);
        }
        if (Array_isArray(r6) || Ce2(r6)) {
          e4 = e4.get(n8) || null;
          return d2(t7, e4, r6, i5, null);
        }
        if (typeof r6.then == `function`) {
          return m3(e4, t7, n8, uo2(r6), i5);
        }
        if (r6.$$typeof === fe) {
          return m3(e4, t7, n8, Aa2(t7, r6), i5);
        }
        po2(t7, r6);
      }
      return null;
    }
    function h2(i5, a4, s4, c3) {
      let l3 = null;
      let u3 = null;
      for (var d3 = a4, h3 = a4 = 0, g4 = null; d3 !== null && h3 < s4.length; h3++) {
        if (d3.index > h3) {
          g4 = d3;
          d3 = null;
        } else {
          g4 = d3.sibling;
        }
        var _3 = p2(i5, d3, s4[h3], c3);
        if (_3 === null) {
          if (d3 === null) {
            d3 = g4;
          }
          break;
        }
        if (e3 && d3 && _3.alternate === null) {
          t6(i5, d3);
        }
        a4 = o3(_3, a4, h3);
        if (u3 === null) {
          l3 = _3;
        } else {
          u3.sibling = _3;
        }
        u3 = _3;
        d3 = g4;
      }
      if (h3 === s4.length) {
        n7(i5, d3);
        if (F2) {
          aa(i5, h3);
        }
        return l3;
      }
      if (d3 === null) {
        for (; h3 < s4.length; h3++) {
          d3 = f2(i5, s4[h3], c3);
          if (d3 !== null) {
            a4 = o3(d3, a4, h3);
            if (u3 === null) {
              l3 = d3;
            } else {
              u3.sibling = d3;
            }
            u3 = d3;
          }
        }
        if (F2) {
          aa(i5, h3);
        }
        return l3;
      }
      for (d3 = r5(d3); h3 < s4.length; h3++) {
        g4 = m3(d3, i5, h3, s4[h3], c3);
        if (g4 !== null) {
          if (e3) {
            _3 = g4.alternate;
            if (_3 !== null) {
              d3.delete(_3.key === null ? h3 : _3.key);
            }
          }
          a4 = o3(g4, a4, h3);
          if (u3 === null) {
            l3 = g4;
          } else {
            u3.sibling = g4;
          }
          u3 = g4;
        }
      }
      if (e3) {
        d3.forEach((e4) => t6(i5, e4));
      }
      if (F2) {
        aa(i5, h3);
      }
      return l3;
    }
    function g3(i5, s4, c3, l3) {
      if (c3 == null) {
        throw Error(a3(151));
      }
      let u3 = null;
      let d3 = null;
      for (var h3 = s4, g4 = s4 = 0, _3 = null, v3 = c3.next(); h3 !== null && !v3.done; g4++, v3 = c3.next()) {
        if (h3.index > g4) {
          _3 = h3;
          h3 = null;
        } else {
          _3 = h3.sibling;
        }
        const y3 = p2(i5, h3, v3.value, l3);
        if (y3 === null) {
          if (h3 === null) {
            h3 = _3;
          }
          break;
        }
        if (e3 && h3 && y3.alternate === null) {
          t6(i5, h3);
        }
        s4 = o3(y3, s4, g4);
        if (d3 === null) {
          u3 = y3;
        } else {
          d3.sibling = y3;
        }
        d3 = y3;
        h3 = _3;
      }
      if (v3.done) {
        n7(i5, h3);
        if (F2) {
          aa(i5, g4);
        }
        return u3;
      }
      if (h3 === null) {
        for (; !v3.done; g4++, v3 = c3.next()) {
          v3 = f2(i5, v3.value, l3);
          if (v3 !== null) {
            s4 = o3(v3, s4, g4);
            if (d3 === null) {
              u3 = v3;
            } else {
              d3.sibling = v3;
            }
            d3 = v3;
          }
        }
        if (F2) {
          aa(i5, g4);
        }
        return u3;
      }
      for (h3 = r5(h3); !v3.done; g4++, v3 = c3.next()) {
        v3 = m3(h3, i5, g4, v3.value, l3);
        if (v3 !== null) {
          if (e3) {
            _3 = v3.alternate;
            if (_3 !== null) {
              h3.delete(_3.key === null ? g4 : _3.key);
            }
          }
          s4 = o3(v3, s4, g4);
          if (d3 === null) {
            u3 = v3;
          } else {
            d3.sibling = v3;
          }
          d3 = v3;
        }
      }
      if (e3) {
        h3.forEach((e4) => t6(i5, e4));
      }
      if (F2) {
        aa(i5, g4);
      }
      return u3;
    }
    function _2(e4, r6, o4, c3) {
      if (typeof o4 == `object` && o4 && o4.type === ce && o4.key === null && o4.props.ref === void 0) {
        o4 = o4.props.children;
      }
      if (typeof o4 == `object` && o4) {
        switch (o4.$$typeof) {
          case oe:
            a: {
              var l3 = o4.key;
              while (r6 !== null) {
                if (r6.key === l3) {
                  l3 = o4.type;
                  if (l3 === ce) {
                    if (r6.tag === 7) {
                      n7(e4, r6.sibling);
                      c3 = i4(r6, o4.props.children);
                      fo2(c3, o4);
                      c3.return = e4;
                      e4 = c3;
                      break a;
                    }
                  } else if (r6.elementType === l3 || typeof l3 == `object` && l3 && l3.$$typeof === ge2 && io(l3) === r6.type) {
                    n7(e4, r6.sibling);
                    c3 = i4(r6, o4.props);
                    fo2(c3, o4);
                    c3.return = e4;
                    e4 = c3;
                    break a;
                  }
                  n7(e4, r6);
                  break;
                }
                t6(e4, r6);
                r6 = r6.sibling;
              }
              if (o4.type === ce) {
                c3 = qi2(o4.props.children, e4.mode, c3, o4.key);
                fo2(c3, o4);
                c3.return = e4;
                e4 = c3;
              } else {
                c3 = Ki(o4.type, o4.key, o4.props, null, e4.mode, c3);
                fo2(c3, o4);
                c3.return = e4;
                e4 = c3;
              }
            }
            return s3(e4);
          case se:
            a: {
              for (l3 = o4.key; r6 !== null; ) {
                if (r6.key === l3) {
                  if (r6.tag === 4 && r6.stateNode.containerInfo === o4.containerInfo && r6.stateNode.implementation === o4.implementation) {
                    n7(e4, r6.sibling);
                    c3 = i4(r6, o4.children || []);
                    c3.return = e4;
                    e4 = c3;
                    break a;
                  }
                  n7(e4, r6);
                  break;
                }
                t6(e4, r6);
                r6 = r6.sibling;
              }
              c3 = Xi(o4, e4.mode, c3);
              c3.return = e4;
              e4 = c3;
            }
            return s3(e4);
          case ge2:
            o4 = io(o4);
            return _2(e4, r6, o4, c3);
        }
        if (Array_isArray(o4)) {
          return h2(e4, r6, o4, c3);
        }
        if (Ce2(o4)) {
          l3 = Ce2(o4);
          if (typeof l3 != `function`) {
            throw Error(a3(150));
          }
          o4 = l3.call(o4);
          return g3(e4, r6, o4, c3);
        }
        if (typeof o4.then == `function`) {
          return _2(e4, r6, uo2(o4), c3);
        }
        if (o4.$$typeof === fe) {
          return _2(e4, r6, Aa2(e4, o4), c3);
        }
        po2(e4, o4);
      }
      if (typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint`) {
        o4 = `` + o4;
        if (r6 !== null && r6.tag === 6) {
          n7(e4, r6.sibling);
          c3 = i4(r6, o4);
          c3.return = e4;
          e4 = c3;
        } else {
          n7(e4, r6);
          c3 = Ji2(o4, e4.mode, c3);
          c3.return = e4;
          e4 = c3;
        }
        return s3(e4);
      }
      return n7(e4, r6);
    }
    return function(e4, t7, n8, r6) {
      try {
        lo2 = 0;
        const i5 = _2(e4, t7, n8, r6);
        co2 = null;
        return i5;
      } catch (error) {
        if (error === Qa || error === eo2) {
          throw error;
        }
        const a4 = Hi(29, error, null, e4.mode);
        a4.lanes = r6;
        a4.return = e4;
        return a4;
      }
    };
  }
  var ho2 = mo2(true);
  var go2 = mo2(false);
  var _o2 = false;
  function vo2(e3) {
    e3.updateQueue = {
      baseState: e3.memoizedState,
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
  function yo2(e3, t6) {
    e3 = e3.updateQueue;
    if (t6.updateQueue === e3) {
      t6.updateQueue = {
        baseState: e3.baseState,
        firstBaseUpdate: e3.firstBaseUpdate,
        lastBaseUpdate: e3.lastBaseUpdate,
        shared: e3.shared,
        callbacks: null
      };
    }
  }
  function bo2(lane) {
    return {
      lane,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function xo2(e3, t6, n7) {
    let e_updateQueue = e3.updateQueue;
    if (e_updateQueue === null) {
      return null;
    }
    e_updateQueue = e_updateQueue.shared;
    if (G & 2) {
      const i4 = e_updateQueue.pending;
      if (i4 === null) {
        t6.next = t6;
      } else {
        t6.next = i4.next;
        i4.next = t6;
      }
      e_updateQueue.pending = t6;
      t6 = zi2(e3);
      Ri2(e3, null, n7);
      return t6;
    }
    Fi2(e3, e_updateQueue, t6, n7);
    return zi2(e3);
  }
  function So2(e3, t6, n7) {
    t6 = t6.updateQueue;
    if (t6 !== null && (t6 = t6.shared, n7 & 4194048)) {
      let r5 = t6.lanes;
      r5 &= e3.pendingLanes;
      n7 |= r5;
      t6.lanes = n7;
      Dt2(e3, n7);
    }
  }
  function Co2(e3, t6) {
    let e_updateQueue = e3.updateQueue;
    let e_alternate = e3.alternate;
    if (e_alternate !== null && (e_alternate = e_alternate.updateQueue, e_updateQueue === e_alternate)) {
      let firstBaseUpdate = null;
      let lastBaseUpdate = null;
      e_updateQueue = e_updateQueue.firstBaseUpdate;
      if (e_updateQueue !== null) {
        do {
          const o3 = {
            lane: e_updateQueue.lane,
            tag: e_updateQueue.tag,
            payload: e_updateQueue.payload,
            callback: null,
            next: null
          };
          if (lastBaseUpdate === null) {
            lastBaseUpdate = o3;
            firstBaseUpdate = o3;
          } else {
            lastBaseUpdate = lastBaseUpdate.next = o3;
          }
          e_updateQueue = e_updateQueue.next;
        } while (e_updateQueue !== null);
        if (lastBaseUpdate === null) {
          lastBaseUpdate = t6;
          firstBaseUpdate = t6;
        } else {
          lastBaseUpdate = lastBaseUpdate.next = t6;
        }
      } else {
        lastBaseUpdate = t6;
        firstBaseUpdate = t6;
      }
      e_updateQueue = {
        baseState: e_alternate.baseState,
        firstBaseUpdate,
        lastBaseUpdate,
        shared: e_alternate.shared,
        callbacks: e_alternate.callbacks
      };
      e3.updateQueue = e_updateQueue;
      return;
    }
    e3 = e_updateQueue.lastBaseUpdate;
    if (e3 === null) {
      e_updateQueue.firstBaseUpdate = t6;
    } else {
      e3.next = t6;
    }
    e_updateQueue.lastBaseUpdate = t6;
  }
  var wo2 = false;
  function To() {
    if (wo2) {
      const e3 = Ua;
      if (e3 !== null) {
        throw e3;
      }
    }
  }
  function Eo2(e3, t6, n7, r5) {
    wo2 = false;
    const e_updateQueue = e3.updateQueue;
    _o2 = false;
    let i_firstBaseUpdate = e_updateQueue.firstBaseUpdate;
    let i_lastBaseUpdate = e_updateQueue.lastBaseUpdate;
    let pending = e_updateQueue.shared.pending;
    if (pending !== null) {
      e_updateQueue.shared.pending = null;
      var c2 = pending;
      var l2 = c2.next;
      c2.next = null;
      if (i_lastBaseUpdate === null) {
        i_firstBaseUpdate = l2;
      } else {
        i_lastBaseUpdate.next = l2;
      }
      i_lastBaseUpdate = c2;
      var u2 = e3.alternate;
      if (u2 !== null) {
        u2 = u2.updateQueue;
        pending = u2.lastBaseUpdate;
        if (pending !== i_lastBaseUpdate) {
          if (pending === null) {
            u2.firstBaseUpdate = l2;
          } else {
            pending.next = l2;
          }
          u2.lastBaseUpdate = c2;
        }
      }
    }
    if (i_firstBaseUpdate !== null) {
      let d2 = e_updateQueue.baseState;
      i_lastBaseUpdate = 0;
      c2 = null;
      l2 = null;
      u2 = null;
      pending = i_firstBaseUpdate;
      do {
        let f2 = pending.lane & -536870913;
        let p2 = f2 !== pending.lane;
        if (p2 ? (J & f2) === f2 : (r5 & f2) === f2) {
          if (f2 !== 0 && f2 === Ha) {
            wo2 = true;
          }
          if (u2 !== null) {
            u2 = u2.next = {
              lane: 0,
              tag: pending.tag,
              payload: pending.payload,
              callback: null,
              next: null
            };
          }
          a: {
            let m3 = e3;
            const h2 = pending;
            f2 = t6;
            const g3 = n7;
            switch (h2.tag) {
              case 1:
                m3 = h2.payload;
                if (typeof m3 == `function`) {
                  d2 = m3.call(g3, d2, f2);
                  break a;
                }
                d2 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                m3 = h2.payload;
                f2 = typeof m3 == `function` ? m3.call(g3, d2, f2) : m3;
                if (f2 == null) {
                  break a;
                }
                d2 = Object_assign({}, d2, f2);
                break a;
              case 2:
                _o2 = true;
            }
          }
          f2 = pending.callback;
          if (f2 !== null) {
            e3.flags |= 64;
            if (p2) {
              e3.flags |= 8192;
            }
            p2 = e_updateQueue.callbacks;
            if (p2 === null) {
              e_updateQueue.callbacks = [f2];
            } else {
              p2.push(f2);
            }
          }
        } else {
          p2 = {
            lane: f2,
            tag: pending.tag,
            payload: pending.payload,
            callback: pending.callback,
            next: null
          };
          if (u2 === null) {
            u2 = p2;
            l2 = p2;
            c2 = d2;
          } else {
            u2 = u2.next = p2;
          }
          i_lastBaseUpdate |= f2;
        }
        pending = pending.next;
        if (pending === null) {
          pending = e_updateQueue.shared.pending;
          if (pending === null) {
            break;
          }
          p2 = pending;
          pending = p2.next;
          p2.next = null;
          e_updateQueue.lastBaseUpdate = p2;
          e_updateQueue.shared.pending = null;
        }
      } while (1);
      if (u2 === null) {
        c2 = d2;
      }
      e_updateQueue.baseState = c2;
      e_updateQueue.firstBaseUpdate = l2;
      e_updateQueue.lastBaseUpdate = u2;
      if (i_firstBaseUpdate === null) {
        e_updateQueue.shared.lanes = 0;
      }
      sd |= i_lastBaseUpdate;
      e3.lanes = i_lastBaseUpdate;
      e3.memoizedState = d2;
    }
  }
  function Do(e3, t6) {
    if (typeof e3 != `function`) {
      throw Error(a3(191, e3));
    }
    e3.call(t6);
  }
  function Oo(e3, t6) {
    const e_callbacks = e3.callbacks;
    if (e_callbacks !== null) {
      e3.callbacks = null;
      for (e3 = 0; e3 < e_callbacks.length; e3++) {
        Do(e_callbacks[e3], t6);
      }
    }
  }
  var ko = Ae2(null);
  var Ao = Ae2(0);
  function jo(e3, t6) {
    e3 = ad;
    E2(Ao, e3);
    E2(ko, t6);
    ad = e3 | t6.baseLanes;
  }
  function Mo() {
    E2(Ao, ad);
    E2(ko, ko.current);
  }
  function No() {
    ad = Ao.current;
    je2(ko);
    je2(Ao);
  }
  var Po = Ae2(null);
  var Fo = null;
  function Io2(e3) {
    const e_alternate = e3.alternate;
    E2(Vo2, Vo2.current & 1);
    E2(Po, e3);
    if (Fo === null && (e_alternate === null || ko.current !== null || e_alternate.memoizedState !== null)) {
      Fo = e3;
    }
  }
  function Lo2(e3) {
    E2(Vo2, Vo2.current);
    E2(Po, e3);
    if (Fo === null) {
      Fo = e3;
    }
  }
  function Ro2(e3) {
    if (e3.tag === 22) {
      E2(Vo2, Vo2.current);
      E2(Po, e3);
      if (Fo === null) {
        Fo = e3;
      }
    } else {
      zo2();
    }
  }
  function zo2() {
    E2(Vo2, Vo2.current);
    E2(Po, Po.current);
  }
  function Bo2(e3) {
    je2(Po);
    if (Fo === e3) {
      Fo = null;
    }
    je2(Vo2);
  }
  var Vo2 = Ae2(0);
  function Ho2(e3, t6) {
    E2(Po, Po.current);
    E2(Vo2, t6);
  }
  function Uo2(e3) {
    je2(Vo2);
    je2(Po);
    if (Fo === e3) {
      Fo = null;
    }
  }
  function Wo2(e3) {
    for (let t6 = e3; t6 !== null; ) {
      if (t6.tag === 13) {
        let n7 = t6.memoizedState;
        if (n7 !== null && (n7 = n7.dehydrated, n7 === null || om(n7) || sm(n7))) {
          return t6;
        }
      } else if (t6.tag === 19 && t6.memoizedProps.revealOrder !== `independent`) {
        if (t6.flags & 128) {
          return t6;
        }
      } else if (t6.child !== null) {
        t6.child.return = t6;
        t6 = t6.child;
        continue;
      }
      if (t6 === e3) {
        break;
      }
      while (t6.sibling === null) {
        if (t6.return === null || t6.return === e3) {
          return null;
        }
        t6 = t6.return;
      }
      t6.sibling.return = t6.return;
      t6 = t6.sibling;
    }
    return null;
  }
  var Go2 = 0;
  var R2 = null;
  var z2 = null;
  var Ko2 = null;
  var qo = false;
  var Jo = false;
  var Yo = false;
  var Xo2 = 0;
  var Zo = 0;
  var Qo2 = null;
  var $o = 0;
  function B() {
    throw Error(a3(321));
  }
  function es(e3, t6) {
    if (t6 === null) {
      return false;
    }
    for (let n7 = 0; n7 < t6.length && n7 < e3.length; n7++) {
      if (!$r2(e3[n7], t6[n7])) {
        return false;
      }
    }
    return true;
  }
  function ts(e3, t6, n7, r5, i4, a4) {
    Go2 = a4;
    R2 = t6;
    t6.memoizedState = null;
    t6.updateQueue = null;
    t6.lanes = 0;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = e3 === null || e3.memoizedState === null ? _c : vc;
    Yo = false;
    a4 = n7(r5, i4);
    Yo = false;
    if (Jo) {
      a4 = rs(t6, n7, r5, i4);
    }
    ns(e3);
    return a4;
  }
  function ns(e3) {
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = gc;
    const t6 = z2 !== null && z2.next !== null;
    Go2 = 0;
    R2 = null;
    z2 = null;
    Ko2 = null;
    qo = false;
    Zo = 0;
    Qo2 = null;
    if (t6) {
      throw Error(a3(300));
    }
    if (!(e3 === null || Fc2)) {
      e3 = e3.dependencies;
      if (e3 !== null && Da2(e3)) {
        Fc2 = true;
      }
    }
  }
  function rs(e3, t6, n7, r5) {
    R2 = e3;
    let i4 = 0;
    do {
      if (Jo) {
        Qo2 = null;
      }
      Zo = 0;
      Jo = false;
      if (i4 >= 25) {
        throw Error(a3(301));
      }
      i4 += 1;
      z2 = null;
      Ko2 = null;
      if (e3.updateQueue != null) {
        var o3 = e3.updateQueue;
        o3.lastEffect = null;
        o3.events = null;
        o3.stores = null;
        if (o3.memoCache != null) {
          o3.memoCache.index = 0;
        }
      }
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = yc;
      o3 = t6(n7, r5);
    } while (Jo);
    return o3;
  }
  function useIs() {
    let r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
    let t6 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H.useState()[0];
    t6 = typeof t6.then == `function` ? us2(t6) : t6;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H.useState()[0];
    if ((z2 === null ? null : z2.memoizedState) !== r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H) {
      R2.flags |= 1024;
    }
    return t6;
  }
  function as() {
    const e3 = Xo2 !== 0;
    Xo2 = 0;
    return e3;
  }
  function os(e3, t6, n7) {
    t6.updateQueue = e3.updateQueue;
    t6.flags &= -2053;
    e3.lanes &= ~n7;
  }
  function ss2(e3) {
    if (qo) {
      for (e3 = e3.memoizedState; e3 !== null; ) {
        const t6 = e3.queue;
        if (t6 !== null) {
          t6.pending = null;
        }
        e3 = e3.next;
      }
      qo = false;
    }
    Go2 = 0;
    R2 = null;
    z2 = null;
    Ko2 = null;
    Jo = false;
    Xo2 = 0;
    Zo = 0;
    Qo2 = null;
  }
  function cs2() {
    const e3 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (Ko2 === null) {
      R2.memoizedState = Ko2 = e3;
    } else {
      Ko2 = Ko2.next = e3;
    }
    return Ko2;
  }
  function V2() {
    if (z2 === null) {
      var e3 = R2.alternate;
      e3 = e3 === null ? null : e3.memoizedState;
    } else {
      e3 = z2.next;
    }
    const t6 = Ko2 === null ? R2.memoizedState : Ko2.next;
    if (t6 !== null) {
      Ko2 = t6;
      z2 = e3;
    } else {
      if (e3 === null) {
        throw R2.alternate === null ? Error(a3(467)) : Error(a3(310));
      }
      z2 = e3;
      e3 = {
        memoizedState: z2.memoizedState,
        baseState: z2.baseState,
        baseQueue: z2.baseQueue,
        queue: z2.queue,
        next: null
      };
      if (Ko2 === null) {
        R2.memoizedState = Ko2 = e3;
      } else {
        Ko2 = Ko2.next = e3;
      }
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
  function us2(e3) {
    let t6 = Zo;
    Zo += 1;
    if (Qo2 === null) {
      Qo2 = [];
    }
    e3 = ro2(Qo2, e3, t6);
    t6 = R2;
    if ((Ko2 === null ? t6.memoizedState : Ko2.next) === null) {
      t6 = t6.alternate;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = t6 === null || t6.memoizedState === null ? _c : vc;
    }
    return e3;
  }
  function use(e3) {
    if (typeof e3 == `object` && e3) {
      if (typeof e3.then == `function`) {
        return us2(e3);
      }
      if (e3.$$typeof === xe2) {
        return;
      }
      if (e3.$$typeof === fe) {
        return ka(e3);
      }
    }
    throw Error(a3(438, String(e3)));
  }
  function useMemoCache(e3) {
    let t6 = null;
    let R_updateQueue = R2.updateQueue;
    if (R_updateQueue !== null) {
      t6 = R_updateQueue.memoCache;
    }
    if (t6 == null) {
      var r5 = R2.alternate;
      if (r5 !== null) {
        r5 = r5.updateQueue;
        if (r5 !== null) {
          r5 = r5.memoCache;
          if (r5 != null) {
            t6 = {
              data: r5.data.map((e4) => e4.slice()),
              index: 0
            };
          }
        }
      }
    }
    t6 ??= {
      data: [],
      index: 0
    };
    if (R_updateQueue === null) {
      R_updateQueue = ls2();
      R2.updateQueue = R_updateQueue;
    }
    R_updateQueue.memoCache = t6;
    R_updateQueue = t6.data[t6.index];
    if (R_updateQueue === void 0) {
      R_updateQueue = t6.data[t6.index] = Array(e3);
      for (r5 = 0; r5 < e3; r5++) {
        R_updateQueue[r5] = ye2;
      }
    }
    t6.index++;
    return R_updateQueue;
  }
  function ps2(e3, t6) {
    if (typeof t6 == `function`) {
      return t6(e3);
    }
    return t6;
  }
  function ms2(e3) {
    return hs2(V2(), z2, e3);
  }
  function hs2(e3, t6, n7) {
    const e_queue = e3.queue;
    if (e_queue === null) {
      throw Error(a3(311));
    }
    e_queue.lastRenderedReducer = n7;
    let e_baseQueue = e3.baseQueue;
    let r_pending = e_queue.pending;
    if (r_pending !== null) {
      if (e_baseQueue !== null) {
        var s3 = e_baseQueue.next;
        e_baseQueue.next = r_pending.next;
        r_pending.next = s3;
      }
      t6.baseQueue = e_baseQueue = r_pending;
      e_queue.pending = null;
    }
    r_pending = e3.baseState;
    if (e_baseQueue === null) {
      e3.memoizedState = r_pending;
    } else {
      t6 = e_baseQueue.next;
      let c2 = s3 = null;
      let l2 = null;
      let u2 = t6;
      let d2 = false;
      do {
        let f2 = u2.lane & -536870913;
        if (f2 === u2.lane ? (Go2 & f2) === f2 : (J & f2) === f2) {
          var p2 = u2.revertLane;
          if (p2 === 0) {
            if (l2 !== null) {
              l2 = l2.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u2.action,
                hasEagerState: u2.hasEagerState,
                eagerState: u2.eagerState,
                next: null
              };
            }
            if (f2 === Ha) {
              d2 = true;
            }
          } else if ((Go2 & p2) === p2) {
            u2 = u2.next;
            if (p2 === Ha) {
              d2 = true;
            }
            continue;
          } else {
            f2 = {
              lane: 0,
              revertLane: u2.revertLane,
              gesture: null,
              action: u2.action,
              hasEagerState: u2.hasEagerState,
              eagerState: u2.eagerState,
              next: null
            };
            if (l2 === null) {
              l2 = f2;
              c2 = f2;
              s3 = r_pending;
            } else {
              l2 = l2.next = f2;
            }
            R2.lanes |= p2;
            sd |= p2;
          }
          f2 = u2.action;
          if (Yo) {
            n7(r_pending, f2);
          }
          r_pending = u2.hasEagerState ? u2.eagerState : n7(r_pending, f2);
        } else {
          p2 = {
            lane: f2,
            revertLane: u2.revertLane,
            gesture: u2.gesture,
            action: u2.action,
            hasEagerState: u2.hasEagerState,
            eagerState: u2.eagerState,
            next: null
          };
          if (l2 === null) {
            l2 = p2;
            c2 = p2;
            s3 = r_pending;
          } else {
            l2 = l2.next = p2;
          }
          R2.lanes |= f2;
          sd |= f2;
        }
        u2 = u2.next;
      } while (u2 !== null && u2 !== t6);
      if (l2 === null) {
        s3 = r_pending;
      } else {
        l2.next = c2;
      }
      if (!$r2(r_pending, e3.memoizedState) && (Fc2 = true, d2 && (n7 = Ua, n7 !== null))) {
        throw n7;
      }
      e3.memoizedState = r_pending;
      e3.baseState = s3;
      e3.baseQueue = l2;
      e_queue.lastRenderedState = r_pending;
    }
    if (e_baseQueue === null) {
      e_queue.lanes = 0;
    }
    return [e3.memoizedState, e_queue.dispatch];
  }
  function gs(e3) {
    const t6 = V2();
    const t_queue = t6.queue;
    if (t_queue === null) {
      throw Error(a3(311));
    }
    t_queue.lastRenderedReducer = e3;
    const n_dispatch = t_queue.dispatch;
    let n_pending = t_queue.pending;
    let t_memoizedState = t6.memoizedState;
    if (n_pending !== null) {
      t_queue.pending = null;
      let s3 = n_pending = n_pending.next;
      do {
        t_memoizedState = e3(t_memoizedState, s3.action);
        s3 = s3.next;
      } while (s3 !== n_pending);
      if (!$r2(t_memoizedState, t6.memoizedState)) {
        Fc2 = true;
      }
      t6.memoizedState = t_memoizedState;
      if (t6.baseQueue === null) {
        t6.baseState = t_memoizedState;
      }
      t_queue.lastRenderedState = t_memoizedState;
    }
    return [t_memoizedState, n_dispatch];
  }
  function useSyncExternalStore(e3, t6, n7) {
    const r5 = R2;
    let i4 = V2();
    const o3 = F2;
    if (o3) {
      if (n7 === void 0) {
        throw Error(a3(407));
      }
      n7 = n7();
    } else {
      n7 = t6();
    }
    const s3 = !$r2((z2 || i4).memoizedState, n7);
    if (s3) {
      i4.memoizedState = n7;
      Fc2 = true;
    }
    i4 = i4.queue;
    Hs2(bs2.bind(null, r5, i4, e3), [e3]);
    e3 = i4.getSnapshot !== t6 || s3 || Ko2 !== null && !!(Ko2.memoizedState.tag & 1);
    Ls2(e3 ? 9 : 8, {
      destroy: void 0
    }, ys2.bind(null, r5, i4, n7, t6), null);
    if (e3) {
      r5.flags |= 2048;
      if (K === null) {
        throw Error(a3(349));
      }
      if (!(o3 || Go2 & 127)) {
        vs2(r5, t6, n7);
      }
    }
    return n7;
  }
  function vs2(e3, t6, n7) {
    e3.flags |= 16384;
    e3 = {
      getSnapshot: t6,
      value: n7
    };
    t6 = R2.updateQueue;
    if (t6 === null) {
      t6 = ls2();
      R2.updateQueue = t6;
      t6.stores = [e3];
    } else {
      n7 = t6.stores;
      if (n7 === null) {
        t6.stores = [e3];
      } else {
        n7.push(e3);
      }
    }
  }
  function ys2(e3, t6, n7, r5) {
    t6.value = n7;
    t6.getSnapshot = r5;
    if (xs2(t6)) {
      Ss(e3);
    }
  }
  function bs2(e3, t6, n7) {
    return n7(function() {
      if (xs2(t6)) {
        Ss(e3);
      }
    });
  }
  function xs2(e3) {
    const e_getSnapshot = e3.getSnapshot;
    e3 = e3.value;
    try {
      const n7 = e_getSnapshot();
      return !$r2(e3, n7);
    } catch {
      return true;
    }
  }
  function Ss(e3) {
    const t6 = Li2(e3, 2);
    if (t6 !== null) {
      Pd(t6, e3, 2);
    }
  }
  function Cs(e3) {
    const t6 = cs2();
    if (typeof e3 == `function`) {
      const n7 = e3;
      e3 = n7();
      if (Yo) {
        lt2(true);
        try {
          n7();
        } finally {
          lt2(false);
        }
      }
    }
    t6.memoizedState = t6.baseState = e3;
    t6.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ps2,
      lastRenderedState: e3
    };
    return t6;
  }
  function ws2(e3, t6, n7, r5) {
    e3.baseState = n7;
    return hs2(e3, z2, typeof r5 == `function` ? r5 : ps2);
  }
  function Ts(e3, t6, n7, r5, payload) {
    if (pc(e3)) {
      throw Error(a3(485));
    }
    e3 = t6.action;
    if (e3 !== null) {
      var o3 = {
        payload,
        action: e3,
        next: null,
        isTransition: true,
        status: `pending`,
        value: null,
        reason: null,
        listeners: [],
        then: function(e4) {
          o3.listeners.push(e4);
        }
      };
      if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T === null) {
        o3.isTransition = false;
      } else {
        n7(true);
      }
      r5(o3);
      n7 = t6.pending;
      if (n7 === null) {
        o3.next = t6.pending = o3;
        Es(t6, o3);
      } else {
        o3.next = n7.next;
        t6.pending = n7.next = o3;
      }
    }
  }
  function Es(e3, t6) {
    const {
      action,
      payload
    } = t6;
    const e_state = e3.state;
    if (t6.isTransition) {
      var a4 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      const o3 = {};
      o3.types = a4 === null ? null : a4.types;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = o3;
      try {
        const s3 = action(e_state, payload);
        const c2 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
        if (c2 !== null) {
          c2(o3, s3);
        }
        Ds2(e3, t6, s3);
      } catch (error) {
        ks(e3, t6, error);
      } finally {
        if (a4 !== null && o3.types !== null) {
          a4.types = o3.types;
        }
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = a4;
      }
    } else {
      try {
        a4 = action(e_state, payload);
        Ds2(e3, t6, a4);
      } catch (error) {
        ks(e3, t6, error);
      }
    }
  }
  function Ds2(e3, t6, n7) {
    if (typeof n7 == `object` && n7 && typeof n7.then == `function`) {
      n7.then((n8) => {
        Os(e3, t6, n8);
      }, (n8) => ks(e3, t6, n8));
    } else {
      Os(e3, t6, n7);
    }
  }
  function Os(e3, t6, n7) {
    t6.status = `fulfilled`;
    t6.value = n7;
    As2(t6);
    e3.state = n7;
    t6 = e3.pending;
    if (t6 !== null) {
      n7 = t6.next;
      if (n7 === t6) {
        e3.pending = null;
      } else {
        n7 = n7.next;
        t6.next = n7;
        Es(e3, n7);
      }
    }
  }
  function ks(e3, t6, n7) {
    let e_pending = e3.pending;
    e3.pending = null;
    if (e_pending !== null) {
      e_pending = e_pending.next;
      do {
        t6.status = `rejected`;
        t6.reason = n7;
        As2(t6);
        t6 = t6.next;
      } while (t6 !== e_pending);
    }
    e3.action = null;
  }
  function As2(e3) {
    e3 = e3.listeners;
    for (let t6 = 0; t6 < e3.length; t6++) {
      e3[t6]();
    }
  }
  function js2(e3, t6) {
    return t6;
  }
  function Ms2(e3, t6) {
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
                  i4 = lm(i4.nextSibling);
                  if (i4 === null) {
                    i4 = null;
                    break b;
                  }
                }
                a4 = i4.data;
                i4 = a4 === `F!` || a4 === `F` ? i4 : null;
              }
              if (i4) {
                P2 = lm(i4.nextSibling);
                r5 = i4.data === `F!`;
                break a;
              }
            }
            pa(r5);
          }
          r5 = false;
        }
        if (r5) {
          t6 = n7[0];
        }
      }
    }
    n7 = cs2();
    n7.memoizedState = n7.baseState = t6;
    r5 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js2,
      lastRenderedState: t6
    };
    n7.queue = r5;
    n7 = uc.bind(null, R2, r5);
    r5.dispatch = n7;
    r5 = Cs(false);
    a4 = fc.bind(null, R2, false, r5.queue);
    r5 = cs2();
    i4 = {
      state: t6,
      dispatch: null,
      action: e3,
      pending: null
    };
    r5.queue = i4;
    n7 = Ts.bind(null, R2, i4, a4, n7);
    i4.dispatch = n7;
    r5.memoizedState = e3;
    return [t6, n7, false];
  }
  function Ns2(e3) {
    return Ps2(V2(), z2, e3);
  }
  function Ps2(e3, t6, n7) {
    t6 = hs2(e3, t6, js2)[0];
    e3 = ms2(ps2)[0];
    if (typeof t6 == `object` && t6 && typeof t6.then == `function`) {
      try {
        var r5 = us2(t6);
      } catch (error) {
        throw error === Qa ? eo2 : error;
      }
    } else {
      r5 = t6;
    }
    t6 = V2();
    const t_queue = t6.queue;
    const i_dispatch = t_queue.dispatch;
    if (n7 !== t6.memoizedState) {
      R2.flags |= 2048;
      Ls2(9, {
        destroy: void 0
      }, Fs2.bind(null, t_queue, n7), null);
    }
    return [r5, i_dispatch, e3];
  }
  function Fs2(e3, t6) {
    e3.action = t6;
  }
  function Is2(e3) {
    let t6 = V2();
    let n7 = z2;
    if (n7 !== null) {
      return Ps2(t6, n7, e3);
    }
    V2();
    t6 = t6.memoizedState;
    n7 = V2();
    const dispatch = n7.queue.dispatch;
    n7.memoizedState = e3;
    return [t6, dispatch, false];
  }
  function Ls2(tag, inst, create, deps) {
    tag = {
      tag,
      create,
      deps,
      inst,
      next: null
    };
    inst = R2.updateQueue;
    if (inst === null) {
      inst = ls2();
      R2.updateQueue = inst;
    }
    create = inst.lastEffect;
    if (create === null) {
      inst.lastEffect = tag.next = tag;
    } else {
      deps = create.next;
      create.next = tag;
      tag.next = deps;
      inst.lastEffect = tag;
    }
    return tag;
  }
  function useRef() {
    return V2().memoizedState;
  }
  function zs2(e3, t6, n7, r5) {
    const i4 = cs2();
    R2.flags |= e3;
    i4.memoizedState = Ls2(1 | t6, {
      destroy: void 0
    }, n7, r5 === void 0 ? null : r5);
  }
  function Bs2(e3, t6, n7, r5) {
    const i4 = V2();
    r5 = r5 === void 0 ? null : r5;
    const inst = i4.memoizedState.inst;
    if (z2 !== null && r5 !== null && es(r5, z2.memoizedState.deps)) {
      i4.memoizedState = Ls2(t6, inst, n7, r5);
    } else {
      R2.flags |= e3;
      i4.memoizedState = Ls2(1 | t6, inst, n7, r5);
    }
  }
  function Vs2(e3, t6) {
    zs2(8390656, 8, e3, t6);
  }
  function Hs2(e3, t6) {
    Bs2(2048, 8, e3, t6);
  }
  function Us(e3) {
    R2.flags |= 4;
    let R_updateQueue = R2.updateQueue;
    if (R_updateQueue === null) {
      R_updateQueue = ls2();
      R2.updateQueue = R_updateQueue;
      R_updateQueue.events = [e3];
    } else {
      const n7 = R_updateQueue.events;
      if (n7 === null) {
        R_updateQueue.events = [e3];
      } else {
        n7.push(e3);
      }
    }
  }
  function useEffectEvent(nextImpl) {
    const memoizedState = V2().memoizedState;
    Us({
      ref: memoizedState,
      nextImpl
    });
    return function() {
      if (G & 2) {
        throw Error(a3(440));
      }
      return memoizedState.impl.apply(void 0, arguments);
    };
  }
  function useInsertionEffect(e3, t6) {
    return Bs2(4, 2, e3, t6);
  }
  function useLayoutEffect(e3, t6) {
    return Bs2(4, 4, e3, t6);
  }
  function qs(e3, t6) {
    if (typeof t6 == `function`) {
      e3 = e3();
      const n7 = t6(e3);
      return function() {
        if (typeof n7 == `function`) {
          n7();
        } else {
          t6(null);
        }
      };
    }
    if (t6 != null) {
      e3 = e3();
      t6.current = e3;
      return function() {
        t6.current = null;
      };
    }
  }
  function useImperativeHandle(e3, t6, n7) {
    n7 = n7 == null ? null : n7.concat([e3]);
    Bs2(4, 4, qs.bind(null, t6, e3), n7);
  }
  function useDebugValue() {
  }
  function useCallback(e3, t6) {
    const n7 = V2();
    t6 = t6 === void 0 ? null : t6;
    const n_memoizedState = n7.memoizedState;
    if (t6 !== null && es(t6, n_memoizedState[1])) {
      return n_memoizedState[0];
    }
    n7.memoizedState = [e3, t6];
    return e3;
  }
  function useMemo(e3, t6) {
    const n7 = V2();
    t6 = t6 === void 0 ? null : t6;
    let n_memoizedState = n7.memoizedState;
    if (t6 !== null && es(t6, n_memoizedState[1])) {
      return n_memoizedState[0];
    }
    n_memoizedState = e3();
    if (Yo) {
      lt2(true);
      try {
        e3();
      } finally {
        lt2(false);
      }
    }
    n7.memoizedState = [n_memoizedState, t6];
    return n_memoizedState;
  }
  function Qs2(e3, t6, n7) {
    if (n7 === void 0 || Go2 & 1073741824 && !(J & 261930)) {
      return e3.memoizedState = t6;
    }
    e3.memoizedState = n7;
    e3 = Md();
    R2.lanes |= e3;
    sd |= e3;
    return n7;
  }
  function $s2(e3, memoizedState, n7, r5) {
    if ($r2(n7, memoizedState)) {
      return n7;
    }
    if (ko.current === null) {
      if (!(Go2 & 106) || Go2 & 1073741824 && !(J & 261930)) {
        Fc2 = true;
        return e3.memoizedState = n7;
      }
      e3 = Md();
      R2.lanes |= e3;
      sd |= e3;
      return memoizedState;
    }
    e3 = Qs2(e3, n7, r5);
    if (!$r2(e3, memoizedState)) {
      Fc2 = true;
    }
    return e3;
  }
  function ec2(e3, t6, n7, r5, i4) {
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p !== 0 && i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p < 8 ? i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p : 8;
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const s3 = {};
    s3.types = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T === null ? null : r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T.types;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = s3;
    fc(e3, false, t6, n7);
    try {
      const c2 = i4();
      const l2 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
      if (l2 !== null) {
        l2(s3, c2);
      }
      if (typeof c2 == `object` && c2 && typeof c2.then == `function`) {
        dc(e3, t6, Ka(c2, r5), jd(e3));
      } else {
        dc(e3, t6, r5, jd(e3));
      }
    } catch (reason) {
      dc(e3, t6, {
        then: function() {
        },
        status: `rejected`,
        reason
      }, jd());
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T !== null && s3.types !== null) {
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T.types = s3.types;
      }
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function tc() {
  }
  function nc(e3, t6, n7, r5) {
    if (e3.tag !== 5) {
      throw Error(a3(476));
    }
    const queue = rc(e3).queue;
    ec2(e3, queue, t6, De2, n7 === null ? tc : () => {
      ic2(e3);
      return n7(r5);
    });
  }
  function rc(e3) {
    let e_memoizedState = e3.memoizedState;
    if (e_memoizedState !== null) {
      return e_memoizedState;
    }
    e_memoizedState = {
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
    const n7 = {};
    e_memoizedState.next = {
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
    };
    e3.memoizedState = e_memoizedState;
    e3 = e3.alternate;
    if (e3 !== null) {
      e3.memoizedState = e_memoizedState;
    }
    return e_memoizedState;
  }
  function ic2(e3) {
    let t6 = rc(e3);
    if (t6.next === null) {
      t6 = e3.alternate.memoizedState;
    }
    dc(e3, t6.next.queue, {}, jd());
  }
  function useHostTransitionStatus() {
    return ka(sh);
  }
  function useId() {
    return V2().memoizedState;
  }
  function useCacheRefresh() {
    return V2().memoizedState;
  }
  function cc2(e3) {
    for (let t6 = e3.return; t6 !== null; ) {
      switch (t6.tag) {
        case 24:
        case 3:
          const n7 = jd();
          e3 = bo2(n7);
          const r5 = xo2(t6, e3, n7);
          if (r5 !== null) {
            Pd(r5, t6, n7);
            So2(r5, t6, n7);
          }
          t6 = {
            cache: Fa()
          };
          e3.payload = t6;
          return;
      }
      t6 = t6.return;
    }
  }
  function lc(e3, t6, n7) {
    const r5 = jd();
    n7 = {
      lane: r5,
      revertLane: 0,
      gesture: null,
      action: n7,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e3)) {
      mc(t6, n7);
    } else {
      n7 = Ii2(e3, t6, n7, r5);
      if (n7 !== null) {
        Pd(n7, e3, r5);
        hc(n7, t6, r5);
      }
    }
  }
  function uc(e3, t6, n7) {
    dc(e3, t6, n7, jd());
  }
  function dc(e3, t6, n7, r5) {
    const i4 = {
      lane: r5,
      revertLane: 0,
      gesture: null,
      action: n7,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e3)) {
      mc(t6, i4);
    } else {
      let a4 = e3.alternate;
      if (e3.lanes === 0 && (a4 === null || a4.lanes === 0) && (a4 = t6.lastRenderedReducer, a4 !== null)) {
        try {
          const o3 = t6.lastRenderedState;
          const s3 = a4(o3, n7);
          i4.hasEagerState = true;
          i4.eagerState = s3;
          if ($r2(s3, o3)) {
            Fi2(e3, t6, i4, 0);
            if (K === null) {
              Pi2();
            }
            return false;
          }
        } catch {
        }
      }
      n7 = Ii2(e3, t6, i4, r5);
      if (n7 !== null) {
        Pd(n7, e3, r5);
        hc(n7, t6, r5);
        return true;
      }
    }
    return false;
  }
  function fc(e3, t6, n7, r5) {
    r5 = {
      lane: 2,
      revertLane: Pf(),
      gesture: null,
      action: r5,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e3)) {
      if (t6) {
        throw Error(a3(479));
      }
    } else {
      t6 = Ii2(e3, n7, r5, 2);
      if (t6 !== null) {
        Pd(t6, e3, 2);
      }
    }
  }
  function pc(e3) {
    const e_alternate = e3.alternate;
    return e3 === R2 || e_alternate !== null && e_alternate === R2;
  }
  function mc(e3, t6) {
    qo = true;
    Jo = true;
    const e_pending = e3.pending;
    if (e_pending === null) {
      t6.next = t6;
    } else {
      t6.next = e_pending.next;
      e_pending.next = t6;
    }
    e3.pending = t6;
  }
  function hc(e3, t6, n7) {
    if (n7 & 4194048) {
      let r5 = t6.lanes;
      r5 &= e3.pendingLanes;
      n7 |= r5;
      t6.lanes = n7;
      Dt2(e3, n7);
    }
  }
  var gc = {
    readContext: ka,
    use,
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
  };
  var _c = {
    readContext: ka,
    use,
    useCallback: function(e3, t6) {
      cs2().memoizedState = [e3, t6 === void 0 ? null : t6];
      return e3;
    },
    useContext: ka,
    useEffect: Vs2,
    useImperativeHandle: function(e3, t6, n7) {
      n7 = n7 == null ? null : n7.concat([e3]);
      zs2(4194308, 4, qs.bind(null, t6, e3), n7);
    },
    useLayoutEffect: function(e3, t6) {
      return zs2(4194308, 4, e3, t6);
    },
    useInsertionEffect: function(e3, t6) {
      zs2(4, 2, e3, t6);
    },
    useMemo: function(e3, t6) {
      const n7 = cs2();
      t6 = t6 === void 0 ? null : t6;
      const r5 = e3();
      if (Yo) {
        lt2(true);
        try {
          e3();
        } finally {
          lt2(false);
        }
      }
      n7.memoizedState = [r5, t6];
      return r5;
    },
    useReducer: function(e3, t6, n7) {
      const r5 = cs2();
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
      } else {
        i4 = t6;
      }
      r5.memoizedState = r5.baseState = i4;
      e3 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e3,
        lastRenderedState: i4
      };
      r5.queue = e3;
      e3 = e3.dispatch = lc.bind(null, R2, e3);
      return [r5.memoizedState, e3];
    },
    useRef: function(current) {
      const t6 = cs2();
      current = {
        current
      };
      return t6.memoizedState = current;
    },
    useState: function(e3) {
      e3 = Cs(e3);
      const e_queue = e3.queue;
      const n7 = uc.bind(null, R2, e_queue);
      e_queue.dispatch = n7;
      return [e3.memoizedState, n7];
    },
    useDebugValue,
    useDeferredValue: function(e3, t6) {
      return Qs2(cs2(), e3, t6);
    },
    useTransition: function() {
      let e3 = Cs(false);
      e3 = ec2.bind(null, R2, e3.queue, true, false);
      cs2().memoizedState = e3;
      return [false, e3];
    },
    useSyncExternalStore: function(e3, t6, n7) {
      const r5 = R2;
      const i4 = cs2();
      if (F2) {
        if (n7 === void 0) {
          throw Error(a3(407));
        }
        n7 = n7();
      } else {
        n7 = t6();
        if (K === null) {
          throw Error(a3(349));
        }
        if (!(J & 127)) {
          vs2(r5, t6, n7);
        }
      }
      i4.memoizedState = n7;
      const o3 = {
        value: n7,
        getSnapshot: t6
      };
      i4.queue = o3;
      Vs2(bs2.bind(null, r5, o3, e3), [e3]);
      r5.flags |= 2048;
      Ls2(9, {
        destroy: void 0
      }, ys2.bind(null, r5, o3, n7, t6), null);
      return n7;
    },
    useId: function() {
      const e3 = cs2();
      let K_identifierPrefix = K.identifierPrefix;
      if (F2) {
        var n7 = overflow;
        const r5 = ia2;
        n7 = (r5 & ~(1 << 32 - ut2(r5) - 1)).toString(32) + n7;
        K_identifierPrefix = `_` + K_identifierPrefix + `R_` + n7;
        n7 = Xo2++;
        if (n7 > 0) {
          K_identifierPrefix += `H` + n7.toString(32);
        }
        K_identifierPrefix += `_`;
      } else {
        n7 = $o++;
        K_identifierPrefix = `_` + K_identifierPrefix + `r_` + n7.toString(32) + `_`;
      }
      return e3.memoizedState = K_identifierPrefix;
    },
    useHostTransitionStatus,
    useFormState: Ms2,
    useActionState: Ms2,
    useOptimistic: function(e3) {
      let t6 = cs2();
      t6.memoizedState = t6.baseState = e3;
      const n7 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      t6.queue = n7;
      t6 = fc.bind(null, R2, true, n7);
      n7.dispatch = t6;
      return [e3, t6];
    },
    useMemoCache,
    useCacheRefresh: function() {
      return cs2().memoizedState = cc2.bind(null, R2);
    },
    useEffectEvent: function(impl) {
      const t6 = cs2();
      const n7 = {
        impl
      };
      t6.memoizedState = n7;
      return function() {
        if (G & 2) {
          throw Error(a3(440));
        }
        return n7.impl.apply(void 0, arguments);
      };
    }
  };
  var vc = {
    readContext: ka,
    use,
    useCallback,
    useContext: ka,
    useEffect: Hs2,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer: ms2,
    useRef,
    useState: function() {
      return ms2(ps2);
    },
    useDebugValue,
    useDeferredValue: function(e3, t6) {
      return $s2(V2(), z2.memoizedState, e3, t6);
    },
    useTransition: function() {
      const e3 = ms2(ps2)[0];
      const memoizedState = V2().memoizedState;
      return [typeof e3 == `boolean` ? e3 : us2(e3), memoizedState];
    },
    useSyncExternalStore,
    useId,
    useHostTransitionStatus,
    useFormState: Ns2,
    useActionState: Ns2,
    useOptimistic: function(e3, t6) {
      return ws2(V2(), z2, e3, t6);
    },
    useMemoCache,
    useCacheRefresh,
    useEffectEvent
  };
  var yc = {
    readContext: ka,
    use,
    useCallback,
    useContext: ka,
    useEffect: Hs2,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer: gs,
    useRef,
    useState: function() {
      return gs(ps2);
    },
    useDebugValue,
    useDeferredValue: function(e3, t6) {
      const n7 = V2();
      if (z2 === null) {
        return Qs2(n7, e3, t6);
      }
      return $s2(n7, z2.memoizedState, e3, t6);
    },
    useTransition: function() {
      const e3 = gs(ps2)[0];
      const memoizedState = V2().memoizedState;
      return [typeof e3 == `boolean` ? e3 : us2(e3), memoizedState];
    },
    useSyncExternalStore,
    useId,
    useHostTransitionStatus,
    useFormState: Is2,
    useActionState: Is2,
    useOptimistic: function(e3, t6) {
      const n7 = V2();
      if (z2 === null) {
        n7.baseState = e3;
        return [e3, n7.queue.dispatch];
      }
      return ws2(n7, z2, e3, t6);
    },
    useMemoCache,
    useCacheRefresh,
    useEffectEvent
  };
  function bc(e3, t6, n7, r5) {
    t6 = e3.memoizedState;
    n7 = n7(r5, t6);
    n7 = n7 == null ? t6 : Object_assign({}, t6, n7);
    e3.memoizedState = n7;
    if (e3.lanes === 0) {
      e3.updateQueue.baseState = n7;
    }
  }
  var xc = {
    enqueueSetState: function(e3, t6, n7) {
      e3 = e3._reactInternals;
      const r5 = jd();
      const i4 = bo2(r5);
      i4.payload = t6;
      if (n7 != null) {
        i4.callback = n7;
      }
      t6 = xo2(e3, i4, r5);
      if (t6 !== null) {
        Pd(t6, e3, r5);
        So2(t6, e3, r5);
      }
    },
    enqueueReplaceState: function(e3, t6, n7) {
      e3 = e3._reactInternals;
      const r5 = jd();
      const i4 = bo2(r5);
      i4.tag = 1;
      i4.payload = t6;
      if (n7 != null) {
        i4.callback = n7;
      }
      t6 = xo2(e3, i4, r5);
      if (t6 !== null) {
        Pd(t6, e3, r5);
        So2(t6, e3, r5);
      }
    },
    enqueueForceUpdate: function(e3, t6) {
      e3 = e3._reactInternals;
      const n7 = jd();
      const r5 = bo2(n7);
      r5.tag = 2;
      if (t6 != null) {
        r5.callback = t6;
      }
      t6 = xo2(e3, r5, n7);
      if (t6 !== null) {
        Pd(t6, e3, n7);
        So2(t6, e3, n7);
      }
    }
  };
  function Sc(e3, t6, n7, r5, i4, a4, o3) {
    e3 = e3.stateNode;
    if (typeof e3.shouldComponentUpdate == `function`) {
      return e3.shouldComponentUpdate(r5, a4, o3);
    }
    if (t6.prototype && t6.prototype.isPureReactComponent) {
      return !ei2(n7, r5) || !ei2(i4, a4);
    }
    return true;
  }
  function Cc(e3, t6, n7, r5) {
    e3 = t6.state;
    if (typeof t6.componentWillReceiveProps == `function`) {
      t6.componentWillReceiveProps(n7, r5);
    }
    if (typeof t6.UNSAFE_componentWillReceiveProps == `function`) {
      t6.UNSAFE_componentWillReceiveProps(n7, r5);
    }
    if (t6.state !== e3) {
      xc.enqueueReplaceState(t6, t6.state, null);
    }
  }
  function wc2(e3, t6) {
    let n7 = t6;
    if (`ref` in t6) {
      n7 = {};
      for (const r5 in t6) {
        if (r5 !== `ref`) {
          n7[r5] = t6[r5];
        }
      }
    }
    if (e3 = e3.defaultProps) {
      if (n7 === t6) {
        n7 = Object_assign({}, n7);
      }
      for (const i4 in e3) {
        if (n7[i4] === void 0) {
          n7[i4] = e3[i4];
        }
      }
    }
    return n7;
  }
  function Tc2(e3) {
    Ai(e3);
  }
  function Ec2(e3) {
    console.error(e3);
  }
  function Dc2(e3) {
    Ai(e3);
  }
  function Oc2(e3, t6) {
    try {
      const n7 = e3.onUncaughtError;
      n7(t6.value, {
        componentStack: t6.stack
      });
    } catch (error) {
      setTimeout(() => {
        throw error;
      });
    }
  }
  function kc2(e3, t6, n7) {
    try {
      const r5 = e3.onCaughtError;
      r5(n7.value, {
        componentStack: n7.stack,
        errorBoundary: t6.tag === 1 ? t6.stateNode : null
      });
    } catch (error) {
      setTimeout(() => {
        throw error;
      });
    }
  }
  function Ac2(stateNode, t6, n7) {
    n7 = bo2(n7);
    n7.tag = 3;
    n7.payload = {
      element: null
    };
    n7.callback = function() {
      Oc2(stateNode, t6);
    };
    return n7;
  }
  function jc2(e3) {
    e3 = bo2(e3);
    e3.tag = 3;
    return e3;
  }
  function Mc2(e3, t6, n7, r5) {
    const getDerivedStateFromError = n7.type.getDerivedStateFromError;
    if (typeof getDerivedStateFromError == `function`) {
      const a4 = r5.value;
      e3.payload = function() {
        return getDerivedStateFromError(a4);
      };
      e3.callback = function() {
        kc2(t6, n7, r5);
      };
    }
    const n_stateNode = n7.stateNode;
    if (n_stateNode !== null && typeof n_stateNode.componentDidCatch == `function`) {
      e3.callback = function() {
        kc2(t6, n7, r5);
        if (typeof getDerivedStateFromError != `function`) {
          if (yd === null) {
            yd = /* @__PURE__ */ new Set([this]);
          } else {
            yd.add(this);
          }
        }
        const r_stack = r5.stack;
        this.componentDidCatch(r5.value, {
          componentStack: r_stack === null ? `` : r_stack
        });
      };
    }
  }
  function Nc2(e3, t6, n7, cause, i4) {
    n7.flags |= 32768;
    if (typeof cause == `object` && cause && typeof cause.then == `function`) {
      t6 = n7.alternate;
      if (t6 !== null) {
        Ea2(t6, n7, i4, true);
      }
      n7 = Po.current;
      if (n7 !== null) {
        switch (n7.tag) {
          case 31:
          case 13:
          case 19:
            if (Fo === null) {
              Kd();
            } else if (n7.alternate === null && od === 0) {
              od = 3;
            }
            n7.flags &= -257;
            n7.flags |= 65536;
            n7.lanes = i4;
            if (cause === to2) {
              n7.flags |= 16384;
            } else {
              t6 = n7.updateQueue;
              if (t6 === null) {
                n7.updateQueue = /* @__PURE__ */ new Set([cause]);
              } else {
                t6.add(cause);
              }
              mf(e3, cause, i4);
            }
            return false;
          case 22:
            n7.flags |= 65536;
            if (cause === to2) {
              n7.flags |= 16384;
            } else {
              t6 = n7.updateQueue;
              if (t6 === null) {
                t6 = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([cause])
                };
                n7.updateQueue = t6;
              } else {
                n7 = t6.retryQueue;
                if (n7 === null) {
                  t6.retryQueue = /* @__PURE__ */ new Set([cause]);
                } else {
                  n7.add(cause);
                }
              }
              mf(e3, cause, i4);
            }
            return false;
        }
        throw Error(a3(435, n7.tag));
      }
      mf(e3, cause, i4);
      Kd();
      return false;
    }
    if (F2) {
      t6 = Po.current;
      if (t6 === null) {
        if (cause !== fa2) {
          t6 = Error(a3(423), {
            cause
          });
          ya2(Qi2(t6, n7));
        }
        e3 = e3.current.alternate;
        e3.flags |= 65536;
        i4 &= -i4;
        e3.lanes |= i4;
        cause = Qi2(cause, n7);
        i4 = Ac2(e3.stateNode, cause, i4);
        Co2(e3, i4);
        if (od !== 4) {
          od = 2;
        }
      } else {
        if (!(t6.flags & 65536)) {
          t6.flags |= 256;
        }
        t6.flags |= 65536;
        t6.lanes = i4;
        if (cause !== fa2) {
          e3 = Error(a3(422), {
            cause
          });
          ya2(Qi2(e3, n7));
        }
      }
      return false;
    }
    let o3 = Error(a3(520), {
      cause
    });
    o3 = Qi2(o3, n7);
    if (fd === null) {
      fd = [o3];
    } else {
      fd.push(o3);
    }
    if (od !== 4) {
      od = 2;
    }
    if (t6 === null) {
      return true;
    }
    cause = Qi2(cause, n7);
    n7 = t6;
    do {
      switch (n7.tag) {
        case 3:
          n7.flags |= 65536;
          e3 = i4 & -i4;
          n7.lanes |= e3;
          e3 = Ac2(n7.stateNode, cause, e3);
          Co2(n7, e3);
          return false;
        case 1:
          t6 = n7.type;
          o3 = n7.stateNode;
          if (!(n7.flags & 128) && (typeof t6.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (yd === null || !yd.has(o3)))) {
            n7.flags |= 65536;
            i4 &= -i4;
            n7.lanes |= i4;
            i4 = jc2(i4);
            Mc2(i4, e3, n7, cause);
            Co2(n7, i4);
            return false;
          }
          break;
        case 22:
          if (n7.memoizedState !== null) {
            n7.flags |= 65536;
            return false;
          }
      }
      n7 = n7.return;
    } while (n7 !== null);
    return false;
  }
  var Pc = Error(a3(461));
  var Fc2 = false;
  function Ic2(e3, t6, n7, r5) {
    t6.child = e3 === null ? go2(t6, null, n7, r5) : ho2(t6, e3.child, n7, r5);
  }
  function Lc(e3, t6, n7, r5, i4) {
    n7 = n7.render;
    const t_ref = t6.ref;
    if (`ref` in r5) {
      var o3 = {};
      for (var s3 in r5) {
        if (s3 !== `ref`) {
          o3[s3] = r5[s3];
        }
      }
    } else {
      o3 = r5;
    }
    Oa(t6);
    r5 = ts(e3, t6, n7, o3, t_ref, i4);
    s3 = as();
    if (e3 !== null && !Fc2) {
      os(e3, t6, i4);
      return dl2(e3, t6, i4);
    }
    if (F2 && s3) {
      oa(t6);
    }
    t6.flags |= 1;
    Ic2(e3, t6, r5, i4);
    return t6.child;
  }
  function Rc2(e3, t6, n7, r5, i4) {
    if (e3 === null) {
      var a4 = n7.type;
      if (typeof a4 == `function` && !Ui2(a4) && a4.defaultProps === void 0 && n7.compare === null) {
        t6.tag = 15;
        t6.type = a4;
        return zc(e3, t6, a4, r5, i4);
      }
      e3 = Ki(n7.type, null, r5, t6, t6.mode, i4);
      e3.ref = t6.ref;
      e3.return = t6;
      return t6.child = e3;
    }
    a4 = e3.child;
    if (!fl(e3, i4)) {
      const o3 = a4.memoizedProps;
      n7 = n7.compare;
      n7 = n7 === null ? ei2 : n7;
      if (n7(o3, r5) && e3.ref === t6.ref) {
        return dl2(e3, t6, i4);
      }
    }
    t6.flags |= 1;
    e3 = Wi2(a4, r5);
    e3.ref = t6.ref;
    e3.return = t6;
    return t6.child = e3;
  }
  function zc(e3, t6, n7, r5, i4) {
    if (e3 !== null) {
      const a4 = e3.memoizedProps;
      if (ei2(a4, r5) && e3.ref === t6.ref) {
        Fc2 = false;
        t6.pendingProps = r5 = a4;
        if (fl(e3, i4)) {
          if (e3.flags & 131072) {
            Fc2 = true;
          }
        } else {
          t6.lanes = e3.lanes;
          return dl2(e3, t6, i4);
        }
      }
    }
    return qc2(e3, t6, n7, r5, i4);
  }
  function Bc(e3, t6, n7, r5) {
    let r_children = r5.children;
    let a4 = e3 === null ? null : e3.memoizedState;
    if (e3 === null && t6.stateNode === null) {
      t6.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    if (r5.mode === `hidden`) {
      if (t6.flags & 128) {
        a4 = a4 === null ? n7 : a4.baseLanes | n7;
        if (e3 !== null) {
          r5 = t6.child = e3.child;
          for (r_children = 0; r5 !== null; ) {
            r_children = r_children | r5.lanes | r5.childLanes;
            r5 = r5.sibling;
          }
          r5 = r_children & ~a4;
        } else {
          r5 = 0;
          t6.child = null;
        }
        return Hc(e3, t6, a4, n7, r5);
      }
      if (n7 & 536870912) {
        t6.memoizedState = {
          baseLanes: 0,
          cachePool: null
        };
        if (e3 !== null) {
          Xa(t6, a4 === null ? null : a4.cachePool);
        }
        if (a4 === null) {
          Mo();
        } else {
          jo(t6, a4);
        }
        Ro2(t6);
      } else {
        r5 = t6.lanes = 536870912;
        return Hc(e3, t6, a4 === null ? n7 : a4.baseLanes | n7, n7, r5);
      }
    } else {
      if (a4 === null) {
        if (e3 !== null) {
          Xa(t6, null);
        }
        Mo();
        zo2();
      } else {
        Xa(t6, a4.cachePool);
        jo(t6, a4);
        zo2();
        t6.memoizedState = null;
      }
    }
    Ic2(e3, t6, r_children, n7);
    return t6.child;
  }
  function Vc2(e3, t6) {
    if (!(e3 !== null && e3.tag === 22 || t6.stateNode !== null)) {
      t6.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    return t6.sibling;
  }
  function Hc(e3, t6, n7, r5, i4) {
    let a4 = Ya();
    a4 = a4 === null ? null : {
      parent: L2._currentValue,
      pool: a4
    };
    t6.memoizedState = {
      baseLanes: n7,
      cachePool: a4
    };
    if (e3 !== null) {
      Xa(t6, null);
    }
    Mo();
    Ro2(t6);
    if (e3 !== null) {
      Ea2(e3, t6, r5, true);
    }
    t6.childLanes = i4;
    return null;
  }
  function Uc2(e3, t6) {
    t6 = nl2({
      mode: t6.mode,
      children: t6.children
    }, e3.mode);
    t6.ref = e3.ref;
    e3.child = t6;
    t6.return = e3;
    return t6;
  }
  function Wc2(e3, t6, n7) {
    ho2(t6, e3.child, null, n7);
    e3 = Uc2(t6, t6.pendingProps);
    e3.flags |= 2;
    Bo2(t6);
    t6.memoizedState = null;
    return e3;
  }
  function Gc2(e3, t6, n7) {
    let t_pendingProps = t6.pendingProps;
    let i4 = !!(t6.flags & 128);
    t6.flags &= -129;
    if (e3 === null) {
      if (F2) {
        if (t_pendingProps.mode === `hidden`) {
          e3 = Uc2(t6, t_pendingProps);
          t6.lanes = 536870912;
          e3.memoizedState = {
            baseLanes: 0,
            cachePool: null
          };
          return Vc2(null, e3);
        }
        Lo2(t6);
        if (e3 = P2) {
          e3 = am(e3, da2);
          e3 = e3 !== null && e3.data === `&` ? e3 : null;
          if (e3 !== null) {
            t6.memoizedState = {
              dehydrated: e3,
              treeContext: ra2 === null ? null : {
                id: ia2,
                overflow
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n7 = Yi2(e3);
            n7.return = t6;
            t6.child = n7;
            la = t6;
            P2 = null;
          }
        } else {
          e3 = null;
        }
        if (e3 === null) {
          throw pa(t6);
        }
        t6.lanes = 536870912;
        return null;
      }
      return Uc2(t6, t_pendingProps);
    }
    const e_memoizedState = e3.memoizedState;
    if (e_memoizedState !== null) {
      let s3 = e_memoizedState.dehydrated;
      Lo2(t6);
      if (i4) {
        if (t6.flags & 256) {
          t6.flags &= -257;
          t6 = Wc2(e3, t6, n7);
        } else if (t6.memoizedState !== null) {
          t6.child = e3.child;
          t6.flags |= 128;
          t6 = null;
        } else {
          throw Error(a3(558));
        }
      } else {
        if (!Fc2) {
          Ea2(e3, t6, n7, false);
        }
        i4 = (n7 & e3.childLanes) !== 0;
        if (Fc2 || i4) {
          if (ko.current === null) {
            t_pendingProps = K;
            if (t_pendingProps !== null && (s3 = Ot2(t_pendingProps, n7), s3 !== 0 && s3 !== e_memoizedState.retryLane)) {
              e_memoizedState.retryLane = s3;
              Li2(e3, s3);
              Pd(t_pendingProps, e3, s3);
              throw Pc;
            }
            Kd();
          }
          t6 = Wc2(e3, t6, n7);
        } else {
          e3 = e_memoizedState.treeContext;
          P2 = lm(s3.nextSibling);
          la = t6;
          F2 = true;
          ua2 = null;
          da2 = false;
          if (e3 !== null) {
            ca(t6, e3);
          }
          t6 = Uc2(t6, t_pendingProps);
          t6.flags |= 134221824;
        }
      }
      return t6;
    }
    e3 = Wi2(e3.child, {
      mode: t_pendingProps.mode,
      children: t_pendingProps.children
    });
    e3.ref = t6.ref;
    t6.child = e3;
    e3.return = t6;
    return e3;
  }
  function Kc(e3, t6) {
    const t_ref = t6.ref;
    if (t_ref === null) {
      if (e3 !== null && e3.ref !== null) {
        t6.flags |= 4194816;
      }
    } else {
      if (typeof t_ref != `function` && typeof t_ref != `object`) {
        throw Error(a3(284));
      }
      if (e3 === null || e3.ref !== t_ref) {
        t6.flags |= 4194816;
      }
    }
  }
  function qc2(e3, t6, n7, r5, i4) {
    Oa(t6);
    n7 = ts(e3, t6, n7, r5, void 0, i4);
    r5 = as();
    if (e3 !== null && !Fc2) {
      os(e3, t6, i4);
      return dl2(e3, t6, i4);
    }
    if (F2 && r5) {
      oa(t6);
    }
    t6.flags |= 1;
    Ic2(e3, t6, n7, i4);
    return t6.child;
  }
  function Jc(e3, t6, n7, r5, i4, a4) {
    Oa(t6);
    t6.updateQueue = null;
    n7 = rs(t6, r5, n7, i4);
    ns(e3);
    r5 = as();
    if (e3 !== null && !Fc2) {
      os(e3, t6, a4);
      return dl2(e3, t6, a4);
    }
    if (F2 && r5) {
      oa(t6);
    }
    t6.flags |= 1;
    Ic2(e3, t6, n7, a4);
    return t6.child;
  }
  function Yc(e3, t6, n7, r5, i4) {
    Oa(t6);
    if (t6.stateNode === null) {
      var a4 = Bi2;
      var o3 = n7.contextType;
      if (typeof o3 == `object` && o3) {
        a4 = ka(o3);
      }
      a4 = new n7(r5, a4);
      t6.memoizedState = a4.state ?? null;
      a4.updater = xc;
      t6.stateNode = a4;
      a4._reactInternals = t6;
      a4 = t6.stateNode;
      a4.props = r5;
      a4.state = t6.memoizedState;
      a4.refs = {};
      vo2(t6);
      o3 = n7.contextType;
      a4.context = typeof o3 == `object` && o3 ? ka(o3) : Bi2;
      a4.state = t6.memoizedState;
      o3 = n7.getDerivedStateFromProps;
      if (typeof o3 == `function`) {
        bc(t6, n7, o3, r5);
        a4.state = t6.memoizedState;
      }
      if (!(typeof n7.getDerivedStateFromProps == `function` || typeof a4.getSnapshotBeforeUpdate == `function` || typeof a4.UNSAFE_componentWillMount != `function` && typeof a4.componentWillMount != `function`)) {
        o3 = a4.state;
        if (typeof a4.componentWillMount == `function`) {
          a4.componentWillMount();
        }
        if (typeof a4.UNSAFE_componentWillMount == `function`) {
          a4.UNSAFE_componentWillMount();
        }
        if (o3 !== a4.state) {
          xc.enqueueReplaceState(a4, a4.state, null);
        }
        Eo2(t6, r5, a4, i4);
        To();
        a4.state = t6.memoizedState;
      }
      if (typeof a4.componentDidMount == `function`) {
        t6.flags |= 4194308;
      }
      r5 = true;
    } else if (e3 === null) {
      a4 = t6.stateNode;
      var s3 = t6.memoizedProps;
      var c2 = wc2(n7, s3);
      a4.props = c2;
      var l2 = a4.context;
      var u2 = n7.contextType;
      o3 = Bi2;
      if (typeof u2 == `object` && u2) {
        o3 = ka(u2);
      }
      var d2 = n7.getDerivedStateFromProps;
      u2 = typeof d2 == `function` || typeof a4.getSnapshotBeforeUpdate == `function`;
      s3 = t6.pendingProps !== s3;
      if (!(u2 || typeof a4.UNSAFE_componentWillReceiveProps != `function` && typeof a4.componentWillReceiveProps != `function`)) {
        if (s3 || l2 !== o3) {
          Cc(t6, a4, r5, o3);
        }
      }
      _o2 = false;
      var f2 = t6.memoizedState;
      a4.state = f2;
      Eo2(t6, r5, a4, i4);
      To();
      l2 = t6.memoizedState;
      if (s3 || f2 !== l2 || _o2) {
        if (typeof d2 == `function`) {
          bc(t6, n7, d2, r5);
          l2 = t6.memoizedState;
        }
        if (c2 = _o2 || Sc(t6, n7, c2, r5, f2, l2, o3)) {
          if (!(u2 || typeof a4.UNSAFE_componentWillMount != `function` && typeof a4.componentWillMount != `function`)) {
            if (typeof a4.componentWillMount == `function`) {
              a4.componentWillMount();
            }
            if (typeof a4.UNSAFE_componentWillMount == `function`) {
              a4.UNSAFE_componentWillMount();
            }
          }
          if (typeof a4.componentDidMount == `function`) {
            t6.flags |= 4194308;
          }
        } else {
          if (typeof a4.componentDidMount == `function`) {
            t6.flags |= 4194308;
          }
          t6.memoizedProps = r5;
          t6.memoizedState = l2;
        }
        a4.props = r5;
        a4.state = l2;
        a4.context = o3;
        r5 = c2;
      } else {
        if (typeof a4.componentDidMount == `function`) {
          t6.flags |= 4194308;
        }
        r5 = false;
      }
    } else {
      a4 = t6.stateNode;
      yo2(e3, t6);
      o3 = t6.memoizedProps;
      u2 = wc2(n7, o3);
      a4.props = u2;
      d2 = t6.pendingProps;
      f2 = a4.context;
      l2 = n7.contextType;
      c2 = Bi2;
      if (typeof l2 == `object` && l2) {
        c2 = ka(l2);
      }
      s3 = n7.getDerivedStateFromProps;
      if (!((l2 = typeof s3 == `function` || typeof a4.getSnapshotBeforeUpdate == `function`) || typeof a4.UNSAFE_componentWillReceiveProps != `function` && typeof a4.componentWillReceiveProps != `function`)) {
        if (o3 !== d2 || f2 !== c2) {
          Cc(t6, a4, r5, c2);
        }
      }
      _o2 = false;
      f2 = t6.memoizedState;
      a4.state = f2;
      Eo2(t6, r5, a4, i4);
      To();
      let p2 = t6.memoizedState;
      if (o3 !== d2 || f2 !== p2 || _o2 || e3 !== null && e3.dependencies !== null && Da2(e3.dependencies)) {
        if (typeof s3 == `function`) {
          bc(t6, n7, s3, r5);
          p2 = t6.memoizedState;
        }
        if (u2 = _o2 || Sc(t6, n7, u2, r5, f2, p2, c2) || e3 !== null && e3.dependencies !== null && Da2(e3.dependencies)) {
          if (!(l2 || typeof a4.UNSAFE_componentWillUpdate != `function` && typeof a4.componentWillUpdate != `function`)) {
            if (typeof a4.componentWillUpdate == `function`) {
              a4.componentWillUpdate(r5, p2, c2);
            }
            if (typeof a4.UNSAFE_componentWillUpdate == `function`) {
              a4.UNSAFE_componentWillUpdate(r5, p2, c2);
            }
          }
          if (typeof a4.componentDidUpdate == `function`) {
            t6.flags |= 4;
          }
          if (typeof a4.getSnapshotBeforeUpdate == `function`) {
            t6.flags |= 1024;
          }
        } else {
          if (!(typeof a4.componentDidUpdate != `function` || o3 === e3.memoizedProps && f2 === e3.memoizedState)) {
            t6.flags |= 4;
          }
          if (!(typeof a4.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f2 === e3.memoizedState)) {
            t6.flags |= 1024;
          }
          t6.memoizedProps = r5;
          t6.memoizedState = p2;
        }
        a4.props = r5;
        a4.state = p2;
        a4.context = c2;
        r5 = u2;
      } else {
        if (!(typeof a4.componentDidUpdate != `function` || o3 === e3.memoizedProps && f2 === e3.memoizedState)) {
          t6.flags |= 4;
        }
        if (!(typeof a4.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f2 === e3.memoizedState)) {
          t6.flags |= 1024;
        }
        r5 = false;
      }
    }
    a4 = r5;
    Kc(e3, t6);
    r5 = !!(t6.flags & 128);
    if (a4 || r5) {
      a4 = t6.stateNode;
      n7 = r5 && typeof n7.getDerivedStateFromError != `function` ? null : a4.render();
      t6.flags |= 1;
      if (e3 !== null && r5) {
        t6.child = ho2(t6, e3.child, null, i4);
        t6.child = ho2(t6, null, n7, i4);
      } else {
        Ic2(e3, t6, n7, i4);
      }
      t6.memoizedState = a4.state;
      e3 = t6.child;
    } else {
      e3 = dl2(e3, t6, i4);
    }
    return e3;
  }
  function Xc(e3, t6, n7, r5) {
    _a();
    t6.flags |= 256;
    Ic2(e3, t6, n7, r5);
    return t6.child;
  }
  var Zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(e3) {
    return {
      baseLanes: e3,
      cachePool: Za()
    };
  }
  function $c(e3, t6, n7) {
    e3 = e3 === null ? 0 : e3.childLanes & ~n7;
    if (t6) {
      e3 |= ud;
    }
    return e3;
  }
  function el2(e3, t6, n7) {
    let t_pendingProps = t6.pendingProps;
    let i4 = false;
    let a4 = !!(t6.flags & 128);
    let o3;
    if (!(o3 = a4)) {
      o3 = e3 !== null && e3.memoizedState === null ? false : !!(Vo2.current & 2);
    }
    if (o3) {
      i4 = true;
      t6.flags &= -129;
    }
    o3 = !!(t6.flags & 32);
    t6.flags &= -33;
    if (e3 === null) {
      if (F2) {
        if (i4) {
          Io2(t6);
        } else {
          zo2();
        }
        if (e3 = P2) {
          e3 = am(e3, da2);
          e3 = e3 !== null && e3.data !== `&` ? e3 : null;
          if (e3 !== null) {
            t6.memoizedState = {
              dehydrated: e3,
              treeContext: ra2 === null ? null : {
                id: ia2,
                overflow
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n7 = Yi2(e3);
            n7.return = t6;
            t6.child = n7;
            la = t6;
            P2 = null;
          }
        } else {
          e3 = null;
        }
        if (e3 === null) {
          throw pa(t6);
        }
        t6.lanes = sm(e3) ? 32 : 536870912;
        return null;
      }
      a4 = t_pendingProps.children;
      t_pendingProps = t_pendingProps.fallback;
      if (i4) {
        zo2();
        i4 = t6.mode;
        a4 = nl2({
          mode: `hidden`,
          children: a4
        }, i4);
        t_pendingProps = qi2(t_pendingProps, i4, n7, null);
        a4.return = t6;
        t_pendingProps.return = t6;
        a4.sibling = t_pendingProps;
        t6.child = a4;
        t_pendingProps = t6.child;
        t_pendingProps.memoizedState = Qc(n7);
        t_pendingProps.childLanes = $c(e3, o3, n7);
        t6.memoizedState = Zc;
        return Vc2(null, t_pendingProps);
      }
      Io2(t6);
      return tl(t6, a4);
    }
    let e_memoizedState = e3.memoizedState;
    if (e_memoizedState !== null) {
      var c2 = e_memoizedState.dehydrated;
      if (c2 !== null) {
        return il(e3, t6, a4, o3, t_pendingProps, c2, e_memoizedState, n7);
      }
    }
    if (i4) {
      zo2();
      i4 = t_pendingProps.fallback;
      a4 = t6.mode;
      e_memoizedState = e3.child;
      c2 = e_memoizedState.sibling;
      t_pendingProps = Wi2(e_memoizedState, {
        mode: `hidden`,
        children: t_pendingProps.children
      });
      t_pendingProps.subtreeFlags = e_memoizedState.subtreeFlags & 1206910976;
      if (c2 === null) {
        i4 = qi2(i4, a4, n7, null);
        i4.flags |= 2;
      } else {
        i4 = Wi2(c2, i4);
      }
      i4.return = t6;
      t_pendingProps.return = t6;
      t_pendingProps.sibling = i4;
      t6.child = t_pendingProps;
      Vc2(null, t_pendingProps);
      t_pendingProps = t6.child;
      i4 = e3.child.memoizedState;
      if (i4 === null) {
        i4 = Qc(n7);
      } else {
        a4 = i4.cachePool;
        if (a4 === null) {
          a4 = Za();
        } else {
          e_memoizedState = L2._currentValue;
          a4 = a4.parent === e_memoizedState ? a4 : {
            parent: e_memoizedState,
            pool: e_memoizedState
          };
        }
        i4 = {
          baseLanes: i4.baseLanes | n7,
          cachePool: a4
        };
      }
      t_pendingProps.memoizedState = i4;
      t_pendingProps.childLanes = $c(e3, o3, n7);
      t6.memoizedState = Zc;
      return Vc2(e3.child, t_pendingProps);
    }
    Io2(t6);
    n7 = e3.child;
    e3 = n7.sibling;
    n7 = Wi2(n7, {
      mode: `visible`,
      children: t_pendingProps.children
    });
    n7.return = t6;
    n7.sibling = null;
    if (e3 !== null) {
      o3 = t6.deletions;
      if (o3 === null) {
        t6.deletions = [e3];
        t6.flags |= 16;
      } else {
        o3.push(e3);
      }
    }
    t6.child = n7;
    t6.memoizedState = null;
    return n7;
  }
  function tl(e3, children) {
    children = nl2({
      mode: `visible`,
      children
    }, e3.mode);
    children.return = e3;
    return e3.child = children;
  }
  function nl2(e3, t6) {
    e3 = Hi(22, e3, null, t6);
    e3.lanes = 0;
    return e3;
  }
  function rl(e3, t6, n7) {
    ho2(t6, e3.child, null, n7);
    e3 = tl(t6, t6.pendingProps.children);
    e3.flags |= 2;
    t6.memoizedState = null;
    return e3;
  }
  function il(e3, t6, n7, r5, i4, o3, s3, c2) {
    if (n7) {
      if (t6.flags & 256) {
        Io2(t6);
        t6.flags &= -257;
        return rl(e3, t6, c2);
      }
      if (t6.memoizedState === null) {
        zo2();
        o3 = i4.fallback;
        s3 = t6.mode;
        i4 = nl2({
          mode: `visible`,
          children: i4.children
        }, s3);
        o3 = qi2(o3, s3, c2, null);
        o3.flags |= 2;
        i4.return = t6;
        o3.return = t6;
        i4.sibling = o3;
        t6.child = i4;
        ho2(t6, e3.child, null, c2);
        i4 = t6.child;
        i4.memoizedState = Qc(c2);
        i4.childLanes = $c(e3, r5, c2);
        t6.memoizedState = Zc;
        return Vc2(null, i4);
      }
      zo2();
      t6.child = e3.child;
      t6.flags |= 128;
      return null;
    }
    Io2(t6);
    if (sm(o3)) {
      r5 = o3.nextSibling && o3.nextSibling.dataset;
      if (r5) var l2 = r5.dgst;
      r5 = l2;
      if (r5 !== ``) {
        i4 = Error(a3(419));
        i4.stack = ``;
        i4.digest = r5;
        ya2({
          value: i4,
          source: null,
          stack: null
        });
      }
      return rl(e3, t6, c2);
    }
    if (!Fc2) {
      Ea2(e3, t6, c2, false);
    }
    r5 = (c2 & e3.childLanes) !== 0;
    if (Fc2 || r5) {
      if (ko.current !== null) {
        return rl(e3, t6, c2);
      }
      r5 = K;
      if (r5 !== null && (i4 = Ot2(r5, c2), i4 !== 0 && i4 !== s3.retryLane)) {
        s3.retryLane = i4;
        Li2(e3, i4);
        Pd(r5, e3, i4);
        throw Pc;
      }
      if (!om(o3)) {
        Kd();
      }
      return rl(e3, t6, c2);
    }
    if (om(o3)) {
      t6.flags |= 192;
      t6.child = e3.child;
      return null;
    }
    e3 = s3.treeContext;
    P2 = lm(o3.nextSibling);
    la = t6;
    F2 = true;
    ua2 = null;
    da2 = false;
    if (e3 !== null) {
      ca(t6, e3);
    }
    t6 = tl(t6, i4.children);
    t6.flags |= 134221824;
    return t6;
  }
  function al(e3, t6, n7) {
    e3.lanes |= t6;
    const e_alternate = e3.alternate;
    if (e_alternate !== null) {
      e_alternate.lanes |= t6;
    }
    I(e3.return, t6, n7);
  }
  function ol(e3) {
    let t6 = null;
    while (e3 !== null) {
      const n7 = e3.alternate;
      if (n7 !== null && Wo2(n7) === null) {
        t6 = e3;
      }
      e3 = e3.sibling;
    }
    return t6;
  }
  function sl(e3, isBackwards, tail, last, tailMode, treeForkCount) {
    const e_memoizedState = e3.memoizedState;
    if (e_memoizedState === null) {
      e3.memoizedState = {
        isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last,
        tail,
        tailMode,
        treeForkCount
      };
    } else {
      e_memoizedState.isBackwards = isBackwards;
      e_memoizedState.rendering = null;
      e_memoizedState.renderingStartTime = 0;
      e_memoizedState.last = last;
      e_memoizedState.tail = tail;
      e_memoizedState.tailMode = tailMode;
      e_memoizedState.treeForkCount = treeForkCount;
    }
  }
  function cl2(e3) {
    let e_child = e3.child;
    for (e3.child = null; e_child !== null; ) {
      const n7 = e_child.sibling;
      e_child.sibling = e3.child;
      e3.child = e_child;
      e_child = n7;
    }
  }
  function ll(e3, t6, n7) {
    let t_pendingProps = t6.pendingProps;
    let r_revealOrder = t_pendingProps.revealOrder;
    const r_tail = t_pendingProps.tail;
    t_pendingProps = t_pendingProps.children;
    let Vo_current = Vo2.current;
    if (t6.flags & 128) {
      Ho2(t6, Vo_current);
      return null;
    }
    const s3 = !!(Vo_current & 2);
    if (s3) {
      Vo_current = Vo_current & 1 | 2;
      t6.flags |= 128;
    } else {
      Vo_current &= 1;
    }
    Ho2(t6, Vo_current);
    if (r_revealOrder === `backwards` && e3 !== null) {
      cl2(e3);
      Ic2(e3, t6, t_pendingProps, n7);
      cl2(e3);
    } else {
      Ic2(e3, t6, t_pendingProps, n7);
    }
    t_pendingProps = F2 ? ea2 : 0;
    if (!s3 && e3 !== null && e3.flags & 128) {
      a: for (e3 = t6.child; e3 !== null; ) {
        if (e3.tag === 13) {
          if (e3.memoizedState !== null) {
            al(e3, n7, t6);
          }
        } else if (e3.tag === 19) {
          al(e3, n7, t6);
        } else if (e3.child !== null) {
          e3.child.return = e3;
          e3 = e3.child;
          continue;
        }
        if (e3 === t6) {
          break a;
        }
        while (e3.sibling === null) {
          if (e3.return === null || e3.return === t6) {
            break a;
          }
          e3 = e3.return;
        }
        e3.sibling.return = e3.return;
        e3 = e3.sibling;
      }
    }
    switch (r_revealOrder) {
      case `backwards`:
        n7 = ol(t6.child);
        if (n7 === null) {
          r_revealOrder = t6.child;
          t6.child = null;
        } else {
          r_revealOrder = n7.sibling;
          n7.sibling = null;
          cl2(t6);
        }
        sl(t6, true, r_revealOrder, null, r_tail, t_pendingProps);
        break;
      case `unstable_legacy-backwards`:
        n7 = null;
        r_revealOrder = t6.child;
        for (t6.child = null; r_revealOrder !== null; ) {
          e3 = r_revealOrder.alternate;
          if (e3 !== null && Wo2(e3) === null) {
            t6.child = r_revealOrder;
            break;
          }
          e3 = r_revealOrder.sibling;
          r_revealOrder.sibling = n7;
          n7 = r_revealOrder;
          r_revealOrder = e3;
        }
        sl(t6, true, n7, null, r_tail, t_pendingProps);
        break;
      case `together`:
        sl(t6, false, null, null, void 0, t_pendingProps);
        break;
      case `independent`:
        t6.memoizedState = null;
        break;
      default:
        n7 = ol(t6.child);
        if (n7 === null) {
          r_revealOrder = t6.child;
          t6.child = null;
        } else {
          r_revealOrder = n7.sibling;
          n7.sibling = null;
        }
        sl(t6, false, r_revealOrder, n7, r_tail, t_pendingProps);
    }
    return t6.child;
  }
  function ul(e3, t6, n7) {
    const t_pendingProps = t6.pendingProps;
    Ca2(t6, t6.type, t_pendingProps.value);
    Ic2(e3, t6, t_pendingProps.children, n7);
    return t6.child;
  }
  function dl2(e3, t6, n7) {
    if (e3 !== null) {
      t6.dependencies = e3.dependencies;
    }
    sd |= t6.lanes;
    if ((n7 & t6.childLanes) === 0) {
      if (e3 !== null) {
        Ea2(e3, t6, n7, false);
        if ((n7 & t6.childLanes) === 0) {
          return null;
        }
      } else {
        return null;
      }
    }
    if (e3 !== null && t6.child !== e3.child) {
      throw Error(a3(153));
    }
    if (t6.child !== null) {
      e3 = t6.child;
      n7 = Wi2(e3, e3.pendingProps);
      t6.child = n7;
      for (n7.return = t6; e3.sibling !== null; ) {
        e3 = e3.sibling;
        n7 = n7.sibling = Wi2(e3, e3.pendingProps);
        n7.return = t6;
      }
      n7.sibling = null;
    }
    return t6.child;
  }
  function fl(e3, t6) {
    return (e3.lanes & t6) !== 0 || (e3 = e3.dependencies, !!(e3 !== null && Da2(e3)));
  }
  function pl(e3, t6, n7) {
    switch (t6.tag) {
      case 3:
        Ie2(t6, t6.stateNode.containerInfo);
        Ca2(t6, L2, e3.memoizedState.cache);
        _a();
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
        if (t6.memoizedState !== null) {
          t6.flags |= 128;
          Lo2(t6);
          return null;
        }
        break;
      case 13:
        var r5 = t6.memoizedState;
        if (r5 !== null) {
          if (r5.dehydrated !== null) {
            Io2(t6);
            t6.flags |= 128;
            return null;
          }
          r5 = Ea2(e3, t6, n7, false);
          var i4 = t6.child.childLanes;
          if (r5 || (n7 & i4) !== 0) {
            return el2(e3, t6, n7);
          }
          Io2(t6);
          e3 = dl2(e3, t6, n7);
          if (e3 === null) {
            return null;
          }
          return e3.sibling;
        }
        Io2(t6);
        break;
      case 19:
        if (t6.flags & 128) {
          return ll(e3, t6, n7);
        }
        i4 = !!(e3.flags & 128);
        r5 = (n7 & t6.childLanes) !== 0;
        r5 ||= (Ea2(e3, t6, n7, false), (n7 & t6.childLanes) !== 0);
        if (i4) {
          if (r5) {
            return ll(e3, t6, n7);
          }
          t6.flags |= 128;
        }
        i4 = t6.memoizedState;
        if (i4 !== null) {
          i4.rendering = null;
          i4.tail = null;
          i4.lastEffect = null;
        }
        Ho2(t6, Vo2.current);
        if (r5) {
          break;
        }
        return null;
      case 22:
        t6.lanes = 0;
        return Bc(e3, t6, n7, t6.pendingProps);
      case 24:
        Ca2(t6, L2, e3.memoizedState.cache);
    }
    return dl2(e3, t6, n7);
  }
  function ml(e3, t6, n7) {
    if (e3 !== null) {
      if (e3.memoizedProps !== t6.pendingProps) {
        Fc2 = true;
      } else {
        if (!fl(e3, n7) && !(t6.flags & 128)) {
          Fc2 = false;
          return pl(e3, t6, n7);
        }
        Fc2 = !!(e3.flags & 131072);
      }
    } else {
      Fc2 = false;
      if (F2 && t6.flags & 1048576) {
        N(t6, ea2, t6.index);
      }
    }
    t6.lanes = 0;
    switch (t6.tag) {
      case 16:
        a: {
          var r5 = t6.pendingProps;
          e3 = io(t6.elementType);
          t6.type = e3;
          if (typeof e3 == `function`) {
            if (Ui2(e3)) {
              r5 = wc2(e3, r5);
              t6.tag = 1;
              t6 = Yc(null, t6, e3, r5, n7);
            } else {
              t6.tag = 0;
              t6 = qc2(null, t6, e3, r5, n7);
            }
          } else {
            if (e3 != null) {
              var i4 = e3.$$typeof;
              if (i4 === pe) {
                t6.tag = 11;
                t6 = Lc(null, t6, e3, r5, n7);
                break a;
              }
              if (i4 === C2) {
                t6.tag = 14;
                t6 = Rc2(null, t6, e3, r5, n7);
                break a;
              }
              if (i4 === fe) {
                t6.tag = 10;
                t6.type = e3;
                t6 = ul(null, t6, n7);
                break a;
              }
            }
            t6 = Te2(e3) || e3;
            throw Error(a3(306, t6, ``));
          }
        }
        return t6;
      case 0:
        return qc2(e3, t6, t6.type, t6.pendingProps, n7);
      case 1:
        r5 = t6.type;
        i4 = wc2(r5, t6.pendingProps);
        return Yc(e3, t6, r5, i4, n7);
      case 3:
        a: {
          Ie2(t6, t6.stateNode.containerInfo);
          if (e3 === null) {
            throw Error(a3(387));
          }
          r5 = t6.pendingProps;
          var o3 = t6.memoizedState;
          i4 = o3.element;
          yo2(e3, t6);
          Eo2(t6, r5, null, n7);
          var s3 = t6.memoizedState;
          r5 = s3.cache;
          Ca2(t6, L2, r5);
          if (r5 !== o3.cache) {
            Ta2(t6, [L2], n7, true);
          }
          To();
          r5 = s3.element;
          if (o3.isDehydrated) {
            o3 = {
              element: r5,
              isDehydrated: false,
              cache: s3.cache
            };
            t6.updateQueue.baseState = o3;
            t6.memoizedState = o3;
            if (t6.flags & 256) {
              t6 = Xc(e3, t6, r5, n7);
              break a;
            }
            if (r5 !== i4) {
              i4 = Qi2(Error(a3(424)), t6);
              ya2(i4);
              t6 = Xc(e3, t6, r5, n7);
              break a;
            }
            e3 = t6.stateNode.containerInfo;
            switch (e3.nodeType) {
              case 9:
                e3 = e3.body;
                break;
              default:
                e3 = e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
            }
            P2 = lm(e3.firstChild);
            la = t6;
            F2 = true;
            ua2 = null;
            da2 = true;
            n7 = go2(t6, null, r5, n7);
            for (t6.child = n7; n7; ) {
              n7.flags = n7.flags & -3 | 134221824;
              n7 = n7.sibling;
            }
          } else {
            _a();
            if (r5 === i4) {
              t6 = dl2(e3, t6, n7);
              break a;
            }
            Ic2(e3, t6, r5, n7);
          }
          t6 = t6.child;
        }
        return t6;
      case 26:
        Kc(e3, t6);
        if (e3 === null) {
          if (n7 = Nm(t6.type, null, t6.pendingProps, null)) {
            t6.memoizedState = n7;
          } else if (!F2) {
            t6.stateNode = fp(t6.type, t6.pendingProps, Pe2.current, t6);
          }
        } else {
          t6.memoizedState = Nm(t6.type, e3.memoizedProps, t6.pendingProps, e3.memoizedState);
        }
        return null;
      case 27:
        Re2(t6);
        if (e3 === null && F2) {
          r5 = t6.stateNode = hm(t6.type, t6.pendingProps, Pe2.current);
          la = t6;
          da2 = true;
          i4 = P2;
          if (Sp(t6.type)) {
            um = i4;
            P2 = lm(r5.firstChild);
          } else {
            P2 = i4;
          }
        }
        Ic2(e3, t6, t6.pendingProps.children, n7);
        Kc(e3, t6);
        if (e3 === null) {
          t6.flags |= 4194304;
        }
        return t6.child;
      case 5:
        if (e3 === null && F2) {
          if (i4 = r5 = P2) {
            r5 = rm(r5, t6.type, t6.pendingProps, da2);
            if (r5 === null) {
              i4 = false;
            } else {
              t6.stateNode = r5;
              la = t6;
              P2 = lm(r5.firstChild);
              da2 = false;
              i4 = true;
            }
          }
          if (!i4) {
            pa(t6);
          }
        }
        Re2(t6);
        i4 = t6.type;
        o3 = t6.pendingProps;
        s3 = e3 === null ? null : e3.memoizedProps;
        r5 = o3.children;
        if (pp(i4, o3)) {
          r5 = null;
        } else if (s3 !== null && pp(i4, s3)) {
          t6.flags |= 32;
        }
        if (t6.memoizedState !== null) {
          i4 = ts(e3, t6, useIs, null, null, n7);
          sh._currentValue = i4;
        }
        Kc(e3, t6);
        Ic2(e3, t6, r5, n7);
        return t6.child;
      case 6:
        if (e3 === null && F2) {
          if (e3 = n7 = P2) {
            n7 = im(n7, t6.pendingProps, da2);
            if (n7 === null) {
              e3 = false;
            } else {
              t6.stateNode = n7;
              la = t6;
              P2 = null;
              e3 = true;
            }
          }
          if (!e3) {
            pa(t6);
          }
        }
        return null;
      case 13:
        return el2(e3, t6, n7);
      case 4:
        Ie2(t6, t6.stateNode.containerInfo);
        r5 = t6.pendingProps;
        if (e3 === null) {
          t6.child = ho2(t6, null, r5, n7);
        } else {
          Ic2(e3, t6, r5, n7);
        }
        return t6.child;
      case 11:
        return Lc(e3, t6, t6.type, t6.pendingProps, n7);
      case 7:
        r5 = t6.pendingProps;
        Kc(e3, t6);
        Ic2(e3, t6, r5, n7);
        return t6.child;
      case 8:
        Ic2(e3, t6, t6.pendingProps.children, n7);
        return t6.child;
      case 12:
        Ic2(e3, t6, t6.pendingProps.children, n7);
        return t6.child;
      case 10:
        return ul(e3, t6, n7);
      case 9:
        i4 = t6.type._context;
        r5 = t6.pendingProps.children;
        Oa(t6);
        i4 = ka(i4);
        r5 = r5(i4);
        t6.flags |= 1;
        Ic2(e3, t6, r5, n7);
        return t6.child;
      case 14:
        return Rc2(e3, t6, t6.type, t6.pendingProps, n7);
      case 15:
        return zc(e3, t6, t6.type, t6.pendingProps, n7);
      case 19:
        return ll(e3, t6, n7);
      case 31:
        return Gc2(e3, t6, n7);
      case 22:
        return Bc(e3, t6, n7, t6.pendingProps);
      case 24:
        Oa(t6);
        r5 = ka(L2);
        if (e3 === null) {
          i4 = Ya();
          if (i4 === null) {
            i4 = K;
            o3 = Fa();
            i4.pooledCache = o3;
            o3.refCount++;
            if (o3 !== null) {
              i4.pooledCacheLanes |= n7;
            }
            i4 = o3;
          }
          t6.memoizedState = {
            parent: r5,
            cache: i4
          };
          vo2(t6);
          Ca2(t6, L2, i4);
        } else {
          if ((e3.lanes & n7) !== 0) {
            yo2(e3, t6);
            Eo2(t6, null, null, n7);
            To();
          }
          i4 = e3.memoizedState;
          o3 = t6.memoizedState;
          if (i4.parent === r5) {
            r5 = o3.cache;
            Ca2(t6, L2, r5);
            if (r5 !== i4.cache) {
              Ta2(t6, [L2], n7, true);
            }
          } else {
            i4 = {
              parent: r5,
              cache: r5
            };
            t6.memoizedState = i4;
            if (t6.lanes === 0) {
              t6.memoizedState = t6.updateQueue.baseState = i4;
            }
            Ca2(t6, L2, r5);
          }
        }
        Ic2(e3, t6, t6.pendingProps.children, n7);
        return t6.child;
      case 30:
        if (t6.stateNode === null) {
          t6.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
        }
        r5 = t6.pendingProps;
        if (r5.name != null && r5.name !== `auto`) {
          t6.flags |= e3 === null ? 18882560 : 18874368;
        } else if (F2) {
          oa(t6);
        }
        if (e3 !== null && e3.memoizedProps.name !== r5.name) {
          t6.flags |= 4194816;
        } else {
          Kc(e3, t6);
        }
        Ic2(e3, t6, r5.children, n7);
        return t6.child;
      case 29:
        throw t6.pendingProps;
    }
    throw Error(a3(156, t6.tag));
  }
  function hl(e3) {
    e3.flags |= 4;
  }
  function gl(e3, t6, n7, r5, i4) {
    let a4;
    if (a4 = !!(e3.mode & 32)) {
      a4 = n7 === null ? Jm(t6, r5) : Jm(t6, r5) && (r5.src !== n7.src || r5.srcSet !== n7.srcSet);
    }
    if (a4) {
      e3.flags |= 16777216;
      if ((i4 & 335544128) === i4) {
        if (e3.stateNode.complete) {
          e3.flags |= 8192;
        } else if (Ud()) {
          e3.flags |= 8192;
        } else {
          ao2 = to2;
          throw $a2;
        }
      }
    } else {
      e3.flags &= -16777217;
    }
  }
  function _l2(e3, t6) {
    if (t6.type !== `stylesheet` || t6.state.loading & 4) {
      e3.flags &= -16777217;
    } else {
      e3.flags |= 16777216;
      if (!Ym(t6)) {
        if (Ud()) {
          e3.flags |= 8192;
        } else {
          ao2 = to2;
          throw $a2;
        }
      }
    }
  }
  function vl2(e3, t6) {
    if (t6 !== null) {
      e3.flags |= 4;
    }
    if (e3.flags & 16384) {
      t6 = e3.tag === 22 ? 536870912 : St2();
      e3.lanes |= t6;
      dd |= t6;
    }
  }
  function yl(e3, t6) {
    if (!F2) {
      switch (e3.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n7 = e3.tail, r5 = null; n7 !== null; ) {
            if (n7.alternate !== null) {
              r5 = n7;
            }
            n7 = n7.sibling;
          }
          if (r5 === null) {
            if (t6 || e3.tail === null) {
              e3.tail = null;
            } else {
              e3.tail.sibling = null;
            }
          } else {
            r5.sibling = null;
          }
          break;
        default:
          t6 = e3.tail;
          for (n7 = null; t6 !== null; ) {
            if (t6.alternate !== null) {
              n7 = t6;
            }
            t6 = t6.sibling;
          }
          if (n7 === null) {
            e3.tail = null;
          } else {
            n7.sibling = null;
          }
      }
    }
  }
  function H2(e3) {
    const t6 = e3.alternate !== null && e3.alternate.child === e3.child;
    let n7 = 0;
    let r5 = 0;
    if (t6) {
      for (var i4 = e3.child; i4 !== null; ) {
        n7 |= i4.lanes | i4.childLanes;
        r5 |= i4.subtreeFlags & 1206910976;
        r5 |= i4.flags & 1206910976;
        i4.return = e3;
        i4 = i4.sibling;
      }
    } else {
      for (i4 = e3.child; i4 !== null; ) {
        n7 |= i4.lanes | i4.childLanes;
        r5 |= i4.subtreeFlags;
        r5 |= i4.flags;
        i4.return = e3;
        i4 = i4.sibling;
      }
    }
    e3.subtreeFlags |= r5;
    e3.childLanes = n7;
    return t6;
  }
  function BlComponent(e3, t6, n7) {
    let t_pendingProps = t6.pendingProps;
    sa(t6);
    switch (t6.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        H2(t6);
        return null;
      case 1:
        H2(t6);
        return null;
      case 3:
        n7 = t6.stateNode;
        t_pendingProps = null;
        if (e3 !== null) {
          t_pendingProps = e3.memoizedState.cache;
        }
        if (t6.memoizedState.cache !== t_pendingProps) {
          t6.flags |= 2048;
        }
        wa2(L2);
        Le2();
        if (n7.pendingContext) {
          n7.context = n7.pendingContext;
          n7.pendingContext = null;
        }
        if (e3 === null || e3.child === null) {
          if (ga2(t6)) {
            hl(t6);
          } else if (!(e3 === null || e3.memoizedState.isDehydrated && !(t6.flags & 256))) {
            t6.flags |= 1024;
            va2();
          }
        }
        H2(t6);
        return null;
      case 26:
        var i4 = t6.type;
        var o3 = t6.memoizedState;
        if (e3 === null) {
          hl(t6);
          if (o3 === null) {
            H2(t6);
            gl(t6, i4, null, t_pendingProps, n7);
          } else {
            H2(t6);
            _l2(t6, o3);
          }
        } else if (o3) {
          if (o3 === e3.memoizedState) {
            H2(t6);
            t6.flags &= -16777217;
          } else {
            hl(t6);
            H2(t6);
            _l2(t6, o3);
          }
        } else {
          e3 = e3.memoizedProps;
          if (e3 !== t_pendingProps) {
            hl(t6);
          }
          H2(t6);
          gl(t6, i4, e3, t_pendingProps, n7);
        }
        return null;
      case 27:
        ze2(t6);
        n7 = Pe2.current;
        i4 = t6.type;
        if (e3 !== null && t6.stateNode != null) {
          if (e3.memoizedProps !== t_pendingProps) {
            hl(t6);
          }
        } else {
          if (!t_pendingProps) {
            if (t6.stateNode === null) {
              throw Error(a3(166));
            }
            H2(t6);
            t6.subtreeFlags &= -33554433;
            return null;
          }
          e3 = Me2.current;
          if (ga2(t6)) {
            ma2(t6, e3);
          } else {
            e3 = hm(i4, t_pendingProps, n7);
            t6.stateNode = e3;
            hl(t6);
          }
        }
        H2(t6);
        t6.subtreeFlags &= -33554433;
        return null;
      case 5:
        ze2(t6);
        i4 = t6.type;
        if (e3 !== null && t6.stateNode != null) {
          if (e3.memoizedProps !== t_pendingProps) {
            hl(t6);
          }
        } else {
          if (!t_pendingProps) {
            if (t6.stateNode === null) {
              throw Error(a3(166));
            }
            H2(t6);
            t6.subtreeFlags &= -33554433;
            return null;
          }
          o3 = Me2.current;
          if (ga2(t6)) {
            ma2(t6, o3);
          } else {
            let s3 = lp(Pe2.current);
            switch (o3) {
              case 1:
                o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, i4);
                break;
              case 2:
                o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                break;
              default:
                switch (i4) {
                  case `svg`:
                    o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, i4);
                    break;
                  case `math`:
                    o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                    break;
                  case `script`:
                    o3 = s3.createElement(`div`);
                    o3.innerHTML = `<script><\/script>`;
                    o3 = o3.removeChild(o3.firstChild);
                    break;
                  case `select`:
                    o3 = typeof t_pendingProps.is == `string` ? /* @__PURE__ */ jsx("select", { is: t_pendingProps.is }) : s3.createElement(`select`);
                    if (t_pendingProps.multiple) {
                      o3.multiple = true;
                    } else if (t_pendingProps.size) {
                      o3.size = t_pendingProps.size;
                    }
                    break;
                  default:
                    o3 = typeof t_pendingProps.is == `string` ? s3.createElement(i4, {
                      is: t_pendingProps.is
                    }) : s3.createElement(i4);
                }
            }
            o3[Pt2] = t6;
            o3[Ft2] = t_pendingProps;
            a: for (s3 = t6.child; s3 !== null; ) {
              if (s3.tag === 5 || s3.tag === 6) {
                o3.appendChild(s3.stateNode);
              } else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                s3.child.return = s3;
                s3 = s3.child;
                continue;
              }
              if (s3 === t6) {
                break a;
              }
              while (s3.sibling === null) {
                if (s3.return === null || s3.return === t6) {
                  break a;
                }
                s3 = s3.return;
              }
              s3.sibling.return = s3.return;
              s3 = s3.sibling;
            }
            t6.stateNode = o3;
            a: switch (np(o3, i4, t_pendingProps), i4) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                t_pendingProps = !!t_pendingProps.autoFocus;
                break a;
              case `img`:
                t_pendingProps = true;
                break a;
              default:
                t_pendingProps = false;
            }
            if (t_pendingProps) {
              hl(t6);
            }
          }
        }
        H2(t6);
        t6.subtreeFlags &= -33554433;
        gl(t6, t6.type, e3 === null ? null : e3.memoizedProps, t6.pendingProps, n7);
        return null;
      case 6:
        if (e3 && t6.stateNode != null) {
          if (e3.memoizedProps !== t_pendingProps) {
            hl(t6);
          }
        } else {
          if (typeof t_pendingProps != `string` && t6.stateNode === null) {
            throw Error(a3(166));
          }
          e3 = Pe2.current;
          if (ga2(t6)) {
            e3 = t6.stateNode;
            n7 = t6.memoizedProps;
            t_pendingProps = null;
            i4 = la;
            if (i4 !== null) {
              switch (i4.tag) {
                case 27:
                case 5:
                  t_pendingProps = i4.memoizedProps;
              }
            }
            e3[Pt2] = t6;
            e3 = !!(e3.nodeValue === n7 || t_pendingProps !== null && t_pendingProps.suppressHydrationWarning === true || ep(e3.nodeValue, n7));
            if (!e3) {
              pa(t6, true);
            }
          } else {
            e3 = lp(e3).createTextNode(t_pendingProps);
            e3[Pt2] = t6;
            t6.stateNode = e3;
          }
        }
        H2(t6);
        return null;
      case 31:
        n7 = t6.memoizedState;
        if (e3 === null || e3.memoizedState !== null) {
          t_pendingProps = ga2(t6);
          if (n7 !== null) {
            if (e3 === null) {
              if (!t_pendingProps) {
                throw Error(a3(318));
              }
              e3 = t6.memoizedState;
              e3 = e3 === null ? null : e3.dehydrated;
              if (!e3) {
                throw Error(a3(557));
              }
              e3[Pt2] = t6;
            } else {
              _a();
              if (!(t6.flags & 128)) {
                t6.memoizedState = null;
              }
              t6.flags |= 4;
            }
            H2(t6);
            e3 = false;
          } else {
            n7 = va2();
            if (e3 !== null && e3.memoizedState !== null) {
              e3.memoizedState.hydrationErrors = n7;
            }
            e3 = true;
          }
          if (!e3) {
            if (t6.flags & 256) {
              Bo2(t6);
              return t6;
            }
            Bo2(t6);
            return null;
          }
          if (t6.flags & 128) {
            throw Error(a3(558));
          }
        }
        H2(t6);
        return null;
      case 13:
        t_pendingProps = t6.memoizedState;
        if (e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
          i4 = ga2(t6);
          if (t_pendingProps !== null && t_pendingProps.dehydrated !== null) {
            if (e3 === null) {
              if (!i4) {
                throw Error(a3(318));
              }
              i4 = t6.memoizedState;
              i4 = i4 === null ? null : i4.dehydrated;
              if (!i4) {
                throw Error(a3(317));
              }
              i4[Pt2] = t6;
            } else {
              _a();
              if (!(t6.flags & 128)) {
                t6.memoizedState = null;
              }
              t6.flags |= 4;
            }
            H2(t6);
            i4 = false;
          } else {
            i4 = va2();
            if (e3 !== null && e3.memoizedState !== null) {
              e3.memoizedState.hydrationErrors = i4;
            }
            i4 = true;
          }
          if (!i4) {
            if (t6.flags & 256) {
              Bo2(t6);
              return t6;
            }
            Bo2(t6);
            return null;
          }
        }
        Bo2(t6);
        if (t6.flags & 128) {
          t6.lanes = n7;
          return t6;
        }
        n7 = t_pendingProps !== null;
        e3 = e3 !== null && e3.memoizedState !== null;
        if (n7) {
          t_pendingProps = t6.child;
          i4 = null;
          if (t_pendingProps.alternate !== null && t_pendingProps.alternate.memoizedState !== null && t_pendingProps.alternate.memoizedState.cachePool !== null) {
            i4 = t_pendingProps.alternate.memoizedState.cachePool.pool;
          }
          o3 = null;
          if (t_pendingProps.memoizedState !== null && t_pendingProps.memoizedState.cachePool !== null) {
            o3 = t_pendingProps.memoizedState.cachePool.pool;
          }
          if (o3 !== i4) {
            t_pendingProps.flags |= 2048;
          }
        }
        if (n7 !== e3 && n7) {
          t6.child.flags |= 8192;
        }
        vl2(t6, t6.updateQueue);
        H2(t6);
        return null;
      case 4:
        Le2();
        if (e3 === null) {
          Wf(t6.stateNode.containerInfo);
        }
        t6.flags |= 67108864;
        H2(t6);
        return null;
      case 10:
        wa2(t6.type);
        H2(t6);
        return null;
      case 19:
        Uo2(t6);
        t_pendingProps = t6.memoizedState;
        if (t_pendingProps === null) {
          H2(t6);
          return null;
        }
        i4 = !!(t6.flags & 128);
        o3 = t_pendingProps.rendering;
        if (o3 === null) {
          if (i4) {
            yl(t_pendingProps, false);
          } else {
            if (od !== 0 || e3 !== null && e3.flags & 128) {
              for (e3 = t6.child; e3 !== null; ) {
                o3 = Wo2(e3);
                if (o3 !== null) {
                  t6.flags |= 128;
                  yl(t_pendingProps, false);
                  e3 = o3.updateQueue;
                  t6.updateQueue = e3;
                  vl2(t6, e3);
                  t6.subtreeFlags = 0;
                  e3 = n7;
                  for (n7 = t6.child; n7 !== null; ) {
                    Gi2(n7, e3);
                    n7 = n7.sibling;
                  }
                  Ho2(t6, Vo2.current & 1 | 2);
                  if (F2) {
                    aa(t6, t_pendingProps.treeForkCount);
                  }
                  return t6.child;
                }
                e3 = e3.sibling;
              }
            }
            if (t_pendingProps.tail !== null && t_unstable_now() > _d) {
              t6.flags |= 128;
              i4 = true;
              yl(t_pendingProps, false);
              t6.lanes = 4194304;
            }
          }
        } else {
          if (!i4) {
            e3 = Wo2(o3);
            if (e3 !== null) {
              t6.flags |= 128;
              i4 = true;
              e3 = e3.updateQueue;
              t6.updateQueue = e3;
              vl2(t6, e3);
              yl(t_pendingProps, true);
              if (t_pendingProps.tail === null && t_pendingProps.tailMode !== `collapsed` && t_pendingProps.tailMode !== `visible` && !o3.alternate && !F2) {
                H2(t6);
                return null;
              }
            } else {
              if (2 * t_unstable_now() - t_pendingProps.renderingStartTime > _d && n7 !== 536870912) {
                t6.flags |= 128;
                i4 = true;
                yl(t_pendingProps, false);
                t6.lanes = 4194304;
              }
            }
          }
          if (t_pendingProps.isBackwards) {
            o3.sibling = t6.child;
            t6.child = o3;
          } else {
            e3 = t_pendingProps.last;
            if (e3 === null) {
              t6.child = o3;
            } else {
              e3.sibling = o3;
            }
            t_pendingProps.last = o3;
          }
        }
        if (t_pendingProps.tail !== null) {
          e3 = t_pendingProps.tail;
          a: {
            for (n7 = e3; n7 !== null; ) {
              if (n7.alternate !== null) {
                n7 = false;
                break a;
              }
              n7 = n7.sibling;
            }
            n7 = true;
          }
          t_pendingProps.rendering = e3;
          t_pendingProps.tail = e3.sibling;
          t_pendingProps.renderingStartTime = t_unstable_now();
          e3.sibling = null;
          o3 = Vo2.current;
          o3 = i4 ? o3 & 1 | 2 : o3 & 1;
          if (t_pendingProps.tailMode === `visible` || t_pendingProps.tailMode === `collapsed` || !n7 || F2) {
            Ho2(t6, o3);
          } else {
            n7 = o3;
            E2(Po, t6);
            E2(Vo2, n7);
            if (Fo === null) {
              Fo = t6;
            }
          }
          if (F2) {
            aa(t6, t_pendingProps.treeForkCount);
          }
          return e3;
        }
        H2(t6);
        return null;
      case 22:
      case 23:
        Bo2(t6);
        No();
        t_pendingProps = t6.memoizedState !== null;
        if (e3 === null) {
          if (t_pendingProps) {
            t6.flags |= 8192;
          }
        } else if (e3.memoizedState !== null !== t_pendingProps) {
          t6.flags |= 8192;
        }
        if (t_pendingProps) {
          if (n7 & 536870912 && !(t6.flags & 128)) {
            H2(t6);
            if (t6.subtreeFlags & 6) {
              t6.flags |= 8192;
            }
          }
        } else {
          H2(t6);
        }
        n7 = t6.updateQueue;
        if (n7 !== null) {
          vl2(t6, n7.retryQueue);
        }
        n7 = null;
        if (e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null) {
          n7 = e3.memoizedState.cachePool.pool;
        }
        t_pendingProps = null;
        if (t6.memoizedState !== null && t6.memoizedState.cachePool !== null) {
          t_pendingProps = t6.memoizedState.cachePool.pool;
        }
        if (t_pendingProps !== n7) {
          t6.flags |= 2048;
        }
        if (e3 !== null) {
          je2(Ja);
        }
        return null;
      case 24:
        n7 = null;
        if (e3 !== null) {
          n7 = e3.memoizedState.cache;
        }
        if (t6.memoizedState.cache !== n7) {
          t6.flags |= 2048;
        }
        wa2(L2);
        H2(t6);
        return null;
      case 25:
        return null;
      case 30:
        t6.flags |= 33554432;
        H2(t6);
        return null;
    }
    throw Error(a3(156, t6.tag));
  }
  function xl2(e3, t6) {
    sa(t6);
    switch (t6.tag) {
      case 1:
        e3 = t6.flags;
        if (e3 & 65536) {
          t6.flags = e3 & -65537 | 128;
          return t6;
        }
        return null;
      case 3:
        wa2(L2);
        Le2();
        e3 = t6.flags;
        if (e3 & 65536 && !(e3 & 128)) {
          t6.flags = e3 & -65537 | 128;
          return t6;
        }
        return null;
      case 26:
      case 27:
      case 5:
        ze2(t6);
        return null;
      case 31:
        if (t6.memoizedState !== null) {
          Bo2(t6);
          if (t6.alternate === null) {
            throw Error(a3(340));
          }
          _a();
        }
        e3 = t6.flags;
        if (e3 & 65536) {
          t6.flags = e3 & -65537 | 128;
          return t6;
        }
        return null;
      case 13:
        Bo2(t6);
        e3 = t6.memoizedState;
        if (e3 !== null && e3.dehydrated !== null) {
          if (t6.alternate === null) {
            throw Error(a3(340));
          }
          _a();
        }
        e3 = t6.flags;
        if (e3 & 65536) {
          t6.flags = e3 & -65537 | 128;
          return t6;
        }
        return null;
      case 19:
        Uo2(t6);
        e3 = t6.flags;
        if (e3 & 65536) {
          t6.flags = e3 & -65537 | 128;
          e3 = t6.memoizedState;
          if (e3 !== null) {
            e3.rendering = null;
            e3.tail = null;
          }
          t6.flags |= 4;
          return t6;
        }
        return null;
      case 4:
        Le2();
        return null;
      case 10:
        wa2(t6.type);
        return null;
      case 22:
      case 23:
        Bo2(t6);
        No();
        if (e3 !== null) {
          je2(Ja);
        }
        e3 = t6.flags;
        if (e3 & 65536) {
          t6.flags = e3 & -65537 | 128;
          return t6;
        }
        return null;
      case 24:
        wa2(L2);
        return null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sl2(e3, t6) {
    sa(t6);
    switch (t6.tag) {
      case 3:
        wa2(L2);
        Le2();
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
        if (t6.memoizedState !== null) {
          Bo2(t6);
        }
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
        Bo2(t6);
        No();
        if (e3 !== null) {
          je2(Ja);
        }
        break;
      case 24:
        wa2(L2);
    }
  }
  function Cl2(e3, t6) {
    try {
      let n7 = t6.updateQueue;
      let r5 = n7 === null ? null : n7.lastEffect;
      if (r5 !== null) {
        const i4 = r5.next;
        n7 = i4;
        do {
          if ((n7.tag & e3) === e3) {
            r5 = void 0;
            const {
              create,
              inst
            } = n7;
            r5 = create();
            inst.destroy = r5;
          }
          n7 = n7.next;
        } while (n7 !== i4);
      }
    } catch (error) {
      Z(t6, t6.return, error);
    }
  }
  function wl2(e3, t6, n7) {
    try {
      let r5 = t6.updateQueue;
      let i4 = r5 === null ? null : r5.lastEffect;
      if (i4 !== null) {
        const a4 = i4.next;
        r5 = a4;
        do {
          if ((r5.tag & e3) === e3) {
            const o3 = r5.inst;
            const s3 = o3.destroy;
            if (s3 !== void 0) {
              o3.destroy = void 0;
              i4 = t6;
              const c2 = n7;
              const l2 = s3;
              try {
                l2();
              } catch (error) {
                Z(i4, c2, error);
              }
            }
          }
          r5 = r5.next;
        } while (r5 !== a4);
      }
    } catch (error) {
      Z(t6, t6.return, error);
    }
  }
  function Tl2(e3) {
    const e_updateQueue = e3.updateQueue;
    if (e_updateQueue !== null) {
      const n7 = e3.stateNode;
      try {
        Oo(e_updateQueue, n7);
      } catch (error) {
        Z(e3, e3.return, error);
      }
    }
  }
  function El2(e3, t6, n7) {
    n7.props = wc2(e3.type, e3.memoizedProps);
    n7.state = e3.memoizedState;
    try {
      n7.componentWillUnmount();
    } catch (error) {
      Z(e3, t6, error);
    }
  }
  function Dl2(e3, t6) {
    try {
      const n7 = e3.ref;
      if (n7 !== null) {
        switch (e3.tag) {
          case 26:
          case 27:
          case 5:
            var r5 = e3.stateNode;
            break;
          case 30:
            const i4 = e3.stateNode;
            const a4 = k2(e3.memoizedProps, i4);
            if (i4.ref === null || i4.ref.name !== a4) {
              i4.ref = Pp(a4);
            }
            r5 = i4.ref;
            break;
          case 7:
            if (e3.stateNode === null) {
              const o3 = new Fp(e3);
              p(e3.child, false, Qp, o3, void 0, void 0);
              e3.stateNode = o3;
            }
            r5 = e3.stateNode;
            break;
          default:
            r5 = e3.stateNode;
        }
        if (typeof n7 == `function`) {
          e3.refCleanup = n7(r5);
        } else {
          n7.current = r5;
        }
      }
    } catch (error) {
      Z(e3, t6, error);
    }
  }
  function Ol(e3, t6) {
    const {
      ref,
      refCleanup
    } = e3;
    if (ref !== null) {
      if (typeof refCleanup == `function`) {
        try {
          refCleanup();
        } catch (error) {
          Z(e3, t6, error);
        } finally {
          e3.refCleanup = null;
          e3 = e3.alternate;
          if (e3 != null) {
            e3.refCleanup = null;
          }
        }
      } else if (typeof ref == `function`) {
        try {
          ref(null);
        } catch (error) {
          Z(e3, t6, error);
        }
      } else {
        ref.current = null;
      }
    }
  }
  function kl(e3, t6) {
    if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && e3.alternate === null && t6 !== null) {
      for (let n7 = 0; n7 < t6.length; n7++) {
        em(e3.stateNode, t6[n7]);
      }
    }
  }
  function Al(e3) {
    for (let t6 = e3.return; t6 !== null && (Nl2(t6) && em(e3.stateNode, t6.stateNode), !Ml2(t6)); ) {
      t6 = t6.return;
    }
  }
  function jl2(e3) {
    for (let t6 = e3.return; t6 !== null && (Nl2(t6) && tm(e3.stateNode, t6.stateNode), !Ml2(t6)); ) {
      t6 = t6.return;
    }
  }
  function Ml2(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 27;
  }
  function Nl2(e3) {
    return e3 && e3.tag === 7 && e3.stateNode !== null;
  }
  function Pl2(e3) {
    const {
      type,
      memoizedProps,
      stateNode
    } = e3;
    try {
      a: switch (type) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          if (memoizedProps.autoFocus) {
            stateNode.focus();
          }
          break a;
        case `img`:
          if (memoizedProps.src) {
            stateNode.src = memoizedProps.src;
          } else if (memoizedProps.srcSet) {
            stateNode.srcset = memoizedProps.srcSet;
          }
      }
    } catch (error) {
      Z(e3, e3.return, error);
    }
  }
  function Fl2(e3, t6, n7) {
    try {
      const r5 = e3.stateNode;
      ip(r5, e3.type, n7, t6);
      r5[Ft2] = t6;
    } catch (error) {
      Z(e3, e3.return, error);
    }
  }
  function Il2(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 26 || e3.tag === 27 && Sp(e3.type) || e3.tag === 4;
  }
  function Ll2(e3) {
    a: while (true) {
      while (e3.sibling === null) {
        if (e3.return === null || Il2(e3.return)) {
          return null;
        }
        e3 = e3.return;
      }
      e3.sibling.return = e3.return;
      for (e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
        if (e3.tag === 27 && Sp(e3.type) || e3.flags & 2 || e3.child === null || e3.tag === 4) {
          continue a;
        }
        e3.child.return = e3;
        e3 = e3.child;
      }
      if (!(e3.flags & 2)) {
        return e3.stateNode;
      }
    }
  }
  function Rl2(e3, t6, n7, r5) {
    let e_tag = e3.tag;
    if (e_tag === 5 || e_tag === 6) {
      e_tag = e3.stateNode;
      if (t6) {
        (n7.nodeType === 9 ? n7.body : n7.nodeName === `HTML` ? n7.ownerDocument.body : n7).insertBefore(e_tag, t6);
      } else {
        t6 = n7.nodeType === 9 ? n7.body : n7.nodeName === `HTML` ? n7.ownerDocument.body : n7;
        t6.appendChild(e_tag);
        n7 = n7._reactRootContainer;
        if (!(n7 != null || t6.onclick !== null)) {
          t6.onclick = unsuspend;
        }
      }
      kl(e3, r5);
      D2 = true;
    } else if (e_tag !== 4 && (e_tag === 27 && (kl(e3, r5), r5 = null, Sp(e3.type) && (n7 = e3.stateNode, t6 = null)), e3 = e3.child, e3 !== null)) {
      Rl2(e3, t6, n7, r5);
      for (e3 = e3.sibling; e3 !== null; ) {
        Rl2(e3, t6, n7, r5);
        e3 = e3.sibling;
      }
    }
  }
  function zl(e3, t6, n7, r5) {
    let e_tag = e3.tag;
    if (e_tag === 5 || e_tag === 6) {
      e_tag = e3.stateNode;
      if (t6) {
        n7.insertBefore(e_tag, t6);
      } else {
        n7.appendChild(e_tag);
      }
      kl(e3, r5);
      D2 = true;
    } else if (e_tag !== 4 && (e_tag === 27 && (kl(e3, r5), r5 = null, Sp(e3.type) && (n7 = e3.stateNode)), e3 = e3.child, e3 !== null)) {
      zl(e3, t6, n7, r5);
      for (e3 = e3.sibling; e3 !== null; ) {
        zl(e3, t6, n7, r5);
        e3 = e3.sibling;
      }
    }
  }
  function Bl2(e3) {
    const {
      stateNode,
      memoizedProps
    } = e3;
    try {
      const r5 = e3.type;
      for (const i4 = stateNode.attributes; i4.length; ) {
        stateNode.removeAttributeNode(i4[0]);
      }
      np(stateNode, r5, memoizedProps);
      stateNode[Pt2] = e3;
      stateNode[Ft2] = memoizedProps;
    } catch (error) {
      Z(e3, e3.return, error);
    }
  }
  var Vl = false;
  var Hl = null;
  function Ul(focusedElem) {
    if (focusedElem.tag === 30 || focusedElem.subtreeFlags & 33554432) {
      Vl = true;
    }
  }
  var Wl = null;
  function Gl2() {
    const e3 = Wl;
    Wl = null;
    return e3;
  }
  var Kl = 0;
  function ql(e3, t6, n7, r5, i4) {
    Kl = 0;
    return Jl(e3.child, t6, n7, r5, i4);
  }
  function Jl(e3, t6, n7, r5, i4) {
    let a4 = false;
    while (e3 !== null) {
      if (e3.tag === 5) {
        const o3 = e3.stateNode;
        if (r5 !== null) {
          const s3 = Op(o3);
          r5.push(s3);
          if (s3.view) {
            a4 = true;
          }
        } else {
          if (!a4) {
            if (Op(o3).view) {
              a4 = true;
            }
          }
        }
        Vl = true;
        Tp(o3, Kl === 0 ? t6 : t6 + `_` + Kl, n7);
        Kl++;
      } else {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (!(e3.tag === 30 && i4)) {
            if (Jl(e3.child, t6, n7, r5, i4)) {
              a4 = true;
            }
          }
        }
      }
      e3 = e3.sibling;
    }
    return a4;
  }
  function Yl(e3, t6) {
    while (e3 !== null) {
      if (e3.tag === 5) {
        Ep(e3.stateNode, e3.memoizedProps);
      } else {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (!(e3.tag === 30 && t6)) {
            Yl(e3.child, t6);
          }
        }
      }
      e3 = e3.sibling;
    }
  }
  function Xl(e3) {
    if (e3.subtreeFlags & 18874368) {
      for (e3 = e3.child; e3 !== null; ) {
        if ((e3.tag !== 22 || e3.memoizedState === null) && (Xl(e3), e3.tag === 30 && e3.flags & 18874368 && e3.stateNode.paired)) {
          let t6 = e3.memoizedProps;
          if (t6.name == null || t6.name === `auto`) {
            throw Error(a3(544));
          }
          const n7 = t6.name;
          t6 = ki2(t6.default, t6.share);
          if (t6 !== `none`) {
            if (!ql(e3, n7, t6, null, false)) {
              Yl(e3.child, false);
            }
          }
        }
        e3 = e3.sibling;
      }
    }
  }
  function Zl(e3, t6) {
    if (e3.tag === 30) {
      const {
        stateNode,
        memoizedProps
      } = e3;
      const i4 = k2(memoizedProps, stateNode);
      const a4 = ki2(memoizedProps.default, stateNode.paired ? memoizedProps.share : memoizedProps.enter);
      if (a4 === `none`) {
        Xl(e3);
      } else if (ql(e3, i4, a4, null, false)) {
        Xl(e3);
        if (!(stateNode.paired || t6)) {
          Nd(e3, memoizedProps.onEnter);
        }
      } else {
        Yl(e3.child, false);
      }
    } else if (e3.subtreeFlags & 33554432) {
      for (e3 = e3.child; e3 !== null; ) {
        Zl(e3, t6);
        e3 = e3.sibling;
      }
    } else {
      Xl(e3);
    }
  }
  function Ql(e3) {
    if (Hl !== null && Hl.size !== 0) {
      const t6 = Hl;
      if (e3.subtreeFlags & 18874368) {
        for (e3 = e3.child; e3 !== null; ) {
          if (e3.tag !== 22 || e3.memoizedState === null) {
            if (e3.tag === 30 && e3.flags & 18874368) {
              const n7 = e3.memoizedProps;
              const r5 = n7.name;
              if (r5 != null && r5 !== `auto`) {
                const i4 = t6.get(r5);
                if (i4 !== void 0) {
                  let a4 = ki2(n7.default, n7.share);
                  if (a4 !== `none`) {
                    if (ql(e3, r5, a4, null, false)) {
                      a4 = e3.stateNode;
                      i4.paired = a4;
                      a4.paired = i4;
                      Nd(e3, n7.onShare);
                    } else {
                      Yl(e3.child, false);
                    }
                  }
                  t6.delete(r5);
                  if (t6.size === 0) {
                    break;
                  }
                }
              }
            }
            Ql(e3);
          }
          e3 = e3.sibling;
        }
      }
    }
  }
  function $l(e3) {
    if (e3.tag === 30) {
      const t6 = e3.memoizedProps;
      const n7 = k2(t6, e3.stateNode);
      const r5 = Hl === null ? void 0 : Hl.get(n7);
      let i4 = ki2(t6.default, r5 === void 0 ? t6.exit : t6.share);
      if (i4 !== `none`) {
        if (ql(e3, n7, i4, null, false)) {
          if (r5 === void 0) {
            Nd(e3, t6.onExit);
          } else {
            i4 = e3.stateNode;
            r5.paired = i4;
            i4.paired = r5;
            Hl.delete(n7);
            Nd(e3, t6.onShare);
          }
        } else {
          Yl(e3.child, false);
        }
      }
      if (Hl !== null) {
        Ql(e3);
      }
    } else if (e3.subtreeFlags & 33554432) {
      for (e3 = e3.child; e3 !== null; ) {
        $l(e3);
        e3 = e3.sibling;
      }
    } else {
      if (Hl !== null) {
        Ql(e3);
      }
    }
  }
  function eu(e3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        let t6 = e3.memoizedProps;
        const n7 = k2(t6, e3.stateNode);
        t6 = ki2(t6.default, t6.update);
        e3.flags &= -5;
        if (t6 !== `none`) {
          ql(e3, n7, t6, e3.memoizedState = [], false);
        }
      } else {
        if (e3.subtreeFlags & 33554432) {
          eu(e3);
        }
      }
      e3 = e3.sibling;
    }
  }
  function tu(e3) {
    if (e3.subtreeFlags & 18874368) {
      for (e3 = e3.child; e3 !== null; ) {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (e3.tag === 30 && e3.flags & 18874368) {
            const t6 = e3.stateNode;
            if (t6.paired !== null) {
              t6.paired = null;
              Yl(e3.child, false);
            }
          }
          tu(e3);
        }
        e3 = e3.sibling;
      }
    }
  }
  function nu(e3) {
    if (e3.tag === 30) {
      e3.stateNode.paired = null;
      Yl(e3.child, false);
      tu(e3);
    } else if (e3.subtreeFlags & 33554432) {
      for (e3 = e3.child; e3 !== null; ) {
        nu(e3);
        e3 = e3.sibling;
      }
    } else {
      tu(e3);
    }
  }
  function ru(e3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        Yl(e3.child, false);
      } else if (e3.subtreeFlags & 33554432) {
        ru(e3);
      }
      e3 = e3.sibling;
    }
  }
  function iu(e3, t6, n7, r5, i4, a4, o3) {
    let s3 = false;
    while (t6 !== null) {
      if (t6.tag === 5) {
        const c2 = t6.stateNode;
        if (a4 !== null && Kl < a4.length) {
          let l2 = a4[Kl];
          let u2 = Op(c2);
          if (l2.view || u2.view) {
            s3 = true;
          }
          let d2;
          if (d2 = !(e3.flags & 4)) {
            if (u2.clip) {
              d2 = true;
            } else {
              d2 = l2.rect;
              const f2 = u2.rect;
              d2 = d2.y !== f2.y || d2.x !== f2.x || d2.height !== f2.height || d2.width !== f2.width;
            }
          }
          if (d2) {
            e3.flags |= 4;
          }
          if (u2.abs) {
            u2 = !l2.abs;
          } else {
            l2 = l2.rect;
            u2 = u2.rect;
            u2 = l2.height !== u2.height || l2.width !== u2.width;
          }
          if (u2) {
            e3.flags |= 32;
          }
        } else {
          e3.flags |= 32;
        }
        if (e3.flags & 4) {
          Tp(c2, Kl === 0 ? n7 : n7 + `_` + Kl, i4);
        }
        if (!(s3 && e3.flags & 4)) {
          if (Wl === null) {
            Wl = [];
          }
          Wl.push(c2, Kl === 0 ? r5 : r5 + `_` + Kl, t6.memoizedProps);
        }
        Kl++;
      } else {
        if (t6.tag !== 22 || t6.memoizedState === null) {
          if (t6.tag === 30 && o3) {
            e3.flags |= t6.flags & 32;
          } else if (iu(e3, t6.child, n7, r5, i4, a4, o3)) {
            s3 = true;
          }
        }
      }
      t6 = t6.sibling;
    }
    return s3;
  }
  function au(e3, t6) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        const n7 = e3.memoizedProps;
        let r5 = e3.stateNode;
        let i4 = k2(n7, r5);
        const a4 = ki2(n7.default, n7.update);
        if (t6) {
          r5 = r5.clones;
          var o3 = r5 === null ? null : r5.map(kp);
        } else {
          o3 = e3.memoizedState;
          e3.memoizedState = null;
        }
        r5 = e3;
        const s3 = e3.child;
        Kl = 0;
        i4 = iu(r5, s3, i4, i4, a4, o3, false);
        if (e3.flags & 4 && i4) {
          if (!t6) {
            Nd(e3, n7.onUpdate);
          }
        }
      } else {
        if (e3.subtreeFlags & 33554432) {
          au(e3, t6);
        }
      }
      e3 = e3.sibling;
    }
  }
  var ou = false;
  var U = false;
  var su = false;
  var cu = false;
  var lu = typeof WeakSet == `function` ? WeakSet : Set;
  var uu = null;
  var du = false;
  var fu = false;
  var pu = false;
  var mu = false;
  function hu(focusedElem, t6, n7) {
    focusedElem = focusedElem.containerInfo;
    sp = gh;
    focusedElem = ai2(focusedElem);
    if (oi2(focusedElem)) {
      if (`selectionStart` in focusedElem) var selectionRange = {
        start: focusedElem.selectionStart,
        end: focusedElem.selectionEnd
      };
      else {
        a: {
          selectionRange = (selectionRange = focusedElem.ownerDocument) && selectionRange.defaultView || window;
          let i4 = selectionRange.getSelection && selectionRange.getSelection();
          if (i4 && i4.rangeCount !== 0) {
            selectionRange = i4.anchorNode;
            var a4 = i4.anchorOffset;
            const o3 = i4.focusNode;
            i4 = i4.focusOffset;
            try {
              selectionRange.nodeType;
              o3.nodeType;
            } catch {
              selectionRange = null;
              break a;
            }
            let s3 = 0;
            let start = -1;
            let end = -1;
            let u2 = 0;
            let d2 = 0;
            let f2 = focusedElem;
            let p2 = null;
            b: while (true) {
              let m3;
              while (f2 !== selectionRange || a4 !== 0 && f2.nodeType !== 3 || (start = s3 + a4), f2 !== o3 || i4 !== 0 && f2.nodeType !== 3 || (end = s3 + i4), f2.nodeType === 3 && (s3 += f2.nodeValue.length), (m3 = f2.firstChild) !== null) {
                p2 = f2;
                f2 = m3;
              }
              while (true) {
                if (f2 === focusedElem) {
                  break b;
                }
                if (p2 === selectionRange && ++u2 === a4) {
                  start = s3;
                }
                if (p2 === o3 && ++d2 === i4) {
                  end = s3;
                }
                if ((m3 = f2.nextSibling) !== null) {
                  break;
                }
                f2 = p2;
                p2 = f2.parentNode;
              }
              f2 = m3;
            }
            selectionRange = start === -1 || end === -1 ? null : {
              start,
              end
            };
          } else {
            selectionRange = null;
          }
        }
      }
      selectionRange ||= {
        start: 0,
        end: 0
      };
    } else {
      selectionRange = null;
    }
    cp = {
      focusedElem,
      selectionRange
    };
    gh = false;
    n7 = (n7 & 335544064) === n7;
    uu = t6;
    for (t6 = n7 ? 9270 : 1024; uu !== null; ) {
      focusedElem = uu;
      if (n7 && (selectionRange = focusedElem.deletions, selectionRange !== null)) {
        for (a4 = 0; a4 < selectionRange.length; a4++) {
          if (n7) {
            $l(selectionRange[a4]);
          }
        }
      }
      if (focusedElem.alternate === null && focusedElem.flags & 2) {
        if (n7) {
          Ul(focusedElem);
        }
        gu(n7);
      } else {
        if (focusedElem.tag === 22) {
          selectionRange = focusedElem.alternate;
          if (focusedElem.memoizedState !== null) {
            if (selectionRange !== null && selectionRange.memoizedState === null && n7) {
              $l(selectionRange);
            }
            gu(n7);
            continue;
          }
          if (selectionRange !== null && selectionRange.memoizedState !== null) {
            if (n7) {
              Ul(focusedElem);
            }
            gu(n7);
            continue;
          }
        }
        selectionRange = focusedElem.child;
        if ((focusedElem.subtreeFlags & t6) !== 0 && selectionRange !== null) {
          selectionRange.return = focusedElem;
          uu = selectionRange;
        } else {
          if (n7) {
            eu(focusedElem);
          }
          gu(n7);
        }
      }
    }
    Hl = null;
  }
  function gu(e3) {
    while (uu !== null) {
      const t6 = uu;
      let n7 = e3;
      let r5 = t6.alternate;
      let i4 = t6.flags;
      switch (t6.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i4 & 1024 && r5 !== null) {
            n7 = void 0;
            i4 = r5.memoizedProps;
            r5 = r5.memoizedState;
            const o3 = t6.stateNode;
            try {
              const s3 = wc2(t6.type, i4);
              n7 = o3.getSnapshotBeforeUpdate(s3, r5);
              o3.__reactInternalSnapshotBeforeUpdate = n7;
            } catch (error) {
              Z(t6, t6.return, error);
            }
          }
          break;
        case 3:
          if (i4 & 1024) {
            r5 = t6.stateNode.containerInfo;
            n7 = r5.nodeType;
            if (n7 === 9) {
              nm(r5);
            } else if (n7 === 1) {
              switch (r5.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r5);
                  break;
                default:
                  r5.textContent = ``;
              }
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
          if (n7 && r5 !== null) {
            n7 = k2(r5.memoizedProps, r5.stateNode);
            i4 = t6.memoizedProps;
            i4 = ki2(i4.default, i4.update);
            if (i4 !== `none`) {
              ql(r5, n7, i4, r5.memoizedState = [], true);
            }
          }
          break;
        default:
          if (i4 & 1024) {
            throw Error(a3(163));
          }
      }
      r5 = t6.sibling;
      if (r5 !== null) {
        r5.return = t6.return;
        uu = r5;
        break;
      }
      uu = t6.return;
    }
  }
  function _u(e3, t6, n7) {
    let n_flags = n7.flags;
    switch (n7.tag) {
      case 0:
      case 11:
      case 15:
        Iu(e3, n7);
        if (n_flags & 4) {
          Cl2(5, n7);
        }
        break;
      case 1:
        Iu(e3, n7);
        if (n_flags & 4) {
          e3 = n7.stateNode;
          if (t6 === null) {
            try {
              e3.componentDidMount();
            } catch (error) {
              Z(n7, n7.return, error);
            }
          } else {
            var i4 = wc2(n7.type, t6.memoizedProps);
            t6 = t6.memoizedState;
            try {
              e3.componentDidUpdate(i4, t6, e3.__reactInternalSnapshotBeforeUpdate);
            } catch (error) {
              Z(n7, n7.return, error);
            }
          }
        }
        if (n_flags & 64) {
          Tl2(n7);
        }
        if (n_flags & 512) {
          Dl2(n7, n7.return);
        }
        break;
      case 3:
        Iu(e3, n7);
        if (n_flags & 64 && (e3 = n7.updateQueue, e3 !== null)) {
          t6 = null;
          if (n7.child !== null) {
            switch (n7.child.tag) {
              case 27:
              case 5:
                t6 = n7.child.stateNode;
                break;
              case 1:
                t6 = n7.child.stateNode;
            }
          }
          try {
            Oo(e3, t6);
          } catch (error) {
            Z(n7, n7.return, error);
          }
        }
        break;
      case 27:
        if (t6 === null && n_flags & 4) {
          Bl2(n7);
        }
      case 26:
      case 5:
        Iu(e3, n7);
        if (t6 === null && n_flags & 4) {
          Pl2(n7);
        }
        if (n_flags & 512) {
          Dl2(n7, n7.return);
        }
        break;
      case 12:
        Iu(e3, n7);
        break;
      case 31:
        Iu(e3, n7);
        if (n_flags & 4) {
          Tu(e3, n7);
        }
        break;
      case 13:
        Iu(e3, n7);
        if (n_flags & 4) {
          Eu(e3, n7);
        }
        if (n_flags & 64) {
          e3 = n7.memoizedState;
          if (e3 !== null) {
            e3 = e3.dehydrated;
            if (e3 !== null) {
              n7 = _f.bind(null, n7);
              cm(e3, n7);
            }
          }
        }
        break;
      case 22:
        n_flags = n7.memoizedState !== null || ou;
        if (!n_flags) {
          const a4 = t6 !== null && t6.memoizedState !== null || U;
          t6 = ou;
          i4 = U;
          ou = n_flags;
          if ((U = a4) && !i4) {
            n_flags = 2;
            if (n7.subtreeFlags & 8772) {
              n_flags |= 1;
            }
            Ru(e3, n7, n_flags);
          } else {
            Iu(e3, n7);
          }
          ou = t6;
          U = i4;
        }
        break;
      case 30:
        Iu(e3, n7);
        if (n_flags & 512) {
          Dl2(n7, n7.return);
        }
        break;
      case 7:
        if (n_flags & 512) {
          Dl2(n7, n7.return);
        }
      default:
        Iu(e3, n7);
    }
  }
  function vu(e3, t6) {
    for (e3 = e3.child; e3 !== null; ) {
      yu(e3, t6);
      e3 = e3.sibling;
    }
  }
  function yu(e3, t6) {
    switch (e3.tag) {
      case 5:
      case 26:
        try {
          const n7 = e3.stateNode;
          if (t6) {
            const r5 = n7.style;
            if (typeof r5.setProperty == `function`) {
              r5.setProperty(`display`, `none`, `important`);
            } else {
              r5.display = `none`;
            }
          } else {
            const i4 = e3.stateNode;
            const a4 = e3.memoizedProps.style;
            const o3 = a4 != null && a4.hasOwnProperty(`display`) ? a4.display : null;
            i4.style.display = o3 == null || typeof o3 == `boolean` ? `` : (`` + o3).trim();
          }
        } catch (error) {
          Z(e3, e3.return, error);
        }
        bu(e3, t6);
        break;
      case 6:
        try {
          e3.stateNode.nodeValue = t6 ? `` : e3.memoizedProps;
          D2 = true;
        } catch (error) {
          Z(e3, e3.return, error);
        }
        break;
      case 18:
        try {
          const s3 = e3.stateNode;
          if (t6) {
            wp(s3, true);
          } else {
            wp(e3.stateNode, false);
          }
        } catch (error) {
          Z(e3, e3.return, error);
        }
        break;
      case 22:
      case 23:
        if (e3.memoizedState === null) {
          vu(e3, t6);
        }
        break;
      default:
        vu(e3, t6);
    }
  }
  function bu(e3, t6) {
    if (e3.subtreeFlags & 67108864) {
      for (e3 = e3.child; e3 !== null; ) {
        a: {
          const n7 = e3;
          const r5 = t6;
          switch (n7.tag) {
            case 4:
              yu(n7, r5);
              break a;
            case 22:
              if (n7.memoizedState === null) {
                bu(n7, r5);
              }
              break a;
            default:
              bu(n7, r5);
          }
        }
        e3 = e3.sibling;
      }
    }
  }
  function xu(e3) {
    let e_alternate = e3.alternate;
    if (e_alternate !== null) {
      e3.alternate = null;
      xu(e_alternate);
    }
    e3.child = null;
    e3.deletions = null;
    e3.sibling = null;
    if (e3.tag === 5) {
      e_alternate = e3.stateNode;
      if (e_alternate !== null) {
        Ut2(e_alternate);
      }
    }
    e3.stateNode = null;
    e3.return = null;
    e3.dependencies = null;
    e3.memoizedProps = null;
    e3.memoizedState = null;
    e3.pendingProps = null;
    e3.stateNode = null;
    e3.updateQueue = null;
  }
  var W = null;
  var Su = false;
  function Cu(e3, t6, n7) {
    for (n7 = n7.child; n7 !== null; ) {
      wu(e3, t6, n7);
      n7 = n7.sibling;
    }
  }
  function wu(e3, t6, n7) {
    if (ct2 && typeof ct2.onCommitFiberUnmount == `function`) {
      try {
        ct2.onCommitFiberUnmount(st2, n7);
      } catch {
      }
    }
    switch (n7.tag) {
      case 26:
        if (!U) {
          Ol(n7, t6);
        }
        Cu(e3, t6, n7);
        if (n7.memoizedState) {
          n7.memoizedState.count--;
        } else if (n7.stateNode && !U) {
          n7 = n7.stateNode;
          n7.parentNode.removeChild(n7);
        }
        break;
      case 27:
        if (!U) {
          Ol(n7, t6);
        }
        jl2(n7);
        var r5 = W;
        var i4 = Su;
        if (Sp(n7.type)) {
          W = n7.stateNode;
          Su = false;
        }
        Cu(e3, t6, n7);
        gm(n7.stateNode, n7.type, n7.memoizedProps);
        W = r5;
        Su = i4;
        break;
      case 5:
        if (!U) {
          Ol(n7, t6);
        }
        jl2(n7);
      case 6:
        if (n7.tag === 6) {
          jl2(n7);
        }
        r5 = W;
        i4 = Su;
        W = null;
        Cu(e3, t6, n7);
        W = r5;
        Su = i4;
        if (W !== null) {
          if (Su) {
            try {
              (W.nodeType === 9 ? W.body : W.nodeName === `HTML` ? W.ownerDocument.body : W).removeChild(n7.stateNode);
              D2 = true;
            } catch (error) {
              Z(n7, t6, error);
            }
          } else {
            try {
              W.removeChild(n7.stateNode);
              D2 = true;
            } catch (error) {
              Z(n7, t6, error);
            }
          }
        }
        break;
      case 18:
        if (W !== null) {
          if (Su) {
            e3 = W;
            Cp(e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, n7.stateNode);
            Hh(e3);
          } else {
            Cp(W, n7.stateNode);
          }
        }
        break;
      case 4:
        r5 = W;
        i4 = Su;
        W = n7.stateNode.containerInfo;
        Su = true;
        Cu(e3, t6, n7);
        W = r5;
        Su = i4;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wl2(2, n7, t6);
        if (!U) {
          wl2(4, n7, t6);
        }
        Cu(e3, t6, n7);
        break;
      case 1:
        if (!U) {
          Ol(n7, t6);
          r5 = n7.stateNode;
          if (typeof r5.componentWillUnmount == `function`) {
            El2(n7, t6, r5);
          }
        }
        Cu(e3, t6, n7);
        break;
      case 21:
        Cu(e3, t6, n7);
        break;
      case 22:
        U = (r5 = U) || n7.memoizedState !== null;
        Cu(e3, t6, n7);
        U = r5;
        break;
      case 30:
        Ol(n7, t6);
        Cu(e3, t6, n7);
        break;
      case 7:
        if (!U) {
          Ol(n7, t6);
        }
        Cu(e3, t6, n7);
        break;
      default:
        Cu(e3, t6, n7);
    }
  }
  function Tu(e3, t6) {
    if (t6.memoizedState === null && (e3 = t6.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null))) {
      e3 = e3.dehydrated;
      try {
        Hh(e3);
      } catch (error) {
        Z(t6, t6.return, error);
      }
    }
  }
  function Eu(e3, t6) {
    if (t6.memoizedState === null && (e3 = t6.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null)))) {
      try {
        Hh(e3);
      } catch (error) {
        Z(t6, t6.return, error);
      }
    }
  }
  function Du(e3) {
    switch (e3.tag) {
      case 31:
      case 13:
      case 19:
        var t6 = e3.stateNode;
        if (t6 === null) {
          t6 = e3.stateNode = new lu();
        }
        return t6;
      case 22:
        e3 = e3.stateNode;
        t6 = e3._retryCache;
        if (t6 === null) {
          t6 = e3._retryCache = new lu();
        }
        return t6;
      default:
        throw Error(a3(435, e3.tag));
    }
  }
  function Ou(e3, t6) {
    const n7 = Du(e3);
    t6.forEach((t7) => {
      if (!n7.has(t7)) {
        n7.add(t7);
        const r5 = vf.bind(null, e3, t7);
        t7.then(r5, r5);
      }
    });
  }
  function ku(e3, t6, n7) {
    const t_deletions = t6.deletions;
    if (t_deletions !== null) {
      for (const o3 of t_deletions) {
        let s3 = e3;
        const c2 = t6;
        let l2 = c2;
        a: while (l2 !== null) {
          switch (l2.tag) {
            case 27:
              if (Sp(l2.type)) {
                W = l2.stateNode;
                Su = false;
                break a;
              }
              break;
            case 5:
              W = l2.stateNode;
              Su = false;
              break a;
            case 3:
            case 4:
              W = l2.stateNode.containerInfo;
              Su = true;
              break a;
          }
          l2 = l2.return;
        }
        if (W === null) {
          throw Error(a3(160));
        }
        wu(s3, c2, o3);
        W = null;
        Su = false;
        s3 = o3.alternate;
        if (s3 !== null) {
          s3.return = null;
        }
        o3.return = null;
      }
    }
    if (t6.subtreeFlags & 13886) {
      for (t6 = t6.child; t6 !== null; ) {
        ju(t6, e3, n7);
        t6 = t6.sibling;
      }
    }
  }
  var Au = null;
  function ju(e3, t6, n7) {
    let e_alternate = e3.alternate;
    let e_flags = e3.flags;
    switch (e3.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e_flags & 4 && (e_alternate = e3.updateQueue, e_alternate = e_alternate === null ? null : e_alternate.events, e_alternate !== null)) {
          for (var o3 = 0; o3 < e_alternate.length; o3++) {
            var s3 = e_alternate[o3];
            s3.ref.impl = s3.nextImpl;
          }
        }
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 4) {
          wl2(3, e3, e3.return);
          Cl2(3, e3);
          wl2(5, e3, e3.return);
        }
        break;
      case 1:
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_flags & 64 && ou) {
          e3 = e3.updateQueue;
          if (e3 !== null) {
            t6 = e3.callbacks;
            if (t6 !== null) {
              n7 = e3.shared.hiddenCallbacks;
              e3.shared.hiddenCallbacks = n7 === null ? t6 : n7.concat(t6);
            }
          }
        }
        break;
      case 26:
        o3 = Au;
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_flags & 4) {
          e_flags = e_alternate === null ? null : e_alternate.memoizedState;
          n7 = e3.memoizedState;
          if (e_alternate === null) {
            if (n7 === null) {
              if (e3.stateNode === null) {
                if (ou) {
                  e3.stateNode = fp(e3.type, e3.memoizedProps, t6.containerInfo, e3);
                } else {
                  a: {
                    t6 = e3.type;
                    n7 = e3.memoizedProps;
                    e_flags = o3.ownerDocument || o3;
                    b: switch (t6) {
                      case `title`:
                        e_alternate = e_flags.getElementsByTagName(`title`)[0];
                        if (!e_alternate || e_alternate[Vt2] || e_alternate[Pt2] || e_alternate.namespaceURI === `http://www.w3.org/2000/svg` || e_alternate.hasAttribute(`itemprop`)) {
                          e_alternate = e_flags.createElement(t6);
                          e_flags.head.insertBefore(e_alternate, e_flags.querySelector(`head > title`));
                        }
                        np(e_alternate, t6, n7);
                        e_alternate[Pt2] = e3;
                        Jt2(e_alternate);
                        t6 = e_alternate;
                        break a;
                      case `link`:
                        if (o3 = Gm(`link`, `href`, e_flags).get(t6 + (n7.href || ``))) {
                          for (s3 = 0; s3 < o3.length; s3++) {
                            e_alternate = o3[s3];
                            if (e_alternate.getAttribute(`href`) === (n7.href == null || n7.href === `` ? null : n7.href) && e_alternate.getAttribute(`rel`) === (n7.rel ?? null) && e_alternate.getAttribute(`title`) === (n7.title ?? null) && e_alternate.getAttribute(`crossorigin`) === (n7.crossOrigin ?? null)) {
                              o3.splice(s3, 1);
                              break b;
                            }
                          }
                        }
                        e_alternate = e_flags.createElement(t6);
                        np(e_alternate, t6, n7);
                        e_flags.head.appendChild(e_alternate);
                        break;
                      case `meta`:
                        if (o3 = Gm(`meta`, `content`, e_flags).get(t6 + (n7.content || ``))) {
                          for (s3 = 0; s3 < o3.length; s3++) {
                            e_alternate = o3[s3];
                            if (e_alternate.getAttribute(`content`) === (n7.content == null ? null : `` + n7.content) && e_alternate.getAttribute(`name`) === (n7.name ?? null) && e_alternate.getAttribute(`property`) === (n7.property ?? null) && e_alternate.getAttribute(`http-equiv`) === (n7.httpEquiv ?? null) && e_alternate.getAttribute(`charset`) === (n7.charSet ?? null)) {
                              o3.splice(s3, 1);
                              break b;
                            }
                          }
                        }
                        e_alternate = e_flags.createElement(t6);
                        np(e_alternate, t6, n7);
                        e_flags.head.appendChild(e_alternate);
                        break;
                      default:
                        throw Error(a3(468, t6));
                    }
                    e_alternate[Pt2] = e3;
                    Jt2(e_alternate);
                    t6 = e_alternate;
                  }
                  e3.stateNode = t6;
                }
              } else {
                if (!ou) {
                  Km(o3, e3.type, e3.stateNode);
                }
              }
            } else {
              e3.stateNode = Bm(o3, n7, e3.memoizedProps);
            }
          } else {
            if (e_flags === n7) {
              if (n7 === null && e3.stateNode !== null) {
                Fl2(e3, e3.memoizedProps, e_alternate.memoizedProps);
              }
            } else {
              if (e_flags === null) {
                t6 = e_alternate.stateNode;
                if (!(t6 === null || U)) {
                  t6.parentNode.removeChild(t6);
                }
              } else {
                e_flags.count--;
              }
              if (n7 === null) {
                if (!ou) {
                  Km(o3, e3.type, e3.stateNode);
                }
              } else {
                Bm(o3, n7, e3.memoizedProps);
              }
            }
          }
        }
        break;
      case 27:
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_alternate !== null && e_flags & 4) {
          Fl2(e3, e3.memoizedProps, e_alternate.memoizedProps);
        }
        break;
      case 5:
        o3 = su;
        su = false;
        ku(t6, e3, n7);
        su = o3;
        Mu(e3);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e3.flags & 32) {
          t6 = e3.stateNode;
          try {
            Sn2(t6, ``);
            D2 = true;
          } catch (error) {
            Z(e3, e3.return, error);
          }
        }
        if (e_flags & 4 && e3.stateNode != null) {
          t6 = e3.memoizedProps;
          Fl2(e3, t6, e_alternate === null ? t6 : e_alternate.memoizedProps);
        }
        if (e_flags & 1024) {
          cu = true;
        }
        break;
      case 6:
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 4) {
          if (e3.stateNode === null) {
            throw Error(a3(162));
          }
          t6 = e3.memoizedProps;
          n7 = e3.stateNode;
          try {
            n7.nodeValue = t6;
            D2 = true;
          } catch (error) {
            Z(e3, e3.return, error);
          }
        }
        break;
      case 3:
        D2 = false;
        Wm = null;
        o3 = Au;
        Au = bm(t6.containerInfo);
        ku(t6, e3, n7);
        Au = o3;
        Mu(e3);
        if (e_flags & 4 && e_alternate !== null && e_alternate.memoizedState.isDehydrated) {
          try {
            Hh(t6.containerInfo);
          } catch (error) {
            Z(e3, e3.return, error);
          }
        }
        if (cu) {
          cu = false;
          Nu(e3);
        }
        D2 = false;
        break;
      case 4:
        e_flags = su;
        su = ou;
        e_alternate = an2();
        o3 = Au;
        Au = bm(e3.stateNode.containerInfo);
        ku(t6, e3, n7);
        Mu(e3);
        Au = o3;
        if (D2 && fu) {
          pu = true;
        }
        D2 = e_alternate;
        su = e_flags;
        break;
      case 12:
        ku(t6, e3, n7);
        Mu(e3);
        break;
      case 31:
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 4) {
          t6 = e3.updateQueue;
          if (t6 !== null) {
            e3.updateQueue = null;
            Ou(e3, t6);
          }
        }
        break;
      case 13:
        ku(t6, e3, n7);
        Mu(e3);
        if (e3.child.flags & 8192 && e3.memoizedState !== null != (e_alternate !== null && e_alternate.memoizedState !== null)) {
          hd = t_unstable_now();
        }
        if (e_flags & 4) {
          t6 = e3.updateQueue;
          if (t6 !== null) {
            e3.updateQueue = null;
            Ou(e3, t6);
          }
        }
        break;
      case 22:
        o3 = e3.memoizedState !== null;
        s3 = e_alternate !== null && e_alternate.memoizedState !== null;
        var c2 = ou;
        const l2 = U;
        const u2 = su;
        ou = c2 || o3;
        su = u2 || o3;
        U = l2 || s3;
        ku(t6, e3, n7);
        U = l2;
        su = u2;
        ou = c2;
        Mu(e3);
        if (e_flags & 8192) {
          t6 = e3.stateNode;
          t6._visibility = o3 ? t6._visibility & -2 : t6._visibility | 1;
          if (!(!o3 || e_alternate === null || s3 || ou || U)) {
            t6 = s3 || U;
            n7 = ou;
            e_alternate = U;
            ou = o3 || ou;
            U = t6;
            Lu(e3, 2);
            ou = n7;
            U = e_alternate;
          }
          if (!(!o3 && su)) {
            vu(e3, o3);
          }
        }
        if (e_flags & 4) {
          t6 = e3.updateQueue;
          if (t6 !== null) {
            n7 = t6.retryQueue;
            if (n7 !== null) {
              t6.retryQueue = null;
              Ou(e3, n7);
            }
          }
        }
        break;
      case 19:
        ku(t6, e3, n7);
        Mu(e3);
        if (e_flags & 4) {
          t6 = e3.updateQueue;
          if (t6 !== null) {
            e3.updateQueue = null;
            Ou(e3, t6);
          }
        }
        break;
      case 30:
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        e_flags = an2();
        o3 = fu;
        s3 = (n7 & 335544064) === n7;
        c2 = e3.memoizedProps;
        fu = s3 && ki2(c2.default, c2.update) !== `none`;
        ku(t6, e3, n7);
        Mu(e3);
        if (s3 && e_alternate !== null && D2) {
          e3.flags |= 4;
        }
        fu = o3;
        D2 = e_flags;
        break;
      case 21:
        break;
      case 7:
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_alternate && e_alternate.stateNode !== null) {
          e_alternate.stateNode._fragmentFiber = e3;
        }
      default:
        ku(t6, e3, n7);
        Mu(e3);
    }
  }
  function Mu(e3) {
    const e_flags = e3.flags;
    if (e_flags & 2) {
      try {
        let n7;
        for (var r5 = e3.return; r5 !== null; ) {
          if (Il2(r5)) {
            n7 = r5;
            break;
          }
          r5 = r5.return;
        }
        r5 = null;
        for (let i4 = e3.return; i4 !== null; ) {
          if (Nl2(i4)) {
            const o3 = i4.stateNode;
            if (r5 === null) {
              r5 = [o3];
            } else {
              r5.push(o3);
            }
          }
          if (Ml2(i4)) {
            break;
          }
          i4 = i4.return;
        }
        const s3 = r5;
        if (n7 == null) {
          throw Error(a3(160));
        }
        switch (n7.tag) {
          case 27:
            const c2 = n7.stateNode;
            zl(e3, Ll2(e3), c2, s3);
            break;
          case 5:
            const l2 = n7.stateNode;
            if (n7.flags & 32) {
              Sn2(l2, ``);
              n7.flags &= -33;
            }
            zl(e3, Ll2(e3), l2, s3);
            break;
          case 3:
          case 4:
            const u2 = n7.stateNode.containerInfo;
            Rl2(e3, Ll2(e3), u2, s3);
            break;
          default:
            throw Error(a3(161));
        }
      } catch (error) {
        Z(e3, e3.return, error);
      }
      e3.flags &= -3;
    }
    if (e_flags & 4096) {
      e3.flags &= -4097;
    }
  }
  function Nu(e3) {
    if (e3.subtreeFlags & 1024) {
      for (e3 = e3.child; e3 !== null; ) {
        let t6 = e3;
        Nu(t6);
        if (t6.tag === 5 && t6.flags & 1024) {
          t6 = t6.stateNode;
          gh = true;
          t6.reset();
          gh = false;
        }
        e3 = e3.sibling;
      }
    }
  }
  function Pu(e3, t6) {
    if (t6.subtreeFlags & 9270) {
      for (t6 = t6.child; t6 !== null; ) {
        Fu(t6, e3);
        t6 = t6.sibling;
      }
    } else {
      au(t6, false);
    }
  }
  function Fu(e3, t6) {
    let e_alternate = e3.alternate;
    if (e_alternate === null) {
      Zl(e3, false);
    } else {
      switch (e3.tag) {
        case 3:
          du = false;
          mu = false;
          Gl2();
          Pu(t6, e3);
          if (!du && !pu) {
            e3 = Wl;
            if (e3 !== null) {
              for (var r5 = 0; r5 < e3.length; r5 += 3) {
                e_alternate = e3[r5];
                var i4 = e3[r5 + 1];
                Ep(e_alternate, e3[r5 + 2]);
                e_alternate = e_alternate.ownerDocument.documentElement;
                if (e_alternate !== null) {
                  e_alternate.animate({
                    opacity: [0, 0],
                    pointerEvents: [`none`, `none`]
                  }, {
                    duration: 0,
                    fill: `forwards`,
                    pseudoElement: `::view-transition-group(` + i4 + `)`
                  });
                }
              }
            }
            e3 = t6.containerInfo;
            e3 = e3.nodeType === 9 ? e3.documentElement : e3.ownerDocument.documentElement;
            if (e3 !== null && e3.style.viewTransitionName === ``) {
              e3.style.viewTransitionName = `none`;
              e3.animate({
                opacity: [0, 0],
                pointerEvents: [`none`, `none`]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition-group(root)`
              });
              e3.animate({
                width: [0, 0],
                height: [0, 0]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition`
              });
            }
            mu = true;
          }
          Wl = null;
          break;
        case 5:
          Pu(t6, e3);
          break;
        case 4:
          r5 = du;
          du = false;
          Pu(t6, e3);
          if (du) {
            pu = true;
          }
          du = r5;
          break;
        case 22:
          if (e3.memoizedState === null) {
            if (e_alternate.memoizedState === null) {
              Pu(t6, e3);
            } else {
              Zl(e3, false);
            }
          }
          break;
        case 30:
          r5 = du;
          i4 = Gl2();
          du = false;
          Pu(t6, e3);
          if (du) {
            e3.flags |= 4;
          }
          let a4 = e3.memoizedProps;
          let o3 = e3.stateNode;
          t6 = k2(a4, o3);
          o3 = k2(e_alternate.memoizedProps, o3);
          const s3 = ki2(a4.default, a4.update);
          if (s3 === `none`) {
            t6 = false;
          } else {
            a4 = e_alternate.memoizedState;
            e_alternate.memoizedState = null;
            e_alternate = e3.child;
            Kl = 0;
            t6 = iu(e3, e_alternate, t6, o3, s3, a4, true);
            if (Kl !== (a4 === null ? 0 : a4.length)) {
              e3.flags |= 32;
            }
          }
          if (e3.flags & 4 && t6) {
            Nd(e3, e3.memoizedProps.onUpdate);
            Wl = i4;
          } else if (i4 !== null) {
            i4.push(...Wl);
            Wl = i4;
          }
          du = e3.flags & 32 ? true : r5;
          break;
        default:
          Pu(t6, e3);
      }
    }
  }
  function Iu(e3, t6) {
    if (t6.subtreeFlags & 8772) {
      for (t6 = t6.child; t6 !== null; ) {
        _u(e3, t6.alternate, t6);
        t6 = t6.sibling;
      }
    }
  }
  function Lu(e3, t6) {
    for (e3 = e3.child; e3 !== null; ) {
      const n7 = e3;
      const r5 = t6;
      switch (n7.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wl2(4, n7, n7.return);
          Lu(n7, r5);
          break;
        case 1:
          Ol(n7, n7.return);
          var i4 = n7.stateNode;
          if (typeof i4.componentWillUnmount == `function`) {
            El2(n7, n7.return, i4);
          }
          Lu(n7, r5);
          break;
        case 27:
          if (r5 & 2) {
            gm(n7.stateNode, n7.type, n7.memoizedProps);
          }
        case 5:
          Ol(n7, n7.return);
          if (!(n7.tag !== 5 && n7.tag !== 27)) {
            jl2(n7);
          }
          Lu(n7, r5);
          break;
        case 6:
          jl2(n7);
          break;
        case 26:
          Ol(n7, n7.return);
          i4 = n7.stateNode;
          if (!(n7.memoizedState !== null || i4 === null || U)) {
            i4.parentNode.removeChild(i4);
          }
          Lu(n7, r5);
          break;
        case 22:
          if (n7.memoizedState === null) {
            Lu(n7, r5);
          }
          break;
        case 30:
          Ol(n7, n7.return);
          Lu(n7, r5);
          break;
        case 7:
          Ol(n7, n7.return);
        default:
          Lu(n7, r5);
      }
      e3 = e3.sibling;
    }
  }
  function Ru(e3, t6, n7) {
    n7 = t6.subtreeFlags & 8772 ? n7 : n7 & -2;
    for (t6 = t6.child; t6 !== null; ) {
      let r5 = t6.alternate;
      let i4 = e3;
      const a4 = t6;
      const o3 = a4.flags;
      const s3 = !!(n7 & 1);
      switch (a4.tag) {
        case 0:
        case 11:
        case 15:
          Ru(i4, a4, n7);
          Cl2(4, a4);
          break;
        case 1:
          Ru(i4, a4, n7);
          r5 = a4;
          i4 = r5.stateNode;
          if (typeof i4.componentDidMount == `function`) {
            try {
              i4.componentDidMount();
            } catch (error) {
              Z(r5, r5.return, error);
            }
          }
          r5 = a4;
          i4 = r5.updateQueue;
          if (i4 !== null) {
            var c2 = r5.stateNode;
            try {
              const l2 = i4.shared.hiddenCallbacks;
              if (l2 !== null) {
                i4.shared.hiddenCallbacks = null;
                for (i4 = 0; i4 < l2.length; i4++) {
                  Do(l2[i4], c2);
                }
              }
            } catch (error) {
              Z(r5, r5.return, error);
            }
          }
          if (s3 && o3 & 64) {
            Tl2(a4);
          }
          Dl2(a4, a4.return);
          break;
        case 27:
          if (n7 & 2) {
            Bl2(a4);
          }
        case 5:
          if (!(a4.tag !== 5 && a4.tag !== 27)) {
            Al(a4);
          }
          Ru(i4, a4, n7);
          if (s3 && r5 === null && o3 & 4) {
            Pl2(a4);
          }
          Dl2(a4, a4.return);
          break;
        case 6:
          Al(a4);
          break;
        case 26:
          c2 = a4.stateNode;
          if (!(a4.memoizedState !== null || c2 === null || ou)) {
            Km(bm(c2.ownerDocument), a4.type, c2);
          }
          Ru(i4, a4, n7);
          if (s3 && r5 === null && o3 & 4) {
            Pl2(a4);
          }
          Dl2(a4, a4.return);
          break;
        case 12:
          Ru(i4, a4, n7);
          break;
        case 31:
          Ru(i4, a4, n7);
          if (s3 && o3 & 4) {
            Tu(i4, a4);
          }
          break;
        case 13:
          Ru(i4, a4, n7);
          if (s3 && o3 & 4) {
            Eu(i4, a4);
          }
          break;
        case 22:
          if (a4.memoizedState === null) {
            Ru(i4, a4, n7);
          }
          Dl2(a4, a4.return);
          break;
        case 30:
          Ru(i4, a4, n7);
          Dl2(a4, a4.return);
          break;
        case 7:
          Dl2(a4, a4.return);
        default:
          Ru(i4, a4, n7);
      }
      t6 = t6.sibling;
    }
  }
  function zu(e3, t6) {
    let n7 = null;
    if (e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null) {
      n7 = e3.memoizedState.cachePool.pool;
    }
    e3 = null;
    if (t6.memoizedState !== null && t6.memoizedState.cachePool !== null) {
      e3 = t6.memoizedState.cachePool.pool;
    }
    if (e3 !== n7) {
      if (e3 != null) {
        e3.refCount++;
      }
      if (n7 != null) {
        Ia2(n7);
      }
    }
  }
  function Bu(e3, t6) {
    e3 = null;
    if (t6.alternate !== null) {
      e3 = t6.alternate.memoizedState.cache;
    }
    t6 = t6.memoizedState.cache;
    if (t6 !== e3) {
      t6.refCount++;
      if (e3 != null) {
        Ia2(e3);
      }
    }
  }
  function Vu(e3, t6, n7, r5) {
    const i4 = (n7 & 335544064) === n7;
    if (t6.subtreeFlags & (i4 ? 10262 : 10256)) {
      for (t6 = t6.child; t6 !== null; ) {
        Hu(e3, t6, n7, r5);
        t6 = t6.sibling;
      }
    } else {
      if (i4) {
        ru(t6);
      }
    }
  }
  function Hu(e3, t6, n7, r5) {
    const i4 = (n7 & 335544064) === n7;
    if (i4 && t6.alternate === null && t6.return !== null && t6.return.alternate !== null) {
      nu(t6);
    }
    let t_flags = t6.flags;
    switch (t6.tag) {
      case 0:
      case 11:
      case 15:
        Vu(e3, t6, n7, r5);
        if (t_flags & 2048) {
          Cl2(9, t6);
        }
        break;
      case 1:
        Vu(e3, t6, n7, r5);
        break;
      case 3:
        Vu(e3, t6, n7, r5);
        if (i4 && mu) {
          e3 = e3.containerInfo;
          e3 = e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
          if (e3.style.viewTransitionName === `root`) {
            e3.style.viewTransitionName = ``;
          }
          e3 = e3.ownerDocument.documentElement;
          if (e3 !== null && e3.style.viewTransitionName === `none`) {
            e3.style.viewTransitionName = ``;
          }
        }
        if (t_flags & 2048) {
          t_flags = null;
          if (t6.alternate !== null) {
            t_flags = t6.alternate.memoizedState.cache;
          }
          t6 = t6.memoizedState.cache;
          if (t6 !== t_flags) {
            t6.refCount++;
            if (t_flags != null) {
              Ia2(t_flags);
            }
          }
        }
        break;
      case 12:
        if (t_flags & 2048) {
          Vu(e3, t6, n7, r5);
          t_flags = t6.stateNode;
          try {
            var o3 = t6.memoizedProps;
            var s3 = o3.id;
            const c2 = o3.onPostCommit;
            if (typeof c2 == `function`) {
              c2(s3, t6.alternate === null ? `mount` : `update`, t_flags.passiveEffectDuration, -0);
            }
          } catch (error) {
            Z(t6, t6.return, error);
          }
        } else {
          Vu(e3, t6, n7, r5);
        }
        break;
      case 31:
        Vu(e3, t6, n7, r5);
        break;
      case 13:
        Vu(e3, t6, n7, r5);
        break;
      case 23:
        break;
      case 22:
        o3 = t6.stateNode;
        s3 = t6.alternate;
        if (t6.memoizedState === null) {
          if (i4 && s3 !== null && s3.memoizedState !== null) {
            nu(t6);
          }
          if (o3._visibility & 2) {
            Vu(e3, t6, n7, r5);
          } else {
            o3._visibility |= 2;
            Uu(e3, t6, n7, r5, !!(t6.subtreeFlags & 10256) || false);
          }
        } else {
          if (i4 && s3 !== null && s3.memoizedState === null) {
            nu(s3);
          }
          if (o3._visibility & 2) {
            Vu(e3, t6, n7, r5);
          } else {
            Wu(e3, t6);
          }
        }
        if (t_flags & 2048) {
          zu(s3, t6);
        }
        break;
      case 24:
        Vu(e3, t6, n7, r5);
        if (t_flags & 2048) {
          Bu(t6.alternate, t6);
        }
        break;
      case 30:
        if (i4) {
          t_flags = t6.alternate;
          if (t_flags !== null) {
            Yl(t_flags.child, true);
            Yl(t6.child, true);
          }
        }
        Vu(e3, t6, n7, r5);
        break;
      default:
        Vu(e3, t6, n7, r5);
    }
  }
  function Uu(e3, t6, n7, r5, i4) {
    i4 &&= !!(t6.subtreeFlags & 10256) || false;
    for (t6 = t6.child; t6 !== null; ) {
      const a4 = e3;
      const o3 = t6;
      const s3 = n7;
      const c2 = r5;
      const l2 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          Uu(a4, o3, s3, c2, i4);
          Cl2(8, o3);
          break;
        case 23:
          break;
        case 22:
          const u2 = o3.stateNode;
          if (o3.memoizedState === null) {
            u2._visibility |= 2;
            Uu(a4, o3, s3, c2, i4);
          } else if (u2._visibility & 2) {
            Uu(a4, o3, s3, c2, i4);
          } else {
            Wu(a4, o3);
          }
          if (i4 && l2 & 2048) {
            zu(o3.alternate, o3);
          }
          break;
        case 24:
          Uu(a4, o3, s3, c2, i4);
          if (i4 && l2 & 2048) {
            Bu(o3.alternate, o3);
          }
          break;
        default:
          Uu(a4, o3, s3, c2, i4);
      }
      t6 = t6.sibling;
    }
  }
  function Wu(e3, t6) {
    if (t6.subtreeFlags & 10256) {
      for (t6 = t6.child; t6 !== null; ) {
        const n7 = e3;
        const r5 = t6;
        const i4 = r5.flags;
        switch (r5.tag) {
          case 22:
            Wu(n7, r5);
            if (i4 & 2048) {
              zu(r5.alternate, r5);
            }
            break;
          case 24:
            Wu(n7, r5);
            if (i4 & 2048) {
              Bu(r5.alternate, r5);
            }
            break;
          default:
            Wu(n7, r5);
        }
        t6 = t6.sibling;
      }
    }
  }
  var Gu = 8192;
  function Ku(e3, t6, n7) {
    if (e3.subtreeFlags & Gu) {
      for (e3 = e3.child; e3 !== null; ) {
        qu(e3, t6, n7);
        e3 = e3.sibling;
      }
    }
  }
  function qu(e3, t6, n7) {
    switch (e3.tag) {
      case 26:
        Ku(e3, t6, n7);
        if (e3.flags & Gu) {
          if (e3.memoizedState === null) {
            e3 = e3.stateNode;
            if ((t6 & 335544128) === t6) {
              Zm(n7, e3);
            }
          } else {
            Qm(n7, Au, e3.memoizedState, e3.memoizedProps);
          }
        }
        break;
      case 5:
        Ku(e3, t6, n7);
        if (e3.flags & Gu) {
          e3 = e3.stateNode;
          if ((t6 & 335544128) === t6) {
            Zm(n7, e3);
          }
        }
        break;
      case 3:
      case 4:
        var r5 = Au;
        Au = bm(e3.stateNode.containerInfo);
        Ku(e3, t6, n7);
        Au = r5;
        break;
      case 22:
        if (e3.memoizedState === null) {
          r5 = e3.alternate;
          if (r5 !== null && r5.memoizedState !== null) {
            r5 = Gu;
            Gu = 16777216;
            Ku(e3, t6, n7);
            Gu = r5;
          } else {
            Ku(e3, t6, n7);
          }
        }
        break;
      case 30:
        if ((e3.flags & Gu) !== 0 && (r5 = e3.memoizedProps.name, r5 != null && r5 !== `auto`)) {
          const i4 = e3.stateNode;
          i4.paired = null;
          if (Hl === null) {
            Hl = /* @__PURE__ */ new Map();
          }
          Hl.set(r5, i4);
        }
        Ku(e3, t6, n7);
        break;
      default:
        Ku(e3, t6, n7);
    }
  }
  function Ju(e3) {
    let e_alternate = e3.alternate;
    if (e_alternate !== null && (e3 = e_alternate.child, e3 !== null)) {
      e_alternate.child = null;
      do {
        e_alternate = e3.sibling;
        e3.sibling = null;
        e3 = e_alternate;
      } while (e3 !== null);
    }
  }
  function Yu(e3) {
    const e_deletions = e3.deletions;
    if (e3.flags & 16) {
      if (e_deletions !== null) {
        for (const r5 of e_deletions) {
          uu = r5;
          Qu(r5, e3);
        }
      }
      Ju(e3);
    }
    if (e3.subtreeFlags & 10256) {
      for (e3 = e3.child; e3 !== null; ) {
        Xu(e3);
        e3 = e3.sibling;
      }
    }
  }
  function Xu(e3) {
    switch (e3.tag) {
      case 0:
      case 11:
      case 15:
        Yu(e3);
        if (e3.flags & 2048) {
          wl2(9, e3, e3.return);
        }
        break;
      case 3:
        Yu(e3);
        break;
      case 12:
        Yu(e3);
        break;
      case 22:
        const t6 = e3.stateNode;
        if (e3.memoizedState !== null && t6._visibility & 2 && (e3.return === null || e3.return.tag !== 13)) {
          t6._visibility &= -3;
          Zu(e3);
        } else {
          Yu(e3);
        }
        break;
      default:
        Yu(e3);
    }
  }
  function Zu(e3) {
    let e_deletions = e3.deletions;
    if (e3.flags & 16) {
      if (e_deletions !== null) {
        for (var n7 = 0; n7 < e_deletions.length; n7++) {
          const deletion = e_deletions[n7];
          uu = deletion;
          Qu(deletion, e3);
        }
      }
      Ju(e3);
    }
    for (e3 = e3.child; e3 !== null; ) {
      e_deletions = e3;
      switch (e_deletions.tag) {
        case 0:
        case 11:
        case 15:
          wl2(8, e_deletions, e_deletions.return);
          Zu(e_deletions);
          break;
        case 22:
          n7 = e_deletions.stateNode;
          if (n7._visibility & 2) {
            n7._visibility &= -3;
            Zu(e_deletions);
          }
          break;
        default:
          Zu(e_deletions);
      }
      e3 = e3.sibling;
    }
  }
  function Qu(e3, t6) {
    while (uu !== null) {
      let n7 = uu;
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
            if (r5 != null) {
              r5.refCount++;
            }
          }
          break;
        case 24:
          Ia2(n7.memoizedState.cache);
      }
      r5 = n7.child;
      if (r5 !== null) {
        r5.return = n7;
        uu = r5;
      } else {
        a: for (n7 = e3; uu !== null; ) {
          r5 = uu;
          const {
            sibling,
            return: _return
          } = r5;
          xu(r5);
          if (r5 === n7) {
            uu = null;
            break a;
          }
          if (sibling !== null) {
            sibling.return = _return;
            uu = sibling;
            break a;
          }
          uu = _return;
        }
      }
    }
  }
  var $u = {
    getCacheForType: function(e3) {
      const t6 = ka(L2);
      let n7 = t6.data.get(e3);
      if (n7 === void 0) {
        n7 = e3();
        t6.data.set(e3, n7);
      }
      return n7;
    },
    cacheSignal: function() {
      return ka(L2).controller.signal;
    }
  };
  var ed = typeof WeakMap == `function` ? WeakMap : Map;
  var G = 0;
  var K = null;
  var q = null;
  var J = 0;
  var Y = 0;
  var td = null;
  var nd = false;
  var rd = false;
  var id = false;
  var ad = 0;
  var od = 0;
  var sd = 0;
  var cd = 0;
  var ld = 0;
  var ud = 0;
  var dd = 0;
  var fd = null;
  var pd = null;
  var md = false;
  var hd = 0;
  var gd = 0;
  var _d = Infinity;
  var vd = null;
  var yd = null;
  var X = 0;
  var bd = null;
  var xd = null;
  var Sd = 0;
  var Cd = 0;
  var wd = null;
  var Td = null;
  var Ed = null;
  var Dd = null;
  var Od = null;
  var kd = 0;
  var Ad = null;
  function jd() {
    if (G & 2 && J !== 0) {
      return J & -J;
    }
    if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T === null) {
      return jt2();
    }
    return Pf();
  }
  function Md() {
    if (ud === 0) {
      if (!(J & 536870912) || F2) {
        var e3 = ht2;
        ht2 <<= 1;
        if (!(ht2 & 3932160)) {
          ht2 = 262144;
        }
        ud = e3;
      } else {
        ud = 536870912;
      }
    }
    e3 = Po.current;
    if (e3 !== null) {
      e3.flags |= 32;
    }
    return ud;
  }
  function Nd(e3, t6) {
    if (t6 != null) {
      const n7 = e3.stateNode;
      let r5 = n7.ref;
      if (r5 === null) {
        r5 = n7.ref = Pp(k2(e3.memoizedProps, n7));
      }
      if (Dd === null) {
        Dd = [];
      }
      Dd.push(t6.bind(null, r5));
    }
  }
  function Pd(e3, t6, n7) {
    if (e3 === K && (Y === 2 || Y === 9) || e3.cancelPendingCommit !== null) {
      Vd(e3, 0);
      Rd(e3, J, ud, false);
    }
    wt2(e3, n7);
    if (!(G & 2) || e3 !== K) {
      if (e3 === K) {
        if (!(G & 2)) {
          cd |= n7;
        }
        if (od === 4) {
          Rd(e3, J, ud, false);
        }
      }
      Ef(e3);
    }
  }
  function Fd(e3, t6, n7) {
    if (G & 6) {
      throw Error(a3(327));
    }
    let r5 = !n7 && !(t6 & 127) && (t6 & e3.expiredLanes) === 0 || yt2(e3, t6);
    let i4 = r5 ? Yd(e3, t6) : qd(e3, t6, true);
    let o3 = r5;
    do {
      if (i4 === 0) {
        if (rd && !r5) {
          Rd(e3, t6, 0, false);
        }
        break;
      }
      n7 = e3.current.alternate;
      if (o3 && !Ld(n7)) {
        i4 = qd(e3, t6, false);
        o3 = false;
        continue;
      }
      if (i4 === 2) {
        o3 = t6;
        if (e3.errorRecoveryDisabledLanes & o3) var s3 = 0;
        else {
          s3 = e3.pendingLanes & -536870913;
          s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
        }
        if (s3 !== 0) {
          t6 = s3;
          a: {
            const c2 = e3;
            i4 = fd;
            const l2 = c2.current.memoizedState.isDehydrated;
            if (l2) {
              Vd(c2, s3).flags |= 256;
            }
            s3 = qd(c2, s3, false);
            if (s3 !== 2 && s3 !== 6) {
              if (id && !l2) {
                c2.errorRecoveryDisabledLanes |= o3;
                cd |= o3;
                i4 = 4;
                break a;
              }
              o3 = pd;
              pd = i4;
              if (o3 !== null) {
                if (pd === null) {
                  pd = o3;
                } else {
                  pd.push(...o3);
                }
              }
            }
            i4 = s3;
          }
          o3 = false;
          if (i4 !== 2) {
            continue;
          }
        }
      }
      if (i4 === 1) {
        Vd(e3, 0);
        Rd(e3, t6, 0, true);
        break;
      }
      a: {
        r5 = e3;
        o3 = i4;
        switch (o3) {
          case 0:
          case 1:
            throw Error(a3(345));
          case 4:
            if ((t6 & 4194048) !== t6 && (t6 & 62914560) !== t6) {
              break;
            }
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
        if ((t6 & 62914560) === t6 && (i4 = hd + 300 - t_unstable_now(), i4 > 10)) {
          Rd(r5, t6, ud, !nd);
          if (vt2(r5, 0, true) !== 0) {
            break a;
          }
          Sd = t6;
          r5.timeoutHandle = gp(Id.bind(null, r5, n7, pd, vd, md, t6, ud, cd, dd, nd, o3, `Throttled`, -0, 0), i4);
          break a;
        }
        Id(r5, n7, pd, vd, md, t6, ud, cd, dd, nd, o3, null, -0, 0);
      }
      break;
    } while (1);
    Ef(e3);
  }
  function Id(e3, t6, n7, r5, i4, a4, o3, s3, c2, l2, u2, d2, f2, p2) {
    e3.timeoutHandle = -1;
    let t_subtreeFlags = t6.subtreeFlags;
    let h2 = (a4 & 335544064) === a4;
    d2 = null;
    if ((h2 || t_subtreeFlags & 8192 || (t_subtreeFlags & 16785408) == 16785408) && (d2 = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend
    }, Hl = null, qu(t6, a4, d2), h2 && (t_subtreeFlags = d2, h2 = e3.containerInfo, h2 = (h2.nodeType === 9 ? h2 : h2.ownerDocument).__reactViewTransition, h2 != null && (t_subtreeFlags.count++, t_subtreeFlags.waitingForViewTransition = true, t_subtreeFlags = nh.bind(t_subtreeFlags), h2.finished.then(t_subtreeFlags, t_subtreeFlags))), t_subtreeFlags = (a4 & 62914560) === a4 ? hd - t_unstable_now() : (a4 & 4194048) === a4 ? gd - t_unstable_now() : 0, t_subtreeFlags = eh(d2, t_subtreeFlags), t_subtreeFlags !== null)) {
      Sd = a4;
      e3.cancelPendingCommit = t_subtreeFlags(nf.bind(null, e3, t6, a4, n7, r5, i4, o3, s3, c2, l2, u2, d2, null, f2, p2));
      Rd(e3, a4, o3, !l2);
      return;
    }
    nf(e3, t6, a4, n7, r5, i4, o3, s3, c2, l2, u2, d2);
  }
  function Ld(e3) {
    let t6 = e3;
    while (true) {
      let n7 = t6.tag;
      if ((n7 === 0 || n7 === 11 || n7 === 15) && t6.flags & 16384 && (n7 = t6.updateQueue, n7 !== null && (n7 = n7.stores, n7 !== null))) {
        for (let i4 of n7) {
          const a4 = i4.getSnapshot;
          i4 = i4.value;
          try {
            if (!$r2(a4(), i4)) {
              return false;
            }
          } catch {
            return false;
          }
        }
      }
      n7 = t6.child;
      if (t6.subtreeFlags & 16384 && n7 !== null) {
        n7.return = t6;
        t6 = n7;
      } else {
        if (t6 === e3) {
          break;
        }
        while (t6.sibling === null) {
          if (t6.return === null || t6.return === e3) {
            return true;
          }
          t6 = t6.return;
        }
        t6.sibling.return = t6.return;
        t6 = t6.sibling;
      }
    }
    return true;
  }
  function Rd(e3, t6, n7, r5) {
    t6 = bt2(e3, t6);
    t6 &= ~ld;
    t6 &= ~cd;
    e3.suspendedLanes |= t6;
    e3.pingedLanes &= ~t6;
    if (r5) {
      e3.warmLanes |= t6;
    }
    r5 = e3.expirationTimes;
    for (let i4 = t6; i4 > 0; ) {
      const a4 = 31 - ut2(i4);
      const o3 = 1 << a4;
      r5[a4] = -1;
      i4 &= ~o3;
    }
    if (n7 !== 0) {
      Et2(e3, n7, t6);
    }
  }
  function zd() {
    if (G & 6) {
      return true;
    }
    Df(0, false);
    return false;
  }
  function Bd() {
    if (q !== null) {
      if (Y === 0) var e3 = q.return;
      else {
        e3 = q;
        xa2 = null;
        Sa2 = null;
        ss2(e3);
        co2 = null;
        lo2 = 0;
        e3 = q;
      }
      while (e3 !== null) {
        Sl2(e3.alternate, e3);
        e3 = e3.return;
      }
      q = null;
    }
  }
  function Vd(e3, t6) {
    let e_timeoutHandle = e3.timeoutHandle;
    if (e_timeoutHandle !== -1) {
      e3.timeoutHandle = -1;
      _p(e_timeoutHandle);
    }
    e_timeoutHandle = e3.cancelPendingCommit;
    if (e_timeoutHandle !== null) {
      e3.cancelPendingCommit = null;
      e_timeoutHandle();
    }
    Sd = 0;
    Bd();
    K = e3;
    q = e_timeoutHandle = Wi2(e3.current, null);
    J = t6;
    Y = 0;
    td = null;
    nd = false;
    rd = yt2(e3, t6);
    id = false;
    od = 0;
    sd = 0;
    cd = 0;
    ld = 0;
    ud = 0;
    dd = 0;
    fd = null;
    pd = null;
    md = false;
    ad = bt2(e3, t6);
    Pi2();
    return e_timeoutHandle;
  }
  function Hd(e3, t6) {
    R2 = null;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = gc;
    if (t6 === Qa || t6 === eo2) {
      t6 = oo2();
      Y = 3;
    } else if (t6 === $a2) {
      t6 = oo2();
      Y = 4;
    } else {
      Y = t6 === Pc ? 8 : typeof t6 == `object` && t6 && typeof t6.then == `function` ? 6 : 1;
    }
    td = t6;
    if (q === null) {
      od = 1;
      Oc2(e3, Qi2(t6, e3.current));
    }
  }
  function Ud() {
    const Po_current = Po.current;
    if (Po_current === null) {
      return true;
    }
    if ((J & 4194048) === J) {
      return Fo === null;
    }
    if ((J & 62914560) === J || J & 536870912) {
      return Po_current === Fo;
    }
    return false;
  }
  function Wd() {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = gc;
    if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H === null) {
      return gc;
    }
    return r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H;
  }
  function Gd() {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_A = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = $u;
    return r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_A;
  }
  function Kd() {
    od = 4;
    if (!(nd || (J & 4194048) !== J && Po.current !== null)) {
      rd = true;
    }
    if (!(!(sd & 134217727) && !(cd & 134217727) || K === null)) {
      Rd(K, J, ud, false);
    }
  }
  function qd(e3, t6, n7) {
    const r5 = G;
    G |= 2;
    const i4 = Wd();
    const a4 = Gd();
    if (K !== e3 || J !== t6) {
      vd = null;
      Vd(e3, t6);
    }
    t6 = false;
    let o3 = od;
    a: do {
      try {
        if (Y !== 0 && q !== null) {
          const s3 = q;
          const c2 = td;
          switch (Y) {
            case 8:
              Bd();
              o3 = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              if (Po.current === null) {
                t6 = true;
              }
              var l2 = Y;
              Y = 0;
              td = null;
              $d(e3, s3, c2, l2);
              if (n7 && rd) {
                o3 = 0;
                break a;
              }
              break;
            default:
              l2 = Y;
              Y = 0;
              td = null;
              $d(e3, s3, c2, l2);
          }
        }
        Jd();
        o3 = od;
        break;
      } catch (error) {
        Hd(e3, error);
      }
    } while (1);
    if (t6) {
      e3.shellSuspendCounter++;
    }
    xa2 = null;
    Sa2 = null;
    G = r5;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = i4;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = a4;
    if (q === null) {
      K = null;
      J = 0;
      Pi2();
    }
    return o3;
  }
  function Jd() {
    while (q !== null) {
      Zd(q);
    }
  }
  function Yd(e3, t6) {
    const n7 = G;
    G |= 2;
    const r5 = Wd();
    const i4 = Gd();
    if (K !== e3 || J !== t6) {
      vd = null;
      _d = t_unstable_now() + 500;
      Vd(e3, t6);
    } else {
      rd = yt2(e3, t6);
    }
    a: do {
      try {
        if (Y !== 0 && q !== null) {
          t6 = q;
          const o3 = td;
          b: switch (Y) {
            case 1:
              Y = 0;
              td = null;
              $d(e3, t6, o3, 1);
              break;
            case 2:
            case 9:
              if (no2(o3)) {
                Y = 0;
                td = null;
                Qd(t6);
                break;
              }
              t6 = function() {
                if (!(Y !== 2 && Y !== 9 || K !== e3)) {
                  Y = 7;
                }
                Ef(e3);
              };
              o3.then(t6, t6);
              break a;
            case 3:
              Y = 7;
              break a;
            case 4:
              Y = 5;
              break a;
            case 7:
              if (no2(o3)) {
                Y = 0;
                td = null;
                Qd(t6);
              } else {
                Y = 0;
                td = null;
                $d(e3, t6, o3, 7);
              }
              break;
            case 5:
              let s3 = null;
              switch (q.tag) {
                case 26:
                  s3 = q.memoizedState;
                case 5:
                case 27:
                  const c2 = q;
                  if (s3 ? Ym(s3) : c2.stateNode.complete) {
                    Y = 0;
                    td = null;
                    const l2 = c2.sibling;
                    if (l2 !== null) {
                      q = l2;
                    } else {
                      const u2 = c2.return;
                      if (u2 === null) {
                        q = null;
                      } else {
                        q = u2;
                        ef(u2);
                      }
                    }
                    break b;
                  }
              }
              Y = 0;
              td = null;
              $d(e3, t6, o3, 5);
              break;
            case 6:
              Y = 0;
              td = null;
              $d(e3, t6, o3, 6);
              break;
            case 8:
              Bd();
              od = 6;
              break a;
            default:
              throw Error(a3(462));
          }
        }
        Xd();
        break;
      } catch (error) {
        Hd(e3, error);
      }
    } while (1);
    xa2 = null;
    Sa2 = null;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = r5;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = i4;
    G = n7;
    if (q === null) {
      K = null;
      J = 0;
      Pi2();
      return od;
    }
    return 0;
  }
  function Xd() {
    while (q !== null && !t_unstable_shouldYield()) {
      Zd(q);
    }
  }
  function Zd(e3) {
    const t6 = ml(e3.alternate, e3, ad);
    e3.memoizedProps = e3.pendingProps;
    if (t6 === null) {
      ef(e3);
    } else {
      q = t6;
    }
  }
  function Qd(e3) {
    let t6 = e3;
    const t_alternate = t6.alternate;
    switch (t6.tag) {
      case 15:
      case 0:
        t6 = Jc(t_alternate, t6, t6.pendingProps, t6.type, void 0, J);
        break;
      case 11:
        t6 = Jc(t_alternate, t6, t6.pendingProps, t6.type.render, t6.ref, J);
        break;
      case 5:
        ss2(t6);
        const r5 = t6;
        if (r5 === la) {
          if (F2) {
            ha2(r5);
            if (r5.tag === 5 && r5.stateNode != null) {
              P2 = r5.stateNode;
            }
          } else {
            ha2(r5);
            F2 = true;
          }
        }
      default:
        Sl2(t_alternate, t6);
        t6 = q = Gi2(t6, ad);
        t6 = ml(t_alternate, t6, ad);
    }
    e3.memoizedProps = e3.pendingProps;
    if (t6 === null) {
      ef(e3);
    } else {
      q = t6;
    }
  }
  function $d(e3, t6, n7, r5) {
    xa2 = null;
    Sa2 = null;
    ss2(t6);
    co2 = null;
    lo2 = 0;
    const t_return = t6.return;
    try {
      if (Nc2(e3, t_return, t6, n7, J)) {
        od = 1;
        Oc2(e3, Qi2(n7, e3.current));
        q = null;
        return;
      }
    } catch (error) {
      if (t_return !== null) {
        q = t_return;
        throw error;
      }
      od = 1;
      Oc2(e3, Qi2(n7, e3.current));
      q = null;
      return;
    }
    if (t6.flags & 32768) {
      if (F2 || r5 === 1) {
        e3 = true;
      } else if (rd || J & 536870912) {
        e3 = false;
      } else {
        e3 = true;
        nd = true;
        if (r5 === 2 || r5 === 9 || r5 === 3 || r5 === 6) {
          r5 = Po.current;
          if (r5 !== null && r5.tag === 13) {
            r5.flags |= 16384;
          }
        }
      }
      tf(t6, e3);
    } else {
      ef(t6);
    }
  }
  function ef(e3) {
    let t6 = e3;
    do {
      if (t6.flags & 32768) {
        tf(t6, nd);
        return;
      }
      e3 = t6.return;
      const n7 = BlComponent(t6.alternate, t6, ad);
      if (n7 !== null) {
        q = n7;
        return;
      }
      t6 = t6.sibling;
      if (t6 !== null) {
        q = t6;
        return;
      }
      t6 = e3;
      q = e3;
    } while (t6 !== null);
    if (od === 0) {
      od = 5;
    }
  }
  function tf(e3, t6) {
    do {
      let n7 = xl2(e3.alternate, e3);
      if (n7 !== null) {
        n7.flags &= 32767;
        q = n7;
        return;
      }
      n7 = e3.return;
      if (n7 !== null) {
        n7.flags |= 32768;
        n7.subtreeFlags = 0;
        n7.deletions = null;
      }
      if (!t6 && (e3 = e3.sibling, e3 !== null)) {
        q = e3;
        return;
      }
      e3 = n7;
      q = n7;
    } while (e3 !== null);
    od = 6;
    q = null;
  }
  function nf(e3, t6, n7, r5, i4, o3, s3, c2, l2, u2, d2, f2) {
    e3.cancelPendingCommit = null;
    do {
      df();
    } while (X !== 0);
    if (G & 6) {
      throw Error(a3(327));
    }
    if (t6 !== null) {
      if (t6 === e3.current) {
        throw Error(a3(177));
      }
      if (e3 === K) {
        K = null;
        q = null;
        J = 0;
      }
      xd = t6;
      bd = e3;
      Sd = n7;
      wd = i4;
      Td = r5;
      rf(e3, t6, n7, s3, c2, l2, f2);
    }
  }
  function rf(e3, t6, n7, r5, i4, a4, o3) {
    let s3 = t6.lanes | t6.childLanes;
    Cd = s3;
    s3 |= Ni;
    Tt2(e3, n7, s3, r5, i4, a4);
    Dd = null;
    if ((n7 & 335544064) === n7) {
      Od = za(e3);
      r5 = 10262;
    } else {
      Od = null;
      r5 = 10256;
    }
    if ((t6.subtreeFlags & r5) !== 0 || (t6.flags & r5) !== 0) {
      e3.callbackNode = null;
      e3.callbackPriority = 0;
      yf(t_unstable_NormalPriority, function() {
        ff();
        return null;
      });
    } else {
      e3.callbackNode = null;
      e3.callbackPriority = 0;
    }
    Vl = false;
    r5 = !!(t6.flags & 13878);
    if (t6.subtreeFlags & 13878 || r5) {
      r5 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      i4 = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
      a4 = G;
      G |= 4;
      try {
        hu(e3, t6, n7);
      } finally {
        G = a4;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i4;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r5;
      }
    }
    X = 1;
    if (Vl) {
      Ed = Mp(o3, e3.containerInfo, Od, sf, cf, of, lf, ff, af, null, null);
    } else {
      sf();
      cf();
      lf();
    }
  }
  function af(e3) {
    if (X !== 0) {
      const t6 = bd.onRecoverableError;
      t6(e3, {
        componentStack: null
      });
    }
  }
  function of() {
    if (X === 3) {
      X = 0;
      Fu(xd, bd);
      X = 4;
    }
  }
  function sf() {
    if (X === 1) {
      X = 0;
      const e3 = bd;
      const t6 = xd;
      let n7 = Sd;
      let r5 = !!(t6.flags & 13878);
      if (t6.subtreeFlags & 13878 || r5) {
        r5 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        const i4 = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        const a4 = G;
        G |= 4;
        try {
          pu = false;
          fu = false;
          ju(t6, e3, n7);
          n7 = cp;
          let o3 = ai2(e3.containerInfo);
          let s3 = n7.focusedElem;
          const c2 = n7.selectionRange;
          if (o3 !== s3 && s3 && s3.ownerDocument && ii2(s3.ownerDocument.documentElement, s3)) {
            if (c2 !== null && oi2(s3)) {
              const l2 = c2.start;
              let u2 = c2.end;
              if (u2 === void 0) {
                u2 = l2;
              }
              if (`selectionStart` in s3) {
                s3.selectionStart = l2;
                s3.selectionEnd = Math.min(u2, s3.value.length);
              } else {
                var d2 = s3.ownerDocument || document;
                const f2 = d2 && d2.defaultView || window;
                if (f2.getSelection) {
                  var p2 = f2.getSelection();
                  const m3 = s3.textContent.length;
                  let h2 = Math.min(c2.start, m3);
                  let g3 = c2.end === void 0 ? h2 : Math.min(c2.end, m3);
                  if (!p2.extend && h2 > g3) {
                    o3 = g3;
                    g3 = h2;
                    h2 = o3;
                  }
                  const _2 = ri2(s3, h2);
                  const v3 = ri2(s3, g3);
                  if (_2 && v3 && (p2.rangeCount !== 1 || p2.anchorNode !== _2.node || p2.anchorOffset !== _2.offset || p2.focusNode !== v3.node || p2.focusOffset !== v3.offset)) {
                    const y3 = d2.createRange();
                    y3.setStart(_2.node, _2.offset);
                    p2.removeAllRanges();
                    if (h2 > g3) {
                      p2.addRange(y3);
                      p2.extend(v3.node, v3.offset);
                    } else {
                      y3.setEnd(v3.node, v3.offset);
                      p2.addRange(y3);
                    }
                  }
                }
              }
            }
            d2 = [];
            for (p2 = s3; p2 = p2.parentNode; ) {
              if (p2.nodeType === 1) {
                d2.push({
                  element: p2,
                  left: p2.scrollLeft,
                  top: p2.scrollTop
                });
              }
            }
            if (typeof s3.focus == `function`) {
              s3.focus();
            }
            for (s3 = 0; s3 < d2.length; s3++) {
              const b3 = d2[s3];
              b3.element.scrollLeft = b3.left;
              b3.element.scrollTop = b3.top;
            }
          }
          gh = !!sp;
          sp = null;
          cp = null;
        } finally {
          G = a4;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i4;
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r5;
        }
      }
      e3.current = t6;
      X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      const e3 = bd;
      const t6 = xd;
      let n7 = !!(t6.flags & 8772);
      if (t6.subtreeFlags & 8772 || n7) {
        n7 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        const r5 = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        const i4 = G;
        G |= 4;
        try {
          _u(e3, t6.alternate, t6);
        } finally {
          G = i4;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = r5;
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = n7;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      const e3 = Ed;
      Ed = null;
      t_unstable_requestPaint();
      const t6 = bd;
      let n7 = xd;
      const r5 = Sd;
      let i4 = Td;
      let a4 = (r5 & 335544064) === r5 ? 10262 : 10256;
      if ((n7.subtreeFlags & a4) !== 0 || (n7.flags & a4) !== 0) {
        X = 5;
      } else {
        X = 0;
        bd = null;
        xd = null;
        uf(t6, t6.pendingLanes);
      }
      a4 = t6.pendingLanes;
      if (a4 === 0) {
        yd = null;
      }
      At2(r5);
      n7 = n7.stateNode;
      if (ct2 && typeof ct2.onCommitFiberRoot == `function`) {
        try {
          ct2.onCommitFiberRoot(st2, n7, void 0, (n7.current.flags & 128) == 128);
        } catch {
        }
      }
      if (i4 !== null) {
        n7 = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        a4 = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        try {
          var o3 = t6.onRecoverableError;
          for (var c2 of i4) {
            o3(c2.value, {
              componentStack: c2.stack
            });
          }
        } finally {
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = n7;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = a4;
        }
      }
      i4 = Dd;
      o3 = Od;
      Od = null;
      if (i4 !== null && (Dd = null, o3 === null && (o3 = []), e3 !== null)) {
        for (c2 = 0; c2 < i4.length; c2++) {
          n7 = i4[c2](o3);
          if (n7 !== void 0) {
            e3.finished.finally(n7);
          }
        }
      }
      if (Sd & 3) {
        df();
      }
      Ef(t6);
      a4 = t6.pendingLanes;
      if (r5 & 261930 && a4 & 42) {
        if (t6 === Ad) {
          kd++;
        } else {
          kd = 0;
          Ad = t6;
        }
      } else {
        kd = 0;
        Ad = null;
      }
      Df(0, false);
    }
  }
  function uf(e3, t6) {
    if ((e3.pooledCacheLanes &= t6) === 0) {
      t6 = e3.pooledCache;
      if (t6 != null) {
        e3.pooledCache = null;
        Ia2(t6);
      }
    }
  }
  function df() {
    if (Ed !== null) {
      Ed.skipTransition();
      Ed = null;
    }
    sf();
    cf();
    lf();
    return ff();
  }
  function ff() {
    if (X !== 5) {
      return false;
    }
    const e3 = bd;
    const t6 = Cd;
    Cd = 0;
    let n7 = At2(Sd);
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = n7 < 32 ? 32 : n7;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      n7 = wd;
      wd = null;
      const o3 = bd;
      const s3 = Sd;
      X = 0;
      bd = null;
      xd = null;
      Sd = 0;
      if (G & 6) {
        throw Error(a3(331));
      }
      const c2 = G;
      G |= 4;
      Xu(o3.current);
      Hu(o3, o3.current, s3, n7);
      G = c2;
      Df(0, false);
      if (ct2 && typeof ct2.onPostCommitFiberRoot == `function`) {
        try {
          ct2.onPostCommitFiberRoot(st2, o3);
        } catch {
        }
      }
      return true;
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
      uf(e3, t6);
    }
  }
  function pf(e3, t6, n7) {
    t6 = Qi2(n7, t6);
    t6 = Ac2(e3.stateNode, t6, 2);
    e3 = xo2(e3, t6, 2);
    if (e3 !== null) {
      wt2(e3, 2);
      Ef(e3);
    }
  }
  function Z(e3, t6, n7) {
    if (e3.tag === 3) {
      pf(e3, e3, n7);
    } else {
      while (t6 !== null) {
        if (t6.tag === 3) {
          pf(t6, e3, n7);
          break;
        }
        if (t6.tag === 1) {
          let r5 = t6.stateNode;
          if (typeof t6.type.getDerivedStateFromError == `function` || typeof r5.componentDidCatch == `function` && (yd === null || !yd.has(r5))) {
            e3 = Qi2(n7, e3);
            n7 = jc2(2);
            r5 = xo2(t6, n7, 2);
            if (r5 !== null) {
              Mc2(n7, r5, t6, e3);
              wt2(r5, 2);
              Ef(r5);
            }
            break;
          }
        }
        t6 = t6.return;
      }
    }
  }
  function mf(e3, cause, n7) {
    let e_pingCache = e3.pingCache;
    if (e_pingCache === null) {
      e_pingCache = e3.pingCache = new ed();
      var i4 = /* @__PURE__ */ new Set();
      e_pingCache.set(cause, i4);
    } else {
      i4 = e_pingCache.get(cause);
      if (i4 === void 0) {
        i4 = /* @__PURE__ */ new Set();
        e_pingCache.set(cause, i4);
      }
    }
    if (!i4.has(n7)) {
      id = true;
      i4.add(n7);
      e3 = hf.bind(null, e3, cause, n7);
      cause.then(e3, e3);
    }
  }
  function hf(e3, t6, n7) {
    const e_pingCache = e3.pingCache;
    if (e_pingCache !== null) {
      e_pingCache.delete(t6);
    }
    e3.pingedLanes |= e3.suspendedLanes & n7;
    e3.warmLanes &= ~n7;
    if (K === e3 && (J & n7) === n7) {
      if (od === 4 || od === 3 && (J & 62914560) === J && t_unstable_now() - hd < 300) {
        if (G & 2) {
          ld |= n7;
        } else {
          Vd(e3, 0);
        }
      } else {
        ld |= n7;
      }
      if (dd === J) {
        dd = 0;
      }
    }
    Ef(e3);
  }
  function gf(e3, t6) {
    if (t6 === 0) {
      t6 = St2();
    }
    e3 = Li2(e3, t6);
    if (e3 !== null) {
      wt2(e3, t6);
      Ef(e3);
    }
  }
  function _f(e3) {
    const e_memoizedState = e3.memoizedState;
    let n7 = 0;
    if (e_memoizedState !== null) {
      n7 = e_memoizedState.retryLane;
    }
    gf(e3, n7);
  }
  function vf(e3, t6) {
    let n7 = 0;
    switch (e3.tag) {
      case 31:
      case 13:
        var r5 = e3.stateNode;
        const i4 = e3.memoizedState;
        if (i4 !== null) {
          n7 = i4.retryLane;
        }
        break;
      case 19:
        r5 = e3.stateNode;
        break;
      case 22:
        r5 = e3.stateNode._retryCache;
        break;
      default:
        throw Error(a3(314));
    }
    if (r5 !== null) {
      r5.delete(t6);
    }
    gf(e3, n7);
  }
  function yf(e3, t6) {
    return t_unstable_scheduleCallback(e3, t6);
  }
  var bf = null;
  var xf = null;
  var Sf = false;
  var Cf = false;
  var wf = false;
  var Tf = 0;
  function Ef(e3) {
    if (e3 !== xf && e3.next === null) {
      if (xf === null) {
        bf = xf = e3;
      } else {
        xf = xf.next = e3;
      }
    }
    Cf = true;
    if (!Sf) {
      Sf = true;
      Nf();
    }
  }
  function Df(e3, t6) {
    if (!wf && Cf) {
      wf = true;
      do {
        var n7 = false;
        for (let r5 = bf; r5 !== null; ) {
          if (!t6) {
            if (e3 !== 0) {
              const i4 = r5.pendingLanes;
              if (i4 === 0) var a4 = 0;
              else {
                const {
                  suspendedLanes,
                  pingedLanes
                } = r5;
                a4 = (1 << 31 - ut2(42 | e3) + 1) - 1;
                a4 &= i4 & ~(suspendedLanes & ~pingedLanes);
                a4 = a4 & 201326741 ? a4 & 201326741 | 1 : a4 ? a4 | 2 : 0;
              }
              if (a4 !== 0) {
                n7 = true;
                Mf(r5, a4);
              }
            } else {
              a4 = J;
              a4 = vt2(r5, r5 === K ? a4 : 0, r5.cancelPendingCommit !== null || r5.timeoutHandle !== -1);
              if (!(!(a4 & 3) || yt2(r5, a4))) {
                n7 = true;
                Mf(r5, a4);
              }
            }
          }
          r5 = r5.next;
        }
      } while (n7);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Sf = false;
    Cf = false;
    let e3 = 0;
    if (Tf !== 0 && hp()) {
      e3 = Tf;
    }
    const t6 = t_unstable_now();
    let n7 = null;
    for (let r5 = bf; r5 !== null; ) {
      const i4 = r5.next;
      const a4 = Af(r5, t6);
      if (a4 === 0) {
        r5.next = null;
        if (n7 === null) {
          bf = i4;
        } else {
          n7.next = i4;
        }
        if (i4 === null) {
          xf = n7;
        }
      } else {
        n7 = r5;
        if (e3 !== 0 || a4 & 3) {
          Cf = true;
        }
      }
      r5 = i4;
    }
    if (!(X !== 0 && X !== 5)) {
      Df(e3, false);
    }
    if (Tf !== 0) {
      Tf = 0;
    }
  }
  function Af(e3, t6) {
    let e_suspendedLanes = e3.suspendedLanes;
    let e_pingedLanes = e3.pingedLanes;
    const e_expirationTimes = e3.expirationTimes;
    for (let a4 = e3.pendingLanes & -62914561; a4 > 0; ) {
      const o3 = 31 - ut2(a4);
      const s3 = 1 << o3;
      const c2 = e_expirationTimes[o3];
      if (c2 === -1) {
        if ((s3 & e_suspendedLanes) === 0 || (s3 & e_pingedLanes) !== 0) {
          e_expirationTimes[o3] = xt2(s3, t6);
        }
      } else if (c2 <= t6) {
        e3.expiredLanes |= s3;
      }
      a4 &= ~s3;
    }
    t6 = K;
    e_suspendedLanes = J;
    e_suspendedLanes = vt2(e3, e3 === t6 ? e_suspendedLanes : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1);
    e_pingedLanes = e3.callbackNode;
    if (e_suspendedLanes === 0 || e3 === t6 && (Y === 2 || Y === 9) || e3.cancelPendingCommit !== null) {
      if (e_pingedLanes !== null && e_pingedLanes !== null) {
        t_unstable_cancelCallback(e_pingedLanes);
      }
      e3.callbackNode = null;
      return e3.callbackPriority = 0;
    }
    if (!(e_suspendedLanes & 3) || yt2(e3, e_suspendedLanes)) {
      t6 = e_suspendedLanes & -e_suspendedLanes;
      if (t6 === e3.callbackPriority) {
        return t6;
      }
      if (e_pingedLanes !== null) {
        t_unstable_cancelCallback(e_pingedLanes);
      }
      switch (At2(e_suspendedLanes)) {
        case 2:
        case 8:
          e_suspendedLanes = t_unstable_UserBlockingPriority;
          break;
        case 32:
          e_suspendedLanes = t_unstable_NormalPriority;
          break;
        case 268435456:
          e_suspendedLanes = t_unstable_IdlePriority;
          break;
        default:
          e_suspendedLanes = t_unstable_NormalPriority;
      }
      e_pingedLanes = jf.bind(null, e3);
      e_suspendedLanes = t_unstable_scheduleCallback(e_suspendedLanes, e_pingedLanes);
      e3.callbackPriority = t6;
      e3.callbackNode = e_suspendedLanes;
      return t6;
    }
    if (e_pingedLanes !== null && e_pingedLanes !== null) {
      t_unstable_cancelCallback(e_pingedLanes);
    }
    e3.callbackPriority = 2;
    e3.callbackNode = null;
    return 2;
  }
  function jf(e3, t6) {
    if (X !== 0 && X !== 5) {
      e3.callbackNode = null;
      e3.callbackPriority = 0;
      return null;
    }
    const e_callbackNode = e3.callbackNode;
    if (df() && e3.callbackNode !== e_callbackNode) {
      return null;
    }
    let r5 = J;
    r5 = vt2(e3, e3 === K ? r5 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1);
    if (r5 === 0) {
      return null;
    }
    Fd(e3, r5, t6);
    Af(e3, t_unstable_now());
    if (e3.callbackNode != null && e3.callbackNode === e_callbackNode) {
      return jf.bind(null, e3);
    }
    return null;
  }
  function Mf(e3, t6) {
    if (df()) {
      return null;
    }
    Fd(e3, t6, true);
  }
  function Nf() {
    bp(function() {
      if (G & 6) {
        t_unstable_scheduleCallback(t_unstable_ImmediatePriority, Of);
      } else {
        kf();
      }
    });
  }
  function Pf() {
    if (Tf === 0) {
      let e3 = Ha;
      if (e3 === 0) {
        e3 = mt2;
        mt2 <<= 1;
        if (!(mt2 & 261888)) {
          mt2 = 256;
        }
      }
      Tf = e3;
    }
    return Tf;
  }
  function Ff(e3) {
    if (e3 == null || typeof e3 == `symbol` || typeof e3 == `boolean`) {
      return null;
    }
    if (typeof e3 == `function`) {
      return e3;
    }
    return kn2(e3);
  }
  function If(e3, t6, n7, r5, currentTarget) {
    if (t6 === `submit` && n7 && n7.stateNode === currentTarget) {
      let a4 = Ff((currentTarget[Ft2] || null).action);
      let o3 = r5.submitter;
      if (o3) {
        t6 = (t6 = o3[Ft2] || null) ? Ff(t6.formAction) : o3.getAttribute(`formAction`);
        if (t6 !== null) {
          a4 = t6;
          o3 = null;
        }
      }
      const s3 = new Zn2(`action`, `action`, null, r5, currentTarget);
      e3.push({
        event: s3,
        listeners: [{
          instance: null,
          listener: function() {
            if (r5.defaultPrevented) {
              if (Tf !== 0) {
                var e4 = new FormData(currentTarget, o3);
                nc(n7, {
                  pending: true,
                  data: e4,
                  method: currentTarget.method,
                  action: a4
                }, null, e4);
              }
            } else {
              if (typeof a4 == `function`) {
                s3.preventDefault();
                e4 = new FormData(currentTarget, o3);
                nc(n7, {
                  pending: true,
                  data: e4,
                  method: currentTarget.method,
                  action: a4
                }, a4, e4);
              }
            }
          },
          currentTarget
        }]
      });
    }
  }
  for (var Rf of Ei2) {
    O(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
  }
  O(vi2, `onAnimationEnd`);
  O(yi2, `onAnimationIteration`);
  O(bi2, `onAnimationStart`);
  O(`dblclick`, `onDoubleClick`);
  O(`focusin`, `onFocus`);
  O(`focusout`, `onBlur`);
  O(xi2, `onTransitionRun`);
  O(Si2, `onTransitionStart`);
  O(Ci2, `onTransitionCancel`);
  O(wi2, `onTransitionEnd`);
  $t2(`onMouseEnter`, [`mouseout`, `mouseover`]);
  $t2(`onMouseLeave`, [`mouseout`, `mouseover`]);
  $t2(`onPointerEnter`, [`pointerout`, `pointerover`]);
  $t2(`onPointerLeave`, [`pointerout`, `pointerover`]);
  Qt2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `));
  Qt2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `));
  Qt2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]);
  Qt2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `));
  Qt2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `));
  Qt2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `);
  var Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e3, t6) {
    t6 = !!(t6 & 4);
    for (let r5 of e3) {
      const i4 = r5.event;
      r5 = r5.listeners;
      a: {
        let a4;
        if (t6) {
          for (var o3 = r5.length - 1; o3 >= 0; o3--) {
            var s3 = r5[o3];
            var c2 = s3.instance;
            var l2 = s3.currentTarget;
            s3 = s3.listener;
            if (c2 !== a4 && i4.isPropagationStopped()) {
              break a;
            }
            a4 = s3;
            i4.currentTarget = l2;
            try {
              a4(i4);
            } catch (error) {
              Ai(error);
            }
            i4.currentTarget = null;
            a4 = c2;
          }
        } else {
          for (o3 = 0; o3 < r5.length; o3++) {
            s3 = r5[o3];
            c2 = s3.instance;
            l2 = s3.currentTarget;
            s3 = s3.listener;
            if (c2 !== a4 && i4.isPropagationStopped()) {
              break a;
            }
            a4 = s3;
            i4.currentTarget = l2;
            try {
              a4(i4);
            } catch (error) {
              Ai(error);
            }
            i4.currentTarget = null;
            a4 = c2;
          }
        }
      }
    }
  }
  function Q(e3, t6) {
    let n7 = t6[Lt2];
    if (n7 === void 0) {
      n7 = t6[Lt2] = /* @__PURE__ */ new Set();
    }
    const r5 = e3 + `__bubble`;
    if (!n7.has(r5)) {
      Gf(t6, e3, 2, false);
      n7.add(r5);
    }
  }
  function Hf(e3, t6, n7) {
    let r5 = 0;
    if (t6) {
      r5 |= 4;
    }
    Gf(n7, e3, r5, t6);
  }
  var Uf = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf(e3) {
    if (!e3[Uf]) {
      e3[Uf] = true;
      Xt2.forEach((t7) => {
        if (t7 !== `selectionchange`) {
          if (!Bf.has(t7)) {
            Hf(t7, false, e3);
          }
          Hf(t7, true, e3);
        }
      });
      const t6 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
      if (!(t6 === null || t6[Uf])) {
        t6[Uf] = true;
        Hf(`selectionchange`, false, t6);
      }
    }
  }
  function Gf(e3, t6, n7, r5) {
    switch (Ch(t6)) {
      case 2:
        var passive = _h;
        break;
      case 8:
        passive = vh;
        break;
      default:
        passive = yh;
    }
    n7 = passive.bind(null, t6, n7, e3);
    passive = void 0;
    if (!(!Bn2 || t6 !== `touchstart` && t6 !== `touchmove` && t6 !== `wheel`)) {
      passive = true;
    }
    if (r5) {
      if (passive === void 0) {
        e3.addEventListener(t6, n7, true);
      } else {
        e3.addEventListener(t6, n7, {
          capture: true,
          passive
        });
      }
    } else if (passive === void 0) {
      e3.addEventListener(t6, n7, false);
    } else {
      e3.addEventListener(t6, n7, {
        passive
      });
    }
  }
  function Kf(e3, t6, n7, r5, i4) {
    let a4 = r5;
    if (!(t6 & 1) && !(t6 & 2) && r5 !== null) {
      a: while (true) {
        if (r5 === null) {
          return;
        }
        let o3 = r5.tag;
        if (o3 === 3 || o3 === 4) {
          let c2 = r5.stateNode.containerInfo;
          if (c2 === i4) {
            break;
          }
          if (o3 === 4) {
            for (o3 = r5.return; o3 !== null; ) {
              var l2 = o3.tag;
              if ((l2 === 3 || l2 === 4) && o3.stateNode.containerInfo === i4) {
                return;
              }
              o3 = o3.return;
            }
          }
          while (c2 !== null) {
            o3 = Wt2(c2);
            if (o3 === null) {
              return;
            }
            l2 = o3.tag;
            if (l2 === 5 || l2 === 6 || l2 === 26 || l2 === 27) {
              a4 = o3;
              r5 = o3;
              continue a;
            }
            c2 = c2.parentNode;
          }
        }
        r5 = r5.return;
      }
    }
    Ln2(function() {
      const r6 = a4;
      const i5 = Mn2(n7);
      const o3 = [];
      a: {
        var c2 = Ti2.get(e3);
        if (c2 !== void 0) {
          var l3 = Zn2;
          var u2 = e3;
          switch (e3) {
            case `keypress`:
              if (Kn2(n7) === 0) {
                break a;
              }
            case `keydown`:
            case `keyup`:
              l3 = hr2;
              break;
            case `focusin`:
              u2 = `focus`;
              l3 = or2;
              break;
            case `focusout`:
              u2 = `blur`;
              l3 = or2;
              break;
            case `beforeblur`:
            case `afterblur`:
              l3 = or2;
              break;
            case `click`:
              if (n7.button === 2) {
                break a;
              }
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
          var d2 = !!(t6 & 4);
          var f2 = !d2 && (e3 === `scroll` || e3 === `scrollend`);
          var p2 = d2 ? c2 === null ? null : c2 + `Capture` : c2;
          d2 = [];
          var h2;
          for (var m3 = r6; m3 !== null; ) {
            var g3 = m3;
            h2 = g3.stateNode;
            g3 = g3.tag;
            if (!(g3 !== 5 && g3 !== 26 && g3 !== 27 || h2 === null || p2 === null)) {
              g3 = Rn2(m3, p2);
              if (g3 != null) {
                d2.push(qf(m3, g3, h2));
              }
            }
            if (f2) {
              break;
            }
            m3 = m3.return;
          }
          if (d2.length > 0) {
            c2 = new l3(c2, u2, null, n7, i5);
            o3.push({
              event: c2,
              listeners: d2
            });
          }
        }
      }
      if (!(t6 & 7)) {
        a: {
          l3 = e3 === `mouseover` || e3 === `pointerover`;
          c2 = e3 === `mouseout` || e3 === `pointerout`;
          if (l3 && n7 !== jn2 && (u2 = n7.relatedTarget || n7.fromElement) && (Wt2(u2) || u2[It2])) {
            break a;
          }
          if (c2 || l3) {
            u2 = i5.window === i5 ? i5 : (l3 = i5.ownerDocument) ? l3.defaultView || l3.parentWindow : window;
            if (c2) {
              l3 = n7.relatedTarget || n7.toElement;
              c2 = r6;
              l3 = l3 ? Wt2(l3) : null;
              if (l3 !== null && (f2 = s2(l3), d2 = l3.tag, l3 !== f2 || d2 !== 5 && d2 !== 27 && d2 !== 6)) {
                l3 = null;
              }
            } else {
              c2 = null;
              l3 = r6;
            }
            if (c2 !== l3) {
              d2 = ir2;
              g3 = `onMouseLeave`;
              p2 = `onMouseEnter`;
              m3 = `mouse`;
              if (e3 === `pointerout` || e3 === `pointerover`) {
                d2 = gr2;
                g3 = `onPointerLeave`;
                p2 = `onPointerEnter`;
                m3 = `pointer`;
              }
              f2 = c2 == null ? u2 : Kt2(c2);
              h2 = l3 == null ? u2 : Kt2(l3);
              u2 = new d2(g3, m3 + `leave`, c2, n7, i5);
              u2.target = f2;
              u2.relatedTarget = h2;
              g3 = null;
              if (Wt2(i5) === r6) {
                d2 = new d2(p2, m3 + `enter`, l3, n7, i5);
                d2.target = h2;
                d2.relatedTarget = f2;
                g3 = d2;
              }
              f2 = g3;
              d2 = c2 && l3 ? ie(c2, l3, Yf) : null;
              if (c2 !== null) {
                Xf(o3, u2, c2, d2, false);
              }
              if (l3 !== null && f2 !== null) {
                Xf(o3, f2, l3, d2, true);
              }
            }
          }
        }
        a: {
          c2 = r6 ? Kt2(r6) : window;
          l3 = c2.nodeName && c2.nodeName.toLowerCase();
          if (l3 === `select` || l3 === `input` && c2.type === `file`) var _2 = Vr2;
          else if (Fr2(c2)) {
            if (Hr2) {
              _2 = Zr2;
            } else {
              _2 = Yr2;
              var v3 = Jr2;
            }
          } else {
            l3 = c2.nodeName;
            if (!l3 || l3.toLowerCase() !== `input` || c2.type !== `checkbox` && c2.type !== `radio`) {
              if (r6 && En2(r6.elementType)) {
                _2 = Vr2;
              }
            } else {
              _2 = Xr2;
            }
          }
          if (_2 &&= _2(e3, r6)) {
            Ir2(o3, _2, n7, i5);
            break a;
          }
          if (v3) {
            v3(e3, c2, r6);
          }
        }
        v3 = r6 ? Kt2(r6) : window;
        switch (e3) {
          case `focusin`:
            if (Fr2(v3) || v3.contentEditable === `true`) {
              ci2 = v3;
              li2 = r6;
              ui2 = null;
            }
            break;
          case `focusout`:
            ci2 = null;
            li2 = null;
            ui2 = null;
            break;
          case `mousedown`:
            di2 = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            di2 = false;
            fi2(o3, n7, i5);
            break;
          case `selectionchange`:
            if (si2) {
              break;
            }
          case `keydown`:
          case `keyup`:
            fi2(o3, n7, i5);
        }
        let y3;
        if (Cr2) {
          b: {
            switch (e3) {
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
        } else {
          if (jr2) {
            if (kr2(e3, n7)) {
              b3 = `onCompositionEnd`;
            }
          } else if (e3 === `keydown` && n7.keyCode === 229) {
            b3 = `onCompositionStart`;
          }
        }
        if (b3) {
          if (Er2 && n7.locale !== `ko`) {
            if (jr2 || b3 !== `onCompositionStart`) {
              if (b3 === `onCompositionEnd` && jr2) {
                y3 = Gn2();
              }
            } else {
              Hn2 = i5;
              Un2 = `value` in Hn2 ? Hn2.value : Hn2.textContent;
              jr2 = true;
            }
          }
          v3 = Jf(r6, b3);
          if (v3.length > 0) {
            b3 = new lr2(b3, e3, null, n7, i5);
            o3.push({
              event: b3,
              listeners: v3
            });
            if (y3) {
              b3.data = y3;
            } else {
              y3 = Ar2(n7);
              if (y3 !== null) {
                b3.data = y3;
              }
            }
          }
        }
        if (y3 = Tr2 ? Mr2(e3, n7) : Nr2(e3, n7)) {
          b3 = Jf(r6, `onBeforeInput`);
          if (b3.length > 0) {
            v3 = new lr2(`onBeforeInput`, `beforeinput`, null, n7, i5);
            o3.push({
              event: v3,
              listeners: b3
            });
            v3.data = y3;
          }
        }
        If(o3, e3, r6, n7, i5);
      }
      Vf(o3, t6);
    });
  }
  function qf(e3, listener, currentTarget) {
    return {
      instance: e3,
      listener,
      currentTarget
    };
  }
  function Jf(e3, t6) {
    const n7 = t6 + `Capture`;
    const r5 = [];
    while (e3 !== null) {
      let i4 = e3;
      const a4 = i4.stateNode;
      i4 = i4.tag;
      if (!(i4 !== 5 && i4 !== 26 && i4 !== 27 || a4 === null)) {
        i4 = Rn2(e3, n7);
        if (i4 != null) {
          r5.unshift(qf(e3, i4, a4));
        }
        i4 = Rn2(e3, t6);
        if (i4 != null) {
          r5.push(qf(e3, i4, a4));
        }
      }
      if (e3.tag === 3) {
        return r5;
      }
      e3 = e3.return;
    }
    return [];
  }
  function Yf(e3) {
    if (e3 === null) {
      return null;
    }
    do {
      e3 = e3.return;
    } while (e3 && e3.tag !== 5 && e3.tag !== 27);
    return e3 || null;
  }
  function Xf(e3, t6, n7, r5, i4) {
    const t__reactName = t6._reactName;
    const o3 = [];
    while (n7 !== null && n7 !== r5) {
      let s3 = n7;
      let c2 = s3.alternate;
      let l2 = s3.stateNode;
      s3 = s3.tag;
      if (c2 !== null && c2 === r5) {
        break;
      }
      if (!(s3 !== 5 && s3 !== 26 && s3 !== 27 || l2 === null)) {
        c2 = l2;
        if (i4) {
          l2 = Rn2(n7, t__reactName);
          if (l2 != null) {
            o3.unshift(qf(n7, l2, c2));
          }
        } else if (!i4) {
          l2 = Rn2(n7, t__reactName);
          if (l2 != null) {
            o3.push(qf(n7, l2, c2));
          }
        }
      }
      n7 = n7.return;
    }
    if (o3.length !== 0) {
      e3.push({
        event: t6,
        listeners: o3
      });
    }
  }
  var Zf = /\r\n?/g;
  var Qf = /\u0000|\uFFFD/g;
  function $f(e3) {
    return (typeof e3 == `string` ? e3 : `` + e3).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e3, t6) {
    t6 = $f(t6);
    return $f(e3) === t6;
  }
  function $2(e3, t6, n7, r5, i4, o3) {
    switch (n7) {
      case `children`:
        if (typeof r5 == `string`) {
          if (!(t6 === `body` || t6 === `textarea` && r5 === ``)) {
            Sn2(e3, r5);
          }
        } else if (typeof r5 == `number` || typeof r5 == `bigint`) {
          if (t6 !== `body`) {
            Sn2(e3, `` + r5);
          }
        } else {
          return;
        }
        break;
      case `className`:
        sn2(e3, `class`, r5);
        break;
      case `tabIndex`:
        sn2(e3, `tabindex`, r5);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        sn2(e3, n7, r5);
        break;
      case `style`:
        Tn2(e3, r5, o3);
        return;
      case `data`:
        if (t6 !== `object`) {
          sn2(e3, `data`, r5);
          break;
        }
      case `src`:
      case `href`:
        if (r5 === `` && (t6 !== `a` || n7 !== `href`)) {
          e3.removeAttribute(n7);
          break;
        }
        if (r5 == null || typeof r5 == `function` || typeof r5 == `symbol` || typeof r5 == `boolean`) {
          e3.removeAttribute(n7);
          break;
        }
        r5 = kn2(r5);
        e3.setAttribute(n7, r5);
        break;
      case `action`:
      case `formAction`:
        if (typeof r5 == `function`) {
          e3.setAttribute(n7, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o3 == `function`) {
          if (n7 === `formAction`) {
            if (t6 !== `input`) {
              $2(e3, t6, `name`, i4.name, i4, null);
            }
            $2(e3, t6, `formEncType`, i4.formEncType, i4, null);
            $2(e3, t6, `formMethod`, i4.formMethod, i4, null);
            $2(e3, t6, `formTarget`, i4.formTarget, i4, null);
          } else {
            $2(e3, t6, `encType`, i4.encType, i4, null);
            $2(e3, t6, `method`, i4.method, i4, null);
            $2(e3, t6, `target`, i4.target, i4, null);
          }
        }
        if (r5 == null || typeof r5 == `symbol` || typeof r5 == `boolean`) {
          e3.removeAttribute(n7);
          break;
        }
        r5 = kn2(r5);
        e3.setAttribute(n7, r5);
        break;
      case `onClick`:
        if (r5 != null) {
          e3.onclick = unsuspend;
        }
        return;
      case `onScroll`:
        if (r5 != null) {
          Q(`scroll`, e3);
        }
        return;
      case `onScrollEnd`:
        if (r5 != null) {
          Q(`scrollend`, e3);
        }
        return;
      case `dangerouslySetInnerHTML`:
        if (r5 != null) {
          if (typeof r5 != `object` || !(`__html` in r5)) {
            throw Error(a3(61));
          }
          n7 = r5.__html;
          if (n7 != null) {
            if (i4.children != null) {
              throw Error(a3(60));
            }
            if (o3?.__html !== n7) {
              e3.innerHTML = n7;
            }
          }
        }
        break;
      case `multiple`:
        e3.multiple = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
        break;
      case `muted`:
        e3.muted = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
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
          e3.removeAttribute(`xlink:href`);
          break;
        }
        n7 = kn2(r5);
        e3.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n7);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        if (r5 != null && typeof r5 != `function` && typeof r5 != `symbol`) {
          e3.setAttribute(n7, r5);
        } else {
          e3.removeAttribute(n7);
        }
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
        if (r5 && typeof r5 != `function` && typeof r5 != `symbol`) {
          e3.setAttribute(n7, ``);
        } else {
          e3.removeAttribute(n7);
        }
        break;
      case `capture`:
      case `download`:
        if (r5 === true) {
          e3.setAttribute(n7, ``);
        } else if (r5 !== false && r5 != null && typeof r5 != `function` && typeof r5 != `symbol`) {
          e3.setAttribute(n7, r5);
        } else {
          e3.removeAttribute(n7);
        }
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        if (r5 != null && typeof r5 != `function` && typeof r5 != `symbol` && !isNaN(r5) && r5 >= 1) {
          e3.setAttribute(n7, r5);
        } else {
          e3.removeAttribute(n7);
        }
        break;
      case `rowSpan`:
      case `start`:
        if (r5 == null || typeof r5 == `function` || typeof r5 == `symbol` || isNaN(r5)) {
          e3.removeAttribute(n7);
        } else {
          e3.setAttribute(n7, r5);
        }
        break;
      case `popover`:
        Q(`beforetoggle`, e3);
        Q(`toggle`, e3);
        on2(e3, `popover`, r5);
        break;
      case `xlinkActuate`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r5);
        break;
      case `xlinkArcrole`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r5);
        break;
      case `xlinkRole`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:role`, r5);
        break;
      case `xlinkShow`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:show`, r5);
        break;
      case `xlinkTitle`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:title`, r5);
        break;
      case `xlinkType`:
        cn2(e3, `http://www.w3.org/1999/xlink`, `xlink:type`, r5);
        break;
      case `xmlBase`:
        cn2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r5);
        break;
      case `xmlLang`:
        cn2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r5);
        break;
      case `xmlSpace`:
        cn2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r5);
        break;
      case `is`:
        on2(e3, `is`, r5);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(n7.length > 2) || n7[0] !== `o` && n7[0] !== `O` || n7[1] !== `n` && n7[1] !== `N`) {
          n7 = Dn2.get(n7) || n7;
          on2(e3, n7, r5);
        } else {
          return;
        }
    }
    D2 = true;
  }
  function tp(e3, t6, n7, r5, i4, o3) {
    switch (n7) {
      case `style`:
        Tn2(e3, r5, o3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r5 != null) {
          if (typeof r5 != `object` || !(`__html` in r5)) {
            throw Error(a3(61));
          }
          n7 = r5.__html;
          if (n7 != null) {
            if (i4.children != null) {
              throw Error(a3(60));
            }
            if (o3?.__html !== n7) {
              e3.innerHTML = n7;
            }
          }
        }
        break;
      case `children`:
        if (typeof r5 == `string`) {
          Sn2(e3, r5);
        } else if (typeof r5 == `number` || typeof r5 == `bigint`) {
          Sn2(e3, `` + r5);
        } else {
          return;
        }
        break;
      case `onScroll`:
        if (r5 != null) {
          Q(`scroll`, e3);
        }
        return;
      case `onScrollEnd`:
        if (r5 != null) {
          Q(`scrollend`, e3);
        }
        return;
      case `onClick`:
        if (r5 != null) {
          e3.onclick = unsuspend;
        }
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
        if (!Zt2.hasOwnProperty(n7)) {
          a: {
            if (n7[0] === `o` && n7[1] === `n` && (i4 = n7.endsWith(`Capture`), o3 = n7.slice(2, i4 ? n7.length - 7 : void 0), t6 = e3[Ft2] || null, t6 = t6 == null ? null : t6[n7], typeof t6 == `function` && e3.removeEventListener(o3, t6, i4), typeof r5 == `function`)) {
              if (typeof t6 != `function` && t6 !== null) {
                if (n7 in e3) {
                  e3[n7] = null;
                } else if (e3.hasAttribute(n7)) {
                  e3.removeAttribute(n7);
                }
              }
              e3.addEventListener(o3, r5, i4);
              break a;
            }
            D2 = true;
            if (n7 in e3) {
              e3[n7] = r5;
            } else if (r5 === true) {
              e3.setAttribute(n7, ``);
            } else {
              on2(e3, n7, r5);
            }
          }
        }
        return;
    }
    D2 = true;
  }
  function np(e3, t6, n7) {
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
        Q(`error`, e3);
        Q(`load`, e3);
        var r5 = false;
        var i4 = false;
        var o3;
        for (o3 in n7) {
          if (n7.hasOwnProperty(o3)) {
            var s3 = n7[o3];
            if (s3 != null) {
              switch (o3) {
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
                  $2(e3, t6, o3, s3, n7, null);
              }
            }
          }
        }
        if (i4) {
          $2(e3, t6, `srcSet`, n7.srcSet, n7, null);
        }
        if (r5) {
          $2(e3, t6, `src`, n7.src, n7, null);
        }
        return;
      case `input`:
        Q(`invalid`, e3);
        var c2 = o3 = s3 = i4 = null;
        var l2 = null;
        var u2 = null;
        for (r5 in n7) {
          if (n7.hasOwnProperty(r5)) {
            var d2 = n7[r5];
            if (d2 != null) {
              switch (r5) {
                case `name`:
                  i4 = d2;
                  break;
                case `type`:
                  s3 = d2;
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
                  if (d2 != null) {
                    throw Error(a3(137, t6));
                  }
                  break;
                default:
                  $2(e3, t6, r5, d2, n7, null);
              }
            }
          }
        }
        _n2(e3, o3, c2, l2, u2, s3, i4, false);
        return;
      case `select`:
        Q(`invalid`, e3);
        o3 = null;
        s3 = null;
        r5 = null;
        for (i4 in n7) {
          if (n7.hasOwnProperty(i4) && (c2 = n7[i4], c2 != null)) {
            switch (i4) {
              case `value`:
                o3 = c2;
                break;
              case `defaultValue`:
                s3 = c2;
                break;
              case `multiple`:
                r5 = c2;
              default:
                $2(e3, t6, i4, c2, n7, null);
            }
          }
        }
        t6 = o3;
        n7 = s3;
        e3.multiple = !!r5;
        if (t6 == null) {
          if (n7 != null) {
            yn2(e3, !!r5, n7, true);
          }
        } else {
          yn2(e3, !!r5, t6, false);
        }
        return;
      case `textarea`:
        Q(`invalid`, e3);
        r5 = null;
        i4 = null;
        o3 = null;
        for (s3 in n7) {
          if (n7.hasOwnProperty(s3) && (c2 = n7[s3], c2 != null)) {
            switch (s3) {
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
                if (c2 != null) {
                  throw Error(a3(91));
                }
                break;
              default:
                $2(e3, t6, s3, c2, n7, null);
            }
          }
        }
        xn2(e3, r5, i4, o3);
        return;
      case `option`:
        for (l2 in n7) {
          if (n7.hasOwnProperty(l2) && (r5 = n7[l2], r5 != null)) {
            switch (l2) {
              case `selected`:
                e3.selected = r5 && typeof r5 != `function` && typeof r5 != `symbol`;
                break;
              default:
                $2(e3, t6, l2, r5, n7, null);
            }
          }
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e3);
        Q(`toggle`, e3);
        Q(`cancel`, e3);
        Q(`close`, e3);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e3);
        break;
      case `video`:
      case `audio`:
        for (r5 = 0; r5 < zf.length; r5++) {
          Q(zf[r5], e3);
        }
        break;
      case `image`:
        Q(`error`, e3);
        Q(`load`, e3);
        break;
      case `details`:
        Q(`toggle`, e3);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e3);
        Q(`load`, e3);
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
        for (u2 in n7) {
          if (n7.hasOwnProperty(u2) && (r5 = n7[u2], r5 != null)) {
            switch (u2) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(a3(137, t6));
              default:
                $2(e3, t6, u2, r5, n7, null);
            }
          }
        }
        return;
      default:
        if (En2(t6)) {
          for (d2 in n7) {
            if (n7.hasOwnProperty(d2)) {
              r5 = n7[d2];
              if (r5 !== void 0) {
                tp(e3, t6, d2, r5, n7, void 0);
              }
            }
          }
          return;
        }
    }
    for (c2 in n7) {
      if (n7.hasOwnProperty(c2)) {
        r5 = n7[c2];
        if (r5 != null) {
          $2(e3, t6, c2, r5, n7, null);
        }
      }
    }
  }
  var rp = {};
  function ip(e3, t6, n7, r5) {
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
        var i4 = null;
        var o3 = null;
        var s3 = null;
        var c2 = null;
        var l2 = null;
        var u2 = null;
        var d2 = null;
        for (m3 in n7) {
          var f2 = n7[m3];
          if (n7.hasOwnProperty(m3) && f2 != null) {
            switch (m3) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l2 = f2;
              default:
                if (!r5.hasOwnProperty(m3)) {
                  $2(e3, t6, m3, null, r5, f2);
                }
            }
          }
        }
        for (var p2 in r5) {
          var m3 = r5[p2];
          f2 = n7[p2];
          if (r5.hasOwnProperty(p2) && (m3 != null || f2 != null)) {
            switch (p2) {
              case `type`:
                if (m3 !== f2) {
                  D2 = true;
                }
                o3 = m3;
                break;
              case `name`:
                if (m3 !== f2) {
                  D2 = true;
                }
                i4 = m3;
                break;
              case `checked`:
                if (m3 !== f2) {
                  D2 = true;
                }
                u2 = m3;
                break;
              case `defaultChecked`:
                if (m3 !== f2) {
                  D2 = true;
                }
                d2 = m3;
                break;
              case `value`:
                if (m3 !== f2) {
                  D2 = true;
                }
                s3 = m3;
                break;
              case `defaultValue`:
                if (m3 !== f2) {
                  D2 = true;
                }
                c2 = m3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m3 != null) {
                  throw Error(a3(137, t6));
                }
                break;
              default:
                if (m3 !== f2) {
                  $2(e3, t6, p2, m3, r5, f2);
                }
            }
          }
        }
        gn2(e3, s3, c2, l2, u2, d2, o3, i4);
        return;
      case `select`:
        p2 = null;
        c2 = null;
        s3 = null;
        m3 = null;
        for (o3 in n7) {
          l2 = n7[o3];
          if (n7.hasOwnProperty(o3) && l2 != null) {
            switch (o3) {
              case `value`:
                break;
              case `multiple`:
                m3 = l2;
              default:
                if (!r5.hasOwnProperty(o3)) {
                  $2(e3, t6, o3, null, r5, l2);
                }
            }
          }
        }
        for (i4 in r5) {
          o3 = r5[i4];
          l2 = n7[i4];
          if (r5.hasOwnProperty(i4) && (o3 != null || l2 != null)) {
            switch (i4) {
              case `value`:
                if (o3 !== l2) {
                  D2 = true;
                }
                p2 = o3;
                break;
              case `defaultValue`:
                if (o3 !== l2) {
                  D2 = true;
                }
                c2 = o3;
                break;
              case `multiple`:
                if (o3 !== l2) {
                  D2 = true;
                }
                s3 = o3;
              default:
                if (o3 !== l2) {
                  $2(e3, t6, i4, o3, r5, l2);
                }
            }
          }
        }
        t6 = c2;
        n7 = s3;
        r5 = m3;
        if (p2 == null) {
          if (!!r5 != !!n7) {
            if (t6 == null) {
              yn2(e3, !!n7, n7 ? [] : ``, false);
            } else {
              yn2(e3, !!n7, t6, true);
            }
          }
        } else {
          yn2(e3, !!n7, p2, false);
        }
        return;
      case `textarea`:
        p2 = null;
        m3 = null;
        for (c2 in n7) {
          i4 = n7[c2];
          if (n7.hasOwnProperty(c2) && i4 != null && !r5.hasOwnProperty(c2)) {
            switch (c2) {
              case `value`:
                break;
              case `children`:
                break;
              default:
                $2(e3, t6, c2, null, r5, i4);
            }
          }
        }
        for (s3 in r5) {
          i4 = r5[s3];
          o3 = n7[s3];
          if (r5.hasOwnProperty(s3) && (i4 != null || o3 != null)) {
            switch (s3) {
              case `value`:
                if (i4 !== o3) {
                  D2 = true;
                }
                p2 = i4;
                break;
              case `defaultValue`:
                if (i4 !== o3) {
                  D2 = true;
                }
                m3 = i4;
                break;
              case `children`:
                break;
              case `dangerouslySetInnerHTML`:
                if (i4 != null) {
                  throw Error(a3(91));
                }
                break;
              default:
                if (i4 !== o3) {
                  $2(e3, t6, s3, i4, r5, o3);
                }
            }
          }
        }
        bn2(e3, p2, m3);
        return;
      case `option`:
        for (const h2 in n7) {
          p2 = n7[h2];
          if (n7.hasOwnProperty(h2) && p2 != null && !r5.hasOwnProperty(h2)) {
            switch (h2) {
              case `selected`:
                e3.selected = false;
                break;
              default:
                $2(e3, t6, h2, null, r5, p2);
            }
          }
        }
        for (l2 in r5) {
          p2 = r5[l2];
          m3 = n7[l2];
          if (r5.hasOwnProperty(l2) && p2 !== m3 && (p2 != null || m3 != null)) {
            switch (l2) {
              case `selected`:
                if (p2 !== m3) {
                  D2 = true;
                }
                e3.selected = p2 && typeof p2 != `function` && typeof p2 != `symbol`;
                break;
              default:
                $2(e3, t6, l2, p2, r5, m3);
            }
          }
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
        for (const g3 in n7) {
          p2 = n7[g3];
          if (n7.hasOwnProperty(g3) && p2 != null && !r5.hasOwnProperty(g3)) {
            $2(e3, t6, g3, null, r5, p2);
          }
        }
        for (u2 in r5) {
          p2 = r5[u2];
          m3 = n7[u2];
          if (r5.hasOwnProperty(u2) && p2 !== m3 && (p2 != null || m3 != null)) {
            switch (u2) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (p2 != null) {
                  throw Error(a3(137, t6));
                }
                break;
              default:
                $2(e3, t6, u2, p2, r5, m3);
            }
          }
        }
        return;
      default:
        if (En2(t6)) {
          for (const _2 in n7) {
            p2 = n7[_2];
            if (n7.hasOwnProperty(_2) && p2 !== void 0 && !r5.hasOwnProperty(_2)) {
              tp(e3, t6, _2, void 0, r5, p2);
            }
          }
          for (d2 in r5) {
            p2 = r5[d2];
            m3 = n7[d2];
            if (!(!r5.hasOwnProperty(d2) || p2 === m3 || p2 === void 0 && m3 === void 0)) {
              tp(e3, t6, d2, p2, r5, m3);
            }
          }
          return;
        }
    }
    for (const v3 in n7) {
      p2 = n7[v3];
      if (n7.hasOwnProperty(v3) && p2 != null && !r5.hasOwnProperty(v3)) {
        $2(e3, t6, v3, null, r5, p2);
      }
    }
    for (f2 in r5) {
      p2 = r5[f2];
      m3 = n7[f2];
      if (!(!r5.hasOwnProperty(f2) || p2 === m3 || p2 == null && m3 == null)) {
        $2(e3, t6, f2, p2, r5, m3);
      }
    }
  }
  function ap(e3) {
    switch (e3) {
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
      var e3 = 0;
      let t6 = 0;
      for (let n7 = performance.getEntriesByType(`resource`), r5 = 0; r5 < n7.length; r5++) {
        const i4 = n7[r5];
        const a4 = i4.transferSize;
        let o3 = i4.initiatorType;
        let s3 = i4.duration;
        if (a4 && s3 && ap(o3)) {
          o3 = 0;
          s3 = i4.responseEnd;
          for (r5 += 1; r5 < n7.length; r5++) {
            let c2 = n7[r5];
            const l2 = c2.startTime;
            if (l2 > s3) {
              break;
            }
            const {
              transferSize,
              initiatorType
            } = c2;
            if (transferSize && ap(initiatorType)) {
              c2 = c2.responseEnd;
              o3 += transferSize * (c2 < s3 ? 1 : (s3 - l2) / (c2 - l2));
            }
          }
          --r5;
          t6 += 8 * (a4 + o3) / (i4.duration / 1e3);
          e3++;
          if (e3 > 10) {
            break;
          }
        }
      }
      if (e3 > 0) {
        return t6 / e3 / 1e6;
      }
    }
    if (navigator.connection && (e3 = navigator.connection.downlink, typeof e3 == `number`)) {
      return e3;
    }
    return 5;
  }
  var sp = null;
  var cp = null;
  function lp(e3) {
    if (e3.nodeType === 9) {
      return e3;
    }
    return e3.ownerDocument;
  }
  function up(e3) {
    switch (e3) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e3, t6) {
    if (e3 === 0) {
      switch (t6) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
    }
    if (e3 === 1 && t6 === `foreignObject`) {
      return 0;
    }
    return e3;
  }
  function fp(type, t6, n7, r5) {
    n7 = lp(n7).createElement(type);
    n7[Pt2] = r5;
    n7[Ft2] = t6;
    np(n7, type, t6);
    Jt2(n7);
    return n7;
  }
  function pp(e3, t6) {
    return e3 === `textarea` || e3 === `noscript` || typeof t6.children == `string` || typeof t6.children == `number` || typeof t6.children == `bigint` || typeof t6.dangerouslySetInnerHTML == `object` && t6.dangerouslySetInnerHTML !== null && t6.dangerouslySetInnerHTML.__html != null;
  }
  var mp = null;
  function hp() {
    const window_event = window.event;
    if (window_event && window_event.type === `popstate`) {
      return window_event !== mp && (mp = window_event, true);
    }
    mp = null;
    return false;
  }
  var gp = typeof setTimeout == `function` ? setTimeout : void 0;
  var _p = typeof clearTimeout == `function` ? clearTimeout : void 0;
  var vp = typeof Promise == `function` ? Promise : void 0;
  var yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp;
  var bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : (e3) => vp.resolve(null).then(e3).catch(xp);
  function xp(e3) {
    setTimeout(() => {
      throw e3;
    });
  }
  function Sp(type) {
    return type === `head`;
  }
  function Cp(e3, stateNode) {
    let n7 = stateNode;
    let r5 = 0;
    do {
      const i4 = n7.nextSibling;
      e3.removeChild(n7);
      if (i4 && i4.nodeType === 8) {
        n7 = i4.data;
        if (n7 === `/$` || n7 === `/&`) {
          if (r5 === 0) {
            e3.removeChild(i4);
            Hh(stateNode);
            return;
          }
          r5--;
        } else if (n7 === `$` || n7 === `$?` || n7 === `$~` || n7 === `$!` || n7 === `&`) {
          r5++;
        } else if (n7 === `html`) {
          _m(e3.ownerDocument.documentElement);
        } else if (n7 === `head`) {
          n7 = e3.ownerDocument.head;
          _m(n7);
          for (let a4 = n7.firstChild; a4; ) {
            const {
              nextSibling,
              nodeName
            } = a4;
            if (!(a4[Vt2] || nodeName === `SCRIPT` || nodeName === `STYLE` || nodeName === `LINK` && a4.rel.toLowerCase() === `stylesheet`)) {
              n7.removeChild(a4);
            }
            a4 = nextSibling;
          }
        } else {
          if (n7 === `body`) {
            _m(e3.ownerDocument.body);
          }
        }
      }
      n7 = i4;
    } while (n7);
    Hh(stateNode);
  }
  function wp(e3, t6) {
    let n7 = e3;
    e3 = 0;
    do {
      const r5 = n7.nextSibling;
      if (n7.nodeType === 1) {
        if (t6) {
          n7._stashedDisplay = n7.style.display;
          n7.style.display = `none`;
        } else {
          n7.style.display = n7._stashedDisplay || ``;
          if (n7.getAttribute(`style`) === ``) {
            n7.removeAttribute(`style`);
          }
        }
      } else if (n7.nodeType === 3) {
        if (t6) {
          n7._stashedText = n7.nodeValue;
          n7.nodeValue = ``;
        } else {
          n7.nodeValue = n7._stashedText || ``;
        }
      }
      if (r5 && r5.nodeType === 8) {
        n7 = r5.data;
        if (n7 === `/$`) {
          if (e3 === 0) {
            break;
          }
          e3--;
        } else {
          if (!(n7 !== `$` && n7 !== `$?` && n7 !== `$~` && n7 !== `$!`)) {
            e3++;
          }
        }
      }
      n7 = r5;
    } while (n7);
  }
  function Tp(e3, t6, n7) {
    t6 = CSS.escape(t6) === t6 ? t6 : `r-` + btoa(t6).replace(/=/g, ``);
    e3.style.viewTransitionName = t6;
    if (n7 != null) {
      e3.style.viewTransitionClass = n7;
    }
    n7 = getComputedStyle(e3);
    if (n7.display === `inline`) {
      t6 = e3.getClientRects();
      if (t6.length === 1) var r5 = 1;
      else {
        for (let i4 = r5 = 0; i4 < t6.length; i4++) {
          const a4 = t6[i4];
          if (a4.width > 0 && a4.height > 0) {
            r5++;
          }
        }
      }
      if (r5 === 1) {
        e3 = e3.style;
        e3.display = t6.length === 1 ? `inline-block` : `block`;
        e3.marginTop = `-` + n7.paddingTop;
        e3.marginBottom = `-` + n7.paddingBottom;
      }
    }
  }
  function Ep(e3, t6) {
    e3 = e3.style;
    t6 = t6.style;
    let n7 = t6 == null ? null : t6.hasOwnProperty(`viewTransitionName`) ? t6.viewTransitionName : t6.hasOwnProperty(`view-transition-name`) ? t6[`view-transition-name`] : null;
    e3.viewTransitionName = n7 == null || typeof n7 == `boolean` ? `` : (`` + n7).trim();
    n7 = t6 == null ? null : t6.hasOwnProperty(`viewTransitionClass`) ? t6.viewTransitionClass : t6.hasOwnProperty(`view-transition-class`) ? t6[`view-transition-class`] : null;
    e3.viewTransitionClass = n7 == null || typeof n7 == `boolean` ? `` : (`` + n7).trim();
    if (e3.display === `inline-block`) {
      if (t6 == null) {
        e3.display = e3.margin = ``;
      } else {
        n7 = t6.display;
        e3.display = n7 == null || typeof n7 == `boolean` ? `` : n7;
        n7 = t6.margin;
        if (n7 == null) {
          n7 = t6.hasOwnProperty(`marginTop`) ? t6.marginTop : t6[`margin-top`];
          e3.marginTop = n7 == null || typeof n7 == `boolean` ? `` : n7;
          t6 = t6.hasOwnProperty(`marginBottom`) ? t6.marginBottom : t6[`margin-bottom`];
          e3.marginBottom = t6 == null || typeof t6 == `boolean` ? `` : t6;
        } else {
          e3.margin = n7;
        }
      }
    }
  }
  function Dp(rect, t6, n7) {
    n7 = n7.ownerDocument.defaultView;
    return {
      rect,
      abs: t6.position === `absolute` || t6.position === `fixed`,
      clip: t6.clipPath !== `none` || t6.overflow !== `visible` || t6.filter !== `none` || t6.mask !== `none` || t6.mask !== `none` || t6.borderRadius !== `0px`,
      view: rect.bottom >= 0 && rect.right >= 0 && rect.top <= n7.innerHeight && rect.left <= n7.innerWidth
    };
  }
  function Op(e3) {
    return Dp(e3.getBoundingClientRect(), getComputedStyle(e3), e3);
  }
  function kp(e3) {
    let t6 = e3.getBoundingClientRect();
    t6 = new DOMRect(t6.x + 2e4, t6.y + 2e4, t6.width, t6.height);
    const n7 = getComputedStyle(e3);
    return Dp(t6, n7, e3);
  }
  function Ap(e3) {
    return e3.documentElement.clientHeight;
  }
  function jp(e3) {
    this.addEventListener(`load`, e3);
    this.addEventListener(`error`, e3);
  }
  function Mp(e3, containerInfo, types, r5, i4, a4, o3, s3, c2) {
    const l2 = containerInfo.nodeType === 9 ? containerInfo : containerInfo.ownerDocument;
    try {
      const u2 = l2.startViewTransition({
        update: function() {
          let l_defaultView = l2.defaultView;
          const n7 = l_defaultView.navigation && l_defaultView.navigation.transition;
          let status = l2.fonts.status;
          r5();
          const s4 = [];
          if (status === `loaded`) {
            Ap(l2);
            if (l2.fonts.status === `loading`) {
              s4.push(l2.fonts.ready);
            }
          }
          status = s4.length;
          if (e3 !== null) {
            for (let c3 = e3.suspenseyImages, u3 = 0, d3 = 0; d3 < c3.length; d3++) {
              let f2 = c3[d3];
              if (!f2.complete) {
                const p2 = f2.getBoundingClientRect();
                if (p2.bottom > 0 && p2.right > 0 && p2.top < l_defaultView.innerHeight && p2.left < l_defaultView.innerWidth) {
                  u3 += Xm(f2);
                  if (u3 > $m) {
                    s4.length = status;
                    break;
                  }
                  f2 = new Promise(jp.bind(f2));
                  s4.push(f2);
                }
              }
            }
          }
          if (s4.length > 0) {
            l_defaultView = Promise.race([Promise.all(s4), new Promise((resolve) => setTimeout(resolve, 500))]).then(i4, i4);
            return (n7 ? Promise.allSettled([n7.finished, l_defaultView]) : l_defaultView).then(a4, a4);
          }
          i4();
          if (n7) {
            return n7.finished.then(a4, a4);
          }
          a4();
        },
        types
      });
      l2.__reactViewTransition = u2;
      const d2 = [];
      u2.ready.then(() => {
        for (let e4 = l2.documentElement.getAnimations({
          subtree: true
        }), t6 = 0; t6 < e4.length; t6++) {
          let n7 = e4[t6];
          const r6 = n7.effect;
          let i5 = r6.pseudoElement;
          if (i5 != null && i5.startsWith(`::view-transition`)) {
            d2.push(n7);
            n7 = r6.getKeyframes();
            let a5 = i5 = void 0;
            let s4 = true;
            for (const u3 of n7) {
              let f2 = u3.width;
              if (i5 === void 0) {
                i5 = f2;
              } else if (i5 !== f2) {
                s4 = false;
                break;
              }
              f2 = u3.height;
              if (a5 === void 0) {
                a5 = f2;
              } else if (a5 !== f2) {
                s4 = false;
                break;
              }
              delete u3.width;
              delete u3.height;
              if (u3.transform === `none`) {
                delete u3.transform;
              }
            }
            if (s4 && i5 !== void 0 && a5 !== void 0 && (r6.setKeyframes(n7), s4 = getComputedStyle(r6.target, r6.pseudoElement), s4.width !== i5 || s4.height !== a5)) {
              s4 = n7[0];
              s4.width = i5;
              s4.height = a5;
              s4 = n7[n7.length - 1];
              s4.width = i5;
              s4.height = a5;
              r6.setKeyframes(n7);
            }
          }
        }
        o3();
      }, (e4) => {
        if (l2.__reactViewTransition === u2) {
          l2.__reactViewTransition = null;
        }
        try {
          if (typeof e4 == `object` && e4) {
            switch (e4.name) {
              case `InvalidStateError`:
                if (e4.message === `View transition was skipped because document visibility state is hidden.` || e4.message === `Skipping view transition because document visibility state has become hidden.` || e4.message === `Skipping view transition because viewport size changed.` || e4.message === `Transition was aborted because of invalid state`) {
                  e4 = null;
                }
            }
          }
          if (e4 !== null) {
            c2(e4);
          }
        } finally {
          r5();
          i4();
          o3();
        }
      });
      u2.finished.finally(() => {
        for (let e4 = 0; e4 < d2.length; e4++) {
          d2[e4].cancel();
        }
        if (l2.__reactViewTransition === u2) {
          l2.__reactViewTransition = null;
        }
        s3();
      });
      return u2;
    } catch {
      r5();
      i4();
      o3();
      return null;
    }
  }
  class Np {
    constructor(e3, t6) {
      this._scope = document.documentElement;
      this._selector = `::view-transition-` + e3 + `(` + t6 + `)`;
    }
    animate(e3, duration) {
      duration = typeof duration == `number` ? {
        duration
      } : Object_assign({}, duration);
      duration.pseudoElement = this._selector;
      return this._scope.animate(e3, duration);
    }
    getAnimations() {
      const _scope = this._scope;
      const _selector = this._selector;
      for (var n7 = _scope.getAnimations({
        subtree: true
      }), r5 = [], i4 = 0; i4 < n7.length; i4++) {
        const a4 = n7[i4].effect;
        if (a4 !== null && a4.target === _scope && a4.pseudoElement === _selector) {
          r5.push(n7[i4]);
        }
      }
      return r5;
    }
    getComputedStyle() {
      return getComputedStyle(this._scope, this._selector);
    }
  }
  function Pp(e3) {
    return {
      name: e3,
      group: new Np(`group`, e3),
      imagePair: new Np(`image-pair`, e3),
      old: new Np(`old`, e3),
      new: new Np(`new`, e3)
    };
  }
  class Fp {
    constructor(e3) {
      this._fragmentFiber = e3;
      this._observers = this._eventListeners = null;
    }
    addEventListener(e3, listener, optionsOrUseCapture) {
      let r5 = null;
      let cleanup = null;
      if (!(optionsOrUseCapture != null && typeof optionsOrUseCapture != `boolean` && (r5 = optionsOrUseCapture.signal || null, r5 !== null && r5.aborted))) {
        if (this._eventListeners === null) {
          this._eventListeners = [];
        }
        const a4 = this._eventListeners;
        if (Bp(a4, e3, listener, optionsOrUseCapture) === -1) {
          const o3 = this;
          let attachedListener = listener;
          if (optionsOrUseCapture != null && typeof optionsOrUseCapture != `boolean` && optionsOrUseCapture.once === true) {
            attachedListener = function(r6) {
              o3.removeEventListener(e3, listener, optionsOrUseCapture);
              if (typeof listener == `function`) {
                listener.call(this, r6);
              } else {
                listener.handleEvent(r6);
              }
            };
          }
          if (r5 !== null) {
            cleanup = o3.removeEventListener.bind(o3, e3, listener, optionsOrUseCapture);
            r5.addEventListener(`abort`, cleanup, {
              once: true
            });
            cleanup = r5.removeEventListener.bind(r5, `abort`, cleanup);
          }
          r5 = Rp(optionsOrUseCapture);
          a4.push({
            type: e3,
            listener,
            optionsOrUseCapture,
            attachedListener,
            cleanup
          });
          p(this._fragmentFiber.child, false, Ip, e3, attachedListener, r5);
        }
        this._eventListeners = a4;
      }
    }
    removeEventListener(e3, t6, n7) {
      const _eventListeners = this._eventListeners;
      if (_eventListeners !== null && (t6 = Bp(_eventListeners, e3, t6, n7), t6 !== -1)) {
        let i4 = _eventListeners[t6];
        n7 = i4.attachedListener;
        const a4 = i4.cleanup;
        i4 = Rp(i4.optionsOrUseCapture);
        p(this._fragmentFiber.child, false, Lp, e3, n7, i4);
        _eventListeners.splice(t6, 1);
        if (a4 !== null) {
          a4();
        }
      }
    }
    dispatchEvent(e3) {
      let t6 = m2(this._fragmentFiber);
      if (t6 === null) {
        return true;
      }
      t6 = b2(t6);
      const _eventListeners = this._eventListeners;
      if (_eventListeners !== null && _eventListeners.length > 0 || !e3.bubbles) {
        const r5 = t6.nodeType === 9 ? t6.createComment(``) : document.createTextNode(``);
        if (_eventListeners) {
          for (var i4 = 0; i4 < _eventListeners.length; i4++) {
            var a4 = _eventListeners[i4];
            r5.addEventListener(a4.type, a4.attachedListener, Rp(a4.optionsOrUseCapture));
          }
        }
        t6.appendChild(r5);
        e3 = r5.dispatchEvent(e3);
        if (_eventListeners) {
          for (i4 = 0; i4 < _eventListeners.length; i4++) {
            a4 = _eventListeners[i4];
            r5.removeEventListener(a4.type, a4.attachedListener, Rp(a4.optionsOrUseCapture));
          }
        }
        t6.removeChild(r5);
        return e3;
      }
      return t6.dispatchEvent(e3);
    }
    focus(e3) {
      p(this._fragmentFiber.child, true, Vp, e3, void 0, void 0);
    }
    focusLast(e3) {
      const t6 = [];
      p(this._fragmentFiber.child, true, Hp, t6, void 0, void 0);
      for (let n7 = t6.length - 1; n7 >= 0 && !Vp(t6[n7], e3); n7--) ;
    }
    blur() {
      let e3 = m2(this._fragmentFiber);
      if (e3 !== null) {
        e3 = b2(e3);
        e3 = lp(e3).activeElement;
        if (e3 !== null) {
          p(this._fragmentFiber.child, false, Up, e3, void 0, void 0);
        }
      }
    }
    observeUsing(e3) {
      if (this._observers === null) {
        this._observers = /* @__PURE__ */ new Set();
      }
      this._observers.add(e3);
      p(this._fragmentFiber.child, false, Wp, e3, void 0, void 0);
    }
    unobserveUsing(e3) {
      let _observers = this._observers;
      if (_observers !== null && _observers.has(e3)) {
        _observers.delete(e3);
        p(this._fragmentFiber.child, false, Gp, e3, void 0, void 0);
        for (let n7 = _observers = 0; n7 < Kp.length; n7++) {
          const r5 = Kp[n7];
          if (r5.fragmentInstance === this && r5.observer === e3) {
            e3.unobserve(r5.instance);
          } else {
            Kp[_observers++] = r5;
          }
        }
        Kp.length = _observers;
      }
    }
    getClientRects() {
      const e3 = [];
      p(this._fragmentFiber.child, false, Yp, e3, void 0, void 0);
      return e3;
    }
    getRootNode(e3) {
      const t6 = m2(this._fragmentFiber);
      if (t6 === null) {
        return this;
      }
      return b2(t6).getRootNode(e3);
    }
    compareDocumentPosition(e3) {
      let t6 = m2(this._fragmentFiber);
      if (t6 === null) {
        return Node.DOCUMENT_POSITION_DISCONNECTED;
      }
      let n7 = [];
      p(this._fragmentFiber.child, false, Hp, n7, void 0, void 0);
      let r5 = b2(t6);
      if (n7.length === 0) {
        n7 = r5;
        if (g2(this._fragmentFiber)) {
          a: {
            for (t6 = this._fragmentFiber.return; t6 !== null; ) {
              if (t6.tag === 4) {
                t6 = t6.stateNode.containerInfo;
                break a;
              }
              if (t6.tag === 3 || t6.tag === 5 || t6.tag === 27) {
                break;
              }
              t6 = t6.return;
            }
            t6 = null;
          }
          if (t6 != null) {
            n7 = t6;
          }
        }
        t6 = this._fragmentFiber;
        var i4 = r5 = n7.compareDocumentPosition(e3);
        if (n7 === e3) {
          i4 = Node.DOCUMENT_POSITION_CONTAINS;
        } else if (r5 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          n7 = v2(t6)[1];
          if (n7 === null) {
            i4 = Node.DOCUMENT_POSITION_PRECEDING;
          } else {
            e3 = b2(n7).compareDocumentPosition(e3);
            i4 = e3 === 0 || e3 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING;
          }
        }
        return i4 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      }
      t6 = b2(n7[0]);
      i4 = b2(n7[n7.length - 1]);
      let a4 = g2(this._fragmentFiber) ? t6.parentElement : r5;
      if (a4 == null) {
        return Node.DOCUMENT_POSITION_DISCONNECTED;
      }
      r5 = a4.compareDocumentPosition(t6) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      a4 = a4.compareDocumentPosition(i4) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      const o3 = t6.compareDocumentPosition(e3);
      let s3 = i4.compareDocumentPosition(e3);
      const c2 = o3 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
      s3 = r5 && a4 && o3 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING;
      t6 = r5 && t6 === e3 || a4 && i4 === e3 || c2 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r5 && t6 === e3 || !a4 && i4 === e3 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o3;
      if (t6 & Node.DOCUMENT_POSITION_DISCONNECTED || t6 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t6, this._fragmentFiber, n7[0], n7[n7.length - 1], e3)) {
        return t6;
      }
      return Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    scrollIntoView(e3) {
      if (typeof e3 == `object`) {
        throw Error(a3(566));
      }
      const t6 = [];
      p(this._fragmentFiber.child, false, Hp, t6, void 0, void 0);
      let n7 = e3 !== false;
      if (t6.length === 0) {
        var r5 = v2(this._fragmentFiber);
        r5 = n7 ? r5[1] || r5[0] || m2(this._fragmentFiber) : r5[0] || r5[1];
        if (r5 === null) {
          return;
        }
        if (r5.tag === 6) {
          e3 = b2(r5);
          Zp(e3, n7);
          return;
        }
        r5 = b2(r5);
        if (r5.nodeType !== 9) {
          if (r5.nodeType === 11) {
            n7 = `host` in r5 ? r5.host : null;
            if (n7 !== null) {
              n7.scrollIntoView(e3);
            }
            return;
          }
          r5.scrollIntoView(e3);
        }
      }
      for (r5 = n7 ? t6.length - 1 : 0; r5 !== (n7 ? -1 : t6.length); ) {
        let i4 = t6[r5];
        if (i4.tag === 6) {
          i4 = b2(i4);
          Zp(i4, n7);
        } else {
          b2(i4).scrollIntoView(e3);
        }
        r5 += n7 ? -1 : 1;
      }
    }
  }
  function Ip(e3, t6, n7, r5) {
    b2(e3).addEventListener(t6, n7, r5);
    return false;
  }
  function Lp(e3, t6, n7, r5) {
    b2(e3).removeEventListener(t6, n7, r5);
    return false;
  }
  function Rp(optionsOrUseCapture) {
    if (optionsOrUseCapture != null && typeof optionsOrUseCapture != `boolean` && (optionsOrUseCapture.once === true || optionsOrUseCapture.signal instanceof AbortSignal)) {
      return {
        capture: optionsOrUseCapture.capture,
        passive: optionsOrUseCapture.passive
      };
    }
    return optionsOrUseCapture;
  }
  function zp(e3) {
    if (e3 == null) {
      return `c=0`;
    }
    if (typeof e3 == `boolean`) {
      return `c=` + (e3 ? `1` : `0`);
    }
    return `c=` + (e3.capture ? `1` : `0`);
  }
  function Bp(e3, t6, n7, r5) {
    if (e3.length === 0) {
      return -1;
    }
    r5 = zp(r5);
    for (let i4 = 0; i4 < e3.length; i4++) {
      const a4 = e3[i4];
      if (a4.type === t6 && a4.listener === n7 && zp(a4.optionsOrUseCapture) === r5) {
        return i4;
      }
    }
    return -1;
  }
  function Vp(e3, t6) {
    return e3.tag !== 6 && (e3 = b2(e3), pm(e3, t6));
  }
  function Hp(e3, t6) {
    t6.push(e3);
    return false;
  }
  function Up(e3, t6) {
    return e3.tag !== 6 && (e3 = b2(e3), e3 === t6 || e3.contains(t6) ? (t6.blur(), true) : false);
  }
  function Wp(e3, t6) {
    return e3.tag !== 6 && (e3 = b2(e3), t6.observe(e3), false);
  }
  function Gp(e3, t6) {
    return e3.tag !== 6 && (e3 = b2(e3), t6.unobserve(e3), false);
  }
  var Kp = [];
  var qp = false;
  function Jp(fragmentInstance, observer, stateNode) {
    Kp.push({
      fragmentInstance,
      observer,
      instance: stateNode
    });
    if (!qp) {
      qp = true;
      mm(() => {
        qp = false;
        const e3 = Kp;
        Kp = [];
        for (const n7 of e3) {
          n7.observer.unobserve(n7.instance);
        }
      });
    }
  }
  function Yp(e3, t6) {
    if (e3.tag === 6) {
      e3 = e3.stateNode;
      const n7 = e3.ownerDocument.createRange();
      n7.selectNodeContents(e3);
      t6.push(...n7.getClientRects());
    } else {
      e3 = b2(e3);
      t6.push(...e3.getClientRects());
    }
    return false;
  }
  function Xp(e3, t6, n7, r5, i4) {
    let a4 = Wt2(i4);
    if (e3 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n7 = !!a4) {
        a: {
          while (a4 !== null) {
            if (a4.tag === 7 && (a4 === t6 || a4.alternate === t6)) {
              n7 = true;
              break a;
            }
            a4 = a4.return;
          }
          n7 = false;
        }
      }
      return n7;
    }
    if (e3 & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a4 === null) {
        a4 = i4.ownerDocument;
        return i4 === a4 || i4 === a4.documentElement || i4 === a4.body;
      }
      a: {
        a4 = t6;
        for (t6 = m2(t6); a4 !== null; ) {
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
    if (e3 & Node.DOCUMENT_POSITION_PRECEDING) {
      if ((t6 = !!a4) && !(t6 = a4 === n7)) {
        t6 = ie(n7, a4, re);
        if (t6 === null) {
          t6 = false;
        } else {
          p(t6, true, te, a4, n7);
          a4 = ee;
          ee = null;
          t6 = a4 !== null;
        }
      }
      return t6;
    }
    if (e3 & Node.DOCUMENT_POSITION_FOLLOWING) {
      if ((t6 = !!a4) && !(t6 = a4 === r5)) {
        t6 = ie(r5, a4, re);
        if (t6 === null) {
          t6 = false;
        } else {
          p(t6, true, ne, a4, r5);
          a4 = ee;
          x = ee = null;
          t6 = a4 !== null;
        }
      }
      return t6;
    }
    return false;
  }
  function Zp(e3, t6) {
    const n7 = e3.ownerDocument.createRange();
    n7.selectNodeContents(e3);
    e3 = n7.getBoundingClientRect();
    window.scrollTo(window.scrollX + e3.left, t6 ? window.scrollY + e3.top : window.scrollY + e3.bottom - window.innerHeight);
  }
  function Qp(e3, t6) {
    e3 = b2(e3);
    $p(e3, t6);
    return false;
  }
  function $p(e3, t6) {
    e3.reactFragments ??= /* @__PURE__ */ new Set();
    e3.reactFragments.add(t6);
  }
  function em(stateNode, t6) {
    let t__eventListeners = t6._eventListeners;
    if (t__eventListeners !== null) {
      for (const i4 of t__eventListeners) {
        stateNode.addEventListener(i4.type, i4.attachedListener, Rp(i4.optionsOrUseCapture));
      }
    }
    if (stateNode.nodeType !== 3) {
      t__eventListeners = t6._observers;
      if (t__eventListeners !== null) {
        t__eventListeners.forEach((n7) => {
          let r5 = 0;
          for (const a4 of Kp) {
            if (a4.fragmentInstance !== t6 || a4.observer !== n7 || a4.instance !== stateNode) {
              Kp[r5++] = a4;
            }
          }
          Kp.length = r5;
          n7.observe(stateNode);
        });
      }
      $p(stateNode, t6);
    }
  }
  function tm(stateNode, t6) {
    let t__eventListeners = t6._eventListeners;
    if (t__eventListeners !== null) {
      for (const i4 of t__eventListeners) {
        stateNode.removeEventListener(i4.type, i4.attachedListener, Rp(i4.optionsOrUseCapture));
      }
    }
    if (stateNode.nodeType !== 3) {
      t__eventListeners = t6._observers;
      if (t__eventListeners !== null) {
        t__eventListeners.forEach((n7) => {
          if (typeof n7.rootMargin == `string`) {
            Jp(t6, n7, stateNode);
          } else {
            n7.unobserve(stateNode);
          }
        });
      }
      if (stateNode.reactFragments != null) {
        stateNode.reactFragments.delete(t6);
      }
    }
  }
  function nm(e3) {
    let e_firstChild = e3.firstChild;
    for (e_firstChild && e_firstChild.nodeType === 10 && (e_firstChild = e_firstChild.nextSibling); e_firstChild; ) {
      const n7 = e_firstChild;
      e_firstChild = e_firstChild.nextSibling;
      switch (n7.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n7);
          Ut2(n7);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n7.rel.toLowerCase() === `stylesheet`) {
            continue;
          }
      }
      e3.removeChild(n7);
    }
  }
  function rm(e3, type, pendingProps, r5) {
    while (e3.nodeType === 1) {
      const i4 = pendingProps;
      if (e3.nodeName.toLowerCase() !== type.toLowerCase()) {
        if (!r5 && (e3.nodeName !== `INPUT` || e3.type !== `hidden`)) {
          break;
        }
      } else if (!r5) {
        if (type === `input` && e3.type === `hidden`) {
          var a4 = i4.name == null ? null : `` + i4.name;
          if (i4.type === `hidden` && e3.getAttribute(`name`) === a4) {
            return e3;
          }
        } else {
          return e3;
        }
      } else if (!e3[Vt2]) {
        switch (type) {
          case `meta`:
            if (!e3.hasAttribute(`itemprop`)) {
              break;
            }
            return e3;
          case `link`:
            a4 = e3.getAttribute(`rel`);
            if (a4 === `stylesheet` && e3.hasAttribute(`data-precedence`) || a4 !== i4.rel || e3.getAttribute(`href`) !== (i4.href == null || i4.href === `` ? null : i4.href) || e3.getAttribute(`crossorigin`) !== (i4.crossOrigin ?? null) || e3.getAttribute(`title`) !== (i4.title ?? null)) {
              break;
            }
            return e3;
          case `style`:
            if (e3.hasAttribute(`data-precedence`)) {
              break;
            }
            return e3;
          case `script`:
            a4 = e3.getAttribute(`src`);
            if ((a4 !== (i4.src ?? null) || e3.getAttribute(`type`) !== (i4.type ?? null) || e3.getAttribute(`crossorigin`) !== (i4.crossOrigin ?? null)) && a4 && e3.hasAttribute(`async`) && !e3.hasAttribute(`itemprop`)) {
              break;
            }
            return e3;
          default:
            return e3;
        }
      }
      e3 = lm(e3.nextSibling);
      if (e3 === null) {
        break;
      }
    }
    return null;
  }
  function im(e3, pendingProps, n7) {
    if (pendingProps === ``) {
      return null;
    }
    while (e3.nodeType !== 3) {
      if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !n7 || (e3 = lm(e3.nextSibling), e3 === null)) {
        return null;
      }
    }
    return e3;
  }
  function am(e3, t6) {
    while (e3.nodeType !== 8) {
      if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !t6 || (e3 = lm(e3.nextSibling), e3 === null)) {
        return null;
      }
    }
    return e3;
  }
  function om(e3) {
    return e3.data === `$?` || e3.data === `$~`;
  }
  function sm(e3) {
    return e3.data === `$!` || e3.data === `$?` && e3.ownerDocument.readyState !== `loading`;
  }
  function cm(e3, t6) {
    const e_ownerDocument = e3.ownerDocument;
    if (e3.data === `$~`) {
      e3._reactRetry = t6;
    } else if (e3.data !== `$?` || e_ownerDocument.readyState !== `loading`) {
      t6();
    } else {
      const r5 = function() {
        t6();
        e_ownerDocument.removeEventListener(`DOMContentLoaded`, r5);
      };
      e_ownerDocument.addEventListener(`DOMContentLoaded`, r5);
      e3._reactRetry = r5;
    }
  }
  function lm(e3) {
    for (; e3 != null; e3 = e3.nextSibling) {
      let t6 = e3.nodeType;
      if (t6 === 1 || t6 === 3) {
        break;
      }
      if (t6 === 8) {
        t6 = e3.data;
        if (t6 === `$` || t6 === `$!` || t6 === `$?` || t6 === `$~` || t6 === `&` || t6 === `F!` || t6 === `F`) {
          break;
        }
        if (t6 === `/$` || t6 === `/&`) {
          return null;
        }
      }
    }
    return e3;
  }
  var um = null;
  function dm(e3) {
    e3 = e3.nextSibling;
    let t6 = 0;
    while (e3) {
      if (e3.nodeType === 8) {
        const n7 = e3.data;
        if (n7 === `/$` || n7 === `/&`) {
          if (t6 === 0) {
            return lm(e3.nextSibling);
          }
          t6--;
        } else {
          if (!(n7 !== `$` && n7 !== `$!` && n7 !== `$?` && n7 !== `$~` && n7 !== `&`)) {
            t6++;
          }
        }
      }
      e3 = e3.nextSibling;
    }
    return null;
  }
  function fm(e3) {
    e3 = e3.previousSibling;
    let t6 = 0;
    while (e3) {
      if (e3.nodeType === 8) {
        const n7 = e3.data;
        if (n7 === `$` || n7 === `$!` || n7 === `$?` || n7 === `$~` || n7 === `&`) {
          if (t6 === 0) {
            return e3;
          }
          t6--;
        } else {
          if (!(n7 !== `/$` && n7 !== `/&`)) {
            t6++;
          }
        }
      }
      e3 = e3.previousSibling;
    }
    return null;
  }
  function pm(e3, t6) {
    function n7() {
      r5 = true;
    }
    if (e3.ownerDocument.activeElement === e3) {
      return true;
    }
    var r5 = false;
    try {
      e3.ownerDocument.addEventListener(`focus`, n7, true);
      (e3.focus || HTMLElement.prototype.focus).call(e3, t6);
    } finally {
      e3.ownerDocument.removeEventListener(`focus`, n7, true);
    }
    return r5;
  }
  function mm(e3) {
    yp(function() {
      yp(function(t6) {
        return e3(t6);
      });
    });
  }
  function hm(e3, t6, n7) {
    t6 = lp(n7);
    switch (e3) {
      case `html`:
        e3 = t6.documentElement;
        if (!e3) {
          throw Error(a3(452));
        }
        return e3;
      case `head`:
        e3 = t6.head;
        if (!e3) {
          throw Error(a3(453));
        }
        return e3;
      case `body`:
        e3 = t6.body;
        if (!e3) {
          throw Error(a3(454));
        }
        return e3;
      default:
        throw Error(a3(451));
    }
  }
  function gm(stateNode, type, memoizedProps) {
    for (const r5 in memoizedProps) {
      const i4 = memoizedProps[r5];
      if (memoizedProps.hasOwnProperty(r5) && i4 != null) {
        $2(stateNode, type, r5, null, rp, i4);
      }
    }
    if (memoizedProps.dangerouslySetInnerHTML != null) {
      stateNode.textContent = ``;
    }
    if (stateNode.onclick === unsuspend) {
      stateNode.onclick = null;
    }
    Ut2(stateNode);
  }
  function _m(e3) {
    for (const t6 = e3.attributes; t6.length; ) {
      e3.removeAttributeNode(t6[0]);
    }
    Ut2(e3);
  }
  var vm = /* @__PURE__ */ new Map();
  var ym = /* @__PURE__ */ new Set();
  function bm(e3) {
    if (typeof e3.getRootNode == `function`) {
      const t6 = e3.getRootNode();
      if (t6.nodeType === 9 || t6.nodeType === 11) {
        return t6;
      }
    }
    if (e3.nodeType === 9) {
      return e3;
    }
    return e3.ownerDocument;
  }
  var i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.d;
  i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.d = {
    f: f_1,
    r: r_3,
    D: D_1,
    C: C_1,
    L: L_1,
    m: m_1,
    X: X_1,
    S: S_1,
    M: M_1
  };
  function f_1() {
    const e3 = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.f();
    const t6 = zd();
    return e3 || t6;
  }
  function r_3(e3) {
    const t6 = Gt2(e3);
    if (t6 !== null && t6.tag === 5 && t6.type === `form`) {
      ic2(t6);
    } else {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.r(e3);
    }
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(rel, t6, n7) {
    const r5 = wm;
    if (r5 && typeof t6 == `string` && t6) {
      let i4 = hn2(t6);
      i4 = `link[rel="` + rel + `"][href="` + i4 + `"]`;
      if (typeof n7 == `string`) {
        i4 += `[crossorigin="` + n7 + `"]`;
      }
      if (!ym.has(i4)) {
        ym.add(i4);
        rel = {
          rel,
          crossOrigin: n7,
          href: t6
        };
        if (r5.querySelector(i4) === null) {
          t6 = r5.createElement(`link`);
          np(t6, `link`, rel);
          Jt2(t6);
          r5.head.appendChild(t6);
        }
      }
    }
  }
  function D_1(e3) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.D(e3);
    Tm(`dns-prefetch`, e3, null);
  }
  function C_1(e3, t6) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.C(e3, t6);
    Tm(`preconnect`, e3, t6);
  }
  function L_1(e3, as_1, n7) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.L(e3, as_1, n7);
    const r5 = wm;
    if (r5 && e3 && as_1) {
      let i4 = `link[rel="preload"][as="` + hn2(as_1) + `"]`;
      if (as_1 === `image` && n7 && n7.imageSrcSet) {
        i4 += `[imagesrcset="` + hn2(n7.imageSrcSet) + `"]`;
        if (typeof n7.imageSizes == `string`) {
          i4 += `[imagesizes="` + hn2(n7.imageSizes) + `"]`;
        }
      } else {
        i4 += `[href="` + hn2(e3) + `"]`;
      }
      let a4 = i4;
      switch (as_1) {
        case `style`:
          a4 = Pm(e3);
          break;
        case `script`:
          a4 = Rm(e3);
      }
      if (!(vm.has(a4) || (e3 = Object_assign({
        rel: `preload`,
        href: as_1 === `image` && n7 && n7.imageSrcSet ? void 0 : e3,
        as: as_1
      }, n7), vm.set(a4, e3), r5.querySelector(i4) !== null || as_1 === `style` && r5.querySelector(Fm(a4)) || as_1 === `script` && r5.querySelector(zm(a4))))) {
        const o3 = r5.createElement(`link`);
        np(o3, `link`, e3);
        if (as_1 === `style`) {
          o3[Ht2] = true;
          o3.onload = o3.onerror = function() {
            Yt2(o3);
          };
        }
        Jt2(o3);
        r5.head.appendChild(o3);
      }
    }
  }
  function m_1(e3, t6) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.m(e3, t6);
    const n7 = wm;
    if (n7 && e3) {
      let r5 = t6 && typeof t6.as == `string` ? t6.as : `script`;
      const i4 = `link[rel="modulepreload"][as="` + hn2(r5) + `"][href="` + hn2(e3) + `"]`;
      let a4 = i4;
      switch (r5) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a4 = Rm(e3);
      }
      if (!vm.has(a4) && (e3 = Object_assign({
        rel: `modulepreload`,
        href: e3
      }, t6), vm.set(a4, e3), n7.querySelector(i4) === null)) {
        switch (r5) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n7.querySelector(zm(a4))) {
              return;
            }
        }
        r5 = n7.createElement(`link`);
        np(r5, `link`, e3);
        Jt2(r5);
        n7.head.appendChild(r5);
      }
    }
  }
  function S_1(e3, t6, n7) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.S(e3, t6, n7);
    const r5 = wm;
    if (r5 && e3) {
      const i4 = qt2(r5).hoistableStyles;
      const a4 = Pm(e3);
      t6 ||= `default`;
      let o3 = i4.get(a4);
      if (!o3) {
        const state = {
          loading: 0,
          preload: null
        };
        if (o3 = r5.querySelector(Fm(a4))) {
          state.loading = 5;
        } else {
          e3 = Object_assign({
            rel: `stylesheet`,
            href: e3,
            "data-precedence": t6
          }, n7);
          if (n7 = vm.get(a4)) {
            Hm(e3, n7);
          }
          const c2 = o3 = r5.createElement(`link`);
          Jt2(c2);
          np(c2, `link`, e3);
          c2._p = new Promise((resolve, reject) => {
            c2.onload = resolve;
            c2.onerror = reject;
          });
          c2.addEventListener(`load`, function() {
            state.loading |= 1;
          });
          c2.addEventListener(`error`, function() {
            state.loading |= 2;
          });
          state.loading |= 4;
          Vm(o3, t6, r5);
        }
        o3 = {
          type: `stylesheet`,
          instance: o3,
          count: 1,
          state
        };
        i4.set(a4, o3);
      }
    }
  }
  function X_1(e3, t6) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.X(e3, t6);
    const n7 = wm;
    if (n7 && e3) {
      const r5 = qt2(n7).hoistableScripts;
      const i4 = Rm(e3);
      let a4 = r5.get(i4);
      if (!a4) {
        a4 = n7.querySelector(zm(i4));
        if (!a4) {
          e3 = Object_assign({
            src: e3,
            async: true
          }, t6);
          if (t6 = vm.get(i4)) {
            Um(e3, t6);
          }
          a4 = n7.createElement(`script`);
          Jt2(a4);
          np(a4, `link`, e3);
          n7.head.appendChild(a4);
        }
        a4 = {
          type: `script`,
          instance: a4,
          count: 1,
          state: null
        };
        r5.set(i4, a4);
      }
    }
  }
  function M_1(e3, t6) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.M(e3, t6);
    const n7 = wm;
    if (n7 && e3) {
      const r5 = qt2(n7).hoistableScripts;
      const i4 = Rm(e3);
      let a4 = r5.get(i4);
      if (!a4) {
        a4 = n7.querySelector(zm(i4));
        if (!a4) {
          e3 = Object_assign({
            src: e3,
            async: true,
            type: `module`
          }, t6);
          if (t6 = vm.get(i4)) {
            Um(e3, t6);
          }
          a4 = n7.createElement(`script`);
          Jt2(a4);
          np(a4, `link`, e3);
          n7.head.appendChild(a4);
        }
        a4 = {
          type: `script`,
          instance: a4,
          count: 1,
          state: null
        };
        r5.set(i4, a4);
      }
    }
  }
  function Nm(e3, t6, n7, r5) {
    var i4 = (i4 = Pe2.current) ? bm(i4) : null;
    if (!i4) {
      throw Error(a3(446));
    }
    switch (e3) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        if (typeof n7.precedence == `string` && typeof n7.href == `string`) {
          n7 = Pm(n7.href);
          t6 = qt2(i4).hoistableStyles;
          r5 = t6.get(n7);
          if (!r5) {
            r5 = {
              type: `style`,
              instance: null,
              count: 0,
              state: null
            };
            t6.set(n7, r5);
          }
          return r5;
        }
        return {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      case `link`:
        if (n7.rel === `stylesheet` && typeof n7.href == `string` && typeof n7.precedence == `string`) {
          e3 = Pm(n7.href);
          let o3 = qt2(i4).hoistableStyles;
          let s3 = o3.get(e3);
          if (!s3) {
            i4 = i4.ownerDocument || i4;
            s3 = {
              type: `stylesheet`,
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            };
            o3.set(e3, s3);
            if (o3 = i4.querySelector(Fm(e3))) {
              if (!o3._p) {
                s3.instance = o3;
                s3.state.loading = 5;
              }
            } else {
              o3 = vm.get(e3);
              if (!o3) {
                o3 = {
                  rel: `preload`,
                  as: `style`,
                  href: n7.href,
                  crossOrigin: n7.crossOrigin,
                  integrity: n7.integrity,
                  media: n7.media,
                  hrefLang: n7.hrefLang,
                  referrerPolicy: n7.referrerPolicy
                };
                vm.set(e3, o3);
              }
              Lm(i4, e3, o3, s3.state);
            }
          }
          if (t6 && r5 === null) {
            throw Error(a3(528, ``));
          }
          return s3;
        }
        if (t6 && r5 !== null) {
          throw Error(a3(529, ``));
        }
        return null;
      case `script`:
        t6 = n7.async;
        n7 = n7.src;
        if (typeof n7 == `string` && t6 && typeof t6 != `function` && typeof t6 != `symbol`) {
          n7 = Rm(n7);
          t6 = qt2(i4).hoistableScripts;
          r5 = t6.get(n7);
          if (!r5) {
            r5 = {
              type: `script`,
              instance: null,
              count: 0,
              state: null
            };
            t6.set(n7, r5);
          }
          return r5;
        }
        return {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(a3(444, e3));
    }
  }
  function Pm(e3) {
    return `href="` + hn2(e3) + `"`;
  }
  function Fm(e3) {
    return `link[rel="stylesheet"][` + e3 + `]`;
  }
  function Im(e3) {
    return Object_assign({}, e3, {
      "data-precedence": e3.precedence,
      precedence: null
    });
  }
  function Lm(e3, t6, n7, state) {
    if (t6 = e3.querySelector(`link[rel="preload"][as="style"][` + t6 + `]`)) {
      if (t6[Ht2] !== true) {
        state.loading = 1;
        return;
      }
    } else {
      t6 = e3.createElement(`link`);
      t6[Ht2] = true;
      t6.onload = t6.onerror = Yt2.bind(null, t6);
      np(t6, `link`, n7);
      Jt2(t6);
      e3.head.appendChild(t6);
    }
    state.preload = t6;
    t6.addEventListener(`load`, function() {
      return state.loading |= 1;
    });
    t6.addEventListener(`error`, function() {
      return state.loading |= 2;
    });
  }
  function Rm(e3) {
    return `[src="` + hn2(e3) + `"]`;
  }
  function zm(e3) {
    return `script[async]` + e3;
  }
  function Bm(e3, t6, memoizedProps) {
    t6.count++;
    if (t6.instance === null) {
      switch (t6.type) {
        case `style`:
          var r5 = e3.querySelector(`style[data-href~="` + hn2(memoizedProps.href) + `"]`);
          if (r5) {
            t6.instance = r5;
            Jt2(r5);
            return r5;
          }
          var i4 = Object_assign({}, memoizedProps, {
            "data-href": memoizedProps.href,
            "data-precedence": memoizedProps.precedence,
            href: null,
            precedence: null
          });
          r5 = (e3.ownerDocument || e3).createElement(`style`);
          Jt2(r5);
          np(r5, `style`, i4);
          Vm(r5, memoizedProps.precedence, e3);
          return t6.instance = r5;
        case `stylesheet`:
          i4 = Pm(memoizedProps.href);
          var o3 = e3.querySelector(Fm(i4));
          if (o3) {
            t6.state.loading |= 4;
            t6.instance = o3;
            Jt2(o3);
            return o3;
          }
          r5 = Im(memoizedProps);
          if (i4 = vm.get(i4)) {
            Hm(r5, i4);
          }
          o3 = (e3.ownerDocument || e3).createElement(`link`);
          Jt2(o3);
          var s3 = o3;
          s3._p = new Promise((resolve, reject) => {
            s3.onload = resolve;
            s3.onerror = reject;
          });
          np(o3, `link`, r5);
          t6.state.loading |= 4;
          Vm(o3, memoizedProps.precedence, e3);
          return t6.instance = o3;
        case `script`:
          o3 = Rm(memoizedProps.src);
          if (i4 = e3.querySelector(zm(o3))) {
            t6.instance = i4;
            Jt2(i4);
            return i4;
          }
          r5 = memoizedProps;
          if (i4 = vm.get(o3)) {
            r5 = Object_assign({}, memoizedProps);
            Um(r5, i4);
          }
          e3 = e3.ownerDocument || e3;
          i4 = e3.createElement(`script`);
          Jt2(i4);
          np(i4, `link`, r5);
          e3.head.appendChild(i4);
          return t6.instance = i4;
        case `void`:
          return null;
        default:
          throw Error(a3(443, t6.type));
      }
    } else {
      if (t6.type === `stylesheet` && !(t6.state.loading & 4)) {
        r5 = t6.instance;
        t6.state.loading |= 4;
        Vm(r5, memoizedProps.precedence, e3);
      }
    }
    return t6.instance;
  }
  function Vm(e3, t6, n7) {
    for (var r5 = n7.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i4 = r5.length ? r5[r5.length - 1] : null, a4 = i4, o3 = 0; o3 < r5.length; o3++) {
      const s3 = r5[o3];
      if (s3.dataset.precedence === t6) {
        a4 = s3;
      } else if (a4 !== i4) {
        break;
      }
    }
    if (a4) {
      a4.parentNode.insertBefore(e3, a4.nextSibling);
    } else {
      t6 = n7.nodeType === 9 ? n7.head : n7;
      t6.insertBefore(e3, t6.firstChild);
    }
  }
  function Hm(e3, t6) {
    e3.crossOrigin ??= t6.crossOrigin;
    e3.referrerPolicy ??= t6.referrerPolicy;
    e3.title ??= t6.title;
  }
  function Um(e3, t6) {
    e3.crossOrigin ??= t6.crossOrigin;
    e3.referrerPolicy ??= t6.referrerPolicy;
    e3.integrity ??= t6.integrity;
  }
  var Wm = null;
  function Gm(e3, t6, n7) {
    if (Wm === null) {
      var r5 = /* @__PURE__ */ new Map();
      var i4 = Wm = /* @__PURE__ */ new Map();
      i4.set(n7, r5);
    } else {
      i4 = Wm;
      r5 = i4.get(n7);
      if (!r5) {
        r5 = /* @__PURE__ */ new Map();
        i4.set(n7, r5);
      }
    }
    if (r5.has(e3)) {
      return r5;
    }
    r5.set(e3, null);
    n7 = n7.getElementsByTagName(e3);
    for (i4 = 0; i4 < n7.length; i4++) {
      const a4 = n7[i4];
      if (!(a4[Vt2] || a4[Pt2] || e3 === `link` && a4.getAttribute(`rel`) === `stylesheet`) && a4.namespaceURI !== `http://www.w3.org/2000/svg`) {
        let o3 = a4.getAttribute(t6) || ``;
        o3 = e3 + o3;
        const s3 = r5.get(o3);
        if (s3) {
          s3.push(a4);
        } else {
          r5.set(o3, [a4]);
        }
      }
    }
    return r5;
  }
  function Km(e3, type, n7) {
    e3 = e3.ownerDocument || e3;
    e3.head.insertBefore(n7, type === `title` ? e3.querySelector(`head > title`) : null);
  }
  function qm(e3, t6, n7) {
    if (n7 === 1 || t6.itemProp != null) {
      return false;
    }
    switch (e3) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t6.precedence != `string` || typeof t6.href != `string` || t6.href === ``) {
          break;
        }
        return true;
      case `link`:
        if (typeof t6.rel != `string` || typeof t6.href != `string` || t6.href === `` || t6.onLoad || t6.onError) {
          break;
        }
        switch (t6.rel) {
          case `stylesheet`:
            e3 = t6.disabled;
            return typeof t6.precedence == `string` && e3 == null;
          default:
            return true;
        }
      case `script`:
        if (t6.async && typeof t6.async != `function` && typeof t6.async != `symbol` && !t6.onLoad && !t6.onError && t6.src && typeof t6.src == `string`) {
          return true;
        }
    }
    return false;
  }
  function Jm(e3, t6) {
    return e3 === `img` && t6.src != null && t6.src !== `` && t6.onLoad == null && t6.loading !== `lazy`;
  }
  function Ym(e3) {
    return !(e3.type === `stylesheet` && !(e3.state.loading & 3));
  }
  function Xm(e3) {
    return (e3.width || 100) * (e3.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e3, t6) {
    if (typeof t6.decode == `function`) {
      e3.imgCount++;
      if (!t6.complete) {
        e3.imgBytes += Xm(t6);
        e3.suspenseyImages.push(t6);
      }
      e3 = rh.bind(e3);
      t6.decode().then(e3, e3);
    }
  }
  function Qm(e3, t6, n7, r5) {
    if (n7.type === `stylesheet` && (typeof r5.media != `string` || matchMedia(r5.media).matches !== false) && !(n7.state.loading & 4)) {
      if (n7.instance === null) {
        let i4 = Pm(r5.href);
        let a4 = t6.querySelector(Fm(i4));
        if (a4) {
          t6 = a4._p;
          if (typeof t6 == `object` && t6 && typeof t6.then == `function`) {
            e3.count++;
            e3 = nh.bind(e3);
            t6.then(e3, e3);
          }
          n7.state.loading |= 4;
          n7.instance = a4;
          Jt2(a4);
          return;
        }
        a4 = t6.ownerDocument || t6;
        r5 = Im(r5);
        if (i4 = vm.get(i4)) {
          Hm(r5, i4);
        }
        a4 = a4.createElement(`link`);
        Jt2(a4);
        const o3 = a4;
        o3._p = new Promise((resolve, reject) => {
          o3.onload = resolve;
          o3.onerror = reject;
        });
        np(a4, `link`, r5);
        n7.instance = a4;
      }
      if (e3.stylesheets === null) {
        e3.stylesheets = /* @__PURE__ */ new Map();
      }
      e3.stylesheets.set(n7, t6);
      if ((t6 = n7.state.preload) && !(n7.state.loading & 3)) {
        e3.count++;
        n7 = nh.bind(e3);
        t6.addEventListener(`load`, n7);
        t6.addEventListener(`error`, n7);
      }
    }
  }
  var $m = 0;
  function eh(e3, t6) {
    if (e3.stylesheets && e3.count === 0) {
      ah(e3, e3.stylesheets);
    }
    if (e3.count > 0 || e3.imgCount > 0) {
      return function(n7) {
        const r5 = setTimeout(() => {
          if (e3.stylesheets) {
            ah(e3, e3.stylesheets);
          }
          if (e3.unsuspend) {
            const t7 = e3.unsuspend;
            e3.unsuspend = null;
            t7();
          }
        }, 6e4 + t6);
        if (e3.imgBytes > 0 && $m === 0) {
          $m = 62500 * op();
        }
        const i4 = setTimeout(() => {
          e3.waitingForImages = false;
          if (e3.count === 0 && (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend)) {
            const t7 = e3.unsuspend;
            e3.unsuspend = null;
            t7();
          }
        }, (e3.imgBytes > $m ? 50 : 800) + t6);
        e3.unsuspend = n7;
        return function() {
          e3.unsuspend = null;
          clearTimeout(r5);
          clearTimeout(i4);
        };
      };
    }
    return null;
  }
  function th(e3) {
    if (e3.count === 0 && (e3.imgCount === 0 || !e3.waitingForImages)) {
      if (e3.stylesheets) {
        ah(e3, e3.stylesheets);
      } else if (e3.unsuspend) {
        const t6 = e3.unsuspend;
        e3.unsuspend = null;
        t6();
      }
    }
  }
  function nh() {
    this.count--;
    th(this);
  }
  function rh() {
    this.imgCount--;
    th(this);
  }
  var ih = null;
  function ah(e3, stylesheets) {
    e3.stylesheets = null;
    if (e3.unsuspend !== null) {
      e3.count++;
      ih = /* @__PURE__ */ new Map();
      stylesheets.forEach(oh, e3);
      ih = null;
      nh.call(e3);
    }
  }
  function oh(e3, t6) {
    if (!(t6.state.loading & 4)) {
      let n7 = ih.get(e3);
      if (n7) var r5 = n7.get(null);
      else {
        n7 = /* @__PURE__ */ new Map();
        ih.set(e3, n7);
        for (var i4 = e3.querySelectorAll(`link[data-precedence],style[data-precedence]`), a4 = 0; a4 < i4.length; a4++) {
          var o3 = i4[a4];
          if (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) {
            n7.set(o3.dataset.precedence, o3);
            r5 = o3;
          }
        }
        if (r5) {
          n7.set(null, r5);
        }
      }
      i4 = t6.instance;
      o3 = i4.getAttribute(`data-precedence`);
      a4 = n7.get(o3) || r5;
      if (a4 === r5) {
        n7.set(null, i4);
      }
      n7.set(o3, i4);
      this.count++;
      r5 = nh.bind(this);
      i4.addEventListener(`load`, r5);
      i4.addEventListener(`error`, r5);
      if (a4) {
        a4.parentNode.insertBefore(i4, a4.nextSibling);
      } else {
        e3 = e3.nodeType === 9 ? e3.head : e3;
        e3.insertBefore(i4, e3.firstChild);
      }
      t6.state.loading |= 4;
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
  function ch(e3, t6, n7, r5, i4, a4, o3, s3, c2) {
    this.tag = 1;
    this.containerInfo = e3;
    this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
    this.callbackPriority = 0;
    this.expirationTimes = Ct2(-1);
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ct2(0);
    this.hiddenUpdates = Ct2(null);
    this.identifierPrefix = r5;
    this.onUncaughtError = i4;
    this.onCaughtError = a4;
    this.onRecoverableError = o3;
    this.pooledCache = null;
    this.pooledCacheLanes = 0;
    this.formState = c2;
    this.transitionTypes = null;
    this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lh(e3, t6, isDehydrated, element, i4, a4, o3, s3, c2, l2, u2, d2) {
    e3 = new ch(e3, t6, isDehydrated, o3, c2, l2, u2, d2, s3);
    t6 = 1;
    if (a4 === true) {
      t6 |= 24;
    }
    a4 = Hi(3, null, null, t6);
    e3.current = a4;
    a4.stateNode = e3;
    t6 = Fa();
    t6.refCount++;
    e3.pooledCache = t6;
    t6.refCount++;
    a4.memoizedState = {
      element,
      isDehydrated,
      cache: t6
    };
    vo2(a4);
    return e3;
  }
  function uh(e3) {
    if (e3) {
      e3 = Bi2;
      return e3;
    }
    return Bi2;
  }
  function dh(e3, t6, n7, r5, i4, a4) {
    i4 = uh(i4);
    if (r5.context === null) {
      r5.context = i4;
    } else {
      r5.pendingContext = i4;
    }
    r5 = bo2(t6);
    r5.payload = {
      element: n7
    };
    a4 = a4 === void 0 ? null : a4;
    if (a4 !== null) {
      r5.callback = a4;
    }
    n7 = xo2(e3, r5, t6);
    if (n7 !== null) {
      Pd(n7, e3, t6);
      So2(n7, e3, t6);
    }
  }
  function fh(e3, t6) {
    e3 = e3.memoizedState;
    if (e3 !== null && e3.dehydrated !== null) {
      const n7 = e3.retryLane;
      e3.retryLane = n7 !== 0 && n7 < t6 ? n7 : t6;
    }
  }
  function ph(e3, t6) {
    fh(e3, t6);
    if (e3 = e3.alternate) {
      fh(e3, t6);
    }
  }
  function mh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      const t6 = Li2(e3, 67108864);
      if (t6 !== null) {
        Pd(t6, e3, 67108864);
      }
      ph(e3, 67108864);
    }
  }
  function hh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      let t6 = jd();
      t6 = kt2(t6);
      const n7 = Li2(e3, t6);
      if (n7 !== null) {
        Pd(n7, e3, t6);
      }
      ph(e3, t6);
    }
  }
  var gh = true;
  function _h(e3, t6, n7, r5) {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
      yh(e3, t6, n7, r5);
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function vh(e3, t6, n7, r5) {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 8;
      yh(e3, t6, n7, r5);
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function yh(e3, t6, n7, r5) {
    if (gh) {
      let i4 = bh(r5);
      if (i4 === null) {
        Kf(e3, t6, r5, xh, n7);
        Mh(e3, r5);
      } else if (Ph(i4, e3, t6, n7, r5)) {
        r5.stopPropagation();
      } else {
        Mh(e3, r5);
        if (t6 & 4 && jh.indexOf(e3) > -1) {
          while (i4 !== null) {
            let a4 = Gt2(i4);
            if (a4 !== null) {
              switch (a4.tag) {
                case 3:
                  a4 = a4.stateNode;
                  if (a4.current.memoizedState.isDehydrated) {
                    let o3 = _t2(a4.pendingLanes);
                    if (o3 !== 0) {
                      var s3 = a4;
                      s3.pendingLanes |= 2;
                      for (s3.entangledLanes |= 2; o3; ) {
                        const c2 = 1 << 31 - ut2(o3);
                        s3.entanglements[1] |= c2;
                        o3 &= ~c2;
                      }
                      Ef(a4);
                      if (!(G & 6)) {
                        _d = t_unstable_now() + 500;
                        Df(0, false);
                      }
                    }
                  }
                  break;
                case 31:
                case 13:
                  s3 = Li2(a4, 2);
                  if (s3 !== null) {
                    Pd(s3, a4, 2);
                  }
                  zd();
                  ph(a4, 2);
              }
            }
            a4 = bh(r5);
            if (a4 === null) {
              Kf(e3, t6, r5, xh, n7);
            }
            if (a4 === i4) {
              break;
            }
            i4 = a4;
          }
          if (i4 !== null) {
            r5.stopPropagation();
          }
        } else {
          Kf(e3, t6, r5, null, n7);
        }
      }
    }
  }
  function bh(e3) {
    e3 = Mn2(e3);
    return Sh(e3);
  }
  var xh = null;
  function Sh(e3) {
    xh = null;
    e3 = Wt2(e3);
    if (e3 !== null) {
      const t6 = s2(e3);
      if (t6 === null) {
        e3 = null;
      } else {
        const n7 = t6.tag;
        if (n7 === 13) {
          e3 = c(t6);
          if (e3 !== null) {
            return e3;
          }
          e3 = null;
        } else if (n7 === 31) {
          e3 = l(t6);
          if (e3 !== null) {
            return e3;
          }
          e3 = null;
        } else if (n7 === 3) {
          if (t6.stateNode.current.memoizedState.isDehydrated) {
            if (t6.tag === 3) {
              return t6.stateNode.containerInfo;
            }
            return null;
          }
          e3 = null;
        } else {
          if (t6 !== e3) {
            e3 = null;
          }
        }
      }
    }
    xh = e3;
    return null;
  }
  function Ch(e3) {
    switch (e3) {
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
        switch (t_unstable_getCurrentPriorityLevel()) {
          case t_unstable_ImmediatePriority:
            return 2;
          case t_unstable_UserBlockingPriority:
            return 8;
          case t_unstable_NormalPriority:
          case t_unstable_LowPriority:
            return 32;
          case t_unstable_IdlePriority:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false;
  var Th = null;
  var Eh = null;
  var Dh = null;
  var Oh = /* @__PURE__ */ new Map();
  var kh = /* @__PURE__ */ new Map();
  var Ah = [];
  var jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e3, t6) {
    switch (e3) {
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
  function Nh(e3, blockedOn, domEventName, eventSystemFlags, i4, nativeEvent) {
    if (e3 === null || e3.nativeEvent !== nativeEvent) {
      e3 = {
        blockedOn,
        domEventName,
        eventSystemFlags,
        nativeEvent,
        targetContainers: [i4]
      };
      if (blockedOn !== null) {
        blockedOn = Gt2(blockedOn);
        if (blockedOn !== null) {
          mh(blockedOn);
        }
      }
      return e3;
    }
    e3.eventSystemFlags |= eventSystemFlags;
    blockedOn = e3.targetContainers;
    if (i4 !== null && blockedOn.indexOf(i4) === -1) {
      blockedOn.push(i4);
    }
    return e3;
  }
  function Ph(e3, t6, n7, r5, i4) {
    switch (t6) {
      case `focusin`:
        Th = Nh(Th, e3, t6, n7, r5, i4);
        return true;
      case `dragenter`:
        Eh = Nh(Eh, e3, t6, n7, r5, i4);
        return true;
      case `mouseover`:
        Dh = Nh(Dh, e3, t6, n7, r5, i4);
        return true;
      case `pointerover`:
        var a4 = i4.pointerId;
        Oh.set(a4, Nh(Oh.get(a4) || null, e3, t6, n7, r5, i4));
        return true;
      case `gotpointercapture`:
        a4 = i4.pointerId;
        kh.set(a4, Nh(kh.get(a4) || null, e3, t6, n7, r5, i4));
        return true;
    }
    return false;
  }
  function Fh(e3) {
    let t6 = Wt2(e3.target);
    if (t6 !== null) {
      const n7 = s2(t6);
      if (n7 !== null) {
        t6 = n7.tag;
        if (t6 === 13) {
          t6 = c(n7);
          if (t6 !== null) {
            e3.blockedOn = t6;
            Mt2(e3.priority, () => {
              hh(n7);
            });
            return;
          }
        } else if (t6 === 31) {
          t6 = l(n7);
          if (t6 !== null) {
            e3.blockedOn = t6;
            Mt2(e3.priority, () => {
              hh(n7);
            });
            return;
          }
        } else if (t6 === 3 && n7.stateNode.current.memoizedState.isDehydrated) {
          e3.blockedOn = n7.tag === 3 ? n7.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e3.blockedOn = null;
  }
  function Ih(e3) {
    if (e3.blockedOn !== null) {
      return false;
    }
    for (let t6 = e3.targetContainers; t6.length > 0; ) {
      let n7 = bh(e3.nativeEvent);
      if (n7 === null) {
        n7 = e3.nativeEvent;
        const r5 = new n7.constructor(n7.type, n7);
        jn2 = r5;
        n7.target.dispatchEvent(r5);
        jn2 = null;
      } else {
        t6 = Gt2(n7);
        if (t6 !== null) {
          mh(t6);
        }
        e3.blockedOn = n7;
        return false;
      }
      t6.shift();
    }
    return true;
  }
  function Lh(e3, t6, n7) {
    if (Ih(e3)) {
      n7.delete(t6);
    }
  }
  function Rh() {
    wh = false;
    if (Th !== null && Ih(Th)) {
      Th = null;
    }
    if (Eh !== null && Ih(Eh)) {
      Eh = null;
    }
    if (Dh !== null && Ih(Dh)) {
      Dh = null;
    }
    Oh.forEach(Lh);
    kh.forEach(Lh);
  }
  function zh(e3, n7) {
    if (e3.blockedOn === n7) {
      e3.blockedOn = null;
      if (!wh) {
        wh = true;
        t5.unstable_scheduleCallback(t5.unstable_NormalPriority, Rh);
      }
    }
  }
  var Bh = null;
  function Vh(e3) {
    if (Bh !== e3) {
      Bh = e3;
      t5.unstable_scheduleCallback(t5.unstable_NormalPriority, function() {
        if (Bh === e3) {
          Bh = null;
        }
        for (let t6 = 0; t6 < e3.length; t6 += 3) {
          const n7 = e3[t6];
          const r5 = e3[t6 + 1];
          const i4 = e3[t6 + 2];
          if (typeof r5 != `function`) {
            if (Sh(r5 || n7) === null) {
              continue;
            }
            break;
          }
          const a4 = Gt2(n7);
          if (a4 !== null) {
            e3.splice(t6, 3);
            t6 -= 3;
            nc(a4, {
              pending: true,
              data: i4,
              method: n7.method,
              action: r5
            }, r5, i4);
          }
        }
      });
    }
  }
  function Hh(e3) {
    function t6(t7) {
      return zh(t7, e3);
    }
    if (Th !== null) {
      zh(Th, e3);
    }
    if (Eh !== null) {
      zh(Eh, e3);
    }
    if (Dh !== null) {
      zh(Dh, e3);
    }
    Oh.forEach(t6);
    kh.forEach(t6);
    for (var n7 = 0; n7 < Ah.length; n7++) {
      var r5 = Ah[n7];
      if (r5.blockedOn === e3) {
        r5.blockedOn = null;
      }
    }
    while (Ah.length > 0 && (n7 = Ah[0], n7.blockedOn === null)) {
      Fh(n7);
      if (n7.blockedOn === null) {
        Ah.shift();
      }
    }
    n7 = (e3.ownerDocument || e3).$$reactFormReplay;
    if (n7 != null) {
      for (r5 = 0; r5 < n7.length; r5 += 3) {
        let i4 = n7[r5];
        const a4 = n7[r5 + 1];
        let o3 = i4[Ft2] || null;
        if (typeof a4 == `function`) {
          if (!o3) {
            Vh(n7);
          }
        } else if (o3) {
          let s3 = null;
          if (a4 && a4.hasAttribute(`formAction`)) {
            i4 = a4;
            if (o3 = a4[Ft2] || null) {
              s3 = o3.formAction;
            } else if (Sh(i4) !== null) {
              continue;
            }
          } else {
            s3 = o3.action;
          }
          if (typeof s3 == `function`) {
            n7[r5 + 1] = s3;
          } else {
            n7.splice(r5, 3);
            r5 -= 3;
          }
          Vh(n7);
        }
      }
    }
  }
  function Uh() {
    function e3(e4) {
      if (e4.canIntercept && e4.info === `react-transition`) {
        e4.intercept({
          handler: function() {
            return new Promise((resolve) => i4 = resolve);
          },
          focusReset: `manual`,
          scroll: `manual`
        });
      }
    }
    function t6() {
      if (i4 !== null) {
        i4();
        i4 = null;
      }
      if (!r5) {
        setTimeout(n7, 20);
      }
    }
    function n7() {
      if (!r5 && !navigation.transition) {
        const e4 = navigation.currentEntry;
        if (e4 && e4.url != null) {
          navigation.navigate(e4.url, {
            state: e4.getState(),
            info: `react-transition`,
            history: `replace`
          });
        }
      }
    }
    if (typeof navigation == `object`) {
      var r5 = false;
      var i4 = null;
      navigation.addEventListener(`navigate`, e3);
      navigation.addEventListener(`navigatesuccess`, t6);
      navigation.addEventListener(`navigateerror`, t6);
      setTimeout(n7, 100);
      return function() {
        r5 = true;
        navigation.removeEventListener(`navigate`, e3);
        navigation.removeEventListener(`navigatesuccess`, t6);
        navigation.removeEventListener(`navigateerror`, t6);
        if (i4 !== null) {
          i4();
          i4 = null;
        }
      };
    }
  }
  function Wh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.render = Wh.prototype.render = function(e3) {
    const _internalRoot = this._internalRoot;
    if (_internalRoot === null) {
      throw Error(a3(409));
    }
    const t_current = _internalRoot.current;
    dh(t_current, jd(), e3, _internalRoot, null, null);
  };
  Gh.prototype.unmount = Wh.prototype.unmount = function() {
    const _internalRoot = this._internalRoot;
    if (_internalRoot !== null) {
      this._internalRoot = null;
      const t6 = _internalRoot.containerInfo;
      dh(_internalRoot.current, 2, null, _internalRoot, null, null);
      zd();
      t6[It2] = null;
    }
  };
  function Gh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.unstable_scheduleHydration = function(target) {
    if (target) {
      const priority = jt2();
      target = {
        blockedOn: null,
        target,
        priority
      };
      for (var n7 = 0; n7 < Ah.length && priority !== 0 && priority < Ah[n7].priority; n7++) ;
      Ah.splice(n7, 0, target);
      if (n7 === 0) {
        Fh(target);
      }
    }
  };
  var r_version = r4.version;
  if (r_version !== `19.3.0`) {
    throw Error(a3(527, r_version, `19.3.0`));
  }
  i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode = function(e3) {
    const e__reactInternals = e3._reactInternals;
    if (e__reactInternals === void 0) {
      throw typeof e3.render == `function` ? Error(a3(188)) : (e3 = Object.keys(e3).join(`,`), Error(a3(268, e3)));
    }
    e3 = d(e__reactInternals);
    e3 = e3 === null ? null : f(e3);
    e3 = e3 === null ? null : e3.stateNode;
    return e3;
  };
  var qh = {
    bundleType: 0,
    version: `19.3.0`,
    rendererPackageName: `react-dom`,
    currentDispatcherRef: r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    reconcilerVersion: `19.3.0`
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber) {
      try {
        st2 = Jh.inject(qh);
        ct2 = Jh;
      } catch {
      }
    }
  }
  e2.createRoot = function(e3, t6) {
    if (!o2(e3)) {
      throw Error(a3(299));
    }
    let n7 = false;
    let r5 = ``;
    let i4 = Tc2;
    let s3 = Ec2;
    let c2 = Dc2;
    if (t6 != null) {
      if (t6.unstable_strictMode === true) {
        n7 = true;
      }
      if (t6.identifierPrefix !== void 0) {
        r5 = t6.identifierPrefix;
      }
      if (t6.onUncaughtError !== void 0) {
        i4 = t6.onUncaughtError;
      }
      if (t6.onCaughtError !== void 0) {
        s3 = t6.onCaughtError;
      }
      if (t6.onRecoverableError !== void 0) {
        c2 = t6.onRecoverableError;
      }
    }
    t6 = lh(e3, 1, false, null, null, n7, r5, null, i4, s3, c2, Uh);
    e3[It2] = t6.current;
    Wf(e3);
    return new Wh(t6);
  };
});
var y = t((e2, t5) => {
  function n7() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n7);
      } catch (error) {
        console.error(error);
      }
    }
  }
  n7();
  t5.exports = v();
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
  Preview: b.lazy(() => r(() => import("./demo-BpwDm3_5-7RCQQCCM.js"), __vite__mapDeps([0, 1, 2, 3, 4]))),
  loadSource: () => r(() => import("./component-BfIA_sur-KJJO5LCX.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-F9iwrvZt-WJUF33HL.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BdsziCoX-MCWPFAED.js"), __vite__mapDeps([5, 1, 2, 3, 4]))),
    loadSource: () => r(() => import("./component.clean-C81bLSK9-GGJLVNTU.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BCszff8i-FPBTRHQG.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Bq86T0RX-ZHH4TYVZ.js"), __vite__mapDeps([6, 1, 2, 3, 7]))),
  loadSource: () => r(() => import("./component-zV5da3i0-NGWZOGWE.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-D_d0RPGD-F2QVVUFJ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DQ6MZQcD-MA67VCLH.js"), __vite__mapDeps([8, 1, 2, 3, 7]))),
    loadSource: () => r(() => import("./component.clean-G7HptHGl-ZTLAHRZ2.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BKGBfDOD-ZK5USA32.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CCeL1VNp-VZ3SJVQQ.js"), __vite__mapDeps([9, 1, 2, 3, 10]))),
  loadSource: () => r(() => import("./component-CVBds3Db-AITXQJPZ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Cr8lKUzQ-M6Z3F5FO.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DC3N3Pap-VDERBZQY.js"), __vite__mapDeps([11, 1, 2, 3, 10]))),
    loadSource: () => r(() => import("./component.clean-C7ROz4iL-MOB5MDD4.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-C4vtpNbt-QW5T3ZEN.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-crn6hRBF-FHXS7XQG.js"), __vite__mapDeps([12, 1, 2, 3, 13, 14]))),
  loadSource: () => r(() => import("./component-CJBnN79--PFMI6L34.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-D3ABdLPT-CLFWTAA7.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BjIF1-j--UPZFBXC2.js"), __vite__mapDeps([15, 1, 2, 3, 14]))),
    loadSource: () => r(() => import("./component.clean-MnuLboKN-F2UQ5FZW.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DSswoBJu-ISERZ7MW.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Bzg0Jm8m-WDMVQ4IQ.js"), __vite__mapDeps([16, 1, 2, 3, 17]))),
  loadSource: () => r(() => import("./component-DEaAy1BC-HMHB2ACO.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CaN0P0XV-CI6OOMUG.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CykqoJC9-BJCJLGY4.js"), __vite__mapDeps([18, 1, 2, 3, 17]))),
    loadSource: () => r(() => import("./component.clean-BEShq_nD-ZCOENBXD.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6WKo64J-BEGBXMI6.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Ddb1Dch3-XV6ZM46V.js"), __vite__mapDeps([19, 1, 2, 3, 20]))),
  loadSource: () => r(() => import("./component-B-u-OuX--RJFJD3MY.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bu9_xt8V-WBR74KDR.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CX0onucT-FJVWB226.js"), __vite__mapDeps([21, 1, 2, 3, 20]))),
    loadSource: () => r(() => import("./component.clean-DZ0boXyY-FNF2HS6J.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DN7ImmUS-R4ONWKQH.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-NvLm8mGU-PUC7EMSP.js"), __vite__mapDeps([22, 1, 2, 3, 23]))),
  loadSource: () => r(() => import("./component-CC41BuLe-JJG3FWL5.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DnStOjCc-ORLI5UL2.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B3KZIS0J-FO6IJPJS.js"), __vite__mapDeps([24, 1, 2, 3, 23]))),
    loadSource: () => r(() => import("./component.clean-DFTWGCQh-7NCGRE4W.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-q_5UM703-MF24HNR2.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-DtfhNS6P-S7L6UVJU.js"), __vite__mapDeps([25, 1, 2, 3, 26, 27]))),
  loadSource: () => r(() => import("./component-DMHjnFWv-5OP2JYWC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BfqH4QUp-ZZIIXHY7.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Dkj-1MDj-MQHYMPTH.js"), __vite__mapDeps([28, 1, 2, 3, 27]))),
    loadSource: () => r(() => import("./component.clean-BZVoUx2k-3S6LYA3F.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BblgJ4cP-A6I6C36N.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CZQO5p6C-EO4IRFAL.js"), __vite__mapDeps([29, 1, 2, 3, 30]))),
  loadSource: () => r(() => import("./component-B_9gj-Ov-C6ONN5VF.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bo7zVMZQ-SXRGGG7C.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D4m3L74b-7FRMSBPZ.js"), __vite__mapDeps([31, 1, 2, 3, 30]))),
    loadSource: () => r(() => import("./component.clean-CLZvFUCF-IXLLI6ZM.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bh2SgH6--PVTJNYNT.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-65xDbaC9-XU4IJD7V.js"), __vite__mapDeps([32, 1, 2, 3, 33]))),
  loadSource: () => r(() => import("./component-D4LZ8L6f-WT6SDNII.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CWsQ8QN--FJJLECMA.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-dYQPE1hb-4TEHDMIM.js"), __vite__mapDeps([34, 1, 2, 3, 33]))),
    loadSource: () => r(() => import("./component.clean-CtS7yavp-PQRI24UZ.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-B5LUm_il-VPMCRGYS.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BXlx9pcF-63U3TNZR.js"), __vite__mapDeps([35, 3, 2, 36, 1, 37]))),
  loadSource: () => r(() => import("./component-BcChx9Jw-XHEZQ775.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-IkEC_JRe-NO6QIDJP.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D3ZXLUIO-G3OU3TOE.js"), __vite__mapDeps([38, 1, 2, 3, 37]))),
    loadSource: () => r(() => import("./component.clean-CWGZCMX--77SJD6LA.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-kzokqAH9-56ZZS2XX.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Da5-XF-c-2FZ6JXOF.js"), __vite__mapDeps([39, 1, 2, 3, 40, 41]))),
  loadSource: () => r(() => import("./component-BZX7ccTs-CWZCLYLI.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-C9p_9cDP-66HWZ6B4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DkN_5ZQ5-RARMKUSY.js"), __vite__mapDeps([42, 1, 2, 3, 41]))),
    loadSource: () => r(() => import("./component.clean-CJ-0-SIS-2DWQLQ3J.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Cj2wJRA7-VI3WTUMY.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-D_fnjW-9-5EDL63M6.js"), __vite__mapDeps([43, 3, 2, 44]))),
  loadSource: () => r(() => import("./component-re2QJung-MCZQK2BT.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-pueYgHNw-XQIFZPSO.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CUpZACNd-63DWQYX6.js"), __vite__mapDeps([45, 3, 2, 44]))),
    loadSource: () => r(() => import("./component.clean-ChvuXtkV-NCKOUK6V.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BJyOolVS-VMIHU7LV.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-DI66HSts-LKSXTBV2.js"), __vite__mapDeps([46, 3, 2, 47, 1, 48]))),
  loadSource: () => r(() => import("./component-Bcgm0lKS-BRTZLTRG.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-kKiOVARV-OXT7XC5F.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CCr62Jz8-3JUDCEWE.js"), __vite__mapDeps([49, 1, 2, 3, 48]))),
    loadSource: () => r(() => import("./component.clean-L0LpkbiF-FDITNW3S.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-LcU0OicS-CLK664PS.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-xRyZ19Jc-ASXS6EUW.js"), __vite__mapDeps([50, 1, 2, 3, 51]))),
  loadSource: () => r(() => import("./component-BNbr74FU-K3NXKM2W.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B05SYv6Z-MGN2WPKP.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CnchuWt9-DC2REI5V.js"), __vite__mapDeps([52, 1, 2, 3, 51]))),
    loadSource: () => r(() => import("./component.clean-OoeQadAf-HHBFFLLM.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bgc76ydH-XPRE6TYA.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-tcGbF7g2-BVNNLBVB.js"), __vite__mapDeps([53, 1, 2, 3, 54]))),
  loadSource: () => r(() => import("./component-DUiKVJf3-EH7RU4AR.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-gx2cWf0_-XPN4C2V4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DhS0HlaW-NWPC3XST.js"), __vite__mapDeps([55, 1, 2, 3, 54]))),
    loadSource: () => r(() => import("./component.clean-BeLkFd64-ADHWTVUO.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-C6fAXNCk-QDFAKGHT.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Cde_N0C0-YOAHRVR4.js"), __vite__mapDeps([56, 1, 2, 3, 57]))),
  loadSource: () => r(() => import("./component-D1ism7Wk-KGCPMCAN.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Ch0zWVGM-BUZ7IW5G.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BkpdJDtQ-QHBFUHPK.js"), __vite__mapDeps([58, 1, 2, 3, 57]))),
    loadSource: () => r(() => import("./component.clean-Cuyk80dR-CFQXO2CG.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DPoM2rqj-RAW47XDA.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-TTVz3U3f-GVIWF62N.js"), __vite__mapDeps([59, 1, 2, 3, 60]))),
  loadSource: () => r(() => import("./component-Bs5q_-Hg-ABAIAC35.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-_yznjEBE-6NXLXYSC.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DgcZN_UD-6CMJF3MN.js"), __vite__mapDeps([61, 1, 2, 3, 60]))),
    loadSource: () => r(() => import("./component.clean-DU-K_CLK-PZJF33LG.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CYmTgIA9-TM5HTSKB.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BlNBUErF-B57Z6TSZ.js"), __vite__mapDeps([62, 1, 2, 3, 63]))),
  loadSource: () => r(() => import("./component-BdmpRaui-VAESOYOD.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Ckp_fKFV-JI3HGDLN.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Lan03W3V-CYO2KDTF.js"), __vite__mapDeps([64, 1, 2, 3, 63]))),
    loadSource: () => r(() => import("./component.clean-DXXuHFnW-NUC4SKV6.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-ALKW-pwL-5NNOUCTV.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BgsJzBTE-G65F3VDU.js"), __vite__mapDeps([65, 1, 2, 3, 66]))),
  loadSource: () => r(() => import("./component-pTy_OjKD-QRBSWGR5.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DIzwe3nY-DLWAZGVJ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BmiiHyGl-C4IUUUPM.js"), __vite__mapDeps([67, 1, 2, 3, 66]))),
    loadSource: () => r(() => import("./component.clean-DPcOx-S--5L5XU4FI.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DwdLDQor-I7NNJYER.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-DgdoHbQS-BKSCER55.js"), __vite__mapDeps([68, 1, 2, 3, 69]))),
  loadSource: () => r(() => import("./component-MY9L9DOs-O6DBRVPG.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-4sS4mJxe-4DZ454OS.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DbXcMJMS-SALUNRD2.js"), __vite__mapDeps([70, 1, 2, 3, 69]))),
    loadSource: () => r(() => import("./component.clean-DV8U20np-6QV4CTJ3.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean--EKmLA6h-57RXKI2D.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-DGaVy3XD-TMCDVAZM.js"), __vite__mapDeps([71, 1, 2, 3, 72, 73]))),
  loadSource: () => r(() => import("./component-zjZL_VoW-G4ZSVDAV.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BF18aJ-j-Z57SYUVU.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-OeBBW_7u-MOCKEMMP.js"), __vite__mapDeps([74, 1, 2, 3, 73]))),
    loadSource: () => r(() => import("./component.clean-DihFuV2a-PPLARPBQ.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6zbp80y-WWF4KCIJ.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CYhBENQa-X6IY2FF3.js"), __vite__mapDeps([75, 1, 2, 3, 76]))),
  loadSource: () => r(() => import("./component-BtM-sP6A-X2CXUMYR.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Co7_OGHR-BXAQKKQQ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DZiTLSj_-23U6SF7B.js"), __vite__mapDeps([77, 1, 2, 3, 76]))),
    loadSource: () => r(() => import("./component.clean-CEv4fZRb-6VHB3JQI.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-B0oHunXD-U5CAMAZF.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CcNPpld_-EU5KKQHH.js"), __vite__mapDeps([78, 1, 2, 3, 79]))),
  loadSource: () => r(() => import("./component-DKNf3JpT-JSCDGZB2.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Dk9yv4ja-F3G6GM6N.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Cwxrnsci-2OYMG4KC.js"), __vite__mapDeps([80, 1, 2, 3, 79]))),
    loadSource: () => r(() => import("./component.clean-DvCuYHUC-ZQHXASYA.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-F2xvmquK-YS5IPERG.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-V6j80N0E-BN5VW5UD.js"), __vite__mapDeps([81, 1, 2, 3, 82]))),
  loadSource: () => r(() => import("./component-C4JJselr-UE7K2U4O.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-zsx878sd-KY7VX6YJ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DNxPbueK-FOHAY6FR.js"), __vite__mapDeps([83, 1, 2, 3, 82]))),
    loadSource: () => r(() => import("./component.clean-CEwHmLzb-T5OSJHD6.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Pqz2BG28-S3FYP2GT.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BBMr4ztO-IVSRL4AU.js"), __vite__mapDeps([84, 1, 2, 3, 85]))),
  loadSource: () => r(() => import("./component-CS4yLRuV-SUQPYNIA.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CEAyQswo-XBF4TPFL.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BtR7iQdY-XCV3MD4N.js"), __vite__mapDeps([86, 1, 2, 3, 85]))),
    loadSource: () => r(() => import("./component.clean-ISS8Q3NK-V5JM5IAC.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BnqtWD6T-BD3SAXZ4.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CQRf-Cg5-TH7GK3NV.js"), __vite__mapDeps([87, 1, 2, 3, 88]))),
  loadSource: () => r(() => import("./component-CA8MD8Pb-OIUDQNXB.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DvG6MyGO-N46BTBM3.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CjJwmC-8-CMUNTYHK.js"), __vite__mapDeps([89, 1, 2, 3, 88]))),
    loadSource: () => r(() => import("./component.clean-BQx6n54n-JO6O2JCT.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CSmepD-w-MFJYDSIQ.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-ik_0XYps-D7EZOTO7.js"), __vite__mapDeps([90, 1, 2, 3, 91]))),
  loadSource: () => r(() => import("./component-x34Rnmkd-XSSDLD5R.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-4mTBCgRQ-ST3FBI3V.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Vp-K1jMG-BDSUFIZV.js"), __vite__mapDeps([92, 1, 2, 3, 91]))),
    loadSource: () => r(() => import("./component.clean-JBe9bepD-YVELYS56.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BMZW7XW_-GJUAER63.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BkxWHDVt-M7SEKE2E.js"), __vite__mapDeps([93, 3, 2, 94, 1, 95]))),
  loadSource: () => r(() => import("./component-DA4nGpsg-TNKZYM6C.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BAeK2YxB-M2KTPC6V.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Djfm83dS-UJY2WVWK.js"), __vite__mapDeps([96, 1, 2, 3, 95]))),
    loadSource: () => r(() => import("./component.clean-g0Mu7KP8-ODDWWFNP.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BHAk7JVw-TCOI3SVX.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Y9Qip8LJ-IS6K2DVO.js"), __vite__mapDeps([97, 1, 2, 3, 98, 99]))),
  loadSource: () => r(() => import("./component-DcePCLLi-G5DMS6YR.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B2DLF_SS-6FQ5IKU5.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BXz9gUDp-QRPCH5PH.js"), __vite__mapDeps([100, 1, 2, 3, 99]))),
    loadSource: () => r(() => import("./component.clean-DiUTkznR-NGB3VPP2.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BcLvHkbg-PNGXICQ3.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-5-hgQYhm-A62YTDVV.js"), __vite__mapDeps([101, 1, 2, 3, 102]))),
  loadSource: () => r(() => import("./component-o-R9Codt-DOCKCTWS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BF4_1L0x-JTKLJSEE.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CPhhQKKr-4M435IVV.js"), __vite__mapDeps([103, 1, 2, 3, 102]))),
    loadSource: () => r(() => import("./component.clean-LFzR0Bzq-KHUH4XVW.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-tUSra5Eq-65FKVGIK.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Dxm1xr9_-IVX6SVVI.js"), __vite__mapDeps([104, 1, 2, 3, 105]))),
  loadSource: () => r(() => import("./component-Bjr5P8jy-3LQK55Q3.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-subIR2Oi-EJ2K32I4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CTC16fNW-SUPCICM7.js"), __vite__mapDeps([106, 1, 2, 3, 105]))),
    loadSource: () => r(() => import("./component.clean-BUrOVrhl-ZJAQ6ET5.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Q5m9NBRf-NE4ONK5J.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BQ61UvP8-PXYQC3WI.js"), __vite__mapDeps([107, 3, 2, 108, 1, 109]))),
  loadSource: () => r(() => import("./component-Jgn6z6mZ-4VLRJ526.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Dde47EwE-ODFYWE7Q.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B4-Re8fT-6P2K653L.js"), __vite__mapDeps([110, 1, 2, 3, 109]))),
    loadSource: () => r(() => import("./component.clean-BKIbnoSt-5KZPPKRM.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DG9GSNHk-HM7E6EI3.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CEgv5bR9-OUXM5LR7.js"), __vite__mapDeps([111, 1, 2, 3, 112]))),
  loadSource: () => r(() => import("./component-D7aihq6a-IASKYSBS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BYw0IeXU-GCQAMKDZ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-C1W0NbsT-4GGDDHUM.js"), __vite__mapDeps([113, 1, 2, 3, 112]))),
    loadSource: () => r(() => import("./component.clean-CyzFAbzv-AM7IIFKF.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DIZNujLU-GLORX4H5.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CgV2euur-SHMV5TRF.js"), __vite__mapDeps([114, 1, 2, 3, 115]))),
  loadSource: () => r(() => import("./component-j9tATXkO-TZQ5EAPY.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DHZEMMUR-M6ZUCQB4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-jqs229XM-4WRBVUM3.js"), __vite__mapDeps([116, 1, 2, 3, 115]))),
    loadSource: () => r(() => import("./component.clean-Dh5NyMar-MKS2LVLO.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-7a_3RgBj-S7TQZQD3.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-C580yDTY-UEB7NITD.js"), __vite__mapDeps([117, 1, 2, 3, 118]))),
  loadSource: () => r(() => import("./component-BicykQ1s-S5PCGOLQ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B2vZk3kt-PRWIYTJ4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B7cgzOPZ-PYQCJL7S.js"), __vite__mapDeps([119, 1, 2, 3, 118]))),
    loadSource: () => r(() => import("./component.clean-O4r9_IHP-F3UJDUFB.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BaZCBKT8-54ZBW7LI.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-RSBM-GoA-GSSAZWNC.js"), __vite__mapDeps([120, 1, 2, 3, 121]))),
  loadSource: () => r(() => import("./component-gA3RoTWK-OYU7G7ZC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Y8kxxKKu-UYW3EGXC.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-gBQjVTxc-RYLG2KEC.js"), __vite__mapDeps([122, 1, 2, 3, 121]))),
    loadSource: () => r(() => import("./component.clean-DJKRjQ7k-6XOSOU4I.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DzYWfmI1-NL5T3AW4.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BoVVleq1-JINMT5JI.js"), __vite__mapDeps([123, 1, 2, 3, 124]))),
  loadSource: () => r(() => import("./component-CDqIdVLz-BSCZ6BC7.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BNtW5zDz-UO7WBAP3.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-SPg51xTG-PJI6UOPS.js"), __vite__mapDeps([125, 1, 2, 3, 124]))),
    loadSource: () => r(() => import("./component.clean-DxVBY7aC-GZ3HVUAN.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-Gin_1k8r-PMOXJEHY.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-B1zzQqO2-2JWEQDXZ.js"), __vite__mapDeps([126, 1, 2, 3, 127]))),
  loadSource: () => r(() => import("./component-COkht5bW-I46SYMWN.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BZMuWE3V-IWJEDYPP.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DKsx9U9O-3EJNCHUK.js"), __vite__mapDeps([128, 1, 2, 3, 127]))),
    loadSource: () => r(() => import("./component.clean-CZdJFe3o-ZV6IBTXQ.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CcOqdgxq-6U5OKUMV.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-d_AV0tPL-J25ATZZW.js"), __vite__mapDeps([129, 1, 2, 3, 130]))),
  loadSource: () => r(() => import("./component-B655DKtJ-GMQU6B4F.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-C8QFU_GC-SA6XMXOI.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Du4BhTGQ-3DVJBCLF.js"), __vite__mapDeps([131, 1, 2, 3, 130]))),
    loadSource: () => r(() => import("./component.clean-Bg6CvdjJ-L7QMJUKB.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-H8K3PE8_-FNFW63V4.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BKqcXOSN-Y5MUS7GP.js"), __vite__mapDeps([132, 1, 2, 3, 133]))),
  loadSource: () => r(() => import("./component-4AUM-pc3-CAAYJDVK.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CaD1NYxe-EQF4TW3V.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CQ9Mgt2p-SRN5FUUM.js"), __vite__mapDeps([134, 1, 2, 3, 133]))),
    loadSource: () => r(() => import("./component.clean-yoynJ5MU-E64Q4UUR.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CyqSWI06-XGEKMCMV.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-9sHHhTyA-5ZQMUM5O.js"), __vite__mapDeps([135, 1, 2, 3, 136]))),
  loadSource: () => r(() => import("./component-ouJ0vbVn-VX2QZARC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B7LDXgsz-QWMJRO64.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DiU4wbPA-SVEFV2Y4.js"), __vite__mapDeps([137, 1, 2, 3, 136]))),
    loadSource: () => r(() => import("./component.clean-Bkj7cENz-7DM7QKPM.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BzBRkLoA-CMD5EX6G.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-CctwMXFR-A5YQ267S.js"), __vite__mapDeps([138, 1, 2, 3, 139]))),
  loadSource: () => r(() => import("./component-irX2Z2jz-E27K7JPE.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BkEThM39-4TMEXSH4.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DRfoB4wl-XP2WTCCC.js"), __vite__mapDeps([140, 1, 2, 3, 139]))),
    loadSource: () => r(() => import("./component.clean-iuex-cSq-7BZRA4YH.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-pSez6WcC-MTWJO3CB.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-DlJqXDIq-UKNHRDJK.js"), __vite__mapDeps([141, 1, 2, 3, 142]))),
  loadSource: () => r(() => import("./component-DhnR-6x--IIW5VC5M.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BlXuOLsY-OF7GBEVA.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-1KuFFkG8-FJZCXSU5.js"), __vite__mapDeps([143, 1, 2, 3, 142]))),
    loadSource: () => r(() => import("./component.clean-Czoq8jHQ-KXA6Q67S.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BIHx13f2-IZHYISRQ.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BzK_zDAD-ZFAVXQX2.js"), __vite__mapDeps([144, 1, 2, 3, 145, 146]))),
  loadSource: () => r(() => import("./component-D8XzTnaf-PBDPJHZJ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DnR5fqUI-ZIKT4R6X.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D1uXYCFG-EI6BFPFE.js"), __vite__mapDeps([147, 1, 2, 3, 146]))),
    loadSource: () => r(() => import("./component.clean-CmUvwP9C-LC3JIMGH.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DiUhGaq--IUMALXQN.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Cb1j7tKz-UHM5ZQXR.js"), __vite__mapDeps([148, 1, 2, 3, 149, 150]))),
  loadSource: () => r(() => import("./component-DK30rsxS-FAPICNBP.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CiCBMHAb-E4YQ5JYU.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DgcWwiZH-HQERJG2L.js"), __vite__mapDeps([151, 1, 2, 3, 150]))),
    loadSource: () => r(() => import("./component.clean-OCK50Cmo-XGX3A6RA.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CWU7X6cT-4SFJXJZ3.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Ed3S7lvS-RNTMCKET.js"), __vite__mapDeps([152, 1, 2, 3, 153]))),
  loadSource: () => r(() => import("./component-BrneHT_E-DHFQUYIM.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bj9wwWM5-GBNMPDKI.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CnpU6JZL-GTYJ3Z3W.js"), __vite__mapDeps([154, 1, 2, 3, 153]))),
    loadSource: () => r(() => import("./component.clean-BgLR5R6h-S5USTWL6.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-DAMwFsKO-MEPA3YUS.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BOLhhfTT-ZQSXMFUY.js"), __vite__mapDeps([155, 1, 2, 3, 156]))),
  loadSource: () => r(() => import("./component-C81bLSK9-GGPFRF4Y.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-C4pAsv52-CPWLQBMM.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BYDkomFg-ZSTBFSRW.js"), __vite__mapDeps([157, 1, 2, 3, 156]))),
    loadSource: () => r(() => import("./component.clean-DCdgppww-M6VUSVLN.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CGankNEa-TXNTPUKY.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-qJGH2Gjh-2OJPEDIV.js"), __vite__mapDeps([158, 1, 2, 3, 159, 160]))),
  loadSource: () => r(() => import("./component-DrU1Ef96-RJ27T2LC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CqEa36vT-3GN4UHFJ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DWvTXnKE-EAWRGPUC.js"), __vite__mapDeps([161, 1, 2, 3, 160]))),
    loadSource: () => r(() => import("./component.clean-CkLznOln-37SF5I55.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-O5cvsaD9-LHHOZDRW.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-sabUvR7r-OPN2WZK6.js"), __vite__mapDeps([162, 3, 2, 163, 1, 164]))),
  loadSource: () => r(() => import("./component-G7HptHGl-QDIZFKV5.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DQUTX2jQ-DUKISLFI.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CXxA6VEx-PLLWN6ET.js"), __vite__mapDeps([165, 1, 2, 3, 164]))),
    loadSource: () => r(() => import("./component.clean-DpWH1oax-3LTBWSLG.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-6__65Xac-WSOEPV6S.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-D2Q4vYDw-ZSHDKVTM.js"), __vite__mapDeps([166, 1, 2, 3, 167]))),
  loadSource: () => r(() => import("./component-DHMdjTdE-RNLBEIQC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DiX_OeMs-YZ5XPAQJ.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Bfu_rP8L-X3Z73FWI.js"), __vite__mapDeps([168, 1, 2, 3, 167]))),
    loadSource: () => r(() => import("./component.clean-BVT04wSu-7MZIXHL7.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-BRNY_KgW-L664ZNLG.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Cv538yeC-H3CPMJ6N.js"), __vite__mapDeps([169, 1, 2, 3, 170]))),
  loadSource: () => r(() => import("./component-C7ROz4iL-OIX73C34.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CQfMJLpp-6G3GHQPI.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CtdFgWee-VTDUXSXN.js"), __vite__mapDeps([171, 1, 2, 3, 170]))),
    loadSource: () => r(() => import("./component.clean-DSitrADN-LQD5A3PZ.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CflJ0oKJ-MX6JBE54.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-C2oxSuna-E4F4EPT6.js"), __vite__mapDeps([172, 1, 2, 3, 173, 174]))),
  loadSource: () => r(() => import("./component-DOfHRYAO-TWKGDKFA.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-I28H9on4-IS4RJNVT.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-q2ZwGlZu-7OFUOHVG.js"), __vite__mapDeps([175, 1, 2, 3, 174]))),
    loadSource: () => r(() => import("./component.clean-DoWPdBku-3KDNJTGG.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-vn8R5wlP-URNY7R4Z.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-VWNU0E7Q-XQ3I74JX.js"), __vite__mapDeps([176, 1, 2, 3, 177]))),
  loadSource: () => r(() => import("./component-MnuLboKN-EB57P2IX.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CPzCd5SO-ID6K3X2G.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Cim7onyI-WA5L37CV.js"), __vite__mapDeps([178, 1, 2, 3, 177]))),
    loadSource: () => r(() => import("./component.clean-uYI34p6t-MX7WS53Y.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-CMKNDwWl-VLHQVM2Y.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-izlk0-DS-2O7QXIQM.js"), __vite__mapDeps([179, 1, 2, 3, 180, 181]))),
  loadSource: () => r(() => import("./component-BEShq_nD-NPFB22ZG.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CeOV3oLU-GP2GIPW3.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BjDeSoUM-CP34OVVJ.js"), __vite__mapDeps([182, 1, 2, 3, 181]))),
    loadSource: () => r(() => import("./component.clean-DZEPLsCQ-VGU2LX4A.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-C76Xpqc0-MRPTHV72.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-BhVeTwOS-K2UYJAP2.js"), __vite__mapDeps([183, 1, 2, 3, 184]))),
  loadSource: () => r(() => import("./component-DZ0boXyY-NPYFBMQW.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-cbxE_Tr5-3J5MJGCS.js").then((e2) => e2.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B-ER_Luk-7RRRP6B7.js"), __vite__mapDeps([185, 1, 2, 3, 184]))),
    loadSource: () => r(() => import("./component.clean-D2uIa_Gl-C2IN6SEM.js").then((e2) => e2.default), []),
    loadDocs: () => r(() => import("./docs.clean-B6YbLikW-AYPNNKQY.js").then((e2) => e2.docs), [])
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
  Preview: b.lazy(() => r(() => import("./demo-Dx1zk5ox-D2PLGVC5.js"), __vite__mapDeps([186, 1, 2, 3, 187]))),
  loadSource: () => r(() => import("./component-DFTWGCQh-33BXZU4F.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BpUkSURm-GLEB3OWG.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CZJ2T4nU-YF7K2EFU.js"), __vite__mapDeps([188, 1, 2, 3, 47, 189]))),
  loadSource: () => r(() => import("./component-BZVoUx2k-EBNK4DBY.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DP4g1Nn7-YOX2G3NV.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BiwOrW2x-LR3DVI2K.js"), __vite__mapDeps([190, 1, 2, 3, 191]))),
  loadSource: () => r(() => import("./component-CLZvFUCF-4ZBFTNV7.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bi_YQg2x-JWOVMDAN.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-rS721rJa-O6RZWZTV.js"), __vite__mapDeps([192, 1, 2, 3, 193]))),
  loadSource: () => r(() => import("./component-CtS7yavp-XOVN5KVH.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-D418_9B_-ETYEBQKM.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-D1arByOa-YVDYPOEX.js"), __vite__mapDeps([194, 1, 2, 3, 195]))),
  loadSource: () => r(() => import("./component-CWGZCMX--P7CZPTKY.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BUxqzOgh-HKV4EF6K.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-mNpCRsfS-ZF5TA5T3.js"), __vite__mapDeps([196, 1, 2, 3, 197]))),
  loadSource: () => r(() => import("./component-L0LpkbiF-6VZ2LUVS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-D5diAW3h-ME3VVTL6.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Bp-um2Aj-MDVHUHF6.js"), __vite__mapDeps([198, 1, 2, 3, 199]))),
  loadSource: () => r(() => import("./component-CXPyG-44-3IB2YI6X.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-6bqyeHxu-GRNC22NH.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Ytbb4Swi-FL5M5NJG.js"), __vite__mapDeps([200, 1, 2, 3, 201]))),
  loadSource: () => r(() => import("./component-OoeQadAf-FXD2U2GW.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-ZdpK_fwc-QJ3KHZW2.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-DWd1ZKX0-OBFYPO37.js"), __vite__mapDeps([202, 1, 2, 3, 203]))),
  loadSource: () => r(() => import("./component-BeLkFd64-AMRN2PO2.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-KUHWR962-MVT3I5MD.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BbZ2lqOk-MNNCU6WD.js"), __vite__mapDeps([204, 1, 2, 3, 36, 205]))),
  loadSource: () => r(() => import("./component-Cuyk80dR-XQD7ML3S.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BQ4CPEZB-GMIU3G4M.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-DrrNKEd7-AHKJSG77.js"), __vite__mapDeps([206, 1, 2, 3, 207]))),
  loadSource: () => r(() => import("./component-DEfvlqwK-ZDGKGYJC.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DNt7L4gM-RFN3YUUW.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BtlH6dH8-VTMNQVEK.js"), __vite__mapDeps([208, 1, 2, 3, 209]))),
  loadSource: () => r(() => import("./component-DYurEycN-7KHWQPPR.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BNtHN1ia-I3KHXU37.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-C2jfF4UB-D63C3BDX.js"), __vite__mapDeps([210, 1, 2, 3, 211]))),
  loadSource: () => r(() => import("./component-DvIszmxu-D4BYLBRD.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-YCamylwB-U7X6XXLB.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-MXjIQshC-QW3B4SDC.js"), __vite__mapDeps([212, 1, 2, 3, 213]))),
  loadSource: () => r(() => import("./component-PJ290Npx-3CWWESL5.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BwxiOt3k-OY7SSSEJ.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CU49Fdlm-GB6KQQEP.js"), __vite__mapDeps([214, 1, 2, 3, 215]))),
  loadSource: () => r(() => import("./component-fn3yfRgp-W5E3W2WU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B44eJjOH-KX5KWHNH.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-DrDu-VuE-GFBVJWU5.js"), __vite__mapDeps([216, 1, 2, 3, 217]))),
  loadSource: () => r(() => import("./component-CujPjqAK-KEYJDZXB.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BkosQpJv-SCUT4NDG.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Cm2FVMWj-3S7IQINH.js"), __vite__mapDeps([218, 1, 2, 3, 219]))),
  loadSource: () => r(() => import("./component-DmIFsdg6-MFLNO7RB.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BHILhaci-IWGYRQPK.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-DlhpiUWr-BVR4I77U.js"), __vite__mapDeps([220, 3, 2, 221]))),
  loadSource: () => r(() => import("./component-DXXuHFnW-62ZWGD2P.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DSLhnq5S-4QPI22NR.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Cm8kSHcX-JLJWUXBR.js"), __vite__mapDeps([222, 1, 2, 3, 223]))),
  loadSource: () => r(() => import("./component-CaX99EJw-2BXSMEHD.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B3la3x8y-SCFARRQD.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CfD9afHB-H5OUMRXX.js"), __vite__mapDeps([224, 1, 2, 3, 225]))),
  loadSource: () => r(() => import("./component-DPcOx-S--JZECZ6WL.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BnO3I4vF-IHGED5FV.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-B_Bc7Zla-CMHSXEJF.js"), __vite__mapDeps([226, 1, 2, 3, 227]))),
  loadSource: () => r(() => import("./component-B2U-I8IC-ZGQF5MNP.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DrI7Fr6r-MT7BK37Y.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CL_ySX-H-DY4FBL4T.js"), __vite__mapDeps([228, 1, 2, 3, 229]))),
  loadSource: () => r(() => import("./component-DV8U20np-AIL2O4MS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DVNki4xQ-PVEGXYH4.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BABw5NIJ-2CDXBXTE.js"), __vite__mapDeps([230, 3, 2, 231, 232]))),
  loadSource: () => r(() => import("./component-CIl7yz5m-PF5QNLIY.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-1TxNi_aU-IWMNEYTO.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-KQRMxKWn-2I5BB7ON.js"), __vite__mapDeps([233, 1, 2, 3, 234]))),
  loadSource: () => r(() => import("./component-Dsgd5ZHH-SJSQNB3L.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BWUGRuON-PILTJ6O2.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BTBcqeeL-ZMKQVYG4.js"), __vite__mapDeps([235, 1, 2, 3, 236]))),
  loadSource: () => r(() => import("./component-DKl1mEra-ZEOI6COS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BEdCATSE-26YBFRV2.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CkkSZhS9-M5WPF7SQ.js"), __vite__mapDeps([237, 1, 2, 3, 238]))),
  loadSource: () => r(() => import("./component-BE1e5ouD-VUSOG2KI.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-C_UZC7kN-OZBUXCAG.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-OZULToi6-HZKOO2WA.js"), __vite__mapDeps([239, 1, 2, 3, 240]))),
  loadSource: () => r(() => import("./component-hDQpocSR-EK7QLZKM.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-ubQm_MNq-LZV4E4RG.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-D-FldunI-M5JQ34I4.js"), __vite__mapDeps([241, 1, 2, 3, 242]))),
  loadSource: () => r(() => import("./component-DihFuV2a-R5HEYZER.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CgriwkwB-6YA6LWHC.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Cwdm4ytX-VOX3EDWM.js"), __vite__mapDeps([243, 1, 2, 3, 244]))),
  loadSource: () => r(() => import("./component-CEv4fZRb-AUQPTXZA.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DF3ihqsX-EM4JPALF.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CmYYw1tl-4TB6IFPC.js"), __vite__mapDeps([245, 1, 2, 3, 246]))),
  loadSource: () => r(() => import("./component-CSUU-7Px-K7PFHFOK.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B_OI8PyY-FKXASRBV.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-ClUxDNiT-AUTPRXN7.js"), __vite__mapDeps([247, 1, 2, 3, 248]))),
  loadSource: () => r(() => import("./component-CSj-h-r4-CUDW4YWV.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BG1aWD2h-2CKG5CLU.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CVKU8Uzh-NJ7NHKTL.js"), __vite__mapDeps([249, 1, 2, 3, 250]))),
  loadSource: () => r(() => import("./component-fYpYKcvB-RXFZLZOT.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Cf87NU-O-L6HOSGQU.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-cWsVSmbI-NAX6ZHG3.js"), __vite__mapDeps([251, 1, 2, 3, 252]))),
  loadSource: () => r(() => import("./component-BA2VwGBj-AE2MXV3I.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BtJJaDyI-A6HHVWEE.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-B3RzKcXL-FVKTOS22.js"), __vite__mapDeps([253, 1, 2, 3, 254]))),
  loadSource: () => r(() => import("./component-CEwHmLzb-YWDMLVGJ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B_2rjjD8-Z5OAENZB.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Q0wmIwEm-MN3ADW3U.js"), __vite__mapDeps([255, 1, 2, 3, 256]))),
  loadSource: () => r(() => import("./component-ISS8Q3NK-TN653LTU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B-pCOumb-NY2XE6D3.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BWWWdWrI-Q4K43QVX.js"), __vite__mapDeps([257, 1, 2, 3, 40, 258, 259, 163, 260, 261, 94, 149, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276]))),
  loadSource: () => r(() => import("./component-JBe9bepD-5OXYSQEJ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BxLsAAJw-32PIKOJN.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-eQInHe1Q-SYDDBH6X.js"), __vite__mapDeps([277, 1, 2, 3, 13, 26, 40, 98, 159, 173, 258, 267, 260, 261, 94, 149, 268, 269, 270, 278, 272, 273, 279, 274, 280]))),
  loadSource: () => r(() => import("./component-DiUTkznR-BQNDRL5E.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-J0FQBf8r-RYKBWV2J.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-iLo3CJ8--FN46KXQM.js"), __vite__mapDeps([281, 1, 2, 3, 40, 108, 267, 260, 261, 94, 149, 269, 282, 273, 280, 275, 283]))),
  loadSource: () => r(() => import("./component-LFzR0Bzq-75OIN5SZ.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BLrJfzvH-TNJ6B3MN.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-DwSEqjaS-XRUBMICG.js"), __vite__mapDeps([284, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BUrOVrhl-BIUMO2ET.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Cfk5B1z9-YDWLFJ2Y.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-C1U6NI7B-HY5KJP6J.js"), __vite__mapDeps([285, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BKIbnoSt-LFQEKZXX.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-n3nxXhui-W4ZYW2JI.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Dj5g1Sf_-RT4CGEHL.js"), __vite__mapDeps([286, 3, 2, 259, 1, 163, 258, 260, 261, 94, 149, 262, 263, 264, 265, 266]))),
  loadSource: () => r(() => import("./component-CyzFAbzv-F2AVYHDW.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Cdva6Ahi-TEMMBCAI.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-De2n08Zl-A4C66MDW.js"), __vite__mapDeps([287, 1, 2, 3, 72, 267, 260, 261, 94, 149, 269, 278, 272, 273, 288, 265, 276, 283]))),
  loadSource: () => r(() => import("./component-O4r9_IHP-FRIMGH37.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-sV6Exspv-IEBUKLE6.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-IfuY4zjH-75KG5FJV.js"), __vite__mapDeps([289, 1, 2, 3, 40, 98, 108, 145, 267, 260, 261, 94, 149, 268, 263, 273, 279, 266]))),
  loadSource: () => r(() => import("./component-CZdJFe3o-THUSCRKV.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-B-2N1ZTn-XCRH76HV.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CUdsyn6m-4PUMBYHF.js"), __vite__mapDeps([290, 1, 2, 3, 40, 260, 261, 94, 149, 291]))),
  loadSource: () => r(() => import("./component-Bkj7cENz-CIDHJHD2.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bg0MHHdB-SLWQFSKO.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-d_U4qihD-RCPT24T5.js"), __vite__mapDeps([292, 1, 2, 3, 40, 260, 261, 94, 149, 271, 288, 274, 291]))),
  loadSource: () => r(() => import("./component-iuex-cSq-AOKTXUQR.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bk4Nc0yi-5T3447VC.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CRG7NKBx-R2GP2FDG.js"), __vite__mapDeps([293, 1, 2, 3, 40, 260, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-OCK50Cmo-6547S2L5.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-CqGta5k3-3EPLPS4O.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-CBRMIUgj-AMMVEWOB.js"), __vite__mapDeps([294, 1, 2, 3, 40, 145, 267, 260, 261, 94, 149, 268, 262, 278, 273, 288]))),
  loadSource: () => r(() => import("./component-DCdgppww-HCBDSY2Q.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DKnQ9DNv-BZGH64PM.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-4lbOOBUM-PTLLG3H3.js"), __vite__mapDeps([295, 1, 2, 3, 40, 145, 180, 267, 260, 261, 94, 149, 268, 278, 271, 282, 264, 279, 274, 266]))),
  loadSource: () => r(() => import("./component-DpWH1oax-7ODQD4GU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DR5BTgCD-SYMKJG2M.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Ye53Zfy1-CXBERJYQ.js"), __vite__mapDeps([296, 1, 2, 3, 297]))),
  loadSource: () => r(() => import("./component-DSitrADN-S7SLDJIU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Datr-mCn-XRM3YMUH.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-B-TgH1P--OGF46JOC.js"), __vite__mapDeps([298, 1, 2, 3, 299]))),
  loadSource: () => r(() => import("./component-uYI34p6t-ZCCG3ISV.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DdQN5WXt-X7DLX6UM.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Dcdtba_V-UWVK337D.js"), __vite__mapDeps([300, 1, 2, 3, 301]))),
  loadSource: () => r(() => import("./component-DZEPLsCQ-5CBL67LW.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-JecR3ZCs-GVY6GADB.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-S1hMjDCH-YCNZCO73.js"), __vite__mapDeps([302, 1, 2, 3, 303]))),
  loadSource: () => r(() => import("./component-Bswo_Nl2-3XTVM3HU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BaC6K2ad-BGEVSTEZ.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-0IZOAjVo-MYMWHXBM.js"), __vite__mapDeps([304, 1, 2, 3, 305]))),
  loadSource: () => r(() => import("./component-tKo-lMTz-E3UXKGRH.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-BzUQTIno-73UFVTW3.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-Cc3_N5Az-VTUW2PP3.js"), __vite__mapDeps([306, 1, 2, 3, 307]))),
  loadSource: () => r(() => import("./component-BhZZSUUH-DI3DNLYS.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-jUzYsO8s-4IESCGBP.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BEzbCisV-W3BKUZIH.js"), __vite__mapDeps([308, 1, 2, 3, 309]))),
  loadSource: () => r(() => import("./component-DQdAXRcF-6BK3UNXU.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-DX5lHDck-JHQECIMZ.js").then((e2) => e2.docs), []),
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
  Preview: b.lazy(() => r(() => import("./demo-BijqyLh8-X56XGYTH.js"), __vite__mapDeps([310, 1, 2, 3, 311]))),
  loadSource: () => r(() => import("./component-D2uIa_Gl-KK3USF3X.js").then((e2) => e2.default), []),
  loadDocs: () => r(() => import("./docs-Bbarn97a-EZHZNANK.js").then((e2) => e2.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
var vi = {
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
};
var yi = {
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
};
var bi = {
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
};
var xi = {
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
};
var Si = {
  "../motion/blur-crossfade/index.ts": ni,
  "../motion/gradient-floor/index.ts": ii,
  "../motion/gradient-text/index.ts": oi,
  "../motion/grid-background/index.ts": ci,
  "../motion/number-ticker/index.ts": ui,
  "../motion/shimmer-loader/index.ts": fi,
  "../motion/text-reveal/index.ts": mi,
  "../motion/tilt-card/index.ts": gi
};
var Ci = (e2) => Object.values(e2).map((e3) => e3.entry).sort((e3, t5) => (e3.order ?? 999) - (t5.order ?? 999) || e3.name.localeCompare(t5.name));
var wi = [`ai-answer`, `chat-composer`, `thinking-state`, `writing-assistant`, `thinking-loader`];
var Ti = ((e2) => {
  let t5 = (e3) => {
    if (wi.includes(e3.slug)) {
      return wi.indexOf(e3.slug);
    }
    return wi.length;
  };
  return [...e2].sort((e3, n7) => t5(e3) - t5(n7));
})(Ci(vi));
var Ei = Ci(yi).map((e2) => ({
  ...e2,
  kind: `block`
}));
var $ = Ci(bi).map((e2) => ({
  ...e2,
  kind: `illustration`
}));
var Di = Ci(xi).map((e2) => ({
  ...e2,
  kind: `screen`
}));
var k = Ci(Si).map((e2) => ({
  ...e2,
  kind: `motion`
}));
var Oi = [...Ti, ...Di, ...Ei, ...$, ...k];
var ki = [`Chat`, `Agents`, `Cards`, `Text`, `Data display`, `Navigation`, `Buttons`, `Inputs`, `Feedback`];
var Pi = (e2) => e2.toLowerCase().replace(/\s+/g, `-`);
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
function J1Component({
  icon,
  size = 16
}) {
  return /* @__PURE__ */ jsx(r3, { icon, size, color: `currentColor`, "aria-hidden": true });
}
function IComponent({
  value,
  label,
  className = ``,
  onCopied
}) {
  let [i3, setI] = b.useState(false);
  let o2 = async () => {
    try {
      if (typeof value == `string`) {
        await navigator.clipboard.writeText(value);
      } else if (typeof ClipboardItem < `u`) {
        let t5 = value().then((e2) => new Blob([e2], {
          type: `text/plain`
        }));
        await navigator.clipboard.write([new ClipboardItem({
          "text/plain": t5
        })]);
      } else {
        await navigator.clipboard.writeText(await value());
      }
      setI(true);
      onCopied?.();
      setTimeout(() => setI(false), 1400);
    } catch {
    }
  };
  let s2 = /* @__PURE__ */ jsx(J1Component, { icon: i3 ? Qi : Ri, size: 14 });
  if (label) {
    return /* @__PURE__ */ jsxs("button", { className: `btn btn--ghost btn--xs ${className}`, onClick: o2, children: [
      s2,
      i3 ? `Copied` : label
    ] });
  }
  return /* @__PURE__ */ jsx("button", { className: `icon-btn ${className}`, onClick: o2, "aria-label": `Copy to clipboard`, children: s2 });
}
var ea = null;
var ta = null;
var na = () => ta ??= r(() => import("./lib-D_jy-Mlc-2PKZM2LV.js").then((e2) => ea = e2.highlight), __vite__mapDeps([312, 2]));
var ra = (e2) => e2.replace(/[&<>]/g, (e3) => ({
  "&": `&amp;`,
  "<": `&lt;`,
  ">": `&gt;`
})[e3]);
var ia = (e2) => e2.split(`
`).map((e3) => `<span class="sh__line">${ra(e3)}</span>`).join(`
`);
function MComponent({
  code: code_1,
  filename,
  lineNumbers = true,
  maxHeight,
  onCopied
}) {
  let [a3, setA] = b.useState(!!ea);
  b.useEffect(() => {
    if (!a3) {
      na().then(() => setA(true));
    }
  }, [a3]);
  let __html = b.useMemo(() => {
    if (ea) {
      return ea(code_1.trimEnd());
    }
    return ia(code_1.trimEnd());
  }, [code_1, a3]);
  return /* @__PURE__ */ jsxs("div", { className: `code`, children: [
    filename ? /* @__PURE__ */ jsxs("div", { className: `code__head`, children: [
      /* @__PURE__ */ jsxs("span", { className: `code__file`, children: [
        /* @__PURE__ */ jsx(J1Component, { icon: Bi, size: 14 }),
        filename
      ] }),
      /* @__PURE__ */ jsx(IComponent, { value: code_1, label: `Copy`, onCopied })
    ] }) : /* @__PURE__ */ jsx(IComponent, { value: code_1, className: `code__copy`, onCopied }),
    /* @__PURE__ */ jsx("pre", { className: `code__body`, "data-lines": lineNumbers, style: {
      maxHeight
    }, children: /* @__PURE__ */ jsx("code", { dangerouslySetInnerHTML: {
      __html
    } }) })
  ] });
}
function AaComponent({
  command,
  onCopied
}) {
  return /* @__PURE__ */ jsxs("div", { className: `command`, children: [
    /* @__PURE__ */ jsxs("code", { children: [
      /* @__PURE__ */ jsx("span", { className: `command__prompt`, children: `$` }),
      ` `,
      command
    ] }),
    /* @__PURE__ */ jsx(IComponent, { value: command, onCopied })
  ] });
}
function NComponent({
  id,
  title,
  lead,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { id, className: `doc__section`, children: [
    /* @__PURE__ */ jsx("h2", { className: `doc__h2`, children: title }),
    lead && /* @__PURE__ */ jsx("p", { className: `doc__p`, children: lead }),
    children
  ] });
}
function OaComponent({
  id,
  title,
  lead,
  items
}) {
  if (items?.length) {
    return /* @__PURE__ */ jsx(NComponent, { id, title, lead, children: /* @__PURE__ */ jsx("ul", { className: `doc__list`, children: items.map((e2) => /* @__PURE__ */ jsx("li", { children: e2 }, e2)) }) });
  }
  return null;
}
function Sa1Component({
  command,
  onCopied
}) {
  let [n7, setN] = b.useState(`pnpm`);
  return /* @__PURE__ */ jsxs("div", { className: `install`, children: [
    /* @__PURE__ */ jsxs("div", { className: `install__head`, children: [
      /* @__PURE__ */ jsx("div", { className: `pm-tabs`, role: `tablist`, "aria-label": `Package manager`, children: Object.keys(n5).map((e2) => /* @__PURE__ */ jsx("button", { role: `tab`, "aria-selected": n7 === e2, onClick: () => setN(e2), children: e2 }, e2)) }),
      /* @__PURE__ */ jsx(IComponent, { value: command(n7), label: `Copy`, onCopied })
    ] }),
    /* @__PURE__ */ jsx("pre", { className: `install__cmd`, children: /* @__PURE__ */ jsx("code", { children: command(n7) }) })
  ] });
}
function Ca1Component({
  label,
  code: code_1
}) {
  return /* @__PURE__ */ jsxs("div", { className: `install`, children: [
    /* @__PURE__ */ jsxs("div", { className: `install__head`, children: [
      /* @__PURE__ */ jsx("span", { className: `install__label`, children: label }),
      /* @__PURE__ */ jsx(IComponent, { value: code_1, label: `Copy` })
    ] }),
    /* @__PURE__ */ jsx("pre", { className: `install__cmd`, children: /* @__PURE__ */ jsx("code", { children: code_1 }) })
  ] });
}
function La1Component({
  className = ``
}) {
  return /* @__PURE__ */ jsxs("span", { className: `pro-badge ${className}`, children: [
    /* @__PURE__ */ jsx(J1Component, { icon: Vi, size: 10 }),
    /* @__PURE__ */ jsx("span", { children: `Pro` })
  ] });
}
var P = /* @__PURE__ */ new Set();
var F = (e2) => e2.match(/^\/(components|screens|blocks|illustrations|motion)\/?$/)?.[1];
function ua() {
  let e2 = document.querySelector(`.panel`);
  if (e2 && getComputedStyle(e2).overflowY === `auto`) {
    return e2;
  }
  return null;
}
var da = () => ua()?.scrollTop ?? window.scrollY;
var fa = false;
function ma(e2, t5) {
  let n7 = fa;
  fa = false;
  let r4 = () => {
    if (e2 === `components`) {
      if (n7) {
        return document.getElementById(`components`);
      }
      return null;
    }
    return document.querySelector(`#${e2} .library__title`) ?? document.getElementById(e2);
  };
  let i3 = (behavior) => {
    let t6 = r4();
    if (t6) {
      t6.scrollIntoView({
        block: `start`,
        behavior
      });
    } else {
      (ua() ?? window).scrollTo({
        top: 0,
        behavior
      });
    }
  };
  let a3 = false;
  let o2 = () => a3 = true;
  let s2 = [`wheel`, `touchstart`, `keydown`, `pointerdown`];
  s2.forEach((e3) => window.addEventListener(e3, o2, {
    passive: true,
    once: true
  }));
  i3(t5 ? `smooth` : `auto`);
  [t5 ? 900 : 200, 1300, 2200].forEach((e3, t6, n8) => window.setTimeout(() => {
    let e4 = r4();
    let c = e4 ? Math.abs(e4.getBoundingClientRect().top - parseFloat(getComputedStyle(e4).scrollMarginTop || `0`)) : da();
    if (!a3 && c > 4) {
      i3(`auto`);
    }
    if (t6 === n8.length - 1) {
      s2.forEach((e5) => window.removeEventListener(e5, o2));
    }
  }, e3));
}
var ha = null;
function ga(e2, t5 = false) {
  let pathname = window.location.pathname;
  if (!t5 && e2.split(`?`)[0] !== pathname) {
    ha = pathname;
  }
  if (e2 === pathname + window.location.search) {
    let t6 = F(e2);
    if (t6) {
      ma(t6, false);
    }
    return;
  }
  window.history[t5 ? `replaceState` : `pushState`](null, ``, e2);
  P.forEach((e3) => e3());
  if (!(F(pathname) && F(e2))) {
    document.querySelector(`.panel`)?.scrollTo({
      top: 0
    });
    window.scrollTo({
      top: 0
    });
  }
}
var va = (slug) => `/components/${slug}`;
var ya = (slug) => `/blocks/${slug}`;
var ba = (slug) => `/illustrations/${slug}`;
var xa = (slug) => `/motion/${slug}`;
var Sa = (slug) => `/screens/${slug}`;
var Ca = (e2) => {
  if (e2.kind === `block`) {
    return ya(e2.slug);
  }
  if (e2.kind === `illustration`) {
    return ba(e2.slug);
  }
  if (e2.kind === `motion`) {
    return xa(e2.slug);
  }
  if (e2.kind === `screen`) {
    return Sa(e2.slug);
  }
  return va(e2.slug);
};
var wa = (e2) => `/category/${e2}`;
function M({
  to: to2,
  onClick,
  ...rest
}) {
  return /* @__PURE__ */ jsx("a", { href: to2, onClick: (n7) => {
    onClick?.(n7);
    if (!(n7.defaultPrevented || n7.metaKey || n7.ctrlKey || n7.shiftKey || n7.button !== 0)) {
      n7.preventDefault();
      ga(to2);
    }
  }, ...rest });
}
var Ta = `${t3.url}/r/{name}.json`;
var Ea = Ti.find((e2) => !e2.pro);
var Da = {
  slug: Ea?.slug ?? `chat-composer`,
  name: (Ea?.name ?? `Chat Composer`).replace(/\s+/g, ``)
};
function Content() {
  let length = Ti.filter((e2) => e2.pro).length;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(NComponent, { id: `what-it-is`, title: `What ${t3.name} is`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        t3.name,
        ` is a library of React components with live previews and source you own. You install a component with the shadcn CLI or copy it by hand \u2013 it lands in your project as a single TSX file (styles included) that you can read and change.`
      ] }),
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Every preview runs the same source you install, so the keyboard behavior, states and motion you try on a page are exactly what you get.` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `how-it-is-organized`, title: `How it is organized`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `The library has four parts. `,
        /* @__PURE__ */ jsx("strong", { children: `Components` }),
        ` are single interface pieces, like a chat composer.`,
        ` `,
        /* @__PURE__ */ jsx("strong", { children: `Blocks` }),
        ` are complete sections such as a hero or a pricing table`,
        Ei.length ? `` : ` \u2013 the first ones are on their way`,
        `. `,
        /* @__PURE__ */ jsx("strong", { children: `Illustrations` }),
        ` are animated scenes for landing pages`,
        $.length ? `` : `, coming soon`,
        `. `,
        /* @__PURE__ */ jsx("strong", { children: `Motion` }),
        ` covers effects that move your content \u2013 text, numbers, transitions and backgrounds`,
        k.length ? `` : `, coming soon`,
        `. All of them are grouped by what they do; pick a category in the sidebar to see them.`
      ] }),
      /* @__PURE__ */ jsx("div", { className: `table-wrap`, children: /* @__PURE__ */ jsxs("table", { className: `table`, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: `Category` }),
          /* @__PURE__ */ jsx("th", { children: `Components` })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: ki.map((e2) => {
          let t5 = Ti.filter((t6) => t6.category === e2);
          if (t5.length) {
            return /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx(M, { to: wa(Pi(e2)), className: `doc__link`, children: e2 }) }),
              /* @__PURE__ */ jsx("td", { children: t5.map((e3) => e3.name).join(`, `) })
            ] }, e2);
          }
          return null;
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `reading-a-page`, title: `Reading a component page`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Every component page follows the same order, so you can jump straight to what you need:` }),
      /* @__PURE__ */ jsxs("ul", { className: `doc__list`, children: [
        /* @__PURE__ */ jsx("li", { children: `Preview and Code \u2013 try it, then read the exact source. The reset button restarts the preview.` }),
        /* @__PURE__ */ jsx("li", { children: `When to use and when not to \u2013 a quick check whether it fits your case.` }),
        /* @__PURE__ */ jsx("li", { children: `Installation \u2013 one CLI command, or copy the single file by hand.` }),
        /* @__PURE__ */ jsx("li", { children: `Usage, examples and API reference \u2013 copyable code and every prop with its type and default.` }),
        /* @__PURE__ */ jsx("li", { children: `Keyboard, accessibility, motion and responsive behavior \u2013 how it works for keyboard, screen reader and reduced motion.` })
      ] }),
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Press \u2318K anywhere to search.` })
    ] }),
    /* @__PURE__ */ jsx(NComponent, { id: `free-and-pro`, title: `Free and Pro`, children: /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
      `Free components can be used in any project. Components marked `,
      /* @__PURE__ */ jsx(La1Component, { className: `doc__inline-pro` }),
      ` are part of `,
      t3.name,
      ` Pro`,
      length ? ` (${length} today)` : ``,
      `: their previews and docs are open to everyone, the source comes with Pro. See`,
      ` `,
      /* @__PURE__ */ jsx(M, { to: `/pricing`, className: `doc__link`, children: `Pricing` }),
      `.`
    ] }) }),
    /* @__PURE__ */ jsx(PaComponent, { items: [{
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
    }] })
  ] });
}
function KaComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NComponent, { id: `requirements`, title: `Requirements`, children: /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
      `A React 19 project with TypeScript and the `,
      /* @__PURE__ */ jsx("code", { className: `token`, children: `@/*` }),
      ` path alias, for example Next.js or Vite. Each component is one self-contained file with its styles inside, so it needs neither Tailwind nor any other package.`
    ] }) }),
    /* @__PURE__ */ jsxs(NComponent, { id: `initialize`, title: `1. Add a components.json`, lead: `The shadcn CLI reads this file to know where components go. Skip this step if your project already has one.`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `With Tailwind, let shadcn create it \u2013 `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `init` }),
        ` requires Tailwind:`
      ] }),
      /* @__PURE__ */ jsx(Sa1Component, { command: (e2) => `${n5[e2]} shadcn@latest init` }),
      /* @__PURE__ */ jsx("p", { className: `doc__p doc__p--spaced`, children: `Without Tailwind, create the file by hand in your project root instead:` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `components.json`, lineNumbers: false, code: `{
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
}` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `The empty `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `tailwind` }),
        ` entries are only there because the file format requires them \u2013 nothing gets installed.`
      ] })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `install`, title: `2. Install components`, lead: `Point the CLI at a component's address. No further setup needed \u2013 the file lands in components/ui.`, children: [
      /* @__PURE__ */ jsx(Sa1Component, { command: (e2) => r2(Da.slug, e2) }),
      /* @__PURE__ */ jsx("p", { className: `doc__p doc__p--spaced`, children: `Then use it like any local component:` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `app/page.tsx`, code: `import { ${Da.name} } from "@/components/ui/${Da.slug}";

export default function Page() {
  return <${Da.name} />;
}` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `registry`, title: `Optional: short names`, lead: `Register the ${t3.registry} namespace once in components.json, then install by name instead of by address.`, children: [
      /* @__PURE__ */ jsx(MComponent, { filename: `components.json`, lineNumbers: false, code: `{
  "registries": {
    "${t3.registry}": "${Ta}"
  }
}` }),
      /* @__PURE__ */ jsx(Sa1Component, { command: (e2) => `${n5[e2]} shadcn@latest add ${t3.registry}/${Da.slug}` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `pro`, title: `Pro components`, lead: `Pro items install the same way \u2013 the registry only hands them out with your personal access key.`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `1. Create your key under`,
        ` `,
        /* @__PURE__ */ jsx(M, { to: `/account/downloads`, className: `doc__link`, children: `Account \u2192 Downloads` }),
        ` `,
        `and add it to `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `.env.local` }),
        ` \u2013 never commit it:`
      ] }),
      /* @__PURE__ */ jsx(MComponent, { filename: `.env.local`, lineNumbers: false, code: `AFFECTUI_TOKEN=aui_\u2026` }),
      /* @__PURE__ */ jsx("p", { className: `doc__p doc__p--spaced`, children: `2. Register the namespace with the key as a header:` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `components.json`, lineNumbers: false, code: `{
  "registries": {
    "${t3.registry}": {
      "url": "${Ta}",
      "headers": { "Authorization": "Bearer \${AFFECTUI_TOKEN}" }
    }
  }
}` }),
      /* @__PURE__ */ jsx("p", { className: `doc__p doc__p--spaced`, children: `3. Install free and Pro items by name:` }),
      /* @__PURE__ */ jsx(Sa1Component, { command: (e2) => `${n5[e2]} shadcn@latest add ${t3.registry}/<name>` }),
      /* @__PURE__ */ jsx("p", { className: `doc__p doc__p--spaced`, children: `Without the CLI, Pro members see the code and a copy button on every Pro page while signed in.` })
    ] }),
    /* @__PURE__ */ jsx(NComponent, { id: `manual`, title: `Manual installation`, children: /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
      `Open a component page, switch Installation to Manual and copy the file into`,
      ` `,
      /* @__PURE__ */ jsx("code", { className: `token`, children: `components/ui` }),
      `. Or use the copy button on any card \u2013 it copies the same file.`
    ] }) })
  ] });
}
var Aa = [[`--ui-cc-card`, `White text area`], [`--ui-cc-tray`, `Gray layer behind it`], [`--ui-cc-line`, `Outlines`], [`--ui-cc-ink`, `Text and the send button`], [`--ui-cc-ink-muted`, `Labels such as \u201CRequest approval\u201D`], [`--ui-cc-placeholder`, `Placeholder text`], [`--ui-cc-alert`, `\u201CUnrestricted access\u201D and the recording dot`]];
function JaComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(NComponent, { id: `variables`, title: `CSS variables`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `Every component brings its own colors and timings as CSS variables on its root class. They share a short prefix, so they never clash with your own variables \u2013 the Chat Composer uses`,
        ` `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `--ui-cc-` }),
        ` on `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `.ui-chat-composer` }),
        `.`
      ] }),
      /* @__PURE__ */ jsx("div", { className: `table-wrap`, children: /* @__PURE__ */ jsxs("table", { className: `table`, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { children: `Chat Composer variable` }),
          /* @__PURE__ */ jsx("th", { children: `Used for` })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: Aa.map(([e2, t5]) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("code", { className: `token`, children: e2 }) }),
          /* @__PURE__ */ jsx("td", { children: t5 })
        ] }, e2)) })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `The full list sits at the top of the styles inside the component file.` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `brand`, title: `Bring your own brand`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Override the variables in your global CSS. Put one class in front of the component class, so your values win no matter which stylesheet loads first:` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `globals.css`, code: `body .ui-chat-composer {
  --ui-cc-ink: #1e1b4b;
  --ui-cc-alert: #4f46e5;
  --ui-cc-alert-wash: rgba(79, 70, 229, 0.1);
}` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `dark-mode`, title: `Dark mode`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Components ship in light colors and don't switch on their own. Set the variables under the selector your app uses for dark mode:` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `globals.css`, code: `.dark .ui-chat-composer {
  --ui-cc-card: #19191b;
  --ui-cc-tray: #232326;
  --ui-cc-line: #2e2e31;
  --ui-cc-ink: #ededed;
  --ui-cc-placeholder: #5c5c60;
}` })
    ] })
  ] });
}
function MaComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NComponent, { id: `principles`, title: `Principles`, children: /* @__PURE__ */ jsxs("ul", { className: `doc__list`, children: [
      /* @__PURE__ */ jsx("li", { children: `Native elements first \u2013 buttons are buttons, inputs are inputs, so focus and keyboard work out of the box.` }),
      /* @__PURE__ */ jsx("li", { children: `Visible focus rings for keyboard users only, via :focus-visible.` }),
      /* @__PURE__ */ jsx("li", { children: `Every control has an accessible name; icon-only buttons ship with an aria-label.` }),
      /* @__PURE__ */ jsx("li", { children: `Status changes, like a finished loading state, are announced politely with aria-live.` })
    ] }) }),
    /* @__PURE__ */ jsx(NComponent, { id: `keyboard`, title: `Keyboard`, children: /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Each component page lists its keyboard interactions. As a rule, Tab moves focus, Enter and Space activate, and Escape closes or clears.` }) }),
    /* @__PURE__ */ jsx(NComponent, { id: `reduced-motion`, title: `Reduced motion`, children: /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
      `All motion respects `,
      /* @__PURE__ */ jsx("code", { className: `token`, children: `prefers-reduced-motion` }),
      `. Transitions become instant and looping animations stop, without losing any state change.`
    ] }) })
  ] });
}
function NaComponent() {
  let code_1 = `${t3.url}/r/${Da.slug}.json`;
  let t5 = `${t3.url}/api/mcp`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(NComponent, { id: `mcp`, title: `MCP server`, lead: `Connect your coding assistant once \u2013 it can then search every item, read its docs and add it to your project when you ask.`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Claude Code:` }),
      /* @__PURE__ */ jsx(Ca1Component, { label: `Terminal`, code: `claude mcp add --transport http affectui ${t5}` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p doc__p--spaced`, children: [
        `Cursor (`,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `.cursor/mcp.json` }),
        `), VS Code (`,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `.vscode/mcp.json` }),
        `, key`,
        ` `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `servers` }),
        ` instead of `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `mcpServers` }),
        `) and other clients:`
      ] }),
      /* @__PURE__ */ jsx(MComponent, { filename: `mcp.json`, lineNumbers: false, code: `{
  "mcpServers": {
    "affectui": { "url": "${t5}" }
  }
}` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p doc__p--spaced`, children: [
        `Codex (`,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `~/.codex/config.toml` }),
        `):`
      ] }),
      /* @__PURE__ */ jsx(MComponent, { filename: `config.toml`, lineNumbers: false, code: `[mcp_servers.affectui]
url = "${t5}"` }),
      /* @__PURE__ */ jsxs("p", { className: `doc__p doc__p--spaced`, children: [
        `The tools: `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `search_components` }),
        `, `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `list_components` }),
        `,`,
        ` `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `get_component` }),
        ` (docs, usage, props, install command) and `,
        /* @__PURE__ */ jsx("code", { className: `token`, children: `get_source` }),
        `. Then just ask, for example \u201Cadd a chat input with a model picker to the dashboard\u201D.`
      ] })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `mcp-pro`, title: `Pro items through MCP`, children: [
      /* @__PURE__ */ jsxs("p", { className: `doc__p`, children: [
        `Docs of every item are open. For the source of Pro items, add your access key from`,
        ` `,
        /* @__PURE__ */ jsx(M, { to: `/account/downloads`, className: `doc__link`, children: `Account \u2192 Downloads` }),
        ` `,
        `as a header \u2013 the same key the shadcn CLI uses:`
      ] }),
      /* @__PURE__ */ jsx(Ca1Component, { label: `Terminal`, code: `claude mcp add --transport http affectui ${t5} --header "Authorization: Bearer aui_\u2026"` }),
      /* @__PURE__ */ jsx(MComponent, { filename: `mcp.json`, lineNumbers: false, code: `{
  "mcpServers": {
    "affectui": {
      "url": "${t5}",
      "headers": { "Authorization": "Bearer aui_\u2026" }
    }
  }
}` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `llms`, title: `llms.txt`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Without any setup, point an assistant at the index or at the full docs of every item in one file:` }),
      /* @__PURE__ */ jsx(Ca1Component, { label: `Addresses`, code: `${t3.url}/llms.txt
${t3.url}/llms-full.txt` })
    ] }),
    /* @__PURE__ */ jsxs(NComponent, { id: `address`, title: `One component by address`, children: [
      /* @__PURE__ */ jsx("p", { className: `doc__p`, children: `Every free component also has an address with its full source, name and description. Assistants can read it and run the install command for you:` }),
      /* @__PURE__ */ jsx(Ca1Component, { label: `Address`, code: code_1 })
    ] }),
    /* @__PURE__ */ jsx(NComponent, { id: `prompt`, title: `Example prompt`, children: /* @__PURE__ */ jsx(MComponent, { lineNumbers: false, code: `Use the affectUI MCP server to find a component for an onboarding checklist,
install it with the shadcn CLI and use it on the dashboard.
Keep its styles and motion; adapt only the content.` }) })
  ] });
}
function PaComponent({
  items
}) {
  return /* @__PURE__ */ jsx(NComponent, { id: `next-steps`, title: `Next steps`, children: /* @__PURE__ */ jsx("div", { className: `related`, children: items.map((e2) => /* @__PURE__ */ jsxs(M, { to: e2.to, className: `related__card`, children: [
    /* @__PURE__ */ jsx("span", { className: `related__name`, children: e2.title }),
    /* @__PURE__ */ jsx("span", { className: `related__desc`, children: e2.text })
  ] }, e2.to)) }) });
}
var L = [{
  slug: `introduction`,
  title: `Introduction`,
  description: `What ${t3.name} is, how it is organized and how to read a component page.`,
  Content
}, {
  slug: `installation`,
  title: `Installation`,
  description: `Install components with the shadcn CLI or by copying a single file.`,
  Content: KaComponent
}, {
  slug: `theming`,
  title: `Theming`,
  description: `Change a component's colors with CSS variables, including dark mode.`,
  Content: JaComponent
}, {
  slug: `accessibility`,
  title: `Accessibility`,
  description: `Keyboard support, focus handling and reduced motion.`,
  Content: MaComponent
}, {
  slug: `ai`,
  title: `Using with AI`,
  description: `MCP server, llms.txt and prompts \u2013 let your coding assistant find and add components.`,
  Content: NaComponent
}];
function FaComponent({
  size = 15,
  className = ``
}) {
  return /* @__PURE__ */ jsx("svg", { className: `logo-mark ${className}`, width: size, height: size, viewBox: `0 0 107 107`, fill: `currentColor`, "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: `M106.447 67.3367C106.447 69.7104 104.523 71.6348 102.149 71.6348H75.928C73.5542 71.6348 71.6299 73.5591 71.6299 75.9329V102.16C71.6299 104.534 69.7056 106.458 67.3318 106.458H35.8198C35.8185 106.458 35.8174 106.459 35.8174 106.46C35.8174 106.462 35.8163 106.463 35.8149 106.463H4.29811C1.92433 106.463 0 104.539 0 102.165V39.1262C0 36.7525 1.92433 34.8281 4.29811 34.8281H30.5193C32.8931 34.8281 34.8174 32.9038 34.8174 30.53V4.29812C34.8174 1.92433 36.7417 0 39.1155 0H102.149C104.523 0 106.447 1.92433 106.447 4.29811V67.3367ZM35.8174 66.3425C35.8174 68.7163 37.7417 70.6406 40.1155 70.6406H66.3318C68.7056 70.6406 70.6299 68.7163 70.6299 66.3425V40.1155C70.6299 37.7417 68.7056 35.8174 66.3318 35.8174H40.1155C37.7417 35.8174 35.8174 37.7417 35.8174 40.1155V66.3425Z` }) });
}
var Ia = _();
function $a(e2, t5) {
  let apikey = `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`;
  return fetch(`https://sgpjbmkswbvhdsbrifpa.supabase.co/rest/v1/rpc/${e2}`, {
    method: `POST`,
    keepalive: true,
    headers: {
      "Content-Type": `application/json`,
      apikey,
      Authorization: `Bearer ${apikey}`
    },
    body: JSON.stringify(t5)
  }).then(() => void 0, () => void 0);
}
var eo = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
var to = false;
var no = (e2) => ({
  analytics_storage: e2,
  ad_storage: e2,
  ad_user_data: e2,
  ad_personalization: e2
});
function ro(e2 = true) {
  if (to || !eo() || !s.googleTagId) {
    return;
  }
  to = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag(`consent`, `default`, no(`denied`));
  window.gtag(`consent`, `update`, no(`granted`));
  window.gtag(`js`, /* @__PURE__ */ new Date());
  window.gtag(`config`, s.googleTagId, {
    send_page_view: false
  });
  let t5 = document.createElement(`script`);
  t5.async = true;
  t5.src = `https://www.googletagmanager.com/gtag/js?id=${s.googleTagId}`;
  document.head.append(t5);
  if (e2) {
    oo();
  }
}
function ao(e2, t5) {
  if (to) {
    window.gtag?.(`event`, e2, t5);
  }
}
function oo() {
  ao(`page_view`, {
    page_location: window.location.href,
    page_title: document.title
  });
}
var so = `aui_ref`;
var co = (e2) => /^[a-z0-9_-]{2,32}$/.test(e2);
function lo() {
  let e2 = document.cookie.match(/(?:^|;\s*)aui_ref=([^;]+)/);
  let t5 = e2 ? decodeURIComponent(e2[1]) : ``;
  if (co(t5)) {
    return t5;
  }
  return null;
}
function uo() {
  try {
    let e2 = document.cookie.match(/(?:^|;\s*)aui_vid=([A-Za-z0-9_-]{8,40})/);
    if (e2) {
      return e2[1];
    }
    let t5 = crypto.randomUUID().replace(/-/g, ``);
    let n7 = window.location.protocol === `https:` ? `; Secure` : ``;
    document.cookie = `aui_vid=${t5}; Max-Age=31536000; Path=/; SameSite=Lax${n7}`;
    return t5;
  } catch {
    return null;
  }
}
function fo() {
  let e2 = new URL(window.location.href);
  let t5 = (e2.searchParams.get(`ref`) ?? e2.searchParams.get(`via`) ?? ``).trim().toLowerCase();
  if (!t5) {
    return ho();
  }
  e2.searchParams.delete(`ref`);
  e2.searchParams.delete(`via`);
  window.history.replaceState(window.history.state, ``, e2.pathname + e2.search + e2.hash);
  if (!co(t5)) {
    return;
  }
  let n7 = window.location.protocol === `https:` ? `; Secure` : ``;
  document.cookie = `${so}=${encodeURIComponent(t5)}; Max-Age=2592000; Path=/; SameSite=Lax${n7}`;
  mo();
  vo(`Referral visit`, {
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
      if (sessionStorage.getItem(po)) {
        return;
      }
    } catch {
      return;
    }
    mo();
    vo(`Referral return`, {
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
var _o = (e2) => e2.replace(/[^a-zA-Z0-9 /:._-]/g, ``).trim().slice(0, 80);
function vo(e2, t5) {
  if (/^(localhost|127\.|\[::1\])/.test(window.location.hostname)) {
    return;
  }
  let p_source = t5?.from == null ? t5?.plan ?? null : _o(t5.from) || null;
  let p_detail = t5?.item == null ? t5?.seats == null ? null : `${t5.seats} seats` : _o(t5.item) || null;
  $a(`track_funnel`, {
    p_event: go[e2],
    p_source,
    p_detail,
    p_ref: lo(),
    p_vid: uo()
  });
  ao(go[e2], {
    source: p_source ?? void 0,
    detail: p_detail ?? void 0
  });
}
var yo = `affectui-style`;
var bo = /* @__PURE__ */ new Set();
function xo() {
  if (typeof window > `u`) {
    return `clean`;
  }
  let e2 = new URLSearchParams(window.location.search).get(`style`);
  if (e2 === `clean` || e2 === `classic`) {
    try {
      localStorage.setItem(yo, e2);
    } catch {
    }
    return e2;
  }
  try {
    if (localStorage.getItem(yo) === `classic`) {
      return `classic`;
    }
    return `clean`;
  } catch {
    return `clean`;
  }
}
var So = xo();
function Co(e2) {
  if (e2 !== So) {
    vo(`Style switch`, {
      from: window.location.pathname,
      item: e2
    });
    wo(e2);
  }
}
function wo(e2) {
  if (e2 === So) {
    return;
  }
  So = e2;
  try {
    localStorage.setItem(yo, e2);
  } catch {
  }
  let t5 = new URL(window.location.href);
  if (e2 === `classic`) {
    t5.searchParams.set(`style`, `classic`);
  } else {
    t5.searchParams.delete(`style`);
  }
  window.history.replaceState(window.history.state, ``, t5);
  bo.forEach((e3) => e3());
}
function useTo() {
  let [e2, setE] = b.useState(So);
  b.useEffect(() => {
    let e3 = () => setE(So);
    bo.add(e3);
    e3();
    return () => {
      bo.delete(e3);
    };
  }, []);
  return e2;
}
function Eo(e2, t5) {
  if (t5 !== `clean` || !e2.clean) {
    return e2;
  }
  let {
    Preview,
    loadSource,
    loadDocs
  } = e2.clean;
  return {
    ...e2,
    Preview,
    loadSource,
    loadDocs: loadDocs ?? e2.loadDocs,
    sourceSlug: `${e2.slug}-clean`
  };
}
var DoComponent = () => /* @__PURE__ */ jsxs("svg", { width: `16`, height: `14`, viewBox: `0 0 16 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `0.5`, y: `0.5`, width: `15`, height: `13`, rx: `3.5`, fill: `currentColor`, opacity: `0.18` }),
  /* @__PURE__ */ jsx("rect", { x: `2.5`, y: `2.5`, width: `11`, height: `6.5`, rx: `2`, fill: `var(--switch-card, #fff)`, stroke: `currentColor`, strokeOpacity: `0.35` }),
  /* @__PURE__ */ jsx("rect", { x: `9`, y: `10.4`, width: `4.5`, height: `1.6`, rx: `0.8`, fill: `currentColor`, opacity: `0.55` })
] });
var OoComponent = () => /* @__PURE__ */ jsxs("svg", { width: `16`, height: `14`, viewBox: `0 0 16 14`, "aria-hidden": `true`, children: [
  /* @__PURE__ */ jsx("rect", { x: `1.5`, y: `1.5`, width: `13`, height: `11`, rx: `2.5`, fill: `var(--switch-card, #fff)`, stroke: `currentColor`, strokeOpacity: `0.55` }),
  /* @__PURE__ */ jsx("path", { d: `M4 5h6M4 7.6h4`, stroke: `currentColor`, strokeOpacity: `0.55`, strokeLinecap: `round` })
] });
function AoComponent() {
  let e2 = useTo();
  return /* @__PURE__ */ jsx("div", { className: `stage__theme stage__style`, role: `radiogroup`, "aria-label": `Component style`, children: [[`classic`, `Classic`, /* @__PURE__ */ jsx(DoComponent, {}, `c`)], [`clean`, `Clean`, /* @__PURE__ */ jsx(OoComponent, {}, `n`)]].map(([t5, n7, r4]) => /* @__PURE__ */ jsx("button", { type: `button`, role: `radio`, "data-look": t5, "aria-checked": e2 === t5, "aria-label": `${n7} style`, title: `${n7} style`, className: `stage__theme-btn`, onClick: () => Co(t5), children: r4 }, t5)) });
}
var Io = /* @__PURE__ */ new Set();
var Lo = null;
var Ro = !a();
function zo(e2) {
  Lo = e2;
  Ro = true;
  Io.forEach((e3) => e3());
}
async function Bo(e2) {
  if (!e2) {
    return zo(null);
  }
  let {
    data
  } = await (await i()).from(`profiles`).select(`plan`).eq(`id`, e2.user.id).maybeSingle();
  zo({
    email: e2.user.email ?? ``,
    plan: data?.plan === `pro` ? `pro` : `none`
  });
}
var Vo = null;
function Ho() {
  Vo ??= i().then((e2) => {
    e2.auth.getSession().then(({
      data
    }) => Bo(data.session)).catch(() => zo(null));
    e2.auth.onAuthStateChange((e3, t5) => {
      setTimeout(() => Bo(t5), 0);
    });
    return e2;
  });
  return Vo;
}
if (a()) {
  Ho();
}
async function Uo(e2) {
  let {
    error
  } = await (await Ho()).auth.signInWithOtp({
    email: e2.trim().toLowerCase(),
    options: {
      emailRedirectTo: `${window.location.origin}/account`
    }
  });
  return error?.message ?? null;
}
async function Wo(e2, t5) {
  let {
    error
  } = await (await Ho()).auth.verifyOtp({
    email: e2.trim().toLowerCase(),
    token: t5.trim(),
    type: `email`
  });
  return error?.message ?? null;
}
async function Go(provider) {
  let {
    error
  } = await (await Ho()).auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/account`
    }
  });
  return error?.message ?? null;
}
async function R() {
  try {
    let {
      external
    } = await (await fetch(`https://sgpjbmkswbvhdsbrifpa.supabase.co/auth/v1/settings`, {
      headers: {
        apikey: `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`
      }
    })).json();
    return [`google`, `github`].filter((t5) => external?.[t5]);
  } catch {
    return [];
  }
}
async function z(e2 = false) {
  await (await Ho()).auth.signOut({
    scope: e2 ? `global` : `local`
  });
}
async function Ko() {
  let {
    data
  } = await (await Ho()).auth.getSession();
  await Bo(data.session);
  return Lo;
}
function useJo() {
  let [e2, setE] = b.useState(Lo);
  b.useEffect(() => {
    let e3 = () => setE(Lo);
    Io.add(e3);
    e3();
    return () => {
      Io.delete(e3);
    };
  }, []);
  return e2;
}
async function Xo(e2) {
  if (!e2.pro) {
    return e2.loadSource();
  }
  let {
    data
  } = await (await i()).auth.getSession();
  let n7 = data.session?.access_token;
  if (!n7) {
    throw Error(`Sign in with a Pro account to get the code.`);
  }
  let r4 = await fetch(`/api/source?slug=${encodeURIComponent(e2.sourceSlug ?? e2.slug)}`, {
    headers: {
      Authorization: `Bearer ${n7}`
    }
  });
  let i3 = await r4.json().catch(() => ({}));
  if (!r4.ok || typeof i3.source != `string`) {
    throw Error(i3.error ?? `Could not load the code.`);
  }
  return i3.source;
}
function useZo(e2, t5) {
  let [n7, setN] = b.useState(null);
  let iRef = b.useRef(e2);
  iRef.current = e2;
  let {
    pro
  } = e2;
  let o2 = e2.sourceSlug ?? e2.slug;
  b.useEffect(() => {
    setN(null);
    if (pro && !t5) {
      return;
    }
    let e3 = true;
    Xo(iRef.current).then((t6) => e3 && setN(t6)).catch((t6) => e3 && setN(`// ${t6 instanceof Error ? t6.message : `Could not load the code.`}
// Reload the page to try again, or write to us if it keeps happening.`));
    return () => {
      e3 = false;
    };
  }, [o2, pro, t5]);
  return n7;
}
function Qo(e2, p_action) {
  window.dispatchEvent(new CustomEvent(`affectui:copied`, {
    detail: e2
  }));
  if (!/^(localhost|127\.|\[::1\])/.test(window.location.hostname)) {
    $a(`track_usage`, {
      p_slug: e2,
      p_action,
      p_ref: lo()
    });
  }
}
var ss = `aui_offer`;
var cs = () => {
  try {
    let e2 = localStorage.getItem(ss);
    if (e2 === null) {
      return void 0;
    }
    return JSON.parse(e2);
  } catch {
    return;
  }
};
var V = (() => {
  let e2 = cs();
  return {
    offer: e2 === void 0 ? null : e2,
    loaded: false
  };
})();
var ls = /* @__PURE__ */ new Set();
var us = null;
function ds() {
  us ??= fetch(`/api/pricing`).then((e2) => {
    if (e2.ok) {
      return e2.json();
    }
    return null;
  }).then((e2) => {
    if (e2 && e2.offer !== void 0) {
      V = {
        offer: e2.offer,
        loaded: true
      };
      try {
        localStorage.setItem(ss, JSON.stringify(e2.offer));
      } catch {
      }
      ls.forEach((e3) => e3(V));
    }
  }).catch(() => void 0);
  return us;
}
function useFs(e2 = true) {
  let [t5, setT] = b.useState(V);
  b.useEffect(() => {
    if (e2) {
      ls.add(setT);
      setT(V);
      ds();
      return () => {
        ls.delete(setT);
      };
    }
  }, [e2]);
  return t5;
}
var ps = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
var ms = false;
function hs(e2 = true) {
  if (ms || !ps() || !s.metaPixelId) {
    return;
  }
  ms = true;
  let t5 = function(...e3) {
    if (t5.callMethod) {
      t5.callMethod(...e3);
    } else {
      t5.queue.push(e3);
    }
  };
  t5.queue = [];
  t5.push = t5;
  t5.loaded = true;
  t5.version = `2.0`;
  window.fbq = t5;
  window._fbq = window._fbq || t5;
  let n7 = document.createElement(`script`);
  n7.async = true;
  n7.src = `https://connect.facebook.net/en_US/fbevents.js`;
  document.head.append(n7);
  t5(`init`, s.metaPixelId);
  if (e2) {
    vs();
  }
}
function _s(e2, t5, eventID) {
  if (ms) {
    if (eventID) {
      window.fbq?.(`track`, e2, t5 ?? {}, {
        eventID
      });
    } else {
      window.fbq?.(`track`, e2, t5 ?? {});
    }
  }
}
function vs() {
  if (ms) {
    window.fbq?.(`track`, `PageView`);
  }
}
function ys() {
  let e2 = (e3) => document.cookie.match(RegExp(`(?:^|;\\s*)${e3}=([^;]+)`))?.[1];
  return {
    fbp: e2(`_fbp`),
    fbc: e2(`_fbc`)
  };
}
var bs = `aui_consent`;
var xs = 2;
function ws() {
  try {
    let e2 = JSON.parse(localStorage.getItem(bs) ?? `null`);
    if (e2?.v === xs && (e2.choice === `granted` || e2.choice === `denied`)) {
      return e2.choice;
    }
    return null;
  } catch {
    return null;
  }
}
function Ds() {
  if (ws() === `granted`) {
    ro(false);
    hs(false);
  }
}
var As = `aui_pending_purchase`;
var js = (item_id, price) => ({
  item_id,
  item_name: item_id === `team` ? `affectUI Team` : `affectUI Individual`,
  price,
  quantity: 1
});
function Ms(e2) {
  if (ws() === `granted`) {
    ao(`begin_checkout`, {
      currency: `USD`,
      value: e2.value,
      items: [js(e2.kind, e2.value)]
    });
    _s(`InitiateCheckout`, {
      currency: `USD`,
      value: e2.value,
      content_ids: [e2.kind],
      content_type: `product`,
      num_items: 1
    });
    try {
      localStorage.setItem(As, JSON.stringify(e2));
    } catch {
    }
  }
}
function Ns() {
  try {
    let e2 = localStorage.getItem(As);
    if (!e2) {
      return;
    }
    localStorage.removeItem(As);
    let t5 = JSON.parse(e2);
    ao(`purchase`, {
      transaction_id: t5.id,
      currency: `USD`,
      value: t5.value,
      items: [js(t5.kind, t5.value)]
    });
    _s(`Purchase`, {
      currency: `USD`,
      value: t5.value,
      content_ids: [t5.kind],
      content_type: `product`
    }, `purchase-${t5.id}`);
  } catch {
  }
}
function Ps(e2) {
  ao(`generate_lead`, {
    topic: e2
  });
  _s(`Lead`, {
    content_name: e2
  });
}
async function Fs(e2, seats = 1) {
  vo(`Checkout start`, {
    plan: e2,
    seats
  });
  let n7 = a() ? (await (await i()).auth.getSession()).data.session?.access_token : void 0;
  let i3 = await fetch(`/api/checkout`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      ...n7 ? {
        Authorization: `Bearer ${n7}`
      } : {}
    },
    body: JSON.stringify({
      kind: e2,
      seats,
      ...ws() === `granted` ? {
        ads: true,
        ...ys()
      } : {}
    })
  });
  let o2 = await i3.json().catch(() => ({}));
  if (!i3.ok || !o2.url) {
    throw Error(o2.error ?? `Checkout is not available right now.`);
  }
  if (o2.id && o2.value != null) {
    Ms({
      id: o2.id,
      value: o2.value,
      kind: e2
    });
  }
  window.location.assign(o2.url);
}
var Is = false;
function Ls() {
  if (!Is) {
    Is = true;
    fetch(`/api/checkout`, {
      method: `GET`
    }).catch(() => void 0);
    for (let href of [`https://checkout.stripe.com`, `https://js.stripe.com`, `https://m.stripe.network`]) {
      let t5 = Object.assign(document.createElement(`link`), {
        rel: `preconnect`,
        href,
        crossOrigin: ``
      });
      document.head.append(t5);
    }
  }
}
var Rs = null;
var zs = /* @__PURE__ */ new Set();
var Bs = (e2) => {
  Rs = e2;
  zs.forEach((e3) => e3());
};
var Vs = (pathname) => {
  let t5 = pathname.match(/^\/(?:components|screens|blocks|illustrations|motion)\/([a-z0-9-]+)\/?$/)?.[1];
  return Oi.find((e2) => e2.slug === t5 && e2.pro) ?? null;
};
function Hs({
  entry,
  from
}) {
  let n7 = entry ?? Vs(window.location.pathname);
  vo(`Upsell open`, {
    from,
    item: n7?.slug
  });
  Ls();
  Bs({
    entry: n7,
    from
  });
}
var JsContext = b.createContext(false);
var width = 1440;
var Xs = 900;
function ZsComponent({
  children
}) {
  let t5 = b.useContext(JsContext);
  let nRef = b.useRef(null);
  let [r4, setR] = b.useState(0);
  b.useLayoutEffect(() => {
    let nRef_current = nRef.current;
    if (!nRef_current || t5) {
      return;
    }
    let r5 = () => setR(nRef_current.clientWidth / width);
    r5();
    let a3 = new ResizeObserver(r5);
    a3.observe(nRef_current);
    return () => a3.disconnect();
  }, [t5]);
  if (t5) {
    return /* @__PURE__ */ jsx("div", { className: `screen-full`, children });
  }
  return /* @__PURE__ */ jsx("div", { ref: nRef, className: `screen-stage`, style: {
    aspectRatio: `${width} / ${Xs}`
  }, children: r4 > 0 && /* @__PURE__ */ jsx("div", { className: `screen-stage__canvas`, style: {
    width,
    height: Xs,
    transform: `scale(${r4})`
  }, children }) });
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
function ec(e2) {
  let t5 = /\/full\/?$/.test(window.location.pathname);
  let n7 = Qs.includes(e2);
  let r4 = $s[e2] ?? (n7 ? `folder` : null);
  if (!r4) {
    return;
  }
  let i3 = n7 ? `?folder=${encodeURIComponent(e2)}` : ``;
  ga(`/screens/${r4}${t5 ? `/full` : ``}${i3}`);
  window.dispatchEvent(new Event(`screen-query`));
}
function useTc() {
  let e2 = () => new URLSearchParams(window.location.search).get(`folder`) ?? void 0;
  let [t5, setT] = b.useState(e2);
  b.useEffect(() => {
    let t6 = () => setT(e2());
    window.addEventListener(`screen-query`, t6);
    window.addEventListener(`popstate`, t6);
    return () => {
      window.removeEventListener(`screen-query`, t6);
      window.removeEventListener(`popstate`, t6);
    };
  }, []);
  return t5;
}
var ic = () => {
  try {
    let e2 = localStorage.getItem(`theme`);
    if (e2 === `light` || e2 === `dark`) {
      return e2;
    }
    return `system`;
  } catch {
    return `system`;
  }
};
var ac = /* @__PURE__ */ new Set();
var oc = null;
function useSc() {
  let [e2, setE] = b.useState(() => oc ??= ic());
  b.useEffect(() => {
    ac.add(setE);
    return () => {
      ac.delete(setE);
    };
  }, []);
  b.useEffect(() => {
    let document_documentElement = document.documentElement;
    try {
      if (e2 === `system`) {
        delete document_documentElement.dataset.theme;
        localStorage.removeItem(`theme`);
      } else {
        document_documentElement.dataset.theme = e2;
        localStorage.setItem(`theme`, e2);
      }
    } catch {
    }
  }, [e2]);
  b.useEffect(() => {
    let document_documentElement = document.documentElement;
    let t5 = matchMedia(`(prefers-color-scheme: dark)`);
    let n7 = () => {
      let theme = document_documentElement.dataset.theme;
      document_documentElement.classList.toggle(`dark`, theme ? theme === `dark` : t5.matches);
    };
    n7();
    t5.addEventListener(`change`, n7);
    return () => t5.removeEventListener(`change`, n7);
  }, [e2]);
  return {
    theme: e2,
    setTheme: (e3) => {
      oc = e3;
      ac.forEach((t5) => t5(e3));
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
function Lc1Component() {
  let {
    theme,
    setTheme
  } = useSc();
  let n7 = theme === `system` ? window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` : theme;
  return /* @__PURE__ */ jsx("div", { className: `theme-switch theme-switch--top`, role: `radiogroup`, "aria-label": `Theme`, children: cc.map(({
    value,
    label,
    icon
  }) => /* @__PURE__ */ jsx("button", { role: `radio`, "aria-checked": n7 === value, "aria-label": label, className: `icon-btn`, onClick: () => setTheme(value), children: /* @__PURE__ */ jsx(J1Component, { icon, size: 14 }) }, value)) });
}
function Hc1Component({
  label = `Get Pro`,
  className = ``
}) {
  return /* @__PURE__ */ jsxs(M, { to: t3.links.pro, className: `btn pro-badge btn--pro ${className}`, onClick: (e2) => {
    vo(`Get Pro`, {
      from: window.location.pathname
    });
    if (!(e2.metaKey || e2.ctrlKey || e2.shiftKey || e2.button !== 0)) {
      e2.preventDefault();
      Hs({
        from: window.location.pathname
      });
    }
  }, children: [
    /* @__PURE__ */ jsx(J1Component, { icon: Vi, size: 14 }),
    /* @__PURE__ */ jsx("span", { children: label })
  ] });
}
function GcComponent({
  compact = false,
  label = `Source code`
}) {
  return /* @__PURE__ */ jsxs("div", { className: `locked`, "data-compact": compact || void 0, children: [
    /* @__PURE__ */ jsx("div", { className: `locked__lines`, "aria-hidden": true, children: (compact ? [62, 48, 70] : [38, 64, 52, 80, 44, 70, 58, 34, 66, 48]).map((e2, t5) => /* @__PURE__ */ jsx("span", { style: {
      width: `${e2}%`,
      marginLeft: t5 % 3 == 1 ? 24 : t5 % 3 == 2 ? 48 : 0
    } }, t5)) }),
    /* @__PURE__ */ jsxs("div", { className: `locked__body`, children: [
      /* @__PURE__ */ jsx("span", { className: `locked__icon`, children: /* @__PURE__ */ jsx(J1Component, { icon: Gi, size: compact ? 14 : 16 }) }),
      /* @__PURE__ */ jsxs("div", { className: `locked__text`, children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          label,
          ` is part of Pro`
        ] }),
        !compact && /* @__PURE__ */ jsx("span", { children: `Get Pro to copy the code, install it with the CLI and use it in your projects.` })
      ] }),
      /* @__PURE__ */ jsx(Hc1Component, { label: compact ? `Get Pro` : `Unlock with Pro` })
    ] })
  ] });
}
var wc = [];
var Tc = /* @__PURE__ */ new Set();
var Ec = [];
var Dc = 0;
var Oc = (e2) => {
  wc = e2;
  Tc.forEach((e3) => e3());
};
var kc = (e2) => {
  Tc.add(e2);
  return () => {
    Tc.delete(e2);
  };
};
var Ac = () => wc;
var jc = () => Ec;
function Mc(type, title, {
  id,
  ...rest
} = {}, r4 = false) {
  let o2 = id === void 0 ? void 0 : wc.find((e2) => e2.id === id && !e2.removing);
  if (o2) {
    Oc(wc.map((n7) => {
      if (n7 === o2) {
        return {
          ...n7,
          ...rest,
          type,
          title,
          version: n7.version + 1
        };
      }
      return n7;
    }));
    return o2.id;
  }
  let s2 = id ?? `toast-${++Dc}`;
  if (!r4) {
    Oc([...wc.filter((e2) => e2.id !== s2), {
      ...rest,
      id: s2,
      type,
      title,
      version: 0
    }]);
  }
  return s2;
}
var Nc = 420;
function dismiss(e2) {
  let t5 = wc.filter((t6) => !t6.removing && (e2 === void 0 || t6.id === e2));
  if (t5.length) {
    Oc(wc.map((e3) => {
      if (t5.includes(e3)) {
        return {
          ...e3,
          removing: true
        };
      }
      return e3;
    }));
    t5.forEach((e3) => e3.onDismiss?.(e3.id));
    window.setTimeout(() => Oc(wc.filter((e3) => !(e3.removing && t5.some((t6) => t6.id === e3.id)))), Nc);
  }
}
var Fc = (title) => typeof title == `object` && !!title && !b.isValidElement(title) && !Array.isArray(title) && `title` in title;
var Ic = (title) => {
  if (Fc(title)) {
    return title;
  }
  return {
    title,
    description: void 0
  };
};
function promise(e2, t5, n7 = {}) {
  let r4 = typeof e2 == `function` ? e2() : e2;
  let i3 = Ic(t5.loading);
  let id = Mc(`loading`, i3.title, {
    ...n7,
    description: i3.description
  });
  let o2 = (e3, t6) => {
    let r5 = Ic(t6);
    Mc(e3, r5.title, {
      ...n7,
      id,
      description: r5.description
    }, true);
  };
  r4.then((e3) => o2(`success`, typeof t5.success == `function` ? t5.success(e3) : t5.success), (e3) => o2(`error`, typeof t5.error == `function` ? t5.error(e3) : t5.error));
  return r4;
}
var Rc = Object.assign((e2, t5) => Mc(`default`, e2, t5), {
  success: (e2, t5) => Mc(`success`, e2, t5),
  error: (e2, t5) => Mc(`error`, e2, t5),
  info: (e2, t5) => Mc(`info`, e2, t5),
  loading: (e2, t5) => Mc(`loading`, e2, t5),
  promise,
  dismiss
});
function Zc1Component() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 24 24`, className: `ui-ts__status`, "aria-hidden": `true`, children: [
    /* @__PURE__ */ jsx("g", { className: `ui-ts__spin`, children: /* @__PURE__ */ jsx("circle", { className: `ui-ts__ring`, cx: `12`, cy: `12`, r: `9.25`, pathLength: 1 }) }),
    /* @__PURE__ */ jsx("path", { className: `ui-ts__mark ui-ts__check`, d: `M8.3 12.4l2.5 2.5 4.9-5.3`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-ts__mark ui-ts__x1`, d: `M9.5 9.5l5 5`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-ts__mark ui-ts__x2`, d: `M14.5 9.5l-5 5`, pathLength: 1 }),
    /* @__PURE__ */ jsx("path", { className: `ui-ts__info`, d: `M12 11.2v4.6M12 8.2h.01` })
  ] });
}
var BcComponent = () => /* @__PURE__ */ jsx("svg", { viewBox: `0 0 24 24`, className: `ui-ts__glyph`, "aria-hidden": `true`, children: /* @__PURE__ */ jsx("path", { d: `M7.5 7.5l9 9M16.5 7.5l-9 9` }) });
var Vc = (e2) => String(e2.id);
function HcComponent({
  t: t_1,
  layout,
  edge,
  paused,
  defaultDuration,
  hairline,
  closeButton,
  onHeight
}) {
  let [c, setC] = b.useState(false);
  let [u, setU] = b.useState(false);
  let [f, setF] = b.useState(null);
  let mRef = b.useRef(null);
  let hRef = b.useRef(null);
  let gRef = b.useRef({
    title: t_1.title,
    description: t_1.description,
    version: t_1.version
  });
  let _RefRef = b.useRef(0);
  let vRef = b.useRef({
    version: -1,
    left: 0
  });
  let yRef = b.useRef(null);
  let eeRef = b.useRef(false);
  let x = !!t_1.removing;
  b.useEffect(() => {
    let e2 = requestAnimationFrame(() => requestAnimationFrame(() => setC(true)));
    return () => cancelAnimationFrame(e2);
  }, []);
  b.useLayoutEffect(() => {
    let mRef_current = mRef.current;
    if (!mRef_current) {
      return;
    }
    let n7 = Vc(t_1);
    let r4 = () => onHeight(n7, mRef_current.offsetHeight);
    r4();
    let i3 = new ResizeObserver(r4);
    i3.observe(mRef_current);
    return () => i3.disconnect();
  }, []);
  b.useLayoutEffect(() => {
    let gRef_current = gRef.current;
    if (gRef_current.version !== t_1.version) {
      gRef.current = {
        title: t_1.title,
        description: t_1.description,
        version: t_1.version
      };
      if (gRef_current.title !== t_1.title || gRef_current.description !== t_1.description) {
        setF(gRef_current);
        window.clearTimeout(_RefRef.current);
        _RefRef.current = window.setTimeout(() => setF(null), 320);
      }
    }
  }, [t_1.version]);
  b.useEffect(() => () => window.clearTimeout(_RefRef.current), []);
  let left = t_1.duration ?? defaultDuration;
  let ne = t_1.type !== `loading` && Number.isFinite(left);
  let re = ne && !paused && !u && !x;
  b.useEffect(() => {
    if (vRef.current.version !== t_1.version) {
      vRef.current = {
        version: t_1.version,
        left
      };
    }
    if (!re) {
      return;
    }
    let t_1_version = t_1.version;
    let n7 = Date.now();
    let r4 = window.setTimeout(() => dismiss(t_1.id), Math.max(0, vRef.current.left));
    return () => {
      window.clearTimeout(r4);
      if (vRef.current.version === t_1_version) {
        vRef.current.left -= Date.now() - n7;
      }
    };
  }, [re, t_1.version, left, t_1.id]);
  let onPointerDown = (e2) => {
    if (!(e2.button !== 0 || x || e2.target.closest(`button, a, input, textarea, select`))) {
      yRef.current = {
        pointer: e2.pointerId,
        x: e2.clientX,
        y: e2.clientY,
        axis: null,
        samples: []
      };
      eeRef.current = false;
    }
  };
  let onPointerMove = (e2) => {
    let yRef_current = yRef.current;
    let hRef_current = hRef.current;
    if (!yRef_current || yRef_current.pointer !== e2.pointerId || !hRef_current) {
      return;
    }
    let i3 = e2.clientX - yRef_current.x;
    let a3 = e2.clientY - yRef_current.y;
    if (!yRef_current.axis) {
      if (Math.hypot(i3, a3) < 6) {
        return;
      }
      yRef_current.axis = Math.abs(i3) > Math.abs(a3) ? `x` : `y`;
      e2.currentTarget.setPointerCapture(e2.pointerId);
      eeRef.current = true;
      setU(true);
      hRef_current.style.transition = `none`;
    }
    let o2 = yRef_current.axis === `x` ? i3 : a3;
    let s2 = yRef_current.axis === `x` || o2 * edge > 0;
    if (!s2) {
      o2 = Math.sign(o2) * Math.abs(o2) ** 0.7 * 0.6;
    }
    let c2 = yRef_current.axis === `x` ? hRef_current.offsetWidth : hRef_current.offsetHeight * 2;
    hRef_current.style.transform = yRef_current.axis === `x` ? `translateX(${o2}px)` : `translateY(${o2}px)`;
    hRef_current.style.opacity = s2 ? String(Math.max(0.25, 1 - Math.abs(o2) / (c2 * 1.1))) : ``;
    yRef_current.samples.push({
      v: o2,
      at: e2.timeStamp
    });
    if (yRef_current.samples.length > 6) {
      yRef_current.samples.shift();
    }
  };
  let ae = (t5) => {
    let yRef_current = yRef.current;
    let hRef_current = hRef.current;
    if (!yRef_current || yRef_current.pointer !== t5.pointerId || (yRef.current = null, !yRef_current.axis || !hRef_current)) {
      return;
    }
    setU(false);
    let a3 = yRef_current.samples[yRef_current.samples.length - 1] ?? {
      v: 0,
      at: 0
    };
    let o2 = yRef_current.samples[0] ?? a3;
    let s2 = a3.at > o2.at ? (a3.v - o2.v) / (a3.at - o2.at) : 0;
    let c2 = yRef_current.axis === `x` || a3.v * edge > 0;
    let l = Math.abs(s2) > 0.45 && Math.sign(s2) === Math.sign(a3.v);
    if (t5.type === `pointerup` && c2 && (Math.abs(a3.v) > 64 || l)) {
      let t6 = (yRef_current.axis === `x` ? hRef_current.offsetWidth : hRef_current.offsetHeight) + 48;
      hRef_current.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`;
      hRef_current.style.transform = `${yRef_current.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a3.v) * t6}px)`;
      hRef_current.style.opacity = `0`;
      dismiss(t_1.id);
    } else {
      hRef_current.style.transition = ``;
      hRef_current.style.transform = ``;
      hRef_current.style.opacity = ``;
    }
  };
  let oe = -edge;
  let transform = `translateY(${oe * layout.y}px) scale(${layout.scale})`;
  if (!c) {
    transform = `translateY(${edge * 100}%) scale(${layout.scale})`;
  }
  if (x) {
    transform = `translateY(${oe * layout.y + edge * 10}px) scale(${layout.scale * 0.96})`;
  }
  let ce = t_1.type === `loading` ? /* @__PURE__ */ jsx(Zc1Component, {}) : t_1.icon ?? (t_1.type === "default" ? null : /* @__PURE__ */ jsx(Zc1Component, {}));
  return /* @__PURE__ */ jsx("li", { className: `ui-ts__toast`, "data-toast-id": Vc(t_1), "data-type": t_1.type, "data-behind": layout.behind || void 0, "data-removing": x || void 0, "data-swiping": u || void 0, tabIndex: 0, inert: layout.hidden || x, style: {
    transform,
    opacity: !c || x || layout.hidden ? 0 : 1,
    height: layout.height ? `${layout.height}px` : void 0,
    zIndex: layout.z
  }, onPointerDown, onPointerMove, onPointerUp: ae, onPointerCancel: ae, onClickCapture: (e2) => {
    if (eeRef.current) {
      eeRef.current = false;
      e2.stopPropagation();
      e2.preventDefault();
    }
  }, children: /* @__PURE__ */ jsxs("div", { ref: hRef, className: `ui-ts__swipe`, children: [
    /* @__PURE__ */ jsxs("div", { className: `ui-ts__card`, children: [
      /* @__PURE__ */ jsxs("div", { ref: mRef, className: `ui-ts__content`, "data-action": t_1.action ? `` : void 0, children: [
        ce && /* @__PURE__ */ jsx("span", { className: `ui-ts__icon`, "data-type": t_1.icon && t_1.type !== `loading` ? `custom` : t_1.type, children: ce }),
        /* @__PURE__ */ jsxs("div", { className: `ui-ts__text`, children: [
          /* @__PURE__ */ jsxs("div", { className: `ui-ts__copy`, "data-changed": t_1.version > 0 || void 0, children: [
            /* @__PURE__ */ jsx("div", { className: `ui-ts__title`, children: t_1.title }),
            t_1.description != null && t_1.description !== `` && /* @__PURE__ */ jsx("div", { className: `ui-ts__desc`, children: t_1.description })
          ] }, t_1.version),
          f && /* @__PURE__ */ jsxs("div", { className: `ui-ts__copy ui-ts__ghost`, "aria-hidden": `true`, children: [
            /* @__PURE__ */ jsx("div", { className: `ui-ts__title`, children: f.title }),
            f.description != null && f.description !== `` && /* @__PURE__ */ jsx("div", { className: `ui-ts__desc`, children: f.description })
          ] }, `ghost-${f.version}`)
        ] }),
        t_1.action && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ts__action`, onClick: (t5) => {
          t_1.action.onClick(t5);
          if (!t5.defaultPrevented) {
            dismiss(t_1.id);
          }
        }, children: t_1.action.label })
      ] }),
      hairline && ne && /* @__PURE__ */ jsx("span", { className: `ui-ts__timer`, "aria-hidden": `true`, style: {
        animationDuration: `${left}ms`,
        animationPlayState: re ? `running` : `paused`
      } }, t_1.version)
    ] }),
    closeButton && /* @__PURE__ */ jsx("button", { type: `button`, className: `ui-ts__close`, "aria-label": `Dismiss notification`, onClick: () => dismiss(t_1.id), children: /* @__PURE__ */ jsx(BcComponent, {}) })
  ] }) });
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
function KcComponent({
  position = `bottom-right`,
  inline = false,
  id,
  duration = 4e3,
  visibleToasts = 3,
  expand = false,
  offset,
  gap = 10,
  hotkey = `F8`,
  hairline = true,
  closeButton = true,
  label = `Notifications`,
  className
}) {
  let p = b.useSyncExternalStore(kc, Ac, jc);
  let [m2, setM] = b.useState({});
  let [g2, setG] = b.useState(false);
  let [v2, setV] = b.useState(false);
  let [ee, setEe] = b.useState(false);
  let [te, setTe] = b.useState(false);
  let [re, setRe] = b.useState(``);
  let [S, setS] = b.useState(``);
  let oeRef = b.useRef(null);
  let seRef = b.useRef(/* @__PURE__ */ new Map());
  let ceRef = b.useRef(0);
  let leRef = b.useRef(null);
  let ueRef = b.useRef(`mouse`);
  let deRef = b.useRef(/* @__PURE__ */ new Map());
  let [fe, pe] = position.split(`-`);
  let edge = fe === `bottom` ? 1 : -1;
  let he2 = p.filter((e2) => (e2.toaster ?? null) === (id ?? null)).reverse();
  let C2 = he2.filter((e2) => !e2.removing);
  let ge2 = expand || g2 || v2 || ee;
  let _e2 = g2 || v2 || ee || te;
  let ve2 = Math.max(1, visibleToasts);
  let onHeight = b.useCallback((e2, t5) => {
    setM((n7) => {
      if (n7[e2] === t5) {
        return n7;
      }
      return {
        ...n7,
        [e2]: t5
      };
    });
  }, []);
  let be2 = C2[0] && m2[Vc(C2[0])] || ceRef.current;
  if (be2) {
    ceRef.current = be2;
  }
  let xe2 = /* @__PURE__ */ new Map();
  let y_1 = 0;
  C2.forEach((e2, t5) => {
    let n7 = m2[Vc(e2)] ?? 0;
    let r4 = Math.min(t5, ve2 - 1);
    let i3 = ge2 ? {
      y: y_1,
      scale: 1,
      height: n7,
      z: C2.length - t5,
      behind: false,
      hidden: t5 >= ve2
    } : {
      y: r4 * Uc,
      scale: 1 - r4 * Wc,
      height: t5 === 0 ? n7 : be2,
      z: C2.length - t5,
      behind: t5 > 0,
      hidden: t5 >= ve2
    };
    if (t5 < ve2) {
      y_1 += n7 + gap;
    }
    xe2.set(Vc(e2), i3);
    seRef.current.set(Vc(e2), i3);
  });
  let Ce2 = Math.min(C2.length, ve2);
  let we2 = C2.length ? ge2 ? Math.max(0, y_1 - gap) : be2 + Uc * (Ce2 - 1) : 0;
  b.useEffect(() => {
    let e2 = new Set(he2.map(Vc));
    setM((t5) => {
      let n7 = Object.keys(t5).filter((t6) => !e2.has(t6));
      if (!n7.length) {
        return t5;
      }
      let r4 = {
        ...t5
      };
      n7.forEach((e3) => delete r4[e3]);
      return r4;
    });
    seRef.current.forEach((t5, n7) => !e2.has(n7) && seRef.current.delete(n7));
    if (!C2.length) {
      setEe(false);
    }
  }, [p]);
  b.useEffect(() => {
    let oeRef_current = oeRef.current;
    if (oeRef_current) {
      C2.forEach((t5) => {
        let n7 = Vc(t5);
        if (deRef.current.get(n7) === t5.version) {
          return;
        }
        deRef.current.set(n7, t5.version);
        let r4 = Array.from(oeRef_current.querySelectorAll(`[data-toast-id]`)).find((e2) => e2.dataset.toastId === n7)?.querySelector(`.ui-ts__copy:not(.ui-ts__ghost)`)?.textContent?.trim();
        if (r4) {
          (t5.type === `error` ? setS : setRe)((e2) => {
            if (e2 === r4) {
              return `${r4}\xA0`;
            }
            return r4;
          });
        }
      });
      deRef.current.forEach((e2, t5) => !he2.some((e3) => Vc(e3) === t5) && deRef.current.delete(t5));
    }
  }, [p]);
  b.useEffect(() => {
    let e2 = () => setTe(document.visibilityState === `hidden`);
    e2();
    document.addEventListener(`visibilitychange`, e2);
    return () => document.removeEventListener(`visibilitychange`, e2);
  }, []);
  b.useEffect(() => {
    if (!ee) {
      return;
    }
    let e2 = (e3) => {
      if (!oeRef.current?.contains(e3.target)) {
        setEe(false);
      }
    };
    document.addEventListener(`pointerdown`, e2);
    return () => document.removeEventListener(`pointerdown`, e2);
  }, [ee]);
  let Te2 = () => Array.from(oeRef.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
  b.useEffect(() => {
    if (!hotkey) {
      return;
    }
    let e2 = (e3) => {
      if (e3.key !== hotkey && e3.code !== hotkey) {
        return;
      }
      let t5 = Te2().find((e4) => !e4.inert);
      if (t5) {
        e3.preventDefault();
        if (!oeRef.current?.contains(document.activeElement)) {
          leRef.current = document.activeElement;
        }
        t5.focus();
      }
    };
    window.addEventListener(`keydown`, e2);
    return () => window.removeEventListener(`keydown`, e2);
  }, [hotkey]);
  let onKeyDown = (e2) => {
    if (e2.key !== `Escape` || !C2.length) {
      return;
    }
    e2.preventDefault();
    e2.stopPropagation();
    let t5 = e2.target.closest(`[data-toast-id]`);
    let n7 = C2.find((e3) => Vc(e3) === t5?.dataset.toastId) ?? C2[0];
    let r4 = C2.indexOf(n7);
    dismiss(n7.id);
    let i3 = C2.filter((e3) => e3 !== n7)[Math.min(r4, C2.length - 2)];
    let a3 = i3 && Te2().find((e3) => e3.dataset.toastId === Vc(i3));
    if (a3) {
      a3.focus();
    } else if (leRef.current?.isConnected) {
      leRef.current.focus();
    } else {
      document.activeElement?.blur();
    }
  };
  let onFocus = (e2) => {
    if (e2.target.matches(`:focus-visible`)) {
      setV(true);
    }
  };
  let onBlur = (e2) => {
    if (!e2.currentTarget.contains(e2.relatedTarget)) {
      setV(false);
    }
  };
  let style_1 = {
    "--ui-ts-offset": offset === void 0 ? void 0 : `${offset}px`
  };
  return /* @__PURE__ */ jsxs("section", { ref: oeRef, className: [`ui-ts`, className].filter(Boolean).join(` `), "data-y": fe, "data-x": pe, "data-inline": inline || void 0, "data-expanded": ge2 || void 0, "data-empty": !C2.length || void 0, "aria-label": hotkey ? `${label} (${hotkey})` : label, tabIndex: -1, style: style_1, onKeyDown, onFocus, onBlur, onPointerDownCapture: (e2) => ueRef.current = e2.pointerType, onPointerEnter: (e2) => e2.pointerType === `mouse` && setG(true), onPointerLeave: (e2) => e2.pointerType === `mouse` && setG(false), onClick: () => ueRef.current !== `mouse` && C2.length > 1 && setEe(true), children: [
    /* @__PURE__ */ jsx("style", { href: `ui-toaster`, precedence: `default`, children: qc }),
    /* @__PURE__ */ jsx("ol", { className: `ui-ts__list`, style: {
      height: `${we2}px`
    }, children: he2.map((t_5) => /* @__PURE__ */ jsx(HcComponent, { t: t_5, layout: xe2.get(Vc(t_5)) ?? seRef.current.get(Vc(t_5)) ?? Gc, edge, paused: _e2 || (xe2.get(Vc(t_5))?.hidden ?? false), defaultDuration: duration, hairline, closeButton, onHeight }, Vc(t_5))) }),
    /* @__PURE__ */ jsx("div", { className: `ui-ts__sr`, role: `status`, "aria-live": `polite`, children: re }),
    /* @__PURE__ */ jsx("div", { className: `ui-ts__sr`, role: `alert`, children: S })
  ] });
}
var qc = `.ui-ts{--ui-ts-card: #ffffff;--ui-ts-line: #ececec;--ui-ts-ink: #171717;--ui-ts-text: #404040;--ui-ts-muted: #8f8f8f;--ui-ts-faint: #b5b5b5;--ui-ts-button: #f0f0f0;--ui-ts-button-hover: #e6e6e7;--ui-ts-hairline: rgba(23, 23, 23, 0.14);--ui-ts-success: #2f9e5b;--ui-ts-danger: #e5484d;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -6px rgba(0, 0, 0, 0.1);--ui-ts-focus: rgba(23, 23, 23, 0.22);--ui-ts-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-ts-width: 356px;--ui-ts-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;width: var(--ui-ts-width);max-width: calc(100% - 2 * var(--ui-ts-offset));margin: 0;padding: 0;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-ts-text);-webkit-font-smoothing: antialiased;outline: none}.ui-ts[data-inline]{position: absolute;z-index: 20;--ui-ts-offset: 20px}.ui-ts[data-empty]{pointer-events: none}.ui-ts *, .ui-ts *::before, .ui-ts *::after{box-sizing: border-box}:where(.ui-ts) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-ts) svg{display: block;flex: none}.ui-ts button:focus-visible{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts[data-y="bottom"]{bottom: var(--ui-ts-offset)}.ui-ts[data-y="top"]{top: var(--ui-ts-offset)}.ui-ts[data-x="right"]{right: var(--ui-ts-offset)}.ui-ts[data-x="left"]{left: var(--ui-ts-offset)}.ui-ts[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-ts-offset), env(safe-area-inset-bottom))}.ui-ts__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-ts__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-ts-ease), opacity 320ms ease, height 380ms var(--ui-ts-ease)}.ui-ts[data-y="bottom"] .ui-ts__toast{bottom: 0;transform-origin: 50% 0}.ui-ts[data-y="top"] .ui-ts__toast{top: 0;transform-origin: 50% 100%}.ui-ts__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-ts-ease), opacity 260ms ease, height 380ms var(--ui-ts-ease)}.ui-ts__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-ts__toast[data-swiping]{cursor: grabbing}.ui-ts__card{position: relative;height: 100%;overflow: hidden;border-radius: 14px;background: var(--ui-ts-card);box-shadow: var(--ui-ts-shadow)}.ui-ts__toast:focus-visible .ui-ts__card{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts__content{display: flex;align-items: flex-start;gap: 10px;padding: 14px;transition: opacity 260ms ease}.ui-ts__content[data-action]{padding-right: 10px}.ui-ts__toast[data-behind] .ui-ts__content, .ui-ts__toast[data-behind] .ui-ts__timer{opacity: 0}.ui-ts__text{position: relative;flex: 1;min-width: 0}.ui-ts__title{color: var(--ui-ts-ink);font-weight: 500;line-height: 20px;overflow-wrap: anywhere}.ui-ts__desc{margin-top: 1px;font-size: 13px;line-height: 18px;color: var(--ui-ts-muted);overflow-wrap: anywhere}.ui-ts__copy[data-changed]{animation: ui-ts-text-in 300ms var(--ui-ts-ease) both}.ui-ts__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-ts-text-out 220ms ease both}.ui-ts__icon{display: grid;place-items: center;flex: none;width: 20px;height: 20px;color: var(--ui-ts-muted);transition: color 300ms ease}.ui-ts__icon[data-type="success"]{color: var(--ui-ts-success)}.ui-ts__icon[data-type="error"]{color: var(--ui-ts-danger)}.ui-ts__icon[data-type="info"]{color: var(--ui-ts-ink)}.ui-ts__icon[data-type="custom"] > *{width: 18px;height: 18px}.ui-ts__status{width: 18px;height: 18px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-ts__icon[data-type="success"] .ui-ts__status, .ui-ts__icon[data-type="error"] .ui-ts__status{animation: ui-ts-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-ts__spin{transform-box: fill-box;transform-origin: center;animation: ui-ts-spin 760ms linear infinite;animation-play-state: paused}.ui-ts__icon[data-type="loading"] .ui-ts__spin{animation-play-state: running}.ui-ts__ring{stroke-dasharray: 1 0;stroke-opacity: 0.28;transition: stroke-dasharray 560ms var(--ui-ts-ease), stroke-opacity 360ms ease}.ui-ts__icon[data-type="loading"] .ui-ts__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-ts__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-ts__info{opacity: 0;transition: opacity 240ms ease}.ui-ts__icon[data-type="success"] .ui-ts__check, .ui-ts__icon[data-type="error"] .ui-ts__x1, .ui-ts__icon[data-type="error"] .ui-ts__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-ts-draw 340ms var(--ui-ts-ease) 160ms both}.ui-ts__icon[data-type="error"] .ui-ts__x2{animation-delay: 260ms}.ui-ts__icon[data-type="info"] .ui-ts__info{opacity: 1}.ui-ts__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 8px;background: var(--ui-ts-button);font-size: 12.5px;font-weight: 500;color: var(--ui-ts-ink);white-space: nowrap;transition: background-color 160ms ease}.ui-ts__action:hover{background: var(--ui-ts-button-hover)}.ui-ts__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-ts-card);box-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 3px rgba(0, 0, 0, 0.08);color: var(--ui-ts-muted);opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-ts-ease), color 160ms ease}.ui-ts__close::before{content: "";position: absolute;inset: -6px}.ui-ts__close:hover{color: var(--ui-ts-ink)}.ui-ts__toast:not([data-behind]):hover .ui-ts__close, .ui-ts__toast:not([data-behind]):focus-within .ui-ts__close{opacity: 1;transform: none}.ui-ts__glyph{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round}.ui-ts__timer{position: absolute;left: 14px;right: 14px;bottom: 0;height: 1px;background: var(--ui-ts-hairline);transform-origin: left;animation-name: ui-ts-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-ts__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-ts-spin{to{transform: rotate(360deg)}}@keyframes ui-ts-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-ts-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-ts-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-ts-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-ts-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@media (max-width: 600px){.ui-ts, .ui-ts[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-ts[data-y="bottom"]{bottom: 12px}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-ts[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-ts__toast:not([data-behind]) .ui-ts__close{opacity: 1;transform: none}.ui-ts__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-ts__close::before{inset: -8px}.ui-ts__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px;border-radius: 10px;font-size: 13px}}@media (prefers-reduced-motion: reduce){.ui-ts *:not(.ui-ts__spin):not(.ui-ts__timer), .ui-ts *::before, .ui-ts *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ts{--ui-ts-card: #19191b;--ui-ts-line: #2a2a2e;--ui-ts-ink: #ededed;--ui-ts-text: #c8c8cc;--ui-ts-muted: #8b8b92;--ui-ts-faint: #5c5c63;--ui-ts-button: #26262a;--ui-ts-button-hover: #2e2e33;--ui-ts-hairline: rgba(255, 255, 255, 0.16);--ui-ts-success: #4cc38a;--ui-ts-danger: #ff6369;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.3), 0 10px 28px -6px rgba(0, 0, 0, 0.5);--ui-ts-focus: rgba(255, 255, 255, 0.3)}`;
function QcComponent({
  faqs: faqs2,
  defaultOpen = 0
}) {
  let [n7, setN] = b.useState(defaultOpen);
  return /* @__PURE__ */ jsx("div", { className: `faq__list`, children: faqs2.map((e2, t5) => {
    let i3 = n7 === t5;
    let a3 = `faq-a-${t5}`;
    return /* @__PURE__ */ jsxs("div", { className: `faq__item`, "data-open": i3 || void 0, children: [
      /* @__PURE__ */ jsxs("button", { className: `faq__q`, "aria-expanded": i3, "aria-controls": a3, onClick: () => setN(i3 ? null : t5), children: [
        e2.q,
        /* @__PURE__ */ jsx(J1Component, { icon: Fi, size: 16 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `faq__panel`, id: a3, inert: !i3, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: `faq__a`, children: e2.a }) }) })
    ] }, e2.q);
  }) });
}
var d_1 = `M38 0H176Q196 0 204 14L218 30Q224 38 246 38H562Q600 38 600 76V462Q600 500 562 500H38Q0 500 0 462V38Q0 0 38 0Z`;
var el = [78, 180, 140, 175, 126, 168, 110];
function Tl1Component({
  className,
  label = `Blue folder holding three documents behind a frosted front pocket`
}) {
  let n7 = `ui-fd` + b.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return /* @__PURE__ */ jsxs("div", { className: [`ui-fd`, className].filter(Boolean).join(` `), role: `img`, "aria-label": label, children: [
    /* @__PURE__ */ jsx("style", { href: `ui-glass-folder`, precedence: `default`, children: nl }),
    /* @__PURE__ */ jsxs("div", { className: `ui-fd-icon`, "aria-hidden": `true`, children: [
      /* @__PURE__ */ jsxs("svg", { className: `ui-fd-layer ui-fd-back`, viewBox: `0 0 600 500`, children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: `${n7}-hl`, x: `-10%`, y: `-10%`, width: `120%`, height: `120%`, children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { in: `SourceAlpha`, stdDeviation: `4`, result: `blur` }),
          /* @__PURE__ */ jsx("feOffset", { in: `blur`, dy: `3`, result: `offset` }),
          /* @__PURE__ */ jsx("feComposite", { in: `blur`, in2: `offset`, operator: `arithmetic`, k2: `1`, k3: `-1`, result: `diff` }),
          /* @__PURE__ */ jsx("feFlood", { floodColor: `#fff`, floodOpacity: `0.65` }),
          /* @__PURE__ */ jsx("feComposite", { in2: `diff`, operator: `in`, result: `light` }),
          /* @__PURE__ */ jsx("feComposite", { in: `light`, in2: `SourceAlpha`, operator: `in` })
        ] }) }),
        /* @__PURE__ */ jsx("path", { className: `ui-fd-back-fill`, d: d_1, fill: `#5bb7ea` }),
        /* @__PURE__ */ jsx("path", { d: d_1, fill: `#000`, filter: `url(#${n7}-hl)` })
      ] }),
      /* @__PURE__ */ jsxs("svg", { className: `ui-fd-layer`, viewBox: `0 0 600 500`, children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: `${n7}-paper`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [
            /* @__PURE__ */ jsx("stop", { className: `ui-fd-paper-top`, offset: `0%`, stopColor: `#fff` }),
            /* @__PURE__ */ jsx("stop", { className: `ui-fd-paper-bottom`, offset: `100%`, stopColor: `#eaf2f8` })
          ] }),
          /* @__PURE__ */ jsxs("symbol", { id: `${n7}-doc`, overflow: `visible`, children: [
            /* @__PURE__ */ jsx("rect", { className: `ui-fd-paper`, x: `0.6`, y: `0.6`, width: `278.8`, height: `348.8`, rx: `19.4`, fill: `url(#${n7}-paper)`, stroke: `rgba(0,0,0,0.12)`, strokeWidth: `1.2` }),
            el.map((width2, t5) => /* @__PURE__ */ jsx("rect", { className: `ui-fd-line`, x: `30`, y: 87 + t5 * 28, width: width2, height: `9`, rx: `4.5`, fill: `rgba(0,0,0,0.12)` }, t5))
          ] })
        ] }),
        /* @__PURE__ */ jsx("use", { className: `ui-fd-doc ui-fd-doc--left`, href: `#${n7}-doc` }),
        /* @__PURE__ */ jsx("use", { className: `ui-fd-doc ui-fd-doc--right`, href: `#${n7}-doc` }),
        /* @__PURE__ */ jsx("use", { className: `ui-fd-doc ui-fd-doc--middle`, href: `#${n7}-doc` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `ui-fd-front` })
    ] })
  ] });
}
var nl = `.ui-fd{--ui-fd-ease: cubic-bezier(0.2, 0.85, 0.25, 1);position: relative;width: 100%;aspect-ratio: 3 / 2;overflow: hidden;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif}.ui-fd-icon{position: absolute;left: 50%;top: 50%;width: 40%;aspect-ratio: 6 / 5;container-type: inline-size;perspective: 220cqw;perspective-origin: 50% 60%;transform: translate(-50%, -48%);transition: transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover{transform: translate(-50%, -48%) scale(1.03)}.ui-fd-layer{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible}.ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(60, 130, 180, 0.28)) drop-shadow(0 1.3cqw 2cqw rgba(60, 130, 180, 0.16)) drop-shadow(0 0.3cqw 0.7cqw rgba(60, 130, 180, 0.1))}.ui-fd-doc{transform-box: fill-box;transform-origin: center;filter: drop-shadow(0 3px 4px rgba(0, 30, 60, 0.18));transition: transform 0.55s var(--ui-fd-ease)}.ui-fd-doc--left{transform: translate(40px, 80px) rotate(6deg)}.ui-fd-doc--right{transform: translate(280px, 80px) rotate(6deg)}.ui-fd-doc--middle{transform: translate(160px, 66px) rotate(-4deg)}.ui-fd-icon:hover .ui-fd-doc--left{transform: translate(32px, 70px) rotate(9deg)}.ui-fd-icon:hover .ui-fd-doc--right{transform: translate(286px, 76px) rotate(5deg)}.ui-fd-icon:hover .ui-fd-doc--middle{transform: translate(166px, 52px) rotate(-7deg)}.ui-fd-front{position: absolute;inset: 21.6% 0 0;border-radius: 6.333cqw;background: linear-gradient(180deg, rgba(0, 40, 75, 0) 74%, rgba(0, 40, 75, 0.28) 100%), linear-gradient(180deg, rgba(132, 214, 248, 0.45) 0%, rgba(69, 170, 220, 0.45) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.3), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.55);-webkit-backdrop-filter: blur(3.3cqw) saturate(1.1);backdrop-filter: blur(3.3cqw) saturate(1.1);transform-origin: 50% 100%;transition: top 0.6s var(--ui-fd-ease), border-radius 0.6s var(--ui-fd-ease), transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover .ui-fd-front{top: 24.8%;border-radius: 3cqw 3cqw 6.333cqw 6.333cqw;transform: translateZ(2.33cqw) rotateX(-9deg)}:where(.dark, [data-theme="dark"]) .ui-fd-back-fill{fill: #3d8fc6}:where(.dark, [data-theme="dark"]) .ui-fd-paper-top{stop-color: #34363c}:where(.dark, [data-theme="dark"]) .ui-fd-paper-bottom{stop-color: #26292f}:where(.dark, [data-theme="dark"]) .ui-fd-paper{stroke: rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-fd-line{fill: rgba(255, 255, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(0, 0, 0, 0.45)) drop-shadow(0 1.3cqw 2cqw rgba(0, 0, 0, 0.3))}:where(.dark, [data-theme="dark"]) .ui-fd-doc{filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.45))}:where(.dark, [data-theme="dark"]) .ui-fd-front{background: linear-gradient(180deg, rgba(0, 20, 40, 0) 70%, rgba(0, 20, 40, 0.4) 100%), linear-gradient(180deg, rgba(100, 190, 235, 0.42) 0%, rgba(45, 130, 190, 0.5) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.14), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.3)}@media (prefers-reduced-motion: reduce){.ui-fd-icon, .ui-fd-doc, .ui-fd-front{transition: none}}`;
var Rl1 = b.lazy(() => r(() => import("./component-WEwHkvy1-MXVZG4IA.js").then((e2) => ({
  default: e2.IntegrationGrid
})), __vite__mapDeps([231, 3, 2])));
var cl = `claude mcp add --transport http affectui ${`${t3.url}/api/mcp`}`;
var dl = [`agent-run`, `agent-chat`, `evals`, `analytics`, `crm`, `settings-billing`].map((e2) => Di.find((t5) => t5.slug === e2)).filter((e2) => e2 !== void 0);
var Gl1 = b.lazy(() => r(() => import("./BeforeAfter-XemvtPU0-7UMX3VPR.js").then((e2) => ({
  default: e2.BeforeAfter
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
  count: $.length,
  text: `Animated scenes for landing pages`
}, {
  label: `Motion`,
  to: `/motion`,
  icon: Ji,
  count: k.length,
  text: `Text, numbers, transitions, loaders`
}];
var vl = (e2) => [...e2].sort((e3, t5) => Date.parse(t5.added ?? ``) - Date.parse(e3.added ?? ``));
var faqs = [{
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
  a: `${Oi.filter((e2) => !e2.pro).length} items are free to copy and keep. Pro unlocks every item with source and all future updates \u2013 you pay once, there is no subscription.`
}, {
  q: `Can I use it in client projects?`,
  a: `Yes. Pro includes a commercial license for unlimited projects, for you and your clients.`
}];
var H = [{
  key: `components`,
  label: `Components`,
  to: `/components`,
  items: [`agent-tree`, `agent-inbox`, `agent-lanes`, `trace-waterfall`, `agent-graph`, `agent-steering`, `autonomy-dial`, `approval-card`, `agent-plan`, `tool-call-card`, `thinking-state`, `ai-answer`, `chat-composer`, `model-picker`, `context-window`, `memory-panel`].map((e2) => Ti.find((t5) => t5.slug === e2)).filter((e2) => e2 !== void 0).slice(0, 6)
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
  items: vl($).slice(0, 4)
}, {
  key: `motion`,
  label: `Motion`,
  to: `/motion`,
  items: vl(k).slice(0, 6)
}].filter((e2) => e2.items.length > 0);
var xl = [`kpi-chart`, `notification-stack`, `chat-composer`, `profile-menu`, `thinking-state`, `setup-guide`, `integration-settings`, `smart-recommendation`, `filter-menu`];
var Sl = [`glass-folder`, `integration-grid`, `empty-calendar`, `layer-stack`, `team-invite`, `enrichment-orbit`, `side-folder`, `ghosted-chat`, `world-map`];
var Cl = (e2, t5) => t5.map((t6) => e2.find((e3) => e3.slug === t6)).filter((e3) => !!e3);
var wl = Cl(Ti, xl);
var Tl = Cl($, Sl);
var El = wl.flatMap((e2, t5) => {
  if (Tl[t5]) {
    return [e2, Tl[t5]];
  }
  return [e2];
});
var Dl = Array.from({
  length: 21
}, (e2, t5) => El[t5 % El.length]);
var jl = (e2, t5) => b.lazy(() => e2().then((e3) => ({
  default: e3[t5]
})));
var Ml = jl(() => r(() => import("./ComponentPage-CfGkuqUP-SYT34AFQ.js"), __vite__mapDeps([316, 1, 2, 317, 3, 314, 315])), `ComponentPage`);
var Nl = jl(() => r(() => import("./PricingPage-BGJTK7yG-OA4ZQ4CM.js"), __vite__mapDeps([318, 1, 2, 317, 3])), `PricingPage`);
var Pl = jl(() => r(() => import("./DocsPage-Dn22oIr8-VUW62B5O.js"), __vite__mapDeps([319, 317, 3, 2, 314])), `DocsPage`);
var Fl = jl(() => r(() => import("./LoginPage-BB75HT7y-UJN4F6NQ.js"), __vite__mapDeps([320, 1, 2, 317, 3, 321])), `LoginPage`);
var Il = jl(() => r(() => import("./ContactPage-DorHHgI_-4HTQP74W.js"), __vite__mapDeps([322, 1, 2, 317, 3, 321])), `ContactPage`);
var Ll = jl(() => r(() => import("./LegalPage-Bm3lx0aM-PMMLSAC4.js"), __vite__mapDeps([323, 317, 3, 2])), `LegalPage`);
var Rl = jl(() => r(() => import("./LicensePage-wC-NfGoE-YE2P445B.js"), __vite__mapDeps([324, 317, 3, 2, 323])), `LicensePage`);
var Zl1 = jl(() => r(() => import("./AccountPage-DvJClPAR-AAMBKMRE.js"), __vite__mapDeps([325, 1, 2, 317, 3, 326])), `AccountPage`);
var Bl = jl(() => r(() => import("./PartnerPage-BKenGWHF-4YULNBNH.js"), __vite__mapDeps([327, 1, 2, 328, 317, 3, 329])), `PartnerPage`);
var tabs = [{
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
  count: $.length
}, {
  id: `motion`,
  label: `Motion`,
  count: k.length
}].filter((e2) => e2.count > 0);
var Gl = y.createRoot(document.getElementById(`root`));
Ds();

export {
  i,
  t3 as t,
  r2 as r,
  i2,
  a2 as a,
  r3 as r2,
  Ti,
  Ei,
  $,
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
  J1Component,
  IComponent,
  MComponent,
  AaComponent,
  NComponent,
  OaComponent,
  Sa1Component,
  ha,
  ga,
  Ca,
  M,
  FaComponent,
  vo,
  useTo,
  Eo,
  AoComponent,
  Uo,
  Wo,
  Go,
  R,
  z,
  Ko,
  useJo,
  useZo,
  Qo,
  useFs,
  Ns,
  Ps,
  Fs,
  Ls,
  Hs,
  ZsComponent,
  ec,
  useTc,
  useSc,
  Lc1Component,
  Hc1Component,
  GcComponent,
  Rc,
  KcComponent,
  QcComponent,
  Tl1Component
};
