import React from "react";
import Button from "./Button.jsx";

const ButtonDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Button Component</h1>
      <Button variant="primary">Capybara</Button>
      <Button variant="secondary">Capybara</Button>
      <Button size="xs">Btn xs</Button>
      <Button size="sm">Btn sm</Button>
      <Button size="md">Btn md</Button>
    </div>
  );
};

export default ButtonDemo;
