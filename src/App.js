import "bootstrap/dist/css/bootstrap.min.css";
import Exercise from "./components/Excersize";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <span>
        <NavigationBar />
        <Exercise />
        {/* <CardColumnsExample /> */}
      </span>
    </div>
  );
}

export default App;
