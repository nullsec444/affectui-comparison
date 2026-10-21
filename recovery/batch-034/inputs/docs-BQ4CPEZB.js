var e={requirements:[`React 19`],whenToUse:[`Sprint and project boards in a product, with tasks moving through a few statuses`,`Internal tools where people sort work by dragging it`],whenNotToUse:[`Hundreds of tasks per column – add virtualisation and server-side filters`,`Touch-first apps – native drag and drop needs a mouse; offer the detail panel's status buttons instead`],usage:`import { TaskBoard } from "@/components/ui/task-board";

export function Sprint({ tasks }) {
  return (
    <TaskBoard
      tasks={tasks}
      statuses={statuses}
      labels={labels}
      people={people}
      path={["Northwind", "Launch", "Sprint 12"]}
      onChange={save}
    />
  );
}`,props:[{name:`tasks`,type:`Task[]`,description:`key, title, status, priority (0–4), estimate, labels, assignee, dueIn, subtasks, pullRequest, created`},{name:`statuses`,type:`TaskStatus[]`,description:`Columns in order: id, label and icon`},{name:`labels`,type:`TaskLabel[]`,description:`id, label and color – used on cards, in the filter and in the panel`},{name:`people`,type:`TaskPerson[]`,description:`id, name and avatar for assignees`},{name:`path`,type:`string[]`,description:`Breadcrumb above the board`},{name:`onChange`,type:`(tasks: Task[]) => void`,description:`Called with all tasks after every move, edit, add or delete`}],keyboard:[{keys:[`Tab`],description:`Move through the toolbar, columns and cards`},{keys:[`Enter`,`Space`],description:`Open the focused card in the detail panel`},{keys:[`Escape`],description:`Close the detail panel or cancel a new task`}],accessibility:[`Every card is focusable and opens a panel where status, priority, labels and assignee are plain toggle buttons – no dragging needed`,`The star, compact view and filter are pressed or checked toggles; the breadcrumb marks the current page`],motion:[`Cards fade in, a blue line shows where a dragged card lands, the panel slides in from the right`,`Reduced motion turns these off`],responsive:[`Columns keep a minimum width and the board scrolls sideways on narrow screens`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};