import { pricingPlans } from '../content/company'

export function Pricing() {
  return (
    <section id="preise" className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-stone-900">Transparente Preise</h2>
          <p className="mt-3 text-stone-600">
            Klare Richtpreise ohne versteckte Kosten. Den genauen Umfang besprechen wir gerne
            unverbindlich mit Ihnen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`flex flex-col rounded-2xl p-6 ${
                plan.featured
                  ? 'bg-navy text-white shadow-lg ring-1 ring-navy-light'
                  : 'bg-white ring-1 ring-stone-200'
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wide ${
                  plan.featured ? 'text-brand' : 'text-stone-500'
                }`}
              >
                {plan.title}
              </h3>
              <p className="mt-3 text-3xl font-bold">
                {plan.price}
                {plan.unit && (
                  <span
                    className={`text-base font-medium ${plan.featured ? 'text-stone-300' : 'text-stone-500'}`}
                  >
                    {plan.unit}
                  </span>
                )}
              </p>
              <p className={`mt-3 text-sm ${plan.featured ? 'text-stone-300' : 'text-stone-600'}`}>
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          Alle Preise verstehen sich als Richtwerte in Österreich und können je nach Aufwand,
          Entfernung und Umfang variieren.
        </p>
      </div>
    </section>
  )
}
