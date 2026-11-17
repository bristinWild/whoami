import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles, formatDate, getArticle } from "@/lib/articles";
import { ManPage } from "@/components/man";

export function generateStaticParams() {
    return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/articles/[slug]">): Promise<Metadata> {
    const { slug } = await props.params;
    const article = getArticle(slug);
    if (!article) return {};

    return {
        title: article.title,
        description: article.summary,
        openGraph: {
            type: "article",
            title: article.title,
            description: article.summary,
            publishedTime: article.date,
            images: [{ url: article.cover.src, width: 1500, height: 600, alt: article.cover.alt }],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.summary,
            images: [article.cover.src],
        },
    };
}

function readArticle(slug: string) {
    return fs.readFile(path.join(process.cwd(), "content", "articles", `${slug}.md`), "utf8");
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
    const { slug } = await props.params;
    const article = getArticle(slug);
    if (!article) notFound();

    const markdown = await readArticle(slug);

    return (
        <ManPage title="BRISTIN-ARTICLES" back={{ label: "other-articles", href: "/articles" }} cover={article.cover}>
            <article className="article">
                <header className="article-head">
                    <h1>{article.title}</h1>
                    <p className="article-meta">
                        {formatDate(article.date)} · {article.readingTime}
                    </p>
                </header>

                <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ href, children }) =>
                            href?.startsWith("http") ? (
                                <a href={href} target="_blank" rel="noreferrer">
                                    {children}
                                </a>
                            ) : (
                                <a href={href}>{children}</a>
                            ),
                        table: ({ children }) => (
                            <div className="article-table">
                                <table>{children}</table>
                            </div>
                        ),
                    }}
                >
                    {markdown}
                </Markdown>
            </article>
        </ManPage>
    );
}