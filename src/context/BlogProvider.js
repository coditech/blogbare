import React, { useState, useEffect, useContext } from "react";
import BlogContext from "./BlogContext";
import SessionContext from "./SessionContext";
import { toast } from "react-toastify";

export default function BlogProvider({ children }) {
  const [state, setState] = useState({ blogs: [] });
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  function updateState(nextState) {
    let value =
      typeof nextState === "function"
        ? nextState
        : (prevState) => ({ ...prevState, ...nextState });
    setState(value);
  }
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("http://localhost:8000/api/blogs");
      const result = await response.json();
      console.log(result);
      updateState({ blogs: result });
    };
    getBlogs();
  }, []);

  async function createBlog(title, content) {
    const body = new FormData();
    body.append("title", title);
    body.append("content", content);
    const response = await fetch("http://localhost:8000/api/blogs", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      method: "post",
      body,
    });
    const result = await response.json();
    console.log(result);
    const blogs = [...state.blogs, result.blog];
    updateState({ blogs });
    toast.success(`Blog added successfully`);
  }

  const context = { state, actions: { createBlog } };
  return (
    <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
  );
}
