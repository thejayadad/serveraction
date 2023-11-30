import React from 'react'
import { fetchProducts } from '@/lib/data'
import TopNav from '@/components/Dashboard/TopNav/TopNav'
import Link from 'next/link'


const ProductsPage = async  () => {
    const products = await fetchProducts()
  return (
    <section className="mt-8  max-w-screen-lg mx-auto min-h-screen border p-6">
        <div className='flex flex-col'>
        <TopNav />
        <table className='mt-6'>
            <thead>
                <tr>
                <td>Name</td>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Quanity</td>
                    <td>Update</td>
                </tr>
            </thead>
            <tbody className='bg-transparent divide-y divide-gray-200'>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>
                                <img
                                className='h-16'
                                src={product.img}
                                />
                            </td>
                            <td>{product.desc}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td className='flex items-center mt-6 gap-2'>
                                <Link 
                                style={{fontSize: '12px'}}
                                href={`/dashboard/products/${product.id}`}>Update</Link> | <span 
                                style={{fontSize: '12px'}}
                                >DELEte</span>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    </section>
  )
}

export default ProductsPage