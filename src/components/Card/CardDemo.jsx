import React from "react";
import Card from "./Card.jsx";

const CardDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Card Component</h1>

      {/* Variants */}
      <Card variant="primary" padding="md">
        Test Card
      </Card>
    </div>
  );
};

export default CardDemo;
