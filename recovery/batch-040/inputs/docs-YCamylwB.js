var e={requirements:[`React 19`],whenToUse:[`Six to twenty visual items where looking at one at a time is the point – albums, places, products, case studies, templates`,`A showcase row that should feel physical: drag, flick, sideways trackpad scroll`],whenNotToUse:[`Text-heavy slides or many items to compare side by side – use a plain carousel or a grid`,`Large libraries – a grid with a lightbox scales better`],usage:`import { CoverFlow } from "@/components/ui/cover-flow";

export function Albums() {
  return (
    <CoverFlow
      aria-label="New releases"
      items={[
        { id: 1, title: "Low Tide", subtitle: "Mara Lind", image: "/covers/low-tide.jpg" },
        { id: 2, title: "Night Drive", subtitle: "Okto", image: "/covers/night-drive.jpg" },
        { id: 3, title: "Paper Moon", subtitle: "Ilse & June", image: "/covers/paper-moon.jpg" },
      ]}
      onSelect={(item) => openAlbum(item.id)}
    />
  );
}`,examples:[{title:`Portrait cards, own caption`,code:`<CoverFlow
  items={places}
  itemWidth={240}
  itemHeight={320}
  renderCaption={(item) => (
    <>
      <strong>{item.title}</strong>
      <span>{item.subtitle}</span>
    </>
  )}
/>`},{title:`Controlled, with a soft click`,code:`const [index, setIndex] = useState(0);

<CoverFlow items={items} index={index} onIndexChange={setIndex} sound />`}],props:[{name:`items`,type:`CoverFlowItem[]`,description:`{ id, title?, subtitle?, image?, alt?, cover? } – pass an image URL or any ReactNode as cover`},{name:`index`,type:`number`,description:`Controlled front cover – pair with onIndexChange`},{name:`defaultIndex`,type:`number`,default:`middle cover`,description:`Starting cover when uncontrolled`},{name:`onIndexChange`,type:`(index: number) => void`,description:`Called whenever a different cover reaches the front, also while dragging`},{name:`onSelect`,type:`(item, index) => void`,description:`Clicking the front cover or pressing Enter – e.g. open a detail view`},{name:`itemWidth`,type:`number`,default:`280`,description:`Cover width in px – the whole row scales down in narrow containers (to half at most)`},{name:`itemHeight`,type:`number`,default:`280`,description:`Cover height in px`},{name:`angle`,type:`number`,default:`50`,description:`How far the side covers turn away, in degrees`},{name:`reflection`,type:`boolean`,default:`true`,description:`Mirror the covers on the floor`},{name:`caption`,type:`boolean`,default:`true`,description:`Title and subtitle of the front cover`},{name:`renderCaption`,type:`(item, index) => ReactNode`,description:`Replaces the default caption`},{name:`controls`,type:`boolean`,default:`true`,description:`Previous and next buttons beside the caption`},{name:`ticks`,type:`boolean`,default:`true`,description:`Small position ticks under the caption – clicking one jumps there`},{name:`sound`,type:`boolean`,default:`false`,description:`A soft click each time a new cover reaches the front (Web Audio, no file)`},{name:`aria-label`,type:`string`,default:`"Cover flow"`,description:`Names the carousel`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`←`,`→`],description:`Previous or next cover while the row has focus`},{keys:[`Home`,`End`],description:`First or last cover`},{keys:[`↵`],description:`Selects the front cover (calls onSelect)`}],accessibility:[`A region with aria-roledescription="carousel"; each cover is a group with aria-roledescription="slide" and a label like "3 of 10: Alpenglow"`,`Covers away from the front are aria-hidden; the reflections are aria-hidden and inert`,`The caption is a polite live region, so the new front cover is announced`,`Previous / next are real buttons; the ticks are labelled "Show <title>" with aria-current and stay out of the tab order`],motion:[`A spring carries the row: drag 1:1, flick and it travels with your speed, then lands on a cover – a quick flick always moves at least one`,`Sideways trackpad scrolling scrubs the row and settles in the direction of the swipe; vertical scrolling stays with the page`,`Covers turn, recede, scale down and dim with distance; a light sheen sits on the side facing the center and each image drifts inside its frame`,`The ends rubber-band; the caption rises in from the direction of travel`,`With prefers-reduced-motion covers jump into place and the drift is off`],responsive:[`Scales with its container down to half size; touch-action pan-y keeps vertical swipes scrolling the page`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],performance:[`Positions are written straight to transforms each frame; React re-renders only when the front cover changes`,`Covers more than seven places from the front are hidden`],related:[`tilt-card`,`logo-marquee`,`segmented-control`]};export{e as docs};