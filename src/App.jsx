import React from "react";
import Layout from "./Layouts/Layout";
import { StoreProvider } from "./Context/StoreContext";

const App = () => {
  return (
    <div className="w-full h-screen">
      <StoreProvider>
        <Layout />
      </StoreProvider>
    </div>
  );
};

export default App;
