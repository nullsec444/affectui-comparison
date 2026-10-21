var e={requirements:[`React 19`],whenToUse:[`A “Loved by” section on a landing or pricing page with eight or more quotes`,`Social proof that should feel alive without asking for attention – it runs slowly and stops the moment someone reads`],whenNotToUse:[`Two or three quotes – show them side by side; a loop of three repeats too obviously`,`A single hero quote or a case study – it deserves a static, larger layout`,`Reviews people need to search or filter – use a list or grid`],usage:`import { TestimonialWall } from "@/components/ui/testimonial-wall";

const items = [
  {
    quote: "We replaced three half-finished internal kits with it in a sprint.",
    name: "Lena Hartmann",
    role: "Design Lead",
    company: "Fieldnote",
    avatar: "/avatars/lena.jpg",
    rating: 5,
  },
  {
    quote: "The motion is the part nobody notices – which is exactly the point.",
    name: "Jonas Weber",
    role: "Staff Engineer",
    company: "Ledgerline",
    verified: true,
  },
  // … at least two quotes per column, ideally four or more
];

export function Testimonials() {
  return (
    <section className="py-24">
      <p className="text-center text-sm text-neutral-500">Testimonials</p>
      <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">Loved by product teams</h2>
      <TestimonialWall items={items} speed={26} className="[--ui-tw-height:640px]" />
    </section>
  );
}`,props:[{name:`items`,type:`{ quote, name, role?, company?, avatar?, rating?, verified? }[]`,description:`The quotes. avatar is a photo URL – without one the initials sit on a soft gray circle. rating (1–5) adds a small gray star row, verified a gray check beside the name`},{name:`columns`,type:`1 | 2 | 3`,default:`3`,description:`Most columns on a wide container; the wall itself drops to 2 below 740px and 1 below 480px of its own width`},{name:`speed`,type:`number`,default:`28`,description:`Pixels per second of the first column; the others run about 15 % slower and faster, in alternating directions`},{name:`pauseOnHover`,type:`boolean`,default:`true`,description:`Ease the hovered column to a stop and wind it back up on leave. Keyboard focus always stops its column`},{name:`label`,type:`string`,default:`"What customers say"`,description:`Accessible name of the wall`},{name:`className`,type:`string`,description:`Extra class on the wrapper. Set the height with --ui-tw-height (600px by default) and the edge fade with --ui-tw-fade (96px)`}],keyboard:[{keys:[`Tab`],description:`Moves through the quotes; the focused card's column stops and the card is nudged into view`},{keys:[`Shift`,`Tab`],description:`Moves back; leaving the wall lets the columns run again`}],accessibility:[`A labelled region; every quote is a figure with a blockquote and a figcaption, read out once – the copies that make the loop are aria-hidden and inert`,`Keyboard focus stops the column, so a card never runs away from the focus ring`,`Hover, focus and press-and-hold all stop the motion, which covers the WCAG pause requirement for moving content`,`Star ratings are an image with a text label (“Rated 5 out of 5”), the check is labelled “Verified customer”`,`Reduced motion shows every quote once in a static masonry grid`],motion:[`Each column repeats a measured set and wraps by exactly its height – no gap, no jump`,`Columns alternate up and down at slightly different speeds and start at different points, so rows never line up`,`One requestAnimationFrame loop eases a velocity per column: hover slows it to a stop over about a third of a second, leaving winds it back up`,`Drag a column with the mouse to scrub it; letting go flings it with inertia before it settles back into its own pace`,`The hovered card lifts 3px with a soft shadow while the rest of the wall dims a little`,`Only runs while on screen; top and bottom edges fade out with a mask`],responsive:[`Columns follow the wall's own width (3 / 2 / 1), so it works in a sidebar as well as full width`,`One column on phones with 15px quotes; names win over role and company when space is tight – down to 320px without overflow`,`Touch: vertical swipes keep scrolling the page (no scroll trap); pressing and holding a column pauses it to read`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],performance:[`Transforms only – no layout work per frame, and no React re-renders while it runs`,`Avatars load lazily; the loop pauses while the wall is off screen`],related:[`logo-marquee`,`tilt-card`,`text-reveal`]};export{e as docs};