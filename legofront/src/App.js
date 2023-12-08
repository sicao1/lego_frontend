import "./App.css";

// import components
import AllSets from "./pages/AllSets";
import Form from "./pages/Form";
import SingleSet from "./pages/SingleSet";

// import hooks
import { useState, useEffect } from "react";

// import components from React Router
import { Route, Routes } from "react-router-dom";

const apiURL =
  "https://lego-terrarium-backend-57d807f8ae0e.herokuapp.com/legoapp/";

function App() {
  // setup state for our posts
  const [posts, setPosts] = useState([]);

  // functions
  const getSets = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    getSets();
  }, []);

  return (
    <div className="App">
      <h1>The Lego Terrarium</h1>

      <Routes>
        <Route exact path="/" element={<AllSets posts={posts} />} />
        <Route exact path="/post/:id" element={<SingleSet posts={posts} />} />
        <Route exact path="/new" element={<Form />} />
        <Route exact path="/edit/:id" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
