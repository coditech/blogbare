import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
export default function Home() {
  const {
    state: { blogs },
  } = useContext(BlogContext);
  return (
    <>
      <section className="bg-text-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-text">
                <h3>Classic BLOG Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-post-area">
        <div className="container">
          <div className="row">
            <div className="blog-post-area-style">
              {blogs &&
                blogs.map((blog) => (
                  <div className="col-md-6">
                    <div className="single-post">
                      <img src="img/post-image1.jpg" alt="" />
                      <h3>
                        <a href="#">{blog.title}</a>
                      </h3>

                      <p>{blog.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bg">
                <div className="row">
                  <div className="col-md-9">
                    <div className="footer-menu">
                      <ul>
                        <li className="active">
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Food</a>
                        </li>
                        <li>
                          <a href="#">Nature</a>
                        </li>
                        <li>
                          <a href="#">photography</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="footer-icon">
                      <p>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>{" "}
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
