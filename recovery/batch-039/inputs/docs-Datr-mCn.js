var e={requirements:[`React 19`],whenToUse:[`Button labels and status text that change in place – Save → Saving… → Saved`,`Panels, tips or steps that swap content of different lengths without a jump in the layout`],whenNotToUse:[`Navigating between pages or large views – use a route transition instead`,`Content that updates many times per second, like counters or live prices`],usage:`import { BlurCrossfade } from "@/components/ui/blur-crossfade";

export function SaveButton({ status }) {
  return (
    <button>
      <BlurCrossfade id={status} morph="both" as="span">
        {status === "saving" ? "Saving…" : status === "saved" ? "Saved" : "Save"}
      </BlurCrossfade>
    </button>
  );
}

// Height glides between messages of different length
<BlurCrossfade id={step}>
  <p>{steps[step]}</p>
</BlurCrossfade>`,props:[{name:`id`,type:`string | number`,description:`Key of the current content – changing it starts the swap`},{name:`children`,type:`ReactNode`,description:`Content for the current id`},{name:`duration`,type:`number`,default:`420`,description:`Length of the swap and the size morph in ms`},{name:`blur`,type:`number`,default:`10`,description:`Blur in px at the outer ends of the fade`},{name:`morph`,type:`"height" | "both" | "none"`,default:`"height"`,description:`Which sides glide to the new size; both makes the box as wide as its content`},{name:`as`,type:`"div" | "span"`,default:`"div"`,description:`Root element – span inside buttons and other inline content`},{name:`className`,type:`string`,description:`Extra class on the box`}],accessibility:[`Only the current content is exposed – the leaving copy is aria-hidden and inert`,`Put aria-live on a surrounding element when the change should be announced, e.g. a status button`],motion:[`The old content blurs, fades and grows slightly as the new one sharpens in from 98 %, while the box glides to the new height (and width)`,`Quick changes stay clean: only the latest leaving copy and the current content are ever on screen`,`Reduced motion swaps instantly`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`,`Content keeps its natural size; the box only clips during the swap, so shadows and focus rings show otherwise`],related:[`text-reveal`,`gradient-text`]};export{e as docs};