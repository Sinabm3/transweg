import fleetTruck1 from '../assets/fleet-truck-1.jpg'
import fleetTruck2 from '../assets/fleet-truck-2.jpg'
import { company } from '../content/company'

export function Fleet() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-stone-900">Unser Fuhrpark</h2>
        <p className="mt-3 text-stone-600">
          Moderne Transporter mit Ladebordwand für sicheres und effizientes Be- und Entladen.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <img
          src={fleetTruck1}
          alt={`${company.name} Transporter beim Beladen`}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
        />
        <img
          src={fleetTruck2}
          alt={`${company.name} Transporter vor Ort beim Kunden`}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>
    </section>
  )
}
