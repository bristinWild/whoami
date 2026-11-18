export type Article = {
    slug: string;
    cmd: string;
    title: string;
    summary: string;
    /** ISO date, e.g. "2026-11-18". */
    date: string;
    readingTime: string;
    cover: { src: string; alt: string };
    tags: string[];
};

export const articles: Article[] = [

    {
        slug: "what-you-see-isnt-what-you-sign",
        cmd: "safe-signing",
        title: "What You See Isn't What You Sign",
        summary:
            "Why the biggest crypto thefts broke the screen, not the code, and what it takes to make signing safe.",
        date: "2026-11-19",
        readingTime: "8 min read",
        cover: {
            src: "/articles/what-you-see-isnt-what-you-sign.png",
            alt: "A transfer on screen next to the contract upgrade actually signed, under the title: what you see isn't what you sign",
        },
        tags: ["security", "signing", "ethereum", "logos"],
    },
    {
        slug: "your-wallet-has-already-told-someone",
        cmd: "rpc-privacy",
        title: "Your Wallet Has Already Told Someone",
        summary:
            "How hosted RPC providers see your balances, link your wallets and watch your trades, and what's being done about it.",
        date: "2026-11-18",
        readingTime: "8 min read",
        cover: {
            src: "/articles/article1.png",
            alt: "Logged wallet requests behind the title: your wallet has already told someone",
        },
        tags: ["privacy", "rpc", "ethereum", "logos"],
    },
];

export function getArticle(slug: string): Article | undefined {
    return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
}