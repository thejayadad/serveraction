import React from 'react'
import { fetchProduct } from '@/lib/data'
import Link from 'next/link';
import { updateProduct } from '@/lib/actions';

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
                className='h-48'
                src={product.img}
                />
            </div>
            <form action={updateProduct}
             className='flex flex-col'

            >
            <input type="hidden" name="id" value={product.id} />
            <label
            className='mt-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
            >Title</label>
          <input 
           className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
          type="text" name="title" placeholder={product.title} />
             <label
            className='mt-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
            >Price</label>
          <input 
          className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
          type="number" name="price" placeholder={product.price} />

        <label
            className='mt-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
            >Description</label>
          <textarea
          rows={3} 
           className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
          type="text" name="desc" placeholder={product.desc} />

             <label
            className='mt-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
            >Stock</label>
          <input 
          className="mb-4 p-2 border-b border-gray-300 focus:outline-none"   
          type="number" name="stock" placeholder={product.stock} />
            <label
            className='mt-2 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer'
            >Image</label>
          <input 
          className="mb-4 p-2 border-b border-gray-300 focus:outline-none"   
          type="text" name="img" placeholder={product.img} />
            <button >Update</button>
      </form>

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