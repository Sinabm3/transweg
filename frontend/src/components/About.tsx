import vanLoading from '../assets/van-loading.jpg'
import { company } from '../content/company'
import { MapPinIcon } from './icons'

export function About() {
  return (
    <section id="ueber-uns" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <img
          src={vanLoading}
          alt={`${company.name} beim Beladen eines Transporters`}
          className="aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-stone-900">Über uns</h2>
            <p className="mt-4 text-stone-600">
              {company.name} ist Ihr Partner für Transport, Umzüge und Montage in ganz Österreich –
              Inland und Ausland. Gegründet
              von {company.owner}, steht das Unternehmen für persönlichen Kontakt, saubere Arbeit
              und faire Preise – egal ob es um einen einzelnen Karton oder eine ganze Wohnung geht.
            </p>
            <p className="mt-4 text-stone-600">
              Wir behandeln jeden Auftrag mit der gleichen Sorgfalt, mit der wir unsere eigenen
              Sachen transportieren würden.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-stone-200 lg:self-start">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="font-medium text-stone-900">{company.name}</p>
              <p className="text-sm text-stone-600">{company.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Inhaber</p>
          <p className="mt-2 text-2xl font-bold">{company.owner}</p>
          <p className="mt-4 text-stone-300">
            "Mir ist wichtig, dass sich unsere Kunden bei jedem Schritt gut aufgehoben fühlen –
            von der ersten Anfrage bis zum letzten Karton."
          </p>
        </div>
      </div>
    </section>
  )
}
