var e={requirements:[`React 19`],whenToUse:[`A comments sidebar next to a document, design or record`,`Collaboration with an assistant that can apply edits people suggest with /edit`],whenNotToUse:[`Long discussions with nested replies – use the Comment Thread for one conversation`],usage:`import { CommentsPanel } from "@/components/ui/comments-panel-clean";

export function Sidebar({ comments, me }) {
  return (
    <CommentsPanel
      comments={comments}
      currentUser={me}
      onRunEdit={(c) => api.applyEdit(c.text)}
      onAdd={(c) => api.saveComment(c)}
    />
  );
}`,props:[{name:`comments`,type:`PanelComment[]`,description:`id, author ({ name, avatar }), createdAt and text – text starting with /edit becomes a runnable edit`},{name:`currentUser`,type:`CommentAuthor`,description:`Author of new comments`},{name:`onRunEdit`,type:`(comment) => Promise<void> | void`,description:`Runs an edit; the button shows Running… until the promise settles`},{name:`onAdd`,type:`(comment) => void`,description:`Called with every new comment`},{name:`onClose`,type:`() => void`,description:`Shows a close button`},{name:`title`,type:`string`,default:`"Comments"`,description:`Heading in the first row of the card`}],keyboard:[{keys:[`Tab`],description:`Move through tabs, sort, comments and the composer`},{keys:[`Enter`],description:`Send the comment in the composer`}],accessibility:[`Filters are tabs, sorting is a menu of radio items, resolve is a toggle button`,`Times are real time elements; the list announces new comments politely`],motion:[`New comments fade in, edits show a spinner, the sort menu drops in – reduced motion turns this off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`comment-thread`,`smart-recommendation`]};export{e as docs};