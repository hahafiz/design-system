import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="primary">Capybara</Button>
      <Button variant="secondary">Capybara</Button>
      <Button size="xs">Btn xs</Button>
      <Button size="sm">Btn sm</Button>
      <Button size="md">Btn md</Button>
    </>
  );
}

export default App;
