import type { Metadata } from "next";
import { data } from "@/lib/data";
import { Entry, ManPage, Section } from "@/components/man";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <ManPage title="BRISTIN-PROJECTS" current="projects" next={{ label: "next: open-source →", href: "/open-source" }}>
      <Section name="NAME">
        <p>bristin-projects - things i&apos;ve built</p>
      </Section>

      <Section name="SYNOPSIS">
        <p>
          <span className="bold">bristin projects</span> [<span className="accent">name</span>]
        </p>
      </Section>

      <Section name="PROJECTS" tight>
        {data.projects.map((p) => (
          <Entry key={p.slug} href={`/projects/${p.slug}`} cmd={p.name} desc={p.tagline} meta={p.stack[0]} />
        ))}
      </Section>
    </ManPage>
  );
}
