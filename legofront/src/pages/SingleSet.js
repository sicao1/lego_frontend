import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const SingleSet = ({ posts }) => {
  const params = useParams();

  const currentSet = useMemo(
    () => posts.find((post) => post.id === parseInt(params.id)),
    [params.id, posts]
  );

  return (
    <>
      <div>
        <h1>{currentSet.name}</h1>
        <p>{currentSet.item_number}</p>
        <p>{currentSet.pieces}</p>
        <p>{currentSet.theme}</p>
        {currentSet.built ? <p>Assembled: Yes</p> : <p>Assembled: No</p>}
        <img src={currentSet.img_url} alt="lego set" />
      </div>
      <Link to={"/"}>
        <button>Back to Collection</button>
      </Link>
    </>
  );
};

export default SingleSet;
