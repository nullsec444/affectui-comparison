// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t as t_1 } from "./react-BkAXpnfr.jsx";
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
const n = t_1();
const r = t();
const I1Component = () => <svg viewBox={`0 0 38 57`} aria-hidden={`true`}><path d={`M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z`} fill={`#1ABCFE`} /><path d={`M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z`} fill={`#0ACF83`} /><path d={`M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z`} fill={`#FF7262`} /><path d={`M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z`} fill={`#F24E1E`} /><path d={`M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z`} fill={`#A259FF`} /></svg>;
function A1Component() {
  let e = `ui-ipc-cu` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  return <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><defs><linearGradient id={`${e}-a`} x1={`0`} y1={`1`} x2={`1`} y2={`0`}><stop stopColor={`#8930FD`} /><stop offset={`1`} stopColor={`#49CCF9`} /></linearGradient><linearGradient id={`${e}-b`} x1={`0`} y1={`1`} x2={`1`} y2={`0`}><stop stopColor={`#FF02F0`} /><stop offset={`1`} stopColor={`#FFC800`} /></linearGradient></defs><path fill={`url(#${e}-a)`} d={`M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439z`} /><path fill={`url(#${e}-b)`} d={`M12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z`} /></svg>;
}
const O1Component = () => <svg viewBox={`0 0 24 24`} aria-hidden={`true`}><path fill={`#FCB400`} d={`M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257z`} /><path fill={`#18BFFF`} d={`M23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596z`} /><path fill={`#F82B60`} d={`M.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z`} /></svg>;
const s = {
  figma: () => <I1Component />,
  clickup: () => <A1Component />,
  airtable: () => <O1Component />
};
const d_1 = `M106.447 67.3367C106.447 69.7104 104.523 71.6348 102.149 71.6348H75.928C73.5542 71.6348 71.6299 73.5591 71.6299 75.9329V102.16C71.6299 104.534 69.7056 106.458 67.3318 106.458H35.8198C35.8185 106.458 35.8174 106.459 35.8174 106.46C35.8174 106.462 35.8163 106.463 35.8149 106.463H4.29811C1.92433 106.463 0 104.539 0 102.165V39.1262C0 36.7525 1.92433 34.8281 4.29811 34.8281H30.5193C32.8931 34.8281 34.8174 32.9038 34.8174 30.53V4.29812C34.8174 1.92433 36.7417 0 39.1155 0H102.149C104.523 0 106.447 1.92433 106.447 4.29811V67.3367ZM35.8174 66.3425C35.8174 68.7163 37.7417 70.6406 40.1155 70.6406H66.3318C68.7056 70.6406 70.6299 68.7163 70.6299 66.3425V40.1155C70.6299 37.7417 68.7056 35.8174 66.3318 35.8174H40.1155C37.7417 35.8174 35.8174 37.7417 35.8174 40.1155V66.3425Z`;
const l = [{
  id: `linear`,
  name: `Linear`,
  domain: `linear.app`,
  category: `Project management`,
  description: `Turn requests from chat into issues and keep their status in sync both ways.`,
  features: [`Create issues from any message`, `Two-way status sync`, `Link issues to customers`],
  path: `M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`,
  color: `#ffffff`,
  tile: `#5E6AD2`,
  connected: true
}, {
  id: `figma`,
  tile: `#ffffff`,
  name: `Figma`,
  domain: `figma.com`,
  category: `Design`,
  description: `Preview frames where you talk about them and link designs to their tasks.`,
  features: [`Live frame previews`, `Comment threads in one place`, `Link frames to tasks`],
  connected: false
}, {
  id: `notion`,
  name: `Notion`,
  domain: `notion.so`,
  category: `Docs & wiki`,
  description: `Search your workspace while you write and save answers as pages.`,
  features: [`Search pages and databases`, `Save answers as pages`, `Keep docs in sync`],
  path: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
  color: `currentColor`,
  tile: `#ffffff`,
  connected: true
}, {
  id: `stripe`,
  name: `Stripe`,
  domain: `stripe.com`,
  category: `Payments`,
  description: `See customers, invoices and subscriptions next to every conversation.`,
  features: [`Customer and invoice lookup`, `Subscription changes as events`, `Revenue per account`],
  path: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`,
  color: `#ffffff`,
  tile: `#635BFF`,
  connected: true
}, {
  id: `hubspot`,
  name: `HubSpot`,
  domain: `hubspot.com`,
  category: `CRM`,
  description: `Keep contacts and deals current – notes and calls are logged for you.`,
  features: [`Sync contacts and companies`, `Log activity on deals`, `Trigger workflows`],
  path: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
  color: `#ffffff`,
  tile: `#FF7A59`,
  connected: false
}, {
  id: `shopify`,
  name: `Shopify`,
  domain: `shopify.com`,
  category: `Commerce`,
  description: `Answer customer questions with the real order, product and stock in view.`,
  features: [`Order and refund lookup`, `Low-stock alerts`, `Product catalog search`],
  path: `M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z`,
  color: `#ffffff`,
  tile: `#95BF47`,
  connected: false
}, {
  id: `airtable`,
  name: `Airtable`,
  domain: `airtable.com`,
  category: `Databases`,
  description: `Read and update any base – rows and fields stay linked to your projects.`,
  features: [`Read and write records`, `Watch views for changes`, `Map fields to properties`],
  tile: `#ffffff`,
  connected: false
}, {
  id: `webflow`,
  name: `Webflow`,
  domain: `webflow.com`,
  category: `Website`,
  description: `Publish CMS items and collect form submissions right from your workspace.`,
  features: [`Publish CMS items`, `Collect form submissions`, `Schedule site updates`],
  path: `m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z`,
  color: `#ffffff`,
  tile: `#146EF5`,
  connected: false
}, {
  id: `vercel`,
  name: `Vercel`,
  domain: `vercel.com`,
  category: `Developer tools`,
  description: `Follow deployments, previews and failed builds without switching tabs.`,
  features: [`Deployment status`, `Preview links in threads`, `Build failure alerts`],
  path: `m12 1.608 12 20.784H0Z`,
  color: `currentColor`,
  tile: `#000000`,
  connected: false
}, {
  id: `clickup`,
  tile: `#ffffff`,
  name: `ClickUp`,
  domain: `clickup.com`,
  category: `Project management`,
  description: `Create tasks, assign owners and track due dates across your spaces.`,
  features: [`Create and assign tasks`, `Due date reminders`, `Sync across spaces`],
  connected: false
}];
const u = e => {
  let t = (e.tile ?? ``).toLowerCase();
  if (!t || t === `#000` || t === `#000000`) {
    return `ink`;
  }
  if (t === `#fff` || t === `#ffffff`) {
    return `light`;
  }
  return `brand`;
};
const d = e => {
  let t = u(e);
  return {
    "data-tone": t,
    style: t === `brand` ? {
      "--ui-ipc-brand": e.tile
    } : undefined
  };
};
function F1Component({
  item
}) {
  if (item.icon) {
    return <>{item.icon}</>;
  }
  let t = s[item.id];
  if (t && !item.path) {
    return <>{t()}</>;
  }
  return <svg viewBox={`0 0 24 24`} fill={item.color ?? `#fff`} aria-hidden={`true`}><path d={item.path} /></svg>;
}
function P1Component({
  integrations = l,
  appName = `affectUI`,
  appIcon,
  defaultSelected,
  onToggle,
  onExplore,
  onBack,
  onClose,
  className
}) {
  let g = `ui-ipc` + n.useId().replace(/[^a-zA-Z0-9_-]/g, ``);
  let ref = n.useRef(null);
  let vRef = n.useRef(null);
  let yRef = n.useRef(null);
  let [b, setB] = n.useState(``);
  let [S, setS] = n.useState(defaultSelected ?? integrations[0]?.id);
  let [w, setW] = n.useState(() => new Set(integrations.filter(e => e.connected).map(e => e.id)));
  let [E, setE] = n.useState(w);
  let [O, setO] = n.useState(null);
  let [A, setA] = n.useState(false);
  let MRef = n.useRef(undefined);
  let N = b.trim().toLowerCase();
  let P = n.useMemo(() => integrations.filter(e => !N || `${e.name} ${e.domain} ${e.category}`.toLowerCase().includes(N)), [integrations, N]);
  let F = [{
    label: `Connected`,
    items: P.filter(e => E.has(e.id))
  }, {
    label: `Available`,
    items: P.filter(e => !E.has(e.id))
  }].filter(e => e.items.length);
  let I = F.flatMap(e => e.items);
  let L = I.find(e => e.id === S) ?? I[0];
  let R = L ? w.has(L.id) : false;
  n.useLayoutEffect(() => {
    if (MRef.current === undefined) {
      MRef.current = L?.id;
    } else if (L?.id !== MRef.current) {
      setA(true);
    }
  }, [L?.id]);
  n.useEffect(() => setE(new Set(w)), [N]);
  let zRef = n.useRef(false);
  n.useLayoutEffect(() => {
    let yRef_current = yRef.current;
    let t = yRef_current?.querySelector(`[data-id="${L?.id}"]`);
    if (!yRef_current || !t) {
      return setO(null);
    }
    setO({
      y: t.offsetTop,
      h: t.offsetHeight
    });
    if (!zRef.current) {
      return;
    }
    zRef.current = false;
    let n = t.previousElementSibling?.classList.contains(`ui-ipc__label`) ? t.previousElementSibling.offsetHeight : 0;
    let r = t.offsetTop - 8 - n;
    let i = t.offsetTop + t.offsetHeight + 8;
    if (r < yRef_current.scrollTop) {
      yRef_current.scrollTop = r;
    } else if (i > yRef_current.scrollTop + yRef_current.clientHeight) {
      yRef_current.scrollTop = i - yRef_current.clientHeight;
    }
  }, [L?.id, I.length, F.length]);
  n.useEffect(() => {
    let e = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === `/`) {
        e.preventDefault();
        vRef.current?.focus();
      }
    };
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, []);
  n.useEffect(() => {
    let _Ref_current = ref.current;
    if (!_Ref_current || typeof IntersectionObserver > `u`) {
      return;
    }
    let t = new IntersectionObserver(([t]) => _Ref_current.toggleAttribute(`data-paused`, !t.isIntersecting));
    t.observe(_Ref_current);
    return () => t.disconnect();
  }, []);
  let B = e => {
    let t = !w.has(e.id);
    setW(n => {
      let r = new Set(n);
      if (t) {
        r.add(e.id);
      } else {
        r.delete(e.id);
      }
      return r;
    });
    onToggle?.(e.id, t);
  };
  let V = e => {
    if (!I.length || !L) {
      return;
    }
    zRef.current = true;
    let t = I.findIndex(e => e.id === L.id);
    setS(I[(t + e + I.length) % I.length].id);
  };
  return <div ref={ref} className={[`ui-ipc`, className].filter(Boolean).join(` `)} data-on={R || undefined} data-swapped={A || undefined}><style href={`ui-integration-picker-clean`} precedence={`default`}>{m}</style><div className={`ui-ipc__card`}><div className={`ui-ipc__top`}>{onBack ? <button type={`button`} className={`ui-ipc__back`} aria-label={`Back`} onClick={onBack}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M10 3.5 5.5 8l4.5 4.5`} /></svg></button> : <svg viewBox={`0 0 16 16`} className={`ui-ipc__lens`} aria-hidden={`true`}><circle cx={`7.25`} cy={`7.25`} r={`4.75`} /><path d={`m13.5 13.5-2.9-2.9`} /></svg>}<label className={`ui-ipc__search`}><span className={`ui-ipc__crumb`}>{`Integrations`}</span><input ref={vRef} value={b} placeholder={`Search integrations`} aria-label={`Search integrations`} aria-controls={`${g}-list`} aria-activedescendant={L ? `${g}-${L.id}` : undefined} role={`combobox`} aria-expanded={`true`} onChange={e => setB(e.target.value)} onKeyDown={e => {
            if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
              e.preventDefault();
              V(e.key === `ArrowDown` ? 1 : -1);
            } else if (e.key === `Enter` && L) {
              e.preventDefault();
              B(L);
            } else if (e.key === `Escape`) {
              if (b) {
                setB(``);
              } else {
                onClose?.();
              }
            } else if (e.key === `ArrowLeft` && !b && onBack) {
              e.preventDefault();
              onBack();
            }
          }} /><kbd className={`ui-ipc__kbd`}>{`⌘/`}</kbd></label></div><div className={`ui-ipc__body`}><div ref={yRef} id={`${g}-list`} className={`ui-ipc__list`} role={`listbox`} aria-label={`Integrations`}>{O && <span className={`ui-ipc__pill`} style={{
            transform: `translateY(${O.y}px)`,
            height: O.h
          }} aria-hidden={`true`} />}{F.map(e => <div key={e.label} role={`group`} aria-label={e.label} className={`ui-ipc__group`}><span className={`ui-ipc__label`}>{e.label}</span>{e.items.map(e => <button key={e.id} id={`${g}-${e.id}`} data-id={e.id} type={`button`} role={`option`} aria-selected={e.id === L?.id} className={`ui-ipc__item`} tabIndex={-1} onClick={() => {
              setS(e.id);
              vRef.current?.focus({
                preventScroll: true
              });
            }}><span className={`ui-ipc__logo`} {...d(e)}><F1Component item={e} /></span><span className={`ui-ipc__name`}><b>{e.name}</b><small>{e.category}</small></span></button>)}</div>)}{!F.length && <p className={`ui-ipc__empty`}>{`No integrations match `}<b>{`“`}{b}{`”`}</b></p>}</div><section className={`ui-ipc__detail`} aria-live={`polite`}>{L ? <><div className={`ui-ipc__art`} aria-hidden={`true`}><span className={`ui-ipc__rings`}><i /><i /><i /><i /></span><span className={`ui-ipc__tile ui-ipc__tile--app`}>{appIcon ?? <svg viewBox={`0 0 107 107`} className={`ui-ipc__mark`} fill={`currentColor`}><path d={d_1} /></svg>}</span><span className={`ui-ipc__link`}><svg viewBox={`0 0 16 16`}><path d={`M2.5 6h10.5M10.5 3.5 13 6l-2.5 2.5M13.5 10H3M5.5 7.5 3 10l2.5 2.5`} /></svg></span><span key={L.id} className={`ui-ipc__tile ui-ipc__tile--brand`} {...d(L)}><F1Component item={L} /></span></div><div key={`info-${L.id}`} className={`ui-ipc__info`}><div className={`ui-ipc__title`}><div><h3>{appName}{` + `}{L.name}</h3><span className={`ui-ipc__domain`}>{L.domain}{R && <span className={`ui-ipc__state`}>{`Connected`}</span>}</span></div><button type={`button`} role={`switch`} aria-checked={R} aria-label={`${R ? `Disconnect` : `Connect`} ${L.name}`} className={`ui-ipc__switch`} onClick={() => B(L)} /></div><p className={`ui-ipc__desc`}>{L.description}</p>{L.features?.length ? <ul className={`ui-ipc__features`}>{L.features.slice(0, 3).map(e => <li key={e}><svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`m3.5 8.5 3 3 6-7`} /></svg>{e}</li>)}</ul> : null}<button type={`button`} className={`ui-ipc__explore`} onClick={() => onExplore?.(L.id)}>{`Explore integration`}<svg viewBox={`0 0 16 16`} aria-hidden={`true`}><path d={`M6.5 4 10.5 8l-4 4`} /></svg></button></div></> : <p className={`ui-ipc__empty ui-ipc__empty--detail`}>{`Pick an integration to see what it does`}</p>}</section></div><footer className={`ui-ipc__foot`}><span className={`ui-ipc__count`}><i aria-hidden={`true`} />{w.size}{` of `}{integrations.length}{` connected`}</span><span className={`ui-ipc__hints`} aria-hidden={`true`}><kbd>{`↑`}</kbd><kbd>{`↓`}</kbd><span>{`to move`}</span><kbd>{`↵`}</kbd><span>{`to switch`}</span></span></footer></div></div>;
}
var m = `.ui-ipc{--ui-ipc-card: #ffffff;--ui-ipc-strong: #000000;--ui-ipc-ink: rgba(0, 0, 0, 0.88);--ui-ipc-text: rgba(0, 0, 0, 0.61);--ui-ipc-muted: rgba(0, 0, 0, 0.45);--ui-ipc-faint: rgba(0, 0, 0, 0.27);--ui-ipc-icon: rgba(0, 0, 0, 0.447);--ui-ipc-line: rgba(0, 0, 0, 0.06);--ui-ipc-line-strong: rgba(0, 0, 0, 0.1);--ui-ipc-wash: rgba(0, 0, 0, 0.03);--ui-ipc-soft: rgba(0, 0, 0, 0.015);--ui-ipc-fill: rgba(0, 0, 0, 0.06);--ui-ipc-light: #ffffff;--ui-ipc-light-ring: rgba(0, 0, 0, 0.1);--ui-ipc-ink-tile: #000000;--ui-ipc-ink-mark: #ffffff;--ui-ipc-app: #000000;--ui-ipc-app-ink: #ffffff;--ui-ipc-app-ring: rgba(255, 255, 255, 0.1);--ui-ipc-tile-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 8px 16px -8px rgba(0, 0, 0, 0.18);--ui-ipc-ring: rgba(0, 0, 0, 0.06);--ui-ipc-accent: rgba(0, 96, 226, 0.765);--ui-ipc-focus: rgba(0, 96, 226, 0.35);--ui-ipc-switch-off: rgba(0, 0, 0, 0.1);--ui-ipc-ok: #1a9a52;--ui-ipc-ok-fill: rgba(26, 154, 82, 0.08);--ui-ipc-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-ipc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;display: grid;width: 100%;max-width: 660px;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;font-weight: 400;color: var(--ui-ipc-ink);-webkit-font-smoothing: antialiased}.ui-ipc *, .ui-ipc *::before, .ui-ipc *::after{box-sizing: border-box}:where(.ui-ipc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-ipc) svg{display: block;flex: none}.ui-ipc button:focus-visible{outline: 2px solid var(--ui-ipc-focus);outline-offset: 1px}.ui-ipc__card{display: grid;grid-template-rows: auto minmax(0, 1fr) auto;min-height: 0;overflow: hidden;border-radius: 10px;background: var(--ui-ipc-card);box-shadow: var(--ui-ipc-shadow)}.ui-ipc__top{display: flex;align-items: center;gap: 6px;height: 48px;padding: 0 12px 0 10px;border-bottom: 0.5px solid var(--ui-ipc-line)}.ui-ipc__back{display: grid;place-items: center;flex: none;width: 28px;height: 28px;border-radius: 6px;color: var(--ui-ipc-icon);transition: background-color 140ms ease, color 140ms ease}.ui-ipc__back:hover{background: var(--ui-ipc-wash);color: var(--ui-ipc-ink)}.ui-ipc__back svg, .ui-ipc__lens{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-ipc__lens{margin: 0 4px 0 6px;color: var(--ui-ipc-icon)}.ui-ipc__search{display: flex;flex: 1;align-items: center;gap: 8px;min-width: 0;height: 100%;cursor: text}.ui-ipc__crumb{flex: none;padding: 2px 6px;border-radius: 5px;background: var(--ui-ipc-fill);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-ipc-text)}.ui-ipc__search input{flex: 1;min-width: 0;height: 20px;padding: 0;border: 0;background: transparent;font: inherit;font-size: 13px;line-height: 20px;color: var(--ui-ipc-ink);caret-color: var(--ui-ipc-accent);outline: none}.ui-ipc__search input::placeholder{color: var(--ui-ipc-faint)}.ui-ipc__search input:focus-visible{outline: none}.ui-ipc kbd{display: inline-grid;place-items: center;flex: none;min-width: 20px;height: 20px;padding: 0 5px;border-radius: 5px;box-shadow: inset 0 0 0 0.5px var(--ui-ipc-line-strong);font-family: inherit;font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-ipc-muted)}.ui-ipc__body{display: grid;grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);height: 356px;min-height: 0}.ui-ipc__list{position: relative;min-height: 0;padding: 0 4px 4px;overflow-y: auto;border-right: 0.5px solid var(--ui-ipc-line);scrollbar-width: thin}.ui-ipc__group{display: flex;flex-direction: column}.ui-ipc__label{padding: 10px 8px 4px;font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-ipc-muted)}.ui-ipc__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 6px;background: var(--ui-ipc-fill);transition: transform 90ms ease-out, height 90ms ease-out}.ui-ipc__item{position: relative;display: flex;flex: none;align-items: center;gap: 10px;height: 44px;padding: 0 8px;border-radius: 6px;text-align: left;transition: background-color 140ms ease}.ui-ipc__item:not([aria-selected="true"]):hover{background: var(--ui-ipc-wash)}.ui-ipc__name{display: grid;min-width: 0}.ui-ipc__name b{overflow: hidden;font-weight: 400;line-height: 20px;color: var(--ui-ipc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ipc__name small{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-ipc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ipc__logo{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 6px;box-shadow: 0 0 0 0.5px var(--ui-ipc-mark-ring), 0 1px 1px -1px rgba(0, 0, 0, 0.1)}:is(.ui-ipc__logo, .ui-ipc__tile--brand)[data-tone="brand"]{--ui-ipc-mark-ring: rgba(0, 0, 0, 0.06);background: var(--ui-ipc-brand);color: #fff}:is(.ui-ipc__logo, .ui-ipc__tile--brand)[data-tone="light"]{--ui-ipc-mark-ring: var(--ui-ipc-light-ring);background: var(--ui-ipc-light);color: var(--ui-ipc-strong)}:is(.ui-ipc__logo, .ui-ipc__tile--brand)[data-tone="ink"]{--ui-ipc-mark-ring: rgba(0, 0, 0, 0.06);background: var(--ui-ipc-ink-tile);color: var(--ui-ipc-ink-mark)}.ui-ipc__logo svg{width: 13px;height: 13px}.ui-ipc__empty{margin: 0;padding: 14px 8px;font-size: 13px;color: var(--ui-ipc-muted)}.ui-ipc__empty b{font-weight: 500;color: var(--ui-ipc-ink)}.ui-ipc__empty--detail{display: grid;place-items: center;height: 100%}.ui-ipc__detail{display: flex;flex-direction: column;min-height: 0;overflow: hidden}.ui-ipc__art{position: relative;display: flex;flex: none;align-items: center;justify-content: center;gap: 16px;height: 104px;overflow: hidden;margin: 8px 8px 0;border-radius: 8px;background: var(--ui-ipc-soft);box-shadow: inset 0 0 0 0.5px var(--ui-ipc-line)}.ui-ipc__rings{position: absolute;inset: 0;display: grid;place-items: center;pointer-events: none}.ui-ipc__rings i{position: absolute;width: calc(90px + var(--n, 0) * 56px);aspect-ratio: 1;border-radius: 50%;box-shadow: inset 0 0 0 0.5px var(--ui-ipc-ring)}.ui-ipc__rings i:nth-child(2){--n: 1}.ui-ipc__rings i:nth-child(3){--n: 2}.ui-ipc__rings i:nth-child(4){opacity: 0;box-shadow: inset 0 0 0 0.5px var(--ui-ipc-accent)}.ui-ipc[data-on] .ui-ipc__rings i:nth-child(4){animation: ui-ipc-spread 2.8s var(--ui-ipc-ease) infinite}.ui-ipc[data-paused] .ui-ipc__rings i{animation-play-state: paused}@keyframes ui-ipc-spread{0%{opacity: 0.5;transform: scale(0.9)}100%{opacity: 0;transform: scale(2.6)}}.ui-ipc__tile{position: relative;z-index: 1;display: grid;place-items: center;width: 44px;height: 44px;border-radius: 10px;box-shadow: 0 0 0 0.5px var(--ui-ipc-mark-ring), var(--ui-ipc-tile-shadow)}.ui-ipc__tile svg{width: 20px;height: 20px}.ui-ipc__tile--app{background: var(--ui-ipc-app);box-shadow: inset 0 0 0 0.5px var(--ui-ipc-app-ring), var(--ui-ipc-tile-shadow);color: var(--ui-ipc-app-ink)}.ui-ipc__tile--app .ui-ipc__mark{width: 18px;height: 18px}.ui-ipc[data-swapped] .ui-ipc__tile--brand{animation: ui-ipc-swap 420ms var(--ui-ipc-ease)}@keyframes ui-ipc-swap{from{opacity: 0;transform: translateY(6px) scale(0.92);filter: blur(4px)}to{opacity: 1;transform: none;filter: none}}.ui-ipc__link{position: relative;z-index: 1;display: grid;place-items: center;width: 28px;height: 28px;color: var(--ui-ipc-faint);transition: color 300ms ease, transform 500ms var(--ui-ipc-ease)}.ui-ipc__link svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-ipc[data-on] .ui-ipc__link{color: var(--ui-ipc-accent);transform: rotate(180deg)}.ui-ipc__info{display: flex;flex: 1;flex-direction: column;padding: 12px 16px 16px}.ui-ipc[data-swapped] .ui-ipc__info{animation: ui-ipc-in 360ms var(--ui-ipc-ease)}@keyframes ui-ipc-in{from{opacity: 0;transform: translateY(4px)}to{opacity: 1;transform: none}}.ui-ipc__title{display: flex;align-items: flex-start;justify-content: space-between;gap: 12px}.ui-ipc__title > div{display: grid;min-width: 0}.ui-ipc__title h3{margin: 0;overflow: hidden;font-size: 15px;font-weight: 500;line-height: 24px;color: var(--ui-ipc-strong);white-space: nowrap;text-overflow: ellipsis}.ui-ipc__domain{display: flex;align-items: center;gap: 6px;min-width: 0;font-size: 12px;line-height: 16px;color: var(--ui-ipc-muted)}.ui-ipc__state{padding: 0 5px;border-radius: 5px;background: var(--ui-ipc-ok-fill);font-size: 11px;font-weight: 500;line-height: 16px;color: var(--ui-ipc-ok);animation: ui-ipc-in 260ms var(--ui-ipc-ease)}.ui-ipc__desc{margin: 8px 0 0;font-size: 13px;line-height: 20px;color: var(--ui-ipc-text)}.ui-ipc__features{display: grid;gap: 2px;margin: 10px 0 0;padding: 0;list-style: none}.ui-ipc__features li{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 13px;line-height: 20px;color: var(--ui-ipc-text)}.ui-ipc__features svg{width: 16px;height: 16px;fill: none;stroke: var(--ui-ipc-icon);stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round}.ui-ipc__switch{position: relative;flex: none;width: 32px;height: 18px;margin-top: 3px;border-radius: 6px;background: var(--ui-ipc-switch-off);transition: background-color 220ms ease}.ui-ipc__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 14px;height: 14px;border-radius: 4px;background: #fff;box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.18);transition: transform 260ms var(--ui-ipc-ease)}.ui-ipc__switch[aria-checked="true"]{background: var(--ui-ipc-accent)}.ui-ipc__switch[aria-checked="true"]::after{transform: translateX(14px)}.ui-ipc__explore{display: inline-flex;align-items: center;align-self: flex-start;gap: 4px;height: 28px;margin-top: auto;padding: 0 6px 0 10px;border-radius: 6px;background: var(--ui-ipc-card);box-shadow: var(--ui-ipc-shadow);font-size: 13px;font-weight: 500;line-height: 20px;color: var(--ui-ipc-strong);transition: background-color 140ms ease}.ui-ipc__info > :nth-last-child(2){margin-bottom: 16px}.ui-ipc__explore svg{width: 16px;height: 16px;fill: none;stroke: var(--ui-ipc-icon);stroke-width: 1.1;stroke-linecap: round;stroke-linejoin: round;transition: transform 200ms var(--ui-ipc-ease)}.ui-ipc__explore:hover{background: linear-gradient(var(--ui-ipc-wash), var(--ui-ipc-wash)), var(--ui-ipc-card)}.ui-ipc__explore:hover svg{transform: translateX(2px)}.ui-ipc__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 40px;padding: 0 12px;border-top: 0.5px solid var(--ui-ipc-line);font-size: 12px;line-height: 16px;color: var(--ui-ipc-muted)}.ui-ipc__count{display: inline-flex;align-items: center;gap: 8px;min-width: 0;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-ipc__count i{width: 6px;height: 6px;border-radius: 2px;background: var(--ui-ipc-ok)}.ui-ipc__hints{display: inline-flex;align-items: center;gap: 2px;white-space: nowrap}.ui-ipc__hints span{margin: 0 8px 0 4px}.ui-ipc__hints span:last-child{margin-right: 0}@container (max-width: 560px){.ui-ipc__body{grid-template-columns: minmax(0, 1fr);height: auto}.ui-ipc__list{max-height: 196px;border-right: 0;border-bottom: 0.5px solid var(--ui-ipc-line)}.ui-ipc__art{height: 88px}.ui-ipc__detail{overflow: visible}.ui-ipc__info > :nth-last-child(2){margin-bottom: 14px}.ui-ipc__hints{display: none}}@container (max-width: 400px){.ui-ipc__features{display: none}.ui-ipc__kbd{display: none}}@media (hover: none) and (pointer: coarse){.ui-ipc__top{height: 52px}.ui-ipc__back{width: 32px;height: 32px}.ui-ipc__item{height: 48px}.ui-ipc__explore{height: 32px}}@media (prefers-reduced-motion: reduce){.ui-ipc *, .ui-ipc *::before, .ui-ipc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ipc{--ui-ipc-card: #1c1c1e;--ui-ipc-strong: #ffffff;--ui-ipc-ink: rgba(255, 255, 255, 0.9);--ui-ipc-text: rgba(255, 255, 255, 0.62);--ui-ipc-muted: rgba(255, 255, 255, 0.46);--ui-ipc-faint: rgba(255, 255, 255, 0.3);--ui-ipc-icon: rgba(255, 255, 255, 0.5);--ui-ipc-line: rgba(255, 255, 255, 0.08);--ui-ipc-line-strong: rgba(255, 255, 255, 0.12);--ui-ipc-wash: rgba(255, 255, 255, 0.04);--ui-ipc-soft: rgba(255, 255, 255, 0.02);--ui-ipc-fill: rgba(255, 255, 255, 0.08);--ui-ipc-light: #2a2a2d;--ui-ipc-light-ring: rgba(255, 255, 255, 0.12);--ui-ipc-ink-tile: #f4f4f5;--ui-ipc-ink-mark: #111113;--ui-ipc-app: #000000;--ui-ipc-app-ink: #ffffff;--ui-ipc-app-ring: rgba(255, 255, 255, 0.14);--ui-ipc-tile-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 10px 16px -8px rgba(0, 0, 0, 0.6);--ui-ipc-ring: rgba(255, 255, 255, 0.07);--ui-ipc-accent: #4d8dff;--ui-ipc-focus: rgba(77, 141, 255, 0.5);--ui-ipc-switch-off: rgba(255, 255, 255, 0.14);--ui-ipc-ok: #3ec27a;--ui-ipc-ok-fill: rgba(62, 194, 122, 0.14);--ui-ipc-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}`;
function HComponent() {
  return <div className={`picker-demo`}><P1Component onBack={() => {}} /></div>;
}
export { HComponent as default };
