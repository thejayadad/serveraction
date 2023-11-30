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
        } catch (error) {
          console.log(error);
          throw new Error("Failed to create product!");
        
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");

}

export const updateProduct = async (formData) => {
    const { title, desc, price, stock, img } =
    Object.fromEntries(formData);
    try {
        connectToDB()
        const updateFields = {
            title,
            desc,
            price,
            stock,
            img,
          };
          Object.keys(updateFields).forEach(
            (key) =>
              (updateFields[key] === "" || undefined) && delete updateFields[key]
          );
      
          await Product.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update product!");        
    }
    revalidatePath("/dashboard/products");
  redirect("/dashboard/products");

}