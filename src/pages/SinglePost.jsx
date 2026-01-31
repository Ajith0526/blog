import { useParams } from "react-router-dom";

function SinglePost({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="singleContainer">
      <img src={post.image} className="singleImg" />

      <h1>{post.title}</h1>

      <div className="singleMeta">
        <span> {post.author}</span>
        <span> {post.date}</span>
      </div>

      <p className="singleContent">{post.content}</p>
    </div>
  );
}

export default SinglePost;
