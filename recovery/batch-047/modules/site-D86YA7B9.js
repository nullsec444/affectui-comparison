export const s = {
    googleTagId: `G-KSXWJT5S69`,
    metaPixelId: `1121395016946016`
};
const t = {
    name: `affectUI`,
    registry: `@affectui`,
    url: `https://www.affectui.com`,
    tagline: `Agent-ready React UI for AI products – one file each, no dependencies.`,
    author: {
        name: `Flo`,
        url: `https://x.com/flohoeller`
    },
    contactEmail: `hello@affectui.com`,
    promo: {
        enabled: false,
        code: `AFFECT20`,
        percent: 20,
        delaySeconds: 45,
        hours: 24
    },
    links: {
        pro: `/pricing`,
        github: `https://github.com/flohoeller/affectui`,
        feedback: `#`,
        x: `https://x.com/flohoeller`,
        support: `/contact?topic=support`
    }
};
const n = {
    pnpm: `pnpm dlx`,
    npm: `npx`,
    yarn: `yarn dlx`,
    bun: `bunx --bun`
};
const r = (e, r = `pnpm`)=>`${n[r]} shadcn@latest add ${t.url}/r/${e}.json`;
const i = {
    currency: `USD`,
    individual: 199,
    team: 499,
    teamSeats: 10
};
const a = [
    {
        id: `founder`,
        name: `Founding offer`,
        badge: `Founder price`,
        price: 99,
        until: 25
    },
    {
        id: `early`,
        name: `Early access`,
        badge: `Early access price`,
        price: 149,
        until: 50
    }
];
const o = {
    featured: [
        `delegate-board`,
        `agent-lanes`
    ]
};
export { o as a, i, a as n, t as o, n as r, r as t };
