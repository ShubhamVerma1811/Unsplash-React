import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchBox/SearchBox.css";

function SearchBox() {
  function searchPhoto(e) {
    e.preventDefault();
    localStorage.setItem("query", e.target.value);
  }

  return (
    <div>
      <nav>
        <Link to="/">Unsplash</Link>
        <form>
          <input
            type="text"
            onChange={searchPhoto}
            placeholder="Search Images"
          />
          <Link to={`/images/`} id="btn">
            <button type="submit">Search</button>
          </Link>
        </form>
        <Link to="#">Log In</Link>
        <Link to="#">Sign Up</Link>
      </nav>
    </div>
  );
}

export default SearchBox;
