var e={requirements:[`React 19`],whenToUse:[`Under every assistant message in a chat – copy, try again, rate and listen without leaving the conversation`,`Wherever a model can answer more than once and people should be able to flip between the answers`,`When you collect feedback on answers and want a reason, not just a thumb`],whenNotToUse:[`Under the user's own messages – edit and delete fit there better than regenerate and rating`,`For a long list of actions – keep it to the four; put the rest in a menu`,`When the answer is still streaming – show a stop button instead and bring the bar in once it is done`],usage:`import { MessageActions, MessageText } from "@/components/ui/message-actions-clean";

export function AssistantMessage({ message }) {
  const [version, setVersion] = useState(message.versions.length - 1);
  const text = message.versions[version];

  return (
    // data-ui-message lets the bar light up while the whole message is hovered
    <div data-ui-message>
      <MessageText version={version}>{text}</MessageText>
      <MessageActions
        text={text}
        versions={message.versions}
        version={version}
        onVersionChange={setVersion}
        onRegenerate={() => regenerate(message.id)}
        onFeedback={(kind, reason) => saveFeedback(message.id, version, kind, reason)}
      />
    </div>
  );
}`,examples:[{title:`Spinning while a new version is written`,code:`const [writing, setWriting] = useState(false);

<MessageActions
  text={text}
  versions={versions.length}
  version={version}
  onVersionChange={setVersion}
  regenerating={writing}
  onRegenerate={async () => {
    setWriting(true);
    const next = await regenerate(message.id);
    setVersions((v) => [...v, next]);
    setVersion(versions.length); // jump to the new one
    setWriting(false);
  }}
/>`},{title:`Real read aloud with the Web Speech API`,code:`const [speaking, setSpeaking] = useState(false);

<MessageActions
  text={text}
  actions={["copy", "speak"]}
  speaking={speaking}
  onSpeak={(play) => {
    speechSynthesis.cancel();
    if (play) {
      const u = new SpeechSynthesisUtterance(text);
      u.onend = () => setSpeaking(false);
      speechSynthesis.speak(u);
    }
    setSpeaking(play);
  }}
/>`}],props:[{name:`text`,type:`string`,description:`The message text – Copy writes it to the clipboard, and an uncontrolled read aloud is timed by its length`},{name:`actions`,type:`MessageActionKey[]`,default:`["copy", "regenerate", "feedback", "speak"]`,description:`Which actions to show and in what order. feedback is the thumbs up and down`},{name:`versions`,type:`number | string[]`,default:`1`,description:`All versions of the message, or just how many there are. From two on the "‹ 2 / 3 ›" switcher unfolds next to Regenerate`},{name:`version`,type:`number`,description:`Controlled version, 0-based`},{name:`defaultVersion`,type:`number`,default:`newest`,description:`Starting version when uncontrolled. Uncontrolled, the switcher jumps to a version as soon as it is added`},{name:`onVersionChange`,type:`(index: number) => void`,description:`Called with the version picked in the switcher`},{name:`onCopy`,type:`(text?: string) => void`,description:`Called after Copy, with text`},{name:`onRegenerate`,type:`() => void`,description:`Called when Regenerate is pressed – add a version to versions and it shows up in the switcher`},{name:`regenerating`,type:`boolean`,default:`false`,description:`Keeps the arrow spinning and the bar lit while a new version is written`},{name:`onFeedback`,type:`(kind: "up" | "down" | null, reason?: string) => void`,description:`Called with the vote right away, with null when it is taken back, and once more with "down" and a reason when the feedback row is sent. A new version starts without a vote`},{name:`reasons`,type:`string[]`,default:`Not accurate, Too long, Didn't follow instructions, Other`,description:`Quick reasons in the feedback row. "Other" unfolds a small text field whose words are sent as the reason`},{name:`onSpeak`,type:`(playing: boolean) => void`,description:`Called with true when Read aloud starts and false when it stops`},{name:`speaking`,type:`boolean`,description:`Controlled playing state – tie it to your speech player. Without it the bar plays for speakDuration and stops on its own`},{name:`speakDuration`,type:`number`,default:`from text, at least 2600`,description:`How long an uncontrolled read aloud plays, in ms`},{name:`quiet`,type:`boolean`,default:`true`,description:`Faded until the message (an ancestor with data-ui-message) or the bar is hovered or focused. Touch screens always show it fully`},{name:`label`,type:`string`,default:`"Message actions"`,description:`Accessible name of the bar`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Through the actions, the version arrows and – when it is open – the reasons and Send`},{keys:[`Enter`,`Space`],description:`Presses an action, picks or drops a reason, sends`},{keys:[`Enter`],description:`In the "Other" text field: sends`},{keys:[`Esc`],description:`Closes the feedback row and puts focus back on thumbs down`}],accessibility:[`Each action is a button with its own name; the thumbs and Read aloud are toggle buttons with aria-pressed, thumbs down has aria-expanded for the feedback row`,`Tooltips repeat the button names, so they are hidden from screen readers; they also show on keyboard focus`,`Copied, the version you switched to, Reading aloud and Thanks are announced through a polite live region`,`The version arrows are disabled at either end, and the count is read as "Version 2 of 3"`,`While closed, the feedback row is inert – nothing hidden can be focused`],motion:[`Copy blurs into a green check; it turns back after a moment`,`Regenerate spins once per press, and keeps spinning while regenerating is true`,`A vote gives the thumb a small pop and the selected-tab look; the feedback row unfolds below the bar and folds away after Thanks`,`The version switcher unfolds sideways from Regenerate; its number crossfades, and MessageText crossfades the message while its height eases`,`Read aloud swaps the speaker for four bouncing blue bars`,`With prefers-reduced-motion everything switches without movement and the bars stand still`],responsive:[`The bar is about 220px wide with the switcher; the feedback row has no card of its own – it fills its container (ideally the last row of your message card) and its reasons wrap`,`Below 320px the Send button takes its own line under the reasons`,`Touch screens: 36px buttons, taller reasons, no hover tooltips (only "Copied"), and the bar is never faded`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Put data-ui-message on the element that wraps the message and the bar – that is what lights the quiet bar up on hover`,`Keep versions per message in your state and pass version + onVersionChange; after a regenerate, set version to the new last index`,`onFeedback fires twice for a thumbs down with a reason – once with only the vote, once with the reason. Upsert by message and version instead of inserting rows`,`The bar does not speak by itself – pass speaking and onSpeak and drive speechSynthesis or your TTS from there`],related:[`ai-answer`,`reaction-bar`,`chat-composer`,`thinking-state`]};export{e as docs};