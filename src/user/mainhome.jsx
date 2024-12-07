import React from 'react';
import Navbar from '../user/usernavbar.jsx';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">

      <Navbar/>

      {/* Hero Section */}
      <header className="hero-section mt-5">
        <h1>Welcome to the Art Gallery</h1>
        <p>Discover breathtaking art from around the world.</p>
        <button className="cta-button">Explore Now</button>
      </header>

      {/* Art Gallery Grid */}
      <section className="art-gallery">
        <h2>Featured Artworks</h2>
        <div className="art-grid">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div className="art-card" key={index}>
                <img
                  src={`https://via.placeholder.com/200?text=Artwork+${index + 1}`}
                  alt={`Artwork ${index + 1}`}
                />
                <div className='d-flex justify-content-between p-2'>
                <h3>Artwork {index + 1}</h3>
                <button className="buy-button btn btn-warning">Add to cart</button>
              </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
