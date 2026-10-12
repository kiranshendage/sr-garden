import type { Metadata } from "next";
import "./globals.css";
import IconLibrary from "@/components/IconLibrary";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sr-garden-solution.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SR Garden Solution — Green Ideas, Beautiful Spaces, Lasting Impressions",
    template: "%s | SR Garden Solution",
  },
  description:
    "SR Garden Solution — landscape design, garden development, vertical gardens, irrigation and garden maintenance across Maharashtra.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Manrope:wght@400;500;600;700;800&family=Yellowtail&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconLibrary />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
