import { Link, useNavigate } from "react-router-dom";
import Details from "./Style/Details";

const LegoSet = ({ post, deleteSet }) => {
  const naviagte = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteSet(post.id);
    naviagte("/");
  };

  return (
    <>
      <div className="mx-10 mb-10 mt-4 grid grid-flow-row auto-rows-min grid-cols-2 gap-4 border-2 border-dotted p-5 ">
        <div className="col-start-1 col-end-2 row-span-2 flex items-center justify-center bg-gradient-to-r from-darkslategrey to-superlightgreen shadow-lg">
          <Link
            to={`/set/${post.id}`}
            className="text-sm text-slate-100 transition-all duration-300 hover:text-slate-300 hover:underline sm:text-lg md:text-3xl"
          >
            <h1>{post.name}</h1>
          </Link>
        </div>

        <div className="col-span-full row-span-1 h-min auto-rows-auto sm:mt-5 sm:flex">
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
              className="button cursor-pointer text-xs sm:text-base"
            />
          </form>
        </div>

        <div className="col-start-2 row-span-2 row-start-1 flex items-center justify-center shadow-lg">
          <img src={post.img_url} alt="lego set" className="max-h-52" />
        </div>
      </div>
    </>
  );
};
export default LegoSet;
