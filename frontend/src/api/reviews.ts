export type Review = {
  id: number
  name: string | null
  rating: number
  comment: string
  createdAt: string
}

export type ReviewPayload = {
  name: string
  rating: number
  comment: string
}

export class ReviewSubmissionError extends Error {}

export async function fetchReviews(): Promise<Review[]> {
  const response = await fetch('/api/reviews')
  if (!response.ok) {
    throw new Error('Bewertungen konnten nicht geladen werden.')
  }
  return response.json()
}

export async function submitReview(payload: ReviewPayload): Promise<Review> {
  const response = await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new ReviewSubmissionError('Die Bewertung konnte nicht gesendet werden.')
  }

  return response.json()
}
