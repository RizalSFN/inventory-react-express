import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationError, setValidationError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    await api
      .post("/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setValidationError(error.response.data);
      });
  };

  return (
    <div className="w-3/12 mx-auto rounded-md mt-20 border">
      <div className="text-center py-5">
        <h1 className="font-bold text-2xl text-gray-500">REGISTER</h1>
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
      <form className="flex flex-col mt-5 px-7 pb-10" onSubmit={register}>
        <div className="flex flex-col">
          <label className="font-medium mb-1 text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2 outline-gray-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col mt-3">
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md p-2 outline-gray-300"
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between mt-0.5">
            <div>
              <input
                type="checkbox"
                className="mr-2"
                onClick={() => setShowPassword(!showPassword)}
              />
              <label className="text-sm text-gray-500">Show Password</label>
            </div>
            <div className="my-1 text-sm text-gray-500">
              Have account?{" "}
              <Link to="/" className="text-blue-500 underline">
                Login
              </Link>
            </div>
          </div>
        </div>
        <button
          className="bg-green-400 hover:bg-green-500 mt-5 rounded-md text-white font-medium py-1"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
