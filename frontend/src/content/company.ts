export const company = {
  name: 'Transweg',
  tagline: 'Transport, Umzug & Montage in Wien',
  owner: 'Danial',
  // TODO: confirm postal code / district for the address before going live.
  address: 'Lerchenfelder Straße 16, Wien',
  email: 'sinabm3@gmail.com',
  // TODO: add a real phone number once available.
  phone: undefined as string | undefined,
}

export type Service = {
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    title: 'Transport & Kleintransporte',
    description:
      'Schnelle, flexible Transporte für Möbel, Pakete oder Geschäftsware – auch kurzfristig.',
    bullets: ['Termine auch am selben Tag', 'Transporter mit Hebebühne', 'Faire Kilometerpreise'],
  },
  {
    title: 'Privatumzug',
    description: 'Der komplette Wohnungsumzug – von der Verpackung bis zum letzten Karton.',
    bullets: ['Ver- und Aufpacken möglich', 'Möbelmontage inklusive', 'Sorgfältiger Umgang mit Ihrem Hab und Gut'],
  },
  {
    title: 'Firmenumzug',
    description: 'Büro- und Firmenumzüge mit möglichst wenig Ausfallzeit für Ihr Unternehmen.',
    bullets: ['Planung außerhalb der Geschäftszeiten', 'IT- und Aktenumzug', 'Ein fester Ansprechpartner'],
  },
  {
    title: 'Möbelmontage',
    description: 'Auf- und Abbau aller gängigen Möbelmarken, sauber und ohne Kratzer.',
    bullets: ['IKEA, XXXLutz, Mömax & mehr', 'Küchen, Schränke, Büromöbel', 'Werkzeug wird mitgebracht'],
  },
  {
    title: 'Entrümpelung',
    description: 'Wohnungs-, Keller- und Dachbodenentrümpelung – schnell und umweltgerecht entsorgt.',
    bullets: ['Besichtigung nach Vereinbarung', 'Fachgerechte Entsorgung', 'Besenreine Übergabe'],
  },
  {
    title: 'Verpackungsservice',
    description: 'Damit beim Umzug nichts zu Bruch geht: professionelles Ein- und Auspacken.',
    bullets: ['Kartons & Verpackungsmaterial', 'Sicherung empfindlicher Gegenstände', 'Optional mit Beschriftung'],
  },
]

export type PricingPlan = {
  title: string
  price: string
  unit?: string
  description: string
  featured?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Transport',
    price: 'ab €40',
    unit: '/Std.',
    description: 'Kleintransporte, Lastentaxi & Express-Fahrten in Wien.',
  },
  {
    title: 'Privatumzug',
    price: 'ab €399',
    description: 'Kompletter Wohnungsumzug inkl. Verpackung & Möbelmontage.',
    featured: true,
  },
  {
    title: 'Möbelmontage',
    price: 'ab €40',
    unit: '/Stück',
    description: 'Auf- und Abbau von Möbeln aller gängigen Marken.',
  },
  {
    title: 'Firmenumzug & Entrümpelung',
    price: 'auf Anfrage',
    description: 'Individuelles Angebot nach kostenloser Besichtigung.',
  },
]

export type Value = {
  title: string
  description: string
}

export const values: Value[] = [
  {
    title: 'Faire Preise',
    description: 'Transparente Kostenvoranschläge, keine versteckten Gebühren.',
  },
  {
    title: 'Schnelligkeit',
    description: 'Wir wissen, dass Ihre Zeit wertvoll ist, und halten vereinbarte Termine ein.',
  },
  {
    title: 'Sorgfalt',
    description: 'Ihr Hab und Gut wird bei uns mit Umsicht und Erfahrung behandelt.',
  },
]
