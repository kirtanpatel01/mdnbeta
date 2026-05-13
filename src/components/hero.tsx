import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandBehance,
  IconArrowUpRight,
  IconChevronUp,
  IconFlag2Filled
} from "@tabler/icons-react"
import { motion } from "motion/react"

const circles = [
  {
    id: 1,
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 0.5
    }
  },
  {
    id: 2,
    initial: { x: -24, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 1,
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  },
  {
    id: 3,
    initial: { x: -48, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      delay: 1.5,
      type: "spring" as const,
      stiffness: 300,
      damping: 30
    }
  },
];

function Hero() {
  return (
    <div className="w-full relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[32px_32px]">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 px-4 lg:px-0 relative z-10">
      <div className="space-y-16 lg:space-y-32">
        <motion.div
          className="space-y-8"

        >
          <motion.h1
            className="flex flex-col gap-1 text-5xl md:text-7xl lg:text-8xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <span>Schedule Better.</span>
            <span>Create Faster.</span>
          </motion.h1>
          <motion.p
            className="max-w-96"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            The AI-powered scheduler designed for busy Instagram creators. Plan your feed, automate your reels, and grow your audience with intelligent insights.
          </motion.p>
          <motion.button
            className="flex items-center gap-2 bg-neutral-950 rounded-md text-white px-4 py-2 cursor-pointer hover:bg-neutral-800 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
          >
            <span>Join the waitlist</span>
            <IconArrowRight size={16} />
          </motion.button>
        </motion.div>

        <div className="space-y-2">
          <div className="flex ml-1.5">
            {circles.map((circle) => (
              <motion.div
                key={circle.id}
                className="size-8 rounded-full bg-neutral-400 -ml-2 border border-white shadow-md"
                initial={circle.initial}
                animate={circle.animate}
                transition={circle.transition}
              />
            ))}
          </div>
          <motion.p
            className="text-neutral-700 text-sm max-w-80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          >
            <span className="text-black font-semibold">12,000+</span> people already joined the waitlist for Gridly
          </motion.p>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-4">
        <div className="relative mx-auto max-w-68 ">
          <motion.div 
            className="p-4 rounded-xl shadow-sm shadow-blue-500/30 space-y-5 bg-white"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="flex justify-between ">
              <h3 className="font-bold text-sm">Recent Product</h3>
              <button className="px-2 rounded-md py-1 shadow-md flex items-center gap-1">
                <span className="text-xs">Live Preview </span>
                <IconArrowUpRight size={12} />
              </button>
            </div>

            <img src="pink_flower_pot.png" alt="Product Image" className="rounded-lg w-full " />

            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2>Pink Flower pot</h2>
                <p className="text-xs text-neutral-400">Tuesday, 21 May 26 | 12:40 PM</p>

                <div className="flex items-center gap-1 text-sm">
                  <div className="rounded-full bg-linear-to-br from-purple-500 to-blue-700 size-4"></div>
                  <span className="font-medium">Vivek Pal</span>
                </div>
              </div>

              <div className="text-xs bg-green-100 text-green-500 px-2 py-1 rounded-md">
                + 2.6%
              </div>
            </div>

            <div className="w-full bg-slate-200 rounded h-px" />

            <button className="w-full text-sm px-4 py-2 rounded-md bg-blue-500 text-white ">
              See All Post
            </button>
          </motion.div>

          {/* Chart */}
          <motion.div 
            className="hidden lg:block absolute top-16 -right-30 max-w-36 p-3 rounded-lg shadow shadow-blue-400/20 bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <motion.svg 
              viewBox="0 0 100 40" 
              className="w-full h-16"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
              style={{ originY: 1 }}
            >
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 38 L 10 38 C 13 38, 14 29, 17 29 L 22 29 C 25 29, 28 15, 30 11 C 33 6, 37 26, 40 31 C 42 34, 44 22, 46 22 L 56 22 C 60 22, 66 6, 70 2 C 73 0, 80 15, 85 22 C 90 26, 95 29, 100 29 L 100 40 L 0 40 Z"
                fill="url(#blueGradient)"
              />
              <path
                d="M 0 38 L 10 38 C 13 38, 14 29, 17 29 L 22 29 C 25 29, 28 15, 30 11 C 33 6, 37 26, 40 31 C 42 34, 44 22, 46 22 L 56 22 C 60 22, 66 6, 70 2 C 73 0, 80 15, 85 22 C 90 26, 95 29, 100 29"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          {/* Social Media Bar */}
          <motion.div 
            className="w-fit hidden lg:flex absolute bottom-12 -left-16 p-3 rounded-lg shadow-md shadow-blue-400/20 flex-col items-center gap-3 bg-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <IconBrandInstagram size={24} className="text-pink-500" />
            <IconBrandFacebook size={24} className="text-blue-600" />
            <IconBrandBehance size={22} className="text-sky-500" />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-4">
          <motion.div 
            className="w-full max-w-xs p-4 rounded-lg shadow shadow-blue-400/30 flex items-center gap-3 bg-white"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            <div className="size-12 rounded-full border-2 border-green-400 bg-indigo-400" />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Followers Gain</h3>
              <span className="text-xs text-neutral-500 ">from last 7 days</span>
            </div>
            <div className="px-1.5 py-1 flex items-center rounded-md bg-green-200 text-xs">
              <IconChevronUp size={12} className="text-green-500" />
              <span className="text-green-500">21.4%</span>
            </div>
          </motion.div>

          <motion.div 
            className="w-full max-w-xs p-4 rounded-lg shadow shadow-blue-400/30 space-y-2 bg-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconFlag2Filled size={32} className="bg-purple-200 text-purple-400 rounded-md p-2" />
                <span>Reach</span>
              </div>
              <div className="px-1.5 py-1 rounded-md bg-green-200 flex items-center">
                <IconChevronUp size={12} className="text-green-500" />
                <span className="text-green-500 text-xs">8.4%</span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold ">103,450</h1>
            <p className="text-xs text-neutral-600">From last 7 days</p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero