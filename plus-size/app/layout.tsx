import './globals.css';
import React from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">My Website</h1>
            <div>
              <Link href="/" className="text-white hover:underline mr-6">
                Home
              </Link>
              <Link href="/form-company" className="text-white hover:underline mr-6">
                Register
              </Link>
              <Link href="/add-product" className="text-white hover:underline mr-6">
                Add Product
              </Link>
              <Link
                href="/login"
                className="text-white bg-indigo-800 px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Login
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
