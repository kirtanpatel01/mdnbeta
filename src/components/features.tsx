import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'
import { motion } from 'motion/react'

function Features() {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 px-4 lg:px-0'>
      <motion.h1 className="flex flex-col gap-4 font-bold text-4xl md:text-5xl lg:text-6xl "
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        viewport={{ once: true }}
        transition={{duration:0.5, ease:"easeOut", delay: 0.6}}
      >
        <div className='tracking-tight font-black'>
          <span>MDN</span>
          <span className="bg-linear-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">Beta.</span>
        </div>
        <span>Visualize & Schedule</span>
        <span>Your Growth Better.</span>
      </motion.h1>

      <div className='space-y-10 max-w-md'>
        <motion.p
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity:1}}
          viewport={{ once: true }}
          transition={{duration:0.5, ease:"easeOut", delay: 0.7}}
        >
          Schedule your product seling, promotion, or gain
          followers using tons of powerful templates and easy to
          use tools in MDN App. Avalbale for IOS and MacOS.
        </motion.p>
        <motion.button className='px-4 py-2 rounded-md bg-black text-white flex items-center gap-1'
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity:1}}
          viewport={{ once: true }}
          transition={{duration:0.5, ease:"easeOut", delay: 0.5}}
        >
          <span>Features</span>
          <IconArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  )
}

export default Features