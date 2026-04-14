import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#031b34] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white">
              Smart<span className="text-[#8b5cf6]">Deals</span>
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-300">
              Your trusted marketplace for authentic local products, because the
              good stuff hates long pilgrimages.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#8b5cf6] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allProducts"
                  className="hover:text-[#8b5cf6] transition"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-[#8b5cf6] transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#8b5cf6] transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-[#8b5cf6] transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Categories</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="hover:text-[#8b5cf6] transition cursor-pointer">
                Electronics
              </li>
              <li className="hover:text-[#8b5cf6] transition cursor-pointer">
                Vehicles
              </li>
              <li className="hover:text-[#8b5cf6] transition cursor-pointer">
                Home & Living
              </li>
              <li className="hover:text-[#8b5cf6] transition cursor-pointer">
                Fashion
              </li>
              <li className="hover:text-[#8b5cf6] transition cursor-pointer">
                Books
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Contact & Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[#8b5cf6]" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-[#8b5cf6]" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-[#8b5cf6]" />
                <span>support@smartdeals.com</span>
              </li>
            </ul>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-white">Social Links</h3>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#8b5cf6] hover:text-[#8b5cf6]"
                >
                  <FaFacebookF size={13} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#8b5cf6] hover:text-[#8b5cf6]"
                >
                  <FaTwitter size={13} />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#8b5cf6] hover:text-[#8b5cf6]"
                >
                  <FaGithub size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-gray-400">
          © 2025 SmartDeal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
