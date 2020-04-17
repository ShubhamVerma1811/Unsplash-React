import React, { useEffect, useState } from "react";
import "../styles/Home/Home.css";

function Home() {
  const [images, setImages] = useState([]);

  const h = new Headers();

  h.append(
    "Authorization",
    "Client-ID E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk"
  );

  const uri = `https://api.unsplash.com/photos/?per_page=20`;

  const req = new Request(uri, {
    method: "GET",
    headers: h,
    mode: "cors",
  });

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPhotos() {
    const res = await fetch(req);
    const data = await res.json();
    setImages(data);
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="imgContainer">
        {images.map((item) => (
          <div key={item.id} className="content">
            <img
              className="images"
              src={item.urls.regular}
              alt={item.alt_descriptions}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
