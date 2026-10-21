var e={requirements:[`React 19`],whenToUse:[`Reactions under posts, comments or updates in a feed`,`Any toggle with a public count, like saves or upvotes`],whenNotToUse:[`Actions that need a confirmation – a toggle gives none`],usage:`import { ReactionBar } from "@/components/ui/reaction-bar-clean";

export function PostActions({ post }) {
  return (
    <ReactionBar
      reactions={{ like: { count: post.likes, active: post.liked }, comment: { count: post.comments } }}
      onReact={(key, state) => api.react(post.id, key, state.active)}
    />
  );
}`,props:[{name:`reactions`,type:`Partial<Record<ReactionKey, { count; active? }>>`,description:`Starting count and pressed state per action`},{name:`onReact`,type:`(key, state) => void`,description:`Called after a toggle with the new count and state`},{name:`actions`,type:`ReactionKey[]`,default:`["like", "comment", "repost", "share"]`,description:`Which actions to show, in order`},{name:`className`,type:`string`,description:`Extra class on the row`}],keyboard:[{keys:[`Tab`],description:`Move between the actions`},{keys:[`Enter`,`Space`],description:`Toggle the focused action`}],accessibility:[`Every action is a toggle button with aria-pressed and a label that includes its count`,`The rolling digits are decorative – the label carries the number`],motion:[`The icon shrinks and springs, your chip takes a light blue tint; the count glides to its new width and changed digits roll in`,`Reduced motion turns this off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`button`,`comments-panel`]};export{e as docs};