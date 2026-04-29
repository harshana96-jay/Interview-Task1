import "./browse.css";

export default function BrowseProperties() {
  const categories = [
    {
      title: "Office Space",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Villa Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      title: "New Construction",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    {
      title: "Price Reduced",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
    },
    {
      title: "Recently Sold",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    }
  ];

  return (
    <div className="browse-container">
      <h2 className="browse-title">Browse Properties</h2>

      <div className="browse-grid">
        {categories.map((cat, index) => (
          <div key={index} className="browse-card">
            <img src={cat.image} alt={cat.title} />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
