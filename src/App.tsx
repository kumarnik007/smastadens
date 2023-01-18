import React from "react";
import { Header } from "./components/Header";
import { KommunPage } from "./components/KommunPage";
import './App.scss';
import { data } from "./api/makeData";
import { Actions } from "./components/Actions";

export const App = () => {
  return (
    <>
      <Header />

      <div className="app">
        <Actions />
        <KommunPage persons={data} />
      </div>
    </>
  );
};
