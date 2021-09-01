import React, { useContext, useState, useEffect } from "react";
export default function CreateBlog() {
  const [state, setValue] = useState({
    title: "",
    content: "",
  });

  const { title, content } = state;
  function setState(nextState) {
    setValue((prevState) => ({
      ...prevState,
      ...nextState,
    }));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setState({ [name]: value });
  }

  async function handleSubmit(e) {
    e.nativeEvent.preventDefault();
  }

  return (
    <section class="single-blog-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="border-top">
              <div class="col-md-12">
                <div class="blog-area">
                  <h2 class="sidebar-title">Create Blog</h2>
                  <form onSubmit={handleSubmit}>
                    <div class="name">
                      <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="email">
                      <input
                        type="text"
                        placeholder="Content"
                        name="content"
                        value={content}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="post">
                      <input type="submit" value="Create" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
