
import Navbar from '@/components/Dashboard/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <section>
        {children}
    </section>
    </div>
  )
}

export default layout