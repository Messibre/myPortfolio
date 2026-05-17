import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meseret Birhanu | The Midnight Library",
  description:
    "The collected works of Meseret Birhanu. A portfolio crafted as a midnight library, where each project is a book on the shelf.",
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-mono antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
