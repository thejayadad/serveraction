"use server";
import { Product } from "@/models/Product";
import { connectToDB } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addProduct = async (formData) => {
    const { title, desc, price, stock, img } =
    Object.fromEntries(formData);

    try {
        connectToDB()
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            img,
            
          });
      
          await newProduct.save();
        } catch (err) {
          console.log(err);
          throw new Error("Failed to create product!");
        
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");

}