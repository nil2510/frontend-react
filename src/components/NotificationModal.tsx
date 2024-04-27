import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface NotificationModalProps {
  onClose: () => void;
}
const NotificationModal = ({ onClose }: NotificationModalProps) => {
  useEffect(() => {
    handleShow();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    onClose();
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotificationModal;
