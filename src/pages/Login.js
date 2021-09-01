import React, { useContext, useState, useEffect } from "react";

export default function Login() {
  const [state, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

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
                  <h2 class="sidebar-title">Admin Login</h2>
                  <form onSubmit={handleSubmit}>
                    <div class="name">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="email">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="post">
                      <input type="submit" value="Login" />
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
