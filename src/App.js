import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=5&client_id=mnC0DV-XWErpjHBpaQpZsRBFu0Pd1INHBzLEVeZhha4`
      );
      setImages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <h1>Random Picture Generator</h1>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))}
        </div>
      )}
      <button onClick={fetchImages}>Get More Images</button>
    </div>
  );
}

export default App;
