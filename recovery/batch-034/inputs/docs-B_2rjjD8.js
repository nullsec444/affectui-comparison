var e={requirements:[`React 19`],whenToUse:[`Voice mode of an assistant: one calm object that shows whether the AI listens, thinks or talks`,`Hero of an AI product page, an empty state before the first prompt, or a call screen`,`Anywhere a spinner would undersell what is happening – the orb says which phase it is`],whenNotToUse:[`Inline in a chat thread or next to text – use Thinking Loader or Thinking State, they are made for small sizes`,`As decoration that never changes state – a still image costs nothing; the orb draws every frame`,`Below about 96px – the dots merge into a blob`],usage:`import { VoiceOrb } from "@/components/ui/voice-orb";

export function VoiceMode() {
  const { state, level, toggle } = useVoiceSession(); // "idle" | "listening" | "thinking" | "speaking", 0–1
  return <VoiceOrb state={state} level={level} onPress={toggle} />;
}`,examples:[{title:`Driven by the microphone`,code:`// level from a Web Audio analyser, 0–1
const [level, setLevel] = useState(0);
useEffect(() => {
  const data = new Uint8Array(analyser.frequencyBinCount);
  let frame = 0;
  const read = () => {
    analyser.getByteTimeDomainData(data);
    let peak = 0;
    for (const v of data) peak = Math.max(peak, Math.abs(v - 128) / 128);
    setLevel(peak);
    frame = requestAnimationFrame(read);
  };
  read();
  return () => cancelAnimationFrame(frame);
}, [analyser]);

<VoiceOrb state="listening" level={level} />`},{title:`Own color, size and texts`,code:`<VoiceOrb
  state="thinking"
  size={320}
  dots={800}
  accent="#7c5cff"
  label={{ idle: "Hold space to talk", thinking: "Searching your docs" }}
/>`},{title:`Just the orb`,code:`<VoiceOrb state="speaking" label={false} interactive={false} />`}],props:[{name:`state`,type:`"idle" | "listening" | "thinking" | "speaking"`,default:`"idle"`,description:`What the assistant is doing – the orb melts from one state into the next`},{name:`level`,type:`number`,description:`Loudness from 0 to 1 while listening or speaking. Without it the orb makes up a natural-looking level`},{name:`size`,type:`number`,default:`220`,description:`Edge length in px`},{name:`dots`,type:`number`,default:`520`,description:`Number of dots – raise it for large sizes`},{name:`accent`,type:`string`,default:`blue`,description:`Color the moving dots take on; resting dots use the text color`},{name:`label`,type:`boolean | Partial<Record<state, string>>`,default:`true`,description:`The line under the orb – false hides it, an object replaces single texts`},{name:`interactive`,type:`boolean`,default:`true`,description:`Dots give way to the mouse pointer`},{name:`onPress`,type:`() => void`,description:`Makes the orb a button, e.g. to start and stop listening`},{name:`className`,type:`string`,description:`Extra class on the root`},{name:`style`,type:`CSSProperties`,description:`Inline styles on the root – set color here to change the resting dots`}],keyboard:[{keys:[`Enter`,`Space`],description:`With onPress: presses the orb`}],accessibility:[`The canvas is decorative; the state is in the label, which is announced politely when it changes`,`With onPress the orb is a real button named by its label; without it, an image named after the state`,`With prefers-reduced-motion nothing moves: the orb shows one still frame per state (sphere, raised dots, ring, waves)`,`The colors follow the text color and adapt to dark mode on their own`],motion:[`Idle: the sphere turns slowly and breathes`,`Listening: dots jump outward with the level and take on the accent color; a soft glow follows the loudness`,`Thinking: the sphere collapses into a tilted, fast spinning ring with a light running around it`,`Speaking: waves travel from pole to pole with the level`,`States are blended, never switched – every dot glides from one shape to the next in about a third of a second`,`The animation pauses while the orb is off screen or the tab is in the background`],responsive:[`Fixed square of size px – pass a smaller size on phones; it is sharp on high-density screens`,`Touch screens: no pointer effect, the press works as usual`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Changing state or level never restarts the animation – only size and dots rebuild the canvas`,`Smooth a raw microphone level a little before passing it, or pass it as is: the orb eases towards it anyway`],related:[`thinking-loader`,`thinking-state`,`chat-composer`]};export{e as docs};