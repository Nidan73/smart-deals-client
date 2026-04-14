import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const modelOpenRef = useRef(null);
  const [bids, setBids] = useState([]);
  const {
    _id,
    title,
    price_min,
    price_max,
    image,
    description,
    condition,
    usage,
    created_at,
    seller_name,
    seller_image,
    location,
    status,
  } = product;
  const { user } = use(AuthContext);
  const handleModalOpen = () => {
    modelOpenRef.current.showModal();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/bids/byProduct/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBids(data);
      });
  }, [_id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.buyerName.value;
    const email = e.target.buyerEmail.value;
    const image = e.target.buyerImage.value;
    const contact = e.target.contactInfo.value;
    const bidAmmount = e.target.offerPrice.value;

    const newBid = {
      product: _id,
      buyer_image: image,
      buyer_name: name,
      buyer_contact: contact,
      buyer_email: email,
      bid_price: Number(bidAmmount),
      status: "pending",
    };

    fetch("http://localhost:5000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          modelOpenRef.current.close();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your bid has been Placed",
            showConfirmButton: false,
            timer: 1500,
          });
          // add new bid to the state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price);
          setBids(newBids);
        }
      });
  };
  return (
    <section className="bg-[#f3f3f3] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <div className="overflow-hidden rounded-md bg-[#d9d9d9]">
            <img
              src={image}
              alt={title}
              className="h-[320px] w-full object-cover"
            />
          </div>

          <div className="mt-4 rounded-md bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-[#0f2744]">
              Product Description
            </h3>

            <div className="mb-3 flex flex-wrap gap-6 text-sm">
              <p>
                <span className="font-semibold text-[#8b5cf6]">
                  Condition :
                </span>{" "}
                {condition}
              </p>
              <p>
                <span className="font-semibold text-[#8b5cf6]">
                  Usage Time :
                </span>{" "}
                {usage}
              </p>
            </div>

            <p className="text-sm leading-6 text-gray-600">{description}</p>
          </div>
        </div>

        {/* Right side */}
        <div>
          <Link
            to="/allProducts"
            className="mb-2 inline-block text-sm text-gray-500 hover:text-[#8b5cf6]"
          >
            ← Back To Products
          </Link>

          <h1 className="text-3xl font-bold text-[#0f2744]">{title}</h1>

          <div className="mt-2 inline-block rounded bg-[#f3e8ff] px-3 py-1 text-xs font-medium text-[#8b5cf6]">
            All And Fashion
          </div>

          <div className="mt-4 rounded-md bg-white p-4 shadow-sm">
            <h2 className="text-2xl font-bold text-green-600">
              ৳ {price_min?.toLocaleString()} - {price_max?.toLocaleString()}
            </h2>
            <p className="mt-1 text-sm text-gray-500">Price starts from</p>
          </div>

          <div className="mt-4 rounded-md bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-[#0f2744]">
              Product Details
            </h3>

            <p className="text-sm text-gray-600">
              <span className="font-semibold">Product ID :</span> {_id}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Posted :</span>{" "}
              {new Date(created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-4 rounded-md bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-[#0f2744]">
              Seller Information
            </h3>

            <div className="flex items-center gap-3">
              <img
                src={seller_image}
                alt={seller_name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#0f2744]">{seller_name}</h4>
                <p className="text-sm text-gray-500">Local seller</p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {product.email}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-800">
                  {status}
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={handleModalOpen}
            className="mt-4 w-full rounded-md bg-[#8b5cf6] py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            I Want Buy This Product
          </button>
          <dialog
            ref={modelOpenRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box max-w-3xl rounded-2xl bg-[#f5f5f5] p-8 md:p-10">
              <h3 className="mb-8 text-center text-3xl font-bold text-[#0f2744]">
                Give Seller Your Offered Price
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-lg font-medium text-[#0f2744]">
                      Buyer Name
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      defaultValue={user?.displayName}
                      className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-lg outline-none focus:border-[#8b5cf6]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-lg font-medium text-[#0f2744]">
                      Buyer Email
                    </label>
                    <input
                      type="email"
                      name="buyerEmail"
                      readOnly
                      defaultValue={user?.email}
                      className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-lg outline-none focus:border-[#8b5cf6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-lg font-medium text-[#0f2744]">
                    Buyer Image URL
                  </label>
                  <input
                    type="text"
                    name="buyerImage"
                    readOnly
                    defaultValue={user?.photoURL}
                    className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-lg outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-lg font-medium text-[#0f2744]">
                    Place your Price
                  </label>
                  <input
                    type="number"
                    name="offerPrice"
                    placeholder="e.g. 55000"
                    className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-lg outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-lg font-medium text-[#0f2744]">
                    Contact Info
                  </label>
                  <input
                    type="text"
                    name="contactInfo"
                    defaultValue={user?.phoneNumber}
                    className="h-14 w-full rounded-lg border border-gray-300 bg-white px-4 text-lg outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-20">
                  <button
                    type="button"
                    onClick={() => modelOpenRef.current.close()}
                    className="rounded-lg border border-[#8b5cf6] px-8 py-3 text-xl font-semibold text-[#8b5cf6] transition hover:bg-[#f3e8ff]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-lg bg-[#8b5cf6] px-8 py-3 text-xl font-semibold text-white transition hover:opacity-90"
                  >
                    Submit Bid
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-8 rounded-md bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-[#0f2744]">
          Bids for This Product
        </h3>

        {bids.length === 0 ? (
          <div className="rounded-md border border-dashed border-gray-300 py-10 text-center text-gray-500">
            No bids yet for this product.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-sm text-[#0f2744]">
                  <th>SL No</th>
                  <th>Product</th>
                  <th>Buyer</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {bids.map((bid, index) => (
                  <tr key={bid._id}>
                    <td className="font-medium">{index + 1}</td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded bg-gray-200">
                          <img
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0f2744]">
                            {title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            ৳ {price_min?.toLocaleString()} -{" "}
                            {price_max?.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                          <img
                            src={bid.buyer_image}
                            alt={bid.buyer_name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0f2744]">
                            {bid.buyer_name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {bid.buyer_email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="font-semibold text-[#0f2744]">
                      ৳ {Number(bid.bid_price).toLocaleString()}
                    </td>

                    <td>
                      <div className="flex flex-wrap gap-2">
                        <button className="rounded border border-green-500 px-3 py-1 text-xs font-medium text-green-600 hover:bg-green-50">
                          Accept Offer
                        </button>
                        <button className="rounded border border-red-500 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50">
                          Reject Offer
                        </button>
                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        Status:{" "}
                        <span className="font-semibold capitalize text-yellow-600">
                          {bid.status}
                        </span>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
