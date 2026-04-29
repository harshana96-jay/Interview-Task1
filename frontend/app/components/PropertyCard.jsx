import Link from "next/link";
import "./propertycard.css";

export default function PropertyCard({ property }) {
  return (
    <Link
      href={`/property/${property._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
  <div className="heart-icon">
    <i className="fa-regular fa-heart"></i>
  </div>

  <img
    src={property.image}
    alt={property.title}
    className="card-img"
  />

  <div className="card-body">
    <h3>${property.price}</h3>
    <p>{property.beds} Beds • {property.baths} Baths • {property.size} sqft</p>
    <p style={{ color: "#666" }}>{property.title}</p>
  </div>
</div>
    </Link>
  );
}
