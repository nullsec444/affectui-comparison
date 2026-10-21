var e={requirements:[`React 19`],whenToUse:[`Tool and function calls in an agent chat or run log – what was called, with what, and what came back`,`Agents that call several tools per turn – wrap them in ToolCallGroup so the answer isn't buried under cards`,`Developer-facing views where people need to copy the exact arguments or result to debug`],whenNotToUse:[`Plain reasoning with no tool calls – use Thinking State or Thinking Loader`,`End users who never care about JSON – show a one-line status instead and keep the details in a log`,`Huge payloads (megabytes of JSON) – trim or paginate them first; the card renders the whole string`],usage:`import { ToolCallCard, ToolCallGroup } from "@/components/ui/tool-call-card-clean";

export function ToolCalls({ calls }: { calls: ToolCall[] }) {
  return (
    <ToolCallGroup>
      {calls.map((call) => (
        <ToolCallCard
          key={call.id}
          name={call.name}
          summary={call.summary}
          status={call.status}
          args={call.args}
          result={call.result}
          error={call.error}
          startedAt={call.startedAt}
          duration={call.durationMs}
          onRetry={() => retryToolCall(call.id)}
        />
      ))}
    </ToolCallGroup>
  );
}`,examples:[{title:`A single call with your own icon`,code:`<ToolCallCard
  name="search_web"
  icon={<GlobeIcon />}
  status="success"
  summary="Searched the web for 'CRM pricing 2026'"
  args={{ query: "CRM pricing 2026", max_results: 5 }}
  result={searchResults}
  duration={1420}
/>`},{title:`Failed call with retry, group open by default`,code:`<ToolCallGroup defaultOpen label="Checked the knowledge base">
  <ToolCallCard name="kb.search" status="success" args={{ q: "refund policy" }} result={hits} duration={380} />
  <ToolCallCard
    name="kb.fetch"
    status="error"
    args={{ id: "doc_381" }}
    error="403 – the agent has no access to this space"
    onRetry={() => rerun("kb.fetch")}
  />
</ToolCallGroup>`}],props:[{name:`name`,type:`string`,description:`Tool name as the agent calls it, shown in mono – e.g. "search_web"`},{name:`status`,type:`"running" | "success" | "error"`,description:`Blue spinner with a live timer, a solid blue check with the duration, or a red "Failed"`},{name:`summary`,type:`ReactNode`,description:`Short human summary next to the name; truncates with an ellipsis`},{name:`icon`,type:`ReactNode`,default:`wrench icon`,description:`Icon on the left, drawn in the icon gray without a tile – a 16px stroke SVG fits best`},{name:`args`,type:`unknown`,description:`Arguments – objects are pretty-printed and highlighted, JSON strings are parsed; the section is hidden when undefined`},{name:`result`,type:`unknown`,description:`What the tool returned – like args; other strings are shown as plain text. While running without a result, "Waiting for result…" is shown`},{name:`error`,type:`string`,description:`Error message, shown in the body when status is "error"`},{name:`startedAt`,type:`number`,description:`Start time in ms since epoch – the live timer counts from here instead of from when the card turned running`},{name:`duration`,type:`number`,description:`Final duration in ms – otherwise the time measured while the card was running`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`Start expanded (uncontrolled)`},{name:`open`,type:`boolean`,description:`Expanded state (controlled)`},{name:`onOpenChange`,type:`(open: boolean) => void`,description:`Called when the header is toggled`},{name:`openOnError`,type:`boolean`,default:`true`,description:`Opens the card when the call fails and closes it on the next run, unless someone toggled it by hand (uncontrolled only)`},{name:`onRetry`,type:`() => void`,description:`Shows a Retry button next to the error message`},{name:`maxCodeHeight`,type:`number`,default:`220`,description:`Height in px after which arguments and result are capped with a fade and a "Show all" toggle`},{name:`className`,type:`string`,description:`Extra class on the root`},{name:`ToolCallGroup · children`,type:`ToolCallCard elements`,description:`The cards – the group reads their icon, status and duration props for its header, so pass them as direct children`},{name:`ToolCallGroup · label`,type:`string`,default:`"Used N tools"`,description:`Header label once nothing is running`},{name:`ToolCallGroup · runningLabel`,type:`string`,default:`"Using tools…"`,description:`Shimmering header label while any card is running`},{name:`ToolCallGroup · duration`,type:`number`,description:`Total in ms – otherwise the sum of the cards' duration props, or the time measured while any card was running`},{name:`ToolCallGroup · defaultOpen / open / onOpenChange`,type:`boolean / boolean / (open) => void`,default:`false`,description:`Expanded state, uncontrolled or controlled`},{name:`ToolCallGroup · className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Moves through the headers, copy buttons, Show all and Retry; content of closed cards is skipped`},{keys:[`Enter`,`Space`],description:`On a header: expands or collapses the card or the group`}],accessibility:[`Headers are real buttons with aria-expanded and aria-controls pointing at the body`,`Closed bodies are inert, so they can't be focused or read until opened`,`A polite live region per card announces "search_web running", "finished" or "failed: …"; the group announces "Using tools…" and "Used 3 tools"`,`Copy buttons are labelled "Copy arguments" / "Copy result" and switch to "Copied"; icons are aria-hidden`,`Errors use text and an icon, not only red`],motion:[`The body grows with grid-template-rows 0fr → 1fr and fades in; the chevron turns`,`Status changes blur in; the blue check pops in and draws itself; the spinner turns while running`,`The small white copy button morphs into a blue check for 1.4s; Show all opens the capped block to its full height`,`In the group, new tool icons pop into the stack of small white tiles and "Using tools…" shimmers while anything runs`,`With prefers-reduced-motion everything switches instantly and the shimmer is off`],responsive:[`Fills its container; name and summary truncate with an ellipsis, the status never wraps – works down to ~320px`,`Each call is one white card with hairline shadows; tighter padding below 360px and taller headers on touch screens`,`Code wraps long lines instead of scrolling sideways`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Map your agent's tool-call events 1:1: status running on the call, success or error on the result; pass startedAt from the event for an exact timer`,`Write summary in past tense when done ("Searched…") and present progressive while running ("Searching…")`,`Pass args and result as objects – stringify nothing yourself; redact secrets before they reach the card`,`Wrap all calls of one assistant turn in a single ToolCallGroup and keep cards as direct children`],related:[`thinking-loader`,`thinking-state`,`ai-answer`]};export{e as docs};