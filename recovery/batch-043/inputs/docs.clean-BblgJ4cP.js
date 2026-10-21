var e={requirements:[`React 19`],whenToUse:[`An agent is about to do something hard to undo – send email, delete files, spend money, deploy – and a person should say yes first`,`Human-in-the-loop tool calls in a chat or an agent run log, one card per pending call`,`Requests that should expire on their own when nobody answers`],whenNotToUse:[`Many pending requests at once that people triage in bulk – use Decision Inbox`,`Harmless, reversible actions – just do them and offer undo`,`Destructive actions the user triggered themselves – a regular confirm dialog fits better`],usage:`import { ApprovalCard } from "@/components/ui/approval-card-clean";

export function SendApproval({ call }: { call: PendingToolCall }) {
  return (
    <ApprovalCard
      title="Send campaign email"
      description="October product update · Newsletter"
      risk="medium"
      details={[
        { label: "To", value: "Customers – EU (42)" },
        { label: "Subject", value: "What's new in October" },
        { label: "Send", value: "Today, 9:00 AM" },
      ]}
      expiresIn={60}
      onApprove={({ always }) => call.approve({ always })} // return the promise – the button shows a spinner
      onDeny={({ reason }) => call.reject(reason)}
    />
  );
}`,examples:[{title:`Controlled, with a custom preview and Edit`,code:`const [status, setStatus] = useState<ApprovalStatus>("pending");

<ApprovalCard
  title="Delete 12 files"
  description="Old exports in /reports/2023"
  risk="high"
  status={status}
  onApprove={async () => {
    await deleteFiles(ids);
    setStatus("approved");
  }}
  onDeny={() => setStatus("denied")}
  onEdit={() => openFilePicker()}
>
  <FileList files={files} max={3} />
</ApprovalCard>`},{title:`Deploy with a countdown, no Always option`,code:`<ApprovalCard
  title="Deploy to production"
  description="main @ 4f2c1e9 · 3 migrations"
  risk="high"
  allowAlways={false}
  expiresIn={120}
  onExpire={() => log("deploy request expired")}
  onApprove={() => agent.resume()}
  onDeny={({ reason }) => agent.cancel(reason)}
/>`}],props:[{name:`title`,type:`string`,description:`The action, e.g. "Send campaign email" – also the card's accessible name`},{name:`description`,type:`ReactNode`,description:`One line of context below the title; truncates`},{name:`risk`,type:`"low" | "medium" | "high"`,description:`Tinted badge in the header (gray, amber, red); leave out to hide it`},{name:`icon`,type:`ReactNode`,default:`shield`,description:`Icon in the 32px header tile; SVGs get a 16px stroke style`},{name:`details`,type:`{ label: string; value: ReactNode }[]`,description:`Key-value rows in the preview panel`},{name:`preview`,type:`ReactNode`,description:`Custom content above the details, e.g. recipients or a diff – children work the same`},{name:`children`,type:`ReactNode`,description:`Used as the preview when preview isn't set`},{name:`status`,type:`"pending" | "approved" | "denied"`,description:`Controlled status; setting it back to "pending" starts a fresh request`},{name:`defaultStatus`,type:`"pending" | "approved" | "denied"`,default:`"pending"`,description:`Starting status when uncontrolled`},{name:`onApprove`,type:`({ always }) => void | Promise`,description:`Called on Approve or ⌘/Ctrl+Enter. Return a promise to show a spinner and lock the card; a rejection keeps it pending`},{name:`onDeny`,type:`({ reason: "user" | "timeout" }) => void`,description:`Called on Deny, Escape, or when the countdown runs out`},{name:`onEdit`,type:`() => void`,description:`Shows an Edit button before Deny`},{name:`expiresIn`,type:`number`,description:`Seconds until the request expires; shown as quiet "Expires in 0:42" text in the tray next to the buttons, amber in the last 10 seconds, paused while hovered or focused`},{name:`onExpire`,type:`() => void`,description:`Called when the countdown runs out, right before onDeny({ reason: "timeout" })`},{name:`allowAlways`,type:`boolean`,default:`true`,description:`Show the "Always allow this action" checkbox`},{name:`alwaysLabel`,type:`string`,default:`"Always allow this action"`,description:`Label of the checkbox`},{name:`approveLabel`,type:`string`,default:`"Approve"`,description:`Primary button label`},{name:`denyLabel`,type:`string`,default:`"Deny"`,description:`Quiet button label`},{name:`editLabel`,type:`string`,default:`"Edit"`,description:`Edit button label`},{name:`shortcuts`,type:`boolean`,default:`true`,description:`Show the ⌘↵ / Esc hints on the buttons – the shortcuts work either way`},{name:`label`,type:`ReactNode`,description:`Small label on the gray tray above the card, e.g. "Step 4 · gmail.send"`},{name:`actions`,type:`"card" | "tray"`,default:`"card"`,description:`Where the buttons sit: in the last row of the white card next to "Always allow" (one clean card), or on a gray tray below it`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`⌘`,`Enter`],description:`Approve while focus is anywhere in the card (Ctrl+Enter on Windows and Linux)`},{keys:[`Escape`],description:`Deny while focus is in the card`},{keys:[`Tab`],description:`Moves through the checkbox, Edit, Deny and Approve`}],accessibility:[`role="group" named by the title and described by the description and the countdown`,`Real buttons with aria-keyshortcuts; the kbd hints are aria-hidden`,`The decision is announced through a polite live region ("Approved: Send campaign email")`,`The countdown has a full text description ("Expires in 24 seconds unless approved…") linked via aria-describedby; the visible clock is aria-hidden so it isn't read every second, and it pauses while the card is hovered or focused`,`While an approval is processing the card is aria-busy and the buttons are aria-disabled, so focus is never lost`,`After a decision focus moves to the resolved row (tabIndex -1) if it was inside the card`],motion:[`On a decision the card and its tray footer fade and blur out, the height glides down to a compact row inside the tray and the check or cross draws itself in`,`The countdown text ticks down once per second without animation and turns amber in the last 10 seconds`,`Buttons press in slightly; the checkbox tick scales in`,`With prefers-reduced-motion everything switches instantly and only the spinner keeps turning slowly`],responsive:[`Fills its container; below 400px card width the buttons share a full-width row and the shortcut hints hide`,`Below 340px the risk badge drops the word "risk" and the resolved row drops its time`,`Titles, descriptions and detail values truncate instead of wrapping; works down to 320px`,`Shortcut hints are hidden on touch screens`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Render one card per pending tool call that needs consent; resolve the tool call with the onApprove / onDeny result`,`Return the real execution promise from onApprove so the card stays locked until the action has actually started`,`Persist { always: true } per tool name and skip the card next time`,`Set risk from the action, not the model's confidence: anything external, paid or irreversible is at least medium`,`Keep title an imperative verb phrase and put the concrete values (recipients, amount, target) in details`],related:[`tool-call-card`,`decision-inbox`,`thinking-state`,`thinking-loader`]};export{e as docs};