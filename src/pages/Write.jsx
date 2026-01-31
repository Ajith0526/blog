import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Write({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handlePublish = () => {
    if (!title || !content || !image) {
      alert("Fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      desc: content.substring(0, 60) + "...",
      content,
      author: "Aji",
      date: new Date().toDateString(),
      image,
    };

    setPosts([newPost, ...posts]);
    navigate("/");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="writeContainer">
      <h1>Create New Blog</h1>

      {image && <img src={image} className="previewImg" />}

      <input type="file" onChange={handleImage} />

      <input
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Tell your story..."
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}

export default Write;
