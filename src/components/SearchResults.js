import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { h as header } from "../services/tokens";

function SearchResults() {
  let { query } = useParams();

  const [data, setData] = useState([]);

  const uri = `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${query}`;

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
        setData(data.results);
      })();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  return (
    <div>
      <h1>{query.toUpperCase()}</h1>
      <div className="imgContainer">
        {data.length ? (
          data.map((item) => (
            <div key={item.id} className="content">
              <img
                className="images"
                src={item.urls.regular}
                alt={item.alt_descriptions}
              />
            </div>
          ))
        ) : (
          <p>Couldn't find any images for that. Please try again</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
