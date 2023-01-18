import React from "react";
import { Header } from "./components/Header";
import { KommunPage } from "./components/KommunPage";
import './App.scss';
import { data } from "./api/makeData";

export const App = () => {
  return (
    <>
      <Header />

      <div className="app">
        <KommunPage persons={data} />
      </div>
    </>
  );
};
