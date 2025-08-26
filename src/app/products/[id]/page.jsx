import Image from 'next/image';
import Link from 'next/link';
import { Heart, Share2, Star } from 'lucide-react';
import { getSingleData, getSixProducts } from '@/app/actions/productAction';

export default async function ProductDetail({ params }) {
  const { id } = await params;

  // fetch single product directly
  const product = await getSingleData(id);
    const sixProducts = await getSixProducts();

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="bg-stone-50 min-h-screen p-4 sm:p-8">
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-4 border border-stone-200 rounded-lg shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            <div className="bg-white p-6 border border-stone-200 rounded-lg shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-amber-700 uppercase">{product.category}</p>
                  <h1 className="text-4xl font-bold text-stone-800 mt-1">{product.name}</h1>
                  <p className="text-lg text-stone-500 mt-2">{product.detail}</p>
                </div>
                <div className="flex items-center gap-4 text-stone-500">
                  <button className="hover:text-red-500 transition-colors"><Heart size={24} /></button>
                  <button className="hover:text-amber-800 transition-colors"><Share2 size={24} /></button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-b border-stone-200 py-4">
                <p className="text-4xl font-light text-amber-900">$ {product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(4)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                    <Star size={20} />
                  </div>
                  <span className="text-stone-600">(18 Reviews)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">Description</h3>
                <p className="text-stone-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4">
                <h4 className="font-semibold text-stone-700">Tags:</h4>
                {product.tags.map(tag => (
                  <span key={tag} className="bg-stone-200 text-stone-700 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
      
            <div className="lg:col-span-1">
          <div className="bg-white p-6 border border-stone-200 rounded-lg shadow-sm sticky top-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-6 border-b pb-4">You Might Also Like</h2>
            <div className="space-y-6">
              {sixProducts.map((prod) => (
                <Link href={`/products/${prod._id}`} key={prod._id} className="flex items-center gap-4 group">
                  <div className="w-24 h-24 flex-shrink-0 bg-stone-100 rounded-md overflow-hidden">
                    <Image 
                      src={prod.image} 
                      alt={prod.name} 
                      width={100} 
                      height={100} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-700 group-hover:text-amber-800 transition-colors">{prod.name}</h4>
                    <p className="text-md text-amber-900">৳ {prod.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        </div>
      </main>
    </div>
  );
}
