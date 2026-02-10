const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createBlog = async (blog) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return res.json();
};

export const updateBlog = async (id, blog) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
