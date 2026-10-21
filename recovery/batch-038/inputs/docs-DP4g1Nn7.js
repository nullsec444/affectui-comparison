var e={requirements:[`React 19`,`Chat Composer – installed automatically with the CLI`],whenToUse:[`The main screen of an AI assistant or copilot inside your product`,`Internal tools where people chat with your data and group work into projects`],whenNotToUse:[`A small chat widget in a corner – use the Chat Composer on its own`],usage:`import { AiWorkspace } from "@/components/ui/ai-workspace";

export function Assistant() {
  return (
    <AiWorkspace
      userName="Lena"
      respond={async (message, history) => {
        const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message, history }) });
        return (await res.json()).answer;
      }}
    />
  );
}`,props:[{name:`respond`,type:`(message, history) => Promise<string>`,description:`Your model call – the answer streams in word by word. Demo answers without it`},{name:`userName`,type:`string`,default:`"Lena"`,description:`Shown in the greeting and the sidebar`},{name:`userAvatar`,type:`string`,description:`Image for the sidebar footer`},{name:`workspace`,type:`ReactNode`,default:`"N"`,description:`Initial or logo in the top-left tile`},{name:`pinned`,type:`string[]`,description:`Pinned assistants in the sidebar – pinned projects are added automatically`},{name:`conversations`,type:`Conversation[]`,description:`Recent chats with their messages`},{name:`projects`,type:`Project[]`,description:`Projects with name, description, days since update and pinned`}],keyboard:[{keys:[`Enter`],description:`Send a message in the composer`},{keys:[`Escape`],description:`Close menus and the create-project dialog`},{keys:[`Tab`],description:`Move through sidebar, header, chat and projects`}],accessibility:[`Menus are real menus with radio items, the dialog is modal and labelled, the collapsed sidebar is inert`,`New answers are announced politely while they stream in`],motion:[`The sidebar collapses smoothly, answers stream in, views fade in, menus drop in`,`Reduced motion turns these off`],responsive:[`Below 720px of width the sidebar becomes an overlay and the project grid turns into one column`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`chat-composer`,`thinking-state`,`comments-panel`]};export{e as docs};