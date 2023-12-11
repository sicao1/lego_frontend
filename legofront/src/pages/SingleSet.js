import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../components/Button";
import Details from "../components/Details";
import Modal from "./EditModal";

const SingleSet = ({ posts }) => {
  const params = useParams();

  const currentSet = useMemo(
    () => posts.find((post) => post.id === parseInt(params.id)),
    [params.id, posts],
  );

  return (
    <>
      <div className="m-10 grid grid-flow-row auto-rows-min grid-cols-2 gap-4 border-2 border-dotted p-5">
        <div className="to-superlightgreen col-start-1 col-end-2 row-span-2 flex items-center justify-center bg-gradient-to-r from-darkslategrey">
          <h1 className="text-3xl text-slate-100 transition-all duration-300">
            {currentSet.name}
          </h1>
        </div>

        <div className="col-span-full row-span-1 mt-10 flex h-min auto-rows-auto">
          <Details>Item #: {currentSet.item_number}</Details>
          <Details>Pieces: {currentSet.pieces}</Details>
          <Details>Theme: {currentSet.theme}</Details>
          {currentSet.built ? (
            <Details>Assembled: Yes</Details>
          ) : (
            <Details>Assembled: No</Details>
          )}
          <Modal />
          <Link to={"/"}>
            <Button>Back to Collection</Button>
          </Link>
        </div>

        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <img src={currentSet.img_url} alt="lego set" className="max-w-xs" />
        </div>
      </div>

      {/* <Link to={`/edit/${params.id}`}>
        <Button>Edit info</Button>
      </Link> */}
    </>
  );
};

export default SingleSet;
