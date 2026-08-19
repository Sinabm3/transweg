import { company, hero } from '../content/company'
import { PhoneIcon } from './icons'

export function Hero() {
  return (
    <section id="top" className="border-b border-navy-light bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-navy-light px-3 py-1 text-sm font-medium text-brand ring-1 ring-white/10">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg text-stone-300">{hero.subheadline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-navy shadow-sm transition hover:bg-brand-dark"
            >
              Kostenloses Angebot anfordern
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <PhoneIcon className="h-4 w-4" />
              {company.phone}
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
            <div
              key={label}
              className="rounded-2xl bg-navy-light p-5 shadow-sm ring-1 ring-white/10"
            >
              <p className="text-2xl font-bold text-brand">{stat}</p>
              <p className="mt-1 text-sm text-stone-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
