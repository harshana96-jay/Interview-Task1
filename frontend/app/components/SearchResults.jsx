"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("http://localhost:5000/api/properties");
      const data = await res.json();
      setProperties(data);
    };
    load();
  }, []);

  const filtered = properties.filter((p) => {
    const locationMatch = p.location?.toLowerCase().includes(search);
    const priceMatch = p.price?.toString().includes(search);
    const titleMatch = p.title?.toLowerCase().includes(search);
    return locationMatch || priceMatch || titleMatch;
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>Search Results</h1>

      {filtered.length === 0 && (
        <p>No properties found for "{search}".</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filtered.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}
