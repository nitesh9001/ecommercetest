import React from "react";
import { LoginTemplate } from "../../templates";
import { setToken } from "../../../redux/actions";
import { useDispatch } from "react-redux";
export function LoginPage() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setToken({ token: "I am Dummy Token" }));
    window.location.href = "/";
  };
  return <LoginTemplate handleLogin={handleLogin} />;
}
