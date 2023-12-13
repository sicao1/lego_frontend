import { useState, useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import FormDiv from "../components/Style/FormDiv";
import Button from "../components/Style/Button";

const apiKEY = process.env.REACT_APP_API_KEY;

const Form = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  // will get current set here for edit
  const currentSet = useMemo(
    () => props.posts.find((post) => post.id === parseInt(params.id)),
    [params.id, props.posts],
  );

  const [formData, setFormData] = useState(
    props.formType === "new"
      ? {
          name: "",
          item_number: "",
          theme: "",
          img_url: "",
          built: false,
          wishlist: false,
          pieces: "",
        }
      : {
          name: currentSet.name,
          item_number: currentSet.item_number,
          theme: currentSet.theme,
          img_url: currentSet.img_url,
          built: currentSet.built,
          wishlist: currentSet.wishlist,
          pieces: currentSet.pieces,
          id: parseInt(currentSet.id),
        },
  );

  // function to handle change and submit
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.handleSubmit(formData, props.formType);
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    props.fetchData();
  };

  // use API to fill new create form
  const [searchData, setSearchData] = useState("");
  const [searchedData, setSearchedData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/sets/?search=${searchData}&page_size=1&key=${apiKEY}`,
    );
    const result = await response.json();
    setSearchedData(result);

    //Update Form
    setFormData((prevData) => ({
      ...prevData,
      name: result.results[0].name,
      item_number: result.results[0].set_num,
      theme: result.results[0].theme_id,
      img_url: result.results[0].image_url,
      built: false,
      wishlist: false,
      pieces: result.results[0].num_parts,
    }));
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="m-10 border-2 border-dotted p-5">
      <div>
        <form onSubmit={handleSearchSubmit}>
          <h3>Search:</h3>
          <input
            type="text"
            placeholder="Search by Name or Set Number"
            value={searchData}
            onChange={handleSearchChange}
            className="finput"
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <form onSubmit={handleSubmission}>
        <FormDiv>
          <h3 className="font-semibold">Name: </h3>
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"
            className="finput"
          />
        </FormDiv>

        <FormDiv>
          <h3 className="font-semibold">Item #: </h3>
          <input
            type="number"
            onChange={handleChange}
            value={formData.item_number}
            name="item_number"
            className="finput"
          />
        </FormDiv>
        <FormDiv>
          <h3 className="font-semibold">Pieces:</h3>
          <input
            type="number"
            onChange={handleChange}
            value={formData.pieces}
            name="pieces"
            className="finput"
          />
        </FormDiv>

        <FormDiv>
          <h3 className="font-semibold">Theme: </h3>
          <input
            type="text"
            onChange={handleChange}
            value={formData.theme}
            name="theme"
            className="finput"
          />
        </FormDiv>

        <FormDiv>
          <h3 className="font-semibold">Img Url</h3>
          <input
            type="text"
            onChange={handleChange}
            value={formData.img_url}
            name="img_url"
            className="finput"
          />
        </FormDiv>

        <FormDiv>
          <h3 className="font-semibold">Assembled: </h3>
          <input
            type="checkbox"
            onChange={handleChange}
            value={formData.built}
            name="built"
            className="ml-2 w-10"
          />
        </FormDiv>

        <div className="flex justify-end">
          <Link to={"/"}>
            <Button>Cancel</Button>
          </Link>
          <input
            type="submit"
            value={props.buttonLabel}
            className="button cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
