var e={requirements:[`React 19`],whenToUse:[`Onboarding, checkout or setup wizards where one long form would feel like too much at once`,`Flows whose later steps depend on earlier answers, ending in a review before anything is created`],whenNotToUse:[`Two or three fields – a single form is faster`,`Settings people jump around in freely – use tabs or sections instead`],usage:`import { StepperForm, StepperField, StepperInput, StepperTags, StepperChoices, StepperReview, type Step } from "@/components/ui/stepper-form";

type Values = { name: string; slug: string; invites: string[]; plan: string };

const steps: Step<Values>[] = [
  {
    id: "workspace",
    title: "Workspace",
    heading: "Name your workspace",
    render: ({ values, setValues }) => (
      <>
        <StepperField name="name" label="Workspace name">
          <StepperInput value={values.name} onChange={(e) => setValues({ name: e.target.value, slug: slugify(e.target.value) })} />
        </StepperField>
        <StepperField name="slug" label="Workspace URL">
          <StepperInput prefix="acme.app/" value={values.slug} onChange={(e) => setValues({ slug: e.target.value })} />
        </StepperField>
      </>
    ),
    validate: (v) => ({ name: v.name.trim() ? undefined : "Give your workspace a name" }),
  },
  {
    id: "team",
    title: "Team",
    render: ({ values, setValues }) => (
      <StepperField name="invites" label="Email addresses" optional>
        <StepperTags value={values.invites} onChange={(invites) => setValues({ invites })} />
      </StepperField>
    ),
  },
  {
    id: "plan",
    title: "Plan",
    render: ({ values, setValues }) => (
      <StepperChoices label="Plan" value={values.plan} options={plans} onChange={(plan) => setValues({ plan })} />
    ),
  },
  {
    id: "review",
    title: "Review",
    render: ({ values, goTo }) => (
      <StepperReview
        onEdit={goTo}
        rows={[
          { label: "Workspace", value: values.name, step: "workspace" },
          { label: "Plan", value: values.plan, step: "plan" },
        ]}
      />
    ),
  },
];

export function Onboarding() {
  return (
    <StepperForm<Values>
      steps={steps}
      initialValues={{ name: "", slug: "", invites: [], plan: "pro" }}
      submitLabel="Create workspace"
      onComplete={(values) => api.createWorkspace(values)}
    />
  );
}`,props:[{name:`steps`,type:`Step<V>[]`,description:`{ id, title, heading?, description?, render(ctx), validate?(values) } – render gets values, setValues, errors, goTo and next; validate returns messages by field name`},{name:`initialValues`,type:`V`,description:`Values shared by all steps, so Back and Edit keep what was entered`},{name:`onComplete`,type:`(values: V) => void | Promise<void>`,description:`Runs on the last step; a promise shows the submitting label until it settles, a thrown error is shown next to the button`},{name:`initialStep`,type:`number`,default:`0`,description:`Index of the first step shown`},{name:`step`,type:`number`,description:`Controlled step index; pair with onStepChange`},{name:`onStepChange`,type:`(step: number) => void`,description:`Called whenever the step changes`},{name:`submitLabel`,type:`string`,default:`"Finish"`,description:`Label of the button on the last step`},{name:`submittingLabel`,type:`string`,default:`"Creating…"`,description:`Label while onComplete runs`},{name:`success`,type:`(values: V, reset: () => void) => ReactNode`,description:`Replaces the steps once done – StepperSuccess gives the popping check, a heading and a line`},{name:`className`,type:`string`,description:`Extra class on the root`},{name:`StepperField`,type:`{ name, label, hint?, optional?, children }`,description:`Label, control and inline message for the field name in validate; the control shakes when Continue finds a problem`},{name:`StepperInput`,type:`InputHTMLAttributes & { prefix? }`,description:`A text field wired to its StepperField; prefix shows fixed text like "acme.app/"`},{name:`StepperTags`,type:`{ value, onChange, validate?, max?, placeholder? }`,description:`Entries as chips – emails by default; Enter, comma or a pasted list add, × or Backspace remove`},{name:`StepperChoices`,type:`{ value, onChange, options, label }`,description:`Selectable cards { value, title, aside?, description?, badge? } as a radio group with a gliding ring`},{name:`StepperReview`,type:`{ rows, onEdit? }`,description:`A summary { label, value, step? } – rows with a step get an Edit link (pass goTo)`}],keyboard:[{keys:[`↵`],description:`Continues (in a chip field: adds the typed entry first, Continue when it's empty)`},{keys:[`Tab`],description:`Moves through the fields, then Back and Continue`},{keys:[`←`,`→`],description:`In the plan cards: moves and selects; ↵ picks and continues`},{keys:[`,`,`⌫`],description:`In a chip field: comma adds, Backspace in the empty field removes the last chip`}],accessibility:[`The steps are an ordered list with aria-current="step"; finished steps are buttons that jump back`,`On narrow screens the list stays for screen readers while the compact "Step 2 of 4" text shows on screen`,`The new step's first field (or its heading) gets the focus; after a failed Continue the first invalid field does`,`Fields carry aria-invalid and point to their message with aria-describedby; "Step 2 of 4: Team" and errors are announced in a polite live region`,`Continue looks dimmed while the step isn't valid but still answers, so keyboard and screen reader users hear what's missing`],motion:[`A finished step swaps its number for a check that draws itself in`,`Steps slide in from the side you're heading to with a short fade, while the old one slides out the other way`,`The card glides to the height of each step; the primary button glides to the width of its new label`,`An invalid field shakes once and its message folds in; chips pop in and fold away`,`The plan ring glides between cards; the success check pops in`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Fills its container up to 520px and works down to 320px`,`Below 420px the steps collapse to "Step 2 of 4 · Team", plan cards stack and review rows wrap`,`Touch screens get 16px fields (no zoom on iOS) and buttons of at least 40px; the footer sticks to the bottom in long pages`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`setup-guide`,`progress-tracker`,`combobox`,`segmented-control`]};export{e as docs};