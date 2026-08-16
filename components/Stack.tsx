import Image from "next/image";
import type { CSSProperties } from "react";
import type { Item } from "@/content/site";
import { stackGeometry, fx } from "@/lib/rng";
import { ArtTile } from "./art";

const SHOT_POS = [0, 50, 100] as const;

function Photo({ item, v }: { item: Item; v: 0 | 1 | 2 }) {
  if (item.shot) {
    return (
      <div className="pol-img">
        <Image src={`/shots/${item.shot}.jpg`} alt="" fill sizes="120px" style={{ objectPosition: `50% ${SHOT_POS[v]}%` }} />
      </div>
    );
  }
  if (item.art) return <div className="pol-img"><ArtTile art={item.art} v={v} /></div>;
  return <div className="pol-img" />;
}

/**
 * The little pile of photos at the start of a row. Three cards for stacks (screenshot
 * cropped top / middle / bottom), one for singles. Geometry comes from the slug so
 * server and client agree; hover / pop-in are pure CSS.
 */
export function Stack({ item, single = false, stagger }: { item: Item; single?: boolean; stagger: number }) {
  const cards = stackGeometry(item.slug, single ? 1 : 3);
  return (
    <div className="stack">
      {cards.map((c, i) => (
        <div
          key={i}
          className="stack-card"
          style={{
            "--fan-tx": `${fx(c.fanX)}px`, "--fan-ty": `${fx(c.fanY)}px`, "--fan-rot": `${fx(c.fanRot)}deg`,
            "--rest-tx": `${fx(c.fanX * 0.15)}px`, "--rest-ty": `${fx(c.fanY * 0.15)}px`,
          } as CSSProperties}
        >
          <div
            className="pol"
            style={{
              "--rot-from": `${fx(c.rot + 1.5)}deg`, "--rot-to": `${fx(c.rot)}deg`,
              "--hover-tilt": `${c.tilt}deg`, "--stagger": stagger + i * 0.5,
            } as CSSProperties}
          >
            <Photo item={item} v={i as 0 | 1 | 2} />
            <div className="pol-in" />
          </div>
        </div>
      ))}
    </div>
  );
}
