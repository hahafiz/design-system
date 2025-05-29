import React from "react";
import Input from "./Input.jsx";

const InputDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Input Component</h1>
      <Input type="text" placeholder="Test placeholder" />
    </div>
  );
};

export default InputDemo;
