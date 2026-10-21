import "./chunk-CTH3ASD6.js";

// reconstructed/docs-F9iwrvZt.jsx
var docs = {
  requirements: [`React 19`],
  whenToUse: [`Agents that write or edit a document, a brief or a spec while you watch \u2013 text, images, code and comments \u2013 and you want to see who is where`, `Several agents on one text at once: each change stays a suggestion in its agent's color until you accept it`, `Making agent work feel like working with teammates \u2013 the same pointers people know from Figma or Google Docs`],
  whenNotToUse: [`One agent rewriting a reply \u2013 use Writing Assistant or Inline Diff`, `Changes to code or files \u2013 use Inline Diff or Change Summary`, `Who started which agent \u2013 use Agent Tree`],
  usage: `import { AgentCursors, acceptSuggestion } from "@/components/ui/agent-cursors";

// One shared ink for all of them \u2013 their logos tell them apart (pass color to give one its own)
const agents = [
  { id: "research", name: "Researcher", avatar: <ClaudeLogo /> },
  { id: "writer", name: "Writer", avatar: <OpenAILogo /> },
];

export function Brief() {
  const [doc, setDoc] = useState({ blocks, suggestions: [] });
  // From your agents' stream: where each one is and what it does
  const cursors = {
    research: { block: "why", at: 24, select: 9, doing: "Checking the numbers" },
    writer: { block: "list", at: 31, doing: "Adding detail", typing: true },
  };

  return (
    <AgentCursors
      title="Launch brief"
      agents={agents}
      blocks={doc.blocks}
      suggestions={doc.suggestions}
      cursors={cursors}
      onAccept={(s) => setDoc((d) => acceptSuggestion(d.blocks, d.suggestions, s.id))}
      onReject={(s) => setDoc((d) => ({ ...d, suggestions: d.suggestions.filter((x) => x.id !== s.id) }))}
    />
  );
}`,
  examples: [{
    title: `An agent typing a suggestion`,
    code: `// Start the suggestion empty, then grow insert as the tokens arrive \u2013 the caret follows every letter
suggestions: [{ id: "s1", agent: "writer", block: "list", at: 31, insert: " \u2013 one page, every Friday" }]
cursors: { writer: { block: "list", at: 25, in: "s1", doing: "Adding detail", typing: true } }`
  }, {
    title: `A rewrite: remove and insert at once`,
    code: `{ id: "s2", agent: "research", block: "why", at: 16, remove: 9, insert: "38%", note: "Q3 survey of 1,240 teams" }`
  }, {
    title: `An image that loads, then gets resized`,
    code: `// A shimmer while loading; an agent on it with select holds it (frame, handles, size) \u2013 change width and it resizes smoothly
{ id: "hero", kind: "image", loading: false, src: "/hero.png", ratio: 1200 / 460, width: 0.62 }
cursors: { designer: { block: "hero", point: "corner", select: 1, doing: "Resizing the hero" } }`
  }, {
    title: `Code and comment pins`,
    code: `// Code blocks take suggestions like text; a comment stays open while its agent types, then folds into a pin
blocks: [{ id: "config", kind: "code", text: 'everyone: "second week of November"' }]
comments: [{ id: "n1", agent: "research", block: "why", x: 0.66, text: "Q3 survey of 1,240 teams", open: true }]
cursors: { research: { block: "n1", at: 24, typing: true } }  // a cursor in a comment: its id as block
<AgentCursors onResolveComment={(c) => removeComment(c.id)} onReply={(c, text) => sendReply(c.id, text)} \u2026 />`
  }, {
    title: `Tables and tabs`,
    code: `// A table is a block of rows; every cell is a block of its own, so cursors, suggestions and pins work in it
{ id: "tasks", kind: "table", rows: [
  [{ id: "h0", text: "Task" }, { id: "h1", text: "Status" }],
  [{ id: "c0", text: "Write the post" }, { id: "c1", text: "To do", tone: "gray" }],
] }
cursors: { planner: { block: "c1", at: 0, select: 5, doing: "Updating the status" } }

// Tabs above the page \u2013 switch the blocks yourself, e.g. between the brief and its tasks
<AgentCursors tabs={[{ id: "doc", label: "Doc" }, { id: "table", label: "Table" }]} tab={tab} onTabChange={setTab} \u2026 />`
  }, {
    title: `A window onto a long document`,
    code: `// A fixed height: the page fades out towards the bottom
<AgentCursors height={620} \u2026 />`
  }, {
    title: `Follow one agent`,
    code: `// The others fade back; clicking a face in the header does the same
<AgentCursors following="writer" onFollowingChange={setFollowing} \u2026 />`
  }],
  props: [{
    name: `agents`,
    type: `CursorAgent[]`,
    description: `{ id, name, color?, avatar?, tint?, cost? } \u2013 everyone who can be in the document; without a color every agent shares one ink (near-black, light in dark mode) and the logos tell them apart`
  }, {
    name: `blocks`,
    type: `DocBlock[]`,
    description: `{ id, kind?: "title" | "heading" | "paragraph" | "item" | "code" | "image", text?, \u2026 } \u2013 the document; consecutive items form one list. Images take width (0\u20131), ratio, float ("left" | "right" \u2013 the next text runs beside them), loading, src and alt; their text is the caption. Tables take rows of cell blocks (the first row is the header); a cell with a tone shows as a status pill`
  }, {
    name: `cursors`,
    type: `Record<string, AgentCursor | null>`,
    description: `Per agent: { block, at?, in?, select?, point?, doing?, typing? } \u2013 where it is (a block or a comment), a selected passage or a held image, the corner or middle of an image, what it's doing (on its flag) and whether it types; null or missing means it left`
  }, {
    name: `comments`,
    type: `DocComment[]`,
    description: `{ id, agent, block, at?, x?, y?, text, open? } \u2013 comment pins on the page: on a character of the block (at), or at its top edge x along the page (0\u20131); y moves it down; open keeps the window open (e.g. while the agent writes), otherwise a dark round pin with the agent's mark that grows into the window on hover`
  }, {
    name: `onResolveComment`,
    type: `(comment: DocComment) => void`,
    description: `The black check in a comment's window \u2013 remove it from your list`
  }, {
    name: `onReply`,
    type: `(comment: DocComment, text: string) => void`,
    description: `Shows a reply field in the window; Enter sends`
  }, {
    name: `height`,
    type: `number`,
    description: `A fixed page height in px \u2013 the rest of the document fades out towards the bottom`
  }, {
    name: `tabs / tab / onTabChange`,
    type: `{ id, label }[] / string / (id) => void`,
    description: `Tabs above the page \u2013 the open one white with a stroke; you switch the blocks and agents`
  }, {
    name: `agents[].cost`,
    type: `number`,
    description: `Per agent: what it has cost so far \u2013 a small tag on its flag, the total in the header`
  }, {
    name: `agents[].tint`,
    type: `string`,
    description: `Per agent: the fill of its face while you follow it \u2013 defaults to a light wash of its color`
  }, {
    name: `formatCost`,
    type: `(amount: number) => string`,
    default: `dollars, e.g. "$0.42"`,
    description: `Formats every cost`
  }, {
    name: `suggestions`,
    type: `DocSuggestion[]`,
    default: `[]`,
    description: `{ id, agent, block, at, remove?, insert?, note? } \u2013 changes waiting for you: removed text is struck through, new text underlined, both in the agent's color`
  }, {
    name: `onAccept / onReject`,
    type: `(suggestion: DocSuggestion) => void`,
    description: `From the window that opens on a suggestion \u2013 acceptSuggestion() writes one into your blocks`
  }, {
    name: `onAcceptAll`,
    type: `() => void`,
    description: `Shows "Accept all" in the header when there is more than one suggestion`
  }, {
    name: `following / onFollowingChange`,
    type: `string | null`,
    description: `The agent you follow, controlled or uncontrolled \u2013 the other pointers and selections fade back`
  }, {
    name: `title`,
    type: `string`,
    default: `"Untitled"`,
    description: `The document's name in the header`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root`
  }, {
    name: `acceptSuggestion`,
    type: `(blocks, suggestions, id) => { blocks, suggestions }`,
    description: `Helper: writes a suggestion into the text and moves the other suggestions in that block along`
  }],
  keyboard: [{
    keys: [`Tab`],
    description: `Moves to the faces in the header, then from suggestion to suggestion \u2013 a focused suggestion opens its window`
  }, {
    keys: [`Enter`, `Space`],
    description: `On a face: follow that agent, or stop following`
  }, {
    keys: [`Esc`],
    description: `Closes the window of a suggestion`
  }],
  accessibility: [`The text is real text in headings, paragraphs and a list \u2013 pointers, carets and selections are decoration and hidden from screen readers`, `Every suggestion is focusable and labelled, e.g. "Researcher suggests adding: 38%"; its window is a dialog with Accept and Reject buttons`, `The faces are toggle buttons (aria-pressed) named after the agent and what it is doing; a followed face fills with its tint`, `New suggestions are announced politely, with the agent's note`],
  motion: [`Pointers glide to their next place; a new one pops in where it lands, one that leaves fades out where it was`, `Images are gray with a light shimmer running across while they load, then fade in; a held image resizes smoothly while the pointer stays on its corner handle`, `A comment pin grows into its window on hover and folds back into it \u2013 the agent's mark stays and slides to the corner`, `While an agent types, its caret holds still and the pointer follows every letter`, `What an agent is doing slides out next to its name on the flag`, `Selected passages fade in behind the text in the agent's color; new suggestions fill in softly`, `While an agent is in the document, an arc in its color runs around its face, fading in from nothing \u2013 like a loader`, `Switching tabs fades the new view in; table rows an agent adds slide in`, `With prefers-reduced-motion everything moves at once`],
  responsive: [`Every position is measured from the page itself, so any width, font size or zoom works \u2013 the pointers stay on their letters while the text wraps`, `Comment windows open towards the bottom right \u2013 towards the left near the right edge, upwards near the bottom`, `Flags always sit to the bottom right of their pointer; near the right edge they are cut off rather than moved`, `Below 520px the page gets tighter margins and the suggestion count in the header gives way to the faces`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],
  aiNotes: [`Offsets are character indexes into the block's current text \u2013 after accepting a suggestion, use the text that acceptSuggestion returns`, `A cursor inside a suggestion (in: id) counts its offset in that suggestion's insert text`, `Pass new cursors as your agents stream \u2013 the component animates between any two states, it doesn't need every step`, `Flags and comment pins are dark cards with a pink-to-blue bottom edge (--ui-agc-flag, --ui-agc-edge); in dark mode they turn light`, `The pointer is the soft, rounded arrow from the affectUI videos, filled in the agent's color`],
  related: [`writing-assistant`, `inline-diff`, `agent-tree`, `comment-thread`]
};
export {
  docs
};
