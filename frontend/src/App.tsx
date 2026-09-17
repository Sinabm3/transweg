import { About } from './components/About'
import { ContactForm } from './components/ContactForm'
import { Fleet } from './components/Fleet'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Pricing />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
