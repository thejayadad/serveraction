import { Product } from "@/models/Product";
import { connectToDB } from "./db";

export const fetchProducts = async ()=> {
    connectToDB()
    try {
        const products = await Product.find({})
        return products
    } catch (error) {
        console.log(err)
        throw new Error("Failed to fectch products")
        
    }
}

export const fetchProduct = async (id)=> {
    connectToDB()
    try {
        const product = await Product.findById(id)
        return product
    } catch (error) {
        console.log(err);
        throw new Error("Failed to fetch product!");
    }

}