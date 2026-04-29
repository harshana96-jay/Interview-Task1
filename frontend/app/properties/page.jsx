"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./properties.css";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFiltered(data);
      });
  }, []);

  // Filter by location
  const handleFilter = (value) => {
    setLocation(value);

    if (value === "") {
      setFiltered(properties);
    } else {
      const results = properties.filter(
        (p) => p.location.toLowerCase() === value.toLowerCase()
      );
      setFiltered(results);
    }
  };

  return (
    <div className="properties-container">

      {/* Back Button */}
      <a href="/" className="back-btn">← Back to Home</a>

      <h1 className="properties-title">Available Properties</h1>

      {/* Location Filter */}
      <div className="filter-box">
        <select
          value={location}
          onChange={(e) => handleFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">Filter by Location</option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
          <option value="Negombo">Negombo</option>
          <option value="Jaffna">Jaffna</option>
        </select>
      </div>

      {/* Properties Grid */}
      <div className="properties-grid">
        {filtered.map((property) => (
          <Link
            href={`/property/${property._id}`}
            key={property._id}
            className="property-card"
          >
            <img src={property.image} alt={property.title} />

            <div className="property-info">
              <h3>${property.price}</h3>
              <p>{property.beds} Beds • {property.baths} Baths</p>
              <p>{property.location}</p>
              <p>{property.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
