import Header from './components/header'
import Hero from './components/hero'
import Companies from './components/companies'
import Features from './components/features'
import Product from './components/product'
import FAQs from './components/faqs'
import Footer from './components/footer'
import CTA from './components/cta'

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Product />
      <FAQs />
      <div className=' bg-neutral-950 text-neutral-50'>
        <CTA />
        <div className="h-2.5 w-full bg-neutral-900 border-y-2 border-black shadow" />
        <Footer />
      </div>
    </div>
  )
}

export default App
