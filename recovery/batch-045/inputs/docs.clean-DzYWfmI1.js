var e={requirements:[`React 19`],whenToUse:[`A few announcements or notices in a corner of an app – releases, maintenance, invites`,`Toast-style messages that stay until someone dismisses them`],whenNotToUse:[`Messages that need an answer before people continue – use a dialog`,`Many notifications at once – past three or four, use an inbox or activity list`],usage:`import { NotificationStack } from "@/components/ui/notification-stack-clean";

const notices = [
  {
    id: "maintenance",
    badge: "Notice",
    title: "Scheduled maintenance",
    text: "We'll be offline on Sunday from 02:00 to 03:00 UTC.",
    action: { label: "View status", href: "/status", external: true },
    pattern: "grid",
  },
];

export function Notices() {
  return <NotificationStack notices={notices} onDismiss={(n) => markRead(n.id)} />;
}`,props:[{name:`notices`,type:`Notice[]`,description:`id, badge, title, text, action ({ label, href, onClick, external }) and pattern`},{name:`onDismiss`,type:`(notice: Notice) => void`,description:`Called when a notice is dismissed with its close button`},{name:`className`,type:`string`,description:`Extra class on the stack`}],keyboard:[{keys:[`Tab`],description:`Move through the front card's buttons`},{keys:[`Enter`,`Space`],description:`Run the action or dismiss the notice`}],accessibility:[`The stack is a labelled region; each card is an article named by its title`,`Only the front card is read out and focusable; the next one takes its place after a dismiss`],motion:[`A dismissed card slides away and the next one moves up into its place; reduced motion turns this off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`decision-inbox`,`tips-panel`]};export{e as docs};