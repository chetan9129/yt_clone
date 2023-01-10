import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
