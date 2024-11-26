import React from 'react';

export default function AddProductPage() {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Add a New Product</h2>
      <form className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        {/* Product Name */}
        <div className="mb-6">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            required
            rows={4}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter product price"
            required
            min="0"
            step="0.01"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter product quantity"
            required
            min="0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter product category"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
