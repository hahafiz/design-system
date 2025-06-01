import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal.jsx";

const ModalDemo = (props) => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Modal Component</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold"> Test Modal</h2>
        <div className="flex gap-4">
          <Modal>Test Modal</Modal>
          <Modal
            variant="primary"
            shadow="md"
            className="hover:shadow-xl transition-all duration-300"
          >
            Test Modal with Variants
          </Modal>
          <Modal>
            <Modal.Header>
              <Modal.Title>Test Modal with Structure</Modal.Title>
            </Modal.Header>
          </Modal>
        </div>
      </div>
    </div>
  );
};

ModalDemo.propTypes = {};

export default ModalDemo;
