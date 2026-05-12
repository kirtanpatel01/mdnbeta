import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'

function Features() {
  return (
    <div className='container mx-auto flex justify-between items-start '>
      <h1 className="flex flex-col gap-4 font-bold text-6xl ">
        <div className='tracking-tight font-black'>
          <span>MDN</span>
          <span className="bg-linear-to-r from-purple-900 to-blue-600 bg-clip-text text-transparent">Beta.</span>
        </div>
        <span>Visualize & Schedule</span>
        <span>Your Growth Better.</span>
      </h1>

      <div className='space-y-10 max-w-md'>
        <p>
          Schedule your product seling, promotion, or gain
          followers using tons of powerful templates and easy to
          use tools in MDN App. Avalbale for IOS and MacOS.
        </p>
        <button className='px-4 py-2 rounded-md bg-black text-white flex items-center gap-1'>
          <span>Features</span>
          <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default Features