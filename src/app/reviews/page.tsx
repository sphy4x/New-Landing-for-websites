import type { Metadata } from "next";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/cards/ReviewCard";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы наших клиентов о качестве разработки, поддержке и результатах.",
  openGraph: {
    title: "Отзывы | Premium Studio",
    description:
      "Что говорят наши клиенты о сотрудничестве с Premium Studio.",
    type: "website",
  },
};

export default function ReviewsPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Header */}
      <section className="container-max py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold text-text md:text-6xl">
            Отзывы клиентов
          </h1>
          <p className="text-lg text-text-secondary">
            Что говорят о нас компании, с которыми мы работали. Реальные отзывы
            от людей, которые видели результаты нашей работы.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container-max">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="container-max border-t border-border pt-20 md:pt-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <p className="mb-2 text-4xl font-bold text-primary">98%</p>
            <p className="text-text-secondary">
              Клиентов рекомендуют нас друзьям
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <p className="mb-2 text-4xl font-bold text-primary">127+</p>
            <p className="text-text-secondary">Успешно завершённых проектов</p>
          </div>
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <p className="mb-2 text-4xl font-bold text-primary">5+</p>
            <p className="text-text-secondary">Лет на рынке</p>
          </div>
          <div className="rounded-3xl border border-border bg-card/50 p-8">
            <p className="mb-2 text-4xl font-bold text-primary">24</p>
            <p className="text-text-secondary">Стран клиентов</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-max border-t border-border pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-purple-600/10 p-12 text-center backdrop-blur md:p-16">
          <h2 className="mb-6 text-4xl font-bold text-text md:text-5xl">
            Станьте нашим следующим успешным проектом
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">
            Присоединяйтесь к сотням компаний, которые доверили нам своё
            развитие в интернете.
          </p>
          <a href="/contact" className="btn-primary">
            Начать проект
          </a>
        </div>
      </section>
    </div>
  );
}
