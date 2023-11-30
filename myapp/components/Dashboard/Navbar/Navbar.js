'use client'
import React from 'react'
import NavLink from './NavLink'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/products', label: 'Products' },
    { href: '/dashboard/users', label: 'Users' },
];


const Navbar = () => {
    const pathname = usePathname()
    return (
    <header className='px-4 py-12 border-b'>
        <div className='flex justify-center gap-6 items-center'>
            <Link href={'/dashboard'}>
            <h2 className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition duration-300">
            WalletWorld Dashboard
          </h2>
            </Link>
            {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className='text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
          >
            {link.label}
          </Link>
        ))}
        </div>
    </header>
  )
}

export default Navbar