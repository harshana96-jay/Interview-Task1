import "./details.css";

export default async function PropertyDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/api/properties/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    return (
      <div className="property-page">
        <h1 style={{ color: "red" }}>Property not found</h1>
        <p>Received ID: {id}</p>
      </div>
    );
  }

  const property = await res.json();

  return (
    <div className="property-page">
      
      <a href="/" className="back-btn">← Back to Home</a>

      <img src={property.image} alt={property.title} className="hero-image" />

      <div className="property-header">
        <h1 className="property-title">{property.title}</h1>
        <div className="property-price">${property.price}</div>
      </div>

      <div className="property-info-grid">
        <div className="info-box"><strong>Beds:</strong> {property.beds}</div>
        <div className="info-box"><strong>Baths:</strong> {property.baths}</div>
        <div className="info-box"><strong>Size:</strong> {property.size} sqft</div>
        <div className="info-box"><strong>Type:</strong> House</div>
      </div>

      <p className="description">{property.description}</p>

      <div className="agent-box">
        <h3>Contact Agent</h3>
        <p>Name: Harshana Jayawickrama</p>
        <p>Phone: +44 755 123 456</p>
        <p>Email: agent@realestate.com</p>
      </div>

      <div className="similar-section">
        <h2>Similar Properties</h2>
        <div className="similar-grid">
          <div className="info-box">Similar Property 1</div>
          <div className="info-box">Similar Property 2</div>
          <div className="info-box">Similar Property 3</div>
        </div>
      </div>

    </div>
  );
}
