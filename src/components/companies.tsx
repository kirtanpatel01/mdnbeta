import React from 'react'

function Companies() {
  return (
    <div className='container mx-auto py-16 space-y-12 flex flex-col items-center'>
      <p>Join the waitlist with other 20,000+ people across Europe</p>
      <ul className='w-full max-w-7xl flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0'>
        {["google", "coinbase", "ripple", "pipedrive", "airbnb"].map((company) => (
          <li key={company} className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300 '>
            {company}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Companies