var e={requirements:[`React 19`],whenToUse:[`Agent products where several tasks run in the background and people come back to see what finished, what failed and what waits for them`,`A home screen or dashboard that collects approvals from many runs in one calm board, instead of one modal per agent`,`Job queues in general – imports, syncs, evaluations – where each job has a short description, a short history and one next step`],whenNotToUse:[`One single approval in the flow of a chat – use Approval Card`,`The plan of one run, step by step – use Agent Plan; for a single tool call use Tool Call Card`,`Hundreds of jobs – the board is for a few dozen at most; page or search a bigger queue in a table`],usage:`import { AgentInbox } from "@/components/ui/agent-inbox";

export function Tasks() {
  return (
    <AgentInbox
      tasks={[
        {
          id: "migrate",
          title: "Migrate users table",
          description: "Split users into accounts and profiles. The dry run on staging passed.",
          agent: "Opus 5.5",
          status: "waiting",
          startedAt: Date.now() - 6 * 60_000,
          tools: 14,
          sources: 9,
          steps: [
            { label: "Dry run on staging – no errors", time: "2m ago" },
            { label: "Wants to run it on production", time: "1m ago" },
          ],
        },
        { id: "notes", title: "Release notes v2.4", agent: "Sonnet 5.5", status: "running", startedAt: Date.now() - 80_000 },
        { id: "digest", title: "Weekly metrics digest", agent: "Haiku 5.5", status: "done", elapsed: 252_000 },
      ]}
    />
  );
}`,examples:[{title:`Wired to your task queue`,code:`const { tasks, approve, reject, retry } = useAgentTasks();

<AgentInbox
  tasks={tasks}
  // With handlers the board shows exactly what you pass – update the status and the card moves on its own
  onApprove={(task) => approve(task.id)}
  onReject={(task) => reject(task.id)}
  onRetry={(task) => retry(task.id)}
  onOpen={(task) => router.push(\`/tasks/\${task.id}\`)}
  title="Background tasks"
/>`},{title:`As a list in a side panel`,code:`// Narrow containers get the list on their own – or pick it
<AgentInbox tasks={initialTasks} defaultView="list" />`}],props:[{name:`tasks`,type:`AgentTask[]`,description:`{ id, title, description?, agent, status, startedAt?, elapsed?, tools?, sources?, steps? } – status is "running", "waiting", "done" or "failed"; steps are { label, time? }, oldest first`},{name:`onApprove`,type:`(task: AgentTask) => void`,description:`Approve on a waiting task. Without it the task turns running inside the board`},{name:`onReject`,type:`(task: AgentTask) => void`,description:`Reject on a waiting task. Without it the task turns failed`},{name:`onRetry`,type:`(task: AgentTask) => void`,description:`Retry on a failed task. Without it the task runs again and its clock starts over`},{name:`onOpen`,type:`(task: AgentTask) => void`,description:`Shows an Open button on running and done tasks`},{name:`title`,type:`string`,default:`"Agent inbox"`,description:`Heading on the left of the bar, after "Agents /"`},{name:`action`,type:`{ label: string; onClick: () => void }`,description:`A button in the bar next to the layout switch, e.g. New task`},{name:`view`,type:`"board" | "list"`,description:`Controlled layout`},{name:`defaultView`,type:`"board" | "list"`,default:`"board"`,description:`Starting layout when uncontrolled`},{name:`onViewChange`,type:`(view: AgentInboxView) => void`,description:`Called when Board or List is picked`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Through the layout switch, the cards and the buttons inside an open card`},{keys:[`Enter`,`Space`],description:`Opens or closes a card, presses Approve, Reject, Retry or Open`},{keys:[`Esc`],description:`Closes the open card and puts focus back on it`}],accessibility:[`Each column is a labeled section; each card is a button with aria-expanded, and a closed card's details are inert`,`Board / List is a radio group`,`A polite live region says how many tasks need you and how many run`],motion:[`Running tasks spin a small ring and their clock ticks every second`,`When a status changes, the card shows its new state in place first, then glides over to its new column (FLIP)`,`Cards open in place to the last steps as a tiny timeline and the buttons for what you can do now`,`With prefers-reduced-motion everything switches without movement`],responsive:[`Three columns from about 620px; narrower containers always get the list and hide the switch – it works down to 300px`,`Touch screens: taller cards and buttons`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Pass startedAt for running and waiting tasks so the clock ticks; pass elapsed for finished ones`,`Columns: Needs you holds waiting and failed tasks, then Running and Done; inside a column the cards keep your order`,`Keep the description to one or two sentences on what the task is about or where it stands – it is clamped to two lines`,`With a handler the board never changes a status by itself – update the task in your state and the card follows`],related:[`approval-card`,`agent-plan`,`tool-call-card`,`decision-inbox`]};export{e as docs};