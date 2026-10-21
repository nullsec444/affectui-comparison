import { t as t_1 } from "./react-BkAXpnfr.js";
const t = t_1();
const n = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`
};
const r = t.forwardRef(({ color = `currentColor`, size = 24, strokeWidth, absoluteStrokeWidth = false, className = ``, altIcon, showAlt = false, icon, primaryColor, secondaryColor, disableSecondaryOpacity = false, ...rest }, ref)=>{
    let strokeWidth_1 = strokeWidth === undefined ? undefined : absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth;
    let g = strokeWidth_1 === undefined ? {} : {
        strokeWidth: strokeWidth_1,
        stroke: `currentColor`
    };
    let _ = {
        ref,
        ...n,
        width: size,
        height: size,
        color: primaryColor || color,
        className,
        ...g,
        ...rest
    };
    let v = [
        ...showAlt && altIcon ? altIcon : icon
    ].sort(([, e], [, t])=>{
        let n = e.opacity !== undefined;
        if (t.opacity === undefined) {
            if (n) {
                return -1;
            }
            return 0;
        }
        return 1;
    }).map(([n, r])=>{
        let i = r.opacity !== undefined;
        let opacity = i && !disableSecondaryOpacity ? r.opacity : undefined;
        let o = secondaryColor ? {
            ...r.stroke === undefined ? {
                fill: i ? secondaryColor : primaryColor || color
            } : {
                stroke: i ? secondaryColor : primaryColor || color
            }
        } : {};
        return t.createElement(n, {
            ...r,
            ...g,
            ...o,
            opacity,
            key: r.key
        });
    });
    return <svg {..._}>{v}</svg>;
});
r.displayName = `HugeiconsIcon`;
export { r as t };
