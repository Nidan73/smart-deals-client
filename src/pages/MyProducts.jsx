import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const MyProducts = () => {
  const { user } = use(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/myProducts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log("delete product id:", id);
  };

  const handleMakeSold = (id) => {
    console.log("make sold product id:", id);
  };

  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-[#0f2744]">
          My Products: <span className="text-[#8b5cf6]">{products.length}</span>
        </h2>

        <div className="overflow-x-auto rounded-md bg-white shadow-sm">
          <table className="table">
            <thead>
              <tr className="text-sm text-[#0f2744]">
                <th>SL No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="h-12 w-12 overflow-hidden rounded bg-gray-200">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>

                  <td className="font-semibold text-[#0f2744]">
                    {product.title}
                  </td>

                  <td>{product.category}</td>

                  <td className="font-medium text-[#0f2744]">
                    ৳ {product.price_min?.toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        product.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : product.status === "sold"
                            ? "bg-green-200 text-green-800"
                            : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        to={`/updateProduct/${product._id}`}
                        className="rounded border border-[#8b5cf6] px-3 py-1 text-xs font-medium text-[#8b5cf6] hover:bg-[#f3e8ff]"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="rounded border border-red-400 px-3 py-1 text-xs font-medium text-red-500 hover:bg-red-50"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => handleMakeSold(product._id)}
                        disabled={product.status === "sold"}
                        className={`rounded border px-3 py-1 text-xs font-medium ${
                          product.status === "sold"
                            ? "cursor-not-allowed border-gray-300 text-gray-400"
                            : "border-green-400 text-green-600 hover:bg-green-50"
                        }`}
                      >
                        Make Sold
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              No products found for this user.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
