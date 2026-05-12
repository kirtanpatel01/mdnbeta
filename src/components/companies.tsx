import React from 'react'

function Companies() {
  return (
    <div className='container mx-auto py-16 space-y-12 flex flex-col items-center'>
      <p>Join the waitlist with other 20,000+ people across Europe</p>
      <ul className='w-full max-w-7xl flex items-center justify-between'>
        {["google", "coinbase", "ripple", "pipedrive", "airbnb"].map((company) => (
          <li className='text-5xl font-bold text-neutral-300 '>
            {company}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Companies