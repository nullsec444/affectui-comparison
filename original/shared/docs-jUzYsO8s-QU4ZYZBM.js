import "./chunk-CTH3ASD6.js";

// current-assets/docs-jUzYsO8s.js
var e = { requirements: [`React 19`], whenToUse: [`Placeholders while cards, lists or profiles load, shaped like the content that will arrive`, `A shimmering status label while an AI answer or a long task is being generated`], whenNotToUse: [`Waits under ~300 ms \u2013 a flash of skeletons feels slower than showing nothing`, `Progress you can measure; a progress bar tells the user how long is left`], usage: `import { Skeleton, ShimmerText } from "@/components/ui/shimmer-loader";

export function PostSkeleton() {
  return (
    <div aria-busy="true" className="flex items-center gap-3">
      <Skeleton circle width={36} />
      <div className="grid gap-2">
        <Skeleton width={120} height={10} />
        <Skeleton width={80} height={8} />
      </div>
    </div>
  );
}

export function Thinking() {
  return <ShimmerText>Generating summary\u2026</ShimmerText>;
}`, props: [{ name: `Skeleton \xB7 width`, type: `number | string`, default: `"100%"`, description: `Width \u2013 numbers are px, strings any CSS length` }, { name: `Skeleton \xB7 height`, type: `number | string`, default: `12`, description: `Height \u2013 numbers are px` }, { name: `Skeleton \xB7 radius`, type: `number | string`, default: `6`, description: `Corner radius` }, { name: `Skeleton \xB7 circle`, type: `boolean`, default: `false`, description: `Round shape that uses width for both sides, e.g. for avatars` }, { name: `Skeleton \xB7 className / style`, type: `string / CSSProperties`, description: `Extra class or inline styles on the block` }, { name: `ShimmerText \xB7 children`, type: `ReactNode`, description: `The label the highlight runs through` }, { name: `ShimmerText \xB7 duration`, type: `number`, default: `2`, description: `Seconds for one pass of the highlight` }, { name: `ShimmerText \xB7 className`, type: `string`, description: `Extra class \u2013 font size and weight are inherited` }], accessibility: [`Skeletons are aria-hidden \u2013 put aria-busy="true" on the container that is loading`, `ShimmerText stays real text, so screen readers read the label normally`], motion: [`The skeleton highlight is pinned to the viewport, so all blocks share one sweep that travels across them together`, `Reduced motion shows static placeholders and plain text`], responsive: [`Skeletons fill their container by default; set width for fixed shapes`, `Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"`] };
export {
  e as docs
};
