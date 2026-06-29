"use client";

import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/cards/ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="border-y border-border bg-card/50 py-20 md:py-32">
      <div className="container-max">
        <div className="mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            Отзывы
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            Что говорят наши клиенты
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
