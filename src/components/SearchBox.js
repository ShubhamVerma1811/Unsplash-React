import React from "react";
import { Link } from "react-router-dom";

function SearchBox() {
  function searchPhoto(e) {
    e.preventDefault();
    localStorage.setItem("query", e.target.value);
  }

  return (
    <div>
      <nav>
        <form>
          <input
            type="text"
            onChange={searchPhoto}
            placeholder="Search Images"
          />
          <Link to={`/images/`}>
            <button type="submit">Search</button>
          </Link>
        </form>
      </nav>
    </div>
  );
}

export default SearchBox;
