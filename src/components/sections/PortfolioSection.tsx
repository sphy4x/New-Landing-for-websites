"use client";

import { portfolio } from "@/data/portfolio";
import PortfolioCard from "@/components/cards/PortfolioCard";

export default function PortfolioSection() {
  return (
    <section className="container-max py-20 md:py-32">
      <div className="mb-12">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
          Портфолио
        </span>
        <h2 className="text-4xl font-bold text-text md:text-5xl">
          Последние проекты
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.map((project) => (
          <div key={project.id}>
            <PortfolioCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
