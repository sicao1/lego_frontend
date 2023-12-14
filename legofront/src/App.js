// import "./App.css";

// import components
import AllSets from "./pages/AllSets";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import Header from "./components/Header";
// import Modal from "./components/Modal";
import SingleSet from "./pages/SingleSet";

// import hooks
import { useState, useEffect } from "react";

// import components from React Router
import { Route, Routes } from "react-router-dom";
import Button from "./components/Style/Button";

const apiURL =
  "https://lego-terrarium-backend-57d807f8ae0e.herokuapp.com/legoapp/";

function App() {
  // setup state for our posts
  const [posts, setPosts] = useState([]);
  const [enter, setEnter] = useState(false);

  // search api
  // const [dataSearch, setDataSearch] = useState([]);

  // functions
  const getSets = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const handleFormSubmission = async (data, type) => {
    if (type === "new") {
      //if new create a resource
      const response = await fetch(apiURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      getSets();
    } else {
      // this will be where our edit fetch goes
      const response = await fetch(`${apiURL}${data.id}/`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      getSets();
    }
  };

  const deleteSet = async (id) => {
    const response = await fetch(`${apiURL}${id}/`, {
      method: "delete",
    });
    getSets();
  };

  const handleEnterClick = () => {
    setEnter(true);
  };

  useEffect(() => {
    getSets();
  }, []);

  return (
    <div>
      <Header />
      {enter === false ? (
        <div>
          <button onClick={handleEnterClick}>Enter</button>
        </div>
      ) : (
        <>
          <Routes>
            <Route
              exact
              path="/"
              element={<AllSets posts={posts} deleteSet={deleteSet} />}
            />
            <Route
              exact
              path="/set/:id"
              element={<SingleSet posts={posts} />}
            />
            <Route
              exact
              path="/new"
              element={
                <Form
                  posts={posts}
                  handleSubmit={handleFormSubmission}
                  buttonLabel="Add New Lego Set"
                  formType="new"
                />
              }
            />
            <Route
              exact
              path="/edit/:id"
              element={
                <Form
                  posts={posts}
                  handleSubmit={handleFormSubmission}
                  buttonLabel="Confirm Changes"
                  formType="edit"
                />
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
