import React from "react";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";

function App() {
  return (
   <>
   <h1 className="text-center">App component</h1>
   <div className="row">
    <div className="col-6 border"><Component1/></div>
    <div className="col-6 border"><Component2/></div></div></>
  );
}

export default App;
