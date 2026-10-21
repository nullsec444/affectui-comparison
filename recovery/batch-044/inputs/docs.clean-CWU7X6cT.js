var e={requirements:[`React 19`],whenToUse:[`Onboarding with several areas, each made of a few steps that build on each other`,`A floating guide in a dashboard corner that people can fold away and come back to`],whenNotToUse:[`A single short list of steps – the Progress Tracker is lighter`,`Steps that can be done in any order – here each task unlocks the next`],usage:`import { SetupGuide } from "@/components/ui/setup-guide-clean";

const groups = [
  {
    id: "workspace",
    title: "Set up your workspace",
    tasks: [
      { id: "name", label: "Choose a workspace name" },
      { id: "invite", label: "Invite your teammates" },
    ],
  },
  { id: "verify", title: "Verify your account", tasks: [{ id: "email", label: "Confirm your email", done: true }] },
];

export function Onboarding() {
  return <SetupGuide groups={groups} onChange={save} onClose={hideGuide} />;
}`,props:[{name:`groups`,type:`SetupGroup[]`,description:`Groups with an id, a title and tasks; each task has an id, a label and an optional done flag`},{name:`title`,type:`string`,default:`"Setup guide"`,description:`Heading above the bar`},{name:`onEdit`,type:`() => void`,description:`Shows an Edit link in the header`},{name:`onClose`,type:`() => void`,description:`Shows a close button in the header`},{name:`onChange`,type:`(done: string[]) => void`,description:`Called with the ids of all finished tasks`},{name:`className`,type:`string`,description:`Extra class on the panel`}],keyboard:[{keys:[`Tab`],description:`Move between groups, tasks and header buttons`},{keys:[`Enter`,`Space`],description:`Open or close a group, tick or untick a task`}],accessibility:[`Group headers are buttons with aria-expanded, the closed panels are inert`,`Tasks that are not unlocked yet are disabled; finished ones are pressed toggle buttons`,`The bar is a progressbar with its percentage as value`],motion:[`Groups unfold smoothly; a finished group is struck through, folds away and opens the next one`,`Reduced motion turns the transitions off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`progress-tracker`,`profile-menu`]};export{e as docs};