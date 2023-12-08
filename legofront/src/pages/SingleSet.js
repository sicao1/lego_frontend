import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const SingleSet = ({ posts }) => {
  const params = useParams();

  const currentPost = useMemo(
    () => posts.find((post) => post.id === parseInt(params.id)),
    [params.id, posts]
  );

  return (
    <>
      <div>
        <h1>{currentPost.name}</h1>
        <p>{currentPost.item_number}</p>
        <p>{currentPost.pieces}</p>
        <p>{currentPost.theme}</p>
        {currentPost.built ? <p>Assembled: Yes</p> : <p>Assembled: No</p>}
        <img src={currentPost.img_url} alt="lego set" />
      </div>
      <Link to={"/"}>
        <button>Back to Collection</button>
      </Link>
    </>
  );
};

export default SingleSet;
