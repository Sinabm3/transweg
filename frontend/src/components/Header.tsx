import { TruckIcon } from './icons'
import { company } from '../content/company'

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold text-stone-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <TruckIcon className="h-5 w-5" />
          </span>
          {company.name}
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-stone-600 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Anfrage senden
        </a>
      </div>
    </header>
  )
}
