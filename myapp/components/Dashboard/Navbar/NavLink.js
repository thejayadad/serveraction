'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


const NavLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname()


  return (
    <Link 
    className={`link ${
        pathname === '/' ? 'bg-orange-300 py-2' : 'active'
      }`}
    href={href}>
        {label}
    </Link>
  );
};

export default NavLink;
