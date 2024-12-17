"use client";

import React, { useState } from "react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    productImage: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, productImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("productName", formData.productName);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("quantity", formData.quantity);
    data.append("category", formData.category);
    if (formData.productImage) data.append("productImage", formData.productImage);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Product added successfully!");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        {/* Product Name */}
        <div className="mb-6">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
            required
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            rows={4}
            required
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            required
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={handleChange}
            required
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            required
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={handleChange}
            className="block w-full rounded-md p-3 border-gray-300 shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
