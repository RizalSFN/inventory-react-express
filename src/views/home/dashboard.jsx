import React, { useEffect, useState } from "react";
import Layout from "../layout";
import Cookies from "js-cookie";

export default function Dashboard() {
  const [user, setUser] = useState([]);
    
  useEffect(() => {
    const userData = Cookies.get("user");

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <Layout>
      <h1 className="text-2xl mt-2 ml-2">
        Selamat Datang, <span className="font-medium">{user?.name}</span>
      </h1>
    </Layout>
  );
}
