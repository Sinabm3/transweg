import { BrandMark } from './icons'
import { company } from '../content/company'

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#preise', label: 'Preise' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-light bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark className="h-8 w-8" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-wide text-white">
              {company.name.toUpperCase()}
            </span>
            <span className="block text-[10px] font-medium tracking-[0.2em] text-brand">
              TRANSPORT
            </span>
          </span>
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-stone-300 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-navy transition hover:bg-brand-dark"
        >
          Anfrage senden
        </a>
      </div>
    </header>
  )
}
