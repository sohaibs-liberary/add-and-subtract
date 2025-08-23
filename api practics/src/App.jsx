import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((responsive) => responsive.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error in  API Fetching", error));
  }, []);

  return (
    <>
      <div className="body">
        <div>
          <h1 className="name">Store</h1>
          <p className="about">
            We have all kinds of Men online shopping variety available, from
            Men's Kurta Online Shopping, Men's shoes online shopping, Men's
            clothing, accessories and much
          </p>
          {data.map((item, index) => (
            <div key={index}>
              <div className="cards">
                 <div>

                  <img
                    src={item.images[0]}
                    alt="product image"
                    className="productimg"
                    />
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                    </div>
                    
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
