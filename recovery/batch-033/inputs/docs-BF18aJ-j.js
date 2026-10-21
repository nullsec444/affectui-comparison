var e={requirements:[`React 19`],whenToUse:[`Small databases people edit in place – tools, vendors, budgets, contacts`,`Data that moves to and from Excel or Google Sheets with copy and paste`,`Lists where people pick several rows to act on`],whenNotToUse:[`Thousands of rows – add virtualisation, filters and server paging with a grid library`,`Editing one record with many fields – a form is clearer`],usage:`import { DataTable, TextColumnIcon, TagColumnIcon } from "@/components/ui/data-table";

const columns = [
  { key: "tool", label: "Tool", icon: <TextColumnIcon />, type: "title" },
  { key: "category", label: "Category", icon: <TagColumnIcon />, type: "tag" },
  { key: "website", label: "Website", type: "link" },
  { key: "seats", label: "Seats", type: "number" },
];

export function Stack() {
  return (
    <DataTable
      title="Design Stack"
      columns={columns}
      rows={rows}
      tagTones={{ Design: "violet" }}
      onRowsChange={save}
    />
  );
}`,examples:[{title:`Read only`,code:`<DataTable title="Vendors" columns={columns} rows={rows} editable={false} />`},{title:`Fixed tag choices and a locked column`,code:`const columns = [
  { key: "name", label: "Name", type: "title" },
  { key: "stage", label: "Stage", type: "tag", options: ["Lead", "Trial", "Customer"] },
  { key: "id", label: "ID", type: "text", editable: false },
];`}],props:[{name:`title`,type:`string`,description:`Heading in the gray tray, also the grid's accessible name`},{name:`icon`,type:`ReactNode`,description:`Icon in front of the heading`},{name:`columns`,type:`DataColumn[]`,description:`key, label, icon, width, type (title, tag, link, number, text), editable and options for tags`},{name:`rows`,type:`DataRow[]`,description:`Starting rows – an id, an optional logo and a value per column key`},{name:`tagTones`,type:`Record<string, TagTone>`,description:`Tag color per tag text: blue, violet, pink, green, amber or gray`},{name:`editable`,type:`boolean`,default:`true`,description:`false keeps selection and copy, but turns off editing, paste, delete and Add row`},{name:`onRowsChange`,type:`(rows: DataRow[]) => void`,description:`Called with all rows after every edit, paste, clear, delete, undo or redo`},{name:`onSelectionChange`,type:`(ids: string[]) => void`,description:`Called with the ids of the checked rows`},{name:`className`,type:`string`,description:`Extra class on the tray`}],keyboard:[{keys:[`Arrow keys`],description:`Move the active cell`},{keys:[`Shift`,`Arrow keys`],description:`Grow the selected range`},{keys:[`⌘ / Ctrl`,`Arrow keys`],description:`Jump to the first or last row or column`},{keys:[`Tab`],description:`Move to the next cell, Shift + Tab to the previous one`},{keys:[`Enter`,`F2`],description:`Edit the active cell; Enter saves and moves down`},{keys:[`Any character`],description:`Start editing with that character`},{keys:[`Escape`],description:`Cancel an edit or collapse the range`},{keys:[`Delete`,`Backspace`],description:`Clear the selected cells`},{keys:[`⌘ / Ctrl`,`C / X / V`],description:`Copy, cut and paste – works with Excel and Google Sheets`},{keys:[`⌘ / Ctrl`,`Z`],description:`Undo, add Shift to redo`},{keys:[`⌘ / Ctrl`,`A`],description:`Select every cell`}],accessibility:[`The table is a grid with selected cells marked, so screen readers follow the active cell and the range`,`Column headers are sort buttons and report the sort direction`,`Row checkboxes have labels; the header checkbox shows a mixed state when only some rows are checked`],motion:[`Tag picker drops in, sort arrows turn, checkboxes pop – reduced motion turns all of it off`],responsive:[`The table scrolls sideways inside the card on narrow screens instead of squeezing the columns`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],performance:[`Made for up to a few hundred rows; every edit is one state update and can be undone (last 100 steps)`],related:[`kpi-chart`,`change-summary`]};export{e as docs};