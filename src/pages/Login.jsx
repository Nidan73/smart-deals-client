import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[560px] border border-sky-300 bg-white px-8 py-10 md:px-12 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Login
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-purple-500">
              Register Now
            </Link>
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-base font-medium text-slate-800">
              Email
            </label>
            <input
              type="email"
              placeholder="smsowkothasan@gmail.com"
              className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-base text-slate-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-base font-medium text-slate-800">
              Password
            </label>
            <input
              type="password"
              placeholder="************"
              className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-base text-slate-700"
            />
            <p className="mt-2 text-sm text-gray-500 cursor-pointer hover:text-purple-500">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white text-lg font-semibold hover:opacity-95 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-lg font-semibold text-slate-800">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          type="button"
          className="w-full h-12 border border-gray-300 rounded-md bg-white text-slate-900 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
