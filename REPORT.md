# affectUI paid public-demo recovery

Status: PARTIAL: full behavioural equivalence is NOT established

Generated from `acceptance-results.json`; report written 2026-10-22T12:14:39.759682+00:00.

## Scope

- Canonical live catalog pinned at `current-catalog.js` (sha256 `272e920a5e885f60f9295ab4f8a12b13d7b32ed13ebd69a351121cc8e8b7cfb2`).
- Public byte audit: 676/676 pinned files matched affectui.com; catalog entry still live: True.
- 72 paid components, 111 paid variants (`pro: true` + every `clean` sibling). 40 free components / 57 free variants are excluded from the published index; their old directories are untouched.
- Complete transitive app-owned graph: 567 JavaScript modules. Recovered with REA 6.7.0 (https://github.com/morluto/rea; Wakaru sha256 `664fa06782a6…`).
- Recovered output is `.jsx`. No TypeScript types, original identifiers, comments or author file names are claimed recovered. Hashed chunk names are the published names.
- The original frame replays the unmodified published chunk sources; the reconstructed frame builds only from the recovered `.jsx` graph plus official npm React/ReactDOM. The gate fails if any original app chunk appears in the reconstructed bundle inputs.

## Verification (from acceptance-results.json)

- Acceptance record sha256 `1fe0dada43f3948166a862a6023bfe2bf213bc71d4aac54a74a49c833765aecd` (published record).
- Routes with recorded Chrome evidence: 111 / 111.
- Checks passed per check: `{"build": 111, "dom": 111, "hosting": 111, "interactions": 111, "inventory": 111, "jsx_source": 111, "reachable_recovered": 111, "scenario_current": 111, "visual": 111}`.
- Latest per-route results; no single full gate on the current harness: 111 accepted, 0 partial, 0 blocked; structural_errors=[].
- Interaction steps: 1246 discovered, 1246 applied, 0 skipped, 0 not identical, 86 with no measured DOM/pixel effect in the original demo.
- Acceptance requires zero differing pixels against the original frame, zero original-vs-original noise, identical serialized DOM/control state, and every enumerated control exercised.
- Routes with original-vs-original noise (not accepted even if replay matches): 0
- Routes with replay pixel differences: 0
- Routes with runtime/request errors: 0
- Recorded scenario: 1280x900 UTC; seeded RNG; fixed virtual epoch; epoch-aligned 16ms rAF; native CSS timeline frozen before navigation and animation phase 1200ms; all original initial controls retained with real prerequisite gestures; exact unmodified screenshot and serialized DOM comparisons. No masks or excluded unreachable controls.

## Failures

- `failure-table.json` records 0 failed check(s) across 0 route(s); by check: `{}`.

## Original determinism

- Three independent original runs on 9 noise-sensitive route(s): pass=True, inputs_unchanged=True, 2026-10-22T03:15:29.188Z → 2026-10-22T03:16:41.167Z.
- Evidence: determinism-results.json (per-run image/state hashes and pairwise pixel counts).

## Recorded full gate

- Command: `node full-gate.cjs final-gate.log`.
- Started: 2026-10-22T03:16:49.479Z; finished: 2026-10-22T05:48:39.928Z.
- Subprocess exits: node browser.cjs exit 0, node acceptance.cjs exit 1, node failure-table.cjs exit 0.
- Inputs unchanged during the gate: True; routes current: True; gate pass: False.
- Log: `final-gate.log` (sanitized published copy, sha256 `3987819e5c2d980202e200b2d31ef359c4a658c2a9c61dd06944f4670f7246b0`; recorded raw sha256 `3987819e5c2d980202e200b2d31ef359c4a658c2a9c61dd06944f4670f7246b0`).

## Live comparison

- Last recorded live check: 2026-10-21T21:10:05.533Z for published commit `a9103d58ee3d`; pass=True over 0 status pages and 6 rendered route pairs; evidence in live-pages-check.json.
- URL: https://nullsec444.github.io/affectui-comparison/

## Hosting adaptation (disclosed)

- The demos reference media as origin-root paths (`/avatars/…`). The published copy is served from a subpath, so the emitted bundles rewrite those literal prefixes to document-relative ones (`../avatars/…`). The recovered `.jsx` sources keep the original bytes; only build output is rewritten. The gate check `hosting` fails if any origin-root asset literal survives in an emitted bundle.
- Font URLs inside the copied CSS are made stylesheet-relative for the same reason; no other CSS byte changes.

## Evidence and limits

- Route failure table: failure-table.json (proof paths point at the artifact that matches each recorded mismatch kind).
- Raw REA outputs and per-batch records backing recovery-index.json and jsx-analysis.json are published under recovery/ with host scratch paths anonymised as [host].
- Full rendered DOM, control states, step diffs and pixel captures: distributed in the archive under browser-evidence/; summarised in browser-results.json and acceptance-results.json. They are not copied into the static site.
- Controls whose original-demo action produced no measured DOM or pixel change are recorded per step (`original_effect.non_effect`, 86 step(s)) with their before/after capture in the archive; that is documentation of a no-op, not evidence of behavioural equivalence.
- Canonical acceptance.cjs is unchanged; no threshold, tolerance, scenario version or exit-code condition was relaxed.
- Files graph inspection: demo-CUdsyn6m.jsx passes the live setB state setter to the tab component; component-qs8CseUl.jsx forwards clicks through its controlled-state hook. The template card has no onClick in the original demo either. browser.cjs deliberately deletes the transient reconstructed_effect before serialization; an absent field is not a missing component handler. Independent normal-clock measurements: files-behavior-check.json.
- Nothing here proves behaviour outside the recorded scenario (other viewports, human input timing, network or persistence).
- Published in per-route mode at the owner's request: each route's status is its latest recorded run, and those runs used 5 browser.cjs revisions (`dbe6ae99`: 70, `59d803cc`: 31, `5f9a7c39`: 5, `0dd849b0`: 3, `7232d4db`: 2 routes). No single full gate ran on the final harness.
- Known flake: agent-lanes failed 1 of 2 consecutive runs on the final harness at step 0 (reconstructed frame only: "Needs you" badge offset by about 1 px, 366 px; cause not isolated). Its recorded status is the passing run.

## Per-route status

| route | status | failed checks |
|---|---|---|
| agent-chat | accepted | — |
| agent-cursors | accepted | — |
| agent-cursors.clean | accepted | — |
| agent-gallery | accepted | — |
| agent-inbox | accepted | — |
| agent-inbox.clean | accepted | — |
| agent-lanes | accepted | — |
| agent-lanes.clean | accepted | — |
| agent-plan | accepted | — |
| agent-plan.clean | accepted | — |
| agent-run | accepted | — |
| agent-steering | accepted | — |
| agent-steering.clean | accepted | — |
| agent-tree | accepted | — |
| agent-tree.clean | accepted | — |
| ai-answer | accepted | — |
| ai-answer.clean | accepted | — |
| ai-workspace | accepted | — |
| analytics | accepted | — |
| app-directory | accepted | — |
| app-shell | accepted | — |
| app-shell-flat | accepted | — |
| approval-card | accepted | — |
| approval-card.clean | accepted | — |
| assistant-home | accepted | — |
| autonomy-dial | accepted | — |
| autonomy-dial.clean | accepted | — |
| billing-schedule | accepted | — |
| billing-schedule.clean | accepted | — |
| blur-crossfade | accepted | — |
| breakdown-chart | accepted | — |
| breakdown-chart.clean | accepted | — |
| chat-composer | accepted | — |
| chat-composer.clean | accepted | — |
| cited-answer | accepted | — |
| cited-answer.clean | accepted | — |
| client-context | accepted | — |
| combobox | accepted | — |
| combobox.clean | accepted | — |
| command-menu | accepted | — |
| command-menu.clean | accepted | — |
| comments-panel | accepted | — |
| comments-panel.clean | accepted | — |
| compact-breakdown | accepted | — |
| compact-breakdown.clean | accepted | — |
| context-window | accepted | — |
| context-window.clean | accepted | — |
| crm | accepted | — |
| data-table | accepted | — |
| data-table.clean | accepted | — |
| date-range-picker | accepted | — |
| date-range-picker.clean | accepted | — |
| delegate-board | accepted | — |
| delegate-board.clean | accepted | — |
| dropzone | accepted | — |
| dropzone.clean | accepted | — |
| evals | accepted | — |
| experiment-card | accepted | — |
| experiment-card.clean | accepted | — |
| files | accepted | — |
| folder | accepted | — |
| glass-folder | accepted | — |
| glow-keyboard | accepted | — |
| gradient-floor | accepted | — |
| gradient-text | accepted | — |
| inline-diff | accepted | — |
| inline-diff.clean | accepted | — |
| integration-flow | accepted | — |
| integration-picker | accepted | — |
| integration-picker.clean | accepted | — |
| integration-settings | accepted | — |
| integration-settings.clean | accepted | — |
| integrations | accepted | — |
| invoice-credit | accepted | — |
| kpi-board | accepted | — |
| kpi-chart | accepted | — |
| kpi-chart.clean | accepted | — |
| memory-panel | accepted | — |
| memory-panel.clean | accepted | — |
| metrics-dashboard | accepted | — |
| model-picker | accepted | — |
| model-picker.clean | accepted | — |
| onboarding | accepted | — |
| outreach-branches | accepted | — |
| permission-request | accepted | — |
| permission-request.clean | accepted | — |
| pricing-plans | accepted | — |
| project-card | accepted | — |
| project-card.clean | accepted | — |
| project-flow | accepted | — |
| prompt-library | accepted | — |
| prompt-library.clean | accepted | — |
| settings-billing | accepted | — |
| setup-guide | accepted | — |
| setup-guide.clean | accepted | — |
| stepper-form | accepted | — |
| stepper-form.clean | accepted | — |
| task-board | accepted | — |
| thinking-state | accepted | — |
| thinking-state.clean | accepted | — |
| tilt-card | accepted | — |
| toaster | accepted | — |
| toaster.clean | accepted | — |
| trace-waterfall | accepted | — |
| trace-waterfall.clean | accepted | — |
| usage-meter | accepted | — |
| usage-meter.clean | accepted | — |
| voice-orb | accepted | — |
| world-map | accepted | — |
| writing-assistant | accepted | — |
| writing-assistant.clean | accepted | — |
