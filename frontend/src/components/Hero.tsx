import { company } from '../content/company'

export function Hero() {
  return (
    <section id="top" className="border-b border-stone-200 bg-brand-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-dark shadow-sm ring-1 ring-stone-200">
            Transport & Umzug in Wien
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            Von der spontanen Kleintransport-Fahrt bis zum kompletten Wohnungsumzug –{' '}
            {company.name} bringt Ihr Hab und Gut sicher, schnell und zu fairen Preisen an sein
            Ziel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Kostenlose Anfrage stellen
            </a>
            <a
              href="#leistungen"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-800 ring-1 ring-stone-300 transition hover:bg-stone-50"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ['ab €40', 'Transport pro Stunde'],
            ['ab €399', 'Kompletter Wohnungsumzug'],
            ['ab €40', 'Möbelmontage pro Stück'],
            ['Wien', 'Ihr lokaler Partner'],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
              <p className="text-2xl font-bold text-brand-dark">{stat}</p>
              <p className="mt-1 text-sm text-stone-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
