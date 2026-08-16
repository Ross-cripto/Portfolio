import { BackPill } from "@/components/BackPill";

export default function NotFound() {
  return (
    <div className="view entry">
      <BackPill href="/" label="back home" />
      <h1 className="entry-title">nothing here</h1>
      <div className="entry-body"><p>That page doesn&apos;t exist (yet). Head back to the list.</p></div>
    </div>
  );
}
