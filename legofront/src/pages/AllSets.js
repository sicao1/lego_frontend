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
  if (sortType === "name") {
    sortedPosts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <>
      <div>
        <button onClick={() => handleSort("default")}>Default</button>
        <button onClick={() => handleSort("name")}>Name</button>
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
