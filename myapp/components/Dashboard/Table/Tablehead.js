'use client'
import React from 'react'

const Tablehead = ({children}) => {
  return (
    <th
    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
    >
        {children}
    </th>
  )
}

export default Tablehead