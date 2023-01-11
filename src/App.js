import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    toggleSidebar(!sidebar);
  };
  console.log(sidebar);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
