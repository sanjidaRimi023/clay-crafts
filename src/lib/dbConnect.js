import React from "react";
import { MongoClient, ServerApiVersion } from "mongodb";
export const collectionNames = {
  USERS: "users",
  PRODUCTS:"products"
}

export default function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URL;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.NEXT_PUBLIC_DB_NAME).collection(collectionName);
}
