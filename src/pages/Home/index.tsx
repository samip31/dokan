import React from "react";

import IntroductionBody from "../../components/IntroductionBody";
import Header from "../../components/Header";

import OurProducts from "@src/components/OurProducts";
import TrendingProducts from "@src/components/TrendingProducts";

export default function Home() {
  return (
    <div className="bg-hero-pattern bg-center bg-fixed">
      <Header />
      <IntroductionBody />
      <OurProducts />
      <TrendingProducts />
    </div>
  );
}
