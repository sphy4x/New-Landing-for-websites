import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumstudio.dev"),
  title: {
    default: "Premium Studio | Веб-студия премиум-класса",
    template: "%s | Premium Studio",
  },
  description:
    "Разрабатываем современные сайты и веб-приложения для компаний из Европы и Украины. Полный цикл разработки: дизайн, разработка, SEO, поддержка.",
  keywords: [
    "веб-студия",
    "разработка сайтов",
    "веб-дизайн",
    "Next.js",
    "интернет-магазин",
    "веб-приложение",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://premiumstudio.dev",
    siteName: "Premium Studio",
    title: "Premium Studio | Веб-студия премиум-класса",
    description:
      "Разрабатываем современные сайты и веб-приложения для компаний из Европы и Украины.",
    images: [
      {
        url: "https://premiumstudio.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Studio",
    description: "Веб-студия премиум-класса",
    images: ["https://premiumstudio.dev/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="min-h-screen bg-background pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
