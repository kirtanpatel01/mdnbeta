import { IconArrowRight, IconMinus, IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First one open by default

  const faqs = [
    {
      question: "What is Gridly?",
      answer: "Gridly is an AI-powered scheduler designed specifically for busy Instagram creators. It helps you plan your feed, automate your reels, and grow your audience effortlessly."
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
      question: "What features does Gridly have that others do not?",
      answer: "Gridly offers AI-powered content scheduling, visual grid planning, and deep analytics tailored specifically for Instagram creators."
    }
  ]

  return (
    <div className='container mx-auto py-24 px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Left Column */}
        <div className='space-y-6'>
          <motion.h1 
            className='text-4xl md:text-5xl font-bold text-neutral-900 leading-tight'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Any questions?<br />We got you
          </motion.h1>
          
          <motion.p 
            className='text-neutral-500 text-lg max-w-md leading-relaxed'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            We want to be transparent about our vision, so we've answered some of the most common questions about Gridly.
          </motion.p>
          
          <motion.a 
            href="#" 
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            More FAQs <IconArrowRight size={16} />
          </motion.a>
        </div>

        {/* Right Column (Accordion) */}
        <div className='divide-y divide-neutral-200 border-t border-neutral-200'>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className='py-6'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <button
                className='w-full flex justify-between items-center text-left focus:outline-none'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-lg font-semibold text-neutral-900'>{faq.question}</span>
                <span className='text-neutral-500'>
                  {openIndex === index ? <IconMinus size={20} /> : <IconPlus size={20} />}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div 
                    className='text-neutral-600 leading-relaxed overflow-hidden'
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs