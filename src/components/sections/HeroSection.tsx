"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container-max py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Веб-студия премиум-класса
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight text-text md:text-6xl">
            Создаем сайты, которые помогают бизнесу расти
          </h1>

          <p className="max-w-lg text-lg text-text-secondary">
            Разрабатываем современные сайты и веб-приложения для компаний из
            Европы и Украины. От идеи до запуска и дальнейшей поддержки.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Получить консультацию
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Смотреть работы
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/20 to-purple-600/20 p-8 backdrop-blur">
            <div className="flex aspect-square items-center justify-center text-9xl text-white/10">
              💻
            </div>
          </div>
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
