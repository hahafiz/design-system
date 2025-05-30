import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal.jsx";

const ModalDemo = (props) => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Modal Component</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          <Modal>Test Modal</Modal>
        </h2>
      </div>
    </div>
  );
};

ModalDemo.propTypes = {};

export default ModalDemo;
