import type { Element, ElementContent, Root, RootContent, Text } from "hast";


const SKIP = new Set(["code", "pre", "kbd", "samp", "h1", "h2", "h3", "h4", "h5", "h6"]);

const WORD = /[\p{L}\p{N}]+/gu;

/** How many leading characters of a word to emphasise. */
function prefixLength(len: number): number {
    if (len <= 3) return 1;
    if (len === 4) return 2;
    return Math.ceil(len / 2);
}

function splitText(node: Text): ElementContent[] {
    const out: ElementContent[] = [];
    const value = node.value;
    let last = 0;

    for (const match of value.matchAll(WORD)) {
        const word = match[0];
        const start = match.index ?? 0;
        const cut = prefixLength(word.length);

        if (start > last) out.push({ type: "text", value: value.slice(last, start) });
        out.push({
            type: "element",
            tagName: "span",
            properties: { className: ["bn"] },
            children: [{ type: "text", value: word.slice(0, cut) }],
        });
        if (cut < word.length) out.push({ type: "text", value: word.slice(cut) });
        last = start + word.length;
    }

    if (last < value.length) out.push({ type: "text", value: value.slice(last) });
    return out;
}

function walk(parent: Root | Element) {
    const next: RootContent[] = [];
    for (const child of parent.children) {
        if (child.type === "text") {
            next.push(...splitText(child));
        } else if (child.type === "element") {
            if (!SKIP.has(child.tagName)) walk(child);
            next.push(child);
        } else {
            next.push(child);
        }
    }
    parent.children = next as typeof parent.children;
}


export default function rehypeBionic() {
    return (tree: Root) => walk(tree);
}