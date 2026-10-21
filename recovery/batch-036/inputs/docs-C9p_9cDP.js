var e={requirements:[`React 19`],whenToUse:[`Any action a user triggers: submit a form, send a message, open a dialog`,`Async actions that take a moment – the loading state keeps the label readable while it works`],whenNotToUse:[`Navigation to another page – use a link so it can be opened in a new tab`,`Switching between views – a segmented control or tabs show the current state`],usage:`import { Button } from "@/components/ui/button";

export function Actions() {
  return (
    <>
      <Button variant="ghost">Cancel</Button>
      <Button>Save changes</Button>
    </>
  );
}`,examples:[{title:`Destructive`,code:`<Button variant="destructive" icon={<TrashIcon />} onClick={remove}>
  Delete
</Button>`},{title:`Loading`,code:`<Button variant="secondary" loading={isSaving} onClick={save}>
  Request approval
</Button>`},{title:`With icons`,code:`<Button iconRight={<ArrowUpIcon />}>Send</Button>
<Button variant="ghost" size="sm" icon={<PlusIcon />} aria-label="Add" />`}],props:[{name:`variant`,type:`"primary" | "secondary" | "ghost" | "destructive"`,default:`"primary"`,description:`Dark filled, white with an outline, text only, or red for deleting`},{name:`size`,type:`"sm" | "md" | "lg"`,default:`"md"`,description:`32, 40 or 48px high`},{name:`loading`,type:`boolean`,default:`false`,description:`Swaps the left icon for a spinner, shimmers the label, sets aria-busy and ignores clicks`},{name:`icon`,type:`ReactNode`,description:`Icon before the label; without children the button becomes square`},{name:`iconRight`,type:`ReactNode`,description:`Icon after the label`},{name:`...props`,type:`button attributes`,description:`Everything a native button takes, including ref, type and disabled`}],keyboard:[{keys:[`Enter`,`Space`],description:`Activate the button`}],accessibility:[`A native button element, so focus, keyboard and form submission work as expected`,`While loading it stays focusable and announces aria-busy instead of becoming disabled`,`Icon-only buttons need an aria-label – the icon itself is hidden from screen readers`],motion:[`Pressing scales the button to 97%`,`Loading swaps the left icon for a spinner and sweeps a band across the label`,`When label or icon change, the width glides to the new size and the new content fades in from a soft blur`,`With prefers-reduced-motion the sweep stops and changes are instant`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`chat-composer`]};export{e as docs};