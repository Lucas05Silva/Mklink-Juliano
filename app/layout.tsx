import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juliano Santos Fotografia — Links",
  description:
    "Links do Juliano Santos Fotografia. Especialista em casamentos e debutantes em Cambé, Londrina e região.",
  openGraph: {
    title: "Juliano Santos Fotografia",
    description: "Eternizando seus melhores momentos.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/Juliano.jpg", width: 150, height: 150, alt: "Juliano Santos" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
