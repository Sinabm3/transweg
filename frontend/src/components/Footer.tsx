import { company, footerCategories } from '../content/company'
import { BrandMark, PhoneIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-navy-light bg-navy text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-8 w-8" />
              <span className="leading-tight">
                <span className="block text-lg font-bold tracking-wide text-white">
                  {company.name.toUpperCase()}
                </span>
                <span className="block text-[10px] font-medium tracking-[0.2em] text-brand">
                  TRANSPORT
                </span>
              </span>
            </div>
            <p className="mt-3 text-sm">{company.tagline}</p>
            <a
              href={company.phoneHref}
              className="mt-2 flex items-center gap-2 text-sm text-white hover:text-brand"
            >
              <PhoneIcon className="h-4 w-4" />
              {company.phone}
            </a>
          </div>

          <div className="text-sm">
            <p className="font-medium text-white">Impressum</p>
            <p className="mt-1">Inhaber: {company.owner}</p>
            <p>{company.address}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-navy-light pt-6 text-xs text-stone-400 sm:grid-cols-4">
          {footerCategories.map((category) => (
            <div key={category.title}>
              <p className="font-semibold text-stone-200">{category.title}</p>
              <p>{category.subtitle}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-navy-light pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
