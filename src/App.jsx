import { useState } from "react";
import "./App.css";
import ButtonDemo from "./components/Button/ButtonDemo.jsx";
import CardDemo from "./components/Card/CardDemo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonDemo />
      <CardDemo />
    </>
  );
}

export default App;
