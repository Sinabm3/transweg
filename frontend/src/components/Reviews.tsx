import { useEffect, useState, type FormEvent } from 'react'
import { fetchReviews, submitReview, type Review } from '../api/reviews'
import { StarIcon } from './icons'

type Status = 'idle' | 'sending' | 'success' | 'error'

function StarRatingInput({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          aria-label={`${star} Sterne`}
          className="text-brand transition hover:scale-110"
        >
          <StarIcon className="h-7 w-7" filled={star <= value} />
        </button>
      ))}
    </div>
  )
}

function StarRatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon key={star} className="h-4 w-4" filled={star <= rating} />
      ))}
    </div>
  )
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    fetchReviews()
      .then(setReviews)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (rating === 0) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    try {
      const review = await submitReview({
        name: String(data.get('name') ?? ''),
        rating,
        comment: String(data.get('comment') ?? ''),
      })
      setReviews((current) => [review, ...current])
      setStatus('success')
      setRating(0)
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="bewertungen" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-stone-900">Bewertungen</h2>
          <p className="mt-3 text-stone-600">
            Teilen Sie uns Ihre Erfahrung mit – Ihre Bewertung erscheint direkt hier auf der Seite.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
        >
          <label className="block text-sm font-medium text-stone-700">
            Ihre Bewertung
            <div className="mt-1.5">
              <StarRatingInput value={rating} onChange={setRating} />
            </div>
          </label>

          <label className="mt-4 block text-sm font-medium text-stone-700">
            Name (optional)
            <input
              name="name"
              type="text"
              maxLength={100}
              placeholder="Ihr Name"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <label className="mt-4 block text-sm font-medium text-stone-700">
            Ihr Kommentar
            <textarea
              required
              name="comment"
              rows={4}
              maxLength={1000}
              placeholder="Wie war Ihre Erfahrung mit uns?"
              className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-navy transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Wird gesendet …' : 'Bewertung abschicken'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-green-700">Danke für Ihre Bewertung!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-red-700">
              {rating === 0
                ? 'Bitte wählen Sie eine Sternebewertung aus.'
                : 'Leider ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut.'}
            </p>
          )}
        </form>

        {!loading && reviews.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-2xl border border-stone-200 bg-white p-5">
                <StarRatingDisplay rating={review.rating} />
                <p className="mt-3 text-sm text-stone-600">{review.comment}</p>
                <p className="mt-3 text-sm font-medium text-stone-900">{review.name ?? 'Anonym'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
