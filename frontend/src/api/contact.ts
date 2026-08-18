export type ContactPayload = {
  name: string
  title: string
  message: string
}

export class ContactSubmissionError extends Error {}

export async function submitContact(payload: ContactPayload): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new ContactSubmissionError('Die Nachricht konnte nicht gesendet werden.')
  }
}
