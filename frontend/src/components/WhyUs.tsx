import { values } from '../content/company'
import { BoltIcon, CoinIcon, ShieldIcon } from './icons'

const icons = [CoinIcon, BoltIcon, ShieldIcon]

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-stone-900">Warum {'Transweg'}?</h2>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {values.map((value, index) => {
          const Icon = icons[index % icons.length]
          return (
            <div key={value.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">{value.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{value.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
