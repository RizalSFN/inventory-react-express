import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationError, setValidationError] = useState([]);
  const [loginFailed, setLoginFailed] = useState([]);

  const login = async (e) => {
    e.preventDefault();

    await api
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        Cookies.set("token", response.data.data.token);
        Cookies.set("user", JSON.stringify(response.data.data.user));

        setIsAuthenticated(true);

        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        setValidationError(error.response.data);
        setLoginFailed(error.response.data);
      });
  };

  return (
    <div className="w-3/12 mx-auto rounded-md mt-20 border">
      <div className="text-center py-5">
        <h1 className="font-bold text-2xl text-gray-500">LOGIN</h1>
      </div>
      <hr className="mx-5" />
      {validationError.errors && (
        <div className="my-2 rounded-md border border-red-600 bg-red-200 mx-7 p-2">
          {validationError.errors.map((error, index) => (
            <p key={index} className="font-medium">
              {error.path} : {error.msg}
            </p>
          ))}
        </div>
      )}
      {!validationError.errors && loginFailed.message ? (
        <div className="my-2 rounded-md border border-red-600 bg-red-200 mx-7 p-2 font-medium">
          {loginFailed.message}
        </div>
      ) : (
        ""
      )}
      <form className="flex flex-col mt-5 px-7 pb-10" onSubmit={login}>
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 outline-gray-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label className="font-medium mb-1 text-gray-500">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md p-2 outline-gray-300"
            placeholder="Enter your password"
          />
        </div>
        <p className="my-2 text-sm">
          Not have account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
        <button
          className="bg-blue-400 hover:bg-blue-500 mt-5 rounded-md text-white font-medium py-1"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
