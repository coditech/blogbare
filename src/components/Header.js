import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SessionContext from "../context/SessionContext";

export default function Header() {
  const {
    session: {
      user: { access_token },
    },
    actions: { logout },
  } = useContext(SessionContext);
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">
              <h2>
                <a href="#">Classic</a>
              </h2>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                {access_token && (
                  <li>
                    <Link to="/createblog">Create Blog</Link>
                  </li>
                )}

                {!access_token && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}

                {access_token && (
                  <li>
                    <a>
                      <div onClick={() => logout()}>Logout</div>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
