import Nav from "../components/Nav";
import "../scss/_challenges.scss";
import { useState } from "react";
import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function Challenges() {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const {
    isOpen: isBottlesModalOpen,
    onOpen: onBottlesModalOpen,
    onClose: onBottlesModalClose,
  } = useDisclosure();

  const {
    isOpen: isSuccessModalOpen,
    onOpen: onSuccessModalOpen,
    onClose: onSuccessModalClose,
  } = useDisclosure();

  const {
    isOpen: isCarFreeModalOpen,
    onOpen: onCarFreeModalOpen,
    onClose: onCarFreeModalClose,
  } = useDisclosure();

  const {
    isOpen: isRecyclingPlantModalOpen,
    onOpen: onRecyclingPlantModalOpen,
    onClose: onRecyclingPlantModalClose,
  } = useDisclosure();

  const submitBottlesRecycled = () => {
    if (count > 0) {
      console.log("Bottles recycled: ", count);
      onBottlesModalClose();
      onSuccessModalOpen();
    }
  };

  const submitCarFreeDay = () => {};

  const submitRecyclingPlant = () => {};

  return (
    <div className="challenges-wrapper">
      <h1>Eco Challenges:</h1>
      <p>Click on each challenge to learn more!</p>
      <div className="challenges">
        <div className="bottle-recycle">
          <h2>Bottles Recycled</h2>
          <Button onClick={onBottlesModalOpen}>daily challenge</Button>
          <Modal isOpen={isBottlesModalOpen} onClose={onBottlesModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Enter the number of bottles or cans you recycled today.
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex justify="center" align="center">
                  <Button onClick={handleDecrement}>-</Button>
                  <Text fontSize="2xl" mx={4}>
                    {count}
                  </Text>
                  <Button onClick={handleIncrement}>+</Button>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={submitBottlesRecycled}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isSuccessModalOpen} onClose={onSuccessModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Good work! Evie is growing...</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Keep recycling to watch her evolve.</Text>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    onSuccessModalClose(); /* Navigate to MyEvie if necessary */
                  }}
                >
                  View MyEvie
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="car-free-day">
          <h2>Car-Free Day</h2>
          <Button onClick={onCarFreeModalOpen}>weekly challenge</Button>
          <Modal isOpen={isCarFreeModalOpen} onClose={onCarFreeModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>
                  Did you refrain from driving today? If so, check the box
                  below:
                </p>
                <label for="car-free">Car-Free Day </label>
                <input type="checkbox" name="car-free" id="car-free" />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={submitCarFreeDay}>
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="recycling-plant">
          <h2>Recycling Plant</h2>
          <Button onClick={onRecyclingPlantModalOpen}>weekly challenge</Button>
          <Modal
            isOpen={isRecyclingPlantModalOpen}
            onClose={onRecyclingPlantModalClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Enter the</p>
                <input type="text" name="name" />
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={submitRecyclingPlant}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      <p>More challenges to come...</p>
      <Nav />
    </div>
  );
}

export default Challenges;
