import "./chunk-CTH3ASD6.js";

// reconstructed/docs-BtJJaDyI.jsx
var docs = {
  requirements: [`React 19`],
  whenToUse: [`Feature cards about inviting teammates, collaboration, sharing or multiplayer`, `Onboarding steps like \u201CInvite your team\u201D where a friendly, moving scene helps`],
  whenNotToUse: [`Showing your real team list \u2013 the scene is decorative and loops on its own`, `Places that need to stay completely still \u2013 use prefers-reduced-motion or a static image`],
  usage: `import { TeamInvite } from "@/components/ui/team-invite";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 420 }}>
      <TeamInvite
        avatars={[
          { src: "/team/maya.png", name: "Maya" },
          { src: "/team/finn.png", name: "Finn" },
          { src: "/team/lea.png", name: "Lea" },
        ]}
      />
      <h3>Invite your team</h3>
      <p>Bring everyone into the same workspace in seconds.</p>
    </article>
  );
}`,
  props: [{
    name: `avatars`,
    type: `[TeamInviteAvatar, TeamInviteAvatar, TeamInviteAvatar]`,
    description: `Required. The two connected teammates, then the one being invited \u2013 each { src, name? } with a square portrait`
  }, {
    name: `label`,
    type: `string`,
    description: `Accessible description \u2013 by default built from the names`
  }, {
    name: `className`,
    type: `string`,
    description: `Extra class on the root, e.g. for width or margins`
  }],
  accessibility: [`Exposed as one image with a descriptive label built from the names; avatars, lines and cursor are hidden from screen readers`, `Nothing in the scene is interactive`],
  motion: [`A 4.4 s loop with soft ease-in-out: the cursor picks up the third avatar, carries it into the dashed slot, the line draws solid and the green status dot pops in`, `Only transforms, opacity and a stroke offset are animated \u2013 no layout work`, `With prefers-reduced-motion it stays a still frame of the waiting state`],
  responsive: [`Transparent background, so it sits on any light or dark surface`, `Keeps a 3 : 2 aspect ratio and scales to the width of its container \u2013 every size is in container units`, `Avatars are square portraits shown in white-ringed circles; photos, 3D faces or illustrations all work`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]
};
export {
  docs
};
