var e={requirements:[`React 19`],whenToUse:[`The usage or billing page of a SaaS or AI product – credits, tokens, minutes or messages per billing cycle`,`Showing what the usage went into (chat, search, images, API) next to plan limits like seats and storage`,`Nudging people to top up or upgrade right where they see they're running out`],whenNotToUse:[`Long-term trends over many months – a line chart like the KPI Chart reads better`,`More than about five categories – the bar gets too thin; group the small ones into "Other"`],usage:`import { useState } from "react";
import { UsageMeter } from "@/components/ui/usage-meter-clean";

export function Usage({ usage }) {
  const [period, setPeriod] = useState("month");
  const data = usage[period]; // { used, limits, daily } per period from your API

  return (
    <UsageMeter
      title="Acme AI"
      plan="Pro plan"
      total={10000}
      used={data.used} // [{ label: "Chat", value: 3980 }, { label: "Search", value: 1640 }, …]
      limits={[
        { label: "Seats", used: 8, total: 10 },
        { label: "Storage", used: 3.2, total: 5, unit: "GB" },
        { label: "Projects", used: 12, total: null }, // unlimited
      ]}
      daily={data.daily} // [{ label: "Oct 1", value: 312 }, …, { label: "Oct 17", value: null }]
      periods={[
        { id: "month", label: "This month" },
        { id: "last", label: "Last month" },
        { id: "7d", label: "7 days" },
      ]}
      period={period}
      onPeriodChange={setPeriod}
      resetAt="2026-10-17"
      onUpgrade={(state) => (state === "ok" ? openPlans() : openTopUp())}
    />
  );
}`,props:[{name:`total`,type:`number`,description:`Credits included in the plan – the bar's full width`},{name:`used`,type:`{ label: string; value: number; color?: string }[]`,description:`What the credits went into in the shown period. Without colors the parts get tints of the accent blue, then a gray; each label keeps its shade`},{name:`limits`,type:`{ label; used; total?: number | null; unit?; decimals? }[]`,description:`Thin meters below, e.g. seats and storage. Leave total out (or null) for unlimited – shown as "of ∞" on a striped track`},{name:`periods`,type:`{ id: string; label: string }[]`,description:`Options of the period switch; no switch when left out`},{name:`period`,type:`string`,description:`Controlled period id – pass the matching used, limits and daily with it`},{name:`defaultPeriod`,type:`string`,description:`Starting period when uncontrolled; defaults to the first option`},{name:`onPeriodChange`,type:`(id: string) => void`,description:`Called when a period is picked`},{name:`resetAt`,type:`Date | string | number`,description:`When the credits reset – shown as "Resets in 9 days", the date on hover`},{name:`daily`,type:`{ label: string; value: number | null }[]`,description:`Usage per day for the sparkline; null for days still to come, shown as flat stubs`},{name:`onUpgrade`,type:`(state: "ok" | "warn" | "limit") => void`,description:`Called by the button with the current state`},{name:`title`,type:`string`,default:`"Usage"`,description:`Card title, e.g. the workspace or product name`},{name:`plan`,type:`string`,description:`Plan name in front of the reset date`},{name:`unit`,type:`string`,default:`"credits"`,description:`Unit of the main meter`},{name:`warnAt`,type:`number`,default:`0.8`,description:`Share (0–1) from which the meter and the limits warn`},{name:`upgradeLabel`,type:`string`,default:`"Upgrade"`,description:`Button text while there is room left (a white button with a hairline shadow)`},{name:`topUpLabel`,type:`string`,default:`"Add credits"`,description:`Button text near and at the limit (a dark button)`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Reaches the period switch, the bar, the sparkline and the button`},{keys:[`←`,`→`],description:`Switch: picks the previous or next period. Bar: steps through the categories. Sparkline: steps through the days`},{keys:[`Esc`],description:`Hides the category or day readout`}],accessibility:[`A section labelled by its title; the bar and every limit are meters with their value as text ("7,420 of 10,000 credits")`,`The period switch is a radio group with a roving tab stop`,`The category tooltip is a polite live region, so stepping through the bar reads each part`,`Running low and reaching the limit are announced in a polite live region; amber and red are never the only signal – the text says it too`],motion:[`On first view the bar fills from zero and every number counts up, in one frame loop so numbers and widths stay in step`,`Switching periods: the light fill glides to the new option, numbers roll to their new values and the parts glide to their new widths`,`A category that drops out shrinks to nothing on the bar while its legend row folds away; the card glides to its new height`,`Hovering a part dims the others and highlights its legend row; the tooltip glides along the bar`,`Near the limit the share tag turns amber (red at the limit), a small dot pops in and the button turns dark with a gentle nudge, its width gliding to the new label`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Fills its container up to 460px; at 400px and below the switch gets its own row and the limits stack as rows`,`Works down to 320px wide; long labels end with an ellipsis, numbers and units never split`,`Touch: tapping a part or a legend row shows its value, targets grow to 36–38px`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`kpi-chart`,`breakdown-chart`,`billing-schedule`,`progress-tracker`]};export{e as docs};