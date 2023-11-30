import { addProduct } from '@/lib/actions'
import Link from 'next/link'
import React from 'react'

const AddProduct = () => {    
  return (
    <section className="min-h-screen border p-6 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className='bg-white max-w-screen-md mx-auto p-8 rounded-lg shadow-lg'>
            <h2 className='text-center'>Add Product</h2>
            <form 
            className='flex flex-col'
            action={addProduct}>
            <input 
            className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
            type='text' placeholder='Title' name='title' required />
            <textarea 
            rows={3}
            className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
            type='text' placeholder='Description' name='desc' required />
            <input
             className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
                type='number'
                placeholder='Price'
                name='price'

            />
            <input
             className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
                type='number'
                placeholder='Stock'
                name='stock'

              />
            <input
             className="mb-4 p-2 border-b border-gray-300 focus:outline-none"
                type='text'
                placeholder='Image'
                name='img'     

            />
            <button>Submit</button>
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

export default AddProduct