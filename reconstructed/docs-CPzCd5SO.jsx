// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
export const docs = {
  requirements: [`React 19`],
  whenToUse: [`Debugging an agent run: how long each step took, where the time and the money went, which call is slow`, `A run view next to a chat or a log – every LLM call, tool call and sub-agent as a bar on one timeline`, `Live runs, where you want to watch spans start, grow and finish while the agent works`],
  whenNotToUse: [`Who started whom, at a glance – use Agent Tree`, `Several agents side by side over the last half hour – use Agent Lanes`, `One agent's plan as a checklist – use Agent Plan`],
  usage: `import { TraceWaterfall, type TraceSpan } from "@/components/ui/trace-waterfall";

const run: TraceSpan = {
  id: "run", name: "Orchestrator", kind: "agent", status: "running", start: 0,
  input: "Launch the new pricing page",
  children: [
    { id: "plan", name: "Plan the launch", kind: "llm", model: "Opus 5.5", detail: "Opus 5.5", status: "done",
      start: 900, end: 7800, tokensIn: 3240, tokensOut: 880, cost: 0.115 },
    { id: "search", name: "web_search", kind: "tool", detail: "Linear pricing", status: "running", start: 8100 },
  ],
};

export function Run({ startedAt }: { startedAt: number }) {
  // Times are ms from the start of the run; with startedAt the component keeps its own clock while it runs
  return <TraceWaterfall root={run} startedAt={startedAt} />;
}`,
  examples: [{
    title: `Your own clock`,
    code: `// e.g. a replay: pass where you are in the run, in ms
<TraceWaterfall root={run} now={position} />`
  }, {
    title: `Fold finished branches`,
    code: `// Folded spans close up – their calls show as small marks on the parent bar
const [folded, setFolded] = useState<string[]>(["research"]);
<TraceWaterfall root={run} collapsed={folded} onCollapsedChange={setFolded} />`
  }, {
    title: `Open a span from outside`,
    code: `const [open, setOpen] = useState<string | null>(null);
<TraceWaterfall root={run} openId={open} onOpenChange={(id) => setOpen(id)} />`
  }, {
    title: `Credits instead of dollars`,
    code: "<TraceWaterfall root={run} formatCost={(n) => `${Math.round(n * 1000)} credits`} />"
  }],
  props: [{
    name: `root`,
    type: `TraceSpan`,
    description: `{ id, name, kind, status, start, end?, detail?, icon?, model?, tokensIn?, tokensOut?, cost?, input?, output?, error?, children? } – the whole run as a tree, rebuilt as it goes on`
  }, {
    name: `kind`,
    type: `"agent" | "subagent" | "llm" | "tool"`,
    description: `Per span – picks the bar's tint: agents slate, LLM calls violet, tool calls teal; failed spans are red`
  }, {
    name: `status`,
    type: `"running" | "done" | "failed"`,
    description: `Per span – a running span has no end yet and grows into "now"`
  }, {
    name: `start / end`,
    type: `number`,
    description: `Per span, in ms from the start of the run; leave end out while it runs`
  }, {
    name: `detail`,
    type: `string`,
    description: `Per span – a few muted words after the name, e.g. the model or the query`
  }, {
    name: `icon`,
    type: `ReactNode`,
    description: `Per span – a small mark, e.g. the model maker's or the tool's logo; defaults to a swatch in the kind's color`
  }, {
    name: `cost / tokensIn / tokensOut`,
    type: `number`,
    description: `Per span, its own – agents add up their children, so don't pre-sum`
  }, {
    name: `input / output / error`,
    type: `string`,
    description: `Per span – short previews shown in the details window`
  }, {
    name: `now`,
    type: `number`,
    description: `The clock in ms from the start of the run – e.g. a faster one for a demo or a replay`
  }, {
    name: `startedAt`,
    type: `number`,
    description: `When the run started (epoch ms) – without now, the component ticks its own clock from here while a span runs`
  }, {
    name: `collapsed / defaultCollapsed`,
    type: `string[]`,
    default: `[]`,
    description: `Ids of folded spans, controlled or uncontrolled`
  }, {
    name: `onCollapsedChange`,
    type: `(collapsed: string[]) => void`,
    description: `A span was folded or opened`
  }, {
    name: `openId / defaultOpenId`,
    type: `string | null`,
    default: `null`,
    description: `The span whose details are open, controlled or uncontrolled`
  }, {
    name: `onOpenChange`,
    type: `(id: string | null, span?: TraceSpan) => void`,
    description: `Details opened (with the span) or closed`
  }, {
    name: `markSlowest`,
    type: `boolean`,
    default: `true`,
    description: `Marks the slowest finished LLM or tool call with a small "Slowest" tag`
  }, {
    name: `minRange`,
    type: `number`,
    default: `10000`,
    description: `The shortest time the axis shows, in ms – it grows in round steps as the run gets longer`
  }, {
    name: `formatCost`,
    type: `(amount: number) => string`,
    default: `dollars, e.g. "$0.042"`,
    description: `Formats every cost`
  }, {
    name: `title`,
    type: `string`,
    default: `"Trace"`,
    description: `Heading of the bar; next to it the root's input (or name)`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root`
  }],
  keyboard: [{
    keys: [`Tab`],
    description: `Moves into the waterfall (one row is in the tab order) and on to the details window`
  }, {
    keys: [`ArrowUp`, `ArrowDown`],
    description: `Moves between the rows; Home and End jump to the first and the last`
  }, {
    keys: [`ArrowRight`],
    description: `Opens a folded span, or moves to its first child`
  }, {
    keys: [`ArrowLeft`],
    description: `Folds an open span, or moves to its parent`
  }, {
    keys: [`Enter`, `Space`],
    description: `Opens or closes the details of the focused span`
  }, {
    keys: [`Esc`],
    description: `Closes the details`
  }],
  accessibility: [`The rows are a tree: every span is a treeitem with its level, labelled with name, kind, status, duration and cost; aria-expanded on spans with children`, `Roving focus – only one row is in the tab order, so the waterfall is a single stop`, `The details window is a dialog labelled with the span's name, with a close button; Esc closes it and returns focus to the row`, `The run's state in the bar (Live, Done, Failed) is announced politely when it changes`, `Ticks, grid lines and the "now" line are decoration and hidden from assistive tech`],
  motion: [`New spans slide in as rows and their bars grow from their start point`, `A running span grows live, with a sheen and a soft glow at its leading edge; a "now" line moves across`, `When the run outgrows the axis, the range glides to the next round value – ticks fade in and out where they are, bars rescale with it, nothing jumps`, `Folding closes the children's rows smoothly and shows their calls as small marks on the parent bar; the chevron turns`, `Rows that leave – a new run, removed data – close up a beat after each other, bottom first`, `The details window opens with a soft scale and fade from the row's bar, and closes the same way`, `Numbers that still climb – the duration, cost and tokens of a live run – carry a light shimmer`, `With prefers-reduced-motion everything appears at once`],
  responsive: [`Built on a container query: wide, the span tree sits on the left and the timeline on the right`, `Under 560px each row stacks – name, duration and cost on one line, the bar across the whole width under it; the numbers wrap to three columns`, `Under 360px the muted detail after each name drops out, so names keep their room`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],
  aiNotes: [`Pass the whole tree every time something changes – ids keep rows in place, new ids slide in and grow`, `start and end are ms from the run's start, not timestamps – subtract the run's start time from your span times`, `cost and tokens are the span's own; agents and sub-agents add their children up`, `A retried call is a new span with its own id – keep the failed one, it tells the story`, `For a live run pass startedAt (the component ticks) or drive now yourself; once nothing runs, the axis settles on the last end`, `Colors are variables on .ui-tw, e.g. --ui-tw-llm-bg / --ui-tw-llm-edge for LLM calls`, `The chevron, warning and close icons are Hugeicons Free (MIT) – keep the credit comment when you copy the file`],
  related: [`agent-tree`, `agent-lanes`, `agent-plan`, `agent-steering`]
};
