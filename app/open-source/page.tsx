import type { Metadata } from "next";
import { data, type Contribution } from "@/lib/data";
import { Links, ManPage, Section } from "@/components/man";

export const metadata: Metadata = { title: "Open source" };

export default function OpenSourcePage() {
  // Group pull requests by repository, keeping the order they appear in data.ts.
  const byRepo = new Map<string, Contribution[]>();
  for (const c of data.openSource) {
    byRepo.set(c.repo, [...(byRepo.get(c.repo) ?? []), c]);
  }
  const merged = data.openSource.filter((c) => c.status === "merged").length;

  return (
    <ManPage title="BRISTIN-OPEN-SOURCE" current="open-source" next={{ label: "next: awards →", href: "/awards" }}>
      <Section name="NAME">
        <p>bristin-open-source - pull requests to other people&apos;s projects</p>
      </Section>

      <Section name="DESCRIPTION">
        <p>
          {data.openSource.length} pull requests across {byRepo.size} repositories, {merged} merged. Most of the work is
          in the Logos ecosystem: execution-zone programs, the Basecamp app and the spel toolkit.
        </p>
      </Section>

      <Section name="PULL REQUESTS" tight>
        {[...byRepo].map(([repo, prs]) => (
          <div key={repo} className="block" style={{ marginBottom: 14 }}>
            <h3>{repo}</h3>
            <div>
              {prs.map((pr) => (
                <a key={pr.url} className="pr" href={pr.url} target="_blank" rel="noreferrer">
                  <span className="pr-num">#{pr.number}</span>
                  <span className="pr-title">{pr.title}</span>
                  {pr.status && (
                    <span className={pr.status === "merged" ? "pr-status merged" : "pr-status"}>{pr.status}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section name="SEE ALSO">
        <Links
          items={[
            { label: "github", url: data.github },
            { label: "crates.io", url: data.cratesio },
            { label: "npm", url: data.npmjs },
          ]}
        />
      </Section>
    </ManPage>
  );
}
