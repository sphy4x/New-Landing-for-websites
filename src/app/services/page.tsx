import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/cards/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный спектр веб-услуг: лендинги, сайты, интернет-магазины, веб-приложения, дизайн и техническая поддержка.",
  openGraph: {
    title: "Услуги | Premium Studio",
    description:
      "Лендинги, сайты, интернет-магазины, веб-приложения, дизайн и поддержка.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Header */}
      <section className="container-max py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-text md:text-6xl">
            Наши услуги
          </h1>
          <p className="text-lg text-text-secondary">
            Полный спектр услуг для создания и развития вашего онлайн-проекта.
            От лендинга до сложного веб-приложения с личными кабинетами и
            базами данных.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-max">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="container-max space-y-16 md:space-y-24">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="scroll-mt-32 rounded-3xl border border-border bg-card/50 p-8 md:p-12"
          >
            <div className="mb-8 flex items-start gap-4">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <h2 className="mb-2 text-3xl font-bold text-text">
                  {service.title}
                </h2>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold text-text">
                  Что входит:
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1 text-primary">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-text">
                  Этапы разработки:
                </h3>
                <div className="space-y-3">
                  {service.stages.map((stage, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                          {idx + 1}
                        </span>
                        <span className="font-medium text-text">
                          {stage.title}
                        </span>
                      </div>
                      <p className="ml-8 text-text-secondary">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-text-secondary">Стартовая цена:</p>
                <p className="text-2xl font-bold text-primary">
                  {service.pricing}
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-xs text-text-secondary">
                  Технологии:{" "}
                  {service.technologies.slice(0, 3).join(", ")}
                </span>
              </div>
              <Link href="/contact" className="btn-primary">
                Заказать
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-max pb-12 md:pb-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-purple-600/10 p-12 text-center backdrop-blur md:p-16">
          <h2 className="mb-6 text-4xl font-bold text-text md:text-5xl">
            Не нашли подходящую услугу?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Мы также выполняем custom проекты. Расскажите о вашей идее и мы
            предложим оптимальное решение.
          </p>
          <Link href="/contact" className="btn-primary">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
}
