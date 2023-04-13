import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Exercise from "./components/Excersize";
import NavigationBar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Exercise />
      </div>
    );
  }
}

export default App;
