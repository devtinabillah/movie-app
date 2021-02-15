import Main from "container/Main";
import Sidebar from "container/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
