import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="postCard">
      <img src={post.image} alt="blog" />

      <div className="postContent">
        <h3>{post.title}</h3>
        <p className="postDesc">{post.desc}</p>

        <div className="postMeta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>

        <Link to={`/post/${post.id}`} className="readBtn">
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
