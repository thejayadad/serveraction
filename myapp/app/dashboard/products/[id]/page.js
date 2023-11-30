import React from 'react'
import { fetchProduct } from '@/lib/data'
import Link from 'next/link';

const SingleProduct = async ({params}) => {
    const { id } = params;
    const product = await fetchProduct(id)
  return (
    <section className="min-h-screen border p-6 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className='bg-white max-w-screen-md mx-auto p-8 rounded-lg shadow-lg'>
            <h3
            className=' text-center font-light'
            >Item: {product.title}</h3>
            <div className='flex flex-col'>
                <img
                className='max-w-sscreen-xl'
                src={product.img}
                />
            </div>

        <div className='flex justify-between'>
        <Link
        className='mt-12'
        href={'/dashboard/products'}>Back</Link>
        <Link
        className='mt-12'
        href={'/dashboard/'}>Dashboard</Link>
        </div>
       </div>
    </section>
  )
}

export default SingleProduct