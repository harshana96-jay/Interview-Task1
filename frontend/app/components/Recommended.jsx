"use client";

import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import "./recommended.css";

export default function Recommended() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then(res => res.json())
      .then(data => setProperties(data.slice(0, 4)));
  }, []);

  return (
    <div className="recommended-container">
      <h2 className="recommended-title">Recommended Properties</h2>

      <div className="recommended-grid">
        {properties.map((p) => (
          <PropertyCard key={p._id} property={p} />
        ))}
      </div>
    </div>
  );
}
