import React, { useEffect, useState } from "react";
import { baseURL, h as header } from "../services/tokens";

let timeout;

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = React.useRef(1);
  const dataLoading = React.useRef(false);
  const [colCount, setColCount] = useState(getColCount);

  const getImagesWithColumns = () => {
    const arr = [];
    for (let i = 0; i < colCount; i++) {
      arr.push([]);
    }

    // [0,3,6,9,12],[1,4,7,10],[2,5,8,11]
    for (let i = 0; i < images.length; i++) {
      arr[i % arr.length].push(images[i]);
    }

    return arr;
  };

  function getColCount() {
    if (window.innerWidth < 768 && window.innerWidth > 480) {
      return 2;
    }
    if (window.innerWidth < 480) {
      return 1;
    }
    if (window.innerWidth > 768) {
      return 3;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setColCount(getColCount());
    });

    return window.removeEventListener("resize", (e) => {
      setColCount(getColCount());
    });
  }, []);

  useEffect(() => {
    async function loadData() {
      dataLoading.current = true;
      setLoading(true);
      const uri = `${baseURL}/photos/?per_page=12&page=${page.current}`;

      const req = new Request(uri, {
        method: "GET",
        headers: header,
        mode: "cors",
      });
      const res = await fetch(req);
      const data = await res.json();
      setImages((prev) => [...prev, ...data]);
      setLoading(false);
      dataLoading.current = false;
    }

    loadData();

    const listener = (e) => {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.scrollHeight - window.innerHeight / 2 &&
        !dataLoading.current
      ) {
        console.log(page.current);
        console.log("called loadData");

        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        timeout = setTimeout(() => {
          page.current += 1;
          loadData();
          console.log(dataLoading.current);
          console.log("calling uri", page.current);
        }, 100);
      }
    };
    window.addEventListener("scroll", listener);
    console.log("once");
    return () => {
      window.removeEventListener("scroll", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // derived state
  const colWithImages = getImagesWithColumns();

  return (
    <div>
      <h1>Home</h1>
      <div className="imgContainer">
        {colWithImages.map((column, index) => (
          <div key={index}>
            {column.map((imgs) => (
              <div
                key={imgs.id}
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
        {loading && <h1>Loading ...</h1>}
      </div>
    </div>
  );
}

export default Home;
