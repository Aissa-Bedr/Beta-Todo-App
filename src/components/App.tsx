import React, { FC, useEffect, useState } from "react";
import Home from "./app/page/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./app/page/settings/Settings";
import Error from "./app/page/Error/Error";

const App: FC = () => {
  const [rounded, setRounded] = useState<boolean>(
    JSON.parse(`${localStorage.getItem("rounded UI")}`) || false
  );
  const [newNavBar, setNewNavBar] = useState<boolean>(
    JSON.parse(`${localStorage.getItem("new NavBar")}`) || false
  );
  const [showAnimation, setShowAnimation] = useState<boolean>(
    JSON.parse(`${localStorage.getItem("show Animation")}`) || false
  );

  useEffect(() => {
    localStorage.setItem("rounded UI", JSON.stringify(rounded));
  }, [rounded]);

  useEffect(() => {
    localStorage.setItem("new NavBar", JSON.stringify(newNavBar));
  }, [newNavBar]);

  useEffect(() => {
    localStorage.setItem("show Animation", JSON.stringify(showAnimation));
  }, [showAnimation]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              rounded={rounded}
              newNavBar={newNavBar}
              showAnimation={showAnimation}
            />
          }
        />
        <Route
          path="settings"
          element={
            <Settings
              rounded={rounded}
              setRounded={setRounded}
              newNavBar={newNavBar}
              setNewNavBar={setNewNavBar}
              showAnimation={showAnimation}
              setShowAnimation={setShowAnimation}
            />
          }
        />
        <Route path="*" element={<Error rounded={rounded} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
