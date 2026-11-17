import Link from "next/link";
import type { ReactNode } from "react";
import { data, routes, type RouteName } from "@/lib/data";
import Image from "next/image";

/** A full page laid out like a Unix manual page. */
export function ManPage({
  title,
  current,
  back,
  next,
  cover,
  children,
}: {
  /** Upper-case page name shown in the header and footer, e.g. "BORAH-WORK". */
  title: string;
  /** Highlights this page in the nav. Leave out on the landing page. */
  current?: RouteName;
  /** Replaces the page nav with a single back link (used on project pages). */
  back?: { label: string; href: string };
  next?: { label: string; href: string };
  cover?: { src: string; alt: string };
  children: ReactNode;
}) {
  const mantitle = `${title}`;
  const showNav = current !== undefined || back !== undefined;

  return (
    <div className="page">
      {cover && (
        <div className="cover">
          <Image src={cover.src} alt={cover.alt} fill priority sizes="100vw" />
        </div>
      )}
      <header className="bar bar-top">
        <span></span>
        {/* <span className="bar-mid">Protocol Engineer&apos;s Manual</span> */}

      </header>

      {showNav && (
        <nav className="nav" aria-label={back ? "Breadcrumb" : "Pages"}>
          {back ? (
            <Link href={back.href}>← {back.label}</Link>
          ) : (
            <>
              <Link href="/">← bristin</Link>
              <ul>
                {routes.map((r) => (
                  <li key={r.name}>
                    {r.name === current ? (
                      <span aria-current="page">{r.name}</span>
                    ) : (
                      <Link href={r.href}>{r.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      )}

      <main className="sections">{children}</main>

      {next && (
        <div className="next">
          <Link href={next.href}>{next.label}</Link>
        </div>
      )}

      <footer className="bar bar-bottom">
        <span>{data.name.toLowerCase()}</span>
        <span className="bar-mid">{new Date().getFullYear()}</span>
        <span className="bar-end">{mantitle}</span>
      </footer>
    </div>
  );
}

/** One upper-case section, e.g. NAME or DESCRIPTION. */
export function Section({
  name,
  tight,
  children,
}: {
  name: string;
  /** Less space between children, for lists of link rows. */
  tight?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="section">
      <h2>{name}</h2>
      <div className={tight ? "section-body tight" : "section-body"}>{children}</div>
    </section>
  );
}

/** A clickable row: command name, description, and a note on the right. */
export function Entry({
  href,
  cmd,
  desc,
  meta,
}: {
  href: string;
  cmd: string;
  desc: string;
  meta?: string;
}) {
  const external = href.startsWith("http");
  const body = (
    <>
      <span className="entry-cmd">{cmd}</span>
      <span className="entry-desc">{desc}</span>
      {meta ? <span className="entry-meta">{meta}</span> : <span className="entry-meta" aria-hidden="true">→</span>}
    </>
  );
  return external ? (
    <a className="entry" href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <Link className="entry" href={href}>
      {body}
    </Link>
  );
}

/** A heading line with a date or tag pushed to the right. */
export function Row({ title, aside, accentAside }: { title: ReactNode; aside?: ReactNode; accentAside?: boolean }) {
  return (
    <div className="row">
      <span className="row-title">{title}</span>
      {aside && <span className={accentAside ? "row-aside accent" : "row-aside"}>{aside}</span>}
    </div>
  );
}

/** Inline list of links, separated by space. External links open in a new tab. */
export function Links({ items, small }: { items: { label: string; url: string }[]; small?: boolean }) {
  return (
    <p className={small ? "links small" : "links"}>
      {items.map((l) => {
        const external = l.url.startsWith("http");
        return (
          <a key={l.url} href={l.url} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            {l.label}
            {external && !l.label.endsWith("") ? " ↗" : ""}
          </a>
        );
      })}
    </p>
  );
}

export function StatusLine({ children }: { children: ReactNode }) {
  return (
    <p className="status">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export const seeAlso = [
  { label: "mail", url: `mailto:${data.email}` },
  { label: "github", url: data.github },
  { label: "linkedin", url: data.linkedin },
  { label: "x", url: data.twitter },
  { label: "crates.io", url: data.cratesio },
  { label: "npm", url: data.npmjs },
];
