import { Link } from "react-router-dom";

const LegoSet = ({ post }) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.name}</h1>
      </Link>
      <p>Item #:{post.item_number}</p>
      <p>Pieces:{post.pieces}</p>
      <p>Theme:{post.theme}</p>
      {post.built ? <p>Built: Yes</p> : <p>Built: No</p>}
      {post.wishlist ? <p>Wishlist: Yes</p> : <p>Wishlist: No</p>}
      <img src={post.img_url} alt="lego set" />
    </div>
  );
};
export default LegoSet;
