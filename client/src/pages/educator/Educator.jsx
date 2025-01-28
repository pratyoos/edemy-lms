import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <h1 className="text-5xl font-semibold text-red-400">Coming Soon!</h1>
  
      <div>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Educator