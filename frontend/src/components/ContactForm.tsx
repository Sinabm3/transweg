import { useState, type FormEvent } from 'react'
import { submitContact } from '../api/contact'
import { company } from '../content/company'
import { MapPinIcon } from './icons'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    try {
      await submitContact({
        name: String(data.get('name') ?? ''),
        title: String(data.get('title') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-stone-900">Kontaktieren Sie uns</h2>
          <p className="mt-4 text-stone-600">
            Schreiben Sie uns kurz, worum es geht – wir melden uns bei Ihnen. Kein Postfach, keine
            Anmeldung nötig, wir kümmern uns um den Rest.
          </p>

          <div className="mt-6 flex items-start gap-3 text-sm text-stone-600">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <span>{company.address}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-stone-200 p-6 shadow-sm lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-stone-700 sm:col-span-1">
              Name
              <input
                required
                name="name"
                type="text"
                maxLength={100}
                placeholder="Ihr Name"
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>

            <label className="block text-sm font-medium text-stone-700 sm:col-span-1">
              Titel
              <input
                required
                name="title"
                type="text"
                maxLength={150}
                placeholder="z. B. Anfrage Privatumzug"
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>

            <label className="block text-sm font-medium text-stone-700 sm:col-span-2">
              Nachricht
              <textarea
                required
                name="message"
                rows={5}
                maxLength={5000}
                placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben …"
                className="mt-1.5 w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-sm font-medium text-green-700">
              Danke! Ihre Nachricht wurde übermittelt, wir melden uns bald bei Ihnen.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm font-medium text-red-700">
              Leider ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
