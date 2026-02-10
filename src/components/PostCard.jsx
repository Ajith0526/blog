import { Link } from "react-router-dom";
import { deleteBlog } from "../api/blogApi";

function PostCard({ post }) {
  const handleDelete = async () => {
    await deleteBlog(post.id);
    alert("Deleted (fake API)");
    window.location.reload();
  };

  return (
    <div className="postCard">
      <img src={post.image} />
      <div className="postContent">
        <h3>{post.title}</h3>
        <p>{post.desc}</p>

        <div className="actions">
          <Link to={`/post/${post.id}`}>Read</Link>
          <Link to={`/edit/${post.id}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
