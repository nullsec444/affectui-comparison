// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t } from "./react-BkAXpnfr.jsx";
import { o } from "./site-D86YA7B9.jsx";
import { t as t_2 } from "./jsx-runtime-CTsRTJUX.jsx";
import { t as t_3 } from "./ArrowLeft01Icon-qNK3q5ZR.jsx";
import { C as C_1, E as E_1, H, M, P, S, b, j as D1 } from "./index-C4AVl5zi.jsx";
const icon = [[`path`, {
  d: `M5.02799 21.363C3.7594 20.7472 2.70468 19.7093 1.87557 18.3139C1.59346 17.8391 1.80778 17.2382 2.30557 16.999C2.80337 16.7598 3.39448 16.9744 3.6865 17.4431C4.33618 18.486 5.09168 19.1707 5.9014 19.5638C6.91266 20.0547 8.12341 20.1467 9.5396 19.756L10.0715 21.6839C8.2818 22.1778 6.55768 22.1056 5.02799 21.363Z`,
  fill: `currentColor`,
  fillRule: `evenodd`,
  clipRule: `evenodd`,
  key: `0`
}], [`path`, {
  d: `M5.89322 1.25C6.32429 1.25 6.92392 1.3505 7.32982 1.44894C8.04979 1.62356 8.97224 1.95848 9.8331 2.60631C10.5823 2.42952 11.6434 2.22317 13 2.22315C14.3566 2.22312 15.4177 2.42953 16.1669 2.60634C17.0278 1.95849 17.9502 1.62357 18.6702 1.44895C19.0761 1.3505 19.6906 1.25 20.1068 1.25H20.6195L20.8056 1.72771C21.0649 2.3931 21.1586 3.20254 21.1599 3.96175C21.161 4.60091 21.0965 5.24848 20.984 5.81333C21.2885 6.295 21.5728 6.86589 21.7936 7.45193C22.0569 8.15071 22.25 8.92404 22.25 9.6286C22.25 12.0507 21.4385 13.7613 20.1549 14.9682C19.1799 15.8849 17.9698 16.4752 16.7459 16.8944C17.0081 17.2892 17.25 17.811 17.25 18.4951V20.75C17.25 21.6928 17.25 22.1642 16.9571 22.4571C16.6642 22.75 16.1928 22.75 15.25 22.75H10.75C9.80719 22.75 9.33579 22.75 9.04289 22.4571C8.75 22.1642 8.75 21.6928 8.75 20.75V18.4951C8.75 17.811 8.99194 17.2892 9.25414 16.8944C8.03018 16.4752 6.82008 15.8849 5.84507 14.9682C4.56153 13.7613 3.75 12.0507 3.75 9.6286C3.75 8.92404 3.94309 8.15071 4.20638 7.45193C4.4272 6.86589 4.71153 6.29499 5.01601 5.81332C4.90345 5.24848 4.83899 4.6009 4.8401 3.96175C4.8414 3.20254 4.93514 2.3931 5.1944 1.72771L5.38053 1.25H5.89322Z`,
  fill: `currentColor`,
  key: `1`
}]];
const p = t();
const m = t_2();
const H1Component = () => <svg width={`16`} height={`16`} viewBox={`0 0 24 24`} aria-hidden={`true`}><path fill={`#4285F4`} d={`M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.08 3.57-5.15 3.57-8.81Z`} /><path fill={`#34A853`} d={`M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.1A12 12 0 0 0 12 24Z`} /><path fill={`#FBBC05`} d={`M5.27 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z`} /><path fill={`#EA4335`} d={`M12 4.75c1.76 0 3.34.6 4.59 1.8l3.43-3.43A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.27 6.6l4 3.1C6.22 6.86 8.87 4.75 12 4.75Z`} /></svg>;
const g = {
  google: `Google`,
  github: `GitHub`
};
export function LoginPage() {
  let [e, setE] = p.useState(``);
  let [_, set_] = p.useState(``);
  let [y, setY] = p.useState(`idle`);
  let [x, setX] = p.useState(null);
  let [C, setC] = p.useState([]);
  let T = /^\S+@\S+\.\S+$/.test(e);
  let E = /^\d{6,8}$/.test(_.trim());
  let D = new URLSearchParams(window.location.search).get(`checkout`) === `success`;
  p.useEffect(() => {
    b().then(setC);
  }, []);
  let O = async t => {
    t.preventDefault();
    if (!T || y === `sending`) {
      return;
    }
    setY(`sending`);
    setX(null);
    let n = await S(e);
    if (n) {
      setX(n);
      setY(`idle`);
    } else {
      set_(``);
      setY(`sent`);
    }
  };
  let k = async t => {
    t.preventDefault();
    if (E && y !== `verifying`) {
      setY(`verifying`);
      setX(null);
      if (await E_1(e, _)) {
        setX(`That code didn't work – check it or request a new one.`);
        setY(`sent`);
      } else {
        P(`/account`);
      }
    }
  };
  let A = async e => {
    setX(null);
    let t = await C_1(e);
    if (t) {
      setX(t);
    }
  };
  return <div className={`login`}><button className={`btn btn--ghost login__back`} onClick={() => {
      if (window.history.length > 1) {
        return window.history.back();
      }
      return P(`/`);
    }}><H icon={t_3} size={14} />{`Back`}</button><div className={`login__card`}><D1 size={28} className={`login__mark`} /><h1 className={`login__title`}>{D ? `Payment received` : `Sign in to ${o.name}`}</h1><p className={`login__sub`}>{D ? `Thanks for your purchase. Sign in with the email you used at checkout to unlock Pro.` : `Unlock Pro components, downloads and your access key.`}</p>{y === `sent` || y === `verifying` ? <form className={`login__sent`} role={`status`} onSubmit={k}><strong>{`Check your inbox`}</strong><span>{`We sent a sign-in link and a code to `}{e}{`. Open the link, or enter the code here.`}</span><input className={`login__code`} inputMode={`numeric`} autoComplete={`one-time-code`} placeholder={`123456`} maxLength={8} value={_} onChange={e => set_(e.target.value.replace(/\D/g, ``))} aria-label={`Sign-in code`} autoFocus /><button className={`tier__cta tier__cta--primary login__submit`} type={`submit`} disabled={!E || y === `verifying`}>{y === `verifying` ? `Signing in…` : `Sign in with code`}</button>{x && <p className={`login__error`}>{x}</p>}<button className={`btn btn--ghost`} type={`button`} onClick={() => setY(`idle`)}>{`Use a different email`}</button></form> : <>{C.length > 0 && <><div className={`login__social`}>{C.map(e => <button key={e} className={`tier__cta tier__cta--secondary login__alt`} type={`button`} onClick={() => A(e)}>{e === `google` ? <H1Component /> : <H icon={icon} size={16} />}{`Continue with `}{g[e]}</button>)}</div><div className={`login__divider`}><span>{`or`}</span></div></>}<form className={`login__form`} onSubmit={O}><label className={`login__field`}><span>{`Email`}</span><input type={`email`} value={e} onChange={e => setE(e.target.value)} placeholder={`you@example.com`} autoComplete={`email`} autoFocus required /></label><button className={`tier__cta tier__cta--primary login__submit`} type={`submit`} disabled={!T || y === `sending`}>{y === `sending` ? `Sending…` : `Continue with email`}</button>{x && <p className={`login__error`}>{x}</p>}</form></>}<p className={`login__legal`}>{`No account yet? Signing in creates one – with any email address. Want Pro? See `}<M to={`/pricing`}>{`Pricing`}</M>{`.`}</p></div></div>;
}
