import { Link } from "react-router-dom";
import { useState } from "react";

import LegoSet from "../components/LegoSet";
import Button from "../components/Style/Button";
import Dropdown from "../components/Dropdown";

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

  const handleDropdownSort = (type) => {
    handleSort(type);
  };

  return (
    <div>
      <div className="mx-8 mt-8 flex items-center justify-between">
        <h1 className="semi-bold text-4xl text-stormsinparis">
          Your Collection
        </h1>
        <div>
          <Link to="/new">
            <Button>Add New Lego Set</Button>
          </Link>
          <Dropdown handleDropdownSort={handleDropdownSort} />
        </div>
      </div>

      <div>
        {sortedPosts.map((post) => (
          <LegoSet post={post} key={post.id} deleteSet={props.deleteSet} />
        ))}
      </div>
    </div>
  );
};

export default AllSets;
