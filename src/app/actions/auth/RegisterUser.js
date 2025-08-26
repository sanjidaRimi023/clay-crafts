"use server";

import dbConnect from "@/lib/dbConnect";

export const RegisterUser = async (payload) => {
  const userCollection = dbConnect("users");
  const { email, password } = payload;
  if (!email || !password) {
    return {
      success: false,
    };
  }
  console.log(email, password);
  const userExits = await userCollection.findOne({
    email: payload.email,
  });

  if (!userExits) {
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { acknowledged, insertedId: insertedId.toString() };
  }
  return {
    success: false,
  };
};
