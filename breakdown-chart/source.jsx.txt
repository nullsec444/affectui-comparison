// Derived from public demo JS via REA/Wakaru and scope-aware AST recovery. Not author-original source.
import { t } from "./jsx-runtime-CTsRTJUX.jsx";
import { n as T, t as N } from "./component-CHAr1UD2.jsx";
const r = t();
const i = {
  Backlog: `#a3a3a3`,
  Todo: `#8f8f8f`,
  "In progress": `#7aa2ff`,
  "In review": `#8b5cf6`,
  Done: `#2f6bff`,
  Canceled: `#c4c4c4`
};
const dimensions = [{
  key: `status`,
  label: `Status`,
  values: [`Backlog`, `Todo`, `In progress`, `In review`, `Done`, `Canceled`],
  icons: {
    Backlog: <T kind={`backlog`} color={i.Backlog} />,
    Todo: <T kind={`todo`} color={i.Todo} />,
    "In progress": <T kind={`progress`} color={i[`In progress`]} />,
    "In review": <T kind={`review`} color={i[`In review`]} />,
    Done: <T kind={`done`} color={i.Done} />,
    Canceled: <T kind={`canceled`} color={i.Canceled} />
  }
}, {
  key: `priority`,
  label: `Priority`,
  values: [`Urgent`, `High`, `Medium`, `Low`, `None`],
  colors: {
    Urgent: `#ec4899`,
    High: `#8b5cf6`,
    Medium: `#2f6bff`,
    Low: `#a9c1ff`,
    None: `#dedede`
  }
}, {
  key: `team`,
  label: `Team`,
  values: [`Design`, `Web`, `Mobile`, `Platform`],
  colors: {
    Design: `#ec4899`,
    Web: `#2f6bff`,
    Mobile: `#8b5cf6`,
    Platform: `#a9c1ff`
  }
}, {
  key: `type`,
  label: `Type`,
  values: [`Feature`, `Bug`, `Chore`],
  colors: {
    Feature: `#2f6bff`,
    Bug: `#ec4899`,
    Chore: `#d4d4d4`
  }
}];
const measures = [{
  key: `count`,
  label: `Task count`,
  unit: `tasks`
}, {
  key: `points`,
  label: `Story points`,
  unit: `points`,
  field: `points`
}];
const records = (() => {
  let e = 7;
  let t = () => ((e = e * 16807 % 2147483647) - 1) / 2147483646;
  let n = (e, n) => {
    let r = t() * n.reduce((acc, item) => acc + item, 0);
    for (let t = 0; t < e.length; t++) {
      if ((r -= n[t]) < 0) {
        return e[t];
      }
    }
    return e[e.length - 1];
  };
  return Array.from({
    length: 212
  }, () => ({
    status: n(dimensions[0].values, [16, 30, 22, 12, 48, 6]),
    priority: n(dimensions[1].values, [6, 18, 34, 22, 20]),
    team: n(dimensions[2].values, [18, 34, 22, 26]),
    type: n(dimensions[3].values, [52, 30, 18]),
    points: n([1, 2, 3, 5, 8], [18, 30, 26, 18, 8])
  }));
})();
function CComponent() {
  return <div className={`breakdown-demo`}><N title={`Sprint 24`} records={records} dimensions={dimensions} measures={measures} /></div>;
}
export { CComponent as default };
