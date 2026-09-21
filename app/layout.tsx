import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { MouseAmbientGlow } from "@/components/ui/mouse-ambient-glow";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Just Mature Mind — Conscious Dating & Curated Matchmaking",
  description:
    "Curated matchmaking and conscious dating for high-EQ adults. From uninhibited chemistry to lifelong marriage — match with intentional adults who communicate with clarity.",
  metadataBase: new URL("https://justmaturemind.com"),
  alternates: {
    canonical: "https://justmaturemind.com",
  },
  openGraph: {
    title: "Just Mature Mind — Conscious Dating & Curated Matchmaking",
    description:
      "Curated matchmaking and conscious dating for high-EQ adults. From uninhibited chemistry to lifelong marriage — match with intentional adults who communicate with clarity.",
    url: "https://justmaturemind.com",
    siteName: "Just Mature Mind",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Mature Mind — Conscious Dating & Curated Matchmaking",
    description:
      "Whatever you're here for — clarity and conduct are the sexiest things in the room. Match with emotional maturity.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable}`}>
      <body className="font-sans antialiased bg-[#FCF9F8] text-[#1C1B1B] selection:bg-[#FF5A60]/20 selection:text-[#FF5A60]">
        <SmoothScrollProvider>
          <MouseAmbientGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
