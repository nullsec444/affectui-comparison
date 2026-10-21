var e={requirements:[`React 19`],whenToUse:[`Boards, lists and sidebars where many projects or tasks sit next to each other and the details should be one hover away`,`Anything with a short summary and a longer truth behind it – a project, a ticket, a deal, an agent run`,`When opening a separate page or drawer would be too heavy for a quick look and a small edit`],whenNotToUse:[`Long content or forms – open a drawer or a page instead; this card is for a glance and a tick`,`Dense tables – a row that grows on hover pushes everything below it around`,`When the details must stay visible – show the open card as a static layout instead`],usage:`import { ProjectCard } from "@/components/ui/project-card-clean";

export function OnboardingCard() {
  return (
    <ProjectCard
      title="Onboarding flow"
      tasks={[
        { id: "welcome", label: "Welcome screen", done: true, assignee: "Mara" },
        { id: "workspace", label: "Workspace setup", done: true, assignee: "Jonas" },
        { id: "invite", label: "Invite teammates", assignee: "Mara" },
      ]}
      status="progress"
      due="Oct 24"
      members={[{ name: "Mara" }, { name: "Jonas" }]}
      action={{ label: "Open", onClick: () => router.push("/projects/onboarding") }}
    />
  );
}`,examples:[{title:`Saving what people change`,code:`const [project, setProject] = useState(initial);

<ProjectCard
  title={project.title}
  tasks={project.tasks}
  onTasksChange={(tasks) => setProject({ ...project, tasks })}
  status={project.status}
  onStatusChange={(status) => setProject({ ...project, status })}
  members={project.members}
/>`},{title:`Open on click, with your own options`,code:`<ProjectCard
  trigger="click"
  title="Q4 launch"
  tasks={tasks}
  statuses={[
    { id: "draft", label: "Draft", tone: "gray" },
    { id: "live", label: "Live", tone: "green" },
  ]}
  status="draft"
  members={[{ name: "Ada Lovelace", avatar: "/people/ada.jpg" }]}
/>`}],props:[{name:`title`,type:`string`,description:`Name of the project`},{name:`tasks`,type:`ProjectTask[]`,description:`{ id, label, done?, assignee? } – one ring segment and one row each; assignee is a member's name`},{name:`onTasksChange`,type:`(tasks: ProjectTask[]) => void`,description:`Called with the full list after a tick. With it the card shows exactly what you pass; without it the ticks live inside the card`},{name:`status`,type:`string`,default:`first option`,description:`Id of the chosen status`},{name:`statuses`,type:`ProjectOption[]`,default:`To do, In progress, In review, Done`,description:`{ id, label, tone? } – tone is red, amber, green, blue, violet or gray and also picks the icon; icon replaces it`},{name:`onStatusChange`,type:`(id: string) => void`,description:`Called with the picked status`},{name:`due`,type:`string`,description:`Ready-to-show due date, e.g. "Oct 24" – shown as "Due Oct 24"`},{name:`members`,type:`ProjectMember[]`,description:`{ name, avatar? } – the avatars in the head; hovering one shows only that person's subtasks. Initials on a soft color without an image`},{name:`action`,type:`{ label: string; onClick: () => void }`,description:`A dark button in the last row of the open card, e.g. Open`},{name:`hint`,type:`ReactNode`,default:`"2 left" / "All done"`,description:`The line in the last row while nothing is hovered`},{name:`trigger`,type:`"hover" | "click"`,default:`"hover"`,description:`Hover opens under the mouse; taps and the keyboard always toggle`},{name:`open`,type:`boolean`,description:`Controlled open state`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`Starts open when uncontrolled`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Called when the card opens or closes`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Enter`,`Space`],description:`On the card: opens or closes it`},{keys:[`Tab`],description:`Through the status, the people, the subtasks and the action`},{keys:[`Space`],description:`On a subtask: ticks or unticks it. On a person: keeps or releases their filter. On the status: unfolds the options`},{keys:[`Esc`],description:`Closes the status options first, then the card`}],accessibility:[`The head is one button with aria-expanded whose name carries the summary: title, progress, status and due date`,`Subtasks are checkboxes, the people are toggle buttons, the status options are a radio group`,`While the card is closed, everything inside is inert – nothing hidden can be focused or read`,`Focusing a subtask or a person does what hovering does, and the line in the last row is announced politely`],motion:[`Nothing travels: the head stays where it is and the list unfolds below it while it fades in`,`The status options unfold in the same way, in place`,`Hovering a subtask thickens its ring segment and brings in the assignee's avatar; ticking fills the circle, draws the check and turns the segment dark`,`Hovering a person fades everyone else's subtasks and segments`,`The line in the last row swaps with a short rise; the number in the ring pops when it changes`,`With prefers-reduced-motion everything switches without movement`],responsive:[`Fills its container up to 320px. Below 290px the date drops its word ("Oct 24") and the avatars move closer; a long title is cut with an ellipsis and nothing runs under the avatars`,`Touch screens: a tap opens, a tap outside closes, rows and options are taller and the assignee avatars are always visible`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`The card grows downward when it opens – in a list, give it room or lay it over the next items with position absolute in a fixed-height slot`,`A task's assignee must match a member's name exactly – that is what links rows, avatars and the people filter`,`More than about twelve subtasks make the ring segments too small to point at – group them first`],related:[`progress-tracker`,`agent-plan`,`compact-breakdown`]};export{e as docs};