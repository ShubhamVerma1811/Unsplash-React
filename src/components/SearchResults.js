import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { h as header } from "../services/tokens";

function SearchResults() {
  let { query } = useParams();
  const page = React.useRef(1);
  const dataLoading = React.useRef(false);

  const [data, setData] = useState([]);

  const uri = `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${query}`;

  async function loadData() {
    const req = new Request(uri, {
      method: "GET",
      headers: header,
      mode: "cors",
    });

    const res = await fetch(req);
    const data = await res.json();
    if (page.current === 1) {
      setData(data.results);
    } else {
      setData((prev) => [...prev, ...data.results]);
    }
  }

  useEffect(() => {
    try {
      loadData();

      const listener = (e) => {
        if (
          document.documentElement.scrollTop >
            document.documentElement.scrollHeight / 2 &&
          !dataLoading.current
        ) {
          console.log("scrolled");
          page.current += 1;
          loadData();
        }
      };
      window.addEventListener("scroll", listener);

      console.log("once");

      return () => {
        window.removeEventListener("scroll", listener);
      };
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
