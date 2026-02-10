import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateBlog } from "../api/blogApi";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = async () => {
    await updateBlog(id, {
      title,
      body: content,
      userId: 1,
    });

    alert("Updated (fake API)");
    navigate("/");
  };

  return (
    <div className="write">
      <h1>Edit Blog</h1>
      <input onChange={(e) => setTitle(e.target.value)} />
      <textarea rows="8" onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Edit;
