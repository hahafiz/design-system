import React from "react";
import Input from "./Input.jsx";

const InputDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Input Component</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Input Types</h2>
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Test tesss" />
          <Input type="checkbox" placeholder="Test placeholder" />
          <Input
            type="color"
            placeholder="Color input"
            style={{ height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
