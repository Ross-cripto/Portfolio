import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { profile } from "@/content/site";
import { Wall } from "@/components/Wall";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s — ${profile.name}` },
  description: `${profile.name} — ${profile.role.toLowerCase()} in Curitiba, BR. Python & React, work, projects and toolbox.`,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: profile.siteUrl,
    siteName: profile.name,
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = { themeColor: "#e9dcc4", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Wall />
        <div className="sheet">
          <div className="page">{children}</div>
        </div>
      </body>
    </html>
  );
}
