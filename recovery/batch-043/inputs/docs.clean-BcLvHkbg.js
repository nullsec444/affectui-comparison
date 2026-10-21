var e={requirements:[`React 19`],whenToUse:[`An AI rewrote a piece of prose – an email, a paragraph, a product description – and people should approve each edit`,`"Make it shorter", "fix the tone", "fix grammar" actions where most edits are small and scattered through the text`,`Review steps in an agent flow where the result should only change with an explicit yes`],whenNotToUse:[`Code or line-based text – use a line diff with gutters instead`,`Full rewrites where almost every word changes – show the new version next to the old one`,`Live typing suggestions inside an editor – this reviews a finished suggestion, it isn't a text field`],usage:`import { InlineDiff } from "@/components/ui/inline-diff-clean";

export function ReviewRewrite({ draft, rewrite }: { draft: string; rewrite: string }) {
  return (
    <InlineDiff
      label="Suggested by AI · Make it shorter"
      original={draft}
      suggested={rewrite}
      onChange={(text) => saveDraft(text)}
      onDone={(text) => setFinal(text)}
    />
  );
}`,examples:[{title:`Pre-computed changes from your model`,code:`import { InlineDiff, type DiffSegment } from "@/components/ui/inline-diff-clean";

// e.g. the model returns edits instead of a full rewrite
const changes: DiffSegment[] = [
  { type: "equal", text: "Our plan is " },
  { type: "change", remove: "very ", insert: "" },
  { type: "equal", text: "flexible and " },
  { type: "change", remove: "cheap", insert: "affordable" },
  { type: "equal", text: "." },
];

<InlineDiff changes={changes} onDone={(text) => apply(text)} />`},{title:`Your own buttons and the diff helper`,code:`import { useRef } from "react";
import { InlineDiff, diffWords, type InlineDiffHandle } from "@/components/ui/inline-diff-clean";

const diff = useRef<InlineDiffHandle>(null);
const edits = diffWords(original, suggested).filter((s) => s.type === "change").length;

<InlineDiff ref={diff} original={original} suggested={suggested} />
<button onClick={() => diff.current?.acceptAll()}>Apply all {edits} edits</button>
<button onClick={() => diff.current?.undo()}>Undo</button>`}],props:[{name:`original`,type:`string`,default:`""`,description:`The text as it is now`},{name:`suggested`,type:`string`,default:`""`,description:`The text the AI suggests – diffed word by word against original`},{name:`changes`,type:`DiffSegment[]`,description:`Pre-computed segments ({ type: "equal", text } or { type: "change", remove, insert }) instead of original and suggested`},{name:`onChange`,type:`(text: string) => void`,description:`Called on every decision and undo with the text so far – pending changes keep the original words`},{name:`onDone`,type:`(text: string) => void`,description:`Called when the last pending change is decided, with the final text`},{name:`label`,type:`string`,description:`Small line at the top of the card, e.g. "Suggested by AI · Make it shorter"`},{name:`ref`,type:`Ref<InlineDiffHandle>`,description:`highlight(index | null), accept(index), reject(index), acceptAll(), rejectAll(), undo(), reset()`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`,`Shift+Tab`],description:`Move between pending changes`},{keys:[`‹`,`›`],description:`Toolbar arrows: highlight the previous / next pending change (wrapping around) and open its popover`},{keys:[`Y`,`Enter`],description:`Accept the focused change and move to the next one`},{keys:[`N`,`Backspace`],description:`Reject the focused change and move to the next one`},{keys:[`Esc`],description:`Leave the change or clear the arrow highlight`}],accessibility:[`Every pending change is a focusable button labelled like "Suggestion 2 of 4: replace “available” with “live”. Press Y to accept, N to reject"`,`Removed words are a <del>, new words an <ins>; the side that was dropped is hidden from screen readers once decided`,`Each decision, Accept all, Reject all and Undo are announced in a polite live region with the number left`,`After the last decision focus moves to Undo, so the keyboard is never stranded; the hidden toolbar is inert`,`Popover buttons are labelled and keep focus on the change; visible focus rings throughout`,`The prev/next arrows never steal focus: a focused change hands focus to the next one, otherwise the change is highlighted while focus stays on the arrow`,`Deleted words sit on a red tint and are struck, added words on a green one – color is never the only cue (strike-through, <del> and <ins>)`],motion:[`Accepting shrinks the struck words to nothing while the green tint fades and the new words settle into the text`,`Rejecting does the opposite – the new words shrink away, the strike-through and red tint fade`,`The popover fades up above a change and steps quickly from one change to the next`,`The arrows only scroll the page when the next change is out of view (smoothly, or instantly with reduced motion)`,`The toolbar cross-fades into "All changes reviewed" and the check draws itself`,`With prefers-reduced-motion every change happens instantly`],responsive:[`Fills its container; the paragraph wraps freely and changes wrap across lines with their tints`,`The popover stays inside the card horizontally, down to 320px wide`,`In cards narrower than 360px the prev/next arrows step aside; on touch screens the popover buttons grow and drop the key hints`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Pass the user's text as original and the model's rewrite as suggested – diffWords groups adjacent removals and insertions into one change`,`Ask the model for a rewrite that keeps unchanged sentences verbatim; the fewer stray edits, the easier the review`,`Write the result back with onDone (or onChange for drafts); undecided changes keep the original words`,`diffWords is exported, so you can count edits or build the same segments on the server`],related:[`writing-assistant`,`change-summary`,`approval-card`]};export{e as docs};