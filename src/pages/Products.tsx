import React from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Sliding Door", price: "$300" },
  { id: 2, name: "Casement Window", price: "$200" },
  { id: 3, name: "French Door", price: "$450" },
];

const Products: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dummyProducts.map((p) => (
          <div key={p.id} className="border p-6 rounded-lg hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="mb-4">{p.price}</p>
            <Link
              to={`/products/${p.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
