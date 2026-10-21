var e={requirements:[`React 19`],whenToUse:[`Uploading documents, images or media – attachments, imports, asset libraries, onboarding`,`Several files at once, where people want to see what's done, what's still running and what failed`],whenNotToUse:[`A single avatar or logo – a simple picker with a preview is lighter`,`Huge uploads that run in the background for minutes – show them in a separate transfer panel`],usage:`import { Dropzone } from "@/components/ui/dropzone-clean";

export function Attachments() {
  return (
    <Dropzone
      accept={[".pdf", ".png", ".jpg", ".xlsx"]}
      maxSize={25 * 1024 * 1024}
      onUpload={(file, onProgress) =>
        new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.upload.onprogress = (e) => onProgress(e.loaded / e.total);
          xhr.onload = () => (xhr.status < 300 ? resolve() : reject(new Error("Upload failed")));
          xhr.onerror = () => reject(new Error("Upload failed – connection lost"));
          xhr.open("POST", "/api/upload");
          xhr.send(file);
        })
      }
      onChange={(items) => setAttachments(items.filter((i) => i.status === "done"))}
    />
  );
}`,props:[{name:`accept`,type:`string[]`,description:`Allowed extensions, e.g. [".pdf", ".png"]; any file when left out. Other files get a row with an error`},{name:`maxSize`,type:`number`,default:`25 MB`,description:`Largest file in bytes; bigger files get a "Too large" row`},{name:`onUpload`,type:`(file: File, onProgress: (p: number) => void) => Promise<void>`,description:`Uploads one file and reports progress from 0 to 1; reject to mark it as failed (the message is shown, Retry calls it again). Simulated when left out`},{name:`onChange`,type:`(items: UploadItem[]) => void`,description:`Every change of the list: { id, name, size, status, progress, error?, file? }`},{name:`hint`,type:`string`,description:`Text under the title; defaults to the accepted types and the size limit`},{name:`autoplay`,type:`boolean`,default:`false`,description:`Plays a sample drop of four files – for previews and landing pages`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`Tab`],description:`Reaches the drop area, then Retry and Remove in every row`},{keys:[`↵`],description:`On the drop area: opens the file picker (Space works too)`}],accessibility:[`The drop area is a button that opens the file picker, described by the accepted types and size`,`Every row has a progress bar with its value; Retry and Remove are named after the file`,`Finished, failed and rejected files are announced in a polite live region`],motion:[`Dragging files over the area fans the three little documents out, the dashed outline turns blue over a faint blue wash and the title counts the files`,`Rows grow in one after another; a thin blue bar fills, a small green check pops in when a file is done, and the summary in the card's last row shimmers while uploads run`,`A failed row gives a short shake and its bar turns red; removed rows fold away`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Fills its container up to 520px; long file names are cut with an ellipsis`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`chat-composer`,`ai-answer`,`glass-folder`]};export{e as docs};