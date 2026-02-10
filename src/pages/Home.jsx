import { useEffect, useState } from "react";
import { getBlogs } from "../api/blogApi";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs().then((data) => {
      const formatted = data.slice(0, 10).map((p) => ({
        id: p.id,
        title: p.title,
        desc: p.body.substring(0, 60) + "...",
        content: p.body,
        author: "Guest",
        date: "2024",
        image: `https://picsum.photos/seed/${p.id}/600/400`,
      }));

      setPosts(formatted.reverse());
    });
  }, []);

  return (
    <div className="container">
      <h1>Latest Blogs</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
