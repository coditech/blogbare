import React, { useState, useEffect } from "react";
import SessionContext from "./SessionContext";
import { setCookie, getCookie, removeCookie } from "../cookies";
import { toast } from "react-toastify";

export default function SessionProvider({ children }) {
  const [session, setSession] = useState({
    user: { access_token: localStorage.getItem("access_token") },
  });

  function updateSession(nextSession) {
    let value =
      typeof nextSession === "function"
        ? nextSession
        : (prevSession) => ({ ...prevSession, ...nextSession });
    setSession(value);
  }
  useEffect(() => {
    let user_id = localStorage.getItem("user_id");
    let access_token = localStorage.getItem("access_token");
    let user = { user_id, access_token };
    updateSession({ user });
  }, []);

  async function login(email, password) {
    const body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const response = await fetch("http://localhost:8000/api/login", {
      method: "post",
      body,
    });
    const result = await response.json();
    const { access_token, user_id } = result;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("user_id", user_id);
    const user = { access_token, user_id };
    updateSession({ user });
    toast.success(`Welcome ${user_id}`);
  }
  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");
    const user = { access_token: null, user_id: null };
    updateSession({ user });
    toast("Goodbye!!");
  }
  const context = { session, actions: { login, logout } };
  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
}
