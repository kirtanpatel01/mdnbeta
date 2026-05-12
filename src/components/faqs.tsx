import { IconArrowRight, IconMinus, IconPlus } from '@tabler/icons-react'
import { useState } from 'react'

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First one open by default

  const faqs = [
    {
      question: "What is MDN Beta?",
      answer: "Management De Nation or MDN is a powerful app for you to manage, create, or visualize your product and growth throughout the easiest and smoothest way possible. By giving you a simple yet amazing experience with our App."
    },
    {
      question: "Are there any additional fees?",
      answer: "No, there are no hidden fees. All features listed in your plan are included."
    },
    {
      question: "How can I get the App?",
      answer: "You can download the app from our website or your device's app store."
    },
    {
      question: "What features do MDN have and other not?",
      answer: "MDN offers advanced real-time analytics, custom templates, and seamless workflow automation that other platforms lack."
    }
  ]

  return (
    <div className='container mx-auto py-24 px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Left Column */}
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-neutral-900 leading-tight'>
            Any questions?<br />We got you
          </h1>
          <p className='text-neutral-500 text-lg max-w-md leading-relaxed'>
            We always want to clear out our goals and vision, and by that we'll answer some of the general question peoples ask about MDN Platform.
          </p>
          <a href="#" className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold'>
            More FAQs <IconArrowRight size={16} />
          </a>
        </div>

        {/* Right Column (Accordion) */}
        <div className='divide-y divide-neutral-200 border-t border-neutral-200'>
          {faqs.map((faq, index) => (
            <div key={index} className='py-6'>
              <button
                className='w-full flex justify-between items-center text-left focus:outline-none'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-lg font-semibold text-neutral-900'>{faq.question}</span>
                <span className='text-neutral-500'>
                  {openIndex === index ? <IconMinus size={20} /> : <IconPlus size={20} />}
                </span>
              </button>
              
              <div className={`mt-2 text-neutral-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs