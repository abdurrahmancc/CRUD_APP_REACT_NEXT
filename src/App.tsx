import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeChange } from "theme-change";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RootContext } from "./hooks/useRootContext";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import AddUser from "./pages/AddUser";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  useEffect(() => {
    themeChange(false);
  }, []);

  const contextValues = {
    isLightTheme,
    setIsLightTheme,
  };
  return (
    <div className="min-h-screen" data-theme={isLightTheme ? "light" : "dark"}>
      <ToastContainer />
      <RootContext.Provider value={contextValues}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootContext.Provider>
    </div>
  );
}

export default App;
