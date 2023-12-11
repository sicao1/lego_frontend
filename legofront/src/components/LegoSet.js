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
      <div className="m-10 grid grid-flow-row auto-rows-min grid-cols-2 gap-4 border-2 border-dotted p-5">
        <div className="bg-superlightgreen col-start-1 col-end-2 row-span-2 flex items-center justify-center">
          <Link
            to={`/set/${post.id}`}
            className="text-3xl text-darkslategrey transition-all duration-300 hover:text-lightslategrey hover:underline"
          >
            <h1>{post.name}</h1>
          </Link>
        </div>

        <div className="col-span-full row-span-1 mt-10 flex h-min auto-rows-auto">
          <Details>Item #: {post.item_number}</Details>
          <Details>Pieces: {post.pieces}</Details>
          <Details>Theme: {post.theme}</Details>
          {post.built ? (
            <Details>Assembled: Yes</Details>
          ) : (
            <Details>Assembled: No</Details>
          )}

          <form onSubmit={handleDelete}>
            <input
              type="submit"
              value="Delete Set"
              className="button cursor-pointer"
            />
          </form>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <img src={post.img_url} alt="lego set" className="max-h-52" />
        </div>
      </div>
    </>
  );
};
export default LegoSet;
