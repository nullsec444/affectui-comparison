var e={requirements:[`React 19`],whenToUse:[`A feature section that shows how tasks, clients and roles connect in your product`,`Landing pages where a short, self-playing scene explains a workflow better than text`],whenNotToUse:[`Interactive product UI – the scene is a decorative illustration, not working components`,`Very small spaces below ~320px wide, where the card text gets hard to read`],usage:`import { ProjectFlow } from "@/components/ui/project-flow";

export function FeatureSection() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto" }}>
      <ProjectFlow />
    </section>
  );
}`,examples:[{title:`Dark mode and your page color`,code:`<ProjectFlow theme="dark" className="hero-scene" />

/* globals.css – the soft edges fade into your page color */
body .ui-pf.hero-scene { --ui-pf-fade: #0c0c0d; --ui-pf-dot: #1f1f21; }`},{title:`Replay the animation`,code:`const [run, setRun] = useState(0);

<ProjectFlow key={run} />
<button onClick={() => setRun((n) => n + 1)}>Replay</button>`}],props:[{name:`theme`,type:`"light" | "dark"`,default:`"light"`,description:`Light or dark cards`},{name:`label`,type:`string`,default:`"A client task branching…"`,description:`Accessible description of the scene`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`The scene is exposed as one image with a descriptive label; its inner elements are hidden from screen readers`],motion:[`The cards build up one after another: client, task, notes, roles and team, connected by lines that draw in`,`A hand drags the subtask cards in, drops them with a small bounce and lets go`,`With prefers-reduced-motion everything appears in its final state right away`],responsive:[`The background is transparent; set --ui-pf-fade to your page color so the soft edges blend in`,`Drawn on a 2312 × 1644 artboard and scaled to the width of its container, so the layout never reflows`]};export{e as docs};