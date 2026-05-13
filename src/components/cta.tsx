import { motion } from 'motion/react'

function CTA() {
  return (
    <div className='container mx-auto flex flex-col items-center gap-8 py-16'>
      <motion.h1 
        className='text-3xl md:text-4xl font-medium flex flex-col items-center gap-2'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span>Join thousands of</span>
        <span>successful Instagram creators</span>
      </motion.h1>
      
      <motion.button 
        className='bg-neutral-50 px-6 py-3 font-bold rounded-md text-neutral-950 hover:cursor-pointer'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get the Early Beta 
      </motion.button>
    </div>
  )
}

export default CTA