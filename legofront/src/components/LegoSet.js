import { Link, useNavigate } from "react-router-dom";

const LegoSet = ({ post, deleteSet }) => {
  const naviagte = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteSet(post.id);
    naviagte("/");
  };

  return (
    <>
      <div className="eachSet">
        <Link to={`/set/${post.id}`}>
          <h1>{post.name}</h1>
        </Link>
        <p>Item #: {post.item_number}</p>
        <p>Pieces: {post.pieces}</p>
        <p>Theme: {post.theme}</p>
        {post.built ? <p>Assembled: Yes</p> : <p>Assembled: No</p>}
        {/* TODO not needed on main page, but might need elsewhere*/}
        {/* {post.wishlist ? <p>Wishlist: Yes</p> : <p>Wishlist: No</p>} */}
        <img src={post.img_url} alt="lego set" />
        <form onSubmit={handleDelete}>
          <input type="submit" value="Delete Set" />
        </form>
      </div>
    </>
  );
};
export default LegoSet;
