"use client";

import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import "./featured.css";

export default function FeaturedDeals() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then(res => res.json())
      .then(data => setProperties(data.slice(0, 3)));
  }, []);

  return (
    <div className="featured-container">
      <h2 className="featured-title">Featured Deals</h2>

      <div className="featured-grid">
        {properties.map((p) => (
          <PropertyCard key={p._id} property={p} />
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="featured-btn">
          See More Properties
        </button>
      </div>
    </div>
  );
}
