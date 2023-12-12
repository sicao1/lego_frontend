import { Link } from "react-router-dom";

import LegoSet from "../components/LegoSet";
import Button from "../components/Style/Button";
import { useState } from "react";

const AllSets = (props) => {
  const [sortType, setSortType] = useState("default");

  const handleSort = (type) => {
    setSortType(type);
  };

  let sortedPosts = [...props.posts];

  if (sortType === "default") {
    sortedPosts.sort((a, b) => b.id - a.id);
  } else if (sortType === "name") {
    sortedPosts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "piecesASC") {
    sortedPosts.sort((a, b) => a.pieces - b.pieces);
  } else if (sortType === "piecesDEC") {
    sortedPosts.sort((a, b) => b.pieces - a.pieces);
  }

  return (
    <>
      <div>
        <button onClick={() => handleSort("default")}>Default</button>
        <button onClick={() => handleSort("name")}>Name</button>
        <button onClick={() => handleSort("piecesASC")}>
          Pieces Low to High
        </button>
        <button onClick={() => handleSort("piecesDEC")}>
          Pieces High to Low
        </button>
      </div>
      <Link to="/new">
        <Button>Add New Lego Set</Button>
      </Link>
      <div>
        {sortedPosts.map((post) => (
          <LegoSet post={post} key={post.id} deleteSet={props.deleteSet} />
        ))}
      </div>
    </>
  );
};

export default AllSets;
