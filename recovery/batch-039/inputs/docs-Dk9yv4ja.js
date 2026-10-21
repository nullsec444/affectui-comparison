var e={requirements:[`React 19`],whenToUse:[`Dashboards or agents that need a quick yes / no from a person before they continue`,`Approvals, renewals and alerts that can be answered with one click`],whenNotToUse:[`Decisions that need a form or a longer explanation – link to a page instead`,`Plain notifications without an answer – use a toast or an activity list`],usage:`import { DecisionInbox } from "@/components/ui/decision-inbox";

const decisions = [
  {
    id: "renewal",
    title: "Renew Figma for the design team?",
    detail: "12 seats · $1,800 per year · renews in 5 days",
    primary: "Renew",
    secondary: "Change seats",
  },
];

export function Inbox() {
  return <DecisionInbox decisions={decisions} onDecide={(d, answer) => save(d.id, answer)} />;
}`,props:[{name:`decisions`,type:`Decision[]`,description:`id, title, detail, primary and secondary answer, and collapsed to start folded`},{name:`onDecide`,type:`(decision, answer: "primary" | "secondary") => void`,description:`Called when someone picks an answer`},{name:`className`,type:`string`,description:`Extra class on the tray`}],keyboard:[{keys:[`Tab`],description:`Move between the answers and folded decisions`},{keys:[`Enter`,`Space`],description:`Pick an answer or open a folded decision`}],accessibility:[`The heading with the count is a live region, so the new count is announced`,`The confirmation after an answer is a status message; folded-away rows are inert`],motion:[`An answer turns into a green confirmation, then the row folds away and the next folded decision opens`,`Reduced motion skips the folding`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`change-summary`,`setup-guide`]};export{e as docs};