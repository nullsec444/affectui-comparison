var e={requirements:[`React 19`],whenToUse:[`Billing portals and admin tools that show an invoice and let a team credit it`,`Product pages for invoicing software – a document that looks real and can be tried`],whenNotToUse:[`Printing or PDF generation – render a dedicated print layout instead`,`Invoices with dozens of lines – the credit tray is built for a handful`],usage:`import { InvoiceCredit } from "@/components/ui/invoice-credit";

export function Billing() {
  return (
    <InvoiceCredit
      invoiceNo="INV-2041"
      creditNo="CN-0117"
      lines={[
        { id: "plan", name: "Growth plan", qty: 1, rate: 1250, tax: 0.2 },
        { id: "api", name: "API calls (per 1k)", qty: 18420, rate: 0.42, tax: 0.2, group: "Metered usage" },
      ]}
      onIssue={(credits, total) => api.issueCreditNote(credits, total)}
    />
  );
}`,props:[{name:`seller / buyer`,type:`{ name, lines: string[] }`,description:`From and To blocks on the invoice`},{name:`invoiceNo / creditNo`,type:`string`,description:`Document numbers shown under Terms`},{name:`invoiceDate / dueDate / period`,type:`string`,description:`Dates shown on both documents`},{name:`lines`,type:`InvoiceLine[]`,description:`Each { id, name, qty, rate, tax, group? } – lines with a group are listed under a heading`},{name:`currency`,type:`string`,default:`"$"`,description:`Currency symbol`},{name:`onIssue`,type:`(credits, total) => void`,description:`Called when the credit note is issued, with the credited amount per line and the total incl. tax`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Moves through the switch, the actions, every line and amount`},{keys:[`Enter`],description:`Confirms an amount`}],accessibility:[`The switch is a tablist; the sheet in the back is hidden from screen readers and can't be focused`,`Credit lines are checkboxes with labels; amounts are labelled per line and stay within the line total`],motion:[`Switching slides the sheets: the chosen one comes forward, the other tucks behind it with only its top edge showing`,`Checkmarks draw in; the segmented thumb glides between Invoice and Credit note`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Follows its own width: below 560px the parties stack, the rate and tax columns hide and the credit tray drops the total column`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`]};export{e as docs};