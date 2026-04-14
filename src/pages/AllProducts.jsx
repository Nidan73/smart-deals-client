import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();

  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#0f2744]">
            All <span className="text-[#8b5cf6]">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
