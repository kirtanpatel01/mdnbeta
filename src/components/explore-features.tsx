import { IconArrowRight, IconChevronUp, IconFlagFilled } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import { motion, animate } from 'motion/react'

function Counter({ value }: { value: string | number }) {
  const isFloat = value.toString().includes('.')
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === 'number' ? value : (isFloat ? parseFloat(value.toString().replace(/,/g, '')) : parseInt(value.toString().replace(/,/g, ''), 10))

  useEffect(() => {
    const start = numericValue * 0.8
    
    const controls = animate(start, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest)
    })
    return () => controls.stop()
  }, [numericValue])

  return (
    <span>
      {isFloat 
        ? displayValue.toFixed(1) 
        : (typeof value === 'number' ? Math.round(displayValue) : Intl.NumberFormat('en-US').format(Math.round(displayValue)))}
    </span>
  )
}

function ExploreFeatures() {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16 px-4 lg:px-0'>
      {/* Left Content */}
      <div className='space-y-6'>
        <motion.h1 
          className='text-white text-5xl md:text-6xl font-bold leading-tight'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Reach your audience<br />better and faster
        </motion.h1>
        
        <motion.p 
          className='text-neutral-400 text-lg max-w-md'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Let AI handle the heavy lifting. Automatically schedule your posts for peak engagement times and generate captions that convert.
        </motion.p>
        
        <motion.a 
          href="#" 
          className='inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors font-medium text-lg'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          Explore Features <IconArrowRight size={20} />
        </motion.a>
      </div>

      {/* Right Content (Cards) */}
      <div className='relative flex justify-center md:justify-end mr-0 md:mr-12'>
        {/* Background Card */}
        <motion.div 
          className='bg-[#eef1f4] w-full max-w-[340px] h-[280px] rounded-2xl relative p-6 flex flex-col justify-end gap-3 shadow-inner'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >

          {/* Top Overlapping Card */}
          <motion.div 
            className='absolute -top-12 right-0 md:-right-10 bg-white text-black p-6 rounded-xl shadow-2xl w-[300px] space-y-4 border border-neutral-100'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-violet-100 p-1.5 rounded-md'>
                  <IconFlagFilled size={16} className='text-violet-600' />
                </div>
                <span className='text-neutral-500 font-medium'>Reach</span>
              </div>
              <div className='flex items-center gap-0.5 bg-green-100 text-green-600 px-2 py-1 rounded-md text-xs font-semibold'>
                <IconChevronUp size={12} strokeWidth={3} />
                <span><Counter value="8.4" />%</span>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-neutral-900'><Counter value="122,637" /></h2>
              <p className='text-sm text-neutral-400 mt-1'>From last 7 days</p>
            </div>
          </motion.div>

          {/* Country Card 1 */}
          <motion.div 
            className='max-w-60 bg-white text-black p-3 rounded-xl flex items-center justify-between shadow-sm border border-neutral-50'
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            <div className='flex items-center gap-3'>
              {/* Flag */}
              <svg viewBox="0 0 60 60" className="size-6 rounded-full shadow-sm">
                <rect width="60" height="60" fill="#012169" />
                <line x1="0" y1="0" x2="60" y2="60" stroke="#ffffff" strokeWidth="6" />
                <line x1="60" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="6" />
                <line x1="0" y1="0" x2="60" y2="60" stroke="#C8102E" strokeWidth="2" />
                <line x1="60" y1="0" x2="0" y2="60" stroke="#C8102E" strokeWidth="2" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#ffffff" strokeWidth="10" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="#ffffff" strokeWidth="10" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#C8102E" strokeWidth="6" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="#C8102E" strokeWidth="6" />
              </svg>
              <span className='text-sm font-semibold text-neutral-800'>United Kingdom</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <div className='size-2 rounded-full bg-indigo-500' />
              <span className='text-sm font-bold text-neutral-800'><Counter value="24,991" /></span>
            </div>
          </motion.div>

          {/* Country Card 2 */}
          <motion.div 
            className='self-end w-full max-w-52 bg-white text-black p-3 rounded-xl flex items-center justify-between shadow-sm border border-neutral-50'
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
          >
            <div className='flex items-center gap-3'>
              {/* Flag */}
              <svg viewBox="0 0 100 100" className="size-6 rounded-full border border-neutral-100 shadow-sm">
                <rect width="100" height="50" fill="#e70013" />
                <rect y="50" width="100" height="50" fill="#ffffff" />
              </svg>
              <span className='text-sm font-semibold text-neutral-800'>Indonesia</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <div className='size-2 rounded-full bg-indigo-500' />
              <span className='text-sm font-bold text-neutral-800'><Counter value="17,270" /></span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default ExploreFeatures