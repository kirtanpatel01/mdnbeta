import { IconArrowRight, IconChevronUp, IconFlagFilled } from '@tabler/icons-react'

function ExploreFeatures() {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16'>
      {/* Left Content */}
      <div className='space-y-6'>
        <h1 className='text-white text-5xl md:text-6xl font-bold leading-tight'>
          Reach nationwide<br />better and faster
        </h1>
        <p className='text-neutral-400 text-lg max-w-md'>
          Streamline your workflows and automate manual tasks throughout contract lifecycle in a systematic, rule-based environment.
        </p>
        <a href="#" className='inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors font-medium text-lg'>
          Explore Features <IconArrowRight size={20} />
        </a>
      </div>

      {/* Right Content (Cards) */}
      <div className='relative flex justify-center md:justify-end mr-12'>
        {/* Background Card */}
        <div className='bg-[#eef1f4] w-[340px] h-[280px] rounded-2xl relative p-6 flex flex-col justify-end gap-3 shadow-inner'>

          {/* Top Overlapping Card */}
          <div className='absolute -top-12 -right-6 md:-right-10 bg-white text-black p-6 rounded-xl shadow-2xl w-[300px] space-y-4 border border-neutral-100'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-violet-100 p-1.5 rounded-md'>
                  <IconFlagFilled size={16} className='text-violet-600' />
                </div>
                <span className='text-neutral-500 font-medium'>Reach</span>
              </div>
              <div className='flex items-center gap-0.5 bg-green-100 text-green-600 px-2 py-1 rounded-md text-xs font-semibold'>
                <IconChevronUp size={12} strokeWidth={3} />
                <span>8.4%</span>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-neutral-900'>122,637</h2>
              <p className='text-sm text-neutral-400 mt-1'>From last 7 days</p>
            </div>
          </div>

          {/* Country Card 1 */}
          <div className='max-w-60 bg-white text-black p-3 rounded-xl flex items-center justify-between shadow-sm border border-neutral-50'>
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
              <span className='text-sm font-bold text-neutral-800'>24,991</span>
            </div>
          </div>

          {/* Country Card 2 */}
          <div className='self-end w-full max-w-52 bg-white text-black p-3 rounded-xl flex items-center justify-between shadow-sm border border-neutral-50'>
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
              <span className='text-sm font-bold text-neutral-800'>17,270</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExploreFeatures