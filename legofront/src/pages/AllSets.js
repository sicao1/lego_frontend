import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Style/Button";
import Dropdown from "../components/Dropdown";
import LegoSet from "../components/LegoSet";

// sourced from https://www.npmjs.com/package/react-paginate
import ReactPaginate from "react-paginate";

const AllSets = (props) => {
  const [sortType, setSortType] = useState("default");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedPosts = sortedPosts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(sortedPosts.length / itemsPerPage);

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
        {paginatedPosts.map((post) => (
          <LegoSet post={post} key={post.id} deleteSet={props.deleteSet} />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default AllSets;
