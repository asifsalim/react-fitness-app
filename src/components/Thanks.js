import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Thanks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-grid gap-2 thanks-button">
        <Button variant="primary" onClick={handleShow}>
          Activity Done
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Congratulation!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have successfully completed the task today.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
