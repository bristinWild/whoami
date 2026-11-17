import type { Metadata } from "next";
import { articles, formatDate } from "@/lib/articles";
import { Entry, ManPage, Section } from "@/components/man";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage() {
    return (
        <ManPage title="BRISTIN-ARTICLES" current="articles" next={{ label: "next: stack →", href: "/stack" }}>
            <Section name="NAME">
                <p>bristin-articles - research and writing</p>
            </Section>

            <Section name="SYNOPSIS">
                <p>
                    <span className="bold">bristin articles</span> [<span className="accent">topic</span>]
                </p>
            </Section>

            <Section name="ARTICLES" tight>
                {articles.map((a) => (
                    <Entry key={a.slug} href={`/articles/${a.slug}`} cmd={a.cmd} desc={a.title} meta={formatDate(a.date)} />
                ))}
            </Section>
        </ManPage>
    );
}