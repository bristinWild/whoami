import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data, getProject } from "@/lib/data";
import { Links, ManPage, Section, StatusLine } from "@/components/man";

export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  return project ? { title: project.name, description: project.tagline } : {};
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = data.projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <ManPage title={project.name.toUpperCase()} back={{ label: "borah-projects", href: "/projects" }}>
      <Section name="NAME">
        <p>
          {project.name} - {project.tagline}
        </p>
      </Section>

      <Section name="SYNOPSIS">
        <p>
          {project.stack.map((s, i) => (
            <span key={s}>
              {i > 0 && " · "}
              <span className="accent">{s}</span>
            </span>
          ))}
        </p>
      </Section>

      <Section name="DESCRIPTION">
        {project.description.map((para, i) => (
          <p key={i} className={i > 0 ? "muted" : undefined}>
            {para}
          </p>
        ))}
      </Section>

      {project.status && (
        <Section name="STATUS">
          <StatusLine>{project.status}</StatusLine>
        </Section>
      )}

      {project.links.length > 0 && (
        <Section name="LINKS">
          <Links items={project.links} />
        </Section>
      )}

      <Section name="SEE ALSO">
        <Links items={others.map((p) => ({ label: `${p.name}`, url: `/projects/${p.slug}` }))} />
      </Section>
    </ManPage>
  );
}
