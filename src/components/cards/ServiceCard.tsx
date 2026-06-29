import { Service } from "@/types";
import Link from "next/link";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 transition hover:border-primary/50 hover:bg-card/80">
      <div className="mb-4 text-4xl">{service.icon}</div>

      <h3 className="mb-3 text-2xl font-semibold text-text">{service.title}</h3>

      <p className="mb-6 text-text-secondary">{service.shortDescription}</p>

      <div className="mb-6 space-y-2">
        {service.benefits.slice(0, 4).map((benefit) => (
          <div key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="mt-1 text-primary">✓</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-primary">
          {service.pricing}
        </span>
        <Link href={`/services#${service.id}`} className="btn-secondary text-xs">
          Подробнее
        </Link>
      </div>
    </div>
  );
}
