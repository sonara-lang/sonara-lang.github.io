import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Examples from './components/Examples'
import Install from './components/Install'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080e] text-white">
      <Hero />
      <HowItWorks />
      <Examples />
      <Install />
      <Footer />
    </div>
  )
}
