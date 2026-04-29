"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./hero.css";

export default function Hero() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`/properties/search?search=${encodeURIComponent(search)}`);
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Find Your Perfect Place, Stress-Free
        </h1>

        <p className="hero-desc">
          Discover luxury homes, modern apartments, and exclusive deals tailored just for you.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search by location or price..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search Property</button>
        </div>
      </div>
    </div>
  );
}
