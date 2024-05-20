import React from "react";
import Header from "./components/header/Header";
import "./scss/main.scss";
import Home from "./routers/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
