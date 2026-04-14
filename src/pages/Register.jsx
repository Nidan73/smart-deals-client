import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        return fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("this is my data", data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[680px] border border-sky-300 bg-white px-8 py-10 md:px-12 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Register Now!
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-purple-500">
              Login Now
            </Link>
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-lg font-medium text-slate-800">
              Name
            </label>
            <input
              type="text"
              placeholder="Mariam Swarna"
              className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-lg text-slate-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-slate-800">
              Email
            </label>
            <input
              type="email"
              placeholder="smsowkothasan@gmail.com"
              className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-lg text-slate-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-slate-800">
              Image-URL
            </label>
            <input
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-lg text-slate-700"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium text-slate-800">
              Password
            </label>
            <input
              type="password"
              placeholder="*************"
              className="w-full h-14 px-4 border border-gray-300 rounded-md outline-none focus:border-purple-500 text-lg text-slate-700"
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl font-semibold hover:opacity-95 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xl font-semibold text-slate-800">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full h-14 border border-gray-300 rounded-md bg-white text-slate-900 text-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <svg
            aria-label="Google logo"
            width="22"
            height="22"
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
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
