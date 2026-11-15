import type { Metadata } from "next";
import { data } from "@/lib/data";
import { ManPage, Row, Section } from "@/components/man";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <ManPage title="BRISTIN's WORK" current="work" next={{ label: "next: projects →", href: "/projects" }}>
      <Section name="NAME">
        <p>bristin's work - where i&apos;ve worked</p>
      </Section>

      <Section name="EXPERIENCE">
        {data.experience.map((job) => (
          <div className="block" key={job.company}>
            <Row title={`${job.role}, ${job.company}`} aside={job.period} />
            <ul className="dash-list">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section name="EDUCATION">
        {data.education.map((e) => (
          <Row key={e.title} title={e.title} aside={e.period} />
        ))}
      </Section>
    </ManPage>
  );
}
