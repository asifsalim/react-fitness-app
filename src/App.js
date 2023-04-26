import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Exercise from "./components/Excersize";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Exercise />
    </div>
  );
}

export default App;
