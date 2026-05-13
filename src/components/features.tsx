import { IconArrowRight } from '@tabler/icons-react'
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
          <span className="bg-linear-to-r from-amber-400 via-rose-500 to-purple-600 bg-clip-text text-transparent">Gridly</span>
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
          The AI-powered scheduler designed for busy Instagram creators. Plan your feed, automate your reels, and grow your audience effortlessly.
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