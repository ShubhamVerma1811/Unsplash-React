import React, { useEffect, useState } from "react";
import "../styles/Home/Home.css";

function SearchResults() {
  const [data, setData] = useState([]);

  const h = new Headers();

  h.append(
    "Authorization",
    "Client-ID E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk"
  );

  const uri = `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${localStorage.getItem(
    "query"
  )}`;

  const req = new Request(uri, {
    method: "GET",
    headers: h,
    mode: "cors",
  });

  useEffect(() => {
    fetchQueryPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  async function fetchQueryPhoto() {
    const res = await fetch(req);
    const data = await res.json();
    setData(data.results);
  }

  return (
    <div>
      <h1>{localStorage.getItem("query").toUpperCase()}</h1>
      <div className="imgContainer">
        {data.map((item) => (
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

export default SearchResults;
