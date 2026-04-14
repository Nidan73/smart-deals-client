import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const AllBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/bids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
      });
  }, [user?.email]);

  const handleRemoveBid = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This bid will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b5cf6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bids/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = bids.filter((bid) => bid._id !== id);
              setBids(remaining);

              Swal.fire({
                title: "Removed!",
                text: "Your bid has been removed.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <section className="bg-[#f3f3f3] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-[#0f2744]">
          My Bids: <span className="text-[#8b5cf6]">{bids.length}</span>
        </h2>

        <div className="overflow-x-auto rounded-md bg-white shadow-sm">
          <table className="table">
            <thead>
              <tr className="text-sm text-[#0f2744]">
                <th>SL No</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Bid Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded bg-gray-200">
                        <img
                          src={bid.product_image}
                          alt={bid.product_title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0f2744]">
                          {bid.product_title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          ৳ {bid.product_price_min} - {bid.product_price_max}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                        <img
                          src={bid.seller_image}
                          alt={bid.seller_name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0f2744]">
                          {bid.seller_name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {bid.seller_email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="font-semibold text-[#0f2744]">
                    ৳ {Number(bid.bid_price).toLocaleString()}
                  </td>

                  <td>
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold capitalize text-yellow-800">
                      {bid.status}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() => handleRemoveBid(bid._id)}
                      className="rounded border border-red-400 px-3 py-1 text-xs font-medium text-red-500 hover:bg-red-50"
                    >
                      Remove Bid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bids.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              You have not placed any bids yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBids;
