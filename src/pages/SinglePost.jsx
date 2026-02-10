import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs } from "../api/blogApi";

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getBlogs().then((data) => {
      const found = data.find((p) => p.id === Number(id));
      setPost({
        title: found.title,
        content: found.body,
        image: `https://picsum.photos/seed/${found.id}/800/400`,
      });
    });
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="single">
      <img src={post.image} />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default SinglePost;
