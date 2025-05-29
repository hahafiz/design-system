import React from "react";
import Input from "./Input.jsx";

const InputDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Input Component</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Input Types</h2>
        <div className="flex flex-col gap-4">
          <Input type="checkbox" placeholder="Checkbox" />
          <Input
            type="color"
            placeholder="Color input"
            style={{ height: "40px" }}
          />
          <Input type="date" placeholder="Date input" />
          <Input type="datetime" placeholder="Date & time input" />
          <Input type="email" placeholder="Email input" />
          <Input type="file" placeholder="File input" />
          <Input type="hidden" placeholder="Hidden input" />
          <Input type="image" placeholder="Image as submit btn" />
          <Input type="month" placeholder="Month input" />
          <Input type="number" placeholder="Number input" />
          <Input type="password" placeholder="Password input" />
          <Input type="radio" placeholder="Radio input" />
          <Input type="range" placeholder="Range input" />
          <Input type="reset" placeholder="Reset input" />
          <Input type="search" placeholder="Search input" />
          <Input type="submit" placeholder="Submit input" />
          <Input type="tel" placeholder="Tel input" />
          <Input type="text" placeholder="Text input" />
          <Input type="time" placeholder="Time input" />
          <Input type="url" placeholder="Url input" />
          <Input type="week" placeholder="Week input" />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
