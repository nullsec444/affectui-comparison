var e={requirements:[`React 19`],whenToUse:[`Two-step sign-in, email or phone verification, confirming a sensitive action with a one-time code`,`Any short code people copy from an email or SMS – paste and autofill fill every box at once`],whenNotToUse:[`Codes longer than about 8 characters or with free-form text – a plain text field is easier to read and correct`,`Passwords or PINs that must stay hidden – the boxes show what's typed`],usage:`import { useState } from "react";
import { OtpInput, type OtpStatus } from "@/components/ui/otp-input-clean";

export function VerifyEmail() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<OtpStatus>("idle");
  const [triesLeft, setTriesLeft] = useState(3);

  async function verify(value: string) {
    setStatus("verifying");
    const res = await fetch("/api/verify", { method: "POST", body: JSON.stringify({ code: value }) });
    if (res.ok) {
      setStatus("success");
      router.push("/dashboard");
    } else {
      setTriesLeft((n) => n - 1);
      setStatus("error");
    }
  }

  return (
    <OtpInput
      value={code}
      onChange={(next) => {
        setCode(next);
        if (status === "error" && next) setStatus("idle");
      }}
      onComplete={verify}
      status={status}
      errorMessage={\`That code didn't work. \${triesLeft} tries left.\`}
      separator
      autoFocus
      onResend={() => fetch("/api/send-code", { method: "POST" })}
      resendIn={30}
    />
  );
}`,props:[{name:`length`,type:`number`,default:`6`,description:`Number of boxes`},{name:`separator`,type:`boolean | number`,default:`false`,description:`A small dash between the boxes – true puts it in the middle, a number after that many boxes`},{name:`numeric`,type:`boolean`,default:`true`,description:`Digits only with the numeric keyboard on phones; false allows letters too, shown in capitals`},{name:`value`,type:`string`,description:`The code – makes the field controlled`},{name:`defaultValue`,type:`string`,default:`""`,description:`Starting code when uncontrolled`},{name:`onChange`,type:`(code: string) => void`,description:`Every change: typing, Backspace, paste, autofill and the clearing after an error`},{name:`onComplete`,type:`(code: string) => void`,description:`Called once the last box is filled by the user – the place to start verifying`},{name:`status`,type:`"idle" | "verifying" | "error" | "success"`,default:`"idle"`,description:`Verifying shimmers and locks the field, error shakes and shows the message, success morphs into the "Verified" chip`},{name:`errorMessage`,type:`ReactNode`,default:`"That code didn't work. Try again."`,description:`Shown below the boxes after an error, until the user types again`},{name:`clearOnError`,type:`boolean`,default:`true`,description:`Clears the boxes shortly after the shake, ready for the next try`},{name:`successLabel`,type:`string`,default:`"Verified"`,description:`Text in the chip on success`},{name:`onResend`,type:`() => void`,description:`Shows "Didn't get a code?" below the boxes with a countdown that becomes a tab-style Resend button; clicking restarts the countdown`},{name:`resendIn`,type:`number`,default:`30`,description:`Seconds until the code can be resent`},{name:`align`,type:`"start" | "center"`,default:`"start"`,description:`Where the boxes and the lines below them sit`},{name:`disabled`,type:`boolean`,default:`false`,description:`Dims the field and ignores input`},{name:`autoFocus`,type:`boolean`,default:`false`,description:`Focuses the field on mount (without scrolling)`},{name:`label`,type:`string`,default:`"Verification code"`,description:`Accessible name; the number of digits is added`},{name:`className`,type:`string`,description:`Extra class on the root`}],keyboard:[{keys:[`0–9`],description:`Fills the active box and moves on; typing on a filled box replaces it`},{keys:[`⌫`],description:`Clears the box and goes back one`},{keys:[`←`,`→`],description:`Moves between the filled boxes and the next empty one`},{keys:[`Home`,`End`],description:`Jumps to the first box, or to the next empty one`},{keys:[`⌘`,`V`],description:`Pastes a whole code – spaces and dashes are ignored`}],accessibility:[`One real text input carries the whole code, so screen readers hear one field ("Verification code, 6 digits") instead of six`,`autocomplete="one-time-code" lets iOS and Android offer the code from an SMS; inputMode="numeric" opens the number pad`,`Errors set aria-invalid and point to the message with aria-describedby; verifying, errors, success and resend are announced in a polite live region`],motion:[`A single blue focus outline glides from box to box with a thin, softly blinking blue caret; digits pop in out of a short blur`,`Pasted or autofilled codes fill the boxes one after another`,`Verifying: the digits turn gray and a lighter band passes over the white boxes. Error: a calm shake, a faint red fill and red digits, the message grows in below and the code fades out for the next try`,`Success: the boxes slide together while one frame morphs its width into a "Verified" chip with a faint green fill and the check draws in`,`With prefers-reduced-motion everything switches instantly`],responsive:[`Container query: the boxes shrink to fit their container – six boxes with a separator fit a 320px phone`,`Inputs use 16px text under the hood, so iOS doesn't zoom in on focus`,`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`combobox`,`segmented-control`,`button`,`toaster`]};export{e as docs};