'use client'
import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi';


const Add = () => {
  return (
    <Link
    className='flex items-center gap-2 text-blue-500 hover:text-blue-700 px-2 py-4 hover:bg-blue-300 rounded-xl border transition duration-300'
    href={'/dashboard/products/add'}>
      <FiPlus size={20} /> Add

    </Link>
  )
}

export default Add