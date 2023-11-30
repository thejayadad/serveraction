import React from 'react'
import { fetchProducts } from '@/lib/data'

const ProductsPage = async  () => {
    const products = await fetchProducts()
  return (
    <section className="mt-8  max-w-screen-lg mx-auto min-h-screen border border-orange-300 p-6">
        <div className='flex flex-col'>
        <div
        className='flex justify-between bg-orange-200'
        ><span>search</span>
        Add Product
        </div>
        </div>
    </section>
  )
}

export default ProductsPage