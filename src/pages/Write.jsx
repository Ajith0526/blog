import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blogApi";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    await createBlog({
      title,
      body: content,
      userId: 1,
    });

    alert("Blog created (fake API)");
    navigate("/");
  };

  return (
    <div className="write">
      <h1>Write Blog</h1>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea
        rows="8"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}

export default Write;
