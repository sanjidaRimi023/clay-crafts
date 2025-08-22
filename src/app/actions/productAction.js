"use server"

import dbConnect from "@/lib/dbConnect";

export const getProducts =async () => {
     // const res = await fetch("/potteryData.json");
      const productCollection =  dbConnect("products");
      const res = await productCollection.find({}).toArray();
      return res;
}