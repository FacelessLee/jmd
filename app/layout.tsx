import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

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
  title: "Just Mature Mind | Empowering Healthy Relationships & Mutual Arrangements",
  description:
    "The platform for emotional clarity, conscious communication, and resilient partnerships. Step out of superficial swipe culture into genuine, mature connection.",
  metadataBase: new URL("https://justmaturemind.com"),
  alternates: {
    canonical: "https://justmaturemind.com",
  },
  openGraph: {
    title: "Just Mature Mind | Beyond Superficial Dating",
    description:
      "Empowering intentional, mature, and emotionally intelligent relationships. Explore our interactive Dilemma Deck and Relational Superpower assessment.",
    url: "https://justmaturemind.com",
    siteName: "Just Mature Mind",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Mature Mind | Beyond Superficial Dating",
    description:
      "Dating got complicated. Maturity makes it simple. Empowering healthy relationships and mutual arrangements.",
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
      <body className="font-sans antialiased bg-[#FBF9F5] text-[#121316] selection:bg-[#FF5A5F] selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
