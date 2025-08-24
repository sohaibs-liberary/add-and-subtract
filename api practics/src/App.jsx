import React, { useState, useEffect } from "react";
import Postinfo from "./Components/Postinfo";

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

          <div className="cards">


          {data.map((item, index) => (
            <div key={index}>
              <div className="card" onClick={Postinfo}  >
               
                  <img
                    src={item.images[0]}
                    alt="product image"
                    className="productimg"
                  />
                  <h2 className="price" >${item.price}</h2>
                  <h3>{item.title}  </h3>
                  <p>{item.name}  </p>
                  {/* {
                    data.category.map((item , index ) => (

                      <h1 key={index}> {item.slug} </h1>

                    ))} */}
                
                
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <Postinfo/>
    </>
  );
}

export default App;
