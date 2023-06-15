import React from "react";
import "./App.css";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [localData, setLocalData] = useLocalStorage("theme", "light");
  return (
    <div className="App">
      <header className="App-header">
        {localData}
        <button onClick={() => setLocalData("light")}>Light</button>
        <button onClick={() => setLocalData("dark")}>Dark</button>
      </header>
    </div>
  );
}

export default App;
