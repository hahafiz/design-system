import React from "react";
import Card from "./Card.jsx";
import Button from "../Button/Button.jsx";

const CardDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Card Component</h1>

      {/* Variants */}
      <Card variant="primary" padding="md" bordered shadow="xl">
        Test Card
      </Card>
      <Card variant="primary" shadow="xl">
        <Card.Header>
          <Card.Title>Test Card</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>Compund component test</p>
        </Card.Body>
        <Card.Footer>
          <Button size="sm">CTA</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardDemo;
