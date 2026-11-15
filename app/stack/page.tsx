import type { Metadata } from "next";
import { data } from "@/lib/data";
import { ManPage, Section } from "@/components/man";

export const metadata: Metadata = { title: "Stack" };

export default function StackPage() {
  return (
    <ManPage title="BRISTIN-STACK" current="stack" next={{ label: "back to bristin ↑", href: "/" }}>
      <Section name="NAME">
        <p>bristin-stack - languages, chains and tools</p>
      </Section>

      <Section name="OPTIONS">
        {data.stack.map((s) => (
          <div className="option" key={s.flag}>
            <span className="option-flag">{s.flag}</span>
            <span className="option-text">{s.tools}</span>

          </div>
        ))}
      </Section>
    </ManPage>
  );
}
