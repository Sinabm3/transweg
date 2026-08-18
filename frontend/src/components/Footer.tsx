import { company } from '../content/company'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{company.name}</p>
            <p className="mt-1 text-sm">{company.tagline}</p>
          </div>

          <div className="text-sm">
            <p className="font-medium text-white">Impressum</p>
            <p className="mt-1">Inhaber: {company.owner}</p>
            <p>{company.address}</p>
          </div>
        </div>

        <p className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
