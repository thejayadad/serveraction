import Navbar from '@/components/Dashboard/Navbar/Navbar'
import Sidebar from '@/components/Dashboard/Sidebar/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex max-w-screen-xl mx-auto h-screen'>
        <div className='p-8 flex-none w-14'>
            <Sidebar />
        </div>
        <div className='flex shrink w-64 p-24 flex-col'> 
            <Navbar />
        {children}

        </div>
    </div>
  )
}

export default layout