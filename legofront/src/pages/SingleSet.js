import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

const SingleSet = ({ posts }) => {
  const params = useParams();

  const currentSet = useMemo(
    () => posts.find((post) => post.id === parseInt(params.id)),
    [params.id, posts],
  );

  return (
    <>
      <div>
        <h1>{currentSet.name}</h1>
        <p>Item #: {currentSet.item_number}</p>
        <p>Pieces: {currentSet.pieces}</p>
        <p>Theme: {currentSet.theme}</p>
        {currentSet.built ? <p>Assembled: Yes</p> : <p>Assembled: No</p>}
        <img src={currentSet.img_url} alt="lego set" className="max-w-xs" />
      </div>
      <Link to={`/edit/${params.id}`}>
        <Button>Edit info</Button>
      </Link>
      <Link to={"/"}>
        <Button>Back to Collection</Button>
      </Link>
    </>
  );
};

export default SingleSet;
