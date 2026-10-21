import { o } from "./site-D86YA7B9.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as t_1 } from "./ArrowRight01Icon-JBN5MFu9.js";
import { H, M } from "./index-CxCSU7QX.js";
const a = t();
export function DocsPage({ page }) {
    let { Content } = page;
    return <div className={`doc`}><article className={`doc__article`}><nav className={`breadcrumb`} aria-label={`Breadcrumb`}><M to={`/docs`}>{`Docs`}</M><H icon={t_1} size={13}/><span aria-current={`page`}>{page.title}</span></nav><header className={`doc__header`}><div><h1 className={`doc__title`}>{page.title}</h1><p className={`doc__lead`}>{page.description}</p></div></header>{<Content/>}<footer className={`doc__footer`}><span>{o.name}{` · Docs`}</span></footer></article></div>;
}
