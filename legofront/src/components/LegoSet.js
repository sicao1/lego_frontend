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
      <div className="m-10 grid grid-cols-3 gap-4 border-2 border-dotted p-5 ">
        <div className="flex items-center justify-center ">
          <Link
            to={`/set/${post.id}`}
            className="text-darkslategrey hover:text-lightslategrey text-3xl transition-all duration-300 hover:underline"
          >
            <h1>{post.name}</h1>
          </Link>
        </div>

        <div>
          <p>Item #: {post.item_number}</p>
          <p>Pieces: {post.pieces}</p>
          <p>Theme: {post.theme}</p>
          {post.built ? <p>Assembled: Yes</p> : <p>Assembled: No</p>}
          {/* TODO not needed on main page, but might need elsewhere*/}
          {/* {post.wishlist ? <p>Wishlist: Yes</p> : <p>Wishlist: No</p>} */}
          <form onSubmit={handleDelete}>
            <input
              type="submit"
              value="Delete Set"
              className="button cursor-pointer"
            />
          </form>
        </div>

        <div>
          <img src={post.img_url} alt="lego set" className="max-w-xs" />
        </div>
      </div>
    </>
  );
};
export default LegoSet;
