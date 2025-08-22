import React from 'react'

export default async function Products() {
  const data = await getProducts();
  console.log(data);
  return (
    <div>Products</div>
  )
}
