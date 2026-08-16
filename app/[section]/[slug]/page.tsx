import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getItem, sections } from "@/content/site";
import { Entry } from "@/components/Entry";

type Params = { section: string; slug: string };

export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return sections.flatMap((s) => s.items.filter((i) => !i.ext).map((i) => ({ section: s.key, slug: i.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params;
  const hit = getItem(p.section, p.slug);
  if (!hit) return { title: "not found" };
  const desc = hit.item.body?.[0]?.replace(/<[^>]+>/g, "") ?? hit.item.meta;
  return {
    title: hit.item.title,
    description: desc,
    openGraph: { title: hit.item.title, description: desc, ...(hit.item.shot ? { images: [`/shots/${hit.item.shot}.jpg`] } : {}) },
  };
}

export default async function EntryPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const hit = getItem(p.section, p.slug);
  if (!hit) notFound();
  return <Entry section={hit.section} item={hit.item} />;
}
