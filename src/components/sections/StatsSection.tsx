"use client";

import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="border-y border-border bg-card/50 py-16 md:py-24">
      <div className="container-max">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-2xl font-bold text-primary/70">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
