import { Link } from "react-router-dom";
import LegoSet from "../components/LegoSet";
import Button from "../components/Button";

const AllSets = (props) => (
  <>
    <Link to="/new">
      <Button>Add New Lego Set</Button>
    </Link>
    <div>
      {props.posts.map((post) => (
        <LegoSet post={post} key={post.id} deleteSet={props.deleteSet} />
      ))}
    </div>
  </>
);

export default AllSets;
