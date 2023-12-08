import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  // will get current set here for edit
  const currentSet = useMemo(
    () => props.posts.find((post) => post.id === parseInt(params.id)),
    [params.id, props.posts]
  );

  const [formData, setFormData] = useState(
    props.fromType === "new"
      ? {
          name: "",
          item_number: "",
          theme: "",
          img_url: "",
          built: "",
          wishlist: "",
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
        }
  );

  // function to handle change and submit
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.handleSubmit(formData, props.fromType);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <h3>Name</h3>
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <h3>Item #</h3>
      <input
        type="number"
        onChange={handleChange}
        value={formData.item_number}
        name="item_number"
      />
      <h3>Pieces</h3>
      <input
        type="number"
        onChange={handleChange}
        value={formData.pieces}
        name="pieces"
      />
      <h3>Theme</h3>
      <input
        type="text"
        onChange={handleChange}
        value={formData.theme}
        name="theme"
      />
      <h3>Assembled</h3>
      <input
        type="checkbox"
        onChange={handleChange}
        value={formData.built}
        name="built"
      />
      <h3>Img Url</h3>
      <input
        type="text"
        onChange={handleChange}
        value={formData.img_url}
        name="img_url"
      />
      <input type="submit" value={props.buttonLabel} />
    </form>
  );
};

export default Form;
