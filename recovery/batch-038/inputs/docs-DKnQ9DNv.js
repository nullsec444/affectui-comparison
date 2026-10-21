var e={requirements:[`React 19`,`@hugeicons/react`,`@hugeicons/core-free-icons`,`App Shell, Segmented Control and Button (installed with it)`],whenToUse:[`The first minutes after sign-up in a workspace or AI product`,`Guided setup that people can skip and pick up again later`],whenNotToUse:[`Long forms with many required fields – use the Stepper Form`,`A single setting – show it inline instead of a whole flow`],usage:`import { OnboardingScreen } from "@/components/ui/onboarding";

export default function Page() {
  return (
    <OnboardingScreen
      workspace="Acme"
      user={{ name: "Alex Morgan" }}
      defaultStep={1}
      onComplete={(values) => api.finishOnboarding(values)}
      onNavigate={(label) => router.push(routes[label])}
    />
  );
}`,props:[{name:`defaultStep`,type:`1 | 2 | 3 | 4`,default:`2`,description:`Step shown first; the steps before it count as done`},{name:`onComplete`,type:`(values: OnboardingValues) => void`,description:`Called after Create agent (or skipping the last step) with workspace, slug, team size, tools, invites, role and template`},{name:`onNavigate`,type:`(label: string) => void`,description:`Called with the label of a sidebar item or a next step (Chat, Integrations, Analytics)`},{name:`workspace`,type:`string`,default:`"Acme"`,description:`Workspace name in the sidebar, the greeting and the first field`},{name:`user`,type:`{ name: string; avatar?: string }`,default:`{ name: "Alex Morgan" }`,description:`Account at the bottom of the sidebar; the first name is used in the greeting`},{name:`className`,type:`string`,description:`Extra class on the root`}],accessibility:[`Each step is a form: Enter continues, the primary button submits`,`Progress is a progressbar with the step name as its value text; the checklist marks the current step with aria-current`,`Tool toggles are switches, templates a radio group; email chips can be removed with their button or Backspace`,`Step transitions and checkmarks turn off with prefers-reduced-motion`],responsive:[`Fills its container – give it the full viewport height in your app`,`The checklist sits beside the step card on wide panels and moves below it on narrow ones`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"; colors are CSS variables on .ui-as`]};export{e as docs};