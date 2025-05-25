import { useState } from "react";
import "./App.css";
import ButtonDemo from "./components/Button/ButtonDemo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonDemo />
    </>
  );
}

export default App;
