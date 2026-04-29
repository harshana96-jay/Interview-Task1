"use client";

import Hero from "./components/Hero";
import BrowseProperties from "./components/BrowseProperties";
import FeaturedDeals from "./components/FeaturedDeals";
import SellingBanner from "./components/SellingBanner";
import Recommended from "./components/Recommended";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrowseProperties />
      <FeaturedDeals />
      <SellingBanner />
      <Recommended />
    </div>
  );
}
