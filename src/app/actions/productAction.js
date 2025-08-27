"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const productCollection = dbConnect(collectionNames.PRODUCTS);
  const res = await productCollection.find({}).toArray();
  return res;
};
export const getSingleData = async (id) => {
  const productCollection = dbConnect(collectionNames.PRODUCTS);
  const product = await productCollection.findOne({
    _id: new ObjectId(id),
  });
  return product;
};

export const getSixProducts = async () => {
  const productCollection = dbConnect(collectionNames.PRODUCTS);
  const products = await productCollection.find({}).limit(6).toArray();
  return products;
};

export const addProduct = async (productData) => {
  const productCollection = dbConnect(collectionNames.PRODUCTS);

  if (typeof productData.tags === "string") {
    productData.tags = productData.tags.split(",").map((tag) => tag.trim());
  }

  productData.price = Number(productData.price);

  const result = await productCollection.insertOne(productData);
    const insertedIdStr = result.insertedId.toString();

  return {
    success: true,
    message: "Product added successfully!",
    data: { ...result, insertedId: insertedIdStr }
  };
};
