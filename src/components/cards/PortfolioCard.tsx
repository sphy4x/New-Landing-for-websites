import Link from "next/link";
import { PortfolioItem } from "@/types";

export default function PortfolioCard({ project }: { project: PortfolioItem }) {
  const categoryLabels: Record<string, string> = {
    landing: "Лендинг",
    ecommerce: "E-commerce",
    corporate: "Корпоративный",
    webapp: "Веб-приложение",
  };

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group block overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 hover:bg-card/80"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-border">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-purple-600/20 text-6xl text-white/10">
          📱
        </div>
        <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {categoryLabels[project.category]}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-text">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-text-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-2 py-1 text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
