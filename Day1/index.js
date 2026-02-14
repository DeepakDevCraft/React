import React from "react";
import ReactDom from "react-dom/client";

import Count from "./src/components/Count";

const App = () => {
  return <Count></Count>;
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
