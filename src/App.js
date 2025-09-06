import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header with Navigation */}
      <header style={headerStyle}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Explore the World with Anuj</h1>
        <nav>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#destinations" style={navLinkStyle}>Destinations</a>
          <a href="#gallery" style={navLinkStyle}>Gallery</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </nav>
      </header>

      {/* Home Section with Banner */}
      <section 
        id="home" 
        style={{ 
          position: "relative",
          height: "80vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center"
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)"
        }}></div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", padding: "1rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
            Welcome to Your Travel Guide
          </h2>
          <p style={{ fontSize: "1.5rem", textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}>
            Discover amazing destinations, travel tips, and breathtaking places around the world.
          </p>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" style={sectionStyle("#fff")}>
        <h2 style={headingStyle}>Top Destinations</h2>
        <div style={destinationsContainer}>
          <DestinationCard 
            image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" 
            title="Paris, France" 
            description="The city of love, art, and amazing cuisine." 
          />
          <DestinationCard 
            image="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80" 
            title="Tokyo, Japan" 
            description="A bustling metropolis mixing tradition and technology." 
          />
          <DestinationCard 
            image="https://images.unsplash.com/photo-1506976785307-8732d8d94fc8?auto=format&fit=crop&w=800&q=80" 
            title="Sydney, Australia" 
            description="Beautiful beaches, iconic Opera House, and lively culture." 
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={sectionStyle("#e0f7fa")}>
        <h2 style={headingStyle}>Travel Gallery</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          <GalleryImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
          <GalleryImage src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" />
          <GalleryImage src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" />
          <GalleryImage src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={sectionStyle("#fff")}>
        <h2 style={headingStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          Planning your next adventure? Reach out at <a href="mailto:anuj@travelguide.com" style={{ color: "#4a90e2" }}>anuj@travelguide.com</a>.
        </p>
        <p style={paragraphStyle}>
          Follow us on social media: <a href="#" style={{ color: "#4a90e2" }}>Instagram</a> | <a href="#" style={{ color: "#4a90e2" }}>Facebook</a>
        </p>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2025 Explore the World with Anuj. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Components
const DestinationCard = ({ image, title, description }) => (
  <div style={destinationCard}>
    <img src={image} alt={title} style={imageStyle} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const GalleryImage = ({ src }) => (
  <img src={src} alt="Gallery" style={galleryImageStyle} />
);

// Styles
const headerStyle = {
  background: "#4a90e2",
  padding: "1.5rem",
  color: "#fff",
  textAlign: "center"
};

const navLinkStyle = {
  margin: "0 15px",
  color: "#ffeb3b",
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer"
};

const sectionStyle = (bgColor) => ({
  padding: "3rem",
  backgroundColor: bgColor,
  textAlign: "center",
  minHeight: "50vh"
});

const headingStyle = {
  color: "#333",
  fontSize: "2rem",
  marginBottom: "1rem"
};

const paragraphStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  color: "#555",
  maxWidth: "700px",
  margin: "0 auto"
};

const destinationsContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
  marginTop: "2rem"
};

const destinationCard = {
  width: "300px",
  background: "#f9f9f9",
  padding: "1rem",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  textAlign: "center",
  transition: "transform 0.3s",
  cursor: "pointer"
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px"
};

const galleryImageStyle = {
  width: "300px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  transition: "transform 0.3s",
  cursor: "pointer"
};

const footerStyle = {
  background: "#222",
  padding: "1rem",
  textAlign: "center",
  color: "#aaa"
};

export default App;
