import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import PortfolioCard from "@/components/cards/PortfolioCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Смотрите наши успешные проекты: лендинги, интернет-магазины, веб-приложения и корпоративные сайты.",
  openGraph: {
    title: "Портфолио | Premium Studio",
    description:
      "Успешные проекты в разных направлениях веб-разработки.",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Header */}
      <section className="container-max py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-text md:text-6xl">
            Портфолио
          </h1>
          <p className="text-lg text-text-secondary">
            Наши успешные проекты для компаний разного размера и из разных
            отраслей. Каждый проект—результат тесного сотрудничества и
            глубокого понимания целей клиента.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container-max">
        <div className="grid gap-6 sm:grid-cols-2">
          {portfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="container-max space-y-16 border-t border-border pt-20 md:space-y-24 md:pt-32">
        {portfolio.map((project) => (
          <div
            key={project.id}
            className="scroll-mt-32 grid gap-8 rounded-3xl border border-border bg-card/50 p-8 md:grid-cols-2 md:p-12"
          >
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  Case Study
                </span>
                <h2 className="mb-4 text-3xl font-bold text-text">
                  {project.title}
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-text/80">Задача</h3>
                  <p className="text-sm text-text-secondary">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-text/80">Решение</h3>
                  <p className="text-sm text-text-secondary">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-text/80">Результат</h3>
                  <p className="text-sm text-text-secondary">{project.result}</p>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-medium uppercase text-text-secondary">
                  Технологии
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-fit"
                >
                  Посмотреть сайт →
                </Link>
              )}
            </div>

            <div className="flex items-center">
              <div className="aspect-square w-full rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-purple-600/20 p-8 text-9xl text-white/10 flex items-center justify-center">
                🖼️
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-max pb-12 md:pb-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-purple-600/10 p-12 text-center backdrop-blur md:p-16">
          <h2 className="mb-6 text-4xl font-bold text-text md:text-5xl">
            Хотите похожий проект?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Расскажите нам о вашем проекте, целях и идеях. Мы предложим
            оптимальное решение и поможем его реализовать.
          </p>
          <Link href="/contact" className="btn-primary">
            Начать проект
          </Link>
        </div>
      </section>
    </div>
  );
}
