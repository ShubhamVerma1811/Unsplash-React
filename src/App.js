import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  // #region
  // const uri = "https://api.unsplash.com/photos/";

  // const h = new Headers();
  // h.append(
  //   "Authorization",
  //   "Client-ID E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk"
  // );

  // h.append("Accept-Version", "v1");
  // // h.append('Authorization', 'Bearer ')

  // const req = new Request(uri, {
  //   method: "GET",
  //   headers: h,
  //   mode: "cors",
  // });

  // useEffect(() => {
  //   Callback();
  // }, []);

  // async function Callback() {
  //   try {
  //     const res = await fetch(
  //       "https://unsplash.com/oauth/token?client_id=E5EHMkfEkragu1136UCpc_fGGenGwqZltRj6vgw9Hyk&client_secret=JZevWVGE9HhVVfRdkzMzSslOq5adzyAFyH_7ucov_n8&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000&code=GZEMYtD7J_bMVVdJbG6kWyNJN6DRa8GDia_-19BJg5E&grant_type=authorization_code",
  //       {
  //         method: "POST",
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // #endregion

  return (
    <div className="App">
      <Router>
        <Route path="/" component={SearchBox} />
        <Route path="/" exact component={Home} />
        <Route path="/images/:id" exact component={SearchResults} />
      </Router>
    </div>
  );
}

export default App;
