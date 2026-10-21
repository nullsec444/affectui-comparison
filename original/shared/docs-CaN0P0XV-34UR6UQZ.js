import"./chunk-MOQMIKSW.js";var e={requirements:["React 19"],whenToUse:["An agent runs for a while and people notice something it should do differently \u2013 without stopping it","Long runs where a correction is cheaper at the next step than a restart from scratch","Showing which instruction changed which step, so the run stays easy to follow later"],whenNotToUse:["Reviewing a plan before the run starts \u2013 use Agent Plan","Many background runs at a glance \u2013 use Agent Inbox","A single yes or no before the agent acts \u2013 use Approval Card"],usage:`import { useState } from "react";
import { AgentSteering, type SteerNote, type SteerStep } from "@/components/ui/agent-steering";

export function Run({ run }: { run: AgentRun }) {
  const [steps, setSteps] = useState<SteerStep[]>(run.steps);
  const [queue, setQueue] = useState<SteerNote[]>([]);

  // Your agent takes the queue in at the start of each step: move the notes into that step \u2013 the glide is automatic
  run.on("step", (index) => {
    setSteps((list) => list.map((s, i) => (i === index ? { ...s, status: "active", notes: queue.map((n) => ({ ...n, picked: "next" })) } : s)));
    setQueue([]);
  });

  return (
    <AgentSteering
      title="Migrate users table"
      agent="Opus 5.5"
      steps={steps}
      queue={queue}
      startedAt={run.startedAt}
      onQueue={(text) => setQueue((q) => [...q, { id: crypto.randomUUID(), text }])}
      onInterrupt={(text, id) => run.interrupt(text, id)}
      onRemove={(id) => setQueue((q) => q.filter((n) => n.id !== id))}
      onPause={() => run.pause()}
      onResume={() => run.resume()}
    />
  );
}`,examples:[{title:"Apply a note right away",code:`// \u2318\u21B5 in the field, or "Now" on a queued note: attach it to the active step and restart that step
onInterrupt={(text, queuedId) => {
  if (queuedId) setQueue((q) => q.filter((n) => n.id !== queuedId));
  setSteps((list) =>
    list.map((s) => (s.status === "active" ? { ...s, startedAt: Date.now(), notes: [...(s.notes ?? []), { id: queuedId ?? crypto.randomUUID(), text, picked: "now" }] } : s)),
  );
  agent.restartStep(text);
}}`},{title:"A note that changes the step",code:`// Rename the step in the same update that moves the note in \u2013 both show at once
{ ...step, title: "Write migration 0042 for Postgres 16", notes: [{ id, text: "Use Postgres 16 syntax", picked: "next" }] }`}],props:[{name:"title",type:"string",description:"What the agent is working on, shown as the heading"},{name:"agent",type:"string",description:"Name of the agent or model, shown under the title"},{name:"steps",type:"SteerStep[]",description:'The plan: { id, title, status?, duration?, startedAt?, notes? }. status is "done", "active" or "pending"'},{name:"queue",type:"SteerNote[]",description:"Notes waiting for the next step: { id, text }. Move one into a step's notes (same id, picked set) and it glides over"},{name:"status",type:'"running" | "paused" | "done"',default:'"running"',description:"The run. Clocks tick while running; when done the field closes"},{name:"startedAt",type:"number | Date",description:"When the run started \u2013 the header clock ticks from here"},{name:"onQueue",type:"(text: string) => void",description:"\u21B5 in the field: add the note to your queue"},{name:"onInterrupt",type:"(text: string, queuedId?: string) => void",description:'\u2318\u21B5 (Ctrl \u21B5) in the field, or "Now" on a queued note. Shows the shortcut hint and the Now buttons'},{name:"onRemove",type:"(id: string) => void",description:"\u2715 on a queued note"},{name:"onPause / onResume",type:"() => void",description:"Shows Pause while running and Resume while paused"},{name:"draft / onDraftChange",type:"string / (text: string) => void",description:"Controlled field text, e.g. to prefill a suggestion"},{name:"placeholder",type:"string",default:'"Steer the agent\u2026"',description:"Text in the empty field"},{name:"className",type:"string",description:"Extra class on the root"}],keyboard:[{keys:["\u21B5"],description:"Queues the note for the next step"},{keys:["\u2318","\u21B5"],description:"Applies the note to the active step right away (Ctrl \u21B5 on Windows)"},{keys:["Shift","\u21B5"],description:"New line in the note"},{keys:["Esc"],description:"Clears the field"},{keys:["Tab"],description:"Moves to Pause, the queued notes' Now and \u2715 buttons and the send button"}],accessibility:['The plan is an ordered list labelled "Plan"; the active step has aria-current="step"',"Queuing, interrupting and every note the agent picks up are announced in a polite live region",'The field is labelled "Steer the agent" and described by the shortcut hint below it',"Icon buttons have labels: Pause, Resume, Remove \u201C\u2026\u201D, Queue for the next step"],motion:["A note the agent takes in glides from the queue into its step (620 ms) and lights up softly once it lands","The card's height follows its content, so the queue opening and closing never jumps","The active step spins and shimmers; done steps pop their check in","With prefers-reduced-motion everything switches instantly and the shimmer stops"],responsive:["Fills its container up to 460px","Below 380px the padding gets tighter","Touch screens get larger buttons",'Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"'],aiNotes:["The component never runs anything itself: it shows steps and queue as passed and reports onQueue / onInterrupt / onRemove",`To show that the agent took a note in, remove it from queue and add it (same id, picked: "next" or "now") to the step's notes in one update`,"Give each step a startedAt when it becomes active, so its clock is right after re-renders"],related:["agent-plan","agent-inbox","tool-call-card","thinking-state"]};export{e as docs};
