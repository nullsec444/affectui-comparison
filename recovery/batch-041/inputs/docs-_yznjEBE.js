var e={requirements:[`React 19`],whenToUse:[`A single conversation attached to a selection, a cell or a line of text`,`Showing what an assistant did after someone asked for a change`],whenNotToUse:[`A feed of many comments – use the Comments Panel`],usage:`import { AssistantMark, CommentThread } from "@/components/ui/comment-thread";

const atlas = { name: "Atlas", avatar: <AssistantMark />, assistant: true };

export function Thread({ messages, me }) {
  return (
    <CommentThread
      messages={messages}
      currentUser={me}
      assistant={atlas}
      onReply={async (text) => (text.includes("@Atlas") ? await api.ask(text) : undefined)}
    />
  );
}`,props:[{name:`messages`,type:`ThreadMessage[]`,description:`id, author, createdAt, text – assistant replies can add a status line with folding details`},{name:`currentUser`,type:`ThreadAuthor`,description:`Author of new replies`},{name:`assistant`,type:`ThreadAuthor`,description:`Shown with a thinking state while an answer is on its way`},{name:`onReply`,type:`(text) => ThreadMessage | Promise<ThreadMessage | void> | void`,description:`Return a message (or a promise) for the assistant to answer, nothing to just post`},{name:`onClose`,type:`() => void`,description:`Shows a close button`},{name:`title`,type:`string`,default:`"Comment"`,description:`Heading in the gray tray`}],keyboard:[{keys:[`Enter`],description:`Send the reply`},{keys:[`Tab`],description:`Reach the status lines to fold their details open`}],accessibility:[`Status lines are buttons with aria-expanded; folded details are inert`,`The thread announces new replies politely`],motion:[`Replies fade in, the thinking text shimmers, details fold open – reduced motion turns this off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`comments-panel`,`chat-composer`]};export{e as docs};