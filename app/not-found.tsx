import Link from "next/link";
import { ManPage, Section } from "@/components/man";

export default function NotFound() {
  return (
    <ManPage title="BRISTIN">
      <Section name="ERROR">
        <p>No manual entry for this page.</p>
        <p className="muted">
          Try <Link href="/">bristin</Link> for the list of pages.
        </p>
      </Section>
    </ManPage>
  );
}
