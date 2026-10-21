var e={requirements:[`React 19`],whenToUse:[`Explaining a layered product or platform – each entry is one layer of the stack`,`Feature sections that walk through capabilities one by one, with a visual that follows along`],whenNotToUse:[`More than five layers – the stack and the list are sized for up to five`,`Navigation that changes page content – this is an illustration with its own small state`],usage:`import { LayerStack } from "@/components/ui/layer-stack";

export function PlatformSection() {
  return (
    <section style={{ maxWidth: 640 }}>
      <LayerStack
        items={[
          { title: "Triggered by events", hint: "Webhooks", icon: "bolt" },
          { title: "Grounded in your data", hint: "Context", icon: "database" },
          { title: "Connected to your apps", hint: "APIs", icon: "plug" },
          { title: "Works with any model", hint: "Routing", icon: "spark" },
          { title: "Traced at every step", hint: "Logs", icon: "pulse" },
        ]}
      />
    </section>
  );
}`,props:[{name:`items`,type:`LayerStackItem[]`,default:`five sample layers`,description:`Up to five entries, top layer first – { title, hint?, icon? } with icon one of bolt, database, plug, spark, pulse`},{name:`defaultIndex`,type:`number`,default:`0`,description:`Entry to start on`},{name:`interval`,type:`number`,default:`2600`,description:`Time per entry while it plays on its own, in ms`},{name:`onChange`,type:`(index: number) => void`,description:`Called when the user picks an entry`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],keyboard:[{keys:[`Tab`],description:`Moves focus to the chosen entry`},{keys:[`↑`,`↓`],description:`Picks the previous or next entry`}],accessibility:[`The list is a vertical tablist with real buttons; the chosen entry has aria-selected`,`The stack itself is decorative and hidden from screen readers`],motion:[`The chosen layer and the ones above it glide up to open a gap; its face, edge and icon turn blue and a soft glow fades in beneath it`,`A white card glides behind the chosen entry in the list`,`Steps through the entries on its own and pauses while hovered or focused; after a click or key press it stays put`,`With prefers-reduced-motion it doesn't play on its own and changes happen instantly`],responsive:[`Transparent background, so it sits on any light or dark surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – text and layers are sized in container units`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};