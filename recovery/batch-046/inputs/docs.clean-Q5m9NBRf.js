var e={requirements:[`React 19`],whenToUse:[`The settings of one connected service – a store, an ad account, a data source`,`Forms that should only save when someone confirms, with a clear way to discard`],whenNotToUse:[`Long settings pages with many sections – split them into separate cards or pages`],usage:`import { IntegrationSettings } from "@/components/ui/integration-settings-clean";

export function Store() {
  return (
    <IntegrationSettings
      name="Shopify store"
      logo={<ShopifyLogo />}
      count={128}
      meta="Connected on March 4, 2026"
      defaultValues={{ siteUrl: "lumen-studio.com", timeZone: "(GMT +01:00) Berlin" }}
      onGenerateKey={() => api.createKey()}
      onSave={(values) => api.saveSettings(values)}
    />
  );
}`,props:[{name:`name`,type:`string`,description:`Name of the service`},{name:`logo`,type:`ReactNode`,description:`Logo in the small white tile of the header`},{name:`count`,type:`number`,description:`Small number next to the name`},{name:`meta`,type:`string`,description:`Line under the name; switching off shows a paused note instead`},{name:`defaultValues`,type:`Partial<IntegrationValues>`,description:`enabled, siteUrl, timeZone and apiKey to start with`},{name:`siteHint`,type:`string`,description:`Helper text under the address field`},{name:`timeZones`,type:`string[]`,description:`Choices in the time zone picker`},{name:`onGenerateKey`,type:`() => string | Promise<string>`,description:`Creates a key – a random demo key without it`},{name:`onSave`,type:`(values) => void | Promise<void>`,description:`Called with all values from the save row at the bottom of the card`},{name:`onToggle`,type:`(enabled: boolean) => void`,description:`Called when the switch changes`}],keyboard:[{keys:[`Space`],description:`Toggle the switch`},{keys:[`Tab`],description:`Move through the key actions, the address and the time zone`},{keys:[`Escape`],description:`Close the time zone picker`}],accessibility:[`The toggle is a real switch; the address field reports invalid input and points to its hint`,`A new key is announced together with the reminder to copy it`],motion:[`Switching off folds the settings away, the save row slides open at the bottom of the card on changes – reduced motion turns this off`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`app-directory`,`data-table`]};export{e as docs};