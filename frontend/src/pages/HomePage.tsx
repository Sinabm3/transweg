import { About } from '../components/About'
import { Fleet } from '../components/Fleet'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { Reviews } from '../components/Reviews'
import { Services } from '../components/Services'
import { WhyUs } from '../components/WhyUs'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Pricing />
      <WhyUs />
      <Reviews />
    </>
  )
}
