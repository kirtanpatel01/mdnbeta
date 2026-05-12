import Header from './components/header'
import Hero from './components/hero'
import Companies from './components/companies'
import Features from './components/features'
import Product from './components/product'
import FAQs from './components/faqs'
import Footer from './components/footer'
import CTA from './components/cta'
import Dashboard from './components/dashboard'
import ExploreFeatures from './components/explore-features'

function App() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <div className='w-full border-y border-neutral-200 my-16'>
        <Companies />
      </div>
      <div className='space-y-16 relative pb-20'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-black -z-10' />
        <Features />
        <Dashboard />
        <ExploreFeatures />
      </div>
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
