import {
  IconBell,
  IconChevronDown,
  IconChevronUp,
  IconDots,
  IconFileAnalyticsFilled,
  IconHeartFilled,
  IconHome,
  IconMessage,
  IconMoneybag,
  IconMoodSmileFilled,
  IconPencil,
  IconSearch,
  IconSettings,
  IconShare,
  IconSparkles,
  IconSun,
  IconUserFilled
} from '@tabler/icons-react'
import { useState, useEffect, type ReactNode } from 'react'
import { motion, animate } from 'motion/react'

function Counter({ value }: { value: string | number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/,/g, ''), 10)

  useEffect(() => {
    const start = Math.floor(numericValue * 0.8)
    
    const controls = animate(start, numericValue, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    })
    return () => controls.stop()
  }, [numericValue])

  return <span>{typeof value === 'number' ? displayValue : Intl.NumberFormat('en-IN').format(displayValue)}</span>
}

interface StatItem {
  title: string;
  icon: ReactNode;
  color: string;
  value: string | number;
  trend: string;
  percentage: number;
}

function StatsGrid({ stats }: { stats: StatItem[] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {stats.map((i, idx) => (
        <motion.div 
          key={i.title}
          className='bg-white rounded-xl shadow-slate-400/30 p-4 space-y-3'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + idx * 0.05 }}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className={`rounded-lg p-2 ${i.color}`}>
                {i.icon}
              </div>
              <span className='text-lg'>{i.title}</span>
            </div>
            <div className={`rounded-md p-1 flex items-center ${i.trend === "up" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
              <IconChevronUp size={12} className={`${i.trend !== "up" ? "rotate-180" : ""}`} />
              <span className='text-xs'>{i.percentage}%</span>
            </div>
          </div>
          <h3 className='text-4xl font-bold'><Counter value={i.value} /></h3>
          <p className='text-sm text-neutral-500'>from 7 days ago</p>
        </motion.div>
      ))}
    </div>
  )
}

function ChartCard() {
  return (
    <motion.div 
      className='p-4 rounded-lg bg-white shadow-slate-400/30'
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <h2 className='text-xl font-bold'>Your Progress</h2>
          <div className='text-sm flex items-center gap-2'>
            <div className='rounded-full h-2 w-2 bg-blue-500'></div>
            <span>Followers</span>
          </div>
          <span className='text-sm'>Like</span>
          <span className='text-sm'>Reach</span>
        </div>

        <button className='flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-md'>
          <span className='text-sm'>Last Monday</span>
          <IconChevronDown size={12} />
        </button>
      </div>

      <div className='mt-4'>
        <div className='flex h-64'>
          {/* Y-Axis Labels */}
          <div className='w-8 relative text-xs text-slate-400'>
            <span className='absolute top-[20%] -translate-y-1/2 right-1'>500</span>
            <span className='absolute top-[40%] -translate-y-1/2 right-1'>400</span>
            <span className='absolute top-[60%] -translate-y-1/2 right-1'>300</span>
            <span className='absolute top-[80%] -translate-y-1/2 right-1'>200</span>
          </div>

          {/* Chart Area */}
          <div className='relative flex-1 h-full'>
            <svg viewBox="0 0 800 250" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <clipPath id="chart-clip">
                  <motion.rect 
                    x="0" y="0" width="0" height="250" 
                    whileInView={{ width: 800 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: "easeInOut", delay: 0.5 }}
                  />
                </clipPath>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="#e2e8f0" strokeDasharray="4" />

              {/* Clipped Content */}
              <g clipPath="url(#chart-clip)">
                {/* Area Fill */}
                <path d="M 0,200 L 80,160 L 160,170 L 240,100 L 320,180 L 400,110 L 480,130 L 560,40 L 640,120 L 720,150 L 800,100 L 800,250 L 0,250 Z" fill="url(#chart-gradient)" />

                {/* Line */}
                <path d="M 0,200 L 80,160 L 160,170 L 240,100 L 320,180 L 400,110 L 480,130 L 560,40 L 640,120 L 720,150 L 800,100" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* Highlighted Point */}
                <circle cx="320" cy="180" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
              </g>
            </svg>

            {/* HTML Tooltip */}
            <motion.div 
              className='absolute left-[40%] top-[72%] -translate-x-1/2 translate-y-[-110%] bg-slate-900 text-white p-3 rounded-lg text-xs shadow-lg z-10'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
            >
              <p className='text-gray-400 text-[10px] whitespace-nowrap'>January 16, 05 AM</p>
              <p className='font-medium text-sm whitespace-nowrap'>150 Followers</p>
              {/* Pointer triangle */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-900'></div>
            </motion.div>
          </div>
        </div>

        {/* X-Axis Labels */}
        <div className='flex justify-between text-xs text-slate-400 mt-2 ml-10'>
          <span>Jan 14</span>
          <span>Jan 15</span>
          <span>Jan 16</span>
          <span>Jan 17</span>
          <span>Jan 18</span>
          <span>Jan 19</span>
          <span>Jan 20</span>
        </div>
      </div>
    </motion.div>
  )
}

function RecentUploadsCard() {
  return (
    <motion.div 
      className='col-span-1 lg:col-span-2 p-4 rounded-t-lg bg-white shadow-slate-400/30 pb-20'
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
    >
      <h2 className='text-xl font-bold'>Recent Uploads</h2>
      <div className='flex flex-col md:flex-row items-start justify-between mt-4 gap-4'>
        <div className='flex flex-col items-start gap-2'>
          <span className='text-sm text-gray-400'>Content</span>
          <div className='flex flex-col sm:flex-row items-start gap-4 sm:gap-6'>
            <img src="/workspace_thumbnail.png" alt="Workspace" className='rounded-xl size-32 object-cover shrink-0' />
            <div className='space-y-4'>
              <h1 className='max-w-80 text-2xl sm:text-4xl font-bold'>Aesthetic Setup Reel</h1>
              <div className='flex items-center gap-2 text-sm'>
                <span className='text-gray-500'>Powered by</span>
                <div className='size-4 rounded-full bg-linear-to-l from-amber-300 via-lime-400 to-violet-400' />
                <span className='font-bold'>Vika Vendish</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <span className='text-sm text-gray-400'>Engagement</span>
          <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-bold'><Counter value="46,231" /></h1>
            <div className='flex items-center gap-0.5 bg-green-100 text-green-500 px-2 py-1 rounded-md text-sm'>
              <IconChevronUp size={12} />
              <span>15.4%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function EarningCard() {
  return (
    <motion.div 
      className='p-4 rounded-t-lg bg-white shadow-slate-400/30 space-y-4'
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
    >
      <h2 className='text-xl font-bold'>Earning</h2>
      <div className='flex items-center gap-2'>
        <IconMoneybag className='text-amber-600 bg-amber-200 rounded-md p-2 size-10' />
        <span>Total Earning</span>
      </div>
      <h1 className='text-4xl font-bold'>
        $ <Counter value={1251} />.00
      </h1>
      <div className='flex items-center gap-2'>
        <div className='bg-green-200 text-green-600 rounded-md flex items-center gap-1 p-2'>
          <IconChevronUp size={14} className='' />
          <span className='text-xs'>56.2%</span>
        </div>
        <span className='text-sm text-gray-400'>From last month </span>
      </div>
    </motion.div>
  )
}

function AccountCard() {
  return (
    <motion.div 
      className='bg-white p-4 rounded-lg space-y-2'
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
    >
      <div className='flex items-center justify-between'>
        <h3 className='font-bold'>Account</h3>
        <button className='bg-gray-200 p-1 rounded-full'>
          <IconDots size={12} />
        </button>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <img src="/avatar_profile.png" alt="Profile" className='size-24 rounded-full ring-2 ring-offset-1 ring-slate-200 object-cover' />
        <div className='text-center'>
          <h2 className='font-bold text-xl'>@espilonwataki</h2>
          <p className='text-sm text-gray-400'>Instagram Creator</p>
        </div>
        <div className='w-full flex justify-evenly gap-4 bg-neutral-100 rounded-md py-4'>
          {[{ value: 302, title: "Posts" }, { value: 1000, title: "Followers" }, { value: 500, title: "Following" }].map(({ value, title }) => (
            <div className='flex flex-col items-center' key={title}>
              <p className='text-lg font-bold'><Counter value={value} /></p>
              <p className='text-xs text-gray-400'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function UpcomingPostCard() {
  return (
    <motion.div 
      className='bg-white p-4 rounded-t-lg space-y-4 pb-9'
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
    >
      <div className='font-bold'>Upcoming Post</div>
      <img src="/workspace_thumbnail.png" alt="Workspace" className='rounded-lg w-full aspect-square object-cover' />
      <div className='space-y-1'>
        <h2 className='text-2xl font-bold'>Aesthetic Workspace Reel</h2>
        <div className='text-sm text-gray-500'>Tuesday, January 28 | 01:31 PM</div>
        <div className='flex items-center gap-2'>
          <img src="/avatar_author.png" alt="Author" className='size-6 rounded-full object-cover' />
          <span className='font-semibold'>Saloni Yappa</span>
        </div>
      </div>
      <button className='bg-blue-500 text-white w-full py-3 rounded-md'>
        See All Post
      </button>
    </motion.div>
  )
}

function Dashboard() {
  const stats = [
    {
      title: "Followers",
      icon: <IconMoodSmileFilled size={20} />,
      color: "bg-yellow-100 text-yellow-500",
      value: 10200,
      trend: "up",
      percentage: 12,
    },
    {
      title: "Likes",
      icon: <IconHeartFilled size={20} />,
      color: "bg-rose-100 text-rose-500",
      value: "61,422",
      trend: "down",
      percentage: 12,
    },
    {
      title: "Reach",
      icon: <IconFileAnalyticsFilled size={20} />,
      color: "bg-cyan-100 text-cyan-500",
      value: "1,22,394",
      trend: "up",
      percentage: 12,
    },
  ]

  return (
    <div className='container mx-auto bg-gray-100 h-auto lg:h-[1001px] rounded-xl flex flex-col lg:flex-row border border-indigo-100/50'>
      <aside className='bg-gray-50 w-full lg:w-fit h-auto lg:h-full p-2 lg:p-1 rounded-t-xl lg:rounded-l-xl'>
        <ul className='flex items-center gap-1'>
          {["bg-rose-500", "bg-yellow-500", "bg-green-500"].map((i) => (
            <li className={`size-3 rounded-full ${i}`} />
          ))}
        </ul>

        <div className='relative h-full flex flex-row lg:flex-col items-center py-2 justify-between lg:justify-start w-full lg:w-fit gap-4 lg:gap-0'>
          <IconSparkles className='text-amber-500 fill-amber-500 size-8' />

          <div className='hidden lg:block w-8 bg-neutral-300 h-px mb-4 mt-2.5' />

          <motion.ul 
            className='flex flex-row lg:flex-col gap-2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[IconHome, IconMessage, IconPencil, IconShare, IconSettings].map((Icon, idx) => (
              <motion.li 
                key={idx}
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
                }}
              >
                <Icon className={`p-1.5 rounded-md size-8 ${idx === 0 ? 'bg-neutral-200' : ''}`} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className='relative lg:absolute lg:bottom-4 flex flex-row lg:flex-col space-x-2 lg:space-x-0 space-y-0 lg:space-y-2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.5 }
              }
            }}
          >
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
              <IconSun className='p-1.5 rounded-md size-8' />
            </motion.div>
            <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
              <IconUserFilled className='bg-neutral-300 rounded-full p-2 size-8' />
            </motion.div>
          </motion.div>
        </div>
      </aside>
      <main className='w-full h-full px-4 pt-10 space-y-6'>
        <motion.header 
          className='flex flex-col md:flex-row items-center justify-between gap-4'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className='w-full max-w-md flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 '>
            <IconSearch size={16} className='text-gray-700' />
            <input placeholder='Search' className='bg-transparent focus:outline-none' />
          </div>

          <div className='flex items-center gap-6'>
            <div className='relative'>
              <div className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full'></div>
              <IconBell size={22} className='' />
            </div>
            <div className='relative'>
              <div className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full'></div>
              <IconMessage size={22} className='' />
            </div>
            <div className='flex items-center gap-2'>
              <IconUserFilled className='size-8 bg-linear-to-tl from-violet-500 via-blue-500 to-indigo-500 rounded-full p-2 fill-white' />
              <div>
                <h3 className='font-bold text-sm'>Panic Guy</h3>
                <p className='text-xs text-gray-500'>panicguy05</p>
              </div>
            </div>
          </div>
        </motion.header>

        <section className='space-y-4'>
          <motion.h1 
            className='text-3xl font-bold'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Overview
          </motion.h1>

          {/* Main 2-Column Layout */}
          <div className='flex flex-col lg:flex-row gap-4'>
            {/* Left Column (Stats, Chart, Two Cards) */}
            <div className='flex-1 space-y-4'>
              <StatsGrid stats={stats} />
              <ChartCard />
              
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <RecentUploadsCard />
                <EarningCard />
              </div>
            </div> {/* Closes Left Column */}

            {/* Right Column (Account & Upcoming Post) */}
            <div className='max-w-72 w-full space-y-4'>
              <AccountCard />
              <UpcomingPostCard />
            </div>
          </div> {/* Closes Main Wrapper */}
        </section>
      </main>
    </div>
  )
}

export default Dashboard