var e={requirements:[`React 19`],whenToUse:[`AI and automation products where one prompt sets up several agents or roles`,`Feature cards about teams, delegation or workflows that span several tools`],whenNotToUse:[`Real org charts or live agent status – the scene is decorative and loops on its own`,`More than three agents – the layout is built for exactly three`],usage:`import { AgentTeam } from "@/components/ui/agent-team";

export function FeatureCard() {
  return (
    <article style={{ maxWidth: 560 }}>
      <AgentTeam
        prompt="Build a team to work my inbound pipeline"
        members={[
          { role: "Lead Researcher", avatar: "/team/lena.jpg", tools: ["linkedin", "hubspot"] },
          { role: "Inbound Qualifier", avatar: "/team/theo.jpg", tools: ["hubspot", "slack"] },
          { role: "Outbound SDR", avatar: "/team/noah.jpg", tools: ["gmail", "salesforce"] },
        ]}
      />
    </article>
  );
}`,props:[{name:`prompt`,type:`string`,default:`"Build a team to work my inbound pipeline"`,description:`Text that types itself into the prompt pill`},{name:`members`,type:`[AgentTeamMember, AgentTeamMember, AgentTeamMember]`,description:`Required. Three agents, left to right – { role, avatar, tools? } with up to two of linkedin, hubspot, slack, gmail, salesforce`},{name:`label`,type:`string`,description:`Accessible description – by default built from the prompt and the roles`},{name:`className`,type:`string`,description:`Extra class on the root, e.g. for width or margins`}],accessibility:[`Exposed as one image with a label built from the prompt and the roles; everything inside is hidden from screen readers`,`Nothing in the scene is interactive`],motion:[`The prompt types itself, the send button presses and a soft pink-to-violet glow blooms behind it, dashed lines draw down and the three agents pop in one after another – then it starts over`,`Each status dot pops in last; the tool circles overlap slightly`,`With prefers-reduced-motion it shows the finished team and stays still`],responsive:[`Transparent background, so it sits on any light or dark surface`,`Keeps a 3 : 2 aspect ratio and scales to the width of its container – text and shapes are sized in container units`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};