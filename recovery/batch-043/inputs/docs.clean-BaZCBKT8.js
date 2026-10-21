var e={requirements:[`React 19`],whenToUse:[`The model switch in the toolbar of a chat composer – the place people decide between fast, cheap and smart`,`Products with a few models that differ in speed, quality and price, and settings that ride along with the model: thinking, effort, web search`,`When people should see what a choice costs them before they send – the last row of the menu shows first-token time and price`],whenNotToUse:[`Dozens of models from many providers – use Combobox or Command Menu, where people can type to search`,`A setting page that lists every parameter – this menu is for the two or three things people change between messages`,`A plain two-way choice – Segmented Control says it with less`],usage:`import { ModelPicker } from "@/components/ui/model-picker-clean";

const models = [
  { id: "opus", name: "Opus 5.5", description: "Hardest problems", speed: 2, quality: 5, cost: 5, latencyMs: 2100, pricePerM: 25 },
  { id: "sonnet", name: "Sonnet 5.5", description: "Everyday work", speed: 4, quality: 4, cost: 3, latencyMs: 900, pricePerM: 15 },
  { id: "haiku", name: "Haiku 5.5", description: "Quick and light", speed: 5, quality: 3, cost: 1, latencyMs: 400, pricePerM: 4 },
];

export function ComposerToolbar() {
  return (
    <div className="toolbar">
      <ModelPicker models={models} defaultValue="sonnet" />
      <SendButton />
    </div>
  );
}`,examples:[{title:`Wired to your chat settings`,code:`const [settings, setSettings] = useState({ model: "sonnet", thinking: false, effort: "medium", web: true });

<ModelPicker
  models={models}
  value={settings.model}
  onChange={(model) => setSettings((s) => ({ ...s, model }))}
  thinking={settings.thinking}
  onThinkingChange={(thinking) => setSettings((s) => ({ ...s, thinking }))}
  effort={settings.effort}
  onEffortChange={(effort) => setSettings((s) => ({ ...s, effort }))}
  webSearch={settings.web}
  onWebSearchChange={(web) => setSettings((s) => ({ ...s, web }))}
/>`},{title:`Composer at the bottom, with a router option`,code:`<ModelPicker
  side="top"
  align="end"
  models={[
    { id: "auto", name: "Auto", description: "Picks a model per message", icon: <SparkleIcon /> },
    ...models,
  ]}
  defaultValue="auto"
/>`}],props:[{name:`models`,type:`PickerModel[]`,description:`{ id, name, description?, icon?, speed?, quality?, cost?, latencyMs?, pricePerM? } – strengths go from 1 to 5 (cost 5 is the most expensive); leave all three out for a router like Auto and the row says "Varies"`},{name:`value`,type:`string`,description:`Id of the chosen model (controlled)`},{name:`defaultValue`,type:`string`,default:`first model`,description:`Chosen model when uncontrolled`},{name:`onChange`,type:`(id: string) => void`,description:`Called with the picked model's id`},{name:`thinking`,type:`boolean`,description:`Extended thinking switch (controlled)`},{name:`defaultThinking`,type:`boolean`,default:`false`,description:`Starting state of the thinking switch`},{name:`onThinkingChange`,type:`(on: boolean) => void`,description:`Called when the thinking switch flips`},{name:`webSearch`,type:`boolean`,description:`Web search switch (controlled)`},{name:`defaultWebSearch`,type:`boolean`,default:`false`,description:`Starting state of the web search switch`},{name:`onWebSearchChange`,type:`(on: boolean) => void`,description:`Called when the web search switch flips`},{name:`effort`,type:`"low" | "medium" | "high"`,description:`Thinking effort (controlled) – the control only shows while thinking is on`},{name:`defaultEffort`,type:`"low" | "medium" | "high"`,default:`"medium"`,description:`Starting effort`},{name:`onEffortChange`,type:`(effort) => void`,description:`Called with the new effort`},{name:`open`,type:`boolean`,description:`Controlled open state of the menu`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`Starts open when uncontrolled`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Called when the menu opens or closes`},{name:`align`,type:`"start" | "end"`,default:`"start"`,description:`Which edge of the trigger the menu lines up with`},{name:`side`,type:`"bottom" | "top"`,default:`"bottom"`,description:`Opens below or above the trigger – use top for a composer at the bottom of the screen`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Enter`,`Space`,`↓`],description:`On the trigger: opens the menu and moves into the model list`},{keys:[`↑`,`↓`,`Home`,`End`],description:`In the list: moves between models – the last row follows`},{keys:[`Enter`,`Space`],description:`In the list: picks the model and closes the menu`},{keys:[`Tab`],description:`From the list to Extended thinking, Effort and Web search`},{keys:[`←`,`→`],description:`In Effort: Low, Medium, High`},{keys:[`Esc`],description:`Closes the menu and returns to the trigger`}],accessibility:[`The trigger has aria-haspopup, aria-expanded and aria-controls; its name carries the model and whether thinking is on`,`Models are a listbox with options and aria-activedescendant, so focus stays on the list while the arrows move`,`Thinking and web search are switches, Effort is a radio group with one tab stop`,`While closed the menu is inert; the last row's numbers are announced politely once, not while they roll`],motion:[`The menu opens with a short fade and a soft scale from the corner of the trigger, and closes the same way`,`Pointing at a model fills its bars segment by segment and steps the other rows back`,`Effort unfolds under the thinking switch; its soft fill slides to the chosen level, and the lit row's bars fill in blue`,`First-token time and price roll to their new values; the model name in the trigger crossfades and a small bulb unfolds next to it while thinking is on`,`With prefers-reduced-motion everything switches without movement`],responsive:[`The menu is 320px wide and never wider than the screen minus 32px. Below 300px the row glyphs and key hints give way and the bars move closer`,`Touch screens: taller trigger, rows, switches and effort buttons; the key hints are hidden`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`The menu is positioned absolutely from the trigger – keep the composer's overflow visible, or the menu gets cut`,`Pick side="top" when the composer sits at the bottom of the viewport, and align="end" when the trigger is on the right`,`latencyMs is the time without thinking; the last row multiplies it by the effort (×1.6, ×2.5, ×4) while thinking is on`,`Keep descriptions to two or three words – the row has room for one short line next to the bars`],related:[`chat-composer`,`combobox`,`segmented-control`,`context-window`]};export{e as docs};