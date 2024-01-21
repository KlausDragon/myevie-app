import Nav from "../components/Nav";
import "../scss/_challenges.scss";
import {
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
  const {
    isOpen: isBottlesModalOpen,
    onOpen: onBottlesModalOpen,
    onClose: onBottlesModalClose,
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

  const submitBottlesRecycled = () => {};

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
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Enter the number of bottles or cans you recycled today.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={submitRecyclingPlant()}
                >
                  Submit
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
                  This challenge will unlock again in 6 days. For every car-free
                  day, you will gain 1000 EXP.{" "}
                </p>
                <p>NOTE: This is a weekly challenge.</p>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={submitCarFreeDay()}>
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
