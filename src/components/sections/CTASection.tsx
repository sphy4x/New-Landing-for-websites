"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="container-max py-20 md:py-32">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-purple-600/10 p-12 text-center backdrop-blur md:p-16">
        <h2 className="mb-6 text-4xl font-bold text-text md:text-5xl">
          Готовы обсудить ваш проект?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
          Получите бесплатную консультацию и оценку стоимости разработки. Мы
          разберемся в ваших целях и предложим оптимальное решение.
        </p>

        <Link href="/contact" className="btn-primary">
          Начать проект
        </Link>
      </div>
    </section>
  );
}
