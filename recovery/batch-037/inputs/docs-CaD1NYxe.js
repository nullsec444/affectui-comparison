var e={requirements:[`React 19`],whenToUse:[`Onboarding checklists that guide new users through their first steps`,`Any short list of tasks where progress should feel rewarding`],whenNotToUse:[`Long task lists – past roughly eight steps the card gets hard to scan`,`Long step labels – each step stays on one line and cuts off with an ellipsis`,`Steps that must happen in a fixed order – use a stepper that locks the next step`],usage:`import { ProgressTracker } from "@/components/ui/progress-tracker";

const steps = [
  { id: "tools", label: "Connect your imported tools" },
  { id: "notify", label: "Turn on notifications" },
  { id: "project", label: "Create a project", done: true },
];

export function Onboarding() {
  return <ProgressTracker title="Getting started" steps={steps} onChange={save} />;
}`,examples:[{title:`Plays by itself`,code:`<ProgressTracker steps={steps} autoPlay interval={2500} />`},{title:`With app icons`,code:`<ProgressTracker
  steps={[
    { id: "updates", label: "Catch up on blockers", icon: <SlackLogo /> },
    { id: "notes", label: "Summarize priorities", icon: <NotionLogo /> },
  ]}
/>`}],props:[{name:`steps`,type:`ProgressStep[]`,description:`Each step has an id, a label, an optional done flag and icon`},{name:`title`,type:`string`,default:`"Getting started"`,description:`Heading above the bar`},{name:`autoPlay`,type:`boolean`,default:`false`,description:`Ticks the open steps one by one and starts over – stops when someone clicks or types`},{name:`interval`,type:`number`,default:`2200`,description:`Pause between two automatic steps, in ms`},{name:`onChange`,type:`(steps: ProgressStep[]) => void`,description:`Called with every step and its state`},{name:`className`,type:`string`,description:`Extra class on the card`}],keyboard:[{keys:[`Tab`],description:`Move between the steps`},{keys:[`Space`,`Enter`],description:`Tick or untick the focused step`}],accessibility:[`Each step is a checkbox with aria-checked; the bar is a progressbar with the count as text`,`Any click or key press stops the automatic play, so it never fights the user`],motion:[`The bar fills smoothly and a light sweeps across it each time a step is done`,`The check ring fills and pops, then the tick draws itself`,`A line strikes through the label, line by line, while it fades to gray`,`On mount the card settles in and the rows fade up one after another`,`Steps stay in place so nothing jumps; the counter rolls to the new number`,`With prefers-reduced-motion every change is instant`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`button`,`chat-composer`]};export{e as docs};