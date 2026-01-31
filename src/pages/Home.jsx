import PostCard from "../components/PostCard";

function Home({ posts }) {
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
