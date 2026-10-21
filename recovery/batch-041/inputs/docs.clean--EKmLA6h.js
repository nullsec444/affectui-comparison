var e={requirements:[`React 19`],whenToUse:[`Chat and agent products where people should see what the model currently has in mind – and why answers get slow, expensive or forgetful`,`Next to a composer or in a session panel, to clean up before the window is full: drop files, compact the conversation`,`Debug and admin views that explain a request: how much went to the system prompt, tools, files and history`],whenNotToUse:[`Billing and plan usage over a month – use Usage Meter`,`A plain "72% used" – a single progress bar says that with less`,`More than about six parts – group the small ones, the cells need colors people can tell apart`],usage:`import { ContextWindow } from "@/components/ui/context-window-clean";

export function SessionContext() {
  return (
    <ContextWindow
      limit={200_000}
      model="claude-sonnet-5-5"
      parts={[
        { id: "system", label: "System prompt", tokens: 4200, locked: true },
        { id: "tools", label: "Tools", tokens: 12800 },
        {
          id: "files",
          label: "Files",
          items: [
            { id: "schema", label: "schema.prisma", tokens: 9400 },
            { id: "billing", label: "billing.ts", tokens: 21300 },
          ],
        },
        { id: "chat", label: "Conversation", tokens: 108600, compact: true },
      ]}
    />
  );
}`,examples:[{title:`Wired to your session`,code:`const { parts, limit, detach, compact } = useSession();

<ContextWindow
  parts={parts}
  limit={limit}
  onRemoveItem={(partId, itemId) => detach(itemId)}
  // The cells shimmer until the promise settles; then pass the smaller part back in
  onCompact={() => compact()}
  action={{ label: "New chat", onClick: startOver }}
/>`},{title:`Warn earlier, coarser field`,code:`<ContextWindow parts={parts} limit={1_000_000} warnAt={0.6} cells={120} columns={24} title="Context" />`}],props:[{name:`parts`,type:`ContextPart[]`,description:`{ id, label, tokens?, items?, locked?, compact?, color? } – they fill the field in this order`},{name:`limit`,type:`number`,description:`Size of the context window in tokens`},{name:`title`,type:`string`,default:`"Context window"`,description:`Heading of the card`},{name:`model`,type:`string`,description:`Small tag in the head, e.g. the model name`},{name:`modelIcon`,type:`ReactNode`,description:`Logo in front of the model name, shown at 12px`},{name:`onRemoveItem`,type:`(partId: string, itemId: string) => void`,description:`Called when an item is removed. With it the card shows exactly what you pass; without it the removal lives inside the card`},{name:`onCompact`,type:`(partId: string) => void | Promise<void>`,description:`Called when Compact is pressed; the cells shimmer until the promise settles. Without it the part shrinks on its own to its compact share`},{name:`action`,type:`{ label: string; onClick: () => void }`,description:`A secondary button in the card's last row, e.g. New chat`},{name:`warnAt`,type:`number`,default:`0.8`,description:`Share of the limit from which the percentage tag turns amber and the last row says how much is left; from 0.95 the window counts as full`},{name:`cells`,type:`number`,default:`216`,description:`Number of cells in the field`},{name:`columns`,type:`number`,default:`36`,description:`Cells per row`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Through the parts that can be opened, the Compact button, the items' remove buttons and the action`},{keys:[`Enter`,`Space`],description:`Opens or closes a part with items, presses Compact or removes an item`}],accessibility:[`A group named by its title; the rolling number is aria-hidden and screen readers get the final "used of limit" in one sentence`,`The field of cells is decorative – every number it shows is in the list below`,`Parts with items are buttons with aria-expanded; closed lists are inert, remove buttons are named after their item`,`The caption in the last row is announced politely: compacting, how much was saved, and how much is left once the window fills up`],motion:[`Any change sweeps through the field cell by cell, so removing a file empties its cells from left to right and everything behind it moves up`,`Compacting makes the part's cells shimmer in a lighter wave while the caption shimmers "Compacting…"; then most of them clear, the numbers roll down and the button morphs into a green check on a light green fill with "Compacted" for a moment and then fades away – it only comes back once the part has grown again`,`Hovering a part (row or cells) fades the other cells and rolls the big number to that part`,`Items unfold in place; a removed item folds away before it goes`,`With prefers-reduced-motion everything switches without movement`],responsive:[`Fills its container up to 360px. Below 310px the field puts fewer cells in a row so they stay readable, the model tag shortens and Compact keeps only its icon`,`Touch screens: taller rows and buttons`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`A part with items takes its tokens from the items' sum – leave tokens out there`,`One cell stands for limit / cells tokens; any part with tokens gets at least one cell so it never disappears`,`The card does not count tokens – pass the numbers your provider or tokenizer returns`],related:[`usage-meter`,`tool-call-card`,`chat-composer`]};export{e as docs};