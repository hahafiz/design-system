import React from "react";
import Button from "./Button.jsx";

const ButtonDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Button Component</h1>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <Button size="xs">Btn xs</Button>
      <Button size="sm">Btn sm</Button>
      <Button size="md">Btn md</Button>
    </div>
  );
};

export default ButtonDemo;
