import { Link } from "react-router-dom";
import LegoSet from "../components/LegoSet";

const AllSets = (props) => (
  <>
    <Link to="/new">
      <button>Add New Lego Set</button>
    </Link>
    <div>
      {props.posts.map((post) => (
        <LegoSet post={post} key={post.id} deleteSet={props.deleteSet} />
      ))}
    </div>
  </>
);

export default AllSets;
