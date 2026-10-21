var e={requirements:[`React 19`],whenToUse:[`A short recap at the top of a dashboard or a weekly report`,`Explaining in words what changed, next to the charts that show it`],whenNotToUse:[`Exact values people compare over time – use the KPI Chart or a table`,`More than about six metrics – the recap stops being a quick read`],usage:`import { ChangeSummary } from "@/components/ui/change-summary";

const changes = [
  { label: "Active users", change: "Up 6.1% to 18.2K", tone: "good" },
  { label: "Churn", change: "Down to 2.1% from 2.6%", tone: "good", direction: "down" },
  { label: "Support tickets", change: "Up 14% to 312", tone: "bad", direction: "up" },
];

export function Recap() {
  return <ChangeSummary period="This week" changes={changes} />;
}`,props:[{name:`changes`,type:`MetricChange[]`,description:`label, change text, tone (good, bad, neutral) and the arrow direction`},{name:`title`,type:`string`,default:`"What's changed"`,description:`Heading in the gray tray`},{name:`period`,type:`string`,description:`Small text on the right of the heading`},{name:`icon`,type:`ReactNode`,description:`Replaces the icon in front of the heading`},{name:`className`,type:`string`,description:`Extra class on the tray`}],accessibility:[`A description list, so each change is read together with its metric`,`The trend arrow is decorative – the text says what happened`],motion:[`Rows fade in one after another; reduced motion shows them at once`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`kpi-chart`,`decision-inbox`]};export{e as docs};