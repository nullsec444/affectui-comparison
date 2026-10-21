var e={requirements:[`React 19`],whenToUse:[`Showcase cards: membership or pricing cards, product shots, featured items`,`A single hero object that should feel tangible on hover`],whenNotToUse:[`Grids of many cards – the motion becomes noise when every card tilts`,`Cards full of controls or text to read – the moving surface makes them harder to use`],usage:`import { TiltCard } from "@/components/ui/tilt-card";

export function MembershipCard() {
  return (
    <TiltCard maxTilt={10} scale={1.02}>
      <div className="membership">
        <span>affectUI Pro</span>
        <span>•••• 4821</span>
      </div>
    </TiltCard>
  );
}`,props:[{name:`children`,type:`ReactNode`,description:`The card's content – it fills the tilting surface`},{name:`maxTilt`,type:`number`,default:`10`,description:`Maximum tilt in degrees`},{name:`glare`,type:`boolean`,default:`true`,description:`Show a soft glare that follows the pointer`},{name:`scale`,type:`number`,default:`1.02`,description:`Scale while the pointer is over the card`},{name:`perspective`,type:`number`,default:`900`,description:`Perspective distance in px – smaller is more dramatic`},{name:`className`,type:`string`,description:`Extra class on the wrapper; set --ui-tc-radius to match your card's corners`}],accessibility:[`Purely visual: the tilt adds no roles or tab stops, and the glare is aria-hidden`,`Keyboard focus on anything inside the card lifts it slightly, so focus is visible in the motion too`],motion:[`Pointer moves are batched with requestAnimationFrame and written to CSS variables; only transform and opacity animate`,`On leave the card springs back to rest with a soft overshoot`,`Touch pointers don't tilt`,`Reduced motion: no tilt or glare, only the shadow changes`],responsive:[`Sizes to its content; the demo card shrinks to the available width`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};