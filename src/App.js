import logo from "./logo.svg";
import "./App.scss";
import Sidebar from "container/Sidebar";
import Main from "container/Main";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
