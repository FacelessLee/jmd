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
  title: "Just Mature Mind — Desire, with standards",
  description:
    "Hookups to marriage — match with people who say what they want and mean what they say. Emotional maturity is the sexiest thing in the room.",
  metadataBase: new URL("https://justmaturemind.com"),
  alternates: {
    canonical: "https://justmaturemind.com",
  },
  openGraph: {
    title: "Just Mature Mind — Desire, with standards",
    description:
      "Hookups to marriage — match with people who say what they want and mean what they say. Emotional maturity is the sexiest thing in the room.",
    url: "https://justmaturemind.com",
    siteName: "Just Mature Mind",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Mature Mind — Desire, with standards",
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
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} dark`}>
      <body className="font-sans antialiased bg-[#100C12] text-[#F5EFE8] selection:bg-[#FF5A7A] selection:text-[#100C12]">
        <SmoothScrollProvider>
          <MouseAmbientGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
