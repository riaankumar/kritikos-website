import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import Problem from './components/Problem'
import ComparisonTable from './components/ComparisonTable'
import Product from './components/Product'
import BeforeAfter from './components/BeforeAfter'
import CustomerStories from './components/CustomerStories'
import Calculator from './components/Calculator'
import Integrations from './components/Integrations'
import FAQ from './components/FAQ'

import TrialForm from './components/TrialForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Problem />
      <ComparisonTable />
      <Product />
      <BeforeAfter />
      <CustomerStories />
      <Calculator />
      <Integrations />
      <FAQ />

      <TrialForm />
      <Footer />
    </div>
  )
}
