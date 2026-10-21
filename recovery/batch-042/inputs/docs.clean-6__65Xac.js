var e={requirements:[`React 19`],whenToUse:[`Showing what an AI assistant is doing while it works: searching, reading, drafting`,`Long-running tasks where a visible trail of steps builds trust and keeps people waiting patiently`],whenNotToUse:[`Short waits under a second – a simple spinner or shimmer is enough`,`Exact progress you can measure – use a progress bar with a percentage`],usage:`import { ThinkingState } from "@/components/ui/thinking-state-clean";

const steps = [
  { kind: "search", label: "Searched", sources: [{ label: "acme.com" }, { label: "+4 more" }] },
  { kind: "step", label: "Reading the sources" },
  { kind: "step", label: "Drafting your answer" },
];

export function AssistantMessage() {
  return <ThinkingState steps={steps} onDone={(seconds) => console.log(seconds)} />;
}`,examples:[{title:`Sources with icons`,code:`<ThinkingState
  steps={[
    {
      kind: "search",
      label: "Searched",
      activeLabel: "Searching the web",
      sources: [
        { label: "Slack – #launch", icon: <SlackIcon />, href: "https://slack.com" },
        { label: "Notion – Roadmap", icon: <NotionIcon />, href: "https://notion.so", tooltip: "Team roadmap" },
      ],
      moreSources: [{ label: "Wikipedia – Product launch", href: "https://en.wikipedia.org" }],
    },
    { kind: "step", label: "Comparing the results" },
  ]}
/>`},{title:`Faster, looping preview`,code:`<ThinkingState steps={steps} stepMs={800} loop />`}],props:[{name:`steps`,type:`ThinkingStep[]`,description:`Searches and thinking steps, revealed in order. Sources can link out (href) and show a tooltip; moreSources hide behind a “+N more” chip`},{name:`doneLabel`,type:`string`,default:`"Finished thinking"`,description:`Label of the final row`},{name:`stepMs`,type:`number`,default:`1300`,description:`Pause between two steps, in ms`},{name:`loop`,type:`boolean`,default:`false`,description:`Starts over a few seconds after finishing`},{name:`onDone`,type:`(seconds: number) => void`,description:`Called once all steps are done`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Enter`,`Space`],description:`Collapse or expand the steps (on the header), or show more sources`},{keys:[`Tab`],description:`Move through the source links – each shows its tooltip on focus`}],accessibility:[`The header row is a button with aria-expanded, so the steps can be collapsed – only the steps fold away, the header always stays in view`,`New steps are announced politely through an aria-live list`],responsive:[`One white card that works from about 300px wide; tighter padding on narrow containers and taller tap targets on touch screens`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],motion:[`The header row shimmers with a live timer while a 3×3 pixel mark twinkles, then turns into “Worked for …”`,`Steps fade up one after another and the timeline grows down to each new node`,`Sources pop in one by one as small white chips; the active step gets a pulsing blue pixel and a shimmer`,`Hovering a source shows its link in a small white tooltip; “+N more” reveals the remaining sources`,`At the end a blue check pops in and draws its tick`,`With prefers-reduced-motion everything appears without animation`],related:[`chat-composer`,`progress-tracker`]};export{e as docs};