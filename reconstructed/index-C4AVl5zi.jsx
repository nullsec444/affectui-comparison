// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { n, t } from "./rolldown-runtime-BpQH8Ho1.jsx";
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { n as n_2, r, t as t_2 } from "./supabase-CqDuy7ko.jsx";
import { a as a_1, i as i_1, o as o_1, r as r_2, s, t as t_3 } from "./site-D86YA7B9.jsx";
import { t as t_4 } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as P1 } from "./HugeiconsIcon-C2cDExRS.jsx";
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/demo-BpwDm3_5.js", "assets/react-BkAXpnfr.js", "assets/rolldown-runtime-BpQH8Ho1.js", "assets/jsx-runtime-CTsRTJUX.js", "assets/demo-CeLlHdJ-.css", "assets/demo.clean-BdsziCoX.js", "assets/demo-Bq86T0RX.js", "assets/demo-w8HemkFL.css", "assets/demo.clean-DQ6MZQcD.js", "assets/demo-CCeL1VNp.js", "assets/demo-UKD1ftz8.css", "assets/demo.clean-DC3N3Pap.js", "assets/demo-crn6hRBF.js", "assets/component-CabyG3jS.js", "assets/demo-s3qRD0hW.css", "assets/demo.clean-BjIF1-j-.js", "assets/demo-Bzg0Jm8m.js", "assets/demo-DeplEzVC.css", "assets/demo.clean-CykqoJC9.js", "assets/demo-Ddb1Dch3.js", "assets/demo-CeS5eV_E.css", "assets/demo.clean-CX0onucT.js", "assets/demo-NvLm8mGU.js", "assets/demo-BT26IZiJ.css", "assets/demo.clean-B3KZIS0J.js", "assets/demo-DtfhNS6P.js", "assets/component-D_NiR_dg.js", "assets/demo-CoGzhDuu.css", "assets/demo.clean-Dkj-1MDj.js", "assets/demo-CZQO5p6C.js", "assets/demo-DA1DNmMV.css", "assets/demo.clean-D4m3L74b.js", "assets/demo-65xDbaC9.js", "assets/demo-B_Ua7zhz.css", "assets/demo.clean-dYQPE1hb.js", "assets/demo-BXlx9pcF.js", "assets/component-CHAr1UD2.js", "assets/demo-CWncpXCS.css", "assets/demo.clean-D3ZXLUIO.js", "assets/demo-Da5-XF-c.js", "assets/component-x-U6EJWL.js", "assets/demo-Be3B1cuN.css", "assets/demo.clean-DkN_5ZQ5.js", "assets/demo-D_fnjW-9.js", "assets/demo-CBYN1eoj.css", "assets/demo.clean-CUpZACNd.js", "assets/demo-DI66HSts.js", "assets/component-MWY_GX0G.js", "assets/demo-BtJ5ReLf.css", "assets/demo.clean-CCr62Jz8.js", "assets/demo-xRyZ19Jc.js", "assets/demo-C0huakYH.css", "assets/demo.clean-CnchuWt9.js", "assets/demo-tcGbF7g2.js", "assets/demo-CEWDYID4.css", "assets/demo.clean-DhS0HlaW.js", "assets/demo-Cde_N0C0.js", "assets/demo-BZTl0vFF.css", "assets/demo.clean-BkpdJDtQ.js", "assets/demo-TTVz3U3f.js", "assets/demo-BiHvyvIV.css", "assets/demo.clean-DgcZN_UD.js", "assets/demo-BlNBUErF.js", "assets/demo-Dn6GavXm.css", "assets/demo.clean-Lan03W3V.js", "assets/demo-BgsJzBTE.js", "assets/demo-DQOONSHb.css", "assets/demo.clean-BmiiHyGl.js", "assets/demo-DgdoHbQS.js", "assets/demo-Ct0hTa3E.css", "assets/demo.clean-DbXcMJMS.js", "assets/demo-DGaVy3XD.js", "assets/component-BpWpTuwn.js", "assets/demo-CZta6kRg.css", "assets/demo.clean-OeBBW_7u.js", "assets/demo-CYhBENQa.js", "assets/demo-DSzFpjk6.css", "assets/demo.clean-DZiTLSj_.js", "assets/demo-CcNPpld_.js", "assets/demo-qHs5QTOL.css", "assets/demo.clean-Cwxrnsci.js", "assets/demo-V6j80N0E.js", "assets/demo-Bdl4gtlY.css", "assets/demo.clean-DNxPbueK.js", "assets/demo-BBMr4ztO.js", "assets/demo-CHxHjtGF.css", "assets/demo.clean-BtR7iQdY.js", "assets/demo-CQRf-Cg5.js", "assets/demo-CtX7DdQf.css", "assets/demo.clean-CjJwmC-8.js", "assets/demo-ik_0XYps.js", "assets/demo-BRb4XxkZ.css", "assets/demo.clean-Vp-K1jMG.js", "assets/demo-BkxWHDVt.js", "assets/component-LyBMd15F.js", "assets/demo-H9tuM7PY.css", "assets/demo.clean-Djfm83dS.js", "assets/demo-Y9Qip8LJ.js", "assets/component-7zQPnK-d.js", "assets/demo-Di_7AkW9.css", "assets/demo.clean-BXz9gUDp.js", "assets/demo-5-hgQYhm.js", "assets/demo-DFvtknob.css", "assets/demo.clean-CPhhQKKr.js", "assets/demo-Dxm1xr9_.js", "assets/demo-CJ4z72Ej.css", "assets/demo.clean-CTC16fNW.js", "assets/demo-BQ61UvP8.js", "assets/component-BZJ0c7rx.js", "assets/demo-43cus7LW.css", "assets/demo.clean-B4-Re8fT.js", "assets/demo-CEgv5bR9.js", "assets/demo-CQoJKBzs.css", "assets/demo.clean-C1W0NbsT.js", "assets/demo-CgV2euur.js", "assets/demo-DaCE-JsF.css", "assets/demo.clean-jqs229XM.js", "assets/demo-C580yDTY.js", "assets/demo-BWPo2vC0.css", "assets/demo.clean-B7cgzOPZ.js", "assets/demo-RSBM-GoA.js", "assets/demo-B_-V1qta.css", "assets/demo.clean-gBQjVTxc.js", "assets/demo-BoVVleq1.js", "assets/demo-Dhul4zoE.css", "assets/demo.clean-SPg51xTG.js", "assets/demo-B1zzQqO2.js", "assets/demo-DZ4DQtKG.css", "assets/demo.clean-DKsx9U9O.js", "assets/demo-d_AV0tPL.js", "assets/demo-CKu0wqnS.css", "assets/demo.clean-Du4BhTGQ.js", "assets/demo-BKqcXOSN.js", "assets/demo-CTTiXRUG.css", "assets/demo.clean-CQ9Mgt2p.js", "assets/demo-9sHHhTyA.js", "assets/demo-CtLeN6GG.css", "assets/demo.clean-DiU4wbPA.js", "assets/demo-CctwMXFR.js", "assets/demo-YJNU2W1Y.css", "assets/demo.clean-DRfoB4wl.js", "assets/demo-DlJqXDIq.js", "assets/demo-DxsbjXIi.css", "assets/demo.clean-1KuFFkG8.js", "assets/demo-BzK_zDAD.js", "assets/component-BDo0fvGw.js", "assets/demo-okgBcVKl.css", "assets/demo.clean-D1uXYCFG.js", "assets/demo-Cb1j7tKz.js", "assets/component-BUgiZiPt.js", "assets/demo-BtrsrzeH.css", "assets/demo.clean-DgcWwiZH.js", "assets/demo-Ed3S7lvS.js", "assets/demo-Dfjh_Nog.css", "assets/demo.clean-CnpU6JZL.js", "assets/demo-BOLhhfTT.js", "assets/demo-CBnDBA1e.css", "assets/demo.clean-BYDkomFg.js", "assets/demo-qJGH2Gjh.js", "assets/component-jpqc9dJC.js", "assets/demo-BFeSDQCw.css", "assets/demo.clean-DWvTXnKE.js", "assets/demo-sabUvR7r.js", "assets/component-CQGDXGUk.js", "assets/demo-Bwwy34Kj.css", "assets/demo.clean-CXxA6VEx.js", "assets/demo-D2Q4vYDw.js", "assets/demo-Bd8TQevV.css", "assets/demo.clean-Bfu_rP8L.js", "assets/demo-D8pZHeij.js", "assets/demo-n8KZiTF2.css", "assets/demo.clean-CtdFgWee.js", "assets/demo-C2oxSuna.js", "assets/component-CA_4LgO0.js", "assets/demo-DE2b60zA.css", "assets/demo.clean-q2ZwGlZu.js", "assets/demo-ClS58yMQ.js", "assets/demo-DaMDeEhu.css", "assets/demo.clean-DbCPeis2.js", "assets/demo-izlk0-DS.js", "assets/component-DxL4SVuQ.js", "assets/demo-CzkiUT9-.css", "assets/demo.clean-BjDeSoUM.js", "assets/demo-BhVeTwOS.js", "assets/demo-DsiVsikb.css", "assets/demo.clean-B-ER_Luk.js", "assets/demo-Dx1zk5ox.js", "assets/demo-4qf089Hm.css", "assets/demo-CZJ2T4nU.js", "assets/demo-lIACZQBf.css", "assets/demo-BiwOrW2x.js", "assets/demo-CT9UQG8Q.css", "assets/demo-rS721rJa.js", "assets/demo-CzHqDxM2.css", "assets/demo-D1arByOa.js", "assets/demo-X4nE4hhv.css", "assets/demo-mNpCRsfS.js", "assets/demo-C0IXn0BJ.css", "assets/demo-Bp-um2Aj.js", "assets/demo-C2bhkcHT.css", "assets/demo-Ytbb4Swi.js", "assets/demo-CW0kyWxi.css", "assets/demo-DWd1ZKX0.js", "assets/demo-mBBe7Cka.css", "assets/demo-BbZ2lqOk.js", "assets/demo--23xacFf.css", "assets/demo-DrrNKEd7.js", "assets/demo-CqFNiKP9.css", "assets/demo-BtlH6dH8.js", "assets/demo-DhPmofCn.css", "assets/demo-C2jfF4UB.js", "assets/demo-C7lGzSvq.css", "assets/demo-MXjIQshC.js", "assets/demo-C84Rtc7Q.css", "assets/demo-CU49Fdlm.js", "assets/demo-LIDC0AW0.css", "assets/demo-DrDu-VuE.js", "assets/demo-Df5bkK6U.css", "assets/demo-Cm2FVMWj.js", "assets/demo-BpX_rAfy.css", "assets/demo-VtcZhlFb.js", "assets/demo-AoQgzkmh.css", "assets/demo-Cm8kSHcX.js", "assets/demo-yLglQlH0.css", "assets/demo-CfD9afHB.js", "assets/demo-BTfB4k9k.css", "assets/demo-B_Bc7Zla.js", "assets/demo-CELo7ePn.css", "assets/demo-CL_ySX-H.js", "assets/demo-C8RkVAZ5.css", "assets/demo-BABw5NIJ.js", "assets/component-WEwHkvy1.js", "assets/demo-DX6xN4by.css", "assets/demo-KQRMxKWn.js", "assets/demo-CPGvV7yx.css", "assets/demo-BTBcqeeL.js", "assets/demo-CG8W-oPE.css", "assets/demo-CkkSZhS9.js", "assets/demo-DT0UlCV-.css", "assets/demo-OZULToi6.js", "assets/demo-bTIz8Fba.css", "assets/demo-D-FldunI.js", "assets/demo-CbCO9TS3.css", "assets/demo-Cwdm4ytX.js", "assets/demo-BBj9PGLg.css", "assets/demo-CmYYw1tl.js", "assets/demo-BsWSSdSp.css", "assets/demo-ClUxDNiT.js", "assets/demo-CrzkFw__.css", "assets/demo-CVKU8Uzh.js", "assets/demo-D3V8sr_3.css", "assets/demo-cWsVSmbI.js", "assets/demo-BeWyOZSS.css", "assets/demo-B3RzKcXL.js", "assets/demo-C3146Vn5.css", "assets/demo-Q0wmIwEm.js", "assets/demo-Bouwhv8z.css", "assets/demo-DfzMaoSM.js", "assets/PresentationBarChart01Icon-C8MfgXhe.js", "assets/component-CdTn-SwO.js", "assets/component-qs8CseUl.js", "assets/HugeiconsIcon-C2cDExRS.js", "assets/ChartColumnIcon-CdOeU6Br.js", "assets/Database01Icon-DrAaO4oe.js", "assets/Globe02Icon-jOAiZzRC.js", "assets/Table01Icon-CpK0cmMJ.js", "assets/UserAdd01Icon-CeNWxiQ5.js", "assets/Analytics01Icon-DzRjULbW.js", "assets/BubbleChatIcon-pbmBjpVO.js", "assets/Calendar03Icon-DcAo2VXN.js", "assets/WorkflowSquare03Icon-KUZ5l40I.js", "assets/Delete02Icon-CsyBlwAn.js", "assets/Dollar01Icon-CKgdstwc.js", "assets/Home01Icon-CtlfDZqB.js", "assets/MoreHorizontalIcon-CBUy2huH.js", "assets/ShoppingBag01Icon-fOOVs0Uq.js", "assets/Target02Icon-B_T0iwXf.js", "assets/demo-Cj5VtBEI.js", "assets/Copy01Icon-DrPxamgF.js", "assets/Mail01Icon-qGLuNJQs.js", "assets/RepeatIcon-CJJ1C8N9.js", "assets/demo-DoZvL8St.js", "assets/Download04Icon-C2-aGxK5.js", "assets/UserMultipleIcon-BFkjj3cH.js", "assets/demo-DEDAzzL5.js", "assets/demo-VapOqTsZ.js", "assets/demo-CdN1C5vO.js", "assets/demo-DYRcii43.js", "assets/Link01Icon-DMZyIG_F.js", "assets/demo-BbKQebRQ.js", "assets/demo-DFRjCQMT.js", "assets/UserMultiple02Icon-CmkUO2wo.js", "assets/demo-OHW76bxc.js", "assets/demo-CIKoqFjv.js", "assets/demo-Djeoaldi.js", "assets/demo-C8acxvKL.js", "assets/demo-Ye53Zfy1.js", "assets/demo-216Xdj1g.css", "assets/demo-B-TgH1P-.js", "assets/demo-Cq9Jvjc6.css", "assets/demo-Dcdtba_V.js", "assets/demo-DO5raLtj.css", "assets/demo-S1hMjDCH.js", "assets/demo-KXXiA1pF.css", "assets/demo-0IZOAjVo.js", "assets/demo-Cqs4NNzb.css", "assets/demo-Cc3_N5Az.js", "assets/demo-Bk7Us5KG.css", "assets/demo-BEzbCisV.js", "assets/demo-Cd_tWGts.css", "assets/demo-BijqyLh8.js", "assets/demo-0-qyOf6s.css", "assets/lib-D_jy-Mlc.js", "assets/BeforeAfter-CY3q6Q7B.js", "assets/ArrowRight01Icon-JBN5MFu9.js", "assets/RefreshIcon-fjVu6A90.js", "assets/ComponentPage-C2GWVnMg.js", "assets/site-D86YA7B9.js", "assets/PricingPage-RPo3RslS.js", "assets/DocsPage-BymnN-ky.js", "assets/LoginPage-CGZHju3l.js", "assets/ArrowLeft01Icon-qNK3q5ZR.js", "assets/ContactPage-bpzBmmPa.js", "assets/LegalPage-zAor_usS.js", "assets/LicensePage-C4cotqoY.js", "assets/AccountPage-CEZxTXit.js", "assets/supabaseClient-MZLUyPvg.js", "assets/PartnerPage-BhNKB5Ii.js", "assets/supabase-CqDuy7ko.js", "assets/PartnerPage-B8QmlA8_.css"])) => i.map(i => d[i]).filter(asset => asset.endsWith(".css"));
(() => {
  let relList = document.createElement(`link`).relList;
  if (relList && relList.supports && relList.supports(`modulepreload`)) {
    return;
  }
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) {
    n(e);
  }
  new MutationObserver(e => {
    for (let t of e) {
      if (t.type === `childList`) {
        for (let e of t.addedNodes) {
          if (e.tagName === `LINK` && e.rel === `modulepreload`) {
            n(e);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(e) {
    let t = {};
    if (e.integrity) {
      t.integrity = e.integrity;
    }
    if (e.referrerPolicy) {
      t.referrerPolicy = e.referrerPolicy;
    }
    t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`;
    return t;
  }
  function n(e) {
    if (e.ep) {
      return;
    }
    e.ep = true;
    let n = t(e);
    fetch(e.href, n);
  }
})();
const m = t(e => {
  function t(e, t) {
    let e_length = e.length;
    e.push(t);
    a: while (e_length > 0) {
      const r = e_length - 1 >>> 1;
      const a = e[r];
      if (i(a, t) > 0) {
        e[r] = t;
        e[e_length] = a;
        e_length = r;
      } else {
        break a;
      }
    }
  }
  function n(e) {
    if (e.length === 0) {
      return null;
    }
    return e[0];
  }
  function r(e) {
    if (e.length === 0) {
      return null;
    }
    const t = e[0];
    const n = e.pop();
    if (n !== t) {
      e[0] = n;
      a: for (let r = 0, a = e.length, o = a >>> 1; r < o;) {
        const s = 2 * (r + 1) - 1;
        const c = e[s];
        const l = s + 1;
        const u = e[l];
        if (i(c, n) < 0) {
          if (l < a && i(u, c) < 0) {
            e[r] = u;
            e[l] = n;
            r = l;
          } else {
            e[r] = c;
            e[s] = n;
            r = s;
          }
        } else if (l < a && i(u, n) < 0) {
          e[r] = u;
          e[l] = n;
          r = l;
        } else {
          break a;
        }
      }
    }
    return t;
  }
  function i(e, t) {
    const n = e.sortIndex - t.sortIndex;
    if (n === 0) {
      return e.id - t.id;
    }
    return n;
  }
  e.unstable_now = undefined;
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date;
    var s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var c = [];
  var l = [];
  var u = 1;
  var d = null;
  var f = 3;
  var p = false;
  var m = false;
  var h = false;
  var g = false;
  var _ = typeof setTimeout == `function` ? setTimeout : null;
  var v = typeof clearTimeout == `function` ? clearTimeout : null;
  var y = typeof setImmediate < `u` ? setImmediate : null;
  function b(e) {
    for (let i = n(l); i !== null;) {
      if (i.callback === null) {
        r(l);
      } else if (i.startTime <= e) {
        r(l);
        i.sortIndex = i.expirationTime;
        t(c, i);
      } else {
        break;
      }
      i = n(l);
    }
  }
  function ee(e) {
    h = false;
    b(e);
    if (!m) {
      if (n(c) !== null) {
        m = true;
        if (!x) {
          x = true;
          ae();
        }
      } else {
        const t = n(l);
        if (t !== null) {
          ce(ee, t.startTime - e);
        }
      }
    }
  }
  var x = false;
  var te = -1;
  var ne = 5;
  var re = -1;
  function ie() {
    if (g) {
      return true;
    }
    return !(e.unstable_now() - re < ne);
  }
  function S() {
    g = false;
    if (x) {
      let t = e.unstable_now();
      re = t;
      let i = true;
      try {
        a: {
          m = false;
          if (h) {
            h = false;
            v(te);
            te = -1;
          }
          p = true;
          const a = f;
          try {
            b: {
              b(t);
              for (d = n(c); d !== null && !(d.expirationTime > t && ie());) {
                const o = d.callback;
                if (typeof o == `function`) {
                  d.callback = null;
                  f = d.priorityLevel;
                  const s = o(d.expirationTime <= t);
                  t = e.unstable_now();
                  if (typeof s == `function`) {
                    d.callback = s;
                    b(t);
                    i = true;
                    break b;
                  }
                  if (d === n(c)) {
                    r(c);
                  }
                  b(t);
                } else {
                  r(c);
                }
                d = n(c);
              }
              if (d !== null) {
                i = true;
              } else {
                const u = n(l);
                if (u !== null) {
                  ce(ee, u.startTime - t);
                }
                i = false;
              }
            }
            break a;
          } finally {
            d = null;
            f = a;
            p = false;
          }
          i = undefined;
        }
      } finally {
        if (i) {
          ae();
        } else {
          x = false;
        }
      }
    }
  }
  var ae;
  if (typeof y == `function`) {
    ae = function () {
      y(S);
    };
  } else if (typeof MessageChannel < `u`) {
    var oe = new MessageChannel();
    var se = oe.port2;
    oe.port1.onmessage = S;
    ae = function () {
      se.postMessage(null);
    };
  } else {
    ae = function () {
      _(S, 0);
    };
  }
  function ce(t, n) {
    te = _(function () {
      t(e.unstable_now());
    }, n);
  }
  e.unstable_IdlePriority = 5;
  e.unstable_ImmediatePriority = 1;
  e.unstable_LowPriority = 4;
  e.unstable_NormalPriority = 3;
  e.unstable_Profiling = null;
  e.unstable_UserBlockingPriority = 2;
  e.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  e.unstable_forceFrameRate = function (e) {
    if (e < 0 || e > 125) {
      console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`);
    } else {
      ne = e > 0 ? Math.floor(1000 / e) : 5;
    }
  };
  e.unstable_getCurrentPriorityLevel = function () {
    return f;
  };
  e.unstable_next = function (e) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = f;
    }
    const n = f;
    f = t;
    try {
      return e();
    } finally {
      f = n;
    }
  };
  e.unstable_requestPaint = function () {
    g = true;
  };
  e.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    const n = f;
    f = e;
    try {
      return t();
    } finally {
      f = n;
    }
  };
  e.unstable_scheduleCallback = function (priorityLevel, callback, startTime) {
    const o = e.unstable_now();
    if (typeof startTime == `object` && startTime) {
      startTime = startTime.delay;
      startTime = typeof startTime == `number` && startTime > 0 ? o + startTime : o;
    } else {
      startTime = o;
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
        expirationTime = 10000;
        break;
      default:
        expirationTime = 5000;
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
    if (startTime > o) {
      priorityLevel.sortIndex = startTime;
      t(l, priorityLevel);
      if (n(c) === null && priorityLevel === n(l)) {
        if (h) {
          v(te);
          te = -1;
        } else {
          h = true;
        }
        ce(ee, startTime - o);
      }
    } else {
      priorityLevel.sortIndex = expirationTime;
      t(c, priorityLevel);
      if (!(m || p)) {
        m = true;
        if (!x) {
          x = true;
          ae();
        }
      }
    }
    return priorityLevel;
  };
  e.unstable_shouldYield = ie;
  e.unstable_wrapCallback = function (e) {
    const t = f;
    return function () {
      const n = f;
      f = t;
      try {
        return e.apply(this, arguments);
      } finally {
        f = n;
      }
    };
  };
});
const h = t((e, t) => {
  t.exports = m();
});
const g = t(e => {
  var t = t_1();
  function r(e) {
    let t = `https://react.dev/errors/` + e;
    if (arguments.length > 1) {
      t += `?args[]=` + encodeURIComponent(arguments[1]);
      for (let n = 2; n < arguments.length; n++) {
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
    }
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i() {}
  var a = {
    d: {
      f: i,
      r: function () {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  };
  var o = Symbol.for(`react.portal`);
  var s = Symbol.for(`react.recoverable`);
  var c = Symbol.for(`react.optimistic_key`);
  function l(children, containerInfo, implementation, r = null) {
    return {
      $$typeof: o,
      key: r == null ? null : r === c ? c : `` + r,
      children,
      containerInfo,
      implementation
    };
  }
  var t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e, crossOrigin) {
    if (e === `font`) {
      return ``;
    }
    if (typeof crossOrigin == `string`) {
      if (crossOrigin === `use-credentials`) {
        return crossOrigin;
      }
      return ``;
    }
  }
  e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a;
  e.browser = function (_reason) {
    return {
      $$typeof: s,
      _reason
    };
  };
  e.createPortal = function (e, t, n = null) {
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) {
      throw Error(r(299));
    }
    return l(e, t, null, n);
  };
  e.flushSync = function (e) {
    const t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const n = a.p;
    try {
      t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      a.p = 2;
      if (e) {
        return e();
      }
    } finally {
      t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
      a.p = n;
      a.d.f();
    }
  };
  e.preconnect = function (e, t) {
    if (typeof e == `string`) {
      if (t) {
        t = t.crossOrigin;
        t = typeof t == `string` ? t === `use-credentials` ? t : `` : undefined;
      } else {
        t = null;
      }
      a.d.C(e, t);
    }
  };
  e.prefetchDNS = function (e) {
    if (typeof e == `string`) {
      a.d.D(e);
    }
  };
  e.preinit = function (e, t) {
    if (typeof e == `string` && t && typeof t.as == `string`) {
      const n = t.as;
      const r = d(n, t.crossOrigin);
      const integrity = typeof t.integrity == `string` ? t.integrity : undefined;
      const fetchPriority = typeof t.fetchPriority == `string` ? t.fetchPriority : undefined;
      if (n === `style`) {
        a.d.S(e, typeof t.precedence == `string` ? t.precedence : undefined, {
          crossOrigin: r,
          integrity,
          fetchPriority
        });
      } else if (n === `script`) {
        a.d.X(e, {
          crossOrigin: r,
          integrity,
          fetchPriority,
          nonce: typeof t.nonce == `string` ? t.nonce : undefined
        });
      }
    }
  };
  e.preinitModule = function (e, t) {
    if (typeof e == `string`) {
      if (typeof t == `object` && t) {
        if (t.as == null || t.as === `script`) {
          const n = d(t.as, t.crossOrigin);
          a.d.M(e, {
            crossOrigin: n,
            integrity: typeof t.integrity == `string` ? t.integrity : undefined,
            nonce: typeof t.nonce == `string` ? t.nonce : undefined,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
          });
        }
      } else {
        t ?? a.d.M(e);
      }
    }
  };
  e.preload = function (e, t) {
    if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
      const n = t.as;
      const r = d(n, t.crossOrigin);
      a.d.L(e, n, {
        crossOrigin: r,
        integrity: typeof t.integrity == `string` ? t.integrity : undefined,
        nonce: typeof t.nonce == `string` ? t.nonce : undefined,
        type: typeof t.type == `string` ? t.type : undefined,
        fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined,
        referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : undefined,
        imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : undefined,
        imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : undefined,
        media: typeof t.media == `string` ? t.media : undefined
      });
    }
  };
  e.preloadModule = function (e, t) {
    if (typeof e == `string`) {
      if (t) {
        const n = d(t.as, t.crossOrigin);
        a.d.m(e, {
          as: typeof t.as == `string` && t.as !== `script` ? t.as : undefined,
          crossOrigin: n,
          integrity: typeof t.integrity == `string` ? t.integrity : undefined,
          nonce: typeof t.nonce == `string` ? t.nonce : undefined,
          fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
        });
      } else {
        a.d.m(e);
      }
    }
  };
  e.requestFormReset = function (e) {
    a.d.r(e);
  };
  e.unstable_batchedUpdates = function (e, t) {
    return e(t);
  };
  e.useFormState = function (e, t, n) {
    return t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useFormState(e, t, n);
  };
  e.useFormStatus = function () {
    return t___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useHostTransitionStatus();
  };
  e.version = `19.3.0`;
});
const _ = t((e, t) => {
  function n() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (error) {
        console.error(error);
      }
    }
  }
  n();
  t.exports = g();
});
const v = t(e => {
  var t = h();
  var r = t_1();
  var i = _();
  function a(e) {
    let t = `https://react.dev/errors/` + e;
    if (arguments.length > 1) {
      t += `?args[]=` + encodeURIComponent(arguments[1]);
      for (let n = 2; n < arguments.length; n++) {
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
    }
    return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function s(e) {
    let t = e;
    for (let n = t; n && !n.alternate;) {
      t = n;
      if (t.flags & 4098) {
        e = t.return;
      }
      n = t.return;
    }
    while (t.return) {
      t = t.return;
    }
    if (t.tag === 3) {
      return e;
    }
    return null;
  }
  function c(e) {
    if (e.tag === 13) {
      let t = e.memoizedState;
      if (t === null) {
        e = e.alternate;
        if (e !== null) {
          t = e.memoizedState;
        }
      }
      if (t !== null) {
        return t.dehydrated;
      }
    }
    return null;
  }
  function l(e) {
    if (e.tag === 31) {
      let t = e.memoizedState;
      if (t === null) {
        e = e.alternate;
        if (e !== null) {
          t = e.memoizedState;
        }
      }
      if (t !== null) {
        return t.dehydrated;
      }
    }
    return null;
  }
  function u(e) {
    if (s(e) !== e) {
      throw Error(a(188));
    }
  }
  function d(e__reactInternals) {
    let e_alternate = e__reactInternals.alternate;
    if (!e_alternate) {
      e_alternate = s(e__reactInternals);
      if (e_alternate === null) {
        throw Error(a(188));
      }
      if (e_alternate === e__reactInternals) {
        return e__reactInternals;
      }
      return null;
    }
    let n = e__reactInternals;
    let r = e_alternate;
    while (true) {
      const i = n.return;
      if (i === null) {
        break;
      }
      let o = i.alternate;
      if (o === null) {
        r = i.return;
        if (r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o;) {
          if (o === n) {
            u(i);
            return e__reactInternals;
          }
          if (o === r) {
            u(i);
            return e_alternate;
          }
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) {
        n = i;
        r = o;
      } else {
        let c = false;
        for (var l = i.child; l;) {
          if (l === n) {
            c = true;
            n = i;
            r = o;
            break;
          }
          if (l === r) {
            c = true;
            r = i;
            n = o;
            break;
          }
          l = l.sibling;
        }
        if (!c) {
          for (l = o.child; l;) {
            if (l === n) {
              c = true;
              n = o;
              r = i;
              break;
            }
            if (l === r) {
              c = true;
              r = o;
              n = i;
              break;
            }
            l = l.sibling;
          }
          if (!c) {
            throw Error(a(189));
          }
        }
      }
      if (n.alternate !== r) {
        throw Error(a(190));
      }
    }
    if (n.tag !== 3) {
      throw Error(a(188));
    }
    if (n.stateNode.current === n) {
      return e__reactInternals;
    }
    return e_alternate;
  }
  function f(e) {
    let e_tag = e.tag;
    if (e_tag === 5 || e_tag === 26 || e_tag === 27 || e_tag === 6) {
      return e;
    }
    for (e = e.child; e !== null;) {
      e_tag = f(e);
      if (e_tag !== null) {
        return e_tag;
      }
      e = e.sibling;
    }
    return null;
  }
  function p(e, t, n, r, i, a) {
    while (e !== null) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(e.child, t, n, r, i, a)) {
        return true;
      }
      e = e.sibling;
    }
    return false;
  }
  function m(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) {
        return e;
      }
      e = e.return;
    }
    return null;
  }
  function g(e) {
    let t = false;
    for (e = e.return; e !== null && (e.tag === 4 && (t = true), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) {
      e = e.return;
    }
    return t;
  }
  function v(e) {
    const t = [null, null];
    const n = m(e);
    if (n !== null) {
      y(t, e, n.child, {
        foundSelf: false
      });
    }
    return t;
  }
  function y(e, t, n, r) {
    while (n !== null) {
      if (n === t) {
        r.foundSelf = true;
      } else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (r.foundSelf) {
          e[1] = n;
          return true;
        }
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) {
        return true;
      }
      n = n.sibling;
    }
    return false;
  }
  function b(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(a(559));
    }
  }
  var ee = null;
  var x = null;
  function te(e, t, n) {
    return e === n || e === t && (ee = e, true);
  }
  function ne(e, t, n) {
    if (e === n) {
      x = e;
      return false;
    }
    return e === t && (x !== null && (ee = e), true);
  }
  function re(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e === null ? null : e.return;
    } while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function ie(e, t, n) {
    let r = 0;
    for (var i = e; i; i = n(i)) {
      r++;
    }
    i = 0;
    for (let a = t; a; a = n(a)) {
      i++;
    }
    while (r - i > 0) {
      e = n(e);
      r--;
    }
    while (i - r > 0) {
      t = n(t);
      i--;
    }
    while (r--) {
      if (e === t || t !== null && e === t.alternate) {
        return e;
      }
      e = n(e);
      t = n(t);
    }
    return null;
  }
  var Object_assign = Object.assign;
  var ae = Symbol.for(`react.element`);
  var oe = Symbol.for(`react.transitional.element`);
  var se = Symbol.for(`react.portal`);
  var ce = Symbol.for(`react.fragment`);
  var le = Symbol.for(`react.strict_mode`);
  var ue = Symbol.for(`react.profiler`);
  var de = Symbol.for(`react.consumer`);
  var fe = Symbol.for(`react.context`);
  var pe = Symbol.for(`react.forward_ref`);
  var me = Symbol.for(`react.suspense`);
  var he = Symbol.for(`react.suspense_list`);
  var C = Symbol.for(`react.memo`);
  var ge = Symbol.for(`react.lazy`);
  var _e = Symbol.for(`react.activity`);
  var ve = Symbol.for(`react.legacy_hidden`);
  var ye = Symbol.for(`react.memo_cache_sentinel`);
  var be = Symbol.for(`react.view_transition`);
  var xe = Symbol.for(`react.recoverable`);
  var Symbol_iterator = Symbol.iterator;
  function Ce(e) {
    if (typeof e != `object` || !e) {
      return null;
    }
    e = Symbol_iterator && e[Symbol_iterator] || e[`@@iterator`];
    if (typeof e == `function`) {
      return e;
    }
    return null;
  }
  var we = Symbol.for(`react.client.reference`);
  function Te(e) {
    if (e == null) {
      return null;
    }
    if (typeof e == `function`) {
      if (e.$$typeof === we) {
        return null;
      }
      return e.displayName || e.name || null;
    }
    if (typeof e == `string`) {
      return e;
    }
    switch (e) {
      case ce:
        return `Fragment`;
      case ue:
        return `Profiler`;
      case le:
        return `StrictMode`;
      case me:
        return `Suspense`;
      case he:
        return `SuspenseList`;
      case _e:
        return `Activity`;
      case be:
        return `ViewTransition`;
    }
    if (typeof e == `object`) {
      switch (e.$$typeof) {
        case se:
          return `Portal`;
        case fe:
          return e.displayName || `Context`;
        case de:
          return (e._context.displayName || `Context`) + `.Consumer`;
        case pe:
          var t = e.render;
          e = e.displayName;
          e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`);
          return e;
        case C:
          t = e.displayName || null;
          if (t === null) {
            return Te(e.type) || `Memo`;
          }
          return t;
        case ge:
          t = e._payload;
          e = e._init;
          try {
            return Te(e(t));
          } catch {}
      }
    }
    return null;
  }
  var Array_isArray = Array.isArray;
  var r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var De = {
    pending: false,
    data: null,
    method: null,
    action: null
  };
  var Oe = [];
  var ke = -1;
  function Ae(current) {
    return {
      current
    };
  }
  function je(e) {
    if (!(ke < 0)) {
      e.current = Oe[ke];
      Oe[ke] = null;
      ke--;
    }
  }
  function E(e, t) {
    ke++;
    Oe[ke] = e.current;
    e.current = t;
  }
  var Me = Ae(null);
  var Ne = Ae(null);
  var Pe = Ae(null);
  var Fe = Ae(null);
  function Ie(e, t) {
    E(Pe, t);
    E(Ne, e);
    E(Me, null);
    switch (t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
        break;
      default:
        e = t.tagName;
        if (t = t.namespaceURI) {
          t = up(t);
          e = dp(t, e);
        } else {
          switch (e) {
            case `svg`:
              e = 1;
              break;
            case `math`:
              e = 2;
              break;
            default:
              e = 0;
          }
        }
    }
    je(Me);
    E(Me, e);
  }
  function Le() {
    je(Me);
    je(Ne);
    je(Pe);
  }
  function Re(e) {
    let e_memoizedState = e.memoizedState;
    if (e_memoizedState !== null) {
      sh._currentValue = e_memoizedState.memoizedState;
      E(Fe, e);
    }
    e_memoizedState = Me.current;
    const n = dp(e_memoizedState, e.type);
    if (e_memoizedState !== n) {
      E(Ne, e);
      E(Me, n);
    }
  }
  function ze(e) {
    if (Ne.current === e) {
      je(Me);
      je(Ne);
    }
    if (Fe.current === e) {
      je(Fe);
      sh._currentValue = De;
    }
  }
  var Be;
  var Ve;
  function He(e) {
    if (Be === undefined) {
      try {
        throw Error();
      } catch (error) {
        const t = error.stack.trim().match(/\n( *(at )?)/);
        Be = t && t[1] || ``;
        Ve = error.stack.indexOf(`
    at`) > -1 ? ` (<anonymous>)` : error.stack.indexOf(`@`) > -1 ? `@unknown:0:0` : ``;
      }
    }
    return `
` + Be + e + Ve;
  }
  var Ue = false;
  function We(e, t) {
    if (!e || Ue) {
      return ``;
    }
    Ue = true;
    let Error_prepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      let r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var n = function () {
                throw Error();
              };
              Object.defineProperty(n.prototype, "props", {
                set: function () {
                  throw Error();
                }
              });
              if (typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n, []);
                } catch (error) {
                  var r = error;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (error) {
                  r = error;
                }
                n = false;
                try {
                  var i = Object.getOwnPropertyDescriptor(e.prototype, `props`);
                  Object.defineProperty(e.prototype, "props", {
                    configurable: true,
                    set: function () {
                      throw Error();
                    }
                  });
                  n = true;
                  new e();
                } finally {
                  if (n) {
                    if (i === undefined) {
                      delete e.prototype.props;
                    } else {
                      Object.defineProperty(e.prototype, "props", i);
                    }
                  }
                }
              }
            } else {
              try {
                throw Error();
              } catch (error) {
                r = error;
              }
              if ((n = e()) && typeof n.catch == `function`) {
                n.catch(() => {});
              }
            }
          } catch (error) {
            if (error && r && typeof error.stack == `string`) {
              return [error.stack, r.stack];
            }
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      let i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
      if (i && i.configurable) {
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: `DetermineComponentFrameRoot`
        });
      }
      const a = r.DetermineComponentFrameRoot();
      const o = a[0];
      const s = a[1];
      if (o && s) {
        const c = o.split(`
`);
        const l = s.split(`
`);
        for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) {
          r++;
        }
        while (i < l.length && !l[i].includes(`DetermineComponentFrameRoot`)) {
          i++;
        }
        if (r === c.length || i === l.length) {
          r = c.length - 1;
          for (i = l.length - 1; r >= 1 && i >= 0 && c[r] !== l[i];) {
            i--;
          }
        }
        for (; r >= 1 && i >= 0; r--, i--) {
          if (c[r] !== l[i]) {
            if (r !== 1 || i !== 1) {
              do {
                r--;
                i--;
                if (i < 0 || c[r] !== l[i]) {
                  let u = `
` + c[r].replace(` at new `, ` at `);
                  if (e.displayName && u.includes(`<anonymous>`)) {
                    u = u.replace(`<anonymous>`, e.displayName);
                  }
                  return u;
                }
              } while (r >= 1 && i >= 0);
            }
            break;
          }
        }
      }
    } finally {
      Ue = false;
      Error.prepareStackTrace = Error_prepareStackTrace;
    }
    if (Error_prepareStackTrace = e ? e.displayName || e.name : ``) {
      return He(Error_prepareStackTrace);
    }
    return ``;
  }
  function Ge(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return He(e.type);
      case 16:
        return He(`Lazy`);
      case 13:
        if (e.child !== t && t !== null) {
          return He(`Suspense Fallback`);
        }
        return He(`Suspense`);
      case 19:
        return He(`SuspenseList`);
      case 0:
      case 15:
        return We(e.type, false);
      case 11:
        return We(e.type.render, false);
      case 1:
        return We(e.type, true);
      case 31:
        return He(`Activity`);
      case 30:
        return He(`ViewTransition`);
      default:
        return ``;
    }
  }
  function Ke(e) {
    try {
      let t = ``;
      let n = null;
      do {
        t += Ge(e, n);
        n = e;
        e = e.return;
      } while (e);
      return t;
    } catch (error) {
      return `
Error generating stack: ` + error.message + `
` + error.stack;
    }
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var t_unstable_scheduleCallback = t.unstable_scheduleCallback;
  var t_unstable_cancelCallback = t.unstable_cancelCallback;
  var t_unstable_shouldYield = t.unstable_shouldYield;
  var t_unstable_requestPaint = t.unstable_requestPaint;
  var t_unstable_now = t.unstable_now;
  var t_unstable_getCurrentPriorityLevel = t.unstable_getCurrentPriorityLevel;
  var t_unstable_ImmediatePriority = t.unstable_ImmediatePriority;
  var t_unstable_UserBlockingPriority = t.unstable_UserBlockingPriority;
  var t_unstable_NormalPriority = t.unstable_NormalPriority;
  var t_unstable_LowPriority = t.unstable_LowPriority;
  var t_unstable_IdlePriority = t.unstable_IdlePriority;
  var t_log = t.log;
  var t_unstable_setDisableYieldValue = t.unstable_setDisableYieldValue;
  var st = null;
  var ct = null;
  function lt(e) {
    if (typeof t_log == `function`) {
      t_unstable_setDisableYieldValue(e);
    }
    if (ct && typeof ct.setStrictMode == `function`) {
      try {
        ct.setStrictMode(st, e);
      } catch {}
    }
  }
  var ut = Math.clz32 ? Math.clz32 : pt;
  var Math_log = Math.log;
  var Math_LN2 = Math.LN2;
  function pt(e) {
    e >>>= 0;
    if (e === 0) {
      return 32;
    }
    return 31 - (Math_log(e) / Math_LN2 | 0) | 0;
  }
  var mt = 256;
  var ht = 262144;
  var gt = 4194304;
  function _t(e) {
    const t = e & 42;
    if (t !== 0) {
      return t;
    }
    switch (e & -e) {
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
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function vt(e, t, n) {
    let e_pendingLanes = e.pendingLanes;
    if (e_pendingLanes === 0) {
      return 0;
    }
    let i = 0;
    let e_suspendedLanes = e.suspendedLanes;
    let e_pingedLanes = e.pingedLanes;
    e = e.warmLanes;
    let s = e_pendingLanes & 134217727;
    if (s === 0) {
      s = e_pendingLanes & ~e_suspendedLanes;
      if (s === 0) {
        if (e_pingedLanes === 0) {
          if (!n) {
            n = e_pendingLanes & ~e;
            if (n !== 0) {
              i = _t(n);
            }
          }
        } else {
          i = _t(e_pingedLanes);
        }
      } else {
        i = _t(s);
      }
    } else {
      e_pendingLanes = s & ~e_suspendedLanes;
      if (e_pendingLanes === 0) {
        e_pingedLanes &= s;
        if (e_pingedLanes === 0) {
          if (!n) {
            n = s & ~e;
            if (n !== 0) {
              i = _t(n);
            }
          }
        } else {
          i = _t(e_pingedLanes);
        }
      } else {
        i = _t(e_pendingLanes);
      }
    }
    if (i === 0) {
      return 0;
    }
    if (t !== 0 && t !== i && (t & e_suspendedLanes) === 0 && (e_suspendedLanes = i & -i, n = t & -t, e_suspendedLanes >= n || e_suspendedLanes === 32 && n & 4194048)) {
      return t;
    }
    return i;
  }
  function yt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bt(e, t) {
    if (t & 8) {
      t |= t & 32;
    }
    let e_entangledLanes = e.entangledLanes;
    if (e_entangledLanes !== 0) {
      e = e.entanglements;
      for (e_entangledLanes &= t; e_entangledLanes > 0;) {
        const r = 31 - ut(e_entangledLanes);
        const i = 1 << r;
        t |= e[r];
        e_entangledLanes &= ~i;
      }
    }
    return t;
  }
  function xt(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5000;
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
  function St() {
    const e = gt;
    gt <<= 1;
    if (!(gt & 62914560)) {
      gt = 4194304;
    }
    return e;
  }
  function Ct(e) {
    const t = [];
    for (let n = 0; n < 31; n++) {
      t.push(e);
    }
    return t;
  }
  function wt(e, t) {
    e.pendingLanes |= t;
    if (t !== 268435456) {
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
      e.warmLanes = 0;
    }
  }
  function Tt(e, t, n, r, i, a) {
    const e_pendingLanes = e.pendingLanes;
    e.pendingLanes = n;
    e.suspendedLanes = 0;
    e.pingedLanes = 0;
    e.warmLanes = 0;
    e.expiredLanes &= n;
    e.entangledLanes &= n;
    e.errorRecoveryDisabledLanes &= n;
    e.shellSuspendCounter = 0;
    const {
      entanglements,
      expirationTimes,
      hiddenUpdates
    } = e;
    for (n = e_pendingLanes & ~n; n > 0;) {
      let u = 31 - ut(n);
      const d = 1 << u;
      entanglements[u] = 0;
      expirationTimes[u] = -1;
      const f = hiddenUpdates[u];
      if (f !== null) {
        hiddenUpdates[u] = null;
        for (u = 0; u < f.length; u++) {
          const p = f[u];
          if (p !== null) {
            p.lane &= -536870913;
          }
        }
      }
      n &= ~d;
    }
    if (r !== 0) {
      Et(e, r, 0);
    }
    if (a !== 0 && i === 0 && e.tag !== 0) {
      e.suspendedLanes |= a & ~(e_pendingLanes & ~t);
    }
  }
  function Et(e, t, n) {
    e.pendingLanes |= t;
    e.suspendedLanes &= ~t;
    const r = 31 - ut(t);
    e.entangledLanes |= t;
    e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
  }
  function Dt(e, t) {
    let n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
      const r = 31 - ut(n);
      const i = 1 << r;
      if (i & t | e[r] & t) {
        e[r] |= t;
      }
      n &= ~i;
    }
  }
  function Ot(e, t) {
    let n = t & -t;
    n = n & 42 ? 1 : kt(n);
    if ((n & (e.suspendedLanes | t)) === 0) {
      return n;
    }
    return 0;
  }
  function kt(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function At(e) {
    e &= -e;
    if (e > 2) {
      if (e > 8) {
        if (e & 134217727) {
          return 32;
        }
        return 268435456;
      }
      return 8;
    }
    return 2;
  }
  function jt() {
    let i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    if (i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p === 0) {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = window.event;
      if (i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p === undefined) {
        return 32;
      }
      return Ch(i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p.type);
    }
    return i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
  }
  function Mt(priority, t) {
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = priority;
      return t();
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
    }
  }
  var Nt = Math.random().toString(36).slice(2);
  var Pt = `__reactFiber$` + Nt;
  var Ft = `__reactProps$` + Nt;
  var It = `__reactContainer$` + Nt;
  var Lt = `__reactEvents$` + Nt;
  var Rt = `__reactListeners$` + Nt;
  var zt = `__reactHandles$` + Nt;
  var Bt = `__reactResources$` + Nt;
  var Vt = `__reactMarker$` + Nt;
  var Ht = `__reactLoad$` + Nt;
  function Ut(e) {
    delete e[Pt];
    delete e[Ft];
    delete e[Rt];
    delete e[zt];
  }
  function Wt(e) {
    let t;
    if (t = e[Pt]) {
      return t;
    }
    for (let n = e.parentNode; n;) {
      if (t = n[It] || n[Pt]) {
        n = t.alternate;
        if (t.child !== null || n !== null && n.child !== null) {
          for (e = fm(e); e !== null;) {
            if (n = e[Pt]) {
              return n;
            }
            e = fm(e);
          }
        }
        return t;
      }
      e = n;
      n = e.parentNode;
    }
    return null;
  }
  function Gt(e) {
    if (e = e[Pt] || e[It]) {
      const t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) {
        return e;
      }
    }
    return null;
  }
  function Kt(e) {
    const e_tag = e.tag;
    if (e_tag === 5 || e_tag === 26 || e_tag === 27 || e_tag === 6) {
      return e.stateNode;
    }
    throw Error(a(33));
  }
  function qt(e) {
    let t = e[Bt];
    t ||= e[Bt] = {
      hoistableStyles: new Map(),
      hoistableScripts: new Map()
    };
    return t;
  }
  function Jt(e) {
    e[Vt] = true;
  }
  function Yt(e) {
    e[Ht] = undefined;
  }
  var Xt = new Set();
  var Zt = {};
  function Qt(e, t) {
    $t(e, t);
    $t(e + `Capture`, t);
  }
  function $t(e, t) {
    Zt[e] = t;
    for (e = 0; e < t.length; e++) {
      Xt.add(t[e]);
    }
  }
  var en = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`);
  var tn = {};
  var nn = {};
  function rn(e) {
    if (hasOwnProperty.call(nn, e)) {
      return true;
    }
    if (hasOwnProperty.call(tn, e)) {
      return false;
    }
    if (en.test(e)) {
      return nn[e] = true;
    }
    tn[e] = true;
    return false;
  }
  var D = false;
  function an() {
    const e = D;
    D = false;
    return e;
  }
  function on(e, t, n) {
    if (rn(t)) {
      if (n === null) {
        e.removeAttribute(t);
      } else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e.removeAttribute(t);
            return;
          case `boolean`:
            const r = t.toLowerCase().slice(0, 5);
            if (r !== `data-` && r !== `aria-`) {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
    }
  }
  function sn(e, t, n) {
    if (n === null) {
      e.removeAttribute(t);
    } else {
      switch (typeof n) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function cn(e, t, n, r) {
    if (r === null) {
      e.removeAttribute(n);
    } else {
      switch (typeof r) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, r);
    }
  }
  function ln(e) {
    switch (typeof e) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e;
      case `object`:
        return e;
      default:
        return ``;
    }
  }
  function un(e) {
    const e_type = e.type;
    return (e = e.nodeName) && e.toLowerCase() === `input` && (e_type === `checkbox` || e_type === `radio`);
  }
  function dn(e, t, n) {
    const r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && r !== undefined && typeof r.get == `function` && typeof r.set == `function`) {
      const {
        get,
        set
      } = r;
      Object.defineProperty(e, t, {
        configurable: true,
        get: function () {
          return get.call(this);
        },
        set: function (e) {
          n = `` + e;
          set.call(this, e);
        }
      });
      Object.defineProperty(e, t, {
        enumerable: r.enumerable
      });
      return {
        getValue: function () {
          return n;
        },
        setValue: function (e) {
          n = `` + e;
        },
        stopTracking: function () {
          e._valueTracker = null;
          delete e[t];
        }
      };
    }
  }
  function fn(e) {
    if (!e._valueTracker) {
      const t = un(e) ? `checked` : `value`;
      e._valueTracker = dn(e, t, `` + e[t]);
    }
  }
  function pn(e) {
    if (!e) {
      return false;
    }
    const e__valueTracker = e._valueTracker;
    if (!e__valueTracker) {
      return true;
    }
    const n = e__valueTracker.getValue();
    let r = ``;
    if (e) {
      r = un(e) ? e.checked ? `true` : `false` : e.value;
    }
    e = r;
    return e !== n && (e__valueTracker.setValue(e), true);
  }
  var mn = /[\n"\\]/g;
  function hn(e) {
    return e.replace(mn, e => `\\` + e.charCodeAt(0).toString(16) + ` `);
  }
  function gn(e, t, n, r, i, a, o, s) {
    e.name = ``;
    if (o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`) {
      e.type = o;
    } else {
      e.removeAttribute(`type`);
    }
    if (t == null) {
      if (!(o !== `submit` && o !== `reset`)) {
        e.removeAttribute(`value`);
      }
    } else if (o === `number`) {
      if (t === 0 && e.value === `` || e.value != t) {
        e.value = `` + ln(t);
      }
    } else if (e.value !== `` + ln(t)) {
      e.value = `` + ln(t);
    }
    if (t == null) {
      if (n == null) {
        if (r != null) {
          e.removeAttribute(`value`);
        }
      } else {
        vn(e, ln(n));
      }
    } else if (o === `number` && e.value == t) {
      vn(e, ln(e.value));
    } else {
      vn(e, ln(t));
    }
    if (i == null && a != null) {
      e.defaultChecked = !!a;
    }
    if (i != null) {
      e.checked = i && typeof i != `function` && typeof i != `symbol`;
    }
    if (s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`) {
      e.name = `` + ln(s);
    } else {
      e.removeAttribute(`name`);
    }
  }
  function _n(e, t, n, r, i, a, o, s) {
    if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean`) {
      e.type = a;
    }
    if (t != null || n != null) {
      if (!(a !== `submit` && a !== `reset` || t != null)) {
        fn(e);
        return;
      }
      n = n == null ? `` : `` + ln(n);
      t = t == null ? n : `` + ln(t);
      if (!(s || t === e.value)) {
        e.value = t;
      }
      e.defaultValue = t;
    }
    r ??= i;
    r = typeof r != `function` && typeof r != `symbol` && !!r;
    e.checked = s ? e.checked : !!r;
    e.defaultChecked = !!r;
    if (o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`) {
      e.name = o;
    }
    fn(e);
  }
  function vn(e, t) {
    if (e.defaultValue !== `` + t) {
      e.defaultValue = `` + t;
    }
  }
  function yn(e, t, n, r) {
    e = e.options;
    if (t) {
      t = {};
      for (var i = 0; i < n.length; i++) {
        t[`$` + n[i]] = true;
      }
      for (n = 0; n < e.length; n++) {
        i = t.hasOwnProperty(`$` + e[n].value);
        if (e[n].selected !== i) {
          e[n].selected = i;
        }
        if (i && r) {
          e[n].defaultSelected = true;
        }
      }
    } else {
      n = `` + ln(n);
      t = null;
      for (i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = true;
          if (r) {
            e[i].defaultSelected = true;
          }
          return;
        }
        if (!(t !== null || e[i].disabled)) {
          t = e[i];
        }
      }
      if (t !== null) {
        t.selected = true;
      }
    }
  }
  function bn(e, t, n) {
    if (t != null && (t = `` + ln(t), t !== e.value && (e.value = t), n == null)) {
      if (e.defaultValue !== t) {
        e.defaultValue = t;
      }
      return;
    }
    e.defaultValue = n == null ? `` : `` + ln(n);
  }
  function xn(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) {
          throw Error(a(92));
        }
        if (Array_isArray(r)) {
          if (r.length > 1) {
            throw Error(a(93));
          }
          r = r[0];
        }
        n = r;
      }
      n ??= ``;
      t = n;
    }
    n = ln(t);
    e.defaultValue = n;
    r = e.textContent;
    if (r === n && r !== `` && r !== null) {
      e.value = r;
    }
    fn(e);
  }
  function Sn(e, t) {
    if (t) {
      const n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function wn(e, t, n) {
    const r = t.indexOf(`--`) === 0;
    if (n == null || typeof n == `boolean` || n === ``) {
      if (r) {
        e.setProperty(t, ``);
      } else if (t === `float`) {
        e.cssFloat = ``;
      } else {
        e[t] = ``;
      }
    } else if (r) {
      e.setProperty(t, n);
    } else if (typeof n != `number` || n === 0 || Cn.has(t)) {
      if (t === `float`) {
        e.cssFloat = n;
      } else {
        e[t] = (`` + n).trim();
      }
    } else {
      e[t] = n + `px`;
    }
  }
  function Tn(e, t, n) {
    if (t != null && typeof t != `object`) {
      throw Error(a(62));
    }
    e = e.style;
    if (n != null) {
      for (var r in n) {
        if (!(!n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r))) {
          if (r.indexOf(`--`) === 0) {
            e.setProperty(r, ``);
          } else if (r === `float`) {
            e.cssFloat = ``;
          } else {
            e[r] = ``;
          }
          D = true;
        }
      }
      for (const i in t) {
        r = t[i];
        if (t.hasOwnProperty(i) && n[i] !== r) {
          wn(e, i, r);
          D = true;
        }
      }
    } else {
      for (const o in t) {
        if (t.hasOwnProperty(o)) {
          wn(e, o, t[o]);
        }
      }
    }
  }
  function En(e) {
    if (e.indexOf(`-`) === -1) {
      return false;
    }
    switch (e) {
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
  var Dn = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]);
  var On = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kn(e) {
    if (On.test(`` + e)) {
      return `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`;
    }
    return e;
  }
  function unsuspend() {}
  var jn = null;
  function Mn(e) {
    e = e.target || e.srcElement || window;
    if (e.correspondingUseElement) {
      e = e.correspondingUseElement;
    }
    if (e.nodeType === 3) {
      return e.parentNode;
    }
    return e;
  }
  var Nn = null;
  var Pn = null;
  function Fn(e) {
    let t = Gt(e);
    if (t && (e = t.stateNode)) {
      let n = e[Ft] || null;
      a: switch (e = t.stateNode, t.type) {
        case `input`:
          gn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
          t = n.name;
          if (n.type === `radio` && t != null) {
            for (n = e; n.parentNode;) {
              n = n.parentNode;
            }
            n = n.querySelectorAll(`input[name="` + hn(`` + t) + `"][type="radio"]`);
            for (t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                const i = r[Ft] || null;
                if (!i) {
                  throw Error(a(90));
                }
                gn(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
              }
            }
            for (t = 0; t < n.length; t++) {
              r = n[t];
              if (r.form === e.form) {
                pn(r);
              }
            }
          }
          break a;
        case `textarea`:
          bn(e, n.value, n.defaultValue);
          break a;
        case `select`:
          t = n.value;
          if (t != null) {
            yn(e, !!n.multiple, t, false);
          }
      }
    }
  }
  var In = false;
  function Ln(e, t, n) {
    if (In) {
      return e(t, n);
    }
    In = true;
    try {
      return e(t);
    } finally {
      In = false;
      if ((Nn !== null || Pn !== null) && (zd(), Nn && (t = Nn, e = Pn, Pn = Nn = null, Fn(t), e))) {
        for (t = 0; t < e.length; t++) {
          Fn(e[t]);
        }
      }
    }
  }
  function Rn(e, t) {
    let e_stateNode = e.stateNode;
    if (e_stateNode === null) {
      return null;
    }
    let r = e_stateNode[Ft] || null;
    if (r === null) {
      return null;
    }
    e_stateNode = r[t];
    a: switch (t) {
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
        if (!(r = !r.disabled)) {
          e = e.type;
          r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`;
        }
        e = !r;
        break a;
      default:
        e = false;
    }
    if (e) {
      return null;
    }
    if (e_stateNode && typeof e_stateNode != `function`) {
      throw Error(a(231, t, typeof e_stateNode));
    }
    return e_stateNode;
  }
  var zn = typeof window < `u` && window.document !== undefined && window.document.createElement !== undefined;
  var Bn = false;
  if (zn) {
    try {
      var Vn = {};
      Object.defineProperty(Vn, "passive", {
        get: function () {
          Bn = true;
        }
      });
      window.addEventListener(`test`, Vn, Vn);
      window.removeEventListener(`test`, Vn, Vn);
    } catch {
      Bn = false;
    }
  }
  var Hn = null;
  var Un = null;
  var Wn = null;
  function Gn() {
    if (Wn) {
      return Wn;
    }
    let e;
    const t = Un;
    const t_length = t.length;
    let r;
    const i = `value` in Hn ? Hn.value : Hn.textContent;
    const i_length = i.length;
    for (e = 0; e < t_length && t[e] === i[e]; e++);
    const o = t_length - e;
    for (r = 1; r <= o && t[t_length - r] === i[i_length - r]; r++);
    return Wn = i.slice(e, r > 1 ? 1 - r : undefined);
  }
  function Kn(e) {
    const e_keyCode = e.keyCode;
    if (`charCode` in e) {
      e = e.charCode;
      if (e === 0 && e_keyCode === 13) {
        e = 13;
      }
    } else {
      e = e_keyCode;
    }
    if (e === 10) {
      e = 13;
    }
    if (e >= 32 || e === 13) {
      return e;
    }
    return 0;
  }
  function isPersistent() {
    return true;
  }
  function Jn() {
    return false;
  }
  function Yn(e) {
    function t(t, n, r, i, a) {
      this._reactName = t;
      this._targetInst = r;
      this.type = n;
      this.nativeEvent = i;
      this.target = a;
      this.currentTarget = null;
      for (const o in e) {
        if (e.hasOwnProperty(o)) {
          t = e[o];
          this[o] = t ? t(i) : i[o];
        }
      }
      this.isDefaultPrevented = i.defaultPrevented ?? i.returnValue === false ? isPersistent : Jn;
      this.isPropagationStopped = Jn;
      return this;
    }
    Object_assign(t.prototype, {
      preventDefault: function () {
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
      stopPropagation: function () {
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
      persist: function () {},
      isPersistent
    });
    return t;
  }
  var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Zn = Yn(Xn);
  var Qn = Object_assign({}, Xn, {
    view: 0,
    detail: 0
  });
  var $n = Yn(Qn);
  var er;
  var tr;
  var nr;
  var rr = Object_assign({}, Qn, {
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
    relatedTarget: function (e) {
      if (e.relatedTarget === undefined) {
        if (e.fromElement === e.srcElement) {
          return e.toElement;
        }
        return e.fromElement;
      }
      return e.relatedTarget;
    },
    movementX: function (e) {
      if (`movementX` in e) {
        return e.movementX;
      }
      if (e !== nr) {
        if (nr && e.type === `mousemove`) {
          er = e.screenX - nr.screenX;
          tr = e.screenY - nr.screenY;
        } else {
          tr = er = 0;
        }
        nr = e;
      }
      return er;
    },
    movementY: function (e) {
      if (`movementY` in e) {
        return e.movementY;
      }
      return tr;
    }
  });
  var ir = Yn(rr);
  var ar = Yn(Object_assign({}, rr, {
    dataTransfer: 0
  }));
  var or = Yn(Object_assign({}, Qn, {
    relatedTarget: 0
  }));
  var sr = Yn(Object_assign({}, Xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var cr = Yn(Object_assign({}, Xn, {
    clipboardData: function (e) {
      if (`clipboardData` in e) {
        return e.clipboardData;
      }
      return window.clipboardData;
    }
  }));
  var lr = Yn(Object_assign({}, Xn, {
    data: 0
  }));
  var ur = {
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
  var dr = {
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
  var fr = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
  };
  function pr(e) {
    const nativeEvent = this.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(e);
    }
    if (e = fr[e]) {
      return !!nativeEvent[e];
    }
    return false;
  }
  function getModifierState() {
    return pr;
  }
  var hr = Yn(Object_assign({}, Qn, {
    key: function (e) {
      if (e.key) {
        const t = ur[e.key] || e.key;
        if (t !== `Unidentified`) {
          return t;
        }
      }
      if (e.type === `keypress`) {
        e = Kn(e);
        if (e === 13) {
          return `Enter`;
        }
        return String.fromCharCode(e);
      }
      if (e.type === `keydown` || e.type === `keyup`) {
        return dr[e.keyCode] || `Unidentified`;
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
    charCode: function (e) {
      if (e.type === `keypress`) {
        return Kn(e);
      }
      return 0;
    },
    keyCode: function (e) {
      if (e.type === `keydown` || e.type === `keyup`) {
        return e.keyCode;
      }
      return 0;
    },
    which: function (e) {
      if (e.type === `keypress`) {
        return Kn(e);
      }
      if (e.type === `keydown` || e.type === `keyup`) {
        return e.keyCode;
      }
      return 0;
    }
  }));
  var gr = Yn(Object_assign({}, rr, {
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
  var _r = Yn(Object_assign({}, Xn, {
    submitter: 0
  }));
  var vr = Yn(Object_assign({}, Qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState
  }));
  var yr = Yn(Object_assign({}, Xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var br = Yn(Object_assign({}, rr, {
    deltaX: function (e) {
      if (`deltaX` in e) {
        return e.deltaX;
      }
      if (`wheelDeltaX` in e) {
        return -e.wheelDeltaX;
      }
      return 0;
    },
    deltaY: function (e) {
      if (`deltaY` in e) {
        return e.deltaY;
      }
      if (`wheelDeltaY` in e) {
        return -e.wheelDeltaY;
      }
      if (`wheelDelta` in e) {
        return -e.wheelDelta;
      }
      return 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }));
  var xr = Yn(Object_assign({}, Xn, {
    newState: 0,
    oldState: 0,
    source: 0
  }));
  var Sr = [9, 13, 27, 32];
  var Cr = zn && `CompositionEvent` in window;
  var wr = null;
  if (zn && `documentMode` in document) {
    wr = document.documentMode;
  }
  var Tr = zn && `TextEvent` in window && !wr;
  var Er = zn && (!Cr || wr && wr > 8 && wr <= 11);
  var Dr = ` `;
  var Or = false;
  function kr(e, t) {
    switch (e) {
      case `keyup`:
        return Sr.indexOf(t.keyCode) !== -1;
      case `keydown`:
        return t.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Ar(e) {
    e = e.detail;
    if (typeof e == `object` && `data` in e) {
      return e.data;
    }
    return null;
  }
  var jr = false;
  function Mr(e, t) {
    switch (e) {
      case `compositionend`:
        return Ar(t);
      case `keypress`:
        if (t.which === 32) {
          Or = true;
          return Dr;
        }
        return null;
      case `textInput`:
        e = t.data;
        if (e === Dr && Or) {
          return null;
        }
        return e;
      default:
        return null;
    }
  }
  function Nr(e, t) {
    if (jr) {
      if (e === `compositionend` || !Cr && kr(e, t)) {
        e = Gn();
        Hn = null;
        Un = null;
        Wn = null;
        jr = false;
        return e;
      }
      return null;
    }
    switch (e) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && t.char.length > 1) {
            return t.char;
          }
          if (t.which) {
            return String.fromCharCode(t.which);
          }
        }
        return null;
      case `compositionend`:
        if (Er && t.locale !== `ko`) {
          return null;
        }
        return t.data;
      default:
        return null;
    }
  }
  var Pr = {
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
  function Fr(e) {
    const t = e && e.nodeName && e.nodeName.toLowerCase();
    if (t === `input`) {
      return !!Pr[e.type];
    }
    return t === `textarea`;
  }
  function Ir(e, t, n, r) {
    if (Nn) {
      if (Pn) {
        Pn.push(r);
      } else {
        Pn = [r];
      }
    } else {
      Nn = r;
    }
    t = Jf(t, `onChange`);
    if (t.length > 0) {
      n = new Zn(`onChange`, `change`, null, n, r);
      e.push({
        event: n,
        listeners: t
      });
    }
  }
  var Lr = null;
  var Rr = null;
  function zr(e) {
    Vf(e, 0);
  }
  function Br(e) {
    if (pn(Kt(e))) {
      return e;
    }
  }
  function Vr(e, t) {
    if (e === `change`) {
      return t;
    }
  }
  var Hr = false;
  if (zn) {
    var Ur;
    if (zn) {
      var Wr = `oninput` in document;
      if (!Wr) {
        var Gr = document.createElement(`div`);
        Gr.setAttribute(`oninput`, `return;`);
        Wr = typeof Gr.oninput == `function`;
      }
      Ur = Wr;
    } else {
      Ur = false;
    }
    Hr = Ur && (!document.documentMode || document.documentMode > 9);
  }
  function Kr() {
    if (Lr) {
      Lr.detachEvent(`onpropertychange`, qr);
      Lr = null;
      Rr = null;
    }
  }
  function qr(e) {
    if (e.propertyName === `value` && Br(Rr)) {
      const t = [];
      Ir(t, Rr, e, Mn(e));
      Ln(zr, t);
    }
  }
  function Jr(e, t, n) {
    if (e === `focusin`) {
      Kr();
      Lr = t;
      Rr = n;
      Lr.attachEvent(`onpropertychange`, qr);
    } else if (e === `focusout`) {
      Kr();
    }
  }
  function Yr(e) {
    if (e === `selectionchange` || e === `keyup` || e === `keydown`) {
      return Br(Rr);
    }
  }
  function Xr(e, t) {
    if (e === `click`) {
      return Br(t);
    }
  }
  function Zr(e, t) {
    if (e === `input` || e === `change`) {
      return Br(t);
    }
  }
  function Qr(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var $r = typeof Object.is == `function` ? Object.is : Qr;
  function ei(e, t) {
    if ($r(e, t)) {
      return true;
    }
    if (typeof e != `object` || !e || typeof t != `object` || !t) {
      return false;
    }
    const n = Object.keys(e);
    let r = Object.keys(t);
    if (n.length !== r.length) {
      return false;
    }
    for (r = 0; r < n.length; r++) {
      const i = n[r];
      if (!hasOwnProperty.call(t, i) || !$r(e[i], t[i])) {
        return false;
      }
    }
    return true;
  }
  function ti(e) {
    e ||= typeof document < `u` ? document : undefined;
    if (e === undefined) {
      return null;
    }
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ni(e) {
    while (e && e.firstChild) {
      e = e.firstChild;
    }
    return e;
  }
  function ri(e, t) {
    let node = ni(e);
    e = 0;
    let r;
    while (node) {
      if (node.nodeType === 3) {
        r = e + node.textContent.length;
        if (e <= t && r >= t) {
          return {
            node,
            offset: t - e
          };
        }
        e = r;
      }
      a: {
        while (node) {
          if (node.nextSibling) {
            node = node.nextSibling;
            break a;
          }
          node = node.parentNode;
        }
        node = undefined;
      }
      node = ni(node);
    }
  }
  function ii(e, t) {
    if (e && t) {
      if (e === t) {
        return true;
      }
      if (e && e.nodeType === 3) {
        return false;
      }
      if (t && t.nodeType === 3) {
        return ii(e, t.parentNode);
      }
      if (`contains` in e) {
        return e.contains(t);
      }
      if (e.compareDocumentPosition) {
        return !!(e.compareDocumentPosition(t) & 16);
      }
      return false;
    }
    return false;
  }
  function ai(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ti(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == `string`;
      } catch {
        n = false;
      }
      if (n) {
        e = t.contentWindow;
      } else {
        break;
      }
      t = ti(e.document);
    }
    return t;
  }
  function oi(e) {
    const t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
  }
  var si = zn && `documentMode` in document && document.documentMode <= 11;
  var ci = null;
  var li = null;
  var ui = null;
  var di = false;
  function fi(e, t, n) {
    let r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    if (!(di || ci == null || ci !== ti(r))) {
      r = ci;
      if (`selectionStart` in r && oi(r)) {
        r = {
          start: r.selectionStart,
          end: r.selectionEnd
        };
      } else {
        r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection();
        r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        };
      }
      if (!(ui && ei(ui, r))) {
        ui = r;
        r = Jf(li, `onSelect`);
        if (r.length > 0) {
          t = new Zn(`onSelect`, `select`, null, t, n);
          e.push({
            event: t,
            listeners: r
          });
          t.target = ci;
        }
      }
    }
  }
  function pi(e, t) {
    const n = {};
    n[e.toLowerCase()] = t.toLowerCase();
    n[`Webkit` + e] = `webkit` + t;
    n[`Moz` + e] = `moz` + t;
    return n;
  }
  var mi = {
    animationend: pi(`Animation`, `AnimationEnd`),
    animationiteration: pi(`Animation`, `AnimationIteration`),
    animationstart: pi(`Animation`, `AnimationStart`),
    transitionrun: pi(`Transition`, `TransitionRun`),
    transitionstart: pi(`Transition`, `TransitionStart`),
    transitioncancel: pi(`Transition`, `TransitionCancel`),
    transitionend: pi(`Transition`, `TransitionEnd`)
  };
  var hi = {};
  var gi = {};
  if (zn) {
    gi = document.createElement(`div`).style;
    if (!(`AnimationEvent` in window)) {
      delete mi.animationend.animation;
      delete mi.animationiteration.animation;
      delete mi.animationstart.animation;
    }
    if (!(`TransitionEvent` in window)) {
      delete mi.transitionend.transition;
    }
  }
  function _i(e) {
    if (hi[e]) {
      return hi[e];
    }
    if (!mi[e]) {
      return e;
    }
    const t = mi[e];
    let n;
    for (n in t) {
      if (t.hasOwnProperty(n) && n in gi) {
        return hi[e] = t[n];
      }
    }
    return e;
  }
  var vi = _i(`animationend`);
  var yi = _i(`animationiteration`);
  var bi = _i(`animationstart`);
  var xi = _i(`transitionrun`);
  var Si = _i(`transitionstart`);
  var Ci = _i(`transitioncancel`);
  var wi = _i(`transitionend`);
  var Ti = new Map();
  var Ei = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Ei.push(`scrollEnd`);
  function O(e, t) {
    Ti.set(e, t);
    Qt(t, [e]);
  }
  var Di = 0;
  function k(e, t) {
    if (e.name != null && e.name !== `auto`) {
      return e.name;
    }
    if (t.autoName !== null) {
      return t.autoName;
    }
    e = bd.identifierPrefix;
    const n = Di++;
    e = `_` + e + `t_` + n.toString(32) + `_`;
    return t.autoName = e;
  }
  function Oi(e) {
    if (e == null || typeof e == `string`) {
      return e;
    }
    let t = null;
    const n = Od;
    if (n !== null) {
      for (let r = 0; r < n.length; r++) {
        const i = e[n[r]];
        if (i != null) {
          if (i === `none`) {
            return `none`;
          }
          t = t == null ? i : t + (` ` + i);
        }
      }
    }
    return t ?? e.default;
  }
  function ki(e, t) {
    e = Oi(e);
    t = Oi(t);
    if (t == null) {
      if (e === `auto`) {
        return null;
      }
      return e;
    }
    if (t === `auto`) {
      return null;
    }
    return t;
  }
  var Ai = typeof reportError == `function` ? reportError : error => {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      const t = new window.ErrorEvent(`error`, {
        bubbles: true,
        cancelable: true,
        message: typeof error == `object` && error && typeof error.message == `string` ? String(error.message) : String(error),
        error
      });
      if (!window.dispatchEvent(t)) {
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
  function Pi() {
    for (let e = Mi, t = Ni = Mi = 0; t < e;) {
      const n = ji[t];
      ji[t++] = null;
      const r = ji[t];
      ji[t++] = null;
      const i = ji[t];
      ji[t++] = null;
      const a = ji[t];
      ji[t++] = null;
      if (r !== null && i !== null) {
        const o = r.pending;
        if (o === null) {
          i.next = i;
        } else {
          i.next = o.next;
          o.next = i;
        }
        r.pending = i;
      }
      if (a !== 0) {
        Ri(n, i, a);
      }
    }
  }
  function Fi(e, t, n, r) {
    ji[Mi++] = e;
    ji[Mi++] = t;
    ji[Mi++] = n;
    ji[Mi++] = r;
    Ni |= r;
    e.lanes |= r;
    e = e.alternate;
    if (e !== null) {
      e.lanes |= r;
    }
  }
  function Ii(e, t, n, r) {
    Fi(e, t, n, r);
    return zi(e);
  }
  function Li(e, t) {
    Fi(e, null, null, t);
    return zi(e);
  }
  function Ri(e, t, n) {
    e.lanes |= n;
    let e_alternate = e.alternate;
    if (e_alternate !== null) {
      e_alternate.lanes |= n;
    }
    let i = false;
    for (var a = e.return; a !== null;) {
      a.childLanes |= n;
      e_alternate = a.alternate;
      if (e_alternate !== null) {
        e_alternate.childLanes |= n;
      }
      if (a.tag === 22) {
        e = a.stateNode;
        if (!(e === null || e._visibility & 1)) {
          i = true;
        }
      }
      e = a;
      a = a.return;
    }
    if (e.tag === 3) {
      a = e.stateNode;
      if (i && t !== null) {
        i = 31 - ut(n);
        e = a.hiddenUpdates;
        e_alternate = e[i];
        if (e_alternate === null) {
          e[i] = [t];
        } else {
          e_alternate.push(t);
        }
        t.lane = n | 536870912;
      }
      return a;
    }
    return null;
  }
  function zi(e) {
    if (kd > 50) {
      kd = 0;
      Ad = null;
      throw Error(a(185));
    }
    for (let t = e.return; t !== null;) {
      e = t;
      t = e.return;
    }
    if (e.tag === 3) {
      return e.stateNode;
    }
    return null;
  }
  var Bi = {};
  function Vi(e, t, n, r) {
    this.tag = e;
    this.key = n;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.refCleanup = this.ref = null;
    this.pendingProps = t;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = r;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Hi(e, t, n, r) {
    return new Vi(e, t, n, r);
  }
  function Ui(e) {
    e = e.prototype;
    return !(!e || !e.isReactComponent);
  }
  function Wi(e, t) {
    let e_alternate = e.alternate;
    if (e_alternate === null) {
      e_alternate = Hi(e.tag, t, e.key, e.mode);
      e_alternate.elementType = e.elementType;
      e_alternate.type = e.type;
      e_alternate.stateNode = e.stateNode;
      e_alternate.alternate = e;
      e.alternate = e_alternate;
    } else {
      e_alternate.pendingProps = t;
      e_alternate.type = e.type;
      e_alternate.flags = 0;
      e_alternate.subtreeFlags = 0;
      e_alternate.deletions = null;
    }
    e_alternate.flags = e.flags & 1206910976;
    e_alternate.childLanes = e.childLanes;
    e_alternate.lanes = e.lanes;
    e_alternate.child = e.child;
    e_alternate.memoizedProps = e.memoizedProps;
    e_alternate.memoizedState = e.memoizedState;
    e_alternate.updateQueue = e.updateQueue;
    t = e.dependencies;
    e_alternate.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    };
    e_alternate.sibling = e.sibling;
    e_alternate.index = e.index;
    e_alternate.ref = e.ref;
    e_alternate.refCleanup = e.refCleanup;
    return e_alternate;
  }
  function Gi(e, t) {
    e.flags &= 1206910978;
    const e_alternate = e.alternate;
    if (e_alternate === null) {
      e.childLanes = 0;
      e.lanes = t;
      e.child = null;
      e.subtreeFlags = 0;
      e.memoizedProps = null;
      e.memoizedState = null;
      e.updateQueue = null;
      e.dependencies = null;
      e.stateNode = null;
    } else {
      e.childLanes = e_alternate.childLanes;
      e.lanes = e_alternate.lanes;
      e.child = e_alternate.child;
      e.subtreeFlags = 0;
      e.deletions = null;
      e.memoizedProps = e_alternate.memoizedProps;
      e.memoizedState = e_alternate.memoizedState;
      e.updateQueue = e_alternate.updateQueue;
      e.type = e_alternate.type;
      t = e_alternate.dependencies;
      e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      };
    }
    return e;
  }
  function Ki(e, t, n, r, i, o) {
    let s = 0;
    r = e;
    if (typeof r == `function`) {
      if (Ui(r)) {
        s = 1;
      }
    } else if (typeof r == `string`) {
      s = qm(e, n, Me.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
    } else {
      a: switch (r) {
        case _e:
          e = Hi(31, n, t, i);
          e.elementType = _e;
          e.lanes = o;
          return e;
        case ce:
          return qi(n.children, i, o, t);
        case le:
          s = 8;
          i |= 24;
          break;
        case ue:
          e = Hi(12, n, t, i | 2);
          e.elementType = ue;
          e.lanes = o;
          return e;
        case me:
          e = Hi(13, n, t, i);
          e.elementType = me;
          e.lanes = o;
          return e;
        case he:
          e = Hi(19, n, t, i);
          e.elementType = he;
          e.lanes = o;
          return e;
        case ve:
        case be:
          e = i | 32;
          e = Hi(30, n, t, e);
          e.elementType = be;
          e.lanes = o;
          e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
          return e;
        default:
          if (typeof r == `object` && r) {
            switch (r.$$typeof) {
              case fe:
                s = 10;
                break a;
              case de:
                s = 9;
                break a;
              case pe:
                s = 11;
                break a;
              case C:
                s = 14;
                break a;
              case ge:
                s = 16;
                r = null;
                break a;
            }
          }
          s = 29;
          n = Error(a(130, e === null ? `null` : typeof e, ``));
          r = null;
      }
    }
    t = Hi(s, n, t, i);
    t.elementType = e;
    t.type = r;
    t.lanes = o;
    return t;
  }
  function qi(e, t, n, r) {
    e = Hi(7, e, r, t);
    e.lanes = n;
    return e;
  }
  function Ji(e, mode, n) {
    e = Hi(6, e, null, mode);
    e.lanes = n;
    return e;
  }
  function Yi(e) {
    const t = Hi(18, null, null, 0);
    t.stateNode = e;
    return t;
  }
  function Xi(e, t, n) {
    t = Hi(4, e.children === null ? [] : e.children, e.key, t);
    t.lanes = n;
    t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    };
    return t;
  }
  var Zi = new WeakMap();
  function Qi(e, source) {
    if (typeof e == `object` && e) {
      const n = Zi.get(e);
      if (n === undefined) {
        source = {
          value: e,
          source,
          stack: Ke(source)
        };
        Zi.set(e, source);
        return source;
      }
      return n;
    }
    return {
      value: e,
      source,
      stack: Ke(source)
    };
  }
  var A = [];
  var j = 0;
  var $i = null;
  var ea = 0;
  var ta = [];
  var na = 0;
  var ra = null;
  var ia = 1;
  var overflow = ``;
  function aa(e, t) {
    A[j++] = ea;
    A[j++] = $i;
    $i = e;
    ea = t;
  }
  function N(e, t, n) {
    ta[na++] = ia;
    ta[na++] = overflow;
    ta[na++] = ra;
    ra = e;
    let r = ia;
    e = overflow;
    let i = 32 - ut(r) - 1;
    r &= ~(1 << i);
    n += 1;
    let a = 32 - ut(t) + i;
    if (a > 30) {
      const o = i - i % 5;
      a = (r & (1 << o) - 1).toString(32);
      r >>= o;
      i -= o;
      ia = 1 << 32 - ut(t) + i | n << i | r;
      overflow = a + e;
    } else {
      ia = 1 << a | n << i | r;
      overflow = e;
    }
  }
  function oa(e) {
    if (e.return !== null) {
      aa(e, 1);
      N(e, 1, 0);
    }
  }
  function sa(e) {
    while (e === $i) {
      $i = A[--j];
      A[j] = null;
      ea = A[--j];
      A[j] = null;
    }
    while (e === ra) {
      ra = ta[--na];
      ta[na] = null;
      overflow = ta[--na];
      ta[na] = null;
      ia = ta[--na];
      ta[na] = null;
    }
  }
  function ca(e, t) {
    ta[na++] = ia;
    ta[na++] = overflow;
    ta[na++] = ra;
    ia = t.id;
    overflow = t.overflow;
    ra = e;
  }
  var la = null;
  var P = null;
  var F = false;
  var ua = null;
  var da = false;
  var fa = Error(a(519));
  function pa(e) {
    ya(Qi(Error(a(418, arguments.length > 1 && arguments[1] !== undefined && arguments[1] ? `text` : `HTML`, ``)), e));
    throw fa;
  }
  function ma(e) {
    let e_stateNode = e.stateNode;
    let e_type = e.type;
    const e_memoizedProps = e.memoizedProps;
    e_stateNode[Pt] = e;
    e_stateNode[Ft] = e_memoizedProps;
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
        _n(e_stateNode, e_memoizedProps.value, e_memoizedProps.defaultValue, e_memoizedProps.checked, e_memoizedProps.defaultChecked, e_memoizedProps.type, e_memoizedProps.name, true);
        break;
      case `select`:
        Q(`invalid`, e_stateNode);
        break;
      case `textarea`:
        Q(`invalid`, e_stateNode);
        xn(e_stateNode, e_memoizedProps.value, e_memoizedProps.defaultValue, e_memoizedProps.children);
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
      pa(e, true);
    }
  }
  function ha(e) {
    for (la = e.return; la;) {
      switch (la.tag) {
        case 5:
        case 31:
        case 13:
          da = false;
          return;
        case 27:
        case 3:
          da = true;
          return;
        default:
          la = la.return;
      }
    }
  }
  function ga(e) {
    if (e !== la) {
      return false;
    }
    if (!F) {
      ha(e);
      F = true;
      return false;
    }
    let e_tag = e.tag;
    let n;
    if (n = e_tag !== 3 && e_tag !== 27) {
      if (n = e_tag === 5) {
        n = e.type;
        n = n === `form` || n === `button` || pp(e.type, e.memoizedProps);
      }
      n = !n;
    }
    if (n && P) {
      pa(e);
    }
    ha(e);
    if (e_tag === 13) {
      e = e.memoizedState;
      e = e === null ? null : e.dehydrated;
      if (!e) {
        throw Error(a(317));
      }
      P = dm(e);
    } else if (e_tag === 31) {
      e = e.memoizedState;
      e = e === null ? null : e.dehydrated;
      if (!e) {
        throw Error(a(317));
      }
      P = dm(e);
    } else {
      if (e_tag === 27) {
        e_tag = P;
        if (Sp(e.type)) {
          e = um;
          um = null;
          P = e;
        } else {
          P = e_tag;
        }
      } else {
        P = la ? lm(e.stateNode.nextSibling) : null;
      }
    }
    return true;
  }
  function _a() {
    la = null;
    P = null;
    F = false;
  }
  function va() {
    const e = ua;
    if (e !== null) {
      if (pd === null) {
        pd = e;
      } else {
        pd.push(...e);
      }
      ua = null;
    }
    return e;
  }
  function ya(e) {
    if (ua === null) {
      ua = [e];
    } else {
      ua.push(e);
    }
  }
  var ba = Ae(null);
  var xa = null;
  var Sa = null;
  function Ca(e, t, n) {
    E(ba, t._currentValue);
    t._currentValue = n;
  }
  function wa(e) {
    e._currentValue = ba.current;
    je(ba);
  }
  function I(e, t, n) {
    while (e !== null) {
      const r = e.alternate;
      if ((e.childLanes & t) === t) {
        if (r !== null && (r.childLanes & t) !== t) {
          r.childLanes |= t;
        }
      } else {
        e.childLanes |= t;
        if (r !== null) {
          r.childLanes |= t;
        }
      }
      if (e === n) {
        break;
      }
      e = e.return;
    }
  }
  function Ta(e, t, n, r) {
    let e_child = e.child;
    for (e_child !== null && (e_child.return = e); e_child !== null;) {
      let o = e_child.dependencies;
      if (o !== null) {
        var s = e_child.child;
        o = o.firstContext;
        a: while (o !== null) {
          let c = o;
          o = e_child;
          for (let l = 0; l < t.length; l++) {
            if (c.context === t[l]) {
              o.lanes |= n;
              c = o.alternate;
              if (c !== null) {
                c.lanes |= n;
              }
              I(o.return, n, e);
              if (!r) {
                s = null;
              }
              break a;
            }
          }
          o = c.next;
        }
      } else if (e_child.tag === 18) {
        s = e_child.return;
        if (s === null) {
          throw Error(a(341));
        }
        s.lanes |= n;
        o = s.alternate;
        if (o !== null) {
          o.lanes |= n;
        }
        I(s, n, e);
        s = null;
      } else {
        if (e_child.tag === 13 && e_child.memoizedState !== null && e_child.memoizedState.dehydrated === null) {
          e_child.lanes |= n;
          s = e_child.alternate;
          if (s !== null) {
            s.lanes |= n;
          }
          I(e_child.return, n, e);
          s = e_child.child;
          s = s === null ? null : s.sibling;
        } else {
          s = e_child.child;
        }
      }
      if (s !== null) {
        s.return = e_child;
      } else {
        for (s = e_child; s !== null;) {
          if (s === e) {
            s = null;
            break;
          }
          e_child = s.sibling;
          if (e_child !== null) {
            e_child.return = s.return;
            s = e_child;
            break;
          }
          s = s.return;
        }
      }
      e_child = s;
    }
  }
  function Ea(e, t, n, r) {
    e = null;
    for (let i = t, o = false; i !== null;) {
      if (!o) {
        if (i.flags & 524288) {
          o = true;
        } else if (i.flags & 262144) {
          break;
        }
      }
      if (i.tag === 10) {
        var s = i.alternate;
        if (s === null) {
          throw Error(a(387));
        }
        s = s.memoizedProps;
        if (s !== null) {
          const c = i.type;
          if (!$r(i.pendingProps.value, s.value)) {
            if (e === null) {
              e = [c];
            } else {
              e.push(c);
            }
          }
        }
      } else if (i === Fe.current) {
        s = i.alternate;
        if (s === null) {
          throw Error(a(387));
        }
        if (s.memoizedState.memoizedState !== i.memoizedState.memoizedState) {
          if (e === null) {
            e = [sh];
          } else {
            e.push(sh);
          }
        }
      }
      i = i.return;
    }
    if (e !== null) {
      Ta(t, e, n, r);
    }
    t.flags |= 262144;
    return e !== null;
  }
  function Da(e) {
    for (e = e.firstContext; e !== null;) {
      if (!$r(e.context._currentValue, e.memoizedValue)) {
        return true;
      }
      e = e.next;
    }
    return false;
  }
  function Oa(e) {
    xa = e;
    Sa = null;
    e = e.dependencies;
    if (e !== null) {
      e.firstContext = null;
    }
  }
  function ka(e) {
    return ja(xa, e);
  }
  function Aa(e, t) {
    if (xa === null) {
      Oa(e);
    }
    return ja(e, t);
  }
  function ja(e, t) {
    const t__currentValue = t._currentValue;
    t = {
      context: t,
      memoizedValue: t__currentValue,
      next: null
    };
    if (Sa === null) {
      if (e === null) {
        throw Error(a(308));
      }
      Sa = t;
      e.dependencies = {
        lanes: 0,
        firstContext: t
      };
      e.flags |= 524288;
    } else {
      Sa = Sa.next = t;
    }
    return t__currentValue;
  }
  var Ma = typeof AbortController < `u` ? AbortController : function () {
    const e = [];
    const t = this.signal = {
      aborted: false,
      addEventListener: function (t, n) {
        e.push(n);
      }
    };
    this.abort = function () {
      t.aborted = true;
      e.forEach(e => e());
    };
  };
  var t_unstable_scheduleCallback_1 = t.unstable_scheduleCallback;
  var t_unstable_NormalPriority_1 = t.unstable_NormalPriority;
  var L = {
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
      data: new Map(),
      refCount: 0
    };
  }
  function Ia(e) {
    e.refCount--;
    if (e.refCount === 0) {
      t_unstable_scheduleCallback_1(t_unstable_NormalPriority_1, function () {
        e.controller.abort();
      });
    }
  }
  function La(e, t) {
    if (e.pendingLanes & 4194048) {
      let n = e.transitionTypes;
      if (n === null) {
        n = e.transitionTypes = [];
      }
      for (e = 0; e < t.length; e++) {
        const r = t[e];
        if (n.indexOf(r) === -1) {
          n.push(r);
        }
      }
    }
  }
  var Ra = null;
  function za(e) {
    const e_transitionTypes = e.transitionTypes;
    e.transitionTypes = null;
    return e_transitionTypes;
  }
  var Ba = null;
  var Va = 0;
  var Ha = 0;
  var Ua = null;
  function Wa(e, t) {
    if (Ba === null) {
      const n = Ba = [];
      Va = 0;
      Ha = Pf();
      Ua = {
        status: `pending`,
        value: undefined,
        then: function (e) {
          n.push(e);
        }
      };
    }
    Va++;
    t.then(Ga, Ga);
    return t;
  }
  function Ga() {
    if (--Va === 0 && (Ra = null, Ba !== null)) {
      if (Ua !== null) {
        Ua.status = `fulfilled`;
      }
      const e = Ba;
      Ba = null;
      Ha = 0;
      Ua = null;
      for (let t = 0; t < e.length; t++) {
        e[t]();
      }
    }
  }
  function Ka(e, t) {
    const n = [];
    const r = {
      status: `pending`,
      value: null,
      reason: null,
      then: function (e) {
        n.push(e);
      }
    };
    e.then(() => {
      r.status = `fulfilled`;
      r.value = t;
      for (let e = 0; e < n.length; e++) {
        n[e](t);
      }
    }, e => {
      r.status = `rejected`;
      r.reason = e;
      for (e = 0; e < n.length; e++) {
        n[e](undefined);
      }
    });
    return r;
  }
  var r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
  r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = function (e, t) {
    gd = t_unstable_now();
    if (typeof t == `object` && t && typeof t.then == `function`) {
      Wa(e, t);
    }
    if (Ra !== null) {
      for (var n = bf; n !== null;) {
        La(n, Ra);
        n = n.next;
      }
    }
    n = e.types;
    if (n !== null) {
      for (var r = bf; r !== null;) {
        La(r, n);
        r = r.next;
      }
      if (Ha !== 0) {
        r = Ra;
        if (r === null) {
          r = Ra = [];
        }
        for (const a of n) {
          if (r.indexOf(a) === -1) {
            r.push(a);
          }
        }
      }
    }
    if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S !== null) {
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_S(e, t);
    }
  };
  var Ja = Ae(null);
  function Ya() {
    const Ja_current = Ja.current;
    if (Ja_current === null) {
      return K.pooledCache;
    }
    return Ja_current;
  }
  function Xa(e, t) {
    if (t === null) {
      E(Ja, Ja.current);
    } else {
      E(Ja, t.pool);
    }
  }
  function Za() {
    const pool = Ya();
    if (pool === null) {
      return null;
    }
    return {
      parent: L._currentValue,
      pool
    };
  }
  var Qa = Error(a(460));
  var $a = Error(a(474));
  var eo = Error(a(542));
  var to = {
    then: function () {}
  };
  function no(e) {
    e = e.status;
    return e === `fulfilled` || e === `rejected`;
  }
  function ro(e, t, n) {
    n = e[n];
    if (n === undefined) {
      e.push(t);
    } else if (n !== t) {
      t.then(unsuspend, unsuspend);
      t = n;
    }
    switch (t.status) {
      case `fulfilled`:
        return t.value;
      case `rejected`:
        e = t.reason;
        so(e);
        throw e === undefined && !(`reason` in t) ? Error(a(600)) : e;
      default:
        if (typeof t.status == `string`) {
          t.then(unsuspend, unsuspend);
        } else {
          e = K;
          if (e !== null && e.shellSuspendCounter > 100) {
            throw Error(a(482));
          }
          e = t;
          e.status = `pending`;
          e.then(e => {
            if (t.status === `pending`) {
              const n = t;
              n.status = `fulfilled`;
              n.value = e;
            }
          }, e => {
            if (t.status === `pending`) {
              const n = t;
              n.status = `rejected`;
              n.reason = e;
            }
          });
        }
        switch (t.status) {
          case `fulfilled`:
            return t.value;
          case `rejected`:
            e = t.reason;
            so(e);
            throw e;
        }
        ao = t;
        throw Qa;
    }
  }
  function io(e) {
    try {
      const t = e._init;
      return t(e._payload);
    } catch (error) {
      throw typeof error == `object` && error && typeof error.then == `function` ? (ao = error, Qa) : error;
    }
  }
  var ao = null;
  function oo() {
    if (ao === null) {
      throw Error(a(459));
    }
    const e = ao;
    ao = null;
    return e;
  }
  function so(e) {
    if (e === Qa || e === eo) {
      throw Error(a(483));
    }
  }
  var co = null;
  var lo = 0;
  function uo(e) {
    const t = lo;
    lo += 1;
    if (co === null) {
      co = [];
    }
    return ro(co, e, t);
  }
  function fo(e, t) {
    t = t.props.ref;
    e.ref = t === undefined ? null : t;
  }
  function po(e, t) {
    throw t.$$typeof === ae ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
  }
  function mo(e) {
    function t(t, n) {
      if (e) {
        const r = t.deletions;
        if (r === null) {
          t.deletions = [n];
          t.flags |= 16;
        } else {
          r.push(n);
        }
      }
    }
    function n(n, r) {
      if (!e) {
        return null;
      }
      while (r !== null) {
        t(n, r);
        r = r.sibling;
      }
      return null;
    }
    function r(e) {
      const t = new Map();
      while (e !== null) {
        if (e.key === null) {
          t.set(e.index, e);
        } else {
          t.set(e.key, e);
        }
        e = e.sibling;
      }
      return t;
    }
    function i(e, t) {
      e = Wi(e, t);
      e.index = 0;
      e.sibling = null;
      return e;
    }
    function o(t, n, r) {
      t.index = r;
      if (e) {
        r = t.alternate;
        if (r === null) {
          return t.flags |= 134217730, n;
        }
        return r = r.index, r < n ? (t.flags |= 2, n) : r;
      }
      t.flags |= 1048576;
      return n;
    }
    function s(t) {
      if (e && t.alternate === null) {
        t.flags |= 134217730;
      }
      return t;
    }
    function c(e, t, n, r) {
      if (t === null || t.tag !== 6) {
        t = Ji(n, e.mode, r);
        t.return = e;
        return t;
      }
      t = i(t, n);
      t.return = e;
      return t;
    }
    function l(e, t, n, r) {
      const n_type = n.type;
      if (n_type === ce) {
        e = d(e, t, n.props.children, r, n.key);
        fo(e, n);
        return e;
      }
      if (t !== null && (t.elementType === n_type || typeof n_type == `object` && n_type && n_type.$$typeof === ge && io(n_type) === t.type)) {
        t = i(t, n.props);
        fo(t, n);
        t.return = e;
        return t;
      }
      t = Ki(n.type, n.key, n.props, null, e.mode, r);
      fo(t, n);
      t.return = e;
      return t;
    }
    function u(e, t, n, r) {
      if (t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation) {
        t = Xi(n, e.mode, r);
        t.return = e;
        return t;
      }
      t = i(t, n.children || []);
      t.return = e;
      return t;
    }
    function d(e, t, n, r, a) {
      if (t === null || t.tag !== 7) {
        t = qi(n, e.mode, r, a);
        t.return = e;
        return t;
      }
      t = i(t, n);
      t.return = e;
      return t;
    }
    function f(e, t, n) {
      if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`) {
        t = Ji(`` + t, e.mode, n);
        t.return = e;
        return t;
      }
      if (typeof t == `object` && t) {
        switch (t.$$typeof) {
          case oe:
            n = Ki(t.type, t.key, t.props, null, e.mode, n);
            fo(n, t);
            n.return = e;
            return n;
          case se:
            t = Xi(t, e.mode, n);
            t.return = e;
            return t;
          case ge:
            t = io(t);
            return f(e, t, n);
        }
        if (Array_isArray(t) || Ce(t)) {
          t = qi(t, e.mode, n, null);
          t.return = e;
          return t;
        }
        if (typeof t.then == `function`) {
          return f(e, uo(t), n);
        }
        if (t.$$typeof === fe) {
          return f(e, Aa(e, t), n);
        }
        po(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      const i = t === null ? null : t.key;
      if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`) {
        if (i === null) {
          return c(e, t, `` + n, r);
        }
        return null;
      }
      if (typeof n == `object` && n) {
        switch (n.$$typeof) {
          case oe:
            if (n.key === i) {
              return l(e, t, n, r);
            }
            return null;
          case se:
            if (n.key === i) {
              return u(e, t, n, r);
            }
            return null;
          case ge:
            n = io(n);
            return p(e, t, n, r);
        }
        if (Array_isArray(n) || Ce(n)) {
          if (i === null) {
            return d(e, t, n, r, null);
          }
          return null;
        }
        if (typeof n.then == `function`) {
          return p(e, t, uo(n), r);
        }
        if (n.$$typeof === fe) {
          return p(e, t, Aa(e, n), r);
        }
        po(e, n);
      }
      return null;
    }
    function m(e, t, n, r, i) {
      if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`) {
        e = e.get(n) || null;
        return c(t, e, `` + r, i);
      }
      if (typeof r == `object` && r) {
        switch (r.$$typeof) {
          case oe:
            e = e.get(r.key === null ? n : r.key) || null;
            return l(t, e, r, i);
          case se:
            e = e.get(r.key === null ? n : r.key) || null;
            return u(t, e, r, i);
          case ge:
            r = io(r);
            return m(e, t, n, r, i);
        }
        if (Array_isArray(r) || Ce(r)) {
          e = e.get(n) || null;
          return d(t, e, r, i, null);
        }
        if (typeof r.then == `function`) {
          return m(e, t, n, uo(r), i);
        }
        if (r.$$typeof === fe) {
          return m(e, t, n, Aa(t, r), i);
        }
        po(t, r);
      }
      return null;
    }
    function h(i, a, s, c) {
      let l = null;
      let u = null;
      for (var d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
        if (d.index > h) {
          g = d;
          d = null;
        } else {
          g = d.sibling;
        }
        var _ = p(i, d, s[h], c);
        if (_ === null) {
          if (d === null) {
            d = g;
          }
          break;
        }
        if (e && d && _.alternate === null) {
          t(i, d);
        }
        a = o(_, a, h);
        if (u === null) {
          l = _;
        } else {
          u.sibling = _;
        }
        u = _;
        d = g;
      }
      if (h === s.length) {
        n(i, d);
        if (F) {
          aa(i, h);
        }
        return l;
      }
      if (d === null) {
        for (; h < s.length; h++) {
          d = f(i, s[h], c);
          if (d !== null) {
            a = o(d, a, h);
            if (u === null) {
              l = d;
            } else {
              u.sibling = d;
            }
            u = d;
          }
        }
        if (F) {
          aa(i, h);
        }
        return l;
      }
      for (d = r(d); h < s.length; h++) {
        g = m(d, i, h, s[h], c);
        if (g !== null) {
          if (e) {
            _ = g.alternate;
            if (_ !== null) {
              d.delete(_.key === null ? h : _.key);
            }
          }
          a = o(g, a, h);
          if (u === null) {
            l = g;
          } else {
            u.sibling = g;
          }
          u = g;
        }
      }
      if (e) {
        d.forEach(e => t(i, e));
      }
      if (F) {
        aa(i, h);
      }
      return l;
    }
    function g(i, s, c, l) {
      if (c == null) {
        throw Error(a(151));
      }
      let u = null;
      let d = null;
      for (var h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
        if (h.index > g) {
          _ = h;
          h = null;
        } else {
          _ = h.sibling;
        }
        const y = p(i, h, v.value, l);
        if (y === null) {
          if (h === null) {
            h = _;
          }
          break;
        }
        if (e && h && y.alternate === null) {
          t(i, h);
        }
        s = o(y, s, g);
        if (d === null) {
          u = y;
        } else {
          d.sibling = y;
        }
        d = y;
        h = _;
      }
      if (v.done) {
        n(i, h);
        if (F) {
          aa(i, g);
        }
        return u;
      }
      if (h === null) {
        for (; !v.done; g++, v = c.next()) {
          v = f(i, v.value, l);
          if (v !== null) {
            s = o(v, s, g);
            if (d === null) {
              u = v;
            } else {
              d.sibling = v;
            }
            d = v;
          }
        }
        if (F) {
          aa(i, g);
        }
        return u;
      }
      for (h = r(h); !v.done; g++, v = c.next()) {
        v = m(h, i, g, v.value, l);
        if (v !== null) {
          if (e) {
            _ = v.alternate;
            if (_ !== null) {
              h.delete(_.key === null ? g : _.key);
            }
          }
          s = o(v, s, g);
          if (d === null) {
            u = v;
          } else {
            d.sibling = v;
          }
          d = v;
        }
      }
      if (e) {
        h.forEach(e => t(i, e));
      }
      if (F) {
        aa(i, g);
      }
      return u;
    }
    function _(e, r, o, c) {
      if (typeof o == `object` && o && o.type === ce && o.key === null && o.props.ref === undefined) {
        o = o.props.children;
      }
      if (typeof o == `object` && o) {
        switch (o.$$typeof) {
          case oe:
            a: {
              var l = o.key;
              while (r !== null) {
                if (r.key === l) {
                  l = o.type;
                  if (l === ce) {
                    if (r.tag === 7) {
                      n(e, r.sibling);
                      c = i(r, o.props.children);
                      fo(c, o);
                      c.return = e;
                      e = c;
                      break a;
                    }
                  } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === ge && io(l) === r.type) {
                    n(e, r.sibling);
                    c = i(r, o.props);
                    fo(c, o);
                    c.return = e;
                    e = c;
                    break a;
                  }
                  n(e, r);
                  break;
                }
                t(e, r);
                r = r.sibling;
              }
              if (o.type === ce) {
                c = qi(o.props.children, e.mode, c, o.key);
                fo(c, o);
                c.return = e;
                e = c;
              } else {
                c = Ki(o.type, o.key, o.props, null, e.mode, c);
                fo(c, o);
                c.return = e;
                e = c;
              }
            }
            return s(e);
          case se:
            a: {
              for (l = o.key; r !== null;) {
                if (r.key === l) {
                  if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                    n(e, r.sibling);
                    c = i(r, o.children || []);
                    c.return = e;
                    e = c;
                    break a;
                  }
                  n(e, r);
                  break;
                }
                t(e, r);
                r = r.sibling;
              }
              c = Xi(o, e.mode, c);
              c.return = e;
              e = c;
            }
            return s(e);
          case ge:
            o = io(o);
            return _(e, r, o, c);
        }
        if (Array_isArray(o)) {
          return h(e, r, o, c);
        }
        if (Ce(o)) {
          l = Ce(o);
          if (typeof l != `function`) {
            throw Error(a(150));
          }
          o = l.call(o);
          return g(e, r, o, c);
        }
        if (typeof o.then == `function`) {
          return _(e, r, uo(o), c);
        }
        if (o.$$typeof === fe) {
          return _(e, r, Aa(e, o), c);
        }
        po(e, o);
      }
      if (typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint`) {
        o = `` + o;
        if (r !== null && r.tag === 6) {
          n(e, r.sibling);
          c = i(r, o);
          c.return = e;
          e = c;
        } else {
          n(e, r);
          c = Ji(o, e.mode, c);
          c.return = e;
          e = c;
        }
        return s(e);
      }
      return n(e, r);
    }
    return function (e, t, n, r) {
      try {
        lo = 0;
        const i = _(e, t, n, r);
        co = null;
        return i;
      } catch (error) {
        if (error === Qa || error === eo) {
          throw error;
        }
        const a = Hi(29, error, null, e.mode);
        a.lanes = r;
        a.return = e;
        return a;
      }
    };
  }
  var ho = mo(true);
  var go = mo(false);
  var _o = false;
  function vo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
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
  function yo(e, t) {
    e = e.updateQueue;
    if (t.updateQueue === e) {
      t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      };
    }
  }
  function bo(lane) {
    return {
      lane,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function xo(e, t, n) {
    let e_updateQueue = e.updateQueue;
    if (e_updateQueue === null) {
      return null;
    }
    e_updateQueue = e_updateQueue.shared;
    if (G & 2) {
      const i = e_updateQueue.pending;
      if (i === null) {
        t.next = t;
      } else {
        t.next = i.next;
        i.next = t;
      }
      e_updateQueue.pending = t;
      t = zi(e);
      Ri(e, null, n);
      return t;
    }
    Fi(e, e_updateQueue, t, n);
    return zi(e);
  }
  function So(e, t, n) {
    t = t.updateQueue;
    if (t !== null && (t = t.shared, n & 4194048)) {
      let r = t.lanes;
      r &= e.pendingLanes;
      n |= r;
      t.lanes = n;
      Dt(e, n);
    }
  }
  function Co(e, t) {
    let e_updateQueue = e.updateQueue;
    let e_alternate = e.alternate;
    if (e_alternate !== null && (e_alternate = e_alternate.updateQueue, e_updateQueue === e_alternate)) {
      let firstBaseUpdate = null;
      let lastBaseUpdate = null;
      e_updateQueue = e_updateQueue.firstBaseUpdate;
      if (e_updateQueue !== null) {
        do {
          const o = {
            lane: e_updateQueue.lane,
            tag: e_updateQueue.tag,
            payload: e_updateQueue.payload,
            callback: null,
            next: null
          };
          if (lastBaseUpdate === null) {
            lastBaseUpdate = o;
            firstBaseUpdate = o;
          } else {
            lastBaseUpdate = lastBaseUpdate.next = o;
          }
          e_updateQueue = e_updateQueue.next;
        } while (e_updateQueue !== null);
        if (lastBaseUpdate === null) {
          lastBaseUpdate = t;
          firstBaseUpdate = t;
        } else {
          lastBaseUpdate = lastBaseUpdate.next = t;
        }
      } else {
        lastBaseUpdate = t;
        firstBaseUpdate = t;
      }
      e_updateQueue = {
        baseState: e_alternate.baseState,
        firstBaseUpdate,
        lastBaseUpdate,
        shared: e_alternate.shared,
        callbacks: e_alternate.callbacks
      };
      e.updateQueue = e_updateQueue;
      return;
    }
    e = e_updateQueue.lastBaseUpdate;
    if (e === null) {
      e_updateQueue.firstBaseUpdate = t;
    } else {
      e.next = t;
    }
    e_updateQueue.lastBaseUpdate = t;
  }
  var wo = false;
  function To() {
    if (wo) {
      const e = Ua;
      if (e !== null) {
        throw e;
      }
    }
  }
  function Eo(e, t, n, r) {
    wo = false;
    const e_updateQueue = e.updateQueue;
    _o = false;
    let i_firstBaseUpdate = e_updateQueue.firstBaseUpdate;
    let i_lastBaseUpdate = e_updateQueue.lastBaseUpdate;
    let pending = e_updateQueue.shared.pending;
    if (pending !== null) {
      e_updateQueue.shared.pending = null;
      var c = pending;
      var l = c.next;
      c.next = null;
      if (i_lastBaseUpdate === null) {
        i_firstBaseUpdate = l;
      } else {
        i_lastBaseUpdate.next = l;
      }
      i_lastBaseUpdate = c;
      var u = e.alternate;
      if (u !== null) {
        u = u.updateQueue;
        pending = u.lastBaseUpdate;
        if (pending !== i_lastBaseUpdate) {
          if (pending === null) {
            u.firstBaseUpdate = l;
          } else {
            pending.next = l;
          }
          u.lastBaseUpdate = c;
        }
      }
    }
    if (i_firstBaseUpdate !== null) {
      let d = e_updateQueue.baseState;
      i_lastBaseUpdate = 0;
      c = null;
      l = null;
      u = null;
      pending = i_firstBaseUpdate;
      do {
        let f = pending.lane & -536870913;
        let p = f !== pending.lane;
        if (p ? (J & f) === f : (r & f) === f) {
          if (f !== 0 && f === Ha) {
            wo = true;
          }
          if (u !== null) {
            u = u.next = {
              lane: 0,
              tag: pending.tag,
              payload: pending.payload,
              callback: null,
              next: null
            };
          }
          a: {
            let m = e;
            const h = pending;
            f = t;
            const g = n;
            switch (h.tag) {
              case 1:
                m = h.payload;
                if (typeof m == `function`) {
                  d = m.call(g, d, f);
                  break a;
                }
                d = m;
                break a;
              case 3:
                m.flags = m.flags & -65537 | 128;
              case 0:
                m = h.payload;
                f = typeof m == `function` ? m.call(g, d, f) : m;
                if (f == null) {
                  break a;
                }
                d = Object_assign({}, d, f);
                break a;
              case 2:
                _o = true;
            }
          }
          f = pending.callback;
          if (f !== null) {
            e.flags |= 64;
            if (p) {
              e.flags |= 8192;
            }
            p = e_updateQueue.callbacks;
            if (p === null) {
              e_updateQueue.callbacks = [f];
            } else {
              p.push(f);
            }
          }
        } else {
          p = {
            lane: f,
            tag: pending.tag,
            payload: pending.payload,
            callback: pending.callback,
            next: null
          };
          if (u === null) {
            u = p;
            l = p;
            c = d;
          } else {
            u = u.next = p;
          }
          i_lastBaseUpdate |= f;
        }
        pending = pending.next;
        if (pending === null) {
          pending = e_updateQueue.shared.pending;
          if (pending === null) {
            break;
          }
          p = pending;
          pending = p.next;
          p.next = null;
          e_updateQueue.lastBaseUpdate = p;
          e_updateQueue.shared.pending = null;
        }
      } while (1);
      if (u === null) {
        c = d;
      }
      e_updateQueue.baseState = c;
      e_updateQueue.firstBaseUpdate = l;
      e_updateQueue.lastBaseUpdate = u;
      if (i_firstBaseUpdate === null) {
        e_updateQueue.shared.lanes = 0;
      }
      sd |= i_lastBaseUpdate;
      e.lanes = i_lastBaseUpdate;
      e.memoizedState = d;
    }
  }
  function Do(e, t) {
    if (typeof e != `function`) {
      throw Error(a(191, e));
    }
    e.call(t);
  }
  function Oo(e, t) {
    const e_callbacks = e.callbacks;
    if (e_callbacks !== null) {
      e.callbacks = null;
      for (e = 0; e < e_callbacks.length; e++) {
        Do(e_callbacks[e], t);
      }
    }
  }
  var ko = Ae(null);
  var Ao = Ae(0);
  function jo(e, t) {
    e = ad;
    E(Ao, e);
    E(ko, t);
    ad = e | t.baseLanes;
  }
  function Mo() {
    E(Ao, ad);
    E(ko, ko.current);
  }
  function No() {
    ad = Ao.current;
    je(ko);
    je(Ao);
  }
  var Po = Ae(null);
  var Fo = null;
  function Io(e) {
    const e_alternate = e.alternate;
    E(Vo, Vo.current & 1);
    E(Po, e);
    if (Fo === null && (e_alternate === null || ko.current !== null || e_alternate.memoizedState !== null)) {
      Fo = e;
    }
  }
  function Lo(e) {
    E(Vo, Vo.current);
    E(Po, e);
    if (Fo === null) {
      Fo = e;
    }
  }
  function Ro(e) {
    if (e.tag === 22) {
      E(Vo, Vo.current);
      E(Po, e);
      if (Fo === null) {
        Fo = e;
      }
    } else {
      zo();
    }
  }
  function zo() {
    E(Vo, Vo.current);
    E(Po, Po.current);
  }
  function Bo(e) {
    je(Po);
    if (Fo === e) {
      Fo = null;
    }
    je(Vo);
  }
  var Vo = Ae(0);
  function Ho(e, t) {
    E(Po, Po.current);
    E(Vo, t);
  }
  function Uo(e) {
    je(Vo);
    je(Po);
    if (Fo === e) {
      Fo = null;
    }
  }
  function Wo(e) {
    for (let t = e; t !== null;) {
      if (t.tag === 13) {
        let n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) {
          return t;
        }
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
        if (t.flags & 128) {
          return t;
        }
      } else if (t.child !== null) {
        t.child.return = t;
        t = t.child;
        continue;
      }
      if (t === e) {
        break;
      }
      while (t.sibling === null) {
        if (t.return === null || t.return === e) {
          return null;
        }
        t = t.return;
      }
      t.sibling.return = t.return;
      t = t.sibling;
    }
    return null;
  }
  var Go = 0;
  var R = null;
  var z = null;
  var Ko = null;
  var qo = false;
  var Jo = false;
  var Yo = false;
  var Xo = 0;
  var Zo = 0;
  var Qo = null;
  var $o = 0;
  function B() {
    throw Error(a(321));
  }
  function es(e, t) {
    if (t === null) {
      return false;
    }
    for (let n = 0; n < t.length && n < e.length; n++) {
      if (!$r(e[n], t[n])) {
        return false;
      }
    }
    return true;
  }
  function ts(e, t, n, r, i, a) {
    Go = a;
    R = t;
    t.memoizedState = null;
    t.updateQueue = null;
    t.lanes = 0;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = e === null || e.memoizedState === null ? _c : vc;
    Yo = false;
    a = n(r, i);
    Yo = false;
    if (Jo) {
      a = rs(t, n, r, i);
    }
    ns(e);
    return a;
  }
  function ns(e) {
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = gc;
    const t = z !== null && z.next !== null;
    Go = 0;
    R = null;
    z = null;
    Ko = null;
    qo = false;
    Zo = 0;
    Qo = null;
    if (t) {
      throw Error(a(300));
    }
    if (!(e === null || Fc)) {
      e = e.dependencies;
      if (e !== null && Da(e)) {
        Fc = true;
      }
    }
  }
  function rs(e, t, n, r) {
    R = e;
    let i = 0;
    do {
      if (Jo) {
        Qo = null;
      }
      Zo = 0;
      Jo = false;
      if (i >= 25) {
        throw Error(a(301));
      }
      i += 1;
      z = null;
      Ko = null;
      if (e.updateQueue != null) {
        var o = e.updateQueue;
        o.lastEffect = null;
        o.events = null;
        o.stores = null;
        if (o.memoCache != null) {
          o.memoCache.index = 0;
        }
      }
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = yc;
      o = t(n, r);
    } while (Jo);
    return o;
  }
  function useIs() {
    let r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
    let t = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H.useState()[0];
    t = typeof t.then == `function` ? us(t) : t;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H.useState()[0];
    if ((z === null ? null : z.memoizedState) !== r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_H) {
      R.flags |= 1024;
    }
    return t;
  }
  function as() {
    const e = Xo !== 0;
    Xo = 0;
    return e;
  }
  function os(e, t, n) {
    t.updateQueue = e.updateQueue;
    t.flags &= -2053;
    e.lanes &= ~n;
  }
  function ss(e) {
    if (qo) {
      for (e = e.memoizedState; e !== null;) {
        const t = e.queue;
        if (t !== null) {
          t.pending = null;
        }
        e = e.next;
      }
      qo = false;
    }
    Go = 0;
    R = null;
    z = null;
    Ko = null;
    Jo = false;
    Xo = 0;
    Zo = 0;
    Qo = null;
  }
  function cs() {
    const e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (Ko === null) {
      R.memoizedState = Ko = e;
    } else {
      Ko = Ko.next = e;
    }
    return Ko;
  }
  function V() {
    if (z === null) {
      var e = R.alternate;
      e = e === null ? null : e.memoizedState;
    } else {
      e = z.next;
    }
    const t = Ko === null ? R.memoizedState : Ko.next;
    if (t !== null) {
      Ko = t;
      z = e;
    } else {
      if (e === null) {
        throw R.alternate === null ? Error(a(467)) : Error(a(310));
      }
      z = e;
      e = {
        memoizedState: z.memoizedState,
        baseState: z.baseState,
        baseQueue: z.baseQueue,
        queue: z.queue,
        next: null
      };
      if (Ko === null) {
        R.memoizedState = Ko = e;
      } else {
        Ko = Ko.next = e;
      }
    }
    return Ko;
  }
  function ls() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function us(e) {
    let t = Zo;
    Zo += 1;
    if (Qo === null) {
      Qo = [];
    }
    e = ro(Qo, e, t);
    t = R;
    if ((Ko === null ? t.memoizedState : Ko.next) === null) {
      t = t.alternate;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = t === null || t.memoizedState === null ? _c : vc;
    }
    return e;
  }
  function use(e) {
    if (typeof e == `object` && e) {
      if (typeof e.then == `function`) {
        return us(e);
      }
      if (e.$$typeof === xe) {
        return;
      }
      if (e.$$typeof === fe) {
        return ka(e);
      }
    }
    throw Error(a(438, String(e)));
  }
  function useMemoCache(e) {
    let t = null;
    let R_updateQueue = R.updateQueue;
    if (R_updateQueue !== null) {
      t = R_updateQueue.memoCache;
    }
    if (t == null) {
      var r = R.alternate;
      if (r !== null) {
        r = r.updateQueue;
        if (r !== null) {
          r = r.memoCache;
          if (r != null) {
            t = {
              data: r.data.map(e => e.slice()),
              index: 0
            };
          }
        }
      }
    }
    t ??= {
      data: [],
      index: 0
    };
    if (R_updateQueue === null) {
      R_updateQueue = ls();
      R.updateQueue = R_updateQueue;
    }
    R_updateQueue.memoCache = t;
    R_updateQueue = t.data[t.index];
    if (R_updateQueue === undefined) {
      R_updateQueue = t.data[t.index] = Array(e);
      for (r = 0; r < e; r++) {
        R_updateQueue[r] = ye;
      }
    }
    t.index++;
    return R_updateQueue;
  }
  function ps(e, t) {
    if (typeof t == `function`) {
      return t(e);
    }
    return t;
  }
  function ms(e) {
    return hs(V(), z, e);
  }
  function hs(e, t, n) {
    const e_queue = e.queue;
    if (e_queue === null) {
      throw Error(a(311));
    }
    e_queue.lastRenderedReducer = n;
    let e_baseQueue = e.baseQueue;
    let r_pending = e_queue.pending;
    if (r_pending !== null) {
      if (e_baseQueue !== null) {
        var s = e_baseQueue.next;
        e_baseQueue.next = r_pending.next;
        r_pending.next = s;
      }
      t.baseQueue = e_baseQueue = r_pending;
      e_queue.pending = null;
    }
    r_pending = e.baseState;
    if (e_baseQueue === null) {
      e.memoizedState = r_pending;
    } else {
      t = e_baseQueue.next;
      let c = s = null;
      let l = null;
      let u = t;
      let d = false;
      do {
        let f = u.lane & -536870913;
        if (f === u.lane ? (Go & f) === f : (J & f) === f) {
          var p = u.revertLane;
          if (p === 0) {
            if (l !== null) {
              l = l.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              };
            }
            if (f === Ha) {
              d = true;
            }
          } else if ((Go & p) === p) {
            u = u.next;
            if (p === Ha) {
              d = true;
            }
            continue;
          } else {
            f = {
              lane: 0,
              revertLane: u.revertLane,
              gesture: null,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            };
            if (l === null) {
              l = f;
              c = f;
              s = r_pending;
            } else {
              l = l.next = f;
            }
            R.lanes |= p;
            sd |= p;
          }
          f = u.action;
          if (Yo) {
            n(r_pending, f);
          }
          r_pending = u.hasEagerState ? u.eagerState : n(r_pending, f);
        } else {
          p = {
            lane: f,
            revertLane: u.revertLane,
            gesture: u.gesture,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          if (l === null) {
            l = p;
            c = p;
            s = r_pending;
          } else {
            l = l.next = p;
          }
          R.lanes |= f;
          sd |= f;
        }
        u = u.next;
      } while (u !== null && u !== t);
      if (l === null) {
        s = r_pending;
      } else {
        l.next = c;
      }
      if (!$r(r_pending, e.memoizedState) && (Fc = true, d && (n = Ua, n !== null))) {
        throw n;
      }
      e.memoizedState = r_pending;
      e.baseState = s;
      e.baseQueue = l;
      e_queue.lastRenderedState = r_pending;
    }
    if (e_baseQueue === null) {
      e_queue.lanes = 0;
    }
    return [e.memoizedState, e_queue.dispatch];
  }
  function gs(e) {
    const t = V();
    const t_queue = t.queue;
    if (t_queue === null) {
      throw Error(a(311));
    }
    t_queue.lastRenderedReducer = e;
    const n_dispatch = t_queue.dispatch;
    let n_pending = t_queue.pending;
    let t_memoizedState = t.memoizedState;
    if (n_pending !== null) {
      t_queue.pending = null;
      let s = n_pending = n_pending.next;
      do {
        t_memoizedState = e(t_memoizedState, s.action);
        s = s.next;
      } while (s !== n_pending);
      if (!$r(t_memoizedState, t.memoizedState)) {
        Fc = true;
      }
      t.memoizedState = t_memoizedState;
      if (t.baseQueue === null) {
        t.baseState = t_memoizedState;
      }
      t_queue.lastRenderedState = t_memoizedState;
    }
    return [t_memoizedState, n_dispatch];
  }
  function useSyncExternalStore(e, t, n) {
    const r = R;
    let i = V();
    const o = F;
    if (o) {
      if (n === undefined) {
        throw Error(a(407));
      }
      n = n();
    } else {
      n = t();
    }
    const s = !$r((z || i).memoizedState, n);
    if (s) {
      i.memoizedState = n;
      Fc = true;
    }
    i = i.queue;
    Hs(bs.bind(null, r, i, e), [e]);
    e = i.getSnapshot !== t || s || Ko !== null && !!(Ko.memoizedState.tag & 1);
    Ls(e ? 9 : 8, {
      destroy: undefined
    }, ys.bind(null, r, i, n, t), null);
    if (e) {
      r.flags |= 2048;
      if (K === null) {
        throw Error(a(349));
      }
      if (!(o || Go & 127)) {
        vs(r, t, n);
      }
    }
    return n;
  }
  function vs(e, t, n) {
    e.flags |= 16384;
    e = {
      getSnapshot: t,
      value: n
    };
    t = R.updateQueue;
    if (t === null) {
      t = ls();
      R.updateQueue = t;
      t.stores = [e];
    } else {
      n = t.stores;
      if (n === null) {
        t.stores = [e];
      } else {
        n.push(e);
      }
    }
  }
  function ys(e, t, n, r) {
    t.value = n;
    t.getSnapshot = r;
    if (xs(t)) {
      Ss(e);
    }
  }
  function bs(e, t, n) {
    return n(function () {
      if (xs(t)) {
        Ss(e);
      }
    });
  }
  function xs(e) {
    const e_getSnapshot = e.getSnapshot;
    e = e.value;
    try {
      const n = e_getSnapshot();
      return !$r(e, n);
    } catch {
      return true;
    }
  }
  function Ss(e) {
    const t = Li(e, 2);
    if (t !== null) {
      Pd(t, e, 2);
    }
  }
  function Cs(e) {
    const t = cs();
    if (typeof e == `function`) {
      const n = e;
      e = n();
      if (Yo) {
        lt(true);
        try {
          n();
        } finally {
          lt(false);
        }
      }
    }
    t.memoizedState = t.baseState = e;
    t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ps,
      lastRenderedState: e
    };
    return t;
  }
  function ws(e, t, n, r) {
    e.baseState = n;
    return hs(e, z, typeof r == `function` ? r : ps);
  }
  function Ts(e, t, n, r, payload) {
    if (pc(e)) {
      throw Error(a(485));
    }
    e = t.action;
    if (e !== null) {
      var o = {
        payload,
        action: e,
        next: null,
        isTransition: true,
        status: `pending`,
        value: null,
        reason: null,
        listeners: [],
        then: function (e) {
          o.listeners.push(e);
        }
      };
      if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T === null) {
        o.isTransition = false;
      } else {
        n(true);
      }
      r(o);
      n = t.pending;
      if (n === null) {
        o.next = t.pending = o;
        Es(t, o);
      } else {
        o.next = n.next;
        t.pending = n.next = o;
      }
    }
  }
  function Es(e, t) {
    const {
      action,
      payload
    } = t;
    const e_state = e.state;
    if (t.isTransition) {
      var a = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      const o = {};
      o.types = a === null ? null : a.types;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = o;
      try {
        const s = action(e_state, payload);
        const c = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
        if (c !== null) {
          c(o, s);
        }
        Ds(e, t, s);
      } catch (error) {
        ks(e, t, error);
      } finally {
        if (a !== null && o.types !== null) {
          a.types = o.types;
        }
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = a;
      }
    } else {
      try {
        a = action(e_state, payload);
        Ds(e, t, a);
      } catch (error) {
        ks(e, t, error);
      }
    }
  }
  function Ds(e, t, n) {
    if (typeof n == `object` && n && typeof n.then == `function`) {
      n.then(n => {
        Os(e, t, n);
      }, n => ks(e, t, n));
    } else {
      Os(e, t, n);
    }
  }
  function Os(e, t, n) {
    t.status = `fulfilled`;
    t.value = n;
    As(t);
    e.state = n;
    t = e.pending;
    if (t !== null) {
      n = t.next;
      if (n === t) {
        e.pending = null;
      } else {
        n = n.next;
        t.next = n;
        Es(e, n);
      }
    }
  }
  function ks(e, t, n) {
    let e_pending = e.pending;
    e.pending = null;
    if (e_pending !== null) {
      e_pending = e_pending.next;
      do {
        t.status = `rejected`;
        t.reason = n;
        As(t);
        t = t.next;
      } while (t !== e_pending);
    }
    e.action = null;
  }
  function As(e) {
    e = e.listeners;
    for (let t = 0; t < e.length; t++) {
      e[t]();
    }
  }
  function js(e, t) {
    return t;
  }
  function Ms(e, t) {
    if (F) {
      var n = K.formState;
      if (n !== null) {
        a: {
          var r = R;
          if (F) {
            if (P) {
              b: {
                for (var i = P, a = da; i.nodeType !== 8;) {
                  if (!a) {
                    i = null;
                    break b;
                  }
                  i = lm(i.nextSibling);
                  if (i === null) {
                    i = null;
                    break b;
                  }
                }
                a = i.data;
                i = a === `F!` || a === `F` ? i : null;
              }
              if (i) {
                P = lm(i.nextSibling);
                r = i.data === `F!`;
                break a;
              }
            }
            pa(r);
          }
          r = false;
        }
        if (r) {
          t = n[0];
        }
      }
    }
    n = cs();
    n.memoizedState = n.baseState = t;
    r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: t
    };
    n.queue = r;
    n = uc.bind(null, R, r);
    r.dispatch = n;
    r = Cs(false);
    a = fc.bind(null, R, false, r.queue);
    r = cs();
    i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    };
    r.queue = i;
    n = Ts.bind(null, R, i, a, n);
    i.dispatch = n;
    r.memoizedState = e;
    return [t, n, false];
  }
  function Ns(e) {
    return Ps(V(), z, e);
  }
  function Ps(e, t, n) {
    t = hs(e, t, js)[0];
    e = ms(ps)[0];
    if (typeof t == `object` && t && typeof t.then == `function`) {
      try {
        var r = us(t);
      } catch (error) {
        throw error === Qa ? eo : error;
      }
    } else {
      r = t;
    }
    t = V();
    const t_queue = t.queue;
    const i_dispatch = t_queue.dispatch;
    if (n !== t.memoizedState) {
      R.flags |= 2048;
      Ls(9, {
        destroy: undefined
      }, Fs.bind(null, t_queue, n), null);
    }
    return [r, i_dispatch, e];
  }
  function Fs(e, t) {
    e.action = t;
  }
  function Is(e) {
    let t = V();
    let n = z;
    if (n !== null) {
      return Ps(t, n, e);
    }
    V();
    t = t.memoizedState;
    n = V();
    const dispatch = n.queue.dispatch;
    n.memoizedState = e;
    return [t, dispatch, false];
  }
  function Ls(tag, inst, create, deps) {
    tag = {
      tag,
      create,
      deps,
      inst,
      next: null
    };
    inst = R.updateQueue;
    if (inst === null) {
      inst = ls();
      R.updateQueue = inst;
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
    return V().memoizedState;
  }
  function zs(e, t, n, r) {
    const i = cs();
    R.flags |= e;
    i.memoizedState = Ls(1 | t, {
      destroy: undefined
    }, n, r === undefined ? null : r);
  }
  function Bs(e, t, n, r) {
    const i = V();
    r = r === undefined ? null : r;
    const inst = i.memoizedState.inst;
    if (z !== null && r !== null && es(r, z.memoizedState.deps)) {
      i.memoizedState = Ls(t, inst, n, r);
    } else {
      R.flags |= e;
      i.memoizedState = Ls(1 | t, inst, n, r);
    }
  }
  function Vs(e, t) {
    zs(8390656, 8, e, t);
  }
  function Hs(e, t) {
    Bs(2048, 8, e, t);
  }
  function Us(e) {
    R.flags |= 4;
    let R_updateQueue = R.updateQueue;
    if (R_updateQueue === null) {
      R_updateQueue = ls();
      R.updateQueue = R_updateQueue;
      R_updateQueue.events = [e];
    } else {
      const n = R_updateQueue.events;
      if (n === null) {
        R_updateQueue.events = [e];
      } else {
        n.push(e);
      }
    }
  }
  function useEffectEvent(nextImpl) {
    const memoizedState = V().memoizedState;
    Us({
      ref: memoizedState,
      nextImpl
    });
    return function () {
      if (G & 2) {
        throw Error(a(440));
      }
      return memoizedState.impl.apply(undefined, arguments);
    };
  }
  function useInsertionEffect(e, t) {
    return Bs(4, 2, e, t);
  }
  function useLayoutEffect(e, t) {
    return Bs(4, 4, e, t);
  }
  function qs(e, t) {
    if (typeof t == `function`) {
      e = e();
      const n = t(e);
      return function () {
        if (typeof n == `function`) {
          n();
        } else {
          t(null);
        }
      };
    }
    if (t != null) {
      e = e();
      t.current = e;
      return function () {
        t.current = null;
      };
    }
  }
  function useImperativeHandle(e, t, n) {
    n = n == null ? null : n.concat([e]);
    Bs(4, 4, qs.bind(null, t, e), n);
  }
  function useDebugValue() {}
  function useCallback(e, t) {
    const n = V();
    t = t === undefined ? null : t;
    const n_memoizedState = n.memoizedState;
    if (t !== null && es(t, n_memoizedState[1])) {
      return n_memoizedState[0];
    }
    n.memoizedState = [e, t];
    return e;
  }
  function useMemo(e, t) {
    const n = V();
    t = t === undefined ? null : t;
    let n_memoizedState = n.memoizedState;
    if (t !== null && es(t, n_memoizedState[1])) {
      return n_memoizedState[0];
    }
    n_memoizedState = e();
    if (Yo) {
      lt(true);
      try {
        e();
      } finally {
        lt(false);
      }
    }
    n.memoizedState = [n_memoizedState, t];
    return n_memoizedState;
  }
  function Qs(e, t, n) {
    if (n === undefined || Go & 1073741824 && !(J & 261930)) {
      return e.memoizedState = t;
    }
    e.memoizedState = n;
    e = Md();
    R.lanes |= e;
    sd |= e;
    return n;
  }
  function $s(e, memoizedState, n, r) {
    if ($r(n, memoizedState)) {
      return n;
    }
    if (ko.current === null) {
      if (!(Go & 106) || Go & 1073741824 && !(J & 261930)) {
        Fc = true;
        return e.memoizedState = n;
      }
      e = Md();
      R.lanes |= e;
      sd |= e;
      return memoizedState;
    }
    e = Qs(e, n, r);
    if (!$r(e, memoizedState)) {
      Fc = true;
    }
    return e;
  }
  function ec(e, t, n, r, i) {
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p !== 0 && i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p < 8 ? i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p : 8;
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const s = {};
    s.types = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T === null ? null : r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T.types;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = s;
    fc(e, false, t, n);
    try {
      const c = i();
      const l = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
      if (l !== null) {
        l(s, c);
      }
      if (typeof c == `object` && c && typeof c.then == `function`) {
        dc(e, t, Ka(c, r), jd(e));
      } else {
        dc(e, t, r, jd(e));
      }
    } catch (reason) {
      dc(e, t, {
        then: function () {},
        status: `rejected`,
        reason
      }, jd());
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      if (r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T !== null && s.types !== null) {
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T.types = s.types;
      }
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function tc() {}
  function nc(e, t, n, r) {
    if (e.tag !== 5) {
      throw Error(a(476));
    }
    const queue = rc(e).queue;
    ec(e, queue, t, De, n === null ? tc : () => {
      ic(e);
      return n(r);
    });
  }
  function rc(e) {
    let e_memoizedState = e.memoizedState;
    if (e_memoizedState !== null) {
      return e_memoizedState;
    }
    e_memoizedState = {
      memoizedState: De,
      baseState: De,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ps,
        lastRenderedState: De
      },
      next: null
    };
    const n = {};
    e_memoizedState.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ps,
        lastRenderedState: n
      },
      next: null
    };
    e.memoizedState = e_memoizedState;
    e = e.alternate;
    if (e !== null) {
      e.memoizedState = e_memoizedState;
    }
    return e_memoizedState;
  }
  function ic(e) {
    let t = rc(e);
    if (t.next === null) {
      t = e.alternate.memoizedState;
    }
    dc(e, t.next.queue, {}, jd());
  }
  function useHostTransitionStatus() {
    return ka(sh);
  }
  function useId() {
    return V().memoizedState;
  }
  function useCacheRefresh() {
    return V().memoizedState;
  }
  function cc(e) {
    for (let t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          const n = jd();
          e = bo(n);
          const r = xo(t, e, n);
          if (r !== null) {
            Pd(r, t, n);
            So(r, t, n);
          }
          t = {
            cache: Fa()
          };
          e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function lc(e, t, n) {
    const r = jd();
    n = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e)) {
      mc(t, n);
    } else {
      n = Ii(e, t, n, r);
      if (n !== null) {
        Pd(n, e, r);
        hc(n, t, r);
      }
    }
  }
  function uc(e, t, n) {
    dc(e, t, n, jd());
  }
  function dc(e, t, n, r) {
    const i = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e)) {
      mc(t, i);
    } else {
      let a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) {
        try {
          const o = t.lastRenderedState;
          const s = a(o, n);
          i.hasEagerState = true;
          i.eagerState = s;
          if ($r(s, o)) {
            Fi(e, t, i, 0);
            if (K === null) {
              Pi();
            }
            return false;
          }
        } catch {}
      }
      n = Ii(e, t, i, r);
      if (n !== null) {
        Pd(n, e, r);
        hc(n, t, r);
        return true;
      }
    }
    return false;
  }
  function fc(e, t, n, r) {
    r = {
      lane: 2,
      revertLane: Pf(),
      gesture: null,
      action: r,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (pc(e)) {
      if (t) {
        throw Error(a(479));
      }
    } else {
      t = Ii(e, n, r, 2);
      if (t !== null) {
        Pd(t, e, 2);
      }
    }
  }
  function pc(e) {
    const e_alternate = e.alternate;
    return e === R || e_alternate !== null && e_alternate === R;
  }
  function mc(e, t) {
    qo = true;
    Jo = true;
    const e_pending = e.pending;
    if (e_pending === null) {
      t.next = t;
    } else {
      t.next = e_pending.next;
      e_pending.next = t;
    }
    e.pending = t;
  }
  function hc(e, t, n) {
    if (n & 4194048) {
      let r = t.lanes;
      r &= e.pendingLanes;
      n |= r;
      t.lanes = n;
      Dt(e, n);
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
    useCallback: function (e, t) {
      cs().memoizedState = [e, t === undefined ? null : t];
      return e;
    },
    useContext: ka,
    useEffect: Vs,
    useImperativeHandle: function (e, t, n) {
      n = n == null ? null : n.concat([e]);
      zs(4194308, 4, qs.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      const n = cs();
      t = t === undefined ? null : t;
      const r = e();
      if (Yo) {
        lt(true);
        try {
          e();
        } finally {
          lt(false);
        }
      }
      n.memoizedState = [r, t];
      return r;
    },
    useReducer: function (e, t, n) {
      const r = cs();
      if (n !== undefined) {
        var i = n(t);
        if (Yo) {
          lt(true);
          try {
            n(t);
          } finally {
            lt(false);
          }
        }
      } else {
        i = t;
      }
      r.memoizedState = r.baseState = i;
      e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      };
      r.queue = e;
      e = e.dispatch = lc.bind(null, R, e);
      return [r.memoizedState, e];
    },
    useRef: function (current) {
      const t = cs();
      current = {
        current
      };
      return t.memoizedState = current;
    },
    useState: function (e) {
      e = Cs(e);
      const e_queue = e.queue;
      const n = uc.bind(null, R, e_queue);
      e_queue.dispatch = n;
      return [e.memoizedState, n];
    },
    useDebugValue,
    useDeferredValue: function (e, t) {
      return Qs(cs(), e, t);
    },
    useTransition: function () {
      let e = Cs(false);
      e = ec.bind(null, R, e.queue, true, false);
      cs().memoizedState = e;
      return [false, e];
    },
    useSyncExternalStore: function (e, t, n) {
      const r = R;
      const i = cs();
      if (F) {
        if (n === undefined) {
          throw Error(a(407));
        }
        n = n();
      } else {
        n = t();
        if (K === null) {
          throw Error(a(349));
        }
        if (!(J & 127)) {
          vs(r, t, n);
        }
      }
      i.memoizedState = n;
      const o = {
        value: n,
        getSnapshot: t
      };
      i.queue = o;
      Vs(bs.bind(null, r, o, e), [e]);
      r.flags |= 2048;
      Ls(9, {
        destroy: undefined
      }, ys.bind(null, r, o, n, t), null);
      return n;
    },
    useId: function () {
      const e = cs();
      let K_identifierPrefix = K.identifierPrefix;
      if (F) {
        var n = overflow;
        const r = ia;
        n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n;
        K_identifierPrefix = `_` + K_identifierPrefix + `R_` + n;
        n = Xo++;
        if (n > 0) {
          K_identifierPrefix += `H` + n.toString(32);
        }
        K_identifierPrefix += `_`;
      } else {
        n = $o++;
        K_identifierPrefix = `_` + K_identifierPrefix + `r_` + n.toString(32) + `_`;
      }
      return e.memoizedState = K_identifierPrefix;
    },
    useHostTransitionStatus,
    useFormState: Ms,
    useActionState: Ms,
    useOptimistic: function (e) {
      let t = cs();
      t.memoizedState = t.baseState = e;
      const n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      t.queue = n;
      t = fc.bind(null, R, true, n);
      n.dispatch = t;
      return [e, t];
    },
    useMemoCache,
    useCacheRefresh: function () {
      return cs().memoizedState = cc.bind(null, R);
    },
    useEffectEvent: function (impl) {
      const t = cs();
      const n = {
        impl
      };
      t.memoizedState = n;
      return function () {
        if (G & 2) {
          throw Error(a(440));
        }
        return n.impl.apply(undefined, arguments);
      };
    }
  };
  var vc = {
    readContext: ka,
    use,
    useCallback,
    useContext: ka,
    useEffect: Hs,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer: ms,
    useRef,
    useState: function () {
      return ms(ps);
    },
    useDebugValue,
    useDeferredValue: function (e, t) {
      return $s(V(), z.memoizedState, e, t);
    },
    useTransition: function () {
      const e = ms(ps)[0];
      const memoizedState = V().memoizedState;
      return [typeof e == `boolean` ? e : us(e), memoizedState];
    },
    useSyncExternalStore,
    useId,
    useHostTransitionStatus,
    useFormState: Ns,
    useActionState: Ns,
    useOptimistic: function (e, t) {
      return ws(V(), z, e, t);
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
    useEffect: Hs,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer: gs,
    useRef,
    useState: function () {
      return gs(ps);
    },
    useDebugValue,
    useDeferredValue: function (e, t) {
      const n = V();
      if (z === null) {
        return Qs(n, e, t);
      }
      return $s(n, z.memoizedState, e, t);
    },
    useTransition: function () {
      const e = gs(ps)[0];
      const memoizedState = V().memoizedState;
      return [typeof e == `boolean` ? e : us(e), memoizedState];
    },
    useSyncExternalStore,
    useId,
    useHostTransitionStatus,
    useFormState: Is,
    useActionState: Is,
    useOptimistic: function (e, t) {
      const n = V();
      if (z === null) {
        n.baseState = e;
        return [e, n.queue.dispatch];
      }
      return ws(n, z, e, t);
    },
    useMemoCache,
    useCacheRefresh,
    useEffectEvent
  };
  function bc(e, t, n, r) {
    t = e.memoizedState;
    n = n(r, t);
    n = n == null ? t : Object_assign({}, t, n);
    e.memoizedState = n;
    if (e.lanes === 0) {
      e.updateQueue.baseState = n;
    }
  }
  var xc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      const r = jd();
      const i = bo(r);
      i.payload = t;
      if (n != null) {
        i.callback = n;
      }
      t = xo(e, i, r);
      if (t !== null) {
        Pd(t, e, r);
        So(t, e, r);
      }
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      const r = jd();
      const i = bo(r);
      i.tag = 1;
      i.payload = t;
      if (n != null) {
        i.callback = n;
      }
      t = xo(e, i, r);
      if (t !== null) {
        Pd(t, e, r);
        So(t, e, r);
      }
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      const n = jd();
      const r = bo(n);
      r.tag = 2;
      if (t != null) {
        r.callback = t;
      }
      t = xo(e, r, n);
      if (t !== null) {
        Pd(t, e, n);
        So(t, e, n);
      }
    }
  };
  function Sc(e, t, n, r, i, a, o) {
    e = e.stateNode;
    if (typeof e.shouldComponentUpdate == `function`) {
      return e.shouldComponentUpdate(r, a, o);
    }
    if (t.prototype && t.prototype.isPureReactComponent) {
      return !ei(n, r) || !ei(i, a);
    }
    return true;
  }
  function Cc(e, t, n, r) {
    e = t.state;
    if (typeof t.componentWillReceiveProps == `function`) {
      t.componentWillReceiveProps(n, r);
    }
    if (typeof t.UNSAFE_componentWillReceiveProps == `function`) {
      t.UNSAFE_componentWillReceiveProps(n, r);
    }
    if (t.state !== e) {
      xc.enqueueReplaceState(t, t.state, null);
    }
  }
  function wc(e, t) {
    let n = t;
    if (`ref` in t) {
      n = {};
      for (const r in t) {
        if (r !== `ref`) {
          n[r] = t[r];
        }
      }
    }
    if (e = e.defaultProps) {
      if (n === t) {
        n = Object_assign({}, n);
      }
      for (const i in e) {
        if (n[i] === undefined) {
          n[i] = e[i];
        }
      }
    }
    return n;
  }
  function Tc(e) {
    Ai(e);
  }
  function Ec(e) {
    console.error(e);
  }
  function Dc(e) {
    Ai(e);
  }
  function Oc(e, t) {
    try {
      const n = e.onUncaughtError;
      n(t.value, {
        componentStack: t.stack
      });
    } catch (error) {
      setTimeout(() => {
        throw error;
      });
    }
  }
  function kc(e, t, n) {
    try {
      const r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (error) {
      setTimeout(() => {
        throw error;
      });
    }
  }
  function Ac(stateNode, t, n) {
    n = bo(n);
    n.tag = 3;
    n.payload = {
      element: null
    };
    n.callback = function () {
      Oc(stateNode, t);
    };
    return n;
  }
  function jc(e) {
    e = bo(e);
    e.tag = 3;
    return e;
  }
  function Mc(e, t, n, r) {
    const getDerivedStateFromError = n.type.getDerivedStateFromError;
    if (typeof getDerivedStateFromError == `function`) {
      const a = r.value;
      e.payload = function () {
        return getDerivedStateFromError(a);
      };
      e.callback = function () {
        kc(t, n, r);
      };
    }
    const n_stateNode = n.stateNode;
    if (n_stateNode !== null && typeof n_stateNode.componentDidCatch == `function`) {
      e.callback = function () {
        kc(t, n, r);
        if (typeof getDerivedStateFromError != `function`) {
          if (yd === null) {
            yd = new Set([this]);
          } else {
            yd.add(this);
          }
        }
        const r_stack = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: r_stack === null ? `` : r_stack
        });
      };
    }
  }
  function Nc(e, t, n, cause, i) {
    n.flags |= 32768;
    if (typeof cause == `object` && cause && typeof cause.then == `function`) {
      t = n.alternate;
      if (t !== null) {
        Ea(t, n, i, true);
      }
      n = Po.current;
      if (n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            if (Fo === null) {
              Kd();
            } else if (n.alternate === null && od === 0) {
              od = 3;
            }
            n.flags &= -257;
            n.flags |= 65536;
            n.lanes = i;
            if (cause === to) {
              n.flags |= 16384;
            } else {
              t = n.updateQueue;
              if (t === null) {
                n.updateQueue = new Set([cause]);
              } else {
                t.add(cause);
              }
              mf(e, cause, i);
            }
            return false;
          case 22:
            n.flags |= 65536;
            if (cause === to) {
              n.flags |= 16384;
            } else {
              t = n.updateQueue;
              if (t === null) {
                t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([cause])
                };
                n.updateQueue = t;
              } else {
                n = t.retryQueue;
                if (n === null) {
                  t.retryQueue = new Set([cause]);
                } else {
                  n.add(cause);
                }
              }
              mf(e, cause, i);
            }
            return false;
        }
        throw Error(a(435, n.tag));
      }
      mf(e, cause, i);
      Kd();
      return false;
    }
    if (F) {
      t = Po.current;
      if (t === null) {
        if (cause !== fa) {
          t = Error(a(423), {
            cause
          });
          ya(Qi(t, n));
        }
        e = e.current.alternate;
        e.flags |= 65536;
        i &= -i;
        e.lanes |= i;
        cause = Qi(cause, n);
        i = Ac(e.stateNode, cause, i);
        Co(e, i);
        if (od !== 4) {
          od = 2;
        }
      } else {
        if (!(t.flags & 65536)) {
          t.flags |= 256;
        }
        t.flags |= 65536;
        t.lanes = i;
        if (cause !== fa) {
          e = Error(a(422), {
            cause
          });
          ya(Qi(e, n));
        }
      }
      return false;
    }
    let o = Error(a(520), {
      cause
    });
    o = Qi(o, n);
    if (fd === null) {
      fd = [o];
    } else {
      fd.push(o);
    }
    if (od !== 4) {
      od = 2;
    }
    if (t === null) {
      return true;
    }
    cause = Qi(cause, n);
    n = t;
    do {
      switch (n.tag) {
        case 3:
          n.flags |= 65536;
          e = i & -i;
          n.lanes |= e;
          e = Ac(n.stateNode, cause, e);
          Co(n, e);
          return false;
        case 1:
          t = n.type;
          o = n.stateNode;
          if (!(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (yd === null || !yd.has(o)))) {
            n.flags |= 65536;
            i &= -i;
            n.lanes |= i;
            i = jc(i);
            Mc(i, e, n, cause);
            Co(n, i);
            return false;
          }
          break;
        case 22:
          if (n.memoizedState !== null) {
            n.flags |= 65536;
            return false;
          }
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var Pc = Error(a(461));
  var Fc = false;
  function Ic(e, t, n, r) {
    t.child = e === null ? go(t, null, n, r) : ho(t, e.child, n, r);
  }
  function Lc(e, t, n, r, i) {
    n = n.render;
    const t_ref = t.ref;
    if (`ref` in r) {
      var o = {};
      for (var s in r) {
        if (s !== `ref`) {
          o[s] = r[s];
        }
      }
    } else {
      o = r;
    }
    Oa(t);
    r = ts(e, t, n, o, t_ref, i);
    s = as();
    if (e !== null && !Fc) {
      os(e, t, i);
      return dl(e, t, i);
    }
    if (F && s) {
      oa(t);
    }
    t.flags |= 1;
    Ic(e, t, r, i);
    return t.child;
  }
  function Rc(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      if (typeof a == `function` && !Ui(a) && a.defaultProps === undefined && n.compare === null) {
        t.tag = 15;
        t.type = a;
        return zc(e, t, a, r, i);
      }
      e = Ki(n.type, null, r, t, t.mode, i);
      e.ref = t.ref;
      e.return = t;
      return t.child = e;
    }
    a = e.child;
    if (!fl(e, i)) {
      const o = a.memoizedProps;
      n = n.compare;
      n = n === null ? ei : n;
      if (n(o, r) && e.ref === t.ref) {
        return dl(e, t, i);
      }
    }
    t.flags |= 1;
    e = Wi(a, r);
    e.ref = t.ref;
    e.return = t;
    return t.child = e;
  }
  function zc(e, t, n, r, i) {
    if (e !== null) {
      const a = e.memoizedProps;
      if (ei(a, r) && e.ref === t.ref) {
        Fc = false;
        t.pendingProps = r = a;
        if (fl(e, i)) {
          if (e.flags & 131072) {
            Fc = true;
          }
        } else {
          t.lanes = e.lanes;
          return dl(e, t, i);
        }
      }
    }
    return qc(e, t, n, r, i);
  }
  function Bc(e, t, n, r) {
    let r_children = r.children;
    let a = e === null ? null : e.memoizedState;
    if (e === null && t.stateNode === null) {
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    if (r.mode === `hidden`) {
      if (t.flags & 128) {
        a = a === null ? n : a.baseLanes | n;
        if (e !== null) {
          r = t.child = e.child;
          for (r_children = 0; r !== null;) {
            r_children = r_children | r.lanes | r.childLanes;
            r = r.sibling;
          }
          r = r_children & ~a;
        } else {
          r = 0;
          t.child = null;
        }
        return Hc(e, t, a, n, r);
      }
      if (n & 536870912) {
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        };
        if (e !== null) {
          Xa(t, a === null ? null : a.cachePool);
        }
        if (a === null) {
          Mo();
        } else {
          jo(t, a);
        }
        Ro(t);
      } else {
        r = t.lanes = 536870912;
        return Hc(e, t, a === null ? n : a.baseLanes | n, n, r);
      }
    } else {
      if (a === null) {
        if (e !== null) {
          Xa(t, null);
        }
        Mo();
        zo();
      } else {
        Xa(t, a.cachePool);
        jo(t, a);
        zo();
        t.memoizedState = null;
      }
    }
    Ic(e, t, r_children, n);
    return t.child;
  }
  function Vc(e, t) {
    if (!(e !== null && e.tag === 22 || t.stateNode !== null)) {
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    return t.sibling;
  }
  function Hc(e, t, n, r, i) {
    let a = Ya();
    a = a === null ? null : {
      parent: L._currentValue,
      pool: a
    };
    t.memoizedState = {
      baseLanes: n,
      cachePool: a
    };
    if (e !== null) {
      Xa(t, null);
    }
    Mo();
    Ro(t);
    if (e !== null) {
      Ea(e, t, r, true);
    }
    t.childLanes = i;
    return null;
  }
  function Uc(e, t) {
    t = nl({
      mode: t.mode,
      children: t.children
    }, e.mode);
    t.ref = e.ref;
    e.child = t;
    t.return = e;
    return t;
  }
  function Wc(e, t, n) {
    ho(t, e.child, null, n);
    e = Uc(t, t.pendingProps);
    e.flags |= 2;
    Bo(t);
    t.memoizedState = null;
    return e;
  }
  function Gc(e, t, n) {
    let t_pendingProps = t.pendingProps;
    let i = !!(t.flags & 128);
    t.flags &= -129;
    if (e === null) {
      if (F) {
        if (t_pendingProps.mode === `hidden`) {
          e = Uc(t, t_pendingProps);
          t.lanes = 536870912;
          e.memoizedState = {
            baseLanes: 0,
            cachePool: null
          };
          return Vc(null, e);
        }
        Lo(t);
        if (e = P) {
          e = am(e, da);
          e = e !== null && e.data === `&` ? e : null;
          if (e !== null) {
            t.memoizedState = {
              dehydrated: e,
              treeContext: ra === null ? null : {
                id: ia,
                overflow
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n = Yi(e);
            n.return = t;
            t.child = n;
            la = t;
            P = null;
          }
        } else {
          e = null;
        }
        if (e === null) {
          throw pa(t);
        }
        t.lanes = 536870912;
        return null;
      }
      return Uc(t, t_pendingProps);
    }
    const e_memoizedState = e.memoizedState;
    if (e_memoizedState !== null) {
      let s = e_memoizedState.dehydrated;
      Lo(t);
      if (i) {
        if (t.flags & 256) {
          t.flags &= -257;
          t = Wc(e, t, n);
        } else if (t.memoizedState !== null) {
          t.child = e.child;
          t.flags |= 128;
          t = null;
        } else {
          throw Error(a(558));
        }
      } else {
        if (!Fc) {
          Ea(e, t, n, false);
        }
        i = (n & e.childLanes) !== 0;
        if (Fc || i) {
          if (ko.current === null) {
            t_pendingProps = K;
            if (t_pendingProps !== null && (s = Ot(t_pendingProps, n), s !== 0 && s !== e_memoizedState.retryLane)) {
              e_memoizedState.retryLane = s;
              Li(e, s);
              Pd(t_pendingProps, e, s);
              throw Pc;
            }
            Kd();
          }
          t = Wc(e, t, n);
        } else {
          e = e_memoizedState.treeContext;
          P = lm(s.nextSibling);
          la = t;
          F = true;
          ua = null;
          da = false;
          if (e !== null) {
            ca(t, e);
          }
          t = Uc(t, t_pendingProps);
          t.flags |= 134221824;
        }
      }
      return t;
    }
    e = Wi(e.child, {
      mode: t_pendingProps.mode,
      children: t_pendingProps.children
    });
    e.ref = t.ref;
    t.child = e;
    e.return = t;
    return e;
  }
  function Kc(e, t) {
    const t_ref = t.ref;
    if (t_ref === null) {
      if (e !== null && e.ref !== null) {
        t.flags |= 4194816;
      }
    } else {
      if (typeof t_ref != `function` && typeof t_ref != `object`) {
        throw Error(a(284));
      }
      if (e === null || e.ref !== t_ref) {
        t.flags |= 4194816;
      }
    }
  }
  function qc(e, t, n, r, i) {
    Oa(t);
    n = ts(e, t, n, r, undefined, i);
    r = as();
    if (e !== null && !Fc) {
      os(e, t, i);
      return dl(e, t, i);
    }
    if (F && r) {
      oa(t);
    }
    t.flags |= 1;
    Ic(e, t, n, i);
    return t.child;
  }
  function Jc(e, t, n, r, i, a) {
    Oa(t);
    t.updateQueue = null;
    n = rs(t, r, n, i);
    ns(e);
    r = as();
    if (e !== null && !Fc) {
      os(e, t, a);
      return dl(e, t, a);
    }
    if (F && r) {
      oa(t);
    }
    t.flags |= 1;
    Ic(e, t, n, a);
    return t.child;
  }
  function Yc(e, t, n, r, i) {
    Oa(t);
    if (t.stateNode === null) {
      var a = Bi;
      var o = n.contextType;
      if (typeof o == `object` && o) {
        a = ka(o);
      }
      a = new n(r, a);
      t.memoizedState = a.state ?? null;
      a.updater = xc;
      t.stateNode = a;
      a._reactInternals = t;
      a = t.stateNode;
      a.props = r;
      a.state = t.memoizedState;
      a.refs = {};
      vo(t);
      o = n.contextType;
      a.context = typeof o == `object` && o ? ka(o) : Bi;
      a.state = t.memoizedState;
      o = n.getDerivedStateFromProps;
      if (typeof o == `function`) {
        bc(t, n, o, r);
        a.state = t.memoizedState;
      }
      if (!(typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`)) {
        o = a.state;
        if (typeof a.componentWillMount == `function`) {
          a.componentWillMount();
        }
        if (typeof a.UNSAFE_componentWillMount == `function`) {
          a.UNSAFE_componentWillMount();
        }
        if (o !== a.state) {
          xc.enqueueReplaceState(a, a.state, null);
        }
        Eo(t, r, a, i);
        To();
        a.state = t.memoizedState;
      }
      if (typeof a.componentDidMount == `function`) {
        t.flags |= 4194308;
      }
      r = true;
    } else if (e === null) {
      a = t.stateNode;
      var s = t.memoizedProps;
      var c = wc(n, s);
      a.props = c;
      var l = a.context;
      var u = n.contextType;
      o = Bi;
      if (typeof u == `object` && u) {
        o = ka(u);
      }
      var d = n.getDerivedStateFromProps;
      u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`;
      s = t.pendingProps !== s;
      if (!(u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function`)) {
        if (s || l !== o) {
          Cc(t, a, r, o);
        }
      }
      _o = false;
      var f = t.memoizedState;
      a.state = f;
      Eo(t, r, a, i);
      To();
      l = t.memoizedState;
      if (s || f !== l || _o) {
        if (typeof d == `function`) {
          bc(t, n, d, r);
          l = t.memoizedState;
        }
        if (c = _o || Sc(t, n, c, r, f, l, o)) {
          if (!(u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`)) {
            if (typeof a.componentWillMount == `function`) {
              a.componentWillMount();
            }
            if (typeof a.UNSAFE_componentWillMount == `function`) {
              a.UNSAFE_componentWillMount();
            }
          }
          if (typeof a.componentDidMount == `function`) {
            t.flags |= 4194308;
          }
        } else {
          if (typeof a.componentDidMount == `function`) {
            t.flags |= 4194308;
          }
          t.memoizedProps = r;
          t.memoizedState = l;
        }
        a.props = r;
        a.state = l;
        a.context = o;
        r = c;
      } else {
        if (typeof a.componentDidMount == `function`) {
          t.flags |= 4194308;
        }
        r = false;
      }
    } else {
      a = t.stateNode;
      yo(e, t);
      o = t.memoizedProps;
      u = wc(n, o);
      a.props = u;
      d = t.pendingProps;
      f = a.context;
      l = n.contextType;
      c = Bi;
      if (typeof l == `object` && l) {
        c = ka(l);
      }
      s = n.getDerivedStateFromProps;
      if (!((l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function`)) {
        if (o !== d || f !== c) {
          Cc(t, a, r, c);
        }
      }
      _o = false;
      f = t.memoizedState;
      a.state = f;
      Eo(t, r, a, i);
      To();
      let p = t.memoizedState;
      if (o !== d || f !== p || _o || e !== null && e.dependencies !== null && Da(e.dependencies)) {
        if (typeof s == `function`) {
          bc(t, n, s, r);
          p = t.memoizedState;
        }
        if (u = _o || Sc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Da(e.dependencies)) {
          if (!(l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function`)) {
            if (typeof a.componentWillUpdate == `function`) {
              a.componentWillUpdate(r, p, c);
            }
            if (typeof a.UNSAFE_componentWillUpdate == `function`) {
              a.UNSAFE_componentWillUpdate(r, p, c);
            }
          }
          if (typeof a.componentDidUpdate == `function`) {
            t.flags |= 4;
          }
          if (typeof a.getSnapshotBeforeUpdate == `function`) {
            t.flags |= 1024;
          }
        } else {
          if (!(typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState)) {
            t.flags |= 4;
          }
          if (!(typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState)) {
            t.flags |= 1024;
          }
          t.memoizedProps = r;
          t.memoizedState = p;
        }
        a.props = r;
        a.state = p;
        a.context = c;
        r = u;
      } else {
        if (!(typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState)) {
          t.flags |= 4;
        }
        if (!(typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState)) {
          t.flags |= 1024;
        }
        r = false;
      }
    }
    a = r;
    Kc(e, t);
    r = !!(t.flags & 128);
    if (a || r) {
      a = t.stateNode;
      n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render();
      t.flags |= 1;
      if (e !== null && r) {
        t.child = ho(t, e.child, null, i);
        t.child = ho(t, null, n, i);
      } else {
        Ic(e, t, n, i);
      }
      t.memoizedState = a.state;
      e = t.child;
    } else {
      e = dl(e, t, i);
    }
    return e;
  }
  function Xc(e, t, n, r) {
    _a();
    t.flags |= 256;
    Ic(e, t, n, r);
    return t.child;
  }
  var Zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(e) {
    return {
      baseLanes: e,
      cachePool: Za()
    };
  }
  function $c(e, t, n) {
    e = e === null ? 0 : e.childLanes & ~n;
    if (t) {
      e |= ud;
    }
    return e;
  }
  function el(e, t, n) {
    let t_pendingProps = t.pendingProps;
    let i = false;
    let a = !!(t.flags & 128);
    let o;
    if (!(o = a)) {
      o = e !== null && e.memoizedState === null ? false : !!(Vo.current & 2);
    }
    if (o) {
      i = true;
      t.flags &= -129;
    }
    o = !!(t.flags & 32);
    t.flags &= -33;
    if (e === null) {
      if (F) {
        if (i) {
          Io(t);
        } else {
          zo();
        }
        if (e = P) {
          e = am(e, da);
          e = e !== null && e.data !== `&` ? e : null;
          if (e !== null) {
            t.memoizedState = {
              dehydrated: e,
              treeContext: ra === null ? null : {
                id: ia,
                overflow
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n = Yi(e);
            n.return = t;
            t.child = n;
            la = t;
            P = null;
          }
        } else {
          e = null;
        }
        if (e === null) {
          throw pa(t);
        }
        t.lanes = sm(e) ? 32 : 536870912;
        return null;
      }
      a = t_pendingProps.children;
      t_pendingProps = t_pendingProps.fallback;
      if (i) {
        zo();
        i = t.mode;
        a = nl({
          mode: `hidden`,
          children: a
        }, i);
        t_pendingProps = qi(t_pendingProps, i, n, null);
        a.return = t;
        t_pendingProps.return = t;
        a.sibling = t_pendingProps;
        t.child = a;
        t_pendingProps = t.child;
        t_pendingProps.memoizedState = Qc(n);
        t_pendingProps.childLanes = $c(e, o, n);
        t.memoizedState = Zc;
        return Vc(null, t_pendingProps);
      }
      Io(t);
      return tl(t, a);
    }
    let e_memoizedState = e.memoizedState;
    if (e_memoizedState !== null) {
      var c = e_memoizedState.dehydrated;
      if (c !== null) {
        return il(e, t, a, o, t_pendingProps, c, e_memoizedState, n);
      }
    }
    if (i) {
      zo();
      i = t_pendingProps.fallback;
      a = t.mode;
      e_memoizedState = e.child;
      c = e_memoizedState.sibling;
      t_pendingProps = Wi(e_memoizedState, {
        mode: `hidden`,
        children: t_pendingProps.children
      });
      t_pendingProps.subtreeFlags = e_memoizedState.subtreeFlags & 1206910976;
      if (c === null) {
        i = qi(i, a, n, null);
        i.flags |= 2;
      } else {
        i = Wi(c, i);
      }
      i.return = t;
      t_pendingProps.return = t;
      t_pendingProps.sibling = i;
      t.child = t_pendingProps;
      Vc(null, t_pendingProps);
      t_pendingProps = t.child;
      i = e.child.memoizedState;
      if (i === null) {
        i = Qc(n);
      } else {
        a = i.cachePool;
        if (a === null) {
          a = Za();
        } else {
          e_memoizedState = L._currentValue;
          a = a.parent === e_memoizedState ? a : {
            parent: e_memoizedState,
            pool: e_memoizedState
          };
        }
        i = {
          baseLanes: i.baseLanes | n,
          cachePool: a
        };
      }
      t_pendingProps.memoizedState = i;
      t_pendingProps.childLanes = $c(e, o, n);
      t.memoizedState = Zc;
      return Vc(e.child, t_pendingProps);
    }
    Io(t);
    n = e.child;
    e = n.sibling;
    n = Wi(n, {
      mode: `visible`,
      children: t_pendingProps.children
    });
    n.return = t;
    n.sibling = null;
    if (e !== null) {
      o = t.deletions;
      if (o === null) {
        t.deletions = [e];
        t.flags |= 16;
      } else {
        o.push(e);
      }
    }
    t.child = n;
    t.memoizedState = null;
    return n;
  }
  function tl(e, children) {
    children = nl({
      mode: `visible`,
      children
    }, e.mode);
    children.return = e;
    return e.child = children;
  }
  function nl(e, t) {
    e = Hi(22, e, null, t);
    e.lanes = 0;
    return e;
  }
  function rl(e, t, n) {
    ho(t, e.child, null, n);
    e = tl(t, t.pendingProps.children);
    e.flags |= 2;
    t.memoizedState = null;
    return e;
  }
  function il(e, t, n, r, i, o, s, c) {
    if (n) {
      if (t.flags & 256) {
        Io(t);
        t.flags &= -257;
        return rl(e, t, c);
      }
      if (t.memoizedState === null) {
        zo();
        o = i.fallback;
        s = t.mode;
        i = nl({
          mode: `visible`,
          children: i.children
        }, s);
        o = qi(o, s, c, null);
        o.flags |= 2;
        i.return = t;
        o.return = t;
        i.sibling = o;
        t.child = i;
        ho(t, e.child, null, c);
        i = t.child;
        i.memoizedState = Qc(c);
        i.childLanes = $c(e, r, c);
        t.memoizedState = Zc;
        return Vc(null, i);
      }
      zo();
      t.child = e.child;
      t.flags |= 128;
      return null;
    }
    Io(t);
    if (sm(o)) {
      r = o.nextSibling && o.nextSibling.dataset;
      if (r) var l = r.dgst;
      r = l;
      if (r !== ``) {
        i = Error(a(419));
        i.stack = ``;
        i.digest = r;
        ya({
          value: i,
          source: null,
          stack: null
        });
      }
      return rl(e, t, c);
    }
    if (!Fc) {
      Ea(e, t, c, false);
    }
    r = (c & e.childLanes) !== 0;
    if (Fc || r) {
      if (ko.current !== null) {
        return rl(e, t, c);
      }
      r = K;
      if (r !== null && (i = Ot(r, c), i !== 0 && i !== s.retryLane)) {
        s.retryLane = i;
        Li(e, i);
        Pd(r, e, i);
        throw Pc;
      }
      if (!om(o)) {
        Kd();
      }
      return rl(e, t, c);
    }
    if (om(o)) {
      t.flags |= 192;
      t.child = e.child;
      return null;
    }
    e = s.treeContext;
    P = lm(o.nextSibling);
    la = t;
    F = true;
    ua = null;
    da = false;
    if (e !== null) {
      ca(t, e);
    }
    t = tl(t, i.children);
    t.flags |= 134221824;
    return t;
  }
  function al(e, t, n) {
    e.lanes |= t;
    const e_alternate = e.alternate;
    if (e_alternate !== null) {
      e_alternate.lanes |= t;
    }
    I(e.return, t, n);
  }
  function ol(e) {
    let t = null;
    while (e !== null) {
      const n = e.alternate;
      if (n !== null && Wo(n) === null) {
        t = e;
      }
      e = e.sibling;
    }
    return t;
  }
  function sl(e, isBackwards, tail, last, tailMode, treeForkCount) {
    const e_memoizedState = e.memoizedState;
    if (e_memoizedState === null) {
      e.memoizedState = {
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
  function cl(e) {
    let e_child = e.child;
    for (e.child = null; e_child !== null;) {
      const n = e_child.sibling;
      e_child.sibling = e.child;
      e.child = e_child;
      e_child = n;
    }
  }
  function ll(e, t, n) {
    let t_pendingProps = t.pendingProps;
    let r_revealOrder = t_pendingProps.revealOrder;
    const r_tail = t_pendingProps.tail;
    t_pendingProps = t_pendingProps.children;
    let Vo_current = Vo.current;
    if (t.flags & 128) {
      Ho(t, Vo_current);
      return null;
    }
    const s = !!(Vo_current & 2);
    if (s) {
      Vo_current = Vo_current & 1 | 2;
      t.flags |= 128;
    } else {
      Vo_current &= 1;
    }
    Ho(t, Vo_current);
    if (r_revealOrder === `backwards` && e !== null) {
      cl(e);
      Ic(e, t, t_pendingProps, n);
      cl(e);
    } else {
      Ic(e, t, t_pendingProps, n);
    }
    t_pendingProps = F ? ea : 0;
    if (!s && e !== null && e.flags & 128) {
      a: for (e = t.child; e !== null;) {
        if (e.tag === 13) {
          if (e.memoizedState !== null) {
            al(e, n, t);
          }
        } else if (e.tag === 19) {
          al(e, n, t);
        } else if (e.child !== null) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === t) {
          break a;
        }
        while (e.sibling === null) {
          if (e.return === null || e.return === t) {
            break a;
          }
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
    switch (r_revealOrder) {
      case `backwards`:
        n = ol(t.child);
        if (n === null) {
          r_revealOrder = t.child;
          t.child = null;
        } else {
          r_revealOrder = n.sibling;
          n.sibling = null;
          cl(t);
        }
        sl(t, true, r_revealOrder, null, r_tail, t_pendingProps);
        break;
      case `unstable_legacy-backwards`:
        n = null;
        r_revealOrder = t.child;
        for (t.child = null; r_revealOrder !== null;) {
          e = r_revealOrder.alternate;
          if (e !== null && Wo(e) === null) {
            t.child = r_revealOrder;
            break;
          }
          e = r_revealOrder.sibling;
          r_revealOrder.sibling = n;
          n = r_revealOrder;
          r_revealOrder = e;
        }
        sl(t, true, n, null, r_tail, t_pendingProps);
        break;
      case `together`:
        sl(t, false, null, null, undefined, t_pendingProps);
        break;
      case `independent`:
        t.memoizedState = null;
        break;
      default:
        n = ol(t.child);
        if (n === null) {
          r_revealOrder = t.child;
          t.child = null;
        } else {
          r_revealOrder = n.sibling;
          n.sibling = null;
        }
        sl(t, false, r_revealOrder, n, r_tail, t_pendingProps);
    }
    return t.child;
  }
  function ul(e, t, n) {
    const t_pendingProps = t.pendingProps;
    Ca(t, t.type, t_pendingProps.value);
    Ic(e, t, t_pendingProps.children, n);
    return t.child;
  }
  function dl(e, t, n) {
    if (e !== null) {
      t.dependencies = e.dependencies;
    }
    sd |= t.lanes;
    if ((n & t.childLanes) === 0) {
      if (e !== null) {
        Ea(e, t, n, false);
        if ((n & t.childLanes) === 0) {
          return null;
        }
      } else {
        return null;
      }
    }
    if (e !== null && t.child !== e.child) {
      throw Error(a(153));
    }
    if (t.child !== null) {
      e = t.child;
      n = Wi(e, e.pendingProps);
      t.child = n;
      for (n.return = t; e.sibling !== null;) {
        e = e.sibling;
        n = n.sibling = Wi(e, e.pendingProps);
        n.return = t;
      }
      n.sibling = null;
    }
    return t.child;
  }
  function fl(e, t) {
    return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Da(e)));
  }
  function pl(e, t, n) {
    switch (t.tag) {
      case 3:
        Ie(t, t.stateNode.containerInfo);
        Ca(t, L, e.memoizedState.cache);
        _a();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ca(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) {
          t.flags |= 128;
          Lo(t);
          return null;
        }
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null) {
          if (r.dehydrated !== null) {
            Io(t);
            t.flags |= 128;
            return null;
          }
          r = Ea(e, t, n, false);
          var i = t.child.childLanes;
          if (r || (n & i) !== 0) {
            return el(e, t, n);
          }
          Io(t);
          e = dl(e, t, n);
          if (e === null) {
            return null;
          }
          return e.sibling;
        }
        Io(t);
        break;
      case 19:
        if (t.flags & 128) {
          return ll(e, t, n);
        }
        i = !!(e.flags & 128);
        r = (n & t.childLanes) !== 0;
        r ||= (Ea(e, t, n, false), (n & t.childLanes) !== 0);
        if (i) {
          if (r) {
            return ll(e, t, n);
          }
          t.flags |= 128;
        }
        i = t.memoizedState;
        if (i !== null) {
          i.rendering = null;
          i.tail = null;
          i.lastEffect = null;
        }
        Ho(t, Vo.current);
        if (r) {
          break;
        }
        return null;
      case 22:
        t.lanes = 0;
        return Bc(e, t, n, t.pendingProps);
      case 24:
        Ca(t, L, e.memoizedState.cache);
    }
    return dl(e, t, n);
  }
  function ml(e, t, n) {
    if (e !== null) {
      if (e.memoizedProps !== t.pendingProps) {
        Fc = true;
      } else {
        if (!fl(e, n) && !(t.flags & 128)) {
          Fc = false;
          return pl(e, t, n);
        }
        Fc = !!(e.flags & 131072);
      }
    } else {
      Fc = false;
      if (F && t.flags & 1048576) {
        N(t, ea, t.index);
      }
    }
    t.lanes = 0;
    switch (t.tag) {
      case 16:
        a: {
          var r = t.pendingProps;
          e = io(t.elementType);
          t.type = e;
          if (typeof e == `function`) {
            if (Ui(e)) {
              r = wc(e, r);
              t.tag = 1;
              t = Yc(null, t, e, r, n);
            } else {
              t.tag = 0;
              t = qc(null, t, e, r, n);
            }
          } else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === pe) {
                t.tag = 11;
                t = Lc(null, t, e, r, n);
                break a;
              }
              if (i === C) {
                t.tag = 14;
                t = Rc(null, t, e, r, n);
                break a;
              }
              if (i === fe) {
                t.tag = 10;
                t.type = e;
                t = ul(null, t, n);
                break a;
              }
            }
            t = Te(e) || e;
            throw Error(a(306, t, ``));
          }
        }
        return t;
      case 0:
        return qc(e, t, t.type, t.pendingProps, n);
      case 1:
        r = t.type;
        i = wc(r, t.pendingProps);
        return Yc(e, t, r, i, n);
      case 3:
        a: {
          Ie(t, t.stateNode.containerInfo);
          if (e === null) {
            throw Error(a(387));
          }
          r = t.pendingProps;
          var o = t.memoizedState;
          i = o.element;
          yo(e, t);
          Eo(t, r, null, n);
          var s = t.memoizedState;
          r = s.cache;
          Ca(t, L, r);
          if (r !== o.cache) {
            Ta(t, [L], n, true);
          }
          To();
          r = s.element;
          if (o.isDehydrated) {
            o = {
              element: r,
              isDehydrated: false,
              cache: s.cache
            };
            t.updateQueue.baseState = o;
            t.memoizedState = o;
            if (t.flags & 256) {
              t = Xc(e, t, r, n);
              break a;
            }
            if (r !== i) {
              i = Qi(Error(a(424)), t);
              ya(i);
              t = Xc(e, t, r, n);
              break a;
            }
            e = t.stateNode.containerInfo;
            switch (e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
            }
            P = lm(e.firstChild);
            la = t;
            F = true;
            ua = null;
            da = true;
            n = go(t, null, r, n);
            for (t.child = n; n;) {
              n.flags = n.flags & -3 | 134221824;
              n = n.sibling;
            }
          } else {
            _a();
            if (r === i) {
              t = dl(e, t, n);
              break a;
            }
            Ic(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        Kc(e, t);
        if (e === null) {
          if (n = Nm(t.type, null, t.pendingProps, null)) {
            t.memoizedState = n;
          } else if (!F) {
            t.stateNode = fp(t.type, t.pendingProps, Pe.current, t);
          }
        } else {
          t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState);
        }
        return null;
      case 27:
        Re(t);
        if (e === null && F) {
          r = t.stateNode = hm(t.type, t.pendingProps, Pe.current);
          la = t;
          da = true;
          i = P;
          if (Sp(t.type)) {
            um = i;
            P = lm(r.firstChild);
          } else {
            P = i;
          }
        }
        Ic(e, t, t.pendingProps.children, n);
        Kc(e, t);
        if (e === null) {
          t.flags |= 4194304;
        }
        return t.child;
      case 5:
        if (e === null && F) {
          if (i = r = P) {
            r = rm(r, t.type, t.pendingProps, da);
            if (r === null) {
              i = false;
            } else {
              t.stateNode = r;
              la = t;
              P = lm(r.firstChild);
              da = false;
              i = true;
            }
          }
          if (!i) {
            pa(t);
          }
        }
        Re(t);
        i = t.type;
        o = t.pendingProps;
        s = e === null ? null : e.memoizedProps;
        r = o.children;
        if (pp(i, o)) {
          r = null;
        } else if (s !== null && pp(i, s)) {
          t.flags |= 32;
        }
        if (t.memoizedState !== null) {
          i = ts(e, t, useIs, null, null, n);
          sh._currentValue = i;
        }
        Kc(e, t);
        Ic(e, t, r, n);
        return t.child;
      case 6:
        if (e === null && F) {
          if (e = n = P) {
            n = im(n, t.pendingProps, da);
            if (n === null) {
              e = false;
            } else {
              t.stateNode = n;
              la = t;
              P = null;
              e = true;
            }
          }
          if (!e) {
            pa(t);
          }
        }
        return null;
      case 13:
        return el(e, t, n);
      case 4:
        Ie(t, t.stateNode.containerInfo);
        r = t.pendingProps;
        if (e === null) {
          t.child = ho(t, null, r, n);
        } else {
          Ic(e, t, r, n);
        }
        return t.child;
      case 11:
        return Lc(e, t, t.type, t.pendingProps, n);
      case 7:
        r = t.pendingProps;
        Kc(e, t);
        Ic(e, t, r, n);
        return t.child;
      case 8:
        Ic(e, t, t.pendingProps.children, n);
        return t.child;
      case 12:
        Ic(e, t, t.pendingProps.children, n);
        return t.child;
      case 10:
        return ul(e, t, n);
      case 9:
        i = t.type._context;
        r = t.pendingProps.children;
        Oa(t);
        i = ka(i);
        r = r(i);
        t.flags |= 1;
        Ic(e, t, r, n);
        return t.child;
      case 14:
        return Rc(e, t, t.type, t.pendingProps, n);
      case 15:
        return zc(e, t, t.type, t.pendingProps, n);
      case 19:
        return ll(e, t, n);
      case 31:
        return Gc(e, t, n);
      case 22:
        return Bc(e, t, n, t.pendingProps);
      case 24:
        Oa(t);
        r = ka(L);
        if (e === null) {
          i = Ya();
          if (i === null) {
            i = K;
            o = Fa();
            i.pooledCache = o;
            o.refCount++;
            if (o !== null) {
              i.pooledCacheLanes |= n;
            }
            i = o;
          }
          t.memoizedState = {
            parent: r,
            cache: i
          };
          vo(t);
          Ca(t, L, i);
        } else {
          if ((e.lanes & n) !== 0) {
            yo(e, t);
            Eo(t, null, null, n);
            To();
          }
          i = e.memoizedState;
          o = t.memoizedState;
          if (i.parent === r) {
            r = o.cache;
            Ca(t, L, r);
            if (r !== i.cache) {
              Ta(t, [L], n, true);
            }
          } else {
            i = {
              parent: r,
              cache: r
            };
            t.memoizedState = i;
            if (t.lanes === 0) {
              t.memoizedState = t.updateQueue.baseState = i;
            }
            Ca(t, L, r);
          }
        }
        Ic(e, t, t.pendingProps.children, n);
        return t.child;
      case 30:
        if (t.stateNode === null) {
          t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
        }
        r = t.pendingProps;
        if (r.name != null && r.name !== `auto`) {
          t.flags |= e === null ? 18882560 : 18874368;
        } else if (F) {
          oa(t);
        }
        if (e !== null && e.memoizedProps.name !== r.name) {
          t.flags |= 4194816;
        } else {
          Kc(e, t);
        }
        Ic(e, t, r.children, n);
        return t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(a(156, t.tag));
  }
  function hl(e) {
    e.flags |= 4;
  }
  function gl(e, t, n, r, i) {
    let a;
    if (a = !!(e.mode & 32)) {
      a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet);
    }
    if (a) {
      e.flags |= 16777216;
      if ((i & 335544128) === i) {
        if (e.stateNode.complete) {
          e.flags |= 8192;
        } else if (Ud()) {
          e.flags |= 8192;
        } else {
          ao = to;
          throw $a;
        }
      }
    } else {
      e.flags &= -16777217;
    }
  }
  function _l(e, t) {
    if (t.type !== `stylesheet` || t.state.loading & 4) {
      e.flags &= -16777217;
    } else {
      e.flags |= 16777216;
      if (!Ym(t)) {
        if (Ud()) {
          e.flags |= 8192;
        } else {
          ao = to;
          throw $a;
        }
      }
    }
  }
  function vl(e, t) {
    if (t !== null) {
      e.flags |= 4;
    }
    if (e.flags & 16384) {
      t = e.tag === 22 ? 536870912 : St();
      e.lanes |= t;
      dd |= t;
    }
  }
  function yl(e, t) {
    if (!F) {
      switch (e.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n = e.tail, r = null; n !== null;) {
            if (n.alternate !== null) {
              r = n;
            }
            n = n.sibling;
          }
          if (r === null) {
            if (t || e.tail === null) {
              e.tail = null;
            } else {
              e.tail.sibling = null;
            }
          } else {
            r.sibling = null;
          }
          break;
        default:
          t = e.tail;
          for (n = null; t !== null;) {
            if (t.alternate !== null) {
              n = t;
            }
            t = t.sibling;
          }
          if (n === null) {
            e.tail = null;
          } else {
            n.sibling = null;
          }
      }
    }
  }
  function H(e) {
    const t = e.alternate !== null && e.alternate.child === e.child;
    let n = 0;
    let r = 0;
    if (t) {
      for (var i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags & 1206910976;
        r |= i.flags & 1206910976;
        i.return = e;
        i = i.sibling;
      }
    } else {
      for (i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags;
        r |= i.flags;
        i.return = e;
        i = i.sibling;
      }
    }
    e.subtreeFlags |= r;
    e.childLanes = n;
    return t;
  }
  function BlComponent(e, t, n) {
    let t_pendingProps = t.pendingProps;
    sa(t);
    switch (t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        H(t);
        return null;
      case 1:
        H(t);
        return null;
      case 3:
        n = t.stateNode;
        t_pendingProps = null;
        if (e !== null) {
          t_pendingProps = e.memoizedState.cache;
        }
        if (t.memoizedState.cache !== t_pendingProps) {
          t.flags |= 2048;
        }
        wa(L);
        Le();
        if (n.pendingContext) {
          n.context = n.pendingContext;
          n.pendingContext = null;
        }
        if (e === null || e.child === null) {
          if (ga(t)) {
            hl(t);
          } else if (!(e === null || e.memoizedState.isDehydrated && !(t.flags & 256))) {
            t.flags |= 1024;
            va();
          }
        }
        H(t);
        return null;
      case 26:
        var i = t.type;
        var o = t.memoizedState;
        if (e === null) {
          hl(t);
          if (o === null) {
            H(t);
            gl(t, i, null, t_pendingProps, n);
          } else {
            H(t);
            _l(t, o);
          }
        } else if (o) {
          if (o === e.memoizedState) {
            H(t);
            t.flags &= -16777217;
          } else {
            hl(t);
            H(t);
            _l(t, o);
          }
        } else {
          e = e.memoizedProps;
          if (e !== t_pendingProps) {
            hl(t);
          }
          H(t);
          gl(t, i, e, t_pendingProps, n);
        }
        return null;
      case 27:
        ze(t);
        n = Pe.current;
        i = t.type;
        if (e !== null && t.stateNode != null) {
          if (e.memoizedProps !== t_pendingProps) {
            hl(t);
          }
        } else {
          if (!t_pendingProps) {
            if (t.stateNode === null) {
              throw Error(a(166));
            }
            H(t);
            t.subtreeFlags &= -33554433;
            return null;
          }
          e = Me.current;
          if (ga(t)) {
            ma(t, e);
          } else {
            e = hm(i, t_pendingProps, n);
            t.stateNode = e;
            hl(t);
          }
        }
        H(t);
        t.subtreeFlags &= -33554433;
        return null;
      case 5:
        ze(t);
        i = t.type;
        if (e !== null && t.stateNode != null) {
          if (e.memoizedProps !== t_pendingProps) {
            hl(t);
          }
        } else {
          if (!t_pendingProps) {
            if (t.stateNode === null) {
              throw Error(a(166));
            }
            H(t);
            t.subtreeFlags &= -33554433;
            return null;
          }
          o = Me.current;
          if (ga(t)) {
            ma(t, o);
          } else {
            let s = lp(Pe.current);
            switch (o) {
              case 1:
                o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                break;
              case 2:
                o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                break;
              default:
                switch (i) {
                  case `svg`:
                    o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                    break;
                  case `math`:
                    o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                    break;
                  case `script`:
                    o = s.createElement(`div`);
                    o.innerHTML = `<script><\/script>`;
                    o = o.removeChild(o.firstChild);
                    break;
                  case `select`:
                    o = typeof t_pendingProps.is == `string` ? <select is={t_pendingProps.is} /> : s.createElement(`select`);
                    if (t_pendingProps.multiple) {
                      o.multiple = true;
                    } else if (t_pendingProps.size) {
                      o.size = t_pendingProps.size;
                    }
                    break;
                  default:
                    o = typeof t_pendingProps.is == `string` ? s.createElement(i, {
                      is: t_pendingProps.is
                    }) : s.createElement(i);
                }
            }
            o[Pt] = t;
            o[Ft] = t_pendingProps;
            a: for (s = t.child; s !== null;) {
              if (s.tag === 5 || s.tag === 6) {
                o.appendChild(s.stateNode);
              } else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s;
                s = s.child;
                continue;
              }
              if (s === t) {
                break a;
              }
              while (s.sibling === null) {
                if (s.return === null || s.return === t) {
                  break a;
                }
                s = s.return;
              }
              s.sibling.return = s.return;
              s = s.sibling;
            }
            t.stateNode = o;
            a: switch (np(o, i, t_pendingProps), i) {
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
              hl(t);
            }
          }
        }
        H(t);
        t.subtreeFlags &= -33554433;
        gl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n);
        return null;
      case 6:
        if (e && t.stateNode != null) {
          if (e.memoizedProps !== t_pendingProps) {
            hl(t);
          }
        } else {
          if (typeof t_pendingProps != `string` && t.stateNode === null) {
            throw Error(a(166));
          }
          e = Pe.current;
          if (ga(t)) {
            e = t.stateNode;
            n = t.memoizedProps;
            t_pendingProps = null;
            i = la;
            if (i !== null) {
              switch (i.tag) {
                case 27:
                case 5:
                  t_pendingProps = i.memoizedProps;
              }
            }
            e[Pt] = t;
            e = !!(e.nodeValue === n || t_pendingProps !== null && t_pendingProps.suppressHydrationWarning === true || ep(e.nodeValue, n));
            if (!e) {
              pa(t, true);
            }
          } else {
            e = lp(e).createTextNode(t_pendingProps);
            e[Pt] = t;
            t.stateNode = e;
          }
        }
        H(t);
        return null;
      case 31:
        n = t.memoizedState;
        if (e === null || e.memoizedState !== null) {
          t_pendingProps = ga(t);
          if (n !== null) {
            if (e === null) {
              if (!t_pendingProps) {
                throw Error(a(318));
              }
              e = t.memoizedState;
              e = e === null ? null : e.dehydrated;
              if (!e) {
                throw Error(a(557));
              }
              e[Pt] = t;
            } else {
              _a();
              if (!(t.flags & 128)) {
                t.memoizedState = null;
              }
              t.flags |= 4;
            }
            H(t);
            e = false;
          } else {
            n = va();
            if (e !== null && e.memoizedState !== null) {
              e.memoizedState.hydrationErrors = n;
            }
            e = true;
          }
          if (!e) {
            if (t.flags & 256) {
              Bo(t);
              return t;
            }
            Bo(t);
            return null;
          }
          if (t.flags & 128) {
            throw Error(a(558));
          }
        }
        H(t);
        return null;
      case 13:
        t_pendingProps = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          i = ga(t);
          if (t_pendingProps !== null && t_pendingProps.dehydrated !== null) {
            if (e === null) {
              if (!i) {
                throw Error(a(318));
              }
              i = t.memoizedState;
              i = i === null ? null : i.dehydrated;
              if (!i) {
                throw Error(a(317));
              }
              i[Pt] = t;
            } else {
              _a();
              if (!(t.flags & 128)) {
                t.memoizedState = null;
              }
              t.flags |= 4;
            }
            H(t);
            i = false;
          } else {
            i = va();
            if (e !== null && e.memoizedState !== null) {
              e.memoizedState.hydrationErrors = i;
            }
            i = true;
          }
          if (!i) {
            if (t.flags & 256) {
              Bo(t);
              return t;
            }
            Bo(t);
            return null;
          }
        }
        Bo(t);
        if (t.flags & 128) {
          t.lanes = n;
          return t;
        }
        n = t_pendingProps !== null;
        e = e !== null && e.memoizedState !== null;
        if (n) {
          t_pendingProps = t.child;
          i = null;
          if (t_pendingProps.alternate !== null && t_pendingProps.alternate.memoizedState !== null && t_pendingProps.alternate.memoizedState.cachePool !== null) {
            i = t_pendingProps.alternate.memoizedState.cachePool.pool;
          }
          o = null;
          if (t_pendingProps.memoizedState !== null && t_pendingProps.memoizedState.cachePool !== null) {
            o = t_pendingProps.memoizedState.cachePool.pool;
          }
          if (o !== i) {
            t_pendingProps.flags |= 2048;
          }
        }
        if (n !== e && n) {
          t.child.flags |= 8192;
        }
        vl(t, t.updateQueue);
        H(t);
        return null;
      case 4:
        Le();
        if (e === null) {
          Wf(t.stateNode.containerInfo);
        }
        t.flags |= 67108864;
        H(t);
        return null;
      case 10:
        wa(t.type);
        H(t);
        return null;
      case 19:
        Uo(t);
        t_pendingProps = t.memoizedState;
        if (t_pendingProps === null) {
          H(t);
          return null;
        }
        i = !!(t.flags & 128);
        o = t_pendingProps.rendering;
        if (o === null) {
          if (i) {
            yl(t_pendingProps, false);
          } else {
            if (od !== 0 || e !== null && e.flags & 128) {
              for (e = t.child; e !== null;) {
                o = Wo(e);
                if (o !== null) {
                  t.flags |= 128;
                  yl(t_pendingProps, false);
                  e = o.updateQueue;
                  t.updateQueue = e;
                  vl(t, e);
                  t.subtreeFlags = 0;
                  e = n;
                  for (n = t.child; n !== null;) {
                    Gi(n, e);
                    n = n.sibling;
                  }
                  Ho(t, Vo.current & 1 | 2);
                  if (F) {
                    aa(t, t_pendingProps.treeForkCount);
                  }
                  return t.child;
                }
                e = e.sibling;
              }
            }
            if (t_pendingProps.tail !== null && t_unstable_now() > _d) {
              t.flags |= 128;
              i = true;
              yl(t_pendingProps, false);
              t.lanes = 4194304;
            }
          }
        } else {
          if (!i) {
            e = Wo(o);
            if (e !== null) {
              t.flags |= 128;
              i = true;
              e = e.updateQueue;
              t.updateQueue = e;
              vl(t, e);
              yl(t_pendingProps, true);
              if (t_pendingProps.tail === null && t_pendingProps.tailMode !== `collapsed` && t_pendingProps.tailMode !== `visible` && !o.alternate && !F) {
                H(t);
                return null;
              }
            } else {
              if (2 * t_unstable_now() - t_pendingProps.renderingStartTime > _d && n !== 536870912) {
                t.flags |= 128;
                i = true;
                yl(t_pendingProps, false);
                t.lanes = 4194304;
              }
            }
          }
          if (t_pendingProps.isBackwards) {
            o.sibling = t.child;
            t.child = o;
          } else {
            e = t_pendingProps.last;
            if (e === null) {
              t.child = o;
            } else {
              e.sibling = o;
            }
            t_pendingProps.last = o;
          }
        }
        if (t_pendingProps.tail !== null) {
          e = t_pendingProps.tail;
          a: {
            for (n = e; n !== null;) {
              if (n.alternate !== null) {
                n = false;
                break a;
              }
              n = n.sibling;
            }
            n = true;
          }
          t_pendingProps.rendering = e;
          t_pendingProps.tail = e.sibling;
          t_pendingProps.renderingStartTime = t_unstable_now();
          e.sibling = null;
          o = Vo.current;
          o = i ? o & 1 | 2 : o & 1;
          if (t_pendingProps.tailMode === `visible` || t_pendingProps.tailMode === `collapsed` || !n || F) {
            Ho(t, o);
          } else {
            n = o;
            E(Po, t);
            E(Vo, n);
            if (Fo === null) {
              Fo = t;
            }
          }
          if (F) {
            aa(t, t_pendingProps.treeForkCount);
          }
          return e;
        }
        H(t);
        return null;
      case 22:
      case 23:
        Bo(t);
        No();
        t_pendingProps = t.memoizedState !== null;
        if (e === null) {
          if (t_pendingProps) {
            t.flags |= 8192;
          }
        } else if (e.memoizedState !== null !== t_pendingProps) {
          t.flags |= 8192;
        }
        if (t_pendingProps) {
          if (n & 536870912 && !(t.flags & 128)) {
            H(t);
            if (t.subtreeFlags & 6) {
              t.flags |= 8192;
            }
          }
        } else {
          H(t);
        }
        n = t.updateQueue;
        if (n !== null) {
          vl(t, n.retryQueue);
        }
        n = null;
        if (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null) {
          n = e.memoizedState.cachePool.pool;
        }
        t_pendingProps = null;
        if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
          t_pendingProps = t.memoizedState.cachePool.pool;
        }
        if (t_pendingProps !== n) {
          t.flags |= 2048;
        }
        if (e !== null) {
          je(Ja);
        }
        return null;
      case 24:
        n = null;
        if (e !== null) {
          n = e.memoizedState.cache;
        }
        if (t.memoizedState.cache !== n) {
          t.flags |= 2048;
        }
        wa(L);
        H(t);
        return null;
      case 25:
        return null;
      case 30:
        t.flags |= 33554432;
        H(t);
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function xl(e, t) {
    sa(t);
    switch (t.tag) {
      case 1:
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        }
        return null;
      case 3:
        wa(L);
        Le();
        e = t.flags;
        if (e & 65536 && !(e & 128)) {
          t.flags = e & -65537 | 128;
          return t;
        }
        return null;
      case 26:
      case 27:
      case 5:
        ze(t);
        return null;
      case 31:
        if (t.memoizedState !== null) {
          Bo(t);
          if (t.alternate === null) {
            throw Error(a(340));
          }
          _a();
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        }
        return null;
      case 13:
        Bo(t);
        e = t.memoizedState;
        if (e !== null && e.dehydrated !== null) {
          if (t.alternate === null) {
            throw Error(a(340));
          }
          _a();
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        }
        return null;
      case 19:
        Uo(t);
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          e = t.memoizedState;
          if (e !== null) {
            e.rendering = null;
            e.tail = null;
          }
          t.flags |= 4;
          return t;
        }
        return null;
      case 4:
        Le();
        return null;
      case 10:
        wa(t.type);
        return null;
      case 22:
      case 23:
        Bo(t);
        No();
        if (e !== null) {
          je(Ja);
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        }
        return null;
      case 24:
        wa(L);
        return null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sl(e, t) {
    sa(t);
    switch (t.tag) {
      case 3:
        wa(L);
        Le();
        break;
      case 26:
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        if (t.memoizedState !== null) {
          Bo(t);
        }
        break;
      case 13:
        Bo(t);
        break;
      case 19:
        Uo(t);
        break;
      case 10:
        wa(t.type);
        break;
      case 22:
      case 23:
        Bo(t);
        No();
        if (e !== null) {
          je(Ja);
        }
        break;
      case 24:
        wa(L);
    }
  }
  function Cl(e, t) {
    try {
      let n = t.updateQueue;
      let r = n === null ? null : n.lastEffect;
      if (r !== null) {
        const i = r.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            r = undefined;
            const {
              create,
              inst
            } = n;
            r = create();
            inst.destroy = r;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (error) {
      Z(t, t.return, error);
    }
  }
  function wl(e, t, n) {
    try {
      let r = t.updateQueue;
      let i = r === null ? null : r.lastEffect;
      if (i !== null) {
        const a = i.next;
        r = a;
        do {
          if ((r.tag & e) === e) {
            const o = r.inst;
            const s = o.destroy;
            if (s !== undefined) {
              o.destroy = undefined;
              i = t;
              const c = n;
              const l = s;
              try {
                l();
              } catch (error) {
                Z(i, c, error);
              }
            }
          }
          r = r.next;
        } while (r !== a);
      }
    } catch (error) {
      Z(t, t.return, error);
    }
  }
  function Tl(e) {
    const e_updateQueue = e.updateQueue;
    if (e_updateQueue !== null) {
      const n = e.stateNode;
      try {
        Oo(e_updateQueue, n);
      } catch (error) {
        Z(e, e.return, error);
      }
    }
  }
  function El(e, t, n) {
    n.props = wc(e.type, e.memoizedProps);
    n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (error) {
      Z(e, t, error);
    }
  }
  function Dl(e, t) {
    try {
      const n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            const i = e.stateNode;
            const a = k(e.memoizedProps, i);
            if (i.ref === null || i.ref.name !== a) {
              i.ref = Pp(a);
            }
            r = i.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              const o = new Fp(e);
              p(e.child, false, Qp, o, undefined, undefined);
              e.stateNode = o;
            }
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        if (typeof n == `function`) {
          e.refCleanup = n(r);
        } else {
          n.current = r;
        }
      }
    } catch (error) {
      Z(e, t, error);
    }
  }
  function Ol(e, t) {
    const {
      ref,
      refCleanup
    } = e;
    if (ref !== null) {
      if (typeof refCleanup == `function`) {
        try {
          refCleanup();
        } catch (error) {
          Z(e, t, error);
        } finally {
          e.refCleanup = null;
          e = e.alternate;
          if (e != null) {
            e.refCleanup = null;
          }
        }
      } else if (typeof ref == `function`) {
        try {
          ref(null);
        } catch (error) {
          Z(e, t, error);
        }
      } else {
        ref.current = null;
      }
    }
  }
  function kl(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) {
      for (let n = 0; n < t.length; n++) {
        em(e.stateNode, t[n]);
      }
    }
  }
  function Al(e) {
    for (let t = e.return; t !== null && (Nl(t) && em(e.stateNode, t.stateNode), !Ml(t));) {
      t = t.return;
    }
  }
  function jl(e) {
    for (let t = e.return; t !== null && (Nl(t) && tm(e.stateNode, t.stateNode), !Ml(t));) {
      t = t.return;
    }
  }
  function Ml(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Nl(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Pl(e) {
    const {
      type,
      memoizedProps,
      stateNode
    } = e;
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
      Z(e, e.return, error);
    }
  }
  function Fl(e, t, n) {
    try {
      const r = e.stateNode;
      ip(r, e.type, n, t);
      r[Ft] = t;
    } catch (error) {
      Z(e, e.return, error);
    }
  }
  function Il(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
  }
  function Ll(e) {
    a: while (true) {
      while (e.sibling === null) {
        if (e.return === null || Il(e.return)) {
          return null;
        }
        e = e.return;
      }
      e.sibling.return = e.return;
      for (e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) {
          continue a;
        }
        e.child.return = e;
        e = e.child;
      }
      if (!(e.flags & 2)) {
        return e.stateNode;
      }
    }
  }
  function Rl(e, t, n, r) {
    let e_tag = e.tag;
    if (e_tag === 5 || e_tag === 6) {
      e_tag = e.stateNode;
      if (t) {
        (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e_tag, t);
      } else {
        t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n;
        t.appendChild(e_tag);
        n = n._reactRootContainer;
        if (!(n != null || t.onclick !== null)) {
          t.onclick = unsuspend;
        }
      }
      kl(e, r);
      D = true;
    } else if (e_tag !== 4 && (e_tag === 27 && (kl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) {
      Rl(e, t, n, r);
      for (e = e.sibling; e !== null;) {
        Rl(e, t, n, r);
        e = e.sibling;
      }
    }
  }
  function zl(e, t, n, r) {
    let e_tag = e.tag;
    if (e_tag === 5 || e_tag === 6) {
      e_tag = e.stateNode;
      if (t) {
        n.insertBefore(e_tag, t);
      } else {
        n.appendChild(e_tag);
      }
      kl(e, r);
      D = true;
    } else if (e_tag !== 4 && (e_tag === 27 && (kl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) {
      zl(e, t, n, r);
      for (e = e.sibling; e !== null;) {
        zl(e, t, n, r);
        e = e.sibling;
      }
    }
  }
  function Bl(e) {
    const {
      stateNode,
      memoizedProps
    } = e;
    try {
      const r = e.type;
      for (const i = stateNode.attributes; i.length;) {
        stateNode.removeAttributeNode(i[0]);
      }
      np(stateNode, r, memoizedProps);
      stateNode[Pt] = e;
      stateNode[Ft] = memoizedProps;
    } catch (error) {
      Z(e, e.return, error);
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
  function Gl() {
    const e = Wl;
    Wl = null;
    return e;
  }
  var Kl = 0;
  function ql(e, t, n, r, i) {
    Kl = 0;
    return Jl(e.child, t, n, r, i);
  }
  function Jl(e, t, n, r, i) {
    let a = false;
    while (e !== null) {
      if (e.tag === 5) {
        const o = e.stateNode;
        if (r !== null) {
          const s = Op(o);
          r.push(s);
          if (s.view) {
            a = true;
          }
        } else {
          if (!a) {
            if (Op(o).view) {
              a = true;
            }
          }
        }
        Vl = true;
        Tp(o, Kl === 0 ? t : t + `_` + Kl, n);
        Kl++;
      } else {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (!(e.tag === 30 && i)) {
            if (Jl(e.child, t, n, r, i)) {
              a = true;
            }
          }
        }
      }
      e = e.sibling;
    }
    return a;
  }
  function Yl(e, t) {
    while (e !== null) {
      if (e.tag === 5) {
        Ep(e.stateNode, e.memoizedProps);
      } else {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (!(e.tag === 30 && t)) {
            Yl(e.child, t);
          }
        }
      }
      e = e.sibling;
    }
  }
  function Xl(e) {
    if (e.subtreeFlags & 18874368) {
      for (e = e.child; e !== null;) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Xl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
          let t = e.memoizedProps;
          if (t.name == null || t.name === `auto`) {
            throw Error(a(544));
          }
          const n = t.name;
          t = ki(t.default, t.share);
          if (t !== `none`) {
            if (!ql(e, n, t, null, false)) {
              Yl(e.child, false);
            }
          }
        }
        e = e.sibling;
      }
    }
  }
  function Zl(e, t) {
    if (e.tag === 30) {
      const {
        stateNode,
        memoizedProps
      } = e;
      const i = k(memoizedProps, stateNode);
      const a = ki(memoizedProps.default, stateNode.paired ? memoizedProps.share : memoizedProps.enter);
      if (a === `none`) {
        Xl(e);
      } else if (ql(e, i, a, null, false)) {
        Xl(e);
        if (!(stateNode.paired || t)) {
          Nd(e, memoizedProps.onEnter);
        }
      } else {
        Yl(e.child, false);
      }
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        Zl(e, t);
        e = e.sibling;
      }
    } else {
      Xl(e);
    }
  }
  function Ql(e) {
    if (Hl !== null && Hl.size !== 0) {
      const t = Hl;
      if (e.subtreeFlags & 18874368) {
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              const n = e.memoizedProps;
              const r = n.name;
              if (r != null && r !== `auto`) {
                const i = t.get(r);
                if (i !== undefined) {
                  let a = ki(n.default, n.share);
                  if (a !== `none`) {
                    if (ql(e, r, a, null, false)) {
                      a = e.stateNode;
                      i.paired = a;
                      a.paired = i;
                      Nd(e, n.onShare);
                    } else {
                      Yl(e.child, false);
                    }
                  }
                  t.delete(r);
                  if (t.size === 0) {
                    break;
                  }
                }
              }
            }
            Ql(e);
          }
          e = e.sibling;
        }
      }
    }
  }
  function $l(e) {
    if (e.tag === 30) {
      const t = e.memoizedProps;
      const n = k(t, e.stateNode);
      const r = Hl === null ? undefined : Hl.get(n);
      let i = ki(t.default, r === undefined ? t.exit : t.share);
      if (i !== `none`) {
        if (ql(e, n, i, null, false)) {
          if (r === undefined) {
            Nd(e, t.onExit);
          } else {
            i = e.stateNode;
            r.paired = i;
            i.paired = r;
            Hl.delete(n);
            Nd(e, t.onShare);
          }
        } else {
          Yl(e.child, false);
        }
      }
      if (Hl !== null) {
        Ql(e);
      }
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        $l(e);
        e = e.sibling;
      }
    } else {
      if (Hl !== null) {
        Ql(e);
      }
    }
  }
  function eu(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        let t = e.memoizedProps;
        const n = k(t, e.stateNode);
        t = ki(t.default, t.update);
        e.flags &= -5;
        if (t !== `none`) {
          ql(e, n, t, e.memoizedState = [], false);
        }
      } else {
        if (e.subtreeFlags & 33554432) {
          eu(e);
        }
      }
      e = e.sibling;
    }
  }
  function tu(e) {
    if (e.subtreeFlags & 18874368) {
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && e.flags & 18874368) {
            const t = e.stateNode;
            if (t.paired !== null) {
              t.paired = null;
              Yl(e.child, false);
            }
          }
          tu(e);
        }
        e = e.sibling;
      }
    }
  }
  function nu(e) {
    if (e.tag === 30) {
      e.stateNode.paired = null;
      Yl(e.child, false);
      tu(e);
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        nu(e);
        e = e.sibling;
      }
    } else {
      tu(e);
    }
  }
  function ru(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        Yl(e.child, false);
      } else if (e.subtreeFlags & 33554432) {
        ru(e);
      }
      e = e.sibling;
    }
  }
  function iu(e, t, n, r, i, a, o) {
    let s = false;
    while (t !== null) {
      if (t.tag === 5) {
        const c = t.stateNode;
        if (a !== null && Kl < a.length) {
          let l = a[Kl];
          let u = Op(c);
          if (l.view || u.view) {
            s = true;
          }
          let d;
          if (d = !(e.flags & 4)) {
            if (u.clip) {
              d = true;
            } else {
              d = l.rect;
              const f = u.rect;
              d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
            }
          }
          if (d) {
            e.flags |= 4;
          }
          if (u.abs) {
            u = !l.abs;
          } else {
            l = l.rect;
            u = u.rect;
            u = l.height !== u.height || l.width !== u.width;
          }
          if (u) {
            e.flags |= 32;
          }
        } else {
          e.flags |= 32;
        }
        if (e.flags & 4) {
          Tp(c, Kl === 0 ? n : n + `_` + Kl, i);
        }
        if (!(s && e.flags & 4)) {
          if (Wl === null) {
            Wl = [];
          }
          Wl.push(c, Kl === 0 ? r : r + `_` + Kl, t.memoizedProps);
        }
        Kl++;
      } else {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && o) {
            e.flags |= t.flags & 32;
          } else if (iu(e, t.child, n, r, i, a, o)) {
            s = true;
          }
        }
      }
      t = t.sibling;
    }
    return s;
  }
  function au(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        const n = e.memoizedProps;
        let r = e.stateNode;
        let i = k(n, r);
        const a = ki(n.default, n.update);
        if (t) {
          r = r.clones;
          var o = r === null ? null : r.map(kp);
        } else {
          o = e.memoizedState;
          e.memoizedState = null;
        }
        r = e;
        const s = e.child;
        Kl = 0;
        i = iu(r, s, i, i, a, o, false);
        if (e.flags & 4 && i) {
          if (!t) {
            Nd(e, n.onUpdate);
          }
        }
      } else {
        if (e.subtreeFlags & 33554432) {
          au(e, t);
        }
      }
      e = e.sibling;
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
  function hu(focusedElem, t, n) {
    focusedElem = focusedElem.containerInfo;
    sp = gh;
    focusedElem = ai(focusedElem);
    if (oi(focusedElem)) {
      if (`selectionStart` in focusedElem) var selectionRange = {
        start: focusedElem.selectionStart,
        end: focusedElem.selectionEnd
      };else {
        a: {
          selectionRange = (selectionRange = focusedElem.ownerDocument) && selectionRange.defaultView || window;
          let i = selectionRange.getSelection && selectionRange.getSelection();
          if (i && i.rangeCount !== 0) {
            selectionRange = i.anchorNode;
            var a = i.anchorOffset;
            const o = i.focusNode;
            i = i.focusOffset;
            try {
              selectionRange.nodeType;
              o.nodeType;
            } catch {
              selectionRange = null;
              break a;
            }
            let s = 0;
            let start = -1;
            let end = -1;
            let u = 0;
            let d = 0;
            let f = focusedElem;
            let p = null;
            b: while (true) {
              let m;
              while (f !== selectionRange || a !== 0 && f.nodeType !== 3 || (start = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (end = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null) {
                p = f;
                f = m;
              }
              while (true) {
                if (f === focusedElem) {
                  break b;
                }
                if (p === selectionRange && ++u === a) {
                  start = s;
                }
                if (p === o && ++d === i) {
                  end = s;
                }
                if ((m = f.nextSibling) !== null) {
                  break;
                }
                f = p;
                p = f.parentNode;
              }
              f = m;
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
    n = (n & 335544064) === n;
    uu = t;
    for (t = n ? 9270 : 1024; uu !== null;) {
      focusedElem = uu;
      if (n && (selectionRange = focusedElem.deletions, selectionRange !== null)) {
        for (a = 0; a < selectionRange.length; a++) {
          if (n) {
            $l(selectionRange[a]);
          }
        }
      }
      if (focusedElem.alternate === null && focusedElem.flags & 2) {
        if (n) {
          Ul(focusedElem);
        }
        gu(n);
      } else {
        if (focusedElem.tag === 22) {
          selectionRange = focusedElem.alternate;
          if (focusedElem.memoizedState !== null) {
            if (selectionRange !== null && selectionRange.memoizedState === null && n) {
              $l(selectionRange);
            }
            gu(n);
            continue;
          }
          if (selectionRange !== null && selectionRange.memoizedState !== null) {
            if (n) {
              Ul(focusedElem);
            }
            gu(n);
            continue;
          }
        }
        selectionRange = focusedElem.child;
        if ((focusedElem.subtreeFlags & t) !== 0 && selectionRange !== null) {
          selectionRange.return = focusedElem;
          uu = selectionRange;
        } else {
          if (n) {
            eu(focusedElem);
          }
          gu(n);
        }
      }
    }
    Hl = null;
  }
  function gu(e) {
    while (uu !== null) {
      const t = uu;
      let n = e;
      let r = t.alternate;
      let i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i & 1024 && r !== null) {
            n = undefined;
            i = r.memoizedProps;
            r = r.memoizedState;
            const o = t.stateNode;
            try {
              const s = wc(t.type, i);
              n = o.getSnapshotBeforeUpdate(s, r);
              o.__reactInternalSnapshotBeforeUpdate = n;
            } catch (error) {
              Z(t, t.return, error);
            }
          }
          break;
        case 3:
          if (i & 1024) {
            r = t.stateNode.containerInfo;
            n = r.nodeType;
            if (n === 9) {
              nm(r);
            } else if (n === 1) {
              switch (r.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r);
                  break;
                default:
                  r.textContent = ``;
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
          if (n && r !== null) {
            n = k(r.memoizedProps, r.stateNode);
            i = t.memoizedProps;
            i = ki(i.default, i.update);
            if (i !== `none`) {
              ql(r, n, i, r.memoizedState = [], true);
            }
          }
          break;
        default:
          if (i & 1024) {
            throw Error(a(163));
          }
      }
      r = t.sibling;
      if (r !== null) {
        r.return = t.return;
        uu = r;
        break;
      }
      uu = t.return;
    }
  }
  function _u(e, t, n) {
    let n_flags = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Iu(e, n);
        if (n_flags & 4) {
          Cl(5, n);
        }
        break;
      case 1:
        Iu(e, n);
        if (n_flags & 4) {
          e = n.stateNode;
          if (t === null) {
            try {
              e.componentDidMount();
            } catch (error) {
              Z(n, n.return, error);
            }
          } else {
            var i = wc(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (error) {
              Z(n, n.return, error);
            }
          }
        }
        if (n_flags & 64) {
          Tl(n);
        }
        if (n_flags & 512) {
          Dl(n, n.return);
        }
        break;
      case 3:
        Iu(e, n);
        if (n_flags & 64 && (e = n.updateQueue, e !== null)) {
          t = null;
          if (n.child !== null) {
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          }
          try {
            Oo(e, t);
          } catch (error) {
            Z(n, n.return, error);
          }
        }
        break;
      case 27:
        if (t === null && n_flags & 4) {
          Bl(n);
        }
      case 26:
      case 5:
        Iu(e, n);
        if (t === null && n_flags & 4) {
          Pl(n);
        }
        if (n_flags & 512) {
          Dl(n, n.return);
        }
        break;
      case 12:
        Iu(e, n);
        break;
      case 31:
        Iu(e, n);
        if (n_flags & 4) {
          Tu(e, n);
        }
        break;
      case 13:
        Iu(e, n);
        if (n_flags & 4) {
          Eu(e, n);
        }
        if (n_flags & 64) {
          e = n.memoizedState;
          if (e !== null) {
            e = e.dehydrated;
            if (e !== null) {
              n = _f.bind(null, n);
              cm(e, n);
            }
          }
        }
        break;
      case 22:
        n_flags = n.memoizedState !== null || ou;
        if (!n_flags) {
          const a = t !== null && t.memoizedState !== null || U;
          t = ou;
          i = U;
          ou = n_flags;
          if ((U = a) && !i) {
            n_flags = 2;
            if (n.subtreeFlags & 8772) {
              n_flags |= 1;
            }
            Ru(e, n, n_flags);
          } else {
            Iu(e, n);
          }
          ou = t;
          U = i;
        }
        break;
      case 30:
        Iu(e, n);
        if (n_flags & 512) {
          Dl(n, n.return);
        }
        break;
      case 7:
        if (n_flags & 512) {
          Dl(n, n.return);
        }
      default:
        Iu(e, n);
    }
  }
  function vu(e, t) {
    for (e = e.child; e !== null;) {
      yu(e, t);
      e = e.sibling;
    }
  }
  function yu(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          const n = e.stateNode;
          if (t) {
            const r = n.style;
            if (typeof r.setProperty == `function`) {
              r.setProperty(`display`, `none`, `important`);
            } else {
              r.display = `none`;
            }
          } else {
            const i = e.stateNode;
            const a = e.memoizedProps.style;
            const o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
            i.style.display = o == null || typeof o == `boolean` ? `` : (`` + o).trim();
          }
        } catch (error) {
          Z(e, e.return, error);
        }
        bu(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? `` : e.memoizedProps;
          D = true;
        } catch (error) {
          Z(e, e.return, error);
        }
        break;
      case 18:
        try {
          const s = e.stateNode;
          if (t) {
            wp(s, true);
          } else {
            wp(e.stateNode, false);
          }
        } catch (error) {
          Z(e, e.return, error);
        }
        break;
      case 22:
      case 23:
        if (e.memoizedState === null) {
          vu(e, t);
        }
        break;
      default:
        vu(e, t);
    }
  }
  function bu(e, t) {
    if (e.subtreeFlags & 67108864) {
      for (e = e.child; e !== null;) {
        a: {
          const n = e;
          const r = t;
          switch (n.tag) {
            case 4:
              yu(n, r);
              break a;
            case 22:
              if (n.memoizedState === null) {
                bu(n, r);
              }
              break a;
            default:
              bu(n, r);
          }
        }
        e = e.sibling;
      }
    }
  }
  function xu(e) {
    let e_alternate = e.alternate;
    if (e_alternate !== null) {
      e.alternate = null;
      xu(e_alternate);
    }
    e.child = null;
    e.deletions = null;
    e.sibling = null;
    if (e.tag === 5) {
      e_alternate = e.stateNode;
      if (e_alternate !== null) {
        Ut(e_alternate);
      }
    }
    e.stateNode = null;
    e.return = null;
    e.dependencies = null;
    e.memoizedProps = null;
    e.memoizedState = null;
    e.pendingProps = null;
    e.stateNode = null;
    e.updateQueue = null;
  }
  var W = null;
  var Su = false;
  function Cu(e, t, n) {
    for (n = n.child; n !== null;) {
      wu(e, t, n);
      n = n.sibling;
    }
  }
  function wu(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == `function`) {
      try {
        ct.onCommitFiberUnmount(st, n);
      } catch {}
    }
    switch (n.tag) {
      case 26:
        if (!U) {
          Ol(n, t);
        }
        Cu(e, t, n);
        if (n.memoizedState) {
          n.memoizedState.count--;
        } else if (n.stateNode && !U) {
          n = n.stateNode;
          n.parentNode.removeChild(n);
        }
        break;
      case 27:
        if (!U) {
          Ol(n, t);
        }
        jl(n);
        var r = W;
        var i = Su;
        if (Sp(n.type)) {
          W = n.stateNode;
          Su = false;
        }
        Cu(e, t, n);
        gm(n.stateNode, n.type, n.memoizedProps);
        W = r;
        Su = i;
        break;
      case 5:
        if (!U) {
          Ol(n, t);
        }
        jl(n);
      case 6:
        if (n.tag === 6) {
          jl(n);
        }
        r = W;
        i = Su;
        W = null;
        Cu(e, t, n);
        W = r;
        Su = i;
        if (W !== null) {
          if (Su) {
            try {
              (W.nodeType === 9 ? W.body : W.nodeName === `HTML` ? W.ownerDocument.body : W).removeChild(n.stateNode);
              D = true;
            } catch (error) {
              Z(n, t, error);
            }
          } else {
            try {
              W.removeChild(n.stateNode);
              D = true;
            } catch (error) {
              Z(n, t, error);
            }
          }
        }
        break;
      case 18:
        if (W !== null) {
          if (Su) {
            e = W;
            Cp(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode);
            Hh(e);
          } else {
            Cp(W, n.stateNode);
          }
        }
        break;
      case 4:
        r = W;
        i = Su;
        W = n.stateNode.containerInfo;
        Su = true;
        Cu(e, t, n);
        W = r;
        Su = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wl(2, n, t);
        if (!U) {
          wl(4, n, t);
        }
        Cu(e, t, n);
        break;
      case 1:
        if (!U) {
          Ol(n, t);
          r = n.stateNode;
          if (typeof r.componentWillUnmount == `function`) {
            El(n, t, r);
          }
        }
        Cu(e, t, n);
        break;
      case 21:
        Cu(e, t, n);
        break;
      case 22:
        U = (r = U) || n.memoizedState !== null;
        Cu(e, t, n);
        U = r;
        break;
      case 30:
        Ol(n, t);
        Cu(e, t, n);
        break;
      case 7:
        if (!U) {
          Ol(n, t);
        }
        Cu(e, t, n);
        break;
      default:
        Cu(e, t, n);
    }
  }
  function Tu(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Hh(e);
      } catch (error) {
        Z(t, t.return, error);
      }
    }
  }
  function Eu(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) {
      try {
        Hh(e);
      } catch (error) {
        Z(t, t.return, error);
      }
    }
  }
  function Du(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        if (t === null) {
          t = e.stateNode = new lu();
        }
        return t;
      case 22:
        e = e.stateNode;
        t = e._retryCache;
        if (t === null) {
          t = e._retryCache = new lu();
        }
        return t;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function Ou(e, t) {
    const n = Du(e);
    t.forEach(t => {
      if (!n.has(t)) {
        n.add(t);
        const r = vf.bind(null, e, t);
        t.then(r, r);
      }
    });
  }
  function ku(e, t, n) {
    const t_deletions = t.deletions;
    if (t_deletions !== null) {
      for (const o of t_deletions) {
        let s = e;
        const c = t;
        let l = c;
        a: while (l !== null) {
          switch (l.tag) {
            case 27:
              if (Sp(l.type)) {
                W = l.stateNode;
                Su = false;
                break a;
              }
              break;
            case 5:
              W = l.stateNode;
              Su = false;
              break a;
            case 3:
            case 4:
              W = l.stateNode.containerInfo;
              Su = true;
              break a;
          }
          l = l.return;
        }
        if (W === null) {
          throw Error(a(160));
        }
        wu(s, c, o);
        W = null;
        Su = false;
        s = o.alternate;
        if (s !== null) {
          s.return = null;
        }
        o.return = null;
      }
    }
    if (t.subtreeFlags & 13886) {
      for (t = t.child; t !== null;) {
        ju(t, e, n);
        t = t.sibling;
      }
    }
  }
  var Au = null;
  function ju(e, t, n) {
    let e_alternate = e.alternate;
    let e_flags = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e_flags & 4 && (e_alternate = e.updateQueue, e_alternate = e_alternate === null ? null : e_alternate.events, e_alternate !== null)) {
          for (var o = 0; o < e_alternate.length; o++) {
            var s = e_alternate[o];
            s.ref.impl = s.nextImpl;
          }
        }
        ku(t, e, n);
        Mu(e);
        if (e_flags & 4) {
          wl(3, e, e.return);
          Cl(3, e);
          wl(5, e, e.return);
        }
        break;
      case 1:
        ku(t, e, n);
        Mu(e);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_flags & 64 && ou) {
          e = e.updateQueue;
          if (e !== null) {
            t = e.callbacks;
            if (t !== null) {
              n = e.shared.hiddenCallbacks;
              e.shared.hiddenCallbacks = n === null ? t : n.concat(t);
            }
          }
        }
        break;
      case 26:
        o = Au;
        ku(t, e, n);
        Mu(e);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_flags & 4) {
          e_flags = e_alternate === null ? null : e_alternate.memoizedState;
          n = e.memoizedState;
          if (e_alternate === null) {
            if (n === null) {
              if (e.stateNode === null) {
                if (ou) {
                  e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
                } else {
                  a: {
                    t = e.type;
                    n = e.memoizedProps;
                    e_flags = o.ownerDocument || o;
                    b: switch (t) {
                      case `title`:
                        e_alternate = e_flags.getElementsByTagName(`title`)[0];
                        if (!e_alternate || e_alternate[Vt] || e_alternate[Pt] || e_alternate.namespaceURI === `http://www.w3.org/2000/svg` || e_alternate.hasAttribute(`itemprop`)) {
                          e_alternate = e_flags.createElement(t);
                          e_flags.head.insertBefore(e_alternate, e_flags.querySelector(`head > title`));
                        }
                        np(e_alternate, t, n);
                        e_alternate[Pt] = e;
                        Jt(e_alternate);
                        t = e_alternate;
                        break a;
                      case `link`:
                        if (o = Gm(`link`, `href`, e_flags).get(t + (n.href || ``))) {
                          for (s = 0; s < o.length; s++) {
                            e_alternate = o[s];
                            if (e_alternate.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && e_alternate.getAttribute(`rel`) === (n.rel ?? null) && e_alternate.getAttribute(`title`) === (n.title ?? null) && e_alternate.getAttribute(`crossorigin`) === (n.crossOrigin ?? null)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                        }
                        e_alternate = e_flags.createElement(t);
                        np(e_alternate, t, n);
                        e_flags.head.appendChild(e_alternate);
                        break;
                      case `meta`:
                        if (o = Gm(`meta`, `content`, e_flags).get(t + (n.content || ``))) {
                          for (s = 0; s < o.length; s++) {
                            e_alternate = o[s];
                            if (e_alternate.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && e_alternate.getAttribute(`name`) === (n.name ?? null) && e_alternate.getAttribute(`property`) === (n.property ?? null) && e_alternate.getAttribute(`http-equiv`) === (n.httpEquiv ?? null) && e_alternate.getAttribute(`charset`) === (n.charSet ?? null)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                        }
                        e_alternate = e_flags.createElement(t);
                        np(e_alternate, t, n);
                        e_flags.head.appendChild(e_alternate);
                        break;
                      default:
                        throw Error(a(468, t));
                    }
                    e_alternate[Pt] = e;
                    Jt(e_alternate);
                    t = e_alternate;
                  }
                  e.stateNode = t;
                }
              } else {
                if (!ou) {
                  Km(o, e.type, e.stateNode);
                }
              }
            } else {
              e.stateNode = Bm(o, n, e.memoizedProps);
            }
          } else {
            if (e_flags === n) {
              if (n === null && e.stateNode !== null) {
                Fl(e, e.memoizedProps, e_alternate.memoizedProps);
              }
            } else {
              if (e_flags === null) {
                t = e_alternate.stateNode;
                if (!(t === null || U)) {
                  t.parentNode.removeChild(t);
                }
              } else {
                e_flags.count--;
              }
              if (n === null) {
                if (!ou) {
                  Km(o, e.type, e.stateNode);
                }
              } else {
                Bm(o, n, e.memoizedProps);
              }
            }
          }
        }
        break;
      case 27:
        ku(t, e, n);
        Mu(e);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e_alternate !== null && e_flags & 4) {
          Fl(e, e.memoizedProps, e_alternate.memoizedProps);
        }
        break;
      case 5:
        o = su;
        su = false;
        ku(t, e, n);
        su = o;
        Mu(e);
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        if (e.flags & 32) {
          t = e.stateNode;
          try {
            Sn(t, ``);
            D = true;
          } catch (error) {
            Z(e, e.return, error);
          }
        }
        if (e_flags & 4 && e.stateNode != null) {
          t = e.memoizedProps;
          Fl(e, t, e_alternate === null ? t : e_alternate.memoizedProps);
        }
        if (e_flags & 1024) {
          cu = true;
        }
        break;
      case 6:
        ku(t, e, n);
        Mu(e);
        if (e_flags & 4) {
          if (e.stateNode === null) {
            throw Error(a(162));
          }
          t = e.memoizedProps;
          n = e.stateNode;
          try {
            n.nodeValue = t;
            D = true;
          } catch (error) {
            Z(e, e.return, error);
          }
        }
        break;
      case 3:
        D = false;
        Wm = null;
        o = Au;
        Au = bm(t.containerInfo);
        ku(t, e, n);
        Au = o;
        Mu(e);
        if (e_flags & 4 && e_alternate !== null && e_alternate.memoizedState.isDehydrated) {
          try {
            Hh(t.containerInfo);
          } catch (error) {
            Z(e, e.return, error);
          }
        }
        if (cu) {
          cu = false;
          Nu(e);
        }
        D = false;
        break;
      case 4:
        e_flags = su;
        su = ou;
        e_alternate = an();
        o = Au;
        Au = bm(e.stateNode.containerInfo);
        ku(t, e, n);
        Mu(e);
        Au = o;
        if (D && fu) {
          pu = true;
        }
        D = e_alternate;
        su = e_flags;
        break;
      case 12:
        ku(t, e, n);
        Mu(e);
        break;
      case 31:
        ku(t, e, n);
        Mu(e);
        if (e_flags & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            Ou(e, t);
          }
        }
        break;
      case 13:
        ku(t, e, n);
        Mu(e);
        if (e.child.flags & 8192 && e.memoizedState !== null != (e_alternate !== null && e_alternate.memoizedState !== null)) {
          hd = t_unstable_now();
        }
        if (e_flags & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            Ou(e, t);
          }
        }
        break;
      case 22:
        o = e.memoizedState !== null;
        s = e_alternate !== null && e_alternate.memoizedState !== null;
        var c = ou;
        const l = U;
        const u = su;
        ou = c || o;
        su = u || o;
        U = l || s;
        ku(t, e, n);
        U = l;
        su = u;
        ou = c;
        Mu(e);
        if (e_flags & 8192) {
          t = e.stateNode;
          t._visibility = o ? t._visibility & -2 : t._visibility | 1;
          if (!(!o || e_alternate === null || s || ou || U)) {
            t = s || U;
            n = ou;
            e_alternate = U;
            ou = o || ou;
            U = t;
            Lu(e, 2);
            ou = n;
            U = e_alternate;
          }
          if (!(!o && su)) {
            vu(e, o);
          }
        }
        if (e_flags & 4) {
          t = e.updateQueue;
          if (t !== null) {
            n = t.retryQueue;
            if (n !== null) {
              t.retryQueue = null;
              Ou(e, n);
            }
          }
        }
        break;
      case 19:
        ku(t, e, n);
        Mu(e);
        if (e_flags & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            Ou(e, t);
          }
        }
        break;
      case 30:
        if (e_flags & 512) {
          if (!(U || e_alternate === null)) {
            Ol(e_alternate, e_alternate.return);
          }
        }
        e_flags = an();
        o = fu;
        s = (n & 335544064) === n;
        c = e.memoizedProps;
        fu = s && ki(c.default, c.update) !== `none`;
        ku(t, e, n);
        Mu(e);
        if (s && e_alternate !== null && D) {
          e.flags |= 4;
        }
        fu = o;
        D = e_flags;
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
          e_alternate.stateNode._fragmentFiber = e;
        }
      default:
        ku(t, e, n);
        Mu(e);
    }
  }
  function Mu(e) {
    const e_flags = e.flags;
    if (e_flags & 2) {
      try {
        let n;
        for (var r = e.return; r !== null;) {
          if (Il(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        r = null;
        for (let i = e.return; i !== null;) {
          if (Nl(i)) {
            const o = i.stateNode;
            if (r === null) {
              r = [o];
            } else {
              r.push(o);
            }
          }
          if (Ml(i)) {
            break;
          }
          i = i.return;
        }
        const s = r;
        if (n == null) {
          throw Error(a(160));
        }
        switch (n.tag) {
          case 27:
            const c = n.stateNode;
            zl(e, Ll(e), c, s);
            break;
          case 5:
            const l = n.stateNode;
            if (n.flags & 32) {
              Sn(l, ``);
              n.flags &= -33;
            }
            zl(e, Ll(e), l, s);
            break;
          case 3:
          case 4:
            const u = n.stateNode.containerInfo;
            Rl(e, Ll(e), u, s);
            break;
          default:
            throw Error(a(161));
        }
      } catch (error) {
        Z(e, e.return, error);
      }
      e.flags &= -3;
    }
    if (e_flags & 4096) {
      e.flags &= -4097;
    }
  }
  function Nu(e) {
    if (e.subtreeFlags & 1024) {
      for (e = e.child; e !== null;) {
        let t = e;
        Nu(t);
        if (t.tag === 5 && t.flags & 1024) {
          t = t.stateNode;
          gh = true;
          t.reset();
          gh = false;
        }
        e = e.sibling;
      }
    }
  }
  function Pu(e, t) {
    if (t.subtreeFlags & 9270) {
      for (t = t.child; t !== null;) {
        Fu(t, e);
        t = t.sibling;
      }
    } else {
      au(t, false);
    }
  }
  function Fu(e, t) {
    let e_alternate = e.alternate;
    if (e_alternate === null) {
      Zl(e, false);
    } else {
      switch (e.tag) {
        case 3:
          du = false;
          mu = false;
          Gl();
          Pu(t, e);
          if (!du && !pu) {
            e = Wl;
            if (e !== null) {
              for (var r = 0; r < e.length; r += 3) {
                e_alternate = e[r];
                var i = e[r + 1];
                Ep(e_alternate, e[r + 2]);
                e_alternate = e_alternate.ownerDocument.documentElement;
                if (e_alternate !== null) {
                  e_alternate.animate({
                    opacity: [0, 0],
                    pointerEvents: [`none`, `none`]
                  }, {
                    duration: 0,
                    fill: `forwards`,
                    pseudoElement: `::view-transition-group(` + i + `)`
                  });
                }
              }
            }
            e = t.containerInfo;
            e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement;
            if (e !== null && e.style.viewTransitionName === ``) {
              e.style.viewTransitionName = `none`;
              e.animate({
                opacity: [0, 0],
                pointerEvents: [`none`, `none`]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition-group(root)`
              });
              e.animate({
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
          Pu(t, e);
          break;
        case 4:
          r = du;
          du = false;
          Pu(t, e);
          if (du) {
            pu = true;
          }
          du = r;
          break;
        case 22:
          if (e.memoizedState === null) {
            if (e_alternate.memoizedState === null) {
              Pu(t, e);
            } else {
              Zl(e, false);
            }
          }
          break;
        case 30:
          r = du;
          i = Gl();
          du = false;
          Pu(t, e);
          if (du) {
            e.flags |= 4;
          }
          let a = e.memoizedProps;
          let o = e.stateNode;
          t = k(a, o);
          o = k(e_alternate.memoizedProps, o);
          const s = ki(a.default, a.update);
          if (s === `none`) {
            t = false;
          } else {
            a = e_alternate.memoizedState;
            e_alternate.memoizedState = null;
            e_alternate = e.child;
            Kl = 0;
            t = iu(e, e_alternate, t, o, s, a, true);
            if (Kl !== (a === null ? 0 : a.length)) {
              e.flags |= 32;
            }
          }
          if (e.flags & 4 && t) {
            Nd(e, e.memoizedProps.onUpdate);
            Wl = i;
          } else if (i !== null) {
            i.push(...Wl);
            Wl = i;
          }
          du = e.flags & 32 ? true : r;
          break;
        default:
          Pu(t, e);
      }
    }
  }
  function Iu(e, t) {
    if (t.subtreeFlags & 8772) {
      for (t = t.child; t !== null;) {
        _u(e, t.alternate, t);
        t = t.sibling;
      }
    }
  }
  function Lu(e, t) {
    for (e = e.child; e !== null;) {
      const n = e;
      const r = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wl(4, n, n.return);
          Lu(n, r);
          break;
        case 1:
          Ol(n, n.return);
          var i = n.stateNode;
          if (typeof i.componentWillUnmount == `function`) {
            El(n, n.return, i);
          }
          Lu(n, r);
          break;
        case 27:
          if (r & 2) {
            gm(n.stateNode, n.type, n.memoizedProps);
          }
        case 5:
          Ol(n, n.return);
          if (!(n.tag !== 5 && n.tag !== 27)) {
            jl(n);
          }
          Lu(n, r);
          break;
        case 6:
          jl(n);
          break;
        case 26:
          Ol(n, n.return);
          i = n.stateNode;
          if (!(n.memoizedState !== null || i === null || U)) {
            i.parentNode.removeChild(i);
          }
          Lu(n, r);
          break;
        case 22:
          if (n.memoizedState === null) {
            Lu(n, r);
          }
          break;
        case 30:
          Ol(n, n.return);
          Lu(n, r);
          break;
        case 7:
          Ol(n, n.return);
        default:
          Lu(n, r);
      }
      e = e.sibling;
    }
  }
  function Ru(e, t, n) {
    n = t.subtreeFlags & 8772 ? n : n & -2;
    for (t = t.child; t !== null;) {
      let r = t.alternate;
      let i = e;
      const a = t;
      const o = a.flags;
      const s = !!(n & 1);
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ru(i, a, n);
          Cl(4, a);
          break;
        case 1:
          Ru(i, a, n);
          r = a;
          i = r.stateNode;
          if (typeof i.componentDidMount == `function`) {
            try {
              i.componentDidMount();
            } catch (error) {
              Z(r, r.return, error);
            }
          }
          r = a;
          i = r.updateQueue;
          if (i !== null) {
            var c = r.stateNode;
            try {
              const l = i.shared.hiddenCallbacks;
              if (l !== null) {
                i.shared.hiddenCallbacks = null;
                for (i = 0; i < l.length; i++) {
                  Do(l[i], c);
                }
              }
            } catch (error) {
              Z(r, r.return, error);
            }
          }
          if (s && o & 64) {
            Tl(a);
          }
          Dl(a, a.return);
          break;
        case 27:
          if (n & 2) {
            Bl(a);
          }
        case 5:
          if (!(a.tag !== 5 && a.tag !== 27)) {
            Al(a);
          }
          Ru(i, a, n);
          if (s && r === null && o & 4) {
            Pl(a);
          }
          Dl(a, a.return);
          break;
        case 6:
          Al(a);
          break;
        case 26:
          c = a.stateNode;
          if (!(a.memoizedState !== null || c === null || ou)) {
            Km(bm(c.ownerDocument), a.type, c);
          }
          Ru(i, a, n);
          if (s && r === null && o & 4) {
            Pl(a);
          }
          Dl(a, a.return);
          break;
        case 12:
          Ru(i, a, n);
          break;
        case 31:
          Ru(i, a, n);
          if (s && o & 4) {
            Tu(i, a);
          }
          break;
        case 13:
          Ru(i, a, n);
          if (s && o & 4) {
            Eu(i, a);
          }
          break;
        case 22:
          if (a.memoizedState === null) {
            Ru(i, a, n);
          }
          Dl(a, a.return);
          break;
        case 30:
          Ru(i, a, n);
          Dl(a, a.return);
          break;
        case 7:
          Dl(a, a.return);
        default:
          Ru(i, a, n);
      }
      t = t.sibling;
    }
  }
  function zu(e, t) {
    let n = null;
    if (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null) {
      n = e.memoizedState.cachePool.pool;
    }
    e = null;
    if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
      e = t.memoizedState.cachePool.pool;
    }
    if (e !== n) {
      if (e != null) {
        e.refCount++;
      }
      if (n != null) {
        Ia(n);
      }
    }
  }
  function Bu(e, t) {
    e = null;
    if (t.alternate !== null) {
      e = t.alternate.memoizedState.cache;
    }
    t = t.memoizedState.cache;
    if (t !== e) {
      t.refCount++;
      if (e != null) {
        Ia(e);
      }
    }
  }
  function Vu(e, t, n, r) {
    const i = (n & 335544064) === n;
    if (t.subtreeFlags & (i ? 10262 : 10256)) {
      for (t = t.child; t !== null;) {
        Hu(e, t, n, r);
        t = t.sibling;
      }
    } else {
      if (i) {
        ru(t);
      }
    }
  }
  function Hu(e, t, n, r) {
    const i = (n & 335544064) === n;
    if (i && t.alternate === null && t.return !== null && t.return.alternate !== null) {
      nu(t);
    }
    let t_flags = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Vu(e, t, n, r);
        if (t_flags & 2048) {
          Cl(9, t);
        }
        break;
      case 1:
        Vu(e, t, n, r);
        break;
      case 3:
        Vu(e, t, n, r);
        if (i && mu) {
          e = e.containerInfo;
          e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e;
          if (e.style.viewTransitionName === `root`) {
            e.style.viewTransitionName = ``;
          }
          e = e.ownerDocument.documentElement;
          if (e !== null && e.style.viewTransitionName === `none`) {
            e.style.viewTransitionName = ``;
          }
        }
        if (t_flags & 2048) {
          t_flags = null;
          if (t.alternate !== null) {
            t_flags = t.alternate.memoizedState.cache;
          }
          t = t.memoizedState.cache;
          if (t !== t_flags) {
            t.refCount++;
            if (t_flags != null) {
              Ia(t_flags);
            }
          }
        }
        break;
      case 12:
        if (t_flags & 2048) {
          Vu(e, t, n, r);
          t_flags = t.stateNode;
          try {
            var o = t.memoizedProps;
            var s = o.id;
            const c = o.onPostCommit;
            if (typeof c == `function`) {
              c(s, t.alternate === null ? `mount` : `update`, t_flags.passiveEffectDuration, -0);
            }
          } catch (error) {
            Z(t, t.return, error);
          }
        } else {
          Vu(e, t, n, r);
        }
        break;
      case 31:
        Vu(e, t, n, r);
        break;
      case 13:
        Vu(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        o = t.stateNode;
        s = t.alternate;
        if (t.memoizedState === null) {
          if (i && s !== null && s.memoizedState !== null) {
            nu(t);
          }
          if (o._visibility & 2) {
            Vu(e, t, n, r);
          } else {
            o._visibility |= 2;
            Uu(e, t, n, r, !!(t.subtreeFlags & 10256) || false);
          }
        } else {
          if (i && s !== null && s.memoizedState === null) {
            nu(s);
          }
          if (o._visibility & 2) {
            Vu(e, t, n, r);
          } else {
            Wu(e, t);
          }
        }
        if (t_flags & 2048) {
          zu(s, t);
        }
        break;
      case 24:
        Vu(e, t, n, r);
        if (t_flags & 2048) {
          Bu(t.alternate, t);
        }
        break;
      case 30:
        if (i) {
          t_flags = t.alternate;
          if (t_flags !== null) {
            Yl(t_flags.child, true);
            Yl(t.child, true);
          }
        }
        Vu(e, t, n, r);
        break;
      default:
        Vu(e, t, n, r);
    }
  }
  function Uu(e, t, n, r, i) {
    i &&= !!(t.subtreeFlags & 10256) || false;
    for (t = t.child; t !== null;) {
      const a = e;
      const o = t;
      const s = n;
      const c = r;
      const l = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Uu(a, o, s, c, i);
          Cl(8, o);
          break;
        case 23:
          break;
        case 22:
          const u = o.stateNode;
          if (o.memoizedState === null) {
            u._visibility |= 2;
            Uu(a, o, s, c, i);
          } else if (u._visibility & 2) {
            Uu(a, o, s, c, i);
          } else {
            Wu(a, o);
          }
          if (i && l & 2048) {
            zu(o.alternate, o);
          }
          break;
        case 24:
          Uu(a, o, s, c, i);
          if (i && l & 2048) {
            Bu(o.alternate, o);
          }
          break;
        default:
          Uu(a, o, s, c, i);
      }
      t = t.sibling;
    }
  }
  function Wu(e, t) {
    if (t.subtreeFlags & 10256) {
      for (t = t.child; t !== null;) {
        const n = e;
        const r = t;
        const i = r.flags;
        switch (r.tag) {
          case 22:
            Wu(n, r);
            if (i & 2048) {
              zu(r.alternate, r);
            }
            break;
          case 24:
            Wu(n, r);
            if (i & 2048) {
              Bu(r.alternate, r);
            }
            break;
          default:
            Wu(n, r);
        }
        t = t.sibling;
      }
    }
  }
  var Gu = 8192;
  function Ku(e, t, n) {
    if (e.subtreeFlags & Gu) {
      for (e = e.child; e !== null;) {
        qu(e, t, n);
        e = e.sibling;
      }
    }
  }
  function qu(e, t, n) {
    switch (e.tag) {
      case 26:
        Ku(e, t, n);
        if (e.flags & Gu) {
          if (e.memoizedState === null) {
            e = e.stateNode;
            if ((t & 335544128) === t) {
              Zm(n, e);
            }
          } else {
            Qm(n, Au, e.memoizedState, e.memoizedProps);
          }
        }
        break;
      case 5:
        Ku(e, t, n);
        if (e.flags & Gu) {
          e = e.stateNode;
          if ((t & 335544128) === t) {
            Zm(n, e);
          }
        }
        break;
      case 3:
      case 4:
        var r = Au;
        Au = bm(e.stateNode.containerInfo);
        Ku(e, t, n);
        Au = r;
        break;
      case 22:
        if (e.memoizedState === null) {
          r = e.alternate;
          if (r !== null && r.memoizedState !== null) {
            r = Gu;
            Gu = 16777216;
            Ku(e, t, n);
            Gu = r;
          } else {
            Ku(e, t, n);
          }
        }
        break;
      case 30:
        if ((e.flags & Gu) !== 0 && (r = e.memoizedProps.name, r != null && r !== `auto`)) {
          const i = e.stateNode;
          i.paired = null;
          if (Hl === null) {
            Hl = new Map();
          }
          Hl.set(r, i);
        }
        Ku(e, t, n);
        break;
      default:
        Ku(e, t, n);
    }
  }
  function Ju(e) {
    let e_alternate = e.alternate;
    if (e_alternate !== null && (e = e_alternate.child, e !== null)) {
      e_alternate.child = null;
      do {
        e_alternate = e.sibling;
        e.sibling = null;
        e = e_alternate;
      } while (e !== null);
    }
  }
  function Yu(e) {
    const e_deletions = e.deletions;
    if (e.flags & 16) {
      if (e_deletions !== null) {
        for (const r of e_deletions) {
          uu = r;
          Qu(r, e);
        }
      }
      Ju(e);
    }
    if (e.subtreeFlags & 10256) {
      for (e = e.child; e !== null;) {
        Xu(e);
        e = e.sibling;
      }
    }
  }
  function Xu(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Yu(e);
        if (e.flags & 2048) {
          wl(9, e, e.return);
        }
        break;
      case 3:
        Yu(e);
        break;
      case 12:
        Yu(e);
        break;
      case 22:
        const t = e.stateNode;
        if (e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)) {
          t._visibility &= -3;
          Zu(e);
        } else {
          Yu(e);
        }
        break;
      default:
        Yu(e);
    }
  }
  function Zu(e) {
    let e_deletions = e.deletions;
    if (e.flags & 16) {
      if (e_deletions !== null) {
        for (var n = 0; n < e_deletions.length; n++) {
          const deletion = e_deletions[n];
          uu = deletion;
          Qu(deletion, e);
        }
      }
      Ju(e);
    }
    for (e = e.child; e !== null;) {
      e_deletions = e;
      switch (e_deletions.tag) {
        case 0:
        case 11:
        case 15:
          wl(8, e_deletions, e_deletions.return);
          Zu(e_deletions);
          break;
        case 22:
          n = e_deletions.stateNode;
          if (n._visibility & 2) {
            n._visibility &= -3;
            Zu(e_deletions);
          }
          break;
        default:
          Zu(e_deletions);
      }
      e = e.sibling;
    }
  }
  function Qu(e, t) {
    while (uu !== null) {
      let n = uu;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            if (r != null) {
              r.refCount++;
            }
          }
          break;
        case 24:
          Ia(n.memoizedState.cache);
      }
      r = n.child;
      if (r !== null) {
        r.return = n;
        uu = r;
      } else {
        a: for (n = e; uu !== null;) {
          r = uu;
          const {
            sibling,
            return: _return
          } = r;
          xu(r);
          if (r === n) {
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
    getCacheForType: function (e) {
      const t = ka(L);
      let n = t.data.get(e);
      if (n === undefined) {
        n = e();
        t.data.set(e, n);
      }
      return n;
    },
    cacheSignal: function () {
      return ka(L).controller.signal;
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
      return jt();
    }
    return Pf();
  }
  function Md() {
    if (ud === 0) {
      if (!(J & 536870912) || F) {
        var e = ht;
        ht <<= 1;
        if (!(ht & 3932160)) {
          ht = 262144;
        }
        ud = e;
      } else {
        ud = 536870912;
      }
    }
    e = Po.current;
    if (e !== null) {
      e.flags |= 32;
    }
    return ud;
  }
  function Nd(e, t) {
    if (t != null) {
      const n = e.stateNode;
      let r = n.ref;
      if (r === null) {
        r = n.ref = Pp(k(e.memoizedProps, n));
      }
      if (Dd === null) {
        Dd = [];
      }
      Dd.push(t.bind(null, r));
    }
  }
  function Pd(e, t, n) {
    if (e === K && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) {
      Vd(e, 0);
      Rd(e, J, ud, false);
    }
    wt(e, n);
    if (!(G & 2) || e !== K) {
      if (e === K) {
        if (!(G & 2)) {
          cd |= n;
        }
        if (od === 4) {
          Rd(e, J, ud, false);
        }
      }
      Ef(e);
    }
  }
  function Fd(e, t, n) {
    if (G & 6) {
      throw Error(a(327));
    }
    let r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || yt(e, t);
    let i = r ? Yd(e, t) : qd(e, t, true);
    let o = r;
    do {
      if (i === 0) {
        if (rd && !r) {
          Rd(e, t, 0, false);
        }
        break;
      }
      n = e.current.alternate;
      if (o && !Ld(n)) {
        i = qd(e, t, false);
        o = false;
        continue;
      }
      if (i === 2) {
        o = t;
        if (e.errorRecoveryDisabledLanes & o) var s = 0;else {
          s = e.pendingLanes & -536870913;
          s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
        }
        if (s !== 0) {
          t = s;
          a: {
            const c = e;
            i = fd;
            const l = c.current.memoizedState.isDehydrated;
            if (l) {
              Vd(c, s).flags |= 256;
            }
            s = qd(c, s, false);
            if (s !== 2 && s !== 6) {
              if (id && !l) {
                c.errorRecoveryDisabledLanes |= o;
                cd |= o;
                i = 4;
                break a;
              }
              o = pd;
              pd = i;
              if (o !== null) {
                if (pd === null) {
                  pd = o;
                } else {
                  pd.push(...o);
                }
              }
            }
            i = s;
          }
          o = false;
          if (i !== 2) {
            continue;
          }
        }
      }
      if (i === 1) {
        Vd(e, 0);
        Rd(e, t, 0, true);
        break;
      }
      a: {
        r = e;
        o = i;
        switch (o) {
          case 0:
          case 1:
            throw Error(a(345));
          case 4:
            if ((t & 4194048) !== t && (t & 62914560) !== t) {
              break;
            }
          case 6:
            Rd(r, t, ud, !nd);
            break a;
          case 2:
            pd = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(a(329));
        }
        if ((t & 62914560) === t && (i = hd + 300 - t_unstable_now(), i > 10)) {
          Rd(r, t, ud, !nd);
          if (vt(r, 0, true) !== 0) {
            break a;
          }
          Sd = t;
          r.timeoutHandle = gp(Id.bind(null, r, n, pd, vd, md, t, ud, cd, dd, nd, o, `Throttled`, -0, 0), i);
          break a;
        }
        Id(r, n, pd, vd, md, t, ud, cd, dd, nd, o, null, -0, 0);
      }
      break;
    } while (1);
    Ef(e);
  }
  function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    e.timeoutHandle = -1;
    let t_subtreeFlags = t.subtreeFlags;
    let h = (a & 335544064) === a;
    d = null;
    if ((h || t_subtreeFlags & 8192 || (t_subtreeFlags & 16785408) == 16785408) && (d = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend
    }, Hl = null, qu(t, a, d), h && (t_subtreeFlags = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (t_subtreeFlags.count++, t_subtreeFlags.waitingForViewTransition = true, t_subtreeFlags = nh.bind(t_subtreeFlags), h.finished.then(t_subtreeFlags, t_subtreeFlags))), t_subtreeFlags = (a & 62914560) === a ? hd - t_unstable_now() : (a & 4194048) === a ? gd - t_unstable_now() : 0, t_subtreeFlags = eh(d, t_subtreeFlags), t_subtreeFlags !== null)) {
      Sd = a;
      e.cancelPendingCommit = t_subtreeFlags(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p));
      Rd(e, a, o, !l);
      return;
    }
    nf(e, t, a, n, r, i, o, s, c, l, u, d);
  }
  function Ld(e) {
    let t = e;
    while (true) {
      let n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) {
        for (let i of n) {
          const a = i.getSnapshot;
          i = i.value;
          try {
            if (!$r(a(), i)) {
              return false;
            }
          } catch {
            return false;
          }
        }
      }
      n = t.child;
      if (t.subtreeFlags & 16384 && n !== null) {
        n.return = t;
        t = n;
      } else {
        if (t === e) {
          break;
        }
        while (t.sibling === null) {
          if (t.return === null || t.return === e) {
            return true;
          }
          t = t.return;
        }
        t.sibling.return = t.return;
        t = t.sibling;
      }
    }
    return true;
  }
  function Rd(e, t, n, r) {
    t = bt(e, t);
    t &= ~ld;
    t &= ~cd;
    e.suspendedLanes |= t;
    e.pingedLanes &= ~t;
    if (r) {
      e.warmLanes |= t;
    }
    r = e.expirationTimes;
    for (let i = t; i > 0;) {
      const a = 31 - ut(i);
      const o = 1 << a;
      r[a] = -1;
      i &= ~o;
    }
    if (n !== 0) {
      Et(e, n, t);
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
      if (Y === 0) var e = q.return;else {
        e = q;
        xa = null;
        Sa = null;
        ss(e);
        co = null;
        lo = 0;
        e = q;
      }
      while (e !== null) {
        Sl(e.alternate, e);
        e = e.return;
      }
      q = null;
    }
  }
  function Vd(e, t) {
    let e_timeoutHandle = e.timeoutHandle;
    if (e_timeoutHandle !== -1) {
      e.timeoutHandle = -1;
      _p(e_timeoutHandle);
    }
    e_timeoutHandle = e.cancelPendingCommit;
    if (e_timeoutHandle !== null) {
      e.cancelPendingCommit = null;
      e_timeoutHandle();
    }
    Sd = 0;
    Bd();
    K = e;
    q = e_timeoutHandle = Wi(e.current, null);
    J = t;
    Y = 0;
    td = null;
    nd = false;
    rd = yt(e, t);
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
    ad = bt(e, t);
    Pi();
    return e_timeoutHandle;
  }
  function Hd(e, t) {
    R = null;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = gc;
    if (t === Qa || t === eo) {
      t = oo();
      Y = 3;
    } else if (t === $a) {
      t = oo();
      Y = 4;
    } else {
      Y = t === Pc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1;
    }
    td = t;
    if (q === null) {
      od = 1;
      Oc(e, Qi(t, e.current));
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
  function qd(e, t, n) {
    const r = G;
    G |= 2;
    const i = Wd();
    const a = Gd();
    if (K !== e || J !== t) {
      vd = null;
      Vd(e, t);
    }
    t = false;
    let o = od;
    a: do {
      try {
        if (Y !== 0 && q !== null) {
          const s = q;
          const c = td;
          switch (Y) {
            case 8:
              Bd();
              o = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              if (Po.current === null) {
                t = true;
              }
              var l = Y;
              Y = 0;
              td = null;
              $d(e, s, c, l);
              if (n && rd) {
                o = 0;
                break a;
              }
              break;
            default:
              l = Y;
              Y = 0;
              td = null;
              $d(e, s, c, l);
          }
        }
        Jd();
        o = od;
        break;
      } catch (error) {
        Hd(e, error);
      }
    } while (1);
    if (t) {
      e.shellSuspendCounter++;
    }
    xa = null;
    Sa = null;
    G = r;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = i;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = a;
    if (q === null) {
      K = null;
      J = 0;
      Pi();
    }
    return o;
  }
  function Jd() {
    while (q !== null) {
      Zd(q);
    }
  }
  function Yd(e, t) {
    const n = G;
    G |= 2;
    const r = Wd();
    const i = Gd();
    if (K !== e || J !== t) {
      vd = null;
      _d = t_unstable_now() + 500;
      Vd(e, t);
    } else {
      rd = yt(e, t);
    }
    a: do {
      try {
        if (Y !== 0 && q !== null) {
          t = q;
          const o = td;
          b: switch (Y) {
            case 1:
              Y = 0;
              td = null;
              $d(e, t, o, 1);
              break;
            case 2:
            case 9:
              if (no(o)) {
                Y = 0;
                td = null;
                Qd(t);
                break;
              }
              t = function () {
                if (!(Y !== 2 && Y !== 9 || K !== e)) {
                  Y = 7;
                }
                Ef(e);
              };
              o.then(t, t);
              break a;
            case 3:
              Y = 7;
              break a;
            case 4:
              Y = 5;
              break a;
            case 7:
              if (no(o)) {
                Y = 0;
                td = null;
                Qd(t);
              } else {
                Y = 0;
                td = null;
                $d(e, t, o, 7);
              }
              break;
            case 5:
              let s = null;
              switch (q.tag) {
                case 26:
                  s = q.memoizedState;
                case 5:
                case 27:
                  const c = q;
                  if (s ? Ym(s) : c.stateNode.complete) {
                    Y = 0;
                    td = null;
                    const l = c.sibling;
                    if (l !== null) {
                      q = l;
                    } else {
                      const u = c.return;
                      if (u === null) {
                        q = null;
                      } else {
                        q = u;
                        ef(u);
                      }
                    }
                    break b;
                  }
              }
              Y = 0;
              td = null;
              $d(e, t, o, 5);
              break;
            case 6:
              Y = 0;
              td = null;
              $d(e, t, o, 6);
              break;
            case 8:
              Bd();
              od = 6;
              break a;
            default:
              throw Error(a(462));
          }
        }
        Xd();
        break;
      } catch (error) {
        Hd(e, error);
      }
    } while (1);
    xa = null;
    Sa = null;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = r;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = i;
    G = n;
    if (q === null) {
      K = null;
      J = 0;
      Pi();
      return od;
    }
    return 0;
  }
  function Xd() {
    while (q !== null && !t_unstable_shouldYield()) {
      Zd(q);
    }
  }
  function Zd(e) {
    const t = ml(e.alternate, e, ad);
    e.memoizedProps = e.pendingProps;
    if (t === null) {
      ef(e);
    } else {
      q = t;
    }
  }
  function Qd(e) {
    let t = e;
    const t_alternate = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Jc(t_alternate, t, t.pendingProps, t.type, undefined, J);
        break;
      case 11:
        t = Jc(t_alternate, t, t.pendingProps, t.type.render, t.ref, J);
        break;
      case 5:
        ss(t);
        const r = t;
        if (r === la) {
          if (F) {
            ha(r);
            if (r.tag === 5 && r.stateNode != null) {
              P = r.stateNode;
            }
          } else {
            ha(r);
            F = true;
          }
        }
      default:
        Sl(t_alternate, t);
        t = q = Gi(t, ad);
        t = ml(t_alternate, t, ad);
    }
    e.memoizedProps = e.pendingProps;
    if (t === null) {
      ef(e);
    } else {
      q = t;
    }
  }
  function $d(e, t, n, r) {
    xa = null;
    Sa = null;
    ss(t);
    co = null;
    lo = 0;
    const t_return = t.return;
    try {
      if (Nc(e, t_return, t, n, J)) {
        od = 1;
        Oc(e, Qi(n, e.current));
        q = null;
        return;
      }
    } catch (error) {
      if (t_return !== null) {
        q = t_return;
        throw error;
      }
      od = 1;
      Oc(e, Qi(n, e.current));
      q = null;
      return;
    }
    if (t.flags & 32768) {
      if (F || r === 1) {
        e = true;
      } else if (rd || J & 536870912) {
        e = false;
      } else {
        e = true;
        nd = true;
        if (r === 2 || r === 9 || r === 3 || r === 6) {
          r = Po.current;
          if (r !== null && r.tag === 13) {
            r.flags |= 16384;
          }
        }
      }
      tf(t, e);
    } else {
      ef(t);
    }
  }
  function ef(e) {
    let t = e;
    do {
      if (t.flags & 32768) {
        tf(t, nd);
        return;
      }
      e = t.return;
      const n = BlComponent(t.alternate, t, ad);
      if (n !== null) {
        q = n;
        return;
      }
      t = t.sibling;
      if (t !== null) {
        q = t;
        return;
      }
      t = e;
      q = e;
    } while (t !== null);
    if (od === 0) {
      od = 5;
    }
  }
  function tf(e, t) {
    do {
      let n = xl(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767;
        q = n;
        return;
      }
      n = e.return;
      if (n !== null) {
        n.flags |= 32768;
        n.subtreeFlags = 0;
        n.deletions = null;
      }
      if (!t && (e = e.sibling, e !== null)) {
        q = e;
        return;
      }
      e = n;
      q = n;
    } while (e !== null);
    od = 6;
    q = null;
  }
  function nf(e, t, n, r, i, o, s, c, l, u, d, f) {
    e.cancelPendingCommit = null;
    do {
      df();
    } while (X !== 0);
    if (G & 6) {
      throw Error(a(327));
    }
    if (t !== null) {
      if (t === e.current) {
        throw Error(a(177));
      }
      if (e === K) {
        K = null;
        q = null;
        J = 0;
      }
      xd = t;
      bd = e;
      Sd = n;
      wd = i;
      Td = r;
      rf(e, t, n, s, c, l, f);
    }
  }
  function rf(e, t, n, r, i, a, o) {
    let s = t.lanes | t.childLanes;
    Cd = s;
    s |= Ni;
    Tt(e, n, s, r, i, a);
    Dd = null;
    if ((n & 335544064) === n) {
      Od = za(e);
      r = 10262;
    } else {
      Od = null;
      r = 10256;
    }
    if ((t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0) {
      e.callbackNode = null;
      e.callbackPriority = 0;
      yf(t_unstable_NormalPriority, function () {
        ff();
        return null;
      });
    } else {
      e.callbackNode = null;
      e.callbackPriority = 0;
    }
    Vl = false;
    r = !!(t.flags & 13878);
    if (t.subtreeFlags & 13878 || r) {
      r = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      i = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
      a = G;
      G |= 4;
      try {
        hu(e, t, n);
      } finally {
        G = a;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r;
      }
    }
    X = 1;
    if (Vl) {
      Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null);
    } else {
      sf();
      cf();
      lf();
    }
  }
  function af(e) {
    if (X !== 0) {
      const t = bd.onRecoverableError;
      t(e, {
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
      const e = bd;
      const t = xd;
      let n = Sd;
      let r = !!(t.flags & 13878);
      if (t.subtreeFlags & 13878 || r) {
        r = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        const i = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        const a = G;
        G |= 4;
        try {
          pu = false;
          fu = false;
          ju(t, e, n);
          n = cp;
          let o = ai(e.containerInfo);
          let s = n.focusedElem;
          const c = n.selectionRange;
          if (o !== s && s && s.ownerDocument && ii(s.ownerDocument.documentElement, s)) {
            if (c !== null && oi(s)) {
              const l = c.start;
              let u = c.end;
              if (u === undefined) {
                u = l;
              }
              if (`selectionStart` in s) {
                s.selectionStart = l;
                s.selectionEnd = Math.min(u, s.value.length);
              } else {
                var d = s.ownerDocument || document;
                const f = d && d.defaultView || window;
                if (f.getSelection) {
                  var p = f.getSelection();
                  const m = s.textContent.length;
                  let h = Math.min(c.start, m);
                  let g = c.end === undefined ? h : Math.min(c.end, m);
                  if (!p.extend && h > g) {
                    o = g;
                    g = h;
                    h = o;
                  }
                  const _ = ri(s, h);
                  const v = ri(s, g);
                  if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                    const y = d.createRange();
                    y.setStart(_.node, _.offset);
                    p.removeAllRanges();
                    if (h > g) {
                      p.addRange(y);
                      p.extend(v.node, v.offset);
                    } else {
                      y.setEnd(v.node, v.offset);
                      p.addRange(y);
                    }
                  }
                }
              }
            }
            d = [];
            for (p = s; p = p.parentNode;) {
              if (p.nodeType === 1) {
                d.push({
                  element: p,
                  left: p.scrollLeft,
                  top: p.scrollTop
                });
              }
            }
            if (typeof s.focus == `function`) {
              s.focus();
            }
            for (s = 0; s < d.length; s++) {
              const b = d[s];
              b.element.scrollLeft = b.left;
              b.element.scrollTop = b.top;
            }
          }
          gh = !!sp;
          sp = null;
          cp = null;
        } finally {
          G = a;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i;
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r;
        }
      }
      e.current = t;
      X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      const e = bd;
      const t = xd;
      let n = !!(t.flags & 8772);
      if (t.subtreeFlags & 8772 || n) {
        n = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        const r = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        const i = G;
        G |= 4;
        try {
          _u(e, t.alternate, t);
        } finally {
          G = i;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = r;
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = n;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      const e = Ed;
      Ed = null;
      t_unstable_requestPaint();
      const t = bd;
      let n = xd;
      const r = Sd;
      let i = Td;
      let a = (r & 335544064) === r ? 10262 : 10256;
      if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0) {
        X = 5;
      } else {
        X = 0;
        bd = null;
        xd = null;
        uf(t, t.pendingLanes);
      }
      a = t.pendingLanes;
      if (a === 0) {
        yd = null;
      }
      At(r);
      n = n.stateNode;
      if (ct && typeof ct.onCommitFiberRoot == `function`) {
        try {
          ct.onCommitFiberRoot(st, n, undefined, (n.current.flags & 128) == 128);
        } catch {}
      }
      if (i !== null) {
        n = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        a = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
        i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
        r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        try {
          var o = t.onRecoverableError;
          for (var c of i) {
            o(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = n;
          i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = a;
        }
      }
      i = Dd;
      o = Od;
      Od = null;
      if (i !== null && (Dd = null, o === null && (o = []), e !== null)) {
        for (c = 0; c < i.length; c++) {
          n = i[c](o);
          if (n !== undefined) {
            e.finished.finally(n);
          }
        }
      }
      if (Sd & 3) {
        df();
      }
      Ef(t);
      a = t.pendingLanes;
      if (r & 261930 && a & 42) {
        if (t === Ad) {
          kd++;
        } else {
          kd = 0;
          Ad = t;
        }
      } else {
        kd = 0;
        Ad = null;
      }
      Df(0, false);
    }
  }
  function uf(e, t) {
    if ((e.pooledCacheLanes &= t) === 0) {
      t = e.pooledCache;
      if (t != null) {
        e.pooledCache = null;
        Ia(t);
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
    const e = bd;
    const t = Cd;
    Cd = 0;
    let n = At(Sd);
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = n < 32 ? 32 : n;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      n = wd;
      wd = null;
      const o = bd;
      const s = Sd;
      X = 0;
      bd = null;
      xd = null;
      Sd = 0;
      if (G & 6) {
        throw Error(a(331));
      }
      const c = G;
      G |= 4;
      Xu(o.current);
      Hu(o, o.current, s, n);
      G = c;
      Df(0, false);
      if (ct && typeof ct.onPostCommitFiberRoot == `function`) {
        try {
          ct.onPostCommitFiberRoot(st, o);
        } catch {}
      }
      return true;
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
      uf(e, t);
    }
  }
  function pf(e, t, n) {
    t = Qi(n, t);
    t = Ac(e.stateNode, t, 2);
    e = xo(e, t, 2);
    if (e !== null) {
      wt(e, 2);
      Ef(e);
    }
  }
  function Z(e, t, n) {
    if (e.tag === 3) {
      pf(e, e, n);
    } else {
      while (t !== null) {
        if (t.tag === 3) {
          pf(t, e, n);
          break;
        }
        if (t.tag === 1) {
          let r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (yd === null || !yd.has(r))) {
            e = Qi(n, e);
            n = jc(2);
            r = xo(t, n, 2);
            if (r !== null) {
              Mc(n, r, t, e);
              wt(r, 2);
              Ef(r);
            }
            break;
          }
        }
        t = t.return;
      }
    }
  }
  function mf(e, cause, n) {
    let e_pingCache = e.pingCache;
    if (e_pingCache === null) {
      e_pingCache = e.pingCache = new ed();
      var i = new Set();
      e_pingCache.set(cause, i);
    } else {
      i = e_pingCache.get(cause);
      if (i === undefined) {
        i = new Set();
        e_pingCache.set(cause, i);
      }
    }
    if (!i.has(n)) {
      id = true;
      i.add(n);
      e = hf.bind(null, e, cause, n);
      cause.then(e, e);
    }
  }
  function hf(e, t, n) {
    const e_pingCache = e.pingCache;
    if (e_pingCache !== null) {
      e_pingCache.delete(t);
    }
    e.pingedLanes |= e.suspendedLanes & n;
    e.warmLanes &= ~n;
    if (K === e && (J & n) === n) {
      if (od === 4 || od === 3 && (J & 62914560) === J && t_unstable_now() - hd < 300) {
        if (G & 2) {
          ld |= n;
        } else {
          Vd(e, 0);
        }
      } else {
        ld |= n;
      }
      if (dd === J) {
        dd = 0;
      }
    }
    Ef(e);
  }
  function gf(e, t) {
    if (t === 0) {
      t = St();
    }
    e = Li(e, t);
    if (e !== null) {
      wt(e, t);
      Ef(e);
    }
  }
  function _f(e) {
    const e_memoizedState = e.memoizedState;
    let n = 0;
    if (e_memoizedState !== null) {
      n = e_memoizedState.retryLane;
    }
    gf(e, n);
  }
  function vf(e, t) {
    let n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode;
        const i = e.memoizedState;
        if (i !== null) {
          n = i.retryLane;
        }
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    if (r !== null) {
      r.delete(t);
    }
    gf(e, n);
  }
  function yf(e, t) {
    return t_unstable_scheduleCallback(e, t);
  }
  var bf = null;
  var xf = null;
  var Sf = false;
  var Cf = false;
  var wf = false;
  var Tf = 0;
  function Ef(e) {
    if (e !== xf && e.next === null) {
      if (xf === null) {
        bf = xf = e;
      } else {
        xf = xf.next = e;
      }
    }
    Cf = true;
    if (!Sf) {
      Sf = true;
      Nf();
    }
  }
  function Df(e, t) {
    if (!wf && Cf) {
      wf = true;
      do {
        var n = false;
        for (let r = bf; r !== null;) {
          if (!t) {
            if (e !== 0) {
              const i = r.pendingLanes;
              if (i === 0) var a = 0;else {
                const {
                  suspendedLanes,
                  pingedLanes
                } = r;
                a = (1 << 31 - ut(42 | e) + 1) - 1;
                a &= i & ~(suspendedLanes & ~pingedLanes);
                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
              }
              if (a !== 0) {
                n = true;
                Mf(r, a);
              }
            } else {
              a = J;
              a = vt(r, r === K ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1);
              if (!(!(a & 3) || yt(r, a))) {
                n = true;
                Mf(r, a);
              }
            }
          }
          r = r.next;
        }
      } while (n);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Sf = false;
    Cf = false;
    let e = 0;
    if (Tf !== 0 && hp()) {
      e = Tf;
    }
    const t = t_unstable_now();
    let n = null;
    for (let r = bf; r !== null;) {
      const i = r.next;
      const a = Af(r, t);
      if (a === 0) {
        r.next = null;
        if (n === null) {
          bf = i;
        } else {
          n.next = i;
        }
        if (i === null) {
          xf = n;
        }
      } else {
        n = r;
        if (e !== 0 || a & 3) {
          Cf = true;
        }
      }
      r = i;
    }
    if (!(X !== 0 && X !== 5)) {
      Df(e, false);
    }
    if (Tf !== 0) {
      Tf = 0;
    }
  }
  function Af(e, t) {
    let e_suspendedLanes = e.suspendedLanes;
    let e_pingedLanes = e.pingedLanes;
    const e_expirationTimes = e.expirationTimes;
    for (let a = e.pendingLanes & -62914561; a > 0;) {
      const o = 31 - ut(a);
      const s = 1 << o;
      const c = e_expirationTimes[o];
      if (c === -1) {
        if ((s & e_suspendedLanes) === 0 || (s & e_pingedLanes) !== 0) {
          e_expirationTimes[o] = xt(s, t);
        }
      } else if (c <= t) {
        e.expiredLanes |= s;
      }
      a &= ~s;
    }
    t = K;
    e_suspendedLanes = J;
    e_suspendedLanes = vt(e, e === t ? e_suspendedLanes : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1);
    e_pingedLanes = e.callbackNode;
    if (e_suspendedLanes === 0 || e === t && (Y === 2 || Y === 9) || e.cancelPendingCommit !== null) {
      if (e_pingedLanes !== null && e_pingedLanes !== null) {
        t_unstable_cancelCallback(e_pingedLanes);
      }
      e.callbackNode = null;
      return e.callbackPriority = 0;
    }
    if (!(e_suspendedLanes & 3) || yt(e, e_suspendedLanes)) {
      t = e_suspendedLanes & -e_suspendedLanes;
      if (t === e.callbackPriority) {
        return t;
      }
      if (e_pingedLanes !== null) {
        t_unstable_cancelCallback(e_pingedLanes);
      }
      switch (At(e_suspendedLanes)) {
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
      e_pingedLanes = jf.bind(null, e);
      e_suspendedLanes = t_unstable_scheduleCallback(e_suspendedLanes, e_pingedLanes);
      e.callbackPriority = t;
      e.callbackNode = e_suspendedLanes;
      return t;
    }
    if (e_pingedLanes !== null && e_pingedLanes !== null) {
      t_unstable_cancelCallback(e_pingedLanes);
    }
    e.callbackPriority = 2;
    e.callbackNode = null;
    return 2;
  }
  function jf(e, t) {
    if (X !== 0 && X !== 5) {
      e.callbackNode = null;
      e.callbackPriority = 0;
      return null;
    }
    const e_callbackNode = e.callbackNode;
    if (df() && e.callbackNode !== e_callbackNode) {
      return null;
    }
    let r = J;
    r = vt(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1);
    if (r === 0) {
      return null;
    }
    Fd(e, r, t);
    Af(e, t_unstable_now());
    if (e.callbackNode != null && e.callbackNode === e_callbackNode) {
      return jf.bind(null, e);
    }
    return null;
  }
  function Mf(e, t) {
    if (df()) {
      return null;
    }
    Fd(e, t, true);
  }
  function Nf() {
    bp(function () {
      if (G & 6) {
        t_unstable_scheduleCallback(t_unstable_ImmediatePriority, Of);
      } else {
        kf();
      }
    });
  }
  function Pf() {
    if (Tf === 0) {
      let e = Ha;
      if (e === 0) {
        e = mt;
        mt <<= 1;
        if (!(mt & 261888)) {
          mt = 256;
        }
      }
      Tf = e;
    }
    return Tf;
  }
  function Ff(e) {
    if (e == null || typeof e == `symbol` || typeof e == `boolean`) {
      return null;
    }
    if (typeof e == `function`) {
      return e;
    }
    return kn(e);
  }
  function If(e, t, n, r, currentTarget) {
    if (t === `submit` && n && n.stateNode === currentTarget) {
      let a = Ff((currentTarget[Ft] || null).action);
      let o = r.submitter;
      if (o) {
        t = (t = o[Ft] || null) ? Ff(t.formAction) : o.getAttribute(`formAction`);
        if (t !== null) {
          a = t;
          o = null;
        }
      }
      const s = new Zn(`action`, `action`, null, r, currentTarget);
      e.push({
        event: s,
        listeners: [{
          instance: null,
          listener: function () {
            if (r.defaultPrevented) {
              if (Tf !== 0) {
                var e = new FormData(currentTarget, o);
                nc(n, {
                  pending: true,
                  data: e,
                  method: currentTarget.method,
                  action: a
                }, null, e);
              }
            } else {
              if (typeof a == `function`) {
                s.preventDefault();
                e = new FormData(currentTarget, o);
                nc(n, {
                  pending: true,
                  data: e,
                  method: currentTarget.method,
                  action: a
                }, a, e);
              }
            }
          },
          currentTarget
        }]
      });
    }
  }
  for (var Rf of Ei) {
    O(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
  }
  O(vi, `onAnimationEnd`);
  O(yi, `onAnimationIteration`);
  O(bi, `onAnimationStart`);
  O(`dblclick`, `onDoubleClick`);
  O(`focusin`, `onFocus`);
  O(`focusout`, `onBlur`);
  O(xi, `onTransitionRun`);
  O(Si, `onTransitionStart`);
  O(Ci, `onTransitionCancel`);
  O(wi, `onTransitionEnd`);
  $t(`onMouseEnter`, [`mouseout`, `mouseover`]);
  $t(`onMouseLeave`, [`mouseout`, `mouseover`]);
  $t(`onPointerEnter`, [`pointerout`, `pointerover`]);
  $t(`onPointerLeave`, [`pointerout`, `pointerover`]);
  Qt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `));
  Qt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `));
  Qt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]);
  Qt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `));
  Qt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `));
  Qt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `);
  var Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e, t) {
    t = !!(t & 4);
    for (let r of e) {
      const i = r.event;
      r = r.listeners;
      a: {
        let a;
        if (t) {
          for (var o = r.length - 1; o >= 0; o--) {
            var s = r[o];
            var c = s.instance;
            var l = s.currentTarget;
            s = s.listener;
            if (c !== a && i.isPropagationStopped()) {
              break a;
            }
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (error) {
              Ai(error);
            }
            i.currentTarget = null;
            a = c;
          }
        } else {
          for (o = 0; o < r.length; o++) {
            s = r[o];
            c = s.instance;
            l = s.currentTarget;
            s = s.listener;
            if (c !== a && i.isPropagationStopped()) {
              break a;
            }
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (error) {
              Ai(error);
            }
            i.currentTarget = null;
            a = c;
          }
        }
      }
    }
  }
  function Q(e, t) {
    let n = t[Lt];
    if (n === undefined) {
      n = t[Lt] = new Set();
    }
    const r = e + `__bubble`;
    if (!n.has(r)) {
      Gf(t, e, 2, false);
      n.add(r);
    }
  }
  function Hf(e, t, n) {
    let r = 0;
    if (t) {
      r |= 4;
    }
    Gf(n, e, r, t);
  }
  var Uf = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf(e) {
    if (!e[Uf]) {
      e[Uf] = true;
      Xt.forEach(t => {
        if (t !== `selectionchange`) {
          if (!Bf.has(t)) {
            Hf(t, false, e);
          }
          Hf(t, true, e);
        }
      });
      const t = e.nodeType === 9 ? e : e.ownerDocument;
      if (!(t === null || t[Uf])) {
        t[Uf] = true;
        Hf(`selectionchange`, false, t);
      }
    }
  }
  function Gf(e, t, n, r) {
    switch (Ch(t)) {
      case 2:
        var passive = _h;
        break;
      case 8:
        passive = vh;
        break;
      default:
        passive = yh;
    }
    n = passive.bind(null, t, n, e);
    passive = undefined;
    if (!(!Bn || t !== `touchstart` && t !== `touchmove` && t !== `wheel`)) {
      passive = true;
    }
    if (r) {
      if (passive === undefined) {
        e.addEventListener(t, n, true);
      } else {
        e.addEventListener(t, n, {
          capture: true,
          passive
        });
      }
    } else if (passive === undefined) {
      e.addEventListener(t, n, false);
    } else {
      e.addEventListener(t, n, {
        passive
      });
    }
  }
  function Kf(e, t, n, r, i) {
    let a = r;
    if (!(t & 1) && !(t & 2) && r !== null) {
      a: while (true) {
        if (r === null) {
          return;
        }
        let o = r.tag;
        if (o === 3 || o === 4) {
          let c = r.stateNode.containerInfo;
          if (c === i) {
            break;
          }
          if (o === 4) {
            for (o = r.return; o !== null;) {
              var l = o.tag;
              if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) {
                return;
              }
              o = o.return;
            }
          }
          while (c !== null) {
            o = Wt(c);
            if (o === null) {
              return;
            }
            l = o.tag;
            if (l === 5 || l === 6 || l === 26 || l === 27) {
              a = o;
              r = o;
              continue a;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    }
    Ln(function () {
      const r = a;
      const i = Mn(n);
      const o = [];
      a: {
        var c = Ti.get(e);
        if (c !== undefined) {
          var l = Zn;
          var u = e;
          switch (e) {
            case `keypress`:
              if (Kn(n) === 0) {
                break a;
              }
            case `keydown`:
            case `keyup`:
              l = hr;
              break;
            case `focusin`:
              u = `focus`;
              l = or;
              break;
            case `focusout`:
              u = `blur`;
              l = or;
              break;
            case `beforeblur`:
            case `afterblur`:
              l = or;
              break;
            case `click`:
              if (n.button === 2) {
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
              l = ir;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              l = ar;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              l = vr;
              break;
            case vi:
            case yi:
            case bi:
              l = sr;
              break;
            case wi:
              l = yr;
              break;
            case `scroll`:
            case `scrollend`:
              l = $n;
              break;
            case `wheel`:
              l = br;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              l = cr;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              l = gr;
              break;
            case `submit`:
              l = _r;
              break;
            case `toggle`:
            case `beforetoggle`:
              l = xr;
          }
          var d = !!(t & 4);
          var f = !d && (e === `scroll` || e === `scrollend`);
          var p = d ? c === null ? null : c + `Capture` : c;
          d = [];
          var h;
          for (var m = r; m !== null;) {
            var g = m;
            h = g.stateNode;
            g = g.tag;
            if (!(g !== 5 && g !== 26 && g !== 27 || h === null || p === null)) {
              g = Rn(m, p);
              if (g != null) {
                d.push(qf(m, g, h));
              }
            }
            if (f) {
              break;
            }
            m = m.return;
          }
          if (d.length > 0) {
            c = new l(c, u, null, n, i);
            o.push({
              event: c,
              listeners: d
            });
          }
        }
      }
      if (!(t & 7)) {
        a: {
          l = e === `mouseover` || e === `pointerover`;
          c = e === `mouseout` || e === `pointerout`;
          if (l && n !== jn && (u = n.relatedTarget || n.fromElement) && (Wt(u) || u[It])) {
            break a;
          }
          if (c || l) {
            u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window;
            if (c) {
              l = n.relatedTarget || n.toElement;
              c = r;
              l = l ? Wt(l) : null;
              if (l !== null && (f = s(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6)) {
                l = null;
              }
            } else {
              c = null;
              l = r;
            }
            if (c !== l) {
              d = ir;
              g = `onMouseLeave`;
              p = `onMouseEnter`;
              m = `mouse`;
              if (e === `pointerout` || e === `pointerover`) {
                d = gr;
                g = `onPointerLeave`;
                p = `onPointerEnter`;
                m = `pointer`;
              }
              f = c == null ? u : Kt(c);
              h = l == null ? u : Kt(l);
              u = new d(g, m + `leave`, c, n, i);
              u.target = f;
              u.relatedTarget = h;
              g = null;
              if (Wt(i) === r) {
                d = new d(p, m + `enter`, l, n, i);
                d.target = h;
                d.relatedTarget = f;
                g = d;
              }
              f = g;
              d = c && l ? ie(c, l, Yf) : null;
              if (c !== null) {
                Xf(o, u, c, d, false);
              }
              if (l !== null && f !== null) {
                Xf(o, f, l, d, true);
              }
            }
          }
        }
        a: {
          c = r ? Kt(r) : window;
          l = c.nodeName && c.nodeName.toLowerCase();
          if (l === `select` || l === `input` && c.type === `file`) var _ = Vr;else if (Fr(c)) {
            if (Hr) {
              _ = Zr;
            } else {
              _ = Yr;
              var v = Jr;
            }
          } else {
            l = c.nodeName;
            if (!l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio`) {
              if (r && En(r.elementType)) {
                _ = Vr;
              }
            } else {
              _ = Xr;
            }
          }
          if (_ &&= _(e, r)) {
            Ir(o, _, n, i);
            break a;
          }
          if (v) {
            v(e, c, r);
          }
        }
        v = r ? Kt(r) : window;
        switch (e) {
          case `focusin`:
            if (Fr(v) || v.contentEditable === `true`) {
              ci = v;
              li = r;
              ui = null;
            }
            break;
          case `focusout`:
            ci = null;
            li = null;
            ui = null;
            break;
          case `mousedown`:
            di = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            di = false;
            fi(o, n, i);
            break;
          case `selectionchange`:
            if (si) {
              break;
            }
          case `keydown`:
          case `keyup`:
            fi(o, n, i);
        }
        let y;
        if (Cr) {
          b: {
            switch (e) {
              case `compositionstart`:
                var b = `onCompositionStart`;
                break b;
              case `compositionend`:
                b = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b = `onCompositionUpdate`;
                break b;
            }
            b = undefined;
          }
        } else {
          if (jr) {
            if (kr(e, n)) {
              b = `onCompositionEnd`;
            }
          } else if (e === `keydown` && n.keyCode === 229) {
            b = `onCompositionStart`;
          }
        }
        if (b) {
          if (Er && n.locale !== `ko`) {
            if (jr || b !== `onCompositionStart`) {
              if (b === `onCompositionEnd` && jr) {
                y = Gn();
              }
            } else {
              Hn = i;
              Un = `value` in Hn ? Hn.value : Hn.textContent;
              jr = true;
            }
          }
          v = Jf(r, b);
          if (v.length > 0) {
            b = new lr(b, e, null, n, i);
            o.push({
              event: b,
              listeners: v
            });
            if (y) {
              b.data = y;
            } else {
              y = Ar(n);
              if (y !== null) {
                b.data = y;
              }
            }
          }
        }
        if (y = Tr ? Mr(e, n) : Nr(e, n)) {
          b = Jf(r, `onBeforeInput`);
          if (b.length > 0) {
            v = new lr(`onBeforeInput`, `beforeinput`, null, n, i);
            o.push({
              event: v,
              listeners: b
            });
            v.data = y;
          }
        }
        If(o, e, r, n, i);
      }
      Vf(o, t);
    });
  }
  function qf(e, listener, currentTarget) {
    return {
      instance: e,
      listener,
      currentTarget
    };
  }
  function Jf(e, t) {
    const n = t + `Capture`;
    const r = [];
    while (e !== null) {
      let i = e;
      const a = i.stateNode;
      i = i.tag;
      if (!(i !== 5 && i !== 26 && i !== 27 || a === null)) {
        i = Rn(e, n);
        if (i != null) {
          r.unshift(qf(e, i, a));
        }
        i = Rn(e, t);
        if (i != null) {
          r.push(qf(e, i, a));
        }
      }
      if (e.tag === 3) {
        return r;
      }
      e = e.return;
    }
    return [];
  }
  function Yf(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e.return;
    } while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Xf(e, t, n, r, i) {
    const t__reactName = t._reactName;
    const o = [];
    while (n !== null && n !== r) {
      let s = n;
      let c = s.alternate;
      let l = s.stateNode;
      s = s.tag;
      if (c !== null && c === r) {
        break;
      }
      if (!(s !== 5 && s !== 26 && s !== 27 || l === null)) {
        c = l;
        if (i) {
          l = Rn(n, t__reactName);
          if (l != null) {
            o.unshift(qf(n, l, c));
          }
        } else if (!i) {
          l = Rn(n, t__reactName);
          if (l != null) {
            o.push(qf(n, l, c));
          }
        }
      }
      n = n.return;
    }
    if (o.length !== 0) {
      e.push({
        event: t,
        listeners: o
      });
    }
  }
  var Zf = /\r\n?/g;
  var Qf = /\u0000|\uFFFD/g;
  function $f(e) {
    return (typeof e == `string` ? e : `` + e).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e, t) {
    t = $f(t);
    return $f(e) === t;
  }
  function $(e, t, n, r, i, o) {
    switch (n) {
      case `children`:
        if (typeof r == `string`) {
          if (!(t === `body` || t === `textarea` && r === ``)) {
            Sn(e, r);
          }
        } else if (typeof r == `number` || typeof r == `bigint`) {
          if (t !== `body`) {
            Sn(e, `` + r);
          }
        } else {
          return;
        }
        break;
      case `className`:
        sn(e, `class`, r);
        break;
      case `tabIndex`:
        sn(e, `tabindex`, r);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        sn(e, n, r);
        break;
      case `style`:
        Tn(e, r, o);
        return;
      case `data`:
        if (t !== `object`) {
          sn(e, `data`, r);
          break;
        }
      case `src`:
      case `href`:
        if (r === `` && (t !== `a` || n !== `href`)) {
          e.removeAttribute(n);
          break;
        }
        if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
          e.removeAttribute(n);
          break;
        }
        r = kn(r);
        e.setAttribute(n, r);
        break;
      case `action`:
      case `formAction`:
        if (typeof r == `function`) {
          e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o == `function`) {
          if (n === `formAction`) {
            if (t !== `input`) {
              $(e, t, `name`, i.name, i, null);
            }
            $(e, t, `formEncType`, i.formEncType, i, null);
            $(e, t, `formMethod`, i.formMethod, i, null);
            $(e, t, `formTarget`, i.formTarget, i, null);
          } else {
            $(e, t, `encType`, i.encType, i, null);
            $(e, t, `method`, i.method, i, null);
            $(e, t, `target`, i.target, i, null);
          }
        }
        if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
          e.removeAttribute(n);
          break;
        }
        r = kn(r);
        e.setAttribute(n, r);
        break;
      case `onClick`:
        if (r != null) {
          e.onclick = unsuspend;
        }
        return;
      case `onScroll`:
        if (r != null) {
          Q(`scroll`, e);
        }
        return;
      case `onScrollEnd`:
        if (r != null) {
          Q(`scrollend`, e);
        }
        return;
      case `dangerouslySetInnerHTML`:
        if (r != null) {
          if (typeof r != `object` || !(`__html` in r)) {
            throw Error(a(61));
          }
          n = r.__html;
          if (n != null) {
            if (i.children != null) {
              throw Error(a(60));
            }
            if (o?.__html !== n) {
              e.innerHTML = n;
            }
          }
        }
        break;
      case `multiple`:
        e.multiple = r && typeof r != `function` && typeof r != `symbol`;
        break;
      case `muted`:
        e.muted = r && typeof r != `function` && typeof r != `symbol`;
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
        if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
          e.removeAttribute(`xlink:href`);
          break;
        }
        n = kn(r);
        e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        if (r != null && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
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
        if (r && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, ``);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `capture`:
      case `download`:
        if (r === true) {
          e.setAttribute(n, ``);
        } else if (r !== false && r != null && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        if (r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && r >= 1) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `rowSpan`:
      case `start`:
        if (r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)) {
          e.removeAttribute(n);
        } else {
          e.setAttribute(n, r);
        }
        break;
      case `popover`:
        Q(`beforetoggle`, e);
        Q(`toggle`, e);
        on(e, `popover`, r);
        break;
      case `xlinkActuate`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
        break;
      case `xlinkArcrole`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
        break;
      case `xlinkRole`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
        break;
      case `xlinkShow`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
        break;
      case `xlinkTitle`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
        break;
      case `xlinkType`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
        break;
      case `xmlBase`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
        break;
      case `xmlLang`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
        break;
      case `xmlSpace`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
        break;
      case `is`:
        on(e, `is`, r);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(n.length > 2) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
          n = Dn.get(n) || n;
          on(e, n, r);
        } else {
          return;
        }
    }
    D = true;
  }
  function tp(e, t, n, r, i, o) {
    switch (n) {
      case `style`:
        Tn(e, r, o);
        return;
      case `dangerouslySetInnerHTML`:
        if (r != null) {
          if (typeof r != `object` || !(`__html` in r)) {
            throw Error(a(61));
          }
          n = r.__html;
          if (n != null) {
            if (i.children != null) {
              throw Error(a(60));
            }
            if (o?.__html !== n) {
              e.innerHTML = n;
            }
          }
        }
        break;
      case `children`:
        if (typeof r == `string`) {
          Sn(e, r);
        } else if (typeof r == `number` || typeof r == `bigint`) {
          Sn(e, `` + r);
        } else {
          return;
        }
        break;
      case `onScroll`:
        if (r != null) {
          Q(`scroll`, e);
        }
        return;
      case `onScrollEnd`:
        if (r != null) {
          Q(`scrollend`, e);
        }
        return;
      case `onClick`:
        if (r != null) {
          e.onclick = unsuspend;
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
        if (!Zt.hasOwnProperty(n)) {
          a: {
            if (n[0] === `o` && n[1] === `n` && (i = n.endsWith(`Capture`), o = n.slice(2, i ? n.length - 7 : undefined), t = e[Ft] || null, t = t == null ? null : t[n], typeof t == `function` && e.removeEventListener(o, t, i), typeof r == `function`)) {
              if (typeof t != `function` && t !== null) {
                if (n in e) {
                  e[n] = null;
                } else if (e.hasAttribute(n)) {
                  e.removeAttribute(n);
                }
              }
              e.addEventListener(o, r, i);
              break a;
            }
            D = true;
            if (n in e) {
              e[n] = r;
            } else if (r === true) {
              e.setAttribute(n, ``);
            } else {
              on(e, n, r);
            }
          }
        }
        return;
    }
    D = true;
  }
  function np(e, t, n) {
    switch (t) {
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
        Q(`error`, e);
        Q(`load`, e);
        var r = false;
        var i = false;
        var o;
        for (o in n) {
          if (n.hasOwnProperty(o)) {
            var s = n[o];
            if (s != null) {
              switch (o) {
                case `src`:
                  r = true;
                  break;
                case `srcSet`:
                  i = true;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  $(e, t, o, s, n, null);
              }
            }
          }
        }
        if (i) {
          $(e, t, `srcSet`, n.srcSet, n, null);
        }
        if (r) {
          $(e, t, `src`, n.src, n, null);
        }
        return;
      case `input`:
        Q(`invalid`, e);
        var c = o = s = i = null;
        var l = null;
        var u = null;
        for (r in n) {
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null) {
              switch (r) {
                case `name`:
                  i = d;
                  break;
                case `type`:
                  s = d;
                  break;
                case `checked`:
                  l = d;
                  break;
                case `defaultChecked`:
                  u = d;
                  break;
                case `value`:
                  o = d;
                  break;
                case `defaultValue`:
                  c = d;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (d != null) {
                    throw Error(a(137, t));
                  }
                  break;
                default:
                  $(e, t, r, d, n, null);
              }
            }
          }
        }
        _n(e, o, c, l, u, s, i, false);
        return;
      case `select`:
        Q(`invalid`, e);
        o = null;
        s = null;
        r = null;
        for (i in n) {
          if (n.hasOwnProperty(i) && (c = n[i], c != null)) {
            switch (i) {
              case `value`:
                o = c;
                break;
              case `defaultValue`:
                s = c;
                break;
              case `multiple`:
                r = c;
              default:
                $(e, t, i, c, n, null);
            }
          }
        }
        t = o;
        n = s;
        e.multiple = !!r;
        if (t == null) {
          if (n != null) {
            yn(e, !!r, n, true);
          }
        } else {
          yn(e, !!r, t, false);
        }
        return;
      case `textarea`:
        Q(`invalid`, e);
        r = null;
        i = null;
        o = null;
        for (s in n) {
          if (n.hasOwnProperty(s) && (c = n[s], c != null)) {
            switch (s) {
              case `value`:
                r = c;
                break;
              case `defaultValue`:
                i = c;
                break;
              case `children`:
                o = c;
                break;
              case `dangerouslySetInnerHTML`:
                if (c != null) {
                  throw Error(a(91));
                }
                break;
              default:
                $(e, t, s, c, n, null);
            }
          }
        }
        xn(e, r, i, o);
        return;
      case `option`:
        for (l in n) {
          if (n.hasOwnProperty(l) && (r = n[l], r != null)) {
            switch (l) {
              case `selected`:
                e.selected = r && typeof r != `function` && typeof r != `symbol`;
                break;
              default:
                $(e, t, l, r, n, null);
            }
          }
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e);
        Q(`toggle`, e);
        Q(`cancel`, e);
        Q(`close`, e);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e);
        break;
      case `video`:
      case `audio`:
        for (r = 0; r < zf.length; r++) {
          Q(zf[r], e);
        }
        break;
      case `image`:
        Q(`error`, e);
        Q(`load`, e);
        break;
      case `details`:
        Q(`toggle`, e);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e);
        Q(`load`, e);
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
        for (u in n) {
          if (n.hasOwnProperty(u) && (r = n[u], r != null)) {
            switch (u) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(a(137, t));
              default:
                $(e, t, u, r, n, null);
            }
          }
        }
        return;
      default:
        if (En(t)) {
          for (d in n) {
            if (n.hasOwnProperty(d)) {
              r = n[d];
              if (r !== undefined) {
                tp(e, t, d, r, n, undefined);
              }
            }
          }
          return;
        }
    }
    for (c in n) {
      if (n.hasOwnProperty(c)) {
        r = n[c];
        if (r != null) {
          $(e, t, c, r, n, null);
        }
      }
    }
  }
  var rp = {};
  function ip(e, t, n, r) {
    switch (t) {
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
        var i = null;
        var o = null;
        var s = null;
        var c = null;
        var l = null;
        var u = null;
        var d = null;
        for (m in n) {
          var f = n[m];
          if (n.hasOwnProperty(m) && f != null) {
            switch (m) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l = f;
              default:
                if (!r.hasOwnProperty(m)) {
                  $(e, t, m, null, r, f);
                }
            }
          }
        }
        for (var p in r) {
          var m = r[p];
          f = n[p];
          if (r.hasOwnProperty(p) && (m != null || f != null)) {
            switch (p) {
              case `type`:
                if (m !== f) {
                  D = true;
                }
                o = m;
                break;
              case `name`:
                if (m !== f) {
                  D = true;
                }
                i = m;
                break;
              case `checked`:
                if (m !== f) {
                  D = true;
                }
                u = m;
                break;
              case `defaultChecked`:
                if (m !== f) {
                  D = true;
                }
                d = m;
                break;
              case `value`:
                if (m !== f) {
                  D = true;
                }
                s = m;
                break;
              case `defaultValue`:
                if (m !== f) {
                  D = true;
                }
                c = m;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m != null) {
                  throw Error(a(137, t));
                }
                break;
              default:
                if (m !== f) {
                  $(e, t, p, m, r, f);
                }
            }
          }
        }
        gn(e, s, c, l, u, d, o, i);
        return;
      case `select`:
        p = null;
        c = null;
        s = null;
        m = null;
        for (o in n) {
          l = n[o];
          if (n.hasOwnProperty(o) && l != null) {
            switch (o) {
              case `value`:
                break;
              case `multiple`:
                m = l;
              default:
                if (!r.hasOwnProperty(o)) {
                  $(e, t, o, null, r, l);
                }
            }
          }
        }
        for (i in r) {
          o = r[i];
          l = n[i];
          if (r.hasOwnProperty(i) && (o != null || l != null)) {
            switch (i) {
              case `value`:
                if (o !== l) {
                  D = true;
                }
                p = o;
                break;
              case `defaultValue`:
                if (o !== l) {
                  D = true;
                }
                c = o;
                break;
              case `multiple`:
                if (o !== l) {
                  D = true;
                }
                s = o;
              default:
                if (o !== l) {
                  $(e, t, i, o, r, l);
                }
            }
          }
        }
        t = c;
        n = s;
        r = m;
        if (p == null) {
          if (!!r != !!n) {
            if (t == null) {
              yn(e, !!n, n ? [] : ``, false);
            } else {
              yn(e, !!n, t, true);
            }
          }
        } else {
          yn(e, !!n, p, false);
        }
        return;
      case `textarea`:
        p = null;
        m = null;
        for (c in n) {
          i = n[c];
          if (n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) {
            switch (c) {
              case `value`:
                break;
              case `children`:
                break;
              default:
                $(e, t, c, null, r, i);
            }
          }
        }
        for (s in r) {
          i = r[s];
          o = n[s];
          if (r.hasOwnProperty(s) && (i != null || o != null)) {
            switch (s) {
              case `value`:
                if (i !== o) {
                  D = true;
                }
                p = i;
                break;
              case `defaultValue`:
                if (i !== o) {
                  D = true;
                }
                m = i;
                break;
              case `children`:
                break;
              case `dangerouslySetInnerHTML`:
                if (i != null) {
                  throw Error(a(91));
                }
                break;
              default:
                if (i !== o) {
                  $(e, t, s, i, r, o);
                }
            }
          }
        }
        bn(e, p, m);
        return;
      case `option`:
        for (const h in n) {
          p = n[h];
          if (n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) {
            switch (h) {
              case `selected`:
                e.selected = false;
                break;
              default:
                $(e, t, h, null, r, p);
            }
          }
        }
        for (l in r) {
          p = r[l];
          m = n[l];
          if (r.hasOwnProperty(l) && p !== m && (p != null || m != null)) {
            switch (l) {
              case `selected`:
                if (p !== m) {
                  D = true;
                }
                e.selected = p && typeof p != `function` && typeof p != `symbol`;
                break;
              default:
                $(e, t, l, p, r, m);
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
        for (const g in n) {
          p = n[g];
          if (n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g)) {
            $(e, t, g, null, r, p);
          }
        }
        for (u in r) {
          p = r[u];
          m = n[u];
          if (r.hasOwnProperty(u) && p !== m && (p != null || m != null)) {
            switch (u) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (p != null) {
                  throw Error(a(137, t));
                }
                break;
              default:
                $(e, t, u, p, r, m);
            }
          }
        }
        return;
      default:
        if (En(t)) {
          for (const _ in n) {
            p = n[_];
            if (n.hasOwnProperty(_) && p !== undefined && !r.hasOwnProperty(_)) {
              tp(e, t, _, undefined, r, p);
            }
          }
          for (d in r) {
            p = r[d];
            m = n[d];
            if (!(!r.hasOwnProperty(d) || p === m || p === undefined && m === undefined)) {
              tp(e, t, d, p, r, m);
            }
          }
          return;
        }
    }
    for (const v in n) {
      p = n[v];
      if (n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v)) {
        $(e, t, v, null, r, p);
      }
    }
    for (f in r) {
      p = r[f];
      m = n[f];
      if (!(!r.hasOwnProperty(f) || p === m || p == null && m == null)) {
        $(e, t, f, p, r, m);
      }
    }
  }
  function ap(e) {
    switch (e) {
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
      var e = 0;
      let t = 0;
      for (let n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
        const i = n[r];
        const a = i.transferSize;
        let o = i.initiatorType;
        let s = i.duration;
        if (a && s && ap(o)) {
          o = 0;
          s = i.responseEnd;
          for (r += 1; r < n.length; r++) {
            let c = n[r];
            const l = c.startTime;
            if (l > s) {
              break;
            }
            const {
              transferSize,
              initiatorType
            } = c;
            if (transferSize && ap(initiatorType)) {
              c = c.responseEnd;
              o += transferSize * (c < s ? 1 : (s - l) / (c - l));
            }
          }
          --r;
          t += 8 * (a + o) / (i.duration / 1000);
          e++;
          if (e > 10) {
            break;
          }
        }
      }
      if (e > 0) {
        return t / e / 1000000;
      }
    }
    if (navigator.connection && (e = navigator.connection.downlink, typeof e == `number`)) {
      return e;
    }
    return 5;
  }
  var sp = null;
  var cp = null;
  function lp(e) {
    if (e.nodeType === 9) {
      return e;
    }
    return e.ownerDocument;
  }
  function up(e) {
    switch (e) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e, t) {
    if (e === 0) {
      switch (t) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
    }
    if (e === 1 && t === `foreignObject`) {
      return 0;
    }
    return e;
  }
  function fp(type, t, n, r) {
    n = lp(n).createElement(type);
    n[Pt] = r;
    n[Ft] = t;
    np(n, type, t);
    Jt(n);
    return n;
  }
  function pp(e, t) {
    return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
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
  var gp = typeof setTimeout == `function` ? setTimeout : undefined;
  var _p = typeof clearTimeout == `function` ? clearTimeout : undefined;
  var vp = typeof Promise == `function` ? Promise : undefined;
  var yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp;
  var bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === undefined ? gp : e => vp.resolve(null).then(e).catch(xp);
  function xp(e) {
    setTimeout(() => {
      throw e;
    });
  }
  function Sp(type) {
    return type === `head`;
  }
  function Cp(e, stateNode) {
    let n = stateNode;
    let r = 0;
    do {
      const i = n.nextSibling;
      e.removeChild(n);
      if (i && i.nodeType === 8) {
        n = i.data;
        if (n === `/$` || n === `/&`) {
          if (r === 0) {
            e.removeChild(i);
            Hh(stateNode);
            return;
          }
          r--;
        } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) {
          r++;
        } else if (n === `html`) {
          _m(e.ownerDocument.documentElement);
        } else if (n === `head`) {
          n = e.ownerDocument.head;
          _m(n);
          for (let a = n.firstChild; a;) {
            const {
              nextSibling,
              nodeName
            } = a;
            if (!(a[Vt] || nodeName === `SCRIPT` || nodeName === `STYLE` || nodeName === `LINK` && a.rel.toLowerCase() === `stylesheet`)) {
              n.removeChild(a);
            }
            a = nextSibling;
          }
        } else {
          if (n === `body`) {
            _m(e.ownerDocument.body);
          }
        }
      }
      n = i;
    } while (n);
    Hh(stateNode);
  }
  function wp(e, t) {
    let n = e;
    e = 0;
    do {
      const r = n.nextSibling;
      if (n.nodeType === 1) {
        if (t) {
          n._stashedDisplay = n.style.display;
          n.style.display = `none`;
        } else {
          n.style.display = n._stashedDisplay || ``;
          if (n.getAttribute(`style`) === ``) {
            n.removeAttribute(`style`);
          }
        }
      } else if (n.nodeType === 3) {
        if (t) {
          n._stashedText = n.nodeValue;
          n.nodeValue = ``;
        } else {
          n.nodeValue = n._stashedText || ``;
        }
      }
      if (r && r.nodeType === 8) {
        n = r.data;
        if (n === `/$`) {
          if (e === 0) {
            break;
          }
          e--;
        } else {
          if (!(n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`)) {
            e++;
          }
        }
      }
      n = r;
    } while (n);
  }
  function Tp(e, t, n) {
    t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``);
    e.style.viewTransitionName = t;
    if (n != null) {
      e.style.viewTransitionClass = n;
    }
    n = getComputedStyle(e);
    if (n.display === `inline`) {
      t = e.getClientRects();
      if (t.length === 1) var r = 1;else {
        for (let i = r = 0; i < t.length; i++) {
          const a = t[i];
          if (a.width > 0 && a.height > 0) {
            r++;
          }
        }
      }
      if (r === 1) {
        e = e.style;
        e.display = t.length === 1 ? `inline-block` : `block`;
        e.marginTop = `-` + n.paddingTop;
        e.marginBottom = `-` + n.paddingBottom;
      }
    }
  }
  function Ep(e, t) {
    e = e.style;
    t = t.style;
    let n = t == null ? null : t.hasOwnProperty(`viewTransitionName`) ? t.viewTransitionName : t.hasOwnProperty(`view-transition-name`) ? t[`view-transition-name`] : null;
    e.viewTransitionName = n == null || typeof n == `boolean` ? `` : (`` + n).trim();
    n = t == null ? null : t.hasOwnProperty(`viewTransitionClass`) ? t.viewTransitionClass : t.hasOwnProperty(`view-transition-class`) ? t[`view-transition-class`] : null;
    e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : (`` + n).trim();
    if (e.display === `inline-block`) {
      if (t == null) {
        e.display = e.margin = ``;
      } else {
        n = t.display;
        e.display = n == null || typeof n == `boolean` ? `` : n;
        n = t.margin;
        if (n == null) {
          n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`];
          e.marginTop = n == null || typeof n == `boolean` ? `` : n;
          t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`];
          e.marginBottom = t == null || typeof t == `boolean` ? `` : t;
        } else {
          e.margin = n;
        }
      }
    }
  }
  function Dp(rect, t, n) {
    n = n.ownerDocument.defaultView;
    return {
      rect,
      abs: t.position === `absolute` || t.position === `fixed`,
      clip: t.clipPath !== `none` || t.overflow !== `visible` || t.filter !== `none` || t.mask !== `none` || t.mask !== `none` || t.borderRadius !== `0px`,
      view: rect.bottom >= 0 && rect.right >= 0 && rect.top <= n.innerHeight && rect.left <= n.innerWidth
    };
  }
  function Op(e) {
    return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
  }
  function kp(e) {
    let t = e.getBoundingClientRect();
    t = new DOMRect(t.x + 20000, t.y + 20000, t.width, t.height);
    const n = getComputedStyle(e);
    return Dp(t, n, e);
  }
  function Ap(e) {
    return e.documentElement.clientHeight;
  }
  function jp(e) {
    this.addEventListener(`load`, e);
    this.addEventListener(`error`, e);
  }
  function Mp(e, containerInfo, types, r, i, a, o, s, c) {
    const l = containerInfo.nodeType === 9 ? containerInfo : containerInfo.ownerDocument;
    try {
      const u = l.startViewTransition({
        update: function () {
          let l_defaultView = l.defaultView;
          const n = l_defaultView.navigation && l_defaultView.navigation.transition;
          let status = l.fonts.status;
          r();
          const s = [];
          if (status === `loaded`) {
            Ap(l);
            if (l.fonts.status === `loading`) {
              s.push(l.fonts.ready);
            }
          }
          status = s.length;
          if (e !== null) {
            for (let c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
              let f = c[d];
              if (!f.complete) {
                const p = f.getBoundingClientRect();
                if (p.bottom > 0 && p.right > 0 && p.top < l_defaultView.innerHeight && p.left < l_defaultView.innerWidth) {
                  u += Xm(f);
                  if (u > $m) {
                    s.length = status;
                    break;
                  }
                  f = new Promise(jp.bind(f));
                  s.push(f);
                }
              }
            }
          }
          if (s.length > 0) {
            l_defaultView = Promise.race([Promise.all(s), new Promise(resolve => setTimeout(resolve, 500))]).then(i, i);
            return (n ? Promise.allSettled([n.finished, l_defaultView]) : l_defaultView).then(a, a);
          }
          i();
          if (n) {
            return n.finished.then(a, a);
          }
          a();
        },
        types
      });
      l.__reactViewTransition = u;
      const d = [];
      u.ready.then(() => {
        for (let e = l.documentElement.getAnimations({
            subtree: true
          }), t = 0; t < e.length; t++) {
          let n = e[t];
          const r = n.effect;
          let i = r.pseudoElement;
          if (i != null && i.startsWith(`::view-transition`)) {
            d.push(n);
            n = r.getKeyframes();
            let a = i = undefined;
            let s = true;
            for (const u of n) {
              let f = u.width;
              if (i === undefined) {
                i = f;
              } else if (i !== f) {
                s = false;
                break;
              }
              f = u.height;
              if (a === undefined) {
                a = f;
              } else if (a !== f) {
                s = false;
                break;
              }
              delete u.width;
              delete u.height;
              if (u.transform === `none`) {
                delete u.transform;
              }
            }
            if (s && i !== undefined && a !== undefined && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a)) {
              s = n[0];
              s.width = i;
              s.height = a;
              s = n[n.length - 1];
              s.width = i;
              s.height = a;
              r.setKeyframes(n);
            }
          }
        }
        o();
      }, e => {
        if (l.__reactViewTransition === u) {
          l.__reactViewTransition = null;
        }
        try {
          if (typeof e == `object` && e) {
            switch (e.name) {
              case `InvalidStateError`:
                if (e.message === `View transition was skipped because document visibility state is hidden.` || e.message === `Skipping view transition because document visibility state has become hidden.` || e.message === `Skipping view transition because viewport size changed.` || e.message === `Transition was aborted because of invalid state`) {
                  e = null;
                }
            }
          }
          if (e !== null) {
            c(e);
          }
        } finally {
          r();
          i();
          o();
        }
      });
      u.finished.finally(() => {
        for (let e = 0; e < d.length; e++) {
          d[e].cancel();
        }
        if (l.__reactViewTransition === u) {
          l.__reactViewTransition = null;
        }
        s();
      });
      return u;
    } catch {
      r();
      i();
      o();
      return null;
    }
  }
  class Np {
    constructor(e, t) {
      this._scope = document.documentElement;
      this._selector = `::view-transition-` + e + `(` + t + `)`;
    }
    animate(e, duration) {
      duration = typeof duration == `number` ? {
        duration
      } : Object_assign({}, duration);
      duration.pseudoElement = this._selector;
      return this._scope.animate(e, duration);
    }
    getAnimations() {
      const _scope = this._scope;
      const _selector = this._selector;
      for (var n = _scope.getAnimations({
          subtree: true
        }), r = [], i = 0; i < n.length; i++) {
        const a = n[i].effect;
        if (a !== null && a.target === _scope && a.pseudoElement === _selector) {
          r.push(n[i]);
        }
      }
      return r;
    }
    getComputedStyle() {
      return getComputedStyle(this._scope, this._selector);
    }
  }
  function Pp(e) {
    return {
      name: e,
      group: new Np(`group`, e),
      imagePair: new Np(`image-pair`, e),
      old: new Np(`old`, e),
      new: new Np(`new`, e)
    };
  }
  class Fp {
    constructor(e) {
      this._fragmentFiber = e;
      this._observers = this._eventListeners = null;
    }
    addEventListener(e, listener, optionsOrUseCapture) {
      let r = null;
      let cleanup = null;
      if (!(optionsOrUseCapture != null && typeof optionsOrUseCapture != `boolean` && (r = optionsOrUseCapture.signal || null, r !== null && r.aborted))) {
        if (this._eventListeners === null) {
          this._eventListeners = [];
        }
        const a = this._eventListeners;
        if (Bp(a, e, listener, optionsOrUseCapture) === -1) {
          const o = this;
          let attachedListener = listener;
          if (optionsOrUseCapture != null && typeof optionsOrUseCapture != `boolean` && optionsOrUseCapture.once === true) {
            attachedListener = function (r) {
              o.removeEventListener(e, listener, optionsOrUseCapture);
              if (typeof listener == `function`) {
                listener.call(this, r);
              } else {
                listener.handleEvent(r);
              }
            };
          }
          if (r !== null) {
            cleanup = o.removeEventListener.bind(o, e, listener, optionsOrUseCapture);
            r.addEventListener(`abort`, cleanup, {
              once: true
            });
            cleanup = r.removeEventListener.bind(r, `abort`, cleanup);
          }
          r = Rp(optionsOrUseCapture);
          a.push({
            type: e,
            listener,
            optionsOrUseCapture,
            attachedListener,
            cleanup
          });
          p(this._fragmentFiber.child, false, Ip, e, attachedListener, r);
        }
        this._eventListeners = a;
      }
    }
    removeEventListener(e, t, n) {
      const _eventListeners = this._eventListeners;
      if (_eventListeners !== null && (t = Bp(_eventListeners, e, t, n), t !== -1)) {
        let i = _eventListeners[t];
        n = i.attachedListener;
        const a = i.cleanup;
        i = Rp(i.optionsOrUseCapture);
        p(this._fragmentFiber.child, false, Lp, e, n, i);
        _eventListeners.splice(t, 1);
        if (a !== null) {
          a();
        }
      }
    }
    dispatchEvent(e) {
      let t = m(this._fragmentFiber);
      if (t === null) {
        return true;
      }
      t = b(t);
      const _eventListeners = this._eventListeners;
      if (_eventListeners !== null && _eventListeners.length > 0 || !e.bubbles) {
        const r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (_eventListeners) {
          for (var i = 0; i < _eventListeners.length; i++) {
            var a = _eventListeners[i];
            r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
          }
        }
        t.appendChild(r);
        e = r.dispatchEvent(e);
        if (_eventListeners) {
          for (i = 0; i < _eventListeners.length; i++) {
            a = _eventListeners[i];
            r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
          }
        }
        t.removeChild(r);
        return e;
      }
      return t.dispatchEvent(e);
    }
    focus(e) {
      p(this._fragmentFiber.child, true, Vp, e, undefined, undefined);
    }
    focusLast(e) {
      const t = [];
      p(this._fragmentFiber.child, true, Hp, t, undefined, undefined);
      for (let n = t.length - 1; n >= 0 && !Vp(t[n], e); n--);
    }
    blur() {
      let e = m(this._fragmentFiber);
      if (e !== null) {
        e = b(e);
        e = lp(e).activeElement;
        if (e !== null) {
          p(this._fragmentFiber.child, false, Up, e, undefined, undefined);
        }
      }
    }
    observeUsing(e) {
      if (this._observers === null) {
        this._observers = new Set();
      }
      this._observers.add(e);
      p(this._fragmentFiber.child, false, Wp, e, undefined, undefined);
    }
    unobserveUsing(e) {
      let _observers = this._observers;
      if (_observers !== null && _observers.has(e)) {
        _observers.delete(e);
        p(this._fragmentFiber.child, false, Gp, e, undefined, undefined);
        for (let n = _observers = 0; n < Kp.length; n++) {
          const r = Kp[n];
          if (r.fragmentInstance === this && r.observer === e) {
            e.unobserve(r.instance);
          } else {
            Kp[_observers++] = r;
          }
        }
        Kp.length = _observers;
      }
    }
    getClientRects() {
      const e = [];
      p(this._fragmentFiber.child, false, Yp, e, undefined, undefined);
      return e;
    }
    getRootNode(e) {
      const t = m(this._fragmentFiber);
      if (t === null) {
        return this;
      }
      return b(t).getRootNode(e);
    }
    compareDocumentPosition(e) {
      let t = m(this._fragmentFiber);
      if (t === null) {
        return Node.DOCUMENT_POSITION_DISCONNECTED;
      }
      let n = [];
      p(this._fragmentFiber.child, false, Hp, n, undefined, undefined);
      let r = b(t);
      if (n.length === 0) {
        n = r;
        if (g(this._fragmentFiber)) {
          a: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break a;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) {
                break;
              }
              t = t.return;
            }
            t = null;
          }
          if (t != null) {
            n = t;
          }
        }
        t = this._fragmentFiber;
        var i = r = n.compareDocumentPosition(e);
        if (n === e) {
          i = Node.DOCUMENT_POSITION_CONTAINS;
        } else if (r & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          n = v(t)[1];
          if (n === null) {
            i = Node.DOCUMENT_POSITION_PRECEDING;
          } else {
            e = b(n).compareDocumentPosition(e);
            i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING;
          }
        }
        return i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      }
      t = b(n[0]);
      i = b(n[n.length - 1]);
      let a = g(this._fragmentFiber) ? t.parentElement : r;
      if (a == null) {
        return Node.DOCUMENT_POSITION_DISCONNECTED;
      }
      r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      const o = t.compareDocumentPosition(e);
      let s = i.compareDocumentPosition(e);
      const c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
      s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING;
      t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o;
      if (t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)) {
        return t;
      }
      return Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    scrollIntoView(e) {
      if (typeof e == `object`) {
        throw Error(a(566));
      }
      const t = [];
      p(this._fragmentFiber.child, false, Hp, t, undefined, undefined);
      let n = e !== false;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        r = n ? r[1] || r[0] || m(this._fragmentFiber) : r[0] || r[1];
        if (r === null) {
          return;
        }
        if (r.tag === 6) {
          e = b(r);
          Zp(e, n);
          return;
        }
        r = b(r);
        if (r.nodeType !== 9) {
          if (r.nodeType === 11) {
            n = `host` in r ? r.host : null;
            if (n !== null) {
              n.scrollIntoView(e);
            }
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        let i = t[r];
        if (i.tag === 6) {
          i = b(i);
          Zp(i, n);
        } else {
          b(i).scrollIntoView(e);
        }
        r += n ? -1 : 1;
      }
    }
  }
  function Ip(e, t, n, r) {
    b(e).addEventListener(t, n, r);
    return false;
  }
  function Lp(e, t, n, r) {
    b(e).removeEventListener(t, n, r);
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
  function zp(e) {
    if (e == null) {
      return `c=0`;
    }
    if (typeof e == `boolean`) {
      return `c=` + (e ? `1` : `0`);
    }
    return `c=` + (e.capture ? `1` : `0`);
  }
  function Bp(e, t, n, r) {
    if (e.length === 0) {
      return -1;
    }
    r = zp(r);
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) {
        return i;
      }
    }
    return -1;
  }
  function Vp(e, t) {
    return e.tag !== 6 && (e = b(e), pm(e, t));
  }
  function Hp(e, t) {
    t.push(e);
    return false;
  }
  function Up(e, t) {
    return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), true) : false);
  }
  function Wp(e, t) {
    return e.tag !== 6 && (e = b(e), t.observe(e), false);
  }
  function Gp(e, t) {
    return e.tag !== 6 && (e = b(e), t.unobserve(e), false);
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
        const e = Kp;
        Kp = [];
        for (const n of e) {
          n.observer.unobserve(n.instance);
        }
      });
    }
  }
  function Yp(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      const n = e.ownerDocument.createRange();
      n.selectNodeContents(e);
      t.push(...n.getClientRects());
    } else {
      e = b(e);
      t.push(...e.getClientRects());
    }
    return false;
  }
  function Xp(e, t, n, r, i) {
    let a = Wt(i);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!a) {
        a: {
          while (a !== null) {
            if (a.tag === 7 && (a === t || a.alternate === t)) {
              n = true;
              break a;
            }
            a = a.return;
          }
          n = false;
        }
      }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a === null) {
        a = i.ownerDocument;
        return i === a || i === a.documentElement || i === a.body;
      }
      a: {
        a = t;
        for (t = m(t); a !== null;) {
          if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
            a = true;
            break a;
          }
          a = a.return;
        }
        a = false;
      }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_PRECEDING) {
      if ((t = !!a) && !(t = a === n)) {
        t = ie(n, a, re);
        if (t === null) {
          t = false;
        } else {
          p(t, true, te, a, n);
          a = ee;
          ee = null;
          t = a !== null;
        }
      }
      return t;
    }
    if (e & Node.DOCUMENT_POSITION_FOLLOWING) {
      if ((t = !!a) && !(t = a === r)) {
        t = ie(r, a, re);
        if (t === null) {
          t = false;
        } else {
          p(t, true, ne, a, r);
          a = ee;
          x = ee = null;
          t = a !== null;
        }
      }
      return t;
    }
    return false;
  }
  function Zp(e, t) {
    const n = e.ownerDocument.createRange();
    n.selectNodeContents(e);
    e = n.getBoundingClientRect();
    window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
  }
  function Qp(e, t) {
    e = b(e);
    $p(e, t);
    return false;
  }
  function $p(e, t) {
    e.reactFragments ??= new Set();
    e.reactFragments.add(t);
  }
  function em(stateNode, t) {
    let t__eventListeners = t._eventListeners;
    if (t__eventListeners !== null) {
      for (const i of t__eventListeners) {
        stateNode.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
    }
    if (stateNode.nodeType !== 3) {
      t__eventListeners = t._observers;
      if (t__eventListeners !== null) {
        t__eventListeners.forEach(n => {
          let r = 0;
          for (const a of Kp) {
            if (a.fragmentInstance !== t || a.observer !== n || a.instance !== stateNode) {
              Kp[r++] = a;
            }
          }
          Kp.length = r;
          n.observe(stateNode);
        });
      }
      $p(stateNode, t);
    }
  }
  function tm(stateNode, t) {
    let t__eventListeners = t._eventListeners;
    if (t__eventListeners !== null) {
      for (const i of t__eventListeners) {
        stateNode.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
    }
    if (stateNode.nodeType !== 3) {
      t__eventListeners = t._observers;
      if (t__eventListeners !== null) {
        t__eventListeners.forEach(n => {
          if (typeof n.rootMargin == `string`) {
            Jp(t, n, stateNode);
          } else {
            n.unobserve(stateNode);
          }
        });
      }
      if (stateNode.reactFragments != null) {
        stateNode.reactFragments.delete(t);
      }
    }
  }
  function nm(e) {
    let e_firstChild = e.firstChild;
    for (e_firstChild && e_firstChild.nodeType === 10 && (e_firstChild = e_firstChild.nextSibling); e_firstChild;) {
      const n = e_firstChild;
      e_firstChild = e_firstChild.nextSibling;
      switch (n.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n);
          Ut(n);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n.rel.toLowerCase() === `stylesheet`) {
            continue;
          }
      }
      e.removeChild(n);
    }
  }
  function rm(e, type, pendingProps, r) {
    while (e.nodeType === 1) {
      const i = pendingProps;
      if (e.nodeName.toLowerCase() !== type.toLowerCase()) {
        if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) {
          break;
        }
      } else if (!r) {
        if (type === `input` && e.type === `hidden`) {
          var a = i.name == null ? null : `` + i.name;
          if (i.type === `hidden` && e.getAttribute(`name`) === a) {
            return e;
          }
        } else {
          return e;
        }
      } else if (!e[Vt]) {
        switch (type) {
          case `meta`:
            if (!e.hasAttribute(`itemprop`)) {
              break;
            }
            return e;
          case `link`:
            a = e.getAttribute(`rel`);
            if (a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin ?? null) || e.getAttribute(`title`) !== (i.title ?? null)) {
              break;
            }
            return e;
          case `style`:
            if (e.hasAttribute(`data-precedence`)) {
              break;
            }
            return e;
          case `script`:
            a = e.getAttribute(`src`);
            if ((a !== (i.src ?? null) || e.getAttribute(`type`) !== (i.type ?? null) || e.getAttribute(`crossorigin`) !== (i.crossOrigin ?? null)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`)) {
              break;
            }
            return e;
          default:
            return e;
        }
      }
      e = lm(e.nextSibling);
      if (e === null) {
        break;
      }
    }
    return null;
  }
  function im(e, pendingProps, n) {
    if (pendingProps === ``) {
      return null;
    }
    while (e.nodeType !== 3) {
      if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = lm(e.nextSibling), e === null)) {
        return null;
      }
    }
    return e;
  }
  function am(e, t) {
    while (e.nodeType !== 8) {
      if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = lm(e.nextSibling), e === null)) {
        return null;
      }
    }
    return e;
  }
  function om(e) {
    return e.data === `$?` || e.data === `$~`;
  }
  function sm(e) {
    return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`;
  }
  function cm(e, t) {
    const e_ownerDocument = e.ownerDocument;
    if (e.data === `$~`) {
      e._reactRetry = t;
    } else if (e.data !== `$?` || e_ownerDocument.readyState !== `loading`) {
      t();
    } else {
      const r = function () {
        t();
        e_ownerDocument.removeEventListener(`DOMContentLoaded`, r);
      };
      e_ownerDocument.addEventListener(`DOMContentLoaded`, r);
      e._reactRetry = r;
    }
  }
  function lm(e) {
    for (; e != null; e = e.nextSibling) {
      let t = e.nodeType;
      if (t === 1 || t === 3) {
        break;
      }
      if (t === 8) {
        t = e.data;
        if (t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`) {
          break;
        }
        if (t === `/$` || t === `/&`) {
          return null;
        }
      }
    }
    return e;
  }
  var um = null;
  function dm(e) {
    e = e.nextSibling;
    let t = 0;
    while (e) {
      if (e.nodeType === 8) {
        const n = e.data;
        if (n === `/$` || n === `/&`) {
          if (t === 0) {
            return lm(e.nextSibling);
          }
          t--;
        } else {
          if (!(n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`)) {
            t++;
          }
        }
      }
      e = e.nextSibling;
    }
    return null;
  }
  function fm(e) {
    e = e.previousSibling;
    let t = 0;
    while (e) {
      if (e.nodeType === 8) {
        const n = e.data;
        if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
          if (t === 0) {
            return e;
          }
          t--;
        } else {
          if (!(n !== `/$` && n !== `/&`)) {
            t++;
          }
        }
      }
      e = e.previousSibling;
    }
    return null;
  }
  function pm(e, t) {
    function n() {
      r = true;
    }
    if (e.ownerDocument.activeElement === e) {
      return true;
    }
    var r = false;
    try {
      e.ownerDocument.addEventListener(`focus`, n, true);
      (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener(`focus`, n, true);
    }
    return r;
  }
  function mm(e) {
    yp(function () {
      yp(function (t) {
        return e(t);
      });
    });
  }
  function hm(e, t, n) {
    t = lp(n);
    switch (e) {
      case `html`:
        e = t.documentElement;
        if (!e) {
          throw Error(a(452));
        }
        return e;
      case `head`:
        e = t.head;
        if (!e) {
          throw Error(a(453));
        }
        return e;
      case `body`:
        e = t.body;
        if (!e) {
          throw Error(a(454));
        }
        return e;
      default:
        throw Error(a(451));
    }
  }
  function gm(stateNode, type, memoizedProps) {
    for (const r in memoizedProps) {
      const i = memoizedProps[r];
      if (memoizedProps.hasOwnProperty(r) && i != null) {
        $(stateNode, type, r, null, rp, i);
      }
    }
    if (memoizedProps.dangerouslySetInnerHTML != null) {
      stateNode.textContent = ``;
    }
    if (stateNode.onclick === unsuspend) {
      stateNode.onclick = null;
    }
    Ut(stateNode);
  }
  function _m(e) {
    for (const t = e.attributes; t.length;) {
      e.removeAttributeNode(t[0]);
    }
    Ut(e);
  }
  var vm = new Map();
  var ym = new Set();
  function bm(e) {
    if (typeof e.getRootNode == `function`) {
      const t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) {
        return t;
      }
    }
    if (e.nodeType === 9) {
      return e;
    }
    return e.ownerDocument;
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
    const e = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.f();
    const t = zd();
    return e || t;
  }
  function r_3(e) {
    const t = Gt(e);
    if (t !== null && t.tag === 5 && t.type === `form`) {
      ic(t);
    } else {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.r(e);
    }
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(rel, t, n) {
    const r = wm;
    if (r && typeof t == `string` && t) {
      let i = hn(t);
      i = `link[rel="` + rel + `"][href="` + i + `"]`;
      if (typeof n == `string`) {
        i += `[crossorigin="` + n + `"]`;
      }
      if (!ym.has(i)) {
        ym.add(i);
        rel = {
          rel,
          crossOrigin: n,
          href: t
        };
        if (r.querySelector(i) === null) {
          t = r.createElement(`link`);
          np(t, `link`, rel);
          Jt(t);
          r.head.appendChild(t);
        }
      }
    }
  }
  function D_1(e) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.D(e);
    Tm(`dns-prefetch`, e, null);
  }
  function C_1(e, t) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.C(e, t);
    Tm(`preconnect`, e, t);
  }
  function L_1(e, as_1, n) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.L(e, as_1, n);
    const r = wm;
    if (r && e && as_1) {
      let i = `link[rel="preload"][as="` + hn(as_1) + `"]`;
      if (as_1 === `image` && n && n.imageSrcSet) {
        i += `[imagesrcset="` + hn(n.imageSrcSet) + `"]`;
        if (typeof n.imageSizes == `string`) {
          i += `[imagesizes="` + hn(n.imageSizes) + `"]`;
        }
      } else {
        i += `[href="` + hn(e) + `"]`;
      }
      let a = i;
      switch (as_1) {
        case `style`:
          a = Pm(e);
          break;
        case `script`:
          a = Rm(e);
      }
      if (!(vm.has(a) || (e = Object_assign({
        rel: `preload`,
        href: as_1 === `image` && n && n.imageSrcSet ? undefined : e,
        as: as_1
      }, n), vm.set(a, e), r.querySelector(i) !== null || as_1 === `style` && r.querySelector(Fm(a)) || as_1 === `script` && r.querySelector(zm(a))))) {
        const o = r.createElement(`link`);
        np(o, `link`, e);
        if (as_1 === `style`) {
          o[Ht] = true;
          o.onload = o.onerror = function () {
            Yt(o);
          };
        }
        Jt(o);
        r.head.appendChild(o);
      }
    }
  }
  function m_1(e, t) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.m(e, t);
    const n = wm;
    if (n && e) {
      let r = t && typeof t.as == `string` ? t.as : `script`;
      const i = `link[rel="modulepreload"][as="` + hn(r) + `"][href="` + hn(e) + `"]`;
      let a = i;
      switch (r) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a = Rm(e);
      }
      if (!vm.has(a) && (e = Object_assign({
        rel: `modulepreload`,
        href: e
      }, t), vm.set(a, e), n.querySelector(i) === null)) {
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n.querySelector(zm(a))) {
              return;
            }
        }
        r = n.createElement(`link`);
        np(r, `link`, e);
        Jt(r);
        n.head.appendChild(r);
      }
    }
  }
  function S_1(e, t, n) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.S(e, t, n);
    const r = wm;
    if (r && e) {
      const i = qt(r).hoistableStyles;
      const a = Pm(e);
      t ||= `default`;
      let o = i.get(a);
      if (!o) {
        const state = {
          loading: 0,
          preload: null
        };
        if (o = r.querySelector(Fm(a))) {
          state.loading = 5;
        } else {
          e = Object_assign({
            rel: `stylesheet`,
            href: e,
            "data-precedence": t
          }, n);
          if (n = vm.get(a)) {
            Hm(e, n);
          }
          const c = o = r.createElement(`link`);
          Jt(c);
          np(c, `link`, e);
          c._p = new Promise((resolve, reject) => {
            c.onload = resolve;
            c.onerror = reject;
          });
          c.addEventListener(`load`, function () {
            state.loading |= 1;
          });
          c.addEventListener(`error`, function () {
            state.loading |= 2;
          });
          state.loading |= 4;
          Vm(o, t, r);
        }
        o = {
          type: `stylesheet`,
          instance: o,
          count: 1,
          state
        };
        i.set(a, o);
      }
    }
  }
  function X_1(e, t) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.X(e, t);
    const n = wm;
    if (n && e) {
      const r = qt(n).hoistableScripts;
      const i = Rm(e);
      let a = r.get(i);
      if (!a) {
        a = n.querySelector(zm(i));
        if (!a) {
          e = Object_assign({
            src: e,
            async: true
          }, t);
          if (t = vm.get(i)) {
            Um(e, t);
          }
          a = n.createElement(`script`);
          Jt(a);
          np(a, `link`, e);
          n.head.appendChild(a);
        }
        a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        };
        r.set(i, a);
      }
    }
  }
  function M_1(e, t) {
    i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_d.M(e, t);
    const n = wm;
    if (n && e) {
      const r = qt(n).hoistableScripts;
      const i = Rm(e);
      let a = r.get(i);
      if (!a) {
        a = n.querySelector(zm(i));
        if (!a) {
          e = Object_assign({
            src: e,
            async: true,
            type: `module`
          }, t);
          if (t = vm.get(i)) {
            Um(e, t);
          }
          a = n.createElement(`script`);
          Jt(a);
          np(a, `link`, e);
          n.head.appendChild(a);
        }
        a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        };
        r.set(i, a);
      }
    }
  }
  function Nm(e, t, n, r) {
    var i = (i = Pe.current) ? bm(i) : null;
    if (!i) {
      throw Error(a(446));
    }
    switch (e) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        if (typeof n.precedence == `string` && typeof n.href == `string`) {
          n = Pm(n.href);
          t = qt(i).hoistableStyles;
          r = t.get(n);
          if (!r) {
            r = {
              type: `style`,
              instance: null,
              count: 0,
              state: null
            };
            t.set(n, r);
          }
          return r;
        }
        return {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      case `link`:
        if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
          e = Pm(n.href);
          let o = qt(i).hoistableStyles;
          let s = o.get(e);
          if (!s) {
            i = i.ownerDocument || i;
            s = {
              type: `stylesheet`,
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            };
            o.set(e, s);
            if (o = i.querySelector(Fm(e))) {
              if (!o._p) {
                s.instance = o;
                s.state.loading = 5;
              }
            } else {
              o = vm.get(e);
              if (!o) {
                o = {
                  rel: `preload`,
                  as: `style`,
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy
                };
                vm.set(e, o);
              }
              Lm(i, e, o, s.state);
            }
          }
          if (t && r === null) {
            throw Error(a(528, ``));
          }
          return s;
        }
        if (t && r !== null) {
          throw Error(a(529, ``));
        }
        return null;
      case `script`:
        t = n.async;
        n = n.src;
        if (typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`) {
          n = Rm(n);
          t = qt(i).hoistableScripts;
          r = t.get(n);
          if (!r) {
            r = {
              type: `script`,
              instance: null,
              count: 0,
              state: null
            };
            t.set(n, r);
          }
          return r;
        }
        return {
          type: `void`,
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(a(444, e));
    }
  }
  function Pm(e) {
    return `href="` + hn(e) + `"`;
  }
  function Fm(e) {
    return `link[rel="stylesheet"][` + e + `]`;
  }
  function Im(e) {
    return Object_assign({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Lm(e, t, n, state) {
    if (t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)) {
      if (t[Ht] !== true) {
        state.loading = 1;
        return;
      }
    } else {
      t = e.createElement(`link`);
      t[Ht] = true;
      t.onload = t.onerror = Yt.bind(null, t);
      np(t, `link`, n);
      Jt(t);
      e.head.appendChild(t);
    }
    state.preload = t;
    t.addEventListener(`load`, function () {
      return state.loading |= 1;
    });
    t.addEventListener(`error`, function () {
      return state.loading |= 2;
    });
  }
  function Rm(e) {
    return `[src="` + hn(e) + `"]`;
  }
  function zm(e) {
    return `script[async]` + e;
  }
  function Bm(e, t, memoizedProps) {
    t.count++;
    if (t.instance === null) {
      switch (t.type) {
        case `style`:
          var r = e.querySelector(`style[data-href~="` + hn(memoizedProps.href) + `"]`);
          if (r) {
            t.instance = r;
            Jt(r);
            return r;
          }
          var i = Object_assign({}, memoizedProps, {
            "data-href": memoizedProps.href,
            "data-precedence": memoizedProps.precedence,
            href: null,
            precedence: null
          });
          r = (e.ownerDocument || e).createElement(`style`);
          Jt(r);
          np(r, `style`, i);
          Vm(r, memoizedProps.precedence, e);
          return t.instance = r;
        case `stylesheet`:
          i = Pm(memoizedProps.href);
          var o = e.querySelector(Fm(i));
          if (o) {
            t.state.loading |= 4;
            t.instance = o;
            Jt(o);
            return o;
          }
          r = Im(memoizedProps);
          if (i = vm.get(i)) {
            Hm(r, i);
          }
          o = (e.ownerDocument || e).createElement(`link`);
          Jt(o);
          var s = o;
          s._p = new Promise((resolve, reject) => {
            s.onload = resolve;
            s.onerror = reject;
          });
          np(o, `link`, r);
          t.state.loading |= 4;
          Vm(o, memoizedProps.precedence, e);
          return t.instance = o;
        case `script`:
          o = Rm(memoizedProps.src);
          if (i = e.querySelector(zm(o))) {
            t.instance = i;
            Jt(i);
            return i;
          }
          r = memoizedProps;
          if (i = vm.get(o)) {
            r = Object_assign({}, memoizedProps);
            Um(r, i);
          }
          e = e.ownerDocument || e;
          i = e.createElement(`script`);
          Jt(i);
          np(i, `link`, r);
          e.head.appendChild(i);
          return t.instance = i;
        case `void`:
          return null;
        default:
          throw Error(a(443, t.type));
      }
    } else {
      if (t.type === `stylesheet` && !(t.state.loading & 4)) {
        r = t.instance;
        t.state.loading |= 4;
        Vm(r, memoizedProps.precedence, e);
      }
    }
    return t.instance;
  }
  function Vm(e, t, n) {
    for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
      const s = r[o];
      if (s.dataset.precedence === t) {
        a = s;
      } else if (a !== i) {
        break;
      }
    }
    if (a) {
      a.parentNode.insertBefore(e, a.nextSibling);
    } else {
      t = n.nodeType === 9 ? n.head : n;
      t.insertBefore(e, t.firstChild);
    }
  }
  function Hm(e, t) {
    e.crossOrigin ??= t.crossOrigin;
    e.referrerPolicy ??= t.referrerPolicy;
    e.title ??= t.title;
  }
  function Um(e, t) {
    e.crossOrigin ??= t.crossOrigin;
    e.referrerPolicy ??= t.referrerPolicy;
    e.integrity ??= t.integrity;
  }
  var Wm = null;
  function Gm(e, t, n) {
    if (Wm === null) {
      var r = new Map();
      var i = Wm = new Map();
      i.set(n, r);
    } else {
      i = Wm;
      r = i.get(n);
      if (!r) {
        r = new Map();
        i.set(n, r);
      }
    }
    if (r.has(e)) {
      return r;
    }
    r.set(e, null);
    n = n.getElementsByTagName(e);
    for (i = 0; i < n.length; i++) {
      const a = n[i];
      if (!(a[Vt] || a[Pt] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
        let o = a.getAttribute(t) || ``;
        o = e + o;
        const s = r.get(o);
        if (s) {
          s.push(a);
        } else {
          r.set(o, [a]);
        }
      }
    }
    return r;
  }
  function Km(e, type, n) {
    e = e.ownerDocument || e;
    e.head.insertBefore(n, type === `title` ? e.querySelector(`head > title`) : null);
  }
  function qm(e, t, n) {
    if (n === 1 || t.itemProp != null) {
      return false;
    }
    switch (e) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) {
          break;
        }
        return true;
      case `link`:
        if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) {
          break;
        }
        switch (t.rel) {
          case `stylesheet`:
            e = t.disabled;
            return typeof t.precedence == `string` && e == null;
          default:
            return true;
        }
      case `script`:
        if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`) {
          return true;
        }
    }
    return false;
  }
  function Jm(e, t) {
    return e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`;
  }
  function Ym(e) {
    return !(e.type === `stylesheet` && !(e.state.loading & 3));
  }
  function Xm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e, t) {
    if (typeof t.decode == `function`) {
      e.imgCount++;
      if (!t.complete) {
        e.imgBytes += Xm(t);
        e.suspenseyImages.push(t);
      }
      e = rh.bind(e);
      t.decode().then(e, e);
    }
  }
  function Qm(e, t, n, r) {
    if (n.type === `stylesheet` && (typeof r.media != `string` || matchMedia(r.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        let i = Pm(r.href);
        let a = t.querySelector(Fm(i));
        if (a) {
          t = a._p;
          if (typeof t == `object` && t && typeof t.then == `function`) {
            e.count++;
            e = nh.bind(e);
            t.then(e, e);
          }
          n.state.loading |= 4;
          n.instance = a;
          Jt(a);
          return;
        }
        a = t.ownerDocument || t;
        r = Im(r);
        if (i = vm.get(i)) {
          Hm(r, i);
        }
        a = a.createElement(`link`);
        Jt(a);
        const o = a;
        o._p = new Promise((resolve, reject) => {
          o.onload = resolve;
          o.onerror = reject;
        });
        np(a, `link`, r);
        n.instance = a;
      }
      if (e.stylesheets === null) {
        e.stylesheets = new Map();
      }
      e.stylesheets.set(n, t);
      if ((t = n.state.preload) && !(n.state.loading & 3)) {
        e.count++;
        n = nh.bind(e);
        t.addEventListener(`load`, n);
        t.addEventListener(`error`, n);
      }
    }
  }
  var $m = 0;
  function eh(e, t) {
    if (e.stylesheets && e.count === 0) {
      ah(e, e.stylesheets);
    }
    if (e.count > 0 || e.imgCount > 0) {
      return function (n) {
        const r = setTimeout(() => {
          if (e.stylesheets) {
            ah(e, e.stylesheets);
          }
          if (e.unsuspend) {
            const t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, 60000 + t);
        if (e.imgBytes > 0 && $m === 0) {
          $m = 62500 * op();
        }
        const i = setTimeout(() => {
          e.waitingForImages = false;
          if (e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
            const t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, (e.imgBytes > $m ? 50 : 800) + t);
        e.unsuspend = n;
        return function () {
          e.unsuspend = null;
          clearTimeout(r);
          clearTimeout(i);
        };
      };
    }
    return null;
  }
  function th(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) {
        ah(e, e.stylesheets);
      } else if (e.unsuspend) {
        const t = e.unsuspend;
        e.unsuspend = null;
        t();
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
  function ah(e, stylesheets) {
    e.stylesheets = null;
    if (e.unsuspend !== null) {
      e.count++;
      ih = new Map();
      stylesheets.forEach(oh, e);
      ih = null;
      nh.call(e);
    }
  }
  function oh(e, t) {
    if (!(t.state.loading & 4)) {
      let n = ih.get(e);
      if (n) var r = n.get(null);else {
        n = new Map();
        ih.set(e, n);
        for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
          var o = i[a];
          if (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) {
            n.set(o.dataset.precedence, o);
            r = o;
          }
        }
        if (r) {
          n.set(null, r);
        }
      }
      i = t.instance;
      o = i.getAttribute(`data-precedence`);
      a = n.get(o) || r;
      if (a === r) {
        n.set(null, i);
      }
      n.set(o, i);
      this.count++;
      r = nh.bind(this);
      i.addEventListener(`load`, r);
      i.addEventListener(`error`, r);
      if (a) {
        a.parentNode.insertBefore(i, a.nextSibling);
      } else {
        e = e.nodeType === 9 ? e.head : e;
        e.insertBefore(i, e.firstChild);
      }
      t.state.loading |= 4;
    }
  }
  var sh = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: De,
    _currentValue2: De,
    _threadCount: 0
  };
  function ch(e, t, n, r, i, a, o, s, c) {
    this.tag = 1;
    this.containerInfo = e;
    this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
    this.callbackPriority = 0;
    this.expirationTimes = Ct(-1);
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ct(0);
    this.hiddenUpdates = Ct(null);
    this.identifierPrefix = r;
    this.onUncaughtError = i;
    this.onCaughtError = a;
    this.onRecoverableError = o;
    this.pooledCache = null;
    this.pooledCacheLanes = 0;
    this.formState = c;
    this.transitionTypes = null;
    this.incompleteTransitions = new Map();
  }
  function lh(e, t, isDehydrated, element, i, a, o, s, c, l, u, d) {
    e = new ch(e, t, isDehydrated, o, c, l, u, d, s);
    t = 1;
    if (a === true) {
      t |= 24;
    }
    a = Hi(3, null, null, t);
    e.current = a;
    a.stateNode = e;
    t = Fa();
    t.refCount++;
    e.pooledCache = t;
    t.refCount++;
    a.memoizedState = {
      element,
      isDehydrated,
      cache: t
    };
    vo(a);
    return e;
  }
  function uh(e) {
    if (e) {
      e = Bi;
      return e;
    }
    return Bi;
  }
  function dh(e, t, n, r, i, a) {
    i = uh(i);
    if (r.context === null) {
      r.context = i;
    } else {
      r.pendingContext = i;
    }
    r = bo(t);
    r.payload = {
      element: n
    };
    a = a === undefined ? null : a;
    if (a !== null) {
      r.callback = a;
    }
    n = xo(e, r, t);
    if (n !== null) {
      Pd(n, e, t);
      So(n, e, t);
    }
  }
  function fh(e, t) {
    e = e.memoizedState;
    if (e !== null && e.dehydrated !== null) {
      const n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ph(e, t) {
    fh(e, t);
    if (e = e.alternate) {
      fh(e, t);
    }
  }
  function mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      const t = Li(e, 67108864);
      if (t !== null) {
        Pd(t, e, 67108864);
      }
      ph(e, 67108864);
    }
  }
  function hh(e) {
    if (e.tag === 13 || e.tag === 31) {
      let t = jd();
      t = kt(t);
      const n = Li(e, t);
      if (n !== null) {
        Pd(n, e, t);
      }
      ph(e, t);
    }
  }
  var gh = true;
  function _h(e, t, n, r) {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 2;
      yh(e, t, n, r);
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function vh(e, t, n, r) {
    const r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    const i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p;
    try {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = 8;
      yh(e, t, n, r);
    } finally {
      i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.p = i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_p;
      r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = r___CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE_T;
    }
  }
  function yh(e, t, n, r) {
    if (gh) {
      let i = bh(r);
      if (i === null) {
        Kf(e, t, r, xh, n);
        Mh(e, r);
      } else if (Ph(i, e, t, n, r)) {
        r.stopPropagation();
      } else {
        Mh(e, r);
        if (t & 4 && jh.indexOf(e) > -1) {
          while (i !== null) {
            let a = Gt(i);
            if (a !== null) {
              switch (a.tag) {
                case 3:
                  a = a.stateNode;
                  if (a.current.memoizedState.isDehydrated) {
                    let o = _t(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      s.pendingLanes |= 2;
                      for (s.entangledLanes |= 2; o;) {
                        const c = 1 << 31 - ut(o);
                        s.entanglements[1] |= c;
                        o &= ~c;
                      }
                      Ef(a);
                      if (!(G & 6)) {
                        _d = t_unstable_now() + 500;
                        Df(0, false);
                      }
                    }
                  }
                  break;
                case 31:
                case 13:
                  s = Li(a, 2);
                  if (s !== null) {
                    Pd(s, a, 2);
                  }
                  zd();
                  ph(a, 2);
              }
            }
            a = bh(r);
            if (a === null) {
              Kf(e, t, r, xh, n);
            }
            if (a === i) {
              break;
            }
            i = a;
          }
          if (i !== null) {
            r.stopPropagation();
          }
        } else {
          Kf(e, t, r, null, n);
        }
      }
    }
  }
  function bh(e) {
    e = Mn(e);
    return Sh(e);
  }
  var xh = null;
  function Sh(e) {
    xh = null;
    e = Wt(e);
    if (e !== null) {
      const t = s(e);
      if (t === null) {
        e = null;
      } else {
        const n = t.tag;
        if (n === 13) {
          e = c(t);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (n === 31) {
          e = l(t);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) {
            if (t.tag === 3) {
              return t.stateNode.containerInfo;
            }
            return null;
          }
          e = null;
        } else {
          if (t !== e) {
            e = null;
          }
        }
      }
    }
    xh = e;
    return null;
  }
  function Ch(e) {
    switch (e) {
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
  var Oh = new Map();
  var kh = new Map();
  var Ah = [];
  var jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e, t) {
    switch (e) {
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
        Oh.delete(t.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t.pointerId);
    }
  }
  function Nh(e, blockedOn, domEventName, eventSystemFlags, i, nativeEvent) {
    if (e === null || e.nativeEvent !== nativeEvent) {
      e = {
        blockedOn,
        domEventName,
        eventSystemFlags,
        nativeEvent,
        targetContainers: [i]
      };
      if (blockedOn !== null) {
        blockedOn = Gt(blockedOn);
        if (blockedOn !== null) {
          mh(blockedOn);
        }
      }
      return e;
    }
    e.eventSystemFlags |= eventSystemFlags;
    blockedOn = e.targetContainers;
    if (i !== null && blockedOn.indexOf(i) === -1) {
      blockedOn.push(i);
    }
    return e;
  }
  function Ph(e, t, n, r, i) {
    switch (t) {
      case `focusin`:
        Th = Nh(Th, e, t, n, r, i);
        return true;
      case `dragenter`:
        Eh = Nh(Eh, e, t, n, r, i);
        return true;
      case `mouseover`:
        Dh = Nh(Dh, e, t, n, r, i);
        return true;
      case `pointerover`:
        var a = i.pointerId;
        Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i));
        return true;
      case `gotpointercapture`:
        a = i.pointerId;
        kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i));
        return true;
    }
    return false;
  }
  function Fh(e) {
    let t = Wt(e.target);
    if (t !== null) {
      const n = s(t);
      if (n !== null) {
        t = n.tag;
        if (t === 13) {
          t = c(n);
          if (t !== null) {
            e.blockedOn = t;
            Mt(e.priority, () => {
              hh(n);
            });
            return;
          }
        } else if (t === 31) {
          t = l(n);
          if (t !== null) {
            e.blockedOn = t;
            Mt(e.priority, () => {
              hh(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ih(e) {
    if (e.blockedOn !== null) {
      return false;
    }
    for (let t = e.targetContainers; t.length > 0;) {
      let n = bh(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        const r = new n.constructor(n.type, n);
        jn = r;
        n.target.dispatchEvent(r);
        jn = null;
      } else {
        t = Gt(n);
        if (t !== null) {
          mh(t);
        }
        e.blockedOn = n;
        return false;
      }
      t.shift();
    }
    return true;
  }
  function Lh(e, t, n) {
    if (Ih(e)) {
      n.delete(t);
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
  function zh(e, n) {
    if (e.blockedOn === n) {
      e.blockedOn = null;
      if (!wh) {
        wh = true;
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh);
      }
    }
  }
  var Bh = null;
  function Vh(e) {
    if (Bh !== e) {
      Bh = e;
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        if (Bh === e) {
          Bh = null;
        }
        for (let t = 0; t < e.length; t += 3) {
          const n = e[t];
          const r = e[t + 1];
          const i = e[t + 2];
          if (typeof r != `function`) {
            if (Sh(r || n) === null) {
              continue;
            }
            break;
          }
          const a = Gt(n);
          if (a !== null) {
            e.splice(t, 3);
            t -= 3;
            nc(a, {
              pending: true,
              data: i,
              method: n.method,
              action: r
            }, r, i);
          }
        }
      });
    }
  }
  function Hh(e) {
    function t(t) {
      return zh(t, e);
    }
    if (Th !== null) {
      zh(Th, e);
    }
    if (Eh !== null) {
      zh(Eh, e);
    }
    if (Dh !== null) {
      zh(Dh, e);
    }
    Oh.forEach(t);
    kh.forEach(t);
    for (var n = 0; n < Ah.length; n++) {
      var r = Ah[n];
      if (r.blockedOn === e) {
        r.blockedOn = null;
      }
    }
    while (Ah.length > 0 && (n = Ah[0], n.blockedOn === null)) {
      Fh(n);
      if (n.blockedOn === null) {
        Ah.shift();
      }
    }
    n = (e.ownerDocument || e).$$reactFormReplay;
    if (n != null) {
      for (r = 0; r < n.length; r += 3) {
        let i = n[r];
        const a = n[r + 1];
        let o = i[Ft] || null;
        if (typeof a == `function`) {
          if (!o) {
            Vh(n);
          }
        } else if (o) {
          let s = null;
          if (a && a.hasAttribute(`formAction`)) {
            i = a;
            if (o = a[Ft] || null) {
              s = o.formAction;
            } else if (Sh(i) !== null) {
              continue;
            }
          } else {
            s = o.action;
          }
          if (typeof s == `function`) {
            n[r + 1] = s;
          } else {
            n.splice(r, 3);
            r -= 3;
          }
          Vh(n);
        }
      }
    }
  }
  function Uh() {
    function e(e) {
      if (e.canIntercept && e.info === `react-transition`) {
        e.intercept({
          handler: function () {
            return new Promise(resolve => i = resolve);
          },
          focusReset: `manual`,
          scroll: `manual`
        });
      }
    }
    function t() {
      if (i !== null) {
        i();
        i = null;
      }
      if (!r) {
        setTimeout(n, 20);
      }
    }
    function n() {
      if (!r && !navigation.transition) {
        const e = navigation.currentEntry;
        if (e && e.url != null) {
          navigation.navigate(e.url, {
            state: e.getState(),
            info: `react-transition`,
            history: `replace`
          });
        }
      }
    }
    if (typeof navigation == `object`) {
      var r = false;
      var i = null;
      navigation.addEventListener(`navigate`, e);
      navigation.addEventListener(`navigatesuccess`, t);
      navigation.addEventListener(`navigateerror`, t);
      setTimeout(n, 100);
      return function () {
        r = true;
        navigation.removeEventListener(`navigate`, e);
        navigation.removeEventListener(`navigatesuccess`, t);
        navigation.removeEventListener(`navigateerror`, t);
        if (i !== null) {
          i();
          i = null;
        }
      };
    }
  }
  function Wh(e) {
    this._internalRoot = e;
  }
  Gh.prototype.render = Wh.prototype.render = function (e) {
    const _internalRoot = this._internalRoot;
    if (_internalRoot === null) {
      throw Error(a(409));
    }
    const t_current = _internalRoot.current;
    dh(t_current, jd(), e, _internalRoot, null, null);
  };
  Gh.prototype.unmount = Wh.prototype.unmount = function () {
    const _internalRoot = this._internalRoot;
    if (_internalRoot !== null) {
      this._internalRoot = null;
      const t = _internalRoot.containerInfo;
      dh(_internalRoot.current, 2, null, _internalRoot, null, null);
      zd();
      t[It] = null;
    }
  };
  function Gh(e) {
    this._internalRoot = e;
  }
  Gh.prototype.unstable_scheduleHydration = function (target) {
    if (target) {
      const priority = jt();
      target = {
        blockedOn: null,
        target,
        priority
      };
      for (var n = 0; n < Ah.length && priority !== 0 && priority < Ah[n].priority; n++);
      Ah.splice(n, 0, target);
      if (n === 0) {
        Fh(target);
      }
    }
  };
  var r_version = r.version;
  if (r_version !== `19.3.0`) {
    throw Error(a(527, r_version, `19.3.0`));
  }
  i___DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode = function (e) {
    const e__reactInternals = e._reactInternals;
    if (e__reactInternals === undefined) {
      throw typeof e.render == `function` ? Error(a(188)) : (e = Object.keys(e).join(`,`), Error(a(268, e)));
    }
    e = d(e__reactInternals);
    e = e === null ? null : f(e);
    e = e === null ? null : e.stateNode;
    return e;
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
        st = Jh.inject(qh);
        ct = Jh;
      } catch {}
    }
  }
  e.createRoot = function (e, t) {
    if (!o(e)) {
      throw Error(a(299));
    }
    let n = false;
    let r = ``;
    let i = Tc;
    let s = Ec;
    let c = Dc;
    if (t != null) {
      if (t.unstable_strictMode === true) {
        n = true;
      }
      if (t.identifierPrefix !== undefined) {
        r = t.identifierPrefix;
      }
      if (t.onUncaughtError !== undefined) {
        i = t.onUncaughtError;
      }
      if (t.onCaughtError !== undefined) {
        s = t.onCaughtError;
      }
      if (t.onRecoverableError !== undefined) {
        c = t.onRecoverableError;
      }
    }
    t = lh(e, 1, false, null, null, n, r, null, i, s, c, Uh);
    e[It] = t.current;
    Wf(e);
    return new Wh(t);
  };
});
const y = t((e, t) => {
  function n() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (error) {
        console.error(error);
      }
    }
  }
  n();
  t.exports = v();
})();
const b = t_1();
const ee = () => {
  if (!window.va) {
    window.va = function (...e) {
      if (!window.vaq) {
        window.vaq = [];
      }
      window.vaq.push(e);
    };
  }
};
const x = `@vercel/analytics`;
const sdkv = `2.0.1`;
function ne() {
  return typeof window < `u`;
}
function re() {
  return `production`;
}
function ie(e = `auto`) {
  if (e === `auto`) {
    window.vam = re();
    return;
  }
  window.vam = e;
}
function S() {
  return (ne() ? window.vam : re()) || `production`;
}
function ae() {
  return S() === `development`;
}
function oe(e) {
  if (e.scriptSrc) {
    return ce(e.scriptSrc);
  }
  if (ae()) {
    return `https://va.vercel-scripts.com/v1/script.debug.js`;
  }
  if (e.basePath) {
    return ce(`${e.basePath}/insights/script.js`);
  }
  return `/_vercel/insights/script.js`;
}
function se(e, t) {
  let n = e;
  if (t) {
    try {
      n = {
        ...JSON.parse(t)?.analytics,
        ...e
      };
    } catch {}
  }
  ie(n.mode);
  let dataset = {
    sdkn: x + (n.framework ? `/${n.framework}` : ``),
    sdkv
  };
  if (n.disableAutoTrack) {
    dataset.disableAutoTrack = `1`;
  }
  if (n.viewEndpoint) {
    dataset.viewEndpoint = ce(n.viewEndpoint);
  }
  if (n.eventEndpoint) {
    dataset.eventEndpoint = ce(n.eventEndpoint);
  }
  if (n.sessionEndpoint) {
    dataset.sessionEndpoint = ce(n.sessionEndpoint);
  }
  if (ae() && n.debug === false) {
    dataset.debug = `false`;
  }
  if (n.dsn) {
    dataset.dsn = n.dsn;
  }
  if (n.endpoint) {
    dataset.endpoint = n.endpoint;
  } else if (n.basePath) {
    dataset.endpoint = ce(`${n.basePath}/insights`);
  }
  return {
    beforeSend: n.beforeSend,
    src: oe(n),
    dataset
  };
}
function ce(e) {
  if (e.startsWith(`http://`) || e.startsWith(`https://`) || e.startsWith(`/`)) {
    return e;
  }
  return `/${e}`;
}
function le(e = {
  debug: true
}, t) {
  let n;
  if (!ne()) {
    return;
  }
  let {
    beforeSend,
    src,
    dataset
  } = se(e, t);
  ee();
  if (beforeSend) {
    if ((n = window.va) != null) {
      n.call(window, `beforeSend`, beforeSend);
    }
  }
  if (document.head.querySelector(`script[src*="${src}"]`)) {
    return;
  }
  let o = document.createElement(`script`);
  o.src = src;
  for (let [e, t] of Object.entries(dataset)) {
    o.dataset[e] = t;
  }
  o.defer = true;
  o.onerror = () => {
    let e = ae() ? `Please check if any ad blockers are enabled and try again.` : `Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.`;
    console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${e}`);
  };
  document.head.appendChild(o);
}
function ue({
  route,
  path
}) {
  window.va?.(`pageview`, {
    route,
    path
  });
}
function de() {
  if (typeof process < `u`) {
    return {}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
  }
}
function fe() {
  if (typeof process < `u`) {
    return {}.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
  }
}
function Pe1Component(e) {
  b.useEffect(() => {
    var t;
    if (e.beforeSend) {
      if ((t = window.va) != null) {
        t.call(window, `beforeSend`, e.beforeSend);
      }
    }
  }, [e.beforeSend]);
  b.useEffect(() => {
    le({
      framework: e.framework || `react`,
      basePath: e.basePath ?? de(),
      ...(e.route !== undefined && {
        disableAutoTrack: true
      }),
      ...e
    }, e.configString ?? fe());
  }, []);
  b.useEffect(() => {
    if (e.route && e.path) {
      ue({
        route: e.route,
        path: e.path
      });
    }
  }, [e.route, e.path]);
  return null;
}
const me = n({
  entry: () => he
});
var he = {
  slug: `agent-cursors`,
  name: `Agent Cursors`,
  description: `Agents working in a document like teammates in a multiplayer editor – live pointers with names, suggestions typed letter by letter, images they resize, code they fix and comments beside the page`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-BpwDm3_5.jsx"), __vite__mapDeps([0, 1, 2, 3, 4]))),
  loadSource: () => r(() => import("./component-BfIA_sur.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-F9iwrvZt.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BdsziCoX.jsx"), __vite__mapDeps([5, 1, 2, 3, 4]))),
    loadSource: () => r(() => import("./component.clean-C81bLSK9.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BCszff8i.jsx").then(e => e.docs), [])
  },
  added: `2026-10-19T18:00:00+02:00`,
  order: 1,
  pro: true
};
const C = n({
  entry: () => ge
});
var ge = {
  slug: `agent-inbox`,
  name: `Agent Inbox`,
  description: `All your background agent tasks in one calm list – live clocks and status tags, filter tabs with rolling counts, rows that unfold to the last steps with Approve, Reject, Retry or Open, and glide to their new place`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-Bq86T0RX.jsx"), __vite__mapDeps([6, 1, 2, 3, 7]))),
  loadSource: () => r(() => import("./component-zV5da3i0.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-D_d0RPGD.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DQ6MZQcD.jsx"), __vite__mapDeps([8, 1, 2, 3, 7]))),
    loadSource: () => r(() => import("./component.clean-G7HptHGl.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BKGBfDOD.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T16:00:00+02:00`,
  order: 1,
  pro: true
};
const _e = n({
  entry: () => ve
});
var ve = {
  slug: `agent-lanes`,
  name: `Agent Lanes`,
  description: `Where every agent is right now – a live timeline with a lane per agent, tasks growing into “now”, hand-offs drawn between agents and approvals right on the block`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-CCeL1VNp.jsx"), __vite__mapDeps([9, 1, 2, 3, 10]))),
  loadSource: () => r(() => import("./component-CVBds3Db.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Cr8lKUzQ.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DC3N3Pap.jsx"), __vite__mapDeps([11, 1, 2, 3, 10]))),
    loadSource: () => r(() => import("./component.clean-C7ROz4iL.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-C4vtpNbt.jsx").then(e => e.docs), [])
  },
  added: `2026-10-17T12:00:00+02:00`,
  order: 1,
  pro: true
};
const ye = n({
  entry: () => be
});
var be = {
  slug: `agent-plan`,
  name: `Agent Plan`,
  description: `An agent's step-by-step plan to review before it runs – rename, drag to reorder, remove or add steps, then watch each one run with live timers and retry from a failed step`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-crn6hRBF.jsx"), __vite__mapDeps([12, 1, 2, 3, 13, 14]))),
  loadSource: () => r(() => import("./component-CJBnN79-.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-D3ABdLPT.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BjIF1-j-.jsx"), __vite__mapDeps([15, 1, 2, 3, 14]))),
    loadSource: () => r(() => import("./component.clean-MnuLboKN.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DSswoBJu.jsx").then(e => e.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 3,
  pro: true
};
const xe = n({
  entry: () => Se
});
var Se = {
  slug: `agent-steering`,
  name: `Agent Steering`,
  description: `Steer an agent while it works – queue a note for the next step and watch it glide into the plan when the agent picks it up, or interrupt right away`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-Bzg0Jm8m.jsx"), __vite__mapDeps([16, 1, 2, 3, 17]))),
  loadSource: () => r(() => import("./component-DEaAy1BC.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CaN0P0XV.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CykqoJC9.jsx"), __vite__mapDeps([18, 1, 2, 3, 17]))),
    loadSource: () => r(() => import("./component.clean-BEShq_nD.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6WKo64J.jsx").then(e => e.docs), [])
  },
  added: `2026-10-16T12:00:00+02:00`,
  order: 1,
  pro: true
};
const Ce = n({
  entry: () => we
});
var we = {
  slug: `agent-tree`,
  name: `Agent Tree`,
  description: `Who started whom – an orchestrator and its sub-agents as a live tree, with status, cost and time on every card, costs rolling up each branch, and branches that fold to one line`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-Ddb1Dch3.jsx"), __vite__mapDeps([19, 1, 2, 3, 20]))),
  loadSource: () => r(() => import("./component-B-u-OuX-.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bu9_xt8V.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CX0onucT.jsx"), __vite__mapDeps([21, 1, 2, 3, 20]))),
    loadSource: () => r(() => import("./component.clean-DZ0boXyY.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DN7ImmUS.jsx").then(e => e.docs), [])
  },
  added: `2026-10-18T21:30:00+02:00`,
  order: 1,
  pro: true
};
const Te = n({
  entry: () => Ee
});
var Ee = {
  slug: `ai-answer`,
  name: `AI Answer`,
  description: `Streamed answer with source cards, citation chips that preview their source, copy, regenerate, feedback and follow-ups`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-NvLm8mGU.jsx"), __vite__mapDeps([22, 1, 2, 3, 23]))),
  loadSource: () => r(() => import("./component-CC41BuLe.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DnStOjCc.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B3KZIS0J.jsx"), __vite__mapDeps([24, 1, 2, 3, 23]))),
    loadSource: () => r(() => import("./component.clean-DFTWGCQh.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-q_5UM703.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T12:38:00+02:00`,
  order: 0,
  pro: true
};
const w = n({
  entry: () => T
});
var T = {
  slug: `approval-card`,
  name: `Approval Card`,
  description: `An agent asks before it acts – risk badge, preview, Approve and Deny with shortcuts, a pausing countdown, and a smooth morph into a resolved row`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-DtfhNS6P.jsx"), __vite__mapDeps([25, 1, 2, 3, 26, 27]))),
  loadSource: () => r(() => import("./component-DMHjnFWv.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BfqH4QUp.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Dkj-1MDj.jsx"), __vite__mapDeps([28, 1, 2, 3, 27]))),
    loadSource: () => r(() => import("./component.clean-BZVoUx2k.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BblgJ4cP.jsx").then(e => e.docs), [])
  },
  added: `2026-10-09T23:33:00+02:00`,
  order: 2,
  pro: true
};
const De = n({
  entry: () => Oe
});
var Oe = {
  slug: `autonomy-dial`,
  name: `Autonomy Dial`,
  description: `How much an agent may do on its own – a three-stop dial, and its real actions gliding between “Runs on its own” and “Asks you first”, with a lock for what always asks`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-CZQO5p6C.jsx"), __vite__mapDeps([29, 1, 2, 3, 30]))),
  loadSource: () => r(() => import("./component-B_9gj-Ov.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bo7zVMZQ.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D4m3L74b.jsx"), __vite__mapDeps([31, 1, 2, 3, 30]))),
    loadSource: () => r(() => import("./component.clean-CLZvFUCF.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bh2SgH6-.jsx").then(e => e.docs), [])
  },
  added: `2026-10-16T15:00:00+02:00`,
  order: 1,
  pro: true
};
const ke = n({
  entry: () => Ae
});
var Ae = {
  slug: `billing-schedule`,
  name: `Billing Schedule`,
  description: `Build a billing phase – start date, duration, products with repeats and timing, discount, minimum and live totals`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-65xDbaC9.jsx"), __vite__mapDeps([32, 1, 2, 3, 33]))),
  loadSource: () => r(() => import("./component-D4LZ8L6f.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CWsQ8QN-.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-dYQPE1hb.jsx"), __vite__mapDeps([34, 1, 2, 3, 33]))),
    loadSource: () => r(() => import("./component.clean-CtS7yavp.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-B5LUm_il.jsx").then(e => e.docs), [])
  },
  added: `2026-10-04T20:47:00+02:00`,
  order: 3,
  pro: true
};
const je = n({
  entry: () => E
});
var E = {
  slug: `breakdown-chart`,
  name: `Breakdown Chart`,
  description: `Stacked bar chart with measure, slice and segment pickers, a hover breakdown and a linked table`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-BXlx9pcF.jsx"), __vite__mapDeps([35, 3, 2, 36, 1, 37]))),
  loadSource: () => r(() => import("./component-BcChx9Jw.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-IkEC_JRe.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D3ZXLUIO.jsx"), __vite__mapDeps([38, 1, 2, 3, 37]))),
    loadSource: () => r(() => import("./component.clean-CWGZCMX-.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-kzokqAH9.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 2,
  pro: true
};
const Me = n({
  entry: () => Ne
});
var Ne = {
  slug: `button`,
  name: `Button`,
  description: `Primary, secondary, ghost and destructive buttons with icons, sizes and a shimmering loading state`,
  category: `Buttons`,
  Preview: b.lazy(() => r(() => import("./demo-Da5-XF-c.jsx"), __vite__mapDeps([39, 1, 2, 3, 40, 41]))),
  loadSource: () => r(() => import("./component-BZX7ccTs.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-C9p_9cDP.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DkN_5ZQ5.jsx"), __vite__mapDeps([42, 1, 2, 3, 41]))),
    loadSource: () => r(() => import("./component.clean-CJ-0-SIS.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Cj2wJRA7.jsx").then(e => e.docs), [])
  },
  order: 2
};
const Pe = n({
  entry: () => Fe
});
var Fe = {
  slug: `change-summary`,
  name: `Change Summary`,
  description: `What moved since last time – one metric per row with a colored trend`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-D_fnjW-9.jsx"), __vite__mapDeps([43, 3, 2, 44]))),
  loadSource: () => r(() => import("./component-re2QJung.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-pueYgHNw.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CUpZACNd.jsx"), __vite__mapDeps([45, 3, 2, 44]))),
    loadSource: () => r(() => import("./component.clean-ChvuXtkV.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BJyOolVS.jsx").then(e => e.docs), [])
  },
  order: 3
};
const Ie = n({
  entry: () => Le
});
var Le = {
  slug: `chat-composer`,
  name: `Chat Composer`,
  description: `Prompt composer with model picker, voice input, app connections and approval request`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-DI66HSts.jsx"), __vite__mapDeps([46, 3, 2, 47, 1, 48]))),
  loadSource: () => r(() => import("./component-Bcgm0lKS.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-kKiOVARV.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CCr62Jz8.jsx"), __vite__mapDeps([49, 1, 2, 3, 48]))),
    loadSource: () => r(() => import("./component.clean-L0LpkbiF.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-LcU0OicS.jsx").then(e => e.docs), [])
  },
  order: 1,
  pro: true
};
const Re = n({
  entry: () => ze
});
var ze = {
  slug: `cited-answer`,
  name: `Cited Answer`,
  description: `An AI answer wired to its sources – point at a citation to light up its sentence and source, click to unfold the quoted passage with the matching words marked`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-xRyZ19Jc.jsx"), __vite__mapDeps([50, 1, 2, 3, 51]))),
  loadSource: () => r(() => import("./component-BNbr74FU.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B05SYv6Z.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CnchuWt9.jsx"), __vite__mapDeps([52, 1, 2, 3, 51]))),
    loadSource: () => r(() => import("./component.clean-OoeQadAf.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Bgc76ydH.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
const Be = n({
  entry: () => Ve
});
var Ve = {
  slug: `combobox`,
  name: `Combobox`,
  description: `Pick one or many from a searchable, grouped list – chips with avatars, highlighted matches, create-on-the-fly and full keyboard support`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-tcGbF7g2.jsx"), __vite__mapDeps([53, 1, 2, 3, 54]))),
  loadSource: () => r(() => import("./component-DUiKVJf3.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-gx2cWf0_.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DhS0HlaW.jsx"), __vite__mapDeps([55, 1, 2, 3, 54]))),
    loadSource: () => r(() => import("./component.clean-BeLkFd64.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-C6fAXNCk.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T15:41:00+02:00`,
  order: 0,
  pro: true
};
const He = n({
  entry: () => Ue
});
var Ue = {
  slug: `command-menu`,
  name: `Command Menu`,
  description: `Search and run anything from one field – tool actions with logos and ⌘1–⌘5, everyday commands with icons`,
  category: `Navigation`,
  Preview: b.lazy(() => r(() => import("./demo-Cde_N0C0.jsx"), __vite__mapDeps([56, 1, 2, 3, 57]))),
  loadSource: () => r(() => import("./component-D1ism7Wk.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Ch0zWVGM.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BkpdJDtQ.jsx"), __vite__mapDeps([58, 1, 2, 3, 57]))),
    loadSource: () => r(() => import("./component.clean-Cuyk80dR.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DPoM2rqj.jsx").then(e => e.docs), [])
  },
  added: `2026-10-07T22:30:00+02:00`,
  order: 0,
  pro: true
};
const We = n({
  entry: () => Ge
});
var Ge = {
  slug: `comment-thread`,
  name: `Comment Thread`,
  description: `One comment with replies – an assistant reports what it did, folds open details and answers @mentions`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-TTVz3U3f.jsx"), __vite__mapDeps([59, 1, 2, 3, 60]))),
  loadSource: () => r(() => import("./component-Bs5q_-Hg.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-_yznjEBE.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DgcZN_UD.jsx"), __vite__mapDeps([61, 1, 2, 3, 60]))),
    loadSource: () => r(() => import("./component.clean-DU-K_CLK.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CYmTgIA9.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 4
};
const Ke = n({
  entry: () => qe
});
var qe = {
  slug: `comments-panel`,
  name: `Comments Panel`,
  description: `Comment feed with filters, runnable /edit commands, resolve and a composer`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-BlNBUErF.jsx"), __vite__mapDeps([62, 1, 2, 3, 63]))),
  loadSource: () => r(() => import("./component-BdmpRaui.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Ckp_fKFV.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Lan03W3V.jsx"), __vite__mapDeps([64, 1, 2, 3, 63]))),
    loadSource: () => r(() => import("./component.clean-DXXuHFnW.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-ALKW-pwL.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 3,
  pro: true
};
const Je = n({
  entry: () => Ye
});
var Ye = {
  slug: `compact-breakdown`,
  name: `Compact Breakdown`,
  description: `A total split into its parts in one small card – numbers roll, the bar glides and the ranked rows trade places when the period changes`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-BgsJzBTE.jsx"), __vite__mapDeps([65, 1, 2, 3, 66]))),
  loadSource: () => r(() => import("./component-pTy_OjKD.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DIzwe3nY.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BmiiHyGl.jsx"), __vite__mapDeps([67, 1, 2, 3, 66]))),
    loadSource: () => r(() => import("./component.clean-DPcOx-S-.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DwdLDQor.jsx").then(e => e.docs), [])
  },
  added: `2026-10-10T11:42:00+02:00`,
  order: 1,
  pro: true
};
const Xe = n({
  entry: () => Ze
});
var Ze = {
  slug: `context-window`,
  name: `Context Window`,
  description: `What fills the model's context, as a field of cells – hover a part to light it up, remove files, and compact the conversation while its cells shimmer and clear`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-DgdoHbQS.jsx"), __vite__mapDeps([68, 1, 2, 3, 69]))),
  loadSource: () => r(() => import("./component-MY9L9DOs.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-4sS4mJxe.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DbXcMJMS.jsx"), __vite__mapDeps([70, 1, 2, 3, 69]))),
    loadSource: () => r(() => import("./component.clean-DV8U20np.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean--EKmLA6h.jsx").then(e => e.docs), [])
  },
  added: `2026-10-12T14:00:00+02:00`,
  order: 1,
  pro: true
};
const Qe = n({
  entry: () => $e
});
var $e = {
  slug: `data-table`,
  name: `Data Table`,
  description: `Spreadsheet-style table: select cells and ranges, edit in place, copy and paste, undo and sort`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-DGaVy3XD.jsx"), __vite__mapDeps([71, 1, 2, 3, 72, 73]))),
  loadSource: () => r(() => import("./component-zjZL_VoW.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BF18aJ-j.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-OeBBW_7u.jsx"), __vite__mapDeps([74, 1, 2, 3, 73]))),
    loadSource: () => r(() => import("./component.clean-DihFuV2a.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-D6zbp80y.jsx").then(e => e.docs), [])
  },
  order: 2,
  pro: true
};
const et = n({
  entry: () => tt
});
var tt = {
  slug: `date-range-picker`,
  name: `Date Range Picker`,
  description: `Presets and two calendars with a hover preview, comparison with the previous period or year, full keyboard control`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-CYhBENQa.jsx"), __vite__mapDeps([75, 1, 2, 3, 76]))),
  loadSource: () => r(() => import("./component-BtM-sP6A.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Co7_OGHR.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DZiTLSj_.jsx"), __vite__mapDeps([77, 1, 2, 3, 76]))),
    loadSource: () => r(() => import("./component.clean-CEv4fZRb.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-B0oHunXD.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T15:21:00+02:00`,
  order: 0,
  pro: true
};
const nt = n({
  entry: () => rt
});
var rt = {
  slug: `decision-inbox`,
  name: `Decision Inbox`,
  description: `Open decisions with two quick answers each – answered ones confirm and fold away`,
  category: `Feedback`,
  Preview: b.lazy(() => r(() => import("./demo-CcNPpld_.jsx"), __vite__mapDeps([78, 1, 2, 3, 79]))),
  loadSource: () => r(() => import("./component-DKNf3JpT.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Dk9yv4ja.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Cwxrnsci.jsx"), __vite__mapDeps([80, 1, 2, 3, 79]))),
    loadSource: () => r(() => import("./component.clean-DvCuYHUC.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-F2xvmquK.jsx").then(e => e.docs), [])
  },
  order: 5
};
const it = n({
  entry: () => at
});
var at = {
  slug: `delegate-board`,
  name: `Delegate Board`,
  description: `Hand work to your agents by dragging it onto them – each agent previews its new “busy until” time, or switch to Auto and every new task goes to whoever is free first`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-V6j80N0E.jsx"), __vite__mapDeps([81, 1, 2, 3, 82]))),
  loadSource: () => r(() => import("./component-C4JJselr.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-zsx878sd.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DNxPbueK.jsx"), __vite__mapDeps([83, 1, 2, 3, 82]))),
    loadSource: () => r(() => import("./component.clean-CEwHmLzb.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Pqz2BG28.jsx").then(e => e.docs), [])
  },
  added: `2026-10-17T18:00:00+02:00`,
  order: 1,
  pro: true
};
const ot = n({
  entry: () => st
});
var st = {
  slug: `dropzone`,
  name: `Dropzone`,
  description: `Drag files in and watch them upload – fanning documents, colored type badges, progress with time left, errors with retry`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-BBMr4ztO.jsx"), __vite__mapDeps([84, 1, 2, 3, 85]))),
  loadSource: () => r(() => import("./component-CS4yLRuV.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CEAyQswo.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BtR7iQdY.jsx"), __vite__mapDeps([86, 1, 2, 3, 85]))),
    loadSource: () => r(() => import("./component.clean-ISS8Q3NK.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BnqtWD6T.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T14:43:00+02:00`,
  order: 0,
  pro: true
};
const ct = n({
  entry: () => lt
});
var lt = {
  slug: `email-draft`,
  name: `Email Draft`,
  description: `Agent-written email for review – switch recipient and tone, edit inline, remove the attachment, send or discard with undo`,
  category: `Cards`,
  Preview: b.lazy(() => r(() => import("./demo-CQRf-Cg5.jsx"), __vite__mapDeps([87, 1, 2, 3, 88]))),
  loadSource: () => r(() => import("./component-CA8MD8Pb.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DvG6MyGO.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CjJwmC-8.jsx"), __vite__mapDeps([89, 1, 2, 3, 88]))),
    loadSource: () => r(() => import("./component.clean-BQx6n54n.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CSmepD-w.jsx").then(e => e.docs), [])
  },
  added: `2026-10-04T20:28:00+02:00`,
  order: 3
};
const ut = n({
  entry: () => dt
});
var dt = {
  slug: `experiment-card`,
  name: `Experiment Card`,
  description: `An A/B test in two lines that quietly unfolds on hover – variants linked to a tiny chart, a metric switch with rolling numbers, and a winner you pick with a click`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-ik_0XYps.jsx"), __vite__mapDeps([90, 1, 2, 3, 91]))),
  loadSource: () => r(() => import("./component-x34Rnmkd.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-4mTBCgRQ.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Vp-K1jMG.jsx"), __vite__mapDeps([92, 1, 2, 3, 91]))),
    loadSource: () => r(() => import("./component.clean-JBe9bepD.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BMZW7XW_.jsx").then(e => e.docs), [])
  },
  added: `2026-10-12T10:30:00+02:00`,
  order: 1,
  pro: true
};
const ft = n({
  entry: () => pt
});
var pt = {
  slug: `filter-menu`,
  name: `Filter Menu`,
  description: `Grouped filters with removable chips, collapsible checkbox groups, Clear all and full keyboard control`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-BkxWHDVt.jsx"), __vite__mapDeps([93, 3, 2, 94, 1, 95]))),
  loadSource: () => r(() => import("./component-DA4nGpsg.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BAeK2YxB.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Djfm83dS.jsx"), __vite__mapDeps([96, 1, 2, 3, 95]))),
    loadSource: () => r(() => import("./component.clean-g0Mu7KP8.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BHAk7JVw.jsx").then(e => e.docs), [])
  },
  added: `2026-10-04T20:10:00+02:00`,
  order: 2
};
const mt = n({
  entry: () => ht
});
var ht = {
  slug: `inline-diff`,
  name: `Inline Diff`,
  description: `AI edits to prose shown inline – struck and added words you accept or reject one by one, with keys, a popover and undo`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-Y9Qip8LJ.jsx"), __vite__mapDeps([97, 1, 2, 3, 98, 99]))),
  loadSource: () => r(() => import("./component-DcePCLLi.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B2DLF_SS.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BXz9gUDp.jsx"), __vite__mapDeps([100, 1, 2, 3, 99]))),
    loadSource: () => r(() => import("./component.clean-DiUTkznR.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BcLvHkbg.jsx").then(e => e.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 4,
  pro: true
};
const gt = n({
  entry: () => _t
});
var _t = {
  slug: `integration-picker`,
  name: `Integration Picker`,
  description: `Integrations page of a command menu – search, a list of services and the picked one with its connection on two tiles`,
  category: `Navigation`,
  Preview: b.lazy(() => r(() => import("./demo-5-hgQYhm.jsx"), __vite__mapDeps([101, 1, 2, 3, 102]))),
  loadSource: () => r(() => import("./component-o-R9Codt.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BF4_1L0x.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CPhhQKKr.jsx"), __vite__mapDeps([103, 1, 2, 3, 102]))),
    loadSource: () => r(() => import("./component.clean-LFzR0Bzq.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-tUSra5Eq.jsx").then(e => e.docs), [])
  },
  added: `2026-10-07T22:20:00+02:00`,
  order: 1,
  pro: true
};
const vt = n({
  entry: () => yt
});
var yt = {
  slug: `integration-settings`,
  name: `Integration Settings`,
  description: `Settings card for a connected service – on/off switch, API key, validated site address, time zone and a save bar`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-Dxm1xr9_.jsx"), __vite__mapDeps([104, 1, 2, 3, 105]))),
  loadSource: () => r(() => import("./component-Bjr5P8jy.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-subIR2Oi.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CTC16fNW.jsx"), __vite__mapDeps([106, 1, 2, 3, 105]))),
    loadSource: () => r(() => import("./component.clean-BUrOVrhl.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Q5m9NBRf.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 1,
  pro: true
};
const bt = n({
  entry: () => xt
});
var xt = {
  slug: `kpi-chart`,
  name: `KPI Chart`,
  description: `Metric card with a multi-line chart and a tooltip that follows the pointer`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-BQ61UvP8.jsx"), __vite__mapDeps([107, 3, 2, 108, 1, 109]))),
  loadSource: () => r(() => import("./component-Jgn6z6mZ.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Dde47EwE.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B4-Re8fT.jsx"), __vite__mapDeps([110, 1, 2, 3, 109]))),
    loadSource: () => r(() => import("./component.clean-BKIbnoSt.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DG9GSNHk.jsx").then(e => e.docs), [])
  },
  order: 1,
  pro: true
};
const St = n({
  entry: () => Ct
});
var Ct = {
  slug: `memory-panel`,
  name: `Memory Panel`,
  description: `What the assistant remembers about you, grouped and editable – a master switch, category filters, and on every memory edit in place, pause or forget with Undo on the tray`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-CEgv5bR9.jsx"), __vite__mapDeps([111, 1, 2, 3, 112]))),
  loadSource: () => r(() => import("./component-D7aihq6a.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BYw0IeXU.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-C1W0NbsT.jsx"), __vite__mapDeps([113, 1, 2, 3, 112]))),
    loadSource: () => r(() => import("./component.clean-CyzFAbzv.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DIZNujLU.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
const wt = n({
  entry: () => Tt
});
var Tt = {
  slug: `message-actions`,
  name: `Message Actions`,
  description: `The quiet bar under an AI message – copy turns into a check, regenerate spins and unfolds a version switcher, thumbs pop and ask why, read aloud becomes a tiny equalizer`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-CgV2euur.jsx"), __vite__mapDeps([114, 1, 2, 3, 115]))),
  loadSource: () => r(() => import("./component-j9tATXkO.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DHZEMMUR.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-jqs229XM.jsx"), __vite__mapDeps([116, 1, 2, 3, 115]))),
    loadSource: () => r(() => import("./component.clean-Dh5NyMar.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-7a_3RgBj.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T16:00:00+02:00`,
  order: 1,
  pro: false
};
const Et = n({
  entry: () => Dt
});
var Dt = {
  slug: `model-picker`,
  name: `Model Picker`,
  description: `The model menu of an AI chat – point at a model and its speed, quality and cost bars fill, switch on extended thinking and its effort unfolds, while the tray rolls the first-token time and price`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-C580yDTY.jsx"), __vite__mapDeps([117, 1, 2, 3, 118]))),
  loadSource: () => r(() => import("./component-BicykQ1s.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B2vZk3kt.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B7cgzOPZ.jsx"), __vite__mapDeps([119, 1, 2, 3, 118]))),
    loadSource: () => r(() => import("./component.clean-O4r9_IHP.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BaZCBKT8.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
const Ot = n({
  entry: () => kt
});
var kt = {
  slug: `notification-stack`,
  name: `Notification Stack`,
  description: `Notice cards stacked behind each other – dismiss the front one to reveal the next`,
  category: `Feedback`,
  Preview: b.lazy(() => r(() => import("./demo-RSBM-GoA.jsx"), __vite__mapDeps([120, 1, 2, 3, 121]))),
  loadSource: () => r(() => import("./component-gA3RoTWK.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Y8kxxKKu.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-gBQjVTxc.jsx"), __vite__mapDeps([122, 1, 2, 3, 121]))),
    loadSource: () => r(() => import("./component.clean-DJKRjQ7k.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DzYWfmI1.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 6
};
const At = n({
  entry: () => jt
});
var jt = {
  slug: `otp-input`,
  name: `OTP Input`,
  description: `The verification code field done right – a gliding focus ring, paste and SMS autofill, a calm shake on errors and a morph into Verified`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-BoVVleq1.jsx"), __vite__mapDeps([123, 1, 2, 3, 124]))),
  loadSource: () => r(() => import("./component-CDqIdVLz.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BNtW5zDz.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-SPg51xTG.jsx"), __vite__mapDeps([125, 1, 2, 3, 124]))),
    loadSource: () => r(() => import("./component.clean-DxVBY7aC.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-Gin_1k8r.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T17:53:00+02:00`,
  order: 0
};
const Mt = n({
  entry: () => Nt
});
var Nt = {
  slug: `permission-request`,
  name: `Permission Request`,
  description: `An agent asks for one specific right – who, why and exactly what will happen – and you allow it once, for an hour or always; then it folds into one line with the time left and Revoke`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-B1zzQqO2.jsx"), __vite__mapDeps([126, 1, 2, 3, 127]))),
  loadSource: () => r(() => import("./component-COkht5bW.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BZMuWE3V.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DKsx9U9O.jsx"), __vite__mapDeps([128, 1, 2, 3, 127]))),
    loadSource: () => r(() => import("./component.clean-CZdJFe3o.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CcOqdgxq.jsx").then(e => e.docs), [])
  },
  added: `2026-10-18T12:00:00+02:00`,
  order: 1,
  pro: true
};
const Pt = n({
  entry: () => Ft
});
var Ft = {
  slug: `profile-menu`,
  name: `Profile Menu`,
  description: `Account card with the signed-in user, menu actions and profile setup progress`,
  category: `Navigation`,
  Preview: b.lazy(() => r(() => import("./demo-d_AV0tPL.jsx"), __vite__mapDeps([129, 1, 2, 3, 130]))),
  loadSource: () => r(() => import("./component-B655DKtJ.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-C8QFU_GC.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Du4BhTGQ.jsx"), __vite__mapDeps([131, 1, 2, 3, 130]))),
    loadSource: () => r(() => import("./component.clean-Bg6CvdjJ.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-H8K3PE8_.jsx").then(e => e.docs), [])
  },
  order: 1
};
const It = n({
  entry: () => Lt
});
var Lt = {
  slug: `progress-tracker`,
  name: `Progress Tracker`,
  description: `Onboarding checklist with an animated progress bar, ticks that draw themselves and auto play`,
  category: `Feedback`,
  Preview: b.lazy(() => r(() => import("./demo-BKqcXOSN.jsx"), __vite__mapDeps([132, 1, 2, 3, 133]))),
  loadSource: () => r(() => import("./component-4AUM-pc3.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CaD1NYxe.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CQ9Mgt2p.jsx"), __vite__mapDeps([134, 1, 2, 3, 133]))),
    loadSource: () => r(() => import("./component.clean-yoynJ5MU.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CyqSWI06.jsx").then(e => e.docs), [])
  },
  order: 3
};
const Rt = n({
  entry: () => zt
});
var zt = {
  slug: `project-card`,
  name: `Project Card`,
  description: `A two-line project summary that quietly unfolds on hover – a progress ring with one segment per subtask, a people filter and a status picker, all linked by hover`,
  category: `Cards`,
  Preview: b.lazy(() => r(() => import("./demo-9sHHhTyA.jsx"), __vite__mapDeps([135, 1, 2, 3, 136]))),
  loadSource: () => r(() => import("./component-ouJ0vbVn.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B7LDXgsz.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DiU4wbPA.jsx"), __vite__mapDeps([137, 1, 2, 3, 136]))),
    loadSource: () => r(() => import("./component.clean-Bkj7cENz.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BzBRkLoA.jsx").then(e => e.docs), [])
  },
  added: `2026-10-10T15:20:00+02:00`,
  order: 1,
  pro: true
};
const Bt = n({
  entry: () => Vt
});
var Vt = {
  slug: `prompt-library`,
  name: `Prompt Library`,
  description: `Saved prompt templates with variables – type straight into the sentence, watch the finished prompt assemble below, and use it once every variable is filled`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-CctwMXFR.jsx"), __vite__mapDeps([138, 1, 2, 3, 139]))),
  loadSource: () => r(() => import("./component-irX2Z2jz.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BkEThM39.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DRfoB4wl.jsx"), __vite__mapDeps([140, 1, 2, 3, 139]))),
    loadSource: () => r(() => import("./component.clean-iuex-cSq.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-pSez6WcC.jsx").then(e => e.docs), [])
  },
  added: `2026-10-14T15:00:00+02:00`,
  order: 1,
  pro: true
};
const Ht = n({
  entry: () => Ut
});
var Ut = {
  slug: `reaction-bar`,
  name: `Reaction Bar`,
  description: `Like, comment, repost and share in one pill – icons pop and fill, counts roll in digit by digit`,
  category: `Buttons`,
  Preview: b.lazy(() => r(() => import("./demo-DlJqXDIq.jsx"), __vite__mapDeps([141, 1, 2, 3, 142]))),
  loadSource: () => r(() => import("./component-DhnR-6x-.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BlXuOLsY.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-1KuFFkG8.jsx"), __vite__mapDeps([143, 1, 2, 3, 142]))),
    loadSource: () => r(() => import("./component.clean-Czoq8jHQ.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BIHx13f2.jsx").then(e => e.docs), [])
  },
  added: `2026-10-04T10:00:00+02:00`,
  order: 2
};
const Wt = n({
  entry: () => Gt
});
var Gt = {
  slug: `segmented-control`,
  name: `Segmented Control`,
  description: `Switch between two to six options – a raised pill or underline that glides, stretches a little and can be dragged across, with icons, counts and badges`,
  category: `Navigation`,
  Preview: b.lazy(() => r(() => import("./demo-BzK_zDAD.jsx"), __vite__mapDeps([144, 1, 2, 3, 145, 146]))),
  loadSource: () => r(() => import("./component-D8XzTnaf.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DnR5fqUI.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-D1uXYCFG.jsx"), __vite__mapDeps([147, 1, 2, 3, 146]))),
    loadSource: () => r(() => import("./component.clean-CmUvwP9C.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DiUhGaq-.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T15:42:00+02:00`,
  order: 0
};
const Kt = n({
  entry: () => qt
});
var qt = {
  slug: `setup-guide`,
  name: `Setup Guide`,
  description: `Onboarding panel with a progress bar and collapsible task groups that strike through when done`,
  category: `Feedback`,
  Preview: b.lazy(() => r(() => import("./demo-Cb1j7tKz.jsx"), __vite__mapDeps([148, 1, 2, 3, 149, 150]))),
  loadSource: () => r(() => import("./component-DK30rsxS.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CiCBMHAb.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DgcWwiZH.jsx"), __vite__mapDeps([151, 1, 2, 3, 150]))),
    loadSource: () => r(() => import("./component.clean-OCK50Cmo.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CWU7X6cT.jsx").then(e => e.docs), [])
  },
  order: 4,
  pro: true
};
const Jt = n({
  entry: () => Yt
});
var Yt = {
  slug: `smart-recommendation`,
  name: `Smart Recommendation`,
  description: `Suggestion card with a confidence signal, alternatives to switch to and accept with undo`,
  category: `Cards`,
  Preview: b.lazy(() => r(() => import("./demo-Ed3S7lvS.jsx"), __vite__mapDeps([152, 1, 2, 3, 153]))),
  loadSource: () => r(() => import("./component-BrneHT_E.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bj9wwWM5.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CnpU6JZL.jsx"), __vite__mapDeps([154, 1, 2, 3, 153]))),
    loadSource: () => r(() => import("./component.clean-BgLR5R6h.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-DAMwFsKO.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 2
};
const Xt = n({
  entry: () => Zt
});
var Zt = {
  slug: `stepper-form`,
  name: `Stepper Form`,
  description: `A multi-step flow for onboarding and setup – steps that fill and check off, sliding steps, a card that morphs to each step, inline validation and a success state`,
  category: `Inputs`,
  Preview: b.lazy(() => r(() => import("./demo-BOLhhfTT.jsx"), __vite__mapDeps([155, 1, 2, 3, 156]))),
  loadSource: () => r(() => import("./component-C81bLSK9.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-C4pAsv52.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BYDkomFg.jsx"), __vite__mapDeps([157, 1, 2, 3, 156]))),
    loadSource: () => r(() => import("./component.clean-DCdgppww.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CGankNEa.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T17:52:00+02:00`,
  order: 0,
  pro: true
};
const Qt = n({
  entry: () => $t
});
var $t = {
  slug: `thinking-loader`,
  name: `Thinking Loader`,
  description: `A small working pill for AI replies – an eight-ray spinner and a shimmering label that rolls through phases and settles on a check`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-qJGH2Gjh.jsx"), __vite__mapDeps([158, 1, 2, 3, 159, 160]))),
  loadSource: () => r(() => import("./component-DrU1Ef96.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CqEa36vT.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DWvTXnKE.jsx"), __vite__mapDeps([161, 1, 2, 3, 160]))),
    loadSource: () => r(() => import("./component.clean-CkLznOln.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-O5cvsaD9.jsx").then(e => e.docs), [])
  },
  added: `2026-10-09T22:55:00+02:00`,
  order: 3
};
const en = n({
  entry: () => tn
});
var tn = {
  slug: `thinking-state`,
  name: `Thinking State`,
  description: `AI working panel with a live timer, searched sources and thinking steps that appear one by one`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-sabUvR7r.jsx"), __vite__mapDeps([162, 3, 2, 163, 1, 164]))),
  loadSource: () => r(() => import("./component-G7HptHGl.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DQUTX2jQ.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CXxA6VEx.jsx"), __vite__mapDeps([165, 1, 2, 3, 164]))),
    loadSource: () => r(() => import("./component.clean-DpWH1oax.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-6__65Xac.jsx").then(e => e.docs), [])
  },
  order: 2,
  pro: true
};
const nn = n({
  entry: () => rn
});
var rn = {
  slug: `tips-panel`,
  name: `Tips Panel`,
  description: `Grid of short tips with one action each – taken tips turn into a done state`,
  category: `Cards`,
  Preview: b.lazy(() => r(() => import("./demo-D2Q4vYDw.jsx"), __vite__mapDeps([166, 1, 2, 3, 167]))),
  loadSource: () => r(() => import("./component-DHMdjTdE.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DiX_OeMs.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-Bfu_rP8L.jsx"), __vite__mapDeps([168, 1, 2, 3, 167]))),
    loadSource: () => r(() => import("./component.clean-BVT04wSu.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-BRNY_KgW.jsx").then(e => e.docs), [])
  },
  added: `2026-10-03`,
  order: 1
};
const D = n({
  entry: () => an
});
var an = {
  slug: `toaster`,
  name: `Toaster`,
  description: `Calm toasts from anywhere – a stack that fans out on hover, promise toasts that morph from spinner to check, swipe to dismiss`,
  category: `Feedback`,
  Preview: b.lazy(() => r(() => import("./demo-D8pZHeij.jsx"), __vite__mapDeps([169, 1, 2, 3, 170]))),
  loadSource: () => r(() => import("./component-C7ROz4iL.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CQfMJLpp.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-CtdFgWee.jsx"), __vite__mapDeps([171, 1, 2, 3, 170]))),
    loadSource: () => r(() => import("./component.clean-DSitrADN.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CflJ0oKJ.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T15:40:00+02:00`,
  order: 0,
  pro: true
};
const on = n({
  entry: () => sn
});
var sn = {
  slug: `tool-call-card`,
  name: `Tool Call Card`,
  description: `An agent's tool call in one line – live timer, status and summary, folds open to highlighted arguments and result with copy, retry on errors and a group that sums them up`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-C2oxSuna.jsx"), __vite__mapDeps([172, 1, 2, 3, 173, 174]))),
  loadSource: () => r(() => import("./component-DOfHRYAO.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-I28H9on4.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-q2ZwGlZu.jsx"), __vite__mapDeps([175, 1, 2, 3, 174]))),
    loadSource: () => r(() => import("./component.clean-DoWPdBku.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-vn8R5wlP.jsx").then(e => e.docs), [])
  },
  added: `2026-10-09T23:29:00+02:00`,
  order: 1
};
const cn = n({
  entry: () => ln
});
var ln = {
  slug: `trace-waterfall`,
  name: `Trace Waterfall`,
  description: `Where the time and money of an agent run go – every LLM call, tool call and sub-agent as a bar on a live timeline, with tokens and cost per step, the slowest call marked and branches that fold into their parent`,
  category: `Agents`,
  Preview: b.lazy(() => r(() => import("./demo-ClS58yMQ.jsx"), __vite__mapDeps([176, 1, 2, 3, 177]))),
  loadSource: () => r(() => import("./component-MnuLboKN.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CPzCd5SO.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-DbCPeis2.jsx"), __vite__mapDeps([178, 1, 2, 3, 177]))),
    loadSource: () => r(() => import("./component.clean-uYI34p6t.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-CMKNDwWl.jsx").then(e => e.docs), [])
  },
  added: `2026-10-20T10:00:00+02:00`,
  order: 1,
  pro: true
};
const un = n({
  entry: () => dn
});
var dn = {
  slug: `usage-meter`,
  name: `Usage Meter`,
  description: `Plan usage and AI credits – a stacked credits meter by category, daily sparkline, limits and a button that speaks up near the limit`,
  category: `Data display`,
  Preview: b.lazy(() => r(() => import("./demo-izlk0-DS.jsx"), __vite__mapDeps([179, 1, 2, 3, 180, 181]))),
  loadSource: () => r(() => import("./component-BEShq_nD.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CeOV3oLU.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-BjDeSoUM.jsx"), __vite__mapDeps([182, 1, 2, 3, 181]))),
    loadSource: () => r(() => import("./component.clean-DZEPLsCQ.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-C76Xpqc0.jsx").then(e => e.docs), [])
  },
  added: `2026-10-08T17:51:00+02:00`,
  order: 0,
  pro: true
};
const fn = n({
  entry: () => pn
});
var pn = {
  slug: `writing-assistant`,
  name: `Writing Assistant`,
  description: `AI chat card with a soft gradient glow, suggestions, streaming replies and live voice dictation`,
  category: `Chat`,
  Preview: b.lazy(() => r(() => import("./demo-BhVeTwOS.jsx"), __vite__mapDeps([183, 1, 2, 3, 184]))),
  loadSource: () => r(() => import("./component-DZ0boXyY.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-cbxE_Tr5.jsx").then(e => e.docs), []),
  clean: {
    Preview: b.lazy(() => r(() => import("./demo.clean-B-ER_Luk.jsx"), __vite__mapDeps([185, 1, 2, 3, 184]))),
    loadSource: () => r(() => import("./component.clean-D2uIa_Gl.jsx").then(e => e.default), []),
    loadDocs: () => r(() => import("./docs.clean-B6YbLikW.jsx").then(e => e.docs), [])
  },
  added: `2026-10-04T20:14:00+02:00`,
  order: 3,
  pro: true
};
const mn = n({
  entry: () => hn
});
var hn = {
  slug: `agent-gallery`,
  name: `Agent Gallery`,
  description: `Slim gradient panels with one open product screen in the middle – pick a panel and it glides open`,
  category: `Feature sections`,
  Preview: b.lazy(() => r(() => import("./demo-Dx1zk5ox.jsx"), __vite__mapDeps([186, 1, 2, 3, 187]))),
  loadSource: () => r(() => import("./component-DFTWGCQh.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BpUkSURm.jsx").then(e => e.docs), []),
  added: `2026-10-04T20:32:00+02:00`,
  order: 2,
  pro: true
};
const gn = n({
  entry: () => _n
});
var _n = {
  slug: `ai-workspace`,
  name: `AI Workspace`,
  description: `Complete assistant app – sidebar, welcome, streaming chat and projects, built on the Chat Composer`,
  category: `Productivity`,
  Preview: b.lazy(() => r(() => import("./demo-CZJ2T4nU.jsx"), __vite__mapDeps([188, 1, 2, 3, 47, 189]))),
  loadSource: () => r(() => import("./component-BZVoUx2k.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DP4g1Nn7.jsx").then(e => e.docs), []),
  added: `2026-10-04T11:30:00+02:00`,
  order: 1,
  pro: true
};
const vn = n({
  entry: () => yn
});
var yn = {
  slug: `app-directory`,
  name: `App Directory`,
  description: `Browse, search and connect integrations – categories, filters and app cards with a connect flow`,
  category: `Integrations`,
  Preview: b.lazy(() => r(() => import("./demo-BiwOrW2x.jsx"), __vite__mapDeps([190, 1, 2, 3, 191]))),
  loadSource: () => r(() => import("./component-CLZvFUCF.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bi_YQg2x.jsx").then(e => e.docs), []),
  added: `2026-10-03`,
  order: 1,
  pro: true
};
const bn = n({
  entry: () => xn
});
var xn = {
  slug: `client-context`,
  name: `Client Context`,
  description: `A client workspace with live numbers and a shared context timeline – switch clients, search, filter and add notes or files`,
  category: `Productivity`,
  Preview: b.lazy(() => r(() => import("./demo-rS721rJa.jsx"), __vite__mapDeps([192, 1, 2, 3, 193]))),
  loadSource: () => r(() => import("./component-CtS7yavp.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-D418_9B_.jsx").then(e => e.docs), []),
  added: `2026-10-05T15:50:00+02:00`,
  order: 0,
  pro: true
};
const Sn = n({
  entry: () => Cn
});
var Cn = {
  slug: `invoice-credit`,
  name: `Invoice & Credit Note`,
  description: `An invoice and its credit note stacked like paper – switch between them, pick lines to credit, adjust amounts and issue`,
  category: `Billing`,
  Preview: b.lazy(() => r(() => import("./demo-D1arByOa.jsx"), __vite__mapDeps([194, 1, 2, 3, 195]))),
  loadSource: () => r(() => import("./component-CWGZCMX-.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BUxqzOgh.jsx").then(e => e.docs), []),
  added: `2026-10-04T20:52:00+02:00`,
  order: 0,
  pro: true
};
const wn = n({
  entry: () => Tn
});
var Tn = {
  slug: `kpi-board`,
  name: `KPI Board`,
  description: `The top of a dashboard – three trend cards, an overview chart that compares this period with the last, and a focus card; hover shows any day's value and every number rolls when the range changes`,
  category: `Analytics`,
  Preview: b.lazy(() => r(() => import("./demo-mNpCRsfS.jsx"), __vite__mapDeps([196, 1, 2, 3, 197]))),
  loadSource: () => r(() => import("./component-L0LpkbiF.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-D5diAW3h.jsx").then(e => e.docs), []),
  added: `2026-10-12T20:00:00+02:00`,
  order: 1,
  pro: true
};
const En = n({
  entry: () => Dn
});
var Dn = {
  slug: `logo-marquee`,
  name: `Logo Marquee`,
  description: `The endless “Trusted by” strip – a seamless loop that eases to a stop on hover, scrubs with inertia and lifts the hovered logo to colour`,
  category: `Social proof`,
  Preview: b.lazy(() => r(() => import("./demo-Bp-um2Aj.jsx"), __vite__mapDeps([198, 1, 2, 3, 199]))),
  loadSource: () => r(() => import("./component-CXPyG-44.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-6bqyeHxu.jsx").then(e => e.docs), []),
  added: `2026-10-08T15:44:00+02:00`,
  order: 0,
  pro: false
};
const On = n({
  entry: () => kn
});
var kn = {
  slug: `metrics-dashboard`,
  name: `Metrics Dashboard`,
  description: `Sales overview – KPI cards pick the metric, one chart switches between dotted line and bars, with top products and channels`,
  category: `Analytics`,
  Preview: b.lazy(() => r(() => import("./demo-Ytbb4Swi.jsx"), __vite__mapDeps([200, 1, 2, 3, 201]))),
  loadSource: () => r(() => import("./component-OoeQadAf.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-ZdpK_fwc.jsx").then(e => e.docs), []),
  added: `2026-10-04T18:59:00+02:00`,
  order: 0,
  pro: true
};
const An = n({
  entry: () => jn
});
var jn = {
  slug: `pricing-plans`,
  name: `Pricing Plans`,
  description: `Pricing section with a monthly / yearly switch, three plan cards and collapsible details`,
  category: `Pricing`,
  Preview: b.lazy(() => r(() => import("./demo-DWd1ZKX0.jsx"), __vite__mapDeps([202, 1, 2, 3, 203]))),
  loadSource: () => r(() => import("./component-BeLkFd64.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-KUHWR962.jsx").then(e => e.docs), []),
  order: 0,
  pro: true
};
const Mn = n({
  entry: () => Nn
});
var Nn = {
  slug: `task-board`,
  name: `Task Board`,
  description: `Kanban board with drag and drop, quick add, a detail panel, search, label filters and a compact view`,
  category: `Productivity`,
  Preview: b.lazy(() => r(() => import("./demo-BbZ2lqOk.jsx"), __vite__mapDeps([204, 1, 2, 3, 36, 205]))),
  loadSource: () => r(() => import("./component-Cuyk80dR.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BQ4CPEZB.jsx").then(e => e.docs), []),
  added: `2026-10-03`,
  order: 0,
  pro: true
};
const Pn = n({
  entry: () => Fn
});
var Fn = {
  slug: `testimonial-wall`,
  name: `Testimonial Wall`,
  description: `The landing-page wall of quotes – columns that scroll endlessly in opposite directions, ease to a stop on hover and scrub with inertia`,
  category: `Social proof`,
  Preview: b.lazy(() => r(() => import("./demo-DrrNKEd7.jsx"), __vite__mapDeps([206, 1, 2, 3, 207]))),
  loadSource: () => r(() => import("./component-DEfvlqwK.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DNt7L4gM.jsx").then(e => e.docs), []),
  added: `2026-10-08T17:54:00+02:00`,
  order: 0,
  pro: false
};
const In = n({
  entry: () => Ln
});
var Ln = {
  slug: `agent-team`,
  name: `Agent Team`,
  description: `A prompt types itself and branches out into three agents, each with a role and overlapping tool logos`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-BtlH6dH8.jsx"), __vite__mapDeps([208, 1, 2, 3, 209]))),
  loadSource: () => r(() => import("./component-DYurEycN.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BNtHN1ia.jsx").then(e => e.docs), []),
  order: 10,
  added: `2026-10-04T18:21:00+02:00`
};
const Rn = n({
  entry: () => zn
});
var zn = {
  slug: `cover-flow`,
  name: `Cover Flow`,
  description: `Browse covers in 3D – drag, flick or scrub the row, it springs to the nearest cover; images drift in their frames over a soft reflection`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-C2jfF4UB.jsx"), __vite__mapDeps([210, 1, 2, 3, 211]))),
  loadSource: () => r(() => import("./component-DvIszmxu.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-YCamylwB.jsx").then(e => e.docs), []),
  added: `2026-10-09T23:05:00+02:00`,
  order: 0
};
const Bn = n({
  entry: () => Vn
});
var Vn = {
  slug: `empty-calendar`,
  name: `Empty Calendar`,
  description: `Stack of calendar cards marked empty, fanning out on hover`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-MXjIQshC.jsx"), __vite__mapDeps([212, 1, 2, 3, 213]))),
  loadSource: () => r(() => import("./component-PJ290Npx.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BwxiOt3k.jsx").then(e => e.docs), []),
  order: 1
};
const Hn = n({
  entry: () => Un
});
var Un = {
  slug: `enrichment-orbit`,
  name: `Enrichment Orbit`,
  description: `Grok tile inside two rings with comets and data nodes orbiting around it`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-CU49Fdlm.jsx"), __vite__mapDeps([214, 1, 2, 3, 215]))),
  loadSource: () => r(() => import("./component-fn3yfRgp.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B44eJjOH.jsx").then(e => e.docs), []),
  order: 5
};
const Wn = n({
  entry: () => Gn
});
var Gn = {
  slug: `frost-cloud`,
  name: `Frost Cloud`,
  description: `A frosted white cloud with eyes cut out of it, on a red-orange or blue sky – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-DrDu-VuE.jsx"), __vite__mapDeps([216, 1, 2, 3, 217]))),
  loadSource: () => r(() => import("./component-CujPjqAK.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BkosQpJv.jsx").then(e => e.docs), []),
  order: 0,
  added: `2026-10-08T12:40:00+02:00`
};
const Kn = n({
  entry: () => qn
});
var qn = {
  slug: `ghosted-chat`,
  name: `Ghosted Chat`,
  description: `Unanswered chat messages marked as read, with a thumbs-down reply on hover`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-Cm2FVMWj.jsx"), __vite__mapDeps([218, 1, 2, 3, 219]))),
  loadSource: () => r(() => import("./component-DmIFsdg6.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BHILhaci.jsx").then(e => e.docs), []),
  order: 3
};
const Jn = n({
  entry: () => Yn
});
var Yn = {
  slug: `glass-folder`,
  name: `Glass Folder`,
  description: `Glassy blue folder with documents behind a frosted pocket that tips open on hover`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-VtcZhlFb.jsx"), __vite__mapDeps([220, 3, 2, 221]))),
  loadSource: () => r(() => import("./component-DXXuHFnW.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DSLhnq5S.jsx").then(e => e.docs), []),
  order: 7,
  pro: true,
  added: `2026-10-04T14:30:00+02:00`
};
const Xn = n({
  entry: () => Zn
});
var Zn = {
  slug: `glow-cloud`,
  name: `Glow Cloud`,
  description: `A glowing cloud with eyes in blue or red-orange – it floats, turns to look around, blinks, follows the pointer and bounces with a wink when clicked`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-Cm8kSHcX.jsx"), __vite__mapDeps([222, 1, 2, 3, 223]))),
  loadSource: () => r(() => import("./component-CaX99EJw.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B3la3x8y.jsx").then(e => e.docs), []),
  order: 0,
  added: `2026-10-08T12:39:00+02:00`
};
const Qn = n({
  entry: () => $n
});
var $n = {
  slug: `glow-keyboard`,
  name: `Glow Keyboard`,
  description: `AI chat input that types itself over a glass keyboard – every key press sends a wave up the gradient floor`,
  category: `Product scenes`,
  Preview: b.lazy(() => r(() => import("./demo-CfD9afHB.jsx"), __vite__mapDeps([224, 1, 2, 3, 225]))),
  loadSource: () => r(() => import("./component-DPcOx-S-.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BnO3I4vF.jsx").then(e => e.docs), []),
  order: 0,
  pro: true,
  added: `2026-10-06T19:00:00+02:00`
};
const er = n({
  entry: () => tr
});
var tr = {
  slug: `integration-beam`,
  name: `Integration Beam`,
  description: `Your product between the tools it connects – light pulses flow along curved beams, hover to focus a tool, click to pause it`,
  category: `Product scenes`,
  Preview: b.lazy(() => r(() => import("./demo-B_Bc7Zla.jsx"), __vite__mapDeps([226, 1, 2, 3, 227]))),
  loadSource: () => r(() => import("./component-B2U-I8IC.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DrI7Fr6r.jsx").then(e => e.docs), []),
  order: 0,
  added: `2026-10-08T15:43:00+02:00`
};
const nr = n({
  entry: () => rr
});
var rr = {
  slug: `integration-flow`,
  name: `Integration Flow`,
  description: `Integration pills rotating along a dashed arc, each beaming its data into a central analysis hub`,
  category: `Product scenes`,
  Preview: b.lazy(() => r(() => import("./demo-CL_ySX-H.jsx"), __vite__mapDeps([228, 1, 2, 3, 229]))),
  loadSource: () => r(() => import("./component-DV8U20np.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DVNki4xQ.jsx").then(e => e.docs), []),
  order: 1,
  pro: true,
  added: `2026-10-04T15:41:00+02:00`
};
const ir = n({
  entry: () => ar
});
var ar = {
  slug: `integration-grid`,
  name: `Integration Grid`,
  description: `Honeycomb-like wall of integration logos around a bright centre tile with your product mark, fading out toward the edges`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-BABw5NIJ.jsx"), __vite__mapDeps([230, 3, 2, 231, 232]))),
  loadSource: () => r(() => import("./component-CIl7yz5m.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-1TxNi_aU.jsx").then(e => e.docs), []),
  order: 11,
  added: `2026-10-04T20:31:00+02:00`
};
const or = n({
  entry: () => sr
});
var sr = {
  slug: `layer-stack`,
  name: `Layer Stack`,
  description: `Isometric stack of five layers with a list beside it – the chosen entry lifts its layer out in color`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-KQRMxKWn.jsx"), __vite__mapDeps([233, 1, 2, 3, 234]))),
  loadSource: () => r(() => import("./component-Dsgd5ZHH.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BWUGRuON.jsx").then(e => e.docs), []),
  order: 9,
  added: `2026-10-04T18:03:00+02:00`
};
const cr = n({
  entry: () => lr
});
var lr = {
  slug: `lead-sourcing`,
  name: `Lead Sourcing`,
  description: `ChatGPT tile linked to Gmail and Grok, with a shine running along the connection`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-BTBcqeeL.jsx"), __vite__mapDeps([235, 1, 2, 3, 236]))),
  loadSource: () => r(() => import("./component-DKl1mEra.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BEdCATSE.jsx").then(e => e.docs), []),
  order: 4
};
const ur = n({
  entry: () => dr
});
var dr = {
  slug: `logo-cluster`,
  name: `Logo Cluster`,
  description: `Your mark on a white disc in the middle – company logos bounce out of it and settle around it`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-CkkSZhS9.jsx"), __vite__mapDeps([237, 1, 2, 3, 238]))),
  loadSource: () => r(() => import("./component-BE1e5ouD.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-C_UZC7kN.jsx").then(e => e.docs), []),
  order: 0,
  added: `2026-10-07T15:00:00+02:00`
};
const fr = n({
  entry: () => pr
});
var pr = {
  slug: `model-wheel`,
  name: `Model Wheel`,
  description: `AI model names on a turning drum – the rows bend away at the edges and each model lands on a soft gray fill`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-OZULToi6.jsx"), __vite__mapDeps([239, 1, 2, 3, 240]))),
  loadSource: () => r(() => import("./component-hDQpocSR.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-ubQm_MNq.jsx").then(e => e.docs), []),
  order: 0,
  added: `2026-10-07T12:00:00+02:00`
};
const mr = n({
  entry: () => hr
});
var hr = {
  slug: `outreach-branches`,
  name: `Outreach Branches`,
  description: `Lines branching out to Gmail, Slack and Notion with colored pulses flowing down`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-D-FldunI.jsx"), __vite__mapDeps([241, 1, 2, 3, 242]))),
  loadSource: () => r(() => import("./component-DihFuV2a.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CgriwkwB.jsx").then(e => e.docs), []),
  order: 6,
  pro: true
};
const gr = n({
  entry: () => _r
});
var _r = {
  slug: `project-flow`,
  name: `Project Flow`,
  description: `Animated scene of a client task branching into subtasks, notes and assigned roles`,
  category: `Product scenes`,
  Preview: b.lazy(() => r(() => import("./demo-Cwdm4ytX.jsx"), __vite__mapDeps([243, 1, 2, 3, 244]))),
  loadSource: () => r(() => import("./component-CEv4fZRb.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DF3ihqsX.jsx").then(e => e.docs), []),
  order: 0,
  pro: true
};
const vr = n({
  entry: () => yr
});
var yr = {
  slug: `region-dach`,
  name: `DACH Region`,
  description: `DACH map with fading neighbours and a pastel band along the border, switchable to the US, China, India, Brazil or Japan`,
  category: `Maps`,
  Preview: b.lazy(() => r(() => import("./demo-CmYYw1tl.jsx"), __vite__mapDeps([245, 1, 2, 3, 246]))),
  loadSource: () => r(() => import("./component-CSUU-7Px.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B_OI8PyY.jsx").then(e => e.docs), []),
  order: 1
};
const br = n({
  entry: () => xr
});
var xr = {
  slug: `side-folder`,
  name: `Side Folder`,
  description: `Glassy blue folder on its side, documents sliding out to the right as the pocket swings open on hover`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-ClUxDNiT.jsx"), __vite__mapDeps([247, 1, 2, 3, 248]))),
  loadSource: () => r(() => import("./component-CSj-h-r4.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BG1aWD2h.jsx").then(e => e.docs), []),
  order: 8,
  added: `2026-10-04T15:00:00+02:00`
};
const Sr = n({
  entry: () => Cr
});
var Cr = {
  slug: `tab-overload`,
  name: `Tab Overload`,
  description: `Overlapping browser windows where the highlight follows the hovered tab`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-CVKU8Uzh.jsx"), __vite__mapDeps([249, 1, 2, 3, 250]))),
  loadSource: () => r(() => import("./component-fYpYKcvB.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Cf87NU-O.jsx").then(e => e.docs), []),
  order: 2
};
const wr = n({
  entry: () => Tr
});
var Tr = {
  slug: `team-invite`,
  name: `Team Invite`,
  description: `Connected teammates – a cursor drags a new one into the empty slot, the line turns solid and they go online`,
  category: `Card illustrations`,
  Preview: b.lazy(() => r(() => import("./demo-cWsVSmbI.jsx"), __vite__mapDeps([251, 1, 2, 3, 252]))),
  loadSource: () => r(() => import("./component-BA2VwGBj.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BtJJaDyI.jsx").then(e => e.docs), []),
  order: 8,
  added: `2026-10-04T17:49:00+02:00`
};
const Er = n({
  entry: () => Dr
});
var Dr = {
  slug: `voice-orb`,
  name: `Voice Orb`,
  description: `The face of a voice assistant – a sphere of dots that breathes, catches sound, collapses into a spinning ring while thinking and ripples when it speaks`,
  category: `Product scenes`,
  Preview: b.lazy(() => r(() => import("./demo-B3RzKcXL.jsx"), __vite__mapDeps([253, 1, 2, 3, 254]))),
  loadSource: () => r(() => import("./component-CEwHmLzb.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B_2rjjD8.jsx").then(e => e.docs), []),
  added: `2026-10-12T12:00:00+02:00`,
  order: 1,
  pro: true
};
const Or = n({
  entry: () => kr
});
var kr = {
  slug: `world-map`,
  name: `World Map Continental`,
  description: `World map with one highlighted continent and a pastel band along its coastline, switchable between all six`,
  category: `Maps`,
  Preview: b.lazy(() => r(() => import("./demo-Q0wmIwEm.jsx"), __vite__mapDeps([255, 1, 2, 3, 256]))),
  loadSource: () => r(() => import("./component-ISS8Q3NK.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B-pCOumb.jsx").then(e => e.docs), []),
  order: 2,
  pro: true
};
const Ar = n({
  entry: () => jr
});
var jr = {
  slug: `agent-chat`,
  name: `Agent Chat`,
  description: `Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-DfzMaoSM.jsx"), __vite__mapDeps([257, 1, 2, 3, 40, 258, 259, 163, 260, 261, 94, 149, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276]))),
  loadSource: () => r(() => import("./component-JBe9bepD.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BxLsAAJw.jsx").then(e => e.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 6,
  pro: true
};
const Mr = n({
  entry: () => Nr
});
var Nr = {
  slug: `agent-run`,
  name: `Agent Run`,
  description: `One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-Cj5VtBEI.jsx"), __vite__mapDeps([277, 1, 2, 3, 13, 26, 40, 98, 159, 173, 258, 267, 260, 261, 94, 149, 268, 269, 270, 278, 272, 273, 279, 274, 280]))),
  loadSource: () => r(() => import("./component-DiUTkznR.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-J0FQBf8r.jsx").then(e => e.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 9,
  pro: true
};
const Pr = n({
  entry: () => Fr
});
var Fr = {
  slug: `analytics`,
  name: `Analytics`,
  description: `Revenue dashboard: key figures, revenue by channel, breakdown, top products and weekly trends`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-DoZvL8St.jsx"), __vite__mapDeps([281, 1, 2, 3, 40, 108, 267, 260, 261, 94, 149, 269, 282, 273, 280, 275, 283]))),
  loadSource: () => r(() => import("./component-LFzR0Bzq.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BLrJfzvH.jsx").then(e => e.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 8,
  pro: true
};
const Ir = n({
  entry: () => Lr
});
var Lr = {
  slug: `app-shell`,
  name: `App Shell Inset`,
  description: `Collapsible sidebar with workspace, menu, projects and account – the frame every screen sits in`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-DEDAzzL5.jsx"), __vite__mapDeps([284, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BUrOVrhl.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Cfk5B1z9.jsx").then(e => e.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 1,
  pro: true
};
const Rr = n({
  entry: () => zr
});
var zr = {
  slug: `app-shell-flat`,
  name: `App Shell Flat`,
  description: `The App Shell laid flat – gray sidebar and an edge-to-edge page, split by a single hairline`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-VapOqTsZ.jsx"), __vite__mapDeps([285, 3, 2, 260, 1, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-BKIbnoSt.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-n3nxXhui.jsx").then(e => e.docs), []),
  added: `2026-10-19T12:00:00+02:00`,
  order: 1,
  pro: true
};
const Br = n({
  entry: () => Vr
});
var Vr = {
  slug: `assistant-home`,
  name: `Assistant Home`,
  description: `AI assistant start page: greeting, prompt box with tools, connected apps and suggestions`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-CdN1C5vO.jsx"), __vite__mapDeps([286, 3, 2, 259, 1, 163, 258, 260, 261, 94, 149, 262, 263, 264, 265, 266]))),
  loadSource: () => r(() => import("./component-CyzFAbzv.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Cdva6Ahi.jsx").then(e => e.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 2,
  pro: true
};
const Hr = n({
  entry: () => Ur
});
var Ur = {
  slug: `crm`,
  name: `CRM`,
  description: `Company list with pipelines, open views as tabs and an editable data table`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-DYRcii43.jsx"), __vite__mapDeps([287, 1, 2, 3, 72, 267, 260, 261, 94, 149, 269, 278, 272, 273, 288, 265, 276, 283]))),
  loadSource: () => r(() => import("./component-O4r9_IHP.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-sV6Exspv.jsx").then(e => e.docs), []),
  added: `2026-10-07T21:00:00+02:00`,
  order: 7,
  pro: true
};
const Wr = n({
  entry: () => Gr
});
var Gr = {
  slug: `evals`,
  name: `Evals`,
  description: `Prompt evaluation dashboard: pass rate by version, reviewable prompt changes and test cases you can re-run`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-BbKQebRQ.jsx"), __vite__mapDeps([289, 1, 2, 3, 40, 98, 108, 145, 267, 260, 261, 94, 149, 268, 263, 273, 279, 266]))),
  loadSource: () => r(() => import("./component-CZdJFe3o.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-B-2N1ZTn.jsx").then(e => e.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 12,
  pro: true
};
const Kr = n({
  entry: () => qr
});
var qr = {
  slug: `files`,
  name: `Folders`,
  description: `Folder overview with tabs, search, sort, grid/list toggle and file templates`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-DFRjCQMT.jsx"), __vite__mapDeps([290, 1, 2, 3, 40, 260, 261, 94, 149, 291]))),
  loadSource: () => r(() => import("./component-Bkj7cENz.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bg0MHHdB.jsx").then(e => e.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 3,
  pro: true
};
const Jr = n({
  entry: () => Yr
});
var Yr = {
  slug: `folder`,
  name: `Folder`,
  description: `Inside one folder: breadcrumbs, file cards with previews, and an empty state`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-OHW76bxc.jsx"), __vite__mapDeps([292, 1, 2, 3, 40, 260, 261, 94, 149, 271, 288, 274, 291]))),
  loadSource: () => r(() => import("./component-iuex-cSq.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bk4Nc0yi.jsx").then(e => e.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 4,
  pro: true
};
const Xr = n({
  entry: () => Zr
});
var Zr = {
  slug: `integrations`,
  name: `Integrations`,
  description: `App directory with a sticky header, categories, search and connect states`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-CIKoqFjv.jsx"), __vite__mapDeps([293, 1, 2, 3, 40, 260, 261, 94, 149]))),
  loadSource: () => r(() => import("./component-OCK50Cmo.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-CqGta5k3.jsx").then(e => e.docs), []),
  added: `2026-10-07T18:00:00+02:00`,
  order: 5,
  pro: true
};
const Qr = n({
  entry: () => $r
});
var $r = {
  slug: `onboarding`,
  name: `Onboarding`,
  description: `First-run flow of an AI workspace: workspace setup, tool connections, team invites and a first agent, with a getting-started checklist`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-Djeoaldi.jsx"), __vite__mapDeps([294, 1, 2, 3, 40, 145, 267, 260, 261, 94, 149, 268, 262, 278, 273, 288]))),
  loadSource: () => r(() => import("./component-DCdgppww.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DKnQ9DNv.jsx").then(e => e.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 11,
  pro: true
};
const ei = n({
  entry: () => ti
});
var ti = {
  slug: `settings-billing`,
  name: `Settings & Billing`,
  description: `Settings page with tabs: workspace, members, API keys and billing with plan, usage, payment method, plan comparison and invoices`,
  category: `App screens`,
  Preview: b.lazy(() => r(() => import("./demo-C8acxvKL.jsx"), __vite__mapDeps([295, 1, 2, 3, 40, 145, 180, 267, 260, 261, 94, 149, 268, 278, 271, 282, 264, 279, 274, 266]))),
  loadSource: () => r(() => import("./component-DpWH1oax.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DR5BTgCD.jsx").then(e => e.docs), []),
  added: `2026-10-10T00:00:00+02:00`,
  order: 10,
  pro: true
};
const ni = n({
  entry: () => ri
});
var ri = {
  slug: `blur-crossfade`,
  name: `Blur Crossfade`,
  description: `Swaps content with a soft blur while the box glides smoothly to the size of what comes next`,
  category: `Transitions`,
  Preview: b.lazy(() => r(() => import("./demo-Ye53Zfy1.jsx"), __vite__mapDeps([296, 1, 2, 3, 297]))),
  loadSource: () => r(() => import("./component-DSitrADN.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Datr-mCn.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
const ii = n({
  entry: () => ai
});
var ai = {
  slug: `gradient-floor`,
  name: `Gradient Floor`,
  description: `A blurred colour gradient that glows up from the bottom edge – two layers that drift and morph`,
  category: `Backgrounds`,
  Preview: b.lazy(() => r(() => import("./demo-B-TgH1P-.jsx"), __vite__mapDeps([298, 1, 2, 3, 299]))),
  loadSource: () => r(() => import("./component-uYI34p6t.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DdQN5WXt.jsx").then(e => e.docs), []),
  added: `2026-10-06T18:30:00+02:00`,
  order: 0,
  pro: true
};
const oi = n({
  entry: () => si
});
var si = {
  slug: `gradient-text`,
  name: `Gradient Text`,
  description: `Letters cut from a liquid, ever-flowing gradient – the color sweeps across the word the first time it's seen`,
  category: `Text`,
  Preview: b.lazy(() => r(() => import("./demo-Dcdtba_V.jsx"), __vite__mapDeps([300, 1, 2, 3, 301]))),
  loadSource: () => r(() => import("./component-DZEPLsCQ.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-JecR3ZCs.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
const ci = n({
  entry: () => li
});
var li = {
  slug: `grid-background`,
  name: `Grid Background`,
  description: `A fine line grid that drifts slowly behind your content and fades out towards the edges`,
  category: `Backgrounds`,
  Preview: b.lazy(() => r(() => import("./demo-S1hMjDCH.jsx"), __vite__mapDeps([302, 1, 2, 3, 303]))),
  loadSource: () => r(() => import("./component-Bswo_Nl2.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BaC6K2ad.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
const ui = n({
  entry: () => di
});
var di = {
  slug: `number-ticker`,
  name: `Number Ticker`,
  description: `Odometer-style numbers – every digit rolls to its new value and counts in from zero when it scrolls into view`,
  category: `Numbers`,
  Preview: b.lazy(() => r(() => import("./demo-0IZOAjVo.jsx"), __vite__mapDeps([304, 1, 2, 3, 305]))),
  loadSource: () => r(() => import("./component-tKo-lMTz.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-BzUQTIno.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
const fi = n({
  entry: () => pi
});
var pi = {
  slug: `shimmer-loader`,
  name: `Shimmer Loader`,
  description: `Skeleton blocks that share one soft light sweep, plus shimmering text for “Thinking…” states`,
  category: `Loaders`,
  Preview: b.lazy(() => r(() => import("./demo-Cc3_N5Az.jsx"), __vite__mapDeps([306, 1, 2, 3, 307]))),
  loadSource: () => r(() => import("./component-BhZZSUUH.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-jUzYsO8s.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
const mi = n({
  entry: () => hi
});
var hi = {
  slug: `text-reveal`,
  name: `Text Reveal`,
  description: `Text that arrives word by word or letter by letter – each piece rises out of a soft blur as it scrolls into view`,
  category: `Text`,
  Preview: b.lazy(() => r(() => import("./demo-BEzbCisV.jsx"), __vite__mapDeps([308, 1, 2, 3, 309]))),
  loadSource: () => r(() => import("./component-DQdAXRcF.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-DX5lHDck.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: false
};
const gi = n({
  entry: () => _i
});
var _i = {
  slug: `tilt-card`,
  name: `Tilt Card`,
  description: `A card that tilts in 3D towards the pointer, with a soft glare that follows it and a smooth spring back`,
  category: `Hover`,
  Preview: b.lazy(() => r(() => import("./demo-BijqyLh8.jsx"), __vite__mapDeps([310, 1, 2, 3, 311]))),
  loadSource: () => r(() => import("./component-D2uIa_Gl.jsx").then(e => e.default), []),
  loadDocs: () => r(() => import("./docs-Bbarn97a.jsx").then(e => e.docs), []),
  added: `2026-10-05T17:30:00+02:00`,
  order: 0,
  pro: true
};
const vi = {
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
const yi = {
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
const bi = {
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
const xi = {
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
const Si = {
  "../motion/blur-crossfade/index.ts": ni,
  "../motion/gradient-floor/index.ts": ii,
  "../motion/gradient-text/index.ts": oi,
  "../motion/grid-background/index.ts": ci,
  "../motion/number-ticker/index.ts": ui,
  "../motion/shimmer-loader/index.ts": fi,
  "../motion/text-reveal/index.ts": mi,
  "../motion/tilt-card/index.ts": gi
};
const Ci = e => Object.values(e).map(e => e.entry).sort((e, t) => (e.order ?? 999) - (t.order ?? 999) || e.name.localeCompare(t.name));
const wi = [`ai-answer`, `chat-composer`, `thinking-state`, `writing-assistant`, `thinking-loader`];
const Ti = (e => {
  let t = e => {
    if (wi.includes(e.slug)) {
      return wi.indexOf(e.slug);
    }
    return wi.length;
  };
  return [...e].sort((e, n) => t(e) - t(n));
})(Ci(vi));
const Ei = Ci(yi).map(e => ({
  ...e,
  kind: `block`
}));
export const $ = Ci(bi).map(e => ({
  ...e,
  kind: `illustration`
}));
const Di = Ci(xi).map(e => ({
  ...e,
  kind: `screen`
}));
const k = Ci(Si).map(e => ({
  ...e,
  kind: `motion`
}));
const Oi = [...Ti, ...Di, ...Ei, ...$, ...k];
const ki = [`Chat`, `Agents`, `Cards`, `Text`, `Data display`, `Navigation`, `Buttons`, `Inputs`, `Feedback`];
const Ai = [`Feature sections`, `Hero`, `Pricing`, `Billing`, `Analytics`, `Integrations`, `Productivity`, `Social proof`, `Call to action`];
const ji = [`Product scenes`, `Card illustrations`, `Maps`];
const Mi = [`App screens`];
const Ni = [`Text`, `Numbers`, `Transitions`, `Backgrounds`, `Hover`, `Loaders`];
const Pi = e => e.toLowerCase().replace(/\s+/g, `-`);
const Fi = [[`path`, {
  d: `M18.593 8.19486C19.0376 8.52237 19.1326 9.14837 18.8051 9.59306C18.5507 9.93847 18.2963 10.2668 18.0731 10.5528C17.6276 11.1236 17.0143 11.8882 16.3479 12.6556C15.6859 13.4181 14.9518 14.2064 14.2666 14.8119C13.9251 15.1136 13.5721 15.3911 13.2279 15.5986C12.9112 15.7895 12.476 16 11.9999 16C11.5238 16 11.0885 15.7895 10.7718 15.5986C10.4276 15.3911 10.0747 15.1136 9.7332 14.8119C9.04791 14.2064 8.31387 13.4181 7.65183 12.6556C6.98548 11.8882 6.37216 11.1236 5.92664 10.5528C5.70347 10.2668 5.44902 9.93847 5.19463 9.59307C4.86712 9.14837 4.96211 8.52237 5.4068 8.19486C5.58556 8.0632 5.79362 7.99983 5.99982 8L11.9999 8L17.9999 8C18.2061 7.99983 18.4142 8.0632 18.593 8.19486Z`,
  fill: `currentColor`,
  key: `0`
}]];
const Ii = [[`path`, {
  d: `M17.293 5.29295C17.6835 4.90243 18.3165 4.90243 18.707 5.29295C19.0976 5.68348 19.0976 6.31649 18.707 6.70702L13.4131 12L18.7061 17.293L18.7754 17.3691C19.0954 17.7619 19.0721 18.341 18.7061 18.707C18.3399 19.0731 17.7609 19.0958 17.3682 18.7754L17.292 18.707L11.999 13.414L6.70802 18.706C6.3175 19.0966 5.68449 19.0965 5.29396 18.706C4.90344 18.3155 4.90344 17.6825 5.29396 17.292L10.585 12L5.29298 6.70799L5.22462 6.63182C4.90423 6.23907 4.92691 5.66007 5.29298 5.29393C5.65897 4.92794 6.23811 4.9046 6.63087 5.22459L6.70705 5.29393L11.999 10.5859L17.293 5.29295Z`,
  fill: `currentColor`,
  key: `0`
}]];
const Li = [[`path`, {
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
const Ri = [[`path`, {
  d: `M22.25 14.5C22.25 16.1287 22.2517 17.4257 22.1152 18.4404C21.9759 19.4767 21.68 20.3298 21.0049 21.0049C20.3298 21.68 19.4767 21.9759 18.4404 22.1152C17.4257 22.2517 16.1287 22.25 14.5 22.25C12.8713 22.25 11.5743 22.2517 10.5596 22.1152C9.52332 21.9759 8.67025 21.68 7.99512 21.0049C7.31999 20.3298 7.02409 19.4767 6.88477 18.4404C6.74835 17.4257 6.75 16.1287 6.75 14.5C6.75 12.8713 6.74835 11.5743 6.88477 10.5596C7.02409 9.52332 7.31999 8.67025 7.99512 7.99512C8.67025 7.31999 9.52332 7.02409 10.5596 6.88477C11.5743 6.74835 12.8713 6.75 14.5 6.75C16.1287 6.75 17.4257 6.74835 18.4404 6.88477C19.4767 7.02409 20.3298 7.31999 21.0049 7.99512C21.68 8.67025 21.9759 9.52332 22.1152 10.5596C22.2517 11.5743 22.25 12.8713 22.25 14.5Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M9.5 1.75C11.1287 1.75 12.4257 1.74835 13.4404 1.88477C14.4767 2.02409 15.3298 2.31999 16.0049 2.99512C16.6176 3.60786 16.9159 4.36754 17.0703 5.27734C16.2852 5.24868 15.4214 5.25 14.5 5.25C12.9131 5.25 11.4971 5.24547 10.3594 5.39844C9.15677 5.56017 7.93469 5.93445 6.93457 6.93457C5.93445 7.93469 5.56017 9.15677 5.39844 10.3594C5.24547 11.4971 5.25 12.9131 5.25 14.5C5.25 15.4214 5.24868 16.2852 5.27734 17.0703C4.36754 16.9159 3.60786 16.6176 2.99512 16.0049C2.31999 15.3298 2.02409 14.4767 1.88477 13.4404C1.74835 12.4257 1.75 11.1287 1.75 9.5C1.75 7.87129 1.74835 6.57426 1.88477 5.55957C2.02409 4.52332 2.31999 3.67025 2.99512 2.99512C3.67025 2.31999 4.52332 2.02409 5.55957 1.88477C6.57426 1.74835 7.87129 1.75 9.5 1.75Z`,
  fill: `currentColor`,
  key: `1`
}]];
const zi = [[`path`, {
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
const Bi = [[`path`, {
  d: `M11.5875 22.75C12.1575 22.7507 12.662 22.7514 13.1374 22.5827C13.2354 22.548 13.3314 22.508 13.4252 22.4629C13.88 22.2442 14.2363 21.8852 14.6387 21.4795L19.4216 16.6719C19.8889 16.2035 20.3037 15.7879 20.5278 15.2441C20.7518 14.7004 20.7509 14.1116 20.7499 13.4482L20.7498 9.97396C20.7498 8.19195 20.7498 6.7556 20.5987 5.62592C20.4419 4.45306 20.1063 3.46554 19.326 2.68123C18.5458 1.89693 17.5634 1.55958 16.3966 1.40189C15.2727 1.25002 13.8438 1.25004 12.071 1.25006C10.2982 1.25004 8.72712 1.25002 7.60328 1.4019C6.43649 1.55958 5.45408 1.89693 4.67383 2.68123C3.89358 3.46554 3.55798 4.45307 3.40111 5.62592C3.25002 6.75558 3.25004 8.19193 3.25006 9.97389V9.9739V9.97392V9.97394V14.5475V14.5475V14.5475V14.5476C3.25005 16.0812 3.25003 17.3177 3.36431 18.3015C3.48255 19.3195 3.73424 20.1917 4.32688 20.9305C4.54441 21.2017 4.79018 21.4488 5.05999 21.6674C5.79501 22.2632 6.66272 22.5162 7.67541 22.635C8.65417 22.7499 10.0618 22.75 11.5875 22.75ZM18.7314 14.4962C18.6746 14.634 18.5693 14.7644 17.9512 15.3857L13.3463 20.0145C12.8133 20.5502 12.6719 20.6837 12.4903 20.7383C12.4903 19.3765 12.4903 18.7204 12.6066 17.8552C12.7276 16.9551 12.9865 16.1972 13.5884 15.5953C14.1903 14.9934 14.9482 14.7345 15.8483 14.6135C16.7153 14.4969 17.3638 14.4961 18.7314 14.4962ZM16.7501 7.00006C16.7501 7.41428 16.4143 7.75006 16.0001 7.75006L8.00006 7.75006C7.58585 7.75006 7.25006 7.41428 7.25006 7.00006C7.25006 6.58585 7.58585 6.25006 8.00006 6.25006L16.0001 6.25006C16.4143 6.25006 16.7501 6.58585 16.7501 7.00006ZM12.0001 11.7501C12.4143 11.7501 12.7501 11.4143 12.7501 11.0001C12.7501 10.5858 12.4143 10.2501 12.0001 10.2501H8.00006C7.58585 10.2501 7.25006 10.5858 7.25006 11.0001C7.25006 11.4143 7.58585 11.7501 8.00006 11.7501H12.0001Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
const Vi = [[`path`, {
  d: `M13.6076 1.14723C14.3143 1.44842 14.7969 2.16259 14.7969 3.01681L14.7976 9.78474C14.7976 9.89519 14.8871 9.98472 14.9976 9.98472H18.0993C18.9851 9.98472 19.5954 10.5826 19.8466 11.2101C20.0974 11.8369 20.0636 12.642 19.5628 13.2849L12.5645 22.2678C12.0032 22.9883 11.1205 23.1629 10.3917 22.8523C9.68508 22.5511 9.20248 21.8369 9.20248 20.9827L9.20181 14.2148C9.2018 14.1043 9.11226 14.0148 9.00181 14.0148H5.90003C5.01422 14.0148 4.40394 13.4169 4.1528 12.7894C3.90193 12.1626 3.93574 11.3575 4.43658 10.7146L11.4348 1.73169C11.9962 1.01115 12.8788 0.83658 13.6076 1.14723Z`,
  fill: `currentColor`,
  key: `0`
}]];
const Hi = [[`path`, {
  d: `M9.94118 17.8804C9.94118 17.5169 10.0494 17.2011 10.2238 16.9157C10.3434 16.7199 10.2615 16.4422 10.0453 16.3808C8.25526 15.8726 7 15.0555 7 12.3451C7 11.6404 7.22356 10.9779 7.61654 10.4013C7.71414 10.2581 7.76181 10.193 7.77491 10.1215C7.78806 10.0497 7.76638 9.97161 7.72543 9.80167C7.58167 9.20515 7.57017 8.57672 7.73081 7.99051C7.78361 7.79782 7.8968 7.68543 8.10166 7.70713C8.3674 7.73528 8.82753 7.86109 9.50999 8.30139C9.77813 8.47438 9.9122 8.56088 10.0303 8.58023C10.1484 8.59958 10.3062 8.55906 10.622 8.478C11.0537 8.36716 11.4986 8.30765 12 8.30765C12.5014 8.30765 12.9463 8.36715 13.378 8.478C13.6938 8.55905 13.8516 8.59958 13.9697 8.58023C14.0878 8.56088 14.2219 8.47439 14.49 8.3014C15.1725 7.8611 15.6326 7.73528 15.8983 7.70713C16.1032 7.68543 16.2164 7.79782 16.2692 7.99051C16.4298 8.57672 16.4183 9.20514 16.2746 9.80166C16.2336 9.9716 16.2119 10.0497 16.2251 10.1215C16.2382 10.1929 16.2859 10.2581 16.3834 10.4013C16.7764 10.9779 17 11.6404 17 12.3451C17 15.0555 15.7447 15.8726 13.9547 16.3808C13.7385 16.4422 13.6566 16.7199 13.7762 16.9157C13.9506 17.2011 14.0588 17.5169 14.0588 17.8804V22.6514C19.011 21.6909 22.75 17.3313 22.75 12.0984C22.75 6.16133 17.9371 1.34839 12 1.34839C6.06294 1.34839 1.25 6.16133 1.25 12.0984C1.25 17.3313 4.98901 21.6909 9.94118 22.6514V19.8518C9.88484 19.8452 9.81816 19.8354 9.74225 19.821C9.52615 19.7799 9.23571 19.7012 8.89714 19.5511C8.21489 19.2485 7.36263 18.6669 6.53685 17.5663C6.28826 17.2349 6.35533 16.7648 6.68665 16.5162C7.01798 16.2676 7.48809 16.3347 7.73668 16.666C8.4109 17.5647 9.06058 17.9827 9.50527 18.1799C9.6822 18.2583 9.83089 18.3037 9.94118 18.3299V17.8804Z`,
  fill: `currentColor`,
  key: `0`
}]];
const Ui = [[`path`, {
  d: `M12.0652 1.75C14.0744 1.74998 15.6717 1.74997 16.934 1.90331C18.2327 2.06106 19.3071 2.39345 20.1968 3.15334C20.4301 3.35261 20.6474 3.56991 20.8467 3.80323C21.6065 4.69294 21.9389 5.76729 22.0967 7.06598C22.25 8.32829 22.25 10.0561 22.25 12.0653C22.25 14.0744 22.25 15.6717 22.0967 16.934C21.9389 18.2327 21.6065 19.3071 20.8467 20.1968C20.6474 20.4301 20.4301 20.6474 20.1968 20.8467C19.3071 21.6065 18.2327 21.9389 16.934 22.0967C15.6717 22.25 13.9439 22.25 11.9347 22.25C9.92558 22.25 8.32829 22.25 7.06598 22.0967C5.76729 21.9389 4.69294 21.6065 3.80323 20.8467C3.56991 20.6474 3.35261 20.4301 3.15334 20.1968C2.39345 19.3071 2.06106 18.2327 1.90331 16.934C1.74997 15.6717 1.74998 14.0744 1.75 12.0652V12.0652C1.74998 10.0561 1.74997 8.3283 1.90331 7.06598C2.06106 5.76729 2.39345 4.69294 3.15334 3.80323C3.35261 3.56991 3.56991 3.35261 3.80323 3.15334C4.69294 2.39345 5.76729 2.06106 7.06598 1.90331C8.3283 1.74997 10.0561 1.74998 12.0652 1.75H12.0652ZM3.84153 16.6986C3.97614 17.8067 4.22847 18.4493 4.63803 18.9288C4.77088 19.0843 4.91575 19.2292 5.0713 19.3621C5.55084 19.7716 6.19337 20.024 7.3015 20.1586C8.43237 20.2959 9.91094 20.2976 12.0001 20.2976C14.0892 20.2976 15.5678 20.2959 16.6987 20.1586C17.8068 20.024 18.4493 19.7716 18.9289 19.3621C19.0844 19.2292 19.2293 19.0843 19.3622 18.9288C19.7717 18.4493 20.024 17.8067 20.1587 16.6986C20.2103 16.2738 20.2427 15.7999 20.2631 15.263L18.5304 13.5303C18.1909 13.1908 17.7303 13 17.2501 13C16.7699 13 16.3093 13.1908 15.9698 13.5303L14.0001 15.5L10.0304 11.5303C9.69086 11.1908 9.23031 11 8.75009 11C8.26988 11 7.80933 11.1908 7.46976 11.5303L3.73706 15.263C3.75747 15.7999 3.78993 16.2738 3.84153 16.6986ZM15.5 6.25C14.8096 6.25 14.25 6.80964 14.25 7.5C14.25 8.19036 14.8096 8.75 15.5 8.75C16.1904 8.75 16.75 8.19036 16.75 7.5C16.75 6.80964 16.1904 6.25 15.5 6.25Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
const Wi = [[`path`, {
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
const Gi = [[`path`, {
  d: `M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.5 10.75C9.5 9.36929 10.6193 8.25 12 8.25C13.3807 8.25 14.5 9.36929 14.5 10.75C14.5 11.7752 13.883 12.6562 13 13.042V15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75V13.042C10.117 12.6562 9.5 11.7752 9.5 10.75Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
const Ki = [[`path`, {
  d: `M3 5C3 4.44772 3.44772 4 4 4L20 4C20.5523 4 21 4.44772 21 5C21 5.55229 20.5523 6 20 6L4 6C3.44772 6 3 5.55228 3 5Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}], [`path`, {
  d: `M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `1`
}], [`path`, {
  d: `M3 19C3 18.4477 3.44772 18 4 18L20 18C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20L4 20C3.44772 20 3 19.5523 3 19Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `2`
}]];
const qi = [[`path`, {
  d: `M10.5163 2.04296C10.6958 2.27649 10.722 2.59345 10.5832 2.85326C9.99927 3.9469 9.66792 5.19607 9.66792 6.52485C9.66792 10.8367 13.1633 14.3321 17.4751 14.3321C18.8039 14.3321 20.0531 14.0007 21.1467 13.4168C21.4065 13.278 21.7235 13.3042 21.957 13.4837C22.1906 13.6632 22.2974 13.9627 22.2302 14.2495C21.1556 18.8349 17.0409 22.25 12.1269 22.25C6.39589 22.25 1.75 17.6041 1.75 11.8731C1.75 6.95906 5.16505 2.84445 9.7505 1.76979C10.0373 1.70258 10.3368 1.80944 10.5163 2.04296Z`,
  fill: `currentColor`,
  key: `0`
}]];
const Ji = [[`path`, {
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
const Yi = [[`path`, {
  d: `M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
const Xi = [[`path`, {
  d: `M15 1.25C15.3507 1.25 15.6546 1.49305 15.7317 1.83518L16.2704 4.22676C16.6637 5.97278 18.0272 7.33629 19.7732 7.7296L22.1648 8.26833C22.507 8.3454 22.75 8.64929 22.75 9C22.75 9.35071 22.507 9.6546 22.1648 9.73167L19.7732 10.2704C18.0272 10.6637 16.6637 12.0272 16.2704 13.7732L15.7317 16.1648C15.6546 16.507 15.3507 16.75 15 16.75C14.6493 16.75 14.3454 16.507 14.2683 16.1648L13.7296 13.7732C13.3363 12.0272 11.9728 10.6637 10.2268 10.2704L7.83518 9.73167C7.49305 9.6546 7.25 9.35071 7.25 9C7.25 8.64929 7.49305 8.3454 7.83518 8.26833L10.2268 7.7296C11.9728 7.33629 13.3363 5.97278 13.7296 4.22676L14.2683 1.83518C14.3454 1.49305 14.6493 1.25 15 1.25Z`,
  fill: `currentColor`,
  key: `0`
}], [`path`, {
  d: `M7 11.25C7.35071 11.25 7.6546 11.493 7.73167 11.8352L8.11647 13.5435C8.37923 14.7099 9.29012 15.6208 10.4565 15.8835L12.1648 16.2683C12.507 16.3454 12.75 16.6493 12.75 17C12.75 17.3507 12.507 17.6546 12.1648 17.7317L10.4565 18.1165C9.29012 18.3792 8.37923 19.2901 8.11647 20.4565L7.73167 22.1648C7.6546 22.507 7.35071 22.75 7 22.75C6.64929 22.75 6.3454 22.507 6.26833 22.1648L5.88353 20.4565C5.62077 19.2901 4.70988 18.3792 3.54345 18.1165L1.83518 17.7317C1.49305 17.6546 1.25 17.3507 1.25 17C1.25 16.6493 1.49305 16.3454 1.83518 16.2683L3.54345 15.8835C4.70988 15.6208 5.62077 14.7099 5.88353 13.5435L6.26833 11.8352C6.3454 11.493 6.64929 11.25 7 11.25Z`,
  fill: `currentColor`,
  key: `1`
}]];
const Zi = [[`path`, {
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
const Qi = [[`path`, {
  d: `M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C9.03745 18.3852 8.78086 18.4968 8.51163 18.4999C8.2424 18.5031 7.98328 18.3975 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L8.48336 16.0692L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}]];
const A = t_4();
function J1Component({
  icon,
  size = 16
}) {
  return <P1 icon={icon} size={size} color={`currentColor`} aria-hidden />;
}
function IComponent({
  value,
  label,
  className = ``,
  onCopied
}) {
  let [i, setI] = b.useState(false);
  let o = async () => {
    try {
      if (typeof value == `string`) {
        await navigator.clipboard.writeText(value);
      } else if (typeof ClipboardItem < `u`) {
        let t = value().then(e => new Blob([e], {
          type: `text/plain`
        }));
        await navigator.clipboard.write([new ClipboardItem({
          "text/plain": t
        })]);
      } else {
        await navigator.clipboard.writeText(await value());
      }
      setI(true);
      onCopied?.();
      setTimeout(() => setI(false), 1400);
    } catch {}
  };
  let s = <J1Component icon={i ? Qi : Ri} size={14} />;
  if (label) {
    return <button className={`btn btn--ghost btn--xs ${className}`} onClick={o}>{s}{i ? `Copied` : label}</button>;
  }
  return <button className={`icon-btn ${className}`} onClick={o} aria-label={`Copy to clipboard`}>{s}</button>;
}
let ea = null;
let ta = null;
const na = () => ta ??= r(() => import("./lib-D_jy-Mlc.jsx").then(e => ea = e.highlight), __vite__mapDeps([312, 2]));
const ra = e => e.replace(/[&<>]/g, e => ({
  "&": `&amp;`,
  "<": `&lt;`,
  ">": `&gt;`
})[e]);
const ia = e => e.split(`
`).map(e => `<span class="sh__line">${ra(e)}</span>`).join(`
`);
function MComponent({
  code: code_1,
  filename,
  lineNumbers = true,
  maxHeight,
  onCopied
}) {
  let [a, setA] = b.useState(!!ea);
  b.useEffect(() => {
    if (!a) {
      na().then(() => setA(true));
    }
  }, [a]);
  let __html = b.useMemo(() => {
    if (ea) {
      return ea(code_1.trimEnd());
    }
    return ia(code_1.trimEnd());
  }, [code_1, a]);
  return <div className={`code`}>{filename ? <div className={`code__head`}><span className={`code__file`}><J1Component icon={Bi} size={14} />{filename}</span><IComponent value={code_1} label={`Copy`} onCopied={onCopied} /></div> : <IComponent value={code_1} className={`code__copy`} onCopied={onCopied} />}<pre className={`code__body`} data-lines={lineNumbers} style={{
      maxHeight
    }}><code dangerouslySetInnerHTML={{
        __html
      }} /></pre></div>;
}
function AaComponent({
  command,
  onCopied
}) {
  return <div className={`command`}><code><span className={`command__prompt`}>{`$`}</span>{` `}{command}</code><IComponent value={command} onCopied={onCopied} /></div>;
}
function NComponent({
  id,
  title,
  lead,
  children
}) {
  return <section id={id} className={`doc__section`}><h2 className={`doc__h2`}>{title}</h2>{lead && <p className={`doc__p`}>{lead}</p>}{children}</section>;
}
function OaComponent({
  id,
  title,
  lead,
  items
}) {
  if (items?.length) {
    return <NComponent id={id} title={title} lead={lead}><ul className={`doc__list`}>{items.map(e => <li key={e}>{e}</li>)}</ul></NComponent>;
  }
  return null;
}
function Sa1Component({
  command,
  onCopied
}) {
  let [n, setN] = b.useState(`pnpm`);
  return <div className={`install`}><div className={`install__head`}><div className={`pm-tabs`} role={`tablist`} aria-label={`Package manager`}>{Object.keys(r_2).map(e => <button key={e} role={`tab`} aria-selected={n === e} onClick={() => setN(e)}>{e}</button>)}</div><IComponent value={command(n)} label={`Copy`} onCopied={onCopied} /></div><pre className={`install__cmd`}><code>{command(n)}</code></pre></div>;
}
function Ca1Component({
  label,
  code: code_1
}) {
  return <div className={`install`}><div className={`install__head`}><span className={`install__label`}>{label}</span><IComponent value={code_1} label={`Copy`} /></div><pre className={`install__cmd`}><code>{code_1}</code></pre></div>;
}
function La1Component({
  className = ``
}) {
  return <span className={`pro-badge ${className}`}><J1Component icon={Vi} size={10} /><span>{`Pro`}</span></span>;
}
const P = new Set();
const F = e => e.match(/^\/(components|screens|blocks|illustrations|motion)\/?$/)?.[1];
function ua() {
  let e = document.querySelector(`.panel`);
  if (e && getComputedStyle(e).overflowY === `auto`) {
    return e;
  }
  return null;
}
const da = () => ua()?.scrollTop ?? window.scrollY;
let fa = false;
const pa = () => {
  fa = true;
};
function ma(e, t) {
  let n = fa;
  fa = false;
  let r = () => {
    if (e === `components`) {
      if (n) {
        return document.getElementById(`components`);
      }
      return null;
    }
    return document.querySelector(`#${e} .library__title`) ?? document.getElementById(e);
  };
  let i = behavior => {
    let t = r();
    if (t) {
      t.scrollIntoView({
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
  let a = false;
  let o = () => a = true;
  let s = [`wheel`, `touchstart`, `keydown`, `pointerdown`];
  s.forEach(e => window.addEventListener(e, o, {
    passive: true,
    once: true
  }));
  i(t ? `smooth` : `auto`);
  [t ? 900 : 200, 1300, 2200].forEach((e, t, n) => window.setTimeout(() => {
    let e = r();
    let c = e ? Math.abs(e.getBoundingClientRect().top - parseFloat(getComputedStyle(e).scrollMarginTop || `0`)) : da();
    if (!a && c > 4) {
      i(`auto`);
    }
    if (t === n.length - 1) {
      s.forEach(e => window.removeEventListener(e, o));
    }
  }, e));
}
let ha = null;
function ga(e, t = false) {
  let pathname = window.location.pathname;
  if (!t && e.split(`?`)[0] !== pathname) {
    ha = pathname;
  }
  if (e === pathname + window.location.search) {
    let t = F(e);
    if (t) {
      ma(t, false);
    }
    return;
  }
  window.history[t ? `replaceState` : `pushState`](null, ``, e);
  P.forEach(e => e());
  if (!(F(pathname) && F(e))) {
    document.querySelector(`.panel`)?.scrollTo({
      top: 0
    });
    window.scrollTo({
      top: 0
    });
  }
}
function useA() {
  let [e, setE] = b.useState(window.location.pathname);
  b.useEffect(() => {
    let e = () => setE(window.location.pathname);
    P.add(e);
    window.addEventListener(`popstate`, e);
    return () => {
      P.delete(e);
      window.removeEventListener(`popstate`, e);
    };
  }, []);
  return e;
}
var va = slug => `/components/${slug}`;
const ya = slug => `/blocks/${slug}`;
const ba = slug => `/illustrations/${slug}`;
const xa = slug => `/motion/${slug}`;
const Sa = slug => `/screens/${slug}`;
const Ca = e => {
  if (e.kind === `block`) {
    return ya(e.slug);
  }
  if (e.kind === `illustration`) {
    return ba(e.slug);
  }
  if (e.kind === `motion`) {
    return xa(e.slug);
  }
  if (e.kind === `screen`) {
    return Sa(e.slug);
  }
  return va(e.slug);
};
const wa = e => `/category/${e}`;
export function M({
  to,
  onClick,
  ...rest
}) {
  return <a href={to} onClick={n => {
    onClick?.(n);
    if (!(n.defaultPrevented || n.metaKey || n.ctrlKey || n.shiftKey || n.button !== 0)) {
      n.preventDefault();
      ga(to);
    }
  }} {...rest} />;
}
const Ta = `${o_1.url}/r/{name}.json`;
const Ea = Ti.find(e => !e.pro);
const Da = {
  slug: Ea?.slug ?? `chat-composer`,
  name: (Ea?.name ?? `Chat Composer`).replace(/\s+/g, ``)
};
function Content() {
  let length = Ti.filter(e => e.pro).length;
  return <><NComponent id={`what-it-is`} title={`What ${o_1.name} is`}><p className={`doc__p`}>{o_1.name}{` is a library of React components with live previews and source you own. You install a component with the shadcn CLI or copy it by hand – it lands in your project as a single TSX file (styles included) that you can read and change.`}</p><p className={`doc__p`}>{`Every preview runs the same source you install, so the keyboard behavior, states and motion you try on a page are exactly what you get.`}</p></NComponent><NComponent id={`how-it-is-organized`} title={`How it is organized`}><p className={`doc__p`}>{`The library has four parts. `}<strong>{`Components`}</strong>{` are single interface pieces, like a chat composer.`}{` `}<strong>{`Blocks`}</strong>{` are complete sections such as a hero or a pricing table`}{Ei.length ? `` : ` – the first ones are on their way`}{`. `}<strong>{`Illustrations`}</strong>{` are animated scenes for landing pages`}{$.length ? `` : `, coming soon`}{`. `}<strong>{`Motion`}</strong>{` covers effects that move your content – text, numbers, transitions and backgrounds`}{k.length ? `` : `, coming soon`}{`. All of them are grouped by what they do; pick a category in the sidebar to see them.`}</p><div className={`table-wrap`}><table className={`table`}><thead><tr><th>{`Category`}</th><th>{`Components`}</th></tr></thead><tbody>{ki.map(e => {
              let t = Ti.filter(t => t.category === e);
              if (t.length) {
                return <tr key={e}><td><M to={wa(Pi(e))} className={`doc__link`}>{e}</M></td><td>{t.map(e => e.name).join(`, `)}</td></tr>;
              }
              return null;
            })}</tbody></table></div></NComponent><NComponent id={`reading-a-page`} title={`Reading a component page`}><p className={`doc__p`}>{`Every component page follows the same order, so you can jump straight to what you need:`}</p><ul className={`doc__list`}><li>{`Preview and Code – try it, then read the exact source. The reset button restarts the preview.`}</li><li>{`When to use and when not to – a quick check whether it fits your case.`}</li><li>{`Installation – one CLI command, or copy the single file by hand.`}</li><li>{`Usage, examples and API reference – copyable code and every prop with its type and default.`}</li><li>{`Keyboard, accessibility, motion and responsive behavior – how it works for keyboard, screen reader and reduced motion.`}</li></ul><p className={`doc__p`}>{`Press ⌘K anywhere to search.`}</p></NComponent><NComponent id={`free-and-pro`} title={`Free and Pro`}><p className={`doc__p`}>{`Free components can be used in any project. Components marked `}<La1Component className={`doc__inline-pro`} />{` are part of `}{o_1.name}{` Pro`}{length ? ` (${length} today)` : ``}{`: their previews and docs are open to everyone, the source comes with Pro. See`}{` `}<M to={`/pricing`} className={`doc__link`}>{`Pricing`}</M>{`.`}</p></NComponent><PaComponent items={[{
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
    }]} /></>;
}
function KaComponent() {
  return <><NComponent id={`requirements`} title={`Requirements`}><p className={`doc__p`}>{`A React 19 project with TypeScript and the `}<code className={`token`}>{`@/*`}</code>{` path alias, for example Next.js or Vite. Each component is one self-contained file with its styles inside, so it needs neither Tailwind nor any other package.`}</p></NComponent><NComponent id={`initialize`} title={`1. Add a components.json`} lead={`The shadcn CLI reads this file to know where components go. Skip this step if your project already has one.`}><p className={`doc__p`}>{`With Tailwind, let shadcn create it – `}<code className={`token`}>{`init`}</code>{` requires Tailwind:`}</p><Sa1Component command={e => `${r_2[e]} shadcn@latest init`} /><p className={`doc__p doc__p--spaced`}>{`Without Tailwind, create the file by hand in your project root instead:`}</p><MComponent filename={`components.json`} lineNumbers={false} code={`{
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
}`} /><p className={`doc__p`}>{`The empty `}<code className={`token`}>{`tailwind`}</code>{` entries are only there because the file format requires them – nothing gets installed.`}</p></NComponent><NComponent id={`install`} title={`2. Install components`} lead={`Point the CLI at a component's address. No further setup needed – the file lands in components/ui.`}><Sa1Component command={e => t_3(Da.slug, e)} /><p className={`doc__p doc__p--spaced`}>{`Then use it like any local component:`}</p><MComponent filename={`app/page.tsx`} code={`import { ${Da.name} } from "@/components/ui/${Da.slug}";

export default function Page() {
  return <${Da.name} />;
}`} /></NComponent><NComponent id={`registry`} title={`Optional: short names`} lead={`Register the ${o_1.registry} namespace once in components.json, then install by name instead of by address.`}><MComponent filename={`components.json`} lineNumbers={false} code={`{
  "registries": {
    "${o_1.registry}": "${Ta}"
  }
}`} /><Sa1Component command={e => `${r_2[e]} shadcn@latest add ${o_1.registry}/${Da.slug}`} /></NComponent><NComponent id={`pro`} title={`Pro components`} lead={`Pro items install the same way – the registry only hands them out with your personal access key.`}><p className={`doc__p`}>{`1. Create your key under`}{` `}<M to={`/account/downloads`} className={`doc__link`}>{`Account → Downloads`}</M>{` `}{`and add it to `}<code className={`token`}>{`.env.local`}</code>{` – never commit it:`}</p><MComponent filename={`.env.local`} lineNumbers={false} code={`AFFECTUI_TOKEN=aui_…`} /><p className={`doc__p doc__p--spaced`}>{`2. Register the namespace with the key as a header:`}</p><MComponent filename={`components.json`} lineNumbers={false} code={`{
  "registries": {
    "${o_1.registry}": {
      "url": "${Ta}",
      "headers": { "Authorization": "Bearer \${AFFECTUI_TOKEN}" }
    }
  }
}`} /><p className={`doc__p doc__p--spaced`}>{`3. Install free and Pro items by name:`}</p><Sa1Component command={e => `${r_2[e]} shadcn@latest add ${o_1.registry}/<name>`} /><p className={`doc__p doc__p--spaced`}>{`Without the CLI, Pro members see the code and a copy button on every Pro page while signed in.`}</p></NComponent><NComponent id={`manual`} title={`Manual installation`}><p className={`doc__p`}>{`Open a component page, switch Installation to Manual and copy the file into`}{` `}<code className={`token`}>{`components/ui`}</code>{`. Or use the copy button on any card – it copies the same file.`}</p></NComponent></>;
}
const Aa = [[`--ui-cc-card`, `White text area`], [`--ui-cc-tray`, `Gray layer behind it`], [`--ui-cc-line`, `Outlines`], [`--ui-cc-ink`, `Text and the send button`], [`--ui-cc-ink-muted`, `Labels such as “Request approval”`], [`--ui-cc-placeholder`, `Placeholder text`], [`--ui-cc-alert`, `“Unrestricted access” and the recording dot`]];
function JaComponent() {
  return <><NComponent id={`variables`} title={`CSS variables`}><p className={`doc__p`}>{`Every component brings its own colors and timings as CSS variables on its root class. They share a short prefix, so they never clash with your own variables – the Chat Composer uses`}{` `}<code className={`token`}>{`--ui-cc-`}</code>{` on `}<code className={`token`}>{`.ui-chat-composer`}</code>{`.`}</p><div className={`table-wrap`}><table className={`table`}><thead><tr><th>{`Chat Composer variable`}</th><th>{`Used for`}</th></tr></thead><tbody>{Aa.map(([e, t]) => <tr key={e}><td><code className={`token`}>{e}</code></td><td>{t}</td></tr>)}</tbody></table></div><p className={`doc__p`}>{`The full list sits at the top of the styles inside the component file.`}</p></NComponent><NComponent id={`brand`} title={`Bring your own brand`}><p className={`doc__p`}>{`Override the variables in your global CSS. Put one class in front of the component class, so your values win no matter which stylesheet loads first:`}</p><MComponent filename={`globals.css`} code={`body .ui-chat-composer {
  --ui-cc-ink: #1e1b4b;
  --ui-cc-alert: #4f46e5;
  --ui-cc-alert-wash: rgba(79, 70, 229, 0.1);
}`} /></NComponent><NComponent id={`dark-mode`} title={`Dark mode`}><p className={`doc__p`}>{`Components ship in light colors and don't switch on their own. Set the variables under the selector your app uses for dark mode:`}</p><MComponent filename={`globals.css`} code={`.dark .ui-chat-composer {
  --ui-cc-card: #19191b;
  --ui-cc-tray: #232326;
  --ui-cc-line: #2e2e31;
  --ui-cc-ink: #ededed;
  --ui-cc-placeholder: #5c5c60;
}`} /></NComponent></>;
}
function MaComponent() {
  return <><NComponent id={`principles`} title={`Principles`}><ul className={`doc__list`}><li>{`Native elements first – buttons are buttons, inputs are inputs, so focus and keyboard work out of the box.`}</li><li>{`Visible focus rings for keyboard users only, via :focus-visible.`}</li><li>{`Every control has an accessible name; icon-only buttons ship with an aria-label.`}</li><li>{`Status changes, like a finished loading state, are announced politely with aria-live.`}</li></ul></NComponent><NComponent id={`keyboard`} title={`Keyboard`}><p className={`doc__p`}>{`Each component page lists its keyboard interactions. As a rule, Tab moves focus, Enter and Space activate, and Escape closes or clears.`}</p></NComponent><NComponent id={`reduced-motion`} title={`Reduced motion`}><p className={`doc__p`}>{`All motion respects `}<code className={`token`}>{`prefers-reduced-motion`}</code>{`. Transitions become instant and looping animations stop, without losing any state change.`}</p></NComponent></>;
}
function NaComponent() {
  let code_1 = `${o_1.url}/r/${Da.slug}.json`;
  let t = `${o_1.url}/api/mcp`;
  return <><NComponent id={`mcp`} title={`MCP server`} lead={`Connect your coding assistant once – it can then search every item, read its docs and add it to your project when you ask.`}><p className={`doc__p`}>{`Claude Code:`}</p><Ca1Component label={`Terminal`} code={`claude mcp add --transport http affectui ${t}`} /><p className={`doc__p doc__p--spaced`}>{`Cursor (`}<code className={`token`}>{`.cursor/mcp.json`}</code>{`), VS Code (`}<code className={`token`}>{`.vscode/mcp.json`}</code>{`, key`}{` `}<code className={`token`}>{`servers`}</code>{` instead of `}<code className={`token`}>{`mcpServers`}</code>{`) and other clients:`}</p><MComponent filename={`mcp.json`} lineNumbers={false} code={`{
  "mcpServers": {
    "affectui": { "url": "${t}" }
  }
}`} /><p className={`doc__p doc__p--spaced`}>{`Codex (`}<code className={`token`}>{`~/.codex/config.toml`}</code>{`):`}</p><MComponent filename={`config.toml`} lineNumbers={false} code={`[mcp_servers.affectui]
url = "${t}"`} /><p className={`doc__p doc__p--spaced`}>{`The tools: `}<code className={`token`}>{`search_components`}</code>{`, `}<code className={`token`}>{`list_components`}</code>{`,`}{` `}<code className={`token`}>{`get_component`}</code>{` (docs, usage, props, install command) and `}<code className={`token`}>{`get_source`}</code>{`. Then just ask, for example “add a chat input with a model picker to the dashboard”.`}</p></NComponent><NComponent id={`mcp-pro`} title={`Pro items through MCP`}><p className={`doc__p`}>{`Docs of every item are open. For the source of Pro items, add your access key from`}{` `}<M to={`/account/downloads`} className={`doc__link`}>{`Account → Downloads`}</M>{` `}{`as a header – the same key the shadcn CLI uses:`}</p><Ca1Component label={`Terminal`} code={`claude mcp add --transport http affectui ${t} --header "Authorization: Bearer aui_…"`} /><MComponent filename={`mcp.json`} lineNumbers={false} code={`{
  "mcpServers": {
    "affectui": {
      "url": "${t}",
      "headers": { "Authorization": "Bearer aui_…" }
    }
  }
}`} /></NComponent><NComponent id={`llms`} title={`llms.txt`}><p className={`doc__p`}>{`Without any setup, point an assistant at the index or at the full docs of every item in one file:`}</p><Ca1Component label={`Addresses`} code={`${o_1.url}/llms.txt
${o_1.url}/llms-full.txt`} /></NComponent><NComponent id={`address`} title={`One component by address`}><p className={`doc__p`}>{`Every free component also has an address with its full source, name and description. Assistants can read it and run the install command for you:`}</p><Ca1Component label={`Address`} code={code_1} /></NComponent><NComponent id={`prompt`} title={`Example prompt`}><MComponent lineNumbers={false} code={`Use the affectUI MCP server to find a component for an onboarding checklist,
install it with the shadcn CLI and use it on the dashboard.
Keep its styles and motion; adapt only the content.`} /></NComponent></>;
}
function PaComponent({
  items
}) {
  return <NComponent id={`next-steps`} title={`Next steps`}><div className={`related`}>{items.map(e => <M key={e.to} to={e.to} className={`related__card`}><span className={`related__name`}>{e.title}</span><span className={`related__desc`}>{e.text}</span></M>)}</div></NComponent>;
}
const L = [{
  slug: `introduction`,
  title: `Introduction`,
  description: `What ${o_1.name} is, how it is organized and how to read a component page.`,
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
  description: `MCP server, llms.txt and prompts – let your coding assistant find and add components.`,
  Content: NaComponent
}];
function FaComponent({
  size = 15,
  className = ``
}) {
  return <svg className={`logo-mark ${className}`} width={size} height={size} viewBox={`0 0 107 107`} fill={`currentColor`} aria-hidden><path d={`M106.447 67.3367C106.447 69.7104 104.523 71.6348 102.149 71.6348H75.928C73.5542 71.6348 71.6299 73.5591 71.6299 75.9329V102.16C71.6299 104.534 69.7056 106.458 67.3318 106.458H35.8198C35.8185 106.458 35.8174 106.459 35.8174 106.46C35.8174 106.462 35.8163 106.463 35.8149 106.463H4.29811C1.92433 106.463 0 104.539 0 102.165V39.1262C0 36.7525 1.92433 34.8281 4.29811 34.8281H30.5193C32.8931 34.8281 34.8174 32.9038 34.8174 30.53V4.29812C34.8174 1.92433 36.7417 0 39.1155 0H102.149C104.523 0 106.447 1.92433 106.447 4.29811V67.3367ZM35.8174 66.3425C35.8174 68.7163 37.7417 70.6406 40.1155 70.6406H66.3318C68.7056 70.6406 70.6299 68.7163 70.6299 66.3425V40.1155C70.6299 37.7417 68.7056 35.8174 66.3318 35.8174H40.1155C37.7417 35.8174 35.8174 37.7417 35.8174 40.1155V66.3425Z`} /></svg>;
}
const Ia = _();
const La = slug => `/previews/${slug}.webp`;
const onError = e => {
  e.currentTarget.style.visibility = `hidden`;
};
function Za1Component({
  onNavigate
}) {
  let [t, setT] = b.useState(``);
  let [r, setR] = b.useState(0);
  let [a, setA] = b.useState(false);
  let sRef = b.useRef(null);
  let cRef = b.useRef(null);
  let [l, setL] = b.useState(null);
  let d = b.useMemo(() => {
    let e = t.trim().toLowerCase();
    if (e) {
      return Oi.filter(t => `${t.name} ${t.description} ${t.category}`.toLowerCase().includes(e)).slice(0, 8);
    }
    return [];
  }, [t]);
  b.useEffect(() => setR(0), [t]);
  b.useLayoutEffect(() => {
    let e = cRef.current?.children[r];
    let t = cRef.current?.closest(`.sidebar`)?.getBoundingClientRect();
    if (!a || !e || !t || !d.length) {
      return setL(null);
    }
    let n = e.getBoundingClientRect();
    setL({
      left: t.right + 12,
      top: Math.max(12, Math.min(n.top - 8, window.innerHeight - 290))
    });
  }, [r, d, a]);
  b.useEffect(() => {
    let e = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === `k`) {
        e.preventDefault();
        sRef.current?.focus();
        sRef.current?.select();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, []);
  let f = t => {
    ga(Ca(t));
    setT(``);
    sRef.current?.blur();
    onNavigate();
  };
  return <div className={`sidebar-search`}><label className={`sidebar-search__field`}><J1Component icon={Yi} size={14} /><input ref={sRef} value={t} onChange={e => setT(e.target.value)} onFocus={() => setA(true)} onBlur={() => setA(false)} onKeyDown={e => {
        if (e.key === `ArrowDown`) {
          e.preventDefault();
          setR(e => Math.min(e + 1, d.length - 1));
        } else if (e.key === `ArrowUp`) {
          e.preventDefault();
          setR(e => Math.max(e - 1, 0));
        } else if (e.key === `Enter` && d[r]) {
          f(d[r]);
        } else if (e.key === `Escape`) {
          setT(``);
          sRef.current?.blur();
        }
      }} placeholder={`Search…`} aria-label={`Search components`} role={`combobox`} aria-expanded={a && d.length > 0} aria-controls={`sidebar-search-results`} />{!t && <span className={`sidebar-search__keys`} aria-hidden><kbd>{`⌘`}</kbd><kbd>{`K`}</kbd></span>}</label>{a && t.trim() && <div ref={cRef} className={`sidebar-search__results`} id={`sidebar-search-results`} role={`listbox`}>{d.length ? d.map((e, t) => <button key={e.slug} role={`option`} aria-selected={t === r} className={`sidebar-search__result`} onMouseEnter={() => setR(t)} onMouseDown={e => e.preventDefault()} onClick={() => f(e)}><span className={`sidebar-search__thumb`}><img src={La(e.slug)} alt={``} loading={`lazy`} onError={onError} /></span><span className={`sidebar-search__text`}>{e.name}<small>{e.category}</small></span>{e.pro && <La1Component className={`nav-link__pro`} />}</button>) : <p className={`sidebar-search__empty`}>{`No components found`}</p>}</div>}{l && d[r] && Ia.createPortal(<div className={`search-peek`} style={{
      left: l.left,
      top: l.top
    }} aria-hidden><img key={d[r].slug} src={La(d[r].slug)} alt={``} onError={onError} /><p><b>{d[r].name}</b>{d[r].description}</p></div>, document.body)}</div>;
}
const Ba = [[`path`, {
  d: `M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}]];
const Va = [[`path`, {
  d: `M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}]];
const Ha = [[`path`, {
  d: `M7.99978 3.5H6.60021C4.43183 3.5 3.34764 3.5 2.67399 4.17362C2.00034 4.84724 2.00029 5.93144 2.00021 8.09982L2 13.3998C1.99992 15.5684 1.99987 16.6526 2.67353 17.3263C3.34719 18 4.43146 18 6.6 18H8.95042C10.4329 18 11.7092 19.0464 11.9999 20.5V5.5C11.0556 4.24097 9.99989 3.5 7.99978 3.5Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M16.0001 3.5H17.3997C19.5681 3.5 20.6523 3.5 21.3259 4.17362C21.9996 4.84724 21.9996 5.93144 21.9997 8.09982L21.9999 13.3998C22 15.5684 22 16.6526 21.3264 17.3263C20.6527 18 19.5684 18 17.3999 18H15.0495C13.567 18 12.2907 19.0464 12 20.5V5.5C12.9443 4.24097 14 3.5 16.0001 3.5Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}]];
const Ua = [[`path`, {
  d: `M14 21H16M14 21C13.1716 21 12.5 20.3284 12.5 19.5V17L12 17M14 21H10M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M12 17V21`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17H16C18.8284 17 20.2426 17 21.1213 16.1213C22 15.2426 22 13.8284 22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}]];
const Wa = [[`path`, {
  d: `M13.6903 19.4567C13.5 18.9973 13.5 18.4149 13.5 17.25C13.5 16.0851 13.5 15.5027 13.6903 15.0433C13.944 14.4307 14.4307 13.944 15.0433 13.6903C15.5027 13.5 16.0851 13.5 17.25 13.5C18.4149 13.5 18.9973 13.5 19.4567 13.6903C20.0693 13.944 20.556 14.4307 20.8097 15.0433C21 15.5027 21 16.0851 21 17.25C21 18.4149 21 18.9973 20.8097 19.4567C20.556 20.0693 20.0693 20.556 19.4567 20.8097C18.9973 21 18.4149 21 17.25 21C16.0851 21 15.5027 21 15.0433 20.8097C14.4307 20.556 13.944 20.0693 13.6903 19.4567Z`,
  stroke: `currentColor`,
  strokeLinecap: `square`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M13.6903 8.95671C13.5 8.49728 13.5 7.91485 13.5 6.75C13.5 5.58515 13.5 5.00272 13.6903 4.54329C13.944 3.93072 14.4307 3.44404 15.0433 3.1903C15.5027 3 16.0851 3 17.25 3C18.4149 3 18.9973 3 19.4567 3.1903C20.0693 3.44404 20.556 3.93072 20.8097 4.54329C21 5.00272 21 5.58515 21 6.75C21 7.91485 21 8.49728 20.8097 8.95671C20.556 9.56928 20.0693 10.056 19.4567 10.3097C18.9973 10.5 18.4149 10.5 17.25 10.5C16.0851 10.5 15.5027 10.5 15.0433 10.3097C14.4307 10.056 13.944 9.56928 13.6903 8.95671Z`,
  stroke: `currentColor`,
  strokeLinecap: `square`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M3.1903 19.4567C3 18.9973 3 18.4149 3 17.25C3 16.0851 3 15.5027 3.1903 15.0433C3.44404 14.4307 3.93072 13.944 4.54329 13.6903C5.00272 13.5 5.58515 13.5 6.75 13.5C7.91485 13.5 8.49728 13.5 8.95671 13.6903C9.56928 13.944 10.056 14.4307 10.3097 15.0433C10.5 15.5027 10.5 16.0851 10.5 17.25C10.5 18.4149 10.5 18.9973 10.3097 19.4567C10.056 20.0693 9.56928 20.556 8.95671 20.8097C8.49728 21 7.91485 21 6.75 21C5.58515 21 5.00272 21 4.54329 20.8097C3.93072 20.556 3.44404 20.0693 3.1903 19.4567Z`,
  stroke: `currentColor`,
  strokeLinecap: `square`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}], [`path`, {
  d: `M3.1903 8.95671C3 8.49728 3 7.91485 3 6.75C3 5.58515 3 5.00272 3.1903 4.54329C3.44404 3.93072 3.93072 3.44404 4.54329 3.1903C5.00272 3 5.58515 3 6.75 3C7.91485 3 8.49728 3 8.95671 3.1903C9.56928 3.44404 10.056 3.93072 10.3097 4.54329C10.5 5.00272 10.5 5.58515 10.5 6.75C10.5 7.91485 10.5 8.49728 10.3097 8.95671C10.056 9.56928 9.56928 10.056 8.95671 10.3097C8.49728 10.5 7.91485 10.5 6.75 10.5C5.58515 10.5 5.00272 10.5 4.54329 10.3097C3.93072 10.056 3.44404 9.56928 3.1903 8.95671Z`,
  stroke: `currentColor`,
  strokeLinecap: `square`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `3`
}]];
const Ga = [[`path`, {
  d: `M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M15.5 17L14 15.5M21 16L18.5303 13.5303C18.1908 13.1908 17.7302 13 17.25 13C16.7698 13 16.3092 13.1908 15.9697 13.5303L14 15.5`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7M15.5 8C15.2239 8 15 7.77614 15 7.5C15 7.22386 15.2239 7 15.5 7M15.5 8V7`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const Ka = [[`path`, {
  d: `M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const qa = [[`path`, {
  d: `M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M6.125 17H6M6.25 17C6.25 17.1381 6.13807 17.25 6 17.25C5.86193 17.25 5.75 17.1381 5.75 17C5.75 16.8619 5.86193 16.75 6 16.75C6.13807 16.75 6.25 16.8619 6.25 17Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M17.9062 16.6934H17.7812M18.0312 16.6934C18.0312 16.8314 17.9193 16.9434 17.7812 16.9434C17.6432 16.9434 17.5312 16.8314 17.5312 16.6934C17.5312 16.5553 17.6432 16.4434 17.7812 16.4434C17.9193 16.4434 18.0312 16.5553 18.0312 16.6934Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}], [`path`, {
  d: `M2 7H10`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `3`
}], [`path`, {
  d: `M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `4`
}], [`path`, {
  d: `M12 8.00019L18.5001 6`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `5`
}]];
const Ja = [[`path`, {
  d: `M4.51311 12C4.1118 11.9416 3.79336 11.8443 3.51321 11.6826C3.05313 11.417 2.67109 11.0349 2.40546 10.5748C2 9.87256 2 8.92972 2 7.04403C2 5.15834 2 4.21549 2.40546 3.51321C2.67109 3.05313 3.05313 2.67109 3.51321 2.40546C4.21549 2 5.15834 2 7.04403 2C8.92972 2 9.87256 2 10.5748 2.40546C11.0349 2.67109 11.417 3.05313 11.6826 3.51321C11.8443 3.79336 11.9416 4.1118 12 4.51311`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M9.52169 17C9.11624 16.9417 8.7952 16.8443 8.51301 16.6813C8.053 16.4158 7.671 16.0338 7.40541 15.5737C7 14.8715 7 13.9288 7 12.0434C7 10.1579 7 9.2152 7.40541 8.51301C7.671 8.053 8.053 7.671 8.51301 7.40541C9.2152 7 10.1579 7 12.0434 7C13.9288 7 14.8715 7 15.5737 7.40541C16.0338 7.671 16.4158 8.053 16.6813 8.51301C16.8443 8.7952 16.9417 9.11624 17 9.52169`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M12 17C12 15.1308 12 14.1962 12.4019 13.5C12.6652 13.0439 13.0439 12.6652 13.5 12.4019C14.1962 12 15.1308 12 17 12C18.8692 12 19.8038 12 20.5 12.4019C20.9561 12.6652 21.3348 13.0439 21.5981 13.5C22 14.1962 22 15.1308 22 17C22 18.8692 22 19.8038 21.5981 20.5C21.3348 20.9561 20.9561 21.3348 20.5 21.5981C19.8038 22 18.8692 22 17 22C15.1308 22 14.1962 22 13.5 21.5981C13.0439 21.3348 12.6652 20.9561 12.4019 20.5C12 19.8038 12 18.8692 12 17Z`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const Ya = [[`path`, {
  d: `M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `0`
}], [`circle`, {
  cx: `9.5`,
  cy: `8.5`,
  r: `1.5`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `1`
}], [`circle`, {
  cx: `16.5`,
  cy: `9.5`,
  r: `1.5`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `2`
}], [`path`, {
  d: `M7.125 15H7M7.25 15C7.25 15.1381 7.13807 15.25 7 15.25C6.86193 15.25 6.75 15.1381 6.75 15C6.75 14.8619 6.86193 14.75 7 14.75C7.13807 14.75 7.25 14.8619 7.25 15Z`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `3`
}]];
const Xa = [[`path`, {
  d: `M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M9.5 3L9.5 21`,
  stroke: `currentColor`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M5 7H6M5 10H6`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const Za = [[`circle`, {
  cx: `1.5`,
  cy: `1.5`,
  r: `1.5`,
  transform: `matrix(1 0 0 -1 16 8.00024)`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z`,
  stroke: `currentColor`,
  strokeWidth: `1.5`,
  key: `1`
}], [`path`, {
  d: `M7.00002 14.0002L10 17.0002`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `2`
}]];
const Qa = [[`path`, {
  d: `M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `0`
}], [`path`, {
  d: `M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10`,
  stroke: `currentColor`,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  strokeWidth: `1.5`,
  key: `1`
}]];
function $a(e, t) {
  let apikey = `sb_publishable_fKaGFdkneyeRFLiHJGEIDg_uYOFqCsw`;
  return fetch(`https://sgpjbmkswbvhdsbrifpa.supabase.co/rest/v1/rpc/${e}`, {
    method: `POST`,
    keepalive: true,
    headers: {
      "Content-Type": `application/json`,
      apikey,
      Authorization: `Bearer ${apikey}`
    },
    body: JSON.stringify(t)
  }).then(() => undefined, () => undefined);
}
const eo = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
let to = false;
const no = e => ({
  analytics_storage: e,
  ad_storage: e,
  ad_user_data: e,
  ad_personalization: e
});
function ro(e = true) {
  if (to || !eo() || !s.googleTagId) {
    return;
  }
  to = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag(`consent`, `default`, no(`denied`));
  window.gtag(`consent`, `update`, no(`granted`));
  window.gtag(`js`, new Date());
  window.gtag(`config`, s.googleTagId, {
    send_page_view: false
  });
  let t = document.createElement(`script`);
  t.async = true;
  t.src = `https://www.googletagmanager.com/gtag/js?id=${s.googleTagId}`;
  document.head.append(t);
  if (e) {
    oo();
  }
}
function io() {
  window.gtag?.(`consent`, `update`, no(`denied`));
  for (let e of document.cookie.split(/;\s*/).map(e => e.split(`=`)[0])) {
    if (/^(_ga|_gid|_gat|_gcl)/.test(e)) {
      for (let t of [``, `; domain=${window.location.hostname}`, `; domain=.affectui.com`]) {
        document.cookie = `${e}=; Max-Age=0; path=/${t}`;
      }
    }
  }
}
function ao(e, t) {
  if (to) {
    window.gtag?.(`event`, e, t);
  }
}
function oo() {
  ao(`page_view`, {
    page_location: window.location.href,
    page_title: document.title
  });
}
const so = `aui_ref`;
const co = e => /^[a-z0-9_-]{2,32}$/.test(e);
function lo() {
  let e = document.cookie.match(/(?:^|;\s*)aui_ref=([^;]+)/);
  let t = e ? decodeURIComponent(e[1]) : ``;
  if (co(t)) {
    return t;
  }
  return null;
}
function uo() {
  try {
    let e = document.cookie.match(/(?:^|;\s*)aui_vid=([A-Za-z0-9_-]{8,40})/);
    if (e) {
      return e[1];
    }
    let t = crypto.randomUUID().replace(/-/g, ``);
    let n = window.location.protocol === `https:` ? `; Secure` : ``;
    document.cookie = `aui_vid=${t}; Max-Age=31536000; Path=/; SameSite=Lax${n}`;
    return t;
  } catch {
    return null;
  }
}
function fo() {
  let e = new URL(window.location.href);
  let t = (e.searchParams.get(`ref`) ?? e.searchParams.get(`via`) ?? ``).trim().toLowerCase();
  if (!t) {
    return ho();
  }
  e.searchParams.delete(`ref`);
  e.searchParams.delete(`via`);
  window.history.replaceState(window.history.state, ``, e.pathname + e.search + e.hash);
  if (!co(t)) {
    return;
  }
  let n = window.location.protocol === `https:` ? `; Secure` : ``;
  document.cookie = `${so}=${encodeURIComponent(t)}; Max-Age=2592000; Path=/; SameSite=Lax${n}`;
  mo();
  vo(`Referral visit`, {
    from: window.location.pathname
  });
}
const po = `aui_ref_seen`;
function mo() {
  try {
    sessionStorage.setItem(po, `1`);
  } catch {}
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
} catch {}
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
var _o = e => e.replace(/[^a-zA-Z0-9 /:._-]/g, ``).trim().slice(0, 80);
function vo(e, t) {
  if (/^(localhost|127\.|\[::1\])/.test(window.location.hostname)) {
    return;
  }
  let p_source = t?.from == null ? t?.plan ?? null : _o(t.from) || null;
  let p_detail = t?.item == null ? t?.seats == null ? null : `${t.seats} seats` : _o(t.item) || null;
  $a(`track_funnel`, {
    p_event: go[e],
    p_source,
    p_detail,
    p_ref: lo(),
    p_vid: uo()
  });
  ao(go[e], {
    source: p_source ?? undefined,
    detail: p_detail ?? undefined
  });
}
const yo = `affectui-style`;
const bo = new Set();
function xo() {
  if (typeof window > `u`) {
    return `clean`;
  }
  let e = new URLSearchParams(window.location.search).get(`style`);
  if (e === `clean` || e === `classic`) {
    try {
      localStorage.setItem(yo, e);
    } catch {}
    return e;
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
let So = xo();
function Co(e) {
  if (e !== So) {
    vo(`Style switch`, {
      from: window.location.pathname,
      item: e
    });
    wo(e);
  }
}
function wo(e) {
  if (e === So) {
    return;
  }
  So = e;
  try {
    localStorage.setItem(yo, e);
  } catch {}
  let t = new URL(window.location.href);
  if (e === `classic`) {
    t.searchParams.set(`style`, `classic`);
  } else {
    t.searchParams.delete(`style`);
  }
  window.history.replaceState(window.history.state, ``, t);
  bo.forEach(e => e());
}
function useTo() {
  let [e, setE] = b.useState(So);
  b.useEffect(() => {
    let e = () => setE(So);
    bo.add(e);
    e();
    return () => {
      bo.delete(e);
    };
  }, []);
  return e;
}
function Eo(e, t) {
  if (t !== `clean` || !e.clean) {
    return e;
  }
  let {
    Preview,
    loadSource,
    loadDocs
  } = e.clean;
  return {
    ...e,
    Preview,
    loadSource,
    loadDocs: loadDocs ?? e.loadDocs,
    sourceSlug: `${e.slug}-clean`
  };
}
const DoComponent = () => <svg width={`16`} height={`14`} viewBox={`0 0 16 14`} aria-hidden={`true`}><rect x={`0.5`} y={`0.5`} width={`15`} height={`13`} rx={`3.5`} fill={`currentColor`} opacity={`0.18`} /><rect x={`2.5`} y={`2.5`} width={`11`} height={`6.5`} rx={`2`} fill={`var(--switch-card, #fff)`} stroke={`currentColor`} strokeOpacity={`0.35`} /><rect x={`9`} y={`10.4`} width={`4.5`} height={`1.6`} rx={`0.8`} fill={`currentColor`} opacity={`0.55`} /></svg>;
const OoComponent = () => <svg width={`16`} height={`14`} viewBox={`0 0 16 14`} aria-hidden={`true`}><rect x={`1.5`} y={`1.5`} width={`13`} height={`11`} rx={`2.5`} fill={`var(--switch-card, #fff)`} stroke={`currentColor`} strokeOpacity={`0.55`} /><path d={`M4 5h6M4 7.6h4`} stroke={`currentColor`} strokeOpacity={`0.55`} strokeLinecap={`round`} /></svg>;
function Ko1Component({
  className,
  compact,
  wide
}) {
  let r = useTo();
  let i = (e, t, n) => <button type={`button`} role={`radio`} data-look={e} aria-checked={r === e} onClick={() => Co(e)} title={`${t} style`}>{n}{t}</button>;
  return <div className={[`segmented style-switch`, compact && `style-switch--compact`, wide && `style-switch--wide`, className].filter(Boolean).join(` `)} role={`radiogroup`} aria-label={`Component style`}>{i(`classic`, `Classic`, <DoComponent />)}{i(`clean`, `Clean`, <OoComponent />)}</div>;
}
function AoComponent() {
  let e = useTo();
  return <div className={`stage__theme stage__style`} role={`radiogroup`} aria-label={`Component style`}>{[[`classic`, `Classic`, <DoComponent key={`c`} />], [`clean`, `Clean`, <OoComponent key={`n`} />]].map(([t, n, r]) => <button key={t} type={`button`} role={`radio`} data-look={t} aria-checked={e === t} aria-label={`${n} style`} title={`${n} style`} className={`stage__theme-btn`} onClick={() => Co(t)}>{r}</button>)}</div>;
}
const jo = [{
  id: `classic`,
  label: `Classic`,
  hint: `Cards on a gray tray`
}, {
  id: `clean`,
  label: `Clean`,
  hint: `One flat card`
}];
const MoComponent = ({
  look
}) => {
  if (look === `classic`) {
    return <svg width={`44`} height={`32`} viewBox={`0 0 44 32`} aria-hidden={`true`}><rect x={`0.5`} y={`0.5`} width={`43`} height={`31`} rx={`7`} fill={`currentColor`} opacity={`0.14`} /><rect x={`4`} y={`4`} width={`36`} height={`17`} rx={`4.5`} fill={`var(--card)`} stroke={`currentColor`} strokeOpacity={`0.25`} /><rect x={`8`} y={`9`} width={`16`} height={`2.5`} rx={`1.25`} fill={`currentColor`} opacity={`0.5`} /><rect x={`8`} y={`14`} width={`10`} height={`2.5`} rx={`1.25`} fill={`currentColor`} opacity={`0.28`} /><rect x={`26`} y={`24.5`} width={`14`} height={`3.5`} rx={`1.75`} fill={`currentColor`} opacity={`0.5`} /></svg>;
  }
  return <svg width={`44`} height={`32`} viewBox={`0 0 44 32`} aria-hidden={`true`}><rect x={`1`} y={`1`} width={`42`} height={`30`} rx={`5`} fill={`var(--card)`} stroke={`currentColor`} strokeOpacity={`0.4`} /><rect x={`6`} y={`7`} width={`16`} height={`2.5`} rx={`1.25`} fill={`currentColor`} opacity={`0.5`} /><rect x={`6`} y={`12`} width={`10`} height={`2.5`} rx={`1.25`} fill={`currentColor`} opacity={`0.28`} /><path d={`M1 19.5h42`} stroke={`currentColor`} strokeOpacity={`0.2`} /><rect x={`27`} y={`23.5`} width={`11`} height={`3.5`} rx={`1.75`} fill={`currentColor`} opacity={`0.5`} /></svg>;
};
function NoComponent() {
  let e = useTo();
  let [t, setT] = b.useState(false);
  let rRef = b.useRef(null);
  let i = b.useId();
  let a = jo.find(t => t.id === e) ?? jo[1];
  b.useEffect(() => {
    if (!t) {
      return;
    }
    let e = e => {
      if (!rRef.current?.contains(e.target)) {
        setT(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [t]);
  b.useEffect(() => {
    if (t) {
      rRef.current?.querySelector(`[aria-selected="true"]`)?.focus();
    }
  }, [t]);
  let o = e => {
    Co(e);
    setT(false);
    rRef.current?.querySelector(`.style-menu__trigger`)?.focus();
  };
  return <div ref={rRef} className={`style-menu`} data-open={t || undefined} onKeyDown={e => {
    if (e.key === `Escape` && t) {
      e.stopPropagation();
      setT(false);
      rRef.current?.querySelector(`.style-menu__trigger`)?.focus();
    }
    if (t && (e.key === `ArrowDown` || e.key === `ArrowUp`)) {
      e.preventDefault();
      let t = [...(rRef.current?.querySelectorAll(`.style-menu__option`) ?? [])];
      t[(t.indexOf(document.activeElement) + (e.key === `ArrowDown` ? 1 : -1) + t.length) % t.length]?.focus();
    }
  }}><button type={`button`} className={`style-menu__trigger`} aria-haspopup={`listbox`} aria-expanded={t} aria-controls={i} onClick={() => setT(e => !e)}><J1Component icon={Ya} /><span className={`style-menu__label`}>{`Style`}</span><span className={`style-menu__value`} data-look={a.id}>{a.label}</span><J1Component icon={Qa} size={14} /></button>{t && <div className={`style-menu__pop`} id={i} role={`listbox`} aria-label={`Component style`}>{jo.map(t => <button key={t.id} type={`button`} role={`option`} aria-selected={t.id === e} data-look={t.id} className={`style-menu__option`} onClick={() => o(t.id)}><span className={`style-menu__preview`}><MoComponent look={t.id} /></span><span className={`style-menu__text`}><span className={`style-menu__name`}>{t.label}</span><span className={`style-menu__hint`}>{t.hint}</span></span>{t.id === e && <J1Component icon={Qi} size={14} />}</button>)}</div>}</div>;
}
function PoComponent({
  open,
  path,
  onClose,
  onCollapse
}) {
  let [i, setI] = b.useState(() => new Set());
  let o = e => !i.has(e);
  let s = e => setI(t => {
    let n = new Set(t);
    if (n.has(e)) {
      n.delete(e);
    } else {
      n.add(e);
    }
    return n;
  });
  let l = e => {
    if (path === e) {
      return `page`;
    }
  };
  let UComponent = e => <div className={`tree__items tree__items--flat`}>{e.map(e => {
      let t = Ca(e);
      return <M key={e.slug} to={t} className={`nav-link`} aria-current={l(t)} onClick={onClose}>{e.name}{e.pro && <span className={`nav-link__pro-mark`} role={`img`} aria-label={`Pro`} data-tip={`Pro`}><J1Component icon={Vi} size={10} /></span>}</M>;
    })}</div>;
  let DComponent = (e, t, r, to_1, a, c) => {
    let l = o(e);
    return <div className={`section`}><div className={`section__head`}><M to={to_1} className={`section__label`} onClick={onClose}><J1Component icon={t} />{r}</M>{a !== null && <span className={`section__count`}>{a}</span>}<button className={`section__toggle`} aria-expanded={l} aria-label={`${l ? `Collapse` : `Expand`} ${r}`} onClick={() => s(e)}><J1Component icon={l ? Ba : Va} size={12} /></button></div>{l && <div className={`section__body`}>{c}</div>}</div>;
  };
  return <aside className={`sidebar`} data-open={open}><div className={`sidebar__head`}><M to={`/`} className={`logo`} aria-label={`${o_1.name} home`} onClick={onClose}><FaComponent /><span className={`logo__name`}>{o_1.name}</span></M>{onCollapse && <button type={`button`} className={`icon-btn sidebar__collapse`} aria-label={`Hide sidebar`} title={`Hide sidebar`} onClick={onCollapse}><J1Component icon={Xa} /></button>}</div><div className={`sidebar__scroll`}><Za1Component onNavigate={onClose} /><nav className={`sidebar__nav`} aria-label={`Primary`}><M to={`/components`} className={`nav-link`} aria-current={/^\/(components|screens|blocks|illustrations|motion)\/?$/.test(path) ? `page` : undefined} onClick={onClose}><J1Component icon={qa} />{`Library`}</M><M to={`/docs`} className={`nav-link`} aria-current={path.startsWith(`/docs`) ? `page` : undefined} onClick={onClose}><J1Component icon={Ha} />{`Docs`}</M>{path.startsWith(`/docs`) && <div className={`tree__items tree__items--flat`}>{L.map((e, r) => {
            let i = `/docs/${e.slug}`;
            return <M key={e.slug} to={i} className={`nav-link`} aria-current={path === i || path === `/docs` && r === 0 ? `page` : undefined} onClick={onClose}>{e.title}</M>;
          })}</div>}<M to={`/pricing`} className={`nav-link`} aria-current={l(`/pricing`)} onClick={onClose}><J1Component icon={Za} />{`Pricing`}</M></nav><nav className={`sections`} aria-label={`Library`}><div className={`sidebar__style`}><NoComponent /></div>{DComponent(`components`, Wa, `Components`, `/components`, Ti.length, UComponent(Ti))}{Di.length > 0 && DComponent(`screens`, Ua, `Screens`, `/screens`, Di.length, UComponent(Di))}{DComponent(`blocks`, Ka, `Blocks`, `/blocks`, Ei.length, UComponent(Ei))}{DComponent(`illustrations`, Ga, `Illustrations`, `/illustrations`, $.length, UComponent($))}{k.length > 0 && DComponent(`motion`, Ja, `Motion`, `/motion`, k.length, UComponent(k))}</nav></div></aside>;
}
function FoComponent() {
  return <section className={`hero`}><h1 className={`hero__title`}>{`Agent-ready UI for AI products – one file each, no dependencies.`}</h1></section>;
}
const Io = new Set();
let Lo = null;
let Ro = !n_2();
function zo(e) {
  Lo = e;
  Ro = true;
  Io.forEach(e => e());
}
async function Bo(e) {
  if (!e) {
    return zo(null);
  }
  let {
    data
  } = await (await t_2()).from(`profiles`).select(`plan`).eq(`id`, e.user.id).maybeSingle();
  zo({
    email: e.user.email ?? ``,
    plan: data?.plan === `pro` ? `pro` : `none`
  });
}
let Vo = null;
function Ho() {
  Vo ??= t_2().then(e => {
    e.auth.getSession().then(({
      data
    }) => Bo(data.session)).catch(() => zo(null));
    e.auth.onAuthStateChange((e, t) => {
      setTimeout(() => Bo(t), 0);
    });
    return e;
  });
  return Vo;
}
if (n_2()) {
  Ho();
}
async function Uo(e) {
  let {
    error
  } = await (await Ho()).auth.signInWithOtp({
    email: e.trim().toLowerCase(),
    options: {
      emailRedirectTo: `${window.location.origin}/account`
    }
  });
  return error?.message ?? null;
}
async function Wo(e, t) {
  let {
    error
  } = await (await Ho()).auth.verifyOtp({
    email: e.trim().toLowerCase(),
    token: t.trim(),
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
    return [`google`, `github`].filter(t => external?.[t]);
  } catch {
    return [];
  }
}
async function z(e = false) {
  await (await Ho()).auth.signOut({
    scope: e ? `global` : `local`
  });
}
async function Ko() {
  let {
    data
  } = await (await Ho()).auth.getSession();
  await Bo(data.session);
  return Lo;
}
const qo = user => user.email.charAt(0).toUpperCase();
function useJo() {
  let [e, setE] = b.useState(Lo);
  b.useEffect(() => {
    let e = () => setE(Lo);
    Io.add(e);
    e();
    return () => {
      Io.delete(e);
    };
  }, []);
  return e;
}
function useYo() {
  let [e, setE] = b.useState(Ro);
  b.useEffect(() => {
    let e = () => setE(Ro);
    Io.add(e);
    e();
    return () => {
      Io.delete(e);
    };
  }, []);
  return e;
}
async function Xo(e) {
  if (!e.pro) {
    return e.loadSource();
  }
  let {
    data
  } = await (await t_2()).auth.getSession();
  let n = data.session?.access_token;
  if (!n) {
    throw Error(`Sign in with a Pro account to get the code.`);
  }
  let r = await fetch(`/api/source?slug=${encodeURIComponent(e.sourceSlug ?? e.slug)}`, {
    headers: {
      Authorization: `Bearer ${n}`
    }
  });
  let i = await r.json().catch(() => ({}));
  if (!r.ok || typeof i.source != `string`) {
    throw Error(i.error ?? `Could not load the code.`);
  }
  return i.source;
}
function useZo(e, t) {
  let [n, setN] = b.useState(null);
  let iRef = b.useRef(e);
  iRef.current = e;
  let {
    pro
  } = e;
  let o = e.sourceSlug ?? e.slug;
  b.useEffect(() => {
    setN(null);
    if (pro && !t) {
      return;
    }
    let e = true;
    Xo(iRef.current).then(t => e && setN(t)).catch(t => e && setN(`// ${t instanceof Error ? t.message : `Could not load the code.`}
// Reload the page to try again, or write to us if it keeps happening.`));
    return () => {
      e = false;
    };
  }, [o, pro, t]);
  return n;
}
function Qo(e, p_action) {
  window.dispatchEvent(new CustomEvent(`affectui:copied`, {
    detail: e
  }));
  if (!/^(localhost|127\.|\[::1\])/.test(window.location.hostname)) {
    $a(`track_usage`, {
      p_slug: e,
      p_action,
      p_ref: lo()
    });
  }
}
const $o = e => {
  if (e.added) {
    return Date.parse(e.added);
  }
  return NaN;
};
function B(e, t = Date.now()) {
  let n = $o(e);
  return t - n >= 0 && t - n <= 86400000;
}
const es = [];
let ts = false;
const ns = e => {
  if (typeof window.requestIdleCallback == `function`) {
    window.requestIdleCallback(e, {
      timeout: 120
    });
  } else {
    setTimeout(e, 16);
  }
};
function rs() {
  let e = es.shift();
  if (!e) {
    ts = false;
    return;
  }
  ts = true;
  ns(() => {
    b.startTransition(e);
    rs();
  });
}
function is(e) {
  es.push(e);
  if (!ts) {
    rs();
  }
}
function As1Component({
  Preview,
  eager = false
}) {
  let nRef = b.useRef(null);
  let rRef = b.useRef(null);
  let [i, setI] = b.useState(eager);
  b.useEffect(() => {
    if (!(`IntersectionObserver` in window)) {
      return setI(true);
    }
    if (!i) {
      let e = nRef.current;
      if (!e) {
        return;
      }
      rRef.current = e.parentElement;
      let t = new IntersectionObserver(e => {
        if (e.some(e => e.isIntersecting)) {
          t.disconnect();
          is(() => setI(true));
        }
      }, {
        rootMargin: `400px 0px`
      });
      t.observe(e);
      return () => t.disconnect();
    }
    let rRef_current = rRef.current;
    if (!rRef_current || eager) {
      return;
    }
    let o = new IntersectionObserver(e => e.every(e => !e.isIntersecting) && setI(false), {
      rootMargin: `1800px 0px`
    });
    o.observe(rRef_current);
    return () => o.disconnect();
  }, [i, eager]);
  if (i) {
    return <b.Suspense fallback=<div className={`lazy-preview`} aria-hidden />>{<Preview />}</b.Suspense>;
  }
  return <div ref={nRef} className={`lazy-preview`} aria-hidden />;
}
function Os1Component({
  children,
  minHeight
}) {
  let nRef = b.useRef(null);
  let [r, setR] = b.useState(false);
  b.useEffect(() => {
    let nRef_current = nRef.current;
    if (!nRef_current || !(`IntersectionObserver` in window)) {
      return setR(true);
    }
    let t = new IntersectionObserver(e => {
      if (e.some(e => e.isIntersecting)) {
        t.disconnect();
        is(() => setR(true));
      }
    }, {
      rootMargin: `600px 0px`
    });
    t.observe(nRef_current);
    return () => t.disconnect();
  }, []);
  if (r) {
    return <b.Suspense fallback=<div style={{
      minHeight
    }} aria-hidden />>{children}</b.Suspense>;
  }
  return <div ref={nRef} style={{
    minHeight
  }} aria-hidden />;
}
const ss = `aui_offer`;
const cs = () => {
  try {
    let e = localStorage.getItem(ss);
    if (e === null) {
      return undefined;
    }
    return JSON.parse(e);
  } catch {
    return;
  }
};
let V = (() => {
  let e = cs();
  return {
    offer: e === undefined ? null : e,
    loaded: false
  };
})();
const ls = new Set();
let us = null;
function ds() {
  us ??= fetch(`/api/pricing`).then(e => {
    if (e.ok) {
      return e.json();
    }
    return null;
  }).then(e => {
    if (e && e.offer !== undefined) {
      V = {
        offer: e.offer,
        loaded: true
      };
      try {
        localStorage.setItem(ss, JSON.stringify(e.offer));
      } catch {}
      ls.forEach(e => e(V));
    }
  }).catch(() => undefined);
  return us;
}
function useFs(e = true) {
  let [t, setT] = b.useState(V);
  b.useEffect(() => {
    if (e) {
      ls.add(setT);
      setT(V);
      ds();
      return () => {
        ls.delete(setT);
      };
    }
  }, [e]);
  return t;
}
const ps = () => /(^|\.)affectui\.com$/.test(window.location.hostname);
let ms = false;
function hs(e = true) {
  if (ms || !ps() || !s.metaPixelId) {
    return;
  }
  ms = true;
  let t = function (...e) {
    if (t.callMethod) {
      t.callMethod(...e);
    } else {
      t.queue.push(e);
    }
  };
  t.queue = [];
  t.push = t;
  t.loaded = true;
  t.version = `2.0`;
  window.fbq = t;
  window._fbq = window._fbq || t;
  let n = document.createElement(`script`);
  n.async = true;
  n.src = `https://connect.facebook.net/en_US/fbevents.js`;
  document.head.append(n);
  t(`init`, s.metaPixelId);
  if (e) {
    vs();
  }
}
function gs() {
  window.fbq?.(`consent`, `revoke`);
  for (let e of [`_fbp`, `_fbc`]) {
    for (let t of [``, `; domain=${window.location.hostname}`, `; domain=.affectui.com`]) {
      document.cookie = `${e}=; Max-Age=0; path=/${t}`;
    }
  }
}
function _s(e, t, eventID) {
  if (ms) {
    if (eventID) {
      window.fbq?.(`track`, e, t ?? {}, {
        eventID
      });
    } else {
      window.fbq?.(`track`, e, t ?? {});
    }
  }
}
function vs() {
  if (ms) {
    window.fbq?.(`track`, `PageView`);
  }
}
function ys() {
  let e = e => document.cookie.match(RegExp(`(?:^|;\\s*)${e}=([^;]+)`))?.[1];
  return {
    fbp: e(`_fbp`),
    fbc: e(`_fbc`)
  };
}
const bs = `aui_consent`;
const xs = 2;
const Ss = new Set();
let Cs = false;
function ws() {
  try {
    let e = JSON.parse(localStorage.getItem(bs) ?? `null`);
    if (e?.v === xs && (e.choice === `granted` || e.choice === `denied`)) {
      return e.choice;
    }
    return null;
  } catch {
    return null;
  }
}
function Ts(choice) {
  try {
    localStorage.setItem(bs, JSON.stringify({
      choice,
      v: xs,
      at: new Date().toISOString()
    }));
  } catch {}
  Cs = false;
  if (choice === `granted`) {
    ro();
    hs();
  } else {
    io();
    gs();
  }
  Ss.forEach(e => e());
}
function Es() {
  Cs = true;
  Ss.forEach(e => e());
}
function Ds() {
  if (ws() === `granted`) {
    ro(false);
    hs(false);
  }
}
function useOs() {
  let [, setE] = b.useState(0);
  b.useEffect(() => {
    let t = () => setE(e => e + 1);
    Ss.add(t);
    return () => void Ss.delete(t);
  }, []);
  return {
    open: Cs || ws() === null,
    current: ws()
  };
}
function ks() {
  oo();
  vs();
}
const As = `aui_pending_purchase`;
const js = (item_id, price) => ({
  item_id,
  item_name: item_id === `team` ? `affectUI Team` : `affectUI Individual`,
  price,
  quantity: 1
});
function Ms(e) {
  if (ws() === `granted`) {
    ao(`begin_checkout`, {
      currency: `USD`,
      value: e.value,
      items: [js(e.kind, e.value)]
    });
    _s(`InitiateCheckout`, {
      currency: `USD`,
      value: e.value,
      content_ids: [e.kind],
      content_type: `product`,
      num_items: 1
    });
    try {
      localStorage.setItem(As, JSON.stringify(e));
    } catch {}
  }
}
function Ns() {
  try {
    let e = localStorage.getItem(As);
    if (!e) {
      return;
    }
    localStorage.removeItem(As);
    let t = JSON.parse(e);
    ao(`purchase`, {
      transaction_id: t.id,
      currency: `USD`,
      value: t.value,
      items: [js(t.kind, t.value)]
    });
    _s(`Purchase`, {
      currency: `USD`,
      value: t.value,
      content_ids: [t.kind],
      content_type: `product`
    }, `purchase-${t.id}`);
  } catch {}
}
function Ps(e) {
  ao(`generate_lead`, {
    topic: e
  });
  _s(`Lead`, {
    content_name: e
  });
}
async function Fs(e, seats = 1) {
  vo(`Checkout start`, {
    plan: e,
    seats
  });
  let n = n_2() ? (await (await t_2()).auth.getSession()).data.session?.access_token : undefined;
  let i = await fetch(`/api/checkout`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
      ...(n ? {
        Authorization: `Bearer ${n}`
      } : {})
    },
    body: JSON.stringify({
      kind: e,
      seats,
      ...(ws() === `granted` ? {
        ads: true,
        ...ys()
      } : {})
    })
  });
  let o = await i.json().catch(() => ({}));
  if (!i.ok || !o.url) {
    throw Error(o.error ?? `Checkout is not available right now.`);
  }
  if (o.id && o.value != null) {
    Ms({
      id: o.id,
      value: o.value,
      kind: e
    });
  }
  window.location.assign(o.url);
}
let Is = false;
function Ls() {
  if (!Is) {
    Is = true;
    fetch(`/api/checkout`, {
      method: `GET`
    }).catch(() => undefined);
    for (let href of [`https://checkout.stripe.com`, `https://js.stripe.com`, `https://m.stripe.network`]) {
      let t = Object.assign(document.createElement(`link`), {
        rel: `preconnect`,
        href,
        crossOrigin: ``
      });
      document.head.append(t);
    }
  }
}
let Rs = null;
const zs = new Set();
const Bs = e => {
  Rs = e;
  zs.forEach(e => e());
};
const Vs = pathname => {
  let t = pathname.match(/^\/(?:components|screens|blocks|illustrations|motion)\/([a-z0-9-]+)\/?$/)?.[1];
  return Oi.find(e => e.slug === t && e.pro) ?? null;
};
function Hs({
  entry,
  from
}) {
  let n = entry ?? Vs(window.location.pathname);
  vo(`Upsell open`, {
    from,
    item: n?.slug
  });
  Ls();
  Bs({
    entry: n,
    from
  });
}
const Us = from => {
  if (Rs) {
    vo(`Upsell close`, {
      from,
      item: Rs.entry?.slug
    });
  }
  Bs(null);
};
const Ws = e => `$${e.toLocaleString(`en-US`)}`;
function GsComponent() {
  let e = b.useSyncExternalStore(e => {
    zs.add(e);
    return () => zs.delete(e);
  }, () => Rs);
  let t = useJo();
  let [n, setN] = b.useState(false);
  let [i, setI] = b.useState(null);
  let oRef = b.useRef(null);
  let c = !!e && t?.plan !== `pro`;
  let {
    offer
  } = useFs(c);
  b.useEffect(() => {
    if (!c) {
      return;
    }
    setN(false);
    setI(null);
    oRef.current?.focus();
    let e = e => e.key === `Escape` && Us(`esc`);
    document.addEventListener(`keydown`, e);
    document.documentElement.style.overflow = `hidden`;
    return () => {
      document.removeEventListener(`keydown`, e);
      document.documentElement.style.overflow = ``;
    };
  }, [c, e]);
  if (!c || !e) {
    return null;
  }
  let {
    entry
  } = e;
  let length = Oi.filter(e => e.pro).length;
  let f = (...e) => Oi.filter(t => t.pro && e.includes(t.kind ?? `component`)).length;
  let p = [`${f(`screen`)} screens, ${f(`component`)} components and more`, `Copy, CLI or MCP install`, `Lifetime updates, commercial use`];
  let m = offer ? offer.price : i_1.individual;
  return <div className={`promo upsell`} onPointerDown={e => e.target === e.currentTarget && Us(`backdrop`)}><div className={`promo__tray upsell__tray`} role={`dialog`} aria-modal={`true`} aria-labelledby={`upsell-title`} tabIndex={-1} ref={oRef}><div className={`upsell__card`}><button type={`button`} className={`promo__close`} aria-label={`Close`} onClick={() => Us(`x`)}><J1Component icon={Ii} size={16} /></button><div className={`upsell__body`}><span className={`promo__eyebrow pro-badge`}><J1Component icon={Vi} size={12} /><span>{`Pro`}</span></span><h2 id={`upsell-title`} className={`upsell__title`}>{entry ? `Unlock ${entry.name}` : `Unlock affectUI Pro`}</h2><p className={`upsell__text`}>{`Pay once, keep everything – including all we add next.`}</p><div className={`upsell__count`}><b data-n={length}>{length}</b><span>{entry ? `Pro items, ${entry.name} included` : `Pro items in one license`}</span></div><ul className={`upsell__list`}>{p.map(e => <li key={e}><span className={`upsell__check`}><J1Component icon={Qi} size={10} /></span><span>{e}</span></li>)}</ul>{offer && <p className={`upsell__offer`} aria-label={`${Ws(m)} once, was ${Ws(i_1.individual)}`}><s aria-hidden={`true`}>{Ws(i_1.individual)}</s><span className={`pill pill--pro upsell__pill`}>{offer.badge}</span></p>}<button type={`button`} className={`promo__cta upsell__cta`} disabled={n} onClick={async () => {
            vo(`Plan click`, {
              plan: `individual`,
              item: `upsell`
            });
            setN(true);
            setI(null);
            try {
              await Fs(`individual`);
            } catch (error) {
              let t = error instanceof Error ? error.message : `Checkout is not available right now.`;
              vo(`Checkout error`, {
                plan: `individual`,
                item: t
              });
              setI(t);
              setN(false);
            }
          }}>{n ? `Opening checkout…` : `Get lifetime access – ${Ws(m)}`}</button>{i && <p className={`tier__error`} role={`alert`}>{i}</p>}<div className={`upsell__more`}><M to={`/pricing`} onClick={() => Us(`team`)}>{`Team `}{i_1.teamSeats}{` seats `}{Ws(i_1.team)}</M></div></div></div></div></div>;
}
function KsComponent({
  entry,
  look
}) {
  let n = useTo();
  let r = look ?? n;
  let i = () => {
    if (look && look !== n) {
      wo(look);
    }
  };
  let a = Eo(entry, r);
  let o = a === entry ? `classic` : `clean`;
  let {
    Preview
  } = a;
  let c = useJo();
  return <article className={`card`} id={a.slug} onClick={e => {
    if (!(e.target.closest(`a, button, input, label, select, textarea, [role='switch']`) || window.getSelection()?.toString())) {
      i();
      ga(Ca(a));
    }
  }}><div className={`card__stage`}><div key={o} className={`card__preview`} data-look={o}><As1Component Preview={Preview} /></div><span className={`card__tag`}>{a.category}</span>{(entry.clean || a.pro) && <div className={`card__badges`}>{entry.clean && <span className={`card__styles`} title={`Comes in Classic and Clean`}>{`2 styles`}</span>}{a.pro && <La1Component className={`card__pro`} />}</div>}</div><div className={`card__footer`}><M to={Ca(a)} className={`card__info`} onClick={i}><h3 className={`card__title`}>{a.name}{B(a) && <span className={`card__new`}>{`New`}</span>}</h3><p className={`card__desc`}>{a.description}</p></M><div className={`card__actions`}>{a.pro && c?.plan !== `pro` ? <button className={`icon-btn icon-btn--card`} aria-label={`${a.name} is part of Pro – see pricing`} title={`Part of Pro – get Pro to copy`} onClick={() => {
          vo(`Get Pro`, {
            from: `card copy`,
            item: a.slug
          });
          Hs({
            entry: a,
            from: `card copy`
          });
        }}><J1Component icon={Ri} size={14} /></button> : <IComponent value={() => Xo(a)} className={`icon-btn--card`} onCopied={() => Qo(a.sourceSlug ?? a.slug, `copy_code`)} />}</div></div></article>;
}
const QsContext = b.createContext(false);
const width = 1440;
const Ys = 900;
function XsComponent({
  children
}) {
  let t = b.useContext(QsContext);
  let nRef = b.useRef(null);
  let [r, setR] = b.useState(0);
  b.useLayoutEffect(() => {
    let nRef_current = nRef.current;
    if (!nRef_current || t) {
      return;
    }
    let r = () => setR(nRef_current.clientWidth / width);
    r();
    let a = new ResizeObserver(r);
    a.observe(nRef_current);
    return () => a.disconnect();
  }, [t]);
  if (t) {
    return <div className={`screen-full`}>{children}</div>;
  }
  return <div ref={nRef} className={`screen-stage`} style={{
    aspectRatio: `${width} / ${Ys}`
  }}>{r > 0 && <div className={`screen-stage__canvas`} style={{
      width,
      height: Ys,
      transform: `scale(${r})`
    }}>{children}</div>}</div>;
}
const Zs = [`Q3 Campaign`, `Brand assets`, `Hiring`, `Research`];
const Qs = {
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
function $s(e) {
  let t = /\/full\/?$/.test(window.location.pathname);
  let n = Zs.includes(e);
  let r = Qs[e] ?? (n ? `folder` : null);
  if (!r) {
    return;
  }
  let i = n ? `?folder=${encodeURIComponent(e)}` : ``;
  ga(`/screens/${r}${t ? `/full` : ``}${i}`);
  window.dispatchEvent(new Event(`screen-query`));
}
function useEc() {
  let e = () => new URLSearchParams(window.location.search).get(`folder`) ?? undefined;
  let [t, setT] = b.useState(e);
  b.useEffect(() => {
    let t = () => setT(e());
    window.addEventListener(`screen-query`, t);
    window.addEventListener(`popstate`, t);
    return () => {
      window.removeEventListener(`screen-query`, t);
      window.removeEventListener(`popstate`, t);
    };
  }, []);
  return t;
}
const tc = [{
  title: `Site`,
  links: [{
    label: `Home`,
    to: `/`
  }, {
    label: `Components`,
    to: `/components`
  }, {
    label: `Screens`,
    to: `/screens`
  }, {
    label: `Blocks`,
    to: `/blocks`
  }, {
    label: `Illustrations`,
    to: `/illustrations`
  }, {
    label: `Motion`,
    to: `/motion`
  }, {
    label: `Pricing`,
    to: `/pricing`
  }]
}, {
  title: `Docs`,
  links: [{
    label: `Introduction`,
    to: `/docs`
  }, {
    label: `Installation`,
    to: `/docs/installation`
  }, {
    label: `Accessibility`,
    to: `/docs/accessibility`
  }]
}, {
  title: `Legal & Account`,
  links: [{
    label: `Account`,
    to: `/account`
  }, {
    label: `License`,
    to: `/license`
  }, {
    label: `Terms`,
    to: `/terms`
  }, {
    label: `Privacy`,
    to: `/privacy`
  }, {
    label: `Refund`,
    to: `/refund`
  }, {
    label: `Imprint`,
    to: `/imprint`
  }, {
    label: `Cookie settings`,
    onClick: Es
  }, {
    label: `Contact`,
    to: `/contact`
  }]
}];
function Nc1Component() {
  return <footer className={`footer`}><div className={`footer__top`}><div className={`footer__brand`}><M to={`/`} className={`logo footer__logo`}><FaComponent /><span className={`logo__name`}>{o_1.name}</span></M><p>{o_1.tagline}</p></div><nav className={`footer__cols`} aria-label={`Footer`}>{tc.map(e => <div key={e.title} className={`footer__col`}><span className={`footer__heading`}>{e.title}</span>{e.links.map(e => {
            if (e.to) {
              return <M key={e.label} to={e.to}>{e.label}</M>;
            }
            if (e.onClick) {
              return <button key={e.label} type={`button`} className={`footer__btn`} onClick={e.onClick}>{e.label}</button>;
            }
            return <a key={e.label} href={e.href}>{e.label}</a>;
          })}</div>)}</nav></div><p className={`footer__credit`}>{`Created by`}{` `}<a href={o_1.author.url} target={`_blank`} rel={`noreferrer`}>{o_1.author.name}</a></p></footer>;
}
const rc = () => {
  try {
    let e = localStorage.getItem(`theme`);
    if (e === `light` || e === `dark`) {
      return e;
    }
    return `system`;
  } catch {
    return `system`;
  }
};
const ic = new Set();
let ac = null;
function useOc() {
  let [e, setE] = b.useState(() => ac ??= rc());
  b.useEffect(() => {
    ic.add(setE);
    return () => {
      ic.delete(setE);
    };
  }, []);
  b.useEffect(() => {
    let document_documentElement = document.documentElement;
    try {
      if (e === `system`) {
        delete document_documentElement.dataset.theme;
        localStorage.removeItem(`theme`);
      } else {
        document_documentElement.dataset.theme = e;
        localStorage.setItem(`theme`, e);
      }
    } catch {}
  }, [e]);
  b.useEffect(() => {
    let document_documentElement = document.documentElement;
    let t = matchMedia(`(prefers-color-scheme: dark)`);
    let n = () => {
      let theme = document_documentElement.dataset.theme;
      document_documentElement.classList.toggle(`dark`, theme ? theme === `dark` : t.matches);
    };
    n();
    t.addEventListener(`change`, n);
    return () => t.removeEventListener(`change`, n);
  }, [e]);
  return {
    theme: e,
    setTheme: e => {
      ac = e;
      ic.forEach(t => t(e));
    }
  };
}
const sc = [{
  value: `light`,
  label: `Light theme`,
  icon: Zi
}, {
  value: `dark`,
  label: `Dark theme`,
  icon: qi
}];
function Cc1Component() {
  let {
    theme,
    setTheme
  } = useOc();
  let n = theme === `system` ? window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` : theme;
  return <div className={`theme-switch theme-switch--top`} role={`radiogroup`} aria-label={`Theme`}>{sc.map(({
      value,
      label,
      icon
    }) => <button key={value} role={`radio`} aria-checked={n === value} aria-label={label} className={`icon-btn`} onClick={() => setTheme(value)}><J1Component icon={icon} size={14} /></button>)}</div>;
}
let lc = null;
const uc = () => lc ??= fetch(`/api/github-stars`).then(e => e.json()).then(e => {
  if (typeof e.stars == `number`) {
    return e.stars;
  }
  return null;
}).catch(() => null);
const dc = e => {
  if (e >= 1000) {
    return `${(e / 1000).toFixed(1).replace(/\.0$/, ``)}k`;
  }
  return String(e);
};
function Fc1Component({
  className = ``
}) {
  let [t, setT] = b.useState(null);
  b.useEffect(() => {
    let e = true;
    uc().then(t => e && setT(t));
    return () => {
      e = false;
    };
  }, []);
  let r = t !== null && t > 0;
  return <a className={`btn btn--secondary topbar__github${r ? `` : ` btn--icon`} ${className}`.trim()} href={o_1.links.github} target={`_blank`} rel={`noreferrer`} aria-label={r ? `${o_1.name} on GitHub, ${t} stars` : `${o_1.name} on GitHub`} title={`Star on GitHub`}><J1Component icon={Hi} size={15} />{r && <span className={`topbar__github-count`}>{dc(t)}</span>}</a>;
}
function Pc1Component({
  tabs,
  end
}) {
  let nRef = b.useRef(null);
  let [r, setR] = b.useState(tabs[0]?.id);
  b.useEffect(() => {
    let t = 0;
    let r = () => {
      t = 0;
      let nRef_current = nRef.current;
      if (!nRef_current) {
        return;
      }
      let bottom = nRef_current.getBoundingClientRect().bottom;
      let o = tabs[0]?.id;
      for (let t of tabs) {
        let e = document.querySelector(`#${t.id} .library__title`) ?? document.getElementById(t.id);
        if (e && e.getBoundingClientRect().top <= bottom + 48) {
          o = t.id;
        }
      }
      let s = ua();
      if (s ? s.scrollTop + s.clientHeight >= s.scrollHeight - 4 : window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        o = tabs[tabs.length - 1]?.id;
      }
      setR(o);
    };
    let a = () => {
      t ||= requestAnimationFrame(r);
    };
    r();
    document.addEventListener(`scroll`, a, {
      passive: true,
      capture: true
    });
    window.addEventListener(`resize`, a);
    return () => {
      document.removeEventListener(`scroll`, a, {
        capture: true
      });
      window.removeEventListener(`resize`, a);
      cancelAnimationFrame(t);
    };
  }, [tabs]);
  let aRef = b.useRef(null);
  b.useLayoutEffect(() => {
    let e = () => {
      let e = nRef.current?.querySelector(`[data-id="${r}"]`);
      if (e && aRef.current) {
        aRef.current.style.transform = `translateX(${e.offsetLeft}px)`;
        aRef.current.style.width = `${e.offsetWidth}px`;
      }
    };
    e();
    let t = requestAnimationFrame(() => aRef.current?.setAttribute(`data-ready`, ``));
    window.addEventListener(`resize`, e);
    document.fonts?.ready.then(e);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener(`resize`, e);
    };
  }, [r]);
  let o = e => {
    let nRef_current = nRef.current;
    if (nRef_current && da() > 0 && nRef_current.getBoundingClientRect().top <= parseFloat(getComputedStyle(nRef_current).top) + 0.5) {
      pa();
    }
    setR(e);
  };
  b.useEffect(() => {
    let e = nRef.current?.querySelector(`.lib-tabs__list`);
    let t = e?.querySelector(`[data-id="${r}"]`);
    if (!(!e || !t || e.scrollWidth <= e.clientWidth)) {
      e.scrollTo({
        left: t.offsetLeft - (e.clientWidth - t.offsetWidth) / 2,
        behavior: `smooth`
      });
    }
  }, [r]);
  return <nav ref={nRef} className={`lib-tabs`} aria-label={`Library sections`}><div className={`lib-tabs__row`}><div className={`lib-tabs__list`}>{tabs.map(e => <M key={e.id} to={`/${e.id}`} data-id={e.id} className={`lib-tabs__tab`} aria-current={r === e.id ? `true` : undefined} onClick={() => o(e.id)}>{e.label}<span>{e.count}</span></M>)}<span ref={aRef} className={`lib-tabs__ink`} aria-hidden={`true`} /></div>{end && <div className={`lib-tabs__end`}>{end}</div>}</div></nav>;
}
function Mc1Component({
  label = `Get Pro`,
  className = ``
}) {
  return <M to={o_1.links.pro} className={`btn pro-badge btn--pro ${className}`} onClick={e => {
    vo(`Get Pro`, {
      from: window.location.pathname
    });
    if (!(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)) {
      e.preventDefault();
      Hs({
        from: window.location.pathname
      });
    }
  }}><J1Component icon={Vi} size={14} /><span>{label}</span></M>;
}
function HcComponent({
  compact = false,
  label = `Source code`
}) {
  return <div className={`locked`} data-compact={compact || undefined}><div className={`locked__lines`} aria-hidden>{(compact ? [62, 48, 70] : [38, 64, 52, 80, 44, 70, 58, 34, 66, 48]).map((e, t) => <span key={t} style={{
        width: `${e}%`,
        marginLeft: t % 3 == 1 ? 24 : t % 3 == 2 ? 48 : 0
      }} />)}</div><div className={`locked__body`}><span className={`locked__icon`}><J1Component icon={Gi} size={compact ? 14 : 16} /></span><div className={`locked__text`}><strong>{label}{` is part of Pro`}</strong>{!compact && <span>{`Get Pro to copy the code, install it with the CLI and use it in your projects.`}</span>}</div><Mc1Component label={compact ? `Get Pro` : `Unlock with Pro`} /></div></div>;
}
function Gc1Component({
  pro = false
}) {
  let {
    offer,
    loaded
  } = useFs(!pro);
  if (useA() !== `/`) {
    return null;
  }
  if (offer && !pro) {
    let e = loaded ? `${offer.left} of ${offer.until} spots left` : null;
    return <div className={`offer-banner`} role={`region`} aria-label={offer.name}><M to={`/pricing`} className={`offer-banner__link`}><J1Component icon={Vi} size={12} /><span className={`offer-banner__long`}><strong>{offer.name}</strong>{` · Pro for $`}{offer.price}{` once instead of $`}{i_1.individual}{e && <>{` · only `}{e}</>}</span><span className={`offer-banner__short`}><strong>{offer.name}</strong>{` · $`}{offer.price}{loaded && <>{` · `}{offer.left}{` spots left`}</>}</span><span className={`offer-banner__arrow`} aria-hidden={`true`}>{`→`}</span></M></div>;
  }
  if (!a_1 || pro) {
    return null;
  }
  let r = Oi.filter(e => e.pro);
  let i = a_1.featured.map(e => r.find(t => t.slug === e)?.name).filter(Boolean);
  let a = r.length - i.length;
  let c = i.length > 1 ? `${i.slice(0, -1).join(`, `)}, ${i.at(-1)}` : i[0] ?? ``;
  return <div className={`offer-banner`} role={`region`} aria-label={`affectUI Pro`}><M to={`/pricing`} className={`offer-banner__link`}><J1Component icon={Xi} size={12} /><span className={`offer-banner__long`}>{c ? <><strong>{c}</strong>{` and `}{a}{` more in Pro`}</> : <><strong>{r.length}{` items`}</strong>{` in Pro`}</>}</span><span className={`offer-banner__short`}>{i[0] ? <><strong>{i[0]}</strong>{` + `}{r.length - 1}{` more in Pro`}</> : <><strong>{r.length}{` items`}</strong>{` in Pro`}</>}</span><span className={`offer-banner__arrow`} aria-hidden={`true`}>{`→`}</span></M></div>;
}
const _c = `affectui-promo`;
const vc = `affectui-promo-time`;
function yc() {
  try {
    return JSON.parse(localStorage.getItem(_c) ?? `null`);
  } catch {
    return null;
  }
}
function bc(e) {
  try {
    localStorage.setItem(_c, JSON.stringify(e));
  } catch {}
}
const xc = e => String(e).padStart(2, `0`);
function ScComponent() {
  let o_1_promo = o_1.promo;
  let t = useJo();
  let [n, setN] = b.useState(false);
  let [i, setI] = b.useState(Date.now);
  let [o, setO] = b.useState(false);
  let lRef = b.useRef(null);
  let u = t?.plan === `pro`;
  b.useEffect(() => {
    if (!o_1_promo.enabled || u || yc()) {
      return;
    }
    let t = Number(sessionStorage.getItem(vc) ?? 0);
    let n = window.setInterval(() => {
      if (document.visibilityState === `visible`) {
        t += 1;
        try {
          sessionStorage.setItem(vc, String(t));
        } catch {}
        if (t >= o_1_promo.delaySeconds) {
          window.clearInterval(n);
          bc({
            shownAt: Date.now(),
            closed: false
          });
          setN(true);
        }
      }
    }, 1000);
    return () => window.clearInterval(n);
  }, [o_1_promo.enabled, o_1_promo.delaySeconds, u]);
  b.useEffect(() => {
    if (!n) {
      return;
    }
    let e = window.setInterval(() => setI(Date.now()), 1000);
    lRef.current?.focus();
    let t = e => e.key === `Escape` && d();
    document.addEventListener(`keydown`, t);
    document.documentElement.style.overflow = `hidden`;
    return () => {
      window.clearInterval(e);
      document.removeEventListener(`keydown`, t);
      document.documentElement.style.overflow = ``;
    };
  }, [n]);
  let d = () => {
    bc({
      shownAt: yc()?.shownAt ?? Date.now(),
      closed: true
    });
    setN(false);
  };
  let f = async () => {
    try {
      await navigator.clipboard.writeText(o_1_promo.code);
    } catch {}
    setO(true);
    window.setTimeout(() => setO(false), 1800);
  };
  if (!n || u) {
    return null;
  }
  let p = (yc()?.shownAt ?? i) + o_1_promo.hours * 3600000;
  let m = Math.max(0, p - i);
  let h = Math.floor(m / 3600000);
  let g = Math.floor(m % 3600000 / 60000);
  let _ = Math.floor(m % 60000 / 1000);
  return <div className={`promo`} onPointerDown={e => e.target === e.currentTarget && d()}><div className={`promo__tray`} role={`dialog`} aria-modal={`true`} aria-labelledby={`promo-title`} tabIndex={-1} ref={lRef}><div className={`promo__card`}><button type={`button`} className={`promo__close`} aria-label={`Close`} onClick={d}><J1Component icon={Ii} size={16} /></button><span className={`promo__eyebrow pro-badge`}><J1Component icon={Vi} size={12} /><span>{`Limited time`}</span></span><h2 id={`promo-title`}>{o_1_promo.percent}{`% off `}<span>{o_1.name}{` Pro`}</span></h2><p className={`promo__text`}>{`Every Pro component, block and illustration – plus all future updates. Use this code at checkout.`}</p><div className={`promo__code`}><span className={`promo__code-value`}>{o_1_promo.code}</span><button type={`button`} className={`promo__copy`} onClick={f} aria-live={`polite`}><J1Component icon={o ? Qi : Ri} size={14} />{o ? `Copied` : `Copy code`}</button></div><button type={`button`} className={`promo__cta`} onClick={() => {
          d();
          ga(o_1.links.pro);
        }}>{`Get Pro with `}{o_1_promo.percent}{`% off`}</button></div><p className={`promo__timer`} aria-label={`Offer ends in ${h} hours and ${g} minutes`}>{`Offer ends in`}<b>{xc(h)}{`:`}{xc(g)}{`:`}{xc(_)}</b></p></div></div>;
}
let Cc = [];
const wc = new Set();
const Tc = [];
let Ec = 0;
const Dc = e => {
  Cc = e;
  wc.forEach(e => e());
};
const Oc = e => {
  wc.add(e);
  return () => {
    wc.delete(e);
  };
};
const kc = () => Cc;
const Ac = () => Tc;
function jc(type, title, {
  id,
  ...rest
} = {}, r = false) {
  let o = id === undefined ? undefined : Cc.find(e => e.id === id && !e.removing);
  if (o) {
    Dc(Cc.map(n => {
      if (n === o) {
        return {
          ...n,
          ...rest,
          type,
          title,
          version: n.version + 1
        };
      }
      return n;
    }));
    return o.id;
  }
  let s = id ?? `toast-${++Ec}`;
  if (!r) {
    Dc([...Cc.filter(e => e.id !== s), {
      ...rest,
      id: s,
      type,
      title,
      version: 0
    }]);
  }
  return s;
}
const Mc = 420;
function dismiss(e) {
  let t = Cc.filter(t => !t.removing && (e === undefined || t.id === e));
  if (t.length) {
    Dc(Cc.map(e => {
      if (t.includes(e)) {
        return {
          ...e,
          removing: true
        };
      }
      return e;
    }));
    t.forEach(e => e.onDismiss?.(e.id));
    window.setTimeout(() => Dc(Cc.filter(e => !(e.removing && t.some(t => t.id === e.id)))), Mc);
  }
}
const Pc = title => typeof title == `object` && !!title && !b.isValidElement(title) && !Array.isArray(title) && `title` in title;
const Fc = title => {
  if (Pc(title)) {
    return title;
  }
  return {
    title,
    description: undefined
  };
};
function promise(e, t, n = {}) {
  let r = typeof e == `function` ? e() : e;
  let i = Fc(t.loading);
  let id = jc(`loading`, i.title, {
    ...n,
    description: i.description
  });
  let o = (e, t) => {
    let r = Fc(t);
    jc(e, r.title, {
      ...n,
      id,
      description: r.description
    }, true);
  };
  r.then(e => o(`success`, typeof t.success == `function` ? t.success(e) : t.success), e => o(`error`, typeof t.error == `function` ? t.error(e) : t.error));
  return r;
}
const Lc = Object.assign((e, t) => jc(`default`, e, t), {
  success: (e, t) => jc(`success`, e, t),
  error: (e, t) => jc(`error`, e, t),
  info: (e, t) => jc(`info`, e, t),
  loading: (e, t) => jc(`loading`, e, t),
  promise,
  dismiss
});
function RcComponent() {
  return <svg viewBox={`0 0 24 24`} className={`ui-ts__status`} aria-hidden={`true`}><g className={`ui-ts__spin`}><circle className={`ui-ts__ring`} cx={`12`} cy={`12`} r={`9.25`} pathLength={1} /></g><path className={`ui-ts__mark ui-ts__check`} d={`M8.3 12.4l2.5 2.5 4.9-5.3`} pathLength={1} /><path className={`ui-ts__mark ui-ts__x1`} d={`M9.5 9.5l5 5`} pathLength={1} /><path className={`ui-ts__mark ui-ts__x2`} d={`M14.5 9.5l-5 5`} pathLength={1} /><path className={`ui-ts__info`} d={`M12 11.2v4.6M12 8.2h.01`} /></svg>;
}
const Zc1Component = () => <svg viewBox={`0 0 24 24`} className={`ui-ts__glyph`} aria-hidden={`true`}><path d={`M7.5 7.5l9 9M16.5 7.5l-9 9`} /></svg>;
const Bc = e => String(e.id);
function VcComponent({
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
    let e = requestAnimationFrame(() => requestAnimationFrame(() => setC(true)));
    return () => cancelAnimationFrame(e);
  }, []);
  b.useLayoutEffect(() => {
    let mRef_current = mRef.current;
    if (!mRef_current) {
      return;
    }
    let n = Bc(t_1);
    let r = () => onHeight(n, mRef_current.offsetHeight);
    r();
    let i = new ResizeObserver(r);
    i.observe(mRef_current);
    return () => i.disconnect();
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
    let n = Date.now();
    let r = window.setTimeout(() => dismiss(t_1.id), Math.max(0, vRef.current.left));
    return () => {
      window.clearTimeout(r);
      if (vRef.current.version === t_1_version) {
        vRef.current.left -= Date.now() - n;
      }
    };
  }, [re, t_1.version, left, t_1.id]);
  let onPointerDown = e => {
    if (!(e.button !== 0 || x || e.target.closest(`button, a, input, textarea, select`))) {
      yRef.current = {
        pointer: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        axis: null,
        samples: []
      };
      eeRef.current = false;
    }
  };
  let onPointerMove = e => {
    let yRef_current = yRef.current;
    let hRef_current = hRef.current;
    if (!yRef_current || yRef_current.pointer !== e.pointerId || !hRef_current) {
      return;
    }
    let i = e.clientX - yRef_current.x;
    let a = e.clientY - yRef_current.y;
    if (!yRef_current.axis) {
      if (Math.hypot(i, a) < 6) {
        return;
      }
      yRef_current.axis = Math.abs(i) > Math.abs(a) ? `x` : `y`;
      e.currentTarget.setPointerCapture(e.pointerId);
      eeRef.current = true;
      setU(true);
      hRef_current.style.transition = `none`;
    }
    let o = yRef_current.axis === `x` ? i : a;
    let s = yRef_current.axis === `x` || o * edge > 0;
    if (!s) {
      o = Math.sign(o) * Math.abs(o) ** 0.7 * 0.6;
    }
    let c = yRef_current.axis === `x` ? hRef_current.offsetWidth : hRef_current.offsetHeight * 2;
    hRef_current.style.transform = yRef_current.axis === `x` ? `translateX(${o}px)` : `translateY(${o}px)`;
    hRef_current.style.opacity = s ? String(Math.max(0.25, 1 - Math.abs(o) / (c * 1.1))) : ``;
    yRef_current.samples.push({
      v: o,
      at: e.timeStamp
    });
    if (yRef_current.samples.length > 6) {
      yRef_current.samples.shift();
    }
  };
  let ae = t => {
    let yRef_current = yRef.current;
    let hRef_current = hRef.current;
    if (!yRef_current || yRef_current.pointer !== t.pointerId || (yRef.current = null, !yRef_current.axis || !hRef_current)) {
      return;
    }
    setU(false);
    let a = yRef_current.samples[yRef_current.samples.length - 1] ?? {
      v: 0,
      at: 0
    };
    let o = yRef_current.samples[0] ?? a;
    let s = a.at > o.at ? (a.v - o.v) / (a.at - o.at) : 0;
    let c = yRef_current.axis === `x` || a.v * edge > 0;
    let l = Math.abs(s) > 0.45 && Math.sign(s) === Math.sign(a.v);
    if (t.type === `pointerup` && c && (Math.abs(a.v) > 64 || l)) {
      let t = (yRef_current.axis === `x` ? hRef_current.offsetWidth : hRef_current.offsetHeight) + 48;
      hRef_current.style.transition = `transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`;
      hRef_current.style.transform = `${yRef_current.axis === `x` ? `translateX` : `translateY`}(${Math.sign(a.v) * t}px)`;
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
  let ce = t_1.type === `loading` ? <RcComponent /> : t_1.icon ?? (t_1.type === "default" ? null : <RcComponent />);
  return <li className={`ui-ts__toast`} data-toast-id={Bc(t_1)} data-type={t_1.type} data-behind={layout.behind || undefined} data-removing={x || undefined} data-swiping={u || undefined} tabIndex={0} inert={layout.hidden || x} style={{
    transform,
    opacity: !c || x || layout.hidden ? 0 : 1,
    height: layout.height ? `${layout.height}px` : undefined,
    zIndex: layout.z
  }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={ae} onPointerCancel={ae} onClickCapture={e => {
    if (eeRef.current) {
      eeRef.current = false;
      e.stopPropagation();
      e.preventDefault();
    }
  }}><div ref={hRef} className={`ui-ts__swipe`}><div className={`ui-ts__card`}><div ref={mRef} className={`ui-ts__content`} data-action={t_1.action ? `` : undefined}>{ce && <span className={`ui-ts__icon`} data-type={t_1.icon && t_1.type !== `loading` ? `custom` : t_1.type}>{ce}</span>}<div className={`ui-ts__text`}><div key={t_1.version} className={`ui-ts__copy`} data-changed={t_1.version > 0 || undefined}><div className={`ui-ts__title`}>{t_1.title}</div>{t_1.description != null && t_1.description !== `` && <div className={`ui-ts__desc`}>{t_1.description}</div>}</div>{f && <div key={`ghost-${f.version}`} className={`ui-ts__copy ui-ts__ghost`} aria-hidden={`true`}><div className={`ui-ts__title`}>{f.title}</div>{f.description != null && f.description !== `` && <div className={`ui-ts__desc`}>{f.description}</div>}</div>}</div>{t_1.action && <button type={`button`} className={`ui-ts__action`} onClick={t => {
            t_1.action.onClick(t);
            if (!t.defaultPrevented) {
              dismiss(t_1.id);
            }
          }}>{t_1.action.label}</button>}</div>{hairline && ne && <span key={t_1.version} className={`ui-ts__timer`} aria-hidden={`true`} style={{
          animationDuration: `${left}ms`,
          animationPlayState: re ? `running` : `paused`
        }} />}</div>{closeButton && <button type={`button`} className={`ui-ts__close`} aria-label={`Dismiss notification`} onClick={() => dismiss(t_1.id)}><Zc1Component /></button>}</div></li>;
}
const Hc = 10;
const Uc = 0.05;
const Wc = {
  y: 0,
  scale: 1,
  height: 0,
  z: 0,
  behind: false,
  hidden: true
};
function GcComponent({
  position = `bottom-right`,
  inline = false,
  id,
  duration = 4000,
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
  let p = b.useSyncExternalStore(Oc, kc, Ac);
  let [m, setM] = b.useState({});
  let [g, setG] = b.useState(false);
  let [v, setV] = b.useState(false);
  let [ee, setEe] = b.useState(false);
  let [te, setTe] = b.useState(false);
  let [re, setRe] = b.useState(``);
  let [S, setS] = b.useState(``);
  let oeRef = b.useRef(null);
  let seRef = b.useRef(new Map());
  let ceRef = b.useRef(0);
  let leRef = b.useRef(null);
  let ueRef = b.useRef(`mouse`);
  let deRef = b.useRef(new Map());
  let [fe, pe] = position.split(`-`);
  let edge = fe === `bottom` ? 1 : -1;
  let he = p.filter(e => (e.toaster ?? null) === (id ?? null)).reverse();
  let C = he.filter(e => !e.removing);
  let ge = expand || g || v || ee;
  let _e = g || v || ee || te;
  let ve = Math.max(1, visibleToasts);
  let onHeight = b.useCallback((e, t) => {
    setM(n => {
      if (n[e] === t) {
        return n;
      }
      return {
        ...n,
        [e]: t
      };
    });
  }, []);
  let be = C[0] && m[Bc(C[0])] || ceRef.current;
  if (be) {
    ceRef.current = be;
  }
  let xe = new Map();
  let y_1 = 0;
  C.forEach((e, t) => {
    let n = m[Bc(e)] ?? 0;
    let r = Math.min(t, ve - 1);
    let i = ge ? {
      y: y_1,
      scale: 1,
      height: n,
      z: C.length - t,
      behind: false,
      hidden: t >= ve
    } : {
      y: r * Hc,
      scale: 1 - r * Uc,
      height: t === 0 ? n : be,
      z: C.length - t,
      behind: t > 0,
      hidden: t >= ve
    };
    if (t < ve) {
      y_1 += n + gap;
    }
    xe.set(Bc(e), i);
    seRef.current.set(Bc(e), i);
  });
  let Ce = Math.min(C.length, ve);
  let we = C.length ? ge ? Math.max(0, y_1 - gap) : be + Hc * (Ce - 1) : 0;
  b.useEffect(() => {
    let e = new Set(he.map(Bc));
    setM(t => {
      let n = Object.keys(t).filter(t => !e.has(t));
      if (!n.length) {
        return t;
      }
      let r = {
        ...t
      };
      n.forEach(e => delete r[e]);
      return r;
    });
    seRef.current.forEach((t, n) => !e.has(n) && seRef.current.delete(n));
    if (!C.length) {
      setEe(false);
    }
  }, [p]);
  b.useEffect(() => {
    let oeRef_current = oeRef.current;
    if (oeRef_current) {
      C.forEach(t => {
        let n = Bc(t);
        if (deRef.current.get(n) === t.version) {
          return;
        }
        deRef.current.set(n, t.version);
        let r = Array.from(oeRef_current.querySelectorAll(`[data-toast-id]`)).find(e => e.dataset.toastId === n)?.querySelector(`.ui-ts__copy:not(.ui-ts__ghost)`)?.textContent?.trim();
        if (r) {
          (t.type === `error` ? setS : setRe)(e => {
            if (e === r) {
              return `${r} `;
            }
            return r;
          });
        }
      });
      deRef.current.forEach((e, t) => !he.some(e => Bc(e) === t) && deRef.current.delete(t));
    }
  }, [p]);
  b.useEffect(() => {
    let e = () => setTe(document.visibilityState === `hidden`);
    e();
    document.addEventListener(`visibilitychange`, e);
    return () => document.removeEventListener(`visibilitychange`, e);
  }, []);
  b.useEffect(() => {
    if (!ee) {
      return;
    }
    let e = e => {
      if (!oeRef.current?.contains(e.target)) {
        setEe(false);
      }
    };
    document.addEventListener(`pointerdown`, e);
    return () => document.removeEventListener(`pointerdown`, e);
  }, [ee]);
  let Te = () => Array.from(oeRef.current?.querySelectorAll(`[data-toast-id]:not([data-removing])`) ?? []);
  b.useEffect(() => {
    if (!hotkey) {
      return;
    }
    let e = e => {
      if (e.key !== hotkey && e.code !== hotkey) {
        return;
      }
      let t = Te().find(e => !e.inert);
      if (t) {
        e.preventDefault();
        if (!oeRef.current?.contains(document.activeElement)) {
          leRef.current = document.activeElement;
        }
        t.focus();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, [hotkey]);
  let onKeyDown = e => {
    if (e.key !== `Escape` || !C.length) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    let t = e.target.closest(`[data-toast-id]`);
    let n = C.find(e => Bc(e) === t?.dataset.toastId) ?? C[0];
    let r = C.indexOf(n);
    dismiss(n.id);
    let i = C.filter(e => e !== n)[Math.min(r, C.length - 2)];
    let a = i && Te().find(e => e.dataset.toastId === Bc(i));
    if (a) {
      a.focus();
    } else if (leRef.current?.isConnected) {
      leRef.current.focus();
    } else {
      document.activeElement?.blur();
    }
  };
  let onFocus = e => {
    if (e.target.matches(`:focus-visible`)) {
      setV(true);
    }
  };
  let onBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setV(false);
    }
  };
  let style_1 = {
    "--ui-ts-offset": offset === undefined ? undefined : `${offset}px`
  };
  return <section ref={oeRef} className={[`ui-ts`, className].filter(Boolean).join(` `)} data-y={fe} data-x={pe} data-inline={inline || undefined} data-expanded={ge || undefined} data-empty={!C.length || undefined} aria-label={hotkey ? `${label} (${hotkey})` : label} tabIndex={-1} style={style_1} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} onPointerDownCapture={e => ueRef.current = e.pointerType} onPointerEnter={e => e.pointerType === `mouse` && setG(true)} onPointerLeave={e => e.pointerType === `mouse` && setG(false)} onClick={() => ueRef.current !== `mouse` && C.length > 1 && setEe(true)}><style href={`ui-toaster`} precedence={`default`}>{Kc}</style><ol className={`ui-ts__list`} style={{
      height: `${we}px`
    }}>{he.map(t_5 => <VcComponent key={Bc(t_5)} t={t_5} layout={xe.get(Bc(t_5)) ?? seRef.current.get(Bc(t_5)) ?? Wc} edge={edge} paused={_e || (xe.get(Bc(t_5))?.hidden ?? false)} defaultDuration={duration} hairline={hairline} closeButton={closeButton} onHeight={onHeight} />)}</ol><div className={`ui-ts__sr`} role={`status`} aria-live={`polite`}>{re}</div><div className={`ui-ts__sr`} role={`alert`}>{S}</div></section>;
}
var Kc = `.ui-ts{--ui-ts-card: #ffffff;--ui-ts-line: #ececec;--ui-ts-ink: #171717;--ui-ts-text: #404040;--ui-ts-muted: #8f8f8f;--ui-ts-faint: #b5b5b5;--ui-ts-button: #f0f0f0;--ui-ts-button-hover: #e6e6e7;--ui-ts-hairline: rgba(23, 23, 23, 0.14);--ui-ts-success: #2f9e5b;--ui-ts-danger: #e5484d;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -6px rgba(0, 0, 0, 0.1);--ui-ts-focus: rgba(23, 23, 23, 0.22);--ui-ts-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-ts-width: 356px;--ui-ts-offset: 24px;position: fixed;z-index: 9999;box-sizing: border-box;width: var(--ui-ts-width);max-width: calc(100% - 2 * var(--ui-ts-offset));margin: 0;padding: 0;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-ts-text);-webkit-font-smoothing: antialiased;outline: none}.ui-ts[data-inline]{position: absolute;z-index: 20;--ui-ts-offset: 20px}.ui-ts[data-empty]{pointer-events: none}.ui-ts *, .ui-ts *::before, .ui-ts *::after{box-sizing: border-box}:where(.ui-ts) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-ts) svg{display: block;flex: none}.ui-ts button:focus-visible{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts[data-y="bottom"]{bottom: var(--ui-ts-offset)}.ui-ts[data-y="top"]{top: var(--ui-ts-offset)}.ui-ts[data-x="right"]{right: var(--ui-ts-offset)}.ui-ts[data-x="left"]{left: var(--ui-ts-offset)}.ui-ts[data-x="center"]{left: 50%;transform: translateX(-50%)}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(var(--ui-ts-offset), env(safe-area-inset-bottom))}.ui-ts__list{position: relative;margin: 0;padding: 0;list-style: none}.ui-ts__toast{position: absolute;left: 0;right: 0;outline: none;touch-action: none;-webkit-user-select: none;user-select: none;transition: transform 440ms var(--ui-ts-ease), opacity 320ms ease, height 380ms var(--ui-ts-ease)}.ui-ts[data-y="bottom"] .ui-ts__toast{bottom: 0;transform-origin: 50% 0}.ui-ts[data-y="top"] .ui-ts__toast{top: 0;transform-origin: 50% 100%}.ui-ts__toast[data-removing]{pointer-events: none;transition: transform 380ms var(--ui-ts-ease), opacity 260ms ease, height 380ms var(--ui-ts-ease)}.ui-ts__swipe{position: relative;height: 100%;transition: transform 460ms cubic-bezier(0.34, 1.3, 0.64, 1), opacity 260ms ease}.ui-ts__toast[data-swiping]{cursor: grabbing}.ui-ts__card{position: relative;height: 100%;overflow: hidden;border-radius: 14px;background: var(--ui-ts-card);box-shadow: var(--ui-ts-shadow)}.ui-ts__toast:focus-visible .ui-ts__card{outline: 2px solid var(--ui-ts-focus);outline-offset: 2px}.ui-ts__content{display: flex;align-items: flex-start;gap: 10px;padding: 14px;transition: opacity 260ms ease}.ui-ts__content[data-action]{padding-right: 10px}.ui-ts__toast[data-behind] .ui-ts__content, .ui-ts__toast[data-behind] .ui-ts__timer{opacity: 0}.ui-ts__text{position: relative;flex: 1;min-width: 0}.ui-ts__title{color: var(--ui-ts-ink);font-weight: 500;line-height: 20px;overflow-wrap: anywhere}.ui-ts__desc{margin-top: 1px;font-size: 13px;line-height: 18px;color: var(--ui-ts-muted);overflow-wrap: anywhere}.ui-ts__copy[data-changed]{animation: ui-ts-text-in 300ms var(--ui-ts-ease) both}.ui-ts__ghost{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-ts-text-out 220ms ease both}.ui-ts__icon{display: grid;place-items: center;flex: none;width: 20px;height: 20px;color: var(--ui-ts-muted);transition: color 300ms ease}.ui-ts__icon[data-type="success"]{color: var(--ui-ts-success)}.ui-ts__icon[data-type="error"]{color: var(--ui-ts-danger)}.ui-ts__icon[data-type="info"]{color: var(--ui-ts-ink)}.ui-ts__icon[data-type="custom"] > *{width: 18px;height: 18px}.ui-ts__status{width: 18px;height: 18px;overflow: visible;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-ts__icon[data-type="success"] .ui-ts__status, .ui-ts__icon[data-type="error"] .ui-ts__status{animation: ui-ts-pop 460ms cubic-bezier(0.34, 1.56, 0.64, 1) both}.ui-ts__spin{transform-box: fill-box;transform-origin: center;animation: ui-ts-spin 760ms linear infinite;animation-play-state: paused}.ui-ts__icon[data-type="loading"] .ui-ts__spin{animation-play-state: running}.ui-ts__ring{stroke-dasharray: 1 0;stroke-opacity: 0.28;transition: stroke-dasharray 560ms var(--ui-ts-ease), stroke-opacity 360ms ease}.ui-ts__icon[data-type="loading"] .ui-ts__ring{stroke-dasharray: 0.28 0.72;stroke-opacity: 1}.ui-ts__mark{stroke-dasharray: 1;stroke-dashoffset: 1;opacity: 0}.ui-ts__info{opacity: 0;transition: opacity 240ms ease}.ui-ts__icon[data-type="success"] .ui-ts__check, .ui-ts__icon[data-type="error"] .ui-ts__x1, .ui-ts__icon[data-type="error"] .ui-ts__x2{opacity: 1;stroke-dashoffset: 0;animation: ui-ts-draw 340ms var(--ui-ts-ease) 160ms both}.ui-ts__icon[data-type="error"] .ui-ts__x2{animation-delay: 260ms}.ui-ts__icon[data-type="info"] .ui-ts__info{opacity: 1}.ui-ts__action{flex: none;align-self: center;height: 28px;margin: -4px 0;padding: 0 10px;border-radius: 8px;background: var(--ui-ts-button);font-size: 12.5px;font-weight: 500;color: var(--ui-ts-ink);white-space: nowrap;transition: background-color 160ms ease}.ui-ts__action:hover{background: var(--ui-ts-button-hover)}.ui-ts__close{position: absolute;top: -7px;left: -7px;z-index: 1;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 50%;background: var(--ui-ts-card);box-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 3px rgba(0, 0, 0, 0.08);color: var(--ui-ts-muted);opacity: 0;transform: scale(0.8);transition: opacity 160ms ease, transform 200ms var(--ui-ts-ease), color 160ms ease}.ui-ts__close::before{content: "";position: absolute;inset: -6px}.ui-ts__close:hover{color: var(--ui-ts-ink)}.ui-ts__toast:not([data-behind]):hover .ui-ts__close, .ui-ts__toast:not([data-behind]):focus-within .ui-ts__close{opacity: 1;transform: none}.ui-ts__glyph{width: 12px;height: 12px;fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round}.ui-ts__timer{position: absolute;left: 14px;right: 14px;bottom: 0;height: 1px;background: var(--ui-ts-hairline);transform-origin: left;animation-name: ui-ts-timer;animation-timing-function: linear;animation-fill-mode: both;transition: opacity 260ms ease}.ui-ts__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-ts-spin{to{transform: rotate(360deg)}}@keyframes ui-ts-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-ts-pop{0%{transform: scale(0.82)}55%{transform: scale(1.08)}100%{transform: scale(1)}}@keyframes ui-ts-timer{from{transform: scaleX(1)}to{transform: scaleX(0)}}@keyframes ui-ts-text-in{from{opacity: 0;transform: translateY(4px);filter: blur(3px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-ts-text-out{from{opacity: 1}to{opacity: 0;transform: translateY(-4px);filter: blur(3px)}}@media (max-width: 600px){.ui-ts, .ui-ts[data-x]{left: 12px;right: 12px;width: auto;max-width: none;transform: none}.ui-ts[data-y="bottom"]{bottom: 12px}.ui-ts:not([data-inline])[data-y="bottom"]{bottom: max(12px, env(safe-area-inset-bottom))}.ui-ts[data-y="top"]{top: 12px}}@media (hover: none) and (pointer: coarse){.ui-ts__toast:not([data-behind]) .ui-ts__close{opacity: 1;transform: none}.ui-ts__close{width: 24px;height: 24px;top: -8px;left: -8px}.ui-ts__close::before{inset: -8px}.ui-ts__action{height: 36px;margin: -8px -2px -8px 0;padding: 0 14px;border-radius: 10px;font-size: 13px}}@media (prefers-reduced-motion: reduce){.ui-ts *:not(.ui-ts__spin):not(.ui-ts__timer), .ui-ts *::before, .ui-ts *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ts{--ui-ts-card: #19191b;--ui-ts-line: #2a2a2e;--ui-ts-ink: #ededed;--ui-ts-text: #c8c8cc;--ui-ts-muted: #8b8b92;--ui-ts-faint: #5c5c63;--ui-ts-button: #26262a;--ui-ts-button-hover: #2e2e33;--ui-ts-hairline: rgba(255, 255, 255, 0.16);--ui-ts-success: #4cc38a;--ui-ts-danger: #ff6369;--ui-ts-shadow: 0 0 0 1px var(--ui-ts-line), 0 1px 2px rgba(0, 0, 0, 0.3), 0 10px 28px -6px rgba(0, 0, 0, 0.5);--ui-ts-focus: rgba(255, 255, 255, 0.3)}`;
function Qc1Component() {
  let e = useJo()?.plan === `pro`;
  b.useEffect(() => {
    if (e) {
      return;
    }
    let t = () => {
      let length = Oi.filter(e => e.pro).length;
      Lc.success(`Copied`, {
        id: `copy-nudge`,
        description: `Like it? ${length} more components are in Pro.`,
        duration: 7000,
        action: {
          label: `See Pro`,
          onClick: () => {
            vo(`Get Pro`, {
              from: `copy toast`
            });
            Hs({
              entry: null,
              from: `copy toast`
            });
          }
        }
      });
    };
    window.addEventListener(`affectui:copied`, t);
    return () => window.removeEventListener(`affectui:copied`, t);
  }, [e]);
  return <GcComponent />;
}
const Jc = [{
  value: `light`,
  label: `Light`,
  icon: Zi
}, {
  value: `dark`,
  label: `Dark`,
  icon: qi
}, {
  value: `system`,
  label: `System`,
  icon: Li
}];
function YcComponent({
  user
}) {
  let [t, setT] = b.useState(false);
  let {
    theme,
    setTheme
  } = useOc();
  let aRef = b.useRef(null);
  b.useEffect(() => {
    if (!t) {
      return;
    }
    let e = e => {
      if (!aRef.current?.contains(e.target)) {
        setT(false);
      }
    };
    let r = e => e.key === `Escape` && setT(false);
    document.addEventListener(`mousedown`, e);
    document.addEventListener(`keydown`, r);
    return () => {
      document.removeEventListener(`mousedown`, e);
      document.removeEventListener(`keydown`, r);
    };
  }, [t]);
  return <div className={`user-menu`} ref={aRef}><button className={`avatar`} aria-label={`Account menu`} aria-haspopup={`menu`} aria-expanded={t} onClick={() => setT(e => !e)}>{qo(user)}</button>{t && <div className={`menu`} role={`menu`}><div className={`menu__email`}>{user.email}</div><M to={`/account`} className={`menu__item`} role={`menuitem`} onClick={() => setT(false)}>{`Account`}</M><button className={`menu__item`} role={`menuitem`} onClick={() => {
        z();
        setT(false);
        ga(`/`);
      }}>{`Sign out`}</button><hr className={`menu__divider`} /><div className={`menu__item menu__item--static`}>{`Appearance`}<div className={`segmented menu__theme`} role={`radiogroup`} aria-label={`Appearance`}>{Jc.map(e => <button key={e.value} role={`radio`} aria-checked={theme === e.value} aria-label={e.label} title={e.label} onClick={() => setTheme(e.value)}><J1Component icon={e.icon} size={13} /></button>)}</div></div><a className={`menu__item`} role={`menuitem`} href={o_1.links.feedback}>{`Feedback`}</a><a className={`menu__item`} role={`menuitem`} href={o_1.links.support}>{`Support`}</a></div>}</div>;
}
function XcComponent() {
  return <section className={`not-found`}><span className={`not-found__code`}>{`404`}</span><h1 className={`not-found__title`}>{`Page not found`}</h1><p className={`not-found__text`}>{`The page you're looking for doesn't exist or has moved. Try the search in the sidebar or head back home.`}</p><div className={`not-found__actions`}><M to={`/`} className={`tier__cta tier__cta--primary`}>{`Back to home`}</M><M to={`/docs`} className={`tier__cta tier__cta--secondary`}>{`Read the docs`}</M></div></section>;
}
function ZcComponent({
  faqs,
  defaultOpen = 0
}) {
  let [n, setN] = b.useState(defaultOpen);
  return <div className={`faq__list`}>{faqs.map((e, t) => {
      let i = n === t;
      let a = `faq-a-${t}`;
      return <div key={e.q} className={`faq__item`} data-open={i || undefined}><button className={`faq__q`} aria-expanded={i} aria-controls={a} onClick={() => setN(i ? null : t)}>{e.q}<J1Component icon={Fi} size={16} /></button><div className={`faq__panel`} id={a} inert={!i}><div><p className={`faq__a`}>{e.a}</p></div></div></div>;
    })}</div>;
}
const d_1 = `M38 0H176Q196 0 204 14L218 30Q224 38 246 38H562Q600 38 600 76V462Q600 500 562 500H38Q0 500 0 462V38Q0 0 38 0Z`;
const $c = [78, 180, 140, 175, 126, 168, 110];
function El1Component({
  className,
  label = `Blue folder holding three documents behind a frosted front pocket`
}) {
  let n = `ui-fd` + b.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return <div className={[`ui-fd`, className].filter(Boolean).join(` `)} role={`img`} aria-label={label}><style href={`ui-glass-folder`} precedence={`default`}>{tl}</style><div className={`ui-fd-icon`} aria-hidden={`true`}><svg className={`ui-fd-layer ui-fd-back`} viewBox={`0 0 600 500`}><defs><filter id={`${n}-hl`} x={`-10%`} y={`-10%`} width={`120%`} height={`120%`}><feGaussianBlur in={`SourceAlpha`} stdDeviation={`4`} result={`blur`} /><feOffset in={`blur`} dy={`3`} result={`offset`} /><feComposite in={`blur`} in2={`offset`} operator={`arithmetic`} k2={`1`} k3={`-1`} result={`diff`} /><feFlood floodColor={`#fff`} floodOpacity={`0.65`} /><feComposite in2={`diff`} operator={`in`} result={`light`} /><feComposite in={`light`} in2={`SourceAlpha`} operator={`in`} /></filter></defs><path className={`ui-fd-back-fill`} d={d_1} fill={`#5bb7ea`} /><path d={d_1} fill={`#000`} filter={`url(#${n}-hl)`} /></svg><svg className={`ui-fd-layer`} viewBox={`0 0 600 500`}><defs><linearGradient id={`${n}-paper`} x1={`0`} y1={`0`} x2={`0`} y2={`1`}><stop className={`ui-fd-paper-top`} offset={`0%`} stopColor={`#fff`} /><stop className={`ui-fd-paper-bottom`} offset={`100%`} stopColor={`#eaf2f8`} /></linearGradient><symbol id={`${n}-doc`} overflow={`visible`}><rect className={`ui-fd-paper`} x={`0.6`} y={`0.6`} width={`278.8`} height={`348.8`} rx={`19.4`} fill={`url(#${n}-paper)`} stroke={`rgba(0,0,0,0.12)`} strokeWidth={`1.2`} />{$c.map((width, t) => <rect key={t} className={`ui-fd-line`} x={`30`} y={87 + t * 28} width={width} height={`9`} rx={`4.5`} fill={`rgba(0,0,0,0.12)`} />)}</symbol></defs><use className={`ui-fd-doc ui-fd-doc--left`} href={`#${n}-doc`} /><use className={`ui-fd-doc ui-fd-doc--right`} href={`#${n}-doc`} /><use className={`ui-fd-doc ui-fd-doc--middle`} href={`#${n}-doc`} /></svg><div className={`ui-fd-front`} /></div></div>;
}
var tl = `.ui-fd{--ui-fd-ease: cubic-bezier(0.2, 0.85, 0.25, 1);position: relative;width: 100%;aspect-ratio: 3 / 2;overflow: hidden;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif}.ui-fd-icon{position: absolute;left: 50%;top: 50%;width: 40%;aspect-ratio: 6 / 5;container-type: inline-size;perspective: 220cqw;perspective-origin: 50% 60%;transform: translate(-50%, -48%);transition: transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover{transform: translate(-50%, -48%) scale(1.03)}.ui-fd-layer{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible}.ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(60, 130, 180, 0.28)) drop-shadow(0 1.3cqw 2cqw rgba(60, 130, 180, 0.16)) drop-shadow(0 0.3cqw 0.7cqw rgba(60, 130, 180, 0.1))}.ui-fd-doc{transform-box: fill-box;transform-origin: center;filter: drop-shadow(0 3px 4px rgba(0, 30, 60, 0.18));transition: transform 0.55s var(--ui-fd-ease)}.ui-fd-doc--left{transform: translate(40px, 80px) rotate(6deg)}.ui-fd-doc--right{transform: translate(280px, 80px) rotate(6deg)}.ui-fd-doc--middle{transform: translate(160px, 66px) rotate(-4deg)}.ui-fd-icon:hover .ui-fd-doc--left{transform: translate(32px, 70px) rotate(9deg)}.ui-fd-icon:hover .ui-fd-doc--right{transform: translate(286px, 76px) rotate(5deg)}.ui-fd-icon:hover .ui-fd-doc--middle{transform: translate(166px, 52px) rotate(-7deg)}.ui-fd-front{position: absolute;inset: 21.6% 0 0;border-radius: 6.333cqw;background: linear-gradient(180deg, rgba(0, 40, 75, 0) 74%, rgba(0, 40, 75, 0.28) 100%), linear-gradient(180deg, rgba(132, 214, 248, 0.45) 0%, rgba(69, 170, 220, 0.45) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.3), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.55);-webkit-backdrop-filter: blur(3.3cqw) saturate(1.1);backdrop-filter: blur(3.3cqw) saturate(1.1);transform-origin: 50% 100%;transition: top 0.6s var(--ui-fd-ease), border-radius 0.6s var(--ui-fd-ease), transform 0.6s var(--ui-fd-ease)}.ui-fd-icon:hover .ui-fd-front{top: 24.8%;border-radius: 3cqw 3cqw 6.333cqw 6.333cqw;transform: translateZ(2.33cqw) rotateX(-9deg)}:where(.dark, [data-theme="dark"]) .ui-fd-back-fill{fill: #3d8fc6}:where(.dark, [data-theme="dark"]) .ui-fd-paper-top{stop-color: #34363c}:where(.dark, [data-theme="dark"]) .ui-fd-paper-bottom{stop-color: #26292f}:where(.dark, [data-theme="dark"]) .ui-fd-paper{stroke: rgba(255, 255, 255, 0.1)}:where(.dark, [data-theme="dark"]) .ui-fd-line{fill: rgba(255, 255, 255, 0.16)}:where(.dark, [data-theme="dark"]) .ui-fd-back{filter: drop-shadow(0 4cqw 4.6cqw rgba(0, 0, 0, 0.45)) drop-shadow(0 1.3cqw 2cqw rgba(0, 0, 0, 0.3))}:where(.dark, [data-theme="dark"]) .ui-fd-doc{filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.45))}:where(.dark, [data-theme="dark"]) .ui-fd-front{background: linear-gradient(180deg, rgba(0, 20, 40, 0) 70%, rgba(0, 20, 40, 0.4) 100%), linear-gradient(180deg, rgba(100, 190, 235, 0.42) 0%, rgba(45, 130, 190, 0.5) 100%);box-shadow: inset 0 0 0 0.67cqw rgba(255, 255, 255, 0.14), inset 0 0.25cqw 0 rgba(255, 255, 255, 0.3)}@media (prefers-reduced-motion: reduce){.ui-fd-icon, .ui-fd-doc, .ui-fd-front{transition: none}}`;
const Nl1 = b.lazy(() => r(() => import("./component-WEwHkvy1.jsx").then(e => ({
  default: e.IntegrationGrid
})), __vite__mapDeps([231, 3, 2])));
const Rl1Component = () => <svg className={`ba-cursor`} viewBox={`-2.186 -0.256 18.514 22.277`} aria-hidden><path transform={`rotate(21.37)`} d={`M13.92 4.07c1.69.66 3.03 1.18 3.94 1.68.46.25.87.53 1.16.86.31.35.51.79.48 1.29-.03.51-.27.92-.62 1.23-.33.3-.77.53-1.25.74-.96.4-2.36.78-4.12 1.26-.56.15-.98.27-1.26.37-.26.1-.38.18-.47.27-.09.09-.17.21-.27.47-.1.28-.22.7-.37 1.26-.48 1.76-.86 3.16-1.26 4.12-.2.49-.44.93-.74 1.25-.32.35-.72.6-1.23.62-.51.03-.94-.17-1.29-.48-.33-.29-.61-.7-.86-1.16-.5-.91-1.02-2.25-1.68-3.94L1.66 7.76C.96 5.99.41 4.59.16 3.51-.09 2.44-.12 1.39.63.63 1.39-.12 2.44-.09 3.51.16c1.08.25 2.48.8 4.25 1.5l6.16 2.41Z`} /></svg>;
function Il1Component({
  slug
}) {
  let t = `npx shadcn add ${slug}`;
  return <div className={`ba-install`}><div className={`ba-tray`}><span className={`ba-tray__head`}><span className={`ba-tray__icon`}>{`>_`}</span>{`Terminal`}<span className={`ba-tray__meta`}>{`zsh`}</span></span><div className={`ba-tray__card ba-install__term`}><span className={`ba-install__line`}><b>{`$`}</b><span className={`ba-install__type`} style={{
            "--n": t.length
          }}>{t}</span></span><span className={`ba-install__done`}>{`✓ Created 1 file`}</span></div></div><div className={`ba-tray`}><span className={`ba-tray__head`}><span className={`ba-install__folder`} aria-hidden><El1Component label={``} /></span>{`components/ui`}<span className={`ba-tray__meta`}>{`2 files`}</span></span><div className={`ba-tray__card ba-install__files`}><span className={`ba-install__file`}><i className={`ba-install__ext`}>{`TSX`}</i>{`button.tsx`}</span><span className={`ba-install__file ba-install__file--new`}><i className={`ba-install__ext ba-install__ext--new`}>{`TSX`}</i>{slug}{`.tsx`}<em>{`New`}</em></span></div></div></div>;
}
function Al1Component() {
  return <div className={`ba-tweak`}><div className={`ba-tweak__box`}><div className={`ba-tray ba-tweak__preview`}><span className={`ba-tray__head`}>{`Preview`}<span className={`ba-tray__meta ba-tweak__live`}><i />{`Live`}</span></span><div className={`ba-tray__card ba-tweak__profile`}><span className={`ba-tweak__avatar`}><img src={`/landing/memoji.png`} alt={``} width={28} height={28} /></span><b>{`Jonas Weber`}</b><small>{`Design lead`}</small><span className={`ba-tweak__stats`}><span><b>{`128`}</b>{` posts`}</span><span><b>{`2.4k`}</b>{` fans`}</span></span><span className={`ba-tweak__button`}>{`Follow`}</span></div></div><div className={`ba-tray ba-tweak__accent`}><span className={`ba-tray__head`}>{`Accent`}<span className={`ba-tray__meta ba-tweak__hex`}><span className={`ba-tweak__hex--a`}>{`#2F6BFF`}</span><span className={`ba-tweak__hex--b`}>{`#5E3EE0`}</span></span></span><div className={`ba-tray__card ba-tweak__swatches`}><i style={{
            background: `#2f6bff`
          }} /><i style={{
            background: `#5e3ee0`
          }} /><i style={{
            background: `#dd0674`
          }} /><i style={{
            background: `#14b8a6`
          }} /><i style={{
            background: `#f97316`
          }} /><b className={`ba-tweak__ring`} /></div></div><div className={`ba-tray ba-tweak__radius`}><span className={`ba-tray__head`}>{`Radius`}<span className={`ba-tray__meta ba-tweak__value`} /></span><div className={`ba-tray__card ba-tweak__trackcard`}><span className={`ba-tweak__track`}><span className={`ba-tweak__fill`} /><i /></span></div></div><div className={`ba-tray ba-tweak__shadow`}><span className={`ba-tray__head`}>{`Shadow`}<span className={`ba-tray__meta`}>{`Elevation`}</span></span><div className={`ba-tray__card ba-tweak__shadowcard`}><span>{`Soft lift`}</span><span className={`ba-tweak__switch`}><i /></span></div></div><span className={`ba-tweak__cursor`}><Rl1Component /><span className={`ba-tweak__tip ba-tweak__tip--radius`}>{`radius`}</span><span className={`ba-tweak__tip ba-tweak__tip--accent`}>{`accent`}</span><span className={`ba-tweak__tip ba-tweak__tip--shadow`}>{`shadow`}</span></span></div></div>;
}
function Ol1Component() {
  return <div className={`ba-theme`}><div className={`ba-theme__layer ba-theme__layer--light`}><b.Suspense fallback={null}><Nl1 columns={7} /></b.Suspense></div><div className={`ba-theme__layer ba-theme__layer--dark dark`}><b.Suspense fallback={null}><Nl1 columns={7} /></b.Suspense></div><span className={`ba-theme__edge`} /><span className={`ba-theme__toggle`}><i /></span></div>;
}
const sl = `claude mcp add --transport http affectui ${`${o_1.url}/api/mcp`}`;
const cl = [{
  tool: `search_components`,
  detail: `“onboarding checklist”`,
  result: `Progress Tracker`
}, {
  tool: `get_component`,
  detail: `progress-tracker`,
  result: `usage, props, install`
}, {
  tool: `shadcn add`,
  detail: `@affectui/progress-tracker`,
  result: `components/ui/progress-tracker.tsx`
}];
function Ll1Component() {
  return <section className={`lp-section lp-agent`} aria-labelledby={`lp-agent-title`}><h2 id={`lp-agent-title`} className={`lp-lead`}>{`Built for agents,`}<br />{`not just for copy and paste`}</h2><p className={`lp-sub`}>{`Connect the affectUI MCP server once. Claude Code, Cursor, VS Code or Codex then find the right piece, read its docs and add it – you just describe what you need.`}</p><div className={`lp-agent__frame`}><Os1Component minHeight={260}><div className={`lp-agent__chat`} aria-label={`Example agent session`}><p className={`lp-agent__you`}>{`Add an onboarding checklist to the dashboard`}</p><ol className={`lp-agent__steps`}>{cl.map((e, t) => <li key={e.tool} style={{
              animationDelay: `${200 + t * 260}ms`
            }}><span className={`lp-agent__check`}><J1Component icon={Qi} size={10} /></span><code>{e.tool}</code><span className={`lp-agent__detail`}>{e.detail}</span><span className={`lp-agent__result`}>{`→ `}{e.result}</span></li>)}</ol><p className={`lp-agent__reply`} style={{
            animationDelay: `1100ms`
          }}>{`Added the Progress Tracker above your stats – five steps, ticks that draw in, and it follows your dark mode.`}</p></div></Os1Component><div className={`lp-agent__setup`}><span className={`lp-agent__label`}>{`Connect in one line`}</span><div className={`lp-agent__cmd`}><code>{sl}</code><IComponent value={sl} className={`lp-agent__copy`} /></div><p className={`lp-agent__note`}>{`Works with every MCP client. No key needed for the free items and all docs; Pro members add their access key for the Pro source. Prefer plain text? `}<a href={`${o_1.url}/llms.txt`}>{`llms.txt`}</a></p><M to={`/docs/ai`} className={`btn btn--secondary lp-btn`}>{`Set up your editor`}</M></div></div></section>;
}
const ul = [`agent-run`, `agent-chat`, `evals`, `analytics`, `crm`, `settings-billing`].map(e => Di.find(t => t.slug === e)).filter(e => e !== undefined);
function useDl(rootMargin) {
  let tRef = b.useRef(null);
  let [n, setN] = b.useState(false);
  b.useEffect(() => {
    let tRef_current = tRef.current;
    if (!tRef_current || !(`IntersectionObserver` in window)) {
      return setN(true);
    }
    let i = new IntersectionObserver(e => setN(e.some(e => e.isIntersecting)), {
      rootMargin
    });
    i.observe(tRef_current);
    return () => i.disconnect();
  }, [rootMargin]);
  return [tRef, n];
}
function useFl() {
  let [e, setE] = b.useState(() => typeof window < `u` && window.matchMedia(`(min-width: 761px)`).matches);
  b.useEffect(() => {
    let e = window.matchMedia(`(min-width: 761px)`);
    let n = () => setE(e.matches);
    e.addEventListener(`change`, n);
    return () => e.removeEventListener(`change`, n);
  }, []);
  return e;
}
function Pl1Component({
  slug,
  name
}) {
  return <span className={`lp-screens__poster`}><img className={`lp-screens__shot lp-screens__shot--light`} src={`/previews/${slug}.webp`} alt={`${name} screen`} loading={`lazy`} decoding={`async`} /><img className={`lp-screens__shot lp-screens__shot--dark`} src={`/previews/dark/${slug}.webp`} alt={``} loading={`lazy`} decoding={`async`} /></span>;
}
function Ml1Component() {
  let [e, setE] = b.useState(ul[0]?.slug);
  let {
    offer
  } = useFs();
  let [ref, i] = useDl(`0px`);
  let a = useFl();
  let [o, setO] = b.useState(false);
  b.useEffect(() => {
    if (i && a) {
      setO(true);
      return;
    }
    let e = window.setTimeout(() => setO(false), 4000);
    return () => window.clearTimeout(e);
  }, [i, a]);
  let l = ul.find(t => t.slug === e) ?? ul[0];
  if (!l) {
    return null;
  }
  let {
    Preview
  } = l;
  let fallback = <Pl1Component slug={l.slug} name={l.name} />;
  return <section className={`lp-section lp-screens`} aria-labelledby={`lp-screens-title`}><h2 id={`lp-screens-title`} className={`lp-lead`}>{`Complete screens,`}<br />{`not just parts`}</h2><p className={`lp-sub`}>{`Whole app views for AI products – plug in your data and ship.`}</p><div className={`lp-tabs`} role={`tablist`} aria-label={`Pick a screen`}>{ul.map(e => <button key={e.slug} role={`tab`} aria-selected={e.slug === l.slug} className={`lp-tab`} onClick={() => setE(e.slug)}>{e.name}</button>)}</div><div ref={ref} className={`lp-screens__window`}><div className={`lp-screens__bar`} aria-hidden={`true`}><span className={`lp-screens__dots`}><i /><i /><i /></span><span className={`lp-screens__url`}>{`app.yourproduct.com/`}{l.slug}</span></div><div key={l.slug} className={`lp-screens__view`} role={`tabpanel`} aria-label={l.name}>{o ? <b.Suspense fallback={fallback}>{<Preview />}</b.Suspense> : a ? fallback : <M to={Ca(l)} aria-label={`Open the ${l.name} screen`}>{fallback}</M>}</div></div><div className={`lp-more lp-screens__ctas`}><M to={`/screens`} className={`btn btn--secondary lp-btn`}>{`Browse all `}{Di.length}{` screens`}</M><M to={`/pricing`} className={`btn btn--primary lp-btn`} onClick={() => vo(`Get Pro`, {
        from: `home screens`
      })}>{`Get Pro – $`}{offer ? offer.price : i_1.individual}{` once`}</M></div></section>;
}
const Hl1 = b.lazy(() => r(() => import("./BeforeAfter-CY3q6Q7B.jsx").then(e => ({
  default: e.BeforeAfter
})), __vite__mapDeps([313, 1, 2, 3, 261, 314, 315, 47, 40, 72, 108])));
const gl = [{
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
const _l = e => [...e].sort((e, t) => Date.parse(t.added ?? ``) - Date.parse(e.added ?? ``));
const faqs = [{
  q: `What is affectUI?`,
  a: `A library of hand-designed React components, blocks, illustrations and motion effects. Every piece is one file you copy into your project and own from then on.`
}, {
  q: `Do I need Tailwind or another UI library?`,
  a: `No. Each piece only imports from React and brings its own styles, so it works in any React setup – with or without Tailwind.`
}, {
  q: `How do I install a component?`,
  a: `Copy the file from the site, or install it with the shadcn CLI. Either way you end up with a single TSX file in your project.`
}, {
  q: `Does it work with Claude Code, Cursor or Codex?`,
  a: `Yes. Connect the affectUI MCP server once and your assistant can search every piece, read its docs and add it for you. Without setup, point it at affectui.com/llms.txt – or use the Copy prompt bar on any page.`
}, {
  q: `Does it work in light and dark mode?`,
  a: `Yes. Every piece follows your theme, and motion respects the reduced-motion setting of your visitors.`
}, {
  q: `What is free and what is Pro?`,
  a: `${Oi.filter(e => !e.pro).length} items are free to copy and keep. Pro unlocks every item with source and all future updates – you pay once, there is no subscription.`
}, {
  q: `Can I use it in client projects?`,
  a: `Yes. Pro includes a commercial license for unlimited projects, for you and your clients.`
}];
const yl = [{
  key: `components`,
  label: `Components`,
  to: `/components`,
  items: [`agent-tree`, `agent-inbox`, `agent-lanes`, `trace-waterfall`, `agent-graph`, `agent-steering`, `autonomy-dial`, `approval-card`, `agent-plan`, `tool-call-card`, `thinking-state`, `ai-answer`, `chat-composer`, `model-picker`, `context-window`, `memory-panel`].map(e => Ti.find(t => t.slug === e)).filter(e => e !== undefined).slice(0, 6)
}, {
  key: `screens`,
  label: `Screens`,
  to: `/screens`,
  items: _l(Di).slice(0, 4)
}, {
  key: `blocks`,
  label: `Blocks`,
  to: `/blocks`,
  items: _l(Ei).slice(0, 4)
}, {
  key: `illustrations`,
  label: `Illustrations`,
  to: `/illustrations`,
  items: _l($).slice(0, 4)
}, {
  key: `motion`,
  label: `Motion`,
  to: `/motion`,
  items: _l(k).slice(0, 6)
}].filter(e => e.items.length > 0);
function HComponent() {
  let e = useJo();
  let [t, setT] = b.useState(yl[0].key);
  let r = yl.find(e => e.key === t) ?? yl[0];
  let i = r.key === `blocks` || r.key === `illustrations`;
  let Oi_length = Oi.length;
  let o = Ti.find(e => !e.pro) ?? Ti[0];
  return <div className={`lp`}><header className={`lp-nav`}><div className={`lp-nav__left`}><M to={`/`} className={`logo lp-nav__logo`} aria-label={`${o_1.name} home`}><FaComponent size={17} /><span className={`logo__name`}>{o_1.name}</span></M><nav className={`lp-nav__links`} aria-label={`Primary`}><Kl1Component /><M to={`/docs`} className={`lp-nav__link`}>{`Docs`}</M><M to={`/pricing`} className={`lp-nav__link`}>{`Pricing`}</M></nav></div><div className={`lp-nav__right`}><Cc1Component /><Fc1Component className={`lp-nav__desktop`} />{e ? <YcComponent user={e} /> : <M to={`/login`} className={`btn btn--secondary lp-nav__desktop`}>{`Log In`}</M>}<M to={`/components`} className={`btn btn--primary`} onClick={() => vo(`Browse library`, {
          from: `nav`
        })}>{`Browse library`}</M><OlComponent loggedIn={!!e} /></div></header><main><section className={`lp-hero`}><DlComponent /><div className={`lp-hero__copy`}><h1 className={`lp-hero__title`}>{`Agent-ready UI`}<br />{`for AI products`}</h1><p className={`lp-hero__sub`}>{Oi_length}{`+ React components, screens and blocks. No dependencies.`}{` `}<br className={`lp-hero__sub-break`} />{`Add them yourself, or let Claude, Cursor or v0 do it.`}</p><div className={`lp-hero__ctas`}><M to={`/components`} className={`btn btn--primary lp-btn lp-btn--lg`} onClick={() => vo(`Browse library`, {
              from: `hero`
            })}>{`Browse library`}</M><M to={`/docs`} className={`btn btn--secondary lp-btn lp-btn--lg`}>{`Get started`}</M></div></div></section><section className={`lp-section`}><h2 className={`lp-lead`}>{Oi_length}{`+ pieces,`}<br />{`none of them generic`}</h2><div className={`lp-tabs`} role={`tablist`} aria-label={`Filter the library`}>{yl.map(e => <button key={e.key} role={`tab`} aria-selected={e.key === r.key} className={`lp-tab`} onClick={() => setT(e.key)}>{e.label}</button>)}</div><div key={r.key} className={`grid lp-grid${r.key === `screens` ? ` grid--screens` : i ? ` lp-grid--wide` : ``}`} role={`tabpanel`}>{r.items.map(e => <KsComponent key={e.slug} entry={e} look={r.key === `components` ? `clean` : undefined} />)}</div><div className={`lp-more`}><M to={r.to} className={`btn btn--secondary lp-btn`}>{`Browse all `}{r.label.toLowerCase()}</M></div></section><Ml1Component /><section className={`lp-section lp-section--compare`}><h2 className={`lp-lead`}>{`Same screen,`}<br />{`with the details done`}</h2><p className={`lp-sub`}>{`The details you never think to prompt for – hover states, motion, calm hierarchy – make a product easier to understand and nicer to come back to.`}</p><Os1Component minHeight={720}><Hl1 /></Os1Component></section><Ll1Component /><section className={`lp-section`}><div className={`lp-intro`}><h2 className={`lp-lead`}>{`One file per piece,`}<br />{`code you own`}</h2></div><div className={`lp-bento`}><article className={`lp-tile`}><div className={`lp-tile__stage`} aria-hidden><Il1Component slug={o.slug} /></div><h3 className={`lp-tile__title`}>{`One command, one file`}</h3><p className={`lp-tile__text`}>{`Install with the shadcn CLI or copy it. It lands as one TSX file, styles included.`}</p></article><article className={`lp-tile`}><div className={`lp-tile__stage`} aria-hidden><Al1Component /></div><h3 className={`lp-tile__title`}>{`Yours to change`}</h3><p className={`lp-tile__text`}>{`Plain React and CSS variables. Change a radius or a color, keep the rest.`}</p></article><article className={`lp-tile`}><div className={`lp-tile__stage`} aria-hidden><Ol1Component /></div><h3 className={`lp-tile__title`}>{`Light and dark, built in`}</h3><p className={`lp-tile__text`}>{`Every piece follows your theme, and motion respects reduced-motion settings.`}</p></article></div><div className={`lp-more`}><M to={`/docs/installation`} className={`btn btn--secondary lp-btn`}>{`Learn more`}</M></div></section><section className={`lp-section lp-faq`} aria-labelledby={`lp-faq-title`}><h2 id={`lp-faq-title`} className={`lp-lead`}>{`Questions,`}<br />{`answered`}</h2><ZcComponent faqs={faqs} /></section></main><Nc1Component /></div>;
}
const bl = [`kpi-chart`, `notification-stack`, `chat-composer`, `profile-menu`, `thinking-state`, `setup-guide`, `integration-settings`, `smart-recommendation`, `filter-menu`];
const xl = [`glass-folder`, `integration-grid`, `empty-calendar`, `layer-stack`, `team-invite`, `enrichment-orbit`, `side-folder`, `ghosted-chat`, `world-map`];
const Sl = (e, t) => t.map(t => e.find(e => e.slug === t)).filter(e => !!e);
const Cl = Sl(Ti, bl);
const wl = Sl($, xl);
const Tl = Cl.flatMap((e, t) => {
  if (wl[t]) {
    return [e, wl[t]];
  }
  return [e];
});
const El = Array.from({
  length: 21
}, (e, t) => Tl[t % Tl.length]);
function DlComponent() {
  return <div className={`lp-iso`} aria-hidden inert><div className={`lp-iso__plane`}><div className={`lp-iso__track`}>{[0, 1, 2].map(key => <div key={key} className={`lp-iso__grid`}>{El.map(({
            slug
          }, t) => <div key={`${slug}-${t}`} className={`lp-iso__tile`}><img className={`lp-iso__img lp-iso__img--light`} src={`/landing/iso/${slug}-light.webp`} alt={``} loading={`lazy`} decoding={`async`} /><img className={`lp-iso__img lp-iso__img--dark`} src={`/landing/iso/${slug}-dark.webp`} alt={``} loading={`lazy`} decoding={`async`} /></div>)}</div>)}</div></div><div className={`lp-iso__blur lp-iso__blur--soft`} /><div className={`lp-iso__blur lp-iso__blur--strong`} /><div className={`lp-iso__blur lp-iso__blur--bottom`} /></div>;
}
function OlComponent({
  loggedIn
}) {
  let [t, setT] = b.useState(false);
  let rRef = b.useRef(null);
  b.useEffect(() => {
    if (!t) {
      return;
    }
    let e = e => !rRef.current?.contains(e.target) && setT(false);
    let i = e => e.key === `Escape` && setT(false);
    document.addEventListener(`mousedown`, e);
    document.addEventListener(`keydown`, i);
    return () => {
      document.removeEventListener(`mousedown`, e);
      document.removeEventListener(`keydown`, i);
    };
  }, [t]);
  let i = () => setT(false);
  return <div className={`lp-mmenu`} ref={rRef}><button className={`btn btn--secondary btn--icon lp-mmenu__trigger`} aria-label={t ? `Close menu` : `Open menu`} aria-expanded={t} onClick={() => setT(e => !e)}><J1Component icon={t ? Ii : Ki} size={16} /></button>{t && <nav className={`lp-mmenu__panel`} aria-label={`Menu`}><span className={`lp-mmenu__label`}>{`Library`}</span>{gl.map(e => <M key={e.to} to={e.to} className={`lp-mmenu__item`} onClick={i}><span className={`lp-menu__icon`}><J1Component icon={e.icon} size={15} /></span>{e.label}<span className={`lp-menu__count`}>{e.count}</span></M>)}<span className={`lp-mmenu__sep`} /><M to={`/docs`} className={`lp-mmenu__item lp-mmenu__item--plain`} onClick={i}>{`Docs`}</M><M to={`/pricing`} className={`lp-mmenu__item lp-mmenu__item--plain`} onClick={i}>{`Pricing`}</M><a className={`lp-mmenu__item lp-mmenu__item--plain`} href={o_1.links.github} target={`_blank`} rel={`noreferrer`}>{`GitHub`}</a>{!loggedIn && <M to={`/login`} className={`lp-mmenu__item lp-mmenu__item--plain`} onClick={i}>{`Log In`}</M>}</nav>}</div>;
}
function Kl1Component() {
  let [e, setE] = b.useState(false);
  let nRef = b.useRef(null);
  let rRef = b.useRef(undefined);
  b.useEffect(() => {
    if (!e) {
      return;
    }
    let r = e => !nRef.current?.contains(e.target) && setE(false);
    let i = e => e.key === `Escape` && setE(false);
    document.addEventListener(`mousedown`, r);
    document.addEventListener(`keydown`, i);
    return () => {
      document.removeEventListener(`mousedown`, r);
      document.removeEventListener(`keydown`, i);
    };
  }, [e]);
  let iRef = b.useRef(false);
  return <div className={`lp-menu`} ref={nRef} onPointerEnter={e => {
    if (e.pointerType === `mouse`) {
      window.clearTimeout(rRef.current);
      iRef.current = true;
      setE(true);
    }
  }} onPointerLeave={e => {
    if (e.pointerType === `mouse`) {
      iRef.current = false;
      rRef.current = window.setTimeout(() => setE(false), 120);
    }
  }}><button className={`lp-nav__link lp-menu__trigger`} aria-expanded={e} aria-haspopup={`true`} onClick={() => setE(e => {
      if (iRef.current) {
        return true;
      }
      return !e;
    })}>{`Library`}<J1Component icon={Fi} size={12} /></button>{e && <div className={`lp-menu__panel`}>{gl.map(e => <M key={e.to} to={e.to} className={`lp-menu__item`} onClick={() => setE(false)}><span className={`lp-menu__icon`}><J1Component icon={e.icon} size={16} /></span><span className={`lp-menu__text`}><strong>{e.label}<span className={`lp-menu__count`}>{e.count}</span></strong><span>{e.text}</span></span></M>)}</div>}</div>;
}
const Al = (e, t) => b.lazy(() => e().then(e => ({
  default: e[t]
})));
const Jl1 = Al(() => r(() => import("./ComponentPage-C2GWVnMg.jsx"), __vite__mapDeps([316, 1, 2, 317, 3, 314, 315])), `ComponentPage`);
const Ml = Al(() => r(() => import("./PricingPage-RPo3RslS.jsx"), __vite__mapDeps([318, 1, 2, 317, 3])), `PricingPage`);
const Nl = Al(() => r(() => import("./DocsPage-BymnN-ky.jsx"), __vite__mapDeps([319, 317, 3, 2, 314])), `DocsPage`);
const Pl = Al(() => r(() => import("./LoginPage-CGZHju3l.jsx"), __vite__mapDeps([320, 1, 2, 317, 3, 321])), `LoginPage`);
const Fl = Al(() => r(() => import("./ContactPage-bpzBmmPa.jsx"), __vite__mapDeps([322, 1, 2, 317, 3, 321])), `ContactPage`);
const Il = Al(() => r(() => import("./LegalPage-zAor_usS.jsx"), __vite__mapDeps([323, 317, 3, 2])), `LegalPage`);
const Ll = Al(() => r(() => import("./LicensePage-C4cotqoY.jsx"), __vite__mapDeps([324, 317, 3, 2, 323])), `LicensePage`);
const Rl = Al(() => r(() => import("./AccountPage-CEZxTXit.jsx"), __vite__mapDeps([325, 1, 2, 317, 3, 326])), `AccountPage`);
const Zl1 = Al(() => r(() => import("./PartnerPage-BhNKB5Ii.jsx"), __vite__mapDeps([327, 1, 2, 328, 317, 3, 329])), `PartnerPage`);
const tabs = [{
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
}].filter(e => e.count > 0);
function VlComponent() {
  let path = useA();
  let [t, setT] = b.useState(false);
  let [r, setR] = b.useState(() => {
    try {
      return localStorage.getItem(`sidebar`) === `hidden`;
    } catch {
      return false;
    }
  });
  let a = e => {
    setR(e);
    try {
      localStorage.setItem(`sidebar`, e ? `hidden` : `shown`);
    } catch {}
  };
  let o = useJo();
  let s = useYo();
  let pro = o?.plan === `pro`;
  let u = /^\/login\/?$/.test(path);
  let d = /^\/contact\/?$/.test(path);
  let f = u || d;
  let p = Hl(path, /^\/account(\/downloads|\/team)?\/?$/);
  let m = t => path.match(t)?.[1];
  let h = m(/^\/components\/([^/]+)\/?$/);
  let g = m(/^\/blocks\/(?!category\/)([^/]+)\/?$/);
  let _ = m(/^\/illustrations\/(?!category\/)([^/]+)\/?$/);
  let v = m(/^\/motion\/(?!category\/)([^/]+)\/?$/);
  let y = m(/^\/screens\/(?!category\/)([^/]+)(?:\/full)?\/?$/);
  let ee = !!y && /\/full\/?$/.test(path);
  let x = h ? Ti.find(e => e.slug === h) : g ? Ei.find(e => e.slug === g) : _ ? $.find(e => e.slug === _) : v ? k.find(e => e.slug === v) : y ? Di.find(e => e.slug === y) : undefined;
  let te = path.startsWith(`/blocks`);
  let ne = path.startsWith(`/illustrations`);
  let re = path.startsWith(`/motion`);
  let ie = path.startsWith(`/screens`);
  let S = m(/^\/category\/([^/]+)\/?$/) ?? m(/^\/blocks\/category\/([^/]+)\/?$/) ?? m(/^\/illustrations\/category\/([^/]+)\/?$/) ?? m(/^\/motion\/category\/([^/]+)\/?$/) ?? m(/^\/screens\/category\/([^/]+)\/?$/);
  let ae = S ? (te ? Ai : ne ? ji : re ? Ni : ie ? Mi : ki).find(e => Pi(e) === S) : undefined;
  let oe = te ? Ei : ne ? $ : re ? k : ie ? Di : Ti;
  let se = e => (te ? `block` : ne ? `illustration` : re ? `motion effect` : ie ? `screen` : `component`) + (e === 1 ? `` : `s`);
  let ce = ae ? oe.filter(e => e.category === ae) : oe;
  let le = /^\/pricing\/?$/.test(path);
  let ue = /^\/license\/?$/.test(path);
  let de = m(/^\/(terms|privacy|refund|imprint)\/?$/);
  let fe = path === `/docs` || path === `/docs/` ? L[0].slug : m(/^\/docs\/([^/]+)\/?$/);
  let page = fe ? L.find(e => e.slug === fe) : undefined;
  let me = path === `/`;
  let he = m(/^\/(components|screens|blocks|illustrations|motion)\/?$/);
  let C = !!he;
  let ge = C || /^\/(screens|blocks|illustrations|motion)\/?$/.test(path) || !!ae;
  let _e = !x && h ? Oi.find(e => e.slug === h && e.kind !== `component`) : undefined;
  let ve = /^\/pro\/?$/.test(path) || !!_e;
  let code = m(/^\/partner\/([a-z0-9_-]{2,32})\/?$/);
  let be = !me && !f && p === null && !x && !page && !le && !ue && !de && !ge && !ve && !code;
  b.useEffect(() => {
    if (/^\/pro\/?$/.test(path)) {
      ga(`/pricing`, true);
    } else if (_e) {
      ga(Ca(_e), true);
    }
  }, [path, _e]);
  b.useEffect(() => {
    let e = e => {
      if (e.key === `Escape`) {
        setT(false);
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, []);
  b.useEffect(() => {
    if (t) {
      document.documentElement.style.overflow = `hidden`;
      return () => {
        document.documentElement.style.overflow = ``;
      };
    }
  }, [t]);
  b.useEffect(() => {
    if (code) {
      return;
    }
    let e = be ? `Page not found` : x?.name ?? ae ?? page?.title ?? (le ? `Pricing` : ue ? `License` : C ? he[0].toUpperCase() + he.slice(1) : ie ? `Screens` : te ? `Blocks` : ne ? `Illustrations` : re ? `Motion` : undefined);
    document.title = e ? `${e} · ${o_1.name}` : me ? `${o_1.name} · Agent-ready React UI for AI products` : o_1.name;
  }, [me, x, ae, le, ue, C, he, te, ne, re, ie, page, be, code]);
  b.useEffect(() => {
    ks();
  }, [path]);
  b.useEffect(() => {
    let t = document.querySelector(`link[rel="canonical"]`);
    if (t) {
      t.href = `https://www.affectui.com${path === `/` ? `/` : path.replace(/\/$/, ``)}`;
    }
  }, [path]);
  b.useEffect(() => {
    if (he) {
      requestAnimationFrame(() => ma(he, false));
    }
  }, [he]);
  if (ee && x) {
    let _Component = x.Preview;
    return <QsContext.Provider value><b.Suspense fallback={null}>{<_Component />}</b.Suspense></QsContext.Provider>;
  }
  if (code) {
    return <b.Suspense fallback={null}><Zl1 code={code} /></b.Suspense>;
  }
  if (me) {
    return <>{s && <Gc1Component pro={pro} />}<HComponent /><GsComponent /></>;
  }
  return <>{!f && s && <Gc1Component pro={pro} />}{!f && <ScComponent />}<GsComponent /><Qc1Component /><div className={`shell`} data-focus={f || undefined} data-collapsed={r || undefined}><PoComponent open={t} path={path} onClose={() => setT(false)} onCollapse={() => a(true)} />{t && <div className={`scrim`} onClick={() => setT(false)} />}<div className={`main-col`}><div className={`frame-edge frame-edge--top`} aria-hidden={`true`} /><main className={`panel`}><header className={`topbar`}><button className={`icon-btn topbar__menu`} aria-label={`Open sidebar`} onClick={() => setT(true)}><J1Component icon={Ki} /></button>{r && !f && <button className={`icon-btn topbar__expand`} aria-label={`Show sidebar`} title={`Show sidebar`} onClick={() => a(false)}><J1Component icon={Xa} /></button>}<span className={`topbar__name`}>{o_1.name}</span><div className={`topbar__links`}><Cc1Component /><Fc1Component />{o?.plan !== `pro` && <Mc1Component />}{o ? <YcComponent user={o} /> : <M to={`/login`} className={`btn btn--secondary`}>{`Log In`}</M>}</div></header><b.Suspense fallback=<div className={`content`} aria-busy={`true`} />>{be ? <div className={`content`}><XcComponent /></div> : u ? <div className={`content`}><Pl /></div> : d ? <div className={`content`}><Fl /></div> : p === null ? x ? <div className={`content content--doc`}><Jl1 key={x.slug} entry={x} /></div> : page ? <div className={`content content--doc`}><Nl key={page.slug} page={page} /></div> : le ? <div className={`content`}><Ml /></div> : ue ? <div className={`content`}><Ll /></div> : de ? <div className={`content`}><Il key={de} slug={de} /></div> : <div className={`content`}>{!C && (ae || ie || te || ne || re) ? <header className={`page-head`}><h1 className={`page-head__title`}>{ae ?? (ie ? `Screens` : te ? `Blocks` : ne ? `Illustrations` : `Motion`)}</h1><span className={`page-head__count`}>{ce.length}{` `}{se(ce.length)}</span></header> : <FoComponent />}{C ? <><Pc1Component tabs={tabs} end=<NoComponent /> /><section id={`components`} className={`library`}><h2 className={`library__title`}><M to={`/components`}>{`Components`}</M><span>{Ti.length}</span></h2><div className={`grid`}>{Ti.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section><section id={`screens`} className={`library library--next`}><h2 className={`library__title`}><M to={`/screens`}>{`Screens`}</M><span>{Di.length}</span></h2><div className={`grid grid--screens`}>{Di.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section><section id={`blocks`} className={`library library--next`}><h2 className={`library__title`}><M to={`/blocks`}>{`Blocks`}</M><span>{Ei.length}</span></h2><div className={`grid grid--blocks`}>{Ei.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section><section id={`illustrations`} className={`library library--next`}><h2 className={`library__title`}><M to={`/illustrations`}>{`Illustrations`}</M><span>{$.length}</span></h2><div className={`grid grid--blocks`}>{$.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section>{k.length > 0 && <section id={`motion`} className={`library library--next`}><h2 className={`library__title`}><M to={`/motion`}>{`Motion`}</M><span>{k.length}</span></h2><div className={`grid`}>{k.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section>}</> : <section id={`components`} className={`library`}>{!(ie || te || ne || re) && <div className={`library__bar`}><Ko1Component /></div>}<div className={ie ? `grid grid--screens` : te || ne ? `grid grid--blocks` : `grid`}>{ce.map(e => <KsComponent key={e.slug} entry={e} />)}</div></section>}</div> : <div className={`content`}>{o ? <Rl user={o} tab={p === `/downloads` ? `downloads` : p === `/team` ? `team` : `account`} /> : <Pl />}</div>}</b.Suspense></main><div className={`frame-edge frame-edge--bottom`} aria-hidden={`true`} />{!f && <Nc1Component />}</div></div></>;
}
function Hl(path, t) {
  let n = path.match(t);
  if (n) {
    return n[1] ?? ``;
  }
  return null;
}
function UlComponent() {
  let {
    open,
    current
  } = useOs();
  let n = useA();
  if (!open || /\/full\/?$/.test(n) || /^\/partner\//.test(n)) {
    return null;
  }
  return <div className={`consent`} role={`dialog`} aria-labelledby={`consent-title`} aria-describedby={`consent-text`}><p id={`consent-title`} className={`consent__title`}>{`Cookies`}</p><p id={`consent-text`} className={`consent__text`}>{`With your OK we use Google Analytics and the Meta pixel to see how the site is used and to measure our ads. You can change this any time under “Cookie settings” in the footer. `}<M to={`/privacy`}>{`Privacy`}</M></p><div className={`consent__actions`}><button type={`button`} className={`btn btn--secondary consent__btn`} aria-pressed={current === `denied`} onClick={() => Ts(`denied`)}>{`Decline`}</button><button type={`button`} className={`btn btn--primary consent__btn`} aria-pressed={current === `granted`} onClick={() => Ts(`granted`)}>{`Accept`}</button></div></div>;
}
const Wl = y.createRoot(document.getElementById(`root`));
Ds();
Wl.render(<b.StrictMode><VlComponent /><UlComponent /><Pe1Component /></b.StrictMode>);
export { vo as A, AaComponent as B, Go as C, AoComponent as D, Wo as E, ha as F, Yi as G, J1Component as H, NComponent as I, Ri as J, qi as K, OaComponent as L, Ca as N, Eo as O, ga as P, Ei as Q, Sa1Component as R, Uo as S, useJo as T, Qi as U, IComponent as V, Zi as W, Fi as X, Ii as Y, Oi as Z, useFs as _, Mc1Component as a, R as b, useOc as c, useEc as d, k as et, Hs as f, Ns as g, Ps as h, Lc as i, FaComponent as j, useTo as k, XsComponent as l, Ls as m, ZcComponent as n, Di as nt, HcComponent as o, Fs as p, Vi as q, GcComponent as r, Cc1Component as s, El1Component as t, Ti as tt, $s as u, Qo as v, z as w, Ko as x, useZo as y, MComponent as z };
