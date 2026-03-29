import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Product from './components/Product'

import ComparisonTable from './components/ComparisonTable'
import CustomerStories from './components/CustomerStories'
import Calculator from './components/Calculator'
import FAQ from './components/FAQ'
import LogoTicker from './components/LogoTicker'

import TrialForm from './components/TrialForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Product />

      <ComparisonTable />
      <CustomerStories />
      <Calculator />
      <FAQ />
      <LogoTicker />

      <TrialForm />
      <Footer />
    </div>
  )
}
