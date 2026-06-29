import { Review } from "@/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/30 hover:bg-card/80">
      <div className="mb-4 flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-lg">
            ⭐
          </span>
        ))}
      </div>

      <p className="mb-6 text-text">{review.text}</p>

      <div className="border-t border-border pt-4">
        <p className="font-semibold text-text">{review.name}</p>
        <p className="text-sm text-text-secondary">{review.position}</p>
        <p className="text-sm text-text-secondary">{review.company}</p>
      </div>
    </div>
  );
}
