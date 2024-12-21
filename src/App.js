import React, { useState } from "react";
import AppContextProvider from "./context/context";
import { Spin } from "antd";
import "./App.css";
// Import Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

const App = () => {
  // State for Authentication
  const [authenticated, setAuthenticated] = useState(true); // Original : False
  const [loading, setLoading] = useState(false); // Original : True

  // Function ini akan menerima data dari Child
  const handleDataFormLogin = (authenticated, loadingStatus) => {
    setAuthenticated(authenticated);
    setLoading(loadingStatus);
  };

  return (
    <AppContextProvider>
      {
        loading ?
        (
          <div
            style={{
              width: "100%",
              height: "100vh",
              background: "#0000001a",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Spin size="large" />
            <p style={{ marginLeft: 20 }}>Memuat...</p>
          </div>
        )
          : authenticated ? (
            <Dashboard />
            ) : (
            <Login onStatus={handleDataFormLogin} />
          )}
    </AppContextProvider>
  );
};

export default App;
