import React from "react";
import { AppProvider } from "./context";
import Usage from "./Usage";

function App() {
  return (
    <AppProvider>
      <Usage />
    </AppProvider>
  );
}

export default App;
