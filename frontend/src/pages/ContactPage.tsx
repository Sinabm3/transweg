import { ContactForm } from '../components/ContactForm'

export function ContactPage() {
  return (
    <>
      <section className="border-b border-navy-light bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Kontakt</h1>
          <p className="mt-3 max-w-2xl text-stone-300">
            Ob Privatumzug, Firmenumzug oder Transport – schreiben Sie uns Ihr Anliegen und wir
            melden uns zeitnah mit einem Angebot bei Ihnen.
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
