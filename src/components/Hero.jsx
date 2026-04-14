import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f3e5f5] via-[#eef2f7] to-[#e6f7f2] py-16 md:py-20">
      {/* Left decorative lines */}
      <div className="absolute left-0 top-0 h-full w-40 md:w-56 opacity-40">
        <svg
          viewBox="0 0 220 300"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M-40 ${10 + i * 14}C40 ${30 + i * 14}, 90 ${70 + i * 14}, 150 ${
                110 + i * 14
              }C180 ${130 + i * 14}, 190 ${150 + i * 14}, 150 ${180 + i * 14}`}
              stroke="#d8b4fe"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Right decorative lines */}
      <div className="absolute right-0 top-0 h-full w-40 md:w-56 opacity-40">
        <svg
          viewBox="0 0 220 300"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={i}
              d={`M260 ${10 + i * 14}C180 ${30 + i * 14}, 130 ${70 + i * 14}, 70 ${
                110 + i * 14
              }C40 ${130 + i * 14}, 30 ${150 + i * 14}, 70 ${180 + i * 14}`}
              stroke="#c4b5fd"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-[#1e2f4a] md:text-6xl">
          Deal Your <span className="text-[#7c4dff]">Products</span>
          <br />
          In A <span className="text-[#7c4dff]">Smart</span> Way !
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-sm text-slate-500 md:text-lg">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl items-center overflow-hidden rounded-full bg-white shadow-lg">
          <input
            type="text"
            placeholder="search For Products, Categoreies..."
            className="w-full bg-transparent px-5 py-4 text-sm text-slate-700 outline-none"
          />
          <button className="flex h-14 w-16 items-center justify-center bg-[#7c4dff] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded bg-[#7c4dff] px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
            Watch All Products
          </button>

          <button className="rounded border border-[#a855f7] px-6 py-3 text-sm font-semibold text-[#7c4dff] hover:bg-white/50">
            Post an Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
