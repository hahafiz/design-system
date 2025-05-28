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

      {/* Shadow Variations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shadow Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card shadow="none">
            <Card.Header>
              <Card.Title>No Shadow</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This card has no shadow</p>
            </Card.Body>
          </Card>

          <Card shadow="sm">
            <Card.Header>
              <Card.Title>Small Shadow</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This card has small shadow</p>
            </Card.Body>
          </Card>

          <Card shadow="lg">
            <Card.Header>
              <Card.Title>Large Shadow</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>This card has large shadow</p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Product Card Example</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            shadow="lg"
            className="transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="w-full h-48 object-cover rounded-sm"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Premium Headphone</h3>
              <p className="text-gray-600 mb-4">
                Wireless noise cancelling headphone
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">RM 299.99</span>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>

          <Card
            shadow="lg"
            className="transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1602025882379-e01cf08baa51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="w-full h-48 object-cover rounded-sm"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">
                Custom Mechanical Keyboard
              </h3>
              <p className="text-gray-600 mb-4">
                Hotswappable mechanical keyboard
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">RM 999.99</span>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>

          <Card
            shadow="lg"
            className="transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1726658045061-409d329466ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="w-full h-48 object-cover rounded-sm"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">ITX Motherboard</h3>
              <p className="text-gray-600 mb-4">
                Small form factor motherboard
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">RM 1,299.99</span>
                <Button size="sm" variant="primary">
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
