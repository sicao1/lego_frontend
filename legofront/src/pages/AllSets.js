import LegoSet from "../components/LegoSet";

const AllSets = (props) => (
  <>
    {props.posts.map((post) => (
      <LegoSet post={post} key={post.id} />
    ))}
  </>
);

export default AllSets;
