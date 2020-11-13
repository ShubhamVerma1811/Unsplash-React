import React, { useEffect, useState } from "react";
import { baseURL, h as header } from "../services/tokens";

function Home() {
  const [images, setImages] = useState([]);

  const uri = `${baseURL}/photos/?per_page=20`;

  const req = new Request(uri, {
    method: "GET",
    headers: header,
    mode: "cors",
  });

  useEffect(() => {
    try {
      (async function () {
        const res = await fetch(req);
        const data = await res.json();
        setImages(data);
      })();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="imgContainer">
        {images.length ? (
          images.map((item) => (
            <div key={item.id} className="content">
              <img
                className="images"
                src={item.urls.regular}
                alt={item.alt_descriptions}
              />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
