import { data } from "@/lib/data";
import { Entry, Links, ManPage, Section, StatusLine, seeAlso } from "@/components/man";
import { articles } from "@/lib/articles";

export default function Home() {
  const orgs = new Set(data.openSource.map((c) => c.repo.split("/")[0])).size;

  return (
    <ManPage title="BRISTIN">
      <Section name="NAME">
        <p>bristin borah - {data.title.toLowerCase()}</p>
      </Section>

      <Section name="SYNOPSIS">
        <p>
          <span className="bold">bristin</span> [<span className="accent">--evm</span>] [<span className="accent">--logos</span>]
          [<span className="accent">--solana</span>]  [<span className="accent">--zk</span>] <i>idea</i>
        </p>
      </Section>

      <Section name="DESCRIPTION">
        <p>{data.summary}</p>
      </Section>

      <Section name="PAGES" tight>
        <Entry href="/work" cmd="work" desc="where i've worked - wildchain, idea usher, luster" meta="2021 - now" />
        <Entry
          href="/projects"
          cmd="projects"
          desc="things i've built - Solizone, tuniq, forumer, ozon, credgate"
          meta={`${data.projects.length} entries`}
        />
        <Entry
          href="/open-source"
          cmd="open-source"
          desc="pull requests to logos and other projects"
          meta={`${data.openSource.length} prs, ${orgs} orgs`}
        />
        <Entry
          href="/awards"
          cmd="awards"
          desc="logos lambda prizes"
          meta={data.awards.map((a) => a.code).join(", ")}
        />

        <Entry
          href="/articles"
          cmd="articles"
          desc="research and writing - privacy, rpc, logos"
          meta={`${articles.length} ${articles.length === 1 ? "entry" : "entries"}`}
        />
        <Entry href="/stack" cmd="stack" desc="languages, chains and tools i use" meta={`${data.stack.length} groups`} />
      </Section>

      <Section name="STATUS">
        <StatusLine>{data.status}</StatusLine>
      </Section>

      <Section name="SEE ALSO">
        <Links items={seeAlso} />
      </Section>
    </ManPage>
  );
}
