import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Main />
      </div>
    </UserProvider>
  );
}

export default App;
