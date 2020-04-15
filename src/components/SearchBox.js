import React, { useEffect, useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const h = new Headers();

  h.append(
    "Authorization",
    "Client-ID E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk"
  );

  const uri = `https://api.unsplash.com/search/photos?page=1&query=${query}`;

  const req = new Request(uri, {
    method: "GET",
    headers: h,
    mode: "cors",
  });

  useEffect(() => {
    fetchQueryPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function fetchQueryPhoto() {
    const res = await fetch(req);
    const data = await res.json();
    setData(data);
  }
  console.log(data);

  function searchPhoto(e) {
    setQuery(e.target.firstChild.value);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Search Box</h1>
      <form onSubmit={searchPhoto}>
        <input type="text" placeholder="Search Images" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
