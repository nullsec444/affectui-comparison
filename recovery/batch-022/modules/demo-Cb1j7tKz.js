import { t as t_1 } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { t as N } from "./component-BUgiZiPt.js";
const r = t_1();
const i = t();
const groups = [
    {
        id: `workspace`,
        title: `Set up your workspace`,
        tasks: [
            {
                id: `name`,
                label: `Choose a workspace name`
            },
            {
                id: `invite`,
                label: `Invite your teammates to collaborate`
            },
            {
                id: `calendar`,
                label: `Connect your calendar`
            }
        ]
    },
    {
        id: `billing`,
        title: `Set up billing`,
        tasks: [
            {
                id: `card`,
                label: `Add a payment method`
            },
            {
                id: `plan`,
                label: `Choose a plan`
            }
        ]
    },
    {
        id: `verify`,
        title: `Verify your account`,
        tasks: [
            {
                id: `email`,
                label: `Confirm your email address`,
                done: true
            }
        ]
    }
];
function OComponent() {
    let [key, setKey] = r.useState(0);
    return <div className={`setup-demo`}><N key={key} groups={groups} onEdit={()=>{}} onClose={()=>setKey((e)=>e + 1)}/></div>;
}
export { OComponent as default };
