import { Link, useNavigate } from "react-router-dom";
import Details from "./Details";

const LegoSet = ({ post, deleteSet }) => {
  const naviagte = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteSet(post.id);
    naviagte("/");
  };

  return (
    <>
      <div className="m-10 grid grid-flow-row auto-rows-min grid-cols-2 grid-rows-2 gap-4 border-2 border-dotted p-5">
        <div className="col-start-1 col-end-2 flex items-center justify-center">
          <Link
            to={`/set/${post.id}`}
            className="text-3xl text-darkslategrey transition-all duration-300 hover:text-lightslategrey hover:underline"
          >
            <h1>{post.name}</h1>
          </Link>
        </div>

        <div className="col-span-full row-start-2 flex justify-around">
          <Details>Item #: {post.item_number}</Details>
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

        <div className="flex items-center justify-center">
          <img src={post.img_url} alt="lego set" className="max-h-52" />
        </div>
      </div>
    </>
  );
};
export default LegoSet;
