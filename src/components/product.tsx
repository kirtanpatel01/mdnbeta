import { IconArrowRight, IconCheck, IconChevronUp, IconHeartFilled, IconMoodSmile } from '@tabler/icons-react'

function Product() {
  return (
    <div className='container mx-auto py-16 space-y-24 pr-14'>
      {/* Top Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left Column */}
        <div className='space-y-6'>
          <h1 className='text-5xl font-bold text-neutral-900 leading-tight'>
            Real-time visual<br />on your growth
          </h1>
          <p className='text-neutral-500 text-lg max-w-lg'>
            Streamline your workflows and automate manual tasks throughout contract lifecycle in a systematic, rule-based environment.
          </p>
          
          <ul className='space-y-3'>
            <li className='flex items-center gap-2 text-neutral-800 font-medium'>
              <IconCheck size={16} className='text-indigo-600'/>
              <span>40+ Freemium social-media templates</span>
            </li>
            <li className='flex items-center gap-2 text-neutral-800 font-medium'>
              <IconCheck size={16} className='text-indigo-600' />
              <span>Approved by social expert</span>
            </li>
          </ul>

          <a href="#" className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold text-lg'>
            Explore Product <IconArrowRight size={20} />
          </a>
        </div>

        {/* Right Column (Mock Dashboard) */}
        <div className='relative flex justify-center lg:justify-end'>
          {/* Main Card Container */}
          <div className='bg-neutral-100 rounded-md p-4 w-full max-w-md space-y-4'>
            {/* Chart Card */}
            <div className='bg-white rounded-2xl p-4 shadow-sm space-y-4'>
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
                  <div className=' flex-1 h-full'>
                    <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="prod-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="90" x2="400" y2="90" stroke="#e2e8f0" strokeDasharray="4" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="#e2e8f0" strokeDasharray="4" />

                      {/* Area Fill */}
                      <path d="M 0,120 L 50,110 L 100,70 L 150,80 L 200,30 L 250,90 L 300,40 L 350,20 L 400,80 L 400,150 L 0,150 Z" fill="url(#prod-gradient)" />

                      {/* Line */}
                      <path d="M 0,120 L 50,110 L 100,70 L 150,80 L 200,30 L 250,90 L 300,40 L 350,20 L 400,80" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="350" cy="20" r="4" fill="#3b82f6" stroke="white" strokeWidth="2" />
                    </svg>

                    {/* Tooltip */}
                    <div className='absolute top-8 -right-12  bg-neutral-900 text-white p-4 rounded-lg shadow-lg z-10'>
                      <p className='text-lg font-bold'>131 Followers</p>
                      <div className='flex items-center gap-0.5 bg-green-500/20 text-green-400 px-2 py-1 rounded-md mt-2 text-sm w-fit'>
                        <IconChevronUp size={10} strokeWidth={3} />
                        <span>8.4%</span>
                      </div>
                      {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-neutral-900'></div> */}
                    </div>
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
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white rounded-xl p-4 shadow-sm space-y-2'>
                <div className='flex items-center gap-2'>
                  <IconMoodSmile className='p-1 bg-amber-100 text-amber-400 rounded' size={28}/>
                  <span className='text-sm text-neutral-500 font-medium'>Followers</span>
                </div>
                <h2 className='text-3xl font-black text-neutral-900'>248,501</h2>
              </div>
              <div className='bg-white rounded-xl p-4 shadow-sm space-y-2'>
                <div className='flex items-center gap-2'>
                  <IconHeartFilled className='p-1 bg-rose-100 text-rose-400 rounded' size={28}/>
                  <span className='text-sm text-neutral-500 font-medium'>Likes</span>
                </div>
                <h2 className='text-3xl font-black text-neutral-900'>61,422</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (Stats Card) */}
      <div className='bg-[#f4f7fa] rounded-3xl p-10 space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {[
            { value: "89%", label: "Users satisfied with our service and features on the MDN App" },
            { value: "162+", label: "Hours of work saved, thanks to the amazing templates and workflow" },
            { value: "37%", label: "Hours of work saved, thanks to the amazing templates and workflow" },
          ].map((stat, index) => (
            <div className='space-y-3' key={index}>
              <h1 className='text-6xl font-bold text-neutral-900'>{stat.value}</h1>
              <p className='text-neutral-500 leading-relaxed'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className='text-center'>
          <a href="#" className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold'>
            Where this data comes from <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Product