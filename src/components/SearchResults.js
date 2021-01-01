import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { h as header } from "../services/tokens";

function SearchResults() {
  let { query } = useParams();
  const page = React.useRef(1);
  const dataLoading = React.useRef(false);
  const [colCount, setColCount] = useState(3);

  const [data, setData] = useState([]);

  const getImagesWithColumns = () => {
    const arr = [];
    for (let i = 0; i < colCount; i++) {
      arr.push([]);
    }

    // [0,3,6,9,12],[1,4,7,10],[2,5,8,11]
    for (let i = 0; i < data.length; i++) {
      arr[i % arr.length].push(data[i]);
    }

    return arr;
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 768 && window.innerWidth > 480) {
        setColCount(2);
      }
      if (window.innerWidth < 480) {
        setColCount(1);
      }
      if (window.innerWidth > 768) {
        setColCount(3);
      }
    });

    return window.removeEventListener("resize", (e) => {
      console.log("removed");
    });
  }, []);

  async function loadData() {
    const uri = `https://api.unsplash.com/search/photos?page=${page.current}&per_page=12&query=${query}`;

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
      page.current = 1;

      const listener = (e) => {
        if (
          document.documentElement.scrollTop >
            document.documentElement.scrollHeight / 3 &&
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
  }, [query]);

  const colWithImages = getImagesWithColumns();

  return (
    <div>
      <h1>{query.toUpperCase()}</h1>
      <div>
        <h1>Home</h1>
        <div className="imgContainer">
          {colWithImages.map((column) => (
            <div>
              {column.map((imgs) => (
                <div
                  style={{
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    className="images"
                    src={imgs.urls.regular}
                    alt={imgs.alt_descriptions}
                  />
                </div>
              ))}
            </div>
          ))}
          {dataLoading && <h1>Loading ...</h1>}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
