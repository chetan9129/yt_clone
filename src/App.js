import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Sidebar from "./components/Sidebar";
import "./App.css";
import LoginScreen from "./components/Login/LoginScreen";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    toggleSidebar(!sidebar);
  };
  // console.log(sidebar);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    // <Router>
    //   <Route path="/" exact>
    //     <Layout />
    //     <HomeScreen />
    //     {/* </Layout> */}
    //   </Route>
    //   <Route path="/auth">
    //     {/* <Layout> */}
    //     <LoginScreen />
    //     {/* </Layout> */}
    //   </Route>
    //   <Route path="/search">
    //     <Layout />
    //     <h1>Search Results</h1>
    //     {/* </Layout> */}
    //   </Route>
    // </Router>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<LoginScreen />} />
          <Route path="/search" element={<h1>Search Results</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
