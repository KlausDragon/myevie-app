import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function ChallengeModal({ challenge, isOpen, onClose, setShowDialog }) {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    console.log(`Submitting challenge: ${challenge.name}`);
    if (challenge.type === "daily") {
      if (count >= challenge.objective.count) {
        alert(
          "Amazing work! Evie thanks you. Keep participating to watch her evolve."
        );
      } else {
        alert(
          `Keep going! You have completed ${count} out of ${challenge.objective.count} required. You're almost there!`
        );
      }
    } else if (challenge.type === "weekly") {
      if (isChecked) {
        alert(
          "Amazing work! Evie thanks you. Keep participating to watch her evolve."
        );
      } else {
        alert(
          "You're making progress! Remember, weekly challenges require consistent effort. Check back in regularly to complete this challenge."
        );
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setShowDialog(null)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{challenge.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {challenge.type === "daily" ? (
            <FormControl>
              <FormLabel>
                How many {challenge.objective.object} did you recycle today?
              </FormLabel>
              <Input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </FormControl>
          ) : (
            <Checkbox
              isChecked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            >
              Did you refrain from using {challenge.objective.object} this week?
            </Checkbox>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} backgroundColor="#78944c">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ChallengeModal;
