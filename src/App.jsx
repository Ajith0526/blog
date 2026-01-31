import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Write from "./pages/Write";
import { posts as initialPosts } from "./data/posts";

function App() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/write"
          element={<Write posts={posts} setPosts={setPosts} />}
        />
        <Route path="/post/:id" element={<SinglePost posts={posts} />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
