import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
      <p className="text-gray-700">Showing details for product ID: {id}</p>
      {/* You can fetch product data from API here using id */}
    </div>
  );
};

export default ProductDetail;
