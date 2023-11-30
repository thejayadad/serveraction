import React from 'react'
import { fetchProducts } from '@/lib/data'
import TopNav from '@/components/Dashboard/TopNav/TopNav'


const ProductsPage = async  () => {
    const products = await fetchProducts()
  return (
    <section className="mt-8  max-w-screen-lg mx-auto min-h-screen border p-6">
        <div className='flex flex-col'>
        <TopNav />
        <table>
            <thead>
                <tr>
                    <td>Name</td>
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
                            <td>{product.desc}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>

                        </tr>
                    ))}
            </tbody>
        </table>
        </div>
    </section>
  )
}

export default ProductsPage