import React, { useState, useEffect } from "react";
import SessionContext from "./SessionContext";
import { setCookie, getCookie, removeCookie } from "../cookies";
import { toast } from "react-toastify";

export default function SessionProvider({ children }) {
  return children;
}
