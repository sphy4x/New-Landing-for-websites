import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "Premium Studio - веб-студия, создающая современные сайты и веб-приложения для компаний из Европы и Украины.",
  openGraph: {
    title: "О нас | Premium Studio",
    description: "Узнайте больше о нашей команде и опыте разработки.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Header */}
      <section className="container-max py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-text md:text-6xl">
            О нас
          </h1>
          <p className="text-lg text-text-secondary">
            Веб-студия нового поколения, создающая сайты и приложения на
            международном уровне.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-text md:text-5xl">
              Кто мы
            </h2>
            <p className="text-text-secondary">
              Premium Studio — это команда опытных разработчиков, дизайнеров и
              менеджеров проектов с 6+ годами опыта разработки веб-приложений
              мирового уровня.
            </p>
            <p className="text-text-secondary">
              Мы специализируемся на разработке для компаний из Европы и
              Украины, понимаем их потребности и особенности работы с
              международными проектами.
            </p>
            <p className="text-text-secondary">
              Наша команда использует только современные технологии и best
              practices в веб-разработке. Каждый проект рассматривается как
              долгосрочное партнерство, а не просто разовую работу.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/20 to-purple-600/20 p-12 text-9xl text-white/10 flex items-center justify-center aspect-square">
            🚀
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="container-max border-t border-border pt-20 md:pt-32">
        <h2 className="mb-12 text-4xl font-bold text-text md:text-5xl">
          Чем мы занимаемся
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Веб-разработка",
              description:
                "Разрабатываем сайты и приложения на Next.js, React и современных технологиях.",
            },
            {
              title: "UX/UI дизайн",
              description:
                "Создаём красивые и функциональные интерфейсы, которые пользователи любят.",
            },
            {
              title: "Интернет-магазины",
              description:
                "Разрабатываем e-commerce решения с интеграцией платёжных систем и логистики.",
            },
            {
              title: "Веб-приложения",
              description:
                "Создаём SaaS, социальные сети, CRM и другие сложные приложения.",
            },
            {
              title: "SEO оптимизация",
              description:
                "Оптимизируем сайты для поисковых систем и обеспечиваем видимость в Google.",
            },
            {
              title: "Техническая поддержка",
              description:
                "Остаёмся на связи после запуска: обновления, новые функции, оптимизация.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card/50 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-text">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-max border-t border-border pt-20 md:pt-32">
        <h2 className="mb-12 text-4xl font-bold text-text md:text-5xl">
          Почему выбирают нас
        </h2>

        <div className="space-y-6">
          {[
            {
              title: "Опыт и экспертность",
              description:
                "6+ лет разработки для компаний из 24 стран. Мы знаем, что работает.",
            },
            {
              title: "Современный стек технологий",
              description:
                "Next.js, React, TypeScript, Tailwind CSS, PostgreSQL. Самые актуальные технологии.",
            },
            {
              title: "Высокая производительность",
              description:
                "Средний результат Lighthouse: 96+. Ваш сайт будет быстрым и отзывчивым.",
            },
            {
              title: "Индивидуальный подход",
              description:
                "Каждый проект уникален. Мы учитываем особенности бизнеса и аудитории.",
            },
            {
              title: "Прозрачность и коммуникация",
              description:
                "Регулярные созвоны, обновления прогресса, открытое обсуждение идей.",
            },
            {
              title: "Поддержка после запуска",
              description:
                "Не исчезаем после релиза. Помогаем развивать и улучшать проект.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-3xl border border-border bg-card/50 p-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-text">{item.title}</h3>
                <p className="text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-max border-t border-border pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-purple-600/10 p-12 text-center backdrop-blur md:p-16">
          <h2 className="mb-6 text-4xl font-bold text-text md:text-5xl">
            Свяжитесь с нами
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Хотим помочь развивать ваш бизнес. Расскажите о проекте и поговорим
            о возможностях.
          </p>
          <Link href="/contact" className="btn-primary">
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
}
