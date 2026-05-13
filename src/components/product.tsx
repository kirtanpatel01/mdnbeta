import { IconArrowRight, IconCheck, IconChevronUp, IconHeartFilled, IconMoodSmile } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import { motion, animate } from 'motion/react'

function Counter({ value }: { value: string | number }) {
  const isFloat = value.toString().includes('.')
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === 'number' ? value : (isFloat ? parseFloat(value.toString().replace(/,/g, '')) : parseInt(value.toString().replace(/,/g, ''), 10))

  useEffect(() => {
    const start = numericValue * 0.8
    
    const controls = animate(start, numericValue, {
      duration: 1.5,
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

function Product() {
  return (
    <div className='container mx-auto py-16 space-y-24 px-4  lg:px-0'>
      {/* Top Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left Column */}
        <div className='space-y-6'>
          <motion.h1 
            className='text-4xl md:text-5xl font-bold text-neutral-900 leading-tight'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Real-time visual<br />on your growth
          </motion.h1>
          
          <motion.p 
            className='text-neutral-500 text-lg max-w-lg'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Streamline your workflows and automate manual tasks throughout contract lifecycle in a systematic, rule-based environment.
          </motion.p>
          
          <ul className='space-y-3'>
            {[
              "40+ Freemium social-media templates",
              "Approved by social expert"
            ].map((text, idx) => (
              <motion.li 
                key={idx}
                className='flex items-center gap-2 text-neutral-800 font-medium'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
              >
                <IconCheck size={16} className='text-indigo-600'/>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a 
            href="#" 
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold text-lg'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          >
            Explore Product <IconArrowRight size={20} />
          </motion.a>
        </div>

        {/* Right Column (Mock Dashboard) */}
        <div className='relative flex justify-center lg:justify-end lg:pr-14'>
          {/* Main Card Container */}
          <motion.div 
            className='bg-neutral-100 rounded-md p-4 w-full max-w-md space-y-4'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {/* Chart Card */}
            <motion.div 
              className='bg-white rounded-2xl p-4 shadow-sm space-y-4'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            >
              <div className='flex justify-between items-center'>
                <h3 className='font-bold text-neutral-800'>Your Performance</h3>
                <span className='border border-neutral-200 rounded-md px-2 py-0.5 text-sm text-neutral-400'>Last 7 Days</span>
              </div>
              
              {/* SVG Chart */}
              <div className=' mt-4'>
                <div className='flex h-60'>
                  {/* Y-Axis Labels */}
                  <div className='w-8 relative text-xs text-slate-400'>
                    <span className='absolute top-[20%] -translate-y-1/2 right-1'>500</span>
                    <span className='absolute top-[40%] -translate-y-1/2 right-1'>400</span>
                    <span className='absolute top-[60%] -translate-y-1/2 right-1'>300</span>
                    <span className='absolute top-[80%] -translate-y-1/2 right-1'>200</span>
                  </div>

                  {/* Chart Area */}
                  <div className=' flex-1 h-full relative'>
                    <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="prod-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="prod-clip">
                          <motion.rect 
                            x="0" y="0" width="0" height="150" 
                            whileInView={{ width: 400 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, ease: "easeInOut", delay: 0.8 }}
                          />
                        </clipPath>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="90" x2="400" y2="90" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="#e2e8f0" strokeDasharray="4" />

                      {/* Clipped Content */}
                      <g clipPath="url(#prod-clip)">
                        {/* Area Fill */}
                        <path d="M 0,120 L 50,110 L 100,70 L 150,80 L 200,30 L 250,90 L 300,40 L 350,20 L 400,80 L 400,150 L 0,150 Z" fill="url(#prod-gradient)" />

                        {/* Line */}
                        <path d="M 0,120 L 50,110 L 100,70 L 150,80 L 200,30 L 250,90 L 300,40 L 350,20 L 400,80" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="350" cy="20" r="4" fill="#3b82f6" stroke="white" strokeWidth="2" />
                      </g>
                    </svg>

                    {/* Tooltip */}
                    <motion.div 
                      className='absolute top-8 right-2 bg-neutral-900 text-white p-4 rounded-lg shadow-lg z-10'
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 1.5 }}
                    >
                      <p className='text-lg font-bold'><Counter value="131" /> Followers</p>
                      <div className='flex items-center gap-0.5 bg-green-500/20 text-green-400 px-2 py-1 rounded-md mt-2 text-sm w-fit'>
                        <IconChevronUp size={10} strokeWidth={3} />
                        <span><Counter value="8.4" />%</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* X-Axis Labels */}
                <div className='flex justify-between text-xs text-slate-400 mt-2 ml-8'>
                  <span>Jan 14</span>
                  <span>Jan 15</span>
                  <span>Jan 16</span>
                  <span>Jan 17</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 gap-4'>
              {[
                { title: "Followers", value: "248,501", icon: <IconMoodSmile className='p-1 bg-amber-100 text-amber-400 rounded' size={28}/> },
                { title: "Likes", value: "61,422", icon: <IconHeartFilled className='p-1 bg-rose-100 text-rose-400 rounded' size={28}/> }
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.title}
                  className='bg-white rounded-xl p-4 shadow-sm space-y-2'
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 + idx * 0.1 }}
                >
                  <div className='flex items-center gap-2'>
                    {stat.icon}
                    <span className='text-sm text-neutral-500 font-medium'>{stat.title}</span>
                  </div>
                  <h2 className='text-3xl font-black text-neutral-900'><Counter value={stat.value} /></h2>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section (Stats Card) */}
      <div className='bg-[#f4f7fa] rounded-3xl p-6 md:p-10 space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {[
            { value: "89", suffix: "%", label: "Users satisfied with our service and features on the MDN App" },
            { value: "162", suffix: "+", label: "Hours of work saved, thanks to the amazing templates and workflow" },
            { value: "37", suffix: "%", label: "Hours of work saved, thanks to the amazing templates and workflow" },
          ].map((stat, index) => (
            <motion.div 
              className='space-y-3' 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
            >
              <h1 className='text-6xl font-bold text-neutral-900'>
                <Counter value={stat.value} />{stat.suffix}
              </h1>
              <p className='text-neutral-500 leading-relaxed'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div 
          className='text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#" className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold'>
            Where this data comes from <IconArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Product