import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";

const SuccessModal = ({ isSuccessModalOpen, onClose, navigate }) => {
  return (
    <Modal isOpen={isSuccessModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Good work! Evie is growing...</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Keep participating to watch her evolve.</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              onClose();
              setTimeout(() => {
                navigate("/myEvie");
              }, 200);
            }}
            backgroundColor="#78944c"
          >
            View MyEvie
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
