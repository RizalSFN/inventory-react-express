import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../views/auth/register";
import Login from "../views/auth/login";
import Dashboard from "../views/home/dashboard";
import Products from "../views/products/products";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Login />}
      />
      <Route
        path="/products"
        element={isAuthenticated ? <Products /> : <Login />}
      />
    </Routes>
  );
}
