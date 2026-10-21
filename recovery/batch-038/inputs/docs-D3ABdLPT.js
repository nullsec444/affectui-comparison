var e={requirements:[`React 19`],whenToUse:[`An agent is about to do several things in a row and people should agree to the plan first`,`Long or expensive runs (tool calls, emails, writes) where a wrong order or an extra step costs real time`,`Showing the same plan as it executes – which step is running, how long each took, where it failed`],whenNotToUse:[`A single action that needs a yes or no – use Approval Card`,`Model reasoning without editable steps – use Thinking State`,`A user's own onboarding checklist – use Progress Tracker`],usage:`import { useState } from "react";
import { AgentPlan, type PlanStep } from "@/components/ui/agent-plan";

export function PlanReview({ plan }: { plan: PlanStep[] }) {
  const [steps, setSteps] = useState(plan);
  const [status, setStatus] = useState<"draft" | "running" | "done">("draft");

  return (
    <AgentPlan
      title="Prepare the Q3 board update"
      estimate="~2 min"
      steps={steps}
      status={status}
      onChange={setSteps}
      onRun={(final) => {
        setStatus("running");
        agent.run(final); // stream step updates back into setSteps
      }}
      onCancel={() => agent.discard()}
      onRetry={(id) => agent.retryFrom(id)}
    />
  );
}`,examples:[{title:`Stream step updates while it runs`,code:`// Each agent event patches one step – the component handles spinners, timers and the progress line
agent.on("step", ({ id, state, ms, error }) =>
  setSteps((list) =>
    list.map((s) => (s.id === id ? { ...s, status: state, duration: ms, error } : s)),
  ),
);
agent.on("finish", () => setStatus("done"));`},{title:`Uncontrolled, just read the result`,code:`<AgentPlan
  title="Clean up the CRM"
  defaultSteps={[
    { id: "dupes", title: "Find duplicate contacts", tool: "crm.search" },
    { id: "merge", title: "Merge duplicates", detail: "Keeps the newest email and phone", tool: "crm.merge" },
    { id: "report", title: "Post a summary in #sales", tool: "slack.post" },
  ]}
  onRun={(steps) => startRun(steps)}
/>`}],props:[{name:`steps`,type:`PlanStep[]`,description:`Controlled steps: { id, title, detail?, tool?, status?, duration?, error? }. Pair with onChange`},{name:`defaultSteps`,type:`PlanStep[]`,default:`[]`,description:`Initial steps when uncontrolled – edits are kept inside the component`},{name:`status`,type:`"draft" | "running" | "done"`,default:`"draft"`,description:`Review and edit, executing, or finished. Editing is only possible in draft`},{name:`onChange`,type:`(steps: PlanStep[]) => void`,description:`Every edit during review: rename, remove, reorder, add`},{name:`onRun`,type:`(steps: PlanStep[]) => void`,description:`"Run plan" pressed – gets the steps in their final order. Set status to "running" here. Also shows "Run again" on the tray once done`},{name:`onCancel`,type:`() => void`,description:`Shows a Cancel button next to Run plan`},{name:`onRetry`,type:`(stepId: string) => void`,description:`Shows "Retry from here" under failed steps`},{name:`title`,type:`string`,description:`The goal of the plan, shown as the heading and used as the list's label`},{name:`estimate`,type:`string`,description:`Estimated run time shown in review, e.g. "~2 min"`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Moves between steps, their remove buttons, the Add step field and the actions`},{keys:[`↑`,`↓`],description:`Moves focus to the previous or next step`},{keys:[`Alt`,`↑ / ↓`],description:`Moves the focused step up or down`},{keys:[`Enter`],description:`Renames the focused step; Enter again saves. In Add step: adds the step at the end and keeps the field ready for the next one`},{keys:[`Esc`],description:`Cancels a rename`},{keys:[`Delete`],description:`Removes the focused step`}],accessibility:[`The steps are an ordered list labelled with the plan's title; each step is focusable in review and describes its shortcuts`,`Moves, renames, removals and additions are announced in a polite live region ("Moved 'Draft the board memo' to position 3 of 5")`,`While running, each step carries its status as text, the active one has aria-current="step", and finished or failed steps are announced`,`The drag grip is pointer-only; Alt+arrow keys do the same from the keyboard`,`Icon buttons are labelled, focus rings show on keyboard focus only, and the folded-away Add step is inert while running`],motion:[`Reordering is live: the dragged step follows the pointer, the others slide aside, and everything settles with a FLIP glide – also for keyboard moves and order changes from props`,`Removed steps collapse and the list closes the gap; added steps fade up into place`,`Numbers in a hairline ring turn into a ray spinner, then into a check on a light gray fill that draws itself; the progress line fills segment by segment`,`Add step folds away when the plan starts, and the tray below the card swaps its actions for the run's status – "Running · 2 of 5" with the elapsed time, then "Done in 14s"`,`With prefers-reduced-motion everything switches instantly and the spinner stands still`],responsive:[`Fills its container up to 460px; titles and details wrap, tool chips stay on one line`,`Below 400px the footer hint drops away, below 340px gutters tighten – works down to 320px`,`On touch screens the grip and remove button are always visible`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Give every step a stable id – reorder animations, timers and announcements follow the id, not the index`,`Leave duration out to have it measured from when a step turned active; pass it when your agent reports its own timing`,`On retry, reset the failed step and everything after it to "pending" and keep status "running"`,`Run the steps onRun hands you, not the original proposal – the user may have renamed, removed or reordered them`],related:[`progress-tracker`,`tool-call-card`,`approval-card`,`thinking-state`]};export{e as docs};