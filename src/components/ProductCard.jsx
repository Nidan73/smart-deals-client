import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const { _id, title, price_min, price_max, image } = product || {};

  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full max-w-[360px] rounded-md bg-[#f5f5f5] p-4">
      <div className="mb-4 overflow-hidden rounded-md bg-[#d9d9d9]">
        {!imgError && image ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className="h-[210px] w-full object-cover"
          />
        ) : (
          <div className="h-[210px] w-full bg-[#d9d9d9]" />
        )}
      </div>

      <h2 className="mb-2 text-[18px] font-semibold leading-[1.2] text-[#0f2744] line-clamp-2">
        {title}
      </h2>

      <p className="mb-4 text-[16px] font-bold text-[#8b5cf6]">
        ৳ {price_min?.toLocaleString()} - {price_max?.toLocaleString()}
      </p>

      <button className="w-full rounded-md border border-[#8b5cf6] py-3 text-[16px] font-semibold text-[#8b5cf6] transition hover:bg-[#8b5cf6] hover:text-white">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
