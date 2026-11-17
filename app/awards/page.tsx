import type { Metadata } from "next";
import { data } from "@/lib/data";
import { Links, ManPage, Row, Section } from "@/components/man";

export const metadata: Metadata = { title: "Awards" };

export default function AwardsPage() {
  return (
    <ManPage title="BRISTIN-AWARDS" current="awards" next={{ label: "next: articles →", href: "/articles" }}>
      <Section name="NAME">
        <p>bristin-awards - prizes and recognition</p>
      </Section>

      <Section name="AWARDS">
        {data.awards.map((a) => (
          <div className="block" key={a.code}>
            <Row title={a.title} aside={a.code} accentAside />
            <p className="indent muted">{a.description}</p>
            <div className="indent">
              <Links items={a.links} small />
            </div>
          </div>
        ))}
      </Section>
    </ManPage>
  );
}
