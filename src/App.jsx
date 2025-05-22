import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button></Button>
    </>
  );
}

export default App;
