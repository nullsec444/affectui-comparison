var e={requirements:[`React 19`],whenToUse:[`AI products where people reuse the same prompts with small changes – summaries, release notes, outreach, debugging`,`Next to a chat composer, as the place to pick a saved prompt, fill in the blanks and send it`,`Team prompt libraries where the template stays fixed and only a few words change per use`],whenNotToUse:[`Free writing – a plain composer is faster when nothing repeats`,`Long templates with many variables – past about six fields a form with labels reads better than a sentence`,`Choosing a command or action – use Command Menu`],usage:`import { PromptLibrary } from "@/components/ui/prompt-library";

export function Prompts() {
  return (
    <PromptLibrary
      templates={[
        {
          id: "meeting",
          title: "Summarize a meeting",
          category: "Notes",
          body: "Summarize the meeting below for {audience} in under {length}.",
          variables: { length: { default: "150 words" } },
        },
        {
          id: "error",
          title: "Explain an error",
          category: "Debug",
          body: "Explain this {language} error in plain words: {error}.",
        },
      ]}
      onUse={(prompt) => send(prompt)}
    />
  );
}`,examples:[{title:`Controlled, with descriptions`,code:`const [id, setId] = useState("release");

<PromptLibrary
  templates={[
    {
      id: "release",
      title: "Write release notes",
      category: "Product",
      tone: "violet",
      body: "Write release notes for {product} {version}. Keep the tone {tone}.",
      variables: {
        product: { description: "Name of the product" },
        version: { description: "Version number, e.g. 2.4" },
        tone: { description: "How it should sound", default: "friendly" },
      },
    },
  ]}
  value={id}
  onSelect={setId}
  onUse={(prompt, template, values) => composer.insert(prompt)}
/>`},{title:`Into the composer, with your own labels`,code:`<PromptLibrary
  templates={saved}
  title="Saved prompts"
  useLabel="Insert"
  onCopy={() => toast("Copied")}
  onUse={(prompt) => setDraft(prompt)}
/>`}],props:[{name:`templates`,type:`PromptTemplate[]`,description:`{ id, title, category?, tone?, body, variables? } – body holds the variables in curly braces, e.g. {audience}; variables maps a name to { description?, default? }`},{name:`value`,type:`string`,description:`Id of the chosen template (controlled)`},{name:`defaultValue`,type:`string`,description:`Id chosen at first when uncontrolled – the first template by default`},{name:`onSelect`,type:`(id: string) => void`,description:`Called when another template is chosen`},{name:`onUse`,type:`(prompt: string, template: PromptTemplate, values: Record<string, string>) => void`,description:`Called with the finished prompt when Use is pressed – only possible once every variable is filled`},{name:`onCopy`,type:`(prompt: string) => void`,description:`Called after the prompt was copied to the clipboard`},{name:`title`,type:`string`,default:`"Prompts"`,description:`Heading above the list`},{name:`useLabel`,type:`string`,default:`"Use prompt"`,description:`Label of the use button`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`↓`],description:`From the search field into the list`},{keys:[`↑`,`↓`,`Home`,`End`],description:`Move through the list – the template opens as you go`},{keys:[`Esc`],description:`Clears the search`},{keys:[`Tab`],description:`Through the variable fields, then Copy and Use`},{keys:[`Enter`],description:`In a variable field: jumps to the next empty one, or uses the prompt once all are filled`}],accessibility:[`A group named by the list's title; the templates are a listbox with options and aria-selected, only the chosen one is in the tab order`,`Every variable is a real text field labelled with its name and description`,`Use stays focusable while not ready (aria-disabled) and the tray says how many variables are missing`,`A polite live region announces when all variables are filled, when the prompt was copied and when it was used`,`The outgoing template that fades out during a switch is inert and hidden from screen readers`],motion:[`The highlight slides along the list to the chosen template while the content crossfades – the old one fades out underneath`,`The part you type into lights up in the field and in the preview, then fades back`,`The token estimate on the tray rolls to its new value as you type`,`Use pulses once when the last variable gets filled; Copy turns into a check for a moment`,`With prefers-reduced-motion everything switches without movement`],responsive:[`Fills its container up to 640px. Below 540px the list moves on top of the template; below 360px Copy keeps only its icon`,`Fields grow with what you type and never get wider than the line`,`Touch screens: taller list rows, fields and buttons`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],aiNotes:[`Variables are written as {name} with letters, digits, - or _; the same name used twice is one field`,`Values are kept per template inside the card, so switching back and forth keeps what was typed`,`The token number is an estimate (about four characters per token) – pass the prompt to your tokenizer when it has to be exact`,`Category colors follow the order the categories appear; set tone on a template to pick one`],related:[`chat-composer`,`command-menu`,`writing-assistant`]};export{e as docs};