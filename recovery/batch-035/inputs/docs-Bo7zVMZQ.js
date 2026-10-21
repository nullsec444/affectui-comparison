var e={requirements:[`React 19`],whenToUse:[`Settings of an agent product: how much the agent may do without asking`,`Onboarding of a new agent, where people decide how much to trust it before the first run`,`Anywhere a permission level is abstract – the list shows what the level actually means`],whenNotToUse:[`One decision before one action – use Approval Card`,`Turning integrations on and off – use Integration Settings`,`Many independent permissions with no levels – a plain list of switches is clearer`],usage:`import { useState } from "react";
import { AutonomyDial, type AgentAction, type AutonomyLevel } from "@/components/ui/autonomy-dial";

const actions: AgentAction[] = [
  { id: "read", label: "Read files and docs", detail: "Drive · Notion", risk: "safe" },
  { id: "draft", label: "Draft emails", risk: "safe" },
  { id: "send", label: "Send emails", detail: "To customers", risk: "risky" },
  { id: "delete", label: "Delete files", risk: "destructive" },
  { id: "spend", label: "Spend money", detail: "Up to $500", risk: "destructive" },
];

export function AgentPermissions() {
  const [level, setLevel] = useState<AutonomyLevel>(1);
  const [pinned, setPinned] = useState(["spend"]);
  return (
    <AutonomyDial
      title="Sales agent"
      actions={actions}
      level={level}
      onLevelChange={setLevel}
      pinned={pinned}
      onPinnedChange={setPinned}
    />
  );
}`,examples:[{title:`Check an action at run time`,code:`import { asksFirst } from "@/components/ui/autonomy-dial";

// The same rule the dial shows – use it where the agent decides whether to pause
if (asksFirst(action, settings.level, settings.pinned)) await requestApproval(action);
else await run(action);`},{title:`Uncontrolled`,code:`<AutonomyDial actions={actions} defaultLevel={0} defaultPinned={["spend"]} onLevelChange={save} />`}],props:[{name:`actions`,type:`AgentAction[]`,description:`The agent's actions: { id, label, detail?, risk: "safe" | "risky" | "destructive", icon? }`},{name:`level`,type:`0 | 1 | 2`,description:`Controlled level: 0 Always ask, 1 If risky (safe actions run), 2 Full auto`},{name:`defaultLevel`,type:`0 | 1 | 2`,default:`1`,description:`Starting level when uncontrolled`},{name:`onLevelChange`,type:`(level: AutonomyLevel) => void`,description:`Another level was picked`},{name:`pinned`,type:`string[]`,description:`Controlled ids of actions that always ask, whatever the level`},{name:`defaultPinned`,type:`string[]`,default:`[]`,description:`Starting locks when uncontrolled`},{name:`onPinnedChange`,type:`(pinned: string[]) => void`,description:`A lock was set or removed`},{name:`title`,type:`string`,default:`"Agent permissions"`,description:`Heading, e.g. the agent's name`},{name:`subtitle`,type:`string`,default:`"What it may do without asking you"`,description:`Line under the heading`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`←`,`→`],description:`Picks the previous or next level (also ↑ ↓)`},{keys:[`Tab`],description:`Moves from the levels to the locks of the actions`},{keys:[`Space`],description:`Sets or removes the focused lock`}],accessibility:[`The levels are a radio group labelled "Autonomy", described by a sentence on what the chosen level means`,`Both groups are labelled sections; every lock is a toggle button with aria-pressed and a label naming its action`,`Every change is announced politely: the level and how many actions run on their own or ask first`],motion:[`Actions glide to their new group when the level or a lock changes, a beat after each other`,`The card's height follows and the counts roll; a raised white pill glides to the chosen level`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Fills its container up to 400px`,`Below 340px the detail lines are left out and the levels get tighter`,`Without hover (touch) the locks are always visible; touch screens get taller rows`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`asksFirst(action, level, pinned) is exported – use the same rule when the agent runs, so the setting and the behaviour never drift apart`,`Rule: pinned always asks; level 0 asks for everything; level 1 runs only "safe" actions; level 2 runs everything not pinned`,`Only risky and destructive actions carry a small tag right after the name – a warning glyph and the word, as a soft orange or red pill – safe ones stay quiet`,`The risk and lock glyphs are Hugeicons Free (MIT) – keep the credit comment when you copy the file`],related:[`approval-card`,`agent-steering`,`integration-settings`,`agent-plan`]};export{e as docs};