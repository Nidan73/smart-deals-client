import React, { Suspense } from "react";
import Hero from "../components/Hero";
import LatestProductSection from "../sections/LatestProductSection";

const Home = () => {
  const latestProductPromise = fetch(
    "http://localhost:5000/latest-products",
  ).then((res) => res.json());
  return (
    <section>
      <Hero></Hero>
      <Suspense fallback={<div>Loading latest products...</div>}>
        <LatestProductSection
          latestProductPromise={latestProductPromise}
        ></LatestProductSection>
      </Suspense>
    </section>
  );
};

export default Home;
