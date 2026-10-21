var e={requirements:[`React 19`],whenToUse:[`The dropdown behind the avatar in an app header`,`Nudging people to finish their profile, right next to the account actions`],whenNotToUse:[`Long menus with nested levels – use a full dropdown menu with submenus`,`Long onboarding flows with many steps – use a checklist like the Setup Guide instead`],usage:`import { ProfileMenu, SettingsIcon, LogoutIcon } from "@/components/ui/profile-menu-clean";

export function Account() {
  return (
    <ProfileMenu
      name="Lena Hartmann"
      email="lena.hartmann@fastmail.com"
      items={[
        { id: "settings", label: "Settings", icon: <SettingsIcon />, onSelect: openSettings },
        { id: "logout", label: "Logout", icon: <LogoutIcon />, onSelect: signOut },
      ]}
      setup={{ done: 3, total: 5, next: "Add a profile photo", onContinue: openProfile }}
    />
  );
}`,props:[{name:`name`,type:`string`,description:`Name of the signed-in user`},{name:`email`,type:`string`,description:`Email under the name, cut off with an ellipsis when long`},{name:`avatar`,type:`ReactNode`,description:`Replaces the default avatar, e.g. an <img>`},{name:`items`,type:`ProfileMenuItem[]`,description:`Actions with label, icon, optional badge and onSelect`},{name:`setup`,type:`ProfileSetup`,description:`Profile setup progress: done, total, the next step and onContinue – leave empty to hide`},{name:`className`,type:`string`,description:`Extra class on the card`}],keyboard:[{keys:[`Tab`],description:`Move into the menu`},{keys:[`↑`,`↓`],description:`Move between the actions`},{keys:[`Home`,`End`],description:`Jump to the first or last action`},{keys:[`Enter`,`Space`],description:`Run the focused action`}],accessibility:[`Actions are buttons in a menu role, so screen readers announce them as menu items`,`The setup bar is a progressbar with its percentage as value`],motion:[`The setup bar fills up when the card comes into view`,`Reduced motion shows it at once`],responsive:[`Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`],related:[`progress-tracker`]};export{e as docs};