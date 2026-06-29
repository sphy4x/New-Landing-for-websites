import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с нами для консультации. Мы помогим разработать идеальное решение для вашего проекта.",
  openGraph: {
    title: "Контакты | Premium Studio",
    description:
      "Свяжитесь с нами для консультации по вашему проекту.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Header */}
      <section className="container-max py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-text md:text-6xl">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-text-secondary">
            Расскажите о вашем проекте. Мы предоставим бесплатную консультацию
            и оценку стоимости разработки.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-max">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text">Форма заявки</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-text">Контакты</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <a
                    href="mailto:hello@premiumstudio.dev"
                    className="text-lg font-medium text-primary transition hover:text-primary-hover"
                  >
                    hello@premiumstudio.dev
                  </a>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Телефон</p>
                  <a
                    href="tel:+1234567890"
                    className="text-lg font-medium text-primary transition hover:text-primary-hover"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Режим работы</p>
                  <p className="text-lg font-medium text-text">
                    пн-пт: 9:00 - 18:00 (UTC)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-semibold text-text">
                Что дальше после отправки заявки?
              </h3>
              <ol className="space-y-3 text-sm text-text-secondary">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    1
                  </span>
                  <span>Мы получаем вашу заявку и проверяем детали</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    2
                  </span>
                  <span>Связываемся с вами в течение 24 часов</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    3
                  </span>
                  <span>
                    Обсуждаем идею, бюджет, сроки и возможности
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    4
                  </span>
                  <span>Договариваемся о сотрудничестве и запускаем проект</span>
                </li>
              </ol>
            </div>

            <div className="rounded-3xl border border-border bg-card/50 p-6">
              <h3 className="mb-4 font-semibold text-text">
                Средние сроки разработки
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between">
                  <span>Лендинг:</span>
                  <span className="font-medium text-text">2-3 недели</span>
                </li>
                <li className="flex justify-between">
                  <span>Корпоративный сайт:</span>
                  <span className="font-medium text-text">3-4 недели</span>
                </li>
                <li className="flex justify-between">
                  <span>Интернет-магазин:</span>
                  <span className="font-medium text-text">4-6 недель</span>
                </li>
                <li className="flex justify-between">
                  <span>Веб-приложение:</span>
                  <span className="font-medium text-text">8-16 недель</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
