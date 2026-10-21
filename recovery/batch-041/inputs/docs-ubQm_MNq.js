var e={requirements:[`React 19`],whenToUse:[`Feature cards about model choice, routing or "bring your own model"`,`Landing pages that list supported AI providers in a calm, moving way`],whenNotToUse:[`A real model picker – the wheel can be spun, but it doesn't report a choice`,`Long lists – the drum shows about seven rows at a time`],usage:`import { ModelWheel } from "@/components/ui/model-wheel";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 360 }}>
      <ModelWheel />
      <h3>Every model, one workspace</h3>
    </article>
  );
}`,examples:[{title:`Slower, with your own models`,code:`import { ModelWheel, defaultModels } from "@/components/ui/model-wheel";

<ModelWheel
  hold={2400}
  models={defaultModels.filter((m) => m.name !== "Llama")}
/>`}],props:[{name:`models`,type:`{ name, viewBox, color, d }[]`,default:`8 popular models`,description:`Models on the wheel, each with its brand mark as one SVG path; use at least 7 to keep the drum full`},{name:`hold`,type:`number`,default:`1500`,description:`Milliseconds a model stays in the middle`},{name:`label`,type:`string`,default:`"AI models on a turning wheel…"`,description:`Accessible description of the illustration`},{name:`className`,type:`string`,description:`Extra class on the root`}],accessibility:[`Exposed as one image with a descriptive label; the rows are hidden from screen readers`,`Hovering holds the wheel, so nothing moves while someone reads it`,`Spinning by hand also works with touch; the automatic turn starts again after a short pause`],motion:[`The rows sit on a cylinder: towards the top and bottom they tilt away, shrink and fade`,`Every turn runs on a soft spring: the drum gathers speed, overshoots a touch and locks onto the next model like a magnet`,`Grab the wheel and drag it up or down to spin it; a quick flick keeps it turning, then it snaps onto the closest model`,`The wheel turns downwards; the model in the middle sits on a gray fill that grows or shrinks to its name`,`Runs only while on screen; with prefers-reduced-motion it doesn't turn by itself, but can still be spun by hand`],responsive:[`Fixed height of seven rows; the width follows its container`,`Light and dark mode via a .dark class or data-theme="dark"`],aiNotes:[`Brand marks belong to their owners – check you may show them before you ship`],related:[`glow-keyboard`,`chat-composer`]};export{e as docs};