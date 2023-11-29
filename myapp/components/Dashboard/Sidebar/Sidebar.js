'use client'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-around h-full w-32'>
        <div className='flex-none  h-14 bg-purple-200'>
        <span>Company Logo</span>
        username
        </div>
        <div className='flex shrink h-64 flex-col gap-8 bg-orange-300'>
            <Link href={'/dashboard/'}>Home</Link>
            <Link href={'/dashboard/product'}>Products</Link>
            <Link href={'/dashboard/user'}>Users</Link>
            <Link href={'/dashboard/product'}>Products</Link>
        </div>
        <div className='flex-none bg-green-200'>
            Logout
        </div>
    </div>
  )
}

export default Sidebar