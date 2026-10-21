# affectUI paid public-demo recovery

Status: PARTIAL: full behavioural equivalence is NOT established

## Scope

- Canonical live catalog pinned at `current-catalog.js` (sha256 `272e920a5e885f60…`), byte-verified against affectui.com: 676/676 assets matched.
- 72 paid components, 111 paid variants (`pro: true` + every `clean` sibling). Free variants are excluded from the published index; their old directories are untouched.
- Complete transitive app-owned graph: 567 JavaScript modules, each recovered with REA 6.7.0 (Wakaru 664fa06782a6…) from the published chunk bytes.
- Recovered output is `.jsx`. No TypeScript types, original identifiers, comments, or author file names are claimed recovered. Hashed chunk names are the published names.
- Original frame replays the unmodified published chunk sources; reconstructed frame builds only from the recovered `.jsx` graph + official npm React/ReactDOM. The gate fails if any original app chunk appears in the reconstructed bundle inputs.

## Verification

- Routes with recorded Chrome evidence: 111 / 111.
- Checks: {"build": 111, "dom": 107, "interactions": 59, "inventory": 111, "jsx_source": 111, "reachable_recovered": 111, "scenario_current": 111, "visual": 94}
- Final: 54 accepted, 57 partial, 0 blocked.
- Interaction steps applied: 1177; controls with no exercisable effect: 75.
- Headless Chrome via Playwright, 1280x900, UTC, seeded Math.random, fixed virtual epoch, common 16ms rAF grid, CSS animations paused at a 1200ms phase. No screenshot masks. Acceptance requires zero differing pixels against the original frame AND zero original-vs-original noise, plus identical serialized DOM/control state.
- Routes with original-vs-original noise (not accepted even if replay matches): 9: agent-run, agent-steering.clean, agent-tree, agent-tree.clean, analytics, crm, folder, metrics-dashboard, project-flow
- Routes with replay pixel differences: 14: agent-cursors.clean, agent-run, agent-steering.clean, agent-tree, agent-tree.clean, compact-breakdown, compact-breakdown.clean, crm, integration-picker.clean, integrations, metrics-dashboard, settings-billing
- Routes with runtime errors: 0

## Per-route status

| route | status | failed checks |
|---|---|---|
| agent-chat | partial | interactions |
| agent-cursors | partial | interactions |
| agent-cursors.clean | partial | visual, dom, interactions |
| agent-gallery | partial | interactions |
| agent-inbox | partial | interactions |
| agent-inbox.clean | partial | interactions |
| agent-lanes | partial | interactions |
| agent-lanes.clean | accepted |  |
| agent-plan | accepted |  |
| agent-plan.clean | accepted |  |
| agent-run | partial | visual, interactions |
| agent-steering | accepted |  |
| agent-steering.clean | partial | visual, interactions |
| agent-tree | partial | visual, dom |
| agent-tree.clean | partial | visual, dom |
| ai-answer | accepted |  |
| ai-answer.clean | accepted |  |
| ai-workspace | partial | interactions |
| analytics | partial | visual |
| app-directory | partial | interactions |
| app-shell | accepted |  |
| app-shell-flat | accepted |  |
| approval-card | accepted |  |
| approval-card.clean | accepted |  |
| assistant-home | partial | interactions |
| autonomy-dial | accepted |  |
| autonomy-dial.clean | partial | interactions |
| billing-schedule | accepted |  |
| billing-schedule.clean | accepted |  |
| blur-crossfade | accepted |  |
| breakdown-chart | partial | interactions |
| breakdown-chart.clean | partial | interactions |
| chat-composer | partial | interactions |
| chat-composer.clean | partial | interactions |
| cited-answer | accepted |  |
| cited-answer.clean | accepted |  |
| client-context | accepted |  |
| combobox | accepted |  |
| combobox.clean | accepted |  |
| command-menu | partial | interactions |
| command-menu.clean | partial | interactions |
| comments-panel | accepted |  |
| comments-panel.clean | accepted |  |
| compact-breakdown | partial | visual, interactions |
| compact-breakdown.clean | partial | visual, interactions |
| context-window | partial | interactions |
| context-window.clean | partial | interactions |
| crm | partial | visual, interactions |
| data-table | partial | interactions |
| data-table.clean | accepted |  |
| date-range-picker | partial | interactions |
| date-range-picker.clean | accepted |  |
| delegate-board | partial | interactions |
| delegate-board.clean | partial | interactions |
| dropzone | accepted |  |
| dropzone.clean | partial | interactions |
| evals | accepted |  |
| experiment-card | accepted |  |
| experiment-card.clean | accepted |  |
| files | partial | interactions |
| folder | partial | visual, interactions |
| glass-folder | accepted |  |
| glow-keyboard | accepted |  |
| gradient-floor | accepted |  |
| gradient-text | accepted |  |
| inline-diff | accepted |  |
| inline-diff.clean | accepted |  |
| integration-flow | accepted |  |
| integration-picker | accepted |  |
| integration-picker.clean | partial | visual, interactions |
| integration-settings | partial | interactions |
| integration-settings.clean | partial | interactions |
| integrations | partial | visual, interactions |
| invoice-credit | partial | interactions |
| kpi-board | accepted |  |
| kpi-chart | accepted |  |
| kpi-chart.clean | accepted |  |
| memory-panel | partial | interactions |
| memory-panel.clean | partial | interactions |
| metrics-dashboard | partial | visual, interactions |
| model-picker | partial | interactions |
| model-picker.clean | partial | interactions |
| onboarding | accepted |  |
| outreach-branches | accepted |  |
| permission-request | accepted |  |
| permission-request.clean | accepted |  |
| pricing-plans | accepted |  |
| project-card | partial | interactions |
| project-card.clean | partial | interactions |
| project-flow | partial | visual |
| prompt-library | partial | interactions |
| prompt-library.clean | partial | interactions |
| settings-billing | partial | visual, interactions |
| setup-guide | partial | interactions |
| setup-guide.clean | partial | interactions |
| stepper-form | accepted |  |
| stepper-form.clean | accepted |  |
| task-board | partial | interactions |
| thinking-state | accepted |  |
| thinking-state.clean | accepted |  |
| tilt-card | accepted |  |
| toaster | accepted |  |
| toaster.clean | accepted |  |
| trace-waterfall | accepted |  |
| trace-waterfall.clean | accepted |  |
| usage-meter | partial | visual, interactions |
| usage-meter.clean | partial | visual, dom |
| voice-orb | accepted |  |
| world-map | accepted |  |
| writing-assistant | partial | interactions |
| writing-assistant.clean | partial | interactions |
