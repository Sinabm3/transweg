import { services } from '../content/company'
import { BoxIcon, BroomIcon, BuildingIcon, HomeIcon, TruckIcon, WrenchIcon } from './icons'

const icons = [TruckIcon, HomeIcon, BuildingIcon, WrenchIcon, BroomIcon, BoxIcon]

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-stone-900">Unsere Leistungen</h2>
        <p className="mt-3 text-stone-600">
          Von Transport und fachmännischer Montage bis hin zur Entrümpelung – alles aus einer
          Hand.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index % icons.length]
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200 p-6 transition hover:border-brand/40 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{service.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-stone-600">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-brand">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
