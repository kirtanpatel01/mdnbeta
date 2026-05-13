import React from 'react'
import { motion } from 'motion/react'

function Companies() {
  return (
    <div className='container mx-auto py-16 space-y-12 flex flex-col items-center'>
      <p className='animate-fade-in'>Join the waitlist with other 20,000+ people across Europe</p>
      <motion.ul className='w-full max-w-7xl flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0'
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{ once: true }}
        transition={{duration:0.5, ease:"easeOut", delay:0.2}}
      >
        {["google", "coinbase", "ripple", "pipedrive", "airbnb"].map((company, index) => (
          <motion.li 
            key={company} 
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 '
            initial={{y:50, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{ once: true }}
            transition={{duration:0.5, ease:"easeOut", delay:index*0.2}}
          >
            {company}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Companies