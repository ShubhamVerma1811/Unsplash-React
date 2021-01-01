import React, { useEffect, useState } from "react";
import { baseURL, h as header } from "../services/tokens";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = React.useRef(1);
  const dataLoading = React.useRef(false);
  const [colCount, setColCount] = useState(3);

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

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const uri = `${baseURL}/photos/?per_page=12&page=${page.current}`;

      const req = new Request(uri, {
        method: "GET",
        headers: header,
        mode: "cors",
      });
      dataLoading.current = true;
      const res = await fetch(req);
      const data = await res.json();

      setImages((prev) => [...prev, ...data]);

      setLoading(false);
      dataLoading.current = false;
      console.log(page.current);
      console.log("called loadData");
    }

    loadData();

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // derived state
  const colWithImages = getImagesWithColumns();

  return (
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
        {loading && <h1>Loading ...</h1>}
      </div>
    </div>
  );
}

export default Home;
