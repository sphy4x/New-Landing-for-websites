import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Premium Studio разрабатывает современные сайты и веб-приложения для компаний из Европы и Украины. Полный цикл: дизайн, разработка, SEO, поддержка.",
  openGraph: {
    title: "Premium Studio | Веб-студия премиум-класса",
    description:
      "Разрабатываем современные сайты и веб-приложения для компаний из Европы и Украины.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container-max">
        <div className="rounded-3xl border border-border bg-card/50 p-8 text-center shadow-glow">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/80">
            Нам доверяют компании из Европы и Украины
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "⚙️ TechCorp",
              "🎨 BrandHouse",
              "🚀 NovaLabs",
              "🏦 FinTrust",
              "🌍 GlobeWare",
              "📈 MarketIQ",
            ].map((logo) => (
              <div
                key={logo}
                className="rounded-3xl border border-border bg-background/60 px-4 py-6 text-center text-sm text-text-secondary transition hover:border-primary/50 hover:text-text"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
      <StatsSection />
      <PortfolioSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
