import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSection, sections } from "@/content/site";
import { SectionBlock, sectionSteps } from "@/components/Section";
import { EntranceGate } from "@/components/EntranceGate";

type Params = { section: string };

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return sections.map((s) => ({ section: s.key }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const s = getSection((await params).section);
  return { title: s?.title ?? "not found" };
}

/** A whole section on its own page (the "More" destination). */
export default async function SectionPage({ params }: { params: Promise<Params> }) {
  const section = getSection((await params).section);
  if (!section) notFound();
  return (
    <div className="view home expanded loading">
      <EntranceGate steps={sectionSteps(section, true)} />
      <div className="page-pad">
        <div className="sections">
          <SectionBlock section={section} stagger={0} expanded />
        </div>
      </div>
    </div>
  );
}
