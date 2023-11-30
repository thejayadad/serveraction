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
    <header className='px-4 py-12'>
        <div className='flex justify-center gap-6 items-center bg-purple-200'>
            <Link href={'/dashboard'}>
            <h2 className="text-3xl font-bold text-blue-500 hover:text-blue-700 transition duration-300">
            WalletWorld Dashboard
          </h2>
            </Link>
            {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        </div>
    </header>
  )
}

export default Navbar