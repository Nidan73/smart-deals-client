import React, { use } from "react";
import ProductCard from "../components/ProductCard";

const LatestProductSection = ({ latestProductPromise }) => {
  const products = use(latestProductPromise);

  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 border border-sky-300 py-2 text-center">
          <h2 className="text-3xl font-bold text-[#0f2744]">
            Recent <span className="text-[#8b5cf6]">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 border border-sky-300 p-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded bg-[#8b5cf6] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProductSection;
