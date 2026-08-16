import type { CSSProperties } from "react";
import { profile, sections } from "@/content/site";
import { Signature } from "./Signature";
import { SectionBlock, sectionSteps } from "./Section";
import { EntranceGate } from "./EntranceGate";

export function Home() {
  // stagger indices continue across the page: header 0, intro 1, then each section
  // (h2 + rows), with one empty beat between sections — like the reference.
  let n = 2;
  const blocks = sections.map((s) => {
    const start = n;
    n += sectionSteps(s, false) + 1;
    return <SectionBlock key={s.key} section={s} stagger={start} />;
  });
  return (
    <div className="view home loading">
      <EntranceGate steps={n} />
      <div className="page-pad">
        <div className="head">
          <div className="stagger-in" style={{ "--stagger": 0 } as CSSProperties}>
            <header className="masthead">
              <h1 style={{ display: "contents" }}><Signature label={profile.handle} /></h1>
              <div className="updated">Updated {profile.updated}</div>
            </header>
          </div>
          <div className="stagger-in" style={{ "--stagger": 1 } as CSSProperties}>
            <p className="intro">
              I&apos;m Rosniel — <em>{profile.tagline}</em> {profile.intro}
            </p>
          </div>
        </div>
        <div className="sections">{blocks}</div>
        <p className="credit stagger-in" style={{ "--stagger": n } as CSSProperties}>
          {profile.name} · {profile.location}<br />
          design after <a href="https://ja.mt" target="_blank" rel="noopener noreferrer">ja.mt</a> · built with Next.js, no UI library
        </p>
      </div>
    </div>
  );
}
