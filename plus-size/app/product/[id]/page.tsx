import React from 'react';
import { useRouter } from 'next/router';

// Dummy product data for demonstration
const productData = {
  name: 'Sample Product',
  description: 'This is a sample description of the product.',
  price: 29.99,
  quantity: 150,
  category: 'Electronics',
  imageUrl: '/sample-product-image.jpg', // replace with actual image path
};

export default function ProductPage() {
  const { query } = useRouter();
  const { id } = query; // Retrieve the dynamic product id from URL

  // For now, we'll use the same dummy data for any product
  const product = productData;

  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between w-full lg:w-2/3 lg:pl-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-sm text-gray-600 mb-6">{product.category}</p>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <span className="text-sm text-gray-500">{product.quantity} available</span>
            </div>

            {/* Add to Cart / Purchase Button */}
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
