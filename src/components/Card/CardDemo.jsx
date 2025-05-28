import React from "react";
import Card from "./Card.jsx";
import Button from "../Button/Button.jsx";

const CardDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Card Component</h1>

      {/* Basic Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Siimple Card */}
          <Card>This is a basic card with default styling</Card>

          {/* Card with structure */}
          <Card>
            <Card.Header>
              <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This card has a header, body, and footer </p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>

          {/* Bordered Card */}
          <Card bordered>
            <p>This card has a border</p>
          </Card>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card variant="primary">
            <Card.Header>
              <Card.Title>Primary Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a primary-styled Card</p>
            </Card.Body>
          </Card>

          <Card variant="secondary">
            <Card.Header>
              <Card.Title>Secondary Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a Secondary-styled Card</p>
            </Card.Body>
          </Card>

          <Card variant="success">
            <Card.Header>
              <Card.Title>Success Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a Success-styled Card</p>
            </Card.Body>
          </Card>

          <Card variant="warning">
            <Card.Header>
              <Card.Title>Warning Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a Warning-styled Card</p>
            </Card.Body>
          </Card>

          <Card variant="danger">
            <Card.Header>
              <Card.Title>Danger Card</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This is a Danger-styled Card</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
